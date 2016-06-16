export class DashboardController {
  constructor (JobsService) {
    'ngInject';

    const jobsPromise = JobsService.getJobs();
    jobsPromise.then((jobs) => {
      this.jobs = jobs;
    });
  }
}
