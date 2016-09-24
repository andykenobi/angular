var ngElfinder = angular.module("ngElfinder", []);

ngElfinder.service("ngElfinder", function(ngElfinderConfig) {
    var width = ngElfinderConfig.windowWidth;
    var height = ngElfinderConfig.windowHeight;

    this.open = function(callback) {
        window.ngElfinderCallback = function(file) {
            callback(file);
        }

        var x = (screen.width / 2 - width / 2) - 10;
        var y = (screen.height / 2 - height / 2) - 30;

        var win = window.open(ngElfinderConfig.basePath + "/elFinder/elfinder.html", 'sharegplus', 'height=' + height + ',width=' + width + ',left=' + x + ',top=' + y);
    }
});

ngElfinder.service("ngElfinderConfig", function() {
    this.basePath = "";
    this.windowWidth = 1000;
    this.windowHeight = 600;
});
