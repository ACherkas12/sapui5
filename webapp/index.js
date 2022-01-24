sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");

	var oView = new XMLView({
		viewName: "sap.ui.demo.db.view.App"
	});

	oModel.getMessageManager().registerObject(oView, true);


	oView.placeAt("content");

});