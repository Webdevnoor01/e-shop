/* eslint-disable react/prop-types */
// ltd-product-card means this product will be use in latest product, top rated products, and discount product in home page 😀😀😀

import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL

console.log("base url: ", baseUrl)


const LtpProduct = ({ product }) => {
  return (
    <Link to="#" className="flex gap-1">
      <div className="w-[150px]">
        <img
          className="w-full"
          src={`${baseUrl}/images/products/${product}.webp`}
          alt=""
        />
      </div>
      <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-500 ">
        <h2 className="text-sm md:text-lg ">Lorem ipsum dolor sit amet.</h2>
        <span className="text-sm md:text-lg" >$2349</span>
      </div>
    </Link>
  );
};

export default LtpProduct;
