/**
 *    Zwibbler
 *
 *    Copyright 2019 Hanov Solutions Inc. All Rights Reserved. This software is
 *    NOT open source. For licensing information, contact the author.
 *
 *    steve.hanov@gmail.com
 *
 * @format
 * @license
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
				s ? "Object is not iterable." : "Symbol.iterator is not defined.",
			);
		};
	var ba =
			"function" == typeof Object.defineProperties
				? Object.defineProperty
				: function(c, a, b) {
						c != Array.prototype && c != Object.prototype && (c[a] = b.value);
				  },
		da =
			"undefined" != typeof window && window === this
				? this
				: "undefined" != typeof global && null != global
				? global
				: this;
	function ea() {
		ea = function() {};
		da.Symbol || (da.Symbol = fa);
	}
	var fa = (function() {
		var c = 0;
		return function(a) {
			return "jscomp_symbol_" + (a || "") + c++;
		};
	})();
	function ha() {
		ea();
		var c = da.Symbol.iterator;
		c || (c = da.Symbol.iterator = da.Symbol("iterator"));
		"function" != typeof Array.prototype[c] &&
			ba(Array.prototype, c, {
				configurable: !0,
				writable: !0,
				value: function() {
					return ia(this);
				},
			});
		ha = function() {};
	}
	function ia(c) {
		var a = 0;
		return ja(function() {
			return a < c.length ? { done: !1, value: c[a++] } : { done: !0 };
		});
	}
	function ja(c) {
		ha();
		c = { next: c };
		c[da.Symbol.iterator] = function() {
			return this;
		};
		return c;
	}
	function ka(c, a) {
		ha();
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
	function ma(c, a) {
		if (a) {
			var b = da;
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
				ba(b, c, { configurable: !0, writable: !0, value: a });
		}
	}
	ma("Array.prototype.values", function(c) {
		return c
			? c
			: function() {
					return ka(this, function(a, b) {
						return b;
					});
			  };
	});
	function oa(c) {
		ha();
		var a = c[Symbol.iterator];
		return a ? a.call(c) : ia(c);
	}
	ma("Promise", function(c) {
		function a(a) {
			this.yk = 0;
			this.Dq = void 0;
			this.li = [];
			var b = this.Ao();
			try {
				a(b.resolve, b.reject);
			} catch (l) {
				b.reject(l);
			}
		}
		function b() {
			this.Pf = null;
		}
		function d(b) {
			return b instanceof a
				? b
				: new a(function(a) {
						a(b);
				  });
		}
		if (c) return c;
		b.prototype.Hs = function(a) {
			null == this.Pf && ((this.Pf = []), this.Hx());
			this.Pf.push(a);
		};
		b.prototype.Hx = function() {
			var a = this;
			this.Is(function() {
				a.gz();
			});
		};
		var e = da.setTimeout;
		b.prototype.Is = function(a) {
			e(a, 0);
		};
		b.prototype.gz = function() {
			for (; this.Pf && this.Pf.length; ) {
				var a = this.Pf;
				this.Pf = [];
				for (var b = 0; b < a.length; ++b) {
					var d = a[b];
					a[b] = null;
					try {
						d();
					} catch (n) {
						this.Ix(n);
					}
				}
			}
			this.Pf = null;
		};
		b.prototype.Ix = function(a) {
			this.Is(function() {
				throw a;
			});
		};
		a.prototype.Ao = function() {
			function a(a) {
				return function(e) {
					d || ((d = !0), a.call(b, e));
				};
			}
			var b = this,
				d = !1;
			return { resolve: a(this.yC), reject: a(this.vq) };
		};
		a.prototype.yC = function(b) {
			if (b === this)
				this.vq(new TypeError("A Promise cannot resolve to itself"));
			else if (b instanceof a) this.oD(b);
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
				d ? this.xC(b) : this.Gt(b);
			}
		};
		a.prototype.xC = function(a) {
			var b = void 0;
			try {
				b = a.then;
			} catch (l) {
				this.vq(l);
				return;
			}
			"function" == typeof b ? this.pD(b, a) : this.Gt(a);
		};
		a.prototype.vq = function(a) {
			this.fw(2, a);
		};
		a.prototype.Gt = function(a) {
			this.fw(1, a);
		};
		a.prototype.fw = function(a, b) {
			if (0 != this.yk)
				throw Error(
					"Cannot settle(" +
						a +
						", " +
						b +
						"): Promise already settled in state" +
						this.yk,
				);
			this.yk = a;
			this.Dq = b;
			this.hz();
		};
		a.prototype.hz = function() {
			if (null != this.li) {
				for (var a = 0; a < this.li.length; ++a) f.Hs(this.li[a]);
				this.li = null;
			}
		};
		var f = new b();
		a.prototype.oD = function(a) {
			var b = this.Ao();
			a.ll(b.resolve, b.reject);
		};
		a.prototype.pD = function(a, b) {
			var d = this.Ao();
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
			this.ll(e(b, c), e(d, f));
			return h;
		};
		a.prototype.catch = function(a) {
			return this.then(void 0, a);
		};
		a.prototype.ll = function(a, b) {
			function d() {
				switch (e.yk) {
					case 1:
						a(e.Dq);
						break;
					case 2:
						b(e.Dq);
						break;
					default:
						throw Error("Unexpected state: " + e.yk);
				}
			}
			var e = this;
			null == this.li ? f.Hs(d) : this.li.push(d);
		};
		a.resolve = d;
		a.reject = function(b) {
			return new a(function(a, d) {
				d(b);
			});
		};
		a.race = function(b) {
			return new a(function(a, e) {
				for (var c = oa(b), f = c.next(); !f.done; f = c.next())
					d(f.value).ll(a, e);
			});
		};
		a.all = function(b) {
			var e = oa(b),
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
								d(c.value).ll(f(h.length - 1), b),
								(c = e.next());
						while (!c.done);
				  });
		};
		return a;
	});
	ma("Array.prototype.keys", function(c) {
		return c
			? c
			: function() {
					return ka(this, function(a) {
						return a;
					});
			  };
	});
	ma("String.prototype.startsWith", function(c) {
		return c
			? c
			: function(a, b) {
					if (null == this)
						throw new TypeError(
							"The 'this' value for String.prototype.startsWith must not be null or undefined",
						);
					if (a instanceof RegExp)
						throw new TypeError(
							"First argument to String.prototype.startsWith must not be a regular expression",
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
	ma("Array.prototype.fill", function(c) {
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
	ma("Math.sign", function(c) {
		return c
			? c
			: function(a) {
					a = Number(a);
					return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1;
			  };
	});
	ma("Array.prototype.entries", function(c) {
		return c
			? c
			: function() {
					return ka(this, function(a, b) {
						return [a, b];
					});
			  };
	});
	ma("Array.from", function(c) {
		return c
			? c
			: function(a, b, d) {
					ha();
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
	function pa(c, a) {
		return Object.prototype.hasOwnProperty.call(c, a);
	}
	ma("WeakMap", function(c) {
		function a(a) {
			this.Hj = (f += Math.random() + 1).toString();
			if (a) {
				ea();
				ha();
				a = oa(a);
				for (var b; !(b = a.next()).done; ) (b = b.value), this.set(b[0], b[1]);
			}
		}
		function b(a) {
			pa(a, e) || ba(a, e, { value: {} });
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
			if (!pa(a, e)) throw Error("WeakMap key fail: " + a);
			a[e][this.Hj] = d;
			return this;
		};
		a.prototype.get = function(a) {
			return pa(a, e) ? a[e][this.Hj] : void 0;
		};
		a.prototype.has = function(a) {
			return pa(a, e) && pa(a[e], this.Hj);
		};
		a.prototype.delete = function(a) {
			return pa(a, e) && pa(a[e], this.Hj) ? delete a[e][this.Hj] : !1;
		};
		return a;
	});
	ma("Map", function(c) {
		function a() {
			var a = {};
			return (a.qa = a.next = a.head = a);
		}
		function b(a, b) {
			var d = a.qf;
			return ja(function() {
				if (d) {
					for (; d.head != a.qf; ) d = d.qa;
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
			var e = a.dj[d];
			if (e && pa(a.dj, d))
				for (a = 0; a < e.length; a++) {
					var c = e[a];
					if ((b !== b && c.key !== c.key) || b === c.key)
						return { id: d, list: e, index: a, Pc: c };
				}
			return { id: d, list: e, index: -1, Pc: void 0 };
		}
		function e(b) {
			this.dj = {};
			this.qf = a();
			this.size = 0;
			if (b) {
				b = oa(b);
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
						b = new c(oa([[a, "s"]]));
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
		ea();
		ha();
		var f = new WeakMap();
		e.prototype.set = function(a, b) {
			a = 0 === a ? 0 : a;
			var e = d(this, a);
			e.list || (e.list = this.dj[e.id] = []);
			e.Pc
				? (e.Pc.value = b)
				: ((e.Pc = {
						next: this.qf,
						qa: this.qf.qa,
						head: this.qf,
						key: a,
						value: b,
				  }),
				  e.list.push(e.Pc),
				  (this.qf.qa.next = e.Pc),
				  (this.qf.qa = e.Pc),
				  this.size++);
			return this;
		};
		e.prototype.delete = function(a) {
			a = d(this, a);
			return a.Pc && a.list
				? (a.list.splice(a.index, 1),
				  a.list.length || delete this.dj[a.id],
				  (a.Pc.qa.next = a.Pc.next),
				  (a.Pc.next.qa = a.Pc.qa),
				  (a.Pc.head = null),
				  this.size--,
				  !0)
				: !1;
		};
		e.prototype.clear = function() {
			this.dj = {};
			this.qf = this.qf.qa = a();
			this.size = 0;
		};
		e.prototype.has = function(a) {
			return !!d(this, a).Pc;
		};
		e.prototype.get = function(a) {
			return (a = d(this, a).Pc) && a.value;
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
	ma("Set", function(c) {
		function a(a) {
			this.Ie = new Map();
			if (a) {
				a = oa(a);
				for (var b; !(b = a.next()).done; ) this.add(b.value);
			}
			this.size = this.Ie.size;
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
						d = new c(oa([a]));
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
		ea();
		ha();
		a.prototype.add = function(a) {
			a = 0 === a ? 0 : a;
			this.Ie.set(a, a);
			this.size = this.Ie.size;
			return this;
		};
		a.prototype.delete = function(a) {
			a = this.Ie.delete(a);
			this.size = this.Ie.size;
			return a;
		};
		a.prototype.clear = function() {
			this.Ie.clear();
			this.size = 0;
		};
		a.prototype.has = function(a) {
			return this.Ie.has(a);
		};
		a.prototype.entries = function() {
			return this.Ie.entries();
		};
		a.prototype.values = function() {
			return this.Ie.values();
		};
		a.prototype.keys = a.prototype.values;
		a.prototype[Symbol.iterator] = a.prototype.values;
		a.prototype.forEach = function(a, d) {
			var b = this;
			this.Ie.forEach(function(e) {
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
			c.Ll = function(a) {
				a.toLowerCase() in c.Mr && (a = c.Mr[a.toLowerCase()]);
				var b = /#([0-9a-f])([0-9a-f])([0-9a-f])/i,
					d = /rgb\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *\)/,
					e = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/,
					f = /hsl\( *([0-9]+) *, *([0-9]+)% *, *([0-9]+)% *\)/;
				var h = /#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])?/i.exec(
					a,
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
							  (b = qa(e, d, a + 1 / 3)),
							  (h = qa(e, d, a)),
							  (d = qa(e, d, a - 1 / 3))),
						(a = b),
						(b = h),
						(h = 1);
				else return null;
				return new c(c.RGBA, [a, b, d, h]);
			};
			c.hf = function(a) {
				return c.Ll(a) || new c(c.RGBA, [1, 0, 1, 1]);
			};
			c.aF = function(a) {
				var b = /#[0-9a-f]+|rgba?\([^\)]+\)|[a-z]+/gi,
					d = [],
					e;
				do (e = b.exec(a)) && d.push(e[0]);
				while (e);
				return d;
			};
			c.prototype.toString = function() {
				function a(a) {
					a = ra(a);
					return 16 > a ? "0" + a.toString(16) : a.toString(16);
				}
				var b = this.Mh(c.RGBA);
				return 1 === b.values[3]
					? "#" + a(b.values[0]) + a(b.values[1]) + a(b.values[2])
					: "rgba(" +
							ra(b.values[0]) +
							"," +
							ra(b.values[1]) +
							"," +
							ra(b.values[2]) +
							"," +
							b.values[3] +
							")";
			};
			c.prototype.Mh = function(a) {
				return c.uy[this.type][a](this);
			};
			c.prototype.bc = function(a) {
				a.type !== this.type && (a = a.Mh(this.type));
				if (this.type === c.yh) {
					var b = this.values[0],
						d = a.values[0];
					b =
						b > d ? Math.min(b - d, d - b + 360) : Math.min(d - b, b - d + 360);
					b /= 360;
					return Math.pow(
						b * b +
							(this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) +
							(this.values[2] - a.values[2]) * (this.values[2] - a.values[2]),
						0.5,
					);
				}
				return Math.pow(
					(this.values[0] - a.values[0]) * (this.values[0] - a.values[0]) +
						(this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) +
						(this.values[2] - a.values[2]) * (this.values[2] - a.values[2]),
					0.5,
				);
			};
			c.prototype.My = function(a) {
				var b = a;
				var d = this.Mh(q.Qn);
				b = b.Mh(q.Qn);
				a = d.values[0];
				var e = d.values[1],
					c = d.values[2],
					h = b.values[0],
					k = b.values[1],
					l = b.values[2];
				b = sa(ta(e, 2) + ta(c, 2));
				d = sa(ta(k, 2) + ta(l, 2));
				var n = (b + d) / 2;
				n = 0.5 * (1 - sa(ta(n, 7) / (ta(n, 7) + ta(25, 7))));
				e *= 1 + n;
				var r = (1 + n) * k;
				k = sa(ta(e, 2) + ta(c, 2));
				n = sa(ta(r, 2) + ta(l, 2));
				var v = ua(c, e);
				r = ua(l, r);
				c = h - a;
				l = n - k;
				if (0 === b * d) e = 0;
				else if (180 >= va(r - v)) e = r - v;
				else if (180 < r - v) e = r - v - 360;
				else if (-180 > r - v) e = r - v + 360;
				else throw Error();
				e = 2 * sa(k * n) * wa(((xa / 180) * e) / 2);
				a = (a + h) / 2;
				h = (k + n) / 2;
				if (0 === b * d) d = v + r;
				else if (180 >= va(v - r)) d = (v + r) / 2;
				else if (180 < va(v - r) && 360 > v + r) d = (v + r + 360) / 2;
				else if (180 < va(v - r) && 360 <= v + r) d = (v + r - 360) / 2;
				else throw Error();
				b =
					1 -
					0.17 * ya((xa / 180) * (d - 30)) +
					0.24 * ya((xa / 180) * d * 2) +
					0.32 * ya((xa / 180) * (3 * d + 6)) -
					0.2 * ya((xa / 180) * (4 * d - 63));
				d = 30 * za(-ta((d - 275) / 25, 2));
				k = sa(ta(h, 7) / (ta(h, 7) + ta(25, 7)));
				a = 1 + (0.015 * ta(a - 50, 2)) / sa(20 + ta(a - 50, 2));
				n = 1 + 0.045 * h;
				b = 1 + 0.015 * h * b;
				d = -2 * k * wa((xa / 180) * d * 2);
				return sa(
					ta(c / (1 * a), 2) +
						ta(l / (1 * n), 2) +
						ta(e / (1 * b), 2) +
						(l / (1 * n)) * d * (e / (1 * b)),
				);
			};
			c.RGBA = 0;
			c.Wr = 1;
			c.yh = 2;
			c.Qn = 3;
			c.DE = 3;
			c.We = "transparent";
			c.Zc = "#ffffff";
			c.Oa = "#000000";
			c.uy = [
				[Aa, Ba, Ca, Da],
				[Fa, Aa, Ga, Ha],
				[Ia, Ja, Aa, Ka],
				[La, Ma, Na, Aa],
			];
			c.Mr = {
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
		Oa = 0.9505,
		Pa = 1,
		Qa = 1.089;
	function Ia(c) {
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
	function Ca(c) {
		var a = c.values[0],
			b = c.values[1],
			d = c.values[2],
			e = Math.max(a, b, d),
			f = Math.min(a, b, d);
		return new q(q.yh, [
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
	function Ha(c) {
		function a(a) {
			return a > (6 / 29) * (6 / 29) * (6 / 29)
				? Math.pow(a, 1 / 3)
				: (1 / 3) * (29 / 6) * (29 / 6) * a + 4 / 29;
		}
		var b = a(c.values[1] / Pa);
		return new q(q.Qn, [
			116 * b - 16,
			500 * (a(c.values[0] / Oa) - b),
			200 * (b - a(c.values[2] / Qa)),
			c.values[3],
		]);
	}
	function Ma(c) {
		var a = (c.values[0] + 16) / 116,
			b = a + c.values[1] / 500,
			d = a - c.values[2] / 200,
			e = 6 / 29;
		return new q(q.Wr, [
			b > e ? Oa * b * b * b : 3 * (b - 16 / 116) * e * e * Oa,
			a > e ? Pa * a * a * a : 3 * (a - 16 / 116) * e * e * Pa,
			d > e ? Qa * d * d * d : 3 * (d - 16 / 116) * e * e * Qa,
			c.values[3],
		]);
	}
	function Ba(c) {
		for (var a = [], b = 0; 3 > b; b++)
			a[b] =
				0.04045 >= c.values[b]
					? c.values[b] / 12.92
					: Math.pow((c.values[b] + 0.055) / 1.055, 2.4);
		return new q(q.Wr, [
			0.4124 * a[0] + 0.3576 * a[1] + 0.1805 * a[2],
			0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2],
			0.0193 * a[0] + 0.1192 * a[1] + 0.9505 * a[2],
			c.values[3],
		]);
	}
	function Fa(c) {
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
	function Aa(c) {
		return new q(c.type, c.values.concat());
	}
	function Da(c) {
		return Ha(Ba(c));
	}
	function La(c) {
		return Fa(Ma(c));
	}
	function Ga(c) {
		return Ca(Fa(c));
	}
	function Ja(c) {
		return Ba(Ia(c));
	}
	function Ka(c) {
		return Da(Ia(c));
	}
	function Na(c) {
		return Ga(Ma(c));
	}
	var sa = Math.sqrt,
		ta = Math.pow,
		ya = Math.cos,
		Ra = Math.atan2,
		wa = Math.sin,
		va = Math.abs,
		za = Math.exp,
		xa = Math.PI;
	function ua(c, a) {
		if (0 === c && 0 === a) return 0;
		c = Ra(c, a) * (180 / xa);
		return 0 <= c ? c : c + 360;
	}
	function ra(c) {
		return Math.min(Math.floor(256 * c), 255);
	}
	function qa(c, a, b) {
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
	function Sa(c, a) {
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
	function Ta(c) {
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
	function Ua(c) {
		return parseFloat(c || "") || 0;
	}
	var Wa = (function() {
		function c(a) {
			this.da = a;
		}
		c.prototype.$a = function(a) {
			for (var b in a) {
				if (0 <= b.indexOf("-"))
					throw Error("setStyle: styles must be camelcase; not " + b);
				this.da.style[b] = "" + a[b];
			}
			return this;
		};
		c.prototype.nk = function(a) {
			for (var b in a) this.da.setAttribute(b, a[b]);
			return this;
		};
		c.prototype.Rd = function(a) {
			a.appendChild(this.da);
			return this;
		};
		c.prototype.Fp = function(a) {
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
		c.prototype.Ee = function(a) {
			return window.getComputedStyle(this.da)[a] || "";
		};
		c.prototype.pc = function() {
			var a = this.da.getBoundingClientRect();
			return {
				top: a.top + window.pageYOffset,
				left: a.left + window.pageXOffset,
				width: a.width,
				height: a.height,
			};
		};
		c.prototype.qk = function(a) {
			var b = (b = this.uA()) ? b.pc() : { left: 0, top: 0 };
			this.da.style.left = a.left - b.left + "px";
			this.da.style.top = a.top - b.top + "px";
		};
		c.prototype.uA = function() {
			if (!(this.da instanceof HTMLElement) || "fixed" === this.Ee("position"))
				return Va(document.body);
			for (
				var a = this.da.parentElement;
				a && "static" === Va(a).Ee("position");

			)
				a = a.parentElement;
			return a ? Va(a) : null;
		};
		c.prototype.Vl = function() {
			var a = window.getComputedStyle(this.da),
				b = {
					left: Ua(a.marginLeft),
					top: Ua(a.marginTop),
					right: Ua(a.marginRight),
					bottom: Ua(a.marginBottom),
					Rp: 0,
					Gq: 0,
					tr: 0,
					no: 0,
				};
			"content-box" === a.boxSizing &&
				((b.Rp += Ua(a.borderLeftWidth) + Ua(a.paddingLeft)),
				(b.tr += Ua(a.borderTopWidth) + Ua(a.paddingTop)),
				(b.Gq += Ua(a.borderRightWidth) + Ua(a.paddingRight)),
				(b.no += Ua(a.borderBottomWidth) + Ua(a.paddingBottom)));
			return b;
		};
		c.prototype.ee = function(a) {
			this.da.classList.add(a);
			return this;
		};
		c.prototype.pr = function(a, b) {
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
		c.prototype.ng = function(a) {
			this.da.innerText = a;
			return this;
		};
		return c;
	})();
	function Va(c, a) {
		if ("string" === typeof c) {
			if ("<" == c[0]) return (a = Va.Lo(c)), new Wa(a[0]);
			c = new Wa(document.createElement(c));
			a && c.nk(a);
			return c;
		}
		return new Wa(c);
	}
	var Xa = null;
	(function(c) {
		c.oc = function(a) {
			return "jQuery" in window && a instanceof window.jQuery
				? a[0]
				: a instanceof HTMLElement
				? a
				: "string" === typeof a
				? document.querySelector(a)
				: null;
		};
		c.em = function() {
			var a = document.documentElement,
				b = a.scrollWidth > a.clientWidth;
			a = a.scrollHeight > a.clientHeight ? c.Pg() : 0;
			b = b ? c.Pg() : 0;
			return {
				width: window.innerWidth - a,
				height: window.innerHeight - b,
				left: document.documentElement.scrollLeft || document.body.scrollLeft,
				top: document.documentElement.scrollTop || document.body.scrollTop,
			};
		};
		c.Pg = function() {
			if (null === Xa) {
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
				Xa = b - d;
			}
			return Xa;
		};
		c.Rt = function() {
			for (
				var a = document.getElementsByTagName("*"), b = 0, d = 0;
				d < a.length;
				d++
			) {
				var e = parseInt(c(a[d]).Ee("z-index"), 10) || 0;
				e > b && (b = e);
			}
			return b;
		};
		c.Lo = function(a) {
			var b = document.createElement("div");
			b.innerHTML = a;
			a = [];
			for (var d = b.firstChild; d; )
				d instanceof HTMLElement && a.push(d), (d = d.nextSibling);
			for (d = 0; d < a.length; d++) b.removeChild(a[d]);
			return a;
		};
		c.sf = function(a, b) {
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
		c.TA = function(a) {
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
	})(Va || (Va = {}));
	function Ya(c) {
		return new Promise(function(a, b) {
			var d = new XMLHttpRequest();
			c.mimeType && d.overrideMimeType(c.mimeType);
			c.withCredentials && (d.withCredentials = !0);
			c.responseType && (d.responseType = c.responseType);
			var e = c.method || "GET",
				f = c.mv || {},
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
						"application/x-www-form-urlencoded",
				  );
			c.cancel &&
				c.cancel.then(function() {
					d.abort();
				});
			c.dt
				? setTimeout(function() {
						d.send(y);
				  }, c.dt)
				: d.send(y);
		});
	}
	var Za = (function() {
			function c() {
				this.Hp = [];
				this.Zb = null;
			}
			c.prototype.Dp = function(a) {
				for (var b = 0, d = this.Hp; b < d.length; b++) if (d[b] === a) return;
				this.Hp.push(a);
				this.Zb ||
					((this.Zb = document.createElement("style")),
					document.head &&
						document.head.insertBefore(this.Zb, document.head.firstChild));
				this.Zb.appendChild(document.createTextNode(a));
			};
			c.prototype.Sa = function() {
				this.Zb && (Va(this.Zb).remove(), (this.Zb = null));
				this.Hp.length = 0;
			};
			return c;
		})(),
		$a = (function() {
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
		ab = (function() {
			function c() {
				this.ak = "";
				this.anchor = null;
			}
			c.prototype.Sa = function() {
				this.anchor &&
					this.anchor.parentNode &&
					this.anchor.parentNode.removeChild(this.anchor);
				"" !== this.ak && window.URL.revokeObjectURL(this.ak);
			};
			c.prototype.GC = function(a, b) {
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
				this.Nv(k, b);
			};
			c.prototype.Nv = function(a, b) {
				var d = this;
				this.Sa();
				if (window.navigator.msSaveOrOpenBlob)
					window.navigator.msSaveOrOpenBlob(a, b);
				else {
					this.ak = window.URL.createObjectURL(a);
					var e =
							/Macintosh/.test(navigator.userAgent) && "ontouchend" in document,
						c = navigator.userAgent.toLowerCase().match(/(iphone|ipad)/);
					a = "application/pdf" === a.type;
					c || (e && a)
						? window.open(this.ak, "_blank")
						: ((this.anchor = document.createElement("a")),
						  (this.anchor.innerHTML = "download"),
						  this.anchor.setAttribute("href", this.ak),
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
		bb = (function() {
			function c(a, b) {
				this.element = a;
				this.dg = null;
				"ResizeObserver" in window &&
					((this.dg = new window.ResizeObserver(function() {
						b();
					})),
					this.dg.observe(a));
			}
			c.prototype.Sa = function() {
				this.dg && this.dg.unobserve(this.element);
			};
			c.Xw = function() {
				return "ResizeObserver" in window;
			};
			return c;
		})(),
		u = Va;
	var cb = (function() {
		function c(a, b, d, e, c) {
			void 0 === a && (a = "transparent");
			void 0 === b && (b = 0);
			void 0 === d && (d = 0);
			void 0 === e && (e = 0);
			void 0 === c && (c = 0);
			this.Lc = a;
			this.left = b;
			this.top = d;
			this.right = e;
			this.bottom = c;
			this.zIndex = 1;
			this.insertBefore = null;
			this.va = document.createElement("div");
		}
		c.prototype.rf = function() {
			this.va && u(this.va).remove();
		};
		c.prototype.show = function(a) {
			u(this.va)
				.$a({
					position: "fixed",
					background: this.Lc,
					left: this.left + "px",
					top: this.top + "px",
					right: this.right + "px",
					bottom: this.bottom + "px",
					display: "block",
				})
				.ee("zwibbler-popup-overlay");
			this.va.addEventListener("click", a);
			this.va.style.zIndex = this.zIndex.toString();
			this.insertBefore
				? this.insertBefore.parentNode &&
				  this.insertBefore.parentNode.insertBefore(this.va, this.insertBefore)
				: document.body.appendChild(this.va);
		};
		return c;
	})();
	var db = (function() {
		function c(a, b) {
			this.name = b;
			this.va = u("div")
				.$a({ borderTop: "1px solid #888", padding: "5px", cursor: "default" })
				.Rd(a);
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
	var fb = (function() {
		function c(a, b, d) {
			this.parentElement = a;
			this.stack = [];
			this.mh = !1;
			this.Ef = [];
			this.vD = !1;
			this.kv = "red";
			this.first = u("CANVAS", { width: b, height: d }).Rd(a).da;
			this.stack.push({
				canvas: this.first,
				ma: this.first.getContext("2d"),
				Ri: {},
			});
			this.he = c.Pr(this.stack[0].ma);
			this.width = this.first.width;
			this.height = this.first.height;
			this.Yk(this.first);
		}
		c.prototype.gD = function(a) {
			for (var b = 0, d = this.stack; b < d.length; b++)
				d[b].canvas.style.outline = "4px solid " + a;
			this.kv = a;
		};
		c.prototype.nx = function() {
			if (void 0 === a) var a = this.stack.length;
			var b = u("CANVAS")
				.$a({
					position: "absolute",
					left: this.first.offsetLeft + "px",
					top: this.first.offsetTop + "px",
					pointerEvents: "none",
					outline: "4px solid " + this.kv,
				})
				.ee("zwibbler-overlay").da;
			this.Yk(b);
			this.stack.splice(a, 0, { canvas: b, ma: b.getContext("2d"), Ri: {} });
			a === this.stack.length - 1
				? this.parentElement.insertBefore(b, null)
				: this.parentElement.insertBefore(b, this.stack[a + 1].canvas);
			b.getContext("2d");
		};
		c.prototype.Kd = function(a, b, d) {
			var e = this;
			this.stack[a].Ri[b] = d;
			if (!this.mh) {
				var c = new Date().getTime();
				this.mh = !0;
				requestAnimationFrame(function() {
					var a = new Date().getTime(),
						b = e.cp();
					e.mh = !1;
					for (var d = 0, f = e.stack; d < f.length; d++) {
						var r = f[d],
							v = !0,
							w;
						for (w in r.Ri) {
							var x = r.ma;
							v &&
								(x.setTransform(b, 0, 0, b, 0, 0),
								x.clearRect(0, 0, e.width, e.height),
								(v = !1));
							r.Ri[w](x, b);
						}
						r.Ri = {};
					}
					if (e.vD) {
						e.Ef.push({ Nb: a, latency: a - c, $y: new Date().getTime() - a });
						25 < e.Ef.length && e.Ef.shift();
						x = f = d = 0;
						for (r = e.Ef; x < r.length; x++)
							(v = r[x]), (d += v.latency), (f += v.$y);
						d = Math.round((d / e.Ef.length) * 10) / 10;
						f = Math.round((f / e.Ef.length) * 10) / 10;
						a =
							1 < e.Ef.length
								? Math.round((e.Ef.length / ((a - e.Ef[0].Nb) / 1e3)) * 100) /
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
							13,
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
		c.prototype.cp = function() {
			var a = c.Pr(this.stack[0].ma);
			if (a !== this.he) {
				this.he = a;
				a = 0;
				for (var b = this.stack; a < b.length; a++) this.Yk(b[a].canvas);
			}
			return this.he;
		};
		c.prototype.mg = function(a, b) {
			this.width = a;
			this.height = b;
			a = 0;
			for (b = this.stack; a < b.length; a++) this.Yk(b[a].canvas);
		};
		c.Pr = function(a) {
			return (
				(window.devicePixelRatio || 1) /
				(a.qE || a.qB || a.tB || a.zB || a.Lx || 1)
			);
		};
		c.prototype.Yk = function(a) {
			a.width = this.width * this.he;
			a.height = this.height * this.he;
			a.style.width = this.width + "px";
			a.style.height = this.height + "px";
			a.getContext("2d").setTransform(this.he, 0, 0, this.he, 0, 0);
		};
		return c;
	})();
	var z = new ((function() {
		function c() {
			this.disabled = {};
			this.He = [];
			this.Zs = !1;
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
				d.eB(a, arguments);
			};
		};
		c.prototype.addListener = function(a) {
			this.He.push(a);
			return a;
		};
		c.prototype.removeListener = function(a) {
			for (var b = 0; b < this.He.length; b++)
				if (this.He[b] === a) {
					this.He.splice(b, 1);
					break;
				}
		};
		c.prototype.cz = function() {
			this.Zs ||
				((this.Zs = !0),
				this.addListener(function(a, b) {
					console.log(a + ": " + b);
				}));
		};
		c.prototype.eB = function(a, b) {
			var d = [],
				e;
			if (0 !== this.He.length) {
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
				for (e = this.He; d < e.length; d++) (0, e[d])(a, b);
			}
		};
		return c;
	})())();
	var gb = z.create("DRAGSORT");
	function hb(c) {
		function a(a) {
			"dragover" !== a.type && gb(a.type);
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
						null !== d[e].getAttribute(c.Ms) &&
							d[e].setAttribute("sort-index", e.toString());
					a.dataTransfer.setData("text", b.id);
					a.dataTransfer.dropEffect = "move";
					h = f = b;
					a.stopPropagation();
				} else
					"dragover" === a.type && h && f.parentNode === b.parentNode
						? (h.classList.remove(c.kq),
						  (h = b),
						  h.classList.add(c.kq),
						  a.preventDefault())
						: "dragend" === a.type && h && f.parentNode === b.parentNode
						? (h.classList.remove(c.kq),
						  (b = parseInt(h.getAttribute("sort-index") || "0")),
						  (d = parseInt(f.getAttribute("sort-index") || "0")),
						  c.JB(d, b),
						  a.preventDefault(),
						  a.stopPropagation())
						: "drop" === a.type && (a.preventDefault(), a.stopPropagation());
		}
		var b = c.parent.$w;
		c.parent.$w = !0;
		for (var d = c.parent.children, e = 0; e < d.length; e++)
			null !== d[e].getAttribute(c.Ms) &&
				d[e].setAttribute("draggable", "true");
		if (b) return function() {};
		u(c.parent).addEventListener("dragstart dragover dragend drop", a);
		var f, h;
		return function() {
			u(c.parent).removeEventListener("dragstart dragover dragend drop", a);
		};
	}
	var jb = (function() {
			function c() {
				this.items = [];
				this.next = 0;
				this.Tf = !1;
				this.log = z.create("UNDOSTACK");
			}
			c.prototype.wa = function(a, b, d) {
				void 0 === b && (b = !1);
				a = a instanceof ib ? [a] : a;
				if (0 !== a.length) {
					this.next < this.items.length && (this.items.length = this.next);
					if (!b) for (b = 0; b < a.length; b++) a[b].Sc(d);
					for (d = this.top(); d; )
						if (d[d.length - 1].Xg(a[0])) {
							if ((a.shift(), 0 === a.length)) break;
						} else break;
					a.length && this.items.push(a);
					this.Tf = !0;
					this.next = this.items.length;
				}
			};
			c.prototype.Wc = function(a) {
				this.log("Undo index %s of %s", this.next, this.items.length);
				if (this.af()) {
					for (var b = this.items[--this.next], d = b.length - 1; 0 <= d; d--)
						b[d].Wc(a);
					return (this.Tf = !0);
				}
				return !1;
			};
			c.prototype.qe = function(a) {
				this.log("Redo index %s of %s", this.next, this.items.length);
				if (this.$e()) {
					for (var b = this.items[this.next++], d = 0; d < b.length; d++)
						b[d].Sc(a);
					return (this.Tf = !0);
				}
				return !1;
			};
			c.prototype.af = function() {
				return 0 < this.next;
			};
			c.prototype.$e = function() {
				return this.next < this.items.length;
			};
			c.prototype.clear = function() {
				this.next = this.items.length = 0;
				this.Tf = !1;
			};
			c.prototype.top = function() {
				return this.items.length ? this.items[this.items.length - 1] : null;
			};
			c.prototype.Tt = function() {
				return this.items.length;
			};
			return c;
		})(),
		ib = (function() {
			function c() {}
			c.prototype.Sc = function() {};
			c.prototype.Wc = function() {};
			c.prototype.Xg = function() {
				return !1;
			};
			return c;
		})();
	function kb(c, a, b) {
		this.Qa = c;
		this.ln = a;
		this.fn = b;
		this.qn = 0;
	}
	var lb = 0,
		nb = new ((function() {
			function c() {
				this.Vb = [];
				this.mr = !1;
				this.log = z.create("ImageLoader");
			}
			c.prototype.timeout = function() {
				var a = [];
				this.log("Timeout running... %s images remaining", this.Vb.length);
				for (var b = 0; b < this.Vb.length; b++)
					this.Vb[b].Qa.complete
						? this.Vb[b].fn(this.Vb[b].Qa, this.Vb[b].ln)
						: 5e3 > this.Vb[b].qn
						? ((this.Vb[b].qn += 250), a.push(this.Vb[b]))
						: this.Vb[b].fn(this.Vb[b].Qa, this.Vb[b].ln);
				this.Vb = a;
				this.Vb.length
					? setTimeout(this.timeout, 250)
					: (this.log("Timeout Stopped"), (this.mr = !1));
			};
			c.prototype.load = function(a, b, d) {
				var e = this;
				void 0 === d && (d = !1);
				0 == lb
					? this.ks(a, b, d)
					: setTimeout(function() {
							e.ks(a, b, d);
					  }, lb);
			};
			c.prototype.ks = function(a, b, d) {
				function e(a) {
					for (var b = 0; b < c.Vb.length; b++) {
						var d = c.Vb[b];
						if (d.Qa === a) return c.Vb.splice(b, 1), d;
					}
					return null;
				}
				var c = this,
					h = document.createElement("img"),
					k = new kb(h, a, b);
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
							a && b(h, a.ln);
						} else
							c.mr || ((c.mr = !0), setTimeout(c.timeout, 250), (k.qn = 250));
					},
					!1,
				);
				h.addEventListener(
					"error",
					function() {
						c.log("Error loading %s; useCors=%s disableCors=%s", a, r, d);
						e(h);
						!r || d ? b(null, k.ln) : c.load(a, b, !0);
					},
					!1,
				);
				h.src = a;
			};
			c.prototype.UC = function(a) {
				lb = a;
			};
			return c;
		})())();
	var ob = (function() {
		function c() {
			this.images = {};
		}
		c.prototype.add = function(a, b) {
			var d = this.images[a];
			d ||
				((d = { Qa: null, Rm: 0 }),
				nb.load(b, function(a) {
					d.Qa = a;
				}),
				(this.images[a] = d));
			d.Rm += 1;
		};
		c.prototype.release = function(a) {
			var b = this.images[a];
			b && (--b.Rm, 0 >= b.Rm && delete this.images[a]);
		};
		c.prototype.get = function(a) {
			return (a = this.images[a]) && a.Qa ? a.Qa : null;
		};
		return c;
	})();
	var pb = (function() {
		function c(a) {
			this.code = "en";
			this.data = {};
			this.log = z.create("LANGUAGE");
			this.data = this.nv(a, {});
		}
		c.prototype.bw = function(a) {
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
		c.prototype.co = function(a) {
			this.nv(a, this.data);
		};
		c.prototype.nv = function(a, b) {
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
				return a.fs(b, d);
			};
		};
		c.prototype.get = function(a) {
			for (var b = [], d = 1; d < arguments.length; d++)
				b[d - 1] = arguments[d];
			return this.fs(a, b);
		};
		c.prototype.fs = function(a, b) {
			var d = "<not translated:" + a + ">";
			this.code in this.data &&
				a in this.data[this.code] &&
				(d = this.data[this.code][a]);
			for (a = 0; a < b.length; a++) d = d.replace("^" + a, b[a]);
			return d;
		};
		return c;
	})();
	var qb = (function() {
		function c() {
			this.fj = [];
			this.log = z.create("DESTRUCTOR");
		}
		c.prototype.add = function(a) {
			this.fj.push(a);
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
			this.log("Running %s destructors", this.fj.length);
			for (var a = this.fj.length - 1; 0 <= a; a--) this.fj[a]();
			this.fj.length = 0;
		};
		return c;
	})();
	var rb = (function() {
		function c(a, b, d) {
			var e = this;
			void 0 === d && (d = !1);
			this.va = a;
			this.Uj = 0;
			this.Pp = {};
			this.Mb = !1;
			this.timeout = null;
			this.lines = [];
			this.filter = null;
			this.iy = "#5da700 #ed81ff #02ab34 #f92798 #59ff91 #ff6b80 #3cffe4 #ffd32b #5e8caa #ffdb7f #e5cdff #00c17e #f6f6f5 #9a861e #daff9d #808d40".split(
				" ",
			);
			this.jy = "#2f361e #6b35c2 #416323 #431b77 #af2f21 #5451ad #805221 #962e7f #456354 #a52e4f #273c4c #692d25 #455b8a #3f1a2a #382454 #774f63".split(
				" ",
			);
			this.Kh = [];
			var c = new Za();
			c.Dp(
				'\n\n.z-inner-debug.black {\n    background: #000;\n    white-space: pre-wrap;\n}\n\n.z-inner-debug.white {\n    background: #fff;\n}\n\n.z-debug-panel {\n    font-family: "monospace";\n    font-size: 12px;\n    display: flex;\n    flex-flow: column nowrap;\n    text-align: left;\n}\n\n.z-inner-debug {\n    flex: 1 1 auto;\n    overflow: scroll;\n}\n\n.z-inner-debug.black div {\n    border-bottom: 1px solid #222;\n    margin-bottom: 3px;\n}\n\n.z-inner-debug.white div {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 3px;\n}\n',
			);
			a.classList.add("z-debug-panel");
			var h = 0;
			u("input")
				.nk({
					type: "text",
					placeholder: "regexp...",
					onclick: "this.select()",
				})
				.Rd(a)
				.addEventListener("input", function(a) {
					h && window.clearTimeout(h);
					h = setTimeout(function() {
						e.ZC(a.target.value);
						h = 0;
					}, 200);
				});
			this.Xd = u("div")
				.ee("z-inner-debug")
				.Rd(a).da;
			u("button")
				.Rd(this.va)
				.$a({ flex: "0 0 auto" })
				.ng("Scroll to bottom/top")
				.addEventListener("click", function() {
					e.Xd.scrollTop = e.Js() ? 0 : e.Xd.scrollHeight;
				});
			this.aB = z.addListener(function(a, b) {
				return e.ys(a, b);
			});
			b.add(function() {
				z.removeListener(e.aB);
				c.Sa();
			});
			this.ys("DEBUG", "Debug window starting");
			u(this.Xd).ee(d ? "white" : "black");
			this.Kh = d ? this.jy : this.iy;
		}
		c.prototype.show = function() {
			this.va.style.display = "flex";
			this.Mb = !0;
			this.Xr();
			this.Xd.scrollTop = this.Xd.scrollHeight;
		};
		c.prototype.rf = function() {
			this.va.style.display = "none";
			this.Mb = !1;
		};
		c.prototype.Iz = function(a) {
			a in this.Pp ||
				((this.Pp[a] = this.Kh[this.Uj]),
				(this.Uj = (this.Uj + 1) % this.Kh.length));
			return this.Pp[a];
		};
		c.prototype.ys = function(a, b) {
			var d = this,
				e = 0;
			for (b = b.split("\n"); e < b.length; e++)
				this.lines.push({ key: a, line: b[e] });
			this.Mb &&
				null === this.timeout &&
				(this.timeout = setTimeout(function() {
					d.timeout = null;
					d.Xr();
				}, 100));
		};
		c.prototype.ZC = function(a) {
			if (2 > a.length) this.filter = null;
			else
				try {
					this.filter = new RegExp(a, "i");
				} catch (d) {}
			for (a = this.Xd.firstChild; a; ) {
				var b = a;
				1 === b.nodeType &&
					"DIV" === b.tagName &&
					(!this.filter || this.filter.exec(b.textContent)
						? (b.style.display = "block")
						: (b.style.display = "none"));
				a = a.nextSibling;
			}
		};
		c.prototype.Js = function() {
			return this.Xd.scrollTop >= this.Xd.scrollHeight - this.Xd.clientHeight;
		};
		c.prototype.Xr = function() {
			for (var a = this.Js(), b = 0, d = this.lines; b < d.length; b++) {
				var e = d[b],
					c = this.Iz(e.key),
					h = document.createElement("div");
				h.style.color = c;
				e = e.key + ": " + e.line;
				this.filter && !this.filter.exec(e) && (h.style.display = "none");
				h.appendChild(document.createTextNode(e));
				this.Xd.appendChild(h);
			}
			a && (this.Xd.scrollTop = this.Xd.scrollHeight);
			this.lines.length = 0;
		};
		return c;
	})();
	var sb = z.create("EventEmitter"),
		tb = (function() {
			function c() {
				this.Wj = !1;
				this.kb = {};
				this.Ae = [];
				this.El = {};
			}
			c.prototype.ta = function(a) {
				for (var b = this, d = 1; d < arguments.length; d++);
				this.Ae.push(Array.prototype.slice.apply(arguments));
				1 === this.Ae.length &&
					setTimeout(function() {
						for (var a = 0; a < b.Ae.length; a++) b.Eo.apply(b, b.Ae[a]);
						b.Ae.length = 0;
					}, 0);
			};
			c.prototype.xc = function(a) {
				for (var b = 1; b < arguments.length; b++);
				this.Ae.push(Array.prototype.slice.apply(arguments));
				if (1 === this.Ae.length) {
					for (b = 0; b < this.Ae.length; b++) this.Eo.apply(this, this.Ae[b]);
					this.Ae.length = 0;
				}
			};
			c.prototype.Jg = function(a) {
				for (var b = this, d = 1; d < arguments.length; d++);
				d = Array.prototype.slice.apply(arguments);
				var e = d[0];
				e in this.El ||
					setTimeout(function() {
						var a = b.El[e];
						delete b.El[e];
						b.Eo.apply(b, a);
					}, 0);
				this.El[e] = d;
			};
			c.prototype.Eo = function(a) {
				for (var b = [], d = 1; d < arguments.length; d++)
					b[d - 1] = arguments[d];
				if (a in this.kb) {
					d = this.kb[a];
					this.Wj || sb("Emit %s", a);
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
					e.vw(a, d);
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
				return this.vw(a, b);
			};
			c.prototype.vw = function(a, b) {
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
			c.prototype.Ui = function() {
				this.kb = {};
			};
			return c;
		})();
	var ub = (function(c) {
		function a() {
			var a = c.call(this) || this;
			a.keys = {};
			a.Wj = !0;
			a.AD = new RegExp(
				"alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318"
					.split(" ")
					.sort(function(a, b) {
						return b.length - a.length;
					})
					.join("|"),
				"g",
			);
			a.log = z.create("KEYMAP");
			a.bu = function(b) {
				a.KA(b);
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
					for (var c = 0; c < d.length; c++) this.Yr(a[b], d[c], !e);
			else for (b = 0; b < a.length; b++) this.Yr(a[b], d, !e);
		};
		a.prototype.UD = function(a, d) {
			this.map(a, d, !1);
		};
		a.prototype.Yr = function(a, d, e) {
			if (0 !== a.length) {
				var b = a.match(this.AD) || [],
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
								"function()",
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
		a.prototype.fA = function(a) {
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
				e = this.fA(a);
			e in this.keys && (b = this.keys[e]);
			(32 > a.keyCode || 126 <= a.keyCode) && this.log("%s", e);
			return b;
		};
		a.prototype.KA = function(a) {
			for (var b = 0, e = this.translate(a); b < e.length; b++) {
				var c = e[b];
				"string" === typeof c
					? (this.log("action: %s", c), this.xc("*", c, a))
					: c(a);
			}
		};
		a.prototype.Ks = function(a) {
			var b;
			void 0 === b && (b = !1);
			a.addEventListener("keydown", this.bu, b);
		};
		a.prototype.detach = function(a, d) {
			void 0 === d && (d = !1);
			a.removeEventListener("keydown", this.bu, d);
		};
		return a;
	})(tb);
	var vb = {
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
		wb = { 0: "No", 1: "Yes" },
		xb = { 0: "NACK", 1: "ACK" };
	function C(c, a, b, d) {
		return { length: c, type: a, name: b, RE: d };
	}
	var yb = {
		1: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
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
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(8, 0, "offset"),
			C(-2, 1, "data"),
		],
		3: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
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
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(4, 0, "dataLength"),
			C(-1, 1, "data"),
		],
		128: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(2, 0, "errorCode", {
				0: "UNSPECIFIED",
				1: "DOES_NOT_EXIST",
				2: "ALREADY_EXISTS",
				3: "INVALID_OFFSET",
			}),
			C(-2, 1, "description"),
		],
		129: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(2, 0, "ack", xb),
			C(8, 0, "offset"),
		],
		130: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(0, 2, "keys"),
			C(4, 0, "version"),
			C(4, 0, "nameLength"),
			C(-1, 1, "name"),
			C(4, 0, "valueLength"),
			C(-1, 1, "value"),
		],
		131: [
			C(1, 0, "messageType", vb),
			C(1, 0, "more", wb),
			C(2, 0, "ack", xb),
			C(2, 0, "requestID"),
		],
		255: [C(1, 0, "messageType", vb), C(1, 0, "more", wb), C(-2, 1, "data")],
	};
	function zb(c) {
		var a = yb[c.messageType];
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
			else for (h = b, f = Ta(f), e = 0; e < f.length; e++) h.push(f[e]);
		}
		return new Uint8Array(b);
	}
	function Ab(c) {
		var a = yb[c[0]];
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
					r = Cb(c, f, f + r);
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
	function Cb(c, a, b) {
		return c.slice
			? c.slice(a, b)
			: new Uint8Array(Array.prototype.slice.call(c, a, b));
	}
	var Db = (function(c) {
			function a(a, d) {
				var b = c.call(this) || this;
				b.tc = a;
				b.ym = d;
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
				this.tc.close();
			};
			a.prototype.read = function() {
				return __awaiter(this, void 0, void 0, function() {
					var a, d, e, c, h;
					return __generator(this, function(b) {
						switch (b.label) {
							case 0:
								(a = []), (b.label = 1);
							case 1:
								return [4, this.Pu()];
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
				var b = this.tc,
					e = 0,
					c = a.length;
				c > this.ym && ((c = this.ym), (a[1] = 1));
				b.send(Cb(a, e, e + c));
				for (e += c; e < a.length; ) {
					c = a.length - e;
					c > this.ym - 2 && (c = this.ym - 2);
					var h = {
						messageType: 255,
						more: e + c < a.length ? 1 : 0,
						data: Cb(a, e, e + c),
					};
					b.send(zb(h));
					e += c;
				}
			};
			return a;
		})(
			(function() {
				function c() {
					this.Fr = [];
					this.kb = [];
				}
				c.prototype.Pu = function() {
					var a = this;
					return new Promise(function(b) {
						a.kb.length ? b(a.kb.shift()) : a.Fr.push(b);
					}).then(null, function(a) {
						throw a;
					});
				};
				c.prototype.ta = function(a) {
					this.Fr.length ? this.Fr.shift()(a) : this.kb.push(a);
				};
				return c;
			})(),
		),
		Eb = (function() {
			function c() {
				var a = this;
				this.timeout = 0;
				this.hq = function() {
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
						return b.hq();
					}, a);
					window.addEventListener("online", b.hq);
				});
			};
			c.prototype.cancel = function() {
				clearTimeout(this.timeout);
				window.removeEventListener("online", this.hq);
			};
			return c;
		})(),
		Fb = (function(c) {
			function a(a, d, e, f) {
				var b = c.call(this) || this;
				b.ma = a;
				b.NC = d;
				b.latency = e;
				b.WebSocket = f;
				b.log = z.create("Sharing");
				b.keys = {};
				b.pu = "";
				b.it = "";
				b.gv = function() {
					b.zg();
				};
				b.Im = function() {};
				b.th = !1;
				b.connected = !1;
				b.tc = null;
				b.iv = function() {
					for (var a = 0, d = b.ma.Ut(); a < d.length; a++) {
						var e = d[a];
						b.cD(e.name, e.value, e.persistent);
					}
					b.zg();
				};
				b.Nc = 0;
				b.xn = !1;
				b.xd = "";
				b.rq = [];
				b.hk = [];
				b.Ym = [];
				b.wB = 1;
				b.Mj = 0;
				return b;
			}
			__extends(a, c);
			a.prototype.dD = function(a) {
				this.latency = a;
			};
			a.prototype.start = function(a, d) {
				var b = this;
				this.it = a;
				return new Promise(function(e, c) {
					b.log("Start shared session: createMode=%s", d);
					b.Im = e;
					b.ma.pa("local-changes", b.gv);
					b.ma.pa("local-keys", b.iv);
					if (1 === d) b.Ys(a, d, "").then(null, c);
					else {
						e = b.ma.pp();
						if ("" === e)
							throw Error("getLocalChanges() returned null on first batch");
						b.pu = e;
						b.Ys(a, d, e).then(null, c);
					}
				});
			};
			a.prototype.stop = function() {
				this.log("stop() -- shut down session");
				this.th = !1;
				this.tc && this.tc.close();
				this.ma.removeListener("local-changes", this.gv);
				this.ma.removeListener("local-keys", this.iv);
				this.Mj && clearTimeout(this.Mj);
			};
			a.prototype.Mq = function(a) {
				this.rq.push(a);
				this.zg();
			};
			a.prototype.cD = function(a, d, e) {
				try {
					d = JSON.stringify(d);
				} catch (n) {
					throw (console.error("Object cannot be converted to JSON: ", d), n);
				}
				for (var b = null, c = 0, k = this.hk; c < k.length; c++) {
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
							aC: e,
							Bf: this.wB++,
					  }),
					  this.hk.push(b));
			};
			a.prototype.Ys = function(a, d, e) {
				return __awaiter(this, void 0, void 0, function() {
					var b, c, k;
					return __generator(this, function(f) {
						switch (f.label) {
							case 0:
								(this.th = !0), (b = 0), (f.label = 1);
							case 1:
								if (!this.th) return [3, 10];
								this.connected = !1;
								if (!b) return [3, 3];
								this.log("Waiting %sms before reconnecting", b);
								c = new Eb();
								return [4, c.wait(b)];
							case 2:
								f.sent(), (f.label = 3);
							case 3:
								return (
									(b = Math.max(Math.min(2 * b, 3e5), 1e3)), [4, this.connect()]
								);
							case 4:
								return f.sent() ? [4, this.NA(a, d, e)] : [3, 1];
							case 5:
								if (!f.sent()) return [3, 1];
								this.Im && (this.Im(), (this.Im = function() {}));
								this.ta("connected");
								d = 1;
								this.xd = this.pu = e = "";
								this.connected = !0;
								this.zg();
								f.label = 6;
							case 6:
								return f.trys.push([6, 8, , 9]), [4, this.Cx()];
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
									(a = this.NC),
									this.tc && this.tc.close(),
									(this.tc = d = new Db(new this.WebSocket(a), 102400)),
									this.log("Connect to %s; wait for event", a),
									[4, d.Pu()]
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
			a.prototype.NA = function(a, d, e) {
				return __awaiter(this, void 0, void 0, function() {
					var b, c;
					return __generator(this, function(f) {
						switch (f.label) {
							case 0:
								this.log(
									"Send INIT message docLen=%s changes=%s",
									this.Nc,
									e.toString().length,
								);
								if (!this.tc) throw Error("ws is null");
								try {
									this.tc.send(
										zb({
											messageType: 1,
											more: 0,
											maxSize: 102400,
											protocolVersion: 2,
											creationMode: d,
											offset: this.Nc,
											docIDLength: Ta(a).length,
											docID: a,
											data: e,
										}),
									);
								} catch (l) {
									throw (console.log("Got error ", l), l);
								}
								return [4, this.tc.read()];
							case 1:
								b = f.sent();
								if ("message" != b.type)
									return this.log("Expected message; got " + b.type), [2, !1];
								c = Ab(b.message);
								if (128 === c.messageType)
									throw (this.log("Got error response: %s", c.description),
									Error(c.description));
								2 === c.messageType &&
									(0 < c.offset && e.length && this.ma.Qj(e),
									this.log(
										"Got initial changes at offset %s=>%s",
										c.offset,
										c.offset + c.data_length,
									),
									(c.data.length || 0 === c.offset) &&
										this.ma.xg(c.data, 0 === c.offset),
									0 === c.offset && (this.xd = ""),
									(this.Nc = c.offset + c.data_length));
								this.log("Connected and initialized.");
								return [2, !0];
						}
					});
				});
			};
			a.prototype.jD = function(a) {
				(this.xn = a) || this.zg();
			};
			a.prototype.zg = function() {
				var a = this;
				this.log("Check changes; changesSent=%s; paused=%s", this.xd, this.xn);
				this.Mj ||
					this.xn ||
					(this.Mj = setTimeout(function() {
						var b;
						a.Mj = 0;
						a.log(
							"inner checkChanges: connected=%s ws=%s",
							!!a.connected,
							!!a.tc,
						);
						if (a.connected && a.tc) {
							"" === a.xd &&
								((a.xd = a.ma.pp()),
								a.log("getLocalChanges: %s", a.xd),
								a.xd &&
									(a.log("Sent changes %s->%s", a.Nc, a.Nc + a.xd.length),
									a.tc.send(
										zb({ messageType: 2, offset: a.Nc, more: 0, data: a.xd }),
									)));
							for (var e = 0, c = a.rq; e < c.length; e++) {
								var h = c[e];
								a.tc.send(
									zb({
										messageType: 4,
										more: 0,
										dataLength: Ta(h).length,
										data: h,
									}),
								);
							}
							e = a.rq.length = 0;
							for (c = a.hk; e < c.length; e++)
								(h = c[e]),
									a.tc.send(
										zb({
											messageType: 3,
											more: 0,
											requestID: h.Bf,
											lifetime: h.aC ? 1 : 0,
											oldVersion: h.oldVersion,
											newVersion: h.newVersion,
											nameLength: Ta(h.name).length,
											name: h.name,
											valueLength: Ta(h.value).length,
											value: h.value,
										}),
									);
							(b = a.Ym).push.apply(b, a.hk);
							a.hk.length = 0;
						}
					}, this.latency));
			};
			a.prototype.Cx = function() {
				return __awaiter(this, void 0, void 0, function() {
					var a, d, e, c, h, k, l, n;
					return __generator(this, function(b) {
						switch (b.label) {
							case 0:
								return [4, this.tc.read()];
							case 1:
								a = b.sent();
								if ("message" !== a.type)
									return this.log("Expected message; got " + a.type), [2];
								d = Ab(a.message);
								if (2 === d.messageType) {
									if (this.Nc !== d.offset)
										throw Error(
											"Error: docLength =" +
												this.Nc +
												" but got offset " +
												d.offset,
										);
									this.ma.xg(d.data, !1);
									this.log(
										"From server: APPEND " +
											this.Nc +
											"->" +
											(this.Nc + d.data_length),
									);
									this.Nc += d.data_length;
									this.zg();
								} else if (129 === d.messageType)
									d.ack
										? (this.log("Received ACK " + this.Nc + "=>" + d.offset),
										  this.ma.Qj(this.xd),
										  (this.xd = ""),
										  (this.Nc = d.offset))
										: (this.log(
												"Received NACK " +
													this.Nc +
													"!=" +
													d.offset +
													" " +
													this.xd.substr(0, 22),
										  ),
										  (this.xd = ""),
										  this.zg());
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
									for (n = 0; n < this.Ym.length; n++) {
										if (((k = this.Ym[n]), k.Bf === d.requestID)) {
											this.log("key %s ACKED:%s", k.name, d.ack);
											d.ack &&
												(this.keys[k.name] = {
													name: k.name,
													value: k.value,
													version: k.newVersion,
												});
											this.Ym.splice(n, 1);
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
		})(tb);
	var Gb = (function() {
			function c(a) {
				this.next = a;
			}
			c.prototype.Dw = function(a) {
				for (var b = 0; b < a.length; b++) this.Fb(a.charCodeAt(b));
			};
			c.prototype.Fb = function(a) {
				this.next.Fb(a);
			};
			c.prototype.flush = function() {
				this.next.flush();
			};
			c.prototype.Rh = function() {
				return this.next.Rh();
			};
			return c;
		})(),
		Hb = (function() {
			function c() {
				this.data = "";
				this.log = z.create("BYTESTREAM");
			}
			c.prototype.Dw = function(a) {
				for (var b = 0; b < a.length; b++) this.Fb(a.charCodeAt(b));
			};
			c.prototype.Rh = function() {
				return this;
			};
			c.prototype.Fb = function(a) {
				if (255 < a || 0 > a) throw "Bad data written to byte buffer";
				this.data += String.fromCharCode(a);
			};
			c.prototype.flush = function() {};
			c.prototype.toString = function() {
				return this.data;
			};
			c.prototype.rc = function() {
				for (var a = [], b = 0; b < this.data.length; b++)
					a.push(this.data.charCodeAt(b));
				return a;
			};
			c.Ur = function(a, b) {
				c.Or[a] = b;
			};
			c.tg = function(a) {
				var b = new c();
				a = a.split(",");
				a.reverse();
				for (var d = 0; d < a.length; d++) {
					var e = a[d];
					e.length && (b = c.Or[e](b));
				}
				return b;
			};
			c.Or = {};
			return c;
		})();
	var Ib = (function(c) {
		function a(a) {
			a = c.call(this, a) || this;
			a.Si = 0;
			a.total = 0;
			a.size = 0;
			a.keys =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			return a;
		}
		__extends(a, c);
		a.prototype.Fb = function(a) {
			this.Si = (this.Si << 8) | a;
			this.size += 8;
			for (this.total += 1; 6 <= this.size; )
				this.next.Fb(this.keys.charCodeAt((this.Si >> (this.size - 6)) & 63)),
					(this.size -= 6);
		};
		a.prototype.flush = function() {
			var a = (3 - (this.total % 3)) % 3;
			this.size &&
				(this.next.Fb(this.keys.charCodeAt((this.Si >> (this.size - 6)) & 63)),
				(this.Si = this.size = 0));
			for (; a--; ) this.next.Fb(61);
			this.next.flush();
		};
		return a;
	})(Gb);
	Hb.Ur("Base64Encoder", function(c) {
		return new Ib(c);
	});
	var Jb = (function(c) {
		function a(a) {
			a = c.call(this, a) || this;
			a.ah = 0;
			a.Oe = 0;
			a.Ju = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193];
			a.log = z.create("BITWRITER");
			return a;
		}
		__extends(a, c);
		a.prototype.Fb = function(a) {
			this.Cw(a, 8);
		};
		a.prototype.Cw = function(a, d) {
			this.ah = (this.ah << d) | (a & this.Ju[d]);
			for (this.Oe += d; 8 <= this.Oe; )
				this.next.Fb((this.ah >>> (this.Oe - 8)) & 255),
					(this.Oe -= 8),
					(this.ah &= this.Ju[this.Oe]);
		};
		a.prototype.flush = function() {
			this.Oe &&
				(this.next.Fb(this.ah << (8 - this.Oe)), (this.ah = this.Oe = 0));
			this.next.flush();
		};
		return a;
	})(Gb);
	var Kb = (function(c) {
		function a(a) {
			var b = c.call(this, a) || this;
			b.hi = 258;
			b.OE = 0;
			b.uh = 0;
			b.first = !0;
			b.Wi = [];
			b.pq = [];
			b.ko = [];
			b.XE = 0;
			b.vo = 9;
			b.log = z.create("LZWEncoder");
			b.Nx = new Jb(a);
			b.$r();
			return b;
		}
		__extends(a, c);
		a.prototype.Fb = function(a) {
			if (this.first) (this.uh = a), (this.first = !1);
			else {
				var b = this.ex(this.uh, a);
				void 0 !== this.Wi[b]
					? (this.uh = this.Wi[b])
					: (this.Wk(this.uh),
					  (this.Wi[b] = this.hi),
					  (this.pq[b] = this.uh),
					  (this.uh = this.ko[b] = a),
					  4095 > this.hi
							? ((this.hi += 1),
							  (this.vo = Math.ceil(Math.log(this.hi) / Math.log(2))))
							: this.$r());
			}
		};
		a.prototype.ex = function(a, d) {
			var b;
			var c = (d << 4) ^ a;
			for (b = 0 === c ? 1 : 18041 - c; ; ) {
				if (void 0 === this.Wi[c] || (this.pq[c] === a && this.ko[c] === d))
					return c;
				c -= b;
				0 > c && (c += 18041);
			}
		};
		a.prototype.$r = function() {
			this.Wk(a.Kw);
			this.hi = 258;
			this.vo = 9;
			this.Wi.length = 0;
			this.pq.length = 0;
			this.ko.length = 0;
		};
		a.prototype.flush = function() {
			this.first || (this.Wk(this.uh), this.Wk(a.Ow));
		};
		a.prototype.Wk = function(a) {
			this.Nx.Cw(a, this.vo);
		};
		a.Kw = 256;
		a.Ow = 257;
		return a;
	})(Gb);
	Hb.Ur("LZWEncoder", function(c) {
		return new Kb(c);
	});
	function Lb(c) {
		c = c.replace(/\+/g, " ");
		return decodeURIComponent(c);
	}
	function Mb(c, a) {
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
			e = Lb(f[0]);
			"/" == e[0] && -1 === e.indexOf(".") && (e = e.substr(1));
			f = 1 < f.length ? Lb(f[1]) : "";
			e.length && (d[e] = f);
		}
		return d;
	}
	function Nb() {
		if (void 0 === c) var c = window.location.hash;
		return Mb(c, "#");
	}
	function Ob(c) {
		void 0 === c && (c = window.location.href);
		return Mb(c, "?");
	}
	var Pb = z.create("CONFIG"),
		Qb = (function(c) {
			function a(a, d, e) {
				var b = c.call(this) || this;
				b.qj = {};
				for (var h in d) b.qj[h.toLowerCase()] = h;
				b.options = JSON.parse(JSON.stringify(d));
				for (var k in e)
					k.toLowerCase() in b.qj ||
						alert("Zwibbler: Unknown option '" + k + "'"),
						b.set(k, e[k], !0);
				a.addEventListener(window, "hashchange", function() {
					Pb("Reload parameters from url hash");
					b.Sp();
				});
				a.add(function() {
					b.kb = {};
				});
				b.Sp();
				for (var l in b.options) Pb("%s=%s", l, b.options[l]);
				return b;
			}
			__extends(a, c);
			a.prototype.Sp = function() {
				var a = Nb(),
					d;
				for (d in a) this.set(d, a[d]);
			};
			a.prototype.has = function(a) {
				return a.toLowerCase() in this.qj;
			};
			a.prototype.set = function(a, d, e) {
				void 0 === e && (e = !1);
				a.toLowerCase() in this.qj && (a = this.qj[a.toLowerCase()]);
				if ((a = this.At(a, d)))
					Pb("Set config %s=%s", a.name, a.value),
						a.name in this.options
							? ((d = this.options[a.name]),
							  (this.options[a.name] = a.value),
							  e ||
									d === a.value ||
									(this.xc("update", a.name, a.value, d),
									this.xc(a.name, a.value, !1)))
							: console.warn(
									"Warning: %s is not a configuration option.",
									a.name,
							  );
			};
			a.prototype.At = function(a, d) {
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
		})(tb);
	var Sb = {
		style:
			"\n.zwibbler-colour-panel {\n    overflow:hidden;\n    border-top: 1px solid black;\n    white-space: nowrap;\n    font-size: 0;\n}\n\n.zwibbler-colour-panel div { \n    display: inline-block;\n}",
		km:
			'<div class="zwibbler-colour-panel" z-style="{height:ColourPanelWidth()+\'px\'}">\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'clear\'}"\n        z-on:click="setColour(\'rgba(0,0,0,0.0)\', true)"\n        z-on:contextmenu="setColour(\'rgba(0,0,0,0.0)\', false)">\n    </canvas>\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'transparent\'}"\n        z-on:click="setOpacity(0.5, true)"\n        z-on:contextmenu="setOpacity(0.5, false)">\n    </canvas>\n    <div z-for="colour in ColourPanelColours"\n        z-style="{width: ColourPanelWidth()+\'px\', height: ColourPanelWidth()+\'px\', background: colour}"\n        z-on:click="setColour(colour, true)"\n        z-on:contextmenu="setColour(colour, false)">\n    </div>\n</div>\n',
		controller: function(c) {
			var a = Rb(),
				b = c.ma || c;
			a.shift();
			a.shift();
			c.ColourPanelColours = a;
			c.ColourPanelWidth = function() {
				return b.yc("useTouch") ? 40 : 20;
			};
		},
	};
	function Rb() {
		function c(b) {
			for (var d = 30; 100 > d; d += 20)
				(b.values[2] = d / 100), a.push(b.toString());
		}
		var a = [
			q.We,
			"rgba(0,0,0,0.5)",
			q.Oa,
			q.Zc,
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
		c(new q(q.yh, [0, 0, 0, 1]));
		for (var b = 0; 720 > b; b += 35) {
			var d = new q(q.yh, [b, 0.5, 0, 1]);
			c(d);
		}
		return a;
	}
	var Tb = HTMLElement,
		Ub = Object,
		Vb;
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
		c.Pn = b;
		c.ud = d;
		c.sg = {
			type: "any",
			match: function(a) {
				return "undefined" !== typeof a;
			},
		};
		c.Jn = e;
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
		c.qd = function(a, b) {
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
								Wb(a[d])
							);
					return !0;
				},
			};
		};
		c.Nn = function() {
			for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
			return {
				type: "(" + a.join("|") + ")",
				match: function(b) {
					for (var d = 0; d < a.length; d++) if (a[d] === b) return !0;
					return !1;
				},
			};
		};
		c.GE = f(c.sg);
		c.Ah = d(null);
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
		c.Va = f(c.Number);
		c.Lk = e(c.Number);
		c.Function = a("function");
		c.Mf = f(c.Function);
		c.Boolean = a("boolean");
		c.Od = f(c.Boolean);
		c.HTMLElement = b(Tb);
		c.Object = b(Ub);
		c.sd = f(c.Object);
		c.FE = e(c.Object);
		c.$b = {
			type: "integer",
			match: function(a) {
				return "number" === typeof a && (a | 0) === a
					? !0
					: a + " is not a whole number.";
			},
		};
		c.Ve = f(c.$b);
		c.Qw = e(c.$b);
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
							$b(e + 1) +
							" argument is '" +
							Wb(f) +
							"' but expected '" +
							c.type +
							"'. " +
							(!1 === h ? "" : h) +
							"'",
					));
			}
		};
	})(Vb || (Vb = {}));
	function $b(c) {
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
	function Wb(c) {
		return c instanceof Array
			? c.length
				? Wb(c[0]) + "[]"
				: "Array"
			: null === c
			? "null"
			: typeof c;
	}
	var D = Vb;
	var ac = (function() {
		function c() {
			var a = this;
			this.eC = new Promise(function(b, d) {
				a.resolve = b;
				a.reject = d;
			});
		}
		c.prototype.then = function(a, b) {
			return this.eC.then(a, b);
		};
		return c;
	})();
	var bc = new ac();
	var cc = z.create("MISC");
	function dc(c) {
		var a = document.createElement("canvas");
		c && c.appendChild(a);
		a.style.background = "transparent";
		return a;
	}
	function ec() {
		return (
			0 <= navigator.userAgent.search("Safari") &&
			0 > navigator.userAgent.search("Chrome")
		);
	}
	function fc(c, a) {
		c = q.hf(c);
		c.values[3] = a;
		return c.toString();
	}
	function gc(c, a) {
		a = a ? u(a).pc() : u.em();
		var b = u(c).pc();
		b.left = Math.min(b.left, a.left + a.width - c.offsetWidth);
		b.top = Math.min(b.top, a.top + a.height - c.offsetHeight);
		u(c).qk(b);
	}
	function hc(c) {
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
		for (var k = Hb.tg("Base64Encoder"), l = 0; l < f.length; l++) k.Fb(f[l]);
		for (l = 0; l < h.length; l++) k.Fb(h[l]);
		do {
			f = e * (d - 1);
			for (h = 0; h < c; h++)
				(l = h << 2), k.Fb(b[f + l + 2]), k.Fb(b[f + l + 1]), k.Fb(b[f + l]);
			for (f = 0; f < a; f++) k.Fb(0);
		} while (--d);
		k.flush();
		return "data:image/bmp;base64," + k.Rh().toString();
	}
	function ic(c, a) {
		"erase" === a
			? (a = c.ax)
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
	function jc() {
		for (var c = 0; c < arguments.length; c++);
		c = arguments[0];
		for (var a = 1; a < arguments.length; a++) {
			var b = arguments[a],
				d;
			for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
		}
		return c;
	}
	function kc(c, a) {
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
	z.create("Graphics", !0);
	var F = (function() {
			function c(a, b) {
				this.x = a;
				this.y = b;
			}
			c.prototype.bc = function(a) {
				return Math.sqrt(
					(a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y),
				);
			};
			c.prototype.toString = function() {
				return "(" + this.x + ", " + this.y + ")";
			};
			c.prototype.dd = function(a) {
				return this.x === a.x && this.y === a.y;
			};
			c.prototype.clone = function() {
				return new c(this.x, this.y);
			};
			c.prototype.ir = function(a) {
				return new c(this.x - a.x, this.y - a.y);
			};
			c.prototype.gt = function(a, b) {
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
		lc = (function() {
			function c(a, b) {
				this.width = a;
				this.height = b;
			}
			c.prototype.MD = function() {
				return new G(0, 0, this.width, this.height);
			};
			c.prototype.toString = function() {
				return "Size(" + this.width + "," + this.height + ")";
			};
			c.prototype.zt = function(a, b) {
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
	function mc(c, a, b, d) {
		return Math.sqrt((c - b) * (c - b) + (a - d) * (a - d));
	}
	function nc(c, a, b, d) {
		var e = mc(c, a, b, d);
		return 0 === e ? { x: 1, y: 0 } : { x: (b - c) / e, y: (d - a) / e };
	}
	function oc(c) {
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
			this.Fv();
		}
		c.load = function(a) {
			return new c(a.x, a.y, a.width, a.height);
		};
		c.xh = function(a) {
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
		c.prototype.dd = function(a) {
			return (
				this.x === a.x &&
				this.y === a.y &&
				this.width === a.width &&
				this.height === a.height
			);
		};
		c.prototype.wh = function(a) {
			a.x < this.x && ((this.width += this.x - a.x), (this.x = a.x));
			a.y < this.y && ((this.height += this.y - a.y), (this.y = a.y));
			a.x + a.width > this.x + this.width &&
				(this.width += a.x + a.width - this.x - this.width);
			a.y + a.height > this.y + this.height &&
				(this.height += a.y + a.height - this.y - this.height);
		};
		c.prototype.ru = function(a) {
			a.x > this.x && ((this.width -= a.x - this.x), (this.x = a.x));
			a.x + a.width < this.x + this.width &&
				(this.width -= this.x + this.width - a.x - a.width);
			a.y > this.y && ((this.height -= a.y - this.y), (this.y = a.y));
			a.y + a.height < this.y + this.height &&
				(this.height -= this.y + this.height - a.y - a.height);
		};
		c.prototype.wr = function(a, b) {
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
		c.prototype.QB = function(a) {
			return this.x > a.x + a.width ||
				a.x > this.x + this.width ||
				this.y > a.y + a.height ||
				a.y > this.y + this.height
				? !1
				: !0;
		};
		c.prototype.Pi = function() {
			return this.width * this.height;
		};
		c.prototype.lv = function(a) {
			return this.QB(a)
				? (Math.min(this.right(), a.right()) - Math.max(this.x, a.x)) *
						(Math.min(this.bottom(), a.bottom()) - Math.max(this.y, a.y))
				: 0;
		};
		c.prototype.Mc = function(a, b, d) {
			void 0 === d && (d = 0);
			return (
				this.x - d <= a &&
				this.x + this.width + d > a &&
				this.y - d <= b &&
				this.y + this.height + d > b
			);
		};
		c.prototype.Fv = function() {
			0 > this.width && ((this.x += this.width), (this.width = -this.width));
			0 > this.height &&
				((this.y += this.height), (this.height = -this.height));
		};
		c.prototype.Fd = function(a, b) {
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
		c.prototype.Sd = function() {
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
		c.prototype.Xs = function(a) {
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
	function pc(c) {
		return 0 !== c ? c : -Infinity === 1 / c ? -1e-11 : 1e-11;
	}
	var J = (function() {
			function c() {
				this.log = z.create("MATRIX");
				if (0 === arguments.length)
					(this.m11 = 1),
						(this.m21 = this.m12 = 0),
						(this.m22 = 1),
						(this.Ca = this.Ba = 0);
				else if (1 === arguments.length)
					if ("string" === typeof arguments[0]) {
						var a = arguments[0].match(/-?\d+\.?[\de\-]*/g);
						if (!a || 6 != a.length)
							throw Error("Bad initializer for matrix: " + arguments[0]);
						this.m11 = parseFloat(a[0]);
						this.m21 = parseFloat(a[1]);
						this.m12 = parseFloat(a[2]);
						this.m22 = parseFloat(a[3]);
						this.Ba = parseFloat(a[4]);
						this.Ca = parseFloat(a[5]);
					} else {
						if (6 !== arguments[0].length)
							throw "Bad array initializer for Matrix.";
						this.m11 = arguments[0][0];
						this.m12 = arguments[0][1];
						this.m21 = arguments[0][2];
						this.m22 = arguments[0][3];
						this.Ba = arguments[0][4];
						this.Ca = arguments[0][5];
					}
				else
					(this.m11 = arguments[0]),
						(this.m12 = arguments[1]),
						(this.m21 = arguments[2]),
						(this.m22 = arguments[3]),
						(this.Ba = arguments[4]),
						(this.Ca = arguments[5]);
			}
			c.prototype.toString = function() {
				return (
					"[ " +
					this.m11 +
					" " +
					this.m12 +
					" " +
					this.Ba +
					"    " +
					this.m21 +
					" " +
					this.m22 +
					" " +
					this.Ca +
					"    0 0 1 ]"
				);
			};
			c.prototype.rc = function() {
				return [this.m11, this.m12, this.m21, this.m22, this.Ba, this.Ca];
			};
			c.prototype.uu = function() {
				return (
					1 === this.m11 &&
					0 === this.m12 &&
					0 === this.m21 &&
					1 === this.m22 &&
					0 === this.Ba &&
					0 === this.Ca
				);
			};
			c.prototype.dd = function(a) {
				return (
					this.m11 === a.m11 &&
					this.m12 === a.m12 &&
					this.m21 === a.m21 &&
					this.m22 === a.m22 &&
					this.Ba === a.Ba &&
					this.Ca === a.Ca
				);
			};
			c.prototype.multiply = function(a) {
				var b = new c();
				b.m11 = pc(this.m11 * a.m11 + this.m12 * a.m21);
				b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
				b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
				b.m22 = pc(this.m21 * a.m12 + this.m22 * a.m22);
				b.Ba = this.m11 * a.Ba + this.m12 * a.Ca + this.Ba;
				b.Ca = this.m21 * a.Ba + this.m22 * a.Ca + this.Ca;
				if (!b.isFinite())
					throw Error(
						"Multiplied matrix has NaN values: " +
							b.If() +
							" after multiplying with " +
							a.If(),
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
					a(this.Ba) &&
					a(this.Ca)
				);
			};
			c.prototype.apply = function(a, b) {
				return new F(
					this.m11 * a + this.m12 * b + this.Ba,
					this.m21 * a + this.m22 * b + this.Ca,
				);
			};
			c.prototype.Fc = function(a, b) {
				void 0 === b && (b = !1);
				b
					? a.setTransform(
							this.m11,
							this.m21,
							this.m12,
							this.m22,
							this.Ba,
							this.Ca,
					  )
					: a.transform(
							this.m11,
							this.m21,
							this.m12,
							this.m22,
							this.Ba,
							this.Ca,
					  );
			};
			c.prototype.clone = function() {
				return new c(this.m11, this.m12, this.m21, this.m22, this.Ba, this.Ca);
			};
			c.prototype.inverse = function() {
				var a = this.m11 * this.m22 - this.m12 * this.m21;
				return new c(
					this.m22 / a,
					-this.m12 / a,
					-this.m21 / a,
					this.m11 / a,
					(this.m12 * this.Ca - this.Ba * this.m22) / a,
					(this.Ba * this.m21 - this.m11 * this.Ca) / a,
				);
			};
			c.prototype.vn = function() {
				var a = this.m11,
					b = this.m21,
					d = this.m12,
					e = this.m22,
					f = Math.sqrt(a * a + b * b),
					h = Math.sqrt(d * d + e * e);
				return new c(a / f, d / h, b / f, e / h, this.Ba, this.Ca);
			};
			c.prototype.Hb = function() {
				return new F(
					Math.sqrt(this.m11 * this.m11 + this.m21 * this.m21),
					Math.sqrt(this.m12 * this.m12 + this.m22 * this.m22),
				);
			};
			c.prototype.Mp = function() {
				return (
					1 === this.m11 && 1 === this.m22 && 0 === this.m12 && 0 === this.m21
				);
			};
			c.prototype.translate = function(a, b) {
				return this.multiply(new qc(a, b));
			};
			c.prototype.rotate = function(a, b, d) {
				return this.multiply(new rc(a, b, d));
			};
			c.prototype.If = function() {
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
					this.Ba +
					", " +
					this.Ca +
					")"
				);
			};
			c.prototype.toJSON = function() {
				if (!this.isFinite())
					throw Error(
						"Tried to encode matrix with NaN/Inf values: " + this.If(),
					);
				return this.If();
			};
			return c;
		})(),
		rc = (function(c) {
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
		qc = (function(c) {
			function a(a, d) {
				return c.call(this, 1, 0, 0, 1, a, d) || this;
			}
			__extends(a, c);
			return a;
		})(J),
		sc = (function(c) {
			function a(a, d, e, f) {
				return void 0 === e || void 0 === f
					? c.call(this, a, 0, 0, d, 0, 0) || this
					: c.call(this, a, 0, 0, d, e - a * e, f - d * f) || this;
			}
			__extends(a, c);
			return a;
		})(J),
		tc = (function(c) {
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
	function uc(c, a, b, d, e, f, h, k, l, n) {
		if (!(8 < ++uc.depth)) {
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
				A = (M + x) / 2,
				E = k - a,
				R = l - b;
			d = Math.abs((d - k) * R - (e - l) * E);
			f = Math.abs((f - k) * R - (h - l) * E);
			(d + f) * (d + f) < n * (E * E + R * R)
				? c.push(new F(I, A))
				: (uc(c, a, b, r, v, H, M, I, A, n), uc(c, I, A, w, x, y, B, k, l, n));
		}
		--uc.depth;
	}
	(uc || (uc = {})).depth = 0;
	function vc(c, a, b, d, e, f, h, k) {
		if (!(8 < ++uc.depth)) {
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
				: (vc(c, a, b, l, n, w, x, k), vc(c, w, x, r, v, f, h, k));
		}
		--uc.depth;
	}
	function wc(c, a, b) {
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
	function xc(c, a, b, d) {
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
			this.Hh = a;
			this.Sk = b;
			this.data = [];
		}
		c.prototype.width = function() {
			return this.Hh;
		};
		c.prototype.height = function() {
			return this.Sk;
		};
		c.prototype.getImageData = function() {
			var a = document.createElement("canvas");
			a.width = this.Hh;
			a.height = this.Sk;
			a = a.getContext("2d").getImageData(0, 0, this.Hh, this.Sk);
			for (var b = this.Hh * this.Sk, d = 0; d < b; d++) {
				var e = !0 === this.data[d] ? 255 : 0;
				a.data[4 * d] = e;
				a.data[4 * d + 1] = e;
				a.data[4 * d + 2] = e;
				a.data[4 * d + 3] = 255;
			}
			return a;
		};
		c.prototype.get = function(a, b) {
			return !0 === this.data[this.Hh * b + a];
		};
		c.prototype.set = function(a, b, d) {
			this.data[this.Hh * b + a] = d;
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
			this.fa.push(c.Yc, a, b);
		};
		c.prototype.lineTo = function(a, b) {
			this.fa.push(c.rd, a, b);
		};
		c.prototype.bezierCurveTo = function(a, b, d, e, f, h) {
			this.fa.push(c.Lf, a, b, d, e, f, h);
		};
		c.prototype.quadraticCurveTo = function(a, b, d, e) {
			this.fa.push(c.Nf, a, b, d, e);
		};
		c.prototype.arc = function() {};
		c.prototype.arcTo = function() {};
		c.prototype.closePath = function() {
			this.fa.push(c.pd);
		};
		c.prototype.la = function(a) {
			for (var b = 0; b < this.fa.length; ) {
				switch (this.fa[b]) {
					case c.Yc:
						a.moveTo && a.moveTo(this.fa[b + 1], this.fa[b + 2]);
						break;
					case c.rd:
						a.lineTo && a.lineTo(this.fa[b + 1], this.fa[b + 2]);
						break;
					case c.Lf:
						a.bezierCurveTo &&
							a.bezierCurveTo(
								this.fa[b + 1],
								this.fa[b + 2],
								this.fa[b + 3],
								this.fa[b + 4],
								this.fa[b + 5],
								this.fa[b + 6],
							);
						break;
					case c.Nf:
						a.quadraticCurveTo &&
							a.quadraticCurveTo(
								this.fa[b + 1],
								this.fa[b + 2],
								this.fa[b + 3],
								this.fa[b + 4],
							);
						break;
					case c.pd:
						a.closePath && a.closePath();
						break;
					default:
						alert("Error!");
				}
				b += c.td[this.fa[b]];
			}
		};
		c.prototype.zC = function() {
			for (var a = 0, b = 0, d = 0, e = []; a < this.fa.length; ) {
				switch (this.fa[a]) {
					case c.pd:
						e.push([c.pd]);
						break;
					case c.Yc:
						b = this.fa[a + 1];
						d = this.fa[a + 2];
						break;
					case c.rd:
						e.push([c.rd, b, d]);
						b = this.fa[a + 1];
						d = this.fa[a + 2];
						break;
					case c.Lf:
						e.push([
							c.Lf,
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
					case c.Nf:
						e.push([c.Nf, this.fa[a + 1], this.fa[a + 2], b, d]),
							(b = this.fa[a + 3]),
							(d = this.fa[a + 4]);
				}
				a += c.td[this.fa[a]];
			}
			this.fa.length && e.push([c.Yc, b, d]);
			a = new c();
			for (b = e.length - 1; 0 <= b; b--)
				Array.prototype.push.apply(a.fa, e[b]);
			a.closed = this.closed;
			return a;
		};
		c.prototype.Se = function() {
			for (var a = 0, b, d = [], e = [d]; a < this.fa.length; ) {
				var f = c.Tr[this.fa[a]];
				this.fa[a] === c.Yc && 0 < d.length && ((d = []), e.push(d));
				for (b = 0; b < f; b++)
					d.push(new F(this.fa[a + 1 + 2 * b], this.fa[a + 1 + 2 * b + 1]));
				a += c.td[this.fa[a]];
			}
			return e;
		};
		c.prototype.transform = function(a) {
			for (var b = 0, d, e; b < this.fa.length; ) {
				e = c.Tr[this.fa[b]];
				for (d = 0; d < e; d++) {
					var f = a.apply(this.fa[b + 1 + 2 * d], this.fa[b + 1 + 2 * d + 1]);
					this.fa[b + 1 + 2 * d] = f.x;
					this.fa[b + 1 + 2 * d + 1] = f.y;
				}
				b += c.td[this.fa[b]];
			}
		};
		c.prototype.clone = function() {
			var a = new c();
			a.fa = this.fa.concat();
			return a;
		};
		c.prototype.kl = function(a) {
			for (
				var b = 0,
					d,
					e = (d = 0),
					f = new G(this.fa[1] || 0, this.fa[2] || 0, 0, 0),
					h;
				b < this.fa.length;

			) {
				switch (this.fa[b]) {
					case c.Yc:
					case c.rd:
						d = this.fa[b + 1];
						e = this.fa[b + 2];
						f.wr(d, e);
						break;
					case c.Lf:
						var k = (h = []),
							l = this.fa[b + 5],
							n = this.fa[b + 6];
						uc(
							k,
							d,
							e,
							this.fa[b + 1],
							this.fa[b + 2],
							this.fa[b + 3],
							this.fa[b + 4],
							l,
							n,
							a * a,
						);
						k.push(new F(l, n));
						for (d = 0; d < h.length; d++) f.wr(h[d].x, h[d].y);
						d = this.fa[b + 5];
						e = this.fa[b + 6];
						break;
					case c.Nf:
						k = h = [];
						l = this.fa[b + 3];
						n = this.fa[b + 4];
						vc(k, d, e, this.fa[b + 1], this.fa[b + 2], l, n, a * a);
						k.push(new F(l, n));
						for (d = 0; d < h.length; d++) f.wr(h[d].x, h[d].y);
						d = this.fa[b + 3];
						e = this.fa[b + 4];
				}
				b += c.td[this.fa[b]];
			}
			return f;
		};
		c.prototype.append = function(a) {
			this.fa = this.fa.concat(a.fa);
		};
		c.prototype.rn = function(a) {
			for (var b = 0, d = 0, e = 0, f = new c(), h; b < this.fa.length; ) {
				switch (this.fa[b]) {
					case c.Yc:
						d = this.fa[b + 1];
						e = this.fa[b + 2];
						f.moveTo(d, e);
						break;
					case c.rd:
						d = this.fa[b + 1];
						e = this.fa[b + 2];
						f.lineTo(d, e);
						break;
					case c.Lf:
						var k = (h = []),
							l = this.fa[b + 5],
							n = this.fa[b + 6];
						uc(
							k,
							d,
							e,
							this.fa[b + 1],
							this.fa[b + 2],
							this.fa[b + 3],
							this.fa[b + 4],
							l,
							n,
							a * a,
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
					case c.Nf:
						k = h = [];
						l = this.fa[b + 3];
						n = this.fa[b + 4];
						vc(k, d, e, this.fa[b + 1], this.fa[b + 2], l, n, a * a);
						k.push(new F(l, n));
						for (d = 0; d < h.length; d++) f.lineTo(h[d].x, h[d].y);
						d = this.fa[b + 3];
						e = this.fa[b + 4];
						break;
					case c.pd:
						f.closePath();
				}
				b += c.td[this.fa[b]];
			}
			return f;
		};
		c.prototype.bC = function(a, b, d) {
			void 0 === d && (d = 0);
			for (var e = 0, c = this.Se(); e < c.length; e++)
				if (wc(c[e], a, b)) return !0;
			return 0 < d && this.rv(a, b, d);
		};
		c.prototype.rv = function(a, b, d) {
			var e = 0,
				f = 0,
				h = 0;
			for (d *= d; h < this.fa.length; ) {
				switch (this.fa[h]) {
					case c.Yc:
						e = this.fa[h + 1];
						f = this.fa[h + 2];
						break;
					case c.rd:
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
				h += c.td[this.fa[h]];
			}
			return !1;
		};
		c.prototype.Al = function(a, b) {
			for (
				var d = 0, e = 0, f = b[0], h, k = new F(0, 0), l;
				d < this.fa.length;

			) {
				switch (this.fa[d]) {
					case c.Yc:
						l = this.fa[d + 1];
						h = this.fa[d + 2];
						a.moveTo(l, h);
						k = new F(l, h);
						break;
					case c.rd:
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
				d += c.td[this.fa[d]];
			}
		};
		c.prototype.Pi = function() {
			function a(a, b) {
				f -= (a - d) * (b + e);
				d = a;
				e = b;
			}
			for (var b = 0, d, e, f = 0; b < this.fa.length; ) {
				switch (this.fa[b]) {
					case c.Yc:
						d = this.fa[b + 1];
						e = this.fa[b + 2];
						break;
					case c.rd:
						a(this.fa[b + 1], this.fa[b + 2]);
						break;
					case c.Lf:
						a(this.fa[b + 5], this.fa[b + 6]);
						break;
					case c.Nf:
						a(this.fa[b + 3], this.fa[b + 4]);
				}
				b += c.td[this.fa[b]];
			}
			return f / 2;
		};
		c.prototype.pt = function(a) {
			for (var b = 0, d = 0, e = 0, f = !1; b < this.fa.length; ) {
				switch (this.fa[b]) {
					case c.Yc:
						d = this.fa[b + 1];
						e = this.fa[b + 2];
						f = !0;
						break;
					case c.rd:
						a(d, e, this.fa[b + 1], this.fa[b + 2], f),
							(d = this.fa[b + 1]),
							(e = this.fa[b + 2]),
							(f = !1);
				}
				b += c.td[this.fa[b]];
			}
		};
		c.prototype.Rx = function() {
			var a = 0;
			this.pt(function(b, d, e, c) {
				a += mc(b, d, e, c);
			});
			return a;
		};
		c.prototype.Vx = function(a) {
			var b = new c(),
				d = 0;
			this.pt(function(e, c, h, k, l) {
				if (d <= a) {
					l && b.moveTo(e, c);
					l = mc(e, c, h, k);
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
		c.Yc = 0;
		c.rd = 1;
		c.Lf = 2;
		c.Nf = 3;
		c.pd = 4;
		c.td = [3, 3, 7, 5, 1];
		c.Tr = [1, 1, 3, 2, 0];
		return c;
	})();
	function yc(c, a, b, d, e, f, h) {
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
	function zc(c, a, b, d, e) {
		var f;
		if (2 >= d - b) e.push(c[b]);
		else {
			var h = c[b],
				k = c[d - 1],
				l = 0,
				n = 0;
			for (f = b + 1; f < d; f++) {
				var r = c[f].gt(h, k);
				r > l && ((l = r), (n = f));
			}
			0 < n && l > a ? (zc(c, a, b, n, e), zc(c, a, n, d, e)) : e.push(h);
		}
	}
	function Ac(c, a) {
		var b = [];
		zc(c, a, 0, c.length, b);
		0 < c.length &&
			0 < b.length &&
			!c[c.length - 1].dd(b[b.length - 1]) &&
			b.push(c[c.length - 1]);
		return b;
	}
	var Bc = (function() {
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
		c.prototype.PA = function(a) {
			var b = this.Se();
			a = a.Se();
			for (var d = 0; d < b.length; d++) {
				var e = b[d];
				if (!wc(a, e.x, e.y)) return !1;
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
		c.prototype.Mc = function(a, b, d) {
			void 0 === d && (d = 0);
			return wc(this.oa, a, b) || (d && xc(this.oa, a, b, d));
		};
		c.prototype.Os = function() {
			return G.xh(this.oa);
		};
		c.prototype.clone = function() {
			return new c(this.oa.slice(0));
		};
		c.prototype.dd = function(a) {
			if (this.oa.length !== a.oa.length) return !1;
			for (var b = 0; b < this.oa.length; b++) {
				var d = this.oa[b],
					e = a.oa[b];
				if (d.x !== e.x || d.y !== e.y) return !1;
			}
			return !0;
		};
		c.prototype.Fd = function(a) {
			for (var b = [], d = 0; d < this.oa.length; d++) {
				var e = this.oa[0 === d ? this.oa.length - 1 : d - 1],
					c = this.oa[d],
					h = this.oa[d === this.oa.length - 1 ? 0 : d + 1],
					k = mc(e.x, e.y, c.x, c.y),
					l = mc(h.x, h.y, c.x, c.y);
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
		c.prototype.Se = function() {
			return this.oa;
		};
		c.BE = function(a, b) {
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
	function Cc(c) {
		var a = [],
			b = 0;
		for (c = c.split(","); b < c.length; b++) {
			var d = parseFloat(c[b]);
			isNaN(d) || a.push(d);
		}
		return a;
	}
	function Dc(c, a, b) {
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
	function Ec(c, a, b, d, e, f, h, k) {
		b -= c;
		d -= a;
		h -= e;
		k -= f;
		var l = -h * d + b * k;
		if (0 === l) return null;
		e = (h * (a - f) - k * (c - e)) / l;
		return new F(c + e * b, a + e * d);
	}
	function Fc(c, a) {
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
			? Fc(
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
							})(c),
						),
					),
					a - 1,
			  )
			: c;
	}
	function Gc(c, a) {
		var b = 0,
			d = 0,
			e = 0,
			f = 0,
			h = 0,
			k = 0;
		Hc(a, function(a, n) {
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
								n[l + 3] + d,
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
						var A = (d - H) / 2;
						var E = Math.cos(v) * I + Math.sin(v) * A;
						I = -Math.sin(v) * I + Math.cos(v) * A;
						A = M * M;
						var R = x * x,
							na = E * E,
							la = I * I,
							Ea = na / A + la / R;
						1 < Ea &&
							((A = Math.sqrt(Ea)),
							(M *= A),
							(x *= A),
							(A = M * M),
							(R = x * x));
						na = A * la + R * na;
						A = Math.sqrt(Math.max(0, (A * R - na) / na));
						y == B && (A = -A);
						R = (A * M * I) / x;
						la = (-A * x * E) / M;
						na = Math.cos(v) * R - Math.sin(v) * la + (b + w) / 2;
						A = Math.sin(v) * R + Math.cos(v) * la + (d + H) / 2;
						y = Ic(1, 0, (E - R) / M, (I - la) / x);
						I = Ic((E - R) / M, (I - la) / x, (-E - R) / M, (-I - la) / x);
						B || (I -= 2 * Math.PI);
						I %= 2 * Math.PI;
						B = na;
						E = A;
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
	function Hc(c, a) {
		function b() {
			if (0 <= h) {
				var a = parseFloat(c.substr(h, h + f));
				if (isNaN(a))
					throw Error(
						"Error parsing number: " + c.substr(h, h + f) + " in " + c,
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
	function Ic(c, a, b, d) {
		var e = (c * b + a * d) / (mc(0, 0, c, a) * mc(0, 0, b, d));
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
	function Jc(c, a, b, d, e) {
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
					x = nc(w.x, w.y, y.x, y.y);
					r = new F(x.y, -x.x);
					v = new F(w.x - x.x * H - r.x * H, w.y - x.y * H - r.y * H);
					w = new F(w.x - x.x * H + r.x * H, w.y - x.y * H + r.y * H);
					if (n.length) {
						var I = n[n.length - 1];
						var A = B[B.length - 1];
						v =
							Ec(
								I.x,
								I.y,
								I.x + A.x,
								I.y + A.y,
								v.x,
								v.y,
								v.x + x.x,
								v.y + x.y,
							) || v;
						I = l[l.length - 1];
						w =
							Ec(
								I.x,
								I.y,
								I.x + A.x,
								I.y + A.y,
								w.x,
								w.y,
								w.x + x.x,
								w.y + x.y,
							) || w;
					}
					n.push(v);
					l.push(w);
					B.push(x);
				}
				k
					? ((I = n[0]),
					  (A = B[0]),
					  (v =
							Ec(
								I.x,
								I.y,
								I.x + A.x,
								I.y + A.y,
								v.x,
								v.y,
								v.x + x.x,
								v.y + x.y,
							) || v),
					  (I = l[0]),
					  (w =
							Ec(
								I.x,
								I.y,
								I.x + A.x,
								I.y + A.y,
								w.x,
								w.y,
								w.x + x.x,
								w.y + x.y,
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
	var Kc = (function() {
		function c() {
			this.path = [];
		}
		c.prototype.wg = function(a, b) {
			(0 < this.path.length &&
				a === this.path[this.path.length - 1].x &&
				b === this.path[this.path.length - 1].y) ||
				this.path.push(new F(a, b));
		};
		c.prototype.tp = function() {
			return this.path;
		};
		return c;
	})();
	function Lc(c, a) {
		c.length > a && (c = c.slice(c.length - a));
		return c;
	}
	var Mc = (function(c) {
		function a() {
			var a = (null !== c && c.apply(this, arguments)) || this;
			a.wk = [];
			a.order = 3;
			a.jr = 3;
			a.Rv = Math.pow(2, a.order);
			a.sampleSize = a.jr + 1;
			return a;
		}
		__extends(a, c);
		a.prototype.tp = function() {
			return this.wk;
		};
		a.prototype.wg = function(a, d) {
			c.prototype.wg.call(this, a, d);
			this.path.length < this.sampleSize
				? (this.wk = Fc(this.path, this.order))
				: ((a = Lc(
						Fc(Lc(this.path, this.sampleSize), this.order),
						this.Rv * this.jr,
				  )),
				  (this.wk = this.wk
						.slice(0, this.wk.length - this.Rv * (this.jr - 1))
						.concat(a)));
		};
		return a;
	})(Kc);
	function Nc(c) {
		var a, b, d, e, f, h, k;
		return __generator(this, function(l) {
			switch (l.label) {
				case 0:
					return 2 > c.length ? [2] : [4, { pi: c[0], length: 0 }];
				case 1:
					(a = l.sent()), (b = c[0]), (d = 1), (l.label = 2);
				case 2:
					if (!(d < c.length)) return [3, 7];
					e = c[d];
					f = mc(b.x, b.y, e.x, e.y);
					if (1e-5 > f) return d++, [3, 2];
					h = (e.x - b.x) / f;
					k = (e.y - b.y) / f;
					l.label = 3;
				case 3:
					if (!(f > a)) return [3, 5];
					b = { x: b.x + h * a, y: b.y + k * a };
					f -= a;
					return [4, { pi: b, length: a }];
				case 4:
					return (a = l.sent()), [3, 3];
				case 5:
					return [4, { pi: { x: e.x, y: e.y }, length: f }];
				case 6:
					return (a = l.sent()), (b = e), d++, [3, 2];
				case 7:
					return [2];
			}
		});
	}
	function Oc(c, a, b, d, e, f) {
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
	var Pc = (function() {
		function c(a, b) {
			void 0 === b && (b = new J());
			this.lj = [];
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
							this.lj.push({ gw: d, di: n ? l.x : h.x, Ke: r, lB: v, lm: w });
						}
						h = l;
					}
			}
			this.lj.sort(function(a, b) {
				return a.Ke != b.Ke ? a.Ke - b.Ke : a.di - b.di;
			});
		}
		c.prototype.dA = function(a) {
			if (1 > this.lj.length || 0 >= a) return [];
			for (var b = this.lj, d = this.lj[0].Ke, e = 0, c = [], h = []; ; ) {
				for (var k = 0; k < c.length; k++)
					d > c[k].hb.lB && ((c[k] = c[c.length - 1]), --c.length);
				if (0 === c.length && e === b.length) break;
				for (; e < b.length && b[e].Ke <= d; e++) c.push({ y: d, hb: b[e] });
				c.sort(function(a, b) {
					var e = a.hb.di + (d - a.hb.Ke) * a.hb.lm,
						c = b.hb.di + (d - b.hb.Ke) * b.hb.lm;
					return 1e-5 < Math.abs(e - c) ? e - c : a.hb.gw - b.hb.gw;
				});
				for (k = 1; k < c.length; k += 2) {
					var l = c[k - 1].hb,
						n = c[k].hb;
					n = n.di + (d - n.Ke) * n.lm;
					h.push({
						start: this.inverse.apply(l.di + (d - l.Ke) * l.lm, d),
						end: this.inverse.apply(n, d),
					});
				}
				d += a;
			}
			return h;
		};
		return c;
	})();
	function L(c) {
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
	var Tc = z.create("BaseNode"),
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
			c.prototype.Um = function() {
				return this.type();
			};
			c.prototype.toString = function() {
				return this.type() + ":" + this.id;
			};
			c.prototype.IB = function(a, b) {
				this.aa.Ld([this.id], a, b);
			};
			c.prototype.Wh = function(a) {
				this.scope || (this.scope = Uc(a, this));
				return this.scope;
			};
			c.vd = function(a, b) {
				c.types[a] = b;
			};
			c.create = function(a, b, d) {
				return a in c.types ? new c.types[a](b, d) : null;
			};
			c.prototype.Sa = function() {};
			c.prototype.Mg = function(a, b) {
				b = kc(this.ba[a], b);
				b instanceof Array && (b = b.slice(0));
				return b;
			};
			c.prototype.ub = function() {
				var a = {},
					b;
				for (b in this.ba) this.ba.hasOwnProperty(b) && (a[b] = this.ia(b));
				return a;
			};
			c.prototype.Xb = function(a) {
				for (var b in a) this.setProperty(b, a[b]);
			};
			c.prototype.Sg = function(a) {
				return a in this.ba;
			};
			c.prototype.kc = function(a) {
				return this.Sg(a) || "$" === a[0] || "_" === a[0];
			};
			c.prototype.setProperty = function(a, b) {
				b = this.Mg(a, b);
				this.kc(a)
					? (Tc(
							"%s:%s set %s=%s",
							this.id,
							this.type(),
							a,
							"string" === typeof b ? b.substr(0, 100) : b,
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
			c.prototype.Gp = function(a, b) {
				this.children.splice(b, 0, a);
			};
			c.prototype.nb = function(a) {
				return this.children[a];
			};
			c.prototype.ie = function(a) {
				for (var b = 0; b < this.children.length; b++)
					if (a === this.nb(b)) return b;
				return -1;
			};
			c.types = {};
			return c;
		})();
	var Wc = z.create("WrappedNode");
	function Xc(c, a) {
		var b = 0;
		return function() {
			return {
				next: function() {
					return b >= c.children.length
						? { done: !0 }
						: { value: c.nb(b++).Wh(a) };
				},
			};
		};
	}
	function Uc(c, a) {
		var b = {};
		b.ctx = c.ctx;
		b.id = a.id;
		b.type = a.Um();
		"undefined" !== typeof Proxy
			? ((b.children = new Proxy(
					{},
					{
						get: function(b, e) {
							ea();
							ha();
							if (e === Symbol.iterator) return Xc(a, c);
							if ("length" === e) return a.children.length;
							b = a.nb(e);
							return b instanceof Vc ? b.Wh(c) : b;
						},
					},
			  )),
			  (b.props = Yc(a.ba, "", function(b, e) {
					a.IB(b, e);
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
				return a.parent ? a.parent.Wh(c) : null;
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
			a.PE = "DataNode";
			return a;
		}
		__extends(a, c);
		a.prototype.type = function() {
			return "DataNode";
		};
		a.prototype.kc = function() {
			return !0;
		};
		return a;
	})(Vc);
	Vc.vd("DataNode", Zc);
	var $c = (function() {
		function c() {
			this.Cc = [];
		}
		c.prototype.qC = function(a) {
			for (var b = 0; b < this.Cc.length; b++)
				this.Cc[b].parent === a &&
					((this.Cc[b] = this.Cc[this.Cc.length - 1]), this.Cc.length--, b--);
		};
		c.prototype.Tv = function(a, b) {
			for (var d = 0; d < this.Cc.length; d++)
				this.Cc[d].parent === a &&
					(b.length
						? (this.Cc[d].yd = b.pop())
						: ((this.Cc[d] = this.Cc[this.Cc.length - 1]),
						  this.Cc.length--,
						  d--));
			for (d = 0; d < b.length; d++) this.Cc.push({ parent: a, yd: b[d] });
		};
		c.prototype.Wo = function(a) {
			for (var b = {}, d = [], e = {}, c = 0; c < a.length; c++) b[a[c]] = 1;
			for (a = !0; a; ) {
				a = !1;
				c = 0;
				for (var h = this.Cc; c < h.length; c++) {
					var k = h[c];
					k.yd in b &&
						!(k.parent in e) &&
						((e[k.parent] = 1), d.push(k.parent), (a = !0));
				}
			}
			return d;
		};
		c.prototype.sort = function(a) {
			for (var b = {}, d = 0, e = this.Cc; d < e.length; d++) {
				var c = e[d];
				b[c.parent + ":" + c.yd] = 1;
			}
			a.sort(function(a, d) {
				return a.id + "_" + d.id in b ? 1 : 0;
			});
		};
		return c;
	})();
	var ad = (function() {
		function c(a, b) {
			var d = this;
			this.ma = a;
			this.xl = b;
			this.height = 0;
			this.x = b.x || 0;
			this.y = b.y || 0;
			this.vE = b.xoffset || 0;
			this.yE = b.yoffset || 0;
			this.width = b.width || 0;
			this.Qa = document.createElement("img");
			this.Qa.src = b.image || "";
			this.Qa.onload = function() {
				d.width = d.width || d.Qa.naturalWidth;
				d.height = (d.width / d.Qa.naturalWidth) * d.Qa.naturalHeight;
				a.Kd();
			};
			b.hoverImage
				? ((this.nm = document.createElement("img")),
				  (this.nm.src = b.hoverImage))
				: (this.nm = this.Qa);
			this.vs = this.Qa;
		}
		c.prototype.Es = function(a) {
			return this.xl.appliesTo ? this.xl.appliesTo(a.id, this.ma) : !0;
		};
		c.prototype.$t = function(a) {
			var b = a.za;
			a = a.Na().Hb();
			return new G(
				b.x + this.x * b.width + (this.vE - this.width / 2) / a.x,
				b.y + this.y * b.height + (this.yE - this.height / 2) / a.y,
				this.width / a.x,
				this.height / a.y,
			);
		};
		c.prototype.Ib = function(a, b, d, e) {
			var c = this.$t(a);
			a = a
				.Na()
				.inverse()
				.apply(b, d);
			return c.Mc(a.x, a.y, e);
		};
		c.prototype.la = function(a, b, d) {
			this.vs.complete &&
				(a.save(),
				b.Na().Fc(a),
				(b = this.$t(b)),
				this.nm.complete && d
					? a.drawImage(this.nm, b.x, b.y, b.width, b.height)
					: a.drawImage(this.vs, b.x, b.y, b.width, b.height),
				a.restore());
		};
		c.prototype.click = function(a, b) {
			if (this.xl.onclick)
				try {
					this.xl.onclick(a.id, this.ma, b);
				} catch (d) {
					console.log("Error in decoration onclick handler: ", d);
				}
		};
		return c;
	})();
	var bd = (function() {
		function c(a) {
			this.xb = a;
			this.nl = [];
			this.Tm = !0;
			this.log = z.create("cloudAddon");
			this.Af = a.ia("cloudRadius");
		}
		c.prototype.format = function() {
			var a = this.xb.Yd.Se()[0];
			this.log("Format cloud; %s points", a.length);
			this.nl = this.fy(a, this.Af);
		};
		c.prototype.fy = function(a, b) {
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
					d.push({ x: h.x + w * l, y: h.y + w * n, ab: 0, end: 0 });
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
					(a.ab = k[1]),
					(e = a);
			return d;
		};
		c.prototype.la = function(a) {
			this.log("Drawing cloud with %s circles", this.nl.length);
			var b = (15 * Math.PI) / 180,
				d = this.Af;
			a.beginPath();
			for (var e = 0; e < this.nl.length; e++) {
				var c = this.nl[e];
				a.arc(c.x, c.y, d, c.ab, c.end + b);
			}
			a.stroke();
		};
		return c;
	})();
	var dd = (function(c) {
			function a(b, d) {
				b = c.call(this, b, d) || this;
				b.rect = new G(0, 0, 1, 1);
				b.Tk = !1;
				b.za = new G(0, 0, 1, 1);
				b.Vc = 0;
				b.log = z.create("GraphicsNode");
				b.offsetX = 0;
				b.offsetY = 0;
				b.lb |= 17;
				b.ba.matrix = new J();
				b.ba.layer = "default";
				b.lo(a.sa);
				return b;
			}
			__extends(a, c);
			a.prototype.lo = function(a) {
				for (var b in a) a.hasOwnProperty(b) && (this.ba[b] = a[b]);
			};
			a.prototype.clip = function() {};
			a.prototype.Sa = function() {};
			a.prototype.pf = function() {
				return !1 !== this.ia("lockEditMode");
			};
			a.prototype.cu = function() {
				return !1;
			};
			a.prototype.ai = function() {
				return null;
			};
			a.prototype.kj = function() {};
			a.prototype.su = function() {
				return !1;
			};
			a.prototype.Vq = function() {
				return !1;
			};
			a.prototype.Tg = function() {
				return "text" in this.ba;
			};
			a.prototype.zc = function() {
				var a = this.ia("layer");
				return a ? "" + a : "default";
			};
			a.prototype.sm = function() {
				return (
					null !== this.parent &&
					null !== this.parent.parent &&
					"GroupNode" === this.parent.type()
				);
			};
			a.prototype.type = function() {
				return "BaseNode";
			};
			a.prototype.Ze = function(a) {
				return { matrix: a.multiply(this.Na()) };
			};
			a.prototype.Na = function() {
				return this.ia("matrix");
			};
			a.prototype.dc = function() {
				return this.Na().inverse();
			};
			a.prototype.cw = function(a) {
				this.setProperty("matrix", a);
			};
			a.prototype.Mg = function(a, d) {
				if ("shadow" === a && ("string" === typeof d || "boolean" === typeof d))
					return d;
				d = c.prototype.Mg.call(this, a, d);
				"matrix" === a && "string" === typeof d
					? (d = new J(d))
					: "opacity" === a && (d = parseFloat(d));
				return d;
			};
			a.prototype.kc = function(a) {
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
				return c.prototype.kc.call(this, a);
			};
			a.prototype.Ml = function() {
				var a = new Bc(this.za);
				a.transform(this.Na());
				return a;
			};
			a.prototype.Vd = function() {
				return this.ia("zIndex") || 0;
			};
			a.prototype.transform = function(a) {
				this.cw(a.multiply(this.Na()));
			};
			a.prototype.format = function() {};
			a.prototype.Ib = function(a, d, e) {
				a = this.dc().apply(a, d);
				d = this.dc().Hb();
				d = 0.5 * (d.x + d.y);
				return this.hidden() ||
					this.ia("locked") ||
					!this.za.Mc(a.x, a.y, e * d)
					? null
					: this;
			};
			a.prototype.lg = function(a) {
				this.Tk = a;
			};
			a.prototype.hidden = function() {
				return this.Tk;
			};
			a.prototype.zi = function() {};
			a.prototype.Em = function() {};
			a.prototype.Hm = function() {};
			a.prototype.gk = function(a) {
				if (a.gk) {
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
					a.gk(b);
				}
			};
			a.prototype.fk = function(a) {
				a.fk && a.fk();
			};
			a.prototype.la = function(a) {
				a.save();
				this.gk(a);
				a.translate(this.offsetX, this.offsetY);
				var b = this.ba.matrix;
				a.transform(b.m11, b.m21, b.m12, b.m22, b.Ba, b.Ca);
				"erase" === this.ba.strokeStyle
					? a.Li
						? (a.strokeStyle = a.Li)
						: ((a.strokeStyle = q.Oa),
						  (a.globalCompositeOperation = "destination-out"))
					: (a.strokeStyle = this.ba.strokeStyle);
				a.fillStyle = this.ba.fillStyle;
				a.lineWidth = this.ba.lineWidth;
				this.ba.shadow && cd(this.ba.shadow, a);
				"opacity" in this.ba && (a.globalAlpha = this.ba.opacity);
				this.Of(a);
				this.fk(a);
				a.restore();
			};
			a.prototype.qt = function(a, d) {
				d = d
					? function(b) {
							a.fillStyle = b;
							a.fill();
					  }
					: function(b) {
							a.strokeStyle = b;
							a.stroke();
					  };
				a.Li
					? ((a.globalCompositeOperation = "destination-out"),
					  --a.lineWidth,
					  d(q.Oa),
					  (a.globalCompositeOperation = "source-over"),
					  (a.fillStyle = a.Li),
					  (a.lineWidth += 2),
					  d(a.Li),
					  --a.lineWidth)
					: ((a.globalCompositeOperation = "destination-out"),
					  d(q.Oa),
					  (a.globalCompositeOperation = "source-over"));
			};
			a.prototype.Of = function() {};
			a.prototype.resolve = function() {
				return !1;
			};
			a.prototype.Ft = function(a, d, e, c) {
				this.nj || (this.nj = {});
				var b = this.nj[a];
				if (!b || b.Aw !== c) {
					(b && c === b.Aw) || ((b = { Aw: c, value: c }), (this.nj[a] = b));
					a = /url\(([^\)]+)\)/.exec(c);
					var f;
					a && (f = a[1]);
					var l = this;
					f &&
						((b.value = "rgba(0, 0, 0, 0.2)"),
						e.add(this.id, "image", f, null, function(a) {
							l.log("Got image response.");
							b.value = d.createPattern(a, "repeat") || "magenta";
							e.jg(l.id);
						}));
				}
			};
			a.prototype.hp = function(a) {
				return this.nj && (a = this.nj[a]) ? a.value : "magenta";
			};
			a.prototype.Le = function() {
				return {};
			};
			a.prototype.Ql = function() {};
			a.prototype.Rl = function() {
				return null;
			};
			a.prototype.Xv = function() {};
			a.prototype.wp = function() {
				return [];
			};
			a.prototype.en = function(a, d) {
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
		ed = / *(\d+)(px)? +(\d+)(px)? +(\d+)(px)? +(.+)/i;
	function cd(c, a) {
		void 0 === a && (a = {});
		a.shadowOffsetX = 0;
		a.shadowOffsetY = 0;
		a.shadowBlur = 0;
		a.shadowColor = q.We;
		if ("string" === typeof c) {
			if ((c = ed.exec(c)))
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
	var fd = (function() {
		function c() {
			this.text = "";
			this.font = "10px Arial";
			this.Dt = "Arial";
			this.fontSize = 10;
			this.lines = [];
			this.Cr = "top";
			this.Dj = "left";
			this.Kj = this.bold = !1;
			this.textDecoration = "";
			this.log = z.create("TextBox");
			this.rect = new G(0, 0, 0, this.fontSize);
		}
		c.prototype.an = function(a, b, d, e, c) {
			this.Dt = a;
			this.fontSize = b;
			this.bold = d;
			this.Kj = e;
			this.textDecoration = c;
		};
		c.prototype.ng = function(a) {
			this.text = a;
		};
		c.prototype.Nq = function(a, b) {
			switch (a) {
				case "left":
				case "center":
				case "right":
					this.Dj = a;
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
					this.Cr = b;
					break;
				case null:
					break;
				default:
					this.log("Unknnown alignment: %s", b);
			}
		};
		c.prototype.format = function(a, b, d) {
			this.font = "" + this.fontSize + 'px "' + this.Dt + '"';
			this.bold && (this.font = "bold " + this.font);
			this.Kj && (this.font = "italic " + this.font);
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
			if ("center" === this.Dj)
				for (e = 0; e < this.lines.length; e++)
					(a = this.lines[e]), (a.x = this.rect.width / 2 - a.width / 2);
			else if ("right" === this.Dj)
				for (e = 0; e < this.lines.length; e++)
					(a = this.lines[e]), (a.x = this.rect.width - a.width);
			b && "center" === this.Dj
				? (this.rect.x = b / 2 - this.rect.width / 2)
				: b && "right" === this.Dj && (this.rect.x = b - this.rect.width);
			d && "middle" === this.Cr
				? (this.rect.y = d / 2 - this.rect.height / 2)
				: d && "bottom" === this.Cr && (this.rect.y = d - this.rect.height);
		};
		c.prototype.la = function(a, b, d) {
			this.fillText(a, b, d);
			this.mt(a, b, d);
		};
		c.prototype.mt = function(a, b, d) {
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
	var gd = (function(c) {
		function a(b, d) {
			b = c.call(this, b, d) || this;
			b.eb = new fd();
			b.Ap = 0;
			b.border = { lineWidth: 0, Lc: q.Oa };
			b.width = 0;
			b.height = 0;
			b.YE = 0;
			b.ZE = 0;
			b.log = z.create("TEXT", !0);
			b.lo(a.Yw);
			b.ba.text = "lorum ipsum dolor";
			return b;
		}
		__extends(a, c);
		a.prototype.type = function() {
			return "TextNode";
		};
		a.prototype.wj = function() {
			return void 0 !== this.ia("width") ? 2 : this.ia("wrap") ? 1 : 0;
		};
		a.prototype.Ze = function(a) {
			var b = c.prototype.Ze.call(this, a);
			2 === this.wj() &&
				((a = a.Hb()),
				this.log("Scale %s", a),
				1e-8 > Math.abs(a.x - a.y) &&
					((b.fontSize = this.ba.fontSize * a.x),
					(b.padding = (this.ba.padding || 0) * a.x)));
			return b;
		};
		a.prototype.kc = function(a) {
			switch (a) {
				case "scaleFont":
				case "padding":
				case "width":
				case "height":
				case "baseWidth":
					return !0;
			}
			return c.prototype.kc.call(this, a);
		};
		a.prototype.setProperty = function(a, d) {
			switch (a) {
				case "fillStyle":
				case "textFillStyle":
					this.ba.textFillStyle = d;
					this.ba.fillStyle = d;
					return;
				case "border-color":
					a = this.dk(this.ia("border") || "");
					this.setProperty("border", a.lineWidth + "px " + d);
					return;
				case "border-width":
					a = this.dk(this.ia("border") || "");
					this.setProperty("border", d + "px " + a.Lc);
					return;
			}
			c.prototype.setProperty.call(this, a, d);
		};
		a.prototype.ub = function() {
			var a = c.prototype.ub.call(this);
			a["border-color"] = this.ia("border-color");
			a["border-width"] = this.ia("border-width");
			return a;
		};
		a.prototype.Sg = function(a) {
			switch (a) {
				case "border":
					return !0;
			}
			return c.prototype.Sg.call(this, a);
		};
		a.prototype.ia = function(a) {
			switch (a) {
				case "border-color":
					return this.dk(this.ia("border") || "").Lc;
				case "border-width":
					return this.dk(this.ia("border") || "").lineWidth;
			}
			return c.prototype.ia.call(this, a);
		};
		a.prototype.format = function(a) {
			var b = this.ba.matrix,
				e = b.apply(0, 0),
				c = b.apply(1, 0);
			e = e.bc(c);
			c = this.wj();
			var h = this.ba.text;
			0 === c &&
				h.length &&
				10 === h.charCodeAt(h.length - 1) &&
				(h = h.substr(0, h.length - 1));
			this.eb.ng(h);
			b = b.Hb();
			this.eb.an(
				this.ba.fontName,
				this.ba.fontSize,
				this.ba.bold,
				this.ba.italic,
				this.ba.textDecoration,
			);
			this.eb.Nq(this.ba.textAlign, "top");
			c = this.ia("padding") || 0;
			h = this.ia("lineWidth") + 0;
			switch (this.wj()) {
				case 0:
					this.eb.format(a, 0, 0);
					e = this.eb.rect.width;
					a = this.eb.rect.height;
					this.za = new G(0, -(0 + this.ia("fontSize")), e, a);
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
					this.za = new G(0, 0, k, a);
					break;
				case 2:
					e = this.ia("width") || 0;
					this.ia("height");
					e = (e - (2 * c) / b.x) * b.x;
					this.eb.format(a, e, 0);
					this.za = new G(
						0,
						0,
						e / b.x,
						this.eb.rect.height + (2 * c * b.y - 2 * c) / b.y,
					);
					this.za.x += (c + h) / b.x;
					this.za.y += (c + h) / b.y;
					break;
				default:
					throw Error("TextNode: Bad Mode " + this.wj());
			}
			this.za.height += (0.3 * this.ba.fontSize) / b.y;
			this.za.Fd((2 * c) / b.x, (2 * c) / b.y);
			this.za.Fd(h / b.x, h / b.y);
			a = new Bc(this.za);
			a.transform(this.Na());
			this.rect = a.Os();
			this.Ap = this.rect.height;
			this.border = this.ba.border
				? this.dk(this.ba.border)
				: { lineWidth: 0, Lc: q.Oa };
		};
		a.prototype.dk = function(a) {
			var b = { lineWidth: 0, Lc: q.Oa };
			a = a.split(" ");
			for (var e = 0; e < a.length; e++) {
				var c = parseFloat(a[e]);
				if (isNaN(c)) {
					if ((c = q.Ll(a[e]))) b.Lc = c.toString();
				} else b.lineWidth = c;
			}
			return b;
		};
		a.prototype.Na = function() {
			return !1 === this.ia("scaleFont")
				? c.prototype.Na.call(this).vn()
				: c.prototype.Na.call(this);
		};
		a.prototype.la = function(a) {
			if (0 !== this.ba.text.length) {
				a.save();
				this.gk(a);
				"opacity" in this.ba && (a.globalAlpha = this.ba.opacity);
				var b = this.ba.background;
				if (b || this.border.lineWidth)
					a.save(),
						this.Na().Fc(a),
						b &&
							((a.fillStyle = b),
							a.fillRect(this.za.x, this.za.y, this.za.width, this.za.height)),
						this.border.lineWidth &&
							(a.beginPath(),
							(a.strokeStyle = this.border.Lc),
							(a.lineWidth = this.border.lineWidth),
							a.rect(this.za.x, this.za.y, this.za.width, this.za.height),
							(b = this.dc()),
							b
								.vn()
								.multiply(b)
								.Fc(a),
							a.stroke()),
						a.restore();
				b = this.wj();
				var e = this.ba.padding || 0;
				0 !== b
					? this.Na()
							.vn()
							.Fc(a)
					: this.Na().Fc(a);
				a.strokeStyle = this.ba.strokeStyle;
				a.fillStyle = this.ba.fillStyle;
				a.lineWidth = this.ba.lineWidth;
				var c = 0,
					h = this.Na().Hb(),
					k = this.za.height * h.y;
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
						this.za,
						h.x,
						this.eb.rect.width,
					);
				this.ba.shadow &&
					((a.shadowOffsetX = 3),
					(a.shadowOffsetY = 3),
					(a.shadowBlur = 5),
					(a.shadowColor = "rgba(0,0,0,0.5)"));
				0 < this.ba.lineWidth && this.eb.strokeText(a, 0, c);
				this.eb.fillText(a, 0, c);
				this.eb.mt(a, 0, c);
				this.fk(a);
				a.restore();
			}
		};
		a.Yw = {
			textFillStyle: q.Oa,
			fontName: "Arial",
			fontSize: 20,
			lineWidth: 0,
			fillStyle: q.Oa,
			wrap: !1,
			textAlign: "left",
			bold: !1,
			italic: !1,
			background: q.We,
			textDecoration: "",
		};
		return a;
	})(dd);
	dd.vd("TextNode", gd);
	var hd = (function() {
			function c(a, b) {
				this.qa = a;
				this.ja = b;
				this.xD = !0;
				this.log = z.create("MoveSegment");
			}
			c.prototype.la = function(a) {
				a.moveTo(this.ja.x, this.ja.y);
			};
			c.prototype.Hf = function() {
				return this.zd();
			};
			c.prototype.zd = function() {
				return { x: 1, y: 0 };
			};
			return c;
		})(),
		id = (function() {
			function c(a, b, d, e, c) {
				this.qa = a;
				this.ja = b;
				this.hn = e;
				this.Cf = c;
				this.log = z.create("LineSegment");
				this.nh = 0;
				this.Pa = new F(0, 0);
				this.Wa = new F(0, 0);
				this.length = 0;
				this.from = new F(0, 0);
				this.ja = b;
				this.qa = a;
				this.Cf = c;
				this.hn = e;
				d.next();
				this.Om = d.next();
				this.Pm = d.next();
				this.moveTo = this.Df = null;
				this.format();
			}
			c.prototype.format = function() {
				var a = mc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y);
				this.nh = this.length = a;
				var b = this.qa.ja.clone();
				this.qa instanceof c &&
					this.Cf &&
					((this.Cf = Math.min(this.Cf, a / 2, this.qa.length / 2)),
					(a = nc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y)),
					(b.x += a.x * this.Cf),
					(b.y += a.y * this.Cf),
					this.qa.sD(this.Cf),
					(this.nh -= this.Cf));
				this.from = b;
				null === this.Df && (this.Df = this.ja);
				a = (this.nh / 10) * this.hn;
				10 < a && (a = 10);
				var d = b.x,
					e = b.y,
					f = this.ja.x,
					h = this.ja.y;
				d += a;
				e += a;
				this.Pa = new F(d + this.Om * (f + a - d), e + this.Om * (h + a - e));
				d = b.x - a;
				f = this.ja.x - a;
				e = b.y - a;
				h = this.ja.y - a;
				this.Wa = new F(d + this.Pm * (f - d), e + this.Pm * (h - e));
			};
			c.prototype.sD = function(a) {
				var b = nc(this.from.x, this.from.y, this.ja.x, this.ja.y),
					d = this.ja.clone();
				d.x -= b.x * a;
				d.y -= b.y * a;
				this.Df = d;
				this.nh -= a;
				a = (this.nh / 10) * this.hn;
				10 < a && (a = 10);
				b = this.from.x;
				var e = this.from.y,
					c = d.x,
					h = d.y;
				b += a;
				e += a;
				this.Pa = new F(b + this.Om * (c + a - b), e + this.Om * (h + a - e));
				this.log("RECALC ctrl1=%s", this.Pa);
				b = this.from.x - a;
				c = d.x - a;
				e = this.from.y - a;
				h = d.y - a;
				this.Wa = new F(b + this.Pm * (c - b), e + this.Pm * (h - e));
			};
			c.prototype.rk = function(a) {
				this.qa = a;
				this.format();
				this.qa instanceof c && (this.moveTo = this.qa.Df);
			};
			c.prototype.la = function(a) {
				null !== this.Df &&
					(this.Cf &&
						(this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y),
						a.quadraticCurveTo(
							this.qa.ja.x,
							this.qa.ja.y,
							this.from.x,
							this.from.y,
						)),
					0 === this.hn
						? a.lineTo(this.Df.x, this.Df.y)
						: a.bezierCurveTo(
								this.Pa.x,
								this.Pa.y,
								this.Wa.x,
								this.Wa.y,
								this.Df.x,
								this.Df.y,
						  ));
			};
			c.prototype.Hf = function() {
				return this.qa
					? nc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
					: this.zd();
			};
			c.prototype.zd = function() {
				for (
					var a = this.Wa,
						b = mc(this.Wa.x, this.Wa.y, this.ja.x, this.ja.y),
						d = this.qa;
					20 > b && d instanceof c;

				)
					(a = d.Wa), (d = d.qa), (b += mc(a.x, a.y, this.ja.x, this.ja.y));
				return nc(a.x, a.y, this.ja.x, this.ja.y);
			};
			return c;
		})(),
		jd = (function() {
			function c(a, b, d) {
				this.Zq = d;
				this.ja = b;
				this.qa = a;
				this.Zq = d;
				var e = mc(a.ja.x, a.ja.y, b.x, b.y);
				e || (e = 1);
				var c = (b.x - a.ja.x) / e,
					h = (b.y - a.ja.y) / e;
				this.Wa = new F(b.x - e * d * c, b.y - e * d * h);
				if ((b = a.Wa) && a.qa) {
					var k = nc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y),
						l = mc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y);
					c = 0.5 * (c + k.x);
					h = 0.5 * (h + k.y);
					b.x = a.ja.x - l * d * c;
					b.y = a.ja.y - l * d * h;
				}
				this.Pa = new F(a.ja.x + e * d * c, a.ja.y + e * d * h);
				this.length = e;
			}
			c.prototype.rk = function(a) {
				this.qa = a;
				var b = a.Wa,
					d = (this.ja.x - a.ja.x) / this.length,
					e = (this.ja.y - a.ja.y) / this.length,
					c = this.Zq;
				if (b && a.qa) {
					var h = nc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y),
						k = mc(a.qa.ja.x, a.qa.ja.y, a.ja.x, a.ja.y);
					d = 0.5 * (d + h.x);
					e = 0.5 * (e + h.y);
					b.x = a.ja.x - k * c * d;
					b.y = a.ja.y - k * c * e;
				}
				this.Pa = new F(
					a.ja.x + this.length * c * d,
					a.ja.y + this.length * c * e,
				);
			};
			c.prototype.la = function(a) {
				a.bezierCurveTo(
					this.Pa.x,
					this.Pa.y,
					this.Wa.x,
					this.Wa.y,
					this.ja.x,
					this.ja.y,
				);
			};
			c.prototype.Hf = function() {
				return this.qa
					? nc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
					: { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return 0 < this.Zq
					? nc(this.Wa.x, this.Wa.y, this.ja.x, this.ja.y)
					: nc(this.qa.ja.x, this.qa.ja.y, this.ja.x, this.ja.y);
			};
			return c;
		})(),
		kd = (function() {
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
					this.ja.y,
				);
			};
			c.prototype.Hf = function() {
				return this.qa
					? nc(this.qa.ja.x, this.qa.ja.y, this.control.x, this.control.y)
					: { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return nc(this.control.x, this.control.y, this.ja.x, this.ja.y);
			};
			return c;
		})(),
		ld = (function() {
			function c(a, b, d, e) {
				this.qa = a;
				this.control = b;
				this.ja = d;
				this.Af = e;
			}
			c.prototype.la = function(a) {
				a.arcTo(this.control.x, this.control.y, this.ja.x, this.ja.y, this.Af);
			};
			c.prototype.Hf = function() {
				return { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return nc(0, 0, 1, 0);
			};
			return c;
		})(),
		md = (function() {
			function c(a, b, d, e, c, h, k) {
				this.qa = a;
				this.Sd = b;
				this.ja = d;
				this.Af = e;
				this.cr = c;
				this.ez = h;
				this.wy = k;
			}
			c.prototype.la = function(a) {
				a.arc(this.Sd.x, this.Sd.y, this.Af, this.cr, this.ez, 0 !== this.wy);
			};
			c.prototype.Hf = function() {
				return { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return nc(0, 0, 1, 0);
			};
			return c;
		})(),
		nd = (function() {
			function c(a, b, d, e) {
				this.Pa = b;
				this.Wa = d;
				this.Pa = b;
				this.Wa = d;
				this.ja = e;
				this.qa = a;
			}
			c.prototype.la = function(a) {
				a.bezierCurveTo(
					this.Pa.x,
					this.Pa.y,
					this.Wa.x,
					this.Wa.y,
					this.ja.x,
					this.ja.y,
				);
			};
			c.prototype.Hf = function() {
				return this.qa
					? nc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
					: { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return nc(this.Wa.x, this.Wa.y, this.ja.x, this.ja.y);
			};
			return c;
		})(),
		od = (function() {
			function c(a, b, d, e) {
				this.qa = a;
				this.Pa = b;
				this.Wa = d;
				this.ja = e;
			}
			c.prototype.la = function(a) {
				if (this.qa) {
					var b = [];
					this.qa.Wa && b.push(this.qa.Wa);
					this.Pa && b.push(this.Pa);
					2 === b.length
						? a.bezierCurveTo(
								b[0].x,
								b[0].y,
								b[1].x,
								b[1].y,
								this.ja.x,
								this.ja.y,
						  )
						: 1 === b.length &&
						  a.quadraticCurveTo(b[0].x, b[0].y, this.ja.x, this.ja.y);
				}
			};
			c.prototype.rk = function(a) {
				this.qa = a;
			};
			c.prototype.Hf = function() {
				return this.qa && this.qa.Wa
					? nc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
					: { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return this.Pa
					? nc(this.Pa.x, this.Pa.y, this.ja.x, this.ja.y)
					: { x: 1, y: 0 };
			};
			return c;
		})(),
		pd = (function() {
			function c(a, b, d, e, c) {
				this.qa = a;
				this.Yi = b;
				this.ja = d;
				this.log = z.create("SEGMENT");
				this.qa = a;
				this.Yi = b;
				c *= 2;
				var f = 2 * e.next() - 1;
				e.next();
				e = this.qa.zd();
				if (!this.qa.xD && e) {
					var k = mc(a.ja.x, a.ja.y, b.x, b.y);
					this.Pa = new F(
						a.ja.x + 0.5522847498 * e.x * k,
						a.ja.y + 0.5522847498 * e.y * k,
					);
				} else
					this.Pa = new F(
						a.ja.x + 0.5522847498 * (b.x - a.ja.x),
						a.ja.y + 0.5522847498 * (b.y - a.ja.y),
					);
				this.Wa = new F(
					d.x - 0.5522847498 * (d.x - b.x) * (1 - f * c),
					d.y - 0.5522847498 * (d.y - b.y) * (1 - f * c),
				);
				this.ja = d;
			}
			c.prototype.rk = function(a) {
				this.qa = a;
				var b = this.qa.zd();
				if (b) {
					var d = mc(a.ja.x, a.ja.y, this.Yi.x, this.Yi.y);
					this.Pa = new F(
						a.ja.x + 0.5522847498 * b.x * d,
						a.ja.y + 0.5522847498 * b.y * d,
					);
				} else
					this.Pa = new F(
						a.ja.x + 0.5522847498 * (this.Yi.x - this.qa.ja.x),
						a.ja.y + 0.5522847498 * (this.Yi.y - this.qa.ja.y),
					);
			};
			c.prototype.la = function(a) {
				a.bezierCurveTo(
					this.Pa.x,
					this.Pa.y,
					this.Wa.x,
					this.Wa.y,
					this.ja.x,
					this.ja.y,
				);
			};
			c.prototype.Hf = function() {
				return this.qa
					? nc(this.qa.ja.x, this.qa.ja.y, this.Pa.x, this.Pa.y)
					: { x: 1, y: 0 };
			};
			c.prototype.zd = function() {
				return nc(this.Wa.x, this.Wa.y, this.ja.x, this.ja.y);
			};
			return c;
		})();
	var qd = (function() {
		function c(a) {
			this.Pj = this.Oj = 0;
			if ("string" === typeof a) {
				for (; 8 > a.length; ) a += a;
				for (var b = 16777619, d = 0; d < a.length; d++)
					b = ((16777619 * b) ^ a.charCodeAt(d)) & 4294967295;
				a = b;
			}
			this.Jq = a;
			this.reset();
		}
		c.prototype.reset = function() {
			this.Pj = this.Oj = this.Jq;
		};
		c.prototype.next = function() {
			this.Pj = 36969 * (this.Pj & 65535) + (this.Pj >> 16);
			this.Oj = 18e3 * (this.Oj & 65535) + (this.Oj >> 16);
			return ((this.Pj << 16) + this.Oj) / 4294967295 / 2 + 0.5;
		};
		return c;
	})();
	var rd = (function() {
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
		sd = (function() {
			function c(a) {
				this.xb = a;
				this.Tm = !0;
				this.oa = [];
				this.log = z.create("WaveAddon");
				this.Af = a.ia("waveRadius");
			}
			c.prototype.format = function() {
				var a = this.xb
					.oo(!1)
					.rn(N.Kn)
					.Se();
				this.log("Format cloud; %s points", a[0].length);
				this.oa = this.pE(a, this.Af);
			};
			c.prototype.pE = function(a, b) {
				for (var d = [], e = 0; e < a.length; e++) {
					var c = a[e],
						h = new rd(c),
						k = 1,
						l = [];
					if (!(2 > c.length)) {
						var n = 0;
						for (var r = 1; r < c.length; r++)
							n += mc(c[r - 1].x, c[r - 1].y, c[r].x, c[r].y);
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
							var v = nc(h.x, h.y, r.x, r.y);
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
	var td;
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
		c.Ht = a;
		c.Jq = function(b) {
			c.random = a(b);
		};
		c.kF = function() {
			c.random = Math.random;
		};
		c.TE = b;
		c.iF = function(a) {
			for (var d = [], c = 0; c < a; c++)
				d.push(
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890"[
						b(63)
					],
				);
			return d.join("");
		};
	})(td || (td = {}));
	var ud = td;
	var vd = (function(c) {
		function a(a, d) {
			var b = c.call(this) || this;
			b.CC = a;
			b.Ci = new K();
			b.x = 0;
			b.y = 0;
			b.kh = ud.Ht(d);
			return b;
		}
		__extends(a, c);
		a.prototype.la = function(a) {
			c.prototype.la.call(this, a);
			this.Ci.la(a);
		};
		a.prototype.p = function(a, d) {
			void 0 === d && (d = 1);
			return a + (this.kh() - 0.5) * this.CC * d;
		};
		a.prototype.moveTo = function(a, d) {
			c.prototype.moveTo.call(this, this.p(a), this.p(d));
			this.Ci.moveTo(this.p(a), this.p(d));
			this.x = a;
			this.y = d;
		};
		a.prototype.closePath = function() {
			c.prototype.closePath.call(this);
			this.Ci.closePath();
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
				this.p(d),
			);
			this.Ci.bezierCurveTo(
				this.p(b),
				this.p(f),
				this.p(h),
				this.p(k),
				this.p(a),
				this.p(d),
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
				this.p(f),
			);
			this.Ci.quadraticCurveTo(this.p(a), this.p(d), this.p(e), this.p(f));
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
				this.p(k),
			);
			this.Ci.bezierCurveTo(
				this.p(a),
				this.p(d),
				this.p(e),
				this.p(f),
				this.p(h),
				this.p(k),
			);
			this.x = h;
			this.y = k;
		};
		a.prototype.Sy = function(a) {
			var b = new Pc(this.rn(1).Se(), new rc(Math.PI / 4, 0, 0)),
				e = 1 / 0.3,
				c = e / 4,
				h = 0;
			for (b = b.dA(e); h < b.length; h++)
				(e = b[h]),
					a.moveTo(this.p(e.start.x, c), this.p(e.start.y, c)),
					a.lineTo(this.p(e.end.x, c), this.p(e.end.y, c));
		};
		return a;
	})(K);
	var wd = (function() {
		function c(a) {
			this.xb = a;
			this.az = this.Tm = !0;
			this.outline = null;
			this.fill = new K();
		}
		c.prototype.format = function() {
			var a = this.xb.ia("roughness") || 0;
			this.outline = new vd(a, this.xb.ia("seed") || 0);
			this.xb.nq.la(this.outline);
			this.xb.ia("lineWidth");
			this.xb.ia("closed") &&
				((this.fill = new K()), this.outline.Sy(this.fill));
		};
		c.prototype.la = function(a) {
			if (this.outline) {
				var b = this.xb.ia("lineWidth") || 1;
				this.xb.ia("closed") &&
					(a.beginPath(),
					(a.lineWidth = 1),
					(a.strokeStyle = this.xb.hp("fill")),
					this.fill.la(a),
					a.stroke());
				a.beginPath();
				a.setLineDash(this.xb.Ob);
				a.lineWidth = b;
				a.strokeStyle = this.xb.ia("strokeStyle");
				this.outline.la(a);
				a.stroke();
			}
		};
		return c;
	})();
	var N = (function(c) {
		function a(b, d) {
			b = c.call(this, b, d) || this;
			b.Ga = [];
			b.yg = 0;
			b.Qd = [];
			b.ar = [];
			b.uw = !1;
			b.inverse = new J();
			b.origin = new F(0, 0);
			b.Ob = [];
			b.nq = new K();
			b.Yd = new K();
			b.du = !1;
			b.backgroundImage = null;
			b.pg = null;
			b.log = z.create("PATHNODE");
			b.log("New PathNode Created");
			b.ic = new gd("", d);
			b.ic.setProperty("text", b.ba.text);
			b.lo(a.sa);
			b.ba.closed = !1;
			b.ba.commands = [];
			b.ba.seed = 0;
			return b;
		}
		__extends(a, c);
		a.prototype.moveTo = function(b, d) {
			var e = this.ba.commands;
			e.push(a.zh);
			e.push(b);
			e.push(d);
		};
		a.prototype.type = function() {
			return "PathNode";
		};
		a.prototype.Tg = function() {
			return !0;
		};
		a.prototype.kc = function(a) {
			switch (a) {
				case "sides":
				case "rotation":
				case "radius":
				case "oddRadiusScaling":
				case "skewX":
				case "skewY":
					return !0;
			}
			return c.prototype.kc.call(this, a);
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
					this.ic.setProperty(a, d);
					break;
				case "textFillStyle":
					this.ic.setProperty("fillStyle", d);
					this.ba[a] = d;
					break;
				case "textBackground":
					this.ic.setProperty("background", d);
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
		a.prototype.Mg = function(a, d) {
			switch (a) {
				case "roughness":
					"string" === typeof d && (d = parseFloat(d));
			}
			return c.prototype.Mg.call(this, a, d);
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
		a.prototype.ub = function() {
			var a = c.prototype.ub.call(this);
			a.text && (a.textFillStyle = a.textFillStyle || q.Oa);
			return a;
		};
		a.prototype.Ql = function(b) {
			for (var d = 0, e = this.ba.commands, c = (b / 3) | 0, h = 0; h < c; h++)
				d += a.mb[e[d]] + 1;
			h = (b % 3) * 2 + 1;
			c = e[d + h];
			d = e[d + h + 1];
			this.log("getEditHandle(%s) = (%s, %s)", b, c, d);
			this.Na().apply(c, d);
		};
		a.prototype.Le = function(b, d, e) {
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
		a.prototype.rC = function(b) {
			for (var d = this.ba.commands, e = 0, c = 0; c < b / 3; c++)
				e += a.mb[d[e]] + 1;
			d.splice(e, a.mb[d[e]] + 1);
		};
		a.prototype.Bz = function() {
			return this.ia("arrowXOffset") || this.ia("arrowSize");
		};
		a.prototype.cC = function(a) {
			var b = this.ba.sides;
			if (!b || 3 > b) return a;
			a = new O();
			b = Oc(
				this.ba.sides,
				this.ba.radius || 50,
				this.ba.rotation,
				this.ba.oddRadiusScaling || 1,
				this.ba.skewX || 0,
				this.ba.skewY || 0,
			);
			for (var e = 0; e < b.length; e++) {
				var c = b[e];
				0 === e ? a.moveTo(c.x, c.y) : a.lineTo(c.x, c.y);
			}
			a.closePath();
			return a.rc();
		};
		a.prototype.format = function(b, d) {
			var e = this,
				c = null;
			this.Ga.length = 0;
			this.inverse = this.ba.matrix.inverse();
			var h = new F(0, 0),
				k = this.cC(this.ba.commands),
				l = null,
				n = this.ba.matrix,
				r = new qd(this.ba.seed);
			this.ar.length = 0;
			for (var v = null, w = null, x = 0; x < k.length; ) {
				switch (k[x++]) {
					case a.zh:
						h = n.apply(k[x++], k[x++]);
						w = new hd(l, h);
						this.Ga.push(w);
						null === c && (c = h);
						this.ar.push(h);
						v = null;
						break;
					case a.Ue:
						l &&
							((h = n.apply(k[x++], k[x++])),
							this.Ga.push(
								new id(l, h, r, this.ba.sloppiness, this.ba.roundRadius),
							),
							this.ar.push(h));
						break;
					case a.Ch:
						if (l) {
							h = n.apply(k[x++], k[x++]);
							var y = n.apply(k[x++], k[x++]);
							this.Ga.push(new kd(l, y, h));
						}
						break;
					case a.In:
						if (l) {
							h = n.apply(k[x++], k[x++]);
							y = n.apply(k[x++], k[x++]);
							var B = k[x++];
							this.Ga.push(new ld(l, y, h, B));
						}
						break;
					case a.Hn:
						if (l) {
							h = n.apply(k[x++], k[x++]);
							y = n.apply(k[x++], k[x++]);
							B = k[x++];
							var H = k[x++],
								M = k[x++],
								I = k[x++];
							this.Ga.push(new md(l, y, h, B, H, M, I));
						}
						break;
					case a.Kk:
						l &&
							((h = n.apply(k[x++], k[x++])),
							(B = n.apply(k[x++], k[x++])),
							(y = n.apply(k[x++], k[x++])),
							this.Ga.push(new nd(l, B, y, h)));
						break;
					case a.Vr:
						l &&
							((h = n.apply(k[x++], k[x++])),
							(B = n.apply(k[x++], k[x++])),
							(y = n.apply(k[x++], k[x++])),
							this.Ga.push(new od(l, B, y, h)));
						break;
					case a.Ji:
						l &&
							((h = n.apply(k[x++], k[x++])),
							this.Ga.push(new jd(l, h, this.ba.smoothness)));
						break;
					case a.Ln:
						l &&
							((h = n.apply(k[x++], k[x++])),
							(B = n.apply(k[x++], k[x++])),
							this.Ga.push(new pd(l, B, h, r, this.ba.sloppiness)));
						break;
					case a.pd:
						this.ba.closed = !0;
						v && l && v !== l && v.rk && w && (v.rk(l), (l.ja = w.ja));
						break;
					default:
						x++;
				}
				l = this.Ga[this.Ga.length - 1];
				null !== v || l instanceof hd || (v = l);
			}
			this.origin = c || new F(0, 0);
			this.yg = this.Ga.length;
			this.uz(r);
			this.rect.x = this.origin.x;
			this.rect.y = this.origin.y;
			this.rect.width = 0;
			this.rect.height = 0;
			this.Ob = Cc(this.ba.dashes || "");
			c = this.Ob.length ? a.Kn : a.Jw;
			this.nq = this.oo(!0);
			this.Yd = this.nq.rn(c);
			h = 0 + this.ia("shapeWidth");
			0 < h && (this.Yd = this.ty(this.Yd, h));
			this.rect = this.Yd.kl(c);
			h = this.rect.width - 2 * (this.ba.lineWidth / 2 + 1);
			k = this.ba.lineWidth;
			l = this.Yd.clone();
			l.transform(this.dc());
			this.za = l.kl(c);
			this.rect.Fd(k + 1, k + 1);
			8 > this.rect.width &&
				((this.rect.x += this.rect.width / 2 - 4), (this.rect.width = 8));
			8 > this.rect.height &&
				((this.rect.y += this.rect.height / 2 - 4), (this.rect.height = 8));
			if ("" !== this.ba.text) {
				c = this.rect.Sd();
				this.ic.setProperty("textAlign", this.ba.textAlign || "center");
				this.ic.setProperty("baseWidth", h);
				this.ic.format(b);
				h = c.x - this.ic.rect.x - this.ic.rect.width / 2;
				k = 0;
				switch (this.ba.verticalAlign) {
					default:
					case "middle":
						k = c.y - this.ic.rect.y - this.ic.Ap / 2;
						break;
					case "top":
						k = this.rect.y - this.ic.rect.y;
						break;
					case "bottom":
						k = this.rect.bottom() - this.ic.Ap - this.ic.rect.y;
				}
				this.ic.transform(new qc(h, k));
				this.ic.format(b);
			}
			this.uw =
				0 === q.hf(this.ba.fillStyle).values[3] &&
				!this.backgroundImage &&
				!this.ba.spotHighlight;
			this.Ft("fill", b, d, this.ba.fillStyle);
			this.Qd.length = 0;
			0 < this.ba.cloudRadius
				? this.Qd.push(new bd(this))
				: 0 < this.ba.waveRadius
				? this.Qd.push(new sd(this))
				: this.ba.doubleLine
				? this.Qd.push(new xd(this))
				: this.ba.roughness && this.Qd.push(new wd(this));
			for (x = 0; x < this.Qd.length; x++) this.Qd[x].format(b);
			(b = this.ia("backgroundImage")) &&
				null === this.backgroundImage &&
				d.add(this.id, "image", b, null, function(a) {
					e.backgroundImage = a;
					d.jg(e.id);
				});
			b = /url\(([^\)]+)\)/.exec(this.ia("strokeStyle"));
			var A;
			b && (A = b[1]);
			!A || (null !== this.pg && this.pg.src === A)
				? !A && this.pg && (this.pg = null)
				: d.add(this.id, "image", A, null, function(a) {
						e.pg = a;
						d.jg(e.id);
				  });
		};
		a.prototype.Xl = function() {
			return this.Yd;
		};
		a.prototype.uz = function(a) {
			function b(b, d) {
				b = b.clone();
				l && ((b.x += d.x * h * 0.5), (b.y += d.y * h * 0.5));
				var f = b.x - d.x * h;
				var n = b.y - d.y * h;
				var r = f + (d.y * c) / 2;
				var v = n - (d.x * c) / 2;
				f += (-d.y * c) / 2;
				n += (d.x * c) / 2;
				e.Ga.push(new hd(e.Ga[e.Ga.length - 1], new F(f, n)));
				e.Ga.push(new jd(e.Ga[e.Ga.length - 1], b, k));
				e.Ga.push(new jd(e.Ga[e.Ga.length - 1], new F(r, v), k));
				"solid" === e.ba.arrowStyle &&
					e.Ga.push(
						new id(e.Ga[e.Ga.length - 1], new F(f, n), a, e.ba.smoothness, 0),
					);
			}
			if (
				(this.du =
					0 < this.ba.arrowSize && !this.ba.closed && 0 < this.Ga.length)
			) {
				var e = this,
					c = this.ba.arrowSize + 1.5 * this.ba.lineWidth,
					h = this.ba.arrowXOffset,
					k = this.ba.smoothness,
					l = this.ba.doubleLine;
				null === h && (h = c);
				var n = this.Ga[this.Ga.length - 1];
				b(n.ja, n.zd());
				this.ba.doubleArrow && b(this.Ga[0].ja, oc(this.Ga[1].Hf()));
			}
		};
		a.prototype.close = function() {
			this.ba.commands.push(a.pd);
		};
		a.prototype.Kx = function() {
			var a = this.Ga[this.Ga.length - 1];
			a &&
				8 >= mc(a.ja.x, a.ja.y, this.origin.x, this.origin.y) &&
				this.close();
		};
		a.prototype.ty = function(a, d) {
			this.log("ConvertToRects: width=%s", d);
			var b = 0;
			a = a.fa;
			for (var c = 0, h = 0, k, l, n = new K(); b < a.length; ) {
				this.log("cmd %s %s %s", a[b], a[b + 1], a[b + 2]);
				switch (a[b]) {
					case K.Yc:
						c = a[b + 1];
						h = a[b + 2];
						break;
					case K.rd:
						k = a[b + 1];
						l = a[b + 2];
						this.log("(%s,%s-%s,%s)", c, h, k, l);
						if (0 < mc(c, h, k, l)) {
							var r = nc(c, h, k, l),
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
				b += K.td[a[b]];
			}
			return n;
		};
		a.prototype.clip = function(a) {
			if (this.ba.closed) {
				var b = new K();
				this.log("Clipping to a path");
				for (var e = 0; e < this.Ga.length; e++) this.Ga[e].la(b);
				b.closePath();
				0 > b.Pi() && (b = b.zC());
				b.la(a);
			}
		};
		a.prototype.la = function(a) {
			this.ba.spotHighlight
				? this.log("Not drawing node %s due to spothighlight", this.id)
				: c.prototype.la.call(this, a);
		};
		a.prototype.Of = function(a) {
			var b = this.inverse;
			a.save();
			a.lineJoin = "round";
			a.transform(b.m11, b.m21, b.m12, b.m22, b.Ba, b.Ca);
			a.beginPath();
			a.lineCap = "round";
			b = !0;
			var e = !1,
				c;
			for (c = 0; c < this.Qd.length; c++)
				this.Qd[c].Tm && (b = !1), this.Qd[c].az && ((e = !0), (b = !1));
			this.pg && (b = !1);
			if (b) for (c = 0; c < this.Ga.length; c++) this.Ga[c].la(a);
			for (c = 0; c < this.Qd.length; c++) this.Qd[c].la(a);
			if (!b && 0 < this.ba.arrowSize)
				for (c = this.yg; c < this.Ga.length; c++) this.Ga[c].la(a);
			if (this.ba.closed) {
				a.closePath();
				if (this.backgroundImage) {
					a.fillStyle =
						a.createPattern(this.backgroundImage, "no-repeat") || "magenta";
					c = Math.max(
						this.rect.width / this.backgroundImage.naturalWidth,
						this.rect.height / this.backgroundImage.naturalHeight,
					);
					var h = this.rect.width - this.backgroundImage.naturalWidth * c,
						k = this.rect.height - this.backgroundImage.naturalHeight * c;
					a.translate(this.rect.x + h / 2, this.rect.y + k / 2);
					a.scale(c, c);
					a.fill();
					a.scale(1 / c, 1 / c);
					a.translate(-this.rect.x - h / 2, -this.rect.y - k / 2);
				} else e || ((a.fillStyle = this.hp("fill")), a.fill());
				a.shadowColor = q.We;
			}
			b &&
				(this.Ob.length && 0 < this.ba.lineWidth
					? (a.beginPath(), this.Yd.Al(a, this.Ob), (a.lineCap = "butt"))
					: 0 < 0 + this.ia("shapeWidth") && (a.beginPath(), this.Yd.la(a)));
			if (this.pg)
				for (b = this.Yd.Se(), e = this.pg, c = 0; c < b.length; c++) {
					k = b[c];
					if (2 > k.length) break;
					h = 0;
					k = Nc(k);
					var l = k.next();
					if (l.done) break;
					for (var n = l.value.pi, r = e.width; !l.done; ) {
						l = k.next(r);
						if (l.done) break;
						var v = l.value.pi,
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
				for (c = this.yg; c < this.Ga.length; c++) this.Ga[c].la(a);
				a.fillStyle = this.ba.strokeStyle;
				a.fill();
			} else if (this.ba.arrowSize && this.Ob.length) {
				a.beginPath();
				for (c = this.yg; c < this.Ga.length; c++) this.Ga[c].la(a);
				0 < this.ba.lineWidth && a.stroke();
			}
			"" !== this.ba.text && this.ic.la(a);
			a.restore();
		};
		a.prototype.Ib = function(a, d, e, c) {
			if (this.hidden() || this.ia("locked")) return null;
			e = Math.max(12 / c + this.ba.shapeWidth / 2 + this.ba.lineWidth / 2, e);
			if (
				a >= this.rect.x - e &&
				a < this.rect.x + e + this.rect.width &&
				d >= this.rect.y - e &&
				d < this.rect.y + e + this.rect.height
			)
				if (this.ba.closed && !this.uw) {
					if (this.Yd.bC(a, d, e)) return this;
				} else if (
					this.Yd.rv(a, d, e) ||
					("" !== this.ba.text && this.ic.Ib(a, d, e, c))
				)
					return this;
			return null;
		};
		a.prototype.oo = function(a) {
			var b = new K();
			if (0 < this.ba.arrowSize && !a)
				for (a = 0; a < this.yg; a++) this.Ga[a].la(b);
			else for (a = 0; a < this.Ga.length; a++) this.Ga[a].la(b);
			this.ba.closed && b.closePath();
			return b;
		};
		a.prototype.lineTo = function(b, d) {
			var e = this.ba.commands;
			e.push(a.Ue);
			e.push(b);
			e.push(d);
		};
		a.prototype.aj = function(b, d) {
			var e = this.ba.commands;
			e.push(a.Ji);
			e.push(b);
			e.push(d);
		};
		a.prototype.pf = function() {
			return (
				!1 !== this.ba.editable && !0 !== this.ba.lockEditMode && !this.ba.sides
			);
		};
		a.prototype.Vq = function() {
			var b = this.ba.commands;
			return 6 === b.length && (b[3] === a.Ue || b[3] === a.Ji);
		};
		a.prototype.ai = function(a, d, e) {
			e *= 8;
			if (
				a >= this.origin.x - e &&
				a < this.origin.x + e &&
				d >= this.origin.y - e &&
				d < this.origin.y + e
			)
				return 0;
			for (var b = 0; b < this.yg; b++) {
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
						c.Wa &&
						a >= c.Wa.x - e &&
						a < c.Wa.x + e &&
						d >= c.Wa.y - e &&
						d < c.Wa.y + e
					)
						return 3 * b + 2;
				}
			}
			return null;
		};
		a.prototype.Rl = function(b) {
			var d = this.ba.commands;
			b /= 3;
			var e = 0,
				c = !1,
				h = 0,
				k;
			for (k = 0; k < d.length; ) {
				var l = d[k];
				if (l === a.pd) {
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
					case a.zh:
						c = "move_to";
						break;
					case a.Ue:
						c = "line_to";
						break;
					case a.Ch:
						c = "quadratic_to";
				}
				if (b === e) return c;
				k += a.mb[d[k]] + 1;
			}
			return null;
		};
		a.Ww = function(b, d, e) {
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
				if (v === a.pd) {
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
					(v === a.Ch && "line_to" === e
						? (h.push(a.Ue, b[r + 1], b[r + 2]), (l = !0))
						: v === a.Ue &&
						  "quadratic_to" === e &&
						  (h.push(
								a.Ch,
								b[r + 1],
								b[r + 2],
								(k.x + b[r + 1]) / 2,
								(k.y + b[r + 2]) / 2,
						  ),
						  (l = !0)));
				k = new F(b[r + 1], b[r + 2]);
				if (!l) for (v = 0; v < 1 + a.mb[b[r]]; v++) h.push(b[r + v]);
				r += a.mb[b[r]] + 1;
			}
			return h;
		};
		a.prototype.su = function() {
			return !0;
		};
		a.prototype.kj = function(a, d, e) {
			function b(b, d, e) {
				a.beginPath();
				a.rect(b - c, d - c, 2 * c, 2 * c);
				a.fillStyle = e ? "#0050B7" : q.Zc;
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
			a.fillStyle = q.Zc;
			var c = 6 * d;
			b(this.origin.x, this.origin.y, 0 === e);
			for (d = 1; d < this.yg; d++) {
				var k = this.Ga[d];
				a.beginPath();
				if (k.control)
					a.arc(k.control.x, k.control.y, c, 0, 2 * Math.PI),
						a.arc(k.control.x, k.control.y, 2 * c, 0, 2 * Math.PI),
						e === 3 * d + 1 ? a.fill() : a.stroke();
				else if (k instanceof nd || k instanceof od) {
					var l = k.Pa;
					var n = k.Wa;
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
		a.Lw = function(a) {
			var b = new O(),
				e = 0;
			for (a = a.fa; e < a.length; ) {
				switch (a[e]) {
					case K.Yc:
						b.moveTo(a[e + 1], a[e + 2]);
						break;
					case K.rd:
						b.lineTo(a[e + 1], a[e + 2]);
						break;
					case K.Lf:
						b.bezierCurveTo(
							a[e + 1],
							a[e + 2],
							a[e + 3],
							a[e + 4],
							a[e + 5],
							a[e + 6],
						);
						break;
					case K.Nf:
						b.quadraticCurveTo(a[e + 1], a[e + 2], a[e + 3], a[e + 4]);
						break;
					case K.pd:
						b.close();
				}
				e += K.td[a[e]];
			}
			return b.rc();
		};
		a.sa = {
			strokeStyle: q.Oa,
			fillStyle: q.Zc,
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
		a.Jw = 8;
		a.Kn = 2;
		a.zh = 0;
		a.Ue = 1;
		a.Ch = 2;
		a.In = 3;
		a.Kk = 4;
		a.Ji = 5;
		a.Ln = 6;
		a.pd = 7;
		a.Vr = 8;
		a.Hn = 9;
		a.CE = 0.5522847498;
		a.mb = [];
		return a;
	})(dd);
	N.mb[N.zh] = 2;
	N.mb[N.Ue] = 2;
	N.mb[N.Ch] = 4;
	N.mb[N.In] = 5;
	N.mb[N.Kk] = 6;
	N.mb[N.Ji] = 2;
	N.mb[N.Ln] = 4;
	N.mb[N.pd] = 0;
	N.mb[N.Vr] = 6;
	N.mb[N.Hn] = 8;
	var O = (function() {
		function c(a) {
			void 0 === a && (a = []);
			this.fa = a;
		}
		c.prototype.beginPath = function() {};
		c.prototype.Rf = function(a, b, d) {
			for (var e = 0, c = 0; c < a; c++) e += N.mb[this.fa[e]] + 1;
			this.fa[e + 1] = b;
			this.fa[e + 2] = d;
		};
		c.prototype.moveTo = function(a, b) {
			this.fa.push(N.zh);
			this.fa.push(a);
			this.fa.push(b);
		};
		c.prototype.lineTo = function(a, b) {
			this.fa.push(N.Ue);
			this.fa.push(a);
			this.fa.push(b);
		};
		c.prototype.aj = function(a, b) {
			this.fa.push(N.Ji);
			this.fa.push(a);
			this.fa.push(b);
		};
		c.prototype.quadraticCurveTo = function(a, b, d, e) {
			this.fa.push(N.Ch);
			this.fa.push(d);
			this.fa.push(e);
			this.fa.push(a);
			this.fa.push(b);
		};
		c.prototype.Cg = function(a, b, d, e) {
			this.fa.push(N.Ln);
			this.fa.push(d);
			this.fa.push(e);
			this.fa.push(a);
			this.fa.push(b);
		};
		c.prototype.bezierCurveTo = function(a, b, d, e, c, h) {
			this.fa.push(N.Kk);
			this.fa.push(c);
			this.fa.push(h);
			this.fa.push(a);
			this.fa.push(b);
			this.fa.push(d);
			this.fa.push(e);
		};
		c.prototype.arc = function(a, b, d, e, c, h) {
			void 0 === h && (h = !0);
			var f = new rc(-c, a, b).apply(a + d, b);
			this.fa.push(N.Hn);
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
			this.fa.push(N.In);
			this.fa.push(d);
			this.fa.push(e);
			this.fa.push(a);
			this.fa.push(b);
			this.fa.push(c);
		};
		c.prototype.Kt = function() {
			for (var a = [], b = 0; b < this.fa.length; ) {
				for (var d = this.fa[b], e = 0; e < N.mb[d]; e += 2)
					a.push(new F(this.fa[b + 1 + e], this.fa[b + 1 + e + 1]));
				b += N.mb[d] + 1;
			}
			a = G.xh(a);
			return { x: a.x, y: a.y, width: a.width, height: a.height };
		};
		c.prototype.SD = function(a, b) {
			for (var d = 0; d < this.fa.length; ) {
				for (var e = this.fa[d], c = 0; c < N.mb[e]; c += 2)
					(this.fa[d + 1 + c] += a), (this.fa[d + 2 + c] += b);
				d += N.mb[e] + 1;
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
			this.fa.push(N.pd);
		};
		c.prototype.close = function() {
			this.closePath();
		};
		c.prototype.rc = function() {
			return this.fa;
		};
		return c;
	})();
	O.prototype.change = O.prototype.Rf;
	O.prototype.moveTo = O.prototype.moveTo;
	O.prototype.lineTo = O.prototype.lineTo;
	O.prototype.curveTo = O.prototype.aj;
	O.prototype.quadraticCurveTo = O.prototype.quadraticCurveTo;
	O.prototype.cornerTo = O.prototype.Cg;
	O.prototype.bezierCurveTo = O.prototype.bezierCurveTo;
	O.prototype.arc = O.prototype.arc;
	O.prototype.arcTo = O.prototype.arcTo;
	O.prototype.getBoundingBox = O.prototype.Kt;
	O.prototype.translateAll = O.prototype.SD;
	O.prototype.closePath = O.prototype.closePath;
	O.prototype.close = O.prototype.close;
	O.prototype.toArray = O.prototype.rc;
	function yd() {
		var c = new F(0, 0),
			a = new O();
		a.moveTo(c.x, c.y - 50);
		a.Cg(c.x + 50, c.y - 50, c.x + 50, c.y);
		a.Cg(c.x + 50, c.y + 50, c.x, c.y + 50);
		a.Cg(c.x - 50, c.y + 50, c.x - 50, c.y);
		a.Cg(c.x - 50, c.y - 50, c.x, c.y - 50);
		a.closePath();
		return a.rc();
	}
	dd.vd("PathNode", N);
	O.prototype.beginPath = O.prototype.beginPath;
	O.prototype.change = O.prototype.Rf;
	O.prototype.moveTo = O.prototype.moveTo;
	O.prototype.lineTo = O.prototype.lineTo;
	O.prototype.curveTo = O.prototype.aj;
	O.prototype.quadraticTo = O.prototype.bF;
	O.prototype.cornerTo = O.prototype.Cg;
	O.prototype.bezierTo = O.prototype.ME;
	O.prototype.arc = O.prototype.arc;
	O.prototype.arcTo = O.prototype.arcTo;
	O.prototype.getBoundingBox = O.prototype.Kt;
	O.prototype.translate = O.prototype.translate;
	O.prototype.closePath = O.prototype.closePath;
	O.prototype.close = O.prototype.close;
	O.prototype.toArray = O.prototype.rc;
	var xd = (function() {
		function c(a) {
			this.xb = a;
			this.Af = 0;
			this.Tm = !0;
			this.gm = !1;
			this.path = new K();
			this.Mm = new K();
			this.log = z.create("DoubleLineAddon");
		}
		c.prototype.format = function() {
			this.log("Formatting doubleline; thickness=%s", this.xb.ia("doubleLine"));
			var a = this.xb.oo(!1).rn(N.Kn),
				b = this.xb.Bz();
			if (0 < b) {
				var d = a.Rx();
				d > b && (a = a.Vx(d - b));
			}
			a = a.Se();
			b = this.xb.ia("doubleLine");
			this.path = new K();
			this.Mm = new K();
			d = this.xb.ia("doubleLineDashSide");
			this.gm = !1;
			"outer" === d
				? (Jc(this.path, a, b, !0, !1),
				  Jc(this.Mm, a, b, !1, !0),
				  (this.gm = !0))
				: "inner" === d
				? (Jc(this.path, a, b, !1, !0),
				  Jc(this.Mm, a, b, !0, !1),
				  (this.gm = !0))
				: Jc(this.path, a, b, !0, !0);
		};
		c.prototype.la = function(a) {
			a.beginPath();
			this.xb.Ob.length && this.gm
				? (this.Mm.Al(a, this.xb.Ob), this.path.la(a))
				: this.xb.Ob.length
				? this.path.Al(a, this.xb.Ob)
				: this.path.la(a);
		};
		return c;
	})();
	function zd(c, a) {
		function b() {
			var a = f.offsetWidth,
				b = f.offsetHeight,
				d = u.em();
			u(f).qk({
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
			Ad(a.target) ||
				(v &&
					"outside" !== v &&
					"none" !== v &&
					setTimeout(function() {
						y.hide();
					}, 0));
		}
		void 0 === a && (a = {});
		var f = u.oc(c);
		if (!f) throw Error("Zwibbler.Dialog: Bad element passed in: " + c);
		c = a.overlay || "transparent";
		var h = null === f.parentNode;
		"static" === u(f).Ee("position") && (f.style.position = "absolute");
		var k = u(f).Ee("display");
		"none" === k && (k = "block");
		f.style.display = "none";
		var l = new cb(c);
		l.insertBefore = f;
		var n = a.showNear || null,
			r = a.showHow || "",
			v = !1,
			w = Bd(f),
			x = !1,
			y = {
				hide: function() {
					l.rf();
					f.style.display = "none";
					if (y.onhide) y.onhide();
					window.removeEventListener("resize", b);
				},
				isShown: function() {
					return "none" !== u(f).Ee("display");
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
					e = u.Rt() + 1;
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
									d = u.em(),
									e = { left: w, top: x };
								e.left = Math.min(e.left, d.left + d.width - a - 2);
								e.top = Math.min(e.top, d.top + d.height - b - 3);
								u(f).qk(e);
								f.style.visibility = "visible";
								if (y.onshow) y.onshow();
							}, 0);
					else if (B && H)
						if ((B = u.oc(B))) {
							var M = u(B).pc();
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
								d = u.em();
								var e = a.offsetHeight;
								b.left = Math.min(b.left, d.left + d.width - a.offsetWidth);
								b.top = Math.min(b.top, d.top + d.height - e);
								u(a).qk(b);
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
						l.rf(),
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
	function Ad(c) {
		return (
			c instanceof HTMLElement &&
			((!(c instanceof HTMLElement && "BUTTON" === c.tagName) && u.sf(c)) ||
				c.matches("[z-no-dismiss], [z-no-dismiss] *"))
		);
	}
	function Bd(c) {
		function a(a) {
			"touchstart" === a.type
				? ((b = a.changedTouches[0].pageX), (d = a.changedTouches[0].pageY))
				: "touchend" === a.type &&
				  10 > mc(b, d, a.changedTouches[0].pageX, a.changedTouches[0].pageY) &&
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
	var Cd = z.create("FitCurve");
	function Dd(c) {
		function a(a) {
			I.bezierCurveTo(a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y);
			Cd(
				"Bezier: (%s,%s), (%s,%s), (%s,%s), (%s,%s)",
				a[0].x,
				a[0].y,
				a[1].x,
				a[1].y,
				a[2].x,
				a[2].y,
				a[3].x,
				a[3].y,
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
			void 0 === d && Cd("Undef!");
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
				Y = [],
				A = [[], []],
				H = [];
			var E = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
			var M = h - c + 1;
			for (B = 0; B < M; B++) {
				var I = { x: x.x, y: x.y };
				var R = { x: y.x, y: y.y };
				k(I, d(w[B]));
				k(R, e(w[B]));
				Y[B] = [I, R];
			}
			A[0][0] = 0;
			A[0][1] = 0;
			A[1][0] = 0;
			A[1][1] = 0;
			H[0] = 0;
			for (B = H[1] = 0; B < M; B++)
				(A[0][0] += b(Y[B][0], Y[B][0])),
					(A[0][1] += b(Y[B][0], Y[B][1])),
					(A[1][0] = A[0][1]),
					(A[1][1] += b(Y[B][1], Y[B][1])),
					(I = 1 - w[B]),
					(R = w[B]),
					(I = v(
						a[c + B],
						n(
							r(a[c], I * I * I),
							n(r(a[c], d(w[B])), n(r(a[h], e(w[B])), r(a[h], R * R * R))),
						),
					)),
					(H[0] += b(Y[B][0], I)),
					(H[1] += b(Y[B][1], I));
			w = A[0][0] * A[1][1] - A[1][0] * A[0][1];
			B = A[0][0] * H[1] - A[0][1] * H[0];
			H = H[0] * A[1][1] - H[1] * A[0][1];
			0 === w && (w = A[0][0] * A[1][1] * 1e-11);
			A = H / w;
			H = B / w;
			if (0 > A || 0 > H)
				return (
					(A = f(a[h], a[c]) / 3),
					(E[0] = a[c]),
					(E[3] = a[h]),
					l(E[0], k(x, A), E[1]),
					l(E[3], k(y, A), E[2]),
					E
				);
			E[0] = a[c];
			E[3] = a[h];
			l(E[0], k(x, A), E[1]);
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
			return { Lu: l, lw: k };
		}
		function H(b, d, e, c, h, n) {
			var r;
			var Y = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
			var A = n * n;
			if (2 === e - d + 1)
				(n = f(b[e], b[d]) / 3),
					(Y[0] = b[d]),
					(Y[3] = b[e]),
					l(Y[0], k(c, n), Y[1]),
					l(Y[3], k(h, n), Y[2]),
					a(Y);
			else {
				var E = [0];
				for (r = d + 1; r <= e; r++)
					E[r - d] = E[r - d - 1] + f(b[r], b[r - 1]);
				for (r = d + 1; r <= e; r++) E[r - d] /= E[e - d];
				var I = E;
				Y = w(b, d, e, I, c, h);
				r = B(b, d, e, Y, I);
				E = r.Lu;
				r = r.lw;
				if (E < n) a(Y);
				else {
					if (E < A || M)
						for (A = 0; 4 > A; A++) {
							r = b;
							E = d;
							var R = e;
							var na = Y;
							var la = [];
							for (Y = E; Y <= R; Y++) {
								var Ea = la,
									$g = Y - E,
									aa,
									Bb = na,
									Xb = r[Y],
									Yb = I[Y - E],
									eb = [];
								var mb = [];
								var Zb = x(3, Bb, Yb);
								for (aa = 0; 2 >= aa; aa++)
									(eb[aa] = { x: 0, y: 0 }),
										(eb[aa].x = 3 * (Bb[aa + 1].x - Bb[aa].x)),
										(eb[aa].y = 3 * (Bb[aa + 1].y - Bb[aa].y));
								for (aa = 0; 1 >= aa; aa++)
									(mb[aa] = { x: 0, y: 0 }),
										(mb[aa].x = 2 * (eb[aa + 1].x - eb[aa].x)),
										(mb[aa].y = 2 * (eb[aa + 1].y - eb[aa].y));
								aa = x(2, eb, Yb);
								mb = x(1, mb, Yb);
								Ea[$g] =
									Yb -
									((Zb.x - Xb.x) * aa.x + (Zb.y - Xb.y) * aa.y) /
										(aa.x * aa.x +
											aa.y * aa.y +
											(Zb.x - Xb.x) * mb.x +
											(Zb.y - Xb.y) * mb.y);
							}
							R = la;
							Y = w(b, d, e, R, c, h);
							r = B(b, d, e, Y, R);
							E = r.Lu;
							r = r.lw;
							if (E < n || M) {
								a(Y);
								return;
							}
							I = R;
						}
					R = { x: 0, y: 0 };
					A = v(b[r - 1], b[r]);
					E = v(b[r], b[r + 1]);
					R.x = (A.x + E.x) / 2;
					R.y = (A.y + E.y) / 2;
					A = R = y(R);
					H(b, d, r, c, A, n);
					A.x = -A.x;
					A.y = -A.y;
					H(b, r, e, A, h, n);
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
	function Ed(c, a, b, d, e, f) {
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
	var Hd = (function(c) {
			function a(a, d, e) {
				void 0 === e && (e = ec() ? new Fd() : new Gd());
				var b = c.call(this) || this;
				b.Dd = d;
				b.nt = e;
				b.Wj = !0;
				b.width = 32;
				b.height = 500;
				b.jF = 0;
				b.jc = new G(0, 0, 0, 0);
				b.nc = !1;
				b.Rg = "auto";
				b.LE = "#fcfcfc";
				b.NE = "#808080";
				b.borderWidth = 0;
				b.Vf = 0;
				b.Uf = 100;
				b.Dr = 10;
				b.position = 5;
				b.offset = 0;
				b.log = z.create("SCROLLBAR", !0);
				b.Wj = !0;
				b.canvas = dc(document.body);
				b.canvas.style.position = "absolute";
				b.canvas.style.border = "none";
				b.canvas.classList.add("zwibbler-scrollbar");
				b.canvas.classList.add("zwibbler-passthrough");
				b.ma = b.canvas.getContext("2d");
				a.addEventListener(b.canvas, "mousedown", function(a) {
					b.wb(a);
				});
				a.addEventListener(document.body, "mousemove", function(a) {
					b.Cb(a);
				});
				a.addEventListener(document.body, "mouseup", function() {
					b.Wb();
				});
				a.addEventListener(b.canvas, "touchstart", function(a) {
					b.iq(a);
				});
				a.addEventListener(document.body, "touchmove", function(a) {
					b.iq(a);
				});
				a.addEventListener(document.body, "touchend", function(a) {
					b.iq(a);
				});
				b.format();
				return b;
			}
			__extends(a, c);
			a.prototype.Rd = function(a) {
				a.appendChild(this.canvas);
			};
			a.prototype.aw = function(a) {
				this.Rg = a;
				this.la();
			};
			a.prototype.moveTo = function(a, d) {
				this.canvas.style.left = "" + a + "px";
				this.canvas.style.top = "" + d + "px";
			};
			a.prototype.mg = function(a, d) {
				this.width = a;
				this.height = d;
				this.canvas.width = this.width;
				this.canvas.height = d;
				this.format();
				this.la();
			};
			a.prototype.rf = function() {
				this.canvas.style.display = "none";
			};
			a.prototype.show = function() {
				this.canvas.style.display = "block";
			};
			a.prototype.wu = function() {
				return "block" === this.canvas.style.display;
			};
			a.prototype.ew = function(a, d, e, c) {
				this.Vf = a;
				this.Uf = d - a;
				this.Dr = e;
				this.position = c;
				this.format();
				this.la();
			};
			a.prototype.format = function() {
				var a = this.Dd ? this.width : this.height;
				var d = (this.Dr / this.Uf) * a;
				a *= (this.position - this.Vf) / this.Uf;
				this.jc = this.Dd
					? new G(a, 0, d, this.height)
					: new G(0, a, this.width, d);
				this.jc.x = Math.round(this.jc.x);
				this.jc.y = Math.round(this.jc.y);
				this.jc.width = Math.round(this.jc.width);
				this.jc.height = Math.round(this.jc.height);
			};
			a.prototype.la = function() {
				var a = this.Pg() - this.nt.Zt();
				if (this.Dd) var d = 0;
				else (d = a), (a = 0);
				d = {
					Dd: this.Dd,
					rect: { x: d, y: a, width: this.width - d, height: this.height - a },
					de: {
						x: this.jc.x + d,
						y: this.jc.y + a,
						width: this.jc.width - d,
						height: this.jc.height - a,
					},
					Rg: this.Rg,
				};
				this.ma.clearRect(0, 0, this.ma.canvas.width, this.ma.canvas.height);
				this.nt.la(this.ma, d);
			};
			a.prototype.ut = function(a) {
				var b = u(this.canvas).pc(),
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
			a.prototype.iq = function(a) {
				switch (a.type) {
					case "touchstart":
						this.wb(a);
						break;
					case "touchend":
						this.Wb();
						break;
					case "touchmove":
						this.Cb(a);
				}
			};
			a.prototype.sv = function(a) {
				a = this.Dd
					? (a.x / this.width) * this.Uf + this.Vf
					: (a.y / this.height) * this.Uf + this.Vf;
				a = Math.min(a, this.Uf - this.Dr + this.Vf);
				return (a = Math.max(a, this.Vf));
			};
			a.prototype.wb = function(a) {
				a.preventDefault();
				a = this.ut(a);
				this.jc.Mc(a.x, a.y)
					? this.Dd
						? ((this.offset = a.x - this.jc.x), (a.x -= this.offset))
						: ((this.offset = a.y - this.jc.y), (a.y -= this.offset))
					: ((this.position = this.sv(a)),
					  (this.offset = 0),
					  this.Dd
							? (this.jc.x = ((this.position - this.Vf) / this.Uf) * this.width)
							: (this.jc.y =
									((this.position - this.Vf) / this.Uf) * this.height),
					  this.ta("scroll", this.position),
					  this.la());
				this.nc = !0;
			};
			a.prototype.Cb = function(a) {
				this.nc &&
					(this.nc && "mousemove" === a.type && 0 === a.buttons
						? (this.nc = !1)
						: (a.preventDefault(),
						  (a = this.ut(a)),
						  this.Dd ? (a.x -= this.offset) : (a.y -= this.offset),
						  (this.position = this.sv(a)),
						  this.ta("scroll", this.position),
						  this.format(),
						  this.la()));
			};
			a.prototype.Wb = function() {
				this.nc && (this.nc = !1);
			};
			a.prototype.Pg = function() {
				return this.Dd ? this.height : this.width;
			};
			a.JE = 0;
			a.EE = 1;
			a.AE = 2;
			a.HE = 3;
			return a;
		})(tb),
		Gd = (function() {
			function c() {}
			c.prototype.Zt = function() {
				return 16;
			};
			c.prototype.la = function(a, b) {
				a.fillStyle = "#e6e6e6";
				a.beginPath();
				a.rect(b.rect.x, b.rect.y, b.rect.width, b.rect.height);
				a.fill();
				a.beginPath();
				a.fillStyle = "auto" === b.Rg ? "#b9b9b9" : b.Rg;
				a.fillRect(b.de.x, b.de.y, b.de.width, b.de.height);
			};
			return c;
		})(),
		Fd = (function() {
			function c() {}
			c.prototype.Zt = function() {
				return 10;
			};
			c.prototype.la = function(a, b) {
				a.fillStyle = "auto" === b.Rg ? "rgba(0,0,0,0.5)" : b.Rg;
				a.beginPath();
				b.Dd
					? yc(a, b.de.x, b.de.y - 1, b.de.width, b.de.height, 4.5)
					: yc(a, b.de.x - 1, b.de.y, b.de.width, b.de.height, 4.5);
				a.fill();
			};
			return c;
		})();
	function Id(c) {
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
	function Jd(c, a, b) {
		return {
			id: c,
			hb: 2,
			x: a.x + a.width,
			Hc: a.y,
			Ic: a.y + a.height,
			order: b,
		};
	}
	function Kd(c, a, b) {
		return {
			id: c,
			hb: 4,
			x: a.y + a.height,
			Hc: a.x,
			Ic: a.x + a.width,
			order: b,
		};
	}
	var Ld = (function() {
		function c() {
			this.Ug = [];
			this.Gi = [];
			this.tq = [];
			this.order = 0;
		}
		c.prototype.clear = function() {
			this.Ug.length = 0;
			this.Gi.length = 0;
			this.order = this.tq.length = 0;
		};
		c.prototype.zs = function(a, b) {
			this.tq.push({ id: b, rect: a, order: this.order++ });
			this.Ug.push({
				id: b,
				hb: 1,
				x: a.y,
				Hc: a.x,
				Ic: a.x + a.width,
				order: this.order,
			});
			this.Ug.push(Kd(b, a, this.order));
			this.Gi.push({
				id: b,
				hb: 8,
				x: a.x,
				Hc: a.y,
				Ic: a.y + a.height,
				order: this.order,
			});
			this.Gi.push(Jd(b, a, this.order));
			this.order++;
		};
		c.prototype.yD = function(a, b) {
			var d = 8;
			void 0 === d && (d = 10);
			var e = this.jl(
				this.Gi,
				{ id: b, hb: 8, x: a.x, Hc: a.y, Ic: a.y + a.height, order: 0 },
				Number.MAX_VALUE,
			);
			e = this.jl(this.Gi, Jd(b, a, 0), e);
			var c = this.jl(
				this.Ug,
				{ id: b, hb: 1, x: a.y, Hc: a.x, Ic: a.x + a.width, order: 0 },
				Number.MAX_VALUE,
			);
			c = this.jl(this.Ug, Kd(b, a, 0), c);
			return { x: Math.abs(e) < d ? e : 0, y: Math.abs(c) < d ? c : 0 };
		};
		c.prototype.qp = function(a, b) {
			var d = 10;
			void 0 === d && (d = 10);
			var e = [];
			this.rw(e, this.Gi, a, b, d);
			this.rw(e, this.Ug, b, a, d);
			d = 0;
			for (var c = this.tq; d < c.length; d++) {
				var h = c[d];
				h.rect.Mc(a, b) && e.push({ hb: 64, id: h.id, order: h.order });
			}
			e.sort(function(a, b) {
				return b.order - a.order;
			});
			return e;
		};
		c.prototype.rw = function(a, b, d, e, c) {
			for (var f = c * c, k = 0; k < b.length; k++) {
				var l = b[k],
					n = Math.abs(d - l.x),
					r = Number.MAX_VALUE,
					v = 0;
				if (!(n > c || e < l.Hc - c || e > l.Ic + c)) {
					if (e > l.Hc + c && e < l.Ic - c) {
						var w = n * n;
						w < r && ((r = w), (v = l.hb));
					}
					w = 0.5 * (l.Hc + l.Ic);
					w = n * n + (e - w) * (e - w);
					w < f && ((r = w), (v = l.hb | 32));
					b === this.Ug &&
						((w = n * n + (e - l.Hc) * (e - l.Hc)),
						w < r && ((r = w), (v = l.hb | 24)),
						(w = n * n + (e - l.Ic) * (e - l.Ic)),
						w < r && ((r = w), (v = l.hb | 18)));
					r < f && a.push({ id: l.id, hb: v, order: l.order });
				}
			}
		};
		c.prototype.jl = function(a, b, d) {
			for (var e = 0; e < a.length; e++) {
				var c = a[e],
					h = c.x - b.x;
				Math.abs(h) > Math.abs(d) ||
					b.id === c.id ||
					(50 > (b.Ic < c.Hc ? c.Hc - b.Ic : b.Hc > c.Ic ? b.Hc - c.Ic : 0) &&
						(d = h));
			}
			return d;
		};
		return c;
	})();
	var Md = (function() {
		function c(a, b, d, e) {
			this.x = a;
			this.y = b;
			this.width = d;
			this.height = e;
		}
		c.prototype.toString = function() {
			return new G(this.x, this.y, this.width, this.height).toString();
		};
		return c;
	})();
	var Nd = (function() {
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
		Od = (function() {
			function c(a, b, d, e) {
				this.DD = [];
				this.from = new F(a, b);
				this.ja = new F(d, e);
			}
			c.prototype.addColorStop = function(a, b) {
				this.DD.push({ offset: a, Lc: b });
			};
			return c;
		})(),
		Rd = (function() {
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
					Ag: this.gs(),
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
					this.ms(a.Ag),
					(this.Ob = a.Ob));
			};
			c.prototype.drawImage = function(a, b, d, e, c, h, k, l, n) {
				b = Pd(a, b, d, e, c, h, k, l, n);
				this.cs(a, b.zk, b.Ak, b.ph, b.oh, b.Ba, b.Ca, b.cj, b.ul);
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
						rE: d * Math.cos(r),
						Hc: d * Math.sin(r),
						sE: n * v - w * y,
						Ic: n * y + w * v,
						tE: n * v - x * y,
						wE: n * y + x * v,
						uE: d * Math.cos(l),
						xE: d * Math.sin(l),
					});
					f -= Math.abs(l - r);
					r = l;
				}
				for (d = 0; d < c.length; d++)
					(e = c[d]),
						0 === d && this.moveTo(e.rE + a, e.Hc + b),
						this.bezierCurveTo(
							e.sE + a,
							e.Ic + b,
							e.tE + a,
							e.wE + b,
							e.uE + a,
							e.xE + b,
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
			c.prototype.Xk = function(a) {
				return Qd(a);
			};
			c.prototype.createPattern = function(a, b) {
				return new Nd(a, b);
			};
			c.prototype.createLinearGradient = function(a, b, d, e) {
				return new Od(a, b, d, e);
			};
			c.prototype.setLineDash = function(a) {
				a.length & 1 && (a = a.concat(a));
				this.Ob = a;
			};
			return c;
		})(),
		Sd = (function() {
			function c(a) {
				this.fontFamily = "";
				this.fontSize = 10;
				this.lineHeight = this.fontVariant = this.fontWeight = this.fontStyle =
					"normal";
				a = Qd(a);
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
	function Qd(c) {
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
	function Pd(c, a, b, d, e, f, h, k, l) {
		var n = c.width,
			r = c.height;
		c instanceof HTMLImageElement &&
			((n = c.naturalWidth), (r = c.naturalHeight));
		c = { zk: 0, Ak: 0, Ba: 0, Ca: 0, ph: n, oh: r, cj: n, ul: r };
		void 0 !== d &&
		void 0 !== e &&
		void 0 !== f &&
		void 0 !== h &&
		void 0 !== k &&
		void 0 !== l
			? ((c.zk = a),
			  (c.Ak = b),
			  (c.ph = d),
			  (c.oh = e),
			  (c.Ba = f),
			  (c.Ca = h),
			  (c.cj = k),
			  (c.ul = l))
			: void 0 !== d && void 0 !== e
			? ((c.Ba = a), (c.Ca = b), (c.cj = d), (c.ul = e))
			: ((c.Ba = a), (c.Ca = b));
		return c;
	}
	var Td = z.create("SvgFile"),
		Yd = (function() {
			function c() {
				this.rect = new G(0, 0, 0, 0);
				this.Qx = {};
				this.src = "";
				this.ready = !1;
				this.Zb = [];
				this.jv = 0;
				this.closed = !1;
			}
			c.prototype.jq = function(a) {
				return __awaiter(this, void 0, void 0, function() {
					var b,
						d = this;
					return __generator(this, function(e) {
						switch (e.label) {
							case 0:
								if (a === this.src && this.ready) return [2];
								this.src = a;
								this.ready = !1;
								return [4, Ya({ url: a, responseType: "document" })];
							case 1:
								b = e.sent();
								if (this.src !== a) throw Error("Aborted due to URL change");
								Ud(b.responseXML.documentElement, function(a) {
									return d.ZB(a);
								});
								this.jv = this.Zb.length;
								this.ready = !0;
								return [2];
						}
					});
				});
			};
			c.prototype.$a = function(a) {
				var b;
				this.Zb.length = this.jv;
				(b = this.Zb).push.apply(b, Vd(a));
			};
			c.prototype.ZB = function(a) {
				if (a instanceof Element) {
					switch (a.tagName.toUpperCase()) {
						case "SVG":
							this.Md = a;
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
												"Could not get dimensions of the SVG file. Add a viewBox attribute.",
										  )
										: ((this.rect.x = 0),
										  (this.rect.y = 0),
										  (this.rect.width = d),
										  (this.rect.height = e));
							break;
						case "STYLE":
							(d = this.Zb).push.apply(d, Vd(a.textContent));
							break;
						case "PATH":
							(d = a.getAttribute("d") || ""),
								(this.closed =
									this.closed || 0 <= d.indexOf("z") || 0 <= d.indexOf("Z"));
					}
					(d = a.getAttribute("id")) && (this.Qx[d] = a);
					return !0;
				}
			};
			c.prototype.la = function(a, b, d) {
				function e(a) {
					var b = h.Cz(a, l);
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
							k.$a(b);
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
								b.d && Gc(k, b.d);
							});
							break;
						case "CIRCLE":
							c(b, function() {
								var b = Wd(a, "cx cy r");
								k.arc(b.cx, b.cy, b.r, 0, 2 * Math.PI, !1);
							});
							break;
						case "ELLIPSE":
							c(b, function() {
								var b = Wd(a, "cx cy rx ry");
								k.ellipse(b.cx, b.cy, b.rx, b.ry);
							});
							break;
						case "LINE":
							c(b, function() {
								var b = Wd(a, "x1 y1 x2 y2");
								k.moveTo(b.x1, b.y1);
								k.lineTo(b.x2, b.y2);
							});
							break;
						case "RECT":
							c(b, function() {
								var b = Wd(a, "x y width height rx ry");
								a.hasAttribute("ry")
									? a.hasAttribute("rx") || (b.rx = b.ry)
									: (b.ry = b.rx);
								k.rect(b.x, b.y, b.width, b.height, b.rx, b.ry);
							});
							break;
						case "TEXT":
							c(b, function() {
								var b = Wd(a, "x y");
								k.text(a.textContent || "", b.x || 0, b.y || 0);
							});
					}
				}
				function c(a, b) {
					k.save();
					d || k.beginPath();
					k.$a(a);
					k.Ze();
					b();
					d || (k.fill(), k.stroke());
					k.restore();
				}
				var h = this;
				void 0 === b && (b = null);
				void 0 === d && (d = !1);
				var k = new Xd(a);
				k.$a({ stroke: "none", fill: q.Oa, "stroke-width": "1" });
				b && k.$a(b);
				var l = {};
				e(this.Md);
			};
			c.prototype.Cz = function(a, b) {
				var d = {},
					e;
				for (e in b) d[e] = b[e];
				if ((b = a.getAttribute("class")))
					for (var c = 0, h = this.Zb; c < h.length; c++)
						for (var k = h[c], l = 0, n = k.LC.split(","); l < n.length; l++)
							if ("." + b === n[l]) for (e in k.Ls) d[e] = k.Ls[e];
				for (e = 0; e < a.attributes.length; e++)
					d[a.attributes[e].name] = a.attributes[e].value;
				return d;
			};
			return c;
		})();
	function Ud(c, a) {
		for (c = [c]; c.length; ) {
			var b = c.pop();
			if (a(b)) for (b = b.firstChild; null !== b; b = b.nextSibling) c.push(b);
		}
	}
	function Wd(c, a) {
		var b = {},
			d = 0;
		for (a = a.split(" "); d < a.length; d++) {
			var e = a[d];
			b[e] = parseFloat(c.getAttribute(e) || "") || 0;
		}
		return b;
	}
	function Vd(c) {
		var a = [];
		for (c = new Zd(c); ; ) {
			for (
				var b = {}, d = { value: "" }, e = c, f = d, h = "";
				e.match(".");

			) {
				h += ".";
				var k = { value: "" };
				if (!e.Ku(k)) break;
				h += k.value;
				if (!e.match(",")) break;
				h += ",";
			}
			f.value = h;
			if (0 < h.length && c.match("{"))
				$d(c, b), c.match("}"), a.push({ LC: d.value, Ls: b });
			else break;
		}
		return a;
	}
	function $d(c, a) {
		for (;;) {
			var b = { value: "" },
				d = { value: "" },
				e = c.Ia;
			if (c.Ku(b) && c.match(":") && c.jB(d))
				c.match(";"), (a[b.value] = d.value);
			else {
				c.Ia = e;
				break;
			}
		}
	}
	var Zd = (function() {
			function c(a, b) {
				void 0 === b && (b = 0);
				this.input = a;
				this.Ia = b;
			}
			c.prototype.Jv = function() {
				return this.input.substr(this.Ia);
			};
			c.prototype.match = function(a) {
				this.xm();
				return this.Ia + a.length <= this.input.length &&
					this.input.substr(this.Ia, a.length) == a
					? ((this.Ia += a.length), !0)
					: !1;
			};
			c.prototype.xm = function() {
				for (; this.Ia < this.input.length; this.Ia++) {
					var a = this.input[this.Ia];
					if (" " != a && "\n" != a) break;
				}
			};
			c.prototype.Hd = function(a) {
				this.xm();
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
			c.prototype.Ku = function(a) {
				this.xm();
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
			c.prototype.jB = function(a) {
				this.xm();
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
		ae = {},
		be = (function() {
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
		Xd = (function() {
			function c(a) {
				this.ma = a;
				this.tb = {
					nn: 1,
					Hl: 1,
					Il: "nonzero",
					opacity: 1,
					ua: new J(),
					font: new be(),
				};
				this.gr = [];
			}
			c.prototype.save = function() {
				this.gr.push(this.tb);
				this.tb = {
					nn: this.tb.nn,
					Hl: this.tb.Hl,
					Il: this.tb.Il,
					opacity: this.tb.opacity,
					ua: this.tb.ua.clone(),
					font: this.tb.font.clone(),
				};
				this.ma.save();
			};
			c.prototype.restore = function() {
				this.gr.length && (this.tb = this.gr.pop());
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
			c.prototype.$a = function(a) {
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
						this.tb.nn = parseFloat(b);
						break;
					case "fill-opacity":
						this.tb.Hl = parseFloat(b);
						break;
					case "opacity":
						this.tb.opacity = parseFloat(b);
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
						d = new Zd(b);
						var e = {};
						$d(d, e);
						this.$a(e);
						d = !1;
						break;
					case "transform":
						d = b;
						e = new Zd(d);
						for (var c = new J(), h = !0; ; ) {
							if (e.match("translate")) {
								var k = { value: 0 },
									l = { value: 0 },
									n = !1;
								(e.match("(") && e.Hd(k)) || (n = !0);
								!n && e.match(",");
								!n && e.Hd(l);
								if (n || !e.match(")")) throw Error("Can't parse " + d);
								c = c.multiply(new qc(k.value, l.value));
							} else if (e.match("rotate")) {
								h = { value: 0 };
								k = { value: 0 };
								l = { value: 0 };
								n = !1;
								(e.match("(") && e.Hd(h)) || (n = !0);
								n ||
									!e.match(",") ||
									(e.Hd(k) && e.match(",") && e.Hd(l)) ||
									(n = !0);
								if (n || !e.match(")")) throw Error("Can't parse " + d);
								c = c.multiply(
									new rc((h.value / 180) * Math.PI, k.value, l.value),
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
										e.Hd(h) &&
										(e.match(","), 1) &&
										e.Hd(n) &&
										(e.match(","), 1) &&
										e.Hd(r) &&
										(e.match(","), 1) &&
										e.Hd(v) &&
										(e.match(","), 1) &&
										e.Hd(k) &&
										(e.match(","), 1) &&
										e.Hd(l) &&
										e.match(")")
									)
								)
									throw Error("Can't parse " + d);
								c = c.multiply(
									new J(h.value, r.value, n.value, v.value, k.value, l.value),
								);
							} else if (e.match("scale")) {
								k = { value: 1 };
								l = { value: 1 };
								if (!e.match("(") || !e.Hd(k)) throw Error("Can't parse " + d);
								e.match(",");
								e.Hd(l) || (l.value = k.value);
								if (!e.match(")"))
									throw Error("Can't parse " + d + " at " + e.Jv());
								c = c.multiply(new sc(k.value, l.value));
							} else {
								if (h)
									throw Error("Can't parse transform: " + d + " at " + e.Jv());
								break;
							}
							h = !1;
						}
						this.tb.ua = this.tb.ua.multiply(c);
						d = !1;
						break;
					case "fill-rule":
						this.tb.Il = b;
						break;
					case "font-family":
						this.tb.font.family = b;
						break;
					case "font-size":
						this.tb.font.size = b;
						break;
					case "font-weight":
						this.tb.font.weight = b;
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
							d in ae || ((ae[d] = !0), console.warn(d))),
							(d = !1);
				}
				d && Td("Apply %s=%s", a, b);
			};
			c.prototype.Ze = function() {
				this.tb.ua.Fc(this.ma);
			};
			c.prototype.fill = function() {
				var a = this.ma.globalAlpha;
				this.ma.globalAlpha =
					this.ma.globalAlpha * this.tb.opacity * this.tb.Hl;
				this.ma.fill(this.tb.Il);
				this.ma.globalAlpha = a;
			};
			c.prototype.stroke = function() {
				var a = this.ma.globalAlpha;
				this.ma.globalAlpha =
					this.ma.globalAlpha * this.tb.opacity * this.tb.nn;
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
				yc(this.ma, a, b, d, e, c, h);
			};
			c.prototype.text = function(a, b, d) {
				this.ma.font = this.tb.font.toString();
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
	var ce = "ontouchstart" in window,
		de = "onpointerdown" in window,
		ee = {
			touchstart: "down",
			touchmove: "move",
			touchend: "up",
			touchcancel: "up",
			pointerdown: "down",
			pointermove: "move",
			pointerup: "up",
			pointercancel: "up",
			mousedown: "down",
			mousemove: "move",
			mouseup: "up",
			wheel: "wheel",
		},
		fe = [],
		ge = (function(c) {
			function a(a, d, e, f, h, k, l, n, r, v, w, x, y, B, H, M, I, A, E) {
				void 0 === A && (A = fe);
				void 0 === E && (E = 0);
				k = c.call(this, a, d, e, k, n, r) || this;
				k.type = a;
				k.pageX = d;
				k.pageY = e;
				k.pb = f;
				k.qb = h;
				k.startTime = l;
				k.pointerId = v;
				k.data = w;
				k.index = x;
				k.us = y;
				k.buttons = B;
				k.ctrlKey = H;
				k.shiftKey = M;
				k.altKey = I;
				k.oa = A;
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
					this.pb,
					this.qb,
					this.timestamp,
					this.startTime,
					this.target,
					this.sb,
					this.pointerId,
					this.data,
					this.index,
					this.us,
					this.buttons,
					this.ctrlKey,
					this.shiftKey,
					this.altKey,
					this.oa,
					this.angle,
				);
			};
			a.prototype.Yl = function() {
				return this.offset({ x: this.pageX, y: this.pageY }, void 0);
			};
			a.prototype.ep = function() {
				return this.timestamp - this.startTime;
			};
			a.prototype.Pl = function() {
				return mc(this.pageX, this.pageY, this.pb, this.qb);
			};
			a.prototype.toString = function() {
				var a =
					c.prototype.toString.call(this) +
					(" " + this.ep() + "ms " + Math.round(this.Pl()) + "px");
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
			a.prototype.Pz = function() {
				var a = { x: 0, y: 0, z: 0 };
				if ("wheel" === this.sb.type) {
					var d = this.sb;
					a.x = d.deltaX;
					a.y = d.deltaY;
					a.z = d.deltaZ;
				}
				return a;
			};
			a.prototype.Lp = function() {
				switch (this.sb.type) {
					case "touchstart":
					case "touchend":
					case "touchmove":
					case "touchcancel":
						return !0;
					case "pointerdown":
					case "pointerup":
					case "pointermove":
					case "pointercancel":
						return "touch" === this.sb.pointerType;
				}
				return !1;
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
					this.sb = h;
				}
				c.prototype.toString = function() {
					return (
						"[" +
						this.type +
						" (" +
						this.sb.type +
						")] (" +
						this.pageX +
						"," +
						this.pageY +
						")"
					);
				};
				c.prototype.offset = function(a, b) {
					b = u(b).pc();
					return { x: a.x - b.left, y: a.y - b.top };
				};
				c.prototype.stopPropagation = function() {
					this.sb.stopPropagation();
				};
				c.prototype.preventDefault = function() {
					this.sb.preventDefault();
				};
				return c;
			})(),
		);
	function he(c, a) {
		var b = new Date().getTime();
		return new ge(
			"down",
			a.pageX || 0,
			a.pageY || 0,
			a.pb || 0,
			a.qb || 0,
			a.timestamp || b,
			a.startTime || b,
			a.target || null,
			c,
			a.pointerId || 0,
			a.data || null,
			a.index || 0,
			a.us || 0,
			a.buttons || 0,
			a.ctrlKey || !1,
			a.shiftKey || !1,
			a.altKey || !1,
			a.oa || [],
			a.angle || 0,
		);
	}
	var ie = z.create("TouchListener"),
		pe = (function(c) {
			function a(a, d) {
				function b(a) {
					f.handleEvent(a);
				}
				void 0 === d && (d = {});
				var f = c.call(this) || this;
				f.da = a;
				f.options = d;
				f.He = [];
				f.Fg = [];
				f.active = [];
				f.hu = {};
				f.nu = 0;
				f.Wj = !0;
				var h = d.cE ? document : a;
				ce
					? (f.Ta(a, "touchstart", b),
					  f.Ta(h, "touchmove", b),
					  f.Ta(h, "touchend", b),
					  f.Ta(h, "touchcancel", b))
					: de &&
					  !1 !== d.Ds &&
					  (f.Ta(a, "pointerdown", b),
					  f.Ta(h, "pointermove", b),
					  f.Ta(h, "pointerup", b),
					  f.Ta(h, "pointercancel", b));
				if (ce || !de || !1 === d.Ds)
					f.Ta(a, "mousedown", b),
						f.Ta(h, "mousemove", b),
						f.Ta(h, "mouseup", b);
				f.Ta(a, "wheel", b);
				return f;
			}
			__extends(a, c);
			a.prototype.Ta = function(a, d, e) {
				this.He.push({ element: a, event: d, fn: e });
				"touchmove" === d
					? a.addEventListener(d, e, {
							passive: !1,
							capture: !0 === this.options.yn,
					  })
					: a.addEventListener(d, e, !0 === this.options.yn);
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
					if ("" !== k && !this.hu[k]) {
						switch (k) {
							case "gesture":
								this.Fg.push(new je(this));
								break;
							case "tap":
								this.Fg.push(new ke(this));
								break;
							case "swipe":
								this.Fg.push(new le(this));
								break;
							case "hold":
								this.Fg.push(new me(this));
								break;
							case "drag":
								this.Fg.push(new ne(this));
						}
						this.hu[k] = !0;
						ie("Created new detector " + k + " to handle " + h);
					}
				}
				c.prototype.pa.call(this, a, d);
			};
			a.prototype.ta = function(a, d) {
				c.prototype.xc.call(this, a, d);
			};
			a.prototype.Sa = function() {
				for (var a = 0, d = this.He; a < d.length; a++) {
					var e = d[a];
					e.element.removeEventListener(e.event, e.fn, !0 === this.options.yn);
				}
				a = 0;
				for (d = this.Fg; a < d.length; a++) (e = d[a]), e.Sa && e.Sa();
				this.He.length = 0;
				this.Fg.length = 0;
				this.active.length = 0;
				this.kb = {};
			};
			a.prototype.handleEvent = function(a) {
				var b = ee[a.type],
					e = new Date().getTime();
				switch (a.type) {
					case "touchstart":
					case "touchend":
					case "touchmove":
					case "touchcancel":
						this.nu = e + 800;
						for (var c = 0; c < a.changedTouches.length; c++) {
							var h = a.changedTouches[c];
							this.Ej(a, b, h.identifier, h.pageX, h.pageY, e);
						}
						break;
					case "pointerdown":
					case "pointerup":
					case "pointermove":
					case "pointercancel":
						c = oe(a);
						"pointermove" === a.type &&
							a.buttons &&
							!this.yt(a.pointerId) &&
							(ie("Manufactured pointerdown"),
							this.Ej(a, "down", a.pointerId, c.pageX, c.pageY, e));
						this.Ej(a, b, a.pointerId, c.pageX, c.pageY, e);
						if ("pointercancel" === a.type)
							for (c = this.active.length - 1; 0 <= c; c--)
								this.Ej(a, b, this.active[c].id, a.pageX, a.pageY, e);
						break;
					case "mousedown":
					case "mousemove":
					case "mouseup":
						if (e < this.nu) break;
					case "wheel":
						(c = oe(a)), this.Ej(a, b, 0, c.pageX, c.pageY, e);
				}
			};
			a.prototype.Ej = function(a, d, e, c, h, k) {
				var b = null;
				switch (d) {
					case "down":
						b = this.zx(e, c, h, k, a.buttons);
						d = new ge(
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
							a.altKey,
						);
						break;
					case "move":
						b = this.yt(e);
						d = new ge(
							"move",
							c,
							h,
							b ? b.pb : c,
							b ? b.qb : h,
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
							a.altKey,
						);
						break;
					case "up":
						b = this.sC(e);
						d = new ge(
							"up",
							c,
							h,
							b ? b.pb : c,
							b ? b.qb : h,
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
							a.altKey,
						);
						break;
					case "wheel":
						d = new ge(
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
							a.altKey,
						);
						break;
					default:
						return;
				}
				null !== b && ((b.Kg = c), (b.Lg = h));
				(b || this.da.contains(a.target)) && this.ta(d.type, d);
			};
			a.prototype.yt = function(a) {
				for (var b = 0, c = this.active; b < c.length; b++) {
					var f = c[b];
					if (f.id === a) return f;
				}
				return null;
			};
			a.prototype.zx = function(a, d, c, f, h) {
				for (var b = 0; b < this.active.length; b++) {
					var e = this.active[b];
					if (e.id === a)
						return (
							(e.pb = e.Kg = d),
							(e.qb = e.Lg = c),
							(e.Nb = f),
							(e.oa = [new F(d, c)]),
							e
						);
				}
				this.active.push({
					index: this.active.length,
					id: a,
					Nb: f,
					pb: d,
					qb: c,
					Kg: d,
					Lg: c,
					oa: [new F(d, c)],
					data: {},
					buttons: h,
				});
				return this.active[this.active.length - 1];
			};
			a.prototype.sC = function(a) {
				for (var b = 0; b < this.active.length; b++)
					if (this.active[b].id === a)
						return (a = this.active[b]), this.active.splice(b, 1), a;
				return null;
			};
			return a;
		})(tb);
	function oe(c) {
		if (c.pageX === c.clientX && c.pageY === c.clientY) {
			var a = document.documentElement.scrollLeft + document.body.scrollLeft,
				b = document.documentElement.scrollTop + document.body.scrollTop;
			if (a || b) return { pageX: c.clientX + a, pageY: c.clientY + b };
		}
		return c;
	}
	function ke(c) {
		var a = [];
		c.pa("up", function(b) {
			if (200 > b.ep() && 20 > b.Pl()) {
				var d = b.clone();
				d.type = "tap";
				c.ta("tap", d);
				a: {
					for (d = 0; d < a.length; d++) {
						var e = a[d];
						if (
							300 > b.timestamp - e.Nb &&
							20 > mc(b.pageX, b.pageY, e.x, e.y)
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
	function ne(c) {
		var a = -1,
			b = -1;
		c.pa("down", function(a) {
			a.setData("target", a.sb.target);
		});
		c.pa("move", function(d) {
			a !== d.pb &&
				b !== d.qb &&
				8 < d.Pl() &&
				((a = d.pb),
				(b = d.qb),
				(d = d.clone()),
				(d.type = "drag"),
				c.ta("drag", d));
		});
	}
	function je(c) {
		function a() {
			for (var a = 0, b = 0, d = 0; d < e.length; d++)
				ie("Active touch: id:%s %s,%s", e[d].id, e[d].Kg, e[d].Lg),
					(a += e[d].Kg),
					(b += e[d].Lg);
			return { x: a / e.length, y: b / e.length };
		}
		function b(a, b) {
			for (var d = 0, c = 0; c < e.length; c++) {
				var f = e[c];
				d += Math.sqrt((f.Kg - a) * (f.Kg - a) + (f.Lg - b) * (f.Lg - b));
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
								Math.atan2(e[y].Lg - w, e[y].Kg - v) -
								Math.atan2(e[y].qb - w, e[y].pb - v);
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
	function le(c) {
		c.pa("up", function(a) {
			var b = a.oa;
			if (!(200 > a.Pl() || 1e3 < a.ep() || 2 > b.length)) {
				for (var d = b[0], e = b[b.length - 1], f = 1; f < b.length - 1; f++)
					if (40 < b[f].gt(d, e)) return !1;
				b = Math.atan2(e.y - d.y, e.x - d.x);
				ie("Swipe angle %s", (b / Math.PI) * 180);
				a = a.clone();
				a.type = "swipe";
				a.angle = b;
				c.ta("swipe", a);
			}
		});
	}
	function qe(c) {
		this.pi = c;
		this.time = new Date().getTime();
		this.timeout = 0;
	}
	var me = (function() {
		function c(a) {
			function b(a) {
				var b = d.hg[a];
				b &&
					(ie("Remove pointer %s", a), clearTimeout(b.timeout), delete d.hg[a]);
			}
			var d = this;
			this.hg = {};
			a.pa("down", function(c) {
				b(c.pointerId);
				d.hg[c.pointerId] = new qe(new F(c.pageX, c.pageY));
				d.hg[c.pointerId].timeout = setTimeout(function() {
					var b = c.clone();
					b.type = "hold";
					b.timestamp = new Date().getTime();
					a.ta("hold", b);
				}, 1e3);
			});
			a.pa("move", function(a) {
				var c = a.pointerId;
				if (c in d.hg) {
					var e = d.hg[c];
					20 < new F(a.pageX, a.pageY).bc(e.pi) && b(c);
				}
			});
			a.pa("up", function(a) {
				b(a.pointerId);
			});
		}
		c.prototype.Sa = function() {
			for (var a in this.hg) clearTimeout(this.hg[a].timeout);
		};
		return c;
	})();
	var re = {
			type: "translate",
			position: new F(0, 0),
			offset: new F(0, 0),
			Vg: "",
		},
		se = {
			type: "translate",
			position: new F(0, 0),
			offset: new F(0, 0),
			Vg: "",
		},
		te = {
			type: "translate",
			position: new F(0, 0),
			offset: new F(0, 0),
			Vg: "",
		},
		ue = (function() {
			function c(a, b, d) {
				this.md = a;
				this.ua = b;
				this.za = d;
			}
			c.prototype.Ps = function() {
				return !0;
			};
			c.prototype.cm = function(a, b) {
				void 0 === a && (a = this.ua);
				void 0 === b && (b = 1);
				a = a.Hb();
				if (0 === a.x || 0 === a.y) (a.x = 1), (a.y = 1);
				return new F(
					this.za.x +
						this.za.width * this.md.position.x +
						this.md.offset.x / a.x / b,
					this.za.y +
						this.za.height * this.md.position.y +
						this.md.offset.y / a.y / b,
				);
			};
			c.prototype.Yl = function() {
				var a = this.cm();
				return this.ua.apply(a.x, a.y);
			};
			c.prototype.la = function(a, b, d, c, f) {
				a.save();
				f *= d;
				c = c.multiply(this.ua);
				var e = c.Hb();
				if (0 === e.x || 0 === e.y) (e.x = 1), (e.y = 1);
				e.x = 1 / e.x / d;
				e.y = 1 / e.y / d;
				d = this.cm(c, d);
				c = c.multiply(new sc(e.x, e.y, d.x, d.y));
				c.Fc(a);
				(b = b.get(this.md.Vg))
					? ((f = b.width),
					  (c = b.height),
					  a.drawImage(b, d.x - f / 2, d.y - c / 2, f, c))
					: this.Io(a, d, f);
				a.restore();
			};
			c.prototype.Io = function(a, b) {
				a.strokeStyle = "red";
				a.lineWidth = 1;
				a.strokeRect(b.x - 10, b.y - 10, 20, 20);
			};
			c.prototype.Ib = function(a, b, d, c, f) {
				var e = a.get(this.md.Vg);
				a = this.cm(this.ua, f);
				b = this.ua.inverse().apply(b, d);
				d = this.ua.Hb();
				d.x *= f;
				d.y *= f;
				e
					? ((c = e.height), (f = e.width / 2 / d.x), (c = c / 2 / d.y))
					: ((f = c / d.x), (c /= d.y));
				return new G(a.x - f, a.y - c, 2 * f, 2 * c).Mc(b.x, b.y, 0);
			};
			c.prototype.Zf = function() {
				return "default";
			};
			c.prototype.click = function() {
				return null;
			};
			return c;
		})(),
		ve = (function(c) {
			function a(a, d, e, f) {
				a = c.call(this, a, d, e) || this;
				a.origin = f;
				return a;
			}
			__extends(a, c);
			a.prototype.Zh = function(a) {
				var b = this.ua.inverse();
				a = this.Sx(a, b);
				return this.ua.multiply(
					new sc(a.x, a.y, this.origin.x, this.origin.y).multiply(b),
				);
			};
			a.prototype.Sx = function(a, d) {
				void 0 === d && (d = this.ua.inverse());
				var b = 1,
					c = 1,
					h = this.Yl(),
					k = this.cm();
				a = d.apply(h.x + a.x, h.y + a.y);
				k = new F(k.x - this.origin.x, k.y - this.origin.y);
				a = new F(a.x - this.origin.x, a.y - this.origin.y);
				a = (a.x * k.x + a.y * k.y) / (k.x * k.x + k.y * k.y);
				a = pc(a);
				1e-8 > Math.abs(k.x) || 1e-8 > Math.abs(k.y)
					? 1e-8 > Math.abs(k.x)
						? (c = a)
						: (b = a)
					: (c = b = a);
				return { x: b, y: c };
			};
			a.prototype.Io = function(a, d, c) {
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
				a.fillStyle = q.Zc;
				a.fill();
				a.stroke();
				a.shadowColor = q.We;
			};
			a.prototype.Zf = function() {
				return 0.5 === this.md.position.x
					? "ns-resize"
					: 0.5 === this.md.position.y
					? "ew-resize"
					: this.md.position.x !== this.md.position.y
					? "nesw-resize"
					: this.md.position.x === this.md.position.y
					? "nwse-resize"
					: c.prototype.Zf.call(this);
			};
			return a;
		})(ue),
		we = (function(c) {
			function a(a, d, e, f) {
				a = c.call(this, a, d, e) || this;
				d = a.Yl();
				a.origin = a.ua.apply(f.x, f.y);
				a.cr = Math.atan2(d.y - a.origin.y, d.x - a.origin.x);
				return a;
			}
			__extends(a, c);
			a.prototype.Zh = function(a, d) {
				var b = this.Yl();
				a =
					Math.atan2(b.y + a.y - this.origin.y, b.x + a.x - this.origin.x) -
					this.cr;
				d && ((d = Math.PI / 16), (a = Math.floor(a / d) * d));
				return new rc(-a, this.origin.x, this.origin.y);
			};
			a.prototype.click = function() {
				return new rc(Math.PI / 2, this.origin.x, this.origin.y);
			};
			a.prototype.Io = function(a, d) {
				a.beginPath();
				a.strokeStyle = "#008000";
				a.lineWidth = 3;
				a.moveTo(d.x, d.y);
				a.arc(d.x, d.y, 6, 0, 1.5 * Math.PI, !1);
				a.stroke();
			};
			a.prototype.Zf = function() {
				return "crosshair";
			};
			return a;
		})(ue),
		xe = (function(c) {
			function a(a, d, e) {
				return c.call(this, a, d, e) || this;
			}
			__extends(a, c);
			a.prototype.Zh = function(a) {
				return new qc(a.x, a.y);
			};
			a.prototype.Zf = function() {
				return "move";
			};
			return a;
		})(ue),
		ye = (function(c) {
			function a() {
				return c.call(this, te, new J(), new G(0, 0, 0, 0)) || this;
			}
			__extends(a, c);
			a.prototype.Zh = function() {
				return new J();
			};
			return a;
		})(ue),
		ze = (function(c) {
			function a(a, d, e) {
				return c.call(this, a, d, e) || this;
			}
			__extends(a, c);
			a.prototype.Ps = function() {
				return !1;
			};
			a.prototype.click = function(a) {
				this.md.Rs && this.md.Rs(a.pageX, a.pageY);
				return null;
			};
			a.prototype.Zh = function() {
				return new J();
			};
			return a;
		})(ue);
	function Ae(c, a, b) {
		var d = void 0,
			e = new F(0, 0),
			f = b.Hb();
		e.x = a.x + a.width * c.position.x + c.offset.x / f.x;
		e.y = a.y + a.height * c.position.y + c.offset.y / f.y;
		switch (c.type) {
			case "translate":
				return new xe(c, b, a);
			case "scale":
				return (
					d ||
						(d = new F(
							a.right() - c.position.x * a.width,
							a.bottom() - c.position.y * a.height,
						)),
					new ve(c, b, a, d)
				);
			case "rotate":
				return d || (d = a.Sd()), new we(c, b, a, d);
			case "click":
				return new ze(c, b, a);
		}
	}
	var Be = (function() {
		function c(a, b, d, c) {
			this.view = a;
			this.ri = b;
			this.Ca = this.Ba = 0;
			this.nc = !1;
			this.log = z.create("SELECT");
			this.av(d, c);
		}
		c.prototype.vb = function(a) {
			this.log("Gesture detected; aborting select box.");
			this.view.Xa(this.ri);
			return this.ri.vb ? this.ri.vb(a) : !1;
		};
		c.prototype.Ac = function() {
			this.view.so("select");
		};
		c.prototype.wb = function(a, b) {
			return this.av(a, b);
		};
		c.prototype.av = function(a, b) {
			this.Ba = a;
			this.Ca = b;
			return (this.nc = !0);
		};
		c.prototype.Cb = function(a, b) {
			if (this.nc) {
				var d = this;
				this.view.scrollIntoView(a, b);
				this.view.Bv("select", function(c) {
					c.save();
					c.strokeStyle = "#0050B7";
					c.lineWidth = 2 / d.view.scale;
					c.fillStyle = "rgba(0, 80, 183, 0.2)";
					var e = new G(d.Ba + 0.5, d.Ca + 0.5, a - d.Ba, b - d.Ca);
					c.fillRect(e.x, e.y, e.width, e.height);
					c.strokeRect(e.x, e.y, e.width, e.height);
					c.restore();
				});
				return !0;
			}
			return !1;
		};
		c.prototype.Wb = function(a, b) {
			this.nc = !1;
			this.view.rb();
			this.view.JC(new G(this.Ba, this.Ca, a - this.Ba, b - this.Ca));
			this.view.mc();
			this.view.Xa(this.ri);
			return !0;
		};
		c.prototype.Bd = function() {
			return "pick";
		};
		return c;
	})();
	function Ce(c) {
		for (var a = [], b = 0; b < c.length; b++) a.push(c[b].id);
		return a;
	}
	var De = (function() {
		function c(a, b, d, c, f, h, k) {
			this.view = a;
			this.handle = b;
			this.ND = d;
			this.duplicate = k;
			this.ob = 0;
			this.Sv = new G(0, 0, 0, 0);
			this.Fa = [];
			this.Bp = [];
			this.Ne = [];
			this.cg = [];
			this.hc = new F(0, 0);
			this.fu = !1;
			this.log = z.create("TransformSelectionBehaviour");
			this.im = !1;
			this.wb(c, f, h);
		}
		c.prototype.vb = function(a) {
			if (
				"gesturestart" !== a.type &&
				"gesturechange" !== a.type &&
				"gestureend" !== a.type
			)
				return !1;
			this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
			this.im = !0;
			var b = this.view.ae(a.pageX, a.pageY, !0),
				d = b.x;
			b = b.y;
			"gesturestart" === a.type && ((this.hc.x = d), (this.hc.y = b));
			var c = d - this.hc.x,
				f = b - this.hc.y,
				h = a.scale,
				k = a.rotation;
			this.view.Xm || (h = 1);
			this.view.mk || (k = 0);
			k = (-k / 180) * Math.PI;
			if (0 < this.view.ha.get("snap")) {
				var l = Math.PI / 16;
				k = Math.floor(k / l) * l;
			}
			h = new sc(h, h, this.hc.x, this.hc.y);
			k = new rc(k, this.hc.x, this.hc.y);
			c = new qc(c, f).multiply(h).multiply(k);
			this.vv(c, d, b);
			"gestureend" === a.type && this.wa(c, d, b);
			return !0;
		};
		c.prototype.wb = function(a, b, d) {
			var c = this;
			if (this.im) return !0;
			this.view.Jb(this.handle.Zf());
			this.view.Pe(!0);
			this.duplicate
				? ((this.Fa.length = 0),
				  (this.Bp = this.view.Tc(!0)),
				  this.view.aa.transaction(function() {
						for (
							var a = 0, b = c.view.aa.duplicate(c.view.Tc(!0), new J());
							a < b.length;
							a++
						) {
							var d = c.view.aa.Aa(b[a], !1);
							d && L(d) && c.Fa.push(d);
						}
				  }, !0))
				: ((this.Fa = this.view.ec()), (this.Bp = this.view.Tc(!0)));
			this.kz(this.Fa);
			this.hc = this.$q(a, b, d);
			this.log("onMouseDown(%s,%s)", this.hc.x, this.hc.y);
			this.Sv = new G(
				this.view.be.x,
				this.view.be.y,
				this.view.be.width,
				this.view.be.height,
			);
			return !0;
		};
		c.prototype.kz = function(a) {
			this.Ne = [];
			for (var b = new J(), d = 0; d < a.length; d++)
				this.Ne.push(a[d].Ze(b)),
					this.cg.push(this.Ne[d]),
					(this.ob = this.ob || a[d].ia("snap") || 0),
					Rc(a[d]) && (this.fu = !0);
		};
		c.prototype.$q = function(a, b, d) {
			return this.view.ob(new F(a, b), this.ob || d);
		};
		c.prototype.Cb = function(a, b, d) {
			if (this.im) return !0;
			var c = this.$q(a, b, d);
			a = c.x;
			b = c.y;
			d = this.handle.Zh(
				new F(c.x - this.hc.x, c.y - this.hc.y),
				0 < this.view.vp(d),
			);
			this.tv(d);
			this.vv(d, a, b);
			return !0;
		};
		c.prototype.vv = function(a, b, d) {
			for (var c = this, f = 0; f < this.Fa.length; f++)
				this.Fa[f].Xb(this.Ne[f]),
					(this.cg[f] = this.Fa[f].Ze(a)),
					this.Fa[f].Xb(this.cg[f]);
			this.view.aa.xz(this.view.ma, this.view.request, this.Fa);
			this.view.tn(a);
			this.fu && this.view.aa.Ws();
			this.view.la(function() {
				if (c.handle instanceof we) {
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
				this.Fa[f].Xb(this.Ne[f]);
			f = !1;
			if (a.Mp()) {
				b = { docX: b, docY: d, nodes: [] };
				d = 0;
				for (f = this.Fa; d < f.length; d++) b.nodes.push({ id: f[d].id });
				f = !1 === this.view.xa.xc("drop-shape", b);
			}
			f ||
				(this.duplicate &&
					this.view.aa.transaction(function() {
						for (var a = [], b = 0, d = c.Fa; b < d.length; b++)
							a.push(d[b].id);
						c.view.aa.ac(a);
					}, !0),
				this.view.aa.transaction(function() {
					if (c.duplicate) c.view.aa.duplicate(c.Bp, a);
					else
						for (var b = 0; b < c.Fa.length; b++)
							c.view.aa.zb([c.Fa[b].id], c.cg[b]);
				}));
			this.st();
		};
		c.prototype.Wb = function(a, b, d) {
			var c = this;
			if (this.im) return !0;
			var f = a,
				h = b,
				k = this.$q(a, b, d);
			a = k.x;
			b = k.y;
			this.log("onMouseUp(%s,%s)", a, b);
			var l = !1;
			if (k.dd(this.hc))
				if (this.ND) {
					if (this.duplicate) {
						var n = [];
						a = 0;
						for (b = this.Fa; a < b.length; a++) n.push(b[a].id);
						this.view.aa.transaction(function() {
							c.view.aa.ac(n);
						}, !0);
					}
					(f = this.view.aa.Ib(f, h, this.view.scale, this.view.Tb).node) &&
					f.pf()
						? (this.log(
								"Didn't move, and has edit mode. Selecting node %s",
								f.id,
						  ),
						  this.view.rb(),
						  this.view.kg(f))
						: (l = !0);
				} else this.log("Didn't move, but toggleEditNode=false"), (l = !0);
			else
				return (
					this.log("Moved by %s,%s", a - this.hc.x, b - this.hc.y),
					(d = this.handle.Zh(
						new F(k.x - this.hc.x, k.y - this.hc.y),
						0 < this.view.vp(d),
					)),
					this.tv(d),
					this.wa(d, a, b),
					!0
				);
			if (l) {
				var r = this.handle.click(d);
				this.log("handle.click returned %s", r);
				r &&
					this.view.aa.transaction(function() {
						c.view.aa.qg(Ce(c.Fa), r);
					});
			}
			this.st();
			return !0;
		};
		c.prototype.tv = function(a) {
			if ("view" === this.view.ha.get("confine") && a.Mp()) {
				var b = this.Sv.clone(),
					d = this.view.Ub();
				b.x += a.Ba;
				b.y += a.Ca;
				b = b.Xs(d);
				a.Ba += b.x;
				a.Ca += b.y;
			}
		};
		c.prototype.st = function() {
			this.view.tn(new J());
			this.view.Ih();
			this.view.update(!0);
			this.view.yb();
		};
		c.prototype.Ac = function() {
			this.view.Jb("default");
			this.view.Pe(!1);
		};
		c.prototype.Bd = function() {
			return "pick";
		};
		return c;
	})();
	var Fe = (function() {
		function c(a, b) {
			this.view = a;
			this.ba = b;
			this.Dl = !1;
			this.Ja = this.Xf = this.ka = null;
			this.fillStyle = q.Oa;
			this.pn = !1;
			this.ya = new qb();
			this.kr = "normal";
			this.log = z.create("Text");
			this.multiline = a.ha.get("multilineText");
			this.Pb = document.createElement("div");
			a.ha.get("iPadNoScrollText") &&
				null !== navigator.userAgent.match(/iPad|iPhone|Android/i) &&
				(this.kr = "top");
		}
		c.prototype.Ad = function() {
			this.log("Entering text mode");
			this.view.Jb("text");
		};
		c.prototype.Ac = function() {
			this.Dl && this.$i();
			this.view.Jb("default");
			this.log("Leaving text mode");
			this.ka && this.ka.parentNode && this.ka.parentNode.removeChild(this.ka);
			this.ka = null;
			this.Pb.parentNode && this.Pb.parentNode.removeChild(this.Pb);
			this.ya.Sa();
		};
		c.prototype.wb = function(a, b, d) {
			this.log("onMouseDown(%s)", d.type);
			if (this.Dl) {
				if (d.target === this.ka)
					return (
						this.log("Ignore click -- its in our own edit box."),
						(this.view.Cl = !0),
						!1
					);
				this.log("Editing somewhere else on mousedown; submit that first.");
				this.$i();
				this.view.ha.get("autoPickToolText") && this.view.yb();
			} else
				(d = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb).node),
					this.er(d, a, b);
			this.log("Eating click");
			return (this.view.Cl = !0);
		};
		c.prototype.jz = function() {
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
		c.prototype.er = function(a, b, d) {
			function c() {
				null === E.Ja
					? E.jz()
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
			this.pn = !1;
			if (
				(a && "TextNode" === a.type()) ||
				(a &&
					"PathNode" === a.type() &&
					this.view.ha.get("allowTextInShape")) ||
				(a && "PathNode" !== a.type() && a.Tg())
			) {
				this.Ja = a;
				"top" !== this.kr && "TextNode" === a.type() && this.Ja.lg(!0);
				this.view.la();
				this.Xf = new F(a.rect.x, a.rect.y);
				if ((r = a.ia("font"))) {
					r = Qd(r);
					var y = r.fontFamily || "arial";
					var B = parseFloat(r.fontSize) || 10;
					var H = "bold" === r.fontWeight;
					var M = "italic" === r.fontStyle;
				} else
					(y = a.ia("fontName")),
						(B = a.ia("fontSize")),
						(H = a.ia("bold")),
						(M = a.ia("italic"));
				"TextNode" !== a.type() || a.ia("wrap") || (B *= a.Na().Hb().y);
				"TextNode" === a.type() && (l = a.rect.height);
				var I = a.ia("textDecoration");
				k = a.rect.width * this.view.scale;
				k = Math.max(k, 50);
				k += 7;
				a.ia("text")
					? (this.fillStyle = a.ia("textFillStyle") || this.La("textFillStyle"))
					: (this.fillStyle = this.view.sa.textFillStyle);
				var A = a.Na().Hb();
				n = a.ia("padding") || 0;
				r = n *= this.view.scale;
				n *= A.x;
				r *= A.y;
				w += 1;
				--x;
				l += 2;
				v = 0.15 * B * A.y;
				this.log(
					"NodeWidth=%s scale=%s/%s padding=%s/%s, paddingShift=%s editWidth=%s",
					a.rect.width,
					A.x,
					A.y,
					n,
					r,
					v,
					k,
				);
			} else
				(this.Ja = null),
					(this.Xf = new F(b, d)),
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
			a = this.view.Qh(this.Xf.x, this.Xf.y);
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
			this.ka.style.zIndex = "" + (this.view.Vd() + 1);
			this.ka.style.resize = "both";
			l &&
				(this.log("Set editbox height initially to " + l + "px"),
				(this.ka.style.height = l + "px"));
			l = this.ka.clientHeight;
			this.log("Using z-index %s", this.ka.style.zIndex);
			q.hf(this.fillStyle).toString() === q.Zc &&
				(this.ka.style.backgroundColor = "#808080");
			y = this.view.canvas.parentElement;
			B = u(y).pc();
			H = k = 0;
			"top" === this.kr
				? ((H = u(this.view.canvas.first).pc()),
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
			Ee(this.ka);
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
			this.Dl = !0;
			this.Xf = new F(b, d + l);
			gc(this.ka, y);
			this.Ja && (this.ka.value = this.Ja.ia("text"));
			var R = null;
			E.ka && E.log("editBox scollheight is %s", E.ka.scrollHeight);
			R = setTimeout(f, 0);
			this.ya.addEventListener(this.ka, "keydown", function(a) {
				"keydown" === a.type &&
					((27 === a.keyCode && E.multiline) || (13 === a.keyCode && a.shiftKey)
						? (E.log("Enter pressed. create text."),
						  E.$i(),
						  E.view.Ra.Mb && E.view.uD(a),
						  E.view.ha.get("autoPickToolText") && E.view.yb())
						: 27 === a.keyCode
						? (E.log("ESC pressed; cancel."),
						  E.cancel(),
						  E.view.yb(),
						  E.view.Rc.ta("goto-toolbar"))
						: 13 === a.keyCode && (R || (R = setTimeout(f, 0))));
			});
			this.ya.addEventListener(this.ka, "input", c);
			this.ya.addEventListener(this.ka, "propertychange", c);
			this.view.ha.get("leaveTextToolOnBlur") &&
				(this.ya.addEventListener(this.ka, "focus", function() {
					E.log("Text focus received.");
				}),
				this.ya.addEventListener(this.ka, "blur", function() {
					E.ka &&
						!E.ka.zq &&
						(E.log("Text blur received -- removing=%s", !0 === E.ka.zq),
						(E.ka.zq = !0),
						E.$i());
				}));
			setTimeout(function() {
				E.ka && E.ka.focus();
			}, 200);
			this.ka.focus();
			this.view.xa.ta("edit-text-shown", E.ka);
			this.view.xa.digest();
		};
		c.prototype.CD = function(a) {
			a ? this.$i() : this.cancel();
		};
		c.prototype.cancel = function() {
			this.ka &&
				((this.ka.zq = !0),
				this.ka.parentNode && this.ka.parentNode.removeChild(this.ka),
				this.view.xa.ta("edit-text-hidden"),
				this.view.Ra.Mb && this.view.Rc.ta("goto-canvas"));
			this.ka = null;
			this.Dl = !1;
			this.Ja && (this.Ja.lg(!1), this.view.la());
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
		c.prototype.Qg = function() {
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
		c.prototype.$i = function() {
			var a = this;
			if (this.ka) {
				var b = this.ka.value,
					d = this.ka.offsetWidth;
				this.cancel();
				if (this.Ja && this.Ja.ia("text") === b && !this.pn)
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
						a.view.aa.zb([a.Ja.id], c);
					});
				} else if (this.Xf) {
					this.log("Create new text node.");
					var h = (f = 0),
						k = this.La("fontSize");
					f = k;
					if (
						"center" === this.La("textAlign") &&
						0 === (this.La("width") || 0) + (this.La("padding") || 0)
					) {
						var l = this.EA(b) * this.view.scale;
						h = Math.max(0, (d - l) / 2);
						this.log(
							"tw=" + l + " ew=" + d + " Offset text by " + h + " to center.",
						);
					}
					var n = new qc(this.Xf.x + h, this.Xf.y + f);
					this.view.aa.transaction(function() {
						var d = a.view.aa.createNode(
							"TextNode",
							jc(
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
									layer: a.ba.layer || a.view.ad,
									wrap: a.view.ha.get("multilineText"),
								},
								a.ba,
							),
						);
						a.view.aa.qg([d], n);
					});
				}
			}
		};
		c.prototype.EA = function(a) {
			var b = new fd();
			b.an(
				this.La("fontName"),
				this.La("fontSize"),
				this.La("bold"),
				this.La("italic"),
				"none",
			);
			b.ng(a);
			a = document.createElement("canvas").getContext("2d");
			b.format(a, 0, 0);
			return b.rect.width;
		};
		c.prototype.Cb = function() {
			return !1;
		};
		c.prototype.ne = function(a) {
			this.log("keyboard: %s", a);
			"cancel" === a &&
				null === this.ka &&
				(this.view.yb(), this.view.Rc.ta("goto-toolbar"));
		};
		c.prototype.me = function(a, b) {
			b ? this.kd("textFillStyle", a) : this.kd("strokeStyle", a);
		};
		c.prototype.eg = function(a, b) {
			this.view.Uq(a, b);
		};
		c.prototype.xf = function(a, b) {
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
			this.pn = !0;
			this.ba[a] = b;
		};
		c.prototype.Bd = function() {
			return "text";
		};
		c.prototype.kd = function(a, b) {
			b = kc(this.ba[a], b);
			this.ba[a] = b;
			this.pn = !0;
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
		c.prototype.xp = function() {
			return ["TextNode"];
		};
		return c;
	})();
	function Ee(c) {
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
	var Ge = (function() {
		function c(a) {
			this.view = a;
			this.start = new F(0, 0);
			this.dr = new F(0, 0);
			this.active = !1;
			this.Bi = 1;
			this.rect = null;
			this.log = z.create("PanZoomMixin");
			this.Bi = a.scale;
		}
		c.prototype.vb = function(a) {
			this.log("onGesture(%s)", a.type);
			if (!this.view.ha.get("allowZoom") || !this.view.ha.get("allowScroll"))
				return !1;
			if ("gesturestart" === a.type)
				(this.start = new F(a.pageX, a.pageY)),
					(this.dr = this.view.ae(a.pageX, a.pageY)),
					(this.rect = this.view.Ub()),
					(this.Bi = this.view.scale),
					(this.active = !0);
			else if ("gesturechange" === a.type && this.rect) {
				var b = a.pageX - this.start.x,
					d = a.pageY - this.start.y;
				a = this.view.ti(a.scale * this.Bi) / this.Bi;
				a = new sc(1 / a, 1 / a, this.dr.x, this.dr.y);
				a = new qc(-b / this.Bi, -d / this.Bi).multiply(a);
				b = this.rect.clone();
				b.transform(a);
				this.view.Qe(b);
			} else "gestureend" === a.type && (this.active = !1);
			return !0;
		};
		return c;
	})();
	var He = (function(c) {
		function a() {
			var a = c.call(this) || this;
			a.si = [];
			a.Pk = !1;
			a.Km = 0;
			a.canvas = null;
			a.ha = null;
			a.log = z.create("FORMAT", !0);
			return a;
		}
		__extends(a, c);
		a.prototype.pm = function() {
			return this.Pk || 0 < this.Km;
		};
		a.prototype.add = function(a, d, c, f, h) {
			var b;
			var e = this.si;
			var n = 0;
			for (b = e.length; n < b; n++) {
				var r = e[n];
				r.type === d && r.Me === a && r.url === c && (r.Yq = !0);
			}
			this.log("Request URL %s", c.substr(0, 64));
			this.si.push({ Me: a, type: d, url: c, mv: f || {}, Tx: h, Yq: !1 });
			this.check();
		};
		a.prototype.check = function() {
			for (var a = 0; !this.Pk && a < this.si.length; )
				this.si[a].Yq ? this.si.splice(a, 1) : (this.hx(this.si[a]), (a += 1));
			this.pm() || this.ta("done");
		};
		a.prototype.hx = function(a) {
			var b = this;
			b.Pk = !0;
			b.log("Processing request for item %s url=%s", a.Me, a.url.substr(0, 64));
			0 === a.type.indexOf("image") &&
				nb.load(a.url, function(d, c) {
					null !== d
						? (b.log(
								"Image request completed for item %s url %s",
								a.Me,
								c.substr(0, 64),
						  ),
						  a.Tx(d, c))
						: b.log("Image request failed for url %s", c);
					b.Pk = !1;
					a.Yq = !0;
					b.check();
				});
		};
		a.prototype.bB = function(a, d) {
			var b = this;
			this.Km++;
			var c = new Yd();
			c.jq(a).then(
				function() {
					c.ready && d(c);
					b.Km--;
					b.check();
				},
				function(d) {
					b.Km--;
					console.warn("Error loading %s: ", a, d);
				},
			);
		};
		a.prototype.qy = function(a, d) {
			this.ta("convert-dom-request", a, d);
		};
		a.prototype.jg = function(a) {
			this.ta("reformat", a);
		};
		a.prototype.uC = function(a) {
			this.ta("redraw", a);
		};
		a.prototype.kf = function() {
			if (null === this.canvas) return new G(0, 0, 0, 0);
			var a = u(this.canvas).pc();
			return new G(a.left, a.top, this.canvas.width, this.canvas.height);
		};
		a.prototype.yc = function(a) {
			return this.ha ? this.ha.get(a) : null;
		};
		return a;
	})(tb);
	var Ie = (function() {
			function c(a, b) {
				this.ue = a;
				this.key = b;
			}
			c.prototype.toString = function() {
				return "LValue(" + this.key + ")";
			};
			return c;
		})(),
		Je = (function() {
			function c(a, b, d) {
				this.id = a;
				this.vm = b;
				d && (this.vf = d);
			}
			c.prototype.vf = function() {
				return this;
			};
			c.prototype.Eu = function(a) {
				return a;
			};
			c.prototype.toString = function() {
				return "Token(id='" + this.id + "', lbp=" + this.vm + ")";
			};
			return c;
		})(),
		Ke = (function() {
			function c(a, b) {
				return a[b];
			}
			function a(a, b, d) {
				a[b] = d;
			}
			function b(a) {
				if (a instanceof Ie) {
					if (a.ue === B) return H(B, a.key);
					if (a.ue) return a.ue[a.key];
				} else return a;
			}
			function d(a, b) {
				void 0 === b && (b = 0);
				var d = I[a];
				d ? (d.vm = Math.max(d.vm, b)) : (d = I[a] = new Je(a, b));
				return d;
			}
			function e(a, b) {
				a = d(a);
				a.vf = function() {
					return b;
				};
				return a;
			}
			function f(a) {
				return new Je("(literal)", 0, function() {
					return a;
				});
			}
			function h(a) {
				var b = new Je("(name)", 0, function() {
					return new Ie(B, a);
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
				d(a, b).Eu = c;
			}
			function n(a, c, e) {
				d(a, c).vf = function() {
					return e(b(y(c)));
				};
			}
			function r(a, b, c) {
				d(a, b).vf = c;
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
				for (var d = b.vf(); a < ca.vm; ) (b = ca), (ca = w()), (d = b.Eu(d));
				return d;
			}
			var B = {},
				H = c,
				M = a,
				I = {},
				A = 0,
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
			})(",", (E = ++A), function(a, b) {
				return b;
			});
			l("=", (R = ++A), function(a) {
				var d = y(R);
				if (!(a instanceof Ie))
					throw Error("Error: lhs of = must be assignable");
				d = b(d);
				if (a.ue === B) M(B, a.key, d);
				else if (a.ue instanceof Object) a.ue[a.key] = d;
				else throw Error(a.ue + "[" + a.key + "] cannot be assigned to.");
				return d;
			});
			k("&&", ++A, function(a, b) {
				return a && b;
			});
			k("||", ++A, function(a, b) {
				return a || b;
			});
			k("|", ++A, function(a, b) {
				return a | b;
			});
			k("^", ++A, function(a, b) {
				return a ^ b;
			});
			k("&", ++A, function(a, b) {
				return a & b;
			});
			k("===", ++A, function(a, b) {
				return a === b;
			});
			k("!==", A, function(a, b) {
				return a !== b;
			});
			k("==", A, function(a, b) {
				return a == b;
			});
			k("!=", A, function(a, b) {
				return a != b;
			});
			k(">", ++A, function(a, b) {
				return a > b;
			});
			k(">=", A, function(a, b) {
				return a >= b;
			});
			k("<", A, function(a, b) {
				return a < b;
			});
			k("<=", A, function(a, b) {
				return a <= b;
			});
			k("in", A, function(a, b) {
				return a in b;
			});
			k("<<", ++A, function(a, b) {
				return a << b;
			});
			k(">>", A, function(a, b) {
				return a >> b;
			});
			k(">>>", A, function(a, b) {
				return a >>> b;
			});
			k("+", ++A, function(a, b) {
				return a + b;
			});
			k("-", A, function(a, b) {
				return a - b;
			});
			k("*", ++A, function(a, b) {
				return a * b;
			});
			k("/", A, function(a, b) {
				return a / b;
			});
			k("%", A, function(a, b) {
				return a % b;
			});
			n("!", ++A, function(a) {
				return !a;
			});
			n("~", A, function(a) {
				return ~a;
			});
			n("+", A, function(a) {
				return +a;
			});
			n("-", A, function(a) {
				return -a;
			});
			n("typeof", A, function(a) {
				return typeof a;
			});
			l(".", ++A, function(a) {
				var d = ca;
				if ("(name)" !== d.id)
					throw Error("Error: '.' expects a name, not " + ca.id);
				if (a instanceof Ie) (a.ue = b(a)), (a.key = d.vf().key);
				else if (a instanceof Object) a = new Ie(b(a), d.vf().key);
				else throw Error("Error: '.' must be preceded by object");
				x();
				return a;
			});
			r("(", ++A, function() {
				var a = y(0);
				x(")");
				return a;
			});
			d(")");
			l("(", ++A, function(a) {
				var d = [];
				if (")" !== ca.id)
					for (;;) {
						d.push(b(y(E + 1)));
						if ("," !== ca.id) break;
						x(",");
					}
				x(")");
				var c = null;
				a instanceof Ie && (c = a.ue);
				a = b(a);
				if ("function" !== typeof a)
					throw Error("Tried to call a non-function; type was " + typeof a);
				return a.apply(c, d);
			});
			d(",");
			l("[", A, function(a) {
				var d = y(0);
				if (!(a instanceof Ie))
					throw Error("Error: '[]' must be preceded by lvalue");
				x("]");
				a.ue = b(a);
				a.key = b(d);
				return a;
			});
			d("]");
			r("{", ++A, function() {
				for (var a = {}; "}" !== ca.id; ) {
					if ("(literal)" === ca.id) var d = ca.vf();
					else if ("(name)" === ca.id) d = ca.vf().key;
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
			r("[", A, function() {
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
								"Parse error: Expected stuff in " + a + " near: " + a.substr(d),
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
		Le = Ke.parse,
		Me = Ke.evaluate;
	function Ne(c, a, b) {
		try {
			return Me(c, Le(a), b);
		} catch (d) {
			console.log("When evaluating: %s on scope ", a, c), console.log(d);
		}
	}
	function Oe(c, a) {
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
					(c[b] !== a[b] && ("object" !== typeof c[b] || !Oe(c[b], a[b]))))
			)
				return !1;
		for (b in a) if (a.hasOwnProperty(b) && !c.hasOwnProperty(b)) return !1;
		return !0;
	}
	var Pe = (function() {
		function c() {
			this.Kf = {};
			this.Qm = !1;
			this.ho = [];
			this.timeout = 0;
		}
		c.prototype.sc = function(a, b, d) {
			a = { scope: a, parsed: Le(b), Vu: void 0, Ru: d };
			b in this.Kf ? this.Kf[b].push(a) : (this.Kf[b] = [a]);
			this.check();
		};
		c.prototype.XD = function(a, b) {
			if (a in this.Kf) {
				for (var d = this.Kf[a], c = 0; c < d.length; c++)
					if (d[c].Ru === b) {
						d.splice(c, 1);
						break;
					}
				0 === d.length && delete this.Kf[a];
			}
		};
		c.prototype.check = function(a) {
			var b = this;
			this.Qm = !0;
			a && this.ho.push(a);
			0 === this.timeout &&
				(this.timeout = setTimeout(function() {
					for (var a = 0; 10 > a && b.Qm; a++) {
						b.Qm = !1;
						for (var c in b.Kf)
							for (var f = null, h = void 0, k = 0; k < b.Kf[c].length; k++) {
								var l = b.Kf[c][k];
								try {
									l.scope !== f && ((h = Me(l.scope, l.parsed)), (f = l.scope)),
										Oe(l.Vu, h) || ((l.Vu = h), l.Ru(h), (b.Qm = !0));
								} catch (n) {
									console.log("Error when evaluating %s: ", c, n),
										console.log("Context was: %o", l.scope);
								}
							}
						h = b.ho;
						b.ho = [];
						for (f = 0; f < h.length; f++) (0, h[f])();
					}
					b.timeout = 0;
				}, 0));
		};
		return c;
	})();
	var Qe = z.create("Zeact"),
		Se = (function() {
			function c(a, b, d, c, f) {
				this.Jk = a;
				this.scope = b;
				this.element = d;
				this.name = c;
				this.value = f;
			}
			c.prototype.emit = function(a, b) {
				this.Jk.ta(this.element, a, b);
			};
			c.prototype.listen = function(a, b, d) {
				if (b instanceof EventTarget && d) this.Jk.Ta(this.element, a, d, b);
				else if ("function" === typeof b) this.Jk.Ta(this.element, a, b);
				else throw Error("listen: invalid arguments.");
			};
			c.prototype.watch = function(a, b) {
				this.Jk.sc(this.scope, this.element, a, b);
			};
			c.prototype.eval = function(a) {
				return Re.Fl(this.scope, a, this.element);
			};
			c.prototype.destructor = function(a) {
				this.Jk.ya(this.element, a);
			};
			return c;
		})(),
		Te = (function() {
			function c() {
				this.Hr = new Pe();
				this.hj = {};
				this.ve = {};
				this.Zb = new Za();
				this.Tw = 1;
			}
			c.prototype.el = function(a) {
				return a;
			};
			c.prototype.Sa = function() {
				this.Zb.Sa();
			};
			c.prototype.Bb = function(a, b, d) {
				void 0 === d && (d = 2);
				this.hj[a] = { name: a, link: b, mw: d };
			};
			c.prototype.Xi = function(a, b) {
				this.ve[a.toUpperCase()] = b;
				"string" === typeof b.template && (b.template = b.template.trim());
			};
			c.prototype.re = function(a, b) {
				var d = this;
				this.Bb(a, function(a, c, h, k) {
					d.gn(a, function() {
						d.sc(a, c, k, function(d) {
							b(c, d, a);
						});
					});
				});
			};
			c.prototype.sc = function(a, b, d, c) {
				var e = this;
				this.Hr.sc(a, d, c);
				this.ya(b, function() {
					e.Hr.XD(d, c);
				});
			};
			c.prototype.gn = function(a, b) {
				a.hasOwnProperty("$issettled")
					? (b(), this.digest())
					: a.hasOwnProperty("$settledWaiters")
					? a.$settledWaiters.push(b)
					: (a.$settledWaiters = [b]);
			};
			c.prototype.iB = function(a) {
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
				this.ya(a, function() {
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
			c.prototype.ya = function(a, b) {
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
				a.Zw && delete a.Zw;
				a.Nk && delete a.Nk;
				delete a.Xe;
				delete a.ug;
			};
			c.prototype.digest = function(a) {
				this.Hr.check(a);
			};
			c.prototype.nz = function(a, b) {
				if ((a = /^z-([a-z0-9@\-]+)/.exec(a.toLowerCase())))
					if (((a = a[1]), a in this.hj && this.hj[a].mw === b))
						return this.hj[a];
				return null;
			};
			c.prototype.SA = function(a) {
				return (a = /^z-([a-z0-9@\-]+)/.exec(a.toLowerCase())) && this.hj[a[1]];
			};
			c.prototype.Fs = function(a, b, d, c) {
				void 0 === c && (c = b);
				for (var e = b.parentNode, h = [], k = 0; k < c.attributes.length; k++)
					h.push({ name: c.attributes[k].name, value: c.attributes[k].value });
				for (k = 0; k < h.length && b.parentNode === e; k++) {
					c = h[k].name;
					var l = h[k].value,
						n = this.nz(c, d);
					if (n && n.mw === d && (c = n.link(a, b, c, l)) && c !== b)
						return { da: c, Aq: !0 };
				}
				return { da: b, Aq: b.parentNode !== e };
			};
			c.prototype.Zi = function(a, b, d, c) {
				b = document.createElement(b);
				for (var e in d) b.setAttribute(e, d[e]);
				c && (b.Gn = c);
				a = this.Jc(a, b);
				delete b.Gn;
				return a;
			};
			c.prototype.Dx = function(a, b) {
				var d = this,
					c = this.ve[b.tagName];
				if (!c) return null;
				Qe("Attaching component %s", b.tagName);
				var f = c.template;
				if (f instanceof HTMLElement) var h = f.cloneNode(!0);
				else if ("string" === typeof f)
					if ("<" === f[0]) {
						Qe("Using elementsFromString to instantiate component");
						var k = u.Lo(f);
						if (0 === k.length)
							throw Error(
								"Component " +
									b.tagName +
									": Could not interpret as HTML: " +
									f,
							);
						if (1 < k.length)
							throw Error(
								"Component " +
									b.tagName +
									": Should render as a single element, but got " +
									k.length,
							);
						h = k[0];
					} else {
						Qe("Using querySelector to instantiate component");
						h = document.querySelector(f);
						if (null === h)
							throw Error(
								"Component " +
									b.tagName +
									': querySelector("' +
									f +
									'") returned null',
							);
						h = h.cloneNode(!0);
					}
				else
					throw Error(
						"Component " + b.tagName + ": Could not interpret template " + f,
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
							l.ya(h, a);
						},
						$watch: function(a, b) {
							l.sc(n, h, a, b);
						},
					};
				if (b.Gn) {
					k = b.Gn;
					for (var r in n) k[r] = n[r];
					n = k;
				}
				this.el(n);
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
							d.gn(a, function() {
								Qe("Bind prop %s to %s", c, e);
								n[c] = Ne(a, e);
								d.sc(a, h, e, function(a) {
									n[c] = a;
								});
							});
					});
				h.Rw = 1;
				h.ug = n;
				(r = h.querySelector("slot")) || (r = h);
				for (k = b.firstChild; k; ) {
					var w = k.nextSibling;
					r.appendChild(k);
					k.Xe = k.Xe || a;
					k = w;
				}
				c.style && this.Zb.Dp(c.style);
				for (r = 0; r < b.attributes.length; r++)
					if (
						((w = b.attributes[r].name),
						(k = b.attributes[r].value),
						!v[w] && !this.SA(w))
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
				Qe("apply directives from parent");
				for (r = 1; 2 >= r; r++)
					if (((k = this.Fs(a, h, r, b)), f && k.Aq))
						return { scope: n, node: k.da };
				Qe("apply directives from child");
				Qe("done applying");
				if (c.controller)
					try {
						c.controller(n, new Se(this, n, h, "", "")), this.digest();
					} catch (y) {
						console.log(y),
							console.log("When running controller for %s", b.tagName);
					}
				return this.Jc(n, h);
			};
			c.prototype.Jc = function(a, b) {
				var d = this;
				b = this.Zr(b.Xe || a, b);
				this.digest(function() {
					d.iB(a);
				});
				return b;
			};
			c.prototype.Zr = function(a, b) {
				if (1 === b.nodeType) {
					if (b.Nk) return { node: b, scope: a };
					b.Nk = this.Tw++;
					b.Xe = a;
					for (var d = 0; 2 >= d; d++) {
						var c = this.Fs(a, b, d);
						if (c.Aq) return { node: c.da, scope: a };
						if (0 === d && (c = this.Dx(a, b))) return c;
					}
					for (d = b.firstChild; d; )
						(c = d.nextSibling), d.Rw || this.Zr(d.Xe || a, d), (d = c);
				}
				return { node: b, scope: a };
			};
			return c;
		})(),
		Re;
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
							if (Ne(v.Xe ? v.Xe : a, w) === d) {
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
				} else b.ug && (b.ug.value = d);
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
						if (f) return Ne(e.Xe ? e.Xe : a, f);
					}
				}
			} else if (b.ug) return b.ug.value;
			return "zwibblerValue" in b ? b.zwibblerValue : b.value;
		}
		function d(a, b, d, c, l) {
			d && (a["this"] = d);
			a.$event = c;
			return Ne(a, b, l);
		}
		c.cF = a;
		c.Tz = b;
		c.Fl = d;
		c.tg = function(c) {
			function e(a, b) {
				var d = a.indexOf(b);
				return -1 === d ? "" : a.substr(d + b.length + 1);
			}
			var h = new Te();
			c && (h.el = c);
			h.Bb("init", function(a, b, c, e) {
				d(a, e, b);
			});
			h.re("text", function(a, b) {
				a.textContent = b;
			});
			h.re("json", function(a, b) {
				a.textContent = JSON.stringify(b);
			});
			h.re("html", function(a, b) {
				a.innerHTML = b;
			});
			h.Bb("model", function(d, c, e, f) {
				function k() {
					l = b(d, c);
					Qe("input -> model: New value for %s: %s", f, l);
					d.anjnwjewaq = l;
					Ne(d, f + "=anjnwjewaq");
					delete d.anjnwjewaq;
					h.digest();
				}
				var l = null;
				"checkbox" === c.type || "radio" === c.type
					? h.Ta(c, "change", k)
					: c.ug
					? h.sc(c.ug, c, "value", k)
					: h.Ta(c, "input", k);
				h.gn(d, function() {
					var b = c.getAttribute("z-value");
					b &&
						(h.sc(d, c, b, function(e) {
							Qe("z-value for %s[%s] is %s", c.tagName, b, e);
							c.zwibblerValue = e;
							a(d, c, l);
						}),
						h.ya(c, function() {
							delete c.zwibblerValue;
						}));
					h.sc(d, c, f, function(b) {
						Qe(
							"model(%s) -> %s[%s] : new value is %s",
							f,
							c.tagName,
							c.type,
							b,
						);
						l = b;
						a(d, c, b);
					});
				});
				"SELECT" === c.tagName &&
					h.Ta(c, "options-changed", function() {
						setTimeout(function() {
							Qe(
								"model(%s) -> %s[%s] due to <OPTION> creation",
								f,
								c.tagName,
								c.type,
							);
							a(d, c, l);
						}, 1);
					});
			});
			h.Bb("on", function(a, b, c, f) {
				var k = e(c, "on");
				"" !== k &&
					h.Ta(b, k, function(c) {
						Qe("Got %s, execute %s", k, f);
						var e = d(a, f, b, c);
						h.digest();
						c && c.preventDefault && !1 === e && c.preventDefault();
					});
			});
			var k = { disabled: 1, readonly: 1 };
			h.Bb(
				"bind",
				function(a, b, d, c) {
					var f = e(d, "bind").toLowerCase();
					"" !== f &&
						h.sc(a, b, c, function(a) {
							f in k
								? a
									? b.setAttribute(f, "TRUE")
									: b.removeAttribute(f)
								: b.setAttribute(f, a);
							"value" === f && "SELECT" === b.tagName && (b.value = a);
						});
				},
				1,
			);
			h.Bb(
				"for",
				function(a, b, d, c) {
					d = c.indexOf(" in ");
					if (-1 !== d) {
						var e = c.substr(0, d),
							f = c.substr(d + 4),
							k = [];
						Qe("z-for '%s' in '%s'", e, f);
						var l = b.parentNode,
							n = b.nextSibling;
						b.parentNode.removeChild(b);
						var r = [];
						h.sc(a, l, f, function(d) {
							if ("number" === typeof d) {
								for (var c = [], v = 0; v < d; v++) c.push(v);
								d = c;
							}
							if ("object" === typeof d && null !== d && "length" in d) {
								for (v = c = 0; v < Math.min(r.length, d.length); v++)
									if (Oe(r[v], d[v])) c += 1;
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
										"z-for " + f + "[" + v + "] = " + d[v],
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
										(c = h.Jc(c, w).node),
										k.push(c);
								"OPTION" === b.tagName &&
									l.dispatchEvent(
										new CustomEvent("options-changed", { bubbles: !0 }),
									);
							}
						});
					}
				},
				0,
			);
			h.Bb(
				"if",
				function(a, b, d, c) {
					var e = document.createComment(d + " " + c),
						f = b.parentElement,
						k = null;
					f.replaceChild(e, b);
					h.sc(a, f, c, function(c) {
						c && !k
							? ((k = b.cloneNode(!0)),
							  k.removeAttribute(d),
							  f.replaceChild(k, e),
							  (k = h.Jc(a, k).node))
							: !c && k && (h.detach(k), f.replaceChild(e, k), (k = null));
					});
					h.ya(f, function() {
						k
							? (h.detach(k), f.replaceChild(b, k))
							: e.parentNode && f.replaceChild(b, e);
					});
				},
				0,
			);
			h.re("class", function(a, b) {
				for (var d in b) u(a).pr(d, b[d]);
			});
			h.re("style", function(a, b) {
				for (var d in b) a.style[d] = b[d];
			});
			h.re("selected", function(a, b) {
				u(a).pr("selected", b);
			});
			h.re("disabled", function(a, b) {
				b ? a.setAttribute("disabled", "true") : a.removeAttribute("disabled");
			});
			h.re("enabled", function(a, b) {
				b ? a.removeAttribute("disabled") : a.setAttribute("disabled", "true");
			});
			h.re("hide", function(a, b) {
				a.style.display = b ? "none" : "";
			});
			h.re("checked", function(a, b) {
				a.checked = b ? !0 : !1;
			});
			h.Bb("ref", function(a, b, d, c) {
				a[c] = b;
				h.ya(b, function() {
					console.log("Destructor run");
					a[c] === b && delete a[c];
				});
			});
			return h;
		};
	})(Re || (Re = {}));
	var Ue = Re;
	var Ve = {
			fontStyle: null,
			fontWeight: "normal",
			fontSize: 12,
			fontFamily: "Times New Roman",
			colour: "black",
			align: "left",
			background: "none",
			underline: !1,
		},
		We = {
			fontStyle: "fs",
			fontWeight: "fw",
			fontSize: "fh",
			fontFamily: "ff",
			colour: "fc",
			align: "ta",
			background: "fb",
			underline: "fu",
		},
		Xe = (function() {
			function c(a) {
				this.sa = a;
				this.options = {};
			}
			c.prototype.TD = function() {
				var a = new c(this.sa),
					b;
				for (b in Ve) Ve.hasOwnProperty(b) && (a.options[b] = this.get(b));
				return a;
			};
			c.prototype.LD = function() {
				var a = {},
					b;
				for (b in this.options)
					this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
				return a;
			};
			c.prototype.apply = function(a) {
				a.fillStyle = this.get("colour");
				a.font = this.Jz();
			};
			c.prototype.empty = function() {
				var a = 0,
					b;
				for (b in this.options) this.options.hasOwnProperty(b) && (a += 1);
				return 0 === a;
			};
			c.prototype.Kl = function(a, b) {
				a = c.Kl(a, b);
				return a.empty() ? this : a;
			};
			c.prototype.If = function(a) {
				c.If(this.options, a);
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
			c.prototype.Xg = function(a) {
				for (var b in a.options) {
					var d = this.get(b),
						c = a.get(b);
					d !== c && this.set(b, c);
				}
			};
			c.prototype.clone = function() {
				var a = new c(this.sa);
				a.Xg(this);
				return a;
			};
			c.prototype.Jz = function() {
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
			c.prototype.dd = function(a) {
				if (this === a) return !0;
				for (var b in this.options)
					if (!(b in a.options) || a.options[b] !== this.options[b]) return !1;
				for (b in a.options) if (!(b in this.options)) return !1;
				return !0;
			};
			c.prototype.gj = function(a) {
				var b = new c(this.sa),
					d;
				for (d in Ve)
					Ve.hasOwnProperty(d) &&
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
		c.Kl = function(a, b) {
			void 0 === b && (b = "");
			var d = new c(Ve);
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
		c.If = function(a, b) {
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
	})(Xe || (Xe = {}));
	var Ye = Xe;
	var Ze = (function() {
		function c() {
			this.qq = null;
			this.Jm = [];
		}
		c.prototype.fr = function() {};
		c.prototype.Mo = function() {
			this.Jm.push("\n");
		};
		c.prototype.Ew = function(a) {
			this.qq = a = this.qq ? a.gj(this.qq) : a.TD();
			a = a.LD();
			for (var b in a)
				a.hasOwnProperty(b) && this.Jm.push("/" + We[b] + a[b] + ";");
		};
		c.prototype.Fw = function(a) {
			a = a.replace(/\//g, "//");
			this.Jm.push(a);
		};
		c.prototype.toString = function() {
			return this.Jm.join("");
		};
		return c;
	})();
	function $e(c, a) {
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
	var af = z.create("InlineItem");
	var bf = (function(c) {
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
		a.prototype.rj = function(a, d) {
			d = this.text.charAt(d);
			return {
				width: a ? a.measureText(d).width : 0,
				height: this.style.get("fontSize"),
				Lj: 0,
				Ox: " " === d || "-" === d,
				Ou: "\n" === d,
			};
		};
		a.prototype.Yh = function(a, d) {
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
			c.prototype.$a = function(a) {
				af("Asked to set %s", a);
				this.style = this.style.clone();
				this.style.Xg(a);
				af("After merge: %s", this.style);
			};
			c.prototype.om = function() {};
			c.prototype.split = function() {
				return null;
			};
			c.prototype.rj = function() {
				return { width: 0, height: 0, Lj: 0, Ox: !0, Ou: !1 };
			};
			c.prototype.Yh = function() {
				return "";
			};
			return c;
		})(),
	);
	var cf = z.create("TEXTSEQ"),
		df = (function() {
			function c(a) {
				this.style = a;
				this.children = [];
				this.length = this.Eh = 0;
				this.zf = null;
			}
			c.Bh = function(a) {
				var b = new Ye(Ve),
					d = new c(b),
					e = {},
					f;
				for (f in We) We.hasOwnProperty(f) && (e[We[f]] = f);
				$e(a, function(a, c) {
					a in e
						? ("fh" === a && (c = parseFloat(c)),
						  "null" === c && (c = null),
						  b.set(e[a], c))
						: "text" === a
						? d.append([new bf(b.clone(), c)])
						: cf("Bad key: %s", a);
				});
				return d;
			};
			c.prototype.save = function(a, b, d) {
				var c = !1;
				this.yu(a, b, function(a, b, e) {
					d.Ew(a.style);
					a = a.Yh(b, e);
					b = 0;
					for (e = a.split("\n"); b < e.length; b++) {
						var f = e[b];
						if ("" === f) {
							if ((c || d.fr(), d.Mo(), (c = !1), "\n" === a)) break;
						} else c || (d.fr(), (c = !0)), d.Fw(f);
					}
				});
				c && d.Mo();
				return d;
			};
			c.prototype.append = function(a) {
				this.om(this.Eh, a);
			};
			c.prototype.om = function(a, b) {
				cf("Insert %s item at index %s", b.length, a);
				var d,
					c = 0;
				for (d = 0; d < this.children.length; d++) {
					var f = this.children[d];
					var h = f.count();
					if (c === a) {
						cf("Found proper position");
						break;
					} else if (c + h > a) {
						cf("Splitting item from %s..(%s)..%s", f.index, a, f.index + h);
						this.Zk(d, a - c);
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
						cf("Bump item %s index %s->%s length=%s", d, f.index, c, h),
						(f.index = c),
						(c += h),
						cf("   item %s: %s/%s", d, f.index, f.count());
				this.Eh = c;
				this.length = this.children.length;
				this.zf = null;
			};
			c.prototype.remove = function(a, b) {
				var d = [];
				if (0 === this.children.length) return d;
				this.os(a);
				this.os(a + b);
				for (
					var c = this.uj(a), f, h = c.item.index, k = c.index;
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
				this.Eh -= b;
				this.zf = null;
				return d;
			};
			c.prototype.count = function() {
				return this.Eh;
			};
			c.prototype.uj = function(a) {
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
			c.prototype.Zk = function(a, b) {
				var d = this.children[a];
				if ((b = d.split(b)))
					(b.index = d.index + d.count()),
						this.children.splice(a + 1, 0, b),
						(this.length += 1),
						cf("Split %s..%s..%s", d.index, b.index, b.index + b.count());
				return b;
			};
			c.prototype.os = function(a) {
				var b = this.uj(a);
				b && b.item.index < a && this.Zk(b.index, a - b.item.index);
			};
			c.prototype.bm = function(a) {
				return 0 === this.length ? this.style : this.uj(a).item.style;
			};
			c.prototype.Xt = function(a, b) {
				var d = [],
					c = 0,
					f = 0,
					h = null,
					k = 0;
				if (0 === b)
					return d.push({ start: a, length: 0, style: this.bm(a) }), d;
				for (var l = 0; l < this.children.length; l++) {
					var n = this.children[l];
					var r = n.count();
					k += r;
					if (k > a) {
						null === h && ((h = n.style), (c = n.index));
						var v = n.style.dd(h);
						v && (f += r);
						if (!v || k >= b)
							d.push({ start: c, length: f, style: h }), (c = n.index), (f = 0);
						if (k >= a + b) break;
					}
				}
				return d;
			};
			c.prototype.lD = function(a) {
				for (var b = 0; b < a.length; b++) {
					var d = a[b];
					this.$a(d.style, d.start, d.length);
				}
			};
			c.prototype.$a = function(a, b, d) {
				var c = 0,
					f = b + d;
				cf("setStyle: %s:%s %s", b, d, a);
				for (d = 0; d < this.children.length; d++) {
					var h = this.children[d],
						k = h.count();
					c < b && b < c + k
						? this.Zk(d, b - c)
							? (k = b - c)
							: (h.$a(a), cf("Case 1"))
						: b <= c && f < c + k && f > c
						? (this.Zk(d, f - c), (k = f - c), h.$a(a), cf("Case 2"))
						: b <= c &&
						  c + k <= f &&
						  (h.$a(a),
						  cf("Case 3: fromChar=%s..%s count=%s..%s", b, f, c, c + k));
					c += k;
				}
			};
			c.prototype.IC = function(a, b, d) {
				for (var c = b; ; ) {
					b = this.rj(null, a);
					if (d(b)) {
						a += 1;
						break;
					} else if (0 === a) break;
					--a;
				}
				for (;;) {
					b = this.rj(null, c);
					if (d(b)) break;
					else if (c >= this.Eh - 1) break;
					c += 1;
				}
				return { start: a, length: c - a };
			};
			c.prototype.wA = function(a, b) {
				return this.IC(a, b, function(a) {
					return a.Ou;
				});
			};
			c.prototype.rj = function(a, b) {
				if (0 === this.length)
					throw Error("error: expected to have child items");
				if (
					null === this.zf ||
					b < this.zf.index ||
					b >= this.zf.index + this.zf.count()
				)
					this.zf = this.uj(b).item;
				return this.zf.rj(a, b - this.zf.index);
			};
			c.prototype.Yh = function(a, b) {
				var d = "";
				this.yu(a, b, function(a, b, c) {
					console.log("Iterate: ", a, b, c);
					d += a.Yh(b, c);
				});
				return d;
			};
			c.prototype.yu = function(a, b, d) {
				var c = a + b;
				if (0 !== b) {
					var f = this.uj(a);
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
	var ef = z.create("SpliceText"),
		ff = (function(c) {
			function a(a, d, e, f, h) {
				var b = c.call(this) || this;
				b.cc = a;
				b.text = d;
				b.start = e;
				b.length = f;
				b.style = h;
				b.wf = [];
				return b;
			}
			__extends(a, c);
			a.prototype.Xg = function(b) {
				if (!(b instanceof a)) return !1;
				ef(
					"?merge(%s,%s,%s) and (%s,%s,%s)",
					this.start,
					this.length,
					this.text.substr(0, 5),
					b.start,
					b.length,
					b.text.substr(0, 5),
				);
				return 0 === this.length &&
					0 === b.length &&
					this.start + this.text.length === b.start &&
					((null === this.style && null === b.style) ||
						(null != this.style && null !== b.style && this.style.dd(b.style)))
					? ((this.text += b.text), ef("Merging SpliceTextAction"), !0)
					: 0 !== this.text.length ||
					  0 !== b.text.length ||
					  (this.start !== b.start && b.start + b.length !== this.start)
					? !1
					: ((this.length += b.length),
					  this.start < b.start
							? (this.wf = this.wf.concat(b.wf))
							: ((this.wf = b.wf.concat(this.wf)), (this.start = b.start)),
					  ef("Merging Deletes"),
					  !0);
			};
			a.prototype.Sc = function() {
				ef(
					"Execute SpliceTextAction(del=%s/%s insert %s...)",
					this.start,
					this.length,
					this.text.substr(0, 5),
				);
				this.cc.Rj(this.start);
				0 < this.length &&
					(ef("Removing text"),
					(this.wf = this.cc.text.remove(this.start, this.length)));
				if (0 < this.text.length) {
					if (null === this.style) throw Error("style is null");
					var a = new bf(this.style, this.text);
					this.cc.text.om(this.start, [a]);
				}
			};
			a.prototype.Wc = function() {
				ef(
					"Undo SpliceTextAction(del=%s/%s insert %s)",
					this.start,
					this.length,
					this.text,
				);
				0 < this.text.length &&
					this.cc.text.remove(this.start, this.text.length);
				this.wf.length && this.cc.text.om(this.start, this.wf);
				this.cc.Rj(this.start);
			};
			return a;
		})(ib);
	var gf = z.create("UNDO"),
		hf = (function(c) {
			function a(a, d, e, f) {
				var b = c.call(this) || this;
				b.cc = a;
				b.from = d;
				b.length = e;
				b.style = f;
				b.cq = [];
				return b;
			}
			__extends(a, c);
			a.prototype.Sc = function() {
				gf("Do apply style");
				this.cc.Rj(this.from);
				this.cq = this.cc.text.Xt(this.from, this.length);
				this.cc.text.$a(this.style, this.from, this.length);
			};
			a.prototype.Wc = function() {
				gf("Undo apply style");
				console.log(this.cq);
				this.cc.Rj(this.from);
				this.cc.text.lD(this.cq);
			};
			a.prototype.Xg = function() {
				return !1;
			};
			return a;
		})(ib);
	var jf = z.create("TextEditor"),
		kf = (function(c) {
			function a(a, d) {
				var b = c.call(this) || this;
				b.nd = a;
				b.sa = d;
				b.Oi = 0;
				b.Jh = 0;
				b.Qf = null;
				b.ml = 0;
				b.active = !1;
				b.text = new df(d);
				return b;
			}
			__extends(a, c);
			a.prototype.setActive = function(a) {
				this.active = a;
				jf("setActive: %s", this.active);
			};
			a.prototype.Bj = function() {
				return Math.min(this.Oi, this.Jh);
			};
			a.prototype.Aj = function() {
				return Math.max(this.Oi, this.Jh);
			};
			a.prototype.save = function(a, d) {
				void 0 === a && (a = 0);
				void 0 === d && (d = this.text.length);
				return this.text.save(a, d, new Ze()).toString();
			};
			a.prototype.Tt = function() {
				return this.text.count();
			};
			a.prototype.jd = function(a, d) {
				void 0 === d && (d = a);
				this.Jh = a;
				this.Oi = d;
				this.Jg("selchange");
			};
			a.prototype.rb = function() {
				this.jd(0, 0);
			};
			a.prototype.exec = function(a, d) {
				var b = this.Jh;
				switch (a) {
					case "bold":
						this.sn("fontWeight", "bold", "normal");
						return;
					case "italic":
						this.sn("fontStyle", "italic", "normal");
						return;
					case "underline":
						this.sn("underline", !0, !1);
						return;
					case "orange":
						this.sn("background", "orange", "transparent");
						return;
					case "undo":
						jf("Processing undo");
						this.nd.Wc(this);
						this.jd(b);
						return;
					case "redo":
						jf("Processing redo");
						this.nd.qe(this);
						this.jd(b);
						return;
					case "font":
						this.fl("fontFamily", d);
						return;
					case "fontSize":
						"string" === typeof d && (d = parseFloat(d) || 2);
						this.fl("fontSize", d);
						return;
					case "align":
						this.fl("align", d);
						break;
					case "delete":
						jf("Delete text");
						this.xq(!1);
						return;
					case "backspace":
						jf("Delete text backspace");
						this.xq(!0);
						return;
					case "select-none":
						this.jd(b, b);
						return;
					case "select-all":
						this.jd(0, this.Tt());
						return;
				}
				this.ig();
			};
			a.prototype.sn = function(a, d, c) {
				var b = this.Bj();
				b = this.text.Xt(b, this.Aj() - b);
				for (
					var e, k = 0;
					k < b.length && ((e = b[k].style), e.get(a) === d);
					k++
				);
				this.fl(a, k < b.length ? d : c);
			};
			a.prototype.qu = function(a) {
				var b = this.Bj(),
					c = this.Aj() - b;
				a = a.replace("\r", "\n");
				jf("Delete %s/%s Insert char %s...", b, c, a.substr(0, 5));
				if (this.Qf && this.ml === b && 0 === c) {
					var f = this.Qf;
					jf("Using recording caret style: %s", f);
				} else f = 0 === c && 0 < b ? this.text.bm(b - 1) : this.text.bm(b);
				this.nd.wa(new ff(this, a, b, c, f), !1, this);
				this.jd(b + a.length, b + a.length);
				this.Qf = null;
			};
			a.prototype.fl = function(a, d) {
				if ("string" === typeof a) {
					var b = new Ye(Ve);
					b.set(a, d || "");
				} else b = a;
				if (b.empty()) jf("apply empty style; ignore");
				else {
					a = this.Bj();
					d = this.Aj();
					var c = [];
					if (b.has("align")) {
						var h = new Ye(Ve);
						h.set("align", b.get("align"));
						var k = this.text.wA(a, d);
						0 < k.length &&
							(jf(
								"Apply paragraph style to %s:%s %s",
								k.start,
								k.start + k.length,
								b,
							),
							c.push(new hf(this, k.start, k.length, h)));
					}
					jf("applystyle called set %s:%s %s", a, d, b);
					a !== d
						? c.push(new hf(this, a, d - a, b))
						: ((this.Qf =
								null === this.Qf || this.ml !== a
									? this.text.bm(a).clone()
									: this.Qf.clone()),
						  this.Qf.Xg(b),
						  (this.ml = a),
						  jf("Recording new caret style: %s", this.Qf));
					this.nd.wa(c, !1, this);
				}
			};
			a.prototype.xq = function(a) {
				var b = this.Bj(),
					c = this.Aj() - b;
				jf("Delete %s characters (totalCount=%s)", c, this.text.count());
				c
					? (this.nd.wa(new ff(this, "", b, c, null), !1, this), this.jd(b))
					: a && 0 < b
					? (this.nd.wa(new ff(this, "", b - 1, 1, null), !1, this),
					  this.jd(b - 1))
					: b < this.text.count() &&
					  this.nd.wa(new ff(this, "", b, 1, null), !1, this);
				this.ml = -1;
			};
			a.prototype.BA = function() {
				var a = this.Bj(),
					d = this.Aj() - a;
				jf("getSelectedText()=%s", this.text.Yh(a, d));
				return this.text.Yh(a, d);
			};
			a.prototype.bk = function(a) {
				var b = this;
				if (this.active)
					switch ((jf("Received clipboard event: %s", a.type), a.type)) {
						case "copy":
						case "cut":
							jf("Cut/Copy to system clipboard.");
							var c = this.BA();
							jf("text=%s", c);
							c.length &&
								(a.clipboardData.setData("text/plain", c),
								a.preventDefault(),
								"cut" === a.type && this.xq(!1));
							break;
						case "paste":
							for (
								jf(
									"There are %s items on the clipboard",
									a.clipboardData.items.length,
								),
									c = 0;
								c < a.clipboardData.items.length;
								c++
							) {
								var f = a.clipboardData.items[c];
								jf("Item [%s] type is %s", c, f.type);
								"text/plain" === f.type &&
									f.getAsString(function(a) {
										b.qu(a);
									});
							}
					}
			};
			a.prototype.Rj = function() {};
			a.prototype.ig = function() {};
			return a;
		})(tb);
	var lf = z.create("HTMLTextEditor"),
		qf = (function(c) {
			function a(a, d, e) {
				void 0 === e && (e = {});
				var b =
					c.call(
						this,
						new jb(),
						new Ye(Ve).Kl(window.getComputedStyle(d), d.tagName),
					) || this;
				b.da = d;
				b.options = e;
				b.gd = new ub();
				b.qD(a);
				a.addEventListener(document, "selectionchange", function() {
					b.LB();
				});
				a.addEventListener(document, "cut", function(a) {
					b.bk(a);
				});
				a.addEventListener(document, "copy", function(a) {
					b.bk(a);
				});
				a.addEventListener(document, "paste", function(a) {
					b.bk(a);
				});
				mf(b.text, d, b.sa);
				b.ig();
				b.pa("reformat", function() {
					b.ig();
				});
				return b;
			}
			__extends(a, c);
			a.prototype.$v = function(a) {
				this.da.innerHTML = a;
				this.text = new df(this.sa);
				mf(this.text, this.da, this.sa);
				u(this.da).clear();
				a = this.text;
				var b = this.da,
					c = this.sa;
				a.save(0, a.count(), new nf(b, c));
				this.jd(0, 0);
			};
			a.prototype.qD = function(a) {
				var b = this;
				this.gd.map("ctrl+b,cmd+b", "bold");
				this.gd.map("ctrl+i,cmd+i", "italic");
				this.gd.map("ctrl+u,cmd+u", "underline");
				this.gd.map("ctrl+z,cmd+z", "undo");
				this.gd.map("ctrl+shift+z,cmd+shift+z", "redo");
				this.gd.map("delete", "delete");
				this.gd.map("backspace", "backspace");
				this.gd.pa("*", function(a, d) {
					lf("Keyboard event: ", a);
					d.preventDefault();
					d.stopPropagation();
					b.exec(a);
				});
				this.gd.Ks(this.da);
				a.add(function() {
					b.gd.detach(b.da);
				});
				a.addEventListener(this.da, "keypress", function(a) {
					var d = a.charCode;
					13 === d && b.options.Xq && !a.shiftKey
						? b.ta("enter")
						: (b.qu(String.fromCharCode(d)), a.preventDefault(), b.ig());
				});
			};
			a.prototype.setActive = function(a) {
				c.prototype.setActive.call(this, a);
				a
					? (this.da.setAttribute("contenteditable", "TRUE"), this.da.focus())
					: (this.da.setAttribute("contenteditable", "FALSE"), this.da.blur());
			};
			a.prototype.LB = function() {
				if (this.active) {
					var a = document.getSelection();
					if (null === a) this.rb();
					else if (null === a.focusNode || null === a.anchorNode) this.rb();
					else if (a.anchorNode === this.da)
						lf("Select-all %s..%s", 0, this.text.length),
							c.prototype.jd.call(this, 0, this.text.count());
					else {
						var d = of(this.da, a.anchorNode, a.anchorOffset);
						a = of(this.da, a.focusNode, a.focusOffset);
						-1 !== d &&
							-1 !== a &&
							(0 === this.text.count() && (a = d = 0),
							a !== this.Jh || d !== this.Oi) &&
							(c.prototype.jd.call(this, a, d), lf("Selected %s..%s", d, a));
					}
				}
			};
			a.prototype.jd = function(a, d) {
				void 0 === d && (d = a);
				lf("self-set caret position: %s..%s", d, a);
				c.prototype.jd.call(this, a, d);
				var b = pf(this.da, a),
					f = pf(this.da, d),
					h = document.createRange();
				d <= a
					? (h.setStart(f.node, f.offset), h.setEnd(b.node, b.offset))
					: (h.setStart(b.node, b.offset), h.setEnd(f.node, f.offset));
				if ((a = window.getSelection())) a.removeAllRanges(), a.addRange(h);
			};
			a.prototype.Rj = function(a) {
				lf("Mark for reformat: %s", a);
				this.Jg("reformat");
			};
			a.prototype.ig = function() {
				u(this.da).clear();
				var a = this.text,
					d = this.da,
					c = this.sa;
				a.save(0, a.count(), new nf(d, c));
				this.options.placeholder &&
					0 === this.text.count() &&
					((a = u("div")
						.$a({ opacity: "0.5" })
						.ng(this.options.placeholder)
						.Rd(this.da).da),
					this.sa.If(a.style));
				this.jd(this.Jh, this.Oi);
			};
			a.prototype.exec = function(a, d) {
				c.prototype.exec.call(this, a, d);
				this.ig();
			};
			return a;
		})(kf);
	function of(c, a, b) {
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
				c = rf(c.nodeValue, f);
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
	function pf(c, a) {
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
				c = rf(c.nodeValue, h);
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
	function rf(c, a) {
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
	function mf(c, a, b) {
		function d(a, b) {
			if (a.nodeType === Node.ELEMENT_NODE) {
				switch (a.tagName) {
					case "DIV":
					case "P":
						l || (f += "\n"), (l = !1);
				}
				"DIV" === a.tagName && (n = !0);
				a instanceof HTMLElement && (b = b.Kl(a.style, a.tagName));
				for (a = a.firstChild; a; ) d(a, b), (a = a.nextSibling);
			} else
				a.nodeType === Node.TEXT_NODE &&
					(h.dd(b) || (e(h), (h = b)),
					(b = rf(a.nodeValue, n)),
					(f += b),
					b.length && (n = !1));
		}
		function e(a) {
			f.length && (k.push(new bf(a, f)), (f = ""));
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
	var nf = (function() {
		function c(a, b) {
			this.root = a;
			this.Vj = this.ct = b;
			this.span = this.va = null;
			this.offset = 0;
			this.style = b;
		}
		c.prototype.Ew = function(a) {
			lf("writeStyle(" + a.toString());
			this.Vj = a;
		};
		c.prototype.fr = function() {
			lf("startLine");
			this.va = document.createElement("DIV");
			this.root.appendChild(this.va);
			this.va.setAttribute("t-off", this.offset.toString());
			this.va.style.whiteSpace = "pre-wrap";
			this.style = this.ct;
			this.va.style.fontSize = this.Vj.get("fontSize") + "px";
		};
		c.prototype.Mo = function() {
			lf("endLine");
			if (!this.va) throw Error("Expected div to exist");
			null === this.va.firstChild &&
				this.va.appendChild(document.createElement("BR"));
			this.span = this.va = null;
			this.offset += 1;
		};
		c.prototype.Fw = function(a) {
			lf("writeText(" + a + ")");
			if (!this.va) throw Error("Expected div to exist");
			(null !== this.span && this.style.dd(this.Vj)) ||
				((this.span = document.createElement("SPAN")),
				this.va.appendChild(this.span),
				this.Vj.If(this.span.style),
				(this.style = this.Vj));
			this.span.appendChild(document.createTextNode(a));
			this.offset += a.length;
		};
		return c;
	})();
	function sf(c, a, b, d) {
		c.fillStyle = q.Zc;
		c.fillRect(a, b, d, d);
		c.beginPath();
		c.strokeStyle = q.Oa;
		c.moveTo(a, b);
		c.lineTo(a + d, b + d);
		c.moveTo(a + d, b);
		c.lineTo(a, b + d);
		c.stroke();
	}
	function tf(c, a, b, d) {
		for (var e, f = 0; f < d; f += 5) {
			e = 0 === (f / 5) % 2;
			for (var h = 0; h < d; h += 5)
				(c.fillStyle = e ? q.Oa : q.Zc),
					(e = !e),
					c.fillRect(a + h, b + f, 5, 5);
		}
		e = c.createLinearGradient(a + d, b + d, a, b);
		e.addColorStop(0, "rgba(255, 255, 255, 1.0)");
		e.addColorStop(1, "rgba(255, 255, 255, 0.0)");
		c.fillStyle = e;
		c.fillRect(a, b, d, d);
	}
	function uf(c) {
		for (var a = [], b = [], d = [], e = 0, f = 0; 360 > f; f++) {
			var h = new q(q.yh, [f, 1, 1, 1]);
			a.push(h);
			0 < f && ((h = a[f - 1].My(h)), b.push(h), (e += h));
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
	function vf(c, a, b) {
		function d(a, b, d) {
			return u("div", { "zwibbler-color": d })
				.$a({ width: b + "px", height: b + "px", display: "inline-block" })
				.Rd(a);
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
		var f = u.oc(c),
			h = b.columns || 16;
		c = b.rows || h;
		if (f) {
			var k = new pe(f, { cE: !1 });
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
			e(a, sf, "transparent");
			e(a, tf, "opacity-50");
			for (k = 0; 1 >= k; k += 1 / (h - 3)) {
				var l = new q(q.yh, [0, 0, Math.pow(k, 1 / 2.2), 1]).toString();
				d(f, a, l).$a({ backgroundColor: l });
			}
			h = uf(h);
			for (k = 1; k > 1 / (c - 1); k -= 1 / c) {
				l = 0;
				for (var n = h; l < n.length; l++) {
					var r = n[l];
					r.values[1] = 1;
					r.values[2] = Math.pow(k, 1 / 2.2);
					d(f, a, r.toString()).$a({ backgroundColor: r });
				}
			}
		}
	}
	(function() {
		function c(a, b) {
			var d = this;
			this.Nm = null;
			var c = document.createElement("div");
			c.style.width = "320px";
			c.style.lineHeight = "0";
			c.style.position = "absolute";
			b.appendChild(c);
			vf(c, 20, {
				onColour: function(a, b) {
					d.Nm && d.Nm.resolve({ type: "colour", value: a, fill: b });
				},
			});
			this.Fo = zd(c);
			a.add(function() {
				d.Fo && d.Fo.destroy();
			});
		}
		c.prototype.show = function(a, b) {
			this.Nm = new ac();
			this.Fo.show(a, b, !0);
			return this.Nm;
		};
		return c;
	})();
	var wf = new ((function() {
		function c() {
			this.Qo = {};
		}
		c.prototype.gl = function() {
			if ("localStorage" in window)
				try {
					var a = window.localStorage;
				} catch (b) {}
			return void 0 !== a;
		};
		c.prototype.setItem = function(a, b) {
			this.gl() ? window.localStorage.setItem(a, b) : (this.Qo[a] = "" + b);
		};
		c.prototype.getItem = function(a) {
			return this.gl() ? window.localStorage.getItem(a) : this.Qo[a];
		};
		c.prototype.removeItem = function(a) {
			this.gl() ? window.localStorage.removeItem(a) : delete this.Qo[a];
		};
		return c;
	})())();
	var yf = (function() {
			function c(a, b, d, c) {
				this.x = a;
				this.y = b;
				this.width = d;
				this.height = c;
				this.Uc = [];
				this.fonts = {};
				this.images = [];
				this.un = {};
				this.qc = 1;
				this.my = !0;
				this.page = {};
				this.log = z.create("PdfWriter");
				this.ck = this.object("Pages", { Kids: [], Count: 0 });
				this.Wx = this.object("Catalog", { Pages: this.ck._id + " 0 R" });
				this.Ai();
			}
			c.prototype.UA = function() {
				if (null !== c.Vn) return c.Vn;
				var a = document.createElement("canvas"),
					b = !1;
				a.width = 10;
				a.height = 10;
				"toDataURL" in a && (b = 0 < a.toDataURL("image/jpeg").indexOf("jpeg"));
				c.Vn = b;
				this.log("JPEG supported: %s", b);
				return b;
			};
			c.prototype.Ai = function(a, b, d, c) {
				void 0 === a && (a = this.x);
				void 0 === b && (b = this.y);
				void 0 === d && (d = this.width);
				void 0 === c && (c = this.height);
				this.log("StartPage MediaBox=[%s %s %s %s]", a, b, d, c);
				this.page = this.object("Page", {
					MediaBox: [a, b, a + d, b + c],
					Parent: this.ck._id + " 0 R",
				});
				this.ck.Kids.push(this.page._id + " 0 R");
				this.ck.Count += 1;
				this.un = {};
			};
			c.prototype.object = function(a, b) {
				var d = this.Uc.length + 1;
				a && (b.Type = a);
				b._id = d;
				this.Uc.push(b);
				return b;
			};
			c.prototype.yx = function(a) {
				this.page.Contents = a._id + " 0 R";
			};
			c.prototype.stream = function(a) {
				if (this.my) {
					var b = Hb.tg("LZWEncoder");
					b.Dw(a);
					b.flush();
					a = b.Rh().toString();
					a = this.object(null, {
						_stream: a,
						Filter: "[/LZWDecode]",
						DecodeParms: "[ << /EarlyChange 0 >> ]",
					});
				} else a = this.object(null, { _stream: a });
				return a;
			};
			c.prototype.dE = function(a) {
				if (!(a in this.fonts)) {
					var b = "F" + this.qc;
					this.qc += 1;
					var d = "/" + a.replace(/ /g, "");
					b = this.object("Font", {
						_name: b,
						BaseFont: d,
						Encoding: "/StandardEncoding",
						Subtype: "/Type1",
					});
					this.fonts[a] = b;
				}
				this.Ok("Font", this.fonts[a]);
				return "/" + this.fonts[a]._name;
			};
			c.prototype.zw = function(a, b) {
				var d = "" + a + "-" + b;
				if (!(d in this.un)) {
					var c = "gs" + this.qc;
					this.qc += 1;
					var f = this.object("ExtGState", { _name: c });
					b ? (f.ca = this.Zd(a)) : (f.CA = this.Zd(a));
					this.un[d] = c;
					this.Ok("ExtGState", f);
				}
				return this.un[d];
			};
			c.prototype.Ok = function(a, b) {
				"Resources" in this.page || (this.page.Resources = {});
				a in this.page.Resources || (this.page.Resources[a] = {});
				this.page.Resources[a][b._name] = b._id + " 0 R";
			};
			c.prototype.Un = function(a, b) {
				void 0 === b && (b = "");
				for (var d = 0; d < this.images.length; d++)
					if (this.images[d].Gj === a && b === this.images[d].lu)
						return this.images[d].$j;
				return null;
			};
			c.prototype.An = function(a, b) {
				var d,
					c = this.Un(a);
				if (!c) {
					var f = "I" + this.qc;
					this.qc += 1;
					b instanceof HTMLCanvasElement
						? (c = b)
						: ((c = document.createElement("canvas")),
						  (c.width = b.width),
						  (c.height = b.height),
						  c.getContext("2d").drawImage(b, 0, 0));
					b = c.getContext("2d").getImageData(0, 0, c.width, c.height);
					var h = !1;
					if (this.UA()) {
						this.log("Using JPEG encoding");
						var k = "[/DCTDecode]";
						var l = Hb.tg("");
						for (d = 0; d < b.data.length; d += 4) h = h || 255 > b.data[d + 3];
						d = c.toDataURL("image/jpeg");
						var n = atob(d.split(",")[1]);
						for (d = 0; d < n.length; d++) l.Fb(n.charCodeAt(d));
					} else {
						this.log("Using LZW encoding");
						k = "[/LZWDecode]";
						l = Hb.tg("LZWEncoder");
						for (d = 0; d < b.data.length; d += 4)
							l.Fb(b.data[d]),
								l.Fb(b.data[d + 1]),
								l.Fb(b.data[d + 2]),
								(h = h || 255 > b.data[d + 3]);
						var r = "[ <</EarlyChange 0 >> ]";
					}
					l.flush();
					l = l.Rh().toString();
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
						l = Hb.tg("LZWEncoder");
						for (d = 0; d < b.data.length; d += 4) l.Fb(b.data[d + 3]);
						l.flush();
						l = l.Rh().toString();
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
					this.images.push({ Gj: a, lu: "", $j: f });
					c = f;
				}
				this.Ok("XObject", c);
				return "/" + c._name;
			};
			c.prototype.Bn = function(a, b) {
				var d = xf(a.Qa),
					c = this.Un(d, b.toString());
				if (!c) {
					c = "P" + this.qc;
					this.qc += 1;
					this.An(d, a.Qa);
					d = this.Un(d);
					var f = new J(a.Qa.width, 0, 0, -a.Qa.height, 0, a.Qa.height);
					f = b.multiply(f);
					var h = "1",
						k = "1",
						l = b.Hb();
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
							"[ " + this.Zd(f.m11, f.m21, f.m12, f.m22, f.Ba, f.Ca) + "]",
						Resources:
							"<< /XObject << /" + d._name + " " + d._id + " 0 R >> >>",
					});
					c._stream = "/" + d._name + " Do";
					this.images.push({ Gj: a.Qa, lu: b.toString(), $j: c });
				}
				this.Ok("Pattern", c);
				return "/" + c._name;
			};
			c.prototype.lh = function() {
				var a = [],
					b = [],
					d;
				a.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
				for (d = 0; d < this.Uc.length; d++) this.ss(a, b, this.Uc[d], !1);
				var c = a.join("").length;
				a.push("xref\n0 " + (this.Uc.length + 1) + "\n");
				a.push("0000000000 65535 f\n");
				for (d = 0; d < this.Uc.length; d++) {
					for (var f = "" + b[d]; 10 > f.length; ) f = "0" + f;
					a.push(f + " 00000 n \n");
				}
				a.push("trailer\n");
				a.push("<< /Size " + (this.Uc.length + 1) + "\n");
				a.push("   /Root " + this.Wx._id + " 0 R\n");
				a.push(">>\n");
				a.push("startxref\n");
				a.push(c + "\n");
				a.push("%%EOF\n");
				return a.join("");
			};
			c.prototype.toBlob = function() {
				for (
					var a = this.lh(), b = new Uint8Array(a.length), d = 0;
					d < a.length;
					d++
				)
					b[d] = a.charCodeAt(d);
				return new Blob([b], { type: "application/pdf" });
			};
			c.prototype.ss = function(a, b, d, c) {
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
							? this.ss(a, b, h, !0)
							: a.push(h);
						a.push("\n");
					}
				c && a.push("    ");
				a.push(">>\n");
				"_stream" in d &&
					(a.push("stream\n"), a.push(d._stream + "\n"), a.push("endstream\n"));
				c || a.push("endobj\n");
			};
			c.prototype.fz = function(a) {
				return (
					"(" +
					a
						.replace(/\\/g, "\\\\")
						.replace(/\(/g, "\\(")
						.replace(/\)/g, "\\)") +
					")"
				);
			};
			c.prototype.Zd = function() {
				for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
				b = [];
				for (var d = 0; d < a.length; d++) {
					var c = "" + a[d];
					0 < c.indexOf("e") && (c = a[d].toFixed(20));
					b.push(c);
				}
				return b.join(" ");
			};
			c.Vn = null;
			return c;
		})(),
		zf = (function(c) {
			function a(a, d) {
				var b = c.call(this) || this;
				b.rz = d;
				b.path = [];
				b.x = 0;
				b.y = 0;
				b.ov = [];
				b.dh = "";
				b.jh = "";
				b.ih = -1;
				b.hh = "";
				b.gh = "";
				b.fh = "";
				b.eh = "";
				b.bh = -1;
				b.log = z.create("PDFContext");
				b.yf = a.clone();
				b.yf.transform(new sc(0.75, 0.75, 0, 0));
				b.Kb = new yf(
					(72 * a.x) / 96,
					(72 * a.y) / 96,
					(72 * a.width) / 96,
					(72 * a.height) / 96,
				);
				b.stream = [];
				b.x = 0;
				b.y = 0;
				b.fillStyle = q.Oa;
				b.strokeStyle = q.Oa;
				b.ps = b.jx;
				b.ns();
				return b;
			}
			__extends(a, c);
			a.prototype.save = function() {
				c.prototype.save.call(this);
				this.stream.push("q");
				this.ov.push({
					dh: this.dh,
					jh: this.jh,
					ih: this.ih,
					hh: this.hh,
					gh: this.gh,
					fh: this.fh,
					eh: this.eh,
					bh: this.bh,
				});
			};
			a.prototype.restore = function() {
				c.prototype.restore.call(this);
				var a = this.ov.pop();
				a &&
					(this.stream.push("Q"),
					(this.dh = a.dh),
					(this.jh = a.jh),
					(this.ih = a.ih),
					(this.hh = a.hh),
					(this.gh = a.gh),
					(this.fh = a.fh),
					(this.eh = a.eh),
					(this.bh = a.bh));
			};
			a.prototype.Ai = function(a) {
				var b = new sc(0.75, 0.75, 0, 0);
				a && ((this.yf = a.clone()), this.yf.transform(b));
				this.No();
				this.Kb.Ai(this.yf.x, this.yf.y, this.yf.width, this.yf.height);
				this.ns();
				this.beginPath();
			};
			a.prototype.beginPath = function() {
				this.path.length = 0;
			};
			a.prototype.ns = function() {
				this.log("Start page: %s", this.yf);
				this.setTransform(1, 0, 0, 1, 0, 0);
				this.jh = this.dh = "";
				this.ih = -1;
				this.eh = this.fh = this.gh = this.hh = "";
				this.bh = -1;
			};
			a.prototype.No = function() {
				this.stream.length &&
					this.Kb.yx(this.Kb.stream(this.stream.join("\n")));
				this.stream.length = 0;
			};
			a.prototype.sw = function() {
				this.No();
				for (
					var a = this.Kb.lh(), d = new Uint8Array(a.length), c = 0;
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
				this.No();
				return this.Kb.toBlob();
			};
			a.prototype.setTransform = function(a, d, c, f, h, k) {
				var b = this.yf.Sd();
				this.ua = new J(a, c, d, f, h, k)
					.multiply(new tc(0, b.x, b.y))
					.multiply(new sc(0.75, 0.75, 0, 0));
			};
			a.prototype.closePath = function() {
				this.path.push("h");
			};
			a.prototype.fill = function() {
				this.Wn();
				for (var a = 0; a < this.path.length; a++)
					this.stream.push(this.path[a]);
				this.stream.push("f");
			};
			a.prototype.stroke = function() {
				this.Xn();
				for (var a = 0; a < this.path.length; a++)
					this.stream.push(this.path[a]);
				this.stream.push("S");
			};
			a.prototype.moveTo = function(a, d) {
				var b = this.ua.apply(a, d);
				this.path.push(this.Kb.Zd(b.x, b.y) + " m");
				this.x = a;
				this.y = d;
			};
			a.prototype.lineTo = function(a, d) {
				var b = this.ua.apply(a, d);
				this.path.push(this.Kb.Zd(b.x, b.y) + " l");
				this.x = a;
				this.y = d;
			};
			a.prototype.bezierCurveTo = function(a, d, c, f, h, k) {
				a = this.ua.apply(a, d);
				c = this.ua.apply(c, f);
				f = this.ua.apply(h, k);
				this.path.push(this.Kb.Zd(a.x, a.y, c.x, c.y, f.x, f.y) + " c");
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
					f,
				);
			};
			a.prototype.fillText = function(a, d, c) {
				this.ps(a, d, c, 0);
			};
			a.prototype.strokeText = function(a, d, c) {
				this.ps(a, d, c, 1);
			};
			a.prototype.measureText = function(a) {
				var b = document.createElement("canvas").getContext("2d");
				b.font = this.font;
				return b.measureText(a);
			};
			a.prototype.Wn = function() {
				if (this.dh !== this.fillStyle) {
					if (this.fillStyle instanceof Nd) {
						var a = this.Kb.Bn(this.fillStyle, this.ua);
						this.stream.push("/Pattern cs");
						this.stream.push(a + " scn");
					} else
						"string" === typeof this.fillStyle &&
							((a = q.hf(this.fillStyle).Mh(q.RGBA)),
							this.stream.push(
								this.Kb.Zd(a.values[0], a.values[1], a.values[2]) + " rg",
							),
							(a = this.Kb.zw(a.values[3], !0)),
							this.stream.push("/" + a + " gs"));
					this.dh = this.fillStyle;
				}
			};
			a.prototype.Xn = function() {
				function a(a) {
					return "bevel" === a ? 2 : "round" === a ? 1 : 0;
				}
				function d(a) {
					return "butt" === a ? 0 : "round" === a ? 1 : 2;
				}
				if (this.jh !== this.strokeStyle) {
					if (this.strokeStyle instanceof Nd) {
						var c = this.Kb.Bn(this.strokeStyle, this.ua);
						this.stream.push("/Pattern CS");
						this.stream.push(c + " SCN");
					} else
						"string" === typeof this.strokeStyle &&
							((c = q.hf(this.strokeStyle).Mh(q.RGBA)),
							this.stream.push(
								this.Kb.Zd(c.values[0], c.values[1], c.values[2]) + " RG",
							),
							(c = this.Kb.zw(c.values[3], !1)),
							this.stream.push("/" + c + " gs"));
					this.jh = this.strokeStyle;
				}
				this.ih !== this.lineWidth &&
					((this.ih = this.lineWidth),
					this.stream.push(this.Kb.Zd((72 * this.lineWidth) / 96) + " w"));
				this.hh !== this.lineJoin &&
					((this.hh = this.lineJoin),
					this.stream.push(a(this.lineJoin) + " j"));
				this.gh !== this.lineCap &&
					((this.gh = this.lineCap), this.stream.push(d(this.lineCap) + " J"));
			};
			a.prototype.kx = function(a, d, c, f) {
				var b = this.Xk(this.font);
				if (this.fh !== b.fontSize || this.eh !== b.fontFamily) {
					var e = this.Kb.dE(b.fontFamily);
					this.stream.push(
						e + " " + this.Kb.Zd(parseFloat(b.fontSize)) + " Tf",
					);
					this.fh = b.fontSize;
					this.eh = b.fontFamily;
				}
				this.bh !== f && (this.stream.push(f + " Tr"), (this.bh = f));
				0 === f ? this.Wn() : this.Xn();
				this.stream.push("BT");
				d = this.ua.multiply(new J(1, 0, 0, -1, d, c));
				this.stream.push(
					this.Kb.Zd(d.m11, d.m21, d.m12, d.m22, d.Ba, d.Ca) + " Tm",
				);
				this.stream.push(this.Kb.fz(a) + " Tj");
				this.stream.push("ET");
			};
			a.prototype.jx = function(a, d, c, f) {
				var b = this.Xk(this.font),
					e = this.rz.get(b.fontFamily);
				e
					? (0 === f ? this.Wn() : this.Xn(),
					  this.beginPath(),
					  e.Zy(this, a, d, c, parseFloat(b.fontSize)),
					  0 === f ? this.fill() : this.stroke())
					: this.kx(a, d, c, f);
			};
			a.prototype.Xk = function(a) {
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
			a.prototype.cs = function(a, d, c, f, h, k, l, n, r) {
				this.log(
					"DrawImage(%s, %s, %s, %s, %s, %s, %s %s)",
					d,
					c,
					f,
					h,
					k,
					l,
					n,
					r,
				);
				l += r;
				var b = document.createElement("canvas"),
					e = b.getContext("2d");
				b.width = f;
				b.height = h;
				e.drawImage(a, -d, -c);
				a = xf(a, d, c, f, h);
				b = this.Kb.An(a, b);
				this.stream.push("q");
				k = this.ua.multiply(new J(n, 0, 0, -r, k, l));
				this.stream.push(
					this.Kb.Zd(k.m11, k.m21, k.m12, k.m22, k.Ba, k.Ca) + " cm",
				);
				this.stream.push(b + " Do");
				this.stream.push("Q");
			};
			a.prototype.lh = function() {
				return this.Kb.lh();
			};
			a.prototype.gs = function() {
				return {};
			};
			a.prototype.ms = function() {};
			a.prototype.clip = function() {
				for (var a = 0; a < this.path.length; a++)
					this.stream.push(this.path[a]);
				this.stream.push("W");
				this.stream.push("n");
				this.path.length = 0;
			};
			return a;
		})(Rd);
	function xf(c) {
		for (var a = [], b = 1; b < arguments.length; b++) a[b - 1] = arguments[b];
		return c instanceof HTMLCanvasElement
			? a.join("-") + c.toDataURL()
			: a.join("-") + c.src;
	}
	var Af = (function() {
		function c(a, b, d) {
			void 0 === d && (d = "");
			this.name = a;
			this.attributes = b;
			this.text = d;
			this.children = [];
		}
		c.prototype.toString = function() {
			var a = [];
			this.rs(a, "");
			return a.join("");
		};
		c.prototype.rs = function(a, b) {
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
							a.push(this.ds("" + this.attributes[d])),
							a.push('"')));
				if (this.children.length || "" !== this.text) {
					a.push(">\n");
					for (d = 0; d < this.children.length; d++)
						this.children[d].rs(a, b + "  ");
					"" !== this.text && a.push(b + "  " + this.ds(this.text));
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
		c.prototype.nk = function(a) {
			for (var b in a) a.hasOwnProperty(b) && (this.attributes[b] = a[b]);
		};
		c.prototype.yd = function(a) {
			this.children.push(a);
		};
		c.prototype.ds = function(a) {
			return ("" + a)
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
		};
		return c;
	})();
	var Bf = (function() {
			function c() {
				this.fa = [];
			}
			c.prototype.lineTo = function(a, b, d) {
				this.fa.push({ Vi: "L", mi: a.apply(b, d) });
			};
			c.prototype.moveTo = function(a, b, d) {
				this.fa.push({ Vi: "M", mi: a.apply(b, d) });
			};
			c.prototype.quadraticCurveTo = function(a, b, d, c, f) {
				this.fa.push({ Vi: "Q", mi: a.apply(b, d), Lm: a.apply(c, f) });
			};
			c.prototype.bezierCurveTo = function(a, b, d, c, f, h, k) {
				this.fa.push({
					Vi: "C",
					mi: a.apply(b, d),
					Lm: a.apply(c, f),
					lq: a.apply(h, k),
				});
			};
			c.prototype.closePath = function() {
				this.fa.push({ Vi: "Z" });
			};
			c.prototype.nr = function(a) {
				a = a.inverse();
				for (var b = "", d = 0; d < this.fa.length; d++) {
					var c = this.fa[d];
					0 < d && (b += " ");
					b += c.Vi;
					if (c.mi) {
						var f = a.apply(c.mi.x, c.mi.y);
						b += f.x + "," + f.y;
						c.Lm &&
							((f = a.apply(c.Lm.x, c.Lm.y)),
							(b += "," + f.x + "," + f.y),
							c.lq &&
								((c = a.apply(c.lq.x, c.lq.y)), (b += "," + c.x + "," + c.y)));
					}
				}
				return b;
			};
			return c;
		})(),
		Cf = (function(c) {
			function a(a) {
				var b = c.call(this) || this;
				b.ua = new J();
				b.fa = [];
				b.path = new Bf();
				b.Ag = "";
				b.Uc = [];
				b.qc = 0;
				b.log = z.create("SvgContext");
				b.Ki = 1;
				b.Dh = 2;
				b.On = 4;
				b.log("SVG context rect: %s", a);
				b.root = new Af("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink",
					"xmlns:zwibbler": "http://zwibbler.com/xml",
					version: 1.2,
					baseProfile: "tiny",
					width: a.width,
					height: a.height,
					viewBox: a.x + " " + a.y + " " + a.width + " " + a.height,
				});
				b.yl = new Af("defs", {});
				b.root.yd(b.yl);
				b.groups = [b.root];
				return b;
			}
			__extends(a, c);
			a.prototype.gB = function() {
				return "clip" + this.qc++;
			};
			a.prototype.gk = function(a) {
				a = new Af("g", a || {});
				this.Co().yd(a);
				this.groups.push(a);
			};
			a.prototype.fk = function() {
				var a = this.groups.pop();
				if (a && 1 === a.children.length) {
					var d = a.children[0];
					d.nk(a.attributes);
					a.name = d.name;
					a.attributes = d.attributes;
					a.children = d.children;
					a.text = d.text;
				}
			};
			a.prototype.Co = function() {
				return this.groups[this.groups.length - 1];
			};
			a.prototype.node = function(a, d, c, f) {
				function b(a, b) {
					if (b instanceof Nd) c[a] = "url(#" + e.Bn(b) + ")";
					else if ("string" === typeof b) {
						b = q.hf(b);
						var d = b.values[3];
						1 > d && ((b.values[3] = 1), (c[a + "-opacity"] = "" + d));
						c[a] = b.toString();
					}
				}
				void 0 === c && (c = {});
				var e = this;
				this.ua.uu() ||
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
						this.ua.Ba +
						" " +
						this.ua.Ca +
						")");
				d & this.Ki ? b("fill", this.fillStyle) : (c.fill = "none");
				d & this.Dh &&
					(b("stroke", this.strokeStyle),
					(c["stroke-width"] = this.lineWidth),
					"miter" !== this.lineJoin && (c["stroke-linejoin"] = this.lineJoin),
					"butt" !== this.lineCap && (c["stroke-linecap"] = this.lineCap));
				d & this.On &&
					((d = this.Xk(this.font)),
					(c["font-weight"] = d.fontWeight),
					(c["font-size"] = parseFloat(d.fontSize)),
					(c["font-style"] = d.fontStyle),
					(c["font-family"] = d.fontFamily));
				"" !== this.Ag && (c["clip-path"] = "url(#" + this.Ag + ")");
				this.ux(new Af(a, c, f));
			};
			a.prototype.ux = function(a) {
				var b = !0,
					c = null,
					f = {},
					h,
					k = this.Co();
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
				b && c ? c.nk(f) : k.yd(a);
			};
			a.prototype.qm = function(a) {
				if (a === this.Dh) {
					if (0 === this.lineWidth) return !1;
					a = this.strokeStyle;
				} else a = this.fillStyle;
				return a instanceof Nd
					? !0
					: "string" === typeof a
					? 0 < q.hf(a).values[3]
					: !1;
			};
			a.prototype.es = function(a) {
				for (var b = 0; b < this.Uc.length; b++)
					if (this.Uc[b].Gj === a) return this.Uc[b].$j;
				return null;
			};
			a.prototype.An = function(a) {
				var b = this.es(a);
				if (b) return b;
				b = "image" + this.Uc.length;
				this.Uc.push({ Gj: a, $j: b });
				var c = document.createElement("canvas"),
					f = c.getContext("2d");
				c.width = a.width;
				c.height = a.height;
				f.drawImage(a, 0, 0);
				c = c.toDataURL();
				a = new Af("image", {
					id: b,
					x: 0,
					y: 0,
					width: a.width,
					height: a.height,
					"xlink:href": c,
				});
				this.yl.yd(a);
				return b;
			};
			a.prototype.Bn = function(a) {
				var b = this.es(a);
				if (b) return b;
				var c = this.An(a.Qa);
				b = "pattern" + this.Uc.length;
				this.Uc.push({ Gj: a, $j: b });
				var f = new Af("pattern", { id: b });
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
				f.yd(new Af("use", { "xlink:href": "#" + c }));
				this.yl.yd(f);
				return b;
			};
			a.prototype.toString = function() {
				return (
					'<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString()
				);
			};
			a.prototype.sw = function() {
				return Ta(this.toString());
			};
			a.prototype.toBlob = function() {
				return new Blob([Ta(this.toString())], { type: "image/svg+xml" });
			};
			a.prototype.beginPath = function() {
				this.path = new Bf();
			};
			a.prototype.transform = function(a, d, c, f, h, k) {
				a = new J(a, c, d, f, h, k);
				this.ua = this.ua.multiply(a);
			};
			a.prototype.closePath = function() {
				this.path.closePath();
			};
			a.prototype.fill = function() {
				this.qm(this.Ki) &&
					this.node("path", this.Ki, { d: this.path.nr(this.ua) });
			};
			a.prototype.stroke = function() {
				this.qm(this.Dh) &&
					this.node("path", this.Dh, { d: this.path.nr(this.ua) });
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
				this.qm(this.Ki) &&
					this.node("text", this.Ki | this.On, { x: d, y: c }, a);
			};
			a.prototype.strokeText = function(a, d, c) {
				this.qm(this.Dh) &&
					this.node("text", this.Dh | this.On, { x: d, y: c }, a);
			};
			a.prototype.cs = function(a, d, c, f, h, k, l, n, r) {
				var b = document.createElement("canvas"),
					e = b.getContext("2d");
				b.width = f;
				b.height = h;
				e.drawImage(a, -d, -c);
				a = b.toDataURL();
				this.Co().yd(
					new Af("image", {
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
							this.ua.Ba +
							" " +
							this.ua.Ca +
							")",
						x: k,
						y: l,
						width: n,
						height: r,
						"xlink:href": a,
					}),
				);
			};
			a.prototype.measureText = function(a) {
				var b = document.createElement("canvas").getContext("2d");
				b.font = this.font;
				return b.measureText(a);
			};
			a.prototype.Ai = function() {};
			a.prototype.gs = function() {
				return { name: this.Ag };
			};
			a.prototype.ms = function(a) {
				this.Ag = a ? a.name : "";
			};
			a.prototype.clip = function() {
				var a = this.gB(),
					d = new Af("clipPath", { id: a });
				d.yd(new Af("path", { d: this.path.nr(this.ua) }));
				this.yl.yd(d);
				this.Ag = a;
				this.path = new Bf();
			};
			return a;
		})(Rd);
	function Df(c, a) {
		function b(b) {
			d && clearTimeout(d);
			d = setTimeout(
				function() {
					d = null;
					a();
				},
				arguments.length ? b : c,
			);
		}
		var d = null;
		b.cancel = function() {
			d && (clearTimeout(d), (d = null));
		};
		return b;
	}
	var Ef = (function() {
		function c(a, b, d) {
			var c = this;
			this.view = a;
			this.options = b;
			this.mode = d;
			this.gg = {};
			this.log = z.create("Brush");
			this.view.rb(!0);
			this.Iv = function() {
				return c.Id();
			};
			this.Bc = new Ge(this.view);
		}
		c.prototype.Id = function() {
			this.Xp(this.Ce() / 2);
		};
		c.prototype.vb = function(a) {
			a = this.Bc.vb(a);
			this.Bc.active && this.reset();
			return a;
		};
		c.prototype.Ad = function() {
			this.view.Jb("crosshair");
			this.Xp(this.Ce() / 2);
			window.addEventListener("resize", this.Iv);
		};
		c.prototype.Ac = function() {
			this.view.Jb("default");
			this.view.so("brush");
			window.removeEventListener("resize", this.Iv);
		};
		c.prototype.reset = function() {
			this.gg = {};
		};
		c.prototype.Xp = function(a) {
			var b = document.createElement("canvas");
			a *= this.view.scale * this.view.Ot();
			a = Math.ceil(a + 1);
			b.width = 2 * a + 2;
			b.height = 2 * a + 2;
			var d = b.getContext("2d");
			d.beginPath();
			"round" === (this.options.lineCap || "round")
				? d.arc(a + 1, a + 1, a, 0, 2 * Math.PI)
				: d.rect(1, 1, 2 * a - 2, 2 * a - 2);
			d.lineWidth = 2;
			d.strokeStyle = q.Zc;
			d.stroke();
			d.lineWidth = 1;
			d.strokeStyle = q.Oa;
			d.stroke();
			b = b.toDataURL();
			this.view.Jb("url(" + b + ") " + (a + 1) + " " + (a + 1) + ", auto");
		};
		c.prototype.xi = function(a) {
			this.options.strokeStyle = a;
		};
		c.prototype.Ce = function() {
			var a = this.options.lineWidth;
			this.view.ha.get("adaptiveBrushWidth") && (a /= this.view.scale);
			return a;
		};
		c.prototype.cn = function(a) {
			this.options.lineWidth = a;
			this.Xp(this.Ce() / 2);
		};
		c.prototype.wb = function(a, b, d) {
			if (this.Bc.active) return !0;
			if (d.target instanceof HTMLElement && d.target.matches("[z-fixture] *"))
				return this.view.yb(), this.view.ra.wb && this.view.ra.wb(a, b, d), !0;
			var c =
				"freehand" === this.mode || "brush" === this.mode ? new Mc() : new Kc();
			c.wg(a, b);
			this.gg[d.pointerId] = c;
			return !0;
		};
		c.prototype.ev = function(a) {
			a.save();
			var b = this.view.Ss(a);
			a.lineCap = this.options.lineCap || "round";
			a.lineJoin = "round" === a.lineCap ? "round" : "bevel";
			a.lineWidth = this.Ce();
			var d = a.globalAlpha;
			"opacity" in this.options && (a.globalAlpha = this.options.opacity);
			cd(this.options.shadow, a);
			var c = Cc(this.options.dashes || "");
			a.beginPath();
			for (var f in this.gg) Dc(a, this.gg[f].tp(), c);
			ic(a, this.options.strokeStyle);
			b && a.restore();
			a.globalAlpha = d;
			a.restore();
		};
		c.prototype.Cb = function(a, b, d) {
			var c = this;
			d.pointerId in this.gg &&
				(this.gg[d.pointerId].wg(a, b),
				"erase" === this.options.strokeStyle
					? this.view.la(function(a) {
							return c.ev(a);
					  })
					: this.view.Bv("brush", function(a) {
							return c.ev(a);
					  }));
			return !0;
		};
		c.prototype.Wb = function(a, b, d) {
			this.Cb(a, b, d);
			this.view.so("brush");
			this.wa();
			return !0;
		};
		c.prototype.wa = function() {
			var a, b;
			this.view.aa.ab();
			var d = "";
			for (var c in this.gg) {
				var f = Ac(this.gg[c].tp(), 0.5);
				if ("brush" === this.mode || "freehand" === this.mode) {
					var h = [];
					1 === f.length && f.push(new F(f[0].x + 0.1, f[0].y + 0.1));
					if (1 < f.length) {
						d = a = 0;
						for (b = f.length - 1; a <= b; d = a += 1)
							h.push(f[d].x), h.push(f[d].y);
						d = this.view.aa.createNode(
							"BrushNode",
							jc({ points: h, layer: this.view.ad }, this.options, {
								lineWidth: this.Ce(),
							}),
						);
					}
				} else {
					if ("shapebrush" === this.mode) {
						f = Ac(f, 20);
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
							n = G.xh(l).Sd();
							for (b = 0; b < l.length; b++)
								(k = l[b]),
									20 > Math.abs(k.x - n.x) && (k.x = n.x),
									20 > Math.abs(k.y - n.y) && (k.y = n.y);
							h && ((a.x = f.x), (a.y = f.y));
						}
						f = l;
					} else if ("quadratic" === this.mode) {
						f = Ac(f, 10);
						a = Dd(f);
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
						h = N.Lw(d);
						d = this.view.aa.createNode(
							"PathNode",
							jc(
								{
									commands: h,
									fillStyle: this.view.vc,
									sloppiness: 0,
									layer: this.view.ad,
								},
								this.options,
								{ lineWidth: this.Ce() },
							),
						);
						continue;
					}
					1 === f.length &&
						"freehand" === this.mode &&
						f.push(new F(f[0].x + 0.1, f[0].y + 0.1));
					if (1 < f.length) {
						h = new O();
						h.moveTo(f[0].x, f[0].y);
						a = f[0].dd(f[f.length - 1]);
						d = b = 1;
						for (l = f.length - 1; b <= l; d = b += 1) h.lineTo(f[d].x, f[d].y);
						a && h.close();
						d = this.view.aa.createNode(
							"PathNode",
							jc(
								{
									commands: h.rc(),
									fillStyle: this.view.vc,
									sloppiness: 0,
									lockEditMode: "shapebrush" !== this.mode,
									layer: this.view.ad,
								},
								this.options,
								{ lineWidth: this.Ce() },
							),
						);
					}
				}
			}
			this.view.aa.wa();
			this.view.rb();
			c = this.view.aa.Gb(d);
			this.view.ha.get("singleStrokeBrush")
				? (c && this.view.Ye(c), this.view.yb())
				: this.reset();
			this.view.mc();
		};
		c.prototype.me = function(a, b) {
			this.options.strokeStyle = a;
			b
				? ((this.view.vc = a), (this.view.lc = a), (b = "fillStyle"))
				: ((this.view.bd = a), (b = "strokeStyle"));
			this.view.setProperty(b, a);
		};
		c.prototype.eg = function(a) {
			this.view.lc = fc(this.view.lc, a);
			this.options.strokeStyle = fc(this.options.strokeStyle, a);
			this.view.vc = this.view.lc;
		};
		c.prototype.ne = function(a) {
			this.log("keyboard: %s", a);
			switch (a) {
				case "cancel":
					this.log("ESC pressed. Abort brush and go back to toolbar.");
					this.view.yb();
					this.view.Rc.ta("goto-toolbar");
					break;
				case "undo":
					this.view.Wc();
					break;
				case "redo":
					this.view.qe();
			}
		};
		c.prototype.xf = function(a, b) {
			"defaultBrushWidth" === a
				? this.cn(b)
				: "defaultBrushColour" === a && this.xi(b);
		};
		c.prototype.kd = function(a, b) {
			switch (a) {
				case "lineWidth":
					this.cn(b);
					break;
				case "strokeStyle":
				case "fillStyle":
					this.xi(b);
					break;
				case "dashes":
				case "shadow":
				case "opacity":
					this.options[a] = b;
			}
		};
		c.prototype.Bd = function() {
			return "circle" === this.mode ? "ellipse" : this.mode;
		};
		c.prototype.Qg = function() {
			return jc({ dashes: "" }, this.options);
		};
		c.prototype.xp = function() {
			return ["BrushNode"];
		};
		return c;
	})();
	var Ff = (function() {
		function c(a, b, d, c, f, h) {
			void 0 === d && (d = {});
			void 0 === c && (c = !1);
			void 0 === f && (f = !1);
			void 0 === h && (h = !1);
			this.view = a;
			this.type = b;
			this.ba = d;
			this.Xq = c;
			this.py = f;
			this.open = h;
			this.node = null;
			this.To = new F(0, 0);
			this.um = new F(0, 0);
			this.index = 0;
			this.state = "start";
			this.log = z.create("DRAWLINES");
			"wrap" in this.ba || (this.ba.wrap = this.view.ha.get("multilineText"));
			"fontSize" in this.ba ||
				(this.ba.fontSize = this.view.ha.get("defaultFontSize"));
			"fontName" in this.ba ||
				(this.ba.fontName = this.view.ha.get("defaultFont"));
			this.Bc = new Ge(this.view);
			this.view.rb(!0);
		}
		c.prototype.Ad = function() {
			this.log("Entering DrawLinesBehaviour");
			this.view.Jb("crosshair");
			this.view.ha.Fi() || this.view.bn("click-to-place-first-point-of-line");
			this.view.la();
		};
		c.prototype.reset = function() {
			this.Ad();
		};
		c.prototype.vb = function(a) {
			a = this.Bc.vb(a);
			this.Bc.active && this.node && this.reset();
			return a;
		};
		c.prototype.ne = function(a) {
			"cancel" === a &&
				(null !== this.node &&
					this.view.Ra.Mb &&
					"curve" === this.type &&
					this.wa(),
				null !== this.node &&
					(this.view.aa.ab(),
					this.view.aa.ac([this.node.id]),
					this.view.aa.wa(!0)),
				this.view.Ra.Mb ? this.view.Rc.ta("goto-toolbar") : this.view.yb());
		};
		c.prototype.done = function() {
			this.view.Ux();
			this.view.ha.get("autoPickTool")
				? this.view.yb()
				: (this.state = "start");
		};
		c.prototype.wg = function(a, b) {
			this.node instanceof N &&
				("curve" === this.type ||
				"arrow" === this.type ||
				"linear-bezier" === this.type
					? this.node.aj(a, b)
					: this.node.lineTo(a, b));
		};
		c.prototype.wb = function(a, b, d) {
			d = this.view.ob(new F(a, b), d);
			this.log(
				"onMouseDown(%s, %s) state=%s, index=%s",
				a,
				b,
				this.state,
				this.index,
			);
			if ("start" === this.state) {
				this.To = d;
				a = {
					seed: Math.round(65535 * Math.random()),
					strokeStyle: this.view.bd,
					lineWidth: this.Ce(),
					sloppiness: this.view.sa.sloppiness,
					smoothness: this.view.sa.smoothness,
				};
				"arrow" === this.type &&
					((a.arrowSize = this.view.ha.fb("defaultArrowSize")),
					(a.arrowStyle = this.view.ha.fb("defaultArrowStyle")),
					(a.arrowXOffset = this.view.ha.fb("defaultArrowXOffset")),
					(a.doubleArrow = this.view.sa.doubleArrow || !1));
				for (var c in this.ba) this.ba.hasOwnProperty(c) && (a[c] = this.ba[c]);
				this.view.aa.ab();
				c = this.view.aa.createNode("PathNode", a);
				this.view.aa.wa(!0);
				this.node = this.view.aa.Gb(c);
				this.node.moveTo(d.x, d.y);
				this.wg(d.x, d.y);
				this.index = 3;
				this.view.update();
				this.state = "predrag";
			} else if ("placing" === this.state)
				if (
					((c = this.um.bc(d)),
					this.log("Mouse moved by %s", c),
					"arrow" !== this.type && 8 > this.To.bc(d) && 3 < this.index)
				)
					this.log("Clicked close to start; automatically closing path"),
						this.node instanceof N && !this.open && this.node.close(),
						this.wa(),
						this.done();
				else if (8 > this.um.bc(d))
					this.log("Didn't move. Stop drawing."), this.Vs(), this.done();
				else {
					if (this.Xq) return this.wa(), this.done(), !0;
					this.node &&
						(this.wg(d.x, d.y),
						(this.index += 3),
						this.view.aa.bg(this.node.id),
						this.view.update());
				}
			else return this.log("Invalid state %s", this.state), !0;
			this.um = new F(d.x, d.y);
			return !0;
		};
		c.prototype.Vs = function() {
			3 < this.index
				? (this.node instanceof N && this.node.rC(this.index), this.wa())
				: this.cancel();
		};
		c.prototype.Wb = function(a, b) {
			var d = new F(a, b);
			d = this.To.bc(d);
			this.log("onMouseUp (%s,%s) %s", a, b, this.state);
			"predrag" === this.state &&
				(this.log("MovedBy: %s", d),
				10 < d
					? (this.wa(), this.done())
					: ((this.state = "placing"),
					  this.view.bn(
							"click-to-place-another-point-or-double-click-to-end-the-line",
					  )));
			return !0;
		};
		c.prototype.Cb = function(a, b, d) {
			b = this.view.ob(new F(a, b), d);
			a = b.x;
			b = b.y;
			if (d.ctrlKey || this.py) {
				d = this.um;
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
				(this.node.Xb(this.node.Le(this.index, a, b)),
				this.node.format(this.view.ma, this.view.request),
				this.view.la());
			return !1;
		};
		c.prototype.sy = function(a) {
			for (var b = 0, d = [], c, f, h, k, l, n; b < a.length; ) {
				var r = a[b];
				switch (r) {
					case N.zh:
						h = a[b + 1];
						k = a[b + 2];
						d.push(r, h, k);
						break;
					case N.Ue:
						(c = a[b + 1]),
							(f = a[b + 2]),
							void 0 !== h &&
								void 0 !== k &&
								void 0 !== l &&
								void 0 !== n &&
								d.push(
									N.Kk,
									c,
									f,
									(l + h) / 2,
									(n + k) / 2,
									(h + c) / 2,
									(k + f) / 2,
								),
							(l = h),
							(n = k),
							(h = c),
							(k = f);
				}
				b += N.mb[r] + 1;
			}
			return d;
		};
		c.prototype.wa = function() {
			var a = this;
			if (this.node) {
				this.node instanceof N && !this.open && this.node.Kx();
				this.view.aa.ab();
				this.view.aa.ac([this.node.id]);
				this.view.aa.wa(!0);
				var b = this.node.ia("commands");
				"linear-bezier" === this.type && (b = this.sy(b));
				var d = this.Qg();
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
				(this.view.aa.ab(),
				this.view.aa.ac([this.node.id]),
				this.view.aa.wa(!0),
				(this.node = null));
		};
		c.prototype.Ac = function() {
			this.Vs();
			this.view.Jb("default");
			this.view.bn("");
			this.view.la();
		};
		c.prototype.me = function(a, b) {
			this.ba.strokeStyle = a;
			b
				? ((this.view.vc = a),
				  (this.view.lc = a),
				  (b = "fillStyle"),
				  this.log(
						"We are drawing lines. Set strokeStyle instead of fillStyle",
				  ))
				: ((this.view.bd = a), (b = "strokeStyle"));
			this.view.setProperty(b, a);
		};
		c.prototype.eg = function(a, b) {
			b
				? ((this.view.vc = fc(this.view.vc, a)),
				  (this.view.lc = fc(this.view.lc, a)))
				: (this.view.bd = fc(this.view.bd, a));
			this.view.Uq(a, b);
		};
		c.prototype.Bd = function() {
			return this.type;
		};
		c.prototype.Qg = function() {
			var a = this.view.ha.fb("defaultArrowSize");
			a = {
				arrowSize: "arrow" === this.type ? a : 0,
				arrowStyle: this.view.ha.fb("defaultArrowStyle"),
				arrowXOffset: this.view.ha.fb("defaultArrowXOffset"),
				fillStyle: this.view.vc,
				strokeStyle: this.view.bd,
				lineWidth: this.Ce(),
				dashes: "",
				sloppiness: this.view.sa.sloppiness,
				smoothness: this.view.sa.smoothness,
				layer: this.view.ad,
			};
			a.doubleArrow =
				"doubleArrow" in this.ba
					? this.ba.doubleArrow
					: this.view.sa.doubleArrow || !1;
			for (var b in this.ba) this.ba.hasOwnProperty(b) && (a[b] = this.ba[b]);
			this.open && (delete a.fontName, delete a.fontSize);
			return a;
		};
		c.prototype.kd = function(a, b) {
			"doubleArrow" === a && (b = kc(!0, b));
			this.ba[a] = b;
			switch (a) {
				case "doubleArrow":
					this.view.sa[a] = b;
			}
		};
		c.prototype.Ce = function() {
			return this.view.eo(this.view.sa.lineWidth);
		};
		return c;
	})();
	var Hf = (function() {
		function c(a, b, d, c, f, h, k, l) {
			var e = this;
			this.view = a;
			this.nodeType = b;
			this.ba = d;
			this.width = c;
			this.height = f;
			this.Pv = h;
			this.PD = k;
			this.state = "initial";
			this.start = new F(0, 0);
			this.end = new F(0, 0);
			this.node = null;
			this.log = z.create("DrawShape");
			this.view.Pe(!0);
			"rectangle-tl" === h &&
				(this.lt = function(a) {
					a.lineWidth = 1 / e.view.scale;
					a.strokeStyle = "#ccc";
					a.beginPath();
					a.rect(
						e.start.x,
						e.start.y,
						e.end.x - e.start.x,
						e.end.y - e.start.y,
					);
					a.stroke();
				});
			this.Ns = null === l ? this.view.ha.get("autoPickTool") : l;
			this.Bc = new Ge(this.view);
			this.view.rb(!0);
		}
		c.prototype.lt = function() {};
		c.prototype.Ad = function() {
			this.log("Entering DrawShapeBehaviour");
			this.view.Jb("crosshair");
		};
		c.prototype.Ac = function() {
			this.log("Leaving DrawShapeBehaviour");
			this.cancel();
			this.view.Pe(!1);
		};
		c.prototype.cancel = function() {
			this.node &&
				(this.view.aa.ab(),
				this.view.aa.ac([this.node.id]),
				this.view.aa.wa(!0),
				this.view.update(),
				(this.node = null));
			this.state = "initial";
		};
		c.prototype.vb = function(a) {
			a = this.Bc.vb(a);
			this.node &&
				this.Bc.active &&
				(this.view.aa.ab(),
				this.view.aa.ac([this.node.id]),
				this.view.aa.wa(!0),
				(this.node = null),
				(this.state = "initial"));
			return a;
		};
		c.prototype.ne = function(a) {
			"cancel" === a && this.view.yb();
		};
		c.prototype.wb = function(a, b, d) {
			"initial" === this.state &&
				((this.start = this.view.ob(new F(a, b), d)),
				(this.state = "predraw"),
				this.log("initial -> predraw"));
			return !0;
		};
		c.prototype.Cb = function(a, b, d) {
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
				this.view.update(!1, this.lt));
			return !0;
		};
		c.prototype.Wb = function(a, b, d) {
			"predraw" === this.state
				? this.view.ha.get("clickToDrawShapes")
					? (this.create(),
					  this.transform(this.start, null, d.ctrlKey),
					  this.wa(),
					  this.Ns && this.view.yb(),
					  (this.state = "initial"))
					: this.cancel()
				: "drawing" === this.state &&
				  (this.transform(this.start, this.view.ob(new F(a, b), d), d.ctrlKey),
				  this.wa(),
				  this.Ns && this.view.yb(),
				  (this.state = "initial"));
			return !0;
		};
		c.prototype.create = function() {
			this.view.aa.ab();
			var a = this.view.aa.createNode(this.nodeType, this.ba);
			this.node = this.view.aa.Gb(a);
			this.view.aa.wa(!0);
		};
		c.prototype.transform = function(a, b, d) {
			if (b)
				if ("circle" === this.Pv) {
					var c = a;
					a = a.bc(b);
					var f = (2 * a) / this.width;
					a = (2 * a) / this.height;
				} else {
					if ("rectangle-tl" === this.Pv)
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
			d = new qc(c.x, c.y);
			d = d.multiply(new sc(f, a));
			this.node && (this.node.cw(d), this.view.aa.bg(this.node.id));
		};
		c.prototype.wa = function() {
			var a = this;
			this.node &&
				((this.ba.matrix = this.node.Na()),
				this.view.aa.ab(),
				this.view.aa.ac([this.node.id]),
				this.view.aa.wa(!0),
				(this.node = null),
				this.view.aa.transaction(function() {
					a.view.aa.createNode(a.nodeType, a.ba);
				}));
		};
		c.prototype.cn = function(a) {
			this.ba.lineWidth = this.view.eo(a);
		};
		c.prototype.me = function(a, b) {
			Gf.prototype.me.call(this, a, b);
			this.ba[b ? "fillStyle" : "strokeStyle"] = a;
		};
		c.prototype.eg = function(a, b) {
			Gf.prototype.eg.call(this, a, b);
			b = b ? "fillStyle" : "strokeStyle";
			var d = fc(this.ba[b], a);
			this.log("oldColour=%s+opacity %s = %s", this.ba[b], a, d);
			this.ba[b] = d;
		};
		c.prototype.Bd = function() {
			return this.PD;
		};
		c.prototype.kd = function(a, b) {
			this.ba[a] = b;
		};
		c.prototype.Qg = function() {
			return this.ba;
		};
		c.prototype.xf = function(a, b) {
			"defaultLineWidth" === a && this.cn(b);
		};
		return c;
	})();
	var If = (function() {
		function c(a, b, d) {
			var c = this;
			this.view = a;
			this.ba = b;
			this.uB = d;
			this.state = "none";
			this.scale = 1;
			this.log = z.create("ImageStamp");
			this.Qa = document.createElement("img");
			this.url = this.Qa.src = b.url;
			"scale" in this.ba &&
				((this.scale = this.ba.scale), delete this.ba.scale);
			P.kp(this.Qa.src, function(a) {
				"width" in c.ba && ((c.scale = c.ba.width / a), delete c.ba.width);
			});
		}
		c.prototype.Bd = function() {
			return "imagestamp";
		};
		c.prototype.Ad = function() {
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
		c.prototype.wb = function(a, b, d) {
			var c = this;
			this.log("onMouseDown type %s", d.type);
			var f = this.ob(a, b, d);
			this.view.aa.transaction(function() {
				c.view.aa.createNode(
					"ImageNode",
					jc({}, c.ba, {
						url: c.url,
						layer: c.view.ad,
						matrix: new qc(f.x, f.y).multiply(new sc(c.scale, c.scale)),
					}),
				);
			});
			this.uB ||
				(this.log("MultiStamp not set; return to pick mode."), this.view.yb());
			return !0;
		};
		c.prototype.Cb = function(a, b, d) {
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
					f.Qa.height * f.scale,
				);
				a.globalAlpha = b;
			});
			return !0;
		};
		c.prototype.Wb = function() {
			return !0;
		};
		c.prototype.ne = function(a) {
			"cancel" === a && (this.view.yb(), this.view.Rc.ta("goto-toolbar"));
		};
		return c;
	})();
	var Jf = (function() {
		function c(a) {
			var b = this;
			this.view = a;
			this.state = "none";
			this.start = new F(0, 0);
			this.qw = this.pw = 0;
			this.Fq = null;
			this.log = z.create("PanTool");
			this.Xu = function(a) {
				a ? b.view.Jb("grabbing") : b.view.Jb("not-allowed");
			};
			this.Bc = new Ge(a);
		}
		c.prototype.BD = function(a, b, d, c) {
			this.Fq = c;
			this.wb(a, b, d);
		};
		c.prototype.Ad = function() {
			this.log("Entering PanToolBehaviour");
			this.view.ha.pa("allowScroll", this.Xu);
		};
		c.prototype.Ac = function() {
			this.log("Leaving PanToolBehaviour");
			this.view.ha.removeListener("allowScroll", this.Xu);
		};
		c.prototype.vb = function(a) {
			return this.Bc.vb(a);
		};
		c.prototype.vA = function(a) {
			return new F(a.pageX, a.pageY);
		};
		c.prototype.wb = function(a, b, d) {
			this.log("onMouseDown type %s", d.type);
			if (!this.view.ha.get("allowScroll"))
				return this.log("Scrolling disabled."), !0;
			if (this.view.QA(d)) {
				var c = new Gf(this.view);
				this.view.Xa(c);
				return c.wb(a, b, d);
			}
			this.state = "dragging";
			this.start = new F(d.pb, d.qb);
			this.pw = this.view.Db;
			this.qw = this.view.Eb;
			return !0;
		};
		c.prototype.Cb = function(a, b, d) {
			if ("dragging" !== this.state) return !1;
			a = this.vA(d);
			b = this.qw + a.y - this.start.y;
			this.view.Db = this.pw + a.x - this.start.x;
			this.view.Eb = b;
			this.view.wd();
			this.view.la();
			return !0;
		};
		c.prototype.Wb = function() {
			this.state = "none";
			this.Fq && this.view.Xa(this.Fq);
			return !0;
		};
		c.prototype.gq = function(a, b, d, c) {
			if (!this.view.ha.get("allowZoom"))
				return this.log("Zooming is disabled."), !1;
			this.log("onMouseWheel(%s, %s, %s)", a, b, d);
			this.view.Gw(0 > d.y ? 1 / 1.1 : 1.1, a, b);
			c.stopPropagation();
			c.preventDefault();
			return !0;
		};
		c.prototype.ne = function(a) {
			"cancel" === a && this.view.yb();
		};
		c.prototype.Bd = function() {
			return "pan";
		};
		return c;
	})();
	function Kf(c) {
		var a;
		void 0 === a && (a = "");
		if (!c) throw a || "Assertion failed";
	}
	function Lf(c) {
		return (
			"object" === typeof c &&
			"[object Array]" === Object.prototype.toString.apply(c)
		);
	}
	function Mf(c) {
		return "string" === typeof c;
	}
	function Nf(c) {
		return "number" === typeof c;
	}
	function Of(c) {
		return "object" === typeof c;
	}
	var Pf = z.create("CONFIG"),
		Qf = (function() {
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
		Rf = {
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
			defaultTextBackground: q.We,
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
			keyDuplicate: "Ctrl+D,\u2318+D",
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
			keySelectAll: "Ctrl+A,\u2318+A",
			keySendToBack: "End",
			keyUndo: "Ctrl+Z,\u2318+Z",
			keyUngroup: "Ctrl+Shift+G",
			keyUp: "Up,Ctrl+Up",
			keyZoomIn: "Ctrl+=,\u2318+=,Ctrl++,\u2318++",
			keyZoomNormal: "Ctrl+0,\u2318+0",
			keyZoomOut: "Ctrl+-,\u2318+-",
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
			useSelectionHandles: !0,
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
		Sf = {},
		Tf;
	for (Tf in Rf) Sf[Tf.toLowerCase()] = Tf;
	var Uf = { useTouch: 1, useSelectionHandles: 1 },
		Vf = (function(c) {
			function a(a, d) {
				a = c.call(this, a, Rf, d) || this;
				a.Wd = "";
				"" === a.Wd && a.set("imageFolder", a.options.imageFolder);
				"auto" === a.options.useTouch &&
					Pf(
						"Detected touch support: %s",
						"ontouchstart" in window || "onmsgesturechange" in window,
					);
				Pf("Detect clipboard support: %s", a.Ip());
				return a;
			}
			__extends(a, c);
			a.prototype.Sp = function() {
				var a = Nb(),
					d;
				for (d in a) this.set(d, a[d]);
			};
			a.Pw = function(a) {
				return a.toLowerCase() in Sf;
			};
			a.prototype.At = function(a, d) {
				"debug" === a && (a = "showDebug");
				if ("defaultZoom" === a) {
					if (
						"page" !== d &&
						"width" !== d &&
						!Nf(d) &&
						((d = parseFloat(d)), isNaN(d))
					) {
						Pf(
							"Error: Config option %s must be a number or 'page' or 'width'",
							a,
						);
						return;
					}
				} else if ("allowSelectBox" !== a)
					if ("imageFolder" === a) {
						var b = this.zA();
						"" === b
							? ((this.Wd = d.replace("$SCRIPT/", "")),
							  (this.Wd = this.Wd.replace("$SCRIPT", "")))
							: (this.Wd = d
									.replace("$SCRIPT/", "$SCRIPT")
									.replace("$SCRIPT", b));
						"" !== this.Wd &&
							"/" !== this.Wd[this.Wd.length - 1] &&
							(this.Wd += "/");
						Pf(
							"scriptPath=%s imageFolder=%s, result:%s",
							b,
							this.options.imageFolder,
							this.Wd,
						);
					} else if ("broadcastMouse" === a)
						"true" === d ? (d = !0) : "false" === d && (d = !1);
					else if ("viewMargin" === a) {
						b = null;
						if (Mf(d)) {
							b = [];
							var c = 0;
							for (d = d.split(","); c < d.length; c++)
								b.push(parseFloat(d[c]));
						} else
							"number" === typeof d ? (b = [d, d, d, d]) : Lf(d) && (b = d);
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
							(!Uf[a] && "boolean" === typeof this.options[a]) ||
							(Uf[a] && "auto" !== d)
						)
							d = "1" === d || "true" === d || "" === d;
				return { name: a, value: d };
			};
			a.prototype.zA = function() {
				var a = Qf;
				var d = a.lastIndexOf("/");
				return (a = 0 <= d ? a.substr(0, d + 1) : "");
			};
			a.prototype.dF = function() {
				return this.options.showBrushTool;
			};
			a.prototype.gF = function() {
				return this.options.showPropertyPanel;
			};
			a.prototype.eF = function() {
				return this.options.showColourPanel;
			};
			a.prototype.fF = function() {
				return this.options.showDebug;
			};
			a.prototype.hF = function() {
				return this.options.showToolbar;
			};
			a.prototype.fb = function(a) {
				return this.get(a);
			};
			a.prototype.get = function(a) {
				switch (a) {
					case "useTouch":
						return this.Fi();
					default:
						return c.prototype.get.call(this, a);
				}
			};
			a.prototype.Fi = function() {
				return "auto" === this.options.useTouch
					? "ontouchstart" in window || "onmsgesturechange" in window
					: this.options.useTouch;
			};
			a.prototype.kE = function(a) {
				return "boolean" === typeof this.options.useSelectionHandles
					? this.options.useSelectionHandles
					: !a;
			};
			a.prototype.Az = function() {
				if ("auto" === this.options.allowSelectBox) {
					var a = this.Fi(),
						d = document.documentElement.offsetHeight,
						c = window.innerHeight,
						f = !a || (a && 0 < c - d + 50);
					Pf(
						"Allowing select box: %s (useTouch=%s, documentHeight=%s, windowHeight=%s)",
						f,
						a,
						d,
						c,
					);
					return f;
				}
				return this.options.allowSelectBox;
			};
			a.prototype.Oz = function() {
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
			a.prototype.lp = function(a) {
				return 0 === a.indexOf("http:") ||
					0 === a.indexOf("https:") ||
					0 === a.indexOf("/")
					? a
					: this.Wd + a;
			};
			a.prototype.oc = function(a) {
				return u.oc(this.get(a));
			};
			a.prototype.Gx = function(a) {
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
						Pf("Unmap keyboard %s=>%s", e, d),
						a.UD(e, d),
						Pf("Map keyboard %s=>%s", c, d),
						a.map(c, d));
				});
				this.pa("allowSystemClipboard", function() {
					var b = !c.Ip();
					b
						? Pf("Not using system clipboard. Mapping cut/copy/paste keys")
						: Pf("Using system clipboard. Ignore keyCut/keyCopy/keyPaste.");
					a.map(c.options.keyCut, "cut", b);
					a.map(c.options.keyCopy, "copy", b);
					a.map(c.options.keyPaste, "paste", b);
				});
			};
			a.prototype.Pt = function() {
				return "radial" === this.get("drawCircleStyle") ||
					"radial" === this.get("drawShapeStyle")
					? "circle"
					: "rectangle";
			};
			a.prototype.ti = function(a) {
				var b = a;
				0 < this.options.maximumZoom &&
					(a = Math.min(a, this.options.maximumZoom));
				0 < this.options.minimumZoom &&
					(a = Math.max(a, this.options.minimumZoom));
				a !== b && Pf("Zoom restricted to %s", a);
				return a;
			};
			a.prototype.Ip = function() {
				var a = document;
				return (
					this.get("allowSystemClipboard") &&
					void 0 !== a.oncopy &&
					void 0 !== a.oncut &&
					void 0 !== a.onpaste
				);
			};
			return a;
		})(Qb);
	var Wf = (function() {
		function c() {
			this.Bf = 0;
			this.fn = null;
		}
		c.prototype.request = function(a, b) {
			var d = this;
			this.Ex = a;
			this.fn = b;
			0 === this.Bf &&
				(this.Bf = window.requestAnimationFrame(function(a) {
					d.Bf = 0;
					d.fn && d.fn(d.Ex, a);
				}));
		};
		c.prototype.cancel = function() {
			0 !== this.Bf && (window.cancelAnimationFrame(this.Bf), (this.Bf = 0));
		};
		return c;
	})();
	var Xf = z.create("MOVE"),
		ag = (function() {
			function c(a, b, d, c) {
				var e = this;
				this.Da = a;
				this.node = d;
				this.fi = c;
				this.Su = this.Uu = "";
				this.Ar = !0;
				this.placeholder = this.pv = null;
				this.wo = "column";
				this.Up = function() {};
				this.og = new Ld();
				this.jo = new Wf();
				this.ye = null;
				Xf("Moving node: %s istool=%s", d.id, c);
				this.Da.Pe(!0);
				this.Da.Jb("move");
				this.BB = d.da.style.position || "";
				this.Bm = d.da.style.left || "";
				this.Dm = d.da.style.top || "";
				this.Cm = d.da.parentElement;
				this.CB = u(d.da).Ee("zIndex");
				this.AB = d.da.nextElementSibling;
				this.ny = null !== d.da.getAttribute("confine") || 1 === c;
				this.ji = d.vj();
				this.EB = d.parent;
				this.Uu = d.da.style.pointerEvents;
				this.Su = d.da.style.cursor;
				this.DB = d.parent ? d.parent.ie(d) : -1;
				d.da.style.cursor = "move";
				var h = this.Da.ae(b.pb, b.qb, !0);
				this.start = h;
				if (2 === c) {
					a = Yf(this.node.da);
					var k = this.Da.ae(a.x, a.y, !0);
					Xf("Moving fixture from %s; tl=%s", a, k);
					a.x = k.x;
					a.y = k.y;
					this.node.rect = a;
					this.ji = this.node.rect;
				}
				"IFRAME" === d.da.tagName && (this.Ar = !1);
				d.da.style.position = "absolute";
				this.Ar && this.Da.xk.appendChild(d.da);
				d.da.style.zIndex = "1";
				this.hB = u(d.da).Vl();
				1 === c &&
					((this.node.rect = new G(
						h.x - this.node.da.offsetWidth / 2,
						h.y - this.node.da.offsetHeight / 2,
						this.node.da.offsetWidth,
						this.node.da.offsetHeight,
					)),
					(this.ji = this.node.rect),
					(d.da.style.pointerEvents = "none"),
					(this.Up = function() {
						Xf("Got image load event from dragged tool");
						e.jC(h);
					}),
					this.node.da.addEventListener("load", this.Up, !0));
				this.rect = this.node.vj();
				d.da.classList.add("dragging");
				this.Da.aa.wc(function(a) {
					var b = a.rect;
					Rc(a) && (b = a.vj());
					e.og.zs(b, a.id);
				});
				this.Cb(h.x, h.y, b);
			}
			c.prototype.Ad = function() {
				Xf("Entering DragHTMLBehaviour");
			};
			c.prototype.vb = function(a) {
				if (this.Da.ha.get("allowZoom") && "gesturestart" === a.type) {
					Xf("Switch to default behaviour");
					var b = new Gf(this.Da);
					this.Da.Xa(b);
					b.vb(a);
					return !0;
				}
				return !1;
			};
			c.prototype.Ac = function() {
				this.Da.tn(new J());
				this.Da.Pe(!1);
				this.Da.Jb("default");
				this.node.da.style.left = this.Bm;
				this.node.da.style.top = this.Dm;
				this.node.da.style.position = this.BB;
				this.node.da.style.zIndex = this.CB;
				this.node.da.style.transform = "";
				this.node.da.style.pointerEvents = this.Uu;
				this.node.da.style.cursor = this.Su;
				this.node.da.classList.remove("dragging");
				this.Cm
					? this.Ar && this.Cm.insertBefore(this.node.da, this.AB)
					: u(this.node.da).remove();
				this.ye && this.ye.classList.remove("drop");
				Xf("DragHTMLBehaviour.leave()");
				this.Ev();
				this.node.da.removeEventListener("load", this.Up, !0);
				1 === this.fi && this.node.Sa();
				this.jo.cancel();
			};
			c.prototype.oy = function(a, b) {
				b = Yf(b);
				b.transform(this.Da.dm());
				a.x < b.x && (a.x = b.x);
				a.y < b.y && (a.y = b.y);
			};
			c.prototype.Cb = function(a, b, d) {
				var c = this;
				this.jo.request(d, function(a) {
					var b = c.Da.ae(a.pageX, a.pageY),
						d = b.ir(c.start),
						e = c.ji;
					c.rect.x = e.x + d.x;
					c.rect.y = e.y + d.y;
					c.ny && c.Cm && c.oy(c.rect, c.Cm);
					c.Da.ha.get("magnet") &&
						((d = c.og.yD(c.rect, c.node.id)),
						(c.rect.x += d.x),
						(c.rect.y += d.y));
					(d = "view" === c.Da.ha.get("confine")) && c.rect.Xs(c.Da.Ub());
					c.node.da.style.left = c.rect.x + "px";
					c.node.da.style.top = c.rect.y + "px";
					c.node.sk(Zf(c.rect, c.hB), new J());
					e = new qc(c.rect.x - c.ji.x, c.rect.y - c.ji.y);
					1 !== c.fi && c.Da.tn(e);
					c.Da.la();
					e = Yf(c.node.da);
					e = c.mz(e);
					null !== e ? c.wx(e, a.pageX, a.pageY) : c.Ev();
					a = c.node.ia("$component");
					var f = null,
						r = Yf(c.node.da);
					u(c.Da.mf()).query('[z-drop-accept="' + a + '"]', function(a) {
						var b = Yf(a),
							d = Math.min(r.Pi(), b.Pi());
						a !== c.node.da && b.lv(r) > 0.7 * d && (f = a);
					});
					a = f;
					a !== c.ye &&
						(c.ye && c.ye.classList.remove("drop"),
						(c.ye = a),
						c.ye && c.ye.classList.add("drop"));
					c.node.da.dispatchEvent(
						new CustomEvent("zwibbler-dragging", {
							cancelable: !0,
							detail: {
								node: c.node.id,
								Qy: c.rect.x,
								Ry: c.rect.y,
								width: c.rect.width,
								height: c.rect.height,
							},
						}),
					);
					d || c.Da.scrollIntoView(b.x, b.y);
				});
				return !0;
			};
			c.prototype.mz = function(a) {
				var b = this.node.ia("$component"),
					d = null;
				u(this.Da.mf()).query("[container-for]", function(c) {
					$f(c, b) && Yf(c).lv(a) > 0.5 * a.Pi() && (d = c);
				});
				return d;
			};
			c.prototype.wx = function(a, b, d) {
				var c = u(a).Ee("flex-direction");
				this.wo = c.startsWith("row")
					? "row"
					: c.startsWith("col")
					? "column"
					: "none";
				c = this.wo;
				var f = 0,
					h = null,
					k,
					l = new F(b, d),
					n = null;
				if ("none" === c) b = a.lastElementChild;
				else {
					for (k = a.firstElementChild; k; ) {
						if (!k.classList.contains("placeholder")) {
							n = Yf(k);
							n = new F(n.x, n.y).bc(l);
							if (!h || n < f) (h = k), (f = n);
							n = k;
						}
						k = k.nextElementSibling;
					}
					h &&
						h === n &&
						((n = Yf(h)),
						("column" === c && d > n.y) ||
							("row" === c && b > n.x + n.width / 2)) &&
						(h = null);
					b = h;
				}
				if (this.placeholder && this.placeholder.parentNode) {
					if (a !== this.placeholder.parentElement || b !== this.pv)
						(this.pv = b), a.insertBefore(this.placeholder, b);
				} else
					(d = {}),
						(d.flex =
							"column" === this.wo
								? "0 0 " + this.node.da.clientHeight + "px"
								: "0 0 " + this.node.da.clientWidth + "px"),
						(this.placeholder = u("div", { class: "placeholder" }).$a(d).da),
						a.insertBefore(this.placeholder, b);
			};
			c.prototype.Ev = function() {
				this.placeholder &&
					this.placeholder.parentNode &&
					this.placeholder.parentNode.removeChild(this.placeholder);
			};
			c.prototype.Wb = function(a, b, d) {
				this.jo.cancel();
				Xf("onMouseUp()");
				if (1 === this.fi && !Yf(this.Da.canvas.first).Mc(d.pageX, d.pageY))
					return Xf("Dropped nowhere!"), this.Da.Xa(new Gf(this.Da)), !0;
				a = "static";
				var c = 0,
					f = 0,
					h = 0;
				b = this.Da.aa.De();
				if (this.placeholder && this.placeholder.parentElement)
					if (
						("flex" !== u(this.placeholder.parentElement).Ee("display") &&
							(a = "absolute"),
						(d = this.Da.aa.jp(this.placeholder)))
					) {
						b = d;
						c = this.placeholder;
						f = this.placeholder.parentElement.firstElementChild;
						for (h = 0; f && f !== c; )
							f.getAttribute("nid") && h++, (f = f.nextElementSibling);
						h = Math.min(h, d.children.length - 1);
						Xf("Use placeholder, place at %s:%s", b.id, h);
						c = this.rect.x - d.rect.x;
						f = this.rect.y - d.rect.y;
					} else Xf("Placeholder is not in a NID node");
				else
					Xf("No placeholder; add to root"),
						(a = "absolute"),
						(h = b === this.EB ? this.DB : -1),
						(c = this.rect.x),
						(f = this.rect.y);
				this.Da.Xa(new Gf(this.Da));
				this.node.da.dispatchEvent(
					new CustomEvent("zwibbler-drop", {
						cancelable: !0,
						detail: { node: this.node.id, WE: b.id, VE: h, Qy: c, Ry: f },
					}),
				)
					? (this.Da.aa.ab(),
					  0 === this.fi || 2 === this.fi
							? this.Da.aa.hd(this.node.id, b.id, h)
							: b &&
							  1 === this.fi &&
							  ((d = this.node.ub()),
							  "absolute" === a &&
									((d["style.position"] = "absolute"),
									(d["style.left"] = c + "px"),
									(d["style.top"] = f + "px")),
							  this.Da.aa.createNode("HTMLNode", d, b.id, h),
							  this.Da.rb(),
							  this.Da.Ye(this.node)),
					  "absolute" === a
							? this.Da.aa.zb([this.node.id], {
									"style.left": c + "px",
									"style.top": f + "px",
									"style.position": a,
							  })
							: this.Da.aa.zb([this.node.id], {
									"style.left": "",
									"style.top": "",
									"style.position": "",
							  }),
					  this.ye &&
							(a = this.Da.xa.Vt(this.ye)) &&
							(a = this.Da.xa.Wl(a)) &&
							a.element &&
							Q.xc(a.element, "drop", this.node.Wh(null)),
					  this.Da.aa.wa(!1))
					: Xf("DragHTML was cancelled by element");
				return !0;
			};
			c.prototype.jC = function(a) {
				this.node.rect = new G(
					a.x - this.node.da.offsetWidth / 2,
					a.y - this.node.da.offsetHeight / 2,
					this.node.da.offsetWidth,
					this.node.da.offsetHeight,
				);
				this.ji = this.node.rect;
			};
			return c;
		})();
	function Yf(c) {
		c = u(c).pc();
		return new G(c.left, c.top, c.width, c.height);
	}
	function Zf(c, a) {
		c = c.clone();
		c.x += a.left;
		c.width -= a.left + a.right;
		c.y += a.top;
		c.height -= a.top + a.bottom;
		return c;
	}
	var bg = z.create("Background"),
		dg = (function() {
			function c(a) {
				this.ha = a;
				this.rect = new G(0, 0, 0, 0);
				this.bj = null;
				this.background = q.We;
				this.update = !0;
				this.zu = null;
				this.Au = 1;
				this.Fa = [];
				this.canvas = document.createElement("canvas");
				this.jn = "";
			}
			c.prototype.vC = function() {
				this.update = !0;
			};
			c.prototype.RC = function(a) {
				a !== this.background && ((this.background = a), (this.update = !0));
			};
			c.prototype.pk = function(a) {
				a !== this.bj && ((this.bj = a), (this.update = !0));
			};
			c.prototype.PC = function(a) {
				this.Fa = cg(a, function(a, d) {
					return a.Vd() - d.Vd();
				});
				this.update = !0;
			};
			c.prototype.yA = function(a, b, d) {
				(this.update = !0),
					this.lC(b, d),
					(this.zu = a),
					(this.Au = d),
					(this.update = !1);
				if (this.jn) return this.jn;
				var c;
				this.canvas.width &&
					this.canvas.height &&
					(c = a.createPattern(this.canvas, "no-repeat"));
				return c || "#ff00ff";
			};
			c.prototype.lC = function(a, b) {
				this.rect = a;
				bg("Regenerate background for %s, %s", a, b);
				if ("grid" === this.background || 0 !== this.Fa.length || this.bj) {
					this.jn = "";
					Math.floor(a.width * b) !== Math.floor(this.canvas.width) &&
						(this.canvas.width = a.width * b);
					Math.floor(a.height * b) !== Math.floor(this.canvas.height) &&
						(this.canvas.height = a.height * b);
					var d = this.canvas.getContext("2d");
					d.setTransform(b, 0, 0, b, -a.x * b, -a.y * b);
					(b = q.Ll(this.background))
						? ((d.fillStyle = b.toString()),
						  d.fillRect(a.x, a.y, a.width, a.height))
						: "grid" === this.background
						? this.RB(d, a)
						: "clear" === this.background &&
						  d.clearRect(a.x, a.y, a.width, a.height);
					if (this.bj)
						try {
							this.bj(d, a.x, a.y, a.width, a.height);
						} catch (e) {
							console.warn("Error in custom background function: ", e);
						}
					a = 0;
					for (b = this.Fa; a < b.length; a++) b[a].la(d);
				} else this.jn = "clear" === this.background ? q.We : this.background;
			};
			c.prototype.RB = function(a, b) {
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
				a.fillStyle = q.Zc;
				a.fillRect(b.x, b.y, b.width, b.height);
				a.lineWidth = 0.5;
				d(f);
				c && ((a.lineWidth = 2), d(h));
			};
			return c;
		})();
	function cg(c, a) {
		for (var b = [], d = 0; d < c.length; d++) b.push(d);
		b.sort(function(b, d) {
			var e = a(c[b], c[d]);
			return 0 !== e ? e : b - d;
		});
		for (var e = [], f = 0; f < b.length; f++) (d = b[f]), e.push(c[d]);
		return e;
	}
	function eg(c) {
		for (var a = [], b = 0; b < c.length; b++)
			a.push(
				String.fromCharCode(c.charCodeAt(b) ^ "zwibbler3".charCodeAt(b % 9)),
			);
		return a.join("");
	}
	eg(">2$-");
	for (
		var fg = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116], gg = [], hg = 0;
		hg < fg.length;
		hg++
	)
		gg.push(String.fromCharCode(fg[hg]));
	var jg = (function() {
		function c(a, b, d, e, f, h, k, l, n, r, v, w) {
			var x = this;
			this.Qc = a;
			this.canvas = b;
			this.aa = d;
			this.Rc = e;
			this.ha = f;
			this.language = h;
			this.xa = k;
			this.ya = l;
			this.xk = n;
			this.fe = r;
			this.AC = v;
			this.Hw = w;
			this.se = "none";
			this.Dk = this.Ck = 0;
			this.scale = 1;
			this.code = this.Eb = this.Db = 0;
			this.be = new G(0, 0, 0, 0);
			this.Lq = new Bc();
			this.lk = this.mk = this.Xm = !0;
			this.Kq = new J();
			this.selection = [];
			this.qh = [];
			this.ad = "default";
			this.sa = {};
			this.Kp = this.Gf = this.Cl = !1;
			this.he = 1;
			this.hl = {};
			this.Qi = null;
			this.mo = "";
			this.ze = this.Ja = null;
			this.Qr = 4;
			this.Rr = 3 * this.Qr;
			this.rg = this.jj = null;
			this.Fh = !1;
			this.lc = this.vc = this.bd = q.Oa;
			this.Nh = 5;
			this.$h = "";
			this.Vc = 0;
			this.aq = new G(0, 0, 0, 0);
			this.bq = new G(0, 0, 0, 0);
			this.Ra = { Mb: !1, nc: !1, po: !1, x: 100, y: 100 };
			this.Cu = !1;
			this.mm = new ob();
			this.fm = [];
			this.ot = 0;
			this.og = new Ld();
			this.Zn = null;
			this.Kc = new G(0, 0, 0, 0);
			this.log = z.create("VIEW");
			this.mu = 0;
			this.Bu = new G(0, 0, 0, 0);
			this.ma = this.canvas.get(0);
			this.canvas.nx();
			this.Gf = !0 === f.get("pageView");
			this.background = new dg(f);
			this.mC();
			this.ra = new Gf(this);
			this.ya.add(function() {
				x.ra && x.ra.Ac && x.ra.Ac();
				x.request.Ui();
				x.Cd.Ui();
				x.Gc.Ui();
				x.ra = {};
				x.aa.Sa();
			});
			this.Cd = new Hd(this.ya, !0);
			this.Cd.Rd(this.canvas.get(0).canvas.parentNode);
			this.Gc = new Hd(this.ya, !1);
			this.Gc.Rd(this.canvas.get(0).canvas.parentNode);
			this.ha.pa("scrollbarHandleColour", function(a) {
				x.Cd.aw(a);
				x.Gc.aw(a);
			});
			var y = this;
			this.request = new He();
			this.request.canvas = this.canvas.get(0).canvas;
			this.request.ha = this.ha;
			this.request.pa("reformat", function(a) {
				x.log("Node %s requests reformat", a);
				x.aa.ed(a) && (x.log("   Reformatting... zoom=%s", x.se), x.aa.bg(a));
				x.update();
				(a = x.aa.Gb(a)) && "background" === a.zc() && x.Dg();
				x.ui();
				x.xa.ta("resource-loaded");
			});
			this.request.pa("redraw", function(a) {
				x.log("Node %s requests redraw", a);
				x.la();
			});
			this.request.pa("convert-dom-request", function(a, b) {
				y.xa.ta("convert-dom-request", b, a);
			});
			this.request.pa("mouseevent", function(a) {
				x.tw.handleEvent(a);
			});
			f.pa("useTouch", function() {
				x.rg = null;
				x.Rr = 3 * y.Qr;
			});
			this.Gc.pa("scroll", function(a) {
				y.Eb = -a * y.scale;
				y.xa.ta("scroll");
				x.aa.Iq(x.Ub());
				x.ur();
				y.la();
			});
			this.Cd.pa("scroll", function(a) {
				y.Db = -a * y.scale;
				y.la();
				x.aa.Iq(x.Ub());
				x.ur();
				y.xa.ta("scroll");
			});
			this.Dg();
			this.aa = this.sh(d);
			this.ha.pa("update", function(a, b) {
				x.xf(a, b);
			});
			this.ya.addEventListener(document, "webkitfullscreenchange", function() {
				ec() &&
					(x.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."),
					(x.requestAnimationFrame = c.prototype.requestAnimationFrame));
			});
			a = document;
			a.fonts &&
				this.ya.addEventListener(a.fonts, "loadingdone", function() {
					x.log("Font loading done, redraw now.");
					x.la();
				});
			this.Pd(0.5, 0, 0, -30, "", "rotate");
			this.Pd(0, 0, 0, 0, "", "scale");
			this.Pd(1, 0, 0, 0, "", "scale");
			this.Pd(1, 1, 0, 0, "", "scale");
			this.Pd(0, 1, 0, 0, "", "scale");
			this.Pd(0.5, 0, 0, 0, "", "scale");
			this.Pd(1, 0.5, 0, 0, "", "scale");
			this.Pd(0.5, 1, 0, 0, "", "scale");
			this.Pd(0, 0.5, 0, 0, "", "scale");
			this.ra = this.yb();
		}
		c.prototype.eo = function(a) {
			this.ha.get("adaptiveBrushWidth") && (a /= this.scale);
			return a;
		};
		c.prototype.IA = function(a, b) {
			var d,
				c = !1;
			for (d = 0; d < a.Sm.length; d++) {
				var f = a.Sm[d];
				f in this.hl &&
					(this.log("Background node has been removed"), (c = !0));
			}
			for (d = 0; d < a.dl.length; d++) {
				f = a.dl[d];
				var h = this.aa.Aa(f, !1);
				"background" === h.ia("layer") &&
					(this.log("Background node has been added"), (c = !0));
			}
			for (d = 0; d < a.wn.length; d++)
				(f = a.wn[d]),
					(h = this.aa.Aa(f, !1)),
					"background" === h.ia("layer")
						? (this.log("Background node has been changed"), (c = !0))
						: f in this.hl &&
						  (this.log("Node removed from background layer"), (c = !0));
			(this.aa.De().ia("background") || this.mo) !== this.mo && (c = !0);
			c && this.Dg();
			a.dl.length && this.xa.ta("nodes-added", a.dl, {}, b);
			a.wn.length && this.xa.ta("nodes-changed", a.wn, {}, b);
			a.Sm.length && this.xa.ta("nodes-removed", a.Sm, a.ba, b);
		};
		c.prototype.requestAnimationFrame = function(a) {
			a();
		};
		c.prototype.zz = function() {
			this.log("getActiveLayer() -> %s", Array(this.Tb.entries()));
			return Array.from(this.Tb).join(",");
		};
		c.prototype.Zm = function(a) {
			this.log("setActiveLayer(%s)", a);
			a = a.split(",");
			this.Tb = new Set();
			for (var b = 0; b < a.length; b++) this.Tb.add(a[b]);
			this.ad = a[0];
			this.rb();
			this.mc();
			this.la();
		};
		c.prototype.vk = function(a, b) {
			this.aa.vk(a, b);
			this.Yg(!1);
			"background" === a && this.Dg();
			!b && this.Tb.has(a) && (this.rb(), this.mc());
			this.la();
		};
		c.prototype.sh = function(a) {
			var b = this;
			this.log("setDocument()");
			this.yb();
			this.aa.Sa();
			this.aa = a;
			this.aa.hv = function(a, d, c, k, l) {
				b.Fm(a, d, c, k, l);
			};
			this.scale = 1;
			this.Eb = this.Db = 0;
			this.selection = [];
			this.ze = this.Ja = null;
			this.Vc += 1;
			this.be = new G(0, 0, 0, 0);
			this.Lq = new Bc(this.be);
			this.Kq = new J();
			this.$h = "";
			this.Tb = new Set();
			this.Tb.add("default");
			this.vc = q.Zc;
			this.lc = this.ha.fb("defaultBrushColour");
			this.bd = this.ha.fb("defaultStrokeStyle");
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
			this.Nh = this.ha.get("defaultBrushWidth");
			var d = this.ag(0);
			this.Db = -d.x;
			this.Eb = -d.y;
			this.wd();
			this.aa.br = this.ha.get("spotHighlightColour");
			this.aa.kn = this.ha.get("spotHighlightZIndex");
			this.aa.format(this.ma, this.request);
			this.bq = new G(0, 0, 0, 0);
			this.aq = new G(0, 0, 0, 0);
			"none" !== this.se
				? this.ce(this.se)
				: (this.ce(this.ha.get("defaultZoom")), this.la());
			return a;
		};
		c.prototype.xf = function(a, b) {
			var d = !1;
			switch (a) {
				case "allowResize":
					this.Ih();
					this.la();
					break;
				case "defaultBrushColour":
					this.lc = b;
					break;
				case "defaultFillStyle":
					this.vc = this.sa.fillStyle = b;
					break;
				case "defaultStrokeStyle":
					this.bd = b;
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
					this.Nh = b;
					break;
				case "defaultZoom":
					this.ce(b);
					break;
				case "pageView":
					this.Gf = b;
					d = !0;
					break;
				case "pagePlacement":
				case "pageInflation":
				case "viewMargin":
					this.ce(this.se);
					break;
				case "snap":
				case "background":
				case "gridSpacing":
				case "gridBlocks":
				case "gridColour":
					"background" === a &&
						((d = this.aa.De()), this.aa.Ld([d.id], "background", b));
					this.Qi = null;
					this.background.vC();
					this.Dg();
					d = !0;
					this.Yg(!1);
					break;
				case "pageShadow":
				case "outsidePageColour":
				case "clipToPage":
					d = !0;
					break;
				case "readOnly":
					!0 === b && (this.yb(), this.rb(), this.mc(), (d = !0));
					this.aa.zi(b);
					break;
				case "spotHighlightColour":
					this.aa.br = b;
					d = !0;
					break;
				case "spotHighlightZIndex":
					this.aa.kn = b;
					d = !0;
					break;
				case "showRuler":
				case "pixelsPerUnit":
				case "units":
					d = !0;
					break;
				case "allowScroll":
				case "scrollbars":
					d = !0;
					this.wd();
					break;
				case "useSelectionHandles":
					this.Ih(), (d = !0);
			}
			this.ra.xf && this.ra.xf(a, b);
			d && this.la();
		};
		c.prototype.Ff = function(a, b) {
			this.log("Set default %s=%s", a, b);
			this.sa[a] = kc(this.sa[a], b);
			switch (a) {
				case "fillStyle":
					this.lc = this.vc = b;
					break;
				case "strokeStyle":
					this.lc = this.bd = b;
			}
		};
		c.prototype.ce = function(a) {
			a !== this.se && this.log("Zooming to: %s (scale %s)", a, this.scale);
			var b = this.kf(!0),
				d = b.width - 20,
				c = this.aa.LA() || this.Gf;
			this.se = a;
			c ||
				"number" === typeof a ||
				this.log(
					"WARNING: Zoom to page/width but document size has not been set.",
				);
			if ("number" === typeof a) this.scale = a;
			else if ("none" === a || this.aa.empty())
				"page" === a ? this.Qe(this.ag(), !1, !1) : (this.scale = 1);
			else {
				if ("page" === a) {
					var f = this.$f();
					this.Qe(f, "centre" === this.ha.get("pagePlacement"), !0);
					this.se = c ? a : this.scale;
					this.ra.Id && this.ra.Id();
					return !0;
				}
				"width" === a &&
					((f = this.$f()),
					(this.scale = d / f.width),
					(this.Db = -f.x * this.scale + b.x),
					(this.Eb = -f.y * this.scale + b.y),
					this.log(
						"RECT=%s scale=%s tx=%s ty=%s",
						f,
						this.scale,
						this.Db,
						this.Eb,
					),
					(this.se = a));
			}
			0 >= this.scale && (this.scale = 1);
			c || (this.se = this.scale);
			this.wd();
			this.la();
			this.ra.Id && this.ra.Id();
			return !0;
		};
		c.prototype.ae = function(a, b, d) {
			void 0 === d && (d = !1);
			a = this.dm().apply(a, b);
			d || (a = this.ob(a, 0));
			return a;
		};
		c.prototype.Qh = function(a, b) {
			return this.dm()
				.inverse()
				.apply(a, b);
		};
		c.prototype.xB = function(a, b, d) {
			return a
				.dc()
				.multiply(this.dm())
				.apply(b, d);
		};
		c.prototype.Jf = function(a) {
			return this.ae(a.pageX, a.pageY, !0);
		};
		c.prototype.ne = function(a, b) {
			if (u.sf(b.target, b))
				this.log("Target is text entry -- ignore key command");
			else if ((this.ra.ne && this.ra.ne(a, b), !this.JA(a, b))) {
				switch (a) {
					case "next-page":
						this.Dc(this.aa.cb + 1);
						break;
					case "previous-page":
						this.Dc(this.aa.cb - 1);
						break;
					case "zoom-to-page":
						this.ha.get("allowZoom") && this.ce("page");
						break;
					case "zoom-to-width":
						this.ha.get("allowZoom") && this.ce("width");
				}
				b.preventDefault();
				b.stopPropagation();
			}
		};
		c.prototype.ni = function(a) {
			var b = a instanceof ge ? a.sb.target : a.target;
			var d = this.ha.get("readOnly");
			d =
				(b = b ? u(b) : null) &&
				(!b.matches(
					".zwibbler-canvas-holder,.zwibbler-canvas-holder *, [z-drag-tool], [z-drag-tool] *, [z-fixture] *",
				) ||
					b.matches(".zwibbler-passthrough, .zwibbler-passthrough *") ||
					(d && b.matches(".zwibbler-dom-node,.zwibbler-dom-node *")));
			a instanceof ge &&
				((d = d && !a.getData("not-passthrough") && !this.Kp) ||
				"down" !== a.type
					? "gesturestart" === a.type && (d = d && this.Ge(a.pb, a.qb))
					: a.setData("not-passthrough", !0));
			return d;
		};
		c.prototype.Ge = function(a, b) {
			a = this.ae(a, b);
			return this.Ub().Mc(a.x, a.y);
		};
		c.prototype.QA = function(a) {
			return a.target instanceof HTMLElement
				? u(a.target).matches("[z-fixture], [z-fixture] *")
				: !1;
		};
		c.prototype.Ux = function() {
			this.mu = new Date().getTime() + 200;
		};
		c.prototype.mC = function() {
			function a(a) {
				d.log(a.type);
			}
			function b(a) {
				a.stopPropagation();
				a.preventDefault();
			}
			var d = this,
				c = this,
				f = new pe(this.Qc, { Ds: this.ha.get("allowPointerEvents"), yn: !0 });
			this.tw = f;
			this.ya.add(function() {
				f.Sa();
			});
			f.pa("gesturestart", function(a) {
				c.log("GestureStart");
				d.ni(a) ||
					(c.ra.vb && !1 !== c.ra.vb(a)
						? (a.stopPropagation(), a.preventDefault())
						: c.log("Pass to browser"));
			});
			f.pa("gesturechange", function(a) {
				c.ra.vb && !1 !== c.ra.vb(a)
					? (a.stopPropagation(), a.preventDefault())
					: c.log("Pass to browser");
			});
			f.pa("gestureend", function(a) {
				c.log("GestureEnd");
				c.ra.vb && !1 !== c.ra.vb(a)
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
				d.ni(a) ||
					((d.Cu = a.Lp()),
					(r = c.Jf(a)),
					(n = !0),
					d.xa.df && d.xa.df.wb(r.x, r.y, a)
						? (a.stopPropagation(), a.preventDefault())
						: (c.ra.wb &&
								!1 !== c.ra.wb(r.x, r.y, a) &&
								(a.stopPropagation(), a.preventDefault()),
						  d.Cl || u.sf(a.target) || d.Rc.ta("goto-canvas"),
						  (d.Cl = !1)));
			});
			f.pa("move", function(a) {
				d.ni(a) ||
					(n &&
						0 === a.buttons &&
						(c.log("MISSED POINTERUP! Fixing."),
						a.setData("not-passthrough", !1),
						v(a)),
					(r = c.Jf(a)),
					d.xa.df && d.xa.df.Cb(r.x, r.y, a)
						? (a.stopPropagation(), a.preventDefault())
						: c.ra.Cb &&
						  !1 !== c.ra.Cb(r.x, r.y, a) &&
						  (a.stopPropagation(), a.preventDefault()));
			});
			var v = function(a) {
				if (!d.ni(a) || d.ra instanceof ag)
					(n = !1),
						c.log(a.toString()),
						(r = c.Jf(a)),
						d.xa.df && d.xa.df.Wb(r.x, r.y, a)
							? (a.stopPropagation(), a.preventDefault())
							: c.ra.Wb &&
							  !1 !== c.ra.Wb(r.x, r.y, a) &&
							  (a.stopPropagation(), a.preventDefault());
			};
			f.pa("up", v);
			f.pa("tap", function(a) {
				c.log(a.toString());
				c.ra.fq &&
					((r = c.Jf(a)),
					!1 !== c.ra.fq(r.x, r.y, a) &&
						(a.stopPropagation(), a.preventDefault()));
			});
			f.pa("drag", function(a) {
				c.log(a.toString());
				d.ni(a) ||
					(d.xa.df && d.xa.df.Gm(r.x, r.y, a)
						? (a.stopPropagation(), a.preventDefault())
						: c.ra.Gm &&
						  ((r = c.Jf(a)),
						  !1 !== c.ra.Gm(r.x, r.y, a) &&
								(a.stopPropagation(), a.preventDefault())));
			});
			f.pa("doubletap", function(a) {
				c.log("doubletap: " + a.toString());
				a.startTime < d.mu
					? c.log("ignoring doubletap: " + a.toString())
					: (c.log("doubletap: " + a.toString()),
					  c.ra.eq &&
							((r = c.Jf(a)),
							!1 !== c.ra.eq(r.x, r.y, a) &&
								(a.stopPropagation(), a.preventDefault())));
			});
			this.ya.addEventListener(this.Qc, "pointerleave", function(a) {
				c.ra.bv &&
					((r = c.Jf(a)),
					!1 !== c.ra.bv(r.x, r.y, a) &&
						(a.stopPropagation(), a.preventDefault()));
			});
			this.ya.addEventListener(this.Qc, "contextmenu", function(a) {
				var b = c.Jf(a);
				c.ra.Yu && !1 !== c.ra.Yu(b.x, b.y, a)
					? (a.stopPropagation(), a.preventDefault())
					: c.log("Pass contextmenu to browser");
			});
			this.ya.addEventListener(this.Qc, "mouseenter", b);
			this.ya.addEventListener(this.Qc, "mouseleave", b);
			this.ya.addEventListener(this.Qc, "mouseover", b);
			this.ya.addEventListener(this.Qc, "mouseout", b);
			!window.parent && this.ha.get("setFocus") && this.Qc.focus();
			f.pa("wheel", function(a) {
				if (!d.ni(a)) {
					var b = a.Pz();
					r = c.Jf(a);
					if (!c.ra.gq || !1 === c.ra.gq(r.x, r.y, b, a.sb)) {
						if (a.ctrlKey && d.ha.get("allowZoom"))
							d.Gw(0 > b.y ? 1 / 1.1 : 1.1, r.x, r.y);
						else {
							var e = c.$f(),
								f = c.Ub(),
								h = 20 / d.scale;
							b.x &&
								c.Cd.wu() &&
								((f.x += 0 < b.x ? h : -h),
								f.right() > e.right() && (f.x -= f.right() - e.right()),
								f.x < e.x && (f.x = e.x));
							b.y &&
								c.Gc.wu() &&
								((f.y += 0 < b.y ? h : -h),
								f.bottom() > e.bottom() && (f.y -= f.bottom() - e.bottom()),
								f.y < e.y && (f.y = e.y));
							c.Qe(f);
						}
						a.stopPropagation();
						a.preventDefault();
					}
				}
			});
			this.ya.addEventListener(this.Qc, "drop", a);
			this.ya.addEventListener(this.Qc, "dragenter", a);
			this.ya.addEventListener(this.Qc, "dragleave", a);
		};
		c.prototype.bk = function(a) {
			this.log("Received clipboard event: %s", a.type);
			if (u.sf(a.target))
				this.log("   ignored due to being in a " + a.target.tagName);
			else if (this.ha.get("allowSystemClipboard"))
				if (null === a.clipboardData)
					this.log("Ignored; clipboardData is null.");
				else {
					var b = this;
					switch (a.type) {
						case "copy":
						case "cut":
							if (!this.gu()) break;
							this.log("Cut to system clipboard.");
							var d = this.Bg(!0, this.Tc(!1));
							a.clipboardData.setData("application/zwibbler", d);
							a.preventDefault();
							"cut" === a.type && this.ej();
							break;
						case "paste":
							if (this.ha.get("readOnly"))
								this.log("Ignore paste; we are in readOnly mode.");
							else
								for (
									this.log(
										"There are %s items on the clipboard",
										a.clipboardData.items.length,
									),
										d = 0;
									d < a.clipboardData.items.length;
									d++
								) {
									var c = a.clipboardData.items[d];
									this.log("Item [%s] type is %s", d, c.type);
									if (b.sq(c)) {
										a.preventDefault();
										break;
									} else if ("application/zwibbler" === c.type) {
										this.log("Pasting from system clipboard");
										c.getAsString(function(a) {
											b.ek(a);
										});
										a.preventDefault();
										break;
									}
								}
					}
				}
			else this.log("   ignored due to allowSystemClipboard setting.");
		};
		c.prototype.mf = function() {
			return this.Qc;
		};
		c.prototype.sq = function(a, b, d) {
			var c = this;
			if (0 !== a.type.indexOf("image/")) return !1;
			a instanceof Blob || (a = a.getAsFile());
			if ("number" === typeof b && "number" === typeof d) {
				b = this.ae(b, d);
				var f = b.x;
				var h = b.y;
			}
			if (!1 === this.xa.xc("paste", a, f, h))
				this.log("paste of file is cancelled by external app.");
			else {
				var k = new FileReader();
				k.readAsDataURL(a);
				k.onloadend = function() {
					c.Zp({ url: k.result }, f, h);
				};
				return !0;
			}
		};
		c.prototype.JA = function(a, b) {
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
					this.Ra.nc = !this.Ra.nc;
					var h = this.Ra.nc ? "down" : "up";
			}
			if (d || c)
				(h = this.kf(!1)),
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
				  (c = this.Kc),
				  (d = this.Ra.x + c.x - window.pageXOffset),
				  (a = this.Ra.y + c.y - window.pageYOffset),
				  (c = this.ae(d, a)),
				  this.log("Simulate a %s at (%s,%s)", h, d, a),
				  (b = new ge(
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
						!1,
				  )),
				  ("down" !== h && "tap" !== h) ||
						!this.ra.wb ||
						this.ra.wb(c.x, c.y, b),
				  "move" === h && this.ra.Cb && this.ra.Cb(c.x, c.y, b),
				  ("up" !== h && "tap" !== h) || !this.ra.Wb || this.ra.Wb(c.x, c.y, b),
				  !0)
				: !1;
		};
		c.prototype.Wq = function(a) {
			void 0 === a && (a = !1);
			this.Ra.Mb = !0;
			this.Ra.nc = !1;
			this.Ra.po = a;
			this.log("Showing keyboard cursor, caret=%s", a);
			this.la();
		};
		c.prototype.uD = function(a) {
			this.Ra.Mb = !0;
			this.Ra.po = !1;
			if (0 < this.selection.length) {
				this.log("showKeyboardCursorAndStartMoving()");
				this.Ra.nc = !0;
				var b = this.be.Sd();
				this.Ra.x = b.x;
				this.Ra.y = b.y;
				this.yb();
				this.Xa(
					new De(
						this,
						new xe(re, this.selection[0].Na(), this.selection[0].za),
						!1,
						b.x - 4,
						b.y - 4,
						he(a, a),
						!1,
					),
				);
			}
			this.la();
		};
		c.prototype.ju = function() {
			this.Ra.Mb &&
				(this.log("Hiding keyboard cursor"), (this.Ra.Mb = !1), this.la());
		};
		c.prototype.WA = function(a) {
			var b = this.Kc,
				d = this.Gc.Pg();
			var c = a.pageX - b.x;
			a = a.pageY - b.y;
			b = this.kf(!1);
			return this.rg && c > b.width - this.rg.width - d && a < this.rg.height;
		};
		c.prototype.xu = function() {
			return this.ha.kE(this.Cu);
		};
		c.prototype.vp = function(a) {
			return "number" === typeof a
				? a || this.ha.get("snap") || 0
				: a.altKey
				? 0
				: this.ha.get("snap") || 0;
		};
		c.prototype.ob = function(a, b) {
			var d = this.vp(b);
			0 < d
				? ((b = Math.round(a.x / d) * d), (a = Math.round(a.y / d) * d))
				: ((b = a.x), (a = a.y));
			return new F(b, a);
		};
		c.prototype.Td = function(a, b) {
			void 0 === b && (b = this.Tc(!1));
			this.aa.ab();
			this.aa.Td(b, a);
			this.aa.wa();
		};
		c.prototype.setProperty = function(a, b) {
			var d = this.Tc(!0);
			this.sa[a] = b;
			if (d.length) {
				this.aa.ab();
				this.aa.Ld(d, a, b);
				if ("fillStyle" === a)
					for (var c = 0; c < d.length; c++) {
						var f = this.aa.Aa(d[c], !1);
						f &&
							(this.log("nodeType=%s closed=%s", f.type(), f.ia("closed")),
							"PathNode" === f.type() &&
								!1 === f.ia("closed") &&
								this.aa.Ld([d[c]], "strokeStyle", b));
					}
				this.aa.wa();
			}
			0 < this.selection.length &&
			"lineWidth" === a &&
			"BrushNode" === this.selection[0].type()
				? (this.Nh = b)
				: "textFillStyle" === a && (this.sa.textFillStyle = b);
		};
		c.prototype.kd = function(a, b) {
			this.ra.kd && this.ra.kd(a, b);
			this.ra.me &&
				("strokeStyle" === a
					? this.ra.me(b, !1)
					: "fillStyle" === a && this.ra.me(b, !0));
		};
		c.prototype.Sl = function() {
			return this.sa.fillStyle;
		};
		c.prototype.Cj = function() {
			return this.sa.strokeStyle;
		};
		c.prototype.Uq = function(a, b) {
			this.log("setSelectionOpacity(%s, fill=%s)", a, b);
			var d = this.Tc(!0);
			this.aa.ab();
			b = b ? "fillStyle" : "strokeStyle";
			for (var c = 0; c < d.length; c++) {
				var f = d[c],
					h = this.aa.Aa(f);
				h &&
					(h = h.ia(b)) &&
					((h = fc(h, a)),
					this.aa.Ld([f], b, h),
					this.log("   set %s of %s to %s", b, f, h));
			}
			this.aa.wa();
		};
		c.prototype.group = function() {
			var a = this;
			this.aa.transaction(function() {
				a.aa.group(a.Tc(!1));
			});
		};
		c.prototype.Ei = function() {
			var a = this;
			this.aa.transaction(function() {
				a.aa.Ei(a.Tc(!1));
			});
		};
		c.prototype.ej = function() {
			var a = this;
			this.aa.transaction(function() {
				a.aa.ac(a.Tc(!1));
			});
		};
		c.prototype.rb = function(a) {
			void 0 === a && (a = !1);
			var b = !1;
			if (0 < this.selection.length) {
				b = 0;
				for (var d = this.selection; b < d.length; b++) {
					var c = d[b];
					Rc(c) && c.da.classList.remove("zwibbler-selected");
				}
				this.Vc += 1;
				this.selection.length = 0;
				b = !0;
			}
			null !== this.ze &&
				(this.xa.ta("selected-edit-handle", null, null), (b = !0));
			this.Ja &&
				(this.log("Clear edit node."), (this.ze = this.Ja = null), (b = !0));
			b && a && (this.mc(), this.la());
		};
		c.prototype.Ye = function(a, b) {
			void 0 === b && (b = !0);
			this.kg(null);
			if (a.Vc !== this.Vc && this.Tb.has(a.zc())) {
				this.selection.push(a);
				a.Vc = this.Vc;
				Rc(a) &&
					(a.da.classList.add("zwibbler-selected"),
					this.log("Added to selection: %s", a.id));
				if (a.sm()) {
					for (var d = a.parent, c = 0; c < d.children.length; c++) {
						var f = d.nb(c);
						L(f) && this.Ye(f);
					}
					L(d) && this.Ye(d);
				}
				if ("GroupNode" === a.type())
					for (d = 0; d < a.children.length; d++)
						(f = a.nb(d)), L(f) && this.Ye(f);
				if (this.ha.get("autoGroup") && b)
					for (b = 0, a = this.aa.Dz(a); b < a.length; b++) this.Ye(a[b], !1);
			}
		};
		c.prototype.selectNodes = function(a) {
			this.rb();
			for (var b = 0; b < a.length; b++)
				a[b].ia("locked") || "PageNode" === a[b].type() || this.Ye(a[b]);
			this.mc();
		};
		c.prototype.KC = function(a, b) {
			var d = this.aa.Gb(a, !1);
			d
				? d.pf() &&
				  (d.su()
						? (d !== this.Ja && this.kg(d),
						  this.log("Select edit handle %s", b),
						  (this.ze = b),
						  this.xa.ta("selected-edit-handle", a, b))
						: this.log("selectEditHandle: That handle is not selectable."))
				: this.log("selectEditHandle: nodeid %s does not exist.", a);
		};
		c.prototype.JC = function(a) {
			a = this.aa.sA(a);
			for (var b = 0; b < a.length; b++) this.Ye(a[b]);
		};
		c.prototype.mc = function() {
			this.Ih();
			this.xa.Jg("selected-nodes");
			this.la();
		};
		c.prototype.wq = function() {
			for (var a = 0, b = this.fm; a < b.length; a++) {
				var d = b[a];
				"" !== d.Vg && this.mm.release(d.Vg);
			}
			this.fm.length = 0;
		};
		c.prototype.Pd = function(a, b, d, c, f, h, k, l) {
			this.fm.push({
				type: h,
				position: new F(a, b),
				offset: new F(d, c),
				Vg: f,
				Rs: k,
				iw: l,
			});
			"" !== f && this.mm.add(f, f);
		};
		c.prototype.Ih = function() {
			var a;
			this.lk = this.mk = this.Xm = !0;
			var b = !1;
			this.qh.length = 0;
			if (0 !== this.selection.length) {
				for (a = 0; a < this.selection.length; a++) {
					var d = this.selection[a];
					if ("GroupNode" !== d.type()) {
						0 === a ? (this.be = d.rect.clone()) : this.be.wh(d.rect);
						this.be.wh(d.rect);
						if (d.ia("lockSize") || 5 === (d.lb & 5)) this.Xm = !1;
						d.ia("lockRotation") && (this.mk = !1);
						d.ia("lockAspectRatio") && (b = !0);
						d.ia("lockPosition") && (this.lk = !1);
					}
				}
				this.Lq =
					1 === this.selection.length
						? this.selection[0].Ml()
						: new Bc(this.be);
				if (this.xu()) {
					if (1 < this.selection.length) {
						d = new J();
						a = null;
						var c = this.be;
					} else (a = this.selection[0]), (c = a.za), (d = a.Na());
					var f = !1;
					a && a.pf() && a.Vq() && (this.kg(a), (f = !0));
					for (var h = this.xa.Vh(), k = 0, l = this.fm; k < l.length; k++) {
						var n = l[k];
						if (n.iw && !n.iw(h)) return;
						if ("scale" === n.type) {
							if (!this.ha.get("allowResize") || !this.Xm) continue;
							if (
								"scale" === n.type &&
								((0 !== n.position.x && 1 !== n.position.x) ||
									(0 !== n.position.y && 1 !== n.position.y)) &&
								b
							)
								continue;
							if (f) continue;
						} else if ("rotate" === n.type && (!this.mk || f)) continue;
						this.qh.push(Ae(n, c, d));
					}
					if (this.mk && a && a.ia("rotationHandles"))
						for (b = a.ia("rotationHandles"), a = 0; a < b.length; a += 4)
							(f = new F(b[a + 2], b[a + 3])),
								this.qh.push(new we(se, d, c, f));
				}
			}
		};
		c.prototype.Xx = function() {
			for (var a = 0, b = 0; b < this.selection.length; b++)
				b !== a && (this.selection[a] = this.selection[b]),
					this.aa.ed(this.selection[b].id) && (a += 1);
			this.selection.length !== a && (this.selection.length = a);
			this.Ja &&
				!this.aa.ed(this.Ja.id) &&
				((this.Ja = null),
				null !== this.ze && this.xa.ta("selected-edit-handle", null, null),
				(this.ze = null));
		};
		c.prototype.qv = function(a, b) {
			return this.selection.length && this.Lq.Mc(a, b);
		};
		c.prototype.gu = function() {
			return 0 !== this.selection.length || null !== this.Ja;
		};
		c.prototype.ec = function() {
			var a = this.selection.concat();
			this.Ja && !this.Wg(this.Ja) && a.push(this.Ja);
			return a;
		};
		c.prototype.rA = function(a) {
			if (0 === a.length) return new F(0, 0);
			for (var b = a[0].rect.clone(), d = 1; d < a.length; d++) b.wh(a[d].rect);
			return b.Sd();
		};
		c.prototype.Wt = function(a) {
			for (var b = [], d = 0; d < a.length; d++) b.push(a[d].id);
			return b;
		};
		c.prototype.dm = function() {
			var a = this.Kc.clone();
			this.ha.get("showRuler") && ((a.x += 20), (a.y += 20));
			return new J()
				.multiply(new sc(1 / this.scale, 1 / this.scale))
				.multiply(new qc(-this.Db, -this.Eb))
				.multiply(new qc(-a.x, -a.y));
		};
		c.prototype.Tc = function(a) {
			var b = this.ec();
			a || (b = this.aa.pl(b));
			return this.Wt(b);
		};
		c.prototype.Yo = function(a) {
			for (var b = null, d = 0; d < a.length; d++) {
				var c = this.aa.Gb(a[d]);
				c &&
					0 == (c.lb & 2) &&
					(null === b ? (b = c.rect.clone()) : b.wh(c.rect));
			}
			null === b && (b = new G(0, 0, 0, 0));
			return b;
		};
		c.prototype.update = function(a, b) {
			void 0 === a && (a = !1);
			if (this.aa.format(this.ma, this.request) || a) this.Ih(), this.la(b);
		};
		c.prototype.Dg = function() {
			var a = this,
				b = this.ha.get("background");
			this.Qi && (b = this.Qi.ia("background") || b);
			this.background.RC(b);
			this.mo = b;
			this.hl = {};
			var d = [];
			this.aa.wc(function(b) {
				"background" === b.zc() &&
					a.aa.tm("background") &&
					(d.push(b), (a.hl[b.id] = !0), b.lg(!0));
			});
			this.background.PC(d);
		};
		c.prototype.gf = function(a, b, d, c, f, h, k, l, n) {
			this.Qi !== this.aa.De() && ((this.Qi = this.aa.De()), this.Dg());
			k *= b;
			var e = this.background.yA(a, new G(d, c, f, h), k);
			a.save();
			a.scale(1 / k, 1 / k);
			a.translate(-l * b, -n * b);
			a.fillStyle = e;
			a.fillRect(0, 0, f * k, h * k);
			a.restore();
			a.ax = function() {
				a.strokeStyle = e;
				a.lineWidth *= k;
				a.scale(1 / k, 1 / k);
				a.translate(-l * b, -n * b);
				a.stroke();
			};
			a.Li = e;
		};
		c.prototype.Uy = function(a, b) {
			var d = this.aa.sp();
			a.beginPath();
			a.fillStyle = q.Zc;
			this.ha.get("pageShadow") &&
				((a.shadowOffsetX = 3),
				(a.shadowOffsetY = 3),
				(a.shadowBlur = 5),
				(a.shadowColor = "rgba(0,0,0,1.0)"));
			a.rect(0, 0, d.width, d.height);
			a.fill();
			a.shadowColor = q.We;
			a.shadowBlur = 0;
			a.shadowOffsetX = 0;
			a.shadowOffsetY = 0;
			a.strokeStyle = this.ha.get("pageBorderColour");
			a.stroke();
			var c = this.Ub().clone();
			c.ru(d);
			this.gf(
				a,
				b,
				c.x,
				c.y,
				c.width,
				c.height,
				this.scale,
				0 > c.x ? c.x : -c.x * this.scale,
				0 > c.y ? c.y : -c.y * this.scale,
			);
		};
		c.prototype.pk = function(a) {
			a
				? this.log("Setting a custom background function.")
				: this.log("Clearing custom background function.");
			this.background.pk(a);
			this.Dg();
		};
		c.prototype.Ty = function(a) {
			if (this.Ra.Mb) {
				var b = this.Ra.x,
					d = this.Ra.y,
					c = this.Ot();
				a.save();
				a.setTransform(c, 0, 0, c, 0, 0);
				a.beginPath();
				this.Ra.po
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
				this.Ra.nc && this.ma.arc(b, d, 8, 0, 2 * Math.PI, !1);
				a.lineWidth = 2;
				a.strokeStyle = q.Oa;
				a.stroke();
				a.restore();
			}
		};
		c.prototype.Id = function(a, b) {
			this.canvas.mg(a, b);
			a = this.ha.get("showRuler") ? 20 : 0;
			b = u(this.canvas.first).pc();
			var d = u(this.canvas.first.parentElement).pc(),
				c = this.canvas.width,
				f = this.canvas.height,
				h = b.left - d.left;
			d = b.top - d.top;
			this.Gc.moveTo(h + c - 20, d + a);
			this.Gc.mg(20, f - 20);
			this.Cd.moveTo(h + a, d + f - 20);
			this.Cd.mg(c - 20, 20);
			this.Kc = new G(b.left, b.top, b.width, b.height);
			a = this.canvas.cp();
			a !== this.he &&
				((this.he = a),
				this.log("Detected DPR change to %s", this.he),
				this.ra.Id && this.ra.Id());
			this.ha.get("zoomOnResize") &&
				(1 > this.scale && this.ce(1),
				(a = this.$f()),
				(b = this.Ub()),
				(c = !1),
				a.x < b.x && ((b.width += b.x - a.x), (b.x = a.x), (c = !0)),
				a.y < b.y && ((b.height += b.y - a.y), (b.y = a.y), (c = !0)),
				a.x + a.width > b.x + b.width &&
					((b.width += a.x + a.width - b.x - b.width), (c = !0)),
				a.y + a.height > b.y + b.height &&
					((b.height += a.y + a.height - b.y - b.height), (c = !0)),
				c && this.Qe(b));
			this.ui();
			this.la();
		};
		c.prototype.ui = function() {
			if (!this.Np()) {
				var a = this.$f(),
					b = this.kf(!0);
				b = new G(0, 0, b.width, b.height);
				(a.dd(this.bq) && b.dd(this.aq)) ||
					!this.ce(this.se) ||
					((this.bq = a), (this.aq = b));
			}
		};
		c.prototype.Ss = function(a) {
			if (this.Gf && this.ha.get("clipToPage")) {
				var b = this.aa.sp();
				a.save();
				a.beginPath();
				a.rect(0, 0, b.width, b.height);
				a.clip();
			}
			return this.Gf;
		};
		c.prototype.la = function(a) {
			var b = this;
			this.Np() ||
				this.canvas.Kd(0, "main", function(d, c) {
					d.globalAlpha = 1;
					b.kt(d, c, a);
				});
		};
		c.prototype.kt = function(a, b, d) {
			if (!this.xa.Oh) {
				var c = this.Ub();
				this.Gf &&
					((a.fillStyle = this.ha.get("outsidePageColour")),
					a.fillRect(0, 0, this.canvas.width, this.canvas.height));
				a.translate(this.Db, this.Eb);
				a.scale(this.scale, this.scale);
				this.ha.get("showRuler") &&
					a.translate(20 / this.scale, 20 / this.scale);
				var f = new qc(this.Db, this.Eb);
				f = f.multiply(new sc(this.scale, this.scale));
				a.Ii = f;
				a.pF = this.scale;
				this.Gf
					? this.Uy(a, b)
					: this.gf(
							a,
							b,
							c.x,
							c.y,
							c.width,
							c.height,
							this.scale,
							this.Db,
							this.Eb,
					  );
				this.aa.tD();
				f = this.Ss(a);
				this.aa.la(a, c, this.Zn);
				this.xa.xe && (a.save(), this.xa.xe(a), a.restore());
				f && a.restore();
				0 < this.selection.length &&
					this.xu() &&
					(a.save(), this.Wy(a), a.restore());
				this.Ja && this.Ja.kj(a, 1 / this.scale, this.ze);
				"" !== this.$h &&
					this.ha.get("showHints") &&
					(a.save(),
					(a.font = 15 / this.scale + "px Arial"),
					(a.fillStyle = q.Oa),
					(a.textBaseline = "top"),
					a.fillText(this.$h, 0, 0),
					a.restore());
				this.Ty(a);
				this.ra.dv && this.ra.dv(a);
				d && d(a);
				this.xa.xc("draw", a);
				this.ha.get("showRuler") &&
					(a.setTransform(b, 0, 0, b, 0, 0),
					(b = this.ha.get("pixelsPerUnit") * this.scale),
					(d = this.ha.get("units")),
					(a.fillStyle = "#ccc"),
					a.fillRect(0, 0, 20, 20),
					Ed(a, new G(20, 0, this.canvas.width - 20, 20), 0, d, b, -this.Db),
					Ed(a, new G(0, 20, 20, this.canvas.height - 20), 2, d, b, -this.Eb));
				a.setTransform(1, 0, 0, 1, 0, 0);
				0 < this.selection.length &&
					this.rg &&
					this.rg.naturalWidth &&
					((b = this.rg.width),
					a.drawImage(this.rg, this.canvas.width - b - this.Gc.Pg(), 0));
				this.jj &&
					this.jj.complete &&
					this.jj.naturalWidth &&
					((b = this.jj.naturalWidth),
					a.drawImage(this.jj, this.canvas.width - b - this.Gc.Pg(), 0));
				a.globalAlpha = 1;
			}
		};
		c.prototype.Bv = function(a, b) {
			var d = this;
			this.ha.get("fastDraw")
				? this.canvas.Kd(1, a, function(a) {
						a.translate(d.Db, d.Eb);
						a.scale(d.scale, d.scale);
						d.ha.get("showRuler") && a.translate(20 / d.scale, 20 / d.scale);
						b(a);
				  })
				: this.la(b);
		};
		c.prototype.so = function(a) {
			this.ha.get("fastDraw") ? this.canvas.Kd(1, a, function() {}) : this.la();
		};
		c.prototype.Wy = function(a) {
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
						((f = new K(f.za)),
						f.transform(h),
						f.Al(a, [3 / this.scale, 3 / this.scale]),
						b++,
						d ? d.wh(f.kl(5)) : (d = f.kl(5))));
			}
			if (0 !== b)
				for (
					a.stroke(), h = d ? Math.min(d.width, d.height) : 0, c = 0;
					c < this.qh.length;
					c++
				)
					this.qh[c].la(a, this.mm, this.scale, this.Kq, h);
		};
		c.prototype.kg = function(a) {
			this.Ja = a;
		};
		c.prototype.gp = function() {
			return this.Ja;
		};
		c.prototype.tn = function(a) {
			this.Kq = a;
		};
		c.prototype.Wg = function(a) {
			return a.Vc === this.Vc;
		};
		c.prototype.Qt = function(a, b) {
			for (
				var d = this.ha.get("touchRadius") || this.Rr, c = null, f = 0;
				f < this.qh.length;
				f++
			) {
				var h = this.qh[f];
				if (h.Ib(this.mm, a, b, d, this.scale)) {
					c = h;
					break;
				}
			}
			return c;
		};
		c.prototype.Wc = function() {
			this.xw(!1);
		};
		c.prototype.qe = function() {
			this.xw(!0);
		};
		c.prototype.xw = function(a) {
			if (a ? this.aa.$e() : this.aa.af())
				a ? this.aa.qe() : this.aa.Wc(),
					(a = this.aa.ei),
					this.log("Most recent change page=%s", a),
					a !== this.aa.cb
						? (this.log("Undo/redo switched page %s->%s", this.aa.cb, a),
						  this.Dc(a))
						: this.la(),
					this.Yg(!1);
		};
		c.prototype.Fm = function(a, b, d, c, f) {
			var e = this;
			if (b.length && !a) {
				for (var k = [], l = 0; l < b.length; l++) {
					var n = this.aa.Gb(b[l], !1);
					n && k.push(n);
				}
				this.ha.get("autoPickTool") && this.selectNodes(k);
			} else if (this.selection.length || this.Ja) {
				k = 0;
				this.Vc += 1;
				n = this.aa.cb;
				for (l = 0; l < this.selection.length; l++)
					l !== k && (this.selection[k] = this.selection[l]),
						(this.aa.ed(this.selection[k].id) &&
							this.aa.lf(this.selection[k].id) === n) ||
						this.aa.VA(this.selection[k])
							? ((this.selection[k].Vc = this.Vc), k++)
							: this.log(
									"Node no longer exists; removing from selection %s",
									this.selection[k],
							  );
				this.selection.length !== k && (this.selection.length = k);
				this.Ja &&
					!this.aa.ed(this.Ja.id) &&
					(this.log("EditNode %s no longer exists", this.Ja.id),
					(this.Ja = null),
					null !== this.ze && this.xa.ta("selected-edit-handle", null, null),
					(this.ze = null));
				0 !== this.selection.length || this.Ja || this.rb();
				this.mc();
			}
			this.aa.format(this.ma, this.request);
			this.Xx();
			this.Ih();
			this.ui();
			this.wd();
			this.la();
			this.og.clear();
			this.aa.wc(function(a) {
				5 === (a.lb & 5) && e.og.zs(a.rect, a.id);
			});
			this.IA({ dl: b, Sm: d, wn: c, ba: f }, a);
			this.Yg(a);
		};
		c.prototype.Do = function() {
			this.Bg(!1, this.Tc(!0));
			this.ej();
		};
		c.prototype.Bg = function(a, b) {
			b = this.aa.rp(b, !1);
			var d = this.aa.HC(b);
			0 < b.length &&
				(!0 !== a && wf.setItem("clipboard", d),
				this.log("Reset paste offset to 0"),
				(this.Dk = this.Ck = 0));
			return d;
		};
		c.prototype.duplicate = function() {
			var a = this,
				b = this.Tc(!1),
				d = this.ha.get("pasteOffset"),
				c = d || this.ha.get("pasteOffsetX"),
				f = d || this.ha.get("pasteOffsetY");
			this.aa.transaction(function() {
				a.aa.duplicate(b, new qc(c, f));
			});
		};
		c.prototype.ek = function(a) {
			var b = this;
			if (!a) {
				var d = wf.getItem("clipboard");
				if (d) a = d;
				else return;
			}
			var c = this.ha.get("pasteOffset");
			d = c || this.ha.get("pasteOffsetX");
			c = c || this.ha.get("pasteOffsetY");
			this.Ck += d;
			this.Dk += c;
			this.log("Using paste offset %s,%s", this.Ck, this.Dk);
			var f = new qc(this.Ck, this.Dk);
			this.aa.transaction(function() {
				b.aa.Gu(a, f, b.ad);
			});
		};
		c.prototype.bn = function(a) {
			"" !== a
				? ((this.$h = this.language.get(a)), this.xa.ta("hint", this.$h))
				: ((this.$h = ""), this.xa.ta("hint", ""));
		};
		c.prototype.yb = function() {
			return this.Xa(new Gf(this));
		};
		c.prototype.xy = function() {
			return requestAnimationFrame.name.substr(0, 2) + "d";
		};
		c.prototype.Xa = function(a) {
			this.ra && this.ra.Ac && this.ra.Ac();
			this.ra = a;
			a.Ad && a.Ad();
			a.Bd && this.xa.ta("tool-changed", a.Bd());
			10 === this.code && 0.25 > this.AC && this.kd("fillStyle", this.xy());
			return a;
		};
		c.prototype.Sh = function() {
			var a = null;
			this.ra.Bd && (a = this.ra.Bd());
			return a;
		};
		c.prototype.lr = function(a) {
			a = new Fe(this, a);
			this.Xa(a);
			return a;
		};
		c.prototype.hr = function(a) {
			this.ra instanceof Fe && this.ra.CD(a);
		};
		c.prototype.Fu = function(a, b, d, c) {
			this.Xa(new Ff(this, "line", a, b, d, c));
		};
		c.prototype.Ho = function(a) {
			a.lineWidth = a.lineWidth || this.Nh;
			a.strokeStyle = a.strokeStyle || this.lc;
			this.Xa(new Ef(this, a, "brush"));
		};
		c.prototype.Xy = function(a) {
			a.lineWidth = a.lineWidth || this.Nh;
			a.strokeStyle = a.strokeStyle || this.lc;
			this.Xa(new Ef(this, a, "shapebrush"));
		};
		c.prototype.jt = function(a, b) {
			a.lineWidth = a.lineWidth || this.Nh;
			a.strokeStyle = a.strokeStyle || this.lc;
			this.Xa(new Ef(this, a, b));
		};
		c.prototype.$s = function(a) {
			this.Xa(new Ff(this, "curve", a));
		};
		c.prototype.Fx = function(a, b) {
			this.Xa(new Ff(this, "arrow", a, b));
		};
		c.prototype.$f = function() {
			var a = this.ha.get("pageInflation");
			if (this.Gf) {
				a = this.aa.sp();
				var b = this.ha.get("pageInflation");
				a.Fd(b, b);
			} else a = this.ag(this.aa.cb, a);
			return a;
		};
		c.prototype.ag = function(a, b) {
			void 0 === a && (a = this.aa.cb);
			void 0 === b && (b = 0);
			var d = new lc(0, 0);
			this.ha.get("pageView") && (d = ig);
			d = this.aa.fd(a, d);
			0 === d.width &&
				0 === d.height &&
				((d = this.Ub()),
				(d.x = 0),
				(d.y = 0),
				(d.width *= this.scale),
				(d.height *= this.scale),
				(a = this.aa.Xo(a)),
				this.aa.RA(a) || a.Fd(b),
				d.wh(a));
			return d;
		};
		c.prototype.ur = function() {
			var a = this.Kc.clone(),
				b = this.kf(!1);
			a.x += b.x;
			a.y += b.y;
			var d = u(this.Qc).pc(),
				c = a.x - d.left;
			a = a.y - d.top;
			this.aa.Ed.style.transform =
				"translate(" +
				(this.Db + b.x) +
				"px, " +
				(this.Eb + b.y) +
				"px) scale(" +
				this.scale +
				")";
			this.xk.style.transform =
				"translate(" +
				(this.Db + c) +
				"px, " +
				(this.Eb + a) +
				"px) scale(" +
				this.scale +
				")";
		};
		c.prototype.wd = function() {
			if (!this.Np())
				if (
					(this.ur(),
					this.xa.ta("scroll"),
					this.ha.get("scrollbars") && this.ha.get("allowScroll"))
				) {
					var a = this.kf(!1),
						b = this.$f(),
						d = this.Ub(),
						c = !1,
						f = !1;
					d.y <= b.y && d.bottom() >= b.bottom()
						? this.Gc.rf()
						: (this.Gc.show(),
						  this.Gc.ew(
								Math.min(d.y, b.y),
								Math.max(d.bottom(), b.bottom()),
								d.height,
								-this.Eb / this.scale,
						  ),
						  (c = !0));
					d.x <= b.x && d.right() >= b.right()
						? this.Cd.rf()
						: (this.Cd.show(),
						  this.Cd.ew(
								Math.min(d.x, b.x),
								Math.max(d.right(), b.right()),
								d.width,
								-this.Db / this.scale,
						  ),
						  (f = !0));
					f && c
						? (this.Gc.mg(20, a.height - 20), this.Cd.mg(a.width - 20, 20))
						: c
						? this.Gc.mg(20, a.height)
						: f && this.Cd.mg(a.width, 20);
					this.aa.Iq(d);
				} else this.Gc.rf(), this.Cd.rf();
		};
		c.prototype.yi = function(a, b, d) {
			this.log("Set document size %s,%s", a, b);
			this.aa.ab();
			this.aa.setProperty("width", a);
			this.aa.setProperty("height", b);
			this.aa.wa(d);
			this.wd();
			this.ui();
			this.Yg(!1);
		};
		c.prototype.Am = function(a, b, d) {
			var c = this;
			if (this.lk)
				if (this.Ra.Mb) this.log("Not nudging; keyboard cursor shown.");
				else {
					a *= d / this.scale;
					b *= d / this.scale;
					this.log("Nudge selection by %s, %s", a, b);
					var f = this.Tc(!0),
						h = new qc(a, b);
					this.aa.transaction(function() {
						c.aa.qg(f, h);
					});
					return 0 < f.length;
				}
			else this.log("Can't nudge; selection motion is locked.");
		};
		c.prototype.am = function(a, b) {
			return jc(
				a,
				this.xs({
					fillStyle: this.vc,
					strokeStyle: this.bd,
					textFillStyle: this.sa.textFillStyle,
					seed: Math.round(65535 * Math.random()),
					lineWidth: this.eo(this.sa.lineWidth),
					roughness: this.sa.roughness,
					sloppiness: this.sa.sloppiness,
					layer: this.ad,
					wrap: this.ha.get("multilineText"),
					fontSize: this.ha.get("defaultFontSize"),
					fontName: this.ha.get("defaultFont"),
					dashes: this.sa.dashes,
				}),
				b,
			);
		};
		c.prototype.Gk = function(a) {
			var b = new O();
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
			a = this.am({ commands: b.rc() }, a);
			this.log("Create an item on layer %s", this.ad);
			this.Xa(
				new Hf(this, "PathNode", a, 100, 100, "rectangle", "rectangle", null),
			);
		};
		c.prototype.yr = function(a, b, d, c) {
			var e = 0,
				h = 0;
			"matrix" in c &&
				((e = c.matrix.m12), (h = c.matrix.m21), delete c.matrix);
			var k = G.xh(Oc(a, 50, b, d, c.matrix));
			c = this.am(
				{
					sides: a,
					rotation: b,
					radius: 50,
					oddRadiusScaling: d,
					skewX: e,
					skewY: h,
				},
				c,
			);
			this.log("Create an item on layer %s", this.ad);
			this.Xa(
				new Hf(
					this,
					"PathNode",
					c,
					k.width,
					k.height,
					this.ha.Pt(),
					"polygon",
					null,
				),
			);
		};
		c.prototype.SB = function() {
			this.Xa(new Jf(this));
		};
		c.prototype.zn = function(a) {
			a = this.am({ commands: yd() }, a);
			this.Xa(
				new Hf(this, "PathNode", a, 100, 100, this.ha.Pt(), "circle", null),
			);
		};
		c.prototype.zr = function(a, b, d, c, f, h) {
			"PathNode" === a && (b = this.am({}, b));
			this.Xa(new Hf(this, a, b, d, c, f, "shape", h));
		};
		c.prototype.fE = function(a, b) {
			this.Xa(new If(this, a, b));
		};
		c.prototype.xr = function(a) {
			var b = this.aa.Gb(a, !1);
			b
				? b.pf()
					? (this.yb(), this.rb(), this.mc(), this.kg(b), this.la())
					: this.log(
							"useEditHandleTool: nodetype %s has no edit mode",
							b.type(),
					  )
				: this.log("useEditHandleTool: node %s doesn't exist.", a);
		};
		c.prototype.xs = function(a) {
			"layer" in a || "default" === this.ad || (a = jc({ layer: this.ad }, a));
			return a;
		};
		c.prototype.Zp = function(a, b, d) {
			var c = this;
			return new Promise(function(e) {
				function f(b) {
					b =
						b instanceof HTMLImageElement
							? new lc(b.naturalWidth, b.naturalHeight)
							: new lc(b.width, b.height);
					b.zt(a.width, a.height);
					return b;
				}
				function k(f, h) {
					var k = c.Ub(),
						l = k.Sd();
					"number" === typeof b && "number" === typeof d && (l = new F(b, d));
					var n = Math.min(1, k.width / h.width);
					n = Math.min(n, k.height / h.height);
					l.x -= (h.width * n) / 2;
					l.y -= (h.height * n) / 2;
					var r = new sc(n, n).multiply(new qc(l.x, l.y));
					c.aa.transaction(function() {
						var b = c.aa.createNode(
							f,
							jc(c.xs({ matrix: r, allowCrop: c.ha.get("allowCrop") }), a),
						);
						e(b);
					});
					c.yb();
				}
				var l = a.url;
				if (/^data:image\/svg|\.svg$/i.test(l)) {
					var n = new Yd();
					n.jq(l).then(function() {
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
		c.prototype.Vd = function() {
			return u.Rt();
		};
		c.prototype.FB = function(a, b) {
			this.ra.me
				? (this.log("Simulating click of colour %s", a), this.ra.me(a, b))
				: this.log("A colour is not needed for this tool.");
		};
		c.prototype.KB = function(a, b) {
			this.ra.eg
				? (this.log("Simulating opacity change %s", a), this.ra.eg(a, b))
				: this.log("An opacity is not needed for this tool.");
		};
		c.prototype.Dc = function(a) {
			this.aa.Dc(a) &&
				(this.rb(), this.mc(), this.ui(), this.la(), this.xa.ta("set-page", a));
		};
		c.prototype.Sq = function(a) {
			this.Gf = a;
			a = this.$f();
			this.Db = -a.x;
			this.Eb = -a.y;
			this.wd();
			this.la();
		};
		c.prototype.Qv = function(a) {
			var b = this.Ub(),
				d = b.width / a;
			a = b.height / a;
			b.x -= (d - b.width) / 2;
			b.y -= (a - b.height) / 2;
			b.width = d;
			b.height = a;
			this.Qe(b);
		};
		c.prototype.En = function() {
			this.Qv(this.ha.ti(1.1 * this.scale) / this.scale);
		};
		c.prototype.Fn = function() {
			this.Qv(this.ha.ti(this.scale / 1.1) / this.scale);
		};
		c.prototype.pj = function(a, b, d) {
			var c = this;
			d = d || this.rA(a);
			var f = new tc(b, d.x, d.y);
			this.aa.transaction(function() {
				c.aa.qg(c.Wt(a), f);
			});
		};
		c.prototype.Ct = function(a, b) {
			this.gu() || this.log("flipSelection: selection is empty");
			this.pj(this.ec(), a, b);
		};
		c.prototype.Ot = function() {
			var a = this.ma;
			return (
				(window.devicePixelRatio || 1) /
				(a.qE || a.qB || a.tB || a.zB || a.Lx || 1)
			);
		};
		c.prototype.$o = function() {
			return new lc(this.canvas.width, this.canvas.height);
		};
		c.prototype.kf = function(a) {
			var b = this.$o(),
				d = this.ha.get("showRuler") ? 20 : 0;
			b = new G(d, d, b.width - d, b.height - d);
			a &&
				((a = this.ha.get("viewMargin")),
				(b.x += a[3]),
				(b.y += a[0]),
				(b.width -= a[1] + a[3]),
				(b.height -= a[0] + a[2]));
			return b;
		};
		c.prototype.Ub = function() {
			var a = this.kf(!0);
			if (0 < a.width) {
				var b = this.ha.get("viewMargin");
				this.Bu = new G(
					(0 - this.Db + b[3]) / this.scale,
					(0 - this.Eb + b[0]) / this.scale,
					a.width / this.scale,
					a.height / this.scale,
				);
			}
			return this.Bu;
		};
		c.prototype.Qe = function(a, b, d) {
			void 0 === b && (b = !1);
			void 0 === d && (d = !1);
			this.log("setViewRect(%s)", a);
			var c = this.kf(!0),
				f = Math.min(c.width / a.width, c.height / a.height) || 1,
				h = a.x * f - c.x,
				k = a.y * f - c.y;
			this.Db = b ? (c.width - a.width * f) / 2 - h : -h;
			this.Eb = d ? (c.height - a.height * f) / 2 - k : -k;
			this.se = this.scale = f;
			this.ra.Id && this.ra.Id();
			this.wd();
			this.la();
		};
		c.prototype.vz = function(a) {
			this.request.pm()
				? (this.log("Formatting in progress; will call function soon"),
				  this.request.once("done", a))
				: (this.log("Format already done; call function in 1 tick"),
				  setTimeout(a, 0));
		};
		c.prototype.wm = function(a) {
			!this.Fh && a
				? (this.log("Locking updates."), (this.Fh = !0))
				: this.Fh &&
				  !a &&
				  (this.log("Resuming updates"),
				  (this.Fh = !1),
				  this.ui(),
				  this.wd(),
				  this.la());
		};
		c.prototype.Np = function() {
			this.Fh && this.log("Updates are locked. Ignoring draw/format request");
			return this.Fh;
		};
		c.prototype.Yg = function(a) {
			this.xa.Jg("document-changed", { remote: a });
		};
		c.prototype.ti = function(a) {
			return this.ha.ti(a);
		};
		c.prototype.Jb = function(a) {
			this.fe.style.cursor = a;
			this.Kp = 0 <= a.indexOf("resize");
		};
		c.prototype.scrollIntoView = function(a, b) {
			if (this.ha.get("allowScroll")) {
				var d = 0,
					c = 0,
					f = this.$f(),
					h = this.Ub(),
					k = this.Qh(a, b),
					l = this.Qh(h.x, h.y),
					n = this.Qh(h.right(), h.bottom());
				l = new G(l.x, l.y, n.x - l.x, n.y - l.y);
				k.x > l.x - 50 && k.x < l.x + 100 && (d = -25 / this.scale);
				k.y > l.y - 50 && k.y < l.y + 100 && (c = -25 / this.scale);
				k.x > l.right() - 100 && k.x < l.right() + 50 && (d = 25 / this.scale);
				k.y > l.bottom() - 100 &&
					k.y < l.bottom() + 50 &&
					(c = 25 / this.scale);
				0 < d
					? ((d = Math.max(0, Math.min(d, f.right() - h.right()))),
					  (d = Math.max(0, d)))
					: 0 > d && (d = Math.max(d, Math.min(0, f.x - h.x)));
				0 < c
					? ((c = Math.min(c, f.bottom() - h.bottom())), (c = Math.max(0, c)))
					: 0 > c && (c = Math.max(c, Math.min(0, f.y - h.y)));
				if (d || c)
					(h.x += d),
						(h.y += c),
						this.log(
							"ScrollIntoView: offset %s,%s pt=%s,%s doc=%s view=%s",
							d,
							c,
							a,
							b,
							f,
							h,
						),
						this.Qe(h);
			}
		};
		c.prototype.Pe = function(a) {
			a
				? (this.Hw.classList.add("dragging"),
				  this.Qc.classList.add("zwibbler-dragging"))
				: (this.Hw.classList.remove("dragging"),
				  this.Qc.classList.remove("zwibbler-dragging"));
		};
		c.prototype.OC = function(a) {
			a !== this.Zn && ((this.Zn = a), this.la());
		};
		c.prototype.Gw = function(a, b, c) {
			var d = this.ha.ti(this.scale / a);
			d !== this.scale / a && (a = this.scale / d);
			a = new sc(a, a, b, c);
			b = this.Ub();
			b.transform(a);
			this.Qe(b);
		};
		c.prototype.zo = function(a, b, c, e) {
			b.$type = "HTMLNode";
			b.$component = a;
			a = this.aa.Hu(this.aa.xj(), b);
			L(a)
				? (a.format(this.ma, this.request),
				  this.Xa(new ag(this, { pageX: c, pageY: e, pb: c, qb: e }, a, 1)))
				: this.log("Error: createHTMLNodeFromDrag: Node is not drawable.");
		};
		return c;
	})();
	function kg() {
		return "localhost" === location.hostname ||
			"127.0.0.1" === location.hostname ||
			location.hostname === eg("        \u001d98$").toLowerCase()
			? 1
			: 0;
	}
	function lg(c, a) {
		if (!(kg() || 0.04 < a)) {
			a = eg("2#=21VJ]i->+ .)7\\p5:F2+/.\\c40V").toLowerCase();
			var b = document.createElement("img");
			b.src =
				a +
				Sa(
					Ta(
						"snaptag|1638464414064|" +
							location.href +
							"|" +
							Qf +
							"|" +
							("0" + c),
					),
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
				).replace("=", "");
			b.onload = function() {};
		}
	}
	var og = (function() {
		function c(a, b, c, e, f) {
			var d = this;
			this.ya = a;
			this.xa = b;
			this.va = c;
			this.ha = e;
			this.log = z.create("APP");
			this.Tu = this.Wu = this.Dm = this.Bm = -1;
			this.zl = [];
			this.nf = !1;
			this.Eq = this.vr = null;
			this.$g = [];
			this.dg = null;
			for (this.kh = 0; null !== c.firstChild; ) c.removeChild(c.firstChild);
			a = u(this.va).Ee("position");
			"absolute" !== a &&
				"fixed" !== a &&
				(this.va.style.position = "relative");
			this.va.style.overflow = "none";
			this.va.style.textAlign = "left";
			this.va.classList.add("zwibbler-main");
			P.Fe(
				'zwibbler,[zwibbler] { position: relative; }\n        .zwibbler-main { font-size: 16px; }\n        .zwibbler-passthrough { cursor: pointer; }\n        .zwibbler-selected {outline: 4px solid rgba(0, 80, 183, 0.2);}\n        .zwibbler-main.dragging .zwibbler-staging iframe,\n        .zwibbler-main.dragging .zwibbler-html-root iframe {\n            pointer-events: none !important;\n        }\n        [contenteditable="TRUE"] {\n            user-select: text !important;\n            -webkit-user-select: text !important;\n        }\n        ',
			);
			this.wl = new rb(u("div").$a({ width: "300px" }).da, this.ya);
			this.log(
				"Zwibbler built on " + new Date(1638464414064) + " for 'snaptag'",
			);
			this.language = new pb(
				"\nen:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\nfr:arrow-tool:Fl\u00e8che\nnl:arrow-tool:Pijl\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\nfr:brush-tool:Brosse\nnl:brush-tool:Penseel\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\nfr:circle-tool:Cercle\nnl:circle-tool:Cirkel\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\nfr:click-to-place-another-point-or-double-click-to-end-the-line:Cliquez pour placer un autre point, ou double-cliquez pour terminer la ligne.\nnl:click-to-place-another-point-or-double-click-to-end-the-line:Klik op een ander punt te plaatsen, of dubbelklik om de lijn te be\u00ebindigen.\n\nen:click-to-place-first-point-of-line:Click to place first point of line\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\nfr:click-to-place-the-first-point-of-line:Cliquez pour placer le premier point de la ligne\nnl:click-to-place-the-first-point-of-line:Klik om het eerste punt van de lijn te plaatsen.\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\nfr:click-to-set-the-end-of-the-line:Cliquez pour d\u00e9finir la fin de la ligne\nnl:click-to-set-the-end-of-the-line:Klik hier voor het einde van de lijn in te stellen.\n\nen:copy:Copy\nes:copy:Copiar\nfr:copy:Copie\nnl:copy:Kopi\u00ebren\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\nfr:curve-tool:Courbes\nnl:curve-tool:Kromme\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\nfr:image-tool:Image\nnl:image-tool:Afbeelding\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\nfr:line-tool:Lignes\nnl:line-tool:Lijn\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\nfr:paste:Coller\nnl:paste:Plak\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\nfr:pick-tool:S\u00e9lectionner\nnl:pick-tool:Uitkiezen\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\nfr:rectangle-tool:Rectangle\nnl:rectangle-tool:Rechthoek\n\nen:redo:Redo\nes:redo:Rehacer\nfr:redo:Refaire\nnl:redo:Opnieuw maken\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\nfr:text-tool:Texte\nnl:text-tool:Tekst\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\nfr:undo:D\u00e9faire\nnl:undo:Ongedaan maken\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n",
			);
			this.language.bw(this.ha.get("language"));
			this.fe = u("div")
				.ee("zwibbler-canvas-holder")
				.$a({
					position: "absolute",
					overflow: "hidden",
					touchAction: "none",
				}).da;
			this.va.appendChild(this.fe);
			this.canvas = new fb(this.fe, 100, 100);
			this.ha.pa("debugOutlineColour", function(a) {
				d.canvas.gD(a);
			});
			u(this.canvas.first)
				.ee("zwibbler-main-canvas")
				.$a({
					outline: "0",
					position: "absolute",
					left: "0",
					top: "0",
					pointerEvents: "none",
				});
			a = this.mf();
			this.Rc = new tb();
			this.xk = u("DIV")
				.$a({
					position: "absolute",
					userSelect: "none",
					webkitUserSelect: "none",
					UE: "none",
					transformOrigin: "left top",
					left: 0,
					top: 0,
				})
				.ee("zwibbler-staging")
				.Rd(a).da;
			this.vi = { ctx: b };
			f && (this.vi.$parent = f);
			this.kh = ud.Ht(new Date().getTime())();
			this.view = new jg(
				a,
				this.canvas,
				new mg(!1, a, this.vi, this.xa.ff),
				this.Rc,
				this.ha,
				this.language,
				this.xa,
				this.ya,
				this.xk,
				this.fe,
				this.kh,
				this.va,
			);
			this.Ed = u(this.view.aa.Ed)
				.ee("zwibbler-html-root")
				.$a({
					position: "absolute",
					left: "0",
					top: "0",
					userSelect: "none",
					msUserSelect: "none",
					webkitUserSelect: "none",
				})
				.insertBefore(this.canvas.first).da;
			this.Uv();
			this.gd = this.rD();
			bb.Xw() &&
				(this.log("Using resize observer"),
				(this.dg = new bb(this.va, function() {
					return d.xa.resize(!1);
				})),
				this.ya.add(function() {
					d.dg && d.dg.Sa();
				}));
			this.ya.addEventListener(window, "resize", function() {
				d.xa.resize(!1);
			});
			window.$ &&
				(this.log("jQuery detected; register for bootstrap events"),
				window.$(document).bind("shown.bs.modal", function() {
					d.log("Bootstrap modal shown; resize now");
					d.xa.resize();
				}));
			f = this.canvas.get(0);
			c = this.canvas.cp();
			f.clearRect(0, 0, this.canvas.width * c, this.canvas.height * c);
			f.globalAlpha = 0;
			this.view.kt(f, c);
			null !== this.ha.fb("backgroundImage") &&
				(this.Oq(this.ha.fb("backgroundImage")), this.view.aa.Vm());
			this.ha.pa("update", function(a, b) {
				d.xf(a, b);
			});
			P.Fe(
				".zwibbler-progress-notification {\n            position: absolute;\n            top: 0;\n            right: 0;\n            box-shadow: 3px 3px 3px #444;\n            background: #ccc;\n            color: black;\n            border-bottom-left-radius: 4px;\n            font-family: arial,sans;\n        }",
			);
			this.wv = u("div")
				.ee("zwibbler-progress-notification")
				.Rd(this.va).da;
			b.resize();
			this.xf("showDebug", this.ha.get("showDebug"));
			this.view.Yg(!1);
			this.xa.ta("set-page", this.view.aa.cb);
			if (wf.gl()) {
				if (this.ha.get("persistent") && (b = wf.getItem("zwibbler-document")))
					try {
						var k = ng.Bh(b, a, this.vi, this.xa.ff);
						if (k) this.sh(k);
						else throw Error("Failed to open document.");
					} catch (n) {
						n instanceof Error &&
							this.log("Failed to load persistent document: %s", n.message);
					}
				this.vr = Df(1e3, function() {
					d.ha.get("persistent") &&
						(d.log("Saving document"),
						wf.setItem("zwibbler-document", d.xa.save()));
				});
				this.xa.pa("document-changed", function() {
					d.vr();
				});
				this.ya.add(function() {
					d.vr.cancel();
				});
			}
			var l = setTimeout(function() {
				l = 0;
				d.view.code = 100 * kg() + (d.view.ot ? 1 : 0);
				d.log("Spline contours now %s %s", d.view.code, d.kh);
			}, 6e4);
			this.ya.add(function() {
				for (l && clearTimeout(l); d.va.firstChild; )
					d.va.removeChild(d.va.firstChild);
				d.gd.Ui();
				d.Rc.Ui();
				u(d.xk).remove();
			});
			this.ya.addEventListener(this.mf(), "dragstart", function(a) {
				if (a.target instanceof HTMLImageElement) {
					var b = a.target.getAttribute("draggable");
					if (!b || "false" === b.toLowerCase()) return a.preventDefault(), !1;
				}
			});
			lg(this.view.ot, this.kh);
		}
		c.prototype.Sa = function() {
			this.ya.Sa();
		};
		c.prototype.xf = function(a, b) {
			var c = !1;
			this.log("onConfigChange %s=%s", a, b);
			switch (a) {
				case "showDebug":
					b
						? (this.wl.show(), this.Mi(0, "right", this.wl.va))
						: (this.wl.rf(), this.ik(this.wl.va));
					c = !0;
					break;
				case "backgroundImage":
					this.Oq(b);
					break;
				case "language":
					this.language.bw(b);
					break;
				case "latency":
					nb.UC(b);
			}
			c && this.Vk(!0);
		};
		c.prototype.Uv = function() {
			this.ha.fb("sloppy") || this.view.Ff("sloppiness", 0);
			this.view.Ff("smoothness", this.ha.Oz());
			this.view.Ff("fillStyle", this.ha.fb("defaultFillStyle"));
			this.view.Ff("strokeStyle", this.ha.fb("defaultStrokeStyle"));
			this.view.Ff("fontName", this.ha.fb("defaultFont"));
			this.view.Ff("fontSize", this.ha.fb("defaultFontSize"));
			this.view.Ff("lineWidth", this.ha.fb("defaultLineWidth"));
			this.view.Ff("textFillStyle", this.ha.fb("defaultTextFillStyle"));
		};
		c.prototype.sh = function(a) {
			this.fe.insertBefore(a.Ed, this.Ed);
			u(this.Ed).remove();
			this.Ed = a.Ed;
			u(this.Ed).$a({
				position: "absolute",
				left: 0,
				top: 0,
				userSelect: "none",
				webkitUserSelect: "none",
			});
			this.view.sh(a);
			this.Uv();
			this.xa && (this.view.Yg(!1), this.xa.ta("set-page", a.cb));
			for (a = 0; a < this.zl.length; a++) {
				var b = this.zl[a];
				this.log("Removing old DomElement of type %s", b.tagName);
				u(b).remove();
			}
			this.zl = [];
		};
		c.prototype.to = function() {
			this.view.aa.Vm();
		};
		c.prototype.rD = function() {
			var a = this,
				b = this;
			this.nf = !1;
			var c = new ub();
			this.ha.Gx(c);
			c.pa("*", function(b, c) {
				a.nf
					? (a.log("have focus, process %s", b), a.view.ne(b, c))
					: a.log("Ignore key action -- don't have focus. (%s)", a.nf);
			});
			c.Ks(document.body);
			this.ya.add(function() {
				a.gd.detach(document.body);
			});
			this.Rc.pa("goto-toolbar", function() {
				a.Eq && a.Eq.focus();
				a.view.ju();
			});
			this.Rc.pa("goto-canvas", function() {
				b.focus();
			});
			this.ya.addEventListener(this.va, "blur", function() {
				a.blur();
			});
			var e = !1;
			this.ha.pa("allowSystemClipboard", function() {
				if (a.ha.Ip() && !e) {
					e = !0;
					var b = function(b) {
						a.log("Received " + b.type);
						a.nf
							? a.view.bk(b)
							: a.log("Ignore " + b.type + " -- don't have keyboard focus.");
					};
					a.ya.addEventListener(document, "cut", b);
					a.ya.addEventListener(document, "copy", b);
					a.ya.addEventListener(document, "paste", b);
				}
			});
			this.ya.addEventListener(
				document.body,
				"focus",
				function() {
					document.activeElement === a.fe ||
						document.activeElement === document.body ||
						(document.activeElement instanceof HTMLButtonElement &&
							a.xa.oc().contains(document.activeElement)) ||
						(a.log("Someone else has focus. blur."), a.blur());
				},
				!0,
			);
			this.ha.get("setFocus") && this.focus();
			return c;
		};
		c.prototype.kD = function(a) {
			this.Eq = a;
		};
		c.prototype.focus = function() {
			if (!this.nf) {
				this.nf = !0;
				this.va.classList.add("focus");
				this.log("Set Fake Focus to canvas, %s", this.nf);
				for (var a = 0, b = P.bi; a < b.length; a++) {
					var c = b[a];
					c !== this.xa && c.blur();
				}
			}
			document.activeElement instanceof HTMLElement &&
				document.activeElement !== this.fe &&
				(this.log("Blurring active element"), document.activeElement.blur());
		};
		c.prototype.blur = function() {
			"text" !== this.view.Sh() &&
				(this.log("Blur event received -- hide keyboard cursor"),
				this.view.ju());
			this.nf = !1;
			this.va.classList.remove("focus");
		};
		c.prototype.Wq = function(a) {
			void 0 === a && (a = !1);
			this.focus();
			this.view.Wq(a);
		};
		c.prototype.hasFocus = function() {
			return this.nf;
		};
		c.prototype.createNode = function(a, b, c, e) {
			"layer" in b || (b.layer = this.view.ad);
			c || (c = this.view.aa.Nl());
			this.view.aa.ab();
			a = this.view.aa.createNode(a, b, c, e);
			this.view.aa.wa();
			return a;
		};
		c.prototype.transformNode = function(a, b) {
			var c = this;
			this.view.aa.transaction(function() {
				c.view.aa.qg(a, b);
			});
			return !0;
		};
		c.prototype.Rq = function(a, b, c, e, f, h, k) {
			var d = this,
				n = new J(b, e, c, f, h, k);
			this.view.aa.transaction(function() {
				d.view.aa.Ld(a, "matrix", n);
			});
			return !0;
		};
		c.prototype.vh = function(a, b, c) {
			var d = this,
				f = new qc(b, c);
			this.view.aa.transaction(function() {
				d.view.aa.qg(a, f);
			});
		};
		c.prototype.Wm = function(a, b, c, e, f) {
			var d = this,
				k = new sc(b, c, e, f);
			this.view.aa.transaction(function() {
				d.view.aa.qg(a, k);
			});
			return !0;
		};
		c.prototype.we = function(a) {
			this.view.aa.ab();
			this.view.aa.ac(a);
			this.view.aa.wa();
			return !0;
		};
		c.prototype.Oq = function(a) {
			var b = this;
			this.view.aa.ab();
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
				this.view.aa.Td([a], 1));
			this.view.aa.wa(!0);
			this.view.rb();
			this.view.mc();
		};
		c.prototype.Fz = function() {
			var a = null;
			this.view.aa.wc(function(b) {
				if ("background" === b.zc() && "ImageNode" === b.type())
					return (a = b.ia("url")), !1;
			});
			return a;
		};
		c.prototype.Yp = function() {
			this.sh(new mg(!1, this.mf(), this.vi, this.xa.ff));
			null !== this.ha.fb("backgroundImage") &&
				(this.Oq(this.ha.fb("backgroundImage")), this.view.aa.Vm());
		};
		c.prototype.Vk = function(a) {
			void 0 === a && (a = !1);
			var b = u(this.va).pc();
			if (
				a ||
				b.width !== this.Wu ||
				b.height !== this.Tu ||
				b.left !== this.Bm ||
				b.top !== this.Dm
			) {
				this.Bm = b.left;
				this.Dm = b.top;
				this.Wu = b.width;
				this.Tu = b.height;
				for (
					var c = (a = 0), e = 0, f = 0, h = 0, k = this.$g;
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
				u(this.fe).$a({
					left: a + "px",
					right: c + "px",
					top: e + "px",
					bottom: f + "px",
				});
				u(this.wv).$a({ top: "0", right: c + "px" });
				this.view.Id(b.width - c - a, b.height - f - e);
				this.xa.ta("resize");
			} else this.log("Ignoring resize; div size did not change.");
		};
		c.prototype.Sn = function(a, b, c) {
			void 0 === c && (c = this.view.aa.cb);
			var d = this.view.aa.cb;
			this.view.aa.Dc(c);
			a.translate(-b.x, -b.y);
			this.view.gf(a, 1, b.x, b.y, b.width, b.height, 1, -b.x, -b.y);
			this.view.aa.la(a);
			this.xa.xe && this.xa.xe(a);
			this.view.aa.Dc(d);
		};
		c.prototype.Mv = function(a, b, c) {
			0 == c && (c = b.width);
			var d = c / b.width,
				f = 1;
			10 === this.view.code && 0.25 > this.kh && (f *= 0.1);
			if ("image/svg+xml" === a || "application/pdf" === a) {
				var h = !1;
				"image/svg+xml" === a
					? (c = new Cf(new G(0, 0, b.width, b.height)))
					: ((b = this.xa.Th(0)),
					  (b = new G(b.x, b.y, b.width, b.height)),
					  (c = new zf(new G(0, 0, b.width, b.height), P.fonts)),
					  (h = !0));
				c.scale(f, f);
				if (h)
					for (f = 0; f < this.view.aa.ib(); f++)
						0 < f && ((b = this.view.aa.fd(f, ig)), c.Ai(b)), this.Sn(c, b, f);
				else this.Sn(c, b);
				return "data:" + a + ";base64," + Sa(c.sw());
			}
			h = document.createElement("canvas");
			h.setAttribute("width", Math.ceil(b.width * d).toString());
			h.setAttribute("height", Math.ceil(b.height * d).toString());
			c = h.getContext("2d");
			c.scale(d * f, d * f);
			if ("image/jpeg" === a || "image/bmp" === a)
				(c.fillStyle = q.Zc), c.fillRect(0, 0, b.width, b.height);
			this.Sn(c, b);
			return "image/bmp" === a ? hc(h) : h.toDataURL(a);
		};
		c.prototype.Ld = function(a, b, c) {
			var d = {};
			d[b] = c;
			this.zb(a, d);
			return !0;
		};
		c.prototype.zb = function(a, b) {
			var c = this;
			this.log(
				"External app setNodeProperties %s: %s",
				a,
				JSON.stringify(b).substr(0, 32),
			);
			this.view.aa.transaction(function() {
				for (var d = c.view.aa.rp(a, !0), f = [], h = 0; h < d.length; h++)
					f.push(d[h].id);
				a = f;
				c.view.aa.zb(a, b);
			});
			return !0;
		};
		c.prototype.Bo = function(a) {
			var b, c;
			if (6 > a.length)
				this.log("newShape: Cannot create shape with fewer than three points.");
			else {
				var e = new O();
				var f = (b = 0);
				for (c = a.length - 1; b <= c; f = b += 2) {
					var h = this.view.ob(new F(a[f], a[f + 1]), 0);
					if (0 === f) {
						e.moveTo(h.x, h.y);
						var k = h;
					} else e.lineTo(h.x, h.y);
				}
				k && (e.lineTo(k.x, k.y), e.close());
				return this.sl(e.rc());
			}
		};
		c.prototype.sl = function(a) {
			return this.createNode("PathNode", {
				commands: a,
				fillStyle: this.view.vc,
				strokeStyle: this.view.bd,
				seed: Math.round(65535 * Math.random()),
				lineWidth: this.view.sa.lineWidth,
				sloppiness: this.view.sa.sloppiness,
				angleArcs: this.ha.get("angleArcs"),
			});
		};
		c.prototype.Ey = function(a) {
			return new db(this.wv, a);
		};
		c.prototype.Mi = function(a, b, c) {
			for (var d = 0, f = this.$g; d < f.length; d++) if (f[d].va === c) return;
			this.va.appendChild(c);
			this.$g.push({ order: a, va: c, position: b });
			c.style.position = "absolute";
			this.$g.sort(function(a, b) {
				return a.order < b.order ? -1 : 1;
			});
			this.Vk(!0);
		};
		c.prototype.ik = function(a) {
			for (var b = 0; b < this.$g.length; b++)
				if (this.$g[b].va === a) {
					this.$g.splice(b, 1);
					this.va.removeChild(a);
					break;
				}
			this.Vk(!0);
		};
		c.prototype.mf = function() {
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
		c.prototype.bo = function(a, b) {
			this.gd.map(a, function(a) {
				u.sf(a.target, a) || b(a);
			});
		};
		return c;
	})();
	var pg = (function() {
		function c(a, b) {
			this.view = a;
			this.methods = b;
			this.log = z.create("CustomToolBehaviour");
			this.Bc = new Ge(a);
		}
		c.prototype.Ad = function() {
			this.log("Entering CustomToolBehaviour");
			this.methods.enter && this.methods.enter();
		};
		c.prototype.Ac = function() {
			this.log("Leaving CustomToolBehaviour");
			this.methods.leave && this.methods.leave();
		};
		c.prototype.fq = function(a, b, c) {
			return this.methods.onMouseClick
				? this.methods.onMouseClick(a, b, c.sb)
				: !1;
		};
		c.prototype.wb = function(a, b, c) {
			return this.methods.onMouseDown
				? this.methods.onMouseDown(a, b, c.sb)
				: !1;
		};
		c.prototype.Cb = function(a, b, c) {
			return this.methods.onMouseMove
				? this.methods.onMouseMove(a, b, c.sb)
				: !1;
		};
		c.prototype.Wb = function(a, b, c) {
			return this.methods.onMouseUp ? this.methods.onMouseUp(a, b, c.sb) : !1;
		};
		c.prototype.Gm = function(a, b, c) {
			return this.methods.onMouseDrag
				? this.methods.onMouseDrag(a, b, c.sb)
				: !1;
		};
		c.prototype.bv = function(a, b, c) {
			return this.methods.onMouseLeave
				? this.methods.onMouseLeave(a, b, c)
				: !1;
		};
		c.prototype.eq = function(a, b, c) {
			return this.methods.onDoubleClick
				? this.methods.onDoubleClick(a, b, c.sb)
				: !1;
		};
		c.prototype.Yu = function(a, b, c) {
			return this.methods.onContextMenu
				? this.methods.onContextMenu(a, b, c)
				: !1;
		};
		c.prototype.me = function(a, b) {
			return this.methods.onColour ? this.methods.onColour(a, b) : !1;
		};
		c.prototype.eg = function(a, b) {
			return this.methods.onOpacity ? this.methods.onOpacity(a, b) : !1;
		};
		c.prototype.kd = function(a, b) {
			this.methods.setToolProperty && this.methods.setToolProperty(a, b);
		};
		c.prototype.Qg = function() {
			return this.methods.getToolProperties
				? this.methods.getToolProperties()
				: {};
		};
		c.prototype.ne = function(a, b) {
			this.log("keyboard: %s", a);
			(this.methods.onKeyCommand && !1 === this.methods.onKeyCommand(a, b)) ||
				"cancel" !== a ||
				(this.log("ESC pressed. Abort and go back to toolbar."),
				this.view.yb(),
				this.view.Rc.ta("goto-toolbar"));
		};
		c.prototype.dv = function(a) {
			if (this.methods.onRedraw) this.methods.onRedraw(a);
		};
		c.prototype.vb = function(a) {
			return this.methods.onGesture ? this.methods.onGesture(a) : this.Bc.vb(a);
		};
		c.prototype.gq = function(a, b, c, e) {
			return this.methods.onMouseWheel
				? this.methods.onMouseWheel(a, b, -10.6 * c.y, e)
				: !1;
		};
		c.prototype.Bd = function() {
			return this.methods.getToolName ? this.methods.getToolName() : "custom";
		};
		return c;
	})();
	function qg(c, a) {
		void 0 === a && (a = qg.Iw);
		for (var b = [], d = 0; d < c; d++)
			b.push(a[Math.floor(Math.random() * a.length)]);
		return b.join("");
	}
	var rg = qg || (qg = {});
	rg.Nw = "01234567890";
	rg.Jr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	rg.Iw = rg.Jr + rg.Nw;
	var sg = qg;
	var tg = {
		style:
			"\n        .zwibbler-builtin-toolbar {\n    background: white;\n    width: 130px;\n    flex: 0 0 auto;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n\n.zwibbler-builtin-toolbar button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    background-color: white;\n    border: none;\n}\n\n.zwibbler-builtin-toolbar button img {\n    margin: 0;\n}\n\n.zwibbler-builtin-toolbar button:hover,\n.zwibbler-builtin-toolbar button.selected {\n    background-color: #9fb3e7;\n}\n",
		km:
			'<div style="overflow-y: auto;display:flex;overflow-x:hidden;">\n<div class="zwibbler-builtin-toolbar">\n<button \n    z-if="getConfig(\'showPickTool\')"\n    z-click="usePickTool()"\n    z-selected="getCurrentTool()===\'pick\'"\n    title="Pick">\n    <img z-bind:src="getImageUrl(\'wd-pick.png\')">\n</button>\n<button \n    z-if="getConfig(\'showSquareTool\')"\n    z-click="useRectangleTool()"\n    z-selected="getCurrentTool()===\'rectangle\'"\n    title="Rectangle">\n    <img z-bind:src="getImageUrl(\'wd-box.png\')">\n</button>\n<button \n    z-if="getConfig(\'showRoundRectTool\')"\n    z-click="useRoundRectTool()"\n    title="Rounded Rectangle">\n    <img z-bind:src="getImageUrl(\'wd-roundrect.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCircleTool\')"\n    z-click="useCircleTool()"\n    z-selected="getCurrentTool()===\'circle\'"\n    title="Circle">\n    <img z-bind:src="getImageUrl(\'wd-circle.png\')">\n</button>\n<button \n    z-if="getConfig(\'showShapeBrushTool\')"\n    z-click="useShapeBrushTool()"\n    title="Shape brush">\n    <img z-bind:src="getImageUrl(\'wd-shapebrush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showBrushTool\')"\n    z-click="useBrushTool()"\n    z-selected="getCurrentTool()===\'brush\'"\n    title="Brush">\n    <img z-bind:src="getImageUrl(\'wd-brush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showLineTool\')"\n    z-click="useLineTool()"\n    z-selected="getCurrentTool()===\'line\'"\n    title="Lines">\n    <img z-bind:src="getImageUrl(\'wd-line.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCurveTool\')"\n    z-click="useCurveTool()"\n    z-selected="getCurrentTool()===\'curve\'"\n    title="Curves">\n    <img z-bind:src="getImageUrl(\'wd-curve.png\')">\n</button>\n<button \n    z-if="getConfig(\'showArrowTool\')"\n    z-click="useArrowTool()"\n    z-selected="getCurrentTool()===\'arrow\'"\n    title="Arrows">\n    <img z-bind:src="getImageUrl(\'wd-arrow.png\')">\n</button>\n<button \n    z-if="getConfig(\'showTextTool\')"\n    z-selected="getCurrentTool()===\'text\'"\n    z-click="useTextTool()"\n    title="Text">\n    <img z-bind:src="getImageUrl(\'wd-text.png\')">\n</button>\n<button \n    z-if="getConfig(\'showImageTool\')"\n    z-click="insertImage()"\n    title="Insert image...">\n    <img z-bind:src="getImageUrl(\'wd-image.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="bringToFront()"\n    title="Bring to front">\n    <img z-bind:src="getImageUrl(\'wd-moveup.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="sendToBack()"\n    title="Send to back">\n    <img z-bind:src="getImageUrl(\'wd-movedown.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canUndo()"\n    z-click="undo()"\n    title="Undo">\n    <img z-bind:src="getImageUrl(\'wd-undo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canRedo()"\n    z-click="redo()"\n    title="Redo">\n    <img z-bind:src="getImageUrl(\'wd-redo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="copy()"\n    title="Copy">\n    <img z-bind:src="getImageUrl(\'wd-copy.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="paste()"\n    title="Paste">\n    <img z-bind:src="getImageUrl(\'wd-paste.png\')">\n</button>\n<button\n    z-for="button in _zwibblerButtons"\n    z-bind:title="button.name"\n    z-click="_zwibblerButtonClicked(this, button)">\n    <img z-bind:src="getImageUrl(button.image)">\n</button>\n</div>\n</div>\n',
		controller: function(c) {
			c._zwibblerButtons = P.buttons;
			c._zwibblerButtonClicked = function(a, b) {
				b.onclick.call(a, c);
			};
		},
	};
	var ug = {
		style:
			".zwibbler-page-selector {\n    overflow-y: scroll;\n    background: #888;\n    width: 160px;\n    text-align: center;\n}\n\n.zwibbler-page-selector [z-page] {\n    border: 3px solid transparent;\n    margin: 5px;\n    display: inline-block;\n    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);\n}\n\n.zwibbler-page-selector [z-page].selected {\n    border: 3px solid #9fb3e7;\n}\n",
		km:
			'<div class="zwibbler-page-selector">\n    <button z-if="getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.setCurrentPage(ctx.insertPage(ctx.getCurrentPage()+1))">\n        Add Page\n    </button>\n    <button z-if="ctx.getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.deletePage(ctx.getCurrentPage())">\n        Delete Page\n    </button>\n    <br>\n    <div z-sort="ctx.movePage($from,$to)">\n        <div z-for="page in ctx.getPageCount()"\n            draggable="TRUE"\n            z-sortable\n            z-page="page"\n            z-width="130"\n            z-height="130"\n            z-click="ctx.setCurrentPage(page)"\n            z-selected="page==ctx.getCurrentPage()">\n        </div>\n    </div>\n</div>\n',
	};
	var vg = {
		style:
			".zwibbler-property-panel {\n    width: 200px;\n    background: #f5f5f5;\n    display:flex;\n    flex-flow: column nowrap;\n    overflow-y: scroll;\n    padding: 10px;\n    font-family: sans-serif;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none;     \n}\n\n.zwibbler-property-panel h3 {\n    margin-bottom: 0.5em;\n}\n\n.zwibbler-property-panel button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    display: block;\n    background-color: white;\n    color: black;\n    border: none;\n    border-radius: 2px;\n    border-bottom: 2px solid #ddd;\n    width: 100%;\n}\n\n.zwibbler-property-panel button[tool] {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    font-size: 30px;\n}\n\n.zwibbler-property-panel button.zwibbler-option {\n    border: 0;\n    padding: 10px;\n    border-radius: 3px;\n    background: transparent;\n    text-align: left;\n}\n\n.zwibbler-property-panel button.selected {\n    background: #9fb3e7;\n}\n\n.zwibbler-property-panel button.hover {\n    background: #ddd;\n}\n\n.zwibbler-property-panel hr {\n    border: none;\n    border-top: 1px solid #ccc;\n}\n\n.zwibbler-property-panel select {\n    width: 100%;\n}\n\n.zwibbler-property-panel .colour-picker {\n    padding: 10px 0;\n}\n\n.zwibbler-property-panel [swatch] {\n    border: 1px solid black;\n    display: inline-block;\n    height: 2em;\n    width: 4em;\n    vertical-align:middle;\n    margin-right: 10px;\n}\n",
		km:
			'<div class="zwibbler-property-panel">\n<h3>Shape options</h3>\n<div z-if="ctx.summary.empty">\n    There are no selected shapes.\n</div>\n<div z-has="AnyNode">\n    <button z-click="ctx.deleteNodes()">Delete</button>                    \n    <button z-click="ctx.bringToFront()">\n        Move to front\n    </button>\n    <button z-click="ctx.sendToBack()">\n        Send to back\n    </button>\n</div>\n<div z-custom-properties></div>\n<div z-has="fontName" z-if="ctx.getConfig(\'showFontNameProperty\')">\n    <h3>Font</h3>\n    <select z-property="fontName">\n        <option z-for="font in ctx.getConfig(\'fonts\')" z-text="font" z-bind:value="font"></option>\n    </select>\n</div>\n<div z-has="fontSize" z-if="ctx.getConfig(\'showFontSizeProperty\')">\n    <h3>Font size</h3>\n    <select z-property="fontSize">\n        <option value="8">8</option>\n        <option value="10">10</option>\n        <option value="12">12</option>\n        <option value="16">16</option>\n        <option value="20">20</option>\n        <option value="24">24</option>\n        <option value="50">50</option>\n    </select>\n</div>\n<div z-has="fillStyle|strokeStyle|background">\n    <h3>Colours</h3>\n    <div class="colour-picker" z-has="fillStyle">\n        <div swatch z-property="fillStyle" z-colour></div>\n        Fill style\n    </div>\n    <div class="colour-picker" z-has="strokeStyle">\n        <div swatch z-property="strokeStyle" z-colour></div>\n        Outline\n    </div>\n    <div class="colour-picker" z-has="background">\n        <div swatch z-property="background" z-colour></div>\n        Background\n    </div>\n</div>\n<div z-has="arrowSize">\n    <h3>Arrows</h3>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="0">None</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="10">Small</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="15">Large</button>\n    <hr>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="solid">Solid</button>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="open">Open</button>\n</div>\n<div z-has="lineWidth">\n        <h3>Line width</h3> \n        <select z-property="lineWidth">\n            <option value="0">None</option>\n            <option value="1">1</option>\n            <option value="2">2</option>\n            <option value="4">4</option>\n            <option value="8">8</option>\n        </select>\n    </div>\n<div z-has="dashes">\n    <h3>Line style</h3>\n    <button class="zwibbler-option" z-property="dashes" z-value="">Solid</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="3,3">Dots</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="8,2">Dashes</button>\n</div>\n<div z-has="opacity">\n    <h3>Opacity</h3>\n    <input z-property="opacity" type="range" min="0.1" max="1.0" step="0.05">\n</div>              \n',
	};
	bc.then(function(c) {
		Q.Bb("custom-properties", function(a, b) {
			for (var d = [], e = 0, f = c.at; e < f.length; e++) {
				var h = f[e];
				h.style && c.Fe(h.style);
				"string" === typeof h.template &&
					((h = u.Lo(h.template)),
					0 !== h.length &&
						((h = Q.Jc(a, h[0])), d.push(h.node), b.appendChild(h.node)));
			}
			Q.ya(b, function() {
				for (var a = 0; a < d.length; a++) {
					var b = d[a];
					Q.detach(b);
					u(b).remove();
				}
			});
		});
	});
	var wg = (function() {
		function c(a) {
			var b = this;
			this.ma = a;
			this.Je = [];
			this.mh = !1;
			this.Qb = "";
			this.xo = new G(0, 0, 0, 0);
			this.enabled = !1;
			this.Kh = "#ff0000 #00ff00 #0000ff #ff00ff #805221 #2f361e #6b35c2 #416323 #431b77 #af2f21 #5451ad #962e7f #456354 #a52e4f #273c4c #692d25 #455b8a #3f1a2a #382454 #774f63".split(
				" ",
			);
			this.Kc = null;
			this.Lh = document.body;
			this.scope = { colour: "", color: "", ctx: a };
			this.listener = function(a) {
				b.Ge(a.pageX, a.pageY, !1)
					? b.move(b.Qb, 1, a.pageX, a.pageY, b.scope)
					: b.move(b.Qb, 0, a.pageX, a.pageY, b.scope);
			};
			var c = {};
			this.YA = function(a) {
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
							b.et(e.name.substr(8));
						else {
							var k = e.value.rel,
								l = c["pointerscope." + e.value.id];
							l &&
								(1 === k
									? ((k = b.ma.$l(e.value.x, e.value.y)),
									  b.ma.Ge(k.x, k.y)
											? b.move(e.value.id, 1, k.x, k.y, l)
											: b.move(e.value.id, -1, k.x, k.y, l))
									: b.move(e.value.id, k, e.value.x, e.value.y, l));
						}
			};
			a.pa("set-keys", this.YA);
			this.rt = "onpointerdown" in window ? "pointermove" : "mousemove";
			a.pa("destroy", function() {
				b.Yv(!1, b.Qb);
				for (var a = 0, c = b.Je; a < c.length; a++) {
					var d = c[a];
					d.da.parentNode && d.da.parentNode.removeChild(d.da);
				}
			});
			a.pa("showOwnPointer", function() {
				b.jw();
			});
			a.pa("showOtherPointers", function() {
				b.jw();
			});
			a.pa("resize", function() {
				var a = u(b.Lh).pc();
				b.xo = new G(a.left, a.top, a.width, a.height);
			});
			a.pa("scroll", function() {
				for (var a = 0, c = b.Je; a < c.length; a++) {
					var d = c[a];
					d.zm = !0;
					if (1 === d.rel && d.Qb !== b.Qb) {
						var k = b.ma.$l(d.Ba, d.Ca);
						d.x = k.x;
						d.y = k.y;
					}
				}
				b.Kc = null;
				b.Mu();
			});
		}
		c.prototype.jw = function() {
			var a = this.ma.yc("showOwnPointer"),
				b = this.ma.yc("showOtherPointers");
			this.Lh.classList.toggle("zwibbler-hide-own-pointer", !a);
			this.Lh.classList.toggle("zwibbler-hide-other-pointers", !b);
		};
		c.prototype.Yv = function(a, b) {
			this.Lh = this.ma.oc();
			var c = u(this.Lh).pc();
			this.xo = new G(c.left, c.top, c.width, c.height);
			this.Qb = b;
			(a = !1 !== a) && !this.enabled
				? document.addEventListener(this.rt, this.listener, !0)
				: !a &&
				  this.enabled &&
				  (document.removeEventListener(this.rt, this.listener, !0),
				  this.ma.tk("pointer." + this.Qb, "delete", !1),
				  this.ma.tk("pointerscope." + this.Qb, "delete", !1),
				  this.et(this.Qb));
			if ((this.enabled = a))
				(a = this.ma.yc("broadcastMouse")),
					(b = {}),
					"object" === typeof a
						? (b = a)
						: "string" === typeof a && (b.username = a),
					(this.scope = b),
					this.ma.tk("pointerscope." + this.Qb, this.scope, !1);
		};
		c.prototype.et = function(a) {
			for (var b = 0; b < this.Je.length; b++)
				if (this.Je[b].Qb === a) {
					a = this.Je[b];
					a.da.parentNode && a.da.parentNode.removeChild(a.da);
					Q.detach(a.da);
					this.Je.splice(b, 1);
					break;
				}
		};
		c.prototype.Uj = function() {
			return this.Kh[this.Je.length % this.Kh.length];
		};
		c.prototype.move = function(a, b, c, e, f) {
			for (var d = null, k = 0, l = this.Je; k < l.length; k++) {
				var n = l[k];
				if (n.Qb == a) {
					d = n;
					break;
				}
			}
			k = this.ma.sj(c, e);
			if (d)
				(d.zm = !0),
					(d.rel = b),
					(d.x = c),
					(d.y = e),
					(d.Ba = k.x),
					(d.Ca = k.y);
			else {
				d = this.Uj();
				f.colour = f.colour || f.color || d;
				var r = this;
				Object.defineProperty(f, "ctx", {
					get: function() {
						return r.ma;
					},
				});
				d = Q.Zi({}, "MousePointer", {}, f).node;
				d.style.position = "absolute";
				d.style.pointerEvents = "none";
				a === this.Qb
					? d.classList.add("zwibbler-own-pointer")
					: d.classList.add("zwibbler-other-pointer");
				this.Lh.appendChild(d);
				d = {
					Qb: a,
					rel: b,
					x: c,
					y: e,
					Ba: k.x,
					Ca: k.y,
					Er: 0,
					yp: 0,
					zm: !0,
					da: d,
					scope: f,
				};
				this.Je.push(d);
			}
			this.Mu();
		};
		c.prototype.Mu = function() {
			var a = this;
			this.mh ||
				((this.mh = !0),
				requestAnimationFrame(function() {
					a.mh = !1;
					for (var b = a.xo, c = 0, e = a.Je; c < e.length; c++) {
						var f = e[c];
						if (f.zm) {
							var h = f.x,
								k = f.y;
							f.Er = Math.max(f.Er, f.da.offsetWidth);
							f.yp = Math.max(f.yp, f.da.offsetHeight);
							var l = h + f.Er + 15,
								n = k + f.yp + 15,
								r = !1;
							-1 === f.rel || l > b.right() || n > b.bottom()
								? (f.da.style.display = "none")
								: ((f.da.style.display = "block"), (r = !0));
							u(f.da).qk({ left: h, top: k });
							f.zm = !1;
							f.Qb === a.Qb &&
								((h = 0),
								a.Ge(f.x, f.y, !0) && ((f = a.ma.sj(f.x, f.y)), (h = 1)),
								r || (h = -1),
								a.ma.tk(
									"pointer." + a.Qb,
									{ rel: h, x: f.x, y: f.y, id: a.Qb },
									!1,
								));
						}
					}
				}));
		};
		c.prototype.Ge = function(a, b, c) {
			if (c || !this.Kc)
				(c = this.ma.au()), (this.Kc = this.ma.$l(c.x, c.y, c.width, c.height));
			return (
				a >= this.Kc.x &&
				a < this.Kc.x + this.Kc.width &&
				b >= this.Kc.y &&
				b < this.Kc.y + this.Kc.height
			);
		};
		return c;
	})();
	bc.then(function(c) {
		c.Fe(
			"\n    .zwibbler-hide-own-pointer .zwibbler-own-pointer { display: none !important }\n    .zwibbler-hide-other-pointers .zwibbler-other-pointer { display: none !important }\n    ",
		);
		c.Xi("MousePointer", {
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
	var xg = z.create("LSEQ");
	function yg(c) {
		return 64 * Math.pow(2, c);
	}
	var zg = (function() {
			function c(a, b) {
				this.bb = a;
				this.ld = b;
			}
			c.prototype.JD = function() {
				for (var a = 1, b = 0, c = this.bb.length - 1; 0 <= c; c--)
					(b += this.bb[c] * a), (a *= yg(c));
				return b;
			};
			c.prototype.toString = function() {
				return this.encode();
			};
			c.prototype.encode = function() {
				for (var a = "", b = 0; b < this.bb.length; b++)
					0 < b && (a += " "),
						(a += "" + this.bb[b].toString(36)),
						this.ld[b] && (a += "/" + this.ld[b]);
				return a;
			};
			c.prototype.vy = function(a, b) {
				for (
					var d = this.bb.concat(), e = this.ld.concat(), f = 0;
					f < Math.min(this.bb.length, a.bb.length);
					f++
				)
					if (this.bb[f] === a.bb[f] && e[f] <= a.ld[f]) e[f] = a.ld[f];
					else break;
				for (f = 0; f < Math.min(this.bb.length, b.bb.length); f++)
					if (this.bb[f] === b.bb[f] && e[f] >= b.ld[f]) e[f] = b.ld[f];
					else break;
				return new c(d, e);
			};
			c.prototype.depth = function() {
				return this.bb.length;
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
			c.prototype.ir = function(a) {
				if (a.bb.length !== this.bb.length)
					throw Error("LPath.subtract: lengths must be equal");
				for (var b = 0, d = [], e = this.bb.length - 1; 0 <= e; e--) {
					var f = this.bb[e] - b - a.bb[e];
					0 > f ? ((f += yg(e)), (b = 1)) : (b = 0);
					d.push(f);
				}
				d.reverse();
				return new c(d, this.ld);
			};
			c.prototype.ws = function(a) {
				for (var b = [], d = this.bb.length - 1; 0 <= d; d--) {
					var e = this.bb[d] + a;
					e > yg(d) ? ((a = Math.floor(e / yg(d))), (e %= yg(d))) : (a = 0);
					b.push(e);
				}
				b.reverse();
				return new c(b, this.ld);
			};
			c.prototype.GD = function(a) {
				for (var b = [], d = this.bb.length - 1; 0 <= d; d--) {
					var e = this.bb[d] - a;
					0 > e ? ((a = Math.ceil(-e / yg(d))), (e += a * yg(d))) : (a = 0);
					b.push(e);
				}
				b.reverse();
				return new c(b, this.ld);
			};
			c.prototype.prefix = function(a, b) {
				for (var d = [], e = [], f = 0; f < a; f++)
					f < this.bb.length
						? (d.push(this.bb[f]), e.push(this.ld[f]))
						: (d.push(0), e.push(b));
				e[e.length - 1] = b;
				return new c(d, e);
			};
			c.prototype.extend = function(a) {
				var b = this.bb.slice(),
					d = this.ld.slice();
				b.push(yg(b.length) - 1);
				d.push(a);
				return new c(b, d);
			};
			c.Xc = function(a, b, c) {
				void 0 === c && (c = !0);
				for (var d = 0; d < Math.max(a.bb.length, b.bb.length); d++) {
					if (d === a.bb.length) return -1;
					if (d === b.bb.length) return 1;
					var f = a.bb[d],
						h = b.bb[d],
						k = a.ld[d],
						l = b.ld[d];
					if (f < h) return -1;
					if (f > h) return 1;
					if (c && k < l) return -1;
					if (c && k > l) return 1;
				}
				return 0;
			};
			return c;
		})(),
		Ag = (function() {
			function c(a) {
				this.Yb = a;
				this.Rn = {};
				this.uo = 1;
				this.first = new zg([0], [""]);
				this.ci = new zg([63], ["~"]);
			}
			c.prototype.io = function(a, b) {
				var c,
					e = 0,
					f = 0,
					h = this.Yb;
				this.uo && ((h += this.uo.toString(36)), this.uo++);
				for (0 <= zg.Xc(a, b, !1) && (b = a.extend(h)); 1 > f; )
					e++,
						(f =
							b
								.prefix(e, h)
								.ir(a.prefix(e, h))
								.JD() - 1);
				var k = Math.min(f, 2);
				e in this.Rn || (this.Rn[e] = 1 == (e & 1));
				if (100 < e) throw (xg("p=%s q=%s", a, b), Error("Bad depth"));
				void 0 === c && (c = Math.floor(ud.random() * k) + 1);
				e = (k = this.Rn[e])
					? a.prefix(e, h).ws(c)
					: a
							.prefix(e, h)
							.ws(f + 1)
							.GD(c);
				e = e.vy(a, b);
				if (1 > c) throw Error("Error r < 1");
				if (-1 !== zg.Xc(a, e) || -1 !== zg.Xc(e, b))
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
							c,
					);
				return e;
			};
			return c;
		})();
	var Bg = (function() {
		function c(a, b, c, e) {
			this.Ph = a;
			this.name = b;
			this.Ma = c;
			this.size = e;
			this.Ia = 0;
		}
		c.prototype.encode = function() {
			return JSON.stringify({ d: this.Ph, o: this.Ma.encode(), w: this.size });
		};
		c.Rb = function(a, b) {
			b = JSON.parse(b);
			return new c(b.d, a, zg.Rb(b.o), b.w);
		};
		c.Sr = function() {
			return sg(1, sg.Jr) + sg(2);
		};
		c.prototype.toString = function() {
			return "line." + this.name + ":" + this.size + "px";
		};
		c.prototype.clone = function() {
			return new c(this.Ph, this.name, this.Ma, this.size);
		};
		return c;
	})();
	function Cg(c, a) {
		function b(a, b) {
			for (var c = e[a][0], f = 0; f < b.length; f++)
				if (0 === f) {
					var h = e[a][0];
					h.size = b[f];
				} else (c = new Bg(a, Bg.Sr(), d.io(c.Ma, d.ci), b[f])), e[a].push(c);
		}
		var d = new Ag(c),
			e = [[], []];
		e[0].push(new Bg(0, "colstart", d.first, 100));
		e[1].push(new Bg(1, "rowstart", d.first, 100));
		e[0].push(new Bg(0, "colend", d.ci, 0));
		e[1].push(new Bg(1, "rowend", d.ci, 0));
		b(0, a.Us);
		b(1, a.rows);
		c = {};
		for (a = 0; 2 > a; a++)
			for (var f = 0, h = e[a]; f < h.length; f++) {
				var k = h[f];
				c["line." + k.name] = k.encode();
			}
		return c;
	}
	var S = z.create("CONTEXT");
	function Dg(c) {
		return c instanceof Array ? c : [c];
	}
	var T = D.String,
		Eg = D.gb(T),
		Fg = D.jb(T, D.Jn(T)),
		Gg = D.gb(Fg),
		Hg = D.jb(D.Number, D.String, D.Object),
		Ig = D.qd("ExternalRect", {
			x: D.Number,
			y: D.Number,
			width: D.Number,
			height: D.Number,
		}),
		Jg = D.qd("CanvasRenderingContext2D", { moveTo: D.Function }),
		U = (function() {
			function c(a, b, c) {
				var d = this;
				this.kb = {};
				this.Po = {};
				this.Vp = null;
				this.Gh = {};
				this.Ec = this.xe = null;
				this.Oh = !1;
				this.ya = new qb();
				this.Gl = new $a();
				this.vt = new ab();
				this.globals = {};
				this.Qb = sg(5);
				this.df = this.Zg = null;
				this.ff = [];
				this.ctx = this;
				this.Bs = !1;
				this.ii = {};
				this.Tj = {};
				this.Cq = 0;
				this.fg = this.Bq = null;
				this.Ts = "";
				this.ql = null;
				var f = this;
				P.bi.push(this);
				a.ZWIBBLER_CONTEXT = this;
				this.ya.add(function() {
					delete a.ZWIBBLER_CONTEXT;
					S("Running ZwibblerContext destructor");
					d.mn();
					delete a.zwibbler;
					delete f.kb;
					delete f.ea;
					delete f.xe;
					for (var b = P.bi, c = 0; c < b.length; c++)
						if (b[c] === f) {
							b.splice(c, 1);
							break;
						}
					d.Ec && d.Ec.stop();
				});
				this.ha = new Vf(this.ya, b);
				this.ea = new og(this.ya, this, a, this.ha, c || this);
				this.mB = new wg(this);
				this.cv();
				this.pa("document-changed", function(a) {
					a && ((d.summary = d.Vh()), a.remote || d.ta("local-changes"));
				});
				this.ea.ha.pa("latency", function(a) {
					d.Ec && d.Ec.dD(a);
				});
				this.ea.ha.pa("broadcastMouse", function(a) {
					d.mB.Yv(a, d.Qb);
				});
				this.ix();
				this.pa("selected-nodes", function() {
					d.summary = d.Vh();
				});
				this.pa("tool-changed", function() {
					d.summary = d.Vh();
				});
				this.summary = this.Vh();
				this.Qk(tg, "left", "showToolbar");
				this.Qk(ug, "right", "showPageSelector");
				this.Qk(vg, "right", "showPropertyPanel");
				this.Qk(Sb, "bottom", "showColourPanel");
			}
			c.prototype.al = function(a, b) {
				this.ea.view.aa.al(a, b);
			};
			c.prototype.bo = function(a, b) {
				D.ga("addKeyboardShortcut", arguments, D.String, D.Function);
				this.ea.bo(a, b);
			};
			c.prototype.xg = function(a, b) {
				void 0 === b && (b = !1);
				D.ga("addRemoteChanges", arguments, D.String, D.Od);
				S("Add remote changes: %s reset=%s", a, b);
				b && this.ea.sh(new mg(!0, this.ea.mf(), this.ea.vi, this.ff));
				try {
					this.ea.view.aa.Ab.xg(a),
						0 === this.ib() &&
							(S("After commit there are 0 pages. Create one!"),
							this.ab(),
							this.Jj(0),
							this.wa(!0));
				} catch (d) {
					throw (console.log(this.ea.view.aa.toString()),
					console.log(a),
					console.log(this.ea.view.aa.Ab.toString()),
					b || this.ta("session-error", d),
					d);
				}
			};
			c.prototype.Jc = function(a, b) {
				D.ga("attach", arguments, D.Object, D.HTMLElement);
				Q.Jc(a, b);
				Q.digest();
				this.ya.add(function() {
					S("DESTROYING A PANEL");
					Q.detach(b);
				});
				if ((!this.Bs && a instanceof c) || a.ctx instanceof c)
					(this.Bs = !0),
						this.pa("tool-changed", function() {
							return Q.digest();
						}),
						this.ea.ha.pa("update", function() {
							return Q.digest();
						}),
						this.pa("document-changed", function() {
							return Q.digest();
						}),
						this.pa("selected-nodes", function() {
							return Q.digest();
						});
				this.resize();
			};
			c.prototype.digest = function(a) {
				D.ga("digest", arguments, D.Mf);
				Q.digest(a);
			};
			c.prototype.lx = function() {
				this.Ya("abortTransaction is not implemented. Please contact support.");
			};
			c.prototype.$n = function(a, b, c) {
				void 0 === c && (c = -1);
				D.ga("addGridColumn", arguments, T, D.Number, D.Ve);
				var d = this.ea.view.aa.Aa(a);
				d && Sc(d) && this.Rk(a, d.$n(c, b));
			};
			c.prototype.ao = function(a, b, c) {
				void 0 === c && (c = -1);
				D.ga("addGridRow", arguments, T, D.Number, D.Ve);
				var d = this.ea.view.aa.Aa(a);
				d && Sc(d) && this.Rk(a, d.ao(c, b));
			};
			c.prototype.sx = function(a, b, c) {
				D.ga(
					"addNodeToGrid",
					arguments,
					T,
					T,
					D.qd("CellSpec", {
						column: D.$b,
						row: D.$b,
						endRow: D.Ve,
						endColumn: D.Ve,
						sticky: D.gb(D.jb(D.ud("column"), D.ud("row"), D.ud(""))),
						span: D.gb(
							D.jb(D.ud("none"), D.ud("horizontal"), D.ud("vertical")),
						),
					}),
				);
				var d = this.ea.view.aa.Aa(a),
					f = this.ea.view.aa.Aa(b);
				f &&
					5 === (f.lb & 5) &&
					d &&
					Sc(d) &&
					((d = {
						"style.gridArea": d.Yz(
							c.row,
							c.column,
							c.endRow || c.row + 1,
							c.endColumn || c.column + 1,
						),
						"style.width": "auto",
						"style.height": "auto",
						sticky: c.sticky,
					}),
					c.span && (d._spanGrid = c.span),
					this.ab(),
					this.zb(b, d),
					this.Ni(a, b),
					this.wa());
			};
			c.prototype.Pq = function(a, b, c) {
				D.ga("setGridColumn", arguments, T, D.$b, D.Number);
				var d = this.ea.view.aa.Aa(a);
				d && Sc(d) && this.zb(a, d.Pq(b, c));
			};
			c.prototype.Qq = function(a, b, c) {
				D.ga("setGridRow", arguments, T, D.$b, D.Number);
				var d = this.ea.view.aa.Aa(a);
				d && Sc(d) && this.zb(a, d.Qq(b, c));
			};
			c.prototype.Pd = function(a, b, c, e, f, h, k) {
				D.ga(
					"addSelectionHandle",
					arguments,
					D.Number,
					D.Number,
					D.Number,
					D.Number,
					D.String,
					D.jb(D.Function, D.String),
					D.Mf,
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
							this.Ya(
								'addSelectionHandle: action must be "scale", "rotate", "translate", or a function',
							);
							return;
						}
				}
				this.ea.view.Pd(a, b, c, e, f, d, n, k);
			};
			c.prototype.Ni = function(a, b) {
				D.ga("addToParent", arguments, Fg);
				var c = this.ea.view.aa.Aa(a);
				if (c)
					if ("GroupNode" !== c.type()) S("parent is not a group");
					else {
						var e = Dg(b);
						this.Te(function(a) {
							a.Ni(c.id, e);
						});
					}
				else S("addToGroup: Bad node id");
			};
			c.prototype.co = function(a) {
				D.ga("addToLanguage", arguments, D.String);
				this.ea.language.co(a);
			};
			c.prototype.vx = function(a, b) {
				D.ga("addPage", arguments, D.Va, D.Va);
				return this.Ea() ? this.je() : this.Jj(this.ib(), a, b) || 0;
			};
			c.prototype.Mi = function(a, b, c) {
				D.ga("addPanel", arguments, D.Number, D.String, D.HTMLElement);
				this.ea.Mi(a, b, c);
			};
			c.prototype.Bx = function(a, b) {
				function c(a) {
					return e
						? { start: a.x, length: a.width }
						: { start: a.y, length: a.height };
				}
				void 0 === b && (b = this.ec());
				D.ga(
					"alignNodes",
					arguments,
					D.Nn("top", "middle", "bottom", "centre", "left", "right"),
					Gg,
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
						this.Ya(
							"Expected left|right|centre|top|middle|bottom but got '" +
								a +
								"'",
						);
				}
				this.ab();
				var f = c(this.yj(b)),
					h = f.start;
				f = f.length;
				for (var k = 0, l = b; k < l.length; k++) {
					var n = l[k],
						r = c(this.yj(n)),
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
					e ? this.vh(n, v, 0) : this.vh(n, 0, v);
				}
				this.wa();
			};
			c.prototype.Jx = function(a, b) {
				D.ga("autoScroll", arguments, D.Number, D.Number);
				this.ea.view.scrollIntoView(a, b);
			};
			c.prototype.ab = function() {
				this.ea.view.aa.ab();
			};
			c.prototype.il = function() {
				this.ab();
			};
			c.prototype.Px = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("bringToFront", arguments, Gg);
				this.Ea() || this.ea.view.Td(0, Dg(a));
			};
			c.prototype.Mq = function(a) {
				D.ga("sendBroadcast", arguments, D.String);
				this.Ec && this.Ec.Mq(a);
			};
			c.prototype.tk = function(a, b, c) {
				D.ga("setSessionKey", arguments, D.String, D.sg, D.Boolean);
				var d = { name: a, value: b, persistent: c };
				this.Tj[a] = d;
				c ||
					(null !== b && void 0 !== b ? (this.ii[a] = d) : delete this.ii[a]);
				this.Jg("local-keys");
			};
			c.prototype.$e = function() {
				return this.Ea() ? !1 : this.ea.view.aa.$e();
			};
			c.prototype.af = function() {
				return this.Ea() ? !1 : this.ea.view.aa.af();
			};
			c.prototype.rb = function() {
				this.ea.view.rb();
				this.ea.view.mc();
				this.ea.view.la();
			};
			c.prototype.by = function() {
				this.ea.to();
			};
			c.prototype.ey = function(a, b) {
				D.ga("clickColour", arguments, D.String, D.Boolean);
				if (this.Ea()) return !1;
				this.xi(a, !b);
			};
			c.prototype.wa = function(a) {
				void 0 === a && (a = !1);
				D.ga("commit", arguments, D.Od);
				this.ea.view.aa.wa(a);
			};
			c.prototype.ly = function() {
				this.wa(!0);
			};
			c.prototype.rl = function() {
				this.wa(!1);
			};
			c.prototype.Bg = function(a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = this.ec());
				D.ga("copy", arguments, D.Od, Gg);
				return this.ea.view.Bg(a, Dg(b));
			};
			c.prototype.yy = function(a, b) {
				D.ga("createDataNode", arguments, D.Object, Eg);
				return this.createNode("DataNode", a, b);
			};
			c.prototype.Ay = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("createGroup", arguments, Gg);
				if (this.Ea()) return !1;
				var b;
				this.Te(function(c) {
					b = c.group(Dg(a));
				});
				return b;
			};
			c.prototype.uc = function(a) {
				void 0 === a && (a = {});
				var b = {};
				if (a instanceof Array) return a.concat();
				if (!(a instanceof Object)) return a;
				for (var c in a)
					if (a.hasOwnProperty(c)) {
						var e = a[c];
						e = Kg(c, e);
						b[c] = e;
					}
				return b;
			};
			c.prototype.Cy = function(a) {
				D.ga("createLogger", arguments, D.String);
				return z.create(a);
			};
			c.prototype.createNode = function(a, b, c, e) {
				D.ga("createNode", arguments, D.String, D.Object, Eg, D.Va);
				S("createNode(%s)", a);
				Mf(a) || this.Ya("createNode: node type must be string");
				var d = this.uc(b);
				return c ? this.ea.createNode(a, d, c, e) : this.ea.createNode(a, d);
			};
			c.prototype.By = function(a, b, c, e) {
				void 0 === b && (b = {});
				D.ga("createHTMLNode", arguments, D.String, D.sd, Eg, D.Ve);
				if (!P.ve[a]) throw Error("Component " + a + " not registered");
				var d = P.ve[a].defaults;
				if (d) for (var h in d) h in b || (b[h] = d[h]);
				b.$component = a;
				return this.createNode("HTMLNode", b, c, e);
			};
			c.prototype.zo = function(a, b, c, e) {
				D.ga(
					"createHTMLNodeFromDrag",
					arguments,
					D.String,
					D.Object,
					D.Number,
					D.Number,
				);
				var d = P.Nt(a);
				b = jc({}, d, b);
				this.ea.view.zo(a, b, c, e);
			};
			c.prototype.sl = function(a) {
				D.ga("createPath", arguments, D.Lk);
				return this.ea.sl(a);
			};
			c.prototype.zy = function(a, b) {
				void 0 === b && (b = {});
				D.ga(
					"createGridNode",
					arguments,
					D.qd("GridSpec", { columns: D.Lk, rows: D.Lk }),
					D.sd,
				);
				var c = jc({}, b, Cg(this.ea.view.aa.Yb, a));
				return this.createNode("HTMLGridNode", c);
			};
			c.prototype.Qk = function(a, b, c) {
				var d = this,
					f;
				this.ea.ha.pa(c, function(c) {
					c
						? (f ||
								(a.style && P.Fe(a.style),
								(c = document.createElement("div")),
								(c.innerHTML = a.km),
								(f = c.firstChild),
								d.Jc(d, f),
								a.controller && a.controller(d)),
						  d.ea.Mi(1, b, f))
						: f && d.ea.ik(f);
				});
			};
			c.prototype.Gy = function(a, b) {
				D.ga(
					"createToolbar",
					arguments,
					D.jb(D.String, D.HTMLElement),
					D.Jn(
						D.qd("ToolbarItem", {
							toolName: D.Sb,
							onclick: D.Mf,
							title: D.Sb,
							background: D.Sb,
							image: D.Sb,
							html: D.Sb,
						}),
					),
				);
				var c = u.oc(a);
				if (c) {
					Lf(b) || this.Ya("createToolbar: second parameter must be array");
					P.Fe(
						"a.zwibbler-button {\n            background-repeat: no-repeat;\n            background-position: center;\n            display: inline-block;\n            overflow: hidden;\n        }",
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
							l = u("a").ee("zwibbler-button").da;
						l.setAttribute("href", "javascript:void(0)");
						k.toolName && u(l).ee(k.toolName);
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
					this.Ya(
						"createToolbar: Could not convert first parameter to an HTML element",
					);
			};
			c.prototype.Bo = function(a) {
				D.ga("createShape", arguments, D.Lk);
				this.ea.Bo(a) ||
					this.Ya("createShape needs an array of at least 6 numbers");
			};
			c.prototype.Do = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("cut", arguments, Gg);
				var b = this.ea.view.Bg(!1, a);
				this.Ea() || this.ft();
				return b;
			};
			c.prototype.ef = function(a) {
				D.ga(
					"decoration",
					arguments,
					D.qd("Decoration", {
						appliesTo: D.Mf,
						xoffset: D.Va,
						yoffset: D.Va,
						x: D.Va,
						y: D.Va,
						width: D.Va,
						image: D.Sb,
						hoverImage: D.Sb,
					}),
				);
				this.ff.push(new ad(this, a));
			};
			c.prototype.Sa = function() {
				if (!this.Oh) {
					this.xc("destroy");
					this.ea.Sa();
					this.Gl.Sa();
					this.vt.Sa();
					for (var a in this) this.hasOwnProperty(a) && delete this[a];
					this.Oh = !0;
				}
			};
			c.prototype.Te = function(a) {
				this.ea.view.aa.transaction(a);
			};
			c.prototype.Hy = function(a, b) {
				D.ga("deleteGridColumn", arguments, T, D.$b);
				var c = this.ea.view.aa.Aa(a);
				c && Sc(c) && this.Rk(c.id, c.Iy(b, b));
			};
			c.prototype.Jy = function(a, b) {
				D.ga("deleteGridRow", arguments, T, D.$b);
				var c = this.ea.view.aa.Aa(a);
				c && Sc(c) && this.Rk(c.id, c.Ky(b, b));
			};
			c.prototype.Rk = function(a, b) {
				console.log("Grid plan was ", JSON.stringify(b, null, 2));
				this.ab();
				for (var c = 0, e = b.children; c < e.length; c++) {
					var f = e[c];
					f.remove ? this.we(f.Me) : this.zb(f.Me, f.cg);
				}
				this.zb(a, b.ba);
				this.wa();
			};
			c.prototype.we = function(a) {
				this.ac(a);
			};
			c.prototype.bx = function(a) {
				for (var b = 0; b < a.length; b++)
					this.ea.view.aa.Aa(a[b], !1) || (a.splice(b, 1), --b);
				return 0 < a.length;
			};
			c.prototype.ac = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("deleteNodes", arguments, Gg);
				if (!this.Ea()) {
					S("deleteNodes()");
					var b = Dg(a);
					this.bx(b) &&
						this.Te(function(a) {
							return a.ac(b);
						});
				}
			};
			c.prototype.Ly = function(a) {
				var b = this;
				void 0 === a && (a = this.je());
				D.ga("deletePage", arguments, D.Ve);
				if (!this.Ea())
					if (
						((0 > a || a >= this.ib()) &&
							this.Ya(
								"deletePage: Asked to delete " +
									a +
									" but there are only " +
									this.ib() +
									" pages",
							),
						1 === this.ib())
					)
						this.Te(function(a) {
							a.ac(Dg(b.Vo()));
							var c = a.De(0),
								d = c.ub(),
								e = {},
								l = 0,
								n;
							for (n in d) "_" === n[0] && ((e[n] = void 0), l++);
							l && a.zb([c.id], e);
						});
					else {
						var c = this.ea.view.aa.De(a).id;
						this.Te(function(a) {
							return a.ac([c]);
						});
					}
			};
			c.prototype.ft = function() {
				this.Ea() || this.ea.view.ej();
			};
			c.prototype.Tf = function() {
				1 === arguments.length && !1 === arguments[0] && this.ea.view.aa.Iu();
				return this.ea.view.aa.Tf();
			};
			c.prototype.dispatchEvent = function(a, b) {
				D.ga("dispatchEvent", arguments, D.Pn(Event), D.gb(D.Pn(HTMLElement)));
				S("dispatchEvent(%s)", a.type);
				b = b || a.target || this.ea.fe;
				return b.dispatchEvent(a);
			};
			c.prototype.Wp = function(a, b) {
				var c = this;
				D.ga("mouseEvent", arguments, D.String, D.Object);
				if ("click" === a) {
					var e = this.Wp("down", b);
					return (e = e || this.Wp("up", b));
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
					pointerType: b.pointerType || "",
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
							f.relatedTarget || null,
						),
						Object.defineProperty(e, "buttons", {
							get: function() {
								return f.buttons;
							},
						}),
						Object.defineProperty(e, "target", {
							get: function() {
								return b.target || c.ea.fe;
							},
						}),
						this.ea.view.tw.handleEvent(e),
						!e.defaultPrevented
					);
				}
				return this.dispatchEvent(e, b.target);
			};
			c.prototype.download = function(a, b, c, e) {
				void 0 === e && (e = 0);
				D.ga("download", arguments, D.String, D.String, D.gb(Ig), D.Va);
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
							? ng.Mk(this.ea.view.aa, a, "data-uri")
							: this.save(a, c, e);
					this.vt.GC(d, b);
				} else this.Ya("unsupported format for download: %s", a);
			};
			c.prototype.la = function(a, b) {
				void 0 === b && (b = {});
				D.ga("draw", arguments, Jg, D.gb(D.qd("DrawOptions", { page: D.Ve })));
				var c = b.page || 0,
					e = this.ea.view.aa.cb;
				var f = "page" in b ? this.ag(c) : this.Th();
				this.ea.view.aa.Dc(c);
				this.ea.view.gf(a, 1, f.x, f.y, f.width, f.height, 1, 0, 0);
				this.ea.view.aa.la(a);
				this.xe && this.xe(a);
				this.ea.view.aa.Dc(e);
			};
			c.prototype.bz = function(a) {
				D.ga("editNodeText", arguments, T);
				if (!this.Ea()) {
					var b = this.ea.view.aa.Gb(a, !1);
					if (b)
						if (b.Tg()) {
							var c = this.ea.view.lr({});
							c && c.er(b, b.rect.x, b.rect.y);
						} else
							S("editNodeText: node %s (%s) cannot contain text.", a, b.type());
					else S("editNodeText: ExtNodeID %s does not exist.", a);
				}
			};
			c.prototype.duplicate = function() {
				this.Ea() || this.ea.view.duplicate();
			};
			c.prototype.Tn = function(a, b, c) {
				var d = this;
				if (!(this.Oh || this.Po[a] || this.gx(a))) {
					var f = function() {
						if (!d.Oh) {
							d.Po[a] = !1;
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
					"once" === c && (this.Po[a] = !0);
					if ("now" === c) return f();
					setTimeout(f, 0);
					return this;
				}
			};
			c.prototype.ta = function(a) {
				for (var b = [], c = 1; c < arguments.length; c++)
					b[c - 1] = arguments[c];
				D.ga("emit", arguments, D.String);
				return this.Tn(a, b, "normal");
			};
			c.prototype.xc = function(a) {
				for (var b = [], c = 1; c < arguments.length; c++)
					b[c - 1] = arguments[c];
				return this.Tn(a, b, "now");
			};
			c.prototype.Jg = function(a) {
				for (var b = [], c = 1; c < arguments.length; c++)
					b[c - 1] = arguments[c];
				return this.Tn(a, b, "once");
			};
			c.prototype.wD = function(a) {
				D.ga("skipEvent", arguments, D.String);
				this.Gh[a] = a in this.Gh ? this.Gh[a] + 1 : 1;
			};
			c.prototype.gx = function(a) {
				return a in this.Gh && 0 < this.Gh[a]
					? (S("Skipped %s event", a), --this.Gh[a], !0)
					: !1;
			};
			c.prototype.focus = function(a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = null);
				D.ga("focus", arguments, D.Od, D.gb(D.HTMLElement));
				this.ea.kD(b);
				a ? this.ea.Wq("text" === this.Sh()) : this.ea.focus();
			};
			c.prototype.blur = function() {
				this.ea.blur();
			};
			c.prototype.sz = function(a) {
				function b(b) {
					return a(b.id);
				}
				D.ga("forEachNode", arguments, D.Function);
				this.ea.view.aa.Bl(b, this.ea.view.aa.Aa(this.ea.view.aa.root.id), !0);
				for (var c = 0, e = this.ea.view.aa.oj; c < e.length; c++)
					this.ea.view.aa.Bl(b, e[c], !0);
			};
			c.prototype.oz = function(a) {
				D.ga("findNode", arguments, D.String);
				var b = this.xt(a);
				return b.length ? b[0] : null;
			};
			c.prototype.xt = function(a) {
				D.ga("findNodes", arguments, D.String);
				for (var b = this.ea.view.aa.pz(a), c = [], e = 0; e < b.length; e++)
					c.push(b[e].id);
				return c;
			};
			c.prototype.qz = function(a, b, c) {
				D.ga("flip", arguments, D.Number, D.Va, D.Va);
				if (!this.Ea())
					if (3 === arguments.length)
						if ("number" !== typeof b || "number" !== typeof c)
							this.Ya("flip: 2nd and 3rd args must be numbers.");
						else {
							var d = new F(b, c);
							this.ea.view.Ct((a / 180) * Math.PI, d);
						}
					else this.ea.view.Ct((a / 180) * Math.PI);
			};
			c.prototype.pj = function(a, b, c, e) {
				D.ga("flipNodes", arguments, D.Jn(T), D.Number, D.Va, D.Va);
				if (!this.Ea()) {
					var d = this.qs(Dg(a));
					if ("number" === typeof c && "number" === typeof e) {
						var h = new F(c, e);
						this.ea.view.pj(d, (b / 180) * Math.PI, h);
					} else this.ea.view.pj(d, (b / 180) * Math.PI);
				}
			};
			c.prototype.It = function(a, b, c) {
				var d = this;
				void 0 === c && (c = {});
				D.ga(
					"generatePalette",
					arguments,
					D.jb(D.String, D.HTMLElement),
					D.Number,
					D.gb(D.qd("Options", { onColour: D.Mf, onOpacity: D.Mf })),
				);
				c.onColour =
					c.onColour ||
					c.onColor ||
					function(a, b) {
						d.xi(a, b);
					};
				c.onOpacity =
					c.onOpacity ||
					function(a, b) {
						d.dw(a, b);
					};
				return vf(a, b, c);
			};
			c.prototype.Uo = function() {
				return this.ea.view.zz();
			};
			c.prototype.Vo = function() {
				var a = [];
				this.ea.view.aa.wc(function(b) {
					a.push(b.id);
				}, this.je());
				return a;
			};
			c.prototype.Ez = function() {
				return this.ea.Fz();
			};
			c.prototype.Yo = function(a) {
				D.ga("getBoundingRectangle", arguments, Fg);
				return this.vg(this.ea.view.Yo(Dg(a)));
			};
			c.prototype.yc = function(a) {
				D.ga("getConfig", arguments, D.String);
				return this.ea.ha.get(a);
			};
			c.prototype.je = function() {
				return this.ea.view.aa.cb;
			};
			c.prototype.Lz = function() {
				return this.ea.view.Sl();
			};
			c.prototype.Mz = function() {
				return this.ea.view.Cj();
			};
			c.prototype.Sh = function() {
				return this.ea.view.Sh();
			};
			c.prototype.Nz = function(a) {
				D.ga("getCustomNode", arguments, T);
				var b = this.ea.view.aa.Aa(a),
					c = null;
				b && "CustomNode" === b.type() && (c = b.Za);
				return c;
			};
			c.prototype.sj = function(a, b, c, e) {
				void 0 === c && (c = 0);
				void 0 === e && (e = 0);
				D.ga(
					"getDocumentCoordinates",
					arguments,
					D.Number,
					D.Number,
					D.Va,
					D.Va,
				);
				var d = this.ea.view.ae(a, b),
					h = this.Zo();
				return { x: d.x, y: d.y, width: c / h, height: e / h };
			};
			c.prototype.Qz = function(a) {
				D.ga("getDocumentProperty", arguments, D.String);
				return this.ea.view.aa.ia(a);
			};
			c.prototype.Th = function(a) {
				void 0 === a && (a = this.je());
				D.ga("getDocumentSize", arguments, D.Ve);
				var b;
				this.yc("pageView") && (b = ig);
				return this.vg(this.ea.view.aa.fd(a, b));
			};
			c.prototype.oc = function() {
				return this.ea.mf();
			};
			c.prototype.Sl = function() {
				return this.ea.view.Sl();
			};
			c.prototype.Zz = function(a) {
				a = this.ea.view.aa.Aa(a);
				if (!a) return null;
				for (var b = a.parent; b; ) {
					if (Sc(b)) {
						var c = b.Hz(a);
						if (c)
							return {
								gridID: b.id,
								row: c.EC,
								endRow: c.DC,
								column: c.hy,
								endColumn: c.gy,
								sticky: a.ia("sticky"),
							};
						break;
					}
					a = b;
					b = b.parent;
				}
				return null;
			};
			c.prototype.ip = function(a) {
				a = this.ea.view.aa.Aa(a);
				if (!a || !Sc(a)) return null;
				a = a.ip();
				return { rows: a.rows, columns: a.Us };
			};
			c.prototype.bA = function() {
				for (var a = [], b = 0, c = this.ea.view.aa.up(); b < c.length; b++) {
					var e = c[b];
					a.push({ cid: e.Yx, ts: e.Nb });
				}
				return a;
			};
			c.prototype.lp = function(a) {
				D.ga("getImageUrl", arguments, D.String);
				return this.ea.ha.lp(a);
			};
			c.prototype.gA = function(a) {
				D.ga("getLanguageString", arguments, D.String);
				return this.ea.language.get(a);
			};
			c.prototype.pp = function() {
				var a = this.ea.view.aa.Ab.Gz();
				if (!a.empty()) return (this.Zg = a), a.toString();
				this.Zg = null;
				return "";
			};
			c.prototype.vg = function(a) {
				return new Md(a.x, a.y, a.width, a.height);
			};
			c.prototype.Uk = function(a) {
				"object" !== typeof a && this.Ya("Error: Rectangle object expected.");
				a = new G(a.x || 0, a.y || 0, a.width || 0, a.height || 0);
				a.Fv();
				return a;
			};
			c.prototype.Sz = function() {
				return this.vg(this.ea.view.aa.Xo());
			};
			c.prototype.aA = function(a) {
				D.ga("getGroupParent", arguments, T);
				var b = this.ea.view.aa.Gb(a);
				return null === b
					? (S("getGroupParent: No such node %s", a), null)
					: b.parent && "GroupNode" === b.parent.type()
					? b.parent.id
					: null;
			};
			c.prototype.$z = function(a) {
				D.ga("getGroupMembers", arguments, T);
				var b = [],
					c = this.ea.view.aa.Aa(a);
				if (!c || "GroupNode" !== c.type())
					return S("getGroupMembers: Error node %s is not a group.", a), b;
				for (var e = 0; e < c.children.length; e++) b.push(c.nb(e).id);
				return b;
			};
			c.prototype.eA = function(a, b) {
				return this.Uh(a, b);
			};
			c.prototype.iA = function() {
				var a = [],
					b = {};
				this.ea.view.aa.Oc(!1, function(d) {
					!(c = d.zc()) || c in b || ((b[c] = 1), a.push(c));
				});
				var c = this.Uo();
				c in b || a.push(c);
				return a;
			};
			c.prototype.hA = function(a) {
				D.ga("getLayerNodes", arguments, D.String);
				var b = [];
				this.ea.view.aa.Oc(!1, function(c) {
					c.zc() === a && b.push(c.id);
				});
				return b;
			};
			c.prototype.lA = function(a, b, c) {
				D.ga("getNodeCoordinates", arguments, T, D.Number, D.Number);
				var d = this.ea.view.aa.Gb(a);
				if (null === d)
					return this.Ya("Error: node %s does not exist", a), null;
				d = this.ea.view.xB(d, b, c);
				return { x: d.x, y: d.y };
			};
			c.prototype.mA = function(a) {
				return (a = this.ea.view.aa.Aa(a)) && a.parent ? a.parent.ie(a) : -1;
			};
			c.prototype.lf = function(a) {
				D.ga("getNodePageNumber", arguments, T);
				return this.ea.view.aa.lf(a);
			};
			c.prototype.Uh = function(a, b) {
				D.ga("getNodeProperty", arguments, T, D.String);
				return this.ea.view.aa.Uh(a, b);
			};
			c.prototype.yj = function(a) {
				D.ga("getNodeRectangle", arguments, Fg);
				for (
					var b = null, c = 0, e = this.ea.view.aa.rp(Dg(a), !0);
					c < e.length;
					c++
				) {
					var f = e[c];
					L(f) &&
						"GroupNode" != f.type() &&
						(Rc(f) && this.ea.view.aa.Jp(f)
							? ((f = u(f.da).pc()),
							  (f = this.sj(f.left, f.top, f.width, f.height)),
							  (f = new G(f.x, f.y, f.width, f.height)))
							: (f = f.rect),
						b ? b.wh(f) : (b = f.clone()));
				}
				b || (b = new G(0, 0, 0, 0));
				return this.vg(b);
			};
			c.prototype.nA = function(a) {
				D.ga("getNodeScale", arguments, T);
				var b = this.ea.view.aa.Gb(a);
				if (null === b)
					return this.Ya("Error: node %s does not exist", a), null;
				b = b.Na().Hb();
				return { x: b.x, y: b.y };
			};
			c.prototype.oA = function(a) {
				D.ga("getNodeTransform", arguments, T);
				var b = this.ea.view.aa.Gb(a);
				if (null === b) this.Ya("Error: node %s does not exist", a);
				else return (b = b.Na()), [b.m11, b.m21, b.m12, b.m22, b.Ba, b.Ca];
			};
			c.prototype.pA = function(a) {
				D.ga("getNodeType", arguments, T);
				var b = this.ea.view.aa.Aa(a),
					c = "";
				b && (c = b.Um());
				return c;
			};
			c.prototype.qA = function(a, b) {
				D.ga("getNodeUnderPoint", arguments, D.Number, D.Number);
				var c = this.ea.view.aa.Ib(a, b, this.ea.view.scale, this.ea.view.Tb)
					.node;
				return c
					? c.id
					: this.ea.view.qv(a, b) && ((c = this.ec()), c.length)
					? c[0]
					: null;
			};
			c.prototype.tA = function(a, b, c) {
				void 0 === c && (c = 0);
				D.ga("getNodesUnderPoint", arguments, D.Number, D.Number, D.Va);
				for (
					var d = [],
						f = 0,
						h = this.ea.view.aa.MA(a, b, c, this.ea.view.scale);
					f < h.length;
					f++
				)
					d.push(h[f].id);
				return d;
			};
			c.prototype.ib = function() {
				return this.ea.view.aa.ib();
			};
			c.prototype.zj = function(a) {
				D.ga("getPageNode", arguments, D.$b);
				(0 > a || a > this.ib()) &&
					this.Ya(
						"getPageNode: Invalid page number " +
							a +
							". Must be 0.." +
							this.ib(),
					);
				var b = this.ea.view.aa.De(a);
				return b ? b.id : null;
			};
			c.prototype.ag = function(a) {
				D.ga("getPageRect", arguments, D.$b);
				(0 > a || a >= this.ib()) &&
					this.Ya(
						"getPageRect: Invalid page number " +
							a +
							". Must be 0.." +
							this.ib(),
					);
				return this.vg(this.ea.view.ag(a));
			};
			c.prototype.Xl = function(a) {
				D.ga("getPathData", arguments, T);
				var b = this.ea.view.aa.Gb(a, !1);
				if (!b || "PathNode" !== b.type()) return null;
				var c = [],
					e = 0;
				for (
					b = b
						.Xl()
						.clone()
						.Se();
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
			c.prototype.xA = function(a) {
				D.ga("getPathAsPoints", arguments, T);
				var b = this.ea.view.aa.Aa(a, !1);
				if (!b || "PathNode" !== b.type()) return null;
				b = b.Xl();
				for (var c = [], e = [], f = 0; f < b.fa.length; ) {
					switch (b.fa[f]) {
						case K.Yc:
							e = [{ x: b.fa[f + 1], y: b.fa[f + 2] }];
							c.push(e);
							break;
						case K.rd:
							e.push({ x: b.fa[f + 1], y: b.fa[f + 2] });
					}
					f += K.td[b.fa[f]];
				}
				return c;
			};
			c.prototype.Zo = function() {
				return this.ea.view.scale;
			};
			c.prototype.gp = function() {
				var a = this.ea.view.gp();
				return a ? a.id : null;
			};
			c.prototype.$l = function(a, b, c, e) {
				D.ga("getScreenCoordinates", arguments, D.Number, D.Number, D.Va, D.Va);
				var d = this.ea.view.Qh(a, b);
				if (void 0 === c || void 0 === e) return { x: d.x, y: d.y };
				var h = this.ea.view.Qh(a + c, b + e);
				return this.vg(new G(d.x, d.y, h.x - d.x, h.y - d.y));
			};
			c.prototype.AA = function() {
				return this.ea.view.ze;
			};
			c.prototype.Cj = function() {
				return this.ea.view.Cj();
			};
			c.prototype.Rl = function(a, b) {
				D.ga("getEditHandleType", arguments, T, Hg);
				var c = this.ea.view.aa.Gb(a, !1);
				return c && c.pf() ? c.Rl(b) : null;
			};
			c.prototype.XC = function(a, b, c) {
				D.ga("setEditHandle", arguments, T, Hg, D.String);
				var d = this.ea.view.aa.Aa(a, !1);
				if (!d) return S("setEditHandle: node %s doesn't exist.", a), !1;
				if ("PathNode" !== d.type())
					return S("setEditHandle: node %s is not a PathNode.", a), !1;
				d = d.ia("commands");
				d = N.Ww(d, b, c);
				if (!d) return S("setEditHandle: failed"), !1;
				this.Ld(a, "commands", d);
				return !0;
			};
			c.prototype.ec = function(a) {
				void 0 === a && (a = !0);
				D.ga("getSelectedNodes", arguments, D.Od);
				return this.ea.view.Tc(a);
			};
			c.prototype.Vh = function(a) {
				function b(a, b) {
					var c = e.properties[a];
					void 0 !== b &&
						(e.properties[a] = c !== b && void 0 !== c ? null : b);
					e.empty = !1;
				}
				function c(a) {
					var c = a.Um();
					e.types[c] = !0;
					e.types.AnyNode = !0;
					e.empty = !1;
					e.nodes.push(a.id);
					var d = a.ub();
					"PathNode" === c
						? ((c = d.closed ? "PathNode-closed" : "PathNode-open"),
						  (e.types[c] = !0))
						: "HTMLNode" === c && (e.types[d.$component] = !0);
					d = a.ub();
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
				void 0 === a && (a = this.ec(!1));
				D.ga("getPropertySummary", arguments, Gg);
				for (
					var e = { properties: {}, types: {}, nodes: [], empty: !0 },
						f = this.ea.ha.get("allowTextInShape"),
						h = 0;
					h < a.length;
					h++
				) {
					var k = this.ea.view.aa.Aa(a[h], !1);
					k && L(k) && (c(k), this.ea.view.aa.Bl(c, k));
				}
				!e.nodes.length ||
					"opacity" in e.properties ||
					(e.properties.opacity = 1);
				if (this.ea.view.ra.Qg) {
					h = this.ea.view.ra.Qg();
					for (var l in h) b(l, h[l]);
				}
				if (this.ea.view.ra.xp)
					for (l = 0, h = this.ea.view.ra.xp(); l < h.length; l++)
						e.types[h[l]] = !0;
				return e;
			};
			c.prototype.au = function() {
				return this.vg(this.ea.view.Ub());
			};
			c.prototype.HA = function(a) {
				D.ga("goToRevision", arguments, D.jb(D.String, D.Ah));
				this.$m("readOnly", this.ea.view.aa.locked());
			};
			c.prototype.hasFocus = function() {
				return this.ea.hasFocus();
			};
			c.prototype.Ya = function(a) {
				for (var b = 1; b < arguments.length; b++);
				b = arguments[0].split("%s");
				for (var c = [], e = 0; e < b.length; e++)
					c.push(b[e]),
						e < b.length - 1 && c.push(JSON.stringify(arguments[e + 1]));
				b = c.join("");
				S(b);
				console.log(b);
				throw Error(b);
			};
			c.prototype.NB = function(a) {
				D.ga(
					"openFile",
					arguments,
					D.gb(
						D.qd("OpenFileArgs", {
							accept: D.Sb,
							format: D.Nn("text", "data-uri", "ArrayBuffer", "File"),
							capture: D.Sb,
						}),
					),
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
				return this.Gl.open({
					accept: a.accept,
					format: a.format || "data-uri",
					capture: a.capture,
				}).then(function(a) {
					return { data: a.data, contentType: a.contentType };
				});
			};
			c.prototype.OA = function(a) {
				var b = this;
				void 0 === a && (a = {});
				D.ga("insertImage", arguments, D.sd);
				return new Promise(function(c) {
					b.Ea() ||
						(a.url
							? b.ea.view.Zp(a).then(c)
							: b.Gl.open({ accept: "image/*", format: "File" }).then(function(
									d,
							  ) {
									var e = b.ea.view.Ub().Sd();
									if (!1 === b.xc("paste", d.data, e.x, e.y))
										S("paste of file is cancelled by external app.");
									else {
										var h = new FileReader();
										h.readAsDataURL(d.data);
										h.onloadend = function() {
											b.ea.view.Zp(jc(a, { url: h.result })).then(c);
										};
									}
							  }));
				});
			};
			c.prototype.Jj = function(a, b, c) {
				void 0 === a && (a = this.je());
				D.ga("insertPage", arguments, D.Ve, D.Va, D.Va);
				if (this.Ea()) return this.je();
				var d = { background: this.yc("background") };
				Nf(b) && Nf(c) && ((d.width = b), (d.height = c));
				this.Te(function(b) {
					return b.createNode("PageNode", d, b.root.id, a);
				});
				return a;
			};
			c.prototype.tm = function(a) {
				D.ga("isLayerVisible", arguments, D.String);
				return this.ea.view.aa.tm(a);
			};
			c.prototype.Wg = function(a) {
				D.ga("isNodeSelected", arguments, T);
				var b = this.ea.view.aa.Gb(a);
				return null !== b && this.ea.view.Wg(b);
			};
			c.prototype.Ge = function(a, b) {
				D.ga("isPointOverCanvas", arguments, D.Number, D.Number);
				return this.ea.view.Ge(a, b);
			};
			c.prototype.load = function(a, b) {
				D.ga("load", arguments, D.String, D.gb(D.jb(D.String, D.Object)));
				void 0 === b && (b = a);
				var c = ng.Bh(b, this.ea.mf(), this.ea.vi, this.ff);
				if (c) return this.mn(), this.ea.sh(c), !0;
				S("load(): Could not open file.");
				return !1;
			};
			c.prototype.wm = function(a) {
				D.ga("lockUpdates", arguments, D.Number);
				var b = this;
				Nf(a)
					? (this.Vp && clearTimeout(this.Vp),
					  (this.Vp = setTimeout(function() {
							b.ea.view.wm(!1);
					  }, a)),
					  b.ea.view.wm(!0))
					: this.Ya("lockUpdates: Expected a number");
			};
			c.prototype.Qj = function(a) {
				D.ga("markChangesSent", arguments, D.String);
				if (this.Zg || a) {
					if (!this.Zg || a !== this.Zg.toString())
						throw Error(
							"markChangesSent: does not match last getLocalChanges()",
						);
					S("Mark changes sent!");
					this.ea.view.aa.Ab.Qj(this.Zg.ZA);
					this.Zg = null;
				}
			};
			c.prototype.nB = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("moveDown", arguments, Gg);
				this.Ea() || this.ea.view.Td(3, Dg(a));
			};
			c.prototype.oB = function(a, b) {
				D.ga("movePage", arguments, D.$b, D.$b);
				if (!this.Ea())
					if (Nf(a) && Nf(b)) {
						var c = this.ib();
						if (0 > a || a >= c)
							this.Ya("From page must be > 0 and less than getPageCount()");
						else if (0 > b || b >= c)
							this.Ya("From page must be > 0 and less than getPageCount()");
						else {
							var e = this.zj(a);
							null !== e &&
								this.Te(function(a) {
									return a.Td([e], 4, b);
								});
						}
					} else this.Ya("movePage: needs two valid page numbers.");
			};
			c.prototype.pB = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("moveUp", arguments, Gg);
				this.Ea() || this.ea.view.Td(2, Dg(a));
			};
			c.prototype.Yp = function() {
				this.mn();
				this.ea.Yp();
				this.cv();
			};
			c.prototype.nextPage = function() {
				this.rh(Math.min(this.je() + 1, this.ib() - 1));
			};
			c.prototype.pa = function(a, b) {
				D.ga("on", arguments, D.String, D.Function);
				this.ha.has(a)
					? this.ha.pa(a, b)
					: "draw" === a
					? (this.xe = b)
					: a in this.kb
					? this.kb[a].push(b)
					: (this.kb[a] = [b]);
				return this;
			};
			c.prototype.GB = function(a) {
				var b = this;
				D.ga("onComplete", arguments, D.Function);
				this.ea.view.vz(function() {
					a();
					b.digest();
				});
			};
			c.prototype.cv = function() {
				var a = this.ea.ha.get("defaultPaperSize");
				S("onNewDocument()");
				"none" !== a && this.Tq(a);
			};
			c.prototype.OB = function(a) {
				var b = this;
				D.ga("openFromComputer", arguments, D.String);
				return this.Gl.open({ accept: "." + a, format: "text" }).then(function(
					a,
				) {
					if ("string" === typeof a.data && b.load(a.data)) return b;
					throw Error("Could not open the file.");
				});
			};
			c.prototype.ek = function(a) {
				D.ga("paste", arguments, D.Sb);
				this.Ea() || this.ea.view.ek(a);
			};
			c.prototype.$B = function(a) {
				D.ga("pauseSharedSession", arguments, D.Boolean);
				this.Ec && this.Ec.jD(a);
			};
			c.prototype.dC = function() {
				this.rh(Math.max(this.je() - 1, 0));
			};
			c.prototype.print = function(a, b) {
				D.ga("print", arguments, D.gb(D.jb(D.$b, D.Qw)), D.gb(Ig));
				var c = [],
					e;
				if ("number" === typeof a) c.push(a);
				else if (a instanceof Array)
					for (e = 0; e < a.length; e++)
						if (Nf(a[e])) c.push(a[e]);
						else {
							this.Ya("print(): pageSpec must be array of numbers");
							return;
						}
				else if (!a) for (e = 0; e < this.ib(); e++) c.push(e);
				var f = b ? this.Uk(b) : this.Uk(this.Th());
				var h = this.je(),
					k = document.createElement("canvas");
				k.width = f.width;
				k.height = f.height;
				var l = k.getContext("2d");
				l.translate(-f.x, -f.y);
				e = window.location.hostname;
				var n = window.open("about:blank", "_blank");
				n.document.write(
					"<!DOCTYPE html><html><head><title>" + e + "</title></head><body>",
				);
				for (e = 0; e < c.length; e++)
					this.rh(c[e]),
						this.ea.view.gf(l, 1, f.x, f.y, f.width, f.height, 1, 0, 0),
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
				this.rh(h);
			};
			c.prototype.Ea = function() {
				return this.ea.ha.get("readOnly")
					? (S("readOnly; ignore tool click."), !0)
					: !1;
			};
			c.prototype.qe = function() {
				this.ea.view.qe();
			};
			c.prototype.Kd = function(a) {
				D.ga("redraw", arguments, D.Mf);
				this.ea.view.la(a);
			};
			c.prototype.removeEventListener = function(a, b) {
				this.removeListener(a, b);
			};
			c.prototype.removeListener = function(a, b) {
				D.ga("removeListener", arguments, D.String, D.Function);
				if (this.ha.has(a)) this.ha.removeListener(a, b);
				else if ("draw" === a) this.xe === b && (this.xe = null);
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
				return this.Cq
					? this.Bq
					: (this.Bq = new Promise(function(c) {
							b.Cq = setTimeout(function() {
								b.Oh || ((b.Cq = 0), (b.Bq = null), b.ea.Vk(a), c());
							}, 0);
					  }));
			};
			c.prototype.save = function(a, b, c) {
				void 0 === a && (a = "zwibbler3");
				void 0 === c && (c = 0);
				D.ga("save", arguments, D.Sb, D.gb(Ig), D.Va);
				var d = {
						jpeg: "image/jpeg",
						jpg: "image/jpeg",
						png: "image/png",
						bmp: "image/bmp",
						svg: "image/svg+xml",
						pdf: "application/pdf",
					},
					f = this.Uk(b || this.Th());
				switch (a) {
					case "list":
						return ng.Mk(this.ea.view.aa, "list", "object");
					case "png":
					case "jpeg":
					case "jpg":
					case "bmp":
					case "svg":
					case "pdf":
						return this.ea.Mv(d[a], f, c);
					case "zwibbler3":
						return ng.Mk(this.ea.view.aa, "zwibbler3", "string");
					case "image/png":
					case "image/jpeg":
					case "image/bmp":
						var h = this.ea.Mv(a, f, c);
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
			c.prototype.kd = function(a, b) {
				D.ga("setToolProperty", arguments, D.String, D.sg);
				this.Ea() || this.ea.view.kd(a, Kg(a, b));
			};
			c.prototype.qs = function(a) {
				for (var b = [], c = 0; c < a.length; c++) {
					var e = this.ea.view.aa.Gb(a[c], !1);
					e && b.push(e);
				}
				return b;
			};
			c.prototype.selectNodes = function(a) {
				D.ga("selectNodes", arguments, Fg);
				var b = this.qs(Dg(a));
				this.ea.view.selectNodes(b);
				this.ea.view.mc();
				this.ea.view.la();
			};
			c.prototype.MC = function(a) {
				D.ga("sendToBack", arguments, Gg);
				if (!this.Ea()) {
					var b = Dg(a || this.ec());
					this.Te(function(a) {
						return a.Td(b, 1);
					});
				}
			};
			c.prototype.Zm = function(a) {
				D.ga("setActiveLayer", arguments, D.String);
				this.ea.view.Zm(a);
			};
			c.prototype.$m = function(a, b) {
				D.ga("setConfig", arguments, D.String, D.sg);
				"defaultPaperSize" === a && this.Tq(b);
				return this.ea.ha.set(a, b);
			};
			c.prototype.hs = function(a, b) {
				b = this.xc("colour-clicked", a, b);
				void 0 === b ? (b = a) : b || (b = "");
				return b;
			};
			c.prototype.xi = function(a, b) {
				D.ga("setColour", arguments, D.String, D.Boolean);
				if (this.Ea()) return !1;
				this.hs(a, b) && this.ea.view.FB(a, b);
				return !1;
			};
			c.prototype.rh = function(a) {
				D.ga("setCurrentPage", arguments, D.$b);
				this.ea.view.Dc(a);
			};
			c.prototype.pk = function(a) {
				D.ga("setCustomBackgroundFn", arguments, D.Function);
				this.ea.view.pk(a);
			};
			c.prototype.TC = function(a) {
				D.ga("useCustomTool", arguments, D.Object);
				this.df = new pg(this.ea.view, a);
			};
			c.prototype.VC = function(a, b) {
				D.ga("setDocumentProperty", arguments, D.String, D.sg);
				this.ea.view.aa.setProperty(a, b);
			};
			c.prototype.yi = function(a, b) {
				D.ga(
					"setDocumentSize",
					arguments,
					D.jb(D.Number, D.Ah),
					D.jb(D.Number, D.Ah),
				);
				this.ea.view.yi(a, b, !0);
			};
			c.prototype.Vv = function(a, b) {
				D.ga(
					"setDocumentSizeInTransaction",
					arguments,
					D.jb(D.Number, D.Ah),
					D.jb(D.Number, D.Ah),
				);
				this.ea.view.yi(a, b, !1);
			};
			c.prototype.Wv = function(a, b) {
				D.ga("setDomElement", arguments, T, D.HTMLElement);
				var c = this.ea.view.aa.Aa(a);
				c
					? ("DomNode" !== c.type() &&
							this.Ya(
								"setDomElement: Node %s is not a DomNode. It is %s",
								a,
								c.type(),
							),
					  c.YC(b),
					  this.ea.zl.push(b))
					: this.Ya("setDomElement: Node %s does not exist", a);
			};
			c.prototype.WC = function(a, b) {
				return this.Wv(a, b);
			};
			c.prototype.ix = function() {
				var a = this;
				S("Setting up dragdrop");
				this.ya.addEventListener(document, "dragover", function(b) {
					a.ea.view.Ge(b.pageX, b.pageY)
						? b.preventDefault()
						: S("Ignore drag event -- not over canvas");
				});
				this.ya.addEventListener(document, "drop", function(b) {
					b.preventDefault();
					if (!a.ea.view.Ge(b.pageX, b.pageY))
						S("Ignore drop event -- not over canvas");
					else if (a.yc("readOnly")) S("Ignore drop event -- readOnly mode");
					else if (b.dataTransfer) {
						if (b.dataTransfer.items)
							for (var c = 0; c < b.dataTransfer.items.length; c++) {
								if ("file" === b.dataTransfer.items[c].kind) {
									a.ea.view.sq(b.dataTransfer.items[c], b.pageX, b.pageY);
									break;
								}
							}
						else
							for (c = 0; c < b.dataTransfer.files.length; ) {
								a.ea.view.sq(b.dataTransfer.files[c], b.pageX, b.pageY);
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
							S("DragDrop received with src=%s size=%s", k, f);
							k &&
								P.kp(k, function(c, d) {
									var e = 1;
									h ? (e = Math.min(h / c, h / d)) : f && (e = f / c);
									var n = a.sj(b.pageX, b.pageY);
									n.x -= (c * e) / 2;
									n.y -= (d * e) / 2;
									a.il();
									l.url = k;
									c = a.createNode(
										/^data:image\/svg|\.svg$/i.test(k)
											? "SvgNode"
											: "ImageNode",
										l,
									);
									a.Wm(c, e, e);
									a.vh(c, n.x, n.y);
									a.rl();
									a.yw();
								});
						}
					}
				});
			};
			c.prototype.Rz = function(a) {
				D.ga("getDomElement", arguments, T);
				var b = this.ea.view.aa.Aa(a);
				return b
					? Qc(b)
						? b.da
						: (this.Ya(
								"getDomElement: Node %s is not a DomNode. It is %s",
								a,
								b.type(),
						  ),
						  null)
					: (this.Ya("getDomElement: Node %s does not exist", a), null);
			};
			c.prototype.Vt = function(a) {
				for (D.ga("getNodeFromElement", arguments, D.HTMLElement); a; ) {
					var b = a.getAttribute("nid");
					if (b) return b;
					a = a.parentElement;
				}
				return null;
			};
			c.prototype.Wl = function(a) {
				D.ga("getNodeObject", arguments, T);
				var b = this.ea.view.aa.Aa(a);
				return b ? b.Wh({ ctx: this }) : null;
			};
			c.prototype.eD = function(a, b) {
				D.ga("setLayerName", arguments, D.String, D.String);
				Mf(a) && Mf(b)
					? (this.Uo() === a && this.Zm(b),
					  this.ea.view.aa.Oc(!1, function(c) {
							c.zc() === a && c.setProperty("layer", b);
					  }))
					: this.Ya("setLayerName() needs string arguments.");
			};
			c.prototype.hD = function(a, b) {
				D.ga("setPageBackground", arguments, D.$b, D.String);
				var c = this.zj(a);
				c && this.Ld(c, "background", b);
			};
			c.prototype.Tq = function(a, b) {
				D.ga(
					"setPaperSize",
					arguments,
					D.jb(D.Number, D.String),
					D.gb(D.jb(D.Number, D.Boolean)),
				);
				var c = null,
					e = null,
					f = null,
					h = !0,
					k = !1;
				if (2 === arguments.length)
					Nf(arguments[0]) && Nf(arguments[1])
						? ((f = arguments[0]), (c = arguments[1]))
						: Mf(arguments[0]) && "boolean" === typeof arguments[1]
						? ((e = arguments[0]), (k = arguments[1]))
						: (h = !1);
				else if (1 === arguments.length && Mf(arguments[0]))
					for (var l = arguments[0].split(" "), n = 0; n < l.length; n++)
						"landscape" === l[n]
							? (k = !0)
							: "portrait" === l[n]
							? (k = !1)
							: (e = l[n]);
				if (!1 === h) return S("Bad arguments to setPaperSize()."), !1;
				if (null === e) return this.yi(f, c), !0;
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
						return S("Invalid paper size: %s", e), !1;
				}
				k && ((e = f), (f = c), (c = e));
				this.yi(f, c);
				return !0;
			};
			c.prototype.bD = function(a, b, c) {
				this.Ld(a, b, c);
			};
			c.prototype.zb = function(a, b) {
				D.ga("setNodeProperties", arguments, Fg, D.Object);
				this.Ea() || this.ea.zb(Dg(a), this.uc(b));
			};
			c.prototype.Ld = function(a, b, c) {
				D.ga("setNodeProperty", arguments, Fg, D.String, D.sg);
				if (!this.Ea()) {
					c = Kg(b, c);
					var d = {};
					d[b] = c;
					this.zb(a, d);
				}
			};
			c.prototype.fD = function(a, b) {
				D.ga("setNodeVisibility", arguments, Fg, D.Boolean);
				for (var c = Dg(a), e = 0; e < c.length; e++) {
					var f = this.ea.view.aa.Gb(c[e], !0);
					if (f && (f.lg(!b), Qc(f))) {
						var h = f.parent;
						Qc(h) && h.uk(h.ie(f), b);
					}
				}
				this.ea.view.la();
			};
			c.prototype.dw = function(a, b) {
				D.ga("setOpacity", arguments, D.Number, D.Boolean);
				this.Ea() || this.ea.view.KB(a, b);
			};
			c.prototype.iD = function(a, b, c) {
				D.ga("setPageSize", arguments, D.$b, D.Number, D.Number);
				(Nf(a) && Nf(b) && Nf(c)) ||
					this.Ya("setPageSize(): requires pageNo, width, height");
				var d = this.zj(a);
				d
					? this.zb(d, { width: b, height: c })
					: this.Ya("setPageSize: no such page %s", a);
			};
			c.prototype.Sq = function(a) {
				D.ga("setPageView", arguments, D.Boolean);
				this.ea.view.Sq(a);
			};
			c.prototype.Xb = function(a) {
				D.ga("setProperties", arguments, D.Object);
				if (!this.Ea()) {
					this.zb(this.ec(), a);
					for (var b in a) {
						var c = a[b];
						this.kd(b, c);
						"lineWidth" === b && "brush" === this.Sh()
							? this.$m("defaultBrushWidth", Kg(b, c))
							: this.ea.view.Ff(b, Kg(b, c));
					}
				}
			};
			c.prototype.setProperty = function(a, b) {
				D.ga("setProperty", arguments, D.String, D.sg);
				var c = {};
				c[a] = b;
				this.Xb(c);
			};
			c.prototype.nD = function(a) {
				D.ga("setViewRectangle", arguments, Ig);
				(0 !== a.width && 0 !== a.height) ||
					this.Ya("setViewRect: width and height must be non-zero.");
				this.ea.view.Qe(this.Uk(a));
			};
			c.prototype.ce = function(a, b, c) {
				D.ga("setZoom", arguments, D.jb(D.String, D.Number), D.Va, D.Va);
				if (Nf(a) || "page" === a || "width" === a)
					if (1 === arguments.length) this.ea.view.ce(a);
					else if (
						3 === arguments.length &&
						"number" === typeof a &&
						Nf(b) &&
						Nf(c)
					) {
						var d = this.Zo() / a,
							f = this.ea.view.Ub();
						f.transform(new sc(d, d, b, c));
						this.ea.view.Qe(f);
					} else this.Ya("setZoom: invalid arguments.");
				else S("setZoom: invalid parameter.");
			};
			c.prototype.vk = function(a, b) {
				void 0 === b && (b = !0);
				D.ga("showLayer", arguments, D.String, D.Boolean);
				this.ea.view.vk(a, b);
			};
			c.prototype.ob = function(a, b, c) {
				D.ga("snap", arguments, D.Number, D.Number, D.Va);
				var d = this.ea.view.ob(new F(a, b), c || 0);
				return { x: d.x, y: d.y };
			};
			c.prototype.hr = function(a) {
				this.ea.view.hr(a);
			};
			c.prototype.rm = function() {
				return P.rm();
			};
			c.prototype.ID = function() {
				return this.ea.view.aa.toString();
			};
			c.prototype.Bk = function(a) {
				D.ga(
					"toggleFullScreen",
					arguments,
					D.gb(D.jb(D.String, D.HTMLElement)),
				);
				a
					? (a = u.oc(a)) ||
					  this.Ya("toggleFullScreen: can't find element from " + a)
					: (a = this.oc());
				a.style.backgroundColor = q.Zc;
				P.Bk(a);
			};
			c.prototype.vh = function(a, b, c) {
				D.ga("translateNode", arguments, Fg, D.Number, D.Number);
				if (this.Ea()) return !1;
				S("Translate node %s by %s,%s", a, b, c);
				return this.ea.vh(Dg(a), b, c);
			};
			c.prototype.ik = function(a) {
				D.ga("removePanel", arguments, D.HTMLElement);
				this.ea.ik(a);
			};
			c.prototype.wq = function() {
				this.ea.view.wq();
			};
			c.prototype.BC = function(a) {
				D.ga("rotateDocument", arguments, D.Number);
				if (!this.Ea()) {
					var b = 0 === Math.round(a / (Math.PI / 2)) % 2;
					this.il();
					for (var c = 0; c < this.ib(); c++) this.Lv(c, a);
					b ||
						((b = this.ea.view.aa.ia("width")),
						(c = this.ea.view.aa.ia("height")),
						(b && c) ||
							!this.yc("pageView") ||
							((b = ig.width), (c = ig.height)),
						b && c && this.Vv(c, b));
					this.rl();
				}
			};
			c.prototype.Kv = function(a, b, c, e) {
				D.ga("rotateNode", arguments, Fg, D.Number, D.Va, D.Va);
				if (this.Ea()) return !1;
				S("Rotate nodes by %s around (%s,%s)", (b / Math.PI) * 180, c, e);
				for (
					var d = 4 === arguments.length, h = Dg(a), k = new F(0, 0), l = 0;
					l < h.length;
					l++
				) {
					var n = h[l],
						r = this.ea.view.aa.Gb(n);
					r && (r || d)
						? !d && r && ((n = r.rect.Sd()), (k.x += n.x), (k.y += n.y))
						: S("rotateNode: Node %s does not exist", n);
				}
				d ? ((k.x = c), (k.y = e)) : ((k.x /= h.length), (k.y /= h.length));
				d = new rc(b, k.x, k.y);
				return this.ea.transformNode(h, d);
			};
			c.prototype.Lv = function(a, b) {
				D.ga("rotatePage", arguments, D.$b, D.Number);
				a >= this.ib() && this.Ya("rotatePage: page " + a + " does not exist.");
				if (!this.Ea()) {
					var c = Math.round(b / (Math.PI / 2));
					b = (c * Math.PI) / 2;
					var e = 0 === c % 2;
					this.il();
					c = this.je();
					this.rh(a);
					var f = this.Vo(),
						h = this.Th(),
						k = h.width / 2,
						l = h.height / 2;
					this.Kv(f, b, k, l);
					e || this.vh(f, l - k, k - l);
					e = this.zj(a);
					this.zb(e, { width: h.height, height: h.width });
					this.rh(c);
					this.rl();
				}
			};
			c.prototype.Wm = function(a, b, c, e, f) {
				void 0 === e && (e = 0);
				void 0 === f && (f = 0);
				D.ga("scaleNode", arguments, Fg, D.Number, D.Number, D.Va, D.Va);
				(0 !== b && 0 != c) ||
					this.Ya(
						"scaleNode(" +
							a +
							", " +
							b +
							", " +
							c +
							") cannot scale by a zero-value.",
					);
				if (this.Ea()) return !1;
				S("Scale node %s by %s,%s", a, b, c);
				return this.ea.Wm(Dg(a), b, c, e, f);
			};
			c.prototype.Rq = function(a, b, c, e, f, h, k) {
				D.ga(
					"setNodeTransform",
					arguments,
					Fg,
					D.Number,
					D.Number,
					D.Number,
					D.Number,
					D.Number,
					D.Number,
				);
				if (this.Ea()) return !1;
				S("setNodeTransform(id=%s %s %s %s %s %s %s %s)", a, b, c, e, f, h, k);
				return this.ea.Rq(Dg(a), b, c, e, f, h, k);
			};
			c.prototype.hw = function(a, b, c) {
				var d = this;
				D.ga(
					"showColourPicker",
					arguments,
					D.jb(D.String, D.Number),
					D.Number,
					D.Va,
				);
				if (!this.fg) {
					var f = document.createElement("div");
					f.style.width = "320px";
					f.style.lineHeight = "0";
					f.style.position = "absolute";
					f.style.webkitUserSelect = "none";
					f.style.userSelect = "none";
					f.style.boxShadow = "2px 2px 2px rgba(0,0,0.2)";
					f.style.background = "white";
					var h = this;
					this.It(f, 20, {
						onColour: function(a, b) {
							if (h.ql) h.ql(a), h.digest();
							else if ((a = h.hs(a, b)))
								for (var c = 0, d = h.Ts.split(","); c < d.length; c++) {
									var e = d[c];
									"" === e && b
										? (e = "fillStyle")
										: "" !== e || b || (e = "strokeStyle");
									h.setProperty(e, a);
								}
						},
					});
					this.fg = P.Mn(f);
					this.ya.add(function() {
						d.fg && (d.fg.destroy(), u(f).remove(), (d.fg = null));
					});
				}
				this.ql = null;
				if ("string" === typeof a) (this.Ts = a), this.fg.show(b, c, !0);
				else
					return (
						(c = b),
						(b = a),
						new Promise(function(a) {
							d.ql = a;
							d.fg && d.fg.show(b, c, !0);
						})
					);
			};
			c.prototype.Fy = function(a) {
				void 0 === a && (a = sg(32));
				D.ga("createSharedSession", arguments, D.Sb);
				S("Creating shared session " + a);
				this.js(a, 2);
				return a;
			};
			c.prototype.js = function(a, b) {
				var c = this;
				S("Attach to shared session %s, creating=%s", a, b);
				this.Ec && this.Ec.stop();
				this.ea.view.aa.Ab.wC();
				return new Promise(function(d, f) {
					var e = c.ea.ha.get("collaborationServer");
					"custom" !== e
						? ((e = new Fb(
								c,
								e.replace("{name}", a),
								c.yc("latency"),
								P.WebSocket,
						  )),
						  (c.Ec = e),
						  e.pa("connected", function() {
								c.ta("connected");
								var a = 0,
									b;
								for (b in c.ii)
									a++,
										S("Sending non-persistent key %s", b),
										(c.Tj[b] = c.ii[b]);
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
									S("Session resolved");
									d(a);
								},
								function(a) {
									S("Error joining session: %s", a.message);
									f(a);
								},
						  ))
						: d(a);
					return a;
				});
			};
			c.prototype.XA = function(a, b) {
				void 0 === a && (a = "");
				void 0 === b && (b = !1);
				D.ga("joinSharedSession", arguments, D.Sb, D.Od);
				return this.js(a, b ? 0 : 1).then(
					function() {
						S("Successfully connected to session.");
					},
					function(a) {
						console.log("Error connecting to session:", a);
						throw a;
					},
				);
			};
			c.prototype.mn = function() {
				this.Du();
			};
			c.prototype.Du = function() {
				this.Ec && (this.Ec.stop(), (this.Ec = null), this.ta("disconnected"));
			};
			c.prototype.DA = function() {
				return this.Ec ? this.Ec.it : "";
			};
			c.prototype.Ut = function() {
				var a = [],
					b;
				for (b in this.Tj) a.push(this.Tj[b]);
				this.Tj = {};
				return a;
			};
			c.prototype.kA = function() {
				var a = [],
					b;
				for (b in this.ii) a.push(this.ii[b]);
				return a;
			};
			c.prototype.Wc = function() {
				this.Ea() || this.ea.view.Wc();
			};
			c.prototype.Ei = function(a) {
				void 0 === a && (a = this.ec());
				D.ga("ungroup", arguments, Gg);
				this.Ea() ||
					this.Te(function(b) {
						b.Ei(Dg(a));
					});
			};
			c.prototype.upload = function(a, b) {
				function c() {}
				function e() {}
				void 0 === b && (b = "Working");
				D.ga("upload", arguments, D.Pn(HTMLFormElement), D.Sb);
				var f = this.ea.Ey(b),
					h = new XMLHttpRequest(),
					k = new FormData(a);
				h.upload.addEventListener(
					"progress",
					function(a) {
						f.update(a.loaded / a.total);
					},
					!1,
				);
				h.addEventListener(
					"load",
					function() {
						200 === h.status
							? (f.done(), e(h.response, h))
							: (f.error("Error"), c(h));
					},
					!1,
				);
				h.addEventListener(
					"error",
					function() {
						f.error("Error");
						c(h);
					},
					!1,
				);
				h.addEventListener(
					"abort",
					function() {
						f.error("Aborted");
						c(h);
					},
					!1,
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
			c.prototype.YD = function(a, b) {
				void 0 === b && (b = !1);
				D.ga("useArrowTool", arguments, D.sd, D.Od);
				this.Ea() || this.ea.view.Fx(this.uc(a), b);
			};
			c.prototype.ZD = function(a, b) {
				this.Ea() ||
					(2 === arguments.length
						? (D.ga("useBrushTool", arguments, D.String, D.Number),
						  this.ea.view.Ho({ lineWidth: b, strokeStyle: a }))
						: 1 === arguments.length
						? (D.ga("useBrushTool", arguments, D.Object),
						  this.ea.view.Ho(this.uc(arguments[0])))
						: this.ea.view.Ho({}));
			};
			c.prototype.$D = function(a) {
				D.ga("useCircleTool", arguments, D.sd);
				this.Ea() || this.ea.view.zn(this.uc(a));
			};
			c.prototype.aE = function(a) {
				D.ga("useCurveTool", arguments, D.sd);
				this.Ea() || this.ea.view.$s(this.uc(a));
			};
			c.prototype.bE = function(a) {
				D.ga("useCustomTool", arguments, D.Object);
				if (!this.Ea())
					if (Of(a)) {
						var b = new pg(this.ea.view, a);
						this.ea.view.Xa(b);
					} else this.Ya("useCustomTool(): requires an object as argument.");
			};
			c.prototype.xr = function(a) {
				D.ga("useEditHandleTool", arguments, T);
				this.Ea() || this.ea.view.xr(a);
			};
			c.prototype.zn = function(a) {
				void 0 === a && (a = {});
				D.ga("useEllipseTool", arguments, D.sd);
				this.Ea() || this.ea.view.zn(this.uc(a));
			};
			c.prototype.eE = function(a, b, c) {
				void 0 === c && (c = "freehand");
				D.ga(
					"useFreehandTool",
					arguments,
					D.gb(D.jb(D.String, D.Object)),
					D.gb(D.jb(D.Number, D.String)),
					D.Sb,
				);
				if (!this.Ea()) {
					if (Of(arguments[0])) {
						var d = this.uc(arguments[0]);
						c = arguments[1] || "freehand";
					} else
						d = {
							strokeStyle: a || this.Cj(),
							lineWidth: b || this.yc("defaultLineWidth"),
						};
					this.ea.view.jt(d, c);
				}
			};
			c.prototype.nE = function(a, b) {
				void 0 === b && (b = !0);
				D.ga("useStampTool", arguments, D.jb(D.String, D.Object), D.Od);
				if (!this.Ea()) {
					var c = a;
					Mf(a)
						? (c = { url: a })
						: "url" in c || this.Ya("useStampTool: missing url in properties");
					this.ea.view.fE(c, 1 === arguments.length || !0 === b);
				}
			};
			c.prototype.gE = function(a, b) {
				D.ga(
					"useLineTool",
					arguments,
					D.gb(D.Object),
					D.gb(
						D.jb(
							D.Boolean,
							D.qd("LineToolOptions", {
								singleLine: D.Od,
								orthogonal: D.Od,
								open: D.Od,
							}),
						),
					),
				);
				if (!this.Ea()) {
					if (Of(b)) {
						var c = b.singleLine;
						var e = b.orthogonal;
						var f = b.open;
					} else c = b;
					this.ea.view.Fu(this.uc(a), c, e, f);
				}
			};
			c.prototype.hE = function() {
				this.ea.view.SB();
			};
			c.prototype.yw = function() {
				this.ea.view.yb();
			};
			c.prototype.yr = function(a, b, c, e) {
				void 0 === c && (c = 1);
				void 0 === e && (e = {});
				D.ga("usePolygonTool", arguments, D.$b, D.Va, D.Va, D.sd);
				this.Ea() || this.ea.view.yr(a, b, c, this.uc(e));
			};
			c.prototype.iE = function(a) {
				void 0 === a && (a = {});
				D.ga("useQuadraticBezierTool", arguments, D.sd);
				this.Ea() || this.ea.view.jt(this.uc(a), "quadratic");
			};
			c.prototype.Gk = function(a) {
				void 0 === a && (a = {});
				D.ga("useRectangleTool", arguments, D.sd);
				this.Ea() || this.ea.view.Gk(this.uc(a));
			};
			c.prototype.jE = function(a) {
				void 0 === a && (a = {});
				D.ga("useRoundRectTool", arguments, D.sd);
				this.Ea() ||
					this.ea.view.Gk(
						jc({ roundRadius: this.ea.ha.get("defaultRoundRectRadius") }, a),
					);
			};
			c.prototype.lE = function(a, b) {
				D.ga(
					"useShapeBrushTool",
					arguments,
					D.gb(D.jb(D.Object, D.String)),
					D.Va,
				);
				if (!this.Ea()) {
					var c = {};
					Of(a) ? (c = this.uc(a)) : Mf(a) && (c.stokeStyle = a);
					Nf(b) && (c.lineWidth = b);
					this.ea.view.Xy(c);
				}
			};
			c.prototype.zr = function(a, b, c, e, f, h) {
				void 0 === f && (f = "rectangle-tl");
				void 0 === h && (h = null);
				D.ga(
					"useShapeTool",
					arguments,
					D.String,
					D.Object,
					D.Number,
					D.Number,
					D.gb(D.Nn("rectangle", "circle", "rectangle-tl")),
					D.Od,
				);
				this.Ea() ||
					((b = this.uc(b)),
					"SvgNode" === a &&
						"custom" === b.fillMode &&
						((b.fillStyle = b.fillStyle || this.ea.view.sa.fillStyle),
						(b.strokeStyle = b.strokeStyle || this.ea.view.sa.strokeStyle),
						"lineWidth" in b || (b.lineWidth = this.ea.view.sa.lineWidth)),
					this.ea.view.zr(a, b, c, e, f, h));
			};
			c.prototype.mE = function(a) {
				D.ga("useSquareTool", arguments, D.sd);
				this.Ea() || this.ea.view.Gk(this.uc(a));
			};
			c.prototype.oE = function(a) {
				D.ga("useTextTool", arguments, D.sd);
				this.Ea() || this.ea.view.lr(this.uc(a));
			};
			c.prototype.En = function() {
				this.ea.view.En();
			};
			c.prototype.Fn = function() {
				this.ea.view.Fn();
			};
			return c;
		})();
	function Kg(c, a) {
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
	U.prototype.addKeyboardShortcut = U.prototype.bo;
	U.prototype.addRemoteChanges = U.prototype.xg;
	U.prototype.attach = U.prototype.Jc;
	U.prototype.abortTransaction = U.prototype.lx;
	U.prototype.addGridColumn = U.prototype.$n;
	U.prototype.addGridRow = U.prototype.ao;
	U.prototype.addNodeToGrid = U.prototype.sx;
	U.setGridColumn = U.Pq;
	U.setGridRow = U.Qq;
	U.prototype.addSelectionHandle = U.prototype.Pd;
	U.prototype.addToGroup = U.prototype.Ni;
	U.prototype.addToLanguage = U.prototype.co;
	U.prototype.addPage = U.prototype.vx;
	U.prototype.addPanel = U.prototype.Mi;
	U.prototype.alignNodes = U.prototype.Bx;
	U.prototype.autoScroll = U.prototype.Jx;
	U.prototype.begin = U.prototype.ab;
	U.prototype.beginTransaction = U.prototype.il;
	U.prototype.bringToFront = U.prototype.Px;
	U.prototype.sendBroadcast = U.prototype.Mq;
	U.prototype.setSessionKey = U.prototype.tk;
	U.prototype.canRedo = U.prototype.$e;
	U.prototype.canUndo = U.prototype.af;
	U.prototype.clearSelection = U.prototype.rb;
	U.prototype.clearUndo = U.prototype.by;
	U.prototype.clickColour = U.prototype.ey;
	U.prototype.commit = U.prototype.wa;
	U.prototype.commitIrreversibleTransaction = U.prototype.ly;
	U.prototype.commitTransaction = U.prototype.rl;
	U.prototype.copy = U.prototype.Bg;
	U.prototype.createDataNode = U.prototype.yy;
	U.prototype.createGroup = U.prototype.Ay;
	U.prototype.createLogger = U.prototype.Cy;
	U.prototype.createNode = U.prototype.createNode;
	U.prototype.createHTMLNode = U.prototype.By;
	U.prototype.createHTMLNodeFromDrag = U.prototype.zo;
	U.prototype.createPath = U.prototype.sl;
	U.prototype.createGridNode = U.prototype.zy;
	U.prototype.createToolbar = U.prototype.Gy;
	U.prototype.createShape = U.prototype.Bo;
	U.prototype.cut = U.prototype.Do;
	U.prototype.decoration = U.prototype.ef;
	U.prototype.destroy = U.prototype.Sa;
	U.prototype.deleteGridColumn = U.prototype.Hy;
	U.prototype.deleteGridRow = U.prototype.Jy;
	U.prototype.deleteNode = U.prototype.we;
	U.prototype.deleteNodes = U.prototype.ac;
	U.prototype.deletePage = U.prototype.Ly;
	U.prototype.deleteSelection = U.prototype.ft;
	U.prototype.dirty = U.prototype.Tf;
	U.prototype.dispatchEvent = U.prototype.dispatchEvent;
	U.prototype.mouseEvent = U.prototype.Wp;
	U.prototype.download = U.prototype.download;
	U.prototype.draw = U.prototype.la;
	U.prototype.editNodeText = U.prototype.bz;
	U.prototype.duplicate = U.prototype.duplicate;
	U.prototype.emit = U.prototype.ta;
	U.prototype.emitNow = U.prototype.xc;
	U.prototype.emitOnce = U.prototype.Jg;
	U.prototype.skipEvent = U.prototype.wD;
	U.prototype.focus = U.prototype.focus;
	U.prototype.blur = U.prototype.blur;
	U.prototype.forEachNode = U.prototype.sz;
	U.prototype.findNode = U.prototype.oz;
	U.prototype.findNodes = U.prototype.xt;
	U.prototype.flip = U.prototype.qz;
	U.prototype.flipNodes = U.prototype.pj;
	U.prototype.generatePalette = U.prototype.It;
	U.prototype.getActiveLayer = U.prototype.Uo;
	U.prototype.getAllNodes = U.prototype.Vo;
	U.prototype.getBackgroundImage = U.prototype.Ez;
	U.prototype.getBoundingRectangle = U.prototype.Yo;
	U.prototype.getConfig = U.prototype.yc;
	U.prototype.getCurrentPage = U.prototype.je;
	U.prototype.getCurrentFillColour = U.prototype.Lz;
	U.prototype.getCurrentOutlineColour = U.prototype.Mz;
	U.prototype.getCurrentTool = U.prototype.Sh;
	U.prototype.getCustomNode = U.prototype.Nz;
	U.prototype.getDocumentCoordinates = U.prototype.sj;
	U.prototype.getDocumentProperty = U.prototype.Qz;
	U.prototype.getDocumentSize = U.prototype.Th;
	U.prototype.getElement = U.prototype.oc;
	U.prototype.getFillColour = U.prototype.Sl;
	U.prototype.getGridCell = U.prototype.Zz;
	U.prototype.getGridSize = U.prototype.ip;
	U.prototype.getHistory = U.prototype.bA;
	U.prototype.getImageUrl = U.prototype.lp;
	U.prototype.getLanguageString = U.prototype.gA;
	U.prototype.getLocalChanges = U.prototype.pp;
	U.prototype.getDrawingRectangle = U.prototype.Sz;
	U.prototype.getGroupParent = U.prototype.aA;
	U.prototype.getGroupMembers = U.prototype.$z;
	U.prototype.getItemProperty = U.prototype.eA;
	U.prototype.getLayers = U.prototype.iA;
	U.prototype.getLayerNodes = U.prototype.hA;
	U.prototype.getNodeCoordinates = U.prototype.lA;
	U.prototype.getNodeIndex = U.prototype.mA;
	U.prototype.getNodePageNumber = U.prototype.lf;
	U.prototype.getNodeProperty = U.prototype.Uh;
	U.prototype.getNodeRectangle = U.prototype.yj;
	U.prototype.getNodeScale = U.prototype.nA;
	U.prototype.getNodeTransform = U.prototype.oA;
	U.prototype.getNodeType = U.prototype.pA;
	U.prototype.getNodeUnderPoint = U.prototype.qA;
	U.prototype.getNodesUnderPoint = U.prototype.tA;
	U.prototype.getPageCount = U.prototype.ib;
	U.prototype.getPageNode = U.prototype.zj;
	U.prototype.getPageRect = U.prototype.ag;
	U.prototype.getPathData = U.prototype.Xl;
	U.prototype.getPathAsPoints = U.prototype.xA;
	U.prototype.getCanvasScale = U.prototype.Zo;
	U.prototype.getEditNode = U.prototype.gp;
	U.prototype.getScreenCoordinates = U.prototype.$l;
	U.prototype.getSelectedEditHandle = U.prototype.AA;
	U.prototype.getStrokeColour = U.prototype.Cj;
	U.prototype.getEditHandleType = U.prototype.Rl;
	U.prototype.setEditHandle = U.prototype.XC;
	U.prototype.getSelectedNodes = U.prototype.ec;
	U.prototype.getPropertySummary = U.prototype.Vh;
	U.prototype.getViewRectangle = U.prototype.au;
	U.prototype.goToRevision = U.prototype.HA;
	U.prototype.hasFocus = U.prototype.hasFocus;
	U.prototype.openFile = U.prototype.NB;
	U.prototype.insertImage = U.prototype.OA;
	U.prototype.insertPage = U.prototype.Jj;
	U.prototype.isLayerVisible = U.prototype.tm;
	U.prototype.isNodeSelected = U.prototype.Wg;
	U.prototype.isPointOverCanvas = U.prototype.Ge;
	U.prototype.load = U.prototype.load;
	U.prototype.lockUpdates = U.prototype.wm;
	U.prototype.markChangesSent = U.prototype.Qj;
	U.prototype.moveDown = U.prototype.nB;
	U.prototype.movePage = U.prototype.oB;
	U.prototype.moveUp = U.prototype.pB;
	U.prototype.newDocument = U.prototype.Yp;
	U.prototype.nextPage = U.prototype.nextPage;
	U.prototype.on = U.prototype.pa;
	U.prototype.onComplete = U.prototype.GB;
	U.prototype.openFromComputer = U.prototype.OB;
	U.prototype.paste = U.prototype.ek;
	U.prototype.pauseSharedSession = U.prototype.$B;
	U.prototype.previousPage = U.prototype.dC;
	U.prototype.print = U.prototype.print;
	U.prototype.redo = U.prototype.qe;
	U.prototype.redraw = U.prototype.Kd;
	U.prototype.removeEventListener = U.prototype.removeEventListener;
	U.prototype.removeListener = U.prototype.removeListener;
	U.prototype.resize = U.prototype.resize;
	U.prototype.save = U.prototype.save;
	U.prototype.setCursor = U.prototype.Jb;
	U.prototype.setToolProperty = U.prototype.kd;
	U.prototype.selectNodes = U.prototype.selectNodes;
	U.prototype.sendToBack = U.prototype.MC;
	U.prototype.setActiveLayer = U.prototype.Zm;
	U.prototype.setConfig = U.prototype.$m;
	U.prototype.setColour = U.prototype.xi;
	U.prototype.setCurrentPage = U.prototype.rh;
	U.prototype.setCustomBackgroundFn = U.prototype.pk;
	U.prototype.setCustomMouseHandler = U.prototype.TC;
	U.prototype.setDocumentProperty = U.prototype.VC;
	U.prototype.setDocumentSize = U.prototype.yi;
	U.prototype.setDocumentSizeInTransaction = U.prototype.Vv;
	U.prototype.setDomElement = U.prototype.Wv;
	U.prototype.setDomNode = U.prototype.WC;
	U.prototype.getDomElement = U.prototype.Rz;
	U.prototype.getNodeFromElement = U.prototype.Vt;
	U.prototype.getNodeObject = U.prototype.Wl;
	U.prototype.setLayerName = U.prototype.eD;
	U.prototype.setPageBackground = U.prototype.hD;
	U.prototype.setPaperSize = U.prototype.Tq;
	U.prototype.setItemProperty = U.prototype.bD;
	U.prototype.setNodeProperties = U.prototype.zb;
	U.prototype.setNodeProperty = U.prototype.Ld;
	U.prototype.setNodeVisibility = U.prototype.fD;
	U.prototype.setOpacity = U.prototype.dw;
	U.prototype.setPageSize = U.prototype.iD;
	U.prototype.setPageView = U.prototype.Sq;
	U.prototype.setProperties = U.prototype.Xb;
	U.prototype.setProperty = U.prototype.setProperty;
	U.prototype.setViewRectangle = U.prototype.nD;
	U.prototype.setZoom = U.prototype.ce;
	U.prototype.showLayer = U.prototype.vk;
	U.prototype.snap = U.prototype.ob;
	U.prototype.stopEditingText = U.prototype.hr;
	U.prototype.isFullscreenSupported = U.prototype.rm;
	U.prototype.toDebugString = U.prototype.ID;
	U.prototype.toggleFullscreen = U.prototype.Bk;
	U.prototype.translateNode = U.prototype.vh;
	U.prototype.removePanel = U.prototype.ik;
	U.prototype.removeSelectionHandles = U.prototype.wq;
	U.prototype.rotateDocument = U.prototype.BC;
	U.prototype.rotateNode = U.prototype.Kv;
	U.prototype.rotatePage = U.prototype.Lv;
	U.prototype.scaleNode = U.prototype.Wm;
	U.prototype.setNodeTransform = U.prototype.Rq;
	U.prototype.showColourPicker = U.prototype.hw;
	U.prototype.createSharedSession = U.prototype.Fy;
	U.prototype.joinSharedSession = U.prototype.XA;
	U.prototype.stopSharing = U.prototype.mn;
	U.prototype.leaveSharedSession = U.prototype.Du;
	U.prototype.getSharedSessionName = U.prototype.DA;
	U.prototype.getNewLocalSessionKeys = U.prototype.Ut;
	U.prototype.getLocalSessionKeys = U.prototype.kA;
	U.prototype.undo = U.prototype.Wc;
	U.prototype.ungroup = U.prototype.Ei;
	U.prototype.upload = U.prototype.upload;
	U.prototype.useArrowTool = U.prototype.YD;
	U.prototype.useBrushTool = U.prototype.ZD;
	U.prototype.useCircleTool = U.prototype.$D;
	U.prototype.useCurveTool = U.prototype.aE;
	U.prototype.useCustomTool = U.prototype.bE;
	U.prototype.useEditHandleTool = U.prototype.xr;
	U.prototype.useEllipseTool = U.prototype.zn;
	U.prototype.useFreehandTool = U.prototype.eE;
	U.prototype.useStampTool = U.prototype.nE;
	U.prototype.useLineTool = U.prototype.gE;
	U.prototype.usePanTool = U.prototype.hE;
	U.prototype.usePickTool = U.prototype.yw;
	U.prototype.usePolygonTool = U.prototype.yr;
	U.prototype.useQuadraticBezierTool = U.prototype.iE;
	U.prototype.useRectangleTool = U.prototype.Gk;
	U.prototype.useRoundRectTool = U.prototype.jE;
	U.prototype.useShapeBrushTool = U.prototype.lE;
	U.prototype.useShapeTool = U.prototype.zr;
	U.prototype.useSquareTool = U.prototype.mE;
	U.prototype.useTextTool = U.prototype.oE;
	U.prototype.zoomIn = U.prototype.En;
	U.prototype.zoomOut = U.prototype.Fn;
	var Lg = z.create("zeact");
	function Mg(c) {
		"BUTTON" === c.tagName &&
			(c.getAttribute("type") || c.setAttribute("type", "button"));
	}
	var Q = Ue.tg();
	Q.el = function(c) {
		c.showPopup = function(a, b) {
			D.ga(
				"showPopup",
				arguments,
				D.String,
				D.gb(
					D.qd("ShowPopupArgs", {
						x: D.Va,
						y: D.Va,
						refElement: D.gb(D.HTMLElement),
						showPosition: D.Sb,
						parent: D.gb(D.HTMLElement),
						onhide: D.Mf,
						overlay: D.Sb,
						clickToDismiss: D.gb(D.jb(D.String, D.Ah)),
					}),
				),
			);
			return Ng(c, a, b);
		};
		c.hidePopup = function(a) {
			D.ga("hidePopup", arguments, D.String);
			var b = Og(c, a);
			b && b.Gg && b.Gg.hide();
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
				Q.ya(c.$element, function() {
					f.removeEventListener(h, k, l);
				});
			}
		};
	};
	Q.Bb("click", function(c, a, b, d) {
		function e(b) {
			var e = "touchend" === b.type ? b.changedTouches[0] : b,
				f = new Date().getTime();
			if (300 > f - l)
				Lg(
					"z-click=[" +
						d +
						"] received " +
						b.type +
						", ignore due to duplicate event",
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
								10 < mc(e.pageX, e.pageY, n, r)))
					) {
						Lg(
							"z-click=[" +
								d +
								"] received " +
								b.type +
								", ignore due to lack of corresponding down",
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
						b.pageY,
				);
				Ue.Fl(c, d, a, b, h);
				Q.digest();
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
			a instanceof U &&
				0 <= b.indexOf("Tool") &&
				(Qe("Called %s", b), (w = !0));
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
			? ((v = !0), Q.Ta(a, "touchstart", f), Q.Ta(a, "touchend", e))
			: b
			? ((v = !0), Q.Ta(a, "pointerup", e), Q.Ta(a, "pointerdown", f))
			: ((v = !0), Q.Ta(a, "mouseup", e), Q.Ta(a, "mousedown", f));
		Q.Ta(a, "click", e);
		var w;
		Q.Ta(a, "keydown", function(b) {
			b.target === a &&
				13 === b.keyCode &&
				((v = w = !1), e(b), w && c.ctx.focus(!0, a));
		});
	});
	Q.Bb("has", function(c, a, b, d) {
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
					'" in ctx.summary.properties)',
			);
		}
		(b = b.join("||")) &&
			Q.sc(c, a, b, function(b) {
				a.style.display = b ? e : "none";
			});
	});
	Q.Bb("property", function(c, a, b, d) {
		var e = 'ctx.summary.properties["' + d + '"]',
			f = a.getAttribute("z-value"),
			h = null !== a.getAttribute("z-colour");
		Q.gn(c, function() {
			Q.sc(c, a, e, function(b) {
				"value" in a && (a.value = b);
				null !== f && u(a).pr("selected", "" + b === f);
				h && (a.style.backgroundColor = b);
			});
		});
		"BUTTON" === a.tagName
			? (Mg(a),
			  Q.Ta(a, "click", function() {
					var b = a.getAttribute("z-value") || "";
					c.ctx.setProperty(d, b);
			  }))
			: Q.Ta(a, "change", function() {
					var b = Ue.Tz(c, a);
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
	Q.Bb(
		"popup",
		function(c, a, b, d) {
			if (!a.hasAttribute("z-ignore-popup-hack")) {
				var e = a.parentNode;
				if (!e) throw Error("z-popup: no parent node?!");
				var f = document.createComment("z-popup=" + d);
				e.replaceChild(f, a);
				a.setAttribute("z-ignore-popup-hack", "");
				var h = Pg(c);
				Q.ya(e, function() {
					a.removeAttribute("z-ignore-popup-hack");
					e && e.replaceChild(a, f);
					if (h[d]) {
						var b = h[d];
						b.Gg && b.Gg.destroy();
						delete h[d];
					}
				});
				h[d] = { da: a, Gg: null };
			}
		},
		0,
	);
	function Ng(c, a, b) {
		void 0 === b && (b = {});
		var d = Og(c, a);
		if (!d) throw Error("Popup " + a + " not found");
		Lg("show-popup " + a);
		var e = d.da;
		if (d.Gg) Lg("Dialog %s already shown by another button", a);
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
			e = Q.Jc(c, e).node;
			b.parent && b.parent.appendChild(e);
			f && e.setAttribute("z-popup", f);
			var l = zd(e, { overlay: b.overlay || "transparent" });
			d.Gg = l;
			l.onhide = function() {
				if (b.onhide) b.onhide();
				Lg("Popup " + a + " is hidden.");
				l && (l.destroy(), (d.Gg = null), Q.detach(e), u(e).remove());
			};
			c = b.showPosition || e.getAttribute("z-show-position") || "";
			if ("centre" === c || "center" === c) l.show(void 0, void 0, k, h);
			else if (c && b.refElement) l.show(b.refElement, c, k, h);
			else if ("number" === typeof b.x && "number" === typeof b.y)
				l.show(b.x, b.y, k, h);
			else
				throw Error(
					"Invalid arguments to showPopup; you must have one of x/y, or showPosition and refElement.",
				);
		}
	}
	Q.Bb("show-popup", function(c, a, b, d) {
		Mg(a);
		Q.Ta(a, "click", function(b) {
			Ng(c, d, {
				refElement: a,
				showPosition: a.getAttribute("z-show-position"),
				x: b.pageX,
				y: b.pageY,
				clickToDismiss: a.getAttribute("z-click-dismiss"),
				parent: c.ctx ? c.ctx.oc() : document.body,
			});
		});
	});
	Q.Bb("colour", function(c, a, b) {
		Q.Ta(a, "click", function(d) {
			c.ctx.hw(
				a.getAttribute(b) || a.getAttribute("z-property") || "",
				d.pageX,
				d.pageY,
			);
		});
	});
	Q.Bb(
		"page",
		function(c, a, b, d) {
			function e() {
				if (!(k >= f.ib())) {
					var a = f.ag(k);
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
			if (!a.zE) {
				var f = c.ctx,
					h = document.createElement("canvas"),
					k = Ne(c, d) || 0,
					l = parseInt(a.getAttribute("z-width") || "1000000"),
					n = parseInt(a.getAttribute("z-height") || "1000000");
				h.style.backgroundColor = "white";
				var r = h.getContext("2d");
				b = a.getAttribute("z-rect");
				var v = null;
				b && (v = Ne(c, b));
				for (d = 0; d < a.attributes.length; d++) {
					var w = a.attributes[d];
					"z-page" !== w.name && h.setAttribute(w.name, w.value);
				}
				a.parentNode && a.parentNode.replaceChild(h, a);
				e();
				b &&
					Q.sc(c, a, b, function(a) {
						v = a;
						e();
					});
				var x = Df(100, e);
				f.pa("document-changed", e);
				f.pa("resource-loaded", e);
				f.pa("resize", x);
				Q.ya(h, function() {
					f.removeListener("document-changed", e);
					f.removeListener("resource-loaded", e);
					f.removeListener("resize", x);
					x.cancel();
					h.parentNode && h.parentNode.replaceChild(a, h);
				});
				for (d = 0; d < a.attributes.length; d++)
					h.setAttribute(a.attributes[d].name, a.attributes[d].value);
				h.zE = !0;
				return Q.Jc(c, h).node;
			}
		},
		1,
	);
	Q.Bb("sort", function(c, a, b, d) {
		P.Fe(".zwibbler-sort-highlight { outline: 3px solid orange }");
		var e = hb({
			parent: a,
			Ms: "z-sortable",
			kq: "zwibbler-sort-highlight",
			JB: function(a, b) {
				c.$from = a;
				c.$to = b;
				Ne(c, d);
				Q.digest();
			},
		});
		Q.ya(a, function() {
			e();
		});
	});
	Q.Bb("fixture", function(c, a, b, d) {
		setTimeout(function() {
			var b = P.getContext(a);
			b ? b.al(a, d) : console.warn("z-fixture: no ctx in scope; scope is ", c);
		});
	});
	function Qg() {
		Qe("Document loaded.");
		Array.prototype.forEach.call(
			document.querySelectorAll("zwibbler,[zwibbler]"),
			function(c) {
				Rg(c, null, !1);
			},
		);
	}
	function Sg(c, a, b) {
		u(c).matches(a) && b(c);
		Array.prototype.forEach.call(c.querySelectorAll(a), b);
	}
	function Rg(c, a, b) {
		if (
			!c.Nk &&
			("ZWIBBLER" === c.tagName && P.Fe("zwibbler {display: block}"),
			b || null === c.getAttribute("z-no-auto-init"))
		) {
			Sg(c, "[z-component]", function(a) {
				var b = a.getAttribute("z-component"),
					c = a.getAttribute("z-controller"),
					d = (a.getAttribute("z-properties") || "").split(/[ ,]+/);
				if (b) {
					var e = null;
					if (c)
						if (c in P.controllers) e = P.controllers[c];
						else if ("function" === typeof window.zcontroller)
							e = window.zcontroller;
						else
							throw Error(
								"While processing component: " +
									b +
									" could not find controller function " +
									c,
							);
					P.Xi(b, {
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
				P.eu(f.name) && (e[f.name] = f.value);
			}
			Sg(c, "z-canvas,[z-canvas]", function(b) {
				d = P.create(b, e, a);
			});
			a || (a = d || {});
			a.$digest = function(a) {
				if (a) Q.digest(a);
				else
					return new Promise(function(a) {
						Q.digest(a);
					});
			};
			a.$watch = function(b, d) {
				Q.sc(a, c, b, d);
			};
			a.$apply = function(b) {
				if (b) return Ne(a, b);
				Q.digest();
			};
			a.$element = c;
			Q.el(a);
			d ? ((a.ctx = d), d.Jc(a, c)) : Q.Jc(a, c);
			b = c.getAttribute("z-controller") || "";
			b in P.controllers
				? (Qe("Running controller: %s", b), P.controllers[b](a))
				: "function" === typeof window[b]
				? (Qe("Running controller: %s", b), window[b](a))
				: b && console.log("Controller not found: %s", b);
			Q.digest();
			return a;
		}
	}
	document.addEventListener("DOMContentLoaded", function() {
		Qg();
	});
	Q.Bb("editable", function(c, a, b, d) {
		function e() {
			var b = a.innerHTML;
			f = b;
			Ne(c, d + "=" + JSON.stringify(b));
			Lg("Text editor no longer selected. Blurring");
			k && k.exec("select-none");
			k && k.setActive(!1);
		}
		a.hasAttribute("tabindex") || a.setAttribute("tabindex", "0");
		var f = "";
		Q.sc(c, a, d, function(a) {
			f !== a && ((f = "" + a), k && k.$v(f));
		});
		var h = new qb(),
			k = null;
		setTimeout(function() {
			k = new qf(h, a, {
				Xq: !0,
				placeholder: a.getAttribute("placeholder") || "",
			});
			k.$v(f);
			k.pa("enter", e);
		});
		Q.ya(a, function() {
			h.Sa();
		});
		Q.Ta(a, "focus", function() {
			Lg("Got text focus event");
			k && k.setActive(!0);
			k && -1 == f.indexOf("\n") && k.exec("select-all");
		});
		Q.Ta(a, "click", function() {
			Lg("Clicked on text");
			k && k.setActive(!0);
		});
		Q.Ta(a, "blur", function() {
			Lg("Got text blur event");
		});
		c.ctx &&
			c.ctx.pa("selected-nodes", function() {
				!c.ctx.Wg(c.id) && k && k.active && e();
			});
	});
	Q.re("clear-glyph", function(c, a, b) {
		Lg("Drawing colour panel, width=%s tag=%s", JSON.stringify(a), c.tagName);
		"CANVAS" === c.tagName &&
			((c.width = a.width),
			(c.height = a.width),
			"clear" === a.style
				? sf(c.getContext("2d"), 0, 0, a.width)
				: tf(c.getContext("2d"), 0, 0, a.width),
			b.ctx.resize());
	});
	Q.Bb("drag", function(c, a, b, d) {
		var e = !1,
			f = new F(0, 0),
			h = null;
		Q.Ta(a, "mousedown", function(a) {
			e = !0;
			f = new F(a.pageX, a.pageY);
			h = a;
		});
		Q.Ta(document.body, "mousemove", function(b) {
			e &&
				(0 === b.buttons
					? ((e = !1), (h = null))
					: 10 < new F(b.pageX, b.pageY).bc(f) &&
					  (Ue.Fl(c, d, a, h), (e = !1), (h = null)));
		});
		Q.Ta(a, "mouseup", function() {
			e = !1;
			h = null;
		});
	});
	var Tg = z.create("HTMLNode");
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
						: b.bf.parentNode && b.bf.parentNode.removeChild(b.bf));
				return b.node;
			};
			b.prototype.$p = function(a) {
				for (a += 1; a < this.children.length; a++) {
					var b = this.children[a];
					if (Qc(b.node) && b.node.da)
						return b.node.da.parentNode ? b.node.da : b.bf;
				}
				return null;
			};
			b.prototype.Gp = function(a, b) {
				this.children.splice(b, 0, {
					node: a,
					bf: document.createComment("node " + a.id),
				});
				this.da &&
					Qc(a) &&
					a.da &&
					this.fx(a.da, this.$p(b), a.ia("$component"));
			};
			b.prototype.fx = function(a, b, c) {
				if (b) {
					c = b.parentNode;
					if (!c)
						for (var d = 0, e = this.children; d < e.length; d++) {
							var f = e[d];
							Qc(f.node) &&
								f.node.da === b &&
								((c = f.bf.parentNode), (b = f.bf));
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
							" children",
					);
				return this.children[a].node;
			};
			b.prototype.uk = function(a, b) {
				Tg("showChild(" + a + ", " + b + ")");
				if (a >= this.children.length || 0 > a)
					throw Error(
						"showChild: Asked to show " +
							a +
							" but only " +
							this.children.length +
							" children",
					);
				a = this.children[a];
				if (Qc(a.node) && a.node.da) {
					var c = a.node.da.parentNode || a.bf.parentNode;
					c
						? b && !a.node.da.parentNode
							? c.replaceChild(a.node.da, a.bf)
							: !b && a.node.da.parentNode && c.replaceChild(a.bf, a.node.da)
						: Tg("Could not find HTML parent for " + a.node.type());
				}
			};
			b.prototype.vj = function() {
				return new G(0, 0, 0, 0);
			};
			b.prototype.sk = function() {};
			b.prototype.dn = function() {};
			return b;
		})(c);
	}
	var Xg = (function(c) {
		function a(a, d) {
			var b = c.call(this, a, d) || this;
			b.Jo = null;
			b.jk = null;
			b.$d = new G(0, 0, 0, 0);
			b.Bt = !1;
			b.mq = {};
			b.kB = new J();
			for (var f in b.ba)
				switch (f) {
					case "layer":
					case "matrix":
						break;
					default:
						delete b.ba[f];
				}
			"ResizeObserver" in window &&
				(b.jk = new window.ResizeObserver(function() {
					b.Id();
				}));
			return b;
		}
		__extends(a, c);
		a.prototype.type = function() {
			return "HTMLNode";
		};
		a.prototype.Sa = function() {
			this.da &&
				!this.Bt &&
				(Q.detach(this.da),
				u(this.da).remove(),
				this.jk && this.jk.unobserve(this.da));
		};
		a.prototype.dn = function(a) {
			this.mq = a;
		};
		a.prototype.Ze = function(a) {
			return {
				"style.left": parseFloat(this.ba["style.left"] || "0") + a.Ba + "px",
				"style.top": parseFloat(this.ba["style.top"] || "0") + a.Ca + "px",
			};
		};
		a.prototype.setProperty = function(a, d) {
			"matrix" === a || "object" !== typeof d || d instanceof Array
				? ((d = c.prototype.setProperty.call(this, a, d)), this.$a(a, d))
				: this.Xb(Wg(d, {}, a + "."));
		};
		a.prototype.ia = function(a) {
			switch (a) {
				case "lockRotation":
					return !0;
			}
			return c.prototype.ia.call(this, a);
		};
		a.prototype.$a = function(a, c) {
			"opacity" === a && (a = "style.opacity");
			this.da &&
				"style." === a.substr(0, 6) &&
				(this.da.style[a.substr(6)] = c || "");
		};
		a.prototype.createElement = function() {
			var a = this.ba.$component;
			Tg("Create component element of type %s", a);
			var c = Uc(this.mq, this);
			if (!(a in P.ve)) throw Error("Error: No component registered for " + a);
			c = P.Zi(this.mq, a, { nid: this.id, "z-type": a }, c);
			this.Jo = P.ve[a].draw || null;
			this.scope = c.scope;
			return c.node;
		};
		a.prototype.format = function(a, c) {
			var b = this;
			this.Gv = c;
			Tg("FORMAT type %s", this.ba.$component);
			if (null === this.da) {
				this.da = this.createElement();
				this.da.style.boxSizing = "border-box";
				this.da.$E = function() {
					return !1;
				};
				this.parent && Qc(this.parent) && this.HB();
				this.jk && this.jk.observe(this.da);
				for (var d in this.ba) this.$a(d, this.ba[d]);
				this.da.addEventListener("load", function() {
					Tg("Something loaded; request reformat.");
					c.ta("reformat", b.id);
				});
			}
			d = this.Na();
			"style.left" in this.ba &&
				(this.da.style.left = parseFloat(this.ba["style.left"]) + d.Ba + "px");
			"style.top" in this.ba &&
				(this.da.style.top = parseFloat(this.ba["style.top"]) + d.Ca + "px");
			for (d = 0; d < this.children.length; d++) {
				var h = this.nb(d);
				L(h) && h.format(a, c);
			}
		};
		a.prototype.Id = function() {
			if (this.da && this.da.offsetWidth) {
				var a = this.da.offsetWidth,
					c = this.da.offsetHeight;
				this.$d.width = a;
				this.$d.height = c;
				this.rect.width = a;
				this.rect.height = c;
				this.za.width = a;
				this.za.height = c;
				this.Gv &&
					(this.log("%s size has changed: %sx%s", this, a, c),
					this.Gv.uC(this.id));
			}
		};
		a.prototype.sk = function(a, c) {
			this.rect = a;
			this.za = a.clone();
			this.$d = a.clone();
			this.kB = c;
		};
		a.prototype.en = function(a, d) {
			c.prototype.en.call(this, a, d);
			this.da &&
				((this.da.style.transform = "translate(" + a + "px, " + d + "px)"),
				(this.da.style.zIndex = a || d ? "1" : ""));
		};
		a.prototype.wp = function() {
			for (var a = [], c = 0; c < this.children.length; c++) {
				var e = this.nb(c);
				if (L(e)) {
					var f = e.ia("sticky");
					f &&
						((e = { Me: e.id }),
						"row" === f
							? ((e.Cn = this.rect.width), a.push(e))
							: "column" === f && ((e.Dn = this.rect.height), a.push(e)));
				}
			}
			return a;
		};
		a.prototype.la = function(a) {
			if (!this.hidden())
				if (
					(this.log("%s: Drawing %sx%s", this, this.$d.width, this.$d.height),
					a.Ii)
				) {
					a.translate(this.offsetX, this.offsetY);
					var b = a.globalCompositeOperation;
					a.globalCompositeOperation = "destination-out";
					var c = this.$d;
					this.da &&
						this.da.classList.contains("zwibbler-selected") &&
						((c = c.clone()), c.Fd(8, 8));
					a.fillRect(c.x, c.y, c.width, c.height);
					a.globalCompositeOperation = b;
					a.strokeStyle = "rgba(255,0,0,0.2)";
					a.lineWidth = 3;
					a.translate(-this.offsetX, -this.offsetY);
				} else if (this.Jo) this.Jo(this.scope, a);
				else if (this.da) {
					b =
						"VIDEO" === this.da.tagName
							? this.da
							: this.da.querySelector("video");
					c = !1;
					var f = this.$d;
					b &&
						3 <= b.readyState &&
						!u.TA(b) &&
						(a.drawImage(b, f.x, f.y, f.width, f.height), (c = !0));
					c ||
						((a.fillStyle = "#cccccc"),
						a.fillRect(f.x, f.y, f.width, f.height));
				}
		};
		a.prototype.kc = function() {
			return !0;
		};
		a.prototype.HB = function() {
			if (this.parent && Qc(this.parent) && this.parent.da) {
				var a = this.parent.ie(this);
				if (-1 === a) throw Error("Child node not found");
				var c = Vg(this.parent.da, this.ba.$component);
				a = this.parent.$p(a);
				c && this.da && c.insertBefore(this.da, a);
			}
		};
		a.prototype.vj = function() {
			if (!this.da) return this.rect;
			var a = u(this.da).Vl();
			return new G(
				this.rect.x - a.left,
				this.rect.y - a.top,
				this.rect.width + a.left + a.right,
				this.rect.height + a.top + a.bottom,
			);
		};
		a.prototype.Tg = function() {
			return !1;
		};
		a.prototype.Mg = function(a, d) {
			switch (a) {
				case "style.width":
				case "style.left":
				case "style.top":
				case "style.height":
					if ("number" === typeof d) return d + "px";
			}
			return c.prototype.Mg.call(this, a, d);
		};
		a.prototype.pf = function() {
			return !1;
		};
		return a;
	})(Ug(dd));
	Vc.vd("HTMLNode", Xg);
	function Vg(c, a) {
		if (c.classList.contains("zwibbler-page")) return c;
		for (
			var b = c.querySelectorAll("[container-for]"), d = null, e = 0;
			e < b.length;
			e++
		)
			if ($f(b[e], a)) {
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
	function $f(c, a) {
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
	var Yg = (function(c) {
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
				L(d) && d.format(a, c);
			}
		};
		return a;
	})(Ug(dd));
	dd.vd("GroupNode", Yg);
	var Zg = (function() {
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
		c.prototype.ru = function(a) {
			var b;
			Kf(a instanceof c);
			var d = new c();
			for (b in this.keys) a.contains(b) && d.add(b);
		};
		c.prototype.gj = function(a) {
			var b;
			Kf(a instanceof c);
			var d = new c();
			for (b in this.keys) a.contains(b) || d.add(b);
			return d;
		};
		c.prototype.rc = function() {
			var a;
			var b = [];
			for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(a);
			return b;
		};
		c.prototype.KD = function() {
			var a;
			var b = [];
			for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(parseFloat(a));
			return b;
		};
		c.prototype.clear = function() {
			this.keys = {};
		};
		c.prototype.Oc = function(a) {
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
			d.log = z.create("PAGE", !0);
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
		a.prototype.fd = function() {
			return "width" in this.ba && "height" in this.ba
				? new lc(this.ba.width, this.ba.height)
				: null;
		};
		return a;
	})(Ug(Vc));
	dd.vd("PageNode", ah);
	var bh = z.create("crdt"),
		ch = (function() {
			function c(a, b, c) {
				this.Gd = a;
				this.Yb = b;
				this.Ek = c;
			}
			c.prototype.before = function(a) {
				return (
					this.Gd < a.Gd ||
					(this.Gd === a.Gd &&
						(this.Yb < a.Yb || (this.Yb === a.Yb && this.Ek < a.Ek)))
				);
			};
			c.prototype.encode = function() {
				return (
					this.Gd.toString(36) + ":" + this.Yb + ":" + this.Ek.toString(36)
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
			c.prototype.Og = function() {
				return this.Nb.Yb + "-" + this.Nb.Ek.toString(36);
			};
			c.prototype.before = function(a) {
				return this.Nb.before(a.Nb);
			};
			c.Xc = function(a, b) {
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
				this.pe = a;
				this.Ma = b;
			}
			c.prototype.encode = function() {
				return this.pe + ":" + this.Ma.encode();
			};
			c.prototype.toString = function() {
				return this.encode();
			};
			c.Rb = function(a) {
				var b = a.split(":");
				if (2 !== b.length) throw Error("Could not decode treepath: " + a);
				return new c(b[0], zg.Rb(b[1]));
			};
			return c;
		})(),
		hh = (function() {
			function c(a, b, c) {
				this.Ka = a;
				this.cd = b;
				this.ba = c;
				this.type = "c";
			}
			c.prototype.encode = function() {
				var a = JSON.stringify(this.ba);
				return (
					"C" +
					this.Ka +
					";" +
					this.cd.encode() +
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
					this.cd +
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
					  { Rf: new c(e[1], eh.Rb(e[2]), a), position: d.lastIndex + b + 1 })
					: null;
			};
			c.prototype.kk = function(a) {
				this.cd = a.kk(this.cd, this.Ka);
			};
			c.prototype.Sc = function(a) {
				a.createNode(this.Ka, this.cd, this.ba);
			};
			return c;
		})();
	(function() {
		function c(a) {
			this.MB = a;
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
		c.prototype.Sc = function() {};
		c.prototype.toString = function() {
			return "NULLIFIED " + this.MB;
		};
		return c;
	})();
	var gh = (function() {
			function c(a) {
				this.Ka = a;
				this.type = "d";
				this.Xj = !1;
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
					? { Rf: new c(a[1]), position: d.lastIndex }
					: null;
			};
			c.prototype.Sc = function(a) {
				a.we(this.Ka);
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
					? { Rf: new c(a[1]), position: d.lastIndex }
					: null;
			};
			c.prototype.Sc = function(a) {
				a.ww(this.Ka);
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
				this.Ne = c;
				this.type = "s";
				this.Xj = !1;
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
				if (null === this.Ne) {
					if (this.Xj) return;
					throw Error(
						"SetPropertiesOp was not executed before inversion: " + this,
					);
				}
				a.push(new c(this.Ka, this.Ne));
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
					return { Rf: new c(e[1], a, null), position: d.lastIndex + b + 1 };
				}
				return null;
			};
			c.prototype.Sc = function(a) {
				var b = a.ub(this.Ka);
				this.Ne = {};
				for (var c in this.ba) this.Ne[c] = b[c];
				a.Xb(this.Ka, this.ba);
			};
			return c;
		})(),
		lh = (function() {
			function c(a, b, c) {
				void 0 === c && (c = null);
				this.Ka = a;
				this.cd = b;
				this.src = c;
				this.type = "m";
				this.Xj = !1;
			}
			c.prototype.clone = function(a) {
				a.push(new c(this.Ka, this.cd, this.src));
			};
			c.prototype.inverse = function(a) {
				if (!this.src) {
					if (this.Xj) return;
					throw Error("moveOp: Must be executed before inversion");
				}
				a.push(new c(this.Ka, this.src, this.cd));
			};
			c.prototype.encode = function() {
				return "M" + this.Ka + ";" + this.cd.encode() + ";";
			};
			c.prototype.toString = function() {
				return "MOVE " + this.Ka + " -> " + this.cd;
			};
			c.Rb = function(a, b) {
				var d = /M([^;]+);([^;]+);/g;
				d.lastIndex = b;
				return (a = d.exec(a)) && a.index === b
					? { Rf: new c(a[1], eh.Rb(a[2])), position: d.lastIndex }
					: null;
			};
			c.prototype.kk = function(a) {
				this.cd = a.kk(this.cd, this.Ka);
			};
			c.prototype.Sc = function(a) {
				var b = a.Fa[this.Ka];
				b && b.parent && a.has(this.cd.pe)
					? ((this.src = new eh(b.parent.Ka, b.Ma)), a.hd(this.Ka, this.cd))
					: (this.Xj = !0);
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
				this.Ua = b;
				this.Fa = {};
				this.tf = new Ag(a);
				this.cl("0");
			}
			c.prototype.cl = function(a) {
				this.Fa[a] = {
					Ka: a,
					parent: null,
					Ma: new zg([], []),
					children: [],
					index: 0,
					Ud: !1,
					ge: null,
					Br: 0,
				};
			};
			c.prototype.has = function(a) {
				return a in this.Fa;
			};
			c.prototype.ed = function(a) {
				a = this.Fa[a];
				if (!a) return !1;
				for (;;) {
					if (a.Ud) return !1;
					if (!a.parent) break;
					a = a.parent;
				}
				return !0;
			};
			c.prototype.kk = function(a, b) {
				if (!this.has(a.pe)) return a;
				bh("Attempt to retarget %s", a);
				var c = this.tj(a);
				b = this.op(a.pe, b, c);
				var e = this.tj(a);
				if (c !== e)
					throw Error(
						"retarget failed: index=" +
							c +
							" newIndex=" +
							c +
							" " +
							a +
							"   " +
							b,
					);
				bh("Retarget %s -> %s", a, b);
				return b;
			};
			c.prototype.op = function(a, b, c) {
				var d = this.Fa[a];
				if (!d) throw Error("getInsertPath: " + a + " does not exist.");
				var f = 0,
					h;
				for (h = 0; h < d.children.length; h++) {
					var k = d.children[h];
					if (!k.Ud) {
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
							" children.",
					);
				bh(
					"Move " + a + " index=" + h + " children.length=" + d.children.length,
				);
				0 === d.children.length
					? ((b = this.tf.first), (c = this.tf.ci))
					: 0 === h
					? ((b = this.tf.first), (c = d.children[h].Ma))
					: h === d.children.length
					? ((b = d.children[d.children.length - 1].Ma), (c = this.tf.ci))
					: ((b = d.children[h - 1].Ma),
					  (c = h < d.children.length ? d.children[h].Ma : this.tf.ci));
				try {
					var l = new eh(a, this.tf.io(b, c));
				} catch (n) {
					bh(
						"Path between %s and %s, index=%s children=%s",
						b,
						c,
						h,
						d.children.length,
					);
					bh("debug info: index is %s", h);
					for (a = 0; a < d.children.length; a++)
						bh(
							"Child %s nid=%s lpath %s",
							a,
							d.children[a].Ka,
							d.children[a].Ma,
						);
					throw n;
				}
				bh("Path between " + b + " and " + c + " is " + l.Ma);
				a = this.tj(l);
				if (a !== h) {
					bh("debug info: wanted index is %s, got %s", h, a);
					for (a = 0; a < d.children.length; a++)
						bh(
							"Child %s nid=%s lpath %s",
							a,
							d.children[a].Ka,
							d.children[a].Ma,
						);
					throw Error("getInsertPath() failed; (" + l + ") index=" + h);
				}
				return l;
			};
			c.prototype.tj = function(a) {
				var b = this.Fa[a.pe];
				if (!b)
					throw Error("getInsertIndex: parent " + a.pe + " does not exist");
				var c = mh(b.children.length, function(c) {
					return zg.Xc(b.children[c].Ma, a.Ma);
				});
				if (0 > c || c > b.children.length)
					throw Error(
						"Asked to insert at " +
							a.pe +
							":" +
							c +
							" but parent has " +
							b.children.length +
							" children.",
					);
				return c;
			};
			c.prototype.createNode = function(a, b, c) {
				if (a in this.Fa) this.ww(a);
				else {
					var d = this.Fa[b.pe],
						f = this.tj(b),
						h = {
							Ka: a,
							parent: d,
							children: [],
							Ma: b.Ma,
							index: f,
							Ud: !1,
							ge: null,
							Br: 0,
						};
					this.Fa[a] = h;
					d.children.splice(f, 0, h);
					d.Br = f - 1;
					this.Qs(d.children, f);
					this.ed(a)
						? this.Ua && this.Ua.createNode(a, b.pe, this.np(h), c)
						: (h.ge = c);
				}
			};
			c.prototype.Qs = function(a, b) {
				if (0 < b && 0 <= zg.Xc(a[b - 1].Ma, a[b].Ma)) {
					bh("debug info: index is %s", b);
					for (var c = 0; c < a.length; c++)
						bh("Child %s nid=%s lpath %s", c, a[c].Ka, a[c].Ma);
					throw Error(
						"Error: LPaths out of order. " + a[b - 1].Ma + " >=  " + a[b].Ma,
					);
				}
				if (b < a.length - 1 && 0 <= zg.Xc(a[b].Ma, a[b + 1].Ma)) {
					bh("debug info: index is %s", b);
					for (c = 0; c < a.length; c++)
						bh("Child %s nid=%s lpath %s", c, a[c].Ka, a[c].Ma);
					throw Error(
						"Error: LPaths out of order. " + a[b].Ma + " >=  " + a[b + 1].Ma,
					);
				}
			};
			c.prototype.we = function(a) {
				(a = this.Fa[a]) && a.parent && !a.Ud && ((a.Ud = !0), this.remove(a));
			};
			c.prototype.remove = function(a) {
				for (var b = a.children.length - 1; 0 <= b; b--) {
					var c = a.children[b];
					c.Ud || this.remove(c);
				}
				this.Ua ? ((a.ge = this.Ua.ub(a.Ka)), this.Ua.we(a.Ka)) : (a.ge = {});
			};
			c.prototype.np = function(a) {
				if (!a.parent) throw Error("Expected parent");
				for (var b = a.parent, c = 0, e = 0; e < b.children.length; e++) {
					if (b.children[e] === a) return c;
					b.children[e].Ud || c++;
				}
				throw Error("node " + a.Ka + " not in parent's child list");
			};
			c.prototype.ww = function(a) {
				(a = this.Fa[a]) && a.Ud && a.parent && ((a.Ud = !1), this.Cv(a));
			};
			c.prototype.Cv = function(a) {
				if (this.Ua && this.ed(a.Ka) && a.parent) {
					if (!a.ge)
						throw Error("Properties of " + a.Ka + " should have been saved");
					this.Ua.createNode(a.Ka, a.parent.Ka, this.np(a), a.ge);
				}
				a.ge = {};
				var b = 0;
				for (a = a.children; b < a.length; b++) {
					var c = a[b];
					c.Ud || this.Cv(c);
				}
			};
			c.prototype.Aa = function(a) {
				a in this.Fa ||
					(this.Fa[a] = {
						Ka: a,
						Ud: !0,
						children: [],
						index: 0,
						ge: {},
						Ma: this.tf.first,
						Br: 0,
						parent: null,
					});
				return this.Fa[a];
			};
			c.prototype.hd = function(a, b) {
				var c = this.Fa[a];
				if (c && c.parent) {
					var e = this.Fa[b.pe];
					if (e) {
						for (var f = 0; f < c.parent.children.length; f++)
							if (c.parent.children[f] === c) {
								c.parent.children.splice(f, 1);
								break;
							}
						f = this.tj(b);
						c.parent = e;
						c.Ma = b.Ma;
						e.children.splice(f, 0, c);
						this.Qs(e.children, f);
						this.Ua && this.ed(a) && this.Ua.hd(a, b.pe, this.np(c));
					}
				}
			};
			c.prototype.Xb = function(a, b) {
				var c = this.Aa(a);
				this.Ua && this.ed(a) ? this.Ua.Xb(a, b) : c.ge && nh(c.ge, b);
			};
			c.prototype.ub = function(a) {
				var b = this.Fa[a];
				return b && b.Ud ? b.ge : this.Ua ? this.Ua.ub(a) : {};
			};
			c.prototype.wa = function(a, b) {
				this.Ua && this.Ua.wa(a, b);
			};
			return c;
		})(),
		rh = (function() {
			function c(a, b) {
				this.Yb = b;
				this.Gd = 0;
				this.all = [];
				this.hm = {};
				this.nd = [];
				this.next = 0;
				this.te = !1;
				this.dB = "";
				this.Di = [];
				this.local = [];
				this.Fk = "";
				this.Qp = 0;
				this.uq = !1;
				this.Ua = new oh(this.Yb, a);
			}
			c.prototype.Qu = function() {
				var a = new Date().getTime();
				a <= this.Qp && (a = this.Qp + 1);
				return (this.Qp = a);
			};
			c.prototype.Sc = function(a) {
				var b = 0;
				for (a = a.ops; b < a.length; b++) {
					var c = a[b];
					bh("Executing %s", c);
					c.Sc(this.Ua);
				}
			};
			c.prototype.locked = function() {
				return "" !== this.dB;
			};
			c.prototype.createNode = function(a, b, c, e) {
				this.te || this.bl(new hh(a, this.Ua.op(b, a, c), e));
				return a;
			};
			c.prototype.we = function(a) {
				this.te || this.bl(new gh(a));
			};
			c.prototype.hd = function(a, b, c) {
				this.te || this.bl(new lh(a, this.Ua.op(b, a, c)));
			};
			c.prototype.Xb = function(a, b) {
				var c = !1,
					e;
				for (e in b) {
					c = !0;
					break;
				}
				c && !this.te && this.bl(new kh(a, b));
			};
			c.prototype.ub = function(a) {
				return this.Ua.ub(a);
			};
			c.prototype.bl = function(a) {
				this.Di.push(a);
				this.locked() || (bh("Executing %s", a), a.Sc(this.Ua));
			};
			c.prototype.wa = function(a, b) {
				if (!this.uq) {
					if (!this.te && this.Di.length) {
						a = new ch(this.Gd, this.Yb, this.Qu());
						a = new dh(a);
						for (var c = 0, e = this.Di; c < e.length; c++) a.ops.push(e[c]);
						b || ((this.nd.length = this.next++), this.nd.push(a));
						this.local.push(a);
						this.all.push(a);
						this.hm[a.Og()] = !0;
						this.Gd++;
						this.Di.length = 0;
						this.Fk && (this.xg(this.Fk), (this.Fk = ""));
					} else this.te && ((this.uq = !0), this.Ua.wa(a, b), (this.uq = !1));
					this.Di.length = 0;
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
			c.prototype.xg = function(a) {
				if (this.locked() || this.Di.length)
					(this.Fk += a),
						bh(
							"Ignore remote changes while " +
								(this.locked() ? "locked" : "uncommitted"),
						);
				else {
					var b = 0;
					a = ph(a);
					for (var c = 0; c < a.length; c++)
						(b = Math.max(b, a[c].Nb.Gd)),
							this.hm[a[c].Og()] && (a.splice(c, 1), c--);
					if (0 !== a.length) {
						this.Gd = Math.max(this.Gd, b) + 1;
						b = a[0];
						for (c = 1; c < a.length; c++) a[c].before(b) && (b = a[c]);
						for (
							var e = this.all.length - 1;
							0 <= e && !this.all[e].before(b);
							e--
						);
						e++;
						this.te = !0;
						for (c = 0; c < a.length; c++) {
							var f = a[c];
							this.all.push(f);
							this.hm[f.Og()] = !0;
						}
						this.all.sort(dh.Xc);
						if (this.all[e] !== b) {
							for (c = 0; c < this.all.length; c++)
								c === e && bh("MergePoint"), bh(this.all[c].toString());
							bh("New lists:");
							for (b = 0; b < a.length; b++) bh(a[b].toString());
							throw Error("Assumption violated");
						}
						bh("%s Executing new changes from %s", this.Yb, e);
						for (c = e; c < this.all.length; c++) this.Sc(this.all[c]);
						this.wa(!0, !1);
						this.te = !1;
						bh("%s addRemoteChanges done", this.Yb);
					}
				}
			};
			c.prototype.wC = function() {
				this.local = this.all.concat();
			};
			c.prototype.Gz = function() {
				return this.local.length
					? new qh(
							this.encode(this.local),
							this.local[this.local.length - 1].Og(),
					  )
					: new qh("", "0");
			};
			c.prototype.Qj = function(a) {
				for (var b = this.local.length - 1; 0 <= b; b--)
					if (a === this.local[b].Og()) {
						this.local.splice(0, b + 1);
						break;
					}
			};
			c.prototype.af = function() {
				return 0 < this.next && !this.locked();
			};
			c.prototype.$e = function() {
				return this.next < this.nd.length && !this.locked();
			};
			c.prototype.Wc = function() {
				this.af() && this.zv(this.nd[--this.next], !0);
			};
			c.prototype.qe = function() {
				this.$e() && this.zv(this.nd[this.next++], !1);
			};
			c.prototype.to = function() {
				this.next = this.nd.length = 0;
			};
			c.prototype.zv = function(a, b) {
				this.te = !0;
				var c = new ch(this.Gd, this.Yb, this.Qu());
				a = b ? a.inverse(c) : a.clone(c);
				b = 0;
				for (c = a.ops; b < c.length; b++) {
					var e = c[b];
					("m" !== e.type && "c" !== e.type) || e.kk(this.Ua);
				}
				this.local.push(a);
				this.all.push(a);
				this.hm[a.Og()] = !0;
				this.Gd++;
				this.Sc(a);
				this.wa(!1, !0);
				this.te = !1;
			};
			c.prototype.up = function() {
				for (var a = [], b = 0, c = this.all; b < c.length; b++) {
					var e = c[b];
					a.push({ Yx: e.Og(), Nb: e.Nb.Ek });
				}
				return a;
			};
			c.prototype.cl = function(a) {
				this.Ua.cl(a);
			};
			return c;
		})(),
		qh = (function() {
			function c(a, b) {
				this.ro = a;
				this.ZA = b;
			}
			c.prototype.getData = function() {
				return this.ro;
			};
			c.prototype.empty = function() {
				return 0 === this.ro.length;
			};
			c.prototype.toString = function() {
				return this.ro;
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
			a[a.length - 1].ops.push(e.Rf);
		}
		return a;
	}
	var sh = z.create("DOCTREE"),
		th = (function() {
			function c(a, b) {
				this.uf = a;
				this.Fa = {};
				this.Fa["0"] = b;
			}
			c.prototype.xx = function(a, b) {
				if (a in this.Fa) throw Error("Node " + a + " already exists");
				this.Fa[a] = b;
			};
			c.prototype.createNode = function(a, b, c, e) {
				sh("createNode(" + a + ", " + b + ", " + c + ")");
				if (a in this.Fa) throw Error("createNode " + a + " already exists");
				b = this.Aa(b);
				if (b.children.length + 1 < c)
					throw Error(
						"Asked to insert at index " +
							c +
							" but parent only has " +
							b.children.length +
							" children",
					);
				e = this.uf.Hu(a, e);
				b.Gp(e, c);
				e.parent = b;
				this.Fa[a] = e;
				this.uf.Zu && this.uf.Zu(e);
			};
			c.prototype.Aa = function(a) {
				if (a in this.Fa) return this.Fa[a];
				throw Error("nid " + a + " does not exist");
			};
			c.prototype.ed = function(a) {
				return a in this.Fa;
			};
			c.prototype.we = function(a) {
				sh("deleteNode(" + a + ")");
				var b = this.Aa(a),
					c = b.parent;
				if (!c) throw Error("Parent of " + a + " is null?!");
				var e = c.ie(b);
				if (0 > e)
					throw Error(
						"Asked to delete " + a + " but it is not in parent's children",
					);
				if (0 !== b.children.length)
					throw Error("Asked to delete " + a + " but it still has children.");
				for (a = b.children.length - 1; 0 <= a; a--) {
					var f = b.nb(a);
					this.we(f.id);
				}
				this.uf.$u && this.uf.$u(b);
				c.removeChild(e);
				delete this.Fa[b.id];
			};
			c.prototype.hd = function(a, b, c) {
				sh("moveNode(" + a + ", dest=" + b + ":" + c + ")");
				var d = this.Aa(a),
					f = this.Aa(b),
					h = d.parent;
				if (null === h) throw Error("node " + a + " does not have any parent");
				a = h.ie(d);
				if (f.children.length < (d.parent === f ? c + 1 : c))
					throw Error(
						"asked to shift node at " +
							b +
							":" +
							c +
							" but it only has " +
							f.children.length +
							" children",
					);
				h.removeChild(a);
				f.Gp(d, c);
				d.parent = f;
			};
			c.prototype.Xb = function(a, b) {
				if (a in this.Fa) {
					a = this.Aa(a);
					for (var c in b) a.setProperty(c, b[c]);
					this.uf.fv && this.uf.fv(a, b);
				}
			};
			c.prototype.ub = function(a) {
				return a in this.Fa ? this.Aa(a).ub() : {};
			};
			c.prototype.wa = function(a) {
				this.uf.Fm && this.uf.Fm(a);
			};
			c.prototype.Oc = function(a) {
				for (var b in this.Fa) a(this.Fa[b]);
			};
			return c;
		})();
	var uh = z.create("BRUSH"),
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
			a.prototype.ub = function() {
				var a = c.prototype.ub.call(this);
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
				f = G.xh(this.oa);
				e = this.Na().Hb();
				a = this.ba.lineWidth;
				f.Fd(a / e.x, a / e.y);
				this.za = f.clone();
				f = new Bc(f);
				f.transform(this.ba.matrix);
				this.rect = G.xh(f.oa);
				this.Ob = Cc(this.ba.dashes || "");
			};
			a.prototype.Ib = function(a, c, e, f) {
				return this.rect.Mc(a, c, e) &&
					((a = this.dc().apply(a, c)),
					(c = this.dc().Hb()),
					xc(
						this.oa,
						a.x,
						a.y,
						0.5 * (c.x + c.y) * Math.max(12 / f, e, this.ba.lineWidth / 2),
					))
					? this
					: null;
			};
			a.prototype.Of = function(a) {
				var b, c;
				var f = this.ba.points;
				if (0 !== f.length) {
					a.save();
					a.beginPath();
					var h = this.ia("lineCap") || "round";
					a.lineCap = h;
					a.lineJoin = "round" === h ? "round" : "bevel";
					if (1 < this.Ob.length) Dc(a, this.oa, this.Ob);
					else
						for (
							a.moveTo(f[0], f[1]), h = b = 2, c = f.length - 1;
							b <= c;
							h = b += 2
						)
							a.lineTo(f[h], f[h + 1]);
					this.dc().Fc(a);
					ic(a, this.ba.strokeStyle);
					a.restore();
				}
			};
			a.IE = !1;
			return a;
		})(dd);
	dd.vd("BrushNode", vh);
	function wh(c) {
		return {
			m11: c.m11,
			m12: c.m21,
			m21: c.m12,
			m22: c.m22,
			dx: c.Ba,
			dy: c.Ca,
		};
	}
	var V = (function() {
			function c(a) {
				this.node = a;
				this.request = null;
			}
			c.prototype.$C = function(a) {
				this.request = a;
			};
			c.prototype.Zl = function() {
				if (!this.request)
					throw Error("Cannot call this method before format() is called.");
				return this.request;
			};
			c.prototype.wz = function(a, b, c) {
				D.ga("formatFill", arguments, xh, D.String, D.String);
				this.node.Ft(b, a, this.Zl(), c);
			};
			c.prototype.Uz = function(a) {
				D.ga("getFill", arguments, D.String);
				return this.node.hp(a);
			};
			c.prototype.ig = function() {
				this.Zl().jg(this.node.id);
			};
			c.prototype.Tp = function(a, b) {
				D.ga("loadImage", arguments, D.String, D.Function);
				this.Zl().add(this.node.id, "image", a, null, b);
			};
			c.prototype.lz = function(a) {
				D.ga("fillEraser", arguments, xh);
				a.save();
				this.node.dc().Fc(a);
				this.node.qt(a, !0);
				a.restore();
			};
			c.prototype.FD = function(a) {
				D.ga("strokeEraser", arguments, xh);
				a.save();
				this.node.dc().Fc(a);
				this.node.qt(a, !1);
				a.restore();
			};
			c.prototype.Jl = function(a, b) {
				return P.Jl(a, b);
			};
			c.prototype.Hb = function() {
				return 1;
			};
			c.prototype.VB = function(a) {
				D.ga("parseFont", arguments, D.String);
				return new Sd(a);
			};
			c.prototype.yc = function(a) {
				D.ga("getConfig", arguments, D.String);
				return this.Zl().yc(a);
			};
			c.prototype.QD = function(a, b) {
				D.ga("transformPoint", arguments, D.Number, D.Number);
				var c = this.node.Na().apply(a, b);
				return { x: c.x, y: c.y };
			};
			c.prototype.RD = function(a, b, c, e) {
				D.ga(
					"transformRectangle",
					arguments,
					D.Number,
					D.Number,
					D.Number,
					D.Number,
				);
				var d = new G(a, b, c, e);
				d.transform(this.node.Na());
				return { x: d.x, y: d.y, width: d.width, height: d.height };
			};
			c.prototype.WD = function(a, b) {
				D.ga("untransformPoint", arguments, D.Number, D.Number);
				var c = this.node.dc().apply(a, b);
				return { x: c.x, y: c.y };
			};
			c.prototype.Fc = function(a) {
				this.node.Na().Fc(a);
			};
			c.prototype.VD = function(a) {
				D.ga("untransformCanvas", arguments, xh);
				this.node.dc().Fc(a);
			};
			c.prototype.Wl = function() {
				return this.node.Wh({});
			};
			c.prototype.ia = function(a) {
				D.ga("getProperty", arguments, D.String);
				return this.node.ia(a, !0);
			};
			c.prototype.Uh = function(a, b) {
				D.ga("getNodeProperty", arguments, D.String, D.String);
				var c = this.node.aa.Aa(a);
				if (c) return c.ia(b);
			};
			c.prototype.vu = function(a) {
				D.ga("isNode", arguments, D.String);
				return null !== this.node.aa.Aa(a);
			};
			c.prototype.yj = function(a) {
				D.ga("getNodeRectangle", arguments, D.String);
				var b = this.node.aa.Aa(a);
				return b && L(b)
					? ((b = b.rect), new Md(b.x, b.y, b.width, b.height))
					: new Md(0, 0, 0, 0);
			};
			return c;
		})(),
		yh = (function(c) {
			function a(a, d) {
				a = c.call(this, a, d) || this;
				a.Za = null;
				a.children = [];
				a.log = z.create("CUSTOM");
				a.cc = new V(a);
				a.setProperty("matrix", new J());
				return a;
			}
			__extends(a, c);
			a.prototype.type = function() {
				return "CustomNode";
			};
			a.prototype.Um = function() {
				return this.ba.nodeType || this.type();
			};
			a.prototype.kc = function() {
				return !0;
			};
			a.prototype.Ol = function() {
				console.log("getDependencies of customnode called", this.Za);
				return this.Za && this.Za.getDependencies
					? this.Za.getDependencies()
					: [];
			};
			a.prototype.setProperty = function(a, d) {
				if (null === this.Za && "nodeType" === a) {
					a = P.tl[d];
					this.Za = new a(this.id, this.cc);
					for (var b in this.ba) this.setProperty(b, this.ba[b]);
					this.ba.nodeType = d;
				} else
					(d = c.prototype.setProperty.call(this, a, d)),
						"matrix" === a && (d = wh(d)),
						this.Za && this.Za.setProperty && this.Za.setProperty(a, d);
			};
			a.prototype.pf = function() {
				return this.Za && this.Za.hasEditMode ? this.Za.hasEditMode() : !1;
			};
			a.prototype.fp = function() {
				var a = [];
				this.Za && this.Za.getEditHandles && (a = this.Za.getEditHandles());
				for (var c = this.Na(), e = [], f = 0; f < a.length; f++) {
					var h = a[f];
					e.push(c.apply(h.x || 0, h.y || 0));
				}
				return e;
			};
			a.prototype.Ib = function(a, c, e, f) {
				a = this.dc().apply(a, c);
				c = this.dc().Hb();
				c = 0.5 * (c.x + c.y);
				var b = this.za;
				if (b.width < 5 * f || b.height < 5 * f) (b = b.clone()), b.Fd(10);
				return this.hidden() ||
					this.ia("locked") ||
					!b.Mc(a.x, a.y, e * c) ||
					(this.Za && this.Za.hittest && !this.Za.hittest(a.x, a.y, e, f))
					? null
					: this;
			};
			a.prototype.kj = function(a, c) {
				a.beginPath();
				var b = 10 * c;
				c *= 2;
				for (var d = 0, h = this.fp(); d < h.length; d++) {
					var k = h[d];
					a.moveTo(k.x + b, k.y);
					a.arc(k.x, k.y, b, 0, 2 * Math.PI, !1);
				}
				a.strokeStyle = "#0050B7";
				a.lineWidth = c;
				a.stroke();
			};
			a.prototype.Ql = function(a) {
				"number" === typeof a && this.fp();
			};
			a.prototype.ai = function(a, c, e) {
				for (var b = this.fp(), d = 0; d < b.length; d++)
					if (20 > b[d].bc(new F(a, c)) / e) return d;
				return null;
			};
			a.prototype.Le = function(a, c, e) {
				var b = {};
				this.Za &&
					this.Za.moveEditHandle &&
					((c = this.dc().apply(c, e)),
					(b = this.Za.moveEditHandle(a, c.x, c.y)),
					b ||
						(console.warn("moveEditHandle(): Must update your code."),
						(b = {})));
				return b;
			};
			a.prototype.ia = function(a, d) {
				void 0 === d && (d = !1);
				var b;
				!d && this.Za && this.Za.getProperty && (b = this.Za.getProperty(a));
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
									b.dy || 0,
							  )
						: new J());
				return b;
			};
			a.prototype.lg = function(a) {
				c.prototype.lg.call(this, a);
				this.Za.setHidden && this.Za.setHidden(a);
			};
			a.prototype.format = function(a, c) {
				this.Za &&
					(this.cc.$C(c),
					"format" in this.Za && this.Za.format(a, this.cc),
					this.Za.getUntransformedRect
						? ((a = this.Za.getUntransformedRect()),
						  (this.za = new G(
								a.x || 0,
								a.y || 0,
								a.width || 0,
								a.height || 0,
						  )),
						  (this.rect = this.za.clone()),
						  this.rect.transform(this.Na()))
						: this.log(
								"Error: NodeType %s missing getUntransformedRect()",
								this.ba.nodeType,
						  ));
			};
			a.prototype.Of = function(a) {
				this.hidden() ||
					(a.save(),
					(a.getTransform = function() {
						return a.Ii ? wh(a.Ii) : wh(new J());
					}),
					(this.cc.getScale = function() {
						return a.Ii ? a.Ii.Hb().x : 1;
					}),
					this.Za.draw(a, this.cc),
					a.restore());
			};
			a.prototype.Vq = function() {
				var a = !1;
				this.Za.shouldEditOnSelect && (a = this.Za.shouldEditOnSelect);
				return a;
			};
			return a;
		})(dd);
	dd.vd("CustomNode", yh);
	V.prototype.formatFill = V.prototype.wz;
	V.prototype.getFill = V.prototype.Uz;
	V.prototype.reformat = V.prototype.ig;
	V.prototype.loadImage = V.prototype.Tp;
	V.prototype.fillEraser = V.prototype.lz;
	V.prototype.strokeEraser = V.prototype.FD;
	V.prototype.formatText = V.prototype.Jl;
	V.prototype.getScale = V.prototype.Hb;
	V.prototype.parseFont = V.prototype.VB;
	V.prototype.getConfig = V.prototype.yc;
	V.prototype.transformPoint = V.prototype.QD;
	V.prototype.transformRectangle = V.prototype.RD;
	V.prototype.untransformPoint = V.prototype.WD;
	V.prototype.transformCanvas = V.prototype.Fc;
	V.prototype.untransformCanvas = V.prototype.VD;
	V.prototype.getNodeObject = V.prototype.Wl;
	V.prototype.getProperty = V.prototype.ia;
	V.prototype.getNodeProperty = V.prototype.Uh;
	V.prototype.isNode = V.prototype.vu;
	V.prototype.getNodeRectangle = V.prototype.yj;
	var zh = (function(c) {
		function a(a, d) {
			a = c.call(this, a, d) || this;
			a.da = null;
			a.vl = void 0;
			a.gc = new Bc();
			a.Ep = new Bc();
			a.Wf = new J();
			a.readOnly = !1;
			a.Mb = !1;
			a.Be = null;
			a.width = 0;
			a.height = 0;
			a.Jd = null;
			a.uv = "";
			a.log = z.create("DomNode", !0);
			a.Hi = -1;
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
		a.prototype.$p = function() {
			return null;
		};
		a.prototype.setProperty = function(a, d) {
			if ("data" === a)
				this.da && (u(this.da).remove(), (this.vl = this.da = null));
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
		a.prototype.YC = function(a) {
			null !== this.Be &&
				(this.log(
					"Node %s receives DOM element and requests reformat",
					this.id,
				),
				this.da &&
					(this.log("   Remove existing DOM element"), u(this.da).remove()),
				(this.da = a),
				(this.da.style.position = "absolute"),
				u(this.da).Fp(this.Be.canvas),
				(this.width =
					this.da.offsetWidth ||
					parseFloat(this.da.getAttribute("width") || "0")),
				(this.height =
					this.da.offsetHeight ||
					parseFloat(this.da.getAttribute("height") || "0")),
				u(this.da).remove(),
				this.zi(this.readOnly, !0),
				(this.da.style.top = "0px"),
				(this.da.style.left = "0px"),
				(this.da.style.boxSizing = "border-box"),
				this.da.classList.add("zwibbler-dom-node"),
				this.da.setAttribute("zwibbler-node-id", "" + this.id),
				this.Yn("transformOrigin", "top left"),
				this.log(
					"element height: %s, %s",
					this.da.offsetWidth,
					this.da.offsetHeight,
				),
				this.Be.jg(this.id));
		};
		a.prototype.oc = function() {
			return this.da;
		};
		a.prototype.Yn = function(a, c) {
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
		a.prototype.lg = function(a) {
			dd.prototype.lg.call(this, a);
			this.da && (this.da.style.visibility = this.Tk ? "hidden" : "visible");
		};
		a.prototype.zi = function(a, c) {
			void 0 === c && (c = !1);
			if (c || this.readOnly !== a)
				(this.readOnly = a),
					this.da &&
						this.Be &&
						this.Mb &&
						(this.oq(this.Hi), u(this.da).Fp(this.Be.canvas));
		};
		a.prototype.format = function(a, c) {
			var b = this;
			this.canvas = c.canvas;
			null === this.da &&
				this.vl !== this.ia("data") &&
				c &&
				((this.vl = this.ia("data")),
				(this.Be = c),
				this.log("DomNode %s requests conversion to DOM element", this.id),
				this.Be.qy(this.vl, this.id));
			if (this.da) {
				this.da.KE = this.id;
				a = this.Na();
				var d = a.Hb();
				this.da.style.width = this.width * d.x + "px";
				this.da.style.height = this.height * d.y + "px";
				a = a.multiply(new sc(1 / d.x, 1 / d.y));
				d = this.Wf;
				d = d.multiply(a);
				d.Mp()
					? (this.Yn("transform", ""),
					  (this.da.style.left = "" + d.Ba + "px"),
					  (this.da.style.top = "" + d.Ca + "px"))
					: ((this.da.style.left = "0px"),
					  (this.da.style.top = "0px"),
					  this.Yn(
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
								d.Ba +
								"," +
								d.Ca +
								")",
					  ));
				this.rect.x = 0;
				this.rect.y = 0;
				this.rect.width = this.width;
				this.rect.height = this.height;
				this.da.style.visibility = this.Tk ? "hidden" : "visible";
			} else
				(this.rect.x = 0),
					(this.rect.y = 0),
					(this.rect.width = 100),
					(this.rect.height = 22);
			this.gc = new Bc(this.rect);
			this.za = this.rect.clone();
			this.rect.transform(this.Na());
			this.gc.transform(this.Na());
			if ((a = this.ba.border))
				this.rect.Fd(a),
					(this.Ep = this.gc.clone()),
					this.Ep.Fd(a / 2),
					this.gc.Fd(a);
			!this.ba.preview || (null !== this.Jd && this.uv === this.ba.preview)
				? this.ba.preview || (this.Jd = null)
				: (this.log("Requesting new preview image for %s", this.ba.preview),
				  (this.Jd = document.createElement("img")),
				  (this.uv = this.Jd.src = this.ba.preview),
				  (this.Jd.onload = function() {
						b.log("Preview image loaded.");
						c.jg(b.id);
				  }),
				  (this.Jd.onerror = function() {
						b.log("Failed to load preview image");
				  }));
		};
		a.prototype.Of = function(a) {
			var b = a.Ii;
			b &&
				this.Be &&
				(b.m11 !== this.Wf.m11 ||
					b.m21 !== this.Wf.m21 ||
					b.m12 !== this.Wf.m12 ||
					b.m22 !== this.Wf.m22 ||
					b.Ba !== this.Wf.Ba ||
					b.Ca !== this.Wf.Ca) &&
				(this.log("Moving DOM element as result of draw zooming"),
				(this.Wf = b),
				this.format(a, this.Be));
			if (this.da) {
				var c = this.ba.border;
				if (c) {
					var f = this.Ep;
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
			if (this.Jd && this.Jd.naturalHeight && !b && this.Mb) {
				this.log(
					"Drawing preview image %s,%s ->%s,s",
					this.Jd.naturalWidth,
					this.Jd.naturalHeight,
					this.width,
					this.height,
				);
				try {
					a.drawImage(
						this.Jd,
						0,
						0,
						this.Jd.naturalWidth,
						this.Jd.naturalHeight,
						0,
						0,
						this.width,
						this.height,
					);
				} catch (h) {
					h instanceof Error &&
						this.log("Tried to draw image, got error: %s", h.toString());
				}
			} else
				b &&
					((b = a.globalCompositeOperation),
					(a.globalCompositeOperation = "destination-out"),
					a.fillRect(this.za.x, this.za.y, this.za.width, this.za.height),
					(a.globalCompositeOperation = b));
		};
		a.prototype.clip = function(a) {
			this.gc.la(a);
		};
		a.prototype.Ib = function(a, c, e, f) {
			return !this.ba.locked &&
				this.rect.Mc(a, c, e) &&
				this.gc.Mc(a, c, Math.max(3 / f, e))
				? this
				: null;
		};
		a.prototype.Em = function() {
			this.da &&
				this.Be &&
				(this.log("Added DOM NODE %s", this.id), this.oq(this.Hi));
			this.Mb = !0;
		};
		a.prototype.Hm = function() {
			this.log("Removed DOM NODE %s", this.id);
			this.da && u(this.da).remove();
			this.Mb = !1;
		};
		a.prototype.oq = function(a) {
			if (this.da && this.canvas && !(0 > a)) {
				a !== this.Hi
					? (this.da.classList.remove("zwibbler-zorder-" + this.Hi),
					  this.da.classList.add("zwibbler-zorder-" + a),
					  (this.Hi = a),
					  this.log("Add class zwibbler-zorder-%s", a))
					: this.log("order=zorder=%s", this.Hi);
				var b = null;
				for (--a; 0 <= a; a--) {
					var c = this.canvas.parentElement.querySelector(
						".zwibbler-zorder-" + a,
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
						? (this.log("Insert after previous."), u(this.da).Fp(b))
						: (this.log("Insert before canvas %s", this.canvas),
						  u(this.da).insertBefore(this.canvas));
			}
		};
		a.prototype.Sa = function() {
			this.da && (this.log("DomNode %s destroyed", this.id), Q.detach(this.da));
		};
		a.prototype.Xv = function(a) {
			this.oq(a);
		};
		a.prototype.vj = function() {
			if (!this.da) return this.rect;
			var a = u(this.da).Vl();
			return new G(
				this.rect.x - a.left,
				this.rect.y - a.top,
				this.rect.width + a.left + a.right,
				this.rect.height + a.top + a.bottom,
			);
		};
		a.prototype.sk = function(a) {
			this.rect = a;
			this.za = a.clone();
		};
		a.prototype.dn = function() {};
		a.prototype.uk = function() {
			throw Error("DomNode: showChild not implemented!");
		};
		return a;
	})(dd);
	dd.vd("DomNode", zh);
	var Ah = (function(c) {
		function a(a, d) {
			a = c.call(this, a, d) || this;
			a.od = null;
			a.Yf = null;
			a.scale = 1;
			a.gc = new Bc();
			a.Ig = [];
			a.fc = new G(0, 0, 100, 20);
			a.$c = new G(0, 0, 100, 20);
			a.log = z.create("IMAGE", !0);
			a.Hv = "";
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
					d !== this.ba.url && (this.Yf = this.od = null);
					break;
				case "brightness":
				case "contrast":
				case "gamma":
					this.Yf = null;
					break;
				case "colour":
					this.Yf = null;
			}
			c.prototype.setProperty.call(this, a, d);
		};
		a.prototype.kc = function(a) {
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
			return c.prototype.kc.call(this, a);
		};
		a.prototype.SC = function(a) {
			a.x = Math.max(a.x, 0);
			a.y = Math.max(a.y, 0);
			a.width = Math.min(a.width, this.fc.width);
			a.height = Math.min(a.height, this.fc.height);
			a.width = Math.max(1, a.width);
			a.height = Math.max(1, a.height);
			return { crop: [a.x, a.y, a.width, a.height].join() };
		};
		a.prototype.Mt = function(a) {
			var b = this.ba.crop;
			a = new G(0, 0, this.fc.width * a, this.fc.height * a);
			b &&
				((b = b.split(",")),
				(a.x = parseFloat(b[0]) | 0),
				(a.y = parseFloat(b[1]) | 0),
				(a.width = parseFloat(b[2]) | 0),
				(a.height = parseFloat(b[3]) | 0));
			return a;
		};
		a.prototype.FC = function() {
			var a = {
				brightness: this.ia("brightness"),
				contrast: this.ia("contrast"),
				gamma: this.ia("gamma"),
				Lc: this.ia("colour"),
			};
			this.Yf =
				void 0 !== a.brightness &&
				void 0 !== a.contrast &&
				void 0 !== a.gamma &&
				this.od
					? this.wt(this.od, a) || this.od
					: void 0 !== a.Lc && this.od
					? this.wt(this.od, {
							brightness: 1,
							contrast: 0,
							gamma: 0,
							Lc: a.Lc,
					  }) || this.od
					: this.od;
		};
		a.prototype.format = function(a, c) {
			function b(a, b, c) {
				l.Ig.push({
					x: l.$c.x + a * l.$c.width,
					y: l.$c.y + b * l.$c.height,
					Dd: c,
				});
			}
			var d = this;
			if (null === this.od && "ImageSurface" in window)
				this.od = new window.ImageSurface(this.ba.url);
			else if (null === this.od) {
				this.fc = new G(0, 0, 100, 20);
				this.Hv !== this.ba.url &&
					((this.Hv = this.ba.url),
					c.add(this.id, "image", this.ba.url, null, function(a) {
						d.log("%s Got image response. Request reformat", d.id);
						d.od = a;
						return c.jg(d.id);
					}));
				return;
			}
			this.fc = new G(0, 0, this.od.width, this.od.height);
			null === this.Yf && this.FC();
			this.scale = new lc(this.fc.width, this.fc.height).zt(
				this.ia("width"),
				this.ia("height"),
			);
			this.$c = this.Mt(this.scale);
			this.rect = this.$c.clone();
			if ((a = this.ia("boundingPolygon"))) {
				for (var h = [], k = 0; k < a.length; k += 2)
					h.push(new F(a[k], a[k + 1]));
				this.gc = new Bc(h);
			} else this.gc = new Bc(this.rect);
			this.za = this.rect.clone();
			this.gc.transform(this.ba.matrix);
			this.rect.transform(this.ba.matrix);
			this.Ig.length = 0;
			var l = this;
			b(0.5, 0, !0);
			b(1, 0.5, !1);
			b(0.5, 1, !0);
			b(0, 0.5, !1);
		};
		a.prototype.Ml = function() {
			return this.gc;
		};
		a.prototype.Ib = function(a, c, e, f) {
			return !this.ba.locked && this.gc.Mc(a, c, Math.max(3 / f, e))
				? this
				: null;
		};
		a.prototype.Of = function(b) {
			var c,
				e,
				f = !1;
			if (this.Yf)
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
							l,
						));
					void 0 !== n && (b.globalAlpha = n);
					var r = this.ia("lineWidth") || 0;
					if (r) {
						b.save();
						this.dc().Fc(b);
						var v = this.gc.clone();
						v.Fd(r / 2);
						b.beginPath();
						v.la(b);
						b.lineWidth = r;
						b.strokeStyle = this.ia("strokeStyle") || q.Oa;
						b.stroke();
						b.restore();
					}
					var w = this.scale,
						x = this.Yf,
						y = Pd(
							x,
							this.$c.x / w,
							this.$c.y / w,
							this.$c.width / w,
							this.$c.height / w,
							this.$c.x,
							this.$c.y,
							this.$c.width,
							this.$c.height,
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
						var H = y.ph,
							M = y.oh,
							I = (y.cj / H) * l;
						if (0.4 < I || 1 >= y.ph || 1 >= y.oh) break;
						0.5 > I && (I = 0.5);
						var A = Math.ceil(H * I),
							E = Math.ceil(M * I),
							R = document.createElement("canvas");
						R.width = A;
						R.height = E;
						R.getContext("2d").drawImage(x, y.zk, y.Ak, y.ph, y.oh, 0, 0, A, E);
						y.zk = 0;
						y.Ak = 0;
						y.ph = A;
						y.oh = E;
						x = R;
					}
					b.drawImage(x, y.zk, y.Ak, y.ph, y.oh, y.Ba, y.Ca, y.cj, y.ul);
					b.globalAlpha = k;
					b.globalCompositeOperation = h;
					if (a.Nr) {
						var na = this.gc.oa;
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
			if (null === this.Yf || f)
				b.save(),
					(b.lineWidth = 1),
					(b.strokeStyle = "#cccccc"),
					b.strokeRect(0, 0, this.fc.width, this.fc.height),
					b.restore();
		};
		a.prototype.pf = function() {
			return !0 === this.ia("allowCrop") && !0 !== this.ia("lockEditMode");
		};
		a.prototype.kj = function(a, c) {
			a.save();
			a.beginPath();
			a.lineWidth = 1 * c;
			a.strokeStyle = "#0050B7";
			for (var b = this.Na(), d = 0; d < this.Ig.length; d++) {
				var h = this.Ig[d],
					k = b.apply(h.x, h.y),
					l;
				if (h.Dd) {
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
		a.prototype.ai = function(a, c, e) {
			var b = this.Na();
			e *= 10;
			for (var d = 0; d < this.Ig.length; d++) {
				var k = this.Ig[d];
				k = b.apply(k.x, k.y);
				if (k.x - e <= a && a < k.x + e && k.y - e <= c && c < k.y + e)
					return d;
			}
			return null;
		};
		a.prototype.Ql = function(a) {
			a = this.Ig[a];
			this.Na().apply(a.x, a.y);
		};
		a.prototype.Le = function(a, c, e) {
			var b = this.Mt(this.scale);
			c = this.dc().apply(c, e);
			c.x = Math.round(c.x);
			c.y = Math.round(c.y);
			0 === a
				? (0 > c.y && (c.y = 0),
				  c.y > this.fc.height && (c.y = this.fc.height),
				  (b.height -= c.y - b.y),
				  (b.y = c.y))
				: 1 === a
				? (0 > c.x && (c.x = 0),
				  c.x > this.fc.width && (c.x = this.fc.width),
				  (b.width = c.x - b.x))
				: 2 === a
				? (0 > c.y && (c.y = 0),
				  c.y > this.fc.height && (c.y = this.fc.height),
				  (b.height = c.y - b.y))
				: 3 === a &&
				  (0 > c.x && (c.x = 0),
				  c.x > this.fc.width && (c.x = this.fc.width),
				  (b.width -= c.x - b.x),
				  (b.x = c.x));
			return this.SC(b);
		};
		a.prototype.wt = function(a, c) {
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
				n = "string" === typeof c.Lc ? q.hf(c.Lc) : null,
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
		a.Nr = !1;
		return a;
	})(dd);
	dd.vd("ImageNode", Ah);
	var Bh = (function(c) {
		function a(a, d) {
			a = c.call(this, a, d) || this;
			a.log = z.create("SvgNode", !0);
			a.Md = null;
			a.Gr = "";
			a.gc = new Bc();
			a.eb = new fd();
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
		a.prototype.kc = function(a) {
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
			return c.prototype.kc.call(this, a);
		};
		a.prototype.setProperty = function(a, d) {
			"fillStyle" === a && this.Md && !this.Md.closed && (a = "strokeStyle");
			c.prototype.setProperty.call(this, a, d);
		};
		a.prototype.Tg = function() {
			return !1;
		};
		a.prototype.format = function(a, c) {
			var b = this,
				d = this.ia("url");
			if (this.Gr !== d)
				(this.Gr = d),
					c.bB(d, function(a) {
						a && a.src === b.Gr && ((b.Md = a), c.jg(b.id));
					});
			else if (this.Md) {
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
				this.Md.$a(d);
				if ((d = this.ba.text))
					this.eb.an(
						this.ba.fontName || "sans-serif",
						this.ba.fontSize || 10,
						this.ba.bold || !1,
						this.ba.italic || !1,
						this.ba.textDecoration || "",
					),
						this.eb.ng(d),
						this.eb.format(a, 0, 0);
				this.za = this.Md.rect.clone();
				this.scale = this.ba.width ? this.ba.width / this.za.width : 1;
				this.za.width *= this.scale;
				this.za.height *= this.scale;
				this.gc = new Bc(this.za);
				a = this.Na();
				this.gc.transform(a);
				this.rect = this.gc.Os();
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
		a.prototype.ub = function() {
			var a = c.prototype.ub.call(this);
			"custom" === a.fillMode &&
				((a.fillStyle = this.ia("fillStyle")),
				(a.strokeStyle = this.ia("strokeStyle")),
				(a.lineWidth = this.ia("lineWidth")));
			return a;
		};
		a.prototype.Of = function(a) {
			if (this.Md) {
				a.scale(this.scale, this.scale);
				if ("custom" === this.ba.fillMode) {
					a.save();
					a.beginPath();
					this.Md.la(a, null, !0);
					a.fillStyle = this.ia("fillStyle");
					a.fill();
					var b = this.dc();
					b.vn()
						.multiply(b)
						.Fc(a);
					a.strokeStyle = this.ia("strokeStyle");
					a.lineWidth = this.ia("lineWidth") / this.scale;
					a.stroke();
					a.restore();
				} else this.Md.la(a);
				a.scale(1 / this.scale, 1 / this.scale);
				this.ba.text &&
					(a.beginPath(),
					(a.fillStyle = this.ba.textFillStyle || q.Oa),
					this.eb.la(
						a,
						this.Md.rect.x + this.za.width / 2 - this.eb.rect.width / 2,
						this.Md.rect.y + this.za.height / 2 - this.eb.rect.height / 2,
					),
					a.fill());
			}
		};
		return a;
	})(dd);
	dd.vd("SvgNode", Bh);
	var Ch = (function(c) {
		function a(a, d) {
			a = c.call(this, a, d) || this;
			a.$k = "UnknownNode";
			a.width = 100;
			a.height = 20;
			a.eb = new fd();
			a.log = z.create("UNKNOWN", !0);
			a.eb.Nq("center", "middle");
			return a;
		}
		__extends(a, c);
		a.prototype.mD = function(a) {
			this.$k = a;
			this.eb.ng(a);
			this.log("Creating placeholder for node type %s", a);
		};
		a.prototype.type = function() {
			return this.$k;
		};
		a.prototype.setProperty = function(a, c) {
			this.ba[a] = c;
		};
		a.prototype.format = function(a) {
			this.log("Formatting placeholder for %s", this.$k);
			this.rect = new G(0, 0, this.width, this.height);
			this.rect.transform(this.ba.matrix);
			this.eb.format(a, this.width, this.height);
		};
		a.prototype.Of = function(a) {
			this.log("Drawing placeholder for for %s", this.$k);
			a.save();
			a.lineWidth = 1;
			a.fillStyle = "#888888";
			a.fillRect(0, 0, this.width, this.height);
			a.fillStyle = q.Oa;
			this.eb.la(a, 0, 0);
			a.restore();
		};
		a.Nr = !1;
		return a;
	})(dd);
	dd.vd("UnknownNode", Ch);
	var Dh = z.create("HTMLGridNode"),
		Fh = (function(c) {
			function a(a, d) {
				a = c.call(this, a, d) || this;
				a.lines = [[], []];
				a.lb |= 8;
				a.tf = new Ag(a.aa.Yb);
				a.Xb(Cg(a.aa.Yb, { columns: [100], rows: [100] }));
				return a;
			}
			__extends(a, c);
			a.prototype.type = function() {
				return "GridNode";
			};
			a.prototype.kc = function(a) {
				return 0 === a.indexOf("line.") || c.prototype.kc.call(this, a);
			};
			a.prototype.setProperty = function(a, d) {
				if (0 === a.indexOf("line.")) {
					var b = a.substr(5);
					d ? this.tC(Bg.Rb(b, d)) : this.pC(b);
				}
				return c.prototype.setProperty.call(this, a, d);
			};
			a.prototype.tC = function(a) {
				for (var b = a.Ph, c = 0; c < this.lines[b].length; c++)
					if (this.lines[b][c].name === a.name) {
						this.lines[b][c] = a;
						this.kw();
						return;
					}
				this.lines[b].push(a);
				this.kw();
			};
			a.prototype.pC = function(a) {
				for (var b = 0; 1 >= b; b++)
					for (var c = 0; c < this.lines[b].length; c++)
						if (this.lines[b][c].name === a) {
							this.lines[b].splice(c, 1);
							return;
						}
			};
			a.prototype.kw = function() {
				this.lines[0].sort(function(a, c) {
					return zg.Xc(a.Ma, c.Ma);
				});
				this.lines[1].sort(function(a, c) {
					return zg.Xc(a.Ma, c.Ma);
				});
			};
			a.prototype.jA = function(a) {
				for (var b = 0; 1 >= b; b++)
					for (var c = 0, f = this.lines[b]; c < f.length; c++) {
						var h = f[c];
						if (h.name === a) return h;
					}
				return null;
			};
			a.prototype.Tl = function(a, c) {
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
			a.prototype.Ul = function(a, c) {
				var b = 0,
					d = 0;
				for (a = this.lines[a]; d < a.length; d++) {
					if (a[d].name === c.name) return b;
					b++;
				}
				return -1;
			};
			a.prototype.$n = function(a, c, e) {
				void 0 === e && (e = {});
				return this.As(0, c, a, e);
			};
			a.prototype.ao = function(a, c, e) {
				void 0 === e && (e = {});
				return this.As(1, c, a, e);
			};
			a.prototype.Ky = function(a, c) {
				return this.Dv(1, a, c);
			};
			a.prototype.Iy = function(a, c) {
				return this.Dv(0, a, c);
			};
			a.prototype.Pq = function(a, c, e) {
				void 0 === e && (e = {});
				return this.Zv(0, a, c, e);
			};
			a.prototype.Qq = function(a, c, e) {
				void 0 === e && (e = {});
				return this.Zv(1, a, c, e);
			};
			a.prototype.Zv = function(a, c, e, f) {
				if (0 > c || c >= this.lines[a].length - 1)
					return (
						Dh(
							"Error: asked to set grid index " +
								c +
								" but there are " +
								this.lines[a].length +
								" grid lines",
						),
						f
					);
				var b = this.lines[a][c];
				b = new Bg(b.Ph, b.name, b.Ma, e);
				f["line." + b.name] = b.encode();
				Dh("Set grid %s, index=%s, size=%s, props", a, c, e, f);
				return f;
			};
			a.prototype.As = function(a, c, e, f) {
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
				r = new Bg(a, Bg.Sr(), this.tf.io(n.Ma, d.Ma), c);
				b.ba["line." + r.name] = r.encode();
				Dh("Add grid %s, %s, %s, props", a, c, e, f);
				c = 1 === a ? "vertical" : "horizontal";
				for (e = 0; e < this.children.length; e++)
					if (((f = this.nb(e)), f.ia("_spanGrid") !== c && (v = this.ap(f)))) {
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
							b.children.push({ Me: f.id, remove: !1, cg: w }));
					}
				for (e = 0; e < this.lines[a].length; e++);
				return b;
			};
			a.prototype.Dv = function(a, c, e) {
				var b = { ba: {}, children: [] },
					d = this.lines[a],
					k = d[c],
					l = d[e + 1];
				l || (l = d[d.length - 1]);
				for (var n = 0; n < this.children.length; n++) {
					var r = this.nb(n),
						v = this.ap(r);
					if (v) {
						var w =
								0 >= zg.Xc(k.Ma, v.start[a].Ma) &&
								0 <= zg.Xc(l.Ma, v.start[a].Ma),
							x =
								0 >= zg.Xc(k.Ma, v.end[a].Ma) && 0 <= zg.Xc(l.Ma, v.end[a].Ma),
							y = !1;
						w && x
							? b.children.push({ Me: r.id, remove: !0, cg: {} })
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
							b.children.push({ Me: r.id, remove: !1, cg: w }));
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
			a.prototype.Yz = function(a, c, e, f) {
				a = this.Tl(1, a);
				c = this.Tl(0, c);
				e = -1 === e ? this.lines[1][this.lines[1].length - 1] : this.Tl(1, e);
				f = -1 === f ? this.lines[0][this.lines[0].length - 1] : this.Tl(0, f);
				return a && c && e && f
					? a.name + " / " + c.name + " / " + e.name + " / " + f.name
					: "";
			};
			a.prototype.ap = function(a) {
				var b = a.ia("style.gridArea");
				if (!b) return null;
				a = [];
				var c = 0;
				for (b = b.replace(/ /g, "").split("/"); c < b.length; c++) {
					var f = b[c],
						h = this.jA(f);
					if (!h)
						return Dh("HTMLGridNode: Could not get line by name: %s", f), null;
					a.push(h);
				}
				return { start: [a[1], a[0]], end: [a[3], a[2]] };
			};
			a.prototype.Hz = function(a) {
				var b = this.ap(a);
				if (!b) return null;
				var c = this.Ul(1, b.start[1]),
					f = this.Ul(1, b.end[1]),
					h = this.Ul(0, b.start[0]);
				b = this.Ul(0, b.end[0]);
				return -1 === c || -1 === f || -1 === h || -1 === b
					? (Dh("Child %s has invalid gridArea: %s", a, a.ia("style.gridArea")),
					  null)
					: { EC: c, DC: f, hy: h, gy: b };
			};
			a.prototype.Kz = function() {
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
				this.da && (this.da.style.SE = this.Kz());
			};
			a.prototype.la = function(a) {
				c.prototype.la.call(this, a);
				a.beginPath();
				for (var b = this.$d, e = 0, f = this.lines[0]; e < f.length; e++) {
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
			a.prototype.kj = function(a) {
				var b = this.$d;
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
			a.prototype.cu = function() {
				return !0;
			};
			a.prototype.ai = function(a, c, e) {
				function b(b) {
					if (0 === b) {
						var e = d.$d.x;
						var f = a;
					} else (e = d.$d.y), (f = c);
					for (var h = 0; h < d.lines[b].length - 1; h++) {
						var k = d.lines[b][h];
						e += k.size;
						if (Math.abs(e - f) < l) return new Eh(k, f);
					}
					return null;
				}
				var d = this,
					k = this.Na().apply(a, c);
				if (!this.$d.Mc(k.x, k.y)) return null;
				var l = 5 / e;
				return b(0) || b(1);
			};
			a.prototype.Le = function(a, c, e) {
				var b = {};
				if (!(a instanceof Eh)) return b;
				var d = a.line.clone();
				e = (1 === d.Ph ? e : c) - a.nw;
				d.size = Math.max(10, d.size + e);
				Dh("Adjust from %s to %s, offset=%s, newSize=%s", a.nw, c, e, d.size);
				b["line." + d.name] = d.encode();
				return b;
			};
			a.prototype.ip = function() {
				return { rows: this.lines[1].length - 1, Us: this.lines[0].length - 1 };
			};
			return a;
		})(Xg),
		Eh = (function() {
			function c(a, b) {
				this.line = a;
				this.nw = b;
			}
			c.prototype.Zf = function() {
				return 1 === this.line.Ph ? "row-resize" : "col-resize";
			};
			return c;
		})();
	dd.vd("HTMLGridNode", Fh);
	var Gh = z.create("RootNode"),
		Hh = (function(c) {
			function a(a, d, e) {
				a = c.call(this, a, d) || this;
				Gh("Root node is constructed: Traits=%s", a.lb);
				a.da = e;
				return a;
			}
			__extends(a, c);
			a.prototype.kc = function() {
				return !0;
			};
			return a;
		})(Ug(Vc));
	var ig = new lc(816, 1056),
		Ih = z.create("DOC"),
		mg = (function() {
			function c(a, b, c, e) {
				this.ku = c;
				this.ff = e;
				this.Ed = document.createElement("DIV");
				this.Yb = sg(3);
				this.Kd = new Zg();
				this.Et = !0;
				this.qc = "0";
				this.Sj = new Zg();
				this.removedNodes = new Zg();
				this.yq = {};
				this.Ti = new Zg();
				this.kn = 0;
				this.br = "magenta";
				this.readOnly = !1;
				this.Go = new Zg();
				this.Fj = new Zg();
				this.Ir = new Zg();
				this.Re = [];
				this.Ov = this.ei = this.ij = this.cb = 0;
				this.hv = function() {};
				this.oj = [];
				this.Eg = new $c();
				this.gi = 0;
				this.zp = !1;
				this.Bw = new Zg();
				this.Ed.setAttribute("nid", "0");
				this.root = new Hh(this.xj(), this, this.Ed);
				this.Ua = new th(this, this.root);
				this.Ab = new rh(this.Ua, this.Yb);
				a || (this.ab(), this.Dc(this.Jj(0, {})), this.wa(!0));
				b && this.px(b);
				this.Iu();
			}
			c.prototype.px = function(a) {
				var b = this;
				u(a).query("[z-fixture]", function(a) {
					var c = a.getAttribute("z-fixture") || "";
					b.al(a, c);
				});
			};
			c.prototype.al = function(a, b) {
				var c = new Xg(b, this);
				c.da = a;
				c.Bt = !0;
				c.dn(this.ku);
				Ih("Register fixture %s", b);
				c.da.setAttribute("nid", b);
				this.Ab.cl(b);
				this.Ua.xx(b, c);
				this.oj.push(c);
			};
			c.prototype.empty = function() {
				return 0 === this.root.children.length;
			};
			c.prototype.Iu = function() {
				this.Ov = this.Ab.next;
			};
			c.prototype.Tf = function() {
				return this.Ov !== this.Ab.next;
			};
			c.prototype.Sa = function() {
				this.Ua.Oc(function(a) {
					a.Sa();
				});
			};
			c.prototype.xj = function() {
				var a = this.qc;
				this.qc = (((2147483647 * Math.random()) | 0) + 1).toString(36);
				return a;
			};
			c.prototype.ed = function(a) {
				return this.Ua.ed(a);
			};
			c.prototype.Zu = function(a) {
				Ih("onCreateNode: %s", a);
				"PageNode" !== a.type() &&
					(this.Sj.add(a.id), this.removedNodes.remove(a.id));
				a.ia("spotHighlight") && "PathNode" === a.type() && this.Re.push(a);
				this.ei = this.lf(a.id) || 0;
				"DomNode" === a.type()
					? this.Go.add(a.id)
					: "PageNode" === a.type() && (this.ij = -1);
				L(a) &&
					(a.Em(), a.zi(this.readOnly), this.Kd.add(a.id), this.Ir.add(a.Vd()));
				L(a) && a.Ol && this.Eg.Tv(a.id, a.Ol());
			};
			c.prototype.bg = function(a) {
				this.Ti.add(a);
				this.Kd.add(a);
				var b = 0;
				for (a = this.Eg.Wo([a]); b < a.length; b++) {
					var c = a[b];
					this.Ti.add(c);
					this.Kd.add(c);
				}
			};
			c.prototype.Aa = function(a, b) {
				void 0 === b && (b = !1);
				if (this.Ua.ed(a)) {
					var c = this.Ua.Aa(a);
					b && this.bg(a);
					return c;
				}
				return null;
			};
			c.prototype.Gb = function(a, b) {
				void 0 === b && (b = !1);
				return (a = this.Aa(a, b)) && L(a) ? a : null;
			};
			c.prototype.lf = function(a) {
				for (a = this.Aa(a, !1); ; )
					if (a)
						if ("PageNode" === a.type()) break;
						else {
							if (null === a.parent) return null;
							a = a.parent;
						}
					else return null;
				a = this.root.ie(a);
				return 0 <= a ? a : null;
			};
			c.prototype.rp = function(a, b) {
				for (var c = [], e = 0; e < a.length; e++) {
					var f = this.Aa(a[e], !1);
					f && c.push(f);
				}
				return (c = b ? this.iz(c) : this.pl(c));
			};
			c.prototype.pz = function(a) {
				var b = [];
				this.Ua.Oc(function(c) {
					c.ia("tag") === a && b.push(c);
				});
				return b;
			};
			c.prototype.ab = function() {
				this.gi++;
				Ih("begin(); nested transactions=%s", this.gi);
			};
			c.prototype.wa = function(a) {
				void 0 === a && (a = !1);
				this.gi = Math.max(this.gi - 1, 0);
				Ih("commit(skip=%s); nested transactions=%s", a, this.gi);
				0 === this.gi
					? (this.Ab.wa(!1, a), this.Ua.wa(!1))
					: Ih("In a nested transaction; not committing.");
			};
			c.prototype.transaction = function(a, b) {
				void 0 === b && (b = !1);
				this.ab();
				a(this);
				this.wa(b);
			};
			c.prototype.Fm = function(a) {
				Ih("onCommit occured");
				this.hv(
					a,
					this.Sj.rc(),
					this.removedNodes.rc(),
					this.Ti.gj(this.Sj)
						.gj(this.removedNodes)
						.rc(),
					this.yq,
				);
				this.Sj = new Zg();
				this.removedNodes = new Zg();
				this.Ti = new Zg();
				this.yq = {};
			};
			c.prototype.Wc = function() {
				this.Ab.Wc();
			};
			c.prototype.qe = function() {
				this.Ab.qe();
			};
			c.prototype.af = function() {
				return this.Ab.af();
			};
			c.prototype.$e = function() {
				return this.Ab.$e();
			};
			c.prototype.Vm = function() {
				this.Ab.to();
			};
			c.prototype.xz = function(a, b, c) {
				for (var d = [], f = 0; f < c.length; f++) {
					var h = c[f];
					d.push(h.id);
				}
				d = this.Eg.Wo(d);
				c = c.concat();
				for (f = 0; f < d.length; f++)
					(h = this.Ua.Aa(d[f])) && L(h) && c.push(h);
				this.ht(a, b, c);
			};
			c.prototype.format = function(a, b) {
				var c = this,
					e = [];
				this.Et
					? this.Ua.Oc(function(a) {
							L(a) && e.push(a);
					  })
					: this.Kd.Oc(function(a) {
							a = c.Ua.Aa(a);
							L(a) && e.push(a);
							return !1;
					  });
				return this.ht(a, b, e);
			};
			c.prototype.ht = function(a, b, c) {
				c = this.pl(c);
				this.Eg.sort(c);
				for (var d = 0, f = c; d < f.length; d++) {
					var h = f[d];
					h.format(a, b);
				}
				if (!this.zp)
					for (a = 0, b = c; a < b.length; a++)
						(h = b[a]), h.wp().length && (this.zp = !0);
				this.Kd.clear();
				this.Et = !1;
				this.Ws();
				return c.length;
			};
			c.prototype.Yy = function(a, b, c) {
				if (0 !== this.Re.length && b === this.kn) {
					a.save();
					a.beginPath();
					b = c || this.fd();
					a.moveTo(b.x, b.y);
					a.lineTo(b.x, b.bottom());
					a.lineTo(b.right(), b.bottom());
					a.lineTo(b.right(), b.y);
					a.closePath();
					c = !1;
					for (var d = 0; d < this.Re.length; d++)
						this.lf(this.Re[d].id) === this.cb &&
							(this.Re[d].clip(a), (c = !0));
					c &&
						(a.clip(),
						(a.fillStyle = this.br),
						a.fillRect(b.x, b.y, b.width, b.height));
					a.restore();
				}
			};
			c.prototype.gf = function(a, b) {
				b = b || this.fd();
				var c = this.ia("background");
				c &&
					(c = q.Ll(c)) &&
					((a.fillStyle = c.toString()),
					a.fillRect(b.x, b.y, b.width, b.height));
			};
			c.prototype.la = function(a, b, c) {
				function d(d) {
					k.wc(function(b) {
						if (!k.Fj.contains(b.zc()) && b.Vd() === d && !b.hidden()) {
							b.Xv(n++);
							b.la(a);
							for (var e = 0, h = f.ff; e < h.length; e++) {
								var l = h[e];
								l.Es(b) && l.la(a, b, l === c);
							}
						}
					});
					k.Yy(a, d, b);
				}
				var f = this,
					h,
					k = this;
				this.Ir.add(this.kn);
				var l = this.Ir.KD();
				l.sort(function(a, b) {
					return a - b;
				});
				var n = 0;
				var r = 0;
				for (h = l.length; r < h; r++) d(l[r]);
			};
			c.prototype.Ib = function(a, b, c, e, f) {
				var d = this,
					k = { node: null, ef: null };
				this.wc(function(h) {
					for (var l = null, r = 0, v = d.ff; r < v.length; r++) {
						var w = v[r];
						if (w.Es(h)) {
							l = w;
							break;
						}
					}
					e.has(h.zc()) &&
						((r = h.Ib(a, b, 0, c)),
						l && !l.Ib(h, a, b, 0) && (l = null),
						(!r && !l) ||
							!(null === k.node || k.node.Vd() <= h.Vd()) ||
							(f && f !== h.type()) ||
							((k.node = h), (k.ef = l)));
				});
				return k;
			};
			c.prototype.MA = function(a, b, c, e) {
				var d = [],
					h = 0,
					k = {};
				this.wc(function(f) {
					f.Ib(a, b, c, e) && (d.push(f), (k[f.id] = h), (h += 1));
				});
				d.sort(function(a, b) {
					return a.Vd() != b.Vd() ? a.Vd() - b.Vd() : k[a.id] - k[b.id];
				});
				d.reverse();
				return d;
			};
			c.prototype.sA = function(a) {
				var b = [];
				this.wc(function(c) {
					a.contains(c.rect) && b.push(c);
				});
				return b;
			};
			c.prototype.pl = function(a) {
				var b,
					c = [],
					e = {};
				var f = 0;
				for (b = a.length; f < b; f++) {
					var h = a[f];
					if ("PageNode" !== h.type()) {
						if (!L(h)) continue;
						for (; h.sm() && h.parent; )
							if (
								(Ih("Node type %s:%s is a group member", h.id, h.type()),
								L(h.parent))
							)
								h = h.parent;
							else break;
					}
					h.id in e || ((e[h.id] = h), c.push(h));
				}
				this.zD(c);
				return c;
			};
			c.prototype.iz = function(a) {
				function b(a) {
					if (!(a.id in e) && ((e[a.id] = a), c.push(a), 0 != (a.lb & 2)))
						for (var d = 0; d < a.children.length; d++) b(a.nb(d));
				}
				for (var c = [], e = {}, f = 0; f < a.length; f++) b(a[f]);
				return c;
			};
			c.prototype.Oc = function(a, b) {
				function c(d) {
					if (d.children.length) {
						a && L(d) && b(d);
						for (var e = 0; e < d.children.length; e++) c(d.nb(e));
					} else L(d) && b(d);
				}
				c(this.root);
			};
			c.prototype.Bl = function(a, b, c) {
				function d(b) {
					if ((L(b) || c) && !1 === a(b)) return !1;
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
				void 0 === b && (b = this.cb);
				b < this.root.children.length && this.Bl(a, this.root.nb(b || 0));
			};
			c.prototype.Dz = function(a) {
				var b = !1,
					c = a.Ml(),
					e = [];
				this.wc(function(d) {
					b ? d.Ml().PA(c) && e.push(d) : d === a && (b = !0);
				});
				return e;
			};
			c.prototype.zD = function(a) {
				var b = 0,
					c = {};
				this.Oc(!0, function(a) {
					c[a.id] = b++;
				});
				a.sort(function(a, b) {
					return c[a.id] - c[b.id];
				});
			};
			c.prototype.HC = function(a) {
				var b = [],
					c = 0;
				a = this.pl(a);
				for (var e = 0; e < a.length; e++) c = this.ls(a[e], b, c, null);
				return "zwibblerclip." + JSON.stringify(b);
			};
			c.prototype.ls = function(a, b, c, e) {
				var d = a.ub(),
					h = {},
					k;
				for (k in d) {
					var l = d[k];
					l instanceof J &&
						(l = ["Matrix", l.m11, l.m12, l.m21, l.m22, l.Ba, l.Ca]);
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
				for (e = 0; e < a.children.length; e++) h = this.ls(a.nb(e), b, h, c);
				return h;
			};
			c.prototype.Gu = function(a, b, c) {
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
						var w = this.xj();
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
						y = this.Nl();
						var B = -1;
						x = !0;
						if ("parent" in v && v.parent in k) (y = k[v.parent]), (x = !1);
						else if ("PageNode" === v.node)
							(y = this.root.id), (B = this.cb + 1 + n), (n += 1);
						else if ("string" === typeof v.parent) {
							var H = this.Aa(v.parent, !1);
							H && this.Jp(H)
								? (y = H.id)
								: H && this.lf(H.id) === this.cb && (y = H.id);
						}
						"PageNode" !== v.node &&
							((w.layer = c),
							("default" !== w.layer && "" !== w.layer) || delete w.layer);
						w = this.createNode(v.node, w, y, B);
						k[l++] = w;
						("HTMLNode" !== v.node || x) && h.push(w);
					}
				}
				0 !== n || b.uu() || this.qg(h, b);
			};
			c.prototype.oC = function(a, b) {
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
			c.prototype.$u = function(a) {
				var b = this.lf(a.id) || 0;
				this.Sj.remove(a.id);
				this.Ti.remove(a.id);
				this.removedNodes.add(a.id);
				this.yq[a.id] = a.ub();
				L(a) && a.Hm();
				a.Sa();
				this.Kd.remove(a.id);
				this.Eg.qC(a.id);
				a.ia("spotHighlight") && this.oC(this.Re, a);
				this.Go.remove(a.id);
				"PageNode" === a.type()
					? (b === this.cb
							? (Ih("Removed current page."),
							  this.Dc(Math.min(b, this.ib() - 2)),
							  (this.ei = this.cb))
							: b < this.cb && (this.Dc(this.cb - 1), (this.ei = this.cb)),
					  (this.ij = -1))
					: (this.ei = b);
			};
			c.prototype.Xo = function(a) {
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
				"number" === typeof a ? this.wc(b, a) : this.Oc(!0, b);
				return k ? new G(c, f, e - c, h - f) : new G(0, 0, 10, 10);
			};
			c.prototype.RA = function(a) {
				return 0 === a.x && 0 === a.y && 10 === a.width && 10 === a.height;
			};
			c.prototype.LA = function() {
				var a = this.De(void 0),
					b = null;
				a instanceof ah && (b = a.fd());
				return b || this.root.Sg("width");
			};
			c.prototype.fd = function(a, b) {
				var c = null;
				if (void 0 !== a) {
					var e = this.De(a);
					e instanceof ah && (c = e.fd());
				}
				return c
					? c.MD()
					: this.ia("width")
					? new G(0, 0, this.ia("width"), this.ia("height"))
					: b
					? new G(0, 0, b.width, b.height)
					: this.Xo(a);
			};
			c.prototype.ia = function(a) {
				return this.root.ia(a);
			};
			c.prototype.Sg = function(a) {
				return this.root.Sg(a);
			};
			c.prototype.setProperty = function(a, b) {
				this.Ld([this.root.id], a, b);
			};
			c.prototype.Ld = function(a, b, c) {
				var d = {};
				d[b] = c;
				this.ab();
				this.zb(a, d);
				this.wa();
			};
			c.prototype.Uh = function(a, b) {
				if ((a = this.Aa(a))) return a.ia(b);
			};
			c.prototype.vu = function(a) {
				return this.Ua.ed(a);
			};
			c.prototype.zb = function(a, b) {
				var c = this;
				this.Hg(a, function(a) {
					c.Ab.Xb(a.id, b);
				});
			};
			c.prototype.fv = function(a, b) {
				L(a) && a.Ol && this.Eg.Tv(a.id, a.Ol());
				this.bg(a.id);
				this.ei = this.lf(a.id) || 0;
				if ("spotHighlight" in b && "PathNode" === a.type()) {
					for (var c = 0; c < this.Re.length; c++)
						if (this.Re[c] === a) {
							this.Re.splice(c, 1);
							break;
						}
					b.spotHighlight && "PathNode" === a.type()
						? (Ih("Added node %s to spotHighlightNodes", a.id), this.Re.push(a))
						: Ih("Removed node %s from spotHighlightNodes", a.id);
				}
			};
			c.prototype.vk = function(a, b) {
				Ih("showLayer(%s, %s)", a, b);
				b
					? (this.Fj.remove(a),
					  this.wc(function(b) {
							if (b.zc() === a) {
								b.Em();
								var c = b.parent;
								Qc(c) && ((b = c.ie(b)), c.uk(b, !0));
							}
					  }))
					: (this.Fj.add(a),
					  this.wc(function(b) {
							if (b.zc() === a) {
								b.Hm();
								var c = b.parent;
								Qc(c) && ((b = c.ie(b)), c.uk(b, !1));
							}
					  }));
			};
			c.prototype.tm = function(a) {
				return !this.Fj.contains(a);
			};
			c.prototype.Jj = function(a, b) {
				Ih("Adding page to document with index %s", a);
				if (a > this.root.children.length)
					return Ih("Error: Can insert page with index %s", a), -1;
				this.createNode("PageNode", b, this.root.id, a);
				return a;
			};
			c.prototype.ib = function() {
				return this.root.children.length;
			};
			c.prototype.Dc = function(a) {
				if (a !== this.cb)
					if (0 <= a && a < this.ib())
						Ih("Set current page to %s/%s", a, this.ib()), (this.cb = a);
					else return Ih("Tried to set page to non-existing %s", a), !1;
				return !0;
			};
			c.prototype.tD = function() {
				if (this.ij !== this.cb) {
					this.qr(this.ij, !1);
					this.qr(this.cb, !0);
					this.ij = this.cb;
					for (var a = 0; a < this.ib(); a++) this.root.uk(a, a === this.cb);
				}
			};
			c.prototype.qr = function(a, b) {
				var c = this;
				b
					? this.wc(function(a) {
							"DomNode" !== a.type() || c.Fj.contains(a.zc()) || a.Em();
					  }, a)
					: this.Go.Oc(function(a) {
							(a = c.Gb(a, !1)) && a.Hm();
					  });
			};
			c.prototype.De = function(a) {
				void 0 === a && (a = this.cb);
				return 0 === this.root.children.length ? this.root : this.root.nb(a);
			};
			c.prototype.sp = function() {
				return this.fd(this.cb, ig);
			};
			c.prototype.zi = function(a) {
				this.Oc(!1, function(b) {
					b.zi(a);
				});
			};
			c.prototype.getRootNode = function() {
				return this.root;
			};
			c.prototype.Hu = function(a, b) {
				var c = b.$type || b.type || "",
					e = Vc.create(c, a, this);
				e ||
					(c in P.tl
						? ((e = new yh(a, this)), e.setProperty("nodeType", c))
						: (Ih("Bad node type: %s", c),
						  (a = Vc.create("UnknownNode", a, this)),
						  a.mD(c),
						  (e = a)));
				5 === (e.lb & 5) && e.dn(this.ku);
				e.Xb(b);
				return e;
			};
			c.prototype.createNode = function(a, b, c, e, f) {
				f || (f = this.xj());
				c || (c = this.Nl());
				var d = this.Aa(c);
				if (!d)
					throw Error(
						"createNode type=" + a + ": parent " + c + " does not exist",
					);
				if (void 0 === e || -1 == e) e = d.children.length;
				b.$type = a;
				this.Ab.createNode(f, c, e, b);
				return f;
			};
			c.prototype.Hg = function(a, b) {
				for (var c = 0; c < a.length; c++) {
					var e = a[c],
						f = this.Aa(e);
					f ? b(f) : Ih("Node %s does not exist", e);
				}
			};
			c.prototype.ac = function(a) {
				function b(a) {
					for (var d = a.children.length - 1; 0 <= d; d--) b(a.nb(d));
					c.Ab.we(a.id);
				}
				var c = this;
				a.push.apply(a, this.Eg.Wo(a));
				this.Hg(a, function(a) {
					a.parent ? b(a) : Ih("deleteNode(%s): node has no parent", a.id);
				});
			};
			c.prototype.qg = function(a, b) {
				var c = this;
				this.Hg(a, function(a) {
					L(a) && c.zb([a.id], a.Ze(b));
				});
			};
			c.prototype.Le = function(a, b, c, e) {
				var d = this.Gb(a, !0);
				d && 0 != (d.lb & 16) && this.zb([a], d.Le(b, c, e));
			};
			c.prototype.Nl = function() {
				return this.root.nb(this.cb).id;
			};
			c.prototype.group = function(a) {
				var b = this.createNode("GroupNode", {});
				this.Ni(b, a);
				return b;
			};
			c.prototype.Ni = function(a, b) {
				var c = this,
					e = this.Aa(a);
				if (e && 0 != (e.lb & 2)) {
					var f = e.children.length;
					this.Hg(b, function(b) {
						if (!b.parent) throw Error("Expected node to have a parent");
						c.Ab.hd(b.id, a, f++);
					});
					this.bg(a);
				}
			};
			c.prototype.Ei = function(a) {
				var b = this,
					c = {};
				this.Hg(a, function(a) {
					if (a instanceof Yg && !(a.id in c) && a.parent) {
						c[a.id] = !0;
						for (
							var d = a.parent.children.length, e = a.children.length - 1;
							0 <= e;
							e--
						) {
							var k = a.nb(e);
							b.Ab.hd(k.id, a.parent.id, d);
						}
						b.ac([a.id]);
					}
				});
			};
			c.prototype.duplicate = function(a, b) {
				function c(a, d) {
					if (!f.has(a.id)) {
						f.add(a.id);
						var k = a.ub();
						if (L(a)) {
							var l = a.Ze(b),
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
				this.Hg(a, function(a) {
					null !== a.parent && c(a, a.parent.id);
				});
				return h;
			};
			c.prototype.hd = function(a, b, c) {
				var d = this.Aa(a);
				if (null === d) throw Error("moveNode: " + a + " does not exist");
				var f = this.Aa(b);
				if (null === f)
					throw Error("moveNode: New parent " + b + " does not exist");
				-1 === c &&
					(c = d.parent !== f ? f.children.length : f.children.length - 1);
				if (null === d.parent) throw Error("Expected a parent");
				f === d.parent && c === d.parent.ie(d)
					? Ih("moveNode: Skip moving to the same place")
					: this.Ab.hd(a, b, c);
			};
			c.prototype.Td = function(a, b, c) {
				var d = this;
				void 0 === c && (c = -1);
				this.Hg(a, function(a) {
					if (a.parent) {
						var e = a.parent.id,
							f = a.parent.ie(a);
						switch (b) {
							case 0:
								d.hd(a.id, e, -1);
								break;
							case 1:
								d.hd(a.id, e, 0);
								break;
							case 3:
								0 < f && d.hd(a.id, e, f - 1);
								break;
							case 2:
								f < a.parent.children.length - 1 && d.hd(a.id, e, f + 1);
								break;
							case 4:
								d.hd(a.id, e, c);
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
			c.prototype.jp = function(a) {
				if (a instanceof Element)
					for (; a; ) {
						var b = a.getAttribute("nid");
						if (b && (b = this.Aa(b)) && 5 === (b.lb & 5)) return b;
						a = a.parentElement;
					}
				return null;
			};
			c.prototype.Ws = function() {
				this.bs(this.Ed, new J(), null, 0, 0);
			};
			c.prototype.bs = function(a, b, c, e, f) {
				if (a instanceof HTMLElement) {
					var d = a.offsetLeft - a.scrollLeft,
						k = a.offsetTop - a.scrollTop;
					c === a.offsetParent && ((d -= e), (k -= f));
					b = b.multiply(new qc(d, k));
					c = a.getAttribute("nid") || "0";
					(c = this.Aa(c)) &&
						Rc(c) &&
						((e = new G(0, 0, c.da.offsetWidth, c.da.offsetHeight)),
						e.transform(b),
						c.sk(e, b));
					for (c = a.firstElementChild; c; )
						this.bs(c, b, a.offsetParent, a.offsetLeft, a.offsetTop),
							(c = c.nextElementSibling);
				}
			};
			c.prototype.up = function() {
				return this.Ab.up();
			};
			c.prototype.locked = function() {
				return this.Ab.locked();
			};
			c.prototype.VA = function(a) {
				return Rc(a) ? u(a.da).matches("[z-fixture] *") : !1;
			};
			c.prototype.Jp = function(a) {
				return Rc(a) && a.da.hasAttribute("z-fixture");
			};
			c.prototype.Iq = function(a) {
				var b = this;
				if (this.zp) {
					var c = new Zg();
					this.Ua.Oc(function(d) {
						if (L(d)) {
							var e = 0;
							for (d = d.wp(); e < d.length; e++) {
								var h = d[e],
									k = b.Aa(h.Me);
								if (k && L(k)) {
									var l = 0,
										n = 0;
									void 0 !== h.Dn &&
										(a.y > k.rect.y && (n = a.y - k.rect.y),
										0 < h.Dn &&
											n + k.rect.height > h.Dn &&
											(n = h.Dn - k.rect.height));
									void 0 !== h.Cn &&
										(a.x > k.rect.x && (l = a.x - k.rect.x),
										0 < h.Cn &&
											l + k.rect.width > h.Cn &&
											(l = h.Cn - k.rect.width));
									if (0 < n || 0 < l) k.en(l, n), c.add(k.id);
								}
							}
						}
					});
					this.Bw.gj(c).Oc(function(a) {
						(a = b.Aa(a)) && L(a) && a.en(0, 0);
					});
					this.Bw = c;
				}
			};
			return c;
		})();
	var ng = new ((function() {
		function c() {
			this.log = z.create("serializer");
			this.Lr = {
				pdf: "application/pdf",
				svg: "image/svg+xml",
				png: "image/png",
				jpeg: "image/jpeg",
				jpg: "image/jpeg",
				bmp: "image/bmp",
			};
		}
		c.prototype.Bh = function(a, b, c, e) {
			if (a instanceof Array) b = this.ou(a, b, c, e);
			else {
				if ("string" !== typeof a)
					return (
						this.log("Can only open an array or string as a document."), null
					);
				if ("{" === a.charAt(0)) b = this.cB(a, b, c, e);
				else if (0 === a.indexOf("zwibbler3."))
					(a = JSON.parse(a.substr(10))), (b = this.ou(a, b, c, e));
				else if (0 === a.indexOf("zwibblerclip."))
					(b = new mg(!1, b, c, e)), b.Gu(a, new J(), "default"), b.Vm();
				else {
					try {
						ph(a);
						var d = !0;
					} catch (h) {
						d = !1;
					}
					if (d) (b = new mg(!0, b, c, e)), b.Ab.xg(a);
					else throw Error("Format detection failed.");
				}
			}
			for (a = 1; a < b.ib(); a++) b.qr(a, !1);
			return b;
		};
		c.prototype.cB = function(a, b, c, e) {
			function d(a) {
				var b = new J();
				b.m11 = a.m11;
				b.m12 = a.m12;
				b.m21 = a.m21;
				b.m22 = a.m22;
				b.Ba = a.dx;
				b.Ca = a.dy;
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
						e = new O();
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
									e.aj(n.x, n.y);
									break;
								case 3:
									n = b.apply(r.x1, r.y1);
									r = b.apply(r.x, r.y);
									e.Cg(n.x, n.y, r.x, r.y);
									break;
								default:
									throw "Unknown path segment type: " + r.type;
							}
						}
						a && e.close();
						c.commands = e.rc();
						return l.createNode("PathNode", c);
					case "TextNode":
						return (
							(b = d(a.matrix)),
							(b = b.multiply(new qc(0, 1.3 * a.fontSize))),
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
			var k = z.create("IMPORT"),
				l = new mg(!1, b, c, e);
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
		c.prototype.ou = function(a, b, c, e) {
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
										"Tried to load node a with malformed Matrix. Skipping.",
									);
									return;
								}
								c[f] = e;
							} else "__type" === f ? (c.type = a[f]) : (c[f] = a[f]);
					if (a.fixture) var f = a.fixture;
					else if ("id" in a) f = a.id.toString(36);
					else return;
					"0" !== b || k || (b = r.Nl());
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
			var r = new mg(k, b, c, e),
				v = {};
			b = 0;
			for (c = r.oj; b < c.length; b++) v[c[b].id] = !0;
			r.ab();
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
								" before it was defined.",
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
		c.prototype.tt = function(a) {
			function b(a, d) {
				var f = d.id in e,
					h = { type: d.type() };
				f ? (h.fixture = d.id) : (h.id = parseInt(d.id, 36));
				c.push(h);
				a && (h.parent = a.id in e ? a.id : parseInt(a.id, 36));
				a = d.ub();
				for (var k in a)
					a.hasOwnProperty(k) &&
						(a[k] instanceof J
							? (h[k] = a[k].rc())
							: "inverse" !== k &&
							  ("type" === k ? (h.__type = a[k]) : (h[k] = a[k])));
				for (h = 0; h < d.children.length; h++) b(d, d.nb(h));
			}
			for (var c = [], e = {}, f = 0, h = a.oj; f < h.length; f++) {
				var k = h[f];
				e[k.id] = !0;
			}
			b(null, a.getRootNode());
			f = 0;
			for (a = a.oj; f < a.length; f++) (k = a[f]), b(null, k);
			return c;
		};
		c.prototype.Mk = function(a, b, c) {
			b in this.Lr && (b = this.Lr[b]);
			if ("list" === b) (a = this.tt(a)), (b = "application/json");
			else if ("zwibbler3" === b)
				(a = this.tt(a)),
					(a = "zwibbler3." + JSON.stringify(a)),
					(b = "application/octet-stream");
			else if ("image/svg+xml" === b) {
				var d = a.fd();
				var f = new Cf(d);
				a.gf(f);
				a.la(f);
				a = f;
				b = "image/svg+xml";
			} else if ("application/pdf" === b) {
				d = a.fd(0);
				f = new zf(new G(0, 0, d.width, d.height), P.fonts);
				var h = a.cb;
				for (b = 0; b < a.ib(); b++)
					0 < b && ((d = a.fd(b)), f.Ai(d)),
						f.translate(-d.x, -d.y),
						a.Dc(b),
						a.gf(f),
						a.la(f);
				a.Dc(h);
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
					cc("JPEG supported: %s", f),
					(d = f)),
				d)
			)
				(f = document.createElement("canvas")),
					(d = a.fd()),
					(f.width = d.width),
					(f.height = d.height),
					(h = f.getContext("2d")),
					h.translate(-d.x, -d.y),
					a.gf(h),
					a.la(h),
					(a = "image/bmp" === b ? hc(f) : f.toDataURL(b)),
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
	var Jh = z.create("OPENTYPE");
	function Kh(c) {
		var a;
		void 0 === a && (a = "Assertion failed.");
		if (!c) throw (console.log(Error(a)), Error(a));
	}
	var Lh = (function() {
			function c(a, b) {
				this.code = a;
				this.oe = b;
			}
			c.prototype.toString = function() {
				return (
					(255 < this.code ? "code=12 " + (this.code & 255) : "" + this.code) +
					" " +
					JSON.stringify(this.oe)
				);
			};
			return c;
		})(),
		Mh = (function() {
			function c(a, b, c) {
				void 0 === b && (b = 0);
				void 0 === c && (c = a.length - b);
				this.Gs = a;
				this.start = b;
				this.length = c;
				this.Ia = 0;
			}
			c.prototype.na = function(a) {
				for (var b = 0; a--; ) b = 256 * b + this.Gs[this.Ia++ + this.start];
				return b;
			};
			c.prototype.getInt16 = function() {
				var a = this.na(2);
				a & 32768 && (a -= 65536);
				return a;
			};
			c.prototype.Xh = function(a, b) {
				void 0 === b && (b = 1);
				for (var c = "", e = 0; e < a; e += b)
					c += String.fromCharCode(this.na(b));
				return c;
			};
			c.prototype.Ng = function() {
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
				return new c(this.Gs, a + this.start, b);
			};
			c.prototype.Cp = function() {
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
			c.prototype.mp = function(a) {
				this.seek(a);
				a = this.na(2);
				var b = this.na(1);
				if (4 < b) throw Error("Error: This is not an index; offsetSize=" + b);
				return a;
			};
			c.prototype.Ij = function(a, b) {
				this.seek(a);
				var c = this.na(2);
				if (b >= c) throw Error("Tried to read past end of index");
				var e = this.na(1);
				this.seek(a + 3 + e * b);
				b = this.na(e);
				var f = this.na(e);
				return this.slice(a + 3 + (c + 1) * e - 1 + b, f - b);
			};
			c.prototype.Oo = function() {
				return this.Ia >= this.length;
			};
			c.prototype.St = function(a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = []);
				for (b = new Lh(0, b); ; ) {
					if (this.Oo()) throw Error("Unexpected end of charstring");
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
						b.oe.push(parseFloat(e));
					} else
						29 === c
							? ((e = this.na(1)),
							  (c = this.na(1)),
							  (f = this.na(1)),
							  (h = this.na(1)),
							  b.oe.push((e << 24) | (c << 16) | (f << 8) | h))
							: 28 === c
							? ((e = this.na(1)), (c = this.na(1)), b.oe.push((e << 8) | c))
							: a && 255 === c
							? b.oe.push(this.na(4) / 65536)
							: 251 <= c
							? ((e = this.na(1)), b.oe.push(256 * -(c - 251) - e - 108))
							: 247 <= c
							? ((e = this.na(1)), b.oe.push(256 * (c - 247) + e + 108))
							: b.oe.push(c - 139);
				}
			};
			return c;
		})(),
		Nh = (function() {
			function c(a) {
				this.rr = [];
				var b = (this.n = 0);
				for (a = a.split(/([:\[\]\(\)\-\.{}]|\d+)|\s+/); b < a.length; b++) {
					var c = a[b];
					c && c.length && this.rr.push(c);
				}
			}
			c.prototype.next = function() {
				return this.rr[this.n++];
			};
			c.prototype.match = function(a) {
				return this.rr[this.n] === a ? ((this.n += 1), !0) : !1;
			};
			c.prototype.value = function(a) {
				var b = this.next(),
					c = parseFloat(b);
				return isNaN(c) ? a[b] : c;
			};
			c.prototype.mj = function(a) {
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
			: c.mj(e);
	}
	function Qh(c, a, b, d) {
		var e = c.n;
		if (c.match("[")) {
			var f = Rh(c, b),
				h = "",
				k = [];
			c.match(".") && ((h = c.next()), (k = {}));
			if (!c.match("]")) return c.mj(e);
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
			if (!c.match("(")) return c.mj(e);
			b = Rh(c, b);
			return c.match(")") ? (d ? 0 : a.Xh(b)) : c.mj(e);
		}
		return c.mj(e);
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
								return (c = d.sent()), [2, this.PB(new Uint8Array(c))];
						}
					});
				});
			};
			c.prototype.nC = function() {
				this.fonts.length = 0;
			};
			c.prototype.get = function(a) {
				for (var b = 0, c = this.fonts; b < c.length; b++) {
					var e = c[b];
					if (e.jf === a || e.fontFamily === a) return e;
				}
				return null;
			};
			c.prototype.PB = function(a) {
				a = new Mh(a);
				var b = a.na(4);
				a.seek(0);
				a = 1953784678 === b ? this.tx(a) : [new Th(a)];
				b = 0;
				a: for (; b < a.length; b++) {
					for (var c = a[b], e = 0, f = this.fonts; e < f.length; e++)
						if (f[e].jf === c.jf) {
							Jh("Not adding %s; already have it.");
							continue a;
						}
					Jh("Opened font: %s weight=%s italic=%s", c.jf, c.weight, c.Kj);
					console.log(c);
					this.fonts.push(c);
				}
				return a;
			};
			c.prototype.tx = function(a) {
				var b = Sh(
					a,
					"{\n    ttcTag:string(4)\n    majorVersion:uint16\n    minorVersion:uint16\n    numFonts:uint32\n    offsetTable:[numFonts] uint32\n}",
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
				this.Nd = {};
				this.jf = this.fontFamily = "";
				this.weight = 0;
				this.bold = this.Kj = !1;
				this.ol = [];
				this.qo = null;
				this.Op = [];
				a.seek(b);
				this.le = Sh(
					a,
					"{  \n    scalarType:uint32\n    numTables:uint16\n    searchRange:uint16\n    entrySelector:uint16\n    rangeShift:uint16\n    tables:[numTables.tag] {\n        tag:string(4)\n        checksum:uint32\n        offset:uint32\n        length:uint32\n    }\n}",
				);
				Jh(JSON.stringify(this.le, null, 2));
				for (var c in this.le.tables) Jh("Table: %s", c);
				this.Sf(
					"head",
					"{\n    version:fixed\n    fontRevision:fixed\n    checksumAdjustment:uint32\n    magicNumber:uint32\n    flags:uint16\n    unitsPerEm:uint16\n    created:date\n    modified:date\n    xMin:int16\n    yMmin:int16\n    xMax:int16\n    yMax:int16\n    macStyle:uint16\n    lowestRectPPEM:uint16\n    fontDirectionHint:uint16\n    indexToLocFormat:uint16\n    glyphDataFormat:uint16\n\n    bold:(macStyle:0)\n    italic:(macStyle:1)\n}",
				);
				this.Sf(
					"name",
					"{\n    offset:offset\n    format:uint16\n    count:uint16\n    stringOffset:uint16\n    names:[count] {\n        platformID:uint16\n        platformSpecificID:uint16\n        languageID:uint16\n        nameID:uint16\n        length:uint16\n        offset:uint16\n    }\n}",
				);
				this.Sf(
					"cmap",
					"{\n    offset:offset\n    version:uint16\n    numberSubtables:uint16\n    subTables:[numberSubtables] {\n        platformID:uint16\n        platformSpecificID:uint16\n        offset:uint32\n    }\n}",
				);
				this.Sf(
					"hhea",
					"{\n    version:fixed\n    ascent:int16\n    descent:int16\n    lineGap:int16\n    advanceWidthMax:uint16\n    minLeftSideBearing:int16\n    minRightSideBearing:int16\n    xMaxExtent:int16\n    caretSlopeRise:int16\n    caretSlopeRun:uint16\n    caretOffset:int16\n    reserved:uint64\n    metricDataFormat:int16\n    numOfLongHorMetrics:uint16\n}",
				);
				this.Sf(
					"kern",
					"{\n    version:uint16\n    nTables:uint16\n    tables:[nTables] {\n        version:uint16\n        length:uint16\n        coverage:uint16\n        offset:offset\n        _:[length-6] uint8\n    }\n}",
				);
				this.Sf("maxp", "{\n    version:fixed\n    numGlyphs:uint16\n}");
				this.Sf(
					"OS/2",
					"{\n    version:uint16\n    xAvgCharWidth:int16\n    usWeightClass:uint16\n    usWidthClass:uint16\n}",
				);
				this.Sf(
					"CFF ",
					"{\n    offset:offset\n    major:uint8\n    minor:uint8\n}",
				);
				this.YB(a, this.Nd.name);
				this.TB(a, this.Nd.cmap);
				this.WB(a);
				this.XB(a, this.Nd.kern);
				this.Kj = !!this.Nd.head.italic;
				this.bold = !!this.Nd.head.bold;
				this.weight = this.Nd["OS/2"].usWeightClass;
				"CFF " in this.Nd &&
					(this.qo = new Vh(a.slice(this.Nd["CFF "].offset)));
			}
			c.prototype.Sf = function(a, b) {
				a in this.le.tables &&
					(Jh("Decoding %s", a),
					this.Ha.seek(this.le.tables[a].offset),
					(this.Nd[a] = Sh(this.Ha, b)),
					Jh(a + " table:", JSON.stringify(this.Nd[a], null, 2)));
			};
			c.prototype.YB = function(a, b) {
				for (var c = 0, e = b.names; c < e.length; c++) {
					var f = e[c];
					a.seek(b.offset + b.stringOffset + f.offset);
					var h =
						0 === f.platformID || 3 === f.platformID
							? a.Xh(f.length, 2)
							: a.Xh(f.length);
					switch (f.nameID) {
						case 1:
							this.fontFamily = h;
							break;
						case 4:
							this.jf = h;
					}
				}
			};
			c.prototype.TB = function(a, b) {
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
							f,
					);
					switch (l) {
						case 0:
							this.ol.push(new Wh(a.slice(f, n)));
							break;
						case 4:
							this.ol.push(new Xh(a.slice(f, n)));
					}
				}
			};
			c.prototype.WB = function(a) {
				var b = this.le.tables.GPOS;
				b && this.Op.push(new Yh(a.slice(b.offset, b.length)));
			};
			c.prototype.XB = function(a, b) {
				if (b) {
					var c = 0;
					for (b = b.tables; c < b.length; c++) {
						var e = b[c];
						0 === e.coverage >> 8 &&
							(Jh("Format 0 kern table detected"),
							this.Op.push(new Zh(a.slice(e.offset, e.length))));
					}
				}
			};
			c.prototype.transform = function(a, b) {
				b = this.Hb(b);
				a.scale(b, -b);
			};
			c.prototype.Ko = function(a, b, c, e) {
				if (this.qo) this.qo.Ko(a, b, c, e);
				else if (((b = this.yv(b)), null !== b))
					for (var d = 0, h = 0, k = 0, l = 0, n; h < b.oa.length; h++) {
						var r = b.oa[h];
						0 === d
							? (a.moveTo(r.x + c, r.y + e), (d = 1))
							: 1 === d
							? r.ki
								? a.lineTo(r.x + c, r.y + e)
								: (d = 2)
							: ((n = b.oa[h - 1]),
							  r.ki
									? (a.quadraticCurveTo(n.x + c, n.y + e, r.x + c, r.y + e),
									  (d = 1))
									: a.quadraticCurveTo(
											n.x + c,
											n.y + e,
											(n.x + r.x) / 2 + c,
											(n.y + r.y) / 2 + e,
									  ));
						h === b.cf[k] &&
							(2 === d &&
								((n = r),
								(r = b.oa[l]),
								r.ki
									? a.quadraticCurveTo(n.x + c, n.y + e, r.x + c, r.y + e)
									: a.quadraticCurveTo(
											n.x + c,
											n.y + e,
											(n.x + r.x) / 2 + c,
											(n.y + r.y) / 2 + e,
									  )),
							(l = h + 1),
							(k += 1),
							(d = 0));
					}
			};
			c.prototype.yv = function(a) {
				var b = this.Xz(a);
				a = this.Ha;
				var c = this.le.tables.glyf;
				if (0 === b || b >= c.offset + c.length) return null;
				Kh(b >= c.offset);
				Kh(b < c.offset + c.length);
				a.seek(b);
				b = {
					cf: [],
					Zj: a.getInt16(),
					oa: [],
					mF: a.getInt16(),
					oF: a.getInt16(),
					lF: a.getInt16(),
					nF: a.getInt16(),
				};
				Kh(-1 <= b.Zj);
				-1 === b.Zj ? this.gC(a, b) : this.iC(a, b);
				return b;
			};
			c.prototype.Xz = function(a) {
				Kh("loca" in this.le.tables);
				var b = this.le.tables.loca,
					c = this.Ha;
				if (1 === this.Nd.head.indexToLocFormat) {
					b = c.seek(b.offset + 4 * a);
					a = c.na(4);
					var e = c.na(4);
				} else
					(b = c.seek(b.offset + 2 * a)), (a = 2 * c.na(2)), (e = 2 * c.na(2));
				c.seek(b);
				return a === e ? 0 : a + this.le.tables.glyf.offset;
			};
			c.prototype.gC = function(a, b) {
				var c,
					e,
					f = 32;
				b.cf = [];
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
						? (n = k = a.Ng())
						: f & 64
						? ((k = a.Ng()), (n = a.Ng()))
						: f & 128 &&
						  ((k = a.Ng()), (c = a.Ng()), (l = a.Ng()), (n = a.Ng()));
					v = a.Ia;
					if ((h = this.yv(h))) {
						var x = b.oa.length;
						for (w = 0; w < h.cf.length; w++) b.cf.push(h.cf[w] + x);
						for (w = 0; w < h.oa.length; w++) {
							x = h.oa[w].x;
							var y = h.oa[w].y;
							x = k * x + c * y + e;
							y = l * x + n * y + r;
							b.oa.push({ x: x, y: y, ki: h.oa[w].ki });
						}
					}
					a.seek(v);
				}
				b.Zj = b.cf.length;
				f & 256 && a.seek(a.na(2) + a.Ia);
			};
			c.prototype.iC = function(a, b) {
				function c(b, c, d) {
					for (var f = 0, l = 0; l < h; l++) {
						var n = k[l];
						n & c
							? (f = n & d ? f + a.na(1) : f - a.na(1))
							: ~n & d && (f += a.getInt16());
						e[l][b] = f;
					}
				}
				b.cf = [];
				for (var e = (b.oa = []), f = 0; f < b.Zj; f++) b.cf.push(a.na(2));
				a.seek(a.na(2) + a.Ia);
				if (0 !== b.Zj) {
					var h = Math.max.apply(null, b.cf) + 1,
						k = [];
					for (f = 0; f < h; f++)
						if (
							((b = a.na(1)),
							k.push(b),
							e.push({ x: 0, y: 0, ki: 0 < (b & 1) }),
							b & 8)
						) {
							var l = a.na(1);
							Kh(0 < l);
							for (f += l; l--; )
								k.push(b), e.push({ x: 0, y: 0, ki: 0 < (b & 1) });
						}
					c("x", 2, 16);
					c("y", 4, 32);
				}
			};
			c.prototype.Hb = function(a) {
				return a / this.Nd.head.unitsPerEm;
			};
			c.prototype.cA = function(a) {
				Kh("hmtx" in this.le.tables);
				var b = this.Ha,
					c = this.le.tables.hmtx.offset;
				b.seek(c + 4);
				var e = this.Nd.hhea.numOfLongHorMetrics;
				if (a < e) {
					var f = this.Ha.seek(c + 4 * a);
					var h = b.na(2);
				} else
					(f = b.seek(c + 4 * (e - 1))),
						(h = b.na(2)),
						b.seek(c + 4 * e + 2 * (a - e));
				a = b.getInt16();
				b.seek(f);
				return { Cs: h, $A: a };
			};
			c.prototype.Wz = function(a) {
				for (
					var b = 0, c = this.ol.length - 1;
					0 <= c && !(b = this.ol[c].map(a));
					c--
				);
				return b;
			};
			c.prototype.Zy = function(a, b, c, e, f) {
				a.save();
				a.translate(c, e);
				this.transform(a, f);
				f = [];
				for (c = 0; c < b.length; c++) f.push(new $h(this.Wz(b.charCodeAt(c))));
				c = 0;
				for (e = this.Op; c < e.length; c++) e[c].Lj(f);
				for (var d = (e = c = 0); d < f.length; d++) {
					var k = f[d],
						l = this.cA(k.ke);
					Jh(
						"Metrics for %s code %s index %s: %s %s",
						b.charAt(d),
						b.charCodeAt(d),
						k.ke,
						l.Cs,
						l.$A,
					);
					this.Ko(a, k.ke, c + k.oi.x, e + k.oi.y);
					c += l.Cs + k.advance.x;
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
				this.wi = a.na(2) / 2;
			}
			c.prototype.map = function(a) {
				var b = this;
				Jh("Try to map charcode %s using %s ranges", a, this.wi);
				var c = this.Ha,
					e = 0,
					f = 0,
					h = ai(this.wi - 1, function(d) {
						c.seek(14 + 2 * d);
						var f = c.na(2);
						c.seek(2 * b.wi + 16 + 2 * d);
						e = c.na(2);
						return a < e ? -1 : a > f ? 1 : 0;
					});
				if (0 <= h) {
					c.seek(6 * this.wi + 16 + 2 * h);
					f = c.na(2);
					c.seek(4 * this.wi + 16 + 2 * h);
					var k = c.getInt16();
					0 === f
						? (f = (k + a) & 65535)
						: (c.seek(6 * this.wi + 16 + 2 * h + (2 * (a - e) + f)),
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
				this.So = null;
				this.Ro = [];
				var b = a.na(1),
					c = a.na(1),
					e = a.na(1);
				Jh("CFF Version " + b + "." + c);
				a.seek(e);
				a.Cp();
				this.Py = a.Cp();
				this.ED = a.Cp();
				this.HD = a.Ia;
				b = this.sr = this.xv(a.Ij(this.Py, 0));
				this.yB = a.mp(b.CharStrings);
				Jh("CFF Font contains " + this.yB + " glyphs");
				this.sr.FDSelect
					? ((this.So = new bi(a.slice(b.FDSelect))), this.hC(a, b))
					: this.Ro.push(b);
			}
			c.prototype.xv = function(a) {
				a = ci(a, {}, this);
				if (a.Private) {
					var b = a.Private[1];
					ci(this.Ha.slice(b, a.Private[0]), a, this);
					a.Subrs && (a.Subrs += b);
				}
				return a;
			};
			c.prototype.Xh = function(a) {
				if (a < di.length) return di[a];
				a = this.Ha.Ij(this.ED, a - di.length);
				return a.Xh(a.length);
			};
			c.prototype.hC = function(a, b) {
				b = b.FDArray;
				var c = a.mp(b);
				Jh("There are %s items in FDArray", c);
				for (var e = 0; e < c; e++) this.Ro.push(this.xv(a.Ij(b, e)));
			};
			c.prototype.Yt = function(a, b) {
				void 0 === b && (b = -1);
				if (-1 === b) {
					b = this.HD;
					var c = this.sr.CharstringType;
				} else (c = this.Ro[b]), (b = c.Subrs), (c = c.CharstringType);
				var e = this.Ha.mp(b);
				return this.Ha.Ij(
					b,
					a + (0 === c ? 0 : 1240 > e ? 107 : 33900 > e ? 1131 : 32768),
				);
			};
			c.prototype.Vz = function(a) {
				return this.So ? this.So.Nj(a) : 0;
			};
			c.prototype.Ko = function(a, b, c, e) {
				a.translate(c, e);
				var d = this.sr.CharStrings,
					h = this.Vz(b);
				ei(this.Ha.Ij(d, b), a, h, this);
				a.translate(-c, -e);
			};
			return c;
		})(),
		fi = 0,
		gi = 1,
		W = 2,
		hi = 3,
		ii = {};
	function X(c, a, b, d) {
		var e = b instanceof Array;
		ii[a] = {
			name: c,
			bt: d,
			type: e ? b : [b],
			fn: function(a, d) {
				a[c] = e || b === hi ? d : d[0];
			},
		};
	}
	X("version", 0, fi);
	X("Notice", 1, fi);
	X("Copyright", 12, fi);
	X("FullName", 2, fi);
	X("FamilyName", 3, fi);
	X("Weight", 4, fi);
	X("isFixedPitch", 3073, gi, !1);
	X("ItalicAngle", 3074, W, 0);
	X("UnderlinePosition", 3075, W, -100);
	X("UnderlineThickness", 3076, W, 50);
	X("PaintType", 3077, W, 0);
	X("CharstringType", 3078, W, 2);
	X("FontMatrix", 3079, hi, [0.001, 0, 0, 0.001, 0, 0]);
	X("UniqueID", 13, W);
	X("FontBBox", 5, hi, [0, 0, 0, 0]);
	X("StrokeWidth", 3080, W, 0);
	X("XUID", 14, hi);
	X("charset", 15, W, 0);
	X("Encoding", 16, W, 0);
	X("CharStrings", 17, W, 0);
	X("Private", 18, [W, W]);
	X("SyntheticBase", 3092, W);
	X("PostSCript", 3093, fi);
	X("BaseFontName", 3094, fi);
	X("BaseFontBlend", 3095, fi);
	X("ROS", 3102, [fi, fi]);
	X("CIDFontVersion", 3103, W, 0);
	X("CIDFontRevision", 3104, W, 0);
	X("CIDFontType", 3105, W, 0);
	X("CIDCount", 3106, W);
	X("FDArray", 3108, W);
	X("FDSelect", 3109, W);
	X("FontName", 3110, fi);
	X("BlueValues", 6, W);
	X("OtherBlues", 7, W);
	X("FamilyBlues", 8, W);
	X("FamilyOtherBlues", 9, W);
	X("BlueScale", 3081, W, 0.039625);
	X("BlueShift", 3082, 8);
	X("BlueFuzz", 3073, 1);
	X("StdHW", 10, W);
	X("StdVW", 11, W);
	X("StemSnapH", 3084, W);
	X("StemSnapV", 3085, W);
	X("ForceBold", 3086, gi, !1);
	X("LanguageGroup", 3089, W, 0);
	X("ExpansionFactor", 3090, W, 0.6);
	X("initialRandomSeed", 3091, W, 0);
	X("Subrs", 19, W);
	X("defaultWidthX", 20, W);
	X("NominalWidthX", 21, W);
	function ci(c, a, b) {
		for (; !c.Oo(); ) {
			var d = c.St();
			if (d.code in ii) {
				var e = ii[d.code],
					f = [],
					h = 0;
				a: for (; h < e.type.length; h++) {
					var k = e.type[h];
					if (h >= d.oe.length)
						throw Error("Not enough operands for instruction:" + d);
					var l = d.oe[h];
					switch (k) {
						case fi:
							f.push(b.Xh(l));
							break;
						case gi:
							f.push(!!l);
							break;
						case hi:
							f = d.oe;
							break a;
						case W:
							f.push(l);
					}
				}
				e.fn(a, f);
			} else Jh("Uknown dict opcode: %s", d.code);
		}
		for (var n in ii) (e = ii[n]), !e.bt || e.name in a || (a[e.name] = e.bt);
		return a;
	}
	function ei(c, a, b, d, e) {
		for (
			e = e || {
				first: !0,
				width: 0,
				Yj: 0,
				stack: [],
				x: 0,
				y: 0,
				th: !1,
				pb: 0,
				qb: 0,
			};
			!c.Oo();

		) {
			switch (c.St(!0, e.stack).code) {
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
					ei(d.Yt(e.stack.pop(), b), a, b, d, e);
					continue;
				case 11:
					return;
				case 14:
					e.stack.length && ji(e);
					e.th && a.lineTo(e.pb, e.qb);
					break;
				case 18:
				case 23:
					e.stack.length & 1 && ji(e);
					e.Yj += e.stack.length >> 1;
					break;
				case 19:
				case 20:
					e.stack.length & 1 && ji(e);
					e.Yj += e.stack.length >> 1;
					f = (e.Yj + 7) >> 3;
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
					ei(d.Yt(e.stack.pop(), -1), a, b, d, e);
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
		c.th && a.lineTo(c.pb, c.qb);
		c.pb = c.x;
		c.qb = c.y;
		c.th = !0;
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
				this.Nu = 0;
				this.format = a.na(1);
				Jh("Reading FDSelect format %s", this.format);
				if (3 !== this.format && 0 !== this.format)
					throw Error("Can't read format " + this.format + " FDSelect");
				3 === this.format && (this.Nu = a.na(2));
			}
			c.prototype.Nj = function(a) {
				var b = this;
				if (0 === this.format) return this.Ha.seek(1 + a), this.Ha.na(1);
				var c = -1;
				ai(this.Nu, function(d) {
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
			/\s+/,
		);
	function $h(c) {
		this.ke = c;
		this.oi = { x: 0, y: 0 };
		this.advance = { x: 0, y: 0 };
	}
	var Yh = (function() {
			function c(a) {
				this.fo = [];
				this.iu = Sh(
					a,
					"{\n    majorVersion:uint16\n    minorVersion:uint16\n    scriptListOffset:uint16\n    featureListOffset:uint16\n    lookupListOffset:uint16\n    featureVariationsOffset:uint16\n\n    push scriptListOffset\n    scriptCount:uint16\n    scriptRecords:[scriptCount] {\n        tag:string(4)\n        scriptOffset:uint16\n        push scriptOffset\n        defaultLangSys:uint16\n        langSysCount:uint16\n        langSysRecords:[langSysCount] {\n            langSysTag:string(4)\n            langSysOffset:uint16\n            push langSysOffset\n            lookupOrder:uint16\n            requiredFeatureIndex:uint16\n            featureIndexCount:uint16\n            featureIndices:[featureIndexCount] uint16\n            pop\n        }\n        pop\n    }\n    pop\n\n    push lookupListOffset\n    lookupCount:uint16\n    lookups:[lookupCount] {\n        offset:uint16\n        push offset\n        lookupType:uint16\n        lookupFlag:uint16\n        subTableCount:uint16\n        subTables:[subTableCount] {\n            offset:uint16\n            push offset\n            posFormat:uint16\n            coverageOffset:uint16\n        }\n        pop\n    }\n    pop\n\n    push featureListOffset\n    featureCount:uint16\n    featureRecords[featureCount] {\n        featureTag:string(4)\n        featureOffset:uint16\n        push featureOffset\n        featureParams:uint16\n        lookupIndexCount:uint16\n        lookupListIndicies:[lookupIndexCount] uint16\n        pop\n    }\n    pop\n}",
				);
				for (
					var b = this.iu.lookupListOffset, c = 0, e = this.iu.lookups;
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
							? this.fo.push(new ni(a.slice(r)))
							: 2 === k &&
							  2 === n.posFormat &&
							  this.fo.push(new oi(a.slice(r)));
					}
				}
			}
			c.prototype.Lj = function(a) {
				for (var b = 0, c = this.fo; b < c.length; b++) c[b].Lj(a);
			};
			return c;
		})(),
		pi = (function() {
			function c(a) {
				this.Ha = a;
				this.jm = 4;
				this.format = a.na(2);
				this.count = a.na(2);
				Jh("CoverageTable format %s count %s", this.format, this.count);
			}
			c.prototype.bp = function(a) {
				var b = this,
					c = -1;
				1 === this.format
					? ai(this.count, function(d) {
							b.Ha.seek(b.jm + 2 * d);
							d = b.Ha.na(2);
							if (a < d) return -1;
							if (a > d) return 1;
							c = d;
							return 0;
					  })
					: ai(this.count, function(d) {
							b.Ha.seek(b.jm + 6 * d);
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
				b.ow = 0;
				1 === b.format && ((b.ow = b.count), (b.count = a.na(2)), (b.jm += 2));
				return b;
			}
			__extends(a, c);
			a.prototype.Lt = function(a) {
				return Math.max(0, this.bp(a - this.ow));
			};
			return a;
		})(pi);
	function ri(c, a, b) {
		b & 1 && (a.oi.x = c.getInt16());
		b & 2 && (a.oi.y = c.getInt16());
		b & 4 && (a.advance.x = c.getInt16());
		b & 8 && (a.advance.y = c.getInt16());
		b & 16 && c.getInt16();
		b & 32 && c.getInt16();
		b & 64 && c.getInt16();
		b & 128 && c.getInt16();
	}
	var si = (function() {
			function c() {}
			c.prototype.Lj = function(a) {
				for (var b = 0; b < a.length - 1; b++) this.Nj(a[b], a[b + 1]);
			};
			return c;
		})(),
		ni = (function(c) {
			function a(a) {
				var b = c.call(this) || this;
				b.Ha = a;
				a.na(2);
				var e = a.na(2);
				b.yo = new pi(a.slice(e));
				b.Hk = a.na(2);
				b.Ik = a.na(2);
				b.count = a.na(2);
				b.kC = 2 * ti(b.Hk) + 2 * ti(b.Ik) + 2;
				return b;
			}
			__extends(a, c);
			a.prototype.Nj = function(a, c) {
				var b = this,
					d = this.yo.bp(a.ke);
				if (-1 === d) return 0;
				this.Ha.seek(10 + 2 * d);
				this.Ha.seek(this.Ha.na(2));
				var h = this.Ha.Ia;
				d = this.Ha.na(2);
				return 0 <=
					ai(d, function(d) {
						b.Ha.seek(h + d * b.kC);
						d = b.Ha.na(2);
						if (d < c.ke) return -1;
						if (d > c.ke) return 1;
						ri(b.Ha, a, b.Hk);
						ri(b.Ha, c, b.Ik);
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
				b.yo = new pi(a.slice(a.na(2)));
				b.Hk = a.na(2);
				b.Ik = a.na(2);
				b.$x = new qi(a.slice(a.na(2)));
				b.ay = new qi(a.slice(a.na(2)));
				b.QE = a.na(2);
				b.Zx = a.na(2);
				b.Av = 2 * ti(b.Hk) + 2 * ti(b.Ik);
				return b;
			}
			__extends(a, c);
			a.prototype.Nj = function(a, c) {
				if (-1 === this.yo.bp(a.ke)) return 0;
				var b = this.$x.Lt(a.ke),
					d = this.ay.Lt(c.ke);
				this.Ha.seek(16 + b * this.Av * this.Zx + d * this.Av);
				ri(this.Ha, a, this.Hk);
				ri(this.Ha, c, this.Ik);
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
			a.prototype.Nj = function(a, c) {
				var b = this,
					d = (a.ke << 16) | c.ke,
					h = 0;
				ai(this.count, function(a) {
					b.Ha.seek(8 + 6 * a);
					a = b.Ha.na(4);
					if (d < a) return -1;
					if (d > a) return 1;
					a = b.Ha.getInt16();
					c.oi.x += a;
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
	var xh = D.qd("CanvasRenderingContext2D", { beginPath: D.Function }),
		ui = D.qd("TextOptions", {
			text: D.String,
			width: D.Va,
			height: D.Va,
			font: D.Sb,
			valign: D.gb(D.jb(D.ud("top"), D.ud("bottom"), D.ud("middle"))),
			halign: D.gb(
				D.jb(D.ud("left"), D.ud("right"), D.ud("centre"), D.ud("center")),
			),
			textDecoration: D.Sb,
		});
	"undefined" !== typeof jQuery &&
		((jQuery.fn.zwibbler = function(c) {
			void 0 === c && (c = {});
			var a = null;
			this.each(function(b, d) {
				d.zwibbler && jQuery(d).empty();
				a = new U(d, c, {});
				d.zwibbler = a;
			});
			return a;
		}),
		(jQuery.fn.zwibblerContext = function() {
			return this[0].zwibbler;
		}));
	var Z = (function() {
			function c() {
				this.bi = [];
				this.buttons = [];
				this.tl = {};
				this.fonts = new Uh();
				this.ve = {};
				this.at = [];
				this.log = z.create("ZWIBBLER");
				this.WebSocket = WebSocket;
				this.Zb = new Za();
				this.controllers = {};
				this.Mw = U;
			}
			c.prototype.create = function(a, b, c) {
				void 0 === c && (c = {});
				"string" === typeof a &&
					0 < a.length &&
					"." !== a.charAt(0) &&
					"#" !== a.charAt(0) &&
					(a = "#" + a);
				var d = u.oc(a);
				if (!d)
					throw (alert("Zwibbler.create: Cannot find an element with id " + a),
					Error("Error in Zwibbler.creawte"));
				return new U(d, b, c);
			};
			c.prototype.mx = function(a) {
				for (var b = ["name", "image", "onclick"], c = 0; c < b.length; c++)
					if (!(b[c] in a))
						return alert("Zwibbler.addButton: missing " + b[c]), !1;
				this.buttons.push(a);
				return !0;
			};
			c.prototype.ox = function(a, b) {
				this.tl[a] = b;
			};
			c.prototype.Vw = function(a, b) {
				void 0 === b && (b = {});
				return this.Mn(a, b);
			};
			c.prototype.Mn = function(a, b) {
				void 0 === b && (b = {});
				return zd(a, b);
			};
			c.prototype.Dy = function(a, b) {
				return this.lh(a, b);
			};
			c.prototype.Bb = function(a, b) {
				Q.Bb(a, function(a, c, f, h) {
					b(new Se(Q, a, c, f, h));
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
			c.prototype.lh = function(a, b, c) {
				function d() {
					var a = y.fd(),
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
					w = dc(null),
					x = w.getContext("2d"),
					y = ng.Bh(a, null, {}, []);
				if (!y) throw Error("Zwibbler.render: Could not open document");
				var B = new He();
				y.format(x, B);
				B.pa("reformat", function(a) {
					y.bg(a);
				});
				B.pm()
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
					var e = ng.Bh(a, null, {}, []);
					if (e) {
						e.Sg("background") || e.setProperty("background", "white");
						var k = dc(null).getContext("2d"),
							l = new He();
						l.pa("reformat", function(a) {
							e.bg(a);
						});
						var n = function() {
							try {
								e.format(k, l);
								c.page && e.Dc(c.page);
								var a = ng.Mk(e, b, c.encoding || "string");
								d(a);
							} catch (v) {
								f(v);
							}
						};
						l.pa("done", n);
						e.format(k, l);
						l.pm() || n();
					} else f(Error("Failed to open document"));
				});
			};
			c.prototype.ib = function(a) {
				a = ng.Bh(a, null, {}, []);
				if (!a) throw Error("Failed to open document");
				return a.ib();
			};
			c.prototype.UB = function(a) {
				a = q.hf(a);
				return {
					r: a.values[0],
					g: a.values[1],
					b: a.values[2],
					a: a.values[3],
				};
			};
			c.prototype.fB = function(a) {
				return new q(q.RGBA, [a.r, a.g, a.b, a.a]).toString();
			};
			c.prototype.yz = function(a) {
				var b = document.createElement("a");
				b.href = a;
				return b.href;
			};
			c.prototype.Mx = function(a) {
				return Sa(Ta(a));
			};
			c.prototype.qx = function(a) {
				var b = this;
				return this.fonts.add(a).then(function(c) {
					b.Fe(
						'\n@font-face {\n    font-family: "' +
							c[0].jf +
							'";\n    src: url("' +
							a +
							'");\n}',
					);
					new FontFace(c[0].jf, "url(" + a + ")").load().then(function(a) {
						document.fonts.add(a);
					});
					for (var d = 0, f = b.bi; d < f.length; d++) {
						var h = f[d],
							k = h.yc("fonts").concat();
						k.push(c[0].jf);
						h.$m("fonts", k);
					}
					return c[0].jf;
				});
			};
			c.prototype.Uw = function(a) {
				return new O(a);
			};
			c.prototype.Kr = function(a) {
				var b = new O();
				Gc(b, a);
				return b.rc();
			};
			c.prototype.ky = function(a) {
				return this.Kr(a);
			};
			c.prototype.Vy = function(a, b) {
				Gc(a, b);
			};
			c.prototype.kp = function(a, b) {
				var c = document.createElement("img");
				c.src = a;
				if (0 < a.toLowerCase().indexOf(".svg")) {
					var e = new Yd();
					e.jq(a).then(function() {
						b && b(e.rect.width, e.rect.height, c);
					});
				} else
					c.onload = function() {
						b && b(c.naturalWidth, c.naturalHeight, c);
					};
			};
			c.prototype.Tp = function(a) {
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
			c.prototype.QC = function(a, b) {
				return fc(a, b);
			};
			c.prototype.OD = function(a) {
				return this.Bk(a);
			};
			c.prototype.rm = function() {
				var a = document.createElement("DIV");
				return !!(
					a.requestFullscreen ||
					a.msRequestFullscreen ||
					a.sB ||
					a.webkitRequestFullscreen
				);
			};
			c.prototype.Bk = function(a) {
				var b = u.oc(a);
				if (!b) throw Error("Zwibbler.toggleFullScreen: " + a + " not found");
				a = document;
				this.tu()
					? document.exitFullscreen
						? document.exitFullscreen()
						: a.msExitFullscreen
						? a.msExitFullscreen()
						: a.rB
						? a.rB()
						: a.webkitExitFullscreen && a.webkitExitFullscreen()
					: b.requestFullscreen
					? b.requestFullscreen()
					: b.msRequestFullscreen
					? b.msRequestFullscreen()
					: b.sB
					? b.mozRequestFullScreen()
					: b.webkitRequestFullscreen
					? b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
					: console.log(
							"Element does not contain any requestFullscreen methods",
					  );
			};
			c.prototype.tu = function() {
				var a = document;
				return a.fullscreenElement ||
					a.mozFullScreenElement ||
					a.webkitFullscreenElement ||
					a.msFullscreenElement
					? !0
					: !1;
			};
			c.prototype.dz = function() {
				z.cz();
			};
			c.prototype.eu = function(a) {
				return Vf.Pw(a);
			};
			c.prototype.Fe = function(a) {
				this.Zb.Dp(a);
			};
			c.prototype.controller = function(a, b) {
				this.controllers[a] = b;
			};
			c.prototype.Xi = function(a, b) {
				Q.Xi(a, b);
				this.ve[a] = b;
			};
			c.prototype.fC = function(a) {
				this.at.push(a);
			};
			c.prototype.Nt = function(a) {
				return a in this.ve
					? JSON.parse(JSON.stringify(this.ve[a].defaults || {}))
					: {};
			};
			c.prototype.Zi = function(a, b, c, e) {
				void 0 === c && (c = {});
				void 0 === e && (e = null);
				if ("object" !== typeof a || "string" !== typeof b)
					throw Error("Bad arguments passed to createComponent");
				return Q.Zi(a, b, c, e);
			};
			c.prototype.Oy = function(a) {
				Q.detach(a);
				u(a).remove();
			};
			c.prototype.Jc = function(a, b) {
				var c = u.oc(a);
				if (!c) throw Error("Zwibbler.attach: Cannot find element from " + a);
				return Rg(c, b, !0);
			};
			c.prototype.detach = function(a) {
				Q.detach(a);
			};
			c.prototype.Ax = function(a) {
				return "string" !== typeof a.url
					? Promise.reject(Error("Zwibbler.ajax: settings.url missing"))
					: Ya({
							url: a.url,
							method: a.method,
							mv: a.params,
							mimeType: a.mimeType,
							contentType: a.contentType,
							withCredentials: a.withCredentials,
							data: a.data,
							dt: a.delay,
							cancel: a.cancel,
							headers: a.headers,
					  }).then(
							function(a) {
								Q.digest();
								return a;
							},
							function(a) {
								Q.digest();
								throw a;
							},
					  );
			};
			c.prototype.aD = function(a, b) {
				var c = Nb();
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
			c.prototype.FA = function() {
				return Nb();
			};
			c.prototype.GA = function() {
				return Ob();
			};
			c.prototype.Ny = function() {
				for (var a = 0, b = this.bi.concat(); a < b.length; a++) b[a].Sa();
				this.Zb.Sa();
				this.fonts.nC();
				Q.Sa();
				this.buttons.length = 0;
				this.tl.length = 0;
			};
			c.prototype.Jl = function(a, b) {
				D.ga("formatText", arguments, xh, ui);
				var c = new fd();
				b.text && c.ng(b.text);
				if (b.font) {
					var e = Qd(b.font);
					c.an(
						e.fontFamily || "arial",
						parseFloat(e.fontSize),
						"bold" === e.fontWeight,
						"italic" === e.fontStyle,
						b.textDecoration || "",
					);
				}
				c.Nq(b.halign || null, b.valign || null);
				c.format(a, b.width || 0, b.height || 0);
				return {
					draw: function(a, b, d) {
						c.la(a, b, d);
					},
					width: c.rect.width,
					height: c.rect.height,
				};
			};
			c.prototype.Sw = function(a, b) {
				D.ga("NewPointerListener", arguments, D.HTMLElement);
				var c = new pe(a, { yn: b.useCapture });
				return {
					on: function(a, b) {
						D.ga("on", arguments, D.String, D.Function);
						c.pa(a, function(a) {
							b({
								type: a.type,
								originalEvent: a.sb,
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
			c.prototype.vB = function(a, b) {
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
					c = new ab();
				c.Nv(b, a);
				setTimeout(function() {
					c.Sa();
				}, 1010);
			};
			return a;
		})(zf);
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
	var P = new Z(),
		wi = Ob(Qf).module || "Zwibbler";
	"function" === typeof define &&
		define.amd &&
		define(wi, ["exports"], function(c) {
			c.Zwibbler = P;
		});
	"undefined" !== typeof globalModule &&
		globalModule.exports &&
		(globalModule.exports.Zwibbler = P);
	window[wi] = P;
	bc.resolve(P);
	P.instances = P.bi;
	Z.prototype.addButton = Z.prototype.mx;
	Z.prototype.addCustomNode = Z.prototype.ox;
	Z.prototype.Popup = Z.prototype.Vw;
	Z.prototype.Dialog = Z.prototype.Mn;
	Z.prototype.createPreview = Z.prototype.Dy;
	Z.prototype.directive = Z.prototype.Bb;
	Z.prototype.getContext = Z.prototype.getContext;
	Z.prototype.render = Z.prototype.lh;
	Z.prototype.save = Z.prototype.save;
	Z.prototype.getPageCount = Z.prototype.ib;
	Z.prototype.parseColour = Z.prototype.UB;
	Z.prototype.makeColour = Z.prototype.fB;
	Z.prototype.getAbsoluteUrl = Z.prototype.yz;
	Z.prototype.base64Encode = Z.prototype.Mx;
	Z.prototype.addFont = Z.prototype.qx;
	Z.prototype.PathCommands = Z.prototype.Uw;
	Z.prototype.CommandsFromSvgPath = Z.prototype.Kr;
	Z.prototype.commandsFromSVGPath = Z.prototype.ky;
	Z.prototype.drawSVGPath = Z.prototype.Vy;
	Z.prototype.getImageSize = Z.prototype.kp;
	Z.prototype.loadImage = Z.prototype.Tp;
	Z.prototype.setColourOpacity = Z.prototype.QC;
	Z.prototype.toggleFullScreen = Z.prototype.OD;
	Z.prototype.isFullscreenSupported = Z.prototype.rm;
	Z.prototype.toggleFullscreen = Z.prototype.Bk;
	Z.prototype.isFullScreen = Z.prototype.tu;
	Z.prototype.enableConsoleLogging = Z.prototype.dz;
	Z.prototype.hasConfig = Z.prototype.eu;
	Z.prototype.injectStyle = Z.prototype.Fe;
	Z.prototype.controller = Z.prototype.controller;
	Z.prototype.component = Z.prototype.Xi;
	Z.prototype.propertyPanel = Z.prototype.fC;
	Z.prototype.createComponent = Z.prototype.Zi;
	Z.prototype.destroyComponent = Z.prototype.Oy;
	Z.prototype.attach = Z.prototype.Jc;
	Z.prototype.detach = Z.prototype.detach;
	Z.prototype.ajax = Z.prototype.Ax;
	Z.prototype.setHashValue = Z.prototype.aD;
	Z.prototype.getUrlHash = Z.prototype.FA;
	Z.prototype.getUrlQuery = Z.prototype.GA;
	Z.prototype.destroyAll = Z.prototype.Ny;
	Z.prototype.formatText = Z.prototype.Jl;
	Z.prototype.NewPointerListener = Z.prototype.Sw;
	Z.prototype.newPdfContext = Z.prototype.vB;
	Z.prototype.Context = Z.prototype.Mw;
	vi.prototype.download = vi.prototype.download;
	window.Zwibbler = P;
	var xi = z.create("RESIZE"),
		yi = (function() {
			function c(a, b, c) {
				this.Da = a;
				this.node = b;
				this.hb = c;
				xi("Enter resize behaviour");
				this.rect = b.rect.clone();
				this.Da.Pe(!0);
				this.Da.Jb(Id(c));
			}
			c.prototype.Ad = function() {};
			c.prototype.Ac = function() {
				this.Da.Pe(!1);
				this.Da.Jb("default");
				xi("Exit RESIZE");
			};
			c.prototype.Cb = function(a, b, c) {
				b = (c.pageX - c.pb) / this.Da.scale;
				var d = (c.pageY - c.qb) / this.Da.scale;
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
				this.node.format(this.Da.ma, this.Da.request);
				this.Da.la();
				if (this.node.da) {
					a = this.node.da;
					f = a.offsetParent;
					b = c.x;
					for (d = c.y; f instanceof HTMLElement && f !== this.Da.aa.Ed; )
						(b -= f.offsetLeft), (d -= f.offsetTop), (f = f.offsetParent);
					f = u(a).Vl();
					a.style.left = b - f.left + "px";
					a.style.top = d - f.top + "px";
					a.style.width = c.width - f.Rp - f.Gq + "px";
					a.style.height = c.height - f.tr - f.no + "px";
					this.node.sk(c, this.node.Na());
				}
				return !0;
			};
			c.prototype.Wb = function() {
				if (!this.node.da) throw Error("Expected element to be created");
				this.Da.Xa(new Gf(this.Da));
				this.Da.aa.ab();
				this.Da.aa.zb([this.node.id], {
					"style.left": this.node.da.style.left,
					"style.top": this.node.da.style.top,
					"style.width": this.node.da.style.width,
					"style.height": this.node.da.style.height,
				});
				this.Da.aa.wa(!1);
				return !0;
			};
			return c;
		})();
	var zi = z.create("DefaultBehaviour"),
		Gf = (function() {
			function c(a) {
				this.view = a;
				this.Hq = 1;
				this.view.bn("");
				if ((this.Fi = this.view.ha.Fi())) this.Hq = 2;
				this.Bc = new Ge(a);
			}
			c.prototype.Ad = function() {
				zi("Entering pick tool.");
				this.view.Jb("default");
			};
			c.prototype.Ac = function() {
				zi("Leaving pick tool.");
			};
			c.prototype.vb = function(a) {
				return this.Bc.vb(a);
			};
			c.prototype.wb = function(a, b, c) {
				if (c.buttons && 1 !== c.buttons)
					return zi("   -- not main button. ignore."), !1;
				if (this.view.ha.get("readOnly")) {
					var d = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb);
					d.node
						? (zi("layer=%s active=%s", d.node.zc(), this.view.Tb),
						  this.view.xa.ta("node-clicked", d.node.id, a, b),
						  d.ef && d.ef.click(d.node, c.sb))
						: zi("readOnly mode: Ignoring click.");
					return !1;
				}
				this.view.selection.length && this.view.WA(c) && this.view.ej();
				if (this.view.Ja) {
					var f = this.view.Ja;
					var h = f.ai(a, b, (1 / this.view.scale) * this.Hq);
					if (null !== h)
						return this.view.Xa(new Ai(this.view, f, h, a, b, this, c)), !0;
				}
				if ((h = this.view.Qt(a, b))) {
					if (!h.Ps()) return h.click(c), this.view.xa.digest(), !0;
					this.view.Xa(
						new De(this.view, h, !1, a, b, c, c.ctrlKey && c.altKey),
					);
					return !0;
				}
				h = !1;
				d ||
					((h = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb)),
					(d = h.node),
					(h = null !== h.ef));
				d || (d = this.view.aa.jp(c.target));
				if (h) return !0;
				h = d && Qc(d) && 2 > this.view.selection.length && !d.sm();
				f = this.view.og.qp(a, b);
				if (d && this.view.Tb.has(d.zc()) && !this.view.aa.Jp(d)) {
					f = d === this.view.Ja;
					var k = this.view.Wg(d);
					zi(
						"wasEditNode: %s, wasSelected: %s curselsize=%s",
						f,
						k,
						this.view.selection.length,
					);
					k || (c.shiftKey || this.view.rb(), this.view.Ye(d), this.view.mc());
					var l = this.Jt(d, a, b, c),
						n = l.handle;
					l = l.Ja;
					if (n && l)
						return this.view.Xa(new Ai(this.view, l, n, a, b, this, c)), !0;
					if (h) return !1;
					this.view.Xa(
						new De(
							this.view,
							this.view.lk ? new xe(re, d.Na(), d.za) : new ye(),
							!f && k,
							a,
							b,
							c,
							c.ctrlKey && c.altKey,
						),
					);
				} else if (this.view.qv(a, b)) {
					if (h) return !1;
					this.view.Xa(
						new De(
							this.view,
							this.view.lk
								? new xe(
										re,
										this.view.selection[0].Na(),
										this.view.selection[0].za,
								  )
								: new ye(),
							!0,
							a,
							b,
							c,
							c.ctrlKey && c.altKey,
						),
					);
				} else {
					if (!this.view.ha.Az())
						return (
							zi("Disabled select box -- mobile touch active."),
							this.view.kg(null),
							this.view.rb(),
							this.view.mc(),
							this.view.la(),
							!1
						);
					0 == f.length &&
						(c.Lp()
							? c.setData("clearOnClick", !0)
							: (this.view.kg(null),
							  this.view.Xa(new Be(this.view, this, a, b))));
				}
				return !0;
			};
			c.prototype.Cb = function(a, b, c) {
				var d = this.view.og.qp(a, b),
					f = "default",
					h = "";
				d.length && !u.sf(c.sb.target) && ((f = Id(d[0].hb)), (h = d[0].id));
				c.sb.target instanceof HTMLElement &&
					c.sb.target.matches("[z-editable], [z-editable] *") &&
					(f = "text");
				d = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb);
				this.view.OC(d.ef);
				d.node &&
					((c = this.Jt(d.node, a, b, c).handle)
						? (f = (c instanceof Object ? c.Zf() : "") || "default")
						: d.node.id !== h && (f = "default"));
				"default" === f && (c = this.view.Qt(a, b)) && (f = c.Zf());
				this.view.Jb(f);
				return !1;
			};
			c.prototype.Jt = function(a, b, c, e) {
				if (!u.sf(e.sb.target)) {
					for (e = null; ; ) {
						if (a && 0 != (a.lb & 16) && a.cu()) {
							e = a;
							break;
						}
						if (a && a.parent && L(a.parent)) a = a.parent;
						else break;
					}
					if (e)
						return {
							handle: e.ai(b, c, (1 / this.view.scale) * this.Hq),
							Ja: e,
						};
				}
				return { handle: null, Ja: null };
			};
			c.prototype.Wb = function() {
				zi("onMouseUp");
				return !1;
			};
			c.prototype.fq = function(a, b, c) {
				var d = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb);
				d.node &&
					(this.view.xa.ta("node-clicked", d.node.id, a, b),
					d.ef && d.ef.click(d.node, c.sb));
				c.getData("clearOnClick") &&
					(this.view.kg(null), this.view.rb(), this.view.mc(), this.view.la());
				return !1;
			};
			c.prototype.Gm = function(a, b, c) {
				zi("Mouse drag!");
				if (this.Bc.active) return !0;
				var d = !1;
				if (1 === c.buttons) {
					if (
						(u.sf(c.getData("target")) && !this.view.Kp) ||
						this.view.ha.get("readOnly")
					)
						return !1;
					var f = this.view.ae(c.pb, c.qb, !0);
					d = this.view.og.qp(f.x, f.y);
					if (
						(f = d.length
							? this.view.aa.Gb(d[0].id)
							: this.view.aa.Ib(f.x, f.y, this.view.scale, this.view.Tb)
									.node) &&
						Rc(f) &&
						this.view.Tb.has(f.zc())
					) {
						var h = f.da.hasAttribute("z-fixture");
						if (!h) {
							h = void 0;
							var k;
							if ((k = d.length))
								a: {
									switch (d[0].hb) {
										case 25:
										case 33:
										case 19:
										case 34:
										case 22:
										case 36:
										case 28:
										case 40:
											k = !0;
											break a;
									}
									k = !1;
								}
							k && f.da.hasAttribute("z-sizeable") && !f.ia("lockSize")
								? (h = new yi(this.view, f, d[0].hb))
								: f.ia("lockPosition") ||
								  (c.ctrlKey &&
										c.altKey &&
										((f = this.view.aa.Aa(
											this.view.aa.duplicate([f.id], new J())[0],
											!1,
										)),
										this.view.update()),
								  f &&
										Rc(f) &&
										((this.view.Wg(f) && 1 !== this.view.selection.length) ||
										f.sm()
											? zi("Not dragging html -- multiple nodes selected.")
											: (h = new ag(this.view, c, f, 0))));
							h && this.view.Xa(h);
						}
					}
					d = !!f;
					if (!f) {
						a: {
							for (d = c.sb.target; d; ) {
								if (d.hasAttribute("z-drag-to-create")) {
									d = { da: d, type: d.getAttribute("z-drag-to-create") };
									break a;
								}
								d = d.parentElement;
							}
							d = null;
						}
						if (d) {
							h = P.Nt(d.type);
							h.$component = d.type;
							k = d.da;
							for (var l = {}, n = 0; n < k.attributes.length; n++) {
								var r = k.attributes[n].name,
									v = k.attributes[n].value;
								if (r.startsWith("z-prop:")) {
									r = r.substr(7);
									for (var w = !1, x = "", y = 0; y < r.length; y++) {
										var B = r[y];
										"-" === B
											? (w = !0)
											: w
											? ((x += B.toUpperCase()), (w = !1))
											: (x += B.toLowerCase());
									}
									r = x;
									v = Ue.Fl(l, v, k);
									h[r] = v;
								}
							}
							k = new Xg(this.view.aa.xj(), this.view.aa);
							k.Xb(h);
							k.format(this.view.ma, this.view.request);
							this.view.Xa(new ag(this.view, c, k, 1));
						} else
							(f = this.view.aa.jp(c.target)) &&
								Rc(f) &&
								((h = f.da.hasAttribute("z-fixture")) ||
									this.view.Xa(new ag(this.view, c, f, 2)));
						d = !!f || !!d;
					}
				}
				!d &&
					c.Lp() &&
					((d = new Jf(this.view)),
					this.view.Xa(d),
					(f = this.view.ae(c.pb, c.qb, !0)),
					d.BD(f.x, f.y, c, this),
					d.Cb(a, b, c));
				return !1;
			};
			c.prototype.ne = function(a, b) {
				zi("keyboard: %s on target %s", a, b.target.tagName);
				if (!u.sf(b.target, b)) {
					var c = !0,
						e = this.view.ha.get("nudge");
					b && b.ctrlKey && (e = this.view.ha.get("preciseNudge"));
					var f = this.view.Ra.Mb;
					switch (a) {
						case "bring-to-front":
							this.view.Td(0);
							break;
						case "send-to-back":
							this.view.Td(1);
							break;
						case "left":
							f ||
								this.view.Am(-1, 0, e) ||
								((this.view.Db = Math.min(this.view.Db + 16, 0)),
								this.view.wd(),
								this.view.la());
							break;
						case "right":
							f ||
								this.view.Am(1, 0, e) ||
								((a = this.view.$o().width),
								(this.view.Db = Math.max(
									-(a * this.view.scale - a),
									this.view.Db - 16,
								)),
								this.view.wd(),
								this.view.la());
							break;
						case "up":
							f ||
								this.view.Am(0, -1, e) ||
								((this.view.Eb = Math.min(this.view.Eb + 16, 0)),
								this.view.wd(),
								this.view.la());
							break;
						case "down":
							f ||
								this.view.Am(0, 1, e) ||
								((a = this.view.$o().height),
								(this.view.Eb = Math.max(
									-(a * this.view.scale - a),
									this.view.Eb - 16,
								)),
								this.view.wd(),
								this.view.la());
							break;
						case "select-none":
							this.view.rb();
							this.view.mc();
							this.view.la();
							f && this.view.Rc.ta("goto-toolbar");
							break;
						case "select-all":
							var h = [];
							this.view.aa.wc(function(a) {
								h.push(a);
							});
							this.view.selectNodes(h);
							this.view.la();
							f && this.view.Rc.ta("goto-toolbar");
							break;
						case "duplicate":
							this.view.duplicate();
							break;
						case "move-up":
							this.view.Td(2);
							break;
						case "move-down":
							this.view.Td(3);
							break;
						case "delete":
							this.view.ej();
							break;
						case "curve-tool":
							this.view.$s({});
							break;
						case "line-tool":
							this.view.Fu({}, !1, !1, !1);
							break;
						case "group":
							this.view.group();
							break;
						case "ungroup":
							this.view.Ei();
							break;
						case "undo":
							this.view.Wc();
							break;
						case "redo":
							this.view.qe();
							break;
						case "cut":
							this.view.Do();
							break;
						case "copy":
							this.view.Bg(!1, this.view.Tc(!1));
							break;
						case "paste":
							this.view.ek();
							break;
						case "zoom-normal":
							this.view.ha.get("allowZoom")
								? this.view.ce(1)
								: zi("Zooming is disabled.");
							break;
						case "zoom-in":
							this.view.ha.get("allowZoom")
								? this.view.En()
								: zi("Zooming is disabled.");
							break;
						case "zoom-out":
							this.view.ha.get("allowZoom")
								? this.view.Fn()
								: zi("Zooming is disabled.");
							break;
						default:
							c = !1;
					}
					c && (b.preventDefault(), b.stopPropagation());
					return c;
				}
			};
			c.prototype.me = function(a, b) {
				b
					? ((this.view.vc = a), (this.view.lc = a), (b = "fillStyle"))
					: ((this.view.bd = a), (b = "strokeStyle"));
				this.view.setProperty(b, a);
			};
			c.prototype.eg = function(a, b) {
				b
					? ((this.view.vc = fc(this.view.vc, a)),
					  (this.view.lc = fc(this.view.lc, a)))
					: (this.view.bd = fc(this.view.bd, a));
				this.view.Uq(a, b);
			};
			c.prototype.eq = function(a, b) {
				zi("onDoubleClick");
				var c = this.view.aa.Ib(a, b, this.view.scale, this.view.Tb).node;
				zi("hittest: %s, hasText: %s", null !== c, null !== c && c.Tg());
				this.view.xa.ta("double-click", a, b, c ? c.id : null);
				if (
					c &&
					"PathNode" === c.type() &&
					!this.view.ha.get("allowTextInShape")
				)
					zi("Editing text in shape is disabled.");
				else if (c && c.Tg() && !this.view.ha.get("readOnly"))
					zi("Text double-clicked."),
						this.view.lr({}),
						this.view.ra instanceof Fe && this.view.ra.er(c, a, b);
				else return !1;
				return !0;
			};
			c.prototype.Bd = function() {
				return "pick";
			};
			return c;
		})();
	var Ai = (function() {
		function c(a, b, c, e, f, h, k) {
			this.view = a;
			this.node = b;
			this.handle = c;
			this.ri = h;
			this.qb = this.pb = 0;
			this.log = z.create("MoveEditNode");
			b.Ql(c);
			this.ob = b.ia("snap") || 0;
			this.wb(e, f, k);
		}
		c.prototype.Ad = function() {
			this.log("Entering MoveEditNode");
		};
		c.prototype.Ac = function() {
			this.view.Pe(!1);
			this.log("Leaving MoveEditNode");
		};
		c.prototype.wb = function(a, b, c) {
			b = this.view.ob(new F(a, b), this.ob || c);
			a = b.x;
			b = b.y;
			this.log("onMouseDown(%s,%s)", a, b);
			this.pb = a;
			this.qb = b;
			this.view.Pe(!0);
			return !0;
		};
		c.prototype.Cb = function(a, b, c) {
			b = this.view.ob(new F(a, b), this.ob || c);
			a = b.x;
			b = b.y;
			this.node.Xb(this.node.Le(this.handle, a, b));
			this.node.format(this.view.ma, this.view.request);
			this.view.la();
			return !1;
		};
		c.prototype.Wb = function(a, b, c) {
			var d = this;
			c = this.view.ob(new F(a, b), this.ob || c);
			a = c.x;
			b = c.y;
			this.log("onMouseUp(%s,%s)", a, b, this.pb, this.qb);
			a !== this.pb || b !== this.qb
				? (this.node.Xb(this.node.Le(this.handle, this.pb, this.qb)),
				  this.view.aa.transaction(function() {
						d.view.aa.Le(d.node.id, d.handle, a, b);
				  }))
				: this.view.KC(this.node.id, this.handle);
			this.view.la();
			this.view.Xa(this.ri || new Gf(this.view));
			return !0;
		};
		return c;
	})();
}.call(typeof module !== "undefined" ? module : undefined));
//# sourceMappingURL=zwibbler2.js.map
