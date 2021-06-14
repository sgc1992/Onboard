const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../../models');
const keys = require('../../config/keys');

passport.use(
    new GitHubStrategy(
        {
            clientID: keys.githubClientID,
            clientSecret: keys.githubClientSecret,
            callbackURL: '/auth/github/callback',
            proxy: true,
        },
        async (accessToken, refreshToken, user, done) => {
            const id = user.id;
            const name = user.username;

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
