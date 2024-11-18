import {Fetch} from "@/components/functions/Fetch";

async function getInvoices(page = 1 , all = 0) {

	 let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/invoice?"+(all?"all=1":"")+"&page="+page,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}
		, (error) => { })
	return response
}

async function getInvoice(id) {
	let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/invoice/" + id,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}

export {
	getInvoices,
	getInvoice
}