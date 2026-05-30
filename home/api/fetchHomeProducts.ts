import axios from "axios";
import https from "https";
import { homeQuery } from "../queries/homeQuery";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const agent = new https.Agent({
	rejectUnauthorized: false,
});
const fetchHomeProducts = async () => {
	const body = {
		query: homeQuery,
	};

	try {
		const res = await axios(`${apiBaseUrl}/graphql`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			data: body,
			httpsAgent: agent,
		});
		return res.data.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

export default fetchHomeProducts;
