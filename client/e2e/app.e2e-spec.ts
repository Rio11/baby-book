import { BabyPage } from './app.po';

describe('baby App', function() {
  let page: BabyPage;

  beforeEach(() => {
    page = new BabyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
