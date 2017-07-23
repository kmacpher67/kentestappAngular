import { NgHelloWorldPage } from './app.po';

describe('ng-hello-world App', () => {
  let page: NgHelloWorldPage;

  beforeEach(() => {
    page = new NgHelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
