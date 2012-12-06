$(document).ready(function() {
    var templateSource = "<h1>{{appName}}</h1>" +
                         "<h2>Not Yet Viewed</h2>" +
                         "<div class='container'>" +
                         "{{#each images}}" +
                            "{{#unless visited}}" +
                                "<img class='image' src='{{path}}'>" +
                            "{{/unless}}" +
                         "{{/each}}" +
                         "</div>" +
                         "<h2>Viewed</h2>" +
                         "<div class='container'>" +
                         "{{#each images}}" +
                            "{{#if visited}}" +
                                "<img class='image' src='{{path}}'>" +
                            "{{/if}}" +
                         "{{/each}}" +
                         "</div>";

    var template = Handlebars.compile(templateSource);

    var data = {
        appName: "Demo 3",
        images: [
            {visited: true, path: "images/Chrysanthemum.jpg"},
            {visited: false, path: "images/Desert.jpg"},
            {visited: false, path: "images/Hydrangeas.jpg"},
            {visited: true, path: "images/Jellyfish.jpg"},
            {visited: false, path: "images/Koala.jpg"},
            {visited: true, path: "images/Lighthouse.jpg"},
            {visited: false, path: "images/Penguins.jpg"},
            {visited: false, path: "images/Tulips.jpg"}
        ]
    };

    $("#templateContainer").html(template(data));
});