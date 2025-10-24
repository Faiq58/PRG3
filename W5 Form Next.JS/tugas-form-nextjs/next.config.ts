import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Gunakan Webpack, bukan Turbopack
    experimental: {
        turbo: {
            enabled: false,
        },
    },
    webpack: (config) => {
        return config; // tetap gunakan Webpack bawaan
    },
};

export default nextConfig;
