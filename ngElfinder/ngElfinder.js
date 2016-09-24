var ngElfinder = angular.module("ngElfinder", []);

ngElfinder.service("ngElfinder", function() {
    var width = 1000;
    var height = 600;

    this.open = function(callback) {
        window.ngElfinderCallback = function(file) {
            callback(file);
        }

        var x = (screen.width / 2 - width / 2) - 10;
        var y = (screen.height / 2 - height / 2) - 30;
        console.log();

        var win = window.open("elFinder/elfinder.html", 'sharegplus', 'height=' + height + ',width=' + width + ',left=' + x + ',top=' + y);
    }
});
