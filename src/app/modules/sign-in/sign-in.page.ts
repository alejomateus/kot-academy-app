import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@shared/services/authentication.service';
import { CommonsService } from '@shared/services/commons.service';
import { IAuthResponse } from '../shared/models/authentication.interface';
import { SignInValidationMessages } from './models/sign-in';
@Component({
	selector: 'kot-sign-in',
	templateUrl: './sign-in.page.html',
	styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
	signInForm: FormGroup;
	signInValidationMessages: SignInValidationMessages;
	constructor(
		private commonsService: CommonsService,
		private authenticationService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.signInValidationMessages = {
			email: [
				{ type: 'required', message: 'Este campo es requerido' },
				{ type: 'pattern', message: 'No es un correo valido, debe tener @ y dominio' }
			],
			password: [
				{ type: 'required', message: 'Este campo es requerido' },
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

	async signUpNavigation(): Promise<void> {
		await this.commonsService.navigate('sign-up');
	}

	async signIn(): Promise<void> {
		try {
			this.commonsService.showLoading('Validando tus credenciales');
			const authData: IAuthResponse = await this.authenticationService.signIn(this.signInForm.value);
			this.commonsService.dismissLoading();
			this.commonsService.navigate(authData.user.role !== 'admin' ? 'user' : 'admin');
		} catch (error) {
			this.commonsService.showAlert('Credenciales incorrectas');
		} finally {
			setTimeout(() => {
				this.commonsService.dismissLoading();
			}, 100);
		}
	}
}
