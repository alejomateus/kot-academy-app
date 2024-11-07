import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonsService } from '@shared/services/commons.service';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { firstValueFrom } from 'rxjs';
import { SignUpValidationMessages } from './models/sign-up';
import { ProspectService } from './services/prospect.service';

@Component({
	selector: 'kot-sign-up',
	templateUrl: './sign-up.page.html',
	styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
	signUpForm: FormGroup;
	signUpValidationMessages: SignUpValidationMessages;
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;

	constructor(
		private commonsService: CommonsService,
		private prospectService: ProspectService
	) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.signUpValidationMessages = {
			name: [{ type: 'required', message: 'Este campo es requerido' }],
			phone: [{ type: 'required', message: 'Este campo es requerido' }]
		};
		this.signUpForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required])
		});
	}

	async createProspect(): Promise<void> {
		try {
			this.commonsService.showLoading('Pronto te enviaremos un mensaje ampliando la informacion');
			this.commonsService.dismissLoading();
			await firstValueFrom(this.prospectService.createProspect(this.signUpForm.value));
			await this.commonsService.navigate('home');
		} catch (error) {
			this.commonsService.showAlert('Intentalo de nuevo');
		} finally {
			setTimeout(() => {
				this.commonsService.dismissLoading();
			}, 100);
		}
	}

	async signInNavigation(): Promise<void> {
		await this.commonsService.navigate('sign-in');
	}
}
