import { SocNavAppPage } from './app.po';

describe('soc-nav-app App', function() {
  let page: SocNavAppPage;

  beforeEach(() => {
    page = new SocNavAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
