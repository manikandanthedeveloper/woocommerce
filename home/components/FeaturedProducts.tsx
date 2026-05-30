import Product from "@/products/components/Product";
import { IProduct } from "@/products/types/Products.type";

interface props {
	products: IProduct[];
}
const FeaturedProducts = ({ products }: props) => {
	return (
		<div className="my-6">
			<h3 className="font-extrabold text-2xl mb-4">Featured Products</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{products.map((item) => (
					<Product product={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
