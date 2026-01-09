import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  ThermometerSun, 
  FlaskConical, 
  AlertTriangle,
  ScanFace,
  Droplets,
  Microscope,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Footer } from "@/components/Footer";
import logoPngPath from "@assets/image_1767949490600.png";

// Example images from unsplash with descriptive comments
// Abstract science/medical background
const HERO_BG = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=2000"; 
// Skin texture close up - clean and clinical
const SKIN_TEXTURE = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src={logoPngPath} alt="Vera Logo" className="h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('problem')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Vera</button>
            <button onClick={() => scrollToSection('solution')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="rounded-full px-6 bg-primary text-white hover:bg-primary/90"
            >
              Join Waitlist
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('problem')} className="text-left px-4 py-2 font-medium">Why Vera</button>
            <button onClick={() => scrollToSection('solution')} className="text-left px-4 py-2 font-medium">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="text-left px-4 py-2 font-medium">Features</button>
            <Button onClick={() => scrollToSection('waitlist')} className="w-full rounded-full">Join Waitlist</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" 
             style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Know Before You Apply.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Vera uses clinical AI to predict skin reactions by analyzing ingredients, your unique skin profile, and local climate data.
              </p>
              
              <div className="mb-12">
                <WaitlistForm variant="hero" />
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground/80">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Privacy First</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Climate Aware</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="The Problem" 
            title="Trial and error is dangerous for your skin." 
            description="Skincare isn't one-size-fits-all. What works for an influencer might cause a breakout for you."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Unpredictable Reactions"
              description="Contact dermatitis and acne flare-ups often happen because ingredients react differently to specific skin barriers."
              delay={0.1}
            />
            <FeatureCard 
              icon={<ThermometerSun className="w-6 h-6" />}
              title="Climate Impact"
              description="Humectants that hydrate in London might dehydrate you in Arizona. Your environment changes product efficacy."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Search className="w-6 h-6" />}
              title="Ingredient Overload"
              description="With 2,000+ new products launching yearly, understanding ingredient lists and cross-interactions is impossible manually."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Solution/How it Works */}
      <section id="solution" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="How it Works" 
            title="Scientific compatibility check."
            description="Vera bridges the gap between complex chemistry and your daily routine."
          />

          <div className="mt-16 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-secondary -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
              {[
                { step: "01", title: "Analyze Profile", desc: "Upload a selfie or describe your skin type and concerns." },
                { step: "02", title: "Add Context", desc: "We factor in your current medications and local weather." },
                { step: "03", title: "Scan Product", desc: "Paste a URL or scan an ingredient label." },
                { step: "04", title: "Get Verdict", desc: "Instant safety score with explainable reasoning." }
              ].map((item, i) => (
                <div key={i} className="bg-background md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none relative">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-3xl font-serif font-bold text-primary mb-6 mx-auto shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                  <p className="text-center text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mockup / Example Output */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                align="left"
                label="The Analysis"
                title="Clear, actionable safety scores."
                description="No confusing chemical names. Just a clear go/no-go recommendation based on your unique biology."
              />
              <div className="space-y-6">
                {[
                  "Personalized irritation risk assessment",
                  "Comedogenicity check (pore-clogging)",
                  "Fungal acne safety triggers",
                  "Allergen cross-referencing",
                  "Pregnancy & nursing safety checks"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <span className="text-lg text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] blur opacity-50" />
              <div className="relative bg-white rounded-[1.75rem] shadow-2xl overflow-hidden border border-border/50">
                {/* Card Header */}
                <div className="p-6 border-b border-border/50 bg-secondary/5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Analysis Result</span>
                      <h3 className="text-xl font-bold font-serif text-primary mt-1">Hydra-Gel Moisturizer</h3>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-yellow-200">
                      Caution
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white border px-2 py-1 rounded-md text-muted-foreground">Match: 68%</span>
                    <span className="text-xs bg-white border px-2 py-1 rounded-md text-muted-foreground">Oily Skin</span>
                    <span className="text-xs bg-white border px-2 py-1 rounded-md text-muted-foreground">Humid Climate</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" /> Potential Risks
                    </h4>
                    <ul className="space-y-3">
                      <li className="bg-red-50 p-3 rounded-lg border border-red-100 text-sm text-red-900">
                        <span className="font-semibold block mb-1">Fragrance (Linalool)</span>
                        High risk of irritation for your sensitive skin profile.
                      </li>
                      <li className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-sm text-orange-900">
                        <span className="font-semibold block mb-1">Climate Mismatch</span>
                        Glycerin content may cause congestion in 80%+ humidity.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Recommendation
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Use sparingly or consider switching to a fragrance-free gel alternative like <span className="text-primary font-medium cursor-pointer underline decoration-dotted">HydroBoost Gel</span>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 md:py-32 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Features" 
            title="Comprehensive dermatological intelligence." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<ScanFace className="w-5 h-5" />}
              title="AI Skin Analysis"
              description="Computer vision detects redness, texture issues, and dehydration levels from a selfie."
            />
            <FeatureCard 
              icon={<FlaskConical className="w-5 h-5" />}
              title="Ingredient Checker"
              description="Deep analysis of INCI lists against medical databases of allergens and irritants."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Safety Verdicts"
              description="Simple Safe / Caution / Risky scores so you can decide in seconds."
            />
            <FeatureCard 
              icon={<Droplets className="w-5 h-5" />}
              title="Medication Aware"
              description="Checks for conflicts with prescriptions like Tretinoin or Accutane."
            />
            <FeatureCard 
              icon={<ThermometerSun className="w-5 h-5" />}
              title="Climate Context"
              description="Adjusts recommendations based on your local UV index, humidity, and pollution."
            />
            <FeatureCard 
              icon={<Microscope className="w-5 h-5" />}
              title="Explainable AI"
              description="We tell you exactly WHY a product is flagged. No black box decisions."
            />
            <FeatureCard 
              icon={<Search className="w-5 h-5" />}
              title="Safer Alternatives"
              description="If a product is risky, we suggest 3 chemically similar but safer options."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="w-5 h-5" />}
              title="Routine Builder"
              description="Ensure your entire regimen plays nicely together without cancelling out actives."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary mb-6">
              Stop guessing.<br/>Start knowing your skin.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the waitlist today for early access to the most advanced skincare compatibility engine ever built.
            </p>
            
            <div className="max-w-md mx-auto">
              <WaitlistForm />
              <p className="mt-4 text-xs text-muted-foreground">
                Limited spots available for the beta release. No spam, ever.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
