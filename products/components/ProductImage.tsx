import Image from "next/image";
import { IProductImage } from "../types/Products.type";

const ProductImage = ({ image }: { image: IProductImage }) => {
	return (
		<Image
			src={image.sourceUrl}
			alt={image.altText || ""}
			className="w-full object-cover mb-4 rounded-none"
			width={260}
			height={110}
			unoptimized
			loading="eager"
		/>
	);
};

export default ProductImage;
