import logos from "../assets/logo/index.js";

export default function BrandMarquee() {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="relative overflow-hidden h-14">
        
        {/* 👇 THIS LINE IS THE KEY FIX */}
        <div className="flex items-center h-full min-w-max animate-marquee whitespace-nowrap">

          {[...logos, ...logos].map((logo, index) => (
            <div
  key={index}
  className="flex items-center justify-center mx-2 w-[120px] h-10"
>
  <img
    src={logo}
    alt="Brand logo"
    className="max-h-8 max-w-full object-contain opacity-90 transition"
    loading="lazy"
  />
</div>

          ))}

        </div>
      </div>
    </div>
  );
}
