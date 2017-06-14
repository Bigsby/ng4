import { AnimationsPage } from './app.po';

describe('animations App', () => {
  let page: AnimationsPage;

  beforeEach(() => {
    page = new AnimationsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
