import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import FeaturedTreats from "./components/sections/FeaturedTreats";
import Menu from "./components/sections/Menu";
import Packages from "./components/sections/Packages";
import Story from "./components/sections/Story";
import Testimonials from "./components/sections/Testimonials";
import Requests from "./components/sections/Requests";

export default function App() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:font-bold"
      >
        Skip to the menu
      </a>

      <Nav />

      <main>
        <Hero />
        <Ticker />
        <FeaturedTreats />
        <Menu />
        <Packages />
        <Story />
        <Testimonials />
        <Requests />
      </main>

      <Footer />
    </>
  );
}
