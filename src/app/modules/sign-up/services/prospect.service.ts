import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { IProspect } from '@models/prospects.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ProspectService {
	constructor(private http: HttpClient) {}

	createProspect(prospectData: IProspect): Observable<any> {
		return this.http.post(`${environment.back_url}prospect`, prospectData);
	}
}
