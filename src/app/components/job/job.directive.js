export function JobDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      type: '@',
      state: '@',
      details: '@'
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
