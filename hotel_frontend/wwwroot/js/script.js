
let menu = document.querySelector('#menu-btn');

/* Hiệu ứng ourPromotion*/

$(document).ready(function () {
    var $owl = $('.owl-carousel');
    var $texts = $('.text-container h2');
    var currentIndex = 0;

    $owl.owlCarousel({
        stagePadding: 100,
        loop: true,
        nav: true,
        items: 3,
        lazyLoad: true,
        nav: true,
        onTranslated: function (event) {
            currentIndex = event.item.index;
            $texts.hide().eq(currentIndex % $texts.length).show();
        },
        responsive: {
            0: {
                items: 1,
                stagePadding: 70
            },
            600: {
                items: 1,
                stagePadding: 100
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1200: {
                items: 1,
                stagePadding: 330
            },
            1400: {
                items: 1,
                stagePadding: 400
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
                stagePadding: 1000
            }
        }
    });

    // Trigger onTranslated once on initialization
    $owl.trigger('translated.owl.carousel', [{ item: { index: 0 } }]);

    // Hiển thị phần tử h2 chứa "Early Booking" khi trang được tải lên
    $texts.filter(":contains('Friend Invitation')").show();

    $('.owl-stage').on('click', function (e) {
        if (e.pageX < $(window).width() / 2) {
            $owl.trigger('prev.owl.carousel');
        }
    });

    $('.owl-stage').on('click', function (e) {
        if (e.pageX > $(window).width() / 2) {
            $owl.trigger('next.owl.carousel');
        }
    });
});

/* start ourroom animation*/

let slider = document.querySelector('.sliders .list');
let items = document.querySelectorAll('.sliders .list .items');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.sliders .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}


function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.sliders .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 100000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};




/* end ourroom animation */


