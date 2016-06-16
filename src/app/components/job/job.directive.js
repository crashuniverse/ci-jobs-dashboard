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

  return directive;

  function linkFunc() {

  }

}

class JobController {
  constructor () {
    'ngInject';

  }

}
