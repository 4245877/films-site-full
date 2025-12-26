module.exports = [
"[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
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
"[project]/apps/web/src/pages/FilmsIndexPage.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "FilmsIndexPage-module__Pjs3tq__card",
  "cardAppear": "FilmsIndexPage-module__Pjs3tq__cardAppear",
  "cardMetaRow": "FilmsIndexPage-module__Pjs3tq__cardMetaRow",
  "cardText": "FilmsIndexPage-module__Pjs3tq__cardText",
  "cardTitle": "FilmsIndexPage-module__Pjs3tq__cardTitle",
  "grid": "FilmsIndexPage-module__Pjs3tq__grid",
  "h1": "FilmsIndexPage-module__Pjs3tq__h1",
  "hero": "FilmsIndexPage-module__Pjs3tq__hero",
  "heroText": "FilmsIndexPage-module__Pjs3tq__heroText",
  "list": "FilmsIndexPage-module__Pjs3tq__list",
  "note": "FilmsIndexPage-module__Pjs3tq__note",
  "page": "FilmsIndexPage-module__Pjs3tq__page",
  "pill": "FilmsIndexPage-module__Pjs3tq__pill",
  "pulse": "FilmsIndexPage-module__Pjs3tq__pulse",
  "section": "FilmsIndexPage-module__Pjs3tq__section",
  "sectionTitle": "FilmsIndexPage-module__Pjs3tq__sectionTitle",
  "stat": "FilmsIndexPage-module__Pjs3tq__stat",
  "statLabel": "FilmsIndexPage-module__Pjs3tq__statLabel",
  "statValue": "FilmsIndexPage-module__Pjs3tq__statValue",
  "stats": "FilmsIndexPage-module__Pjs3tq__stats",
});
}),
"[project]/apps/web/src/pages/FilmsIndexPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilmTypesPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/i18n/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/content/mock.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/pages/FilmsIndexPage.module.css [app-rsc] (css module)");
;
;
;
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
// Локальная защита, чтобы не зависеть от runtime-экспортов из i18n.
const defaultLocale = "uk";
function isLocale(value) {
    return value === "uk" || value === "en";
}
function ukFilmsWord(n) {
    const mod100 = n % 100;
    const mod10 = n % 10;
    if (mod100 >= 11 && mod100 <= 14) return "фільмів";
    if (mod10 === 1) return "фільм";
    if (mod10 >= 2 && mod10 <= 4) return "фільми";
    return "фільмів";
}
const copy = {
    uk: {
        intro: "Тут зібрані основні типи кіно. Натисни на картку — і перейдеш до добірки фільмів цього типу.",
        howToTitle: "Як користуватися",
        howTo: [
            "Обери тип фільмів, який тобі цікавий.",
            "Прочитай короткий опис — він підкаже, на що звернути увагу.",
            "Відкрий добірку та подивись приклади."
        ],
        statTypes: "типи",
        statFilms: "фільми",
        filmsInSection: (n)=>`${n} ${ukFilmsWord(n)}`,
        note: "Дані на цій сторінці навчальні (mock).",
        empty: "Нічого не знайдено"
    },
    en: {
        intro: "Here are the main film types. Click a card to open a curated list of films for that type.",
        howToTitle: "How to use",
        howTo: [
            "Choose a film type you’re interested in.",
            "Read the short description to understand the focus.",
            "Open the list and explore examples."
        ],
        statTypes: "types",
        statFilms: "films",
        filmsInSection: (n)=>`${n} ${n === 1 ? "film" : "films"}`,
        note: "This page uses educational mock data.",
        empty: "Nothing found"
    }
};
async function FilmTypesPage({ params }) {
    const resolvedParams = await params;
    const safeLocale = isLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale;
    const heading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(safeLocale, "films");
    if (!heading) {
        throw new Error(`[films] t(locale,"films") is undefined for locale=${safeLocale}`);
    }
    const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFilmTypes"])();
    if (!types) {
        throw new Error(`[films] getFilmTypes() is undefined for locale=${safeLocale}`);
    }
    const typeCount = types.length;
    const totalFilms = types.reduce((sum, ft)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFilmsByType"])(ft.slug).length, 0);
    const c = copy[safeLocale];
    const emptyMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(safeLocale, "notFound") || c.empty;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].h1,
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroText,
                        children: c.intro
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].stats,
                        "aria-label": "Stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].statValue,
                                        children: typeCount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: c.statTypes
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].statValue,
                                        children: totalFilms
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: c.statFilms
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid,
                "data-empty-message": emptyMessage,
                children: types.map((ft)=>{
                    const title = ft?.title?.[safeLocale];
                    if (!title) {
                        throw new Error(`[films] ft.title[locale] is undefined for locale=${safeLocale}, slug=${ft?.slug}`);
                    }
                    const description = ft?.description?.[safeLocale];
                    if (description == null) {
                        throw new Error(`[films] ft.description[locale] is undefined for locale=${safeLocale}, slug=${ft?.slug}`);
                    }
                    const filmsInType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$content$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFilmsByType"])(ft.slug).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${safeLocale}/films/${ft.slug}/`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card,
                        "aria-label": `${title} — ${c.filmsInSection(filmsInType)}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardText,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardMetaRow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].pill,
                                    children: c.filmsInSection(filmsInType)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        ]
                    }, ft.slug, true, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: c.howToTitle
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list,
                        children: c.howTo.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].note,
                        children: c.note
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/pages/FilmsIndexPage.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/[locale]/(site)/films/page.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/pages/FilmsIndexPage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/src/app/[locale]/(site)/films/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f5b$locale$5d2f28$site$292f$films$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/[locale]/(site)/films/page.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$pages$2f$FilmsIndexPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/pages/FilmsIndexPage.tsx [app-rsc] (ecmascript)");
}),
"[project]/apps/web/src/app/[locale]/(site)/films/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[locale]/(site)/films/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__85f65079._.js.map