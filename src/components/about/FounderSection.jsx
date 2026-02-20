import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FounderSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
              Our Founder
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Our founder late <strong className="text-[#222222]">Haji Aziz-ur-rehman</strong>, or (Aziz Jan) as he was popularly known, was a man of great virtue, character and principle. His teachings, to this date, are a guiding principle of our group.
            </p>
          </motion.div>

          {/* Placeholder Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative max-w-md mx-auto">
              {/* Placeholder - Replace with actual founder image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-semibold">Founder Image</p>
                  <p className="text-sm text-gray-500 mt-2">Placeholder</p>
                </div>
              </div>
              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#00AEEF] rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
