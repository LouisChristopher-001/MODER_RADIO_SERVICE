import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* Main footer */}
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 items-start text-center md:text-left justify-items-center md:justify-items-end">

          {/* Brand */}
          <div>
  <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
  {/* Logo */}
  <img
    src="/logo1.png"
    alt="Modern Radio Service"
    className="h-16 w-auto block"
  />

  {/* Text */}
  <div className="pt-1">
    <h3 className="text-base font-semibold leading-tight">
      Modern Radio Service
    </h3>
    <p className="text-xs text-white/70 leading-tight">
      Electronics & Home Appliances
    </p>
  </div>
</div>
  <p className="text-sm text-white/80 mt-0 max-w-xs">
    Powering homes with trust, innovation, and quality since 1944.
  </p>
</div>


          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>Kumbakonam · Thiruvarur</p>
              <p>Phone: +91 95855 14802</p>
              <p>Email: mrskmu@gmail.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-white/80">
              <a
                href="https://www.facebook.com/share/19ZXZ2HKtC/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/mrs_kumbakonam?igsh=MWhuanZreXFkOTVweA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-white/70">

          <div>
            © {new Date().getFullYear()} Modern Radio Service. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link
              to="/warranty-service-policy"
              className="hover:text-white transition"
            >
              Warranty & Service Policy
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
