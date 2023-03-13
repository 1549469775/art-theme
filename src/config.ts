const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "Art Theme",
    siteDesc: "A Beautiful Blog To Record Life !",
    lang: "en-us",
    icon: "https://api.lorem.space/image/face?w=96&h=96",
    avatar: "https://api.lorem.space/image/face?w=96&h=96",
    github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://api.lorem.space/image?w=1280&h=780&random=" +
            Math.random() * 1000
        );
    },
    heroPosition: "center",
    startTime: "6/8/2022 10:28:00",
};

export const nav = [
    {
        title: "Search",
        slug: "/search",
        children: [],
    },
    {
        title: "Category",
        slug: "/categories",
        children: [],
    },
    {
        title: "About",
        slug: "/about",
        children: [],
    },
    {
        title: "Contact",
        slug: "/contact",
        children: [],
    },
    {
        title: "Demo",
        slug: "/demo",
        children: [],
    },
];

export const settings = {
    showTOC: false,
    articleTheme: "github",
    postPicture: "first",
    categories: [
        {
            name: "Demo",
            desc: "Some Demo",
            image:
                "https://api.lorem.space/image?w=290&h=80&random=" +
                Math.random() * 1000,
            order: 1,
        },
        {
            name: "Astro",
            desc: "Astro Theme",
            image:
                "https://api.lorem.space/image?w=290&h=80&random=" +
                Math.random() * 1000,
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
