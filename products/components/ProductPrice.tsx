import { IProductPricing } from "../types/Products.type";

const ProductPrice = ({ salePrice, regularPrice }: IProductPricing) => {
	return (
		<div className="flex items-center mb-4">
			<span className="text-lg font-bold text-primary">{salePrice}</span>
			<span className="text-sm line-through ml-2">{regularPrice}</span>
		</div>
	);
};

export default ProductPrice;
