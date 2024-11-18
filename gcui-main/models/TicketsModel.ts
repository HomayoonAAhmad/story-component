import {Fetch} from "@/components/functions/Fetch";

async function getTickets(page = 1 , all = false) {

	 let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/ticket?"+(all?"all=1":"")+"&page="+page,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}
		, (error) => { })
	return response
}

async function getTicket(id) {
	let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/ticket/" + id,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}

async function getTicketSubjects() {
	let response = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/ticket/subjects",
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}

async function createTicket(data) {
	let response = null
	await Fetch({
		method: "post",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/ticket",
		data: data,
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => {
	})
	return response
}

async function replyTicket(id,data) {
	let response = null
	await Fetch({
		method:"post",
		authorization:true,
		headers:null,
		dataType:"application/json",
		url:process.env.NEXT_PUBLIC_API_URL+`/ticket/${id}/reply`,
		data:data,
		cache:"no-store"
	},(data)=>{
		response = data.data.data
	},(error)=>{})
	return response
}
async function closeTicket(id) {
	let response = null
	await Fetch({
		method: "post",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + `/ticket/${id}/close`,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}

async function reopenTicket(id) {
	let response = null
	await Fetch({
		method: "post",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + `/ticket/${id}/reopen`,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}
async function seenTicket(id) {
	let response = null
	await Fetch({
		method: "post",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + `/ticket/${id}/seen`,
		data: "",
		cache: "no-store"
	}, (data) => {
		response = data.data.data
	}, (error) => { })
	return response
}
export {getTickets, getTicket, getTicketSubjects, createTicket, replyTicket, closeTicket, reopenTicket, seenTicket}