/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "dummyimage.com"
            },
            {
                protocol:"https",
                hostname:"**"
            }
        ]
    }
}

module.exports = nextConfig