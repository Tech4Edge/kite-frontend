import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompanyOverview = ({ companies }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#666666] leading-relaxed">
              <p>
                Aziz group is a long-established, well-reputed, and multi-diversified business concern of Pakistan. It started in the 50s with the trading of commodities and after having established its name in trading, the group ventured into Manufacturing in the early sixties by setting up an ice factory & cold storage.
              </p>
              <p>
                Now the group comprises a well-reputed textile-spinning mill, the largest safety match manufacturing operation in Pakistan, a laminate board (Formica) unit, a particle board (chipboard) unit, a cold storage, and a Real Estate Business.
              </p>
              <p>
                The group is largely self-financed and has an impeccable record with the financial institutions of Pakistan with sales over USD 100 million, exporting to Europe, Asia & Africa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#FFEFF9] to-white p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-[#222222] mb-6">Our Companies</h3>
            <ul className="space-y-3">
              {companies.map((company, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start group"
                >
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="text-[#666666] group-hover:text-[#222222] transition-colors duration-300">{company}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
