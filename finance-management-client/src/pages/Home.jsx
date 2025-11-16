import Banner from "../sections/Banner";
import OurService from "../sections/OurService";
import Pricing from "../sections/Pricing";
import TeamMebers from "../sections/TeamMebers";
import Testimonials from "../sections/Testimonals";
const Home = () => {
  return (
    <>
      <title>Home || Financial</title>
      <section>
        <Banner />
        <OurService />
        <TeamMebers />
        <Pricing />
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
