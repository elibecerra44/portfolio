export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://resilient-cheesecake-ed7aed.netlify.app';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Eliana Becerra',
	title: 'Eliana Becerra | Product Designer',
	description:
		'Diseñadora UX/UI con base en diseño gráfico y experiencia en productos digitales. Me enfoco en entender problemas reales y transformarlos en soluciones claras, centradas en las personas.',
	siteUrl: normalizedSiteUrl,
	email: 'eli.becerra44@gmail.com',
	locale: 'es-AR',
	authorName: 'Eliana Becerra',
	authorRole: 'Product Designer',
	keywords: [
		'Product Designer',
		'UX Designer',
		'UI Designer',
		'UX/UI Designer',
		'SaaS Product Designer',
		'Digital Product Design',
		'UX Portfolio',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/work/nextpoint', label: 'Case Study' },
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/elianalaurabecerra/', label: 'LinkedIn' },
		{ href: 'https://www.behance.net/elianabecerra', label: 'Behance' },
	],
};
```
