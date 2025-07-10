import { motion } from 'framer-motion';
import { FaBullhorn, FaChartPie, FaHashtag, FaPencilAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive results and engagement."
  },
  {
    icon: FaHashtag,
    title: "Social Media",
    description: "Effective social media management and content strategy for brand growth."
  },
  {
    icon: FaPencilAlt,
    title: "Content Creation",
    description: "Compelling content that tells your brand's story and connects with your audience."
  },
  {
    icon: FaChartPie,
    title: "Analytics & ROI",
    description: "Data-driven marketing decisions with clear performance metrics."
  }
];

const projects = [
  {
    title: "Brand Transformation",
    description: "Complete rebranding and digital presence overhaul for a major retailer.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    title: "Digital Campaign",
    description: "Successful multi-channel marketing campaign with measurable results.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
  }
];

export default function MarketingService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Marketing"
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
              Marketing & Branding
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building strong brands and driving growth in Rwanda's digital age.
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
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto">
              Comprehensive marketing solutions to elevate your brand and reach your target audience.
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
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Success{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto">
              Discover how we've helped brands achieve their marketing goals.
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

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-700 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Elevate Your Brand</h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto mb-8">
              Let's create a powerful marketing strategy that sets you apart.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold rounded-lg"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 