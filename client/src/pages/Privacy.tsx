import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Database, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import logoPngPath from "@assets/image_1767949490600.png";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src={logoPngPath} alt="Vera Logo" className="h-10 w-auto" />
          </Link>
          
          <Link href="/">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6 leading-[1.1]">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We collect information you provide directly to us, such as when you create an account, 
                      join our waitlist, or use our skincare analysis services.
                    </p>
                    <div className="bg-white p-6 rounded-lg border border-border/50">
                      <h3 className="font-semibold text-foreground mb-3">Types of Information:</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Personal information (name, email address)</li>
                        <li>Skin profile data (skin type, concerns, conditions)</li>
                        <li>Location information (for climate-based recommendations)</li>
                        <li>Usage data and analytics</li>
                        <li>Device and browser information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use your information to provide and improve our skincare analysis services, 
                      personalize your experience, and communicate with you.
                    </p>
                    <div className="bg-white p-6 rounded-lg border border-border/50">
                      <h3 className="font-semibold text-foreground mb-3">Primary Uses:</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Provide personalized skincare recommendations</li>
                        <li>Analyze product compatibility with your skin profile</li>
                        <li>Send service updates and relevant communications</li>
                        <li>Improve our AI algorithms and service quality</li>
                        <li>Ensure platform security and prevent fraud</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-4">Data Protection & Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement industry-standard security measures to protect your personal information 
                      from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="bg-white p-6 rounded-lg border border-border/50">
                      <h3 className="font-semibold text-foreground mb-3">Security Measures:</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Secure storage with limited access controls</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Compliance with data protection regulations</li>
                        <li>Employee training on privacy and security practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">Your Privacy Rights</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4">
                  You have the right to access, update, or delete your personal information. 
                  You can also opt out of marketing communications at any time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <span className="text-foreground/80">Access your personal data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <span className="text-foreground/80">Request data deletion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <span className="text-foreground/80">Opt out of marketing emails</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <span className="text-foreground/80">Download your data</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or how we handle your data, 
                  please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> vera.ai.skin@gmail.com</p>
                  <p className="text-foreground"><strong>Address:</strong> Vera Health Inc.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
