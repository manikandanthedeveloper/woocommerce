import { IProductListProps } from "../types/Products.type";
import Product from "./Product";

const ProductList = ({ products }: IProductListProps) => {
	return (
		<>
			{products.map((product) => (
				<Product product={product} key={product.databaseId} />
			))}
		</>
	);
};

export default ProductList;
