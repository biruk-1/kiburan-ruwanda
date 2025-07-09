import { motion } from 'framer-motion';
import { FaBuilding, FaCode, FaCogs, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    icon: FaBuilding,
    title: "Construction",
    description: "Modern construction solutions with cutting-edge technology and sustainable practices.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: FaCode,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with latest technologies.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: FaCogs,
    title: "Engineering",
    description: "Innovative engineering solutions for complex technical challenges.",
    color: "from-green-500 to-green-700"
  },
  {
    icon: FaLightbulb,
    title: "Consulting",
    description: "Strategic consulting services to help your business grow and innovate.",
    color: "from-orange-500 to-orange-700"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
    <div className="relative bg-black px-6 py-8 rounded-xl border border-accent/20 backdrop-blur-sm transform transition duration-500 group-hover:-translate-y-2">
      <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <service.icon className="w-8 h-8 text-accent relative z-10" />
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
        {service.title}
      </h3>
      
      <p className="text-textGray text-center">
        {service.description}
      </p>
      
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-accent to-orange-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-textGray max-w-3xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 