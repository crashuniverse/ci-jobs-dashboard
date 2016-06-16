describe('directive job', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('code'));

  beforeEach(inject(($compile, $rootScope) => {
    const type = 'firewall';
    const state = 'pending';
    const details = null;
    element = angular.element(`
      <job type=${type} state=${state} details=${details}></job>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });
});
