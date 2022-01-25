sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/core/ValueState",

 ], function (Controller, MessageToast, Fragment, ValueState) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
       onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       },
       onOpenDialog : function () {

           console.log(this);
           if (!this.pDialog) {
               this.pDialog = this.loadFragment({
                   name: "sap.ui.demo.walkthrough.view.HelloDialog"
               });
           } 
           this.pDialog.then(function(oDialog) {
               oDialog.open();
           });
       },

       onCloseDialog : function () {
             console.log(this);
             this.byId("helloDialog").close();
       },
       doClick : function () {
            //this.byId("pagingBtn").setProperty("text");
            //let counNum=0;
            //let count=document.getElementById('count');
            //count.innerHTML+=counNum++;
            
            //var src = this.getView().byId("_clicksCounter").getText();
            //var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //var editCounterText = oBundle.getText("editCounter");
            //this.editCounter(oBundle)++;
            //var editButton = this.getView().byId("_clicksCounter");
            //editButton.setText(oBundle.getText(""));
            //var sButtonText = this.getView().byId("_clicksCounter").getText();
            //var nCurrentCount = oModel.getProperty('/count');
            //oModel.setProperty('/count', ++nCurrentCount);
            //console.log(this.getView().byId("_clicksCounter"));
            // if (typeof(iCurrentCount) !== "number") {
            //     iCurrentCount = 0
            // } else {
            //     iCurrentCount++;
            // }

            // console.log(this);
            // var oBut = this.getView().byId("_clicksCounter");
            // //this.counter = oBut.getText(); 
            // isNaN(this.counter) ?  this.counter = 0 :  this.counter++;
            // oBut.setText(this.counter);  

            // var oBut = this.getView().byId("_clicksCounter");
            // function Counter() {
            // this.count = 0;
            // }
            // Counter.prototype.add = function(array) {
            //     array.forEach(() => {
            //         this.count++
            //     }, this)
            //     oBut.setText(this.count);
            // }
            // const obj = new Counter()
            // obj.add([1, 2, 3, 4, 5])

            // var oBut = this.getView().byId("_clicksCounter");
            // this.count = 0;
            // this.n = [1, 2, 3, 4, 5];
            // for(let i=this.n.length; i>0; i--) {
            //     this.counter = this.count+this.n[i];
            // }
            // oBut.setText(this.counter);

            // var oBut = this.getView().byId("_clicksCounter");
            // //this.count = 0;
            // this.n = [1, 2, 3, 4, 5];
            // var sum = 0; 
            // this.n.forEach((currentValue, index, array) => {
            //     //debugger;
            //     //this.counter = this.count+this.n[i];
            //     //i++;
            //     sum += currentValue;
            //     //console.log(sum);
            // }),
            // oBut.setText(sum);
            // isNaN(this.sum) ?  this.sum = 0 :  this.sum += sum;
            // oBut.setText(this.sum);

            // var oBut = this.getView().byId("_clicksCounter");
            // this.n = [1, 2, 3, 4, 5];
            // var sum = 0; 
            // this.n.map((currentValue) => {
            //     sum += currentValue;
            // });
            // isNaN(this.sum) ?  this.sum = 0 :  this.sum += sum;
            // oBut.setText(this.sum);

            var oBut = this.getView().byId("_clicksCounter");
            this.n = [1, 2, 3, 4, 5];
            var sum = 0;
            const reducer = (previousValue, currentValue) => {
                sum = previousValue + currentValue;
                return sum;
            }
            isNaN(this.sum) ?  this.sum = 0 :  
            this.sum += this.n.filter(item => item%2 == 0).reduce(reducer);
            oBut.setText(this.sum);

            // this.n.forEach(() => {
            //     console.log(this);
            //     this.count++;
            //     //if (n=0) break;
            // }, this)
            // oBut.setText(this.count);
        },

        // clickModelInc : function () {
        //     var oModel = this.getView().getModel()
        //     var iClicker = oModel.getProperty("/recipient/counter");
        //     var iStep = +oModel.getProperty("/recipient/step");
        //     iClicker+=iStep;
        //     oModel.setProperty("/recipient/counter", iClicker);
        // },
        // clickModelDec : function () {
        //     var oModel = this.getView().getModel()
        //     var iClicker = oModel.getProperty("/recipient/counter");
        //     var iStep = oModel.getProperty("/recipient/step");
        //     iClicker-=iStep;
        //     oModel.setProperty("/recipient/counter", iClicker);
        //     // var oView = this.getView();
        //     // oModel.getMessageManager().registerObject(oView, true);

        // },

        clickModelInc : function () {
            var oModel = this.getView().getModel()
            var iClicker = oModel.getProperty("/recipient/counter");
            var iStep = +oModel.getProperty("/recipient/step");
            iClicker+=iStep;
            oModel.setProperty("/recipient/counter", iClicker);
        },
        clickModelDec : function () {
            var oModel = this.getView().getModel()
            var iClicker = oModel.getProperty("/recipient/counter");
            var iStep = oModel.getProperty("/recipient/step");
            iClicker-=iStep;
            oModel.setProperty("/recipient/counter", iClicker);
            // var oView = this.getView();
            // oModel.getMessageManager().registerObject(oView, true);

        },

        onLiveChange(oEvent) {
            var oInput = oEvent.getSource();
            var oModel = this.getView().getModel();
            var iStep = oModel.getProperty("/recipient/step");
            //var sState = oModel.getProperty("/recipient/state");

            if (isNaN(iStep)==true) {
                oInput.setValueState(ValueState.Error);
                if (this.ValueState==ValueState.Error) {
                    return this.ValueState;
                } else if (this.ValueState!==ValueState.Error || iStep=="") {
                    oModel.setProperty("/recipient/state", ValueState.Error);
                    oModel.setProperty("/recipient/stateText", "Неправильный или пустой ввод");
                }
            } else {
                oInput.setValueState(ValueState.Success);
                oModel.setProperty("/recipient/state", ValueState.Success);
            
            // if (isNaN(iStep)==true) {
            //     oInput.setValueState(ValueState.Error);
            //     if (this.ValueState==ValueState.Error) {
            //         return this.ValueState;
            //     } else {
            //         oModel.setProperty("/recipient/state", ValueState.Error);
            //         oModel.setProperty("/recipient/stateText", "Неправильный ввод");
            //     }
            // } else if (iStep=="") {
            //     oModel.setProperty("/recipient/state", ValueState.Error);
            //     oModel.setProperty("/recipient/stateText", "Пустой ввод");
            // } else {
            //     oInput.setValueState(ValueState.Success);
            //     oModel.setProperty("/recipient/state", ValueState.Success);
            //     // oModel.setProperty("/recipient/stateText", "Всё правильно :)");
            }
        }
    })
 })
    // doClickThis : function f() {
    //     let oButThis = this.getView().querySelector('#button');
    //     button.addEventListener('click', function() {
    //         isNaN(this.text) ?  f.call(this, 0) :  f.call(this, 1);
    //     });
    // },
        // var that = this;
        // otable.bindItems("/", new sap.m.ColumnListItem({
        // cells: [new sap.m.Button({
        //     text: "Hello",
        //     press: [that.handleButtonPress, this]
        // })]
        // })),
        // otable.setModel("data");

        // handleButtonPress: function (oEvent) {
        //     var Button_ = oEvent.getSource();
        // }
 //1) set prop get prop
 //2) this
 // 3) через model
 // 3.1) через манифест
 // 3.2) создать новую модель в контроллере
 // это всё на гит
 // для каждого пункта свою кнопку
 // почитать валидные назв
 // в ду клик  переменная н, кот хранит 5. В фор ич столько итераций, как значение н. В цикле каждую итерацию опять ++. 
 // life-cycle методы у контроллера

 //getData то же самое сделать 