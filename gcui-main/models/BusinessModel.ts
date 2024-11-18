import {Fetch} from "@/components/functions/Fetch";
import {ToastStores} from "@/components/stores/ToastStore";
import Language from "@/locales/Language";
import {router} from "next/client";

const getBusinesses = async (): Promise<Business[]>=>{
	let response = null
	await Fetch({
		method: "get",
		authorization: true,
		url: process.env.NEXT_PUBLIC_API_URL + "/business/",
		cache:"no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => {
		console.error("Business model error :", error)
		response = null
	})
	return response
}
const getBusiness = async (id: number): Promise<Business>=>{
	let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/business/" + id,
		data: "",
		cache:"no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => {})
	return response
}
const createBusiness = async (data: any): Promise<Business>=>{
	let response = null
	await Fetch({
		method: "post",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/business",
		data: data,
		cache:"no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => {
		error.json().then((data)=> {
			if(data.status === 401){
				ToastStores.setToast({message: "Unauthorized", title: "Error", type:"danger", icon: "exclamation-circle"})
			}
			if(data.status === 400){
				if(data.data && data.data.length > 0){
					console.log(data)
					data.data.map((error)=>{
						ToastStores.setToast({message: error, title: data.message, type:"danger", icon: "exclamation-circle"})
					})
				}
			}
		})
	})
	return response
}

const updateBusiness = async (id: number, data: any): Promise<Business>=>{
	let response = null
	await Fetch({
		method: "post",
		headers: null,
		authorization: true,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/business/" + id,
		data: data,
		cache:"no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => {

		response = null
	})
	return response
}

export {getBusinesses, getBusiness,createBusiness , updateBusiness}

