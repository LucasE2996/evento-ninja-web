import { EventoNinjaWebPage } from './app.po';

describe('evento-ninja-web App', () => {
  let page: EventoNinjaWebPage;

  beforeEach(() => {
    page = new EventoNinjaWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
