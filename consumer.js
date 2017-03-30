var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: 'topic1', partition: 0 }
        ],
        {
            autoCommit: false
        }
    )


var offset = new kafka.Offset(client);
    offset.fetch([
        { topic: 'topic1', partition: 0, time: Date.now(), maxNum: 1 }
    ], function (err, data) {
        
        console.log('offset : '+data)
        // data
        // { 't': { '0': [999] } }
    })

//var count = 0
////réception des messages
//consumer.on('message', function (message) {
//    count++
//    console.log('message '+count)
//})
//
////erreur de réception
//.on('error', function (err) {
//    console.log(err)    
//})