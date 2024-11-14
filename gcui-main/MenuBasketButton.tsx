"use client";
import {Get} from "@/components/functions/Basket";
import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import {BasketStores} from "@/components/stores/BasketStore";
import {useEffect, useState} from "react";
import Button from "@/components/Button";

const MenuBasketButton = () => {
	const [totalBasket, setTotalBasket] = useState(0)
	useEffect(() => {
		let total = Get()
		setTotalBasket(total ? total.length : 0)
	}, [])
	return (
		<div className={"relative"}>
			<Button color={ColorTypes.default} onClick={() => {
				BasketStores.setBasket(true)
			}}
					icon={<span className={"far fa-shopping-basket-alt"}/>}/>
			<div className={"absolute -top-2 left-1/2 "}>
				<Badge color={ColorTypes.danger} particular={true}>{totalBasket}</Badge>
			</div>
		</div>)
}
export default MenuBasketButton;