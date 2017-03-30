

var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client)

    var messages = []
    var contenuMessage = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (i=0;i<process.argv[2];i++){
        contenuMessage = ''
        for( var j=0; j < process.argv[3]; j++ )
            contenuMessage += possible.charAt(Math.floor(Math.random() * possible.length));
        messages[i] = contenuMessage     
    }
    var payloads = [{ topic: 'topic2', messages: messages }]
    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
        console.log(data);
    });
});