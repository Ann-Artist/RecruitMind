import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold font-display">
              Recruit<span className="gradient-text">Mind</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/#features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RecruitMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
