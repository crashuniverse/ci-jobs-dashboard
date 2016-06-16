describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('code'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm).toBeDefined();
  });

});
