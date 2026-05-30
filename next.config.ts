import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skyblue-marten-522061.hostingersite.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
};

export default nextConfig;
