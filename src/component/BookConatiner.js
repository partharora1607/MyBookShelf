import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import EmptyBook from "./EmptyBook";
import { useDispatch } from "react-redux";
import { setViewBookOn } from "../utils/bookshelfSlice";
import { API } from "../utils/constants";

const BookContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setViewBookOn());
  });

  const fetchBooks = async () => {
    setLoading(true);
    const response = await fetch(API + { searchTerm } + "&limit=10&page=1");
    const data = await response.json();
    setBooks(data.docs);
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    fetchBooks();
  };

  return (
    <div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="Search"
          className="w-2/12 border-2 border-black rounded-lg px-3 py-2"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button
          className="ml-2 px-3 py-2 border-2 border-black rounded-lg hover:bg-gray-200"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {searchTerm === "" ? (
        <EmptyBook />
      ) : loading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {books.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookContainer;
