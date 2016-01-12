import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Greeter}   from '../../services';

@Component({
  selector: 'ciao',
  template: '<p>{{ message }}</p>'
})

export class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('ciao', routeParams.get('name'));
  }
}
