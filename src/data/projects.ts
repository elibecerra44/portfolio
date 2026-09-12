import type { ImageMetadata } from 'astro';
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
			'Una selección de proyectos en los que trabajé como UX/UI Designer, abordando desafíos de onboarding, inteligencia artificial y evolución de funcionalidades centrales de la plataforma.',
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
			'Una experiencia pensada para grupos con agendas cambiantes, que ayuda a encontrar el mejor momento para verse y adaptarse cuando surgen imprevistos.',
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
			'Una funcionalidad que permite a las empresas asignar medios de pago a sus empleados, definir límites y mantener el control sobre los gastos desde un único lugar.',
		background: 'mint',
		variant: 'mobile',
		href: '/work/bow-pay',
		image: bowpayhome,
		alt: 'Preview de las pantallas de Bow Pay',
		imageClass: 'project-preview-image',
	},
	{
		name: 'PORFOLIO',
		title: 'Conocé más sobre mi proceso de diseño, en Behance →',
		title2: 'Explorá más trabajos visuales en Dribbble →',
		description:
			'En Behance podés encontrar mis casos de estudio completos, con más detalle sobre el proceso, las decisiones y las soluciones de diseño.',
		background: 'lime',
		variant: 'board',
		href: '/work/nextpoint',
		hidden: true,
	},
];
