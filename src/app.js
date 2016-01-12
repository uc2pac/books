import {Component, View, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Navbar} from './js/components/navbar';
import {Library} from './js/components/library/library';

@Component({
  selector: 'library-app'
})
@View({
  directives: [ROUTER_DIRECTIVES, Navbar],
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', component: Library, as: 'Library' }
])
export class LibraryApp {
}
