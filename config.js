/**
 * Created by hb.ahn@sk.com on 11/07/2017.
 */

module.exports = {

    TREHost : '192.168.155.131',
    TREPort : '1883',

    // 20-digits Device Access Token given by manufacturer
    userName : '22223333444455556666',
    //passWord : '',

    tremoteyeClientId : function() {
        var PRE_FIX = 'trf';
        return PRE_FIX + Math.random().toString(16).substr(2, 8);
    },

    sendingTopic : 'v1/devices/me/telemetry',
    updateInterval : 1000
}
