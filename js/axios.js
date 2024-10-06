!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).axios =
        t());
})(this, function () {
  "use strict";
  function e(e) {
    var r, n;
    function o(r, n) {
      try {
        var a = e[r](n),
          s = a.value,
          u = s instanceof t;
        Promise.resolve(u ? s.v : s).then(
          function (t) {
            if (u) {
              var n = "return" === r ? "return" : "next";
              if (!s.k || t.done) return o(n, t);
              t = e[n](t).value;
            }
            i(a.done ? "return" : "normal", t);
          },
          function (e) {
            o("throw", e);
          }
        );
      } catch (e) {
        i("throw", e);
      }
    }
    function i(e, t) {
      switch (e) {
        case "return":
          r.resolve({ value: t, done: !0 });
          break;
        case "throw":
          r.reject(t);
          break;
        default:
          r.resolve({ value: t, done: !1 });
      }
      (r = r.next) ? o(r.key, r.arg) : (n = null);
    }
    (this._invoke = function (e, t) {
      return new Promise(function (i, a) {
        var s = { key: e, arg: t, resolve: i, reject: a, next: null };
        n ? (n = n.next = s) : ((r = n = s), o(e, t));
      });
    }),
      "function" != typeof e.return && (this.return = void 0);
  }
  function t(e, t) {
    (this.v = e), (this.k = t);
  }
  function r(e) {
    var r = {},
      n = !1;
    function o(r, o) {
      return (
        (n = !0),
        (o = new Promise(function (t) {
          t(e[r](o));
        })),
        { done: !1, value: new t(o, 1) }
      );
    }
    return (
      (r[("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"] =
        function () {
          return this;
        }),
      (r.next = function (e) {
        return n ? ((n = !1), e) : o("next", e);
      }),
      "function" == typeof e.throw &&
        (r.throw = function (e) {
          if (n) throw ((n = !1), e);
          return o("throw", e);
        }),
      "function" == typeof e.return &&
        (r.return = function (e) {
          return n ? ((n = !1), e) : o("return", e);
        }),
      r
    );
  }
  function n(e) {
    var t,
      r,
      n,
      i = 2;
    for (
      "undefined" != typeof Symbol &&
      ((r = Symbol.asyncIterator), (n = Symbol.iterator));
      i--;

    ) {
      if (r && null != (t = e[r])) return t.call(e);
      if (n && null != (t = e[n])) return new o(t.call(e));
      (r = "@@asyncIterator"), (n = "@@iterator");
    }
    throw new TypeError("Object is not async iterable");
  }
  function o(e) {
    function t(e) {
      if (Object(e) !== e)
        return Promise.reject(new TypeError(e + " is not an object."));
      var t = e.done;
      return Promise.resolve(e.value).then(function (e) {
        return { value: e, done: t };
      });
    }
    return (
      (o = function (e) {
        (this.s = e), (this.n = e.next);
      }),
      (o.prototype = {
        s: null,
        n: null,
        next: function () {
          return t(this.n.apply(this.s, arguments));
        },
        return: function (e) {
          var r = this.s.return;
          return void 0 === r
            ? Promise.resolve({ value: e, done: !0 })
            : t(r.apply(this.s, arguments));
        },
        throw: function (e) {
          var r = this.s.return;
          return void 0 === r
            ? Promise.reject(e)
            : t(r.apply(this.s, arguments));
        },
      }),
      new o(e)
    );
  }
  function i(e) {
    return new t(e, 0);
  }
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? a(Object(r), !0).forEach(function (t) {
            y(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : a(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function u() {
    u = function () {
      return t;
    };
    var e,
      t = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      s = i.asyncIterator || "@@asyncIterator",
      c = i.toStringTag || "@@toStringTag";
    function f(e, t, r) {
      return (
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      f({}, "");
    } catch (e) {
      f = function (e, t, r) {
        return (e[t] = r);
      };
    }
    function l(e, t, r, n) {
      var i = t && t.prototype instanceof m ? t : m,
        a = Object.create(i.prototype),
        s = new P(n || []);
      return o(a, "_invoke", { value: T(e, r, s) }), a;
    }
    function h(e, t, r) {
      try {
        return { type: "normal", arg: e.call(t, r) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = l;
    var p = "suspendedStart",
      d = "executing",
      v = "completed",
      y = {};
    function m() {}
    function b() {}
    function g() {}
    var w = {};
    f(w, a, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      O = E && E(E(L([])));
    O && O !== r && n.call(O, a) && (w = O);
    var S = (g.prototype = m.prototype = Object.create(w));
    function x(e) {
      ["next", "throw", "return"].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function R(e, t) {
      function r(o, i, a, s) {
        var u = h(e[o], e, i);
        if ("throw" !== u.type) {
          var c = u.arg,
            f = c.value;
          return f && "object" == typeof f && n.call(f, "__await")
            ? t.resolve(f.__await).then(
                function (e) {
                  r("next", e, a, s);
                },
                function (e) {
                  r("throw", e, a, s);
                }
              )
            : t.resolve(f).then(
                function (e) {
                  (c.value = e), a(c);
                },
                function (e) {
                  return r("throw", e, a, s);
                }
              );
        }
        s(u.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (e, n) {
          function o() {
            return new t(function (t, o) {
              r(e, n, t, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function T(t, r, n) {
      var o = p;
      return function (i, a) {
        if (o === d) throw new Error("Generator is already running");
        if (o === v) {
          if ("throw" === i) throw a;
          return { value: e, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var s = n.delegate;
          if (s) {
            var u = k(s, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === p) throw ((o = v), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = d;
          var c = h(t, r, n);
          if ("normal" === c.type) {
            if (((o = n.done ? v : "suspendedYield"), c.arg === y)) continue;
            return { value: c.arg, done: n.done };
          }
          "throw" === c.type &&
            ((o = v), (n.method = "throw"), (n.arg = c.arg));
        }
      };
    }
    function k(t, r) {
      var n = r.method,
        o = t.iterator[n];
      if (o === e)
        return (
          (r.delegate = null),
          ("throw" === n &&
            t.iterator.return &&
            ((r.method = "return"),
            (r.arg = e),
            k(t, r),
            "throw" === r.method)) ||
            ("return" !== n &&
              ((r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          y
        );
      var i = h(o, t.iterator, r.arg);
      if ("throw" === i.type)
        return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[t.resultName] = a.value),
            (r.next = t.nextLoc),
            "return" !== r.method && ((r.method = "next"), (r.arg = e)),
            (r.delegate = null),
            y)
          : a
        : ((r.method = "throw"),
          (r.arg = new TypeError("iterator result is not an object")),
          (r.delegate = null),
          y);
    }
    function j(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function A(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function P(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(j, this),
        this.reset(!0);
    }
    function L(t) {
      if (t || "" === t) {
        var r = t[a];
        if (r) return r.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < t.length; )
                if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
              return (r.value = e), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(typeof t + " is not iterable");
    }
    return (
      (b.prototype = g),
      o(S, "constructor", { value: g, configurable: !0 }),
      o(g, "constructor", { value: b, configurable: !0 }),
      (b.displayName = f(g, c, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, g)
            : ((e.__proto__ = g), f(e, c, "GeneratorFunction")),
          (e.prototype = Object.create(S)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      x(R.prototype),
      f(R.prototype, s, function () {
        return this;
      }),
      (t.AsyncIterator = R),
      (t.async = function (e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new R(l(e, r, n, o), i);
        return t.isGeneratorFunction(r)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      x(S),
      f(S, c, "Generator"),
      f(S, a, function () {
        return this;
      }),
      f(S, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          r = [];
        for (var n in t) r.push(n);
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in t) return (e.value = n), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = L),
      (P.prototype = {
        constructor: P,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(A),
            !t)
          )
            for (var r in this)
              "t" === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;
          function o(n, o) {
            return (
              (s.type = "throw"),
              (s.arg = t),
              (r.next = n),
              o && ((r.method = "next"), (r.arg = e)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              s = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                c = n.call(a, "finallyLoc");
              if (u && c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!c)
                  throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e),
            (a.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), y)
              : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            y
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e)
              return this.complete(r.completion, r.afterLoc), A(r), y;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                A(r);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, r, n) {
          return (
            (this.delegate = { iterator: L(t), resultName: r, nextLoc: n }),
            "next" === this.method && (this.arg = e),
            y
          );
        },
      }),
      t
    );
  }
  function c(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != typeof n) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  function f(e) {
    return (
      (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      f(e)
    );
  }
  function l(e, t, r, n, o, i, a) {
    try {
      var s = e[i](a),
        u = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, o);
  }
  function h(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);
        function a(e) {
          l(i, n, o, a, s, "next", e);
        }
        function s(e) {
          l(i, n, o, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function p(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, c(n.key), n);
    }
  }
  function v(e, t, r) {
    return (
      t && d(e.prototype, t),
      r && d(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function y(e, t, r) {
    return (
      (t = c(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function m(e, t) {
    return (
      g(e) ||
      (function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            s = [],
            u = !0,
            c = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              u = !1;
            } else
              for (
                ;
                !(u = (n = i.call(r)).done) &&
                (s.push(n.value), s.length !== t);
                u = !0
              );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
                return;
            } finally {
              if (c) throw o;
            }
          }
          return s;
        }
      })(e, t) ||
      E(e, t) ||
      S()
    );
  }
  function b(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return O(e);
      })(e) ||
      w(e) ||
      E(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function g(e) {
    if (Array.isArray(e)) return e;
  }
  function w(e) {
    if (
      ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e["@@iterator"]
    )
      return Array.from(e);
  }
  function E(e, t) {
    if (e) {
      if ("string" == typeof e) return O(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(e)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? O(e, t)
          : void 0
      );
    }
  }
  function O(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function S() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function x(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  (e.prototype[
    ("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"
  ] = function () {
    return this;
  }),
    (e.prototype.next = function (e) {
      return this._invoke("next", e);
    }),
    (e.prototype.throw = function (e) {
      return this._invoke("throw", e);
    }),
    (e.prototype.return = function (e) {
      return this._invoke("return", e);
    });
  var R,
    T = Object.prototype.toString,
    k = Object.getPrototypeOf,
    j =
      ((R = Object.create(null)),
      function (e) {
        var t = T.call(e);
        return R[t] || (R[t] = t.slice(8, -1).toLowerCase());
      }),
    A = function (e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return j(t) === e;
        }
      );
    },
    P = function (e) {
      return function (t) {
        return f(t) === e;
      };
    },
    L = Array.isArray,
    N = P("undefined");
  var _ = A("ArrayBuffer");
  var C = P("string"),
    F = P("function"),
    U = P("number"),
    B = function (e) {
      return null !== e && "object" === f(e);
    },
    D = function (e) {
      if ("object" !== j(e)) return !1;
      var t = k(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    I = A("Date"),
    q = A("File"),
    M = A("Blob"),
    z = A("FileList"),
    H = A("URLSearchParams"),
    J = m(["ReadableStream", "Request", "Response", "Headers"].map(A), 4),
    W = J[0],
    G = J[1],
    K = J[2],
    V = J[3];
  function X(e, t) {
    var r,
      n,
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = o.allOwnKeys,
      a = void 0 !== i && i;
    if (null != e)
      if (("object" !== f(e) && (e = [e]), L(e)))
        for (r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
      else {
        var s,
          u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
          c = u.length;
        for (r = 0; r < c; r++) (s = u[r]), t.call(null, e[s], s, e);
      }
  }
  function $(e, t) {
    t = t.toLowerCase();
    for (var r, n = Object.keys(e), o = n.length; o-- > 0; )
      if (t === (r = n[o]).toLowerCase()) return r;
    return null;
  }
  var Y =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    Q = function (e) {
      return !N(e) && e !== Y;
    };
  var Z,
    ee =
      ((Z = "undefined" != typeof Uint8Array && k(Uint8Array)),
      function (e) {
        return Z && e instanceof Z;
      }),
    te = A("HTMLFormElement"),
    re = (function (e) {
      var t = Object.prototype.hasOwnProperty;
      return function (e, r) {
        return t.call(e, r);
      };
    })(),
    ne = A("RegExp"),
    oe = function (e, t) {
      var r = Object.getOwnPropertyDescriptors(e),
        n = {};
      X(r, function (r, o) {
        var i;
        !1 !== (i = t(r, o, e)) && (n[o] = i || r);
      }),
        Object.defineProperties(e, n);
    },
    ie = "abcdefghijklmnopqrstuvwxyz",
    ae = "0123456789",
    se = { DIGIT: ae, ALPHA: ie, ALPHA_DIGIT: ie + ie.toUpperCase() + ae };
  var ue,
    ce,
    fe,
    le,
    he = A("AsyncFunction"),
    pe =
      ((ue = "function" == typeof setImmediate),
      (ce = F(Y.postMessage)),
      ue
        ? setImmediate
        : ce
        ? ((fe = "axios@".concat(Math.random())),
          (le = []),
          Y.addEventListener(
            "message",
            function (e) {
              var t = e.source,
                r = e.data;
              t === Y && r === fe && le.length && le.shift()();
            },
            !1
          ),
          function (e) {
            le.push(e), Y.postMessage(fe, "*");
          })
        : function (e) {
            return setTimeout(e);
          }),
    de =
      "undefined" != typeof queueMicrotask
        ? queueMicrotask.bind(Y)
        : ("undefined" != typeof process && process.nextTick) || pe,
    ve = {
      isArray: L,
      isArrayBuffer: _,
      isBuffer: function (e) {
        return (
          null !== e &&
          !N(e) &&
          null !== e.constructor &&
          !N(e.constructor) &&
          F(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        var t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (F(e.append) &&
              ("formdata" === (t = j(e)) ||
                ("object" === t &&
                  F(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && _(e.buffer);
      },
      isString: C,
      isNumber: U,
      isBoolean: function (e) {
        return !0 === e || !1 === e;
      },
      isObject: B,
      isPlainObject: D,
      isReadableStream: W,
      isRequest: G,
      isResponse: K,
      isHeaders: V,
      isUndefined: N,
      isDate: I,
      isFile: q,
      isBlob: M,
      isRegExp: ne,
      isFunction: F,
      isStream: function (e) {
        return B(e) && F(e.pipe);
      },
      isURLSearchParams: H,
      isTypedArray: ee,
      isFileList: z,
      forEach: X,
      merge: function e() {
        for (
          var t = (Q(this) && this) || {},
            r = t.caseless,
            n = {},
            o = function (t, o) {
              var i = (r && $(n, o)) || o;
              D(n[i]) && D(t)
                ? (n[i] = e(n[i], t))
                : D(t)
                ? (n[i] = e({}, t))
                : L(t)
                ? (n[i] = t.slice())
                : (n[i] = t);
            },
            i = 0,
            a = arguments.length;
          i < a;
          i++
        )
          arguments[i] && X(arguments[i], o);
        return n;
      },
      extend: function (e, t, r) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = n.allOwnKeys;
        return (
          X(
            t,
            function (t, n) {
              r && F(t) ? (e[n] = x(t, r)) : (e[n] = t);
            },
            { allOwnKeys: o }
          ),
          e
        );
      },
      trim: function (e) {
        return e.trim
          ? e.trim()
          : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
      inherits: function (e, t, r, n) {
        (e.prototype = Object.create(t.prototype, n)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          r && Object.assign(e.prototype, r);
      },
      toFlatObject: function (e, t, r, n) {
        var o,
          i,
          a,
          s = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
            (a = o[i]),
              (n && !n(a, e, t)) || s[a] || ((t[a] = e[a]), (s[a] = !0));
          e = !1 !== r && k(e);
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: j,
      kindOfTest: A,
      endsWith: function (e, t, r) {
        (e = String(e)),
          (void 0 === r || r > e.length) && (r = e.length),
          (r -= t.length);
        var n = e.indexOf(t, r);
        return -1 !== n && n === r;
      },
      toArray: function (e) {
        if (!e) return null;
        if (L(e)) return e;
        var t = e.length;
        if (!U(t)) return null;
        for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
        return r;
      },
      forEachEntry: function (e, t) {
        for (
          var r, n = (e && e[Symbol.iterator]).call(e);
          (r = n.next()) && !r.done;

        ) {
          var o = r.value;
          t.call(e, o[0], o[1]);
        }
      },
      matchAll: function (e, t) {
        for (var r, n = []; null !== (r = e.exec(t)); ) n.push(r);
        return n;
      },
      isHTMLForm: te,
      hasOwnProperty: re,
      hasOwnProp: re,
      reduceDescriptors: oe,
      freezeMethods: function (e) {
        oe(e, function (t, r) {
          if (F(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
            return !1;
          var n = e[r];
          F(n) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = function () {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                }));
        });
      },
      toObjectSet: function (e, t) {
        var r = {},
          n = function (e) {
            e.forEach(function (e) {
              r[e] = !0;
            });
          };
        return L(e) ? n(e) : n(String(e).split(t)), r;
      },
      toCamelCase: function (e) {
        return e
          .toLowerCase()
          .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
            return t.toUpperCase() + r;
          });
      },
      noop: function () {},
      toFiniteNumber: function (e, t) {
        return null != e && Number.isFinite((e = +e)) ? e : t;
      },
      findKey: $,
      global: Y,
      isContextDefined: Q,
      ALPHABET: se,
      generateString: function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 16,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : se.ALPHA_DIGIT,
            r = "",
            n = t.length;
          e--;

        )
          r += t[(Math.random() * n) | 0];
        return r;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          F(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: function (e) {
        var t = new Array(10);
        return (function e(r, n) {
          if (B(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[n] = r;
              var o = L(r) ? [] : {};
              return (
                X(r, function (t, r) {
                  var i = e(t, n + 1);
                  !N(i) && (o[r] = i);
                }),
                (t[n] = void 0),
                o
              );
            }
          }
          return r;
        })(e, 0);
      },
      isAsyncFn: he,
      isThenable: function (e) {
        return e && (B(e) || F(e)) && F(e.then) && F(e.catch);
      },
      setImmediate: pe,
      asap: de,
    };
  function ye(e, t, r, n, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      o && (this.response = o);
  }
  ve.inherits(ye, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: ve.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var me = ye.prototype,
    be = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach(function (e) {
    be[e] = { value: e };
  }),
    Object.defineProperties(ye, be),
    Object.defineProperty(me, "isAxiosError", { value: !0 }),
    (ye.from = function (e, t, r, n, o, i) {
      var a = Object.create(me);
      return (
        ve.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype;
          },
          function (e) {
            return "isAxiosError" !== e;
          }
        ),
        ye.call(a, e.message, t, r, n, o),
        (a.cause = e),
        (a.name = e.name),
        i && Object.assign(a, i),
        a
      );
    });
  function ge(e) {
    return ve.isPlainObject(e) || ve.isArray(e);
  }
  function we(e) {
    return ve.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Ee(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = we(e)), !r && t ? "[" + e + "]" : e;
          })
          .join(r ? "." : "")
      : t;
  }
  var Oe = ve.toFlatObject(ve, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function Se(e, t, r) {
    if (!ve.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    var n = (r = ve.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !ve.isUndefined(t[e]);
        }
      )).metaTokens,
      o = r.visitor || c,
      i = r.dots,
      a = r.indexes,
      s =
        (r.Blob || ("undefined" != typeof Blob && Blob)) &&
        ve.isSpecCompliantForm(t);
    if (!ve.isFunction(o)) throw new TypeError("visitor must be a function");
    function u(e) {
      if (null === e) return "";
      if (ve.isDate(e)) return e.toISOString();
      if (!s && ve.isBlob(e))
        throw new ye("Blob is not supported. Use a Buffer instead.");
      return ve.isArrayBuffer(e) || ve.isTypedArray(e)
        ? s && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function c(e, r, o) {
      var s = e;
      if (e && !o && "object" === f(e))
        if (ve.endsWith(r, "{}"))
          (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (ve.isArray(e) &&
            (function (e) {
              return ve.isArray(e) && !e.some(ge);
            })(e)) ||
          ((ve.isFileList(e) || ve.endsWith(r, "[]")) && (s = ve.toArray(e)))
        )
          return (
            (r = we(r)),
            s.forEach(function (e, n) {
              !ve.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === a ? Ee([r], n, i) : null === a ? r : r + "[]",
                  u(e)
                );
            }),
            !1
          );
      return !!ge(e) || (t.append(Ee(o, r, i), u(e)), !1);
    }
    var l = [],
      h = Object.assign(Oe, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: ge,
      });
    if (!ve.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(r, n) {
        if (!ve.isUndefined(r)) {
          if (-1 !== l.indexOf(r))
            throw Error("Circular reference detected in " + n.join("."));
          l.push(r),
            ve.forEach(r, function (r, i) {
              !0 ===
                (!(ve.isUndefined(r) || null === r) &&
                  o.call(t, r, ve.isString(i) ? i.trim() : i, n, h)) &&
                e(r, n ? n.concat(i) : [i]);
            }),
            l.pop();
        }
      })(e),
      t
    );
  }
  function xe(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Re(e, t) {
    (this._pairs = []), e && Se(e, this, t);
  }
  var Te = Re.prototype;
  function ke(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function je(e, t, r) {
    if (!t) return e;
    var n,
      o = (r && r.encode) || ke,
      i = r && r.serialize;
    if (
      (n = i
        ? i(t, r)
        : ve.isURLSearchParams(t)
        ? t.toString()
        : new Re(t, r).toString(o))
    ) {
      var a = e.indexOf("#");
      -1 !== a && (e = e.slice(0, a)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
    }
    return e;
  }
  (Te.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Te.toString = function (e) {
      var t = e
        ? function (t) {
            return e.call(this, t, xe);
          }
        : xe;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  var Ae,
    Pe = (function () {
      function e() {
        p(this, e), (this.handlers = []);
      }
      return (
        v(e, [
          {
            key: "use",
            value: function (e, t, r) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!r && r.synchronous,
                  runWhen: r ? r.runWhen : null,
                }),
                this.handlers.length - 1
              );
            },
          },
          {
            key: "eject",
            value: function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            },
          },
          {
            key: "clear",
            value: function () {
              this.handlers && (this.handlers = []);
            },
          },
          {
            key: "forEach",
            value: function (e) {
              ve.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            },
          },
        ]),
        e
      );
    })(),
    Le = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Ne = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : Re,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    _e = "undefined" != typeof window && "undefined" != typeof document,
    Ce =
      ((Ae = "undefined" != typeof navigator && navigator.product),
      _e && ["ReactNative", "NativeScript", "NS"].indexOf(Ae) < 0),
    Fe =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    Ue = (_e && window.location.href) || "http://localhost",
    Be = s(
      s(
        {},
        Object.freeze({
          __proto__: null,
          hasBrowserEnv: _e,
          hasStandardBrowserWebWorkerEnv: Fe,
          hasStandardBrowserEnv: Ce,
          origin: Ue,
        })
      ),
      Ne
    );
  function De(e) {
    function t(e, r, n, o) {
      var i = e[o++];
      if ("__proto__" === i) return !0;
      var a = Number.isFinite(+i),
        s = o >= e.length;
      return (
        (i = !i && ve.isArray(n) ? n.length : i),
        s
          ? (ve.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !a)
          : ((n[i] && ve.isObject(n[i])) || (n[i] = []),
            t(e, r, n[i], o) &&
              ve.isArray(n[i]) &&
              (n[i] = (function (e) {
                var t,
                  r,
                  n = {},
                  o = Object.keys(e),
                  i = o.length;
                for (t = 0; t < i; t++) n[(r = o[t])] = e[r];
                return n;
              })(n[i])),
            !a)
      );
    }
    if (ve.isFormData(e) && ve.isFunction(e.entries)) {
      var r = {};
      return (
        ve.forEachEntry(e, function (e, n) {
          t(
            (function (e) {
              return ve.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                return "[]" === e[0] ? "" : e[1] || e[0];
              });
            })(e),
            n,
            r,
            0
          );
        }),
        r
      );
    }
    return null;
  }
  var Ie = {
    transitional: Le,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        var r,
          n = t.getContentType() || "",
          o = n.indexOf("application/json") > -1,
          i = ve.isObject(e);
        if ((i && ve.isHTMLForm(e) && (e = new FormData(e)), ve.isFormData(e)))
          return o ? JSON.stringify(De(e)) : e;
        if (
          ve.isArrayBuffer(e) ||
          ve.isBuffer(e) ||
          ve.isStream(e) ||
          ve.isFile(e) ||
          ve.isBlob(e) ||
          ve.isReadableStream(e)
        )
          return e;
        if (ve.isArrayBufferView(e)) return e.buffer;
        if (ve.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Se(
                e,
                new Be.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, r, n) {
                      return Be.isNode && ve.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : n.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((r = ve.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            var a = this.env && this.env.FormData;
            return Se(
              r ? { "files[]": e } : e,
              a && new a(),
              this.formSerializer
            );
          }
        }
        return i || o
          ? (t.setContentType("application/json", !1),
            (function (e, t, r) {
              if (ve.isString(e))
                try {
                  return (t || JSON.parse)(e), ve.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (r || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || Ie.transitional,
          r = t && t.forcedJSONParsing,
          n = "json" === this.responseType;
        if (ve.isResponse(e) || ve.isReadableStream(e)) return e;
        if (e && ve.isString(e) && ((r && !this.responseType) || n)) {
          var o = !(t && t.silentJSONParsing) && n;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (o) {
              if ("SyntaxError" === e.name)
                throw ye.from(
                  e,
                  ye.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw e;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Be.classes.FormData, Blob: Be.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  ve.forEach(["delete", "get", "head", "post", "put", "patch"], function (e) {
    Ie.headers[e] = {};
  });
  var qe = Ie,
    Me = ve.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    ze = Symbol("internals");
  function He(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Je(e) {
    return !1 === e || null == e ? e : ve.isArray(e) ? e.map(Je) : String(e);
  }
  function We(e, t, r, n, o) {
    return ve.isFunction(n)
      ? n.call(this, t, r)
      : (o && (t = r),
        ve.isString(t)
          ? ve.isString(n)
            ? -1 !== t.indexOf(n)
            : ve.isRegExp(n)
            ? n.test(t)
            : void 0
          : void 0);
  }
  var Ge = (function (e, t) {
    function r(e) {
      p(this, r), e && this.set(e);
    }
    return (
      v(
        r,
        [
          {
            key: "set",
            value: function (e, t, r) {
              var n = this;
              function o(e, t, r) {
                var o = He(t);
                if (!o)
                  throw new Error("header name must be a non-empty string");
                var i = ve.findKey(n, o);
                (!i ||
                  void 0 === n[i] ||
                  !0 === r ||
                  (void 0 === r && !1 !== n[i])) &&
                  (n[i || t] = Je(e));
              }
              var i = function (e, t) {
                return ve.forEach(e, function (e, r) {
                  return o(e, r, t);
                });
              };
              if (ve.isPlainObject(e) || e instanceof this.constructor) i(e, t);
              else if (
                ve.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              )
                i(
                  (function (e) {
                    var t,
                      r,
                      n,
                      o = {};
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (n = e.indexOf(":")),
                            (t = e.substring(0, n).trim().toLowerCase()),
                            (r = e.substring(n + 1).trim()),
                            !t ||
                              (o[t] && Me[t]) ||
                              ("set-cookie" === t
                                ? o[t]
                                  ? o[t].push(r)
                                  : (o[t] = [r])
                                : (o[t] = o[t] ? o[t] + ", " + r : r));
                        }),
                      o
                    );
                  })(e),
                  t
                );
              else if (ve.isHeaders(e)) {
                var a,
                  s = (function (e, t) {
                    var r =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!r) {
                      if (
                        Array.isArray(e) ||
                        (r = E(e)) ||
                        (t && e && "number" == typeof e.length)
                      ) {
                        r && (e = r);
                        var n = 0,
                          o = function () {};
                        return {
                          s: o,
                          n: function () {
                            return n >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[n++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: o,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var i,
                      a = !0,
                      s = !1;
                    return {
                      s: function () {
                        r = r.call(e);
                      },
                      n: function () {
                        var e = r.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (s = !0), (i = e);
                      },
                      f: function () {
                        try {
                          a || null == r.return || r.return();
                        } finally {
                          if (s) throw i;
                        }
                      },
                    };
                  })(e.entries());
                try {
                  for (s.s(); !(a = s.n()).done; ) {
                    var u = m(a.value, 2),
                      c = u[0];
                    o(u[1], c, r);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              } else null != e && o(t, e, r);
              return this;
            },
          },
          {
            key: "get",
            value: function (e, t) {
              if ((e = He(e))) {
                var r = ve.findKey(this, e);
                if (r) {
                  var n = this[r];
                  if (!t) return n;
                  if (!0 === t)
                    return (function (e) {
                      for (
                        var t,
                          r = Object.create(null),
                          n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        (t = n.exec(e));

                      )
                        r[t[1]] = t[2];
                      return r;
                    })(n);
                  if (ve.isFunction(t)) return t.call(this, n, r);
                  if (ve.isRegExp(t)) return t.exec(n);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            },
          },
          {
            key: "has",
            value: function (e, t) {
              if ((e = He(e))) {
                var r = ve.findKey(this, e);
                return !(
                  !r ||
                  void 0 === this[r] ||
                  (t && !We(0, this[r], r, t))
                );
              }
              return !1;
            },
          },
          {
            key: "delete",
            value: function (e, t) {
              var r = this,
                n = !1;
              function o(e) {
                if ((e = He(e))) {
                  var o = ve.findKey(r, e);
                  !o || (t && !We(0, r[o], o, t)) || (delete r[o], (n = !0));
                }
              }
              return ve.isArray(e) ? e.forEach(o) : o(e), n;
            },
          },
          {
            key: "clear",
            value: function (e) {
              for (var t = Object.keys(this), r = t.length, n = !1; r--; ) {
                var o = t[r];
                (e && !We(0, this[o], o, e, !0)) || (delete this[o], (n = !0));
              }
              return n;
            },
          },
          {
            key: "normalize",
            value: function (e) {
              var t = this,
                r = {};
              return (
                ve.forEach(this, function (n, o) {
                  var i = ve.findKey(r, o);
                  if (i) return (t[i] = Je(n)), void delete t[o];
                  var a = e
                    ? (function (e) {
                        return e
                          .trim()
                          .toLowerCase()
                          .replace(/([a-z\d])(\w*)/g, function (e, t, r) {
                            return t.toUpperCase() + r;
                          });
                      })(o)
                    : String(o).trim();
                  a !== o && delete t[o], (t[a] = Je(n)), (r[a] = !0);
                }),
                this
              );
            },
          },
          {
            key: "concat",
            value: function () {
              for (
                var e, t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return (e = this.constructor).concat.apply(e, [this].concat(r));
            },
          },
          {
            key: "toJSON",
            value: function (e) {
              var t = Object.create(null);
              return (
                ve.forEach(this, function (r, n) {
                  null != r &&
                    !1 !== r &&
                    (t[n] = e && ve.isArray(r) ? r.join(", ") : r);
                }),
                t
              );
            },
          },
          {
            key: Symbol.iterator,
            value: function () {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            },
          },
          {
            key: "toString",
            value: function () {
              return Object.entries(this.toJSON())
                .map(function (e) {
                  var t = m(e, 2);
                  return t[0] + ": " + t[1];
                })
                .join("\n");
            },
          },
          {
            key: Symbol.toStringTag,
            get: function () {
              return "AxiosHeaders";
            },
          },
        ],
        [
          {
            key: "from",
            value: function (e) {
              return e instanceof this ? e : new this(e);
            },
          },
          {
            key: "concat",
            value: function (e) {
              for (
                var t = new this(e),
                  r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              return (
                n.forEach(function (e) {
                  return t.set(e);
                }),
                t
              );
            },
          },
          {
            key: "accessor",
            value: function (e) {
              var t = (this[ze] = this[ze] = { accessors: {} }).accessors,
                r = this.prototype;
              function n(e) {
                var n = He(e);
                t[n] ||
                  (!(function (e, t) {
                    var r = ve.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach(function (n) {
                      Object.defineProperty(e, n + r, {
                        value: function (e, r, o) {
                          return this[n].call(this, t, e, r, o);
                        },
                        configurable: !0,
                      });
                    });
                  })(r, e),
                  (t[n] = !0));
              }
              return ve.isArray(e) ? e.forEach(n) : n(e), this;
            },
          },
        ]
      ),
      r
    );
  })();
  Ge.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    ve.reduceDescriptors(Ge.prototype, function (e, t) {
      var r = e.value,
        n = t[0].toUpperCase() + t.slice(1);
      return {
        get: function () {
          return r;
        },
        set: function (e) {
          this[n] = e;
        },
      };
    }),
    ve.freezeMethods(Ge);
  var Ke = Ge;
  function Ve(e, t) {
    var r = this || qe,
      n = t || r,
      o = Ke.from(n.headers),
      i = n.data;
    return (
      ve.forEach(e, function (e) {
        i = e.call(r, i, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      i
    );
  }
  function Xe(e) {
    return !(!e || !e.__CANCEL__);
  }
  function $e(e, t, r) {
    ye.call(this, null == e ? "canceled" : e, ye.ERR_CANCELED, t, r),
      (this.name = "CanceledError");
  }
  function Ye(e, t, r) {
    var n = r.config.validateStatus;
    r.status && n && !n(r.status)
      ? t(
          new ye(
            "Request failed with status code " + r.status,
            [ye.ERR_BAD_REQUEST, ye.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r
          )
        )
      : e(r);
  }
  function Qe(e, t) {
    e = e || 10;
    var r,
      n = new Array(e),
      o = new Array(e),
      i = 0,
      a = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (s) {
        var u = Date.now(),
          c = o[a];
        r || (r = u), (n[i] = s), (o[i] = u);
        for (var f = a, l = 0; f !== i; ) (l += n[f++]), (f %= e);
        if (((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - r < t))) {
          var h = c && u - c;
          return h ? Math.round((1e3 * l) / h) : void 0;
        }
      }
    );
  }
  function Ze(e, t) {
    var r,
      n,
      o = 0,
      i = 1e3 / t,
      a = function (t) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        (o = i),
          (r = null),
          n && (clearTimeout(n), (n = null)),
          e.apply(null, t);
      };
    return [
      function () {
        for (
          var e = Date.now(),
            t = e - o,
            s = arguments.length,
            u = new Array(s),
            c = 0;
          c < s;
          c++
        )
          u[c] = arguments[c];
        t >= i
          ? a(u, e)
          : ((r = u),
            n ||
              (n = setTimeout(function () {
                (n = null), a(r);
              }, i - t)));
      },
      function () {
        return r && a(r);
      },
    ];
  }
  ve.inherits($e, ye, { __CANCEL__: !0 });
  var et = function (e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        n = 0,
        o = Qe(50, 250);
      return Ze(function (r) {
        var i = r.loaded,
          a = r.lengthComputable ? r.total : void 0,
          s = i - n,
          u = o(s);
        n = i;
        var c = y(
          {
            loaded: i,
            total: a,
            progress: a ? i / a : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && a && i <= a ? (a - i) / u : void 0,
            event: r,
            lengthComputable: null != a,
          },
          t ? "download" : "upload",
          !0
        );
        e(c);
      }, r);
    },
    tt = function (e, t) {
      var r = null != e;
      return [
        function (n) {
          return t[0]({ lengthComputable: r, total: e, loaded: n });
        },
        t[1],
      ];
    },
    rt = function (e) {
      return function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return ve.asap(function () {
          return e.apply(void 0, r);
        });
      };
    },
    nt = Be.hasStandardBrowserEnv
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function n(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = n(window.location.href)),
            function (t) {
              var r = ve.isString(t) ? n(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    ot = Be.hasStandardBrowserEnv
      ? {
          write: function (e, t, r, n, o, i) {
            var a = [e + "=" + encodeURIComponent(t)];
            ve.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
              ve.isString(n) && a.push("path=" + n),
              ve.isString(o) && a.push("domain=" + o),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  function it(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  var at = function (e) {
    return e instanceof Ke ? s({}, e) : e;
  };
  function st(e, t) {
    t = t || {};
    var r = {};
    function n(e, t, r) {
      return ve.isPlainObject(e) && ve.isPlainObject(t)
        ? ve.merge.call({ caseless: r }, e, t)
        : ve.isPlainObject(t)
        ? ve.merge({}, t)
        : ve.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, r) {
      return ve.isUndefined(t)
        ? ve.isUndefined(e)
          ? void 0
          : n(void 0, e, r)
        : n(e, t, r);
    }
    function i(e, t) {
      if (!ve.isUndefined(t)) return n(void 0, t);
    }
    function a(e, t) {
      return ve.isUndefined(t)
        ? ve.isUndefined(e)
          ? void 0
          : n(void 0, e)
        : n(void 0, t);
    }
    function s(r, o, i) {
      return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
    }
    var u = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: function (e, t) {
        return o(at(e), at(t), !0);
      },
    };
    return (
      ve.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
        var i = u[n] || o,
          a = i(e[n], t[n], n);
        (ve.isUndefined(a) && i !== s) || (r[n] = a);
      }),
      r
    );
  }
  var ut,
    ct,
    ft = function (e) {
      var t,
        r,
        n = st({}, e),
        o = n.data,
        i = n.withXSRFToken,
        a = n.xsrfHeaderName,
        s = n.xsrfCookieName,
        u = n.headers,
        c = n.auth;
      if (
        ((n.headers = u = Ke.from(u)),
        (n.url = je(it(n.baseURL, n.url), e.params, e.paramsSerializer)),
        c &&
          u.set(
            "Authorization",
            "Basic " +
              btoa(
                (c.username || "") +
                  ":" +
                  (c.password ? unescape(encodeURIComponent(c.password)) : "")
              )
          ),
        ve.isFormData(o))
      )
        if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv)
          u.setContentType(void 0);
        else if (!1 !== (t = u.getContentType())) {
          var f = t
              ? t
                  .split(";")
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(Boolean)
              : [],
            l = g((r = f)) || w(r) || E(r) || S(),
            h = l[0],
            p = l.slice(1);
          u.setContentType(
            [h || "multipart/form-data"].concat(b(p)).join("; ")
          );
        }
      if (
        Be.hasStandardBrowserEnv &&
        (i && ve.isFunction(i) && (i = i(n)), i || (!1 !== i && nt(n.url)))
      ) {
        var d = a && s && ot.read(s);
        d && u.set(a, d);
      }
      return n;
    },
    lt =
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, r) {
          var n,
            o,
            i,
            a,
            s,
            u = ft(e),
            c = u.data,
            f = Ke.from(u.headers).normalize(),
            l = u.responseType,
            h = u.onUploadProgress,
            p = u.onDownloadProgress;
          function d() {
            a && a(),
              s && s(),
              u.cancelToken && u.cancelToken.unsubscribe(n),
              u.signal && u.signal.removeEventListener("abort", n);
          }
          var v = new XMLHttpRequest();
          function y() {
            if (v) {
              var n = Ke.from(
                "getAllResponseHeaders" in v && v.getAllResponseHeaders()
              );
              Ye(
                function (e) {
                  t(e), d();
                },
                function (e) {
                  r(e), d();
                },
                {
                  data:
                    l && "text" !== l && "json" !== l
                      ? v.response
                      : v.responseText,
                  status: v.status,
                  statusText: v.statusText,
                  headers: n,
                  config: e,
                  request: v,
                }
              ),
                (v = null);
            }
          }
          if (
            (v.open(u.method.toUpperCase(), u.url, !0),
            (v.timeout = u.timeout),
            "onloadend" in v
              ? (v.onloadend = y)
              : (v.onreadystatechange = function () {
                  v &&
                    4 === v.readyState &&
                    (0 !== v.status ||
                      (v.responseURL &&
                        0 === v.responseURL.indexOf("file:"))) &&
                    setTimeout(y);
                }),
            (v.onabort = function () {
              v &&
                (r(new ye("Request aborted", ye.ECONNABORTED, e, v)),
                (v = null));
            }),
            (v.onerror = function () {
              r(new ye("Network Error", ye.ERR_NETWORK, e, v)), (v = null);
            }),
            (v.ontimeout = function () {
              var t = u.timeout
                  ? "timeout of " + u.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = u.transitional || Le;
              u.timeoutErrorMessage && (t = u.timeoutErrorMessage),
                r(
                  new ye(
                    t,
                    n.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED,
                    e,
                    v
                  )
                ),
                (v = null);
            }),
            void 0 === c && f.setContentType(null),
            "setRequestHeader" in v &&
              ve.forEach(f.toJSON(), function (e, t) {
                v.setRequestHeader(t, e);
              }),
            ve.isUndefined(u.withCredentials) ||
              (v.withCredentials = !!u.withCredentials),
            l && "json" !== l && (v.responseType = u.responseType),
            p)
          ) {
            var b = m(et(p, !0), 2);
            (i = b[0]), (s = b[1]), v.addEventListener("progress", i);
          }
          if (h && v.upload) {
            var g = m(et(h), 2);
            (o = g[0]),
              (a = g[1]),
              v.upload.addEventListener("progress", o),
              v.upload.addEventListener("loadend", a);
          }
          (u.cancelToken || u.signal) &&
            ((n = function (t) {
              v &&
                (r(!t || t.type ? new $e(null, e, v) : t),
                v.abort(),
                (v = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(n),
            u.signal &&
              (u.signal.aborted ? n() : u.signal.addEventListener("abort", n)));
          var w,
            E,
            O =
              ((w = u.url),
              ((E = /^([-+\w]{1,25})(:?\/\/|:)/.exec(w)) && E[1]) || "");
          O && -1 === Be.protocols.indexOf(O)
            ? r(
                new ye("Unsupported protocol " + O + ":", ye.ERR_BAD_REQUEST, e)
              )
            : v.send(c || null);
        });
      },
    ht = function (e, t) {
      var r,
        n = new AbortController(),
        o = function (e) {
          if (!r) {
            (r = !0), a();
            var t = e instanceof Error ? e : this.reason;
            n.abort(
              t instanceof ye ? t : new $e(t instanceof Error ? t.message : t)
            );
          }
        },
        i =
          t &&
          setTimeout(function () {
            o(new ye("timeout ".concat(t, " of ms exceeded"), ye.ETIMEDOUT));
          }, t),
        a = function () {
          e &&
            (i && clearTimeout(i),
            (i = null),
            e.forEach(function (e) {
              e &&
                (e.removeEventListener
                  ? e.removeEventListener("abort", o)
                  : e.unsubscribe(o));
            }),
            (e = null));
        };
      e.forEach(function (e) {
        return e && e.addEventListener && e.addEventListener("abort", o);
      });
      var s = n.signal;
      return (
        (s.unsubscribe = a),
        [
          s,
          function () {
            i && clearTimeout(i), (i = null);
          },
        ]
      );
    },
    pt = u().mark(function e(t, r) {
      var n, o, i;
      return u().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((n = t.byteLength), r && !(n < r))) {
                e.next = 5;
                break;
              }
              return (e.next = 4), t;
            case 4:
              return e.abrupt("return");
            case 5:
              o = 0;
            case 6:
              if (!(o < n)) {
                e.next = 13;
                break;
              }
              return (i = o + r), (e.next = 10), t.slice(o, i);
            case 10:
              (o = i), (e.next = 6);
              break;
            case 13:
            case "end":
              return e.stop();
          }
      }, e);
    }),
    dt = (function () {
      var t,
        o =
          ((t = u().mark(function e(t, o, a) {
            var s, c, f, l, h, p;
            return u().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (s = !1), (c = !1), (e.prev = 2), (l = n(t));
                    case 4:
                      return (e.next = 6), i(l.next());
                    case 6:
                      if (!(s = !(h = e.sent).done)) {
                        e.next = 27;
                        break;
                      }
                      if (
                        ((p = h.value),
                        (e.t0 = r),
                        (e.t1 = n),
                        (e.t2 = pt),
                        !ArrayBuffer.isView(p))
                      ) {
                        e.next = 15;
                        break;
                      }
                      (e.t3 = p), (e.next = 18);
                      break;
                    case 15:
                      return (e.next = 17), i(a(String(p)));
                    case 17:
                      e.t3 = e.sent;
                    case 18:
                      return (
                        (e.t4 = e.t3),
                        (e.t5 = o),
                        (e.t6 = (0, e.t2)(e.t4, e.t5)),
                        (e.t7 = (0, e.t1)(e.t6)),
                        (e.t8 = i),
                        e.delegateYield((0, e.t0)(e.t7, e.t8), "t9", 24)
                      );
                    case 24:
                      (s = !1), (e.next = 4);
                      break;
                    case 27:
                      e.next = 33;
                      break;
                    case 29:
                      (e.prev = 29),
                        (e.t10 = e.catch(2)),
                        (c = !0),
                        (f = e.t10);
                    case 33:
                      if (
                        ((e.prev = 33), (e.prev = 34), !s || null == l.return)
                      ) {
                        e.next = 38;
                        break;
                      }
                      return (e.next = 38), i(l.return());
                    case 38:
                      if (((e.prev = 38), !c)) {
                        e.next = 41;
                        break;
                      }
                      throw f;
                    case 41:
                      return e.finish(38);
                    case 42:
                      return e.finish(33);
                    case 43:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [2, 29, 33, 43],
                [34, , 38, 42],
              ]
            );
          })),
          function () {
            return new e(t.apply(this, arguments));
          });
      return function (e, t, r) {
        return o.apply(this, arguments);
      };
    })(),
    vt = function (e, t, r, n, o) {
      var i,
        a = dt(e, t, o),
        s = 0,
        c = function (e) {
          i || ((i = !0), n && n(e));
        };
      return new ReadableStream(
        {
          pull: function (e) {
            return h(
              u().mark(function t() {
                var n, o, i, f, l;
                return u().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), a.next();
                        case 3:
                          if (((n = t.sent), (o = n.done), (i = n.value), !o)) {
                            t.next = 10;
                            break;
                          }
                          return c(), e.close(), t.abrupt("return");
                        case 10:
                          (f = i.byteLength),
                            r && ((l = s += f), r(l)),
                            e.enqueue(new Uint8Array(i)),
                            (t.next = 19);
                          break;
                        case 15:
                          throw (
                            ((t.prev = 15), (t.t0 = t.catch(0)), c(t.t0), t.t0)
                          );
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 15]]
                );
              })
            )();
          },
          cancel: function (e) {
            return c(e), a.return();
          },
        },
        { highWaterMark: 2 }
      );
    },
    yt =
      "function" == typeof fetch &&
      "function" == typeof Request &&
      "function" == typeof Response,
    mt = yt && "function" == typeof ReadableStream,
    bt =
      yt &&
      ("function" == typeof TextEncoder
        ? ((ut = new TextEncoder()),
          function (e) {
            return ut.encode(e);
          })
        : (function () {
            var e = h(
              u().mark(function e(t) {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = Uint8Array),
                          (e.next = 3),
                          new Response(t).arrayBuffer()
                        );
                      case 3:
                        return (
                          (e.t1 = e.sent), e.abrupt("return", new e.t0(e.t1))
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
    gt = function (e) {
      try {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return !!e.apply(void 0, r);
      } catch (e) {
        return !1;
      }
    },
    wt =
      mt &&
      gt(function () {
        var e = !1,
          t = new Request(Be.origin, {
            body: new ReadableStream(),
            method: "POST",
            get duplex() {
              return (e = !0), "half";
            },
          }).headers.has("Content-Type");
        return e && !t;
      }),
    Et =
      mt &&
      gt(function () {
        return ve.isReadableStream(new Response("").body);
      }),
    Ot = {
      stream:
        Et &&
        function (e) {
          return e.body;
        },
    };
  yt &&
    ((ct = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(function (e) {
      !Ot[e] &&
        (Ot[e] = ve.isFunction(ct[e])
          ? function (t) {
              return t[e]();
            }
          : function (t, r) {
              throw new ye(
                "Response type '".concat(e, "' is not supported"),
                ye.ERR_NOT_SUPPORT,
                r
              );
            });
    }));
  var St = (function () {
      var e = h(
        u().mark(function e(t) {
          return u().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (null != t) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", 0);
                case 2:
                  if (!ve.isBlob(t)) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", t.size);
                case 4:
                  if (!ve.isSpecCompliantForm(t)) {
                    e.next = 8;
                    break;
                  }
                  return (e.next = 7), new Request(t).arrayBuffer();
                case 7:
                case 14:
                  return e.abrupt("return", e.sent.byteLength);
                case 8:
                  if (!ve.isArrayBufferView(t) && !ve.isArrayBuffer(t)) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", t.byteLength);
                case 10:
                  if ((ve.isURLSearchParams(t) && (t += ""), !ve.isString(t))) {
                    e.next = 15;
                    break;
                  }
                  return (e.next = 14), bt(t);
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    xt = (function () {
      var e = h(
        u().mark(function e(t, r) {
          var n;
          return u().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = ve.toFiniteNumber(t.getContentLength())),
                    e.abrupt("return", null == n ? St(r) : n)
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t, r) {
        return e.apply(this, arguments);
      };
    })(),
    Rt =
      yt &&
      (function () {
        var e = h(
          u().mark(function e(t) {
            var r,
              n,
              o,
              i,
              a,
              c,
              f,
              l,
              h,
              p,
              d,
              v,
              y,
              b,
              g,
              w,
              E,
              O,
              S,
              x,
              R,
              T,
              k,
              j,
              A,
              P,
              L,
              N,
              _,
              C,
              F,
              U,
              B,
              D,
              I,
              q,
              M;
            return u().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = ft(t)),
                        (n = r.url),
                        (o = r.method),
                        (i = r.data),
                        (a = r.signal),
                        (c = r.cancelToken),
                        (f = r.timeout),
                        (l = r.onDownloadProgress),
                        (h = r.onUploadProgress),
                        (p = r.responseType),
                        (d = r.headers),
                        (v = r.withCredentials),
                        (y = void 0 === v ? "same-origin" : v),
                        (b = r.fetchOptions),
                        (p = p ? (p + "").toLowerCase() : "text"),
                        (g = a || c || f ? ht([a, c], f) : []),
                        (w = m(g, 2)),
                        (E = w[0]),
                        (O = w[1]),
                        (R = function () {
                          !S &&
                            setTimeout(function () {
                              E && E.unsubscribe();
                            }),
                            (S = !0);
                        }),
                        (e.prev = 4),
                        (e.t0 = h && wt && "get" !== o && "head" !== o),
                        !e.t0)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), xt(d, i);
                    case 9:
                      (e.t1 = T = e.sent), (e.t0 = 0 !== e.t1);
                    case 11:
                      if (!e.t0) {
                        e.next = 15;
                        break;
                      }
                      (k = new Request(n, {
                        method: "POST",
                        body: i,
                        duplex: "half",
                      })),
                        ve.isFormData(i) &&
                          (j = k.headers.get("content-type")) &&
                          d.setContentType(j),
                        k.body &&
                          ((A = tt(T, et(rt(h)))),
                          (P = m(A, 2)),
                          (L = P[0]),
                          (N = P[1]),
                          (i = vt(k.body, 65536, L, N, bt)));
                    case 15:
                      return (
                        ve.isString(y) || (y = y ? "include" : "omit"),
                        (x = new Request(
                          n,
                          s(
                            s({}, b),
                            {},
                            {
                              signal: E,
                              method: o.toUpperCase(),
                              headers: d.normalize().toJSON(),
                              body: i,
                              duplex: "half",
                              credentials: y,
                            }
                          )
                        )),
                        (e.next = 19),
                        fetch(x)
                      );
                    case 19:
                      return (
                        (_ = e.sent),
                        (C = Et && ("stream" === p || "response" === p)),
                        Et &&
                          (l || C) &&
                          ((F = {}),
                          ["status", "statusText", "headers"].forEach(function (
                            e
                          ) {
                            F[e] = _[e];
                          }),
                          (U = ve.toFiniteNumber(
                            _.headers.get("content-length")
                          )),
                          (B = (l && tt(U, et(rt(l), !0))) || []),
                          (D = m(B, 2)),
                          (I = D[0]),
                          (q = D[1]),
                          (_ = new Response(
                            vt(
                              _.body,
                              65536,
                              I,
                              function () {
                                q && q(), C && R();
                              },
                              bt
                            ),
                            F
                          ))),
                        (p = p || "text"),
                        (e.next = 25),
                        Ot[ve.findKey(Ot, p) || "text"](_, t)
                      );
                    case 25:
                      return (
                        (M = e.sent),
                        !C && R(),
                        O && O(),
                        (e.next = 30),
                        new Promise(function (e, r) {
                          Ye(e, r, {
                            data: M,
                            headers: Ke.from(_.headers),
                            status: _.status,
                            statusText: _.statusText,
                            config: t,
                            request: x,
                          });
                        })
                      );
                    case 30:
                      return e.abrupt("return", e.sent);
                    case 33:
                      if (
                        ((e.prev = 33),
                        (e.t2 = e.catch(4)),
                        R(),
                        !e.t2 ||
                          "TypeError" !== e.t2.name ||
                          !/fetch/i.test(e.t2.message))
                      ) {
                        e.next = 38;
                        break;
                      }
                      throw Object.assign(
                        new ye("Network Error", ye.ERR_NETWORK, t, x),
                        { cause: e.t2.cause || e.t2 }
                      );
                    case 38:
                      throw ye.from(e.t2, e.t2 && e.t2.code, t, x);
                    case 39:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 33]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    Tt = { http: null, xhr: lt, fetch: Rt };
  ve.forEach(Tt, function (e, t) {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  var kt = function (e) {
      return "- ".concat(e);
    },
    jt = function (e) {
      return ve.isFunction(e) || null === e || !1 === e;
    },
    At = function (e) {
      for (
        var t, r, n = (e = ve.isArray(e) ? e : [e]).length, o = {}, i = 0;
        i < n;
        i++
      ) {
        var a = void 0;
        if (
          ((r = t = e[i]),
          !jt(t) && void 0 === (r = Tt[(a = String(t)).toLowerCase()]))
        )
          throw new ye("Unknown adapter '".concat(a, "'"));
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        var s = Object.entries(o).map(function (e) {
          var t = m(e, 2),
            r = t[0],
            n = t[1];
          return (
            "adapter ".concat(r, " ") +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        throw new ye(
          "There is no suitable adapter to dispatch the request " +
            (n
              ? s.length > 1
                ? "since :\n" + s.map(kt).join("\n")
                : " " + kt(s[0])
              : "as no adapter specified"),
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function Pt(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new $e(null, e);
  }
  function Lt(e) {
    return (
      Pt(e),
      (e.headers = Ke.from(e.headers)),
      (e.data = Ve.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      At(e.adapter || qe.adapter)(e).then(
        function (t) {
          return (
            Pt(e),
            (t.data = Ve.call(e, e.transformResponse, t)),
            (t.headers = Ke.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            Xe(t) ||
              (Pt(e),
              t &&
                t.response &&
                ((t.response.data = Ve.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = Ke.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  var Nt = "1.7.4",
    _t = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (e, t) {
      _t[e] = function (r) {
        return f(r) === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  var Ct = {};
  _t.transitional = function (e, t, r) {
    function n(e, t) {
      return (
        "[Axios v1.7.4] Transitional option '" +
        e +
        "'" +
        t +
        (r ? ". " + r : "")
      );
    }
    return function (r, o, i) {
      if (!1 === e)
        throw new ye(
          n(o, " has been removed" + (t ? " in " + t : "")),
          ye.ERR_DEPRECATED
        );
      return (
        t &&
          !Ct[o] &&
          ((Ct[o] = !0),
          console.warn(
            n(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(r, o, i)
      );
    };
  };
  var Ft = {
      assertOptions: function (e, t, r) {
        if ("object" !== f(e))
          throw new ye("options must be an object", ye.ERR_BAD_OPTION_VALUE);
        for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
          var i = n[o],
            a = t[i];
          if (a) {
            var s = e[i],
              u = void 0 === s || a(s, i, e);
            if (!0 !== u)
              throw new ye(
                "option " + i + " must be " + u,
                ye.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== r)
            throw new ye("Unknown option " + i, ye.ERR_BAD_OPTION);
        }
      },
      validators: _t,
    },
    Ut = Ft.validators,
    Bt = (function () {
      function e(t) {
        p(this, e),
          (this.defaults = t),
          (this.interceptors = { request: new Pe(), response: new Pe() });
      }
      var t;
      return (
        v(e, [
          {
            key: "request",
            value:
              ((t = h(
                u().mark(function e(t, r) {
                  var n, o;
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), this._request(t, r)
                            );
                          case 3:
                            return e.abrupt("return", e.sent);
                          case 6:
                            if (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              e.t0 instanceof Error)
                            ) {
                              Error.captureStackTrace
                                ? Error.captureStackTrace((n = {}))
                                : (n = new Error()),
                                (o = n.stack
                                  ? n.stack.replace(/^.+\n/, "")
                                  : "");
                              try {
                                e.t0.stack
                                  ? o &&
                                    !String(e.t0.stack).endsWith(
                                      o.replace(/^.+\n.+\n/, "")
                                    ) &&
                                    (e.t0.stack += "\n" + o)
                                  : (e.t0.stack = o);
                              } catch (e) {}
                            }
                            throw e.t0;
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 6]]
                  );
                })
              )),
              function (e, r) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "_request",
            value: function (e, t) {
              "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
              var r = (t = st(this.defaults, t)),
                n = r.transitional,
                o = r.paramsSerializer,
                i = r.headers;
              void 0 !== n &&
                Ft.assertOptions(
                  n,
                  {
                    silentJSONParsing: Ut.transitional(Ut.boolean),
                    forcedJSONParsing: Ut.transitional(Ut.boolean),
                    clarifyTimeoutError: Ut.transitional(Ut.boolean),
                  },
                  !1
                ),
                null != o &&
                  (ve.isFunction(o)
                    ? (t.paramsSerializer = { serialize: o })
                    : Ft.assertOptions(
                        o,
                        { encode: Ut.function, serialize: Ut.function },
                        !0
                      )),
                (t.method = (
                  t.method ||
                  this.defaults.method ||
                  "get"
                ).toLowerCase());
              var a = i && ve.merge(i.common, i[t.method]);
              i &&
                ve.forEach(
                  ["delete", "get", "head", "post", "put", "patch", "common"],
                  function (e) {
                    delete i[e];
                  }
                ),
                (t.headers = Ke.concat(a, i));
              var s = [],
                u = !0;
              this.interceptors.request.forEach(function (e) {
                ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                  ((u = u && e.synchronous),
                  s.unshift(e.fulfilled, e.rejected));
              });
              var c,
                f = [];
              this.interceptors.response.forEach(function (e) {
                f.push(e.fulfilled, e.rejected);
              });
              var l,
                h = 0;
              if (!u) {
                var p = [Lt.bind(this), void 0];
                for (
                  p.unshift.apply(p, s),
                    p.push.apply(p, f),
                    l = p.length,
                    c = Promise.resolve(t);
                  h < l;

                )
                  c = c.then(p[h++], p[h++]);
                return c;
              }
              l = s.length;
              var d = t;
              for (h = 0; h < l; ) {
                var v = s[h++],
                  y = s[h++];
                try {
                  d = v(d);
                } catch (e) {
                  y.call(this, e);
                  break;
                }
              }
              try {
                c = Lt.call(this, d);
              } catch (e) {
                return Promise.reject(e);
              }
              for (h = 0, l = f.length; h < l; ) c = c.then(f[h++], f[h++]);
              return c;
            },
          },
          {
            key: "getUri",
            value: function (e) {
              return je(
                it((e = st(this.defaults, e)).baseURL, e.url),
                e.params,
                e.paramsSerializer
              );
            },
          },
        ]),
        e
      );
    })();
  ve.forEach(["delete", "get", "head", "options"], function (e) {
    Bt.prototype[e] = function (t, r) {
      return this.request(
        st(r || {}, { method: e, url: t, data: (r || {}).data })
      );
    };
  }),
    ve.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (r, n, o) {
          return this.request(
            st(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: r,
              data: n,
            })
          );
        };
      }
      (Bt.prototype[e] = t()), (Bt.prototype[e + "Form"] = t(!0));
    });
  var Dt = Bt,
    It = (function () {
      function e(t) {
        if ((p(this, e), "function" != typeof t))
          throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function (e) {
          r = e;
        });
        var n = this;
        this.promise.then(function (e) {
          if (n._listeners) {
            for (var t = n._listeners.length; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              r = new Promise(function (e) {
                n.subscribe(e), (t = e);
              }).then(e);
            return (
              (r.cancel = function () {
                n.unsubscribe(t);
              }),
              r
            );
          }),
          t(function (e, t, o) {
            n.reason || ((n.reason = new $e(e, t, o)), r(n.reason));
          });
      }
      return (
        v(
          e,
          [
            {
              key: "throwIfRequested",
              value: function () {
                if (this.reason) throw this.reason;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.reason
                  ? e(this.reason)
                  : this._listeners
                  ? this._listeners.push(e)
                  : (this._listeners = [e]);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                if (this._listeners) {
                  var t = this._listeners.indexOf(e);
                  -1 !== t && this._listeners.splice(t, 1);
                }
              },
            },
          ],
          [
            {
              key: "source",
              value: function () {
                var t;
                return {
                  token: new e(function (e) {
                    t = e;
                  }),
                  cancel: t,
                };
              },
            },
          ]
        ),
        e
      );
    })(),
    qt = It;
  var Mt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Mt).forEach(function (e) {
    var t = m(e, 2),
      r = t[0],
      n = t[1];
    Mt[n] = r;
  });
  var zt = Mt;
  var Ht = (function e(t) {
    var r = new Dt(t),
      n = x(Dt.prototype.request, r);
    return (
      ve.extend(n, Dt.prototype, r, { allOwnKeys: !0 }),
      ve.extend(n, r, null, { allOwnKeys: !0 }),
      (n.create = function (r) {
        return e(st(t, r));
      }),
      n
    );
  })(qe);
  return (
    (Ht.Axios = Dt),
    (Ht.CanceledError = $e),
    (Ht.CancelToken = qt),
    (Ht.isCancel = Xe),
    (Ht.VERSION = Nt),
    (Ht.toFormData = Se),
    (Ht.AxiosError = ye),
    (Ht.Cancel = Ht.CanceledError),
    (Ht.all = function (e) {
      return Promise.all(e);
    }),
    (Ht.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Ht.isAxiosError = function (e) {
      return ve.isObject(e) && !0 === e.isAxiosError;
    }),
    (Ht.mergeConfig = st),
    (Ht.AxiosHeaders = Ke),
    (Ht.formToJSON = function (e) {
      return De(ve.isHTMLForm(e) ? new FormData(e) : e);
    }),
    (Ht.getAdapter = At),
    (Ht.HttpStatusCode = zt),
    (Ht.default = Ht),
    Ht
  );
});
//# sourceMappingURL=axios.min.js.map
