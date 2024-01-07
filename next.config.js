/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents:true
    },
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