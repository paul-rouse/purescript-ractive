// Generated by psc version 0.8.0.0
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Prelude = require("Prelude");
var assertThrows$prime = function (msg) {
    return function (fn) {
        return Prelude[">>="](Control_Monad_Eff.bindEff)($foreign.checkThrows(fn))($foreign["assert'"](msg));
    };
};
var assertThrows = assertThrows$prime("Assertion failed: An error should have been thrown");
var assert = $foreign["assert'"]("Assertion failed");
module.exports = {
    "assertThrows'": assertThrows$prime, 
    assertThrows: assertThrows, 
    assert: assert, 
    "assert'": $foreign["assert'"]
};