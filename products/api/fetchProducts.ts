import axios from "axios";
import https from "https";
import { productsQuery } from "../queries/productsQuery";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const agent = new https.Agent({
	rejectUnauthorized: false,
});
const fetchProducts = async () => {
	const body = {
		query: productsQuery,
	};

	try {
		const res = await axios(`${apiBaseUrl}/graphql`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			data: body,
			httpsAgent: agent,
		});

		return res.data.data.products.nodes;
	} catch (error) {
		console.error("Error:", error);
	}
};

export default fetchProducts;
