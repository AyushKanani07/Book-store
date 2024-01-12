import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { route } from './auth/auth-routing.module';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideAnimations()],
  // sample: [provideRouter(route)]
};
