describe('service JobsService', () => {
  beforeEach(angular.mock.module('code'));

  it('should be registered', inject(JobsService => {
    expect(JobsService).not.toEqual(null);
  }));

  describe('Jobs function', () => {
    it('should exist', inject(JobsService => {
      expect(JobsService.getJobs).not.toBeNull();
    }));

    it('should return array of object', inject(JobsService => {
      const promise = JobsService.getJobs();
      expect(promise).toEqual(jasmine.any(Object));
    }));
  });
});
