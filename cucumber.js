
let options = [
    '--require-module ts-node/register',    // Load TypeScript module
    '--require ./steps/*.steps.ts',   // Load step definitions
    // '--require ./Utility/Util/Commonsteps/*.ts',   // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--publish-quiet',
    '--format json:./Reports/cucumber_report.json',
    '--format html:./Reports/report.html',
    '--format rerun:reports/rerun.txt --publish-quiet --require-module ts-node/register --require features/**/*.ts',
  ].join(' ');
  
  let run_features = [
    './features/', //Specify our feature files
    options,
  ].join(' ');

  module.exports = {
    test_runner: run_features
  };