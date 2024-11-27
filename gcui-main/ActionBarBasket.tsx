"use client";
import { Get } from "@/gcui-main/functions/Basket";
import Badge from "@/stories/Badge/Badge";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Language from "./locales/Language";
import { BasketStores } from "@/gcui-main/stores/BasketStore";
import { useEffect, useState } from "react";

const ActionBarBasket = () => {
  const [totalBasket, setTotalBasket] = useState(0);
  useEffect(() => {
    let total = Get();
    setTotalBasket(total ? total.length : 0);
  }, []);
  return (
    <div className={"relative"}>
      <div
        onClick={() => {
          BasketStores.setBasket(true);
        }}
        className={"flex gap-2 flex-col items-center justify-center  h-16"}
      >
        <span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
        <span className={"text-sm"}>{Language().order_basket}</span>
      </div>
      {totalBasket > 0 && (
        <div className={"absolute -top-2 left-1/2 "}>
          <Badge color={ColorTypes.danger}>{totalBasket}</Badge>
        </div>
      )}
    </div>
  );
};
export default ActionBarBasket;
