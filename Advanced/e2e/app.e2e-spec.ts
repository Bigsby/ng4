import { AdvancedPage } from './app.po';

describe('advanced App', () => {
  let page: AdvancedPage;

  beforeEach(() => {
    page = new AdvancedPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
