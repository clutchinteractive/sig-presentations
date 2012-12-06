$(document).ready(function() {
    // ===============================================================
    // Private Variables
    // ===============================================================
    var lastSelectedMenuItem;
    var filter = 'all';

    // ===============================================================
    // Template Definition
    // ===============================================================
    var templateSource = "<h1>{{appName}} - {{authors.length}} Authors</h1>" +
        "{{classificationMenu this}}" +
        "{{imageSorter this false}}" +
        "{{imageSorter this true}}";

    // ===============================================================
    // Handlebars Helpers
    // used to make your template items more dynamic
    // ===============================================================
    Handlebars.registerHelper(
        'classificationMenu',
        function(data, sortType) {
            var result = '';

            result += '<ul id="sortMenu">';

                result += '<li><a id="active" class="menuItem" href="#">all</a></li>';

                $(data.sortFields).each(function(key, sortField) {
                    result += '<li><a class="menuItem" href="#">' + sortField + '</a></li>'
                });

            result += '</ul>';

            return new Handlebars.SafeString(result);
        }
    );

    Handlebars.registerHelper(
        'imageSorter',
        function(data, visited) {
            var result = '';
            result += "<div class='container'>";
            var header = visited ? 'Viewed' : 'Not Yet Viewed';
            result += "<h2>" + header + "</h2>";

            $(data.authors).each(function(key, author) {
                $(author.images).each(function(key, image) {
                    var filterMatch = image.classification == filter || filter == 'all';
                    if(image.visited == visited && filterMatch) {
                            result += "<div class='imageContainer'>";
                            result += "<img class='image' src='" + image.path + "'>";
                            result += "<p>Created by " + author.name  + "</p>";
                            result += "</div>";
                        }
                    });
            });

            result += "</div>";

            return new Handlebars.SafeString(result);
        }
    );

    // ===============================================================
    // Event Helpers
    // ===============================================================
    $('.menuItem').live(
        "click",
        function (e) {
            if(!lastSelectedMenuItem)
                lastSelectedMenuItem = $('#active');

            lastSelectedMenuItem.attr('id', '');
            $(e.currentTarget).attr('id', 'active');
            lastSelectedMenuItem = $(e.currentTarget);
            filter = lastSelectedMenuItem.html();
            renderTemplate();
        }
    );

    // ===============================================================
    // Private Methods
    // ===============================================================
    function renderTemplate() {
        var templateContainer = $("#templateContainer");
        templateContainer.empty();
        var template = Handlebars.compile(templateSource);
        templateContainer.html(template(data));
    }

    // ===============================================================
    // Data
    // ===============================================================
    var data = {
        appName: "Demo 5",
        sortFields: ["flower", "landscape", "animal"],
        authors: [
            {
                name: "Bob",
                images: [
                    {classification: "flower", visited: true, path: "images/Chrysanthemum.jpg"},
                    {classification: "landscape", visited: false, path: "images/Desert.jpg"},
                    {classification: "flower", visited: false, path: "images/Hydrangeas.jpg"},
                    {classification: "animal", visited: true, path: "images/Jellyfish.jpg"}
                ]
            },
            {
                name: "Jane",
                images: [
                    {classification: "animal", visited: false, path: "images/Koala.jpg"},
                    {classification: "landscape", visited: true, path: "images/Lighthouse.jpg"},
                    {classification: "animal", visited: false, path: "images/Penguins.jpg"},
                    {classification: "flower", visited: false, path: "images/Tulips.jpg"}
                ]
            }
        ]
    };

    // ===============================================================
    // Initialization
    // ===============================================================
    renderTemplate();

});