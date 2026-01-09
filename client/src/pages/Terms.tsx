import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, AlertCircle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import logoPngPath from "@assets/image_1767949490600.png";

export default function Terms() {
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6 leading-[1.1]">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Please read these terms carefully before using Vera's skincare analysis services.
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
            
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">1. Acceptance of Terms</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Vera's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
              </div>
            </motion.div>

            {/* Description of Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">2. Description of Service</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vera provides AI-powered skincare analysis services including:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Personalized skin profile analysis</li>
                  <li>Product compatibility assessments</li>
                  <li>Ingredient safety evaluations</li>
                  <li>Climate-based recommendations</li>
                  <li>Safer alternative suggestions</li>
                </ul>
              </div>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-4">3. User Responsibilities</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border border-border/50">
                      <h3 className="font-semibold text-foreground mb-3">As a user, you agree to:</h3>
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Provide accurate and truthful information</li>
                        <li>Use the service for personal, non-commercial purposes</li>
                        <li>Not attempt to reverse engineer or copy our technology</li>
                        <li>Respect the privacy and rights of other users</li>
                        <li>Comply with all applicable laws and regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medical Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-primary mb-4">4. Medical Disclaimer</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <p className="text-yellow-900 font-semibold mb-3">Important Medical Notice:</p>
                    <ul className="space-y-2 text-yellow-800">
                      <li>Vera's AI analysis is for informational purposes only and is not a substitute for professional medical advice</li>
                      <li>Always consult with a qualified dermatologist or healthcare provider for medical concerns</li>
                      <li>Our recommendations do not constitute medical diagnosis or treatment</li>
                      <li>Discontinue use of any product that causes irritation and seek medical attention if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">5. Intellectual Property</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  All content, features, and functionality of the Vera service are owned by Vera Health Inc. 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not use our trademarks, service marks, or logos without our prior written consent.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">6. Limitation of Liability</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vera shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of the service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability to you for any cause of action shall not exceed the amount you paid 
                  for the service, if any.
                </p>
              </div>
            </motion.div>

            {/* Service Modifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">7. Service Modifications</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue the service at any time without 
                  prior notice. We may also update these terms periodically. Your continued use of the 
                  service after any changes constitutes acceptance of the new terms.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">8. Contact Information</h2>
              <div className="bg-white p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> vera.ai.skin@gmail.com</p>
                  <p className="text-foreground"><strong>Company:</strong> Vera Health Inc.</p>
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
