sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict"; // -> linha criada para auxiliar erros comuns do JS. ex: garantir que variaveis declaradas sejam utilizadas.

  return Controller.extend("sap.ui.demo.walkthrough.App", {  
    onInit: function () {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    },
    onOpenDialog: function () {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});