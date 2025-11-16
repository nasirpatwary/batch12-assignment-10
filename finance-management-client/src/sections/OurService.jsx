import Container from "../shared/Container";
import serviceImg from "../assets/a-removebg-preview.png";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaArrowRightLong, FaChartLine } from "react-icons/fa6";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineRoofing } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";
const OurService = () => {
  return (
    <div className="my-16">
      <Container>
        <div className="text-center">
          <span className="uppercase shadow px-2 py-1 rounded text-xs font-medium">
            our servivces
          </span>
          <h2 className="text-2xl mt-4 md:text-4xl font-bold max-w-[20ch] mx-auto">
            Why choose us as your accountant consultant?
          </h2>
        </div>
        <div className="lg:flex justify-between mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2 shadow hover:shadow-2xl duration-500 p-4">
              <GiCrystalGrowth size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold">
                Accelerate Business Growth
              </h4>
              <p className="max-w-[32ch] text-gray-600">
                Empower your business with data-driven strategies designed to
                increase profitability and ensure sustainable growth.
              </p>
            </div>
            <div className="space-y-2 shadow hover:shadow-2xl duration-500 p-4">
              <FaChartLine size={24} className="text-primary" />
              <h4 className="text-2xl font-semibold">
                Navigate Capital Markets
              </h4>
              <p className="max-w-[32ch] text-gray-600">
                Gain deeper insights into market trends and make smarter
                investment decisions through our expert financial analysis.
              </p>
            </div>
            <div className="space-y-2 shadow hover:shadow-2xl duration-500 p-4">
              <TbBusinessplan size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold">
                Strategic Business Planning
              </h4>
              <p className="max-w-[32ch] text-gray-600">
                Build a solid foundation for your company’s future with
                customized planning and long-term financial roadmaps.
              </p>
            </div>
            <div className="space-y-2 shadow hover:shadow-2xl duration-500 p-4">
              <TbTax size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold">
                Smart Financial Planning
              </h4>
              <p className="max-w-[32ch] text-gray-600">
                Achieve your financial goals through effective budgeting, smart
                saving strategies, and personalized investment plans.
              </p>
            </div>

            <div className="space-y-2 shadow hover:shadow-2xl duration-500 p-4">
              <MdOutlineRoofing size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold">
                Personalized Investment Strategy
              </h4>
              <p className="max-w-[32ch] text-gray-600">
                Diversify your portfolio and maximize returns with our
                expert-backed, risk-adjusted investment approaches.
              </p>
            </div>
            <div className="space-y-4 shadow-2xl px-8 py-4">
              <h4 className="text-2xl font-semibold max-w-[16ch]">
                Explore our all expertises we offers
              </h4>
              <span className="group">
                <Link
                  to="/"
                  className="btn bg-black text-white hover:bg-primary border-0 duration-500"
                >
                  View All Services
                  <FaArrowRightLong className="translate-x-0 group-hover:translate-x-2 duration-500" />
                </Link>
              </span>
            </div>
          </div>
          <div>
            <img className="mx-auto" src={serviceImg} alt="Service Img" />
          </div>
        </div>
      </Container>
      <div className="bg-[#eeedfc] py-4 cursor-pointer">
        <Marquee
          speed={50}
          pauseOnHover={true}
          className="text-xl md:text-2xl font-medium text-gray-700"
        >
          Expert Financial Guidance &nbsp; • &nbsp; 💼 Tailored Business
          Strategies &nbsp; • &nbsp; 📊 Transparent Reporting &nbsp; • &nbsp; 💡
          Smart Tax Optimization &nbsp; • &nbsp; 🕒 On-Time Service Delivery
          &nbsp; • &nbsp; 🤝 Trusted Client Relationships &nbsp; • &nbsp; 🚀
          Proven Growth Results &nbsp; • &nbsp; 🔒 Secure Data Handling
        </Marquee>
      </div>
    </div>
  );
};

export default OurService;
