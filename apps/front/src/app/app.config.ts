import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { globalReducer } from '@state/global.reducer';
import { provideHttpClient } from '@angular/common/http';
import { AppStateModel } from '@state/global.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore<AppStateModel>({ global: globalReducer },{}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })]
};
