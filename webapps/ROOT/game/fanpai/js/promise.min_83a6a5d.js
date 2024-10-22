!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : (t.ES6Promise = e());
})(this, function() {
  'use strict';
  function t(t) {
    return 'function' == typeof t || ('object' == typeof t && null !== t);
  }
  function e(t) {
    return 'function' == typeof t;
  }
  function n(t) {
    I = t;
  }
  function r(t) {
    J = t;
  }
  function o() {
    return function() {
      return process.nextTick(a);
    };
  }
  function i() {
    return 'undefined' != typeof H
      ? function() {
          H(a);
        }
      : c();
  }
  function s() {
    var t = 0,
      e = new V(a),
      n = document.createTextNode('');
    return (
      e.observe(n, {
        characterData: !0
      }),
      function() {
        n.data = t = ++t % 2;
      }
    );
  }
  function u() {
    var t = new MessageChannel();
    return (
      (t.port1.onmessage = a),
      function() {
        return t.port2.postMessage(0);
      }
    );
  }
  function c() {
    var t = setTimeout;
    return function() {
      return t(a, 1);
    };
  }
  function a() {
    for (var t = 0; G > t; t += 2) {
      var e = $[t],
        n = $[t + 1];
      e(n), ($[t] = void 0), ($[t + 1] = void 0);
    }
    G = 0;
  }
  function f() {
    try {
      var t = require,
        e = t('vertx');
      return (H = e.runOnLoop || e.runOnContext), i();
    } catch (n) {
      return c();
    }
  }
  function l(t, e) {
    var n = arguments,
      r = this,
      o = new this.constructor(p);
    void 0 === o[ee] && k(o);
    var i = r._state;
    return (
      i
        ? !(function() {
            var t = n[i - 1];
            J(function() {
              return x(i, o, t, r._result);
            });
          })()
        : E(r, o, t, e),
      o
    );
  }
  function h(t) {
    var e = this;
    if (t && 'object' == typeof t && t.constructor === e) return t;
    var n = new e(p);
    return w(n, t), n;
  }
  function p() {}
  function v() {
    return new TypeError('You cannot resolve a promise with itself');
  }
  function d() {
    return new TypeError(
      'A promises callback cannot return that same promise.'
    );
  }
  function _(t) {
    try {
      return t.then;
    } catch (e) {
      return (ie.error = e), ie;
    }
  }
  function y(t, e, n, r) {
    try {
      t.call(e, n, r);
    } catch (o) {
      return o;
    }
  }
  function m(t, e, n) {
    J(function(t) {
      var r = !1,
        o = y(
          n,
          e,
          function(n) {
            r || ((r = !0), e !== n ? w(t, n) : S(t, n));
          },
          function(e) {
            r || ((r = !0), j(t, e));
          },
          'Settle: ' + (t._label || ' unknown promise')
        );
      !r && o && ((r = !0), j(t, o));
    }, t);
  }
  function b(t, e) {
    e._state === re
      ? S(t, e._result)
      : e._state === oe
      ? j(t, e._result)
      : E(
          e,
          void 0,
          function(e) {
            return w(t, e);
          },
          function(e) {
            return j(t, e);
          }
        );
  }
  function g(t, n, r) {
    n.constructor === t.constructor && r === l && n.constructor.resolve === h
      ? b(t, n)
      : r === ie
      ? j(t, ie.error)
      : void 0 === r
      ? S(t, n)
      : e(r)
      ? m(t, n, r)
      : S(t, n);
  }
  function w(e, n) {
    e === n ? j(e, v()) : t(n) ? g(e, n, _(n)) : S(e, n);
  }
  function A(t) {
    t._onerror && t._onerror(t._result), P(t);
  }
  function S(t, e) {
    t._state === ne &&
      ((t._result = e),
      (t._state = re),
      0 !== t._subscribers.length && J(P, t));
  }
  function j(t, e) {
    t._state === ne && ((t._state = oe), (t._result = e), J(A, t));
  }
  function E(t, e, n, r) {
    var o = t._subscribers,
      i = o.length;
    (t._onerror = null),
      (o[i] = e),
      (o[i + re] = n),
      (o[i + oe] = r),
      0 === i && t._state && J(P, t);
  }
  function P(t) {
    var e = t._subscribers,
      n = t._state;
    if (0 !== e.length) {
      for (
        var r = void 0, o = void 0, i = t._result, s = 0;
        s < e.length;
        s += 3
      )
        (r = e[s]), (o = e[s + n]), r ? x(n, r, o, i) : o(i);
      t._subscribers.length = 0;
    }
  }
  function T() {
    this.error = null;
  }
  function M(t, e) {
    try {
      return t(e);
    } catch (n) {
      return (se.error = n), se;
    }
  }
  function x(t, n, r, o) {
    var i = e(r),
      s = void 0,
      u = void 0,
      c = void 0,
      a = void 0;
    if (i) {
      if (
        ((s = M(r, o)),
        s === se ? ((a = !0), (u = s.error), (s = null)) : (c = !0),
        n === s)
      )
        return void j(n, d());
    } else (s = o), (c = !0);
    n._state !== ne ||
      (i && c
        ? w(n, s)
        : a
        ? j(n, u)
        : t === re
        ? S(n, s)
        : t === oe && j(n, s));
  }
  function C(t, e) {
    try {
      e(
        function(e) {
          w(t, e);
        },
        function(e) {
          j(t, e);
        }
      );
    } catch (n) {
      j(t, n);
    }
  }
  function O() {
    return ue++;
  }
  function k(t) {
    (t[ee] = ue++),
      (t._state = void 0),
      (t._result = void 0),
      (t._subscribers = []);
  }
  function Y(t, e) {
    (this._instanceConstructor = t),
      (this.promise = new t(p)),
      this.promise[ee] || k(this.promise),
      B(e)
        ? ((this._input = e),
          (this.length = e.length),
          (this._remaining = e.length),
          (this._result = new Array(this.length)),
          0 === this.length
            ? S(this.promise, this._result)
            : ((this.length = this.length || 0),
              this._enumerate(),
              0 === this._remaining && S(this.promise, this._result)))
        : j(this.promise, q());
  }
  function q() {
    return new Error('Array Methods must be provided an Array');
  }
  function F(t) {
    return new Y(this, t).promise;
  }
  function D(t) {
    var e = this;
    return new e(
      B(t)
        ? function(n, r) {
            for (var o = t.length, i = 0; o > i; i++)
              e.resolve(t[i]).then(n, r);
          }
        : function(t, e) {
            return e(new TypeError('You must pass an array to race.'));
          }
    );
  }
  function K(t) {
    var e = this,
      n = new e(p);
    return j(n, t), n;
  }
  function L() {
    throw new TypeError(
      'You must pass a resolver function as the first argument to the promise constructor'
    );
  }
  function N() {
    throw new TypeError(
      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
    );
  }
  function U(t) {
    (this[ee] = O()),
      (this._result = this._state = void 0),
      (this._subscribers = []),
      p !== t &&
        ('function' != typeof t && L(), this instanceof U ? C(this, t) : N());
  }
  function W() {
    var t = void 0;
    if ('undefined' != typeof global) t = global;
    else if ('undefined' != typeof self) t = self;
    else
      try {
        t = Function('return this')();
      } catch (e) {
        throw new Error(
          'polyfill failed because global object is unavailable in this environment'
        );
      }
    var n = t.Promise;
    if (
      ('undefined' != typeof egret_native &&
        egret_native.capability &&
        !egret_native.capability('Promise') &&
        (n = void 0),
      n)
    ) {
      var r = null;
      try {
        r = Object.prototype.toString.call(n.resolve());
      } catch (e) {}
      if ('[object Promise]' === r && !n.cast) return;
    }
    t.Promise = U;
  }
  var z = void 0;
  z = Array.isArray
    ? Array.isArray
    : function(t) {
        return '[object Array]' === Object.prototype.toString.call(t);
      };
  var B = z,
    G = 0,
    H = void 0,
    I = void 0,
    J = function(t, e) {
      ($[G] = t), ($[G + 1] = e), (G += 2), 2 === G && (I ? I(a) : te());
    },
    Q = 'undefined' != typeof window ? window : void 0,
    R = Q || {},
    V = R.MutationObserver || R.WebKitMutationObserver,
    X =
      'undefined' == typeof self &&
      'undefined' != typeof process &&
      '[object process]' === {}.toString.call(process),
    Z =
      'undefined' != typeof Uint8ClampedArray &&
      'undefined' != typeof importScripts &&
      'undefined' != typeof MessageChannel,
    $ = new Array(1e3),
    te = void 0;
  te = X
    ? o()
    : V
    ? s()
    : Z
    ? u()
    : void 0 === Q && 'function' == typeof require
    ? f()
    : c();
  var ee = Math.random()
      .toString(36)
      .substring(16),
    ne = void 0,
    re = 1,
    oe = 2,
    ie = new T(),
    se = new T(),
    ue = 0;
  return (
    (Y.prototype._enumerate = function() {
      for (
        var t = this.length, e = this._input, n = 0;
        this._state === ne && t > n;
        n++
      )
        this._eachEntry(e[n], n);
    }),
    (Y.prototype._eachEntry = function(t, e) {
      var n = this._instanceConstructor,
        r = n.resolve;
      if (r === h) {
        var o = _(t);
        if (o === l && t._state !== ne) this._settledAt(t._state, e, t._result);
        else if ('function' != typeof o)
          this._remaining--, (this._result[e] = t);
        else if (n === U) {
          var i = new n(p);
          g(i, t, o), this._willSettleAt(i, e);
        } else
          this._willSettleAt(
            new n(function(e) {
              return e(t);
            }),
            e
          );
      } else this._willSettleAt(r(t), e);
    }),
    (Y.prototype._settledAt = function(t, e, n) {
      var r = this.promise;
      r._state === ne &&
        (this._remaining--, t === oe ? j(r, n) : (this._result[e] = n)),
        0 === this._remaining && S(r, this._result);
    }),
    (Y.prototype._willSettleAt = function(t, e) {
      var n = this;
      E(
        t,
        void 0,
        function(t) {
          return n._settledAt(re, e, t);
        },
        function(t) {
          return n._settledAt(oe, e, t);
        }
      );
    }),
    (U.all = F),
    (U.race = D),
    (U.resolve = h),
    (U.reject = K),
    (U._setScheduler = n),
    (U._setAsap = r),
    (U._asap = J),
    (U.prototype = {
      constructor: U,
      then: l,
      catch: function(t) {
        return this.then(null, t);
      }
    }),
    (U.polyfill = W),
    (U.Promise = U),
    U
  );
}),
  ES6Promise.polyfill();
