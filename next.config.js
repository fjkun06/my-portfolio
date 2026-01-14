/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const withNextIntl = require("next-intl/plugin")();

module.exports = withBundleAnalyzer(
  withNextIntl({
    // Other Next.js configuration ...
  })
);
