import logos from "../assets/logo/index.js";

export default function BrandMarquee() {
  return (
    <div className="relative w-full bg-bgWhite mt-0 border-t border-b border-gray-200">
      <div className="overflow-hidden h-15">
        <div className="flex items-center h-full min-w-max animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 w-[100px] h-12"
            >
              <img
                src={logo}
                alt="Brand logo"
                className="max-h-10 max-w-full object-contain opacity-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