/* Hiếu ứng welcome */
(() => {
    var t = {
        766: (t, e, n) => {
            var r;
            !function () {
                "use strict";
                var i = function () {
                    this.init()
                };
                i.prototype = {
                    init: function () {
                        t
                    },
                };

                var o = new i
                    , a = function (t) {
                        t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
                    };

                var s = function (t) {
                    this._parent = t,
                        this.init()
                };

                void 0 === (r = function () {
                    return {
                        Howler: o,
                        Howl: a
                    }
                }
                    .apply(e, [])) || (t.exports = r),
                    e.Howler = o,
                    e.Howl = a,
                    void 0 !== n.g ? (n.g.HowlerGlobal = i,
                        n.g.Howler = o,
                        n.g.Howl = a,
                        n.g.Sound = s) : "undefined" != typeof window && (window.HowlerGlobal = i,
                            window.Howler = o,
                            window.Howl = a,
                            window.Sound = s)
            }(),

                function () {
                    "use strict";
                    var t;
                }
        }
        ,
        // done 

    }, e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i)
            return i.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
            o.loaded = !0,
            o.exports
    }

    n.d = (t, e) => {
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
        ,
        n.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        n.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        n.nmd = t => (t.paths = [],
            t.children || (t.children = []),
            t),
        (() => {
            "use strict";
            var t = {};
            n.r(t),
                n.d(t, {});
            var e = "top"
                , r = "bottom"
                , i = "right"
                , o = "left"
                , a = "auto"
                , s = [e, r, i, o]
                , u = "start"
                , l = "end"
                , c = "clippingParents"
                , f = "viewport"
                , d = "popper"
                , h = "reference"
                , p = s.reduce((function (t, e) {
                    return t.concat([e + "-" + u, e + "-" + l])
                }
                ), [])
                , _ = [].concat(s, [a]).reduce((function (t, e) {
                    return t.concat([e, e + "-" + u, e + "-" + l])
                }
                ), [])
            function k(t) {
                return t ? (t.nodeName || "").toLowerCase() : null
            }
            const L = {};

            var D = Math.max
                , P = Math.min
                , N = Math.round;
            function B(t, e) { }

            const G = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var n, a = t.state, u = t.name, l = t.options, c = a.elements.arrow, f = a.modifiersData.popperOffsets, d = I(a.placement), h = V(d), p = [o, i].indexOf(d) >= 0 ? "height" : "width";
                    if (c && f) {
                        var _ = function (t, e) {
                            return X("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : t) ? t : U(t, s))
                        }(l.padding, a)
                            , m = R(c)
                            , g = "y" === h ? e : o
                            , v = "y" === h ? r : i
                            , y = a.rects.reference[p] + a.rects.reference[h] - f[h] - a.rects.popper[p]
                            , b = f[h] - a.rects.reference[h]
                            , w = $(c)
                            , x = w ? "y" === h ? w.clientHeight || 0 : w.clientWidth || 0 : 0
                            , T = y / 2 - b / 2
                            , A = _[g]
                            , E = x - m[p] - _[v]
                            , k = x / 2 - m[p] / 2 + T
                            , C = Y(A, k, E)
                            , S = h;
                        a.modifiersData[u] = ((n = {})[S] = C,
                            n.centerOffset = C - k,
                            n)
                    }
                },

            };



            const J = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                    var e = t.state
                        , n = t.options
                        , r = n.gpuAcceleration
                        , i = void 0 === r || r
                        , o = n.adaptive
                        , a = void 0 === o || o
                        , s = n.roundOffsets
                        , u = void 0 === s || s
                        , l = {
                            placement: I(e.placement),
                            variation: Z(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: i,
                            isFixed: "fixed" === e.options.strategy
                        };
                    null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, K(Object.assign({}, l, {
                        offsets: e.modifiersData.popperOffsets,
                        position: e.options.strategy,
                        adaptive: a,
                        roundOffsets: u
                    })))),
                        null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, K(Object.assign({}, l, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: u
                        })))),
                        e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement
                        })
                },
                data: {}
            };

            //done 

            var tt = {
                passive: !0
            };
            const et = {};
            var nt = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            const mt = {};

            const yt = {
            };
            const bt = {};
            const wt = {

            };
            const xt = {

            };

            var Et = {

            };

            function Ct(t) { }




            var St = Ct()
                , Ot = Ct({
                    defaultModifiers: [et, wt, J, L, bt, mt, xt, G, yt]
                })
                , Mt = Ct({
                    defaultModifiers: [et, wt, J, L]
                });
            const Lt = "transitionend"
                , It = t => {
                    let e = t.getAttribute("data-bs-target");
                    if (!e || "#" === e) {
                        let n = t.getAttribute("href");
                        if (!n || !n.includes("#") && !n.startsWith("."))
                            return null;
                        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
                            e = n && "#" !== n ? n.trim() : null
                    }
                    return e
                }
                , Dt = t => {
                    const e = It(t);
                    return e && document.querySelector(e) ? e : null
                }
                , Pt = t => {
                    const e = It(t);
                    return e ? document.querySelector(e) : null
                }
                , Nt = t => {
                    t.dispatchEvent(new Event(Lt))
                }
                , Bt = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
                    void 0 !== t.nodeType)
                , Rt = t => Bt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
                , Ht = (t, e, n) => {
                    Object.keys(n).forEach((r => {
                        const i = n[r]
                            , o = e[r]
                            , a = o && Bt(o) ? "element" : null == (s = o) ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                        var s;
                        if (!new RegExp(i).test(a))
                            throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`)
                    }
                    ))
                }
                , jt = t => !(!Bt(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
                , zt = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
                , Wt = t => {
                    if (!document.documentElement.attachShadow)
                        return null;
                    if ("function" == typeof t.getRootNode) {
                        const e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? Wt(t.parentNode) : null
                }
                , Ft = () => { }
                , qt = t => {
                    t.offsetHeight
                }
                , $t = () => {
                    const { jQuery: t } = window;
                    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                }
                , Vt = []
                , Yt = () => "rtl" === document.documentElement.dir
                , Xt = t => {
                    var e;
                    e = () => {
                        const e = $t();
                        if (e) {
                            const n = t.NAME
                                , r = e.fn[n];
                            e.fn[n] = t.jQueryInterface,
                                e.fn[n].Constructor = t,
                                e.fn[n].noConflict = () => (e.fn[n] = r,
                                    t.jQueryInterface)
                        }
                    }
                        ,
                        "loading" === document.readyState ? (Vt.length || document.addEventListener("DOMContentLoaded", (() => {
                            Vt.forEach((t => t()))
                        }
                        )),
                            Vt.push(e)) : e()
                }
                , Ut = t => {
                    "function" == typeof t && t()
                }
                , Gt = (t, e, n = !0) => {
                    if (!n)
                        return void Ut(t);
                    const r = (t => {
                        if (!t)
                            return 0;
                        let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
                        const r = Number.parseFloat(e)
                            , i = Number.parseFloat(n);
                        return r || i ? (e = e.split(",")[0],
                            n = n.split(",")[0],
                            1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
                    }
                    )(e) + 5;
                    let i = !1;
                    const o = ({ target: n }) => {
                        n === e && (i = !0,
                            e.removeEventListener(Lt, o),
                            Ut(t))
                    }
                        ;
                    e.addEventListener(Lt, o),
                        setTimeout((() => {
                            i || Nt(e)
                        }
                        ), r)
                }
                , Zt = (t, e, n, r) => {
                    let i = t.indexOf(e);
                    if (-1 === i)
                        return t[!n && r ? t.length - 1 : 0];
                    const o = t.length;
                    return i += n ? 1 : -1,
                        r && (i = (i + o) % o),
                        t[Math.max(0, Math.min(i, o - 1))]
                }
                , Qt = /[^.]*(?=\..*)\.|.*/
                , Kt = /\..*/
                , Jt = /::\d+$/
                , te = {};
            let ee = 1;
            const ne = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }
                , re = /^(mouseenter|mouseleave)/i
                , ie = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
            function oe(t, e) {
                return e && `${e}::${ee++}` || t.uidEvent || ee++
            }
            function ae(t) {
                const e = oe(t);
                return t.uidEvent = e,
                    te[e] = te[e] || {},
                    te[e]
            }
            function se(t, e, n = null) {
                const r = Object.keys(t);
                for (let i = 0, o = r.length; i < o; i++) {
                    const o = t[r[i]];
                    if (o.originalHandler === e && o.delegationSelector === n)
                        return o
                }
                return null
            }
            function ue(t, e, n) {
                const r = "string" == typeof e
                    , i = r ? n : e;
                let o = fe(t);
                return ie.has(o) || (o = t),
                    [r, i, o]
            }
            function le(t, e, n, r, i) {
                if ("string" != typeof e || !t)
                    return;
                if (n || (n = r,
                    r = null),
                    re.test(e)) {
                    const t = t => function (e) {
                        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                            return t.call(this, e)
                    }
                        ;
                    r ? r = t(r) : n = t(n)
                }
                const [o, a, s] = ue(e, n, r)
                    , u = ae(t)
                    , l = u[s] || (u[s] = {})
                    , c = se(l, a, o ? n : null);
                if (c)
                    return void (c.oneOff = c.oneOff && i);
                const f = oe(a, e.replace(Qt, ""))
                    , d = o ? function (t, e, n) {
                        return function r(i) {
                            const o = t.querySelectorAll(e);
                            for (let { target: a } = i; a && a !== this; a = a.parentNode)
                                for (let s = o.length; s--;)
                                    if (o[s] === a)
                                        return i.delegateTarget = a,
                                            r.oneOff && de.off(t, i.type, e, n),
                                            n.apply(a, [i]);
                            return null
                        }
                    }(t, n, r) : function (t, e) {
                        return function n(r) {
                            return r.delegateTarget = t,
                                n.oneOff && de.off(t, r.type, e),
                                e.apply(t, [r])
                        }
                    }(t, n);
                d.delegationSelector = o ? n : null,
                    d.originalHandler = a,
                    d.oneOff = i,
                    d.uidEvent = f,
                    l[f] = d,
                    t.addEventListener(s, d, o)
            }
            function ce(t, e, n, r, i) {
                const o = se(e[n], r, i);
                o && (t.removeEventListener(n, o, Boolean(i)),
                    delete e[n][o.uidEvent])
            }
            function fe(t) {
                return t = t.replace(Kt, ""),
                    ne[t] || t
            }
            const de = {
                on(t, e, n, r) {
                    le(t, e, n, r, !1)
                },
                one(t, e, n, r) {
                    le(t, e, n, r, !0)
                },
                off(t, e, n, r) {
                    if ("string" != typeof e || !t)
                        return;
                    const [i, o, a] = ue(e, n, r)
                        , s = a !== e
                        , u = ae(t)
                        , l = e.startsWith(".");
                    if (void 0 !== o) {
                        if (!u || !u[a])
                            return;
                        return void ce(t, u, a, o, i ? n : null)
                    }
                    l && Object.keys(u).forEach((n => {
                        !function (t, e, n, r) {
                            const i = e[n] || {};
                            Object.keys(i).forEach((o => {
                                if (o.includes(r)) {
                                    const r = i[o];
                                    ce(t, e, n, r.originalHandler, r.delegationSelector)
                                }
                            }
                            ))
                        }(t, u, n, e.slice(1))
                    }
                    ));
                    const c = u[a] || {};
                    Object.keys(c).forEach((n => {
                        const r = n.replace(Jt, "");
                        if (!s || e.includes(r)) {
                            const e = c[n];
                            ce(t, u, a, e.originalHandler, e.delegationSelector)
                        }
                    }
                    ))
                },
                trigger(t, e, n) {
                    if ("string" != typeof e || !t)
                        return null;
                    const r = $t()
                        , i = fe(e)
                        , o = e !== i
                        , a = ie.has(i);
                    let s, u = !0, l = !0, c = !1, f = null;
                    return o && r && (s = r.Event(e, n),
                        r(t).trigger(s),
                        u = !s.isPropagationStopped(),
                        l = !s.isImmediatePropagationStopped(),
                        c = s.isDefaultPrevented()),
                        a ? (f = document.createEvent("HTMLEvents"),
                            f.initEvent(i, u, !0)) : f = new CustomEvent(e, {
                                bubbles: u,
                                cancelable: !0
                            }),
                        void 0 !== n && Object.keys(n).forEach((t => {
                            Object.defineProperty(f, t, {
                                get: () => n[t]
                            })
                        }
                        )),
                        c && f.preventDefault(),
                        l && t.dispatchEvent(f),
                        f.defaultPrevented && void 0 !== s && s.preventDefault(),
                        f
                }
            }
                , he = new Map
                , pe = {
                    set(t, e, n) {
                        he.has(t) || he.set(t, new Map);
                        const r = he.get(t);
                        r.has(e) || 0 === r.size ? r.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)
                    },
                    get: (t, e) => he.has(t) && he.get(t).get(e) || null,
                    remove(t, e) {
                        if (!he.has(t))
                            return;
                        const n = he.get(t);
                        n.delete(e),
                            0 === n.size && he.delete(t)
                    }
                };
            class _e {
                constructor(t) {
                    (t = Rt(t)) && (this._element = t,
                        pe.set(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() {
                    pe.remove(this._element, this.constructor.DATA_KEY),
                        de.off(this._element, this.constructor.EVENT_KEY),
                        Object.getOwnPropertyNames(this).forEach((t => {
                            this[t] = null
                        }
                        ))
                }
                _queueCallback(t, e, n = !0) {
                    Gt(t, e, n)
                }
                static getInstance(t) {
                    return pe.get(Rt(t), this.DATA_KEY)
                }
                static getOrCreateInstance(t, e = {}) {
                    return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
                }
                static get VERSION() {
                    return "5.1.3"
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
            }
            const me = (t, e = "hide") => {
                const n = `click.dismiss${t.EVENT_KEY}`
                    , r = t.NAME;
                de.on(document, n, `[data-bs-dismiss="${r}"]`, (function (n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                        zt(this))
                        return;
                    const i = Pt(this) || this.closest(`.${r}`);
                    t.getOrCreateInstance(i)[e]()
                }
                ))
            }
                ;
            class ge extends _e {
                static get NAME() {
                    return "alert"
                }

            }
            me(ge, "close"),
                Xt(ge);
            const ve = '[data-bs-toggle="button"]';
            class ye extends _e {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(t) {
                    return this.each((function () {
                        const e = ye.getOrCreateInstance(this);
                        "toggle" === t && e[t]()
                    }
                    ))
                }
            }

            Xt(ye);
            const xe = {
                setDataAttribute(t, e, n) {
                    t.setAttribute(`data-bs-${we(e)}`, n)
                },
                removeDataAttribute(t, e) {
                    t.removeAttribute(`data-bs-${we(e)}`)
                },
                getDataAttributes(t) {
                    if (!t)
                        return {};
                    const e = {};
                    return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((n => {
                        let r = n.replace(/^bs/, "");
                        r = r.charAt(0).toLowerCase() + r.slice(1, r.length),
                            e[r] = be(t.dataset[n])
                    }
                    )),
                        e
                },
                getDataAttribute: (t, e) => be(t.getAttribute(`data-bs-${we(e)}`)),
                offset(t) {
                    const e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    }
                },
                position: t => ({
                    top: t.offsetTop,
                    left: t.offsetLeft
                })
            }


                , Ie = "slid.bs.carousel"
                , De = "active"
                , Pe = ".active.carousel-item";
            class Ne extends _e {

            }



            de.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Ne.dataApiClickHandler),
                de.on(window, "load.bs.carousel.data-api", (() => {
                    const t = Te.find('[data-bs-ride="carousel"]');
                    for (let e = 0, n = t.length; e < n; e++)
                        Ne.carouselInterface(t[e], Ne.getInstance(t[e]))
                }
                )),
                Xt(Ne);
            const Be = "collapse"
                , Re = "bs.collapse"
                , He = {
                    toggle: !0,
                    parent: null
                }
                , je = {
                    toggle: "boolean",
                    parent: "(null|element)"
                }



            class Ye extends _e { }

            const Tn = {

            }
                , An = {
                    trapElement: "element",
                    autofocus: "boolean"
                }
                , En = ".bs.focustrap"
                , kn = "backward";
            class Cn {

            }
            const Sn = "modal"
                , On = ".bs.modal"
                , Mn = "Escape"
                , Ln = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0
                }
                , In = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean"
                }

            class Fn extends _e { }

            const qn = "offcanvas"
                , $n = {
                    backdrop: !0,
                    keyboard: !0,
                    scroll: !1
                }
                , Vn = {
                    backdrop: "boolean",
                    keyboard: "boolean",
                    scroll: "boolean"
                }
                , Yn = "show"
                , Xn = ".offcanvas.show"
                , Un = "hidden.bs.offcanvas";
            class Gn extends _e { }

            const Zn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
                , Qn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
                , Kn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
                , Jn = (t, e) => { }
                , tr = {

                };

            const nr = "tooltip"
                , rr = new Set(["sanitize", "allowList", "sanitizeFn"])
                , ir = {}


                , sr = {}

            class gr extends _e { }

            Xt(gr);
            const vr = {}

                , br = {};
            class wr extends gr { }
            Xt(wr);
            const xr = "scrollspy"
                , Tr = ".bs.scrollspy"
                , Ar = {
                    offset: 10,
                    method: "auto",
                    target: ""
                }
                , Er = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                }
                , kr = "dropdown-item"
                , Cr = "active"
                , Sr = ".nav-link"
                , Or = ".nav-link, .list-group-item, .dropdown-item"
                , Mr = "position";
            class Lr extends _e {
            }

            class Rr extends _e {
            }
            de.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
                if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                    zt(this))
                    return;
                Rr.getOrCreateInstance(this).show()
            }
            )),
                Xt(Rr);
            const Hr = "toast"
                , jr = "hide"
                , zr = "show"
                , Wr = "showing"
                , Fr = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                }
                , qr = {
                    animation: !0,
                    autohide: !0,
                    delay: 5e3
                };
            class $r extends _e { }





            function Si(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function Oi(t, e) {
                t.prototype = Object.create(e.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = e
            }


            // done 

            var Mi, Li, Ii, Di, Pi, Ni, Bi, Ri, Hi, ji = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            }, zi = {
                duration: .5,
                overwrite: !1,
                delay: 0
            }, Wi = 1e8, Fi = 1e-8, qi = 2 * Math.PI, $i = qi / 4, Vi = 0, Yi = Math.sqrt, Xi = Math.cos, Ui = Math.sin, Gi = function (t) {
                return "string" == typeof t
            }, Zi = function (t) {
                return "function" == typeof t
            }, Qi = function (t) {
                return "number" == typeof t
            }, Ki = function (t) {
                return void 0 === t
            }, Ji = function (t) {
                return "object" == typeof t
            }, to = function (t) {
                return !1 !== t
            }, eo = function () {
                return "undefined" != typeof window
            }, no = function (t) {
                return Zi(t) || Gi(t)
            }, ro = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () { }
                , io = Array.isArray, oo = /(?:-?\.?\d|\.)+/gi, ao = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, so = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, uo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, lo = /[+-]=-?[.\d]+/, co = /[^,'"\[\]\s]+/gi, fo = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ho = {}, po = {}, _o = function (t) {
                    return (po = Wo(t, ho)) && Ls
                }, mo = function (t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                }, go = function (t, e) {
                    return !e && console.warn(t)
                }, vo = function (t, e) {
                    return t && (ho[t] = e) && po && (po[t] = e) || ho
                }, yo = function () {
                    return 0
                }, bo = {}, wo = [], xo = {}, To = {}, Ao = {}, Eo = 30, ko = [], Co = "", So = function (t) {
                    var e, n, r = t[0];
                    if (Ji(r) || Zi(r) || (t = [t]),
                        !(e = (r._gsap || {}).harness)) {
                        for (n = ko.length; n-- && !ko[n].targetTest(r);)
                            ;
                        e = ko[n]
                    }
                    for (n = t.length; n--;)
                        t[n] && (t[n]._gsap || (t[n]._gsap = new ts(t[n], e))) || t.splice(n, 1);
                    return t
                }, Oo = function (t) {
                    return t._gsap || So(ya(t))[0]._gsap
                }, Mo = function (t, e, n) {
                    return (n = t[e]) && Zi(n) ? t[e]() : Ki(n) && t.getAttribute && t.getAttribute(e) || n
                }, Lo = function (t, e) {
                    return (t = t.split(",")).forEach(e) || t
                }, Io = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                }, Do = function (t) {
                    return Math.round(1e7 * t) / 1e7 || 0
                }, Po = function (t, e) {
                    var n = e.charAt(0)
                        , r = parseFloat(e.substr(2));
                    return t = parseFloat(t),
                        "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
                }, No = function (t, e) {
                    for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;)
                        ;
                    return r < n
                }, Bo = function () {
                    var t, e, n = wo.length, r = wo.slice(0);
                    for (xo = {},
                        wo.length = 0,
                        t = 0; t < n; t++)
                        (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                }, Ro = function (t, e, n, r) {
                    wo.length && Bo(),
                        t.render(e, n, r),
                        wo.length && Bo()
                }, Ho = function (t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(co).length < 2 ? e : Gi(t) ? t.trim() : t
                }, jo = function (t) {
                    return t
                }, zo = function (t, e) {
                    for (var n in e)
                        n in t || (t[n] = e[n]);
                    return t
                }, Wo = function (t, e) {
                    for (var n in e)
                        t[n] = e[n];
                    return t
                }, Fo = function t(e, n) {
                    for (var r in n)
                        "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = Ji(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
                    return e
                }, qo = function (t, e) {
                    var n, r = {};
                    for (n in t)
                        n in e || (r[n] = t[n]);
                    return r
                }, $o = function (t) {
                    var e, n = t.parent || Li, r = t.keyframes ? (e = io(t.keyframes),
                        function (t, n) {
                            for (var r in n)
                                r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
                        }
                    ) : zo;
                    if (to(t.inherit))
                        for (; n;)
                            r(t, n.vars.defaults),
                                n = n.parent || n._dp;
                    return t
                }, Vo = function (t, e, n, r, i) {
                    void 0 === n && (n = "_first"),
                        void 0 === r && (r = "_last");
                    var o, a = t[r];
                    if (i)
                        for (o = e[i]; a && a[i] > o;)
                            a = a._prev;
                    return a ? (e._next = a._next,
                        a._next = e) : (e._next = t[n],
                            t[n] = e),
                        e._next ? e._next._prev = e : t[r] = e,
                        e._prev = a,
                        e.parent = e._dp = t,
                        e
                }, Yo = function (t, e, n, r) {
                }, Xo = function (t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
                        t._act = 0
                }, Uo = function (t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var n = t; n;)
                            n._dirty = 1,
                                n = n.parent;
                    return t
                }, Go = function (t) {
                    for (var e = t.parent; e && e.parent;)
                        e._dirty = 1,
                            e.totalDuration(),
                            e = e.parent;
                    return t
                }, Zo = function t(e) {
                    return !e || e._ts && t(e.parent)
                }, Qo = function (t) {
                    return t._repeat ? Ko(t._tTime, t = t.duration() + t._rDelay) * t : 0
                }, Ko = function (t, e) {
                    var n = Math.floor(t /= e);
                    return t && n === t ? n - 1 : n
                }, Jo = function (t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                }, ta = function (t) {
                    return t._end = Do(t._start + (t._tDur / Math.abs(t._ts || t._rts || Fi) || 0))
                }, ea = function (t, e) {

                }, na = function (t, e) {

                }, ra = function (t, e, n, r) {
                    return e.parent && Xo(e),
                        e._start = Do((Qi(n) ? n : n || t !== Li ? fa(t, n, e) : t._time) + e._delay),
                        e._end = Do(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                        Vo(t, e, "_first", "_last", t._sort ? "_start" : 0),
                        sa(e) || (t._recent = e),
                        r || na(t, e),
                        t
                }, ia = function (t, e) {
                    return (ho.ScrollTrigger || mo("scrollTrigger", e)) && ho.ScrollTrigger.create(e, t)
                }, oa = function (t, e, n, r) {
                    return us(t, e),
                        t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Bi !== Wa.frame ? (wo.push(t),
                            t._lazy = [e, r],
                            1) : void 0 : 1
                }, aa = function t(e) {
                    var n = e.parent;
                    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                }, sa = function (t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                }, ua = function (t, e, n, r) {
                    var i = t._repeat
                        , o = Do(e) || 0
                        , a = t._tTime / t._tDur;
                    return a && !r && (t._time *= o / t._dur),
                        t._dur = o,
                        t._tDur = i ? i < 0 ? 1e10 : Do(o * (i + 1) + t._rDelay * i) : o,
                        a > 0 && !r ? ea(t, t._tTime = t._tDur * a) : t.parent && ta(t),
                        n || Uo(t.parent, t),
                        t
                }, la = function (t) {
                    return t instanceof ns ? Uo(t) : ua(t, t._dur)
                }, ca = {
                    _start: 0,
                    endTime: yo,
                    totalDuration: yo
                }, fa = function t(e, n, r) {
                }, da = function (t, e, n) {
                    var r, i, o = Qi(e[1]), a = (o ? 2 : 1) + (t < 2 ? 0 : 1), s = e[a];
                    if (o && (s.duration = e[1]),
                        s.parent = n,
                        t) {
                        for (r = s,
                            i = n; i && !("immediateRender" in r);)
                            r = i.vars.defaults || {},
                                i = to(i.vars.inherit) && i.parent;
                        s.immediateRender = to(r.immediateRender),
                            t < 2 ? s.runBackwards = 1 : s.startAt = e[a - 1]
                    }
                    return new hs(e[0], s, e[a + 1])
                }, ha = function (t, e) {
                    return t || 0 === t ? e(t) : e
                }, pa = function (t, e, n) {
                    return n < t ? t : n > e ? e : n
                }, _a = function (t, e) {
                    return Gi(t) && (e = fo.exec(t)) ? e[1] : ""
                }, ma = [].slice, ga = function (t, e) {
                    return t && Ji(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ji(t[0])) && !t.nodeType && t !== Ii
                }, va = function (t, e, n) {
                    return void 0 === n && (n = []),
                        t.forEach((function (t) {
                            var r;
                            return Gi(t) && !e || ga(t, 1) ? (r = n).push.apply(r, ya(t)) : n.push(t)
                        }
                        )) || n
                }, ya = function (t, e, n) {
                    return !Gi(t) || n || !Di && Fa() ? io(t) ? va(t, n) : ga(t) ? ma.call(t, 0) : t ? [t] : [] : ma.call((e || Pi).querySelectorAll(t), 0)
                }, ba = function (t) {
                    return t.sort((function () {
                        return .5 - Math.random()
                    }
                    ))
                }, wa = function (t) {

                }, xa = function (t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function (n) {
                        var r = Math.round(parseFloat(n) / t) * t * e;
                        return (r - r % 1) / e + (Qi(n) ? 0 : _a(n))
                    }
                }, Ta = function (t, e) {
                    var n, r, i = io(t);
                    return !i && Ji(t) && (n = i = t.radius || Wi,
                        t.values ? (t = ya(t.values),
                            (r = !Qi(t[0])) && (n *= n)) : t = xa(t.increment)),
                        ha(e, i ? Zi(t) ? function (e) {
                            return r = t(e),
                                Math.abs(r - e) <= n ? r : e
                        }
                            : function (e) { }
                            : xa(t))
                }, Aa = function (t, e, n, r) {
                    return ha(io(t) ? !e : !0 === n ? !!(n = 0) : !r, (function () {
                        return io(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
                    }
                    ))
                }, Ea = function (t, e, n) {
                    return ha(n, (function (n) {
                        return t[~~e(n)]
                    }
                    ))
                }, ka = function (t) {
                    for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o));)
                        r = t.indexOf(")", e),
                            i = "[" === t.charAt(e + 7),
                            n = t.substr(e + 7, r - e - 7).match(i ? co : oo),
                            a += t.substr(o, e - o) + Aa(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
                            o = r + 1;
                    return a + t.substr(o, t.length - o)
                }, Ca = function (t, e, n, r, i) {
                    var o = e - t
                        , a = r - n;
                    return ha(i, (function (e) {
                        return n + ((e - t) / o * a || 0)
                    }
                    ))
                }, Sa = function (t, e, n) {
                    var r, i, o, a = t.labels, s = Wi;
                    for (r in a)
                        (i = a[r] - e) < 0 == !!n && i && s > (i = Math.abs(i)) && (o = r,
                            s = i);
                    return o
                }, Oa = function (t, e, n) {
                    var r, i, o = t.vars, a = o[e];
                    if (a)
                        return r = o[e + "Params"],
                            i = o.callbackScope || t,
                            n && wo.length && Bo(),
                            r ? a.apply(i, r) : a.call(i)
                }, Ma = function (t) {
                    return Xo(t),
                        t.scrollTrigger && t.scrollTrigger.kill(!1),
                        t.progress() < 1 && Oa(t, "onInterrupt"),
                        t
                }, La = function (t) {
                    var e = (t = !t.name && t.default || t).name
                        , n = Zi(t)
                        , r = e && !n && t.init ? function () {
                            this._props = []
                        }
                            : t
                        , i = {
                            init: yo,
                            render: xs,
                            add: as,
                            kill: As,
                            modifier: Ts,
                            rawVars: 0
                        }
                        , o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: vs,
                            aliases: {},
                            register: 0
                        };
                    if (Fa(),
                        t !== r) {
                        if (To[e])
                            return;
                        zo(r, zo(qo(t, i), o)),
                            Wo(r.prototype, Wo(i, qo(t, o))),
                            To[r.prop = e] = r,
                            t.targetTest && (ko.push(r),
                                bo[e] = 1),
                            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    vo(e, r),
                        t.register && t.register(Ls, r, Cs)
                }, Ia = 255, Da = {

                }, Pa = function (t, e, n) {

                }, Na = function (t, e, n) {
                }, Ba = function (t) {
                    var e = []
                        , n = []
                        , r = -1;
                    return t.split(Ha).forEach((function (t) {
                        var i = t.match(so) || [];
                        e.push.apply(e, i),
                            n.push(r += i.length + 1)
                    }
                    )),
                        e.c = n,
                        e
                }, Ra = function (t, e, n) {

                }, Ha = function () {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in Da)
                        e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi")
                }(), ja = /hsl[a]?\(/, za = function (t) {
                    var e, n = t.join(" ");
                    if (Ha.lastIndex = 0,
                        Ha.test(n))
                        return e = ja.test(n),
                            t[1] = Ra(t[1], e),
                            t[0] = Ra(t[0], e, Ba(t[1])),
                            !0
                }, Wa = function () {
                    var t, e, n, r, i, o, a = Date.now, s = 500, u = 33, l = a(), c = l, f = 1e3 / 240, d = f, h = [], p = function n(p) {
                        var _, m, g, v, y = a() - c, b = !0 === p;
                        if (y > s && (l += y - u),
                            ((_ = (g = (c += y) - l) - d) > 0 || b) && (v = ++r.frame,
                                i = g - 1e3 * r.time,
                                r.time = g /= 1e3,
                                d += _ + (_ >= f ? 4 : f - _),
                                m = 1),
                            b || (t = e(n)),
                            m)
                            for (o = 0; o < h.length; o++)
                                h[o](g, i, v, p)
                    };
                    return r = {
                        time: 0,
                        frame: 0,
                        tick: function () {
                            p(!0)
                        },
                        deltaRatio: function (t) {
                            return i / (1e3 / (t || 60))
                        },
                        wake: function () {
                            Ni && (!Di && eo() && (Ii = Di = window,
                                Pi = Ii.document || {},
                                ho.gsap = Ls,
                                (Ii.gsapVersions || (Ii.gsapVersions = [])).push(Ls.version),
                                _o(po || Ii.GreenSockGlobals || !Ii.gsap && Ii || {}),
                                n = Ii.requestAnimationFrame),
                                t && r.sleep(),
                                e = n || function (t) {
                                    return setTimeout(t, d - 1e3 * r.time + 1 | 0)
                                }
                                ,
                                Hi = 1,
                                p(2))
                        },


                        add: function (t, e, n) {
                            var i = e ? function (e, n, o, a) {
                                t(e, n, o, a),
                                    r.remove(i)
                            }
                                : t;
                            return r.remove(t),
                                h[n ? "unshift" : "push"](i),
                                Fa(),
                                i
                        },
                        remove: function (t, e) {
                            ~(e = h.indexOf(t)) && h.splice(e, 1) && o >= e && o--
                        },
                        _listeners: h
                    },
                        r
                }(), Fa = function () {
                    return !Hi && Wa.wake()
                }, qa = {}, $a = /^[\d.\-M][\d.\-,\s]/, Va = /["']/g, Ya = function (t) {
                    for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, u = o.length; s < u; s++)
                        n = o[s],
                            e = s !== u - 1 ? n.lastIndexOf(",") : n.length,
                            r = n.substr(0, e),
                            i[a] = isNaN(r) ? r.replace(Va, "").trim() : +r,
                            a = n.substr(e + 1).trim();
                    return i
                }, Ga = function (t, e) {
                    return t && (Zi(t) ? t : qa[t] || function (t) {
                        var e, n, r, i, o = (t + "").split("("), a = qa[o[0]];
                        return a && o.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ya(o[1])] : (e = t,
                            n = e.indexOf("(") + 1,
                            r = e.indexOf(")"),
                            i = e.indexOf("(", n),
                            e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Ho)) : qa._CE && $a.test(t) ? qa._CE("", t) : a
                    }(t)) || e
                }, Za = function (t, e, n, r) {
                    void 0 === n && (n = function (t) {
                        return 1 - e(1 - t)
                    }
                    ),
                        void 0 === r && (r = function (t) {
                            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                        }
                        );
                    var i, o = {
                        easeIn: e,
                        easeOut: n,
                        easeInOut: r
                    };
                    return Lo(t, (function (t) {
                        for (var e in qa[t] = ho[t] = o,
                            qa[i = t.toLowerCase()] = n,
                            o)
                            qa[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = qa[t + "." + e] = o[e]
                    }
                    )),
                        o
                }, Qa = function (t) {
                    return function (e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                    }
                }, Ka = function t(e, n, r) {
                    var i = n >= 1 ? n : 1
                        , o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
                        , a = o / qi * (Math.asin(1 / i) || 0)
                        , s = function (t) {
                            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Ui((t - a) * o) + 1
                        }
                        , u = "out" === e ? s : "in" === e ? function (t) {
                            return 1 - s(1 - t)
                        }
                            : Qa(s);
                    return o = qi / o,
                        u.config = function (n, r) {
                            return t(e, n, r)
                        }
                        ,
                        u
                }, Ja = function t(e, n) {
                    void 0 === n && (n = 1.70158);
                    var r = function (t) {
                        return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                    }
                        , i = "out" === e ? r : "in" === e ? function (t) {
                            return 1 - r(1 - t)
                        }
                            : Qa(r);
                    return i.config = function (n) {
                        return t(e, n)
                    }
                        ,
                        i
                };
            Lo("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
                var n = e < 5 ? e + 1 : e;
                Za(t + ",Power" + (n - 1), e ? function (t) {
                    return Math.pow(t, n)
                }
                    : function (t) {
                        return t
                    }
                    , (function (t) {
                        return 1 - Math.pow(1 - t, n)
                    }
                    ), (function (t) {
                        return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
                    }
                ))
            }
            )),
                qa.Linear.easeNone = qa.none = qa.Linear.easeIn,
                Za("Elastic", Ka("in"), Ka("out"), Ka()),
                function (t, e) {
                    var n = 1 / e
                        , r = function (r) {
                            return r < n ? t * r * r : r < .7272727272727273 ? t * Math.pow(r - 1.5 / e, 2) + .75 : r < .9090909090909092 ? t * (r -= 2.25 / e) * r + .9375 : t * Math.pow(r - 2.625 / e, 2) + .984375
                        };
                    Za("Bounce", (function (t) {
                        return 1 - r(1 - t)
                    }
                    ), r)
                }(7.5625, 2.75),
                Za("Expo", (function (t) {
                    return t ? Math.pow(2, 10 * (t - 1)) : 0
                }
                )),
                Za("Circ", (function (t) {
                    return -(Yi(1 - t * t) - 1)
                }
                )),
                Za("Sine", (function (t) {
                    return 1 === t ? 1 : 1 - Xi(t * $i)
                }
                )),
                Za("Back", Ja("in"), Ja("out"), Ja()),
                qa.SteppedEase = qa.steps = ho.SteppedEase = {
                    config: function (t, e) {
                        void 0 === t && (t = 1);
                        var n = 1 / t
                            , r = t + (e ? 0 : 1)
                            , i = e ? 1 : 0;
                        return function (t) {
                            return ((r * pa(0, .99999999, t) | 0) + i) * n
                        }
                    }
                },
                zi.ease = qa["quad.out"],
                Lo("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
                    return Co += t + "," + t + "Params,"
                }
                ));
            var ts = function (t, e) {
                this.id = Vi++,
                    t._gsap = this,
                    this.target = t,
                    this.harness = e,
                    this.get = e ? e.get : Mo,
                    this.set = e ? e.getSetter : vs
            }
                , es = function () {
                    function t(t) {
                        this.vars = t,
                            this._delay = +t.delay || 0,
                            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                                this._yoyo = !!t.yoyo || !!t.yoyoEase),
                            this._ts = 1,
                            ua(this, +t.duration, 1, 1),
                            this.data = t.data,
                            Hi || Wa.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function (t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                            this._delay = t,
                            this) : this._delay
                    }
                        ,
                        e.duration = function (t) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                        }
                        ,
                        e.totalDuration = function (t) {
                            return arguments.length ? (this._dirty = 0,
                                ua(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                        }
                        ,
                        e.totalTime = function (t, e) {
                            if (Fa(),
                                !arguments.length)
                                return this._tTime;
                            var n = this._dp;
                            if (n && n.smoothChildTiming && this._ts) {
                                for (ea(this, t),
                                    !n._dp || n.parent || na(n, this); n && n.parent;)
                                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                                        n = n.parent;
                                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ra(this._dp, this, this._start - this._delay)
                            }
                            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Fi || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                                Ro(this, t, e)),
                                this
                        }
                        ,

                        e.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                        }
                        ,
                        e.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Qo(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                        }
                        ,
                        e.iteration = function (t, e) {
                            var n = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Ko(this._tTime, n) + 1 : 1
                        }
                        ,
                        e.timeScale = function (t) {
                            if (!arguments.length)
                                return -1e-8 === this._rts ? 0 : this._rts;
                            if (this._rts === t)
                                return this;
                            var e = this.parent && this._ts ? Jo(this.parent._time, this) : this._tTime;
                            return this._rts = +t || 0,
                                this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
                                this.totalTime(pa(-this._delay, this._tDur, e), !0),
                                ta(this),
                                Go(this)
                        }
                        ,
                        e.paused = function (t) {
                            return arguments.length ? (this._ps !== t && (this._ps = t,
                                t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                                    this._ts = this._act = 0) : (Fa(),
                                        this._ts = this._rts,
                                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Fi && (this._tTime -= Fi)))),
                                this) : this._ps
                        }

                        ,
                        e.endTime = function (t) {
                            return this._start + (to(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                        }
                        ,
                        e.rawTime = function (t) {
                            var e = this.parent || this._dp;
                            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Jo(e.rawTime(t), this) : this._tTime : this._tTime
                        }
                        ,
                        e.globalTime = function (t) {
                            for (var e = this, n = arguments.length ? t : e.rawTime(); e;)
                                n = e._start + n / (e._ts || 1),
                                    e = e._dp;
                            return n
                        }
                        ,
                        e.repeat = function (t) {
                            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                                la(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                        }
                        ,

                        e.yoyo = function (t) {
                            return arguments.length ? (this._yoyo = t,
                                this) : this._yoyo
                        }
                        ,
                        e.seek = function (t, e) {
                            return this.totalTime(fa(this, t), to(e))
                        }
                        ,
                        e.restart = function (t, e) {
                            return this.play().totalTime(t ? -this._delay : 0, to(e))
                        }
                        ,
                        e.play = function (t, e) {
                            return null != t && this.seek(t, e),
                                this.reversed(!1).paused(!1)
                        }
                        ,
                        e.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e),
                                this.reversed(!0).paused(!1)
                        }
                        ,
                        e.pause = function (t, e) {
                            return null != t && this.seek(t, e),
                                this.paused(!0)
                        }
                        ,
                        e.resume = function () {
                            return this.paused(!1)
                        }
                        ,
                        e.reversed = function (t) {
                            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                                this) : this._rts < 0
                        }
                        ,
                        e.invalidate = function () {
                            return this._initted = this._act = 0,
                                this._zTime = -1e-8,
                                this
                        }
                        ,
                        e.isActive = function () {
                            var t, e = this.parent || this._dp, n = this._start;
                            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Fi))
                        }
                        ,
                        e.eventCallback = function (t, e, n) {
                            var r = this.vars;
                            return arguments.length > 1 ? (e ? (r[t] = e,
                                n && (r[t + "Params"] = n),
                                "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
                                this) : r[t]
                        }
                        ,
                        e.then = function (t) {
                            var e = this;
                            return new Promise((function (n) {
                                var r = Zi(t) ? t : jo
                                    , i = function () {
                                        var t = e.then;
                                        e.then = null,
                                            Zi(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                                            n(r),
                                            e.then = t
                                    };
                                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                            }
                            ))
                        }
                        ,
                        e.kill = function () {
                            Ma(this)
                        }
                        ,
                        t
                }();

            zo(es.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -1e-8,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });


            var ns = function (t) {
                function e(e, n) {
                    var r;
                    return void 0 === e && (e = {}),
                        (r = t.call(this, e) || this).labels = {},
                        r.smoothChildTiming = !!e.smoothChildTiming,
                        r.autoRemoveChildren = !!e.autoRemoveChildren,
                        r._sort = to(e.sortChildren),
                        Li && ra(e.parent || Li, Si(r), n),
                        e.reversed && r.reverse(),
                        e.paused && r.paused(!0),
                        e.scrollTrigger && ia(Si(r), e.scrollTrigger),
                        r
                }
                Oi(e, t);
                var n = e.prototype;
                return n.to = function (t, e, n) {
                    return da(0, arguments, this),
                        this
                }
                    ,
                    // làm chuột đứng chậm lại để tạo hiệu ứng
                    n.fromTo = function (t, e, n, r) {
                        return da(2, arguments, this),
                            this
                    }
                    ,
                    n.set = function (t, e, n) {
                        return e.duration = 0,
                            e.parent = this,
                            $o(e).repeatDelay || (e.repeat = 0),
                            e.immediateRender = !!e.immediateRender,
                            new hs(t, e, fa(this, n), 1),
                            this
                    }
                    ,
                    n.call = function (t, e, n) {
                        return ra(this, hs.delayedCall(0, t, e), n)
                    }
                    ,
                    n.staggerTo = function (t, e, n, r, i, o, a) {
                        return n.duration = e,
                            n.stagger = n.stagger || r,
                            n.onComplete = o,
                            n.onCompleteParams = a,
                            n.parent = this,
                            new hs(t, n, fa(this, i)),
                            this
                    }
                    ,
                    n.staggerFrom = function (t, e, n, r, i, o, a) {
                        return n.runBackwards = 1,
                            $o(n).immediateRender = to(n.immediateRender),
                            this.staggerTo(t, e, n, r, i, o, a)
                    }
                    ,
                    n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
                        return r.startAt = n,
                            $o(r).immediateRender = to(r.immediateRender),
                            this.staggerTo(t, e, r, i, o, a, s)
                    }
                    ,
                    n.render = function (t, e, n) {
                        var r, i, o, a, s, u, l, c, f, d, h, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = t <= 0 ? 0 : Do(t), y = this._zTime < 0 != t < 0 && (this._initted || !g);
                        if (this !== Li && v > m && t >= 0 && (v = m),
                            v !== this._tTime || n || y) {
                            if (_ !== this._time && g && (v += this._time - _,
                                t += this._time - _),
                                r = v,
                                f = this._start,
                                u = !(c = this._ts),
                                y && (g || (_ = this._zTime),
                                    (t || !e) && (this._zTime = t)),
                                this._repeat) {
                                if (h = this._yoyo,
                                    s = g + this._rDelay,
                                    this._repeat < -1 && t < 0)
                                    return this.totalTime(100 * s + t, e, n);
                                if (r = Do(v % s),
                                    v === m ? (a = this._repeat,
                                        r = g) : ((a = ~~(v / s)) && a === v / s && (r = g,
                                            a--),
                                            r > g && (r = g)),
                                    d = Ko(this._tTime, s),
                                    !_ && this._tTime && d !== a && (d = a),
                                    h && 1 & a && (r = g - r,
                                        p = 1),
                                    a !== d && !this._lock) {
                                    var b = h && 1 & d
                                        , w = b === (h && 1 & a);
                                    if (a < d && (b = !b),
                                        _ = b ? 0 : g,
                                        this._lock = 1,
                                        this.render(_ || (p ? 0 : Do(a * s)), e, !g)._lock = 0,
                                        this._tTime = v,
                                        !e && this.parent && Oa(this, "onRepeat"),
                                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                                        _ && _ !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                        return this;
                                    if (g = this._dur,
                                        m = this._tDur,
                                        w && (this._lock = 2,
                                            _ = b ? g : -1e-4,
                                            this.render(_, !0),
                                            this.vars.repeatRefresh && !p && this.invalidate()),
                                        this._lock = 0,
                                        !this._ts && !u)
                                        return this;
                                    Ua(this, p)
                                }
                            }
                            if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, n) {
                                var r;
                                if (n > e)
                                    for (r = t._first; r && r._start <= n;) {
                                        if ("isPause" === r.data && r._start > e)
                                            return r;
                                        r = r._next
                                    }
                                else
                                    for (r = t._last; r && r._start >= n;) {
                                        if ("isPause" === r.data && r._start < e)
                                            return r;
                                        r = r._prev
                                    }
                            }(this, Do(_), Do(r)),
                                l && (v -= r - (r = l._start))),
                                this._tTime = v,
                                this._time = r,
                                this._act = !c,
                                this._initted || (this._onUpdate = this.vars.onUpdate,
                                    this._initted = 1,
                                    this._zTime = t,
                                    _ = 0),
                                !_ && r && !e && (Oa(this, "onStart"),
                                    this._tTime !== v))
                                return this;
                            if (r >= _ && t >= 0)
                                for (i = this._first; i;) {
                                    if (o = i._next,
                                        (i._act || r >= i._start) && i._ts && l !== i) {
                                        if (i.parent !== this)
                                            return this.render(t, e, n);
                                        if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n),
                                            r !== this._time || !this._ts && !u) {
                                            l = 0,
                                                o && (v += this._zTime = -1e-8);
                                            break
                                        }
                                    }
                                    i = o
                                }
                            else {
                                i = this._last;
                                for (var x = t < 0 ? t : r; i;) {
                                    if (o = i._prev,
                                        (i._act || x <= i._end) && i._ts && l !== i) {
                                        if (i.parent !== this)
                                            return this.render(t, e, n);
                                        if (i.render(i._ts > 0 ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, e, n),
                                            r !== this._time || !this._ts && !u) {
                                            l = 0,
                                                o && (v += this._zTime = x ? -1e-8 : Fi);
                                            break
                                        }
                                    }
                                    i = o
                                }
                            }
                            if (l && !e && (this.pause(),
                                l.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1,
                                this._ts))
                                return this._start = f,
                                    ta(this),
                                    this.render(t, e, n);
                            this._onUpdate && !e && Oa(this, "onUpdate", !0),
                                (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !g) && (v === m && this._ts > 0 || !v && this._ts < 0) && Xo(this, 1),
                                    e || t < 0 && !_ || !v && !_ && m || (Oa(this, v === m && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                                        this._prom && !(v < m && this.timeScale() > 0) && this._prom())))
                        }
                        return this
                    }
                    ,
                    n.add = function (t, e) {
                        var n = this;
                        if (Qi(e) || (e = fa(this, e, t)),
                            !(t instanceof es)) {
                            if (io(t))
                                return t.forEach((function (t) {
                                    return n.add(t, e)
                                }
                                )),
                                    this;
                            if (Gi(t))
                                return this.addLabel(t, e);
                            if (!Zi(t))
                                return this;
                            t = hs.delayedCall(0, t)
                        }
                        return this !== t ? ra(this, t, e) : this
                    }
                    ,

                    n.getById = function (t) {
                        for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                            if (e[n].vars.id === t)
                                return e[n]
                    }
                    ,
                    n.remove = function (t) {
                        return Gi(t) ? this.removeLabel(t) : Zi(t) ? this.killTweensOf(t) : (Yo(this, t),
                            t === this._recent && (this._recent = this._last),
                            Uo(this))
                    }
                    ,
                    n.totalTime = function (e, n) {
                        return arguments.length ? (this._forcing = 1,
                            !this._dp && this._ts && (this._start = Do(Wa.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                            t.prototype.totalTime.call(this, e, n),
                            this._forcing = 0,
                            this) : this._tTime
                    }
                    ,
                    n.addLabel = function (t, e) {
                        return this.labels[t] = fa(this, e),
                            this
                    }
                    ,
                    n.removeLabel = function (t) {
                        return delete this.labels[t],
                            this
                    }
                    ,
                    n.addPause = function (t, e, n) {
                        var r = hs.delayedCall(0, e || yo, n);
                        return r.data = "isPause",
                            this._hasPause = 1,
                            ra(this, r, fa(this, t))
                    }
                    ,


                    n.tweenFromTo = function (t, e, n) {
                        return this.tweenTo(e, zo({
                            startAt: {
                                time: fa(this, t)
                            }
                        }, n))
                    }
                    ,
                    n.recent = function () {
                        return this._recent
                    }
                    ,
                    n.nextLabel = function (t) {
                        return void 0 === t && (t = this._time),
                            Sa(this, fa(this, t))
                    }
                    ,
                    n.previousLabel = function (t) {
                        return void 0 === t && (t = this._time),
                            Sa(this, fa(this, t), 1)
                    }
                    ,
                    n.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Fi)
                    }
                    ,
                    n.shiftChildren = function (t, e, n) {
                        void 0 === n && (n = 0);
                        for (var r, i = this._first, o = this.labels; i;)
                            i._start >= n && (i._start += t,
                                i._end += t),
                                i = i._next;
                        if (e)
                            for (r in o)
                                o[r] >= n && (o[r] += t);
                        return Uo(this)
                    }
                    ,
                    n.invalidate = function () {
                        var e = this._first;
                        for (this._lock = 0; e;)
                            e.invalidate(),
                                e = e._next;
                        return t.prototype.invalidate.call(this)
                    }
                    ,
                    n.clear = function (t) {
                        void 0 === t && (t = !0);
                        for (var e, n = this._first; n;)
                            e = n._next,
                                this.remove(n),
                                n = e;
                        return this._dp && (this._time = this._tTime = this._pTime = 0),
                            t && (this.labels = {}),
                            Uo(this)
                    }
                    ,
                    n.totalDuration = function (t) {
                        var e, n, r, i = 0, o = this, a = o._last, s = Wi;
                        if (arguments.length)
                            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                        if (o._dirty) {
                            for (r = o.parent; a;)
                                e = a._prev,
                                    a._dirty && a.totalDuration(),
                                    (n = a._start) > s && o._sort && a._ts && !o._lock ? (o._lock = 1,
                                        ra(o, a, n - a._delay, 1)._lock = 0) : s = n,
                                    n < 0 && a._ts && (i -= n,
                                        (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                                            o._time -= n,
                                            o._tTime -= n),
                                        o.shiftChildren(-n, !1, -Infinity),
                                        s = 0),
                                    a._end > i && a._ts && (i = a._end),
                                    a = e;
                            ua(o, o === Li && o._time > i ? o._time : i, 1, 1),
                                o._dirty = 0
                        }
                        return o._tDur
                    }
                    ,
                    e.updateRoot = function (t) {
                        if (Li._ts && (Ro(Li, Jo(t, Li)),
                            Bi = Wa.frame),
                            Wa.frame >= Eo) {
                            Eo += ji.autoSleep || 120;
                            var e = Li._first;
                            if ((!e || !e._ts) && ji.autoSleep && Wa._listeners.length < 2) {
                                for (; e && !e._ts;)
                                    e = e._next;
                                e || Wa.sleep()
                            }
                        }
                    }
                    ,
                    e
            }(es);
            zo(ns.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var rs, is, os = function (t, e, n, r, i, o, a) {
                var s, u, l, c, f, d, h, p, _ = new Cs(this._pt, t, e, 0, 1, ws, null, i), m = 0, g = 0;
                for (_.b = n,
                    _.e = r,
                    n += "",
                    (h = ~(r += "").indexOf("random(")) && (r = ka(r)),
                    o && (o(p = [n, r], t, e),
                        n = p[0],
                        r = p[1]),
                    u = n.match(uo) || []; s = uo.exec(r);)
                    c = s[0],
                        f = r.substring(m, s.index),
                        l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1),
                        c !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                            _._pt = {
                                _next: _._pt,
                                p: f || 1 === g ? f : ",",
                                s: d,
                                c: "=" === c.charAt(1) ? Po(d, c) - d : parseFloat(c) - d,
                                m: l && l < 4 ? Math.round : 0
                            },
                            m = uo.lastIndex);
                return _.c = m < r.length ? r.substring(m, r.length) : "",
                    _.fp = a,
                    (lo.test(r) || h) && (_.e = 0),
                    this._pt = _,
                    _
            }, as = function (t, e, n, r, i, o, a, s, u) {
                Zi(r) && (r = r(i || 0, t, o));
                var l, c = t[e], f = "get" !== n ? n : Zi(c) ? u ? t[e.indexOf("set") || !Zi(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c, d = Zi(c) ? u ? ms : _s : ps;
                if (Gi(r) && (~r.indexOf("random(") && (r = ka(r)),
                    "=" === r.charAt(1) && ((l = Po(f, r) + (_a(f) || 0)) || 0 === l) && (r = l)),
                    f !== r || is)
                    return isNaN(f * r) || "" === r ? (!c && !(e in t) && mo(e, r),
                        os.call(this, t, e, f, r, d, s || ji.stringFilter, u)) : (l = new Cs(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof c ? bs : ys, 0, d),
                            u && (l.fp = u),
                            a && l.modifier(a, this, t),
                            this._pt = l)
            }, ss = function (t, e, n, r, i, o) {
                var a, s, u, l;
                if (To[t] && !1 !== (a = new To[t]).init(i, a.rawVars ? e[t] : function (t, e, n, r, i) {
                    if (Zi(t) && (t = cs(t, i, e, n, r)),
                        !Ji(t) || t.style && t.nodeType || io(t) || ro(t))
                        return Gi(t) ? cs(t, i, e, n, r) : t;
                    var o, a = {};
                    for (o in t)
                        a[o] = cs(t[o], i, e, n, r);
                    return a
                }(e[t], r, i, o, n), n, r, o) && (n._pt = s = new Cs(n._pt, i, t, 0, 1, a.render, a, 0, a.priority),
                    n !== Ri))
                    for (u = n._ptLookup[n._targets.indexOf(i)],
                        l = a._props.length; l--;)
                        u[a._props[l]] = s;
                return a
            }, us = function t(e, n) {
                var r, i, o, a, s, u, l, c, f, d, h, p, _, m = e.vars, g = m.ease, v = m.startAt, y = m.immediateRender, b = m.lazy, w = m.onUpdate, x = m.onUpdateParams, T = m.callbackScope, A = m.runBackwards, E = m.yoyoEase, k = m.keyframes, C = m.autoRevert, S = e._dur, O = e._startAt, M = e._targets, L = e.parent, I = L && "nested" === L.data ? L.parent._targets : M, D = "auto" === e._overwrite && !Mi, P = e.timeline;
                if (P && (!k || !g) && (g = "none"),
                    e._ease = Ga(g, zi.ease),
                    e._yEase = E ? Xa(Ga(!0 === E ? g : E, zi.ease)) : 0,
                    E && e._yoyo && !e._repeat && (E = e._yEase,
                        e._yEase = e._ease,
                        e._ease = E),
                    e._from = !P && !!m.runBackwards,
                    !P || k && !m.stagger) {
                    if (p = (c = M[0] ? Oo(M[0]).harness : 0) && m[c.prop],
                        r = qo(m, bo),
                        O && (Xo(O.render(-1, !0)),
                            O._lazy = 0),
                        v)
                        if (Xo(e._startAt = hs.set(M, zo({
                            data: "isStart",
                            overwrite: !1,
                            parent: L,
                            immediateRender: !0,
                            lazy: to(b),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: x,
                            callbackScope: T,
                            stagger: 0
                        }, v))),
                            n < 0 && !y && !C && e._startAt.render(-1, !0),
                            y) {
                            if (n > 0 && !C && (e._startAt = 0),
                                S && n <= 0)
                                return void (n && (e._zTime = n))
                        } else
                            !1 === C && (e._startAt = 0);
                    else if (A && S)
                        if (O)
                            !C && (e._startAt = 0);
                        else if (n && (y = !1),
                            o = zo({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: y && to(b),
                                immediateRender: y,
                                stagger: 0,
                                parent: L
                            }, r),
                            p && (o[c.prop] = p),
                            Xo(e._startAt = hs.set(M, o)),
                            n < 0 && e._startAt.render(-1, !0),
                            e._zTime = n,
                            y) {
                            if (!n)
                                return
                        } else
                            t(e._startAt, Fi);
                    for (e._pt = e._ptCache = 0,
                        b = S && to(b) || b && !S,
                        i = 0; i < M.length; i++) {
                        if (l = (s = M[i])._gsap || So(M)[i]._gsap,
                            e._ptLookup[i] = d = {},
                            xo[l.id] && wo.length && Bo(),
                            h = I === M ? i : I.indexOf(s),
                            c && !1 !== (f = new c).init(s, p || r, e, h, I) && (e._pt = a = new Cs(e._pt, s, f.name, 0, 1, f.render, f, 0, f.priority),
                                f._props.forEach((function (t) {
                                    d[t] = a
                                }
                                )),
                                f.priority && (u = 1)),
                            !c || p)
                            for (o in r)
                                To[o] && (f = ss(o, r, e, h, s, I)) ? f.priority && (u = 1) : d[o] = a = as.call(e, s, o, "get", r[o], h, I, 0, m.stringFilter);
                        e._op && e._op[i] && e.kill(s, e._op[i]),
                            D && e._pt && (rs = e,
                                Li.killTweensOf(s, d, e.globalTime(n)),
                                _ = !e.parent,
                                rs = 0),
                            e._pt && b && (xo[l.id] = 1)
                    }
                    u && ks(e),
                        e._onInit && e._onInit(e)
                }
                e._onUpdate = w,
                    e._initted = (!e._op || e._pt) && !_,
                    k && n <= 0 && P.render(Wi, !0, !0)
            }, ls = function (t, e, n, r) {
                var i, o, a = e.ease || r || "power1.inOut";
                if (io(e))
                    o = n[t] || (n[t] = []),
                        e.forEach((function (t, n) {
                            return o.push({
                                t: n / (e.length - 1) * 100,
                                v: t,
                                e: a
                            })
                        }
                        ));
                else
                    for (i in e)
                        o = n[i] || (n[i] = []),
                            "ease" === i || o.push({
                                t: parseFloat(t),
                                v: e[i],
                                e: a
                            })
            }, cs = function (t, e, n, r, i) {
                return Zi(t) ? t.call(e, n, r, i) : Gi(t) && ~t.indexOf("random(") ? ka(t) : t
            }, fs = Co + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ds = {};
            Lo(fs + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
                return ds[t] = 1
            }
            ));
            var hs = function (t) {
                function e(e, n, r, i) {
                    var o;
                    "number" == typeof n && (r.duration = n,
                        n = r,
                        r = null);
                    var a, s, u, l, c, f, d, h, p = (o = t.call(this, i ? n : $o(n)) || this).vars, _ = p.duration, m = p.delay, g = p.immediateRender, v = p.stagger, y = p.overwrite, b = p.keyframes, w = p.defaults, x = p.scrollTrigger, T = p.yoyoEase, A = n.parent || Li, E = (io(e) || ro(e) ? Qi(e[0]) : "length" in n) ? [e] : ya(e);
                    if (o._targets = E.length ? So(E) : go("GSAP target " + e + " not found. https://greensock.com", !ji.nullTargetWarn) || [],
                        o._ptLookup = [],
                        o._overwrite = y,
                        b || v || no(_) || no(m)) {
                        if (n = o.vars,
                            (a = o.timeline = new ns({
                                data: "nested",
                                defaults: w || {}
                            })).kill(),
                            a.parent = a._dp = Si(o),
                            a._start = 0,
                            v || no(_) || no(m)) {
                            if (l = E.length,
                                d = v && wa(v),
                                Ji(v))
                                for (c in v)
                                    ~fs.indexOf(c) && (h || (h = {}),
                                        h[c] = v[c]);
                            for (s = 0; s < l; s++)
                                (u = qo(n, ds)).stagger = 0,
                                    T && (u.yoyoEase = T),
                                    h && Wo(u, h),
                                    f = E[s],
                                    u.duration = +cs(_, Si(o), s, f, E),
                                    u.delay = (+cs(m, Si(o), s, f, E) || 0) - o._delay,
                                    !v && 1 === l && u.delay && (o._delay = m = u.delay,
                                        o._start += m,
                                        u.delay = 0),
                                    a.to(f, u, d ? d(s, f, E) : 0),
                                    a._ease = qa.none;
                            a.duration() ? _ = m = 0 : o.timeline = 0
                        } else if (b) {
                            $o(zo(a.vars.defaults, {
                                ease: "none"
                            })),
                                a._ease = Ga(b.ease || n.ease || "none");
                            var k, C, S, O = 0;
                            if (io(b))
                                b.forEach((function (t) {
                                    return a.to(E, t, ">")
                                }
                                ));
                            else {
                                for (c in u = {},
                                    b)
                                    "ease" === c || "easeEach" === c || ls(c, b[c], u, b.easeEach);
                                for (c in u)
                                    for (k = u[c].sort((function (t, e) {
                                        return t.t - e.t
                                    }
                                    )),
                                        O = 0,
                                        s = 0; s < k.length; s++)
                                        (S = {
                                            ease: (C = k[s]).e,
                                            duration: (C.t - (s ? k[s - 1].t : 0)) / 100 * _
                                        })[c] = C.v,
                                            a.to(E, S, O),
                                            O += S.duration;
                                a.duration() < _ && a.to({}, {
                                    duration: _ - a.duration()
                                })
                            }
                        }
                        _ || o.duration(_ = a.duration())
                    } else
                        o.timeline = 0;
                    return !0 !== y || Mi || (rs = Si(o),
                        Li.killTweensOf(E),
                        rs = 0),
                        ra(A, Si(o), r),
                        n.reversed && o.reverse(),
                        n.paused && o.paused(!0),
                        (g || !_ && !b && o._start === Do(A._time) && to(g) && Zo(Si(o)) && "nested" !== A.data) && (o._tTime = -1e-8,
                            o.render(Math.max(0, -m))),
                        x && ia(Si(o), x),
                        o
                }
                Oi(e, t);
                var n = e.prototype;
                return n.render = function (t, e, n) {
                    var r, i, o, a, s, u, l, c, f, d = this._time, h = this._tDur, p = this._dur, _ = t > h - Fi && t >= 0 ? h : t < Fi ? 0 : t;
                    if (p) {
                        if (_ !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (r = _,
                                c = this.timeline,
                                this._repeat) {
                                if (a = p + this._rDelay,
                                    this._repeat < -1 && t < 0)
                                    return this.totalTime(100 * a + t, e, n);
                                if (r = Do(_ % a),
                                    _ === h ? (o = this._repeat,
                                        r = p) : ((o = ~~(_ / a)) && o === _ / a && (r = p,
                                            o--),
                                            r > p && (r = p)),
                                    (u = this._yoyo && 1 & o) && (f = this._yEase,
                                        r = p - r),
                                    s = Ko(this._tTime, a),
                                    r === d && !n && this._initted)
                                    return this._tTime = _,
                                        this;
                                o !== s && (c && this._yEase && Ua(c, u),
                                    !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1,
                                        this.render(Do(a * o), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (oa(this, t < 0 ? t : r, n, e))
                                    return this._tTime = 0,
                                        this;
                                if (d !== this._time)
                                    return this;
                                if (p !== this._dur)
                                    return this.render(t, e, n)
                            }
                            if (this._tTime = _,
                                this._time = r,
                                !this._act && this._ts && (this._act = 1,
                                    this._lazy = 0),
                                this.ratio = l = (f || this._ease)(r / p),
                                this._from && (this.ratio = l = 1 - l),
                                r && !d && !e && (Oa(this, "onStart"),
                                    this._tTime !== _))
                                return this;
                            for (i = this._pt; i;)
                                i.r(l, i.d),
                                    i = i._next;
                            c && c.render(t < 0 ? t : !r && u ? -1e-8 : c._dur * c._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t),
                                this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                                    Oa(this, "onUpdate")),
                                this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && Oa(this, "onRepeat"),
                                _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                    (t || !p) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Xo(this, 1),
                                    e || t < 0 && !d || !_ && !d || (Oa(this, _ === h ? "onComplete" : "onReverseComplete", !0),
                                        this._prom && !(_ < h && this.timeScale() > 0) && this._prom()))
                        }
                    } else
                        !function (t, e, n, r) {
                            var i, o, a, s = t.ratio, u = e < 0 || !e && (!t._start && aa(t) && (t._initted || !sa(t)) || (t._ts < 0 || t._dp._ts < 0) && !sa(t)) ? 0 : 1, l = t._rDelay, c = 0;
                            if (l && t._repeat && (c = pa(0, t._tDur, e),
                                o = Ko(c, l),
                                t._yoyo && 1 & o && (u = 1 - u),
                                o !== Ko(t._tTime, l) && (s = 1 - u,
                                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                                u !== s || r || t._zTime === Fi || !e && t._zTime) {
                                if (!t._initted && oa(t, e, r, n))
                                    return;
                                for (a = t._zTime,
                                    t._zTime = e || (n ? Fi : 0),
                                    n || (n = e && !a),
                                    t.ratio = u,
                                    t._from && (u = 1 - u),
                                    t._time = 0,
                                    t._tTime = c,
                                    i = t._pt; i;)
                                    i.r(u, i.d),
                                        i = i._next;
                                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                    t._onUpdate && !n && Oa(t, "onUpdate"),
                                    c && t._repeat && !n && t.parent && Oa(t, "onRepeat"),
                                    (e >= t._tDur || e < 0) && t.ratio === u && (u && Xo(t, 1),
                                        n || (Oa(t, u ? "onComplete" : "onReverseComplete", !0),
                                            t._prom && t._prom()))
                            } else
                                t._zTime || (t._zTime = e)
                        }(this, t, e, n);
                    return this
                }
                    ,
                    n.targets = function () {
                        return this._targets
                    }
                    ,
                    n.invalidate = function () {
                        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
                            this._ptLookup = [],
                            this.timeline && this.timeline.invalidate(),
                            t.prototype.invalidate.call(this)
                    }
                    ,
                    n.resetTo = function (t, e, n, r) {
                        Hi || Wa.wake(),
                            this._ts || this.play();
                        var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                        return this._initted || us(this, i),
                            function (t, e, n, r, i, o, a) {
                                var s, u, l, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                                if (!c)
                                    for (c = t._ptCache[e] = [],
                                        u = t._ptLookup,
                                        l = t._targets.length; l--;) {
                                        if ((s = u[l][e]) && s.d && s.d._pt)
                                            for (s = s.d._pt; s && s.p !== e;)
                                                s = s._next;
                                        if (!s)
                                            return is = 1,
                                                t.vars[e] = "+=0",
                                                us(t, a),
                                                is = 0,
                                                1;
                                        c.push(s)
                                    }
                                for (l = c.length; l--;)
                                    (s = c[l]).s = !r && 0 !== r || i ? s.s + (r || 0) + o * s.c : r,
                                        s.c = n - s.s,
                                        s.e && (s.e = Io(n) + _a(s.e)),
                                        s.b && (s.b = s.s + _a(s.b))
                            }(this, t, e, n, r, this._ease(i / this._dur), i) ? this.resetTo(t, e, n, r) : (ea(this, 0),
                                this.parent || Vo(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                                this.render(0))
                    }
                    ,
                    n.kill = function (t, e) {
                        if (void 0 === e && (e = "all"),
                            !(t || e && "all" !== e))
                            return this._lazy = this._pt = 0,
                                this.parent ? Ma(this) : this;
                        if (this.timeline) {
                            var n = this.timeline.totalDuration();
                            return this.timeline.killTweensOf(t, e, rs && !0 !== rs.vars.overwrite)._first || Ma(this),
                                this.parent && n !== this.timeline.totalDuration() && ua(this, this._dur * this.timeline._tDur / n, 0, 1),
                                this
                        }
                        var r, i, o, a, s, u, l, c = this._targets, f = t ? ya(t) : c, d = this._ptLookup, h = this._pt;
                        if ((!e || "all" === e) && function (t, e) {
                            for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];)
                                ;
                            return n < 0
                        }(c, f))
                            return "all" === e && (this._pt = 0),
                                Ma(this);
                        for (r = this._op = this._op || [],
                            "all" !== e && (Gi(e) && (s = {},
                                Lo(e, (function (t) {
                                    return s[t] = 1
                                }
                                )),
                                e = s),
                                e = function (t, e) {
                                    var n, r, i, o, a = t[0] ? Oo(t[0]).harness : 0, s = a && a.aliases;
                                    if (!s)
                                        return e;
                                    for (r in n = Wo({}, e),
                                        s)
                                        if (r in n)
                                            for (i = (o = s[r].split(",")).length; i--;)
                                                n[o[i]] = n[r];
                                    return n
                                }(c, e)),
                            l = c.length; l--;)
                            if (~f.indexOf(c[l]))
                                for (s in i = d[l],
                                    "all" === e ? (r[l] = e,
                                        a = i,
                                        o = {}) : (o = r[l] = r[l] || {},
                                            a = e),
                                    a)
                                    (u = i && i[s]) && ("kill" in u.d && !0 !== u.d.kill(s) || Yo(this, u, "_pt"),
                                        delete i[s]),
                                        "all" !== o && (o[s] = 1);
                        return this._initted && !this._pt && h && Ma(this),
                            this
                    }
                    ,
                    e.to = function (t, n) {
                        return new e(t, n, arguments[2])
                    }
                    ,
                    e.from = function (t, e) {
                        return da(1, arguments)
                    }
                    ,
                    e.delayedCall = function (t, n, r, i) {
                        return new e(n, 0, {
                            immediateRender: !1,
                            lazy: !1,
                            overwrite: !1,
                            delay: t,
                            onComplete: n,
                            onReverseComplete: n,
                            onCompleteParams: r,
                            onReverseCompleteParams: r,
                            callbackScope: i
                        })
                    }
                    ,
                    e.fromTo = function (t, e, n) {
                        return da(2, arguments)
                    }
                    ,
                    e.set = function (t, n) {
                        return n.duration = 0,
                            n.repeatDelay || (n.repeat = 0),
                            new e(t, n)
                    }
                    ,
                    e.killTweensOf = function (t, e, n) {
                        return Li.killTweensOf(t, e, n)
                    }
                    ,
                    e
            }(es);
            zo(hs.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }),
                Lo("staggerTo,staggerFrom,staggerFromTo", (function (t) {
                    hs[t] = function () {
                        var e = new ns
                            , n = ma.call(arguments, 0);
                        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                            e[t].apply(e, n)
                    }
                }
                ));
            var ps = function (t, e, n) {
                return t[e] = n
            }
                , _s = function (t, e, n) {
                    return t[e](n)
                }
                , ms = function (t, e, n, r) {
                    return t[e](r.fp, n)
                }
                , gs = function (t, e, n) {
                    return t.setAttribute(e, n)
                }
                , vs = function (t, e) {
                    return Zi(t[e]) ? _s : Ki(t[e]) && t.setAttribute ? gs : ps
                }
                , ys = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
                }
                , bs = function (t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                }
                , ws = function (t, e) {
                    var n = e._pt
                        , r = "";
                    if (!t && e.b)
                        r = e.b;
                    else if (1 === t && e.e)
                        r = e.e;
                    else {
                        for (; n;)
                            r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r,
                                n = n._next;
                        r += e.c
                    }
                    e.set(e.t, e.p, r, e)
                }
                , xs = function (t, e) {
                    for (var n = e._pt; n;)
                        n.r(t, n.d),
                            n = n._next
                }
                , Ts = function (t, e, n, r) {
                    for (var i, o = this._pt; o;)
                        i = o._next,
                            o.p === r && o.modifier(t, e, n),
                            o = i
                }
                , As = function (t) {
                    for (var e, n, r = this._pt; r;)
                        n = r._next,
                            r.p === t && !r.op || r.op === t ? Yo(this, r, "_pt") : r.dep || (e = 1),
                            r = n;
                    return !e
                }
                , Es = function (t, e, n, r) {
                    r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
                }
                , ks = function (t) {
                    for (var e, n, r, i, o = t._pt; o;) {
                        for (e = o._next,
                            n = r; n && n.pr > o.pr;)
                            n = n._next;
                        (o._prev = n ? n._prev : i) ? o._prev._next = o : r = o,
                            (o._next = n) ? n._prev = o : i = o,
                            o = e
                    }
                    t._pt = r
                }
                , Cs = function () {
                    function t(t, e, n, r, i, o, a, s, u) {
                        this.t = e,
                            this.s = r,
                            this.c = i,
                            this.p = n,
                            this.r = o || ys,
                            this.d = a || this,
                            this.set = s || ps,
                            this.pr = u || 0,
                            this._next = t,
                            t && (t._prev = this)
                    }
                    return t.prototype.modifier = function (t, e, n) {
                        this.mSet = this.mSet || this.set,
                            this.set = Es,
                            this.m = t,
                            this.mt = n,
                            this.tween = e
                    }
                        ,
                        t
                }();
            Lo(Co + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
                return bo[t] = 1
            }
            )),
                ho.TweenMax = ho.TweenLite = hs,
                ho.TimelineLite = ho.TimelineMax = ns,
                Li = new ns({
                    sortChildren: !1,
                    defaults: zi,
                    autoRemoveChildren: !0,
                    id: "root",
                    smoothChildTiming: !0
                }),
                ji.stringFilter = za;
            var Ss = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    e.forEach((function (t) {
                        return La(t)
                    }
                    ))
                },
                timeline: function (t) {
                    return new ns(t)
                },
                getTweensOf: function (t, e) {
                    return Li.getTweensOf(t, e)
                },
                getProperty: function (t, e, n, r) {
                    Gi(t) && (t = ya(t)[0]);
                    var i = Oo(t || {}).get
                        , o = n ? jo : Ho;
                    return "native" === n && (n = ""),
                        t ? e ? o((To[e] && To[e].get || i)(t, e, n, r)) : function (e, n, r) {
                            return o((To[e] && To[e].get || i)(t, e, n, r))
                        }
                            : t
                },
                quickSetter: function (t, e, n) {
                    if ((t = ya(t)).length > 1) {
                        var r = t.map((function (t) {
                            return Ls.quickSetter(t, e, n)
                        }
                        ))
                            , i = r.length;
                        return function (t) {
                            for (var e = i; e--;)
                                r[e](t)
                        }
                    }
                    t = t[0] || {};
                    var o = To[e]
                        , a = Oo(t)
                        , s = a.harness && (a.harness.aliases || {})[e] || e
                        , u = o ? function (e) {
                            var r = new o;
                            Ri._pt = 0,
                                r.init(t, n ? e + n : e, Ri, 0, [t]),
                                r.render(1, r),
                                Ri._pt && xs(1, Ri)
                        }
                            : a.set(t, s);
                    return o ? u : function (e) {
                        return u(t, s, n ? e + n : e, a, 1)
                    }
                },
                quickTo: function (t, e, n) {
                    var r, i = Ls.to(t, Wo(((r = {})[e] = "+=0.1",
                        r.paused = !0,
                        r), n || {})), o = function (t, n, r) {
                            return i.resetTo(e, t, n, r)
                        };
                    return o.tween = i,
                        o
                },
                isTweening: function (t) {
                    return Li.getTweensOf(t, !0).length > 0
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = Ga(t.ease, zi.ease)),
                        Fo(zi, t || {})
                },
                config: function (t) {
                    return Fo(ji, t || {})
                },
                registerEffect: function (t) {
                    var e = t.name
                        , n = t.effect
                        , r = t.plugins
                        , i = t.defaults
                        , o = t.extendTimeline;
                    (r || "").split(",").forEach((function (t) {
                        return t && !To[t] && !ho[t] && go(e + " effect requires " + t + " plugin.")
                    }
                    )),
                        Ao[e] = function (t, e, r) {
                            return n(ya(t), zo(e || {}, i), r)
                        }
                        ,
                        o && (ns.prototype[e] = function (t, n, r) {
                            return this.add(Ao[e](t, Ji(n) ? n : (r = n) && {}, this), r)
                        }
                        )
                },
                registerEase: function (t, e) {
                    qa[t] = Ga(e)
                },
                parseEase: function (t, e) {
                    return arguments.length ? Ga(t, e) : qa
                },
                getById: function (t) {
                    return Li.getById(t)
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var n, r, i = new ns(t);
                    for (i.smoothChildTiming = to(t.smoothChildTiming),
                        Li.remove(i),
                        i._dp = 0,
                        i._time = i._tTime = Li._time,
                        n = Li._first; n;)
                        r = n._next,
                            !e && !n._dur && n instanceof hs && n.vars.onComplete === n._targets[0] || ra(i, n, n._start - n._delay),
                            n = r;
                    return ra(Li, i, 0),
                        i
                },
                utils: {
                    wrap: function t(e, n, r) {
                        var i = n - e;
                        return io(e) ? Ea(e, t(0, e.length), n) : ha(r, (function (t) {
                            return (i + (t - e) % i) % i + e
                        }
                        ))
                    },
                    wrapYoyo: function t(e, n, r) {
                        var i = n - e
                            , o = 2 * i;
                        return io(e) ? Ea(e, t(0, e.length - 1), n) : ha(r, (function (t) {
                            return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                        }
                        ))
                    },
                    distribute: wa,
                    random: Aa,
                    snap: Ta,
                    normalize: function (t, e, n) {
                        return Ca(t, e, 0, 1, n)
                    },
                    getUnit: _a,
                    clamp: function (t, e, n) {
                        return ha(n, (function (n) {
                            return pa(t, e, n)
                        }
                        ))
                    },
                    splitColor: Na,
                    toArray: ya,
                    selector: function (t) {
                        return t = ya(t)[0] || go("Invalid scope") || {},
                            function (e) {
                                var n = t.current || t.nativeElement || t;
                                return ya(e, n.querySelectorAll ? n : n === t ? go("Invalid scope") || Pi.createElement("div") : t)
                            }
                    },
                    mapRange: Ca,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        return function (t) {
                            return e.reduce((function (t, e) {
                                return e(t)
                            }
                            ), t)
                        }
                    },
                    unitize: function (t, e) {
                        return function (n) {
                            return t(parseFloat(n)) + (e || _a(n))
                        }
                    },
                    interpolate: function t(e, n, r, i) {
                        var o = isNaN(e + n) ? 0 : function (t) {
                            return (1 - t) * e + t * n
                        }
                            ;
                        if (!o) {
                            var a, s, u, l, c, f = Gi(e), d = {};
                            if (!0 === r && (i = 1) && (r = null),
                                f)
                                e = {
                                    p: e
                                },
                                    n = {
                                        p: n
                                    };
                            else if (io(e) && !io(n)) {
                                for (u = [],
                                    l = e.length,
                                    c = l - 2,
                                    s = 1; s < l; s++)
                                    u.push(t(e[s - 1], e[s]));
                                l--,
                                    o = function (t) {
                                        t *= l;
                                        var e = Math.min(c, ~~t);
                                        return u[e](t - e)
                                    }
                                    ,
                                    r = n
                            } else
                                i || (e = Wo(io(e) ? [] : {}, e));
                            if (!u) {
                                for (a in n)
                                    as.call(d, e, a, "get", n[a]);
                                o = function (t) {
                                    return xs(t, d) || (f ? e.p : e)
                                }
                            }
                        }
                        return ha(r, o)
                    },
                    shuffle: ba
                },
                install: _o,
                effects: Ao,
                ticker: Wa,
                updateRoot: ns.updateRoot,
                plugins: To,
                globalTimeline: Li,
                core: {
                    PropTween: Cs,
                    globals: vo,
                    Tween: hs,
                    Timeline: ns,
                    Animation: es,
                    getCache: Oo,
                    _removeLinkedListItem: Yo,
                    suppressOverwrites: function (t) {
                        return Mi = t
                    }
                }
            };
            Lo("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
                return Ss[t] = hs[t]
            }
            )),
                Wa.add(ns.updateRoot),
                Ri = Ss.to({}, {
                    duration: 0
                });
            var Os = function (t, e) {
                for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;)
                    n = n._next;
                return n
            }
                , Ms = function (t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function (t, n, r) {
                            r._onInit = function (t) {
                                var r, i;
                                if (Gi(n) && (r = {},
                                    Lo(n, (function (t) {
                                        return r[t] = 1
                                    }
                                    )),
                                    n = r),
                                    e) {
                                    for (i in r = {},
                                        n)
                                        r[i] = e(n[i]);
                                    n = r
                                }
                                !function (t, e) {
                                    var n, r, i, o = t._targets;
                                    for (n in e)
                                        for (r = o.length; r--;)
                                            (i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Os(i, n)),
                                                i && i.modifier && i.modifier(e[n], t, o[r], n))
                                }(t, n)
                            }
                        }
                    }
                }
                , Ls = Ss.registerPlugin({
                    name: "attr",
                    init: function (t, e, n, r, i) {
                        var o, a;
                        for (o in e)
                            (a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o)) && (a.op = o),
                                this._props.push(o)
                    }
                }, {
                    name: "endArray",
                    init: function (t, e) {
                        for (var n = e.length; n--;)
                            this.add(t, n, t[n] || 0, e[n])
                    }
                }, Ms("roundProps", xa), Ms("modifiers"), Ms("snap", Ta)) || Ss;
            hs.version = ns.version = Ls.version = "3.10.4",
                Ni = 1,
                eo() && Fa();
            qa.Power0,
                qa.Power1,
                qa.Power2,
                qa.Power3,
                qa.Power4,
                qa.Linear,
                qa.Quad,
                qa.Cubic,
                qa.Quart,
                qa.Quint,
                qa.Strong,
                qa.Elastic,
                qa.Back,
                qa.SteppedEase,
                qa.Bounce,
                qa.Sine,
                qa.Expo,
                qa.Circ;
            var Is, Ds, Ps, Ns, Bs, Rs, Hs, js = {}, zs = 180 / Math.PI, Ws = Math.PI / 180, Fs = Math.atan2, qs = /([A-Z])/g, $s = /(left|right|width|margin|padding|x)/i, Vs = /[\s,\(]\S/, Ys = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            }, Xs = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            }, Us = function (t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            }, Gs = function (t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            }, Zs = function (t, e) {
                var n = e.s + e.c * t;
                e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
            }, Qs = function (t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            }, Ks = function (t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            }, Js = function (t, e, n) {
                return t.style[e] = n
            }, tu = function (t, e, n) {
                return t.style.setProperty(e, n)
            }, eu = function (t, e, n) {
                return t._gsap[e] = n
            }, nu = function (t, e, n) {
                return t._gsap.scaleX = t._gsap.scaleY = n
            }, ru = function (t, e, n, r, i) {
                var o = t._gsap;
                o.scaleX = o.scaleY = n,
                    o.renderTransform(i, o)
            }, iu = function (t, e, n, r, i) {
                var o = t._gsap;
                o[e] = n,
                    o.renderTransform(i, o)
            }, ou = "transform", au = ou + "Origin", su = function (t, e) {
                var n = Ds.createElementNS ? Ds.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ds.createElement(t);
                return n.style ? n : Ds.createElement(t)
            }, uu = function t(e, n, r) {
                var i = getComputedStyle(e);
                return i[n] || i.getPropertyValue(n.replace(qs, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, cu(n) || n, 1) || ""
            }, lu = "O,Moz,ms,Ms,Webkit".split(","), cu = function (t, e, n) {
                var r = (e || Bs).style
                    , i = 5;
                if (t in r && !n)
                    return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(lu[i] + t in r);)
                    ;
                return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? lu[i] : "") + t
            }, fu = function () {
                "undefined" != typeof window && window.document && (Is = window,
                    Ds = Is.document,
                    Ps = Ds.documentElement,
                    Bs = su("div") || {
                        style: {}
                    },
                    su("div"),
                    ou = cu(ou),
                    au = ou + "Origin",
                    Bs.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
                    Hs = !!cu("perspective"),
                    Ns = 1)
            }, du = function t(e) {
                var n, r = su("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, o = this.nextSibling, a = this.style.cssText;
                if (Ps.appendChild(r),
                    r.appendChild(this),
                    this.style.display = "block",
                    e)
                    try {
                        n = this.getBBox(),
                            this._gsapBBox = this.getBBox,
                            this.getBBox = t
                    } catch (t) { }
                else
                    this._gsapBBox && (n = this._gsapBBox());
                return i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
                    Ps.removeChild(r),
                    this.style.cssText = a,
                    n
            }, hu = function (t, e) {
                for (var n = e.length; n--;)
                    if (t.hasAttribute(e[n]))
                        return t.getAttribute(e[n])
            }, pu = function (t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (n) {
                    e = du.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === du || (e = du.call(t, !0)),
                    !e || e.width || e.x || e.y ? e : {
                        x: +hu(t, ["x", "cx", "x1"]) || 0,
                        y: +hu(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
            }, _u = function (t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pu(t))
            }, mu = function (t, e) {
                if (e) {
                    var n = t.style;
                    e in js && e !== au && (e = ou),
                        n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                            n.removeProperty(e.replace(qs, "-$1").toLowerCase())) : n.removeAttribute(e)
                }
            }, gu = function (t, e, n, r, i, o) {
                var a = new Cs(t._pt, e, n, 0, 1, o ? Ks : Qs);
                return t._pt = a,
                    a.b = r,
                    a.e = i,
                    t._props.push(n),
                    a
            }, vu = {
                deg: 1,
                rad: 1,
                turn: 1
            }, yu = function t(e, n, r, i) {
                var o, a, s, u, l = parseFloat(r) || 0, c = (r + "").trim().substr((l + "").length) || "px", f = Bs.style, d = $s.test(n), h = "svg" === e.tagName.toLowerCase(), p = (h ? "client" : "offset") + (d ? "Width" : "Height"), _ = 100, m = "px" === i, g = "%" === i;
                return i === c || !l || vu[i] || vu[c] ? l : ("px" !== c && !m && (l = t(e, n, r, "px")),
                    u = e.getCTM && _u(e),
                    !g && "%" !== c || !js[n] && !~n.indexOf("adius") ? (f[d ? "width" : "height"] = _ + (m ? c : i),
                        a = ~n.indexOf("adius") || "em" === i && e.appendChild && !h ? e : e.parentNode,
                        u && (a = (e.ownerSVGElement || {}).parentNode),
                        a && a !== Ds && a.appendChild || (a = Ds.body),
                        (s = a._gsap) && g && s.width && d && s.time === Wa.time ? Io(l / s.width * _) : ((g || "%" === c) && (f.position = uu(e, "position")),
                            a === e && (f.position = "static"),
                            a.appendChild(Bs),
                            o = Bs[p],
                            a.removeChild(Bs),
                            f.position = "absolute",
                            d && g && ((s = Oo(a)).time = Wa.time,
                                s.width = a[p]),
                            Io(m ? o * l / _ : o && l ? _ / o * l : 0))) : (o = u ? e.getBBox()[d ? "width" : "height"] : e[p],
                                Io(g ? l / o * _ : l / 100 * o)))
            }, bu = function (t, e, n, r) {
                var i;
                return Ns || fu(),
                    e in Ys && "transform" !== e && ~(e = Ys[e]).indexOf(",") && (e = e.split(",")[0]),
                    js[e] && "transform" !== e ? (i = Iu(t, r),
                        i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Du(uu(t, au)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Eu[e] && Eu[e](t, e, n) || uu(t, e) || Mo(t, e) || ("opacity" === e ? 1 : 0)),
                    n && !~(i + "").trim().indexOf(" ") ? yu(t, e, i, n) + n : i
            }, wu = function (t, e, n, r) {
                if (!n || "none" === n) {
                    var i = cu(e, t, 1)
                        , o = i && uu(t, i, 1);
                    o && o !== n ? (e = i,
                        n = o) : "borderColor" === e && (n = uu(t, "borderTopColor"))
                }
                var a, s, u, l, c, f, d, h, p, _, m, g = new Cs(this._pt, t.style, e, 0, 1, ws), v = 0, y = 0;
                if (g.b = n,
                    g.e = r,
                    n += "",
                    "auto" === (r += "") && (t.style[e] = r,
                        r = uu(t, e) || r,
                        t.style[e] = n),
                    za(a = [n, r]),
                    r = a[1],
                    u = (n = a[0]).match(so) || [],
                    (r.match(so) || []).length) {
                    for (; s = so.exec(r);)
                        d = s[0],
                            p = r.substring(v, s.index),
                            c ? c = (c + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (c = 1),
                            d !== (f = u[y++] || "") && (l = parseFloat(f) || 0,
                                m = f.substr((l + "").length),
                                "=" === d.charAt(1) && (d = Po(l, d) + m),
                                h = parseFloat(d),
                                _ = d.substr((h + "").length),
                                v = so.lastIndex - _.length,
                                _ || (_ = _ || ji.units[e] || m,
                                    v === r.length && (r += _,
                                        g.e += _)),
                                m !== _ && (l = yu(t, e, f, _) || 0),
                                g._pt = {
                                    _next: g._pt,
                                    p: p || 1 === y ? p : ",",
                                    s: l,
                                    c: h - l,
                                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                                });
                    g.c = v < r.length ? r.substring(v, r.length) : ""
                } else
                    g.r = "display" === e && "none" === r ? Ks : Qs;
                return lo.test(r) && (g.e = 0),
                    this._pt = g,
                    g
            }, xu = {
            }, Tu = function (t) {
            }, Au = function (t, e) {

            }, Eu = {
                clearProps: function (t, e, n, r, i) {
                    if ("isFromStart" !== i.data) {
                        var o = t._pt = new Cs(t._pt, e, n, 0, 0, Au);
                        return o.u = r,
                            o.pr = -10,
                            o.tween = i,
                            t._props.push(n),
                            1
                    }
                }
            }, ku = [1, 0, 0, 1, 0, 0], Cu = {}, Su = function (t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            }, Ou = function (t) {
                var e = uu(t, ou);
                return Su(e) ? ku : e.substr(7).match(ao).map(Io)
            }, Mu = function (t, e) {
                var n, r, i, o, a = t._gsap || Oo(t), s = t.style, u = Ou(t);
                return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ku : u : (u !== ku || t.offsetParent || t === Ps || a.svg || (i = s.display,
                    s.display = "block",
                    (n = t.parentNode) && t.offsetParent || (o = 1,
                        r = t.nextSibling,
                        Ps.appendChild(t)),
                    u = Ou(t),
                    i ? s.display = i : mu(t, "display"),
                    o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Ps.removeChild(t))),
                    e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
            }, Iu = function (t, e) {
                var n = t._gsap || new ts(t);
                if ("x" in n && !e && !n.uncache)
                    return n;
                var r, i, o, a, s, u, l, c, f, d, h, p, _, m, g, v, y, b, w, x, T, A, E, k, C, S, O, M, L, I, D, P, N = t.style, B = n.scaleX < 0, R = "px", H = "deg", j = uu(t, au) || "0";
                return r = i = o = u = l = c = f = d = h = 0,
                    a = s = 1,
                    n.svg = !(!t.getCTM || !_u(t)),
                    m = Mu(t, n.svg),
                    n.svg && (k = (!n.uncache || "0px 0px" === j) && !e && t.getAttribute("data-svg-origin"),
                        Lu(t, k || j, !!k || n.originIsAbsolute, !1 !== n.smooth, m)),
                    p = n.xOrigin || 0,
                    _ = n.yOrigin || 0,
                    m !== ku && (b = m[0],
                        w = m[1],
                        x = m[2],
                        T = m[3],
                        r = A = m[4],
                        i = E = m[5],
                        6 === m.length ? (a = Math.sqrt(b * b + w * w),
                            s = Math.sqrt(T * T + x * x),
                            u = b || w ? Fs(w, b) * zs : 0,
                            (f = x || T ? Fs(x, T) * zs + u : 0) && (s *= Math.abs(Math.cos(f * Ws))),
                            n.svg && (r -= p - (p * b + _ * x),
                                i -= _ - (p * w + _ * T))) : (P = m[6],
                                    I = m[7],
                                    O = m[8],
                                    M = m[9],
                                    L = m[10],
                                    D = m[11],
                                    r = m[12],
                                    i = m[13],
                                    o = m[14],
                                    l = (g = Fs(P, L)) * zs,
                                    g && (k = A * (v = Math.cos(-g)) + O * (y = Math.sin(-g)),
                                        C = E * v + M * y,
                                        S = P * v + L * y,
                                        O = A * -y + O * v,
                                        M = E * -y + M * v,
                                        L = P * -y + L * v,
                                        D = I * -y + D * v,
                                        A = k,
                                        E = C,
                                        P = S),
                                    c = (g = Fs(-x, L)) * zs,
                                    g && (v = Math.cos(-g),
                                        D = T * (y = Math.sin(-g)) + D * v,
                                        b = k = b * v - O * y,
                                        w = C = w * v - M * y,
                                        x = S = x * v - L * y),
                                    u = (g = Fs(w, b)) * zs,
                                    g && (k = b * (v = Math.cos(g)) + w * (y = Math.sin(g)),
                                        C = A * v + E * y,
                                        w = w * v - b * y,
                                        E = E * v - A * y,
                                        b = k,
                                        A = C),
                                    l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0,
                                        c = 180 - c),
                                    a = Io(Math.sqrt(b * b + w * w + x * x)),
                                    s = Io(Math.sqrt(E * E + P * P)),
                                    g = Fs(A, E),
                                    f = Math.abs(g) > 2e-4 ? g * zs : 0,
                                    h = D ? 1 / (D < 0 ? -D : D) : 0),
                        n.svg && (k = t.getAttribute("transform"),
                            n.forceCSS = t.setAttribute("transform", "") || !Su(uu(t, ou)),
                            k && t.setAttribute("transform", k))),
                    Math.abs(f) > 90 && Math.abs(f) < 270 && (B ? (a *= -1,
                        f += u <= 0 ? 180 : -180,
                        u += u <= 0 ? 180 : -180) : (s *= -1,
                            f += f <= 0 ? 180 : -180)),
                    e = e || n.uncache,
                    n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + R,
                    n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + R,
                    n.z = o + R,
                    n.scaleX = Io(a),
                    n.scaleY = Io(s),
                    n.rotation = Io(u) + H,
                    n.rotationX = Io(l) + H,
                    n.rotationY = Io(c) + H,
                    n.skewX = f + H,
                    n.skewY = d + H,
                    n.transformPerspective = h + R,
                    (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (N[au] = Du(j)),
                    n.xOffset = n.yOffset = 0,
                    n.force3D = ji.force3D,
                    n.renderTransform = n.svg ? zu : Hs ? ju : Nu,
                    n.uncache = 0,
                    n
            }, Du = function (t) {
                return (t = t.split(" "))[0] + " " + t[1]
            }, Pu = function (t, e, n) {
                var r = _a(e);
                return Io(parseFloat(e) + parseFloat(yu(t, "x", n + "px", r))) + r
            }, Nu = function (t, e) {
                e.z = "0px",
                    e.rotationY = e.rotationX = "0deg",
                    e.force3D = 0,
                    ju(t, e)
            }, Bu = "0deg", Ru = "0px", Hu = ") ", ju = function (t, e) {
                var n = e || this
                    , r = n.xPercent
                    , i = n.yPercent
                    , o = n.x
                    , a = n.y
                    , s = n.z
                    , u = n.rotation
                    , l = n.rotationY
                    , c = n.rotationX
                    , f = n.skewX
                    , d = n.skewY
                    , h = n.scaleX
                    , p = n.scaleY
                    , _ = n.transformPerspective
                    , m = n.force3D
                    , g = n.target
                    , v = n.zOrigin
                    , y = ""
                    , b = "auto" === m && t && 1 !== t || !0 === m;
                if (v && (c !== Bu || l !== Bu)) {
                    var w, x = parseFloat(l) * Ws, T = Math.sin(x), A = Math.cos(x);
                    x = parseFloat(c) * Ws,
                        w = Math.cos(x),
                        o = Pu(g, o, T * w * -v),
                        a = Pu(g, a, -Math.sin(x) * -v),
                        s = Pu(g, s, A * w * -v + v)
                }
                _ !== Ru && (y += "perspective(" + _ + Hu),
                    (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
                    (b || o !== Ru || a !== Ru || s !== Ru) && (y += s !== Ru || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + Hu),
                    u !== Bu && (y += "rotate(" + u + Hu),
                    l !== Bu && (y += "rotateY(" + l + Hu),
                    c !== Bu && (y += "rotateX(" + c + Hu),
                    f === Bu && d === Bu || (y += "skew(" + f + ", " + d + Hu),
                    1 === h && 1 === p || (y += "scale(" + h + ", " + p + Hu),
                    g.style[ou] = y || "translate(0, 0)"
            }, qu = function (t, e, n) {
                var r, i, o, a, s, u, l, c = Fu({}, n._gsap), f = n.style;
                for (i in c.svg ? (o = n.getAttribute("transform"),
                    n.setAttribute("transform", ""),
                    f[ou] = e,
                    r = Iu(n, 1),
                    mu(n, ou),
                    n.setAttribute("transform", o)) : (o = getComputedStyle(n)[ou],
                        f[ou] = e,
                        r = Iu(n, 1),
                        f[ou] = o),
                    js)
                    (o = c[i]) !== (a = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (s = _a(o) !== (l = _a(a)) ? yu(n, i, o, l) : parseFloat(o),
                        u = parseFloat(a),
                        t._pt = new Cs(t._pt, r, i, s, u - s, Xs),
                        t._pt.u = l || 0,
                        t._props.push(i));
                Fu(r, c)
            };



            var $u, Vu, Yu, Xu = {
                name: "css",
                register: fu,
                targetTest: function (t) {
                    return t.style && t.nodeType
                },
                init: function (t, e, n, r, i) {
                    var o, a, s, u, l, c, f, d, h, p, _, m, g, v, y, b = this._props, w = t.style, x = n.vars.startAt;
                    for (f in Ns || fu(),
                        e)
                        if ("autoRound" !== f && (a = e[f],
                            !To[f] || !ss(f, e, n, r, t, i)))
                            if (l = typeof a,
                                c = Eu[f],
                                "function" === l && (l = typeof (a = a.call(n, r, t, i))),
                                "string" === l && ~a.indexOf("random(") && (a = ka(a)),
                                c)
                                c(this, t, f, a, n) && (y = 1);
                            else if ("--" === f.substr(0, 2))
                                o = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                                    a += "",
                                    Ha.lastIndex = 0,
                                    Ha.test(o) || (d = _a(o),
                                        h = _a(a)),
                                    h ? d !== h && (o = yu(t, f, o, h) + h) : d && (a += d),
                                    this.add(w, "setProperty", o, a, r, i, 0, 0, f),
                                    b.push(f);
                            else if ("undefined" !== l) {
                                if (x && f in x ? (o = "function" == typeof x[f] ? x[f].call(n, r, t, i) : x[f],
                                    Gi(o) && ~o.indexOf("random(") && (o = ka(o)),
                                    _a(o + "") || (o += ji.units[f] || _a(bu(t, f)) || ""),
                                    "=" === (o + "").charAt(1) && (o = bu(t, f))) : o = bu(t, f),
                                    u = parseFloat(o),
                                    (p = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                                    s = parseFloat(a),
                                    f in Ys && ("autoAlpha" === f && (1 === u && "hidden" === bu(t, "visibility") && s && (u = 0),
                                        gu(this, w, "visibility", u ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                                        "scale" !== f && "transform" !== f && ~(f = Ys[f]).indexOf(",") && (f = f.split(",")[0])),
                                    _ = f in js)
                                    if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Iu(t, e.parseTransform),
                                        v = !1 !== e.smoothOrigin && g.smooth,
                                        (m = this._pt = new Cs(this._pt, w, ou, 0, 1, g.renderTransform, g, 0, -1)).dep = 1),
                                        "scale" === f)
                                        this._pt = new Cs(this._pt, g, "scaleY", g.scaleY, (p ? Po(g.scaleY, p + s) : s) - g.scaleY || 0),
                                            b.push("scaleY", f),
                                            f += "X";
                                    else {
                                        if ("transformOrigin" === f) {
                                            a = Tu(a),
                                                g.svg ? Lu(t, a, 0, v, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && gu(this, g, "zOrigin", g.zOrigin, h),
                                                    gu(this, w, f, Du(o), Du(a)));
                                            continue
                                        }
                                        if ("svgOrigin" === f) {
                                            Lu(t, a, 1, v, 0, this);
                                            continue
                                        }
                                        if (f in Cu) {
                                            Wu(this, g, f, u, p ? Po(u, p + a) : a);
                                            continue
                                        }
                                        if ("smoothOrigin" === f) {
                                            gu(this, g, "smooth", g.smooth, a);
                                            continue
                                        }
                                        if ("force3D" === f) {
                                            g[f] = a;
                                            continue
                                        }
                                        if ("transform" === f) {
                                            qu(this, a, t);
                                            continue
                                        }
                                    }
                                else
                                    f in w || (f = cu(f) || f);
                                if (_ || (s || 0 === s) && (u || 0 === u) && !Vs.test(a) && f in w)
                                    s || (s = 0),
                                        (d = (o + "").substr((u + "").length)) !== (h = _a(a) || (f in ji.units ? ji.units[f] : d)) && (u = yu(t, f, o, h)),
                                        this._pt = new Cs(this._pt, _ ? g : w, f, u, (p ? Po(u, p + s) : s) - u, _ || "px" !== h && "zIndex" !== f || !1 === e.autoRound ? Xs : Zs),
                                        this._pt.u = h || 0,
                                        d !== h && "%" !== h && (this._pt.b = o,
                                            this._pt.r = Gs);
                                else if (f in w)
                                    wu.call(this, t, f, o, p ? p + a : a);
                                else {
                                    if (!(f in t)) {
                                        mo(f, a);
                                        continue
                                    }
                                    this.add(t, f, o || t[f], p ? p + a : a, r, i)
                                }
                                b.push(f)
                            }
                    y && ks(this)
                },
                get: bu,
                aliases: Ys,
                getSetter: function (t, e, n) {
                    var r = Ys[e];
                    return r && r.indexOf(",") < 0 && (e = r),
                        e in js && e !== au && (t._gsap.x || bu(t, "x")) ? n && Rs === n ? "scale" === e ? nu : eu : (Rs = n || {}) && ("scale" === e ? ru : iu) : t.style && !Ki(t.style[e]) ? Js : ~e.indexOf("-") ? tu : vs(t, e)
                },
                core: {
                    _removeProperty: mu,
                    _getMatrix: Mu
                }
            };





            Ls.utils.checkPrefix = cu,
                Yu = Lo(($u = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Vu = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
                    js[t] = 1
                }
                )),
                Lo(Vu, (function (t) {
                    ji.units[t] = "deg",
                        Cu[t] = 1
                }
                )),
                Ys[Yu[13]] = $u + "," + Vu,
                Lo("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
                    var e = t.split(":");
                    Ys[e[1]] = Yu[e[0]]
                }
                )),
                Lo("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
                    ji.units[t] = "px"
                }
                )),
                Ls.registerPlugin(Xu);
            var Uu = Ls.registerPlugin(Xu) || Ls;
            Uu.core.Tween;
            function Gu(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            var Zu, Qu, Ku, Ju, tl, el, nl, rl, il, ol, al, sl, ul = function () {
                return Zu || "undefined" != typeof window && (Zu = window.gsap) && Zu.registerPlugin && Zu
            }, ll = 1, cl = [], fl = [], dl = [], hl = Date.now, pl = function (t, e) {
                return e
            }, _l = function (t, e) {
                return ~dl.indexOf(t) && dl[dl.indexOf(t) + 1][e]
            }, ml = function (t) {
                return !!~ol.indexOf(t)
            }, gl = function (t, e, n, r, i) {
                return t.addEventListener(e, n, {
                    passive: !r,
                    capture: !!i
                })
            }, vl = function (t, e, n, r) {
                return t.removeEventListener(e, n, !!r)
            }, yl = "scrollLeft", bl = "scrollTop", wl = function () {
                return al && al.isPressed || fl.cache++
            }, xl = function (t, e) {
                var n = function n(r) {
                    if (r || 0 === r) {
                        ll && (Ku.history.scrollRestoration = "manual");
                        var i = al && al.isPressed;
                        r = n.v = Math.round(r) || (al && al.iOS ? 1 : 0),
                            t(r),
                            n.cacheID = fl.cache,
                            i && pl("ss", r)
                    } else
                        (e || fl.cache !== n.cacheID || pl("ref")) && (n.cacheID = fl.cache,
                            n.v = t());
                    return n.v + n.offset
                };
                return n.offset = 0,
                    t && n
            }, Tl = {
                s: yl,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: xl((function (t) {
                    return arguments.length ? Ku.scrollTo(t, Al.sc()) : Ku.pageXOffset || Ju.scrollLeft || tl.scrollLeft || el.scrollLeft || 0
                }
                ))
            }, Al = {
                s: bl,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: Tl,
                sc: xl((function (t) {
                    return arguments.length ? Ku.scrollTo(Tl.sc(), t) : Ku.pageYOffset || Ju.scrollTop || tl.scrollTop || el.scrollTop || 0
                }
                ))
            }, El = function (t) {
                return Zu.utils.toArray(t)[0] || ("string" == typeof t && !1 !== Zu.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
            }, kl = function (t, e) {
                var n = e.s
                    , r = e.sc
                    , i = fl.indexOf(t)
                    , o = r === Al.sc ? 1 : 2;
                return !~i && (i = fl.push(t) - 1),
                    fl[i + o] || (fl[i + o] = xl(_l(t, n), !0) || (ml(t) ? r : xl((function (e) {
                        return arguments.length ? t[n] = e : t[n]
                    }
                    ))))
            }, Cl = function (t, e, n) {
                var r = t
                    , i = t
                    , o = hl()
                    , a = o
                    , s = e || 50
                    , u = Math.max(500, 3 * s)
                    , l = function (t, e) {
                        var u = hl();
                        e || u - o > s ? (i = r,
                            r = t,
                            a = o,
                            o = u) : n ? r += t : r = i + (t - i) / (u - a) * (o - a)
                    };
                return {
                    update: l,
                    reset: function () {
                        i = r = n ? 0 : r,
                            a = o = 0
                    },
                    getVelocity: function (t) {
                        var e = a
                            , s = i
                            , c = hl();
                        return (t || 0 === t) && t !== r && l(t),
                            o === a || c - a > u ? 0 : (r + (n ? s : -s)) / ((n ? c : o) - e) * 1e3
                    }
                }
            }, Sl = function (t, e) {
                return e && !t._gsapAllow && t.preventDefault(),
                    t.changedTouches ? t.changedTouches[0] : t
            }, Ol = function (t) {
                var e = Math.max.apply(Math, t)
                    , n = Math.min.apply(Math, t);
                return Math.abs(e) >= Math.abs(n) ? e : n
            }, Ml = function () {
                var t, e, n, r;
                (il = Zu.core.globals().ScrollTrigger) && il.core && (t = il.core,
                    e = t.bridge || {},
                    n = t._scrollers,
                    r = t._proxies,
                    n.push.apply(n, fl),
                    r.push.apply(r, dl),
                    fl = n,
                    dl = r,
                    pl = function (t, n) {
                        return e[t](n)
                    }
                )
            }, Ll = function (t) {
                return (Zu = t || ul()) && "undefined" != typeof document && document.body && (Ku = window,
                    Ju = document,
                    tl = Ju.documentElement,
                    el = Ju.body,
                    ol = [Ku, Ju, tl, el],
                    Zu.utils.clamp,
                    rl = "onpointerenter" in el ? "pointer" : "mouse",
                    nl = Il.isTouch = Ku.matchMedia && Ku.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ku || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
                    sl = Il.eventTypes = ("ontouchstart" in tl ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in tl ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
                    setTimeout((function () {
                        return ll = 0
                    }
                    ), 500),
                    Ml(),
                    Qu = 1),
                    Qu
            };
            Tl.op = Al,
                fl.cache = 0;
            var Il = function () {
                function t(t) {
                    this.init(t)
                }
                var e, n, r;


                return t.prototype.init = function (t) { },
                    e = t,
                    (n = [{
                        key: "velocityX",
                        get: function () {
                            return this._vx.getVelocity()
                        }
                    }, {
                        key: "velocityY",
                        get: function () {
                            return this._vy.getVelocity()
                        }
                    }]) && Gu(e.prototype, n),
                    r && Gu(e, r),
                    t
            }();
            Il.version = "3.10.4",
                Il.create = function (t) {
                    return new Il(t)
                }
                ,
                Il.register = Ll,
                Il.getAll = function () {
                    return cl.slice()
                }
                ,
                Il.getById = function (t) {
                    return cl.filter((function (e) {
                        return e.vars.id === t
                    }
                    ))[0]
                }
                ,
                ul() && Zu.registerPlugin(Il);
            var Dl, Pl, Nl, Bl, Rl, Hl, jl, zl, Wl, Fl, ql, $l, Vl, Yl, Xl, Ul, Gl, Zl, Ql, Kl, Jl, tc, ec, nc, rc, ic, oc, ac, sc, uc, lc, cc, fc, dc = 1, hc = Date.now, pc = hc(), _c = 0, mc = 0, gc = function () {
                return Yl = 1
            }, vc = function () {
                return Yl = 0
            }, yc = function (t) {
                return t
            }, bc = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0
            }, wc = function () {
                return "undefined" != typeof window
            }, xc = function () {
                return Dl || wc() && (Dl = window.gsap) && Dl.registerPlugin && Dl
            }, Tc = function (t) {
                return !!~jl.indexOf(t)
            }, Ac = function (t) {
                return _l(t, "getBoundingClientRect") || (Tc(t) ? function () {
                    return Nf.width = Nl.innerWidth,
                        Nf.height = Nl.innerHeight,
                        Nf
                }
                    : function () {
                        return Xc(t)
                    }
                )
            }, Ec = function (t, e) {
                var n = e.s
                    , r = e.d2
                    , i = e.d
                    , o = e.a;
                return (n = "scroll" + r) && (o = _l(t, n)) ? o() - Ac(t)()[i] : Tc(t) ? (Rl[n] || Hl[n]) - (Nl["inner" + r] || Rl["client" + r] || Hl["client" + r]) : t[n] - t["offset" + r]
            }, kc = function (t, e) {
                for (var n = 0; n < Ql.length; n += 3)
                    (!e || ~e.indexOf(Ql[n + 1])) && t(Ql[n], Ql[n + 1], Ql[n + 2])
            }, Cc = function (t) {
                return "string" == typeof t
            }, Sc = function (t) {
                return "function" == typeof t
            }, Oc = function (t) {
                return "number" == typeof t
            }, Mc = function (t) {
                return "object" == typeof t
            }, Lc = function (t) {
                return Sc(t) && t()
            }, Ic = function (t, e) {
                return function () {
                    var n = Lc(t)
                        , r = Lc(e);
                    return function () {
                        Lc(n),
                            Lc(r)
                    }
                }
            }, Dc = function (t, e, n) {
                return t && t.progress(e ? 0 : 1) && n && t.pause()
            }, Pc = function (t, e) {
                if (t.enabled) {
                    var n = e(t);
                    n && n.totalTime && (t.callbackAnimation = n)
                }
            }, Nc = Math.abs, Bc = "left", Rc = "right", Hc = "bottom", jc = "width", zc = "height", Wc = "padding", Fc = "margin", qc = "Width", $c = "px", Vc = function (t) {
                return Nl.getComputedStyle(t)
            }, Yc = function (t, e) {
                for (var n in e)
                    n in t || (t[n] = e[n]);
                return t
            }, Xc = function (t, e) {
                var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Vc(t)[Xl] && Dl.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1)
                    , r = t.getBoundingClientRect();
                return n && n.progress(0).kill(),
                    r
            }, Uc = function (t, e) {
                var n = e.d2;
                return t["offset" + n] || t["client" + n] || 0
            }, Gc = function (t) {
                var e, n = [], r = t.labels, i = t.duration();
                for (e in r)
                    n.push(r[e] / i);
                return n
            }, Zc = function (t) {
                var e = Dl.utils.snap(t)
                    , n = Array.isArray(t) && t.slice(0).sort((function (t, e) {
                        return t - e
                    }
                    ));
                return n ? function (t, r, i) {
                    var o;
                    if (void 0 === i && (i = .001),
                        !r)
                        return e(t);
                    if (r > 0) {
                        for (t -= i,
                            o = 0; o < n.length; o++)
                            if (n[o] >= t)
                                return n[o];
                        return n[o - 1]
                    }
                    for (o = n.length,
                        t += i; o--;)
                        if (n[o] <= t)
                            return n[o];
                    return n[0]
                }
                    : function (n, r, i) {
                        void 0 === i && (i = .001);
                        var o = e(n);
                        return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : e(r < 0 ? n - t : n + t)
                    }
            }, Qc = function (t, e, n, r) {
                return n.split(",").forEach((function (n) {
                    return t(e, n, r)
                }
                ))
            }, Kc = function (t, e, n, r, i) {
                return t.addEventListener(e, n, {
                    passive: !r,
                    capture: !!i
                })
            }, Jc = function (t, e, n, r) {
                return t.removeEventListener(e, n, !!r)
            }, tf = function (t, e, n) {
                return n && n.wheelHandler && t(e, "wheel", n)
            }, ef = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            }, nf = {
                toggleActions: "play",
                anticipatePin: 0
            }, rf = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            }, of = function (t, e) {
                if (Cc(t)) {
                    var n = t.indexOf("=")
                        , r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                    ~n && (t.indexOf("%") > n && (r *= e / 100),
                        t = t.substr(0, n - 1)),
                        t = r + (t in rf ? rf[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                }
                return t
            }, af = function (t, e, n, r, i, o, a, s) {

            }, sf = function (t, e, n, r) {

            }, uf = [], lf = {}, cf = function () {
                return hc() - _c > 34 && Sf()
            }, ff = function () {
                (!ec || !ec.isPressed || ec.startX > Hl.clientWidth) && (fl.cache++,
                    sc || (sc = requestAnimationFrame(Sf)),
                    _c || yf("scrollStart"),
                    _c = hc())
            }, df = function () {
                ic = Nl.innerWidth,
                    rc = Nl.innerHeight
            }, hf = function () {
                fl.cache++,
                    !Vl && !tc && !Bl.fullscreenElement && !Bl.webkitFullscreenElement && (!nc || ic !== Nl.innerWidth || Math.abs(Nl.innerHeight - rc) > .25 * Nl.innerHeight) && zl.restart(!0)
            }, pf = {}, _f = [], mf = [], gf = function (t) {
                var e, n = Dl.ticker.frame, r = [], i = 0;
                if (lc !== n || dc) {
                    for (xf(); i < mf.length; i += 4)
                        (e = Nl.matchMedia(mf[i]).matches) !== mf[i + 3] && (mf[i + 3] = e,
                            e ? r.push(i) : xf(1, mf[i]) || Sc(mf[i + 2]) && mf[i + 2]());
                    for (wf(),
                        i = 0; i < r.length; i++)
                        e = r[i],
                            uc = mf[e],
                            mf[e + 2] = mf[e + 1](t);
                    uc = 0,
                        Pl && Ef(0, 1),
                        lc = n,
                        yf("matchMedia")
                }
            }, vf = function t() {
                return Jc(zf, "scrollEnd", t) || Ef(!0)
            }, yf = function (t) {
                return pf[t] && pf[t].map((function (t) {
                    return t()
                }
                )) || _f
            }, bf = [], wf = function (t) {
                for (var e = 0; e < bf.length; e += 5)
                    t && bf[e + 4] !== t || (bf[e].style.cssText = bf[e + 1],
                        bf[e].getBBox && bf[e].setAttribute("transform", bf[e + 2] || ""),
                        bf[e + 3].uncache = 1)
            }, xf = function (t, e) {
                var n;
                for (Ul = 0; Ul < uf.length; Ul++)
                    n = uf[Ul],
                        e && n.media !== e || (t ? n.kill(1) : n.revert());
                e && wf(e),
                    e || yf("revert")
            }, Tf = function () {
                return fl.cache++ && fl.forEach((function (t) {
                    return "function" == typeof t && (t.rec = 0)
                }
                ))
            }, Af = 0, Ef = function (t, e) {
                if (!_c || t) {
                    cc = !0;
                    var n = yf("refreshInit");
                    Kl && zf.sort(),
                        e || xf(),
                        uf.slice(0).forEach((function (t) {
                            return t.refresh()
                        }
                        )),
                        uf.forEach((function (t) {
                            return "max" === t.vars.end && t.setPositions(t.start, Ec(t.scroller, t._dir))
                        }
                        )),
                        n.forEach((function (t) {
                            return t && t.render && t.render(-1)
                        }
                        )),
                        Tf(),
                        zl.pause(),
                        Af++,
                        cc = !1,
                        yf("refresh")
                } else
                    Kc(zf, "scrollEnd", vf)
            }, kf = 0, Cf = 1, Sf = function () {
                if (!cc) {
                    zf.isUpdating = !0,
                        fc && fc.update(0);
                    var t = uf.length
                        , e = hc()
                        , n = e - pc >= 50
                        , r = t && uf[0].scroll();
                    if (Cf = kf > r ? -1 : 1,
                        kf = r,
                        n && (_c && !Yl && e - _c > 200 && (_c = 0,
                            yf("scrollEnd")),
                            ql = pc,
                            pc = e),
                        Cf < 0) {
                        for (Ul = t; Ul-- > 0;)
                            uf[Ul] && uf[Ul].update(0, n);
                        Cf = 1
                    } else
                        for (Ul = 0; Ul < t; Ul++)
                            uf[Ul] && uf[Ul].update(0, n);
                    zf.isUpdating = !1
                }
                sc = 0
            }, Of = [Bc, "top", Hc, Rc, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Mf = Of.concat([jc, zc, "boxSizing", "maxWidth", "maxHeight", "position", Fc, Wc, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]), Lf = function (t, e, n, r) {
                if (t.parentNode !== e) {
                    for (var i, o = Of.length, a = e.style, s = t.style; o--;)
                        a[i = Of[o]] = n[i];
                    a.position = "absolute" === n.position ? "absolute" : "relative",
                        "inline" === n.display && (a.display = "inline-block"),
                        s.bottom = s.right = a.flexBasis = "auto",
                        a.overflow = "visible",
                        a.boxSizing = "border-box",
                        a.width = Uc(t, Tl) + $c,
                        a.height = Uc(t, Al) + $c,
                        a.padding = s.margin = s.top = s.left = "0",
                        Df(r),
                        s.width = s.maxWidth = n.width,
                        s.height = s.maxHeight = n.height,
                        s.padding = n.padding,
                        t.parentNode.insertBefore(e, t),
                        e.appendChild(t)
                }
            }, If = /([A-Z])/g, Df = function (t) {
                if (t) {
                    var e, n, r = t.t.style, i = t.length, o = 0;
                    for ((t.t._gsap || Dl.core.getCache(t.t)).uncache = 1; o < i; o += 2)
                        n = t[o + 1],
                            e = t[o],
                            n ? r[e] = n : r[e] && r.removeProperty(e.replace(If, "-$1").toLowerCase())
                }
            }, Pf = function (t) {
                for (var e = Mf.length, n = t.style, r = [], i = 0; i < e; i++)
                    r.push(Mf[i], n[Mf[i]]);
                return r.t = t,
                    r
            }, Nf = {
                left: 0,
                top: 0
            }, Bf = function (t, e, n, r, i, o, a, s, u, l, c, f, d) {
                Sc(t) && (t = t(s)),
                    Cc(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? of("0" + t.substr(3), n) : 0));
                var h, p, _, m = d ? d.time() : 0;
                if (d && d.seek(0),
                    Oc(t))
                    a && sf(a, n, r, !0);
                else {
                    Sc(e) && (e = e(s));
                    var g, v, y, b, w = t.split(" ");
                    _ = El(e) || Hl,
                        (g = Xc(_) || {}) && (g.left || g.top) || "none" !== Vc(_).display || (b = _.style.display,
                            _.style.display = "block",
                            g = Xc(_),
                            b ? _.style.display = b : _.style.removeProperty("display")),
                        v = of(w[0], g[r.d]),
                        y = of(w[1] || "0", n),
                        t = g[r.p] - u[r.p] - l + v + i - y,
                        a && sf(a, y, r, n - y < 20 || a._isStart && y > 20),
                        n -= n - y
                }
                if (o) {
                    var x = t + n
                        , T = o._isStart;
                    h = "scroll" + r.d2,
                        sf(o, x, r, T && x > 20 || !T && (c ? Math.max(Hl[h], Rl[h]) : o.parentNode[h]) <= x + 1),
                        c && (u = Xc(a),
                            c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + $c))
                }
                return d && _ && (h = Xc(_),
                    d.seek(f),
                    p = Xc(_),
                    d._caScrollDist = h[r.p] - p[r.p],
                    t = t / d._caScrollDist * f),
                    d && d.seek(m),
                    d ? t : Math.round(t)
            }, Rf = /(webkit|moz|length|cssText|inset)/i, Hf = function (t, e, n, r) {
                if (t.parentNode !== e) {
                    var i, o, a = t.style;
                    if (e === Hl) {
                        for (i in t._stOrig = a.cssText,
                            o = Vc(t))
                            +i || Rf.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                        a.top = n,
                            a.left = r
                    } else
                        a.cssText = t._stOrig;
                    Dl.core.getCache(t).uncache = 1,
                        e.appendChild(t)
                }
            }, jf = function (t, e) {
                var n, r, i = kl(t, e), o = "_scroll" + e.p2, a = function e(a, s, u, l, c) {
                    var f = e.tween
                        , d = s.onComplete
                        , h = {};
                    return u = u || i(),
                        c = l && c || 0,
                        l = l || a - u,
                        f && f.kill(),
                        n = Math.round(u),
                        s[o] = a,
                        s.modifiers = h,
                        h[o] = function (t) {
                            return (t = bc(i())) !== n && t !== r && Math.abs(t - n) > 2 && Math.abs(t - r) > 2 ? (f.kill(),
                                e.tween = 0) : t = u + l * f.ratio + c * f.ratio * f.ratio,
                                r = n,
                                n = bc(t)
                        }
                        ,
                        s.onComplete = function () {
                            e.tween = 0,
                                d && d.call(f)
                        }
                        ,
                        f = e.tween = Dl.to(t, s)
                };
                return t[o] = i,
                    i.wheelHandler = function () {
                        return a.tween && a.tween.kill() && (a.tween = 0)
                    }
                    ,
                    Kc(t, "wheel", i.wheelHandler),
                    a
            }, zf = function () {
                function t(e, n) {
                    Pl || t.register(Dl) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                        this.init(e, n)
                }
                return t.prototype.init = function (e, n) {
                    if (this.progress = this.start = 0,
                        this.vars && this.kill(!0, !0),
                        mc) {
                        var r, i, o, a, s, u, l, c, f, d, h, p, _, m, g, v, y, b, w, x, T, A, E, k, C, S, O, M, L, I, D, P, N, B, R, H, j, z, W, F, q, $ = e = Yc(Cc(e) || Oc(e) || e.nodeType ? {
                            trigger: e
                        } : e, nf), V = $.onUpdate, Y = $.toggleClass, X = $.id, U = $.onToggle, G = $.onRefresh, Z = $.scrub, Q = $.trigger, K = $.pin, J = $.pinSpacing, tt = $.invalidateOnRefresh, et = $.anticipatePin, nt = $.onScrubComplete, rt = $.onSnapComplete, it = $.once, ot = $.snap, at = $.pinReparent, st = $.pinSpacer, ut = $.containerAnimation, lt = $.fastScrollEnd, ct = $.preventOverlaps, ft = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Tl : Al, dt = !Z && 0 !== Z, ht = El(e.scroller || Nl), pt = Dl.core.getCache(ht), _t = Tc(ht), mt = "fixed" === ("pinType" in e ? e.pinType : _l(ht, "pinType") || _t && "fixed"), gt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], vt = dt && e.toggleActions.split(" "), yt = "markers" in e ? e.markers : nf.markers, bt = _t ? 0 : parseFloat(Vc(ht)["border" + ft.p2 + qc]) || 0, wt = this, xt = e.onRefreshInit && function () {
                            return e.onRefreshInit(wt)
                        }
                            , Tt = function (t, e, n) {
                                var r = n.d
                                    , i = n.d2
                                    , o = n.a;
                                return (o = _l(t, "getBoundingClientRect")) ? function () {
                                    return o()[r]
                                }
                                    : function () {
                                        return (e ? Nl["inner" + i] : t["client" + i]) || 0
                                    }
                            }(ht, _t, ft), At = function (t, e) {
                                return !e || ~dl.indexOf(t) ? Ac(t) : function () {
                                    return Nf
                                }
                            }(ht, _t), Et = 0, kt = 0, Ct = kl(ht, ft);
                        if (wt.media = uc,
                            wt._dir = ft,
                            et *= 45,
                            wt.scroller = ht,
                            wt.scroll = ut ? ut.time.bind(ut) : Ct,
                            a = Ct(),
                            wt.vars = e,
                            n = n || e.animation,
                            "refreshPriority" in e && (Kl = 1,
                                -9999 === e.refreshPriority && (fc = wt)),
                            pt.tweenScroll = pt.tweenScroll || {
                                top: jf(ht, Al),
                                left: jf(ht, Tl)
                            },
                            wt.tweenTo = r = pt.tweenScroll[ft.p],
                            wt.scrubDuration = function (t) {
                                (D = Oc(t) && t) ? I ? I.duration(t) : I = Dl.to(n, {
                                    ease: "expo",
                                    totalProgress: "+=0.001",
                                    duration: D,
                                    paused: !0,
                                    onComplete: function () {
                                        return nt && nt(wt)
                                    }
                                }) : (I && I.progress(1).kill(),
                                    I = 0)
                            }
                            ,
                            n && (n.vars.lazy = !1,
                                n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0),
                                wt.animation = n.pause(),
                                n.scrollTrigger = wt,
                                wt.scrubDuration(Z),
                                M = 0,
                                X || (X = n.vars.id)),
                            uf.push(wt),
                            ot && (Mc(ot) && !ot.push || (ot = {
                                snapTo: ot
                            }),
                                "scrollBehavior" in Hl.style && Dl.set(_t ? [Hl, Rl] : ht, {
                                    scrollBehavior: "auto"
                                }),
                                o = Sc(ot.snapTo) ? ot.snapTo : "labels" === ot.snapTo ? function (t) {
                                    return function (e) {
                                        return Dl.utils.snap(Gc(t), e)
                                    }
                                }(n) : "labelsDirectional" === ot.snapTo ? (W = n,
                                    function (t, e) {
                                        return Zc(Gc(W))(t, e.direction)
                                    }
                                ) : !1 !== ot.directional ? function (t, e) {
                                    return Zc(ot.snapTo)(t, hc() - kt < 500 ? 0 : e.direction)
                                }
                                    : Dl.utils.snap(ot.snapTo),
                                P = ot.duration || {
                                    min: .1,
                                    max: 2
                                },
                                P = Mc(P) ? Fl(P.min, P.max) : Fl(P, P),
                                N = Dl.delayedCall(ot.delay || D / 2 || .1, (function () {
                                    var t = Ct()
                                        , e = hc() - kt < 500
                                        , i = r.tween;
                                    if (!(e || Math.abs(wt.getVelocity()) < 10) || i || Yl || Et === t)
                                        wt.isActive && Et !== t && N.restart(!0);
                                    else {
                                        var a = (t - u) / _
                                            , s = n && !dt ? n.totalProgress() : a
                                            , c = e ? 0 : (s - L) / (hc() - ql) * 1e3 || 0
                                            , f = Dl.utils.clamp(-a, 1 - a, Nc(c / 2) * c / .185)
                                            , d = a + (!1 === ot.inertia ? 0 : f)
                                            , h = Fl(0, 1, o(d, wt))
                                            , p = Math.round(u + h * _)
                                            , m = ot
                                            , g = m.onStart
                                            , v = m.onInterrupt
                                            , y = m.onComplete;
                                        if (t <= l && t >= u && p !== t) {
                                            if (i && !i._initted && i.data <= Nc(p - t))
                                                return;
                                            !1 === ot.inertia && (f = h - a),
                                                r(p, {
                                                    duration: P(Nc(.185 * Math.max(Nc(d - s), Nc(h - s)) / c / .05 || 0)),
                                                    ease: ot.ease || "power3",
                                                    data: Nc(p - t),
                                                    onInterrupt: function () {
                                                        return N.restart(!0) && v && v(wt)
                                                    },
                                                    onComplete: function () {
                                                        wt.update(),
                                                            Et = Ct(),
                                                            M = L = n && !dt ? n.totalProgress() : wt.progress,
                                                            rt && rt(wt),
                                                            y && y(wt)
                                                    }
                                                }, t, f * _, p - t - f * _),
                                                g && g(wt, r.tween)
                                        }
                                    }
                                }
                                )).pause()),
                            X && (lf[X] = wt),
                            (z = (Q = wt.trigger = El(Q || K)) && Q._gsap && Q._gsap.stRevert) && (z = z(wt)),
                            K = !0 === K ? Q : El(K),
                            Cc(Y) && (Y = {
                                targets: Q,
                                className: Y
                            }),
                            K && (!1 === J || J === Fc || (J = !(!J && "flex" === Vc(K.parentNode).display) && Wc),
                                wt.pin = K,
                                !1 !== e.force3D && Dl.set(K, {
                                    force3D: !0
                                }),
                                (i = Dl.core.getCache(K)).spacer ? m = i.pinState : (st && ((st = El(st)) && !st.nodeType && (st = st.current || st.nativeElement),
                                    i.spacerIsNative = !!st,
                                    st && (i.spacerState = Pf(st))),
                                    i.spacer = y = st || Bl.createElement("div"),
                                    y.classList.add("pin-spacer"),
                                    X && y.classList.add("pin-spacer-" + X),
                                    i.pinState = m = Pf(K)),
                                wt.spacer = y = i.spacer,
                                O = Vc(K),
                                E = O[J + ft.os2],
                                w = Dl.getProperty(K),
                                x = Dl.quickSetter(K, ft.a, $c),
                                Lf(K, y, O),
                                v = Pf(K)),
                            yt)
                            if (ut) {
                                var Ot = ut.vars.onUpdate
                                    , Mt = ut.vars.onUpdateParams;
                                ut.eventCallback("onUpdate", (function () {
                                    wt.update(0, 0, 1),
                                        Ot && Ot.apply(Mt || [])
                                }
                                ))
                            }

                        wt.revert = function (t) {
                            var e = !1 !== t || !wt.enabled
                                , r = Vl;
                            e !== wt.isReverted && (e && (wt.scroll.rec || !Vl || !cc || (wt.scroll.rec = Ct()),
                                R = Math.max(Ct(), wt.scroll.rec || 0),
                                B = wt.progress,
                                H = n && n.progress()),
                                c && [c, f, d, h].forEach((function (t) {
                                    return t.style.display = e ? "none" : "block"
                                }
                                )),
                                e && (Vl = 1),
                                wt.update(e),
                                Vl = r,
                                K && (e ? function (t, e, n) {
                                    Df(n);
                                    var r = t._gsap;
                                    if (r.spacerIsNative)
                                        Df(r.spacerState);
                                    else if (t.parentNode === e) {
                                        var i = e.parentNode;
                                        i && (i.insertBefore(t, e),
                                            i.removeChild(e))
                                    }
                                }(K, y, m) : (!at || !wt.isActive) && Lf(K, y, Vc(K), k)),
                                wt.isReverted = e)
                        }

                            ,
                            wt.refresh = function (i, o) {
                                if (!Vl && wt.enabled || o)
                                    if (K && i && _c)
                                        Kc(t, "scrollEnd", vf);
                                    else {
                                        !cc && xt && xt(wt),
                                            Vl = 1,
                                            kt = hc(),
                                            r.tween && (r.tween.kill(),
                                                r.tween = 0),
                                            I && I.pause(),
                                            tt && n && n.time(-.01, !0).invalidate(),
                                            wt.isReverted || wt.revert();
                                        for (var p, b, x, E, C, S, O, M, L, D, P = Tt(), j = At(), z = ut ? ut.duration() : Ec(ht, ft), W = 0, F = 0, q = e.end, $ = e.endTrigger || Q, V = e.start || (0 !== e.start && Q ? K ? "0 0" : "0 100%" : 0), Y = wt.pinnedContainer = e.pinnedContainer && El(e.pinnedContainer), X = Q && Math.max(0, uf.indexOf(wt)) || 0, U = X; U--;)
                                            (S = uf[U]).end || S.refresh(0, 1) || (Vl = 1),
                                                !(O = S.pin) || O !== Q && O !== K || S.isReverted || (D || (D = []),
                                                    D.unshift(S),
                                                    S.revert()),
                                                S !== uf[U] && (X--,
                                                    U--);
                                        for (Sc(V) && (V = V(wt)),
                                            u = Bf(V, Q, P, ft, Ct(), c, d, wt, j, bt, mt, z, ut) || (K ? -.001 : 0),
                                            Sc(q) && (q = q(wt)),
                                            Cc(q) && !q.indexOf("+=") && (~q.indexOf(" ") ? q = (Cc(V) ? V.split(" ")[0] : "") + q : (W = of(q.substr(2), P),
                                                q = Cc(V) ? V : u + W,
                                                $ = Q)),
                                            l = Math.max(u, Bf(q || ($ ? "100% 0" : z), $, P, ft, Ct() + W, f, h, wt, j, bt, mt, z, ut)) || -.001,
                                            _ = l - u || (u -= .01) && .001,
                                            W = 0,
                                            U = X; U--;)
                                            (O = (S = uf[U]).pin) && S.start - S._pinPush < u && !ut && S.end > 0 && (p = S.end - S.start,
                                                O !== Q && O !== Y || Oc(V) || (W += p * (1 - S.progress)),
                                                O === K && (F += p));
                                        if (u += W,
                                            l += W,
                                            wt._pinPush = F,
                                            c && W && ((p = {})[ft.a] = "+=" + W,
                                                Y && (p[ft.p] = "-=" + Ct()),
                                                Dl.set([c, f], p)),
                                            K)
                                            p = Vc(K),
                                                E = ft === Al,
                                                x = Ct(),
                                                T = parseFloat(w(ft.a)) + F,
                                                !z && l > 1 && ((_t ? Hl : ht).style["overflow-" + ft.a] = "scroll"),
                                                Lf(K, y, p),
                                                v = Pf(K),
                                                b = Xc(K, !0),
                                                M = mt && kl(ht, E ? Tl : Al)(),
                                                J && ((k = [J + ft.os2, _ + F + $c]).t = y,
                                                    (U = J === Wc ? Uc(K, ft) + _ + F : 0) && k.push(ft.d, U + $c),
                                                    Df(k),
                                                    mt && Ct(R)),
                                                mt && ((C = {
                                                    top: b.top + (E ? x - u : M) + $c,
                                                    left: b.left + (E ? M : x - u) + $c,
                                                    boxSizing: "border-box",
                                                    position: "fixed"
                                                }).width = C.maxWidth = Math.ceil(b.width) + $c,
                                                    C.height = C.maxHeight = Math.ceil(b.height) + $c,
                                                    C.margin = C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = "0",
                                                    C.padding = p.padding,
                                                    C.paddingTop = p.paddingTop,
                                                    C.paddingRight = p.paddingRight,
                                                    C.paddingBottom = p.paddingBottom,
                                                    C.paddingLeft = p.paddingLeft,
                                                    g = function (t, e, n) {
                                                        for (var r, i = [], o = t.length, a = n ? 8 : 0; a < o; a += 2)
                                                            r = t[a],
                                                                i.push(r, r in e ? e[r] : t[a + 1]);
                                                        return i.t = t.t,
                                                            i
                                                    }(m, C, at)),
                                                n ? (L = n._initted,
                                                    Jl(1),
                                                    n.render(n.duration(), !0, !0),
                                                    A = w(ft.a) - T + _ + F,
                                                    _ !== A && mt && g.splice(g.length - 2, 2),
                                                    n.render(0, !0, !0),
                                                    L || n.invalidate(),
                                                    Jl(0)) : A = _;
                                        else if (Q && Ct() && !ut)
                                            for (b = Q.parentNode; b && b !== Hl;)
                                                b._pinOffset && (u -= b._pinOffset,
                                                    l -= b._pinOffset),
                                                    b = b.parentNode;
                                        D && D.forEach((function (t) {
                                            return t.revert(!1)
                                        }
                                        )),
                                            wt.start = u,
                                            wt.end = l,
                                            a = s = Ct(),
                                            ut || (a < R && Ct(R),
                                                wt.scroll.rec = 0),
                                            wt.revert(!1),
                                            N && (Et = -1,
                                                wt.isActive && Ct(u + _ * B),
                                                N.restart(!0)),
                                            Vl = 0,
                                            n && dt && (n._initted || H) && n.progress() !== H && n.progress(H, !0).render(n.time(), !0, !0),
                                            (B !== wt.progress || ut) && (n && !dt && n.totalProgress(B, !0),
                                                wt.progress = B,
                                                wt.update(0, 0, 1)),
                                            K && J && (y._pinOffset = Math.round(wt.progress * A)),
                                            G && G(wt)
                                    }
                            }


                            ,
                            wt.update = function (t, e, i) {
                                if (!ut || i || t) {
                                    var o, c, f, h, p, m, b, w = wt.scroll(), k = t ? 0 : (w - u) / _, O = k < 0 ? 0 : k > 1 ? 1 : k || 0, D = wt.progress;
                                    if (e && (s = a,
                                        a = ut ? Ct() : w,
                                        ot && (L = M,
                                            M = n && !dt ? n.totalProgress() : O)),
                                        et && !O && K && !Vl && !dc && _c && u < w + (w - s) / (hc() - ql) * et && (O = 1e-4),
                                        O !== D && wt.enabled) {
                                        if (h = (p = (o = wt.isActive = !!O && O < 1) !== (!!D && D < 1)) || !!O != !!D,
                                            wt.direction = O > D ? 1 : -1,
                                            wt.progress = O,
                                            h && !Vl && (c = O && !D ? 0 : 1 === O ? 1 : 1 === D ? 2 : 3,
                                                dt && (f = !p && "none" !== vt[c + 1] && vt[c + 1] || vt[c],
                                                    b = n && ("complete" === f || "reset" === f || f in n))),
                                            ct && (p || b) && (b || Z || !n) && (Sc(ct) ? ct(wt) : wt.getTrailing(ct).forEach((function (t) {
                                                return t.endAnimation()
                                            }
                                            ))),
                                            dt || (!I || Vl || dc ? n && n.totalProgress(O, !!Vl) : ((ut || fc && fc !== wt) && I.render(I._dp._time - I._start),
                                                I.resetTo ? I.resetTo("totalProgress", O, n._tTime / n._tDur) : (I.vars.totalProgress = O,
                                                    I.invalidate().restart()))),
                                            K)
                                            if (t && J && (y.style[J + ft.os2] = E),
                                                mt) {
                                                if (h) {
                                                    if (m = !t && O > D && l + 1 > w && w + 1 >= Ec(ht, ft),
                                                        at)
                                                        if (t || !o && !m)
                                                            Hf(K, y);
                                                        else {
                                                            var P = Xc(K, !0)
                                                                , B = w - u;
                                                            Hf(K, Hl, P.top + (ft === Al ? B : 0) + $c, P.left + (ft === Al ? 0 : B) + $c)
                                                        }
                                                    Df(o || m ? g : v),
                                                        A !== _ && O < 1 && o || x(T + (1 !== O || m ? 0 : A))
                                                }
                                            } else
                                                x(bc(T + A * O));
                                        ot && !r.tween && !Vl && !dc && N.restart(!0),
                                            Y && (p || it && O && (O < 1 || !ac)) && Wl(Y.targets).forEach((function (t) {
                                                return t.classList[o || it ? "add" : "remove"](Y.className)
                                            }
                                            )),
                                            V && !dt && !t && V(wt),
                                            h && !Vl ? (dt && (b && ("complete" === f ? n.pause().totalProgress(1) : "reset" === f ? n.restart(!0).pause() : "restart" === f ? n.restart(!0) : n[f]()),
                                                V && V(wt)),
                                                !p && ac || (U && p && Pc(wt, U),
                                                    gt[c] && Pc(wt, gt[c]),
                                                    it && (1 === O ? wt.kill(!1, 1) : gt[c] = 0),
                                                    p || gt[c = 1 === O ? 1 : 3] && Pc(wt, gt[c])),
                                                lt && !o && Math.abs(wt.getVelocity()) > (Oc(lt) ? lt : 2500) && (Dc(wt.callbackAnimation),
                                                    I ? I.progress(1) : Dc(n, !O, 1))) : dt && V && !Vl && V(wt)
                                    }
                                    if (S) {
                                        var R = ut ? w / ut.duration() * (ut._caScrollDist || 0) : w;
                                        C(R + (d._isFlipped ? 1 : 0)),
                                            S(R)
                                    }
                                    j && j(-w / ut.duration() * (ut._caScrollDist || 0))
                                }
                            }
                            ,
                            wt.enable = function (e, n) {
                                wt.enabled || (wt.enabled = !0,
                                    Kc(ht, "resize", hf),
                                    Kc(_t ? Bl : ht, "scroll", ff),
                                    xt && Kc(t, "refreshInit", xt),
                                    !1 !== e && (wt.progress = B = 0,
                                        a = s = Et = Ct()),
                                    !1 !== n && wt.refresh())
                            }
                            ,

                            wt.enable(!1, !1),
                            z && z(wt),
                            n && n.add && !_ ? Dl.delayedCall(.01, (function () {
                                return u || l || wt.refresh()
                            }
                            )) && (_ = .01) && (u = l = 0) : wt.refresh()
                    } else
                        this.update = this.refresh = this.kill = yc
                }
                    ,
                    t.register = function (e) {
                        return Pl || (Dl = e || xc(),
                            wc() && window.document && t.enable(),
                            Pl = mc),
                            Pl
                    }
                    ,

                    t.enable = function () {
                        if (Nl = window,
                            Bl = document,
                            Rl = Bl.documentElement,
                            Hl = Bl.body,
                            Dl && (Wl = Dl.utils.toArray,
                                Fl = Dl.utils.clamp,
                                Jl = Dl.core.suppressOverwrites || yc,
                                Dl.core.globals("ScrollTrigger", t),
                                Hl)) {
                            mc = 1,
                                Il.register(Dl),
                                t.isTouch = Il.isTouch,
                                oc = Il.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                                Kc(Nl, "wheel", ff),
                                jl = [Nl, Bl, Rl, Hl],
                                t.matchMedia({
                                    "(orientation: portrait)": function () {
                                        return df(),
                                            df
                                    }
                                }),
                                Kc(Bl, "scroll", ff);
                            var e, n, r = Hl.style, i = r.borderTopStyle;
                            for (r.borderTopStyle = "solid",
                                e = Xc(Hl),
                                Al.m = Math.round(e.top + Al.sc()) || 0,
                                Tl.m = Math.round(e.left + Tl.sc()) || 0,
                                i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
                                $l = setInterval(cf, 250),
                                Dl.delayedCall(.5, (function () {
                                    return dc = 0
                                }
                                )),
                                Kc(Bl, "touchcancel", yc),
                                Kc(Hl, "touchstart", yc),
                                Qc(Kc, Bl, "pointerdown,touchstart,mousedown", gc),
                                Qc(Kc, Bl, "pointerup,touchend,mouseup", vc),
                                Xl = Dl.utils.checkPrefix("transform"),
                                Mf.push(Xl),
                                Pl = hc(),
                                zl = Dl.delayedCall(.2, Ef).pause(),
                                Ql = [Bl, "visibilitychange", function () {
                                    var t = Nl.innerWidth
                                        , e = Nl.innerHeight;
                                    Bl.hidden ? (Gl = t,
                                        Zl = e) : Gl === t && Zl === e || hf()
                                }
                                    , Bl, "DOMContentLoaded", Ef, Nl, "load", Ef, Nl, "resize", hf],
                                kc(Kc),
                                uf.forEach((function (t) {
                                    return t.enable(0, 1)
                                }
                                )),
                                n = 0; n < fl.length; n += 3)
                                tf(Jc, fl[n], fl[n + 1]),
                                    tf(Jc, fl[n], fl[n + 2])
                        }
                    }
                    ,


                    t.matchMedia = function (t) {

                    }
                    ,


                    t
            }();
            zf.version = "3.10.4",


                zf.create = function (t, e) {
                    return new zf(t, e)
                }
                ,

                zf.batch = function (t, e) {
                    var n, r = [], i = {}, o = e.interval || .016, a = e.batchMax || 1e9, s = function (t, e) {
                        var n = []
                            , r = []
                            , i = Dl.delayedCall(o, (function () {
                                e(n, r),
                                    n = [],
                                    r = []
                            }
                            )).pause();
                        return function (t) {
                            n.length || i.restart(!0),
                                n.push(t.trigger),
                                r.push(t),
                                a <= n.length && i.progress(1)
                        }
                    };
                    for (n in e)
                        i[n] = "on" === n.substr(0, 2) && Sc(e[n]) && "onRefreshInit" !== n ? s(0, e[n]) : e[n];
                    return Sc(a) && (a = a(),
                        Kc(zf, "refresh", (function () {
                            return a = e.batchMax()
                        }
                        ))),
                        Wl(t).forEach((function (t) {
                            var e = {};
                            for (n in i)
                                e[n] = i[n];
                            e.trigger = t,
                                r.push(zf.create(e))
                        }
                        )),
                        r
                }
                ;
            var Wf, Ff = function (t, e, n, r) {
                return e > r ? t(r) : e < 0 && t(0),
                    n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
            }, qf = function t(e, n) {
                !0 === n ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (Il.isTouch ? " pinch-zoom" : "") : "none",
                    e === Rl && t(Hl, n)
            }, $f = {
                auto: 1,
                scroll: 1
            }, Vf = function (t) {

            }, Yf = function (t, e, n, r) {

            }, Xf = /(input|label|select|textarea)/i, Uf = function (t) {
                var e = Xf.test(t.target.tagName);
                (e || Wf) && (t._gsapAllow = !0,
                    Wf = e)
            }, Gf = function (t) {

            };

            // done


            function ph() {

                if (document.getElementById("pageHome")) {



                    /*no touch*/
                    {
                        var _ = document.querySelector("section.materials .topRow")
                            , m = document.querySelector("section.materials .topRow .rightPart .img")
                            , g = document.querySelector("section.materials .topRow .leftPart .img")
                            , v = document.querySelector("section.materials .topRow .leftPart .par-b");
                        document.querySelector("section.materials .topRow .rightPart .par-b"),
                            _.clientHeight;
                        new Uu.timeline({
                            scrollTrigger: {
                                trigger: _,
                                scrub: .3,
                                pin: !0,
                                start: "-10%"
                            }
                        }).fromTo(g, {
                            scale: 2.28
                        }, {
                            scale: 1
                        }).fromTo(m, {
                            scale: .5
                        }, {
                            scale: 1
                        }, 0).fromTo(v, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, .2)
                    }



                    var F = document.querySelector("#cursor .wave")
                        , q = (new kd(F, {
                            direction: "right",
                            duplicated: !0,
                            startVisible: !0,
                            speed: 10,
                            recalcResize: !1,
                            gap: -.1
                        }),
                            document.querySelector("section.newTop  .mask"));
                    q && (A.addEventListener("mousemove", (function (t) {
                        var e = t.clientX
                            , n = t.clientY;
                        Uu.to("#cursor", {
                            top: n - 60,
                            left: e - 60,
                            duration: .15
                        })
                    }
                    )),
                        q.addEventListener("mouseenter", (function (t) {
                            Uu.to("#cursor", {
                                opacity: 1,
                                duration: .2,
                                scale: 1.2
                            })
                        }
                        )),
                        q.addEventListener("mouseleave", (function (t) {
                            Uu.to("#cursor", {
                                duration: .2,
                                scale: 0
                            })
                        }
                        ))),
                        dh(new fh("#splitClaim", {
                            types: "lines"
                        }).lines);
                    var $ = document.querySelectorAll("#splitClaim .lineInner")
                        , V = document.getElementById("quote")
                        , Y = document.querySelector("section.usporadani .author");
                    Uu.timeline({
                        scrollTrigger: {
                            trigger: "#splitClaim"
                        }
                    }).from($, {
                        y: "100%",
                        duration: .8,
                        stagger: .1,
                        delay: .8
                    }).call((function () {
                        $.forEach((function (t) {
                            hh(t)
                        }
                        ))
                    }
                    )).from(V, {
                        opacity: 0
                    }, .9).from(Y, {
                        opacity: 0
                    });

                    dh(new fh("#test", {
                        types: "lines, words"
                    }).lines);
                    var rt = document.querySelectorAll(".headingTest .lineInner .word")
                        , it = document.querySelectorAll(".headingTest")
                        , ot = 1.4;
                    Uu.timeline({
                        paused: !1,
                        onComplete: function () {
                            hh(it[0])
                        }
                    }).from(rt, {
                        duration: 1,
                        y: "100%",
                        opacity: 0,
                        rotate: 15,
                        stagger: .12,
                        delay: .5
                    }).fromTo(tt, {
                        scale: o + .2
                    }, {
                        scale: o,
                        duration: 1.5
                    }, ot).from(et, {
                        opacity: 0,
                        duration: 1
                    }, ot).from(nt, {
                        width: "30vw",
                        height: "40%",
                        ease: "slideEase",
                        duration: 1.5
                    }, ot).from(G, {
                        opacity: 0,
                        duration: .8
                    }, 1).from(X, {
                        opacity: 0,
                        duration: .8
                    }, 1).from(Z, {
                        opacity: 0,
                        duration: .8
                    }, 1).from(U, {
                        webkitClipPath: "inset(0% 100% 0% 0%)",
                        duration: .8
                    }).from(Q, {
                        opacity: 0,
                        duration: 1
                    }, 2.3).from(K, {
                        opacity: 0,
                        duration: 1
                    }, 2.3);
                    var at = document.querySelector(".scrollWrap .smooth-scroll");
                    new Uu.timeline({
                        scrollTrigger: {
                            start: "1%",
                            end: "50%",
                            trigger: J,
                            scrub: .5
                        }
                    }).fromTo(nt, {
                        borderRadius: s,
                        width: a
                    }, {
                        borderRadius: 40,
                        width: r,
                        ease: "power1.out"
                    }).fromTo(tt, {
                        scale: o,
                        z: .01
                    }, {
                        scale: 1
                    }, 0).to(at, {
                        autoAlpha: 0,
                        duration: i
                    }, 0);
                    var st = document.querySelectorAll("section .sectionHeading");
                    st.forEach((function (t) {
                        dh(new fh(t, {
                            types: "lines, words,chars"
                        }).lines)
                    }
                    ));




                }
            }


            Uu.registerPlugin(zf);

            window.addEventListener("load", (function () {
                ph();
                new (mh())
            }
            )),

                document.addEventListener("DOMContentLoaded", (function () {
                }
                ))


        }
        )()
}
)();
