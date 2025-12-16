import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/construction", label: "Products" },
  // { to: "/realestate", label: "Real Estate" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      } mb-6`}
    >
      <nav className="container-padded flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          {/* <div className="h-9 w-9 rounded-lg bg-primary text-white grid place-items-center font-bold">
            ZC
          </div> */}
          <img src={logo} className="w-26 h-14"/>
          <div className="leading-tight">
            <div className="font-bold text-primary">MODERN RADIO SERVICE</div>
            <div className="text-xs text-black">
              Electronics & Home Appliances
            </div>
          </div>
        </Link>

        <button
          className="md:hidden btn-primary px-3 py-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition pb-1 border-b-2 ${
                    isActive
                      ? "text-primary border-accent"
                      : "border-transparent text-black"
                  } hover:text-primary`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-accent">
              Request info
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="container-padded py-4 grid gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to={item.to}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-semibold transition border-b-2 ${
                      isActive
                        ? "text-primary border-accent"
                        : "text-warmGray border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn-accent w-full justify-center">
                Request info
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
