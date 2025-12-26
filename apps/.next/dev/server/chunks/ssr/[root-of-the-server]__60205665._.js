module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/[locale]/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[locale]/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/lib/content/mock.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBanners",
    ()=>getBanners,
    "getDocuments",
    ()=>getDocuments,
    "getEvents",
    ()=>getEvents,
    "getFilm",
    ()=>getFilm,
    "getFilmTypes",
    ()=>getFilmTypes,
    "getFilmsByType",
    ()=>getFilmsByType,
    "getNews",
    ()=>getNews,
    "getNewsTypes",
    ()=>getNewsTypes
]);
const filmTypes = [
    {
        slug: "feature",
        title: {
            uk: "Художні фільми",
            en: "Feature films"
        },
        description: {
            uk: "Історії з акторами та постановкою, створені для художнього враження.",
            en: "Story-driven films with actors and staged production."
        }
    },
    {
        slug: "documentary",
        title: {
            uk: "Документальні",
            en: "Documentary"
        },
        description: {
            uk: "Фільми про реальні події та людей, з фокусом на фактах.",
            en: "Films about real events and people, focused on facts."
        }
    },
    {
        slug: "animation",
        title: {
            uk: "Мультиплікаційні",
            en: "Animation"
        },
        description: {
            uk: "Історії, створені анімацією: 2D, 3D або змішаними техніками.",
            en: "Stories created via animation: 2D, 3D, or mixed techniques."
        }
    }
];
const films = [
    {
        typeSlug: "feature",
        slug: "inception",
        title: {
            uk: "Початок",
            en: "Inception"
        },
        summary: {
            uk: "Науково-фантастичний трилер про проникнення у сни та ідеї.",
            en: "A sci-fi thriller about entering dreams and planting ideas."
        },
        year: 2010,
        country: "USA/UK",
        durationMin: 148,
        director: "Christopher Nolan",
        posterPath: "/posters/feature.svg",
        trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
        typeSlug: "documentary",
        slug: "planet-earth",
        title: {
            uk: "Планета Земля",
            en: "Planet Earth"
        },
        summary: {
            uk: "Документальний серіал про природу та різноманіття екосистем.",
            en: "A documentary series about nature and ecosystems."
        },
        year: 2006,
        country: "UK",
        durationMin: 50,
        director: "Alastair Fothergill",
        posterPath: "/posters/documentary.svg"
    },
    {
        typeSlug: "animation",
        slug: "spirited-away",
        title: {
            uk: "Віднесені привидами",
            en: "Spirited Away"
        },
        summary: {
            uk: "Анімаційна пригода про дівчинку у світі духів.",
            en: "An animated adventure about a girl in a spirit world."
        },
        year: 2001,
        country: "Japan",
        durationMin: 125,
        director: "Hayao Miyazaki",
        posterPath: "/posters/animation.svg"
    }
];
const newsTypes = [
    {
        slug: "announcement",
        title: {
            uk: "Оголошення",
            en: "Announcement"
        }
    },
    {
        slug: "event",
        title: {
            uk: "Подія",
            en: "Event"
        }
    },
    {
        slug: "update",
        title: {
            uk: "Оновлення",
            en: "Update"
        }
    }
];
const news = [
    {
        id: "n1",
        typeSlug: "announcement",
        title: {
            uk: "Запуск сайту",
            en: "Website launch"
        },
        body: {
            uk: "Ми опублікували першу версію навчального сайту «Фільми».",
            en: "We published the first version of the educational website."
        },
        publishedAt: "2025-12-01"
    },
    {
        id: "n2",
        typeSlug: "event",
        title: {
            uk: "Кінолекторій",
            en: "Film lecture"
        },
        body: {
            uk: "Подія для студентів: обговорюємо документальне кіно.",
            en: "Student event: discussing documentary cinema."
        },
        publishedAt: "2025-12-05",
        eventFrom: "2025-12-15",
        eventTo: "2025-12-15"
    },
    {
        id: "n3",
        typeSlug: "update",
        title: {
            uk: "Додано новий розділ",
            en: "New section added"
        },
        body: {
            uk: "З’явився розділ «Документи/матеріали».",
            en: "The “Documents/Materials” section is now available."
        },
        publishedAt: "2025-12-07"
    }
];
const documents = [
    {
        id: "d1",
        title: {
            uk: "Методичка (PDF)",
            en: "Guidelines (PDF)"
        },
        description: {
            uk: "Короткі матеріали для студентів.",
            en: "Short student materials."
        },
        kind: "link",
        url: "https://example.com"
    },
    {
        id: "d2",
        title: {
            uk: "Посилання на відео",
            en: "Video link"
        },
        description: {
            uk: "Добірка трейлерів.",
            en: "Trailer collection."
        },
        kind: "link",
        url: "https://www.youtube.com"
    }
];
const events = [
    {
        id: "e1",
        date: "2025-12-15",
        title: {
            uk: "Кінолекторій",
            en: "Film lecture"
        },
        description: {
            uk: "Зустріч та обговорення.",
            en: "Meetup and discussion."
        }
    }
];
const banners = [
    {
        id: "b1",
        title: {
            uk: "Партнер 1",
            en: "Partner 1"
        },
        url: "https://example.com",
        imagePath: "/banners/partner1.svg"
    },
    {
        id: "b2",
        title: {
            uk: "Партнер 2",
            en: "Partner 2"
        },
        url: "https://example.org",
        imagePath: "/banners/partner2.svg"
    }
];
function getFilmTypes() {
    return filmTypes;
}
function getFilmsByType(typeSlug) {
    return films.filter((f)=>f.typeSlug === typeSlug);
}
function getFilm(typeSlug, filmSlug) {
    return films.find((f)=>f.typeSlug === typeSlug && f.slug === filmSlug);
}
function getNewsTypes() {
    return newsTypes;
}
function getNews() {
    return news.slice().sort((a, b)=>a.publishedAt < b.publishedAt ? 1 : -1);
}
function getDocuments() {
    return documents;
}
function getEvents() {
    return events;
}
function getBanners() {
    return banners;
}
}),
"[project]/apps/web/src/components/BannerBlock.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "BannerBlock-module__Fd5RdW__item",
  "row": "BannerBlock-module__Fd5RdW__row",
  "small": "BannerBlock-module__Fd5RdW__small",
  "wrap": "BannerBlock-module__Fd5RdW__wrap",
});
}),
"[project]/apps/web/src/components/BannerBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerBlock",
    ()=>BannerBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/i18n/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/content/mock.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$basePath$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/basePath.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BannerBlock.module.css [app-rsc] (css module)");
