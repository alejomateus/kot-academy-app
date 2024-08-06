import { IFormValidationMessages } from '@app/models/form-validation-messages';

export interface SignUp {
	name: string;
	phone: string;
}

export interface SignUpValidationMessages {
	name: IFormValidationMessages[];
	phone: IFormValidationMessages[];
}
