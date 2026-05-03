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
-POST /send/interested/:userId
-POST /send/ignored/:userId
-POST /request/accepted/:requestID
-POSt /request/rejected/:requestId

## userRouter
-GET/user/connetion
-GET/user/request/
-GET /user/feed - Get you the profile of other users on platform 

status : ignored / interested / accepted /rejected