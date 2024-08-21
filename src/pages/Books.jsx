import React, { useState } from "react";
import BestBooks from "../components/ui/BestBooks";
import { books } from "../data";

const Books = () => {
  const [bookData, setBooks] = useState(books);

  function filterBooks(filter) {
    console.log("Filter: ", filter);
    console.log("Books: ", bookData);

    if (!bookData) {
      console.error("Books array is undefined");
      return;
    }

    if (filter === "LOW_TO_HIGH") {
      setBooks(
        bookData
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        bookData
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setBooks(bookData.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div id="books__body" style={{ paddingBottom: "15px" }}>
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, low to high</option>
                  <option value="HIGH_TO_LOW">Price, high to low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {bookData?.map((book) => (
                  <BestBooks key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
