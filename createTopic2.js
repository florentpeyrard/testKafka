// argv[2] : pattern nom de topic
// argv[3] : nombre de topics

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);

producer.on('ready', function () {
    
    for (i=0;i<process.argv[3];i++){
            producer.createTopics([process.argv[2]+i], function (err, data) {
            if (err) console.log(err)
            if (data) console.log(data)
        })
            
            
        }
    
    
})
            

