import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa';

const features = [
  {
    icon: FaCode,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and objectives."
  },
  {
    icon: FaMobile,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services for modern business operations."
  },
  {
    icon: FaDatabase,
    title: "Data Analytics",
    description: "Advanced data analytics and business intelligence solutions."
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A comprehensive digital marketplace for Rwanda's growing online retail sector.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking solution.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
  }
];

export default function TechnologyService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            alt="Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Empowering Rwanda's digital transformation with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto">
              Comprehensive technology services to drive your business forward in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto">
              Discover how we've helped businesses transform through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-700 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Digital Journey</h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto mb-8">
              Let's transform your business with innovative technology solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 