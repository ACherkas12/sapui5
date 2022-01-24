sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
 ], function (UIComponent, JSONModel, ValueState) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
       metadata : {
             interfaces: ["sap.ui.core.IAsyncContentCreation"],
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             recipient : {
                name : "Any next",
                counter: 0,
                step: 1,
                state: ValueState.None,
                stateText: "Введите текст"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
         }
    });
 });