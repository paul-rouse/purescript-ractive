// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Control_Comonad = require("Control.Comonad");
var Control_Comonad_Store_Trans = require("Control.Comonad.Store.Trans");
var Control_Extend = require("Control.Extend");
var Data_Tuple = require("Data.Tuple");
var ComonadStore = function (__superclass_Control$dotComonad$dotComonad_0, peek, pos) {
    this["__superclass_Control.Comonad.Comonad_0"] = __superclass_Control$dotComonad$dotComonad_0;
    this.peek = peek;
    this.pos = pos;
};
var pos = function (dict) {
    return dict.pos;
};
var peek = function (dict) {
    return dict.peek;
};
var peeks = function (dictComonadStore) {
    return function (f) {
        return function (x) {
            return peek(dictComonadStore)(f(pos(dictComonadStore)(x)))(x);
        };
    };
};
var seeks = function (dictComonadStore) {
    return function (dictExtend) {
        return function (f) {
            return function (x) {
                return peeks(dictComonadStore)(f)(Control_Extend.duplicate(dictExtend)(x));
            };
        };
    };
};
var seek = function (dictComonadStore) {
    return function (dictExtend) {
        return function (s) {
            return function (x) {
                return peek(dictComonadStore)(s)(Control_Extend.duplicate(dictExtend)(x));
            };
        };
    };
};
var experiment = function (dictComonadStore) {
    return function (dictFunctor) {
        return function (f) {
            return function (x) {
                return Prelude["<$>"](dictFunctor)(Prelude.flip(peek(dictComonadStore))(x))(f(pos(dictComonadStore)(x)));
            };
        };
    };
};
var comonadStoreStoreT = function (dictComonad) {
    return new ComonadStore(function () {
        return Control_Comonad_Store_Trans.comonadStoreT(dictComonad);
    }, function (s) {
        return function (v) {
            return Control_Comonad.extract(dictComonad)(v.value0)(s);
        };
    }, function (v) {
        return v.value1;
    });
};
module.exports = {
    ComonadStore: ComonadStore, 
    seeks: seeks, 
    seek: seek, 
    peeks: peeks, 
    experiment: experiment, 
    peek: peek, 
    pos: pos, 
    comonadStoreStoreT: comonadStoreStoreT
};
