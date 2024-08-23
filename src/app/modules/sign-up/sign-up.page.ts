import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonsService } from '@shared/services/commons.service';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { SignUpValidationMessages } from './models/sign-up';

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

	constructor(private commonsService: CommonsService) {}

	ngOnInit(): void {
		sessionStorage.setItem('auth', '0');
		this.initForm();
	}

	initForm(): void {
		this.signUpValidationMessages = {
			name: [{ type: 'required', message: '"Este campo es requerido' }],
			phone: [{ type: 'required', message: '"Este campo es requerido' }]
		};
		this.signUpForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			phone: new FormControl(undefined, [Validators.required])
		});
	}

	signInNavigation(): void {
		this.commonsService.navigate('sign-in');
	}
}
