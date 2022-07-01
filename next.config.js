/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa');

const nextConfig = withPwa({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
