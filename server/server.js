const express = require('express')
const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient;
let cors = require('cors')
// const routesUrls = require('./routes/routes')
const routeEconomy = require('./routes/routeEconomy')
const routePolitics = require('./routes/routePolitics.js')
const routeCulture = require('./routes/routeCulture')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/app', routeEconomy, routePolitics, routeCulture)

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "КПП",
      version: '2021',
    },
  },
  apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
console.log(swaggerDocs)
//Culture
/**
 * @swagger
 * paths:
 *  /app/getCulture:
 *   get:
 *     description: get Culture data 
 *     responses:
 *       200:
 *         description: Success
 */
/** 
* @swagger
* /app/culture/:
*   post:
*     description: new post
*     parameters:
*      - in: body
*        name: body
*        description: post
*        required: true
*     responses:
*       201:
*         description: 
*/
/** 
 * @swagger
 * /app/UpDateculture/{_id}:
 *   put:
 *     description: UpDate Culture
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: UpDate Culture
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *      - in: body
 *        name: body
 *        description: update post
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: update
 */
/** 
 * @swagger
 * /app/deleteculture/{_id}:
 *   delete:
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: delele post culture
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       "400":
 *         description: "Invalid ID supplied"
 */


//Economy
/**
 * @swagger
 * paths:
 *  /app/getEconomy:
 *   get:
 *     description: get Economy data 
 *     responses:
 *       200:
 *         description: Success
 */
/** 
* @swagger
* /app/economy/:
*   post:
*     description: new post
*     parameters:
*      - in: body
*        name: body
*        description: new post
*        required: true
*     responses:
*       201:
*         description: 
*/
/** 
 * @swagger
 * /app/UpDateeconomy/{_id}:
 *   put:
 *     description: UpDate economy
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: _id
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *      - in: body
 *        name: body
 *        description: new text
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: update
 */
/** 
 * @swagger
 * /app/deleteeconomy/{_id}:
 *   delete:
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: delele post
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       "400":
 *         description: "Invalid ID supplied"
 */


//Polits
/**
 * @swagger
 * paths:
 *  /app/getPolits:
 *   get:
 *     description: get all post Polits
 *     responses:
 *       200:
 *         description: Success
 */
/** 
* @swagger
* /app/polits/:
*   post:
*     description: new post
*     parameters:
*      - in: body
*        name: body
*        description: body
*        required: true
*     responses:
*       201:
*         description: 
*/
/** 
 * @swagger
 * /app/UpDatepolits/{_id}:
 *   put:
 *     description: update polits post
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: _id
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *      - in: body
 *        name: body
 *        description: new text
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: update
 */
/** 
 * @swagger
 * /app/deletepolits/{_id}:
 *   delete:
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: delele post
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       "400":
 *         description: "Invalid ID supplied"
 */

const mongoClient = new MongoClient("mongodb://localhost:27017/tasks", { useUnifiedTopology: true });
mongoClient.connect(function (err, client) {
  if (err) return console.log(err);
  db = client;
  app.locals.collection = client.db("news").collection("news");
  app.listen(4000, function () {
    console.log("Сервер ожидает подключения...");
  });
});