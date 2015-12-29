// Generated by psc version 0.8.0.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("Prelude");
var Data_List = require("Data.List");
var tail = function (v) {
    if (v instanceof Data_List.Cons) {
        return v.value1;
    };
    if (v instanceof Data_List.Nil) {
        return $foreign.unsafeThrow("Data.List.Unsafe.tail called on empty list");
    };
    throw new Error("Failed pattern match at Data.List.Unsafe line 26, column 1 - line 27, column 1: " + [ v.constructor.name ]);
};
var last = function (__copy_v) {
    var v = __copy_v;
    tco: while (true) {
        if (v instanceof Data_List.Cons && v.value1 instanceof Data_List.Nil) {
            return v.value0;
        };
        if (v instanceof Data_List.Cons) {
            var __tco_v = v.value1;
            v = __tco_v;
            continue tco;
        };
        if (v instanceof Data_List.Nil) {
            return $foreign.unsafeThrow("Data.List.Unsafe.last called on empty list");
        };
        throw new Error("Failed pattern match: " + [ v.constructor.name ]);
    };
};
var init = function (v) {
    if (v instanceof Data_List.Cons && v.value1 instanceof Data_List.Nil) {
        return Data_List.Nil.value;
    };
    if (v instanceof Data_List.Cons) {
        return new Data_List.Cons(v.value0, init(v.value1));
    };
    if (v instanceof Data_List.Nil) {
        return $foreign.unsafeThrow("Data.List.Unsafe.init called on empty list");
    };
    throw new Error("Failed pattern match: " + [ v.constructor.name ]);
};
var head = function (v) {
    if (v instanceof Data_List.Cons) {
        return v.value0;
    };
    if (v instanceof Data_List.Nil) {
        return $foreign.unsafeThrow("Data.List.Unsafe.head called on empty list");
    };
    throw new Error("Failed pattern match at Data.List.Unsafe line 19, column 1 - line 20, column 1: " + [ v.constructor.name ]);
};
module.exports = {
    init: init, 
    last: last, 
    tail: tail, 
    head: head
};
