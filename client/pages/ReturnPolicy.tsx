import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Breadcrumb */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-gray-600 to-gray-800 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute left-20 top-20 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute right-10 top-16 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute right-32 top-32 w-8 h-8 border border-white/20 rounded-full"></div>
          
          {/* Decorative elements */}
          <div className="absolute left-1/4 top-1/4 text-pink-300/30 text-6xl">✦</div>
          <div className="absolute right-1/3 top-1/3 text-pink-300/30 text-4xl">✧</div>
          <div className="absolute left-1/3 bottom-1/4 text-pink-300/30 text-5xl">❋</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Return, Cancellation and Payment Policy
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-lg">
              <Link 
                to="/" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <ChevronRight className="w-5 h-5 text-white/60" />
              <span className="text-white font-medium">Return, Cancellation and Payment Policy</span>
            </nav>
          </motion.div>
        </div>

        {/* Decorative perfume bottle silhouette */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div className="absolute left-10 sm:left-16 lg:left-20 top-1/2 -translate-y-1/2 opacity-20">
            <div className="w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-gradient-to-b from-white/20 to-white/10 rounded-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-white/20 rounded-t-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy Content */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <div className="text-gray-800 space-y-8">
              <p className="text-lg leading-relaxed">
                Welcome to jjperfumesinternational.com, owned and operated by JJ Perfumes International. This Return, Cancellation, and Payment Policy outlines the procedures for returning products, cancelling orders, and requesting refunds.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">1. Return Policy</h2>
                <p>Once items are delivered, they cannot be returned as opened or used products cannot be reused or resold. Damages caused by neglect, improper use, or incorrect application will not be covered under this policy. We do not assume responsibility for adverse reactions or sensitivities caused by specific product ingredients. Patch tests are recommended as advised on each product packaging.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">2. Refund Policy</h2>
                <p>JJ Perfumes International is not responsible for any damage that occurs after the product has been delivered. If your order is marked as delivered but not received, report this within 3 days of delivery status. No refunds after this period. Delivery charges are non-refundable.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">3. Return Policy (Damaged in Transit)</h2>
                <p>Refund or exchange can be initiated for products damaged during transit (leakage, broken, or missing items) after claim verification. Contact customer care within 24-48 hours of receiving the damaged product for claims.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">4. Payment Policy</h2>
                <p>50% payment of the total order value should be made upfront for order confirmation. Remaining 50% should be paid upon the delivery of the order.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">9. Contacting Us</h2>
                <p>For any queries, you can reach us at:</p>
                <div className="mt-3 space-y-2">
                  <p><strong>Phone:</strong> +919645898599</p>
                  <p><strong>Email:</strong> rjaydev@jjperfumes.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 sm:py-16 lg:py-24">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Quick Links
              </h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-m lg:text-l text-gray-800 tracking-wide leading-relaxed">
                <Link to="/" className="block hover:text-gray-600 transition-colors">
                  Home
                </Link>
                <Link to="/contact" className="block hover:text-gray-600 transition-colors">
                  Contact Us
                </Link>
                <p>About Us</p>
                <p>Our Services</p>
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