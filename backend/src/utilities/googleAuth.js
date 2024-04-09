import passport from "passport";
import { User } from "../models/user.model.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ["profile", "email"]
},
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    console.log(accessToken);

    try {
      let user = await User.findOne({ googleId: profile.id });
      console.log(user);
      if (!user) {
        user = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value || "",
          accessToken, 
          refreshToken,
        })
        await user.save();
        console.log("user created")
      }
      return done(null, user)

    } catch (error) {
      console.log(error)
      return done(error, null)
    }

  }

));


passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user)
});

