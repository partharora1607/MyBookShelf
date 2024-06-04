const BookCard = (props) => {
  const { title, author_name, first_publish_year, edition_count } = props.book;

  return (
    <div className="mx-4 my-5 pb-10 max-w-sm bg-white border-4 border-gray-300 rounded-lg shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl  mb-2 text-gray-800 mt-5">
          <span className="font-bold">Book Title:</span> {title}
        </h1>
        <div className="text-xl">
          <h3 className="text-lg  text-gray-700 mb-1 mt-5">
            <span className="font-semibold">Written by:</span> {author_name}
          </h3>
          <h3 className="text-md text-gray-600 mb-1 mt-5">
            <span className="font-semibold text-lg">First Published on : </span>
            {first_publish_year}
          </h3>
          <h3 className="text-md text-gray-600 mt-5">
            <span className="font-semibold text-lg"> Edition Count: </span> {edition_count}
          </h3>
        </div>
        <div className="mt-5">
          <button className="px-3 py-2 bg-green-600 bg-opacity-80 text-white rounded-2xl">Add to Bookshelf</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
