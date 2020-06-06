'use strict';
/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
	/**
   * Simple example.
   * Every monday at 1am.
   */
	// '0 1 * * 1': () => {
	//
	// }
	'30 * * * * *': async () => {
		try {
			console.log('email sent');
			const send = await strapi.plugins['email'].services.email.send({
				to: 'john@thecosmicfilament.com',
				from: 'john@thecosmicfilament.com',
				subject: 'strapi on drugs',
				text: 'blah blash blah strapi strapi strapi drugs drugs drugd'
			});
		} catch (error) {
			console.log('error: ', error, JSON.stringify(error));
		}
	}
};
