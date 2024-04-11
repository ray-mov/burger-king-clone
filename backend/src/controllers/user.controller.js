import passport from "passport"
import { asyncHandler } from "../utilities/asyncHandler"

const loginUser = asyncHandler( async (req, res) => {

  passport.authenticate('google', { scope: ['profile', email]})  

})


const googleAuthCallback = asyncHandler(
  async (req, res) => {
    //put react url
    passport.authenticate('google', {
      failureRedirect: '/api/v1/login',
      successRedirect: "/dashboard"
    })
  }
 )

export {
  loginUser,
  googleAuthCallback
}