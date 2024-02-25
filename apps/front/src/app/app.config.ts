import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { global } from './state/global/global';
import { AppState } from './state/appState';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideStore<AppState>({ global },{}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })]
};
