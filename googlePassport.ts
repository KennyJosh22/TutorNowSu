import googleAppAuth from './googleOauth2';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    userId: string;
    displayName: string;
    email: string;
    clientId: string;
    secretId: string;
    
    constructor() {
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        // Configure user GoogleStrategy
        passport.use( new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                // callbackURL: "http://localhost:3000/auth/google/callback",
                callbackURL: "https://tutornowsu.azurewebsites.net/auth/google/callback",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                // Federated function
                process.nextTick( () => {
                    console.log("access token: ", accessToken);
                    console.log("refreshToken: ", refreshToken);
                    console.log('validating google profile:' + JSON.stringify(profile));
                    // this.userId = profile.id;
                    // this.displayName = profile.displayName;
                    // this.email = profile.emails[0].value;
                    console.log("id: ",profile.id)
                    return done(null, profile);
                })
            }));
       

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;