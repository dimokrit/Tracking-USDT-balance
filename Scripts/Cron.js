// Import Cron and Tracking.js
const CronJob = require('cron').CronJob
const dScript = require("./Tracking")
//Set new CronJonb, which start Tracking.js every 5 seconds
var job = new CronJob(
	'*/5 * * * * *',
	function() {
        dScript.checkBalance()
    },
);
//Call job
job.start()