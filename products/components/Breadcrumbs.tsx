import Link from "next/link";

const Breadcrumbs = ({ productName }: { productName: string }) => {
	return (
		<section id="breadcrumbs" className="pt-6 bg-gray-50">
			<div className="container mx-auto px-4">
				<ol className="list-reset flex">
					<li>
						<Link
							href="/"
							className="font-semibold hover:text-primary"
						>
							Home
						</Link>
					</li>
					<li>
						<span className="mx-2">&gt;</span>
					</li>
					<li>
						<Link
							href="/products"
							className="font-semibold hover:text-primary"
						>
							Shop
						</Link>
					</li>
					<li>
						<span className="mx-2">&gt;</span>
					</li>
					<li>{productName}</li>
				</ol>
			</div>
		</section>
	);
};

export default Breadcrumbs;
