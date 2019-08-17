import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TodoWrapperModule } from '@angular-elements/todo-app';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(TodoWrapperModule)
  .catch(err => console.error(err));
