export default {
    titleTemplate: "%s | Arte della Lettura",
    defaultTitle: "Arte della Lettura | Recensioni di Libri e Fumetti",
    description: "Quattro chiacchiere su libri e fumetti.",
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: "https://www.artedellalettura.it",
        site_name: "Arte della Lettura",
        description: "Quattro chiacchiere su libri e fumetti.",
        images: [
            {
                url: "/favicon.png",
            },
        ],
    },
    twitter: {
        handle: "@PandaSekh",
        site: "@ArteLettura",
        cardType: "summary",
    },
    additionalMetaTags: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.png",
        },
        {
            rel: "manifest",
            href: "/manifest.webmanifest",
        },
    ],
};
