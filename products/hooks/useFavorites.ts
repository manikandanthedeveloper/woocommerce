"use client";

import { useEffect, useState } from "react";
import { IFavoriteProduct } from "../types/Products.type";

const STORAGE_KEY = "favorite_products";

const useFavorites = () => {
	const [favorites, setFavorites] = useState<IFavoriteProduct[]>([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem(STORAGE_KEY);
		const setMyFavorites = async (favorites: string) => {
			await setFavorites(JSON.parse(favorites || "[]"));
		};
		if (storedFavorites) {
			setMyFavorites(storedFavorites);
		}
	}, []);

	const toggleFavorite = (product: IFavoriteProduct) => {
		setFavorites((prev) => {
			const exists = prev.some(
				(item) => item.databaseId === product.databaseId,
			);

			let updatedFavorites;

			if (exists) {
				updatedFavorites = prev.filter(
					(item) => item.databaseId !== product.databaseId,
				);
			} else {
				updatedFavorites = [...prev, product];
			}

			localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));

			return updatedFavorites;
		});
	};

	const isFavorite = (productId: number) => {
		return favorites.some((item) => item.databaseId === productId);
	};

	return {
		favorites,
		toggleFavorite,
		isFavorite,
	};
};

export default useFavorites;
