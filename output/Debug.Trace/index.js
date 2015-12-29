// Generated by psc version 0.8.0.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("Prelude");
var traceShowM = function (dictShow) {
    return function (dictMonad) {
        return function (s) {
            return $foreign.traceAny(Prelude.show(dictShow)(s))(function (v) {
                return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(s);
            });
        };
    };
};
var traceShow = function (dictShow) {
    return function ($16) {
        return $foreign.traceAny(Prelude.show(dictShow)($16));
    };
};
var traceAnyM = function (dictMonad) {
    return function (s) {
        return $foreign.traceAny(s)(function (v) {
            return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(s);
        });
    };
};
var traceAnyA = function (dictApplicative) {
    return function (s) {
        return $foreign.traceAny(s)(function (v) {
            return Prelude.pure(dictApplicative)(Prelude.unit);
        });
    };
};
var traceShowA = function (dictShow) {
    return function (dictApplicative) {
        return function ($17) {
            return traceAnyA(dictApplicative)(Prelude.show(dictShow)($17));
        };
    };
};
var traceA = function (dictApplicative) {
    return traceAnyA(dictApplicative);
};
var trace = $foreign.traceAny;
var spy = function (a) {
    return $foreign.traceAny(a)(function (v) {
        return a;
    });
};
module.exports = {
    traceShowM: traceShowM, 
    traceAnyM: traceAnyM, 
    traceShowA: traceShowA, 
    traceA: traceA, 
    traceAnyA: traceAnyA, 
    spy: spy, 
    traceShow: traceShow, 
    trace: trace, 
    traceAny: $foreign.traceAny
};
