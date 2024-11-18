import {Fetch} from "@/components/functions/Fetch";
import ContentType from "@/types/Content";
const getContent = async ({slug}): Promise<ContentType>=>{
	let response = null
	await Fetch({
		method: "get",
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/contents/" + slug,
		data: "",
		cache:"no-store"
	}, (data) => {
		response = data.data.data

	}, (error) => {
		console.error("Content model error :", error)

		response = null
	})
	return response
}
const getRelated = async ({slug,content_type}): Promise<ContentType[]>=>{
	let response = null
	await Fetch({
		method: "get",
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/contents/" + "related/"+slug+"/" + content_type,
		data: "",
		cache:"no-store"
	}, (data) => {
		response = data.data.data

	}, (error) => {
		console.error("Content model error :", error)

		response = null
	})
	return response
}
const getPayables = async ({slug}): Promise<any[]>=>{
	let response = null
	await Fetch({
		method: "get",
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/contents/" + "payables/"+slug,
		data: "",
		cache:"no-store"
	}, (data) => {
		response = data.data.data

	}, (error) => {
		console.error("Content model error :", error)

		response = null
	})
	return response
}
export {getContent , getRelated , getPayables}

