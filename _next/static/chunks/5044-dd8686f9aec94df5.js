"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5044], {
        65044: function(e, t, n) {
            n.d(t, {
                $P: function() {
                    return y
                },
                GL: function() {
                    return k
                },
                kW: function() {
                    return g
                },
                KB: function() {
                    return x
                },
                _B: function() {
                    return T
                },
                oQ: function() {
                    return E
                }
            });
            var r = n(34051),
                s = n.n(r),
                a = n(85893),
                o = n(64146),
                i = n(2593),
                u = n(12372),
                c = ["function addTokenDetails(address sourceToken,address targetToken,address devAddress,uint256 ratio) external", "function migrateTokens(address sourceToken, address toAddress, uint256 amount) external", "function returnTokens(address sourceToken, address toAddress, uint256 amount) external", "function tokenMigrateDetails(address sourceToken) external view returns(address targetToken, uint256 ratio)", "function allSupportedTokens() external view returns (address[] memory supportedTokens)", "function allSupportedTokensLength() external view returns (uint256)", "function supportsToken(address sourceToken) public view returns(bool)", "function userTransactionsLength(address sourceToken, address userAddress) external view returns(uint256)", "function userTransaction(address sourceToken, address userAddress, uint256 position) external view returns(uint256, uint256, uint32)"],
                l = ["function decimals() external pure returns(uint8)", "function name() view returns (string)", "function symbol() view returns (string)", "function balanceOf(address) view returns (uint)", "function allowance(address owner, address spender) external view returns(uint256)", "function approve(address spender, uint256 amount) external returns(bool)"],
                d = function(e) {
                    switch (e) {
                        case u.OK:
                            return u.oG;
                        case u.$o:
                            return u.uE;
                        case u.Im:
                            return u.rY;
                        case u.pB:
                            return u.$s;
                        case u.xV:
                            return u.lO;
                        case u.fG:
                            return u.Hl;
                        default:
                            return
                    }
                },
                p = n(86933),
                h = n(68527);

            function f(e, t, n, r, s, a, o) {
                try {
                    var i = e[a](o),
                        u = i.value
                } catch (c) {
                    return void n(c)
                }
                i.done ? t(u) : Promise.resolve(u).then(r, s)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, s) {
                        var a = e.apply(t, n);

                        function o(e) {
                            f(a, r, s, o, i, "next", e)
                        }

                        function i(e) {
                            f(a, r, s, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function x(e, t, n, r) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = m(s().mark((function e(t, n, r, a) {
                    var u, p, h, f, m, x, w, g, v, k, b, T, C, y, O, E, $, A, j;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = d(t), e.prev = 1, p = new o.CH(u, c, n), e.next = 5, n.getAddress();
                            case 5:
                                return h = e.sent, f = new o.CH(r, l, n), e.t0 = i.O$, e.next = 10, f.decimals();
                            case 10:
                                return e.t1 = e.sent, m = e.t0.from.call(e.t0, e.t1), x = i.O$.from(10).pow(m), e.next = 15, p.userTransactionsLength(r, h);
                            case 15:
                                for (w = e.sent, g = [], v = 0; v < w; v++) g.push(p.userTransaction(r, h, v));
                                return e.next = 20, Promise.all(g);
                            case 20:
                                k = [{
                                    name: "Kraken",
                                    threshold: 25e7
                                }, {
                                    name: "Megalodon",
                                    threshold: 1e8
                                }, {
                                    name: "Whale",
                                    threshold: 5e7
                                }, {
                                    name: "Orca",
                                    threshold: 25e6
                                }, {
                                    name: "Shark",
                                    threshold: 1e7
                                }, {
                                    name: "Narwhal",
                                    threshold: 5e6
                                }, {
                                    name: "Dolphin",
                                    threshold: 1e6
                                }, {
                                    name: "Stingray",
                                    threshold: 5e5
                                }, {
                                    name: "Fish",
                                    threshold: 1e5
                                }, {
                                    name: "Starfish",
                                    threshold: 5e4
                                }, {
                                    name: "Seahorse",
                                    threshold: 1e4
                                }, {
                                    name: "Plankton",
                                    threshold: 1e3
                                }], b = [], T = 0;
                            case 23:
                                if (!(T < w)) {
                                    e.next = 44;
                                    break
                                }
                                return e.next = 26, g[T];
                            case 26:
                                C = e.sent, y = C[0].div(x).toNumber(), O = y / a, E = "", $ = 0;
                            case 31:
                                if (!($ < k.length)) {
                                    e.next = 40;
                                    break
                                }
                                if (!((A = k[$]).threshold <= O)) {
                                    e.next = 37;
                                    break
                                }
                                return E = A.name, k.splice($, 1), e.abrupt("break", 40);
                            case 37:
                                $++, e.next = 31;
                                break;
                            case 40:
                                b.push({
                                    amountIn: O,
                                    amountOut: y,
                                    timestamp: new Date(1e3 * C[1].toNumber()).toLocaleString(),
                                    txnId: C[2],
                                    position: T,
                                    nft: E
                                });
                            case 41:
                                T++, e.next = 23;
                                break;
                            case 44:
                                return e.abrupt("return", b);
                            case 47:
                                throw e.prev = 47, e.t2 = e.catch(1), new Error((null === (j = e.t2.data) || void 0 === j ? void 0 : j.message) || e.t2.message);
                            case 51:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 47]
                    ])
                })))).apply(this, arguments)
            }

            function g(e, t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = m(s().mark((function e(t, n) {
                    var r, a, i, u, p, h, f, m, x, w, g, v, k;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = d(t), e.prev = 1, a = new o.CH(r, c, n), e.next = 5, a.allSupportedTokens();
                            case 5:
                                for (i = e.sent, u = [], p = 0, h = i.length; p < h; p++) f = i[p], m = new o.CH(f, l, n), u.push(m.name()), u.push(m.symbol());
                                return e.next = 10, Promise.all(u);
                            case 10:
                                x = [], w = 0, g = 0, v = i.length;
                            case 12:
                                if (!(w < v)) {
                                    e.next = 26;
                                    break
                                }
                                return e.t0 = x, e.t1 = i[w], e.next = 17, u[g];
                            case 17:
                                return e.t2 = e.sent, e.next = 20, u[g + 1];
                            case 20:
                                e.t3 = e.sent, e.t4 = {
                                    address: e.t1,
                                    name: e.t2,
                                    symbol: e.t3
                                }, e.t0.push.call(e.t0, e.t4);
                            case 23:
                                w++, g += 2, e.next = 12;
                                break;
                            case 26:
                                return e.abrupt("return", x);
                            case 29:
                                throw e.prev = 29, e.t5 = e.catch(1), new Error((null === (k = e.t5.data) || void 0 === k ? void 0 : k.message) || e.t5.message);
                            case 33:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 29]
                    ])
                })))).apply(this, arguments)
            }

            function k(e, t, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = m(s().mark((function e(t, n, r) {
                    var a, i, u, p, h, f, m;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = d(t), e.prev = 1, i = new o.CH(a, c, n), e.next = 5, i.tokenMigrateDetails(r);
                            case 5:
                                return u = e.sent, p = new o.CH(u.targetToken, l, n), (h = []).push(p.name()), h.push(p.symbol()), e.next = 12, Promise.all(h);
                            case 12:
                                return e.t0 = u.ratio.toNumber(), e.t1 = u.targetToken, e.next = 16, h[0];
                            case 16:
                                return e.t2 = e.sent, e.next = 19, h[1];
                            case 19:
                                return e.t3 = e.sent, f = {
                                    ratio: e.t0,
                                    targetToken: e.t1,
                                    name: e.t2,
                                    symbol: e.t3
                                }, e.abrupt("return", f);
                            case 24:
                                throw e.prev = 24, e.t4 = e.catch(1), new Error((null === (m = e.t4.data) || void 0 === m ? void 0 : m.message) || e.t4.message);
                            case 28:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 24]
                    ])
                })))).apply(this, arguments)
            }

            function T(e, t, n, r) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = m(s().mark((function e(t, n, r, a) {
                    var u, c, p, h, f, m, x, w;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = d(t), e.prev = 1, c = new o.CH(r, l, n), e.next = 5, n.getAddress();
                            case 5:
                                return p = e.sent, e.t0 = i.O$, e.next = 9, c.decimals();
                            case 9:
                                return e.t1 = e.sent, h = e.t0.from.call(e.t0, e.t1), f = i.O$.from(10).pow(h), m = i.O$.from(a).mul(f), e.next = 15, c.allowance(p, u);
                            case 15:
                                return x = e.sent, e.abrupt("return", x.gte(m));
                            case 19:
                                throw e.prev = 19, e.t2 = e.catch(1), new Error((null === (w = e.t2.data) || void 0 === w ? void 0 : w.message) || e.t2.message);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 19]
                    ])
                })))).apply(this, arguments)
            }

            function y(e, t, n, r) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = m(s().mark((function e(t, n, r, u) {
                    var c, f, m, x, w, g, v, k, b, T, C, y;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return c = d(t), e.prev = 1, f = new o.CH(r, l, n), e.next = 5, n.getAddress();
                            case 5:
                                return m = e.sent, e.t0 = i.O$, e.next = 9, f.decimals();
                            case 9:
                                return e.t1 = e.sent, x = e.t0.from.call(e.t0, e.t1), w = i.O$.from(10).pow(x), g = i.O$.from(u).mul(w), e.next = 15, f.allowance(m, c);
                            case 15:
                                if (!e.sent.lt(g)) {
                                    e.next = 31;
                                    break
                                }
                                return e.next = 19, f.approve(c, g);
                            case 19:
                                return v = e.sent, k = v.hash, b = k.slice(0, 6).toLowerCase() + "..." + k.slice(k.length - 6, k.length).toLowerCase(), (T = (0, p.I2)())({
                                    title: "Approval requested",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://bscscan.com/tx/".concat(k),
                                            isExternal: !0,
                                            children: b
                                        })]
                                    }),
                                    status: "info",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log("waiting for approval...", v), e.next = 27, v.wait();
                            case 27:
                                return C = e.sent, T({
                                    title: "Approval success",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://testnet.bscscan.com/tx/".concat(k),
                                            isExternal: !0,
                                            children: b
                                        })]
                                    }),
                                    status: "success",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log(C), e.abrupt("return", C);
                            case 31:
                                return e.abrupt("return", null);
                            case 34:
                                throw e.prev = 34, e.t2 = e.catch(1), new Error((null === (y = e.t2.data) || void 0 === y ? void 0 : y.message) || e.t2.message);
                            case 38:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 34]
                    ])
                })))).apply(this, arguments)
            }

            function E(e, t, n, r, s) {
                return $.apply(this, arguments)
            }

            function $() {
                return ($ = m(s().mark((function e(t, n, r, u, f) {
                    var m, x, w, g, v, k, b, T, C, y, O, E, $, A, j, H, L;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return m = d(t), e.prev = 1, x = new o.CH(r, l, n), w = new o.CH(m, c, n), e.next = 6, n.getAddress();
                            case 6:
                                return g = e.sent, e.t0 = i.O$, e.next = 10, x.decimals();
                            case 10:
                                return e.t1 = e.sent, v = e.t0.from.call(e.t0, e.t1), k = i.O$.from(10).pow(v), b = (0, p.I2)(), T = i.O$.from(f).mul(k), e.next = 17, x.allowance(g, m);
                            case 17:
                                if (!e.sent.lt(T)) {
                                    e.next = 31;
                                    break
                                }
                                return e.next = 21, x.approve(m, T);
                            case 21:
                                return C = e.sent, y = C.hash, O = y.slice(0, 6).toLowerCase() + "..." + y.slice(y.length - 6, y.length).toLowerCase(), b({
                                    title: "Approval requested",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://testnet.bscscan.com/tx/".concat(y),
                                            isExternal: !0,
                                            children: O
                                        })]
                                    }),
                                    status: "info",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log("waiting for approval...", C), e.next = 28, C.wait();
                            case 28:
                                E = e.sent, b({
                                    title: "Approval success",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://testnet.bscscan.com/tx/".concat(y),
                                            isExternal: !0,
                                            children: O
                                        })]
                                    }),
                                    status: "success",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log(E);
                            case 31:
                                return e.next = 33, w.migrateTokens(r, u || g, T);
                            case 33:
                                return $ = e.sent, A = $.hash, j = A.slice(0, 6).toLowerCase() + "..." + A.slice(A.length - 6, A.length).toLowerCase(), b({
                                    title: "Migrate started",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://testnet.bscscan.com/tx/".concat(A),
                                            isExternal: !0,
                                            children: j
                                        })]
                                    }),
                                    status: "info",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log("waiting for transaction...", $), e.next = 40, $.wait();
                            case 40:
                                return H = e.sent, b({
                                    title: "Migrate success",
                                    description: (0, a.jsxs)(a.Fragment, {
                                        children: ["View txn:", " ", (0, a.jsx)(h.rU, {
                                            href: "https://testnet.bscscan.com/tx/".concat(A),
                                            isExternal: !0,
                                            children: j
                                        })]
                                    }),
                                    status: "success",
                                    duration: 9e3,
                                    position: "top-right",
                                    isClosable: !0
                                }), console.log(H), e.abrupt("return", H);
                            case 46:
                                throw e.prev = 46, e.t2 = e.catch(1), new Error((null === (L = e.t2.data) || void 0 === L ? void 0 : L.message) || e.t2.message);
                            case 50:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 46]
                    ])
                })))).apply(this, arguments)
            }
        }
    }
]);