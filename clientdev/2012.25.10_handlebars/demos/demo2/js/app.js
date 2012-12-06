$(document).ready(function() {
    var templateSource = "<h1>{{appName}}</h1>" +
                         "{{#each images}}" +
                            "<img class='image' src='{{path}}'>" +
                        "{{/each}}";

    var template = Handlebars.compile(templateSource);

    var data = {
        appName: "Demo 2",
        images: [
            {path: "images/Chrysanthemum.jpg"},
            {path: "images/Desert.jpg"},
            {path: "images/Hydrangeas.jpg"},
            {path: "images/Jellyfish.jpg"},
            {path: "images/Koala.jpg"},
            {path: "images/Lighthouse.jpg"},
            {path: "images/Penguins.jpg"},
            {path: "images/Tulips.jpg"}
        ]
    };

    $("#templateContainer").html(template(data));
});