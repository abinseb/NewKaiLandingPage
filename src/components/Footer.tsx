export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-kai-dark to-kai-purple/50 py-16 px-6 border-t border-kai-cyan/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1  gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">K-AI</h3>
            <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
              The future of smart governance powered by artificial intelligence. 
              Transforming decision-making through advanced neural networks.
            </p>
          </div>

          {/* Solutions */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-kai-cyan">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Smart Analytics</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Predictive Modeling</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Decision Support</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Process Automation</a></li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-kai-cyan">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Support Center</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-kai-cyan">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-kai-cyan transition-colors">Newsletter</a></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom */}
        <div className=" pt-5 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full flex justify-center">
        <p className="text-sm  text-muted-foreground">
            © 2025 K-AI. All rights reserved. <span className="text-base font-semibold">Powered by ICTAK</span>.
          </p>
        </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-kai-cyan transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-kai-cyan transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-kai-cyan transition-colors">
              Security
            </a>
          </div>
        </div>

        {/* Glowing accent line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-kai-cyan to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};