// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Control_Comonad_Traced_Trans = require("Control.Comonad.Traced.Trans");
var Data_Identity = require("Data.Identity");
var traced = Prelude[">>>"](Prelude.semigroupoidFn)(Data_Identity.Identity)(Control_Comonad_Traced_Trans.TracedT);
var runTraced = Prelude[">>>"](Prelude.semigroupoidFn)(Control_Comonad_Traced_Trans.runTracedT)(Data_Identity.runIdentity);
module.exports = {
    traced: traced, 
    runTraced: runTraced
};
