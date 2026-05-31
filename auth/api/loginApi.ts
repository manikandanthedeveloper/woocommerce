import axios from "axios";
import https from "https";
import { authQuery } from "../queries/authQuery";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const agent = new https.Agent({
	rejectUnauthorized: false,
});
interface LoginPayload {
	username: string;
	password: string;
}

const login = async ({ username, password }: LoginPayload) => {
	const body = {
		query: authQuery,
		variables: {
			username,
			password,
		},
	};

	try {
		const res = await axios(`${apiBaseUrl}/graphql`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			data: body,
			httpsAgent: agent,
		});
		if (res.data.errors) {
			throw new Error(res.data.errors[0].message);
		}
		return res.data.data.login;
	} catch (error) {
		throw error;
	}
};

export default login;
