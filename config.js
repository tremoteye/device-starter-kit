/**
 * Created by hb.ahn@sk.com on 11/07/2017.
 */

module.exports = {

    TREHost : '223.39.127.140',
    TREPort : '1883',
    TREHttpPort : '9000',

    // 20-digits Device Access Token given by manufacturer
    userName : '22223333444455556666', // Please input your access token
    //passWord : '',

    tremoteyeClientId : function() {
        var PRE_FIX = 'trf';
        return PRE_FIX + Math.random().toString(16).substr(2, 8);
    },

    sendingTopic : 'v1/sensors/me/tre',
    rpcReqTopic : 'v1/sensors/me/rpc/request/+',
    rpcResTopic : 'v1/sensors/me/rpc/response/',
    updateInterval : 2000,
    microTripCnt : 10,

    jwt_token : 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiJjYzNjZTEwMC05ZmNlLTExZTYtODA4MC04MDgwODA4MDgwODAiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiY2JhNDRhODAtOWZjZS0xMWU2LTgwODAtODA4MDgwODA4MDgwIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNTAxMTM1ODYxLCJleHAiOjE1MDEyMjU4NjF9.LdPmDC_w3N_D3ec449pmKobFsUynOx9Elm84lBiEyLVu_xCNeRt8hqxT823B0yLfLVVhvjPFNoYqcdd86lwPjQ',

    sensorId : '184f6fc0-8bda-11e7-9e7f-0f265a86e047'

}
