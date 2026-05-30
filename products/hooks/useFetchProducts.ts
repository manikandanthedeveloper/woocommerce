import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/fetchProducts";

const useFetchProducts = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});
};

export default useFetchProducts;
