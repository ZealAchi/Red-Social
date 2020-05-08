const os = require('os');
const fs = require('fs');

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');
const { v1: uuidv1 } = require('uuid');


const system_configuration = {
	"system": {
		"databases": {
			"mongo": {
				"url": "mongodb+srv://luispadre:10Naaaite10@cluster0-3lrkd.mongodb.net/DevJobs?retryWrites=true"
			},
		},
		"security": {
			"jwt_secret": "10Naaite10",
			"jwt_claims": {
				issuer: "localhost",     	// who creates the token and signs it
				audience: "localhost",  	// to whom the token is intended to be sent
				expiresIn: "30m",             		// time when the token will expire (10 minutes from now)
				jwtid: "",          			// a unique identifier for the token
				//"iat":    	"", 					// when the token was issued/created (now) , USING DEFAULTS
				notBefore: "0",                 	// time before which the token is not yet valid (0 milisecond agao, for emmediate validation)
				subject: "Development Services", // the subject/principal is whom the token is about		       
				algorithm: "RS256"
				//"user": null,							//filled in with custom
				//"scopes": "api:full_access",					
			},
			"verify_options": {
				issuer: "localhost",
				subject: "Development Services",
				audience: "localhost",
				expiresIn: "30m",
				algorithm: ["RS256"]
			}
		}
	}
}

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
	// let claims = system_configuration['system']['security']['jwt_claims'];
	// claims['jwtid'] = uuidv1();

	//based on user we get scopes
	//BASED ON ROLE ADD SCOPES
	let scopes = {
		api: 'full_access'
	}

	var token = jwt.sign({ user, scopes }, '10Naaaite10');
	// jwt.sign({
	// 	    exp: Math.floor(Date.now() / 1000) + (60 * 60),
	// 	    data: 'Looged'
	// 	  }, config.secret),
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
