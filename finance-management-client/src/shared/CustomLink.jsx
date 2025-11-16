import { Link } from "react-router";
const CustomLink = ({ routPath, to, path }) => (
  <p className="dark:text-gray-400">
    {routPath}{" "}
    <Link to={to} className="text-blue-500 underline">
      {path}
    </Link>
  </p>
);
export default CustomLink;
