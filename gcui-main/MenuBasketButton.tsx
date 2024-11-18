"use client";
import { Get } from "./functions/Basket";
import Badge from "@/stories/Badge/Badge";
import ColorTypes from "./functions/ColorTypes";
import { BasketStores } from "./stores/BasketStore";
import { useEffect, useState } from "react";
import Button from "@/stories/Button/Button";

const MenuBasketButton = () => {
  const [totalBasket, setTotalBasket] = useState(0);
  useEffect(() => {
    let total = Get();
    setTotalBasket(total ? total.length : 0);
  }, []);
  return (
    <div className={"relative"}>
      <Button
        color={ColorTypes.default}
        onClick={() => {
          BasketStores.setBasket(true);
        }}
        icon={<span className={"far fa-shopping-basket-alt"} />}
      />
      <div className={"absolute -top-2 left-1/2 "}>
        <Badge color={ColorTypes.danger} particular={true}>
          {totalBasket}
        </Badge>
      </div>
    </div>
  );
};
export default MenuBasketButton;
