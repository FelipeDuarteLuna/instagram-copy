import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { provideHttpClient, withFetch } from '@angular/common/http';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhKYVFwWmFZfVtgcF9DYlZVRWY/P1ZhSXxWdkdhXX5YdXdWQGhYVU0=');


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};
