export function AspectDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      type: '@',
      details: '='
    },
    templateUrl: 'app/components/aspect/aspect.html',
    link: linkFunc,
    controller: AspectController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function linkFunc() {
  }

}

class AspectController {
  constructor () {
    'ngInject';

  }

}
