// // import { FontawesomeIcon } from "@fortawesome/react-Fontawesome";
// import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import Price from "./Price";
// import Rating from "./Rating";

// const Book = ({ book }) => {
//   const [img, setImg]= useState();

//   const mountedRef = useRef(true);

//   useEffect (()=> {
//     const image = new image();
//     image.src = book.url;
//     image.onload = () => {
//       setTimeout(()=>{
//         if (mountedRef.current){
//         setImg (image);}
//       },300);
//    };
//    return () => {
//     mountedRef.current = false;
//    }
//   })

//   return (
//     <div className="book">
//       {img ? (
//         <>
//           {" "}
//           <Link to={`/books/${book.id}`}>
//             <figure className="book__img--wrapper">
//               <img
//                 src={img.src}
//                 alt=""
//                 className="book__img"
              
//               />
//             </figure>
//           </Link>
//           <div className="book__title">
//             <Link to={`/books/${book.id}`} className="book__title--link">
//               {book.title}
//             </Link>
//           </div>
//           <Rating rating={book.rating} />
//           <Price
//             saleprice={book.saleprice}
//             originalprice={book.originalprice}
//           />
//         </>
//       ) : (
//         <>       <div className="book__img--skeleton"></div>
//         <div className="skeleton book__title--skeleton"></div>
//         <div className="skeleton book__rating--skeleton"></div>
//         <div className="skeleton book__price--skeleton"></div>
//         </>
//       )}

//     </div>
//   );
// };

// export default Book;
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image(); // Capitalize "Image"
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [book.url]); // Add dependency array to avoid infinite loop

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt={book.title} // It's better to use a descriptive alt attribute
                className="book__img"
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
