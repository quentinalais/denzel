
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

console.log("BONJOUR")
function insertion(obj) {

  console.log("HELLLLO")
  const uri = "mongodb+srv://quentinalais:jmNE_HAz4sYqsDs@denzelcluster-8ojst.azure.mongodb.net/test?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  console.log("HELLLLO2")

   client.connect(function(err, client) {
		assert.equal(null, err);
    console.log("HOLA")
    const db = client.db("Denzel")
    console.log("HOLA2")
    db.collection("movies").insertMany(obj, null, function (error, results) {
			if (error) throw error;

      console.log("1 document inserted");

      client.close();
    });
  });

}

module.exports=insertion; 