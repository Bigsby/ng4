import { DynamicFormingPage } from './app.po';

describe('dynamic-forming App', () => {
  let page: DynamicFormingPage;

  beforeEach(() => {
    page = new DynamicFormingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
