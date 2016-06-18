describe('directive aspect', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('code'));

  beforeEach(inject(($compile, $rootScope) => {
    const type = 'metrics';
    element = angular.element(`
      <aspect type=${type} details="{}"></aspect>
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
