import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative text-xl">
      <div className="absolute top-0 right-0 mt-5 mr-56">
        <button className="px-3 py-2 bg-green-600 bg-opacity-80 text-white rounded-2xl">
          <Link to="/MyBookShelf">My BookShelf</Link>
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold mt-5">Search by book name:</h1>
    </div>
  );
};

export default Header;
