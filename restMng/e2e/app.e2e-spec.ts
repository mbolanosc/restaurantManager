import { RestMngPage } from './app.po';

describe('rest-mng App', () => {
  let page: RestMngPage;

  beforeEach(() => {
    page = new RestMngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
