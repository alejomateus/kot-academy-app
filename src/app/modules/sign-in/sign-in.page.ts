import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'kot-sign-in',
	templateUrl: './sign-in.page.html',
	styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
	signInForm: FormGroup;
	signInValidationMessages: any;
	constructor() {}

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
				Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,50}$')
			])
		});
	}
}
