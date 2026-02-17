import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LeaderProfile = ({ 
  name, 
  title, 
  image, 
  message, 
  positions, 
  backgroundColor = 'bg-white',
  imagePosition = 'left', // 'left' or 'right'
  accentColor = '#00AEEF',
  universities = [] // Array of university logos
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isLeft = imagePosition === 'left';

  return (
    <section ref={ref} className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${isLeft ? 'order-1' : 'order-1 md:order-2'}`}
          >
            <div className="relative">
              <img 
                src={image} 
                alt={`${name} - ${title}`}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div 
                className={`absolute -bottom-4 ${isLeft ? '-right-4' : '-left-4'} text-white px-6 py-3 rounded-xl shadow-lg`}
                style={{ background: `linear-gradient(to bottom right, ${accentColor}, ${accentColor}dd)` }}
              >
                <p className="font-bold">{title}</p>
              </div>
            </div>

            {/* University Logos (if any) */}
            {universities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 mt-8"
              >
                {universities.map((uni, index) => (
                  <img
                    key={index}
                    src={uni}
                    alt="University"
                    className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${isLeft ? 'order-2' : 'order-2 md:order-1'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              {name}
            </h2>
            <p 
              className="text-xl font-semibold mb-6"
              style={{ color: accentColor }}
            >
              {title}
            </p>

            {/* Message/Bio */}
            <div className="space-y-4 text-[#666666] leading-relaxed mb-8">
              {message.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Positions */}
            {positions && positions.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Key Positions</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {positions.map((position, index) => {
                    const Icon = position.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                        className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                        style={{ 
                          borderColor: inView ? accentColor : '#e5e7eb',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = accentColor}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      >
                        <div className="flex items-start gap-3">
                          <Icon 
                            className="text-xl flex-shrink-0 mt-1" 
                            style={{ color: accentColor }}
                          />
                          <div>
                            <h4 className="font-bold text-[#222222] text-sm mb-1">{position.title}</h4>
                            <p className="text-xs text-[#666666] leading-relaxed">{position.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderProfile;
