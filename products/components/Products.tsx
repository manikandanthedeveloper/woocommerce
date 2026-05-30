"use client";

import useFetchProducts from "../hooks/useFetchProducts";
import { ErrorProduct } from "./ErrorProduct";
import ProductList from "./ProductList";
import ProductNotFount from "./ProductNotFount";
import ProductsPlaceholder from "./ProductsPlaceholder";

const Products = () => {
	const { data: products, isLoading, error } = useFetchProducts();

	if (error) {
		return <ErrorProduct message={error.message} />;
	}

	return (
		<div className="my-6">
			<h3 className="font-extrabold text-2xl mb-4">Products</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{isLoading ? (
					<ProductsPlaceholder />
				) : (
					<>
						{products.length > 0 ? (
							<ProductList products={products} />
						) : (
							<ProductNotFount />
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Products;
