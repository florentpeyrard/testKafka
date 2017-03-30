// argv[2] : pattern nom de topic
// argv[3] : nombre de topics


var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);
        

        

       
        
        producer.on('error', function (err) {
            console.log(err)
        })

        producer.on('ready', function () {
            console.log('consumer ready')
                            /////////////////////////////////////
        //CREATION DE TOPICS
        /////////////////////////////////////
        //createTopics fonctionne seulement si auto.create.topics.enable = true sur le serveur Kafka
        //////////////////////////////////////
        for (i=0;i<process.argv[3];i++){
            producer.createTopics(['\''+process.argv[2]+i+'\''], false, function (err, data) {
            if (err) console.log(err)
            if (data) console.log(data)
        })
            
            
        }
            
        })



