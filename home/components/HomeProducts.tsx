"use client";

import { ErrorProduct } from "@/products/components/ErrorProduct";
import useFetchHomeProducts from "../hooks/useFetchHomeProducts";
import FeaturedProducts from "./FeaturedProducts";
import HomeProductsPlaceholder from "./HomeProductsPlaceholder";
import LatestProducts from "./LatestProducts";

const HomeProducts = () => {
	const { data, isLoading, error } = useFetchHomeProducts();
	const featuredProducts = data?.featuredProducts;
	const latestProducts = data?.latestProducts;

	if (error) {
		return <ErrorProduct message={error.message} />;
	}

	return (
		<>
			{isLoading ? (
				<HomeProductsPlaceholder />
			) : (
				<FeaturedProducts products={latestProducts.nodes} />
			)}
			{isLoading ? (
				<HomeProductsPlaceholder />
			) : (
				<LatestProducts products={featuredProducts.nodes} />
			)}
		</>
	);
};

export default HomeProducts;
