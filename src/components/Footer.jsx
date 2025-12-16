import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16 pt-16">
   <div className="container-padded py-10 grid gap-6 md:grid-cols-3 place-items-center">


        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Modern Radio Service" className="w-24 h-14" />
            <h3 className="text-lg font-bold">
              Modern Radio Service – Electronics & Home Appliances
            </h3>
          </div>

          <p className="text-sm text-white/80 mt-2">
            Powering homes with trust, innovation, and quality.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm text-white/80 mt-2">Kumbakonam / Thiruvarur</p>
          <p className="text-sm text-white/80">Phone: +91 95855 14802</p>
          <p className="text-sm text-white/80">Email: mrskmu@gmail.com</p>
        </div>

        {/* Follow */}
        <div>
          <h3 className="font-semibold">Follow Us</h3>

          <div className="flex gap-4 mt-3 text-white/80">
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
  <div className="container-padded py-4 text-sm text-white/70 flex justify-center text-center">
    © {new Date().getFullYear()} MODERN RADIO SERVICE. All rights reserved.
  </div>
</div>

    </footer>
  );
}
