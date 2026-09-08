import type { ImageMetadata } from 'astro';
import bcombsImage from '../assets/images/bcombs.webp';
import boardspeakImage from '../assets/images/boardspeak.webp';
import nestaraImage from '../assets/images/nestara.webp';
import cliengoOnboardingImage from '../assets/images/cliengo-onboarding.webp';

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
		name: 'Cliengo',
		title: 'Rediseño de onboarding self-service',
		description:
			'Rediseño de la experiencia de onboarding para acompañar a los nuevos usuarios en sus primeros pasos y ayudarlos a descubrir el valor de la plataforma.',
		background: 'lime',
		variant: 'desktop',
		href: '/work/cliengo',
		image: cliengoOnboardingImage,
		alt: 'Pantalla de onboarding de Cliengo mostrando los primeros pasos para configurar la cuenta',
		imageClass: 'project-preview-image',
	},
	{
		name: 'b.combs',
		title: 'A CRM designed around people and the work behind the data',
		description:
			'A more humane CRM experience for teams balancing operational detail with relationship-driven work.',
		background: 'cyan',
		variant: 'split',
		href: '/work/juntemonos',
		image: bcombsImage,
		alt: 'b.combs CRM preview showing nonprofit workflow screens',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Bow Pay',
		title: 'Tarjetas asignables para gastos corporativos',
		description:
			'Una funcionalidad para simplificar la asignación y gestión de fondos destinados a viáticos y gastos operativos.',
		background: 'lavender',
		variant: 'mobile',
		href: '/work/bow-pay',
		image: nestaraImage,
		alt: 'Preview de las pantallas de Bow Pay',
		imageClass: 'project-preview-image',
	},
	{
		name: 'BoardSpeak',
		title: 'Turning community participation into a sustainable growth loop',
		description:
			'A civic product concept that makes participation feel rewarding, visible, and easier to sustain over time.',
		background: 'mint',
		variant: 'board',
		href: '/work/nextpoint',
		image: boardspeakImage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
];
