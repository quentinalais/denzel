const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const main = require('./il.js');
const imdb = require('./src/imdb');
const DENZEL_IMDB_ID = 'nm0000243';
const assert = require('assert');
const graphqlHTTP=require('express-graphql');
const {buildSchema }=require('graphql');
const {GraphQLSchema} = require('graphql');

const CONNECTION_URL = "mongodb+srv://quentinalais:jmNE_HAz4sYqsDs@denzelcluster-8ojst.azure.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Denzel";

var app = Express();
app.use(BodyParser.urlencoded({ extended: true }));

app.use(BodyParser.json());

const {queryType} = require('./graphqueries/query.js');

//setting up the port number and express app
const port = 9292;


 // Define the Schema
const schema = new GraphQLSchema({ query: queryType });

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);

















/*
var database, collection;

app.listen(9292, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("movies");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.get("/movies/search", (request, response) => {
	var limit = 5, metascore = 0;
	if(request.query.limit != undefined) limit = request.query.limit;
	if(request.query.metascore != undefined) metascore = request.query.metascore;
	collection.aggregate([{$match:{"metascore": {$gte:Number(metascore)}}}, {$limit:Number(limit)}, {$sort:{"metascore":-1}}]).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
    console.log("Search done.");
});
app.get("/movies/populate", async (request,response)=>{
    
    const movies = await imdb(DENZEL_IMDB_ID);
    database.collection("movies").insertMany(movies,(error,result)=>{
            if(error){
                console.log("ERREUR POPULATE")
                return response.status(500).send(error);
            }
            response.send(result.result);
    });
    
	
});

app.get("/movies",(request,response)=>{
    collection.find({"metascore":{$gt:70}}).toArray((error,result)=>{
        if(error){
            console.log("ERREUR MOVIES")
            return response.status(500).send(error)
        }
        
        response.send(result[Math.floor(Math.random() * Math.floor(result.length))])
    })

});


app.get("/movies/:id",(request,response)=>{
    
    collection.findOne({"id":request.params.id},(error,result)=>{
        if(error){
            console.log("ERREUR MOVIE BY ID")
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

app.post("/movies/:id", (request, response) => {
    var date=request.query.date
    var review=request.query.review
   
    collection.updateOne({"id":request.params.id},{$set :{"date":date,"review":review}}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
*/


