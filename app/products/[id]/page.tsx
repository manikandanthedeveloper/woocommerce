"use client";

import { useParams } from "next/navigation";

import SingleProduct from "@/products/components/SingleProduct";

export default function ProductPage() {
	const { id } = useParams<{ id: string }>();

	return <SingleProduct productId={id} />;
}
