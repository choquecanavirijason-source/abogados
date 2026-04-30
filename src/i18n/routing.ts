import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es', 'cn', 'in'],
    defaultLocale: 'es',
    localePrefix: 'always'
});