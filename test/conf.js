exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],
    testSiteAddress: 'http://asoriano.me/demo/angular-metas/'
};