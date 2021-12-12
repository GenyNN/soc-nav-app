/**
 * Created by eugeneushakov on 07.10.17.
 */
import { RouterModule } from '@angular/router';
import {NetworkListComponent} from "./network/network-list.component";
import {NetworkEmitentComponent} from "./network/network-emitent.component";

export const routing = RouterModule.forRoot([
  /*
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailComponent,
    canActivate: [LoggedInGuard]
  },*/
  {
    path: 'networks',
    component: NetworkListComponent
  },
  {
    path: 'networks/:networkId',
    component: NetworkEmitentComponent
  },
  {
    path: '',
    redirectTo: '/networks',
    pathMatch: 'full'
  }
]);
