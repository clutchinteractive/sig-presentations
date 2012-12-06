$(document).ready(function() {
    var templateSource = "<h1>{{appName}} - {{authors.length}} Authors</h1>" +
                         "<h2>Not Yet Viewed</h2>" +
                         "<div class='container'>" +
                         "{{#each authors}}" +
                            "{{#each images}}" +
                                "{{#unless visited}}" +
                                    "<div class='imageContainer'>" +
                                        "<img class='image' src='{{path}}'>" +
                                        "<p>Created by {{../../name}}</p>" +
                                    "</div>" +
                                "{{/unless}}" +
                            "{{/each}}" +
                         "{{/each}}" +
                         "</div>" +
                         "<h2>Viewed</h2>" +
                         "<div class='container'>" +
                         "{{#each authors}}" +
                            "{{#each images}}" +
                                "{{#if visited}}" +
                                    "<div class='imageContainer'>" +
                                        "<img class='image' src='{{path}}'>" +
                                        "<p>Created by {{../../name}}</p>" +
                                    "</div>" +
                                "{{/if}}" +
                            "{{/each}}" +
                         "{{/each}}" +
                         "</div>";

    var template = Handlebars.compile(templateSource);

    var data = {
        appName: "Demo 4",
        authors: [
            {
                name: "Bob",
                images: [
                    {visited: true, path: "images/Chrysanthemum.jpg"},
                    {visited: false, path: "images/Desert.jpg"},
                    {visited: false, path: "images/Hydrangeas.jpg"},
                    {visited: true, path: "images/Jellyfish.jpg"}
                ]
            },
            {
                name: "Jane",
                images: [
                    {visited: false, path: "images/Koala.jpg"},
                    {visited: true, path: "images/Lighthouse.jpg"},
                    {visited: false, path: "images/Penguins.jpg"},
                    {visited: false, path: "images/Tulips.jpg"}
                ]
            }
        ]
    };

    $("#templateContainer").html(template(data));
});