import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import postgres from "postgres";

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'allow'
});

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async redirects() {
    if (!process.env.POSTGRES_URL) {
      return [];
    }

    let redirects = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return redirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent
    }));
  },
  
  experimental: {
    mdxRs: true,
    viewTransition: true
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({extension: /\.mdx?$/});

export default withMDX(nextConfig);