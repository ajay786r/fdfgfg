exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true, 
capabilities: {
    'browserName': 'chrome'
  },

	specs: ['login_spec_main.js'],
	allScriptsTimeout: 10000,
	jasmineNodeOpts: {showColors: true,defaultTimeoutInterval: 1000000,isVerbose: true}
};






