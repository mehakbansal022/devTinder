# DevTinder API-List

## authRouter
-POST / signUp
-POST / Login
-POST / Logout

## profileRouter
-GET /profile /view
-PATCH /profile /edit
-PATCH /profile /password

## connectionRequestRouter
-POST request/send/:status/:userId              //status : ["ignored","interested"]
-POST /request/review/:status/:requestID        //status : ["accepted","rejected"]

## userRouter
-GET/user/connetion
-GET/user/requests/received
-GET /user/feed - Get you the profile of other users on platform 

status : ignored / interested / accepted /rejected