export class DashboardController {
  constructor (JobsService) {
    'ngInject';

    const jobsPromise = JobsService.getJobs();
    jobsPromise.then((jobs) => {
      this.jobs = jobs;
    });

    this.openJobIndex = null;

    this.toggleJob = (index) => {
      if (this.openJobIndex === index) {
        this.openJobIndex = null;
      } else {
        this.openJobIndex = index;
      }
    }
  }
}
