// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_Foreign_EasyFFI = require("Data.Foreign.EasyFFI");
var RQString = (function () {
    function RQString(value0) {
        this.value0 = value0;
    };
    RQString.create = function (value0) {
        return new RQString(value0);
    };
    return RQString;
})();
var RQNode = (function () {
    function RQNode(value0) {
        this.value0 = value0;
    };
    RQNode.create = function (value0) {
        return new RQNode(value0);
    };
    return RQNode;
})();
var updateModel = Data_Foreign_EasyFFI.unsafeForeignProcedure([ "ractive" ])("ractive.updateModel();");
var setPartial = Data_Foreign_EasyFFI.unsafeForeignProcedure([ "selector", "value", "ractive" ])("ractive.partials[selector] = value;");
var set = Data_Foreign_EasyFFI.unsafeForeignFunction([ "selector", "ractive" ])("ractive.set(selector)");
var renderById = Data_Foreign_EasyFFI.unsafeForeignFunction([ "id", "ractive" ])("ractive.render(id);");
var on = Data_Foreign_EasyFFI.unsafeForeignFunction([ "event", "handler", "ractive" ])("ractive.on(event,handler);");
var off = Data_Foreign_EasyFFI.unsafeForeignFunction([ "event", "handler", "ractive" ])("ractive.off(event,handler);");
var getPartial = Data_Foreign_EasyFFI.unsafeForeignFunction([ "selector", "ractive" ])("ractive.partials[selector];");
var ffiP = Data_Foreign_EasyFFI.unsafeForeignProcedure;
var ffiF = Data_Foreign_EasyFFI.unsafeForeignFunction;
var get = ffiF([ "field", "ractive", "" ])("ractive.get(field)");
var ractive = ffiF([ "template", "document", "data", "" ])("new Ractive({template:template, el: document, data:data});");
var ractiveFromData = ffiF([ "data", "" ])("new Ractive(data);");
module.exports = {
    RQString: RQString, 
    RQNode: RQNode, 
    renderById: renderById, 
    updateModel: updateModel, 
    off: off, 
    on: on, 
    getPartial: getPartial, 
    setPartial: setPartial, 
    set: set, 
    get: get, 
    ractiveFromData: ractiveFromData, 
    ractive: ractive, 
    ffiP: ffiP, 
    ffiF: ffiF
};