import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }

export function tokenGetter() {
	return null;
}
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ThemeModule,
		SharedModule,
		JwtModule.forRoot({
			config: {
				tokenGetter
			}
		})
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()],
	bootstrap: [AppComponent]
})
export class AppModule {}
