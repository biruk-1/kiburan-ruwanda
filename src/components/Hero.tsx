import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Industry-specific content
const industries = [
  {
    title: "Tech Innovation",
    description: "Cutting-edge software solutions and digital transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Design Excellence",
    description: "Creative solutions and innovative design experiences",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Event Management",
    description: "World-class events and conferences in Rwanda",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Strategic Marketing",
    description: "Data-driven marketing solutions for the digital age",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    color: "from-green-500 to-green-700"
  }
];

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -100],
      x: [-20, 20],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
    className="absolute w-2 h-2 bg-accent rounded-full"
  />
);

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-primary to-black"
    >
      {/* Dynamic background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-orange-500/5 pointer-events-none"
          style={{ transition: 'all 0.2s ease' }}
        />
      </div>

      {/* Industry Background Image */}
      <motion.div
        key={currentIndustry}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${industries[currentIndustry].image})`,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative inline-block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-orange-500/20 rounded-xl blur-xl" />
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Kiburan is in 
              </span>{" "}
              Rwanda
            </h1>
          </motion.div>

          <motion.div
            key={currentIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${industries[currentIndustry].color} bg-clip-text text-transparent`}>
              {industries[currentIndustry].title}
            </h2>
            <p className="text-xl md:text-2xl text-textGray max-w-3xl mx-auto mb-12">
              {industries[currentIndustry].description}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore Our Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 