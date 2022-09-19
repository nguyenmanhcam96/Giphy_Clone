import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

export const HomeRoutingRoutes = RouterModule.forChild(routes);
