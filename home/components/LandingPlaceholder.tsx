import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LandingPlaceholder = () => {
	return (
		<>
			{/* Header */}
			<header className="bg-slate-950">
				<div className="container mx-auto h-20 px-6 flex items-center justify-between">
					{/* Logo */}
					<div className="space-y-2">
						<Skeleton className="h-8 w-40 bg-slate-700" />
						<Skeleton className="h-3 w-24 bg-slate-700" />
					</div>

					{/* Navigation */}
					<div className="hidden md:flex gap-8">
						<Skeleton className="h-5 w-12 bg-slate-700" />
						<Skeleton className="h-5 w-12 bg-slate-700" />
						<Skeleton className="h-5 w-12 bg-slate-700" />
						<Skeleton className="h-5 w-12 bg-slate-700" />
					</div>

					{/* Actions */}
					<div className="flex items-center gap-3">
						<Skeleton className="h-10 w-24 rounded-full bg-slate-700" />
						<Skeleton className="h-10 w-24 rounded-full bg-slate-700" />
						<Skeleton className="h-8 w-8 rounded-full bg-slate-700" />
						<Skeleton className="h-8 w-8 rounded-full bg-slate-700" />
					</div>
				</div>
			</header>

			{/* Hero Banner */}
			<section className="relative h-[600px] overflow-hidden">
				{/* Background Image */}
				<Skeleton className="absolute inset-0 w-full h-full rounded-none" />

				{/* Content */}
				<div className="relative z-10 container mx-auto h-full flex items-center">
					<div className="max-w-xl space-y-6">
						{/* Title */}
						<Skeleton className="h-20 w-[420px]" />

						{/* Description */}
						<div className="space-y-3">
							<Skeleton className="h-6 w-[320px]" />
							<Skeleton className="h-6 w-[280px]" />
						</div>

						{/* CTA */}
						<Skeleton className="h-12 w-36 rounded-full" />
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPlaceholder;
