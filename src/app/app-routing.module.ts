import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full'  },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/application/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'confo-details',
    loadChildren: () => import('./modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'ai-search',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'alleged-trades',
    loadChildren: () => import('./modules/application/example-alleged-trades/example-alleged-trades.module')
      .then(mod => mod.ExampleAllegedTradesModule)
  },
  {
    path: 'confo-difference',
    loadChildren: () => import('./modules/application/example-confo-difference/example-confo-difference.module')
      .then(mod => mod.ExampleConfoDifferenceModule)
  },  
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'    
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }