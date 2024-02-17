import { CompanyHeader } from "../components/companyHeader";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1 className="text-2xl">About page</h1>
      {/* <a href="/" className="underline text-blue-500 text-lg">Home</a> */}
      <Link to="/" className="underline text-blue-500 text-lg">
        Home
      </Link>
    </div>
  );
};
