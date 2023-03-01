sap.ui.define([
    "../localService/mockserver"
], function (mockserver) {
    "use strict";

    // Para inicializar o mockserver, basta chamar o método init()
    mockserver.init();

    // initializar o componente e carregar as dependências
    sap.ui.require(["sap/ui/core/ComponentSupport"])
})
