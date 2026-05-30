import React from "react";
import ProductPlaceholder from "./ProductPlaceholder";

const ProductsPlaceholder = () => {
	return (
		<>
			{Array.from({ length: 12 }).map((_, index) => (
				<ProductPlaceholder key={index} />
			))}
		</>
	);
};

export default ProductsPlaceholder;
