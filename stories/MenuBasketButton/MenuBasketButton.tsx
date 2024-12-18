"use client";
import { Get } from "@/gcui-main/functions/Basket";
import Badge from "@/stories/Badge/Badge";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import { BasketStores } from "@/gcui-main/stores/BasketStore";
import { useEffect, useState } from "react";
import Button from "@/stories/Button/Button";

export type MenuBasketButtonProps = {
  totalBasket?: number; // Allow passing a custom total value
};

const MenuBasketButton = ({
  totalBasket: initialTotal,
}: MenuBasketButtonProps) => {
  const [totalBasket, setTotalBasket] = useState(initialTotal ?? 0);
  useEffect(() => {
    if (initialTotal === undefined) {
      let total = Get();
      setTotalBasket(total ? total.length : 0);
    }
  }, [initialTotal]);
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
