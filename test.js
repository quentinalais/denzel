const connectionstring='mongodb://quentinalais:jmNE_HAz4sYqsDs@denzelcluster-shard-00-00-8ojst.azure.mongodb.net:27017,denzelcluster-shard-00-01-8ojst.azure.mongodb.net:27017,denzelcluster-shard-00-02-8ojst.azure.mongodb.net:27017/test?ssl=true&replicaSet=DenzelCluster-shard-0&authSource=admin&retryWrites=true';
const MongoClient = require('mongodb').MongoClient;
const uri = connectionstring;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  //const collection = client.db("Denzel").collection("movies");
  const db=client.db("Denzel")

  var myobj = { name: "Jules", address: "6 avenue du chateau du loir" };
  
  db.collection("movies").insertOne(myobj, function(err, res) {
    if (err) throw err;})
    console.log("1 document inserted");
  
  
 // perform actions on the collection object
  client.close();
  
});