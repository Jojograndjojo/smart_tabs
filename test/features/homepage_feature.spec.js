var Browser = require('zombie');

Browser.localhost('example.com', 8000);

describe('User visits homepage', function() {
  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('should see welcome page', function() {
    browser.assert.text('title', 'Smart Tabs')
  });

  it('should contain music canvas', function() {
    browser.assert.element('#music-canvas')
  });

  it('should contain record and stop buttons', function() {
    browser.assert.element('#recording-controllers')
  });
  
});
