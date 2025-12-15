import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      
      {/* Main footer */}
      <div className="container-padded py-12 grid gap-10 md:grid-cols-3 md:items-start">

        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/logo.png"
              alt="Modern Radio Service"
              className="h-12 w-auto"
            />
            <div>
              <h3 className="text-base font-semibold">
                Modern Radio Service
              </h3>
              <p className="text-xs text-white/70">
                Electronics & Home Appliances
              </p>
            </div>
          </div>

          <p className="text-sm text-white/80 mt-4 max-w-xs mx-auto md:mx-0">
            Powering homes with trust, innovation, and quality since 1944.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-white/80">Kumbakonam · Thiruvarur</p>
          <p className="text-sm text-white/80 mt-1">
            Phone: +91 95855 14802
          </p>
          <p className="text-sm text-white/80">
            Email: mrskmu@gmail.com
          </p>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex justify-center md:justify-start gap-4 text-white/80">
            <a
              href="https://www.facebook.com/share/19ZXZ2HKtC/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <FacebookIcon fontSize="medium" />
            </a>

            <a
              href="https://www.instagram.com/mrs_kumbakonam?igsh=MWhuanZreXFkOTVweA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="medium" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-padded py-4 text-sm text-white/70 text-center">
          © {new Date().getFullYear()} Modern Radio Service. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
