sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.fragmentdemo.controller.MyView", {
            onInit: function () {

            },
            //Call Fragment file inside controller file
            onOpenSignDialog:function(){

            if(!this._oDialog){
                this.loadFragment({
                    name: "ns.fragmentdemo.fragment.signin"
                  }).then(function(oDialog){
                    this._oDialog = oDialog;
                     this._oDialog.open();
                  }.bind(this));
            }else{
                this._oDialog.open();
            }

              
            }
        });
    });
