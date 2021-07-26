const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const localeSubpaths = {
    uz: 'uz',
    en: 'en',
}
module.exports = withBundleAnalyzer({
    env: {
        BASE_URL: 'https://algos.uz/v1',
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
})
