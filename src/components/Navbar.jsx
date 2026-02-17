import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import kiteLogo from '../assets/kite_logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      megaMenu: [
        {
          title: 'Safety Matches',
          items: [
            { name: 'Kite Matches', href: '/products/kite-matches' },
            { name: 'Olympia', href: '/products/olympia' },
            { name: 'Tanga', href: '/products/tanga' },
            { name: 'Bird', href: '/products/bird' },
            { name: 'Party', href: '/products/party' },
          ],
        },
        {
          title: 'Detergent Products',
          items: [
            { name: 'Kite Glow', href: '/products/kite-glow' },
            { name: 'BURQ Action', href: '/products/burq-action' },
            { name: 'Vero Detergent', href: '/products/vero' },
          ],
        },
        {
          title: 'Dish Wash',
          items: [
            { name: 'Kite Dishwash Bar', href: '/products/kite-dishwash' },
          ],
        },
        {
          title: 'Export Brands',
          items: [
            { name: 'Simba Matches', href: '/products/simba' },
            { name: 'Chinook', href: '/products/chinook' },
            { name: 'Helicopter', href: '/products/helicopter' },
          ],
        },
      ],
    },
    {
      name: 'Divisions',
      href: '/textile-division',
      dropdown: [
        { name: 'Textile Division', href: '/textile-division' },
        { name: 'FMCG Division', href: '/fmcg-division' },
        { name: 'Board Division', href: '/board-division' },
        { name: 'Real Estate', href: '/real-estate' },
      ],
    },
    { name: 'Export', href: '/export' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center active:border-0">
              <img 
                src={kiteLogo} 
                alt="Aziz Group Logo" 
                className="w-24 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => (item.dropdown || item.megaMenu) && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-300 flex items-center gap-1 py-2 focus:outline-none ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-text-primary hover:text-primary'
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.megaMenu) && <FaChevronDown className="text-xs" />}
                </Link>

                {/* Mega Menu */}
                {item.megaMenu && openDropdown === item.name && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                    <div className="grid grid-cols-4 gap-6 p-6">
                      {item.megaMenu.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((menuItem) => (
                              <li key={menuItem.name}>
                                <Link
                                  to={menuItem.href}
                                  className={`block text-sm px-3 py-2 rounded transition-all duration-200 focus:outline-none ${
                                    isActive(menuItem.href)
                                      ? 'text-primary bg-accent-tint font-semibold'
                                      : 'text-text-secondary hover:text-primary hover:bg-accent-tint'
                                  }`}
                                >
                                  {menuItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 -mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className={`block px-4 py-3 transition-all duration-200 focus:outline-none ${
                          isActive(dropdownItem.href)
                            ? 'text-primary bg-accent-tint font-semibold'
                            : 'text-text-primary hover:bg-accent-tint hover:text-primary'
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md focus:outline-none ${
                isActive('/contact')
                  ? 'bg-primary-600 text-text-white shadow-lg scale-95'
                  : 'bg-primary text-text-white hover:bg-primary-600 hover:shadow-lg active:scale-95'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-primary transition-colors focus:outline-none">
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-light">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
                    isActive(item.href)
                      ? 'text-primary bg-gray-100'
                      : 'text-text-primary hover:text-primary hover:bg-gray-100'
                  }`}
                  onClick={() => !(item.dropdown || item.megaMenu) && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.megaMenu && (
                  <div className="pl-4 space-y-3 mt-2">
                    {item.megaMenu.map((category) => (
                      <div key={category.title}>
                        <h4 className="text-xs font-bold text-primary mb-1 uppercase">
                          {category.title}
                        </h4>
                        <div className="space-y-1">
                          {category.items.map((menuItem) => (
                            <Link
                              key={menuItem.name}
                              to={menuItem.href}
                              className="block px-3 py-2 text-sm text-[#666666] hover:text-[#00AEEF] hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {menuItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-text-secondary hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className={`block w-full text-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 mt-4 focus:outline-none ${
                isActive('/contact')
                  ? 'bg-primary-600 text-text-white shadow-lg'
                  : 'bg-primary text-text-white hover:bg-primary-600 active:scale-95'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
