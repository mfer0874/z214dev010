sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer" 
 
 ], function (XMLView, ComponentContainer) {
     'use strict';
    // XMLView.create({
    //     viewName: "z214d01.view.App"
    // }).then(function (oView){
    //     oView.placeAt("content")
    // });
 new ComponentContainer({
     name : "dev.z214dev010",
     settings : {
         id : "z214dev010"
     } ,
     async :true
 }).placeAt("content");
 
 });