import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className="
    fixed bottom-6 right-6 z-50
    bg-accent text-white
    p-3 rounded-full shadow-lg
    hover:bg-accent/90
    transition-all
  "
>

      <ArrowUp size={20} />
    </button>
  );
}
