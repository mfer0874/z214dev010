sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("dev.z214dev010.controller.StartPage", {

        onNavToPosTerminal: function () {
            this.getRouter().navTo("PosTerminal");
        }

    });
});