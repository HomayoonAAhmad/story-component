import {Fetch} from "@/components/functions/Fetch";

const getGateways = async () => {
	let gateWays = null
	await Fetch({
		method: "get",
		authorization: true,
		headers: null,
		dataType: "application/json",
		url: process.env.NEXT_PUBLIC_API_URL + "/gateways",
		data: "",
		cache: "no-store"
	}, (data) => {
		gateWays = data.data.data
	}, (error) => { })
	return gateWays

}
export {getGateways}