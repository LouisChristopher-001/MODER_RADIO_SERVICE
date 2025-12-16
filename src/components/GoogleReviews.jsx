import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-bgWhite py-16">
      <div className="container-padded">
        <h2 className="section-title text-center">
          What Our Customers Say
        </h2>

        <p className="section-subtitle text-center">
          Trusted by generations of happy customers
        </p>

        <div className="mt-10">
          <div
            className="elfsight-app-b3ec8b15-475f-4532-be5d-50a577ad2de8"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
