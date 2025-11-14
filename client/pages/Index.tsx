import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [focus, setFocus] = useState<null | "Spain">(null);
  const easing: [number, number, number, number] = [0.22, 0.84, 0.18, 1];
  const spain = { left: 10.9, top: 38.6, width: 11.2, height: 8.0 };
  const spainOrigin = `${spain.left + spain.width / 2}% ${spain.top + spain.height / 2}%`;
  useEffect(() => {
    if (focus === "Spain") {
      const t = setTimeout(() => setFocus(null), 2000);
      return () => clearTimeout(t);
    }
  }, [focus]);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md overflow-hidden">
        {/* Header Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Header Gradient */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(20px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "-10%",
              top: "-20%",
              width: "200px",
              height: "100px",
              opacity: 0,
            }}
            animate={{
              left: ["-10%", "0%", "-5%", "5%"],
              top: ["-20%", "-10%", "-25%", "-15%"],
              opacity: [0, 0.3, 0.5, 0.2],
              scale: [0.8, 1.2, 0.9, 1],
              rotate: [0, 10, -5, 15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(252,147,147,0.15) 0%, rgba(255,182,193,0.1) 70%, rgba(255,240,245,0.05) 100%)",
                borderRadius: "50% 60% 40% 70%",
              }}
            />
          </motion.div>

          {/* Right Header Gradient */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(25px)",
              willChange: "transform, opacity",
            }}
            initial={{
              right: "-15%",
              top: "-30%",
              width: "250px",
              height: "120px",
              opacity: 0,
            }}
            animate={{
              right: ["-15%", "-5%", "-12%", "-8%"],
              top: ["-30%", "-20%", "-35%", "-25%"],
              opacity: [0, 0.4, 0.3, 0.35],
              scale: [0.7, 1.3, 0.8, 1.1],
              rotate: [0, -15, 8, -10],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.23, 1, 0.32, 1],
              delay: 2,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,160,122,0.12) 0%, rgba(252,147,147,0.15) 50%, rgba(255,228,225,0.08) 100%)",
                borderRadius: "60% 40% 55% 45%",
              }}
            />
          </motion.div>

          {/* Center Header Accent */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(15px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "40%",
              top: "-40%",
              width: "150px",
              height: "80px",
              opacity: 0,
            }}
            animate={{
              left: ["40%", "50%", "35%", "45%"],
              top: ["-40%", "-30%", "-45%", "-35%"],
              opacity: [0, 0.25, 0.4, 0.15],
              scale: [0.5, 1, 0.7, 0.9],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,182,193,0.2) 0%, rgba(252,147,147,0.1) 60%, rgba(255,240,245,0.05) 100%)",
              }}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-black"
            style={{ fontFamily: "'Abhaya Libre ExtraBold', serif" }}
          >
            JJ Perfumes
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/contact">
              <Button
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6 rounded-full text-sm sm:text-base lg:text-xl"
              >
                Contact us
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        {/* Enhanced Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary Left Elegant Blob */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(30px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "-20%",
              top: "10%",
              width: "400px",
              height: "350px",
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              left: ["-20%", "-12%", "-18%", "-10%", "-15%"],
              top: ["10%", "8%", "15%", "12%", "10%"],
              width: ["400px", "450px", "380px", "420px", "400px"],
              height: ["350px", "400px", "330px", "370px", "350px"],
              opacity: [0, 0.6, 0.8, 0.7, 0.6],
              scale: [0.8, 1, 0.9, 1.1, 1],
              rotate: [0, 8, -5, 12, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 60%, rgba(252,147,147,0.7) 0%, rgba(255,182,193,0.5) 30%, rgba(251,243,243,0.4) 60%, rgba(255,240,245,0.2) 100%)",
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
              }}
            />
          </motion.div>

          {/* Secondary Left Gradient */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(40px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "-25%",
              top: "30%",
              width: "300px",
              height: "250px",
              opacity: 0,
            }}
            animate={{
              left: ["-25%", "-15%", "-22%", "-18%"],
              top: ["30%", "25%", "35%", "28%"],
              opacity: [0, 0.4, 0.6, 0.3],
              scale: [0.6, 1.2, 0.8, 1],
              rotate: [0, -10, 15, -5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.23, 1, 0.32, 1],
              delay: 3,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,105,180,0.3) 0%, rgba(255,182,193,0.4) 25%, rgba(252,147,147,0.3) 50%, rgba(255,228,225,0.2) 100%)",
                borderRadius: "70% 30% 60% 40% / 40% 70% 30% 60%",
              }}
            />
          </motion.div>

          {/* Primary Right Elegant Blob */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(35px)",
              willChange: "transform, opacity",
            }}
            initial={{
              right: "-18%",
              top: "-5%",
              width: "380px",
              height: "420px",
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              right: ["-18%", "-8%", "-22%", "-12%", "-15%"],
              top: ["-5%", "2%", "-8%", "5%", "-2%"],
              width: ["380px", "430px", "360px", "400px", "380px"],
              height: ["420px", "480px", "400px", "450px", "420px"],
              opacity: [0, 0.7, 0.5, 0.8, 0.6],
              scale: [0.7, 1.2, 0.8, 1, 0.9],
              rotate: [0, -12, 8, -15, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.23, 1, 0.32, 1],
              delay: 1,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at 25% 40%, rgba(252,147,147,0.6) 0%, rgba(255,160,122,0.4) 35%, rgba(251,243,243,0.3) 70%, rgba(255,245,238,0.1) 100%)",
                borderRadius: "45% 55% 48% 52% / 55% 45% 60% 40%",
              }}
            />
          </motion.div>

          {/* Secondary Right Gradient */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(45px)",
              willChange: "transform, opacity",
            }}
            initial={{
              right: "-30%",
              top: "40%",
              width: "320px",
              height: "280px",
              opacity: 0,
            }}
            animate={{
              right: ["-30%", "-20%", "-28%", "-22%"],
              top: ["40%", "35%", "45%", "38%"],
              opacity: [0, 0.5, 0.3, 0.4],
              scale: [0.5, 1.3, 0.7, 1.1],
              rotate: [0, 20, -10, 15],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 5,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "conic-gradient(from 45deg, rgba(255,182,193,0.4) 0%, rgba(252,147,147,0.3) 25%, rgba(255,228,225,0.2) 50%, rgba(255,240,245,0.1) 75%, rgba(255,182,193,0.4) 100%)",
                borderRadius: "80% 20% 70% 30% / 30% 80% 20% 70%",
              }}
            />
          </motion.div>

          {/* Center Floating Particles */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(20px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "45%",
              top: "20%",
              width: "120px",
              height: "120px",
              opacity: 0,
            }}
            animate={{
              left: ["45%", "55%", "40%", "50%"],
              top: ["20%", "15%", "25%", "18%"],
              opacity: [0, 0.5, 0.7, 0.3],
              scale: [0.3, 1.2, 0.6, 0.9],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,182,193,0.5) 0%, rgba(252,147,147,0.3) 40%, rgba(255,240,245,0.1) 100%)",
              }}
            />
          </motion.div>

          {/* Bottom Floating Particle */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(25px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "60%",
              top: "70%",
              width: "150px",
              height: "150px",
              opacity: 0,
            }}
            animate={{
              left: ["60%", "65%", "58%", "62%"],
              top: ["70%", "65%", "75%", "68%"],
              opacity: [0, 0.4, 0.6, 0.3],
              scale: [0.5, 1, 0.7, 0.8],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255,160,122,0.4) 0%, rgba(252,147,147,0.3) 50%, rgba(255,228,225,0.2) 100%)",
              }}
            />
          </motion.div>

          {/* Top Accent Gradient */}
          <motion.div
            className="absolute"
            style={{
              filter: "blur(50px)",
              willChange: "transform, opacity",
            }}
            initial={{
              left: "20%",
              top: "-10%",
              width: "200px",
              height: "100px",
              opacity: 0,
            }}
            animate={{
              left: ["20%", "30%", "15%", "25%"],
              top: ["-10%", "-5%", "-12%", "-8%"],
              opacity: [0, 0.3, 0.5, 0.2],
              scale: [0.8, 1.5, 1, 1.2],
              rotate: [0, 45, -30, 20],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 6,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,182,193,0.3) 0%, rgba(252,147,147,0.4) 50%, rgba(255,240,245,0.2) 100%)",
                borderRadius: "50px",
              }}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3
              }}
              className="text-center lg:text-left"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.6
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block"
                >
                  Global Perfume 
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="block whitespace-nowrap"
                >
                  Manufacturing{" "}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-black"
                  >
                    Excellence
                  </motion.span>
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-700/80 leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.4
                }}
              >
                At JJ Perfumes International, we craft world-class fragrances
                for multiple premium brands, exporting to Europe, the Middle
                East, South Asia (including Malaysia, Singapore, Sri Lanka, and
                beyond), and the Russian region
              </motion.p>
            </motion.div>

            <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] flex items-center justify-center lg:ml-10">
              {/* Single Perfume Image */}
              <img
                src="/imgs/Group 82.png"
                alt="Perfume bottles"
                className="w-full h-full object-contain drop-shadow-2xl lg:w-4/5"
                onError={(e) => {
                  console.log('Image failed to load:', e);
                  // Fallback to jjhome1.png if Group 82.png fails
                  e.currentTarget.src = "/imgs/jjhome1.png";
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Reach & Capacity */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4"
          >
            <span className="text-black">Our </span>
            <span className="text-black">Reach</span>
            <span className="text-black"> & </span>
            <span className="text-black">Capacity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-black text-center max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed tracking-wide"
          >
            With a strong global presence and state-of-the-art manufacturing
            capabilities, we deliver excellence in fragrance creation and
            distribution.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Exporting perfumes valued at ₹5–10 crores per month",
                description:
                  "Consistent high-value exports demonstrating our market strength",
              },
              {
                title:
                  "Strong distribution network with a wide network of agents",
                description:
                  "Extensive reach through our dedicated partner network",
              },
              {
                title:
                  "Successfully launched premium perfumes in the Indian market",
                description:
                  "Establishing premium fragrance presence in a competitive market",
              },
              {
                title:
                  "Running at full production capacity due to growing international demand",
                description:
                  "Maximized production responding to global market needs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-100 rounded-xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-800/90 tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            viewport={{ once: true }}
            className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(252,147,147,0.75) 0%, rgba(251,243,243,0.75) 100%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12"
          >
            <span className="text-black">Who </span>
            <span className="text-black">We</span>
            <span className="text-black"> Are</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] lg:h-[450px]"
            >
              <img
                src="/imgs/whoweare.png"
                alt="About JJ Perfumes"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5 lg:space-y-6"
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-800/80 leading-relaxed tracking-wide">
                Based in Cochin Special Economic Zone, India, JJ Perfumes
                International is a trusted multi-brand perfume manufacturer with
                a reputation for delivering unmatched quality and creativity. We
                operate with a modern manufacturing process, equipped with
                state-of-the-art machinery, ensuring precision, consistency, and
                efficiency in every product.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800/80 leading-relaxed tracking-wide">
                The Perfume House Behind the Brands You Love
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800/80 leading-relaxed tracking-wide">
                Upcoming: Body Sprays.
                <br />
                High-end Perfumes & Eau de Parfum.
                <br />
                Upcoming: Room Fresheners & Car Fresheners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation & R&D */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-10"
                    viewBox="0 0 44 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.82326e-07 2C2.82326e-07 1.46957 0.210714 0.960859 0.585787 0.585786C0.960859 0.210714 1.46957 0 2 0H24C24.5304 0 25.0391 0.210714 25.4142 0.585786C25.7893 0.960859 26 1.46957 26 2V12H34C35.3132 12 36.6136 12.2587 37.8268 12.7612C39.0401 13.2638 40.1425 14.0003 41.0711 14.9289C41.9997 15.8575 42.7362 16.9599 43.2388 18.1732C43.7413 19.3864 44 20.6868 44 22V30C44.0005 31.2876 43.5868 32.5412 42.8201 33.5755C42.0533 34.6099 40.9741 35.3702 39.742 35.744C39.3752 36.954 38.6355 38.0172 37.6285 38.7818C36.6216 39.5465 35.3988 39.9735 34.1347 40.0018C32.8707 40.0302 31.63 39.6586 30.5897 38.9399C29.5494 38.2212 28.7628 37.1923 28.342 36H15.66C15.2392 37.1923 14.4526 38.2212 13.4123 38.9399C12.372 39.6586 11.1313 40.0302 9.86726 40.0018C8.6032 39.9735 7.38042 39.5465 6.37345 38.7818C5.36648 38.0172 4.62681 36.954 4.26 35.744C3.02751 35.3705 1.94789 34.6104 1.18074 33.576C0.413583 32.5416 -0.000394661 31.2878 2.82326e-07 30V22H12C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20C14 19.4696 13.7893 18.9609 13.4142 18.5858C13.0391 18.2107 12.5304 18 12 18H2.82326e-07V14H8C8.53043 14 9.03914 13.7893 9.41421 13.4142C9.78929 13.0391 10 12.5304 10 12C10 11.4696 9.78929 10.9609 9.41421 10.5858C9.03914 10.2107 8.53043 10 8 10H2.82326e-07V2ZM26 32H28.342C28.7374 30.8809 29.4558 29.9042 30.4064 29.1935C31.3569 28.4827 32.4969 28.0699 33.6822 28.0071C34.8674 27.9444 36.0446 28.2346 37.0649 28.841C38.0852 29.4475 38.9027 30.3429 39.414 31.414C39.7891 31.039 39.9999 30.5304 40 30V22C40 20.4087 39.3679 18.8826 38.2426 17.7574C37.1174 16.6321 35.5913 16 34 16H26V32ZM12 34C12 33.4696 11.7893 32.9609 11.4142 32.5858C11.0391 32.2107 10.5304 32 10 32C9.46957 32 8.96086 32.2107 8.58579 32.5858C8.21071 32.9609 8 33.4696 8 34C8 34.5304 8.21071 35.0391 8.58579 35.4142C8.96086 35.7893 9.46957 36 10 36C10.5304 36 11.0391 35.7893 11.4142 35.4142C11.7893 35.0391 12 34.5304 12 34ZM32.586 32.586C32.2109 32.961 32.0001 33.4696 32 34C31.9999 34.4627 32.1602 34.9111 32.4537 35.2689C32.7472 35.6266 33.1556 35.8716 33.6094 35.9619C34.0632 36.0523 34.5343 35.9825 34.9425 35.7645C35.3506 35.5464 35.6705 35.1936 35.8476 34.7661C36.0248 34.3387 36.0482 33.863 35.914 33.4202C35.7797 32.9774 35.4961 32.5948 35.1114 32.3377C34.7267 32.0805 34.2648 31.9647 33.8043 32.01C33.3438 32.0553 32.9132 32.2589 32.586 32.586Z"
                      fill="#1E1E1E"
                      fillOpacity="0.75"
                    />
                  </svg>
                ),
                title: "Transportation & Packaging Excellence",
                description:
                  "At JJ Perfumes International, our commitment to quality continues well beyond the manufacturing process. Every fragrance we produce is packaged with meticulous care using shock-resistant, leak-proof materials to safeguard against damage during handling and transit. For large-scale exports, products are securely loaded into trailers and shipping containers, following strict safety protocols to ensure stability throughout long-haul sea transportation. When speed is essential, we utilize trusted air freight partners for fast and secure worldwide delivery. In cases where temperature sensitivity matters, we employ climate-controlled logistics to preserve the integrity of each fragrance. This integrated approach to packaging and transportation guarantees that every shipment reaches its destination on time, in perfect condition, and ready for sale.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.75 15.75H26.25V5.25C26.25 3.85761 25.6969 2.52226 24.7123 1.53769C23.7277 0.553123 22.3924 0 21 0C19.6076 0 18.2723 0.553123 17.2877 1.53769C16.3031 2.52226 15.75 3.85761 15.75 5.25L15.9364 15.75H5.25C3.85761 15.75 2.52226 16.3031 1.53769 17.2877C0.553123 18.2723 0 19.6076 0 21C0 22.3924 0.553123 23.7277 1.53769 24.7123C2.52226 25.6969 3.85761 26.25 5.25 26.25L15.9364 26.0636L15.75 36.75C15.75 38.1424 16.3031 39.4777 17.2877 40.4623C18.2723 41.4469 19.6076 42 21 42C22.3924 42 23.7277 41.4469 24.7123 40.4623C25.6969 39.4777 26.25 38.1424 26.25 36.75V26.0636L36.75 26.25C38.1424 26.25 39.4777 25.6969 40.4623 24.7123C41.4469 23.7277 42 22.3924 42 21C42 19.6076 41.4469 18.2723 40.4623 17.2877C39.4777 16.3031 38.1424 15.75 36.75 15.75Z"
                      fill="#1E1E1E"
                      fillOpacity="0.75"
                    />
                  </svg>
                ),
                title: "Research & Development Excellence",
                description:
                  "Innovation is the foundation of our success at JJ Perfumes International. Our advanced research and development facilities are equipped with modern analytical tools that allow us to create fragrances with unmatched precision, consistency, and character. We closely monitor global fragrance trends and consumer preferences to develop scents that resonate with diverse international markets. By collaborating with world-class suppliers, we gain access to rare and premium ingredients that elevate our creations. Each new formulation undergoes rigorous stability, performance, and sensory testing to ensure long-lasting quality and appeal. Through this dedication to research and innovation, we not only meet the expectations of our clients but consistently exceed them, setting new benchmarks in the perfume manufacturing industry.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-gray-100 rounded-xl p-6 sm:p-8 lg:p-10 shadow-md"
              >
                <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="pt-6 sm:pt-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-5 lg:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-black">Our </span>
            <span className="text-black">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Bespoke Fragrance Development",
                description:
                  "Custom formulations designed exclusively for your brand",
              },
              {
                title: "Private Label Manufacturing",
                description:
                  "Full-service production from concept to finished product",
              },
              {
                title: "Global Ingredient Sourcing",
                description:
                  "Premium oils and essences from renowned regions",
              },
              {
                title: "Quality & Compliance",
                description:
                  "FRA standards, regulatory expertise, and strict quality control.",
              },
              {
                title: "Packaging & Design Support",
                description:
                  "Elegant, brand-specific presentation to match your vision",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                {/* Modern card container */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-gray-200">
                  {/* Icon placeholder */}
                 
                  
                  {/* Content */}
                  <div className="space-y-3 text-center">
                    <h3 className="font-bold text-gray-900 text-xl leading-tight text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" text-center text-4xl lg:text-5xl font-bold mb-12 text-black"
          >
            Quality Standards We Follow
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 max-w-7xl mx-auto">
            {/* Development Quality */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                opacity: { duration: 0.6 }
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden h-[400px] lg:h-[502px] flex-1"
              style={{ borderRadius: "15px", perspective: "1000px" }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c7af03dd6ca395e6adaf5603907a8921aeb7b0c8?width=818"
                alt="Development Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 p-5">
                <h3
                  className="text-white font-bold mb-2"
                  style={{
                    fontSize: "32px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Development Quality
                </h3>
                <p
                  className="text-white max-w-[385px]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.7px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  We ensure every fragrance is developed with meticulous
                  attention to detail, blending the finest raw materials with
                  expert formulation techniques. Our R&D team focuses on
                  creating long-lasting, well-balanced scents that cater to
                  diverse global tastes
                </p>
              </div>
            </motion.div>

            {/* Export Quality */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                scale: { duration: 0.6 }
              }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden h-[400px] lg:h-[502px] flex-1"
              style={{ borderRadius: "15px" }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fdea1b15eb136841fb1c025d4f3eef08082a8024?width=818"
                alt="Export Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 p-5">
                <h3
                  className="text-white font-bold mb-2"
                  style={{
                    fontSize: "32px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Export Quality
                </h3>
                <p
                  className="text-white max-w-[385px]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.7px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  All our products meet international packaging and compliance
                  standards, ensuring they arrive in perfect condition and
                  maintain consistent performance in every market. Our processes
                  are built to satisfy the demands of high-end international
                  brands.
                </p>
              </div>
            </motion.div>

            {/* Innovation Quality */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                opacity: { duration: 0.6 }
              }}
              whileHover={{
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden h-[400px] lg:h-[502px] flex-1"
              style={{ borderRadius: "15px", perspective: "1000px" }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/73c43e1508194607d2c01062df5d0f45d8a6ab13?width=818"
                alt="Innovation Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 p-5">
                <h3
                  className="text-white font-bold mb-2"
                  style={{
                    fontSize: "36px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Innovation Quality
                </h3>
                <p
                  className="text-white max-w-[385px]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.7px",
                    textShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  We continuously push the boundaries of fragrance creation with
                  cutting-edge research and innovative techniques. Our R&D team
                  explores new ingredients and trends to deliver unique,
                  trendsetting scents that captivate global markets
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-black">Our </span>
            <span className="text-black">Global</span>
            <span className="text-black"> Presence</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="w-full aspect-square max-w-xs sm:max-w-md lg:max-w-2xl mx-auto relative" style={{ filter: "drop-shadow(0 1px 50px rgba(0, 0, 0, 0.30))" }} onClick={() => setFocus(null)}>
              <motion.div
                className="relative w-full h-full"
                style={{ transformOrigin: focus === "Spain" ? spainOrigin : "50% 50%" }}
                animate={{ scale: focus === "Spain" ? 1.25 : 1 }}
                transition={{ duration: 0.6, ease: easing }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5eba2291e597970b3496d0d56a4f1bdaa5642d6f?width=1814"
                  alt="Global map"
                  className="w-full h-full object-contain"
                  style={{ filter: "blur(1px)" }}
                />
                {/* Saudi Arabia - Red */}
                <svg className="absolute" style={{ width: "18.6%", height: "14.9%", left: "49.7%", top: "50.7%" }} viewBox="0 0 170 137" fill="none">
                  <path d="M0.5 23V35H1L1.70744 35.5H2.5L3.5 36.5C3.66667 36.6667 4 37.1 4 37.5C4 38 4.5 38 4.5 38.5C4.5 39 5 39 5.5 39.5C5.9 39.9 6 40.3333 6 40.5C6.16667 40.6667 6.5 41.1 6.5 41.5C6.5 42 7.5 42.5 8 42.5C8.5 42.5 8.5 43 8.5 43.5C8.5 44 9 44 10 45L10.5 45.5L11 46.5L12 47.5C12.5 48 12.5 48 12.5 48.5C12.5 48.9 12.8333 49 13 49C13.1667 49.1667 13.6 49.7 14 50.5C14.5 51.5 14.5 51 14.5 51.5C14.5 52 15 52 15 52.5C15 52.9 15.3333 53 15.5 53C15.8333 53.5 16.5 54.6 16.5 55C16.5 55.4 16.8333 55.5 17 55.5L17.5 57C18.3333 57.5 20 58.6 20 59C20 59.4 20.3333 59.8333 20.5 60V61.5V62.5V63.5V64.5L21 65L22 67L23.5 68L24.5 69L28.5 72.5L29.5 73L30 74.5L31 76L32 77L32.5 78.5L33.5 79.5L34.5 80.5L35 81.5L35.5 82L36 91V93V94L37 96.5L38 98.5L42 102L45 104.5L51 111L52 114L53.5 117.5L55.5 121L58 124.5C58.5 125 59.5 126.1 59.5 126.5C59.5 126.9 60.5 129.333 61 130.5L62.5 135L65 135.5L66.5 135V130L67.5 127.5L69.5 126.5H73L75.5 127L79.5 126.5L83.5 127.5L84.5 128L93 128.5L95 129H96.5L98 130L99 131L101 131.5L102 130L106.5 124.5L107.5 123L108.5 122.5L109.5 121.5L111.5 120L113.5 119L116.5 117L131.5 116.5L141.5 113.5L148 111.5L160.5 107.5L164 105.5L165.5 103L167 100L169 92V87L168 85.5L167 84.5H166H165H164L160.5 84L155 83.5H153.5C153 83.5 152 83.5 151 83C150 82.5 150 83 149.5 83C149 83 149 82.5 148.5 82.5C148 82.5 147.5 82.5 146.5 82C145.5 81.5 145 81.5 144.5 81.5C144 81.5 144 81 143.5 80.5C143 80 142.5 80 142 79.5C141.6 79.1 141.167 78 141 77.5L140 76.5L139.5 73.5L138 72L136.5 70L135.5 68H135H132.5C132 68 131 66.5 130.5 66C130.1 65.6 129.333 64.5 129 64L127.5 62L125 57L124.5 55.5L125 54.5L125.5 53.5L125 51.5V50L116 40.5L113.5 38.5L113 35.5L112 32.5H105.5L100 28.5L92.5 28L82.5 27.5L46.5 2.5L43.5 0.5H37L33.5 1L32 2L29.5 3L23.5 3.5L19 6.5L21 8L26 12L25.5 15.5L22 18.5L16.5 19.5L11.5 26H7.5L0.5 23Z" fill="#ED1C1C" stroke="#FF4848"/>
                </svg>
                {/* Spain - Blue (interactive) */}
                <motion.svg
                  className="absolute cursor-pointer"
                  style={{ width: "11.2%", height: "8.0%", left: `${spain.left}%`, top: `${spain.top}%` }}
                  viewBox="0 0 102 73"
                  fill="none"
                  onClick={(e) => { e.stopPropagation(); setFocus("Spain"); }}
                  animate={{ scale: focus === "Spain" ? 1.15 : 1 }}
                  transition={{ duration: 0.6, ease: easing }}
                >
                  <path d="M4.5 16.4999L3.5 15.9999V13.5V11L2 9L0.5 6.5V4.5H1.5L6 3L7.5 2.5L8.5 1L9.5 0.5H10.5H12L12.5 1L16 2.5L27.5 3H39L42 2.5L48.5 3.5H50.2218H53C54.5 3.5 54.5 4 55.5 4C56.5 4 57.5 4.5 58.5 4.5C59.5 4.5 61 5.5 62 5.5C63 5.5 63.5 6.5 64 6.5C64.5 6.5 66 8 66.5 8C66.9 8 68.3333 8.33333 69 8.5L72 11C72.1667 11 72.6 11.1 73 11.5C73.4 11.9 73.8333 11.6667 74 11.5C74.8333 11.6667 76.6 12 77 12C77.5 12 78 12 78.5 11.5C78.9 11.1 79.5077 10.3333 79.7616 10C79.9274 10 80.5073 9.9 81.5 9.5C82 9.5 82 9.5 82 10C82 10.5 83 10.5 84 11L85 11.5H86C86.5 11.5 87.5 12 88.5 12.5C89.5 13 89.5 12.5 91 12.5H92.5H95H98C98.5 12.5 100 13.5 100.5 13.5C100.9 13.5 101.333 13.6637 101.5 13.7456V14.4998C101.5 14.9998 101.2 16.0998 100 16.4998C98.5 16.9998 99.5 16.9998 98.5 17.4998C97.5 17.9998 97.5 17.9998 96.5 18.9998C95.5 19.9998 95.5 19.9998 94.5 20.4998C93.7 20.8998 93.8333 21.6665 94 21.9998C93.6667 22.1665 92.9 22.4998 92.5 22.4998H89C87.5 22.4998 88.5 22.4998 85 23.4998C81.5 24.4998 84 23.9998 82.5 24.4998C81.3 24.8998 81.6667 25.3332 82 25.4998C82 25.9998 81.9 27.0998 81.5 27.4998C81.1 27.8998 80.6667 28.9998 80.5 29.4998C79.1667 30.4998 76.4 32.5998 76 32.9998L75.5 33.4998C74.9305 33.9998 73.7332 35.0998 73.5 35.4998C73.2086 35.9998 73 36.4998 73 37.4998V39.9998V42.4998V43.9998C73 44.4998 73.5 44.4998 73.5 44.9998C73.5 45.3998 73.8333 46.1665 74 46.4998V47.4998V47.9998L72 48.9998C71 49.4998 70.5 49.9998 70 50.9998C69.5 51.9998 69.5 51.9998 69 52.4998C68.6 52.8998 68.5 53.6665 68.5 53.9998C68.5 54.4998 68.4 55.5569 68 55.7853C67.6 56.0137 67.8333 56.6902 68 56.9998C68 57.3332 67.9 58.0998 67.5 58.4998C67 58.9998 67 58.9998 65.5 58.9998C65 58.9998 64.5 59.4998 64 59.4998C63.6 59.4998 62.5 60.1665 62 60.4998L56 66.4998C52.3333 66.3332 44.4 66.0998 42 66.4998C41.6 66.4998 41.1667 66.8332 41 66.9998C40.5 67.1665 39.4 67.5998 39 67.9998C38.5 68.4998 38 68.4998 37.5 68.4998C37 68.4998 37 69.4998 36.5 69.4998H36C35.6667 69.6665 34.8 69.8998 34 69.4998C33 68.9998 33.5 69.9998 32.5 69.9998H32L31 70.4998L30.5 70.9998L30 71.4998L29.5 71.9998H28.5L27.5 71.4998C27.1667 71.3332 26.4 70.8998 26 70.4998L23.5 67.9998L22.5 66.9998C22 66.4998 22 66.4998 21 64.4998C20.3574 63.2146 20.3342 63.3747 20.3997 63.5858C20.4595 63.6229 20.5 63.6746 20.5 63.7455C20.5 63.8364 20.4361 63.7032 20.3997 63.5858C20.2879 63.5164 20.1086 63.4979 20 63.4998C19.6667 63.3332 18.8513 62.8998 18.2567 62.4998C17.6621 62.0998 17.1712 62.3332 17 62.4998H15V61.4998L14.5 58.9998L15 57.9998L16 56.4998L17 55.9998L18 55.4998V54.9998L17.5 53.4998L17 52.4998L16.5 51.9998L16 51.4998L15.5 50.4998L16 49.4998L16.5 48.9998L18 47.9998L18.5 47.4998L18 45.9998L15 41.9998V40.9998L15.5 39.9998L18 40.4998V39.4998L18.5 38.9998V38.4998V37.9998V36.4998V34.9998L19 33.9998L19.5 29.9998L19 28.4998H18.5L19 27.4998L18.5 26.7431L19 25.9998L19.5 25.4998L20 24.9998L21 23.9998H22L22.5 23.4998C22.6667 23.4998 23 23.3998 23 22.9998L23.5 22.4998L24 21.9998V21.4998C23.8333 21.1665 23.5 20.3998 23.5 19.9998C23.5 19.4998 23.5 19.9998 23 19.4998C23 19.3332 22.9 18.7998 22.5 17.9998C22.1 17.1998 22 17.3332 22 17.4998L21 16.4998C20.6 16.0998 20.5 16.3332 20.5 16.4998L20 15.9998C19.5 15.4998 19.5 15.9998 18.5 15.9998H18C17.5 15.9998 17 16.4998 16.5 16.4999C16.1 16.4999 16 16.8332 16 16.9998H15.5L15 17.4998L14.5 16.9998H12.5H9.5C9.33333 16.9998 9 16.8998 9 16.4999V15.9998C8.83333 15.8332 8.5 15.3998 8.5 14.9999C8.5 14.5999 8.16667 14.8332 8 14.9998L7.5 14.4999C7 13.9999 7 14.4999 6 14.4999C5.2 14.4999 5.33333 14.8332 5.5 14.9999C5.5 15.1666 5.4 15.4999 5 15.4999H4.5V16.4999Z" fill="#113FBD" stroke="#113FBD"/>
                </motion.svg>

                {/* Pulse ring + tooltip for Spain */}
                {focus === "Spain" && (
                  <>
                    <motion.div
                      className="absolute rounded-full border-2 border-[#113FBD]"
                      style={{
                        width: "7%",
                        height: "7%",
                        left: `${spain.left + spain.width / 2}%`,
                        top: `${spain.top + spain.height / 2}%`,
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                      initial={{ opacity: 0.9, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 0.9, ease: easing }}
                    />
                    <motion.div
                      className="absolute px-3 py-1 rounded-md bg-white text-gray-800 text-sm shadow-md"
                      style={{
                        left: `${spain.left + spain.width / 2}%`,
                        top: `${spain.top - 4}%`,
                        translateX: "-50%",
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: easing }}
                    >
                      Spain
                    </motion.div>
                  </>
                )}

                {/* Russia - Orange */}
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/dfe3751a6f16173f29db855980d15e08ebf09d75?width=962" className="absolute" style={{ width: "53.0%", height: "36.9%", left: "43.4%", top: "4.2%" }} alt="Russia" />
                {/* Qatar - Cyan */}
                <svg className="absolute" style={{ width: "0.9%", height: "1.3%", left: "64.1%", top: "56.8%" }} viewBox="0 0 8 13" fill="none">
                  <path d="M0.5 6V9L1.5 10.5L2.5 11L4 12L5.5 11.5L6 11L7 9.5V8.5L7.5 6.5V3.5L7 2L5.5 0.5C5.33333 0.5 4.9 0.6 4.5 1C4 1.5 3.5 1.5 3.5 2C3.5 2.5 2.5 2.5 2.5 3C2.5 3.4 1.83333 3.83333 1.5 4V5.5L0.5 6Z" fill="#1CB6ED" stroke="#1CB6ED"/>
                </svg>
                {/* Bahrain - Green */}
                <svg className="absolute" style={{ width: "1.1%", height: "1.3%", left: "63.6%", top: "55.5%" }} viewBox="0 0 10 12" fill="none">
                  <path d="M1 6.5L0.5 5V4.5L1 3.5L1.5 1.5L2.5 0.5H3.5H4H4.5C4.66667 0.666667 5.2 1.3 6 2.5C6.8 3.7 7 4.33333 7 4.5C7.16667 5 7.6 6.1 8 6.5C8.4 6.9 8.83333 7.66667 9 8C8.66667 8.33333 7.9 9 7.5 9C7.1 9 7 9.66667 7 10C6.66667 10.3333 5.9 11 5.5 11C5.1 11 4.33333 11.3333 4 11.5H3H2.5L1.5 11V10V8L1 6.5Z" fill="#00652D" stroke="#00652D"/>
                </svg>
                {/* Kuwait - Purple */}
                <svg className="absolute" style={{ width: "1.8%", height: "1.7%", left: "60.4%", top: "52.7%" }} viewBox="0 0 16 15" fill="none">
                  <path d="M9.80902 14H15.309L14.809 12.5L14.309 11.5L13.309 8.5L12.309 7L11.809 4.5L11.309 2L10.309 1L8.30902 0.5C8.14235 0.5 7.70902 0.6 7.30902 1C6.80902 1.5 6.80902 1 6.30902 2C5.80902 3 5.30902 3 4.80902 3.5C4.30902 4 3.80902 4 3.30902 4.5C2.80902 5 2.30902 5.5 2.30902 6C2.30902 6.4 1.97569 6.83333 1.80902 7L0.809021 9H2.30902C2.64235 9.16667 3.40902 9.5 3.80902 9.5C4.20902 9.5 5.30902 10.1667 5.80902 10.5L6.80902 11L8.30902 12L9.80902 14Z" fill="#8A38F5" stroke="#8A38F5"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[1185px] mx-auto"
          >
            {/* Background bar */}
            <div className="w-full h-[30px] sm:h-[35px] lg:h-[45px] rounded-[25px] bg-[#F2F2F2]" />

            {/* Circles grid (centred on the bar) */}
            <div className="absolute inset-x-0 top-0 h-[30px] sm:h-[35px] lg:h-[45px] grid grid-cols-6 place-items-center">
              {[
                { name: "Spain", color: "#113FBD" },
                { name: "Saudi", color: "#ED1C1C" },
                { name: "Qatar", color: "#1CB6ED" },
                { name: "Bahrain", color: "#00652D" },
                { name: "Kuwait", color: "#8A38F5" },
                { name: "Russia", color: "#D77F04" },
              ].map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px] rounded-full"
                  style={{ backgroundColor: country.color }}
                />
              ))}
            </div>

            {/* Labels grid (perfectly under each circle) */}
            <div className="mt-3 sm:mt-4 lg:mt-5 grid grid-cols-6">
              {[
                { name: "Spain", size: { mobile: 14, sm: 18, lg: 32 } },
                { name: "Saudi", size: { mobile: 16, sm: 20, lg: 36 } },
                { name: "Qatar", size: { mobile: 16, sm: 20, lg: 36 } },
                { name: "Bahrain", size: { mobile: 16, sm: 20, lg: 36 } },
                { name: "Kuwait", size: { mobile: 16, sm: 20, lg: 36 } },
                { name: "Russia", size: { mobile: 16, sm: 20, lg: 36 } },
              ].map((item, index) => (
                <p
                  key={index}
                  className="justify-self-center text-center text-[#1E1E1E] leading-none text-sm sm:text-base lg:text-4xl"
                  style={{ opacity: 0.8, fontWeight: 400 }}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="text-black-800/80">What Our </span>
            <span className="text-black-500">Clients</span>
            <span className="text-black-800/80"> Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sophia",
                text: "JJ Perfume — classy scent with a lasting impression. Perfect for everyday wear, yet feels absolutely luxurious",
                rating: 5,
              },
              {
                name: "Amir",
                text: "Subtle, fresh, and stays all day. JJ Perfume just became my go-to fragrance",
                rating: 5,
              },
              {
                name: "Michael",
                text: "Soft, elegant, and unforgettable JJ Perfume leaves a trace of charm wherever you",
                rating: 4,
              },
              {
                name: "John",
                text: "JJ Perfume — classy scent with a lasting impression. Perfect for everyday wear, yet feels absolutely luxurious",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
              >
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 tracking-wider">
                    {testimonial.name}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-800/50 mb-4 sm:mb-6 tracking-wider leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "#FFB406" : "#D7D7D7"}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-100 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Contact us
              </h3>
              <p className="text-base sm:text-m lg:text-l text-gray-800 leading-relaxed tracking-wide">
                JJ Perfumes International SDF 16, Ground Floor Cochin Special
                Economic Zone Kakkanad, Cochin, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Information
              </h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-m lg:text-l text-gray-800 tracking-wide leading-relaxed">
                <Link to="/privacy-policy" className="block hover:text-gray-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="block hover:text-gray-600 transition-colors">
                  Terms and Conditions
                </Link>
                <Link to="/shipping-policy" className="block hover:text-gray-600 transition-colors">
                  Shipping and Delivery Policy
                </Link>
                <Link to="/return-policy" className="block hover:text-gray-600 transition-colors">
                  Return, Cancellation and Payment Policy
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300"
          >
            <p className="text-base sm:text-m lg:text-l text-black/75 tracking-wide">
              rjaydev@jjperfumes.com
            </p>
            <p className="text-base sm:text-m lg:text-l text-black/75 tracking-wide">
              rjaydev@gmail.com
            </p>
            <p className="text-base sm:text-m lg:text-l text-gray-800 tracking-wide">
              +91 96458 98599
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
