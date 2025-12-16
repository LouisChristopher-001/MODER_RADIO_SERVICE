import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../public/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/construction", label: "Products" },
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
  className={`fixed top-0 left-0 right-0 z-50 transition-all
  ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
  min-h-[72px] md:min-h-[96px]`}
>

  <nav className="container-padded flex items-center justify-between py-2 md:py-3">

    <Link to="/" className="flex items-center gap-2">
      <img
  src={logo}
  alt="Modern Radio Service"
  className="h-12 md:h-18 lg:h-20 w-auto object-contain"
 />


      <div className="hidden sm:block leading-tight">
        <div className="font-semibold text-primary text-sm md:text-base">
          MODERN RADIO SERVICE
        </div>
        <div className="text-xs text-gray-600">
          Electronics & Home Appliances
        </div>
      </div>
    </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition pb-1 border-b-2 ${
                    isActive
                      ? "text-primary border-accent"
                      : "border-transparent text-gray-700"
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

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="container-padded py-4 grid gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to={item.to}
                  className={({ isActive }) =>
                    `block text-base font-medium ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="hidden lg:flex">
  <Link
    to="/contact"
    className="btn-accent whitespace-nowrap px-4 py-2 text-sm"
  >
    Request info
  </Link>
</li>

          </ul>
        </div>
      )}
    </header>
  );
}
