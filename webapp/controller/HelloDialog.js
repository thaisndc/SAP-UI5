sap.ui.define(
  [
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
  ],

  // oFragmentController é um objeto que contém os métodos que serão chamados quando os eventos ocorrerem no fragmento.
  // O método onCloseDialog é chamado quando o usuário clica no botão de fechar no diálogo.
  // O método open é chamado quando o usuário clica no botão de abertura no diálogo.
  //Managed Object é uma classe base para todos os objetos gerenciados pelo framework.
  function (ManagedObject, Fragment) {
    "use strict";
    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog", {
      constructor: function (oView) {
        this._oView = oView;
      },
      exit: function () {
        delete this.oView;
      },

      open: function () {
        var oView = this._oView;

        // create the dialog lazily

        if (!oView.byId("helloDialog")) {
          var oFragmentController = {
            onCloseDialog: function () {
              oView.byId("helloDialog").close();
            },
          };
          // load asynchronous XML fragment
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            controller: oFragmentController,
          }).then(function (oDialog) {
            // connect dialog to the root view of the this component (models, lifecycle)
            oView.addDependent(oDialog);
            // forward compact/cozy style into dialog
            syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
            oDialog.open();
          });
        } else {
          oView.byId("helloDialog").open();
        }
      },
    });
  }
);