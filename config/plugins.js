module.exports = ({ env }) => ({
	email: {
		provider: 'nodemailer-v3',
		providerOptions: {},
		settings: {
			host: 'smtp.gmail.com',
			port: 587,
			username: 'john@thecosmicfilament.com',
			password: 'kweyinazldgxfzvh',
			secure: false
		}
	}
});
