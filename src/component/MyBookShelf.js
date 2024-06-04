import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useEffect } from "react";
import { setViewBookOff } from "../utils/bookshelfSlice";
import { Link } from "react-router-dom";

const MyBookShelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setViewBookOff());
  }, []);

  const myBooks = useSelector((store) => store.book.myBookShelf);
  return (
    <div className="mx-24">
      <div className="absolute right-48">
        <button className="px-3 py-2 bg-green-600 bg-opacity-80 text-white rounded-2xl">
          <Link to="/">Back Home 🏠︎</Link>
        </button>
      </div>
      <div>
        <h1 className="text-center my-4 text-3xl font-semibold">My BookShelf</h1>
      </div>
      <div className="flex flex-wrap mx-20">
        {myBooks.map((book, idx) => {
          return <BookCard key={idx} book={book} />;
        })}
      </div>
    </div>
  );
};

export default MyBookShelf;
