import AddToCart from "@/products/components/AddToCart";
import { IProduct } from "@/products/types/Products.type";
import Image from "next/image";
import { memo } from "react";

const CartItem = (product: IProduct) => {
	const { image, name, quantity, salePrice, regularPrice } = product;

	return (
		<div className="flex items-center justify-between pb-4 border-b border-gray-line">
			<div className="flex items-center">
				<Image
					src={image.sourceUrl}
					alt={image.altText || ""}
					className="h-12 w-12 object-cover rounded mr-2"
					width={40}
					height={40}
					unoptimized
				/>
				<div>
					<p className="font-semibold">{name}</p>
					<p className="text-sm">Quantity: {quantity}</p>
				</div>
			</div>
			<div className="flex flex-col items-center mb-4">
				<div className="flex flex-row items-center">
					<span className="text-lg font-bold text-primary">
						{salePrice}
					</span>
					<span className="text-sm line-through ml-2">
						{regularPrice}
					</span>
				</div>
				<AddToCart {...product} />
			</div>
		</div>
	);
};

export default memo(CartItem);
