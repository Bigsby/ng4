import { DynamicComponentPage } from './app.po';

describe('dynamic-component App', () => {
  let page: DynamicComponentPage;

  beforeEach(() => {
    page = new DynamicComponentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
