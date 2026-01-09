import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import logoPngPath from "@assets/image_1767949490600.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border/40 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-3">
            <Link href="/" className="inline-block mb-6">
              <img src={logoPngPath} alt="Vera Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
              Empowering you to make safer, smarter skincare decisions through
              advanced AI analysis and dermatological data.
            </p>
            <div className="flex gap-4">
              <SocialIcon
                icon={<Instagram className="w-5 h-5" />}
                href="https://www.instagram.com/veraskin.in/?igshid=YmMyMTA2M2Y="
                label="Instagram"
              />
              <SocialIcon
                icon={<Linkedin className="w-5 h-5" />}
                href="https://linkedin.com/company/vera"
                label="LinkedIn"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Vera Health Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-current" />{" "}
            for healthy skin.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
