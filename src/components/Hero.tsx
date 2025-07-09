import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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

      {/* 3D Rotating Border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[800px] h-[800px] border border-accent/20 rounded-full"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
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
            className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-orange-500/20 rounded-xl blur-xl"
          />
          <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Kiburan
              </span>{" "}
              is Now in Rwanda
            </h1>
            <p className="text-xl md:text-2xl text-textGray max-w-3xl mx-auto mb-12">
              Empowering growth through construction, technology, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary relative group overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline relative group overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 