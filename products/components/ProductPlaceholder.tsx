import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPlaceholder = () => {
	return (
		<Card className="w-full max-w-xs rounded-none">
			<CardHeader>
				<Skeleton className="aspect-video w-full rounded-none" />
			</CardHeader>
			<CardContent>
				<Skeleton className="h-4 w-2/3 mb-2 rounded-none" />
				<Skeleton className="h-4 w-1/4 rounded-none mb-2" />
				<Skeleton className="h-4 w-1/2 rounded-none" />
				<Skeleton className="h-8 w-2/4 rounded-none mt-4 bg-black py-2 px-4" />
			</CardContent>
		</Card>
	);
};

export default ProductPlaceholder;
