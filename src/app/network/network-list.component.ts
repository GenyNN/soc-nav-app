import { Component } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'network-list',
  templateUrl: 'network-list.component.html'
})
export class NetworkListComponent {

  networks;

  constructor(networkService: NetworkService) {
    this.networks = networkService.getNetworks();
  }

}
