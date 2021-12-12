import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from './network.service';

@Component({
  selector: 'network-emitent',
  templateUrl: 'network-emitent.component.html'
})
export class NetworkEmitentComponent implements OnInit, OnDestroy {

  network;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private networkService: NetworkService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.network = this.networkService.getNetwork(params['networkId']);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
