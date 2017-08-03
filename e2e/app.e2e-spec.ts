import { OsrsitemcheckerPage } from './app.po';

describe('osrsitemchecker App', () => {
  let page: OsrsitemcheckerPage;

  beforeEach(() => {
    page = new OsrsitemcheckerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
