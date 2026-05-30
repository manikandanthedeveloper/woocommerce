import { useQuery } from "@tanstack/react-query";
import fetchProduct from "../api/fetchProduct";

const useFetchProduct = (id: string) => {
	return useQuery({
		queryKey: ["product", id],
		queryFn: () => fetchProduct(id),
		enabled: !!id,
	});
};

export default useFetchProduct;
