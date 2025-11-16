import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import hero from "../assets/hero-removebg-preview.png";
import { MdSlowMotionVideo } from "react-icons/md";
import Container from "../shared/Container";
import SavingPlanCard from "./SavingPlanCard";
const Banner = () => {
  return (
    <section className="py-8">
      <Container className="flex lg:flex-row flex-col-reverse md:flex-col justify-between md:relative overflow-hidden">
        <div className="mt-8 md:mt-0">
          <p className="bg-[#eeedfc] border border-primary text-gray-600 flex items-center gap-2 w-fit text-center px-4 py-2 rounded-full text-sm font-medium">
            Track income, expenses & budgets in one place
          </p>
          <div className="mt-8 space-y-8">
            <h1 className="text-3xl font-poppins md:text-6xl font-bold max-w-[16ch]">
              Why <span className="text-primary">Financial</span> Planning
              Matters
            </h1>
            <p className="text-lg max-w-[45ch]">
              Financial planning helps you organize income, savings & investment
              to achieve long-term goals. It reduces stress, builds wealth, and
              promotes stability for the future.
            </p>
            <div className="flex flex-wrap justify-center md:justify-normal gap-4">
              <span className="group">
                <Link
                  to="/"
                  className="btn bg-black text-white hover:bg-primary border-0 duration-500"
                >
                  Get Started
                  <FaArrowRightLong className="translate-x-0 group-hover:translate-x-2 duration-500" />
                </Link>
              </span>
              <button className="btn btn-outline hover:bg-black hover:text-white duration-500 font-semibold">
                <MdSlowMotionVideo size={20} /> Watch Track Now
              </button>
            </div>
          </div>
        </div>
        <SavingPlanCard />
        <div>
          <img src={hero} alt="hero logo" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
