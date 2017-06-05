import { GuidePage } from './app.po';

describe('guide App', () => {
  let page: GuidePage;

  beforeEach(() => {
    page = new GuidePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
