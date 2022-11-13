const maxApi = require("max-api");
// maxApi.outlet("js in da house");

const weather = require('openweather-apis');
weather.setAPPID("3857b831e0e671fc140b387c5ec0d6fa");
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("los angeles", () => {
    weather.setCity('los angeles');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});


maxApi.addHandler("denver", () => {
    weather.setCity('denver');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("berlin", () => {
    weather.setCity('berlin');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("new york", () => {
    weather.setCity('new york');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});