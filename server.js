var express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    port = 3000;


var app = express();

//_____________________________________________SESSION MIDDLEWARE_____________________________________________
app.use(session({secret: 'bigDogSecret'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: '1665252520383167',
  clientSecret: 'cac643f96f6a691db6e3636d6fa2d72d',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));


//_____________________________________________ENDPOINTS_____________________________________________



app.listen(port, function() {
    console.log('listening on ' + port)
})