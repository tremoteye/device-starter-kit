/**
 * Created by hb.ahn@sk.com on 11/07/2017.
 */

'use strict';

// for logging
var colors = require('colors');
var util = require('util');

// for importing mqtt
var mqtt = require('mqtt');

// for importing configuration
var config = require('./config');
var clientIdSession = config.tremoteyeClientId();

// Simulation Value
var latitudeValue = [ 37.380646, 37.381709, 37.380241, 37.378891, 37.377187, 37.376293, 37.375395, 37.377185, 37.379274, 37.380005 ];
var longitudeValue = [ 127.117784, 127.116573, 127.114513, 127.112602, 127.110394, 127.111222, 127.112336, 127.114857, 127.117786, 127.118527 ];

var sequence = 0;
var IntervalFunction;

// connection T-RemotEye Platform

console.log(colors.green('Connecting to T-RemotEye Platform'));

var messageSender = mqtt.connect('mqtt://' + config.TREHost, {
    username:config.userName,
    clientId:clientIdSession,
    clean:true,
    keepalive:60,
    reconnectPeriod:1000
});

messageSender.on('connect', function() {

    console.log(colors.green('Connected T-RemotEye Platform'));
    console.log(colors.blue('ClientID : ' + clientIdSession));

    subscribeRPCTopic();
    intervalSender();
});

// Connection Error Callback
messageSender.on('error', function(error){
    console.log(colors.red(error));
    //self.emit('error', error);
});

// messageArrived callback
messageSender.on('message', function(topic, message) {
    var msgs = message.toString();
    var topic = topic.toString();
    var requestId = topic.toString().split('/')[5];

    if (msgs != null){
      console.log(colors.magenta('Received RPC Message'));
      console.log(colors.magenta('Topic :' + topic));
      console.log(colors.magenta(msgs));
      console.log(colors.magenta(''));

      responseRPCRequest(requestId);
    }
});

function intervalSender(){

    IntervalFunction = setInterval(sendingMessage, config.updateInterval);
}


function sendingMessage() {

    sequence++;

    // need to modify based on current Status!
    // It is just an example
    var sendingMessageObj = {
        "Longitude" : longitudeValue[sequence % 10],
        "Latitude" : latitudeValue[sequence % 10]
    };

    // change JSON Presentation
    var sendingMessageJSON = JSON.stringify(sendingMessageObj);

    messageSender.publish(config.sendingTopic, sendingMessageJSON, {qos: 1}, function () {
        console.log(colors.yellow('Successfully sending this message to T-RemotEye Platform'));
        console.log(colors.yellow('Message : ' + sendingMessageJSON));
        console.log(colors.yellow(''));

    });
}

// Subscribe the RPC topic
function subscribeRPCTopic(){

    messageSender.subscribe(config.rpcReqTopic, {qos: 1}, function() {
      // Response it as a callback
      console.log(colors.yellow('Successfully Subscribe the RPC topic to T-RemotEye Platform'));
      console.log(colors.yellow(''));

    });
}

// Publish the RPC Result
function responseRPCRequest(arg){

    var sendingMessageObj = {
      "Longitude" : longitudeValue[sequence % 10],
      "Latitude" : latitudeValue[sequence % 10]
    };

    var sendingMessageJSON = JSON.stringify(sendingMessageObj);

    messageSender.publish(config.rpcResTopic + arg, sendingMessageJSON, {qos: 1}, function() {
      console.log(colors.magenta('Successfully sending this message to T-RemotEye Platform'));
      console.log(colors.magenta('Message : ' + sendingMessageJSON));
      console.log(colors.magenta(''));
    });
}
