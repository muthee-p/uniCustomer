/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
	nextConfig,
	env: {
		MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN
	},
};
