/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "dummyimage.com"
            }
        ]
    }
}

module.exports = nextConfig