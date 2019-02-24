/**
 * Created by Aseem on 17-02-2019.
 */
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://root:root@showcase-ous3g.mongodb.net/showcase?retryWrites=true";


function MongoConnector() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(uri, function(err, client) {
            if(err) {
                reject(new Error(err));
            }
            resolve(client);
        });
    });
}

module.exports = MongoConnector;