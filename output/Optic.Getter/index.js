// Generated by psc version 0.8.0.0
"use strict";
var Data_Const = require("Data.Const");
var Data_Functor_Contravariant = require("Data.Functor.Contravariant");
var Data_Profunctor = require("Data.Profunctor");
var Optic_Types = require("Optic.Types");
var Prelude = require("Prelude");
var Void = function (x) {
    return x;
};
var $up$dot = function (s) {
    return function (asa) {
        return Data_Const.getConst(asa(Data_Const.Const)(s));
    };
};
var view = function (asa) {
    return function (s) {
        return Data_Const.getConst(asa(Data_Const.Const)(s));
    };
};
var absurd = function (a) {
    var spin = function (__copy_v) {
        var v = __copy_v;
        tco: while (true) {
            var __tco_v = v;
            v = __tco_v;
            continue tco;
        };
    };
    return spin(a);
};
var coerce = function (dictContravariant) {
    return function (dictFunctor) {
        return function (a) {
            return Prelude["<$>"](dictFunctor)(absurd)(Data_Functor_Contravariant[">$<"](dictContravariant)(absurd)(a));
        };
    };
};
var to = function (dictContravariant) {
    return function (dictFunctor) {
        return function (dictProfunctor) {
            return function (s2a) {
                return Data_Profunctor.dimap(dictProfunctor)(s2a)(coerce(dictContravariant)(dictFunctor));
            };
        };
    };
};
module.exports = {
    view: view, 
    to: to, 
    "^.": $up$dot
};