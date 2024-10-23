import React from "react";
import { TiPlus } from "react-icons/ti";

const BurgerCard = ({ img, title, price, desc }) => {
  return (
    <div className="my-2 mx-auto py-3 w-[360px] text-center">
      <div className="hover:shadow-xl transition-all duration-200 shadow-black h-[500px] py-4 px-5">
        <div>
          <img src={img} className="w-full" alt={title} />
        </div>
        <div>
          <h4 className="font-bold text-[26px] text-black">Chicken Burger</h4>
          <h6 className="font-bold text-[16px] text-[#e63945]">${price}</h6>
          <p className="text-[#b3afaf]">{desc}</p>
        </div>
      </div>
      <div>
        <div className="bg-[#e63945] hover:cursor-pointer mt-[-20px] hover:scale-90 duration-150 inline-block px-3 py-3 rounded-full">
          <TiPlus color="white" size={30} />
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
