import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skyblue-marten-522061.hostingersite.com",
			},
		],
	},
};

export default nextConfig;
