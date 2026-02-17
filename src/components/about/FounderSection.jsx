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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
            Our Founder
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Our founder late <strong className="text-[#222222]">Haji Aziz-ur-rehman</strong>, or (Aziz Jan) as he was popularly known, was a man of great virtue, character and principle. His teachings, to this date, are a guiding principle of our group.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