;
;
;
;
;
function BannerBlock({ locale }) {
    const banners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(locale, "bannersTitle")
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                    lineNumber: 11,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].row,
                children: banners.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                        href: b.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$basePath$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withBasePath"])(b.imagePath),
                                alt: b.title[locale]
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: b.title[locale]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].small,
                                        children: b.url
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, b.id, true, {
                        fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/BannerBlock.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/styles/Page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Page-module__xOXIYq__actions",
  "arrow": "Page-module__xOXIYq__arrow",
  "bannerSection": "Page-module__xOXIYq__bannerSection",
  "buttonPrimary": "Page-module__xOXIYq__buttonPrimary",
  "buttonSecondary": "Page-module__xOXIYq__buttonSecondary",
  "cardDescription": "Page-module__xOXIYq__cardDescription",
  "cardGrid": "Page-module__xOXIYq__cardGrid",
  "cardLink": "Page-module__xOXIYq__cardLink",
  "cardTitle": "Page-module__xOXIYq__cardTitle",
  "container": "Page-module__xOXIYq__container",
  "description": "Page-module__xOXIYq__description",
  "fadeInUp": "Page-module__xOXIYq__fadeInUp",
  "featuredContent": "Page-module__xOXIYq__featuredContent",
  "featuredSection": "Page-module__xOXIYq__featuredSection",
  "h1": "Page-module__xOXIYq__h1",
  "h2": "Page-module__xOXIYq__h2",
  "h3": "Page-module__xOXIYq__h3",
  "hero": "Page-module__xOXIYq__hero",
  "lead": "Page-module__xOXIYq__lead",
  "metaItem": "Page-module__xOXIYq__metaItem",
  "metaLabel": "Page-module__xOXIYq__metaLabel",
  "metaList": "Page-module__xOXIYq__metaList",
  "metaValue": "Page-module__xOXIYq__metaValue",
  "moodCard": "Page-module__xOXIYq__moodCard",
  "moodSection": "Page-module__xOXIYq__moodSection",
  "movieInfo": "Page-module__xOXIYq__movieInfo",
  "poster": "Page-module__xOXIYq__poster",
  "posterPlaceholder": "Page-module__xOXIYq__posterPlaceholder",
  "posterWrapper": "Page-module__xOXIYq__posterWrapper",
  "quote": "Page-module__xOXIYq__quote",
  "quoteAuthor": "Page-module__xOXIYq__quoteAuthor",
  "quoteSection": "Page-module__xOXIYq__quoteSection",
  "quoteText": "Page-module__xOXIYq__quoteText",
  "sectionHeader": "Page-module__xOXIYq__sectionHeader",
});
}),
"[project]/apps/web/src/pages/HomePage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamicParams",
    ()=>dynamicParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/i18n/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BannerBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/styles/Page.module.css [app-rsc] (css module)");
