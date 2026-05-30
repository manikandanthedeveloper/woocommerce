import { useQuery } from "@tanstack/react-query";
import fetchHomeProducts from "../api/fetchHomeProducts";

const useFetchHomeProducts = () => {
	return useQuery({
		queryKey: ["home-products"],
		queryFn: fetchHomeProducts,
	});
};

export default useFetchHomeProducts;
