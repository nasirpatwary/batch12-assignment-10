import Container from "../shared/Container";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  return (
    <Container className="my-16 lg:my-20 bg-base-100">
      <div className="text-center space-y-2">
        <span className="uppercase shadow px-2 py-1 rounded text-xs font-medium">
          feedback
        </span>
        <h2 className="text-2xl mt-4 md:text-4xl font-bold">
          What Our Clients Say
        </h2>
        <p className="text-gr">Real feedback from our valued finance clients</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Aarav Hossain"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Aarav Hossain</h4>
              <p className="text-sm">Investment Analyst</p>
            </div>
          </div>
          <p>
            The financial advice I received was top-notch. My portfolio growth
            has improved significantly thanks to their strategic insights.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={5} readOnly />
          </div>
        </div>

        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Sadia Rahman"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Sadia Rahman</h4>
              <p className="text-sm">Financial Advisor</p>
            </div>
          </div>
          <p>
            Their budgeting strategies and tax planning services made managing
            finances so much easier. I feel more confident about my financial
            future.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={4.5} readOnly />
          </div>
        </div>
        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=22"
              alt="Rafi Ahmed"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Rafi Ahmed</h4>
              <p className="text-sm">Entrepreneur</p>
            </div>
          </div>
          <p>
            Exceptional investment guidance! Their expertise helped me diversify
            my portfolio and maximize returns without taking unnecessary risks.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={5} readOnly />
          </div>
        </div>
        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=15"
              alt="Nusrat Jahan"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Nusrat Jahan</h4>
              <p className="text-sm">Corporate CFO</p>
            </div>
          </div>
          <p>
            Their financial reporting and analysis services are outstanding. I
            get clear insights to make informed corporate decisions.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={4.5} readOnly />
          </div>
        </div>
        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=36"
              alt="Tanvir Islam"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Tanvir Islam</h4>
              <p className="text-sm">Portfolio Manager</p>
            </div>
          </div>
          <p>
            I highly recommend their investment and tax consulting services.
            Their strategies are practical, efficient, and truly profitable.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={4.8} readOnly />
          </div>
        </div>
        <div className="space-y-4 p-5 rounded-2xl testimonial-shadow cursor-pointer duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=65"
              alt="Mim Akter"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Mim Akter</h4>
              <p className="text-sm">Freelance Investor</p>
            </div>
          </div>
          <p>
            Their guidance on risk management and financial planning is
            impeccable. I now feel secure about both short-term and long-term
            investments.
          </p>
          <div className="mt-4">
            <Rating style={{ maxWidth: 80 }} value={4.5} readOnly />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
