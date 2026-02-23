import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import match_making from '../assets/videos/match_making.mp4';

const MatchMakingSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background - Full Screen Fit */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ objectFit: 'cover' }}
        autoPlay
        loop
        muted
        playsInline
        poster={match_making}
      >
        <source src={match_making} type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/90 to-[#0095CC]/80" /> */}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-white/20 backdrop-blur-xs px-4 py-2 rounded-full mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wide">
              Manufacturing Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How Kite Matches Are Made
          </h2>
          
          <p className="text-text-white-90 text-xl md:text-2xl mb-8 leading-relaxed">
            Discover the precision, technology, and craftsmanship behind Pakistan's most trusted safety matches. 
            Over 50 years of manufacturing excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-[10px] rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-text-white-90 text-lg">Years of Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-[10px] rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">40+</h3>
              <p className="text-text-white-90 text-lg">Countries Served</p>
            </div>
            <div className="bg-white/10 backdrop-blur-[10px] rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-text-white-90 text-lg">Quality Assured</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 inline-flex items-center gap-2"
            >
              Explore Our Products
            </Link>
            <Link
              to="/fmcg-division"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00AEEF] transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
            >
              <FaPlay className="text-sm" />
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Manufacturing Process Steps */}
      <div className="absolute -bottom-5 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-sm">Wood Selection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-sm">Stick Cutting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="text-sm">Chemical Treatment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">4</div>
              <div className="text-sm">Box Packaging</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-sm">Quality Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchMakingSection;
