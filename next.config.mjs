// next.config.js
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });
  
  const nextConfig = {
    // You can add other Next.js config here
    reactStrictMode: true,
  };
  
  module.exports = withPWA(nextConfig);
  