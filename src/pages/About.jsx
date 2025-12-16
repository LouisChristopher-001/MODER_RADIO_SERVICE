import AnimatedCounter from "../components/AnimatedCounter.jsx";
import panoAbout from "../assets/pano-about.jpg";

export default function About() {
  return (
    <section className="container-padded py-32">
      <h1 className="section-title">About Us</h1>
      <p className="section-subtitle max-w-2xl">
        Modern Radio Service is a trusted electronics and home appliances dealer
        based in Kumbakonam, committed to delivering quality products, honest
        pricing, and dependable after-sales support.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Company Profile</h3>
          <p className="text-sm text-warmGray mt-2">
            Modern Radio Service has been serving households for generations,
            offering a wide range of branded electronics and kitchen appliances.
            Our reputation is built on trust, long-term customer relationships,
            and consistent service excellence.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-primary">Milestones</h3>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-sm text-warmGray">Years of Service</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={80} suffix="+" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-warmGray">Happy Customers</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={10000} suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full max-w-5xl aspect-[4/2] bg-gray-200 rounded-2xl overflow-hidden mx-auto grid place-items-center">

          <img
  src={panoAbout}
  alt="Modern Radio Service Showroom"
  className="w-full max-w-5xl aspect-[4/2] rounded-2xl object-cover mx-auto"
/>

        </div>
      </div>
    </section>
  );
}
