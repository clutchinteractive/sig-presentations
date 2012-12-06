$(document).ready(function() {
    var data = {
        appName: "Demo 1",
        path: "images/Chrysanthemum.jpg"
    };

    var templateSource = "<h1>{{appName}}</h1><img src='{{path}}'>";
    var template = Handlebars.compile(templateSource);

    $("#templateContainer").html(template(data));
});