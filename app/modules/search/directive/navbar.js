import '../sass/navbar.scss';

/*@ngInject*/
export default class Navbar {
  constructor() {
    this.template = require('../view/navbar.html');
    this.restrict = 'E';
    this.scope = {};
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes, controller) {
    scope.isActive = function(viewLocation) {
      return viewLocation === controller.$location.path();
    };
  }
}
