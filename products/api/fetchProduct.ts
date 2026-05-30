import axios from "axios";
import https from "https";
import { productQuery } from "../queries/productQuery";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const agent = new https.Agent({
	rejectUnauthorized: false,
});
const fetchProduct = async (id: string) => {
	const body = {
		query: productQuery,
		variables: {
			id,
		},
	};

	try {
		const res = await axios(`${apiBaseUrl}/graphql`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			data: body,
			httpsAgent: agent,
		});
		return res.data.data.product;
	} catch (error) {
		console.error("Error:", error);
	}
};

export default fetchProduct;
