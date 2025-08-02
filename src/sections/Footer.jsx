import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">

        {/* Logo & About */}
        <div className="flex flex-col gap-6 max-w-sm">
          <a href="/">
            <img src={footerLogo} alt="logo" width={160} height={46} />
          </a>
          <p className="text-sm font-montserrat leading-6 text-white">
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.
          </p>

          {/* Social Icons (White Color) */}
          <div className="flex gap-4 mt-4">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-10 flex-1 justify-between">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-sm text-white hover:text-gray-300 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <img src={copyrightSign} alt="copyright" width={18} />
          <p className="font-montserrat">© 2025 Manasvi Jetavat. All rights reserved.</p>
        </div>
        <p className="font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
