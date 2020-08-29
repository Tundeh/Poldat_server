# Poldat_server

poldat server is the backend of the poldat application used in managing political parties members. It also include features such as mass messaging and data analytics.

Routes
Get /member/list: returns all the members

Technologies Used
Nodejs
Mongodb
Response Codes

200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity
50X: Server Error

Error Codes Details

100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error

Dependencies
validator
express js
mongoose
mongoose-unique-validator
body-parser
nodemon
dotenv

License
Mit
