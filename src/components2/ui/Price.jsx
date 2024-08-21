// import React from "react";
// const Price = ({ saleprice, originalprice }) => {
//   return (
//     <div className="book_price">
//       {saleprice ? (
//         <>
//           <span className="book__price--normal">
//             ${originalprice.tofixed(2)}
//           </span>
//           ${saleprice.tofixed(2)}
//         </>
//       ) : (
//         <>${originalprice.tofixed(2)}</>
//       )}
//     </div>
//   );
// };

// export default Price;
import React from "react";

const Price = ({ salePrice = 0, originalPrice = 0 }) => {
  return (
    <div className="book_price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;

