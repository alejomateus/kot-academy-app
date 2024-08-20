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
            },

          ];
          break;
			default:
				break;
		}
	}
}
