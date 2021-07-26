const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const nextI18n = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['uz', 'en'],
    localeSubpaths,
    localePath: path.resolve('./public/translations'),
    detection: {
        lookupCookie: 'next-i18next',
        order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
})
module.exports = nextI18n
exports.i18n = nextI18n.i18n
