var ngElfinder = angular.module("ngElfinder", []);

ngElfinder.service("ngElfinder", function(ngElfinderConfig) {
    var width = ngElfinderConfig.GetConfig().windowWidth;
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

ngElfinder.provider("ngElfinderConfig", function() {
    var config = {
        basePath: "",
        windowWidth: 1000,
        windowHeight: 600
    }

    this.$get = function() {
        function SetConfig(obj) {
            if (obj.basePath != undefined) {
                config.basePath = obj.basePath;
            }

            if (obj.windowWidth != undefined) {
                config.windowWidth = obj.windowWidth;
            }

            if (obj.windowHeight != undefined) {
                config.windowHeight = obj.windowHeight;
            }
        }

        function GetConfig() {
            return config;
        }

        return {
            SetConfig: SetConfig,
            GetConfig: GetConfig
        }
    };
});
