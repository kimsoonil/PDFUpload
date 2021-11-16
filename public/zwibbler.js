/**
   Zwibbler

   Copyright 2019 Hanov Solutions Inc. All Rights Reserved. This software is
   NOT open source. For licensing information, contact the author.

   steve.hanov@gmail.com

   @license
 */
(function(globalModule) {
  var __extends =
    (this && this.__extends) ||
    (function() {
      var extendStatics = function(d, b) {
        extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(d, b) {
              d.__proto__ = b;
            }) ||
          function(d, b) {
            for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __());
      };
    })();
  var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P
          ? value
          : new P(function(resolve) {
              resolve(value);
            });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done
            ? resolve(result.value)
            : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
  var __generator =
    (this && this.__generator) ||
    function(thisArg, body) {
      var _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: [],
        },
        f,
        y,
        t,
        g;
      return (
        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
        typeof Symbol === "function" &&
          (g[Symbol.iterator] = function() {
            return this;
          }),
        g
      );
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (
              ((f = 1),
              y &&
                (t =
                  op[0] & 2
                    ? y["return"]
                    : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
                !(t = t.call(y, op[1])).done)
            )
              return t;
            if (((y = 0), t)) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (
                  !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                  (op[0] === 6 || op[0] === 2)
                ) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
  var __values =
    (this && this.__values) ||
    function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          },
        };
      throw new TypeError(
        s ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    };
  var aa =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function(c, a, b) {
            c != Array.prototype && c != Object.prototype && (c[a] = b.value);
          },
    ba =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this;
  function da() {
    da = function() {};
    ba.Symbol || (ba.Symbol = ea);
  }
  var ea = (function() {
    var c = 0;
    return function(a) {
      return "jscomp_symbol_" + (a || "") + c++;
    };
  })();
  function fa() {
    da();
    var c = ba.Symbol.iterator;
    c || (c = ba.Symbol.iterator = ba.Symbol("iterator"));
    "function" != typeof Array.prototype[c] &&
      aa(Array.prototype, c, {
        configurable: !0,
        writable: !0,
        value: function() {
          return ha(this);
        },
      });
    fa = function() {};
  }
  function ha(c) {
    var a = 0;
    return ia(function() {
      return a < c.length ? { done: !1, value: c[a++] } : { done: !0 };
    });
  }
  function ia(c) {
    fa();
    c = { next: c };
    c[ba.Symbol.iterator] = function() {
      return this;
    };
    return c;
  }
  function ja(c, a) {
    fa();
    c instanceof String && (c += "");
    var b = 0,
      d = {
        next: function() {
          if (b < c.length) {
            var e = b++;
            return { value: a(e, c[e]), done: !1 };
          }
          d.next = function() {
            return { done: !0, value: void 0 };
          };
          return d.next();
        },
      };
    d[Symbol.iterator] = function() {
      return d;
    };
    return d;
  }
  function ka(c, a) {
    if (a) {
      var b = ba;
      c = c.split(".");
      for (var d = 0; d < c.length - 1; d++) {
        var e = c[d];
        e in b || (b[e] = {});
        b = b[e];
      }
      c = c[c.length - 1];
      d = b[c];
      a = a(d);
      a != d &&
        null != a &&
        aa(b, c, { configurable: !0, writable: !0, value: a });
    }
  }
  ka("Array.prototype.values", function(c) {
    return c
      ? c
      : function() {
          return ja(this, function(a, b) {
            return b;
          });
        };
  });
  function ma(c) {
    fa();
    var a = c[Symbol.iterator];
    return a ? a.call(c) : ha(c);
  }
  ka("Promise", function(c) {
    function a(a) {
      this.uk = 0;
      this.yq = void 0;
      this.ii = [];
      var b = this.vo();
      try {
        a(b.resolve, b.reject);
      } catch (l) {
        b.reject(l);
      }
    }
    function b() {
      this.Nf = null;
    }
    function d(b) {
      return b instanceof a
        ? b
        : new a(function(a) {
            a(b);
          });
    }
    if (c) return c;
    b.prototype.Bs = function(a) {
      null == this.Nf && ((this.Nf = []), this.wx());
      this.Nf.push(a);
    };
    b.prototype.wx = function() {
      var a = this;
      this.Cs(function() {
        a.Wy();
      });
    };
    var e = ba.setTimeout;
    b.prototype.Cs = function(a) {
      e(a, 0);
    };
    b.prototype.Wy = function() {
      for (; this.Nf && this.Nf.length; ) {
        var a = this.Nf;
        this.Nf = [];
        for (var b = 0; b < a.length; ++b) {
          var d = a[b];
          a[b] = null;
          try {
            d();
          } catch (n) {
            this.xx(n);
          }
        }
      }
      this.Nf = null;
    };
    b.prototype.xx = function(a) {
      this.Cs(function() {
        throw a;
      });
    };
    a.prototype.vo = function() {
      function a(a) {
        return function(e) {
          d || ((d = !0), a.call(b, e));
        };
      }
      var b = this,
        d = !1;
      return { resolve: a(this.kC), reject: a(this.qq) };
    };
    a.prototype.kC = function(b) {
      if (b === this)
        this.qq(new TypeError("A Promise cannot resolve to itself"));
      else if (b instanceof a) this.$C(b);
      else {
        a: switch (typeof b) {
          case "object":
            var d = null != b;
            break a;
          case "function":
            d = !0;
            break a;
          default:
            d = !1;
        }
        d ? this.jC(b) : this.yt(b);
      }
    };
    a.prototype.jC = function(a) {
      var b = void 0;
      try {
        b = a.then;
      } catch (l) {
        this.qq(l);
        return;
      }
      "function" == typeof b ? this.aD(b, a) : this.yt(a);
    };
    a.prototype.qq = function(a) {
      this.Vv(2, a);
    };
    a.prototype.yt = function(a) {
      this.Vv(1, a);
    };
    a.prototype.Vv = function(a, b) {
      if (0 != this.uk)
        throw Error(
          "Cannot settle(" +
            a +
            ", " +
            b +
            "): Promise already settled in state" +
            this.uk
        );
      this.uk = a;
      this.yq = b;
      this.Xy();
    };
    a.prototype.Xy = function() {
      if (null != this.ii) {
        for (var a = 0; a < this.ii.length; ++a) f.Bs(this.ii[a]);
        this.ii = null;
      }
    };
    var f = new b();
    a.prototype.$C = function(a) {
      var b = this.vo();
      a.hl(b.resolve, b.reject);
    };
    a.prototype.aD = function(a, b) {
      var d = this.vo();
      try {
        a.call(b, d.resolve, d.reject);
      } catch (n) {
        d.reject(n);
      }
    };
    a.prototype.then = function(b, d) {
      function e(a, b) {
        return "function" == typeof a
          ? function(b) {
              try {
                c(a(b));
              } catch (B) {
                f(B);
              }
            }
          : b;
      }
      var c,
        f,
        h = new a(function(a, b) {
          c = a;
          f = b;
        });
      this.hl(e(b, c), e(d, f));
      return h;
    };
    a.prototype.catch = function(a) {
      return this.then(void 0, a);
    };
    a.prototype.hl = function(a, b) {
      function d() {
        switch (e.uk) {
          case 1:
            a(e.yq);
            break;
          case 2:
            b(e.yq);
            break;
          default:
            throw Error("Unexpected state: " + e.uk);
        }
      }
      var e = this;
      null == this.ii ? f.Bs(d) : this.ii.push(d);
    };
    a.resolve = d;
    a.reject = function(b) {
      return new a(function(a, d) {
        d(b);
      });
    };
    a.race = function(b) {
      return new a(function(a, e) {
        for (var c = ma(b), f = c.next(); !f.done; f = c.next())
          d(f.value).hl(a, e);
      });
    };
    a.all = function(b) {
      var e = ma(b),
        c = e.next();
      return c.done
        ? d([])
        : new a(function(a, b) {
            function f(b) {
              return function(d) {
                h[b] = d;
                k--;
                0 == k && a(h);
              };
            }
            var h = [],
              k = 0;
            do
              h.push(void 0),
                k++,
                d(c.value).hl(f(h.length - 1), b),
                (c = e.next());
            while (!c.done);
          });
    };
    return a;
  });
  ka("Array.prototype.keys", function(c) {
    return c
      ? c
      : function() {
          return ja(this, function(a) {
            return a;
          });
        };
  });
  ka("String.prototype.startsWith", function(c) {
    return c
      ? c
      : function(a, b) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.startsWith must not be null or undefined"
            );
          if (a instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.startsWith must not be a regular expression"
            );
          var d = this + "";
          a += "";
          var e = d.length,
            c = a.length;
          b = Math.max(0, Math.min(b | 0, d.length));
          for (var h = 0; h < c && b < e; ) if (d[b++] != a[h++]) return !1;
          return h >= c;
        };
  });
  ka("Array.prototype.fill", function(c) {
    return c
      ? c
      : function(a, b, d) {
          var e = this.length || 0;
          0 > b && (b = Math.max(0, e + b));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (b = Number(b || 0); b < d; b++) this[b] = a;
          return this;
        };
  });
  ka("Math.sign", function(c) {
    return c
      ? c
      : function(a) {
          a = Number(a);
          return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1;
        };
  });
  ka("Array.prototype.entries", function(c) {
    return c
      ? c
      : function() {
          return ja(this, function(a, b) {
            return [a, b];
          });
        };
  });
  ka("Array.from", function(c) {
    return c
      ? c
      : function(a, b, d) {
          fa();
          b =
            null != b
              ? b
              : function(a) {
                  return a;
                };
          var e = [],
            c = a[Symbol.iterator];
          if ("function" == typeof c) {
            a = c.call(a);
            for (var h = 0; !(c = a.next()).done; )
              e.push(b.call(d, c.value, h++));
          } else
            for (c = a.length, h = 0; h < c; h++) e.push(b.call(d, a[h], h));
          return e;
        };
  });
  function oa(c, a) {
    return Object.prototype.hasOwnProperty.call(c, a);
  }
  ka("WeakMap", function(c) {
    function a(a) {
      this.Dj = (f += Math.random() + 1).toString();
      if (a) {
        da();
        fa();
        a = ma(a);
        for (var b; !(b = a.next()).done; ) (b = b.value), this.set(b[0], b[1]);
      }
    }
    function b(a) {
      oa(a, e) || aa(a, e, { value: {} });
    }
    function d(a) {
      var d = Object[a];
      d &&
        (Object[a] = function(a) {
          b(a);
          return d(a);
        });
    }
    if (
      (function() {
        if (!c || !Object.seal) return !1;
        try {
          var a = Object.seal({}),
            b = Object.seal({}),
            d = new c([[a, 2], [b, 3]]);
          if (2 != d.get(a) || 3 != d.get(b)) return !1;
          d.delete(a);
          d.set(b, 4);
          return !d.has(a) && 4 == d.get(b);
        } catch (n) {
          return !1;
        }
      })()
    )
      return c;
    var e = "$jscomp_hidden_" + Math.random();
    d("freeze");
    d("preventExtensions");
    d("seal");
    var f = 0;
    a.prototype.set = function(a, d) {
      b(a);
      if (!oa(a, e)) throw Error("WeakMap key fail: " + a);
      a[e][this.Dj] = d;
      return this;
    };
    a.prototype.get = function(a) {
      return oa(a, e) ? a[e][this.Dj] : void 0;
    };
    a.prototype.has = function(a) {
      return oa(a, e) && oa(a[e], this.Dj);
    };
    a.prototype.delete = function(a) {
      return oa(a, e) && oa(a[e], this.Dj) ? delete a[e][this.Dj] : !1;
    };
    return a;
  });
  ka("Map", function(c) {
    function a() {
      var a = {};
      return (a.qa = a.next = a.head = a);
    }
    function b(a, b) {
      var d = a.nf;
      return ia(function() {
        if (d) {
          for (; d.head != a.nf; ) d = d.qa;
          for (; d.next != d.head; )
            return (d = d.next), { done: !1, value: b(d) };
          d = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(a, b) {
      var d = b && typeof b;
      "object" == d || "function" == d
        ? f.has(b)
          ? (d = f.get(b))
          : ((d = "" + ++h), f.set(b, d))
        : (d = "p_" + b);
      var e = a.aj[d];
      if (e && oa(a.aj, d))
        for (a = 0; a < e.length; a++) {
          var c = e[a];
          if ((b !== b && c.key !== c.key) || b === c.key)
            return { id: d, list: e, index: a, Oc: c };
        }
      return { id: d, list: e, index: -1, Oc: void 0 };
    }
    function e(b) {
      this.aj = {};
      this.nf = a();
      this.size = 0;
      if (b) {
        b = ma(b);
        for (var d; !(d = b.next()).done; ) (d = d.value), this.set(d[0], d[1]);
      }
    }
    if (
      (function() {
        if (
          !c ||
          "function" != typeof c ||
          !c.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var a = Object.seal({ x: 4 }),
            b = new c(ma([[a, "s"]]));
          if (
            "s" != b.get(a) ||
            1 != b.size ||
            b.get({ x: 4 }) ||
            b.set({ x: 4 }, "t") != b ||
            2 != b.size
          )
            return !1;
          var d = b.entries(),
            e = d.next();
          if (e.done || e.value[0] != a || "s" != e.value[1]) return !1;
          e = d.next();
          return e.done ||
            4 != e.value[0].x ||
            "t" != e.value[1] ||
            !d.next().done
            ? !1
            : !0;
        } catch (v) {
          return !1;
        }
      })()
    )
      return c;
    da();
    fa();
    var f = new WeakMap();
    e.prototype.set = function(a, b) {
      a = 0 === a ? 0 : a;
      var e = d(this, a);
      e.list || (e.list = this.aj[e.id] = []);
      e.Oc
        ? (e.Oc.value = b)
        : ((e.Oc = {
            next: this.nf,
            qa: this.nf.qa,
            head: this.nf,
            key: a,
            value: b,
          }),
          e.list.push(e.Oc),
          (this.nf.qa.next = e.Oc),
          (this.nf.qa = e.Oc),
          this.size++);
      return this;
    };
    e.prototype.delete = function(a) {
      a = d(this, a);
      return a.Oc && a.list
        ? (a.list.splice(a.index, 1),
          a.list.length || delete this.aj[a.id],
          (a.Oc.qa.next = a.Oc.next),
          (a.Oc.next.qa = a.Oc.qa),
          (a.Oc.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function() {
      this.aj = {};
      this.nf = this.nf.qa = a();
      this.size = 0;
    };
    e.prototype.has = function(a) {
      return !!d(this, a).Oc;
    };
    e.prototype.get = function(a) {
      return (a = d(this, a).Oc) && a.value;
    };
    e.prototype.entries = function() {
      return b(this, function(a) {
        return [a.key, a.value];
      });
    };
    e.prototype.keys = function() {
      return b(this, function(a) {
        return a.key;
      });
    };
    e.prototype.values = function() {
      return b(this, function(a) {
        return a.value;
      });
    };
    e.prototype.forEach = function(a, b) {
      for (var d = this.entries(), e; !(e = d.next()).done; )
        (e = e.value), a.call(b, e[1], e[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e;
  });
  ka("Set", function(c) {
    function a(a) {
      this.Ge = new Map();
      if (a) {
        a = ma(a);
        for (var b; !(b = a.next()).done; ) this.add(b.value);
      }
      this.size = this.Ge.size;
    }
    if (
      (function() {
        if (
          !c ||
          "function" != typeof c ||
          !c.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var a = Object.seal({ x: 4 }),
            d = new c(ma([a]));
          if (
            !d.has(a) ||
            1 != d.size ||
            d.add(a) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != a || f.value[1] != a) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == a ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (h) {
          return !1;
        }
      })()
    )
      return c;
    da();
    fa();
    a.prototype.add = function(a) {
      a = 0 === a ? 0 : a;
      this.Ge.set(a, a);
      this.size = this.Ge.size;
      return this;
    };
    a.prototype.delete = function(a) {
      a = this.Ge.delete(a);
      this.size = this.Ge.size;
      return a;
    };
    a.prototype.clear = function() {
      this.Ge.clear();
      this.size = 0;
    };
    a.prototype.has = function(a) {
      return this.Ge.has(a);
    };
    a.prototype.entries = function() {
      return this.Ge.entries();
    };
    a.prototype.values = function() {
      return this.Ge.values();
    };
    a.prototype.keys = a.prototype.values;
    a.prototype[Symbol.iterator] = a.prototype.values;
    a.prototype.forEach = function(a, d) {
      var b = this;
      this.Ge.forEach(function(e) {
        return a.call(d, e, e, b);
      });
    };
    return a;
  });
  var q = (function() {
      function c(a, b) {
        this.type = a;
        this.values = b;
      }
      c.Il = function(a) {
        a.toLowerCase() in c.Gr && (a = c.Gr[a.toLowerCase()]);
        var b = /#([0-9a-f])([0-9a-f])([0-9a-f])/i,
          d = /rgb\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *\)/,
          e = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/,
          f = /hsl\( *([0-9]+) *, *([0-9]+)% *, *([0-9]+)% *\)/;
        var h = /#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])?/i.exec(
          a
        );
        if (null !== h)
          (a = parseInt(h[1], 16) / 255),
            (b = parseInt(h[2], 16) / 255),
            (d = parseInt(h[3], 16) / 255),
            (h = h[4] ? parseInt(h[4], 16) / 255 : 1);
        else if (((h = e.exec(a)), null !== h))
          (a = parseFloat(h[1]) / 255),
            (b = parseFloat(h[2]) / 255),
            (d = parseFloat(h[3]) / 255),
            (h = parseFloat(h[4]));
        else if (((h = d.exec(a)), null !== h))
          (a = parseFloat(h[1]) / 255),
            (b = parseFloat(h[2]) / 255),
            (d = parseFloat(h[3]) / 255),
            (h = 1);
        else if (((h = b.exec(a)), null !== h))
          (a = parseInt(h[1], 16)),
            (a = (16 * a + a) / 255),
            (b = parseInt(h[2], 16)),
            (b = (16 * b + b) / 255),
            (d = parseInt(h[2], 16)),
            (d = (16 * d + d) / 255),
            (h = 1);
        else if (((h = f.exec(a)), null !== h))
          (a = parseFloat(h[1]) / 360),
            (b = parseFloat(h[2]) / 100),
            (h = parseFloat(h[3]) / 100),
            0 == b
              ? (b = h = d = h)
              : ((d = 0.5 > h ? h * (1 + b) : h + b - h * b),
                (e = 2 * h - d),
                (b = pa(e, d, a + 1 / 3)),
                (h = pa(e, d, a)),
                (d = pa(e, d, a - 1 / 3))),
            (a = b),
            (b = h),
            (h = 1);
        else return null;
        return new c(c.RGBA, [a, b, d, h]);
      };
      c.ff = function(a) {
        return c.Il(a) || new c(c.RGBA, [1, 0, 1, 1]);
      };
      c.KE = function(a) {
        var b = /#[0-9a-f]+|rgba?\([^\)]+\)|[a-z]+/gi,
          d = [],
          e;
        do (e = b.exec(a)) && d.push(e[0]);
        while (e);
        return d;
      };
      c.prototype.toString = function() {
        function a(a) {
          a = qa(a);
          return 16 > a ? "0" + a.toString(16) : a.toString(16);
        }
        var b = this.Jh(c.RGBA);
        return 1 === b.values[3]
          ? "#" + a(b.values[0]) + a(b.values[1]) + a(b.values[2])
          : "rgba(" +
              qa(b.values[0]) +
              "," +
              qa(b.values[1]) +
              "," +
              qa(b.values[2]) +
              "," +
              b.values[3] +
              ")";
      };
      c.prototype.Jh = function(a) {
        return c.iy[this.type][a](this);
      };
      c.prototype.bc = function(a) {
        a.type !== this.type && (a = a.Jh(this.type));
        if (this.type === c.vh) {
          var b = this.values[0],
            d = a.values[0];
          b =
            b > d ? Math.min(b - d, d - b + 360) : Math.min(d - b, b - d + 360);
          b /= 360;
          return Math.pow(
            b * b +
              (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) +
              (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]),
            0.5
          );
        }
        return Math.pow(
          (this.values[0] - a.values[0]) * (this.values[0] - a.values[0]) +
            (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) +
            (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]),
          0.5
        );
      };
      c.prototype.By = function(a) {
        var b = a;
        var d = this.Jh(q.Ln);
        b = b.Jh(q.Ln);
        a = d.values[0];
        var e = d.values[1],
          c = d.values[2],
          h = b.values[0],
          k = b.values[1],
          l = b.values[2];
        b = ra(sa(e, 2) + sa(c, 2));
        d = ra(sa(k, 2) + sa(l, 2));
        var n = (b + d) / 2;
        n = 0.5 * (1 - ra(sa(n, 7) / (sa(n, 7) + sa(25, 7))));
        e *= 1 + n;
        var r = (1 + n) * k;
        k = ra(sa(e, 2) + sa(c, 2));
        n = ra(sa(r, 2) + sa(l, 2));
        var v = ta(c, e);
        r = ta(l, r);
        c = h - a;
        l = n - k;
        if (0 === b * d) e = 0;
        else if (180 >= ua(r - v)) e = r - v;
        else if (180 < r - v) e = r - v - 360;
        else if (-180 > r - v) e = r - v + 360;
        else throw Error();
        e = 2 * ra(k * n) * va(((wa / 180) * e) / 2);
        a = (a + h) / 2;
        h = (k + n) / 2;
        if (0 === b * d) d = v + r;
        else if (180 >= ua(v - r)) d = (v + r) / 2;
        else if (180 < ua(v - r) && 360 > v + r) d = (v + r + 360) / 2;
        else if (180 < ua(v - r) && 360 <= v + r) d = (v + r - 360) / 2;
        else throw Error();
        b =
          1 -
          0.17 * xa((wa / 180) * (d - 30)) +
          0.24 * xa((wa / 180) * d * 2) +
          0.32 * xa((wa / 180) * (3 * d + 6)) -
          0.2 * xa((wa / 180) * (4 * d - 63));
        d = 30 * ya(-sa((d - 275) / 25, 2));
        k = ra(sa(h, 7) / (sa(h, 7) + sa(25, 7)));
        a = 1 + (0.015 * sa(a - 50, 2)) / ra(20 + sa(a - 50, 2));
        n = 1 + 0.045 * h;
        b = 1 + 0.015 * h * b;
        d = -2 * k * va((wa / 180) * d * 2);
        return ra(
          sa(c / (1 * a), 2) +
            sa(l / (1 * n), 2) +
            sa(e / (1 * b), 2) +
            (l / (1 * n)) * d * (e / (1 * b))
        );
      };
      c.RGBA = 0;
      c.Qr = 1;
      c.vh = 2;
      c.Ln = 3;
      c.mE = 3;
      c.Ue = "transparent";
      c.Xc = "#ffffff";
      c.Oa = "#000000";
      c.iy = [
        [za, Aa, Ba, Ca],
        [Da, za, Fa, Ga],
        [Ha, Ia, za, Ja],
        [Ka, La, Ma, za],
      ];
      c.Gr = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        transparent: "rgba(0,0,0,0.0)",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      };
      return c;
    })(),
    Na = 0.9505,
    Oa = 1,
    Pa = 1.089;
  function Ha(c) {
    var a = c.values[0],
      b = c.values[1],
      d = c.values[2];
    0 > a && (a += 360);
    var e = a / 60 - Math.floor(a / 60),
      f = d * (1 - b),
      h = d * (1 - e * b);
    b = d * (1 - (1 - e) * b);
    var k = (e = 0),
      l = 0;
    switch (Math.floor(a / 60) % 6) {
      case 0:
        e = d;
        k = b;
        l = f;
        break;
      case 1:
        e = h;
        k = d;
        l = f;
        break;
      case 2:
        e = f;
        k = d;
        l = b;
        break;
      case 3:
        e = f;
        k = h;
        l = d;
        break;
      case 4:
        e = b;
        k = f;
        l = d;
        break;
      case 5:
        (e = d), (k = f), (l = h);
    }
    return new q(q.RGBA, [e, k, l, c.values[3]]);
  }
  function Ba(c) {
    var a = c.values[0],
      b = c.values[1],
      d = c.values[2],
      e = Math.max(a, b, d),
      f = Math.min(a, b, d);
    return new q(q.vh, [
      e === f
        ? 0
        : e === a
        ? ((60 * (b - d)) / (e - f) + 360) % 360
        : e === b
        ? (60 * (d - a)) / (e - f) + 120
        : (60 * (a - b)) / (e - f) + 240,
      0 === e ? 0 : 1 - f / e,
      e,
      c.values[3],
    ]);
  }
  function Ga(c) {
    function a(a) {
      return a > (6 / 29) * (6 / 29) * (6 / 29)
        ? Math.pow(a, 1 / 3)
        : (1 / 3) * (29 / 6) * (29 / 6) * a + 4 / 29;
    }
    var b = a(c.values[1] / Oa);
    return new q(q.Ln, [
      116 * b - 16,
      500 * (a(c.values[0] / Na) - b),
      200 * (b - a(c.values[2] / Pa)),
      c.values[3],
    ]);
  }
  function La(c) {
    var a = (c.values[0] + 16) / 116,
      b = a + c.values[1] / 500,
      d = a - c.values[2] / 200,
      e = 6 / 29;
    return new q(q.Qr, [
      b > e ? Na * b * b * b : 3 * (b - 16 / 116) * e * e * Na,
      a > e ? Oa * a * a * a : 3 * (a - 16 / 116) * e * e * Oa,
      d > e ? Pa * d * d * d : 3 * (d - 16 / 116) * e * e * Pa,
      c.values[3],
    ]);
  }
  function Aa(c) {
    for (var a = [], b = 0; 3 > b; b++)
      a[b] =
        0.04045 >= c.values[b]
          ? c.values[b] / 12.92
          : Math.pow((c.values[b] + 0.055) / 1.055, 2.4);
    return new q(q.Qr, [
      0.4124 * a[0] + 0.3576 * a[1] + 0.1805 * a[2],
      0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2],
      0.0193 * a[0] + 0.1192 * a[1] + 0.9505 * a[2],
      c.values[3],
    ]);
  }
  function Da(c) {
    var a = [],
      b = [0, 0, 0, 0];
    a[0] = 3.241 * c.values[0] - 1.5374 * c.values[1] - 0.4986 * c.values[2];
    a[1] = -0.9692 * c.values[0] + 1.876 * c.values[1] + 0.0416 * c.values[2];
    a[2] = 0.0556 * c.values[0] - 0.204 * c.values[1] + 1.057 * c.values[2];
    for (var d = 0; 3 > d; d++)
      b[d] =
        0.0031308 >= a[d]
          ? 12.92 * a[d]
          : 1.055 * Math.pow(a[d], 1 / 2.4) - 0.055;
    b[3] = c.values[3];
    return new q(q.RGBA, b);
  }
  function za(c) {
    return new q(c.type, c.values.concat());
  }
  function Ca(c) {
    return Ga(Aa(c));
  }
  function Ka(c) {
    return Da(La(c));
  }
  function Fa(c) {
    return Ba(Da(c));
  }
  function Ia(c) {
    return Aa(Ha(c));
  }
  function Ja(c) {
    return Ca(Ha(c));
  }
  function Ma(c) {
    return Fa(La(c));
  }
  var ra = Math.sqrt,
    sa = Math.pow,
    xa = Math.cos,
    Qa = Math.atan2,
    va = Math.sin,
    ua = Math.abs,
    ya = Math.exp,
    wa = Math.PI;
  function ta(c, a) {
    if (0 === c && 0 === a) return 0;
    c = Qa(c, a) * (180 / wa);
    return 0 <= c ? c : c + 360;
  }
  function qa(c) {
    return Math.min(Math.floor(256 * c), 255);
  }
  function pa(c, a, b) {
    0 > b && (b += 1);
    1 < b && --b;
    return b < 1 / 6
      ? c + 6 * (a - c) * b
      : 0.5 > b
      ? a
      : b < 2 / 3
      ? c + (a - c) * (2 / 3 - b) * 6
      : c;
  }
  function Ra(c, a) {
    void 0 === a &&
      (a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    for (var b = "", d, e, f, h, k, l, n = 0; n < c.length; )
      (d = c[n++]),
        (e = c[n++]),
        (f = c[n++]),
        (h = d >> 2),
        (d = ((d & 3) << 4) | (e >> 4)),
        (k = ((e & 15) << 2) | (f >> 6)),
        (l = f & 63),
        isNaN(e) ? (k = l = 64) : isNaN(f) && (l = 64),
        (b = b + a.charAt(h) + a.charAt(d) + a.charAt(k) + a.charAt(l));
    return b;
  }
  function Sa(c) {
    for (var a = c.length, b = 0, d, e, f = 0; f !== a; ) {
      d = c.charCodeAt(f);
      f += 1;
      if (55296 <= d && 56319 >= d)
        if (
          (f === a && (b += 3), (e = c.charCodeAt(f)), 56320 <= e && 57343 >= e)
        ) {
          if (
            ((d = 1024 * (d - 55296) + e - 56320 + 65536), (f += 1), 65535 < d)
          ) {
            b += 4;
            continue;
          }
        } else b += 3;
      b = 127 >= d ? b + 1 : 2047 >= d ? b + 2 : b + 3;
    }
    b = new Uint8Array(b);
    var h = -1;
    for (f = 0; f !== a; ) {
      d = c.charCodeAt(f);
      f += 1;
      if (55296 <= d && 56319 >= d) {
        if (f === a) {
          b[(h += 1)] = 239;
          b[(h += 1)] = 191;
          b[(h += 1)] = 189;
          break;
        }
        e = c.charCodeAt(f);
        if (56320 <= e && 57343 >= e) {
          if (
            ((d = 1024 * (d - 55296) + e - 56320 + 65536), (f += 1), 65535 < d)
          ) {
            b[(h += 1)] = 240 | (d >>> 18);
            b[(h += 1)] = 128 | ((d >>> 12) & 63);
            b[(h += 1)] = 128 | ((d >>> 6) & 63);
            b[(h += 1)] = 128 | (d & 63);
            continue;
          }
        } else {
          b[(h += 1)] = 239;
          b[(h += 1)] = 191;
          b[(h += 1)] = 189;
          continue;
        }
      }
      127 >= d
        ? (b[(h += 1)] = 0 | d)
        : (2047 >= d
            ? (b[(h += 1)] = 192 | (d >>> 6))
            : ((b[(h += 1)] = 224 | (d >>> 12)),
              (b[(h += 1)] = 128 | ((d >>> 6) & 63))),
          (b[(h += 1)] = 128 | (d & 63)));
    }
    return b;
  }
  function Ta(c) {
    return parseFloat(c || "") || 0;
  }
  var Va = (function() {
    function c(a) {
      this.da = a;
    }
    c.prototype.Ya = function(a) {
      for (var b in a) {
        if (0 <= b.indexOf("-"))
          throw Error("setStyle: styles must be camelcase; not " + b);
        this.da.style[b] = "" + a[b];
      }
      return this;
    };
    c.prototype.jk = function(a) {
      for (var b in a) this.da.setAttribute(b, a[b]);
      return this;
    };
    c.prototype.Pd = function(a) {
      a.appendChild(this.da);
      return this;
    };
    c.prototype.Ap = function(a) {
      a.parentNode && a.parentNode.insertBefore(this.da, a.nextSibling);
    };
    c.prototype.insertBefore = function(a) {
      a.parentNode && a.parentNode.insertBefore(this.da, a);
      return this;
    };
    c.prototype.remove = function() {
      this.da.parentNode && this.da.parentNode.removeChild(this.da);
      return this;
    };
    c.prototype.Ce = function(a) {
      return window.getComputedStyle(this.da)[a] || "";
    };
    c.prototype.oc = function() {
      var a = this.da.getBoundingClientRect();
      return {
        top: a.top + window.pageYOffset,
        left: a.left + window.pageXOffset,
        width: a.width,
        height: a.height,
      };
    };
    c.prototype.lk = function(a) {
      var b = (b = this.iA()) ? b.oc() : { left: 0, top: 0 };
      this.da.style.left = a.left - b.left + "px";
      this.da.style.top = a.top - b.top + "px";
    };
    c.prototype.iA = function() {
      if (!(this.da instanceof HTMLElement) || "fixed" === this.Ce("position"))
        return Ua(document.body);
      for (
        var a = this.da.parentElement;
        a && "static" === Ua(a).Ce("position");

      )
        a = a.parentElement;
      return a ? Ua(a) : null;
    };
    c.prototype.Rl = function() {
      var a = window.getComputedStyle(this.da),
        b = {
          left: Ta(a.marginLeft),
          top: Ta(a.marginTop),
          right: Ta(a.marginRight),
          bottom: Ta(a.marginBottom),
          Lp: 0,
          Aq: 0,
          mr: 0,
          io: 0,
        };
      "content-box" === a.boxSizing &&
        ((b.Lp += Ta(a.borderLeftWidth) + Ta(a.paddingLeft)),
        (b.mr += Ta(a.borderTopWidth) + Ta(a.paddingTop)),
        (b.Aq += Ta(a.borderRightWidth) + Ta(a.paddingRight)),
        (b.io += Ta(a.borderBottomWidth) + Ta(a.paddingBottom)));
      return b;
    };
    c.prototype.be = function(a) {
      this.da.classList.add(a);
      return this;
    };
    c.prototype.ir = function(a, b) {
      b ? this.da.classList.add(a) : this.da.classList.remove(a);
    };
    c.prototype.addEventListener = function(a, b, d) {
      void 0 === d && (d = !1);
      var e = 0;
      for (a = a.split(" "); e < a.length; e++)
        this.da.addEventListener(a[e], b, d);
      return this;
    };
    c.prototype.removeEventListener = function(a, b, d) {
      void 0 === d && (d = !1);
      var e = 0;
      for (a = a.split(" "); e < a.length; e++)
        this.da.removeEventListener(a[e], b, d);
      return this;
    };
    c.prototype.matches = function(a) {
      var b = this.da;
      if (this.da.matches) return this.da.matches(a);
      if (b.msMatchesSelector) return b.msMatchesSelector(a);
      b = 0;
      for (a = a.split(","); b < a.length; b++) {
        var d = a[b];
        d = d.trim();
        if (0 != d.length)
          return "[" == d[0]
            ? this.da.hasAttribute(d.substr(1, d.length - 2))
            : this.da.tagName === d.toUpperCase();
      }
      return !1;
    };
    c.prototype.query = function(a, b) {
      this.matches(a) && b(this.da);
      Array.prototype.forEach.call(this.da.querySelectorAll(a), b);
    };
    c.prototype.clear = function() {
      for (; null !== this.da.firstChild; )
        this.da.removeChild(this.da.firstChild);
      return this;
    };
    c.prototype.jg = function(a) {
      this.da.innerText = a;
      return this;
    };
    return c;
  })();
  function Ua(c, a) {
    if ("string" === typeof c) {
      if ("<" == c[0]) return (a = Ua.Go(c)), new Va(a[0]);
      c = new Va(document.createElement(c));
      a && c.jk(a);
      return c;
    }
    return new Va(c);
  }
  var Wa = null;
  (function(c) {
    c.nc = function(a) {
      return "jQuery" in window && a instanceof window.jQuery
        ? a[0]
        : a instanceof HTMLElement
        ? a
        : "string" === typeof a
        ? document.querySelector(a)
        : null;
    };
    c.am = function() {
      var a = document.documentElement,
        b = a.scrollWidth > a.clientWidth;
      a = a.scrollHeight > a.clientHeight ? c.Lg() : 0;
      b = b ? c.Lg() : 0;
      return {
        width: window.innerWidth - a,
        height: window.innerHeight - b,
        left: document.documentElement.scrollLeft || document.body.scrollLeft,
        top: document.documentElement.scrollTop || document.body.scrollTop,
      };
    };
    c.Lg = function() {
      if (null === Wa) {
        var a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.width = "100px";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        a.style.overflow = "scroll";
        var d = document.createElement("div");
        d.style.width = "100%";
        a.appendChild(d);
        d = d.offsetWidth;
        a.parentNode.removeChild(a);
        Wa = b - d;
      }
      return Wa;
    };
    c.Jt = function() {
      for (
        var a = document.getElementsByTagName("*"), b = 0, d = 0;
        d < a.length;
        d++
      ) {
        var e = parseInt(c(a[d]).Ce("z-index"), 10) || 0;
        e > b && (b = e);
      }
      return b;
    };
    c.Go = function(a) {
      var b = document.createElement("div");
      b.innerHTML = a;
      a = [];
      for (var d = b.firstChild; d; )
        d instanceof HTMLElement && a.push(d), (d = d.nextSibling);
      for (d = 0; d < a.length; d++) b.removeChild(a[d]);
      return a;
    };
    c.qf = function(a, b) {
      if (!(a instanceof HTMLElement)) return !1;
      switch (a.tagName) {
        case "INPUT":
        case "TEXTAREA":
        case "OPTION":
        case "SELECT":
          return !0;
        case "BUTTON":
          return b instanceof KeyboardEvent ? "Enter" === b.key : !0;
      }
      return a.isContentEditable ? !0 : !1;
    };
    c.GA = function(a) {
      var b = a;
      if (!("ZwibblerTainted" in b)) {
        if (!(a instanceof HTMLCanvasElement)) {
          var d = document.createElement("canvas");
          d.getContext("2d").drawImage(a, 0, 0, 1, 1, 0, 0, 1, 1);
          a = d;
        }
        try {
          a.getContext("2d").getImageData(0, 0, 1, 1), (b.ZwibblerTainted = !1);
        } catch (e) {
          b.ZwibblerTainted = !0;
        }
      }
      return b.ZwibblerTainted;
    };
  })(Ua || (Ua = {}));
  function Xa(c) {
    return new Promise(function(a, b) {
      var d = new XMLHttpRequest();
      c.mimeType && d.overrideMimeType(c.mimeType);
      c.withCredentials && (d.withCredentials = !0);
      c.responseType && (d.responseType = c.responseType);
      var e = c.method || "GET",
        f = c.cv || {},
        h = c.url,
        k = "",
        l = !0,
        n = !1,
        r = null,
        v;
      for (v in f) {
        if (f[v] instanceof Blob) {
          n = !0;
          e = "POST";
          break;
        }
        l || (k += "&");
        l = !1;
        k += v + "=" + encodeURIComponent(f[v]);
      }
      "GET" === e && 0 < k.length && ((h += "?" + k), (k = ""));
      if (n) {
        r = new FormData();
        for (var w in f) r.append(w, f[w]);
      }
      d.onreadystatechange = function() {
        if (4 === d.readyState)
          if (200 === d.status) a(d);
          else {
            var e = d.statusText;
            0 === d.status
              ? (e = "Could not contact server.")
              : d.getResponseHeader("status") &&
                (e = d.getResponseHeader("status"));
            b(Error(d.status + " " + e));
          }
      };
      d.open(e, h, !0);
      if (c.headers)
        for (var x in c.headers) d.setRequestHeader(x, c.headers[x]);
      var y = "string" === typeof c.data ? c.data : r ? r : k;
      c.contentType
        ? d.setRequestHeader("Content-type", "application/json")
        : "POST" !== e ||
          n ||
          d.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
      c.cancel &&
        c.cancel.then(function() {
          d.abort();
        });
      c.Ys
        ? setTimeout(function() {
            d.send(y);
          }, c.Ys)
        : d.send(y);
    });
  }
  var Ya = (function() {
      function c() {
        this.Cp = [];
        this.Zb = null;
      }
      c.prototype.yp = function(a) {
        for (var b = 0, d = this.Cp; b < d.length; b++) if (d[b] === a) return;
        this.Cp.push(a);
        this.Zb ||
          ((this.Zb = document.createElement("style")),
          document.head &&
            document.head.insertBefore(this.Zb, document.head.firstChild));
        this.Zb.appendChild(document.createTextNode(a));
      };
      c.prototype.Sa = function() {
        this.Zb && (Ua(this.Zb).remove(), (this.Zb = null));
        this.Cp.length = 0;
      };
      return c;
    })(),
    Za = (function() {
      function c() {
        this.input = null;
      }
      c.prototype.Sa = function() {
        this.input &&
          this.input.parentNode &&
          this.input.parentNode.removeChild(this.input);
      };
      c.prototype.open = function(a) {
        var b = this;
        return new Promise(function(d) {
          b.input &&
            b.input.parentNode &&
            b.input.parentNode.removeChild(b.input);
          b.input = document.createElement("input");
          b.input.style.display = "none";
          b.input.setAttribute("id", "ZwibblerFileInput");
          b.input.setAttribute("type", "file");
          "string" === typeof a.capture &&
            b.input.setAttribute("capture", a.capture);
          document.body.appendChild(b.input);
          a.accept && b.input.setAttribute("accept", a.accept);
          var e = new FileReader(),
            c = "";
          b.input.addEventListener("change", function() {
            var b = this.files;
            b &&
              0 < b.length &&
              ((c = b[0].type),
              "data-uri" === a.format
                ? e.readAsDataURL(b[0])
                : "text" === a.format
                ? e.readAsText(b[0])
                : "ArrayBuffer" === a.format
                ? e.readAsArrayBuffer(b[0])
                : "File" === a.format && d({ contentType: c, data: b[0] }));
          });
          e.addEventListener("load", function() {
            d({ contentType: c, data: e.result });
          });
          b.input.value = "";
          b.input.click();
        });
      };
      return c;
    })(),
    $a = (function() {
      function c() {
        this.Xj = "";
        this.anchor = null;
      }
      c.prototype.Sa = function() {
        this.anchor &&
          this.anchor.parentNode &&
          this.anchor.parentNode.removeChild(this.anchor);
        "" !== this.Xj && window.URL.revokeObjectURL(this.Xj);
      };
      c.prototype.sC = function(a, b) {
        var d = atob(a.split(",")[1]);
        a = a
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        for (
          var e = new ArrayBuffer(d.length), c = new Uint8Array(e), h = 0;
          h < d.length;
          h++
        )
          c[h] = d.charCodeAt(h);
        d = [e];
        a = { type: a };
        try {
          var k = new File(d, b, a);
        } catch (l) {
          k = new Blob(d, a);
        }
        this.Dv(k, b);
      };
      c.prototype.Dv = function(a, b) {
        var d = this;
        this.Sa();
        if (window.navigator.msSaveOrOpenBlob)
          window.navigator.msSaveOrOpenBlob(a, b);
        else {
          this.Xj = window.URL.createObjectURL(a);
          var e =
              /Macintosh/.test(navigator.userAgent) && "ontouchend" in document,
            c = navigator.userAgent.toLowerCase().match(/(iphone|ipad)/);
          a = "application/pdf" === a.type;
          c || (e && a)
            ? window.open(this.Xj, "_blank")
            : ((this.anchor = document.createElement("a")),
              (this.anchor.innerHTML = "download"),
              this.anchor.setAttribute("href", this.Xj),
              this.anchor.setAttribute("download", b),
              (this.anchor.style.display = "none"),
              document.body.appendChild(this.anchor),
              this.anchor.click(),
              setTimeout(function() {
                d.anchor && document.body.removeChild(d.anchor);
              }, 1e3));
        }
      };
      return c;
    })(),
    ab = (function() {
      function c(a, b) {
        this.element = a;
        this.ag = null;
        "ResizeObserver" in window &&
          ((this.ag = new window.ResizeObserver(function() {
            b();
          })),
          this.ag.observe(a));
      }
      c.prototype.Sa = function() {
        this.ag && this.ag.unobserve(this.element);
      };
      c.Mw = function() {
        return "ResizeObserver" in window;
      };
      return c;
    })(),
    u = Ua;
  var bb = (function() {
    function c(a, b, d, e, c) {
      void 0 === a && (a = "transparent");
      void 0 === b && (b = 0);
      void 0 === d && (d = 0);
      void 0 === e && (e = 0);
      void 0 === c && (c = 0);
      this.Kc = a;
      this.left = b;
      this.top = d;
      this.right = e;
      this.bottom = c;
      this.zIndex = 1;
      this.insertBefore = null;
      this.va = document.createElement("div");
    }
    c.prototype.pf = function() {
      this.va && u(this.va).remove();
    };
    c.prototype.show = function(a) {
      u(this.va)
        .Ya({
          position: "fixed",
          background: this.Kc,
          left: this.left + "px",
          top: this.top + "px",
          right: this.right + "px",
          bottom: this.bottom + "px",
          display: "block",
        })
        .be("zwibbler-popup-overlay");
      this.va.addEventListener("click", a);
      this.va.style.zIndex = this.zIndex.toString();
      this.insertBefore
        ? this.insertBefore.parentNode &&
          this.insertBefore.parentNode.insertBefore(this.va, this.insertBefore)
        : document.body.appendChild(this.va);
    };
    return c;
  })();
  var cb = (function() {
    function c(a, b) {
      this.name = b;
      this.va = u("div")
        .Ya({ borderTop: "1px solid #888", padding: "5px", cursor: "default" })
        .Pd(a);
      this.update(0);
    }
    c.prototype.update = function(a) {
      this.va.da.innerText = this.name + "... " + Math.round(100 * a) + "%";
    };
    c.prototype.error = function(a) {
      var b = this,
        d = document.createElement("input");
      d.setAttribute("type", "button");
      d.value = "OK";
      d.addEventListener("click", function() {
        b.done();
      });
      this.va.da.innerText = this.name + "... " + a + " ";
      this.va.da.appendChild(d);
    };
    c.prototype.done = function() {
      this.va.remove();
    };
    c.all = [];
    return c;
  })();
  var db = (function() {
    function c(a, b, d) {
      this.parentElement = a;
      this.stack = [];
      this.ih = !1;
      this.Cf = [];
      this.gD = !1;
      this.av = "red";
      this.first = u("CANVAS", { width: b, height: d }).Pd(a).da;
      this.stack.push({
        canvas: this.first,
        ma: this.first.getContext("2d"),
        Pi: {},
      });
      this.ee = c.Jr(this.stack[0].ma);
      this.width = this.first.width;
      this.height = this.first.height;
      this.Uk(this.first);
    }
    c.prototype.SC = function(a) {
      for (var b = 0, d = this.stack; b < d.length; b++)
        d[b].canvas.style.outline = "4px solid " + a;
      this.av = a;
    };
    c.prototype.ax = function() {
      if (void 0 === a) var a = this.stack.length;
      var b = u("CANVAS")
        .Ya({
          position: "absolute",
          left: this.first.offsetLeft + "px",
          top: this.first.offsetTop + "px",
          pointerEvents: "none",
          outline: "4px solid " + this.av,
        })
        .be("zwibbler-overlay").da;
      this.Uk(b);
      this.stack.splice(a, 0, { canvas: b, ma: b.getContext("2d"), Pi: {} });
      a === this.stack.length - 1
        ? this.parentElement.insertBefore(b, null)
        : this.parentElement.insertBefore(b, this.stack[a + 1].canvas);
      b.getContext("2d");
    };
    c.prototype.fd = function(a, b, d) {
      var e = this;
      this.stack[a].Pi[b] = d;
      if (!this.ih) {
        var c = new Date().getTime();
        this.ih = !0;
        requestAnimationFrame(function() {
          var a = new Date().getTime(),
            b = e.Xo();
          e.ih = !1;
          for (var d = 0, f = e.stack; d < f.length; d++) {
            var r = f[d],
              v = !0,
              w;
            for (w in r.Pi) {
              var x = r.ma;
              v &&
                (x.setTransform(b, 0, 0, b, 0, 0),
                x.clearRect(0, 0, e.width, e.height),
                (v = !1));
              r.Pi[w](x, b);
            }
            r.Pi = {};
          }
          if (e.gD) {
            e.Cf.push({ Nb: a, latency: a - c, Py: new Date().getTime() - a });
            25 < e.Cf.length && e.Cf.shift();
            x = f = d = 0;
            for (r = e.Cf; x < r.length; x++)
              (v = r[x]), (d += v.latency), (f += v.Py);
            d = Math.round((d / e.Cf.length) * 10) / 10;
            f = Math.round((f / e.Cf.length) * 10) / 10;
            a =
              1 < e.Cf.length
                ? Math.round((e.Cf.length / ((a - e.Cf[0].Nb) / 1e3)) * 100) /
                  100
                : 0;
            x = e.get(0);
            x.setTransform(b, 0, 0, b, 0, 0);
            x.fillStyle = "white";
            b = "latency=" + d + "ms drawTime=" + f + "ms fps=" + a;
            x.fillRect(
              0,
              0,
              x.measureText("latency=MM.MMms drawTime=MM.MMms fps=MM").width,
              13
            );
            x.textBaseline = "top";
            x.font = "10px arial";
            x.fillStyle = "red";
            x.fillText(b, 2, 2);
          }
        });
      }
    };
    c.prototype.get = function(a) {
      return this.stack[a].ma;
    };
    c.prototype.Xo = function() {
      var a = c.Jr(this.stack[0].ma);
      if (a !== this.ee) {
        this.ee = a;
        a = 0;
        for (var b = this.stack; a < b.length; a++) this.Uk(b[a].canvas);
      }
      return this.ee;
    };
    c.prototype.ig = function(a, b) {
      this.width = a;
      this.height = b;
      a = 0;
      for (b = this.stack; a < b.length; a++) this.Uk(b[a].canvas);
    };
    c.Jr = function(a) {
      return (
        (window.devicePixelRatio || 1) /
        (a.$D || a.dB || a.gB || a.mB || a.Ax || 1)
      );
    };
    c.prototype.Uk = function(a) {
      a.width = this.width * this.ee;
      a.height = this.height * this.ee;
      a.style.width = this.width + "px";
      a.style.height = this.height + "px";
      a.getContext("2d").setTransform(this.ee, 0, 0, this.ee, 0, 0);
    };
    return c;
  })();
  var A = new ((function() {
    function c() {
      this.disabled = {};
      this.Fe = [];
      this.Ts = !1;
    }
    c.prototype.enable = function(a, b) {
      void 0 === b && (b = !0);
      this.disabled[a] = !b;
    };
    c.prototype.create = function(a, b) {
      void 0 === b && (b = !0);
      !1 === b && (this.disabled[a] = !0);
      var d = this;
      return function() {
        for (var b = 0; b < arguments.length; b++);
        d.SA(a, arguments);
      };
    };
    c.prototype.addListener = function(a) {
      this.Fe.push(a);
      return a;
    };
    c.prototype.removeListener = function(a) {
      for (var b = 0; b < this.Fe.length; b++)
        if (this.Fe[b] === a) {
          this.Fe.splice(b, 1);
          break;
        }
    };
    c.prototype.Sy = function() {
      this.Ts ||
        ((this.Ts = !0),
        this.addListener(function(a, b) {
          console.log(a + ": " + b);
        }));
    };
    c.prototype.SA = function(a, b) {
      var d = [],
        e;
      if (0 !== this.Fe.length) {
        var c = b[0].split("%s");
        d.push(c[0]);
        for (e = 1; e < c.length; e++)
          e - 1 >= b.length - 1
            ? d.push("<too few args>")
            : "string" === typeof b[e] || "number" === typeof b[e]
            ? d.push(b[e])
            : void 0 === b[e]
            ? d.push("(undefined)")
            : null === b[e]
            ? d.push("(null)")
            : b[e] instanceof Object && b[e].toString instanceof Function
            ? d.push(b[e].toString())
            : d.push(JSON.stringify(b[e])),
            d.push(c[e]);
        b = d.join("");
        d = 0;
        for (e = this.Fe; d < e.length; d++) (0, e[d])(a, b);
      }
    };
    return c;
  })())();
  var fb = A.create("DRAGSORT");
  function gb(c) {
    function a(a) {
      "dragover" !== a.type && fb(a.type);
      for (var b = a.target; b.parentNode !== c.parent && b.parentNode; )
        b = b.parentNode;
      if (
        1 === b.nodeType &&
        b.getAttribute("draggable") &&
        "false" !== b.getAttribute("draggable").toLowerCase() &&
        b.parentNode === c.parent
      )
        if ("dragstart" === a.type) {
          for (var d = c.parent.children, e = 0; e < d.length; e++)
            null !== d[e].getAttribute(c.Gs) &&
              d[e].setAttribute("sort-index", e.toString());
          a.dataTransfer.setData("text", b.id);
          a.dataTransfer.dropEffect = "move";
          h = f = b;
          a.stopPropagation();
        } else
          "dragover" === a.type && h && f.parentNode === b.parentNode
            ? (h.classList.remove(c.fq),
              (h = b),
              h.classList.add(c.fq),
              a.preventDefault())
            : "dragend" === a.type && h && f.parentNode === b.parentNode
            ? (h.classList.remove(c.fq),
              (b = parseInt(h.getAttribute("sort-index") || "0")),
              (d = parseInt(f.getAttribute("sort-index") || "0")),
              c.wB(d, b),
              a.preventDefault(),
              a.stopPropagation())
            : "drop" === a.type && (a.preventDefault(), a.stopPropagation());
    }
    var b = c.parent.Pw;
    c.parent.Pw = !0;
    for (var d = c.parent.children, e = 0; e < d.length; e++)
      null !== d[e].getAttribute(c.Gs) &&
        d[e].setAttribute("draggable", "true");
    if (b) return function() {};
    u(c.parent).addEventListener("dragstart dragover dragend drop", a);
    var f, h;
    return function() {
      u(c.parent).removeEventListener("dragstart dragover dragend drop", a);
    };
  }
  var ib = (function() {
      function c() {
        this.items = [];
        this.next = 0;
        this.Rf = !1;
        this.log = A.create("UNDOSTACK");
      }
      c.prototype.wa = function(a, b, d) {
        void 0 === b && (b = !1);
        a = a instanceof hb ? [a] : a;
        if (0 !== a.length) {
          this.next < this.items.length && (this.items.length = this.next);
          if (!b) for (b = 0; b < a.length; b++) a[b].Qc(d);
          for (d = this.top(); d; )
            if (d[d.length - 1].Tg(a[0])) {
              if ((a.shift(), 0 === a.length)) break;
            } else break;
          a.length && this.items.push(a);
          this.Rf = !0;
          this.next = this.items.length;
        }
      };
      c.prototype.Uc = function(a) {
        this.log("Undo index %s of %s", this.next, this.items.length);
        if (this.Ze()) {
          for (var b = this.items[--this.next], d = b.length - 1; 0 <= d; d--)
            b[d].Uc(a);
          return (this.Rf = !0);
        }
        return !1;
      };
      c.prototype.ne = function(a) {
        this.log("Redo index %s of %s", this.next, this.items.length);
        if (this.Ye()) {
          for (var b = this.items[this.next++], d = 0; d < b.length; d++)
            b[d].Qc(a);
          return (this.Rf = !0);
        }
        return !1;
      };
      c.prototype.Ze = function() {
        return 0 < this.next;
      };
      c.prototype.Ye = function() {
        return this.next < this.items.length;
      };
      c.prototype.clear = function() {
        this.next = this.items.length = 0;
        this.Rf = !1;
      };
      c.prototype.top = function() {
        return this.items.length ? this.items[this.items.length - 1] : null;
      };
      c.prototype.Lt = function() {
        return this.items.length;
      };
      return c;
    })(),
    hb = (function() {
      function c() {}
      c.prototype.Qc = function() {};
      c.prototype.Uc = function() {};
      c.prototype.Tg = function() {
        return !1;
      };
      return c;
    })();
  function jb(c, a, b) {
    this.Qa = c;
    this.en = a;
    this.fn = b;
    this.kn = 0;
  }
  var kb = 0,
    lb = new ((function() {
      function c() {
        this.Vb = [];
        this.gr = !1;
        this.log = A.create("ImageLoader");
      }
      c.prototype.timeout = function() {
        var a = [];
        this.log("Timeout running... %s images remaining", this.Vb.length);
        for (var b = 0; b < this.Vb.length; b++)
          this.Vb[b].Qa.complete
            ? this.Vb[b].fn(this.Vb[b].Qa, this.Vb[b].en)
            : 5e3 > this.Vb[b].kn
            ? ((this.Vb[b].kn += 250), a.push(this.Vb[b]))
            : this.Vb[b].fn(this.Vb[b].Qa, this.Vb[b].en);
        this.Vb = a;
        this.Vb.length
          ? setTimeout(this.timeout, 250)
          : (this.log("Timeout Stopped"), (this.gr = !1));
      };
      c.prototype.load = function(a, b, d) {
        var e = this;
        void 0 === d && (d = !1);
        0 == kb
          ? this.ds(a, b, d)
          : setTimeout(function() {
              e.ds(a, b, d);
            }, kb);
      };
      c.prototype.ds = function(a, b, d) {
        function e(a) {
          for (var b = 0; b < c.Vb.length; b++) {
            var d = c.Vb[b];
            if (d.Qa === a) return c.Vb.splice(b, 1), d;
          }
          return null;
        }
        var c = this,
          h = document.createElement("img"),
          k = new jb(h, a, b);
        this.Vb.push(k);
        var l = 0 <= a.indexOf("://"),
          n = "://" + window.location.host,
          r = 0 !== a.indexOf("data:") && l && -1 === a.indexOf(n);
        r &&
          !d &&
          (this.log("Using cross origin request for img"),
          (h.crossOrigin = ""));
        h.addEventListener(
          "load",
          function() {
            if (h.complete) {
              var a = e(h);
              a && b(h, a.en);
            } else
              c.gr || ((c.gr = !0), setTimeout(c.timeout, 250), (k.kn = 250));
          },
          !1
        );
        h.addEventListener(
          "error",
          function() {
            c.log("Error loading %s; useCors=%s disableCors=%s", a, r, d);
            e(h);
            !r || d ? b(null, k.en) : c.load(a, b, !0);
          },
          !1
        );
        h.src = a;
      };
      c.prototype.GC = function(a) {
        kb = a;
      };
      return c;
    })())();
  var nb = (function() {
    function c() {
      this.images = {};
    }
    c.prototype.add = function(a, b) {
      var d = this.images[a];
      d ||
        ((d = { Qa: null, Mm: 0 }),
        lb.load(b, function(a) {
          d.Qa = a;
        }),
        (this.images[a] = d));
      d.Mm += 1;
    };
    c.prototype.release = function(a) {
      var b = this.images[a];
      b && (--b.Mm, 0 >= b.Mm && delete this.images[a]);
    };
    c.prototype.get = function(a) {
      return (a = this.images[a]) && a.Qa ? a.Qa : null;
    };
    return c;
  })();
  var ob = (function() {
    function c(a) {
      this.code = "en";
      this.data = {};
      this.log = A.create("LANGUAGE");
      this.data = this.dv(a, {});
    }
    c.prototype.Rv = function(a) {
      a = a.split(",");
      this.log("Choice of languages: %s", a);
      for (var b = 0; b < a.length; b++) {
        var d = a[b].split("-")[0];
        if (d in this.data) {
          this.log("Using language code %s", d);
          this.code = d;
          break;
        } else this.log("No language for code %s", d);
      }
    };
    c.prototype.Yn = function(a) {
      this.dv(a, this.data);
    };
    c.prototype.dv = function(a, b) {
      a = a.split("\n");
      for (var d = /^([ \t]*)([^:]+):([^:]+):(.*)/, e = 0; e < a.length; e++) {
        var c = d.exec(a[e]);
        if (c) {
          var h = c[2],
            k = c[3];
          c = c[4];
          h in b || (b[h] = {});
          k in b[h] && this.log("Warning: Replacing %s:%s", h, k);
          b[h][k] = c;
        }
      }
      return b;
    };
    c.prototype.fn = function() {
      var a = this;
      return function(b) {
        for (var d = [], e = 1; e < arguments.length; e++)
          d[e - 1] = arguments[e];
        return a.Zr(b, d);
      };
    };
    c.prototype.get = function(a) {
      for (var b = [], d = 1; d < arguments.length; d++)
        b[d - 1] = arguments[d];
      return this.Zr(a, b);
    };
    c.prototype.Zr = function(a, b) {
      var d = "<not translated:" + a + ">";
      this.code in this.data &&
        a in this.data[this.code] &&
        (d = this.data[this.code][a]);
      for (a = 0; a < b.length; a++) d = d.replace("^" + a, b[a]);
      return d;
    };
    return c;
  })();
  var pb = (function() {
    function c() {
      this.cj = [];
      this.log = A.create("DESTRUCTOR");
    }
    c.prototype.add = function(a) {
      this.cj.push(a);
    };
    c.prototype.addEventListener = function(a, b, d, e) {
      function c(b) {
        a.addEventListener(b, d, e);
        h.add(function() {
          a.removeEventListener(b, d, e);
        });
      }
      var h = this;
      void 0 === e && (e = !1);
      var k = 0;
      for (b = b.split(" "); k < b.length; k++) c(b[k]);
    };
    c.prototype.pa = function(a, b, d) {
      a.pa(b, d);
      this.add(function() {
        a.removeListener(b, d);
      });
    };
    c.prototype.Sa = function() {
      this.log("Running %s destructors", this.cj.length);
      for (var a = this.cj.length - 1; 0 <= a; a--) this.cj[a]();
      this.cj.length = 0;
    };
    return c;
  })();
  var qb = (function() {
    function c(a, b, d) {
      var e = this;
      void 0 === d && (d = !1);
      this.va = a;
      this.Qj = 0;
      this.Jp = {};
      this.Mb = !1;
      this.timeout = null;
      this.lines = [];
      this.filter = null;
      this.Wx = "#5da700 #ed81ff #02ab34 #f92798 #59ff91 #ff6b80 #3cffe4 #ffd32b #5e8caa #ffdb7f #e5cdff #00c17e #f6f6f5 #9a861e #daff9d #808d40".split(
        " "
      );
      this.Xx = "#2f361e #6b35c2 #416323 #431b77 #af2f21 #5451ad #805221 #962e7f #456354 #a52e4f #273c4c #692d25 #455b8a #3f1a2a #382454 #774f63".split(
        " "
      );
      this.Hh = [];
      var c = new Ya();
      c.yp(
        '\n\n.z-inner-debug.black {\n    background: #000;\n    white-space: pre-wrap;\n}\n\n.z-inner-debug.white {\n    background: #fff;\n}\n\n.z-debug-panel {\n    font-family: "monospace";\n    font-size: 12px;\n    display: flex;\n    flex-flow: column nowrap;\n    text-align: left;\n}\n\n.z-inner-debug {\n    flex: 1 1 auto;\n    overflow: scroll;\n}\n\n.z-inner-debug.black div {\n    border-bottom: 1px solid #222;\n    margin-bottom: 3px;\n}\n\n.z-inner-debug.white div {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 3px;\n}\n'
      );
      a.classList.add("z-debug-panel");
      var h = 0;
      u("input")
        .jk({
          type: "text",
          placeholder: "regexp...",
          onclick: "this.select()",
        })
        .Pd(a)
        .addEventListener("input", function(a) {
          h && window.clearTimeout(h);
          h = setTimeout(function() {
            e.LC(a.target.value);
            h = 0;
          }, 200);
        });
      this.Vd = u("div")
        .be("z-inner-debug")
        .Pd(a).da;
      u("button")
        .Pd(this.va)
        .Ya({ flex: "0 0 auto" })
        .jg("Scroll to bottom/top")
        .addEventListener("click", function() {
          e.Vd.scrollTop = e.Ds() ? 0 : e.Vd.scrollHeight;
        });
      this.OA = A.addListener(function(a, b) {
        return e.rs(a, b);
      });
      b.add(function() {
        A.removeListener(e.OA);
        c.Sa();
      });
      this.rs("DEBUG", "Debug window starting");
      u(this.Vd).be(d ? "white" : "black");
      this.Hh = d ? this.Xx : this.Wx;
    }
    c.prototype.show = function() {
      this.va.style.display = "flex";
      this.Mb = !0;
      this.Rr();
      this.Vd.scrollTop = this.Vd.scrollHeight;
    };
    c.prototype.pf = function() {
      this.va.style.display = "none";
      this.Mb = !1;
    };
    c.prototype.wz = function(a) {
      a in this.Jp ||
        ((this.Jp[a] = this.Hh[this.Qj]),
        (this.Qj = (this.Qj + 1) % this.Hh.length));
      return this.Jp[a];
    };
    c.prototype.rs = function(a, b) {
      var d = this,
        e = 0;
      for (b = b.split("\n"); e < b.length; e++)
        this.lines.push({ key: a, line: b[e] });
      this.Mb &&
        null === this.timeout &&
        (this.timeout = setTimeout(function() {
          d.timeout = null;
          d.Rr();
        }, 100));
    };
    c.prototype.LC = function(a) {
      if (2 > a.length) this.filter = null;
      else
        try {
          this.filter = new RegExp(a, "i");
        } catch (d) {}
      for (a = this.Vd.firstChild; a; ) {
        var b = a;
        1 === b.nodeType &&
          "DIV" === b.tagName &&
          (!this.filter || this.filter.exec(b.textContent)
            ? (b.style.display = "block")
            : (b.style.display = "none"));
        a = a.nextSibling;
      }
    };
    c.prototype.Ds = function() {
      return this.Vd.scrollTop >= this.Vd.scrollHeight - this.Vd.clientHeight;
    };
    c.prototype.Rr = function() {
      for (var a = this.Ds(), b = 0, d = this.lines; b < d.length; b++) {
        var e = d[b],
          c = this.wz(e.key),
          h = document.createElement("div");
        h.style.color = c;
        e = e.key + ": " + e.line;
        this.filter && !this.filter.exec(e) && (h.style.display = "none");
        h.appendChild(document.createTextNode(e));
        this.Vd.appendChild(h);
      }
      a && (this.Vd.scrollTop = this.Vd.scrollHeight);
      this.lines.length = 0;
    };
    return c;
  })();
  var rb = A.create("EventEmitter"),
    sb = (function() {
      function c() {
        this.Sj = !1;
        this.kb = {};
        this.ye = [];
        this.Bl = {};
      }
      c.prototype.ta = function(a) {
        for (var b = this, d = 1; d < arguments.length; d++);
        this.ye.push(Array.prototype.slice.apply(arguments));
        1 === this.ye.length &&
          setTimeout(function() {
            for (var a = 0; a < b.ye.length; a++) b.zo.apply(b, b.ye[a]);
            b.ye.length = 0;
          }, 0);
      };
      c.prototype.xc = function(a) {
        for (var b = 1; b < arguments.length; b++);
        this.ye.push(Array.prototype.slice.apply(arguments));
        if (1 === this.ye.length) {
          for (b = 0; b < this.ye.length; b++) this.zo.apply(this, this.ye[b]);
          this.ye.length = 0;
        }
      };
      c.prototype.Fg = function(a) {
        for (var b = this, d = 1; d < arguments.length; d++);
        d = Array.prototype.slice.apply(arguments);
        var e = d[0];
        e in this.Bl ||
          setTimeout(function() {
            var a = b.Bl[e];
            delete b.Bl[e];
            b.zo.apply(b, a);
          }, 0);
        this.Bl[e] = d;
      };
      c.prototype.zo = function(a) {
        for (var b = [], d = 1; d < arguments.length; d++)
          b[d - 1] = arguments[d];
        if (a in this.kb) {
          d = this.kb[a];
          this.Sj || rb("Emit %s", a);
          for (var e = 0; e < d.length; e++) d[e].apply(null, b);
        }
      };
      c.prototype.pa = function(a, b) {
        this.kb || (this.kb = {});
        var d = 0;
        for (a = a.split(" "); d < a.length; d++) this.bind(a[d], b);
      };
      c.prototype.once = function(a, b) {
        function d() {
          e.kw(a, d);
          b.apply(null, arguments);
        }
        var e = this;
        e.bind(a, d);
      };
      c.prototype.bind = function(a, b) {
        a in this.kb ? this.kb[a].push(b) : (this.kb[a] = [b]);
        return b;
      };
      c.prototype.removeListener = function(a, b) {
        return this.kw(a, b);
      };
      c.prototype.kw = function(a, b) {
        var d, e;
        if (a in this.kb) {
          var c = this.kb[a];
          var h = (d = 0);
          for (e = c.length - 1; d <= e; h = d += 1)
            if (c[h] === b) {
              c.splice(h, 1);
              break;
            }
          0 === c.length && delete this.kb[a];
        }
      };
      c.prototype.Ri = function() {
        this.kb = {};
      };
      return c;
    })();
  var tb = (function(c) {
    function a() {
      var a = c.call(this) || this;
      a.keys = {};
      a.Sj = !0;
      a.lD = new RegExp(
        "alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318"
          .split(" ")
          .sort(function(a, b) {
            return b.length - a.length;
          })
          .join("|"),
        "g"
      );
      a.log = A.create("KEYMAP");
      a.Vt = function(b) {
        a.wA(b);
      };
      return a;
    }
    __extends(a, c);
    a.prototype.map = function(a, d, e) {
      void 0 === e && (e = !0);
      a = a.toLowerCase().split(",");
      var b;
      if ("string" === typeof d)
        for (d = d.split(","), b = 0; b < a.length; b++)
          for (var c = 0; c < d.length; c++) this.Sr(a[b], d[c], !e);
      else for (b = 0; b < a.length; b++) this.Sr(a[b], d, !e);
    };
    a.prototype.ED = function(a, d) {
      this.map(a, d, !1);
    };
    a.prototype.Sr = function(a, d, e) {
      if (0 !== a.length) {
        var b = a.match(this.lD) || [],
          c = !1,
          k = !1,
          l = !1,
          n = !1,
          r = [],
          v;
        for (v = 0; v < b.length; v++)
          switch (b[v]) {
            case "alt":
              l = !0;
              break;
            case "control":
            case "ctrl":
              k = !0;
              break;
            case "shift":
              c = !0;
              break;
            case "home":
              r.push(36);
              break;
            case "end":
              r.push(35);
              break;
            case "pageup":
              r.push(33);
              break;
            case "pagedown":
              r.push(34);
              break;
            case "delete":
            case "del":
              r.push(46);
              break;
            case "backspace":
              r.push(8);
              break;
            case "up":
              r.push(38);
              break;
            case "right":
              r.push(39);
              break;
            case "down":
              r.push(40);
              break;
            case "left":
              r.push(37);
              break;
            case "escape":
            case "esc":
              r.push(27);
              break;
            case "enter":
              r.push(13);
              break;
            case "ins":
            case "insert":
              r.push(45);
              break;
            case "f4":
              r.push(115);
              break;
            case "meta":
            case "command":
            case "cmd":
            case "\u2318":
              n = !0;
              break;
            default:
              alert("key entry not found: " + b[v]);
          }
        var w = this;
        b = function(a) {
          c && -1 === a.indexOf("-shift") && (a += "-shift");
          k && -1 === a.indexOf("-control") && (a += "-control");
          l && -1 === a.indexOf("-alt") && (a += "-alt");
          n && -1 === a.indexOf("-meta") && (a += "-meta");
          "string" === typeof d
            ? w.log("%sKeyboard mapping: %s->%s", e ? "Remove " : "", a, d)
            : w.log(
                "%sKeyboard mapping: %s->%s",
                e ? "Remove " : "",
                a,
                "function()"
              );
          if (e) {
            if (a in w.keys) {
              for (var b = [], f = 0, h = w.keys[a]; f < h.length; f++) {
                var r = h[f];
                r !== d && b.push(r);
              }
              w.keys[a] = b;
            }
          } else if (a in w.keys) {
            f = w.keys[a];
            for (b = 0; b < f.length && f[b] !== d; b++);
            b === f.length && w.keys[a].push(d);
          } else w.keys[a] = [d];
        };
        if (0 === r.length)
          switch (((a = a.toUpperCase().charAt(a.length - 1)), a)) {
            case "=":
              b("107-shift");
              b("187");
              b("61");
              break;
            case "+":
              b("107");
              b("61-shift");
              break;
            case "-":
              b("109");
              b("189");
              b("173");
              break;
            default:
              r.push(a.charCodeAt(0));
          }
        for (v = 0; v < r.length; v++) b("" + r[v]);
      }
    };
    a.prototype.Uz = function(a) {
      var b = "";
      a.keyCode && (b += a.keyCode);
      a.shiftKey && (b += "-shift");
      a.ctrlKey && (b += "-control");
      a.altKey && (b += "-alt");
      a.metaKey && (b += "-meta");
      return b;
    };
    a.prototype.translate = function(a) {
      var b = [],
        e = this.Uz(a);
      e in this.keys && (b = this.keys[e]);
      (32 > a.keyCode || 126 <= a.keyCode) && this.log("%s", e);
      return b;
    };
    a.prototype.wA = function(a) {
      for (var b = 0, e = this.translate(a); b < e.length; b++) {
        var c = e[b];
        "string" === typeof c
          ? (this.log("action: %s", c), this.xc("*", c, a))
          : c(a);
      }
    };
    a.prototype.Es = function(a) {
      var b;
      void 0 === b && (b = !1);
      a.addEventListener("keydown", this.Vt, b);
    };
    a.prototype.detach = function(a, d) {
      void 0 === d && (d = !1);
      a.removeEventListener("keydown", this.Vt, d);
    };
    return a;
  })(sb);
  var ub = {
      1: "INITIAL CONNECTION",
      2: "APPEND",
      3: "SET-KEY",
      4: "BROADCAST",
      128: "ERROR",
      129: "ACK/NACK",
      130: "KEY-INFORMATION",
      131: "SET-KEY-ACK",
      255: "CONTINUATION",
    },
    vb = { 0: "No", 1: "Yes" },
    wb = { 0: "NACK", 1: "ACK" };
  function C(c, a, b, d) {
    return { length: c, type: a, name: b, AE: d };
  }
  var xb = {
    1: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(2, 0, "protocolVersion"),
      C(4, 0, "maxSize"),
      C(1, 0, "creationMode", {
        0: "POSSIBLY_CREATE",
        1: "NEVER_CREATE",
        2: "ALWAYS_CREATE",
      }),
      C(8, 0, "offset"),
      C(1, 0, "docIDLength"),
      C(-1, 1, "docID"),
      C(-2, 1, "data"),
    ],
    2: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(8, 0, "offset"),
      C(-2, 1, "data"),
    ],
    3: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(2, 0, "requestID"),
      C(1, 0, "lifetime", { 0: "CLIENT-LIFETIME", 1: "SESSION-LIFETIME" }),
      C(4, 0, "oldVersion"),
      C(4, 0, "newVersion"),
      C(4, 0, "nameLength"),
      C(-1, 1, "name"),
      C(4, 0, "valueLength"),
      C(-1, 1, "value"),
    ],
    4: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(4, 0, "dataLength"),
      C(-1, 1, "data"),
    ],
    128: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(2, 0, "errorCode", {
        0: "UNSPECIFIED",
        1: "DOES_NOT_EXIST",
        2: "ALREADY_EXISTS",
        3: "INVALID_OFFSET",
      }),
      C(-2, 1, "description"),
    ],
    129: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(2, 0, "ack", wb),
      C(8, 0, "offset"),
    ],
    130: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(0, 2, "keys"),
      C(4, 0, "version"),
      C(4, 0, "nameLength"),
      C(-1, 1, "name"),
      C(4, 0, "valueLength"),
      C(-1, 1, "value"),
    ],
    131: [
      C(1, 0, "messageType", ub),
      C(1, 0, "more", vb),
      C(2, 0, "ack", wb),
      C(2, 0, "requestID"),
    ],
    255: [C(1, 0, "messageType", ub), C(1, 0, "more", vb), C(-2, 1, "data")],
  };
  function yb(c) {
    var a = xb[c.messageType];
    if (!a) throw Error("no encoder for message type " + c.messageType);
    for (var b = [], d = 0; d < a.length; d++) {
      var e = a[d];
      if (!(e.name in c)) throw Error("missing field " + e.name);
      var f = c[e.name];
      if (0 === e.type) {
        var h = b;
        e = e.length;
        do --e, h.push(Math.floor((f / Math.pow(2, 8 * e)) % 256));
        while (0 < e);
      } else if (f instanceof Uint8Array)
        for (h = 0; h < f.length; h++) b.push(f[h]);
      else for (h = b, f = Sa(f), e = 0; e < f.length; e++) h.push(f[e]);
    }
    return new Uint8Array(b);
  }
  function zb(c) {
    var a = xb[c[0]];
    if (!a) return null;
    for (
      var b = {}, d = b, e = 0, f = 0, h = "", k = 0, l = 0;
      l < a.length;
      l++
    ) {
      var n = a[l],
        r;
      if (2 === n.type) (h = n.name), (b = {}), (d[h] = [b]), (k = l);
      else {
        if (0 === n.type) {
          e = f;
          var v = n.length;
          for (r = 0; v; ) (r = 256 * r + c[e]), --v, (e += 1);
          r = e = r;
          f += n.length;
        } else {
          v = e;
          -2 === n.length && ((v = c.length - f), (b[n.name + "_length"] = v));
          r = v;
          void 0 === r && (r = c.length - f);
          r = Ab(c, f, f + r);
          for (var w = "", x = 0; x < r.length; x++) {
            var y = r[x];
            if (0 === (y & 128)) w += String.fromCharCode(y);
            else if (192 === (y & 224)) {
              var B = r[++x] & 63;
              w += String.fromCharCode(((y & 31) << 6) | B);
            } else if (224 === (y & 240)) {
              B = r[++x] & 63;
              var H = r[++x] & 63;
              w += String.fromCharCode(((y & 31) << 12) | (B << 6) | H);
            } else if (240 === (y & 248)) {
              B = r[++x] & 63;
              H = r[++x] & 63;
              var M = r[++x] & 63;
              y = ((y & 7) << 18) | (B << 12) | (H << 6) | M;
              65535 < y &&
                ((y -= 65536),
                (w += String.fromCharCode(((y >>> 10) & 1023) | 55296)),
                (y = 56320 | (y & 1023)));
              w += String.fromCharCode(y);
            }
          }
          r = w;
          f += v;
        }
        b[n.name] = r;
        f < c.length &&
          l + 1 == a.length &&
          h.length &&
          ((b = {}), d[h].push(b), (l = k));
      }
    }
    return d;
  }
  function Ab(c, a, b) {
    return c.slice
      ? c.slice(a, b)
      : new Uint8Array(Array.prototype.slice.call(c, a, b));
  }
  var Cb = (function(c) {
      function a(a, d) {
        var b = c.call(this) || this;
        b.sc = a;
        b.um = d;
        a.binaryType = "arraybuffer";
        a.onopen = function() {
          b.ta({ type: "open" });
        };
        a.onerror = function() {
          b.ta({ type: "error" });
          a.onerror = a.onclose = null;
        };
        a.onclose = function() {
          b.ta({ type: "close" });
          a.onerror = a.onclose = null;
        };
        a.onmessage = function(a) {
          b.ta({ type: "message", message: new Uint8Array(a.data) });
        };
        return b;
      }
      __extends(a, c);
      a.prototype.close = function() {
        this.sc.close();
      };
      a.prototype.read = function() {
        return __awaiter(this, void 0, void 0, function() {
          var a, d, e, c, h;
          return __generator(this, function(b) {
            switch (b.label) {
              case 0:
                (a = []), (b.label = 1);
              case 1:
                return [4, this.Fu()];
              case 2:
                d = b.sent();
                if ("message" !== d.type || (0 === a.length && !d.message[1]))
                  return [2, d];
                e = 0;
                c = d.message;
                a.length && (e = 2);
                for (h = e; h < c.length; h++) a.push(c[h]);
                return d.message[1]
                  ? [3, 1]
                  : [2, { type: "message", message: new Uint8Array(a) }];
              case 3:
                return [2];
            }
          });
        });
      };
      a.prototype.send = function(a) {
        var b = this.sc,
          e = 0,
          c = a.length;
        c > this.um && ((c = this.um), (a[1] = 1));
        b.send(Ab(a, e, e + c));
        for (e += c; e < a.length; ) {
          c = a.length - e;
          c > this.um - 2 && (c = this.um - 2);
          var h = {
            messageType: 255,
            more: e + c < a.length ? 1 : 0,
            data: Ab(a, e, e + c),
          };
          b.send(yb(h));
          e += c;
        }
      };
      return a;
    })(
      (function() {
        function c() {
          this.zr = [];
          this.kb = [];
        }
        c.prototype.Fu = function() {
          var a = this;
          return new Promise(function(b) {
            a.kb.length ? b(a.kb.shift()) : a.zr.push(b);
          }).then(null, function(a) {
            throw a;
          });
        };
        c.prototype.ta = function(a) {
          this.zr.length ? this.zr.shift()(a) : this.kb.push(a);
        };
        return c;
      })()
    ),
    Db = (function() {
      function c() {
        var a = this;
        this.timeout = 0;
        this.bq = function() {
          a.cancel();
          a.resolve && (a.resolve(), (a.resolve = null));
        };
        this.resolve = null;
      }
      c.prototype.wait = function(a) {
        var b = this;
        return new Promise(function(d) {
          b.resolve = d;
          b.timeout = setTimeout(function() {
            return b.bq();
          }, a);
          window.addEventListener("online", b.bq);
        });
      };
      c.prototype.cancel = function() {
        clearTimeout(this.timeout);
        window.removeEventListener("online", this.bq);
      };
      return c;
    })(),
    Eb = (function(c) {
      function a(a, d, e, f) {
        var b = c.call(this) || this;
        b.ma = a;
        b.zC = d;
        b.latency = e;
        b.WebSocket = f;
        b.log = A.create("Sharing");
        b.keys = {};
        b.iu = "";
        b.bt = "";
        b.Xu = function() {
          b.vg();
        };
        b.Dm = function() {};
        b.qh = !1;
        b.connected = !1;
        b.sc = null;
        b.Zu = function() {
          for (var a = 0, d = b.ma.Mt(); a < d.length; a++) {
            var e = d[a];
            b.OC(e.name, e.value, e.persistent);
          }
          b.vg();
        };
        b.Mc = 0;
        b.sn = !1;
        b.vd = "";
        b.mq = [];
        b.dk = [];
        b.Tm = [];
        b.jB = 1;
        b.Ij = 0;
        return b;
      }
      __extends(a, c);
      a.prototype.PC = function(a) {
        this.latency = a;
      };
      a.prototype.start = function(a, d) {
        var b = this;
        this.bt = a;
        return new Promise(function(e, c) {
          b.log("Start shared session: createMode=%s", d);
          b.Dm = e;
          b.ma.pa("local-changes", b.Xu);
          b.ma.pa("local-keys", b.Zu);
          if (1 === d) b.Ss(a, d, "").then(null, c);
          else {
            e = b.ma.jp();
            if ("" === e)
              throw Error("getLocalChanges() returned null on first batch");
            b.iu = e;
            b.Ss(a, d, e).then(null, c);
          }
        });
      };
      a.prototype.stop = function() {
        this.log("stop() -- shut down session");
        this.qh = !1;
        this.sc && this.sc.close();
        this.ma.removeListener("local-changes", this.Xu);
        this.ma.removeListener("local-keys", this.Zu);
        this.Ij && clearTimeout(this.Ij);
      };
      a.prototype.Gq = function(a) {
        this.mq.push(a);
        this.vg();
      };
      a.prototype.OC = function(a, d, e) {
        try {
          d = JSON.stringify(d);
        } catch (n) {
          throw (console.error("Object cannot be converted to JSON: ", d), n);
        }
        for (var b = null, c = 0, k = this.dk; c < k.length; c++) {
          var l = k[c];
          l.name === a && (b = l);
        }
        c = 0;
        k = 1;
        a in this.keys && ((c = this.keys[a].version), (k = c + 1));
        e || (k = c = 0);
        b
          ? (b.value = d)
          : ((b = {
              name: a,
              value: d,
              oldVersion: c,
              newVersion: k,
              OB: e,
              zf: this.jB++,
            }),
            this.dk.push(b));
      };
      a.prototype.Ss = function(a, d, e) {
        return __awaiter(this, void 0, void 0, function() {
          var b, c, k;
          return __generator(this, function(f) {
            switch (f.label) {
              case 0:
                (this.qh = !0), (b = 0), (f.label = 1);
              case 1:
                if (!this.qh) return [3, 10];
                this.connected = !1;
                if (!b) return [3, 3];
                this.log("Waiting %sms before reconnecting", b);
                c = new Db();
                return [4, c.wait(b)];
              case 2:
                f.sent(), (f.label = 3);
              case 3:
                return (
                  (b = Math.max(Math.min(2 * b, 3e5), 1e3)), [4, this.connect()]
                );
              case 4:
                return f.sent() ? [4, this.zA(a, d, e)] : [3, 1];
              case 5:
                if (!f.sent()) return [3, 1];
                this.Dm && (this.Dm(), (this.Dm = function() {}));
                this.ta("connected");
                d = 1;
                this.vd = this.iu = e = "";
                this.connected = !0;
                this.vg();
                f.label = 6;
              case 6:
                return f.trys.push([6, 8, , 9]), [4, this.qx()];
              case 7:
                return f.sent(), [3, 9];
              case 8:
                return (
                  (k = f.sent()),
                  k instanceof Error &&
                    this.log("Synchronization error: " + k.message),
                  console.log("Synchronization error: ", k),
                  [3, 9]
                );
              case 9:
                return (
                  (this.connected = !1),
                  (b = 0),
                  this.ta("connect-error"),
                  [3, 1]
                );
              case 10:
                return [2];
            }
          });
        });
      };
      a.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
          var a, d, e;
          return __generator(this, function(b) {
            switch (b.label) {
              case 0:
                return (
                  (a = this.zC),
                  this.sc && this.sc.close(),
                  (this.sc = d = new Cb(new this.WebSocket(a), 102400)),
                  this.log("Connect to %s; wait for event", a),
                  [4, d.Fu()]
                );
              case 1:
                e = b.sent();
                if ("open" !== e.type)
                  return (
                    this.log("Received unexpected event: %s", e.type), [2, !1]
                  );
                this.log("Connected to %s", a);
                return [2, !0];
            }
          });
        });
      };
      a.prototype.zA = function(a, d, e) {
        return __awaiter(this, void 0, void 0, function() {
          var b, c;
          return __generator(this, function(f) {
            switch (f.label) {
              case 0:
                this.log(
                  "Send INIT message docLen=%s changes=%s",
                  this.Mc,
                  e.toString().length
                );
                if (!this.sc) throw Error("ws is null");
                try {
                  this.sc.send(
                    yb({
                      messageType: 1,
                      more: 0,
                      maxSize: 102400,
                      protocolVersion: 2,
                      creationMode: d,
                      offset: this.Mc,
                      docIDLength: Sa(a).length,
                      docID: a,
                      data: e,
                    })
                  );
                } catch (l) {
                  throw (console.log("Got error ", l), l);
                }
                return [4, this.sc.read()];
              case 1:
                b = f.sent();
                if ("message" != b.type)
                  return this.log("Expected message; got " + b.type), [2, !1];
                c = zb(b.message);
                if (128 === c.messageType)
                  throw (this.log("Got error response: %s", c.description),
                  Error(c.description));
                2 === c.messageType &&
                  (0 < c.offset && e.length && this.ma.Mj(e),
                  this.log(
                    "Got initial changes at offset %s=>%s",
                    c.offset,
                    c.offset + c.data_length
                  ),
                  (c.data.length || 0 === c.offset) &&
                    this.ma.tg(c.data, 0 === c.offset),
                  0 === c.offset && (this.vd = ""),
                  (this.Mc = c.offset + c.data_length));
                this.log("Connected and initialized.");
                return [2, !0];
            }
          });
        });
      };
      a.prototype.VC = function(a) {
        (this.sn = a) || this.vg();
      };
      a.prototype.vg = function() {
        var a = this;
        this.log("Check changes; changesSent=%s; paused=%s", this.vd, this.sn);
        this.Ij ||
          this.sn ||
          (this.Ij = setTimeout(function() {
            var b;
            a.Ij = 0;
            a.log(
              "inner checkChanges: connected=%s ws=%s",
              !!a.connected,
              !!a.sc
            );
            if (a.connected && a.sc) {
              "" === a.vd &&
                ((a.vd = a.ma.jp()),
                a.log("getLocalChanges: %s", a.vd),
                a.vd &&
                  (a.log("Sent changes %s->%s", a.Mc, a.Mc + a.vd.length),
                  a.sc.send(
                    yb({ messageType: 2, offset: a.Mc, more: 0, data: a.vd })
                  )));
              for (var e = 0, c = a.mq; e < c.length; e++) {
                var h = c[e];
                a.sc.send(
                  yb({
                    messageType: 4,
                    more: 0,
                    dataLength: Sa(h).length,
                    data: h,
                  })
                );
              }
              e = a.mq.length = 0;
              for (c = a.dk; e < c.length; e++)
                (h = c[e]),
                  a.sc.send(
                    yb({
                      messageType: 3,
                      more: 0,
                      requestID: h.zf,
                      lifetime: h.OB ? 1 : 0,
                      oldVersion: h.oldVersion,
                      newVersion: h.newVersion,
                      nameLength: Sa(h.name).length,
                      name: h.name,
                      valueLength: Sa(h.value).length,
                      value: h.value,
                    })
                  );
              (b = a.Tm).push.apply(b, a.dk);
              a.dk.length = 0;
            }
          }, this.latency));
      };
      a.prototype.qx = function() {
        return __awaiter(this, void 0, void 0, function() {
          var a, d, e, c, h, k, l, n;
          return __generator(this, function(b) {
            switch (b.label) {
              case 0:
                return [4, this.sc.read()];
              case 1:
                a = b.sent();
                if ("message" !== a.type)
                  return this.log("Expected message; got " + a.type), [2];
                d = zb(a.message);
                if (2 === d.messageType) {
                  if (this.Mc !== d.offset)
                    throw Error(
                      "Error: docLength =" +
                        this.Mc +
                        " but got offset " +
                        d.offset
                    );
                  this.ma.tg(d.data, !1);
                  this.log(
                    "From server: APPEND " +
                      this.Mc +
                      "->" +
                      (this.Mc + d.data_length)
                  );
                  this.Mc += d.data_length;
                  this.vg();
                } else if (129 === d.messageType)
                  d.ack
                    ? (this.log("Received ACK " + this.Mc + "=>" + d.offset),
                      this.ma.Mj(this.vd),
                      (this.vd = ""),
                      (this.Mc = d.offset))
                    : (this.log(
                        "Received NACK " +
                          this.Mc +
                          "!=" +
                          d.offset +
                          " " +
                          this.vd.substr(0, 22)
                      ),
                      (this.vd = ""),
                      this.vg());
                else if (4 === d.messageType) this.ta("broadcast", d.data);
                else if (130 === d.messageType) {
                  e = [];
                  c = 0;
                  for (h = d.keys; c < h.length; c++)
                    (k = h[c]),
                      (k.value = "" === k.value ? null : JSON.parse(k.value)),
                      (l = {
                        name: k.name,
                        value: k.value,
                        version: k.version,
                      }),
                      e.push(k),
                      null === l.value
                        ? delete this.keys[l.name]
                        : (this.keys[l.name] = l);
                  this.ta("set-keys", e);
                } else if (131 === d.messageType)
                  for (n = 0; n < this.Tm.length; n++) {
                    if (((k = this.Tm[n]), k.zf === d.requestID)) {
                      this.log("key %s ACKED:%s", k.name, d.ack);
                      d.ack &&
                        (this.keys[k.name] = {
                          name: k.name,
                          value: k.value,
                          version: k.newVersion,
                        });
                      this.Tm.splice(n, 1);
                      break;
                    }
                  }
                else throw Error("Unexpected message type " + d.messageType);
                b.label = 2;
              case 2:
                return [3, 0];
              case 3:
                return [2];
            }
          });
        });
      };
      return a;
    })(sb);
  var Fb = (function() {
      function c(a) {
        this.next = a;
      }
      c.prototype.sw = function(a) {
        for (var b = 0; b < a.length; b++) this.Eb(a.charCodeAt(b));
      };
      c.prototype.Eb = function(a) {
        this.next.Eb(a);
      };
      c.prototype.flush = function() {
        this.next.flush();
      };
      c.prototype.Oh = function() {
        return this.next.Oh();
      };
      return c;
    })(),
    Gb = (function() {
      function c() {
        this.data = "";
        this.log = A.create("BYTESTREAM");
      }
      c.prototype.sw = function(a) {
        for (var b = 0; b < a.length; b++) this.Eb(a.charCodeAt(b));
      };
      c.prototype.Oh = function() {
        return this;
      };
      c.prototype.Eb = function(a) {
        if (255 < a || 0 > a) throw "Bad data written to byte buffer";
        this.data += String.fromCharCode(a);
      };
      c.prototype.flush = function() {};
      c.prototype.toString = function() {
        return this.data;
      };
      c.prototype.qc = function() {
        for (var a = [], b = 0; b < this.data.length; b++)
          a.push(this.data.charCodeAt(b));
        return a;
      };
      c.Or = function(a, b) {
        c.Ir[a] = b;
      };
      c.pg = function(a) {
        var b = new c();
        a = a.split(",");
        a.reverse();
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          e.length && (b = c.Ir[e](b));
        }
        return b;
      };
      c.Ir = {};
      return c;
    })();
  var Hb = (function(c) {
    function a(a) {
      a = c.call(this, a) || this;
      a.Qi = 0;
      a.total = 0;
      a.size = 0;
      a.keys =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return a;
    }
    __extends(a, c);
    a.prototype.Eb = function(a) {
      this.Qi = (this.Qi << 8) | a;
      this.size += 8;
      for (this.total += 1; 6 <= this.size; )
        this.next.Eb(this.keys.charCodeAt((this.Qi >> (this.size - 6)) & 63)),
          (this.size -= 6);
    };
    a.prototype.flush = function() {
      var a = (3 - (this.total % 3)) % 3;
      this.size &&
        (this.next.Eb(this.keys.charCodeAt((this.Qi >> (this.size - 6)) & 63)),
        (this.Qi = this.size = 0));
      for (; a--; ) this.next.Eb(61);
      this.next.flush();
    };
    return a;
  })(Fb);
  Gb.Or("Base64Encoder", function(c) {
    return new Hb(c);
  });
  var Ib = (function(c) {
    function a(a) {
      a = c.call(this, a) || this;
      a.Xg = 0;
      a.Me = 0;
      a.zu = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193];
      a.log = A.create("BITWRITER");
      return a;
    }
    __extends(a, c);
    a.prototype.Eb = function(a) {
      this.rw(a, 8);
    };
    a.prototype.rw = function(a, d) {
      this.Xg = (this.Xg << d) | (a & this.zu[d]);
      for (this.Me += d; 8 <= this.Me; )
        this.next.Eb((this.Xg >>> (this.Me - 8)) & 255),
          (this.Me -= 8),
          (this.Xg &= this.zu[this.Me]);
    };
    a.prototype.flush = function() {
      this.Me &&
        (this.next.Eb(this.Xg << (8 - this.Me)), (this.Xg = this.Me = 0));
      this.next.flush();
    };
    return a;
  })(Fb);
  var Jb = (function(c) {
    function a(a) {
      var b = c.call(this, a) || this;
      b.ei = 258;
      b.xE = 0;
      b.rh = 0;
      b.first = !0;
      b.Ti = [];
      b.kq = [];
      b.eo = [];
      b.GE = 0;
      b.qo = 9;
      b.log = A.create("LZWEncoder");
      b.Cx = new Ib(a);
      b.Ur();
      return b;
    }
    __extends(a, c);
    a.prototype.Eb = function(a) {
      if (this.first) (this.rh = a), (this.first = !1);
      else {
        var b = this.Sw(this.rh, a);
        void 0 !== this.Ti[b]
          ? (this.rh = this.Ti[b])
          : (this.Sk(this.rh),
            (this.Ti[b] = this.ei),
            (this.kq[b] = this.rh),
            (this.rh = this.eo[b] = a),
            4095 > this.ei
              ? ((this.ei += 1),
                (this.qo = Math.ceil(Math.log(this.ei) / Math.log(2))))
              : this.Ur());
      }
    };
    a.prototype.Sw = function(a, d) {
      var b;
      var c = (d << 4) ^ a;
      for (b = 0 === c ? 1 : 18041 - c; ; ) {
        if (void 0 === this.Ti[c] || (this.kq[c] === a && this.eo[c] === d))
          return c;
        c -= b;
        0 > c && (c += 18041);
      }
    };
    a.prototype.Ur = function() {
      this.Sk(a.zw);
      this.ei = 258;
      this.qo = 9;
      this.Ti.length = 0;
      this.kq.length = 0;
      this.eo.length = 0;
    };
    a.prototype.flush = function() {
      this.first || (this.Sk(this.rh), this.Sk(a.Dw));
    };
    a.prototype.Sk = function(a) {
      this.Cx.rw(a, this.qo);
    };
    a.zw = 256;
    a.Dw = 257;
    return a;
  })(Fb);
  Gb.Or("LZWEncoder", function(c) {
    return new Jb(c);
  });
  function Kb(c) {
    c = c.replace(/\+/g, " ");
    return decodeURIComponent(c);
  }
  function Lb(c, a) {
    var b;
    var d = {};
    a = c.indexOf(a || "?");
    0 <= a && (c = c.substr(a + 1));
    a = c.indexOf("#");
    0 <= a && (c = c.substr(0, a));
    c = c.split("&");
    a = 0;
    for (b = c.length; a < b; a++) {
      var e = c[a];
      var f = e.split("=");
      e = Kb(f[0]);
      "/" == e[0] && -1 === e.indexOf(".") && (e = e.substr(1));
      f = 1 < f.length ? Kb(f[1]) : "";
      e.length && (d[e] = f);
    }
    return d;
  }
  function Mb() {
    if (void 0 === c) var c = window.location.hash;
    return Lb(c, "#");
  }
  function Nb(c) {
    void 0 === c && (c = window.location.href);
    return Lb(c, "?");
  }
  var Ob = A.create("CONFIG"),
    Pb = (function(c) {
      function a(a, d, e) {
        var b = c.call(this) || this;
        b.nj = {};
        for (var h in d) b.nj[h.toLowerCase()] = h;
        b.options = JSON.parse(JSON.stringify(d));
        for (var k in e)
          k.toLowerCase() in b.nj ||
            alert("Zwibbler: Unknown option '" + k + "'"),
            b.set(k, e[k], !0);
        a.addEventListener(window, "hashchange", function() {
          Ob("Reload parameters from url hash");
          b.Mp();
        });
        a.add(function() {
          b.kb = {};
        });
        b.Mp();
        for (var l in b.options) Ob("%s=%s", l, b.options[l]);
        return b;
      }
      __extends(a, c);
      a.prototype.Mp = function() {
        var a = Mb(),
          d;
        for (d in a) this.set(d, a[d]);
      };
      a.prototype.has = function(a) {
        return a.toLowerCase() in this.nj;
      };
      a.prototype.set = function(a, d, e) {
        void 0 === e && (e = !1);
        a.toLowerCase() in this.nj && (a = this.nj[a.toLowerCase()]);
        if ((a = this.st(a, d)))
          Ob("Set config %s=%s", a.name, a.value),
            a.name in this.options
              ? ((d = this.options[a.name]),
                (this.options[a.name] = a.value),
                e ||
                  d === a.value ||
                  (this.xc("update", a.name, a.value, d),
                  this.xc(a.name, a.value, !1)))
              : console.warn(
                  "Warning: %s is not a configuration option.",
                  a.name
                );
      };
      a.prototype.st = function(a, d) {
        if (
          "string" === typeof d &&
          "number" === typeof this.options[a] &&
          ((d = parseFloat(d)), isNaN(d))
        ) {
          console.log(Error("Config option " + a + " expects a number"));
          return;
        }
        return { name: a, value: d };
      };
      a.prototype.pa = function(a, d) {
        if ("update" !== a && !(a in this.options))
          throw Error(a + " is not a valid config setting.");
        "update" !== a && d(this.options[a], !0, null);
        return c.prototype.pa.call(this, a, d);
      };
      a.prototype.get = function(a) {
        if (!(a in this.options))
          throw Error(a + " is not a valid config setting.");
        return this.options[a];
      };
      return a;
    })(sb);
  var Rb = {
    style:
      "\n.zwibbler-colour-panel {\n    overflow:hidden;\n    border-top: 1px solid black;\n    white-space: nowrap;\n    font-size: 0;\n}\n\n.zwibbler-colour-panel div { \n    display: inline-block;\n}",
    gm:
      '<div class="zwibbler-colour-panel" z-style="{height:ColourPanelWidth()+\'px\'}">\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'clear\'}"\n        z-on:click="setColour(\'rgba(0,0,0,0.0)\', true)"\n        z-on:contextmenu="setColour(\'rgba(0,0,0,0.0)\', false)">\n    </canvas>\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'transparent\'}"\n        z-on:click="setOpacity(0.5, true)"\n        z-on:contextmenu="setOpacity(0.5, false)">\n    </canvas>\n    <div z-for="colour in ColourPanelColours"\n        z-style="{width: ColourPanelWidth()+\'px\', height: ColourPanelWidth()+\'px\', background: colour}"\n        z-on:click="setColour(colour, true)"\n        z-on:contextmenu="setColour(colour, false)">\n    </div>\n</div>\n',
    controller: function(c) {
      var a = Qb(),
        b = c.ma || c;
      a.shift();
      a.shift();
      c.ColourPanelColours = a;
      c.ColourPanelWidth = function() {
        return b.yc("useTouch") ? 40 : 20;
      };
    },
  };
  function Qb() {
    function c(b) {
      for (var d = 30; 100 > d; d += 20)
        (b.values[2] = d / 100), a.push(b.toString());
    }
    var a = [
      q.Ue,
      "rgba(0,0,0,0.5)",
      q.Oa,
      q.Xc,
      "#000088",
      "#008800",
      "#008888",
      "#880000",
      "#880088",
      "#884400",
      "#888888",
      "#444444",
      "#0000ff",
      "#00ff00",
      "#00ffff",
      "#ff0000",
      "#ff00ff",
      "#ffff00",
    ];
    c(new q(q.vh, [0, 0, 0, 1]));
    for (var b = 0; 720 > b; b += 35) {
      var d = new q(q.vh, [b, 0.5, 0, 1]);
      c(d);
    }
    return a;
  }
  var Sb = HTMLElement,
    Tb = Object,
    Ub;
  (function(c) {
    function a(a) {
      return {
        type: a,
        match: function(b) {
          return typeof b === a;
        },
      };
    }
    function b(a) {
      return {
        type: a.name,
        match: function(b) {
          return b instanceof a;
        },
      };
    }
    function d(a) {
      return {
        type: "" + a,
        match: function(b) {
          return b === a;
        },
      };
    }
    function e(a) {
      return {
        type: a.type + "[]",
        match: function(b) {
          return b instanceof Array && (0 === b.length || a.match(b[0]));
        },
      };
    }
    function f(a) {
      return {
        type: a.type + "?",
        match: function(b) {
          return void 0 === b || null === b || a.match(b);
        },
      };
    }
    c.Kn = b;
    c.sd = d;
    c.og = {
      type: "any",
      match: function(a) {
        return "undefined" !== typeof a;
      },
    };
    c.En = e;
    c.gb = f;
    c.jb = function() {
      for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
      b = [];
      for (var d = 0; d < a.length; d++) b.push(a[d].type);
      return {
        type: "(" + b.join("|") + ")",
        match: function(b) {
          for (var d = 0; d < a.length; d++)
            if (!0 === a[d].match(b)) return !0;
          return !1;
        },
      };
    };
    c.od = function(a, b) {
      return {
        type: a,
        match: function(a) {
          if ("object" !== typeof a) return !1;
          for (var d in b)
            if (!b[d].match(a[d]))
              return (
                "The " +
                d +
                " member should be a " +
                b[d].type +
                ", not " +
                Vb(a[d])
              );
          return !0;
        },
      };
    };
    c.In = function() {
      for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
      return {
        type: "(" + a.join("|") + ")",
        match: function(b) {
          for (var d = 0; d < a.length; d++) if (a[d] === b) return !0;
          return !1;
        },
      };
    };
    c.pE = f(c.og);
    c.xh = d(null);
    c.String = a("string");
    c.Sb = f(c.String);
    c.Number = {
      type: "number",
      match: function(a) {
        return "number" === typeof a && isFinite(a)
          ? !0
          : a + " is not a number.";
      },
    };
    c.Ua = f(c.Number);
    c.Hk = e(c.Number);
    c.Function = a("function");
    c.Kf = f(c.Function);
    c.Boolean = a("boolean");
    c.Md = f(c.Boolean);
    c.HTMLElement = b(Sb);
    c.Object = b(Tb);
    c.qd = f(c.Object);
    c.oE = e(c.Object);
    c.$b = {
      type: "integer",
      match: function(a) {
        return "number" === typeof a && (a | 0) === a
          ? !0
          : a + " is not a whole number.";
      },
    };
    c.Te = f(c.$b);
    c.Fw = e(c.$b);
    c.ga = function(a, b) {
      for (var d = [], e = 2; e < arguments.length; e++)
        d[e - 2] = arguments[e];
      for (e = 0; e < d.length; e++) {
        var c = d[e],
          f = b[e],
          h = c.match(f);
        if (!0 !== h)
          throw (console.log("arguments: ", b),
          Error(
            "Error calling " +
              a +
              ": " +
              Wb(e + 1) +
              " argument is '" +
              Vb(f) +
              "' but expected '" +
              c.type +
              "'. " +
              (!1 === h ? "" : h) +
              "'"
          ));
      }
    };
  })(Ub || (Ub = {}));
  function Wb(c) {
    switch (c % 10) {
      case 1:
        return c + "st";
      case 2:
        return c + "nd";
      case 3:
        return c + "rd";
    }
    return c + "th";
  }
  function Vb(c) {
    return c instanceof Array
      ? c.length
        ? Vb(c[0]) + "[]"
        : "Array"
      : null === c
      ? "null"
      : typeof c;
  }
  var D = Ub;
  var $b = (function() {
    function c() {
      var a = this;
      this.SB = new Promise(function(b, d) {
        a.resolve = b;
        a.reject = d;
      });
    }
    c.prototype.then = function(a, b) {
      return this.SB.then(a, b);
    };
    return c;
  })();
  var ac = new $b();
  var bc = A.create("MISC");
  function cc(c) {
    var a = document.createElement("canvas");
    c && c.appendChild(a);
    a.style.background = "transparent";
    return a;
  }
  function dc() {
    return (
      0 <= navigator.userAgent.search("Safari") &&
      0 > navigator.userAgent.search("Chrome")
    );
  }
  function ec(c, a) {
    c = q.ff(c);
    c.values[3] = a;
    return c.toString();
  }
  function fc(c, a) {
    a = a ? u(a).oc() : u.am();
    var b = u(c).oc();
    b.left = Math.min(b.left, a.left + a.width - c.offsetWidth);
    b.top = Math.min(b.top, a.top + a.height - c.offsetHeight);
    u(c).lk(b);
  }
  function gc(c) {
    var a = c.getContext("2d");
    if (null === a) return "error";
    var b = a.getImageData(0, 0, c.width, c.height);
    c = b.width;
    var d = b.height;
    a = c * d * 3;
    var e = a + 54,
      f = [
        66,
        77,
        e & 255,
        (e >> 8) & 255,
        (e >> 16) & 255,
        (e >> 24) & 255,
        0,
        0,
        0,
        0,
        54,
        0,
        0,
        0,
      ],
      h = [
        40,
        0,
        0,
        0,
        c & 255,
        (c >> 8) & 255,
        (c >> 16) & 255,
        (c >> 24) & 255,
        d & 255,
        (d >> 8) & 255,
        (d >> 16) & 255,
        (d >> 24) & 255,
        1,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        a & 255,
        (a >> 8) & 255,
        (a >> 16) & 255,
        (a >> 24) & 255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
    a = (4 - ((3 * c) % 4)) % 4;
    b = b.data;
    e = c << 2;
    for (var k = Gb.pg("Base64Encoder"), l = 0; l < f.length; l++) k.Eb(f[l]);
    for (l = 0; l < h.length; l++) k.Eb(h[l]);
    do {
      f = e * (d - 1);
      for (h = 0; h < c; h++)
        (l = h << 2), k.Eb(b[f + l + 2]), k.Eb(b[f + l + 1]), k.Eb(b[f + l]);
      for (f = 0; f < a; f++) k.Eb(0);
    } while (--d);
    k.flush();
    return "data:image/bmp;base64," + k.Oh().toString();
  }
  function hc(c, a) {
    "erase" === a
      ? (a = c.Qw)
        ? (c.save(),
          (c.strokeStyle = q.Oa),
          (c.globalCompositeOperation = "destination-out"),
          --c.lineWidth,
          c.stroke(),
          (c.globalCompositeOperation = "source-over"),
          (c.lineWidth += 2),
          a(),
          c.restore())
        : ((c.strokeStyle = q.Oa),
          (c.globalCompositeOperation = "destination-out"),
          c.stroke(),
          (c.globalCompositeOperation = "source-over"))
      : ((c.strokeStyle = a), c.stroke());
  }
  function ic() {
    for (var c = 0; c < arguments.length; c++);
    c = arguments[0];
    for (var a = 1; a < arguments.length; a++) {
      var b = arguments[a],
        d;
      for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
    }
    return c;
  }
  function jc(c, a) {
    if ("string" === typeof a)
      switch (typeof c) {
        case "number":
          a = parseFloat(a);
          break;
        case "boolean":
          a = a && "0" !== a && "false" !== a;
      }
    return a;
  }
  A.create("Graphics", !0);
  var F = (function() {
      function c(a, b) {
        this.x = a;
        this.y = b;
      }
      c.prototype.bc = function(a) {
        return Math.sqrt(
          (a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y)
        );
      };
      c.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")";
      };
      c.prototype.bd = function(a) {
        return this.x === a.x && this.y === a.y;
      };
      c.prototype.clone = function() {
        return new c(this.x, this.y);
      };
      c.prototype.cr = function(a) {
        return new c(this.x - a.x, this.y - a.y);
      };
      c.prototype.at = function(a, b) {
        var d = a.x,
          e = a.y,
          c = this.x,
          h = this.y,
          k = b.x - d;
        b = b.y - e;
        var l = k * k + b * b;
        if (0 === l) return this.bc(a);
        a = ((c - d) * k + (h - e) * b) / l;
        1 < a ? (a = 1) : 0 > a && (a = 0);
        d = d + a * k - c;
        e = e + a * b - h;
        return Math.sqrt(d * d + e * e);
      };
      return c;
    })(),
    kc = (function() {
      function c(a, b) {
        this.width = a;
        this.height = b;
      }
      c.prototype.wD = function() {
        return new G(0, 0, this.width, this.height);
      };
      c.prototype.toString = function() {
        return "Size(" + this.width + "," + this.height + ")";
      };
      c.prototype.rt = function(a, b) {
        var d = 1;
        void 0 !== a && void 0 !== b
          ? (d = Math.min(a / this.width, b / this.height))
          : void 0 !== a
          ? (d = a / this.width)
          : void 0 !== b && (d = b / this.height);
        this.width *= d;
        this.height *= d;
        return d;
      };
      return c;
    })();
  function lc(c, a, b, d) {
    return Math.sqrt((c - b) * (c - b) + (a - d) * (a - d));
  }
  function mc(c, a, b, d) {
    var e = lc(c, a, b, d);
    return 0 === e ? { x: 1, y: 0 } : { x: (b - c) / e, y: (d - a) / e };
  }
  function nc(c) {
    c.x *= -1;
    c.y *= -1;
    return c;
  }
  var G = (function() {
    function c(a, b, d, e) {
      this.x = a;
      this.y = b;
      this.width = d;
      this.height = e;
      this.vv();
    }
    c.load = function(a) {
      return new c(a.x, a.y, a.width, a.height);
    };
    c.uh = function(a) {
      if (0 === a.length) return new c(0, 0, 0, 0);
      for (
        var b = a[0].x, d = a[0].x, e = a[0].y, f = a[0].y, h = 1;
        h < a.length;
        h++
      )
        a[h].x < b && (b = a[h].x),
          a[h].x > d && (d = a[h].x),
          a[h].y < e && (e = a[h].y),
          a[h].y > f && (f = a[h].y);
      return new c(b, e, d - b, f - e);
    };
    c.prototype.save = function() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    };
    c.prototype.clone = function() {
      return new c(this.x, this.y, this.width, this.height);
    };
    c.prototype.bd = function(a) {
      return (
        this.x === a.x &&
        this.y === a.y &&
        this.width === a.width &&
        this.height === a.height
      );
    };
    c.prototype.th = function(a) {
      a.x < this.x && ((this.width += this.x - a.x), (this.x = a.x));
      a.y < this.y && ((this.height += this.y - a.y), (this.y = a.y));
      a.x + a.width > this.x + this.width &&
        (this.width += a.x + a.width - this.x - this.width);
      a.y + a.height > this.y + this.height &&
        (this.height += a.y + a.height - this.y - this.height);
    };
    c.prototype.ku = function(a) {
      a.x > this.x && ((this.width -= a.x - this.x), (this.x = a.x));
      a.x + a.width < this.x + this.width &&
        (this.width -= this.x + this.width - a.x - a.width);
      a.y > this.y && ((this.height -= a.y - this.y), (this.y = a.y));
      a.y + a.height < this.y + this.height &&
        (this.height -= this.y + this.height - a.y - a.height);
    };
    c.prototype.qr = function(a, b) {
      a < this.x
        ? ((this.width += this.x - a), (this.x = a))
        : a > this.x + this.width && (this.width = a - this.x);
      b < this.y
        ? ((this.height += this.y - b), (this.y = b))
        : b > this.y + this.height && (this.height = b - this.y);
    };
    c.prototype.contains = function(a) {
      return (
        this.x <= a.x &&
        this.x + this.width > a.x + a.width &&
        this.y <= a.y &&
        this.y + this.height > a.y + a.height
      );
    };
    c.prototype.DB = function(a) {
      return this.x > a.x + a.width ||
        a.x > this.x + this.width ||
        this.y > a.y + a.height ||
        a.y > this.y + this.height
        ? !1
        : !0;
    };
    c.prototype.Mi = function() {
      return this.width * this.height;
    };
    c.prototype.bv = function(a) {
      return this.DB(a)
        ? (Math.min(this.right(), a.right()) - Math.max(this.x, a.x)) *
            (Math.min(this.bottom(), a.bottom()) - Math.max(this.y, a.y))
        : 0;
    };
    c.prototype.Lc = function(a, b, d) {
      void 0 === d && (d = 0);
      return (
        this.x - d <= a &&
        this.x + this.width + d > a &&
        this.y - d <= b &&
        this.y + this.height + d > b
      );
    };
    c.prototype.vv = function() {
      0 > this.width && ((this.x += this.width), (this.width = -this.width));
      0 > this.height &&
        ((this.y += this.height), (this.height = -this.height));
    };
    c.prototype.Ed = function(a, b) {
      void 0 === b && (b = a);
      this.x -= a / 2;
      this.y -= b / 2;
      this.width += a;
      this.height += b;
    };
    c.prototype.transform = function(a) {
      var b = a.apply(this.x, this.y);
      var d = a.apply(this.x + this.width, this.y);
      var e = a.apply(this.x + this.width, this.y + this.height);
      a = a.apply(this.x, this.y + this.height);
      this.x = Math.min(b.x, d.x, e.x, a.x);
      this.y = Math.min(b.y, d.y, e.y, a.y);
      this.width = Math.max(b.x, d.x, e.x, a.x) - this.x;
      this.height = Math.max(b.y, d.y, e.y, a.y) - this.y;
    };
    c.prototype.right = function() {
      return this.x + this.width;
    };
    c.prototype.bottom = function() {
      return this.y + this.height;
    };
    c.prototype.Qd = function() {
      return new F(this.x + this.width / 2, this.y + this.height / 2);
    };
    c.prototype.toString = function() {
      return (
        "Rectangle(" +
        this.x +
        ", " +
        this.y +
        ", " +
        this.width +
        ", " +
        this.height +
        ")"
      );
    };
    c.prototype.Rs = function(a) {
      var b = this.x,
        d = this.y;
      this.right() > a.right() && (this.x -= this.right() - a.right());
      this.bottom() > a.bottom() && (this.y -= this.bottom() - a.bottom());
      this.y < a.y && (this.y = a.y);
      this.x < a.x && (this.x = a.x);
      return { x: this.x - b, y: this.y - d };
    };
    return c;
  })();
  function oc(c) {
    return 0 !== c ? c : -Infinity === 1 / c ? -1e-11 : 1e-11;
  }
  var J = (function() {
      function c() {
        this.log = A.create("MATRIX");
        if (0 === arguments.length)
          (this.m11 = 1),
            (this.m21 = this.m12 = 0),
            (this.m22 = 1),
            (this.Ba = this.Aa = 0);
        else if (1 === arguments.length)
          if ("string" === typeof arguments[0]) {
            var a = arguments[0].match(/-?\d+\.?[\de\-]*/g);
            if (!a || 6 != a.length)
              throw Error("Bad initializer for matrix: " + arguments[0]);
            this.m11 = parseFloat(a[0]);
            this.m21 = parseFloat(a[1]);
            this.m12 = parseFloat(a[2]);
            this.m22 = parseFloat(a[3]);
            this.Aa = parseFloat(a[4]);
            this.Ba = parseFloat(a[5]);
          } else {
            if (6 !== arguments[0].length)
              throw "Bad array initializer for Matrix.";
            this.m11 = arguments[0][0];
            this.m12 = arguments[0][1];
            this.m21 = arguments[0][2];
            this.m22 = arguments[0][3];
            this.Aa = arguments[0][4];
            this.Ba = arguments[0][5];
          }
        else
          (this.m11 = arguments[0]),
            (this.m12 = arguments[1]),
            (this.m21 = arguments[2]),
            (this.m22 = arguments[3]),
            (this.Aa = arguments[4]),
            (this.Ba = arguments[5]);
      }
      c.prototype.toString = function() {
        return (
          "[ " +
          this.m11 +
          " " +
          this.m12 +
          " " +
          this.Aa +
          "    " +
          this.m21 +
          " " +
          this.m22 +
          " " +
          this.Ba +
          "    0 0 1 ]"
        );
      };
      c.prototype.qc = function() {
        return [this.m11, this.m12, this.m21, this.m22, this.Aa, this.Ba];
      };
      c.prototype.nu = function() {
        return (
          1 === this.m11 &&
          0 === this.m12 &&
          0 === this.m21 &&
          1 === this.m22 &&
          0 === this.Aa &&
          0 === this.Ba
        );
      };
      c.prototype.bd = function(a) {
        return (
          this.m11 === a.m11 &&
          this.m12 === a.m12 &&
          this.m21 === a.m21 &&
          this.m22 === a.m22 &&
          this.Aa === a.Aa &&
          this.Ba === a.Ba
        );
      };
      c.prototype.multiply = function(a) {
        var b = new c();
        b.m11 = oc(this.m11 * a.m11 + this.m12 * a.m21);
        b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
        b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
        b.m22 = oc(this.m21 * a.m12 + this.m22 * a.m22);
        b.Aa = this.m11 * a.Aa + this.m12 * a.Ba + this.Aa;
        b.Ba = this.m21 * a.Aa + this.m22 * a.Ba + this.Ba;
        if (!b.isFinite())
          throw Error(
            "Multiplied matrix has NaN values: " +
              b.Gf() +
              " after multiplying with " +
              a.Gf()
          );
        return b;
      };
      c.prototype.isFinite = function() {
        function a(a) {
          return isFinite(a) && "number" === typeof a;
        }
        return (
          a(this.m11) &&
          a(this.m12) &&
          a(this.m21) &&
          a(this.m22) &&
          a(this.Aa) &&
          a(this.Ba)
        );
      };
      c.prototype.apply = function(a, b) {
        return new F(
          this.m11 * a + this.m12 * b + this.Aa,
          this.m21 * a + this.m22 * b + this.Ba
        );
      };
      c.prototype.Ec = function(a, b) {
        void 0 === b && (b = !1);
        b
          ? a.setTransform(
              this.m11,
              this.m21,
              this.m12,
              this.m22,
              this.Aa,
              this.Ba
            )
          : a.transform(
              this.m11,
              this.m21,
              this.m12,
              this.m22,
              this.Aa,
              this.Ba
            );
      };
      c.prototype.clone = function() {
        return new c(this.m11, this.m12, this.m21, this.m22, this.Aa, this.Ba);
      };
      c.prototype.inverse = function() {
        var a = this.m11 * this.m22 - this.m12 * this.m21;
        return new c(
          this.m22 / a,
          -this.m12 / a,
          -this.m21 / a,
          this.m11 / a,
          (this.m12 * this.Ba - this.Aa * this.m22) / a,
          (this.Aa * this.m21 - this.m11 * this.Ba) / a
        );
      };
      c.prototype.qn = function() {
        var a = this.m11,
          b = this.m21,
          d = this.m12,
          e = this.m22,
          f = Math.sqrt(a * a + b * b),
          h = Math.sqrt(d * d + e * e);
        return new c(a / f, d / h, b / f, e / h, this.Aa, this.Ba);
      };
      c.prototype.Gb = function() {
        return new F(
          Math.sqrt(this.m11 * this.m11 + this.m21 * this.m21),
          Math.sqrt(this.m12 * this.m12 + this.m22 * this.m22)
        );
      };
      c.prototype.Gp = function() {
        return (
          1 === this.m11 && 1 === this.m22 && 0 === this.m12 && 0 === this.m21
        );
      };
      c.prototype.translate = function(a, b) {
        return this.multiply(new pc(a, b));
      };
      c.prototype.rotate = function(a, b, d) {
        return this.multiply(new qc(a, b, d));
      };
      c.prototype.Gf = function() {
        return (
          "matrix(" +
          this.m11 +
          ", " +
          this.m21 +
          ", " +
          this.m12 +
          ", " +
          this.m22 +
          ", " +
          this.Aa +
          ", " +
          this.Ba +
          ")"
        );
      };
      c.prototype.toJSON = function() {
        if (!this.isFinite())
          throw Error(
            "Tried to encode matrix with NaN/Inf values: " + this.Gf()
          );
        return this.Gf();
      };
      return c;
    })(),
    qc = (function(c) {
      function a(a, d, e) {
        var b = Math.cos(a);
        a = Math.sin(a);
        return (
          c.call(this, b, a, -a, b, -d * b - e * a + d, d * a - e * b + e) ||
          this
        );
      }
      __extends(a, c);
      return a;
    })(J),
    pc = (function(c) {
      function a(a, d) {
        return c.call(this, 1, 0, 0, 1, a, d) || this;
      }
      __extends(a, c);
      return a;
    })(J),
    rc = (function(c) {
      function a(a, d, e, f) {
        return void 0 === e || void 0 === f
          ? c.call(this, a, 0, 0, d, 0, 0) || this
          : c.call(this, a, 0, 0, d, e - a * e, f - d * f) || this;
      }
      __extends(a, c);
      return a;
    })(J),
    sc = (function(c) {
      function a(a, d, e) {
        var b = Math.cos(2 * a);
        a = Math.sin(2 * a);
        return (
          c.call(this, b, a, a, -b, -d * b - e * a + d, -d * a + e * b + e) ||
          this
        );
      }
      __extends(a, c);
      return a;
    })(J);
  function tc(c, a, b, d, e, f, h, k, l, n) {
    if (!(8 < ++tc.depth)) {
      var r = (a + d) / 2,
        v = (b + e) / 2,
        w = (d + f) / 2,
        x = (e + h) / 2,
        y = (f + k) / 2,
        B = (h + l) / 2,
        H = (r + w) / 2,
        M = (v + x) / 2;
      w = (w + y) / 2;
      x = (x + B) / 2;
      var I = (H + w) / 2,
        z = (M + x) / 2,
        E = k - a,
        R = l - b;
      d = Math.abs((d - k) * R - (e - l) * E);
      f = Math.abs((f - k) * R - (h - l) * E);
      (d + f) * (d + f) < n * (E * E + R * R)
        ? c.push(new F(I, z))
        : (tc(c, a, b, r, v, H, M, I, z, n), tc(c, I, z, w, x, y, B, k, l, n));
    }
    --tc.depth;
  }
  (tc || (tc = {})).depth = 0;
  function uc(c, a, b, d, e, f, h, k) {
    if (!(8 < ++tc.depth)) {
      var l = (a + d) / 2,
        n = (b + e) / 2,
        r = (d + f) / 2,
        v = (e + h) / 2,
        w = (l + r) / 2,
        x = (n + v) / 2,
        y = f - a,
        B = h - b;
      d = Math.abs((d - f) * B - (e - h) * y);
      d * d <= k * (y * y + B * B)
        ? c.push(new F(w, x))
        : (uc(c, a, b, l, n, w, x, k), uc(c, w, x, r, v, f, h, k));
    }
    --tc.depth;
  }
  function vc(c, a, b) {
    var d,
      e = !1,
      f = c.length;
    1 < f && c[f - 1].x === c[0].x && c[f - 1].y === c[0].y && --f;
    if (3 > f) return !1;
    var h = c[f - 1].x;
    var k = c[f - 1].y;
    for (d = 0; d < f; d++) {
      var l = c[d].x;
      var n = c[d].y;
      if (l > h) {
        var r = h;
        var v = l;
        var w = k;
        k = n;
      } else (r = l), (v = h), (w = n);
      l < a === a <= h && (b - w) * (v - r) < (k - w) * (a - r) && (e = !e);
      h = l;
      k = n;
    }
    return e;
  }
  function wc(c, a, b, d) {
    d *= d;
    for (var e = 1; e < c.length; e++) {
      var f = c[e - 1].x,
        h = c[e - 1].y,
        k = c[e].x - f,
        l = c[e].y - h,
        n = ((a - f) * k + (b - h) * l) / (k * k + l * l);
      1 < n ? (n = 1) : 0 > n && (n = 0);
      f = f + n * k - a;
      h = h + n * l - b;
      if (f * f + h * h <= d) return !0;
    }
    return !1;
  }
  (function() {
    function c(a) {
      this.image = a;
    }
    c.prototype.clear = function() {
      for (var a = 0; a < this.image.width * this.image.height * 4; a++)
        this.image.data[a] = 0;
    };
    c.prototype.getImageData = function() {
      return this.image;
    };
    c.prototype.width = function() {
      return this.image.width;
    };
    c.prototype.height = function() {
      return this.image.height;
    };
    c.prototype.get = function(a, b) {
      a = this.image.width * b * 4 + 4 * a;
      return (
        this.image.data[a] |
        (this.image.data[a + 1] << 8) |
        (this.image.data[a + 2] << 16) |
        (this.image.data[a + 3] << 24)
      );
    };
    c.prototype.set = function(a, b, d) {
      a = this.image.width * b * 4 + 4 * a;
      this.image.data[a] = d & 255;
      this.image.data[a + 1] = (d >> 8) & 255;
      this.image.data[a + 2] = (d >> 16) & 255;
      this.image.data[a + 3] = (d >> 24) & 255;
    };
    return c;
  })();
  (function() {
    function c(a, b) {
      this.data = [];
      this.Eh = a;
      this.Ok = b;
      this.data = [];
    }
    c.prototype.width = function() {
      return this.Eh;
    };
    c.prototype.height = function() {
      return this.Ok;
    };
    c.prototype.getImageData = function() {
      var a = document.createElement("canvas");
      a.width = this.Eh;
      a.height = this.Ok;
      a = a.getContext("2d").getImageData(0, 0, this.Eh, this.Ok);
      for (var b = this.Eh * this.Ok, d = 0; d < b; d++) {
        var e = !0 === this.data[d] ? 255 : 0;
        a.data[4 * d] = e;
        a.data[4 * d + 1] = e;
        a.data[4 * d + 2] = e;
        a.data[4 * d + 3] = 255;
      }
      return a;
    };
    c.prototype.get = function(a, b) {
      return !0 === this.data[this.Eh * b + a];
    };
    c.prototype.set = function(a, b, d) {
      this.data[this.Eh * b + a] = d;
    };
    return c;
  })();
  var K = (function() {
    function c(a) {
      this.closed = !1;
      this.fa = [];
      a instanceof G && this.rect(a.x, a.y, a.width, a.height);
    }
    c.prototype.clear = function() {
      this.closed = !1;
      this.fa = [];
    };
    c.prototype.beginPath = function() {};
    c.prototype.rect = function(a, b, d, e) {
      this.moveTo(a, b);
      this.lineTo(a + d, b);
      this.lineTo(a + d, b + e);
      this.lineTo(a, b + e);
      this.lineTo(a, b);
      this.closePath();
    };
    c.prototype.moveTo = function(a, b) {
      this.fa.push(c.Wc, a, b);
    };
    c.prototype.lineTo = function(a, b) {
      this.fa.push(c.pd, a, b);
    };
    c.prototype.bezierCurveTo = function(a, b, d, e, f, h) {
      this.fa.push(c.Jf, a, b, d, e, f, h);
    };
    c.prototype.quadraticCurveTo = function(a, b, d, e) {
      this.fa.push(c.Lf, a, b, d, e);
    };
    c.prototype.arc = function() {};
    c.prototype.arcTo = function() {};
    c.prototype.closePath = function() {
      this.fa.push(c.nd);
    };
    c.prototype.la = function(a) {
      for (var b = 0; b < this.fa.length; ) {
        switch (this.fa[b]) {
          case c.Wc:
            a.moveTo && a.moveTo(this.fa[b + 1], this.fa[b + 2]);
            break;
          case c.pd:
            a.lineTo && a.lineTo(this.fa[b + 1], this.fa[b + 2]);
            break;
          case c.Jf:
            a.bezierCurveTo &&
              a.bezierCurveTo(
                this.fa[b + 1],
                this.fa[b + 2],
                this.fa[b + 3],
                this.fa[b + 4],
                this.fa[b + 5],
                this.fa[b + 6]
              );
            break;
          case c.Lf:
            a.quadraticCurveTo &&
              a.quadraticCurveTo(
                this.fa[b + 1],
                this.fa[b + 2],
                this.fa[b + 3],
                this.fa[b + 4]
              );
            break;
          case c.nd:
            a.closePath && a.closePath();
            break;
          default:
            alert("Error!");
        }
        b += c.rd[this.fa[b]];
      }
    };
    c.prototype.lC = function() {
      for (var a = 0, b = 0, d = 0, e = []; a < this.fa.length; ) {
        switch (this.fa[a]) {
          case c.nd:
            e.push([c.nd]);
            break;
          case c.Wc:
            b = this.fa[a + 1];
            d = this.fa[a + 2];
            break;
          case c.pd:
            e.push([c.pd, b, d]);
            b = this.fa[a + 1];
            d = this.fa[a + 2];
            break;
          case c.Jf:
            e.push([
              c.Jf,
              this.fa[a + 3],
              this.fa[a + 4],
              this.fa[a + 1],
              this.fa[a + 2],
              b,
              d,
            ]);
            b = this.fa[a + 5];
            d = this.fa[a + 6];
            break;
          case c.Lf:
            e.push([c.Lf, this.fa[a + 1], this.fa[a + 2], b, d]),
              (b = this.fa[a + 3]),
              (d = this.fa[a + 4]);
        }
        a += c.rd[this.fa[a]];
      }
      this.fa.length && e.push([c.Wc, b, d]);
      a = new c();
      for (b = e.length - 1; 0 <= b; b--)
        Array.prototype.push.apply(a.fa, e[b]);
      a.closed = this.closed;
      return a;
    };
    c.prototype.Qe = function() {
      for (var a = 0, b, d = [], e = [d]; a < this.fa.length; ) {
        var f = c.Nr[this.fa[a]];
        this.fa[a] === c.Wc && 0 < d.length && ((d = []), e.push(d));
        for (b = 0; b < f; b++)
          d.push(new F(this.fa[a + 1 + 2 * b], this.fa[a + 1 + 2 * b + 1]));
        a += c.rd[this.fa[a]];
      }
      return e;
    };
    c.prototype.transform = function(a) {
      for (var b = 0, d, e; b < this.fa.length; ) {
        e = c.Nr[this.fa[b]];
        for (d = 0; d < e; d++) {
          var f = a.apply(this.fa[b + 1 + 2 * d], this.fa[b + 1 + 2 * d + 1]);
          this.fa[b + 1 + 2 * d] = f.x;
          this.fa[b + 1 + 2 * d + 1] = f.y;
        }
        b += c.rd[this.fa[b]];
      }
    };
    c.prototype.clone = function() {
      var a = new c();
      a.fa = this.fa.concat();
      return a;
    };
    c.prototype.gl = function(a) {
      for (
        var b = 0,
          d,
          e = (d = 0),
          f = new G(this.fa[1] || 0, this.fa[2] || 0, 0, 0),
          h;
        b < this.fa.length;

      ) {
        switch (this.fa[b]) {
          case c.Wc:
          case c.pd:
            d = this.fa[b + 1];
            e = this.fa[b + 2];
            f.qr(d, e);
            break;
          case c.Jf:
            var k = (h = []),
              l = this.fa[b + 5],
              n = this.fa[b + 6];
            tc(
              k,
              d,
              e,
              this.fa[b + 1],
              this.fa[b + 2],
              this.fa[b + 3],
              this.fa[b + 4],
              l,
              n,
              a * a
            );
            k.push(new F(l, n));
            for (d = 0; d < h.length; d++) f.qr(h[d].x, h[d].y);
            d = this.fa[b + 5];
            e = this.fa[b + 6];
            break;
          case c.Lf:
            k = h = [];
            l = this.fa[b + 3];
            n = this.fa[b + 4];
            uc(k, d, e, this.fa[b + 1], this.fa[b + 2], l, n, a * a);
            k.push(new F(l, n));
            for (d = 0; d < h.length; d++) f.qr(h[d].x, h[d].y);
            d = this.fa[b + 3];
            e = this.fa[b + 4];
        }
        b += c.rd[this.fa[b]];
      }
      return f;
    };
    c.prototype.append = function(a) {
      this.fa = this.fa.concat(a.fa);
    };
    c.prototype.ln = function(a) {
      for (var b = 0, d = 0, e = 0, f = new c(), h; b < this.fa.length; ) {
        switch (this.fa[b]) {
          case c.Wc:
            d = this.fa[b + 1];
            e = this.fa[b + 2];
            f.moveTo(d, e);
            break;
          case c.pd:
            d = this.fa[b + 1];
            e = this.fa[b + 2];
            f.lineTo(d, e);
            break;
          case c.Jf:
            var k = (h = []),
              l = this.fa[b + 5],
              n = this.fa[b + 6];
            tc(
              k,
              d,
              e,
              this.fa[b + 1],
              this.fa[b + 2],
              this.fa[b + 3],
              this.fa[b + 4],
              l,
              n,
              a * a
            );
            k.push(new F(l, n));
            2 === h.length &&
              1e-4 >
                d * (h[0].y - h[1].y) +
                  h[0].x * (h[1].y - e) +
                  h[1].x * (e - h[0].y) &&
              ((h[0] = h[1]), (h.length = 1));
            for (d = 0; d < h.length; d++) f.lineTo(h[d].x, h[d].y);
            d = this.fa[b + 5];
            e = this.fa[b + 6];
            break;
          case c.Lf:
            k = h = [];
            l = this.fa[b + 3];
            n = this.fa[b + 4];
            uc(k, d, e, this.fa[b + 1], this.fa[b + 2], l, n, a * a);
            k.push(new F(l, n));
            for (d = 0; d < h.length; d++) f.lineTo(h[d].x, h[d].y);
            d = this.fa[b + 3];
            e = this.fa[b + 4];
            break;
          case c.nd:
            f.closePath();
        }
        b += c.rd[this.fa[b]];
      }
      return f;
    };
    c.prototype.PB = function(a, b, d) {
      void 0 === d && (d = 0);
      for (var e = 0, c = this.Qe(); e < c.length; e++)
        if (vc(c[e], a, b)) return !0;
      return 0 < d && this.hv(a, b, d);
    };
    c.prototype.hv = function(a, b, d) {
      var e = 0,
        f = 0,
        h = 0;
      for (d *= d; h < this.fa.length; ) {
        switch (this.fa[h]) {
          case c.Wc:
            e = this.fa[h + 1];
            f = this.fa[h + 2];
            break;
          case c.pd:
            var k = this.fa[h + 1];
            var l = this.fa[h + 2];
            var n = k - e;
            var r = l - f;
            var v = n * n + r * r;
            v = ((a - e) * n + (b - f) * r) / v;
            1 < v ? (v = 1) : 0 > v && (v = 0);
            e += v * n;
            r = f + v * r;
            f = e - a;
            r -= b;
            f = f * f + r * r;
            if (f <= d) return !0;
            e = k;
            f = l;
        }
        h += c.rd[this.fa[h]];
      }
      return !1;
    };
    c.prototype.wl = function(a, b) {
      for (
        var d = 0, e = 0, f = b[0], h, k = new F(0, 0), l;
        d < this.fa.length;

      ) {
        switch (this.fa[d]) {
          case c.Wc:
            l = this.fa[d + 1];
            h = this.fa[d + 2];
            a.moveTo(l, h);
            k = new F(l, h);
            break;
          case c.pd:
            l = this.fa[d + 1];
            var n = (h = this.fa[d + 2]),
              r = new F(l, n);
            h = k.bc(r);
            if (!(0 >= h || 0 > f)) {
              for (; h > f; )
                (k.x += ((r.x - k.x) * f) / h),
                  (k.y += ((r.y - k.y) * f) / h),
                  e & 1 ? a.moveTo(k.x, k.y) : a.lineTo(k.x, k.y),
                  (h -= f),
                  (e = (e + 1) % b.length),
                  (f = b[e]);
              h <= f &&
                ((k = new F(l, n)),
                e & 1 ? a.moveTo(k.x, k.y) : a.lineTo(k.x, k.y),
                (f -= h));
            }
        }
        d += c.rd[this.fa[d]];
      }
    };
    c.prototype.Mi = function() {
      function a(a, b) {
        f -= (a - d) * (b + e);
        d = a;
        e = b;
      }
      for (var b = 0, d, e, f = 0; b < this.fa.length; ) {
        switch (this.fa[b]) {
          case c.Wc:
            d = this.fa[b + 1];
            e = this.fa[b + 2];
            break;
          case c.pd:
            a(this.fa[b + 1], this.fa[b + 2]);
            break;
          case c.Jf:
            a(this.fa[b + 5], this.fa[b + 6]);
            break;
          case c.Lf:
            a(this.fa[b + 3], this.fa[b + 4]);
        }
        b += c.rd[this.fa[b]];
      }
      return f / 2;
    };
    c.prototype.ht = function(a) {
      for (var b = 0, d = 0, e = 0, f = !1; b < this.fa.length; ) {
        switch (this.fa[b]) {
          case c.Wc:
            d = this.fa[b + 1];
            e = this.fa[b + 2];
            f = !0;
            break;
          case c.pd:
            a(d, e, this.fa[b + 1], this.fa[b + 2], f),
              (d = this.fa[b + 1]),
              (e = this.fa[b + 2]),
              (f = !1);
        }
        b += c.rd[this.fa[b]];
      }
    };
    c.prototype.Gx = function() {
      var a = 0;
      this.ht(function(b, d, e, c) {
        a += lc(b, d, e, c);
      });
      return a;
    };
    c.prototype.Kx = function(a) {
      var b = new c(),
        d = 0;
      this.ht(function(e, c, h, k, l) {
        if (d <= a) {
          l && b.moveTo(e, c);
          l = lc(e, c, h, k);
          if (d + l >= a) {
            var f = a - d;
            h = e + ((h - e) * f) / l;
            k = c + ((k - c) * f) / l;
          }
          d += l;
          b.lineTo(h, k);
        }
      });
      return b;
    };
    c.Wc = 0;
    c.pd = 1;
    c.Jf = 2;
    c.Lf = 3;
    c.nd = 4;
    c.rd = [3, 3, 7, 5, 1];
    c.Nr = [1, 1, 3, 2, 0];
    return c;
  })();
  function xc(c, a, b, d, e, f, h) {
    void 0 === h && (h = f);
    0 === f && 0 === h
      ? c.rect(a, b, d, e)
      : ((d = a + d),
        (e = b + e),
        c.moveTo(a + f, b),
        c.lineTo(d - f, b),
        c.quadraticCurveTo(d, b, d, b + h),
        c.lineTo(d, e - h),
        c.quadraticCurveTo(d, e, d - f, e),
        c.lineTo(a + f, e),
        c.quadraticCurveTo(a, e, a, e - h),
        c.lineTo(a, b + h),
        c.quadraticCurveTo(a, b, a + f, b),
        c.closePath());
  }
  function yc(c, a, b, d, e) {
    var f;
    if (2 >= d - b) e.push(c[b]);
    else {
      var h = c[b],
        k = c[d - 1],
        l = 0,
        n = 0;
      for (f = b + 1; f < d; f++) {
        var r = c[f].at(h, k);
        r > l && ((l = r), (n = f));
      }
      0 < n && l > a ? (yc(c, a, b, n, e), yc(c, a, n, d, e)) : e.push(h);
    }
  }
  function zc(c, a) {
    var b = [];
    yc(c, a, 0, c.length, b);
    0 < c.length &&
      0 < b.length &&
      !c[c.length - 1].bd(b[b.length - 1]) &&
      b.push(c[c.length - 1]);
    return b;
  }
  var Ac = (function() {
    function c() {
      this.oa = [];
      if (1 === arguments.length) {
        var a = arguments[0];
        if (a instanceof G)
          this.oa.push(new F(a.x, a.y)),
            this.oa.push(new F(a.right(), a.y)),
            this.oa.push(new F(a.right(), a.bottom())),
            this.oa.push(new F(a.x, a.bottom()));
        else if (a instanceof Array) this.oa = a;
        else
          throw (alert("Bad parameter passed to Polygon() constructor."),
          "Error");
      }
    }
    c.prototype.BA = function(a) {
      var b = this.Qe();
      a = a.Qe();
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (!vc(a, e.x, e.y)) return !1;
      }
      return !0;
    };
    c.prototype.transform = function(a) {
      for (var b = 0; b < this.oa.length; b++)
        this.oa[b] = a.apply(this.oa[b].x, this.oa[b].y);
    };
    c.prototype.add = function(a, b) {
      this.oa.push(new F(a, b));
    };
    c.prototype.Lc = function(a, b, d) {
      void 0 === d && (d = 0);
      return vc(this.oa, a, b) || (d && wc(this.oa, a, b, d));
    };
    c.prototype.Is = function() {
      return G.uh(this.oa);
    };
    c.prototype.clone = function() {
      return new c(this.oa.slice(0));
    };
    c.prototype.bd = function(a) {
      if (this.oa.length !== a.oa.length) return !1;
      for (var b = 0; b < this.oa.length; b++) {
        var d = this.oa[b],
          e = a.oa[b];
        if (d.x !== e.x || d.y !== e.y) return !1;
      }
      return !0;
    };
    c.prototype.Ed = function(a) {
      for (var b = [], d = 0; d < this.oa.length; d++) {
        var e = this.oa[0 === d ? this.oa.length - 1 : d - 1],
          c = this.oa[d],
          h = this.oa[d === this.oa.length - 1 ? 0 : d + 1],
          k = lc(e.x, e.y, c.x, c.y),
          l = lc(h.x, h.y, c.x, c.y);
        b.push({
          x: c.x + (((c.x - e.x) / k + (c.x - h.x) / l) / Math.sqrt(2)) * a,
          y: c.y + (((c.y - e.y) / k + (c.y - h.y) / l) / Math.sqrt(2)) * a,
        });
      }
      this.oa = b;
    };
    c.prototype.la = function(a) {
      if (!(1 > this.oa.length)) {
        a.moveTo(this.oa[0].x, this.oa[0].y);
        for (var b = 1; b < this.oa.length; b++)
          a.lineTo(this.oa[b].x, this.oa[b].y);
        a.closePath();
      }
    };
    c.prototype.Qe = function() {
      return this.oa;
    };
    c.kE = function(a, b) {
      for (var d = 0, e = 0, c = !1, h = [], k = [], l = 0; l < b.length; l++)
        k.push(0);
      for (;;) {
        var n = 0,
          r = -1;
        for (l = 0; l < b.length; l++)
          if (k[l] < b[l].length) {
            var v = b[l][k[l]];
            if (0 === l || v < n) {
              n = v;
              r = l;
              var w = 1 - (k[l] % 2);
            }
          }
        if (-1 === r) return h;
        k[r] += 1;
        "intersection" === a
          ? w
            ? ((e += 1), e === b.length && (d = n))
            : (e === b.length && (h.push(d), h.push(n)), --e)
          : w
          ? ((e += 1),
            0 === r
              ? ((c = !0), 1 === e) && (d = n)
              : c && 2 === e && (h.push(d), h.push(n)))
          : (c && 1 === e && (h.push(d), h.push(n)),
            --e,
            0 === r && (c = !1),
            c && 1 === e && (d = n));
      }
    };
    return c;
  })();
  function Bc(c) {
    var a = [],
      b = 0;
    for (c = c.split(","); b < c.length; b++) {
      var d = parseFloat(c[b]);
      isNaN(d) || a.push(d);
    }
    return a;
  }
  function Cc(c, a, b) {
    if (0 !== a.length)
      if ((c.moveTo(a[0].x, a[0].y), 0 === b.length))
        for (b = 1; b < a.length; b++) c.lineTo(a[b].x, a[b].y);
      else
        for (var d = 0, e = 1, f = b[0], h = a[0].clone(), k; e < a.length; )
          (k = h.bc(a[e])),
            0 === k
              ? (e += 1)
              : k <= f
              ? ((h = a[e].clone()),
                d & 1 ? c.moveTo(h.x, h.y) : c.lineTo(h.x, h.y),
                (f -= k),
                (e += 1))
              : ((h.x += ((a[e].x - h.x) * f) / k),
                (h.y += ((a[e].y - h.y) * f) / k),
                d & 1 ? c.moveTo(h.x, h.y) : c.lineTo(h.x, h.y),
                (d = (d + 1) % b.length),
                (f = b[d]));
  }
  function Dc(c, a, b, d, e, f, h, k) {
    b -= c;
    d -= a;
    h -= e;
    k -= f;
    var l = -h * d + b * k;
    if (0 === l) return null;
    e = (h * (a - f) - k * (c - e)) / l;
    return new F(c + e * b, a + e * d);
  }
  function Ec(c, a) {
    function b(a) {
      var b, e;
      var c = [];
      var l = (b = 0);
      for (e = a.length; l < e; l++) {
        var n = a[l];
        a[b + 1] && (c[b] = d(n, a[b + 1]));
        b += 1;
      }
      return c;
    }
    function d(a, b) {
      return new F(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2);
    }
    return a
      ? Ec(
          b(
            b(
              (function(a) {
                var b, e;
                a = [a[0]].concat(a).concat(a[a.length - 1]);
                var c = [];
                var l = (b = 0);
                for (e = a.length; l < e; l++) {
                  var n = a[l];
                  c[2 * b] = n;
                  a[b + 1] && (c[2 * b + 1] = d(n, a[b + 1]));
                  b += 1;
                }
                return c;
              })(c)
            )
          ),
          a - 1
        )
      : c;
  }
  function Fc(c, a) {
    var b = 0,
      d = 0,
      e = 0,
      f = 0,
      h = 0,
      k = 0;
    Gc(a, function(a, n) {
      switch (a) {
        case "M":
          for (var l = 0; l < n.length; l += 2)
            (b = n[l]),
              (d = n[l + 1]),
              0 == l ? (c.moveTo(b, d), (h = b), (k = d)) : c.lineTo(b, d);
          break;
        case "m":
          for (l = 0; l < n.length; l += 2)
            (b += n[l]),
              (d += n[l + 1]),
              0 == l ? (c.moveTo(b, d), (h = b), (k = d)) : c.lineTo(b, d);
          break;
        case "L":
          for (l = 0; l < n.length; l += 2)
            (b = n[l]), (d = n[l + 1]), c.lineTo(n[l], n[l + 1]);
          break;
        case "l":
          for (l = 0; l < n.length; l += 2)
            (b += n[l]), (d += n[l + 1]), c.lineTo(b, d);
          break;
        case "H":
          for (l = 0; l < n.length; l++) (b = n[l]), c.lineTo(b, d);
          break;
        case "h":
          for (l = 0; l < n.length; l++) (b += n[l]), c.lineTo(b, d);
          break;
        case "V":
          for (l = 0; l < n.length; l++) (d = n[l]), c.lineTo(b, d);
          break;
        case "v":
          for (l = 0; l < n.length; l++) (d += n[l]), c.lineTo(b, d);
          break;
        case "Q":
          for (l = 0; l < n.length; l += 4)
            (e = n[l]),
              (f = n[l + 1]),
              (b = n[l + 2]),
              (d = n[l + 3]),
              c.quadraticCurveTo(e, f, b, d);
          break;
        case "q":
          for (l = 0; l < n.length; l += 4)
            (e = n[l] + b),
              (f = n[l + 1] + d),
              (b = n[l + 2] + b),
              (d = n[l + 3] + d),
              c.quadraticCurveTo(e, f, b, d);
          break;
        case "C":
          for (l = 0; l < n.length; l += 6)
            (e = n[l + 2]),
              (f = n[l + 3]),
              (b = n[l + 4]),
              (d = n[l + 5]),
              c.bezierCurveTo(n[l], n[l + 1], e, f, b, d);
          break;
        case "c":
          for (l = 0; l < n.length; l += 6) {
            var v = n[l] + b,
              w = n[l + 1] + d;
            e = n[l + 2] + b;
            f = n[l + 3] + d;
            b = n[l + 4] + b;
            d = n[l + 5] + d;
            c.bezierCurveTo(v, w, e, f, b, d);
          }
          break;
        case "S":
          for (l = 0; l < n.length; l += 4)
            (v = b + b - e),
              (w = d + d - f),
              c.bezierCurveTo(v, w, n[l], n[l + 1], n[l + 2], n[l + 3]),
              (e = n[l]),
              (f = n[l + 1]),
              (b = n[l + 2]),
              (d = n[l + 3]);
          break;
        case "s":
          for (l = 0; l < n.length; l += 4)
            (v = b + b - e),
              (w = d + d - f),
              c.bezierCurveTo(
                v,
                w,
                n[l] + b,
                n[l + 1] + d,
                n[l + 2] + b,
                n[l + 3] + d
              ),
              (e = n[l] + b),
              (f = n[l + 1] + d),
              (b = n[l + 2] + b),
              (d = n[l + 3] + d);
          break;
        case "A":
        case "a":
          for (l = 0; l < n.length; l += 7) {
            var x = n[l + 1];
            v = n[l + 2] / Math.PI;
            var y = 1 === n[l + 3];
            var B = 1 === n[l + 4];
            w = n[l + 5];
            var H = n[l + 6];
            "a" == a && ((w += b), (H += d));
            var M = Math.abs(x);
            var I = (b - w) / 2;
            var z = (d - H) / 2;
            var E = Math.cos(v) * I + Math.sin(v) * z;
            I = -Math.sin(v) * I + Math.cos(v) * z;
            z = M * M;
            var R = x * x,
              na = E * E,
              la = I * I,
              Ea = na / z + la / R;
            1 < Ea &&
              ((z = Math.sqrt(Ea)),
              (M *= z),
              (x *= z),
              (z = M * M),
              (R = x * x));
            na = z * la + R * na;
            z = Math.sqrt(Math.max(0, (z * R - na) / na));
            y == B && (z = -z);
            R = (z * M * I) / x;
            la = (-z * x * E) / M;
            na = Math.cos(v) * R - Math.sin(v) * la + (b + w) / 2;
            z = Math.sin(v) * R + Math.cos(v) * la + (d + H) / 2;
            y = Hc(1, 0, (E - R) / M, (I - la) / x);
            I = Hc((E - R) / M, (I - la) / x, (-E - R) / M, (-I - la) / x);
            B || (I -= 2 * Math.PI);
            I %= 2 * Math.PI;
            B = na;
            E = z;
            c.translate(B, E);
            c.scale(M, x);
            c.rotate(v);
            c.arc(0, 0, 1, y, y + I, 0 > I);
            c.rotate(-v);
            c.scale(1 / M, 1 / x);
            c.translate(-B, -E);
            b = w;
            d = H;
          }
          break;
        case "Z":
        case "z":
          c.closePath();
          b = h;
          d = k;
          break;
        default:
          throw Error("Unknown draw command: " + a);
      }
      switch (a) {
        case "C":
        case "c":
        case "S":
        case "s":
          break;
        default:
          (e = b), (f = d);
      }
    });
  }
  function Gc(c, a) {
    function b() {
      if (0 <= h) {
        var a = parseFloat(c.substr(h, h + f));
        if (isNaN(a))
          throw Error(
            "Error parsing number: " + c.substr(h, h + f) + " in " + c
          );
        e.push(a);
        h = -1;
        l = k = !1;
      }
    }
    for (var d = "", e = [], f = 0, h = -1, k = !1, l = !1; f < c.length; f++) {
      var n = c[f];
      if ((0 < h && "-" == n && !l) || (k && "." == n)) b(), (h = f);
      else if (
        ("0" <= n && "9" >= n) ||
        "-" == n ||
        "+" == n ||
        (0 <= h && ("E" == n || "e" == n)) ||
        "." == n
      )
        if ((-1 == h && (h = f), "." == n)) k = !0;
        else {
          if ("e" === n || "E" === n) l = !0;
        }
      else
        ("A" <= n && "Z" >= n) || ("a" <= n && "z" >= n)
          ? (b(), "" != d && (a(d, e), (e = []), (d = "")), (d = n))
          : b();
    }
    b();
    "" != d && a(d, e);
  }
  function Hc(c, a, b, d) {
    var e = (c * b + a * d) / (lc(0, 0, c, a) * lc(0, 0, b, d));
    e = Math.acos(-1 > e ? -1 : 1 < e ? 1 : e);
    0 > c * d - a * b && (e = -e);
    return e;
  }
  (function() {
    function c() {
      this.items = [];
      this.ua = new J();
    }
    c.prototype.toString = function() {
      return this.items.join(" ");
    };
    c.prototype.arc = function() {
      throw Error("SvgPathContext.arc is not implemented.");
    };
    c.prototype.arcTo = function() {
      throw Error("SvgPathContext.arcTo is not implemented.");
    };
    c.prototype.moveTo = function(a, b) {
      a = this.ua.apply(a, b);
      this.items.push("M", a.x, a.y);
    };
    c.prototype.lineTo = function(a, b) {
      a = this.ua.apply(a, b);
      this.items.push("L", a.x, a.y);
    };
    c.prototype.transform = function(a, b, d, e, c, h) {
      a = new J(a, d, b, e, c, h);
      this.ua = this.ua.multiply(a);
    };
    c.prototype.rect = function() {};
    c.prototype.bezierCurveTo = function(a, b, d, e, c, h) {
      a = this.ua.apply(a, b);
      d = this.ua.apply(d, e);
      c = this.ua.apply(c, h);
      this.items.push("C", a.x, a.y, d.x, d.y, c.x, c.y);
    };
    c.prototype.quadraticCurveTo = function() {
      throw Error("SvgPathContext.quadraticCurveTo is not implemented.");
    };
    c.prototype.beginPath = function() {};
    c.prototype.closePath = function() {
      this.items.push("Z");
    };
    return c;
  })();
  function Ic(c, a, b, d, e) {
    for (var f = 0; f < a.length; f++) {
      var h = a[f];
      if (!(2 > h.length)) {
        void 0 === d && (d = !0);
        void 0 === e && (e = !0);
        var k = h[0].x === h[h.length - 1].x && h[0].y === h[h.length - 1].y,
          l = [],
          n = [],
          r = new F(0, 0),
          v = r,
          w = r,
          x = r,
          y = r,
          B = [],
          H = b / 2,
          M;
        for (M = 1; M < h.length; M++) {
          w = h[M - 1];
          y = h[M];
          x = mc(w.x, w.y, y.x, y.y);
          r = new F(x.y, -x.x);
          v = new F(w.x - x.x * H - r.x * H, w.y - x.y * H - r.y * H);
          w = new F(w.x - x.x * H + r.x * H, w.y - x.y * H + r.y * H);
          if (n.length) {
            var I = n[n.length - 1];
            var z = B[B.length - 1];
            v =
              Dc(
                I.x,
                I.y,
                I.x + z.x,
                I.y + z.y,
                v.x,
                v.y,
                v.x + x.x,
                v.y + x.y
              ) || v;
            I = l[l.length - 1];
            w =
              Dc(
                I.x,
                I.y,
                I.x + z.x,
                I.y + z.y,
                w.x,
                w.y,
                w.x + x.x,
                w.y + x.y
              ) || w;
          }
          n.push(v);
          l.push(w);
          B.push(x);
        }
        k
          ? ((I = n[0]),
            (z = B[0]),
            (v =
              Dc(
                I.x,
                I.y,
                I.x + z.x,
                I.y + z.y,
                v.x,
                v.y,
                v.x + x.x,
                v.y + x.y
              ) || v),
            (I = l[0]),
            (w =
              Dc(
                I.x,
                I.y,
                I.x + z.x,
                I.y + z.y,
                w.x,
                w.y,
                w.x + x.x,
                w.y + x.y
              ) || w),
            (n[0].x = v.x),
            (n[0].y = v.y),
            (l[0].x = w.x),
            (l[0].y = w.y),
            n.push(v),
            l.push(w))
          : (n.push(new F(y.x + x.x * H - r.x * H, y.y + x.y * H - r.y * H)),
            l.push(new F(y.x + x.x * H + r.x * H, y.y + x.y * H + r.y * H)));
        if (e) {
          c.moveTo(n[0].x, n[0].y);
          for (M = 1; M < n.length; M++) c.lineTo(n[M].x, n[M].y);
          k && (c.closePath(), c.moveTo(l[l.length - 1].x, l[l.length - 1].y));
        } else d && c.moveTo(l[l.length - 1].x, l[l.length - 1].y);
        if (d) {
          for (M = l.length - 1; 0 <= M; M--) c.lineTo(l[M].x, l[M].y);
          !k && e && c.lineTo(n[0].x, n[0].y);
        }
      }
    }
  }
  (function() {
    function c(a) {
      this.oa = a;
      this.n = 0;
      this.Lb = new F(0, 0);
    }
    c.prototype.next = function(a) {
      if (0 === this.oa.length) return null;
      if (0 === this.n)
        return (this.Lb = this.oa[0].clone()), (this.n += 1), this.Lb.clone();
      for (; this.n < this.oa.length; ) {
        var b = this.Lb.bc(this.oa[this.n]);
        if (0 === b) this.n += 1;
        else if (b <= a) (a -= b), (this.n += 1);
        else
          return (
            (this.Lb.x += ((this.oa[this.n].x - this.Lb.x) * a) / b),
            (this.Lb.y += ((this.oa[this.n].y - this.Lb.y) * a) / b),
            this.Lb.clone()
          );
      }
      return null;
    };
    return c;
  })();
  var Jc = (function() {
    function c() {
      this.path = [];
    }
    c.prototype.sg = function(a, b) {
      (0 < this.path.length &&
        a === this.path[this.path.length - 1].x &&
        b === this.path[this.path.length - 1].y) ||
        this.path.push(new F(a, b));
    };
    c.prototype.op = function() {
      return this.path;
    };
    return c;
  })();
  function Kc(c, a) {
    c.length > a && (c = c.slice(c.length - a));
    return c;
  }
  var Lc = (function(c) {
    function a() {
      var a = (null !== c && c.apply(this, arguments)) || this;
      a.sk = [];
      a.order = 3;
      a.dr = 3;
      a.Hv = Math.pow(2, a.order);
      a.sampleSize = a.dr + 1;
      return a;
    }
    __extends(a, c);
    a.prototype.op = function() {
      return this.sk;
    };
    a.prototype.sg = function(a, d) {
      c.prototype.sg.call(this, a, d);
      this.path.length < this.sampleSize
        ? (this.sk = Ec(this.path, this.order))
        : ((a = Kc(
            Ec(Kc(this.path, this.sampleSize), this.order),
            this.Hv * this.dr
          )),
          (this.sk = this.sk
            .slice(0, this.sk.length - this.Hv * (this.dr - 1))
            .concat(a)));
    };
    return a;
  })(Jc);
  function Mc(c) {
    var a, b, d, e, f, h, k;
    return __generator(this, function(l) {
      switch (l.label) {
        case 0:
          return 2 > c.length ? [2] : [4, { mi: c[0], length: 0 }];
        case 1:
          (a = l.sent()), (b = c[0]), (d = 1), (l.label = 2);
        case 2:
          if (!(d < c.length)) return [3, 7];
          e = c[d];
          f = lc(b.x, b.y, e.x, e.y);
          if (1e-5 > f) return d++, [3, 2];
          h = (e.x - b.x) / f;
          k = (e.y - b.y) / f;
          l.label = 3;
        case 3:
          if (!(f > a)) return [3, 5];
          b = { x: b.x + h * a, y: b.y + k * a };
          f -= a;
          return [4, { mi: b, length: a }];
        case 4:
          return (a = l.sent()), [3, 3];
        case 5:
          return [4, { mi: { x: e.x, y: e.y }, length: f }];
        case 6:
          return (a = l.sent()), (b = e), d++, [3, 2];
        case 7:
          return [2];
      }
    });
  }
  function Nc(c, a, b, d, e, f) {
    void 0 === d && (d = 1);
    void 0 === e && (e = 0);
    void 0 === f && (f = 0);
    var h = [];
    "number" !== typeof b &&
      (b =
        1 === d && 0 == (c & 1)
          ? Math.PI / c
          : 1 !== d && 0 == (c & 3)
          ? (Math.PI / c) * 2
          : 0);
    for (var k = 0; k <= c; k++) {
      var l = Math.sin(b) * a,
        n = -Math.cos(b) * a;
      k & 1 && ((l *= d), (n *= d));
      l = new F(l + e * n, n + f * n);
      h.push(l);
      b += (2 * Math.PI) / c;
    }
    return h;
  }
  var Oc = (function() {
    function c(a, b) {
      void 0 === b && (b = new J());
      this.ij = [];
      this.inverse = b.inverse();
      for (var d = -1, e = 0; e < a.length; e++) {
        var c = a[e];
        d++;
        if (!(1 > c.length))
          for (var h = b.apply(c[0].x, c[0].y), k = 1; k < c.length; k++) {
            var l = b.apply(c[k].x, c[k].y);
            if (1 < Math.abs(h.y - l.y)) {
              var n = l.y < h.y,
                r = Math.min(h.y, l.y),
                v = Math.max(h.y, l.y),
                w = (l.x - h.x) / (v - r);
              n && (w *= -1);
              this.ij.push({ Wv: d, ai: n ? l.x : h.x, Ie: r, ZA: v, hm: w });
            }
            h = l;
          }
      }
      this.ij.sort(function(a, b) {
        return a.Ie != b.Ie ? a.Ie - b.Ie : a.ai - b.ai;
      });
    }
    c.prototype.Sz = function(a) {
      if (1 > this.ij.length || 0 >= a) return [];
      for (var b = this.ij, d = this.ij[0].Ie, e = 0, c = [], h = []; ; ) {
        for (var k = 0; k < c.length; k++)
          d > c[k].hb.ZA && ((c[k] = c[c.length - 1]), --c.length);
        if (0 === c.length && e === b.length) break;
        for (; e < b.length && b[e].Ie <= d; e++) c.push({ y: d, hb: b[e] });
        c.sort(function(a, b) {
          var e = a.hb.ai + (d - a.hb.Ie) * a.hb.hm,
            c = b.hb.ai + (d - b.hb.Ie) * b.hb.hm;
          return 1e-5 < Math.abs(e - c) ? e - c : a.hb.Wv - b.hb.Wv;
        });
        for (k = 1; k < c.length; k += 2) {
          var l = c[k - 1].hb,
            n = c[k].hb;
          n = n.ai + (d - n.Ie) * n.hm;
          h.push({
            start: this.inverse.apply(l.ai + (d - l.Ie) * l.hm, d),
            end: this.inverse.apply(n, d),
          });
        }
        d += a;
      }
      return h;
    };
    return c;
  })();
  function Pc(c) {
    return 0 != (c.lb & 1);
  }
  function Qc(c) {
    return 0 != (c.lb & 4);
  }
  function Rc(c) {
    return 5 === (c.lb & 5) && c.da;
  }
  function Sc(c) {
    return 0 != (c.lb & 8);
  }
  var Tc = A.create("BaseNode"),
    Vc = (function() {
      function c(a, b) {
        this.id = a;
        this.aa = b;
        this.lb = 0;
        this.parent = null;
        this.ba = {};
        this.children = [];
        this.scope = null;
      }
      c.prototype.type = function() {
        return "BaseNode";
      };
      c.prototype.Pm = function() {
        return this.type();
      };
      c.prototype.toString = function() {
        return this.type() + ":" + this.id;
      };
      c.prototype.vB = function(a, b) {
        this.aa.Jd([this.id], a, b);
      };
      c.prototype.Sh = function(a) {
        this.scope || (this.scope = Uc(a, this));
        return this.scope;
      };
      c.td = function(a, b) {
        c.types[a] = b;
      };
      c.create = function(a, b, d) {
        return a in c.types ? new c.types[a](b, d) : null;
      };
      c.prototype.Sa = function() {};
      c.prototype.Ig = function(a, b) {
        b = jc(this.ba[a], b);
        b instanceof Array && (b = b.slice(0));
        return b;
      };
      c.prototype.rb = function() {
        var a = {},
          b;
        for (b in this.ba) this.ba.hasOwnProperty(b) && (a[b] = this.ia(b));
        return a;
      };
      c.prototype.Xb = function(a) {
        for (var b in a) this.setProperty(b, a[b]);
      };
      c.prototype.Og = function(a) {
        return a in this.ba;
      };
      c.prototype.jc = function(a) {
        return this.Og(a) || "$" === a[0] || "_" === a[0];
      };
      c.prototype.setProperty = function(a, b) {
        b = this.Ig(a, b);
        this.jc(a)
          ? (Tc(
              "%s:%s set %s=%s",
              this.id,
              this.type(),
              a,
              "string" === typeof b ? b.substr(0, 100) : b
            ),
            (this.ba[a] = b))
          : Tc("Property '%s' not valid for %s", a, this.type());
        return b;
      };
      c.prototype.ia = function(a) {
        a = this.ba[a];
        a instanceof Array && (a = a.slice(0));
        return a;
      };
      c.prototype.removeChild = function(a) {
        var b = this.children[a];
        this.children.splice(a, 1);
        return b;
      };
      c.prototype.Bp = function(a, b) {
        this.children.splice(b, 0, a);
      };
      c.prototype.nb = function(a) {
        return this.children[a];
      };
      c.prototype.fe = function(a) {
        for (var b = 0; b < this.children.length; b++)
          if (a === this.nb(b)) return b;
        return -1;
      };
      c.types = {};
      return c;
    })();
  var Wc = A.create("WrappedNode");
  function Xc(c, a) {
    var b = 0;
    return function() {
      return {
        next: function() {
          return b >= c.children.length
            ? { done: !0 }
            : { value: c.nb(b++).Sh(a) };
        },
      };
    };
  }
  function Uc(c, a) {
    var b = {};
    b.ctx = c.ctx;
    b.id = a.id;
    b.type = a.Pm();
    "undefined" !== typeof Proxy
      ? ((b.children = new Proxy(
          {},
          {
            get: function(b, e) {
              da();
              fa();
              if (e === Symbol.iterator) return Xc(a, c);
              if ("length" === e) return a.children.length;
              b = a.nb(e);
              return b instanceof Vc ? b.Sh(c) : b;
            },
          }
        )),
        (b.props = Yc(a.ba, "", function(b, e) {
          a.vB(b, e);
        })))
      : (Object.defineProperty(b, "children", {
          get: function() {
            throw Error("Not supported in this browser");
          },
        }),
        Object.defineProperty(b, "props", {
          get: function() {
            throw Error("Not supported in this browser");
          },
        }));
    Object.defineProperty(b, "parent", {
      configurable: !0,
      get: function() {
        return a.parent ? a.parent.Sh(c) : null;
      },
      set: function(b) {
        Wc("Warning; replacing parent property");
        a.parent = b;
      },
    });
    Qc(a) &&
      Object.defineProperty(b, "element", {
        configurable: !0,
        get: function() {
          return a.da;
        },
      });
    return b;
  }
  function Yc(c, a, b) {
    function d(d) {
      if ("string" === typeof d)
        for (var e in c)
          if (e.startsWith("" + a + d + ".")) return Yc(c, "" + a + d + ".", b);
      return null;
    }
    void 0 === a && (a = "");
    return new Proxy(c, {
      get: function(b, f) {
        return "hasOwnProperty" === f
          ? function(b) {
              return a + b in c;
            }
          : "string" === typeof f
          ? (b = d(f))
            ? b
            : c[a + f]
          : c[f];
      },
      has: function(b, f) {
        return "string" === typeof f
          ? (b = d(f))
            ? b
            : a + f in c
          : b.hasOwnProperty(f);
      },
      set: function(d, f, h) {
        "string" === typeof f ? ((c[a + f] = h), b(a + f, h)) : (c[f] = h);
        return !0;
      },
    });
  }
  var Zc = (function(c) {
    function a() {
      var a = (null !== c && c.apply(this, arguments)) || this;
      a.yE = "DataNode";
      return a;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "DataNode";
    };
    a.prototype.jc = function() {
      return !0;
    };
    return a;
  })(Vc);
  Vc.td("DataNode", Zc);
  var $c = (function() {
    function c(a, b) {
      var d = this;
      this.ma = a;
      this.tl = b;
      this.height = 0;
      this.x = b.x || 0;
      this.y = b.y || 0;
      this.eE = b.xoffset || 0;
      this.hE = b.yoffset || 0;
      this.width = b.width || 0;
      this.Qa = document.createElement("img");
      this.Qa.src = b.image || "";
      this.Qa.onload = function() {
        d.width = d.width || d.Qa.naturalWidth;
        d.height = (d.width / d.Qa.naturalWidth) * d.Qa.naturalHeight;
        a.fd();
      };
      b.hoverImage
        ? ((this.jm = document.createElement("img")),
          (this.jm.src = b.hoverImage))
        : (this.jm = this.Qa);
      this.os = this.Qa;
    }
    c.prototype.ys = function(a) {
      return this.tl.appliesTo ? this.tl.appliesTo(a.id, this.ma) : !0;
    };
    c.prototype.Tt = function(a) {
      var b = a.ya;
      a = a.Na().Gb();
      return new G(
        b.x + this.x * b.width + (this.eE - this.width / 2) / a.x,
        b.y + this.y * b.height + (this.hE - this.height / 2) / a.y,
        this.width / a.x,
        this.height / a.y
      );
    };
    c.prototype.Hb = function(a, b, d, e) {
      var c = this.Tt(a);
      a = a
        .Na()
        .inverse()
        .apply(b, d);
      return c.Lc(a.x, a.y, e);
    };
    c.prototype.la = function(a, b, d) {
      this.os.complete &&
        (a.save(),
        b.Na().Ec(a),
        (b = this.Tt(b)),
        this.jm.complete && d
          ? a.drawImage(this.jm, b.x, b.y, b.width, b.height)
          : a.drawImage(this.os, b.x, b.y, b.width, b.height),
        a.restore());
    };
    c.prototype.click = function(a, b) {
      if (this.tl.onclick)
        try {
          this.tl.onclick(a.id, this.ma, b);
        } catch (d) {
          console.log("Error in decoration onclick handler: ", d);
        }
    };
    return c;
  })();
  var ad = (function() {
    function c(a) {
      this.tb = a;
      this.jl = [];
      this.Om = !0;
      this.log = A.create("cloudAddon");
      this.yf = a.ia("cloudRadius");
    }
    c.prototype.format = function() {
      var a = this.tb.Wd.Qe()[0];
      this.log("Format cloud; %s points", a.length);
      this.jl = this.Tx(a, this.yf);
    };
    c.prototype.Tx = function(a, b) {
      var d = [],
        e = (5 / 6) * b * 2,
        c,
        h = a[a.length - 1];
      for (c = 0; c < a.length; c++) {
        var k = a[c];
        var l = k.x - h.x,
          n = k.y - h.y,
          r = Math.sqrt(l * l + n * n);
        l /= r;
        n /= r;
        var v = (r / e + 0.5) | 0;
        1 > v && (v = 1);
        v = r / v;
        for (var w = 0; w + 0.1 * v < r; w += v)
          d.push({ x: h.x + w * l, y: h.y + w * n, $a: 0, end: 0 });
        h = k;
      }
      e = d[d.length - 1];
      for (c = 0; c < d.length; c++)
        (a = d[c]),
          (h = a.x - e.x),
          (l = a.y - e.y),
          (k = (0.5 * Math.sqrt(h * h + l * l)) / b),
          -1 > k && (k = -1),
          1 < k && (k = 1),
          (h = Math.atan2(l, h)),
          (k = Math.acos(k)),
          (k = [h - k, Math.PI + h + k]),
          (e.end = k[0]),
          (a.$a = k[1]),
          (e = a);
      return d;
    };
    c.prototype.la = function(a) {
      this.log("Drawing cloud with %s circles", this.jl.length);
      var b = (15 * Math.PI) / 180,
        d = this.yf;
      a.beginPath();
      for (var e = 0; e < this.jl.length; e++) {
        var c = this.jl[e];
        a.arc(c.x, c.y, d, c.$a, c.end + b);
      }
      a.stroke();
    };
    return c;
  })();
  var cd = (function(c) {
      function a(b, d) {
        b = c.call(this, b, d) || this;
        b.rect = new G(0, 0, 1, 1);
        b.Pk = !1;
        b.ya = new G(0, 0, 1, 1);
        b.Tc = 0;
        b.log = A.create("GraphicsNode");
        b.offsetX = 0;
        b.offsetY = 0;
        b.lb |= 17;
        b.ba.matrix = new J();
        b.ba.layer = "default";
        b.fo(a.sa);
        return b;
      }
      __extends(a, c);
      a.prototype.fo = function(a) {
        for (var b in a) a.hasOwnProperty(b) && (this.ba[b] = a[b]);
      };
      a.prototype.clip = function() {};
      a.prototype.Sa = function() {};
      a.prototype.mf = function() {
        return !1 !== this.ia("lockEditMode");
      };
      a.prototype.Wt = function() {
        return !1;
      };
      a.prototype.Xh = function() {
        return null;
      };
      a.prototype.hj = function() {};
      a.prototype.lu = function() {
        return !1;
      };
      a.prototype.Pq = function() {
        return !1;
      };
      a.prototype.Pg = function() {
        return "text" in this.ba;
      };
      a.prototype.zc = function() {
        var a = this.ia("layer");
        return a ? "" + a : "default";
      };
      a.prototype.om = function() {
        return (
          null !== this.parent &&
          null !== this.parent.parent &&
          "GroupNode" === this.parent.type()
        );
      };
      a.prototype.type = function() {
        return "BaseNode";
      };
      a.prototype.Xe = function(a) {
        return { matrix: a.multiply(this.Na()) };
      };
      a.prototype.Na = function() {
        return this.ia("matrix");
      };
      a.prototype.cc = function() {
        return this.Na().inverse();
      };
      a.prototype.Sv = function(a) {
        this.setProperty("matrix", a);
      };
      a.prototype.Ig = function(a, d) {
        if ("shadow" === a && ("string" === typeof d || "boolean" === typeof d))
          return d;
        d = c.prototype.Ig.call(this, a, d);
        "matrix" === a && "string" === typeof d
          ? (d = new J(d))
          : "opacity" === a && (d = parseFloat(d));
        return d;
      };
      a.prototype.jc = function(a) {
        switch (a) {
          case "customData":
          case "tag":
          case "locked":
          case "lockSize":
          case "lockRotation":
          case "lockPosition":
          case "lockEditMode":
          case "rotationHandles":
          case "lockAspectRatio":
          case "zIndex":
          case "snap":
          case "opacity":
          case "shadow":
          case "type":
            return !0;
        }
        return c.prototype.jc.call(this, a);
      };
      a.prototype.Jl = function() {
        var a = new Ac(this.ya);
        a.transform(this.Na());
        return a;
      };
      a.prototype.Td = function() {
        return this.ia("zIndex") || 0;
      };
      a.prototype.transform = function(a) {
        this.Sv(a.multiply(this.Na()));
      };
      a.prototype.format = function() {};
      a.prototype.Hb = function(a, d, e) {
        a = this.cc().apply(a, d);
        d = this.cc().Gb();
        d = 0.5 * (d.x + d.y);
        return this.hidden() ||
          this.ia("locked") ||
          !this.ya.Lc(a.x, a.y, e * d)
          ? null
          : this;
      };
      a.prototype.hg = function(a) {
        this.Pk = a;
      };
      a.prototype.hidden = function() {
        return this.Pk;
      };
      a.prototype.wi = function() {};
      a.prototype.Am = function() {};
      a.prototype.Cm = function() {};
      a.prototype.ck = function(a) {
        if (a.ck) {
          var b = { "zwibbler:id": "" + this.id };
          if ("tag" in this.ba) {
            var e = this.ba.tag;
            "string" !== typeof e && (e = JSON.stringify(e));
            b["zwibbler:tag"] = e;
          }
          for (var c in this.ba) {
            e = this.ba[c];
            if ("_" === c.substr(0, 1)) c = c.substr(1);
            else if ("tag" !== c) continue;
            "string" !== typeof e && (e = JSON.stringify(e));
            b["zwibbler:" + c] = e;
          }
          a.ck(b);
        }
      };
      a.prototype.bk = function(a) {
        a.bk && a.bk();
      };
      a.prototype.la = function(a) {
        a.save();
        this.ck(a);
        a.translate(this.offsetX, this.offsetY);
        var b = this.ba.matrix;
        a.transform(b.m11, b.m21, b.m12, b.m22, b.Aa, b.Ba);
        "erase" === this.ba.strokeStyle
          ? a.Ii
            ? (a.strokeStyle = a.Ii)
            : ((a.strokeStyle = q.Oa),
              (a.globalCompositeOperation = "destination-out"))
          : (a.strokeStyle = this.ba.strokeStyle);
        a.fillStyle = this.ba.fillStyle;
        a.lineWidth = this.ba.lineWidth;
        this.ba.shadow && bd(this.ba.shadow, a);
        "opacity" in this.ba && (a.globalAlpha = this.ba.opacity);
        this.Mf(a);
        this.bk(a);
        a.restore();
      };
      a.prototype.it = function(a, d) {
        d = d
          ? function(b) {
              a.fillStyle = b;
              a.fill();
            }
          : function(b) {
              a.strokeStyle = b;
              a.stroke();
            };
        a.Ii
          ? ((a.globalCompositeOperation = "destination-out"),
            --a.lineWidth,
            d(q.Oa),
            (a.globalCompositeOperation = "source-over"),
            (a.fillStyle = a.Ii),
            (a.lineWidth += 2),
            d(a.Ii),
            --a.lineWidth)
          : ((a.globalCompositeOperation = "destination-out"),
            d(q.Oa),
            (a.globalCompositeOperation = "source-over"));
      };
      a.prototype.Mf = function() {};
      a.prototype.resolve = function() {
        return !1;
      };
      a.prototype.xt = function(a, d, e, c) {
        this.kj || (this.kj = {});
        var b = this.kj[a];
        if (!b || b.pw !== c) {
          (b && c === b.pw) || ((b = { pw: c, value: c }), (this.kj[a] = b));
          a = /url\(([^\)]+)\)/.exec(c);
          var f;
          a && (f = a[1]);
          var l = this;
          f &&
            ((b.value = "rgba(0, 0, 0, 0.2)"),
            e.add(this.id, "image", f, null, function(a) {
              l.log("Got image response.");
              b.value = d.createPattern(a, "repeat") || "magenta";
              e.gg(l.id);
            }));
        }
      };
      a.prototype.ap = function(a) {
        return this.kj && (a = this.kj[a]) ? a.value : "magenta";
      };
      a.prototype.Je = function() {
        return {};
      };
      a.prototype.Ml = function() {};
      a.prototype.Nl = function() {
        return null;
      };
      a.prototype.Mv = function() {};
      a.prototype.rp = function() {
        return [];
      };
      a.prototype.$m = function(a, d) {
        this.offsetX = a;
        this.offsetY = d;
      };
      a.sa = {
        fillStyle: "#cccccc",
        strokeStyle: q.Oa,
        lineWidth: 2,
        shadow: !1,
      };
      return a;
    })(Vc),
    dd = / *(\d+)(px)? +(\d+)(px)? +(\d+)(px)? +(.+)/i;
  function bd(c, a) {
    void 0 === a && (a = {});
    a.shadowOffsetX = 0;
    a.shadowOffsetY = 0;
    a.shadowBlur = 0;
    a.shadowColor = q.Ue;
    if ("string" === typeof c) {
      if ((c = dd.exec(c)))
        (a.shadowOffsetX = parseFloat(c[1])),
          (a.shadowOffsetY = parseFloat(c[3])),
          (a.shadowBlur = parseFloat(c[5])),
          (a.shadowColor = c[7]);
    } else
      c &&
        ((a.shadowOffsetX = 3),
        (a.shadowOffsetY = 3),
        (a.shadowBlur = 5),
        (a.shadowColor = "rgba(0,0,0,0.5)"));
  }
  var ed = (function() {
    function c() {
      this.text = "";
      this.font = "10px Arial";
      this.vt = "Arial";
      this.fontSize = 10;
      this.lines = [];
      this.wr = "top";
      this.zj = "left";
      this.Gj = this.bold = !1;
      this.textDecoration = "";
      this.log = A.create("TextBox");
      this.rect = new G(0, 0, 0, this.fontSize);
    }
    c.prototype.Wm = function(a, b, d, e, c) {
      this.vt = a;
      this.fontSize = b;
      this.bold = d;
      this.Gj = e;
      this.textDecoration = c;
    };
    c.prototype.jg = function(a) {
      this.text = a;
    };
    c.prototype.Hq = function(a, b) {
      switch (a) {
        case "left":
        case "center":
        case "right":
          this.zj = a;
          break;
        case null:
          break;
        default:
          this.log("Unknown alignment: %s", a);
      }
      switch (b) {
        case "top":
        case "middle":
        case "bottom":
          this.wr = b;
          break;
        case null:
          break;
        default:
          this.log("Unknnown alignment: %s", b);
      }
    };
    c.prototype.format = function(a, b, d) {
      this.font = "" + this.fontSize + 'px "' + this.vt + '"';
      this.bold && (this.font = "bold " + this.font);
      this.Gj && (this.font = "italic " + this.font);
      this.lines.length = 0;
      var e,
        c = 0;
      a.font = this.font;
      var h = 0;
      this.rect.width = b;
      if (0 === b) {
        var k = this.text.split("\n");
        for (e = 0; e < k.length; e++) {
          var l = k[e];
          c = a.measureText(l).width;
          h += this.fontSize;
          this.lines.push({ x: 0, y: h, width: c, text: l });
          this.rect.width = Math.max(this.rect.width, c);
        }
      } else {
        l = k = 0;
        var n = !1;
        for (e = 0; e < this.text.length; e++) {
          var r = this.text.charAt(e);
          c = a.measureText(this.text.substr(k, e - k + 1)).width;
          "\n" === r
            ? (n = !0)
            : c > b
            ? l
              ? ((e = l), (n = !0))
              : e > k && (--e, (n = !0))
            : " " === r && (l = e);
          n &&
            ((c =
              " " === this.text.charAt(e)
                ? a.measureText(this.text.substr(k, e - k)).width
                : a.measureText(this.text.substr(k, e - k + 1)).width),
            (h += this.fontSize),
            this.lines.push({
              x: 0,
              y: h,
              width: c,
              text: this.text.substr(k, e - k + 1),
            }),
            (k = e + 1),
            (l = 0),
            (n = !1),
            (this.rect.width = Math.max(this.rect.width, c)));
        }
        if (c || "\n" === this.text.charAt(this.text.length - 1))
          (h += this.fontSize),
            this.lines.push({
              x: 0,
              y: h,
              width: c,
              text: this.text.substr(k, e - k),
            }),
            (this.rect.width = Math.max(this.rect.width, c));
      }
      this.rect.x = 0;
      this.rect.y = 0;
      this.rect.height = h;
      if ("center" === this.zj)
        for (e = 0; e < this.lines.length; e++)
          (a = this.lines[e]), (a.x = this.rect.width / 2 - a.width / 2);
      else if ("right" === this.zj)
        for (e = 0; e < this.lines.length; e++)
          (a = this.lines[e]), (a.x = this.rect.width - a.width);
      b && "center" === this.zj
        ? (this.rect.x = b / 2 - this.rect.width / 2)
        : b && "right" === this.zj && (this.rect.x = b - this.rect.width);
      d && "middle" === this.wr
        ? (this.rect.y = d / 2 - this.rect.height / 2)
        : d && "bottom" === this.wr && (this.rect.y = d - this.rect.height);
    };
    c.prototype.la = function(a, b, d) {
      this.fillText(a, b, d);
      this.ft(a, b, d);
    };
    c.prototype.ft = function(a, b, d) {
      var e;
      if (0 <= this.textDecoration.indexOf("underline")) {
        a.save();
        a.beginPath();
        var c = 1;
        for (e = 0; e < this.lines.length; e++) {
          var h = this.lines[e];
          a.moveTo(h.x + b, h.y + d + c);
          a.lineTo(h.x + b + h.width, h.y + d + c);
        }
        a.strokeStyle = a.fillStyle;
        a.lineWidth = 1;
        a.stroke();
        a.beginPath();
        a.restore();
      }
      if (0 <= this.textDecoration.indexOf("line-through")) {
        a.save();
        a.beginPath();
        c = 0.25 * -this.fontSize;
        for (e = 0; e < this.lines.length; e++)
          (h = this.lines[e]),
            a.moveTo(h.x + b, h.y + d + c),
            a.lineTo(h.x + b + h.width, h.y + d + c);
        a.strokeStyle = a.fillStyle;
        a.lineWidth = 1;
        a.stroke();
        a.restore();
      }
    };
    c.prototype.fillText = function(a, b, d) {
      a.textBaseline = "alphabetic";
      a.font = this.font;
      for (var e = 0; e < this.lines.length; e++) {
        var c = this.lines[e];
        a.fillText(c.text, this.rect.x + c.x + b, this.rect.y + c.y + d);
      }
    };
    c.prototype.strokeText = function(a, b, d) {
      a.textBaseline = "alphabetic";
      a.font = this.font;
      for (var e = 0; e < this.lines.length; e++) {
        var c = this.lines[e];
        a.strokeText(c.text, this.rect.x + c.x + b, this.rect.y + c.y + d);
      }
    };
    return c;
  })();
  var fd = (function(c) {
    function a(b, d) {
      b = c.call(this, b, d) || this;
      b.eb = new ed();
      b.vp = 0;
      b.border = { lineWidth: 0, Kc: q.Oa };
      b.width = 0;
      b.height = 0;
      b.HE = 0;
      b.IE = 0;
      b.log = A.create("TEXT", !0);
      b.fo(a.Nw);
      b.ba.text = "lorum ipsum dolor";
      return b;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "TextNode";
    };
    a.prototype.tj = function() {
      return void 0 !== this.ia("width") ? 2 : this.ia("wrap") ? 1 : 0;
    };
    a.prototype.Xe = function(a) {
      var b = c.prototype.Xe.call(this, a);
      2 === this.tj() &&
        ((a = a.Gb()),
        this.log("Scale %s", a),
        1e-8 > Math.abs(a.x - a.y) &&
          ((b.fontSize = this.ba.fontSize * a.x),
          (b.padding = (this.ba.padding || 0) * a.x)));
      return b;
    };
    a.prototype.jc = function(a) {
      switch (a) {
        case "scaleFont":
        case "padding":
        case "width":
        case "height":
        case "baseWidth":
          return !0;
      }
      return c.prototype.jc.call(this, a);
    };
    a.prototype.setProperty = function(a, d) {
      switch (a) {
        case "fillStyle":
        case "textFillStyle":
          this.ba.textFillStyle = d;
          this.ba.fillStyle = d;
          return;
        case "border-color":
          a = this.$j(this.ia("border") || "");
          this.setProperty("border", a.lineWidth + "px " + d);
          return;
        case "border-width":
          a = this.$j(this.ia("border") || "");
          this.setProperty("border", d + "px " + a.Kc);
          return;
      }
      c.prototype.setProperty.call(this, a, d);
    };
    a.prototype.rb = function() {
      var a = c.prototype.rb.call(this);
      a["border-color"] = this.ia("border-color");
      a["border-width"] = this.ia("border-width");
      return a;
    };
    a.prototype.Og = function(a) {
      switch (a) {
        case "border":
          return !0;
      }
      return c.prototype.Og.call(this, a);
    };
    a.prototype.ia = function(a) {
      switch (a) {
        case "border-color":
          return this.$j(this.ia("border") || "").Kc;
        case "border-width":
          return this.$j(this.ia("border") || "").lineWidth;
      }
      return c.prototype.ia.call(this, a);
    };
    a.prototype.format = function(a) {
      var b = this.ba.matrix,
        e = b.apply(0, 0),
        c = b.apply(1, 0);
      e = e.bc(c);
      c = this.tj();
      var h = this.ba.text;
      0 === c &&
        h.length &&
        10 === h.charCodeAt(h.length - 1) &&
        (h = h.substr(0, h.length - 1));
      this.eb.jg(h);
      b = b.Gb();
      this.eb.Wm(
        this.ba.fontName,
        this.ba.fontSize,
        this.ba.bold,
        this.ba.italic,
        this.ba.textDecoration
      );
      this.eb.Hq(this.ba.textAlign, "top");
      c = this.ia("padding") || 0;
      h = this.ia("lineWidth") + 0;
      switch (this.tj()) {
        case 0:
          this.eb.format(a, 0, 0);
          e = this.eb.rect.width;
          a = this.eb.rect.height;
          this.ya = new G(0, -(0 + this.ia("fontSize")), e, a);
          break;
        case 1:
          var k = this.ba.baseWidth;
          void 0 === k &&
            (this.eb.format(a, 0, 0),
            (k = Math.max(this.eb.rect.width, 10)),
            500 < k && (k = 500),
            (this.ba.baseWidth = k),
            this.log("Formatting text for first time; baseWidth=%s", k));
          e = Math.ceil(e * k);
          this.eb.format(a, e, 0);
          a = this.eb.rect.height;
          this.ya = new G(0, 0, k, a);
          break;
        case 2:
          e = this.ia("width") || 0;
          this.ia("height");
          e = (e - (2 * c) / b.x) * b.x;
          this.eb.format(a, e, 0);
          this.ya = new G(
            0,
            0,
            e / b.x,
            this.eb.rect.height + (2 * c * b.y - 2 * c) / b.y
          );
          this.ya.x += (c + h) / b.x;
          this.ya.y += (c + h) / b.y;
          break;
        default:
          throw Error("TextNode: Bad Mode " + this.tj());
      }
      this.ya.height += (0.3 * this.ba.fontSize) / b.y;
      this.ya.Ed((2 * c) / b.x, (2 * c) / b.y);
      this.ya.Ed(h / b.x, h / b.y);
      a = new Ac(this.ya);
      a.transform(this.Na());
      this.rect = a.Is();
      this.vp = this.rect.height;
      this.border = this.ba.border
        ? this.$j(this.ba.border)
        : { lineWidth: 0, Kc: q.Oa };
    };
    a.prototype.$j = function(a) {
      var b = { lineWidth: 0, Kc: q.Oa };
      a = a.split(" ");
      for (var e = 0; e < a.length; e++) {
        var c = parseFloat(a[e]);
        if (isNaN(c)) {
          if ((c = q.Il(a[e]))) b.Kc = c.toString();
        } else b.lineWidth = c;
      }
      return b;
    };
    a.prototype.Na = function() {
      return !1 === this.ia("scaleFont")
        ? c.prototype.Na.call(this).qn()
        : c.prototype.Na.call(this);
    };
    a.prototype.la = function(a) {
      if (0 !== this.ba.text.length) {
        a.save();
        this.ck(a);
        "opacity" in this.ba && (a.globalAlpha = this.ba.opacity);
        var b = this.ba.background;
        if (b || this.border.lineWidth)
          a.save(),
            this.Na().Ec(a),
            b &&
              ((a.fillStyle = b),
              a.fillRect(this.ya.x, this.ya.y, this.ya.width, this.ya.height)),
            this.border.lineWidth &&
              (a.beginPath(),
              (a.strokeStyle = this.border.Kc),
              (a.lineWidth = this.border.lineWidth),
              a.rect(this.ya.x, this.ya.y, this.ya.width, this.ya.height),
              (b = this.cc()),
              b
                .qn()
                .multiply(b)
                .Ec(a),
              a.stroke()),
            a.restore();
        b = this.tj();
        var e = this.ba.padding || 0;
        0 !== b
          ? this.Na()
              .qn()
              .Ec(a)
          : this.Na().Ec(a);
        a.strokeStyle = this.ba.strokeStyle;
        a.fillStyle = this.ba.fillStyle;
        a.lineWidth = this.ba.lineWidth;
        var c = 0,
          h = this.Na().Gb(),
          k = this.ya.height * h.y;
        if (0 === b && !1 !== this.ia("scaleFont"))
          c = -(0 + this.ia("fontSize"));
        else
          switch (
            (this.log("Available: %s rect: %s", k, this.eb.rect),
            this.ba.verticalAlign)
          ) {
            case "bottom":
              c += k - this.eb.rect.height;
              break;
            case "middle":
              c += (k - this.eb.rect.height) / 2;
          }
        2 === b && a.translate(e, e);
        "center" === this.ba.textAlign &&
          this.log(
            "xshift is %s, urect=%s scaleX=%s tw=%s",
            0,
            this.ya,
            h.x,
            this.eb.rect.width
          );
        this.ba.shadow &&
          ((a.shadowOffsetX = 3),
          (a.shadowOffsetY = 3),
          (a.shadowBlur = 5),
          (a.shadowColor = "rgba(0,0,0,0.5)"));
        0 < this.ba.lineWidth && this.eb.strokeText(a, 0, c);
        this.eb.fillText(a, 0, c);
        this.eb.ft(a, 0, c);
        this.bk(a);
        a.restore();
      }
    };
    a.Nw = {
      textFillStyle: q.Oa,
      fontName: "Arial",
      fontSize: 20,
      lineWidth: 0,
      fillStyle: q.Oa,
      wrap: !1,
      textAlign: "left",
      bold: !1,
      italic: !1,
      background: q.Ue,
      textDecoration: "",
    };
    return a;
  })(cd);
  cd.td("TextNode", fd);
  var gd = (function() {
      function c(a, b) {
        this.qa = a;
        this.ja = b;
        this.iD = !0;
        this.log = A.create("MoveSegment");
      }
      c.prototype.la = function(a) {
        a.moveTo(this.ja.x, this.ja.y);
      };
      c.prototype.Ff = function() {
        return this.wd();
      };
      c.prototype.wd = function() {
        return { x: 1, y: 0 };
      };
      return c;
    })(),
    hd = (function() {
      function c(a, b, d, e, c) {
        this.qa = a;
        this.ja = b;
        this.bn = e;
        this.Af = c;
        this.log = A.create("LineSegment");
        this.jh = 0;
        this.Pa = new F(0, 0);
        this.Va = new F(0, 0);
        this.length = 0;
        this.from = new F(0, 0);
        this.ja = b;
        this.qa = a;
        this.Af = c;
        this.bn = e;
        d.next();
        this.Jm = d.next();
        this.Km = d.next();
        this.moveTo = this.Bf = null;
        this.format();
      }
      c.prototype.format = function() {
        var a = lc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y);
        this.jh = this.length = a;
        var b = this.qa.ja.clone();
        this.qa instanceof c &&
          this.Af &&
          ((this.Af = Math.min(this.Af, a / 2, this.qa.length / 2)),
          (a = mc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y)),
          (b.x += a.x * this.Af),
          (b.y += a.y * this.Af),
          this.qa.dD(this.Af),
          (this.jh -= this.Af));
        this.from = b;
        null === this.Bf && (this.Bf = this.ja);
        a = (this.jh / 10) * this.bn;
        10 < a && (a = 10);
        var d = b.x,
          e = b.y,
          f = this.ja.x,
          h = this.ja.y;
        d += a;
        e += a;
        this.Pa = new F(d + this.Jm * (f + a - d), e + this.Jm * (h + a - e));
        d = b.x - a;
        f = this.ja.x - a;
        e = b.y - a;
        h = this.ja.y - a;
        this.Va = new F(d + this.Km * (f - d), e + this.Km * (h - e));
      };
      c.prototype.dD = function(a) {
        var b = mc(this.from.x, this.from.y, this.ja.x, this.ja.y),
          d = this.ja.clone();
        d.x -= b.x * a;
        d.y -= b.y * a;
        this.Bf = d;
        this.jh -= a;
        a = (this.jh / 10) * this.bn;
        10 < a && (a = 10);
        b = this.from.x;
        var e = this.from.y,
          c = d.x,
          h = d.y;
        b += a;
        e += a;
        this.Pa = new F(b + this.Jm * (c + a - b), e + this.Jm * (h + a - e));
        this.log("RECALC ctrl1=%s", this.Pa);
        b = this.from.x - a;
        c = d.x - a;
        e = this.from.y - a;
        h = d.y - a;
        this.Va = new F(b + this.Km * (c - b), e + this.Km * (h - e));
      };
      c.prototype.mk = function(a) {
        this.qa = a;
        this.format();
        this.qa instanceof c && (this.moveTo = this.qa.Bf);
      };
      c.prototype.la = function(a) {
        null !== this.Bf &&
          (this.Af &&
            (this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y),
            a.quadraticCurveTo(
              this.qa.ja.x,
              this.qa.ja.y,
              this.from.x,
              this.from.y
            )),
          0 === this.bn
            ? a.lineTo(this.Bf.x, this.Bf.y)
            : a.bezierCurveTo(
                this.Pa.x,
                this.Pa.y,
                this.Va.x,
                this.Va.y,
                this.Bf.x,
                this.Bf.y
              ));
      };
      c.prototype.Ff = function() {
        return this.qa
          ? mc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
          : this.wd();
      };
      c.prototype.wd = function() {
        for (
          var a = this.Va,
            b = lc(this.Va.x, this.Va.y, this.ja.x, this.ja.y),
            d = this.qa;
          20 > b && d instanceof c;

        )
          (a = d.Va), (d = d.qa), (b += lc(a.x, a.y, this.ja.x, this.ja.y));
        return mc(a.x, a.y, this.ja.x, this.ja.y);
      };
      return c;
    })(),
    id = (function() {
      function c(a, b, d) {
        this.Tq = d;
        this.ja = b;
        this.qa = a;
        this.Tq = d;
        var e = lc(a.ja.x, a.ja.y, b.x, b.y);
        e || (e = 1);
        var c = (b.x - a.ja.x) / e,
          h = (b.y - a.ja.y) / e;
        this.Va = new F(b.x - e * d * c, b.y - e * d * h);
        if ((b = a.Va) && a.qa) {
          var k = mc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y),
            l = lc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y);
          c = 0.5 * (c + k.x);
          h = 0.5 * (h + k.y);
          b.x = a.ja.x - l * d * c;
          b.y = a.ja.y - l * d * h;
        }
        this.Pa = new F(a.ja.x + e * d * c, a.ja.y + e * d * h);
        this.length = e;
      }
      c.prototype.mk = function(a) {
        this.qa = a;
        var b = a.Va,
          d = (this.ja.x - a.ja.x) / this.length,
          e = (this.ja.y - a.ja.y) / this.length,
          c = this.Tq;
        if (b && a.qa) {
          var h = mc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y),
            k = lc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y);
          d = 0.5 * (d + h.x);
          e = 0.5 * (e + h.y);
          b.x = a.ja.x - k * c * d;
          b.y = a.ja.y - k * c * e;
        }
        this.Pa = new F(
          a.ja.x + this.length * c * d,
          a.ja.y + this.length * c * e
        );
      };
      c.prototype.la = function(a) {
        a.bezierCurveTo(
          this.Pa.x,
          this.Pa.y,
          this.Va.x,
          this.Va.y,
          this.ja.x,
          this.ja.y
        );
      };
      c.prototype.Ff = function() {
        return this.qa
          ? mc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
          : { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return 0 < this.Tq
          ? mc(this.Va.x, this.Va.y, this.ja.x, this.ja.y)
          : mc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y);
      };
      return c;
    })(),
    jd = (function() {
      function c(a, b, d) {
        this.qa = a;
        this.control = b;
        this.ja = d;
      }
      c.prototype.la = function(a) {
        a.quadraticCurveTo(
          this.control.x,
          this.control.y,
          this.ja.x,
          this.ja.y
        );
      };
      c.prototype.Ff = function() {
        return this.qa
          ? mc(this.qa.ja.x, this.qa.ja.y, this.control.x, this.control.y)
          : { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return mc(this.control.x, this.control.y, this.ja.x, this.ja.y);
      };
      return c;
    })(),
    kd = (function() {
      function c(a, b, d, e) {
        this.qa = a;
        this.control = b;
        this.ja = d;
        this.yf = e;
      }
      c.prototype.la = function(a) {
        a.arcTo(this.control.x, this.control.y, this.ja.x, this.ja.y, this.yf);
      };
      c.prototype.Ff = function() {
        return { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return mc(0, 0, 1, 0);
      };
      return c;
    })(),
    ld = (function() {
      function c(a, b, d, e, c, h, k) {
        this.qa = a;
        this.Qd = b;
        this.ja = d;
        this.yf = e;
        this.Xq = c;
        this.Uy = h;
        this.ky = k;
      }
      c.prototype.la = function(a) {
        a.arc(this.Qd.x, this.Qd.y, this.yf, this.Xq, this.Uy, 0 !== this.ky);
      };
      c.prototype.Ff = function() {
        return { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return mc(0, 0, 1, 0);
      };
      return c;
    })(),
    md = (function() {
      function c(a, b, d, e) {
        this.Pa = b;
        this.Va = d;
        this.Pa = b;
        this.Va = d;
        this.ja = e;
        this.qa = a;
      }
      c.prototype.la = function(a) {
        a.bezierCurveTo(
          this.Pa.x,
          this.Pa.y,
          this.Va.x,
          this.Va.y,
          this.ja.x,
          this.ja.y
        );
      };
      c.prototype.Ff = function() {
        return this.qa
          ? mc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
          : { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return mc(this.Va.x, this.Va.y, this.ja.x, this.ja.y);
      };
      return c;
    })(),
    nd = (function() {
      function c(a, b, d, e) {
        this.qa = a;
        this.Pa = b;
        this.Va = d;
        this.ja = e;
      }
      c.prototype.la = function(a) {
        if (this.qa) {
          var b = [];
          this.qa.Va && b.push(this.qa.Va);
          this.Pa && b.push(this.Pa);
          2 === b.length
            ? a.bezierCurveTo(
                b[0].x,
                b[0].y,
                b[1].x,
                b[1].y,
                this.ja.x,
                this.ja.y
              )
            : 1 === b.length &&
              a.quadraticCurveTo(b[0].x, b[0].y, this.ja.x, this.ja.y);
        }
      };
      c.prototype.mk = function(a) {
        this.qa = a;
      };
      c.prototype.Ff = function() {
        return this.qa && this.qa.Va
          ? mc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
          : { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return this.Pa
          ? mc(this.Pa.x, this.Pa.y, this.ja.x, this.ja.y)
          : { x: 1, y: 0 };
      };
      return c;
    })(),
    od = (function() {
      function c(a, b, d, e, c) {
        this.qa = a;
        this.Vi = b;
        this.ja = d;
        this.log = A.create("SEGMENT");
        this.qa = a;
        this.Vi = b;
        c *= 2;
        var f = 2 * e.next() - 1;
        e.next();
        e = this.qa.wd();
        if (!this.qa.iD && e) {
          var k = lc(a.ja.x, a.ja.y, b.x, b.y);
          this.Pa = new F(
            a.ja.x + 0.5522847498 * e.x * k,
            a.ja.y + 0.5522847498 * e.y * k
          );
        } else
          this.Pa = new F(
            a.ja.x + 0.5522847498 * (b.x - a.ja.x),
            a.ja.y + 0.5522847498 * (b.y - a.ja.y)
          );
        this.Va = new F(
          d.x - 0.5522847498 * (d.x - b.x) * (1 - f * c),
          d.y - 0.5522847498 * (d.y - b.y) * (1 - f * c)
        );
        this.ja = d;
      }
      c.prototype.mk = function(a) {
        this.qa = a;
        var b = this.qa.wd();
        if (b) {
          var d = lc(a.ja.x, a.ja.y, this.Vi.x, this.Vi.y);
          this.Pa = new F(
            a.ja.x + 0.5522847498 * b.x * d,
            a.ja.y + 0.5522847498 * b.y * d
          );
        } else
          this.Pa = new F(
            a.ja.x + 0.5522847498 * (this.Vi.x - this.qa.ja.x),
            a.ja.y + 0.5522847498 * (this.Vi.y - this.qa.ja.y)
          );
      };
      c.prototype.la = function(a) {
        a.bezierCurveTo(
          this.Pa.x,
          this.Pa.y,
          this.Va.x,
          this.Va.y,
          this.ja.x,
          this.ja.y
        );
      };
      c.prototype.Ff = function() {
        return this.qa
          ? mc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
          : { x: 1, y: 0 };
      };
      c.prototype.wd = function() {
        return mc(this.Va.x, this.Va.y, this.ja.x, this.ja.y);
      };
      return c;
    })();
  var pd = (function() {
    function c(a) {
      this.Lj = this.Kj = 0;
      if ("string" === typeof a) {
        for (; 8 > a.length; ) a += a;
        for (var b = 16777619, d = 0; d < a.length; d++)
          b = ((16777619 * b) ^ a.charCodeAt(d)) & 4294967295;
        a = b;
      }
      this.Dq = a;
      this.reset();
    }
    c.prototype.reset = function() {
      this.Lj = this.Kj = this.Dq;
    };
    c.prototype.next = function() {
      this.Lj = 36969 * (this.Lj & 65535) + (this.Lj >> 16);
      this.Kj = 18e3 * (this.Kj & 65535) + (this.Kj >> 16);
      return ((this.Lj << 16) + this.Kj) / 4294967295 / 2 + 0.5;
    };
    return c;
  })();
  var qd = (function() {
      function c(a) {
        this.oa = a;
        this.n = 0;
        this.Lb = new F(0, 0);
      }
      c.prototype.next = function(a) {
        if (0 === this.oa.length) return null;
        if (0 === this.n)
          return (this.Lb = this.oa[0].clone()), (this.n += 1), this.Lb.clone();
        for (; this.n < this.oa.length; ) {
          var b = this.Lb.bc(this.oa[this.n]);
          if (0 === b) this.n += 1;
          else if (b <= a) (a -= b), (this.n += 1);
          else
            return (
              (this.Lb.x += ((this.oa[this.n].x - this.Lb.x) * a) / b),
              (this.Lb.y += ((this.oa[this.n].y - this.Lb.y) * a) / b),
              this.Lb.clone()
            );
        }
        return null;
      };
      return c;
    })(),
    rd = (function() {
      function c(a) {
        this.tb = a;
        this.Om = !0;
        this.oa = [];
        this.log = A.create("WaveAddon");
        this.yf = a.ia("waveRadius");
      }
      c.prototype.format = function() {
        var a = this.tb
          .jo(!1)
          .ln(L.Fn)
          .Qe();
        this.log("Format cloud; %s points", a[0].length);
        this.oa = this.ZD(a, this.yf);
      };
      c.prototype.ZD = function(a, b) {
        for (var d = [], e = 0; e < a.length; e++) {
          var c = a[e],
            h = new qd(c),
            k = 1,
            l = [];
          if (!(2 > c.length)) {
            var n = 0;
            for (var r = 1; r < c.length; r++)
              n += lc(c[r - 1].x, c[r - 1].y, c[r].x, c[r].y);
            b = n / Math.round(n / (2 * b) + 0.5) / 2;
            for (n = []; ; ) {
              r = h.next(2 * b);
              if (!r) break;
              n.push(r);
            }
            n.push(c[c.length - 1]);
            h = n[0];
            l.push(h);
            for (c = 1; c < n.length; c++) {
              r = n[c];
              var v = mc(h.x, h.y, r.x, r.y);
              var w = b,
                x = new F(v.y * k, -1 * v.x * k);
              h = new F(h.x + (v.x + x.x) * w, h.y + (v.y + x.y) * w);
              l.push(h);
              l.push(r);
              k *= -1;
              h = r;
            }
            for (c = 2; c < l.length - 1; c += 2)
              (k = l[c - 1]),
                (n = l[c + 1]),
                (l[c].x = k.x + (n.x - k.x) / 2),
                (l[c].y = k.y + (n.y - k.y) / 2);
          }
          d.push(l);
        }
        return d;
      };
      c.prototype.la = function(a) {
        a.beginPath();
        for (var b = 0, d = this.oa; b < d.length; b++) {
          var e = d[b];
          a.moveTo(e[0].x, e[0].y);
          for (var c = 1; c < e.length - 1; c += 2)
            a.quadraticCurveTo(e[c].x, e[c].y, e[c + 1].x, e[c + 1].y);
        }
      };
      return c;
    })();
  var sd;
  (function(c) {
    function a(a) {
      a = (1664525 * a + 1013904223) & 4294967295;
      return function() {
        a = (1664525 * a + 1013904223) & 4294967295;
        return a / 4294967295 + 0.5;
      };
    }
    function b(a) {
      return Math.floor(a * c.random());
    }
    c.random = Math.random;
    c.zt = a;
    c.Dq = function(b) {
      c.random = a(b);
    };
    c.UE = function() {
      c.random = Math.random;
    };
    c.CE = b;
    c.SE = function(a) {
      for (var d = [], c = 0; c < a; c++)
        d.push(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890"[
            b(63)
          ]
        );
      return d.join("");
    };
  })(sd || (sd = {}));
  var td = sd;
  var ud = (function(c) {
    function a(a, d) {
      var b = c.call(this) || this;
      b.oC = a;
      b.zi = new K();
      b.x = 0;
      b.y = 0;
      b.gh = td.zt(d);
      return b;
    }
    __extends(a, c);
    a.prototype.la = function(a) {
      c.prototype.la.call(this, a);
      this.zi.la(a);
    };
    a.prototype.p = function(a, d) {
      void 0 === d && (d = 1);
      return a + (this.gh() - 0.5) * this.oC * d;
    };
    a.prototype.moveTo = function(a, d) {
      c.prototype.moveTo.call(this, this.p(a), this.p(d));
      this.zi.moveTo(this.p(a), this.p(d));
      this.x = a;
      this.y = d;
    };
    a.prototype.closePath = function() {
      c.prototype.closePath.call(this);
      this.zi.closePath();
    };
    a.prototype.lineTo = function(a, d) {
      var b = this.x + 0.5 * (a - this.x),
        f = this.y + 0.5 * (d - this.y),
        h = this.x + 0.75 * (a - this.x),
        k = this.y + 0.75 * (d - this.y);
      c.prototype.bezierCurveTo.call(
        this,
        this.p(b),
        this.p(f),
        this.p(h),
        this.p(k),
        this.p(a),
        this.p(d)
      );
      this.zi.bezierCurveTo(
        this.p(b),
        this.p(f),
        this.p(h),
        this.p(k),
        this.p(a),
        this.p(d)
      );
      this.x = a;
      this.y = d;
    };
    a.prototype.quadraticCurveTo = function(a, d, e, f) {
      c.prototype.quadraticCurveTo.call(
        this,
        this.p(a),
        this.p(d),
        this.p(e),
        this.p(f)
      );
      this.zi.quadraticCurveTo(this.p(a), this.p(d), this.p(e), this.p(f));
      this.x = e;
      this.y = f;
    };
    a.prototype.bezierCurveTo = function(a, d, e, f, h, k) {
      c.prototype.bezierCurveTo.call(
        this,
        this.p(a),
        this.p(d),
        this.p(e),
        this.p(f),
        this.p(h),
        this.p(k)
      );
      this.zi.bezierCurveTo(
        this.p(a),
        this.p(d),
        this.p(e),
        this.p(f),
        this.p(h),
        this.p(k)
      );
      this.x = h;
      this.y = k;
    };
    a.prototype.Hy = function(a) {
      var b = new Oc(this.ln(1).Qe(), new qc(Math.PI / 4, 0, 0)),
        e = 1 / 0.3,
        c = e / 4,
        h = 0;
      for (b = b.Sz(e); h < b.length; h++)
        (e = b[h]),
          a.moveTo(this.p(e.start.x, c), this.p(e.start.y, c)),
          a.lineTo(this.p(e.end.x, c), this.p(e.end.y, c));
    };
    return a;
  })(K);
  var vd = (function() {
    function c(a) {
      this.tb = a;
      this.Qy = this.Om = !0;
      this.outline = null;
      this.fill = new K();
    }
    c.prototype.format = function() {
      var a = this.tb.ia("roughness") || 0;
      this.outline = new ud(a, this.tb.ia("seed") || 0);
      this.tb.iq.la(this.outline);
      this.tb.ia("lineWidth");
      this.tb.ia("closed") &&
        ((this.fill = new K()), this.outline.Hy(this.fill));
    };
    c.prototype.la = function(a) {
      if (this.outline) {
        var b = this.tb.ia("lineWidth") || 1;
        this.tb.ia("closed") &&
          (a.beginPath(),
          (a.lineWidth = 1),
          (a.strokeStyle = this.tb.ap("fill")),
          this.fill.la(a),
          a.stroke());
        a.beginPath();
        a.setLineDash(this.tb.Ob);
        a.lineWidth = b;
        a.strokeStyle = this.tb.ia("strokeStyle");
        this.outline.la(a);
        a.stroke();
      }
    };
    return c;
  })();
  var L = (function(c) {
    function a(b, d) {
      b = c.call(this, b, d) || this;
      b.Ga = [];
      b.ug = 0;
      b.Od = [];
      b.Vq = [];
      b.jw = !1;
      b.inverse = new J();
      b.origin = new F(0, 0);
      b.Ob = [];
      b.iq = new K();
      b.Wd = new K();
      b.Xt = !1;
      b.backgroundImage = null;
      b.lg = null;
      b.log = A.create("PATHNODE");
      b.log("New PathNode Created");
      b.hc = new fd("", d);
      b.hc.setProperty("text", b.ba.text);
      b.fo(a.sa);
      b.ba.closed = !1;
      b.ba.commands = [];
      b.ba.seed = 0;
      return b;
    }
    __extends(a, c);
    a.prototype.moveTo = function(b, d) {
      var e = this.ba.commands;
      e.push(a.wh);
      e.push(b);
      e.push(d);
    };
    a.prototype.type = function() {
      return "PathNode";
    };
    a.prototype.Pg = function() {
      return !0;
    };
    a.prototype.jc = function(a) {
      switch (a) {
        case "sides":
        case "rotation":
        case "radius":
        case "oddRadiusScaling":
        case "skewX":
        case "skewY":
          return !0;
      }
      return c.prototype.jc.call(this, a);
    };
    a.prototype.setProperty = function(a, d) {
      c.prototype.setProperty.call(this, a, d);
      switch (a) {
        case "bold":
        case "fontName":
        case "fontSize":
        case "italic":
        case "text":
        case "textAlign":
        case "textDecoration":
        case "wrap":
          this.ba[a] = d;
          this.hc.setProperty(a, d);
          break;
        case "textFillStyle":
          this.hc.setProperty("fillStyle", d);
          this.ba[a] = d;
          break;
        case "textBackground":
          this.hc.setProperty("background", d);
          this.ba[a] = d;
          break;
        case "roughness":
        case "cloudRadius":
        case "waveRadius":
        case "doubleLine":
        case "doubleLineDashSide":
        case "spotHighlight":
        case "verticalAlign":
          this.ba[a] = d;
          break;
        case "backgroundImage":
          (this.ba[a] = d), (this.backgroundImage = null);
      }
    };
    a.prototype.Ig = function(a, d) {
      switch (a) {
        case "roughness":
          "string" === typeof d && (d = parseFloat(d));
      }
      return c.prototype.Ig.call(this, a, d);
    };
    a.prototype.ia = function(a) {
      switch (a) {
        case "textAlign":
          return this.ba[a] || "center";
        case "textFillStyle":
          return this.ba[a] || q.Oa;
      }
      return c.prototype.ia.call(this, a);
    };
    a.prototype.rb = function() {
      var a = c.prototype.rb.call(this);
      a.text && (a.textFillStyle = a.textFillStyle || q.Oa);
      return a;
    };
    a.prototype.Ml = function(b) {
      for (var d = 0, e = this.ba.commands, c = (b / 3) | 0, h = 0; h < c; h++)
        d += a.mb[e[d]] + 1;
      h = (b % 3) * 2 + 1;
      c = e[d + h];
      d = e[d + h + 1];
      this.log("getEditHandle(%s) = (%s, %s)", b, c, d);
      this.Na().apply(c, d);
    };
    a.prototype.Je = function(b, d, e) {
      for (
        var c = 0, h = this.ba.commands.concat(), k = (b / 3) | 0, l = 0;
        l < k;
        l++
      )
        c += a.mb[h[c]] + 1;
      k = this.inverse.apply(d, e);
      l = (b % 3) * 2 + 1;
      h[c + l] = k.x;
      h[c + l + 1] = k.y;
      if (0 === b && this.ba.closed) {
        for (b = null; c < h.length; )
          (k = a.mb[h[c]]), 2 <= k && (b = c), (c += k + 1);
        b &&
          ((c = b),
          (k = this.inverse.apply(d, e)),
          (h[c + 1] = k.x),
          (h[c + 2] = k.y));
      }
      return { commands: h };
    };
    a.prototype.dC = function(b) {
      for (var d = this.ba.commands, e = 0, c = 0; c < b / 3; c++)
        e += a.mb[d[e]] + 1;
      d.splice(e, a.mb[d[e]] + 1);
    };
    a.prototype.oz = function() {
      return this.ia("arrowXOffset") || this.ia("arrowSize");
    };
    a.prototype.QB = function(a) {
      var b = this.ba.sides;
      if (!b || 3 > b) return a;
      a = new N();
      b = Nc(
        this.ba.sides,
        this.ba.radius || 50,
        this.ba.rotation,
        this.ba.oddRadiusScaling || 1,
        this.ba.skewX || 0,
        this.ba.skewY || 0
      );
      for (var e = 0; e < b.length; e++) {
        var c = b[e];
        0 === e ? a.moveTo(c.x, c.y) : a.lineTo(c.x, c.y);
      }
      a.closePath();
      return a.qc();
    };
    a.prototype.format = function(b, d) {
      var e = this,
        c = null;
      this.Ga.length = 0;
      this.inverse = this.ba.matrix.inverse();
      var h = new F(0, 0),
        k = this.QB(this.ba.commands),
        l = null,
        n = this.ba.matrix,
        r = new pd(this.ba.seed);
      this.Vq.length = 0;
      for (var v = null, w = null, x = 0; x < k.length; ) {
        switch (k[x++]) {
          case a.wh:
            h = n.apply(k[x++], k[x++]);
            w = new gd(l, h);
            this.Ga.push(w);
            null === c && (c = h);
            this.Vq.push(h);
            v = null;
            break;
          case a.Se:
            l &&
              ((h = n.apply(k[x++], k[x++])),
              this.Ga.push(
                new hd(l, h, r, this.ba.sloppiness, this.ba.roundRadius)
              ),
              this.Vq.push(h));
            break;
          case a.zh:
            if (l) {
              h = n.apply(k[x++], k[x++]);
              var y = n.apply(k[x++], k[x++]);
              this.Ga.push(new jd(l, y, h));
            }
            break;
          case a.Dn:
            if (l) {
              h = n.apply(k[x++], k[x++]);
              y = n.apply(k[x++], k[x++]);
              var B = k[x++];
              this.Ga.push(new kd(l, y, h, B));
            }
            break;
          case a.Cn:
            if (l) {
              h = n.apply(k[x++], k[x++]);
              y = n.apply(k[x++], k[x++]);
              B = k[x++];
              var H = k[x++],
                M = k[x++],
                I = k[x++];
              this.Ga.push(new ld(l, y, h, B, H, M, I));
            }
            break;
          case a.Gk:
            l &&
              ((h = n.apply(k[x++], k[x++])),
              (B = n.apply(k[x++], k[x++])),
              (y = n.apply(k[x++], k[x++])),
              this.Ga.push(new md(l, B, y, h)));
            break;
          case a.Pr:
            l &&
              ((h = n.apply(k[x++], k[x++])),
              (B = n.apply(k[x++], k[x++])),
              (y = n.apply(k[x++], k[x++])),
              this.Ga.push(new nd(l, B, y, h)));
            break;
          case a.Gi:
            l &&
              ((h = n.apply(k[x++], k[x++])),
              this.Ga.push(new id(l, h, this.ba.smoothness)));
            break;
          case a.Gn:
            l &&
              ((h = n.apply(k[x++], k[x++])),
              (B = n.apply(k[x++], k[x++])),
              this.Ga.push(new od(l, B, h, r, this.ba.sloppiness)));
            break;
          case a.nd:
            this.ba.closed = !0;
            v && l && v !== l && v.mk && w && (v.mk(l), (l.ja = w.ja));
            break;
          default:
            x++;
        }
        l = this.Ga[this.Ga.length - 1];
        null !== v || l instanceof gd || (v = l);
      }
      this.origin = c || new F(0, 0);
      this.ug = this.Ga.length;
      this.iz(r);
      this.rect.x = this.origin.x;
      this.rect.y = this.origin.y;
      this.rect.width = 0;
      this.rect.height = 0;
      this.Ob = Bc(this.ba.dashes || "");
      c = this.Ob.length ? a.Fn : a.yw;
      this.iq = this.jo(!0);
      this.Wd = this.iq.ln(c);
      h = 0 + this.ia("shapeWidth");
      0 < h && (this.Wd = this.hy(this.Wd, h));
      this.rect = this.Wd.gl(c);
      h = this.rect.width - 2 * (this.ba.lineWidth / 2 + 1);
      k = this.ba.lineWidth;
      l = this.Wd.clone();
      l.transform(this.cc());
      this.ya = l.gl(c);
      this.rect.Ed(k + 1, k + 1);
      8 > this.rect.width &&
        ((this.rect.x += this.rect.width / 2 - 4), (this.rect.width = 8));
      8 > this.rect.height &&
        ((this.rect.y += this.rect.height / 2 - 4), (this.rect.height = 8));
      if ("" !== this.ba.text) {
        c = this.rect.Qd();
        this.hc.setProperty("textAlign", this.ba.textAlign || "center");
        this.hc.setProperty("baseWidth", h);
        this.hc.format(b);
        h = c.x - this.hc.rect.x - this.hc.rect.width / 2;
        k = 0;
        switch (this.ba.verticalAlign) {
          default:
          case "middle":
            k = c.y - this.hc.rect.y - this.hc.vp / 2;
            break;
          case "top":
            k = this.rect.y - this.hc.rect.y;
            break;
          case "bottom":
            k = this.rect.bottom() - this.hc.vp - this.hc.rect.y;
        }
        this.hc.transform(new pc(h, k));
        this.hc.format(b);
      }
      this.jw =
        0 === q.ff(this.ba.fillStyle).values[3] &&
        !this.backgroundImage &&
        !this.ba.spotHighlight;
      this.xt("fill", b, d, this.ba.fillStyle);
      this.Od.length = 0;
      0 < this.ba.cloudRadius
        ? this.Od.push(new ad(this))
        : 0 < this.ba.waveRadius
        ? this.Od.push(new rd(this))
        : this.ba.doubleLine
        ? this.Od.push(new wd(this))
        : this.ba.roughness && this.Od.push(new vd(this));
      for (x = 0; x < this.Od.length; x++) this.Od[x].format(b);
      (b = this.ia("backgroundImage")) &&
        null === this.backgroundImage &&
        d.add(this.id, "image", b, null, function(a) {
          e.backgroundImage = a;
          d.gg(e.id);
        });
      b = /url\(([^\)]+)\)/.exec(this.ia("strokeStyle"));
      var z;
      b && (z = b[1]);
      !z || (null !== this.lg && this.lg.src === z)
        ? !z && this.lg && (this.lg = null)
        : d.add(this.id, "image", z, null, function(a) {
            e.lg = a;
            d.gg(e.id);
          });
    };
    a.prototype.Ul = function() {
      return this.Wd;
    };
    a.prototype.iz = function(a) {
      function b(b, d) {
        b = b.clone();
        l && ((b.x += d.x * h * 0.5), (b.y += d.y * h * 0.5));
        var f = b.x - d.x * h;
        var n = b.y - d.y * h;
        var r = f + (d.y * c) / 2;
        var v = n - (d.x * c) / 2;
        f += (-d.y * c) / 2;
        n += (d.x * c) / 2;
        e.Ga.push(new gd(e.Ga[e.Ga.length - 1], new F(f, n)));
        e.Ga.push(new id(e.Ga[e.Ga.length - 1], b, k));
        e.Ga.push(new id(e.Ga[e.Ga.length - 1], new F(r, v), k));
        "solid" === e.ba.arrowStyle &&
          e.Ga.push(
            new hd(e.Ga[e.Ga.length - 1], new F(f, n), a, e.ba.smoothness, 0)
          );
      }
      if (
        (this.Xt =
          0 < this.ba.arrowSize && !this.ba.closed && 0 < this.Ga.length)
      ) {
        var e = this,
          c = this.ba.arrowSize + 1.5 * this.ba.lineWidth,
          h = this.ba.arrowXOffset,
          k = this.ba.smoothness,
          l = this.ba.doubleLine;
        null === h && (h = c);
        var n = this.Ga[this.Ga.length - 1];
        b(n.ja, n.wd());
        this.ba.doubleArrow && b(this.Ga[0].ja, nc(this.Ga[1].Ff()));
      }
    };
    a.prototype.close = function() {
      this.ba.commands.push(a.nd);
    };
    a.prototype.zx = function() {
      var a = this.Ga[this.Ga.length - 1];
      a &&
        8 >= lc(a.ja.x, a.ja.y, this.origin.x, this.origin.y) &&
        this.close();
    };
    a.prototype.hy = function(a, d) {
      this.log("ConvertToRects: width=%s", d);
      var b = 0;
      a = a.fa;
      for (var c = 0, h = 0, k, l, n = new K(); b < a.length; ) {
        this.log("cmd %s %s %s", a[b], a[b + 1], a[b + 2]);
        switch (a[b]) {
          case K.Wc:
            c = a[b + 1];
            h = a[b + 2];
            break;
          case K.pd:
            k = a[b + 1];
            l = a[b + 2];
            this.log("(%s,%s-%s,%s)", c, h, k, l);
            if (0 < lc(c, h, k, l)) {
              var r = mc(c, h, k, l),
                v = (r.y * d) / 2;
              r = (-r.x * d) / 2;
              n.moveTo(c + v, h + r);
              n.lineTo(k + v, l + r);
              n.lineTo(k - v, l - r);
              n.lineTo(c - v, h - r);
              n.closePath();
            }
            c = k;
            h = l;
        }
        b += K.rd[a[b]];
      }
      return n;
    };
    a.prototype.clip = function(a) {
      if (this.ba.closed) {
        var b = new K();
        this.log("Clipping to a path");
        for (var e = 0; e < this.Ga.length; e++) this.Ga[e].la(b);
        b.closePath();
        0 > b.Mi() && (b = b.lC());
        b.la(a);
      }
    };
    a.prototype.la = function(a) {
      this.ba.spotHighlight
        ? this.log("Not drawing node %s due to spothighlight", this.id)
        : c.prototype.la.call(this, a);
    };
    a.prototype.Mf = function(a) {
      var b = this.inverse;
      a.save();
      a.lineJoin = "round";
      a.transform(b.m11, b.m21, b.m12, b.m22, b.Aa, b.Ba);
      a.beginPath();
      a.lineCap = "round";
      b = !0;
      var e = !1,
        c;
      for (c = 0; c < this.Od.length; c++)
        this.Od[c].Om && (b = !1), this.Od[c].Qy && ((e = !0), (b = !1));
      this.lg && (b = !1);
      if (b) for (c = 0; c < this.Ga.length; c++) this.Ga[c].la(a);
      for (c = 0; c < this.Od.length; c++) this.Od[c].la(a);
      if (!b && 0 < this.ba.arrowSize)
        for (c = this.ug; c < this.Ga.length; c++) this.Ga[c].la(a);
      if (this.ba.closed) {
        a.closePath();
        if (this.backgroundImage) {
          a.fillStyle =
            a.createPattern(this.backgroundImage, "no-repeat") || "magenta";
          c = Math.max(
            this.rect.width / this.backgroundImage.naturalWidth,
            this.rect.height / this.backgroundImage.naturalHeight
          );
          var h = this.rect.width - this.backgroundImage.naturalWidth * c,
            k = this.rect.height - this.backgroundImage.naturalHeight * c;
          a.translate(this.rect.x + h / 2, this.rect.y + k / 2);
          a.scale(c, c);
          a.fill();
          a.scale(1 / c, 1 / c);
          a.translate(-this.rect.x - h / 2, -this.rect.y - k / 2);
        } else e || ((a.fillStyle = this.ap("fill")), a.fill());
        a.shadowColor = q.Ue;
      }
      b &&
        (this.Ob.length && 0 < this.ba.lineWidth
          ? (a.beginPath(), this.Wd.wl(a, this.Ob), (a.lineCap = "butt"))
          : 0 < 0 + this.ia("shapeWidth") && (a.beginPath(), this.Wd.la(a)));
      if (this.lg)
        for (b = this.Wd.Qe(), e = this.lg, c = 0; c < b.length; c++) {
          k = b[c];
          if (2 > k.length) break;
          h = 0;
          k = Mc(k);
          var l = k.next();
          if (l.done) break;
          for (var n = l.value.mi, r = e.width; !l.done; ) {
            l = k.next(r);
            if (l.done) break;
            var v = l.value.mi,
              w = l.value.length,
              x = h % e.width;
            h += w;
            r -= w;
            0 >= r && (r += e.width);
            var y = Math.atan2(v.y - n.y, v.x - n.x);
            a.save();
            a.translate(n.x, n.y);
            a.rotate(y);
            a.translate(0, -e.height / 2);
            a.drawImage(e, x, 0, w, e.height, 0, 0, w, e.height);
            a.restore();
            n = v;
          }
        }
      else 0 < this.ba.lineWidth && !e && a.stroke();
      if (this.ba.arrowSize && "solid" === this.ba.arrowStyle) {
        a.beginPath();
        for (c = this.ug; c < this.Ga.length; c++) this.Ga[c].la(a);
        a.fillStyle = this.ba.strokeStyle;
        a.fill();
      } else if (this.ba.arrowSize && this.Ob.length) {
        a.beginPath();
        for (c = this.ug; c < this.Ga.length; c++) this.Ga[c].la(a);
        0 < this.ba.lineWidth && a.stroke();
      }
      "" !== this.ba.text && this.hc.la(a);
      a.restore();
    };
    a.prototype.Hb = function(a, d, e, c) {
      if (this.hidden() || this.ia("locked")) return null;
      e = Math.max(12 / c + this.ba.shapeWidth / 2 + this.ba.lineWidth / 2, e);
      if (
        a >= this.rect.x - e &&
        a < this.rect.x + e + this.rect.width &&
        d >= this.rect.y - e &&
        d < this.rect.y + e + this.rect.height
      )
        if (this.ba.closed && !this.jw) {
          if (this.Wd.PB(a, d, e)) return this;
        } else if (
          this.Wd.hv(a, d, e) ||
          ("" !== this.ba.text && this.hc.Hb(a, d, e, c))
        )
          return this;
      return null;
    };
    a.prototype.jo = function(a) {
      var b = new K();
      if (0 < this.ba.arrowSize && !a)
        for (a = 0; a < this.ug; a++) this.Ga[a].la(b);
      else for (a = 0; a < this.Ga.length; a++) this.Ga[a].la(b);
      this.ba.closed && b.closePath();
      return b;
    };
    a.prototype.lineTo = function(b, d) {
      var e = this.ba.commands;
      e.push(a.Se);
      e.push(b);
      e.push(d);
    };
    a.prototype.Yi = function(b, d) {
      var e = this.ba.commands;
      e.push(a.Gi);
      e.push(b);
      e.push(d);
    };
    a.prototype.mf = function() {
      return (
        !1 !== this.ba.editable && !0 !== this.ba.lockEditMode && !this.ba.sides
      );
    };
    a.prototype.Pq = function() {
      var b = this.ba.commands;
      return 6 === b.length && (b[3] === a.Se || b[3] === a.Gi);
    };
    a.prototype.Xh = function(a, d, e) {
      e *= 8;
      if (
        a >= this.origin.x - e &&
        a < this.origin.x + e &&
        d >= this.origin.y - e &&
        d < this.origin.y + e
      )
        return 0;
      for (var b = 0; b < this.ug; b++) {
        var c = this.Ga[b];
        if (
          a >= this.Ga[b].ja.x - e &&
          a < this.Ga[b].ja.x + e &&
          d >= this.Ga[b].ja.y - e &&
          d < this.Ga[b].ja.y + e
        )
          return 3 * b;
        if (c.control) {
          if (
            a >= c.control.x - e &&
            a < c.control.x + e &&
            d >= c.control.y - e &&
            d < c.control.y + e
          )
            return 3 * b + 1;
        } else if (c.Pa) {
          if (
            a >= c.Pa.x - e &&
            a < c.Pa.x + e &&
            d >= c.Pa.y - e &&
            d < c.Pa.y + e
          )
            return 3 * b + 1;
          if (
            c.Va &&
            a >= c.Va.x - e &&
            a < c.Va.x + e &&
            d >= c.Va.y - e &&
            d < c.Va.y + e
          )
            return 3 * b + 2;
        }
      }
      return null;
    };
    a.prototype.Nl = function(b) {
      var d = this.ba.commands;
      b /= 3;
      var e = 0,
        c = !1,
        h = 0,
        k;
      for (k = 0; k < d.length; ) {
        var l = d[k];
        if (l === a.nd) {
          c = !0;
          break;
        }
        h += 1;
        k += a.mb[d[k]] + 1;
      }
      0 === b && c && (b = h - 1);
      for (k = 0; k < d.length; e++) {
        c = null;
        switch (d[k]) {
          case a.wh:
            c = "move_to";
            break;
          case a.Se:
            c = "line_to";
            break;
          case a.zh:
            c = "quadratic_to";
        }
        if (b === e) return c;
        k += a.mb[d[k]] + 1;
      }
      return null;
    };
    a.Lw = function(b, d, e) {
      if ("number" !== typeof d) return null;
      d /= 3;
      var c = 0,
        h = [],
        k = new F(0, 0),
        l = !1,
        n = 0,
        r;
      for (r = 0; r < b.length; ) {
        var v = b[r];
        if (v === a.nd) {
          l = !0;
          break;
        }
        n += 1;
        r += a.mb[b[r]] + 1;
      }
      0 === d && l && (d = n - 1);
      for (r = 0; r < b.length; c++) {
        v = b[r];
        l = !1;
        d === c &&
          (v === a.zh && "line_to" === e
            ? (h.push(a.Se, b[r + 1], b[r + 2]), (l = !0))
            : v === a.Se &&
              "quadratic_to" === e &&
              (h.push(
                a.zh,
                b[r + 1],
                b[r + 2],
                (k.x + b[r + 1]) / 2,
                (k.y + b[r + 2]) / 2
              ),
              (l = !0)));
        k = new F(b[r + 1], b[r + 2]);
        if (!l) for (v = 0; v < 1 + a.mb[b[r]]; v++) h.push(b[r + v]);
        r += a.mb[b[r]] + 1;
      }
      return h;
    };
    a.prototype.lu = function() {
      return !0;
    };
    a.prototype.hj = function(a, d, e) {
      function b(b, d, e) {
        a.beginPath();
        a.rect(b - c, d - c, 2 * c, 2 * c);
        a.fillStyle = e ? "#0050B7" : q.Xc;
        a.fill();
        a.stroke();
      }
      a.save();
      a.lineWidth = 1 * d;
      a.strokeStyle = q.Oa;
      a.lineWidth = 1;
      a.shadowBlur = 3 * d;
      a.shadowOffsetX = 0;
      a.shadowOffsetY = 0;
      a.shadowColor = "rgba(0,0,0,0.2)";
      a.strokeStyle = "#ccc";
      a.fillStyle = q.Xc;
      var c = 6 * d;
      b(this.origin.x, this.origin.y, 0 === e);
      for (d = 1; d < this.ug; d++) {
        var k = this.Ga[d];
        a.beginPath();
        if (k.control)
          a.arc(k.control.x, k.control.y, c, 0, 2 * Math.PI),
            a.arc(k.control.x, k.control.y, 2 * c, 0, 2 * Math.PI),
            e === 3 * d + 1 ? a.fill() : a.stroke();
        else if (k instanceof md || k instanceof nd) {
          var l = k.Pa;
          var n = k.Va;
          var r = k.qa.ja;
          l &&
            (a.moveTo(r.x, r.y),
            a.lineTo(l.x, l.y),
            a.moveTo(l.x + c, l.y),
            a.arc(l.x, l.y, c, 0, 2 * Math.PI),
            e === 3 * d + 1 ? a.fill() : a.stroke());
          a.beginPath();
          a.moveTo(k.ja.x, k.ja.y);
          a.lineTo(n.x, n.y);
          a.moveTo(n.x + c, n.y);
          a.arc(n.x, n.y, c, 0, 2 * Math.PI);
          e === 3 * d + 2 ? a.fill() : a.stroke();
        }
        b(this.Ga[d].ja.x, this.Ga[d].ja.y, e === 3 * d);
      }
      a.restore();
    };
    a.Aw = function(a) {
      var b = new N(),
        e = 0;
      for (a = a.fa; e < a.length; ) {
        switch (a[e]) {
          case K.Wc:
            b.moveTo(a[e + 1], a[e + 2]);
            break;
          case K.pd:
            b.lineTo(a[e + 1], a[e + 2]);
            break;
          case K.Jf:
            b.bezierCurveTo(
              a[e + 1],
              a[e + 2],
              a[e + 3],
              a[e + 4],
              a[e + 5],
              a[e + 6]
            );
            break;
          case K.Lf:
            b.quadraticCurveTo(a[e + 1], a[e + 2], a[e + 3], a[e + 4]);
            break;
          case K.nd:
            b.close();
        }
        e += K.rd[a[e]];
      }
      return b.qc();
    };
    a.sa = {
      strokeStyle: q.Oa,
      fillStyle: q.Xc,
      fontName: "Arial",
      fontSize: 20,
      lineWidth: 2,
      dashes: "",
      shapeWidth: 0,
      smoothness: 0.3,
      sloppiness: 0,
      shadow: !1,
      closed: !1,
      arrowSize: 0,
      arrowXOffset: null,
      arrowStyle: "simple",
      doubleArrow: !1,
      text: "",
      roundRadius: 0,
      wrap: !1,
      roughness: 0,
    };
    a.yw = 8;
    a.Fn = 2;
    a.wh = 0;
    a.Se = 1;
    a.zh = 2;
    a.Dn = 3;
    a.Gk = 4;
    a.Gi = 5;
    a.Gn = 6;
    a.nd = 7;
    a.Pr = 8;
    a.Cn = 9;
    a.lE = 0.5522847498;
    a.mb = [];
    return a;
  })(cd);
  L.mb[L.wh] = 2;
  L.mb[L.Se] = 2;
  L.mb[L.zh] = 4;
  L.mb[L.Dn] = 5;
  L.mb[L.Gk] = 6;
  L.mb[L.Gi] = 2;
  L.mb[L.Gn] = 4;
  L.mb[L.nd] = 0;
  L.mb[L.Pr] = 6;
  L.mb[L.Cn] = 8;
  var N = (function() {
    function c(a) {
      void 0 === a && (a = []);
      this.fa = a;
    }
    c.prototype.beginPath = function() {};
    c.prototype.Pf = function(a, b, d) {
      for (var e = 0, c = 0; c < a; c++) e += L.mb[this.fa[e]] + 1;
      this.fa[e + 1] = b;
      this.fa[e + 2] = d;
    };
    c.prototype.moveTo = function(a, b) {
      this.fa.push(L.wh);
      this.fa.push(a);
      this.fa.push(b);
    };
    c.prototype.lineTo = function(a, b) {
      this.fa.push(L.Se);
      this.fa.push(a);
      this.fa.push(b);
    };
    c.prototype.Yi = function(a, b) {
      this.fa.push(L.Gi);
      this.fa.push(a);
      this.fa.push(b);
    };
    c.prototype.quadraticCurveTo = function(a, b, d, e) {
      this.fa.push(L.zh);
      this.fa.push(d);
      this.fa.push(e);
      this.fa.push(a);
      this.fa.push(b);
    };
    c.prototype.yg = function(a, b, d, e) {
      this.fa.push(L.Gn);
      this.fa.push(d);
      this.fa.push(e);
      this.fa.push(a);
      this.fa.push(b);
    };
    c.prototype.bezierCurveTo = function(a, b, d, e, c, h) {
      this.fa.push(L.Gk);
      this.fa.push(c);
      this.fa.push(h);
      this.fa.push(a);
      this.fa.push(b);
      this.fa.push(d);
      this.fa.push(e);
    };
    c.prototype.arc = function(a, b, d, e, c, h) {
      void 0 === h && (h = !0);
      var f = new qc(-c, a, b).apply(a + d, b);
      this.fa.push(L.Cn);
      this.fa.push(f.x);
      this.fa.push(f.y);
      this.fa.push(a);
      this.fa.push(b);
      this.fa.push(d);
      this.fa.push(e);
      this.fa.push(c);
      this.fa.push(h ? 1 : 0);
    };
    c.prototype.arcTo = function(a, b, d, e, c) {
      this.fa.push(L.Dn);
      this.fa.push(d);
      this.fa.push(e);
      this.fa.push(a);
      this.fa.push(b);
      this.fa.push(c);
    };
    c.prototype.Ct = function() {
      for (var a = [], b = 0; b < this.fa.length; ) {
        for (var d = this.fa[b], e = 0; e < L.mb[d]; e += 2)
          a.push(new F(this.fa[b + 1 + e], this.fa[b + 1 + e + 1]));
        b += L.mb[d] + 1;
      }
      a = G.uh(a);
      return { x: a.x, y: a.y, width: a.width, height: a.height };
    };
    c.prototype.CD = function(a, b) {
      for (var d = 0; d < this.fa.length; ) {
        for (var e = this.fa[d], c = 0; c < L.mb[e]; c += 2)
          (this.fa[d + 1 + c] += a), (this.fa[d + 2 + c] += b);
        d += L.mb[e] + 1;
      }
    };
    c.prototype.translate = function() {
      throw Error("Not implemented: translate");
    };
    c.prototype.scale = function() {
      throw Error("Not implemented: scale");
    };
    c.prototype.rotate = function() {
      throw Error("Not implemented: rotate");
    };
    c.prototype.closePath = function() {
      this.fa.push(L.nd);
    };
    c.prototype.close = function() {
      this.closePath();
    };
    c.prototype.qc = function() {
      return this.fa;
    };
    return c;
  })();
  N.prototype.change = N.prototype.Pf;
  N.prototype.moveTo = N.prototype.moveTo;
  N.prototype.lineTo = N.prototype.lineTo;
  N.prototype.curveTo = N.prototype.Yi;
  N.prototype.quadraticCurveTo = N.prototype.quadraticCurveTo;
  N.prototype.cornerTo = N.prototype.yg;
  N.prototype.bezierCurveTo = N.prototype.bezierCurveTo;
  N.prototype.arc = N.prototype.arc;
  N.prototype.arcTo = N.prototype.arcTo;
  N.prototype.getBoundingBox = N.prototype.Ct;
  N.prototype.translateAll = N.prototype.CD;
  N.prototype.closePath = N.prototype.closePath;
  N.prototype.close = N.prototype.close;
  N.prototype.toArray = N.prototype.qc;
  function xd() {
    var c = new F(0, 0),
      a = new N();
    a.moveTo(c.x, c.y - 50);
    a.yg(c.x + 50, c.y - 50, c.x + 50, c.y);
    a.yg(c.x + 50, c.y + 50, c.x, c.y + 50);
    a.yg(c.x - 50, c.y + 50, c.x - 50, c.y);
    a.yg(c.x - 50, c.y - 50, c.x, c.y - 50);
    a.closePath();
    return a.qc();
  }
  cd.td("PathNode", L);
  N.prototype.beginPath = N.prototype.beginPath;
  N.prototype.change = N.prototype.Pf;
  N.prototype.moveTo = N.prototype.moveTo;
  N.prototype.lineTo = N.prototype.lineTo;
  N.prototype.curveTo = N.prototype.Yi;
  N.prototype.quadraticTo = N.prototype.LE;
  N.prototype.cornerTo = N.prototype.yg;
  N.prototype.bezierTo = N.prototype.vE;
  N.prototype.arc = N.prototype.arc;
  N.prototype.arcTo = N.prototype.arcTo;
  N.prototype.getBoundingBox = N.prototype.Ct;
  N.prototype.translate = N.prototype.translate;
  N.prototype.closePath = N.prototype.closePath;
  N.prototype.close = N.prototype.close;
  N.prototype.toArray = N.prototype.qc;
  var wd = (function() {
    function c(a) {
      this.tb = a;
      this.yf = 0;
      this.Om = !0;
      this.cm = !1;
      this.path = new K();
      this.Hm = new K();
      this.log = A.create("DoubleLineAddon");
    }
    c.prototype.format = function() {
      this.log("Formatting doubleline; thickness=%s", this.tb.ia("doubleLine"));
      var a = this.tb.jo(!1).ln(L.Fn),
        b = this.tb.oz();
      if (0 < b) {
        var d = a.Gx();
        d > b && (a = a.Kx(d - b));
      }
      a = a.Qe();
      b = this.tb.ia("doubleLine");
      this.path = new K();
      this.Hm = new K();
      d = this.tb.ia("doubleLineDashSide");
      this.cm = !1;
      "outer" === d
        ? (Ic(this.path, a, b, !0, !1),
          Ic(this.Hm, a, b, !1, !0),
          (this.cm = !0))
        : "inner" === d
        ? (Ic(this.path, a, b, !1, !0),
          Ic(this.Hm, a, b, !0, !1),
          (this.cm = !0))
        : Ic(this.path, a, b, !0, !0);
    };
    c.prototype.la = function(a) {
      a.beginPath();
      this.tb.Ob.length && this.cm
        ? (this.Hm.wl(a, this.tb.Ob), this.path.la(a))
        : this.tb.Ob.length
        ? this.path.wl(a, this.tb.Ob)
        : this.path.la(a);
    };
    return c;
  })();
  function yd(c, a) {
    function b() {
      var a = f.offsetWidth,
        b = f.offsetHeight,
        d = u.am();
      u(f).lk({
        left: d.left + d.width / 2 - a / 2,
        top: d.top + d.height / 2 - b / 2,
      });
    }
    function d(a) {
      (a.target instanceof HTMLElement &&
        (f === a.target || f.contains(a.target))) ||
        y.hide();
    }
    function e(a) {
      zd(a.target) ||
        (v &&
          "outside" !== v &&
          "none" !== v &&
          setTimeout(function() {
            y.hide();
          }, 0));
    }
    void 0 === a && (a = {});
    var f = u.nc(c);
    if (!f) throw Error("Zwibbler.Dialog: Bad element passed in: " + c);
    c = a.overlay || "transparent";
    var h = null === f.parentNode;
    "static" === u(f).Ce("position") && (f.style.position = "absolute");
    var k = u(f).Ce("display");
    "none" === k && (k = "block");
    f.style.display = "none";
    var l = new bb(c);
    l.insertBefore = f;
    var n = a.showNear || null,
      r = a.showHow || "",
      v = !1,
      w = Ad(f),
      x = !1,
      y = {
        hide: function() {
          l.pf();
          f.style.display = "none";
          if (y.onhide) y.onhide();
          window.removeEventListener("resize", b);
        },
        isShown: function() {
          return "none" !== u(f).Ce("display");
        },
        show: function(a, e, c, h) {
          void 0 === c && (c = !1);
          void 0 === h && (h = !0);
          var w = 0,
            x = 0,
            B = "",
            H = "";
          "number" === typeof a && "number" === typeof e
            ? ((w = a), (x = e), (a = !0))
            : ((B = a || n), (H = e || r), (a = !1));
          e = u.Jt() + 1;
          f.style.zIndex = e.toString();
          l.zIndex = e;
          f.parentNode || document.body.appendChild(f);
          f.style.display = k;
          f.style.visibility = "hidden";
          if (a)
            (f.style.position = "absolute"),
              setTimeout(function() {
                var a = f.offsetWidth,
                  b = f.offsetHeight,
                  d = u.am(),
                  e = { left: w, top: x };
                e.left = Math.min(e.left, d.left + d.width - a - 2);
                e.top = Math.min(e.top, d.top + d.height - b - 3);
                u(f).lk(e);
                f.style.visibility = "visible";
                if (y.onshow) y.onshow();
              }, 0);
          else if (B && H)
            if ((B = u.nc(B))) {
              var M = u(B).oc();
              setTimeout(function() {
                f.style.visibility = "visible";
                var a = f,
                  b = { left: M.left, top: M.top },
                  d = H.toLowerCase().split(" ");
                2 !== d.length && (d = ["tl", "tl"]);
                0 <= d[0].indexOf("b") && (b.top += M.height);
                0 <= d[0].indexOf("r") && (b.left += M.width);
                0 <= d[0].indexOf("m") && (b.top += M.height / 2);
                0 <= d[0].indexOf("c") && (b.left += M.width / 2);
                0 <= d[1].indexOf("b") && (b.top -= a.offsetHeight);
                0 <= d[1].indexOf("r") && (b.left -= a.offsetWidth);
                0 <= d[1].indexOf("c") && (b.left -= a.offsetWidth / 2);
                0 <= d[1].indexOf("m") && (b.top -= a.offsetHeight / 2);
                a.style.position = "absolute";
                d = u.am();
                var e = a.offsetHeight;
                b.left = Math.min(b.left, d.left + d.width - a.offsetWidth);
                b.top = Math.min(b.top, d.top + d.height - e);
                u(a).lk(b);
              }, 0);
            } else {
              if (y.onshow) y.onshow();
            }
          else
            window.addEventListener("resize", b),
              (f.style.position = "absolute"),
              setTimeout(function() {
                f.style.visibility = "visible";
                b();
                if (y.onshow) y.onshow();
              }, 0);
          var I = f.querySelector("[z-focus]");
          I &&
            setTimeout(function() {
              I.focus();
            }, 0);
          v = c;
          "outside" === v || "inside" === v
            ? document.body.addEventListener("pointerdown", d, !0)
            : h && l.show(y.hide);
        },
        destroy: function() {
          x ||
            ((x = !0),
            y.isShown() && y.hide(),
            l.pf(),
            window.removeEventListener("resize", b),
            f.removeEventListener("click", e),
            document.body.removeEventListener("pointerdown", d, !0),
            w(),
            h && u(f).remove());
        },
        onshow: a.onshow || function() {},
        onhide: a.onhide || function() {},
      };
    f.addEventListener("click", e);
    return y;
  }
  function zd(c) {
    return (
      c instanceof HTMLElement &&
      ((!(c instanceof HTMLElement && "BUTTON" === c.tagName) && u.qf(c)) ||
        c.matches("[z-no-dismiss], [z-no-dismiss] *"))
    );
  }
  function Ad(c) {
    function a(a) {
      "touchstart" === a.type
        ? ((b = a.changedTouches[0].pageX), (d = a.changedTouches[0].pageY))
        : "touchend" === a.type &&
          10 > lc(b, d, a.changedTouches[0].pageX, a.changedTouches[0].pageY) &&
          setTimeout(function() {
            c.dispatchEvent(new Event("click"));
          }, 100);
    }
    var b = -1,
      d = -1;
    c.addEventListener("touchstart", a);
    c.addEventListener("touchend", a);
    return function() {
      c.removeEventListener("touchstart", a);
      c.removeEventListener("touchend", a);
    };
  }
  var Bd = A.create("FitCurve");
  function Cd(c) {
    function a(a) {
      I.bezierCurveTo(a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y);
      Bd(
        "Bezier: (%s,%s), (%s,%s), (%s,%s), (%s,%s)",
        a[0].x,
        a[0].y,
        a[1].x,
        a[1].y,
        a[2].x,
        a[2].y,
        a[3].x,
        a[3].y
      );
    }
    function b(a, b) {
      return a.x * b.x + a.y * b.y;
    }
    function d(a) {
      var b = 1 - a;
      return 3 * a * b * b;
    }
    function e(a) {
      return 3 * a * a * (1 - a);
    }
    function f(a, b) {
      var d = a.x - b.x;
      a = a.y - b.y;
      return Math.sqrt(d * d + a * a);
    }
    function h(a) {
      return a.x * a.x + a.y * a.y;
    }
    function k(a, b) {
      var d = Math.sqrt(h(a));
      0 !== d && ((a.x *= b / d), (a.y *= b / d));
      return a;
    }
    function l(a, b, d) {
      void 0 === d && Bd("Undef!");
      d.x = a.x + b.x;
      d.y = a.y + b.y;
      return d;
    }
    function n(a, b) {
      return { x: a.x + b.x, y: a.y + b.y };
    }
    function r(a, b) {
      return { x: a.x * b, y: a.y * b };
    }
    function v(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }
    function w(a, c, h, w, x, y) {
      var B,
        X = [],
        z = [[], []],
        H = [];
      var E = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
      var M = h - c + 1;
      for (B = 0; B < M; B++) {
        var I = { x: x.x, y: x.y };
        var R = { x: y.x, y: y.y };
        k(I, d(w[B]));
        k(R, e(w[B]));
        X[B] = [I, R];
      }
      z[0][0] = 0;
      z[0][1] = 0;
      z[1][0] = 0;
      z[1][1] = 0;
      H[0] = 0;
      for (B = H[1] = 0; B < M; B++)
        (z[0][0] += b(X[B][0], X[B][0])),
          (z[0][1] += b(X[B][0], X[B][1])),
          (z[1][0] = z[0][1]),
          (z[1][1] += b(X[B][1], X[B][1])),
          (I = 1 - w[B]),
          (R = w[B]),
          (I = v(
            a[c + B],
            n(
              r(a[c], I * I * I),
              n(r(a[c], d(w[B])), n(r(a[h], e(w[B])), r(a[h], R * R * R)))
            )
          )),
          (H[0] += b(X[B][0], I)),
          (H[1] += b(X[B][1], I));
      w = z[0][0] * z[1][1] - z[1][0] * z[0][1];
      B = z[0][0] * H[1] - z[0][1] * H[0];
      H = H[0] * z[1][1] - H[1] * z[0][1];
      0 === w && (w = z[0][0] * z[1][1] * 1e-11);
      z = H / w;
      H = B / w;
      if (0 > z || 0 > H)
        return (
          (z = f(a[h], a[c]) / 3),
          (E[0] = a[c]),
          (E[3] = a[h]),
          l(E[0], k(x, z), E[1]),
          l(E[3], k(y, z), E[2]),
          E
        );
      E[0] = a[c];
      E[3] = a[h];
      l(E[0], k(x, z), E[1]);
      l(E[3], k(y, H), E[2]);
      return E;
    }
    function x(a, b, d) {
      var e;
      var c = [];
      for (e = 0; e <= a; e++) c[e] = { x: b[e].x, y: b[e].y };
      for (e = 1; e <= a; e++)
        for (b = 0; b <= a - e; b++)
          (c[b].x = (1 - d) * c[b].x + d * c[b + 1].x),
            (c[b].y = (1 - d) * c[b].y + d * c[b + 1].y);
      return c[0];
    }
    function y(a) {
      var b = Math.sqrt(Math.sqrt(h(a)));
      0 !== b && ((a.x /= b), (a.y /= b));
      return a;
    }
    function B(a, b, d, e, c) {
      var f,
        k = (d - b + 1) / 2;
      var l = 0;
      for (f = b + 1; f < d; f++) {
        var n = x(3, e, c[f - b]);
        n = v(n, a[f]);
        n = h(n);
        n >= l && ((l = n), (k = f));
      }
      return { Bu: l, aw: k };
    }
    function H(b, d, e, c, h, n) {
      var r;
      var X = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
      var z = n * n;
      if (2 === e - d + 1)
        (n = f(b[e], b[d]) / 3),
          (X[0] = b[d]),
          (X[3] = b[e]),
          l(X[0], k(c, n), X[1]),
          l(X[3], k(h, n), X[2]),
          a(X);
      else {
        var E = [0];
        for (r = d + 1; r <= e; r++)
          E[r - d] = E[r - d - 1] + f(b[r], b[r - 1]);
        for (r = d + 1; r <= e; r++) E[r - d] /= E[e - d];
        var I = E;
        X = w(b, d, e, I, c, h);
        r = B(b, d, e, X, I);
        E = r.Bu;
        r = r.aw;
        if (E < n) a(X);
        else {
          if (E < z || M)
            for (z = 0; 4 > z; z++) {
              r = b;
              E = d;
              var R = e;
              var na = X;
              var la = [];
              for (X = E; X <= R; X++) {
                var Ea = la,
                  Yg = X - E,
                  Z,
                  Bb = na,
                  Xb = r[X],
                  Yb = I[X - E],
                  eb = [];
                var mb = [];
                var Zb = x(3, Bb, Yb);
                for (Z = 0; 2 >= Z; Z++)
                  (eb[Z] = { x: 0, y: 0 }),
                    (eb[Z].x = 3 * (Bb[Z + 1].x - Bb[Z].x)),
                    (eb[Z].y = 3 * (Bb[Z + 1].y - Bb[Z].y));
                for (Z = 0; 1 >= Z; Z++)
                  (mb[Z] = { x: 0, y: 0 }),
                    (mb[Z].x = 2 * (eb[Z + 1].x - eb[Z].x)),
                    (mb[Z].y = 2 * (eb[Z + 1].y - eb[Z].y));
                Z = x(2, eb, Yb);
                mb = x(1, mb, Yb);
                Ea[Yg] =
                  Yb -
                  ((Zb.x - Xb.x) * Z.x + (Zb.y - Xb.y) * Z.y) /
                    (Z.x * Z.x +
                      Z.y * Z.y +
                      (Zb.x - Xb.x) * mb.x +
                      (Zb.y - Xb.y) * mb.y);
              }
              R = la;
              X = w(b, d, e, R, c, h);
              r = B(b, d, e, X, R);
              E = r.Bu;
              r = r.aw;
              if (E < n || M) {
                a(X);
                return;
              }
              I = R;
            }
          R = { x: 0, y: 0 };
          z = v(b[r - 1], b[r]);
          E = v(b[r], b[r + 1]);
          R.x = (z.x + E.x) / 2;
          R.y = (z.y + E.y) / 2;
          z = R = y(R);
          H(b, d, r, c, z, n);
          z.x = -z.x;
          z.y = -z.y;
          H(b, r, e, z, h, n);
        }
      }
    }
    var M = !0;
    void 0 === M && (M = !1);
    var I = new K();
    I.moveTo(c[0].x, c[0].y);
    (function(a, b, d) {
      var e = v(a[1], a[0]);
      e = y(e);
      var c = b - 1;
      c = v(a[c - 1], a[c]);
      c = y(c);
      H(a, 0, b - 1, e, c, d);
    })(c, c.length, 25);
    return I;
  }
  function Dd(c, a, b, d, e, f) {
    var h = !1;
    c.save();
    switch (b) {
      case 0:
      case 3:
        var k = a.height;
        var l = a.width;
        break;
      default:
        (k = a.width), (l = a.height);
    }
    switch (b) {
      case 2:
        h = !0;
    }
    c.translate(a.x, a.y);
    c.fillStyle = "rgba(0, 0, 0, 0.2)";
    c.fillStyle = "#ccc";
    c.fillRect(0, 0, a.width, a.height);
    c.lineWidth = 1;
    c.fillStyle = "black";
    c.strokeStyle = "black";
    c.font = "10px sans-serif";
    a = Math.ceil(50 / e);
    b = f / e;
    var n = Math.ceil(b / a) * a;
    f = n;
    c.beginPath();
    if (h)
      for (b = (n - b) * e; b < l; )
        c.moveTo(0, b),
          c.lineTo(k, b),
          (h = f.toString() + d),
          c.fillText(h, 0, b + 1 + 10),
          (f += a),
          (b += e * a);
    else
      for (b = (n - b) * e; b < l; )
        c.moveTo(b, k),
          c.lineTo(b, 0),
          (h = f.toString() + d),
          c.fillText(h, b + 1, 10),
          (f += a),
          (b += e * a);
    c.stroke();
    c.restore();
  }
  var Gd = (function(c) {
      function a(a, d, e) {
        void 0 === e && (e = dc() ? new Ed() : new Fd());
        var b = c.call(this) || this;
        b.Cd = d;
        b.gt = e;
        b.Sj = !0;
        b.width = 32;
        b.height = 500;
        b.TE = 0;
        b.ic = new G(0, 0, 0, 0);
        b.lc = !1;
        b.Ng = "auto";
        b.uE = "#fcfcfc";
        b.wE = "#808080";
        b.borderWidth = 0;
        b.Tf = 0;
        b.Sf = 100;
        b.xr = 10;
        b.position = 5;
        b.offset = 0;
        b.log = A.create("SCROLLBAR", !0);
        b.Sj = !0;
        b.canvas = cc(document.body);
        b.canvas.style.position = "absolute";
        b.canvas.style.border = "none";
        b.canvas.classList.add("zwibbler-scrollbar");
        b.canvas.classList.add("zwibbler-passthrough");
        b.ma = b.canvas.getContext("2d");
        a.addEventListener(b.canvas, "mousedown", function(a) {
          b.Ab(a);
        });
        a.addEventListener(document.body, "mousemove", function(a) {
          b.Ib(a);
        });
        a.addEventListener(document.body, "mouseup", function() {
          b.Wb();
        });
        a.addEventListener(b.canvas, "touchstart", function(a) {
          b.cq(a);
        });
        a.addEventListener(document.body, "touchmove", function(a) {
          b.cq(a);
        });
        a.addEventListener(document.body, "touchend", function(a) {
          b.cq(a);
        });
        b.format();
        return b;
      }
      __extends(a, c);
      a.prototype.Pd = function(a) {
        a.appendChild(this.canvas);
      };
      a.prototype.Qv = function(a) {
        this.Ng = a;
        this.la();
      };
      a.prototype.moveTo = function(a, d) {
        this.canvas.style.left = "" + a + "px";
        this.canvas.style.top = "" + d + "px";
      };
      a.prototype.ig = function(a, d) {
        this.width = a;
        this.height = d;
        this.canvas.width = this.width;
        this.canvas.height = d;
        this.format();
        this.la();
      };
      a.prototype.pf = function() {
        this.canvas.style.display = "none";
      };
      a.prototype.show = function() {
        this.canvas.style.display = "block";
      };
      a.prototype.ou = function() {
        return "block" === this.canvas.style.display;
      };
      a.prototype.Uv = function(a, d, e, c) {
        this.Tf = a;
        this.Sf = d - a;
        this.xr = e;
        this.position = c;
        this.format();
        this.la();
      };
      a.prototype.format = function() {
        var a = this.Cd ? this.width : this.height;
        var d = (this.xr / this.Sf) * a;
        a *= (this.position - this.Tf) / this.Sf;
        this.ic = this.Cd
          ? new G(a, 0, d, this.height)
          : new G(0, a, this.width, d);
        this.ic.x = Math.round(this.ic.x);
        this.ic.y = Math.round(this.ic.y);
        this.ic.width = Math.round(this.ic.width);
        this.ic.height = Math.round(this.ic.height);
      };
      a.prototype.la = function() {
        var a = this.Lg() - this.gt.St();
        if (this.Cd) var d = 0;
        else (d = a), (a = 0);
        d = {
          Cd: this.Cd,
          rect: { x: d, y: a, width: this.width - d, height: this.height - a },
          ae: {
            x: this.ic.x + d,
            y: this.ic.y + a,
            width: this.ic.width - d,
            height: this.ic.height - a,
          },
          Ng: this.Ng,
        };
        this.ma.clearRect(0, 0, this.ma.canvas.width, this.ma.canvas.height);
        this.gt.la(this.ma, d);
      };
      a.prototype.mt = function(a) {
        var b = u(this.canvas).oc(),
          e = 0,
          c = 0;
        if (
          "touchstart" === a.type ||
          "touchend" === a.type ||
          "touchmove" === a.type
        )
          (e = a.changedTouches[0].pageX), (c = a.changedTouches[0].pageY);
        else if (
          "mousedown" === a.type ||
          "mouseup" === a.type ||
          "mousemove" === a.type
        )
          (e = a.pageX), (c = a.pageY);
        return new F(e - b.left, c - b.top);
      };
      a.prototype.cq = function(a) {
        switch (a.type) {
          case "touchstart":
            this.Ab(a);
            break;
          case "touchend":
            this.Wb();
            break;
          case "touchmove":
            this.Ib(a);
        }
      };
      a.prototype.iv = function(a) {
        a = this.Cd
          ? (a.x / this.width) * this.Sf + this.Tf
          : (a.y / this.height) * this.Sf + this.Tf;
        a = Math.min(a, this.Sf - this.xr + this.Tf);
        return (a = Math.max(a, this.Tf));
      };
      a.prototype.Ab = function(a) {
        a.preventDefault();
        a = this.mt(a);
        this.ic.Lc(a.x, a.y)
          ? this.Cd
            ? ((this.offset = a.x - this.ic.x), (a.x -= this.offset))
            : ((this.offset = a.y - this.ic.y), (a.y -= this.offset))
          : ((this.position = this.iv(a)),
            (this.offset = 0),
            this.Cd
              ? (this.ic.x = ((this.position - this.Tf) / this.Sf) * this.width)
              : (this.ic.y =
                  ((this.position - this.Tf) / this.Sf) * this.height),
            this.ta("scroll", this.position),
            this.la());
        this.lc = !0;
      };
      a.prototype.Ib = function(a) {
        this.lc &&
          (this.lc && "mousemove" === a.type && 0 === a.buttons
            ? (this.lc = !1)
            : (a.preventDefault(),
              (a = this.mt(a)),
              this.Cd ? (a.x -= this.offset) : (a.y -= this.offset),
              (this.position = this.iv(a)),
              this.ta("scroll", this.position),
              this.format(),
              this.la()));
      };
      a.prototype.Wb = function() {
        this.lc && (this.lc = !1);
      };
      a.prototype.Lg = function() {
        return this.Cd ? this.height : this.width;
      };
      a.sE = 0;
      a.nE = 1;
      a.jE = 2;
      a.qE = 3;
      return a;
    })(sb),
    Fd = (function() {
      function c() {}
      c.prototype.St = function() {
        return 16;
      };
      c.prototype.la = function(a, b) {
        a.fillStyle = "#e6e6e6";
        a.beginPath();
        a.rect(b.rect.x, b.rect.y, b.rect.width, b.rect.height);
        a.fill();
        a.beginPath();
        a.fillStyle = "auto" === b.Ng ? "#b9b9b9" : b.Ng;
        a.fillRect(b.ae.x, b.ae.y, b.ae.width, b.ae.height);
      };
      return c;
    })(),
    Ed = (function() {
      function c() {}
      c.prototype.St = function() {
        return 10;
      };
      c.prototype.la = function(a, b) {
        a.fillStyle = "auto" === b.Ng ? "rgba(0,0,0,0.5)" : b.Ng;
        a.beginPath();
        b.Cd
          ? xc(a, b.ae.x, b.ae.y - 1, b.ae.width, b.ae.height, 4.5)
          : xc(a, b.ae.x - 1, b.ae.y, b.ae.width, b.ae.height, 4.5);
        a.fill();
      };
      return c;
    })();
  function Hd(c) {
    switch (c) {
      case 33:
        return "n-resize";
      case 34:
        return "e-resize";
      case 36:
        return "s-resize";
      case 40:
        return "w-resize";
      case 25:
        return "nw-resize";
      case 19:
        return "ne-resize";
      case 28:
        return "sw-resize";
      case 22:
        return "se-resize";
      case 1:
      case 4:
      case 8:
      case 2:
      case 64:
        return "move";
    }
    return "default";
  }
  function Id(c, a, b) {
    return {
      id: c,
      hb: 2,
      x: a.x + a.width,
      Gc: a.y,
      Hc: a.y + a.height,
      order: b,
    };
  }
  function Jd(c, a, b) {
    return {
      id: c,
      hb: 4,
      x: a.y + a.height,
      Gc: a.x,
      Hc: a.x + a.width,
      order: b,
    };
  }
  var Kd = (function() {
    function c() {
      this.Qg = [];
      this.Di = [];
      this.oq = [];
      this.order = 0;
    }
    c.prototype.clear = function() {
      this.Qg.length = 0;
      this.Di.length = 0;
      this.order = this.oq.length = 0;
    };
    c.prototype.ss = function(a, b) {
      this.oq.push({ id: b, rect: a, order: this.order++ });
      this.Qg.push({
        id: b,
        hb: 1,
        x: a.y,
        Gc: a.x,
        Hc: a.x + a.width,
        order: this.order,
      });
      this.Qg.push(Jd(b, a, this.order));
      this.Di.push({
        id: b,
        hb: 8,
        x: a.x,
        Gc: a.y,
        Hc: a.y + a.height,
        order: this.order,
      });
      this.Di.push(Id(b, a, this.order));
      this.order++;
    };
    c.prototype.jD = function(a, b) {
      var d = 8;
      void 0 === d && (d = 10);
      var e = this.fl(
        this.Di,
        { id: b, hb: 8, x: a.x, Gc: a.y, Hc: a.y + a.height, order: 0 },
        Number.MAX_VALUE
      );
      e = this.fl(this.Di, Id(b, a, 0), e);
      var c = this.fl(
        this.Qg,
        { id: b, hb: 1, x: a.y, Gc: a.x, Hc: a.x + a.width, order: 0 },
        Number.MAX_VALUE
      );
      c = this.fl(this.Qg, Jd(b, a, 0), c);
      return { x: Math.abs(e) < d ? e : 0, y: Math.abs(c) < d ? c : 0 };
    };
    c.prototype.kp = function(a, b) {
      var d = 10;
      void 0 === d && (d = 10);
      var e = [];
      this.gw(e, this.Di, a, b, d);
      this.gw(e, this.Qg, b, a, d);
      d = 0;
      for (var c = this.oq; d < c.length; d++) {
        var h = c[d];
        h.rect.Lc(a, b) && e.push({ hb: 64, id: h.id, order: h.order });
      }
      e.sort(function(a, b) {
        return b.order - a.order;
      });
      return e;
    };
    c.prototype.gw = function(a, b, d, e, c) {
      for (var f = c * c, k = 0; k < b.length; k++) {
        var l = b[k],
          n = Math.abs(d - l.x),
          r = Number.MAX_VALUE,
          v = 0;
        if (!(n > c || e < l.Gc - c || e > l.Hc + c)) {
          if (e > l.Gc + c && e < l.Hc - c) {
            var w = n * n;
            w < r && ((r = w), (v = l.hb));
          }
          w = 0.5 * (l.Gc + l.Hc);
          w = n * n + (e - w) * (e - w);
          w < f && ((r = w), (v = l.hb | 32));
          b === this.Qg &&
            ((w = n * n + (e - l.Gc) * (e - l.Gc)),
            w < r && ((r = w), (v = l.hb | 24)),
            (w = n * n + (e - l.Hc) * (e - l.Hc)),
            w < r && ((r = w), (v = l.hb | 18)));
          r < f && a.push({ id: l.id, hb: v, order: l.order });
        }
      }
    };
    c.prototype.fl = function(a, b, d) {
      for (var e = 0; e < a.length; e++) {
        var c = a[e],
          h = c.x - b.x;
        Math.abs(h) > Math.abs(d) ||
          b.id === c.id ||
          (50 > (b.Hc < c.Gc ? c.Gc - b.Hc : b.Gc > c.Hc ? b.Gc - c.Hc : 0) &&
            (d = h));
      }
      return d;
    };
    return c;
  })();
  var Ld = (function() {
      function c(a, b) {
        void 0 === b && (b = "repeat");
        this.Qa = a;
        this.repeat = b;
      }
      c.prototype.loaded = function() {
        return this.Qa instanceof HTMLImageElement ? this.Qa.complete : !0;
      };
      c.prototype.setTransform = function() {};
      return c;
    })(),
    Md = (function() {
      function c(a, b, d, e) {
        this.nD = [];
        this.from = new F(a, b);
        this.ja = new F(d, e);
      }
      c.prototype.addColorStop = function(a, b) {
        this.nD.push({ offset: a, Kc: b });
      };
      return c;
    })(),
    Pd = (function() {
      function c() {
        this.stack = [];
        this.ua = new J();
        this.lineCap = "butt";
        this.lineJoin = "miter";
        this.lineWidth = 1;
        this.lineDashOffset = 0;
        this.miterLimit = 10;
        this.strokeStyle = this.fillStyle = q.Oa;
        this.textBaseline = "top";
        this.font = "10px arial";
        this.globalCompositeOperation = "source-over";
        this.globalAlpha = 1;
        this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
        this.shadowColor = "rgba(0,0,0,0)";
        this.Ob = [];
      }
      c.prototype.save = function() {
        this.stack.push({
          ua: this.ua.clone(),
          fillStyle: this.fillStyle,
          font: this.font,
          lineJoin: this.lineJoin,
          lineCap: this.lineCap,
          lineWidth: this.lineWidth,
          lineDashOffset: this.lineDashOffset,
          miterLimit: this.miterLimit,
          strokeStyle: this.strokeStyle,
          textBaseline: this.textBaseline,
          globalCompositeOperation: this.globalCompositeOperation,
          globalAlpha: this.globalAlpha,
          shadowOffsetX: this.shadowOffsetX,
          shadowOffsetY: this.shadowOffsetY,
          shadowBlur: this.shadowBlur,
          shadowColor: this.shadowColor,
          wg: this.$r(),
          Ob: this.Ob,
        });
      };
      c.prototype.restore = function() {
        var a = this.stack.pop();
        a &&
          ((this.ua = a.ua),
          (this.fillStyle = a.fillStyle),
          (this.font = a.font),
          (this.lineJoin = a.lineJoin),
          (this.lineCap = a.lineCap),
          (this.lineWidth = a.lineWidth),
          (this.lineDashOffset = a.lineDashOffset),
          (this.miterLimit = a.miterLimit),
          (this.ua = a.ua),
          (this.strokeStyle = a.strokeStyle),
          (this.textBaseline = a.textBaseline),
          (this.globalCompositeOperation = a.globalCompositeOperation),
          (this.globalAlpha = a.globalAlpha),
          (this.shadowOffsetX = a.shadowOffsetX),
          (this.shadowOffsetY = a.shadowOffsetY),
          (this.shadowBlur = a.shadowBlur),
          (this.shadowColor = a.shadowColor),
          this.fs(a.wg),
          (this.Ob = a.Ob));
      };
      c.prototype.drawImage = function(a, b, d, e, c, h, k, l, n) {
        b = Nd(a, b, d, e, c, h, k, l, n);
        this.Wr(a, b.vk, b.wk, b.lh, b.kh, b.Aa, b.Ba, b.$i, b.ql);
      };
      c.prototype.beginPath = function() {};
      c.prototype.closePath = function() {};
      c.prototype.arc = function(a, b, d, e, c, h) {
        h && ((h = e), (e = c), (c = h));
        for (; 0 > e; ) e += 2 * Math.PI;
        for (; 0 > c; ) c += 2 * Math.PI;
        e > c && (e -= 2 * Math.PI);
        var f = 2 * Math.PI;
        var l = e % f;
        var n = c % f;
        n === l && (n += 2 * Math.PI);
        c = [];
        e = Math.PI / 2;
        h = l < n ? 1 : -1;
        var r = l;
        for (f = Math.min(f, Math.abs(n - l)); 1e-5 < f; ) {
          l = r + h * Math.min(f, e);
          var v = (l - r) / 2,
            w = d * Math.cos(v),
            x = d * Math.sin(v),
            y = 0.5522847498 * Math.tan(v);
          n = w + y * x;
          w = -x + y * w;
          x = -w;
          y = v + r;
          v = Math.cos(y);
          y = Math.sin(y);
          c.push({
            aE: d * Math.cos(r),
            Gc: d * Math.sin(r),
            bE: n * v - w * y,
            Hc: n * y + w * v,
            cE: n * v - x * y,
            fE: n * y + x * v,
            dE: d * Math.cos(l),
            gE: d * Math.sin(l),
          });
          f -= Math.abs(l - r);
          r = l;
        }
        for (d = 0; d < c.length; d++)
          (e = c[d]),
            0 === d && this.moveTo(e.aE + a, e.Gc + b),
            this.bezierCurveTo(
              e.bE + a,
              e.Hc + b,
              e.cE + a,
              e.fE + b,
              e.dE + a,
              e.gE + b
            );
      };
      c.prototype.arcTo = function() {};
      c.prototype.strokeRect = function(a, b, d, e) {
        this.beginPath();
        this.rect(a, b, d, e);
        this.stroke();
      };
      c.prototype.setTransform = function(a, b, d, e, c, h) {
        this.ua = new J(a, d, b, e, c, h);
      };
      c.prototype.transform = function(a, b, d, e, c, h) {
        a = new J(a, d, b, e, c, h);
        this.ua = this.ua.multiply(a);
      };
      c.prototype.translate = function(a, b) {
        this.transform(1, 0, 0, 1, a, b);
      };
      c.prototype.scale = function(a, b) {
        this.transform(a, 0, 0, b, 0, 0);
      };
      c.prototype.rotate = function(a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.transform(b, a, -a, b, 0, 0);
      };
      c.prototype.rect = function(a, b, d, e) {
        this.moveTo(a, b);
        this.lineTo(a + d, b);
        this.lineTo(a + d, b + e);
        this.lineTo(a, b + e);
        this.lineTo(a, b);
        this.closePath();
      };
      c.prototype.fillRect = function(a, b, d, e) {
        this.rect(a, b, d, e);
        this.fill();
      };
      c.prototype.Tk = function(a) {
        return Od(a);
      };
      c.prototype.createPattern = function(a, b) {
        return new Ld(a, b);
      };
      c.prototype.createLinearGradient = function(a, b, d, e) {
        return new Md(a, b, d, e);
      };
      c.prototype.setLineDash = function(a) {
        a.length & 1 && (a = a.concat(a));
        this.Ob = a;
      };
      return c;
    })(),
    Qd = (function() {
      function c(a) {
        this.fontFamily = "";
        this.fontSize = 10;
        this.lineHeight = this.fontVariant = this.fontWeight = this.fontStyle =
          "normal";
        a = Od(a);
        this.fontFamily = a.fontFamily || "Arial";
        this.fontSize = parseFloat(a.fontSize);
        this.fontStyle = a.fontStyle;
        this.fontWeight = a.fontWeight;
        this.fontVariant = a.fontVariant;
        this.lineHeight = a.lineHeight;
      }
      c.prototype.toString = function() {
        var a = this.fontSize + 'px "' + this.fontFamily + '"';
        "bold" === this.fontWeight && (a = "bold " + a);
        "italic" === this.fontStyle && (a = "italic" + a);
        return a;
      };
      return c;
    })();
  function Od(c) {
    var a = null,
      b = "10",
      d = "normal",
      e = "normal",
      f = "normal",
      h = "normal",
      k = !1;
    c = c.split(/\s+/);
    a: for (;;) {
      var l = c.shift();
      if (!l) break;
      switch (l) {
        case "normal":
          break;
        case "italic":
        case "oblique":
          d = l;
          break;
        case "small-caps":
          f = l;
          break;
        case "bold":
        case "bolder":
        case "lighter":
        case "100":
        case "200":
        case "300":
        case "400":
        case "500":
        case "600":
        case "700":
        case "800":
        case "900":
          e = l;
          break;
        default:
          if (k) {
            a = l;
            c.length && (a += " " + c.join(" "));
            2 < a.length &&
              ('"' === a.charAt(0) || "'" === a.charAt(0)) &&
              (a = a.substr(1, a.length - 2));
            break a;
          } else
            (l = l.split("/")),
              (b = l[0]),
              (k = !0),
              1 < l.length && (h = l[1]);
      }
    }
    return {
      fontStyle: d,
      fontVariant: f,
      fontWeight: e,
      fontSize: b,
      lineHeight: h,
      fontFamily: a,
    };
  }
  function Nd(c, a, b, d, e, f, h, k, l) {
    var n = c.width,
      r = c.height;
    c instanceof HTMLImageElement &&
      ((n = c.naturalWidth), (r = c.naturalHeight));
    c = { vk: 0, wk: 0, Aa: 0, Ba: 0, lh: n, kh: r, $i: n, ql: r };
    void 0 !== d &&
    void 0 !== e &&
    void 0 !== f &&
    void 0 !== h &&
    void 0 !== k &&
    void 0 !== l
      ? ((c.vk = a),
        (c.wk = b),
        (c.lh = d),
        (c.kh = e),
        (c.Aa = f),
        (c.Ba = h),
        (c.$i = k),
        (c.ql = l))
      : void 0 !== d && void 0 !== e
      ? ((c.Aa = a), (c.Ba = b), (c.$i = d), (c.ql = e))
      : ((c.Aa = a), (c.Ba = b));
    return c;
  }
  var Rd = A.create("SvgFile"),
    Wd = (function() {
      function c() {
        this.rect = new G(0, 0, 0, 0);
        this.Fx = {};
        this.src = "";
        this.ready = !1;
        this.Zb = [];
        this.$u = 0;
        this.closed = !1;
      }
      c.prototype.eq = function(a) {
        return __awaiter(this, void 0, void 0, function() {
          var b,
            d = this;
          return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                if (a === this.src && this.ready) return [2];
                this.src = a;
                this.ready = !1;
                return [4, Xa({ url: a, responseType: "document" })];
              case 1:
                b = e.sent();
                if (this.src !== a) throw Error("Aborted due to URL change");
                Sd(b.responseXML.documentElement, function(a) {
                  return d.MB(a);
                });
                this.$u = this.Zb.length;
                this.ready = !0;
                return [2];
            }
          });
        });
      };
      c.prototype.Ya = function(a) {
        var b;
        this.Zb.length = this.$u;
        (b = this.Zb).push.apply(b, Td(a));
      };
      c.prototype.MB = function(a) {
        if (a instanceof Element) {
          switch (a.tagName.toUpperCase()) {
            case "SVG":
              this.Kd = a;
              var b = a.getAttribute("viewBox");
              if (b) {
                var d = [];
                var e = 0;
                for (b = b.split(" "); e < b.length; e++) {
                  var c = parseFloat(b[e]);
                  isNaN(c) || d.push(c);
                }
                if (4 !== d.length) throw Error("Invalid viewBox");
                this.rect.x = d[0];
                this.rect.y = d[1];
                this.rect.width = d[2];
                this.rect.height = d[3];
              } else
                (d = parseFloat(a.getAttribute("width") || "")),
                  (e = parseFloat(a.getAttribute("height") || "")),
                  isNaN(d) || isNaN(e)
                    ? console.warn(
                        "Could not get dimensions of the SVG file. Add a viewBox attribute."
                      )
                    : ((this.rect.x = 0),
                      (this.rect.y = 0),
                      (this.rect.width = d),
                      (this.rect.height = e));
              break;
            case "STYLE":
              (d = this.Zb).push.apply(d, Td(a.textContent));
              break;
            case "PATH":
              (d = a.getAttribute("d") || ""),
                (this.closed =
                  this.closed || 0 <= d.indexOf("z") || 0 <= d.indexOf("Z"));
          }
          (d = a.getAttribute("id")) && (this.Fx[d] = a);
          return !0;
        }
      };
      c.prototype.la = function(a, b, d) {
        function e(a) {
          var b = h.pz(a, l);
          switch (a.tagName.toUpperCase()) {
            case "SVG":
              for (
                var d = a.firstElementChild;
                null !== d;
                d = d.nextElementSibling
              )
                e(d);
              break;
            case "G":
              k.save();
              k.Ya(b);
              for (
                d = a.firstElementChild;
                null !== d;
                d = d.nextElementSibling
              )
                e(d);
              k.restore();
              break;
            case "PATH":
              c(b, function() {
                b.d && Fc(k, b.d);
              });
              break;
            case "CIRCLE":
              c(b, function() {
                var b = Ud(a, "cx cy r");
                k.arc(b.cx, b.cy, b.r, 0, 2 * Math.PI, !1);
              });
              break;
            case "ELLIPSE":
              c(b, function() {
                var b = Ud(a, "cx cy rx ry");
                k.ellipse(b.cx, b.cy, b.rx, b.ry);
              });
              break;
            case "LINE":
              c(b, function() {
                var b = Ud(a, "x1 y1 x2 y2");
                k.moveTo(b.x1, b.y1);
                k.lineTo(b.x2, b.y2);
              });
              break;
            case "RECT":
              c(b, function() {
                var b = Ud(a, "x y width height rx ry");
                a.hasAttribute("ry")
                  ? a.hasAttribute("rx") || (b.rx = b.ry)
                  : (b.ry = b.rx);
                k.rect(b.x, b.y, b.width, b.height, b.rx, b.ry);
              });
              break;
            case "TEXT":
              c(b, function() {
                var b = Ud(a, "x y");
                k.text(a.textContent || "", b.x || 0, b.y || 0);
              });
          }
        }
        function c(a, b) {
          k.save();
          d || k.beginPath();
          k.Ya(a);
          k.Xe();
          b();
          d || (k.fill(), k.stroke());
          k.restore();
        }
        var h = this;
        void 0 === b && (b = null);
        void 0 === d && (d = !1);
        var k = new Vd(a);
        k.Ya({ stroke: "none", fill: q.Oa, "stroke-width": "1" });
        b && k.Ya(b);
        var l = {};
        e(this.Kd);
      };
      c.prototype.pz = function(a, b) {
        var d = {},
          e;
        for (e in b) d[e] = b[e];
        if ((b = a.getAttribute("class")))
          for (var c = 0, h = this.Zb; c < h.length; c++)
            for (var k = h[c], l = 0, n = k.xC.split(","); l < n.length; l++)
              if ("." + b === n[l]) for (e in k.Fs) d[e] = k.Fs[e];
        for (e = 0; e < a.attributes.length; e++)
          d[a.attributes[e].name] = a.attributes[e].value;
        return d;
      };
      return c;
    })();
  function Sd(c, a) {
    for (c = [c]; c.length; ) {
      var b = c.pop();
      if (a(b)) for (b = b.firstChild; null !== b; b = b.nextSibling) c.push(b);
    }
  }
  function Ud(c, a) {
    var b = {},
      d = 0;
    for (a = a.split(" "); d < a.length; d++) {
      var e = a[d];
      b[e] = parseFloat(c.getAttribute(e) || "") || 0;
    }
    return b;
  }
  function Td(c) {
    var a = [];
    for (c = new Xd(c); ; ) {
      for (
        var b = {}, d = { value: "" }, e = c, f = d, h = "";
        e.match(".");

      ) {
        h += ".";
        var k = { value: "" };
        if (!e.Au(k)) break;
        h += k.value;
        if (!e.match(",")) break;
        h += ",";
      }
      f.value = h;
      if (0 < h.length && c.match("{"))
        Yd(c, b), c.match("}"), a.push({ xC: d.value, Fs: b });
      else break;
    }
    return a;
  }
  function Yd(c, a) {
    for (;;) {
      var b = { value: "" },
        d = { value: "" },
        e = c.Ia;
      if (c.Au(b) && c.match(":") && c.XA(d))
        c.match(";"), (a[b.value] = d.value);
      else {
        c.Ia = e;
        break;
      }
    }
  }
  var Xd = (function() {
      function c(a, b) {
        void 0 === b && (b = 0);
        this.input = a;
        this.Ia = b;
      }
      c.prototype.zv = function() {
        return this.input.substr(this.Ia);
      };
      c.prototype.match = function(a) {
        this.tm();
        return this.Ia + a.length <= this.input.length &&
          this.input.substr(this.Ia, a.length) == a
          ? ((this.Ia += a.length), !0)
          : !1;
      };
      c.prototype.tm = function() {
        for (; this.Ia < this.input.length; this.Ia++) {
          var a = this.input[this.Ia];
          if (" " != a && "\n" != a) break;
        }
      };
      c.prototype.Gd = function(a) {
        this.tm();
        for (var b = this.Ia; this.Ia < this.input.length; this.Ia++) {
          var d = this.input[this.Ia];
          if (
            !(
              ("0" <= d && "9" >= d) ||
              "-" == d ||
              "+" == d ||
              "." == d ||
              "e" == d ||
              "E" == d
            )
          )
            break;
        }
        if (b == this.Ia) return !1;
        d = parseFloat(this.input.substr(b, this.Ia - b));
        if (isNaN(d)) return (this.Ia = b), !1;
        a.value = d;
        return !0;
      };
      c.prototype.Au = function(a) {
        this.tm();
        for (var b = this.Ia; this.Ia < this.input.length; this.Ia++) {
          var d = this.input[this.Ia];
          if (
            !(
              ("a" <= d && "z" >= d) ||
              ("A" <= d && "Z" >= d) ||
              "-" == d ||
              (this.Ia > b && "0" <= d && "9" >= d)
            )
          )
            break;
        }
        return this.Ia > b
          ? ((a.value = this.input.substr(b, this.Ia - b)), !0)
          : !1;
      };
      c.prototype.XA = function(a) {
        this.tm();
        for (
          var b = this.Ia;
          this.Ia < this.input.length && ";" !== this.input[this.Ia];
          this.Ia++
        );
        a.value = this.input.substr(b, this.Ia - b).trim();
        return !0;
      };
      return c;
    })(),
    Zd = {},
    $d = (function() {
      function c(a, b, d) {
        void 0 === a && (a = "normal");
        void 0 === b && (b = "sans-serif");
        void 0 === d && (d = "10px");
        this.weight = a;
        this.family = b;
        this.size = d;
      }
      c.prototype.clone = function() {
        return new c(this.weight, this.family, this.size);
      };
      c.prototype.toString = function() {
        return this.weight + " " + this.size + " " + this.family;
      };
      return c;
    })(),
    Vd = (function() {
      function c(a) {
        this.ma = a;
        this.pb = {
          hn: 1,
          El: 1,
          Fl: "nonzero",
          opacity: 1,
          ua: new J(),
          font: new $d(),
        };
        this.ar = [];
      }
      c.prototype.save = function() {
        this.ar.push(this.pb);
        this.pb = {
          hn: this.pb.hn,
          El: this.pb.El,
          Fl: this.pb.Fl,
          opacity: this.pb.opacity,
          ua: this.pb.ua.clone(),
          font: this.pb.font.clone(),
        };
        this.ma.save();
      };
      c.prototype.restore = function() {
        this.ar.length && (this.pb = this.ar.pop());
        this.ma.restore();
      };
      c.prototype.translate = function(a, b) {
        this.ma.translate(a, b);
      };
      c.prototype.scale = function(a, b) {
        this.ma.scale(a, b);
      };
      c.prototype.rotate = function(a) {
        this.ma.rotate(a);
      };
      c.prototype.beginPath = function() {
        this.ma.beginPath();
      };
      c.prototype.closePath = function() {
        this.ma.closePath();
      };
      c.prototype.bezierCurveTo = function(a, b, d, e, c, h) {
        this.ma.bezierCurveTo(a, b, d, e, c, h);
      };
      c.prototype.quadraticCurveTo = function(a, b, d, e) {
        this.ma.quadraticCurveTo(a, b, d, e);
      };
      c.prototype.arc = function(a, b, d, e, c, h) {
        this.ma.arc(a, b, d, e, c, h);
      };
      c.prototype.Ya = function(a) {
        for (var b in a) this.set(b, a[b]);
      };
      c.prototype.set = function(a, b) {
        var d = !1;
        switch (a) {
          case "stroke-width":
            this.ma.lineWidth = parseFloat(b);
            break;
          case "fill":
            "none" === b && (b = "transparent");
            this.ma.fillStyle = b;
            break;
          case "stroke":
            "none" === b && (b = "transparent");
            this.ma.strokeStyle = b;
            break;
          case "stroke-opacity":
            this.pb.hn = parseFloat(b);
            break;
          case "fill-opacity":
            this.pb.El = parseFloat(b);
            break;
          case "opacity":
            this.pb.opacity = parseFloat(b);
            break;
          case "stroke-linejoin":
            this.ma.lineJoin = b;
            break;
          case "stroke-miterlimit":
            this.ma.miterLimit = parseFloat(b);
            break;
          case "stroke-linecap":
            this.ma.lineCap = b;
            break;
          case "style":
            d = new Xd(b);
            var e = {};
            Yd(d, e);
            this.Ya(e);
            d = !1;
            break;
          case "transform":
            d = b;
            e = new Xd(d);
            for (var c = new J(), h = !0; ; ) {
              if (e.match("translate")) {
                var k = { value: 0 },
                  l = { value: 0 },
                  n = !1;
                (e.match("(") && e.Gd(k)) || (n = !0);
                !n && e.match(",");
                !n && e.Gd(l);
                if (n || !e.match(")")) throw Error("Can't parse " + d);
                c = c.multiply(new pc(k.value, l.value));
              } else if (e.match("rotate")) {
                h = { value: 0 };
                k = { value: 0 };
                l = { value: 0 };
                n = !1;
                (e.match("(") && e.Gd(h)) || (n = !0);
                n ||
                  !e.match(",") ||
                  (e.Gd(k) && e.match(",") && e.Gd(l)) ||
                  (n = !0);
                if (n || !e.match(")")) throw Error("Can't parse " + d);
                c = c.multiply(
                  new qc((h.value / 180) * Math.PI, k.value, l.value)
                );
              } else if (e.match("matrix")) {
                h = { value: 0 };
                n = { value: 0 };
                var r = { value: 0 },
                  v = { value: 0 };
                k = { value: 0 };
                l = { value: 0 };
                if (
                  !(
                    e.match("(") &&
                    e.Gd(h) &&
                    (e.match(","), 1) &&
                    e.Gd(n) &&
                    (e.match(","), 1) &&
                    e.Gd(r) &&
                    (e.match(","), 1) &&
                    e.Gd(v) &&
                    (e.match(","), 1) &&
                    e.Gd(k) &&
                    (e.match(","), 1) &&
                    e.Gd(l) &&
                    e.match(")")
                  )
                )
                  throw Error("Can't parse " + d);
                c = c.multiply(
                  new J(h.value, r.value, n.value, v.value, k.value, l.value)
                );
              } else if (e.match("scale")) {
                k = { value: 1 };
                l = { value: 1 };
                if (!e.match("(") || !e.Gd(k)) throw Error("Can't parse " + d);
                e.match(",");
                e.Gd(l) || (l.value = k.value);
                if (!e.match(")"))
                  throw Error("Can't parse " + d + " at " + e.zv());
                c = c.multiply(new rc(k.value, l.value));
              } else {
                if (h)
                  throw Error("Can't parse transform: " + d + " at " + e.zv());
                break;
              }
              h = !1;
            }
            this.pb.ua = this.pb.ua.multiply(c);
            d = !1;
            break;
          case "fill-rule":
            this.pb.Fl = b;
            break;
          case "font-family":
            this.pb.font.family = b;
            break;
          case "font-size":
            this.pb.font.size = b;
            break;
          case "font-weight":
            this.pb.font.weight = b;
            break;
          case "id":
          case "d":
          case "cx":
          case "cy":
          case "r":
          case "rx":
          case "ry":
          case "x":
          case "y":
          case "width":
          case "height":
          case "class":
            d = !1;
            break;
          default:
            -1 === a.indexOf(":") &&
              ((d = "Unknown SVG style: " + a + "=" + b),
              d in Zd || ((Zd[d] = !0), console.warn(d))),
              (d = !1);
        }
        d && Rd("Apply %s=%s", a, b);
      };
      c.prototype.Xe = function() {
        this.pb.ua.Ec(this.ma);
      };
      c.prototype.fill = function() {
        var a = this.ma.globalAlpha;
        this.ma.globalAlpha =
          this.ma.globalAlpha * this.pb.opacity * this.pb.El;
        this.ma.fill(this.pb.Fl);
        this.ma.globalAlpha = a;
      };
      c.prototype.stroke = function() {
        var a = this.ma.globalAlpha;
        this.ma.globalAlpha =
          this.ma.globalAlpha * this.pb.opacity * this.pb.hn;
        this.ma.stroke();
        this.ma.globalAlpha = a;
      };
      c.prototype.moveTo = function(a, b) {
        this.ma.moveTo(a, b);
      };
      c.prototype.lineTo = function(a, b) {
        this.ma.lineTo(a, b);
      };
      c.prototype.rect = function(a, b, d, e, c, h) {
        xc(this.ma, a, b, d, e, c, h);
      };
      c.prototype.text = function(a, b, d) {
        this.ma.font = this.pb.font.toString();
        this.ma.textBaseline = "alphabetic";
        "transparent" !== this.ma.fillStyle && this.ma.fillText(a, b, d);
        "transparent" !== this.ma.strokeStyle && this.ma.strokeText(a, b, d);
      };
      c.prototype.ellipse = function(a, b, d, e) {
        var c = 2 * d,
          h = 2 * e;
        a -= d;
        b -= e;
        e = (c / 2) * 0.5522848;
        d = (h / 2) * 0.5522848;
        var k = a + c,
          l = b + h;
        c = a + c / 2;
        h = b + h / 2;
        this.ma.moveTo(a, h);
        this.ma.bezierCurveTo(a, h - d, c - e, b, c, b);
        this.ma.bezierCurveTo(c + e, b, k, h - d, k, h);
        this.ma.bezierCurveTo(k, h + d, c + e, l, c, l);
        this.ma.bezierCurveTo(c - e, l, a, h + d, a, h);
      };
      return c;
    })();
  var ae = "ontouchstart" in window,
    be = "onpointerdown" in window,
    ce = {
      touchstart: "down",
      touchmove: "move",
      touchend: "up",
      touchcancel: "up",
      pointerdown: "down",
      pointermove: "move",
      pointerup: "up",
      mousedown: "down",
      mousemove: "move",
      mouseup: "up",
      pointercancel: "up",
      wheel: "wheel",
    },
    de = [],
    ee = (function(c) {
      function a(a, d, e, f, h, k, l, n, r, v, w, x, y, B, H, M, I, z, E) {
        void 0 === z && (z = de);
        void 0 === E && (E = 0);
        k = c.call(this, a, d, e, k, n, r) || this;
        k.type = a;
        k.pageX = d;
        k.pageY = e;
        k.wb = f;
        k.xb = h;
        k.startTime = l;
        k.pointerId = v;
        k.data = w;
        k.index = x;
        k.ns = y;
        k.buttons = B;
        k.ctrlKey = H;
        k.shiftKey = M;
        k.altKey = I;
        k.oa = z;
        k.angle = E;
        k.scale = 0;
        k.rotation = 0;
        return k;
      }
      __extends(a, c);
      a.prototype.clone = function() {
        return new a(
          this.type,
          this.pageX,
          this.pageY,
          this.wb,
          this.xb,
          this.timestamp,
          this.startTime,
          this.target,
          this.Bb,
          this.pointerId,
          this.data,
          this.index,
          this.ns,
          this.buttons,
          this.ctrlKey,
          this.shiftKey,
          this.altKey,
          this.oa,
          this.angle
        );
      };
      a.prototype.Vl = function() {
        return this.offset({ x: this.pageX, y: this.pageY }, void 0);
      };
      a.prototype.Yo = function() {
        return this.timestamp - this.startTime;
      };
      a.prototype.Ll = function() {
        return lc(this.pageX, this.pageY, this.wb, this.xb);
      };
      a.prototype.toString = function() {
        var a =
          c.prototype.toString.call(this) +
          (" " + this.Yo() + "ms " + Math.round(this.Ll()) + "px");
        0 != this.scale &&
          ((a += " scale=" + Math.round(100 * (this.scale || 0)) / 100),
          (a += " " + Math.round(this.rotation || 0) + "deg"));
        return a;
      };
      a.prototype.setData = function(a, d) {
        this.data[a] = d;
      };
      a.prototype.getData = function(a) {
        return this.data[a];
      };
      a.prototype.Dz = function() {
        var a = { x: 0, y: 0, z: 0 };
        if ("wheel" === this.Bb.type) {
          var d = this.Bb;
          a.x = d.deltaX;
          a.y = d.deltaY;
          a.z = d.deltaZ;
        }
        return a;
      };
      return a;
    })(
      (function() {
        function c(a, b, d, e, c, h) {
          this.type = a;
          this.pageX = b;
          this.pageY = d;
          this.timestamp = e;
          this.target = c;
          this.Bb = h;
        }
        c.prototype.toString = function() {
          return (
            "[" +
            this.type +
            " (" +
            this.Bb.type +
            ")] (" +
            this.pageX +
            "," +
            this.pageY +
            ")"
          );
        };
        c.prototype.offset = function(a, b) {
          b = u(b).oc();
          return { x: a.x - b.left, y: a.y - b.top };
        };
        c.prototype.stopPropagation = function() {
          this.Bb.stopPropagation();
        };
        c.prototype.preventDefault = function() {
          this.Bb.preventDefault();
        };
        return c;
      })()
    );
  function fe(c, a) {
    var b = new Date().getTime();
    return new ee(
      "down",
      a.pageX || 0,
      a.pageY || 0,
      a.wb || 0,
      a.xb || 0,
      a.timestamp || b,
      a.startTime || b,
      a.target || null,
      c,
      a.pointerId || 0,
      a.data || null,
      a.index || 0,
      a.ns || 0,
      a.buttons || 0,
      a.ctrlKey || !1,
      a.shiftKey || !1,
      a.altKey || !1,
      a.oa || [],
      a.angle || 0
    );
  }
  var ge = A.create("TouchListener"),
    ne = (function(c) {
      function a(a, d) {
        function b(a) {
          f.handleEvent(a);
        }
        void 0 === d && (d = {});
        var f = c.call(this) || this;
        f.da = a;
        f.options = d;
        f.Fe = [];
        f.Bg = [];
        f.active = [];
        f.au = {};
        f.gu = 0;
        f.Sj = !0;
        var h = d.ND ? document : a;
        ae
          ? (f.Ta(a, "touchstart", b),
            f.Ta(h, "touchmove", b),
            f.Ta(h, "touchend", b),
            f.Ta(h, "touchcancel", b))
          : be &&
            !1 !== d.xs &&
            (f.Ta(a, "pointerdown", b),
            f.Ta(h, "pointermove", b),
            f.Ta(h, "pointerup", b),
            f.Ta(h, "pointercancel", b));
        if (ae || !be || !1 === d.xs)
          f.Ta(a, "mousedown", b),
            f.Ta(h, "mousemove", b),
            f.Ta(h, "mouseup", b);
        f.Ta(a, "wheel", b);
        return f;
      }
      __extends(a, c);
      a.prototype.Ta = function(a, d, e) {
        this.Fe.push({ element: a, event: d, fn: e });
        "touchmove" === d
          ? a.addEventListener(d, e, {
              passive: !1,
              capture: !0 === this.options.tn,
            })
          : a.addEventListener(d, e, !0 === this.options.tn);
      };
      a.prototype.pa = function(a, d) {
        for (var b = 0, f = a.split(" "); b < f.length; b++) {
          var h = f[b],
            k = "";
          switch (h) {
            case "gesturestart":
            case "gesturechange":
            case "gestureend":
              k = "gesture";
              break;
            case "tap":
            case "doubletap":
              k = "tap";
              break;
            case "swipe":
              k = "swipe";
              break;
            case "hold":
              k = "hold";
              break;
            case "drag":
              k = "drag";
          }
          if ("" !== k && !this.au[k]) {
            switch (k) {
              case "gesture":
                this.Bg.push(new he(this));
                break;
              case "tap":
                this.Bg.push(new ie(this));
                break;
              case "swipe":
                this.Bg.push(new je(this));
                break;
              case "hold":
                this.Bg.push(new ke(this));
                break;
              case "drag":
                this.Bg.push(new le(this));
            }
            this.au[k] = !0;
            ge("Created new detector " + k + " to handle " + h);
          }
        }
        c.prototype.pa.call(this, a, d);
      };
      a.prototype.ta = function(a, d) {
        c.prototype.xc.call(this, a, d);
      };
      a.prototype.Sa = function() {
        for (var a = 0, d = this.Fe; a < d.length; a++) {
          var e = d[a];
          e.element.removeEventListener(e.event, e.fn, !0 === this.options.tn);
        }
        a = 0;
        for (d = this.Bg; a < d.length; a++) (e = d[a]), e.Sa && e.Sa();
        this.Fe.length = 0;
        this.Bg.length = 0;
        this.active.length = 0;
        this.kb = {};
      };
      a.prototype.handleEvent = function(a) {
        var b = ce[a.type],
          e = new Date().getTime();
        switch (a.type) {
          case "touchstart":
          case "touchend":
          case "touchmove":
          case "touchcancel":
            this.gu = e + 800;
            for (var c = 0; c < a.changedTouches.length; c++) {
              var h = a.changedTouches[c];
              this.Aj(a, b, h.identifier, h.pageX, h.pageY, e);
            }
            break;
          case "pointerdown":
          case "pointerup":
          case "pointermove":
          case "pointercancel":
            c = me(a);
            "pointermove" === a.type &&
              a.buttons &&
              !this.qt(a.pointerId) &&
              (ge("Manufactured pointerdown"),
              this.Aj(a, "down", a.pointerId, c.pageX, c.pageY, e));
            this.Aj(a, b, a.pointerId, c.pageX, c.pageY, e);
            if ("pointercancel" === a.type)
              for (c = this.active.length - 1; 0 <= c; c--)
                this.Aj(a, b, this.active[c].id, a.pageX, a.pageY, e);
            break;
          case "mousedown":
          case "mousemove":
          case "mouseup":
            if (e < this.gu) break;
          case "wheel":
            (c = me(a)), this.Aj(a, b, 0, c.pageX, c.pageY, e);
        }
      };
      a.prototype.Aj = function(a, d, e, c, h, k) {
        var b = null;
        switch (d) {
          case "down":
            b = this.nx(e, c, h, k, a.buttons);
            d = new ee(
              "down",
              c,
              h,
              c,
              h,
              k,
              k,
              a.target,
              a,
              e,
              b.data,
              b.index,
              this.active.length,
              a.buttons,
              a.ctrlKey,
              a.shiftKey,
              a.altKey
            );
            break;
          case "move":
            b = this.qt(e);
            d = new ee(
              "move",
              c,
              h,
              b ? b.wb : c,
              b ? b.xb : h,
              k,
              b ? b.Nb : k,
              a.target,
              a,
              e,
              b ? b.data : {},
              b ? b.index : -1,
              this.active.length,
              a.buttons,
              a.ctrlKey,
              a.shiftKey,
              a.altKey
            );
            break;
          case "up":
            b = this.eC(e);
            d = new ee(
              "up",
              c,
              h,
              b ? b.wb : c,
              b ? b.xb : h,
              k,
              b ? b.Nb : k,
              a.target,
              a,
              e,
              b ? b.data : {},
              b ? b.index : -1,
              this.active.length,
              b ? b.buttons : a.buttons,
              a.ctrlKey,
              a.shiftKey,
              a.altKey
            );
            break;
          case "wheel":
            d = new ee(
              d,
              c,
              h,
              c,
              h,
              k,
              k,
              a.target,
              a,
              e,
              {},
              -1,
              this.active.length,
              a.buttons,
              a.ctrlKey,
              a.shiftKey,
              a.altKey
            );
            break;
          default:
            return;
        }
        null !== b && ((b.Gg = c), (b.Hg = h));
        (b || this.da.contains(a.target)) && this.ta(d.type, d);
      };
      a.prototype.qt = function(a) {
        for (var b = 0, c = this.active; b < c.length; b++) {
          var f = c[b];
          if (f.id === a) return f;
        }
        return null;
      };
      a.prototype.nx = function(a, d, c, f, h) {
        for (var b = 0; b < this.active.length; b++) {
          var e = this.active[b];
          if (e.id === a)
            return (
              (e.wb = e.Gg = d),
              (e.xb = e.Hg = c),
              (e.Nb = f),
              (e.oa = [new F(d, c)]),
              e
            );
        }
        this.active.push({
          index: this.active.length,
          id: a,
          Nb: f,
          wb: d,
          xb: c,
          Gg: d,
          Hg: c,
          oa: [new F(d, c)],
          data: {},
          buttons: h,
        });
        return this.active[this.active.length - 1];
      };
      a.prototype.eC = function(a) {
        for (var b = 0; b < this.active.length; b++)
          if (this.active[b].id === a)
            return (a = this.active[b]), this.active.splice(b, 1), a;
        return null;
      };
      return a;
    })(sb);
  function me(c) {
    if (c.pageX === c.clientX && c.pageY === c.clientY) {
      var a = document.documentElement.scrollLeft + document.body.scrollLeft,
        b = document.documentElement.scrollTop + document.body.scrollTop;
      if (a || b) return { pageX: c.clientX + a, pageY: c.clientY + b };
    }
    return c;
  }
  function ie(c) {
    var a = [];
    c.pa("up", function(b) {
      if (200 > b.Yo() && 20 > b.Ll()) {
        var d = b.clone();
        d.type = "tap";
        c.ta("tap", d);
        a: {
          for (d = 0; d < a.length; d++) {
            var e = a[d];
            if (
              300 > b.timestamp - e.Nb &&
              20 > lc(b.pageX, b.pageY, e.x, e.y)
            ) {
              e.x = b.pageX;
              e.y = b.pageY;
              e.Nb = b.timestamp;
              d = !0;
              break a;
            }
          }
          4 === a.length && a.splice(0, 1);
          a.push({ x: b.pageX, y: b.pageY, id: b.pointerId, Nb: b.timestamp });
          d = !1;
        }
        d && ((d = b.clone()), (d.type = "doubletap"), c.ta("doubletap", d));
      }
    });
  }
  function le(c) {
    var a = -1,
      b = -1;
    c.pa("down", function(a) {
      a.setData("target", a.Bb.target);
    });
    c.pa("move", function(d) {
      a !== d.wb &&
        b !== d.xb &&
        8 < d.Ll() &&
        ((a = d.wb),
        (b = d.xb),
        (d = d.clone()),
        (d.type = "drag"),
        c.ta("drag", d));
    });
  }
  function he(c) {
    function a() {
      for (var a = 0, b = 0, d = 0; d < e.length; d++)
        ge("Active touch: id:%s %s,%s", e[d].id, e[d].Gg, e[d].Hg),
          (a += e[d].Gg),
          (b += e[d].Hg);
      return { x: a / e.length, y: b / e.length };
    }
    function b(a, b) {
      for (var d = 0, c = 0; c < e.length; c++) {
        var f = e[c];
        d += Math.sqrt((f.Gg - a) * (f.Gg - a) + (f.Hg - b) * (f.Hg - b));
      }
      return d / e.length;
    }
    function d(a, b, d, e, f) {
      a = a.clone();
      a.type = b;
      a.pageX = d.x;
      a.pageY = d.y;
      a.scale = e;
      a.rotation = f;
      c.ta(a.type, a);
    }
    var e = [],
      f = !1,
      h = 0,
      k = 1,
      l = 1,
      n = { x: 0, y: 0 };
    c.pa("down move up", function(r) {
      e = c.active;
      switch (r.type) {
        case "down":
          2 <= e.length &&
            !f &&
            ((f = !0),
            (n = a()),
            (l = b(n.x, n.y)),
            (k = 1),
            (h = 0),
            d(r, "gesturestart", n, k, h));
          break;
        case "move":
          if (2 <= e.length && f) {
            n = a();
            k = b(n.x, n.y) / l;
            for (var v = n.x, w = n.y, x = 0, y = 0; y < e.length; y++) {
              var B =
                Math.atan2(e[y].Hg - w, e[y].Gg - v) -
                Math.atan2(e[y].xb - w, e[y].wb - v);
              B > Math.PI
                ? (B -= 2 * Math.PI)
                : B <= -Math.PI && (B += 2 * Math.PI);
              x += B;
            }
            h = (x / e.length / Math.PI) * 180;
            d(r, "gesturechange", n, k, h);
          }
          break;
        case "up":
          f && 2 > e.length && ((f = !1), d(r, "gestureend", n, k, h));
      }
    });
  }
  function je(c) {
    c.pa("up", function(a) {
      var b = a.oa;
      if (!(200 > a.Ll() || 1e3 < a.Yo() || 2 > b.length)) {
        for (var d = b[0], e = b[b.length - 1], f = 1; f < b.length - 1; f++)
          if (40 < b[f].at(d, e)) return !1;
        b = Math.atan2(e.y - d.y, e.x - d.x);
        ge("Swipe angle %s", (b / Math.PI) * 180);
        a = a.clone();
        a.type = "swipe";
        a.angle = b;
        c.ta("swipe", a);
      }
    });
  }
  function oe(c) {
    this.mi = c;
    this.time = new Date().getTime();
    this.timeout = 0;
  }
  var ke = (function() {
    function c(a) {
      function b(a) {
        var b = d.eg[a];
        b &&
          (ge("Remove pointer %s", a), clearTimeout(b.timeout), delete d.eg[a]);
      }
      var d = this;
      this.eg = {};
      a.pa("down", function(c) {
        b(c.pointerId);
        d.eg[c.pointerId] = new oe(new F(c.pageX, c.pageY));
        d.eg[c.pointerId].timeout = setTimeout(function() {
          var b = c.clone();
          b.type = "hold";
          b.timestamp = new Date().getTime();
          a.ta("hold", b);
        }, 1e3);
      });
      a.pa("move", function(a) {
        var c = a.pointerId;
        if (c in d.eg) {
          var e = d.eg[c];
          20 < new F(a.pageX, a.pageY).bc(e.mi) && b(c);
        }
      });
      a.pa("up", function(a) {
        b(a.pointerId);
      });
    }
    c.prototype.Sa = function() {
      for (var a in this.eg) clearTimeout(this.eg[a].timeout);
    };
    return c;
  })();
  var pe = {
      type: "translate",
      position: new F(0, 0),
      offset: new F(0, 0),
      Rg: "",
    },
    qe = {
      type: "translate",
      position: new F(0, 0),
      offset: new F(0, 0),
      Rg: "",
    },
    re = {
      type: "translate",
      position: new F(0, 0),
      offset: new F(0, 0),
      Rg: "",
    },
    se = (function() {
      function c(a, b, d) {
        this.kd = a;
        this.ua = b;
        this.ya = d;
      }
      c.prototype.Js = function() {
        return !0;
      };
      c.prototype.Zl = function(a, b) {
        void 0 === a && (a = this.ua);
        void 0 === b && (b = 1);
        a = a.Gb();
        if (0 === a.x || 0 === a.y) (a.x = 1), (a.y = 1);
        return new F(
          this.ya.x +
            this.ya.width * this.kd.position.x +
            this.kd.offset.x / a.x / b,
          this.ya.y +
            this.ya.height * this.kd.position.y +
            this.kd.offset.y / a.y / b
        );
      };
      c.prototype.Vl = function() {
        var a = this.Zl();
        return this.ua.apply(a.x, a.y);
      };
      c.prototype.la = function(a, b, d, c, f) {
        a.save();
        f *= d;
        c = c.multiply(this.ua);
        var e = c.Gb();
        if (0 === e.x || 0 === e.y) (e.x = 1), (e.y = 1);
        e.x = 1 / e.x / d;
        e.y = 1 / e.y / d;
        d = this.Zl(c, d);
        c = c.multiply(new rc(e.x, e.y, d.x, d.y));
        c.Ec(a);
        (b = b.get(this.kd.Rg))
          ? ((f = b.width),
            (c = b.height),
            a.drawImage(b, d.x - f / 2, d.y - c / 2, f, c))
          : this.Do(a, d, f);
        a.restore();
      };
      c.prototype.Do = function(a, b) {
        a.strokeStyle = "red";
        a.lineWidth = 1;
        a.strokeRect(b.x - 10, b.y - 10, 20, 20);
      };
      c.prototype.Hb = function(a, b, d, c, f) {
        var e = a.get(this.kd.Rg);
        a = this.Zl(this.ua, f);
        b = this.ua.inverse().apply(b, d);
        d = this.ua.Gb();
        d.x *= f;
        d.y *= f;
        e
          ? ((c = e.height), (f = e.width / 2 / d.x), (c = c / 2 / d.y))
          : ((f = c / d.x), (c /= d.y));
        return new G(a.x - f, a.y - c, 2 * f, 2 * c).Lc(b.x, b.y, 0);
      };
      c.prototype.Xf = function() {
        return "default";
      };
      c.prototype.click = function() {
        return null;
      };
      return c;
    })(),
    te = (function(c) {
      function a(a, d, e, f) {
        a = c.call(this, a, d, e) || this;
        a.origin = f;
        return a;
      }
      __extends(a, c);
      a.prototype.Vh = function(a) {
        var b = this.ua.inverse();
        a = this.Hx(a, b);
        return this.ua.multiply(
          new rc(a.x, a.y, this.origin.x, this.origin.y).multiply(b)
        );
      };
      a.prototype.Hx = function(a, d) {
        void 0 === d && (d = this.ua.inverse());
        var b = 1,
          c = 1,
          h = this.Vl(),
          k = this.Zl();
        a = d.apply(h.x + a.x, h.y + a.y);
        k = new F(k.x - this.origin.x, k.y - this.origin.y);
        a = new F(a.x - this.origin.x, a.y - this.origin.y);
        a = (a.x * k.x + a.y * k.y) / (k.x * k.x + k.y * k.y);
        a = oc(a);
        1e-8 > Math.abs(k.x) || 1e-8 > Math.abs(k.y)
          ? 1e-8 > Math.abs(k.x)
            ? (c = a)
            : (b = a)
          : (c = b = a);
        return { x: b, y: c };
      };
      a.prototype.Do = function(a, d, c) {
        a.beginPath();
        var b = 6;
        c && 9 * b > c && (b = c / 9);
        a.strokeStyle = q.Oa;
        a.lineWidth = 1;
        a.shadowBlur = 3;
        a.shadowOffsetX = 0;
        a.shadowOffsetY = 0;
        a.shadowColor = "rgba(0,0,0,0.2)";
        a.strokeStyle = "#ccc";
        a.arc(d.x, d.y, b, 0, 2 * Math.PI);
        a.fillStyle = q.Xc;
        a.fill();
        a.stroke();
        a.shadowColor = q.Ue;
      };
      a.prototype.Xf = function() {
        return 0.5 === this.kd.position.x
          ? "ns-resize"
          : 0.5 === this.kd.position.y
          ? "ew-resize"
          : this.kd.position.x !== this.kd.position.y
          ? "nesw-resize"
          : this.kd.position.x === this.kd.position.y
          ? "nwse-resize"
          : c.prototype.Xf.call(this);
      };
      return a;
    })(se),
    ue = (function(c) {
      function a(a, d, e, f) {
        a = c.call(this, a, d, e) || this;
        d = a.Vl();
        a.origin = a.ua.apply(f.x, f.y);
        a.Xq = Math.atan2(d.y - a.origin.y, d.x - a.origin.x);
        return a;
      }
      __extends(a, c);
      a.prototype.Vh = function(a, d) {
        var b = this.Vl();
        a =
          Math.atan2(b.y + a.y - this.origin.y, b.x + a.x - this.origin.x) -
          this.Xq;
        d && ((d = Math.PI / 16), (a = Math.floor(a / d) * d));
        return new qc(-a, this.origin.x, this.origin.y);
      };
      a.prototype.click = function() {
        return new qc(Math.PI / 2, this.origin.x, this.origin.y);
      };
      a.prototype.Do = function(a, d) {
        a.beginPath();
        a.strokeStyle = "#008000";
        a.lineWidth = 3;
        a.moveTo(d.x, d.y);
        a.arc(d.x, d.y, 6, 0, 1.5 * Math.PI, !1);
        a.stroke();
      };
      a.prototype.Xf = function() {
        return "crosshair";
      };
      return a;
    })(se),
    ve = (function(c) {
      function a(a, d, e) {
        return c.call(this, a, d, e) || this;
      }
      __extends(a, c);
      a.prototype.Vh = function(a) {
        return new pc(a.x, a.y);
      };
      a.prototype.Xf = function() {
        return "move";
      };
      return a;
    })(se),
    we = (function(c) {
      function a() {
        return c.call(this, re, new J(), new G(0, 0, 0, 0)) || this;
      }
      __extends(a, c);
      a.prototype.Vh = function() {
        return new J();
      };
      return a;
    })(se),
    xe = (function(c) {
      function a(a, d, e) {
        return c.call(this, a, d, e) || this;
      }
      __extends(a, c);
      a.prototype.Js = function() {
        return !1;
      };
      a.prototype.click = function(a) {
        this.kd.Ls && this.kd.Ls(a.pageX, a.pageY);
        return null;
      };
      a.prototype.Vh = function() {
        return new J();
      };
      return a;
    })(se);
  function ye(c, a, b) {
    var d = void 0,
      e = new F(0, 0),
      f = b.Gb();
    e.x = a.x + a.width * c.position.x + c.offset.x / f.x;
    e.y = a.y + a.height * c.position.y + c.offset.y / f.y;
    switch (c.type) {
      case "translate":
        return new ve(c, b, a);
      case "scale":
        return (
          d ||
            (d = new F(
              a.right() - c.position.x * a.width,
              a.bottom() - c.position.y * a.height
            )),
          new te(c, b, a, d)
        );
      case "rotate":
        return d || (d = a.Qd()), new ue(c, b, a, d);
      case "click":
        return new xe(c, b, a);
    }
  }
  var ze = (function() {
    function c(a, b, d, c) {
      this.view = a;
      this.ni = b;
      this.Ba = this.Aa = 0;
      this.lc = !1;
      this.log = A.create("SELECT");
      this.Ru(d, c);
    }
    c.prototype.sb = function(a) {
      this.log("Gesture detected; aborting select box.");
      this.view.Za(this.ni);
      return this.ni.sb ? this.ni.sb(a) : !1;
    };
    c.prototype.Ac = function() {
      this.view.no("select");
    };
    c.prototype.Ab = function(a, b) {
      return this.Ru(a, b);
    };
    c.prototype.Ru = function(a, b) {
      this.Aa = a;
      this.Ba = b;
      return (this.lc = !0);
    };
    c.prototype.Ib = function(a, b) {
      if (this.lc) {
        var d = this;
        this.view.scrollIntoView(a, b);
        this.view.rv("select", function(c) {
          c.save();
          c.strokeStyle = "#0050B7";
          c.lineWidth = 2 / d.view.scale;
          c.fillStyle = "rgba(0, 80, 183, 0.2)";
          var e = new G(d.Aa + 0.5, d.Ba + 0.5, a - d.Aa, b - d.Ba);
          c.fillRect(e.x, e.y, e.width, e.height);
          c.strokeRect(e.x, e.y, e.width, e.height);
          c.restore();
        });
        return !0;
      }
      return !1;
    };
    c.prototype.Wb = function(a, b) {
      this.lc = !1;
      this.view.qb();
      this.view.vC(new G(this.Aa, this.Ba, a - this.Aa, b - this.Ba));
      this.view.vc();
      this.view.Za(this.ni);
      return !0;
    };
    c.prototype.Ad = function() {
      return "pick";
    };
    return c;
  })();
  function Ae(c) {
    for (var a = [], b = 0; b < c.length; b++) a.push(c[b].id);
    return a;
  }
  var Be = (function() {
    function c(a, b, d, c, f, h, k) {
      this.view = a;
      this.handle = b;
      this.xD = d;
      this.duplicate = k;
      this.ob = 0;
      this.Iv = new G(0, 0, 0, 0);
      this.Fa = [];
      this.wp = [];
      this.Le = [];
      this.$f = [];
      this.gc = new F(0, 0);
      this.Zt = !1;
      this.log = A.create("TransformSelectionBehaviour");
      this.em = !1;
      this.Ab(c, f, h);
    }
    c.prototype.sb = function(a) {
      if (
        "gesturestart" !== a.type &&
        "gesturechange" !== a.type &&
        "gestureend" !== a.type
      )
        return !1;
      this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
      this.em = !0;
      var b = this.view.oe(a.pageX, a.pageY, !0),
        d = b.x;
      b = b.y;
      "gesturestart" === a.type && ((this.gc.x = d), (this.gc.y = b));
      var c = d - this.gc.x,
        f = b - this.gc.y,
        h = a.scale,
        k = a.rotation;
      this.view.Sm || (h = 1);
      this.view.ik || (k = 0);
      k = (-k / 180) * Math.PI;
      if (0 < this.view.ha.get("snap")) {
        var l = Math.PI / 16;
        k = Math.floor(k / l) * l;
      }
      h = new rc(h, h, this.gc.x, this.gc.y);
      k = new qc(k, this.gc.x, this.gc.y);
      c = new pc(c, f).multiply(h).multiply(k);
      this.lv(c, d, b);
      "gestureend" === a.type && this.wa(c, d, b);
      return !0;
    };
    c.prototype.Ab = function(a, b, d) {
      var c = this;
      if (this.em) return !0;
      this.view.Jb(this.handle.Xf());
      this.view.Ne(!0);
      this.duplicate
        ? ((this.Fa.length = 0),
          (this.wp = this.view.Rc(!0)),
          this.view.aa.transaction(function() {
            for (
              var a = 0, b = c.view.aa.duplicate(c.view.Rc(!0), new J());
              a < b.length;
              a++
            ) {
              var d = c.view.aa.Da(b[a], !1);
              d && Pc(d) && c.Fa.push(d);
            }
          }, !0))
        : ((this.Fa = this.view.dc()), (this.wp = this.view.Rc(!0)));
      this.$y(this.Fa);
      this.gc = this.Uq(a, b, d);
      this.log("onMouseDown(%s,%s)", this.gc.x, this.gc.y);
      this.Iv = new G(
        this.view.Zd.x,
        this.view.Zd.y,
        this.view.Zd.width,
        this.view.Zd.height
      );
      return !0;
    };
    c.prototype.$y = function(a) {
      this.Le = [];
      for (var b = new J(), d = 0; d < a.length; d++)
        this.Le.push(a[d].Xe(b)),
          this.$f.push(this.Le[d]),
          (this.ob = this.ob || a[d].ia("snap") || 0),
          Rc(a[d]) && (this.Zt = !0);
    };
    c.prototype.Uq = function(a, b, d) {
      return this.view.ob(new F(a, b), this.ob || d);
    };
    c.prototype.Ib = function(a, b, d) {
      if (this.em) return !0;
      var c = this.Uq(a, b, d);
      a = c.x;
      b = c.y;
      d = this.handle.Vh(
        new F(c.x - this.gc.x, c.y - this.gc.y),
        0 < this.view.qp(d)
      );
      this.jv(d);
      this.lv(d, a, b);
      return !0;
    };
    c.prototype.lv = function(a, b, d) {
      for (var c = this, f = 0; f < this.Fa.length; f++)
        this.Fa[f].Xb(this.Le[f]),
          (this.$f[f] = this.Fa[f].Xe(a)),
          this.Fa[f].Xb(this.$f[f]),
          this.Fa[f].format(this.view.ma, this.view.request);
      this.view.nn(a);
      this.Zt && this.view.aa.Qs();
      this.view.la(function() {
        if (c.handle instanceof ue) {
          var a = c.view.ma;
          a.save();
          a.beginPath();
          a.strokeStyle = "#0050B7";
          a.lineWidth = 1 / c.view.scale;
          a.moveTo(c.handle.origin.x, c.handle.origin.y);
          a.lineTo(b, d);
          a.stroke();
          a.restore();
        }
      });
    };
    c.prototype.wa = function(a, b, d) {
      for (var c = this, f = 0; f < this.Fa.length; f++)
        this.Fa[f].Xb(this.Le[f]);
      f = !1;
      if (a.Gp()) {
        b = { docX: b, docY: d, nodes: [] };
        d = 0;
        for (f = this.Fa; d < f.length; d++) b.nodes.push({ id: f[d].id });
        f = !1 === this.view.za.xc("drop-shape", b);
      }
      f ||
        (this.duplicate &&
          this.view.aa.transaction(function() {
            for (var a = [], b = 0, d = c.Fa; b < d.length; b++)
              a.push(d[b].id);
            c.view.aa.ac(a);
          }, !0),
        this.view.aa.transaction(function() {
          if (c.duplicate) c.view.aa.duplicate(c.wp, a);
          else
            for (var b = 0; b < c.Fa.length; b++)
              c.view.aa.vb([c.Fa[b].id], c.$f[b]);
        }));
      this.kt();
    };
    c.prototype.Wb = function(a, b, d) {
      var c = this;
      if (this.em) return !0;
      var f = a,
        h = b,
        k = this.Uq(a, b, d);
      a = k.x;
      b = k.y;
      this.log("onMouseUp(%s,%s)", a, b);
      var l = !1;
      if (k.bd(this.gc))
        if (this.xD) {
          if (this.duplicate) {
            var n = [];
            a = 0;
            for (b = this.Fa; a < b.length; a++) n.push(b[a].id);
            this.view.aa.transaction(function() {
              c.view.aa.ac(n);
            }, !0);
          }
          (f = this.view.aa.Hb(f, h, this.view.scale, this.view.Tb).node) &&
          f.mf()
            ? (this.log(
                "Didn't move, and has edit mode. Selecting node %s",
                f.id
              ),
              this.view.qb(),
              this.view.ph(f))
            : (l = !0);
        } else this.log("Didn't move, but toggleEditNode=false"), (l = !0);
      else
        return (
          this.log("Moved by %s,%s", a - this.gc.x, b - this.gc.y),
          (d = this.handle.Vh(
            new F(k.x - this.gc.x, k.y - this.gc.y),
            0 < this.view.qp(d)
          )),
          this.jv(d),
          this.wa(d, a, b),
          !0
        );
      if (l) {
        var r = this.handle.click(d);
        this.log("handle.click returned %s", r);
        r &&
          this.view.aa.transaction(function() {
            c.view.aa.mg(Ae(c.Fa), r);
          });
      }
      this.kt();
      return !0;
    };
    c.prototype.jv = function(a) {
      if ("view" === this.view.ha.get("confine") && a.Gp()) {
        var b = this.Iv.clone(),
          d = this.view.Ub();
        b.x += a.Aa;
        b.y += a.Ba;
        b = b.Rs(d);
        a.Aa += b.x;
        a.Ba += b.y;
      }
    };
    c.prototype.kt = function() {
      this.view.nn(new J());
      this.view.Oi();
      this.view.update(!0);
      this.view.ub();
    };
    c.prototype.Ac = function() {
      this.view.Jb("default");
      this.view.Ne(!1);
    };
    c.prototype.Ad = function() {
      return "pick";
    };
    return c;
  })();
  var De = (function() {
    function c(a, b) {
      this.view = a;
      this.ba = b;
      this.Al = !1;
      this.Ja = this.Vf = this.ka = null;
      this.fillStyle = q.Oa;
      this.jn = !1;
      this.xa = new pb();
      this.er = "normal";
      this.log = A.create("Text");
      this.multiline = a.ha.get("multilineText");
      this.Pb = document.createElement("div");
      a.ha.get("iPadNoScrollText") &&
        null !== navigator.userAgent.match(/iPad|iPhone|Android/i) &&
        (this.er = "top");
    }
    c.prototype.xd = function() {
      this.log("Entering text mode");
      this.view.Jb("text");
    };
    c.prototype.Ac = function() {
      this.Al && this.Xi();
      this.view.Jb("default");
      this.log("Leaving text mode");
      this.ka && this.ka.parentNode && this.ka.parentNode.removeChild(this.ka);
      this.ka = null;
      this.Pb.parentNode && this.Pb.parentNode.removeChild(this.Pb);
      this.xa.Sa();
    };
    c.prototype.Ab = function(a, b, d) {
      this.log("onMouseDown(%s)", d.type);
      if (this.Al) {
        if (d.target === this.ka)
          return (
            this.log("Ignore click -- its in our own edit box."),
            (this.view.zl = !0),
            !1
          );
        this.log("Editing somewhere else on mousedown; submit that first.");
        this.Xi();
        this.view.ha.get("autoPickToolText") && this.view.ub();
      } else
        (d = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb).node),
          this.Zq(d, a, b);
      this.log("Eating click");
      return (this.view.zl = !0);
    };
    c.prototype.Zy = function() {
      if (this.Pb && this.ka) {
        this.Pb.style.fontSize = this.ka.style.fontSize;
        this.Pb.style.fontFamily = this.ka.style.fontFamily;
        this.Pb.style.fontWeight = this.ka.style.fontWeight;
        this.Pb.style.fontStyle = this.ka.style.fontStyle;
        this.Pb.style.whiteSpace = "break-spaces";
        this.Pb.style.position = "absolute";
        this.Pb.style.visibility = "hidden";
        this.Pb.style.backgroundColor = "rgba(0,0,0,0.2)";
        document.body.appendChild(this.Pb);
        this.Pb.style.left = "0";
        for (this.Pb.style.top = "0"; this.Pb.firstChild; )
          this.Pb.removeChild(this.Pb.firstChild);
        this.Pb.appendChild(document.createTextNode(this.ka.value));
        var a = Math.ceil(this.Pb.clientWidth),
          b = this.ka.offsetWidth - this.ka.clientWidth;
        this.ka.clientWidth < a + 4 &&
          (a > 500 * this.view.scale && (a = 500 * this.view.scale),
          (this.ka.style.width = a + 4 + b + "px"));
        this.ka.clientHeight < this.ka.scrollHeight + 4 &&
          this.ka.offsetHeight < this.ka.scrollHeight &&
          (this.log("Increase to scrollHeight of %s", this.ka.scrollHeight),
          (this.ka.style.height = "" + this.ka.scrollHeight + "px"));
      }
    };
    c.prototype.Zq = function(a, b, d) {
      function c() {
        null === E.Ja
          ? E.Zy()
          : h.ka &&
            h.ka.clientHeight < h.ka.scrollHeight + 4 &&
            h.ka.offsetHeight < h.ka.scrollHeight &&
            (h.log("Increase to scrollHeight of %s", h.ka.scrollHeight),
            (h.ka.style.height = "" + h.ka.scrollHeight + "px"));
      }
      function f() {
        E.ka &&
          (E.ka.clientHeight < E.ka.scrollHeight &&
            (E.log("Increase to scrollHeight of %s", E.ka.scrollHeight),
            (E.ka.style.height = "" + E.ka.scrollHeight + "px")),
          (E.ka.style.width = "" + E.ka.scrollWidth + "px"));
        R = null;
      }
      var h = this,
        k = 0,
        l = 0,
        n = 0,
        r = 0,
        v = 0,
        w = 0,
        x = 0;
      this.jn = !1;
      if (
        (a && "TextNode" === a.type()) ||
        (a &&
          "PathNode" === a.type() &&
          this.view.ha.get("allowTextInShape")) ||
        (a && "PathNode" !== a.type() && a.Pg())
      ) {
        this.Ja = a;
        "top" !== this.er && "TextNode" === a.type() && this.Ja.hg(!0);
        this.view.la();
        this.Vf = new F(a.rect.x, a.rect.y);
        if ((r = a.ia("font"))) {
          r = Od(r);
          var y = r.fontFamily || "arial";
          var B = parseFloat(r.fontSize) || 10;
          var H = "bold" === r.fontWeight;
          var M = "italic" === r.fontStyle;
        } else
          (y = a.ia("fontName")),
            (B = a.ia("fontSize")),
            (H = a.ia("bold")),
            (M = a.ia("italic"));
        "TextNode" !== a.type() || a.ia("wrap") || (B *= a.Na().Gb().y);
        "TextNode" === a.type() && (l = a.rect.height);
        var I = a.ia("textDecoration");
        k = a.rect.width * this.view.scale;
        k = Math.max(k, 50);
        k += 7;
        a.ia("text")
          ? (this.fillStyle = a.ia("textFillStyle") || this.La("textFillStyle"))
          : (this.fillStyle = this.view.sa.textFillStyle);
        var z = a.Na().Gb();
        n = a.ia("padding") || 0;
        r = n *= this.view.scale;
        n *= z.x;
        r *= z.y;
        w += 1;
        --x;
        l += 2;
        v = 0.15 * B * z.y;
        this.log(
          "NodeWidth=%s scale=%s/%s padding=%s/%s, paddingShift=%s editWidth=%s",
          a.rect.width,
          z.x,
          z.y,
          n,
          r,
          v,
          k
        );
      } else
        (this.Ja = null),
          (this.Vf = new F(b, d)),
          (y = this.La("fontName")),
          (B = this.La("fontSize")),
          (H = this.La("bold")),
          (M = this.La("italic")),
          (I = this.La("textDecoration")),
          (this.fillStyle =
            this.ba.fillStyle ||
            this.La("textFillStyle") ||
            this.La("fillStyle")),
          (n = this.La("padding") || 0),
          (r = n *= this.view.scale),
          (l = this.La("width") || 0) && (k = l * this.view.scale + n),
          (l = 2 * B * this.view.scale),
          this.La("wrap") && (d -= B);
      var E = this;
      this.ka = document.createElement("textarea");
      this.ka.setAttribute("rows", "1");
      this.ka.style.width = k ? "" + k + "px" : "auto";
      a = this.view.Nh(this.Vf.x, this.Vf.y);
      this.ka.classList.add("zwibbler-text-area");
      this.ka.style.minWidth = "0";
      this.ka.style.maxWidth = "none";
      this.ka.style.position = "absolute";
      this.ka.style.fontFamily = y;
      this.ka.style.fontSize = "" + B * this.view.scale + "px";
      this.ka.style.lineHeight = "1";
      this.ka.style.overflow = "hidden";
      this.ka.style.fontWeight = H ? "bold" : "normal";
      this.ka.style.fontStyle = M ? "italic" : "normal";
      this.ka.style.paddingTop = r + v + "px";
      this.ka.style.paddingBottom = r - v + "px";
      this.ka.style.paddingLeft = n + "px";
      this.ka.style.paddingRight = n + "px";
      this.ka.style.border = "1px dashed #888";
      this.ka.style.outline = "none";
      this.ka.style.color = this.fillStyle;
      this.ka.style.boxSizing = "border-box";
      this.ka.style.backgroundColor = this.La("background");
      this.Ja &&
        "PathNode" === this.Ja.type() &&
        (this.ka.style.backgroundColor = "white");
      this.ka.style.textDecoration = I || "none";
      this.ka.style.textAlign = this.La("textAlign");
      this.ka.style.zIndex = "" + (this.view.Td() + 1);
      this.ka.style.resize = "both";
      l &&
        (this.log("Set editbox height initially to " + l + "px"),
        (this.ka.style.height = l + "px"));
      l = this.ka.clientHeight;
      this.log("Using z-index %s", this.ka.style.zIndex);
      q.ff(this.fillStyle).toString() === q.Xc &&
        (this.ka.style.backgroundColor = "#808080");
      y = this.view.canvas.parentElement;
      B = u(y).oc();
      H = k = 0;
      "top" === this.er
        ? ((H = u(this.view.canvas.first).oc()),
          (M = this.view.canvas.width),
          (k = this.ka.clientWidth),
          (k = H.left + M / 2 - k / 2),
          (H = H.top))
        : ((k = Math.round(a.x)), (H = Math.round(a.y)));
      k += w;
      H = H - r / 2 + x;
      this.ka.style.WebkitTransitionDuration = "0";
      this.ka.style.MozTransitionDuration = "0";
      this.ka.style.msTransitionDuration = "0";
      this.ka.style.OTransitionDuration = "0";
      this.ka.style.transitionDuration = "0";
      Ce(this.ka);
      this.ka.style.left = k - B.left + "px";
      this.ka.style.top = H - B.top + "px";
      y.appendChild(this.ka);
      "center" === this.La("textAlign") &&
        (null === this.Ja
          ? ((w = this.ka.offsetWidth / 2),
            (this.ka.style.left = a.x - w - B.left + "px"),
            (b -= w / this.view.scale))
          : ((w =
              this.ka.offsetWidth / 2 -
              (this.Ja.rect.width / 2) * this.view.scale),
            (this.ka.style.left = k - w - B.left + "px"),
            (this.ka.style.top = H + r / 2 - B.top + "px")));
      this.Al = !0;
      this.Vf = new F(b, d + l);
      fc(this.ka, y);
      this.Ja && (this.ka.value = this.Ja.ia("text"));
      var R = null;
      E.ka && E.log("editBox scollheight is %s", E.ka.scrollHeight);
      R = setTimeout(f, 0);
      this.xa.addEventListener(this.ka, "keydown", function(a) {
        "keydown" === a.type &&
          ((27 === a.keyCode && E.multiline) || (13 === a.keyCode && a.shiftKey)
            ? (E.log("Enter pressed. create text."),
              E.Xi(),
              E.view.Ra.Mb && E.view.fD(a),
              E.view.ha.get("autoPickToolText") && E.view.ub())
            : 27 === a.keyCode
            ? (E.log("ESC pressed; cancel."),
              E.cancel(),
              E.view.ub(),
              E.view.Pc.ta("goto-toolbar"))
            : 13 === a.keyCode && (R || (R = setTimeout(f, 0))));
      });
      this.xa.addEventListener(this.ka, "input", c);
      this.xa.addEventListener(this.ka, "propertychange", c);
      this.view.ha.get("leaveTextToolOnBlur") &&
        (this.xa.addEventListener(this.ka, "focus", function() {
          E.log("Text focus received.");
        }),
        this.xa.addEventListener(this.ka, "blur", function() {
          E.ka &&
            !E.ka.uq &&
            (E.log("Text blur received -- removing=%s", !0 === E.ka.uq),
            (E.ka.uq = !0),
            E.Xi());
        }));
      setTimeout(function() {
        E.ka && E.ka.focus();
      }, 200);
      this.ka.focus();
      this.view.za.ta("edit-text-shown", E.ka);
      this.view.za.digest();
    };
    c.prototype.mD = function(a) {
      a ? this.Xi() : this.cancel();
    };
    c.prototype.cancel = function() {
      this.ka &&
        ((this.ka.uq = !0),
        this.ka.parentNode && this.ka.parentNode.removeChild(this.ka),
        this.view.za.ta("edit-text-hidden"),
        this.view.Ra.Mb && this.view.Pc.ta("goto-canvas"));
      this.ka = null;
      this.Al = !1;
      this.Ja && (this.Ja.hg(!1), this.view.la());
    };
    c.prototype.La = function(a) {
      if (this.Ja) {
        var b = this.Ja.ia(a);
        if (b) return b;
      }
      if (a in this.ba) return this.ba[a];
      switch (a) {
        case "background":
          return this.view.ha.get("defaultTextBackground");
        case "wrap":
          return this.view.ha.get("multilineText");
        case "lineWidth":
          return this.view.sa.textLineWidth;
      }
      return this.view.sa[a];
    };
    c.prototype.Mg = function() {
      return {
        textFillStyle: this.La("textFillStyle"),
        fillStyle: this.La("textFillStyle"),
        bold: this.La("bold"),
        italic: this.La("italic"),
        textDecoration: this.La("textDecoration"),
        strokeStyle: this.La("strokeStyle"),
        lineWidth: this.La("lineWidth"),
        fontName: this.La("fontName"),
        fontSize: this.La("fontSize"),
        textAlign: this.La("textAlign"),
        "border-width": this.La("border-width") || 0,
        "border-color": this.La("border-color") || q.Oa,
        background: this.La("background") || "transparent",
      };
    };
    c.prototype.Xi = function() {
      var a = this;
      if (this.ka) {
        var b = this.ka.value,
          d = this.ka.offsetWidth;
        this.cancel();
        if (this.Ja && this.Ja.ia("text") === b && !this.jn)
          this.log("Text was not changed.");
        else if (null === this.Ja && "" === b) this.log("No text entered.");
        else if (this.Ja) {
          this.log("Update text in node %s", this.Ja.id);
          var c = {
              text: b,
              textFillStyle: this.fillStyle,
              textAlign: this.La("textAlign"),
              textDecoration: this.La("textDecoration"),
              fontSize: this.La("fontSize"),
            },
            f;
          for (f in this.ba) c[f] = this.ba[f];
          this.view.aa.transaction(function() {
            a.view.aa.vb([a.Ja.id], c);
          });
        } else if (this.Vf) {
          this.log("Create new text node.");
          var h = (f = 0),
            k = this.La("fontSize");
          f = k;
          if (
            "center" === this.La("textAlign") &&
            0 === (this.La("width") || 0) + (this.La("padding") || 0)
          ) {
            var l = this.qA(b) * this.view.scale;
            h = Math.max(0, (d - l) / 2);
            this.log(
              "tw=" + l + " ew=" + d + " Offset text by " + h + " to center."
            );
          }
          var n = new pc(this.Vf.x + h, this.Vf.y + f);
          this.view.aa.transaction(function() {
            var d = a.view.aa.createNode(
              "TextNode",
              ic(
                {
                  text: b,
                  background: a.La("background"),
                  fontSize: k,
                  fontName: a.La("fontName"),
                  bold: a.La("bold"),
                  italic: a.La("italic"),
                  textAlign: a.La("textAlign"),
                  textFillStyle: a.La("textFillStyle"),
                  textDecoration: a.La("textDecoration"),
                  strokeStyle: a.La("textStrokeStyle"),
                  lineWidth: a.La("textLineWidth"),
                  layer: a.ba.layer || a.view.Zc,
                  wrap: a.view.ha.get("multilineText"),
                },
                a.ba
              )
            );
            a.view.aa.mg([d], n);
          });
        }
      }
    };
    c.prototype.qA = function(a) {
      var b = new ed();
      b.Wm(
        this.La("fontName"),
        this.La("fontSize"),
        this.La("bold"),
        this.La("italic"),
        "none"
      );
      b.jg(a);
      a = document.createElement("canvas").getContext("2d");
      b.format(a, 0, 0);
      return b.rect.width;
    };
    c.prototype.Ib = function() {
      return !1;
    };
    c.prototype.ke = function(a) {
      this.log("keyboard: %s", a);
      "cancel" === a &&
        null === this.ka &&
        (this.view.ub(), this.view.Pc.ta("goto-toolbar"));
    };
    c.prototype.je = function(a, b) {
      b ? this.hd("textFillStyle", a) : this.hd("strokeStyle", a);
    };
    c.prototype.bg = function(a, b) {
      this.view.Oq(a, b);
    };
    c.prototype.vf = function(a, b) {
      "defaultBold" === a
        ? ((a = "bold"),
          this.ka && (this.ka.style.fontWeight = b ? "bold" : "normal"))
        : "defaultItalic" === a
        ? ((a = "italic"),
          this.ka && (this.ka.style.fontStyle = b ? "italic" : "normal"))
        : "defaultTextBackground" === a
        ? ((a = "background"), this.ka && (this.ka.style.backgroundColor = b))
        : "defaultFont" === a
        ? ((a = "fontName"), this.ka && (this.ka.style.fontFamily = b))
        : "defaultFontSize" === a
        ? ((a = "fontSize"), this.ka && (this.ka.style.fontSize = b + "px"))
        : "defaultTextFillStyle" === a
        ? ((a = "textFillStyle"), this.ka && (this.ka.style.color = b))
        : "defaultTextDecoration" === a
        ? ((a = "textDecoration"),
          this.ka && (this.ka.style.textDecoration = b))
        : "defaultTextAlign" === a &&
          ((a = "textAlign"), this.ka && (this.ka.style.textAlign = b));
      this.log("Update %s=%s", a, b);
      this.jn = !0;
      this.ba[a] = b;
    };
    c.prototype.Ad = function() {
      return "text";
    };
    c.prototype.hd = function(a, b) {
      b = jc(this.ba[a], b);
      this.ba[a] = b;
      this.jn = !0;
      switch (a) {
        case "textFillStyle":
        case "fillStyle":
          this.ba.textFillStyle = b;
          this.view.sa.textFillStyle = b;
          break;
        case "strokeStyle":
          this.view.sa.textStrokeStyle = b;
          break;
        case "lineWidth":
          this.view.sa.textLineWidth = b;
      }
      if (this.ka)
        switch (a) {
          case "textFillStyle":
          case "fillStyle":
            this.ka.style.color = b;
            break;
          case "fontSize":
            this.ka.style.fontSize = b + "px";
            break;
          case "fontName":
            this.ka.style.fontFamily = b;
            break;
          case "bold":
            this.ka.style.fontWeight = b ? "bold" : "normal";
            break;
          case "italic":
            this.ka.style.fontStyle = b ? "italic" : "normal";
            break;
          case "textDecoration":
            this.ka.style.textDecoration = b;
            break;
          case "textAlign":
          case "background":
          case "border":
            this.ka.style[a] = b;
            break;
          case "border-width":
            this.ka.style.borderWidth = b;
            break;
          case "border-color":
            this.ka.style.borderColor = b;
        }
    };
    c.prototype.sp = function() {
      return ["TextNode"];
    };
    return c;
  })();
  function Ce(c) {
    c.addEventListener("input", function() {
      var a = c.value,
        b = a.replace(/[\u2018\u2019\u201C\u201D]/g, function(a) {
          return "''\"\"".substr("\u2018\u2019\u201c\u201d".indexOf(a), 1);
        });
      if (a !== b) {
        a = c.selectionStart;
        var d = c.selectionEnd;
        c.value = b;
        c.selectionStart = a;
        c.selectionEnd = d;
      }
    });
  }
  var Ee = (function() {
    function c(a) {
      this.view = a;
      this.start = new F(0, 0);
      this.Yq = new F(0, 0);
      this.active = !1;
      this.yi = 1;
      this.rect = null;
      this.log = A.create("PanZoomMixin");
      this.yi = a.scale;
    }
    c.prototype.sb = function(a) {
      this.log("onGesture(%s)", a.type);
      if (!this.view.ha.get("allowZoom") || !this.view.ha.get("allowScroll"))
        return !1;
      if ("gesturestart" === a.type)
        (this.start = new F(a.pageX, a.pageY)),
          (this.Yq = this.view.oe(a.pageX, a.pageY)),
          (this.rect = this.view.Ub()),
          (this.yi = this.view.scale),
          (this.active = !0);
      else if ("gesturechange" === a.type && this.rect) {
        var b = a.pageX - this.start.x,
          d = a.pageY - this.start.y;
        a = this.view.pi(a.scale * this.yi) / this.yi;
        a = new rc(1 / a, 1 / a, this.Yq.x, this.Yq.y);
        a = new pc(-b / this.yi, -d / this.yi).multiply(a);
        b = this.rect.clone();
        b.transform(a);
        this.view.Oe(b);
      } else "gestureend" === a.type && (this.active = !1);
      return !0;
    };
    return c;
  })();
  var Fe = (function(c) {
    function a() {
      var a = c.call(this) || this;
      a.oi = [];
      a.Lk = !1;
      a.Fm = 0;
      a.canvas = null;
      a.ha = null;
      a.log = A.create("FORMAT", !0);
      return a;
    }
    __extends(a, c);
    a.prototype.lm = function() {
      return this.Lk || 0 < this.Fm;
    };
    a.prototype.add = function(a, d, c, f, h) {
      var b;
      var e = this.oi;
      var n = 0;
      for (b = e.length; n < b; n++) {
        var r = e[n];
        r.type === d && r.Ke === a && r.url === c && (r.Sq = !0);
      }
      this.log("Request URL %s", c.substr(0, 64));
      this.oi.push({ Ke: a, type: d, url: c, cv: f || {}, Ix: h, Sq: !1 });
      this.check();
    };
    a.prototype.check = function() {
      for (var a = 0; !this.Lk && a < this.oi.length; )
        this.oi[a].Sq ? this.oi.splice(a, 1) : (this.Vw(this.oi[a]), (a += 1));
      this.lm() || this.ta("done");
    };
    a.prototype.Vw = function(a) {
      var b = this;
      b.Lk = !0;
      b.log("Processing request for item %s url=%s", a.Ke, a.url.substr(0, 64));
      0 === a.type.indexOf("image") &&
        lb.load(a.url, function(d, c) {
          null !== d
            ? (b.log(
                "Image request completed for item %s url %s",
                a.Ke,
                c.substr(0, 64)
              ),
              a.Ix(d, c))
            : b.log("Image request failed for url %s", c);
          b.Lk = !1;
          a.Sq = !0;
          b.check();
        });
    };
    a.prototype.PA = function(a, d) {
      var b = this;
      this.Fm++;
      var c = new Wd();
      c.eq(a).then(
        function() {
          c.ready && d(c);
          b.Fm--;
          b.check();
        },
        function(d) {
          b.Fm--;
          console.warn("Error loading %s: ", a, d);
        }
      );
    };
    a.prototype.fy = function(a, d) {
      this.ta("convert-dom-request", a, d);
    };
    a.prototype.gg = function(a) {
      this.ta("reformat", a);
    };
    a.prototype.gC = function(a) {
      this.ta("redraw", a);
    };
    a.prototype.hf = function() {
      if (null === this.canvas) return new G(0, 0, 0, 0);
      var a = u(this.canvas).oc();
      return new G(a.left, a.top, this.canvas.width, this.canvas.height);
    };
    a.prototype.yc = function(a) {
      return this.ha ? this.ha.get(a) : null;
    };
    return a;
  })(sb);
  var Ge = (function() {
      function c(a, b) {
        this.se = a;
        this.key = b;
      }
      c.prototype.toString = function() {
        return "LValue(" + this.key + ")";
      };
      return c;
    })(),
    He = (function() {
      function c(a, b, d) {
        this.id = a;
        this.rm = b;
        d && (this.tf = d);
      }
      c.prototype.tf = function() {
        return this;
      };
      c.prototype.uu = function(a) {
        return a;
      };
      c.prototype.toString = function() {
        return "Token(id='" + this.id + "', lbp=" + this.rm + ")";
      };
      return c;
    })(),
    Ie = (function() {
      function c(a, b) {
        return a[b];
      }
      function a(a, b, d) {
        a[b] = d;
      }
      function b(a) {
        if (a instanceof Ge) {
          if (a.se === B) return H(B, a.key);
          if (a.se) return a.se[a.key];
        } else return a;
      }
      function d(a, b) {
        void 0 === b && (b = 0);
        var d = I[a];
        d ? (d.rm = Math.max(d.rm, b)) : (d = I[a] = new He(a, b));
        return d;
      }
      function e(a, b) {
        a = d(a);
        a.tf = function() {
          return b;
        };
        return a;
      }
      function f(a) {
        return new He("(literal)", 0, function() {
          return a;
        });
      }
      function h(a) {
        var b = new He("(name)", 0, function() {
          return new Ge(B, a);
        });
        b.toString = function() {
          return "Token(name: " + a + ")";
        };
        return b;
      }
      function k(a, d, c) {
        l(a, d, function(a) {
          return c(b(a), b(y(d - 1)));
        });
      }
      function l(a, b, c) {
        d(a, b).uu = c;
      }
      function n(a, c, e) {
        d(a, c).tf = function() {
          return e(b(y(c)));
        };
      }
      function r(a, b, c) {
        d(a, b).tf = c;
      }
      function v(a) {
        return " " === a || "\t" === a || "\n" === a || "\r" === a;
      }
      function w() {
        return Ea < la.length ? la[Ea++] : I["(end)"];
      }
      function x(a) {
        if (a && ca.id !== a)
          throw Error("Error: expected " + a + " but got " + ca.id);
        return (ca = w());
      }
      function y(a) {
        var b = ca;
        ca = w();
        for (var d = b.tf(); a < ca.rm; ) (b = ca), (ca = w()), (d = b.uu(d));
        return d;
      }
      var B = {},
        H = c,
        M = a,
        I = {},
        z = 0,
        E,
        R;
      e("true", !0);
      e("false", !1);
      e("null", null);
      e("undefined", void 0);
      d("(end)");
      (function(a, d, c) {
        l(a, d, function(a) {
          return c(b(a), b(y(d)));
        });
      })(",", (E = ++z), function(a, b) {
        return b;
      });
      l("=", (R = ++z), function(a) {
        var d = y(R);
        if (!(a instanceof Ge))
          throw Error("Error: lhs of = must be assignable");
        d = b(d);
        if (a.se === B) M(B, a.key, d);
        else if (a.se instanceof Object) a.se[a.key] = d;
        else throw Error(a.se + "[" + a.key + "] cannot be assigned to.");
        return d;
      });
      k("&&", ++z, function(a, b) {
        return a && b;
      });
      k("||", ++z, function(a, b) {
        return a || b;
      });
      k("|", ++z, function(a, b) {
        return a | b;
      });
      k("^", ++z, function(a, b) {
        return a ^ b;
      });
      k("&", ++z, function(a, b) {
        return a & b;
      });
      k("===", ++z, function(a, b) {
        return a === b;
      });
      k("!==", z, function(a, b) {
        return a !== b;
      });
      k("==", z, function(a, b) {
        return a == b;
      });
      k("!=", z, function(a, b) {
        return a != b;
      });
      k(">", ++z, function(a, b) {
        return a > b;
      });
      k(">=", z, function(a, b) {
        return a >= b;
      });
      k("<", z, function(a, b) {
        return a < b;
      });
      k("<=", z, function(a, b) {
        return a <= b;
      });
      k("in", z, function(a, b) {
        return a in b;
      });
      k("<<", ++z, function(a, b) {
        return a << b;
      });
      k(">>", z, function(a, b) {
        return a >> b;
      });
      k(">>>", z, function(a, b) {
        return a >>> b;
      });
      k("+", ++z, function(a, b) {
        return a + b;
      });
      k("-", z, function(a, b) {
        return a - b;
      });
      k("*", ++z, function(a, b) {
        return a * b;
      });
      k("/", z, function(a, b) {
        return a / b;
      });
      k("%", z, function(a, b) {
        return a % b;
      });
      n("!", ++z, function(a) {
        return !a;
      });
      n("~", z, function(a) {
        return ~a;
      });
      n("+", z, function(a) {
        return +a;
      });
      n("-", z, function(a) {
        return -a;
      });
      n("typeof", z, function(a) {
        return typeof a;
      });
      l(".", ++z, function(a) {
        var d = ca;
        if ("(name)" !== d.id)
          throw Error("Error: '.' expects a name, not " + ca.id);
        if (a instanceof Ge) (a.se = b(a)), (a.key = d.tf().key);
        else if (a instanceof Object) a = new Ge(b(a), d.tf().key);
        else throw Error("Error: '.' must be preceded by object");
        x();
        return a;
      });
      r("(", ++z, function() {
        var a = y(0);
        x(")");
        return a;
      });
      d(")");
      l("(", ++z, function(a) {
        var d = [];
        if (")" !== ca.id)
          for (;;) {
            d.push(b(y(E + 1)));
            if ("," !== ca.id) break;
            x(",");
          }
        x(")");
        var c = null;
        a instanceof Ge && (c = a.se);
        a = b(a);
        if ("function" !== typeof a)
          throw Error("Tried to call a non-function; type was " + typeof a);
        return a.apply(c, d);
      });
      d(",");
      l("[", z, function(a) {
        var d = y(0);
        if (!(a instanceof Ge))
          throw Error("Error: '[]' must be preceded by lvalue");
        x("]");
        a.se = b(a);
        a.key = b(d);
        return a;
      });
      d("]");
      r("{", ++z, function() {
        for (var a = {}; "}" !== ca.id; ) {
          if ("(literal)" === ca.id) var d = ca.tf();
          else if ("(name)" === ca.id) d = ca.tf().key;
          else throw Error("Bad {}; expecting name or string constant");
          x();
          x(":");
          a[d] = b(y(E + 1));
          if ("," !== ca.id) break;
          ca = x(",");
        }
        x("}");
        return a;
      });
      r("[", z, function() {
        for (var a = []; "]" !== ca.id; ) {
          a.push(b(y(E + 1)));
          if ("," !== ca.id) break;
          ca = x(",");
        }
        x("]");
        return a;
      });
      d(",");
      d(":");
      d("}");
      var na = /(\d+(\.\d+)?)|(===|!==|==|!=|\+=|-=|&&|\|\||<=|>=|<<|>>>|>>|&&|\|\||[{}\(\)\[\]\+\-\.\*\/=!,\?&\|:%~<>])|([a-zA-Z\$_][\$_a-zA-Z0-9]*)|("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g,
        la = [],
        Ea = 0,
        ca;
      return {
        parse: function(a) {
          for (var b = [], d = 0; d < a.length; ) {
            for (; v(a.charAt(d)); ) d++;
            na.lastIndex = d;
            var c = na.exec(a);
            if (c && c.index === d)
              if (((d += c[0].length), c[1])) b.push(f(parseFloat(c[1])));
              else if (c[3] && c[3] in I) b.push(I[c[3]]);
              else if (c[4])
                switch (c[4]) {
                  case "true":
                  case "false":
                  case "null":
                  case "in":
                  case "typeof":
                  case "undefined":
                    b.push(I[c[4]]);
                    break;
                  default:
                    b.push(h(c[4]));
                }
              else {
                if (c[5]) {
                  c = c[5].substr(1, c[5].length - 2);
                  for (var e = "", k = !1, l = 0; l < c.length; l++) {
                    var n = c[l];
                    if (k) {
                      switch (n) {
                        case "n":
                          n = "\n";
                          break;
                        case "r":
                          n = "\r";
                          break;
                        case "t":
                          n = "\t";
                      }
                      e += n;
                      k = !1;
                    } else "\\" === n ? (k = !0) : (e += n);
                  }
                  b.push(f(e));
                }
              }
            else
              throw Error(
                "Parse error: Expected stuff in " + a + " near: " + a.substr(d)
              );
          }
          b.push(I["(end)"]);
          return b;
        },
        evaluate: function(d, e, f, h) {
          Ea = 0;
          la = e;
          B = d;
          H =
            f ||
            function(a, b) {
              return a[b];
            };
          M =
            h ||
            function(a, b, d) {
              a[b] = d;
            };
          ca = w();
          d = b(y(0));
          B = {};
          H = c;
          M = a;
          return d;
        },
      };
    })(),
    Je = Ie.parse,
    Ke = Ie.evaluate;
  function Le(c, a, b) {
    try {
      return Ke(c, Je(a), b);
    } catch (d) {
      console.log("When evaluating: %s on scope ", a, c), console.log(d);
    }
  }
  function Me(c, a) {
    if (c === a) return !0;
    if (
      !(c instanceof Object && a instanceof Object) ||
      c.constructor !== a.constructor
    )
      return !1;
    for (var b in c)
      if (
        c.hasOwnProperty(b) &&
        (!a.hasOwnProperty(b) ||
          (c[b] !== a[b] && ("object" !== typeof c[b] || !Me(c[b], a[b]))))
      )
        return !1;
    for (b in a) if (a.hasOwnProperty(b) && !c.hasOwnProperty(b)) return !1;
    return !0;
  }
  var Ne = (function() {
    function c() {
      this.If = {};
      this.Lm = !1;
      this.ao = [];
      this.timeout = 0;
    }
    c.prototype.rc = function(a, b, d) {
      a = { scope: a, parsed: Je(b), Lu: void 0, Hu: d };
      b in this.If ? this.If[b].push(a) : (this.If[b] = [a]);
      this.check();
    };
    c.prototype.HD = function(a, b) {
      if (a in this.If) {
        for (var d = this.If[a], c = 0; c < d.length; c++)
          if (d[c].Hu === b) {
            d.splice(c, 1);
            break;
          }
        0 === d.length && delete this.If[a];
      }
    };
    c.prototype.check = function(a) {
      var b = this;
      this.Lm = !0;
      a && this.ao.push(a);
      0 === this.timeout &&
        (this.timeout = setTimeout(function() {
          for (var a = 0; 10 > a && b.Lm; a++) {
            b.Lm = !1;
            for (var c in b.If)
              for (var f = null, h = void 0, k = 0; k < b.If[c].length; k++) {
                var l = b.If[c][k];
                try {
                  l.scope !== f && ((h = Ke(l.scope, l.parsed)), (f = l.scope)),
                    Me(l.Lu, h) || ((l.Lu = h), l.Hu(h), (b.Lm = !0));
                } catch (n) {
                  console.log("Error when evaluating %s: ", c, n),
                    console.log("Context was: %o", l.scope);
                }
              }
            h = b.ao;
            b.ao = [];
            for (f = 0; f < h.length; f++) (0, h[f])();
          }
          b.timeout = 0;
        }, 0));
    };
    return c;
  })();
  var Oe = A.create("Zeact"),
    Qe = (function() {
      function c(a, b, d, c, f) {
        this.Fk = a;
        this.scope = b;
        this.element = d;
        this.name = c;
        this.value = f;
      }
      c.prototype.emit = function(a, b) {
        this.Fk.ta(this.element, a, b);
      };
      c.prototype.listen = function(a, b, d) {
        if (b instanceof EventTarget && d) this.Fk.Ta(this.element, a, d, b);
        else if ("function" === typeof b) this.Fk.Ta(this.element, a, b);
        else throw Error("listen: invalid arguments.");
      };
      c.prototype.watch = function(a, b) {
        this.Fk.rc(this.scope, this.element, a, b);
      };
      c.prototype.eval = function(a) {
        return Pe.Cl(this.scope, a, this.element);
      };
      c.prototype.destructor = function(a) {
        this.Fk.xa(this.element, a);
      };
      return c;
    })(),
    Re = (function() {
      function c() {
        this.Br = new Ne();
        this.ej = {};
        this.te = {};
        this.Zb = new Ya();
        this.Iw = 1;
      }
      c.prototype.al = function(a) {
        return a;
      };
      c.prototype.Sa = function() {
        this.Zb.Sa();
      };
      c.prototype.zb = function(a, b, d) {
        void 0 === d && (d = 2);
        this.ej[a] = { name: a, link: b, bw: d };
      };
      c.prototype.Ui = function(a, b) {
        this.te[a.toUpperCase()] = b;
        "string" === typeof b.template && (b.template = b.template.trim());
      };
      c.prototype.pe = function(a, b) {
        var d = this;
        this.zb(a, function(a, c, h, k) {
          d.an(a, function() {
            d.rc(a, c, k, function(d) {
              b(c, d, a);
            });
          });
        });
      };
      c.prototype.rc = function(a, b, d, c) {
        var e = this;
        this.Br.rc(a, d, c);
        this.xa(b, function() {
          e.Br.HD(d, c);
        });
      };
      c.prototype.an = function(a, b) {
        a.hasOwnProperty("$issettled")
          ? (b(), this.digest())
          : a.hasOwnProperty("$settledWaiters")
          ? a.$settledWaiters.push(b)
          : (a.$settledWaiters = [b]);
      };
      c.prototype.WA = function(a) {
        if (
          !a.hasOwnProperty("$issettled") &&
          ((a.$issettled = !0), a.$settledWaiters)
        ) {
          for (var b = a.$settledWaiters.length - 1; 0 <= b; b--)
            a.$settledWaiters[b]();
          delete a.$settledWaiters;
          this.digest();
        }
      };
      c.prototype.Ta = function(a, b, d, c) {
        void 0 === c && (c = a);
        c.addEventListener(b, d);
        this.xa(a, function() {
          c.removeEventListener(b, d);
        });
        a === c &&
          (a.zwibblerListeners || (a.zwibblerListeners = {}),
          a.zwibblerListeners[b] || (a.zwibblerListeners[b] = []),
          a.zwibblerListeners[b].push(d));
      };
      c.prototype.ta = function(a, b, d) {
        var c = this;
        setTimeout(function() {
          c.xc(a, b, d);
        }, 0);
      };
      c.prototype.xc = function(a, b, d) {
        if (a.zwibblerListeners && b in a.zwibblerListeners)
          for (var c = 0, f = a.zwibblerListeners[b]; c < f.length; c++) {
            var h = f[c];
            try {
              h.call(a, d);
            } catch (k) {
              console.log("Error while handling event " + b + ": ", k);
            }
          }
      };
      c.prototype.xa = function(a, b) {
        a.zwibblerWatchers
          ? a.zwibblerWatchers.push(b)
          : (a.zwibblerWatchers = [b]);
      };
      c.prototype.detach = function(a) {
        for (var b = a.firstChild; b; ) this.detach(b), (b = b.nextSibling);
        if (a.zwibblerWatchers) {
          b = 0;
          for (var d = a.zwibblerWatchers; b < d.length; b++) (0, d[b])();
          delete a.zwibblerWatchers;
        }
        a.zwibblerListeners && delete a.zwibblerListeners;
        a.Ow && delete a.Ow;
        a.Jk && delete a.Jk;
        delete a.Ve;
        delete a.qg;
      };
      c.prototype.digest = function(a) {
        this.Br.check(a);
      };
      c.prototype.cz = function(a, b) {
        if ((a = /^z-([a-z0-9@\-]+)/.exec(a.toLowerCase())))
          if (((a = a[1]), a in this.ej && this.ej[a].bw === b))
            return this.ej[a];
        return null;
      };
      c.prototype.FA = function(a) {
        return (a = /^z-([a-z0-9@\-]+)/.exec(a.toLowerCase())) && this.ej[a[1]];
      };
      c.prototype.zs = function(a, b, d, c) {
        void 0 === c && (c = b);
        for (var e = b.parentNode, h = [], k = 0; k < c.attributes.length; k++)
          h.push({ name: c.attributes[k].name, value: c.attributes[k].value });
        for (k = 0; k < h.length && b.parentNode === e; k++) {
          c = h[k].name;
          var l = h[k].value,
            n = this.cz(c, d);
          if (n && n.bw === d && (c = n.link(a, b, c, l)) && c !== b)
            return { da: c, vq: !0 };
        }
        return { da: b, vq: b.parentNode !== e };
      };
      c.prototype.Wi = function(a, b, d, c) {
        b = document.createElement(b);
        for (var e in d) b.setAttribute(e, d[e]);
        c && (b.Bn = c);
        a = this.Ic(a, b);
        delete b.Bn;
        return a;
      };
      c.prototype.sx = function(a, b) {
        var d = this,
          c = this.te[b.tagName];
        if (!c) return null;
        Oe("Attaching component %s", b.tagName);
        var f = c.template;
        if (f instanceof HTMLElement) var h = f.cloneNode(!0);
        else if ("string" === typeof f)
          if ("<" === f[0]) {
            Oe("Using elementsFromString to instantiate component");
            var k = u.Go(f);
            if (0 === k.length)
              throw Error(
                "Component " + b.tagName + ": Could not interpret as HTML: " + f
              );
            if (1 < k.length)
              throw Error(
                "Component " +
                  b.tagName +
                  ": Should render as a single element, but got " +
                  k.length
              );
            h = k[0];
          } else {
            Oe("Using querySelector to instantiate component");
            h = document.querySelector(f);
            if (null === h)
              throw Error(
                "Component " +
                  b.tagName +
                  ': querySelector("' +
                  f +
                  '") returned null'
              );
            h = h.cloneNode(!0);
          }
        else
          throw Error(
            "Component " + b.tagName + ": Could not interpret template " + f
          );
        f = null !== b.parentNode;
        null !== b.parentNode && b.parentNode.replaceChild(h, b);
        var l = this,
          n = {
            $emit: function(a, b) {
              l.ta(h, a, b);
            },
            $emitNow: function(a, b) {
              l.xc(h, a, b);
            },
            $listen: function(a, b) {
              var d = this;
              l.Ta(h, a, function(a) {
                b.call(d, a);
                l.digest();
              });
            },
            $destructor: function(a) {
              l.xa(h, a);
            },
            $watch: function(a, b) {
              l.rc(n, h, a, b);
            },
          };
        if (b.Bn) {
          k = b.Bn;
          for (var r in n) k[r] = n[r];
          n = k;
        }
        this.al(n);
        Object.defineProperty(n, "$element", {
          get: function() {
            return h;
          },
        });
        Object.defineProperty(n, "$parent", {
          get: function() {
            return a;
          },
        });
        r = c.properties;
        var v = {};
        r &&
          r.forEach(function(c) {
            v[c] = 1;
            var e = b.getAttribute(c);
            e &&
              d.an(a, function() {
                Oe("Bind prop %s to %s", c, e);
                n[c] = Le(a, e);
                d.rc(a, h, e, function(a) {
                  n[c] = a;
                });
              });
          });
        h.Gw = 1;
        h.qg = n;
        (r = h.querySelector("slot")) || (r = h);
        for (k = b.firstChild; k; ) {
          var w = k.nextSibling;
          r.appendChild(k);
          k.Ve = k.Ve || a;
          k = w;
        }
        c.style && this.Zb.yp(c.style);
        for (r = 0; r < b.attributes.length; r++)
          if (
            ((w = b.attributes[r].name),
            (k = b.attributes[r].value),
            !v[w] && !this.FA(w))
          )
            if ("class" === w)
              for (w = 0, k = k.split(" "); w < k.length; w++)
                h.classList.add(k[w]);
            else {
              if ("style" === w) {
                var x = h.getAttribute("style");
                x && (k = x + ";" + k);
              }
              h.setAttribute(w, k);
            }
        Oe("apply directives from parent");
        for (r = 1; 2 >= r; r++)
          if (((k = this.zs(a, h, r, b)), f && k.vq))
            return { scope: n, node: k.da };
        Oe("apply directives from child");
        Oe("done applying");
        if (c.controller)
          try {
            c.controller(n, new Qe(this, n, h, "", "")), this.digest();
          } catch (y) {
            console.log(y),
              console.log("When running controller for %s", b.tagName);
          }
        return this.Ic(n, h);
      };
      c.prototype.Ic = function(a, b) {
        var d = this;
        b = this.Tr(b.Ve || a, b);
        this.digest(function() {
          d.WA(a);
        });
        return b;
      };
      c.prototype.Tr = function(a, b) {
        if (1 === b.nodeType) {
          if (b.Jk) return { node: b, scope: a };
          b.Jk = this.Iw++;
          b.Ve = a;
          for (var d = 0; 2 >= d; d++) {
            var c = this.zs(a, b, d);
            if (c.vq) return { node: c.da, scope: a };
            if (0 === d && (c = this.sx(a, b))) return c;
          }
          for (d = b.firstChild; d; )
            (c = d.nextSibling), d.Gw || this.Tr(d.Ve || a, d), (d = c);
        }
        return { node: b, scope: a };
      };
      return c;
    })(),
    Pe;
  (function(c) {
    function a(a, b, d) {
      var c = b.type ? b.type.toLowerCase() : "",
        e = d;
      if ("zwibblerValue" in b) var f = "zwibblerValue";
      else (f = "value"), (e = "" + e);
      if ("radio" === c) b.checked = b[f] === e;
      else if ("checkbox" === c) b.checked = !!d;
      else {
        if ("SELECT" === b.tagName) {
          c = 0;
          for (var h = b.querySelectorAll("option"); c < h.length; c++) {
            var v = h[c],
              w = v.getAttribute("z-value");
            if (w) {
              if (Le(v.Ve ? v.Ve : a, w) === d) {
                v.selected = !0;
                return;
              }
            } else if (
              ((w = v.getAttribute("value") || v.textContent || v.outerHTML),
              w === e)
            ) {
              v.selected = !0;
              return;
            }
          }
        } else b.qg && (b.qg.value = d);
        b[f] = e;
      }
    }
    function b(a, b) {
      var d = b.type ? b.type.toLowerCase() : "";
      if ("checkbox" === d)
        return "zwibblerValue" in b ? b.zwibblerValue : b.checked;
      if ("radio" === d)
        (a = b.getAttribute("name")) &&
          (a = document.querySelector('input[name="' + a + '"]:checked')) &&
          (b = a);
      else if ("SELECT" === b.tagName) {
        d = 0;
        for (var c = b.querySelectorAll("option"); d < c.length; d++) {
          var e = c[d];
          if (e.selected) {
            var f = e.getAttribute("z-value");
            if (f) return Le(e.Ve ? e.Ve : a, f);
          }
        }
      } else if (b.qg) return b.qg.value;
      return "zwibblerValue" in b ? b.zwibblerValue : b.value;
    }
    function d(a, b, d, c, l) {
      d && (a["this"] = d);
      a.$event = c;
      return Le(a, b, l);
    }
    c.ME = a;
    c.Hz = b;
    c.Cl = d;
    c.pg = function(c) {
      function e(a, b) {
        var d = a.indexOf(b);
        return -1 === d ? "" : a.substr(d + b.length + 1);
      }
      var h = new Re();
      c && (h.al = c);
      h.zb("init", function(a, b, c, e) {
        d(a, e, b);
      });
      h.pe("text", function(a, b) {
        a.textContent = b;
      });
      h.pe("json", function(a, b) {
        a.textContent = JSON.stringify(b);
      });
      h.pe("html", function(a, b) {
        a.innerHTML = b;
      });
      h.zb("model", function(d, c, e, f) {
        function k() {
          l = b(d, c);
          Oe("input -> model: New value for %s: %s", f, l);
          d.anjnwjewaq = l;
          Le(d, f + "=anjnwjewaq");
          delete d.anjnwjewaq;
          h.digest();
        }
        var l = null;
        "checkbox" === c.type || "radio" === c.type
          ? h.Ta(c, "change", k)
          : c.qg
          ? h.rc(c.qg, c, "value", k)
          : h.Ta(c, "input", k);
        h.an(d, function() {
          var b = c.getAttribute("z-value");
          b &&
            (h.rc(d, c, b, function(e) {
              Oe("z-value for %s[%s] is %s", c.tagName, b, e);
              c.zwibblerValue = e;
              a(d, c, l);
            }),
            h.xa(c, function() {
              delete c.zwibblerValue;
            }));
          h.rc(d, c, f, function(b) {
            Oe(
              "model(%s) -> %s[%s] : new value is %s",
              f,
              c.tagName,
              c.type,
              b
            );
            l = b;
            a(d, c, b);
          });
        });
        "SELECT" === c.tagName &&
          h.Ta(c, "options-changed", function() {
            setTimeout(function() {
              Oe(
                "model(%s) -> %s[%s] due to <OPTION> creation",
                f,
                c.tagName,
                c.type
              );
              a(d, c, l);
            }, 1);
          });
      });
      h.zb("on", function(a, b, c, f) {
        var k = e(c, "on");
        "" !== k &&
          h.Ta(b, k, function(c) {
            Oe("Got %s, execute %s", k, f);
            var e = d(a, f, b, c);
            h.digest();
            c && c.preventDefault && !1 === e && c.preventDefault();
          });
      });
      var k = { disabled: 1, readonly: 1 };
      h.zb(
        "bind",
        function(a, b, d, c) {
          var f = e(d, "bind").toLowerCase();
          "" !== f &&
            h.rc(a, b, c, function(a) {
              f in k
                ? a
                  ? b.setAttribute(f, "TRUE")
                  : b.removeAttribute(f)
                : b.setAttribute(f, a);
              "value" === f && "SELECT" === b.tagName && (b.value = a);
            });
        },
        1
      );
      h.zb(
        "for",
        function(a, b, d, c) {
          d = c.indexOf(" in ");
          if (-1 !== d) {
            var e = c.substr(0, d),
              f = c.substr(d + 4),
              k = [];
            Oe("z-for '%s' in '%s'", e, f);
            var l = b.parentNode,
              n = b.nextSibling;
            b.parentNode.removeChild(b);
            var r = [];
            h.rc(a, l, f, function(d) {
              if ("number" === typeof d) {
                for (var c = [], v = 0; v < d; v++) c.push(v);
                d = c;
              }
              if ("object" === typeof d && null !== d && "length" in d) {
                for (v = c = 0; v < Math.min(r.length, d.length); v++)
                  if (Me(r[v], d[v])) c += 1;
                  else break;
                r = d.concat();
                for (v = 2 * c; v < k.length; v++) {
                  var w = k[v];
                  w.parentNode && w.parentNode.removeChild(w);
                  h.detach(w);
                }
                k.length = 2 * c;
                for (v = c; v < d.length; v++)
                  (c = document.createComment(
                    "z-for " + f + "[" + v + "] = " + d[v]
                  )),
                    l.insertBefore(c, n),
                    k.push(c),
                    (c = Object.create(a)),
                    Object.defineProperty(c, "$parent", {
                      get: function() {
                        return a;
                      },
                    }),
                    (c.$index = v),
                    (c[e] = d[v]),
                    (w = b.cloneNode(!0)),
                    w.removeAttribute("z-for"),
                    l.insertBefore(w, n),
                    (c = h.Ic(c, w).node),
                    k.push(c);
                "OPTION" === b.tagName &&
                  l.dispatchEvent(
                    new CustomEvent("options-changed", { bubbles: !0 })
                  );
              }
            });
          }
        },
        0
      );
      h.zb(
        "if",
        function(a, b, d, c) {
          var e = document.createComment(d + " " + c),
            f = b.parentElement,
            k = null;
          f.replaceChild(e, b);
          h.rc(a, f, c, function(c) {
            c && !k
              ? ((k = b.cloneNode(!0)),
                k.removeAttribute(d),
                f.replaceChild(k, e),
                (k = h.Ic(a, k).node))
              : !c && k && (h.detach(k), f.replaceChild(e, k), (k = null));
          });
          h.xa(f, function() {
            k
              ? (h.detach(k), f.replaceChild(b, k))
              : e.parentNode && f.replaceChild(b, e);
          });
        },
        0
      );
      h.pe("class", function(a, b) {
        for (var d in b) u(a).ir(d, b[d]);
      });
      h.pe("style", function(a, b) {
        for (var d in b) a.style[d] = b[d];
      });
      h.pe("selected", function(a, b) {
        u(a).ir("selected", b);
      });
      h.pe("disabled", function(a, b) {
        b ? a.setAttribute("disabled", "true") : a.removeAttribute("disabled");
      });
      h.pe("enabled", function(a, b) {
        b ? a.removeAttribute("disabled") : a.setAttribute("disabled", "true");
      });
      h.pe("hide", function(a, b) {
        a.style.display = b ? "none" : "";
      });
      h.pe("checked", function(a, b) {
        a.checked = b ? !0 : !1;
      });
      h.zb("ref", function(a, b, d, c) {
        a[c] = b;
        h.xa(b, function() {
          console.log("Destructor run");
          a[c] === b && delete a[c];
        });
      });
      return h;
    };
  })(Pe || (Pe = {}));
  var Se = Pe;
  var Te = {
      fontStyle: null,
      fontWeight: "normal",
      fontSize: 12,
      fontFamily: "Times New Roman",
      colour: "black",
      align: "left",
      background: "none",
      underline: !1,
    },
    Ue = {
      fontStyle: "fs",
      fontWeight: "fw",
      fontSize: "fh",
      fontFamily: "ff",
      colour: "fc",
      align: "ta",
      background: "fb",
      underline: "fu",
    },
    Ve = (function() {
      function c(a) {
        this.sa = a;
        this.options = {};
      }
      c.prototype.DD = function() {
        var a = new c(this.sa),
          b;
        for (b in Te) Te.hasOwnProperty(b) && (a.options[b] = this.get(b));
        return a;
      };
      c.prototype.vD = function() {
        var a = {},
          b;
        for (b in this.options)
          this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
        return a;
      };
      c.prototype.apply = function(a) {
        a.fillStyle = this.get("colour");
        a.font = this.xz();
      };
      c.prototype.empty = function() {
        var a = 0,
          b;
        for (b in this.options) this.options.hasOwnProperty(b) && (a += 1);
        return 0 === a;
      };
      c.prototype.Hl = function(a, b) {
        a = c.Hl(a, b);
        return a.empty() ? this : a;
      };
      c.prototype.Gf = function(a) {
        c.Gf(this.options, a);
      };
      c.prototype.set = function(a, b) {
        this.options[a] = b;
      };
      c.prototype.get = function(a) {
        return a in this.options ? this.options[a] : this.sa[a];
      };
      c.prototype.has = function(a) {
        return a in this.options;
      };
      c.prototype.Tg = function(a) {
        for (var b in a.options) {
          var d = this.get(b),
            c = a.get(b);
          d !== c && this.set(b, c);
        }
      };
      c.prototype.clone = function() {
        var a = new c(this.sa);
        a.Tg(this);
        return a;
      };
      c.prototype.xz = function() {
        var a = this.get("fontStyle"),
          b = this.get("fontWeight"),
          d = this.get("fontSize"),
          c = this.get("fontFamily"),
          f = [];
        a && f.push(a);
        b && f.push(b);
        f.push(d + "px");
        f.push(c);
        return f.join(" ");
      };
      c.prototype.bd = function(a) {
        if (this === a) return !0;
        for (var b in this.options)
          if (!(b in a.options) || a.options[b] !== this.options[b]) return !1;
        for (b in a.options) if (!(b in this.options)) return !1;
        return !0;
      };
      c.prototype.dj = function(a) {
        var b = new c(this.sa),
          d;
        for (d in Te)
          Te.hasOwnProperty(d) &&
            a.get(d) !== this.get(d) &&
            (b.options[d] = this.get(d));
        return b;
      };
      c.prototype.toString = function() {
        var a = [],
          b;
        for (b in this.options) a.push(b + "=" + this.options[b]);
        return a.join(",");
      };
      return c;
    })();
  (function(c) {
    c.Hl = function(a, b) {
      void 0 === b && (b = "");
      var d = new c(Te);
      switch (b) {
        case "B":
          d.set("fontWeight", "bold");
          break;
        case "I":
          d.set("fontStyle", "italic");
          break;
        case "U":
          d.set("underline", !0);
      }
      for (var e in a)
        if (((b = a[e]), "textDecoration" === e))
          d.set("underline", 0 <= b.indexOf("underline"));
        else if ("" !== b)
          switch (e) {
            case "fontStyle":
            case "fontFamily":
            case "fontWeight":
            case "background":
              d.set(e, b);
              break;
            case "fontSize":
              d.set(e, parseFloat(b) || 2);
              break;
            case "textAlign":
              d.set("align", b);
              break;
            case "color":
              d.set("colour", b);
          }
      return d;
    };
    c.Gf = function(a, b) {
      for (var d in a) {
        var c = a[d];
        switch (d) {
          case "fontStyle":
          case "fontFamily":
          case "fontWeight":
          case "background":
            b[d] = c;
            break;
          case "fontSize":
            b[d] = c + "px";
            break;
          case "align":
            b.textAlign = c;
            break;
          case "colour":
            b.color = c;
            break;
          case "underline":
            b.textDecoration = c ? "underline" : "";
        }
      }
      return b;
    };
  })(Ve || (Ve = {}));
  var We = Ve;
  var Xe = (function() {
    function c() {
      this.lq = null;
      this.Em = [];
    }
    c.prototype.$q = function() {};
    c.prototype.Ho = function() {
      this.Em.push("\n");
    };
    c.prototype.tw = function(a) {
      this.lq = a = this.lq ? a.dj(this.lq) : a.DD();
      a = a.vD();
      for (var b in a)
        a.hasOwnProperty(b) && this.Em.push("/" + Ue[b] + a[b] + ";");
    };
    c.prototype.uw = function(a) {
      a = a.replace(/\//g, "//");
      this.Em.push(a);
    };
    c.prototype.toString = function() {
      return this.Em.join("");
    };
    return c;
  })();
  function Ye(c, a) {
    for (var b = 0, d = "", e = "", f = "", h = 0; h < c.length; h++) {
      var k = c.charAt(h);
      switch (b) {
        case 0:
          "/" === k ? (b = 1) : (d += k);
          break;
        case 1:
          "/" === k
            ? ((d += k), (b = 0))
            : (--h,
              d.length && (a("text", d.replace(/\/\//g, "/")), (d = "")),
              (e = ""),
              (b = 2));
          break;
        case 2:
          e += k;
          2 === e.length && ((b = 3), (f = ""));
          break;
        case 3:
          ";" === k ? (a(e, f), (b = 0)) : (f += k);
      }
    }
    d.length && a("text", d.replace(/\/\//g, "/"));
  }
  var Ze = A.create("InlineItem");
  var $e = (function(c) {
    function a(a, d) {
      a = c.call(this, a) || this;
      a.text = d;
      return a;
    }
    __extends(a, c);
    a.prototype.count = function() {
      return this.text.length;
    };
    a.prototype.split = function(b) {
      if (0 < b && b < this.text.length) {
        var d = this.text.substr(b);
        this.text = this.text.substr(0, b);
        return new a(this.style.clone(), d);
      }
      return null;
    };
    a.prototype.oj = function(a, d) {
      d = this.text.charAt(d);
      return {
        width: a ? a.measureText(d).width : 0,
        height: this.style.get("fontSize"),
        Hj: 0,
        Dx: " " === d || "-" === d,
        Eu: "\n" === d,
      };
    };
    a.prototype.Uh = function(a, d) {
      return this.text.substr(a, d);
    };
    return a;
  })(
    (function() {
      function c(a) {
        this.style = a;
        this.index = 0;
      }
      c.prototype.count = function() {
        return 1;
      };
      c.prototype.Ya = function(a) {
        Ze("Asked to set %s", a);
        this.style = this.style.clone();
        this.style.Tg(a);
        Ze("After merge: %s", this.style);
      };
      c.prototype.km = function() {};
      c.prototype.split = function() {
        return null;
      };
      c.prototype.oj = function() {
        return { width: 0, height: 0, Hj: 0, Dx: !0, Eu: !1 };
      };
      c.prototype.Uh = function() {
        return "";
      };
      return c;
    })()
  );
  var af = A.create("TEXTSEQ"),
    bf = (function() {
      function c(a) {
        this.style = a;
        this.children = [];
        this.length = this.Bh = 0;
        this.xf = null;
      }
      c.yh = function(a) {
        var b = new We(Te),
          d = new c(b),
          e = {},
          f;
        for (f in Ue) Ue.hasOwnProperty(f) && (e[Ue[f]] = f);
        Ye(a, function(a, c) {
          a in e
            ? ("fh" === a && (c = parseFloat(c)),
              "null" === c && (c = null),
              b.set(e[a], c))
            : "text" === a
            ? d.append([new $e(b.clone(), c)])
            : af("Bad key: %s", a);
        });
        return d;
      };
      c.prototype.save = function(a, b, d) {
        var c = !1;
        this.pu(a, b, function(a, b, e) {
          d.tw(a.style);
          a = a.Uh(b, e);
          b = 0;
          for (e = a.split("\n"); b < e.length; b++) {
            var f = e[b];
            if ("" === f) {
              if ((c || d.$q(), d.Ho(), (c = !1), "\n" === a)) break;
            } else c || (d.$q(), (c = !0)), d.uw(f);
          }
        });
        c && d.Ho();
        return d;
      };
      c.prototype.append = function(a) {
        this.km(this.Bh, a);
      };
      c.prototype.km = function(a, b) {
        af("Insert %s item at index %s", b.length, a);
        var d,
          c = 0;
        for (d = 0; d < this.children.length; d++) {
          var f = this.children[d];
          var h = f.count();
          if (c === a) {
            af("Found proper position");
            break;
          } else if (c + h > a) {
            af("Splitting item from %s..(%s)..%s", f.index, a, f.index + h);
            this.Vk(d, a - c);
            c = a;
            d += 1;
            break;
          }
          c += h;
        }
        for (
          this.children.splice.apply(this.children, [d, 0].concat(b));
          d < this.children.length;
          d++
        )
          (f = this.children[d]),
            (h = f.count()),
            af("Bump item %s index %s->%s length=%s", d, f.index, c, h),
            (f.index = c),
            (c += h),
            af("   item %s: %s/%s", d, f.index, f.count());
        this.Bh = c;
        this.length = this.children.length;
        this.xf = null;
      };
      c.prototype.remove = function(a, b) {
        var d = [];
        if (0 === this.children.length) return d;
        this.hs(a);
        this.hs(a + b);
        for (
          var c = this.rj(a), f, h = c.item.index, k = c.index;
          k < this.children.length;
          k++
        ) {
          var l = this.children[k];
          f = l.count();
          h + f <= a + b ? d.push(l) : (l.index = h - b);
          h += f;
        }
        this.children.splice(c.index, d.length);
        this.length -= d.length;
        this.Bh -= b;
        this.xf = null;
        return d;
      };
      c.prototype.count = function() {
        return this.Bh;
      };
      c.prototype.rj = function(a) {
        for (var b = 0, d = 0; d < this.children.length; d++)
          if (((b += this.children[d].count()), b > a))
            return { index: d, item: this.children[d] };
        if (this.children.length)
          return {
            index: this.children.length - 1,
            item: this.children[this.children.length - 1],
          };
        throw Error("getItemAt() on empty sequence.");
      };
      c.prototype.Vk = function(a, b) {
        var d = this.children[a];
        if ((b = d.split(b)))
          (b.index = d.index + d.count()),
            this.children.splice(a + 1, 0, b),
            (this.length += 1),
            af("Split %s..%s..%s", d.index, b.index, b.index + b.count());
        return b;
      };
      c.prototype.hs = function(a) {
        var b = this.rj(a);
        b && b.item.index < a && this.Vk(b.index, a - b.item.index);
      };
      c.prototype.Yl = function(a) {
        return 0 === this.length ? this.style : this.rj(a).item.style;
      };
      c.prototype.Qt = function(a, b) {
        var d = [],
          c = 0,
          f = 0,
          h = null,
          k = 0;
        if (0 === b)
          return d.push({ start: a, length: 0, style: this.Yl(a) }), d;
        for (var l = 0; l < this.children.length; l++) {
          var n = this.children[l];
          var r = n.count();
          k += r;
          if (k > a) {
            null === h && ((h = n.style), (c = n.index));
            var v = n.style.bd(h);
            v && (f += r);
            if (!v || k >= b)
              d.push({ start: c, length: f, style: h }), (c = n.index), (f = 0);
            if (k >= a + b) break;
          }
        }
        return d;
      };
      c.prototype.XC = function(a) {
        for (var b = 0; b < a.length; b++) {
          var d = a[b];
          this.Ya(d.style, d.start, d.length);
        }
      };
      c.prototype.Ya = function(a, b, d) {
        var c = 0,
          f = b + d;
        af("setStyle: %s:%s %s", b, d, a);
        for (d = 0; d < this.children.length; d++) {
          var h = this.children[d],
            k = h.count();
          c < b && b < c + k
            ? this.Vk(d, b - c)
              ? (k = b - c)
              : (h.Ya(a), af("Case 1"))
            : b <= c && f < c + k && f > c
            ? (this.Vk(d, f - c), (k = f - c), h.Ya(a), af("Case 2"))
            : b <= c &&
              c + k <= f &&
              (h.Ya(a),
              af("Case 3: fromChar=%s..%s count=%s..%s", b, f, c, c + k));
          c += k;
        }
      };
      c.prototype.uC = function(a, b, d) {
        for (var c = b; ; ) {
          b = this.oj(null, a);
          if (d(b)) {
            a += 1;
            break;
          } else if (0 === a) break;
          --a;
        }
        for (;;) {
          b = this.oj(null, c);
          if (d(b)) break;
          else if (c >= this.Bh - 1) break;
          c += 1;
        }
        return { start: a, length: c - a };
      };
      c.prototype.jA = function(a, b) {
        return this.uC(a, b, function(a) {
          return a.Eu;
        });
      };
      c.prototype.oj = function(a, b) {
        if (0 === this.length)
          throw Error("error: expected to have child items");
        if (
          null === this.xf ||
          b < this.xf.index ||
          b >= this.xf.index + this.xf.count()
        )
          this.xf = this.rj(b).item;
        return this.xf.oj(a, b - this.xf.index);
      };
      c.prototype.Uh = function(a, b) {
        var d = "";
        this.pu(a, b, function(a, b, c) {
          console.log("Iterate: ", a, b, c);
          d += a.Uh(b, c);
        });
        return d;
      };
      c.prototype.pu = function(a, b, d) {
        var c = a + b;
        if (0 !== b) {
          var f = this.rj(a);
          if (f)
            for (b = f.item, f = f.index; a < c; ) {
              var h = Math.min(b.count(), c - a);
              d(b, a - b.index, h);
              a += h;
              f += 1;
              if (f === this.children.length) break;
              b = this.children[f];
            }
        }
      };
      return c;
    })();
  var cf = A.create("SpliceText"),
    df = (function(c) {
      function a(a, d, e, f, h) {
        var b = c.call(this) || this;
        b.mc = a;
        b.text = d;
        b.start = e;
        b.length = f;
        b.style = h;
        b.uf = [];
        return b;
      }
      __extends(a, c);
      a.prototype.Tg = function(b) {
        if (!(b instanceof a)) return !1;
        cf(
          "?merge(%s,%s,%s) and (%s,%s,%s)",
          this.start,
          this.length,
          this.text.substr(0, 5),
          b.start,
          b.length,
          b.text.substr(0, 5)
        );
        return 0 === this.length &&
          0 === b.length &&
          this.start + this.text.length === b.start &&
          ((null === this.style && null === b.style) ||
            (null != this.style && null !== b.style && this.style.bd(b.style)))
          ? ((this.text += b.text), cf("Merging SpliceTextAction"), !0)
          : 0 !== this.text.length ||
            0 !== b.text.length ||
            (this.start !== b.start && b.start + b.length !== this.start)
          ? !1
          : ((this.length += b.length),
            this.start < b.start
              ? (this.uf = this.uf.concat(b.uf))
              : ((this.uf = b.uf.concat(this.uf)), (this.start = b.start)),
            cf("Merging Deletes"),
            !0);
      };
      a.prototype.Qc = function() {
        cf(
          "Execute SpliceTextAction(del=%s/%s insert %s...)",
          this.start,
          this.length,
          this.text.substr(0, 5)
        );
        this.mc.Nj(this.start);
        0 < this.length &&
          (cf("Removing text"),
          (this.uf = this.mc.text.remove(this.start, this.length)));
        if (0 < this.text.length) {
          if (null === this.style) throw Error("style is null");
          var a = new $e(this.style, this.text);
          this.mc.text.km(this.start, [a]);
        }
      };
      a.prototype.Uc = function() {
        cf(
          "Undo SpliceTextAction(del=%s/%s insert %s)",
          this.start,
          this.length,
          this.text
        );
        0 < this.text.length &&
          this.mc.text.remove(this.start, this.text.length);
        this.uf.length && this.mc.text.km(this.start, this.uf);
        this.mc.Nj(this.start);
      };
      return a;
    })(hb);
  var ef = A.create("UNDO"),
    ff = (function(c) {
      function a(a, d, e, f) {
        var b = c.call(this) || this;
        b.mc = a;
        b.from = d;
        b.length = e;
        b.style = f;
        b.Xp = [];
        return b;
      }
      __extends(a, c);
      a.prototype.Qc = function() {
        ef("Do apply style");
        this.mc.Nj(this.from);
        this.Xp = this.mc.text.Qt(this.from, this.length);
        this.mc.text.Ya(this.style, this.from, this.length);
      };
      a.prototype.Uc = function() {
        ef("Undo apply style");
        console.log(this.Xp);
        this.mc.Nj(this.from);
        this.mc.text.XC(this.Xp);
      };
      a.prototype.Tg = function() {
        return !1;
      };
      return a;
    })(hb);
  var gf = A.create("TextEditor"),
    hf = (function(c) {
      function a(a, d) {
        var b = c.call(this) || this;
        b.ld = a;
        b.sa = d;
        b.Li = 0;
        b.Fh = 0;
        b.Of = null;
        b.il = 0;
        b.active = !1;
        b.text = new bf(d);
        return b;
      }
      __extends(a, c);
      a.prototype.setActive = function(a) {
        this.active = a;
        gf("setActive: %s", this.active);
      };
      a.prototype.xj = function() {
        return Math.min(this.Li, this.Fh);
      };
      a.prototype.wj = function() {
        return Math.max(this.Li, this.Fh);
      };
      a.prototype.save = function(a, d) {
        void 0 === a && (a = 0);
        void 0 === d && (d = this.text.length);
        return this.text.save(a, d, new Xe()).toString();
      };
      a.prototype.Lt = function() {
        return this.text.count();
      };
      a.prototype.gd = function(a, d) {
        void 0 === d && (d = a);
        this.Fh = a;
        this.Li = d;
        this.Fg("selchange");
      };
      a.prototype.qb = function() {
        this.gd(0, 0);
      };
      a.prototype.exec = function(a, d) {
        var b = this.Fh;
        switch (a) {
          case "bold":
            this.mn("fontWeight", "bold", "normal");
            return;
          case "italic":
            this.mn("fontStyle", "italic", "normal");
            return;
          case "underline":
            this.mn("underline", !0, !1);
            return;
          case "orange":
            this.mn("background", "orange", "transparent");
            return;
          case "undo":
            gf("Processing undo");
            this.ld.Uc(this);
            this.gd(b);
            return;
          case "redo":
            gf("Processing redo");
            this.ld.ne(this);
            this.gd(b);
            return;
          case "font":
            this.bl("fontFamily", d);
            return;
          case "fontSize":
            "string" === typeof d && (d = parseFloat(d) || 2);
            this.bl("fontSize", d);
            return;
          case "align":
            this.bl("align", d);
            break;
          case "delete":
            gf("Delete text");
            this.sq(!1);
            return;
          case "backspace":
            gf("Delete text backspace");
            this.sq(!0);
            return;
          case "select-none":
            this.gd(b, b);
            return;
          case "select-all":
            this.gd(0, this.Lt());
            return;
        }
        this.fg();
      };
      a.prototype.mn = function(a, d, c) {
        var b = this.xj();
        b = this.text.Qt(b, this.wj() - b);
        for (
          var e, k = 0;
          k < b.length && ((e = b[k].style), e.get(a) === d);
          k++
        );
        this.bl(a, k < b.length ? d : c);
      };
      a.prototype.ju = function(a) {
        var b = this.xj(),
          c = this.wj() - b;
        a = a.replace("\r", "\n");
        gf("Delete %s/%s Insert char %s...", b, c, a.substr(0, 5));
        if (this.Of && this.il === b && 0 === c) {
          var f = this.Of;
          gf("Using recording caret style: %s", f);
        } else f = 0 === c && 0 < b ? this.text.Yl(b - 1) : this.text.Yl(b);
        this.ld.wa(new df(this, a, b, c, f), !1, this);
        this.gd(b + a.length, b + a.length);
        this.Of = null;
      };
      a.prototype.bl = function(a, d) {
        if ("string" === typeof a) {
          var b = new We(Te);
          b.set(a, d || "");
        } else b = a;
        if (b.empty()) gf("apply empty style; ignore");
        else {
          a = this.xj();
          d = this.wj();
          var c = [];
          if (b.has("align")) {
            var h = new We(Te);
            h.set("align", b.get("align"));
            var k = this.text.jA(a, d);
            0 < k.length &&
              (gf(
                "Apply paragraph style to %s:%s %s",
                k.start,
                k.start + k.length,
                b
              ),
              c.push(new ff(this, k.start, k.length, h)));
          }
          gf("applystyle called set %s:%s %s", a, d, b);
          a !== d
            ? c.push(new ff(this, a, d - a, b))
            : ((this.Of =
                null === this.Of || this.il !== a
                  ? this.text.Yl(a).clone()
                  : this.Of.clone()),
              this.Of.Tg(b),
              (this.il = a),
              gf("Recording new caret style: %s", this.Of));
          this.ld.wa(c, !1, this);
        }
      };
      a.prototype.sq = function(a) {
        var b = this.xj(),
          c = this.wj() - b;
        gf("Delete %s characters (totalCount=%s)", c, this.text.count());
        c
          ? (this.ld.wa(new df(this, "", b, c, null), !1, this), this.gd(b))
          : a && 0 < b
          ? (this.ld.wa(new df(this, "", b - 1, 1, null), !1, this),
            this.gd(b - 1))
          : b < this.text.count() &&
            this.ld.wa(new df(this, "", b, 1, null), !1, this);
        this.il = -1;
      };
      a.prototype.oA = function() {
        var a = this.xj(),
          d = this.wj() - a;
        gf("getSelectedText()=%s", this.text.Uh(a, d));
        return this.text.Uh(a, d);
      };
      a.prototype.Yj = function(a) {
        var b = this;
        if (this.active)
          switch ((gf("Received clipboard event: %s", a.type), a.type)) {
            case "copy":
            case "cut":
              gf("Cut/Copy to system clipboard.");
              var c = this.oA();
              gf("text=%s", c);
              c.length &&
                (a.clipboardData.setData("text/plain", c),
                a.preventDefault(),
                "cut" === a.type && this.sq(!1));
              break;
            case "paste":
              for (
                gf(
                  "There are %s items on the clipboard",
                  a.clipboardData.items.length
                ),
                  c = 0;
                c < a.clipboardData.items.length;
                c++
              ) {
                var f = a.clipboardData.items[c];
                gf("Item [%s] type is %s", c, f.type);
                "text/plain" === f.type &&
                  f.getAsString(function(a) {
                    b.ju(a);
                  });
              }
          }
      };
      a.prototype.Nj = function() {};
      a.prototype.fg = function() {};
      return a;
    })(sb);
  var jf = A.create("HTMLTextEditor"),
    of = (function(c) {
      function a(a, d, e) {
        void 0 === e && (e = {});
        var b =
          c.call(
            this,
            new ib(),
            new We(Te).Hl(window.getComputedStyle(d), d.tagName)
          ) || this;
        b.da = d;
        b.options = e;
        b.dd = new tb();
        b.bD(a);
        a.addEventListener(document, "selectionchange", function() {
          b.yB();
        });
        a.addEventListener(document, "cut", function(a) {
          b.Yj(a);
        });
        a.addEventListener(document, "copy", function(a) {
          b.Yj(a);
        });
        a.addEventListener(document, "paste", function(a) {
          b.Yj(a);
        });
        kf(b.text, d, b.sa);
        b.fg();
        b.pa("reformat", function() {
          b.fg();
        });
        return b;
      }
      __extends(a, c);
      a.prototype.Pv = function(a) {
        this.da.innerHTML = a;
        this.text = new bf(this.sa);
        kf(this.text, this.da, this.sa);
        u(this.da).clear();
        a = this.text;
        var b = this.da,
          c = this.sa;
        a.save(0, a.count(), new lf(b, c));
        this.gd(0, 0);
      };
      a.prototype.bD = function(a) {
        var b = this;
        this.dd.map("ctrl+b,cmd+b", "bold");
        this.dd.map("ctrl+i,cmd+i", "italic");
        this.dd.map("ctrl+u,cmd+u", "underline");
        this.dd.map("ctrl+z,cmd+z", "undo");
        this.dd.map("ctrl+shift+z,cmd+shift+z", "redo");
        this.dd.map("delete", "delete");
        this.dd.map("backspace", "backspace");
        this.dd.pa("*", function(a, d) {
          jf("Keyboard event: ", a);
          d.preventDefault();
          d.stopPropagation();
          b.exec(a);
        });
        this.dd.Es(this.da);
        a.add(function() {
          b.dd.detach(b.da);
        });
        a.addEventListener(this.da, "keypress", function(a) {
          var d = a.charCode;
          13 === d && b.options.Rq && !a.shiftKey
            ? b.ta("enter")
            : (b.ju(String.fromCharCode(d)), a.preventDefault(), b.fg());
        });
      };
      a.prototype.setActive = function(a) {
        c.prototype.setActive.call(this, a);
        a
          ? (this.da.setAttribute("contenteditable", "TRUE"), this.da.focus())
          : (this.da.setAttribute("contenteditable", "FALSE"), this.da.blur());
      };
      a.prototype.yB = function() {
        if (this.active) {
          var a = document.getSelection();
          if (null === a) this.qb();
          else if (null === a.focusNode || null === a.anchorNode) this.qb();
          else if (a.anchorNode === this.da)
            jf("Select-all %s..%s", 0, this.text.length),
              c.prototype.gd.call(this, 0, this.text.count());
          else {
            var d = mf(this.da, a.anchorNode, a.anchorOffset);
            a = mf(this.da, a.focusNode, a.focusOffset);
            -1 !== d &&
              -1 !== a &&
              (0 === this.text.count() && (a = d = 0),
              a !== this.Fh || d !== this.Li) &&
              (c.prototype.gd.call(this, a, d), jf("Selected %s..%s", d, a));
          }
        }
      };
      a.prototype.gd = function(a, d) {
        void 0 === d && (d = a);
        jf("self-set caret position: %s..%s", d, a);
        c.prototype.gd.call(this, a, d);
        var b = nf(this.da, a),
          f = nf(this.da, d),
          h = document.createRange();
        d <= a
          ? (h.setStart(f.node, f.offset), h.setEnd(b.node, b.offset))
          : (h.setStart(b.node, b.offset), h.setEnd(f.node, f.offset));
        if ((a = window.getSelection())) a.removeAllRanges(), a.addRange(h);
      };
      a.prototype.Nj = function(a) {
        jf("Mark for reformat: %s", a);
        this.Fg("reformat");
      };
      a.prototype.fg = function() {
        u(this.da).clear();
        var a = this.text,
          d = this.da,
          c = this.sa;
        a.save(0, a.count(), new lf(d, c));
        this.options.placeholder &&
          0 === this.text.count() &&
          ((a = u("div")
            .Ya({ opacity: "0.5" })
            .jg(this.options.placeholder)
            .Pd(this.da).da),
          this.sa.Gf(a.style));
        this.gd(this.Fh, this.Li);
      };
      a.prototype.exec = function(a, d) {
        c.prototype.exec.call(this, a, d);
        this.fg();
      };
      return a;
    })(hf);
  function mf(c, a, b) {
    function d(c) {
      if (c.nodeType === Node.ELEMENT_NODE) {
        var k = c.getAttribute("t-off");
        k && (e = parseFloat(k));
        if (c === a)
          return (
            c instanceof Element &&
              c.children[0] &&
              "BR" === c.children[0].tagName &&
              1 === b &&
              --e,
            (h = !0)
          );
        "DIV" === c.tagName && (f = !0);
        for (c = c.firstChild; c && !d(c); ) c = c.nextSibling;
        return !!c;
      }
      if (c.nodeType === Node.TEXT_NODE) {
        if (c === a) return (h = !0);
        c = pf(c.nodeValue, f);
        e += c.length;
        c.length && (f = !1);
      }
      return !1;
    }
    var e = 0,
      f = !0,
      h = !1;
    for (c = c.firstChild; c && !d(c); ) c = c.nextSibling;
    return h ? e + b : -1;
  }
  function nf(c, a) {
    function b(c) {
      d = c;
      f = 0;
      if (c.nodeType === Node.ELEMENT_NODE) {
        var k = c.getAttribute("t-off");
        k && (e = parseFloat(k));
        "DIV" === c.tagName && (h = !0);
        for (c = c.firstChild; c && !b(c); ) c = c.nextSibling;
        return !!c;
      }
      if (c.nodeType === Node.TEXT_NODE) {
        c = pf(c.nodeValue, h);
        if (e + c.length >= a) return (f = a - e), !0;
        e += c.length;
        c.length && (h = !1);
      }
      return !1;
    }
    var d = c,
      e = 0,
      f = 0,
      h = !0;
    for (c = c.firstChild; c && !b(c); ) c = c.nextSibling;
    return { node: d, offset: f };
  }
  function pf(c, a) {
    for (var b = "", d = 0; d < c.length; d++) {
      var e = c[d];
      switch (e) {
        case " ":
        case "\n":
        case "\r":
        case "\t":
          a || ((b += " "), (a = !0));
          break;
        default:
          (b += e), (a = !1);
      }
    }
    return b;
  }
  function kf(c, a, b) {
    function d(a, b) {
      if (a.nodeType === Node.ELEMENT_NODE) {
        switch (a.tagName) {
          case "DIV":
          case "P":
            l || (f += "\n"), (l = !1);
        }
        "DIV" === a.tagName && (n = !0);
        a instanceof HTMLElement && (b = b.Hl(a.style, a.tagName));
        for (a = a.firstChild; a; ) d(a, b), (a = a.nextSibling);
      } else
        a.nodeType === Node.TEXT_NODE &&
          (h.bd(b) || (e(h), (h = b)),
          (b = pf(a.nodeValue, n)),
          (f += b),
          b.length && (n = !1));
    }
    function e(a) {
      f.length && (k.push(new $e(a, f)), (f = ""));
    }
    var f = "",
      h = b,
      k = [],
      l = !0,
      n = !0;
    for (a = a.firstChild; a; ) d(a, b), (a = a.nextSibling);
    e(h);
    k.length && c.append(k);
  }
  var lf = (function() {
    function c(a, b) {
      this.root = a;
      this.Rj = this.Xs = b;
      this.span = this.va = null;
      this.offset = 0;
      this.style = b;
    }
    c.prototype.tw = function(a) {
      jf("writeStyle(" + a.toString());
      this.Rj = a;
    };
    c.prototype.$q = function() {
      jf("startLine");
      this.va = document.createElement("DIV");
      this.root.appendChild(this.va);
      this.va.setAttribute("t-off", this.offset.toString());
      this.va.style.whiteSpace = "pre-wrap";
      this.style = this.Xs;
      this.va.style.fontSize = this.Rj.get("fontSize") + "px";
    };
    c.prototype.Ho = function() {
      jf("endLine");
      if (!this.va) throw Error("Expected div to exist");
      null === this.va.firstChild &&
        this.va.appendChild(document.createElement("BR"));
      this.span = this.va = null;
      this.offset += 1;
    };
    c.prototype.uw = function(a) {
      jf("writeText(" + a + ")");
      if (!this.va) throw Error("Expected div to exist");
      (null !== this.span && this.style.bd(this.Rj)) ||
        ((this.span = document.createElement("SPAN")),
        this.va.appendChild(this.span),
        this.Rj.Gf(this.span.style),
        (this.style = this.Rj));
      this.span.appendChild(document.createTextNode(a));
      this.offset += a.length;
    };
    return c;
  })();
  function qf(c, a, b, d) {
    c.fillStyle = q.Xc;
    c.fillRect(a, b, d, d);
    c.beginPath();
    c.strokeStyle = q.Oa;
    c.moveTo(a, b);
    c.lineTo(a + d, b + d);
    c.moveTo(a + d, b);
    c.lineTo(a, b + d);
    c.stroke();
  }
  function rf(c, a, b, d) {
    for (var e, f = 0; f < d; f += 5) {
      e = 0 === (f / 5) % 2;
      for (var h = 0; h < d; h += 5)
        (c.fillStyle = e ? q.Oa : q.Xc),
          (e = !e),
          c.fillRect(a + h, b + f, 5, 5);
    }
    e = c.createLinearGradient(a + d, b + d, a, b);
    e.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    e.addColorStop(1, "rgba(255, 255, 255, 0.0)");
    c.fillStyle = e;
    c.fillRect(a, b, d, d);
  }
  function sf(c) {
    for (var a = [], b = [], d = [], e = 0, f = 0; 360 > f; f++) {
      var h = new q(q.vh, [f, 1, 1, 1]);
      a.push(h);
      0 < f && ((h = a[f - 1].By(h)), b.push(h), (e += h));
    }
    e /= c;
    f = 0;
    d.push(a[0]);
    for (h = 1; h < a.length; h++) {
      var k = b[h - 1];
      f + k >= e && ((f -= e), d.push(a[h]));
      f += k;
    }
    d.length = c;
    return d;
  }
  function tf(c, a, b) {
    function d(a, b, d) {
      return u("div", { "zwibbler-color": d })
        .Ya({ width: b + "px", height: b + "px", display: "inline-block" })
        .Pd(a);
    }
    function e(a, b, c) {
      var e = document.createElement("canvas");
      e.width = a;
      e.height = a;
      b(e.getContext("2d"), 0, 0, a);
      a = d(f, a, c);
      a.da.style.backgroundImage = "url(" + e.toDataURL() + ")";
      a.da.style.backgroundPosition = "center";
      return a;
    }
    void 0 === b && (b = {});
    var f = u.nc(c),
      h = b.columns || 16;
    c = b.rows || h;
    if (f) {
      var k = new ne(f, { ND: !1 });
      f.addEventListener("contextmenu", function(a) {
        a.preventDefault();
      });
      k.pa("tap hold", function(a) {
        var d = "hold" === a.type || 1 < a.buttons;
        if (a.target instanceof HTMLElement) {
          var c = a.target.getAttribute("zwibbler-color") || "";
          if ("opacity-50" === c) b.onOpacity(0.5, !d);
          else if (c) b.onColour(c, !d);
          a.preventDefault();
        }
      });
      e(a, qf, "transparent");
      e(a, rf, "opacity-50");
      for (k = 0; 1 >= k; k += 1 / (h - 3)) {
        var l = new q(q.vh, [0, 0, Math.pow(k, 1 / 2.2), 1]).toString();
        d(f, a, l).Ya({ backgroundColor: l });
      }
      h = sf(h);
      for (k = 1; k > 1 / (c - 1); k -= 1 / c) {
        l = 0;
        for (var n = h; l < n.length; l++) {
          var r = n[l];
          r.values[1] = 1;
          r.values[2] = Math.pow(k, 1 / 2.2);
          d(f, a, r.toString()).Ya({ backgroundColor: r });
        }
      }
    }
  }
  (function() {
    function c(a, b) {
      var d = this;
      this.Im = null;
      var c = document.createElement("div");
      c.style.width = "320px";
      c.style.lineHeight = "0";
      c.style.position = "absolute";
      b.appendChild(c);
      tf(c, 20, {
        onColour: function(a, b) {
          d.Im && d.Im.resolve({ type: "colour", value: a, fill: b });
        },
      });
      this.Ao = yd(c);
      a.add(function() {
        d.Ao && d.Ao.destroy();
      });
    }
    c.prototype.show = function(a, b) {
      this.Im = new $b();
      this.Ao.show(a, b, !0);
      return this.Im;
    };
    return c;
  })();
  var uf = new ((function() {
    function c() {
      this.Lo = {};
    }
    c.prototype.cl = function() {
      if ("localStorage" in window)
        try {
          var a = window.localStorage;
        } catch (b) {}
      return void 0 !== a;
    };
    c.prototype.setItem = function(a, b) {
      this.cl() ? window.localStorage.setItem(a, b) : (this.Lo[a] = "" + b);
    };
    c.prototype.getItem = function(a) {
      return this.cl() ? window.localStorage.getItem(a) : this.Lo[a];
    };
    c.prototype.removeItem = function(a) {
      this.cl() ? window.localStorage.removeItem(a) : delete this.Lo[a];
    };
    return c;
  })())();
  var wf = (function() {
      function c(a, b, d, c) {
        this.x = a;
        this.y = b;
        this.width = d;
        this.height = c;
        this.Sc = [];
        this.fonts = {};
        this.images = [];
        this.pn = {};
        this.pc = 1;
        this.$x = !0;
        this.page = {};
        this.log = A.create("PdfWriter");
        this.Zj = this.object("Pages", { Kids: [], Count: 0 });
        this.Lx = this.object("Catalog", { Pages: this.Zj._id + " 0 R" });
        this.xi();
      }
      c.prototype.HA = function() {
        if (null !== c.Qn) return c.Qn;
        var a = document.createElement("canvas"),
          b = !1;
        a.width = 10;
        a.height = 10;
        "toDataURL" in a && (b = 0 < a.toDataURL("image/jpeg").indexOf("jpeg"));
        c.Qn = b;
        this.log("JPEG supported: %s", b);
        return b;
      };
      c.prototype.xi = function(a, b, d, c) {
        void 0 === a && (a = this.x);
        void 0 === b && (b = this.y);
        void 0 === d && (d = this.width);
        void 0 === c && (c = this.height);
        this.log("StartPage MediaBox=[%s %s %s %s]", a, b, d, c);
        this.page = this.object("Page", {
          MediaBox: [a, b, a + d, b + c],
          Parent: this.Zj._id + " 0 R",
        });
        this.Zj.Kids.push(this.page._id + " 0 R");
        this.Zj.Count += 1;
        this.pn = {};
      };
      c.prototype.object = function(a, b) {
        var d = this.Sc.length + 1;
        a && (b.Type = a);
        b._id = d;
        this.Sc.push(b);
        return b;
      };
      c.prototype.mx = function(a) {
        this.page.Contents = a._id + " 0 R";
      };
      c.prototype.stream = function(a) {
        if (this.$x) {
          var b = Gb.pg("LZWEncoder");
          b.sw(a);
          b.flush();
          a = b.Oh().toString();
          a = this.object(null, {
            _stream: a,
            Filter: "[/LZWDecode]",
            DecodeParms: "[ << /EarlyChange 0 >> ]",
          });
        } else a = this.object(null, { _stream: a });
        return a;
      };
      c.prototype.OD = function(a) {
        if (!(a in this.fonts)) {
          var b = "F" + this.pc;
          this.pc += 1;
          var d = "/" + a.replace(/ /g, "");
          b = this.object("Font", {
            _name: b,
            BaseFont: d,
            Encoding: "/StandardEncoding",
            Subtype: "/Type1",
          });
          this.fonts[a] = b;
        }
        this.Kk("Font", this.fonts[a]);
        return "/" + this.fonts[a]._name;
      };
      c.prototype.ow = function(a, b) {
        var d = "" + a + "-" + b;
        if (!(d in this.pn)) {
          var c = "gs" + this.pc;
          this.pc += 1;
          var f = this.object("ExtGState", { _name: c });
          b ? (f.ca = this.Xd(a)) : (f.CA = this.Xd(a));
          this.pn[d] = c;
          this.Kk("ExtGState", f);
        }
        return this.pn[d];
      };
      c.prototype.Kk = function(a, b) {
        "Resources" in this.page || (this.page.Resources = {});
        a in this.page.Resources || (this.page.Resources[a] = {});
        this.page.Resources[a][b._name] = b._id + " 0 R";
      };
      c.prototype.Pn = function(a, b) {
        void 0 === b && (b = "");
        for (var d = 0; d < this.images.length; d++)
          if (this.images[d].Cj === a && b === this.images[d].eu)
            return this.images[d].Wj;
        return null;
      };
      c.prototype.vn = function(a, b) {
        var d,
          c = this.Pn(a);
        if (!c) {
          var f = "I" + this.pc;
          this.pc += 1;
          b instanceof HTMLCanvasElement
            ? (c = b)
            : ((c = document.createElement("canvas")),
              (c.width = b.width),
              (c.height = b.height),
              c.getContext("2d").drawImage(b, 0, 0));
          b = c.getContext("2d").getImageData(0, 0, c.width, c.height);
          var h = !1;
          if (this.HA()) {
            this.log("Using JPEG encoding");
            var k = "[/DCTDecode]";
            var l = Gb.pg("");
            for (d = 0; d < b.data.length; d += 4) h = h || 255 > b.data[d + 3];
            d = c.toDataURL("image/jpeg");
            var n = atob(d.split(",")[1]);
            for (d = 0; d < n.length; d++) l.Eb(n.charCodeAt(d));
          } else {
            this.log("Using LZW encoding");
            k = "[/LZWDecode]";
            l = Gb.pg("LZWEncoder");
            for (d = 0; d < b.data.length; d += 4)
              l.Eb(b.data[d]),
                l.Eb(b.data[d + 1]),
                l.Eb(b.data[d + 2]),
                (h = h || 255 > b.data[d + 3]);
            var r = "[ <</EarlyChange 0 >> ]";
          }
          l.flush();
          l = l.Oh().toString();
          f = this.object("XObject", {
            Subtype: "/Image",
            Width: c.width,
            Height: c.height,
            ColorSpace: "/DeviceRGB",
            BitsPerComponent: 8,
            Length: l.length,
            Interpolate: "true",
            Filter: k,
            _name: f,
            _stream: l,
          });
          r && (f.DecodeParms = r);
          if (h) {
            l = Gb.pg("LZWEncoder");
            for (d = 0; d < b.data.length; d += 4) l.Eb(b.data[d + 3]);
            l.flush();
            l = l.Oh().toString();
            r = this.object("XObject", {
              Subtype: "/Image",
              Width: c.width,
              Height: c.height,
              ColorSpace: "/DeviceGray",
              BitsPerComponent: 8,
              Length: l.length,
              Filter: "[/LZWDecode]",
              DecodeParms: "[ << /EarlyChange 0 >> ]",
              _stream: l,
            });
            f.SMask = r._id + " 0 R";
          }
          this.images.push({ Cj: a, eu: "", Wj: f });
          c = f;
        }
        this.Kk("XObject", c);
        return "/" + c._name;
      };
      c.prototype.wn = function(a, b) {
        var d = vf(a.Qa),
          c = this.Pn(d, b.toString());
        if (!c) {
          c = "P" + this.pc;
          this.pc += 1;
          this.vn(d, a.Qa);
          d = this.Pn(d);
          var f = new J(a.Qa.width, 0, 0, -a.Qa.height, 0, a.Qa.height);
          f = b.multiply(f);
          var h = "1",
            k = "1",
            l = b.Gb();
          l = Math.max(l.x, l.y);
          if ("no-repeat" === a.repeat || "repeat-y" === a.repeat)
            h = "" + Math.ceil(this.width / a.Qa.width / l);
          if ("no-repeat" === a.repeat || "repeat-x" === a.repeat)
            k = "" + Math.ceil(this.height / a.Qa.height / l);
          c = this.object("Pattern", {
            _name: c,
            PatternType: "1",
            PaintType: "1",
            TilingType: "2",
            BBox: "[0 0 1 1]",
            XStep: h,
            YStep: k,
            Matrix:
              "[ " + this.Xd(f.m11, f.m21, f.m12, f.m22, f.Aa, f.Ba) + "]",
            Resources:
              "<< /XObject << /" + d._name + " " + d._id + " 0 R >> >>",
          });
          c._stream = "/" + d._name + " Do";
          this.images.push({ Cj: a.Qa, eu: b.toString(), Wj: c });
        }
        this.Kk("Pattern", c);
        return "/" + c._name;
      };
      c.prototype.hh = function() {
        var a = [],
          b = [],
          d;
        a.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
        for (d = 0; d < this.Sc.length; d++) this.ms(a, b, this.Sc[d], !1);
        var c = a.join("").length;
        a.push("xref\n0 " + (this.Sc.length + 1) + "\n");
        a.push("0000000000 65535 f\n");
        for (d = 0; d < this.Sc.length; d++) {
          for (var f = "" + b[d]; 10 > f.length; ) f = "0" + f;
          a.push(f + " 00000 n \n");
        }
        a.push("trailer\n");
        a.push("<< /Size " + (this.Sc.length + 1) + "\n");
        a.push("   /Root " + this.Lx._id + " 0 R\n");
        a.push(">>\n");
        a.push("startxref\n");
        a.push(c + "\n");
        a.push("%%EOF\n");
        return a.join("");
      };
      c.prototype.toBlob = function() {
        for (
          var a = this.hh(), b = new Uint8Array(a.length), d = 0;
          d < a.length;
          d++
        )
          b[d] = a.charCodeAt(d);
        return new Blob([b], { type: "application/pdf" });
      };
      c.prototype.ms = function(a, b, d, c) {
        c
          ? a.push("<<\n")
          : (b.push(a.join("").length),
            a.push(d._id + " 0 obj\n"),
            "Type" in d
              ? a.push("<< /Type /" + d.Type + "\n")
              : a.push("<<\n"));
        "_stream" in d && (d.Length = d._stream.toString().length);
        for (var e in d)
          if (d.hasOwnProperty(e) && "Type" !== e && "_" !== e.charAt(0)) {
            c && a.push("    ");
            a.push("   /" + e + " ");
            var h = d[e];
            "object" === typeof h &&
            "[object Array]" === Object.prototype.toString.apply(h)
              ? a.push("[ " + h.join(" ") + " ]")
              : "object" === typeof h
              ? this.ms(a, b, h, !0)
              : a.push(h);
            a.push("\n");
          }
        c && a.push("    ");
        a.push(">>\n");
        "_stream" in d &&
          (a.push("stream\n"), a.push(d._stream + "\n"), a.push("endstream\n"));
        c || a.push("endobj\n");
      };
      c.prototype.Vy = function(a) {
        return (
          "(" +
          a
            .replace(/\\/g, "\\\\")
            .replace(/\(/g, "\\(")
            .replace(/\)/g, "\\)") +
          ")"
        );
      };
      c.prototype.Xd = function() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        b = [];
        for (var d = 0; d < a.length; d++) {
          var c = "" + a[d];
          0 < c.indexOf("e") && (c = a[d].toFixed(20));
          b.push(c);
        }
        return b.join(" ");
      };
      c.Qn = null;
      return c;
    })(),
    xf = (function(c) {
      function a(a, d) {
        var b = c.call(this) || this;
        b.gz = d;
        b.path = [];
        b.x = 0;
        b.y = 0;
        b.ev = [];
        b.Zg = "";
        b.fh = "";
        b.eh = -1;
        b.dh = "";
        b.bh = "";
        b.ah = "";
        b.$g = "";
        b.Yg = -1;
        b.log = A.create("PDFContext");
        b.wf = a.clone();
        b.wf.transform(new rc(0.75, 0.75, 0, 0));
        b.Kb = new wf(
          (72 * a.x) / 96,
          (72 * a.y) / 96,
          (72 * a.width) / 96,
          (72 * a.height) / 96
        );
        b.stream = [];
        b.x = 0;
        b.y = 0;
        b.fillStyle = q.Oa;
        b.strokeStyle = q.Oa;
        b.js = b.Xw;
        b.gs();
        return b;
      }
      __extends(a, c);
      a.prototype.save = function() {
        c.prototype.save.call(this);
        this.stream.push("q");
        this.ev.push({
          Zg: this.Zg,
          fh: this.fh,
          eh: this.eh,
          dh: this.dh,
          bh: this.bh,
          ah: this.ah,
          $g: this.$g,
          Yg: this.Yg,
        });
      };
      a.prototype.restore = function() {
        c.prototype.restore.call(this);
        var a = this.ev.pop();
        a &&
          (this.stream.push("Q"),
          (this.Zg = a.Zg),
          (this.fh = a.fh),
          (this.eh = a.eh),
          (this.dh = a.dh),
          (this.bh = a.bh),
          (this.ah = a.ah),
          (this.$g = a.$g),
          (this.Yg = a.Yg));
      };
      a.prototype.xi = function(a) {
        var b = new rc(0.75, 0.75, 0, 0);
        a && ((this.wf = a.clone()), this.wf.transform(b));
        this.Io();
        this.Kb.xi(this.wf.x, this.wf.y, this.wf.width, this.wf.height);
        this.gs();
        this.beginPath();
      };
      a.prototype.beginPath = function() {
        this.path.length = 0;
      };
      a.prototype.gs = function() {
        this.log("Start page: %s", this.wf);
        this.setTransform(1, 0, 0, 1, 0, 0);
        this.fh = this.Zg = "";
        this.eh = -1;
        this.$g = this.ah = this.bh = this.dh = "";
        this.Yg = -1;
      };
      a.prototype.Io = function() {
        this.stream.length &&
          this.Kb.mx(this.Kb.stream(this.stream.join("\n")));
        this.stream.length = 0;
      };
      a.prototype.hw = function() {
        this.Io();
        for (
          var a = this.Kb.hh(), d = new Uint8Array(a.length), c = 0;
          c < a.length;
          c++
        )
          d[c] = a.charCodeAt(c);
        return d;
      };
      a.prototype.toString = function() {
        throw Error("Do not call PdfContext.toString()");
      };
      a.prototype.toBlob = function() {
        this.Io();
        return this.Kb.toBlob();
      };
      a.prototype.setTransform = function(a, d, c, f, h, k) {
        var b = this.wf.Qd();
        this.ua = new J(a, c, d, f, h, k)
          .multiply(new sc(0, b.x, b.y))
          .multiply(new rc(0.75, 0.75, 0, 0));
      };
      a.prototype.closePath = function() {
        this.path.push("h");
      };
      a.prototype.fill = function() {
        this.Rn();
        for (var a = 0; a < this.path.length; a++)
          this.stream.push(this.path[a]);
        this.stream.push("f");
      };
      a.prototype.stroke = function() {
        this.Sn();
        for (var a = 0; a < this.path.length; a++)
          this.stream.push(this.path[a]);
        this.stream.push("S");
      };
      a.prototype.moveTo = function(a, d) {
        var b = this.ua.apply(a, d);
        this.path.push(this.Kb.Xd(b.x, b.y) + " m");
        this.x = a;
        this.y = d;
      };
      a.prototype.lineTo = function(a, d) {
        var b = this.ua.apply(a, d);
        this.path.push(this.Kb.Xd(b.x, b.y) + " l");
        this.x = a;
        this.y = d;
      };
      a.prototype.bezierCurveTo = function(a, d, c, f, h, k) {
        a = this.ua.apply(a, d);
        c = this.ua.apply(c, f);
        f = this.ua.apply(h, k);
        this.path.push(this.Kb.Xd(a.x, a.y, c.x, c.y, f.x, f.y) + " c");
        this.x = h;
        this.y = k;
      };
      a.prototype.quadraticCurveTo = function(a, d, c, f) {
        this.bezierCurveTo(
          (2 / 3) * a + (1 / 3) * this.x,
          (2 / 3) * d + (1 / 3) * this.y,
          (2 / 3) * a + (1 / 3) * c,
          (2 / 3) * d + (1 / 3) * f,
          c,
          f
        );
      };
      a.prototype.fillText = function(a, d, c) {
        this.js(a, d, c, 0);
      };
      a.prototype.strokeText = function(a, d, c) {
        this.js(a, d, c, 1);
      };
      a.prototype.measureText = function(a) {
        var b = document.createElement("canvas").getContext("2d");
        b.font = this.font;
        return b.measureText(a);
      };
      a.prototype.Rn = function() {
        if (this.Zg !== this.fillStyle) {
          if (this.fillStyle instanceof Ld) {
            var a = this.Kb.wn(this.fillStyle, this.ua);
            this.stream.push("/Pattern cs");
            this.stream.push(a + " scn");
          } else
            "string" === typeof this.fillStyle &&
              ((a = q.ff(this.fillStyle).Jh(q.RGBA)),
              this.stream.push(
                this.Kb.Xd(a.values[0], a.values[1], a.values[2]) + " rg"
              ),
              (a = this.Kb.ow(a.values[3], !0)),
              this.stream.push("/" + a + " gs"));
          this.Zg = this.fillStyle;
        }
      };
      a.prototype.Sn = function() {
        function a(a) {
          return "bevel" === a ? 2 : "round" === a ? 1 : 0;
        }
        function d(a) {
          return "butt" === a ? 0 : "round" === a ? 1 : 2;
        }
        if (this.fh !== this.strokeStyle) {
          if (this.strokeStyle instanceof Ld) {
            var c = this.Kb.wn(this.strokeStyle, this.ua);
            this.stream.push("/Pattern CS");
            this.stream.push(c + " SCN");
          } else
            "string" === typeof this.strokeStyle &&
              ((c = q.ff(this.strokeStyle).Jh(q.RGBA)),
              this.stream.push(
                this.Kb.Xd(c.values[0], c.values[1], c.values[2]) + " RG"
              ),
              (c = this.Kb.ow(c.values[3], !1)),
              this.stream.push("/" + c + " gs"));
          this.fh = this.strokeStyle;
        }
        this.eh !== this.lineWidth &&
          ((this.eh = this.lineWidth),
          this.stream.push(this.Kb.Xd((72 * this.lineWidth) / 96) + " w"));
        this.dh !== this.lineJoin &&
          ((this.dh = this.lineJoin),
          this.stream.push(a(this.lineJoin) + " j"));
        this.bh !== this.lineCap &&
          ((this.bh = this.lineCap), this.stream.push(d(this.lineCap) + " J"));
      };
      a.prototype.Yw = function(a, d, c, f) {
        var b = this.Tk(this.font);
        if (this.ah !== b.fontSize || this.$g !== b.fontFamily) {
          var e = this.Kb.OD(b.fontFamily);
          this.stream.push(
            e + " " + this.Kb.Xd(parseFloat(b.fontSize)) + " Tf"
          );
          this.ah = b.fontSize;
          this.$g = b.fontFamily;
        }
        this.Yg !== f && (this.stream.push(f + " Tr"), (this.Yg = f));
        0 === f ? this.Rn() : this.Sn();
        this.stream.push("BT");
        d = this.ua.multiply(new J(1, 0, 0, -1, d, c));
        this.stream.push(
          this.Kb.Xd(d.m11, d.m21, d.m12, d.m22, d.Aa, d.Ba) + " Tm"
        );
        this.stream.push(this.Kb.Vy(a) + " Tj");
        this.stream.push("ET");
      };
      a.prototype.Xw = function(a, d, c, f) {
        var b = this.Tk(this.font),
          e = this.gz.get(b.fontFamily);
        e
          ? (0 === f ? this.Rn() : this.Sn(),
            this.beginPath(),
            e.Oy(this, a, d, c, parseFloat(b.fontSize)),
            0 === f ? this.fill() : this.stroke())
          : this.Yw(a, d, c, f);
      };
      a.prototype.Tk = function(a) {
        var b = "",
          c = "",
          f = "normal",
          h = "normal",
          k = "normal",
          l = "normal";
        a = a.split(/\s+/);
        a: for (;;) {
          var n = a.shift();
          if (!n) break;
          switch (n) {
            case "normal":
              break;
            case "italic":
            case "oblique":
              f = n;
              break;
            case "small-caps":
              k = n;
              break;
            case "bold":
            case "bolder":
            case "lighter":
            case "100":
            case "200":
            case "300":
            case "400":
            case "500":
            case "600":
            case "700":
            case "800":
            case "900":
              h = n;
              break;
            default:
              if ("" === c)
                (n = n.split("/")), (c = n[0]), 1 < n.length && (l = n[1]);
              else {
                b = n;
                a.length && (b += " " + a.join(" "));
                break a;
              }
          }
        }
        b && (b = b.replace(/"/g, ""));
        return {
          fontStyle: f,
          fontVariant: k,
          fontWeight: h,
          fontSize: c,
          lineHeight: l,
          fontFamily: b,
        };
      };
      a.prototype.Wr = function(a, d, c, f, h, k, l, n, r) {
        this.log(
          "DrawImage(%s, %s, %s, %s, %s, %s, %s %s)",
          d,
          c,
          f,
          h,
          k,
          l,
          n,
          r
        );
        l += r;
        var b = document.createElement("canvas"),
          e = b.getContext("2d");
        b.width = f;
        b.height = h;
        e.drawImage(a, -d, -c);
        a = vf(a, d, c, f, h);
        b = this.Kb.vn(a, b);
        this.stream.push("q");
        k = this.ua.multiply(new J(n, 0, 0, -r, k, l));
        this.stream.push(
          this.Kb.Xd(k.m11, k.m21, k.m12, k.m22, k.Aa, k.Ba) + " cm"
        );
        this.stream.push(b + " Do");
        this.stream.push("Q");
      };
      a.prototype.hh = function() {
        return this.Kb.hh();
      };
      a.prototype.$r = function() {
        return {};
      };
      a.prototype.fs = function() {};
      a.prototype.clip = function() {
        for (var a = 0; a < this.path.length; a++)
          this.stream.push(this.path[a]);
        this.stream.push("W");
        this.stream.push("n");
        this.path.length = 0;
      };
      return a;
    })(Pd);
  function vf(c) {
    for (var a = [], b = 1; b < arguments.length; b++) a[b - 1] = arguments[b];
    return c instanceof HTMLCanvasElement
      ? a.join("-") + c.toDataURL()
      : a.join("-") + c.src;
  }
  var yf = (function() {
    function c(a, b, d) {
      void 0 === d && (d = "");
      this.name = a;
      this.attributes = b;
      this.text = d;
      this.children = [];
    }
    c.prototype.toString = function() {
      var a = [];
      this.ls(a, "");
      return a.join("");
    };
    c.prototype.ls = function(a, b) {
      var d;
      if (this.hasAttributes() || 0 !== this.children.length) {
        a.push(b);
        a.push("<");
        a.push(this.name);
        for (d in this.attributes)
          this.attributes.hasOwnProperty(d) &&
            (a.push(" "),
            a.push(d),
            void 0 !== this.attributes[d] &&
              null !== this.attributes[d] &&
              (a.push('="'),
              a.push(this.Xr("" + this.attributes[d])),
              a.push('"')));
        if (this.children.length || "" !== this.text) {
          a.push(">\n");
          for (d = 0; d < this.children.length; d++)
            this.children[d].ls(a, b + "  ");
          "" !== this.text && a.push(b + "  " + this.Xr(this.text));
          a.push(b + "</" + this.name + ">");
        } else a.push("/>");
        a.push("\n");
      }
    };
    c.prototype.hasAttributes = function() {
      for (var a in this.attributes)
        if (this.attributes.hasOwnProperty(a)) return !0;
      return !1;
    };
    c.prototype.jk = function(a) {
      for (var b in a) a.hasOwnProperty(b) && (this.attributes[b] = a[b]);
    };
    c.prototype.$e = function(a) {
      this.children.push(a);
    };
    c.prototype.Xr = function(a) {
      return ("" + a)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };
    return c;
  })();
  var zf = (function() {
      function c() {
        this.fa = [];
      }
      c.prototype.lineTo = function(a, b, d) {
        this.fa.push({ Si: "L", ji: a.apply(b, d) });
      };
      c.prototype.moveTo = function(a, b, d) {
        this.fa.push({ Si: "M", ji: a.apply(b, d) });
      };
      c.prototype.quadraticCurveTo = function(a, b, d, c, f) {
        this.fa.push({ Si: "Q", ji: a.apply(b, d), Gm: a.apply(c, f) });
      };
      c.prototype.bezierCurveTo = function(a, b, d, c, f, h, k) {
        this.fa.push({
          Si: "C",
          ji: a.apply(b, d),
          Gm: a.apply(c, f),
          gq: a.apply(h, k),
        });
      };
      c.prototype.closePath = function() {
        this.fa.push({ Si: "Z" });
      };
      c.prototype.hr = function(a) {
        a = a.inverse();
        for (var b = "", d = 0; d < this.fa.length; d++) {
          var c = this.fa[d];
          0 < d && (b += " ");
          b += c.Si;
          if (c.ji) {
            var f = a.apply(c.ji.x, c.ji.y);
            b += f.x + "," + f.y;
            c.Gm &&
              ((f = a.apply(c.Gm.x, c.Gm.y)),
              (b += "," + f.x + "," + f.y),
              c.gq &&
                ((c = a.apply(c.gq.x, c.gq.y)), (b += "," + c.x + "," + c.y)));
          }
        }
        return b;
      };
      return c;
    })(),
    Af = (function(c) {
      function a(a) {
        var b = c.call(this) || this;
        b.ua = new J();
        b.fa = [];
        b.path = new zf();
        b.wg = "";
        b.Sc = [];
        b.pc = 0;
        b.log = A.create("SvgContext");
        b.Hi = 1;
        b.Ah = 2;
        b.Jn = 4;
        b.log("SVG context rect: %s", a);
        b.root = new yf("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xmlns:zwibbler": "http://zwibbler.com/xml",
          version: 1.2,
          baseProfile: "tiny",
          width: a.width,
          height: a.height,
          viewBox: a.x + " " + a.y + " " + a.width + " " + a.height,
        });
        b.ul = new yf("defs", {});
        b.root.$e(b.ul);
        b.groups = [b.root];
        return b;
      }
      __extends(a, c);
      a.prototype.UA = function() {
        return "clip" + this.pc++;
      };
      a.prototype.ck = function(a) {
        a = new yf("g", a || {});
        this.xo().$e(a);
        this.groups.push(a);
      };
      a.prototype.bk = function() {
        var a = this.groups.pop();
        if (a && 1 === a.children.length) {
          var d = a.children[0];
          d.jk(a.attributes);
          a.name = d.name;
          a.attributes = d.attributes;
          a.children = d.children;
          a.text = d.text;
        }
      };
      a.prototype.xo = function() {
        return this.groups[this.groups.length - 1];
      };
      a.prototype.node = function(a, d, c, f) {
        function b(a, b) {
          if (b instanceof Ld) c[a] = "url(#" + e.wn(b) + ")";
          else if ("string" === typeof b) {
            b = q.ff(b);
            var d = b.values[3];
            1 > d && ((b.values[3] = 1), (c[a + "-opacity"] = "" + d));
            c[a] = b.toString();
          }
        }
        void 0 === c && (c = {});
        var e = this;
        this.ua.nu() ||
          (c.transform =
            "matrix(" +
            this.ua.m11 +
            " " +
            this.ua.m21 +
            " " +
            this.ua.m12 +
            " " +
            this.ua.m22 +
            " " +
            this.ua.Aa +
            " " +
            this.ua.Ba +
            ")");
        d & this.Hi ? b("fill", this.fillStyle) : (c.fill = "none");
        d & this.Ah &&
          (b("stroke", this.strokeStyle),
          (c["stroke-width"] = this.lineWidth),
          "miter" !== this.lineJoin && (c["stroke-linejoin"] = this.lineJoin),
          "butt" !== this.lineCap && (c["stroke-linecap"] = this.lineCap));
        d & this.Jn &&
          ((d = this.Tk(this.font)),
          (c["font-weight"] = d.fontWeight),
          (c["font-size"] = parseFloat(d.fontSize)),
          (c["font-style"] = d.fontStyle),
          (c["font-family"] = d.fontFamily));
        "" !== this.wg && (c["clip-path"] = "url(#" + this.wg + ")");
        this.ix(new yf(a, c, f));
      };
      a.prototype.ix = function(a) {
        var b = !0,
          c = null,
          f = {},
          h,
          k = this.xo();
        0 === k.children.length
          ? (b = !1)
          : (c = k.children[k.children.length - 1]);
        !c || (a.name === c.name && a.text === c.text) || (b = !1);
        if (b && c)
          for (h in c.attributes)
            if (c.attributes.hasOwnProperty(h))
              if (h in a.attributes) {
                var l = c.attributes[h],
                  n = a.attributes[h];
                if (l !== n)
                  if (0 === h.indexOf("fill") || 0 === h.indexOf("stroke"))
                    if ("none" === l) f[h] = n;
                    else if ("none" === n) f[h] = l;
                    else {
                      b = !1;
                      break;
                    }
                  else {
                    b = !1;
                    break;
                  }
              } else f[h] = c.attributes[h];
        if (b && c)
          for (h in a.attributes)
            a.attributes.hasOwnProperty(h) &&
              (h in c.attributes || (f[h] = a.attributes[h]));
        b && c ? c.jk(f) : k.$e(a);
      };
      a.prototype.mm = function(a) {
        if (a === this.Ah) {
          if (0 === this.lineWidth) return !1;
          a = this.strokeStyle;
        } else a = this.fillStyle;
        return a instanceof Ld
          ? !0
          : "string" === typeof a
          ? 0 < q.ff(a).values[3]
          : !1;
      };
      a.prototype.Yr = function(a) {
        for (var b = 0; b < this.Sc.length; b++)
          if (this.Sc[b].Cj === a) return this.Sc[b].Wj;
        return null;
      };
      a.prototype.vn = function(a) {
        var b = this.Yr(a);
        if (b) return b;
        b = "image" + this.Sc.length;
        this.Sc.push({ Cj: a, Wj: b });
        var c = document.createElement("canvas"),
          f = c.getContext("2d");
        c.width = a.width;
        c.height = a.height;
        f.drawImage(a, 0, 0);
        c = c.toDataURL();
        a = new yf("image", {
          id: b,
          x: 0,
          y: 0,
          width: a.width,
          height: a.height,
          "xlink:href": c,
        });
        this.ul.$e(a);
        return b;
      };
      a.prototype.wn = function(a) {
        var b = this.Yr(a);
        if (b) return b;
        var c = this.vn(a.Qa);
        b = "pattern" + this.Sc.length;
        this.Sc.push({ Cj: a, Wj: b });
        var f = new yf("pattern", { id: b });
        "no-repeat" === a.repeat
          ? ((f.attributes.width = "1"), (f.attributes.height = "1"))
          : "repeat-x" === a.repeat
          ? ((f.attributes.patternUnits = "userSpaceOnUse"),
            (f.attributes.width = a.Qa.width),
            (f.attributes.height = 1e4))
          : ("repeat-y" === a.repeat
              ? ((f.attributes.patternUnits = "userSpaceOnUse"),
                (f.attributes.width = 1e4))
              : ((f.attributes.patternUnits = "userSpaceOnUse"),
                (f.attributes.width = a.Qa.width)),
            (f.attributes.height = a.Qa.height));
        f.$e(new yf("use", { "xlink:href": "#" + c }));
        this.ul.$e(f);
        return b;
      };
      a.prototype.toString = function() {
        return (
          '<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString()
        );
      };
      a.prototype.hw = function() {
        return Sa(this.toString());
      };
      a.prototype.toBlob = function() {
        return new Blob([Sa(this.toString())], { type: "image/svg+xml" });
      };
      a.prototype.beginPath = function() {
        this.path = new zf();
      };
      a.prototype.transform = function(a, d, c, f, h, k) {
        a = new J(a, c, d, f, h, k);
        this.ua = this.ua.multiply(a);
      };
      a.prototype.closePath = function() {
        this.path.closePath();
      };
      a.prototype.fill = function() {
        this.mm(this.Hi) &&
          this.node("path", this.Hi, { d: this.path.hr(this.ua) });
      };
      a.prototype.stroke = function() {
        this.mm(this.Ah) &&
          this.node("path", this.Ah, { d: this.path.hr(this.ua) });
      };
      a.prototype.moveTo = function(a, d) {
        this.path.moveTo(this.ua, a, d);
      };
      a.prototype.lineTo = function(a, d) {
        this.path.lineTo(this.ua, a, d);
      };
      a.prototype.quadraticCurveTo = function(a, d, c, f) {
        this.path.quadraticCurveTo(this.ua, a, d, c, f);
      };
      a.prototype.bezierCurveTo = function(a, d, c, f, h, k) {
        this.path.bezierCurveTo(this.ua, a, d, c, f, h, k);
      };
      a.prototype.fillText = function(a, d, c) {
        this.mm(this.Hi) &&
          this.node("text", this.Hi | this.Jn, { x: d, y: c }, a);
      };
      a.prototype.strokeText = function(a, d, c) {
        this.mm(this.Ah) &&
          this.node("text", this.Ah | this.Jn, { x: d, y: c }, a);
      };
      a.prototype.Wr = function(a, d, c, f, h, k, l, n, r) {
        var b = document.createElement("canvas"),
          e = b.getContext("2d");
        b.width = f;
        b.height = h;
        e.drawImage(a, -d, -c);
        a = b.toDataURL();
        this.xo().$e(
          new yf("image", {
            transform:
              "matrix(" +
              this.ua.m11 +
              " " +
              this.ua.m21 +
              " " +
              this.ua.m12 +
              " " +
              this.ua.m22 +
              " " +
              this.ua.Aa +
              " " +
              this.ua.Ba +
              ")",
            x: k,
            y: l,
            width: n,
            height: r,
            "xlink:href": a,
          })
        );
      };
      a.prototype.measureText = function(a) {
        var b = document.createElement("canvas").getContext("2d");
        b.font = this.font;
        return b.measureText(a);
      };
      a.prototype.xi = function() {};
      a.prototype.$r = function() {
        return { name: this.wg };
      };
      a.prototype.fs = function(a) {
        this.wg = a ? a.name : "";
      };
      a.prototype.clip = function() {
        var a = this.UA(),
          d = new yf("clipPath", { id: a });
        d.$e(new yf("path", { d: this.path.hr(this.ua) }));
        this.ul.$e(d);
        this.wg = a;
        this.path = new zf();
      };
      return a;
    })(Pd);
  function Bf(c, a) {
    function b(b) {
      d && clearTimeout(d);
      d = setTimeout(
        function() {
          d = null;
          a();
        },
        arguments.length ? b : c
      );
    }
    var d = null;
    b.cancel = function() {
      d && (clearTimeout(d), (d = null));
    };
    return b;
  }
  var Cf = (function() {
    function c(a, b, d) {
      var c = this;
      this.view = a;
      this.options = b;
      this.mode = d;
      this.dg = {};
      this.log = A.create("Brush");
      this.view.qb(!0);
      this.yv = function() {
        return c.Hd();
      };
      this.Bc = new Ee(this.view);
    }
    c.prototype.Hd = function() {
      this.Rp(this.Ae() / 2);
    };
    c.prototype.sb = function(a) {
      a = this.Bc.sb(a);
      this.Bc.active && this.reset();
      return a;
    };
    c.prototype.xd = function() {
      this.view.Jb("crosshair");
      this.Rp(this.Ae() / 2);
      window.addEventListener("resize", this.yv);
    };
    c.prototype.Ac = function() {
      this.view.Jb("default");
      this.view.no("brush");
      window.removeEventListener("resize", this.yv);
    };
    c.prototype.reset = function() {
      this.dg = {};
    };
    c.prototype.Rp = function(a) {
      var b = document.createElement("canvas");
      a *= this.view.scale * this.view.Gt();
      a = Math.ceil(a + 1);
      b.width = 2 * a + 2;
      b.height = 2 * a + 2;
      var d = b.getContext("2d");
      d.beginPath();
      "round" === (this.options.lineCap || "round")
        ? d.arc(a + 1, a + 1, a, 0, 2 * Math.PI)
        : d.rect(1, 1, 2 * a - 2, 2 * a - 2);
      d.lineWidth = 2;
      d.strokeStyle = q.Xc;
      d.stroke();
      d.lineWidth = 1;
      d.strokeStyle = q.Oa;
      d.stroke();
      b = b.toDataURL();
      this.view.Jb("url(" + b + ") " + (a + 1) + " " + (a + 1) + ", auto");
    };
    c.prototype.ui = function(a) {
      this.options.strokeStyle = a;
    };
    c.prototype.Ae = function() {
      var a = this.options.lineWidth;
      this.view.ha.get("adaptiveBrushWidth") && (a /= this.view.scale);
      return a;
    };
    c.prototype.Ym = function(a) {
      this.options.lineWidth = a;
      this.Rp(this.Ae() / 2);
    };
    c.prototype.Ab = function(a, b, d) {
      if (this.Bc.active) return !0;
      if (d.target instanceof HTMLElement && d.target.matches("[z-fixture] *"))
        return this.view.ub(), this.view.ra.Ab && this.view.ra.Ab(a, b, d), !0;
      var c =
        "freehand" === this.mode || "brush" === this.mode ? new Lc() : new Jc();
      c.sg(a, b);
      this.dg[d.pointerId] = c;
      return !0;
    };
    c.prototype.Vu = function(a) {
      a.save();
      var b = this.view.Ms(a);
      a.lineCap = this.options.lineCap || "round";
      a.lineJoin = "round" === a.lineCap ? "round" : "bevel";
      a.lineWidth = this.Ae();
      var d = a.globalAlpha;
      "opacity" in this.options && (a.globalAlpha = this.options.opacity);
      bd(this.options.shadow, a);
      var c = Bc(this.options.dashes || "");
      a.beginPath();
      for (var f in this.dg) Cc(a, this.dg[f].op(), c);
      hc(a, this.options.strokeStyle);
      b && a.restore();
      a.globalAlpha = d;
      a.restore();
    };
    c.prototype.Ib = function(a, b, d) {
      var c = this;
      d.pointerId in this.dg &&
        (this.dg[d.pointerId].sg(a, b),
        "erase" === this.options.strokeStyle
          ? this.view.la(function(a) {
              return c.Vu(a);
            })
          : this.view.rv("brush", function(a) {
              return c.Vu(a);
            }));
      return !0;
    };
    c.prototype.Wb = function(a, b, d) {
      this.Ib(a, b, d);
      this.view.no("brush");
      this.wa();
      return !0;
    };
    c.prototype.wa = function() {
      var a, b;
      this.view.aa.$a();
      var d = "";
      for (var c in this.dg) {
        var f = zc(this.dg[c].op(), 0.5);
        if ("brush" === this.mode || "freehand" === this.mode) {
          var h = [];
          1 === f.length && f.push(new F(f[0].x + 0.1, f[0].y + 0.1));
          if (1 < f.length) {
            d = a = 0;
            for (b = f.length - 1; a <= b; d = a += 1)
              h.push(f[d].x), h.push(f[d].y);
            d = this.view.aa.createNode(
              "BrushNode",
              ic({ points: h, layer: this.view.Zc }, this.options, {
                lineWidth: this.Ae(),
              })
            );
          }
        } else {
          if ("shapebrush" === this.mode) {
            f = zc(f, 20);
            var k;
            var l = f;
            if (!(2 > l.length)) {
              a = l[0];
              f = l[l.length - 1];
              h = 40 > a.bc(f);
              for (b = 0; b < l.length; b++) {
                var n = l[b];
                for (k = b + 1; k < l.length; k++) {
                  var r = l[k];
                  20 > Math.abs(n.x - r.x) && (r.x = n.x);
                  20 > Math.abs(n.y - r.y) && (r.y = n.y);
                }
              }
              n = G.uh(l).Qd();
              for (b = 0; b < l.length; b++)
                (k = l[b]),
                  20 > Math.abs(k.x - n.x) && (k.x = n.x),
                  20 > Math.abs(k.y - n.y) && (k.y = n.y);
              h && ((a.x = f.x), (a.y = f.y));
            }
            f = l;
          } else if ("quadratic" === this.mode) {
            f = zc(f, 10);
            a = Cd(f);
            d = a.fa[1];
            h = a.fa[2];
            l = a.fa[4];
            b = a.fa[5];
            f = a.fa[8];
            a = a.fa[9];
            l = ((3 * l - d) / 2 + (3 * l - f) / 2) / 2;
            b = ((3 * b - h) / 2 + (3 * b - a) / 2) / 2;
            k = new K();
            k.moveTo(d, h);
            k.quadraticCurveTo(l, b, f, a);
            d = k;
            h = L.Aw(d);
            d = this.view.aa.createNode(
              "PathNode",
              ic(
                {
                  commands: h,
                  fillStyle: this.view.uc,
                  sloppiness: 0,
                  layer: this.view.Zc,
                },
                this.options,
                { lineWidth: this.Ae() }
              )
            );
            continue;
          }
          1 === f.length &&
            "freehand" === this.mode &&
            f.push(new F(f[0].x + 0.1, f[0].y + 0.1));
          if (1 < f.length) {
            h = new N();
            h.moveTo(f[0].x, f[0].y);
            a = f[0].bd(f[f.length - 1]);
            d = b = 1;
            for (l = f.length - 1; b <= l; d = b += 1) h.lineTo(f[d].x, f[d].y);
            a && h.close();
            d = this.view.aa.createNode(
              "PathNode",
              ic(
                {
                  commands: h.qc(),
                  fillStyle: this.view.uc,
                  sloppiness: 0,
                  lockEditMode: "shapebrush" !== this.mode,
                  layer: this.view.Zc,
                },
                this.options,
                { lineWidth: this.Ae() }
              )
            );
          }
        }
      }
      this.view.aa.wa();
      this.view.qb();
      c = this.view.aa.Fb(d);
      this.view.ha.get("singleStrokeBrush")
        ? (c && this.view.We(c), this.view.ub())
        : this.reset();
      this.view.vc();
    };
    c.prototype.je = function(a, b) {
      this.options.strokeStyle = a;
      b
        ? ((this.view.uc = a), (this.view.kc = a), (b = "fillStyle"))
        : ((this.view.$c = a), (b = "strokeStyle"));
      this.view.setProperty(b, a);
    };
    c.prototype.bg = function(a) {
      this.view.kc = ec(this.view.kc, a);
      this.options.strokeStyle = ec(this.options.strokeStyle, a);
      this.view.uc = this.view.kc;
    };
    c.prototype.ke = function(a) {
      this.log("keyboard: %s", a);
      switch (a) {
        case "cancel":
          this.log("ESC pressed. Abort brush and go back to toolbar.");
          this.view.ub();
          this.view.Pc.ta("goto-toolbar");
          break;
        case "undo":
          this.view.Uc();
          break;
        case "redo":
          this.view.ne();
      }
    };
    c.prototype.vf = function(a, b) {
      "defaultBrushWidth" === a
        ? this.Ym(b)
        : "defaultBrushColour" === a && this.ui(b);
    };
    c.prototype.hd = function(a, b) {
      switch (a) {
        case "lineWidth":
          this.Ym(b);
          break;
        case "strokeStyle":
        case "fillStyle":
          this.ui(b);
          break;
        case "dashes":
        case "shadow":
        case "opacity":
          this.options[a] = b;
      }
    };
    c.prototype.Ad = function() {
      return "circle" === this.mode ? "ellipse" : this.mode;
    };
    c.prototype.Mg = function() {
      return ic({ dashes: "" }, this.options);
    };
    c.prototype.sp = function() {
      return ["BrushNode"];
    };
    return c;
  })();
  var Df = (function() {
    function c(a, b, d, c, f, h) {
      void 0 === d && (d = {});
      void 0 === c && (c = !1);
      void 0 === f && (f = !1);
      void 0 === h && (h = !1);
      this.view = a;
      this.type = b;
      this.ba = d;
      this.Rq = c;
      this.ey = f;
      this.open = h;
      this.node = null;
      this.Oo = new F(0, 0);
      this.qm = new F(0, 0);
      this.index = 0;
      this.state = "start";
      this.log = A.create("DRAWLINES");
      "wrap" in this.ba || (this.ba.wrap = this.view.ha.get("multilineText"));
      "fontSize" in this.ba ||
        (this.ba.fontSize = this.view.ha.get("defaultFontSize"));
      "fontName" in this.ba ||
        (this.ba.fontName = this.view.ha.get("defaultFont"));
      this.Bc = new Ee(this.view);
      this.view.qb(!0);
    }
    c.prototype.xd = function() {
      this.log("Entering DrawLinesBehaviour");
      this.view.Jb("crosshair");
      this.view.ha.Ci() || this.view.Xm("click-to-place-first-point-of-line");
      this.view.la();
    };
    c.prototype.reset = function() {
      this.xd();
    };
    c.prototype.sb = function(a) {
      a = this.Bc.sb(a);
      this.Bc.active && this.node && this.reset();
      return a;
    };
    c.prototype.ke = function(a) {
      "cancel" === a &&
        (null !== this.node &&
          this.view.Ra.Mb &&
          "curve" === this.type &&
          this.wa(),
        null !== this.node &&
          (this.view.aa.$a(),
          this.view.aa.ac([this.node.id]),
          this.view.aa.wa(!0)),
        this.view.Ra.Mb ? this.view.Pc.ta("goto-toolbar") : this.view.ub());
    };
    c.prototype.done = function() {
      this.view.Jx();
      this.view.ha.get("autoPickTool")
        ? this.view.ub()
        : (this.state = "start");
    };
    c.prototype.sg = function(a, b) {
      this.node instanceof L &&
        ("curve" === this.type ||
        "arrow" === this.type ||
        "linear-bezier" === this.type
          ? this.node.Yi(a, b)
          : this.node.lineTo(a, b));
    };
    c.prototype.Ab = function(a, b, d) {
      d = this.view.ob(new F(a, b), d);
      this.log(
        "onMouseDown(%s, %s) state=%s, index=%s",
        a,
        b,
        this.state,
        this.index
      );
      if ("start" === this.state) {
        this.Oo = d;
        a = {
          seed: Math.round(65535 * Math.random()),
          strokeStyle: this.view.$c,
          lineWidth: this.Ae(),
          sloppiness: this.view.sa.sloppiness,
          smoothness: this.view.sa.smoothness,
        };
        "arrow" === this.type &&
          ((a.arrowSize = this.view.ha.fb("defaultArrowSize")),
          (a.arrowStyle = this.view.ha.fb("defaultArrowStyle")),
          (a.arrowXOffset = this.view.ha.fb("defaultArrowXOffset")),
          (a.doubleArrow = this.view.sa.doubleArrow || !1));
        for (var c in this.ba) this.ba.hasOwnProperty(c) && (a[c] = this.ba[c]);
        this.view.aa.$a();
        c = this.view.aa.createNode("PathNode", a);
        this.view.aa.wa(!0);
        this.node = this.view.aa.Fb(c);
        this.node.moveTo(d.x, d.y);
        this.sg(d.x, d.y);
        this.index = 3;
        this.view.update();
        this.state = "predrag";
      } else if ("placing" === this.state)
        if (
          ((c = this.qm.bc(d)),
          this.log("Mouse moved by %s", c),
          "arrow" !== this.type && 8 > this.Oo.bc(d) && 3 < this.index)
        )
          this.log("Clicked close to start; automatically closing path"),
            this.node instanceof L && !this.open && this.node.close(),
            this.wa(),
            this.done();
        else if (8 > this.qm.bc(d))
          this.log("Didn't move. Stop drawing."), this.Ps(), this.done();
        else {
          if (this.Rq) return this.wa(), this.done(), !0;
          this.node &&
            (this.sg(d.x, d.y),
            (this.index += 3),
            this.view.aa.$h(this.node.id),
            this.view.update());
        }
      else return this.log("Invalid state %s", this.state), !0;
      this.qm = new F(d.x, d.y);
      return !0;
    };
    c.prototype.Ps = function() {
      3 < this.index
        ? (this.node instanceof L && this.node.dC(this.index), this.wa())
        : this.cancel();
    };
    c.prototype.Wb = function(a, b) {
      var d = new F(a, b);
      d = this.Oo.bc(d);
      this.log("onMouseUp (%s,%s) %s", a, b, this.state);
      "predrag" === this.state &&
        (this.log("MovedBy: %s", d),
        10 < d
          ? (this.wa(), this.done())
          : ((this.state = "placing"),
            this.view.Xm(
              "click-to-place-another-point-or-double-click-to-end-the-line"
            )));
      return !0;
    };
    c.prototype.Ib = function(a, b, d) {
      b = this.view.ob(new F(a, b), d);
      a = b.x;
      b = b.y;
      if (d.ctrlKey || this.ey) {
        d = this.qm;
        var c = Math.atan2(b - d.y, a - d.x),
          f = Math.PI / 8;
        c >= -f && c < f
          ? (b = d.y)
          : c >= f && c < 3 * f
          ? ((a = Math.max(b - d.y, a - d.x)), (b = d.y + a), (a = d.x + a))
          : c >= 3 * f && c < 5 * f
          ? (a = d.x)
          : c >= 5 * f && c < 7 * f
          ? ((a = Math.max(b - d.y, d.x - a)), (b = d.y + a), (a = d.x - a))
          : c >= 7 * f || c <= 7 * -f
          ? (b = d.y)
          : c < 5 * -f
          ? ((a = Math.max(d.y - b, d.x - a)), (b = d.y - a), (a = d.x - a))
          : c < 3 * -f
          ? (a = d.x)
          : ((a = Math.max(d.y - b, a - d.x)), (b = d.y - a), (a = d.x + a));
      }
      this.node &&
        (this.node.Xb(this.node.Je(this.index, a, b)),
        this.node.format(this.view.ma, this.view.request),
        this.view.la());
      return !1;
    };
    c.prototype.gy = function(a) {
      for (var b = 0, d = [], c, f, h, k, l, n; b < a.length; ) {
        var r = a[b];
        switch (r) {
          case L.wh:
            h = a[b + 1];
            k = a[b + 2];
            d.push(r, h, k);
            break;
          case L.Se:
            (c = a[b + 1]),
              (f = a[b + 2]),
              void 0 !== h &&
                void 0 !== k &&
                void 0 !== l &&
                void 0 !== n &&
                d.push(
                  L.Gk,
                  c,
                  f,
                  (l + h) / 2,
                  (n + k) / 2,
                  (h + c) / 2,
                  (k + f) / 2
                ),
              (l = h),
              (n = k),
              (h = c),
              (k = f);
        }
        b += L.mb[r] + 1;
      }
      return d;
    };
    c.prototype.wa = function() {
      var a = this;
      if (this.node) {
        this.node instanceof L && !this.open && this.node.zx();
        this.view.aa.$a();
        this.view.aa.ac([this.node.id]);
        this.view.aa.wa(!0);
        var b = this.node.ia("commands");
        "linear-bezier" === this.type && (b = this.gy(b));
        var d = this.Mg();
        d.seed = this.node.ia("seed");
        d.commands = b;
        this.view.aa.transaction(function() {
          a.view.aa.createNode("PathNode", d);
        });
        this.node = null;
      }
    };
    c.prototype.cancel = function() {
      this.node &&
        (this.view.aa.$a(),
        this.view.aa.ac([this.node.id]),
        this.view.aa.wa(!0),
        (this.node = null));
    };
    c.prototype.Ac = function() {
      this.Ps();
      this.view.Jb("default");
      this.view.Xm("");
      this.view.la();
    };
    c.prototype.je = function(a, b) {
      this.ba.strokeStyle = a;
      b
        ? ((this.view.uc = a),
          (this.view.kc = a),
          (b = "fillStyle"),
          this.log(
            "We are drawing lines. Set strokeStyle instead of fillStyle"
          ))
        : ((this.view.$c = a), (b = "strokeStyle"));
      this.view.setProperty(b, a);
    };
    c.prototype.bg = function(a, b) {
      b
        ? ((this.view.uc = ec(this.view.uc, a)),
          (this.view.kc = ec(this.view.kc, a)))
        : (this.view.$c = ec(this.view.$c, a));
      this.view.Oq(a, b);
    };
    c.prototype.Ad = function() {
      return this.type;
    };
    c.prototype.Mg = function() {
      var a = this.view.ha.fb("defaultArrowSize");
      a = {
        arrowSize: "arrow" === this.type ? a : 0,
        arrowStyle: this.view.ha.fb("defaultArrowStyle"),
        arrowXOffset: this.view.ha.fb("defaultArrowXOffset"),
        fillStyle: this.view.uc,
        strokeStyle: this.view.$c,
        lineWidth: this.Ae(),
        dashes: "",
        sloppiness: this.view.sa.sloppiness,
        smoothness: this.view.sa.smoothness,
        layer: this.view.Zc,
      };
      a.doubleArrow =
        "doubleArrow" in this.ba
          ? this.ba.doubleArrow
          : this.view.sa.doubleArrow || !1;
      for (var b in this.ba) this.ba.hasOwnProperty(b) && (a[b] = this.ba[b]);
      this.open && (delete a.fontName, delete a.fontSize);
      return a;
    };
    c.prototype.hd = function(a, b) {
      "doubleArrow" === a && (b = jc(!0, b));
      this.ba[a] = b;
      switch (a) {
        case "doubleArrow":
          this.view.sa[a] = b;
      }
    };
    c.prototype.Ae = function() {
      return this.view.Zn(this.view.sa.lineWidth);
    };
    return c;
  })();
  var Ff = (function() {
    function c(a, b, d, c, f, h, k, l) {
      var e = this;
      this.view = a;
      this.nodeType = b;
      this.ba = d;
      this.width = c;
      this.height = f;
      this.Fv = h;
      this.zD = k;
      this.state = "initial";
      this.start = new F(0, 0);
      this.end = new F(0, 0);
      this.node = null;
      this.log = A.create("DrawShape");
      this.view.Ne(!0);
      "rectangle-tl" === h &&
        (this.et = function(a) {
          a.lineWidth = 1 / e.view.scale;
          a.strokeStyle = "#ccc";
          a.beginPath();
          a.rect(
            e.start.x,
            e.start.y,
            e.end.x - e.start.x,
            e.end.y - e.start.y
          );
          a.stroke();
        });
      this.Hs = null === l ? this.view.ha.get("autoPickTool") : l;
      this.Bc = new Ee(this.view);
      this.view.qb(!0);
    }
    c.prototype.et = function() {};
    c.prototype.xd = function() {
      this.log("Entering DrawShapeBehaviour");
      this.view.Jb("crosshair");
    };
    c.prototype.Ac = function() {
      this.log("Leaving DrawShapeBehaviour");
      this.cancel();
      this.view.Ne(!1);
    };
    c.prototype.cancel = function() {
      this.node &&
        (this.view.aa.$a(),
        this.view.aa.ac([this.node.id]),
        this.view.aa.wa(!0),
        this.view.update(),
        (this.node = null));
      this.state = "initial";
    };
    c.prototype.sb = function(a) {
      a = this.Bc.sb(a);
      this.node &&
        this.Bc.active &&
        (this.view.aa.$a(),
        this.view.aa.ac([this.node.id]),
        this.view.aa.wa(!0),
        (this.node = null),
        (this.state = "initial"));
      return a;
    };
    c.prototype.ke = function(a) {
      "cancel" === a && this.view.ub();
    };
    c.prototype.Ab = function(a, b, d) {
      "initial" === this.state &&
        ((this.start = this.view.ob(new F(a, b), d)),
        (this.state = "predraw"),
        this.log("initial -> predraw"));
      return !0;
    };
    c.prototype.Ib = function(a, b, d) {
      a = this.view.ob(new F(a, b), d);
      d = d.ctrlKey;
      "predraw" === this.state &&
        10 < this.start.bc(a) &&
        (this.create(),
        (this.state = "drawing"),
        this.log("predraw -> drawing"));
      "drawing" === this.state &&
        (this.transform(this.start, a, d),
        (this.end = a),
        this.view.update(!1, this.et));
      return !0;
    };
    c.prototype.Wb = function(a, b, d) {
      "predraw" === this.state
        ? this.view.ha.get("clickToDrawShapes")
          ? (this.create(),
            this.transform(this.start, null, d.ctrlKey),
            this.wa(),
            this.Hs && this.view.ub(),
            (this.state = "initial"))
          : this.cancel()
        : "drawing" === this.state &&
          (this.transform(this.start, this.view.ob(new F(a, b), d), d.ctrlKey),
          this.wa(),
          this.Hs && this.view.ub(),
          (this.state = "initial"));
      return !0;
    };
    c.prototype.create = function() {
      this.view.aa.$a();
      var a = this.view.aa.createNode(this.nodeType, this.ba);
      this.node = this.view.aa.Fb(a);
      this.view.aa.wa(!0);
    };
    c.prototype.transform = function(a, b, d) {
      if (b)
        if ("circle" === this.Fv) {
          var c = a;
          a = a.bc(b);
          var f = (2 * a) / this.width;
          a = (2 * a) / this.height;
        } else {
          if ("rectangle-tl" === this.Fv)
            (a = a.clone()),
              (b = b.clone()),
              a.x > b.x && ((f = a.x), (a.x = b.x), (b.x = f)),
              a.y > b.y && ((f = a.y), (a.y = b.y), (b.y = f)),
              (c = a);
          else if (((f = [a, b]), 0 === f.length)) c = new F(0, 0);
          else {
            c = f[0].x;
            for (var h = f[0].y, k = 1; k < f.length; k++)
              (c += f[k].x), (h += f[k].y);
            c = new F(c / f.length, h / f.length);
          }
          f = (b.x - a.x) / this.width;
          a = (b.y - a.y) / this.height;
        }
      else (c = a), (a = f = 1);
      d && (a = f = Math.min(f, a));
      d = new pc(c.x, c.y);
      d = d.multiply(new rc(f, a));
      this.node && (this.node.Sv(d), this.view.aa.$h(this.node.id));
    };
    c.prototype.wa = function() {
      var a = this;
      this.node &&
        ((this.ba.matrix = this.node.Na()),
        this.view.aa.$a(),
        this.view.aa.ac([this.node.id]),
        this.view.aa.wa(!0),
        (this.node = null),
        this.view.aa.transaction(function() {
          a.view.aa.createNode(a.nodeType, a.ba);
        }));
    };
    c.prototype.Ym = function(a) {
      this.ba.lineWidth = this.view.Zn(a);
    };
    c.prototype.je = function(a, b) {
      Ef.prototype.je.call(this, a, b);
      this.ba[b ? "fillStyle" : "strokeStyle"] = a;
    };
    c.prototype.bg = function(a, b) {
      Ef.prototype.bg.call(this, a, b);
      b = b ? "fillStyle" : "strokeStyle";
      var d = ec(this.ba[b], a);
      this.log("oldColour=%s+opacity %s = %s", this.ba[b], a, d);
      this.ba[b] = d;
    };
    c.prototype.Ad = function() {
      return this.zD;
    };
    c.prototype.hd = function(a, b) {
      this.ba[a] = b;
    };
    c.prototype.Mg = function() {
      return this.ba;
    };
    c.prototype.vf = function(a, b) {
      "defaultLineWidth" === a && this.Ym(b);
    };
    return c;
  })();
  var Gf = (function() {
    function c(a, b, d) {
      var c = this;
      this.view = a;
      this.ba = b;
      this.hB = d;
      this.state = "none";
      this.scale = 1;
      this.log = A.create("ImageStamp");
      this.Qa = document.createElement("img");
      this.url = this.Qa.src = b.url;
      "scale" in this.ba &&
        ((this.scale = this.ba.scale), delete this.ba.scale);
      O.ep(this.Qa.src, function(a) {
        "width" in c.ba && ((c.scale = c.ba.width / a), delete c.ba.width);
      });
    }
    c.prototype.Ad = function() {
      return "imagestamp";
    };
    c.prototype.xd = function() {
      this.log("Entering ImageStampBehaviour");
      this.view.Jb("move");
    };
    c.prototype.Ac = function() {
      this.log("Leaving ImageStampBehaviour");
      this.view.la();
    };
    c.prototype.ob = function(a, b, d) {
      this.Qa.complete &&
        ((a -= (this.Qa.width / 2) * this.scale),
        (b -= (this.Qa.height / 2) * this.scale));
      return this.view.ob(new F(a, b), d);
    };
    c.prototype.Ab = function(a, b, d) {
      var c = this;
      this.log("onMouseDown type %s", d.type);
      var f = this.ob(a, b, d);
      this.view.aa.transaction(function() {
        c.view.aa.createNode(
          "ImageNode",
          ic({}, c.ba, {
            url: c.url,
            layer: c.view.Zc,
            matrix: new pc(f.x, f.y).multiply(new rc(c.scale, c.scale)),
          })
        );
      });
      this.hB ||
        (this.log("MultiStamp not set; return to pick mode."), this.view.ub());
      return !0;
    };
    c.prototype.Ib = function(a, b, d) {
      this.Qa.complete || this.log("Don't draw; image not loaded.");
      var c = this.ob(a, b, d);
      this.view.scrollIntoView(a, b);
      var f = this;
      this.view.la(function(a) {
        var b = a.globalAlpha;
        a.globalAlpha = 0.5;
        a.drawImage(
          f.Qa,
          c.x,
          c.y,
          f.Qa.width * f.scale,
          f.Qa.height * f.scale
        );
        a.globalAlpha = b;
      });
      return !0;
    };
    c.prototype.Wb = function() {
      return !0;
    };
    c.prototype.ke = function(a) {
      "cancel" === a && (this.view.ub(), this.view.Pc.ta("goto-toolbar"));
    };
    return c;
  })();
  var Hf = (function() {
    function c(a) {
      var b = this;
      this.view = a;
      this.state = "none";
      this.start = new F(0, 0);
      this.fw = this.ew = 0;
      this.log = A.create("PanTool");
      this.Nu = function(a) {
        a ? b.view.Jb("grabbing") : b.view.Jb("not-allowed");
      };
      this.Bc = new Ee(a);
    }
    c.prototype.xd = function() {
      this.log("Entering PanToolBehaviour");
      this.view.ha.pa("allowScroll", this.Nu);
    };
    c.prototype.Ac = function() {
      this.log("Leaving PanToolBehaviour");
      this.view.ha.removeListener("allowScroll", this.Nu);
    };
    c.prototype.sb = function(a) {
      return this.Bc.sb(a);
    };
    c.prototype.Pt = function(a) {
      return new F(a.pageX, a.pageY);
    };
    c.prototype.Ab = function(a, b, d) {
      this.log("onMouseDown type %s", d.type);
      if (!this.view.ha.get("allowScroll"))
        return this.log("Scrolling disabled."), !0;
      if (this.view.DA(d)) {
        var c = new Ef(this.view);
        this.view.Za(c);
        return c.Ab(a, b, d);
      }
      this.state = "dragging";
      this.start = this.Pt(d);
      this.ew = this.view.Cb;
      this.fw = this.view.Db;
      return !0;
    };
    c.prototype.Ib = function(a, b, d) {
      if ("dragging" !== this.state) return !1;
      a = this.Pt(d);
      b = this.fw + a.y - this.start.y;
      this.view.Cb = this.ew + a.x - this.start.x;
      this.view.Db = b;
      this.view.ud();
      this.view.la();
      return !0;
    };
    c.prototype.Wb = function() {
      this.state = "none";
      return !0;
    };
    c.prototype.aq = function(a, b, d, c) {
      if (!this.view.ha.get("allowZoom"))
        return this.log("Zooming is disabled."), !1;
      this.log("onMouseWheel(%s, %s, %s)", a, b, d);
      this.view.vw(0 > d.y ? 1 / 1.1 : 1.1, a, b);
      c.stopPropagation();
      c.preventDefault();
      return !0;
    };
    c.prototype.ke = function(a) {
      "cancel" === a && this.view.ub();
    };
    c.prototype.Ad = function() {
      return "pan";
    };
    return c;
  })();
  function If(c) {
    var a;
    void 0 === a && (a = "");
    if (!c) throw a || "Assertion failed";
  }
  function Jf(c) {
    return (
      "object" === typeof c &&
      "[object Array]" === Object.prototype.toString.apply(c)
    );
  }
  function Kf(c) {
    return "string" === typeof c;
  }
  function Lf(c) {
    return "number" === typeof c;
  }
  function Mf(c) {
    return "object" === typeof c;
  }
  var Nf = A.create("CONFIG"),
    Of = (function() {
      var c;
      if (
        document.currentScript &&
        (c = document.currentScript.getAttribute("src"))
      )
        return c;
      if (!document.getElementsByTagName) return "";
      c = document.getElementsByTagName("script");
      if (0 === c.length) return "";
      c = c[c.length - 1];
      return void 0 !== c.getAttribute.length
        ? c.src
        : c.getAttribute("src") || "";
    })(),
    Pf = {
      autoGroup: !1,
      adaptiveBrushWidth: !1,
      adaptiveLineWidth: !1,
      angleArcs: 0,
      allowCrop: !1,
      allowSelectBox: "auto",
      allowResize: !0,
      allowTextInShape: !0,
      allowPointerEvents: !0,
      allowSystemClipboard: !0,
      allowScroll: !0,
      allowZoom: !0,
      autoPickTool: !0,
      autoPickToolText: !0,
      autoSnap: 0,
      background: "clear",
      backgroundImage: null,
      broadcastMouse: !1,
      confine: "none",
      collaborationServer: "wss://zwibbler.com/socket2",
      clickToDrawShapes: !1,
      clipToPage: !0,
      debug: !1,
      debugOutlineColour: "red",
      defaultArrowStyle: "simple",
      defaultArrowSize: 15,
      defaultArrowXOffset: null,
      defaultItalic: !1,
      defaultBold: !1,
      defaultBrushColour: q.Oa,
      defaultBrushWidth: 10,
      defaultFillStyle: "#e0e0e0",
      defaultFont: "Arial",
      defaultFontSize: 20,
      defaultLineWidth: 2,
      defaultPaperSize: "none",
      defaultRoughness: 0,
      defaultRoundRectRadius: 10,
      defaultSmoothness: "smooth",
      defaultStrokeStyle: q.Oa,
      defaultText: "Lorum ipsum dolor",
      defaultTextBackground: q.Ue,
      defaultTextAlign: "left",
      defaultTextDecoration: "none",
      defaultTextFillStyle: q.Oa,
      defaultTextStrokeStyle: q.Oa,
      defaultTextLineWidth: 0,
      defaultZoom: 1,
      drawShapeStyle: "box",
      fastDraw: !0,
      fonts: ["Arial", "Times New Roman"],
      gridBlocks: 10,
      gridColour: "#cccccc",
      gridSpacing: 20,
      imageFolder: "$SCRIPT",
      iPadNoScrollText: !1,
      keyBringToFront: "Home",
      keyCancel: "ESC",
      keyCopy: "Ctrl+C,\u2318+C",
      keyCurveTool: "C",
      keyCut: "Ctrl+X,\u2318+X,Shift+Delete",
      keyDelete: "Delete,Backspace",
      keyDown: "Down,Ctrl+Down",
      keyDuplicate: "Ctrl+D",
      keyEnter: "Enter",
      keyGroup: "Ctrl+G",
      keyLeft: "Left,Ctrl+Left",
      keyLineTool: "L",
      keyMoveDown: "PageDown",
      keyMoveUp: "PageUp",
      keyNext: "Down,Right",
      keyNextPage: "Shift+PageDown",
      keyPaste: "Ctrl+V,\u2318+V,Shift+Insert",
      keyPrevious: "Left,Up",
      keyPreviousPage: "Shift+Pageup",
      keyRedo: "Ctrl+Shift+Z,\u2318+Shift+Z,Ctrl+Y",
      keyRight: "Right,Ctrl+Right",
      keySelectNone: "ESC",
      keySelectAll: "Ctrl+A",
      keySendToBack: "End",
      keyUndo: "Ctrl+Z,\u2318+Z",
      keyUngroup: "Ctrl+Shift+G",
      keyUp: "Up,Ctrl+Up",
      keyZoomIn: "+,Shift+=",
      keyZoomNormal: "=",
      keyZoomOut: "-",
      keyZoomToPage: "F4",
      keyZoomToWidth: "Shift+F4",
      language: "en",
      latency: 0,
      leaveTextToolOnBlur: !1,
      maximumZoom: 0,
      magnet: !0,
      minimumZoom: 0,
      multilineText: !1,
      nudge: 10,
      outsidePageColour: "#808080",
      pageBorderColour: "rbga(0,0,0,0.0)",
      pageInflation: 20,
      pagePlacement: "centre",
      pageSelectorDiv: "",
      pageShadow: !0,
      pageView: !1,
      pasteOffset: 10,
      pasteOffsetX: 0,
      pasteOffsetY: 0,
      persistent: !1,
      pixelsPerUnit: 1,
      preciseNudge: 1,
      readOnly: !1,
      scrollbars: !0,
      setFocus: !0,
      scrollbarHandleColour: "auto",
      showArrowTool: !0,
      showBackgroundSelector: !1,
      showBrushTool: !0,
      showCircleTool: !0,
      showColourPanel: !0,
      showCopyPaste: !0,
      showCurveTool: !0,
      showDebug: !1,
      showFontNameProperty: !0,
      showFontSizeProperty: !0,
      showHints: !0,
      showImageSelector: !1,
      showImageTool: !1,
      showLineTool: !0,
      showMathTool: !1,
      showMoveToFrontBack: !1,
      showPageSelector: !1,
      showPageSelectorControls: !0,
      showPickTool: !0,
      showPropertyPanel: !1,
      showRoundRectTool: !1,
      showRuler: !1,
      showShapeBrushTool: !1,
      showSloppinessProperty: !0,
      showSmoothnessProperty: !0,
      showSquareTool: !0,
      showTextTool: !0,
      showToolbar: !0,
      showUndoRedo: !0,
      showOwnPointer: !0,
      showOtherPointers: !0,
      simulateGestures: !1,
      singleStrokeBrush: !1,
      sloppy: !1,
      snap: 0,
      spotHighlightColour: "rgba(0,0,0,0.2)",
      spotHighlightZIndex: 1,
      symmetry: 0,
      textMode: "interactive",
      toolbarButtonSize: 50,
      touchRadius: 0,
      useTouch: "auto",
      units: "",
      viewMargin: [0, 0, 0, 0],
      zoomOnResize: !1,
      colourPalette: "auto",
      colourPicker: "wheel",
      drawCircleStyle: "box",
      enableArrowKeysNudge: !1,
      showKeyboardHelp: !0,
      showMenu: !1,
    },
    Qf = {},
    Rf;
  for (Rf in Pf) Qf[Rf.toLowerCase()] = Rf;
  var Sf = (function(c) {
    function a(a, d) {
      a = c.call(this, a, Pf, d) || this;
      a.Ud = "";
      "" === a.Ud && a.set("imageFolder", a.options.imageFolder);
      "auto" === a.options.useTouch &&
        Nf(
          "Detected touch support: %s",
          "ontouchstart" in window || "onmsgesturechange" in window
        );
      Nf("Detect clipboard support: %s", a.Dp());
      return a;
    }
    __extends(a, c);
    a.prototype.Mp = function() {
      var a = Mb(),
        d;
      for (d in a) this.set(d, a[d]);
    };
    a.Ew = function(a) {
      return a.toLowerCase() in Qf;
    };
    a.prototype.st = function(a, d) {
      "debug" === a && (a = "showDebug");
      if ("defaultZoom" === a) {
        if (
          "page" !== d &&
          "width" !== d &&
          !Lf(d) &&
          ((d = parseFloat(d)), isNaN(d))
        ) {
          Nf(
            "Error: Config option %s must be a number or 'page' or 'width'",
            a
          );
          return;
        }
      } else if ("allowSelectBox" !== a)
        if ("imageFolder" === a) {
          var b = this.mA();
          "" === b
            ? ((this.Ud = d.replace("$SCRIPT/", "")),
              (this.Ud = this.Ud.replace("$SCRIPT", "")))
            : (this.Ud = d
                .replace("$SCRIPT/", "$SCRIPT")
                .replace("$SCRIPT", b));
          "" !== this.Ud &&
            "/" !== this.Ud[this.Ud.length - 1] &&
            (this.Ud += "/");
          Nf(
            "scriptPath=%s imageFolder=%s, result:%s",
            b,
            this.options.imageFolder,
            this.Ud
          );
        } else if ("broadcastMouse" === a)
          "true" === d ? (d = !0) : "false" === d && (d = !1);
        else if ("viewMargin" === a) {
          b = null;
          if (Kf(d)) {
            b = [];
            var c = 0;
            for (d = d.split(","); c < d.length; c++) b.push(parseFloat(d[c]));
          } else "number" === typeof d ? (b = [d, d, d, d]) : Jf(d) && (b = d);
          b &&
            (1 === b.length
              ? b.push(b[0], b[0], b[0])
              : 2 === b.length && b.push(b[0], b[1]));
          d = b || this.options.viewMargin;
        } else if ("string" === typeof d)
          if ("number" === typeof this.options[a]) {
            if (((d = parseFloat(d)), isNaN(d))) {
              console.log(Error("Config option " + a + " expects a number"));
              return;
            }
          } else if (
            "boolean" === typeof this.options[a] ||
            ("useTouch" === a && "auto" !== d)
          )
            d = "1" === d || "true" === d || "" === d;
      return { name: a, value: d };
    };
    a.prototype.mA = function() {
      var a = Of;
      var d = a.lastIndexOf("/");
      return (a = 0 <= d ? a.substr(0, d + 1) : "");
    };
    a.prototype.NE = function() {
      return this.options.showBrushTool;
    };
    a.prototype.QE = function() {
      return this.options.showPropertyPanel;
    };
    a.prototype.OE = function() {
      return this.options.showColourPanel;
    };
    a.prototype.PE = function() {
      return this.options.showDebug;
    };
    a.prototype.RE = function() {
      return this.options.showToolbar;
    };
    a.prototype.fb = function(a) {
      return this.get(a);
    };
    a.prototype.get = function(a) {
      switch (a) {
        case "useTouch":
          return this.Ci();
        default:
          return c.prototype.get.call(this, a);
      }
    };
    a.prototype.Ci = function() {
      return "auto" === this.options.useTouch
        ? "ontouchstart" in window || "onmsgesturechange" in window
        : this.options.useTouch;
    };
    a.prototype.nz = function() {
      if ("auto" === this.options.allowSelectBox) {
        var a = this.Ci(),
          d = document.documentElement.offsetHeight,
          c = window.innerHeight,
          f = !a || (a && 0 < c - d + 50);
        Nf(
          "Allowing select box: %s (useTouch=%s, documentHeight=%s, windowHeight=%s)",
          f,
          a,
          d,
          c
        );
        return f;
      }
      return this.options.allowSelectBox;
    };
    a.prototype.Cz = function() {
      var a = ("" + this.options.defaultSmoothness).toLowerCase();
      return "sharpest" === a
        ? 0
        : "sharper" === a
        ? 0.1
        : "sharp" === a
        ? 0.2
        : "smoothest" === a
        ? 0.5
        : 0.3;
    };
    a.prototype.fp = function(a) {
      return 0 === a.indexOf("http:") ||
        0 === a.indexOf("https:") ||
        0 === a.indexOf("/")
        ? a
        : this.Ud + a;
    };
    a.prototype.nc = function(a) {
      return u.nc(this.get(a));
    };
    a.prototype.vx = function(a) {
      function b(a) {
        for (var b = "", d = 0; d < a.length; d++) {
          var c = a.charAt(d);
          b = c === c.toUpperCase() ? b + ("-" + c.toLowerCase()) : b + c;
        }
        return b;
      }
      var c = this,
        f = { keyCut: 1, keyCopy: 1, keyPaste: 1 },
        h;
      for (h in this.options)
        this.options.hasOwnProperty(h) &&
          (0 !== h.indexOf("key") ||
            f[h] ||
            a.map(this.options[h], b(h).substr(4)));
      this.pa("update", function(d, c, e) {
        0 !== d.indexOf("key") ||
          f[d] ||
          ((d = b(d).substr(4)),
          Nf("Unmap keyboard %s=>%s", e, d),
          a.ED(e, d),
          Nf("Map keyboard %s=>%s", c, d),
          a.map(c, d));
      });
      this.pa("allowSystemClipboard", function() {
        var b = !c.Dp();
        b
          ? Nf("Not using system clipboard. Mapping cut/copy/paste keys")
          : Nf("Using system clipboard. Ignore keyCut/keyCopy/keyPaste.");
        a.map(c.options.keyCut, "cut", b);
        a.map(c.options.keyCopy, "copy", b);
        a.map(c.options.keyPaste, "paste", b);
      });
    };
    a.prototype.Ht = function() {
      return "radial" === this.get("drawCircleStyle") ||
        "radial" === this.get("drawShapeStyle")
        ? "circle"
        : "rectangle";
    };
    a.prototype.pi = function(a) {
      var b = a;
      0 < this.options.maximumZoom &&
        (a = Math.min(a, this.options.maximumZoom));
      0 < this.options.minimumZoom &&
        (a = Math.max(a, this.options.minimumZoom));
      a !== b && Nf("Zoom restricted to %s", a);
      return a;
    };
    a.prototype.Dp = function() {
      var a = document;
      return (
        this.get("allowSystemClipboard") &&
        void 0 !== a.oncopy &&
        void 0 !== a.oncut &&
        void 0 !== a.onpaste
      );
    };
    return a;
  })(Pb);
  var Tf = (function() {
    function c() {
      this.zf = 0;
      this.fn = null;
    }
    c.prototype.request = function(a, b) {
      var d = this;
      this.tx = a;
      this.fn = b;
      0 === this.zf &&
        (this.zf = window.requestAnimationFrame(function(a) {
          d.zf = 0;
          d.fn && d.fn(d.tx, a);
        }));
    };
    c.prototype.cancel = function() {
      0 !== this.zf && (window.cancelAnimationFrame(this.zf), (this.zf = 0));
    };
    return c;
  })();
  var Uf = A.create("MOVE"),
    Yf = (function() {
      function c(a, b, d, c) {
        var e = this;
        this.Ca = a;
        this.node = d;
        this.ci = c;
        this.Iu = this.Ku = "";
        this.ur = !0;
        this.placeholder = this.fv = null;
        this.ro = "column";
        this.Op = function() {};
        this.kg = new Kd();
        this.co = new Tf();
        this.we = null;
        Uf("Moving node: %s istool=%s", d.id, c);
        this.Ca.Ne(!0);
        this.Ca.Jb("move");
        this.oB = d.da.style.position || "";
        this.xm = d.da.style.left || "";
        this.zm = d.da.style.top || "";
        this.ym = d.da.parentElement;
        this.pB = u(d.da).Ce("zIndex");
        this.nB = d.da.nextElementSibling;
        this.ay = null !== d.da.getAttribute("confine") || 1 === c;
        this.gi = d.sj();
        this.rB = d.parent;
        this.Ku = d.da.style.pointerEvents;
        this.Iu = d.da.style.cursor;
        this.qB = d.parent ? d.parent.fe(d) : -1;
        d.da.style.cursor = "move";
        var h = this.Ca.oe(b.wb, b.xb, !0);
        this.start = h;
        if (2 === c) {
          a = Vf(this.node.da);
          var k = this.Ca.oe(a.x, a.y, !0);
          Uf("Moving fixture from %s; tl=%s", a, k);
          a.x = k.x;
          a.y = k.y;
          this.node.rect = a;
          this.gi = this.node.rect;
        }
        "IFRAME" === d.da.tagName && (this.ur = !1);
        d.da.style.position = "absolute";
        this.ur && this.Ca.tk.appendChild(d.da);
        d.da.style.zIndex = "1";
        this.VA = u(d.da).Rl();
        1 === c &&
          ((this.node.rect = new G(
            h.x - this.node.da.offsetWidth / 2,
            h.y - this.node.da.offsetHeight / 2,
            this.node.da.offsetWidth,
            this.node.da.offsetHeight
          )),
          (this.gi = this.node.rect),
          (d.da.style.pointerEvents = "none"),
          (this.Op = function() {
            Uf("Got image load event from dragged tool");
            e.XB(h);
          }),
          this.node.da.addEventListener("load", this.Op, !0));
        this.rect = this.node.sj();
        d.da.classList.add("dragging");
        this.Ca.aa.wc(function(a) {
          var b = a.rect;
          Rc(a) && (b = a.sj());
          e.kg.ss(b, a.id);
        });
        this.Ib(h.x, h.y, b);
      }
      c.prototype.xd = function() {
        Uf("Entering DragHTMLBehaviour");
      };
      c.prototype.sb = function(a) {
        if (this.Ca.ha.get("allowZoom") && "gesturestart" === a.type) {
          Uf("Switch to default behaviour");
          var b = new Ef(this.Ca);
          this.Ca.Za(b);
          b.sb(a);
          return !0;
        }
        return !1;
      };
      c.prototype.Ac = function() {
        this.Ca.nn(new J());
        this.Ca.Ne(!1);
        this.Ca.Jb("default");
        this.node.da.style.left = this.xm;
        this.node.da.style.top = this.zm;
        this.node.da.style.position = this.oB;
        this.node.da.style.zIndex = this.pB;
        this.node.da.style.transform = "";
        this.node.da.style.pointerEvents = this.Ku;
        this.node.da.style.cursor = this.Iu;
        this.node.da.classList.remove("dragging");
        this.ym
          ? this.ur && this.ym.insertBefore(this.node.da, this.nB)
          : u(this.node.da).remove();
        this.we && this.we.classList.remove("drop");
        Uf("DragHTMLBehaviour.leave()");
        this.uv();
        this.node.da.removeEventListener("load", this.Op, !0);
        1 === this.ci && this.node.Sa();
        this.co.cancel();
      };
      c.prototype.by = function(a, b) {
        b = Vf(b);
        b.transform(this.Ca.$l());
        a.x < b.x && (a.x = b.x);
        a.y < b.y && (a.y = b.y);
      };
      c.prototype.Ib = function(a, b, d) {
        var c = this;
        this.co.request(d, function(a) {
          var b = c.Ca.oe(a.pageX, a.pageY),
            d = b.cr(c.start),
            e = c.gi;
          c.rect.x = e.x + d.x;
          c.rect.y = e.y + d.y;
          c.ay && c.ym && c.by(c.rect, c.ym);
          c.Ca.ha.get("magnet") &&
            ((d = c.kg.jD(c.rect, c.node.id)),
            (c.rect.x += d.x),
            (c.rect.y += d.y));
          (d = "view" === c.Ca.ha.get("confine")) && c.rect.Rs(c.Ca.Ub());
          c.node.da.style.left = c.rect.x + "px";
          c.node.da.style.top = c.rect.y + "px";
          c.node.nk(Wf(c.rect, c.VA), new J());
          e = new pc(c.rect.x - c.gi.x, c.rect.y - c.gi.y);
          1 !== c.ci && c.Ca.nn(e);
          c.Ca.la();
          e = Vf(c.node.da);
          e = c.bz(e);
          null !== e ? c.kx(e, a.pageX, a.pageY) : c.uv();
          a = c.node.ia("$component");
          var f = null,
            r = Vf(c.node.da);
          u(c.Ca.kf()).query('[z-drop-accept="' + a + '"]', function(a) {
            var b = Vf(a),
              d = Math.min(r.Mi(), b.Mi());
            a !== c.node.da && b.bv(r) > 0.7 * d && (f = a);
          });
          a = f;
          a !== c.we &&
            (c.we && c.we.classList.remove("drop"),
            (c.we = a),
            c.we && c.we.classList.add("drop"));
          c.node.da.dispatchEvent(
            new CustomEvent("zwibbler-dragging", {
              cancelable: !0,
              detail: {
                node: c.node.id,
                Fy: c.rect.x,
                Gy: c.rect.y,
                width: c.rect.width,
                height: c.rect.height,
              },
            })
          );
          d || c.Ca.scrollIntoView(b.x, b.y);
        });
        return !0;
      };
      c.prototype.bz = function(a) {
        var b = this.node.ia("$component"),
          d = null;
        u(this.Ca.kf()).query("[container-for]", function(c) {
          Xf(c, b) && Vf(c).bv(a) > 0.5 * a.Mi() && (d = c);
        });
        return d;
      };
      c.prototype.kx = function(a, b, d) {
        var c = u(a).Ce("flex-direction");
        this.ro = c.startsWith("row")
          ? "row"
          : c.startsWith("col")
          ? "column"
          : "none";
        c = this.ro;
        var f = 0,
          h = null,
          k,
          l = new F(b, d),
          n = null;
        if ("none" === c) b = a.lastElementChild;
        else {
          for (k = a.firstElementChild; k; ) {
            if (!k.classList.contains("placeholder")) {
              n = Vf(k);
              n = new F(n.x, n.y).bc(l);
              if (!h || n < f) (h = k), (f = n);
              n = k;
            }
            k = k.nextElementSibling;
          }
          h &&
            h === n &&
            ((n = Vf(h)),
            ("column" === c && d > n.y) ||
              ("row" === c && b > n.x + n.width / 2)) &&
            (h = null);
          b = h;
        }
        if (this.placeholder && this.placeholder.parentNode) {
          if (a !== this.placeholder.parentElement || b !== this.fv)
            (this.fv = b), a.insertBefore(this.placeholder, b);
        } else
          (d = {}),
            (d.flex =
              "column" === this.ro
                ? "0 0 " + this.node.da.clientHeight + "px"
                : "0 0 " + this.node.da.clientWidth + "px"),
            (this.placeholder = u("div", { class: "placeholder" }).Ya(d).da),
            a.insertBefore(this.placeholder, b);
      };
      c.prototype.uv = function() {
        this.placeholder &&
          this.placeholder.parentNode &&
          this.placeholder.parentNode.removeChild(this.placeholder);
      };
      c.prototype.Wb = function(a, b, d) {
        this.co.cancel();
        Uf("onMouseUp()");
        if (1 === this.ci && !Vf(this.Ca.canvas.first).Lc(d.pageX, d.pageY))
          return Uf("Dropped nowhere!"), this.Ca.Za(new Ef(this.Ca)), !0;
        a = "static";
        var c = 0,
          f = 0,
          h = 0;
        b = this.Ca.aa.Be();
        if (this.placeholder && this.placeholder.parentElement)
          if (
            ("flex" !== u(this.placeholder.parentElement).Ce("display") &&
              (a = "absolute"),
            (d = this.Ca.aa.cp(this.placeholder)))
          ) {
            b = d;
            c = this.placeholder;
            f = this.placeholder.parentElement.firstElementChild;
            for (h = 0; f && f !== c; )
              f.getAttribute("nid") && h++, (f = f.nextElementSibling);
            h = Math.min(h, d.children.length - 1);
            Uf("Use placeholder, place at %s:%s", b.id, h);
            c = this.rect.x - d.rect.x;
            f = this.rect.y - d.rect.y;
          } else Uf("Placeholder is not in a NID node");
        else
          Uf("No placeholder; add to root"),
            (a = "absolute"),
            (h = b === this.rB ? this.qB : -1),
            (c = this.rect.x),
            (f = this.rect.y);
        this.Ca.Za(new Ef(this.Ca));
        this.node.da.dispatchEvent(
          new CustomEvent("zwibbler-drop", {
            cancelable: !0,
            detail: { node: this.node.id, FE: b.id, EE: h, Fy: c, Gy: f },
          })
        )
          ? (this.Ca.aa.$a(),
            0 === this.ci || 2 === this.ci
              ? this.Ca.aa.ed(this.node.id, b.id, h)
              : b &&
                1 === this.ci &&
                ((d = this.node.rb()),
                "absolute" === a &&
                  ((d["style.position"] = "absolute"),
                  (d["style.left"] = c + "px"),
                  (d["style.top"] = f + "px")),
                this.Ca.aa.createNode("HTMLNode", d, b.id, h),
                this.Ca.qb(),
                this.Ca.We(this.node)),
            "absolute" === a
              ? this.Ca.aa.vb([this.node.id], {
                  "style.left": c + "px",
                  "style.top": f + "px",
                  "style.position": a,
                })
              : this.Ca.aa.vb([this.node.id], {
                  "style.left": "",
                  "style.top": "",
                  "style.position": "",
                }),
            this.we &&
              (a = this.Ca.za.Nt(this.we)) &&
              (a = this.Ca.za.Sl(a)) &&
              a.element &&
              P.xc(a.element, "drop", this.node.Sh(null)),
            this.Ca.aa.wa(!1))
          : Uf("DragHTML was cancelled by element");
        return !0;
      };
      c.prototype.XB = function(a) {
        this.node.rect = new G(
          a.x - this.node.da.offsetWidth / 2,
          a.y - this.node.da.offsetHeight / 2,
          this.node.da.offsetWidth,
          this.node.da.offsetHeight
        );
        this.gi = this.node.rect;
      };
      return c;
    })();
  function Vf(c) {
    c = u(c).oc();
    return new G(c.left, c.top, c.width, c.height);
  }
  function Wf(c, a) {
    c = c.clone();
    c.x += a.left;
    c.width -= a.left + a.right;
    c.y += a.top;
    c.height -= a.top + a.bottom;
    return c;
  }
  var Zf = A.create("Background"),
    ag = (function() {
      function c(a) {
        this.ha = a;
        this.rect = new G(0, 0, 0, 0);
        this.Zi = null;
        this.background = q.Ue;
        this.update = !0;
        this.qu = null;
        this.ru = 1;
        this.Fa = [];
        this.canvas = document.createElement("canvas");
        this.cn = "";
      }
      c.prototype.hC = function() {
        this.update = !0;
      };
      c.prototype.DC = function(a) {
        a !== this.background && ((this.background = a), (this.update = !0));
      };
      c.prototype.kk = function(a) {
        a !== this.Zi && ((this.Zi = a), (this.update = !0));
      };
      c.prototype.BC = function(a) {
        this.Fa = $f(a, function(a, d) {
          return a.Td() - d.Td();
        });
        this.update = !0;
      };
      c.prototype.lA = function(a, b, d) {
        (this.update = !0),
          this.ZB(b, d),
          (this.qu = a),
          (this.ru = d),
          (this.update = !1);
        if (this.cn) return this.cn;
        var c;
        this.canvas.width &&
          this.canvas.height &&
          (c = a.createPattern(this.canvas, "no-repeat"));
        return c || "#ff00ff";
      };
      c.prototype.ZB = function(a, b) {
        this.rect = a;
        Zf("Regenerate background for %s, %s", a, b);
        if ("grid" === this.background || 0 !== this.Fa.length || this.Zi) {
          this.cn = "";
          Math.floor(a.width * b) !== Math.floor(this.canvas.width) &&
            (this.canvas.width = a.width * b);
          Math.floor(a.height * b) !== Math.floor(this.canvas.height) &&
            (this.canvas.height = a.height * b);
          var d = this.canvas.getContext("2d");
          d.setTransform(b, 0, 0, b, -a.x * b, -a.y * b);
          (b = q.Il(this.background))
            ? ((d.fillStyle = b.toString()),
              d.fillRect(a.x, a.y, a.width, a.height))
            : "grid" === this.background
            ? this.EB(d, a)
            : "clear" === this.background &&
              d.clearRect(a.x, a.y, a.width, a.height);
          if (this.Zi)
            try {
              this.Zi(d, a.x, a.y, a.width, a.height);
            } catch (e) {
              console.warn("Error in custom background function: ", e);
            }
          a = 0;
          for (b = this.Fa; a < b.length; a++) b[a].la(d);
        } else this.cn = "clear" === this.background ? q.Ue : this.background;
      };
      c.prototype.EB = function(a, b) {
        function d(d) {
          var c = Math.ceil(b.x / d) * d,
            e = Math.ceil(b.y / d) * d,
            f = Math.floor(b.right() / d) * d,
            h = Math.floor(b.bottom() / d) * d;
          for (a.beginPath(); c <= f; c += d)
            a.moveTo(c, b.y), a.lineTo(c, b.bottom());
          for (; e <= h; e += d) a.moveTo(b.x, e), a.lineTo(b.right(), e);
          a.stroke();
        }
        var c = this.ha.get("gridBlocks"),
          f = this.ha.get("gridSpacing"),
          h = (c || 1) * f;
        a.strokeStyle = this.ha.get("gridColour");
        a.fillStyle = q.Xc;
        a.fillRect(b.x, b.y, b.width, b.height);
        a.lineWidth = 0.5;
        d(f);
        c && ((a.lineWidth = 2), d(h));
      };
      return c;
    })();
  function $f(c, a) {
    for (var b = [], d = 0; d < c.length; d++) b.push(d);
    b.sort(function(b, d) {
      var e = a(c[b], c[d]);
      return 0 !== e ? e : b - d;
    });
    for (var e = [], f = 0; f < b.length; f++) (d = b[f]), e.push(c[d]);
    return e;
  }
  function bg(c) {
    for (var a = [], b = 0; b < c.length; b++)
      a.push(
        String.fromCharCode(c.charCodeAt(b) ^ "zwibbler3".charCodeAt(b % 9))
      );
    return a.join("");
  }
  for (
    var cg = bg(">2$-"),
      dg = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116],
      eg = [],
      fg = 0;
    fg < dg.length;
    fg++
  )
    eg.push(String.fromCharCode(dg[fg]));
  var gg = CanvasRenderingContext2D.prototype[eg.join("")],
    ig = (function() {
      function c(a, b, d, e, f, h, k, l, n, r, v, w) {
        var x = this;
        this.yd = a;
        this.canvas = b;
        this.aa = d;
        this.Pc = e;
        this.ha = f;
        this.language = h;
        this.za = k;
        this.xa = l;
        this.tk = n;
        this.ce = r;
        this.mC = v;
        this.ww = w;
        this.qe = "none";
        this.zk = this.yk = 0;
        this.scale = 1;
        this.code = this.Db = this.Cb = 0;
        this.Zd = new G(0, 0, 0, 0);
        this.Fq = new Ac();
        this.hk = this.ik = this.Sm = !0;
        this.Eq = new J();
        this.selection = [];
        this.mh = [];
        this.Zc = "default";
        this.sa = {};
        this.Fp = this.Ef = this.zl = !1;
        this.ee = 1;
        this.dl = {};
        this.Ni = null;
        this.ho = "";
        this.xe = this.Ja = null;
        this.Kr = 4;
        this.Lr = 3 * this.Kr;
        this.ng = this.gj = null;
        this.Ch = !1;
        this.kc = this.uc = this.$c = q.Oa;
        this.Kh = 5;
        this.Wh = "";
        this.Tc = 0;
        this.Vp = new G(0, 0, 0, 0);
        this.Wp = new G(0, 0, 0, 0);
        this.Ra = { Mb: !1, lc: !1, ko: !1, x: 100, y: 100 };
        this.im = new nb();
        this.bm = [];
        this.xl = 0;
        this.kg = new Kd();
        this.Un = null;
        this.Jc = new G(0, 0, 0, 0);
        this.log = A.create("VIEW");
        this.fu = 0;
        this.su = new G(0, 0, 0, 0);
        this.ma = this.canvas.get(0);
        this.canvas.ax();
        this.Ef = !0 === f.get("pageView");
        this.background = new ag(f);
        this.$B();
        this.ra = new Ef(this);
        this.xa.add(function() {
          x.ra && x.ra.Ac && x.ra.Ac();
          x.request.Ri();
          x.Bd.Ri();
          x.Fc.Ri();
          x.ra = {};
          x.aa.Sa();
        });
        this.Bd = new Gd(this.xa, !0);
        this.Bd.Pd(this.canvas.get(0).canvas.parentNode);
        this.Fc = new Gd(this.xa, !1);
        this.Fc.Pd(this.canvas.get(0).canvas.parentNode);
        this.ha.pa("scrollbarHandleColour", function(a) {
          x.Bd.Qv(a);
          x.Fc.Qv(a);
        });
        var y = this;
        this.request = new Fe();
        this.request.canvas = this.canvas.get(0).canvas;
        this.request.ha = this.ha;
        this.request.pa("reformat", function(a) {
          x.log("Node %s requests reformat", a);
          x.aa.zd(a) && (x.log("   Reformatting... zoom=%s", x.qe), x.aa.$h(a));
          x.update();
          (a = x.aa.Fb(a)) && "background" === a.zc() && x.zg();
          x.ri();
          x.za.ta("resource-loaded");
        });
        this.request.pa("redraw", function(a) {
          x.log("Node %s requests redraw", a);
          x.la();
        });
        this.request.pa("convert-dom-request", function(a, b) {
          y.za.ta("convert-dom-request", b, a);
        });
        this.request.pa("mouseevent", function(a) {
          x.iw.handleEvent(a);
        });
        f.pa("useTouch", function() {
          x.ng = null;
          x.Lr = 3 * y.Kr;
        });
        this.Fc.pa("scroll", function(a) {
          y.Db = -a * y.scale;
          y.za.ta("scroll");
          x.aa.Cq(x.Ub());
          x.nr();
          y.la();
        });
        this.Bd.pa("scroll", function(a) {
          y.Cb = -a * y.scale;
          y.la();
          x.aa.Cq(x.Ub());
          x.nr();
          y.za.ta("scroll");
        });
        this.zg();
        this.aa = this.oh(d);
        this.ha.pa("update", function(a, b) {
          x.vf(a, b);
        });
        this.xa.addEventListener(
          document,
          "webkitfullscreenchange",
          function() {
            dc() &&
              (x.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."),
              (x.requestAnimationFrame = c.prototype.requestAnimationFrame));
          }
        );
        a = document;
        a.fonts &&
          this.xa.addEventListener(a.fonts, "loadingdone", function() {
            x.log("Font loading done, redraw now.");
            x.la();
          });
        this.Nd(0.5, 0, 0, -30, "", "rotate");
        this.Nd(0, 0, 0, 0, "", "scale");
        this.Nd(1, 0, 0, 0, "", "scale");
        this.Nd(1, 1, 0, 0, "", "scale");
        this.Nd(0, 1, 0, 0, "", "scale");
        this.Nd(0.5, 0, 0, 0, "", "scale");
        this.Nd(1, 0.5, 0, 0, "", "scale");
        this.Nd(0.5, 1, 0, 0, "", "scale");
        this.Nd(0, 0.5, 0, 0, "", "scale");
        this.ra = this.ub();
      }
      c.prototype.Zn = function(a) {
        this.ha.get("adaptiveBrushWidth") && (a /= this.scale);
        return a;
      };
      c.prototype.uA = function(a, b) {
        var d,
          c = !1;
        for (d = 0; d < a.Nm.length; d++) {
          var f = a.Nm[d];
          f in this.dl &&
            (this.log("Background node has been removed"), (c = !0));
        }
        for (d = 0; d < a.$k.length; d++) {
          f = a.$k[d];
          var h = this.aa.Da(f, !1);
          "background" === h.ia("layer") &&
            (this.log("Background node has been added"), (c = !0));
        }
        for (d = 0; d < a.rn.length; d++)
          (f = a.rn[d]),
            (h = this.aa.Da(f, !1)),
            "background" === h.ia("layer")
              ? (this.log("Background node has been changed"), (c = !0))
              : f in this.dl &&
                (this.log("Node removed from background layer"), (c = !0));
        (this.aa.Be().ia("background") || this.ho) !== this.ho && (c = !0);
        c && this.zg();
        a.$k.length && this.za.ta("nodes-added", a.$k, {}, b);
        a.rn.length && this.za.ta("nodes-changed", a.rn, {}, b);
        a.Nm.length && this.za.ta("nodes-removed", a.Nm, a.ba, b);
      };
      c.prototype.requestAnimationFrame = function(a) {
        a();
      };
      c.prototype.mz = function() {
        this.log("getActiveLayer() -> %s", Array(this.Tb.entries()));
        return Array.from(this.Tb).join(",");
      };
      c.prototype.Um = function(a) {
        this.log("setActiveLayer(%s)", a);
        a = a.split(",");
        this.Tb = new Set();
        for (var b = 0; b < a.length; b++) this.Tb.add(a[b]);
        this.Zc = a[0];
        this.qb();
        this.vc();
        this.la();
      };
      c.prototype.rk = function(a, b) {
        this.aa.rk(a, b);
        this.Ug(!1);
        "background" === a && this.zg();
        !b && this.Tb.has(a) && (this.qb(), this.vc());
        this.la();
      };
      c.prototype.oh = function(a) {
        var b = this;
        this.log("setDocument()");
        this.ub();
        this.aa.Sa();
        this.aa = a;
        this.aa.Yu = function(a, d, c, k, l) {
          b.Bm(a, d, c, k, l);
        };
        this.scale = 1;
        this.Db = this.Cb = 0;
        this.selection = [];
        this.xe = this.Ja = null;
        this.Tc += 1;
        this.Zd = new G(0, 0, 0, 0);
        this.Fq = new Ac(this.Zd);
        this.Eq = new J();
        this.Wh = "";
        this.Tb = new Set();
        this.Tb.add("default");
        this.uc = q.Xc;
        this.kc = this.ha.fb("defaultBrushColour");
        this.$c = this.ha.fb("defaultStrokeStyle");
        this.sa.lineWidth = this.ha.fb("defaultLineWidth");
        this.sa.roughness = this.ha.fb("defaultRoughness");
        this.sa.sloppiness = 0.5;
        this.sa.fontName = this.ha.fb("defaultFont");
        this.sa.fontSize = this.ha.fb("defaultFontSize");
        this.sa.bold = this.ha.fb("defaultBold");
        this.sa.italic = this.ha.fb("defaultItalic");
        this.sa.smoothness = 0.3;
        this.sa.textFillStyle = this.ha.fb("defaultTextFillStyle");
        this.sa.textStrokeStyle = this.ha.fb("defaultTextStrokeStyle");
        this.sa.textLineWidth = this.ha.fb("defaultTextLineWidth");
        this.sa.textDecoration = this.ha.fb("defaultTextDecoration");
        this.sa.textAlign = this.ha.fb("defaultTextAlign");
        this.Kh = this.ha.get("defaultBrushWidth");
        var d = this.Zf(0);
        this.Cb = -d.x;
        this.Db = -d.y;
        this.ud();
        this.aa.Wq = this.ha.get("spotHighlightColour");
        this.aa.dn = this.ha.get("spotHighlightZIndex");
        this.aa.format(this.ma, this.request);
        this.Wp = new G(0, 0, 0, 0);
        this.Vp = new G(0, 0, 0, 0);
        "none" !== this.qe
          ? this.$d(this.qe)
          : (this.$d(this.ha.get("defaultZoom")), this.la());
        return a;
      };
      c.prototype.vf = function(a, b) {
        var d = !1;
        switch (a) {
          case "allowResize":
            this.Oi();
            this.la();
            break;
          case "defaultBrushColour":
            this.kc = b;
            break;
          case "defaultFillStyle":
            this.uc = this.sa.fillStyle = b;
            break;
          case "defaultStrokeStyle":
            this.$c = b;
            this.sa.strokeStyle = b;
            break;
          case "defaultLineWidth":
            this.sa.lineWidth = b;
            break;
          case "defaultRoughness":
            this.sa.roughness = b;
            break;
          case "defaultFont":
            this.sa.fontName = b;
            break;
          case "defaultBold":
            this.sa.bold = b;
            break;
          case "defaultTextAlign":
            this.sa.textAlign = b;
            break;
          case "defaultTextDecoration":
            this.sa.textDecoration = b;
            break;
          case "defaultItalic":
            this.sa.italic = b;
            break;
          case "defaultFontSize":
            this.sa.fontSize = b;
            break;
          case "defaultTextFillStyle":
            this.sa.textFillStyle = b;
            break;
          case "defaultTextStokeStyle":
            this.sa.textStrokeStyle = b;
            break;
          case "defaultTextLineWidth":
            this.sa.textLineWidth = b;
            break;
          case "defaultBrushWidth":
            this.Kh = b;
            break;
          case "defaultZoom":
            this.$d(b);
            break;
          case "pageView":
            this.Ef = b;
            d = !0;
            break;
          case "pagePlacement":
          case "pageInflation":
          case "viewMargin":
            this.$d(this.qe);
            break;
          case "snap":
          case "background":
          case "gridSpacing":
          case "gridBlocks":
          case "gridColour":
            "background" === a &&
              ((d = this.aa.Be()), this.aa.Jd([d.id], "background", b));
            this.Ni = null;
            this.background.hC();
            this.zg();
            d = !0;
            this.Ug(!1);
            break;
          case "pageShadow":
          case "outsidePageColour":
          case "clipToPage":
            d = !0;
            break;
          case "readOnly":
            !0 === b && (this.ub(), this.qb(), this.vc(), (d = !0));
            this.aa.wi(b);
            break;
          case "spotHighlightColour":
            this.aa.Wq = b;
            d = !0;
            break;
          case "spotHighlightZIndex":
            this.aa.dn = b;
            d = !0;
            break;
          case "showRuler":
          case "pixelsPerUnit":
          case "units":
            d = !0;
            break;
          case "allowScroll":
          case "scrollbars":
            (d = !0), this.ud();
        }
        this.ra.vf && this.ra.vf(a, b);
        d && this.la();
      };
      c.prototype.Df = function(a, b) {
        this.log("Set default %s=%s", a, b);
        this.sa[a] = jc(this.sa[a], b);
        switch (a) {
          case "fillStyle":
            this.kc = this.uc = b;
            break;
          case "strokeStyle":
            this.kc = this.$c = b;
        }
      };
      c.prototype.$d = function(a) {
        a !== this.qe && this.log("Zooming to: %s (scale %s)", a, this.scale);
        var b = this.hf(!0),
          d = b.width - 20,
          c = this.aa.xA() || this.Ef;
        this.qe = a;
        c ||
          "number" === typeof a ||
          this.log(
            "WARNING: Zoom to page/width but document size has not been set."
          );
        if ("number" === typeof a) this.scale = a;
        else if ("none" === a || this.aa.empty())
          "page" === a ? this.Oe(this.Zf(), !1, !1) : (this.scale = 1);
        else {
          if ("page" === a) {
            var f = this.Yf();
            this.Oe(f, "centre" === this.ha.get("pagePlacement"), !0);
            this.qe = c ? a : this.scale;
            this.ra.Hd && this.ra.Hd();
            return !0;
          }
          "width" === a &&
            ((f = this.Yf()),
            (this.scale = d / f.width),
            (this.Cb = -f.x * this.scale + b.x),
            (this.Db = -f.y * this.scale + b.y),
            this.log(
              "RECT=%s scale=%s tx=%s ty=%s",
              f,
              this.scale,
              this.Cb,
              this.Db
            ),
            (this.qe = a));
        }
        0 >= this.scale && (this.scale = 1);
        c || (this.qe = this.scale);
        this.ud();
        this.la();
        this.ra.Hd && this.ra.Hd();
        return !0;
      };
      c.prototype.oe = function(a, b, d) {
        void 0 === d && (d = !1);
        a = this.$l().apply(a, b);
        d || (a = this.ob(a, 0));
        return a;
      };
      c.prototype.Nh = function(a, b) {
        return this.$l()
          .inverse()
          .apply(a, b);
      };
      c.prototype.kB = function(a, b, d) {
        return a
          .cc()
          .multiply(this.$l())
          .apply(b, d);
      };
      c.prototype.Hf = function(a) {
        return this.oe(a.pageX, a.pageY, !0);
      };
      c.prototype.ke = function(a, b) {
        if (u.qf(b.target, b))
          this.log("Target is text entry -- ignore key command");
        else if ((this.ra.ke && this.ra.ke(a, b), !this.vA(a, b))) {
          switch (a) {
            case "next-page":
              this.Cc(this.aa.bb + 1);
              break;
            case "previous-page":
              this.Cc(this.aa.bb - 1);
              break;
            case "zoom-to-page":
              this.ha.get("allowZoom") && this.$d("page");
              break;
            case "zoom-to-width":
              this.ha.get("allowZoom") && this.$d("width");
          }
          b.preventDefault();
          b.stopPropagation();
        }
      };
      c.prototype.ki = function(a) {
        var b = a instanceof ee ? a.Bb.target : a.target;
        var d = this.ha.get("readOnly");
        d =
          (b = b ? u(b) : null) &&
          (!b.matches(
            ".zwibbler-canvas-holder,.zwibbler-canvas-holder *, [z-drag-tool], [z-drag-tool] *, [z-fixture] *"
          ) ||
            b.matches(".zwibbler-passthrough, .zwibbler-passthrough *") ||
            (d && b.matches(".zwibbler-dom-node,.zwibbler-dom-node *")));
        a instanceof ee &&
          ((d = d && !a.getData("not-passthrough") && !this.Fp) ||
          "down" !== a.type
            ? "gesturestart" === a.type && (d = d && this.Ee(a.wb, a.xb))
            : a.setData("not-passthrough", !0));
        return d;
      };
      c.prototype.Ee = function(a, b) {
        a = this.oe(a, b);
        return this.Ub().Lc(a.x, a.y);
      };
      c.prototype.DA = function(a) {
        return a.target instanceof HTMLElement
          ? u(a.target).matches("[z-fixture], [z-fixture] *")
          : !1;
      };
      c.prototype.Jx = function() {
        this.fu = new Date().getTime() + 200;
      };
      c.prototype.$B = function() {
        function a(a) {
          d.log(a.type);
        }
        function b(a) {
          a.stopPropagation();
          a.preventDefault();
        }
        var d = this,
          c = this,
          f = new ne(this.yd, {
            xs: this.ha.get("allowPointerEvents"),
            tn: !0,
          });
        this.iw = f;
        this.xa.add(function() {
          f.Sa();
        });
        f.pa("gesturestart", function(a) {
          c.log("GestureStart");
          d.ki(a) ||
            (c.ra.sb && !1 !== c.ra.sb(a)
              ? (a.stopPropagation(), a.preventDefault())
              : c.log("Pass to browser"));
        });
        f.pa("gesturechange", function(a) {
          c.ra.sb && !1 !== c.ra.sb(a)
            ? (a.stopPropagation(), a.preventDefault())
            : c.log("Pass to browser");
        });
        f.pa("gestureend", function(a) {
          c.log("GestureEnd");
          c.ra.sb && !1 !== c.ra.sb(a)
            ? (a.stopPropagation(), a.preventDefault())
            : c.log("Pass to browser");
        });
        var h = "onpointerdown" in window,
          k = "ongesturestart" in window,
          l = "onmousedown" in window;
        this.log("Have TouchEvents: %s", "ontouchstart" in window);
        this.log("Have PointerEvents: %s", h);
        this.log("Have GestureEvents: %s", k);
        this.log("Have MouseEvents: %s", l);
        h &&
          !this.ha.get("allowPointerEvents") &&
          this.log("Configuration does not allow PointerEvents");
        var n = !1,
          r;
        f.pa("down", function(a) {
          c.log(a.toString());
          d.ki(a) ||
            ((r = c.Hf(a)),
            (n = !0),
            d.za.Ag && d.za.Ag.Ab(r.x, r.y, a)
              ? (a.stopPropagation(), a.preventDefault())
              : (c.ra.Ab &&
                  !1 !== c.ra.Ab(r.x, r.y, a) &&
                  (a.stopPropagation(), a.preventDefault()),
                d.zl || u.qf(a.target) || d.Pc.ta("goto-canvas"),
                (d.zl = !1)));
        });
        f.pa("move", function(a) {
          d.ki(a) ||
            (n &&
              0 === a.buttons &&
              (c.log("MISSED POINTERUP! Fixing."),
              a.setData("not-passthrough", !1),
              v(a)),
            (r = c.Hf(a)),
            d.za.Ag && d.za.Ag.Ib(r.x, r.y, a)
              ? (a.stopPropagation(), a.preventDefault())
              : c.ra.Ib &&
                !1 !== c.ra.Ib(r.x, r.y, a) &&
                (a.stopPropagation(), a.preventDefault()));
        });
        var v = function(a) {
          if (!d.ki(a) || d.ra instanceof Yf)
            (n = !1),
              c.log(a.toString()),
              (r = c.Hf(a)),
              d.za.Ag && d.za.Ag.Wb(r.x, r.y, a)
                ? (a.stopPropagation(), a.preventDefault())
                : c.ra.Wb &&
                  !1 !== c.ra.Wb(r.x, r.y, a) &&
                  (a.stopPropagation(), a.preventDefault());
        };
        f.pa("up", v);
        f.pa("tap", function(a) {
          c.log(a.toString());
          c.ra.Zp &&
            ((r = c.Hf(a)),
            !1 !== c.ra.Zp(r.x, r.y, a) &&
              (a.stopPropagation(), a.preventDefault()));
        });
        f.pa("drag", function(a) {
          c.log(a.toString());
          !d.ki(a) &&
            c.ra.$p &&
            ((r = c.Hf(a)),
            !1 !== c.ra.$p(r.x, r.y, a) &&
              (a.stopPropagation(), a.preventDefault()));
        });
        f.pa("doubletap", function(a) {
          c.log("doubletap: " + a.toString());
          a.startTime < d.fu
            ? c.log("ignoring doubletap: " + a.toString())
            : (c.log("doubletap: " + a.toString()),
              c.ra.Yp &&
                ((r = c.Hf(a)),
                !1 !== c.ra.Yp(r.x, r.y, a) &&
                  (a.stopPropagation(), a.preventDefault())));
        });
        this.xa.addEventListener(this.yd, "pointerleave", function(a) {
          c.ra.Su &&
            ((r = c.Hf(a)),
            !1 !== c.ra.Su(r.x, r.y, a) &&
              (a.stopPropagation(), a.preventDefault()));
        });
        this.xa.addEventListener(this.yd, "contextmenu", function(a) {
          var b = c.Hf(a);
          c.ra.Ou && !1 !== c.ra.Ou(b.x, b.y, a)
            ? (a.stopPropagation(), a.preventDefault())
            : c.log("Pass contextmenu to browser");
        });
        this.xa.addEventListener(this.yd, "mouseenter", b);
        this.xa.addEventListener(this.yd, "mouseleave", b);
        this.xa.addEventListener(this.yd, "mouseover", b);
        this.xa.addEventListener(this.yd, "mouseout", b);
        !window.parent && this.ha.get("setFocus") && this.yd.focus();
        f.pa("wheel", function(a) {
          if (!d.ki(a)) {
            var b = a.Dz();
            r = c.Hf(a);
            if (!c.ra.aq || !1 === c.ra.aq(r.x, r.y, b, a.Bb)) {
              if (a.ctrlKey && d.ha.get("allowZoom"))
                d.vw(0 > b.y ? 1 / 1.1 : 1.1, r.x, r.y);
              else {
                var e = c.Yf(),
                  f = c.Ub(),
                  h = 20 / d.scale;
                b.x &&
                  c.Bd.ou() &&
                  ((f.x += 0 < b.x ? h : -h),
                  f.right() > e.right() && (f.x -= f.right() - e.right()),
                  f.x < e.x && (f.x = e.x));
                b.y &&
                  c.Fc.ou() &&
                  ((f.y += 0 < b.y ? h : -h),
                  f.bottom() > e.bottom() && (f.y -= f.bottom() - e.bottom()),
                  f.y < e.y && (f.y = e.y));
                c.Oe(f);
              }
              a.stopPropagation();
              a.preventDefault();
            }
          }
        });
        this.xa.addEventListener(this.yd, "drop", a);
        this.xa.addEventListener(this.yd, "dragenter", a);
        this.xa.addEventListener(this.yd, "dragleave", a);
      };
      c.prototype.Yj = function(a) {
        this.log("Received clipboard event: %s", a.type);
        if (u.qf(a.target))
          this.log("   ignored due to being in a " + a.target.tagName);
        else if (this.ha.get("allowSystemClipboard"))
          if (null === a.clipboardData)
            this.log("Ignored; clipboardData is null.");
          else {
            var b = this;
            switch (a.type) {
              case "copy":
              case "cut":
                if (!this.$t()) break;
                this.log("Cut to system clipboard.");
                var d = this.xg(!0, this.Rc(!1));
                a.clipboardData.setData("application/zwibbler", d);
                a.preventDefault();
                "cut" === a.type && this.bj();
                break;
              case "paste":
                if (this.ha.get("readOnly"))
                  this.log("Ignore paste; we are in readOnly mode.");
                else
                  for (
                    this.log(
                      "There are %s items on the clipboard",
                      a.clipboardData.items.length
                    ),
                      d = 0;
                    d < a.clipboardData.items.length;
                    d++
                  ) {
                    var c = a.clipboardData.items[d];
                    this.log("Item [%s] type is %s", d, c.type);
                    if (b.nq(c)) {
                      a.preventDefault();
                      break;
                    } else if ("application/zwibbler" === c.type) {
                      this.log("Pasting from system clipboard");
                      c.getAsString(function(a) {
                        b.ak(a);
                      });
                      a.preventDefault();
                      break;
                    }
                  }
            }
          }
        else this.log("   ignored due to allowSystemClipboard setting.");
      };
      c.prototype.kf = function() {
        return this.yd;
      };
      c.prototype.nq = function(a, b, d) {
        var c = this;
        if (0 !== a.type.indexOf("image/")) return !1;
        a instanceof Blob || (a = a.getAsFile());
        if ("number" === typeof b && "number" === typeof d) {
          b = this.oe(b, d);
          var f = b.x;
          var h = b.y;
        }
        if (!1 === this.za.xc("paste", a, f, h))
          this.log("paste of file is cancelled by external app.");
        else {
          var k = new FileReader();
          k.readAsDataURL(a);
          k.onloadend = function() {
            c.Tp({ url: k.result }, f, h);
          };
          return !0;
        }
      };
      c.prototype.vA = function(a, b) {
        if (!this.Ra.Mb) return !1;
        var d = 0,
          c = 0,
          f = this.ha.get("nudge");
        switch (a) {
          case "right":
            d = f;
            break;
          case "left":
            d = -f;
            break;
          case "down":
            c = f;
            break;
          case "up":
            c = -f;
            break;
          case "enter":
            this.Ra.lc = !this.Ra.lc;
            var h = this.Ra.lc ? "down" : "up";
        }
        if (d || c)
          (h = this.hf(!1)),
            (this.Ra.x += d),
            (this.Ra.x = Math.max(this.Ra.x, 0)),
            (this.Ra.x = Math.min(h.width, this.Ra.x)),
            (this.Ra.y += c),
            (this.Ra.y = Math.max(this.Ra.y, 0)),
            (this.Ra.y = Math.min(h.height, this.Ra.y)),
            this.la(),
            (h = "move");
        return h
          ? (b.preventDefault(),
            b.stopPropagation(),
            this.la(),
            (c = this.Jc),
            (d = this.Ra.x + c.x - window.pageXOffset),
            (a = this.Ra.y + c.y - window.pageYOffset),
            (c = this.oe(d, a)),
            this.log("Simulate a %s at (%s,%s)", h, d, a),
            (b = new ee(
              h,
              d,
              a,
              d,
              a,
              new Date().getTime(),
              new Date().getTime(),
              b.target,
              b,
              0,
              {},
              0,
              0,
              0,
              !1,
              !1,
              !1
            )),
            ("down" !== h && "tap" !== h) ||
              !this.ra.Ab ||
              this.ra.Ab(c.x, c.y, b),
            "move" === h && this.ra.Ib && this.ra.Ib(c.x, c.y, b),
            ("up" !== h && "tap" !== h) ||
              !this.ra.Wb ||
              this.ra.Wb(c.x, c.y, b),
            !0)
          : !1;
      };
      c.prototype.Qq = function(a) {
        void 0 === a && (a = !1);
        this.Ra.Mb = !0;
        this.Ra.lc = !1;
        this.Ra.ko = a;
        this.log("Showing keyboard cursor, caret=%s", a);
        this.la();
      };
      c.prototype.fD = function(a) {
        this.Ra.Mb = !0;
        this.Ra.ko = !1;
        if (0 < this.selection.length) {
          this.log("showKeyboardCursorAndStartMoving()");
          this.Ra.lc = !0;
          var b = this.Zd.Qd();
          this.Ra.x = b.x;
          this.Ra.y = b.y;
          this.ub();
          this.Za(
            new Be(
              this,
              new ve(pe, this.selection[0].Na(), this.selection[0].ya),
              !1,
              b.x - 4,
              b.y - 4,
              fe(a, a),
              !1
            )
          );
        }
        this.la();
      };
      c.prototype.cu = function() {
        this.Ra.Mb &&
          (this.log("Hiding keyboard cursor"), (this.Ra.Mb = !1), this.la());
      };
      c.prototype.JA = function(a) {
        var b = this.Jc,
          d = this.Fc.Lg();
        var c = a.pageX - b.x;
        a = a.pageY - b.y;
        b = this.hf(!1);
        return this.ng && c > b.width - this.ng.width - d && a < this.ng.height;
      };
      c.prototype.qp = function(a) {
        return "number" === typeof a
          ? a || this.ha.get("snap") || 0
          : a.altKey
          ? 0
          : this.ha.get("snap") || 0;
      };
      c.prototype.ob = function(a, b) {
        var d = this.qp(b);
        0 < d
          ? ((b = Math.round(a.x / d) * d), (a = Math.round(a.y / d) * d))
          : ((b = a.x), (a = a.y));
        return new F(b, a);
      };
      c.prototype.Rd = function(a, b) {
        void 0 === b && (b = this.Rc(!1));
        this.aa.$a();
        this.aa.Rd(b, a);
        this.aa.wa();
      };
      c.prototype.setProperty = function(a, b) {
        var d = this.Rc(!0);
        this.sa[a] = b;
        if (d.length) {
          this.aa.$a();
          this.aa.Jd(d, a, b);
          if ("fillStyle" === a)
            for (var c = 0; c < d.length; c++) {
              var f = this.aa.Da(d[c], !1);
              f &&
                (this.log("nodeType=%s closed=%s", f.type(), f.ia("closed")),
                "PathNode" === f.type() &&
                  !1 === f.ia("closed") &&
                  this.aa.Jd([d[c]], "strokeStyle", b));
            }
          this.aa.wa();
        }
        0 < this.selection.length &&
        "lineWidth" === a &&
        "BrushNode" === this.selection[0].type()
          ? (this.Kh = b)
          : "textFillStyle" === a && (this.sa.textFillStyle = b);
      };
      c.prototype.hd = function(a, b) {
        this.ra.hd && this.ra.hd(a, b);
        this.ra.je &&
          ("strokeStyle" === a
            ? this.ra.je(b, !1)
            : "fillStyle" === a && this.ra.je(b, !0));
      };
      c.prototype.Ol = function() {
        return this.sa.fillStyle;
      };
      c.prototype.yj = function() {
        return this.sa.strokeStyle;
      };
      c.prototype.Oq = function(a, b) {
        this.log("setSelectionOpacity(%s, fill=%s)", a, b);
        var d = this.Rc(!0);
        this.aa.$a();
        b = b ? "fillStyle" : "strokeStyle";
        for (var c = 0; c < d.length; c++) {
          var f = d[c],
            h = this.aa.Da(f);
          h &&
            (h = h.ia(b)) &&
            ((h = ec(h, a)),
            this.aa.Jd([f], b, h),
            this.log("   set %s of %s to %s", b, f, h));
        }
        this.aa.wa();
      };
      c.prototype.group = function() {
        var a = this;
        this.aa.transaction(function() {
          a.aa.group(a.Rc(!1));
        });
      };
      c.prototype.Bi = function() {
        var a = this;
        this.aa.transaction(function() {
          a.aa.Bi(a.Rc(!1));
        });
      };
      c.prototype.bj = function() {
        var a = this;
        this.aa.transaction(function() {
          a.aa.ac(a.Rc(!1));
        });
      };
      c.prototype.qb = function(a) {
        void 0 === a && (a = !1);
        var b = !1;
        if (0 < this.selection.length) {
          b = 0;
          for (var d = this.selection; b < d.length; b++) {
            var c = d[b];
            Rc(c) && c.da.classList.remove("zwibbler-selected");
          }
          this.Tc += 1;
          this.selection.length = 0;
          b = !0;
        }
        null !== this.xe &&
          (this.za.ta("selected-edit-handle", null, null), (b = !0));
        this.Ja &&
          (this.log("Clear edit node."), (this.xe = this.Ja = null), (b = !0));
        b && a && (this.vc(), this.la());
      };
      c.prototype.We = function(a, b) {
        void 0 === b && (b = !0);
        this.ph(null);
        if (a.Tc !== this.Tc && this.Tb.has(a.zc())) {
          this.selection.push(a);
          a.Tc = this.Tc;
          Rc(a) &&
            (a.da.classList.add("zwibbler-selected"),
            this.log("Added to selection: %s", a.id));
          if (a.om()) {
            for (var d = a.parent, c = 0; c < d.children.length; c++) {
              var f = d.nb(c);
              Pc(f) && this.We(f);
            }
            Pc(d) && this.We(d);
          }
          if ("GroupNode" === a.type())
            for (d = 0; d < a.children.length; d++)
              (f = a.nb(d)), Pc(f) && this.We(f);
          if (this.ha.get("autoGroup") && b)
            for (b = 0, a = this.aa.qz(a); b < a.length; b++) this.We(a[b], !1);
        }
      };
      c.prototype.selectNodes = function(a) {
        this.qb();
        for (var b = 0; b < a.length; b++)
          a[b].ia("locked") || "PageNode" === a[b].type() || this.We(a[b]);
        this.vc();
      };
      c.prototype.wC = function(a, b) {
        var d = this.aa.Fb(a, !1);
        d
          ? d.mf() &&
            (d.lu()
              ? (d !== this.Ja && this.ph(d),
                this.log("Select edit handle %s", b),
                (this.xe = b),
                this.za.ta("selected-edit-handle", a, b))
              : this.log("selectEditHandle: That handle is not selectable."))
          : this.log("selectEditHandle: nodeid %s does not exist.", a);
      };
      c.prototype.vC = function(a) {
        a = this.aa.gA(a);
        for (var b = 0; b < a.length; b++) this.We(a[b]);
      };
      c.prototype.vc = function() {
        this.Oi();
        this.za.Fg("selected-nodes");
        this.la();
      };
      c.prototype.rq = function() {
        for (var a = 0, b = this.bm; a < b.length; a++) {
          var d = b[a];
          "" !== d.Rg && this.im.release(d.Rg);
        }
        this.bm.length = 0;
      };
      c.prototype.Nd = function(a, b, d, c, f, h, k, l) {
        this.bm.push({
          type: h,
          position: new F(a, b),
          offset: new F(d, c),
          Rg: f,
          Ls: k,
          Yv: l,
        });
        "" !== f && this.im.add(f, f);
      };
      c.prototype.Oi = function() {
        var a;
        this.hk = this.ik = this.Sm = !0;
        var b = !1;
        this.mh.length = 0;
        if (0 !== this.selection.length) {
          for (a = 0; a < this.selection.length; a++) {
            var d = this.selection[a];
            if ("GroupNode" !== d.type()) {
              0 === a ? (this.Zd = d.rect.clone()) : this.Zd.th(d.rect);
              this.Zd.th(d.rect);
              if (d.ia("lockSize") || 5 === (d.lb & 5)) this.Sm = !1;
              d.ia("lockRotation") && (this.ik = !1);
              d.ia("lockAspectRatio") && (b = !0);
              d.ia("lockPosition") && (this.hk = !1);
            }
          }
          this.Fq =
            1 === this.selection.length
              ? this.selection[0].Jl()
              : new Ac(this.Zd);
          if (1 < this.selection.length) {
            d = new J();
            a = null;
            var c = this.Zd;
          } else (a = this.selection[0]), (c = a.ya), (d = a.Na());
          var f = !1;
          a && a.mf() && a.Pq() && (this.ph(a), (f = !0));
          for (var h = this.za.Rh(), k = 0, l = this.bm; k < l.length; k++) {
            var n = l[k];
            if (n.Yv && !n.Yv(h)) return;
            if ("scale" === n.type) {
              if (!this.ha.get("allowResize") || !this.Sm) continue;
              if (
                "scale" === n.type &&
                ((0 !== n.position.x && 1 !== n.position.x) ||
                  (0 !== n.position.y && 1 !== n.position.y)) &&
                b
              )
                continue;
              if (f) continue;
            } else if ("rotate" === n.type && (!this.ik || f)) continue;
            this.mh.push(ye(n, c, d));
          }
          if (this.ik && a && a.ia("rotationHandles"))
            for (b = a.ia("rotationHandles"), a = 0; a < b.length; a += 4)
              (f = new F(b[a + 2], b[a + 3])),
                this.mh.push(new ue(qe, d, c, f));
        }
      };
      c.prototype.Mx = function() {
        for (var a = 0, b = 0; b < this.selection.length; b++)
          b !== a && (this.selection[a] = this.selection[b]),
            this.aa.zd(this.selection[b].id) && (a += 1);
        this.selection.length !== a && (this.selection.length = a);
        this.Ja &&
          !this.aa.zd(this.Ja.id) &&
          ((this.Ja = null),
          null !== this.xe && this.za.ta("selected-edit-handle", null, null),
          (this.xe = null));
      };
      c.prototype.gv = function(a, b) {
        return this.selection.length && this.Fq.Lc(a, b);
      };
      c.prototype.$t = function() {
        return 0 !== this.selection.length || null !== this.Ja;
      };
      c.prototype.dc = function() {
        var a = this.selection.concat();
        this.Ja && !this.Sg(this.Ja) && a.push(this.Ja);
        return a;
      };
      c.prototype.fA = function(a) {
        if (0 === a.length) return new F(0, 0);
        for (var b = a[0].rect.clone(), d = 1; d < a.length; d++)
          b.th(a[d].rect);
        return b.Qd();
      };
      c.prototype.Ot = function(a) {
        for (var b = [], d = 0; d < a.length; d++) b.push(a[d].id);
        return b;
      };
      c.prototype.$l = function() {
        var a = this.Jc.clone();
        this.ha.get("showRuler") && ((a.x += 20), (a.y += 20));
        return new J()
          .multiply(new rc(1 / this.scale, 1 / this.scale))
          .multiply(new pc(-this.Cb, -this.Db))
          .multiply(new pc(-a.x, -a.y));
      };
      c.prototype.Rc = function(a) {
        var b = this.dc();
        a || (b = this.aa.ll(b));
        return this.Ot(b);
      };
      c.prototype.So = function(a) {
        for (var b = null, d = 0; d < a.length; d++) {
          var c = this.aa.Fb(a[d]);
          c &&
            0 == (c.lb & 2) &&
            (null === b ? (b = c.rect.clone()) : b.th(c.rect));
        }
        null === b && (b = new G(0, 0, 0, 0));
        return b;
      };
      c.prototype.update = function(a, b) {
        void 0 === a && (a = !1);
        if (this.aa.format(this.ma, this.request) || a) this.Oi(), this.la(b);
      };
      c.prototype.zg = function() {
        var a = this,
          b = this.ha.get("background");
        this.Ni && (b = this.Ni.ia("background") || b);
        this.background.DC(b);
        this.ho = b;
        this.dl = {};
        var d = [];
        this.aa.wc(function(b) {
          "background" === b.zc() &&
            a.aa.pm("background") &&
            (d.push(b), (a.dl[b.id] = !0), b.hg(!0));
        });
        this.background.BC(d);
      };
      c.prototype.ef = function(a, b, d, c, f, h, k, l, n) {
        this.Ni !== this.aa.Be() && ((this.Ni = this.aa.Be()), this.zg());
        k *= b;
        var e = this.background.lA(a, new G(d, c, f, h), k);
        a.save();
        a.scale(1 / k, 1 / k);
        a.translate(-l * b, -n * b);
        a.fillStyle = e;
        a.fillRect(0, 0, f * k, h * k);
        a.restore();
        a.Qw = function() {
          a.strokeStyle = e;
          a.lineWidth *= k;
          a.scale(1 / k, 1 / k);
          a.translate(-l * b, -n * b);
          a.stroke();
        };
        a.Ii = e;
      };
      c.prototype.Jy = function(a, b) {
        var d = this.aa.np();
        a.beginPath();
        a.fillStyle = q.Xc;
        this.ha.get("pageShadow") &&
          ((a.shadowOffsetX = 3),
          (a.shadowOffsetY = 3),
          (a.shadowBlur = 5),
          (a.shadowColor = "rgba(0,0,0,1.0)"));
        a.rect(0, 0, d.width, d.height);
        a.fill();
        a.shadowColor = q.Ue;
        a.shadowBlur = 0;
        a.shadowOffsetX = 0;
        a.shadowOffsetY = 0;
        a.strokeStyle = this.ha.get("pageBorderColour");
        a.stroke();
        var c = this.Ub().clone();
        c.ku(d);
        this.ef(
          a,
          b,
          c.x,
          c.y,
          c.width,
          c.height,
          this.scale,
          0 > c.x ? c.x : -c.x * this.scale,
          0 > c.y ? c.y : -c.y * this.scale
        );
      };
      c.prototype.kk = function(a) {
        a
          ? this.log("Setting a custom background function.")
          : this.log("Clearing custom background function.");
        this.background.kk(a);
        this.zg();
      };
      c.prototype.Iy = function(a) {
        if (this.Ra.Mb) {
          var b = this.Ra.x,
            d = this.Ra.y,
            c = this.Gt();
          a.save();
          a.setTransform(c, 0, 0, c, 0, 0);
          a.beginPath();
          this.Ra.ko
            ? (a.moveTo(b - 3, d - 10),
              a.lineTo(b + 3, d - 10),
              a.moveTo(b - 3, d + 10),
              a.lineTo(b + 3, d + 10),
              a.moveTo(b, d - 10),
              a.lineTo(b, d + 10))
            : (a.moveTo(b, d - 3),
              a.lineTo(b, d - 15),
              a.moveTo(b, d + 3),
              a.lineTo(b, d + 15),
              a.moveTo(b - 3, d),
              a.lineTo(b - 15, d),
              a.moveTo(b + 3, d),
              a.lineTo(b + 15, d));
          this.Ra.lc && this.ma.arc(b, d, 8, 0, 2 * Math.PI, !1);
          a.lineWidth = 2;
          a.strokeStyle = q.Oa;
          a.stroke();
          a.restore();
        }
      };
      c.prototype.Hd = function(a, b) {
        this.canvas.ig(a, b);
        a = this.ha.get("showRuler") ? 20 : 0;
        b = u(this.canvas.first).oc();
        var d = u(this.canvas.first.parentElement).oc(),
          c = this.canvas.width,
          f = this.canvas.height,
          h = b.left - d.left;
        d = b.top - d.top;
        this.Fc.moveTo(h + c - 20, d + a);
        this.Fc.ig(20, f - 20);
        this.Bd.moveTo(h + a, d + f - 20);
        this.Bd.ig(c - 20, 20);
        this.Jc = new G(b.left, b.top, b.width, b.height);
        a = this.canvas.Xo();
        a !== this.ee &&
          ((this.ee = a),
          this.log("Detected DPR change to %s", this.ee),
          this.ra.Hd && this.ra.Hd());
        this.ha.get("zoomOnResize") &&
          (1 > this.scale && this.$d(1),
          (a = this.Yf()),
          (b = this.Ub()),
          (c = !1),
          a.x < b.x && ((b.width += b.x - a.x), (b.x = a.x), (c = !0)),
          a.y < b.y && ((b.height += b.y - a.y), (b.y = a.y), (c = !0)),
          a.x + a.width > b.x + b.width &&
            ((b.width += a.x + a.width - b.x - b.width), (c = !0)),
          a.y + a.height > b.y + b.height &&
            ((b.height += a.y + a.height - b.y - b.height), (c = !0)),
          c && this.Oe(b));
        this.ri();
        this.la();
      };
      c.prototype.ri = function() {
        if (!this.Hp()) {
          var a = this.Yf(),
            b = this.hf(!0);
          b = new G(0, 0, b.width, b.height);
          (a.bd(this.Wp) && b.bd(this.Vp)) ||
            !this.$d(this.qe) ||
            ((this.Wp = a), (this.Vp = b));
        }
      };
      c.prototype.Ms = function(a) {
        if (this.Ef && this.ha.get("clipToPage")) {
          var b = this.aa.np();
          a.save();
          a.beginPath();
          a.rect(0, 0, b.width, b.height);
          a.clip();
        }
        return this.Ef;
      };
      c.prototype.la = function(a) {
        var b = this;
        this.Hp() ||
          this.canvas.fd(0, "main", function(d, c) {
            d.globalAlpha = 1;
            b.dt(d, c, a);
          });
      };
      c.prototype.dt = function(a, b, d) {
        if (!this.za.Lh) {
          var c = this.Ub();
          this.Ef &&
            ((a.fillStyle = this.ha.get("outsidePageColour")),
            a.fillRect(0, 0, this.canvas.width, this.canvas.height));
          a.translate(this.Cb, this.Db);
          a.scale(this.scale, this.scale);
          this.ha.get("showRuler") &&
            a.translate(20 / this.scale, 20 / this.scale);
          var f = new pc(this.Cb, this.Db);
          f = f.multiply(new rc(this.scale, this.scale));
          a.Fi = f;
          a.ZE = this.scale;
          this.Ef
            ? this.Jy(a, b)
            : this.ef(
                a,
                b,
                c.x,
                c.y,
                c.width,
                c.height,
                this.scale,
                this.Cb,
                this.Db
              );
          this.aa.eD();
          f = this.Ms(a);
          this.aa.la(a, c, this.Un);
          this.za.ve && (a.save(), this.za.ve(a), a.restore());
          f && a.restore();
          0 < this.selection.length && (a.save(), this.Ly(a), a.restore());
          this.Ja && this.Ja.hj(a, 1 / this.scale, this.xe);
          "" !== this.Wh &&
            this.ha.get("showHints") &&
            (a.save(),
            (a.font = 15 / this.scale + "px Arial"),
            (a.fillStyle = q.Oa),
            (a.textBaseline = "top"),
            a.fillText(this.Wh, 0, 0),
            a.restore());
          this.Iy(a);
          this.ra.Uu && this.ra.Uu(a);
          d && d(a);
          this.za.xc("draw", a);
          this.ha.get("showRuler") &&
            (a.setTransform(b, 0, 0, b, 0, 0),
            (d = this.ha.get("pixelsPerUnit") * this.scale),
            (c = this.ha.get("units")),
            (a.fillStyle = "#ccc"),
            a.fillRect(0, 0, 20, 20),
            Dd(a, new G(20, 0, this.canvas.width - 20, 20), 0, c, d, -this.Cb),
            Dd(
              a,
              new G(0, 20, 20, this.canvas.height - 20),
              2,
              c,
              d,
              -this.Db
            ));
          a.setTransform(1, 0, 0, 1, 0, 0);
          0 < this.selection.length &&
            this.ng &&
            this.ng.naturalWidth &&
            ((d = this.ng.width),
            a.drawImage(this.ng, this.canvas.width - d - this.Fc.Lg(), 0));
          this.gj &&
            this.gj.complete &&
            this.gj.naturalWidth &&
            ((d = this.gj.naturalWidth),
            a.drawImage(this.gj, this.canvas.width - d - this.Fc.Lg(), 0));
          a.globalAlpha = 1;
          a.setTransform(b, 0, 0, b, 0, 0);
          a.beginPath();
          a.font = "20px Arial";
          d = a.measureText(cg).width;
          b = this.canvas.width / b / d;
          a.scale(b, b);
          a.textBaseline = "top";
          a.lineWidth = 4 / b;
          a.strokeStyle = "rgba(128, 128, 128, 0.1)";
          gg.call(a, cg, 0, 0);
        }
      };
      c.prototype.rv = function(a, b) {
        var d = this;
        this.ha.get("fastDraw")
          ? this.canvas.fd(1, a, function(a) {
              a.translate(d.Cb, d.Db);
              a.scale(d.scale, d.scale);
              d.ha.get("showRuler") && a.translate(20 / d.scale, 20 / d.scale);
              b(a);
            })
          : this.la(b);
      };
      c.prototype.no = function(a) {
        this.ha.get("fastDraw")
          ? this.canvas.fd(1, a, function() {})
          : this.la();
      };
      c.prototype.Ly = function(a) {
        a.lineWidth = 1 / this.scale;
        a.strokeStyle = "#888888";
        a.beginPath();
        for (var b = 0, d = null, c = 0; c < this.selection.length; c++) {
          var f = this.selection[c];
          var h = f.Na();
          f.hidden() ||
            (b++,
            f === this.Ja ||
              Qc(f) ||
              ((f = new K(f.ya)),
              f.transform(h),
              f.wl(a, [3 / this.scale, 3 / this.scale]),
              b++,
              d ? d.th(f.gl(5)) : (d = f.gl(5))));
        }
        if (0 !== b)
          for (
            a.stroke(), h = d ? Math.min(d.width, d.height) : 0, c = 0;
            c < this.mh.length;
            c++
          )
            this.mh[c].la(a, this.im, this.scale, this.Eq, h);
      };
      c.prototype.ph = function(a) {
        this.Ja = a;
      };
      c.prototype.$o = function() {
        return this.Ja;
      };
      c.prototype.nn = function(a) {
        this.Eq = a;
      };
      c.prototype.Sg = function(a) {
        return a.Tc === this.Tc;
      };
      c.prototype.It = function(a, b) {
        for (
          var d = this.ha.get("touchRadius") || this.Lr, c = null, f = 0;
          f < this.mh.length;
          f++
        ) {
          var h = this.mh[f];
          if (h.Hb(this.im, a, b, d, this.scale)) {
            c = h;
            break;
          }
        }
        return c;
      };
      c.prototype.Uc = function() {
        this.mw(!1);
      };
      c.prototype.ne = function() {
        this.mw(!0);
      };
      c.prototype.mw = function(a) {
        if (a ? this.aa.Ye() : this.aa.Ze())
          a ? this.aa.ne() : this.aa.Uc(),
            (a = this.aa.bi),
            this.log("Most recent change page=%s", a),
            a !== this.aa.bb
              ? (this.log("Undo/redo switched page %s->%s", this.aa.bb, a),
                this.Cc(a))
              : this.la(),
            this.Ug(!1);
      };
      c.prototype.Bm = function(a, b, d, c, f) {
        var e = this;
        if (b.length && !a) {
          for (var k = [], l = 0; l < b.length; l++) {
            var n = this.aa.Fb(b[l], !1);
            n && k.push(n);
          }
          this.ha.get("autoPickTool") && this.selectNodes(k);
        } else if (this.selection.length || this.Ja) {
          k = 0;
          this.Tc += 1;
          n = this.aa.bb;
          for (l = 0; l < this.selection.length; l++)
            l !== k && (this.selection[k] = this.selection[l]),
              (this.aa.zd(this.selection[k].id) &&
                this.aa.jf(this.selection[k].id) === n) ||
              this.aa.IA(this.selection[k])
                ? ((this.selection[k].Tc = this.Tc), k++)
                : this.log(
                    "Node no longer exists; removing from selection %s",
                    this.selection[k]
                  );
          this.selection.length !== k && (this.selection.length = k);
          this.Ja &&
            !this.aa.zd(this.Ja.id) &&
            (this.log("EditNode %s no longer exists", this.Ja.id),
            (this.Ja = null),
            null !== this.xe && this.za.ta("selected-edit-handle", null, null),
            (this.xe = null));
          0 !== this.selection.length || this.Ja || this.qb();
          this.vc();
        }
        this.aa.format(this.ma, this.request);
        this.Mx();
        this.Oi();
        this.ri();
        this.ud();
        this.la();
        this.kg.clear();
        this.aa.wc(function(a) {
          5 === (a.lb & 5) && e.kg.ss(a.rect, a.id);
        });
        this.uA({ $k: b, Nm: d, rn: c, ba: f }, a);
        this.Ug(a);
      };
      c.prototype.yo = function() {
        this.xg(!1, this.Rc(!0));
        this.bj();
      };
      c.prototype.xg = function(a, b) {
        b = this.aa.mp(b, !1);
        var d = this.aa.tC(b);
        0 < b.length &&
          (!0 !== a && uf.setItem("clipboard", d),
          this.log("Reset paste offset to 0"),
          (this.zk = this.yk = 0));
        return d;
      };
      c.prototype.duplicate = function() {
        var a = this,
          b = this.Rc(!1),
          d = this.ha.get("pasteOffset"),
          c = d || this.ha.get("pasteOffsetX"),
          f = d || this.ha.get("pasteOffsetY");
        this.aa.transaction(function() {
          a.aa.duplicate(b, new pc(c, f));
        });
      };
      c.prototype.ak = function(a) {
        var b = this;
        if (!a) {
          var d = uf.getItem("clipboard");
          if (d) a = d;
          else return;
        }
        var c = this.ha.get("pasteOffset");
        d = c || this.ha.get("pasteOffsetX");
        c = c || this.ha.get("pasteOffsetY");
        this.yk += d;
        this.zk += c;
        this.log("Using paste offset %s,%s", this.yk, this.zk);
        var f = new pc(this.yk, this.zk);
        this.aa.transaction(function() {
          b.aa.wu(a, f, b.Zc);
        });
      };
      c.prototype.Xm = function(a) {
        "" !== a
          ? ((this.Wh = this.language.get(a)), this.za.ta("hint", this.Wh))
          : ((this.Wh = ""), this.za.ta("hint", ""));
      };
      c.prototype.ub = function() {
        return this.Za(new Ef(this));
      };
      c.prototype.ly = function() {
        return requestAnimationFrame.name.substr(0, 2) + "d";
      };
      c.prototype.Za = function(a) {
        this.ra && this.ra.Ac && this.ra.Ac();
        this.ra = a;
        a.xd && a.xd();
        a.Ad && this.za.ta("tool-changed", a.Ad());
        10 === this.code && 0.25 > this.mC && this.hd("fillStyle", this.ly());
        return a;
      };
      c.prototype.Ph = function() {
        var a = null;
        this.ra.Ad && (a = this.ra.Ad());
        return a;
      };
      c.prototype.fr = function(a) {
        a = new De(this, a);
        this.Za(a);
        return a;
      };
      c.prototype.br = function(a) {
        this.ra instanceof De && this.ra.mD(a);
      };
      c.prototype.vu = function(a, b, d, c) {
        this.Za(new Df(this, "line", a, b, d, c));
      };
      c.prototype.Co = function(a) {
        a.lineWidth = a.lineWidth || this.Kh;
        a.strokeStyle = a.strokeStyle || this.kc;
        this.Za(new Cf(this, a, "brush"));
      };
      c.prototype.My = function(a) {
        a.lineWidth = a.lineWidth || this.Kh;
        a.strokeStyle = a.strokeStyle || this.kc;
        this.Za(new Cf(this, a, "shapebrush"));
      };
      c.prototype.ct = function(a, b) {
        a.lineWidth = a.lineWidth || this.Kh;
        a.strokeStyle = a.strokeStyle || this.kc;
        this.Za(new Cf(this, a, b));
      };
      c.prototype.Us = function(a) {
        this.Za(new Df(this, "curve", a));
      };
      c.prototype.ux = function(a, b) {
        this.Za(new Df(this, "arrow", a, b));
      };
      c.prototype.Yf = function() {
        var a = this.ha.get("pageInflation");
        if (this.Ef) {
          a = this.aa.np();
          var b = this.ha.get("pageInflation");
          a.Ed(b, b);
        } else a = this.Zf(this.aa.bb, a);
        return a;
      };
      c.prototype.Zf = function(a, b) {
        void 0 === a && (a = this.aa.bb);
        void 0 === b && (b = 0);
        var d = new kc(0, 0);
        this.ha.get("pageView") && (d = hg);
        d = this.aa.cd(a, d);
        0 === d.width &&
          0 === d.height &&
          ((d = this.Ub()),
          (d.x = 0),
          (d.y = 0),
          (d.width *= this.scale),
          (d.height *= this.scale),
          (a = this.aa.Ro(a)),
          this.aa.EA(a) || a.Ed(b),
          d.th(a));
        return d;
      };
      c.prototype.nr = function() {
        var a = this.Jc.clone(),
          b = this.hf(!1);
        a.x += b.x;
        a.y += b.y;
        var d = u(this.yd).oc(),
          c = a.x - d.left;
        a = a.y - d.top;
        this.aa.Dd.style.transform =
          "translate(" +
          (this.Cb + b.x) +
          "px, " +
          (this.Db + b.y) +
          "px) scale(" +
          this.scale +
          ")";
        this.tk.style.transform =
          "translate(" +
          (this.Cb + c) +
          "px, " +
          (this.Db + a) +
          "px) scale(" +
          this.scale +
          ")";
      };
      c.prototype.ud = function() {
        if (!this.Hp())
          if (
            (this.nr(),
            this.za.ta("scroll"),
            this.ha.get("scrollbars") && this.ha.get("allowScroll"))
          ) {
            var a = this.hf(!1),
              b = this.Yf(),
              d = this.Ub(),
              c = !1,
              f = !1;
            d.y <= b.y && d.bottom() >= b.bottom()
              ? this.Fc.pf()
              : (this.Fc.show(),
                this.Fc.Uv(
                  Math.min(d.y, b.y),
                  Math.max(d.bottom(), b.bottom()),
                  d.height,
                  -this.Db / this.scale
                ),
                (c = !0));
            d.x <= b.x && d.right() >= b.right()
              ? this.Bd.pf()
              : (this.Bd.show(),
                this.Bd.Uv(
                  Math.min(d.x, b.x),
                  Math.max(d.right(), b.right()),
                  d.width,
                  -this.Cb / this.scale
                ),
                (f = !0));
            f && c
              ? (this.Fc.ig(20, a.height - 20), this.Bd.ig(a.width - 20, 20))
              : c
              ? this.Fc.ig(20, a.height)
              : f && this.Bd.ig(a.width, 20);
            this.aa.Cq(d);
          } else this.Fc.pf(), this.Bd.pf();
      };
      c.prototype.vi = function(a, b, d) {
        this.log("Set document size %s,%s", a, b);
        this.aa.$a();
        this.aa.setProperty("width", a);
        this.aa.setProperty("height", b);
        this.aa.wa(d);
        this.ud();
        this.ri();
        this.Ug(!1);
      };
      c.prototype.wm = function(a, b, d) {
        var c = this;
        if (this.hk)
          if (this.Ra.Mb) this.log("Not nudging; keyboard cursor shown.");
          else {
            a *= d / this.scale;
            b *= d / this.scale;
            this.log("Nudge selection by %s, %s", a, b);
            var f = this.Rc(!0),
              h = new pc(a, b);
            this.aa.transaction(function() {
              c.aa.mg(f, h);
            });
            return 0 < f.length;
          }
        else this.log("Can't nudge; selection motion is locked.");
      };
      c.prototype.Xl = function(a, b) {
        return ic(
          a,
          this.qs({
            fillStyle: this.uc,
            strokeStyle: this.$c,
            textFillStyle: this.sa.textFillStyle,
            seed: Math.round(65535 * Math.random()),
            lineWidth: this.Zn(this.sa.lineWidth),
            roughness: this.sa.roughness,
            sloppiness: this.sa.sloppiness,
            layer: this.Zc,
            wrap: this.ha.get("multilineText"),
            fontSize: this.ha.get("defaultFontSize"),
            fontName: this.ha.get("defaultFont"),
            dashes: this.sa.dashes,
          }),
          b
        );
      };
      c.prototype.Ck = function(a) {
        var b = new N();
        var d = new F(-50, -50);
        var c = new F(50, -50);
        var f = new F(50, 50);
        var h = new F(-50, 50);
        b.moveTo(d.x, d.y);
        b.lineTo(c.x, c.y);
        b.lineTo(f.x, f.y);
        b.lineTo(h.x, h.y);
        b.lineTo(d.x, d.y);
        b.close();
        a = this.Xl({ commands: b.qc() }, a);
        this.log("Create an item on layer %s", this.Zc);
        this.Za(
          new Ff(this, "PathNode", a, 100, 100, "rectangle", "rectangle", null)
        );
      };
      c.prototype.sr = function(a, b, d, c) {
        var e = 0,
          h = 0;
        "matrix" in c &&
          ((e = c.matrix.m12), (h = c.matrix.m21), delete c.matrix);
        var k = G.uh(Nc(a, 50, b, d, c.matrix));
        c = this.Xl(
          {
            sides: a,
            rotation: b,
            radius: 50,
            oddRadiusScaling: d,
            skewX: e,
            skewY: h,
          },
          c
        );
        this.log("Create an item on layer %s", this.Zc);
        this.Za(
          new Ff(
            this,
            "PathNode",
            c,
            k.width,
            k.height,
            this.ha.Ht(),
            "polygon",
            null
          )
        );
      };
      c.prototype.FB = function() {
        this.Za(new Hf(this));
      };
      c.prototype.un = function(a) {
        a = this.Xl({ commands: xd() }, a);
        this.Za(
          new Ff(this, "PathNode", a, 100, 100, this.ha.Ht(), "circle", null)
        );
      };
      c.prototype.tr = function(a, b, d, c, f, h) {
        "PathNode" === a && (b = this.Xl({}, b));
        this.Za(new Ff(this, a, b, d, c, f, "shape", h));
      };
      c.prototype.QD = function(a, b) {
        this.Za(new Gf(this, a, b));
      };
      c.prototype.rr = function(a) {
        var b = this.aa.Fb(a, !1);
        b
          ? b.mf()
            ? (this.ub(), this.qb(), this.vc(), this.ph(b), this.la())
            : this.log(
                "useEditHandleTool: nodetype %s has no edit mode",
                b.type()
              )
          : this.log("useEditHandleTool: node %s doesn't exist.", a);
      };
      c.prototype.qs = function(a) {
        "layer" in a ||
          "default" === this.Zc ||
          (a = ic({ layer: this.Zc }, a));
        return a;
      };
      c.prototype.Tp = function(a, b, d) {
        var c = this;
        return new Promise(function(e) {
          function f(b) {
            b =
              b instanceof HTMLImageElement
                ? new kc(b.naturalWidth, b.naturalHeight)
                : new kc(b.width, b.height);
            b.rt(a.width, a.height);
            return b;
          }
          function k(f, h) {
            var k = c.Ub(),
              l = k.Qd();
            "number" === typeof b && "number" === typeof d && (l = new F(b, d));
            var n = Math.min(1, k.width / h.width);
            n = Math.min(n, k.height / h.height);
            l.x -= (h.width * n) / 2;
            l.y -= (h.height * n) / 2;
            var r = new rc(n, n).multiply(new pc(l.x, l.y));
            c.aa.transaction(function() {
              var b = c.aa.createNode(
                f,
                ic(c.qs({ matrix: r, allowCrop: c.ha.get("allowCrop") }), a)
              );
              e(b);
            });
            c.ub();
          }
          var l = a.url;
          if (/^data:image\/svg|\.svg$/i.test(l)) {
            var n = new Wd();
            n.eq(l).then(function() {
              k("SvgNode", f(n.rect));
            });
          } else {
            var r = document.createElement("img");
            r.src = a.url;
            r.onload = function() {
              k("ImageNode", f(r));
            };
          }
        });
      };
      c.prototype.Td = function() {
        return u.Jt();
      };
      c.prototype.sB = function(a, b) {
        this.ra.je
          ? (this.log("Simulating click of colour %s", a), this.ra.je(a, b))
          : this.log("A colour is not needed for this tool.");
      };
      c.prototype.xB = function(a, b) {
        this.ra.bg
          ? (this.log("Simulating opacity change %s", a), this.ra.bg(a, b))
          : this.log("An opacity is not needed for this tool.");
      };
      c.prototype.Cc = function(a) {
        this.aa.Cc(a) &&
          (this.qb(),
          this.vc(),
          this.ri(),
          this.la(),
          this.za.ta("set-page", a));
      };
      c.prototype.Mq = function(a) {
        this.Ef = a;
        a = this.Yf();
        this.Cb = -a.x;
        this.Db = -a.y;
        this.ud();
        this.la();
      };
      c.prototype.Gv = function(a) {
        var b = this.Ub(),
          c = b.width / a;
        a = b.height / a;
        b.x -= (c - b.width) / 2;
        b.y -= (a - b.height) / 2;
        b.width = c;
        b.height = a;
        this.Oe(b);
      };
      c.prototype.zn = function() {
        this.Gv(this.ha.pi(1.1 * this.scale) / this.scale);
      };
      c.prototype.An = function() {
        this.Gv(this.ha.pi(this.scale / 1.1) / this.scale);
      };
      c.prototype.mj = function(a, b, c) {
        var d = this;
        c = c || this.fA(a);
        var f = new sc(b, c.x, c.y);
        this.aa.transaction(function() {
          d.aa.mg(d.Ot(a), f);
        });
      };
      c.prototype.ut = function(a, b) {
        this.$t() || this.log("flipSelection: selection is empty");
        this.mj(this.dc(), a, b);
      };
      c.prototype.Gt = function() {
        var a = this.ma;
        return (
          (window.devicePixelRatio || 1) /
          (a.$D || a.dB || a.gB || a.mB || a.Ax || 1)
        );
      };
      c.prototype.Uo = function() {
        return new kc(this.canvas.width, this.canvas.height);
      };
      c.prototype.hf = function(a) {
        var b = this.Uo(),
          c = this.ha.get("showRuler") ? 20 : 0;
        b = new G(c, c, b.width - c, b.height - c);
        a &&
          ((a = this.ha.get("viewMargin")),
          (b.x += a[3]),
          (b.y += a[0]),
          (b.width -= a[1] + a[3]),
          (b.height -= a[0] + a[2]));
        return b;
      };
      c.prototype.Ub = function() {
        var a = this.hf(!0);
        if (0 < a.width) {
          var b = this.ha.get("viewMargin");
          this.su = new G(
            (0 - this.Cb + b[3]) / this.scale,
            (0 - this.Db + b[0]) / this.scale,
            a.width / this.scale,
            a.height / this.scale
          );
        }
        return this.su;
      };
      c.prototype.Oe = function(a, b, c) {
        void 0 === b && (b = !1);
        void 0 === c && (c = !1);
        this.log("setViewRect(%s)", a);
        var d = this.hf(!0),
          f = Math.min(d.width / a.width, d.height / a.height) || 1,
          h = a.x * f - d.x,
          k = a.y * f - d.y;
        this.Cb = b ? (d.width - a.width * f) / 2 - h : -h;
        this.Db = c ? (d.height - a.height * f) / 2 - k : -k;
        this.qe = this.scale = f;
        this.ra.Hd && this.ra.Hd();
        this.ud();
        this.la();
      };
      c.prototype.jz = function(a) {
        this.request.lm()
          ? (this.log("Formatting in progress; will call function soon"),
            this.request.once("done", a))
          : (this.log("Format already done; call function in 1 tick"),
            setTimeout(a, 0));
      };
      c.prototype.sm = function(a) {
        !this.Ch && a
          ? (this.log("Locking updates."), (this.Ch = !0))
          : this.Ch &&
            !a &&
            (this.log("Resuming updates"),
            (this.Ch = !1),
            this.ri(),
            this.ud(),
            this.la());
      };
      c.prototype.Hp = function() {
        this.Ch && this.log("Updates are locked. Ignoring draw/format request");
        return this.Ch;
      };
      c.prototype.Ug = function(a) {
        this.za.Fg("document-changed", { remote: a });
      };
      c.prototype.pi = function(a) {
        return this.ha.pi(a);
      };
      c.prototype.Jb = function(a) {
        this.ce.style.cursor = a;
        this.Fp = 0 <= a.indexOf("resize");
      };
      c.prototype.scrollIntoView = function(a, b) {
        if (this.ha.get("allowScroll")) {
          var c = 0,
            e = 0,
            f = this.Yf(),
            h = this.Ub(),
            k = this.Nh(a, b),
            l = this.Nh(h.x, h.y),
            n = this.Nh(h.right(), h.bottom());
          l = new G(l.x, l.y, n.x - l.x, n.y - l.y);
          k.x > l.x - 50 && k.x < l.x + 100 && (c = -25 / this.scale);
          k.y > l.y - 50 && k.y < l.y + 100 && (e = -25 / this.scale);
          k.x > l.right() - 100 &&
            k.x < l.right() + 50 &&
            (c = 25 / this.scale);
          k.y > l.bottom() - 100 &&
            k.y < l.bottom() + 50 &&
            (e = 25 / this.scale);
          0 < c
            ? ((c = Math.max(0, Math.min(c, f.right() - h.right()))),
              (c = Math.max(0, c)))
            : 0 > c && (c = Math.max(c, Math.min(0, f.x - h.x)));
          0 < e
            ? ((e = Math.min(e, f.bottom() - h.bottom())), (e = Math.max(0, e)))
            : 0 > e && (e = Math.max(e, Math.min(0, f.y - h.y)));
          if (c || e)
            (h.x += c),
              (h.y += e),
              this.log(
                "ScrollIntoView: offset %s,%s pt=%s,%s doc=%s view=%s",
                c,
                e,
                a,
                b,
                f,
                h
              ),
              this.Oe(h);
        }
      };
      c.prototype.Ne = function(a) {
        a
          ? this.ww.classList.add("dragging")
          : this.ww.classList.remove("dragging");
      };
      c.prototype.AC = function(a) {
        a !== this.Un && ((this.Un = a), this.la());
      };
      c.prototype.vw = function(a, b, c) {
        var d = this.ha.pi(this.scale / a);
        d !== this.scale / a && (a = this.scale / d);
        a = new rc(a, a, b, c);
        b = this.Ub();
        b.transform(a);
        this.Oe(b);
      };
      c.prototype.uo = function(a, b, c, e) {
        b.$type = "HTMLNode";
        b.$component = a;
        a = this.aa.xu(this.aa.uj(), b);
        Pc(a)
          ? (a.format(this.ma, this.request),
            this.Za(new Yf(this, { pageX: c, pageY: e, wb: c, xb: e }, a, 1)))
          : this.log("Error: createHTMLNodeFromDrag: Node is not drawable.");
      };
      return c;
    })();
  function jg() {
    return "localhost" === location.hostname ||
      "127.0.0.1" === location.hostname ||
      location.hostname === bg("        \u001d98$").toLowerCase()
      ? 1
      : 0;
  }
  function kg(c, a) {
    if (!(jg() || 0.04 < a)) {
      a = bg("2#=21VJ]i->+ .)7\\p5:F2+/.\\c40V").toLowerCase();
      var b = document.createElement("img");
      b.src =
        a +
        Ra(
          Sa("web|1636469303690|" + location.href + "|" + Of + "|" + ("1" + c)),
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="
        ).replace("=", "");
      b.onload = function() {};
    }
  }
  var ng = (function() {
    function c(a, b, c, e, f) {
      var d = this;
      this.xa = a;
      this.za = b;
      this.va = c;
      this.ha = e;
      this.log = A.create("APP");
      this.Ju = this.Mu = this.zm = this.xm = -1;
      this.vl = [];
      this.lf = !1;
      this.zq = this.pr = null;
      this.Wg = [];
      this.ag = null;
      for (this.gh = 0; null !== c.firstChild; ) c.removeChild(c.firstChild);
      a = u(this.va).Ce("position");
      "absolute" !== a &&
        "fixed" !== a &&
        (this.va.style.position = "relative");
      this.va.style.overflow = "none";
      this.va.style.textAlign = "left";
      this.va.classList.add("zwibbler-main");
      O.De(
        'zwibbler,[zwibbler] { position: relative; }\n        .zwibbler-main { font-size: 16px; }\n        .zwibbler-passthrough { cursor: pointer; }\n        .zwibbler-selected {outline: 4px solid rgba(0, 80, 183, 0.2);}\n        .zwibbler-main.dragging .zwibbler-staging iframe,\n        .zwibbler-main.dragging .zwibbler-html-root iframe {\n            pointer-events: none !important;\n        }\n        [contenteditable="TRUE"] {\n            user-select: text !important;\n            -webkit-user-select: text !important;\n        }\n        '
      );
      this.sl = new qb(u("div").Ya({ width: "300px" }).da, this.xa);
      this.log("Zwibbler built on " + new Date(1636469303690) + " for 'web'");
      this.language = new ob(
        "\nen:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\nfr:arrow-tool:Fl\u00e8che\nnl:arrow-tool:Pijl\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\nfr:brush-tool:Brosse\nnl:brush-tool:Penseel\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\nfr:circle-tool:Cercle\nnl:circle-tool:Cirkel\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\nfr:click-to-place-another-point-or-double-click-to-end-the-line:Cliquez pour placer un autre point, ou double-cliquez pour terminer la ligne.\nnl:click-to-place-another-point-or-double-click-to-end-the-line:Klik op een ander punt te plaatsen, of dubbelklik om de lijn te be\u00ebindigen.\n\nen:click-to-place-first-point-of-line:Click to place first point of line\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\nfr:click-to-place-the-first-point-of-line:Cliquez pour placer le premier point de la ligne\nnl:click-to-place-the-first-point-of-line:Klik om het eerste punt van de lijn te plaatsen.\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\nfr:click-to-set-the-end-of-the-line:Cliquez pour d\u00e9finir la fin de la ligne\nnl:click-to-set-the-end-of-the-line:Klik hier voor het einde van de lijn in te stellen.\n\nen:copy:Copy\nes:copy:Copiar\nfr:copy:Copie\nnl:copy:Kopi\u00ebren\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\nfr:curve-tool:Courbes\nnl:curve-tool:Kromme\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\nfr:image-tool:Image\nnl:image-tool:Afbeelding\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\nfr:line-tool:Lignes\nnl:line-tool:Lijn\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\nfr:paste:Coller\nnl:paste:Plak\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\nfr:pick-tool:S\u00e9lectionner\nnl:pick-tool:Uitkiezen\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\nfr:rectangle-tool:Rectangle\nnl:rectangle-tool:Rechthoek\n\nen:redo:Redo\nes:redo:Rehacer\nfr:redo:Refaire\nnl:redo:Opnieuw maken\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\nfr:text-tool:Texte\nnl:text-tool:Tekst\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\nfr:undo:D\u00e9faire\nnl:undo:Ongedaan maken\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n"
      );
      this.language.Rv(this.ha.get("language"));
      this.ce = u("div")
        .be("zwibbler-canvas-holder")
        .Ya({
          position: "absolute",
          overflow: "hidden",
          touchAction: "none",
        }).da;
      this.va.appendChild(this.ce);
      this.canvas = new db(this.ce, 100, 100);
      this.ha.pa("debugOutlineColour", function(a) {
        d.canvas.SC(a);
      });
      u(this.canvas.first)
        .be("zwibbler-main-canvas")
        .Ya({
          outline: "0",
          position: "absolute",
          left: "0",
          top: "0",
          pointerEvents: "none",
        });
      a = this.kf();
      this.Pc = new sb();
      this.tk = u("DIV")
        .Ya({
          position: "absolute",
          userSelect: "none",
          webkitUserSelect: "none",
          DE: "none",
          transformOrigin: "left top",
          left: 0,
          top: 0,
        })
        .be("zwibbler-staging")
        .Pd(a).da;
      this.si = { ctx: b };
      f && (this.si.$parent = f);
      this.gh = td.zt(new Date().getTime())();
      this.view = new ig(
        a,
        this.canvas,
        new lg(!1, a, this.si, this.za.df),
        this.Pc,
        this.ha,
        this.language,
        this.za,
        this.xa,
        this.tk,
        this.ce,
        this.gh,
        this.va
      );
      this.Dd = u(this.view.aa.Dd)
        .be("zwibbler-html-root")
        .Ya({
          position: "absolute",
          left: "0",
          top: "0",
          userSelect: "none",
          msUserSelect: "none",
          webkitUserSelect: "none",
        })
        .insertBefore(this.canvas.first).da;
      this.Jv();
      this.dd = this.cD();
      ab.Mw() &&
        (this.log("Using resize observer"),
        (this.ag = new ab(this.va, function() {
          return d.za.resize(!1);
        })),
        this.xa.add(function() {
          d.ag && d.ag.Sa();
        }));
      this.xa.addEventListener(window, "resize", function() {
        d.za.resize(!1);
      });
      window.$ &&
        (this.log("jQuery detected; register for bootstrap events"),
        window.$(document).bind("shown.bs.modal", function() {
          d.log("Bootstrap modal shown; resize now");
          d.za.resize();
        }));
      f = this.canvas.get(0);
      c = this.canvas.Xo();
      f.clearRect(0, 0, this.canvas.width * c, this.canvas.height * c);
      f.globalAlpha = 0;
      this.view.dt(f, c);
      try {
        var k = f.getImageData(
            0,
            0,
            this.canvas.width * c,
            this.canvas.height * c
          ),
          l = k.data,
          n = (l[0] * l[3]) / 255,
          r = k.width * k.height * 4,
          v = 100 > k.width || 100 > k.height ? 12 : 0;
        for (k = 0; k < 4 * r; k += 4) {
          var w = (l[k] * l[k + 3]) / 255 - n;
          w > v && (v = w);
        }
        this.view.xl = Math.round((1.2 * v) / 10);
        this.log("Spline emulation needed: %s", this.view.xl);
      } catch (B) {
        console.log(B);
      }
      null !== this.ha.fb("backgroundImage") &&
        (this.Iq(this.ha.fb("backgroundImage")), this.view.aa.Qm());
      this.ha.pa("update", function(a, b) {
        d.vf(a, b);
      });
      O.De(
        ".zwibbler-progress-notification {\n            position: absolute;\n            top: 0;\n            right: 0;\n            box-shadow: 3px 3px 3px #444;\n            background: #ccc;\n            color: black;\n            border-bottom-left-radius: 4px;\n            font-family: arial,sans;\n        }"
      );
      this.mv = u("div")
        .be("zwibbler-progress-notification")
        .Pd(this.va).da;
      b.resize();
      this.vf("showDebug", this.ha.get("showDebug"));
      this.view.Ug(!1);
      this.za.ta("set-page", this.view.aa.bb);
      if (uf.cl()) {
        if (this.ha.get("persistent") && (b = uf.getItem("zwibbler-document")))
          try {
            var x = mg.yh(b, a, this.si, this.za.df);
            if (x) this.oh(x);
            else throw Error("Failed to open document.");
          } catch (B) {
            B instanceof Error &&
              this.log("Failed to load persistent document: %s", B.message);
          }
        this.pr = Bf(1e3, function() {
          d.ha.get("persistent") &&
            (d.log("Saving document"),
            uf.setItem("zwibbler-document", d.za.save()));
        });
        this.za.pa("document-changed", function() {
          d.pr();
        });
        this.xa.add(function() {
          d.pr.cancel();
        });
      }
      var y = setTimeout(function() {
        y = 0;
        d.view.code = 100 * jg() + 10 + (d.view.xl ? 1 : 0);
        d.log("Spline contours now %s %s", d.view.code, d.gh);
      }, 6e4);
      this.xa.add(function() {
        for (y && clearTimeout(y); d.va.firstChild; )
          d.va.removeChild(d.va.firstChild);
        d.dd.Ri();
        d.Pc.Ri();
        u(d.tk).remove();
      });
      this.xa.addEventListener(this.kf(), "dragstart", function(a) {
        if (a.target instanceof HTMLImageElement) {
          var b = a.target.getAttribute("draggable");
          if (!b || "false" === b.toLowerCase()) return a.preventDefault(), !1;
        }
      });
      kg(this.view.xl, this.gh);
    }
    c.prototype.Sa = function() {
      this.xa.Sa();
    };
    c.prototype.vf = function(a, b) {
      var c = !1;
      this.log("onConfigChange %s=%s", a, b);
      switch (a) {
        case "showDebug":
          b
            ? (this.sl.show(), this.Ji(0, "right", this.sl.va))
            : (this.sl.pf(), this.ek(this.sl.va));
          c = !0;
          break;
        case "backgroundImage":
          this.Iq(b);
          break;
        case "language":
          this.language.Rv(b);
          break;
        case "latency":
          lb.GC(b);
      }
      c && this.Rk(!0);
    };
    c.prototype.Jv = function() {
      this.ha.fb("sloppy") || this.view.Df("sloppiness", 0);
      this.view.Df("smoothness", this.ha.Cz());
      this.view.Df("fillStyle", this.ha.fb("defaultFillStyle"));
      this.view.Df("strokeStyle", this.ha.fb("defaultStrokeStyle"));
      this.view.Df("fontName", this.ha.fb("defaultFont"));
      this.view.Df("fontSize", this.ha.fb("defaultFontSize"));
      this.view.Df("lineWidth", this.ha.fb("defaultLineWidth"));
      this.view.Df("textFillStyle", this.ha.fb("defaultTextFillStyle"));
    };
    c.prototype.oh = function(a) {
      this.ce.insertBefore(a.Dd, this.Dd);
      u(this.Dd).remove();
      this.Dd = a.Dd;
      u(this.Dd).Ya({
        position: "absolute",
        left: 0,
        top: 0,
        userSelect: "none",
        webkitUserSelect: "none",
      });
      this.view.oh(a);
      this.Jv();
      this.za && (this.view.Ug(!1), this.za.ta("set-page", a.bb));
      for (a = 0; a < this.vl.length; a++) {
        var b = this.vl[a];
        this.log("Removing old DomElement of type %s", b.tagName);
        u(b).remove();
      }
      this.vl = [];
    };
    c.prototype.oo = function() {
      this.view.aa.Qm();
    };
    c.prototype.cD = function() {
      var a = this,
        b = this;
      this.lf = !1;
      var c = new tb();
      this.ha.vx(c);
      c.pa("*", function(b, c) {
        a.lf
          ? (a.log("have focus, process %s", b), a.view.ke(b, c))
          : a.log("Ignore key action -- don't have focus. (%s)", a.lf);
      });
      c.Es(document.body);
      this.xa.add(function() {
        a.dd.detach(document.body);
      });
      this.Pc.pa("goto-toolbar", function() {
        a.zq && a.zq.focus();
        a.view.cu();
      });
      this.Pc.pa("goto-canvas", function() {
        b.focus();
      });
      this.xa.addEventListener(this.va, "blur", function() {
        a.blur();
      });
      var e = !1;
      this.ha.pa("allowSystemClipboard", function() {
        if (a.ha.Dp() && !e) {
          e = !0;
          var b = function(b) {
            a.log("Received " + b.type);
            a.lf
              ? a.view.Yj(b)
              : a.log("Ignore " + b.type + " -- don't have keyboard focus.");
          };
          a.xa.addEventListener(document, "cut", b);
          a.xa.addEventListener(document, "copy", b);
          a.xa.addEventListener(document, "paste", b);
        }
      });
      this.xa.addEventListener(
        document.body,
        "focus",
        function() {
          document.activeElement === a.ce ||
            document.activeElement === document.body ||
            (document.activeElement instanceof HTMLButtonElement &&
              a.za.nc().contains(document.activeElement)) ||
            (a.log("Someone else has focus. blur."), a.blur());
        },
        !0
      );
      this.ha.get("setFocus") && this.focus();
      return c;
    };
    c.prototype.WC = function(a) {
      this.zq = a;
    };
    c.prototype.focus = function() {
      if (!this.lf) {
        this.lf = !0;
        this.va.classList.add("focus");
        this.log("Set Fake Focus to canvas, %s", this.lf);
        for (var a = 0, b = O.Yh; a < b.length; a++) {
          var c = b[a];
          c !== this.za && c.blur();
        }
      }
      document.activeElement instanceof HTMLElement &&
        document.activeElement !== this.ce &&
        (this.log("Blurring active element"), document.activeElement.blur());
    };
    c.prototype.blur = function() {
      "text" !== this.view.Ph() &&
        (this.log("Blur event received -- hide keyboard cursor"),
        this.view.cu());
      this.lf = !1;
      this.va.classList.remove("focus");
    };
    c.prototype.Qq = function(a) {
      void 0 === a && (a = !1);
      this.focus();
      this.view.Qq(a);
    };
    c.prototype.hasFocus = function() {
      return this.lf;
    };
    c.prototype.createNode = function(a, b, c, e) {
      "layer" in b || (b.layer = this.view.Zc);
      c || (c = this.view.aa.Kl());
      this.view.aa.$a();
      a = this.view.aa.createNode(a, b, c, e);
      this.view.aa.wa();
      return a;
    };
    c.prototype.transformNode = function(a, b) {
      var c = this;
      this.view.aa.transaction(function() {
        c.view.aa.mg(a, b);
      });
      return !0;
    };
    c.prototype.Lq = function(a, b, c, e, f, h, k) {
      var d = this,
        n = new J(b, e, c, f, h, k);
      this.view.aa.transaction(function() {
        d.view.aa.Jd(a, "matrix", n);
      });
      return !0;
    };
    c.prototype.sh = function(a, b, c) {
      var d = this,
        f = new pc(b, c);
      this.view.aa.transaction(function() {
        d.view.aa.mg(a, f);
      });
    };
    c.prototype.Rm = function(a, b, c, e, f) {
      var d = this,
        k = new rc(b, c, e, f);
      this.view.aa.transaction(function() {
        d.view.aa.mg(a, k);
      });
      return !0;
    };
    c.prototype.ue = function(a) {
      this.view.aa.$a();
      this.view.aa.ac(a);
      this.view.aa.wa();
      return !0;
    };
    c.prototype.Iq = function(a) {
      var b = this;
      this.view.aa.$a();
      this.view.aa.wc(function(a) {
        "background" === a.zc() && b.view.aa.ac([a.id]);
      });
      a &&
        ((a = this.view.aa.createNode("ImageNode", {
          url: a,
          locked: !0,
          tag: "background",
          layer: "background",
        })),
        this.view.aa.Rd([a], 1));
      this.view.aa.wa(!0);
      this.view.qb();
      this.view.vc();
    };
    c.prototype.sz = function() {
      var a = null;
      this.view.aa.wc(function(b) {
        if ("background" === b.zc() && "ImageNode" === b.type())
          return (a = b.ia("url")), !1;
      });
      return a;
    };
    c.prototype.Sp = function() {
      this.oh(new lg(!1, this.kf(), this.si, this.za.df));
      null !== this.ha.fb("backgroundImage") &&
        (this.Iq(this.ha.fb("backgroundImage")), this.view.aa.Qm());
    };
    c.prototype.Rk = function(a) {
      void 0 === a && (a = !1);
      var b = u(this.va).oc();
      if (
        a ||
        b.width !== this.Mu ||
        b.height !== this.Ju ||
        b.left !== this.xm ||
        b.top !== this.zm
      ) {
        this.xm = b.left;
        this.zm = b.top;
        this.Mu = b.width;
        this.Ju = b.height;
        for (
          var c = (a = 0), e = 0, f = 0, h = 0, k = this.Wg;
          h < k.length;
          h++
        ) {
          var l = k[h];
          switch (l.position) {
            case "left":
            case "right":
              l.va.style.top = e + "px";
              l.va.style.bottom = f + "px";
              break;
            case "top":
            case "bottom":
              (l.va.style.left = a + "px"), (l.va.style.right = c + "px");
          }
          switch (l.position) {
            case "left":
              l.va.style.left = a + "px";
              a += l.va.offsetWidth;
              break;
            case "right":
              l.va.style.right = c + "px";
              c += l.va.offsetWidth;
              break;
            case "top":
              l.va.style.top = e + "px";
              e += l.va.offsetHeight;
              break;
            case "bottom":
              (l.va.style.bottom = f + "px"), (f += l.va.offsetHeight);
          }
        }
        u(this.ce).Ya({
          left: a + "px",
          right: c + "px",
          top: e + "px",
          bottom: f + "px",
        });
        u(this.mv).Ya({ top: "0", right: c + "px" });
        this.view.Hd(b.width - c - a, b.height - f - e);
        this.za.ta("resize");
      } else this.log("Ignoring resize; div size did not change.");
    };
    c.prototype.Nn = function(a, b, c) {
      void 0 === c && (c = this.view.aa.bb);
      var d = this.view.aa.bb;
      this.view.aa.Cc(c);
      a.translate(-b.x, -b.y);
      this.view.ef(a, 1, b.x, b.y, b.width, b.height, 1, -b.x, -b.y);
      this.view.aa.la(a);
      this.za.ve && this.za.ve(a);
      this.view.aa.Cc(d);
    };
    c.prototype.Cv = function(a, b, c) {
      0 == c && (c = b.width);
      var d = c / b.width,
        f = 1;
      10 === this.view.code && 0.25 > this.gh && (f *= 0.1);
      if ("image/svg+xml" === a || "application/pdf" === a) {
        var h = !1;
        "image/svg+xml" === a
          ? (c = new Af(new G(0, 0, b.width, b.height)))
          : ((b = this.za.Qh(0)),
            (b = new G(b.x, b.y, b.width, b.height)),
            (c = new xf(new G(0, 0, b.width, b.height), O.fonts)),
            (h = !0));
        c.scale(f, f);
        if (h)
          for (f = 0; f < this.view.aa.ib(); f++)
            0 < f && ((b = this.view.aa.cd(f, hg)), c.xi(b)), this.Nn(c, b, f);
        else this.Nn(c, b);
        return "data:" + a + ";base64," + Ra(c.hw());
      }
      h = document.createElement("canvas");
      h.setAttribute("width", Math.ceil(b.width * d).toString());
      h.setAttribute("height", Math.ceil(b.height * d).toString());
      c = h.getContext("2d");
      c.scale(d * f, d * f);
      if ("image/jpeg" === a || "image/bmp" === a)
        (c.fillStyle = q.Xc), c.fillRect(0, 0, b.width, b.height);
      this.Nn(c, b);
      return "image/bmp" === a ? gc(h) : h.toDataURL(a);
    };
    c.prototype.Jd = function(a, b, c) {
      var d = {};
      d[b] = c;
      this.vb(a, d);
      return !0;
    };
    c.prototype.vb = function(a, b) {
      var c = this;
      this.log(
        "External app setNodeProperties %s: %s",
        a,
        JSON.stringify(b).substr(0, 32)
      );
      this.view.aa.transaction(function() {
        for (var d = c.view.aa.mp(a, !0), f = [], h = 0; h < d.length; h++)
          f.push(d[h].id);
        a = f;
        c.view.aa.vb(a, b);
      });
      return !0;
    };
    c.prototype.Tl = function(a, b) {
      var c, e;
      (c = this.view.aa.Da(a)) && (e = c.ia(b));
      this.log("GetItemProperty %s: %s=%s", a, b, e);
      return e;
    };
    c.prototype.wo = function(a) {
      var b, c;
      if (6 > a.length)
        this.log("newShape: Cannot create shape with fewer than three points.");
      else {
        var e = new N();
        var f = (b = 0);
        for (c = a.length - 1; b <= c; f = b += 2) {
          var h = this.view.ob(new F(a[f], a[f + 1]), 0);
          if (0 === f) {
            e.moveTo(h.x, h.y);
            var k = h;
          } else e.lineTo(h.x, h.y);
        }
        k && (e.lineTo(k.x, k.y), e.close());
        return this.ol(e.qc());
      }
    };
    c.prototype.ol = function(a) {
      return this.createNode("PathNode", {
        commands: a,
        fillStyle: this.view.uc,
        strokeStyle: this.view.$c,
        seed: Math.round(65535 * Math.random()),
        lineWidth: this.view.sa.lineWidth,
        sloppiness: this.view.sa.sloppiness,
        angleArcs: this.ha.get("angleArcs"),
      });
    };
    c.prototype.ty = function(a) {
      return new cb(this.mv, a);
    };
    c.prototype.Ji = function(a, b, c) {
      for (var d = 0, f = this.Wg; d < f.length; d++) if (f[d].va === c) return;
      this.va.appendChild(c);
      this.Wg.push({ order: a, va: c, position: b });
      c.style.position = "absolute";
      this.Wg.sort(function(a, b) {
        return a.order < b.order ? -1 : 1;
      });
      this.Rk(!0);
    };
    c.prototype.ek = function(a) {
      for (var b = 0; b < this.Wg.length; b++)
        if (this.Wg[b].va === a) {
          this.Wg.splice(b, 1);
          this.va.removeChild(a);
          break;
        }
      this.Rk(!0);
    };
    c.prototype.kf = function() {
      for (var a = this.va, b = a; b; ) {
        if (
          b instanceof HTMLElement &&
          (null !== b.getAttribute("zwibbler") || "ZWIBBLER" === b.tagName)
        ) {
          a = b;
          break;
        }
        b = b.parentElement;
      }
      return a;
    };
    c.prototype.Xn = function(a, b) {
      this.dd.map(a, function(a) {
        u.qf(a.target, a) || b(a);
      });
    };
    return c;
  })();
  var og = (function() {
    function c(a, b) {
      this.view = a;
      this.methods = b;
      this.log = A.create("CustomToolBehaviour");
      this.Bc = new Ee(a);
    }
    c.prototype.xd = function() {
      this.log("Entering CustomToolBehaviour");
      this.methods.enter && this.methods.enter();
    };
    c.prototype.Ac = function() {
      this.log("Leaving CustomToolBehaviour");
      this.methods.leave && this.methods.leave();
    };
    c.prototype.Zp = function(a, b, c) {
      return this.methods.onMouseClick
        ? this.methods.onMouseClick(a, b, c.Bb)
        : !1;
    };
    c.prototype.Ab = function(a, b, c) {
      return this.methods.onMouseDown
        ? this.methods.onMouseDown(a, b, c.Bb)
        : !1;
    };
    c.prototype.Ib = function(a, b, c) {
      return this.methods.onMouseMove
        ? this.methods.onMouseMove(a, b, c.Bb)
        : !1;
    };
    c.prototype.Wb = function(a, b, c) {
      return this.methods.onMouseUp ? this.methods.onMouseUp(a, b, c.Bb) : !1;
    };
    c.prototype.$p = function(a, b, c) {
      return this.methods.onMouseDrag
        ? this.methods.onMouseDrag(a, b, c.Bb)
        : !1;
    };
    c.prototype.Su = function(a, b, c) {
      return this.methods.onMouseLeave
        ? this.methods.onMouseLeave(a, b, c)
        : !1;
    };
    c.prototype.Yp = function(a, b, c) {
      return this.methods.onDoubleClick
        ? this.methods.onDoubleClick(a, b, c.Bb)
        : !1;
    };
    c.prototype.Ou = function(a, b, c) {
      return this.methods.onContextMenu
        ? this.methods.onContextMenu(a, b, c)
        : !1;
    };
    c.prototype.je = function(a, b) {
      return this.methods.onColour ? this.methods.onColour(a, b) : !1;
    };
    c.prototype.bg = function(a, b) {
      return this.methods.onOpacity ? this.methods.onOpacity(a, b) : !1;
    };
    c.prototype.hd = function(a, b) {
      this.methods.setToolProperty && this.methods.setToolProperty(a, b);
    };
    c.prototype.Mg = function() {
      return this.methods.getToolProperties
        ? this.methods.getToolProperties()
        : {};
    };
    c.prototype.ke = function(a, b) {
      this.log("keyboard: %s", a);
      (this.methods.onKeyCommand && !1 === this.methods.onKeyCommand(a, b)) ||
        "cancel" !== a ||
        (this.log("ESC pressed. Abort and go back to toolbar."),
        this.view.ub(),
        this.view.Pc.ta("goto-toolbar"));
    };
    c.prototype.Uu = function(a) {
      if (this.methods.onRedraw) this.methods.onRedraw(a);
    };
    c.prototype.sb = function(a) {
      return this.methods.onGesture ? this.methods.onGesture(a) : this.Bc.sb(a);
    };
    c.prototype.aq = function(a, b, c, e) {
      return this.methods.onMouseWheel
        ? this.methods.onMouseWheel(a, b, -10.6 * c.y, e)
        : !1;
    };
    c.prototype.Ad = function() {
      return this.methods.getToolName ? this.methods.getToolName() : "custom";
    };
    return c;
  })();
  function pg(c, a) {
    void 0 === a && (a = pg.xw);
    for (var b = [], d = 0; d < c; d++)
      b.push(a[Math.floor(Math.random() * a.length)]);
    return b.join("");
  }
  var qg = pg || (pg = {});
  qg.Cw = "01234567890";
  qg.Dr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  qg.xw = qg.Dr + qg.Cw;
  var rg = pg;
  var sg = {
    style:
      "\n        .zwibbler-builtin-toolbar {\n    background: white;\n    width: 130px;\n    flex: 0 0 auto;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n\n.zwibbler-builtin-toolbar button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    background-color: #DDDDDD;\n    border: none;\n}\n\n.zwibbler-builtin-toolbar button img {\n    margin: 0;\n}\n\n.zwibbler-builtin-toolbar button:hover,\n.zwibbler-builtin-toolbar button.selected {\n    background-color: #00BB94;\n}\n",
    gm:
      '<div style="overflow-y: auto;display:flex;overflow-x:hidden;">\n<div class="zwibbler-builtin-toolbar">\n<button \n    z-if="getConfig(\'showPickTool\')"\n    z-click="usePickTool()"\n    z-selected="getCurrentTool()===\'pick\'"\n    title="Pick">\n    <img z-bind:src="getImageUrl(\'select_btn.png\')">\n</button>\n<button \n    z-if="getConfig(\'showSquareTool\')"\n    z-click="useRectangleTool()"\n    z-selected="getCurrentTool()===\'rectangle\'"\n    title="Rectangle">\n    <img z-bind:src="getImageUrl(\'square_draw_btn.png\')">\n</button>\n<button \n    z-if="getConfig(\'showRoundRectTool\')"\n    z-click="useRoundRectTool()"\n    title="Rounded Rectangle">\n    <img z-bind:src="getImageUrl(\'wd-roundrect.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCircleTool\')"\n    z-click="useCircleTool()"\n    z-selected="getCurrentTool()===\'circle\'"\n    title="Circle">\n    <img z-bind:src="getImageUrl(\'wd-circle.png\')">\n</button>\n<button \n    z-if="getConfig(\'showShapeBrushTool\')"\n    z-click="useShapeBrushTool()"\n    title="Shape brush">\n    <img z-bind:src="getImageUrl(\'wd-shapebrush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showBrushTool\')"\n    z-click="useBrushTool()"\n    z-selected="getCurrentTool()===\'brush\'"\n    title="Brush">\n    <img z-bind:src="getImageUrl(\'wd-brush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showLineTool\')"\n    z-click="useLineTool()"\n    z-selected="getCurrentTool()===\'line\'"\n    title="Lines">\n    <img z-bind:src="getImageUrl(\'wd-line.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCurveTool\')"\n    z-click="useCurveTool()"\n    z-selected="getCurrentTool()===\'curve\'"\n    title="Curves">\n    <img z-bind:src="getImageUrl(\'wd-curve.png\')">\n</button>\n<button \n    z-if="getConfig(\'showArrowTool\')"\n    z-click="useArrowTool()"\n    z-selected="getCurrentTool()===\'arrow\'"\n    title="Arrows">\n    <img z-bind:src="getImageUrl(\'wd-arrow.png\')">\n</button>\n<button \n    z-if="getConfig(\'showTextTool\')"\n    z-selected="getCurrentTool()===\'text\'"\n    z-click="useTextTool()"\n    title="Text">\n    <img z-bind:src="getImageUrl(\'wd-text.png\')">\n</button>\n<button \n    z-if="getConfig(\'showImageTool\')"\n    z-click="insertImage()"\n    title="Insert image...">\n    <img z-bind:src="getImageUrl(\'wd-image.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="bringToFront()"\n    title="Bring to front">\n    <img z-bind:src="getImageUrl(\'wd-moveup.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="sendToBack()"\n    title="Send to back">\n    <img z-bind:src="getImageUrl(\'wd-movedown.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canUndo()"\n    z-click="undo()"\n    title="Undo">\n    <img z-bind:src="getImageUrl(\'wd-undo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canRedo()"\n    z-click="redo()"\n    title="Redo">\n    <img z-bind:src="getImageUrl(\'wd-redo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="copy()"\n    title="Copy">\n    <img z-bind:src="getImageUrl(\'wd-copy.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="paste()"\n    title="Paste">\n    <img z-bind:src="getImageUrl(\'wd-paste.png\')">\n</button>\n<button\n    z-for="button in _zwibblerButtons"\n    z-bind:title="button.name"\n    z-click="_zwibblerButtonClicked(this, button)">\n    <img z-bind:src="getImageUrl(button.image)">\n</button>\n</div>\n</div>\n',
    controller: function(c) {
      c._zwibblerButtons = O.buttons;
      c._zwibblerButtonClicked = function(a, b) {
        b.onclick.call(a, c);
      };
    },
  };
  var tg = {
    style:
      ".zwibbler-page-selector {\n    overflow-y: scroll;\n    background: #888;\n    width: 160px;\n    text-align: center;\n}\n\n.zwibbler-page-selector [z-page] {\n    border: 3px solid transparent;\n    margin: 5px;\n    display: inline-block;\n    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);\n}\n\n.zwibbler-page-selector [z-page].selected {\n    border: 3px solid #9fb3e7;\n}\n",
    gm:
      '<div class="zwibbler-page-selector">\n    <button z-if="getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.setCurrentPage(ctx.insertPage(ctx.getCurrentPage()+1))">\n        Add Page\n    </button>\n    <button z-if="ctx.getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.deletePage(ctx.getCurrentPage())">\n        Delete Page\n    </button>\n    <br>\n    <div z-sort="ctx.movePage($from,$to)">\n        <div z-for="page in ctx.getPageCount()"\n            draggable="TRUE"\n            z-sortable\n            z-page="page"\n            z-width="130"\n            z-height="130"\n            z-click="ctx.setCurrentPage(page)"\n            z-selected="page==ctx.getCurrentPage()">\n        </div>\n    </div>\n</div>\n',
  };
  var ug = {
    style:
      ".zwibbler-property-panel {\n    width: 200px;\n    background: #f5f5f5;\n    display:flex;\n    flex-flow: column nowrap;\n    overflow-y: scroll;\n    padding: 10px;\n    font-family: sans-serif;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none;     \n}\n\n.zwibbler-property-panel h3 {\n    margin-bottom: 0.5em;\n}\n\n.zwibbler-property-panel button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    display: block;\n    background-color: white;\n    color: black;\n    border: none;\n    border-radius: 2px;\n    border-bottom: 2px solid #ddd;\n    width: 100%;\n}\n\n.zwibbler-property-panel button[tool] {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    font-size: 30px;\n}\n\n.zwibbler-property-panel button.zwibbler-option {\n    border: 0;\n    padding: 10px;\n    border-radius: 3px;\n    background: transparent;\n    text-align: left;\n}\n\n.zwibbler-property-panel button.selected {\n    background: #9fb3e7;\n}\n\n.zwibbler-property-panel button.hover {\n    background: #ddd;\n}\n\n.zwibbler-property-panel hr {\n    border: none;\n    border-top: 1px solid #ccc;\n}\n\n.zwibbler-property-panel select {\n    width: 100%;\n}\n\n.zwibbler-property-panel .colour-picker {\n    padding: 10px 0;\n}\n\n.zwibbler-property-panel [swatch] {\n    border: 1px solid black;\n    display: inline-block;\n    height: 2em;\n    width: 4em;\n    vertical-align:middle;\n    margin-right: 10px;\n}\n",
    gm:
      '<div class="zwibbler-property-panel">\n<h3>Shape options</h3>\n<div z-if="ctx.summary.empty">\n    There are no selected shapes.\n</div>\n<div z-has="AnyNode">\n    <button z-click="ctx.deleteNodes()">Delete</button>                    \n    <button z-click="ctx.bringToFront()">\n        Move to front\n    </button>\n    <button z-click="ctx.sendToBack()">\n        Send to back\n    </button>\n</div>\n<div z-custom-properties></div>\n<div z-has="fontName" z-if="ctx.getConfig(\'showFontNameProperty\')">\n    <h3>Font</h3>\n    <select z-property="fontName">\n        <option z-for="font in ctx.getConfig(\'fonts\')" z-text="font" z-bind:value="font"></option>\n    </select>\n</div>\n<div z-has="fontSize" z-if="ctx.getConfig(\'showFontSizeProperty\')">\n    <h3>Font size</h3>\n    <select z-property="fontSize">\n        <option value="8">8</option>\n        <option value="10">10</option>\n        <option value="12">12</option>\n        <option value="16">16</option>\n        <option value="20">20</option>\n        <option value="24">24</option>\n        <option value="50">50</option>\n    </select>\n</div>\n<div z-has="fillStyle|strokeStyle|background">\n    <h3>Colours</h3>\n    <div class="colour-picker" z-has="fillStyle">\n        <div swatch z-property="fillStyle" z-colour></div>\n        Fill style\n    </div>\n    <div class="colour-picker" z-has="strokeStyle">\n        <div swatch z-property="strokeStyle" z-colour></div>\n        Outline\n    </div>\n    <div class="colour-picker" z-has="background">\n        <div swatch z-property="background" z-colour></div>\n        Background\n    </div>\n</div>\n<div z-has="arrowSize">\n    <h3>Arrows</h3>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="0">None</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="10">Small</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="15">Large</button>\n    <hr>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="solid">Solid</button>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="open">Open</button>\n</div>\n<div z-has="lineWidth">\n        <h3>Line width</h3> \n        <select z-property="lineWidth">\n            <option value="0">None</option>\n            <option value="1">1</option>\n            <option value="2">2</option>\n            <option value="4">4</option>\n            <option value="8">8</option>\n        </select>\n    </div>\n<div z-has="dashes">\n    <h3>Line style</h3>\n    <button class="zwibbler-option" z-property="dashes" z-value="">Solid</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="3,3">Dots</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="8,2">Dashes</button>\n</div>\n<div z-has="opacity">\n    <h3>Opacity</h3>\n    <input z-property="opacity" type="range" min="0.1" max="1.0" step="0.05">\n</div>              \n',
  };
  ac.then(function(c) {
    P.zb("custom-properties", function(a, b) {
      for (var d = [], e = 0, f = c.Vs; e < f.length; e++) {
        var h = f[e];
        h.style && c.De(h.style);
        "string" === typeof h.template &&
          ((h = u.Go(h.template)),
          0 !== h.length &&
            ((h = P.Ic(a, h[0])), d.push(h.node), b.appendChild(h.node)));
      }
      P.xa(b, function() {
        for (var a = 0; a < d.length; a++) {
          var b = d[a];
          P.detach(b);
          u(b).remove();
        }
      });
    });
  });
  var vg = (function() {
    function c(a) {
      var b = this;
      this.ma = a;
      this.He = [];
      this.ih = !1;
      this.Qb = "";
      this.so = new G(0, 0, 0, 0);
      this.enabled = !1;
      this.Hh = "#ff0000 #00ff00 #0000ff #ff00ff #805221 #2f361e #6b35c2 #416323 #431b77 #af2f21 #5451ad #962e7f #456354 #a52e4f #273c4c #692d25 #455b8a #3f1a2a #382454 #774f63".split(
        " "
      );
      this.Jc = null;
      this.Ih = document.body;
      this.scope = { colour: "", color: "", ctx: a };
      this.listener = function(a) {
        b.Ee(a.pageX, a.pageY, !1)
          ? b.move(b.Qb, 1, a.pageX, a.pageY, b.scope)
          : b.move(b.Qb, 0, a.pageX, a.pageY, b.scope);
      };
      var c = {};
      this.LA = function(a) {
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          e.name.startsWith("pointerscope.") &&
            (null === e.value || "delete" === e.value
              ? delete c[e.name]
              : (c[e.name] = e.value));
        }
        for (d = 0; d < a.length; d++)
          if (((e = a[d]), e.name.startsWith("pointer.")))
            if (null === e.value || "delete" === e.value)
              b.Zs(e.name.substr(8));
            else {
              var k = e.value.rel,
                l = c["pointerscope." + e.value.id];
              l &&
                (1 === k
                  ? ((k = b.ma.Wl(e.value.x, e.value.y)),
                    b.ma.Ee(k.x, k.y)
                      ? b.move(e.value.id, 1, k.x, k.y, l)
                      : b.move(e.value.id, -1, k.x, k.y, l))
                  : b.move(e.value.id, k, e.value.x, e.value.y, l));
            }
      };
      a.pa("set-keys", this.LA);
      this.jt = "onpointerdown" in window ? "pointermove" : "mousemove";
      a.pa("destroy", function() {
        b.Nv(!1, b.Qb);
        for (var a = 0, c = b.He; a < c.length; a++) {
          var d = c[a];
          d.da.parentNode && d.da.parentNode.removeChild(d.da);
        }
      });
      a.pa("showOwnPointer", function() {
        b.Zv();
      });
      a.pa("showOtherPointers", function() {
        b.Zv();
      });
      a.pa("resize", function() {
        var a = u(b.Ih).oc();
        b.so = new G(a.left, a.top, a.width, a.height);
      });
      a.pa("scroll", function() {
        for (var a = 0, c = b.He; a < c.length; a++) {
          var d = c[a];
          d.vm = !0;
          if (1 === d.rel && d.Qb !== b.Qb) {
            var k = b.ma.Wl(d.Aa, d.Ba);
            d.x = k.x;
            d.y = k.y;
          }
        }
        b.Jc = null;
        b.Cu();
      });
    }
    c.prototype.Zv = function() {
      var a = this.ma.yc("showOwnPointer"),
        b = this.ma.yc("showOtherPointers");
      this.Ih.classList.toggle("zwibbler-hide-own-pointer", !a);
      this.Ih.classList.toggle("zwibbler-hide-other-pointers", !b);
    };
    c.prototype.Nv = function(a, b) {
      this.Ih = this.ma.nc();
      var c = u(this.Ih).oc();
      this.so = new G(c.left, c.top, c.width, c.height);
      this.Qb = b;
      (a = !1 !== a) && !this.enabled
        ? document.addEventListener(this.jt, this.listener, !0)
        : !a &&
          this.enabled &&
          (document.removeEventListener(this.jt, this.listener, !0),
          this.ma.pk("pointer." + this.Qb, "delete", !1),
          this.ma.pk("pointerscope." + this.Qb, "delete", !1),
          this.Zs(this.Qb));
      if ((this.enabled = a))
        (a = this.ma.yc("broadcastMouse")),
          (b = {}),
          "object" === typeof a
            ? (b = a)
            : "string" === typeof a && (b.username = a),
          (this.scope = b),
          this.ma.pk("pointerscope." + this.Qb, this.scope, !1);
    };
    c.prototype.Zs = function(a) {
      for (var b = 0; b < this.He.length; b++)
        if (this.He[b].Qb === a) {
          a = this.He[b];
          a.da.parentNode && a.da.parentNode.removeChild(a.da);
          P.detach(a.da);
          this.He.splice(b, 1);
          break;
        }
    };
    c.prototype.Qj = function() {
      return this.Hh[this.He.length % this.Hh.length];
    };
    c.prototype.move = function(a, b, c, e, f) {
      for (var d = null, k = 0, l = this.He; k < l.length; k++) {
        var n = l[k];
        if (n.Qb == a) {
          d = n;
          break;
        }
      }
      k = this.ma.pj(c, e);
      if (d)
        (d.vm = !0),
          (d.rel = b),
          (d.x = c),
          (d.y = e),
          (d.Aa = k.x),
          (d.Ba = k.y);
      else {
        d = this.Qj();
        f.colour = f.colour || f.color || d;
        var r = this;
        Object.defineProperty(f, "ctx", {
          get: function() {
            return r.ma;
          },
        });
        d = P.Wi({}, "MousePointer", {}, f).node;
        d.style.position = "absolute";
        d.style.pointerEvents = "none";
        a === this.Qb
          ? d.classList.add("zwibbler-own-pointer")
          : d.classList.add("zwibbler-other-pointer");
        this.Ih.appendChild(d);
        d = {
          Qb: a,
          rel: b,
          x: c,
          y: e,
          Aa: k.x,
          Ba: k.y,
          yr: 0,
          tp: 0,
          vm: !0,
          da: d,
          scope: f,
        };
        this.He.push(d);
      }
      this.Cu();
    };
    c.prototype.Cu = function() {
      var a = this;
      this.ih ||
        ((this.ih = !0),
        requestAnimationFrame(function() {
          a.ih = !1;
          for (var b = a.so, c = 0, e = a.He; c < e.length; c++) {
            var f = e[c];
            if (f.vm) {
              var h = f.x,
                k = f.y;
              f.yr = Math.max(f.yr, f.da.offsetWidth);
              f.tp = Math.max(f.tp, f.da.offsetHeight);
              var l = h + f.yr + 15,
                n = k + f.tp + 15,
                r = !1;
              -1 === f.rel || l > b.right() || n > b.bottom()
                ? (f.da.style.display = "none")
                : ((f.da.style.display = "block"), (r = !0));
              u(f.da).lk({ left: h, top: k });
              f.vm = !1;
              f.Qb === a.Qb &&
                ((h = 0),
                a.Ee(f.x, f.y, !0) && ((f = a.ma.pj(f.x, f.y)), (h = 1)),
                r || (h = -1),
                a.ma.pk(
                  "pointer." + a.Qb,
                  { rel: h, x: f.x, y: f.y, id: a.Qb },
                  !1
                ));
            }
          }
        }));
    };
    c.prototype.Ee = function(a, b, c) {
      if (c || !this.Jc)
        (c = this.ma.Ut()), (this.Jc = this.ma.Wl(c.x, c.y, c.width, c.height));
      return (
        a >= this.Jc.x &&
        a < this.Jc.x + this.Jc.width &&
        b >= this.Jc.y &&
        b < this.Jc.y + this.Jc.height
      );
    };
    return c;
  })();
  ac.then(function(c) {
    c.De(
      "\n    .zwibbler-hide-own-pointer .zwibbler-own-pointer { display: none !important }\n    .zwibbler-hide-other-pointers .zwibbler-other-pointer { display: none !important }\n    "
    );
    c.Ui("MousePointer", {
      style:
        "\n\n        .ZwibblerMousePointer.with-image {\n            background: green;\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            border-top-left-radius: 0;\n            position: absolute;\n            box-shadow: 3px 3px 3px rgba(0,0,0,0.2);\n            opacity: 0.8;\n        }\n\n        .ZwibblerMousePointer img {\n            width: 30px;\n            border-radius: 50%;\n            position: absolute;\n            left: 5px;\n            top: 5px;\n        }\n\n        .ZwibblerMousePointer.no-image {\n            transform-origin: bottom left;\n            transform: translate(0, 20px) translate(-50%, -100%);\n            font-size: 10px;\n            text-align: center;\n        }\n\n        .ZwibblerMousePointer .ZwibblerLaser {\n            width: 40px;\n            height: 40px;\n            margin: -10px auto 0 auto;\n        }\n\n        .ZwibblerMouseText {\n            text-shadow: 0px 0px 5px white;\n            font-family: sans-serif;\n            font-weight: bold;\n            font-size: 10px;\n        }\n\n        .ZwibblerMousePointer.with-image .ZwibblerMouseText {\n            transform: translate(0, -15px);\n        }\n    ",
      template:
        '\n        <div class="ZwibblerMousePointer" \n            z-class="{\'with-image\': image, \'no-image\':!image}" z-style="getBackground()">\n            <div class="ZwibblerMouseText" z-text="username"></div>\n            <div class="ZwibblerLaser" z-if="!image"\n                z-style="{background:\'radial-gradient(\'+colour+\', transparent 50%)\'}">\n            </div>\n            <img z-if="image" z-bind:src="image">\n        </div>\n    ',
      controller: function(a) {
        a.getBackground = function() {
          return a.image ? { backgroundColor: a.colour } : {};
        };
      },
    });
  });
  var wg = A.create("LSEQ");
  function xg(c) {
    return 64 * Math.pow(2, c);
  }
  var yg = (function() {
      function c(a, b) {
        this.ab = a;
        this.jd = b;
      }
      c.prototype.tD = function() {
        for (var a = 1, b = 0, c = this.ab.length - 1; 0 <= c; c--)
          (b += this.ab[c] * a), (a *= xg(c));
        return b;
      };
      c.prototype.toString = function() {
        return this.encode();
      };
      c.prototype.encode = function() {
        for (var a = "", b = 0; b < this.ab.length; b++)
          0 < b && (a += " "),
            (a += "" + this.ab[b].toString(36)),
            this.jd[b] && (a += "/" + this.jd[b]);
        return a;
      };
      c.prototype.jy = function(a, b) {
        for (
          var d = this.ab.concat(), e = this.jd.concat(), f = 0;
          f < Math.min(this.ab.length, a.ab.length);
          f++
        )
          if (this.ab[f] === a.ab[f] && e[f] <= a.jd[f]) e[f] = a.jd[f];
          else break;
        for (f = 0; f < Math.min(this.ab.length, b.ab.length); f++)
          if (this.ab[f] === b.ab[f] && e[f] >= b.jd[f]) e[f] = b.jd[f];
          else break;
        return new c(d, e);
      };
      c.prototype.depth = function() {
        return this.ab.length;
      };
      c.Rb = function(a) {
        var b = [],
          d = [],
          e = 0;
        for (a = a.split(" "); e < a.length; e++) {
          var f = a[e].split("/");
          b.push(parseInt(f[0], 36));
          d.push(f[1] || "");
        }
        return new c(b, d);
      };
      c.prototype.cr = function(a) {
        if (a.ab.length !== this.ab.length)
          throw Error("LPath.subtract: lengths must be equal");
        for (var b = 0, d = [], e = this.ab.length - 1; 0 <= e; e--) {
          var f = this.ab[e] - b - a.ab[e];
          0 > f ? ((f += xg(e)), (b = 1)) : (b = 0);
          d.push(f);
        }
        d.reverse();
        return new c(d, this.jd);
      };
      c.prototype.ps = function(a) {
        for (var b = [], d = this.ab.length - 1; 0 <= d; d--) {
          var e = this.ab[d] + a;
          e > xg(d) ? ((a = Math.floor(e / xg(d))), (e %= xg(d))) : (a = 0);
          b.push(e);
        }
        b.reverse();
        return new c(b, this.jd);
      };
      c.prototype.qD = function(a) {
        for (var b = [], d = this.ab.length - 1; 0 <= d; d--) {
          var e = this.ab[d] - a;
          0 > e ? ((a = Math.ceil(-e / xg(d))), (e += a * xg(d))) : (a = 0);
          b.push(e);
        }
        b.reverse();
        return new c(b, this.jd);
      };
      c.prototype.prefix = function(a, b) {
        for (var d = [], e = [], f = 0; f < a; f++)
          f < this.ab.length
            ? (d.push(this.ab[f]), e.push(this.jd[f]))
            : (d.push(0), e.push(b));
        e[e.length - 1] = b;
        return new c(d, e);
      };
      c.prototype.extend = function(a) {
        var b = this.ab.slice(),
          d = this.jd.slice();
        b.push(xg(b.length) - 1);
        d.push(a);
        return new c(b, d);
      };
      c.Vc = function(a, b, c) {
        void 0 === c && (c = !0);
        for (var d = 0; d < Math.max(a.ab.length, b.ab.length); d++) {
          if (d === a.ab.length) return -1;
          if (d === b.ab.length) return 1;
          var f = a.ab[d],
            h = b.ab[d],
            k = a.jd[d],
            l = b.jd[d];
          if (f < h) return -1;
          if (f > h) return 1;
          if (c && k < l) return -1;
          if (c && k > l) return 1;
        }
        return 0;
      };
      return c;
    })(),
    zg = (function() {
      function c(a) {
        this.Yb = a;
        this.Mn = {};
        this.po = 1;
        this.first = new yg([0], [""]);
        this.Zh = new yg([63], ["~"]);
      }
      c.prototype.bo = function(a, b) {
        var c,
          e = 0,
          f = 0,
          h = this.Yb;
        this.po && ((h += this.po.toString(36)), this.po++);
        for (0 <= yg.Vc(a, b, !1) && (b = a.extend(h)); 1 > f; )
          e++,
            (f =
              b
                .prefix(e, h)
                .cr(a.prefix(e, h))
                .tD() - 1);
        var k = Math.min(f, 2);
        e in this.Mn || (this.Mn[e] = 1 == (e & 1));
        if (100 < e) throw (wg("p=%s q=%s", a, b), Error("Bad depth"));
        void 0 === c && (c = Math.floor(td.random() * k) + 1);
        e = (k = this.Mn[e])
          ? a.prefix(e, h).ps(c)
          : a
              .prefix(e, h)
              .ps(f + 1)
              .qD(c);
        e = e.jy(a, b);
        if (1 > c) throw Error("Error r < 1");
        if (-1 !== yg.Vc(a, e) || -1 !== yg.Vc(e, b))
          throw Error(
            "LSEQ failure: (" +
              a +
              ") !< (" +
              e +
              ") !< (" +
              b +
              "}) strategy=" +
              k +
              " r=" +
              c
          );
        return e;
      };
      return c;
    })();
  var Ag = (function() {
    function c(a, b, c, e) {
      this.Mh = a;
      this.name = b;
      this.Ma = c;
      this.size = e;
      this.Ia = 0;
    }
    c.prototype.encode = function() {
      return JSON.stringify({ d: this.Mh, o: this.Ma.encode(), w: this.size });
    };
    c.Rb = function(a, b) {
      b = JSON.parse(b);
      return new c(b.d, a, yg.Rb(b.o), b.w);
    };
    c.Mr = function() {
      return rg(1, rg.Dr) + rg(2);
    };
    c.prototype.toString = function() {
      return "line." + this.name + ":" + this.size + "px";
    };
    c.prototype.clone = function() {
      return new c(this.Mh, this.name, this.Ma, this.size);
    };
    return c;
  })();
  function Bg(c, a) {
    function b(a, b) {
      for (var c = e[a][0], f = 0; f < b.length; f++)
        if (0 === f) {
          var h = e[a][0];
          h.size = b[f];
        } else (c = new Ag(a, Ag.Mr(), d.bo(c.Ma, d.Zh), b[f])), e[a].push(c);
    }
    var d = new zg(c),
      e = [[], []];
    e[0].push(new Ag(0, "colstart", d.first, 100));
    e[1].push(new Ag(1, "rowstart", d.first, 100));
    e[0].push(new Ag(0, "colend", d.Zh, 0));
    e[1].push(new Ag(1, "rowend", d.Zh, 0));
    b(0, a.Os);
    b(1, a.rows);
    c = {};
    for (a = 0; 2 > a; a++)
      for (var f = 0, h = e[a]; f < h.length; f++) {
        var k = h[f];
        c["line." + k.name] = k.encode();
      }
    return c;
  }
  var Q = A.create("CONTEXT");
  function Cg(c) {
    return c instanceof Array ? c : [c];
  }
  var S = D.String,
    Dg = D.gb(S),
    Eg = D.jb(S, D.En(S)),
    Fg = D.gb(Eg),
    Gg = D.jb(D.Number, D.String, D.Object),
    Hg = D.od("ExternalRect", {
      x: D.Number,
      y: D.Number,
      width: D.Number,
      height: D.Number,
    }),
    Ig = D.od("CanvasRenderingContext2D", { moveTo: D.Function }),
    T = (function() {
      function c(a, b, c) {
        var d = this;
        this.kb = {};
        this.Ko = {};
        this.Pp = null;
        this.Dh = {};
        this.Dc = this.ve = null;
        this.Lh = !1;
        this.xa = new pb();
        this.Dl = new Za();
        this.nt = new $a();
        this.globals = {};
        this.Qb = rg(5);
        this.Ag = this.Vg = null;
        this.df = [];
        this.ctx = this;
        this.vs = !1;
        this.fi = {};
        this.Pj = {};
        this.xq = 0;
        this.cg = this.wq = null;
        this.Ns = "";
        this.ml = null;
        var f = this;
        O.Yh.push(this);
        a.ZWIBBLER_CONTEXT = this;
        this.xa.add(function() {
          delete a.ZWIBBLER_CONTEXT;
          Q("Running ZwibblerContext destructor");
          d.gn();
          delete a.zwibbler;
          delete f.kb;
          delete f.ea;
          delete f.ve;
          for (var b = O.Yh, c = 0; c < b.length; c++)
            if (b[c] === f) {
              b.splice(c, 1);
              break;
            }
          d.Dc && d.Dc.stop();
        });
        this.ha = new Sf(this.xa, b);
        this.ea = new ng(this.xa, this, a, this.ha, c || this);
        this.$A = new vg(this);
        this.Tu();
        this.pa("document-changed", function(a) {
          a && ((d.summary = d.Rh()), a.remote || d.ta("local-changes"));
        });
        this.ea.ha.pa("latency", function(a) {
          d.Dc && d.Dc.PC(a);
        });
        this.ea.ha.pa("broadcastMouse", function(a) {
          d.$A.Nv(a, d.Qb);
        });
        this.Ww();
        this.pa("selected-nodes", function() {
          d.summary = d.Rh();
        });
        this.pa("tool-changed", function() {
          d.summary = d.Rh();
        });
        this.summary = this.Rh();
        this.Mk(sg, "left", "showToolbar");
        this.Mk(tg, "right", "showPageSelector");
        this.Mk(ug, "right", "showPropertyPanel");
        this.Mk(Rb, "bottom", "showColourPanel");
      }
      c.prototype.Xk = function(a, b) {
        this.ea.view.aa.Xk(a, b);
      };
      c.prototype.Xn = function(a, b) {
        D.ga("addKeyboardShortcut", arguments, D.String, D.Function);
        this.ea.Xn(a, b);
      };
      c.prototype.tg = function(a, b) {
        void 0 === b && (b = !1);
        D.ga("addRemoteChanges", arguments, D.String, D.Md);
        Q("Add remote changes: %s reset=%s", a, b);
        b && this.ea.oh(new lg(!0, this.ea.kf(), this.ea.si, this.df));
        try {
          this.ea.view.aa.yb.tg(a),
            0 === this.ib() &&
              (Q("After commit there are 0 pages. Create one!"),
              this.$a(),
              this.Fj(0),
              this.wa(!0));
        } catch (d) {
          throw (console.log(this.ea.view.aa.toString()),
          console.log(a),
          console.log(this.ea.view.aa.yb.toString()),
          b || this.ta("session-error", d),
          d);
        }
      };
      c.prototype.Ic = function(a, b) {
        D.ga("attach", arguments, D.Object, D.HTMLElement);
        P.Ic(a, b);
        P.digest();
        this.xa.add(function() {
          Q("DESTROYING A PANEL");
          P.detach(b);
        });
        if ((!this.vs && a instanceof c) || a.ctx instanceof c)
          (this.vs = !0),
            this.pa("tool-changed", function() {
              return P.digest();
            }),
            this.ea.ha.pa("update", function() {
              return P.digest();
            }),
            this.pa("document-changed", function() {
              return P.digest();
            }),
            this.pa("selected-nodes", function() {
              return P.digest();
            });
        this.resize();
      };
      c.prototype.digest = function(a) {
        D.ga("digest", arguments, D.Kf);
        P.digest(a);
      };
      c.prototype.Zw = function() {
        this.Xa("abortTransaction is not implemented. Please contact support.");
      };
      c.prototype.Vn = function(a, b, c) {
        void 0 === c && (c = -1);
        D.ga("addGridColumn", arguments, S, D.Number, D.Te);
        var d = this.ea.view.aa.Da(a);
        d && Sc(d) && this.Nk(a, d.Vn(c, b));
      };
      c.prototype.Wn = function(a, b, c) {
        void 0 === c && (c = -1);
        D.ga("addGridRow", arguments, S, D.Number, D.Te);
        var d = this.ea.view.aa.Da(a);
        d && Sc(d) && this.Nk(a, d.Wn(c, b));
      };
      c.prototype.gx = function(a, b, c) {
        D.ga(
          "addNodeToGrid",
          arguments,
          S,
          S,
          D.od("CellSpec", {
            column: D.$b,
            row: D.$b,
            endRow: D.Te,
            endColumn: D.Te,
            sticky: D.gb(D.jb(D.sd("column"), D.sd("row"), D.sd(""))),
            span: D.gb(
              D.jb(D.sd("none"), D.sd("horizontal"), D.sd("vertical"))
            ),
          })
        );
        var d = this.ea.view.aa.Da(a),
          f = this.ea.view.aa.Da(b);
        f &&
          5 === (f.lb & 5) &&
          d &&
          Sc(d) &&
          ((d = {
            "style.gridArea": d.Mz(
              c.row,
              c.column,
              c.endRow || c.row + 1,
              c.endColumn || c.column + 1
            ),
            "style.width": "auto",
            "style.height": "auto",
            sticky: c.sticky,
          }),
          c.span && (d._spanGrid = c.span),
          this.$a(),
          this.vb(b, d),
          this.Ki(a, b),
          this.wa());
      };
      c.prototype.Jq = function(a, b, c) {
        D.ga("setGridColumn", arguments, S, D.$b, D.Number);
        var d = this.ea.view.aa.Da(a);
        d && Sc(d) && this.vb(a, d.Jq(b, c));
      };
      c.prototype.Kq = function(a, b, c) {
        D.ga("setGridRow", arguments, S, D.$b, D.Number);
        var d = this.ea.view.aa.Da(a);
        d && Sc(d) && this.vb(a, d.Kq(b, c));
      };
      c.prototype.Nd = function(a, b, c, e, f, h, k) {
        D.ga(
          "addSelectionHandle",
          arguments,
          D.Number,
          D.Number,
          D.Number,
          D.Number,
          D.String,
          D.jb(D.Function, D.String),
          D.Kf
        );
        switch (h) {
          case "scale":
          case "rotate":
          case "translate":
            var d = h;
            break;
          default:
            if ("function" === typeof h) {
              d = "click";
              var n = h;
            } else {
              this.Xa(
                'addSelectionHandle: action must be "scale", "rotate", "translate", or a function'
              );
              return;
            }
        }
        this.ea.view.Nd(a, b, c, e, f, d, n, k);
      };
      c.prototype.Ki = function(a, b) {
        D.ga("addToParent", arguments, Eg);
        var c = this.ea.view.aa.Da(a);
        if (c)
          if ("GroupNode" !== c.type()) Q("parent is not a group");
          else {
            var e = Cg(b);
            this.Re(function(a) {
              a.Ki(c.id, e);
            });
          }
        else Q("addToGroup: Bad node id");
      };
      c.prototype.Yn = function(a) {
        D.ga("addToLanguage", arguments, D.String);
        this.ea.language.Yn(a);
      };
      c.prototype.jx = function(a, b) {
        D.ga("addPage", arguments, D.Ua, D.Ua);
        return this.Ea() ? this.ge() : this.Fj(this.ib(), a, b) || 0;
      };
      c.prototype.Ji = function(a, b, c) {
        D.ga("addPanel", arguments, D.Number, D.String, D.HTMLElement);
        this.ea.Ji(a, b, c);
      };
      c.prototype.px = function(a, b) {
        function c(a) {
          return e
            ? { start: a.x, length: a.width }
            : { start: a.y, length: a.height };
        }
        void 0 === b && (b = this.dc());
        D.ga(
          "alignNodes",
          arguments,
          D.In("top", "middle", "bottom", "centre", "left", "right"),
          Fg
        );
        var e = !0;
        switch (a) {
          case "top":
          case "middle":
          case "bottom":
            e = !1;
            break;
          case "center":
            a = "centre";
        }
        switch (a) {
          case "top":
          case "left":
            a = "start";
            break;
          case "middle":
          case "centre":
            a = "centre";
            break;
          case "right":
          case "bottom":
            a = "end";
            break;
          default:
            this.Xa(
              "Expected left|right|centre|top|middle|bottom but got '" + a + "'"
            );
        }
        this.$a();
        var f = c(this.lp(b)),
          h = f.start;
        f = f.length;
        for (var k = 0, l = b; k < l.length; k++) {
          var n = l[k],
            r = c(this.lp(n)),
            v = 0;
          switch (a) {
            case "start":
              v = h - r.start;
              break;
            case "end":
              v = h + f - r.start - r.length;
              break;
            case "centre":
              v = h + f / 2 - r.start - r.length / 2;
          }
          e ? this.sh(n, v, 0) : this.sh(n, 0, v);
        }
        this.wa();
      };
      c.prototype.yx = function(a, b) {
        D.ga("autoScroll", arguments, D.Number, D.Number);
        this.ea.view.scrollIntoView(a, b);
      };
      c.prototype.$a = function() {
        this.ea.view.aa.$a();
      };
      c.prototype.el = function() {
        this.$a();
      };
      c.prototype.Ex = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("bringToFront", arguments, Fg);
        this.Ea() || this.ea.view.Rd(0, Cg(a));
      };
      c.prototype.Gq = function(a) {
        D.ga("sendBroadcast", arguments, D.String);
        this.Dc && this.Dc.Gq(a);
      };
      c.prototype.pk = function(a, b, c) {
        D.ga("setSessionKey", arguments, D.String, D.og, D.Boolean);
        var d = { name: a, value: b, persistent: c };
        this.Pj[a] = d;
        c ||
          (null !== b && void 0 !== b ? (this.fi[a] = d) : delete this.fi[a]);
        this.Fg("local-keys");
      };
      c.prototype.Ye = function() {
        return this.Ea() ? !1 : this.ea.view.aa.Ye();
      };
      c.prototype.Ze = function() {
        return this.Ea() ? !1 : this.ea.view.aa.Ze();
      };
      c.prototype.qb = function() {
        this.ea.view.qb();
        this.ea.view.vc();
        this.ea.view.la();
      };
      c.prototype.Rx = function() {
        this.ea.oo();
      };
      c.prototype.Sx = function(a, b) {
        D.ga("clickColour", arguments, D.String, D.Boolean);
        if (this.Ea()) return !1;
        this.ui(a, !b);
      };
      c.prototype.wa = function(a) {
        void 0 === a && (a = !1);
        D.ga("commit", arguments, D.Md);
        this.ea.view.aa.wa(a);
      };
      c.prototype.Zx = function() {
        this.wa(!0);
      };
      c.prototype.nl = function() {
        this.wa(!1);
      };
      c.prototype.xg = function(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = this.dc());
        D.ga("copy", arguments, D.Md, Fg);
        return this.ea.view.xg(a, Cg(b));
      };
      c.prototype.my = function(a, b) {
        D.ga("createDataNode", arguments, D.Object, Dg);
        return this.createNode("DataNode", a, b);
      };
      c.prototype.oy = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("createGroup", arguments, Fg);
        if (this.Ea()) return !1;
        var b;
        this.Re(function(c) {
          b = c.group(Cg(a));
        });
        return b;
      };
      c.prototype.tc = function(a) {
        void 0 === a && (a = {});
        var b = {};
        if (a instanceof Array) return a.concat();
        if (!(a instanceof Object)) return a;
        for (var c in a)
          if (a.hasOwnProperty(c)) {
            var e = a[c];
            e = Jg(c, e);
            b[c] = e;
          }
        return b;
      };
      c.prototype.qy = function(a) {
        D.ga("createLogger", arguments, D.String);
        return A.create(a);
      };
      c.prototype.createNode = function(a, b, c, e) {
        D.ga("createNode", arguments, D.String, D.Object, Dg, D.Ua);
        Q("createNode(%s)", a);
        Kf(a) || this.Xa("createNode: node type must be string");
        var d = this.tc(b);
        return c ? this.ea.createNode(a, d, c, e) : this.ea.createNode(a, d);
      };
      c.prototype.py = function(a, b, c, e) {
        void 0 === b && (b = {});
        D.ga("createHTMLNode", arguments, D.String, D.qd, Dg, D.Te);
        if (!O.te[a]) throw Error("Component " + a + " not registered");
        var d = O.te[a].defaults;
        if (d) for (var h in d) h in b || (b[h] = d[h]);
        b.$component = a;
        return this.createNode("HTMLNode", b, c, e);
      };
      c.prototype.uo = function(a, b, c, e) {
        D.ga(
          "createHTMLNodeFromDrag",
          arguments,
          D.String,
          D.Object,
          D.Number,
          D.Number
        );
        var d = O.Ft(a);
        b = ic({}, d, b);
        this.ea.view.uo(a, b, c, e);
      };
      c.prototype.ol = function(a) {
        D.ga("createPath", arguments, D.Hk);
        return this.ea.ol(a);
      };
      c.prototype.ny = function(a, b) {
        void 0 === b && (b = {});
        D.ga(
          "createGridNode",
          arguments,
          D.od("GridSpec", { columns: D.Hk, rows: D.Hk }),
          D.qd
        );
        var c = ic({}, b, Bg(this.ea.view.aa.Yb, a));
        return this.createNode("HTMLGridNode", c);
      };
      c.prototype.Mk = function(a, b, c) {
        var d = this,
          f;
        this.ea.ha.pa(c, function(c) {
          c
            ? (f ||
                (a.style && O.De(a.style),
                (c = document.createElement("div")),
                (c.innerHTML = a.gm),
                (f = c.firstChild),
                d.Ic(d, f),
                a.controller && a.controller(d)),
              d.ea.Ji(1, b, f))
            : f && d.ea.ek(f);
        });
      };
      c.prototype.vy = function(a, b) {
        D.ga(
          "createToolbar",
          arguments,
          D.jb(D.String, D.HTMLElement),
          D.En(
            D.od("ToolbarItem", {
              toolName: D.Sb,
              onclick: D.Kf,
              title: D.Sb,
              background: D.Sb,
              image: D.Sb,
              html: D.Sb,
            })
          )
        );
        var c = u.nc(a);
        if (c) {
          Jf(b) || this.Xa("createToolbar: second parameter must be array");
          O.De(
            "a.zwibbler-button {\n            background-repeat: no-repeat;\n            background-position: center;\n            display: inline-block;\n            overflow: hidden;\n        }"
          );
          for (
            var e = this,
              f = function(a, b) {
                b.addEventListener("click", function(b) {
                  a.onclick.call(this, e, b);
                });
              },
              h = 0;
            h < b.length;
            h++
          ) {
            var k = b[h],
              l = u("a").be("zwibbler-button").da;
            l.setAttribute("href", "javascript:void(0)");
            k.toolName && u(l).be(k.toolName);
            k.onclick && f(k, l);
            k.title && l.setAttribute("title", k.title);
            k.background
              ? (l.style.background = k.background)
              : k.image && (l.style.backgroundImage = "url(" + k.image + ")");
            k.html && (l.innerHTML = k.html);
            c.appendChild(l);
          }
          var n;
          this.pa("tool-changed", function(a) {
            n && n.classList.remove("zwibbler-selected");
            (n = c.querySelector("." + a)) &&
              n.classList.add("zwibbler-selected");
          });
        } else
          this.Xa(
            "createToolbar: Could not convert first parameter to an HTML element"
          );
      };
      c.prototype.wo = function(a) {
        D.ga("createShape", arguments, D.Hk);
        this.ea.wo(a) ||
          this.Xa("createShape needs an array of at least 6 numbers");
      };
      c.prototype.yo = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("cut", arguments, Fg);
        var b = this.ea.view.xg(!1, a);
        this.Ea() || this.$s();
        return b;
      };
      c.prototype.cf = function(a) {
        D.ga(
          "decoration",
          arguments,
          D.od("Decoration", {
            appliesTo: D.Kf,
            xoffset: D.Ua,
            yoffset: D.Ua,
            x: D.Ua,
            y: D.Ua,
            width: D.Ua,
            image: D.Sb,
            hoverImage: D.Sb,
          })
        );
        this.df.push(new $c(this, a));
      };
      c.prototype.Sa = function() {
        if (!this.Lh) {
          this.xc("destroy");
          this.ea.Sa();
          this.Dl.Sa();
          this.nt.Sa();
          for (var a in this) this.hasOwnProperty(a) && delete this[a];
          this.Lh = !0;
        }
      };
      c.prototype.Re = function(a) {
        this.ea.view.aa.transaction(a);
      };
      c.prototype.wy = function(a, b) {
        D.ga("deleteGridColumn", arguments, S, D.$b);
        var c = this.ea.view.aa.Da(a);
        c && Sc(c) && this.Nk(c.id, c.xy(b, b));
      };
      c.prototype.yy = function(a, b) {
        D.ga("deleteGridRow", arguments, S, D.$b);
        var c = this.ea.view.aa.Da(a);
        c && Sc(c) && this.Nk(c.id, c.zy(b, b));
      };
      c.prototype.Nk = function(a, b) {
        console.log("Grid plan was ", JSON.stringify(b, null, 2));
        this.$a();
        for (var c = 0, e = b.children; c < e.length; c++) {
          var f = e[c];
          f.remove ? this.ue(f.Ke) : this.vb(f.Ke, f.$f);
        }
        this.vb(a, b.ba);
        this.wa();
      };
      c.prototype.ue = function(a) {
        this.ac(a);
      };
      c.prototype.Rw = function(a) {
        for (var b = 0; b < a.length; b++)
          this.ea.view.aa.Da(a[b], !1) || (a.splice(b, 1), --b);
        return 0 < a.length;
      };
      c.prototype.ac = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("deleteNodes", arguments, Fg);
        if (!this.Ea()) {
          Q("deleteNodes()");
          var b = Cg(a);
          this.Rw(b) &&
            this.Re(function(a) {
              return a.ac(b);
            });
        }
      };
      c.prototype.Ay = function(a) {
        var b = this;
        void 0 === a && (a = this.ge());
        D.ga("deletePage", arguments, D.Te);
        if (!this.Ea())
          if (
            ((0 > a || a >= this.ib()) &&
              this.Xa(
                "deletePage: Asked to delete " +
                  a +
                  " but there are only " +
                  this.ib() +
                  " pages"
              ),
            1 === this.ib())
          )
            this.Re(function(a) {
              a.ac(Cg(b.Qo()));
              var c = a.Be(0),
                d = c.rb(),
                e = {},
                l = 0,
                n;
              for (n in d) "_" === n[0] && ((e[n] = void 0), l++);
              l && a.vb([c.id], e);
            });
          else {
            var c = this.ea.view.aa.Be(a).id;
            this.Re(function(a) {
              return a.ac([c]);
            });
          }
      };
      c.prototype.$s = function() {
        this.Ea() || this.ea.view.bj();
      };
      c.prototype.Rf = function() {
        1 === arguments.length && !1 === arguments[0] && this.ea.view.aa.yu();
        return this.ea.view.aa.Rf();
      };
      c.prototype.dispatchEvent = function(a, b) {
        D.ga("dispatchEvent", arguments, D.Kn(Event), D.gb(D.Kn(HTMLElement)));
        Q("dispatchEvent(%s)", a.type);
        b = b || a.target || this.ea.ce;
        return b.dispatchEvent(a);
      };
      c.prototype.Qp = function(a, b) {
        var c = this;
        D.ga("mouseEvent", arguments, D.String, D.Object);
        if ("click" === a) {
          var e = this.Qp("down", b);
          return (e = e || this.Qp("up", b));
        }
        var f = {
          clientX:
            (b.pageX || 0) -
            (document.documentElement.scrollLeft + document.body.scrollLeft),
          clientY:
            (b.pageY || 0) -
            (document.documentElement.scrollTop + document.body.scrollTop),
          bubbles: !0,
          cancelable: !0,
          buttons: b.buttons,
          ctrlKey: b.ctrlKey || !1,
          altKey: b.altKey || !1,
        };
        try {
          e =
            "onpointerdown" in window && !("ontouchstart" in window)
              ? new PointerEvent("pointer" + a, f)
              : new MouseEvent("mouse" + a, f);
        } catch (h) {
          return (
            (e = document.createEvent("MouseEvent")),
            e.initMouseEvent(
              "mouse" + a,
              f.bubbles || !1,
              f.cancelable || !1,
              window,
              0,
              f.screenX || 0,
              f.screenY || 0,
              f.clientX || 0,
              f.clientY || 0,
              f.ctrlKey || !1,
              f.altKey || !1,
              f.shiftKey || !1,
              f.metaKey || !1,
              f.button || 0,
              f.relatedTarget || null
            ),
            Object.defineProperty(e, "buttons", {
              get: function() {
                return f.buttons;
              },
            }),
            Object.defineProperty(e, "target", {
              get: function() {
                return b.target || c.ea.ce;
              },
            }),
            this.ea.view.iw.handleEvent(e),
            !e.defaultPrevented
          );
        }
        return this.dispatchEvent(e, b.target);
      };
      c.prototype.download = function(a, b, c, e) {
        void 0 === e && (e = 0);
        D.ga("download", arguments, D.String, D.String, D.gb(Hg), D.Ua);
        "jpeg" === a && (a = "jpg");
        if (
          "pdf" === a ||
          "svg" === a ||
          "png" === a ||
          "jpg" === a ||
          "bmp" === a ||
          "zwibbler3" === a
        ) {
          var d =
            "zwibbler3" === a
              ? mg.Ik(this.ea.view.aa, a, "data-uri")
              : this.save(a, c, e);
          this.nt.sC(d, b);
        } else this.Xa("unsupported format for download: %s", a);
      };
      c.prototype.la = function(a, b) {
        void 0 === b && (b = {});
        D.ga("draw", arguments, Ig, D.gb(D.od("DrawOptions", { page: D.Te })));
        var c = b.page || 0,
          e = this.ea.view.aa.bb;
        var f = "page" in b ? this.Zf(c) : this.Qh();
        this.ea.view.aa.Cc(c);
        this.ea.view.ef(a, 1, f.x, f.y, f.width, f.height, 1, 0, 0);
        this.ea.view.aa.la(a);
        this.ve && this.ve(a);
        this.ea.view.aa.Cc(e);
      };
      c.prototype.Ry = function(a) {
        D.ga("editNodeText", arguments, S);
        if (!this.Ea()) {
          var b = this.ea.view.aa.Fb(a, !1);
          if (b)
            if (b.Pg()) {
              var c = this.ea.view.fr({});
              c && c.Zq(b, b.rect.x, b.rect.y);
            } else
              Q("editNodeText: node %s (%s) cannot contain text.", a, b.type());
          else Q("editNodeText: ExtNodeID %s does not exist.", a);
        }
      };
      c.prototype.duplicate = function() {
        this.Ea() || this.ea.view.duplicate();
      };
      c.prototype.On = function(a, b, c) {
        var d = this;
        if (!(this.Lh || this.Ko[a] || this.Uw(a))) {
          var f = function() {
            if (!d.Lh) {
              d.Ko[a] = !1;
              if (a in d.kb)
                for (var c = 0, e = d.kb[a]; c < e.length; c++) {
                  var f = e[c];
                  try {
                    var n = f.apply(null, b);
                  } catch (r) {
                    console.log("Error in handler for '" + a + "':", r);
                  }
                }
              d.digest();
              return n;
            }
          };
          "once" === c && (this.Ko[a] = !0);
          if ("now" === c) return f();
          setTimeout(f, 0);
          return this;
        }
      };
      c.prototype.ta = function(a) {
        for (var b = [], c = 1; c < arguments.length; c++)
          b[c - 1] = arguments[c];
        D.ga("emit", arguments, D.String);
        return this.On(a, b, "normal");
      };
      c.prototype.xc = function(a) {
        for (var b = [], c = 1; c < arguments.length; c++)
          b[c - 1] = arguments[c];
        return this.On(a, b, "now");
      };
      c.prototype.Fg = function(a) {
        for (var b = [], c = 1; c < arguments.length; c++)
          b[c - 1] = arguments[c];
        return this.On(a, b, "once");
      };
      c.prototype.hD = function(a) {
        D.ga("skipEvent", arguments, D.String);
        this.Dh[a] = a in this.Dh ? this.Dh[a] + 1 : 1;
      };
      c.prototype.Uw = function(a) {
        return a in this.Dh && 0 < this.Dh[a]
          ? (Q("Skipped %s event", a), --this.Dh[a], !0)
          : !1;
      };
      c.prototype.focus = function(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = null);
        D.ga("focus", arguments, D.Md, D.gb(D.HTMLElement));
        this.ea.WC(b);
        a ? this.ea.Qq("text" === this.Ph()) : this.ea.focus();
      };
      c.prototype.blur = function() {
        this.ea.blur();
      };
      c.prototype.hz = function(a) {
        function b(b) {
          return a(b.id);
        }
        D.ga("forEachNode", arguments, D.Function);
        this.ea.view.aa.yl(b, this.ea.view.aa.Da(this.ea.view.aa.root.id), !0);
        for (var c = 0, e = this.ea.view.aa.lj; c < e.length; c++)
          this.ea.view.aa.yl(b, e[c], !0);
      };
      c.prototype.dz = function(a) {
        D.ga("findNode", arguments, D.String);
        var b = this.pt(a);
        return b.length ? b[0] : null;
      };
      c.prototype.pt = function(a) {
        D.ga("findNodes", arguments, D.String);
        for (var b = this.ea.view.aa.ez(a), c = [], e = 0; e < b.length; e++)
          c.push(b[e].id);
        return c;
      };
      c.prototype.fz = function(a, b, c) {
        D.ga("flip", arguments, D.Number, D.Ua, D.Ua);
        if (!this.Ea())
          if (3 === arguments.length)
            if ("number" !== typeof b || "number" !== typeof c)
              this.Xa("flip: 2nd and 3rd args must be numbers.");
            else {
              var d = new F(b, c);
              this.ea.view.ut((a / 180) * Math.PI, d);
            }
          else this.ea.view.ut((a / 180) * Math.PI);
      };
      c.prototype.mj = function(a, b, c, e) {
        D.ga("flipNodes", arguments, D.En(S), D.Number, D.Ua, D.Ua);
        if (!this.Ea()) {
          var d = this.ks(Cg(a));
          if ("number" === typeof c && "number" === typeof e) {
            var h = new F(c, e);
            this.ea.view.mj(d, (b / 180) * Math.PI, h);
          } else this.ea.view.mj(d, (b / 180) * Math.PI);
        }
      };
      c.prototype.At = function(a, b, c) {
        var d = this;
        void 0 === c && (c = {});
        D.ga(
          "generatePalette",
          arguments,
          D.jb(D.String, D.HTMLElement),
          D.Number,
          D.gb(D.od("Options", { onColour: D.Kf, onOpacity: D.Kf }))
        );
        c.onColour =
          c.onColour ||
          c.onColor ||
          function(a, b) {
            d.ui(a, b);
          };
        c.onOpacity =
          c.onOpacity ||
          function(a, b) {
            d.Tv(a, b);
          };
        return tf(a, b, c);
      };
      c.prototype.Po = function() {
        return this.ea.view.mz();
      };
      c.prototype.Qo = function() {
        var a = [];
        this.ea.view.aa.wc(function(b) {
          a.push(b.id);
        }, this.ge());
        return a;
      };
      c.prototype.rz = function() {
        return this.ea.sz();
      };
      c.prototype.So = function(a) {
        D.ga("getBoundingRectangle", arguments, Eg);
        return this.rg(this.ea.view.So(Cg(a)));
      };
      c.prototype.yc = function(a) {
        D.ga("getConfig", arguments, D.String);
        return this.ea.ha.get(a);
      };
      c.prototype.ge = function() {
        return this.ea.view.aa.bb;
      };
      c.prototype.zz = function() {
        return this.ea.view.Ol();
      };
      c.prototype.Az = function() {
        return this.ea.view.yj();
      };
      c.prototype.Ph = function() {
        return this.ea.view.Ph();
      };
      c.prototype.Bz = function(a) {
        D.ga("getCustomNode", arguments, S);
        var b = this.ea.view.aa.Da(a),
          c = null;
        b && "CustomNode" === b.type() && (c = b.cb);
        return c;
      };
      c.prototype.pj = function(a, b, c, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        D.ga(
          "getDocumentCoordinates",
          arguments,
          D.Number,
          D.Number,
          D.Ua,
          D.Ua
        );
        var d = this.ea.view.oe(a, b),
          h = this.To();
        return { x: d.x, y: d.y, width: c / h, height: e / h };
      };
      c.prototype.Ez = function(a) {
        D.ga("getDocumentProperty", arguments, D.String);
        return this.ea.view.aa.ia(a);
      };
      c.prototype.Qh = function(a) {
        void 0 === a && (a = this.ge());
        D.ga("getDocumentSize", arguments, D.Te);
        var b;
        this.yc("pageView") && (b = hg);
        return this.rg(this.ea.view.aa.cd(a, b));
      };
      c.prototype.nc = function() {
        return this.ea.kf();
      };
      c.prototype.Ol = function() {
        return this.ea.view.Ol();
      };
      c.prototype.Nz = function(a) {
        a = this.ea.view.aa.Da(a);
        if (!a) return null;
        for (var b = a.parent; b; ) {
          if (Sc(b)) {
            var c = b.vz(a);
            if (c)
              return {
                gridID: b.id,
                row: c.qC,
                endRow: c.pC,
                column: c.Vx,
                endColumn: c.Ux,
                sticky: a.ia("sticky"),
              };
            break;
          }
          a = b;
          b = b.parent;
        }
        return null;
      };
      c.prototype.bp = function(a) {
        a = this.ea.view.aa.Da(a);
        if (!a || !Sc(a)) return null;
        a = a.bp();
        return { rows: a.rows, columns: a.Os };
      };
      c.prototype.Qz = function() {
        for (var a = [], b = 0, c = this.ea.view.aa.pp(); b < c.length; b++) {
          var e = c[b];
          a.push({ cid: e.Nx, ts: e.Nb });
        }
        return a;
      };
      c.prototype.fp = function(a) {
        D.ga("getImageUrl", arguments, D.String);
        return this.ea.ha.fp(a);
      };
      c.prototype.Vz = function(a) {
        D.ga("getLanguageString", arguments, D.String);
        return this.ea.language.get(a);
      };
      c.prototype.jp = function() {
        var a = this.ea.view.aa.yb.uz();
        if (!a.empty()) return (this.Vg = a), a.toString();
        this.Vg = null;
        return "";
      };
      c.prototype.rg = function(a) {
        return new Kg(a.x, a.y, a.width, a.height);
      };
      c.prototype.Qk = function(a) {
        "object" !== typeof a && this.Xa("Error: Rectangle object expected.");
        a = new G(a.x || 0, a.y || 0, a.width || 0, a.height || 0);
        a.vv();
        return a;
      };
      c.prototype.Gz = function() {
        return this.rg(this.ea.view.aa.Ro());
      };
      c.prototype.Pz = function(a) {
        D.ga("getGroupParent", arguments, S);
        var b = this.ea.view.aa.Fb(a);
        return null === b
          ? (Q("getGroupParent: No such node %s", a), null)
          : b.parent && "GroupNode" === b.parent.type()
          ? b.parent.id
          : null;
      };
      c.prototype.Oz = function(a) {
        D.ga("getGroupMembers", arguments, S);
        var b = [],
          c = this.ea.view.aa.Da(a);
        if (!c || "GroupNode" !== c.type())
          return Q("getGroupMembers: Error node %s is not a group.", a), b;
        for (var e = 0; e < c.children.length; e++) b.push(c.nb(e).id);
        return b;
      };
      c.prototype.Tz = function(a, b) {
        return this.Tl(a, b);
      };
      c.prototype.Xz = function() {
        var a = [],
          b = {};
        this.ea.view.aa.Nc(!1, function(d) {
          !(c = d.zc()) || c in b || ((b[c] = 1), a.push(c));
        });
        var c = this.Po();
        c in b || a.push(c);
        return a;
      };
      c.prototype.Wz = function(a) {
        D.ga("getLayerNodes", arguments, D.String);
        var b = [];
        this.ea.view.aa.Nc(!1, function(c) {
          c.zc() === a && b.push(c.id);
        });
        return b;
      };
      c.prototype.$z = function(a, b, c) {
        D.ga("getNodeCoordinates", arguments, S, D.Number, D.Number);
        var d = this.ea.view.aa.Fb(a);
        if (null === d)
          return this.Xa("Error: node %s does not exist", a), null;
        d = this.ea.view.kB(d, b, c);
        return { x: d.x, y: d.y };
      };
      c.prototype.aA = function(a) {
        return (a = this.ea.view.aa.Da(a)) && a.parent ? a.parent.fe(a) : -1;
      };
      c.prototype.jf = function(a) {
        D.ga("getNodePageNumber", arguments, S);
        return this.ea.view.aa.jf(a);
      };
      c.prototype.Tl = function(a, b) {
        D.ga("getNodeProperty", arguments, S, D.String);
        return this.ea.Tl(a, b);
      };
      c.prototype.lp = function(a) {
        D.ga("getNodeRectangle", arguments, Eg);
        for (
          var b = null, c = 0, e = this.ea.view.aa.mp(Cg(a), !0);
          c < e.length;
          c++
        ) {
          var f = e[c];
          Pc(f) &&
            "GroupNode" != f.type() &&
            (Rc(f) && this.ea.view.aa.Ep(f)
              ? ((f = u(f.da).oc()),
                (f = this.pj(f.left, f.top, f.width, f.height)),
                (f = new G(f.x, f.y, f.width, f.height)))
              : (f = f.rect),
            b ? b.th(f) : (b = f.clone()));
        }
        b || (b = new G(0, 0, 0, 0));
        return this.rg(b);
      };
      c.prototype.bA = function(a) {
        D.ga("getNodeScale", arguments, S);
        var b = this.ea.view.aa.Fb(a);
        if (null === b)
          return this.Xa("Error: node %s does not exist", a), null;
        b = b.Na().Gb();
        return { x: b.x, y: b.y };
      };
      c.prototype.cA = function(a) {
        D.ga("getNodeTransform", arguments, S);
        var b = this.ea.view.aa.Fb(a);
        if (null === b) this.Xa("Error: node %s does not exist", a);
        else return (b = b.Na()), [b.m11, b.m21, b.m12, b.m22, b.Aa, b.Ba];
      };
      c.prototype.dA = function(a) {
        D.ga("getNodeType", arguments, S);
        var b = this.ea.view.aa.Da(a),
          c = "";
        b && (c = b.Pm());
        return c;
      };
      c.prototype.eA = function(a, b) {
        D.ga("getNodeUnderPoint", arguments, D.Number, D.Number);
        var c = this.ea.view.aa.Hb(a, b, this.ea.view.scale, this.ea.view.Tb)
          .node;
        return c
          ? c.id
          : this.ea.view.gv(a, b) && ((c = this.dc()), c.length)
          ? c[0]
          : null;
      };
      c.prototype.hA = function(a, b, c) {
        void 0 === c && (c = 0);
        D.ga("getNodesUnderPoint", arguments, D.Number, D.Number, D.Ua);
        for (
          var d = [],
            f = 0,
            h = this.ea.view.aa.yA(a, b, c, this.ea.view.scale);
          f < h.length;
          f++
        )
          d.push(h[f].id);
        return d;
      };
      c.prototype.ib = function() {
        return this.ea.view.aa.ib();
      };
      c.prototype.vj = function(a) {
        D.ga("getPageNode", arguments, D.$b);
        (0 > a || a > this.ib()) &&
          this.Xa(
            "getPageNode: Invalid page number " +
              a +
              ". Must be 0.." +
              this.ib()
          );
        var b = this.ea.view.aa.Be(a);
        return b ? b.id : null;
      };
      c.prototype.Zf = function(a) {
        D.ga("getPageRect", arguments, D.$b);
        (0 > a || a >= this.ib()) &&
          this.Xa(
            "getPageRect: Invalid page number " +
              a +
              ". Must be 0.." +
              this.ib()
          );
        return this.rg(this.ea.view.Zf(a));
      };
      c.prototype.Ul = function(a) {
        D.ga("getPathData", arguments, S);
        var b = this.ea.view.aa.Fb(a, !1);
        if (!b || "PathNode" !== b.type()) return null;
        var c = [],
          e = 0;
        for (
          b = b
            .Ul()
            .clone()
            .Qe();
          e < b.length;
          e++
        )
          for (var f = b[e], h = 0; h < f.length; h++) {
            var k = f[h];
            c.push(k.x);
            c.push(k.y);
          }
        return c;
      };
      c.prototype.kA = function(a) {
        D.ga("getPathAsPoints", arguments, S);
        var b = this.ea.view.aa.Da(a, !1);
        if (!b || "PathNode" !== b.type()) return null;
        b = b.Ul();
        for (var c = [], e = [], f = 0; f < b.fa.length; ) {
          switch (b.fa[f]) {
            case K.Wc:
              e = [{ x: b.fa[f + 1], y: b.fa[f + 2] }];
              c.push(e);
              break;
            case K.pd:
              e.push({ x: b.fa[f + 1], y: b.fa[f + 2] });
          }
          f += K.rd[b.fa[f]];
        }
        return c;
      };
      c.prototype.To = function() {
        return this.ea.view.scale;
      };
      c.prototype.$o = function() {
        var a = this.ea.view.$o();
        return a ? a.id : null;
      };
      c.prototype.Wl = function(a, b, c, e) {
        D.ga("getScreenCoordinates", arguments, D.Number, D.Number, D.Ua, D.Ua);
        var d = this.ea.view.Nh(a, b);
        if (void 0 === c || void 0 === e) return { x: d.x, y: d.y };
        var h = this.ea.view.Nh(a + c, b + e);
        return this.rg(new G(d.x, d.y, h.x - d.x, h.y - d.y));
      };
      c.prototype.nA = function() {
        return this.ea.view.xe;
      };
      c.prototype.yj = function() {
        return this.ea.view.yj();
      };
      c.prototype.Nl = function(a, b) {
        D.ga("getEditHandleType", arguments, S, Gg);
        var c = this.ea.view.aa.Fb(a, !1);
        return c && c.mf() ? c.Nl(b) : null;
      };
      c.prototype.JC = function(a, b, c) {
        D.ga("setEditHandle", arguments, S, Gg, D.String);
        var d = this.ea.view.aa.Da(a, !1);
        if (!d) return Q("setEditHandle: node %s doesn't exist.", a), !1;
        if ("PathNode" !== d.type())
          return Q("setEditHandle: node %s is not a PathNode.", a), !1;
        d = d.ia("commands");
        d = L.Lw(d, b, c);
        if (!d) return Q("setEditHandle: failed"), !1;
        this.Jd(a, "commands", d);
        return !0;
      };
      c.prototype.dc = function(a) {
        void 0 === a && (a = !0);
        D.ga("getSelectedNodes", arguments, D.Md);
        return this.ea.view.Rc(a);
      };
      c.prototype.Rh = function(a) {
        function b(a, b) {
          var c = e.properties[a];
          void 0 !== b &&
            (e.properties[a] = c !== b && void 0 !== c ? null : b);
          e.empty = !1;
        }
        function c(a) {
          var c = a.Pm();
          e.types[c] = !0;
          e.types.AnyNode = !0;
          e.empty = !1;
          e.nodes.push(a.id);
          var d = a.rb();
          "PathNode" === c
            ? ((c = d.closed ? "PathNode-closed" : "PathNode-open"),
              (e.types[c] = !0))
            : "HTMLNode" === c && (e.types[d.$component] = !0);
          d = a.rb();
          "TextNode" === c &&
            ((d["border-color"] = a.ia("border-color")),
            (d["border-width"] = a.ia("border-width")),
            (d.background = a.ia("background") || "transparent"),
            (d.textFillStyle = a.ia("fillStyle")));
          for (var h in d)
            d.hasOwnProperty(h) &&
              "matrix" !== h &&
              ("BrushNode" !== c || "fillStyle" !== h) &&
              ("PathNode-open" !== c ||
                ("fontSize" !== h && "fontName" !== h && "fillStyle" !== h)) &&
              ("PathNode-closed" !== c ||
                (((f && d.text) || ("fontSize" !== h && "fontName" !== h)) &&
                  "arrowSize" !== h &&
                  "arrowStyle" !== h)) &&
              b(h, d[h]);
        }
        void 0 === a && (a = this.dc(!1));
        D.ga("getPropertySummary", arguments, Fg);
        for (
          var e = { properties: {}, types: {}, nodes: [], empty: !0 },
            f = this.ea.ha.get("allowTextInShape"),
            h = 0;
          h < a.length;
          h++
        ) {
          var k = this.ea.view.aa.Da(a[h], !1);
          k && Pc(k) && (c(k), this.ea.view.aa.yl(c, k));
        }
        !e.nodes.length ||
          "opacity" in e.properties ||
          (e.properties.opacity = 1);
        if (this.ea.view.ra.Mg) {
          h = this.ea.view.ra.Mg();
          for (var l in h) b(l, h[l]);
        }
        if (this.ea.view.ra.sp)
          for (l = 0, h = this.ea.view.ra.sp(); l < h.length; l++)
            e.types[h[l]] = !0;
        return e;
      };
      c.prototype.Ut = function() {
        return this.rg(this.ea.view.Ub());
      };
      c.prototype.tA = function(a) {
        D.ga("goToRevision", arguments, D.jb(D.String, D.xh));
        this.Vm("readOnly", this.ea.view.aa.locked());
      };
      c.prototype.hasFocus = function() {
        return this.ea.hasFocus();
      };
      c.prototype.Xa = function(a) {
        for (var b = 1; b < arguments.length; b++);
        b = arguments[0].split("%s");
        for (var c = [], e = 0; e < b.length; e++)
          c.push(b[e]),
            e < b.length - 1 && c.push(JSON.stringify(arguments[e + 1]));
        b = c.join("");
        Q(b);
        console.log(b);
        throw Error(b);
      };
      c.prototype.AB = function(a) {
        D.ga(
          "openFile",
          arguments,
          D.gb(
            D.od("OpenFileArgs", {
              accept: D.Sb,
              format: D.In("text", "data-uri", "ArrayBuffer", "File"),
              capture: D.Sb,
            })
          )
        );
        a || (a = {});
        switch (a.format) {
          case "ArrayBuffer":
          case void 0:
          case "File":
          case "data-uri":
            break;
          default:
            throw Error("openFile: requested format not known. Check docs.");
        }
        return this.Dl.open({
          accept: a.accept,
          format: a.format || "data-uri",
          capture: a.capture,
        }).then(function(a) {
          return { data: a.data, contentType: a.contentType };
        });
      };
      c.prototype.AA = function(a) {
        var b = this;
        void 0 === a && (a = {});
        D.ga("insertImage", arguments, D.qd);
        return new Promise(function(c) {
          b.Ea() ||
            (a.url
              ? b.ea.view.Tp(a).then(c)
              : b.Dl.open({ accept: "image/*", format: "File" }).then(function(
                  d
                ) {
                  var e = b.ea.view.Ub().Qd();
                  if (!1 === b.xc("paste", d.data, e.x, e.y))
                    Q("paste of file is cancelled by external app.");
                  else {
                    var h = new FileReader();
                    h.readAsDataURL(d.data);
                    h.onloadend = function() {
                      b.ea.view.Tp(ic(a, { url: h.result })).then(c);
                    };
                  }
                }));
        });
      };
      c.prototype.Fj = function(a, b, c) {
        void 0 === a && (a = this.ge());
        D.ga("insertPage", arguments, D.Te, D.Ua, D.Ua);
        if (this.Ea()) return this.ge();
        var d = { background: this.yc("background") };
        Lf(b) && Lf(c) && ((d.width = b), (d.height = c));
        this.Re(function(b) {
          return b.createNode("PageNode", d, b.root.id, a);
        });
        return a;
      };
      c.prototype.pm = function(a) {
        D.ga("isLayerVisible", arguments, D.String);
        return this.ea.view.aa.pm(a);
      };
      c.prototype.Sg = function(a) {
        D.ga("isNodeSelected", arguments, S);
        var b = this.ea.view.aa.Fb(a);
        return null !== b && this.ea.view.Sg(b);
      };
      c.prototype.Ee = function(a, b) {
        D.ga("isPointOverCanvas", arguments, D.Number, D.Number);
        return this.ea.view.Ee(a, b);
      };
      c.prototype.load = function(a, b) {
        D.ga("load", arguments, D.String, D.gb(D.jb(D.String, D.Object)));
        void 0 === b && (b = a);
        var c = mg.yh(b, this.ea.kf(), this.ea.si, this.df);
        if (c) return this.gn(), this.ea.oh(c), !0;
        Q("load(): Could not open file.");
        return !1;
      };
      c.prototype.sm = function(a) {
        D.ga("lockUpdates", arguments, D.Number);
        var b = this;
        Lf(a)
          ? (this.Pp && clearTimeout(this.Pp),
            (this.Pp = setTimeout(function() {
              b.ea.view.sm(!1);
            }, a)),
            b.ea.view.sm(!0))
          : this.Xa("lockUpdates: Expected a number");
      };
      c.prototype.Mj = function(a) {
        D.ga("markChangesSent", arguments, D.String);
        if (this.Vg || a) {
          if (!this.Vg || a !== this.Vg.toString())
            throw Error(
              "markChangesSent: does not match last getLocalChanges()"
            );
          Q("Mark changes sent!");
          this.ea.view.aa.yb.Mj(this.Vg.MA);
          this.Vg = null;
        }
      };
      c.prototype.aB = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("moveDown", arguments, Fg);
        this.Ea() || this.ea.view.Rd(3, Cg(a));
      };
      c.prototype.bB = function(a, b) {
        D.ga("movePage", arguments, D.$b, D.$b);
        if (!this.Ea())
          if (Lf(a) && Lf(b)) {
            var c = this.ib();
            if (0 > a || a >= c)
              this.Xa("From page must be > 0 and less than getPageCount()");
            else if (0 > b || b >= c)
              this.Xa("From page must be > 0 and less than getPageCount()");
            else {
              var e = this.vj(a);
              null !== e &&
                this.Re(function(a) {
                  return a.Rd([e], 4, b);
                });
            }
          } else this.Xa("movePage: needs two valid page numbers.");
      };
      c.prototype.cB = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("moveUp", arguments, Fg);
        this.Ea() || this.ea.view.Rd(2, Cg(a));
      };
      c.prototype.Sp = function() {
        this.gn();
        this.ea.Sp();
        this.Tu();
      };
      c.prototype.nextPage = function() {
        this.nh(Math.min(this.ge() + 1, this.ib() - 1));
      };
      c.prototype.pa = function(a, b) {
        D.ga("on", arguments, D.String, D.Function);
        this.ha.has(a)
          ? this.ha.pa(a, b)
          : "draw" === a
          ? (this.ve = b)
          : a in this.kb
          ? this.kb[a].push(b)
          : (this.kb[a] = [b]);
        return this;
      };
      c.prototype.tB = function(a) {
        var b = this;
        D.ga("onComplete", arguments, D.Function);
        this.ea.view.jz(function() {
          a();
          b.digest();
        });
      };
      c.prototype.Tu = function() {
        var a = this.ea.ha.get("defaultPaperSize");
        Q("onNewDocument()");
        "none" !== a && this.Nq(a);
      };
      c.prototype.BB = function(a) {
        var b = this;
        D.ga("openFromComputer", arguments, D.String);
        return this.Dl.open({ accept: "." + a, format: "text" }).then(function(
          a
        ) {
          if ("string" === typeof a.data && b.load(a.data)) return b;
          throw Error("Could not open the file.");
        });
      };
      c.prototype.ak = function(a) {
        D.ga("paste", arguments, D.Sb);
        this.Ea() || this.ea.view.ak(a);
      };
      c.prototype.NB = function(a) {
        D.ga("pauseSharedSession", arguments, D.Boolean);
        this.Dc && this.Dc.VC(a);
      };
      c.prototype.RB = function() {
        this.nh(Math.max(this.ge() - 1, 0));
      };
      c.prototype.print = function(a, b) {
        D.ga("print", arguments, D.gb(D.jb(D.$b, D.Fw)), D.gb(Hg));
        var c = [],
          e;
        if ("number" === typeof a) c.push(a);
        else if (a instanceof Array)
          for (e = 0; e < a.length; e++)
            if (Lf(a[e])) c.push(a[e]);
            else {
              this.Xa("print(): pageSpec must be array of numbers");
              return;
            }
        else if (!a) for (e = 0; e < this.ib(); e++) c.push(e);
        var f = b ? this.Qk(b) : this.Qk(this.Qh());
        var h = this.ge(),
          k = document.createElement("canvas");
        k.width = f.width;
        k.height = f.height;
        var l = k.getContext("2d");
        l.translate(-f.x, -f.y);
        e = window.location.hostname;
        var n = window.open("about:blank", "_blank");
        n.document.write(
          "<!DOCTYPE html><html><head><title>" + e + "</title></head><body>"
        );
        for (e = 0; e < c.length; e++)
          this.nh(c[e]),
            this.ea.view.ef(l, 1, f.x, f.y, f.width, f.height, 1, 0, 0),
            this.ea.view.aa.la(l),
            0 < e
              ? n.document.write("<div style='page-break-before:always'>")
              : n.document.write("<div>"),
            n.document.write("<img style='width:100%' src='"),
            n.document.write(k.toDataURL()),
            n.document.write("'></div>"),
            l.clearRect(f.x, f.y, f.width, f.height);
        n.document.write("</body></html>");
        n.document.close();
        setTimeout(function() {
          n.focus();
          n.print();
          setTimeout(function() {
            n.close();
          }, 1e3);
        }, 1e3);
        this.nh(h);
      };
      c.prototype.Ea = function() {
        return this.ea.ha.get("readOnly")
          ? (Q("readOnly; ignore tool click."), !0)
          : !1;
      };
      c.prototype.ne = function() {
        this.ea.view.ne();
      };
      c.prototype.fd = function(a) {
        D.ga("redraw", arguments, D.Kf);
        this.ea.view.la(a);
      };
      c.prototype.removeEventListener = function(a, b) {
        this.removeListener(a, b);
      };
      c.prototype.removeListener = function(a, b) {
        D.ga("removeListener", arguments, D.String, D.Function);
        if (this.ha.has(a)) this.ha.removeListener(a, b);
        else if ("draw" === a) this.ve === b && (this.ve = null);
        else if (a in this.kb) {
          for (var c = this.kb[a], e = 0; e < c.length; e++)
            if (c[e] === b) {
              c.splice(e, 1);
              break;
            }
          0 === c.length && delete this.kb[a];
        }
      };
      c.prototype.resize = function(a) {
        var b = this;
        void 0 === a && (a = !0);
        return this.xq
          ? this.wq
          : (this.wq = new Promise(function(c) {
              b.xq = setTimeout(function() {
                b.Lh || ((b.xq = 0), (b.wq = null), b.ea.Rk(a), c());
              }, 0);
            }));
      };
      c.prototype.save = function(a, b, c) {
        void 0 === a && (a = "zwibbler3");
        void 0 === c && (c = 0);
        D.ga("save", arguments, D.Sb, D.gb(Hg), D.Ua);
        var d = {
            jpeg: "image/jpeg",
            jpg: "image/jpeg",
            png: "image/png",
            bmp: "image/bmp",
            svg: "image/svg+xml",
            pdf: "application/pdf",
          },
          f = this.Qk(b || this.Qh());
        switch (a) {
          case "list":
            return mg.Ik(this.ea.view.aa, "list", "object");
          case "png":
          case "jpeg":
          case "jpg":
          case "bmp":
          case "svg":
          case "pdf":
            return this.ea.Cv(d[a], f, c);
          case "zwibbler3":
            return mg.Ik(this.ea.view.aa, "zwibbler3", "string");
          case "image/png":
          case "image/jpeg":
          case "image/bmp":
            var h = this.ea.Cv(a, f, c);
            h = h.substr(h.indexOf(",") + 1);
            d = "";
            f = 0;
            var k = {
              A: 0,
              B: 1,
              C: 2,
              D: 3,
              E: 4,
              F: 5,
              G: 6,
              H: 7,
              I: 8,
              J: 9,
              K: 10,
              L: 11,
              M: 12,
              N: 13,
              O: 14,
              P: 15,
              Q: 16,
              R: 17,
              S: 18,
              T: 19,
              U: 20,
              V: 21,
              W: 22,
              X: 23,
              Y: 24,
              Z: 25,
              a: 26,
              b: 27,
              c: 28,
              d: 29,
              e: 30,
              f: 31,
              g: 32,
              h: 33,
              i: 34,
              j: 35,
              k: 36,
              l: 37,
              m: 38,
              n: 39,
              o: 40,
              p: 41,
              q: 42,
              r: 43,
              s: 44,
              t: 45,
              u: 46,
              v: 47,
              w: 48,
              x: 49,
              y: 50,
              z: 51,
              0: 52,
              1: 53,
              2: 54,
              3: 55,
              4: 56,
              5: 57,
              6: 58,
              7: 59,
              8: 60,
              9: 61,
              "+": 62,
              "/": 63,
              "=": 64,
            };
            for (h = h.replace(/[^A-Za-z0-9\-_=\+\/]/g, ""); f < h.length; ) {
              var l = k[h.charAt(f++)];
              var n = k[h.charAt(f++)];
              var r = k[h.charAt(f++)];
              var v = k[h.charAt(f++)];
              l = (l << 2) | (n >> 4);
              n = ((n & 15) << 4) | (r >> 2);
              var w = ((r & 3) << 6) | v;
              d += String.fromCharCode(l);
              64 !== r && (d += String.fromCharCode(n));
              64 !== v && (d += String.fromCharCode(w));
            }
            return d;
          default:
            return "Unsupported format: " + a;
        }
      };
      c.prototype.Jb = function(a) {
        D.ga("setCursor", arguments, D.String);
        this.ea.view.Jb(a);
      };
      c.prototype.hd = function(a, b) {
        D.ga("setToolProperty", arguments, D.String, D.og);
        this.Ea() || this.ea.view.hd(a, Jg(a, b));
      };
      c.prototype.ks = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var e = this.ea.view.aa.Fb(a[c], !1);
          e && b.push(e);
        }
        return b;
      };
      c.prototype.selectNodes = function(a) {
        D.ga("selectNodes", arguments, Eg);
        var b = this.ks(Cg(a));
        this.ea.view.selectNodes(b);
        this.ea.view.vc();
        this.ea.view.la();
      };
      c.prototype.yC = function(a) {
        D.ga("sendToBack", arguments, Fg);
        if (!this.Ea()) {
          var b = Cg(a || this.dc());
          this.Re(function(a) {
            return a.Rd(b, 1);
          });
        }
      };
      c.prototype.Um = function(a) {
        D.ga("setActiveLayer", arguments, D.String);
        this.ea.view.Um(a);
      };
      c.prototype.Vm = function(a, b) {
        D.ga("setConfig", arguments, D.String, D.og);
        "defaultPaperSize" === a && this.Nq(b);
        return this.ea.ha.set(a, b);
      };
      c.prototype.bs = function(a, b) {
        b = this.xc("colour-clicked", a, b);
        void 0 === b ? (b = a) : b || (b = "");
        return b;
      };
      c.prototype.ui = function(a, b) {
        D.ga("setColour", arguments, D.String, D.Boolean);
        if (this.Ea()) return !1;
        this.bs(a, b) && this.ea.view.sB(a, b);
        return !1;
      };
      c.prototype.nh = function(a) {
        D.ga("setCurrentPage", arguments, D.$b);
        this.ea.view.Cc(a);
      };
      c.prototype.kk = function(a) {
        D.ga("setCustomBackgroundFn", arguments, D.Function);
        this.ea.view.kk(a);
      };
      c.prototype.FC = function(a) {
        D.ga("useCustomTool", arguments, D.Object);
        this.Ag = new og(this.ea.view, a);
      };
      c.prototype.HC = function(a, b) {
        D.ga("setDocumentProperty", arguments, D.String, D.og);
        this.ea.view.aa.setProperty(a, b);
      };
      c.prototype.vi = function(a, b) {
        D.ga(
          "setDocumentSize",
          arguments,
          D.jb(D.Number, D.xh),
          D.jb(D.Number, D.xh)
        );
        this.ea.view.vi(a, b, !0);
      };
      c.prototype.Kv = function(a, b) {
        D.ga(
          "setDocumentSizeInTransaction",
          arguments,
          D.jb(D.Number, D.xh),
          D.jb(D.Number, D.xh)
        );
        this.ea.view.vi(a, b, !1);
      };
      c.prototype.Lv = function(a, b) {
        D.ga("setDomElement", arguments, S, D.HTMLElement);
        var c = this.ea.view.aa.Da(a);
        c
          ? ("DomNode" !== c.type() &&
              this.Xa(
                "setDomElement: Node %s is not a DomNode. It is %s",
                a,
                c.type()
              ),
            c.KC(b),
            this.ea.vl.push(b))
          : this.Xa("setDomElement: Node %s does not exist", a);
      };
      c.prototype.IC = function(a, b) {
        return this.Lv(a, b);
      };
      c.prototype.Ww = function() {
        var a = this;
        Q("Setting up dragdrop");
        this.xa.addEventListener(document, "dragover", function(b) {
          a.ea.view.Ee(b.pageX, b.pageY)
            ? b.preventDefault()
            : Q("Ignore drag event -- not over canvas");
        });
        this.xa.addEventListener(document, "drop", function(b) {
          b.preventDefault();
          if (!a.ea.view.Ee(b.pageX, b.pageY))
            Q("Ignore drop event -- not over canvas");
          else if (a.yc("readOnly")) Q("Ignore drop event -- readOnly mode");
          else if (b.dataTransfer) {
            if (b.dataTransfer.items)
              for (var c = 0; c < b.dataTransfer.items.length; c++) {
                if ("file" === b.dataTransfer.items[c].kind) {
                  a.ea.view.nq(b.dataTransfer.items[c], b.pageX, b.pageY);
                  break;
                }
              }
            else
              for (c = 0; c < b.dataTransfer.files.length; ) {
                a.ea.view.nq(b.dataTransfer.files[c], b.pageX, b.pageY);
                break;
              }
            try {
              var e = JSON.parse(b.dataTransfer.getData("text"));
            } catch (n) {
              return;
            }
            if ("object" === typeof e && e["zwibbler-src"]) {
              var f = parseFloat(e["zwibbler-width"]),
                h = parseFloat(e["zwibbler-size"]),
                k = e["zwibbler-src"],
                l = e["zwibbler-props"];
              Q("DragDrop received with src=%s size=%s", k, f);
              k &&
                O.ep(k, function(c, d) {
                  var e = 1;
                  h ? (e = Math.min(h / c, h / d)) : f && (e = f / c);
                  var n = a.pj(b.pageX, b.pageY);
                  n.x -= (c * e) / 2;
                  n.y -= (d * e) / 2;
                  a.el();
                  l.url = k;
                  c = a.createNode(
                    /^data:image\/svg|\.svg$/i.test(k)
                      ? "SvgNode"
                      : "ImageNode",
                    l
                  );
                  a.Rm(c, e, e);
                  a.sh(c, n.x, n.y);
                  a.nl();
                  a.nw();
                });
            }
          }
        });
      };
      c.prototype.Fz = function(a) {
        D.ga("getDomElement", arguments, S);
        var b = this.ea.view.aa.Da(a);
        return b
          ? Qc(b)
            ? b.da
            : (this.Xa(
                "getDomElement: Node %s is not a DomNode. It is %s",
                a,
                b.type()
              ),
              null)
          : (this.Xa("getDomElement: Node %s does not exist", a), null);
      };
      c.prototype.Nt = function(a) {
        for (D.ga("getNodeFromElement", arguments, D.HTMLElement); a; ) {
          var b = a.getAttribute("nid");
          if (b) return b;
          a = a.parentElement;
        }
        return null;
      };
      c.prototype.Sl = function(a) {
        D.ga("getNodeObject", arguments, S);
        var b = this.ea.view.aa.Da(a);
        return b ? b.Sh({ ctx: this }) : null;
      };
      c.prototype.QC = function(a, b) {
        D.ga("setLayerName", arguments, D.String, D.String);
        Kf(a) && Kf(b)
          ? (this.Po() === a && this.Um(b),
            this.ea.view.aa.Nc(!1, function(c) {
              c.zc() === a && c.setProperty("layer", b);
            }))
          : this.Xa("setLayerName() needs string arguments.");
      };
      c.prototype.TC = function(a, b) {
        D.ga("setPageBackground", arguments, D.$b, D.String);
        var c = this.vj(a);
        c && this.Jd(c, "background", b);
      };
      c.prototype.Nq = function(a, b) {
        D.ga(
          "setPaperSize",
          arguments,
          D.jb(D.Number, D.String),
          D.gb(D.jb(D.Number, D.Boolean))
        );
        var c = null,
          e = null,
          f = null,
          h = !0,
          k = !1;
        if (2 === arguments.length)
          Lf(arguments[0]) && Lf(arguments[1])
            ? ((f = arguments[0]), (c = arguments[1]))
            : Kf(arguments[0]) && "boolean" === typeof arguments[1]
            ? ((e = arguments[0]), (k = arguments[1]))
            : (h = !1);
        else if (1 === arguments.length && Kf(arguments[0]))
          for (var l = arguments[0].split(" "), n = 0; n < l.length; n++)
            "landscape" === l[n]
              ? (k = !0)
              : "portrait" === l[n]
              ? (k = !1)
              : (e = l[n]);
        if (!1 === h) return Q("Bad arguments to setPaperSize()."), !1;
        if (null === e) return this.vi(f, c), !0;
        switch (e.toLowerCase()) {
          case "letter":
            f = 816;
            c = 1056;
            break;
          case "legal":
            f = 816;
            c = 1344;
            break;
          case "11x17":
            f = 1056;
            c = 1632;
            break;
          case "tabloid":
            f = 1056;
            c = 1632;
            break;
          case "a0":
            f = (841 / 25.4) * 96;
            c = (1189 / 25.4) * 96;
            break;
          case "a1":
            f = (594 / 25.4) * 96;
            c = (841 / 25.4) * 96;
            break;
          case "a2":
            f = (420 / 25.4) * 96;
            c = (594 / 25.4) * 96;
            break;
          case "a3":
            f = (297 / 25.4) * 96;
            c = (420 / 25.4) * 96;
            break;
          case "a4":
            f = (210 / 25.4) * 96;
            c = (297 / 25.4) * 96;
            break;
          case "none":
            c = f = null;
            break;
          default:
            return Q("Invalid paper size: %s", e), !1;
        }
        k && ((e = f), (f = c), (c = e));
        this.vi(f, c);
        return !0;
      };
      c.prototype.NC = function(a, b, c) {
        this.Jd(a, b, c);
      };
      c.prototype.vb = function(a, b) {
        D.ga("setNodeProperties", arguments, Eg, D.Object);
        this.Ea() || this.ea.vb(Cg(a), this.tc(b));
      };
      c.prototype.Jd = function(a, b, c) {
        D.ga("setNodeProperty", arguments, Eg, D.String, D.og);
        if (!this.Ea()) {
          c = Jg(b, c);
          var d = {};
          d[b] = c;
          this.vb(a, d);
        }
      };
      c.prototype.RC = function(a, b) {
        D.ga("setNodeVisibility", arguments, Eg, D.Boolean);
        for (var c = Cg(a), e = 0; e < c.length; e++) {
          var f = this.ea.view.aa.Fb(c[e], !0);
          if (f && (f.hg(!b), Qc(f))) {
            var h = f.parent;
            Qc(h) && h.qk(h.fe(f), b);
          }
        }
        this.ea.view.la();
      };
      c.prototype.Tv = function(a, b) {
        D.ga("setOpacity", arguments, D.Number, D.Boolean);
        this.Ea() || this.ea.view.xB(a, b);
      };
      c.prototype.UC = function(a, b, c) {
        D.ga("setPageSize", arguments, D.$b, D.Number, D.Number);
        (Lf(a) && Lf(b) && Lf(c)) ||
          this.Xa("setPageSize(): requires pageNo, width, height");
        var d = this.vj(a);
        d
          ? this.vb(d, { width: b, height: c })
          : this.Xa("setPageSize: no such page %s", a);
      };
      c.prototype.Mq = function(a) {
        D.ga("setPageView", arguments, D.Boolean);
        this.ea.view.Mq(a);
      };
      c.prototype.Xb = function(a) {
        D.ga("setProperties", arguments, D.Object);
        if (!this.Ea()) {
          this.vb(this.dc(), a);
          for (var b in a) {
            var c = a[b];
            this.hd(b, c);
            "lineWidth" === b && "brush" === this.Ph()
              ? this.Vm("defaultBrushWidth", Jg(b, c))
              : this.ea.view.Df(b, Jg(b, c));
          }
        }
      };
      c.prototype.setProperty = function(a, b) {
        D.ga("setProperty", arguments, D.String, D.og);
        var c = {};
        c[a] = b;
        this.Xb(c);
      };
      c.prototype.ZC = function(a) {
        D.ga("setViewRectangle", arguments, Hg);
        (0 !== a.width && 0 !== a.height) ||
          this.Xa("setViewRect: width and height must be non-zero.");
        this.ea.view.Oe(this.Qk(a));
      };
      c.prototype.$d = function(a, b, c) {
        D.ga("setZoom", arguments, D.jb(D.String, D.Number), D.Ua, D.Ua);
        if (Lf(a) || "page" === a || "width" === a)
          if (1 === arguments.length) this.ea.view.$d(a);
          else if (
            3 === arguments.length &&
            "number" === typeof a &&
            Lf(b) &&
            Lf(c)
          ) {
            var d = this.To() / a,
              f = this.ea.view.Ub();
            f.transform(new rc(d, d, b, c));
            this.ea.view.Oe(f);
          } else this.Xa("setZoom: invalid arguments.");
        else Q("setZoom: invalid parameter.");
      };
      c.prototype.rk = function(a, b) {
        void 0 === b && (b = !0);
        D.ga("showLayer", arguments, D.String, D.Boolean);
        this.ea.view.rk(a, b);
      };
      c.prototype.ob = function(a, b, c) {
        D.ga("snap", arguments, D.Number, D.Number, D.Ua);
        var d = this.ea.view.ob(new F(a, b), c || 0);
        return { x: d.x, y: d.y };
      };
      c.prototype.br = function(a) {
        this.ea.view.br(a);
      };
      c.prototype.nm = function() {
        return O.nm();
      };
      c.prototype.sD = function() {
        return this.ea.view.aa.toString();
      };
      c.prototype.xk = function(a) {
        D.ga(
          "toggleFullScreen",
          arguments,
          D.gb(D.jb(D.String, D.HTMLElement))
        );
        a
          ? (a = u.nc(a)) ||
            this.Xa("toggleFullScreen: can't find element from " + a)
          : (a = this.nc());
        a.style.backgroundColor = q.Xc;
        O.xk(a);
      };
      c.prototype.sh = function(a, b, c) {
        D.ga("translateNode", arguments, Eg, D.Number, D.Number);
        if (this.Ea()) return !1;
        Q("Translate node %s by %s,%s", a, b, c);
        return this.ea.sh(Cg(a), b, c);
      };
      c.prototype.ek = function(a) {
        D.ga("removePanel", arguments, D.HTMLElement);
        this.ea.ek(a);
      };
      c.prototype.rq = function() {
        this.ea.view.rq();
      };
      c.prototype.nC = function(a) {
        D.ga("rotateDocument", arguments, D.Number);
        if (!this.Ea()) {
          var b = 0 === Math.round(a / (Math.PI / 2)) % 2;
          this.el();
          for (var c = 0; c < this.ib(); c++) this.Bv(c, a);
          b ||
            ((b = this.ea.view.aa.ia("width")),
            (c = this.ea.view.aa.ia("height")),
            (b && c) ||
              !this.yc("pageView") ||
              ((b = hg.width), (c = hg.height)),
            b && c && this.Kv(c, b));
          this.nl();
        }
      };
      c.prototype.Av = function(a, b, c, e) {
        D.ga("rotateNode", arguments, Eg, D.Number, D.Ua, D.Ua);
        if (this.Ea()) return !1;
        Q("Rotate nodes by %s around (%s,%s)", (b / Math.PI) * 180, c, e);
        for (
          var d = 4 === arguments.length, h = Cg(a), k = new F(0, 0), l = 0;
          l < h.length;
          l++
        ) {
          var n = h[l],
            r = this.ea.view.aa.Fb(n);
          r && (r || d)
            ? !d && r && ((n = r.rect.Qd()), (k.x += n.x), (k.y += n.y))
            : Q("rotateNode: Node %s does not exist", n);
        }
        d ? ((k.x = c), (k.y = e)) : ((k.x /= h.length), (k.y /= h.length));
        d = new qc(b, k.x, k.y);
        return this.ea.transformNode(h, d);
      };
      c.prototype.Bv = function(a, b) {
        D.ga("rotatePage", arguments, D.$b, D.Number);
        a >= this.ib() && this.Xa("rotatePage: page " + a + " does not exist.");
        if (!this.Ea()) {
          var c = Math.round(b / (Math.PI / 2));
          b = (c * Math.PI) / 2;
          var e = 0 === c % 2;
          this.el();
          c = this.ge();
          this.nh(a);
          var f = this.Qo(),
            h = this.Qh(),
            k = h.width / 2,
            l = h.height / 2;
          this.Av(f, b, k, l);
          e || this.sh(f, l - k, k - l);
          e = this.vj(a);
          this.vb(e, { width: h.height, height: h.width });
          this.nh(c);
          this.nl();
        }
      };
      c.prototype.Rm = function(a, b, c, e, f) {
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        D.ga("scaleNode", arguments, Eg, D.Number, D.Number, D.Ua, D.Ua);
        (0 !== b && 0 != c) ||
          this.Xa(
            "scaleNode(" +
              a +
              ", " +
              b +
              ", " +
              c +
              ") cannot scale by a zero-value."
          );
        if (this.Ea()) return !1;
        Q("Scale node %s by %s,%s", a, b, c);
        return this.ea.Rm(Cg(a), b, c, e, f);
      };
      c.prototype.Lq = function(a, b, c, e, f, h, k) {
        D.ga(
          "setNodeTransform",
          arguments,
          Eg,
          D.Number,
          D.Number,
          D.Number,
          D.Number,
          D.Number,
          D.Number
        );
        if (this.Ea()) return !1;
        Q("setNodeTransform(id=%s %s %s %s %s %s %s %s)", a, b, c, e, f, h, k);
        return this.ea.Lq(Cg(a), b, c, e, f, h, k);
      };
      c.prototype.Xv = function(a, b, c) {
        var d = this;
        D.ga(
          "showColourPicker",
          arguments,
          D.jb(D.String, D.Number),
          D.Number,
          D.Ua
        );
        if (!this.cg) {
          var f = document.createElement("div");
          f.style.width = "320px";
          f.style.lineHeight = "0";
          f.style.position = "absolute";
          f.style.webkitUserSelect = "none";
          f.style.userSelect = "none";
          f.style.boxShadow = "2px 2px 2px rgba(0,0,0.2)";
          f.style.background = "white";
          var h = this;
          this.At(f, 20, {
            onColour: function(a, b) {
              if (h.ml) h.ml(a), h.digest();
              else if ((a = h.bs(a, b)))
                for (var c = 0, d = h.Ns.split(","); c < d.length; c++) {
                  var e = d[c];
                  "" === e && b
                    ? (e = "fillStyle")
                    : "" !== e || b || (e = "strokeStyle");
                  h.setProperty(e, a);
                }
            },
          });
          this.cg = O.Hn(f);
          this.xa.add(function() {
            d.cg && (d.cg.destroy(), u(f).remove(), (d.cg = null));
          });
        }
        this.ml = null;
        if ("string" === typeof a) (this.Ns = a), this.cg.show(b, c, !0);
        else
          return (
            (c = b),
            (b = a),
            new Promise(function(a) {
              d.ml = a;
              d.cg && d.cg.show(b, c, !0);
            })
          );
      };
      c.prototype.uy = function(a) {
        void 0 === a && (a = rg(32));
        D.ga("createSharedSession", arguments, D.Sb);
        Q("Creating shared session " + a);
        this.cs(a, 2);
        return a;
      };
      c.prototype.cs = function(a, b) {
        var c = this;
        Q("Attach to shared session %s, creating=%s", a, b);
        this.Dc && this.Dc.stop();
        this.ea.view.aa.yb.iC();
        return new Promise(function(d, f) {
          var e = c.ea.ha.get("collaborationServer");
          "custom" !== e
            ? ((e = new Eb(
                c,
                e.replace("{name}", a),
                c.yc("latency"),
                O.WebSocket
              )),
              (c.Dc = e),
              e.pa("connected", function() {
                c.ta("connected");
                var a = 0,
                  b;
                for (b in c.fi)
                  a++,
                    Q("Sending non-persistent key %s", b),
                    (c.Pj[b] = c.fi[b]);
                a && c.ta("local-keys");
                c.digest();
              }),
              e.pa("connect-error", function() {
                c.ta("connect-error");
                c.digest();
              }),
              e.pa("broadcast", function(a) {
                c.ta("broadcast", a);
                c.digest();
              }),
              e.pa("set-keys", function(a) {
                c.ta("set-keys", a);
              }),
              e.start(a, b).then(
                function() {
                  Q("Session resolved");
                  d(a);
                },
                function(a) {
                  Q("Error joining session: %s", a.message);
                  f(a);
                }
              ))
            : d(a);
          return a;
        });
      };
      c.prototype.KA = function(a, b) {
        void 0 === a && (a = "");
        void 0 === b && (b = !1);
        D.ga("joinSharedSession", arguments, D.Sb, D.Md);
        return this.cs(a, b ? 0 : 1).then(
          function() {
            Q("Successfully connected to session.");
          },
          function(a) {
            console.log("Error connecting to session:", a);
            throw a;
          }
        );
      };
      c.prototype.gn = function() {
        this.tu();
      };
      c.prototype.tu = function() {
        this.Dc && (this.Dc.stop(), (this.Dc = null), this.ta("disconnected"));
      };
      c.prototype.pA = function() {
        return this.Dc ? this.Dc.bt : "";
      };
      c.prototype.Mt = function() {
        var a = [],
          b;
        for (b in this.Pj) a.push(this.Pj[b]);
        this.Pj = {};
        return a;
      };
      c.prototype.Zz = function() {
        var a = [],
          b;
        for (b in this.fi) a.push(this.fi[b]);
        return a;
      };
      c.prototype.Uc = function() {
        this.Ea() || this.ea.view.Uc();
      };
      c.prototype.Bi = function(a) {
        void 0 === a && (a = this.dc());
        D.ga("ungroup", arguments, Fg);
        this.Ea() ||
          this.Re(function(b) {
            b.Bi(Cg(a));
          });
      };
      c.prototype.upload = function(a, b) {
        function c() {}
        function e() {}
        void 0 === b && (b = "Working");
        D.ga("upload", arguments, D.Kn(HTMLFormElement), D.Sb);
        var f = this.ea.ty(b),
          h = new XMLHttpRequest(),
          k = new FormData(a);
        h.upload.addEventListener(
          "progress",
          function(a) {
            f.update(a.loaded / a.total);
          },
          !1
        );
        h.addEventListener(
          "load",
          function() {
            200 === h.status
              ? (f.done(), e(h.response, h))
              : (f.error("Error"), c(h));
          },
          !1
        );
        h.addEventListener(
          "error",
          function() {
            f.error("Error");
            c(h);
          },
          !1
        );
        h.addEventListener(
          "abort",
          function() {
            f.error("Aborted");
            c(h);
          },
          !1
        );
        h.open(a.method, a.action);
        h.send(k);
        var l = {
          success: function(a) {
            e = a;
            return l;
          },
          error: function(a) {
            c = a;
            return l;
          },
        };
        return l;
      };
      c.prototype.ID = function(a, b) {
        void 0 === b && (b = !1);
        D.ga("useArrowTool", arguments, D.qd, D.Md);
        this.Ea() || this.ea.view.ux(this.tc(a), b);
      };
      c.prototype.JD = function(a, b) {
        this.Ea() ||
          (2 === arguments.length
            ? (D.ga("useBrushTool", arguments, D.String, D.Number),
              this.ea.view.Co({ lineWidth: b, strokeStyle: a }))
            : 1 === arguments.length
            ? (D.ga("useBrushTool", arguments, D.Object),
              this.ea.view.Co(this.tc(arguments[0])))
            : this.ea.view.Co({}));
      };
      c.prototype.KD = function(a) {
        D.ga("useCircleTool", arguments, D.qd);
        this.Ea() || this.ea.view.un(this.tc(a));
      };
      c.prototype.LD = function(a) {
        D.ga("useCurveTool", arguments, D.qd);
        this.Ea() || this.ea.view.Us(this.tc(a));
      };
      c.prototype.MD = function(a) {
        D.ga("useCustomTool", arguments, D.Object);
        if (!this.Ea())
          if (Mf(a)) {
            var b = new og(this.ea.view, a);
            this.ea.view.Za(b);
          } else this.Xa("useCustomTool(): requires an object as argument.");
      };
      c.prototype.rr = function(a) {
        D.ga("useEditHandleTool", arguments, S);
        this.Ea() || this.ea.view.rr(a);
      };
      c.prototype.un = function(a) {
        void 0 === a && (a = {});
        D.ga("useEllipseTool", arguments, D.qd);
        this.Ea() || this.ea.view.un(this.tc(a));
      };
      c.prototype.PD = function(a, b, c) {
        void 0 === c && (c = "freehand");
        D.ga(
          "useFreehandTool",
          arguments,
          D.gb(D.jb(D.String, D.Object)),
          D.gb(D.jb(D.Number, D.String)),
          D.Sb
        );
        if (!this.Ea()) {
          if (Mf(arguments[0])) {
            var d = this.tc(arguments[0]);
            c = arguments[1] || "freehand";
          } else
            d = {
              strokeStyle: a || this.yj(),
              lineWidth: b || this.yc("defaultLineWidth"),
            };
          this.ea.view.ct(d, c);
        }
      };
      c.prototype.XD = function(a, b) {
        void 0 === b && (b = !0);
        D.ga("useStampTool", arguments, D.jb(D.String, D.Object), D.Md);
        if (!this.Ea()) {
          var c = a;
          Kf(a)
            ? (c = { url: a })
            : "url" in c || this.Xa("useStampTool: missing url in properties");
          this.ea.view.QD(c, 1 === arguments.length || !0 === b);
        }
      };
      c.prototype.RD = function(a, b) {
        D.ga(
          "useLineTool",
          arguments,
          D.gb(D.Object),
          D.gb(
            D.jb(
              D.Boolean,
              D.od("LineToolOptions", {
                singleLine: D.Md,
                orthogonal: D.Md,
                open: D.Md,
              })
            )
          )
        );
        if (!this.Ea()) {
          if (Mf(b)) {
            var c = b.singleLine;
            var e = b.orthogonal;
            var f = b.open;
          } else c = b;
          this.ea.view.vu(this.tc(a), c, e, f);
        }
      };
      c.prototype.SD = function() {
        this.ea.view.FB();
      };
      c.prototype.nw = function() {
        this.ea.view.ub();
      };
      c.prototype.sr = function(a, b, c, e) {
        void 0 === c && (c = 1);
        void 0 === e && (e = {});
        D.ga("usePolygonTool", arguments, D.$b, D.Ua, D.Ua, D.qd);
        this.Ea() || this.ea.view.sr(a, b, c, this.tc(e));
      };
      c.prototype.TD = function(a) {
        void 0 === a && (a = {});
        D.ga("useQuadraticBezierTool", arguments, D.qd);
        this.Ea() || this.ea.view.ct(this.tc(a), "quadratic");
      };
      c.prototype.Ck = function(a) {
        void 0 === a && (a = {});
        D.ga("useRectangleTool", arguments, D.qd);
        this.Ea() || this.ea.view.Ck(this.tc(a));
      };
      c.prototype.UD = function(a) {
        void 0 === a && (a = {});
        D.ga("useRoundRectTool", arguments, D.qd);
        this.Ea() ||
          this.ea.view.Ck(
            ic({ roundRadius: this.ea.ha.get("defaultRoundRectRadius") }, a)
          );
      };
      c.prototype.VD = function(a, b) {
        D.ga(
          "useShapeBrushTool",
          arguments,
          D.gb(D.jb(D.Object, D.String)),
          D.Ua
        );
        if (!this.Ea()) {
          var c = {};
          Mf(a) ? (c = this.tc(a)) : Kf(a) && (c.stokeStyle = a);
          Lf(b) && (c.lineWidth = b);
          this.ea.view.My(c);
        }
      };
      c.prototype.tr = function(a, b, c, e, f, h) {
        void 0 === f && (f = "rectangle-tl");
        void 0 === h && (h = null);
        D.ga(
          "useShapeTool",
          arguments,
          D.String,
          D.Object,
          D.Number,
          D.Number,
          D.gb(D.In("rectangle", "circle", "rectangle-tl")),
          D.Md
        );
        this.Ea() ||
          ((b = this.tc(b)),
          "SvgNode" === a &&
            "custom" === b.fillMode &&
            ((b.fillStyle = b.fillStyle || this.ea.view.sa.fillStyle),
            (b.strokeStyle = b.strokeStyle || this.ea.view.sa.strokeStyle),
            "lineWidth" in b || (b.lineWidth = this.ea.view.sa.lineWidth)),
          this.ea.view.tr(a, b, c, e, f, h));
      };
      c.prototype.WD = function(a) {
        D.ga("useSquareTool", arguments, D.qd);
        this.Ea() || this.ea.view.Ck(this.tc(a));
      };
      c.prototype.YD = function(a) {
        D.ga("useTextTool", arguments, D.qd);
        this.Ea() || this.ea.view.fr(this.tc(a));
      };
      c.prototype.zn = function() {
        this.ea.view.zn();
      };
      c.prototype.An = function() {
        this.ea.view.An();
      };
      return c;
    })();
  function Jg(c, a) {
    switch (c) {
      case "lineWidth":
      case "fontSize":
      case "arrowSize":
      case "arrowXOffset":
      case "brightness":
      case "contrast":
      case "cloudRadius":
      case "gamma":
      case "opacity":
      case "snap":
      case "zIndex":
        "string" === typeof a && (a = parseFloat(a));
        break;
      case "matrix":
        "[object Array]" === Object.prototype.toString.apply(a) &&
        "Matrix" === a[0]
          ? (a.splice(0, 1), (a = new J(a)))
          : a instanceof J || (a = new J(a));
    }
    return a;
  }
  var Kg = (function() {
    function c(a, b, c, e) {
      this.x = a;
      this.y = b;
      this.width = c;
      this.height = e;
    }
    c.prototype.toString = function() {
      return new G(this.x, this.y, this.width, this.height).toString();
    };
    return c;
  })();
  T.prototype.addKeyboardShortcut = T.prototype.Xn;
  T.prototype.addRemoteChanges = T.prototype.tg;
  T.prototype.attach = T.prototype.Ic;
  T.prototype.abortTransaction = T.prototype.Zw;
  T.prototype.addGridColumn = T.prototype.Vn;
  T.prototype.addGridRow = T.prototype.Wn;
  T.prototype.addNodeToGrid = T.prototype.gx;
  T.setGridColumn = T.Jq;
  T.setGridRow = T.Kq;
  T.prototype.addSelectionHandle = T.prototype.Nd;
  T.prototype.addToGroup = T.prototype.Ki;
  T.prototype.addToLanguage = T.prototype.Yn;
  T.prototype.addPage = T.prototype.jx;
  T.prototype.addPanel = T.prototype.Ji;
  T.prototype.alignNodes = T.prototype.px;
  T.prototype.autoScroll = T.prototype.yx;
  T.prototype.begin = T.prototype.$a;
  T.prototype.beginTransaction = T.prototype.el;
  T.prototype.bringToFront = T.prototype.Ex;
  T.prototype.sendBroadcast = T.prototype.Gq;
  T.prototype.setSessionKey = T.prototype.pk;
  T.prototype.canRedo = T.prototype.Ye;
  T.prototype.canUndo = T.prototype.Ze;
  T.prototype.clearSelection = T.prototype.qb;
  T.prototype.clearUndo = T.prototype.Rx;
  T.prototype.clickColour = T.prototype.Sx;
  T.prototype.commit = T.prototype.wa;
  T.prototype.commitIrreversibleTransaction = T.prototype.Zx;
  T.prototype.commitTransaction = T.prototype.nl;
  T.prototype.copy = T.prototype.xg;
  T.prototype.createDataNode = T.prototype.my;
  T.prototype.createGroup = T.prototype.oy;
  T.prototype.createLogger = T.prototype.qy;
  T.prototype.createNode = T.prototype.createNode;
  T.prototype.createHTMLNode = T.prototype.py;
  T.prototype.createHTMLNodeFromDrag = T.prototype.uo;
  T.prototype.createPath = T.prototype.ol;
  T.prototype.createGridNode = T.prototype.ny;
  T.prototype.createToolbar = T.prototype.vy;
  T.prototype.createShape = T.prototype.wo;
  T.prototype.cut = T.prototype.yo;
  T.prototype.decoration = T.prototype.cf;
  T.prototype.destroy = T.prototype.Sa;
  T.prototype.deleteGridColumn = T.prototype.wy;
  T.prototype.deleteGridRow = T.prototype.yy;
  T.prototype.deleteNode = T.prototype.ue;
  T.prototype.deleteNodes = T.prototype.ac;
  T.prototype.deletePage = T.prototype.Ay;
  T.prototype.deleteSelection = T.prototype.$s;
  T.prototype.dirty = T.prototype.Rf;
  T.prototype.dispatchEvent = T.prototype.dispatchEvent;
  T.prototype.mouseEvent = T.prototype.Qp;
  T.prototype.download = T.prototype.download;
  T.prototype.draw = T.prototype.la;
  T.prototype.editNodeText = T.prototype.Ry;
  T.prototype.duplicate = T.prototype.duplicate;
  T.prototype.emit = T.prototype.ta;
  T.prototype.emitNow = T.prototype.xc;
  T.prototype.emitOnce = T.prototype.Fg;
  T.prototype.skipEvent = T.prototype.hD;
  T.prototype.focus = T.prototype.focus;
  T.prototype.blur = T.prototype.blur;
  T.prototype.forEachNode = T.prototype.hz;
  T.prototype.findNode = T.prototype.dz;
  T.prototype.findNodes = T.prototype.pt;
  T.prototype.flip = T.prototype.fz;
  T.prototype.flipNodes = T.prototype.mj;
  T.prototype.generatePalette = T.prototype.At;
  T.prototype.getActiveLayer = T.prototype.Po;
  T.prototype.getAllNodes = T.prototype.Qo;
  T.prototype.getBackgroundImage = T.prototype.rz;
  T.prototype.getBoundingRectangle = T.prototype.So;
  T.prototype.getConfig = T.prototype.yc;
  T.prototype.getCurrentPage = T.prototype.ge;
  T.prototype.getCurrentFillColour = T.prototype.zz;
  T.prototype.getCurrentOutlineColour = T.prototype.Az;
  T.prototype.getCurrentTool = T.prototype.Ph;
  T.prototype.getCustomNode = T.prototype.Bz;
  T.prototype.getDocumentCoordinates = T.prototype.pj;
  T.prototype.getDocumentProperty = T.prototype.Ez;
  T.prototype.getDocumentSize = T.prototype.Qh;
  T.prototype.getElement = T.prototype.nc;
  T.prototype.getFillColour = T.prototype.Ol;
  T.prototype.getGridCell = T.prototype.Nz;
  T.prototype.getGridSize = T.prototype.bp;
  T.prototype.getHistory = T.prototype.Qz;
  T.prototype.getImageUrl = T.prototype.fp;
  T.prototype.getLanguageString = T.prototype.Vz;
  T.prototype.getLocalChanges = T.prototype.jp;
  T.prototype.getDrawingRectangle = T.prototype.Gz;
  T.prototype.getGroupParent = T.prototype.Pz;
  T.prototype.getGroupMembers = T.prototype.Oz;
  T.prototype.getItemProperty = T.prototype.Tz;
  T.prototype.getLayers = T.prototype.Xz;
  T.prototype.getLayerNodes = T.prototype.Wz;
  T.prototype.getNodeCoordinates = T.prototype.$z;
  T.prototype.getNodeIndex = T.prototype.aA;
  T.prototype.getNodePageNumber = T.prototype.jf;
  T.prototype.getNodeProperty = T.prototype.Tl;
  T.prototype.getNodeRectangle = T.prototype.lp;
  T.prototype.getNodeScale = T.prototype.bA;
  T.prototype.getNodeTransform = T.prototype.cA;
  T.prototype.getNodeType = T.prototype.dA;
  T.prototype.getNodeUnderPoint = T.prototype.eA;
  T.prototype.getNodesUnderPoint = T.prototype.hA;
  T.prototype.getPageCount = T.prototype.ib;
  T.prototype.getPageNode = T.prototype.vj;
  T.prototype.getPageRect = T.prototype.Zf;
  T.prototype.getPathData = T.prototype.Ul;
  T.prototype.getPathAsPoints = T.prototype.kA;
  T.prototype.getCanvasScale = T.prototype.To;
  T.prototype.getEditNode = T.prototype.$o;
  T.prototype.getScreenCoordinates = T.prototype.Wl;
  T.prototype.getSelectedEditHandle = T.prototype.nA;
  T.prototype.getStrokeColour = T.prototype.yj;
  T.prototype.getEditHandleType = T.prototype.Nl;
  T.prototype.setEditHandle = T.prototype.JC;
  T.prototype.getSelectedNodes = T.prototype.dc;
  T.prototype.getPropertySummary = T.prototype.Rh;
  T.prototype.getViewRectangle = T.prototype.Ut;
  T.prototype.goToRevision = T.prototype.tA;
  T.prototype.hasFocus = T.prototype.hasFocus;
  T.prototype.openFile = T.prototype.AB;
  T.prototype.insertImage = T.prototype.AA;
  T.prototype.insertPage = T.prototype.Fj;
  T.prototype.isLayerVisible = T.prototype.pm;
  T.prototype.isNodeSelected = T.prototype.Sg;
  T.prototype.isPointOverCanvas = T.prototype.Ee;
  T.prototype.load = T.prototype.load;
  T.prototype.lockUpdates = T.prototype.sm;
  T.prototype.markChangesSent = T.prototype.Mj;
  T.prototype.moveDown = T.prototype.aB;
  T.prototype.movePage = T.prototype.bB;
  T.prototype.moveUp = T.prototype.cB;
  T.prototype.newDocument = T.prototype.Sp;
  T.prototype.nextPage = T.prototype.nextPage;
  T.prototype.on = T.prototype.pa;
  T.prototype.onComplete = T.prototype.tB;
  T.prototype.openFromComputer = T.prototype.BB;
  T.prototype.paste = T.prototype.ak;
  T.prototype.pauseSharedSession = T.prototype.NB;
  T.prototype.previousPage = T.prototype.RB;
  T.prototype.print = T.prototype.print;
  T.prototype.redo = T.prototype.ne;
  T.prototype.redraw = T.prototype.fd;
  T.prototype.removeEventListener = T.prototype.removeEventListener;
  T.prototype.removeListener = T.prototype.removeListener;
  T.prototype.resize = T.prototype.resize;
  T.prototype.save = T.prototype.save;
  T.prototype.setCursor = T.prototype.Jb;
  T.prototype.setToolProperty = T.prototype.hd;
  T.prototype.selectNodes = T.prototype.selectNodes;
  T.prototype.sendToBack = T.prototype.yC;
  T.prototype.setActiveLayer = T.prototype.Um;
  T.prototype.setConfig = T.prototype.Vm;
  T.prototype.setColour = T.prototype.ui;
  T.prototype.setCurrentPage = T.prototype.nh;
  T.prototype.setCustomBackgroundFn = T.prototype.kk;
  T.prototype.setCustomMouseHandler = T.prototype.FC;
  T.prototype.setDocumentProperty = T.prototype.HC;
  T.prototype.setDocumentSize = T.prototype.vi;
  T.prototype.setDocumentSizeInTransaction = T.prototype.Kv;
  T.prototype.setDomElement = T.prototype.Lv;
  T.prototype.setDomNode = T.prototype.IC;
  T.prototype.getDomElement = T.prototype.Fz;
  T.prototype.getNodeFromElement = T.prototype.Nt;
  T.prototype.getNodeObject = T.prototype.Sl;
  T.prototype.setLayerName = T.prototype.QC;
  T.prototype.setPageBackground = T.prototype.TC;
  T.prototype.setPaperSize = T.prototype.Nq;
  T.prototype.setItemProperty = T.prototype.NC;
  T.prototype.setNodeProperties = T.prototype.vb;
  T.prototype.setNodeProperty = T.prototype.Jd;
  T.prototype.setNodeVisibility = T.prototype.RC;
  T.prototype.setOpacity = T.prototype.Tv;
  T.prototype.setPageSize = T.prototype.UC;
  T.prototype.setPageView = T.prototype.Mq;
  T.prototype.setProperties = T.prototype.Xb;
  T.prototype.setProperty = T.prototype.setProperty;
  T.prototype.setViewRectangle = T.prototype.ZC;
  T.prototype.setZoom = T.prototype.$d;
  T.prototype.showLayer = T.prototype.rk;
  T.prototype.snap = T.prototype.ob;
  T.prototype.stopEditingText = T.prototype.br;
  T.prototype.isFullscreenSupported = T.prototype.nm;
  T.prototype.toDebugString = T.prototype.sD;
  T.prototype.toggleFullscreen = T.prototype.xk;
  T.prototype.translateNode = T.prototype.sh;
  T.prototype.removePanel = T.prototype.ek;
  T.prototype.removeSelectionHandles = T.prototype.rq;
  T.prototype.rotateDocument = T.prototype.nC;
  T.prototype.rotateNode = T.prototype.Av;
  T.prototype.rotatePage = T.prototype.Bv;
  T.prototype.scaleNode = T.prototype.Rm;
  T.prototype.setNodeTransform = T.prototype.Lq;
  T.prototype.showColourPicker = T.prototype.Xv;
  T.prototype.createSharedSession = T.prototype.uy;
  T.prototype.joinSharedSession = T.prototype.KA;
  T.prototype.stopSharing = T.prototype.gn;
  T.prototype.leaveSharedSession = T.prototype.tu;
  T.prototype.getSharedSessionName = T.prototype.pA;
  T.prototype.getNewLocalSessionKeys = T.prototype.Mt;
  T.prototype.getLocalSessionKeys = T.prototype.Zz;
  T.prototype.undo = T.prototype.Uc;
  T.prototype.ungroup = T.prototype.Bi;
  T.prototype.upload = T.prototype.upload;
  T.prototype.useArrowTool = T.prototype.ID;
  T.prototype.useBrushTool = T.prototype.JD;
  T.prototype.useCircleTool = T.prototype.KD;
  T.prototype.useCurveTool = T.prototype.LD;
  T.prototype.useCustomTool = T.prototype.MD;
  T.prototype.useEditHandleTool = T.prototype.rr;
  T.prototype.useEllipseTool = T.prototype.un;
  T.prototype.useFreehandTool = T.prototype.PD;
  T.prototype.useStampTool = T.prototype.XD;
  T.prototype.useLineTool = T.prototype.RD;
  T.prototype.usePanTool = T.prototype.SD;
  T.prototype.usePickTool = T.prototype.nw;
  T.prototype.usePolygonTool = T.prototype.sr;
  T.prototype.useQuadraticBezierTool = T.prototype.TD;
  T.prototype.useRectangleTool = T.prototype.Ck;
  T.prototype.useRoundRectTool = T.prototype.UD;
  T.prototype.useShapeBrushTool = T.prototype.VD;
  T.prototype.useShapeTool = T.prototype.tr;
  T.prototype.useSquareTool = T.prototype.WD;
  T.prototype.useTextTool = T.prototype.YD;
  T.prototype.zoomIn = T.prototype.zn;
  T.prototype.zoomOut = T.prototype.An;
  var Lg = A.create("zeact");
  function Mg(c) {
    "BUTTON" === c.tagName &&
      (c.getAttribute("type") || c.setAttribute("type", "button"));
  }
  var P = Se.pg();
  P.al = function(c) {
    c.showPopup = function(a, b) {
      D.ga(
        "showPopup",
        arguments,
        D.String,
        D.gb(
          D.od("ShowPopupArgs", {
            x: D.Ua,
            y: D.Ua,
            refElement: D.gb(D.HTMLElement),
            showPosition: D.Sb,
            parent: D.gb(D.HTMLElement),
            onhide: D.Kf,
            overlay: D.Sb,
            clickToDismiss: D.gb(D.jb(D.String, D.xh)),
          })
        )
      );
      return Ng(c, a, b);
    };
    c.hidePopup = function(a) {
      D.ga("hidePopup", arguments, D.String);
      var b = Og(c, a);
      b && b.Cg && b.Cg.hide();
    };
    c.$listen = function(a, b, d, e) {
      if (c.$element) {
        var f = c.$element;
        if ("string" === typeof a) {
          var h = a;
          var k = b;
          var l = d;
        } else if (a instanceof HTMLElement) (f = a), (h = b), (k = d), (l = e);
        else throw Error("$listen: Invalid args");
        f.addEventListener(h, k, l);
        P.xa(c.$element, function() {
          f.removeEventListener(h, k, l);
        });
      }
    };
  };
  P.zb("click", function(c, a, b, d) {
    function e(b) {
      var e = "touchend" === b.type ? b.changedTouches[0] : b,
        f = new Date().getTime();
      if (300 > f - l)
        Lg(
          "z-click=[" +
            d +
            "] received " +
            b.type +
            ", ignore due to duplicate event"
        );
      else {
        if (
          "click" !== b.type ||
          b.isTrusted ||
          0 !== b.clientX ||
          0 !== b.clientY
        )
          if (
            ((l = f),
            v &&
              (300 < new Date().getTime() - k ||
                10 < lc(e.pageX, e.pageY, n, r)))
          ) {
            Lg(
              "z-click=[" +
                d +
                "] received " +
                b.type +
                ", ignore due to lack of corresponding down"
            );
            return;
          }
        Lg(
          "z-click=[" +
            d +
            "] received " +
            b.type +
            " timediff=" +
            (new Date().getTime() - k) +
            ", needDown=" +
            v +
            " isTrusted=" +
            (b.isTrusted || 0 !== b.clientX || 0 !== b.clientY) +
            " pageX=" +
            b.pageX +
            " pageY=" +
            b.pageY
        );
        Se.Cl(c, d, a, b, h);
        P.digest();
        b.preventDefault();
      }
    }
    function f(a) {
      k = new Date().getTime();
      a = "touchstart" === a.type ? a.changedTouches[0] : a;
      n = a.pageX;
      r = a.pageY;
    }
    function h(a, b) {
      a instanceof T &&
        0 <= b.indexOf("Tool") &&
        (Oe("Called %s", b), (w = !0));
      return a[b];
    }
    var k = 0,
      l = 0,
      n = 0,
      r = 0,
      v = !1;
    Mg(a);
    b = "onpointerdown" in window;
    "ontouchstart" in window
      ? ((v = !0), P.Ta(a, "touchstart", f), P.Ta(a, "touchend", e))
      : b
      ? ((v = !0), P.Ta(a, "pointerup", e), P.Ta(a, "pointerdown", f))
      : ((v = !0), P.Ta(a, "mouseup", e), P.Ta(a, "mousedown", f));
    P.Ta(a, "click", e);
    var w;
    P.Ta(a, "keydown", function(b) {
      b.target === a &&
        13 === b.keyCode &&
        ((v = w = !1), e(b), w && c.ctx.focus(!0, a));
    });
  });
  P.zb("has", function(c, a, b, d) {
    var e = a.style.display;
    b = [];
    var f = 0;
    for (d = d.split("|"); f < d.length; f++) {
      var h = d[f];
      h = h.trim();
      b.push(
        '("' +
          h +
          '" in ctx.summary.types || "' +
          h +
          '" in ctx.summary.properties)'
      );
    }
    (b = b.join("||")) &&
      P.rc(c, a, b, function(b) {
        a.style.display = b ? e : "none";
      });
  });
  P.zb("property", function(c, a, b, d) {
    var e = 'ctx.summary.properties["' + d + '"]',
      f = a.getAttribute("z-value"),
      h = null !== a.getAttribute("z-colour");
    P.an(c, function() {
      P.rc(c, a, e, function(b) {
        "value" in a && (a.value = b);
        null !== f && u(a).ir("selected", "" + b === f);
        h && (a.style.backgroundColor = b);
      });
    });
    "BUTTON" === a.tagName
      ? (Mg(a),
        P.Ta(a, "click", function() {
          var b = a.getAttribute("z-value") || "";
          c.ctx.setProperty(d, b);
        }))
      : P.Ta(a, "change", function() {
          var b = Se.Hz(c, a);
          void 0 !== b && c.ctx.setProperty(d, b);
        });
  });
  function Pg(c) {
    c.hasOwnProperty("$popups") || (c.$popups = {});
    return c.$popups;
  }
  function Og(c, a) {
    for (; c; ) {
      if (c.$popups && c.$popups[a]) return c.$popups[a];
      c = c.$parent;
    }
  }
  P.zb(
    "popup",
    function(c, a, b, d) {
      if (!a.hasAttribute("z-ignore-popup-hack")) {
        var e = a.parentNode;
        if (!e) throw Error("z-popup: no parent node?!");
        var f = document.createComment("z-popup=" + d);
        e.replaceChild(f, a);
        a.setAttribute("z-ignore-popup-hack", "");
        var h = Pg(c);
        P.xa(e, function() {
          a.removeAttribute("z-ignore-popup-hack");
          e && e.replaceChild(a, f);
          if (h[d]) {
            var b = h[d];
            b.Cg && b.Cg.destroy();
            delete h[d];
          }
        });
        h[d] = { da: a, Cg: null };
      }
    },
    0
  );
  function Ng(c, a, b) {
    void 0 === b && (b = {});
    var d = Og(c, a);
    if (!d) throw Error("Popup " + a + " not found");
    Lg("show-popup " + a);
    var e = d.da;
    if (d.Cg) Lg("Dialog %s already shown by another button", a);
    else {
      "string" !== typeof b.clickToDismiss &&
        (b.clickToDismiss = e.getAttribute("z-click-dismiss"));
      var f = e.getAttribute("z-popup");
      e = e.cloneNode(!0);
      var h = "none" !== b.clickToDismiss,
        k = !1;
      "" === b.clickToDismiss
        ? (k = !0)
        : "string" === typeof b.clickToDismiss
        ? (k = b.clickToDismiss)
        : b.clickToDismiss && (k = !0);
      e = P.Ic(c, e).node;
      b.parent && b.parent.appendChild(e);
      f && e.setAttribute("z-popup", f);
      var l = yd(e, { overlay: b.overlay || "transparent" });
      d.Cg = l;
      l.onhide = function() {
        if (b.onhide) b.onhide();
        Lg("Popup " + a + " is hidden.");
        l && (l.destroy(), (d.Cg = null), P.detach(e), u(e).remove());
      };
      c = b.showPosition || e.getAttribute("z-show-position") || "";
      if ("centre" === c || "center" === c) l.show(void 0, void 0, k, h);
      else if (c && b.refElement) l.show(b.refElement, c, k, h);
      else if ("number" === typeof b.x && "number" === typeof b.y)
        l.show(b.x, b.y, k, h);
      else
        throw Error(
          "Invalid arguments to showPopup; you must have one of x/y, or showPosition and refElement."
        );
    }
  }
  P.zb("show-popup", function(c, a, b, d) {
    Mg(a);
    P.Ta(a, "click", function(b) {
      Ng(c, d, {
        refElement: a,
        showPosition: a.getAttribute("z-show-position"),
        x: b.pageX,
        y: b.pageY,
        clickToDismiss: a.getAttribute("z-click-dismiss"),
        parent: c.ctx ? c.ctx.nc() : document.body,
      });
    });
  });
  P.zb("colour", function(c, a, b) {
    P.Ta(a, "click", function(d) {
      c.ctx.Xv(
        a.getAttribute(b) || a.getAttribute("z-property") || "",
        d.pageX,
        d.pageY
      );
    });
  });
  P.zb(
    "page",
    function(c, a, b, d) {
      function e() {
        if (!(k >= f.ib())) {
          var a = f.Zf(k);
          a.x = 0;
          a.y = 0;
          v && (a = v);
          var b = Math.min(l / a.width, n / a.height);
          1 < b && (b = 1);
          h.width = (a.width * b) | 0;
          h.height = (a.height * b) | 0;
          r.save();
          r.scale(b, b);
          r.translate(-a.x, -a.y);
          r.fillStyle = "white";
          r.fillRect(0, 0, a.width, a.height);
          f.la(r, { page: k });
          r.restore();
        }
      }
      if (!a.iE) {
        var f = c.ctx,
          h = document.createElement("canvas"),
          k = Le(c, d) || 0,
          l = parseInt(a.getAttribute("z-width") || "1000000"),
          n = parseInt(a.getAttribute("z-height") || "1000000");
        h.style.backgroundColor = "white";
        var r = h.getContext("2d");
        b = a.getAttribute("z-rect");
        var v = null;
        b && (v = Le(c, b));
        for (d = 0; d < a.attributes.length; d++) {
          var w = a.attributes[d];
          "z-page" !== w.name && h.setAttribute(w.name, w.value);
        }
        a.parentNode && a.parentNode.replaceChild(h, a);
        e();
        b &&
          P.rc(c, a, b, function(a) {
            v = a;
            e();
          });
        var x = Bf(100, e);
        f.pa("document-changed", e);
        f.pa("resource-loaded", e);
        f.pa("resize", x);
        P.xa(h, function() {
          f.removeListener("document-changed", e);
          f.removeListener("resource-loaded", e);
          f.removeListener("resize", x);
          x.cancel();
          h.parentNode && h.parentNode.replaceChild(a, h);
        });
        for (d = 0; d < a.attributes.length; d++)
          h.setAttribute(a.attributes[d].name, a.attributes[d].value);
        h.iE = !0;
        return P.Ic(c, h).node;
      }
    },
    1
  );
  P.zb("sort", function(c, a, b, d) {
    O.De(".zwibbler-sort-highlight { outline: 3px solid orange }");
    var e = gb({
      parent: a,
      Gs: "z-sortable",
      fq: "zwibbler-sort-highlight",
      wB: function(a, b) {
        c.$from = a;
        c.$to = b;
        Le(c, d);
        P.digest();
      },
    });
    P.xa(a, function() {
      e();
    });
  });
  P.zb("fixture", function(c, a, b, d) {
    setTimeout(function() {
      var b = O.getContext(a);
      b ? b.Xk(a, d) : console.warn("z-fixture: no ctx in scope; scope is ", c);
    });
  });
  function Qg() {
    Oe("Document loaded.");
    Array.prototype.forEach.call(
      document.querySelectorAll("zwibbler,[zwibbler]"),
      function(c) {
        Rg(c, null, !1);
      }
    );
  }
  function Sg(c, a, b) {
    u(c).matches(a) && b(c);
    Array.prototype.forEach.call(c.querySelectorAll(a), b);
  }
  function Rg(c, a, b) {
    if (
      !c.Jk &&
      ("ZWIBBLER" === c.tagName && O.De("zwibbler {display: block}"),
      b || null === c.getAttribute("z-no-auto-init"))
    ) {
      Sg(c, "[z-component]", function(a) {
        var b = a.getAttribute("z-component"),
          c = a.getAttribute("z-controller"),
          d = (a.getAttribute("z-properties") || "").split(/[ ,]+/);
        if (b) {
          var e = null;
          if (c)
            if (c in O.controllers) e = O.controllers[c];
            else if ("function" === typeof window.zcontroller)
              e = window.zcontroller;
            else
              throw Error(
                "While processing component: " +
                  b +
                  " could not find controller function " +
                  c
              );
          O.Ui(b, {
            template: a,
            properties: d,
            controller: function(a) {
              a.$parent.ctx && !a.ctx && (a.ctx = a.$parent.ctx);
              e && e(a);
            },
          });
          a.parentNode.removeChild(a);
        }
      });
      var d,
        e = {};
      for (b = 0; b < c.attributes.length; b++) {
        var f = c.attributes[b];
        O.Yt(f.name) && (e[f.name] = f.value);
      }
      Sg(c, "z-canvas,[z-canvas]", function(b) {
        d = O.create(b, e, a);
      });
      a || (a = d || {});
      a.$digest = function(a) {
        if (a) P.digest(a);
        else
          return new Promise(function(a) {
            P.digest(a);
          });
      };
      a.$watch = function(b, d) {
        P.rc(a, c, b, d);
      };
      a.$apply = function(b) {
        if (b) return Le(a, b);
        P.digest();
      };
      a.$element = c;
      P.al(a);
      d ? ((a.ctx = d), d.Ic(a, c)) : P.Ic(a, c);
      b = c.getAttribute("z-controller") || "";
      b in O.controllers
        ? (Oe("Running controller: %s", b), O.controllers[b](a))
        : "function" === typeof window[b]
        ? (Oe("Running controller: %s", b), window[b](a))
        : b && console.log("Controller not found: %s", b);
      P.digest();
      return a;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    Qg();
  });
  P.zb("editable", function(c, a, b, d) {
    function e() {
      var b = a.innerHTML;
      f = b;
      Le(c, d + "=" + JSON.stringify(b));
      Lg("Text editor no longer selected. Blurring");
      k && k.exec("select-none");
      k && k.setActive(!1);
    }
    a.hasAttribute("tabindex") || a.setAttribute("tabindex", "0");
    var f = "";
    P.rc(c, a, d, function(a) {
      f !== a && ((f = "" + a), k && k.Pv(f));
    });
    var h = new pb(),
      k = null;
    setTimeout(function() {
      k = new of(h, a, {
        Rq: !0,
        placeholder: a.getAttribute("placeholder") || "",
      });
      k.Pv(f);
      k.pa("enter", e);
    });
    P.xa(a, function() {
      h.Sa();
    });
    P.Ta(a, "focus", function() {
      Lg("Got text focus event");
      k && k.setActive(!0);
      k && -1 == f.indexOf("\n") && k.exec("select-all");
    });
    P.Ta(a, "click", function() {
      Lg("Clicked on text");
      k && k.setActive(!0);
    });
    P.Ta(a, "blur", function() {
      Lg("Got text blur event");
    });
    c.ctx &&
      c.ctx.pa("selected-nodes", function() {
        !c.ctx.Sg(c.id) && k && k.active && e();
      });
  });
  P.pe("clear-glyph", function(c, a, b) {
    Lg("Drawing colour panel, width=%s tag=%s", JSON.stringify(a), c.tagName);
    "CANVAS" === c.tagName &&
      ((c.width = a.width),
      (c.height = a.width),
      "clear" === a.style
        ? qf(c.getContext("2d"), 0, 0, a.width)
        : rf(c.getContext("2d"), 0, 0, a.width),
      b.ctx.resize());
  });
  P.zb("drag", function(c, a, b, d) {
    var e = !1,
      f = new F(0, 0),
      h = null;
    P.Ta(a, "mousedown", function(a) {
      e = !0;
      f = new F(a.pageX, a.pageY);
      h = a;
    });
    P.Ta(document.body, "mousemove", function(b) {
      e &&
        (0 === b.buttons
          ? ((e = !1), (h = null))
          : 10 < new F(b.pageX, b.pageY).bc(f) &&
            (Se.Cl(c, d, a, h), (e = !1), (h = null)));
    });
    P.Ta(a, "mouseup", function() {
      e = !1;
      h = null;
    });
  });
  var Tg = A.create("HTMLNode");
  function Ug(c) {
    return (function(a) {
      function b() {
        for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
        b = a.apply(this, b) || this;
        b.da = null;
        b.children = [];
        b.lb |= 6;
        return b;
      }
      __extends(b, a);
      b.prototype.removeChild = function(a) {
        var b = this.children[a];
        this.children.splice(a, 1);
        Qc(b.node) &&
          b.node.da &&
          b.node.da.parentNode &&
          (b.node.da.parentNode
            ? b.node.da.parentNode.removeChild(b.node.da)
            : b.af.parentNode && b.af.parentNode.removeChild(b.af));
        return b.node;
      };
      b.prototype.Up = function(a) {
        for (a += 1; a < this.children.length; a++) {
          var b = this.children[a];
          if (Qc(b.node) && b.node.da)
            return b.node.da.parentNode ? b.node.da : b.af;
        }
        return null;
      };
      b.prototype.Bp = function(a, b) {
        this.children.splice(b, 0, {
          node: a,
          af: document.createComment("node " + a.id),
        });
        this.da &&
          Qc(a) &&
          a.da &&
          this.Tw(a.da, this.Up(b), a.ia("$component"));
      };
      b.prototype.Tw = function(a, b, c) {
        if (b) {
          c = b.parentNode;
          if (!c)
            for (var d = 0, e = this.children; d < e.length; d++) {
              var f = e[d];
              Qc(f.node) &&
                f.node.da === b &&
                ((c = f.af.parentNode), (b = f.af));
            }
          if (!c) throw Error("Could not find parent");
          c.insertBefore(a, b);
        } else
          this.da &&
            ((c = c || a.getAttribute("z-type") || ""),
            Vg(this.da, c).appendChild(a));
      };
      b.prototype.nb = function(a) {
        if (0 > a || a >= this.children.length)
          throw Error(
            "getChild(" +
              a +
              ") but there are only " +
              this.children.length +
              " children"
          );
        return this.children[a].node;
      };
      b.prototype.qk = function(a, b) {
        Tg("showChild(" + a + ", " + b + ")");
        if (a >= this.children.length || 0 > a)
          throw Error(
            "showChild: Asked to show " +
              a +
              " but only " +
              this.children.length +
              " children"
          );
        a = this.children[a];
        if (Qc(a.node) && a.node.da) {
          var c = a.node.da.parentNode || a.af.parentNode;
          c
            ? b && !a.node.da.parentNode
              ? c.replaceChild(a.node.da, a.af)
              : !b && a.node.da.parentNode && c.replaceChild(a.af, a.node.da)
            : Tg("Could not find HTML parent for " + a.node.type());
        }
      };
      b.prototype.sj = function() {
        return new G(0, 0, 0, 0);
      };
      b.prototype.nk = function() {};
      b.prototype.Zm = function() {};
      return b;
    })(c);
  }
  var Xg = (function(c) {
    function a(a, d) {
      var b = c.call(this, a, d) || this;
      b.Eo = null;
      b.fk = null;
      b.Yd = new G(0, 0, 0, 0);
      b.tt = !1;
      b.hq = {};
      b.YA = new J();
      for (var f in b.ba)
        switch (f) {
          case "layer":
          case "matrix":
            break;
          default:
            delete b.ba[f];
        }
      "ResizeObserver" in window &&
        (b.fk = new window.ResizeObserver(function() {
          b.Hd();
        }));
      return b;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "HTMLNode";
    };
    a.prototype.Sa = function() {
      this.da &&
        !this.tt &&
        (P.detach(this.da),
        u(this.da).remove(),
        this.fk && this.fk.unobserve(this.da));
    };
    a.prototype.Zm = function(a) {
      this.hq = a;
    };
    a.prototype.Xe = function(a) {
      return {
        "style.left": parseFloat(this.ba["style.left"] || "0") + a.Aa + "px",
        "style.top": parseFloat(this.ba["style.top"] || "0") + a.Ba + "px",
      };
    };
    a.prototype.setProperty = function(a, d) {
      "matrix" === a || "object" !== typeof d || d instanceof Array
        ? ((d = c.prototype.setProperty.call(this, a, d)), this.Ya(a, d))
        : this.Xb(Wg(d, {}, a + "."));
    };
    a.prototype.ia = function(a) {
      switch (a) {
        case "lockRotation":
          return !0;
      }
      return c.prototype.ia.call(this, a);
    };
    a.prototype.Ya = function(a, c) {
      "opacity" === a && (a = "style.opacity");
      this.da &&
        "style." === a.substr(0, 6) &&
        (this.da.style[a.substr(6)] = c || "");
    };
    a.prototype.createElement = function() {
      var a = this.ba.$component;
      Tg("Create component element of type %s", a);
      var c = Uc(this.hq, this);
      if (!(a in O.te)) throw Error("Error: No component registered for " + a);
      c = O.Wi(this.hq, a, { nid: this.id, "z-type": a }, c);
      this.Eo = O.te[a].draw || null;
      this.scope = c.scope;
      return c.node;
    };
    a.prototype.format = function(a, c) {
      var b = this;
      this.wv = c;
      Tg("FORMAT type %s", this.ba.$component);
      if (null === this.da) {
        this.da = this.createElement();
        this.da.style.boxSizing = "border-box";
        this.da.JE = function() {
          return !1;
        };
        this.parent && Qc(this.parent) && this.uB();
        this.fk && this.fk.observe(this.da);
        for (var d in this.ba) this.Ya(d, this.ba[d]);
        this.da.addEventListener("load", function() {
          Tg("Something loaded; request reformat.");
          c.ta("reformat", b.id);
        });
      }
      d = this.Na();
      "style.left" in this.ba &&
        (this.da.style.left = parseFloat(this.ba["style.left"]) + d.Aa + "px");
      "style.top" in this.ba &&
        (this.da.style.top = parseFloat(this.ba["style.top"]) + d.Ba + "px");
      for (d = 0; d < this.children.length; d++) {
        var h = this.nb(d);
        Pc(h) && h.format(a, c);
      }
    };
    a.prototype.Hd = function() {
      if (this.da && this.da.offsetWidth) {
        var a = this.da.offsetWidth,
          c = this.da.offsetHeight;
        this.Yd.width = a;
        this.Yd.height = c;
        this.rect.width = a;
        this.rect.height = c;
        this.ya.width = a;
        this.ya.height = c;
        this.wv &&
          (this.log("%s size has changed: %sx%s", this, a, c),
          this.wv.gC(this.id));
      }
    };
    a.prototype.nk = function(a, c) {
      this.rect = a;
      this.ya = a.clone();
      this.Yd = a.clone();
      this.YA = c;
    };
    a.prototype.$m = function(a, d) {
      c.prototype.$m.call(this, a, d);
      this.da &&
        ((this.da.style.transform = "translate(" + a + "px, " + d + "px)"),
        (this.da.style.zIndex = a || d ? "1" : ""));
    };
    a.prototype.rp = function() {
      for (var a = [], c = 0; c < this.children.length; c++) {
        var e = this.nb(c);
        if (Pc(e)) {
          var f = e.ia("sticky");
          f &&
            ((e = { Ke: e.id }),
            "row" === f
              ? ((e.xn = this.rect.width), a.push(e))
              : "column" === f && ((e.yn = this.rect.height), a.push(e)));
        }
      }
      return a;
    };
    a.prototype.la = function(a) {
      if (!this.hidden())
        if (
          (this.log("%s: Drawing %sx%s", this, this.Yd.width, this.Yd.height),
          a.Fi)
        ) {
          a.translate(this.offsetX, this.offsetY);
          var b = a.globalCompositeOperation;
          a.globalCompositeOperation = "destination-out";
          var c = this.Yd;
          this.da &&
            this.da.classList.contains("zwibbler-selected") &&
            ((c = c.clone()), c.Ed(8, 8));
          a.fillRect(c.x, c.y, c.width, c.height);
          a.globalCompositeOperation = b;
          a.strokeStyle = "rgba(255,0,0,0.2)";
          a.lineWidth = 3;
          a.translate(-this.offsetX, -this.offsetY);
        } else if (this.Eo) this.Eo(this.scope, a);
        else if (this.da) {
          b =
            "VIDEO" === this.da.tagName
              ? this.da
              : this.da.querySelector("video");
          c = !1;
          var f = this.Yd;
          b &&
            3 <= b.readyState &&
            !u.GA(b) &&
            (a.drawImage(b, f.x, f.y, f.width, f.height), (c = !0));
          c ||
            ((a.fillStyle = "#cccccc"),
            a.fillRect(f.x, f.y, f.width, f.height));
        }
    };
    a.prototype.jc = function() {
      return !0;
    };
    a.prototype.uB = function() {
      if (this.parent && Qc(this.parent) && this.parent.da) {
        var a = this.parent.fe(this);
        if (-1 === a) throw Error("Child node not found");
        var c = Vg(this.parent.da, this.ba.$component);
        a = this.parent.Up(a);
        c && this.da && c.insertBefore(this.da, a);
      }
    };
    a.prototype.sj = function() {
      if (!this.da) return this.rect;
      var a = u(this.da).Rl();
      return new G(
        this.rect.x - a.left,
        this.rect.y - a.top,
        this.rect.width + a.left + a.right,
        this.rect.height + a.top + a.bottom
      );
    };
    a.prototype.Pg = function() {
      return !1;
    };
    a.prototype.Ig = function(a, d) {
      switch (a) {
        case "style.width":
        case "style.left":
        case "style.top":
        case "style.height":
          if ("number" === typeof d) return d + "px";
      }
      return c.prototype.Ig.call(this, a, d);
    };
    a.prototype.mf = function() {
      return !1;
    };
    return a;
  })(Ug(cd));
  Vc.td("HTMLNode", Xg);
  function Vg(c, a) {
    if (c.classList.contains("zwibbler-page")) return c;
    for (
      var b = c.querySelectorAll("[container-for]"), d = null, e = 0;
      e < b.length;
      e++
    )
      if (Xf(b[e], a)) {
        d = b[e];
        break;
      }
    if (d) {
      a = d.parentElement;
      for (b = !0; a; ) {
        if (a.getAttribute("nid")) {
          b = a == c;
          break;
        }
        a = a.parentElement;
      }
      if (b) return d;
    }
    return c;
  }
  function Xf(c, a) {
    return (c = c.getAttribute("container-for")) && 0 <= c.indexOf(a);
  }
  function Wg(c, a, b) {
    void 0 === a && (a = {});
    void 0 === b && (b = "");
    for (var d in c) {
      var e = c[d];
      e instanceof Object && !(e instanceof Array)
        ? Wg(e, a, d + ".")
        : (a[b + d] = e);
    }
    return a;
  }
  var Zg = (function(c) {
    function a(a, d) {
      d = c.call(this, a, d) || this;
      d.lb |= 2;
      d.da = document.createElement("div");
      d.da.classList.add("zwibbler-page");
      d.da.setAttribute("nid", a);
      return d;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "GroupNode";
    };
    a.prototype.format = function(a, c) {
      for (var b = 0; b < this.children.length; b++) {
        var d = this.nb(b);
        Pc(d) && d.format(a, c);
      }
    };
    return a;
  })(Ug(cd));
  cd.td("GroupNode", Zg);
  var $g = (function() {
    function c() {
      this.keys = {};
    }
    c.prototype.contains = function(a) {
      return a in this.keys;
    };
    c.prototype.add = function(a) {
      if (a instanceof Array)
        for (var b = 0; b < a.length; b++) this.keys[a[b]] = !0;
      else this.keys[a] = !0;
    };
    c.prototype.remove = function(a) {
      delete this.keys[a];
    };
    c.prototype.ku = function(a) {
      var b;
      If(a instanceof c);
      var d = new c();
      for (b in this.keys) a.contains(b) && d.add(b);
    };
    c.prototype.dj = function(a) {
      var b;
      If(a instanceof c);
      var d = new c();
      for (b in this.keys) a.contains(b) || d.add(b);
      return d;
    };
    c.prototype.qc = function() {
      var a;
      var b = [];
      for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(a);
      return b;
    };
    c.prototype.uD = function() {
      var a;
      var b = [];
      for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(parseFloat(a));
      return b;
    };
    c.prototype.clear = function() {
      this.keys = {};
    };
    c.prototype.Nc = function(a) {
      for (var b in this.keys) if (this.keys.hasOwnProperty(b) && a(b)) break;
    };
    c.prototype.empty = function() {
      for (var a in this.keys) if (this.keys.hasOwnProperty(a)) return !1;
      return !0;
    };
    return c;
  })();
  var ah = (function(c) {
    function a(a, d) {
      d = c.call(this, a, d) || this;
      d.log = A.create("PAGE", !0);
      d.da = document.createElement("div");
      d.da.classList.add("zwibbler-page");
      d.da.setAttribute("nid", a);
      return d;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "PageNode";
    };
    a.prototype.setProperty = function(a, d) {
      if (void 0 === d) delete this.ba[a];
      else
        switch (a) {
          case "width":
          case "height":
          case "background":
            this.ba[a] = d;
            break;
          default:
            c.prototype.setProperty.call(this, a, d);
        }
    };
    a.prototype.cd = function() {
      return "width" in this.ba && "height" in this.ba
        ? new kc(this.ba.width, this.ba.height)
        : null;
    };
    return a;
  })(Ug(Vc));
  cd.td("PageNode", ah);
  var bh = A.create("crdt"),
    ch = (function() {
      function c(a, b, c) {
        this.Fd = a;
        this.Yb = b;
        this.Ak = c;
      }
      c.prototype.before = function(a) {
        return (
          this.Fd < a.Fd ||
          (this.Fd === a.Fd &&
            (this.Yb < a.Yb || (this.Yb === a.Yb && this.Ak < a.Ak)))
        );
      };
      c.prototype.encode = function() {
        return (
          this.Fd.toString(36) + ":" + this.Yb + ":" + this.Ak.toString(36)
        );
      };
      c.prototype.toString = function() {
        return this.encode();
      };
      c.Rb = function(a) {
        for (var b = a.split(":"), d, e; 3 === b.length; ) {
          d = parseInt(b[0], 36);
          e = parseInt(b[2], 36);
          if (isNaN(d) || isNaN(e)) break;
          return new c(d, b[1], e);
        }
        throw Error("Could not decode Timestamp: " + a);
      };
      return c;
    })(),
    dh = (function() {
      function c(a, b) {
        void 0 === b && (b = []);
        this.Nb = a;
        this.ops = b;
      }
      c.prototype.Kg = function() {
        return this.Nb.Yb + "-" + this.Nb.Ak.toString(36);
      };
      c.prototype.before = function(a) {
        return this.Nb.before(a.Nb);
      };
      c.Vc = function(a, b) {
        return a.before(b) ? -1 : b.before(a) ? 1 : 0;
      };
      c.prototype.clone = function(a) {
        void 0 === a && (a = this.Nb);
        for (var b = [], d = 0, e = this.ops; d < e.length; d++) e[d].clone(b);
        return new c(a, b);
      };
      c.prototype.inverse = function(a) {
        void 0 === a && (a = this.Nb);
        for (var b = [], d = this.ops.length - 1; 0 <= d; d--)
          this.ops[d].inverse(b);
        return new c(a, b);
      };
      c.prototype.toString = function() {
        for (
          var a = "  " + this.Nb + " --\x3e\n", b = 0, c = this.ops;
          b < c.length;
          b++
        )
          a += "    " + c[b] + "\n";
        return a;
      };
      return c;
    })(),
    eh = (function() {
      function c(a, b) {
        this.me = a;
        this.Ma = b;
      }
      c.prototype.encode = function() {
        return this.me + ":" + this.Ma.encode();
      };
      c.prototype.toString = function() {
        return this.encode();
      };
      c.Rb = function(a) {
        var b = a.split(":");
        if (2 !== b.length) throw Error("Could not decode treepath: " + a);
        return new c(b[0], yg.Rb(b[1]));
      };
      return c;
    })(),
    hh = (function() {
      function c(a, b, c) {
        this.Ka = a;
        this.ad = b;
        this.ba = c;
        this.type = "c";
      }
      c.prototype.encode = function() {
        var a = JSON.stringify(this.ba);
        return (
          "C" +
          this.Ka +
          ";" +
          this.ad.encode() +
          ";" +
          a.length +
          ";" +
          a +
          ";"
        );
      };
      c.prototype.clone = function(a) {
        a.push(new fh(this.Ka));
      };
      c.prototype.toString = function() {
        return (
          "CREATE " +
          this.Ka +
          " " +
          (this.ba.$type || this.ba.type || this.ba.name || "") +
          " at " +
          this.ad +
          " len=" +
          JSON.stringify(this.ba).length
        );
      };
      c.prototype.inverse = function(a) {
        a.push(new gh(this.Ka));
      };
      c.Rb = function(a, b) {
        var d = /C([^;]+);([^;]+);(\d+);/g;
        d.lastIndex = b;
        var e = d.exec(a);
        return e && e.index === b
          ? ((b = parseInt(e[3], 10)),
            (a = JSON.parse(a.substr(d.lastIndex, b))),
            { Pf: new c(e[1], eh.Rb(e[2]), a), position: d.lastIndex + b + 1 })
          : null;
      };
      c.prototype.gk = function(a) {
        this.ad = a.gk(this.ad, this.Ka);
      };
      c.prototype.Qc = function(a) {
        a.createNode(this.Ka, this.ad, this.ba);
      };
      return c;
    })();
  (function() {
    function c(a) {
      this.zB = a;
      this.type = "n";
    }
    c.prototype.clone = function(a) {
      a.push(this);
    };
    c.prototype.inverse = function(a) {
      a.push(this);
    };
    c.prototype.encode = function() {
      return "";
    };
    c.prototype.Qc = function() {};
    c.prototype.toString = function() {
      return "NULLIFIED " + this.zB;
    };
    return c;
  })();
  var gh = (function() {
      function c(a) {
        this.Ka = a;
        this.type = "d";
        this.Tj = !1;
      }
      c.prototype.clone = function(a) {
        a.push(new c(this.Ka));
      };
      c.prototype.inverse = function(a) {
        a.push(new fh(this.Ka));
      };
      c.prototype.encode = function() {
        return "D" + this.Ka + ";";
      };
      c.prototype.toString = function() {
        return "DELETE " + this.Ka;
      };
      c.Rb = function(a, b) {
        var d = /D([^;]+);/g;
        d.lastIndex = b;
        return (a = d.exec(a)) && a.index === b
          ? { Pf: new c(a[1]), position: d.lastIndex }
          : null;
      };
      c.prototype.Qc = function(a) {
        a.ue(this.Ka);
      };
      return c;
    })(),
    fh = (function() {
      function c(a) {
        this.Ka = a;
        this.type = "u";
      }
      c.prototype.clone = function(a) {
        a.push(new c(this.Ka));
      };
      c.prototype.inverse = function(a) {
        a.push(new gh(this.Ka));
      };
      c.prototype.encode = function() {
        return "U" + this.Ka + ";";
      };
      c.prototype.toString = function() {
        return "UNDELETE " + this.Ka;
      };
      c.Rb = function(a, b) {
        var d = /U([^;]+);/g;
        d.lastIndex = b;
        return (a = d.exec(a)) && a.index === b
          ? { Pf: new c(a[1]), position: d.lastIndex }
          : null;
      };
      c.prototype.Qc = function(a) {
        a.lw(this.Ka);
      };
      return c;
    })(),
    ih = /^\\*undefined$/;
  function jh(c, a) {
    return "undefined" === typeof a
      ? "undefined"
      : "string" === typeof a && a.match(ih)
      ? "/" + a
      : a;
  }
  var kh = (function() {
      function c(a, b, c) {
        void 0 === c && (c = null);
        this.Ka = a;
        this.ba = b;
        this.Le = c;
        this.type = "s";
        this.Tj = !1;
        a: {
          for (var d in b) {
            a = !1;
            break a;
          }
          a = !0;
        }
        if (a) throw Error("Empty properties in constructor");
      }
      c.prototype.clone = function(a) {
        a.push(new c(this.Ka, this.ba));
      };
      c.prototype.inverse = function(a) {
        if (null === this.Le) {
          if (this.Tj) return;
          throw Error(
            "SetPropertiesOp was not executed before inversion: " + this
          );
        }
        a.push(new c(this.Ka, this.Le));
      };
      c.prototype.encode = function() {
        var a = JSON.stringify(this.ba, jh);
        return "S" + this.Ka + ";" + a.length + ";" + a + ";";
      };
      c.prototype.toString = function() {
        return "SET " + this.Ka + " " + JSON.stringify(this.ba, jh);
      };
      c.Rb = function(a, b) {
        var d = /S([^;]+);(\d+);/g;
        d.lastIndex = b;
        var e = d.exec(a);
        if (e && e.index === b) {
          b = parseInt(e[2], 10);
          a = JSON.parse(a.substr(d.lastIndex, b));
          for (var f in a) {
            var h = f;
            var k = a[f];
            k =
              "undefined" === k
                ? void 0
                : "string" === typeof k && k.match(ih)
                ? k.substr(1)
                : k;
            a[h] = k;
          }
          return { Pf: new c(e[1], a, null), position: d.lastIndex + b + 1 };
        }
        return null;
      };
      c.prototype.Qc = function(a) {
        var b = a.rb(this.Ka);
        this.Le = {};
        for (var c in this.ba) this.Le[c] = b[c];
        a.Xb(this.Ka, this.ba);
      };
      return c;
    })(),
    lh = (function() {
      function c(a, b, c) {
        void 0 === c && (c = null);
        this.Ka = a;
        this.ad = b;
        this.src = c;
        this.type = "m";
        this.Tj = !1;
      }
      c.prototype.clone = function(a) {
        a.push(new c(this.Ka, this.ad, this.src));
      };
      c.prototype.inverse = function(a) {
        if (!this.src) {
          if (this.Tj) return;
          throw Error("moveOp: Must be executed before inversion");
        }
        a.push(new c(this.Ka, this.src, this.ad));
      };
      c.prototype.encode = function() {
        return "M" + this.Ka + ";" + this.ad.encode() + ";";
      };
      c.prototype.toString = function() {
        return "MOVE " + this.Ka + " -> " + this.ad;
      };
      c.Rb = function(a, b) {
        var d = /M([^;]+);([^;]+);/g;
        d.lastIndex = b;
        return (a = d.exec(a)) && a.index === b
          ? { Pf: new c(a[1], eh.Rb(a[2])), position: d.lastIndex }
          : null;
      };
      c.prototype.gk = function(a) {
        this.ad = a.gk(this.ad, this.Ka);
      };
      c.prototype.Qc = function(a) {
        var b = a.Fa[this.Ka];
        b && b.parent && a.has(this.ad.me)
          ? ((this.src = new eh(b.parent.Ka, b.Ma)), a.ed(this.Ka, this.ad))
          : (this.Tj = !0);
      };
      return c;
    })();
  function mh(c, a) {
    for (var b = -1, d, e; 1 < c - b; ) {
      d = (c + b) >> 1;
      e = a(d);
      if (0 == e) return d;
      0 > e ? (b = d) : (c = d);
    }
    return c;
  }
  function nh(c) {
    for (var a = [], b = 1; b < arguments.length; b++) a[b - 1] = arguments[b];
    for (b = 0; b < a.length; b++) {
      var d = a[b],
        e;
      for (e in d) c[e] = d[e];
    }
  }
  var oh = (function() {
      function c(a, b) {
        this.Wa = b;
        this.Fa = {};
        this.rf = new zg(a);
        this.Zk("0");
      }
      c.prototype.Zk = function(a) {
        this.Fa[a] = {
          Ka: a,
          parent: null,
          Ma: new yg([], []),
          children: [],
          index: 0,
          Sd: !1,
          de: null,
          vr: 0,
        };
      };
      c.prototype.has = function(a) {
        return a in this.Fa;
      };
      c.prototype.zd = function(a) {
        a = this.Fa[a];
        if (!a) return !1;
        for (;;) {
          if (a.Sd) return !1;
          if (!a.parent) break;
          a = a.parent;
        }
        return !0;
      };
      c.prototype.gk = function(a, b) {
        if (!this.has(a.me)) return a;
        bh("Attempt to retarget %s", a);
        var c = this.qj(a);
        b = this.ip(a.me, b, c);
        var e = this.qj(a);
        if (c !== e)
          throw Error(
            "retarget failed: index=" +
              c +
              " newIndex=" +
              c +
              " " +
              a +
              "   " +
              b
          );
        bh("Retarget %s -> %s", a, b);
        return b;
      };
      c.prototype.ip = function(a, b, c) {
        var d = this.Fa[a];
        if (!d) throw Error("getInsertPath: " + a + " does not exist.");
        var f = 0,
          h;
        for (h = 0; h < d.children.length; h++) {
          var k = d.children[h];
          if (!k.Sd) {
            k.Ka === b && c++;
            if (f === c) break;
            f++;
          }
        }
        if (0 > h || h > d.children.length)
          throw Error(
            "getInsertPath: index=" +
              h +
              " wanted=" +
              c +
              " but " +
              a +
              " has " +
              d.children.length +
              " children."
          );
        bh(
          "Move " + a + " index=" + h + " children.length=" + d.children.length
        );
        0 === d.children.length
          ? ((b = this.rf.first), (c = this.rf.Zh))
          : 0 === h
          ? ((b = this.rf.first), (c = d.children[h].Ma))
          : h === d.children.length
          ? ((b = d.children[d.children.length - 1].Ma), (c = this.rf.Zh))
          : ((b = d.children[h - 1].Ma),
            (c = h < d.children.length ? d.children[h].Ma : this.rf.Zh));
        try {
          var l = new eh(a, this.rf.bo(b, c));
        } catch (n) {
          bh(
            "Path between %s and %s, index=%s children=%s",
            b,
            c,
            h,
            d.children.length
          );
          bh("debug info: index is %s", h);
          for (a = 0; a < d.children.length; a++)
            bh(
              "Child %s nid=%s lpath %s",
              a,
              d.children[a].Ka,
              d.children[a].Ma
            );
          throw n;
        }
        bh("Path between " + b + " and " + c + " is " + l.Ma);
        a = this.qj(l);
        if (a !== h) {
          bh("debug info: wanted index is %s, got %s", h, a);
          for (a = 0; a < d.children.length; a++)
            bh(
              "Child %s nid=%s lpath %s",
              a,
              d.children[a].Ka,
              d.children[a].Ma
            );
          throw Error("getInsertPath() failed; (" + l + ") index=" + h);
        }
        return l;
      };
      c.prototype.qj = function(a) {
        var b = this.Fa[a.me];
        if (!b)
          throw Error("getInsertIndex: parent " + a.me + " does not exist");
        var c = mh(b.children.length, function(c) {
          return yg.Vc(b.children[c].Ma, a.Ma);
        });
        if (0 > c || c > b.children.length)
          throw Error(
            "Asked to insert at " +
              a.me +
              ":" +
              c +
              " but parent has " +
              b.children.length +
              " children."
          );
        return c;
      };
      c.prototype.createNode = function(a, b, c) {
        if (a in this.Fa) this.lw(a);
        else {
          var d = this.Fa[b.me],
            f = this.qj(b),
            h = {
              Ka: a,
              parent: d,
              children: [],
              Ma: b.Ma,
              index: f,
              Sd: !1,
              de: null,
              vr: 0,
            };
          this.Fa[a] = h;
          d.children.splice(f, 0, h);
          d.vr = f - 1;
          this.Ks(d.children, f);
          this.zd(a)
            ? this.Wa && this.Wa.createNode(a, b.me, this.hp(h), c)
            : (h.de = c);
        }
      };
      c.prototype.Ks = function(a, b) {
        if (0 < b && 0 <= yg.Vc(a[b - 1].Ma, a[b].Ma)) {
          bh("debug info: index is %s", b);
          for (var c = 0; c < a.length; c++)
            bh("Child %s nid=%s lpath %s", c, a[c].Ka, a[c].Ma);
          throw Error(
            "Error: LPaths out of order. " + a[b - 1].Ma + " >=  " + a[b].Ma
          );
        }
        if (b < a.length - 1 && 0 <= yg.Vc(a[b].Ma, a[b + 1].Ma)) {
          bh("debug info: index is %s", b);
          for (c = 0; c < a.length; c++)
            bh("Child %s nid=%s lpath %s", c, a[c].Ka, a[c].Ma);
          throw Error(
            "Error: LPaths out of order. " + a[b].Ma + " >=  " + a[b + 1].Ma
          );
        }
      };
      c.prototype.ue = function(a) {
        (a = this.Fa[a]) && a.parent && !a.Sd && ((a.Sd = !0), this.remove(a));
      };
      c.prototype.remove = function(a) {
        for (var b = a.children.length - 1; 0 <= b; b--) {
          var c = a.children[b];
          c.Sd || this.remove(c);
        }
        this.Wa ? ((a.de = this.Wa.rb(a.Ka)), this.Wa.ue(a.Ka)) : (a.de = {});
      };
      c.prototype.hp = function(a) {
        if (!a.parent) throw Error("Expected parent");
        for (var b = a.parent, c = 0, e = 0; e < b.children.length; e++) {
          if (b.children[e] === a) return c;
          b.children[e].Sd || c++;
        }
        throw Error("node " + a.Ka + " not in parent's child list");
      };
      c.prototype.lw = function(a) {
        (a = this.Fa[a]) && a.Sd && a.parent && ((a.Sd = !1), this.sv(a));
      };
      c.prototype.sv = function(a) {
        if (this.Wa && this.zd(a.Ka) && a.parent) {
          if (!a.de)
            throw Error("Properties of " + a.Ka + " should have been saved");
          this.Wa.createNode(a.Ka, a.parent.Ka, this.hp(a), a.de);
        }
        a.de = {};
        var b = 0;
        for (a = a.children; b < a.length; b++) {
          var c = a[b];
          c.Sd || this.sv(c);
        }
      };
      c.prototype.Da = function(a) {
        a in this.Fa ||
          (this.Fa[a] = {
            Ka: a,
            Sd: !0,
            children: [],
            index: 0,
            de: {},
            Ma: this.rf.first,
            vr: 0,
            parent: null,
          });
        return this.Fa[a];
      };
      c.prototype.ed = function(a, b) {
        var c = this.Fa[a];
        if (c && c.parent) {
          var e = this.Fa[b.me];
          if (e) {
            for (var f = 0; f < c.parent.children.length; f++)
              if (c.parent.children[f] === c) {
                c.parent.children.splice(f, 1);
                break;
              }
            f = this.qj(b);
            c.parent = e;
            c.Ma = b.Ma;
            e.children.splice(f, 0, c);
            this.Ks(e.children, f);
            this.Wa && this.zd(a) && this.Wa.ed(a, b.me, this.hp(c));
          }
        }
      };
      c.prototype.Xb = function(a, b) {
        var c = this.Da(a);
        this.Wa && this.zd(a) ? this.Wa.Xb(a, b) : c.de && nh(c.de, b);
      };
      c.prototype.rb = function(a) {
        var b = this.Fa[a];
        return b && b.Sd ? b.de : this.Wa ? this.Wa.rb(a) : {};
      };
      c.prototype.wa = function(a, b) {
        this.Wa && this.Wa.wa(a, b);
      };
      return c;
    })(),
    rh = (function() {
      function c(a, b) {
        this.Yb = b;
        this.Fd = 0;
        this.all = [];
        this.dm = {};
        this.ld = [];
        this.next = 0;
        this.re = !1;
        this.RA = "";
        this.Ai = [];
        this.local = [];
        this.Bk = "";
        this.Kp = 0;
        this.pq = !1;
        this.Wa = new oh(this.Yb, a);
      }
      c.prototype.Gu = function() {
        var a = new Date().getTime();
        a <= this.Kp && (a = this.Kp + 1);
        return (this.Kp = a);
      };
      c.prototype.Qc = function(a) {
        var b = 0;
        for (a = a.ops; b < a.length; b++) {
          var c = a[b];
          bh("Executing %s", c);
          c.Qc(this.Wa);
        }
      };
      c.prototype.locked = function() {
        return "" !== this.RA;
      };
      c.prototype.createNode = function(a, b, c, e) {
        this.re || this.Yk(new hh(a, this.Wa.ip(b, a, c), e));
        return a;
      };
      c.prototype.ue = function(a) {
        this.re || this.Yk(new gh(a));
      };
      c.prototype.ed = function(a, b, c) {
        this.re || this.Yk(new lh(a, this.Wa.ip(b, a, c)));
      };
      c.prototype.Xb = function(a, b) {
        var c = !1,
          e;
        for (e in b) {
          c = !0;
          break;
        }
        c && !this.re && this.Yk(new kh(a, b));
      };
      c.prototype.rb = function(a) {
        return this.Wa.rb(a);
      };
      c.prototype.Yk = function(a) {
        this.Ai.push(a);
        this.locked() || (bh("Executing %s", a), a.Qc(this.Wa));
      };
      c.prototype.wa = function(a, b) {
        if (!this.pq) {
          if (!this.re && this.Ai.length) {
            a = new ch(this.Fd, this.Yb, this.Gu());
            a = new dh(a);
            for (var c = 0, e = this.Ai; c < e.length; c++) a.ops.push(e[c]);
            b || ((this.ld.length = this.next++), this.ld.push(a));
            this.local.push(a);
            this.all.push(a);
            this.dm[a.Kg()] = !0;
            this.Fd++;
            this.Ai.length = 0;
            this.Bk && (this.tg(this.Bk), (this.Bk = ""));
          } else this.re && ((this.pq = !0), this.Wa.wa(a, b), (this.pq = !1));
          this.Ai.length = 0;
        }
      };
      c.prototype.encode = function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
          var e = a[c];
          b += "B" + e.Nb.encode() + ";";
          var f = 0;
          for (e = e.ops; f < e.length; f++) b += e[f].encode();
        }
        return b;
      };
      c.prototype.tg = function(a) {
        if (this.locked() || this.Ai.length)
          (this.Bk += a),
            bh(
              "Ignore remote changes while " +
                (this.locked() ? "locked" : "uncommitted")
            );
        else {
          var b = 0;
          a = ph(a);
          for (var c = 0; c < a.length; c++)
            (b = Math.max(b, a[c].Nb.Fd)),
              this.dm[a[c].Kg()] && (a.splice(c, 1), c--);
          if (0 !== a.length) {
            this.Fd = Math.max(this.Fd, b) + 1;
            b = a[0];
            for (c = 1; c < a.length; c++) a[c].before(b) && (b = a[c]);
            for (
              var e = this.all.length - 1;
              0 <= e && !this.all[e].before(b);
              e--
            );
            e++;
            this.re = !0;
            for (c = 0; c < a.length; c++) {
              var f = a[c];
              this.all.push(f);
              this.dm[f.Kg()] = !0;
            }
            this.all.sort(dh.Vc);
            if (this.all[e] !== b) {
              for (c = 0; c < this.all.length; c++)
                c === e && bh("MergePoint"), bh(this.all[c].toString());
              bh("New lists:");
              for (b = 0; b < a.length; b++) bh(a[b].toString());
              throw Error("Assumption violated");
            }
            bh("%s Executing new changes from %s", this.Yb, e);
            for (c = e; c < this.all.length; c++) this.Qc(this.all[c]);
            this.wa(!0, !1);
            this.re = !1;
            bh("%s addRemoteChanges done", this.Yb);
          }
        }
      };
      c.prototype.iC = function() {
        this.local = this.all.concat();
      };
      c.prototype.uz = function() {
        return this.local.length
          ? new qh(
              this.encode(this.local),
              this.local[this.local.length - 1].Kg()
            )
          : new qh("", "0");
      };
      c.prototype.Mj = function(a) {
        for (var b = this.local.length - 1; 0 <= b; b--)
          if (a === this.local[b].Kg()) {
            this.local.splice(0, b + 1);
            break;
          }
      };
      c.prototype.Ze = function() {
        return 0 < this.next && !this.locked();
      };
      c.prototype.Ye = function() {
        return this.next < this.ld.length && !this.locked();
      };
      c.prototype.Uc = function() {
        this.Ze() && this.pv(this.ld[--this.next], !0);
      };
      c.prototype.ne = function() {
        this.Ye() && this.pv(this.ld[this.next++], !1);
      };
      c.prototype.oo = function() {
        this.next = this.ld.length = 0;
      };
      c.prototype.pv = function(a, b) {
        this.re = !0;
        var c = new ch(this.Fd, this.Yb, this.Gu());
        a = b ? a.inverse(c) : a.clone(c);
        b = 0;
        for (c = a.ops; b < c.length; b++) {
          var e = c[b];
          ("m" !== e.type && "c" !== e.type) || e.gk(this.Wa);
        }
        this.local.push(a);
        this.all.push(a);
        this.dm[a.Kg()] = !0;
        this.Fd++;
        this.Qc(a);
        this.wa(!1, !0);
        this.re = !1;
      };
      c.prototype.pp = function() {
        for (var a = [], b = 0, c = this.all; b < c.length; b++) {
          var e = c[b];
          a.push({ Nx: e.Kg(), Nb: e.Nb.Ak });
        }
        return a;
      };
      c.prototype.Zk = function(a) {
        this.Wa.Zk(a);
      };
      return c;
    })(),
    qh = (function() {
      function c(a, b) {
        this.mo = a;
        this.MA = b;
      }
      c.prototype.getData = function() {
        return this.mo;
      };
      c.prototype.empty = function() {
        return 0 === this.mo.length;
      };
      c.prototype.toString = function() {
        return this.mo;
      };
      return c;
    })();
  function ph(c) {
    for (var a = [], b = 0, d = /B([^;]+);/g; b < c.length; ) {
      var e;
      switch (c[b]) {
        case "B":
          d.lastIndex = b;
          if ((e = d.exec(c)) && e.index === b)
            (b = ch.Rb(e[1])), (b = new dh(b)), a.push(b), (b = d.lastIndex);
          else throw Error("Could not decode Batch from " + c.substr(b, 256));
          continue;
        case "C":
          e = hh.Rb(c, b);
          break;
        case "D":
          e = gh.Rb(c, b);
          break;
        case "U":
          e = fh.Rb(c, b);
          break;
        case "S":
          e = kh.Rb(c, b);
          break;
        case "M":
          e = lh.Rb(c, b);
          break;
        case "\r":
        case "\t":
        case "\n":
        case " ":
          b += 1;
          continue;
        default:
          throw Error("Could not decode Operation from " + c.substr(b, 256));
      }
      if (0 === a.length) throw Error("Got change outside of batch");
      if (null === e)
        throw Error("change is null while decoding: " + c.substr(b, 500));
      b = e.position;
      a[a.length - 1].ops.push(e.Pf);
    }
    return a;
  }
  var sh = A.create("DOCTREE"),
    th = (function() {
      function c(a, b) {
        this.sf = a;
        this.Fa = {};
        this.Fa["0"] = b;
      }
      c.prototype.lx = function(a, b) {
        if (a in this.Fa) throw Error("Node " + a + " already exists");
        this.Fa[a] = b;
      };
      c.prototype.createNode = function(a, b, c, e) {
        sh("createNode(" + a + ", " + b + ", " + c + ")");
        if (a in this.Fa) throw Error("createNode " + a + " already exists");
        b = this.Da(b);
        if (b.children.length + 1 < c)
          throw Error(
            "Asked to insert at index " +
              c +
              " but parent only has " +
              b.children.length +
              " children"
          );
        e = this.sf.xu(a, e);
        b.Bp(e, c);
        e.parent = b;
        this.Fa[a] = e;
        this.sf.Pu && this.sf.Pu(e);
      };
      c.prototype.Da = function(a) {
        if (a in this.Fa) return this.Fa[a];
        throw Error("nid " + a + " does not exist");
      };
      c.prototype.zd = function(a) {
        return a in this.Fa;
      };
      c.prototype.ue = function(a) {
        sh("deleteNode(" + a + ")");
        var b = this.Da(a),
          c = b.parent;
        if (!c) throw Error("Parent of " + a + " is null?!");
        var e = c.fe(b);
        if (0 > e)
          throw Error(
            "Asked to delete " + a + " but it is not in parent's children"
          );
        if (0 !== b.children.length)
          throw Error("Asked to delete " + a + " but it still has children.");
        for (a = b.children.length - 1; 0 <= a; a--) {
          var f = b.nb(a);
          this.ue(f.id);
        }
        this.sf.Qu && this.sf.Qu(b);
        c.removeChild(e);
        delete this.Fa[b.id];
      };
      c.prototype.ed = function(a, b, c) {
        sh("moveNode(" + a + ", dest=" + b + ":" + c + ")");
        var d = this.Da(a),
          f = this.Da(b),
          h = d.parent;
        if (null === h) throw Error("node " + a + " does not have any parent");
        a = h.fe(d);
        if (f.children.length < (d.parent === f ? c + 1 : c))
          throw Error(
            "asked to shift node at " +
              b +
              ":" +
              c +
              " but it only has " +
              f.children.length +
              " children"
          );
        h.removeChild(a);
        f.Bp(d, c);
        d.parent = f;
      };
      c.prototype.Xb = function(a, b) {
        if (a in this.Fa) {
          a = this.Da(a);
          for (var c in b) a.setProperty(c, b[c]);
          this.sf.Wu && this.sf.Wu(a, b);
        }
      };
      c.prototype.rb = function(a) {
        return a in this.Fa ? this.Da(a).rb() : {};
      };
      c.prototype.wa = function(a) {
        this.sf.Bm && this.sf.Bm(a);
      };
      c.prototype.Nc = function(a) {
        for (var b in this.Fa) a(this.Fa[b]);
      };
      return c;
    })();
  var uh = A.create("BRUSH"),
    vh = (function(c) {
      function a(a, d) {
        a = c.call(this, a, d) || this;
        a.oa = [];
        a.Ob = [];
        uh("New BrushNode created.");
        a.ba.points = [];
        a.ba.strokeStyle = "#ff00ff";
        a.ba.lineWidth = 10;
        return a;
      }
      __extends(a, c);
      a.prototype.type = function() {
        return "BrushNode";
      };
      a.prototype.rb = function() {
        var a = c.prototype.rb.call(this);
        a.dashes = a.dashes || "";
        return a;
      };
      a.prototype.setProperty = function(a, d) {
        "fillStyle" === a && (a = "strokeStyle");
        "dashes" === a || "lineCap" === a
          ? (this.ba[a] = d)
          : c.prototype.setProperty.call(this, a, d);
      };
      a.prototype.ia = function(a) {
        "fillStyle" === a && (a = "strokeStyle");
        return c.prototype.ia.call(this, a);
      };
      a.prototype.format = function() {
        var a, c;
        this.oa.length = 0;
        var e = this.ba.points;
        var f = (a = 0);
        for (c = e.length - 1; a <= c; f = a += 2)
          this.oa.push(new F(e[f], e[f + 1]));
        f = G.uh(this.oa);
        e = this.Na().Gb();
        a = this.ba.lineWidth;
        f.Ed(a / e.x, a / e.y);
        this.ya = f.clone();
        f = new Ac(f);
        f.transform(this.ba.matrix);
        this.rect = G.uh(f.oa);
        this.Ob = Bc(this.ba.dashes || "");
      };
      a.prototype.Hb = function(a, c, e, f) {
        return this.rect.Lc(a, c, e) &&
          ((a = this.cc().apply(a, c)),
          (c = this.cc().Gb()),
          wc(
            this.oa,
            a.x,
            a.y,
            0.5 * (c.x + c.y) * Math.max(12 / f, e, this.ba.lineWidth / 2)
          ))
          ? this
          : null;
      };
      a.prototype.Mf = function(a) {
        var b, c;
        var f = this.ba.points;
        if (0 !== f.length) {
          a.save();
          a.beginPath();
          var h = this.ia("lineCap") || "round";
          a.lineCap = h;
          a.lineJoin = "round" === h ? "round" : "bevel";
          if (1 < this.Ob.length) Cc(a, this.oa, this.Ob);
          else
            for (
              a.moveTo(f[0], f[1]), h = b = 2, c = f.length - 1;
              b <= c;
              h = b += 2
            )
              a.lineTo(f[h], f[h + 1]);
          this.cc().Ec(a);
          hc(a, this.ba.strokeStyle);
          a.restore();
        }
      };
      a.rE = !1;
      return a;
    })(cd);
  cd.td("BrushNode", vh);
  function wh(c) {
    return {
      m11: c.m11,
      m12: c.m21,
      m21: c.m12,
      m22: c.m22,
      dx: c.Aa,
      dy: c.Ba,
    };
  }
  var U = (function() {
      function c(a, b) {
        this.node = a;
        this.request = b;
      }
      c.prototype.kz = function(a, b, c) {
        D.ga("formatFill", arguments, xh, D.String, D.String);
        this.node.xt(b, a, this.request, c);
      };
      c.prototype.Iz = function(a) {
        D.ga("getFill", arguments, D.String);
        return this.node.ap(a);
      };
      c.prototype.fg = function() {
        this.request.gg(this.node.id);
      };
      c.prototype.Np = function(a, b) {
        D.ga("loadImage", arguments, D.String, D.Function);
        this.request.add(this.node.id, "image", a, null, b);
      };
      c.prototype.az = function(a) {
        D.ga("fillEraser", arguments, xh);
        a.save();
        this.node.cc().Ec(a);
        this.node.it(a, !0);
        a.restore();
      };
      c.prototype.pD = function(a) {
        D.ga("strokeEraser", arguments, xh);
        a.save();
        this.node.cc().Ec(a);
        this.node.it(a, !1);
        a.restore();
      };
      c.prototype.Gl = function(a, b) {
        return O.Gl(a, b);
      };
      c.prototype.Gb = function() {
        return 1;
      };
      c.prototype.IB = function(a) {
        D.ga("parseFont", arguments, D.String);
        return new Qd(a);
      };
      c.prototype.yc = function(a) {
        D.ga("getConfig", arguments, D.String);
        return this.request.yc(a);
      };
      c.prototype.AD = function(a, b) {
        D.ga("transformPoint", arguments, D.Number, D.Number);
        var c = this.node.Na().apply(a, b);
        return { x: c.x, y: c.y };
      };
      c.prototype.BD = function(a, b, c, e) {
        D.ga(
          "transformRectangle",
          arguments,
          D.Number,
          D.Number,
          D.Number,
          D.Number
        );
        var d = new G(a, b, c, e);
        d.transform(this.node.Na());
        return { x: d.x, y: d.y, width: d.width, height: d.height };
      };
      c.prototype.GD = function(a, b) {
        D.ga("untransformPoint", arguments, D.Number, D.Number);
        var c = this.node.cc().apply(a, b);
        return { x: c.x, y: c.y };
      };
      c.prototype.Ec = function(a) {
        this.node.Na().Ec(a);
      };
      c.prototype.FD = function(a) {
        D.ga("untransformCanvas", arguments, xh);
        this.node.cc().Ec(a);
      };
      c.prototype.Sl = function() {
        return this.node.Sh({});
      };
      c.prototype.ia = function(a) {
        D.ga("getProperty", arguments, D.String);
        return this.node.ia(a, !0);
      };
      return c;
    })(),
    yh = (function(c) {
      function a(a, d) {
        a = c.call(this, a, d) || this;
        a.cb = null;
        a.children = [];
        a.log = A.create("CUSTOM");
        a.setProperty("matrix", new J());
        return a;
      }
      __extends(a, c);
      a.prototype.type = function() {
        return "CustomNode";
      };
      a.prototype.Pm = function() {
        return this.ba.nodeType || this.type();
      };
      a.prototype.jc = function() {
        return !0;
      };
      a.prototype.setProperty = function(a, d) {
        if (null === this.cb && "nodeType" === a) {
          a = O.pl[d];
          this.cb = new a(this.id);
          for (var b in this.ba) this.setProperty(b, this.ba[b]);
          this.ba.nodeType = d;
        } else
          (d = c.prototype.setProperty.call(this, a, d)),
            "matrix" === a && (d = wh(d)),
            this.cb && this.cb.setProperty && this.cb.setProperty(a, d);
      };
      a.prototype.mf = function() {
        return this.cb && this.cb.hasEditMode ? this.cb.hasEditMode() : !1;
      };
      a.prototype.Zo = function() {
        var a = [];
        this.cb && this.cb.getEditHandles && (a = this.cb.getEditHandles());
        for (var c = this.Na(), e = [], f = 0; f < a.length; f++) {
          var h = a[f];
          e.push(c.apply(h.x || 0, h.y || 0));
        }
        return e;
      };
      a.prototype.Hb = function(a, c, e, f) {
        a = this.cc().apply(a, c);
        c = this.cc().Gb();
        c = 0.5 * (c.x + c.y);
        var b = this.ya;
        if (b.width < 5 * f || b.height < 5 * f) (b = b.clone()), b.Ed(10);
        return this.hidden() ||
          this.ia("locked") ||
          !b.Lc(a.x, a.y, e * c) ||
          (this.cb && this.cb.hittest && !this.cb.hittest(a.x, a.y, e, f))
          ? null
          : this;
      };
      a.prototype.hj = function(a, c) {
        a.beginPath();
        var b = 10 * c;
        c *= 2;
        for (var d = 0, h = this.Zo(); d < h.length; d++) {
          var k = h[d];
          a.moveTo(k.x + b, k.y);
          a.arc(k.x, k.y, b, 0, 2 * Math.PI, !1);
        }
        a.strokeStyle = "#0050B7";
        a.lineWidth = c;
        a.stroke();
      };
      a.prototype.Ml = function(a) {
        "number" === typeof a && this.Zo();
      };
      a.prototype.Xh = function(a, c, e) {
        for (var b = this.Zo(), d = 0; d < b.length; d++)
          if (20 > b[d].bc(new F(a, c)) / e) return d;
        return null;
      };
      a.prototype.Je = function(a, c, e) {
        var b = {};
        this.cb &&
          this.cb.moveEditHandle &&
          ((c = this.cc().apply(c, e)),
          (b = this.cb.moveEditHandle(a, c.x, c.y)),
          b ||
            (console.warn("moveEditHandle(): Must update your code."),
            (b = {})));
        return b;
      };
      a.prototype.ia = function(a, d) {
        void 0 === d && (d = !1);
        var b;
        !d && this.cb && this.cb.getProperty && (b = this.cb.getProperty(a));
        void 0 === b && (b = c.prototype.ia.call(this, a));
        "matrix" === a &&
          (b = b
            ? b instanceof J
              ? b
              : new J(
                  b.m11 || 1,
                  b.m21 || 0,
                  b.m12 || 0,
                  b.m22 || 1,
                  b.dx || 0,
                  b.dy || 0
                )
            : new J());
        return b;
      };
      a.prototype.hg = function(a) {
        c.prototype.hg.call(this, a);
        this.cb.setHidden && this.cb.setHidden(a);
      };
      a.prototype.format = function(a, c) {
        this.cb &&
          (this.mc || (this.mc = new U(this, c)),
          "format" in this.cb && this.cb.format(a, this.mc),
          this.cb.getUntransformedRect
            ? ((a = this.cb.getUntransformedRect()),
              (this.ya = new G(
                a.x || 0,
                a.y || 0,
                a.width || 0,
                a.height || 0
              )),
              (this.rect = this.ya.clone()),
              this.rect.transform(this.Na()))
            : this.log(
                "Error: NodeType %s missing getUntransformedRect()",
                this.ba.nodeType
              ));
      };
      a.prototype.Mf = function(a) {
        this.hidden() ||
          (a.save(),
          (a.getTransform = function() {
            return a.Fi ? wh(a.Fi) : wh(new J());
          }),
          (this.mc.getScale = function() {
            return a.Fi ? a.Fi.Gb().x : 1;
          }),
          this.cb.draw(a, this.mc),
          a.restore());
      };
      a.prototype.Pq = function() {
        var a = !1;
        this.cb.shouldEditOnSelect && (a = this.cb.shouldEditOnSelect);
        return a;
      };
      return a;
    })(cd);
  cd.td("CustomNode", yh);
  U.prototype.formatFill = U.prototype.kz;
  U.prototype.getFill = U.prototype.Iz;
  U.prototype.reformat = U.prototype.fg;
  U.prototype.loadImage = U.prototype.Np;
  U.prototype.fillEraser = U.prototype.az;
  U.prototype.strokeEraser = U.prototype.pD;
  U.prototype.formatText = U.prototype.Gl;
  U.prototype.getScale = U.prototype.Gb;
  U.prototype.parseFont = U.prototype.IB;
  U.prototype.getConfig = U.prototype.yc;
  U.prototype.transformPoint = U.prototype.AD;
  U.prototype.transformRectangle = U.prototype.BD;
  U.prototype.untransformPoint = U.prototype.GD;
  U.prototype.transformCanvas = U.prototype.Ec;
  U.prototype.untransformCanvas = U.prototype.FD;
  U.prototype.getNodeObject = U.prototype.Sl;
  U.prototype.getProperty = U.prototype.ia;
  var zh = (function(c) {
    function a(a, d) {
      a = c.call(this, a, d) || this;
      a.da = null;
      a.rl = void 0;
      a.fc = new Ac();
      a.zp = new Ac();
      a.Uf = new J();
      a.readOnly = !1;
      a.Mb = !1;
      a.ze = null;
      a.width = 0;
      a.height = 0;
      a.Id = null;
      a.kv = "";
      a.log = A.create("DomNode", !0);
      a.Ei = -1;
      a.canvas = null;
      a.ba.data = "";
      a.ba.locked = !1;
      a.lb |= 4;
      return a;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "DomNode";
    };
    a.prototype.Up = function() {
      return null;
    };
    a.prototype.setProperty = function(a, d) {
      if ("data" === a)
        this.da && (u(this.da).remove(), (this.rl = this.da = null));
      else if (
        "border" === a ||
        "lockSize" === a ||
        "lockRotate" === a ||
        "preview" === a
      ) {
        this.ba[a] = d;
        return;
      }
      c.prototype.setProperty.call(this, a, d);
    };
    a.prototype.KC = function(a) {
      null !== this.ze &&
        (this.log(
          "Node %s receives DOM element and requests reformat",
          this.id
        ),
        this.da &&
          (this.log("   Remove existing DOM element"), u(this.da).remove()),
        (this.da = a),
        (this.da.style.position = "absolute"),
        u(this.da).Ap(this.ze.canvas),
        (this.width =
          this.da.offsetWidth ||
          parseFloat(this.da.getAttribute("width") || "0")),
        (this.height =
          this.da.offsetHeight ||
          parseFloat(this.da.getAttribute("height") || "0")),
        u(this.da).remove(),
        this.wi(this.readOnly, !0),
        (this.da.style.top = "0px"),
        (this.da.style.left = "0px"),
        (this.da.style.boxSizing = "border-box"),
        this.da.classList.add("zwibbler-dom-node"),
        this.da.setAttribute("zwibbler-node-id", "" + this.id),
        this.Tn("transformOrigin", "top left"),
        this.log(
          "element height: %s, %s",
          this.da.offsetWidth,
          this.da.offsetHeight
        ),
        this.ze.gg(this.id));
    };
    a.prototype.nc = function() {
      return this.da;
    };
    a.prototype.Tn = function(a, c) {
      if (null !== this.da) {
        for (
          var b = a.charAt(0).toUpperCase() + a.substr(1),
            d = ["ms", "Webkit", "O", "Moz"],
            h = 0;
          h < d.length;
          h++
        )
          this.da.style[d[h] + b] = c;
        this.da.style[a] = c;
      }
    };
    a.prototype.hg = function(a) {
      cd.prototype.hg.call(this, a);
      this.da && (this.da.style.visibility = this.Pk ? "hidden" : "visible");
    };
    a.prototype.wi = function(a, c) {
      void 0 === c && (c = !1);
      if (c || this.readOnly !== a)
        (this.readOnly = a),
          this.da &&
            this.ze &&
            this.Mb &&
            (this.jq(this.Ei), u(this.da).Ap(this.ze.canvas));
    };
    a.prototype.format = function(a, c) {
      var b = this;
      this.canvas = c.canvas;
      null === this.da &&
        this.rl !== this.ia("data") &&
        c &&
        ((this.rl = this.ia("data")),
        (this.ze = c),
        this.log("DomNode %s requests conversion to DOM element", this.id),
        this.ze.fy(this.rl, this.id));
      if (this.da) {
        this.da.tE = this.id;
        a = this.Na();
        var d = a.Gb();
        this.da.style.width = this.width * d.x + "px";
        this.da.style.height = this.height * d.y + "px";
        a = a.multiply(new rc(1 / d.x, 1 / d.y));
        d = this.Uf;
        d = d.multiply(a);
        d.Gp()
          ? (this.Tn("transform", ""),
            (this.da.style.left = "" + d.Aa + "px"),
            (this.da.style.top = "" + d.Ba + "px"))
          : ((this.da.style.left = "0px"),
            (this.da.style.top = "0px"),
            this.Tn(
              "transform",
              "matrix(" +
                d.m11 +
                "," +
                d.m21 +
                "," +
                d.m12 +
                "," +
                d.m22 +
                "," +
                d.Aa +
                "," +
                d.Ba +
                ")"
            ));
        this.rect.x = 0;
        this.rect.y = 0;
        this.rect.width = this.width;
        this.rect.height = this.height;
        this.da.style.visibility = this.Pk ? "hidden" : "visible";
      } else
        (this.rect.x = 0),
          (this.rect.y = 0),
          (this.rect.width = 100),
          (this.rect.height = 22);
      this.fc = new Ac(this.rect);
      this.ya = this.rect.clone();
      this.rect.transform(this.Na());
      this.fc.transform(this.Na());
      if ((a = this.ba.border))
        this.rect.Ed(a),
          (this.zp = this.fc.clone()),
          this.zp.Ed(a / 2),
          this.fc.Ed(a);
      !this.ba.preview || (null !== this.Id && this.kv === this.ba.preview)
        ? this.ba.preview || (this.Id = null)
        : (this.log("Requesting new preview image for %s", this.ba.preview),
          (this.Id = document.createElement("img")),
          (this.kv = this.Id.src = this.ba.preview),
          (this.Id.onload = function() {
            b.log("Preview image loaded.");
            c.gg(b.id);
          }),
          (this.Id.onerror = function() {
            b.log("Failed to load preview image");
          }));
    };
    a.prototype.Mf = function(a) {
      var b = a.Fi;
      b &&
        this.ze &&
        (b.m11 !== this.Uf.m11 ||
          b.m21 !== this.Uf.m21 ||
          b.m12 !== this.Uf.m12 ||
          b.m22 !== this.Uf.m22 ||
          b.Aa !== this.Uf.Aa ||
          b.Ba !== this.Uf.Ba) &&
        (this.log("Moving DOM element as result of draw zooming"),
        (this.Uf = b),
        this.format(a, this.ze));
      if (this.da) {
        var c = this.ba.border;
        if (c) {
          var f = this.zp;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.beginPath();
          a.lineWidth = c;
          a.strokeStyle = "#cccccc";
          a.moveTo(f.oa[0].x, f.oa[0].y);
          a.lineTo(f.oa[1].x, f.oa[1].y);
          a.lineTo(f.oa[2].x, f.oa[2].y);
          a.lineTo(f.oa[3].x, f.oa[3].y);
          a.lineTo(f.oa[0].x, f.oa[0].y);
          a.closePath();
          a.stroke();
        }
      } else
        a.beginPath(),
          (a.lineWidth = 1),
          (a.fillStyle = "#888888"),
          (a.strokeStyle = "#CCCCCC"),
          a.rect(0, 0, 100, 22),
          a.stroke(),
          (a.font = "20px Arial"),
          (a.textBaseline = "top"),
          a.fillText("DomNode", 0, 0);
      if (this.Id && this.Id.naturalHeight && !b && this.Mb) {
        this.log(
          "Drawing preview image %s,%s ->%s,s",
          this.Id.naturalWidth,
          this.Id.naturalHeight,
          this.width,
          this.height
        );
        try {
          a.drawImage(
            this.Id,
            0,
            0,
            this.Id.naturalWidth,
            this.Id.naturalHeight,
            0,
            0,
            this.width,
            this.height
          );
        } catch (h) {
          h instanceof Error &&
            this.log("Tried to draw image, got error: %s", h.toString());
        }
      } else
        b &&
          ((b = a.globalCompositeOperation),
          (a.globalCompositeOperation = "destination-out"),
          a.fillRect(this.ya.x, this.ya.y, this.ya.width, this.ya.height),
          (a.globalCompositeOperation = b));
    };
    a.prototype.clip = function(a) {
      this.fc.la(a);
    };
    a.prototype.Hb = function(a, c, e, f) {
      return !this.ba.locked &&
        this.rect.Lc(a, c, e) &&
        this.fc.Lc(a, c, Math.max(3 / f, e))
        ? this
        : null;
    };
    a.prototype.Am = function() {
      this.da &&
        this.ze &&
        (this.log("Added DOM NODE %s", this.id), this.jq(this.Ei));
      this.Mb = !0;
    };
    a.prototype.Cm = function() {
      this.log("Removed DOM NODE %s", this.id);
      this.da && u(this.da).remove();
      this.Mb = !1;
    };
    a.prototype.jq = function(a) {
      if (this.da && this.canvas && !(0 > a)) {
        a !== this.Ei
          ? (this.da.classList.remove("zwibbler-zorder-" + this.Ei),
            this.da.classList.add("zwibbler-zorder-" + a),
            (this.Ei = a),
            this.log("Add class zwibbler-zorder-%s", a))
          : this.log("order=zorder=%s", this.Ei);
        var b = null;
        for (--a; 0 <= a; a--) {
          var c = this.canvas.parentElement.querySelector(
            ".zwibbler-zorder-" + a
          );
          if (c) {
            b = c;
            this.log("Found element zorder-%s", a);
            break;
          }
          this.log("Did not find element zorder-%s", a);
        }
        if (this.da.previousSibling !== b || null === b)
          b
            ? (this.log("Insert after previous."), u(this.da).Ap(b))
            : (this.log("Insert before canvas %s", this.canvas),
              u(this.da).insertBefore(this.canvas));
      }
    };
    a.prototype.Sa = function() {
      this.da && (this.log("DomNode %s destroyed", this.id), P.detach(this.da));
    };
    a.prototype.Mv = function(a) {
      this.jq(a);
    };
    a.prototype.sj = function() {
      if (!this.da) return this.rect;
      var a = u(this.da).Rl();
      return new G(
        this.rect.x - a.left,
        this.rect.y - a.top,
        this.rect.width + a.left + a.right,
        this.rect.height + a.top + a.bottom
      );
    };
    a.prototype.nk = function(a) {
      this.rect = a;
      this.ya = a.clone();
    };
    a.prototype.Zm = function() {};
    a.prototype.qk = function() {
      throw Error("DomNode: showChild not implemented!");
    };
    return a;
  })(cd);
  cd.td("DomNode", zh);
  var Ah = (function(c) {
    function a(a, d) {
      a = c.call(this, a, d) || this;
      a.md = null;
      a.Wf = null;
      a.scale = 1;
      a.fc = new Ac();
      a.Eg = [];
      a.ec = new G(0, 0, 100, 20);
      a.Yc = new G(0, 0, 100, 20);
      a.log = A.create("IMAGE", !0);
      a.xv = "";
      delete a.ba.fillStyle;
      delete a.ba.strokeStyle;
      delete a.ba.lineWidth;
      a.ba.url = "";
      return a;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "ImageNode";
    };
    a.prototype.toString = function() {
      return (
        c.prototype.toString.call(this) + " url=" + this.ia("url").substr(0, 64)
      );
    };
    a.prototype.setProperty = function(a, d) {
      switch (a) {
        case "url":
          d !== this.ba.url && (this.Wf = this.md = null);
          break;
        case "brightness":
        case "contrast":
        case "gamma":
          this.Wf = null;
          break;
        case "colour":
          this.Wf = null;
      }
      c.prototype.setProperty.call(this, a, d);
    };
    a.prototype.jc = function(a) {
      switch (a) {
        case "url":
        case "brightness":
        case "gamma":
        case "colour":
        case "allowCrop":
        case "crop":
        case "blendMode":
        case "opacity":
        case "width":
        case "height":
          return !0;
      }
      return c.prototype.jc.call(this, a);
    };
    a.prototype.EC = function(a) {
      a.x = Math.max(a.x, 0);
      a.y = Math.max(a.y, 0);
      a.width = Math.min(a.width, this.ec.width);
      a.height = Math.min(a.height, this.ec.height);
      a.width = Math.max(1, a.width);
      a.height = Math.max(1, a.height);
      return { crop: [a.x, a.y, a.width, a.height].join() };
    };
    a.prototype.Et = function(a) {
      var b = this.ba.crop;
      a = new G(0, 0, this.ec.width * a, this.ec.height * a);
      b &&
        ((b = b.split(",")),
        (a.x = parseFloat(b[0]) | 0),
        (a.y = parseFloat(b[1]) | 0),
        (a.width = parseFloat(b[2]) | 0),
        (a.height = parseFloat(b[3]) | 0));
      return a;
    };
    a.prototype.rC = function() {
      var a = {
        brightness: this.ia("brightness"),
        contrast: this.ia("contrast"),
        gamma: this.ia("gamma"),
        Kc: this.ia("colour"),
      };
      this.Wf =
        void 0 !== a.brightness &&
        void 0 !== a.contrast &&
        void 0 !== a.gamma &&
        this.md
          ? this.ot(this.md, a) || this.md
          : void 0 !== a.Kc && this.md
          ? this.ot(this.md, {
              brightness: 1,
              contrast: 0,
              gamma: 0,
              Kc: a.Kc,
            }) || this.md
          : this.md;
    };
    a.prototype.format = function(a, c) {
      function b(a, b, c) {
        l.Eg.push({
          x: l.Yc.x + a * l.Yc.width,
          y: l.Yc.y + b * l.Yc.height,
          Cd: c,
        });
      }
      var d = this;
      if (null === this.md && "ImageSurface" in window)
        this.md = new window.ImageSurface(this.ba.url);
      else if (null === this.md) {
        this.ec = new G(0, 0, 100, 20);
        this.xv !== this.ba.url &&
          ((this.xv = this.ba.url),
          c.add(this.id, "image", this.ba.url, null, function(a) {
            d.log("%s Got image response. Request reformat", d.id);
            d.md = a;
            return c.gg(d.id);
          }));
        return;
      }
      this.ec = new G(0, 0, this.md.width, this.md.height);
      null === this.Wf && this.rC();
      this.scale = new kc(this.ec.width, this.ec.height).rt(
        this.ia("width"),
        this.ia("height")
      );
      this.Yc = this.Et(this.scale);
      this.rect = this.Yc.clone();
      if ((a = this.ia("boundingPolygon"))) {
        for (var h = [], k = 0; k < a.length; k += 2)
          h.push(new F(a[k], a[k + 1]));
        this.fc = new Ac(h);
      } else this.fc = new Ac(this.rect);
      this.ya = this.rect.clone();
      this.fc.transform(this.ba.matrix);
      this.rect.transform(this.ba.matrix);
      this.Eg.length = 0;
      var l = this;
      b(0.5, 0, !0);
      b(1, 0.5, !1);
      b(0.5, 1, !0);
      b(0, 0.5, !1);
    };
    a.prototype.Jl = function() {
      return this.fc;
    };
    a.prototype.Hb = function(a, c, e, f) {
      return !this.ba.locked && this.fc.Lc(a, c, Math.max(3 / f, e))
        ? this
        : null;
    };
    a.prototype.Mf = function(b) {
      var c,
        e,
        f = !1;
      if (this.Wf)
        try {
          var h = b.globalCompositeOperation,
            k = b.globalAlpha,
            l = this.ia("blendMode"),
            n = this.ia("opacity");
          l &&
            ((b.globalCompositeOperation = "" + l),
            this.log(
              "Using globalCompsiteOperation=%s (requested %s)",
              b.globalCompositeOperation,
              l
            ));
          void 0 !== n && (b.globalAlpha = n);
          var r = this.ia("lineWidth") || 0;
          if (r) {
            b.save();
            this.cc().Ec(b);
            var v = this.fc.clone();
            v.Ed(r / 2);
            b.beginPath();
            v.la(b);
            b.lineWidth = r;
            b.strokeStyle = this.ia("strokeStyle") || q.Oa;
            b.stroke();
            b.restore();
          }
          var w = this.scale,
            x = this.Wf,
            y = Nd(
              x,
              this.Yc.x / w,
              this.Yc.y / w,
              this.Yc.width / w,
              this.Yc.height / w,
              this.Yc.x,
              this.Yc.y,
              this.Yc.width,
              this.Yc.height
            );
          l = 1;
          if ("getTransform" in b) {
            var B = b.getTransform();
            l =
              (Math.sqrt(B.m11 * B.m11 + B.m12 * B.m12) +
                Math.sqrt(B.m21 * B.m21 + B.m22 * B.m22)) /
              2;
          }
          for (;;) {
            var H = y.lh,
              M = y.kh,
              I = (y.$i / H) * l;
            if (0.4 < I || 1 >= y.lh || 1 >= y.kh) break;
            0.5 > I && (I = 0.5);
            var z = Math.ceil(H * I),
              E = Math.ceil(M * I),
              R = document.createElement("canvas");
            R.width = z;
            R.height = E;
            R.getContext("2d").drawImage(x, y.vk, y.wk, y.lh, y.kh, 0, 0, z, E);
            y.vk = 0;
            y.wk = 0;
            y.lh = z;
            y.kh = E;
            x = R;
          }
          b.drawImage(x, y.vk, y.wk, y.lh, y.kh, y.Aa, y.Ba, y.$i, y.ql);
          b.globalAlpha = k;
          b.globalCompositeOperation = h;
          if (a.Hr) {
            var na = this.fc.oa;
            b.save();
            b.setTransform(1, 0, 0, 1, 0, 0);
            b.beginPath();
            b.lineWidth = 2;
            b.strokeStyle = q.Oa;
            b.moveTo(na[0].x, na[0].y);
            var la = (c = 1);
            for (e = na.length - 1; c <= e; la = c += 1)
              b.lineTo(na[la].x, na[la].y);
            b.closePath();
            b.stroke();
            b.restore();
          }
        } catch (Ea) {
          Ea instanceof Error &&
            this.log("Error drawing image: %s", Ea.message),
            (f = !0);
        }
      if (null === this.Wf || f)
        b.save(),
          (b.lineWidth = 1),
          (b.strokeStyle = "#cccccc"),
          b.strokeRect(0, 0, this.ec.width, this.ec.height),
          b.restore();
    };
    a.prototype.mf = function() {
      return !0 === this.ia("allowCrop") && !0 !== this.ia("lockEditMode");
    };
    a.prototype.hj = function(a, c) {
      a.save();
      a.beginPath();
      a.lineWidth = 1 * c;
      a.strokeStyle = "#0050B7";
      for (var b = this.Na(), d = 0; d < this.Eg.length; d++) {
        var h = this.Eg[d],
          k = b.apply(h.x, h.y),
          l;
        if (h.Cd) {
          var n = 20;
          var r = (l = 0);
          var v = 3;
          h = k.x - 10;
          k = k.y - 6;
        } else
          (n = 0), (l = 20), (r = 3), (v = 0), (h = k.x - 6), (k = k.y - 10);
        for (var w = 0; 5 > w; w++)
          a.moveTo(h, k),
            a.lineTo(h + n * c, k + l * c),
            (h += r * c),
            (k += v * c);
      }
      a.stroke();
      a.restore();
    };
    a.prototype.Xh = function(a, c, e) {
      var b = this.Na();
      e *= 10;
      for (var d = 0; d < this.Eg.length; d++) {
        var k = this.Eg[d];
        k = b.apply(k.x, k.y);
        if (k.x - e <= a && a < k.x + e && k.y - e <= c && c < k.y + e)
          return d;
      }
      return null;
    };
    a.prototype.Ml = function(a) {
      a = this.Eg[a];
      this.Na().apply(a.x, a.y);
    };
    a.prototype.Je = function(a, c, e) {
      var b = this.Et(this.scale);
      c = this.cc().apply(c, e);
      c.x = Math.round(c.x);
      c.y = Math.round(c.y);
      0 === a
        ? (0 > c.y && (c.y = 0),
          c.y > this.ec.height && (c.y = this.ec.height),
          (b.height -= c.y - b.y),
          (b.y = c.y))
        : 1 === a
        ? (0 > c.x && (c.x = 0),
          c.x > this.ec.width && (c.x = this.ec.width),
          (b.width = c.x - b.x))
        : 2 === a
        ? (0 > c.y && (c.y = 0),
          c.y > this.ec.height && (c.y = this.ec.height),
          (b.height = c.y - b.y))
        : 3 === a &&
          (0 > c.x && (c.x = 0),
          c.x > this.ec.width && (c.x = this.ec.width),
          (b.width -= c.x - b.x),
          (b.x = c.x));
      return this.EC(b);
    };
    a.prototype.ot = function(a, c) {
      var b = a.width,
        d = a.height;
      if (!(a instanceof HTMLCanvasElement)) {
        var h = document.createElement("canvas");
        h.width = b;
        h.height = d;
        h.getContext("2d").drawImage(a, 0, 0);
        a = h;
      }
      h = "number" === typeof c.brightness ? c.brightness : -1;
      var k = "number" === typeof c.contrast ? c.contrast : -1,
        l = "number" === typeof c.gamma ? c.gamma : -1,
        n = "string" === typeof c.Kc ? q.ff(c.Kc) : null,
        r = document.createElement("canvas");
      this.log("filterSpec: %s", JSON.stringify(c));
      this.log("brightness=%s contrast=%s gamma=%s w=%s h=%s", h, k, l, b, d);
      r.width = b + 1;
      r.height = d;
      try {
        var v = a.getContext("2d").getImageData(0, 0, b, d).data;
      } catch (B) {
        return this.log("Cannot filter external image."), null;
      }
      a = r.getContext("2d").getImageData(0, 0, b, d);
      c = a.data;
      for (b = 0; b < v.length; b += 4) {
        d = v[b] / 255;
        var w = v[b + 1] / 255,
          x = v[b + 2] / 255,
          y = v[b + 3];
        0 <= l &&
          ((d = Math.pow(d, l)), (w = Math.pow(w, l)), (x = Math.pow(x, l)));
        0 <= h && ((d *= h), (x *= h), (w *= h));
        0 <= k &&
          ((d = d * k - 0.5 * k + 0.5),
          (w = w * k - 0.5 * k + 0.5),
          (x = x * k - 0.5 * k + 0.5));
        n && 0 < y && ((d = n.values[0]), (w = n.values[1]), (x = n.values[2]));
        c[b] = Math.min((255 * d) | 0, 255);
        c[b + 1] = Math.min((255 * w) | 0, 255);
        c[b + 2] = Math.min((255 * x) | 0, 255);
        c[b + 3] = y;
      }
      r.getContext("2d").putImageData(a, 0, 0);
      return r;
    };
    a.Hr = !1;
    return a;
  })(cd);
  cd.td("ImageNode", Ah);
  var Bh = (function(c) {
    function a(a, d) {
      a = c.call(this, a, d) || this;
      a.log = A.create("SvgNode", !0);
      a.Kd = null;
      a.Ar = "";
      a.fc = new Ac();
      a.eb = new ed();
      a.scale = 1;
      delete a.ba.lineWidth;
      delete a.ba.fillStyle;
      delete a.ba.strokeStyle;
      a.ba.url = "";
      return a;
    }
    __extends(a, c);
    a.prototype.type = function() {
      return "SvgNode";
    };
    a.prototype.jc = function(a) {
      switch (a) {
        case "url":
        case "textFillStyle":
        case "textAlign":
        case "fontSize":
        case "fontName":
        case "bold":
        case "italic":
        case "textDecoration":
        case "text":
        case "width":
        case "fillStyle":
        case "strokeStyle":
        case "lineWidth":
        case "fillMode":
          return !0;
      }
      return c.prototype.jc.call(this, a);
    };
    a.prototype.setProperty = function(a, d) {
      "fillStyle" === a && this.Kd && !this.Kd.closed && (a = "strokeStyle");
      c.prototype.setProperty.call(this, a, d);
    };
    a.prototype.Pg = function() {
      return !1;
    };
    a.prototype.format = function(a, c) {
      var b = this,
        d = this.ia("url");
      if (this.Ar !== d)
        (this.Ar = d),
          c.PA(d, function(a) {
            a && a.src === b.Ar && ((b.Kd = a), c.gg(b.id));
          });
      else if (this.Kd) {
        d = "";
        this.ba.fillStyle &&
          (d +=
            "\n               .fill {\n                 fill: " +
            this.ba.fillStyle +
            ";\n               }");
        this.ba.strokeStyle &&
          (d +=
            "\n               .stroke {\n                fill: " +
            this.ba.strokeStyle +
            ";\n                 stroke: " +
            this.ba.strokeStyle +
            ";\n               }");
        this.Kd.Ya(d);
        if ((d = this.ba.text))
          this.eb.Wm(
            this.ba.fontName || "sans-serif",
            this.ba.fontSize || 10,
            this.ba.bold || !1,
            this.ba.italic || !1,
            this.ba.textDecoration || ""
          ),
            this.eb.jg(d),
            this.eb.format(a, 0, 0);
        this.ya = this.Kd.rect.clone();
        this.scale = this.ba.width ? this.ba.width / this.ya.width : 1;
        this.ya.width *= this.scale;
        this.ya.height *= this.scale;
        this.fc = new Ac(this.ya);
        a = this.Na();
        this.fc.transform(a);
        this.rect = this.fc.Is();
      }
    };
    a.prototype.ia = function(a) {
      if ("custom" === this.ba.fillMode)
        switch (a) {
          case "fillStyle":
            return this.ba.fillStyle || "transparent";
          case "strokeStyle":
            return this.ba.strokeStyle || q.Oa;
          case "lineWidth":
            return this.ba.lineWidth || 1;
        }
      return c.prototype.ia.call(this, a);
    };
    a.prototype.rb = function() {
      var a = c.prototype.rb.call(this);
      "custom" === a.fillMode &&
        ((a.fillStyle = this.ia("fillStyle")),
        (a.strokeStyle = this.ia("strokeStyle")),
        (a.lineWidth = this.ia("lineWidth")));
      return a;
    };
    a.prototype.Mf = function(a) {
      if (this.Kd) {
        a.scale(this.scale, this.scale);
        if ("custom" === this.ba.fillMode) {
          a.save();
          a.beginPath();
          this.Kd.la(a, null, !0);
          a.fillStyle = this.ia("fillStyle");
          a.fill();
          var b = this.cc();
          b.qn()
            .multiply(b)
            .Ec(a);
          a.strokeStyle = this.ia("strokeStyle");
          a.lineWidth = this.ia("lineWidth") / this.scale;
          a.stroke();
          a.restore();
        } else this.Kd.la(a);
        a.scale(1 / this.scale, 1 / this.scale);
        this.ba.text &&
          (a.beginPath(),
          (a.fillStyle = this.ba.textFillStyle || q.Oa),
          this.eb.la(
            a,
            this.Kd.rect.x + this.ya.width / 2 - this.eb.rect.width / 2,
            this.Kd.rect.y + this.ya.height / 2 - this.eb.rect.height / 2
          ),
          a.fill());
      }
    };
    return a;
  })(cd);
  cd.td("SvgNode", Bh);
  var Ch = (function(c) {
    function a(a, d) {
      a = c.call(this, a, d) || this;
      a.Wk = "UnknownNode";
      a.width = 100;
      a.height = 20;
      a.eb = new ed();
      a.log = A.create("UNKNOWN", !0);
      a.eb.Hq("center", "middle");
      return a;
    }
    __extends(a, c);
    a.prototype.YC = function(a) {
      this.Wk = a;
      this.eb.jg(a);
      this.log("Creating placeholder for node type %s", a);
    };
    a.prototype.type = function() {
      return this.Wk;
    };
    a.prototype.setProperty = function(a, c) {
      this.ba[a] = c;
    };
    a.prototype.format = function(a) {
      this.log("Formatting placeholder for %s", this.Wk);
      this.rect = new G(0, 0, this.width, this.height);
      this.rect.transform(this.ba.matrix);
      this.eb.format(a, this.width, this.height);
    };
    a.prototype.Mf = function(a) {
      this.log("Drawing placeholder for for %s", this.Wk);
      a.save();
      a.lineWidth = 1;
      a.fillStyle = "#888888";
      a.fillRect(0, 0, this.width, this.height);
      a.fillStyle = q.Oa;
      this.eb.la(a, 0, 0);
      a.restore();
    };
    a.Hr = !1;
    return a;
  })(cd);
  cd.td("UnknownNode", Ch);
  var Dh = A.create("HTMLGridNode"),
    Fh = (function(c) {
      function a(a, d) {
        a = c.call(this, a, d) || this;
        a.lines = [[], []];
        a.lb |= 8;
        a.rf = new zg(a.aa.Yb);
        a.Xb(Bg(a.aa.Yb, { columns: [100], rows: [100] }));
        return a;
      }
      __extends(a, c);
      a.prototype.type = function() {
        return "GridNode";
      };
      a.prototype.jc = function(a) {
        return 0 === a.indexOf("line.") || c.prototype.jc.call(this, a);
      };
      a.prototype.setProperty = function(a, d) {
        if (0 === a.indexOf("line.")) {
          var b = a.substr(5);
          d ? this.fC(Ag.Rb(b, d)) : this.cC(b);
        }
        return c.prototype.setProperty.call(this, a, d);
      };
      a.prototype.fC = function(a) {
        for (var b = a.Mh, c = 0; c < this.lines[b].length; c++)
          if (this.lines[b][c].name === a.name) {
            this.lines[b][c] = a;
            this.$v();
            return;
          }
        this.lines[b].push(a);
        this.$v();
      };
      a.prototype.cC = function(a) {
        for (var b = 0; 1 >= b; b++)
          for (var c = 0; c < this.lines[b].length; c++)
            if (this.lines[b][c].name === a) {
              this.lines[b].splice(c, 1);
              return;
            }
      };
      a.prototype.$v = function() {
        this.lines[0].sort(function(a, c) {
          return yg.Vc(a.Ma, c.Ma);
        });
        this.lines[1].sort(function(a, c) {
          return yg.Vc(a.Ma, c.Ma);
        });
      };
      a.prototype.Yz = function(a) {
        for (var b = 0; 1 >= b; b++)
          for (var c = 0, f = this.lines[b]; c < f.length; c++) {
            var h = f[c];
            if (h.name === a) return h;
          }
        return null;
      };
      a.prototype.Pl = function(a, c) {
        var b = 0,
          d = null,
          h = 0;
        for (a = this.lines[a]; h < a.length; h++) {
          d = a[h];
          if (c === b) return d;
          b++;
        }
        return -1 === c ? d : null;
      };
      a.prototype.Ql = function(a, c) {
        var b = 0,
          d = 0;
        for (a = this.lines[a]; d < a.length; d++) {
          if (a[d].name === c.name) return b;
          b++;
        }
        return -1;
      };
      a.prototype.Vn = function(a, c, e) {
        void 0 === e && (e = {});
        return this.us(0, c, a, e);
      };
      a.prototype.Wn = function(a, c, e) {
        void 0 === e && (e = {});
        return this.us(1, c, a, e);
      };
      a.prototype.zy = function(a, c) {
        return this.tv(1, a, c);
      };
      a.prototype.xy = function(a, c) {
        return this.tv(0, a, c);
      };
      a.prototype.Jq = function(a, c, e) {
        void 0 === e && (e = {});
        return this.Ov(0, a, c, e);
      };
      a.prototype.Kq = function(a, c, e) {
        void 0 === e && (e = {});
        return this.Ov(1, a, c, e);
      };
      a.prototype.Ov = function(a, c, e, f) {
        if (0 > c || c >= this.lines[a].length - 1)
          return (
            Dh(
              "Error: asked to set grid index " +
                c +
                " but there are " +
                this.lines[a].length +
                " grid lines"
            ),
            f
          );
        var b = this.lines[a][c];
        b = new Ag(b.Mh, b.name, b.Ma, e);
        f["line." + b.name] = b.encode();
        Dh("Set grid %s, index=%s, size=%s, props", a, c, e, f);
        return f;
      };
      a.prototype.us = function(a, c, e, f) {
        var b = { ba: {}, children: [] };
        var d = this.lines[a];
        var l = !1;
        if (-1 == e || e == d.length - 1) {
          var n = d[d.length - 2];
          d = d[d.length - 1];
          l = !0;
        } else (n = d[e]), (d = d[e + 1]);
        if (!n || !d) return Dh("Can't addToGrid(%s,%s,%s)", a, c, e, n, d), b;
        if (c !== n.size) {
          var r = n.clone(),
            v = r.size;
          r.size = c;
          c = v;
          b.ba["line." + r.name] = r.encode();
        }
        r = new Ag(a, Ag.Mr(), this.rf.bo(n.Ma, d.Ma), c);
        b.ba["line." + r.name] = r.encode();
        Dh("Add grid %s, %s, %s, props", a, c, e, f);
        c = 1 === a ? "vertical" : "horizontal";
        for (e = 0; e < this.children.length; e++)
          if (((f = this.nb(e)), f.ia("_spanGrid") !== c && (v = this.Vo(f)))) {
            var w = !1;
            l && v.end[a].name === d.name
              ? ((v.end[a] = r), (w = !0))
              : v.start[a].name === n.name && ((v.start[a] = r), (w = !0));
            w &&
              ((w = {}),
              (w["style.gridArea"] =
                v.start[1].name +
                " / " +
                v.start[0].name +
                " / " +
                v.end[1].name +
                " / " +
                v.end[0].name),
              b.children.push({ Ke: f.id, remove: !1, $f: w }));
          }
        for (e = 0; e < this.lines[a].length; e++);
        return b;
      };
      a.prototype.tv = function(a, c, e) {
        var b = { ba: {}, children: [] },
          d = this.lines[a],
          k = d[c],
          l = d[e + 1];
        l || (l = d[d.length - 1]);
        for (var n = 0; n < this.children.length; n++) {
          var r = this.nb(n),
            v = this.Vo(r);
          if (v) {
            var w =
                0 >= yg.Vc(k.Ma, v.start[a].Ma) &&
                0 <= yg.Vc(l.Ma, v.start[a].Ma),
              x =
                0 >= yg.Vc(k.Ma, v.end[a].Ma) && 0 <= yg.Vc(l.Ma, v.end[a].Ma),
              y = !1;
            w && x
              ? b.children.push({ Ke: r.id, remove: !0, $f: {} })
              : w
              ? ((v.start[a] = 0 < c ? l : k), (y = !0))
              : x && ((v.end[a] = l), (y = !0));
            y &&
              ((w = {}),
              (w["style.gridArea"] =
                v.start[1].name +
                " / " +
                v.start[0].name +
                " / " +
                v.end[1].name +
                " / " +
                v.end[0].name),
              b.children.push({ Ke: r.id, remove: !1, $f: w }));
          }
        }
        for (n = 0; n < this.lines[a].length; n++);
        for (n = c + 1; n <= e; n++)
          (a = d[n + 1]), (b.ba["line." + a.name] = void 0);
        if (0 !== c || e !== this.lines.length - 1)
          0 === c
            ? ((a = d[0].clone()),
              (a.size = d[1].size),
              (b.ba["line." + a.name] = a.encode()),
              (b.ba["line." + d[c + 1].name] = void 0))
            : (b.ba["line." + d[c].name] = void 0);
        return b;
      };
      a.prototype.Mz = function(a, c, e, f) {
        a = this.Pl(1, a);
        c = this.Pl(0, c);
        e = -1 === e ? this.lines[1][this.lines[1].length - 1] : this.Pl(1, e);
        f = -1 === f ? this.lines[0][this.lines[0].length - 1] : this.Pl(0, f);
        return a && c && e && f
          ? a.name + " / " + c.name + " / " + e.name + " / " + f.name
          : "";
      };
      a.prototype.Vo = function(a) {
        var b = a.ia("style.gridArea");
        if (!b) return null;
        a = [];
        var c = 0;
        for (b = b.replace(/ /g, "").split("/"); c < b.length; c++) {
          var f = b[c],
            h = this.Yz(f);
          if (!h)
            return Dh("HTMLGridNode: Could not get line by name: %s", f), null;
          a.push(h);
        }
        return { start: [a[1], a[0]], end: [a[3], a[2]] };
      };
      a.prototype.vz = function(a) {
        var b = this.Vo(a);
        if (!b) return null;
        var c = this.Ql(1, b.start[1]),
          f = this.Ql(1, b.end[1]),
          h = this.Ql(0, b.start[0]);
        b = this.Ql(0, b.end[0]);
        return -1 === c || -1 === f || -1 === h || -1 === b
          ? (Dh("Child %s has invalid gridArea: %s", a, a.ia("style.gridArea")),
            null)
          : { qC: c, pC: f, Vx: h, Ux: b };
      };
      a.prototype.yz = function() {
        function a(a, b) {
          for (var c = 0; c < a.length; c++) {
            var d = a[c];
            c < a.length - 1
              ? b.push("[" + d.name + "] " + d.size + "px")
              : b.push("[" + d.name + "]");
          }
        }
        var c = [];
        a(this.lines[1], c);
        c.push("/");
        a(this.lines[0], c);
        return c.join(" ");
      };
      a.prototype.createElement = function() {
        var a = document.createElement("div");
        a.style.display = "grid";
        return a;
      };
      a.prototype.format = function(a, d) {
        for (var b = 0; 1 >= b; b++)
          for (var f = 0, h = 0, k = this.lines[b]; h < k.length; h++) {
            var l = k[h];
            l.Ia = f;
            f += l.size;
          }
        c.prototype.format.call(this, a, d);
        this.da && (this.da.style.BE = this.yz());
      };
      a.prototype.la = function(a) {
        c.prototype.la.call(this, a);
        a.beginPath();
        for (var b = this.Yd, e = 0, f = this.lines[0]; e < f.length; e++) {
          var h = f[e];
          a.moveTo(b.x + h.Ia, b.y);
          a.lineTo(b.x + h.Ia, b.bottom());
        }
        e = 0;
        for (f = this.lines[1]; e < f.length; e++)
          (h = f[e]),
            a.moveTo(b.x, b.y + h.Ia),
            a.lineTo(b.right(), b.y + h.Ia);
        a.rect(b.x, b.y, b.width, b.height);
        a.strokeStyle = "#000";
        a.lineWidth = 1;
        a.setLineDash && a.setLineDash([3, 2]);
        a.stroke();
      };
      a.prototype.hj = function(a) {
        var b = this.Yd;
        a.beginPath();
        for (var c = 0, f = this.lines[0]; c < f.length; c++) {
          var h = f[c];
          a.moveTo(b.x + h.Ia, b.y);
          a.lineTo(b.x + h.Ia, b.bottom());
        }
        c = 0;
        for (f = this.lines[1]; c < f.length; c++)
          (h = f[c]),
            a.moveTo(b.x, b.y + h.Ia),
            a.lineTo(b.right(), b.y + h.Ia);
        a.rect(b.x, b.y, b.width, b.height);
        a.strokeStyle = "blue";
        a.lineWidth = 3;
        a.setLineDash && a.setLineDash([3, 2]);
        a.stroke();
      };
      a.prototype.Wt = function() {
        return !0;
      };
      a.prototype.Xh = function(a, c, e) {
        function b(b) {
          if (0 === b) {
            var e = d.Yd.x;
            var f = a;
          } else (e = d.Yd.y), (f = c);
          for (var h = 0; h < d.lines[b].length - 1; h++) {
            var k = d.lines[b][h];
            e += k.size;
            if (Math.abs(e - f) < l) return new Eh(k, f);
          }
          return null;
        }
        var d = this,
          k = this.Na().apply(a, c);
        if (!this.Yd.Lc(k.x, k.y)) return null;
        var l = 5 / e;
        return b(0) || b(1);
      };
      a.prototype.Je = function(a, c, e) {
        var b = {};
        if (!(a instanceof Eh)) return b;
        var d = a.line.clone();
        e = (1 === d.Mh ? e : c) - a.cw;
        d.size = Math.max(10, d.size + e);
        Dh("Adjust from %s to %s, offset=%s, newSize=%s", a.cw, c, e, d.size);
        b["line." + d.name] = d.encode();
        return b;
      };
      a.prototype.bp = function() {
        return { rows: this.lines[1].length - 1, Os: this.lines[0].length - 1 };
      };
      return a;
    })(Xg),
    Eh = (function() {
      function c(a, b) {
        this.line = a;
        this.cw = b;
      }
      c.prototype.Xf = function() {
        return 1 === this.line.Mh ? "row-resize" : "col-resize";
      };
      return c;
    })();
  cd.td("HTMLGridNode", Fh);
  var Gh = A.create("RootNode"),
    Hh = (function(c) {
      function a(a, d, e) {
        a = c.call(this, a, d) || this;
        Gh("Root node is constructed: Traits=%s", a.lb);
        a.da = e;
        return a;
      }
      __extends(a, c);
      a.prototype.jc = function() {
        return !0;
      };
      return a;
    })(Ug(Vc));
  var hg = new kc(816, 1056),
    Ih = A.create("DOC"),
    lg = (function() {
      function c(a, b, c, e) {
        this.du = c;
        this.df = e;
        this.Dd = document.createElement("DIV");
        this.Yb = rg(3);
        this.fd = new $g();
        this.wt = !0;
        this.pc = "0";
        this.Oj = new $g();
        this.removedNodes = new $g();
        this.tq = {};
        this.Gh = new $g();
        this.dn = 0;
        this.Wq = "magenta";
        this.readOnly = !1;
        this.Bo = new $g();
        this.Bj = new $g();
        this.Cr = new $g();
        this.Pe = [];
        this.Ev = this.bi = this.fj = this.bb = 0;
        this.Yu = function() {};
        this.lj = [];
        this.di = 0;
        this.up = !1;
        this.qw = new $g();
        this.Dd.setAttribute("nid", "0");
        this.root = new Hh(this.uj(), this, this.Dd);
        this.Wa = new th(this, this.root);
        this.yb = new rh(this.Wa, this.Yb);
        a || (this.$a(), this.Cc(this.Fj(0, {})), this.wa(!0));
        b && this.ex(b);
        this.yu();
      }
      c.prototype.ex = function(a) {
        var b = this;
        u(a).query("[z-fixture]", function(a) {
          var c = a.getAttribute("z-fixture") || "";
          b.Xk(a, c);
        });
      };
      c.prototype.Xk = function(a, b) {
        var c = new Xg(b, this);
        c.da = a;
        c.tt = !0;
        c.Zm(this.du);
        Ih("Register fixture %s", b);
        c.da.setAttribute("nid", b);
        this.yb.Zk(b);
        this.Wa.lx(b, c);
        this.lj.push(c);
      };
      c.prototype.empty = function() {
        return 0 === this.root.children.length;
      };
      c.prototype.yu = function() {
        this.Ev = this.yb.next;
      };
      c.prototype.Rf = function() {
        return this.Ev !== this.yb.next;
      };
      c.prototype.Sa = function() {
        this.Wa.Nc(function(a) {
          a.Sa();
        });
      };
      c.prototype.uj = function() {
        var a = this.pc;
        this.pc = (((2147483647 * Math.random()) | 0) + 1).toString(36);
        return a;
      };
      c.prototype.zd = function(a) {
        return this.Wa.zd(a);
      };
      c.prototype.Pu = function(a) {
        Ih("onCreateNode: %s", a);
        "PageNode" !== a.type() &&
          (this.Oj.add(a.id), this.removedNodes.remove(a.id));
        a.ia("spotHighlight") && "PathNode" === a.type() && this.Pe.push(a);
        this.bi = this.jf(a.id) || 0;
        "DomNode" === a.type()
          ? this.Bo.add(a.id)
          : "PageNode" === a.type() && (this.fj = -1);
        Pc(a) &&
          (a.Am(), a.wi(this.readOnly), this.fd.add(a.id), this.Cr.add(a.Td()));
      };
      c.prototype.$h = function(a) {
        this.Gh.add(a);
        this.fd.add(a);
      };
      c.prototype.Da = function(a, b) {
        void 0 === b && (b = !1);
        if (this.Wa.zd(a)) {
          var c = this.Wa.Da(a);
          b && (this.fd.add(a), this.Gh.add(a));
          return c;
        }
        return null;
      };
      c.prototype.Fb = function(a, b) {
        void 0 === b && (b = !1);
        return (a = this.Da(a, b)) && Pc(a) ? a : null;
      };
      c.prototype.jf = function(a) {
        for (a = this.Da(a, !1); ; )
          if (a)
            if ("PageNode" === a.type()) break;
            else {
              if (null === a.parent) return null;
              a = a.parent;
            }
          else return null;
        a = this.root.fe(a);
        return 0 <= a ? a : null;
      };
      c.prototype.mp = function(a, b) {
        for (var c = [], e = 0; e < a.length; e++) {
          var f = this.Da(a[e], !1);
          f && c.push(f);
        }
        return (c = b ? this.Yy(c) : this.ll(c));
      };
      c.prototype.ez = function(a) {
        var b = [];
        this.Wa.Nc(function(c) {
          c.ia("tag") === a && b.push(c);
        });
        return b;
      };
      c.prototype.$a = function() {
        this.di++;
        Ih("begin(); nested transactions=%s", this.di);
      };
      c.prototype.wa = function(a) {
        void 0 === a && (a = !1);
        this.di = Math.max(this.di - 1, 0);
        Ih("commit(skip=%s); nested transactions=%s", a, this.di);
        0 === this.di
          ? (this.yb.wa(!1, a), this.Wa.wa(!1))
          : Ih("In a nested transaction; not committing.");
      };
      c.prototype.transaction = function(a, b) {
        void 0 === b && (b = !1);
        this.$a();
        a(this);
        this.wa(b);
      };
      c.prototype.Bm = function(a) {
        Ih("onCommit occured");
        this.Yu(
          a,
          this.Oj.qc(),
          this.removedNodes.qc(),
          this.Gh.dj(this.Oj)
            .dj(this.removedNodes)
            .qc(),
          this.tq
        );
        this.Oj = new $g();
        this.removedNodes = new $g();
        this.Gh = new $g();
        this.tq = {};
      };
      c.prototype.Uc = function() {
        this.yb.Uc();
      };
      c.prototype.ne = function() {
        this.yb.ne();
      };
      c.prototype.Ze = function() {
        return this.yb.Ze();
      };
      c.prototype.Ye = function() {
        return this.yb.Ye();
      };
      c.prototype.Qm = function() {
        this.yb.oo();
      };
      c.prototype.format = function(a, b) {
        var c = this,
          e = [],
          f;
        this.wt
          ? this.Wa.Nc(function(a) {
              Pc(a) && e.push(a);
            })
          : this.fd.Nc(function(a) {
              a = c.Wa.Da(a);
              Pc(a) && e.push(a);
              return !1;
            });
        var h = this.ll(e);
        var k = 0;
        for (f = h.length; k < f; k++) {
          var l = h[k];
          l.format(a, b);
        }
        if (!this.up)
          for (a = 0; a < h.length; a++) h[a].rp().length && (this.up = !0);
        this.fd.clear();
        this.wt = !1;
        this.Qs();
        return e.length;
      };
      c.prototype.Ny = function(a, b, c) {
        if (0 !== this.Pe.length && b === this.dn) {
          a.save();
          a.beginPath();
          b = c || this.cd();
          a.moveTo(b.x, b.y);
          a.lineTo(b.x, b.bottom());
          a.lineTo(b.right(), b.bottom());
          a.lineTo(b.right(), b.y);
          a.closePath();
          c = !1;
          for (var d = 0; d < this.Pe.length; d++)
            this.jf(this.Pe[d].id) === this.bb &&
              (this.Pe[d].clip(a), (c = !0));
          c &&
            (a.clip(),
            (a.fillStyle = this.Wq),
            a.fillRect(b.x, b.y, b.width, b.height));
          a.restore();
        }
      };
      c.prototype.ef = function(a, b) {
        b = b || this.cd();
        var c = this.ia("background");
        c &&
          (c = q.Il(c)) &&
          ((a.fillStyle = c.toString()),
          a.fillRect(b.x, b.y, b.width, b.height));
      };
      c.prototype.la = function(a, b, c) {
        function d(d) {
          k.wc(function(b) {
            if (!k.Bj.contains(b.zc()) && b.Td() === d && !b.hidden()) {
              b.Mv(n++);
              b.la(a);
              for (var e = 0, h = f.df; e < h.length; e++) {
                var l = h[e];
                l.ys(b) && l.la(a, b, l === c);
              }
            }
          });
          k.Ny(a, d, b);
        }
        var f = this,
          h,
          k = this;
        this.Cr.add(this.dn);
        var l = this.Cr.uD();
        l.sort(function(a, b) {
          return a - b;
        });
        var n = 0;
        var r = 0;
        for (h = l.length; r < h; r++) d(l[r]);
      };
      c.prototype.Hb = function(a, b, c, e, f) {
        var d = this,
          k = { node: null, cf: null };
        this.wc(function(h) {
          for (var l = null, r = 0, v = d.df; r < v.length; r++) {
            var w = v[r];
            if (w.ys(h)) {
              l = w;
              break;
            }
          }
          e.has(h.zc()) &&
            ((r = h.Hb(a, b, 0, c)),
            l && !l.Hb(h, a, b, 0) && (l = null),
            (!r && !l) ||
              !(null === k.node || k.node.Td() <= h.Td()) ||
              (f && f !== h.type()) ||
              ((k.node = h), (k.cf = l)));
        });
        return k;
      };
      c.prototype.yA = function(a, b, c, e) {
        var d = [],
          h = 0,
          k = {};
        this.wc(function(f) {
          f.Hb(a, b, c, e) && (d.push(f), (k[f.id] = h), (h += 1));
        });
        d.sort(function(a, b) {
          return a.Td() != b.Td() ? a.Td() - b.Td() : k[a.id] - k[b.id];
        });
        d.reverse();
        return d;
      };
      c.prototype.gA = function(a) {
        var b = [];
        this.wc(function(c) {
          a.contains(c.rect) && b.push(c);
        });
        return b;
      };
      c.prototype.ll = function(a) {
        var b,
          c = [],
          e = {};
        var f = 0;
        for (b = a.length; f < b; f++) {
          var h = a[f];
          if ("PageNode" !== h.type()) {
            if (!Pc(h)) continue;
            for (; h.om() && h.parent; )
              if (
                (Ih("Node type %s:%s is a group member", h.id, h.type()),
                Pc(h.parent))
              )
                h = h.parent;
              else break;
          }
          h.id in e || ((e[h.id] = h), c.push(h));
        }
        this.kD(c);
        return c;
      };
      c.prototype.Yy = function(a) {
        function b(a) {
          if (!(a.id in e) && ((e[a.id] = a), c.push(a), 0 != (a.lb & 2)))
            for (var d = 0; d < a.children.length; d++) b(a.nb(d));
        }
        for (var c = [], e = {}, f = 0; f < a.length; f++) b(a[f]);
        return c;
      };
      c.prototype.Nc = function(a, b) {
        function c(d) {
          if (d.children.length) {
            a && Pc(d) && b(d);
            for (var e = 0; e < d.children.length; e++) c(d.nb(e));
          } else Pc(d) && b(d);
        }
        c(this.root);
      };
      c.prototype.yl = function(a, b, c) {
        function d(b) {
          if ((Pc(b) || c) && !1 === a(b)) return !1;
          if (0 != (b.lb & 2)) {
            for (var e = [], f = 0; f < b.children.length; f++) e.push(b.nb(f));
            for (b = 0; b < e.length; b++) if (!1 === d(e[b])) return !1;
          }
          return !0;
        }
        void 0 === c && (c = !1);
        for (var f = 0; f < b.children.length; f++) d(b.nb(f));
      };
      c.prototype.wc = function(a, b) {
        void 0 === b && (b = this.bb);
        b < this.root.children.length && this.yl(a, this.root.nb(b || 0));
      };
      c.prototype.qz = function(a) {
        var b = !1,
          c = a.Jl(),
          e = [];
        this.wc(function(d) {
          b ? d.Jl().BA(c) && e.push(d) : d === a && (b = !0);
        });
        return e;
      };
      c.prototype.kD = function(a) {
        var b = 0,
          c = {};
        this.Nc(!0, function(a) {
          c[a.id] = b++;
        });
        a.sort(function(a, b) {
          return c[a.id] - c[b.id];
        });
      };
      c.prototype.tC = function(a) {
        var b = [],
          c = 0;
        a = this.ll(a);
        for (var e = 0; e < a.length; e++) c = this.es(a[e], b, c, null);
        return "zwibblerclip." + JSON.stringify(b);
      };
      c.prototype.es = function(a, b, c, e) {
        var d = a.rb(),
          h = {},
          k;
        for (k in d) {
          var l = d[k];
          l instanceof J &&
            (l = ["Matrix", l.m11, l.m12, l.m21, l.m22, l.Aa, l.Ba]);
          h[k] = l;
        }
        null === e &&
          a.parent &&
          "PageNode" !== a.parent.type() &&
          (e = a.parent.id);
        b.push({
          type: "CreateAction",
          node: a.type(),
          parent: e,
          properties: h,
        });
        h = c + 1;
        for (e = 0; e < a.children.length; e++) h = this.es(a.nb(e), b, h, c);
        return h;
      };
      c.prototype.wu = function(a, b, c) {
        var d, f;
        0 === a.indexOf("zwibblerclip.") && (a = a.substr(13));
        var h = [];
        a = JSON.parse(a);
        var k = {},
          l = 0,
          n = 0;
        var r = 0;
        for (f = a.length; r < f; r++) {
          var v = a[r];
          if ("GroupAction" === v.type) {
            var w = this.uj();
            k[l++] = w;
            w = [];
            var x = 0;
            for (v = v.members; x < v.length; x++) w.push(k[v[x]]);
            v = this.group(w);
            k[l++] = v;
            h.push(v);
          } else if ("CreateAction" === v.type) {
            var y = v.properties;
            w = {};
            for (d in y)
              y.hasOwnProperty(d) &&
                ((x = y[d]),
                "[object Array]" === Object.prototype.toString.apply(x) &&
                  "Matrix" === x[0] &&
                  (x.splice(0, 1), (x = new J(x))),
                (w[d] = x));
            y = this.Kl();
            var B = -1;
            x = !0;
            if ("parent" in v && v.parent in k) (y = k[v.parent]), (x = !1);
            else if ("PageNode" === v.node)
              (y = this.root.id), (B = this.bb + 1 + n), (n += 1);
            else if ("string" === typeof v.parent) {
              var H = this.Da(v.parent, !1);
              H && this.Ep(H)
                ? (y = H.id)
                : H && this.jf(H.id) === this.bb && (y = H.id);
            }
            "PageNode" !== v.node &&
              ((w.layer = c),
              ("default" !== w.layer && "" !== w.layer) || delete w.layer);
            w = this.createNode(v.node, w, y, B);
            k[l++] = w;
            ("HTMLNode" !== v.node || x) && h.push(w);
          }
        }
        0 !== n || b.nu() || this.mg(h, b);
      };
      c.prototype.bC = function(a, b) {
        var c =
          "function" !== typeof b
            ? function(a) {
                return a === b;
              }
            : b;
        for (var e = 0, f = 0; f < a.length; f++)
          c(a[f]) ? (e += 1) : e && (a[f - e] = a[f]);
        a.length -= e;
      };
      c.prototype.Qu = function(a) {
        var b = this.jf(a.id) || 0;
        this.Oj.remove(a.id);
        this.Gh.remove(a.id);
        this.removedNodes.add(a.id);
        this.tq[a.id] = a.rb();
        Pc(a) && a.Cm();
        a.Sa();
        this.fd.remove(a.id);
        a.ia("spotHighlight") && this.bC(this.Pe, a);
        this.Bo.remove(a.id);
        "PageNode" === a.type()
          ? (b === this.bb
              ? (Ih("Removed current page."),
                this.Cc(Math.min(b, this.ib() - 2)),
                (this.bi = this.bb))
              : b < this.bb && (this.Cc(this.bb - 1), (this.bi = this.bb)),
            (this.fj = -1))
          : (this.bi = b);
      };
      c.prototype.Ro = function(a) {
        function b(a) {
          if (!k || a.rect.x < c) c = a.rect.x;
          if (!k || a.rect.right() > e) e = a.rect.right();
          if (!k || a.rect.y < f) f = a.rect.y;
          if (!k || a.rect.bottom() > h) h = a.rect.bottom();
          k = !0;
        }
        var c = 0,
          e = 0,
          f = 0,
          h = 0,
          k = !1;
        "number" === typeof a ? this.wc(b, a) : this.Nc(!0, b);
        return k ? new G(c, f, e - c, h - f) : new G(0, 0, 10, 10);
      };
      c.prototype.EA = function(a) {
        return 0 === a.x && 0 === a.y && 10 === a.width && 10 === a.height;
      };
      c.prototype.xA = function() {
        var a = this.Be(void 0),
          b = null;
        a instanceof ah && (b = a.cd());
        return b || this.root.Og("width");
      };
      c.prototype.cd = function(a, b) {
        var c = null;
        if (void 0 !== a) {
          var e = this.Be(a);
          e instanceof ah && (c = e.cd());
        }
        return c
          ? c.wD()
          : this.ia("width")
          ? new G(0, 0, this.ia("width"), this.ia("height"))
          : b
          ? new G(0, 0, b.width, b.height)
          : this.Ro(a);
      };
      c.prototype.ia = function(a) {
        return this.root.ia(a);
      };
      c.prototype.Og = function(a) {
        return this.root.Og(a);
      };
      c.prototype.setProperty = function(a, b) {
        this.Jd([this.root.id], a, b);
      };
      c.prototype.Jd = function(a, b, c) {
        var d = {};
        d[b] = c;
        this.$a();
        this.vb(a, d);
        this.wa();
      };
      c.prototype.vb = function(a, b) {
        var c = this;
        this.Dg(a, function(a) {
          c.yb.Xb(a.id, b);
        });
      };
      c.prototype.Wu = function(a, b) {
        this.fd.add(a.id);
        this.Gh.add(a.id);
        this.bi = this.jf(a.id) || 0;
        if ("spotHighlight" in b && "PathNode" === a.type()) {
          for (var c = 0; c < this.Pe.length; c++)
            if (this.Pe[c] === a) {
              this.Pe.splice(c, 1);
              break;
            }
          b.spotHighlight && "PathNode" === a.type()
            ? (Ih("Added node %s to spotHighlightNodes", a.id), this.Pe.push(a))
            : Ih("Removed node %s from spotHighlightNodes", a.id);
        }
      };
      c.prototype.rk = function(a, b) {
        Ih("showLayer(%s, %s)", a, b);
        b
          ? (this.Bj.remove(a),
            this.wc(function(b) {
              if (b.zc() === a) {
                b.Am();
                var c = b.parent;
                Qc(c) && ((b = c.fe(b)), c.qk(b, !0));
              }
            }))
          : (this.Bj.add(a),
            this.wc(function(b) {
              if (b.zc() === a) {
                b.Cm();
                var c = b.parent;
                Qc(c) && ((b = c.fe(b)), c.qk(b, !1));
              }
            }));
      };
      c.prototype.pm = function(a) {
        return !this.Bj.contains(a);
      };
      c.prototype.Fj = function(a, b) {
        Ih("Adding page to document with index %s", a);
        if (a > this.root.children.length)
          return Ih("Error: Can insert page with index %s", a), -1;
        this.createNode("PageNode", b, this.root.id, a);
        return a;
      };
      c.prototype.ib = function() {
        return this.root.children.length;
      };
      c.prototype.Cc = function(a) {
        if (a !== this.bb)
          if (0 <= a && a < this.ib())
            Ih("Set current page to %s/%s", a, this.ib()), (this.bb = a);
          else return Ih("Tried to set page to non-existing %s", a), !1;
        return !0;
      };
      c.prototype.eD = function() {
        if (this.fj !== this.bb) {
          this.jr(this.fj, !1);
          this.jr(this.bb, !0);
          this.fj = this.bb;
          for (var a = 0; a < this.ib(); a++) this.root.qk(a, a === this.bb);
        }
      };
      c.prototype.jr = function(a, b) {
        var c = this;
        b
          ? this.wc(function(a) {
              "DomNode" !== a.type() || c.Bj.contains(a.zc()) || a.Am();
            }, a)
          : this.Bo.Nc(function(a) {
              (a = c.Fb(a, !1)) && a.Cm();
            });
      };
      c.prototype.Be = function(a) {
        void 0 === a && (a = this.bb);
        return 0 === this.root.children.length ? this.root : this.root.nb(a);
      };
      c.prototype.np = function() {
        return this.cd(this.bb, hg);
      };
      c.prototype.wi = function(a) {
        this.Nc(!1, function(b) {
          b.wi(a);
        });
      };
      c.prototype.getRootNode = function() {
        return this.root;
      };
      c.prototype.xu = function(a, b) {
        var c = b.$type || b.type || "",
          e = Vc.create(c, a, this);
        e ||
          (c in O.pl
            ? ((e = new yh(a, this)), e.setProperty("nodeType", c))
            : (Ih("Bad node type: %s", c),
              (a = Vc.create("UnknownNode", a, this)),
              a.YC(c),
              (e = a)));
        5 === (e.lb & 5) && e.Zm(this.du);
        e.Xb(b);
        return e;
      };
      c.prototype.createNode = function(a, b, c, e, f) {
        f || (f = this.uj());
        c || (c = this.Kl());
        var d = this.Da(c);
        if (!d)
          throw Error(
            "createNode type=" + a + ": parent " + c + " does not exist"
          );
        if (void 0 === e || -1 == e) e = d.children.length;
        b.$type = a;
        this.yb.createNode(f, c, e, b);
        return f;
      };
      c.prototype.Dg = function(a, b) {
        for (var c = 0; c < a.length; c++) {
          var e = a[c],
            f = this.Da(e);
          f ? b(f) : Ih("Node %s does not exist", e);
        }
      };
      c.prototype.ac = function(a) {
        function b(a) {
          for (var d = a.children.length - 1; 0 <= d; d--) b(a.nb(d));
          c.yb.ue(a.id);
        }
        var c = this;
        this.Dg(a, function(a) {
          a.parent ? b(a) : Ih("deleteNode(%s): node has no parent", a.id);
        });
      };
      c.prototype.mg = function(a, b) {
        var c = this;
        this.Dg(a, function(a) {
          Pc(a) && c.vb([a.id], a.Xe(b));
        });
      };
      c.prototype.Je = function(a, b, c, e) {
        var d = this.Fb(a, !0);
        d && 0 != (d.lb & 16) && this.vb([a], d.Je(b, c, e));
      };
      c.prototype.Kl = function() {
        return this.root.nb(this.bb).id;
      };
      c.prototype.group = function(a) {
        var b = this.createNode("GroupNode", {});
        this.Ki(b, a);
        return b;
      };
      c.prototype.Ki = function(a, b) {
        var c = this,
          e = this.Da(a);
        if (e && 0 != (e.lb & 2)) {
          var f = e.children.length;
          this.Dg(b, function(b) {
            if (!b.parent) throw Error("Expected node to have a parent");
            c.yb.ed(b.id, a, f++);
          });
          this.$h(a);
        }
      };
      c.prototype.Bi = function(a) {
        var b = this,
          c = {};
        this.Dg(a, function(a) {
          if (a instanceof Zg && !(a.id in c) && a.parent) {
            c[a.id] = !0;
            for (
              var d = a.parent.children.length, e = a.children.length - 1;
              0 <= e;
              e--
            ) {
              var k = a.nb(e);
              b.yb.ed(k.id, a.parent.id, d);
            }
            b.ac([a.id]);
          }
        });
      };
      c.prototype.duplicate = function(a, b) {
        function c(a, d) {
          if (!f.has(a.id)) {
            f.add(a.id);
            var k = a.rb();
            if (Pc(a)) {
              var l = a.Xe(b),
                v;
              for (v in l) k[v] = l[v];
            }
            d = e.createNode(a.type(), k, d);
            h.push(d);
            if (0 != (a.lb & 2))
              for (k = 0; k < a.children.length; k++) c(a.nb(k), d);
          }
        }
        var e = this,
          f = new Set(),
          h = [];
        this.Dg(a, function(a) {
          null !== a.parent && c(a, a.parent.id);
        });
        return h;
      };
      c.prototype.ed = function(a, b, c) {
        var d = this.Da(a);
        if (null === d) throw Error("moveNode: " + a + " does not exist");
        var f = this.Da(b);
        if (null === f)
          throw Error("moveNode: New parent " + b + " does not exist");
        -1 === c &&
          (c = d.parent !== f ? f.children.length : f.children.length - 1);
        if (null === d.parent) throw Error("Expected a parent");
        f === d.parent && c === d.parent.fe(d)
          ? Ih("moveNode: Skip moving to the same place")
          : this.yb.ed(a, b, c);
      };
      c.prototype.Rd = function(a, b, c) {
        var d = this;
        void 0 === c && (c = -1);
        this.Dg(a, function(a) {
          if (a.parent) {
            var e = a.parent.id,
              f = a.parent.fe(a);
            switch (b) {
              case 0:
                d.ed(a.id, e, -1);
                break;
              case 1:
                d.ed(a.id, e, 0);
                break;
              case 3:
                0 < f && d.ed(a.id, e, f - 1);
                break;
              case 2:
                f < a.parent.children.length - 1 && d.ed(a.id, e, f + 1);
                break;
              case 4:
                d.ed(a.id, e, c);
            }
          }
        });
      };
      c.prototype.toString = function() {
        return this.encode(this.root);
      };
      c.prototype.encode = function(a, b) {
        void 0 === b && (b = "");
        if (!(a instanceof Vc)) return b + "NOT A NODE: " + a + "\n";
        for (var c = b + " " + a + "\n", e = 0; e < a.children.length; e++)
          c += this.encode(a.nb(e), b + "  ");
        return c;
      };
      c.prototype.cp = function(a) {
        if (a instanceof Element)
          for (; a; ) {
            var b = a.getAttribute("nid");
            if (b && (b = this.Da(b)) && 5 === (b.lb & 5)) return b;
            a = a.parentElement;
          }
        return null;
      };
      c.prototype.Qs = function() {
        this.Vr(this.Dd, new J(), null, 0, 0);
      };
      c.prototype.Vr = function(a, b, c, e, f) {
        if (a instanceof HTMLElement) {
          var d = a.offsetLeft - a.scrollLeft,
            k = a.offsetTop - a.scrollTop;
          c === a.offsetParent && ((d -= e), (k -= f));
          b = b.multiply(new pc(d, k));
          c = a.getAttribute("nid") || "0";
          (c = this.Da(c)) &&
            Rc(c) &&
            ((e = new G(0, 0, c.da.offsetWidth, c.da.offsetHeight)),
            e.transform(b),
            c.nk(e, b));
          for (c = a.firstElementChild; c; )
            this.Vr(c, b, a.offsetParent, a.offsetLeft, a.offsetTop),
              (c = c.nextElementSibling);
        }
      };
      c.prototype.pp = function() {
        return this.yb.pp();
      };
      c.prototype.locked = function() {
        return this.yb.locked();
      };
      c.prototype.IA = function(a) {
        return Rc(a) ? u(a.da).matches("[z-fixture] *") : !1;
      };
      c.prototype.Ep = function(a) {
        return Rc(a) && a.da.hasAttribute("z-fixture");
      };
      c.prototype.Cq = function(a) {
        var b = this;
        if (this.up) {
          var c = new $g();
          this.Wa.Nc(function(d) {
            if (Pc(d)) {
              var e = 0;
              for (d = d.rp(); e < d.length; e++) {
                var h = d[e],
                  k = b.Da(h.Ke);
                if (k && Pc(k)) {
                  var l = 0,
                    n = 0;
                  void 0 !== h.yn &&
                    (a.y > k.rect.y && (n = a.y - k.rect.y),
                    0 < h.yn &&
                      n + k.rect.height > h.yn &&
                      (n = h.yn - k.rect.height));
                  void 0 !== h.xn &&
                    (a.x > k.rect.x && (l = a.x - k.rect.x),
                    0 < h.xn &&
                      l + k.rect.width > h.xn &&
                      (l = h.xn - k.rect.width));
                  if (0 < n || 0 < l) k.$m(l, n), c.add(k.id);
                }
              }
            }
          });
          this.qw.dj(c).Nc(function(a) {
            (a = b.Da(a)) && Pc(a) && a.$m(0, 0);
          });
          this.qw = c;
        }
      };
      return c;
    })();
  var mg = new ((function() {
    function c() {
      this.log = A.create("serializer");
      this.Fr = {
        pdf: "application/pdf",
        svg: "image/svg+xml",
        png: "image/png",
        jpeg: "image/jpeg",
        jpg: "image/jpeg",
        bmp: "image/bmp",
      };
    }
    c.prototype.yh = function(a, b, c, e) {
      if (a instanceof Array) b = this.hu(a, b, c, e);
      else {
        if ("string" !== typeof a)
          return (
            this.log("Can only open an array or string as a document."), null
          );
        if ("{" === a.charAt(0)) b = this.QA(a, b, c, e);
        else if (0 === a.indexOf("zwibbler3."))
          (a = JSON.parse(a.substr(10))), (b = this.hu(a, b, c, e));
        else if (0 === a.indexOf("zwibblerclip."))
          (b = new lg(!1, b, c, e)), b.wu(a, new J(), "default"), b.Qm();
        else {
          try {
            ph(a);
            var d = !0;
          } catch (h) {
            d = !1;
          }
          if (d) (b = new lg(!0, b, c, e)), b.yb.tg(a);
          else throw Error("Format detection failed.");
        }
      }
      for (a = 1; a < b.ib(); a++) b.jr(a, !1);
      return b;
    };
    c.prototype.QA = function(a, b, c, e) {
      function d(a) {
        var b = new J();
        b.m11 = a.m11;
        b.m12 = a.m12;
        b.m21 = a.m21;
        b.m22 = a.m22;
        b.Aa = a.dx;
        b.Ba = a.dy;
        return b;
      }
      function h(a, b) {
        switch (a.type) {
          case "Node":
            var c = [];
            a = a.children;
            for (var e = a.length - 1; 0 <= e; e--)
              try {
                c.push(h(a[e], b + 1));
              } catch (I) {}
            return 0 < b ? l.group(c) : "";
          case "PathNode":
          case "ArrowNode":
            var f = a;
            c = 0;
            "arrowSize" in f && ((c = f.arrowSize), (f = f.path));
            b = d(f.matrix);
            c = {
              strokeStyle: f.strokeStyle,
              fillStyle: f.fillStyle,
              lineWidth: f.lineWidth,
              smoothness: f.smoothness,
              sloppiness: f.sloppiness,
              shadow: f.shadow,
              arrowSize: c,
              seed: Math.round(65535 * Math.random()),
            };
            "textNode" in f &&
              ((a = f.textNode),
              (c.fontSize = a.fontSize),
              (c.fontName = a.fontName),
              (c.text = a.text),
              (c.textFillStyle =
                "textFillStyle" in a ? a.textFillStyle : a.fillStyle));
            "path" in f && (f = f.path);
            var k = f.startX,
              n = f.startY;
            a = f.closed;
            e = new N();
            f = f.segments;
            k = b.apply(k, n);
            e.moveTo(k.x, k.y);
            for (k = 0; k < f.length; k++) {
              var r = f[k];
              switch (r.type) {
                case 1:
                  n = b.apply(r.x, r.y);
                  e.lineTo(n.x, n.y);
                  break;
                case 2:
                  n = b.apply(r.x, r.y);
                  e.Yi(n.x, n.y);
                  break;
                case 3:
                  n = b.apply(r.x1, r.y1);
                  r = b.apply(r.x, r.y);
                  e.yg(n.x, n.y, r.x, r.y);
                  break;
                default:
                  throw "Unknown path segment type: " + r.type;
              }
            }
            a && e.close();
            c.commands = e.qc();
            return l.createNode("PathNode", c);
          case "TextNode":
            return (
              (b = d(a.matrix)),
              (b = b.multiply(new pc(0, 1.3 * a.fontSize))),
              l.createNode("TextNode", {
                fillStyle: a.fillStyle,
                lineWidth: 0,
                text: a.text,
                fontName: a.fontName,
                fontSize: a.fontSize,
                matrix: b,
              })
            );
          default:
            throw Error("Unknown node type: " + a.type);
        }
      }
      var k = A.create("IMPORT"),
        l = new lg(!1, b, c, e);
      try {
        var n = JSON.parse(a);
      } catch (r) {
        a = a.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
        try {
          n = JSON.parse(a);
        } catch (v) {
          throw (k("Couldn't parse file."), "Couldn't parse file.");
        }
      }
      k("Successfully parsed!");
      h(n, 0);
      l.wa(!0);
      return l;
    };
    c.prototype.hu = function(a, b, c, e) {
      function d(a, b) {
        if (void 0 !== a) {
          var c = {};
          for (f in a)
            if (
              a.hasOwnProperty(f) &&
              "children" !== f &&
              "parent" !== f &&
              "id" !== f &&
              "type" !== f
            )
              if ("matrix" === f) {
                var e = new J(a[f]);
                if (!e.isFinite()) {
                  x.log(
                    "Tried to load node a with malformed Matrix. Skipping."
                  );
                  return;
                }
                c[f] = e;
              } else "__type" === f ? (c.type = a[f]) : (c[f] = a[f]);
          if (a.fixture) var f = a.fixture;
          else if ("id" in a) f = a.id.toString(36);
          else return;
          "0" !== b || k || (b = r.Kl());
          0 === a.id || v[a.id] || r.createNode(a.type, c, b, -1, f);
          if (void 0 !== a.children)
            for (b = 0; b < a.children.length; b++) d(a.children[b], f);
        }
      }
      a = JSON.parse(JSON.stringify(a));
      for (var h = {}, k = !1, l = 0, n = a; l < n.length; l++)
        if ("PageNode" === n[l].type) {
          k = !0;
          break;
        }
      var r = new lg(k, b, c, e),
        v = {};
      b = 0;
      for (c = r.lj; b < c.length; b++) v[c[b].id] = !0;
      r.$a();
      for (b = 0; b < a.length; b++) {
        e = a[b];
        if ("document" === e.type || 0 === e.id) {
          delete e.type;
          for (var w in e) r.setProperty(w, e[w]);
        }
        if ("parent" in e) {
          if (!(e.parent in h))
            throw Error(
              "Error: child " +
                e.id +
                " references parent " +
                e.parent +
                " before it was defined."
            );
          c = h[e.parent];
          void 0 !== c.children ? c.children.push(e) : (c.children = [e]);
        }
        ("GroupNode" !== e.type && "PageNode" !== e.type) ||
          void 0 !== e.children ||
          (e.children = []);
        h[e.fixture || e.id] = e;
      }
      var x = this;
      d(h[0], "0");
      for (var y in h) y in v && d(h[y], "");
      r.wa(!0);
      return r;
    };
    c.prototype.lt = function(a) {
      function b(a, d) {
        var f = d.id in e,
          h = { type: d.type() };
        f ? (h.fixture = d.id) : (h.id = parseInt(d.id, 36));
        c.push(h);
        a && (h.parent = a.id in e ? a.id : parseInt(a.id, 36));
        a = d.rb();
        for (var k in a)
          a.hasOwnProperty(k) &&
            (a[k] instanceof J
              ? (h[k] = a[k].qc())
              : "inverse" !== k &&
                ("type" === k ? (h.__type = a[k]) : (h[k] = a[k])));
        for (h = 0; h < d.children.length; h++) b(d, d.nb(h));
      }
      for (var c = [], e = {}, f = 0, h = a.lj; f < h.length; f++) {
        var k = h[f];
        e[k.id] = !0;
      }
      b(null, a.getRootNode());
      f = 0;
      for (a = a.lj; f < a.length; f++) (k = a[f]), b(null, k);
      return c;
    };
    c.prototype.Ik = function(a, b, c) {
      b in this.Fr && (b = this.Fr[b]);
      if ("list" === b) (a = this.lt(a)), (b = "application/json");
      else if ("zwibbler3" === b)
        (a = this.lt(a)),
          (a = "zwibbler3." + JSON.stringify(a)),
          (b = "application/octet-stream");
      else if ("image/svg+xml" === b) {
        var d = a.cd();
        var f = new Af(d);
        a.ef(f);
        a.la(f);
        a = f;
        b = "image/svg+xml";
      } else if ("application/pdf" === b) {
        d = a.cd(0);
        f = new xf(new G(0, 0, d.width, d.height), O.fonts);
        var h = a.bb;
        for (b = 0; b < a.ib(); b++)
          0 < b && ((d = a.cd(b)), f.xi(d)),
            f.translate(-d.x, -d.y),
            a.Cc(b),
            a.ef(f),
            a.la(f);
        a.Cc(h);
        a = f;
        b = "application/pdf";
      } else if (
        (!(d = "image/png" === b || "image/bmp" === b) &&
          (d = "image/jpeg" == b) &&
          ((d = document.createElement("canvas")),
          (f = !1),
          (d.width = 10),
          (d.height = 10),
          "toDataURL" in d &&
            (f = 0 < d.toDataURL("image/jpeg").indexOf("jpeg")),
          bc("JPEG supported: %s", f),
          (d = f)),
        d)
      )
        (f = document.createElement("canvas")),
          (d = a.cd()),
          (f.width = d.width),
          (f.height = d.height),
          (h = f.getContext("2d")),
          h.translate(-d.x, -d.y),
          a.ef(h),
          a.la(h),
          (a = "image/bmp" === b ? gc(f) : f.toDataURL(b)),
          (a = a.split(",")[1]),
          (a = atob(a));
      else throw "Unknown save format: " + b;
      if ("string" === typeof a)
        if ("string" === c) var k = a;
        else if ("data-uri" === c) k = "data:" + b + ";base64," + btoa(a);
        else {
          if ("blob" === c)
            for (c = new Uint8Array(a.length), b = 0; b < a.length; b++)
              c[b] = a.charCodeAt(b);
        }
      else if (a.toBlob && a.toString)
        "string" === c
          ? (k = a.toString())
          : "data-uri" === c
          ? (k = "data:" + b + ";base64," + btoa(a.toString()))
          : "blob" === c && (k = a.toBlob());
      else if ("object" === c) k = a;
      else throw "Error in ZwibblerDocument.save()";
      return k;
    };
    return c;
  })())();
  var Jh = A.create("OPENTYPE");
  function Kh(c) {
    var a;
    void 0 === a && (a = "Assertion failed.");
    if (!c) throw (console.log(Error(a)), Error(a));
  }
  var Lh = (function() {
      function c(a, b) {
        this.code = a;
        this.le = b;
      }
      c.prototype.toString = function() {
        return (
          (255 < this.code ? "code=12 " + (this.code & 255) : "" + this.code) +
          " " +
          JSON.stringify(this.le)
        );
      };
      return c;
    })(),
    Mh = (function() {
      function c(a, b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = a.length - b);
        this.As = a;
        this.start = b;
        this.length = c;
        this.Ia = 0;
      }
      c.prototype.na = function(a) {
        for (var b = 0; a--; ) b = 256 * b + this.As[this.Ia++ + this.start];
        return b;
      };
      c.prototype.getInt16 = function() {
        var a = this.na(2);
        a & 32768 && (a -= 65536);
        return a;
      };
      c.prototype.Th = function(a, b) {
        void 0 === b && (b = 1);
        for (var c = "", e = 0; e < a; e += b)
          c += String.fromCharCode(this.na(b));
        return c;
      };
      c.prototype.Jg = function() {
        return this.getInt16() / 16384;
      };
      c.prototype.seek = function(a) {
        if (a > this.length) throw Error("Seek to invalid location");
        var b = this.Ia;
        this.Ia = a;
        return b;
      };
      c.prototype.slice = function(a, b) {
        void 0 === b && (b = this.length - a);
        return new c(this.As, a + this.start, b);
      };
      c.prototype.xp = function() {
        var a;
        void 0 === a && (a = this.Ia);
        this.seek(a);
        var b = this.na(2);
        if (0 < b) {
          var c = this.na(1);
          this.seek(a + 3 + c * b);
          var e = this.na(c);
          this.seek(a + 3 + (b + 1) * c - 1 + e);
        }
        return a;
      };
      c.prototype.gp = function(a) {
        this.seek(a);
        a = this.na(2);
        var b = this.na(1);
        if (4 < b) throw Error("Error: This is not an index; offsetSize=" + b);
        return a;
      };
      c.prototype.Ej = function(a, b) {
        this.seek(a);
        var c = this.na(2);
        if (b >= c) throw Error("Tried to read past end of index");
        var e = this.na(1);
        this.seek(a + 3 + e * b);
        b = this.na(e);
        var f = this.na(e);
        return this.slice(a + 3 + (c + 1) * e - 1 + b, f - b);
      };
      c.prototype.Jo = function() {
        return this.Ia >= this.length;
      };
      c.prototype.Kt = function(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = []);
        for (b = new Lh(0, b); ; ) {
          if (this.Jo()) throw Error("Unexpected end of charstring");
          var c = this.na(1);
          if (12 === c) return (b.code = 3072 | this.na(1)), b;
          if (28 > c || (a && 29 <= c && 31 >= c)) return (b.code = c), b;
          if (30 === c) {
            var e = "";
            a: for (;;) {
              c = this.na(1);
              for (var f = 4; 0 <= f; f -= 4) {
                var h = (c >> f) & 15;
                switch (h) {
                  case 10:
                    e += ".";
                    break;
                  case 11:
                    e += "E";
                    break;
                  case 12:
                    e += "E-";
                    break;
                  case 14:
                    e += "-";
                    break;
                  case 15:
                    break a;
                  case 14:
                    break;
                  default:
                    e += h.toString();
                }
              }
            }
            b.le.push(parseFloat(e));
          } else
            29 === c
              ? ((e = this.na(1)),
                (c = this.na(1)),
                (f = this.na(1)),
                (h = this.na(1)),
                b.le.push((e << 24) | (c << 16) | (f << 8) | h))
              : 28 === c
              ? ((e = this.na(1)), (c = this.na(1)), b.le.push((e << 8) | c))
              : a && 255 === c
              ? b.le.push(this.na(4) / 65536)
              : 251 <= c
              ? ((e = this.na(1)), b.le.push(256 * -(c - 251) - e - 108))
              : 247 <= c
              ? ((e = this.na(1)), b.le.push(256 * (c - 247) + e + 108))
              : b.le.push(c - 139);
        }
      };
      return c;
    })(),
    Nh = (function() {
      function c(a) {
        this.kr = [];
        var b = (this.n = 0);
        for (a = a.split(/([:\[\]\(\)\-\.{}]|\d+)|\s+/); b < a.length; b++) {
          var c = a[b];
          c && c.length && this.kr.push(c);
        }
      }
      c.prototype.next = function() {
        return this.kr[this.n++];
      };
      c.prototype.match = function(a) {
        return this.kr[this.n] === a ? ((this.n += 1), !0) : !1;
      };
      c.prototype.value = function(a) {
        var b = this.next(),
          c = parseFloat(b);
        return isNaN(c) ? a[b] : c;
      };
      c.prototype.jj = function(a) {
        this.n = a;
        return !1;
      };
      return c;
    })();
  function Oh(c, a, b, d) {
    if (c.match("{")) {
      for (b = {}; Ph(c, a, b, d); );
      c.match("}");
      return b;
    }
    return Qh(c, a, b, d);
  }
  function Ph(c, a, b, d) {
    var e = c.n;
    if (c.match("push")) {
      var f = Rh(c, b);
      for (a = a.slice(f); Ph(c, a, b, d); );
      return c.match("pop") ? !0 : !1;
    }
    f = c.next();
    return c.match(":")
      ? ((c = Qh(c, a, b, d)), "_" !== f && (b[f] = c), !0)
      : c.jj(e);
  }
  function Qh(c, a, b, d) {
    var e = c.n;
    if (c.match("[")) {
      var f = Rh(c, b),
        h = "",
        k = [];
      c.match(".") && ((h = c.next()), (k = {}));
      if (!c.match("]")) return c.jj(e);
      e = c.n;
      for (var l = 0; l < f; l++) {
        c.n = e;
        var n = Oh(c, a, b, d);
        "" === h ? k.push(n) : (k[n[h]] = n);
      }
      0 === f && Oh(c, a, b, !0);
      return k;
    }
    if (c.match("(")) return (b = Rh(c, b)), c.match(")"), b;
    if (c.match("uint")) return (b = c.value(b) / 8), d ? 0 : a.na(b);
    if (c.match("int")) return c.next(), d ? 0 : a.getInt16();
    if (c.match("offset")) return a.Ia;
    if (c.match("date"))
      return (
        (c = 1e3 * (4294967296 * a.na(4) + a.na(4)) + Date.UTC(1904, 1, 1)),
        new Date(c)
      );
    if (c.match("fixed")) return d ? 0 : a.na(4) / 65536;
    if (c.match("string")) {
      if (!c.match("(")) return c.jj(e);
      b = Rh(c, b);
      return c.match(")") ? (d ? 0 : a.Th(b)) : c.jj(e);
    }
    return c.jj(e);
  }
  function Rh(c, a) {
    var b = c.value(a);
    c.match("-")
      ? (b -= c.value(a))
      : c.match(":") && ((c = c.value(a)), (b = (b >> c) & 1));
    return b;
  }
  function Sh(c, a) {
    return Oh(new Nh(a), c, null, !1);
  }
  var Uh = (function() {
      function c() {
        this.fonts = [];
      }
      c.prototype.add = function(a) {
        return __awaiter(this, void 0, void 0, function() {
          var b, c;
          return __generator(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, fetch(a)];
              case 1:
                return (b = d.sent()), [4, b.arrayBuffer()];
              case 2:
                return (c = d.sent()), [2, this.CB(new Uint8Array(c))];
            }
          });
        });
      };
      c.prototype.aC = function() {
        this.fonts.length = 0;
      };
      c.prototype.get = function(a) {
        for (var b = 0, c = this.fonts; b < c.length; b++) {
          var e = c[b];
          if (e.gf === a || e.fontFamily === a) return e;
        }
        return null;
      };
      c.prototype.CB = function(a) {
        a = new Mh(a);
        var b = a.na(4);
        a.seek(0);
        a = 1953784678 === b ? this.hx(a) : [new Th(a)];
        b = 0;
        a: for (; b < a.length; b++) {
          for (var c = a[b], e = 0, f = this.fonts; e < f.length; e++)
            if (f[e].gf === c.gf) {
              Jh("Not adding %s; already have it.");
              continue a;
            }
          Jh("Opened font: %s weight=%s italic=%s", c.gf, c.weight, c.Gj);
          console.log(c);
          this.fonts.push(c);
        }
        return a;
      };
      c.prototype.hx = function(a) {
        var b = Sh(
          a,
          "{\n    ttcTag:string(4)\n    majorVersion:uint16\n    minorVersion:uint16\n    numFonts:uint32\n    offsetTable:[numFonts] uint32\n}"
        );
        Jh(JSON.stringify(b, null, 2));
        Jh("Collection contains %s fonts", b.numFonts);
        var c = [],
          e = 0;
        for (b = b.offsetTable; e < b.length; e++) c.push(new Th(a, b[e]));
        return c;
      };
      return c;
    })(),
    Th = (function() {
      function c(a, b) {
        void 0 === b && (b = 0);
        this.Ha = a;
        this.Ld = {};
        this.gf = this.fontFamily = "";
        this.weight = 0;
        this.bold = this.Gj = !1;
        this.kl = [];
        this.lo = null;
        this.Ip = [];
        a.seek(b);
        this.ie = Sh(
          a,
          "{  \n    scalarType:uint32\n    numTables:uint16\n    searchRange:uint16\n    entrySelector:uint16\n    rangeShift:uint16\n    tables:[numTables.tag] {\n        tag:string(4)\n        checksum:uint32\n        offset:uint32\n        length:uint32\n    }\n}"
        );
        Jh(JSON.stringify(this.ie, null, 2));
        for (var c in this.ie.tables) Jh("Table: %s", c);
        this.Qf(
          "head",
          "{\n    version:fixed\n    fontRevision:fixed\n    checksumAdjustment:uint32\n    magicNumber:uint32\n    flags:uint16\n    unitsPerEm:uint16\n    created:date\n    modified:date\n    xMin:int16\n    yMmin:int16\n    xMax:int16\n    yMax:int16\n    macStyle:uint16\n    lowestRectPPEM:uint16\n    fontDirectionHint:uint16\n    indexToLocFormat:uint16\n    glyphDataFormat:uint16\n\n    bold:(macStyle:0)\n    italic:(macStyle:1)\n}"
        );
        this.Qf(
          "name",
          "{\n    offset:offset\n    format:uint16\n    count:uint16\n    stringOffset:uint16\n    names:[count] {\n        platformID:uint16\n        platformSpecificID:uint16\n        languageID:uint16\n        nameID:uint16\n        length:uint16\n        offset:uint16\n    }\n}"
        );
        this.Qf(
          "cmap",
          "{\n    offset:offset\n    version:uint16\n    numberSubtables:uint16\n    subTables:[numberSubtables] {\n        platformID:uint16\n        platformSpecificID:uint16\n        offset:uint32\n    }\n}"
        );
        this.Qf(
          "hhea",
          "{\n    version:fixed\n    ascent:int16\n    descent:int16\n    lineGap:int16\n    advanceWidthMax:uint16\n    minLeftSideBearing:int16\n    minRightSideBearing:int16\n    xMaxExtent:int16\n    caretSlopeRise:int16\n    caretSlopeRun:uint16\n    caretOffset:int16\n    reserved:uint64\n    metricDataFormat:int16\n    numOfLongHorMetrics:uint16\n}"
        );
        this.Qf(
          "kern",
          "{\n    version:uint16\n    nTables:uint16\n    tables:[nTables] {\n        version:uint16\n        length:uint16\n        coverage:uint16\n        offset:offset\n        _:[length-6] uint8\n    }\n}"
        );
        this.Qf("maxp", "{\n    version:fixed\n    numGlyphs:uint16\n}");
        this.Qf(
          "OS/2",
          "{\n    version:uint16\n    xAvgCharWidth:int16\n    usWeightClass:uint16\n    usWidthClass:uint16\n}"
        );
        this.Qf(
          "CFF ",
          "{\n    offset:offset\n    major:uint8\n    minor:uint8\n}"
        );
        this.LB(a, this.Ld.name);
        this.GB(a, this.Ld.cmap);
        this.JB(a);
        this.KB(a, this.Ld.kern);
        this.Gj = !!this.Ld.head.italic;
        this.bold = !!this.Ld.head.bold;
        this.weight = this.Ld["OS/2"].usWeightClass;
        "CFF " in this.Ld &&
          (this.lo = new Vh(a.slice(this.Ld["CFF "].offset)));
      }
      c.prototype.Qf = function(a, b) {
        a in this.ie.tables &&
          (Jh("Decoding %s", a),
          this.Ha.seek(this.ie.tables[a].offset),
          (this.Ld[a] = Sh(this.Ha, b)),
          Jh(a + " table:", JSON.stringify(this.Ld[a], null, 2)));
      };
      c.prototype.LB = function(a, b) {
        for (var c = 0, e = b.names; c < e.length; c++) {
          var f = e[c];
          a.seek(b.offset + b.stringOffset + f.offset);
          var h =
            0 === f.platformID || 3 === f.platformID
              ? a.Th(f.length, 2)
              : a.Th(f.length);
          switch (f.nameID) {
            case 1:
              this.fontFamily = h;
              break;
            case 4:
              this.gf = h;
          }
        }
      };
      c.prototype.GB = function(a, b) {
        for (var c = 0, e = b.subTables; c < e.length; c++) {
          var f = e[c],
            h = f.platformID,
            k = f.platformSpecificID;
          f = b.offset + f.offset;
          a.seek(f);
          var l = a.na(2),
            n = a.na(2);
          Jh(
            "CMAP platform " +
              h +
              " " +
              k +
              " format " +
              l +
              " length " +
              n +
              " at " +
              f
          );
          switch (l) {
            case 0:
              this.kl.push(new Wh(a.slice(f, n)));
              break;
            case 4:
              this.kl.push(new Xh(a.slice(f, n)));
          }
        }
      };
      c.prototype.JB = function(a) {
        var b = this.ie.tables.GPOS;
        b && this.Ip.push(new Yh(a.slice(b.offset, b.length)));
      };
      c.prototype.KB = function(a, b) {
        if (b) {
          var c = 0;
          for (b = b.tables; c < b.length; c++) {
            var e = b[c];
            0 === e.coverage >> 8 &&
              (Jh("Format 0 kern table detected"),
              this.Ip.push(new Zh(a.slice(e.offset, e.length))));
          }
        }
      };
      c.prototype.transform = function(a, b) {
        b = this.Gb(b);
        a.scale(b, -b);
      };
      c.prototype.Fo = function(a, b, c, e) {
        if (this.lo) this.lo.Fo(a, b, c, e);
        else if (((b = this.ov(b)), null !== b))
          for (var d = 0, h = 0, k = 0, l = 0, n; h < b.oa.length; h++) {
            var r = b.oa[h];
            0 === d
              ? (a.moveTo(r.x + c, r.y + e), (d = 1))
              : 1 === d
              ? r.hi
                ? a.lineTo(r.x + c, r.y + e)
                : (d = 2)
              : ((n = b.oa[h - 1]),
                r.hi
                  ? (a.quadraticCurveTo(n.x + c, n.y + e, r.x + c, r.y + e),
                    (d = 1))
                  : a.quadraticCurveTo(
                      n.x + c,
                      n.y + e,
                      (n.x + r.x) / 2 + c,
                      (n.y + r.y) / 2 + e
                    ));
            h === b.bf[k] &&
              (2 === d &&
                ((n = r),
                (r = b.oa[l]),
                r.hi
                  ? a.quadraticCurveTo(n.x + c, n.y + e, r.x + c, r.y + e)
                  : a.quadraticCurveTo(
                      n.x + c,
                      n.y + e,
                      (n.x + r.x) / 2 + c,
                      (n.y + r.y) / 2 + e
                    )),
              (l = h + 1),
              (k += 1),
              (d = 0));
          }
      };
      c.prototype.ov = function(a) {
        var b = this.Lz(a);
        a = this.Ha;
        var c = this.ie.tables.glyf;
        if (0 === b || b >= c.offset + c.length) return null;
        Kh(b >= c.offset);
        Kh(b < c.offset + c.length);
        a.seek(b);
        b = {
          bf: [],
          Vj: a.getInt16(),
          oa: [],
          WE: a.getInt16(),
          YE: a.getInt16(),
          VE: a.getInt16(),
          XE: a.getInt16(),
        };
        Kh(-1 <= b.Vj);
        -1 === b.Vj ? this.UB(a, b) : this.WB(a, b);
        return b;
      };
      c.prototype.Lz = function(a) {
        Kh("loca" in this.ie.tables);
        var b = this.ie.tables.loca,
          c = this.Ha;
        if (1 === this.Ld.head.indexToLocFormat) {
          b = c.seek(b.offset + 4 * a);
          a = c.na(4);
          var e = c.na(4);
        } else
          (b = c.seek(b.offset + 2 * a)), (a = 2 * c.na(2)), (e = 2 * c.na(2));
        c.seek(b);
        return a === e ? 0 : a + this.ie.tables.glyf.offset;
      };
      c.prototype.UB = function(a, b) {
        var c,
          e,
          f = 32;
        b.bf = [];
        for (b.oa = []; f & 32; ) {
          f = a.na(2);
          var h = a.na(2);
          var k = 1;
          var l = (c = 0);
          var n = 1;
          var r = (e = 0);
          if (f & 1) {
            var v = a.getInt16();
            var w = a.getInt16();
          } else (v = a.na(1)), (w = a.na(1));
          f & 2 && ((e = v), (r = w));
          f & 8
            ? (n = k = a.Jg())
            : f & 64
            ? ((k = a.Jg()), (n = a.Jg()))
            : f & 128 &&
              ((k = a.Jg()), (c = a.Jg()), (l = a.Jg()), (n = a.Jg()));
          v = a.Ia;
          if ((h = this.ov(h))) {
            var x = b.oa.length;
            for (w = 0; w < h.bf.length; w++) b.bf.push(h.bf[w] + x);
            for (w = 0; w < h.oa.length; w++) {
              x = h.oa[w].x;
              var y = h.oa[w].y;
              x = k * x + c * y + e;
              y = l * x + n * y + r;
              b.oa.push({ x: x, y: y, hi: h.oa[w].hi });
            }
          }
          a.seek(v);
        }
        b.Vj = b.bf.length;
        f & 256 && a.seek(a.na(2) + a.Ia);
      };
      c.prototype.WB = function(a, b) {
        function c(b, c, d) {
          for (var f = 0, l = 0; l < h; l++) {
            var n = k[l];
            n & c
              ? (f = n & d ? f + a.na(1) : f - a.na(1))
              : ~n & d && (f += a.getInt16());
            e[l][b] = f;
          }
        }
        b.bf = [];
        for (var e = (b.oa = []), f = 0; f < b.Vj; f++) b.bf.push(a.na(2));
        a.seek(a.na(2) + a.Ia);
        if (0 !== b.Vj) {
          var h = Math.max.apply(null, b.bf) + 1,
            k = [];
          for (f = 0; f < h; f++)
            if (
              ((b = a.na(1)),
              k.push(b),
              e.push({ x: 0, y: 0, hi: 0 < (b & 1) }),
              b & 8)
            ) {
              var l = a.na(1);
              Kh(0 < l);
              for (f += l; l--; )
                k.push(b), e.push({ x: 0, y: 0, hi: 0 < (b & 1) });
            }
          c("x", 2, 16);
          c("y", 4, 32);
        }
      };
      c.prototype.Gb = function(a) {
        return a / this.Ld.head.unitsPerEm;
      };
      c.prototype.Rz = function(a) {
        Kh("hmtx" in this.ie.tables);
        var b = this.Ha,
          c = this.ie.tables.hmtx.offset;
        b.seek(c + 4);
        var e = this.Ld.hhea.numOfLongHorMetrics;
        if (a < e) {
          var f = this.Ha.seek(c + 4 * a);
          var h = b.na(2);
        } else
          (f = b.seek(c + 4 * (e - 1))),
            (h = b.na(2)),
            b.seek(c + 4 * e + 2 * (a - e));
        a = b.getInt16();
        b.seek(f);
        return { ws: h, NA: a };
      };
      c.prototype.Kz = function(a) {
        for (
          var b = 0, c = this.kl.length - 1;
          0 <= c && !(b = this.kl[c].map(a));
          c--
        );
        return b;
      };
      c.prototype.Oy = function(a, b, c, e, f) {
        a.save();
        a.translate(c, e);
        this.transform(a, f);
        f = [];
        for (c = 0; c < b.length; c++) f.push(new $h(this.Kz(b.charCodeAt(c))));
        c = 0;
        for (e = this.Ip; c < e.length; c++) e[c].Hj(f);
        for (var d = (e = c = 0); d < f.length; d++) {
          var k = f[d],
            l = this.Rz(k.he);
          Jh(
            "Metrics for %s code %s index %s: %s %s",
            b.charAt(d),
            b.charCodeAt(d),
            k.he,
            l.ws,
            l.NA
          );
          this.Fo(a, k.he, c + k.li.x, e + k.li.y);
          c += l.ws + k.advance.x;
          e += k.advance.y;
        }
        a.restore();
      };
      return c;
    })(),
    Wh = (function() {
      function c(a) {
        this.Ha = a;
      }
      c.prototype.map = function(a) {
        return 0 <= a && 255 >= a
          ? (this.Ha.seek(a + 6),
            Jh("charCode %s maps to %s", a, this.Ha.na(1)),
            this.Ha.seek(a + 6),
            this.Ha.na(1))
          : 0;
      };
      return c;
    })(),
    Xh = (function() {
      function c(a) {
        this.Ha = a;
        a.seek(6);
        this.ti = a.na(2) / 2;
      }
      c.prototype.map = function(a) {
        var b = this;
        Jh("Try to map charcode %s using %s ranges", a, this.ti);
        var c = this.Ha,
          e = 0,
          f = 0,
          h = ai(this.ti - 1, function(d) {
            c.seek(14 + 2 * d);
            var f = c.na(2);
            c.seek(2 * b.ti + 16 + 2 * d);
            e = c.na(2);
            return a < e ? -1 : a > f ? 1 : 0;
          });
        if (0 <= h) {
          c.seek(6 * this.ti + 16 + 2 * h);
          f = c.na(2);
          c.seek(4 * this.ti + 16 + 2 * h);
          var k = c.getInt16();
          0 === f
            ? (f = (k + a) & 65535)
            : (c.seek(6 * this.ti + 16 + 2 * h + (2 * (a - e) + f)),
              (f = c.na(2)),
              0 !== f && (f = (f + k) & 65535));
        }
        return f;
      };
      return c;
    })();
  function ai(c, a) {
    for (var b = -1, d; 1 < c - b; ) {
      d = (c + b) >> 1;
      var e = a(d);
      if (0 == e) return d;
      0 < e ? (b = d) : (c = d);
    }
    return -1;
  }
  var Vh = (function() {
      function c(a) {
        this.Ha = a;
        this.No = null;
        this.Mo = [];
        var b = a.na(1),
          c = a.na(1),
          e = a.na(1);
        Jh("CFF Version " + b + "." + c);
        a.seek(e);
        a.xp();
        this.Ey = a.xp();
        this.oD = a.xp();
        this.rD = a.Ia;
        b = this.lr = this.nv(a.Ej(this.Ey, 0));
        this.lB = a.gp(b.CharStrings);
        Jh("CFF Font contains " + this.lB + " glyphs");
        this.lr.FDSelect
          ? ((this.No = new bi(a.slice(b.FDSelect))), this.VB(a, b))
          : this.Mo.push(b);
      }
      c.prototype.nv = function(a) {
        a = ci(a, {}, this);
        if (a.Private) {
          var b = a.Private[1];
          ci(this.Ha.slice(b, a.Private[0]), a, this);
          a.Subrs && (a.Subrs += b);
        }
        return a;
      };
      c.prototype.Th = function(a) {
        if (a < di.length) return di[a];
        a = this.Ha.Ej(this.oD, a - di.length);
        return a.Th(a.length);
      };
      c.prototype.VB = function(a, b) {
        b = b.FDArray;
        var c = a.gp(b);
        Jh("There are %s items in FDArray", c);
        for (var e = 0; e < c; e++) this.Mo.push(this.nv(a.Ej(b, e)));
      };
      c.prototype.Rt = function(a, b) {
        void 0 === b && (b = -1);
        if (-1 === b) {
          b = this.rD;
          var c = this.lr.CharstringType;
        } else (c = this.Mo[b]), (b = c.Subrs), (c = c.CharstringType);
        var e = this.Ha.gp(b);
        return this.Ha.Ej(
          b,
          a + (0 === c ? 0 : 1240 > e ? 107 : 33900 > e ? 1131 : 32768)
        );
      };
      c.prototype.Jz = function(a) {
        return this.No ? this.No.Jj(a) : 0;
      };
      c.prototype.Fo = function(a, b, c, e) {
        a.translate(c, e);
        var d = this.lr.CharStrings,
          h = this.Jz(b);
        ei(this.Ha.Ej(d, b), a, h, this);
        a.translate(-c, -e);
      };
      return c;
    })(),
    fi = 0,
    gi = 1,
    V = 2,
    hi = 3,
    ii = {};
  function W(c, a, b, d) {
    var e = b instanceof Array;
    ii[a] = {
      name: c,
      Ws: d,
      type: e ? b : [b],
      fn: function(a, d) {
        a[c] = e || b === hi ? d : d[0];
      },
    };
  }
  W("version", 0, fi);
  W("Notice", 1, fi);
  W("Copyright", 12, fi);
  W("FullName", 2, fi);
  W("FamilyName", 3, fi);
  W("Weight", 4, fi);
  W("isFixedPitch", 3073, gi, !1);
  W("ItalicAngle", 3074, V, 0);
  W("UnderlinePosition", 3075, V, -100);
  W("UnderlineThickness", 3076, V, 50);
  W("PaintType", 3077, V, 0);
  W("CharstringType", 3078, V, 2);
  W("FontMatrix", 3079, hi, [0.001, 0, 0, 0.001, 0, 0]);
  W("UniqueID", 13, V);
  W("FontBBox", 5, hi, [0, 0, 0, 0]);
  W("StrokeWidth", 3080, V, 0);
  W("XUID", 14, hi);
  W("charset", 15, V, 0);
  W("Encoding", 16, V, 0);
  W("CharStrings", 17, V, 0);
  W("Private", 18, [V, V]);
  W("SyntheticBase", 3092, V);
  W("PostSCript", 3093, fi);
  W("BaseFontName", 3094, fi);
  W("BaseFontBlend", 3095, fi);
  W("ROS", 3102, [fi, fi]);
  W("CIDFontVersion", 3103, V, 0);
  W("CIDFontRevision", 3104, V, 0);
  W("CIDFontType", 3105, V, 0);
  W("CIDCount", 3106, V);
  W("FDArray", 3108, V);
  W("FDSelect", 3109, V);
  W("FontName", 3110, fi);
  W("BlueValues", 6, V);
  W("OtherBlues", 7, V);
  W("FamilyBlues", 8, V);
  W("FamilyOtherBlues", 9, V);
  W("BlueScale", 3081, V, 0.039625);
  W("BlueShift", 3082, 8);
  W("BlueFuzz", 3073, 1);
  W("StdHW", 10, V);
  W("StdVW", 11, V);
  W("StemSnapH", 3084, V);
  W("StemSnapV", 3085, V);
  W("ForceBold", 3086, gi, !1);
  W("LanguageGroup", 3089, V, 0);
  W("ExpansionFactor", 3090, V, 0.6);
  W("initialRandomSeed", 3091, V, 0);
  W("Subrs", 19, V);
  W("defaultWidthX", 20, V);
  W("NominalWidthX", 21, V);
  function ci(c, a, b) {
    for (; !c.Jo(); ) {
      var d = c.Kt();
      if (d.code in ii) {
        var e = ii[d.code],
          f = [],
          h = 0;
        a: for (; h < e.type.length; h++) {
          var k = e.type[h];
          if (h >= d.le.length)
            throw Error("Not enough operands for instruction:" + d);
          var l = d.le[h];
          switch (k) {
            case fi:
              f.push(b.Th(l));
              break;
            case gi:
              f.push(!!l);
              break;
            case hi:
              f = d.le;
              break a;
            case V:
              f.push(l);
          }
        }
        e.fn(a, f);
      } else Jh("Uknown dict opcode: %s", d.code);
    }
    for (var n in ii) (e = ii[n]), !e.Ws || e.name in a || (a[e.name] = e.Ws);
    return a;
  }
  function ei(c, a, b, d, e) {
    for (
      e = e || {
        first: !0,
        width: 0,
        Uj: 0,
        stack: [],
        x: 0,
        y: 0,
        qh: !1,
        wb: 0,
        xb: 0,
      };
      !c.Jo();

    ) {
      switch (c.Kt(!0, e.stack).code) {
        case 1:
        case 3:
          e.stack.length & 1 && ji(e);
          break;
        case 4:
          1 < e.stack.length && ji(e);
          e.y += e.stack[0];
          ki(e, a);
          break;
        case 5:
          for (var f = 0; f + 1 < e.stack.length; f += 2)
            (e.x += e.stack[f]), (e.y += e.stack[f + 1]), a.lineTo(e.x, e.y);
          break;
        case 6:
          for (f = 0; f < e.stack.length; f += 2)
            (e.x += e.stack[f]),
              a.lineTo(e.x, e.y),
              f + 1 < e.stack.length &&
                ((e.y += e.stack[f + 1]), a.lineTo(e.x, e.y));
          break;
        case 7:
          for (f = 0; f < e.stack.length; f += 2)
            (e.y += e.stack[f]),
              a.lineTo(e.x, e.y),
              f + 1 < e.stack.length &&
                ((e.x += e.stack[f + 1]), a.lineTo(e.x, e.y));
          break;
        case 8:
          li(e, a);
          break;
        case 10:
          ei(d.Rt(e.stack.pop(), b), a, b, d, e);
          continue;
        case 11:
          return;
        case 14:
          e.stack.length && ji(e);
          e.qh && a.lineTo(e.wb, e.xb);
          break;
        case 18:
        case 23:
          e.stack.length & 1 && ji(e);
          e.Uj += e.stack.length >> 1;
          break;
        case 19:
        case 20:
          e.stack.length & 1 && ji(e);
          e.Uj += e.stack.length >> 1;
          f = (e.Uj + 7) >> 3;
          for (var h = 0; h < f; h++) c.na(1);
          break;
        case 21:
          e.stack.length & 1 && ji(e);
          e.x += e.stack[0];
          e.y += e.stack[1];
          ki(e, a);
          break;
        case 22:
          2 === e.stack.length && ji(e);
          e.x += e.stack[0];
          ki(e, a);
          break;
        case 24:
          li(e, a);
          e.y += e.stack.pop();
          e.x += e.stack.pop();
          a.lineTo(e.x, e.y);
          break;
        case 25:
          for (f = 0; f < e.stack.length - 6; f += 2)
            (e.x += e.stack[f]), (e.y += e.stack[f + 1]), a.lineTo(e.x, e.y);
          li(e, a, f);
          break;
        case 26:
          var k = e.stack.length & 1;
          k && (e.x += e.stack[0]);
          for (; k < e.stack.length; k += 4) {
            f = e.x;
            h = e.y += e.stack[k + 0];
            var l = (e.x += e.stack[k + 1]),
              n = (e.y += e.stack[k + 2]),
              r = e.x,
              v = (e.y += e.stack[k + 3]);
            a.bezierCurveTo(f, h, l, n, r, v);
          }
          break;
        case 27:
          if ((k = e.stack.length & 1)) e.y += e.stack[0];
          for (; k < e.stack.length; k += 4)
            (f = e.x += e.stack[k + 0]),
              (h = e.y),
              (l = e.x += e.stack[k + 1]),
              (n = e.y += e.stack[k + 2]),
              (r = e.x += e.stack[k + 3]),
              (v = e.y),
              a.bezierCurveTo(f, h, l, n, r, v);
          break;
        case 29:
          ei(d.Rt(e.stack.pop(), -1), a, b, d, e);
          continue;
        case 30:
          mi(e, !1, a);
          break;
        case 31:
          mi(e, !0, a);
          break;
        case 3075:
        case 3076:
        case 3077:
        case 3081:
        case 3082:
        case 3083:
        case 3084:
        case 3086:
        case 3087:
        case 3090:
        case 3092:
        case 3093:
        case 3094:
        case 3095:
        case 3096:
        case 3098:
        case 3099:
        case 3100:
        case 3101:
        case 3102:
        case 3106:
        case 3107:
        case 3108:
        case 3109:
          throw Error("Not implemented.");
      }
      e.stack.length = 0;
    }
  }
  function ki(c, a) {
    c.qh && a.lineTo(c.wb, c.xb);
    c.wb = c.x;
    c.xb = c.y;
    c.qh = !0;
    a.moveTo(c.x, c.y);
  }
  function li(c, a, b) {
    for (void 0 === b && (b = 0); b + 5 < c.stack.length; b += 6) {
      var d = (c.x += c.stack[b + 0]),
        e = (c.y += c.stack[b + 1]),
        f = (c.x += c.stack[b + 2]),
        h = (c.y += c.stack[b + 3]),
        k = (c.x += c.stack[b + 4]),
        l = (c.y += c.stack[b + 5]);
      a.bezierCurveTo(d, e, f, h, k, l);
    }
  }
  function mi(c, a, b) {
    for (var d = 0; d + 1 < c.stack.length; d += 4) {
      var e = d == c.stack.length - 5;
      if (a) {
        var f = (c.x += c.stack[d + 0]),
          h = c.y,
          k = (c.x += c.stack[d + 1]),
          l = (c.y += c.stack[d + 2]),
          n = e ? (c.x += c.stack[d + 4]) : c.x;
        e = c.y += c.stack[d + 3];
      } else
        (f = c.x),
          (h = c.y += c.stack[d + 0]),
          (k = c.x += c.stack[d + 1]),
          (l = c.y += c.stack[d + 2]),
          (n = c.x += c.stack[d + 3]),
          (e = e ? (c.y += c.stack[d + 4]) : c.y);
      b.bezierCurveTo(f, h, k, l, n, e);
      a = !a;
    }
  }
  function ji(c) {
    c.first
      ? ((c.width = c.stack.shift()), (c.first = !1))
      : (Jh("Warning; already have width"), c.stack.shift());
  }
  var bi = (function() {
      function c(a) {
        this.Ha = a;
        this.Du = 0;
        this.format = a.na(1);
        Jh("Reading FDSelect format %s", this.format);
        if (3 !== this.format && 0 !== this.format)
          throw Error("Can't read format " + this.format + " FDSelect");
        3 === this.format && (this.Du = a.na(2));
      }
      c.prototype.Jj = function(a) {
        var b = this;
        if (0 === this.format) return this.Ha.seek(1 + a), this.Ha.na(1);
        var c = -1;
        ai(this.Du, function(d) {
          b.Ha.seek(3 + 3 * d);
          d = b.Ha.na(2);
          c = b.Ha.na(1);
          var e = b.Ha.na(2);
          return a < d ? -1 : a >= e ? 1 : 0;
        });
        return c;
      };
      return c;
    })(),
    di = ".notdef space exclam quotedbl numbersign dollar percent ampersand quoteright \nparenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven \neight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U\nV W X Y Z bracketleft backslash bracketright asciicircum underscore quoteleft a b c d e f g h i j k \nl m n o p q r s t u v w x y z braceleft bar braceright asciitilde exclamdown cent sterling fraction\nyen florin section currency quotesingle quotedblleft guillemotleft guilsinglleft guilsinglright fi\nfl endash dagger daggerdbl periodcentered paragraph bullet quotesinglbase quotedblbase quotedblright\nguillemotright ellipsis perthousand questiondown grave acute circumflex tilde macron breve dotaccent \ndieresis ring cedilla hungarumlaut ogonek caron emdash AE ordfeminine Lslash Oslash OE ordmasculine \nae dotlessi lslash oslash oe germandbls onesuperior logicalnot mu trademark Eth onehalf plusminus \nThorn onequarter divide brokenbar degree thorn threequarters twosuperior registered minus eth \nmultiply threesuperior copyright Aacute Acircumflex Adieresis Agrave Aring Atilde Ccedilla Eacute \nEcircumflex Edieresis Egrave Iacute Icircumflex Idieresis Igrave Ntilde Oacute Ocircumflex \nOdieresis Ograve Otilde Scaron Uacute Ucircumflex Udieresis Ugrave Yacute Ydieresis Zcaron aacute \nacircumflex adieresis agrave aring atilde ccedilla eacute ecircumflex edieresis egrave iacute \nicircumflex idieresis igrave ntilde oacute ocircumflex odieresis ograve otilde scaron uacute \nucircumflex udieresis ugrave yacute ydieresis zcaron exclamsmall Hungarumlautsmall dollaroldstyle \ndollarsuperior ampersandsmall Acutesmall parenleftsuperior parenrightsuperior twodotenleader \nonedotenleader zerooldstyle oneoldstyle twooldstyle threeoldstyle fouroldstyle fiveoldstyle \nsixoldstyle sevenoldstyle eightoldstyle nineoldstyle commasuperior threequartersemdash \nperiodsuperior questionsmall asuperior bsuperior centsuperior dsuperior esuperior isuperior \nlsuperior msuperior nsuperior osuperior rsuperior ssuperior tsuperior ff ffi ffl parenleftinferior \nparenrightinferior Circumflexsmall hyphensuperior Gravesmall Asmall Bsmall Csmall Dsmall Esmall \nFsmall Gsmall Hsmall Ismall Jsmall Ksmall Lsmall Msmall Nsmall Osmall Psmall Qsmall Rsmall Ssmall \nTsmall Usmall Vsmall Wsmall Xsmall Ysmall Zsmall colonmonetary onefitted rupiah Tildesmall \nexclamdownsmall centoldstyle Lslashsmall Scaronsmall Zcaronsmall Dieresissmall Brevesmall Caronsmall \nDotaccentsmall Macronsmall figuredash hypheninferior Ogoneksmall Ringsmall Cedillasmall \nquestiondownsmall oneeighth threeeighths fiveeighths seveneighths onethird twothirds zerosuperior \nfoursuperior fivesuperior sixsuperior sevensuperior eightsuperior ninesuperior zeroinferior \noneinferior twoinferior threeinferior fourinferior fiveinferior sixinferior seveninferior \neightinferior nineinferior centinferior dollarinferior periodinferior commainferior Agravesmall \nAacutesmall Acircumflexsmall Atildesmall Adieresissmall Aringsmall AEsmall Ccedillasmall Egravesmall \nEacutesmall Ecircumflexsmall Edieresissmall Igravesmall Iacutesmall Icircumflexsmall Idieresissmall \nEthsmall Ntildesmall Ogravesmall Oacutesmall Ocircumflexsmall Otildesmall Odieresissmall OEsmall \nOslashsmall Ugravesmall Uacutesmall Ucircumflexsmall Udieresissmall Yacutesmall Thornsmall \nYdieresissmall 001.000 001.001 001.002 001.003 Black Bold Book Light Medium Regular Roman Semibold".split(
      /\s+/
    );
  function $h(c) {
    this.he = c;
    this.li = { x: 0, y: 0 };
    this.advance = { x: 0, y: 0 };
  }
  var Yh = (function() {
      function c(a) {
        this.$n = [];
        this.bu = Sh(
          a,
          "{\n    majorVersion:uint16\n    minorVersion:uint16\n    scriptListOffset:uint16\n    featureListOffset:uint16\n    lookupListOffset:uint16\n    featureVariationsOffset:uint16\n\n    push scriptListOffset\n    scriptCount:uint16\n    scriptRecords:[scriptCount] {\n        tag:string(4)\n        scriptOffset:uint16\n        push scriptOffset\n        defaultLangSys:uint16\n        langSysCount:uint16\n        langSysRecords:[langSysCount] {\n            langSysTag:string(4)\n            langSysOffset:uint16\n            push langSysOffset\n            lookupOrder:uint16\n            requiredFeatureIndex:uint16\n            featureIndexCount:uint16\n            featureIndices:[featureIndexCount] uint16\n            pop\n        }\n        pop\n    }\n    pop\n\n    push lookupListOffset\n    lookupCount:uint16\n    lookups:[lookupCount] {\n        offset:uint16\n        push offset\n        lookupType:uint16\n        lookupFlag:uint16\n        subTableCount:uint16\n        subTables:[subTableCount] {\n            offset:uint16\n            push offset\n            posFormat:uint16\n            coverageOffset:uint16\n        }\n        pop\n    }\n    pop\n\n    push featureListOffset\n    featureCount:uint16\n    featureRecords[featureCount] {\n        featureTag:string(4)\n        featureOffset:uint16\n        push featureOffset\n        featureParams:uint16\n        lookupIndexCount:uint16\n        lookupListIndicies:[lookupIndexCount] uint16\n        pop\n    }\n    pop\n}"
        );
        for (
          var b = this.bu.lookupListOffset, c = 0, e = this.bu.lookups;
          c < e.length;
          c++
        ) {
          var f = e[c],
            h = b + f.offset,
            k = f.lookupType;
          Jh("Lookup type %s has %s subtables", k, f.subTables.length);
          var l = 0;
          for (f = f.subTables; l < f.length; l++) {
            var n = f[l],
              r = h + n.offset;
            2 === k && 1 === n.posFormat
              ? this.$n.push(new ni(a.slice(r)))
              : 2 === k &&
                2 === n.posFormat &&
                this.$n.push(new oi(a.slice(r)));
          }
        }
      }
      c.prototype.Hj = function(a) {
        for (var b = 0, c = this.$n; b < c.length; b++) c[b].Hj(a);
      };
      return c;
    })(),
    pi = (function() {
      function c(a) {
        this.Ha = a;
        this.fm = 4;
        this.format = a.na(2);
        this.count = a.na(2);
        Jh("CoverageTable format %s count %s", this.format, this.count);
      }
      c.prototype.Wo = function(a) {
        var b = this,
          c = -1;
        1 === this.format
          ? ai(this.count, function(d) {
              b.Ha.seek(b.fm + 2 * d);
              d = b.Ha.na(2);
              if (a < d) return -1;
              if (a > d) return 1;
              c = d;
              return 0;
            })
          : ai(this.count, function(d) {
              b.Ha.seek(b.fm + 6 * d);
              d = b.Ha.na(2);
              b.Ha.na(2);
              var e = b.Ha.na(2);
              if (a < d) return -1;
              if (a > d) return 1;
              c = e + a - d;
              return 0;
            });
        return c;
      };
      return c;
    })(),
    qi = (function(c) {
      function a(a) {
        var b = c.call(this, a) || this;
        b.dw = 0;
        1 === b.format && ((b.dw = b.count), (b.count = a.na(2)), (b.fm += 2));
        return b;
      }
      __extends(a, c);
      a.prototype.Dt = function(a) {
        return Math.max(0, this.Wo(a - this.dw));
      };
      return a;
    })(pi);
  function ri(c, a, b) {
    b & 1 && (a.li.x = c.getInt16());
    b & 2 && (a.li.y = c.getInt16());
    b & 4 && (a.advance.x = c.getInt16());
    b & 8 && (a.advance.y = c.getInt16());
    b & 16 && c.getInt16();
    b & 32 && c.getInt16();
    b & 64 && c.getInt16();
    b & 128 && c.getInt16();
  }
  var si = (function() {
      function c() {}
      c.prototype.Hj = function(a) {
        for (var b = 0; b < a.length - 1; b++) this.Jj(a[b], a[b + 1]);
      };
      return c;
    })(),
    ni = (function(c) {
      function a(a) {
        var b = c.call(this) || this;
        b.Ha = a;
        a.na(2);
        var e = a.na(2);
        b.to = new pi(a.slice(e));
        b.Dk = a.na(2);
        b.Ek = a.na(2);
        b.count = a.na(2);
        b.YB = 2 * ti(b.Dk) + 2 * ti(b.Ek) + 2;
        return b;
      }
      __extends(a, c);
      a.prototype.Jj = function(a, c) {
        var b = this,
          d = this.to.Wo(a.he);
        if (-1 === d) return 0;
        this.Ha.seek(10 + 2 * d);
        this.Ha.seek(this.Ha.na(2));
        var h = this.Ha.Ia;
        d = this.Ha.na(2);
        return 0 <=
          ai(d, function(d) {
            b.Ha.seek(h + d * b.YB);
            d = b.Ha.na(2);
            if (d < c.he) return -1;
            if (d > c.he) return 1;
            ri(b.Ha, a, b.Dk);
            ri(b.Ha, c, b.Ek);
            return 0;
          })
          ? 1
          : 0;
      };
      return a;
    })(si),
    oi = (function(c) {
      function a(a) {
        var b = c.call(this) || this;
        b.Ha = a;
        a.na(2);
        b.to = new pi(a.slice(a.na(2)));
        b.Dk = a.na(2);
        b.Ek = a.na(2);
        b.Px = new qi(a.slice(a.na(2)));
        b.Qx = new qi(a.slice(a.na(2)));
        b.zE = a.na(2);
        b.Ox = a.na(2);
        b.qv = 2 * ti(b.Dk) + 2 * ti(b.Ek);
        return b;
      }
      __extends(a, c);
      a.prototype.Jj = function(a, c) {
        if (-1 === this.to.Wo(a.he)) return 0;
        var b = this.Px.Dt(a.he),
          d = this.Qx.Dt(c.he);
        this.Ha.seek(16 + b * this.qv * this.Ox + d * this.qv);
        ri(this.Ha, a, this.Dk);
        ri(this.Ha, c, this.Ek);
        return 1;
      };
      return a;
    })(si),
    Zh = (function(c) {
      function a(a, d) {
        void 0 === d && (d = a.na(2));
        var b = c.call(this) || this;
        b.Ha = a;
        b.count = d;
        Jh("Kern table has %s entries", b.count);
        return b;
      }
      __extends(a, c);
      a.prototype.Jj = function(a, c) {
        var b = this,
          d = (a.he << 16) | c.he,
          h = 0;
        ai(this.count, function(a) {
          b.Ha.seek(8 + 6 * a);
          a = b.Ha.na(4);
          if (d < a) return -1;
          if (d > a) return 1;
          a = b.Ha.getInt16();
          c.li.x += a;
          c.advance.x += a;
          h = 1;
          return 0;
        });
        return h;
      };
      return a;
    })(si);
  function ti(c) {
    c -= (c >> 1) & 1431655765;
    c = (c & 858993459) + ((c >> 2) & 858993459);
    return (16843009 * ((c + (c >> 4)) & 252645135)) >> 24;
  }
  var xh = D.od("CanvasRenderingContext2D", { beginPath: D.Function }),
    ui = D.od("TextOptions", {
      text: D.String,
      width: D.Ua,
      height: D.Ua,
      font: D.Sb,
      valign: D.gb(D.jb(D.sd("top"), D.sd("bottom"), D.sd("middle"))),
      halign: D.gb(
        D.jb(D.sd("left"), D.sd("right"), D.sd("centre"), D.sd("center"))
      ),
      textDecoration: D.Sb,
    });
  "undefined" !== typeof jQuery &&
    ((jQuery.fn.zwibbler = function(c) {
      void 0 === c && (c = {});
      var a = null;
      this.each(function(b, d) {
        d.zwibbler && jQuery(d).empty();
        a = new T(d, c, {});
        d.zwibbler = a;
      });
      return a;
    }),
    (jQuery.fn.zwibblerContext = function() {
      return this[0].zwibbler;
    }));
  var Y = (function() {
      function c() {
        this.Yh = [];
        this.buttons = [];
        this.pl = {};
        this.fonts = new Uh();
        this.te = {};
        this.Vs = [];
        this.log = A.create("ZWIBBLER");
        this.WebSocket = WebSocket;
        this.Zb = new Ya();
        this.controllers = {};
        this.Bw = T;
      }
      c.prototype.create = function(a, b, c) {
        void 0 === c && (c = {});
        "string" === typeof a &&
          0 < a.length &&
          "." !== a.charAt(0) &&
          "#" !== a.charAt(0) &&
          (a = "#" + a);
        var d = u.nc(a);
        if (!d)
          throw (alert("Zwibbler.create: Cannot find an element with id " + a),
          Error("Error in Zwibbler.creawte"));
        return new T(d, b, c);
      };
      c.prototype.$w = function(a) {
        for (var b = ["name", "image", "onclick"], c = 0; c < b.length; c++)
          if (!(b[c] in a))
            return alert("Zwibbler.addButton: missing " + b[c]), !1;
        this.buttons.push(a);
        return !0;
      };
      c.prototype.bx = function(a, b) {
        this.pl[a] = b;
      };
      c.prototype.Kw = function(a, b) {
        void 0 === b && (b = {});
        return this.Hn(a, b);
      };
      c.prototype.Hn = function(a, b) {
        void 0 === b && (b = {});
        return yd(a, b);
      };
      c.prototype.sy = function(a, b) {
        return this.hh(a, b);
      };
      c.prototype.zb = function(a, b) {
        P.zb(a, function(a, c, f, h) {
          b(new Qe(P, a, c, f, h));
        });
      };
      c.prototype.getContext = function(a) {
        for (; a; ) {
          if (a.ZWIBBLER_CONTEXT) return a.ZWIBBLER_CONTEXT;
          if ("ZWIBBLER" === a.tagName || a.getAttribute("zwibbler")) {
            if ((a = a.querySelector("[z-canvas]"))) return a.ZWIBBLER_CONTEXT;
            break;
          }
          a = a.parentElement;
        }
        return null;
      };
      c.prototype.hh = function(a, b, c) {
        function d() {
          var a = y.cd(),
            b = 1,
            d = 0,
            e = 0;
          l && (a.y = l);
          v && (a.height = v - a.y);
          n && (a.x = n);
          r && (a.width = r - a.x);
          h && k
            ? (b = Math.min(h / a.width, k / a.height))
            : h
            ? ((b = h / a.width), (k = a.height * b))
            : k
            ? ((b = k / a.height), (h = a.width * b))
            : ((h = a.width), (k = a.height));
          a.width * b < h && (d = h / 2 - (a.width * b) / 2);
          a.height * b < k && (e = k / 2 - (a.height * b) / 2);
          d -= a.x * b;
          e -= a.y * b;
          w.width = Math.ceil(h);
          w.height = Math.ceil(k);
          x.translate(d, e);
          x.scale(b, b);
          y.la(x);
          f.log("Drawn.");
          c(w);
        }
        var f = this;
        void 0 === b && (b = {});
        void 0 === c && (c = function() {});
        var h = b.width || 0,
          k = b.height || 0,
          l = b.top || 0,
          n = b.left || 0,
          r = b.right || 0,
          v = b.bottom || 0,
          w = cc(null),
          x = w.getContext("2d"),
          y = mg.yh(a, null, {}, []);
        if (!y) throw Error("Zwibbler.render: Could not open document");
        var B = new Fe();
        y.format(x, B);
        B.pa("reformat", function(a) {
          y.$h(a);
        });
        B.lm()
          ? B.pa("done", function() {
              y.format(x, B);
              d();
            })
          : d();
        return w;
      };
      c.prototype.save = function(a, b, c) {
        void 0 === c && (c = {});
        return new Promise(function(d, f) {
          var e = mg.yh(a, null, {}, []);
          if (e) {
            e.Og("background") || e.setProperty("background", "white");
            var k = cc(null).getContext("2d"),
              l = new Fe();
            l.pa("reformat", function(a) {
              e.$h(a);
            });
            var n = function() {
              try {
                e.format(k, l);
                c.page && e.Cc(c.page);
                var a = mg.Ik(e, b, c.encoding || "string");
                d(a);
              } catch (v) {
                f(v);
              }
            };
            l.pa("done", n);
            e.format(k, l);
            l.lm() || n();
          } else f(Error("Failed to open document"));
        });
      };
      c.prototype.ib = function(a) {
        a = mg.yh(a, null, {}, []);
        if (!a) throw Error("Failed to open document");
        return a.ib();
      };
      c.prototype.HB = function(a) {
        a = q.ff(a);
        return {
          r: a.values[0],
          g: a.values[1],
          b: a.values[2],
          a: a.values[3],
        };
      };
      c.prototype.TA = function(a) {
        return new q(q.RGBA, [a.r, a.g, a.b, a.a]).toString();
      };
      c.prototype.lz = function(a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href;
      };
      c.prototype.Bx = function(a) {
        return Ra(Sa(a));
      };
      c.prototype.fx = function(a) {
        var b = this;
        return this.fonts.add(a).then(function(c) {
          b.De(
            '\n@font-face {\n    font-family: "' +
              c[0].gf +
              '";\n    src: url("' +
              a +
              '");\n}'
          );
          new FontFace(c[0].gf, "url(" + a + ")").load().then(function(a) {
            document.fonts.add(a);
          });
          for (var d = 0, f = b.Yh; d < f.length; d++) {
            var h = f[d],
              k = h.yc("fonts").concat();
            k.push(c[0].gf);
            h.Vm("fonts", k);
          }
          return c[0].gf;
        });
      };
      c.prototype.Jw = function(a) {
        return new N(a);
      };
      c.prototype.Er = function(a) {
        var b = new N();
        Fc(b, a);
        return b.qc();
      };
      c.prototype.Yx = function(a) {
        return this.Er(a);
      };
      c.prototype.Ky = function(a, b) {
        Fc(a, b);
      };
      c.prototype.ep = function(a, b) {
        var c = document.createElement("img");
        c.src = a;
        if (0 < a.toLowerCase().indexOf(".svg")) {
          var e = new Wd();
          e.eq(a).then(function() {
            b && b(e.rect.width, e.rect.height, c);
          });
        } else
          c.onload = function() {
            b && b(c.naturalWidth, c.naturalHeight, c);
          };
      };
      c.prototype.Np = function(a) {
        return new Promise(function(b, c) {
          var d = document.createElement("img");
          d.src = a;
          d.onerror = function() {
            c(Error("Error loading image " + a));
          };
          d.onload = function() {
            b(d);
          };
        });
      };
      c.prototype.CC = function(a, b) {
        return ec(a, b);
      };
      c.prototype.yD = function(a) {
        return this.xk(a);
      };
      c.prototype.nm = function() {
        var a = document.createElement("DIV");
        return !!(
          a.requestFullscreen ||
          a.msRequestFullscreen ||
          a.fB ||
          a.webkitRequestFullscreen
        );
      };
      c.prototype.xk = function(a) {
        var b = u.nc(a);
        if (!b) throw Error("Zwibbler.toggleFullScreen: " + a + " not found");
        a = document;
        this.mu()
          ? document.exitFullscreen
            ? document.exitFullscreen()
            : a.msExitFullscreen
            ? a.msExitFullscreen()
            : a.eB
            ? a.eB()
            : a.webkitExitFullscreen && a.webkitExitFullscreen()
          : b.requestFullscreen
          ? b.requestFullscreen()
          : b.msRequestFullscreen
          ? b.msRequestFullscreen()
          : b.fB
          ? b.mozRequestFullScreen()
          : b.webkitRequestFullscreen
          ? b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          : console.log(
              "Element does not contain any requestFullscreen methods"
            );
      };
      c.prototype.mu = function() {
        var a = document;
        return a.fullscreenElement ||
          a.mozFullScreenElement ||
          a.webkitFullscreenElement ||
          a.msFullscreenElement
          ? !0
          : !1;
      };
      c.prototype.Ty = function() {
        A.Sy();
      };
      c.prototype.Yt = function(a) {
        return Sf.Ew(a);
      };
      c.prototype.De = function(a) {
        this.Zb.yp(a);
      };
      c.prototype.controller = function(a, b) {
        this.controllers[a] = b;
      };
      c.prototype.Ui = function(a, b) {
        P.Ui(a, b);
        this.te[a] = b;
      };
      c.prototype.TB = function(a) {
        this.Vs.push(a);
      };
      c.prototype.Ft = function(a) {
        return a in this.te
          ? JSON.parse(JSON.stringify(this.te[a].defaults || {}))
          : {};
      };
      c.prototype.Wi = function(a, b, c, e) {
        void 0 === c && (c = {});
        void 0 === e && (e = null);
        if ("object" !== typeof a || "string" !== typeof b)
          throw Error("Bad arguments passed to createComponent");
        return P.Wi(a, b, c, e);
      };
      c.prototype.Dy = function(a) {
        P.detach(a);
        u(a).remove();
      };
      c.prototype.Ic = function(a, b) {
        var c = u.nc(a);
        if (!c) throw Error("Zwibbler.attach: Cannot find element from " + a);
        return Rg(c, b, !0);
      };
      c.prototype.detach = function(a) {
        P.detach(a);
      };
      c.prototype.ox = function(a) {
        return "string" !== typeof a.url
          ? Promise.reject(Error("Zwibbler.ajax: settings.url missing"))
          : Xa({
              url: a.url,
              method: a.method,
              cv: a.params,
              mimeType: a.mimeType,
              contentType: a.contentType,
              withCredentials: a.withCredentials,
              data: a.data,
              Ys: a.delay,
              cancel: a.cancel,
              headers: a.headers,
            }).then(
              function(a) {
                P.digest();
                return a;
              },
              function(a) {
                P.digest();
                throw a;
              }
            );
      };
      c.prototype.MC = function(a, b) {
        var c = Mb();
        c[a] = b;
        var e;
        b = [];
        a = !0;
        for (e in c)
          c.hasOwnProperty(e) &&
            ("/" === e.charAt(0)
              ? (a || b.unshift("&"),
                "" !== c[e] &&
                  (b.unshift(encodeURIComponent(c[e])), b.unshift("=")),
                b.unshift("/" + encodeURIComponent(e.substr(1))),
                (a = !1))
              : (a || b.push("&"),
                (a = !1),
                b.push(encodeURIComponent(e)),
                "" !== c[e] &&
                  (b.push("="), b.push(encodeURIComponent(c[e])))));
        window.location.hash = b.join("");
      };
      c.prototype.rA = function() {
        return Mb();
      };
      c.prototype.sA = function() {
        return Nb();
      };
      c.prototype.Cy = function() {
        for (var a = 0, b = this.Yh.concat(); a < b.length; a++) b[a].Sa();
        this.Zb.Sa();
        this.fonts.aC();
        P.Sa();
        this.buttons.length = 0;
        this.pl.length = 0;
      };
      c.prototype.Gl = function(a, b) {
        D.ga("formatText", arguments, xh, ui);
        var c = new ed();
        b.text && c.jg(b.text);
        if (b.font) {
          var e = Od(b.font);
          c.Wm(
            e.fontFamily || "arial",
            parseFloat(e.fontSize),
            "bold" === e.fontWeight,
            "italic" === e.fontStyle,
            b.textDecoration || ""
          );
        }
        c.Hq(b.halign || null, b.valign || null);
        c.format(a, b.width || 0, b.height || 0);
        return {
          draw: function(a, b, d) {
            c.la(a, b, d);
          },
          width: c.rect.width,
          height: c.rect.height,
        };
      };
      c.prototype.Hw = function(a, b) {
        D.ga("NewPointerListener", arguments, D.HTMLElement);
        var c = new ne(a, { tn: b.useCapture });
        return {
          on: function(a, b) {
            D.ga("on", arguments, D.String, D.Function);
            c.pa(a, function(a) {
              b({
                type: a.type,
                originalEvent: a.Bb,
                pageX: a.pageX,
                pageY: a.pageY,
                target: a.target,
                buttons: a.buttons,
                pointerId: a.pointerId,
                ctrlKey: a.ctrlKey,
                shiftKey: a.shiftKey,
                altKey: a.altKey,
                preventDefault: function() {
                  a.preventDefault();
                },
                stopPropagation: function() {
                  a.stopPropagation();
                },
              });
            });
          },
          removeListener: function(a, b) {
            D.ga("removeListener", arguments, D.String, D.Function);
            c.removeListener(a, b);
          },
          destroy: function() {
            c.Sa();
          },
        };
      };
      c.prototype.iB = function(a, b) {
        return new vi(new G(0, 0, a, b), this.fonts);
      };
      return c;
    })(),
    vi = (function(c) {
      function a() {
        return (null !== c && c.apply(this, arguments)) || this;
      }
      __extends(a, c);
      a.prototype.download = function(a) {
        var b = this.toBlob(),
          c = new $a();
        c.Dv(b, a);
        setTimeout(function() {
          c.Sa();
        }, 1010);
      };
      return a;
    })(xf);
  document.addEventListener("dragstart", function(c) {
    var a = c.target;
    if ("IMG" === a.tagName) {
      var b = {},
        d = a.getAttribute("zwibbler-props");
      if (d)
        try {
          b = JSON.parse(d);
        } catch (e) {
          console.log(Error("Could not parse z-property value as JSON:" + d));
        }
      a = {
        "zwibbler-src": a.getAttribute("zwibbler-src"),
        "zwibbler-width": a.getAttribute("zwibbler-width"),
        "zwibbler-size": a.getAttribute("zwibbler-size"),
        "zwibbler-props": b,
      };
      a["zwibbler-src"] && c.dataTransfer.setData("text", JSON.stringify(a));
    }
  });
  var O = new Y(),
    wi = Nb(Of).module || "Zwibbler";
  "function" === typeof define &&
    define.amd &&
    define(wi, ["exports"], function(c) {
      c.Zwibbler = O;
    });
  "undefined" !== typeof globalModule &&
    globalModule.exports &&
    (globalModule.exports.Zwibbler = O);
  window[wi] = O;
  ac.resolve(O);
  O.instances = O.Yh;
  Y.prototype.addButton = Y.prototype.$w;
  Y.prototype.addCustomNode = Y.prototype.bx;
  Y.prototype.Popup = Y.prototype.Kw;
  Y.prototype.Dialog = Y.prototype.Hn;
  Y.prototype.createPreview = Y.prototype.sy;
  Y.prototype.directive = Y.prototype.zb;
  Y.prototype.getContext = Y.prototype.getContext;
  Y.prototype.render = Y.prototype.hh;
  Y.prototype.save = Y.prototype.save;
  Y.prototype.getPageCount = Y.prototype.ib;
  Y.prototype.parseColour = Y.prototype.HB;
  Y.prototype.makeColour = Y.prototype.TA;
  Y.prototype.getAbsoluteUrl = Y.prototype.lz;
  Y.prototype.base64Encode = Y.prototype.Bx;
  Y.prototype.addFont = Y.prototype.fx;
  Y.prototype.PathCommands = Y.prototype.Jw;
  Y.prototype.CommandsFromSvgPath = Y.prototype.Er;
  Y.prototype.commandsFromSVGPath = Y.prototype.Yx;
  Y.prototype.drawSVGPath = Y.prototype.Ky;
  Y.prototype.getImageSize = Y.prototype.ep;
  Y.prototype.loadImage = Y.prototype.Np;
  Y.prototype.setColourOpacity = Y.prototype.CC;
  Y.prototype.toggleFullScreen = Y.prototype.yD;
  Y.prototype.isFullscreenSupported = Y.prototype.nm;
  Y.prototype.toggleFullscreen = Y.prototype.xk;
  Y.prototype.isFullScreen = Y.prototype.mu;
  Y.prototype.enableConsoleLogging = Y.prototype.Ty;
  Y.prototype.hasConfig = Y.prototype.Yt;
  Y.prototype.injectStyle = Y.prototype.De;
  Y.prototype.controller = Y.prototype.controller;
  Y.prototype.component = Y.prototype.Ui;
  Y.prototype.propertyPanel = Y.prototype.TB;
  Y.prototype.createComponent = Y.prototype.Wi;
  Y.prototype.destroyComponent = Y.prototype.Dy;
  Y.prototype.attach = Y.prototype.Ic;
  Y.prototype.detach = Y.prototype.detach;
  Y.prototype.ajax = Y.prototype.ox;
  Y.prototype.setHashValue = Y.prototype.MC;
  Y.prototype.getUrlHash = Y.prototype.rA;
  Y.prototype.getUrlQuery = Y.prototype.sA;
  Y.prototype.destroyAll = Y.prototype.Cy;
  Y.prototype.formatText = Y.prototype.Gl;
  Y.prototype.NewPointerListener = Y.prototype.Hw;
  Y.prototype.newPdfContext = Y.prototype.iB;
  Y.prototype.Context = Y.prototype.Bw;
  vi.prototype.download = vi.prototype.download;
  window.Zwibbler = O;
  var xi = A.create("RESIZE"),
    yi = (function() {
      function c(a, b, c) {
        this.Ca = a;
        this.node = b;
        this.hb = c;
        xi("Enter resize behaviour");
        this.rect = b.rect.clone();
        this.Ca.Ne(!0);
        this.Ca.Jb(Hd(c));
      }
      c.prototype.xd = function() {};
      c.prototype.Ac = function() {
        this.Ca.Ne(!1);
        this.Ca.Jb("default");
        xi("Exit RESIZE");
      };
      c.prototype.Ib = function(a, b, c) {
        b = (c.pageX - c.wb) / this.Ca.scale;
        var d = (c.pageY - c.xb) / this.Ca.scale;
        c = this.rect.clone();
        a = this.hb;
        if (a & 16) {
          var f = Math.min(Math.abs(b), Math.abs(d));
          b = Math.sign(b) * f;
          d = Math.sign(d) * f;
        }
        switch (a) {
          case 25:
          case 22:
            d = b;
            break;
          case 19:
          case 28:
            d = -b;
        }
        a & 1 && ((c.y += d), (c.height -= d));
        a & 4 && (c.height += d);
        a & 8 && ((c.x += b), (c.width -= b));
        a & 2 && (c.width += b);
        this.node.format(this.Ca.ma, this.Ca.request);
        this.Ca.la();
        if (this.node.da) {
          a = this.node.da;
          f = a.offsetParent;
          b = c.x;
          for (d = c.y; f instanceof HTMLElement && f !== this.Ca.aa.Dd; )
            (b -= f.offsetLeft), (d -= f.offsetTop), (f = f.offsetParent);
          f = u(a).Rl();
          a.style.left = b - f.left + "px";
          a.style.top = d - f.top + "px";
          a.style.width = c.width - f.Lp - f.Aq + "px";
          a.style.height = c.height - f.mr - f.io + "px";
          this.node.nk(c, this.node.Na());
        }
        return !0;
      };
      c.prototype.Wb = function() {
        if (!this.node.da) throw Error("Expected element to be created");
        this.Ca.Za(new Ef(this.Ca));
        this.Ca.aa.$a();
        this.Ca.aa.vb([this.node.id], {
          "style.left": this.node.da.style.left,
          "style.top": this.node.da.style.top,
          "style.width": this.node.da.style.width,
          "style.height": this.node.da.style.height,
        });
        this.Ca.aa.wa(!1);
        return !0;
      };
      return c;
    })();
  var zi = A.create("DefaultBehaviour"),
    Ef = (function() {
      function c(a) {
        this.view = a;
        this.Bq = 1;
        this.view.Xm("");
        if ((this.Ci = this.view.ha.Ci())) this.Bq = 2;
        this.Bc = new Ee(a);
      }
      c.prototype.xd = function() {
        zi("Entering pick tool.");
        this.view.Jb("default");
      };
      c.prototype.Ac = function() {
        zi("Leaving pick tool.");
      };
      c.prototype.sb = function(a) {
        return this.Bc.sb(a);
      };
      c.prototype.Ab = function(a, b, c) {
        if (c.buttons && 1 !== c.buttons)
          return zi("   -- not main button. ignore."), !1;
        if (this.view.ha.get("readOnly")) {
          var d = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb);
          d.node
            ? (zi("layer=%s active=%s", d.node.zc(), this.view.Tb),
              this.view.za.ta("node-clicked", d.node.id, a, b),
              d.cf && d.cf.click(d.node, c.Bb))
            : zi("readOnly mode: Ignoring click.");
          return !1;
        }
        this.view.selection.length && this.view.JA(c) && this.view.bj();
        if (this.view.Ja) {
          var f = this.view.Ja;
          var h = f.Xh(a, b, (1 / this.view.scale) * this.Bq);
          if (null !== h)
            return this.view.Za(new Ai(this.view, f, h, a, b, this, c)), !0;
        }
        if ((h = this.view.It(a, b))) {
          if (!h.Js()) return h.click(c), this.view.za.digest(), !0;
          this.view.Za(
            new Be(this.view, h, !1, a, b, c, c.ctrlKey && c.altKey)
          );
          return !0;
        }
        h = !1;
        d ||
          ((h = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb)),
          (d = h.node),
          (h = null !== h.cf));
        d || (d = this.view.aa.cp(c.target));
        if (h) return !0;
        h = d && Qc(d) && 2 > this.view.selection.length && !d.om();
        f = this.view.kg.kp(a, b);
        if (d && this.view.Tb.has(d.zc()) && !this.view.aa.Ep(d)) {
          f = d === this.view.Ja;
          var k = this.view.Sg(d);
          zi(
            "wasEditNode: %s, wasSelected: %s curselsize=%s",
            f,
            k,
            this.view.selection.length
          );
          k || (c.shiftKey || this.view.qb(), this.view.We(d), this.view.vc());
          var l = this.Bt(d, a, b, c),
            n = l.handle;
          l = l.Ja;
          if (n && l)
            return this.view.Za(new Ai(this.view, l, n, a, b, this, c)), !0;
          if (h) return !1;
          this.view.Za(
            new Be(
              this.view,
              this.view.hk ? new ve(pe, d.Na(), d.ya) : new we(),
              !f && k,
              a,
              b,
              c,
              c.ctrlKey && c.altKey
            )
          );
        } else if (this.view.gv(a, b)) {
          if (h) return !1;
          this.view.Za(
            new Be(
              this.view,
              this.view.hk
                ? new ve(
                    pe,
                    this.view.selection[0].Na(),
                    this.view.selection[0].ya
                  )
                : new we(),
              !0,
              a,
              b,
              c,
              c.ctrlKey && c.altKey
            )
          );
        } else {
          if (!this.view.ha.nz())
            return (
              zi("Disabled select box -- mobile touch active."),
              this.view.ph(null),
              this.view.qb(),
              this.view.vc(),
              this.view.la(),
              !1
            );
          0 == f.length &&
            (this.view.ph(null), this.view.Za(new ze(this.view, this, a, b)));
        }
        return !0;
      };
      c.prototype.Ib = function(a, b, c) {
        var d = this.view.kg.kp(a, b),
          f = "default",
          h = "";
        d.length && !u.qf(c.Bb.target) && ((f = Hd(d[0].hb)), (h = d[0].id));
        c.Bb.target instanceof HTMLElement &&
          c.Bb.target.matches("[z-editable], [z-editable] *") &&
          (f = "text");
        d = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb);
        this.view.AC(d.cf);
        d.node &&
          ((c = this.Bt(d.node, a, b, c).handle)
            ? (f = (c instanceof Object ? c.Xf() : "") || "default")
            : d.node.id !== h && (f = "default"));
        "default" === f && (c = this.view.It(a, b)) && (f = c.Xf());
        this.view.Jb(f);
        return !1;
      };
      c.prototype.Bt = function(a, b, c, e) {
        if (!u.qf(e.Bb.target)) {
          for (e = null; ; ) {
            if (a && 0 != (a.lb & 16) && a.Wt()) {
              e = a;
              break;
            }
            if (a && a.parent && Pc(a.parent)) a = a.parent;
            else break;
          }
          if (e)
            return {
              handle: e.Xh(b, c, (1 / this.view.scale) * this.Bq),
              Ja: e,
            };
        }
        return { handle: null, Ja: null };
      };
      c.prototype.Wb = function() {
        zi("onMouseUp");
        return !1;
      };
      c.prototype.Zp = function(a, b, c) {
        var d = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb);
        d.node &&
          (this.view.za.ta("node-clicked", d.node.id, a, b),
          d.cf && d.cf.click(d.node, c.Bb));
        return !1;
      };
      c.prototype.$p = function(a, b, c) {
        zi("Mouse drag!");
        if (this.Bc.active) return !0;
        if (
          1 !== c.buttons ||
          (u.qf(c.getData("target")) && !this.view.Fp) ||
          this.view.ha.get("readOnly")
        )
          return !1;
        b = this.view.oe(c.wb, c.xb, !0);
        a = this.view.kg.kp(b.x, b.y);
        if (
          (b = a.length
            ? this.view.aa.Fb(a[0].id)
            : this.view.aa.Hb(b.x, b.y, this.view.scale, this.view.Tb).node) &&
          Rc(b) &&
          this.view.Tb.has(b.zc())
        ) {
          var d = b.da.hasAttribute("z-fixture");
          if (!d) {
            d = void 0;
            var f;
            if ((f = a.length))
              a: {
                switch (a[0].hb) {
                  case 25:
                  case 33:
                  case 19:
                  case 34:
                  case 22:
                  case 36:
                  case 28:
                  case 40:
                    f = !0;
                    break a;
                }
                f = !1;
              }
            f && b.da.hasAttribute("z-sizeable") && !b.ia("lockSize")
              ? (d = new yi(this.view, b, a[0].hb))
              : b.ia("lockPosition") ||
                (c.ctrlKey &&
                  c.altKey &&
                  ((b = this.view.aa.Da(
                    this.view.aa.duplicate([b.id], new J())[0],
                    !1
                  )),
                  this.view.update()),
                b &&
                  Rc(b) &&
                  ((this.view.Sg(b) && 1 !== this.view.selection.length) ||
                  b.om()
                    ? zi("Not dragging html -- multiple nodes selected.")
                    : (d = new Yf(this.view, c, b, 0))));
            d && this.view.Za(d);
          }
        }
        if (!b) {
          a: {
            for (a = c.Bb.target; a; ) {
              if (a.hasAttribute("z-drag-to-create")) {
                b = { da: a, type: a.getAttribute("z-drag-to-create") };
                break a;
              }
              a = a.parentElement;
            }
            b = null;
          }
          if (b) {
            a = O.Ft(b.type);
            a.$component = b.type;
            b = b.da;
            d = {};
            for (f = 0; f < b.attributes.length; f++) {
              var h = b.attributes[f].name,
                k = b.attributes[f].value;
              if (h.startsWith("z-prop:")) {
                h = h.substr(7);
                for (var l = !1, n = "", r = 0; r < h.length; r++) {
                  var v = h[r];
                  "-" === v
                    ? (l = !0)
                    : l
                    ? ((n += v.toUpperCase()), (l = !1))
                    : (n += v.toLowerCase());
                }
                h = n;
                k = Se.Cl(d, k, b);
                a[h] = k;
              }
            }
            b = new Xg(this.view.aa.uj(), this.view.aa);
            b.Xb(a);
            b.format(this.view.ma, this.view.request);
            this.view.Za(new Yf(this.view, c, b, 1));
          } else
            (b = this.view.aa.cp(c.target)) &&
              Rc(b) &&
              ((d = b.da.hasAttribute("z-fixture")) ||
                this.view.Za(new Yf(this.view, c, b, 2)));
        }
        return !1;
      };
      c.prototype.ke = function(a, b) {
        zi("keyboard: %s on target %s", a, b.target.tagName);
        if (!u.qf(b.target, b)) {
          var c = !0,
            e = this.view.ha.get("nudge");
          b && b.ctrlKey && (e = this.view.ha.get("preciseNudge"));
          var f = this.view.Ra.Mb;
          switch (a) {
            case "bring-to-front":
              this.view.Rd(0);
              break;
            case "send-to-back":
              this.view.Rd(1);
              break;
            case "left":
              f ||
                this.view.wm(-1, 0, e) ||
                ((this.view.Cb = Math.min(this.view.Cb + 16, 0)),
                this.view.ud(),
                this.view.la());
              break;
            case "right":
              f ||
                this.view.wm(1, 0, e) ||
                ((a = this.view.Uo().width),
                (this.view.Cb = Math.max(
                  -(a * this.view.scale - a),
                  this.view.Cb - 16
                )),
                this.view.ud(),
                this.view.la());
              break;
            case "up":
              f ||
                this.view.wm(0, -1, e) ||
                ((this.view.Db = Math.min(this.view.Db + 16, 0)),
                this.view.ud(),
                this.view.la());
              break;
            case "down":
              f ||
                this.view.wm(0, 1, e) ||
                ((a = this.view.Uo().height),
                (this.view.Db = Math.max(
                  -(a * this.view.scale - a),
                  this.view.Db - 16
                )),
                this.view.ud(),
                this.view.la());
              break;
            case "select-none":
              this.view.qb();
              this.view.vc();
              this.view.la();
              f && this.view.Pc.ta("goto-toolbar");
              break;
            case "select-all":
              var h = [];
              this.view.aa.wc(function(a) {
                h.push(a);
              });
              this.view.selectNodes(h);
              this.view.la();
              f && this.view.Pc.ta("goto-toolbar");
              break;
            case "duplicate":
              this.view.duplicate();
              break;
            case "move-up":
              this.view.Rd(2);
              break;
            case "move-down":
              this.view.Rd(3);
              break;
            case "delete":
              this.view.bj();
              break;
            case "curve-tool":
              this.view.Us({});
              break;
            case "line-tool":
              this.view.vu({}, !1, !1, !1);
              break;
            case "group":
              this.view.group();
              break;
            case "ungroup":
              this.view.Bi();
              break;
            case "undo":
              this.view.Uc();
              break;
            case "redo":
              this.view.ne();
              break;
            case "cut":
              this.view.yo();
              break;
            case "copy":
              this.view.xg(!1, this.view.Rc(!1));
              break;
            case "paste":
              this.view.ak();
              break;
            case "zoom-normal":
              this.view.ha.get("allowZoom")
                ? this.view.$d(1)
                : zi("Zooming is disabled.");
              break;
            case "zoom-in":
              this.view.ha.get("allowZoom")
                ? this.view.zn()
                : zi("Zooming is disabled.");
              break;
            case "zoom-out":
              this.view.ha.get("allowZoom")
                ? this.view.An()
                : zi("Zooming is disabled.");
              break;
            default:
              c = !1;
          }
          c && (b.preventDefault(), b.stopPropagation());
          return c;
        }
      };
      c.prototype.je = function(a, b) {
        b
          ? ((this.view.uc = a), (this.view.kc = a), (b = "fillStyle"))
          : ((this.view.$c = a), (b = "strokeStyle"));
        this.view.setProperty(b, a);
      };
      c.prototype.bg = function(a, b) {
        b
          ? ((this.view.uc = ec(this.view.uc, a)),
            (this.view.kc = ec(this.view.kc, a)))
          : (this.view.$c = ec(this.view.$c, a));
        this.view.Oq(a, b);
      };
      c.prototype.Yp = function(a, b) {
        zi("onDoubleClick");
        var c = this.view.aa.Hb(a, b, this.view.scale, this.view.Tb).node;
        zi("hittest: %s, hasText: %s", null !== c, null !== c && c.Pg());
        this.view.za.ta("double-click", a, b, c ? c.id : null);
        if (
          c &&
          "PathNode" === c.type() &&
          !this.view.ha.get("allowTextInShape")
        )
          zi("Editing text in shape is disabled.");
        else if (c && c.Pg() && !this.view.ha.get("readOnly"))
          zi("Text double-clicked."),
            this.view.fr({}),
            this.view.ra instanceof De && this.view.ra.Zq(c, a, b);
        else return !1;
        return !0;
      };
      c.prototype.Ad = function() {
        return "pick";
      };
      return c;
    })();
  var Ai = (function() {
    function c(a, b, c, e, f, h, k) {
      this.view = a;
      this.node = b;
      this.handle = c;
      this.ni = h;
      this.xb = this.wb = 0;
      this.log = A.create("MoveEditNode");
      b.Ml(c);
      this.ob = b.ia("snap") || 0;
      this.Ab(e, f, k);
    }
    c.prototype.xd = function() {
      this.log("Entering MoveEditNode");
    };
    c.prototype.Ac = function() {
      this.view.Ne(!1);
      this.log("Leaving MoveEditNode");
    };
    c.prototype.Ab = function(a, b, c) {
      b = this.view.ob(new F(a, b), this.ob || c);
      a = b.x;
      b = b.y;
      this.log("onMouseDown(%s,%s)", a, b);
      this.wb = a;
      this.xb = b;
      this.view.Ne(!0);
      return !0;
    };
    c.prototype.Ib = function(a, b, c) {
      b = this.view.ob(new F(a, b), this.ob || c);
      a = b.x;
      b = b.y;
      this.node.Xb(this.node.Je(this.handle, a, b));
      this.node.format(this.view.ma, this.view.request);
      this.view.la();
      return !1;
    };
    c.prototype.Wb = function(a, b, c) {
      var d = this;
      c = this.view.ob(new F(a, b), this.ob || c);
      a = c.x;
      b = c.y;
      this.log("onMouseUp(%s,%s)", a, b, this.wb, this.xb);
      a !== this.wb || b !== this.xb
        ? (this.node.Xb(this.node.Je(this.handle, this.wb, this.xb)),
          this.view.aa.transaction(function() {
            d.view.aa.Je(d.node.id, d.handle, a, b);
          }))
        : this.view.wC(this.node.id, this.handle);
      this.view.la();
      this.view.Za(this.ni || new Ef(this.view));
      return !0;
    };
    return c;
  })();
}.call(typeof module !== "undefined" ? module : undefined));
//# sourceMappingURL=zwibbler-demo.js.map
