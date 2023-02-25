const CronJob = require('cron').CronJob;
const dScript = require("./dist")
var job = new CronJob(
	'*/5 * * * * *',
	function() {
        dScript.checkBalance()
    },
);
job.start()
