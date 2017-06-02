import { RestaurantMngPage } from './app.po';

describe('restaurant-mng App', () => {
  let page: RestaurantMngPage;

  beforeEach(() => {
    page = new RestaurantMngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
