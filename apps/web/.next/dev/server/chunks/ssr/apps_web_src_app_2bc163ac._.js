module.exports = [
"[project]/apps/web/src/app/lib/i18n/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "dict",
    ()=>dict,
    "isLocale",
    ()=>isLocale,
    "locales",
    ()=>locales,
    "t",
    ()=>t
]);
const locales = [
    "uk",
    "en"
];
const defaultLocale = "uk";
function isLocale(v) {
    return locales.includes(v);
}
const uk = {
    siteTitle: "Фільми",
    projectSubtitle: "Сайт про типи фільмів",
    home: "Головна",
    films: "Типи фільмів",
    news: "Новини",
    documents: "Документи/матеріали",
    calendar: "Календар подій",
    about: "Про проєкт",
    contacts: "Контакти",
    forum: "Форум",
    search: "Пошук",
    chooseLanguage: "Обери мову",
    goToUkrainian: "Перейти українською",
    goToEnglish: "Go to English",
    bannersTitle: "Партнери",
    addNews: "Додати новину",
    filter: "Фільтрація",
    from: "Від",
    to: "До",
    newsType: "Тип новини",
    all: "Усі",
    notFound: "Нічого не знайдено"
};
const en = {
    siteTitle: "Films",
    projectSubtitle: "Educational reference site about film types",
    home: "Home",
    films: "Film types",
    news: "News",
    documents: "Documents/Materials",
    calendar: "Event calendar",
    about: "About",
    contacts: "Contacts",
    forum: "Forum",
    search: "Search",
    chooseLanguage: "Choose a language",
    goToUkrainian: "Go Ukrainian",
    goToEnglish: "Go to English",
    bannersTitle: "Partners",
    addNews: "Add news",
    filter: "Filters",
    from: "From",
    to: "To",
    newsType: "News type",
    all: "All",
    notFound: "Nothing found"
};
const dict = {
    uk,
    en
};
function t(locale, key) {
    return dict[locale][key] ?? String(key);
}
}),
"[project]/apps/web/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "dynamicParams",
    ()=>dynamicParams,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/i18n/index.ts [app-rsc] (ecmascript)");
;
;
const dynamicParams = false;
function generateStaticParams() {
    return [
        {
            locale: "uk"
        },
        {
            locale: "en"
        }
    ];
}
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    // Валидация не строго обязательна при dynamicParams = false, 
    // но полезна для внутренней логики если понадобится
    const safeLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(locale) ? locale : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultLocale"];
    void safeLocale; // заглушка для линтера, так как переменная пока не используется
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=apps_web_src_app_2bc163ac._.js.map