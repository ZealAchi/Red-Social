const jwt = require('jsonwebtoken')


const {system_configuration}=require('./config/config')

function logData(message) {
	var d = new Date();
	var time = '[' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ';
	console.log(time + message)
}

function decodeBase64(data) {
	let buff = Buffer.from(data, 'base64');
	let text = buff.toString('ascii');
	return text
}


async function bcryptValidatePassword(p, h) {
	// return await bcrypt.compare(p, h);
	return p===h
}

async function GenerateJwt(user) {
	let scopes = {
		api: 'full_access'
	}
	var token = jwt.sign({ user, scopes }, '10Naaaite10');
	return token;
}

async function VerfifyJwt(token) {
	try {
		var legit = jwt.verify(token, jwtPublicKey, system_configuration['system']['security']['verify_options']);
		console.log("\nJWT verification result: " + JSON.stringify(legit));
		return true;
	} catch (err) {
		console.log(err)
		return false;
	}
	return false;
}
module.exports = {
	system_configuration,
	logData,
	logData,
	decodeBase64,
	bcryptValidatePassword,
	GenerateJwt,
	VerfifyJwt

}
