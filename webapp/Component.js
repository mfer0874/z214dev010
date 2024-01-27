sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("dev.z214dev010.Component", {
        metadata:{
            manifest: "json"
        },
        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set the device model
            this.setModel(models.createDeviceModel(), "device");    
            // create the view based on the url/hash
            this.getRouter().initialize();

        },
        createContent: function() {
            // create root view
            return View({
                viewName: "dev.z214dev010.view.App",
                type: "XML"
            });
        }
    });
});