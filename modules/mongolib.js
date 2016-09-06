var Mongodb=require('mongodb');
var assert=require('assert');
var url='mongodb://localhost:27017/myproject';

exports.connect=function () {
    Mongodb.connect(url,function (err,db) {
        assert.equal(null,err);
        console.log('Connected successfully to server');
        db.close();
    })
};

/**
 * Insert Document
 * */
exports.insertDocuments=function (tablename,doc,callback) {
    Mongodb.connect(url,function (err,db) {
        assert.equal(null,err);
        console.log('Connected successfully to server');
        console.log('Started to insert data');
        var collection=db.collection(tablename);
        collection.insertMany(doc,function(err,result) {
            assert.equal(err,null);
            console.log(result.result.n);
            console.log(result.ops.length);
            console.log('inserted successed!');
            console.log('closse db connect!');
            db.close();
            callback();
        })
    });
}

/**
 * Get Data
 * */
//
// exports.getUser=function () {
//
// }


// Mongocli.connect(url,function (err,db) {
//     assert.equal(null,err);
//     console.log('Connected successfully to server');
//     // insertDocument(db,function () {
//     //     db.close();
//     // })
//     // db.close();
// });
//
//
// Mongocli.insertDocument=function(db,callback) {
//     var collection=db.collection('documents');
//     collection.insertMany([{a:1},{b:2},{c:3}
//     ],function (err,result) {
//         assert.equal(err,null);
//         assert.equal(3,result.result.n);
//         assert.equal(3,result.ops.length);
//         console.log("Insert 3 documents into the collection");
//         callback(result);
//     })
// }


// module.exports=Mongocli;
