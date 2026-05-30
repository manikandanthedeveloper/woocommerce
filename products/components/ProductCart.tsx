import type { JSX, ReactNode } from "react";

interface ProductCardProps {
	children: ReactNode;
}
const ProductCard = ({ children }: ProductCardProps): JSX.Element => {
	return <div className="bg-white p-4 rounded-none shadow"> {children} </div>;
};

export default ProductCard;
