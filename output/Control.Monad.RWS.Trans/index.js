// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Data_Either = require("Data.Either");
var Data_Monoid = require("Data.Monoid");
var Data_Tuple = require("Data.Tuple");
var Control_Monad_Eff_Class = require("Control.Monad.Eff.Class");
var Control_Monad_Error_Class = require("Control.Monad.Error.Class");
var Control_Monad_Reader_Class = require("Control.Monad.Reader.Class");
var Control_Monad_Rec_Class = require("Control.Monad.Rec.Class");
var Control_Monad_RWS_Class = require("Control.Monad.RWS.Class");
var Control_Monad_State_Class = require("Control.Monad.State.Class");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Control_Monad_Writer_Class = require("Control.Monad.Writer.Class");
var RWSResult = (function () {
    function RWSResult(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    RWSResult.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new RWSResult(value0, value1, value2);
            };
        };
    };
    return RWSResult;
})();
var RWST = function (x) {
    return x;
};
var runRWST = function (v) {
    return v;
};
var withRWST = function (f) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Data_Tuple.uncurry(runRWST(m))(f(r)(s));
            };
        };
    };
};
var monadTransRWST = function (dictMonoid) {
    return new Control_Monad_Trans.MonadTrans(function (dictMonad) {
        return function (m) {
            return function (v) {
                return function (s) {
                    return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(m)(function (a) {
                        return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                    });
                };
            };
        };
    });
};
var mapRWST = function (f) {
    return function (m) {
        return function (r) {
            return function (s) {
                return f(runRWST(m)(r)(s));
            };
        };
    };
};
var functorRWST = function (dictFunctor) {
    return function (dictMonoid) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude["<$>"](dictFunctor)(function (v) {
                            return new RWSResult(v.value0, f(v.value1), v.value2);
                        })(runRWST(m)(r)(s));
                    };
                };
            };
        });
    };
};
var execRWST = function (dictMonad) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (v) {
                    return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(v.value0, v.value2));
                });
            };
        };
    };
};
var evalRWST = function (dictMonad) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (v) {
                    return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(v.value1, v.value2));
                });
            };
        };
    };
};
var applyRWST = function (dictBind) {
    return function (dictMonoid) {
        return new Prelude.Apply(function () {
            return functorRWST((dictBind["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(dictMonoid);
        }, function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](dictBind)(runRWST(f)(r)(s))(function (v) {
                            return Prelude["<#>"]((dictBind["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(runRWST(m)(r)(v.value0))(function (v1) {
                                return new RWSResult(v1.value0, v.value1(v1.value1), Prelude["++"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value2)(v1.value2));
                            });
                        });
                    };
                };
            };
        });
    };
};
var bindRWST = function (dictBind) {
    return function (dictMonoid) {
        return new Prelude.Bind(function () {
            return applyRWST(dictBind)(dictMonoid);
        }, function (m) {
            return function (f) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](dictBind)(runRWST(m)(r)(s))(function (v) {
                            return Prelude["<#>"]((dictBind["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(runRWST(f(v.value1))(r)(v.value0))(function (v1) {
                                return new RWSResult(v1.value0, v1.value1, Prelude["++"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value2)(v1.value2));
                            });
                        });
                    };
                };
            };
        });
    };
};
var applicativeRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Prelude.Applicative(function () {
            return applyRWST(dictMonad["__superclass_Prelude.Bind_1"]())(dictMonoid);
        }, function (a) {
            return function (v) {
                return function (s) {
                    return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                };
            };
        });
    };
};
var monadRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Prelude.Monad(function () {
            return applicativeRWST(dictMonad)(dictMonoid);
        }, function () {
            return bindRWST(dictMonad["__superclass_Prelude.Bind_1"]())(dictMonoid);
        });
    };
};
var monadEffRWS = function (dictMonad) {
    return function (dictMonoid) {
        return function (dictMonadEff) {
            return new Control_Monad_Eff_Class.MonadEff(function () {
                return monadRWST(dictMonad)(dictMonoid);
            }, function ($107) {
                return Control_Monad_Trans.lift(monadTransRWST(dictMonoid))(dictMonad)(Control_Monad_Eff_Class.liftEff(dictMonadEff)($107));
            });
        };
    };
};
var monadErrorRWST = function (dictMonadError) {
    return function (dictMonoid) {
        return new Control_Monad_Error_Class.MonadError(function () {
            return monadRWST(dictMonadError["__superclass_Prelude.Monad_0"]())(dictMonoid);
        }, function (m) {
            return function (h) {
                return RWST(function (r) {
                    return function (s) {
                        return Control_Monad_Error_Class.catchError(dictMonadError)(runRWST(m)(r)(s))(function (e) {
                            return runRWST(h(e))(r)(s);
                        });
                    };
                });
            };
        }, function (e) {
            return Control_Monad_Trans.lift(monadTransRWST(dictMonoid))(dictMonadError["__superclass_Prelude.Monad_0"]())(Control_Monad_Error_Class.throwError(dictMonadError)(e));
        });
    };
};
var monadReaderRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Reader_Class.MonadReader(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (r) {
            return function (s) {
                return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(s, r, Data_Monoid.mempty(dictMonoid)));
            };
        }, function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return runRWST(m)(f(r))(s);
                    };
                };
            };
        });
    };
};
var monadRecRWST = function (dictMonoid) {
    return function (dictMonadRec) {
        return new Control_Monad_Rec_Class.MonadRec(function () {
            return monadRWST(dictMonadRec["__superclass_Prelude.Monad_0"]())(dictMonoid);
        }, function (k) {
            return function (a) {
                var k__ALT = function (r) {
                    return function (v) {
                        return Prelude.bind((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Bind_1"]())(runRWST(k(v.value1))(r)(v.value0))(function (v1) {
                            return Prelude["return"]((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Applicative_0"]())((function () {
                                if (v1.value1 instanceof Data_Either.Left) {
                                    return new Data_Either.Left(new RWSResult(v1.value0, v1.value1.value0, Prelude["<>"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value2)(v1.value2)));
                                };
                                if (v1.value1 instanceof Data_Either.Right) {
                                    return new Data_Either.Right(new RWSResult(v1.value0, v1.value1.value0, Prelude["<>"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value2)(v1.value2)));
                                };
                                throw new Error("Failed pattern match at Control.Monad.RWS.Trans line 98, column 5 - line 102, column 75: " + [ v1.value1.constructor.name ]);
                            })());
                        });
                    };
                };
                return function (r) {
                    return function (s) {
                        return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(k__ALT(r))(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                    };
                };
            };
        });
    };
};
var monadStateRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_State_Class.MonadState(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (f) {
            return function (v) {
                return function (s) {
                    var $90 = f(s);
                    return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult($90.value1, $90.value0, Data_Monoid.mempty(dictMonoid)));
                };
            };
        });
    };
};
var monadWriterRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Writer_Class.MonadWriter(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (v) {
                        return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(v.value0, new Data_Tuple.Tuple(v.value1, v.value2), v.value2));
                    });
                };
            };
        }, function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (v) {
                        return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(v.value0, v.value1.value0, v.value1.value1(v.value2)));
                    });
                };
            };
        }, function (v) {
            return function (v1) {
                return function (s) {
                    return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())(new RWSResult(s, v.value0, v.value1));
                };
            };
        });
    };
};
var monadRWSRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_RWS_Class.MonadRWS(function () {
            return monadReaderRWST(dictMonad)(dictMonoid);
        }, function () {
            return monadStateRWST(dictMonad)(dictMonoid);
        }, function () {
            return monadWriterRWST(dictMonad)(dictMonoid);
        }, function () {
            return dictMonoid;
        });
    };
};
module.exports = {
    RWST: RWST,
    RWSResult: RWSResult,
    withRWST: withRWST,
    mapRWST: mapRWST,
    execRWST: execRWST,
    evalRWST: evalRWST,
    runRWST: runRWST,
    functorRWST: functorRWST,
    applyRWST: applyRWST,
    bindRWST: bindRWST,
    applicativeRWST: applicativeRWST,
    monadRWST: monadRWST,
    monadTransRWST: monadTransRWST,
    monadEffRWS: monadEffRWS,
    monadReaderRWST: monadReaderRWST,
    monadStateRWST: monadStateRWST,
    monadWriterRWST: monadWriterRWST,
    monadRWSRWST: monadRWSRWST,
    monadErrorRWST: monadErrorRWST,
    monadRecRWST: monadRecRWST
};
