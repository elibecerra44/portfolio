import type { ImageMetadata } from 'astro';
import bcombsImage from '../assets/images/bcombs.webp';
import boardspeakImage from '../assets/images/boardspeak.webp';
import nestaraImage from '../assets/images/nestara.webp';
import cliengoOnboardingImage from '../assets/images/cliengo-home.webp';
import juntemonoshome from '../assets/images/juntemonos-home.webp';
import bowpayhome from '../assets/images/bowpay-home.webp';

export type Project = {
	name: string;
	title: string;
	description: string;
	background: 'lime' | 'cyan' | 'lavender' | 'mint';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
	{
		name: 'CLIENGO · B2B SAAS',
		title: 'Diseño de experiencias para un CRM que centraliza la gestión de leads e incorpora IA.',
		description:
			'seleccion de proyectos en Cliengo',
		background: 'lavender',
		variant: 'desktop',
		href: '/work/cliengo',
		image: cliengoOnboardingImage,
		alt: 'Pantallas de cliengo',
		imageClass: 'project-preview-image',
	},
	{
		name: 'UX CHALLENGE · SOCIAL APP',
		title: 'App para mantener encuentros frecuentes con tu grupo de amigos',
		description:
			'Diseño de app para mantener encuentros frecuentes con tu grupo de amigos',
		background: 'cyan',
		variant: 'split',
		href: '/work/juntemonos',
		image: juntemonoshome,
		alt: 'imaganes de 3 pantallas mobile de juntemonos',
		imageClass: 'project-preview-image',
	},
	{
		name: 'UX CHALLENGE · FINTECH',
		title: 'Tarjetas Asignables simplifica la asignación y administración de gastos corporativos.',
		description:
			'Una funcionalidad para simplificar la asignación y gestión de fondos destinados a viáticos y gastos operativos.',
		background: 'mint',
		variant: 'mobile',
		href: '/work/bow-pay',
		image: bowpayhome,
		alt: 'Preview de las pantallas de Bow Pay',
		imageClass: 'project-preview-image',
	},
	{
		name: 'BoardSpeak',
		title: 'Turning community participation into a sustainable growth loop',
		description:
			'A civic product concept that makes participation feel rewarding, visible, and easier to sustain over time.',
		background: 'lime',
		variant: 'board',
		href: '/work/nextpoint',
		image: boardspeakImage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
];
