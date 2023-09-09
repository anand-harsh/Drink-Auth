const {Router}=require('express')
const authController=require('../controllers/authController')
const router=Router()

router.post("/signup", authController.signup_post)
router.get("/signup", authController.signup_get)
router.post("/signup", authController.login_post)
router.get("/signup", authController.login_get)


module.exports=router