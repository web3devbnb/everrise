(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9071], {
        58952: function(e, t, n) {
            "use strict";
            var a = n(85893),
                s = n(92684),
                r = n(68527),
                o = n(41664),
                i = n.n(o);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, s, r = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            i = !0, s = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.Z = function(e) {
                c((0, s.ac)("(min-width: 480px)"), 1)[0];
                return (0, a.jsx)("div", {
                    className: "EverStakeNav ComponentBG",
                    children: (0, a.jsx)("div", {
                        className: "EverStakeNavWrapInner",
                        children: (0, a.jsx)("nav", {
                            children: (0, a.jsxs)(r.aV, {
                                display: "flex",
                                width: "100%",
                                children: [(0, a.jsx)(r.HC, {
                                    children: (0, a.jsx)(i(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, a.jsx)(r.rU, {
                                            children: (0, a.jsx)(r.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Stake"
                                            })
                                        })
                                    })
                                }), (0, a.jsx)(r.HC, {
                                    children: (0, a.jsx)(i(), {
                                        href: "/everstake/manage",
                                        passHref: !0,
                                        children: (0, a.jsxs)(r.rU, {
                                            children: ["", (0, a.jsx)(r.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Manage"
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)(r.HC, {
                                    children: (0, a.jsx)(i(), {
                                        href: "/everstake/mementos",
                                        passHref: !0,
                                        children: (0, a.jsxs)(r.rU, {
                                            children: ["", (0, a.jsx)(r.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "NFTs"
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)(r.HC, {
                                    children: (0, a.jsx)(i(), {
                                        href: "/everstake/claim",
                                        passHref: !0,
                                        children: (0, a.jsxs)(r.rU, {
                                            children: ["", (0, a.jsx)(r.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Claim"
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)(r.LZ, {})]
                            })
                        })
                    })
                })
            }
        },
        29672: function(e, t, n) {
            "use strict";
            n.d(t, {
                QZ: function() {
                    return r
                },
                gE: function() {
                    return s
                }
            });
            var a = n(85893),
                s = (n(67294), n(25675), function() {
                    return (0, a.jsx)("svg", {
                        className: "Binance_Icon",
                        viewBox: "0 0 200 200",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        children: (0, a.jsx)("path", {
                            className: "BSCPath",
                            d: "M99.97,0h.17C120.46,20.59,141,40.99,161.49,61.42c-7.44,7.67-15.17,15.03-22.55,22.74-12.91-13.08-26.07-25.92-38.91-39.07C87.18,58.22,74.07,71.1,61.11,84.12c-7.38-7.69-15.08-15.07-22.53-22.69Q69.315,30.755,99.97,0Zm.05,123.12c7.56-7.84,15.32-15.49,23.07-23.13-7.81-7.54-15.47-15.25-23.05-23.03C92.42,84.71,84.76,92.44,76.95,100,84.71,107.63,92.47,115.28,100.02,123.12ZM0,100.11c7.67,7.39,15.06,15.06,22.66,22.51,7.54-7.56,15-15.2,22.7-22.6-7.7-7.4-15.17-15.03-22.69-22.61C15.05,84.86,7.69,92.55,0,99.92Zm177.4,22.53c7.58-7.43,14.95-15.09,22.6-22.44v-.34c-7.67-7.33-15.02-15-22.6-22.42-7.56,7.55-15.02,15.2-22.72,22.61C162.4,107.44,169.83,115.11,177.4,122.64ZM99.88,200h.28c20.34-20.58,40.87-40.96,61.34-61.41-7.47-7.62-15.17-15.01-22.56-22.71-12.89,13.11-26.08,25.92-38.91,39.08-12.86-13.12-25.97-26.01-38.93-39.04-7.38,7.69-15.09,15.05-22.55,22.66C59,159.04,79.55,179.42,99.88,200Z"
                        })
                    })
                }),
                r = function() {
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: "Binance_Icon_AsBG"
                        })
                    })
                }
        },
        71499: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ug: function() {
                    return s
                },
                pA: function() {
                    return r
                }
            });
            var a = n(85893),
                s = (n(67294), n(25675), function() {
                    return (0, a.jsxs)("svg", {
                        className: "Ethereum_Icon",
                        viewBox: "0 0 200 324.99",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        children: [(0, a.jsx)("path", {
                            className: "LightTonePath",
                            d: "M37.97,103.38C58.36,69.44,79,35.65,99.25,1.62a12.03546,12.03546,0,0,1,.59,3.81c-.12,38.3.08,76.6-.1,114.89-1.96,1.51-4.39,2.22-6.59,3.28Q51.21,142.605,9.31,161.65C6.4,162.93,3.59,164.49.5,165.3,13.13,144.75,25.45,124,37.97,103.38ZM99.69,325.11c.3-27.07-.02-54.15.16-81.22C66.81,223.97,33.35,204.7.24,184.88,33.21,231.69,66.69,278.27,99.69,325.11Z",
                            transform: "translate(0 -0.51)"
                        }), (0, a.jsx)("path", {
                            className: "MidTonePath",
                            d: "M99.25,1.62c.18-.28.54-.83.72-1.11C133,55.6,166.4,110.49,199.46,165.57c-29.98-13.48-59.88-27.15-89.82-40.72-3.25-1.36-6.33-3.41-9.87-3.86.19,34.67-.23,69.35.21,104.02C66.75,205.08,33.13,185.78,0,165.71v-.12l.5-.29c3.09-.81,5.9-2.37,8.81-3.65q41.91-19.035,83.84-38.05c2.2-1.06,4.63-1.77,6.59-3.28.18-38.29-.02-76.59.1-114.89A12.03546,12.03546,0,0,0,99.25,1.62Zm.44,323.49.26.39h.89l-.77-.24q49.815-70.23,99.78-140.38-49.95,29.595-100,59.01C99.67,270.96,99.99,298.04,99.69,325.11Z",
                            transform: "translate(0 -0.51)"
                        }), (0, a.jsx)("path", {
                            className: "DarkTonePath",
                            d: "M99.77,120.99c3.54.45,6.62,2.5,9.87,3.86,29.94,13.57,59.84,27.24,89.82,40.72l.54-.73v.81c-33.11,20.14-66.79,39.41-100.02,59.36C99.54,190.34,99.96,155.66,99.77,120.99Z",
                            transform: "translate(0 -0.51)"
                        })]
                    })
                }),
                r = function() {
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: "Ethereum_Icon_AsBG"
                        })
                    })
                }
        },
        26017: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return f
                }
            });
            var a = n(85893),
                s = n(67294),
                r = n(44431),
                o = n.n(r),
                i = n(87536),
                l = n(36114),
                c = n(80918),
                d = n(68527),
                x = n(15193);

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, a, s = function(e, t) {
                    if (null == e) return {};
                    var n, a, s = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                }
                return s
            }
            var f = function(e) {
                var t, n = function(e) {
                        var t = e.toFixed(H + 1);
                        return H > 0 ? t.substr(0, t.length - 1) : t.substr(0, t.length - 2)
                    },
                    r = (e.label, e.id),
                    u = e.placeholder,
                    f = e.control,
                    h = e.rules,
                    j = e.setValue,
                    g = e.tokenBalance,
                    v = e.error,
                    C = e.name,
                    y = e.disabled,
                    b = e.decimals,
                    S = e.maxAllowance,
                    N = e.stablePrice,
                    k = (e.rightOffset, e.tickerclass),
                    w = e.tempStablePlaceholder,
                    A = e.dexName,
                    F = e.chainName,
                    P = e.availableLimit,
                    M = e.ticker,
                    O = e.icon,
                    D = e.value,
                    T = p(e, ["label", "id", "placeholder", "control", "rules", "setValue", "tokenBalance", "error", "name", "disabled", "decimals", "maxAllowance", "stablePrice", "rightOffset", "tickerclass", "tempStablePlaceholder", "dexName", "chainName", "availableLimit", "ticker", "icon", "value"]),
                    Z = (0, s.useState)("0%"),
                    B = Z[0],
                    E = Z[1],
                    G = (0, s.useState)(0),
                    I = G[0],
                    U = G[1],
                    L = (0, s.useState)(D),
                    R = L[0],
                    W = L[1],
                    H = b || 0,
                    q = !S || S.isNaN() || S.gte(g) ? g || new(o())(0) : S,
                    V = (0, i.bc)({
                        name: C || r,
                        control: f,
                        rules: h,
                        defaultValue: 0
                    }),
                    _ = V.field.ref,
                    z = p(V.field, ["ref"]),
                    Q = function(e) {
                        U(e), E(e.toFixed(0) + "%");
                        var t = n(parseInt(e) / 100 * (q ? q.toNumber() : 0));
                        j(C, t, {
                            shouldValidate: !0,
                            shouldDirty: !0
                        }), W(t)
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [!y && (0, a.jsx)("div", {
                        className: "WalletBalanceInForm",
                        children: (0, a.jsxs)("div", {
                            className: "SelectionHeaderItems",
                            children: [(0, a.jsx)("div", {
                                className: "DappFormTokenBalance",
                                children: F
                            }), (0, a.jsx)("div", {
                                className: "DappFormTokenBalance",
                                children: A
                            }), (0, a.jsxs)("div", {
                                className: "DappFormTokenBalance",
                                children: [(0, a.jsx)("span", {
                                    children: "MAX:\xa0"
                                }), (0, a.jsx)(a.Fragment, {
                                    children: null !== (t = null === g || void 0 === g ? void 0 : g.toFormat(H, o().ROUND_FLOOR)) && void 0 !== t ? t : 0
                                }), (0, a.jsx)(a.Fragment, {
                                    children: P
                                }), (0, a.jsxs)("span", {
                                    children: ["\xa0", M]
                                })]
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: k + " DappFormAmountInputWrapper",
                        children: [(0, a.jsxs)("div", {
                            className: "DappFormAmountInputBG",
                            children: [(0, a.jsx)("div", {
                                className: "DappFormAmountInput",
                                children: (0, a.jsxs)("div", {
                                    className: "DappFormAmountInputInner",
                                    children: [(0, a.jsxs)("div", {
                                        className: "PercentageAmountNumbers",
                                        children: [O && (0, a.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 5
                                            }
                                        }), O && (0, a.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 50
                                            },
                                            children: (0, a.jsx)("img", {
                                                src: O
                                            })
                                        }), O && (0, a.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 5
                                            }
                                        }), (0, a.jsxs)(l.Y2, m({
                                            isDisabled: !g || y,
                                            value: 0,
                                            min: 0,
                                            max: Number("".concat(n(q.toNumber()))),
                                            id: r
                                        }, z, T, {
                                            children: [N && !y && (0, a.jsxs)("p", {
                                                className: "USDTPriceEqv",
                                                children: [(0, a.jsx)("span", {
                                                    children: function() {
                                                        if (!N || !R) return "";
                                                        var e = Number(R);
                                                        return "$ " + new(o())(N).times(e).toFormat(2)
                                                    }()
                                                }), "\xa0", (0, a.jsx)("span", {
                                                    children: (0, a.jsxs)("span", {
                                                        className: "usdteqv",
                                                        children: ["USDT ", (0, a.jsx)("span", {
                                                            className: "eqv",
                                                            children: "EQV"
                                                        })]
                                                    })
                                                })]
                                            }), !y && !N && w, (0, a.jsx)(l.zu, {
                                                ref: _,
                                                onChange: function(e) {
                                                    var t = e.target.value,
                                                        n = 100 * new(o())(t).dividedBy(q ? new(o())(q) : new(o())(1)).toNumber();
                                                    U(n), E(Math.min(n, 100).toFixed(0) + "%"), j(C, t, {
                                                        shouldValidate: !0,
                                                        shouldDirty: !0
                                                    }), W(t)
                                                },
                                                placeholder: u || function(e) {
                                                    var t = (parseInt((e / 2).toFixed(0)) || 1).toFixed(0);
                                                    return t.substr(0, 1) + "0".repeat(t.length - 1)
                                                }(q.toNumber())
                                            })]
                                        }))]
                                    }), T.children]
                                })
                            }), !y && (0, a.jsx)("div", {
                                className: "InputAmountSlider",
                                children: (0, a.jsxs)(c.iR, {
                                    focusThumbOnChange: !1,
                                    value: I,
                                    isDisabled: !g || y,
                                    onChange: Q,
                                    children: [(0, a.jsx)(c.Uj, {
                                        children: (0, a.jsx)(c.Ms, {})
                                    }), (0, a.jsx)(c.gs, {
                                        children: B
                                    })]
                                })
                            })]
                        }), !y && (0, a.jsx)(d.xu, {
                            width: "100%",
                            className: "EverStakeAmountButtons",
                            children: (0, a.jsxs)(x.hE, {
                                children: [(0, a.jsx)(d.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, a.jsx)(x.zx, {
                                        disabled: y,
                                        onClick: function() {
                                            return Q(25)
                                        },
                                        children: " 25% "
                                    })
                                }), (0, a.jsx)(d.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, a.jsx)(x.zx, {
                                        disabled: y,
                                        onClick: function() {
                                            return Q(50)
                                        },
                                        children: " 50% "
                                    })
                                }), (0, a.jsx)(d.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, a.jsx)(x.zx, {
                                        disabled: y,
                                        onClick: function() {
                                            return Q(75)
                                        },
                                        children: " 75% "
                                    })
                                }), (0, a.jsx)(d.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, a.jsx)(x.zx, {
                                        disabled: y,
                                        onClick: function() {
                                            return Q(100)
                                        },
                                        children: " Max "
                                    })
                                })]
                            })
                        })]
                    }), v && (0, a.jsx)("p", {
                        children: v
                    })]
                })
            }
        },
        89071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            });
            var a = n(34051),
                s = n.n(a),
                r = n(85893),
                o = n(67294),
                i = n(73934),
                l = n(50680),
                c = n(16894),
                d = n(9446),
                x = n(24347),
                u = n(29672),
                m = n(71499),
                p = (n(25675), function() {
                    return (0, r.jsx)("svg", {
                        className: "Polygon_Icon",
                        viewBox: "0 0 200 175.57312",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            className: "PolygonIconPath",
                            d: "M48.27,2.21a13.19473,13.19473,0,0,1,13.72-.17q17.895,10.605,35.86,21.1c3.46,2.1,7.46,3.83,9.66,7.41,1.68,2.49,1.97,5.57,1.96,8.5-.01,5.27-.06,10.55-.01,15.83-6.6,3.93-13.34,7.62-19.89,11.63.03-5.88.17-11.75.02-17.63a12.62722,12.62722,0,0,0-6.57-10.86c-7.08-4.24-14.1-8.56-21.18-12.79a13.25173,13.25173,0,0,0-13.8-.24Q37.285,31.185,26.57,37.47A13.1463,13.1463,0,0,0,19.81,49c-.06,8.35-.03,16.7-.01,25.05a13.0876,13.0876,0,0,0,6.41,11.67c7.05,4.32,14.15,8.56,21.23,12.84a13.15123,13.15123,0,0,0,13.6.58c12.86-7.5,25.38-15.58,38.5-22.6,12.91-6.96,25.37-14.7,38.05-22.06,4.02-2.48,9.36-3.07,13.51-.55q20.94,12.015,41.77,24.23c4.38,2.38,6.69,7.17,7.13,12v51.2l-.01-1.58c-1.19,3.72-2.83,7.67-6.41,9.71-13.87,8.23-27.92,16.17-41.81,24.37-3.35,2.29-7.86,2.3-11.61,1.2-14.24-8.11-28.35-16.47-42.57-24.63-4.21-2.16-7.44-6.48-7.39-11.33,0-5.71-.15-11.43.02-17.14,6.13-4.55,13.26-7.76,19.76-11.84,0,5.66-.19,11.33,0,16.99a12.51865,12.51865,0,0,0,6.22,10.62c6.92,4.09,13.9,8.08,20.83,12.16,4.08,2.52,9.45,3.49,13.77.97,7.2-4.1,14.27-8.43,21.39-12.65a13.05335,13.05335,0,0,0,6.99-11.18c.09-8.67.04-17.35.03-26.02a12.71419,12.71419,0,0,0-6.22-11.14c-7.32-4.36-14.71-8.6-22.08-12.85a13.1793,13.1793,0,0,0-13.6.21C112.25,91.87,87.09,106.36,62.03,121c-4.05,2.48-9.38,3.06-13.55.55-13.77-7.89-27.46-15.92-41.19-23.86A13.93165,13.93165,0,0,1,0,87.29V35.61c.81-3.51,2.68-6.92,5.99-8.63Q27.125,14.59,48.27,2.21Z",
                            transform: "translate(0 -0.19949)"
                        })
                    })
                }),
                f = function() {
                    return (0, r.jsx)("svg", {
                        className: "Fantom_Icon",
                        viewBox: "0 0 266.69426 318.21964",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            className: "FantomIconPath",
                            d: "M231.85425,13.65818c2.47-.62,5.32-.67,7.56.73,7.62,4.3,15.43,8.98,20.65,16.21,5.27,7.8,6.44,17.43,6.63,26.62a9.8557,9.8557,0,0,1-7.41,9.49c-5.24,1.19-10.92-3.14-11.03-8.55-.29-5.85.17-12.34-3.43-17.36-4.3-5.57-11.3-7.89-16.57-12.29C223.48424,24.05818,225.91425,15.70818,231.85425,13.65818Zm-226.18,234.89c5.27-2.36,12.44,1.56,12.48,7.53.7,6.55-.3,14.42,5.03,19.36,4.56,5.05,11.73,6.78,16.14,11.94,4.1,5.4-.43,13.63-6.83,14.21-3.69.43-6.69-2.12-9.66-3.87-6.25-3.77-12.58-7.94-16.66-14.15-5.11-8.1-6.51-17.96-6.11-27.38C.12425,252.76819,2.71425,249.93817,5.67425,248.54819Zm120.18-247.76c7.82-1.41,16.33-1.16,23.48,2.67,25.41,13.56,50.97,26.85,76.36,40.45a17.53931,17.53931,0,0,1,9.77,15.29q.045,98.025.02,196.04c-.06,3.5.38,7.25-1.36,10.44-.92,2.13-3.06,3.22-4.93,4.37q-40.47,22.515-80.9,45.09a34.40163,34.40163,0,0,1-28.68-.1c-27.24-14.73-54.43-29.54-81.7-44.22a8.645,8.645,0,0,1-4.78-5.65c-.75-5.28-.52-10.62-.55-15.93q-.015-94.53-.01-189.06c-.15-6.38,3.06-13,8.97-15.84,22.82-12.2,45.75-24.2,68.61-36.33C115.33425,5.48818,120.15426,2.05818,125.85425.78818Zm1.18,19.04q-33.99,17.94-67.98,35.89c-1.09.62-2.12,1.33-3.16,2.04,24.16,12.33,47.99,25.3,72.02,37.87a16.17387,16.17387,0,0,0,14.11-.94c23.29-12.55,46.91-24.51,70.08-37.27q-35.205-18.735-70.53-37.28A14.7542,14.7542,0,0,0,127.03425,19.82818Zm-76.11,55.8c-.04,21.03.04,42.07-.04,63.1,19.77-10.76,39.85-20.98,59.64-31.7C90.56425,96.73818,70.78425,86.10818,50.92425,75.62818Zm106.64,31.38c19.84,10.72,39.9,21.06,59.78,31.7-.1-21-.25-42.01.08-63.01C197.31425,85.80818,177.65426,96.84818,157.56425,107.00818Zm-14.3,13.15q.015,36.57,0,73.16c18.72-10.05,37.57-19.86,56.32-29.85,4.2-2.24,8.62-4.15,12.49-6.95q-34.485-18.015-68.81-36.36Zm-54.54,19.19c-11.03,5.57-21.73,11.81-32.88,17.11,5.38,3.59,11.32,6.23,17,9.32,17.28,9.26,34.76,18.16,51.94,27.61-.05-24.43-.23-48.86.08-73.28C112.92425,126.72818,100.71425,132.83818,88.72425,139.34817Zm58.36,72.54c-9.67,3.78-21.32,3.39-30.24-2.18-22.04-11.45-43.85-23.32-65.93-34.68.06,27.36-.1,54.71.07,82.07,25.5,13.68,50.88,27.58,76.37,41.28,4.8,2.63,10.68,1.84,15.21-.99,24.92-14.05,50.07-27.69,74.86-41.96-.35-26.87-.14-53.76-.11-80.64Q182.25925,193.44818,147.08425,211.88818Z",
                            transform: "translate(0.00001 0)"
                        })
                    })
                },
                h = function() {
                    return (0, r.jsx)("svg", {
                        className: "Avalanche_Icon",
                        viewBox: "0 0 465.25011 400.37813",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            className: "AvalancheIconPath",
                            d: "M220,.4c7.4-1.4,15.9.5,21.1,6.3,4.5,5.1,7.9,11,11.3,16.8q19.65,34.2,39.2,68.6c5.1,9.2,10.5,18.3,13.4,28.5,4.3,16.4,2.9,34.5-4.9,49.6-7.1,14.3-15.5,28-23.3,41.9Q243.95,269.7,211,327.3c-8,13.7-15.4,27.7-24.1,41-9.5,14.7-24.9,25.1-41.8,29.5-8.6,2.1-17.6,2.1-26.4,2.3-28.7.1-57.3.1-86,0-6.7-.3-13.8-.1-20-3C4.2,392.7-1.2,382.7.2,373.2c1.6-7.6,5.8-14.4,9.5-21.1Q100.15,193.55,190.6,34.9c5-8.5,9.6-17.4,15.5-25.4A22.33922,22.33922,0,0,1,220,.4ZM366.3,234.7a23.77962,23.77962,0,0,1,18.9,3c5.2,3.9,8.6,9.7,12,15.1,19.5,32.9,38.6,66,57.9,99,3.4,6,7,12.1,9.2,18.7,4.1,12.8-5.9,27.9-19.4,28.9-14.7,1.5-29.5.7-44.2.9h-75c-9.4-.2-18.8.4-28.1-1.3-13.5-2.3-22.1-18.8-16.2-31.2,6.4-14.3,15.2-27.4,22.8-41,14.4-24.6,28.6-49.4,43.2-74C352.1,245.4,357,236.7,366.3,234.7Z",
                            transform: "translate(0.02039 0.03989)"
                        })
                    })
                },
                j = n(9669),
                g = n.n(j);

            function v(e, t, n, a, s, r, o) {
                try {
                    var i = e[r](o),
                        l = i.value
                } catch (c) {
                    return void n(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(a, s)
            }
            var C = function(e) {
                    var t = (0, o.useState)(),
                        n = t[0],
                        a = t[1],
                        i = (0, o.useState)(),
                        l = i[0],
                        c = i[1],
                        j = (0, o.useState)(),
                        C = j[0],
                        y = j[1],
                        b = (0, o.useState)(),
                        S = b[0],
                        N = b[1],
                        k = (0, o.useState)(),
                        w = k[0],
                        A = k[1],
                        F = (0, o.useState)(),
                        P = F[0],
                        M = F[1];
                    (0, o.useEffect)((function() {
                        var e = function() {
                            var e, t = (e = s().mark((function e() {
                                var t, n, r, o, i, l, d, x;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, g().get("https://everrise.azurewebsites.net/stats");
                                        case 2:
                                            t = e.sent, n = t.data, r = n.unified, o = n.bsc, i = n.eth, l = n.poly, d = n.avax, x = n.ftm, a(r.current), c(o.current), y(i.current), N(l.current), A(d.current), M(x.current);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(a, s) {
                                    var r = e.apply(t, n);

                                    function o(e) {
                                        v(r, a, s, o, i, "next", e)
                                    }

                                    function i(e) {
                                        v(r, a, s, o, i, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []);
                    var O = function(e) {
                        return (100 * parseFloat(e)).toFixed(4).substring(0, 4)
                    };
                    return (0, r.jsxs)("div", {
                        className: "EverStakeFeaturedStats FeaturedStatsWrap",
                        children: [n && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart",
                            children: [(0, r.jsx)("h2", {
                                children: "RISE"
                            }), (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "UnifiedDonut DonutChart UnifiedChart",
                                    "data-percentagevalue": O(parseFloat(n.stakedOfTotalSupplyPercent)) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(n.stakedOfTotalSupplyPercent),
                                            color: "#E38627"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(n.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200,
                                        children: (0, r.jsx)("defs", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, r.jsxs)("linearGradient", {
                                                id: "orange-gradient",
                                                x1: "50%",
                                                y1: "-2.48949813e-15%",
                                                x2: "50%",
                                                y2: "100%",
                                                children: [(0, r.jsx)("stop", {
                                                    stopColor: "#e98821",
                                                    offset: "0%"
                                                }), (0, r.jsx)("stop", {
                                                    stopColor: "#c02439",
                                                    offset: "100%"
                                                })]
                                            })
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Total Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(n.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Total Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(n.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(n.aveMultiplier).toFixed(2)]
                                })
                            })]
                        }), l && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart BscChart",
                            children: [(0, r.jsx)("h2", {
                                children: "BNB"
                            }), (0, r.jsx)(u.gE, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "BinanceDonut DonutChart",
                                    "data-percentagevalue": O(l.stakedOfTotalSupplyPercent) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(l.stakedOfTotalSupplyPercent),
                                            color: "#d2a533"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(l.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(l.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(l.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(l.aveMultiplier).toFixed(2)]
                                })
                            })]
                        }), C && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart EthChart",
                            children: [(0, r.jsx)("h2", {
                                children: "ETH"
                            }), (0, r.jsx)(m.Ug, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "EthDonut DonutChart",
                                    "data-percentagevalue": O(C.stakedOfTotalSupplyPercent) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(C.stakedOfTotalSupplyPercent),
                                            color: "#1946af"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(C.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(C.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(C.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(C.aveMultiplier).toFixed(2)]
                                })
                            })]
                        }), S && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart PolyChart",
                            children: [(0, r.jsx)("h2", {
                                children: "POLY"
                            }), (0, r.jsx)(p, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "PolygonDonut DonutChart",
                                    "data-percentagevalue": O(S.stakedOfTotalSupplyPercent) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(S.stakedOfTotalSupplyPercent),
                                            color: "#6a3dc4"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(S.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(S.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(S.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(S.aveMultiplier).toFixed(2)]
                                })
                            })]
                        }), w && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart AvaxChart",
                            children: [(0, r.jsx)("h2", {
                                children: "AVAX"
                            }), (0, r.jsx)(h, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "AvaxDonut DonutChart",
                                    "data-percentagevalue": O(w.stakedOfTotalSupplyPercent) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(w.stakedOfTotalSupplyPercent),
                                            color: "#e84142"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(w.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(w.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(w.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(w.aveMultiplier).toFixed(2)]
                                })
                            })]
                        }), P && (0, r.jsxs)("div", {
                            className: "ComponentBG ComponentDonutChart FTMChart",
                            children: [(0, r.jsx)("h2", {
                                children: "FTM"
                            }), (0, r.jsx)(f, {}), (0, r.jsxs)("div", {
                                className: "DonutChartWrap",
                                children: [(0, r.jsx)("div", {
                                    className: "FTMDonut DonutChart",
                                    "data-percentagevalue": O(P.stakedOfTotalSupplyPercent) + "%",
                                    children: (0, r.jsx)(d.PieChart, {
                                        data: [{
                                            title: "Staked",
                                            value: Number.parseFloat(P.stakedOfTotalSupplyPercent),
                                            color: "#467de5"
                                        }, {
                                            title: "Not Staked",
                                            value: 1 - Number.parseFloat(P.stakedOfTotalSupplyPercent),
                                            color: "transparent"
                                        }],
                                        radius: d.PieChart.defaultProps.radius - 6,
                                        lineWidth: 20,
                                        startAngle: 90,
                                        segmentsStyle: {
                                            transition: "stroke"
                                        },
                                        animate: !0,
                                        animationEasing: "ease",
                                        animationDuration: 2200
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "ComponentDonutChartLabels",
                                    children: [(0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Staked"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(P.staked)).toLocaleString("en-US")
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "ComponentDonutChartLabel",
                                        children: [(0, r.jsx)("span", {
                                            children: "Rewards"
                                        }), (0, r.jsx)("span", {
                                            children: Math.round(parseFloat(P.rewards)).toLocaleString("en-US")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "MultiplierCorner",
                                children: (0, r.jsxs)("span", {
                                    children: ["x", Number.parseFloat(P.aveMultiplier).toFixed(2)]
                                })
                            })]
                        })]
                    })
                },
                y = n(58952),
                b = n(86933),
                S = n(92684),
                N = n(68527),
                k = n(79762),
                w = n(15193),
                A = n(87536),
                F = n(312),
                P = n(9473),
                M = n(26017),
                O = n(44431),
                D = n(41664),
                T = n.n(D),
                Z = n(36485),
                B = function(e) {
                    return (0, r.jsxs)("svg", {
                        id: "NFTSVG",
                        className: e.element,
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 447 394.62",
                        children: [(0, r.jsxs)("defs", {
                            children: ["Iron" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#666d71"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#3a3e40"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#3b3f42"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#8e9599"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#3b3f42"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#8e9599"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#8e9599"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#8e9599"
                                    })]
                                })]
                            }) : "", "Bronze" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ad5331"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#552517"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5e2a1a"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#e37144"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5e2a1a"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#e37144"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#f38453"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#f38453"
                                    })]
                                })]
                            }) : "", "Silver" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#c1c1c1"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#5b5b5b"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#707070"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#d9d9d9"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#707070"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#d9d9d9"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#efefef"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#efefef"
                                    })]
                                })]
                            }) : "", "Gold" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#e3bc7a"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#95742e"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#a98641"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fed594"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#a98641"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fed594"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ffe3b7"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ffe3b7"
                                    })]
                                })]
                            }) : "", "Obsidian" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0c0c0c"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#303030"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#464646"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#161616"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#1e1e1e"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#3f3f3f"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5e5e5e"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#5e5e5e"
                                    })]
                                })]
                            }) : "", "Pearl" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ccc6b7"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#eee8db"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#e5dfd3"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fffdf5"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#e5dfd3"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fffdf5"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#fffef8"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fffef8"
                                    })]
                                })]
                            }) : "", "Amber" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5a2200"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#b55e09"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#cf6100"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fb9d00"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#cf6100"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fb9d00"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#fb9d00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#fb9d00"
                                    })]
                                })]
                            }) : "", "Amethyst" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#1a0035"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#400087"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5300b1"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#8236ff"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#5300b1"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#8236ff"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#843dff"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#843dff"
                                    })]
                                })]
                            }) : "", "Emerald" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#001b18"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#00503d"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#006c51"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#3ac07d"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#006c51"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#3ac07d"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#3ac07d"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#3ac07d"
                                    })]
                                })]
                            }) : "", "Ruby" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#3b000f"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#6e0016"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#bc0d25"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ff5843"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#bc0d25"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ff5843"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#e7523f"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#e7523f"
                                    })]
                                })]
                            }) : "", "Sapphire" !== e.element && e.element ? "" : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#001154"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#002899"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0037b4"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#0090ff"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "10%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0037b4"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#0090ff"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0090ff"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#0090ff"
                                    })]
                                })]
                            }), "Diamond" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#a3faf9"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#d1fffb"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#00e0f7"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#a8fbf7"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#00e0f7"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#a8fbf7"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#00e0f7"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#00e0f7"
                                    })]
                                })]
                            }) : "", "Dark" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ff9d32"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ca1630"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#003077"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#00183e"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0a1b50"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#080d29"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#0d2346"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#0d2346"
                                    })]
                                })]
                            }) : "", "Rising" === e.element ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("linearGradient", {
                                    id: "grad",
                                    x1: "150.61",
                                    y1: "148.95",
                                    x2: "457.27",
                                    y2: "455.61",
                                    gradientTransform: "matrix(1, 0, 0, -1, -25.57, 1873.39)",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#080d29"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#0a1b51"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    gradientTransform: "rotate(-25 .5 .5)",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#cb1c3b"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ff9d32"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad3",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ca1b3b"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ff9d32"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "grad4",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0.2",
                                        stopColor: "#ca1b3b"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#ff9d32"
                                    })]
                                })]
                            }) : ""]
                        }), (0, r.jsxs)("g", {
                            id: "paths",
                            children: [(0, r.jsx)("path", {
                                id: "bg",
                                "data-name": "bg",
                                d: "M156.37,1754.42,58.62,1585.11a28,28,0,0,1,0-28l97.75-169.31a28,28,0,0,1,24.25-14h195.5a28,28,0,0,1,24.25,14l97.75,169.31a28,28,0,0,1,0,28l-97.75,169.31a28,28,0,0,1-24.25,14H180.62A28,28,0,0,1,156.37,1754.42Z",
                                transform: "translate(-54.87 -1373.8)"
                            }), (0, r.jsx)("path", {
                                id: "circuit",
                                d: "M393.34,1407.24a5.5,5.5,0,1,1-5.5-5.49A5.5,5.5,0,0,1,393.34,1407.24Zm-199.45-16.49a5.5,5.5,0,1,0,5.5,5.5,5.5,5.5,0,0,0-5.5-5.5Zm-110,162a5.5,5.5,0,1,0,5.5,5.5,5.5,5.5,0,0,0-5.5-5.5Zm87,173a5.5,5.5,0,1,0,5.5,5.5,5.51,5.51,0,0,0-5.5-5.5Zm196,15a5.5,5.5,0,1,0,5.5,5.5,5.5,5.5,0,0,0-5.5-5.5Zm106-162a5.5,5.5,0,1,0,5.49,5.49,5.49,5.49,0,0,0-5.49-5.49Zm-389.42,4,93.29-162h73.67l13-13H172.89m-86.48,145,76-132H176.7m-4.81-13H359.35l44,77,18,5,39,66-37,64,5,18-48,83-72.73,0-13.25,13h-93l-36-63-19-6-47.91-82,44.91-78-5-17.58m60.44-91.39H352.35l9.11,15.64m5.59-16,54.29,94.31m46,54-76.62-132m73.91,127.32,2.71,4.65-11,19M167.47,1726.28,91.41,1594.7l7.08-12m47.88,81.94,46,80M427.56,1639l46.27-79.82m-3,29.27-75.36,132.19H377.54m-84.67,13H389m-27.14,12H208.38L199,1729.4",
                                transform: "translate(-54.87 -1373.8)"
                            }), (0, r.jsx)("path", {
                                id: "r2",
                                d: "M372.47,1724.6a3.55,3.55,0,0,1,2.56-1.27,3.76,3.76,0,0,1,3.2,2.23,3.47,3.47,0,0,1,.21,1.91,3.41,3.41,0,0,1-1,1.89,3.46,3.46,0,0,1-1.35.81c-.29-1.44-.59-2.88-.88-4.32.64.49,1.27,1,1.9,1.49l.16-.17-2.21-2.81-2.21,2.81.16.17,1.91-1.49c-.3,1.43-.59,2.87-.89,4.31a3.2,3.2,0,0,1-1.12-.6,3.43,3.43,0,0,1-1.23-2,3.53,3.53,0,0,1-.05-.92A3.42,3.42,0,0,1,372.47,1724.6Z",
                                transform: "translate(-54.87 -1373.8)"
                            }), (0, r.jsx)("path", {
                                id: "r1",
                                d: "M271.59,1713.21a8.18,8.18,0,0,1,10.68-1.31,8.13,8.13,0,0,1,3.41,8.09,8,8,0,0,1-2.39,4.48,8.23,8.23,0,0,1-3.19,1.9q-1-5.1-2.08-10.21c1.5,1.16,3,2.35,4.49,3.52l.38-.38c-1.74-2.21-3.48-4.43-5.23-6.64l-5.22,6.64.39.38,4.5-3.52c-.69,3.4-1.4,6.8-2.09,10.19a7.84,7.84,0,0,1-2.66-1.41,8.16,8.16,0,0,1-2.89-4.73,8.74,8.74,0,0,1-.13-2.17A8.1,8.1,0,0,1,271.59,1713.21Z",
                                transform: "translate(-54.87 -1373.8)"
                            }), "Plankton" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M362.81,314.68c-3.56-1.66-14.26-7-14.73-6.49.77,1,8.27,5.39,9.6,8.09-1-.13-8.92-5.31-9.83-5.71-.69-.29,7.12,7.9,6.37,7.81s-11.07-7.57-11.76-7.66c.16.88,3.5,3.85,6.66,9.82-3.33-3.22-9.86-8.93-12.5-6.26-2.92,3,4.39,9.77,7,12.33-5.64-2.73-10.81-6.82-11.11-6.52.48.79,8.71,9.6,8.67,10.25-.05.82-8.47-6.62-8.47-6.62l6.08,11.21c-1.62-.69-8.44-10.65-8.71-10.84.87,7.3,4.77,15.22,4.77,15.22-4.45-4.35-8.61-13.78-10-19.08-3.7-12.64-5.66-12.57-9.35-15.1-47.48-33.08-58.8-60.1-59.56-61-8.83,15.41,9.59,40.21,16.57,44.94-3,.53-5.39-2-6.49-2.26,1.8,4.34,8.2,7.09,8.46,15.75-2.16-2.6-16.76-21.7-22.31-33.72-3-5.58-4.47-15.2-2.32-21.13,1.26-7.63,1.81-12.72-2.8-20-9.54,9.2-16.79,17.88-10.41,48.45a65.46,65.46,0,0,0,5.32,8.12c-1.16-.54-5.27-4.21-5.48-4.07,1.06,1.83,5.63,8.53,6.93,10.77-1.25-.85-6-5.68-6.24-5.57,1.62,5,.83,3.41,2.31,6.25a7.37,7.37,0,0,1,.46,5.33c-.62,2.4-4.37-6-4.88-8.2-1.63-7.13-9.6-29.49-3.45-49.32,1.39-6.74,12.95-18.37,12.25-20.35-.65-1.82-1.53-2.74-3.54-2.9-5.28-.42-54.36-10.4-40.27,47.45,2,16.26,5.26,33.24-.36,51.73a55.56,55.56,0,0,1-1-8.44,222.71,222.71,0,0,0-4.75-43.53c-9.23-34.51,7.21-50.91,21.08-53.85,4.79-1,19.48-1.34,21.84-1.23,3.41.16,5.43-.53,5.93-4.77.75-6.45,4.47-8.53,10.79-7.16,5.45,1.8,6.18-4.41,6.79-7.12,14.3-58.85,52.77-25.62,58.68-21.14,14.53,14.7,37.15,18.91,41.77,20.51-6.05,3.43-29.19-4.23-39.5-13.12-4.89-3.42-35.69-34.93-53,4.15-1.93,6.22-5,17.23-2.76,20,3.91,3.69,7.59,2.12,11.41-.23,33.15-20.52,63.66,19.66,65.21,21.55-5.43,1.49-6.22-5.7-10-7,.67,1.66,1.07,3.68,2,5.94-2.18-2.75-5.74-8.16-5.74-8.16.35,1.1-.25,3.41.33,5.22-1.08-2.14-2.46-5.55-5.44-8-11-9.21-31.56-14.77-47.32-1.85,1.21,1.06,3.93,7.31,9.93,6.32,35.8-5.92,50.22,41.77,50.5,44.36-4.3-2-4.26-10.9-8.9-14.58,0,1.19-.11,4.65-.1,5.85-2.19-8.4-8.2-16.38-13.85-22.32-6.73-7.06-15.18-9.57-23.56-7.49.4.68,26.35,35,41,74.61,2,4.3,3.28,3.75,6.56,5C346,302.13,356.51,308.52,362.81,314.68Z",
                                transform: "translate(-54.87 -49.86)"
                            }) : "", "Seahorse" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M744,255.23c-3,3-6.15,5.9-9.36,8.71-1.83,1.76-.25,7.4.45,10.06,1.47-1.41,9.8-9.19,11.75-12.27,1.14-1.8.42-6.64-2.07-6.64a2.21,2.21,0,0,0-.77.14m-32.76-37c2.31,3.66,5.56,10.54,4.29,14.21a1.66,1.66,0,0,0,.77,2c4.6,3.5,5,7.45,4.2,13.06a5.12,5.12,0,0,0,1.62,4.27c4.23,4.82,2.75,12.42,2.56,14.29a75.61,75.61,0,0,0,17.45-13.2,6,6,0,0,0,1.22-7.66c-1.41-2.46-9.9,1.67-12.79,2,0-.5,5.06-4,7.38-5.75,1.84-1.41,2.65-3.77-1.1-6s1.37-6.91-6.28-5.26c-2.12.93-6.79.75-7.08,0,.18-.52,8.44-3.79,8.35-6.23a5.92,5.92,0,0,0-5.49-5.2c-2.38-.2-9.48-1.44-13.07-1.44-1.5,0-2.38.22-2,.82m51.22-13.58c1.62,3,7.32,13.11,8.42,14.82.32.51,5.51-2,8-4-.25,2-3,6.94-4.44,7.94,1.38,1.79,2.67,4.07,2.9,4,5.29-1.18,9.46-3.68,10.6-4.1-2,4.05-4.59,6.33-7,9A12.64,12.64,0,0,1,783,236c.27.59,9.75-1.06,10.6-1.58.33.67-5.93,6.44-8.88,7.37.66,2.26.5,2.15.5,4.5.09.61,6.27,1.46,8.75,1.14-2.35,1.78-5.57,3.77-8.39,3.68-.08,2-.92,5.77-.86,6.18.11.66,4.64,2.85,7,2.94a16.32,16.32,0,0,1-8,1.56c-.31,2.54-12.72,32-12.56,32.88,0,0,9.49-16.66,17.47-24.73,11.76-11.88,19-41.65-3.78-55.34-4.74-2.83-21-8.64-21.92-19.44a8.18,8.18,0,0,0-.61,9.51m18.89-26.26a3.51,3.51,0,0,1-3.43-3.48,3.5,3.5,0,1,1,7,0,3.52,3.52,0,0,1-3.48,3.48h-.08m-19.7-26.62a12.39,12.39,0,0,0-1.87-.92c-1,4.53-5.71,7.6-11.92,5.6-.27,2.4-1.13,10.07-10.45,8,1.32,9.58-6.54,11.66-6.79,12.25.72,1.11,3.52,9.67-2.18,13.24,3.12,3.14,5.66,8.26,2,14.37,3.18,3,4.27,6.78,2.2,11.6.74,3.17,4.94,5.64,5.83,10.61.46,2.54-.65,6.2,4.11,8,4.25,2.49.59,5.1,4.08,8.35,3,2.83,1,7.58,2.38,8.79,6,5.39,1.85,14.37-.82,16,1.42,1.46,2.64,8.63-1.12,11.44,1.55,2.44,3.52,7.76-1.46,14.44,1.85,3.49,1.38,7-1,10.18,3,4.25,2.3,6.87,1,10,5.43,3.12,3.67,8.13,3,10.4.64.29,5.07,3.15,3.85,8.12,5.4.77,6,4.2,5.57,7.24,2.67.12,5.31,1.7,5.86,4.39,4.19-1.42,5.27-1.13,7.76,2.08.4-.26,4.25-3,8.34-.56,1.51-1.4,2.64-4.42,7-2.93,1-2.09,3.18-4.32,5.9-3.82,0-.56-.73-4.45,3.55-5.54a6,6,0,0,1,3.26-5.42c-.23-.34-2.3-.41-2.76-8.11a17.66,17.66,0,0,0-3.2-9.46c-4.18-5.32-14.55-5.16-17.91,2.33-1.74,4.39-.52,10,4.64,11.66,4.33.89,3.49-3.61,1.8-4.41-3.74-2.07-1.65-6.9,1.55-7.56,5.67-1.15,7.64,4.31,7.77,8,.2,15.66-34.48,17.36-28.1-11.67,5.76-27.42,12.43-33.53,16.6-52.81,4.83-22.28-16.5-30.33-22.9-51.38-.9-2.81-2.16-9.62,4.88-14.36.07.05,4.45,5.42,10.13,4.39,22.2-3.07,31.85,4,33.52,6.76,2.38,2.66,5.21-1,6.27-4.68.88-3,.56-6-2.19-5.54-3.06.78-8.83-.51-12.1-4-1.81-1.75,1.32-4.16,1.4-4.51.51-2.17-6.73-2-6.16-7.31.8-5.88-2.62-10.54-1.68-15.8a15.28,15.28,0,0,0-4.05,4.7c-2.35-4.89-2.29-7.63-16.4-15.4-2.68,5.65-6.77,4.51-9.15,3.37",
                                transform: "translate(-544.87 -49.86)"
                            }) : "", "Starfish" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M1225.81,219.85c5.1-.67,8.28-4,9.51-8.81,1-3.77,4.74-41.17,6.8-46.79,2.87-12.23,16-17.73,22.5-5.37,6.51,10.92,16.78,48.37,18.11,51.88,1.77,4.67,4.63,5.88,10.17,4.93,6-1.05,45.65-6.23,50.28-5.35a11.8,11.8,0,0,1,6.89,19.26c-2.48,3.16-38.47,30.49-40.74,32.82-3.91,4-4.47,8.57-2,13.59,6.24,12.84,20,39.06,23.35,52.7,1.3,4.83-4.52,14.8-16.41,7.78-7.79-4.81-42-34.3-44.16-35.74-2.82-1.9-5.79-1.81-8.29.5-3.1,2.85-33.1,36.76-43,39.61-7.62,2.31-14.5-2.75-14.57-10.73-.07-7.18,14.12-51.78,14.4-54.34a10.49,10.49,0,0,0-4.83-10.12c-4.26-2.92-37.9-17.14-49.28-29.24-5.12-11.23,3.8-17.67,10.42-17.74C1179.65,218.65,1222.17,220.31,1225.81,219.85Zm57.42,49.8a5.55,5.55,0,0,0-5.45-5.5,5.62,5.62,0,0,0-5.63,5.46,5.81,5.81,0,0,0,5.77,5.57A5.65,5.65,0,0,0,1283.23,269.65Zm-38.33-5.5a5.5,5.5,0,0,0-5.43,5.47,5.58,5.58,0,0,0,5.56,5.51,5.72,5.72,0,0,0,5.49-5.5A5.61,5.61,0,0,0,1244.9,264.15ZM1287,241.3a5.41,5.41,0,0,0-5.47-5.55,5.46,5.46,0,0,0-.15,10.92,5.4,5.4,0,0,0,5.62-5.37Zm-48,8.59a5.63,5.63,0,0,0,5.66-5.4,5.55,5.55,0,0,0-11.09-.08A5.63,5.63,0,0,0,1239.07,249.89Zm24-24.71a5.45,5.45,0,1,0-5.49,5.47,5.35,5.35,0,0,0,5.49-5.47Zm23.72,60.28a4.1,4.1,0,0,0-.08-8.19,4.1,4.1,0,1,0,.08,8.19Zm4.68-49a4.21,4.21,0,0,0,4.09,4.07,4.25,4.25,0,0,0,4.11-4.2,4.1,4.1,0,0,0-8.2.13Zm-62.83,4.93a4.09,4.09,0,1,0-8.18.06,4.09,4.09,0,0,0,8.18-.06Zm10.24,45.81a4.09,4.09,0,0,0,4-4,4.25,4.25,0,0,0-4.08-4.1,4.16,4.16,0,0,0-4.09,4.19,4,4,0,0,0,4.07,4Zm18.14-72.85a4,4,0,0,0,4-4.07v0a4.09,4.09,0,0,0-8.17.13v.06a4,4,0,0,0,4.17,3.9Zm-41.5,24.19a3.62,3.62,0,1,0-7.23.18,3.79,3.79,0,0,0,3.71,3.55A3.73,3.73,0,0,0,1215.57,238.55Zm75.53,53.16a3.68,3.68,0,0,0,3.65,3.57,3.84,3.84,0,0,0,3.58-3.69,3.68,3.68,0,0,0-3.7-3.53A3.61,3.61,0,0,0,1291.1,291.71Zm20.42-59.5a3.61,3.61,0,1,0-3.57,3.67,3.72,3.72,0,0,0,3.57-3.67ZM1237.14,295a3.72,3.72,0,0,0-3.6-3.62,3.57,3.57,0,1,0-.1,7.14A3.72,3.72,0,0,0,1237.14,295Zm19.33-94.12a3.52,3.52,0,0,0-.09-7,3.49,3.49,0,0,0-3.49,3.48v0A3.45,3.45,0,0,0,1256.47,200.92Zm-28.36,102.65a3.16,3.16,0,1,0,3.14,3.2A3.32,3.32,0,0,0,1228.11,303.57Zm92.12-78.48a3.12,3.12,0,1,0-.11,6.23h.13a3.08,3.08,0,0,0,3.06-3,3.14,3.14,0,0,0-3.07-3.19Zm-17.7,80a3.1,3.1,0,1,0-3.2-3.1,3.25,3.25,0,0,0,3.2,3.1Zm-100.09-69.28a3.11,3.11,0,1,0-6.21,0,3.12,3.12,0,0,0,3.09,3.14h0A3.16,3.16,0,0,0,1202.44,235.77Zm56.6-51.32a3.08,3.08,0,1,0-6.15,0,3.08,3.08,0,0,0,6.15,0Zm-.89-12a2.58,2.58,0,0,0-2.61-2.68,2.73,2.73,0,0,0-2.64,2.72,3.09,3.09,0,0,0,2.66,2.94,3,3,0,0,0,2.59-3Zm51.35,136a2.73,2.73,0,0,0-.11,5.46,2.73,2.73,0,0,0,.11-5.46Zm-86.78,11.13a2.79,2.79,0,0,0,2.73-2.66,2.73,2.73,0,0,0-5.45,0,2.75,2.75,0,0,0,2.72,2.65Zm-32.16-86.8a2.54,2.54,0,0,0-2.71-2.57,2.61,2.61,0,0,0-2.63,2.61V233a2.67,2.67,0,0,0,5.34-.08v0Zm143.44-8.4a2.67,2.67,0,0,0-2.71-2.62,2.6,2.6,0,0,0-2.62,2.57v.11a2.65,2.65,0,0,0,2.66,2.63h0a2.67,2.67,0,0,0,2.64-2.69Zm-156,8.25a2.21,2.21,0,0,0,2.22-2,2.25,2.25,0,0,0-2.13-2.15,2.1,2.1,0,1,0-.09,4.19Zm165.29-10.86a2.17,2.17,0,1,0-4.34,0,2.17,2.17,0,0,0,4.34,0Zm-30.08,97.89a2.1,2.1,0,1,0,4.19-.05,2.1,2.1,0,1,0-4.19.05Zm-96.83,6.64a2.24,2.24,0,0,0,2.07,2.2,2.33,2.33,0,0,0,2.14-2.17,2.28,2.28,0,0,0-2.12-2.18A2.15,2.15,0,0,0,1216.4,326.37ZM1257,162.78a2,2,0,0,0-1.89-2.13H1255a2.06,2.06,0,0,0-.19,4.11h0a2,2,0,0,0,2.16-1.88s0-.07,0-.1Z",
                                transform: "translate(-1034.87 -49.86)"
                            }) : "", "Swordfish" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M228.25,783.21c.08.11-1.67-7.4,3.38-18.44.27-.51.18-.69-.35-.87a112.66,112.66,0,0,1-14.95-6.41h0c-.73,0-1.26,13.33,12,25.73m19.31-65.33c22.34.25,41.09,7,41.44,6.31,1.26-2.43-22.26-12.23-29.5-15.33h-.05c-1,0-11.15,8.07-11.89,9m-25.23-11.73c-7.5.63-28.43-1.26-49.05,28.39,2.59-2,12.76-10.64,24.85-11.53,22.46-1.33,29.06-16.87,24.38-16.87h-.18m66.46,34.11c-3.28,3.81-.82-9.73-1.24-9.86s-5,7.07-6,11c-.18.75-2.47,2.4-3.1,2.46-33.39,3.1-36.12-18.34-36.2-18.51-3.08,5.11-4.62,28.63,46.61,21.25,7.55-2,15.82-3.24,29.8,5.34-13.52-18-15.59-37.51-11-58.76-18.44,16.66-13.1,39.26-18.94,47.09m-87.37-99.74c.13.64,11,9.25,11.21,9.69-3.12-1.08-10.87-4.63-11-3.33a35.53,35.53,0,0,1-1.55,7.37c-.22.63,3.53,3.25,5,4.76-6.13-.39-6.22-2.72-8.07.29C181.71,677,184.72,707.43,185.55,711c.12-.68.38-20.77,14.85-37.15,8.48-9.6,20.57-17.09,43.77-20.86.24-.06-11.28-6.89-16.5-11-13.51-11-26.4-16-35.08-16.09,1.27,1.48,8,10.59,8.83,14.67m58.13,26.67a3.33,3.33,0,0,1-3.08-3.4,3.22,3.22,0,0,1,3.46-3,3.17,3.17,0,0,1,3,3.41,3.31,3.31,0,0,1-3.24,3h-.14m103.83-77C342.82,604.43,280.85,648.24,260,654c-4.91,1.82-30.09,7.54-42.46,14.55-21.3,10.25-25.48,37.4-25.64,41.15,2.69-4.51,38.11-14.89,37.74-3.29-.6,21.38-34.56,21.68-34.17,22.47,20.56,45.75,83.65,33.13,86,32.56,3-.72,4.86.7,7,2.29,2.69,2,5.21,4.6,11.42,3.64.66-.1-5.72-2.14-5.91-7-1.08-2.55,9.31-.41,21.47,8.22,4.93,2.72,23.94,10.77,40.19,8.59-2-.66-22.17-6.16-30.85-16-21.21-12.83-30.39-10.58-35.09-9.33-11.29,3-41,3.8-50.36-7.67-15.73-20.56,15.1-38,18-39.94a8.12,8.12,0,0,0,2.41-2.3c-13.63,5.19-24,7.15-25,4.22-3-9,2.06-22.75,4.27-26.76,0,.45-1.06,23.46,1.35,23,9.35-.3,25.86-7.19,26.41-8-1.08.43-14.3,3.53-20.27,2.17-6.19-1.4.75-18.33,1.07-18.89-.06,3.06.28,13,3.19,14.3,3.47,1.5,19.31.77,34-14-3.84,1.46-18.18,8.34-28.87,8.06-2.8,1,.67-8,2.74-10.68,4.9-6.41,40.28-34.19,52.12-42.41.33-.22-46.19,41.68-50.38,48.23,3.6-.66,10.25-1.67,10.47-1.9C280.14,670,341.55,612,362.67,592c1.05-1,1.53-2,1.16-2a1,1,0,0,0-.45.21",
                                transform: "translate(-54.87 -491.15)"
                            }) : "", "Stingray" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M754,687.19s-8.25,3.43-12.69,14.35c0,0-4.56-16,12.69-14.35m-4.56-7.35c-10.82,4.16-16,17.06-16,17.06-3.22-20.28,16-17.06,16-17.06m-8-6.8s-8.7,3.08-16.85,16.79c0,0-3.6-18.46,16.85-16.79m37.17-9.81s-9.25,3.52-14,12.52c0,0-1.7-17.21,14-12.52m-74.91-2.7a3.79,3.79,0,0,1,7.57-.09,3.58,3.58,0,0,1-3.63,3.81h-.13a3.63,3.63,0,0,1-3.81-3.72m71.64-5.3c-10.23,2.64-18.1,14.39-18.1,14.39-1.25-19.62,18.1-14.39,18.1-14.39m-6.74-8.05S759.9,649,749.9,661.62c0,0-2.62-18.62,18.74-14.44m-30.22-20.84a4,4,0,0,1,3.87-3.94,3.72,3.72,0,0,1,3.83,3.68,3.67,3.67,0,0,1-3.68,3.82h-.08a3.92,3.92,0,0,1-3.94-3.56m58.05-27c-18.12.89-40.62,18.21-47.43,12.91-16.48-12.82-39-14.35-40.48-10.27-.54,1.52,22.84,4.86,20,17.68.29,2.77-4,20-24,25.64-4.33,1.14-11.3-3.43-13.3-6.67-6.22-10.06-2.7-17.28-7.33-16.71-2.85.35-5.23,20.08,7.33,36.77,6.65,8.83-6.41,39.3-7.56,42.56-6.81,19.25-2.85,53.63,1.85,55.33,1.31.32,2.09-.44,2.89-1.34,27.33-30.71,65.28-30.41,66.43-31-26.88-16-43.88-39-43.51-38.73,2.86,2.56,47,41.49,73.16,40.9,3.92,0,5.34-1.95,4.77-5.79a63.92,63.92,0,0,1-1.24-8.24c1.67,1.66,6.87,6.19,33.14,8.63,21.17,2,32.25,14,32.25,26.19,0,23-25.37,27.84-35.73,25.14-13-4-14.83-16.74-14.73-19-3.67,15.58,12,24.13,20.43,24.32,32.33.71,35.93-22.19,36.29-27.64.28-15.86-6.85-22.16-15.72-29-15.19-10.16-43.41-7.84-47.69-16.62,3.39.52,6.4,1.16,9.45,1.42,2.86.24,3.65-.62,4.42-3.37-1.54-31.11-40-71.59-39.84-71.69,15.88,10.88,27.09,25.93,38.17,41.41.23-38.22,25.95-60.79,32.1-64.69,1.06-.67,2-1.49,1.73-2.93-.38-2.14-18.54-5.36-37.89-5.36-2.63,0-5.28.06-7.91.19",
                                transform: "translate(-544.87 -491.15)"
                            }) : "", "Dolphin" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M1366.77,673.65c-.8,3-21.39,1.67-37.82-6.18-4.52-2.08-20.84-1-41,4.62.73-1.19,5-9,6.32-12,.2-.46,29.85-1.22,30.57-1.14a11.83,11.83,0,0,1,6.22,2.33C1343.11,669.66,1365.86,673.5,1366.77,673.65Zm-78.67,4.46c3.21,3.93,4.38,12,5,13a1.69,1.69,0,0,0,2.66.59c6.73-4.16,10.13-16.74,10.27-18.74C1305.39,672.25,1286.48,676.8,1288.1,678.11Zm-65.57,25.21c20.5-16.55,30.87-18.08,30.87-19.75,0-.51,1.1-7.22.59-9.72A107.07,107.07,0,0,0,1222.53,703.32Zm147-34.89a199.46,199.46,0,0,1-20.34-4.78c-7.48-1.91-16-8.58-20-9.55-5.84-1.39-28.37-.37-33.36.26.74-2.89,1.33-5.55.61-6.75s-4.12,1-5,1.06c-3.19,22.31-29,41.85-30.48,42.68s-2.76.08-3-1.57c1.21-3.72,4.09-22.78-1-28.64-.47-.63-3.55,1.1-4.36,1.56-1.34.76,1.85,4.77.3,5.69-37.95,22.79-44.9,52.11-47.41,69.13-.16,1.09-.45,2.71,3.15,4.75,19.19,10.66,19.13,30.53,19.21,31.32s-.23,2.23-4-.27c-3.84-2.85-12.56-5.47-18.34-5.71-2.38-.5-7.73-2-9.27-6-2.88,4.61-7.33,5.57-12.26,5.93-14.43,1.06-24,10.87-23.73,8.46.18-1.45,7-26.53,26.07-34.44,1.39-.83,6.32-2.32,6.12-4.71.29-4.95-4-67.73,36.85-100,1.78-1.67,2.12-3.6,2.14-5.77.07-6.45-7.7-17.88-15.11-21.92a2.74,2.74,0,0,1,1.25-4.58c26.09-7.54,55.8,8.68,56.65,8.57,27.93-4.39,54.25,2.11,63.22,5.5,22,8.23,22.62,30.45,22.29,32.7a1.89,1.89,0,0,0,1.19,2.19c9.48,5.14,11.43,9.52,11.73,10.66A3.14,3.14,0,0,1,1369.55,668.43ZM1335,644.84a3.51,3.51,0,1,0-3.85,3.16A3.47,3.47,0,0,0,1335,644.84Z",
                                transform: "translate(-1034.87 -491.15)"
                            }) : "", "Narwhal" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M247.05,1131.75c-1.76,3.37-3.38,10.27-3.75,15.79.21,1.48,6.93.26,11,3.55,9.14,7.4,9.08,14,10.16,1.88,1.61-15.93-16.68-21.22-17.37-21.22h0m-32,65.91a3,3,0,0,1-2.88-3.17v0a2.94,2.94,0,0,1,2.23-2.85,3,3,0,0,1,3.77,3.14v.06a3,3,0,0,1-3,2.87h-.13m-13.61-3a3,3,0,0,1,.73-5.93,3,3,0,1,1,0,6,3.1,3.1,0,0,1-.73-.09m.41-11.81a2.86,2.86,0,0,1,.06-5.71H202a2.86,2.86,0,0,1-.06,5.71h-.06M189,1180.91a2.85,2.85,0,0,1,.41-5.67h.09a2.82,2.82,0,0,1,2.82,2.83,2.85,2.85,0,0,1-2.85,2.88,3.73,3.73,0,0,1-.47,0m2.16-14.51a1.5,1.5,0,0,1,.17-.65c1-2.06,2.05-2.34,3.09-2.23a2.8,2.8,0,0,1,2.46,2.8v0a2.85,2.85,0,0,1-2.87,2.84h0a2.85,2.85,0,0,1-2.85-2.79m-8.24-4a2.86,2.86,0,1,1,2.91-2.87v.08a2.85,2.85,0,0,1-2.85,2.79h-.06m6.72-9a2.85,2.85,0,0,1,5.66.46h0a2.89,2.89,0,0,1-2.82,2.87h0a2.85,2.85,0,0,1-2.81-3.34m-5.47-6a2.88,2.88,0,0,1,.45-5.71h.07a2.83,2.83,0,0,1,2.84,2.83h0a2.88,2.88,0,0,1-2.88,2.92,4.23,4.23,0,0,1-.48,0m44.83,2.32c-1.75-8-13.75-15.61-14.37-32.22-.06-1.43,4.95-.77,5.26,1.49.84,9.87,11.69,22.9,13.22,26.84,1.85,4.81.69,14.73-4.43,18.73-3.68,2-8-11.37-16.78-13.06-7.09-2-13.19-6.35-13-23.28.36-4,5.16-.23,5.09,2a25.49,25.49,0,0,0,1.85,10.55c2.06,6.28,11.15,6,15,9.73a27.6,27.6,0,0,1,5.39,6.42c.36.76.71,1.08,1,1.08,1.44,0,2.33-6.53,1.72-8.24M240,1086.43a3.71,3.71,0,0,1-3.77-3.9,3.87,3.87,0,0,1,3.8-3.82,4,4,0,0,1,3.89,3.9v0a3.85,3.85,0,0,1-3.84,3.78H240m-42.48,1.74c-35.06,37.1-25.56,72.68-23.21,82,2.46,9.77,19.62,42.37,63.53,47.5,27.32,1.53,40.86-6.12,48.51-9.47,8-3.52,25.4-12.07,32.31-13.43,6.19-1.25,15.33,1.61,23.11,4.46s14.36,5.78,15,4.42c-1.32-7.46-6.92-31.25-26.81-28.76-1.06-1.79,6.77-20-29.47-20.41-4.78,0,16.59,21.25,9.38,29-3.63,4.06-52.32,8.65-66.4-16.85-9.56-16.3-2.43-35.67.56-41,8.43-12.64,20.17-15.07,25-18.26,5.47-3.6,9.95-8.68,9-14.47-3.52,1.44-9.94,3.81-14.09,4.07,1.64-3,11.48-9.84,13.51-10.73.92-.41-.84-8-2.15-10.44-.28-.52,5.87-3.07,9.69-4.94-.24-.19-7.13-4-10.27-5.52a11.25,11.25,0,0,0-2.87,1c-1.48.63-3,1.26-3,1-4.42-2.89-12.54-5.62-20.25-5.62-13.63,0-30.87,5.54-51.17,26.5M280.77,1063c.19.17,10.13,5.29,10.13,5.29,1.66-.65,8.22-3.72,9.64-4.34-.25-.16-9.73-4.75-9.73-4.75-.59.22-8.58,3.26-10,3.8m15.23-5.77,9.65,4.42c.62-.27,7.15-3.25,9.87-4.43-.57-.27-8.86-4-8.86-4-2.19.91-8.32,3.16-10.66,4m15.73-6c.92.24,9.06,3.47,9.58,3.33,2.56-1,8.78-3.88,9.32-4.18-3-1.1-5.7-2.14-8.45-3.11-1,.38-10.44,3.85-10.45,4m25.64-9.77c-3,1-6,2.38-9.25,3.56.87.26,7.66,3,8.12,2.83,1.83-.81,6.17-2.78,8.12-3.65-.42,0-6.46-2.74-7-2.74h0m18.28-6.72c-2.45.83-10.92,4-12.58,4.62,0,0,6.23,2.62,6.48,2.51,2.56-1.28,6.4-2.78,8.92-4.15a1.81,1.81,0,0,0,1-2.42,1.63,1.63,0,0,0-1.58-1,7.76,7.76,0,0,0-2.21.48",
                                transform: "translate(-54.87 -932.44)"
                            }) : "", "Shark" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M681.89,1200.28c28.75,28.74,70.47.9,70.47.9-14.8-12.27-34.81-14.68-34.81-14.68-16.87,19-35.66,13.78-35.66,13.78m44.72-62.77s17.42,9.56,36.46.83c0,0-8.55-21.24-37.29-28.32,0,0,10,14.78.83,27.49m87.66,42.92a3.66,3.66,0,1,1,3.66,3.66,3.66,3.66,0,0,1-3.66-3.66m-79.72-143.67c-20.62,5.21-32.81,26.83-32.81,26.83-26,6.56-33,36.71-33.31,39.47a62.59,62.59,0,0,0-.78,6.61c8.16,31.81,45.07,51.75,78.26,64.47.31-4.4,4-11.46,10.62-14.29a38.23,38.23,0,0,0-6.93,15.5q4.17,1.34,8.21,2.51c2-13.82,12.14-17.59,12.14-17.59-3.46,4.29-7.4,12.39-8.21,18.7q3.76,1,7.32,1.93a22.92,22.92,0,0,1,11.06-16.23s-4.42,6.19-6.86,17.26c15.4,3.68,26.86,5.31,29.08,5.61,0,0,0,0,0,0-1.29.7-10.74,1.1-29.71-2.33a71.56,71.56,0,0,0-.86,11.36s-3.92-3.88-3-12q-3.75-.69-7.4-1.5c-.33,5.15-.1,10.93-.1,10.93-3.25-4.09-3.36-8.9-3.77-11.84-3-.71-5.46-1.34-8.34-2.15a56.18,56.18,0,0,0,.68,8.33s-3.87-2.93-4.5-9.53c-42.54-12.58-69.85-35-77.06-53,3.14,42.17,39.94,62.55,40.55,62.09,2.73-2,6.55-7.1,6.55-7.1,31.13,4.37,43.55,19.52,44,21.29,0,.2-8.27,5.38-8.27,5.38,32.21,9.58,62.65,1.07,62.65,1.07l-4.09-.84.25-4.25-4.49,4-.51-5-4.37,3.88-1-5-3.81,3.58-1.17-5-3.72,2.6-4.43-2.68,10.71-4,.57,3.77,5.18-3.65.21,4.37,5.46-3.8-.26,4.48,5.84-4.11.15,4.79,4.85-4,.47,4.85,5.45-3.76,3.41-.07c20.24-1,41.78-12.29,48.09-16,2.17-1.25,2.28-3.31-2.56-6.11-40.37-23.28-108.44-33-108.44-33-23.33,11.45-47-4.21-47-4.21-43.63-25.88-18.54-59.55-18.54-59.55,5.27,17.49,19.47,22,19.47,22-4.28-6.69-13.81-33.72,14.46-63.67,1.22-1.3,1.22-1.56,1-1.56a1.19,1.19,0,0,0-.37.12",
                                transform: "translate(-544.87 -932.44)"
                            }) : "", "Orca" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M1158,1098.86c13.26,16.72,33.64,18.28,34.23,21.39,1.13,5.94-1.77,11.38-2,13.26-1.44,10.18,13.42,3.22,22.39-7.51,1.1-1.61,3.8-1,6.47-.26,1.65.43-5-10.52-12.65-10.28-5.37.12-27.19-4.69-39.48-14.84a8.6,8.6,0,0,0-5.69-2.24,12.59,12.59,0,0,0-3.24.48m23.27-17c2.09-2.71,5.06-3.62,8.28-3.78,4.1-.21,8.11-1,12.18-1.46a4.11,4.11,0,0,1,4.45,4.41,4.41,4.41,0,0,1-4.08,3.72,16.09,16.09,0,0,1-4.27-.29,57.2,57.2,0,0,0-15.61-.48h-.2c-1.86,0-1.35-1.44-.75-2.12m117.32-38.42c-23.12,4.07-28.79,18.92-39.91,19.5-1.77.09-6.27-.67-12.79-1.43-13.16-1.53-34.55-3.07-58.48,2.38-16.09,3.56-40.48,21-32.26,30.76a56.71,56.71,0,0,0,19.34-3.54c8.75-3.24,24.68-.13,28.65,1.72,5.43,1.92-2.32,7.85,4,12.54,14.43,10.66,22.6,29.95,24.62,31.56,12.49,9.93,12.23-22.09-1.17-39-1.17-2,4.1-2.1,5-1.13,7.28,8,10,21.85,10.33,29.82.08.82,23.06.06,54.41,17.45-.69-2.94-14.06-14.45-32.83-21.57,11.1-2.7,3.49-11.24,10.06-16.76,11.51-6.89,31.82,6.67,32.71,19.06-.39,6.69-9-.77-13.08-2-15.58-4.55-1.53,9.86.64,12.19,3.51,3.77,21,19.36,24.41,27.85,1.78,4.46.59,5.67-2,19.6-2.24,16.41,7.83,28.09,9,29.17.46.41,4,3.46,3.57.89-.27-3.24-1.89-12,1.91-18.09a46.09,46.09,0,0,0,4.84-10.19c3.82,2.13,7,4.21,12,5.61,7.65,2.16,11.08,12.81,12.1,16,.66,2.07,2-.34,2.55-5.22,1-9.18-.78-29.12-20.43-37.82-6.68-3.93-5.28-4.71-6.84-10-2.18-7.45-9.21-51.88-42.58-71.78-1.11,2.21-5.68,8.17-13,1.62-5.31-5.6-6.62-7.37-9.78-9.47,4.35-.81,7.76,3.49,9.52,4.52,10.6,6.72,7.58-1.87,7.49-2.16-2.76-11.29,3.29-24.3,13.19-30,3.13-1.8-.07-2.24-2.72-2.24a17.23,17.23,0,0,0-2.43.14",
                                transform: "translate(-1034.87 -932.44)"
                            }) : "", "Whale" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M356.73,1524.25c-1.23,9.27-7,76.43-74.71,97.21-5.84-8.87-6.79-7.62-12.5-16.16-.36-.56-8.68-4.38-7.42-2.16,1.44,5.88,9.45,12.11,14.9,19.56,7.68,10.52,3.49,13.14,16.42,23,3.35,2.24,2.55,2.88.66,2.87-40-.15-52.21-50.69-57.28-59.25-1.75-3.58-17-1-32.68-16.48-11.14-11-27.9-12.18-32-14.4-7.14-1.82-4.37-10,2.83-9.66,5.11.24,54.3,5,70.43,8.29a149.55,149.55,0,0,0,39.35,2.63c22.74-4.07,17.3-16,27.68-18.28-.51.26-1.79,19.91,20.58-3.46,7.51-7.39,9.17-14.3,8.9-14.69-22.57-13.29-16.94-43.64-17-43.26,4.33,10.5,9.6,11.24,17.93,15.76,3.5,2.38,7.9,8.87,8,12,5.46-13.12,13.91-5.56,23.19-26.27C374.26,1481,381.24,1516.19,356.73,1524.25Zm-120.12,49.32a3.53,3.53,0,0,0-4.16-3.11l-.24,0a3.56,3.56,0,1,0,4.4,3.08ZM213.09,1627s7,3.61,19.27,4.84c0,0,.09-.16-2,5-4.7,11.74,3.71,16.62,2.21,18.78C231.88,1656.61,213.92,1654.9,213.09,1627Zm22.4-28.6s-2-6-3.5-6.11c-24.74-5.46-30.13-15.66-33.12-18.24-4.69-4-7.32-4-7.32-4C201.12,1593.71,235.49,1598.37,235.49,1598.37Zm8.45,20.39s-1.06-2.06-2.61-4.94c-50.91-5.63-61.84-32.69-66.85-49.58-.43-1.46-6.9-3.78-5.91-3C178.26,1618.42,243.94,1618.76,243.94,1618.76Zm-4.67-9.68s-1-2.54-2.41-5.56c-41-5.08-50.19-33.72-51.11-35.16s-5.91-2.48-5.91-2.48C189.8,1605,239.27,1609.08,239.27,1609.08Zm-50-2.13c25.05,24.59,61.36,21.57,61.36,21.57a56.18,56.18,0,0,1-3.92-5.16c-40.81.07-64.38-24.37-64.38-24.37A66.78,66.78,0,0,0,189.25,1607Z",
                                transform: "translate(-54.87 -1373.8)"
                            }) : "", "Megalodon" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M764.58,1574.28c2.88,1.49,10.38,3.25,13.88,7.94,1.22,1.15,3.16,1.14,5.23,1.13,2.42,0,5,0,6.78,1.81,4.32,4.5,5.45.63,11.12,6.62,2.27-2.55-2-16.57-14.39-26.11a.3.3,0,0,0-.19,0c-2.24,0-20.79,7.86-22.43,8.65m-87.1-9.27c-1.09,1.83.08,1,2.89.12a20.82,20.82,0,0,1,7.35-.92c3.22.18,1.79,3.47,5.36,2.82,1.66-.14,9.95-.23,14.08,3.49,4.6,4.14,12.08,3.56,13.87,3.39,3.42-.32,17.74-12,19.61-14.3,1.1-1.33,1.06-2-.59-2.55a77.27,77.27,0,0,0-26-4.81A57.14,57.14,0,0,0,677.48,1565m133.22-55.5c-17,8.76-22.12,25.92-29,30.24-.38.27-.58.51-.61.75a6.49,6.49,0,0,0,1.25,1.79c1.24,1.19-2,4.28-2.58,4.23s-3-3.37-3.27-3.42a45.86,45.86,0,0,0-5.88,3,24.23,24.23,0,0,0,2.34,3.33c.75,2.07-1.07,3.27-2.62,4.22-.32.31-4-5-4.18-5.06a38.23,38.23,0,0,0-5.35,3c-.07.28,1.18,1.56,1.64,2.34,1.22,2.07-1.51,3.77-2.67,4.32-.46.21-3.22-4-3.42-4.08s-4.85,2.32-8,4c-3.81,4.9-13.33,13-17.45,16.55-26.81,23.41-7.48,40.72-7.23,41.12-23.53-14.09-3.34-37.55-3.38-37.72s-9.32.74-16.66-5.18C699.82,1570,693.44,1570,693,1571c-5.13,10.13-1.25,25.4-4.24,25.8-5.05,4.73-5.93,12.07-5.19,12.3,2.45-3.57,7.34-8.38,7.72-6.65.9,4.14-6.5,5.24-7.55,16.59-.18,2.75,1.32-1.19,9.57-1.24,1.38-.16,1.86-1.36,2.5-2.58C714,1644,764.26,1644,775,1645.53c7.57,1.13,42.06,18,42.53,18,1.57-.23,2-1.53,1.17-2.86a5.15,5.15,0,0,0-4-2.65c-5.15-.56-5.66-4.36-2.52-4.44,2.93-.74-7.11-8.74-7.63-14.64-.32-3.67,5.4-18.05,21-33.28,1.45-1.49,2.51-3.46,1.5-5.25-.07-.12-1.24-2.24-.88-2.88s4.68.75,5.47,1c1.4.39,2.31,0,2.33-1.42.09-5.2,2.71-9.23,5.78-13.1,3.09-4.51-29.84,16.82-59.43,42.86a23.47,23.47,0,0,1,6-10.11c-22,7.93-4,20.54-34.21,7.25-45.72-20.11-12.17-38.89-11-40,.64-.61,1.6-1.23,2,.58.24,2.37,10.16,3.94,10.14,3-.08-3.45-3.38-10.81-1.19-11.45,13.27-7.25,57.25-25.15,78.53-28.84,2-.47,8.53-1.38,5.63-6.45a39.84,39.84,0,0,0-.17-6.87c-.17-.13-1.25,1.2-2.33,2.53s-2.1,2.62-2.27,2.54c-.79-.39-2.71-1.13-3.52-1.49-.5-.22-.24-6-1-6.44-.43-.22-1.44,1.16-2.36,2.55a15.58,15.58,0,0,1-1.81,2.56c-1-.07-1.91-.06-2.46-.17s-1.53-5.61-2.33-5.69c-.57-.06-1.11,1.42-1.6,2.89s-.92,2.9-1.29,2.9a14.29,14.29,0,0,1-2.94.06c-.37-.09-2-5.4-2.66-5.38s-1.53,4.22-2.25,5.75c-1.91.18-8.16,2.09-7.91,1.47.9-3.1,3.33-10.39,7.63-14.59.23-.28,1.32.45,2.44,1.18s2.29,1.48,2.62,1.17-.77-4.56-1-5.44c-.16-.63,2.53-2.78,3.55-2.87,1,.83,3.78,3.65,4.28,3.48s-.26-5.92.33-6.15c1-.39,2.43-1.45,3.19-1.43,1,0,3.89,4.79,4.46,4.57s.07-6.11.46-6.35c1-.63,3.54-1.17,3.71-.92.76,1.09,3.28,5.77,3.62,5.68s.85-5.24,1-6.52c.06-.53,2-.69,2.72-.8.46-.07,2.37,6.06,2.87,6.1s1.78-5.15,1.9-6.6c.26-3,2.94-5.07,5.41-9.92h-.06c-1.26,0-20.82,2.54-37.79,11m-128.19-18c-.32.19-1.59,1.33.2,1.74,28.88,6.67,22.2,19.42,22.53,19.82,6.08,7.24-.53,15.44-2,17.43a19.58,19.58,0,0,0,3.46-.33,31.5,31.5,0,0,1,5.29-.33c4.41-4.13,15.68-17.29,35.7-26.6-3.93-1-20.66-8.27-25.22-10.19-5.46-2.48-14.59-4-23.36-4-6.17,0-12.17.75-16.59,2.46m131.86,4.56a4.6,4.6,0,0,1-4-6.42c0-.12,9,1.38,9,1.69a5.11,5.11,0,0,1-4.89,4.73h0m35.09-19.8c-103.12,12-139.56,61.1-149.44,73.11,0,0,1.24-.24,3.51-.5a90.38,90.38,0,0,1,38.76,4.43c2.49.47,3.3,1.78,5,.34,1.64-1,5.82-3.39,5.88-3.74s-5.53-8.68-5.16-18.53c.05-1,4.39-.74,4.65,2.21a32.44,32.44,0,0,0,4.76,13.72,35.06,35.06,0,0,0,5.38-3c.07-.21-5.05-8.5-5-19.07,0-.5,4.33-1.38,4.73,2.91.44,4.77,4.41,13.81,4.59,13.84a60.93,60.93,0,0,0,5.47-3,42,42,0,0,1-5.71-19.41c0-.58,4.13-1.19,4.72,1.72a59.33,59.33,0,0,0,3.55,12.57.36.36,0,0,0,0,.09c1.57,2.75,3.19,2.76,5.48-.21,4.13-5.38,6.64-9.06,10-13.89,16.27-23.27,58.73-26.41,59.9-26.65s1.75-7,2.25-11.88c.23-2.27-.48-5-3-5a3.17,3.17,0,0,0-.43,0",
                                transform: "translate(-544.87 -1373.73)"
                            }) : "", "Kraken" === e.animal ? (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M1266.27,1583.27c-.48,4.87-1,9.52-1.41,14.16l.62.31c14.1-15.73,20.91-30.74,25.47-38.37,4.85-7.66,57-44.17,68.25-52.7,1.51-1.15,1.41-1.58-.29-2.35-6.14-3.3-15.47-5.07-29.06.27-36.25,14.24-76.75,48.69-89,55.32-12.16,3.85-20.2-7.33-41,1.19,3.74,2.21,19.76,11.75,17,16.37-.6,4.31-19.33,11.44-30-1.84-2.24-2.79.66-6.73.14-8.66-.42-1.54-6.57-.42-6.71-4.33-.13-3.66,3.35-4.75,3.35-6.43,0-1.12-4-1.68-4.19-5s3-3.51,3.07-5.31c.14-2.37-2.23-3.91-1.53-6.7,1.28-4.12,3.09-4.21,7.87-4.25,2.76,0,13.4,1.3,19.1-2.54,5.26-3.54,12.07-11.71,16-23.54-1.11.52-8.78,9.7-21.51,6.49-2.84-.94-12.12-4.36-17.15-.24-.28.27-.58.52-1.17,1,.65-6.1-1.9-10.66-5.47-14.85-6.4-5.69-7.19-12.82-7.48-18a4.6,4.6,0,0,0-.6.6c-4.29,7.32-7.15,13-8.52,23.55-1,7.76,5.59,15.69,7.64,19.87a9.6,9.6,0,0,1-.42,10c-27.28,35-16,87.92,44.43,98.57,1,.23,14.78-8.78,20.55-11.92a2.86,2.86,0,0,0,1.61-2.81q.53-13.83,1.22-27.67c.31-2.76,4.5-3.45,6.61-4.27,0,.92-2.48,59.12-2.56,62.53.26,3.16,2.22.13,2.28-.07,7.19-13.44,14.23-33.68,16.1-65.64C1259.72,1584.15,1264.18,1583.58,1266.27,1583.27Zm6.86-21.81a4.93,4.93,0,1,1-4.92,4.92A4.93,4.93,0,0,1,1273.13,1561.46Zm20.81,5.4c2.37-4.83,11.26-11.46,13.54-12.32-6,11.5-17.6,41.3-45.15,63.24.46-3,.83-5.77,1.31-8.49a3.21,3.21,0,0,1,1-1.54A150.77,150.77,0,0,0,1293.94,1566.86Zm-71,71,13.12-8.31a61.42,61.42,0,0,1-1.1,9.08A52.11,52.11,0,0,1,1222.9,1637.84Zm138.66-125.08c-5.27,46-25.84,92.69-60.79,113,18.52-17.24,42.76-54.85,52.4-105.15C1353.17,1520.62,1358,1515.61,1361.56,1512.76Zm-107.32,127.66c1.52-6.36,5.23-11.07,9.76-15.55,23.41-19.88,39.58-43.18,51.24-73.88,3-7.26,12.83-13.37,13-13.28C1323.14,1555.33,1300.09,1612.66,1254.24,1640.42Zm91.42-116.2c-6.89,39.1-40.08,105.19-76.28,112.89,15.51-10.14,55.09-52.38,66.59-105.28C1336.19,1530.68,1342.45,1526.16,1345.66,1524.22Z",
                                transform: "translate(-1034.87 -1373.73)"
                            }) : "", e.animal && "" !== e.animal && 0 !== e.tokenAmt && e.tokenAmt ? "" : (0, r.jsx)("path", {
                                id: "glyph",
                                d: "M708.9,1954.94c15.49-17.48,38.66-28.29,62.12-28a82.27,82.27,0,0,1,47.91,14.5,83.5,83.5,0,0,1,35.11,83.3A83.2,83.2,0,0,1,829.45,2071a84.73,84.73,0,0,1-32.84,19.47c-7.11-35-14.36-69.94-21.47-105.06,15.5,12,30.85,24.17,46.21,36.26l4-4c-17.92-22.75-35.83-45.64-53.88-68.39-17.92,22.75-35.83,45.64-53.74,68.39l4,4c15.5-12.09,30.85-24.17,46.35-36.26-7.11,35-14.36,70-21.47,104.92a80.78,80.78,0,0,1-27.44-14.5A84,84,0,0,1,689.42,2027c-1.57-7.25-1.71-14.79-1.42-22.32A84.11,84.11,0,0,1,708.9,1954.94Z",
                                transform: "translate(-548.63 -1814.52)"
                            })]
                        }), (0, r.jsxs)("g", {
                            id: "txt",
                            children: [(0, r.jsx)("text", {
                                id: "enddate",
                                transform: "translate(77.5 118) rotate(-60)",
                                textAnchor: "middle",
                                children: "DAY MONTH YEAR"
                            }), (0, r.jsx)("text", {
                                id: "endtime",
                                transform: "translate(63 168.8) rotate(-60)",
                                textAnchor: "middle",
                                children: "00:00 UTC"
                            }), (0, r.jsx)("text", {
                                id: "everrise",
                                transform: "translate(223 368.8)",
                                textAnchor: "middle",
                                children: "EVERRISE"
                            }), (0, r.jsxs)("text", {
                                id: "amount1",
                                transform: "translate(221.26 313.47)",
                                textAnchor: "middle",
                                children: [e.tokenAmt, " RISE"]
                            }), (0, r.jsx)("text", {
                                id: "period1",
                                transform: "translate(221.26 329.68)",
                                textAnchor: "middle",
                                children: e.lockPeriod ? "".concat(e.lockPeriod, " month").concat(e.lockPeriod > 1 && "s") : "Select Month "
                            }), (0, r.jsx)("text", {
                                id: "period2",
                                transform: "translate(77 285) rotate(60)",
                                textAnchor: "middle",
                                children: e.lockPeriod ? "".concat(e.lockPeriod, " month").concat(e.lockPeriod > 1 && "s") : "Select Month "
                            }), (0, r.jsx)("text", {
                                id: "elem2",
                                transform: "translate(119.4 332) rotate(60)",
                                textAnchor: "middle",
                                children: e.element ? e.element : "Element"
                            }), (0, r.jsxs)("text", {
                                id: "amount2",
                                transform: "translate(375.1 280) rotate(-60)",
                                textAnchor: "middle",
                                children: [e.tokenAmt, " RISE"]
                            }), (0, r.jsx)("text", {
                                id: "animaltxt2",
                                transform: "translate(395.4 219) rotate(-60)",
                                textAnchor: "middle",
                                children: e.animal ? e.animal : "Animal"
                            }), (0, r.jsx)("text", {
                                id: "id",
                                transform: "translate(326.85 66.78) rotate(60)",
                                textAnchor: "middle",
                                children: "#000000000"
                            }), (0, r.jsx)("text", {
                                id: "chain",
                                transform: "translate(366 108.4) rotate(60)",
                                textAnchor: "middle",
                                children: "BLOCKCHAIN"
                            }), (0, r.jsx)("text", {
                                id: "animaltxt1",
                                transform: "translate(220.96 88.5)",
                                textAnchor: "middle",
                                children: e.animal ? e.animal : "Creature"
                            }), (0, r.jsx)("text", {
                                id: "elem1",
                                transform: "translate(220.96 72)",
                                textAnchor: "middle",
                                children: e.element ? e.element : "Element"
                            }), (0, r.jsx)("text", {
                                id: "version2",
                                transform: "translate(288.94 356.5)",
                                textAnchor: "middle",
                                children: "GENESIS"
                            }), (0, r.jsx)("text", {
                                id: "version1",
                                transform: "translate(153.33 43.5)",
                                textAnchor: "middle",
                                children: "GENESIS"
                            }), (0, r.jsx)("text", {
                                id: "title",
                                transform: "translate(220.65 31)",
                                textAnchor: "middle",
                                children: "RISE STAKE"
                            })]
                        })]
                    })
                },
                E = n(81380),
                G = n(90079),
                I = n(12372),
                U = n(56371),
                L = function() {
                    return (0, r.jsx)("svg", {
                        version: "1.1",
                        id: "LoaderAnimation",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        width: "40px",
                        height: "40px",
                        viewBox: "0 0 50 50",
                        xmlSpace: "preserve",
                        children: (0, r.jsx)("path", {
                            fill: "#000",
                            d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",
                            children: (0, r.jsx)("animateTransform", {
                                attributeType: "xml",
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 25 25",
                                to: "360 25 25",
                                dur: "0.6s",
                                repeatCount: "indefinite"
                            })
                        })
                    })
                };

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function W(e, t, n, a, s, r, o) {
                try {
                    var i = e[r](o),
                        l = i.value
                } catch (c) {
                    return void n(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(a, s)
            }

            function H(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, s) {
                        var r = e.apply(t, n);

                        function o(e) {
                            W(r, a, s, o, i, "next", e)
                        }

                        function i(e) {
                            W(r, a, s, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, s, r = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            i = !0, s = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e) {
                e.contractInteractionCount, e.setContractInteractionCount;
                var t = (0, o.useRef)(null),
                    n = (0, o.useState)(!1),
                    a = n[0],
                    i = n[1],
                    l = (0, o.useState)(new O.BigNumber(0)),
                    c = l[0],
                    d = l[1],
                    x = (0, o.useState)(new O.BigNumber(0)),
                    u = x[0],
                    m = x[1],
                    p = (0, o.useState)(""),
                    f = p[0],
                    h = p[1],
                    j = (0, o.useState)(!1),
                    g = j[0],
                    v = j[1],
                    C = ((0, P.I0)(), (0, b.pm)()),
                    y = (0, P.v9)((function(e) {
                        return e.stakeReducer
                    })),
                    D = (y.messages, y.error, (0, o.useState)("")),
                    R = D[0],
                    W = D[1],
                    V = (0, F.rK)(),
                    _ = V.chainId,
                    z = V.account,
                    Q = V.signer,
                    K = (V.connectedWith, V.walletName, (0, A.cI)({
                        mode: "onChange",
                        defaultValues: {
                            tokenCount: 0
                        }
                    })),
                    Y = K.watch,
                    X = K.handleSubmit,
                    $ = K.setValue,
                    J = K.control,
                    ee = K.getValues,
                    te = K.formState,
                    ne = te.isValid,
                    ae = te.errors,
                    se = (0, o.useState)(null),
                    re = se[0],
                    oe = se[1],
                    ie = (0, o.useState)(!1),
                    le = ie[0],
                    ce = ie[1];
                (0, o.useEffect)((function() {
                    var e = function(e) {
                        t.current && !t.current.contains(e.target) && v(!1)
                    };
                    return document.addEventListener("click", e, !0),
                        function() {
                            document.removeEventListener("click", e, !0)
                        }
                }));
                var de = "Connect Wallet",
                    xe = "Enter Stake Amount",
                    ue = "Insufficient Funds (RISE)",
                    me = "Select Staking Period",
                    pe = "Generate NFT Stake",
                    fe = (0, o.useState)(""),
                    he = fe[0],
                    je = fe[1],
                    ge = (Y("tokenCount"), function() {
                        var e = H(s().mark((function e(t) {
                            var n, a, r, o, l;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!le) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return i(!0), ce(!0), e.prev = 4, e.next = 7, (0, G.cf)(Q, new O.BigNumber(ee("tokenCount")), new O.BigNumber(f), "");
                                    case 7:
                                        return n = e.sent, i(!1), e.next = 11, ve();
                                    case 11:
                                        return e.next = 13, n.wait();
                                    case 13:
                                        return a = e.sent, e.next = 16, (0, G.yD)(a, _);
                                    case 16:
                                        r = e.sent, oe(r.c[0]), e.next = 27;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(4), console.log(e.t0), (l = (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o ? void 0 : o.message) ? e.t0.data.message : e.t0.message).startsWith("err:") && (l = l.substr(4)), C({
                                            position: "top-right",
                                            title: "Create Stake Contract",
                                            status: "error",
                                            description: l,
                                            duration: 3e3,
                                            isClosable: !0
                                        });
                                    case 27:
                                        return e.prev = 27, ce(!1), i(!1), e.finish(27);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 20, 27, 31]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    ve = function() {
                        var e = H(s().mark((function e() {
                            var t, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, G.vY)(Q);
                                    case 2:
                                        return t = e.sent, e.next = 5, (0, G.BR)(Q);
                                    case 5:
                                        n = e.sent, d(new O.BigNumber(t.toFixed(0, O.BigNumber.ROUND_DOWN))), m(n);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, o.useEffect)((function() {
                    var e = function() {
                        var e = H(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ve();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [z, Q]);
                (0, o.useEffect)((function() {
                    c && (z ? 0 === Number(ee("tokenCount")) || void 0 === ee("tokenCount") ? W(xe) : parseFloat(c.toFormat(0, O.BigNumber.ROUND_FLOOR).replace(/,/g, "")) < Number(ee("tokenCount")) ? W(ue) : W("" !== f && f ? "" : me) : W(de), 0 !== Number(ee("tokenCount")) && void 0 !== ee("tokenCount") && "stepOne" === he && parseFloat(c.toFormat(0, O.BigNumber.ROUND_FLOOR).replace(",", "")) >= Number(ee("tokenCount")) && je(""), "" !== f && f && "stepFour" === he && je(""))
                }));
                var Ce = q((0, S.ac)("(max-width: 400px)"), 1)[0];
                return (0, r.jsxs)("div", {
                    children: [g && (0, r.jsx)("div", {
                        className: "SelectOptionPopupWrap",
                        children: (0, r.jsxs)("div", {
                            className: "SelectOptionPopupInner",
                            ref: t,
                            children: [(0, r.jsxs)("div", {
                                className: "SelectOptionPopupHeader",
                                children: [(0, r.jsx)("h2", {
                                    children: "Select Your Stake"
                                }), (0, r.jsx)("span", {
                                    onClick: function() {
                                        return v(!1)
                                    },
                                    className: "ExitIcon",
                                    children: (0, r.jsx)(Z.Z, {})
                                })]
                            }), (0, r.jsx)("div", {
                                className: "SelectOptionPopupContent",
                                children: E.Nx.map((function(e, t) {
                                    return (0, r.jsx)("div", {
                                        className: "SelectOptionPopupListItem",
                                        onClick: function() {
                                            return h(e), void v(!1)
                                        },
                                        children: (0, r.jsxs)("div", {
                                            children: [(0, r.jsxs)("div", {
                                                className: "FlexWrapColumn",
                                                children: [(0, r.jsxs)("span", {
                                                    children: [e, " month", e > 1 && "s"]
                                                }), (0, r.jsxs)("span", {
                                                    children: ["(", 30 * e, " days)"]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "FlexWrap HighlightButton",
                                                children: [(0, r.jsxs)("span", {
                                                    children: [E.a1[e], ": \xa0"]
                                                }), (0, r.jsxs)("span", {
                                                    children: [e, "x Stake Size"]
                                                })]
                                            })]
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "CreateStake FormBottomHalf BottomHalfSplit",
                        children: (0, r.jsx)("form", {
                            onSubmit: X(ge),
                            style: {
                                width: "100%"
                            },
                            children: (0, r.jsxs)(N.kC, {
                                color: "white",
                                direction: {
                                    base: "column",
                                    md: "row"
                                },
                                children: [(0, r.jsxs)(N.xu, {
                                    minWidth: {
                                        base: "200px",
                                        sm: "60%"
                                    },
                                    borderRadius: "16px",
                                    marginBottom: Ce ? "12px" : "15px",
                                    className: le || re ? "ComponentBG CreateStakeForm disabled" : "ComponentBG CreateStakeForm",
                                    children: [(0, r.jsxs)("div", {
                                        className: "StakingFormHeader",
                                        children: [(0, r.jsx)("h2", {
                                            children: "Stake Rise"
                                        }), (0, r.jsx)("p", {
                                            children: "Mint a new tradable NFT staking contract"
                                        }), (0, r.jsxs)("p", {
                                            children: ["Mint fee: ", (0, U.commify)(u.toFixed(4)), " ", I.l_[_].nativeCurrency.name]
                                        })]
                                    }), (0, r.jsxs)(N.xu, {
                                        width: {
                                            base: "100%"
                                        },
                                        className: "stepOne" === he ? "helper-active" : "",
                                        children: [(0, r.jsx)(M.F, {
                                            id: "tokenCount",
                                            placeholder: "0",
                                            name: "tokenCount",
                                            label: "EverRise(v3) Tokens",
                                            tokenBalance: c,
                                            setValue: $,
                                            control: J,
                                            disabled: !1,
                                            ticker: "RISE",
                                            tickerclass: "RISE",
                                            rules: {
                                                required: "Please enter valid amount",
                                                min: 1,
                                                validate: function() {
                                                    return e = ee("tokenCount"), c && e && parseInt(e) > 0 && c.gte(new O.BigNumber(e));
                                                    var e
                                                }
                                            },
                                            children: (0, r.jsx)("span", {
                                                className: "Ticker",
                                                children: "RISE"
                                            })
                                        }), (0, r.jsxs)(k.J1, {
                                            children: [ae.tokenCount && ae.tokenCount.message, ae.tokenCount && "validate" === ae.tokenCount.type && "Available balance amount should be less than or equal to staking amount"]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "StakeNameAndPeriod",
                                        children: (0, r.jsx)("div", {
                                            className: "stepFour" === he ? "helper-active" : "",
                                            children: (0, r.jsx)("div", {
                                                className: "SelectStakeBtn",
                                                children: (0, r.jsx)("div", {
                                                    className: "SelectStakeBtnInner",
                                                    children: (0, r.jsxs)("button", {
                                                        className: "PArrow down",
                                                        disabled: le,
                                                        onClick: function(e) {
                                                            return function(e) {
                                                                e.preventDefault(), v(!0)
                                                            }(e)
                                                        },
                                                        children: [!f && "" === f && (0, r.jsx)("span", {
                                                            children: "Select Lock Period"
                                                        }), f && "" !== f && (0, r.jsxs)("div", {
                                                            className: "StakingOrderBtnSummary",
                                                            children: [(0, r.jsx)("h2", {
                                                                children: "You selected:"
                                                            }), (0, r.jsxs)("p", {
                                                                children: [f, " month", Number(f) > 1 && "s", " (", 30 * Number(f), " ", "days) ", E.a1[f], ": \xa0", f, "x Stake Size"]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }), (0, r.jsx)(N.xu, {
                                    className: "InvertFormButton",
                                    marginBottom: "10px",
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    },
                                    children: (0, r.jsxs)("div", {
                                        className: "InvertFormButtonInner",
                                        children: [(0, r.jsxs)("button", {
                                            disabled: !0,
                                            children: [(0, r.jsx)("span", {
                                                className: "PArrow right"
                                            }), (0, r.jsx)("span", {
                                                className: "PArrow right"
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "NeomorphicSlice"
                                        })]
                                    })
                                }), (0, r.jsx)(N.xu, {
                                    className: "InvertFormButton",
                                    height: "1px",
                                    width: "100%",
                                    display: {
                                        base: "flex",
                                        md: "none"
                                    },
                                    children: (0, r.jsx)("div", {
                                        className: "InvertFormButtonInner",
                                        children: (0, r.jsxs)("button", {
                                            disabled: !0,
                                            children: [(0, r.jsx)("span", {
                                                className: "PArrow down"
                                            }), (0, r.jsx)("span", {
                                                className: "PArrow down"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(N.xu, {
                                    minWidth: {
                                        base: "full",
                                        sm: "38.7%"
                                    },
                                    marginBottom: "15px",
                                    borderRadius: "16px",
                                    className: "ComponentBG MintSvg",
                                    children: (0, r.jsxs)("div", {
                                        className: "NFTGenerator ".concat(a ? "AskToSign" : le ? "MintingProcessing" : re ? "MuchSuccess" : ""),
                                        children: [(0, r.jsxs)("div", {
                                            className: "NFTDisplay",
                                            children: [(0, r.jsx)(L, {}), (0, r.jsxs)("div", {
                                                className: "LDots",
                                                children: ["Minting New NFT Stake", (0, r.jsx)("span", {
                                                    className: "LDot",
                                                    children: "."
                                                }), (0, r.jsx)("span", {
                                                    className: "LDot",
                                                    children: "."
                                                }), (0, r.jsx)("span", {
                                                    className: "LDot",
                                                    children: "."
                                                })]
                                            }), re && (0, r.jsx)("p", {
                                                className: "SuccessBadge",
                                                children: "Success"
                                            }), (0, r.jsx)("div", {
                                                className: "FlipMe",
                                                children: (0, r.jsx)(B, {
                                                    tokenAmt: Number(ee("tokenCount")),
                                                    lockPeriod: f,
                                                    element: E.a1[f],
                                                    animal: (0, G.C3)(ee("tokenCount"))
                                                })
                                            }), re && (0, r.jsx)("p", {
                                                className: "GratzOnNFT",
                                                children: "Congrats! Here is your new NFT Stake!"
                                            })]
                                        }), !re && (0, r.jsxs)("div", {
                                            className: "StakingSummary",
                                            children: [(0, r.jsx)("h3", {
                                                children: "NFT Staking Contract Summary"
                                            }), (0, r.jsxs)("p", {
                                                children: ["Lock Period:", " ", (0, r.jsxs)("span", {
                                                    children: [f, " month", Number(f) > 1 && "s", " (", 30 * Number(f), " days)"]
                                                })]
                                            }), (0, r.jsxs)("p", {
                                                children: ["Reward Multiplier: ", (0, r.jsxs)("span", {
                                                    children: ["x", f]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "txtdivider"
                                            }), (0, r.jsxs)("p", {
                                                children: ["Amount Staking: ", (0, r.jsx)("span", {
                                                    children: ee("tokenCount")
                                                })]
                                            }), (0, r.jsxs)("p", {
                                                children: ["Reward Rank:", " ", (0, r.jsx)("span", {
                                                    children: (0, G.C3)(ee("tokenCount"))
                                                })]
                                            }), !le && re ? re : ""]
                                        }), re && (0, r.jsxs)("div", {
                                            className: "SubmitDappFormButtons AfterSuccess",
                                            children: [(0, r.jsx)(T(), {
                                                href: "/everstake/nft/".concat(re),
                                                children: (0, r.jsx)("a", {
                                                    className: "CreateStakeViewNowBtn",
                                                    children: "View Now"
                                                })
                                            }), (0, r.jsx)("button", {
                                                onClick: function(e) {
                                                    return function(e) {
                                                        e.preventDefault(), $("tokenCount", 0, {
                                                            shouldValidate: !0,
                                                            shouldDirty: !0
                                                        }), h(""), oe(null), ce(!1)
                                                    }(e)
                                                },
                                                children: "Reset Form"
                                            })]
                                        }), !re && (0, r.jsxs)("div", {
                                            className: "SubmitDappFormButtons",
                                            children: ["" !== R && z && (0, r.jsx)("div", {
                                                className: "HelperBtn",
                                                onClick: function() {
                                                    je(R === xe ? "stepOne" : R === ue ? "stepTwo" : R === me ? "stepThree" : ""), console.log(he)
                                                }
                                            }), !z && (0, r.jsx)("button", {
                                                onClick: function() {
                                                    return window.dispatchEvent(new CustomEvent("toggleWalletLogin"))
                                                },
                                                children: "Connect Wallet"
                                            }), z && (0, r.jsx)(w.zx, {
                                                className: "SubmitStakeBtn",
                                                type: "submit",
                                                disabled: !z || !ne || a || "" !== R || le,
                                                isLoading: a,
                                                loadingText: "Submitting",
                                                spinnerPlacement: "start",
                                                children: "" !== R ? R : a ? "Confirm in wallet" : le ? "Generating ..." : pe
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }

            function _(e, t, n, a, s, r, o) {
                try {
                    var i = e[r](o),
                        l = i.value
                } catch (c) {
                    return void n(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(a, s)
            }

            function z() {
                var e = (0, P.v9)((function(e) {
                        return e.nftReducer
                    })),
                    t = (e.nfts, e.firstLoaded),
                    n = (0, o.useState)(!1),
                    a = n[0],
                    d = n[1],
                    x = (0, P.I0)(),
                    u = (0, F.rK)(),
                    m = u.chainId,
                    p = u.account,
                    f = u.signer,
                    h = u.provider,
                    j = function() {
                        var e, t = (e = s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, d(!1), e.next = 4, (0, G.kD)(f, x);
                                    case 4:
                                        d(!0), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.log("Failed to get details about nfts and rewards");
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })), function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(a, s) {
                                var r = e.apply(t, n);

                                function o(e) {
                                    _(r, a, s, o, i, "next", e)
                                }

                                function i(e) {
                                    _(r, a, s, o, i, "throw", e)
                                }
                                o(void 0)
                            }))
                        });
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, o.useEffect)((function() {
                    !a && f && (t || j())
                }), [f]), (0, o.useEffect)((function() {
                    j()
                }), [m, p, f, h]), (0, r.jsxs)(c.F, {
                    meta: (0, r.jsx)(l.h, {
                        title: "NFT Staking Lab",
                        description: "EverRise NFT Staking Lab",
                        dappUrl: "/everstake",
                        icon: i.$
                    }),
                    dappClass: "EverStake",
                    children: [(0, r.jsx)(y.Z, {}), (0, r.jsx)(C, {}), (0, r.jsx)("div", {
                        className: "EverGridContent",
                        children: (0, r.jsx)(V, {
                            contractInteractionCount: 1,
                            setContractInteractionCount: function() {}
                        })
                    })]
                })
            }
        },
        9446: function(e, t, n) {
            ! function(e, t) {
                "use strict";

                function n(e) {
                    return e && "object" === typeof e && "default" in e ? e : {
                        default: e
                    }
                }
                var a = n(t);

                function s(e) {
                    return e * Math.PI / 180
                }

                function r(e, t, n) {
                    return e > n ? n : e < t ? t : e
                }

                function o(e, t) {
                    return t / 100 * e
                }

                function i(e, t) {
                    return e + t / 2
                }

                function l(e, t) {
                    var n = s(e);
                    return {
                        dx: t * Math.cos(n),
                        dy: t * Math.sin(n)
                    }
                }

                function c(e) {
                    return "number" === typeof e
                }

                function d(e, t) {
                    return "function" === typeof e ? e(t) : e
                }

                function x(e) {
                    for (var t = 0, n = 0; n < e.length; n++) t += e[n].value;
                    return t
                }

                function u(e) {
                    for (var t = e.data, n = e.lengthAngle, a = e.totalValue, s = e.paddingAngle, i = e.startAngle, l = a || x(t), c = r(n, -360, 360), d = 360 === Math.abs(c) ? t.length : t.length - 1, u = Math.abs(s) * Math.sign(n), m = c - u * d, p = 0, f = [], h = 0; h < t.length; h++) {
                        var j = t[h],
                            g = 0 === l ? 0 : j.value / l * 100,
                            v = o(m, g),
                            C = p + i;
                        p = p + v + u, f.push(Object.assign({
                            percentage: g,
                            startAngle: C,
                            degrees: v
                        }, j))
                    }
                    return f
                }

                function m(e, t) {
                    if (null == e) return {};
                    var n, a, s = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                }

                function p(e) {
                    e.dataEntry, e.dataIndex;
                    var t = m(e, ["dataEntry", "dataIndex"]);
                    return a.default.createElement("text", Object.assign({
                        dominantBaseline: "central"
                    }, t))
                }

                function f(e) {
                    var t = 1e14;
                    return Math.round((e + Number.EPSILON) * t) / t
                }

                function h(e) {
                    var t = e.labelPosition,
                        n = e.lineWidth,
                        a = f(e.labelHorizontalShift);
                    return 0 === a ? "middle" : t > 100 ? a > 0 ? "start" : "end" : t < 100 - n ? a > 0 ? "end" : "start" : "middle"
                }

                function j(e, t) {
                    var n = e(t);
                    return "string" === typeof n || "number" === typeof n ? a.default.createElement(p, Object.assign({
                        key: "label-" + (t.dataEntry.key || t.dataIndex)
                    }, t), n) : a.default.isValidElement(n) ? n : null
                }

                function g(e, t) {
                    return e.map((function(e, n) {
                        var a, s = null != (a = d(t.segmentsShift, n)) ? a : 0,
                            r = o(t.radius, t.labelPosition) + s,
                            c = l(i(e.startAngle, e.degrees), r),
                            x = c.dx,
                            u = c.dy,
                            m = {
                                x: t.center[0],
                                y: t.center[1],
                                dx: x,
                                dy: u,
                                textAnchor: h({
                                    labelPosition: t.labelPosition,
                                    lineWidth: t.lineWidth,
                                    labelHorizontalShift: x
                                }),
                                dataEntry: e,
                                dataIndex: n,
                                style: d(t.labelStyle, n)
                            };
                        return t.label && j(t.label, m)
                    }))
                }
                var v = function(e, t, n, a, s) {
                    var r = s - a;
                    if (0 === r) return [];
                    var o = n * Math.cos(a) + e,
                        i = n * Math.sin(a) + t,
                        l = n * Math.cos(s) + e,
                        c = n * Math.sin(s) + t;
                    return [
                        ["M", o, i],
                        ["A", n, n, 0, Math.abs(r) <= Math.PI ? "0" : "1", r < 0 ? "0" : "1", l, c]
                    ]
                };

                function C(e, t, n, a, o) {
                    var i = r(a, -359.999, 359.999);
                    return v(e, t, o, s(n), s(n + i)).map((function(e) {
                        return e.join(" ")
                    })).join(" ")
                }

                function y(e) {
                    var t, n, r = e.cx,
                        d = e.cy,
                        x = e.lengthAngle,
                        u = e.lineWidth,
                        p = e.radius,
                        f = e.shift,
                        h = void 0 === f ? 0 : f,
                        j = e.reveal,
                        g = e.rounded,
                        v = e.startAngle,
                        y = e.title,
                        b = m(e, ["cx", "cy", "lengthAngle", "lineWidth", "radius", "shift", "reveal", "rounded", "startAngle", "title"]),
                        S = p - u / 2,
                        N = l(i(v, x), h),
                        k = C(r + N.dx, d + N.dy, v, x, S);
                    if (c(j)) {
                        var w = s(S) * x;
                        n = (t = Math.abs(w)) - o(t, j)
                    }
                    return a.default.createElement("path", Object.assign({
                        d: k,
                        fill: "none",
                        strokeWidth: u,
                        strokeDasharray: t,
                        strokeDashoffset: n,
                        strokeLinecap: g ? "round" : void 0
                    }, b), y && a.default.createElement("title", null, y))
                }

                function b(e, t, n) {
                    var a = "stroke-dashoffset " + e + "ms " + t;
                    return n && n.transition && (a = a + "," + n.transition), {
                        transition: a
                    }
                }

                function S(e) {
                    return e.animate && !c(e.reveal) ? 100 : e.reveal
                }

                function N(e, t) {
                    return e && function(n) {
                        e(n, t)
                    }
                }

                function k(e, t, n) {
                    var s = null != n ? n : S(t),
                        r = t.radius,
                        i = t.center,
                        l = i[0],
                        c = i[1],
                        x = o(r, t.lineWidth),
                        u = e.map((function(e, n) {
                            var o = d(t.segmentsStyle, n);
                            return a.default.createElement(y, {
                                cx: l,
                                cy: c,
                                key: e.key || n,
                                lengthAngle: e.degrees,
                                lineWidth: x,
                                radius: r,
                                rounded: t.rounded,
                                reveal: s,
                                shift: d(t.segmentsShift, n),
                                startAngle: e.startAngle,
                                title: e.title,
                                style: Object.assign({}, o, t.animate && b(t.animationDuration, t.animationEasing, o)),
                                stroke: e.color,
                                tabIndex: t.segmentsTabIndex,
                                onBlur: N(t.onBlur, n),
                                onClick: N(t.onClick, n),
                                onFocus: N(t.onFocus, n),
                                onKeyDown: N(t.onKeyDown, n),
                                onMouseOver: N(t.onMouseOver, n),
                                onMouseOut: N(t.onMouseOut, n)
                            })
                        }));
                    return t.background && u.unshift(a.default.createElement(y, {
                        cx: l,
                        cy: c,
                        key: "bg",
                        lengthAngle: t.lengthAngle,
                        lineWidth: x,
                        radius: r,
                        rounded: t.rounded,
                        startAngle: t.startAngle,
                        stroke: t.background
                    })), u
                }
                var w = {
                    animationDuration: 500,
                    animationEasing: "ease-out",
                    center: [50, 50],
                    data: [],
                    labelPosition: 50,
                    lengthAngle: 360,
                    lineWidth: 100,
                    paddingAngle: 0,
                    radius: 50,
                    startAngle: 0,
                    viewBoxSize: [100, 100]
                };

                function A(e) {
                    var n = t.useState(e.animate ? 0 : null),
                        s = n[0],
                        r = n[1];
                    t.useEffect((function() {
                        if (e.animate) return t();

                        function t() {
                            var e, t;
                            return e = setTimeout((function() {
                                    e = null, t = requestAnimationFrame((function() {
                                        t = null, r(null)
                                    }))
                                })),
                                function() {
                                    e && clearTimeout(e), t && cancelAnimationFrame(t)
                                }
                        }
                    }), []);
                    var o = u(e);
                    return a.default.createElement("svg", {
                        viewBox: "0 0 " + e.viewBoxSize[0] + " " + e.viewBoxSize[1],
                        width: "100%",
                        height: "100%",
                        className: e.className,
                        style: e.style
                    }, k(o, e, s), e.label && g(o, e), e.children)
                }
                A.defaultProps = w, e.PieChart = A, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(67294))
        }
    }
]);