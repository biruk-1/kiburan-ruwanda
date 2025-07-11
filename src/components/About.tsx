import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Industries Served', value: '5' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Kiburan's expansion into Rwanda marks a significant milestone in our journey to empower
            businesses across East Africa with innovative solutions in design, technology,
            and strategic consulting.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
            <p className="text-textGray">
              To deliver exceptional value to our clients through innovative solutions
              that combine design excellence, technological advancement, and strategic expertise.
              We are committed to driving sustainable growth and fostering lasting partnerships
              in the Rwandan market.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
            <p className="text-textGray">
              To be Rwanda's leading multidisciplinary company, setting new standards in design,
              technology, and business solutions while contributing to the nation's economic
              transformation and creating opportunities for local talent.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-textGray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 