export class JobsService {
  constructor ($q, $http) {
    'ngInject';

    this.deferred = $q.defer();

    $http.get('app/components/jobs/jobs.api-stub.json')
      .success((data) => {
        this.deferred.resolve(data.jobs);
      });
  }

  getJobs() {
    return this.deferred.promise;
  }
}
