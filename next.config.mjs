/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kclpakistan.com',
          },
        ],
        destination: 'https://kclpakistan.com/:path*',
        permanent: true,
      },
      // Legacy kclpk.org .html permanent redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/About.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/Services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/Schedule_Filing.html',
        destination: '/services/scheduled-flights',
        permanent: true,
      },
      {
        source: '/schedule_filing.html',
        destination: '/services/scheduled-flights',
        permanent: true,
      },
      {
        source: '/Non_Schedule_Filing.html',
        destination: '/services/non-scheduled-flights',
        permanent: true,
      },
      {
        source: '/non_schedule_filing.html',
        destination: '/services/non-scheduled-flights',
        permanent: true,
      },
      {
        source: '/Contact_Us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact_us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Customer_Support.html',
        destination: '/customer-support',
        permanent: true,
      },
      {
        source: '/customer_support.html',
        destination: '/customer-support',
        permanent: true,
      },
      {
        source: '/services/crew-accommodation',
        destination: '/services/crew-logistics',
        permanent: true,
      },
      {
        source: '/services/flight-permission',
        destination: '/services/flight-permissions',
        permanent: true,
      },
      {
        source: '/flight-permissions',
        destination: '/services/flight-permissions',
        permanent: true,
      },
      {
        source: '/flight-permits',
        destination: '/services/flight-permissions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
