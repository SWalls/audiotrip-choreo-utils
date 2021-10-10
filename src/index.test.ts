import App from './index';

describe('@swalls/node-package-template', () => {
  describe('App', () => {
    it('returns placeholder name', () => {
      expect(App()).toBe('@swalls/node-package-template');
    });
  });
});