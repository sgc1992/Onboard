const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../../models');
const keys = require('../../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true,
        },
        async (accessToken, refreshToken, user, done) => {
            const id = user.id;
            const name = user.displayName;

            const account = await db.User.findOrCreate({
                where: { id },
                defaults: {
                    name,
                },
            });

            done(null, account);
        }
    )
);

passport.serializeUser((account, done) => {
    done(null, account[0].dataValues.id);
});

passport.deserializeUser((id, done) => {
    db.User.findByPk(id).then(account => done(null, account));
});
