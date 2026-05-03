-Create Repository
-Initialize the repository
-node_module , package.json , package-lock.json
-Install express
-create a server
-Listen to port 7777
-Write request Handlers for /test , /hello
-Install nodemon and update scripts inside package.json
-What are dependencies
-what is the use of -g while npm install
-Difference between tilda and caret (^ vs ~)


-initialize git
-.gitignore
-create a remote repo in gihub
-Push all code to remote origin
-Play with routes and route extensions ex. /hello, / , /hello/2, /xyz
-Order of the routes matter a lot
-Install postman app and make a workSpace/collections > test API call
-Write logic to handle GET , POST , DELETE API calls and test them on postman
-Explore routing and use of ?, +, *, () in the route
-Use of regex in routes /a/, /.*fly$/
-Reading the query params int he routes
-Reading the dynamic routes 

-Multiple Route Handlers - Play with the code
-next()
-next functions and errors along with res.send()
-app.use("/route",rH,[rH2,rH3],rH4,rH5);
-What is MiddleWares
-How Express Js basically handles requests behind the scene
-Differnece b/w app.use() and app.all()
-Write a dummy auth middleware for admin
-Write a dummy auth middleware for all user routes , except /admin/login
-Error Handling using app.use("/",(err,req,res,next) =>{});

-Create a free cluster on  MongoDB official website (Mongo Atlas)
-Install mongoose Library
-Connect your application to the database "Connection-url"/devTinder
-call the connectDB function and connection to the databse before station your application on 7777
-Create a userSchema & user Model
-Create POST / signUp API to add data to database
-Push some Documents to API calls from Postman 
-Error HAndling USing try , catch

-JS object VS JSON (Difffernece)
-Add the express.json middleware to your app
-Make your signUp API dynamic to receive data from the end user
-User.findOne with duplicate email Ids , which objec will return 
-API - get user by Email
-API - Feed API - Get/feed get all the users from the database
=API - get user by Id
-Create a delete user API
- Difference between PATCH and PUT 
-API Update a User
-Explore the Mongoose Documentation for models methods
-What are the options in a model.findOneAndUpdate method , Explore more about it 
-API - Update the user by EmailId

-Explore schematype options from the documentation
-add required ,unique,lowercase ,min ,minLength,trim
-Add Default
-Create a custom validate function for Gender
-Improve the DB schema - Put all appropriate validation on each field in schema
-Add timestamps to the userSchema
-Add API level validation on PATCH request signUp post API
-Data Sanitizing -Add API vaidation for each field
-Install validator
-Explore validator library function and use vaidator function for password , email, photoURL
-NEVER TRUST req.body

-Validate data in signUp API
-Install bcrypt package
-Create passwordHash using bcrypt.hash & save the user encrypted password
-Createlogin API
-compare password and throw error if email and password is Invalid

-Install cookie-parser
-just send a dummy cookie to user
-create GET/ profile APIand check if you get the cookie back
-install jsonwebtoken
- in logged in API , after emailID and password validation , create a jwt token and send it to user in cookies
-read the cookies inside your profile API and find the logged in user
-userAuth middlewares
-Add the userAuth middleware in the profile API and a new sendConnectionRequest API
-Set the expire of JWT token and cookies to 7 days
-Create user schema methods to getJWT()
-Create uset schema methods to comparepassword(passwordInputByUser)

-Explore Tinder APIs
-Craete a list of all API that you can think of in Tinder 
-Group multiple routers under respective routers
-Read documentation for express.Router
-Create router folder for managing auth,profile,request router
-create authRouter , profileRouter ,requestRouter
-Import these router in app.js 