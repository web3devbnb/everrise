"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5994], {
        83190: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return P
                }
            });
            var r = t(34051),
                i = t.n(r),
                s = t(85893),
                a = t(67294),
                o = t(36485),
                c = t(68527),
                l = t(15193),
                u = t(41664),
                d = t.n(u),
                f = t(24281),
                m = function(e) {
                    var n = (0, a.useRef)(null);
                    return (0, a.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, s.jsxs)("ul", {
                                children: [(0, s.jsx)("li", {
                                    children: (0, s.jsx)(d(), {
                                        href: "/everstake/nft",
                                        children: (0, s.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, s.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, s.jsx)("span", {})]
                                        })
                                    })
                                }), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(f.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                },
                p = t(7467),
                h = function(e) {
                    var n = (0, a.useRef)(null),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        i = t[1],
                        o = (0, a.useState)(null),
                        c = o[0];
                    o[1];
                    return (0, a.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && i(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    })), (0, s.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, s.jsxs)("header", {
                            children: [(0, s.jsx)("h3", {
                                children: "Bridging From:"
                            }), (0, s.jsx)("p", {
                                children: (0, s.jsx)("span", {
                                    children: e.chainName
                                })
                            })]
                        }), r && (0, s.jsx)(m, {
                            toggleDropdown: r,
                            setToggleDropdown: i,
                            style: c,
                            nft: e.nft
                        }, 1), (0, s.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, s.jsx)("ul", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, s.jsx)(p.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "FromItem",
                                    itemMenu: null
                                }, 1)
                            })
                        })]
                    })
                },
                x = function(e) {
                    var n = (0, a.useRef)(null);
                    (0, a.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    }));
                    var t = function(n) {
                        return (0, s.jsx)("li", {
                            children: (0, s.jsx)("button", {
                                onClick: function() {
                                    return t = "".concat(n.chainId), e.setSelectedChainId(parseInt(t)), void e.setToggleDropdown(!1);
                                    var t
                                },
                                children: n.name
                            })
                        }, n.chainId)
                    };
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            children: (0, s.jsx)("ul", {
                                children: e.targetChains.map((function(e, n) {
                                    return t(e)
                                }))
                            })
                        })
                    })
                },
                v = function(e) {
                    var n = (0, a.useRef)(null),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        i = t[1],
                        o = (0, a.useState)("Select Chain"),
                        c = o[0],
                        l = o[1];
                    return (0, a.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && i(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    })), (0, a.useEffect)((function() {
                        e.targetChainId && e.targetChains.map((function(n, t) {
                            n.chainId === e.targetChainId && l(n.name)
                        }))
                    }), [e.targetChainId]), (0, s.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, s.jsxs)("header", {
                            className: "HeaderMultiSelect",
                            children: [(0, s.jsx)("h3", {
                                children: "Bridging To:"
                            }), (0, s.jsx)("p", {
                                children: (0, s.jsx)("button", {
                                    className: "ToggleDropdownBtn NftSelectOptionDropdownBtn PArrow down",
                                    onClick: function() {
                                        i(!r)
                                    },
                                    children: c
                                })
                            }), (0, s.jsx)("div", {
                                className: "PopupRelativeParent",
                                children: r && !e.disableDropDown && (0, s.jsx)(x, {
                                    toggleDropdown: r,
                                    setToggleDropdown: i,
                                    setSelectedChainId: e.setSelectedChainId,
                                    targetChains: e.targetChains
                                }, 1)
                            })]
                        }), (0, s.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, s.jsx)("ul", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, s.jsx)(p.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "ToItem",
                                    itemMenu: null
                                }, 1)
                            })
                        })]
                    })
                },
                g = t(9810),
                j = t(312),
                w = JSON.parse('{"1":{"nftBridgeAddress":"0x60493F5A9b98ad1E2A41b8D3a62A320fF9f69Ab1","tokenAddress":"0xC17c30e98541188614dF99239cABD40280810cA3","stakeAddress":"0x23cD2E6b283754Fd2340a75732f9DdBb5d11807e","supportedChains":[{"chainId":56,"name":"BNB Chain"},{"chainId":137,"name":"Polygon"},{"chainId":250,"name":"Fantom"},{"chainId":43114,"name":"Avalanche"}],"mintFees":{"56":"0.01","137":"0.01","250":"0.01","43114":"0.01"}},"56":{"nftBridgeAddress":"0x60493F5A9b98ad1E2A41b8D3a62A320fF9f69Ab1","tokenAddress":"0xC17c30e98541188614dF99239cABD40280810cA3","stakeAddress":"0x23cD2E6b283754Fd2340a75732f9DdBb5d11807e","supportedChains":[{"chainId":1,"name":"Ethereum"},{"chainId":137,"name":"Polygon"},{"chainId":250,"name":"Fantom"},{"chainId":43114,"name":"Avalanche"}],"mintFees":{"1":"0.01","137":"0.01","250":"0.01","43114":"0.01"}},"97":{"nftBridgeAddress":"0x3DC4f6EB9C79d153240b5d9DC134f61d0BfFF695","tokenAddress":"0x106A07a51551F5151822508885643cDD66ee7aD5","stakeAddress":"0x83650FA062682965E9010103Ff208A895230e2C8","supportedChains":[{"chainId":80001,"name":"Polygon"}],"mintFees":{"80001":"0.03"}},"137":{"nftBridgeAddress":"0x60493F5A9b98ad1E2A41b8D3a62A320fF9f69Ab1","tokenAddress":"0xC17c30e98541188614dF99239cABD40280810cA3","stakeAddress":"0x23cD2E6b283754Fd2340a75732f9DdBb5d11807e","supportedChains":[{"chainId":1,"name":"Ethereum"},{"chainId":56,"name":"BNB Chain"},{"chainId":250,"name":"Fantom"},{"chainId":43114,"name":"Avalanche"}],"mintFees":{"1":"3","56":"3","250":"3","43114":"3"}},"250":{"nftBridgeAddress":"0x60493F5A9b98ad1E2A41b8D3a62A320fF9f69Ab1","tokenAddress":"0xC17c30e98541188614dF99239cABD40280810cA3","stakeAddress":"0x23cD2E6b283754Fd2340a75732f9DdBb5d11807e","supportedChains":[{"chainId":1,"name":"Ethereum"},{"chainId":56,"name":"BNB Chain"},{"chainId":137,"name":"Polygon"},{"chainId":43114,"name":"Avalanche"}],"mintFees":{"1":"3","56":"3","137":"3","43114":"3"}},"43114":{"nftBridgeAddress":"0x60493F5A9b98ad1E2A41b8D3a62A320fF9f69Ab1","tokenAddress":"0xC17c30e98541188614dF99239cABD40280810cA3","stakeAddress":"0x23cD2E6b283754Fd2340a75732f9DdBb5d11807e","supportedChains":[{"chainId":1,"name":"Ethereum"},{"chainId":56,"name":"BNB Chain"},{"chainId":137,"name":"Polygon"},{"chainId":250,"name":"Fantom"}],"mintFees":{"1":"0.05","56":"0.05","137":"0.05","250":"0.05"}},"80001":{"nftBridgeAddress":"0x7E6d984E22506882E1f55F11F8387A36e25ab90F","tokenAddress":"0x106A07a51551F5151822508885643cDD66ee7aD5","stakeAddress":"0x83650FA062682965E9010103Ff208A895230e2C8","supportedChains":[{"chainId":97,"name":"BSC"}],"mintFees":{"97":"0.02"}}}'),
                k = t(81380),
                S = t(9473),
                A = t(90079),
                y = t(12372),
                N = t(44431),
                b = t.n(N),
                I = t(56371);

            function T(e, n, t, r, i, s, a) {
                try {
                    var o = e[s](a),
                        c = o.value
                } catch (l) {
                    return void t(l)
                }
                o.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function D(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var s = e.apply(n, t);

                        function a(e) {
                            T(s, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            T(s, r, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var P = function(e) {
                var n, t = (0, a.useState)(),
                    r = t[0],
                    u = t[1],
                    d = (0, a.useState)(),
                    f = d[0],
                    m = d[1],
                    p = (0, a.useState)(),
                    x = p[0],
                    N = p[1],
                    T = (0, a.useState)(),
                    P = T[0],
                    E = T[1],
                    C = (0, a.useState)([]),
                    F = C[0],
                    L = C[1],
                    B = (0, a.useState)(),
                    O = B[0],
                    R = B[1],
                    M = (0, a.useState)(),
                    W = M[0],
                    Z = M[1],
                    z = (0, a.useState)(),
                    U = z[0],
                    V = z[1],
                    _ = (0, a.useState)(null),
                    H = _[0],
                    q = _[1],
                    G = (0, a.useState)(),
                    Y = G[0],
                    $ = G[1],
                    K = (0, a.useState)(new(b())(0)),
                    Q = K[0],
                    X = K[1],
                    J = (0, S.I0)(),
                    ee = (0, j.rK)(),
                    ne = ee.account,
                    te = ee.signer,
                    re = ee.etherWeb3Provider,
                    ie = ee.walletName,
                    se = ee.signBridgePersonalMessage,
                    ae = ee.balance,
                    oe = ee.chainId;
                (0, a.useEffect)((function() {
                    var n = (0, g.X$)(e.nft);
                    m(n), (0, A.vY)(te).then((function(e) {
                        X(e)
                    }))
                }), [e.nft]);
                var ce = function() {
                    return Q.isLessThan(f)
                };
                (0, a.useEffect)((function() {
                    L(w[oe.toString()].supportedChains)
                }), [oe]);
                var le = function() {
                        var n = D(i().mark((function n() {
                            var t;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (R(!0), void 0 !== r) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return", void 0);
                                    case 3:
                                        return n.prev = 3, n.next = 6, (0, g.PQ)(ne, re, ie, se, oe, r, w[r.toString()].nftBridgeAddress, e.nft);
                                    case 6:
                                        t = n.sent, console.log(t), t.feeAmount && (N(t), $(w[oe].mintFees[r.toString()])), R(!1), n.next = 17;
                                        break;
                                    case 12:
                                        n.prev = 12, n.t0 = n.catch(3), console.log(n.t0), R(!1), e.setToggleBridgePopup(!1);
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 12]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    ue = function() {
                        var n = D(i().mark((function n() {
                            var t, r;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (V(!0), x && P) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return n.prev = 3, n.next = 7, (0, g.Dr)(ne, oe, te, w[oe].nftBridgeAddress, ae, x, Y);
                                    case 7:
                                        if (r = n.sent, console.log(r), !(null === (t = r) || void 0 === t ? void 0 : t.transactionHash)) {
                                            n.next = 14;
                                            break
                                        }
                                        return q(r), n.next = 13, (0, A.kD)(te, J);
                                    case 13:
                                        return n.abrupt("return");
                                    case 14:
                                        V(!1), n.next = 22;
                                        break;
                                    case 17:
                                        n.prev = 17, n.t0 = n.catch(3), console.log(n.t0), V(!1), e.setToggleBridgePopup(!1);
                                    case 22:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 17]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    de = function() {
                        var e = D(i().mark((function e() {
                            var n;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Z(!0), void 0 !== r) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", void 0);
                                    case 3:
                                        return e.prev = 3, e.next = 6, (0, g.Q3)(te, w[oe.toString()].tokenAddress, w[oe.toString()].nftBridgeAddress, x.amount, x.nftId);
                                    case 6:
                                        n = e.sent, console.log(n), E(n), Z(!1), e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(3), console.log(e.t0), Z(!1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "SelectOptionPopupWrap EverStakeBridgePopup",
                        children: [(0, s.jsxs)("div", {
                            className: "SelectOptionPopupInner",
                            children: [(0, s.jsxs)("div", {
                                className: "SelectOptionPopupHeader",
                                children: [(0, s.jsx)("h2", {
                                    children: "BRIDGE"
                                }), (0, s.jsx)("span", {
                                    className: "ExitIcon",
                                    onClick: function() {
                                        return e.setToggleBridgePopup(!1)
                                    },
                                    children: (0, s.jsx)(o.Z, {})
                                })]
                            }), (0, s.jsx)("div", {
                                className: "SelectOptionPopupContent",
                                children: (0, s.jsxs)("div", {
                                    className: "ColumnContent",
                                    children: [!H && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(h, {
                                            nft: e.nft,
                                            chainName: null === (n = y.l_[oe]) || void 0 === n ? void 0 : n.chainName
                                        }), (0, s.jsxs)("div", {
                                            className: "ActionToListArrows",
                                            children: [(0, s.jsx)("span", {
                                                className: "PArrow down"
                                            }), (0, s.jsx)("span", {
                                                className: "PArrow down"
                                            })]
                                        }), (0, s.jsx)(v, {
                                            disableDropDown: void 0 !== x && void 0 !== x.feeAmount || O,
                                            nft: e.nft,
                                            setSelectedChainId: u,
                                            targetChainId: r,
                                            targetChains: F
                                        }), e.nft && (0, s.jsx)(c.xv, {
                                            className: "TaxFees",
                                            fontSize: "sm",
                                            children: "Cross-chain Fee: ".concat(f && (0, I.commify)(f), " RISE")
                                        }), Y && (0, s.jsx)(c.xv, {
                                            fontSize: "sm",
                                            children: "Mint Fee: ".concat(Y, " ").concat((0, k.xP)().get(oe))
                                        }), x && x.feeAmount && (0, s.jsx)(c.xv, {
                                            fontSize: "sm",
                                            children: "Transfer Gas Fee: ".concat(x.feeAmount, " ").concat((0, k.xP)().get(oe))
                                        }), (0, s.jsxs)("div", {
                                            className: "ActionPopupBottom",
                                            children: [(0, s.jsx)(l.zx, {
                                                className: "StakingActionSubmitBtn BridgeButton",
                                                onClick: function() {
                                                    return le()
                                                },
                                                isLoading: O,
                                                loadingText: "Waiting for signature...",
                                                disabled: void 0 === r || void 0 !== x && void 0 !== x.feeAmount || O || ce(),
                                                children: ce() ? "RISE Low" : "Sign Transaction"
                                            }), (0, s.jsx)(l.zx, {
                                                className: "StakingActionSubmitBtn BridgeButton",
                                                isLoading: W,
                                                onClick: function() {
                                                    return de()
                                                },
                                                loadingText: "Waiting for approval...",
                                                disabled: !x || !!P || W,
                                                children: "Approve"
                                            }), (0, s.jsx)(l.zx, {
                                                isLoading: U,
                                                className: "StakingActionSubmitBtn BridgeButton",
                                                onClick: function() {
                                                    return ue()
                                                },
                                                loadingText: "Processing...",
                                                disabled: !x || !P || U || ce(),
                                                children: "Transfer"
                                            })]
                                        })]
                                    }), H && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("p", {
                                            children: "Transaction completed"
                                        }), (0, s.jsx)(c.rU, {
                                            target: "_blank",
                                            href: "".concat(y.l_[oe].blockExplorerUrls, "tx/").concat(H.transactionHash),
                                            children: "View Transaction"
                                        }), (0, s.jsx)(l.zx, {
                                            className: "StakingActionCancelBtn",
                                            onClick: function() {
                                                return e.setToggleBridgePopup(!1)
                                            },
                                            children: "Close"
                                        })]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "FullBGClick",
                            onClick: function() {
                                return e.setToggleBridgePopup(!1)
                            }
                        })]
                    })
                })
            }
        },
        65617: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return T
                }
            });
            var r = t(85893),
                i = t(67294),
                s = t(68527),
                a = t(44431),
                o = t.n(a),
                c = t(81380),
                l = function(e) {
                    var n = (0, i.useRef)(null);
                    (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    }));
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, r.jsx)("ul", {
                                children: c.Ys.filter((function(n) {
                                    return n.minMonths > e.minPeriod.toNumber()
                                })).map((function(n) {
                                    return (0, r.jsx)("li", {
                                        children: (0, r.jsxs)("button", {
                                            onClick: function() {
                                                return function(n) {
                                                    var t = new(o())(n);
                                                    e.setNewPeriod(t), e.setToggleDropdown(!1)
                                                }(n.minMonths)
                                            },
                                            children: ["x", n.minMonths, " - ", n.name]
                                        })
                                    })
                                }))
                            })
                        })
                    })
                },
                u = t(32978),
                d = t(7467),
                f = t(92684);

            function m(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        p(e, n, t[n])
                    }))
                }
                return e
            }

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (s.push(r.value), !n || s.length !== n); a = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return m(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                    var n, t = (0, i.useRef)(null),
                        s = (0, i.useState)(!1),
                        a = s[0],
                        c = s[1],
                        m = (0, i.useState)(null),
                        p = m[0],
                        v = m[1],
                        g = (0, i.useState)(e.nft),
                        j = g[0],
                        w = g[1];
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            t.current && !t.current.contains(e.target) && c(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    })), (0, i.useEffect)((function() {
                        w(h({}, e.nft))
                    }), [e.nft]);
                    var k = x((0, f.ac)("(max-width: 400px)"), 1)[0];
                    return (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Increase To:"
                            }), (0, r.jsx)("p", {
                                children: (0, r.jsxs)("button", {
                                    className: "ToggleDropdownBtn NftSelectOptionDropdownBtn PArrow down",
                                    onClick: function(e) {
                                        return function(e) {
                                            var n = e.target.getBoundingClientRect(),
                                                t = n.top,
                                                r = n.left;
                                            v({
                                                top: Math.ceil(t),
                                                left: Math.ceil(r)
                                            }), c(!a)
                                        }(e)
                                    },
                                    children: [(0, r.jsx)("span", {
                                        children: null === (n = (0, u.TS)(j.numberOfMonths)) || void 0 === n ? void 0 : n.name
                                    }), (0, r.jsxs)("span", {
                                        children: ["\xa0", k ? "" : "Stake"]
                                    })]
                                })
                            })]
                        }), a && (0, r.jsx)(l, {
                            setNewPeriod: function(n) {
                                w(h({}, e.nft, {
                                    numberOfMonths: n.toNumber(),
                                    unlockDate: new Date(Date.now() + 30 * n.toNumber() * 24 * 60 * 60 * 1e3)
                                })), e.setNewPeriod(n)
                            },
                            minPeriod: new(o())(e.nft.numberOfMonths),
                            toggleDropdown: a,
                            setToggleDropdown: c,
                            style: p
                        }, 1), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("ul", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, r.jsx)(d.Z, {
                                    nft: j,
                                    NftListItemClass: "ToItem",
                                    itemMenu: (0, r.jsx)("div", {
                                        className: "StakeActionItemDropdown StakeIncreaseOptions"
                                    })
                                }, 1)
                            })
                        })]
                    })
                },
                g = t(41664),
                j = t.n(g),
                w = t(24281),
                k = function(e) {
                    var n = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(j(), {
                                        href: "/everstake/nft/".concat(e.nft.nftId),
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, r.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, r.jsx)("span", {})]
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(w.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                };

            function S(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function A(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (s.push(r.value), !n || s.length !== n); a = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return S(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e) {
                    var n, t = (0, i.useRef)(null),
                        s = (0, i.useState)(!1),
                        a = s[0],
                        o = s[1],
                        l = (0, i.useState)(null),
                        u = l[0];
                    l[1];
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            t.current && !t.current.contains(e.target) && o(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }));
                    var m = A((0, f.ac)("(max-width: 400px)"), 1)[0];
                    return (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Increase From:"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("span", {
                                    children: null === (n = c.Ys.find((function(n) {
                                        return e.nft.numberOfMonths >= n.minMonths && e.nft.numberOfMonths < n.maxMonths
                                    }))) || void 0 === n ? void 0 : n.name
                                }), (0, r.jsxs)("span", {
                                    children: ["\xa0", m ? "" : "Stake"]
                                })]
                            })]
                        }), a && (0, r.jsx)(k, {
                            nft: e.nft,
                            toggleDropdown: a,
                            setToggleDropdown: o,
                            style: u
                        }, 1), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("ul", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, r.jsx)(d.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "FromItem",
                                    itemMenu: (0, r.jsx)("div", {
                                        className: "StakeActionItemDropdown"
                                    })
                                }, 1)
                            })
                        })]
                    })
                },
                N = t(90079),
                b = t(9473),
                I = t(11042),
                T = function(e) {
                    (0, i.useRef)(null);
                    var n = (0, i.useState)(new(o())(0)),
                        t = n[0],
                        a = n[1],
                        c = (0, b.I0)(),
                        l = (0, i.useState)("Extend"),
                        u = l[0],
                        d = l[1],
                        f = (0, i.useState)(!1),
                        m = f[0],
                        p = f[1];
                    return (0, r.jsxs)(I.Z, {
                        toggleDisplay: e.toggleDisplay,
                        setToggleDisplay: e.setToggleExtendPeriodPopup,
                        title: "EXTEND LOCK PERIOD",
                        commitDisabled: m,
                        buttonText: u,
                        executeTransaction: function() {
                            return (0, N.dl)(e.signer, e.nft.nftId, t, c)
                        },
                        children: [(0, r.jsx)("div", {
                            className: "popupInlineWarning",
                            children: (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("span", {
                                    children: "Warning: Extending the period of your stake will reset your lock period.\xa0"
                                }), (0, r.jsx)(s.rU, {
                                    href: "https://everrise.com/everstake#extend",
                                    children: (0, r.jsx)("a", {
                                        target: "_blank",
                                        children: "Learn More"
                                    })
                                })]
                            })
                        }), (0, r.jsx)(y, {
                            nft: e.nft
                        }), (0, r.jsxs)("div", {
                            className: "ActionToListArrows",
                            children: [(0, r.jsx)("span", {
                                className: "PArrow down"
                            }), (0, r.jsx)("span", {
                                className: "PArrow down"
                            })]
                        }), (0, r.jsx)(v, {
                            setNewPeriod: function(n) {
                                n.lte(e.nft.numberOfMonths) ? (p(!0), d("Months need to be longer than existing")) : (p(!1), d("Extend")), a(n)
                            },
                            nft: e.nft,
                            signer: e.signer
                        })]
                    })
                }
        },
        93509: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return L
                }
            });
            var r = t(85893),
                i = t(67294),
                s = t(68527),
                a = t(34051),
                o = t.n(a),
                c = t(63131),
                l = t(86132),
                u = t(27953),
                d = t(81380),
                f = function(e) {
                    var n = (0, i.useRef)(null);
                    (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    }));
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, r.jsx)("ul", {
                                children: d.nh.filter((function(n) {
                                    return !n.maxSize.lte(e.minSize) && n.minSize.gte(e.minSize) && n.minSize.lte(e.maxSize)
                                })).map((function(n, t) {
                                    return (0, r.jsx)("li", {
                                        children: (0, r.jsx)("button", {
                                            onClick: function() {
                                                return t = n.minSize, e.setNewSize(t), void e.setToggleDropdown(!1);
                                                var t
                                            },
                                            children: n.name
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                m = t(92684),
                p = t(36114),
                h = t(44431),
                x = t.n(h),
                v = t(32978),
                g = t(56371);

            function j(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function w(e, n, t, r, i, s, a) {
                try {
                    var o = e[s](a),
                        c = o.value
                } catch (l) {
                    return void t(l)
                }
                o.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function k(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (s.push(r.value), !n || s.length !== n); a = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return j(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e) {
                    var n = (0, i.useRef)(null),
                        t = (0, i.useState)(!1),
                        s = t[0],
                        a = t[1],
                        d = (0, i.useState)(null),
                        h = d[0],
                        j = d[1],
                        S = (0, i.useState)(""),
                        A = (S[0], S[1]),
                        y = (0, i.useState)(!1),
                        N = y[0],
                        b = y[1];
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && b(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }));
                    var I = function(n) {
                        n = n.isNaN() ? new(x())(e.nft.initialTokenAmount) : n, e.setNewSize(n), n.lte(e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount)) ? e.setIsValid(!1) : e.setIsValid(!0);
                        var t = (0, v.b6)(n);
                        A(t.name)
                    };
                    (0, i.useEffect)((function() {
                        var n = function() {
                            var n, t = (n = o().mark((function n() {
                                return o().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            I(e.nft.initialTokenAmount);
                                        case 1:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })), function() {
                                var e = this,
                                    t = arguments;
                                return new Promise((function(r, i) {
                                    var s = n.apply(e, t);

                                    function a(e) {
                                        w(s, r, i, a, o, "next", e)
                                    }

                                    function o(e) {
                                        w(s, r, i, a, o, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        n()
                    }), []);
                    k((0, m.ac)("(max-width: 400px)"), 1)[0];
                    return (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Increase To:"
                            }), (0, r.jsx)("span", {
                                children: (0, r.jsx)(p.Y2, {
                                    value: e.newSize.toFixed(0),
                                    onChange: function(e) {
                                        return I(new(x())(e))
                                    },
                                    min: e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount).toNumber(),
                                    max: e.maxSpend.plus(e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount)).toNumber(),
                                    children: (0, r.jsx)(p.zu, {
                                        id: "FocusInput"
                                    })
                                })
                            }), (0, r.jsx)("p", {
                                children: (0, r.jsx)("button", {
                                    className: "ToggleDropdownBtn SmallDropdownBtn",
                                    onClick: function(e) {
                                        return function(e) {
                                            var n = e.target.getBoundingClientRect(),
                                                t = n.top,
                                                r = n.left;
                                            j({
                                                top: Math.ceil(t),
                                                left: Math.ceil(r)
                                            }), a(!s)
                                        }(e)
                                    },
                                    children: (0, r.jsx)("span", {
                                        className: "PArrow down"
                                    })
                                })
                            })]
                        }), s && (0, r.jsx)(f, {
                            maxSize: e.maxSpend.plus(e.nft.initialTokenAmount),
                            minSize: e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount),
                            toggleDropdown: s,
                            setToggleDropdown: a,
                            style: h,
                            setNewSize: I
                        }, 1), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("div", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, r.jsxs)("div", {
                                    ref: n,
                                    children: [(0, r.jsx)("span", {
                                        className: "ClickIndexFloat",
                                        onClick: function() {
                                            return function() {
                                                var e;
                                                b(!N), null === (e = document.getElementById("FocusInput")) || void 0 === e || e.focus()
                                            }()
                                        }
                                    }), (0, r.jsxs)("div", {
                                        className: "StakeActionListItem BridgePopupListItem",
                                        children: [(0, r.jsxs)("div", {
                                            className: "UserStakeStatIconWrap",
                                            children: [(0, r.jsxs)("span", {
                                                className: "UserStakeStatValue",
                                                children: [e.nft.numberOfMonths.toFixed(0), "x"]
                                            }), (0, r.jsxs)("span", {
                                                className: "UserStakeStatIcon",
                                                children: [(0, v.p1)(e.nft) ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(l.Z, {}), (0, r.jsx)(u.Z, {})]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "StakeActionItemInfo",
                                            children: [(0, r.jsx)("div", {
                                                className: "StakeActionListItemValue",
                                                children: (0, r.jsxs)("span", {
                                                    className: N ? "ClickForInput InputActive" : "ClickForInput",
                                                    children: [(0, r.jsxs)("span", {
                                                        className: "TitleToInput",
                                                        children: [(0, r.jsx)("span", {
                                                            children: (0, g.commify)(e.newSize.toFixed(0))
                                                        }), (0, r.jsx)("span", {
                                                            children: "\xa0RISE"
                                                        }), (0, r.jsx)("span", {
                                                            className: "initial ChainBubble Small",
                                                            children: "Initial"
                                                        })]
                                                    }), (0, r.jsxs)("span", {
                                                        className: "StakeActionListItemTime",
                                                        children: [(0, r.jsx)("span", {
                                                            children: (0, g.commify)(e.newSize.toFixed(0))
                                                        }), (0, r.jsx)("span", {
                                                            children: "\xa0RISE"
                                                        }), (0, r.jsx)("span", {
                                                            className: "left ChainBubble Small",
                                                            children: "Left"
                                                        })]
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "StakeActionListItemTime",
                                                children: (0, r.jsx)("span", {
                                                    children: (0, v.OT)(e.nft)
                                                })
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "StakeActionItemDropdown StakeIncreaseOptions"
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                A = t(41664),
                y = t.n(A),
                N = t(24281),
                b = function(e) {
                    var n = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(y(), {
                                        href: "/everstake/nft",
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, r.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, r.jsx)("span", {})]
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(N.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                },
                I = t(7467);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (s.push(r.value), !n || s.length !== n); a = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
                    var n = (0, i.useRef)(null),
                        t = (0, i.useState)(!1),
                        s = t[0],
                        a = t[1],
                        o = (0, i.useState)(null),
                        c = o[0];
                    o[1];
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && a(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }));
                    var l = D((0, m.ac)("(max-width: 400px)"), 1)[0];
                    return (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Increase From:"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("span", {
                                    children: (0, v.b6)(e.nft.initialTokenAmount).name
                                }), (0, r.jsxs)("span", {
                                    children: ["\xa0", l ? "" : "Stake"]
                                })]
                            })]
                        }), s && (0, r.jsx)(b, {
                            toggleDropdown: s,
                            setToggleDropdown: a,
                            style: c,
                            nft: e.nft
                        }, 1), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("ul", {
                                className: "ActionPopupList BridgePopupList",
                                children: (0, r.jsx)(I.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "FromItem",
                                    itemMenu: (0, r.jsx)("div", {
                                        className: "StakeActionItemDropdown"
                                    })
                                }, 1)
                            })
                        })]
                    })
                },
                E = t(90079),
                C = t(9473),
                F = t(11042),
                L = function(e) {
                    (0, i.useRef)(null);
                    var n = (0, C.I0)(),
                        t = (0, i.useState)(e.nft.initialTokenAmount),
                        a = t[0],
                        o = t[1],
                        c = (0, i.useState)(!1),
                        l = c[0],
                        u = c[1],
                        d = (0, i.useState)("Increase"),
                        f = d[0],
                        m = d[1],
                        p = (0, i.useState)(new(x())(0)),
                        h = p[0],
                        v = p[1],
                        g = function(e) {
                            e ? (u(!1), m("Increase")) : (u(!0), m("Invalid New Amount"))
                        };
                    (0, i.useEffect)((function() {
                        g(!1), (0, E.vY)(e.signer).then((function(e) {
                            return v(e)
                        }))
                    }), []);
                    var j = function() {
                        return (0, E.Tq)(e.signer, e.nft.nftId, new(x())(a.minus(e.nft.remainingAmount).toFixed(0, x().ROUND_DOWN)), n)
                    };
                    return (0, r.jsxs)(F.Z, {
                        toggleDisplay: e.toggleDisplay,
                        setToggleDisplay: e.setToggleIncreaseAmountPopup,
                        title: "INCREASE AMOUNT",
                        commitDisabled: l,
                        buttonText: f,
                        executeTransaction: function() {
                            return j()
                        },
                        children: [(0, r.jsx)("div", {
                            className: "popupInlineWarning",
                            children: (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("span", {
                                    children: "Warning: Increasing the amount in your stake will reset your lock period.\xa0"
                                }), (0, r.jsx)(s.rU, {
                                    href: "https://everrise.com/everstake#increase",
                                    children: (0, r.jsx)("a", {
                                        target: "_blank",
                                        children: "Learn More"
                                    })
                                })]
                            })
                        }), (0, r.jsx)(P, {
                            nft: e.nft
                        }), (0, r.jsxs)("div", {
                            className: "ActionToListArrows",
                            children: [(0, r.jsx)("span", {
                                className: "PArrow down"
                            }), (0, r.jsx)("span", {
                                className: "PArrow down"
                            })]
                        }), (0, r.jsx)(S, {
                            newSize: a,
                            maxSpend: h,
                            setIsValid: function(e) {
                                return g(e)
                            },
                            nft: e.nft,
                            signer: e.signer,
                            setNewSize: o
                        })]
                    })
                }
        },
        94739: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var r = t(85893),
                i = t(67294),
                s = t(36485),
                a = t(15193),
                o = (t(25675), t(41664)),
                c = t.n(o),
                l = t(24281),
                u = function(e) {
                    var n = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(c(), {
                                        href: "/everstake/nft",
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, r.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, r.jsx)("span", {})]
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(l.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                },
                d = t(31381),
                f = t(63131),
                m = (t(86132), t(27953)),
                p = function(e) {
                    var n = (0, i.useRef)(null),
                        t = (0, i.useState)(!1),
                        s = t[0],
                        a = t[1];
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && a(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }));
                    return (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Merging From:"
                            }), (0, r.jsx)("p", {
                                children: (0, r.jsx)("span", {
                                    children: "2 Stakes"
                                })
                            })]
                        }), s && (0, r.jsx)(u, {
                            toggleDropdown: s,
                            setToggleDropdown: a
                        }, e.key), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("ul", {
                                className: "ActionPopupList MergePopupList",
                                children: function(e, n) {
                                    for (var t = [], i = 0; i < e; i++) t.push((0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)("li", {
                                            className: "FromItem",
                                            children: (0, r.jsxs)("div", {
                                                className: "StakeActionListItem MergePopupListItem",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "UserStakeStatIconWrap",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "UserStakeStatValue",
                                                        children: "12x"
                                                    }), (0, r.jsxs)("span", {
                                                        className: "UserStakeStatIcon",
                                                        children: [(0, r.jsx)(f.Z, {}), (0, r.jsx)(m.Z, {})]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "StakeActionItemInfo",
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "StakeActionListItemValue",
                                                        children: [(0, r.jsx)("span", {
                                                            children: "2456,789"
                                                        }), (0, r.jsx)("span", {
                                                            children: "\xa0RISE"
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "StakeActionListItemTime",
                                                        children: [(0, r.jsx)("span", {
                                                            children: "220"
                                                        }), (0, r.jsx)("span", {
                                                            children: "\xa0Days Left"
                                                        })]
                                                    }), " "]
                                                }), (0, r.jsx)("div", {
                                                    className: "StakeActionItemDropdown",
                                                    children: (0, r.jsx)("button", {
                                                        className: "ToggleDropdownBtn NftStakeItemButton",
                                                        onClick: function() {
                                                            a(!s)
                                                        },
                                                        children: (0, r.jsx)(d.vp, {})
                                                    })
                                                })]
                                            })
                                        }, n)
                                    }));
                                    return t
                                }(3).map((function(e) {
                                    return e
                                }))
                            })
                        })]
                    })
                },
                h = function(e) {
                    var n = (0, i.useRef)(null);
                    return (0, r.jsxs)("div", {
                        className: "SelectOptionPopupWrap EverStakeMergePopup",
                        children: [(0, r.jsxs)("div", {
                            className: "SelectOptionPopupInner",
                            ref: n,
                            children: [(0, r.jsxs)("div", {
                                className: "SelectOptionPopupHeader",
                                children: [(0, r.jsx)("h2", {
                                    children: "NFT STAKE MERGE"
                                }), (0, r.jsx)("span", {
                                    className: "ExitIcon",
                                    onClick: function() {
                                        return e.setToggleMergePopup(!1)
                                    },
                                    children: (0, r.jsx)(s.Z, {})
                                })]
                            }), (0, r.jsx)("div", {
                                className: "SelectOptionPopupContent",
                                children: (0, r.jsxs)("div", {
                                    className: "ColumnContent",
                                    children: [(0, r.jsx)(p, {}), (0, r.jsxs)("div", {
                                        className: "ActionToListArrows",
                                        children: [(0, r.jsx)("span", {
                                            className: "PArrow down"
                                        }), (0, r.jsx)("span", {
                                            className: "PArrow down"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "ActionPopupBottom",
                                        children: [(0, r.jsxs)(a.zx, {
                                            className: "StakingActionSubmitBtn",
                                            children: ["Merge from\xa0", (0, r.jsx)("span", {
                                                children: "2"
                                            }), "\xa0NFTs to\xa0", (0, r.jsx)("span", {
                                                children: "1"
                                            }), "\xa0NFTs"]
                                        }), (0, r.jsx)(a.zx, {
                                            className: "StakingActionCancelBtn",
                                            onClick: function() {
                                                return e.setToggleMergePopup(!1)
                                            },
                                            children: "Close"
                                        })]
                                    })]
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "FullBGClick",
                            onClick: function() {
                                return e.setToggleMergePopup(!1)
                            }
                        })]
                    })
                }
        },
        43756: function(e, n, t) {
            var r = t(85893),
                i = t(44431),
                s = t.n(i),
                a = t(67294),
                o = t(9473),
                c = t(90079),
                l = t(11042);
            n.Z = function(e) {
                (0, a.useRef)(null);
                var n = (0, o.I0)();
                return (0, r.jsx)(l.Z, {
                    toggleDisplay: e.toggleDispaly,
                    setToggleDisplay: e.setTogglePopup,
                    title: "REPAIR",
                    commitDisabled: !1,
                    buttonText: "Repair",
                    executeTransaction: function() {
                        return (0, c.CF)(e.signer, e.nft, new(s())(0), !0, n)
                    }
                })
            }
        },
        7628: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return E
                }
            });
            var r = t(34051),
                i = t.n(r),
                s = t(85893),
                a = t(67294),
                o = t(41664),
                c = t.n(o),
                l = t(24281),
                u = function(e) {
                    var n = (0, a.useRef)(null);
                    return (0, a.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, s.jsxs)("ul", {
                                children: [(0, s.jsx)("li", {
                                    children: (0, s.jsx)(c(), {
                                        href: "/everstake/nft",
                                        children: (0, s.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, s.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, s.jsx)("span", {})]
                                        })
                                    })
                                }), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(l.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                },
                d = t(7467),
                f = function(e) {
                    var n = (0, a.useRef)(null),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        i = t[1],
                        o = (0, a.useState)(null),
                        c = o[0];
                    o[1];
                    return (0, a.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && i(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    })), (0, s.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, s.jsxs)("header", {
                            children: [(0, s.jsx)("h3", {
                                children: "Splitting From:"
                            }), (0, s.jsx)("p", {
                                children: (0, s.jsx)("span", {
                                    children: "1 NFT Stake"
                                })
                            })]
                        }), r && (0, s.jsx)(u, {
                            nft: e.nft,
                            toggleDropdown: r,
                            setToggleDropdown: i,
                            style: c
                        }, 1), (0, s.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, s.jsx)("ul", {
                                className: "ActionPopupList SplitPopupList",
                                children: (0, s.jsx)(d.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "FromItem",
                                    itemMenu: (0, s.jsx)("div", {
                                        className: "StakeActionItemDropdown"
                                    })
                                }, 1)
                            })
                        })]
                    })
                },
                m = t(81380),
                p = function(e) {
                    var n = (0, a.useRef)(null);
                    (0, a.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    }));
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, s.jsx)("ul", {
                                children: m.nh.filter((function(n) {
                                    return !n.maxSize.lte(e.minSize) && n.minSize.lte(e.maxSize)
                                })).map((function(n, t) {
                                    return (0, s.jsx)("li", {
                                        children: (0, s.jsx)("button", {
                                            onClick: function() {
                                                return t = n.minSize, e.setNewSize(t), void e.setToggleDropdown(!1);
                                                var t
                                            },
                                            children: n.name
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                h = t(44431),
                x = t.n(h),
                v = t(36114);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return g(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = function(e) {
                    var n = (0, a.useRef)(null),
                        t = (0, a.useState)([!1, !1]),
                        r = t[0],
                        i = t[1],
                        o = (0, a.useState)(null),
                        c = o[0],
                        l = o[1];
                    (0, a.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && (f(!1, 0), f(!1, 1))
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }));
                    var u = function(n, t) {
                            n = n.isNaN() ? new(x())(0) : n, e.setNewSize(n, t)
                        },
                        f = function(e, n) {
                            var t = j(r);
                            t[n] = e, i(t)
                        };
                    return (0, s.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, s.jsxs)("header", {
                            children: [(0, s.jsx)("h3", {
                                children: "Splitting To:"
                            }), (0, s.jsx)("p", {
                                children: "2 NFT stakes"
                            })]
                        }), r[0] && (0, s.jsx)(p, {
                            toggleDropdown: r[0],
                            setToggleDropdown: function(e) {
                                return f(e, 0)
                            },
                            style: c,
                            maxSize: e.nft.initialTokenAmount.minus(1),
                            minSize: new(x())(1),
                            setNewSize: function(e) {
                                return u(e, 0)
                            }
                        }, 1), r[1] && (0, s.jsx)(p, {
                            toggleDropdown: r[1],
                            setToggleDropdown: function(e) {
                                return f(e, 1)
                            },
                            style: c,
                            maxSize: e.nft.initialTokenAmount.minus(1),
                            minSize: new(x())(1),
                            setNewSize: function(e) {
                                return u(e, 1)
                            }
                        }, 1), (0, s.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, s.jsx)("ul", {
                                className: "ActionPopupList SplitPopupList",
                                children: e.nfts.map((function(n, t) {
                                    return (0, s.jsx)(d.Z, {
                                        nft: n,
                                        NftListItemClass: "ToItem",
                                        itemMenu: n.initialTokenAmount.gt(new(x())(1e3)) ? (0, s.jsx)("div", {
                                            className: "StakeActionItemDropdown StakeIncreaseOptions",
                                            children: (0, s.jsx)("button", {
                                                className: "ToggleDropdownBtn NftStakeItemButton",
                                                onClick: function(e) {
                                                    return function(e, n) {
                                                        var t = e.target.getBoundingClientRect(),
                                                            s = t.top,
                                                            a = t.left;
                                                        l({
                                                            top: Math.ceil(s),
                                                            left: Math.ceil(a)
                                                        });
                                                        var o = j(r);
                                                        o[n] = !r[n], i(o)
                                                    }(e, t)
                                                },
                                                children: (0, s.jsx)("span", {
                                                    className: "PArrow down"
                                                })
                                            })
                                        }) : null,
                                        iCounter: (0, s.jsx)(v.Y2, {
                                            step: 20,
                                            value: n.initialTokenAmount.toNumber(),
                                            onChange: function(e) {
                                                return u(new(x())(e), t)
                                            },
                                            defaultValue: 1e3,
                                            min: 1,
                                            max: e.nft.initialTokenAmount.toNumber() - 1
                                        }),
                                        titleInput: (0, s.jsx)(v.Y2, {
                                            value: n.initialTokenAmount.toNumber(),
                                            onChange: function(e) {
                                                return u(new(x())(e), t)
                                            },
                                            min: 1,
                                            max: e.nft.initialTokenAmount.toNumber() - 1,
                                            children: (0, s.jsx)(v.zu, {
                                                id: "FocusInput"
                                            })
                                        })
                                    }, e.key)
                                }))
                            })
                        })]
                    })
                },
                k = t(90079),
                S = t(9473),
                A = t(11042),
                y = t(56371),
                N = t(12372);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t, r, i, s, a) {
                try {
                    var o = e[s](a),
                        c = o.value
                } catch (l) {
                    return void t(l)
                }
                o.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function T(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function D(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        T(e, n, t[n])
                    }))
                }
                return e
            }

            function P(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e) {
                (0, a.useRef)(null);
                var n = (0, a.useState)(new(x())(0)),
                    t = n[0],
                    r = n[1],
                    o = (0, S.I0)(),
                    c = (0, a.useState)([]),
                    l = c[0],
                    u = c[1],
                    d = (0, a.useState)(new(x())(0)),
                    m = d[0],
                    p = d[1];
                return (0, a.useEffect)((function() {
                    var n = function() {
                            var n, t = (n = i().mark((function n() {
                                var t;
                                return i().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, (0, k.BR)(e.signer);
                                        case 2:
                                            t = n.sent, p(t);
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })), function() {
                                var e = this,
                                    t = arguments;
                                return new Promise((function(r, i) {
                                    var s = n.apply(e, t);

                                    function a(e) {
                                        I(s, r, i, a, o, "next", e)
                                    }

                                    function o(e) {
                                        I(s, r, i, a, o, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        t = e.nft.initialTokenAmount.div(2);
                    u(function(n) {
                        var t = D({}, e.nft);
                        t.initialTokenAmount = e.nft.initialTokenAmount.minus(n), t.withdrawnAmount = e.nft.withdrawnAmount.multipliedBy(t.initialTokenAmount.dividedBy(e.nft.initialTokenAmount));
                        var r = D({}, e.nft);
                        return r.initialTokenAmount = n, r.withdrawnAmount = e.nft.withdrawnAmount.multipliedBy(r.initialTokenAmount.dividedBy(e.nft.initialTokenAmount)), [t, r]
                    }(t)), r(t), n()
                }), [e.nft]), (0, s.jsxs)(A.Z, {
                    toggleDisplay: e.toggleDisplay,
                    setToggleDisplay: e.setToggleSplitPopup,
                    title: "SPLIT",
                    commitDisabled: !1,
                    buttonText: "split",
                    executeTransaction: function() {
                        return (0, k.S0)(e.signer, e.nft.nftId, t, o)
                    },
                    children: [(0, s.jsxs)("div", {
                        children: [(0, s.jsx)(f, {
                            nft: e.nft,
                            style: null
                        }, 1), (0, s.jsxs)("div", {
                            className: "ActionToListArrows",
                            children: [(0, s.jsx)("span", {
                                className: "PArrow down"
                            }), (0, s.jsx)("span", {
                                className: "PArrow down"
                            })]
                        }), (0, s.jsx)(w, {
                            nft: e.nft,
                            setNewSize: function(n, t) {
                                return function(n, t) {
                                    var i = P(l),
                                        s = 0 === t ? n : e.nft.initialTokenAmount.minus(n),
                                        a = 1 === t ? n : e.nft.initialTokenAmount.minus(n),
                                        o = e.nft.withdrawnAmount.dividedBy(e.nft.initialTokenAmount);
                                    i[0] = D({}, i[0], {
                                        initialTokenAmount: s,
                                        withdrawnAmount: o.multipliedBy(s)
                                    }), i[1] = D({}, i[1], {
                                        initialTokenAmount: a,
                                        withdrawnAmount: o.multipliedBy(a)
                                    }), u(i), r(n)
                                }(n, t)
                            },
                            signer: e.signer,
                            nfts: l,
                            style: null
                        }, 1)]
                    }), (0, s.jsx)("div", {
                        className: "TaxFees",
                        children: (0, s.jsxs)("span", {
                            children: ["Mint fee: ", (0, y.commify)(m.toFixed(4)), " ", N.l_[e.chainId].nativeCurrency.name]
                        })
                    })]
                })
            }
        },
        54465: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var r = t(85893),
                i = t(67294),
                s = t(41664),
                a = t.n(s),
                o = t(24281),
                c = function(e) {
                    var n = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var t = function(t) {
                            n.current && !n.current.contains(t.target) && e.setToggleDropdown(!1)
                        };
                        return document.addEventListener("click", t, !0),
                            function() {
                                document.removeEventListener("click", t, !0)
                            }
                    })), (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            ref: n,
                            className: e.toggleDropdown ? "ToggleDropdown active" : "ToggleDropdown",
                            style: e.style,
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                        href: "/everstake/nft",
                                        children: (0, r.jsxs)("a", {
                                            target: "_blank",
                                            children: [(0, r.jsx)("span", {
                                                children: "View NFT Stake"
                                            }), (0, r.jsx)("span", {})]
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(o.Z, {
                                        nft: e.nft
                                    })
                                })]
                            })
                        })
                    })
                },
                l = t(7467),
                u = function(e) {
                    var n = (0, i.useRef)(null),
                        t = (0, i.useState)(!1),
                        s = t[0],
                        a = t[1],
                        o = (0, i.useState)(null),
                        u = o[0];
                    o[1];
                    return (0, i.useEffect)((function() {
                        var e = function(e) {
                            n.current && !n.current.contains(e.target) && a(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    })), (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsxs)("header", {
                            children: [(0, r.jsx)("h3", {
                                children: "Ready To Transfer"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("span", {
                                    children: "1"
                                }), (0, r.jsx)("span", {
                                    children: "\xa0NFT Stake"
                                })]
                            })]
                        }), s && (0, r.jsx)(c, {
                            nft: e.nft,
                            toggleDropdown: s,
                            setToggleDropdown: a,
                            style: u
                        }, 1), (0, r.jsx)("div", {
                            className: "PopupListScrollWrap",
                            children: (0, r.jsx)("ul", {
                                className: "ActionPopupList TransferPopupList",
                                children: (0, r.jsx)(l.Z, {
                                    nft: e.nft,
                                    iCounter: null,
                                    titleInput: null,
                                    NftListItemClass: "FromItem",
                                    itemMenu: (0, r.jsx)("div", {
                                        className: "StakeActionItemDropdown"
                                    })
                                }, 1)
                            })
                        })]
                    })
                },
                d = t(4612),
                f = t(9473),
                m = t(90079),
                p = t(11042),
                h = function(e) {
                    (0, i.useRef)(null);
                    var n = (0, f.I0)(),
                        t = (0, i.useState)(""),
                        s = t[0],
                        a = t[1],
                        o = (0, i.useState)(!1),
                        c = o[0],
                        l = o[1],
                        h = (0, i.useState)(!1),
                        x = h[0],
                        v = h[1];
                    return (0, i.useEffect)((function() {
                        "" !== s.replace(/\s/g, "") ? l(!0) : l(!1)
                    }), [s]), (0, r.jsxs)(p.Z, {
                        toggleDisplay: e.toggleDisplay,
                        setToggleDisplay: e.setToggleTransferPopup,
                        title: "TRANSFER",
                        commitDisabled: !c,
                        setInputDisabled: function(e) {
                            return v(e)
                        },
                        buttonText: "Transfer",
                        executeTransaction: function() {
                            return (0, m._0)(e.signer, e.nft.nftId, s, n)
                        },
                        children: [(0, r.jsx)(u, {
                            nft: e.nft,
                            style: null
                        }), (0, r.jsxs)("div", {
                            className: "ActionPopupBottom",
                            children: [(0, r.jsx)("p", {
                                children: "Transfer NFT Stake to:"
                            }), (0, r.jsx)(d.II, {
                                disabled: x,
                                type: "text",
                                id: "TransferAddress",
                                value: s,
                                onChange: function(e) {
                                    var n;
                                    return a(null === (n = e.target) || void 0 === n ? void 0 : n.value)
                                },
                                placeholder: "Enter wallet address (Only)"
                            })]
                        })]
                    })
                }
        },
        7685: function(e, n, t) {
            var r = t(85893),
                i = t(67294),
                s = t(7467),
                a = t(56371),
                o = t(9473),
                c = t(90079),
                l = t(11042),
                u = t(68527);
            n.Z = function(e) {
                (0, i.useRef)(null);
                var n = (0, o.I0)(),
                    t = (0, i.useState)(!0),
                    d = t[0];
                t[1];
                return (0, r.jsxs)(l.Z, {
                    toggleDisplay: e.toggleDisplay,
                    setToggleDisplay: e.setToggleUnstakePopup,
                    title: "UNSTAKE",
                    commitDisabled: !1,
                    buttonText: "Unstake",
                    executeTransaction: function() {
                        return (0, c.H7)(e.signer, e.nft.nftId, d, n)
                    },
                    children: [!e.nft.achievementClaimed && (0, r.jsxs)("div", {
                        className: "popupInlineWarning",
                        children: [(0, r.jsx)("span", {
                            children: "Warning: If you unstake without claiming your achievement NFT you will lose your achievement NFT forever.\xa0"
                        }), (0, r.jsx)(u.rU, {
                            href: "https://everrise.com/everstake#penalty",
                            children: (0, r.jsx)("a", {
                                target: "_blank",
                                children: "Learn More"
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsx)("header", {
                            children: (0, r.jsx)("h3", {
                                children: "UNSTAKING:"
                            })
                        }), (0, r.jsx)("ul", {
                            className: "ActionPopupList SplitPopupList",
                            children: (0, r.jsx)(s.Z, {
                                nft: e.nft
                            }, 1)
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "ActionToListArrows",
                        children: [(0, r.jsx)("span", {
                            className: "PArrow down"
                        }), (0, r.jsx)("span", {
                            className: "PArrow down"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, r.jsx)("header", {
                            children: (0, r.jsx)("h3", {
                                children: "AMOUNT TO RECEIVE:"
                            })
                        }), (0, r.jsxs)("ul", {
                            className: "UnstakeTo",
                            children: [(0, r.jsx)("span", {
                                className: "UnstakeToRiseLogo"
                            }), (0, r.jsx)("span", {
                                children: (0, a.commify)(e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount).toFixed(0))
                            }), (0, r.jsx)("span", {
                                children: "\xa0RISE"
                            })]
                        })]
                    })]
                })
            }
        },
        62826: function(e, n, t) {
            var r = t(34051),
                i = t.n(r),
                s = t(85893),
                a = t(44431),
                o = t.n(a),
                c = t(67294),
                l = t(9473),
                u = t(90079),
                d = t(26017),
                f = t(87536),
                m = t(32978),
                p = t(41664),
                h = t.n(p),
                x = t(56371),
                v = t(7467),
                g = t(11042);

            function j(e, n, t, r, i, s, a) {
                try {
                    var o = e[s](a),
                        c = o.value
                } catch (l) {
                    return void t(l)
                }
                o.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var s = e.apply(n, t);

                        function a(e) {
                            j(s, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            j(s, r, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            n.Z = function(e) {
                var n = (0, c.useState)(new(o())(0)),
                    t = n[0],
                    r = n[1],
                    a = (0, l.I0)(),
                    p = (0, c.useState)(!1),
                    j = (p[0], p[1]),
                    k = (0, c.useState)(new(o())(0)),
                    S = k[0],
                    A = k[1],
                    y = (0, c.useState)(!1),
                    N = y[0],
                    b = y[1];
                (0, c.useRef)(null);
                (0, c.useEffect)((function() {
                    var n = function() {
                        var n = w(i().mark((function n() {
                            var t;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!(0, m.p1)(e.nft)) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.next = 3, (0, u.km)(e.signer, new(o())(100), e.nft);
                                    case 3:
                                        t = n.sent, A(t.dividedBy(new(o())(100)));
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
                    n()
                }), []);
                var I = function() {
                        var n = w(i().mark((function n() {
                            var t, r;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t = new(o())(E("tokenCount")), n.next = 3, (0, u.km)(e.signer, t, e.nft);
                                    case 3:
                                        if (n.sent.dividedBy(t).eq(S)) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 6:
                                        return r = (0, m.p1)(e.nft) ? (0, u.ET)(e.signer, e.nft.nftId, t, a) : (0, u.CF)(e.signer, e.nft, t, !0, a), n.abrupt("return", r);
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    T = (0, f.cI)({
                        mode: "onChange",
                        defaultValues: {
                            tokenCount: 0
                        }
                    }),
                    D = (T.watch, T.handleSubmit, T.setValue),
                    P = T.control,
                    E = T.getValues,
                    C = T.formState;
                C.isValid, C.errors;
                (0, c.useEffect)((function() {
                    var n = (0, m.p1)(e.nft),
                        t = e.nft.initialTokenAmount.multipliedBy(n ? .6 : 1).minus(e.nft.withdrawnAmount).integerValue(o().ROUND_DOWN);
                    r(t)
                }), [e.nft]), (0, c.useEffect)((function() {
                    E("tokenCount") > 0 && E("tokenCount") <= parseFloat(t.toFormat(0, o().ROUND_FLOOR)) ? j(!0) : j(!1)
                }), [E("tokenCount")]);
                var F = function() {
                    var e = new(o())(E("tokenCount"));
                    return e.isNaN() ? new(o())(0) : e
                };
                return (0, s.jsxs)(g.Z, {
                    toggleDisplay: e.toggleDisplay,
                    setToggleDisplay: e.setToggleWithdrawPopup,
                    title: "WITHDRAW",
                    commitDisabled: !1,
                    buttonText: (0, m.p1)(e.nft) || F().isLessThan(e.nft.remainingAmount) ? "Withdraw" : "Unstake",
                    executeTransaction: function() {
                        return I()
                    },
                    setInputDisabled: function(e) {
                        return b(e)
                    },
                    children: [(0, s.jsxs)("div", {
                        className: "popupInlineWarning",
                        children: [(0, m.p1)(e.nft) && (0, s.jsxs)("p", {
                            children: [(0, s.jsx)("span", {
                                children: "Warning: Your stake period is unfinished. Withdrawing now will result in a penalty.\xa0"
                            }), (0, s.jsx)(h(), {
                                href: "https://everrise.com/everstake#penalty",
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    children: "Learn More"
                                })
                            })]
                        }), !(0, m.p1)(e.nft) && !e.nft.achievementClaimed && F().isLessThan(e.nft.remainingAmount) && (0, s.jsxs)("p", {
                            children: [(0, s.jsx)("span", {
                                children: "Warning: Withdrawing will reduce your unclaimed achievement NFT\xa0"
                            }), (0, s.jsx)(h(), {
                                href: "https://everrise.com/everstake#penalty",
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    children: "Learn More"
                                })
                            })]
                        }), !(0, m.p1)(e.nft) && !e.nft.achievementClaimed && F().isGreaterThanOrEqualTo(e.nft.remainingAmount) && (0, s.jsxs)("p", {
                            children: [(0, s.jsx)("span", {
                                children: "Warning: If you withdraw all it will unstake your NFT. If you don't claim your achievement NFT you will lose your achievement NFT forever.\xa0"
                            }), (0, s.jsx)(h(), {
                                href: "https://everrise.com/everstake#penalty",
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    children: "Learn More"
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "ActionPopupListWrap",
                        children: [(0, s.jsx)("header", {
                            children: (0, s.jsx)("h3", {
                                children: "Withdraw from:"
                            })
                        }), (0, s.jsx)("ul", {
                            className: "ActionPopupList SplitPopupList",
                            children: (0, s.jsx)(v.Z, {
                                NftListItemClass: null,
                                nft: e.nft,
                                itemMenu: null,
                                iCounter: null,
                                titleInput: null
                            }, 1)
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "ActionToListArrows Withdraw",
                        children: [(0, s.jsx)("span", {
                            className: "PArrow down"
                        }), (0, s.jsx)("span", {
                            className: "PArrow down"
                        })]
                    }), (0, s.jsx)(d.F, {
                        id: "tokenCount",
                        placeholder: "0.00",
                        name: "tokenCount",
                        label: "Staked RISE Tokens",
                        tokenBalance: t,
                        setValue: D,
                        control: P,
                        disabled: !(t && t.gt(new(o())("0"))) || N,
                        ticker: null,
                        tickerclass: "StakeWithdrawPopupInput RISE",
                        rules: {
                            required: "Please enter valid amount",
                            min: 1,
                            validate: function() {
                                return e = E("tokenCount"), t && e && parseInt(e) > 0 && t.gte(new(o())(e)) && parseFloat(e) % 1 === 0;
                                var e
                            }
                        },
                        children: (0, s.jsx)("span", {
                            className: "Ticker",
                            children: "RISE"
                        })
                    }), (0, m.p1)(e.nft) && (0, s.jsx)("p", {
                        children: (0, s.jsxs)("div", {
                            className: "TaxFees",
                            children: [(0, s.jsxs)("div", {
                                children: ["Tax payable: ", (0, x.commify)(S.multipliedBy(F()).toFixed(2)), (0, s.jsx)("span", {
                                    children: "\xa0RISE"
                                }), " (", S.multipliedBy(new(o())(100)).toFixed(2), "%)"]
                            }), (0, s.jsxs)("div", {
                                children: ["Amount to receive: ", (0, x.commify)(new(o())(1).minus(S).multipliedBy(F()).toFixed(2)), (0, s.jsx)("span", {
                                    children: "\xa0RISE"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        58952: function(e, n, t) {
            var r = t(85893),
                i = t(92684),
                s = t(68527),
                a = t(41664),
                o = t.n(a);

            function c(e, n) {
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
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (s.push(r.value), !n || s.length !== n); a = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return c(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.Z = function(e) {
                l((0, i.ac)("(min-width: 480px)"), 1)[0];
                return (0, r.jsx)("div", {
                    className: "EverStakeNav ComponentBG",
                    children: (0, r.jsx)("div", {
                        className: "EverStakeNavWrapInner",
                        children: (0, r.jsx)("nav", {
                            children: (0, r.jsxs)(s.aV, {
                                display: "flex",
                                width: "100%",
                                children: [(0, r.jsx)(s.HC, {
                                    children: (0, r.jsx)(o(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, r.jsx)(s.rU, {
                                            children: (0, r.jsx)(s.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Stake"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)(s.HC, {
                                    children: (0, r.jsx)(o(), {
                                        href: "/everstake/manage",
                                        passHref: !0,
                                        children: (0, r.jsxs)(s.rU, {
                                            children: ["", (0, r.jsx)(s.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Manage"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(s.HC, {
                                    children: (0, r.jsx)(o(), {
                                        href: "/everstake/mementos",
                                        passHref: !0,
                                        children: (0, r.jsxs)(s.rU, {
                                            children: ["", (0, r.jsx)(s.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "NFTs"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(s.HC, {
                                    children: (0, r.jsx)(o(), {
                                        href: "/everstake/claim",
                                        passHref: !0,
                                        children: (0, r.jsxs)(s.rU, {
                                            children: ["", (0, r.jsx)(s.xv, {
                                                as: "span",
                                                display: "inline-block",
                                                children: "Claim"
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(s.LZ, {})]
                            })
                        })
                    })
                })
            }
        },
        7467: function(e, n, t) {
            var r = t(85893),
                i = t(67294),
                s = t(56371),
                a = t(32978),
                o = t(63131),
                c = t(86132),
                l = t(27953);
            n.Z = function(e) {
                var n = (0, i.useRef)(null),
                    t = (0, i.useState)(!1),
                    u = t[0],
                    d = t[1];
                return (0, i.useEffect)((function() {
                    var e = function(e) {
                        n.current && !n.current.contains(e.target) && d(!1)
                    };
                    return document.addEventListener("click", e, !0),
                        function() {
                            document.removeEventListener("click", e, !0)
                        }
                })), (0, r.jsxs)("li", {
                    ref: n,
                    className: "NftPopupListItem ".concat(e.NftListItemClass),
                    children: [(0, r.jsx)("span", {
                        className: "ClickIndexFloat",
                        onClick: function() {
                            return function() {
                                var e;
                                d(!u), null === (e = document.getElementById("FocusInput")) || void 0 === e || e.focus()
                            }()
                        }
                    }), (0, r.jsxs)("div", {
                        className: "StakeActionListItem SplitPopupListItem",
                        children: [(0, r.jsxs)("div", {
                            className: "UserStakeStatIconWrap",
                            children: [(0, r.jsxs)("span", {
                                className: "UserStakeStatValue",
                                children: [e.nft.numberOfMonths.toFixed(0), "x"]
                            }), (0, r.jsxs)("span", {
                                className: "UserStakeStatIcon",
                                children: [(0, a.p1)(e.nft) ? (0, r.jsx)(o.Z, {}) : (0, r.jsx)(c.Z, {}), (0, r.jsx)(l.Z, {})]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "StakeActionItemInfo",
                            children: [(0, r.jsx)("div", {
                                className: "StakeActionListItemValue",
                                children: (0, r.jsxs)("span", {
                                    className: u ? "ClickForInput InputActive" : "ClickForInput",
                                    children: [(0, r.jsxs)("span", {
                                        className: "TitleToInput",
                                        children: [(0, r.jsx)("span", {
                                            children: (0, s.commify)(e.nft.initialTokenAmount.toFixed(0))
                                        }), (0, r.jsx)("span", {
                                            children: "\xa0RISE"
                                        }), (0, r.jsx)("span", {
                                            className: "initial ChainBubble Small",
                                            children: "Initial"
                                        })]
                                    }), (0, r.jsxs)("span", {
                                        className: "StakeActionListItemTime",
                                        children: [(0, r.jsxs)("span", {
                                            children: [(0, s.commify)(e.nft.initialTokenAmount.minus(e.nft.withdrawnAmount).toFixed(0)), " RISE"]
                                        }), (0, r.jsx)("span", {
                                            className: "left ChainBubble Small",
                                            children: "Left"
                                        })]
                                    }), e.titleInput]
                                })
                            }), (0, r.jsx)("div", {
                                className: "StakeActionListItemTime",
                                children: (0, a.OT)(e.nft)
                            })]
                        })]
                    }), e.children, e.itemMenu && e.itemMenu]
                }, e.key)
            }
        },
        24281: function(e, n, t) {
            var r = t(85893),
                i = t(68527),
                s = t(12372),
                a = t(312);
            n.Z = function(e) {
                var n = (0, a.rK)().chainId;
                return (0, r.jsxs)(i.rU, {
                    href: function() {
                        var t, r = null === (t = s.l_[n]) || void 0 === t ? void 0 : t.nftViewUrl;
                        return r ? "".concat(r).concat(e.nft.nftId) : "https://opensea.io/collection/everrise-staking-nfts-v2"
                    }(),
                    target: "_blank",
                    children: [(0, r.jsx)("span", {
                        children: "View On OpenSea"
                    }), (0, r.jsx)("span", {})]
                })
            }
        },
        86132: function(e, n, t) {
            var r = t(85893);
            t(67294);
            n.Z = function() {
                return (0, r.jsx)("svg", {
                    id: "FatUnlockedIcon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 240.19 305.07",
                    children: (0, r.jsx)("path", {
                        id: "FatUnlockedPath",
                        d: "M80.45,7.91A95.72,95.72,0,0,1,119.5,1a100.58,100.58,0,0,1,67.22,23.78c7.81,7.29,15.4,15.07,20.42,24.61,3.7,8,.5,18.81-7.56,22.77-4.83,2.92-10.67,2.52-16.08,2.53-6.39,0-13.15.3-19-2.69-5.48-2.55-9.08-7.62-13.86-11.14A51.35,51.35,0,0,0,121.55,51c-9.31-.33-18.93,1.2-27.07,5.94A42.62,42.62,0,0,0,74.09,82.6c-2.5,8.21-1.42,16.88-1.5,25.32,49.32.19,98.64,0,148,.08,7.52.32,15.25,4.53,18.34,11.62,2.42,4.4,1.66,9.57,1.77,14.37-.07,51,0,102,0,153.05,0,10.15-9.39,17.46-18.75,19H22.11c-4.8-.78-9.8-1.72-13.68-4.88C4,297.86,2.08,292.4.5,287.35V130.73c1.35-7,4.25-14.22,10.56-18.13,2.95-2.55,7.2-2.72,10.24-4.91.72-8.25-.55-16.6.89-24.8C24.5,62.33,34.35,43,48.82,28.31,58.11,19.8,68.63,12.44,80.45,7.91Z",
                        transform: "translate(-0.5 -0.93)"
                    })
                })
            }
        },
        27953: function(e, n, t) {
            var r = t(85893);
            t(67294);
            n.Z = function() {
                return (0, r.jsx)("svg", {
                    className: "HexagonIcon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 897.63 792.54",
                    children: (0, r.jsx)("path", {
                        className: "HexagonPath",
                        d: "M248.41,2.21A30.27,30.27,0,0,1,254,1.77q176.52,0,353,0c14,.08,28-.15,42,.1A98.56,98.56,0,0,1,665.59,6a56.38,56.38,0,0,1,29.17,24.82q93,161,185.92,322c4.57,8.42,10.18,16.33,13.74,25.27,2.62,8.15,5.45,16.66,4,25.34-1.78,7.79-3.71,15.71-7.85,22.64L706.83,744.31c-5.26,8.76-9.9,17.91-15.63,26.38-10.12,14.17-27.09,22.1-44.15,23.52q-195,0-390,0c-7.5.48-14.76-1.85-21.86-4a56.19,56.19,0,0,1-29.9-25.07Q107.34,595.65,9.44,426.07c-4.14-6.93-6.07-14.85-7.85-22.64-1.42-8.15,1.11-16.14,3.46-23.84a54.24,54.24,0,0,1,4.39-9.66L205.24,30.79a56.49,56.49,0,0,1,25.7-23.4C236.48,4.81,242.52,3.67,248.41,2.21Z",
                        transform: "translate(-1.18 -1.76)"
                    })
                })
            }
        },
        31381: function(e, n, t) {
            t.d(n, {
                vp: function() {
                    return i
                }
            });
            var r = t(85893),
                i = (t(67294), t(25675), function() {
                    return (0, r.jsxs)("svg", {
                        className: "ThreeVerticalCircles_Icon",
                        viewBox: "0 0 72.4293 311.961",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("circle", {
                            cx: "36.21465",
                            cy: "36.21465",
                            r: "36.21465"
                        }), (0, r.jsx)("circle", {
                            cx: "36.21465",
                            cy: "155.9805",
                            r: "36.21465"
                        }), (0, r.jsx)("circle", {
                            cx: "36.21465",
                            cy: "275.74635",
                            r: "36.21465"
                        })]
                    })
                })
        },
        26017: function(e, n, t) {
            t.d(n, {
                F: function() {
                    return h
                }
            });
            var r = t(85893),
                i = t(67294),
                s = t(44431),
                a = t.n(s),
                o = t(87536),
                c = t(36114),
                l = t(80918),
                u = t(68527),
                d = t(15193);

            function f(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        f(e, n, t[n])
                    }))
                }
                return e
            }

            function p(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            var h = function(e) {
                var n, t = function(e) {
                        var n = e.toFixed(V + 1);
                        return V > 0 ? n.substr(0, n.length - 1) : n.substr(0, n.length - 2)
                    },
                    s = (e.label, e.id),
                    f = e.placeholder,
                    h = e.control,
                    x = e.rules,
                    v = e.setValue,
                    g = e.tokenBalance,
                    j = e.error,
                    w = e.name,
                    k = e.disabled,
                    S = e.decimals,
                    A = e.maxAllowance,
                    y = e.stablePrice,
                    N = (e.rightOffset, e.tickerclass),
                    b = e.tempStablePlaceholder,
                    I = e.dexName,
                    T = e.chainName,
                    D = e.availableLimit,
                    P = e.ticker,
                    E = e.icon,
                    C = e.value,
                    F = p(e, ["label", "id", "placeholder", "control", "rules", "setValue", "tokenBalance", "error", "name", "disabled", "decimals", "maxAllowance", "stablePrice", "rightOffset", "tickerclass", "tempStablePlaceholder", "dexName", "chainName", "availableLimit", "ticker", "icon", "value"]),
                    L = (0, i.useState)("0%"),
                    B = L[0],
                    O = L[1],
                    R = (0, i.useState)(0),
                    M = R[0],
                    W = R[1],
                    Z = (0, i.useState)(C),
                    z = Z[0],
                    U = Z[1],
                    V = S || 0,
                    _ = !A || A.isNaN() || A.gte(g) ? g || new(a())(0) : A,
                    H = (0, o.bc)({
                        name: w || s,
                        control: h,
                        rules: x,
                        defaultValue: 0
                    }),
                    q = H.field.ref,
                    G = p(H.field, ["ref"]),
                    Y = function(e) {
                        W(e), O(e.toFixed(0) + "%");
                        var n = t(parseInt(e) / 100 * (_ ? _.toNumber() : 0));
                        v(w, n, {
                            shouldValidate: !0,
                            shouldDirty: !0
                        }), U(n)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [!k && (0, r.jsx)("div", {
                        className: "WalletBalanceInForm",
                        children: (0, r.jsxs)("div", {
                            className: "SelectionHeaderItems",
                            children: [(0, r.jsx)("div", {
                                className: "DappFormTokenBalance",
                                children: T
                            }), (0, r.jsx)("div", {
                                className: "DappFormTokenBalance",
                                children: I
                            }), (0, r.jsxs)("div", {
                                className: "DappFormTokenBalance",
                                children: [(0, r.jsx)("span", {
                                    children: "MAX:\xa0"
                                }), (0, r.jsx)(r.Fragment, {
                                    children: null !== (n = null === g || void 0 === g ? void 0 : g.toFormat(V, a().ROUND_FLOOR)) && void 0 !== n ? n : 0
                                }), (0, r.jsx)(r.Fragment, {
                                    children: D
                                }), (0, r.jsxs)("span", {
                                    children: ["\xa0", P]
                                })]
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: N + " DappFormAmountInputWrapper",
                        children: [(0, r.jsxs)("div", {
                            className: "DappFormAmountInputBG",
                            children: [(0, r.jsx)("div", {
                                className: "DappFormAmountInput",
                                children: (0, r.jsxs)("div", {
                                    className: "DappFormAmountInputInner",
                                    children: [(0, r.jsxs)("div", {
                                        className: "PercentageAmountNumbers",
                                        children: [E && (0, r.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 5
                                            }
                                        }), E && (0, r.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 50
                                            },
                                            children: (0, r.jsx)("img", {
                                                src: E
                                            })
                                        }), E && (0, r.jsx)("div", {
                                            style: {
                                                height: 50,
                                                width: 5
                                            }
                                        }), (0, r.jsxs)(c.Y2, m({
                                            isDisabled: !g || k,
                                            value: 0,
                                            min: 0,
                                            max: Number("".concat(t(_.toNumber()))),
                                            id: s
                                        }, G, F, {
                                            children: [y && !k && (0, r.jsxs)("p", {
                                                className: "USDTPriceEqv",
                                                children: [(0, r.jsx)("span", {
                                                    children: function() {
                                                        if (!y || !z) return "";
                                                        var e = Number(z);
                                                        return "$ " + new(a())(y).times(e).toFormat(2)
                                                    }()
                                                }), "\xa0", (0, r.jsx)("span", {
                                                    children: (0, r.jsxs)("span", {
                                                        className: "usdteqv",
                                                        children: ["USDT ", (0, r.jsx)("span", {
                                                            className: "eqv",
                                                            children: "EQV"
                                                        })]
                                                    })
                                                })]
                                            }), !k && !y && b, (0, r.jsx)(c.zu, {
                                                ref: q,
                                                onChange: function(e) {
                                                    var n = e.target.value,
                                                        t = 100 * new(a())(n).dividedBy(_ ? new(a())(_) : new(a())(1)).toNumber();
                                                    W(t), O(Math.min(t, 100).toFixed(0) + "%"), v(w, n, {
                                                        shouldValidate: !0,
                                                        shouldDirty: !0
                                                    }), U(n)
                                                },
                                                placeholder: f || function(e) {
                                                    var n = (parseInt((e / 2).toFixed(0)) || 1).toFixed(0);
                                                    return n.substr(0, 1) + "0".repeat(n.length - 1)
                                                }(_.toNumber())
                                            })]
                                        }))]
                                    }), F.children]
                                })
                            }), !k && (0, r.jsx)("div", {
                                className: "InputAmountSlider",
                                children: (0, r.jsxs)(l.iR, {
                                    focusThumbOnChange: !1,
                                    value: M,
                                    isDisabled: !g || k,
                                    onChange: Y,
                                    children: [(0, r.jsx)(l.Uj, {
                                        children: (0, r.jsx)(l.Ms, {})
                                    }), (0, r.jsx)(l.gs, {
                                        children: B
                                    })]
                                })
                            })]
                        }), !k && (0, r.jsx)(u.xu, {
                            width: "100%",
                            className: "EverStakeAmountButtons",
                            children: (0, r.jsxs)(d.hE, {
                                children: [(0, r.jsx)(u.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, r.jsx)(d.zx, {
                                        disabled: k,
                                        onClick: function() {
                                            return Y(25)
                                        },
                                        children: " 25% "
                                    })
                                }), (0, r.jsx)(u.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, r.jsx)(d.zx, {
                                        disabled: k,
                                        onClick: function() {
                                            return Y(50)
                                        },
                                        children: " 50% "
                                    })
                                }), (0, r.jsx)(u.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, r.jsx)(d.zx, {
                                        disabled: k,
                                        onClick: function() {
                                            return Y(75)
                                        },
                                        children: " 75% "
                                    })
                                }), (0, r.jsx)(u.xu, {
                                    className: "InsetBtn StakingPercentageBtn",
                                    children: (0, r.jsx)(d.zx, {
                                        disabled: k,
                                        onClick: function() {
                                            return Y(100)
                                        },
                                        children: " Max "
                                    })
                                })]
                            })
                        })]
                    }), j && (0, r.jsx)("p", {
                        children: j
                    })]
                })
            }
        }
    }
]);