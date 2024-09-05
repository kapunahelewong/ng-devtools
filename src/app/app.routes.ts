import { Routes } from '@angular/router';
import { BuilderPage } from './components/builder-page.component';

export const routes: Routes = [
      // Route for BuilderPage component
  { path: 'builder-demo', component: BuilderPage }, // Optional specific path for the Builder page
  { path: '**', component: BuilderPage }, // Catch all other routes and render the Builder page
];



// import { BuilderPageComponent } from './components/builder-page.component';  // Ensure the path is correct
