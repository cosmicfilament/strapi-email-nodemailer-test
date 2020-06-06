module.exports = ({ env }) => ({
	email: {
		provider: 'nodemailer-v3',
		providerOptions: {},
		settings: {
			host: env('EMAIL_HOST', 'smtp.gmail.com'),
			port: env.int('EMAIL_PORT', 587),
			username: env('EMAIL_USER', 'johnqpublic@gmail.com'),
			password: env('EMAIL_PASSWD', 'password123'),
			secure: false
		}
	}
});
