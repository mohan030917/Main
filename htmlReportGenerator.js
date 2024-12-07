const reporter = require('cucumber-html-reporter');


var date = new Date();
var CurrentDate = date.getDate() + '_' +(date.getMonth()+1) + '_' +date.getFullYear() + '_'+ date.getHours()+'-'+date.getUTCMinutes() +'_' + date.getSeconds();
console.log("current date is "+CurrentDate);
var options={
    brandTitle: "Test Automation Report",
    theme: "bootstrap",
    jsonFile: 'Reports/cucumber_report.json',
    output : 'Reports/cucumber_report.html',
    screenshotsDirectory: './Screenshots',
    failedSummaryReport: true,
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version" : "Demo App",
        "Test Environment" : "QA"   
    }
    
}
reporter.generate(options);

