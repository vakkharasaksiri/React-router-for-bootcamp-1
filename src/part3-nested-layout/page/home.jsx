import { CompanyHeader } from "../components/companyHeader";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">Home page</h1>
      {/* <a href="/about" className="underline text-blue-500 text-lg">About</a> */}
      <Link to="/about" className="underline text-blue-500 text-lg">
        About
      </Link>
    </div>
  );
};
