import React from "react";
import ProductPlaceholder from "@/products/components/ProductPlaceholder";

const HomeProductsPlaceholder = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{Array.from({ length: 12 }).map((_, index) => (
				<ProductPlaceholder key={index} />
			))}
		</div>
	);
};

export default HomeProductsPlaceholder;
