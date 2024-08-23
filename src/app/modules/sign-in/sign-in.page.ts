import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonsService } from '@shared/services/commons.service';
import { SignInValidationMessages } from './models/sign-in';
@Component({
	selector: 'kot-sign-in',
	templateUrl: './sign-in.page.html',
	styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
	signInForm: FormGroup;
	signInValidationMessages: SignInValidationMessages;
	constructor(private commonsService: CommonsService) {}

	ngOnInit(): void {
		this.initForm();
		sessionStorage.setItem('auth', '0');
	}

	initForm(): void {
		this.signInValidationMessages = {
			email: [
				{ type: 'required', message: '"Este campo es requerido' },
				{ type: 'pattern', message: 'No es un correo valido, debe tener @ y dominio' }
			],
			password: [
				{ type: 'required', message: '"Este campo es requerido' },
				{ type: 'pattern', message: 'La contraseña no es valida' }
			]
		};
		this.signInForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern('^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern(
					'^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+={};:\'\\"|,.<>?/~`])[\\w!@#$%^&*()_+={};:\'\\"|,.<>?/~`]{8,50}$'
				)
			])
		});
	}

	signUpNavigation(): void {
		this.commonsService.navigate('sign-up');
	}

	signIn(): void {
		this.commonsService.navigate('user/home');
	}
}
