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
						title: 'Introducción a FOREX',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/e58BmyQyEAc?si=_ZB1NhZ9NVkMG1qI'
					},
					{
						title: 'Tipos de órdenes en FOREX',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/1j9GjaiaCkk?si=iv25HrgKAw9fmr2z'
					},
					{
						title: 'LOTAJE Y COMISIONES',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/CJeHzUcn4FQ?si=2d_MnYZhr4eqZacT'
					},
					{
						title: 'Cómo vincular Metatrader 4 o 5 a tu broker',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/7tHd5i3Vqu4?si=qAp4x7hatDMDtweH'
					},
					{
						title: 'Calculadora de lotaje',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/-5o8Mtapyss?si=fe8714IPaLdooQmN'
					}
				];
				this.title = 'Basicos de forex';
				break;
			case '2':
				this.title = 'Analisis de forex';
				this.options = [
					{
						title: 'Cómo analizo FOREX?',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/hXTEDFk31ow?si=oEPjSg1t_-fQF1jd'
					},
					{
						title: 'A-M-D FOREX',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/bOzFHpxCnAs?si=4jEf-KVI2ygLKmEN'
					},
					{
						title: 'Introducción a los patrones armónicos',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/YQiMnvOxP60?si=n-6tuB0ls-hd0_aM'
					},
					{
						title: 'Clase 2 Patron Cypher',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/uo4oBMD-8p0?si=LkcaUAxgXF_-fGPp'
					},
					{
						title: 'Clase 3 Patron CRAB',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/sGnWAWWmJXU?si=DfKjxsTFCapt2RLS'
					},
					{
						title: 'Clase 4 Patron Gartley',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/VV3ifHCy6l8?si=utWeCb73jmwUUyQW'
					},
					{
						title: 'Calculadora de lotaje',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/-5o8Mtapyss?si=fe8714IPaLdooQmN'
					}
				];
				break;
			case '3':
				this.title = 'Ondas de Elliot';
				this.options = [
					{
						title: 'Ondas de Elliot 1',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/3DTkT4CBLNE?si=Vbey6j0wTs2bYjJ4'
					},
					{
						title: 'Ondas de Elliot 2',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/b3WNIArUAQI?si=RWXCkc6KA8UQQPdW'
					},
					{
						title: 'Ondas de Elliot 3',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/3FrXCBJ6TSs?si=fT-lCaW1uddHFVer'
					},
					{
						title: 'Ondas de Elliot 4',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/boOGkGHfmkA?si=mjJ6L5T8fWzuiihU'
					},
					{
						title: 'Calculadora de lotaje',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/-5o8Mtapyss?si=fe8714IPaLdooQmN'
					},
					{
						title: 'Tipos de diagonales',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/dNOIqyievqI?si=SXzNk67R-nj9l4qu'
					}
				];
				break;
			case '4':
				this.title = 'Indicadores';
				this.options = [
					{
						title: 'SMART MONEY CONCEPT (INDICADOR) + configuración',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/ahVmHFU_lxA?si=g9MMCHprntD8_8X4'
					},
					{
						title: 'LOS MEJORES INDICADORES',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/PypsiZ8nG8c?si=LODPcW43rGueFLf4'
					},
					{
						title: 'Herramientas de Fibonacci',
						description: '',
						color: 'light',
						url: 'https://www.youtube.com/embed/f-7JW7j-2mM?si=n342VbdXRshHE4rm'
					}
				];
				break;
			default:
				break;
		}
	}
}
