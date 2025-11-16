import { CiShare2 } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import Container from "../shared/Container";

const TeamMebers = () => {
  return (
    <Container className="mt-10 md:mt-15">
      <div className="space-y-4 md:text-center">
        <span className="uppercase shadow px-2 py-1 rounded text-xs font-medium">
          Our Team
        </span>
        <h1 className="text-2xl mt-4 md:text-4xl font-bold">
          Expert <span className="text-primary">Financial</span> Team
        </h1>
        <p className="text-neutral-500 max-w-[56ch] mx-auto">
          Our finance team consists of highly skilled professionals dedicated to
          helping clients maximize profits, manage risks, and achieve
          sustainable financial growth through expert advice and innovative
          strategies.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative group cursor-pointer">
          <img
            src={team1}
            alt="Team Member"
            className="rounded-xl w-full object-cover shadow-lg"
          />
          <div className="absolute top-4 right-4">
            <div className="relative">
              <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white shadow-md">
                <CiShare2 className="text-xl"></CiShare2>
              </span>
              <div className="absolute top-4 scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top group-hover:top-10 space-y-2">
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaFacebookF />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaTwitter />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute scale-y-0 w-full group-hover:scale-y-100 origin-bottom bottom-0 rounded-b-xl bg-white/30 backdrop-blur-sm transition-all py-1 text-center duration-500">
            <h5 className="text-xl">A. Johnson</h5>
            <p>Chief Financial Officer</p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src={team2}
            alt="Team Member"
            className="rounded-xl w-full object-cover shadow-lg"
          />
          <div className="absolute top-4 right-4">
            <div className="relative">
              <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white shadow-md">
                <CiShare2 className="text-xl"></CiShare2>
              </span>
              <div className="absolute top-4 scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top group-hover:top-10 space-y-2">
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaFacebookF />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaTwitter />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute scale-y-0 w-full group-hover:scale-y-100 origin-bottom bottom-0 rounded-b-xl bg-white/30 backdrop-blur-sm transition-all py-1 text-center duration-500">
            <h5 className="text-xl">L. Martinez</h5>
            <p>Investment Strategist</p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src={team4}
            alt="Team Member"
            className="rounded-xl w-full object-cover shadow-lg"
          />
          <div className="absolute top-4 right-4">
            <div className="relative">
              <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white shadow-md">
                <CiShare2 className="text-xl"></CiShare2>
              </span>
              <div className="absolute top-4 scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top group-hover:top-10 space-y-2">
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaFacebookF />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaTwitter />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute scale-y-0 w-full group-hover:scale-y-100 origin-bottom bottom-0 rounded-b-xl bg-white/30 backdrop-blur-sm transition-all py-1 text-center duration-500">
            <h5 className="text-xl">R. Patel</h5>
            <p>Risk Management Lead</p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src={team3}
            alt="Team Member"
            className="rounded-xl w-full object-cover shadow-lg"
          />
          <div className="absolute top-4 right-4">
            <div className="relative">
              <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white shadow-md">
                <CiShare2 className="text-xl"></CiShare2>
              </span>
              <div className="absolute top-4 scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top group-hover:top-10 space-y-2">
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaFacebookF />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaTwitter />
                </span>
                <span className="flex items-center justify-center size-8 bg-white rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute scale-y-0 w-full group-hover:scale-y-100 origin-bottom bottom-0 rounded-b-xl bg-white/30 backdrop-blur-sm transition-all py-1 text-center duration-500">
            <h5 className="text-xl">S. Kim</h5>
            <p>Financial Analyst</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamMebers;
