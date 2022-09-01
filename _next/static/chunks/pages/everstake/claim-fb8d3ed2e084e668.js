(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9693], {
        4346: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/everstake/claim", function() {
                return t(86749)
            }])
        },
        58952: function(e, n, t) {
            "use strict";
            var r = t(85893),
                s = t(92684),
                i = t(68527),
                a = t(41664),
                c = t.n(a);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, s, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (o) {
                            c = !0, s = o
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw s
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.Z = function(e) {
                l((0, s.ac)("(min-width: 480px)"), 1)[0];
                return (0, r.jsx)("div", {
                    className: "EverStakeNav ComponentBG",
                    children: (0, r.jsx)("div", {
                        className: "EverStakeNavWrapInner",
                        children: (0, r.jsx)("nav", {
                            children: (0, r.jsxs)(i.aV, {
                                display: "flex",
                                width: "100%",
                                children: [(0, r.jsx)(i.HC, {
                                    children: (0, r.jsx)(c(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, r.jsx)(i.rU, {
                                            children: (0, r.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Stake"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)(i.HC, {
                                    children: (0, r.jsx)(c(), {
                                        href: "/everstake/manage",
                                        passHref: !0,
                                        children: (0, r.jsxs)(i.rU, {
                                            children: ["", (0, r.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Manage"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(i.HC, {
                                    children: (0, r.jsx)(c(), {
                                        href: "/everstake/mementos",
                                        passHref: !0,
                                        children: (0, r.jsxs)(i.rU, {
                                            children: ["", (0, r.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "NFTs"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(i.HC, {
                                    children: (0, r.jsx)(c(), {
                                        href: "/everstake/claim",
                                        passHref: !0,
                                        children: (0, r.jsxs)(i.rU, {
                                            children: ["", (0, r.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Claim"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(i.LZ, {})]
                            })
                        })
                    })
                })
            }
        },
        96398: function(e, n, t) {
            "use strict";
            var r = t(85893);
            t(67294);
            n.Z = function() {
                return (0, r.jsxs)("svg", {
                    className: "Diamond_Icon",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "55",
                    height: "55",
                    viewBox: "0 0 512 512",
                    children: [(0, r.jsxs)("linearGradient", {
                        id: "DiamondGrad",
                        gradientUnits: "userSpaceOnUse",
                        x1: "0.3",
                        y1: "78",
                        x2: "520",
                        y2: "8",
                        children: [(0, r.jsx)("stop", {
                            offset: "0",
                            stopColor: "#c3e8ff"
                        }), (0, r.jsx)("stop", {
                            offset: "0.3",
                            stopColor: "#70c9ff"
                        }), (0, r.jsx)("stop", {
                            offset: "0.9",
                            stopColor: "#27a5f2"
                        }), (0, r.jsx)("stop", {
                            offset: "0",
                            stopColor: "#06b7ed"
                        })]
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M497.838 206.797h-120.822l-89.017 222.566z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M14.336 206.797l208.528 218.061-83.2-218.061z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M348.099 206.797h-179.722l87.757 229.98z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M232.816 75.223h-129.526l60.201 82.657z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M405.699 75.223h-136.714l67.072 82.299z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M11.664 179.641h134.492l-62.874-86.323z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M500.337 179.641l-73.216-88.218-74.639 88.218z"
                    }), (0, r.jsx)("path", {
                        className: "DiamondGradient",
                        d: "M180.255 179.641h139.223l-68.608-84.162z"
                    })]
                })
            }
        },
        86749: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return Y
                }
            });
            var r = t(34051),
                s = t.n(r),
                i = t(85893),
                a = t(67294),
                c = t(73934),
                o = t(50680),
                l = t(16894),
                u = t(58952),
                d = t(312),
                h = t(65044),
                p = t(12372),
                x = t(90606),
                m = t(44431),
                f = t.n(m),
                v = t(9473),
                j = t(11042),
                g = t(56371),
                N = t(96398);

            function b(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            b(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            b(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var w = [{
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
                }],
                I = function(e) {
                    (0, v.I0)();
                    var n = (0, a.useState)(),
                        t = n[0],
                        r = n[1],
                        c = (0, a.useState)(!0),
                        o = c[0],
                        l = c[1],
                        u = function() {
                            var n = y(s().mark((function n() {
                                var t, r;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return t = new(f())(Number(e.nft.position)), r = new(f())(Number(w.find((function(n) {
                                                return n.name === e.nft.nft
                                            })).threshold)), n.next = 4, (0, x.Lw)(e.chainId, e.signer, r, t);
                                        case 4:
                                            return n.abrupt("return", n.sent);
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, a.useEffect)((function() {
                        var n = function() {
                            var n = y(s().mark((function n() {
                                var i;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t || !e.toggleDispaly || !e.signer) {
                                                n.next = 6;
                                                break
                                            }
                                            return n.next = 3, (0, x.BR)(2, e.chainId, e.signer);
                                        case 3:
                                            i = n.sent, r(i), l(!1);
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        n()
                    }), [e.chainId, e.signer, e.toggleDispaly]), (0, i.jsx)(i.Fragment, {
                        children: e.toggleDispaly && (0, i.jsxs)(j.Z, {
                            toggleDisplay: e.toggleDispaly,
                            setToggleDisplay: e.setTogglePopup,
                            title: "CLAIM NFT",
                            commitDisabled: o,
                            executeTransaction: function() {
                                return u()
                            },
                            buttonText: "Claim",
                            children: [(0, i.jsxs)("div", {
                                className: "PopupListWrap",
                                children: [(0, i.jsx)("header", {
                                    children: (0, i.jsx)("h3", {
                                        children: "NFT SUMMARY"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "PopupListScrollWrap",
                                    children: (0, i.jsxs)("div", {
                                        className: "PopupListScrollWrapInner",
                                        children: [(0, i.jsx)("div", {
                                            className: "PopupIconWrap",
                                            children: (0, i.jsx)("span", {
                                                className: "DiamondIcon",
                                                children: (0, i.jsx)(N.Z, {})
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "PopupItemInfo",
                                            children: (0, i.jsx)("table", {
                                                className: "PopupItemInfoTable",
                                                children: (0, i.jsxs)("tbody", {
                                                    children: [(0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Collection:"
                                                        }), (0, i.jsx)("td", {
                                                            children: "EverRise Mementos"
                                                        })]
                                                    }), (0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Name:"
                                                        }), (0, i.jsxs)("td", {
                                                            children: ["OG Hodler ", e.nft.nft]
                                                        })]
                                                    }), (0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Type:"
                                                        }), (0, i.jsx)("td", {
                                                            children: "Migration Achievement"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "TaxFees",
                                children: (0, i.jsxs)("span", {
                                    children: ["Mint fee: ", (0, g.commify)(t ? t.toFixed(4) : "0.00"), " ", p.l_[e.chainId].nativeCurrency.name]
                                })
                            })]
                        })
                    })
                },
                S = t(35553),
                C = t(15193),
                k = t(68527),
                T = t(36485),
                D = t(59641);

            function F(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function P(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            F(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            F(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var M = function(e) {
                var n = (0, a.useRef)(null),
                    t = (0, d.rK)().chainId,
                    r = (0, a.useState)(),
                    c = r[0],
                    o = r[1],
                    l = (0, a.useState)(""),
                    u = l[0],
                    h = l[1],
                    x = (0, a.useState)(!1),
                    m = x[0],
                    f = x[1],
                    v = (0, a.useState)(null),
                    j = v[0],
                    g = v[1],
                    N = (0, a.useState)(!1),
                    b = N[0],
                    y = N[1],
                    w = (0, a.useState)(!1),
                    I = w[0],
                    S = w[1],
                    F = (0, a.useState)(!1),
                    M = F[0],
                    E = F[1];
                (0, a.useEffect)((function() {
                    var n = function() {
                        var n = P(s().mark((function n() {
                            var t;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, e.checkApproval();
                                    case 2:
                                        t = n.sent, S(t), y(!0);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    e.toggleDisplay && (E(!1), y(!1), n())
                }), [e.toggleDisplay, e.checkApproval]);
                var A = function() {
                        g(null), o(void 0), e.setToggleDisplay(!1), f(!1), B(!1), h("")
                    },
                    R = function() {
                        var n = P(s().mark((function n() {
                            var t, r;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return E(!0), n.prev = 1, n.next = 4, e.approve();
                                    case 4:
                                        return t = n.sent, n.next = 7, t.wait();
                                    case 7:
                                        n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                    case 12:
                                        return n.next = 14, e.checkApproval();
                                    case 14:
                                        r = n.sent, S(r), E(!1);
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 9]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    B = function(n) {
                        e.setInputDisabled && e.setInputDisabled(n)
                    },
                    O = function() {
                        var n = P(s().mark((function n() {
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        o(void 0), f(!0), B(!0), e.executeTransaction().then((function(n) {
                                            h("Waiting for confirmation"), n.wait().then((function(n) {
                                                h("Completed"), f(!1), B(!1), g(n), e.transactionCompleted && e.transactionCompleted()
                                            })).catch((function(e) {
                                                o(e), B(!1), h("Failed"), f(!1)
                                            }))
                                        })).catch((function(e) {
                                            o(e), B(!1), h(""), f(!1)
                                        }));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, i.jsx)(i.Fragment, {
                    children: e.toggleDisplay && (0, i.jsxs)("div", {
                        className: "SelectOptionPopupWrap EverStakeBridgePopup",
                        children: [(0, i.jsxs)("div", {
                            className: "SelectOptionPopupInner",
                            ref: n,
                            children: [(0, i.jsxs)("div", {
                                className: "SelectOptionPopupHeader",
                                children: [(0, i.jsx)("h2", {
                                    children: e.title
                                }), (0, i.jsx)("span", {
                                    className: "ExitIcon",
                                    onClick: function() {
                                        return A()
                                    },
                                    children: (0, i.jsx)(T.Z, {})
                                })]
                            }), (0, i.jsx)("div", {
                                className: "SelectOptionPopupContent",
                                children: (0, i.jsxs)("div", {
                                    className: "ColumnContent",
                                    children: [!j && (0, i.jsxs)(i.Fragment, {
                                        children: [e.children, (0, i.jsxs)("div", {
                                            className: "ActionPopupBottom",
                                            children: [(0, i.jsx)(C.zx, {
                                                className: "StakingActionSubmitBtn BridgeButton",
                                                disabled: !!(e.commitDisabled || m || !b || I || M),
                                                onClick: function() {
                                                    return R()
                                                },
                                                children: M ? "Approving" : I ? "Approved" : "Approve"
                                            }), (0, i.jsx)(C.zx, {
                                                className: "StakingActionSubmitBtn BottomBridgeButton",
                                                disabled: !(!e.commitDisabled && !m && b && I && !M),
                                                onClick: function() {
                                                    return O()
                                                },
                                                children: "" === u ? e.buttonText : u
                                            })]
                                        })]
                                    }), j && (0, i.jsxs)("div", {
                                        className: "CenterContentVerticalColumn",
                                        children: [(0, i.jsx)("p", {
                                            children: "Transaction completed"
                                        }), (0, i.jsxs)("div", {
                                            className: "FlexWrapCenter",
                                            children: [(0, i.jsx)("div", {
                                                className: "ScanLogo",
                                                children: (0, i.jsx)(D.EU, {})
                                            }), (0, i.jsx)(k.rU, {
                                                target: "_blank",
                                                href: "".concat(p.l_[t].blockExplorerUrls, "tx/").concat(j.transactionHash),
                                                children: "View Transaction"
                                            })]
                                        })]
                                    }), c && (0, i.jsxs)("div", {
                                        className: "popupInlineWarning",
                                        children: [(0, i.jsx)("p", {
                                            children: (0, i.jsx)("span", {
                                                children: "There was an error with the transaction."
                                            })
                                        }), (0, i.jsx)("p", {
                                            children: (0, i.jsx)("span", {
                                                children: function() {
                                                    var e, n = (null === c || void 0 === c || null === (e = c.data) || void 0 === e ? void 0 : e.message) ? c.data.message : c.message;
                                                    return n.startsWith("err:") && (n = n.substr(4)), n
                                                }()
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), m && (0, i.jsx)("div", {
                            className: "FullBGClick"
                        }), !m && (0, i.jsx)("div", {
                            className: "FullBGClick",
                            onClick: function() {
                                return A()
                            }
                        })]
                    })
                })
            };

            function E(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function A(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            E(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            E(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var R = function(e) {
                    (0, v.I0)();
                    var n = (0, a.useState)(),
                        t = n[0],
                        r = n[1],
                        c = (0, a.useState)(!0),
                        o = c[0],
                        l = c[1],
                        u = (0, a.useState)(new(f())(0)),
                        d = (u[0], u[1]),
                        h = (0, a.useState)("Not Enough Rise"),
                        m = h[0],
                        j = h[1],
                        b = function() {
                            var n = A(s().mark((function n() {
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, (0, x.E3)(e.chainId, e.signer);
                                        case 2:
                                            return n.abrupt("return", n.sent);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, a.useEffect)((function() {
                        var n = function() {
                            var n = A(s().mark((function n() {
                                var i, a, c, o;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t || !e.toggleDispaly || !e.signer) {
                                                n.next = 21;
                                                break
                                            }
                                            return n.next = 3, (0, x.BR)(3, e.chainId, e.signer);
                                        case 3:
                                            return i = n.sent, r(i), n.next = 7, (0, x.QZ)(e.signer, e.account, e.chainId);
                                        case 7:
                                            if (a = n.sent, d(a), !a.gte(e.riseMintFee)) {
                                                n.next = 13;
                                                break
                                            }
                                            j("Claim"), l(!1), n.next = 16;
                                            break;
                                        case 13:
                                            return j("Not Enough Rise"), l(!0), n.abrupt("return");
                                        case 16:
                                            return n.next = 18, e.signer.getBalance();
                                        case 18:
                                            c = n.sent, o = new(f())(S.formatEther(c)), i.gte(o) && (j("Not enough " + p.l_[e.chainId].nativeCurrency.name), l(!0), console.log("Failed the balance check"));
                                        case 21:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        n()
                    }), [e.chainId, e.signer, e.toggleDispaly, e.account]), (0, i.jsx)(i.Fragment, {
                        children: e.toggleDispaly && (0, i.jsxs)(M, {
                            approve: function() {
                                return (0, x.W3)(e.chainId, e.signer, e.riseMintFee)
                            },
                            checkApproval: function() {
                                return (0, x.Lk)(e.chainId, e.signer, e.account, e.riseMintFee)
                            },
                            toggleDisplay: e.toggleDispaly,
                            setToggleDisplay: e.setTogglePopup,
                            title: "CLAIM HOLDR NFT",
                            commitDisabled: o,
                            executeTransaction: function() {
                                return b()
                            },
                            buttonText: m,
                            children: [(0, i.jsxs)("div", {
                                className: "PopupListWrap",
                                children: [(0, i.jsx)("header", {
                                    children: (0, i.jsx)("h3", {
                                        children: "NFT SUMMARY"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "PopupListScrollWrap",
                                    children: (0, i.jsxs)("div", {
                                        className: "PopupListScrollWrapInner",
                                        children: [(0, i.jsx)("div", {
                                            className: "PopupIconWrap",
                                            children: (0, i.jsx)("span", {
                                                className: "DiamondIcon",
                                                children: (0, i.jsx)(N.Z, {})
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "PopupItemInfo",
                                            children: (0, i.jsx)("table", {
                                                className: "PopupItemInfoTable",
                                                children: (0, i.jsxs)("tbody", {
                                                    children: [(0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Collection:"
                                                        }), (0, i.jsx)("td", {
                                                            children: "EverRise Mementos"
                                                        })]
                                                    }), (0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Name:"
                                                        }), (0, i.jsxs)("td", {
                                                            children: ["HODL Pass (", p.l_[e.chainId].chainName, ")"]
                                                        })]
                                                    }), (0, i.jsxs)("tr", {
                                                        children: [(0, i.jsx)("th", {
                                                            children: "Type:"
                                                        }), (0, i.jsx)("td", {
                                                            children: "Holding Achievement"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "TaxFees",
                                children: [(0, i.jsxs)("span", {
                                    children: ["Mint fee: ", (0, g.commify)(t ? t.toFixed(4) : "0.00"), " ", p.l_[e.chainId].nativeCurrency.name]
                                }), (0, i.jsxs)("p", {
                                    children: ["Rise fee: ", (0, g.commify)(e.riseMintFee ? e.riseMintFee.toFixed(4) : "0.00"), " RISE"]
                                })]
                            })]
                        })
                    })
                },
                B = t(92684),
                O = t(24347),
                _ = t(2593);

            function L(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function W(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            L(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            L(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var G = function(e) {
                var n = (0, a.useState)(),
                    t = n[0],
                    r = n[1],
                    c = (0, a.useState)(new(f())(0)),
                    o = (c[0], c[1]),
                    l = (0, a.useState)(!0),
                    u = l[0],
                    d = l[1],
                    h = (0, a.useState)("Not Enough Rise"),
                    m = h[0],
                    v = h[1],
                    j = function() {
                        var n = W(s().mark((function n() {
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, (0, x.N4)(e.chainId, e.signer);
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, a.useEffect)((function() {
                    var n = function() {
                        var n = W(s().mark((function n() {
                            var i, a, c, l;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t || !e.toggleDisplay || !e.signer) {
                                            n.next = 21;
                                            break
                                        }
                                        return n.next = 3, (0, x.aJ)(e.chainId, e.signer);
                                    case 3:
                                        return i = n.sent, r(i), n.next = 7, (0, x.QZ)(e.signer, e.account, e.chainId);
                                    case 7:
                                        if (a = n.sent, o(a), !a.gte(e.riseMintFee)) {
                                            n.next = 13;
                                            break
                                        }
                                        v("Claim"), d(!1), n.next = 16;
                                        break;
                                    case 13:
                                        return v("Not Enough Rise"), d(!0), n.abrupt("return");
                                    case 16:
                                        return n.next = 18, e.signer.getBalance();
                                    case 18:
                                        c = n.sent, l = new(f())(S.formatEther(c)), i.gte(l) && (v("Not enough " + p.l_[e.chainId].nativeCurrency.name), d(!0), console.log("Failed the balance check"));
                                    case 21:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    n()
                }), [e.chainId, e.signer, e.toggleDisplay, e.account]), (0, i.jsx)(i.Fragment, {
                    children: e.toggleDisplay && (0, i.jsxs)(M, {
                        approve: function() {
                            return (0, x.Ju)(e.chainId, e.signer, e.riseMintFee)
                        },
                        checkApproval: function() {
                            return (0, x.Yf)(e.chainId, e.signer, e.account, e.riseMintFee)
                        },
                        toggleDisplay: e.toggleDisplay,
                        setToggleDisplay: e.setTogglePopup,
                        title: "CLAIM DISTRIBUTION NFT",
                        commitDisabled: u,
                        executeTransaction: function() {
                            return j()
                        },
                        buttonText: m,
                        children: [(0, i.jsxs)("div", {
                            className: "PopupListWrap",
                            children: [(0, i.jsx)("header", {
                                children: (0, i.jsx)("h3", {
                                    children: "NFT SUMMARY"
                                })
                            }), (0, i.jsx)("div", {
                                className: "PopupListScrollWrap",
                                children: (0, i.jsxs)("div", {
                                    className: "PopupListScrollWrapInner",
                                    children: [(0, i.jsx)("div", {
                                        className: "PopupIconWrap",
                                        children: (0, i.jsx)("span", {
                                            className: "DiamondIcon",
                                            children: (0, i.jsx)(N.Z, {})
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "PopupItemInfo",
                                        children: (0, i.jsx)("table", {
                                            className: "PopupItemInfoTable",
                                            children: (0, i.jsxs)("tbody", {
                                                children: [(0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Collection:"
                                                    }), (0, i.jsx)("td", {
                                                        children: "EverRise Mementos"
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Name:"
                                                    }), (0, i.jsxs)("td", {
                                                        children: ["Distributor NFT (", p.l_[e.chainId].chainName, ")"]
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Type:"
                                                    }), (0, i.jsx)("td", {
                                                        children: "Distributor Achievement"
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "TaxFees",
                            children: [(0, i.jsxs)("span", {
                                children: ["Mint fee: ", (0, g.commify)(t ? t.toFixed(4) : "0.00"), " ", p.l_[e.chainId].nativeCurrency.name]
                            }), (0, i.jsxs)("p", {
                                children: ["Rise fee: ", (0, g.commify)(e.riseMintFee ? e.riseMintFee.toFixed(4) : "0.00"), " RISE"]
                            })]
                        })]
                    })
                })
            };

            function H(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function U(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            H(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            H(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var Z = function(e) {
                var n = (0, a.useState)(),
                    t = n[0],
                    r = n[1],
                    c = (0, a.useState)(new(f())(0)),
                    o = (c[0], c[1]),
                    l = (0, a.useState)(!0),
                    u = l[0],
                    d = l[1],
                    h = (0, a.useState)("Not Enough Rise"),
                    m = h[0],
                    v = h[1],
                    j = function() {
                        var n = U(s().mark((function n() {
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, (0, x._u)(e.chainId, e.signer);
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, a.useEffect)((function() {
                    var n = function() {
                        var n = U(s().mark((function n() {
                            var i, a, c, l;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t || !e.toggleDisplay || !e.signer) {
                                            n.next = 21;
                                            break
                                        }
                                        return n.next = 3, (0, x.aJ)(e.chainId, e.signer);
                                    case 3:
                                        return i = n.sent, r(i), n.next = 7, (0, x.QZ)(e.signer, e.account, e.chainId);
                                    case 7:
                                        if (a = n.sent, o(a), !a.gte(e.riseMintFee)) {
                                            n.next = 13;
                                            break
                                        }
                                        v("Claim"), d(!1), n.next = 16;
                                        break;
                                    case 13:
                                        return v("Not Enough Rise"), d(!0), n.abrupt("return");
                                    case 16:
                                        return n.next = 18, e.signer.getBalance();
                                    case 18:
                                        c = n.sent, l = new(f())(S.formatEther(c)), i.gte(l) && (v("Not enough " + p.l_[e.chainId].nativeCurrency.name), d(!0), console.log("Failed the balance check"));
                                    case 21:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    n()
                }), [e.chainId, e.signer, e.toggleDisplay, e.account]), (0, i.jsx)(i.Fragment, {
                    children: e.toggleDisplay && (0, i.jsxs)(M, {
                        approve: function() {
                            return (0, x.p8)(e.chainId, e.signer, e.riseMintFee)
                        },
                        checkApproval: function() {
                            return (0, x.u$)(e.chainId, e.signer, e.account, e.riseMintFee)
                        },
                        toggleDisplay: e.toggleDisplay,
                        setToggleDisplay: e.setTogglePopup,
                        title: "CLAIM BATTLE OF THE dAPPS COMMEMORATIVE NFT",
                        commitDisabled: u,
                        executeTransaction: function() {
                            return j()
                        },
                        buttonText: m,
                        children: [(0, i.jsxs)("div", {
                            className: "PopupListWrap",
                            children: [(0, i.jsx)("header", {
                                children: (0, i.jsx)("h3", {
                                    children: "NFT SUMMARY"
                                })
                            }), (0, i.jsx)("div", {
                                className: "PopupListScrollWrap",
                                children: (0, i.jsxs)("div", {
                                    className: "PopupListScrollWrapInner",
                                    children: [(0, i.jsx)("div", {
                                        className: "PopupIconWrap",
                                        children: (0, i.jsx)("span", {
                                            className: "DiamondIcon",
                                            children: (0, i.jsx)(N.Z, {})
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "PopupItemInfo",
                                        children: (0, i.jsx)("table", {
                                            className: "PopupItemInfoTable",
                                            children: (0, i.jsxs)("tbody", {
                                                children: [(0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Collection:"
                                                    }), (0, i.jsx)("td", {
                                                        children: "EverRise Mementos"
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Name:"
                                                    }), (0, i.jsxs)("td", {
                                                        children: ["COMMEMORATIVE NFT (", p.l_[e.chainId].chainName, ")"]
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    children: [(0, i.jsx)("th", {
                                                        children: "Type:"
                                                    }), (0, i.jsx)("td", {
                                                        children: "Commemorative NFT"
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "TaxFees",
                            children: [(0, i.jsxs)("span", {
                                children: ["Mint fee: ", (0, g.commify)(t ? t.toFixed(4) : "0.00"), " ", p.l_[e.chainId].nativeCurrency.name]
                            }), (0, i.jsxs)("p", {
                                children: ["Rise fee: ", (0, g.commify)(e.riseMintFee ? e.riseMintFee.toFixed(4) : "0.00"), " RISE"]
                            })]
                        })]
                    })
                })
            };

            function $(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function z(e, n, t, r, s, i, a) {
                try {
                    var c = e[i](a),
                        o = c.value
                } catch (l) {
                    return void t(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(r, s)
            }

            function V(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(n, t);

                        function a(e) {
                            z(i, r, s, a, c, "next", e)
                        }

                        function c(e) {
                            z(i, r, s, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function K(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, s, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (o) {
                            c = !0, s = o
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw s
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return $(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return $(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y() {
                var e, n = (0, d.rK)(),
                    t = (n.provider, n.account),
                    r = n.signer,
                    m = (n.walletName, n.signPersonalMessage, n.getTokenBalance, n.chainId),
                    v = (0, a.useState)(!1),
                    j = v[0],
                    N = v[1],
                    b = (0, a.useState)(),
                    y = b[0],
                    w = b[1],
                    C = (0, a.useState)(),
                    k = C[0],
                    T = C[1],
                    D = (0, a.useState)(!1),
                    F = D[0],
                    P = D[1],
                    M = (0, a.useState)(!1),
                    E = M[0],
                    A = M[1],
                    L = (0, a.useState)(!1),
                    W = L[0],
                    H = L[1],
                    U = (0, a.useState)(new(f())(0)),
                    $ = U[0],
                    z = U[1],
                    Y = (0, a.useState)(new(f())(0)),
                    Q = Y[0],
                    J = Y[1],
                    X = (0, a.useState)(!1),
                    q = X[0],
                    ee = X[1],
                    ne = (0, a.useState)(!1),
                    te = ne[0],
                    re = ne[1],
                    se = (0, a.useState)({
                        _nextClaim: _.O$.from(0),
                        canClaim: !1,
                        isStaker: !1,
                        canDistribute: !1,
                        isNftHolder: !1,
                        timeToNextDistribution: _.O$.from(0),
                        amountToDistribute: _.O$.from(0)
                    }),
                    ie = se[0],
                    ae = se[1],
                    ce = (0, a.useState)({
                        seed: _.O$.from(0),
                        distributedAmount: _.O$.from(0),
                        distributions: 0,
                        claims: 0
                    }),
                    oe = ce[0],
                    le = ce[1],
                    ue = (0, a.useState)(0),
                    de = ue[0],
                    he = ue[1],
                    pe = (0, a.useState)(Date.now),
                    xe = pe[0],
                    me = pe[1],
                    fe = (0, a.useState)(""),
                    ve = fe[0],
                    je = fe[1],
                    ge = (0, a.useState)(""),
                    Ne = ge[0],
                    be = ge[1],
                    ye = (0, a.useState)("0"),
                    we = ye[0],
                    Ie = ye[1],
                    Se = (0, a.useState)(new(f())(0)),
                    Ce = (Se[0], Se[1]),
                    ke = (0, a.useState)(new(f())(0)),
                    Te = (ke[0], ke[1]),
                    De = (0, a.useState)(new(f())(0)),
                    Fe = De[0],
                    Pe = De[1],
                    Me = (0, a.useState)(!1),
                    Ee = (Me[0], Me[1]),
                    Ae = (0, a.useState)(!1),
                    Re = Ae[0],
                    Be = Ae[1],
                    Oe = function() {
                        var e = setInterval((function() {
                            he(de + 1)
                        }), 1e3);
                        return function() {
                            return clearInterval(e)
                        }
                    };
                (0, a.useEffect)((function() {
                    var e = function() {
                        var e = V(s().mark((function e() {
                            var n, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, x.dK)(m, r, t);
                                    case 3:
                                        n = e.sent, console.log("distribution stats ", n), le(n), e.next = 10;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0);
                                    case 10:
                                        return e.prev = 10, e.next = 13, (0, x.f4)(m, r, t);
                                    case 13:
                                        i = e.sent, console.log(i), console.log("Time to Next claim ", i.timeToNextDistribution.toNumber()), console.log("Next claim time ", new Date(1e3 * i._nextClaim.toNumber())), ae(i), i.isStaker ? be("EverRise Staker") : i.isNftHolder ? be("Achievement NFT Holder") : be("N/A"), Ie((+S.formatEther(i.amountToDistribute)).toFixed(2)), me(Date.now), console.log("distribution ", i), e.next = 27;
                                        break;
                                    case 24:
                                        e.prev = 24, e.t1 = e.catch(10), console.log(e.t1);
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8],
                                [10, 24]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    if (W) return Oe();
                    if (de % 30 === 0 && e(), ie.timeToNextDistribution.gt(_.O$.from(0))) {
                        var n = (Date.now() - xe) / 1e3,
                            i = ie.timeToNextDistribution.toNumber() - n;
                        if (0 === (i = i < 0 ? 0 : i)) return je("Now"), Oe();
                        var a = i / 3600 | 0,
                            c = (i -= 3600 * a) / 60 | 0,
                            o = 0 | (i -= 60 * c),
                            l = "";
                        a > 1 ? l += "".concat(a, " hrs ") : 1 === a && (l += "".concat(a, " hr ")), c > 1 ? l += "".concat(c, " mins ") : 1 === c && (l += "".concat(c, " min ")), o >= 1 && (l += "".concat(o, " s ")), je(l)
                    } else je("Checking");
                    return Oe()
                }), [de, m, r, t]), (0, a.useEffect)((function() {
                    var e = function() {
                        var e = V(s().mark((function e() {
                            var n, t, i, a, c, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, r) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (n = !!p.l_[m].commemerateAddress, Ee(n), n) {
                                            e.next = 9;
                                            break
                                        }
                                        Ce(new(f())(0)), Te(new(f())(0)), Pe(new(f())(0)), e.next = 24;
                                        break;
                                    case 9:
                                        return e.t0 = Te, e.next = 12, (0, x.RM)(m, r);
                                    case 12:
                                        return e.t1 = e.sent, (0, e.t0)(e.t1), e.t2 = Pe, e.next = 17, (0, x.rT)(m, r);
                                    case 17:
                                        return e.t3 = e.sent, (0, e.t2)(e.t3), e.t4 = Ce, e.next = 22, (0, x.ck)(m, r);
                                    case 22:
                                        e.t5 = e.sent, (0, e.t4)(e.t5);
                                    case 24:
                                        return e.next = 26, (0, x.y7)(m, r);
                                    case 26:
                                        return t = e.sent, e.prev = 27, e.next = 30, (0, x.B6)(m, r);
                                    case 30:
                                        i = e.sent, J(i), e.next = 37;
                                        break;
                                    case 34:
                                        e.prev = 34, e.t6 = e.catch(27), console.log("error getting dist fee ", e.t6);
                                    case 37:
                                        return e.next = 39, _e();
                                    case 39:
                                        if (z(t), N(!0), a = p.l_[m].migrationAddress) {
                                            e.next = 44;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 44:
                                        return e.next = 46, (0, h.KB)(m, r, a, 1e4);
                                    case 46:
                                        return c = e.sent, e.next = 49, Promise.all(c.map(function() {
                                            var e = V(s().mark((function e(n) {
                                                var t;
                                                return s().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, (0, x.A$)(m, r, new(f())(n.txnId));
                                                        case 2:
                                                            return t = e.sent, n.hasClaimed = t, e.abrupt("return", n);
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(n) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 49:
                                        o = e.sent, w(o), e.next = 56;
                                        break;
                                    case 53:
                                        e.prev = 53, e.t7 = e.catch(0), console.log("Failed to get details about nfts and rewards");
                                    case 56:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 53],
                                [27, 34]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e(), console.log("loading")
                }), [r, m, t]);
                var _e = function() {
                        var e = V(s().mark((function e() {
                            var n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, x.nm)(m, r, t);
                                    case 2:
                                        n = e.sent, console.log("can claim response ", n), re(n.canClaim), ee(n.claimed);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Le = function() {
                        var e = V(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        H(!0);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    We = function() {
                        var e = V(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, x.Qm)(m, r);
                                    case 2:
                                        e.sent;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ge = K((0, B.ac)("(min-width: 600px)"), 1)[0];
                return (0, i.jsx)(l.F, {
                    meta: (0, i.jsx)(o.h, {
                        title: "NFT Staking Lab",
                        description: "EverRise NFT Staking Lab",
                        dappUrl: "/everstake",
                        icon: c.$
                    }),
                    dappClass: "EverStakeClaim",
                    children: (0, i.jsxs)("div", {
                        className: "EverGridContent",
                        children: [(0, i.jsx)(u.Z, {}), (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: "ComponentBG TableHeading",
                                children: [(0, i.jsx)("div", {
                                    className: "ClaimNftTitle",
                                    children: (0, i.jsx)("p", {
                                        children: "Reward Distributor "
                                    })
                                }), (0, i.jsx)("div", {
                                    children: (0, i.jsxs)("div", {
                                        className: "DistributorWrap",
                                        children: [(0, i.jsxs)("div", {
                                            className: "DistributorStats",
                                            children: [(0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Distributor"
                                                }), (0, i.jsx)("p", {
                                                    children: Ne
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Chain"
                                                }), (0, i.jsx)("p", {
                                                    children: null === (e = p.l_[m]) || void 0 === e ? void 0 : e.name
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Next Distribution"
                                                }), (0, i.jsxs)("p", {
                                                    children: [(0, g.commify)(we), " RISE"]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Countdown"
                                                }), (0, i.jsx)("p", {
                                                    children: ve
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "DistributeButton RoundButton",
                                            children: (0, i.jsx)("div", {
                                                className: "RoundButtonInner",
                                                children: (0, i.jsx)("button", {
                                                    onClick: function() {
                                                        return We()
                                                    },
                                                    disabled: !((ie.isNftHolder || ie.isStaker) && (ie.timeToNextDistribution.eq(_.O$.from(0)) || "Now" === ve)),
                                                    children: (0, i.jsx)(O.Z, {})
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("table", {
                                className: "EverTable DistributorTable",
                                children: [(0, i.jsx)("thead", {
                                    className: "ComponentBG NoRounding",
                                    children: (0, i.jsxs)("tr", {
                                        children: [(0, i.jsx)("th", {
                                            children: Ge ? "Total Amount" : "Amount"
                                        }), (0, i.jsx)("th", {
                                            children: Ge ? "Distributions" : "Count"
                                        }), (0, i.jsx)("th", {
                                            children: "Claims"
                                        }), (0, i.jsx)("th", {
                                            children: "Action"
                                        })]
                                    })
                                }), (0, i.jsx)("tbody", {
                                    children: (0, i.jsxs)("tr", {
                                        className: "ComponentBG NoRounding",
                                        children: [(0, i.jsx)("td", {
                                            children: oe.distributedAmount ? (+S.formatEther(oe.distributedAmount)).toFixed(2) : "0.00"
                                        }), (0, i.jsx)("td", {
                                            children: oe.distributions ? oe.distributions.toString() : "0"
                                        }), (0, i.jsx)("td", {
                                            children: oe.claims ? oe.claims.toString() : "0"
                                        }), (0, i.jsx)("td", {
                                            children: (0, i.jsx)("div", {
                                                children: (0, i.jsx)("button", {
                                                    disabled: !(oe.distributions > oe.claims),
                                                    className: "ColdButton",
                                                    onClick: function() {
                                                        return Le()
                                                    },
                                                    children: oe.distributions > oe.claims ? "Claim" : "Nothing to Claim"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(I, {
                            toggleDispaly: F,
                            nft: k,
                            signer: r,
                            chainId: m,
                            setTogglePopup: function(e) {
                                return P(e)
                            }
                        }), (0, i.jsx)(G, {
                            toggleDisplay: W,
                            setTogglePopup: function(e) {
                                return H(e)
                            },
                            signer: r,
                            chainId: m,
                            account: t,
                            riseMintFee: Q
                        }), (0, i.jsx)(R, {
                            signer: r,
                            riseMintFee: $,
                            account: t,
                            chainId: m,
                            toggleDispaly: E,
                            setTogglePopup: function(e) {
                                return function(e) {
                                    _e(), A(e)
                                }(e)
                            }
                        }), (0, i.jsx)(Z, {
                            signer: r,
                            riseMintFee: Fe,
                            account: t,
                            chainId: m,
                            toggleDisplay: Re,
                            setTogglePopup: function(e) {
                                return function(e) {
                                    Be(e)
                                }(e)
                            }
                        }), j && (0, i.jsxs)("div", {
                            className: "marginTop20",
                            children: [(0, i.jsx)("div", {
                                className: "ComponentBG NoRoundingBottom",
                                children: (0, i.jsx)("div", {
                                    className: "ClaimNftTitle",
                                    children: (0, i.jsx)("p", {
                                        className: "Bold",
                                        children: "EverRise OG Hodler"
                                    })
                                })
                            }), (0, i.jsxs)("table", {
                                className: "EverTable ClaimMigrationTable",
                                children: [(0, i.jsx)("thead", {
                                    className: "ComponentBG NoRounding",
                                    children: (0, i.jsxs)("tr", {
                                        children: [(0, i.jsx)("th", {
                                            children: "ID"
                                        }), (0, i.jsx)("th", {
                                            children: "DATE"
                                        }), (0, i.jsx)("th", {
                                            children: "V1 RISE"
                                        }), (0, i.jsx)("th", {
                                            children: "V2 RISE"
                                        }), (0, i.jsx)("th", {
                                            children: "NFT"
                                        }), (0, i.jsx)("th", {
                                            children: "Action"
                                        })]
                                    })
                                }), (0, i.jsx)("tbody", {
                                    children: y && y.map((function(e) {
                                        return (0, i.jsxs)("tr", {
                                            className: "ComponentBG NoRounding",
                                            children: [(0, i.jsx)("td", {
                                                children: e.txnId
                                            }), (0, i.jsx)("td", {
                                                children: e.timestamp
                                            }), (0, i.jsx)("td", {
                                                children: (0, g.commify)(Number(e.amountOut).toFixed(0))
                                            }), (0, i.jsx)("td", {
                                                children: (0, g.commify)(Number(e.amountIn).toFixed(2))
                                            }), (0, i.jsx)("td", {
                                                children: e.nft
                                            }), (0, i.jsx)("td", {
                                                children: (0, i.jsx)("div", {
                                                    children: e.nft && "" !== e.nft && (e.hasClaimed ? (0, i.jsx)("span", {
                                                        children: (0, i.jsx)("p", {
                                                            children: "Claimed"
                                                        })
                                                    }) : (0, i.jsx)("button", {
                                                        disabled: e.hasClaimed,
                                                        className: "ColdButton",
                                                        onClick: function() {
                                                            return T(e), void P(!0)
                                                        },
                                                        children: e.hasClaimed ? "Claimed" : "Claim"
                                                    }))
                                                })
                                            })]
                                        })
                                    }))
                                })]
                            }), (0, i.jsx)("div", {
                                className: "ComponentBG marginTop15",
                                children: (0, i.jsxs)("div", {
                                    className: "HodlPassWrap",
                                    children: [(0, i.jsx)("div", {
                                        className: "ClaimNftTitle",
                                        children: (0, i.jsx)("p", {
                                            className: "Bold",
                                            children: "EverRise HODL Pass"
                                        })
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsxs)("button", {
                                            className: "ColdButton",
                                            disabled: !te || q,
                                            onClick: function() {
                                                return A(!0)
                                            },
                                            children: [" ", te ? q ? "Claimed" : "Claim" : "Nothing to Claim"]
                                        })
                                    })]
                                })
                            })]
                        }), !j && t && (0, i.jsx)("div", {
                            children: "Loading"
                        }), !j && !t && (0, i.jsx)("div", {
                            children: "Please connect wallet"
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [8497, 9976, 5044, 9774, 2888, 179], (function() {
            return n = 4346, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);