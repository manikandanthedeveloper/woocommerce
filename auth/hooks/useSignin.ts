import { useMutation } from "@tanstack/react-query";
import login from "../api/loginApi";

export const useSignin = () => {
	return useMutation({
		mutationFn: login,
	});
};
