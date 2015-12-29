// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Control_Alt = require("Control.Alt");
var Control_Alternative = require("Control.Alternative");
var Control_Monad_Cont_Class = require("Control.Monad.Cont.Class");
var Control_Monad_Eff_Class = require("Control.Monad.Eff.Class");
var Control_Monad_Error_Class = require("Control.Monad.Error.Class");
var Control_Monad_Reader_Class = require("Control.Monad.Reader.Class");
var Control_Monad_Rec_Class = require("Control.Monad.Rec.Class");
var Control_Monad_State_Class = require("Control.Monad.State.Class");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Control_Monad_Writer_Class = require("Control.Monad.Writer.Class");
var Control_MonadPlus = require("Control.MonadPlus");
var Control_Plus = require("Control.Plus");
var Data_Distributive = require("Data.Distributive");
var Data_Either = require("Data.Either");
var ReaderT = function (x) {
    return x;
};
var runReaderT = function (v) {
    return v;
};
var withReaderT = function (f) {
    return function (m) {
        return ReaderT(function ($27) {
            return runReaderT(m)(f($27));
        });
    };
};
var monadTransReaderT = new Control_Monad_Trans.MonadTrans(function (dictMonad) {
    return function ($28) {
        return ReaderT(Prelude["const"]($28));
    };
});
var mapReaderT = function (f) {
    return function (m) {
        return ReaderT(function ($29) {
            return f(runReaderT(m)($29));
        });
    };
};
var functorReaderT = function (dictFunctor) {
    return new Prelude.Functor(function (f) {
        return mapReaderT(Prelude["<$>"](dictFunctor)(f));
    });
};
var distributiveReaderT = function (dictDistributive) {
    return new Data_Distributive.Distributive(function () {
        return functorReaderT(dictDistributive["__superclass_Prelude.Functor_0"]());
    }, function (dictFunctor) {
        return function (f) {
            return function ($30) {
                return Data_Distributive.distribute(distributiveReaderT(dictDistributive))(dictFunctor)(Prelude.map(dictFunctor)(f)($30));
            };
        };
    }, function (dictFunctor) {
        return function (a) {
            return function (e) {
                return Data_Distributive.collect(dictDistributive)(dictFunctor)(Prelude.flip(runReaderT)(e))(a);
            };
        };
    });
};
var applyReaderT = function (dictApplicative) {
    return new Prelude.Apply(function () {
        return functorReaderT((dictApplicative["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]());
    }, function (f) {
        return function (v) {
            return function (r) {
                return Prelude["<*>"](dictApplicative["__superclass_Prelude.Apply_0"]())(runReaderT(f)(r))(runReaderT(v)(r));
            };
        };
    });
};
var bindReaderT = function (dictMonad) {
    return new Prelude.Bind(function () {
        return applyReaderT(dictMonad["__superclass_Prelude.Applicative_0"]());
    }, function (m) {
        return function (k) {
            return function (r) {
                return Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(runReaderT(m)(r))(function (v) {
                    return runReaderT(k(v))(r);
                });
            };
        };
    });
};
var applicativeReaderT = function (dictApplicative) {
    return new Prelude.Applicative(function () {
        return applyReaderT(dictApplicative);
    }, function ($31) {
        return ReaderT(Prelude["const"](Prelude.pure(dictApplicative)($31)));
    });
};
var monadReaderT = function (dictMonad) {
    return new Prelude.Monad(function () {
        return applicativeReaderT(dictMonad["__superclass_Prelude.Applicative_0"]());
    }, function () {
        return bindReaderT(dictMonad);
    });
};
var monadContReaderT = function (dictMonadCont) {
    return new Control_Monad_Cont_Class.MonadCont(function () {
        return monadReaderT(dictMonadCont["__superclass_Prelude.Monad_0"]());
    }, function (f) {
        return ReaderT(function (r) {
            return Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
                return runReaderT(f(function (a) {
                    return ReaderT(Prelude["const"](c(a)));
                }))(r);
            });
        });
    });
};
var monadEffReader = function (dictMonadEff) {
    return new Control_Monad_Eff_Class.MonadEff(function () {
        return monadReaderT(dictMonadEff["__superclass_Prelude.Monad_0"]());
    }, function ($32) {
        return Control_Monad_Trans.lift(monadTransReaderT)(dictMonadEff["__superclass_Prelude.Monad_0"]())(Control_Monad_Eff_Class.liftEff(dictMonadEff)($32));
    });
};
var monadErrorReaderT = function (dictMonadError) {
    return new Control_Monad_Error_Class.MonadError(function () {
        return monadReaderT(dictMonadError["__superclass_Prelude.Monad_0"]());
    }, function (m) {
        return function (h) {
            return ReaderT(function (r) {
                return Control_Monad_Error_Class.catchError(dictMonadError)(runReaderT(m)(r))(function (e) {
                    return runReaderT(h(e))(r);
                });
            });
        };
    }, function (e) {
        return Control_Monad_Trans.lift(monadTransReaderT)(dictMonadError["__superclass_Prelude.Monad_0"]())(Control_Monad_Error_Class.throwError(dictMonadError)(e));
    });
};
var monadReaderReaderT = function (dictMonad) {
    return new Control_Monad_Reader_Class.MonadReader(function () {
        return monadReaderT(dictMonad);
    }, Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]()), withReaderT);
};
var monadRecReaderT = function (dictMonadRec) {
    return new Control_Monad_Rec_Class.MonadRec(function () {
        return monadReaderT(dictMonadRec["__superclass_Prelude.Monad_0"]());
    }, function (k) {
        return function (a) {
            var k__UNUSED = function (r) {
                return function (a1) {
                    return Prelude.bind((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Bind_1"]())(runReaderT(k(a1))(r))(function (v) {
                        return Prelude["return"]((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Applicative_0"]())(Data_Either.either(Data_Either.Left.create)(Data_Either.Right.create)(v));
                    });
                };
            };
            return function (r) {
                return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(k__UNUSED(r))(a);
            };
        };
    });
};
var monadStateReaderT = function (dictMonadState) {
    return new Control_Monad_State_Class.MonadState(function () {
        return monadReaderT(dictMonadState["__superclass_Prelude.Monad_0"]());
    }, function (f) {
        return Control_Monad_Trans.lift(monadTransReaderT)(dictMonadState["__superclass_Prelude.Monad_0"]())(Control_Monad_State_Class.state(dictMonadState)(f));
    });
};
var monadWriterReaderT = function (dictMonad) {
    return function (dictMonadWriter) {
        return new Control_Monad_Writer_Class.MonadWriter(function () {
            return monadReaderT(dictMonad);
        }, mapReaderT(Control_Monad_Writer_Class.listen(dictMonadWriter)), mapReaderT(Control_Monad_Writer_Class.pass(dictMonadWriter)), function (wd) {
            return Control_Monad_Trans.lift(monadTransReaderT)(dictMonad)(Control_Monad_Writer_Class.writer(dictMonadWriter)(wd));
        });
    };
};
var altReaderT = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorReaderT(dictAlt["__superclass_Prelude.Functor_0"]());
    }, function (m) {
        return function (n) {
            return function (r) {
                return Control_Alt["<|>"](dictAlt)(runReaderT(m)(r))(runReaderT(n)(r));
            };
        };
    });
};
var plusReaderT = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altReaderT(dictPlus["__superclass_Control.Alt.Alt_0"]());
    }, Prelude["const"](Control_Plus.empty(dictPlus)));
};
var alternativeReaderT = function (dictAlternative) {
    return new Control_Alternative.Alternative(function () {
        return plusReaderT(dictAlternative["__superclass_Control.Plus.Plus_1"]());
    }, function () {
        return applicativeReaderT(dictAlternative["__superclass_Prelude.Applicative_0"]());
    });
};
var monadPlusReaderT = function (dictMonadPlus) {
    return new Control_MonadPlus.MonadPlus(function () {
        return alternativeReaderT(dictMonadPlus["__superclass_Control.Alternative.Alternative_1"]());
    }, function () {
        return monadReaderT(dictMonadPlus["__superclass_Prelude.Monad_0"]());
    });
};
module.exports = {
    ReaderT: ReaderT, 
    mapReaderT: mapReaderT, 
    withReaderT: withReaderT, 
    runReaderT: runReaderT, 
    functorReaderT: functorReaderT, 
    applyReaderT: applyReaderT, 
    applicativeReaderT: applicativeReaderT, 
    altReaderT: altReaderT, 
    plusReaderT: plusReaderT, 
    alternativeReaderT: alternativeReaderT, 
    bindReaderT: bindReaderT, 
    monadReaderT: monadReaderT, 
    monadPlusReaderT: monadPlusReaderT, 
    monadTransReaderT: monadTransReaderT, 
    monadEffReader: monadEffReader, 
    monadContReaderT: monadContReaderT, 
    monadErrorReaderT: monadErrorReaderT, 
    monadReaderReaderT: monadReaderReaderT, 
    monadStateReaderT: monadStateReaderT, 
    monadWriterReaderT: monadWriterReaderT, 
    distributiveReaderT: distributiveReaderT, 
    monadRecReaderT: monadRecReaderT
};
