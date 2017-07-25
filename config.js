/**
 * Created by hb.ahn@sk.com on 11/07/2017.
 */

module.exports = {

    TREHost : '223.39.121.158',
    TREPort : '1883',

    // 20-digits Device Access Token given by manufacturer
    userName : '11112222333344445555', // Please input your access token
    //passWord : '',

    tremoteyeClientId : function() {
        var PRE_FIX = 'trf';
        return PRE_FIX + Math.random().toString(16).substr(2, 8);
    },

    sendingTopic : 'v1/sensors/me/telemetry',
    rpcReqTopic : 'v1/sensors/me/rpc/request/+',
    rpcResTopic : 'v1/sensors/me/rpc/response/',
    updateInterval : 2000
}
