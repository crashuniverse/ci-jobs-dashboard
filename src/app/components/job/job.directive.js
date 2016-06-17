export function JobDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      type: '@',
      state: '@',
      name: '@',
      owner: '@',
      timestamp: '@',
      metrics: '@',
      build: '@',
      unitTest: '@',
      functionalTest: '@'
    },
    templateUrl: 'app/components/job/job.html',
    link: linkFunc,
    controller: JobController,
    controllerAs: 'vm',
    bindToController: true
  };

  const stateClassMapping = {
    firewall: {
      pending: 'pending',
      running: 'running',
      rejected: 'fail',
      accepted: 'success'
    },
    build: {
      pending: 'pending',
      running: 'running',
      fail: 'fail',
      success: 'success'
    }
  };

  return directive;

  function linkFunc(scope, el) {
    const classToAdd = stateClassMapping[scope.vm.type] && stateClassMapping[scope.vm.type][scope.vm.state];
    const jobNode = el.children()[0];
    angular.element(jobNode).addClass(classToAdd);
  }

}

class JobController {
  constructor () {
    'ngInject';

  }

}
