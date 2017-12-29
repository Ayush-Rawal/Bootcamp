const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();
const port = 8080;
const url = `localhost:${port}`;

let users = null;

passport.use(new GoogleStrategy({
        consumerKey: GOOGLE_CONSUMER_KEY,
        consumerSecret: GOOGLE_CONSUMER_SECREnpT,
        callbackURL: `${url}/auth/callback`,
    },
    function(token, tokenSecret, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function(err, user) {
            return done(err, user);
        });
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' })
);

passport.use(new LocalStrategy(function(username, password, done) {
    let u = { username, password };
    users.push(u);
    done(null, users);

}));