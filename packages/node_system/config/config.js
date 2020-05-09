
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
  module.exports = {
    secret: '10Naaaite10',
    system_configuration
  };