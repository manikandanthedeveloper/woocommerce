import Link from "next/link";
import { IProductProps } from "../types/Products.type";
import AddToCart from "./AddToCart";
import FavoriteProducts from "./FavoriteProducts";
import ProductCard from "./ProductCart";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

const Product = ({ product }: IProductProps) => {
	const {
		name,
		image,
		description,
		regularPrice,
		salePrice,
		price,
		databaseId,
	} = product;

	return (
		<ProductCard>
			<div className="relative">
				<FavoriteProducts product={product} />
				<ProductImage image={image} />
				<Link
					href={`/products/${databaseId}`}
					className="text-lg font-semibold mb-2"
				>
					{name}
				</Link>
				<div className="prose line-clamp-2 prose-sm text-gray-600 mb-4 min-h-12">
					{description}
				</div>
				<ProductPrice
					price={price}
					salePrice={salePrice}
					regularPrice={regularPrice}
				/>
				<div className="flex flex-row justify-between items-center">
					<AddToCart {...product} />
				</div>
			</div>
		</ProductCard>
	);
};

export default Product;
