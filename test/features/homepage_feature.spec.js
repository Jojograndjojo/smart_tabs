var Browser = require('zombie');

Browser.localhost('example.com', 8000);

describe('User visits signup page', function() {
  var browser = new Browser();

  it('should see welcome page', function() {
    return browser.visit('/');
    browser.assert.text('title', 'Smart Tabs')
  });
});
