import { IatfbPage } from './app.po';

describe('iatfb App', function() {
  let page: IatfbPage;

  beforeEach(() => {
    page = new IatfbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
