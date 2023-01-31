import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
const Product = ({ product: { image, name, slug, price } }) => {
  const { currentColor } = useStateContext();

  const style = {
    color: currentColor,
  };
  return (
    <div className="">
      <Link href={`/dashboard/product/${slug.current}`}>
        <div className="product-card flex flex-col items-center">
          <div className="w-52 h-52 bg-white"></div>
          {/* <img
            src={urlFor(image && image[0])}
            alt="..."
            width={250}
            height={250}
            className="product-image"
          /> */}
          <p className="font-medium text-center text-2xl" style={style}>
            {name}
          </p>
          <p className="font-bold text-white text-2xl">Rp {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
