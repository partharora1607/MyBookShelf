import bookImage from "../images/book.jpg";

const EmptyBook = () => {
  return (
    <div className="w-6/12 mx-auto my-10">
      <h1 className="text-xl py-2 mb-5 ml-3">
        It seems like you haven't found what you're looking for. Please search for the book you wish for reference.
      </h1>
      <img src={bookImage} alt="Book" />
    </div>
  );
};

export default EmptyBook;
