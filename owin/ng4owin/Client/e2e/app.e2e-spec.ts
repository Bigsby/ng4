import { Ng4owinPage } from './app.po';

describe('ng4owin App', () => {
  let page: Ng4owinPage;

  beforeEach(() => {
    page = new Ng4owinPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
