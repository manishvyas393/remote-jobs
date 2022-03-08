import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import brcypt from 'bcryptjs'
import User from "../../models/jobs"

passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
            .then(user => {
                  if (!user) {
                        return done(null, false, { message: "email is not registered" })
                  }
                  brcypt.compare(password.toString(), user.password, (err: any, isMatch: any) => {
                        if (err) throw err
                        if (isMatch) {
                              return done(null, true)

                        }
                        else {
                              return done(null, false, { message: "password not match" })
                        }
                  })
            })
            .catch((err) => {
                  throw new err
            })
})
);

passport.serializeUser((user, done) => {
      done(null, user);
});

passport.deserializeUser((id, done) => {
      User.findById(id, (err: string, user: boolean) => {
            done(err, user);
      });
});
export default passport