import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardOptions } from '@models/dashboard-options';

@Component({
	selector: 'kot-sub-course-syllabus',
	templateUrl: './sub-course-syllabus.component.html',
	styleUrls: ['./sub-course-syllabus.component.scss']
})
export class SubCourseSyllabusComponent implements OnInit {
	topicClass: string;
	options: DashboardOptions[];
	title: string;
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.topicClass = this.route.snapshot.paramMap.get('id');
		this.getVideos();
	}

	getVideos() {
		switch (this.topicClass) {
			case '1':
				this.options = [
					{
						title: 'Introducción al trading',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/G6fhAvuoTRg?si=_9UCk7K6AchIXSiQ'
					},
					{
						title: 'ABC de las binarias',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/kHOxB_V7W_E?si=ymDTcozCIjXStGxm'
					},
					{
						title: 'El secreto de la rentabilidad',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/VPe0_qFmFDM?si=yGpb1iefTstkilOQ'
					},
					{
						title: 'Como copiar y pegar entradas',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/wE6f-yvIEPs?si=sDhvFDDBlsKciUu-'
					},
					{
						title: 'Como usar tradingview - Explicación simple',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/hFOLb7l4SW8?si=qFC_4tncA6irtXzj'
					},
					{
						title: 'Plan de trading',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/hFiVrWBtN2c?si=npdoBwB87np4dZCE'
					},
					{
						title: 'Soportes y Resistencias',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/UWLe6_NvL8I?si=hXjVwcobYOqL4Uvi'
					},
					{
						title: 'Smart Money en binarias',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/TczYDCfbCeo?si=PeS8JGD07tcFRz1S'
					},
					{
						title: 'Binarias en tu celular',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/Ay1o-In3YTI?si=ogeB61XW48ATCxwt'
					},
					{
						title: 'Pasos para recargar en 1Prime',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/tqFwMjUMq8Q?si=ioyCv1uqjqTbve7R'
					},
					{
						title: 'Como fondear en 1Prime',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/36clDdJGFcE?si=SorU857eyeVrU3Is'
					},
					{
						title: 'Copytrading 2.0',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/jrxG6oOgu0w?si=yZWPGq3L1RglzOJB'
					}
				];
				this.title = 'Basicos del trading';
				break;
			case '2':
				this.title = 'Conceptos en vivo';
				this.options = [
					{
						title: 'Como ganar dinero con imbalances (Explicación sencilla)',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/bPK4jRiJzzI?si=4u57FWinJuNmTUxF'
					},
					{
						title: 'Imbalances 2.0',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/XVZwH7c5nos?si=NKYvZE2omcK9_Mk_'
					},
					{
						title: 'Como ganar dinero con análisis de Order Block 1',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/o6IvW1EaMAk?si=ximetQSQ7hW0B_uY'
					},
					{
						title: 'Como ganar dinero con análisis de Order Block 2',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/ILG3DTOX0DY?si=FuLUORD-7nEPGjeh'
					},
					{
						title: 'Cómo identificar cambios de dirección en el mercado',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/OxFspgHKyNs?si=_i5b41lDn034oKl2'
					},
					{
						title: 'FIBONACCI! (GANA DINERO CON ESTA HERRAMIENTA)',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/zKnYwTk_SmY?si=V-lnG_VuUt8a0QlO'
					},
					{
						title: 'ESTRATEGIA PERSONAL PARA GANAR DINERO EN LOS MERCADOS FINANCIEROS!',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/fOHQP2mkv60?si=h1ly2Id6pYXn1kGr'
					},
					{
						title: 'Cómo analizar para operar',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/qAwtQO4k74I?si=ns8U4uiigfowrQYp'
					},
					{
						title: 'SMART MONEY',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/TczYDCfbCeo?si=ZJzBY_uZuAH6Uahw'
					},
					{
						title: 'EL MEJOR INDICADOR! y explicación, final de mi estrategia',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/pA7DOIVdy9U?si=0YOL5Whxi2OulecR'
					},
					{
						title: 'Patrones de Liquidez',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/t6EVMsETRGY?si=myiIhMMrcAW1GZ1a'
					},
					{
						title: 'BREAKER BLOCK',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/rpE4H7GkM7Y?si=6UsN4PZ1D1gG212c'
					},
					{
						title: 'Análisis 1:2 - Binarias',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/BIAWhnbtves?si=t_f-WMXSMk4fb35c'
					},
					{
						title: 'CORONA!!!!!',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/efe3az82JOM?si=beWK8dRVfSxG3Qw8'
					},
					{
						title: 'ANÁLISIS A-M-D',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/km3sRsWtprA?si=6sqJywrh6rw32vYD'
					},
					{
						title: 'Herramientas de Fibonacci',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/b6Uahjl2vUs?si=mmmHNCIfHhst0W48'
					},
					{
						title: 'Cómo operar noticias fundamentales en binarias!!!',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/f-7JW7j-2mM?si=akGeCsnYN0qe8Wv-'
					}
				];
				break;
			case '3':
				this.title = 'Patrones armónicos';
				this.options = [
					{
						title: 'Introducción a los patrones armónicos',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/YQiMnvOxP60?si=n-6tuB0ls-hd0_aM'
					},
					{
						title: 'Patron Cypher',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/uo4oBMD-8p0?si=LkcaUAxgXF_-fGPp'
					},
					{
						title: 'Patron CRAB',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/sGnWAWWmJXU?si=DfKjxsTFCapt2RLS'
					},
					{
						title: 'Patron Gartley',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/VV3ifHCy6l8?si=utWeCb73jmwUUyQW'
					},
					{
						title: 'Patrones armonicos 2.0',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/kFaTlA8UGHs?si=Db3SZpO7iROtXN_7'
					}
				];
				break;
			case '4':
				this.title = 'Lectura de mercado de alto nivel';
				this.options = [
					{
						title: 'Tendencia de mercado 1',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/AU3SD0R732s?si=mzUaB2NQINFWrEX4'
					},
					{
						title: 'Tendencia de mercado 2',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/UzoxybQPRTY?si=wzk2zO92pL-XgZXu'
					},
					{
						title: 'Order Block (Avanzado)',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/0uB4ED4NNP8?si=G5PlXpkYFMslzZmt'
					},
					{
						title: 'IMBALANCES',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/8HE-cv7NHiw?si=ZBuMc2dMJOAhQHpZ'
					},
					{
						title: 'Qué Order Block operar?',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/J-KInAYgAnA?si=d3RcYBUAuqlQZOr9'
					},
					{
						title: 'Liquidez 1',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/vKMcr3GBpR0?si=yTwCTGSIlluos8ar'
					},
					{
						title: 'Liquidez 2',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/vTqucPOkxSQ?si=R9XvRoc58BlmQzbj'
					},
					{
						title: 'Liquidez 3',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/oS9__zxoMtM?si=oiKx3Wtltuc4J4wh'
					},
					{
						title: 'Fibonacci (Avanzado)',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/EHcRVPDLHHg?si=bn8OupPKS_opADWr'
					},
					{
						title: 'Agotamiento de mercado',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/LgXZQpYCx-Q?si=zglDRfhVdbQZ7KZq'
					},
					{
						title: 'Patrones de vela',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/Oby-ENtr5mU?si=duvflZzetjS7A66o'
					},
					{
						title: 'Mechas de mercado',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/gfeQvfmbAyU?si=dpgT3dX1l-8Pjidp'
					}
				];
				break;
			default:
				break;
		}
	}
}
