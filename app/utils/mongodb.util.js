const { MongoClient} = require("mongo");

class MongoDb {
    static connect = async (uri) => {
        if(this.client) return this.client;
        this.client = await MongoClinet.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;