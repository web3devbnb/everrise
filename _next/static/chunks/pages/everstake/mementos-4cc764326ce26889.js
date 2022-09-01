(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [243], {
        99277: function(e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/everstake/mementos", function() {
                return n(64946)
            }])
        },
        1001: function(e, r, n) {
            "use strict";
            var t = n(85893),
                a = n(41664),
                i = n.n(a);
            r.Z = function(e) {
                var r;
                return (0, t.jsxs)("li", {
                    className: "ComponentBG StakingNftListItem",
                    children: [(0, t.jsxs)("div", {
                        className: "StakeDisplay NFTDisplay",
                        children: [(0, t.jsx)("div", {
                            className: "FullImagePreview",
                            children: (0, t.jsx)("img", {
                                src: e.memeNft.metaData.image,
                                alt: "NFT Preview",
                                width: "70",
                                height: "70"
                            })
                        }), (0, t.jsx)(i(), {
                            href: "/everstake/memenft/".concat(e.memeNft.tokenId.toString()),
                            children: (0, t.jsx)("a", {
                                className: "FloatLink"
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "StakeSummary",
                        children: (0, t.jsxs)("div", {
                            children: [(0, t.jsxs)("p", {
                                className: "SmallText Thumb Bold",
                                children: ["EverRise Mementos (", e.memeNft.count.toString(), ")"]
                            }), (0, t.jsx)("p", {
                                className: "SmallText Thumb",
                                children: e.memeNft.metaData.name
                            }), (0, t.jsx)("p", {
                                className: "SmallText Thumb Caps Color3",
                                children: null === (r = e.memeNft.metaData.attributes.find((function(e) {
                                    return "Type" == e.trait_type
                                }))) || void 0 === r ? void 0 : r.value
                            })]
                        })
                    })]
                })
            }
        },
        58952: function(e, r, n) {
            "use strict";
            var t = n(85893),
                a = n(92684),
                i = n(68527),
                s = n(41664),
                l = n.n(s);

            function c(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function o(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (t = n.next()).done) && (i.push(t.value), !r || i.length !== r); s = !0);
                        } catch (c) {
                            l = !0, a = c
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return c(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            r.Z = function(e) {
                o((0, a.ac)("(min-width: 480px)"), 1)[0];
                return (0, t.jsx)("div", {
                    className: "EverStakeNav ComponentBG",
                    children: (0, t.jsx)("div", {
                        className: "EverStakeNavWrapInner",
                        children: (0, t.jsx)("nav", {
                            children: (0, t.jsxs)(i.aV, {
                                display: "flex",
                                width: "100%",
                                children: [(0, t.jsx)(i.HC, {
                                    children: (0, t.jsx)(l(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, t.jsx)(i.rU, {
                                            children: (0, t.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Stake"
                                            })
                                        })
                                    })
                                }), (0, t.jsx)(i.HC, {
                                    children: (0, t.jsx)(l(), {
                                        href: "/everstake/manage",
                                        passHref: !0,
                                        children: (0, t.jsxs)(i.rU, {
                                            children: ["", (0, t.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Manage"
                                            })]
                                        })
                                    })
                                }), (0, t.jsx)(i.HC, {
                                    children: (0, t.jsx)(l(), {
                                        href: "/everstake/mementos",
                                        passHref: !0,
                                        children: (0, t.jsxs)(i.rU, {
                                            children: ["", (0, t.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "NFTs"
                                            })]
                                        })
                                    })
                                }), (0, t.jsx)(i.HC, {
                                    children: (0, t.jsx)(l(), {
                                        href: "/everstake/claim",
                                        passHref: !0,
                                        children: (0, t.jsxs)(i.rU, {
                                            children: ["", (0, t.jsx)(i.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Claim"
                                            })]
                                        })
                                    })
                                }), (0, t.jsx)(i.LZ, {})]
                            })
                        })
                    })
                })
            }
        },
        64946: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return j
                }
            });
            var t = n(34051),
                a = n.n(t),
                i = n(85893),
                s = n(67294),
                l = n(73934),
                c = n(50680),
                o = n(16894),
                u = n(58952),
                f = n(312),
                d = n(9473),
                m = n(1001),
                h = n(90606);

            function p(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function v(e, r, n, t, a, i, s) {
                try {
                    var l = e[i](s),
                        c = l.value
                } catch (o) {
                    return void n(o)
                }
                l.done ? r(c) : Promise.resolve(c).then(t, a)
            }

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return p(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, r)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j() {
                var e = (0, f.rK)(),
                    r = (e.provider, e.account),
                    n = e.signer,
                    t = (e.walletName, e.signPersonalMessage, e.getTokenBalance, e.chainId),
                    p = (0, s.useState)(!1),
                    j = (p[0], p[1], (0, d.v9)((function(e) {
                        return e.memeNftReducer
                    })).nfts),
                    y = (0, s.useState)([]),
                    N = (y[0], y[1], (0, s.useState)([])),
                    b = N[0],
                    S = N[1],
                    g = (0, s.useState)(""),
                    k = (g[0], g[1], (0, s.useState)(!1)),
                    w = k[0],
                    T = (k[1], (0, d.I0)());
                (0, s.useEffect)((function() {
                    var e = function() {
                        var e, i = (e = a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, h.To)(r, t, n, T);
                                    case 5:
                                        e.next = 10;
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
                            var r = this,
                                n = arguments;
                            return new Promise((function(t, a) {
                                var i = e.apply(r, n);

                                function s(e) {
                                    v(i, t, a, s, l, "next", e)
                                }

                                function l(e) {
                                    v(i, t, a, s, l, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                        return function() {
                            return i.apply(this, arguments)
                        }
                    }();
                    w || (e(), console.log("loading"))
                }), [n, t]), (0, s.useEffect)((function() {
                    S(x(j))
                }), [j]);
                return (0, i.jsx)(o.F, {
                    meta: (0, i.jsx)(c.h, {
                        title: "NFT Staking Lab",
                        description: "EverRise NFT Staking Lab",
                        dappUrl: "/everstake",
                        icon: l.$
                    }),
                    dappClass: "EverStakeDisplay",
                    children: (0, i.jsxs)("div", {
                        className: "EverGridContent",
                        children: [(0, i.jsx)(u.Z, {}), (0, i.jsx)("div", {
                            className: "StakingManagerHeader"
                        }), (0, i.jsx)("ul", {
                            className: "EverStakeUserNftList EverStakeUserNftListWrap",
                            children: b.map((function(e, r) {
                                return (0, i.jsx)(m.Z, {
                                    memeNft: e
                                }, r)
                            }))
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [8497, 9976, 9774, 2888, 179], (function() {
            return r = 99277, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);