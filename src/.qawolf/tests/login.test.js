const { launch } = require("qawolf");
const selectors = require("../selectors/login");

describe('login', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://a7c719243dd314535b5a808f5511251c-1697902725.us-east-1.elb.amazonaws.com:443" });
  });

  afterAll(() => browser.close());
  
  it('can click "Login" link', async () => {
    await browser.click(selectors[0]);
  });
  
  it('can click "email" input', async () => {
    await browser.click(selectors[1]);
  });
  
  it('can type into "email" input', async () => {
    await browser.type(selectors[2], "ben@rmit.edu.au");
  });
  
  it("can Tab", async () => {
    await browser.type(selectors[3], "↓Tab↑Tab");
  });
  
  it('can type into "password" input', async () => {
    await browser.type(selectors[4], "1234");
  });
  
  it('can click "Submit" button', async () => {
    await browser.click(selectors[5]);
  });
});