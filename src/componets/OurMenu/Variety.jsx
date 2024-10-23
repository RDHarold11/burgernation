import React from "react";
import burgers from "../../utils/burgers";
import BurgerCard from "../BurgerCard";

const Variety = () => {
  return (
    <div className="max-w-[1300px] h-full pt-[130px]  mx-auto">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div>
            <h5 className="text-[#faab34] font-bold text-[19px] uppercase">
              a variaty of
            </h5>
          </div>
          <div>
            <h3 className="font-bold text-[30px] md:text-[55px] text-black">
              Delicious Burgers
            </h3>
          </div>
          <div className="bg-[#dedede] my-3 h-[50px] border w-1"></div>
        </div>
        <div className="grid pt-5 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3">
          {burgers.map((item, index) => {
            return (
              <BurgerCard
                title={item.name}
                price={item.price}
                desc={item.description}
                img={item.img}
                key={index}
              ></BurgerCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Variety;
