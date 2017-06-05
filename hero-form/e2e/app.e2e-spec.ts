import { HeroFormPage } from './app.po';

describe('hero-form App', () => {
  let page: HeroFormPage;

  beforeEach(() => {
    page = new HeroFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
