import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// platformBrowserDynamic(): vai fazer o carregamento de alguma plataforma, seja web, mobile ou qualquer outra.
// E temos que iniciar essa aplicação carregando um módulo. Nesse caso nós estamos chamado o AppModule que um
// módulo padrão; chamamos de root module.