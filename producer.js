var http = require('http')
var requestCouch = require('request')
var bodyParser = require('koa-bodyparser')
var koa = require('koa')
var kafka = require('kafka-node')


// TEST 'TOPIC'
//
var testTopic = function (debitConsigne,nbIter,tailleMess){
        //consigne de debit en msg/s
        //var debitConsigne = 200
        //consigne de periode en ms
        //var periodeConsigne = 5
        var periodeConsigne = 1000/debitConsigne
        
var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client);
        



        
        producer.on('error', function (err) {
            console.log(err)
        })
        
              
        
                
               
             /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
             /////////////// 1ere boucle : on charge les données dans un tableau
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            
       
                        var messages = []
                        var contenuMessage = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (i=0;i<nbIter;i++)
                    {
                        contenuMessage = ''
                
                for( var j=0; j < tailleMess; j++ )
                    contenuMessage += possible.charAt(Math.floor(Math.random() * possible.length));

                       
                        messages[i] = contenuMessage
                        
                    }
            var payload = [{ topic: 'topic2', messages: messages }]
           
            

        producer.on('ready', function () {
                         var TSdebut = (new Date()).getTime()
                
                producer.send(payload, function (err, data) {
                    if (err) console.log(err)
                    if (data) console.log(data) 
                })
            console.log('fin de l\'envoi')
            var TSfin = (new Date()).getTime()
            var debitEnvoi = nbIter/(TSfin - TSdebut)*1000
            console.log('consumer: fin du test \'TOPIC\'')
            console.log('debit d\'envoi : '+debitEnvoi+' msg/s')
            process.exit(0)
                    })
            
                
}

//// argv[2] : type de pattern
//// argv[3] : debit (msg/s) ou 'max'
//// argv[4] : nombre de messages
//// argv[5] : taille des messages (octets)



switch(process.argv[2]){
            case 'topic':
            testTopic(process.argv[3],process.argv[4],process.argv[5])
        
}

 // AVEC GENERATEURS
    
        
//        /////////////////////////////////////
//        //ENVOI DE MESSAGES
//        /////////////////////////////////////
//        var envoi = function (){
//            
//            var dodo = 0
//  
//                var TSdebutIteration = (new Date()).getTime()
//                console.log('TS de debut d\'iteration: '+(new Date()).getTime())
//                //génération aléatoire du contenu du message
//                var contenuMessage = "";
//                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//                for( var j=0; j < 1000; j++ )
//                    contenuMessage += possible.charAt(Math.floor(Math.random() * possible.length));
//
//                var payload = [
//                    { topic: 'topic1', messages: contenuMessage, partition: 0 } //dans l'optique de répartir la charge des brokers et des consommateurs: comment les partitions sont-elles affectées aux noeuds ? comment les consommateurs peuvent-ils s'adresser au bon noeud, s'ils s'intéressent à une partition?
//                ]
//                console.log('contenuMessage pour message n°'+count+': '+payload[0].messages)
//                producer.send(payload, function (err, data) {
//                    if (err) console.log(err)
//                    //if (data) console.log(data) 
//                })
//                var TSfinIteration = (new Date()).getTime()
//                var dureeIteration = TSfinIteration - TSdebutIteration
//                console.log('dureeIteration: '+dureeIteration)
//                console.log('TS de fin d\'iteration: '+(new Date()).getTime())
//                
//                count++
//                console.log('count: '+count)
//                  console.log('nbIter: '+nbIter)
//                  console.log('id:'+IntervalID )
//                if (count==nbIter)
//                    {
//                        console.log('fin de la boucle')
//                        var TSfin = (new Date()).getTime()
//                        var debitEnvoi = nbIter/(TSfin - TSdebut)*1000
//                        console.log('consumer: fin du test \'TOPIC\'')
//                        console.log('debit d\'envoi : '+debitEnvoi+' msg/s')
//                        clearInterval(IntervalID)
//                        process.exit(0)
//                        
//                    }
//        
//
//            
//            //yield terminateGen()
//            
//        }
//        var count = 0
//        var TSdebut = (new Date()).getTime()
//        //var IntervalID = setInterval(envoi,periodeConsigne)
//                var IntervalID = setInterval(envoi,0)

        //génération aléatoire du contenu du message
        
//                var contenuMessage = "";
//                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//        
//                
//                var TSdebut = (new Date()).getTime()
//                
//                
//                for (i=0;i<nbIter;i++)
//                    {
//                        contenuMessage = ''
//                
//                for( var j=0; j < tailleMess; j++ )
//                    contenuMessage += possible.charAt(Math.floor(Math.random() * possible.length));
//
//                var payload = [
//                    { topic: 'topic1', messages: contenuMessage, partition: 0 } //dans l'optique de répartir la charge des brokers et des consommateurs: comment les partitions sont-elles affectées aux noeuds ? comment les consommateurs peuvent-ils s'adresser au bon noeud, s'ils s'intéressent à une partition?
//                ]
//                producer.send(payload, function (err, data) {
//                    if (err) console.log(err)
//                    //if (data) console.log(data) 
//                })
//
//  
//                        
//                    }
//            
//            console.log('fin de la boucle')
//                        var TSfin = (new Date()).getTime()
//                        var debitEnvoi = nbIter/(TSfin - TSdebut)*1000
//                        console.log('consumer: fin du test \'TOPIC\'')
//                        console.log('debit d\'envoi : '+debitEnvoi+' msg/s')
//                        process.exit(0)
 
/*
else {
                var count = 0
                var IntervalID = setInterval(function(){
                    
                     
                        payload = [
                        { topic: 'topic1', messages: messages[count], partition: 0 } //dans l'optique de répartir la charge des brokers et des consommateurs: comment les partitions sont-elles affectées aux noeuds ? comment les consommateurs peuvent-ils s'adresser au bon noeud, s'ils s'intéressent à une partition?
                    ]
                    producer.send(payload, function (err, data) {
                    if (err) console.log(err)
                    //if (data) console.log(data) 
                    
                })
                    count ++
                    if (count==nbIter){
                        clearInterval(IntervalID)
                        console.log('fin de la boucle')
                        var TSfin = (new Date()).getTime()
                        var debitEnvoi = nbIter/(TSfin - TSdebut)*1000
                        console.log('consumer: fin du test \'TOPIC\'')
                        console.log('debit d\'envoi : '+debitEnvoi+' msg/s')
                        process.exit(0)

                    }
 
                },periodeConsigne)
                                
            }

        })
}*/