;
;
;
;
;
const dynamicParams = false;
async function Home({ params }) {
    const { locale } = await params;
    const safeLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(locale) ? locale : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultLocale"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].h1,
                        children: "Затишок у кожному кадрі"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].lead,
                        children: "Ласкаво просимо до нашої колекції. Тут ми збираємо фільми не за рейтингами, а за емоціями. Історії, що зігрівають, як горнятко кави в дощовий день."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].bannerSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BannerBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BannerBlock"], {
                    locale: safeLocale
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featuredSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].h2,
                            children: "Вибір вечора"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featuredContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].posterWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].poster,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].posterPlaceholder,
                                        children: "POSTER 1"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].movieInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].h3,
                                        children: "Гранд-готель «Будапешт»"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                                        children: "Неймовірна симетрія, пастельні кольори та тонка іронія. Ідеальний вибір для знайомства з нашою естетикою."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaList,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaLabel,
                                                        children: "Рік:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaValue,
                                                        children: "2014"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaLabel,
                                                        children: "Жанр:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaValue,
                                                        children: "Трагікомедія"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaLabel,
                                                        children: "Режисер:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metaValue,
                                                        children: "Вес Андерсон"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].actions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].buttonPrimary,
                                                children: "Дивитись трейлер"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].buttonSecondary,
                                                children: "Додати в обране"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].moodSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].h2,
                            children: "Під настрій"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].moodCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: "Осіння меланхолія"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardDescription,
                                        children: "Фільми, коли хочеться загорнутися у плед. Дощ за вікном вітається."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardLink,
                                        children: [
                                            "Переглянути добірку",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].arrow,
                                                "aria-hidden": "true",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].moodCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: "Архітектура мрій"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardDescription,
                                        children: "Кіно, де міста та будинки грають головні ролі. Естетичне задоволення."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardLink,
                                        children: [
                                            "Переглянути добірку",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].arrow,
                                                "aria-hidden": "true",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].quoteSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].quote,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].quoteText,
                            children: "«Кіно — це життя, з якого вирізали все нудне.»"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$styles$2f$Page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].quoteAuthor,
                            children: "— Альфред Гічкок"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/pages/HomePage.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/pages/HomePage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/[locale]/(site)/page.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/pages/HomePage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/src/app/[locale]/(site)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f5b$locale$5d2f28$site$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/[locale]/(site)/page.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/pages/HomePage.tsx [app-rsc] (ecmascript)");
}),
"[project]/apps/web/src/app/[locale]/(site)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[locale]/(site)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60205665._.js.map