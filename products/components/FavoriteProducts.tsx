import { Heart } from "lucide-react";
import useFavorites from "../hooks/useFavorites";
import { IProduct } from "../types/Products.type";

const FavoriteProducts = ({ product }: { product: IProduct }) => {
	const { toggleFavorite, isFavorite } = useFavorites();
	return (
		<button
			onClick={() => toggleFavorite(product)}
			className="absolute top-2 right-2 p-1 rounded-none transition cursor-pointer"
		>
			<Heart
				className={
					isFavorite(product.databaseId)
						? "fill-red-500 text-red-500"
						: "text-white"
				}
			/>
		</button>
	);
};

export default FavoriteProducts;
