const sideBar = {
	default: [
		{
			title: "Frequently Asked Questions",
			path: "/help/faq/",
		},
		{
			title: "Guides",
			collapsable: false,
			sidebarDepth: 2,
			children: ["/help/guides/getting-started", "/help/guides/troubleshooting"],
		},
	],
};

module.exports = {
	title: "IReader",
	description: "A free and open source manga reader server that runs extensions built for IReader.",
	dest: "./public",
	// head: [
	//   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
	//   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	//   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	// ],
	themeConfig: {
		repo: "IReaderorg/IReader",
		docsRepo: "IReader/website",
		docsDir: "src",
		editLinks: true,
		editLinkText: "",
		lastUpdated: "Last Updated",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Help Center", link: "/help/" },
			{ text: "Download", link: "/download/" },
			{ text: "Discord", link: "https://discord.gg/HBU6zD8c5v" },
		],
		sidebar: {
			"/help/guides/": sideBar.default,
			"/help/faq/": sideBar.default,
		},
	},
};
