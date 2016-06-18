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

  function linkFunc(scope, el) {
    if (scope.vm.type && scope.vm.type !== 'outcome') {
      el.bind('click', (event) => {
        event.stopPropagation();
        scope.vm.showDetailsPopup(scope.vm.type);
        scope.$apply();
      });
    }
  }

}

class AspectController {
  constructor ($log) {
    'ngInject';

    this.showPopup = false;

    this.showDetailsPopup = (type) => {
      this.showPopup = true;
      $log.log('clicked aspect:', type);
    }

    this.hideDetailsPopup = (event) => {
      event.stopPropagation();
      this.showPopup = !this.showPopup;
    }

    this.actionJob = (event, type) => {
      event.stopPropagation();
      $log.log('clicked aspect ' + type + ' and an action for button should trigger');
    }

  }

}
