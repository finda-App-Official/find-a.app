const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/web-wjzjdGK-.js",
      "assets/index.esm2017-DmSeKpuB.js",
      "assets/web-CfPZO2SC.js",
      "assets/JobsView-DJg4mGFu.js",
      "assets/job-BadqCDlw.js",
      "assets/Job-CCBlv2pP.js",
      "assets/ViewJobView-CyeuUV7U.js",
      "assets/applicationData-DwnjmfRz.js",
      "assets/ShareJobButton-CrS3I5kY.js",
      "assets/ShareJobButton-DHkJsLaz.css",
      "assets/VToolbarItems-774J2e9V.js",
      "assets/VSwitch-D7mMwRoY.js",
      "assets/VSwitch-Mm7Rd7At.css",
      "assets/ViewJobView-BWM7pFcQ.css",
      "assets/SuggestedUsersView-D-PHKcJE.js",
      "assets/RestSelect.vue_vue_type_script_setup_true_lang-D7DvSWwj.js",
      "assets/AppProgress.vue_vue_type_script_setup_true_lang-CcWAFGiw.js",
      "assets/ProfileJobComparison-DkHYWjaq.js",
      "assets/ProfileJobComparison-DaKx72AP.css",
      "assets/VSlider-CsQBiiTH.js",
      "assets/VSlider-CAqSVbOA.css",
      "assets/EditJobView-DcfEJ_pw.js",
      "assets/GeoCoder.vue_vue_type_script_setup_true_lang-Co53xfay.js",
      "assets/ImageUpload-Dgv-jhkf.js",
      "assets/MediaDisplay.vue_vue_type_script_setup_true_lang-DRSVDff7.js",
      "assets/MediaDisplay-CGzFhKo4.css",
      "assets/ImageUpload-CeBgRoNS.css",
      "assets/VBadge-Cat9IW5c.js",
      "assets/VBadge-BQrRJ9S0.css",
      "assets/EditJobView-DiMqjhVc.css",
      "assets/PreviewJobView-16d8Y-I8.js",
      "assets/CompanyMatchInfo-CKkHsyDD.js",
      "assets/CompanyAvatar-CeLad7S0.js",
      "assets/CompanyAvatar-CMaXx5F8.css",
      "assets/CompanyMatchInfo-D-OJ8e5E.css",
      "assets/MatchCard-BM3WtSVo.js",
      "assets/MatchCard-CUwJda2A.css",
      "assets/PreviewJobView-CzxY6zjT.css",
      "assets/ChatView-Cvx_N5Th.js",
      "assets/chat-B79I9A_J.js",
      "assets/UserAvatar-Bzczvp6B.js",
      "assets/UserAvatar-BjOSHNWA.css",
      "assets/ViewChatView-CF1awOvo.js",
      "assets/profile-Cg-HBVks.js",
      "assets/ViewChatView-CXccBQvK.css",
      "assets/HomeView-JhvVFVH2.js",
      "assets/VerifyEmailEyeCatcher.vue_vue_type_script_setup_true_lang-90Lb55Rl.js",
      "assets/HomeView-DbPWYPNA.css",
      "assets/MatchView-CqbQdPBS.js",
      "assets/MatchView-BHleMY3a.css",
      "assets/ViewProfileView-DUrAtAWP.js",
      "assets/LogoutButton.vue_vue_type_script_setup_true_lang-BbHXY05v.js",
      "assets/ViewProfileView-DQVele0w.css",
      "assets/EditProfileView-CuP-PCm8.js",
      "assets/UserView-DNsle6DZ.js",
      "assets/CompanyView-BC8R8R4C.js",
      "assets/LoginView-EUeUG8a8.js",
      "assets/LoginView-B_8LJ9m4.css",
      "assets/LoadView-2DQrsj08.js",
      "assets/LoadView-BnJt0g6b.css",
    ])
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const l = {};
    return (
      r.integrity && (l.integrity = r.integrity),
      r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const l = n(r);
    fetch(r.href, l);
  }
})();
const ly = "modulepreload",
  oy = function (e) {
    return "/" + e;
  },
  Hu = {},
  Ne = function (t, n, a) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      r = Promise.allSettled(
        n.map((s) => {
          if (((s = oy(s)), s in Hu)) return;
          Hu[s] = !0;
          const u = s.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${s}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : ly),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = s),
            i && d.setAttribute("nonce", i),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, v) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  v(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    function l(o) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
        throw o;
    }
    return r.then((o) => {
      for (const i of o || []) i.status === "rejected" && l(i.reason);
      return t().catch(l);
    });
  };
async function iy() {
  (
    await Ne(() => import("./webfontloader-CGxKQY8n.js").then((t) => t.w), [])
  ).load({
    google: { families: ["Roboto:100,300,400,500,700,900&display=swap"] },
  });
}
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Es(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ue = {},
  Ga = [],
  wn = () => {},
  sy = () => !1,
  oo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ps = (e) => e.startsWith("onUpdate:"),
  nt = Object.assign,
  Ts = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  uy = Object.prototype.hasOwnProperty,
  Re = (e, t) => uy.call(e, t),
  _e = Array.isArray,
  Ka = (e) => io(e) === "[object Map]",
  Sf = (e) => io(e) === "[object Set]",
  Ee = (e) => typeof e == "function",
  et = (e) => typeof e == "string",
  Mn = (e) => typeof e == "symbol",
  Je = (e) => e !== null && typeof e == "object",
  As = (e) => (Je(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  wf = Object.prototype.toString,
  io = (e) => wf.call(e),
  cy = (e) => io(e).slice(8, -1),
  Cf = (e) => io(e) === "[object Object]",
  Is = (e) =>
    et(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  wr = Es(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  so = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  dy = /-(\w)/g,
  Rt = so((e) => e.replace(dy, (t, n) => (n ? n.toUpperCase() : ""))),
  fy = /\B([A-Z])/g,
  Ea = so((e) => e.replace(fy, "-$1").toLowerCase()),
  Pa = so((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ko = so((e) => (e ? `on${Pa(e)}` : "")),
  Kn = (e, t) => !Object.is(e, t),
  kl = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  xf = (e, t, n, a = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: a,
      value: n,
    });
  },
  Ai = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  _f = (e) => {
    const t = et(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ju;
const uo = () =>
  ju ||
  (ju =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function co(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n],
        r = et(a) ? gy(a) : co(a);
      if (r) for (const l in r) t[l] = r[l];
    }
    return t;
  } else if (et(e) || Je(e)) return e;
}
const vy = /;(?![^(]*\))/g,
  my = /:([^]+)/,
  hy = /\/\*[^]*?\*\//g;
function gy(e) {
  const t = {};
  return (
    e
      .replace(hy, "")
      .split(vy)
      .forEach((n) => {
        if (n) {
          const a = n.split(my);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
    t
  );
}
function Pt(e) {
  let t = "";
  if (et(e)) t = e;
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const a = Pt(e[n]);
      a && (t += a + " ");
    }
  else if (Je(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const yy =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  by = Es(yy);
function kf(e) {
  return !!e || e === "";
}
const Ef = (e) => !!(e && e.__v_isRef === !0),
  At = (e) =>
    et(e)
      ? e
      : e == null
      ? ""
      : _e(e) || (Je(e) && (e.toString === wf || !Ee(e.toString)))
      ? Ef(e)
        ? At(e.value)
        : JSON.stringify(e, Pf, 2)
      : String(e),
  Pf = (e, t) =>
    Ef(t)
      ? Pf(e, t.value)
      : Ka(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [a, r], l) => ((n[Yo(a, l) + " =>"] = r), n),
            {}
          ),
        }
      : Sf(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Yo(n)) }
      : Mn(t)
      ? Yo(t)
      : Je(t) && !_e(t) && !Cf(t)
      ? String(t)
      : t,
  Yo = (e, t = "") => {
    var n;
    return Mn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Et;
class Tf {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Et),
      !t && Et && (this.index = (Et.scopes || (Et.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Et;
      try {
        return (Et = this), t();
      } finally {
        Et = n;
      }
    }
  }
  on() {
    Et = this;
  }
  off() {
    Et = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Jr(e) {
  return new Tf(e);
}
function Af() {
  return Et;
}
function mt(e, t = !1) {
  Et && Et.cleanups.push(e);
}
let Ye;
const qo = new WeakSet();
class If {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Et && Et.active && Et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), qo.has(this) && (qo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Df(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), zu(this), Of(this);
    const t = Ye,
      n = ln;
    (Ye = this), (ln = !0);
    try {
      return this.fn();
    } finally {
      $f(this), (Ye = t), (ln = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Os(t);
      (this.deps = this.depsTail = void 0),
        zu(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? qo.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ii(this) && this.run();
  }
  get dirty() {
    return Ii(this);
  }
}
let Vf = 0,
  Cr,
  xr;
function Df(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = xr), (xr = e);
    return;
  }
  (e.next = Cr), (Cr = e);
}
function Vs() {
  Vf++;
}
function Ds() {
  if (--Vf > 0) return;
  if (xr) {
    let t = xr;
    for (xr = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Cr; ) {
    let t = Cr;
    for (Cr = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Of(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function $f(e) {
  let t,
    n = e.depsTail,
    a = n;
  for (; a; ) {
    const r = a.prevDep;
    a.version === -1 ? (a === n && (n = r), Os(a), py(a)) : (t = a),
      (a.dep.activeLink = a.prevActiveLink),
      (a.prevActiveLink = void 0),
      (a = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function Ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Mf(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Mf(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Vr)
  )
    return;
  e.globalVersion = Vr;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ii(e))) {
    e.flags &= -3;
    return;
  }
  const n = Ye,
    a = ln;
  (Ye = e), (ln = !0);
  try {
    Of(e);
    const r = e.fn(e._value);
    (t.version === 0 || Kn(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (Ye = n), (ln = a), $f(e), (e.flags &= -3);
  }
}
function Os(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: r } = e;
  if (
    (a && ((a.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = a), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = a), !a && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep) Os(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function py(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let ln = !0;
const Bf = [];
function ta() {
  Bf.push(ln), (ln = !1);
}
function na() {
  const e = Bf.pop();
  ln = e === void 0 ? !0 : e;
}
function zu(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ye;
    Ye = void 0;
    try {
      t();
    } finally {
      Ye = n;
    }
  }
}
let Vr = 0;
class Sy {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class $s {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!Ye || !ln || Ye === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ye)
      (n = this.activeLink = new Sy(Ye, this)),
        Ye.deps
          ? ((n.prevDep = Ye.depsTail),
            (Ye.depsTail.nextDep = n),
            (Ye.depsTail = n))
          : (Ye.deps = Ye.depsTail = n),
        Lf(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const a = n.nextDep;
      (a.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = a),
        (n.prevDep = Ye.depsTail),
        (n.nextDep = void 0),
        (Ye.depsTail.nextDep = n),
        (Ye.depsTail = n),
        Ye.deps === n && (Ye.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vr++, this.notify(t);
  }
  notify(t) {
    Vs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
    }
  }
}
function Lf(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) Lf(a);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ol = new WeakMap(),
  va = Symbol(""),
  Vi = Symbol(""),
  Dr = Symbol("");
function bt(e, t, n) {
  if (ln && Ye) {
    let a = Ol.get(e);
    a || Ol.set(e, (a = new Map()));
    let r = a.get(n);
    r || (a.set(n, (r = new $s())), (r.map = a), (r.key = n)), r.track();
  }
}
function Pn(e, t, n, a, r, l) {
  const o = Ol.get(e);
  if (!o) {
    Vr++;
    return;
  }
  const i = (s) => {
    s && s.trigger();
  };
  if ((Vs(), t === "clear")) o.forEach(i);
  else {
    const s = _e(e),
      u = s && Is(n);
    if (s && n === "length") {
      const c = Number(a);
      o.forEach((d, f) => {
        (f === "length" || f === Dr || (!Mn(f) && f >= c)) && i(d);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && i(o.get(n)), u && i(o.get(Dr)), t)
      ) {
        case "add":
          s ? u && i(o.get("length")) : (i(o.get(va)), Ka(e) && i(o.get(Vi)));
          break;
        case "delete":
          s || (i(o.get(va)), Ka(e) && i(o.get(Vi)));
          break;
        case "set":
          Ka(e) && i(o.get(va));
          break;
      }
  }
  Ds();
}
function wy(e, t) {
  const n = Ol.get(e);
  return n && n.get(t);
}
function $a(e) {
  const t = xe(e);
  return t === e ? t : (bt(t, "iterate", Dr), Jt(e) ? t : t.map(pt));
}
function fo(e) {
  return bt((e = xe(e)), "iterate", Dr), e;
}
const Cy = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jo(this, Symbol.iterator, pt);
  },
  concat(...e) {
    return $a(this).concat(...e.map((t) => (_e(t) ? $a(t) : t)));
  },
  entries() {
    return Jo(this, "entries", (e) => ((e[1] = pt(e[1])), e));
  },
  every(e, t) {
    return _n(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return _n(this, "filter", e, t, (n) => n.map(pt), arguments);
  },
  find(e, t) {
    return _n(this, "find", e, t, pt, arguments);
  },
  findIndex(e, t) {
    return _n(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return _n(this, "findLast", e, t, pt, arguments);
  },
  findLastIndex(e, t) {
    return _n(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return _n(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xo(this, "includes", e);
  },
  indexOf(...e) {
    return Xo(this, "indexOf", e);
  },
  join(e) {
    return $a(this).join(e);
  },
  lastIndexOf(...e) {
    return Xo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return _n(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return hr(this, "pop");
  },
  push(...e) {
    return hr(this, "push", e);
  },
  reduce(e, ...t) {
    return Uu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Uu(this, "reduceRight", e, t);
  },
  shift() {
    return hr(this, "shift");
  },
  some(e, t) {
    return _n(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return hr(this, "splice", e);
  },
  toReversed() {
    return $a(this).toReversed();
  },
  toSorted(e) {
    return $a(this).toSorted(e);
  },
  toSpliced(...e) {
    return $a(this).toSpliced(...e);
  },
  unshift(...e) {
    return hr(this, "unshift", e);
  },
  values() {
    return Jo(this, "values", pt);
  },
};
function Jo(e, t, n) {
  const a = fo(e),
    r = a[t]();
  return (
    a !== e &&
      !Jt(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const l = r._next();
        return l.value && (l.value = n(l.value)), l;
      })),
    r
  );
}
const xy = Array.prototype;
function _n(e, t, n, a, r, l) {
  const o = fo(e),
    i = o !== e && !Jt(e),
    s = o[t];
  if (s !== xy[t]) {
    const d = s.apply(e, l);
    return i ? pt(d) : d;
  }
  let u = n;
  o !== e &&
    (i
      ? (u = function (d, f) {
          return n.call(this, pt(d), f, e);
        })
      : n.length > 2 &&
        (u = function (d, f) {
          return n.call(this, d, f, e);
        }));
  const c = s.call(o, u, a);
  return i && r ? r(c) : c;
}
function Uu(e, t, n, a) {
  const r = fo(e);
  let l = n;
  return (
    r !== e &&
      (Jt(e)
        ? n.length > 3 &&
          (l = function (o, i, s) {
            return n.call(this, o, i, s, e);
          })
        : (l = function (o, i, s) {
            return n.call(this, o, pt(i), s, e);
          })),
    r[t](l, ...a)
  );
}
function Xo(e, t, n) {
  const a = xe(e);
  bt(a, "iterate", Dr);
  const r = a[t](...n);
  return (r === -1 || r === !1) && Ls(n[0])
    ? ((n[0] = xe(n[0])), a[t](...n))
    : r;
}
function hr(e, t, n = []) {
  ta(), Vs();
  const a = xe(e)[t].apply(e, n);
  return Ds(), na(), a;
}
const _y = Es("__proto__,__v_isRef,__isVue"),
  Rf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Mn)
  );
function ky(e) {
  Mn(e) || (e = String(e));
  const t = xe(this);
  return bt(t, "has", e), t.hasOwnProperty(e);
}
class Ff {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      l = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return l;
    if (n === "__v_raw")
      return a === (r ? (l ? My : zf) : l ? jf : Hf).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(a)
        ? t
        : void 0;
    const o = _e(t);
    if (!r) {
      let s;
      if (o && (s = Cy[n])) return s;
      if (n === "hasOwnProperty") return ky;
    }
    const i = Reflect.get(t, n, Be(t) ? t : a);
    return (Mn(n) ? Rf.has(n) : _y(n)) || (r || bt(t, "get", n), l)
      ? i
      : Be(i)
      ? o && Is(n)
        ? i
        : i.value
      : Je(i)
      ? r
        ? Dt(i)
        : lt(i)
      : i;
  }
}
class Nf extends Ff {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, r) {
    let l = t[n];
    if (!this._isShallow) {
      const s = ba(l);
      if (
        (!Jt(a) && !ba(a) && ((l = xe(l)), (a = xe(a))),
        !_e(t) && Be(l) && !Be(a))
      )
        return s ? !1 : ((l.value = a), !0);
    }
    const o = _e(t) && Is(n) ? Number(n) < t.length : Re(t, n),
      i = Reflect.set(t, n, a, Be(t) ? t : r);
    return (
      t === xe(r) && (o ? Kn(a, l) && Pn(t, "set", n, a) : Pn(t, "add", n, a)),
      i
    );
  }
  deleteProperty(t, n) {
    const a = Re(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && a && Pn(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Mn(n) || !Rf.has(n)) && bt(t, "has", n), a;
  }
  ownKeys(t) {
    return bt(t, "iterate", _e(t) ? "length" : va), Reflect.ownKeys(t);
  }
}
class Ey extends Ff {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Py = new Nf(),
  Ty = new Ey(),
  Ay = new Nf(!0);
const Di = (e) => e,
  vl = (e) => Reflect.getPrototypeOf(e);
function Iy(e, t, n) {
  return function (...a) {
    const r = this.__v_raw,
      l = xe(r),
      o = Ka(l),
      i = e === "entries" || (e === Symbol.iterator && o),
      s = e === "keys" && o,
      u = r[e](...a),
      c = n ? Di : t ? Oi : pt;
    return (
      !t && bt(l, "iterate", s ? Vi : va),
      {
        next() {
          const { value: d, done: f } = u.next();
          return f
            ? { value: d, done: f }
            : { value: i ? [c(d[0]), c(d[1])] : c(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ml(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vy(e, t) {
  const n = {
    get(r) {
      const l = this.__v_raw,
        o = xe(l),
        i = xe(r);
      e || (Kn(r, i) && bt(o, "get", r), bt(o, "get", i));
      const { has: s } = vl(o),
        u = t ? Di : e ? Oi : pt;
      if (s.call(o, r)) return u(l.get(r));
      if (s.call(o, i)) return u(l.get(i));
      l !== o && l.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && bt(xe(r), "iterate", va), Reflect.get(r, "size", r);
    },
    has(r) {
      const l = this.__v_raw,
        o = xe(l),
        i = xe(r);
      return (
        e || (Kn(r, i) && bt(o, "has", r), bt(o, "has", i)),
        r === i ? l.has(r) : l.has(r) || l.has(i)
      );
    },
    forEach(r, l) {
      const o = this,
        i = o.__v_raw,
        s = xe(i),
        u = t ? Di : e ? Oi : pt;
      return (
        !e && bt(s, "iterate", va),
        i.forEach((c, d) => r.call(l, u(c), u(d), o))
      );
    },
  };
  return (
    nt(
      n,
      e
        ? {
            add: ml("add"),
            set: ml("set"),
            delete: ml("delete"),
            clear: ml("clear"),
          }
        : {
            add(r) {
              !t && !Jt(r) && !ba(r) && (r = xe(r));
              const l = xe(this);
              return (
                vl(l).has.call(l, r) || (l.add(r), Pn(l, "add", r, r)), this
              );
            },
            set(r, l) {
              !t && !Jt(l) && !ba(l) && (l = xe(l));
              const o = xe(this),
                { has: i, get: s } = vl(o);
              let u = i.call(o, r);
              u || ((r = xe(r)), (u = i.call(o, r)));
              const c = s.call(o, r);
              return (
                o.set(r, l),
                u ? Kn(l, c) && Pn(o, "set", r, l) : Pn(o, "add", r, l),
                this
              );
            },
            delete(r) {
              const l = xe(this),
                { has: o, get: i } = vl(l);
              let s = o.call(l, r);
              s || ((r = xe(r)), (s = o.call(l, r))), i && i.call(l, r);
              const u = l.delete(r);
              return s && Pn(l, "delete", r, void 0), u;
            },
            clear() {
              const r = xe(this),
                l = r.size !== 0,
                o = r.clear();
              return l && Pn(r, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Iy(r, e, t);
    }),
    n
  );
}
function Ms(e, t) {
  const n = Vy(e, t);
  return (a, r, l) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? a
      : Reflect.get(Re(n, r) && r in a ? n : a, r, l);
}
const Dy = { get: Ms(!1, !1) },
  Oy = { get: Ms(!1, !0) },
  $y = { get: Ms(!0, !1) };
const Hf = new WeakMap(),
  jf = new WeakMap(),
  zf = new WeakMap(),
  My = new WeakMap();
function By(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ly(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : By(cy(e));
}
function lt(e) {
  return ba(e) ? e : Bs(e, !1, Py, Dy, Hf);
}
function Uf(e) {
  return Bs(e, !1, Ay, Oy, jf);
}
function Dt(e) {
  return Bs(e, !0, Ty, $y, zf);
}
function Bs(e, t, n, a, r) {
  if (!Je(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const l = r.get(e);
  if (l) return l;
  const o = Ly(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? a : n);
  return r.set(e, i), i;
}
function Yn(e) {
  return ba(e) ? Yn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ba(e) {
  return !!(e && e.__v_isReadonly);
}
function Jt(e) {
  return !!(e && e.__v_isShallow);
}
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
function xe(e) {
  const t = e && e.__v_raw;
  return t ? xe(t) : e;
}
function vo(e) {
  return (
    !Re(e, "__v_skip") && Object.isExtensible(e) && xf(e, "__v_skip", !0), e
  );
}
const pt = (e) => (Je(e) ? lt(e) : e),
  Oi = (e) => (Je(e) ? Dt(e) : e);
function Be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function W(e) {
  return Wf(e, !1);
}
function he(e) {
  return Wf(e, !0);
}
function Wf(e, t) {
  return Be(e) ? e : new Ry(e, t);
}
class Ry {
  constructor(t, n) {
    (this.dep = new $s()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : xe(t)),
      (this._value = n ? t : pt(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      a = this.__v_isShallow || Jt(t) || ba(t);
    (t = a ? t : xe(t)),
      Kn(t, n) &&
        ((this._rawValue = t),
        (this._value = a ? t : pt(t)),
        this.dep.trigger());
  }
}
function Se(e) {
  return Be(e) ? e.value : e;
}
const Fy = {
  get: (e, t, n) => (t === "__v_raw" ? e : Se(Reflect.get(e, t, n))),
  set: (e, t, n, a) => {
    const r = e[t];
    return Be(r) && !Be(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, a);
  },
};
function Gf(e) {
  return Yn(e) ? e : new Proxy(e, Fy);
}
function sr(e) {
  const t = _e(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Kf(e, n);
  return t;
}
class Ny {
  constructor(t, n, a) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = a),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return wy(xe(this._object), this._key);
  }
}
class Hy {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function ne(e, t, n) {
  return Be(e)
    ? e
    : Ee(e)
    ? new Hy(e)
    : Je(e) && arguments.length > 1
    ? Kf(e, t, n)
    : W(e);
}
function Kf(e, t, n) {
  const a = e[t];
  return Be(a) ? a : new Ny(e, t, n);
}
class jy {
  constructor(t, n, a) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new $s(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Vr - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = a);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ye !== this))
      return Df(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function zy(e, t, n = !1) {
  let a, r;
  return Ee(e) ? (a = e) : ((a = e.get), (r = e.set)), new jy(a, r, n);
}
const hl = {},
  $l = new WeakMap();
let ca;
function Uy(e, t = !1, n = ca) {
  if (n) {
    let a = $l.get(n);
    a || $l.set(n, (a = [])), a.push(e);
  }
}
function Wy(e, t, n = Ue) {
  const {
      immediate: a,
      deep: r,
      once: l,
      scheduler: o,
      augmentJob: i,
      call: s,
    } = n,
    u = (E) => (r ? E : Jt(E) || r === !1 || r === 0 ? Tn(E, 1) : Tn(E));
  let c,
    d,
    f,
    v,
    m = !1,
    h = !1;
  if (
    (Be(e)
      ? ((d = () => e.value), (m = Jt(e)))
      : Yn(e)
      ? ((d = () => u(e)), (m = !0))
      : _e(e)
      ? ((h = !0),
        (m = e.some((E) => Yn(E) || Jt(E))),
        (d = () =>
          e.map((E) => {
            if (Be(E)) return E.value;
            if (Yn(E)) return u(E);
            if (Ee(E)) return s ? s(E, 2) : E();
          })))
      : Ee(e)
      ? t
        ? (d = s ? () => s(e, 2) : e)
        : (d = () => {
            if (f) {
              ta();
              try {
                f();
              } finally {
                na();
              }
            }
            const E = ca;
            ca = c;
            try {
              return s ? s(e, 3, [v]) : e(v);
            } finally {
              ca = E;
            }
          })
      : (d = wn),
    t && r)
  ) {
    const E = d,
      k = r === !0 ? 1 / 0 : r;
    d = () => Tn(E(), k);
  }
  const y = Af(),
    p = () => {
      c.stop(), y && y.active && Ts(y.effects, c);
    };
  if (l && t) {
    const E = t;
    t = (...k) => {
      E(...k), p();
    };
  }
  let w = h ? new Array(e.length).fill(hl) : hl;
  const x = (E) => {
    if (!(!(c.flags & 1) || (!c.dirty && !E)))
      if (t) {
        const k = c.run();
        if (r || m || (h ? k.some((V, A) => Kn(V, w[A])) : Kn(k, w))) {
          f && f();
          const V = ca;
          ca = c;
          try {
            const A = [k, w === hl ? void 0 : h && w[0] === hl ? [] : w, v];
            s ? s(t, 3, A) : t(...A), (w = k);
          } finally {
            ca = V;
          }
        }
      } else c.run();
  };
  return (
    i && i(x),
    (c = new If(d)),
    (c.scheduler = o ? () => o(x, !1) : x),
    (v = (E) => Uy(E, !1, c)),
    (f = c.onStop =
      () => {
        const E = $l.get(c);
        if (E) {
          if (s) s(E, 4);
          else for (const k of E) k();
          $l.delete(c);
        }
      }),
    t ? (a ? x(!0) : (w = c.run())) : o ? o(x.bind(null, !0), !0) : c.run(),
    (p.pause = c.pause.bind(c)),
    (p.resume = c.resume.bind(c)),
    (p.stop = p),
    p
  );
}
function Tn(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Be(e))) Tn(e.value, t, n);
  else if (_e(e)) for (let a = 0; a < e.length; a++) Tn(e[a], t, n);
  else if (Sf(e) || Ka(e))
    e.forEach((a) => {
      Tn(a, t, n);
    });
  else if (Cf(e)) {
    for (const a in e) Tn(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Tn(e[a], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Xr(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (r) {
    Zr(r, t, n);
  }
}
function on(e, t, n, a) {
  if (Ee(e)) {
    const r = Xr(e, t, n, a);
    return (
      r &&
        As(r) &&
        r.catch((l) => {
          Zr(l, t, n);
        }),
      r
    );
  }
  if (_e(e)) {
    const r = [];
    for (let l = 0; l < e.length; l++) r.push(on(e[l], t, n, a));
    return r;
  }
}
function Zr(e, t, n, a = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: l, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || Ue;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, s, u) === !1) return;
      }
      i = i.parent;
    }
    if (l) {
      ta(), Xr(l, null, 10, [e, s, u]), na();
      return;
    }
  }
  Gy(e, n, r, a, o);
}
function Gy(e, t, n, a = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Tt = [];
let gn = -1;
const Ya = [];
let zn = null,
  Ha = 0;
const Yf = Promise.resolve();
let Ml = null;
function ze(e) {
  const t = Ml || Yf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ky(e) {
  let t = gn + 1,
    n = Tt.length;
  for (; t < n; ) {
    const a = (t + n) >>> 1,
      r = Tt[a],
      l = Or(r);
    l < e || (l === e && r.flags & 2) ? (t = a + 1) : (n = a);
  }
  return t;
}
function Rs(e) {
  if (!(e.flags & 1)) {
    const t = Or(e),
      n = Tt[Tt.length - 1];
    !n || (!(e.flags & 2) && t >= Or(n)) ? Tt.push(e) : Tt.splice(Ky(t), 0, e),
      (e.flags |= 1),
      qf();
  }
}
function qf() {
  Ml || (Ml = Yf.then(Xf));
}
function $i(e) {
  _e(e)
    ? Ya.push(...e)
    : zn && e.id === -1
    ? zn.splice(Ha + 1, 0, e)
    : e.flags & 1 || (Ya.push(e), (e.flags |= 1)),
    qf();
}
function Wu(e, t, n = gn + 1) {
  for (; n < Tt.length; n++) {
    const a = Tt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Tt.splice(n, 1),
        n--,
        a.flags & 4 && (a.flags &= -2),
        a(),
        a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Jf(e) {
  if (Ya.length) {
    const t = [...new Set(Ya)].sort((n, a) => Or(n) - Or(a));
    if (((Ya.length = 0), zn)) {
      zn.push(...t);
      return;
    }
    for (zn = t, Ha = 0; Ha < zn.length; Ha++) {
      const n = zn[Ha];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (zn = null), (Ha = 0);
  }
}
const Or = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Xf(e) {
  try {
    for (gn = 0; gn < Tt.length; gn++) {
      const t = Tt[gn];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Xr(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; gn < Tt.length; gn++) {
      const t = Tt[gn];
      t && (t.flags &= -2);
    }
    (gn = -1),
      (Tt.length = 0),
      Jf(),
      (Ml = null),
      (Tt.length || Ya.length) && Xf();
  }
}
let ot = null,
  Zf = null;
function Bl(e) {
  const t = ot;
  return (ot = e), (Zf = (e && e.type.__scopeId) || null), t;
}
function ue(e, t = ot, n) {
  if (!t || e._n) return e;
  const a = (...r) => {
    a._d && lc(-1);
    const l = Bl(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bl(l), a._d && lc(1);
    }
    return o;
  };
  return (a._n = !0), (a._c = !0), (a._d = !0), a;
}
function ft(e, t) {
  if (ot === null) return e;
  const n = po(ot),
    a = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [l, o, i, s = Ue] = t[r];
    l &&
      (Ee(l) && (l = { mounted: l, updated: l }),
      l.deep && Tn(o),
      a.push({
        dir: l,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: i,
        modifiers: s,
      }));
  }
  return e;
}
function la(e, t, n, a) {
  const r = e.dirs,
    l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let s = i.dir[a];
    s && (ta(), on(s, n, 8, [e.el, i, e, t]), na());
  }
}
const Qf = Symbol("_vte"),
  ev = (e) => e.__isTeleport,
  _r = (e) => e && (e.disabled || e.disabled === ""),
  Gu = (e) => e && (e.defer || e.defer === ""),
  Ku = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Yu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Mi = (e, t) => {
    const n = e && e.to;
    return et(n) ? (t ? t(n) : null) : n;
  },
  tv = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, a, r, l, o, i, s, u) {
      const {
          mc: c,
          pc: d,
          pbc: f,
          o: { insert: v, querySelector: m, createText: h, createComment: y },
        } = u,
        p = _r(t.props);
      let { shapeFlag: w, children: x, dynamicChildren: E } = t;
      if (e == null) {
        const k = (t.el = h("")),
          V = (t.anchor = h(""));
        v(k, n, a), v(V, n, a);
        const A = (C, D) => {
            w & 16 &&
              (r && r.isCE && (r.ce._teleportTarget = C),
              c(x, C, D, r, l, o, i, s));
          },
          b = () => {
            const C = (t.target = Mi(t.props, m)),
              D = nv(C, t, h, v);
            C &&
              (o !== "svg" && Ku(C)
                ? (o = "svg")
                : o !== "mathml" && Yu(C) && (o = "mathml"),
              p || (A(C, D), El(t, !1)));
          };
        p && (A(n, V), El(t, !0)),
          Gu(t.props)
            ? kt(() => {
                b(), (t.el.__isMounted = !0);
              }, l)
            : b();
      } else {
        if (Gu(t.props) && !e.el.__isMounted) {
          kt(() => {
            tv.process(e, t, n, a, r, l, o, i, s, u), delete e.el.__isMounted;
          }, l);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const k = (t.anchor = e.anchor),
          V = (t.target = e.target),
          A = (t.targetAnchor = e.targetAnchor),
          b = _r(e.props),
          C = b ? n : V,
          D = b ? k : A;
        if (
          (o === "svg" || Ku(V)
            ? (o = "svg")
            : (o === "mathml" || Yu(V)) && (o = "mathml"),
          E
            ? (f(e.dynamicChildren, E, C, r, l, o, i), Ks(e, t, !0))
            : s || d(e, t, C, D, r, l, o, i, !1),
          p)
        )
          b
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : gl(t, n, k, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const P = (t.target = Mi(t.props, m));
          P && gl(t, P, null, u, 0);
        } else b && gl(t, V, A, u, 1);
        El(t, p);
      }
    },
    remove(e, t, n, { um: a, o: { remove: r } }, l) {
      const {
        shapeFlag: o,
        children: i,
        anchor: s,
        targetStart: u,
        targetAnchor: c,
        target: d,
        props: f,
      } = e;
      if ((d && (r(u), r(c)), l && r(s), o & 16)) {
        const v = l || !_r(f);
        for (let m = 0; m < i.length; m++) {
          const h = i[m];
          a(h, t, n, v, !!h.dynamicChildren);
        }
      }
    },
    move: gl,
    hydrate: Yy,
  };
function gl(e, t, n, { o: { insert: a }, m: r }, l = 2) {
  l === 0 && a(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: s, children: u, props: c } = e,
    d = l === 2;
  if ((d && a(o, t, n), (!d || _r(c)) && s & 16))
    for (let f = 0; f < u.length; f++) r(u[f], t, n, 2);
  d && a(i, t, n);
}
function Yy(
  e,
  t,
  n,
  a,
  r,
  l,
  {
    o: {
      nextSibling: o,
      parentNode: i,
      querySelector: s,
      insert: u,
      createText: c,
    },
  },
  d
) {
  const f = (t.target = Mi(t.props, s));
  if (f) {
    const v = _r(t.props),
      m = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (v)
        (t.anchor = d(o(e), t, i(e), n, a, r, l)),
          (t.targetStart = m),
          (t.targetAnchor = m && o(m));
      else {
        t.anchor = o(e);
        let h = m;
        for (; h; ) {
          if (h && h.nodeType === 8) {
            if (h.data === "teleport start anchor") t.targetStart = h;
            else if (h.data === "teleport anchor") {
              (t.targetAnchor = h),
                (f._lpa = t.targetAnchor && o(t.targetAnchor));
              break;
            }
          }
          h = o(h);
        }
        t.targetAnchor || nv(f, t, c, u), d(m && o(m), t, f, n, a, r, l);
      }
    El(t, v);
  }
  return t.anchor && o(t.anchor);
}
const qy = tv;
function El(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, r;
    for (
      t
        ? ((a = e.el), (r = e.anchor))
        : ((a = e.targetStart), (r = e.targetAnchor));
      a && a !== r;

    )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid),
        (a = a.nextSibling);
    n.ut();
  }
}
function nv(e, t, n, a) {
  const r = (t.targetStart = n("")),
    l = (t.targetAnchor = n(""));
  return (r[Qf] = l), e && (a(r, e), a(l, e)), l;
}
const Un = Symbol("_leaveCb"),
  yl = Symbol("_enterCb");
function av() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Wt(() => {
      e.isMounted = !0;
    }),
    rt(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const qt = [Function, Array],
  rv = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: qt,
    onEnter: qt,
    onAfterEnter: qt,
    onEnterCancelled: qt,
    onBeforeLeave: qt,
    onLeave: qt,
    onAfterLeave: qt,
    onLeaveCancelled: qt,
    onBeforeAppear: qt,
    onAppear: qt,
    onAfterAppear: qt,
    onAppearCancelled: qt,
  },
  lv = (e) => {
    const t = e.subTree;
    return t.component ? lv(t.component) : t;
  },
  Jy = {
    name: "BaseTransition",
    props: rv,
    setup(e, { slots: t }) {
      const n = bo(),
        a = av();
      return () => {
        const r = t.default && Fs(t.default(), !0);
        if (!r || !r.length) return;
        const l = ov(r),
          o = xe(e),
          { mode: i } = o;
        if (a.isLeaving) return Zo(l);
        const s = qu(l);
        if (!s) return Zo(l);
        let u = $r(s, o, a, n, (d) => (u = d));
        s.type !== st && pa(s, u);
        let c = n.subTree && qu(n.subTree);
        if (c && c.type !== st && !bn(s, c) && lv(n).type !== st) {
          let d = $r(c, o, a, n);
          if ((pa(c, d), i === "out-in" && s.type !== st))
            return (
              (a.isLeaving = !0),
              (d.afterLeave = () => {
                (a.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave,
                  (c = void 0);
              }),
              Zo(l)
            );
          i === "in-out" && s.type !== st
            ? (d.delayLeave = (f, v, m) => {
                const h = iv(a, c);
                (h[String(c.key)] = c),
                  (f[Un] = () => {
                    v(), (f[Un] = void 0), delete u.delayedLeave, (c = void 0);
                  }),
                  (u.delayedLeave = () => {
                    m(), delete u.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return l;
      };
    },
  };
function ov(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== st) {
        t = n;
        break;
      }
  }
  return t;
}
const Xy = Jy;
function iv(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || ((a = Object.create(null)), n.set(t.type, a)), a;
}
function $r(e, t, n, a, r) {
  const {
      appear: l,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: s,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: d,
      onBeforeLeave: f,
      onLeave: v,
      onAfterLeave: m,
      onLeaveCancelled: h,
      onBeforeAppear: y,
      onAppear: p,
      onAfterAppear: w,
      onAppearCancelled: x,
    } = t,
    E = String(e.key),
    k = iv(n, e),
    V = (C, D) => {
      C && on(C, a, 9, D);
    },
    A = (C, D) => {
      const P = D[1];
      V(C, D),
        _e(C) ? C.every((I) => I.length <= 1) && P() : C.length <= 1 && P();
    },
    b = {
      mode: o,
      persisted: i,
      beforeEnter(C) {
        let D = s;
        if (!n.isMounted)
          if (l) D = y || s;
          else return;
        C[Un] && C[Un](!0);
        const P = k[E];
        P && bn(e, P) && P.el[Un] && P.el[Un](), V(D, [C]);
      },
      enter(C) {
        let D = u,
          P = c,
          I = d;
        if (!n.isMounted)
          if (l) (D = p || u), (P = w || c), (I = x || d);
          else return;
        let $ = !1;
        const M = (C[yl] = (N) => {
          $ ||
            (($ = !0),
            N ? V(I, [C]) : V(P, [C]),
            b.delayedLeave && b.delayedLeave(),
            (C[yl] = void 0));
        });
        D ? A(D, [C, M]) : M();
      },
      leave(C, D) {
        const P = String(e.key);
        if ((C[yl] && C[yl](!0), n.isUnmounting)) return D();
        V(f, [C]);
        let I = !1;
        const $ = (C[Un] = (M) => {
          I ||
            ((I = !0),
            D(),
            M ? V(h, [C]) : V(m, [C]),
            (C[Un] = void 0),
            k[P] === e && delete k[P]);
        });
        (k[P] = e), v ? A(v, [C, $]) : $();
      },
      clone(C) {
        const D = $r(C, t, n, a, r);
        return r && r(D), D;
      },
    };
  return b;
}
function Zo(e) {
  if (mo(e)) return (e = Dn(e)), (e.children = null), e;
}
function qu(e) {
  if (!mo(e)) return ev(e.type) && e.children ? ov(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ee(n.default)) return n.default();
  }
}
function pa(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), pa(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Fs(e, t = !1, n) {
  let a = [],
    r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === ye
      ? (o.patchFlag & 128 && r++, (a = a.concat(Fs(o.children, t, i))))
      : (t || o.type !== st) && a.push(i != null ? Dn(o, { key: i }) : o);
  }
  if (r > 1) for (let l = 0; l < a.length; l++) a[l].patchFlag = -2;
  return a;
}
/*! #__NO_SIDE_EFFECTS__ */ function at(e, t) {
  return Ee(e) ? nt({ name: e.name }, t, { setup: e }) : e;
}
function sv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ll(e, t, n, a, r = !1) {
  if (_e(e)) {
    e.forEach((m, h) => Ll(m, t && (_e(t) ? t[h] : t), n, a, r));
    return;
  }
  if (qa(a) && !r) {
    a.shapeFlag & 512 &&
      a.type.__asyncResolved &&
      a.component.subTree.component &&
      Ll(e, t, n, a.component.subTree);
    return;
  }
  const l = a.shapeFlag & 4 ? po(a.component) : a.el,
    o = r ? null : l,
    { i, r: s } = e,
    u = t && t.r,
    c = i.refs === Ue ? (i.refs = {}) : i.refs,
    d = i.setupState,
    f = xe(d),
    v = d === Ue ? () => !1 : (m) => Re(f, m);
  if (
    (u != null &&
      u !== s &&
      (et(u)
        ? ((c[u] = null), v(u) && (d[u] = null))
        : Be(u) && (u.value = null)),
    Ee(s))
  )
    Xr(s, i, 12, [o, c]);
  else {
    const m = et(s),
      h = Be(s);
    if (m || h) {
      const y = () => {
        if (e.f) {
          const p = m ? (v(s) ? d[s] : c[s]) : s.value;
          r
            ? _e(p) && Ts(p, l)
            : _e(p)
            ? p.includes(l) || p.push(l)
            : m
            ? ((c[s] = [l]), v(s) && (d[s] = c[s]))
            : ((s.value = [l]), e.k && (c[e.k] = s.value));
        } else
          m
            ? ((c[s] = o), v(s) && (d[s] = o))
            : h && ((s.value = o), e.k && (c[e.k] = o));
      };
      o ? ((y.id = -1), kt(y, n)) : y();
    }
  }
}
uo().requestIdleCallback;
uo().cancelIdleCallback;
const qa = (e) => !!e.type.__asyncLoader,
  mo = (e) => e.type.__isKeepAlive;
function Ns(e, t) {
  uv(e, "a", t);
}
function ho(e, t) {
  uv(e, "da", t);
}
function uv(e, t, n = ut) {
  const a =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((go(t, a, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      mo(r.parent.vnode) && Zy(a, t, n, r), (r = r.parent);
  }
}
function Zy(e, t, n, a) {
  const r = go(t, e, a, !0);
  js(() => {
    Ts(a[t], r);
  }, n);
}
function go(e, t, n = ut, a = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...o) => {
          ta();
          const i = wa(n),
            s = on(t, n, e, o);
          return i(), na(), s;
        });
    return a ? r.unshift(l) : r.push(l), l;
  }
}
const Bn =
    (e) =>
    (t, n = ut) => {
      (!Br || e === "sp") && go(e, (...a) => t(...a), n);
    },
  Qr = Bn("bm"),
  Wt = Bn("m"),
  cv = Bn("bu"),
  Hs = Bn("u"),
  rt = Bn("bum"),
  js = Bn("um"),
  Qy = Bn("sp"),
  eb = Bn("rtg"),
  tb = Bn("rtc");
function nb(e, t = ut) {
  go("ec", e, t);
}
const zs = "components",
  ab = "directives";
function dv(e, t) {
  return Us(zs, e, !0, t) || e;
}
const fv = Symbol.for("v-ndc");
function el(e) {
  return et(e) ? Us(zs, e, !1) || e : e || fv;
}
function Ln(e) {
  return Us(ab, e);
}
function Us(e, t, n = !0, a = !1) {
  const r = ot || ut;
  if (r) {
    const l = r.type;
    if (e === zs) {
      const i = Yb(l, !1);
      if (i && (i === t || i === Rt(t) || i === Pa(Rt(t)))) return l;
    }
    const o = Ju(r[e] || l[e], t) || Ju(r.appContext[e], t);
    return !o && a ? l : o;
  }
}
function Ju(e, t) {
  return e && (e[t] || e[Rt(t)] || e[Pa(Rt(t))]);
}
function Vn(e, t, n, a) {
  let r;
  const l = n,
    o = _e(e);
  if (o || et(e)) {
    const i = o && Yn(e);
    let s = !1;
    i && ((s = !Jt(e)), (e = fo(e))), (r = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(s ? pt(e[u]) : e[u], u, void 0, l);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, l);
  } else if (Je(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, s) => t(i, s, void 0, l));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let s = 0, u = i.length; s < u; s++) {
        const c = i[s];
        r[s] = t(e[c], c, s, l);
      }
    }
  else r = [];
  return r;
}
function tl(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (_e(a)) for (let r = 0; r < a.length; r++) e[a[r].name] = a[r].fn;
    else
      a &&
        (e[a.name] = a.key
          ? (...r) => {
              const l = a.fn(...r);
              return l && (l.key = a.key), l;
            }
          : a.fn);
  }
  return e;
}
function yn(e, t, n = {}, a, r) {
  if (ot.ce || (ot.parent && qa(ot.parent) && ot.parent.ce))
    return (
      t !== "default" && (n.name = t),
      ge(),
      Te(ye, null, [g("slot", n, a && a())], 64)
    );
  let l = e[t];
  l && l._c && (l._d = !1), ge();
  const o = l && vv(l(n)),
    i = n.key || (o && o.key),
    s = Te(
      ye,
      { key: (i && !Mn(i) ? i : `_${t}`) + (!o && a ? "_fb" : "") },
      o || (a ? a() : []),
      o && e._ === 1 ? 64 : -2
    );
  return (
    !r && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]),
    l && l._c && (l._d = !0),
    s
  );
}
function vv(e) {
  return e.some((t) =>
    Sa(t) ? !(t.type === st || (t.type === ye && !vv(t.children))) : !0
  )
    ? e
    : null;
}
const Bi = (e) => (e ? (Ov(e) ? po(e) : Bi(e.parent)) : null),
  kr = nt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Bi(e.parent),
    $root: (e) => Bi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Rs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ze.bind(e.proxy)),
    $watch: (e) => kb.bind(e),
  }),
  Qo = (e, t) => e !== Ue && !e.__isScriptSetup && Re(e, t),
  rb = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: a,
        data: r,
        props: l,
        accessCache: o,
        type: i,
        appContext: s,
      } = e;
      let u;
      if (t[0] !== "$") {
        const v = o[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return a[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return l[t];
          }
        else {
          if (Qo(a, t)) return (o[t] = 1), a[t];
          if (r !== Ue && Re(r, t)) return (o[t] = 2), r[t];
          if ((u = e.propsOptions[0]) && Re(u, t)) return (o[t] = 3), l[t];
          if (n !== Ue && Re(n, t)) return (o[t] = 4), n[t];
          Li && (o[t] = 0);
        }
      }
      const c = kr[t];
      let d, f;
      if (c) return t === "$attrs" && bt(e.attrs, "get", ""), c(e);
      if ((d = i.__cssModules) && (d = d[t])) return d;
      if (n !== Ue && Re(n, t)) return (o[t] = 4), n[t];
      if (((f = s.config.globalProperties), Re(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: a, setupState: r, ctx: l } = e;
      return Qo(r, t)
        ? ((r[t] = n), !0)
        : a !== Ue && Re(a, t)
        ? ((a[t] = n), !0)
        : Re(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((l[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: a,
          appContext: r,
          propsOptions: l,
        },
      },
      o
    ) {
      let i;
      return (
        !!n[o] ||
        (e !== Ue && Re(e, o)) ||
        Qo(t, o) ||
        ((i = l[0]) && Re(i, o)) ||
        Re(a, o) ||
        Re(kr, o) ||
        Re(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Xu(e) {
  return _e(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function bP(e) {
  const t = bo();
  let n = e();
  return (
    ji(),
    As(n) &&
      (n = n.catch((a) => {
        throw (wa(t), a);
      })),
    [n, () => wa(t)]
  );
}
let Li = !0;
function lb(e) {
  const t = Ws(e),
    n = e.proxy,
    a = e.ctx;
  (Li = !1), t.beforeCreate && Zu(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: l,
    methods: o,
    watch: i,
    provide: s,
    inject: u,
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: v,
    updated: m,
    activated: h,
    deactivated: y,
    beforeDestroy: p,
    beforeUnmount: w,
    destroyed: x,
    unmounted: E,
    render: k,
    renderTracked: V,
    renderTriggered: A,
    errorCaptured: b,
    serverPrefetch: C,
    expose: D,
    inheritAttrs: P,
    components: I,
    directives: $,
    filters: M,
  } = t;
  if ((u && ob(u, a, null), o))
    for (const j in o) {
      const H = o[j];
      Ee(H) && (a[j] = H.bind(n));
    }
  if (r) {
    const j = r.call(n, n);
    Je(j) && (e.data = lt(j));
  }
  if (((Li = !0), l))
    for (const j in l) {
      const H = l[j],
        z = Ee(H) ? H.bind(n, n) : Ee(H.get) ? H.get.bind(n, n) : wn,
        O = !Ee(H) && Ee(H.set) ? H.set.bind(n) : wn,
        L = S({ get: z, set: O });
      Object.defineProperty(a, j, {
        enumerable: !0,
        configurable: !0,
        get: () => L.value,
        set: (G) => (L.value = G),
      });
    }
  if (i) for (const j in i) mv(i[j], a, n, j);
  if (s) {
    const j = Ee(s) ? s.call(n) : s;
    Reflect.ownKeys(j).forEach((H) => {
      We(H, j[H]);
    });
  }
  c && Zu(c, e, "c");
  function B(j, H) {
    _e(H) ? H.forEach((z) => j(z.bind(n))) : H && j(H.bind(n));
  }
  if (
    (B(Qr, d),
    B(Wt, f),
    B(cv, v),
    B(Hs, m),
    B(Ns, h),
    B(ho, y),
    B(nb, b),
    B(tb, V),
    B(eb, A),
    B(rt, w),
    B(js, E),
    B(Qy, C),
    _e(D))
  )
    if (D.length) {
      const j = e.exposed || (e.exposed = {});
      D.forEach((H) => {
        Object.defineProperty(j, H, {
          get: () => n[H],
          set: (z) => (n[H] = z),
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === wn && (e.render = k),
    P != null && (e.inheritAttrs = P),
    I && (e.components = I),
    $ && (e.directives = $),
    C && sv(e);
}
function ob(e, t, n = wn) {
  _e(e) && (e = Ri(e));
  for (const a in e) {
    const r = e[a];
    let l;
    Je(r)
      ? "default" in r
        ? (l = Ie(r.from || a, r.default, !0))
        : (l = Ie(r.from || a))
      : (l = Ie(r)),
      Be(l)
        ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (o) => (l.value = o),
          })
        : (t[a] = l);
  }
}
function Zu(e, t, n) {
  on(_e(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function mv(e, t, n, a) {
  let r = a.includes(".") ? Ev(n, a) : () => n[a];
  if (et(e)) {
    const l = t[e];
    Ee(l) && ce(r, l);
  } else if (Ee(e)) ce(r, e.bind(n));
  else if (Je(e))
    if (_e(e)) e.forEach((l) => mv(l, t, n, a));
    else {
      const l = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(l) && ce(r, l, e);
    }
}
function Ws(e) {
  const t = e.type,
    { mixins: n, extends: a } = t,
    {
      mixins: r,
      optionsCache: l,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    i = l.get(t);
  let s;
  return (
    i
      ? (s = i)
      : !r.length && !n && !a
      ? (s = t)
      : ((s = {}), r.length && r.forEach((u) => Rl(s, u, o, !0)), Rl(s, t, o)),
    Je(t) && l.set(t, s),
    s
  );
}
function Rl(e, t, n, a = !1) {
  const { mixins: r, extends: l } = t;
  l && Rl(e, l, n, !0), r && r.forEach((o) => Rl(e, o, n, !0));
  for (const o in t)
    if (!(a && o === "expose")) {
      const i = ib[o] || (n && n[o]);
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ib = {
  data: Qu,
  props: ec,
  emits: ec,
  methods: Sr,
  computed: Sr,
  beforeCreate: _t,
  created: _t,
  beforeMount: _t,
  mounted: _t,
  beforeUpdate: _t,
  updated: _t,
  beforeDestroy: _t,
  beforeUnmount: _t,
  destroyed: _t,
  unmounted: _t,
  activated: _t,
  deactivated: _t,
  errorCaptured: _t,
  serverPrefetch: _t,
  components: Sr,
  directives: Sr,
  watch: ub,
  provide: Qu,
  inject: sb,
};
function Qu(e, t) {
  return t
    ? e
      ? function () {
          return nt(
            Ee(e) ? e.call(this, this) : e,
            Ee(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function sb(e, t) {
  return Sr(Ri(e), Ri(t));
}
function Ri(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
  return e ? nt(Object.create(null), e, t) : t;
}
function ec(e, t) {
  return e
    ? _e(e) && _e(t)
      ? [...new Set([...e, ...t])]
      : nt(Object.create(null), Xu(e), Xu(t ?? {}))
    : t;
}
function ub(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = nt(Object.create(null), e);
  for (const a in t) n[a] = _t(e[a], t[a]);
  return n;
}
function hv() {
  return {
    app: null,
    config: {
      isNativeTag: sy,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let cb = 0;
function db(e, t) {
  return function (a, r = null) {
    Ee(a) || (a = nt({}, a)), r != null && !Je(r) && (r = null);
    const l = hv(),
      o = new WeakSet(),
      i = [];
    let s = !1;
    const u = (l.app = {
      _uid: cb++,
      _component: a,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Jb,
      get config() {
        return l.config;
      },
      set config(c) {},
      use(c, ...d) {
        return (
          o.has(c) ||
            (c && Ee(c.install)
              ? (o.add(c), c.install(u, ...d))
              : Ee(c) && (o.add(c), c(u, ...d))),
          u
        );
      },
      mixin(c) {
        return l.mixins.includes(c) || l.mixins.push(c), u;
      },
      component(c, d) {
        return d ? ((l.components[c] = d), u) : l.components[c];
      },
      directive(c, d) {
        return d ? ((l.directives[c] = d), u) : l.directives[c];
      },
      mount(c, d, f) {
        if (!s) {
          const v = u._ceVNode || g(a, r);
          return (
            (v.appContext = l),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            d && t ? t(v, c) : e(v, c, f),
            (s = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            po(v.component)
          );
        }
      },
      onUnmount(c) {
        i.push(c);
      },
      unmount() {
        s &&
          (on(i, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, d) {
        return (l.provides[c] = d), u;
      },
      runWithContext(c) {
        const d = ma;
        ma = u;
        try {
          return c();
        } finally {
          ma = d;
        }
      },
    });
    return u;
  };
}
let ma = null;
function We(e, t) {
  if (ut) {
    let n = ut.provides;
    const a = ut.parent && ut.parent.provides;
    a === n && (n = ut.provides = Object.create(a)), (n[e] = t);
  }
}
function Ie(e, t, n = !1) {
  const a = ut || ot;
  if (a || ma) {
    const r = ma
      ? ma._context.provides
      : a
      ? a.parent == null
        ? a.vnode.appContext && a.vnode.appContext.provides
        : a.parent.provides
      : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && Ee(t) ? t.call(a && a.proxy) : t;
  }
}
function fb() {
  return !!(ut || ot || ma);
}
const gv = {},
  yv = () => Object.create(gv),
  bv = (e) => Object.getPrototypeOf(e) === gv;
function vb(e, t, n, a = !1) {
  const r = {},
    l = yv();
  (e.propsDefaults = Object.create(null)), pv(e, t, r, l);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = a ? r : Uf(r)) : e.type.props ? (e.props = r) : (e.props = l),
    (e.attrs = l);
}
function mb(e, t, n, a) {
  const {
      props: r,
      attrs: l,
      vnode: { patchFlag: o },
    } = e,
    i = xe(r),
    [s] = e.propsOptions;
  let u = !1;
  if ((a || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (yo(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s)
          if (Re(l, f)) v !== l[f] && ((l[f] = v), (u = !0));
          else {
            const m = Rt(f);
            r[m] = Fi(s, i, m, v, e, !1);
          }
        else v !== l[f] && ((l[f] = v), (u = !0));
      }
    }
  } else {
    pv(e, t, r, l) && (u = !0);
    let c;
    for (const d in i)
      (!t || (!Re(t, d) && ((c = Ea(d)) === d || !Re(t, c)))) &&
        (s
          ? n &&
            (n[d] !== void 0 || n[c] !== void 0) &&
            (r[d] = Fi(s, i, d, void 0, e, !0))
          : delete r[d]);
    if (l !== i)
      for (const d in l) (!t || !Re(t, d)) && (delete l[d], (u = !0));
  }
  u && Pn(e.attrs, "set", "");
}
function pv(e, t, n, a) {
  const [r, l] = e.propsOptions;
  let o = !1,
    i;
  if (t)
    for (let s in t) {
      if (wr(s)) continue;
      const u = t[s];
      let c;
      r && Re(r, (c = Rt(s)))
        ? !l || !l.includes(c)
          ? (n[c] = u)
          : ((i || (i = {}))[c] = u)
        : yo(e.emitsOptions, s) ||
          ((!(s in a) || u !== a[s]) && ((a[s] = u), (o = !0)));
    }
  if (l) {
    const s = xe(n),
      u = i || Ue;
    for (let c = 0; c < l.length; c++) {
      const d = l[c];
      n[d] = Fi(r, s, d, u[d], e, !Re(u, d));
    }
  }
  return o;
}
function Fi(e, t, n, a, r, l) {
  const o = e[n];
  if (o != null) {
    const i = Re(o, "default");
    if (i && a === void 0) {
      const s = o.default;
      if (o.type !== Function && !o.skipFactory && Ee(s)) {
        const { propsDefaults: u } = r;
        if (n in u) a = u[n];
        else {
          const c = wa(r);
          (a = u[n] = s.call(null, t)), c();
        }
      } else a = s;
      r.ce && r.ce._setProp(n, a);
    }
    o[0] &&
      (l && !i ? (a = !1) : o[1] && (a === "" || a === Ea(n)) && (a = !0));
  }
  return a;
}
const hb = new WeakMap();
function Sv(e, t, n = !1) {
  const a = n ? hb : t.propsCache,
    r = a.get(e);
  if (r) return r;
  const l = e.props,
    o = {},
    i = [];
  let s = !1;
  if (!Ee(e)) {
    const c = (d) => {
      s = !0;
      const [f, v] = Sv(d, t, !0);
      nt(o, f), v && i.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!l && !s) return Je(e) && a.set(e, Ga), Ga;
  if (_e(l))
    for (let c = 0; c < l.length; c++) {
      const d = Rt(l[c]);
      tc(d) && (o[d] = Ue);
    }
  else if (l)
    for (const c in l) {
      const d = Rt(c);
      if (tc(d)) {
        const f = l[c],
          v = (o[d] = _e(f) || Ee(f) ? { type: f } : nt({}, f)),
          m = v.type;
        let h = !1,
          y = !0;
        if (_e(m))
          for (let p = 0; p < m.length; ++p) {
            const w = m[p],
              x = Ee(w) && w.name;
            if (x === "Boolean") {
              h = !0;
              break;
            } else x === "String" && (y = !1);
          }
        else h = Ee(m) && m.name === "Boolean";
        (v[0] = h), (v[1] = y), (h || Re(v, "default")) && i.push(d);
      }
    }
  const u = [o, i];
  return Je(e) && a.set(e, u), u;
}
function tc(e) {
  return e[0] !== "$" && !wr(e);
}
const wv = (e) => e[0] === "_" || e === "$stable",
  Gs = (e) => (_e(e) ? e.map(rn) : [rn(e)]),
  gb = (e, t, n) => {
    if (t._n) return t;
    const a = ue((...r) => Gs(t(...r)), n);
    return (a._c = !1), a;
  },
  Cv = (e, t, n) => {
    const a = e._ctx;
    for (const r in e) {
      if (wv(r)) continue;
      const l = e[r];
      if (Ee(l)) t[r] = gb(r, l, a);
      else if (l != null) {
        const o = Gs(l);
        t[r] = () => o;
      }
    }
  },
  xv = (e, t) => {
    const n = Gs(t);
    e.slots.default = () => n;
  },
  _v = (e, t, n) => {
    for (const a in t) (n || a !== "_") && (e[a] = t[a]);
  },
  yb = (e, t, n) => {
    const a = (e.slots = yv());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (_v(a, t, n), n && xf(a, "_", r, !0)) : Cv(t, a);
    } else t && xv(e, t);
  },
  bb = (e, t, n) => {
    const { vnode: a, slots: r } = e;
    let l = !0,
      o = Ue;
    if (a.shapeFlag & 32) {
      const i = t._;
      i
        ? n && i === 1
          ? (l = !1)
          : _v(r, t, n)
        : ((l = !t.$stable), Cv(t, r)),
        (o = t);
    } else t && (xv(e, t), (o = { default: 1 }));
    if (l) for (const i in r) !wv(i) && o[i] == null && delete r[i];
  },
  kt = Lb;
function pb(e) {
  return Sb(e);
}
function Sb(e, t) {
  const n = uo();
  n.__VUE__ = !0;
  const {
      insert: a,
      remove: r,
      patchProp: l,
      createElement: o,
      createText: i,
      createComment: s,
      setText: u,
      setElementText: c,
      parentNode: d,
      nextSibling: f,
      setScopeId: v = wn,
      insertStaticContent: m,
    } = e,
    h = (
      _,
      T,
      R,
      q = null,
      U = null,
      J = null,
      de = void 0,
      ae = null,
      ie = !!T.dynamicChildren
    ) => {
      if (_ === T) return;
      _ && !bn(_, T) && ((q = F(_)), G(_, U, J, !0), (_ = null)),
        T.patchFlag === -2 && ((ie = !1), (T.dynamicChildren = null));
      const { type: te, ref: Ce, shapeFlag: me } = T;
      switch (te) {
        case nl:
          y(_, T, R, q);
          break;
        case st:
          p(_, T, R, q);
          break;
        case ni:
          _ == null && w(T, R, q, de);
          break;
        case ye:
          I(_, T, R, q, U, J, de, ae, ie);
          break;
        default:
          me & 1
            ? k(_, T, R, q, U, J, de, ae, ie)
            : me & 6
            ? $(_, T, R, q, U, J, de, ae, ie)
            : (me & 64 || me & 128) &&
              te.process(_, T, R, q, U, J, de, ae, ie, Q);
      }
      Ce != null && U && Ll(Ce, _ && _.ref, J, T || _, !T);
    },
    y = (_, T, R, q) => {
      if (_ == null) a((T.el = i(T.children)), R, q);
      else {
        const U = (T.el = _.el);
        T.children !== _.children && u(U, T.children);
      }
    },
    p = (_, T, R, q) => {
      _ == null ? a((T.el = s(T.children || "")), R, q) : (T.el = _.el);
    },
    w = (_, T, R, q) => {
      [_.el, _.anchor] = m(_.children, T, R, q, _.el, _.anchor);
    },
    x = ({ el: _, anchor: T }, R, q) => {
      let U;
      for (; _ && _ !== T; ) (U = f(_)), a(_, R, q), (_ = U);
      a(T, R, q);
    },
    E = ({ el: _, anchor: T }) => {
      let R;
      for (; _ && _ !== T; ) (R = f(_)), r(_), (_ = R);
      r(T);
    },
    k = (_, T, R, q, U, J, de, ae, ie) => {
      T.type === "svg" ? (de = "svg") : T.type === "math" && (de = "mathml"),
        _ == null ? V(T, R, q, U, J, de, ae, ie) : C(_, T, U, J, de, ae, ie);
    },
    V = (_, T, R, q, U, J, de, ae) => {
      let ie, te;
      const { props: Ce, shapeFlag: me, transition: we, dirs: Pe } = _;
      if (
        ((ie = _.el = o(_.type, J, Ce && Ce.is, Ce)),
        me & 8
          ? c(ie, _.children)
          : me & 16 && b(_.children, ie, null, q, U, ei(_, J), de, ae),
        Pe && la(_, null, q, "created"),
        A(ie, _, _.scopeId, de, q),
        Ce)
      ) {
        for (const Ke in Ce)
          Ke !== "value" && !wr(Ke) && l(ie, Ke, null, Ce[Ke], J, q);
        "value" in Ce && l(ie, "value", null, Ce.value, J),
          (te = Ce.onVnodeBeforeMount) && mn(te, q, _);
      }
      Pe && la(_, null, q, "beforeMount");
      const Oe = wb(U, we);
      Oe && we.beforeEnter(ie),
        a(ie, T, R),
        ((te = Ce && Ce.onVnodeMounted) || Oe || Pe) &&
          kt(() => {
            te && mn(te, q, _),
              Oe && we.enter(ie),
              Pe && la(_, null, q, "mounted");
          }, U);
    },
    A = (_, T, R, q, U) => {
      if ((R && v(_, R), q)) for (let J = 0; J < q.length; J++) v(_, q[J]);
      if (U) {
        let J = U.subTree;
        if (
          T === J ||
          (Tv(J.type) && (J.ssContent === T || J.ssFallback === T))
        ) {
          const de = U.vnode;
          A(_, de, de.scopeId, de.slotScopeIds, U.parent);
        }
      }
    },
    b = (_, T, R, q, U, J, de, ae, ie = 0) => {
      for (let te = ie; te < _.length; te++) {
        const Ce = (_[te] = ae ? Wn(_[te]) : rn(_[te]));
        h(null, Ce, T, R, q, U, J, de, ae);
      }
    },
    C = (_, T, R, q, U, J, de) => {
      const ae = (T.el = _.el);
      let { patchFlag: ie, dynamicChildren: te, dirs: Ce } = T;
      ie |= _.patchFlag & 16;
      const me = _.props || Ue,
        we = T.props || Ue;
      let Pe;
      if (
        (R && oa(R, !1),
        (Pe = we.onVnodeBeforeUpdate) && mn(Pe, R, T, _),
        Ce && la(T, _, R, "beforeUpdate"),
        R && oa(R, !0),
        ((me.innerHTML && we.innerHTML == null) ||
          (me.textContent && we.textContent == null)) &&
          c(ae, ""),
        te
          ? D(_.dynamicChildren, te, ae, R, q, ei(T, U), J)
          : de || H(_, T, ae, null, R, q, ei(T, U), J, !1),
        ie > 0)
      ) {
        if (ie & 16) P(ae, me, we, R, U);
        else if (
          (ie & 2 && me.class !== we.class && l(ae, "class", null, we.class, U),
          ie & 4 && l(ae, "style", me.style, we.style, U),
          ie & 8)
        ) {
          const Oe = T.dynamicProps;
          for (let Ke = 0; Ke < Oe.length; Ke++) {
            const Fe = Oe[Ke],
              Ht = me[Fe],
              gt = we[Fe];
            (gt !== Ht || Fe === "value") && l(ae, Fe, Ht, gt, U, R);
          }
        }
        ie & 1 && _.children !== T.children && c(ae, T.children);
      } else !de && te == null && P(ae, me, we, R, U);
      ((Pe = we.onVnodeUpdated) || Ce) &&
        kt(() => {
          Pe && mn(Pe, R, T, _), Ce && la(T, _, R, "updated");
        }, q);
    },
    D = (_, T, R, q, U, J, de) => {
      for (let ae = 0; ae < T.length; ae++) {
        const ie = _[ae],
          te = T[ae],
          Ce =
            ie.el && (ie.type === ye || !bn(ie, te) || ie.shapeFlag & 70)
              ? d(ie.el)
              : R;
        h(ie, te, Ce, null, q, U, J, de, !0);
      }
    },
    P = (_, T, R, q, U) => {
      if (T !== R) {
        if (T !== Ue)
          for (const J in T) !wr(J) && !(J in R) && l(_, J, T[J], null, U, q);
        for (const J in R) {
          if (wr(J)) continue;
          const de = R[J],
            ae = T[J];
          de !== ae && J !== "value" && l(_, J, ae, de, U, q);
        }
        "value" in R && l(_, "value", T.value, R.value, U);
      }
    },
    I = (_, T, R, q, U, J, de, ae, ie) => {
      const te = (T.el = _ ? _.el : i("")),
        Ce = (T.anchor = _ ? _.anchor : i(""));
      let { patchFlag: me, dynamicChildren: we, slotScopeIds: Pe } = T;
      Pe && (ae = ae ? ae.concat(Pe) : Pe),
        _ == null
          ? (a(te, R, q),
            a(Ce, R, q),
            b(T.children || [], R, Ce, U, J, de, ae, ie))
          : me > 0 && me & 64 && we && _.dynamicChildren
          ? (D(_.dynamicChildren, we, R, U, J, de, ae),
            (T.key != null || (U && T === U.subTree)) && Ks(_, T, !0))
          : H(_, T, R, Ce, U, J, de, ae, ie);
    },
    $ = (_, T, R, q, U, J, de, ae, ie) => {
      (T.slotScopeIds = ae),
        _ == null
          ? T.shapeFlag & 512
            ? U.ctx.activate(T, R, q, de, ie)
            : M(T, R, q, U, J, de, ie)
          : N(_, T, ie);
    },
    M = (_, T, R, q, U, J, de) => {
      const ae = (_.component = zb(_, q, U));
      if ((mo(_) && (ae.ctx.renderer = Q), Ub(ae, !1, de), ae.asyncDep)) {
        if ((U && U.registerDep(ae, B, de), !_.el)) {
          const ie = (ae.subTree = g(st));
          p(null, ie, T, R);
        }
      } else B(ae, _, T, R, U, J, de);
    },
    N = (_, T, R) => {
      const q = (T.component = _.component);
      if (Vb(_, T, R))
        if (q.asyncDep && !q.asyncResolved) {
          j(q, T, R);
          return;
        } else (q.next = T), q.update();
      else (T.el = _.el), (q.vnode = T);
    },
    B = (_, T, R, q, U, J, de) => {
      const ae = () => {
        if (_.isMounted) {
          let { next: me, bu: we, u: Pe, parent: Oe, vnode: Ke } = _;
          {
            const jt = kv(_);
            if (jt) {
              me && ((me.el = Ke.el), j(_, me, de)),
                jt.asyncDep.then(() => {
                  _.isUnmounted || ae();
                });
              return;
            }
          }
          let Fe = me,
            Ht;
          oa(_, !1),
            me ? ((me.el = Ke.el), j(_, me, de)) : (me = Ke),
            we && kl(we),
            (Ht = me.props && me.props.onVnodeBeforeUpdate) &&
              mn(Ht, Oe, me, Ke),
            oa(_, !0);
          const gt = ti(_),
            an = _.subTree;
          (_.subTree = gt),
            h(an, gt, d(an.el), F(an), _, U, J),
            (me.el = gt.el),
            Fe === null && qs(_, gt.el),
            Pe && kt(Pe, U),
            (Ht = me.props && me.props.onVnodeUpdated) &&
              kt(() => mn(Ht, Oe, me, Ke), U);
        } else {
          let me;
          const { el: we, props: Pe } = T,
            { bm: Oe, m: Ke, parent: Fe, root: Ht, type: gt } = _,
            an = qa(T);
          if (
            (oa(_, !1),
            Oe && kl(Oe),
            !an && (me = Pe && Pe.onVnodeBeforeMount) && mn(me, Fe, T),
            oa(_, !0),
            we && se)
          ) {
            const jt = () => {
              (_.subTree = ti(_)), se(we, _.subTree, _, U, null);
            };
            an && gt.__asyncHydrate ? gt.__asyncHydrate(we, _, jt) : jt();
          } else {
            Ht.ce && Ht.ce._injectChildStyle(gt);
            const jt = (_.subTree = ti(_));
            h(null, jt, R, q, _, U, J), (T.el = jt.el);
          }
          if ((Ke && kt(Ke, U), !an && (me = Pe && Pe.onVnodeMounted))) {
            const jt = T;
            kt(() => mn(me, Fe, jt), U);
          }
          (T.shapeFlag & 256 ||
            (Fe && qa(Fe.vnode) && Fe.vnode.shapeFlag & 256)) &&
            _.a &&
            kt(_.a, U),
            (_.isMounted = !0),
            (T = R = q = null);
        }
      };
      _.scope.on();
      const ie = (_.effect = new If(ae));
      _.scope.off();
      const te = (_.update = ie.run.bind(ie)),
        Ce = (_.job = ie.runIfDirty.bind(ie));
      (Ce.i = _),
        (Ce.id = _.uid),
        (ie.scheduler = () => Rs(Ce)),
        oa(_, !0),
        te();
    },
    j = (_, T, R) => {
      T.component = _;
      const q = _.vnode.props;
      (_.vnode = T),
        (_.next = null),
        mb(_, T.props, q, R),
        bb(_, T.children, R),
        ta(),
        Wu(_),
        na();
    },
    H = (_, T, R, q, U, J, de, ae, ie = !1) => {
      const te = _ && _.children,
        Ce = _ ? _.shapeFlag : 0,
        me = T.children,
        { patchFlag: we, shapeFlag: Pe } = T;
      if (we > 0) {
        if (we & 128) {
          O(te, me, R, q, U, J, de, ae, ie);
          return;
        } else if (we & 256) {
          z(te, me, R, q, U, J, de, ae, ie);
          return;
        }
      }
      Pe & 8
        ? (Ce & 16 && re(te, U, J), me !== te && c(R, me))
        : Ce & 16
        ? Pe & 16
          ? O(te, me, R, q, U, J, de, ae, ie)
          : re(te, U, J, !0)
        : (Ce & 8 && c(R, ""), Pe & 16 && b(me, R, q, U, J, de, ae, ie));
    },
    z = (_, T, R, q, U, J, de, ae, ie) => {
      (_ = _ || Ga), (T = T || Ga);
      const te = _.length,
        Ce = T.length,
        me = Math.min(te, Ce);
      let we;
      for (we = 0; we < me; we++) {
        const Pe = (T[we] = ie ? Wn(T[we]) : rn(T[we]));
        h(_[we], Pe, R, null, U, J, de, ae, ie);
      }
      te > Ce ? re(_, U, J, !0, !1, me) : b(T, R, q, U, J, de, ae, ie, me);
    },
    O = (_, T, R, q, U, J, de, ae, ie) => {
      let te = 0;
      const Ce = T.length;
      let me = _.length - 1,
        we = Ce - 1;
      for (; te <= me && te <= we; ) {
        const Pe = _[te],
          Oe = (T[te] = ie ? Wn(T[te]) : rn(T[te]));
        if (bn(Pe, Oe)) h(Pe, Oe, R, null, U, J, de, ae, ie);
        else break;
        te++;
      }
      for (; te <= me && te <= we; ) {
        const Pe = _[me],
          Oe = (T[we] = ie ? Wn(T[we]) : rn(T[we]));
        if (bn(Pe, Oe)) h(Pe, Oe, R, null, U, J, de, ae, ie);
        else break;
        me--, we--;
      }
      if (te > me) {
        if (te <= we) {
          const Pe = we + 1,
            Oe = Pe < Ce ? T[Pe].el : q;
          for (; te <= we; )
            h(
              null,
              (T[te] = ie ? Wn(T[te]) : rn(T[te])),
              R,
              Oe,
              U,
              J,
              de,
              ae,
              ie
            ),
              te++;
        }
      } else if (te > we) for (; te <= me; ) G(_[te], U, J, !0), te++;
      else {
        const Pe = te,
          Oe = te,
          Ke = new Map();
        for (te = Oe; te <= we; te++) {
          const zt = (T[te] = ie ? Wn(T[te]) : rn(T[te]));
          zt.key != null && Ke.set(zt.key, te);
        }
        let Fe,
          Ht = 0;
        const gt = we - Oe + 1;
        let an = !1,
          jt = 0;
        const mr = new Array(gt);
        for (te = 0; te < gt; te++) mr[te] = 0;
        for (te = Pe; te <= me; te++) {
          const zt = _[te];
          if (Ht >= gt) {
            G(zt, U, J, !0);
            continue;
          }
          let vn;
          if (zt.key != null) vn = Ke.get(zt.key);
          else
            for (Fe = Oe; Fe <= we; Fe++)
              if (mr[Fe - Oe] === 0 && bn(zt, T[Fe])) {
                vn = Fe;
                break;
              }
          vn === void 0
            ? G(zt, U, J, !0)
            : ((mr[vn - Oe] = te + 1),
              vn >= jt ? (jt = vn) : (an = !0),
              h(zt, T[vn], R, null, U, J, de, ae, ie),
              Ht++);
        }
        const Fu = an ? Cb(mr) : Ga;
        for (Fe = Fu.length - 1, te = gt - 1; te >= 0; te--) {
          const zt = Oe + te,
            vn = T[zt],
            Nu = zt + 1 < Ce ? T[zt + 1].el : q;
          mr[te] === 0
            ? h(null, vn, R, Nu, U, J, de, ae, ie)
            : an && (Fe < 0 || te !== Fu[Fe] ? L(vn, R, Nu, 2) : Fe--);
        }
      }
    },
    L = (_, T, R, q, U = null) => {
      const {
        el: J,
        type: de,
        transition: ae,
        children: ie,
        shapeFlag: te,
      } = _;
      if (te & 6) {
        L(_.component.subTree, T, R, q);
        return;
      }
      if (te & 128) {
        _.suspense.move(T, R, q);
        return;
      }
      if (te & 64) {
        de.move(_, T, R, Q);
        return;
      }
      if (de === ye) {
        a(J, T, R);
        for (let me = 0; me < ie.length; me++) L(ie[me], T, R, q);
        a(_.anchor, T, R);
        return;
      }
      if (de === ni) {
        x(_, T, R);
        return;
      }
      if (q !== 2 && te & 1 && ae)
        if (q === 0) ae.beforeEnter(J), a(J, T, R), kt(() => ae.enter(J), U);
        else {
          const { leave: me, delayLeave: we, afterLeave: Pe } = ae,
            Oe = () => a(J, T, R),
            Ke = () => {
              me(J, () => {
                Oe(), Pe && Pe();
              });
            };
          we ? we(J, Oe, Ke) : Ke();
        }
      else a(J, T, R);
    },
    G = (_, T, R, q = !1, U = !1) => {
      const {
        type: J,
        props: de,
        ref: ae,
        children: ie,
        dynamicChildren: te,
        shapeFlag: Ce,
        patchFlag: me,
        dirs: we,
        cacheIndex: Pe,
      } = _;
      if (
        (me === -2 && (U = !1),
        ae != null && Ll(ae, null, R, _, !0),
        Pe != null && (T.renderCache[Pe] = void 0),
        Ce & 256)
      ) {
        T.ctx.deactivate(_);
        return;
      }
      const Oe = Ce & 1 && we,
        Ke = !qa(_);
      let Fe;
      if ((Ke && (Fe = de && de.onVnodeBeforeUnmount) && mn(Fe, T, _), Ce & 6))
        ve(_.component, R, q);
      else {
        if (Ce & 128) {
          _.suspense.unmount(R, q);
          return;
        }
        Oe && la(_, null, T, "beforeUnmount"),
          Ce & 64
            ? _.type.remove(_, T, R, Q, q)
            : te && !te.hasOnce && (J !== ye || (me > 0 && me & 64))
            ? re(te, T, R, !1, !0)
            : ((J === ye && me & 384) || (!U && Ce & 16)) && re(ie, T, R),
          q && oe(_);
      }
      ((Ke && (Fe = de && de.onVnodeUnmounted)) || Oe) &&
        kt(() => {
          Fe && mn(Fe, T, _), Oe && la(_, null, T, "unmounted");
        }, R);
    },
    oe = (_) => {
      const { type: T, el: R, anchor: q, transition: U } = _;
      if (T === ye) {
        X(R, q);
        return;
      }
      if (T === ni) {
        E(_);
        return;
      }
      const J = () => {
        r(R), U && !U.persisted && U.afterLeave && U.afterLeave();
      };
      if (_.shapeFlag & 1 && U && !U.persisted) {
        const { leave: de, delayLeave: ae } = U,
          ie = () => de(R, J);
        ae ? ae(_.el, J, ie) : ie();
      } else J();
    },
    X = (_, T) => {
      let R;
      for (; _ !== T; ) (R = f(_)), r(_), (_ = R);
      r(T);
    },
    ve = (_, T, R) => {
      const { bum: q, scope: U, job: J, subTree: de, um: ae, m: ie, a: te } = _;
      nc(ie),
        nc(te),
        q && kl(q),
        U.stop(),
        J && ((J.flags |= 8), G(de, _, T, R)),
        ae && kt(ae, T),
        kt(() => {
          _.isUnmounted = !0;
        }, T),
        T &&
          T.pendingBranch &&
          !T.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === T.pendingId &&
          (T.deps--, T.deps === 0 && T.resolve());
    },
    re = (_, T, R, q = !1, U = !1, J = 0) => {
      for (let de = J; de < _.length; de++) G(_[de], T, R, q, U);
    },
    F = (_) => {
      if (_.shapeFlag & 6) return F(_.component.subTree);
      if (_.shapeFlag & 128) return _.suspense.next();
      const T = f(_.anchor || _.el),
        R = T && T[Qf];
      return R ? f(R) : T;
    };
  let Z = !1;
  const ee = (_, T, R) => {
      _ == null
        ? T._vnode && G(T._vnode, null, null, !0)
        : h(T._vnode || null, _, T, null, null, null, R),
        (T._vnode = _),
        Z || ((Z = !0), Wu(), Jf(), (Z = !1));
    },
    Q = { p: h, um: G, m: L, r: oe, mt: M, mc: b, pc: H, pbc: D, n: F, o: e };
  let Y, se;
  return { render: ee, hydrate: Y, createApp: db(ee, Y) };
}
function ei({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function oa({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function wb(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ks(e, t, n = !1) {
  const a = e.children,
    r = t.children;
  if (_e(a) && _e(r))
    for (let l = 0; l < a.length; l++) {
      const o = a[l];
      let i = r[l];
      i.shapeFlag & 1 &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || i.patchFlag === 32) &&
          ((i = r[l] = Wn(r[l])), (i.el = o.el)),
        !n && i.patchFlag !== -2 && Ks(o, i)),
        i.type === nl && (i.el = o.el);
    }
}
function Cb(e) {
  const t = e.slice(),
    n = [0];
  let a, r, l, o, i;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        (t[a] = r), n.push(a);
        continue;
      }
      for (l = 0, o = n.length - 1; l < o; )
        (i = (l + o) >> 1), e[n[i]] < u ? (l = i + 1) : (o = i);
      u < e[n[l]] && (l > 0 && (t[a] = n[l - 1]), (n[l] = a));
    }
  }
  for (l = n.length, o = n[l - 1]; l-- > 0; ) (n[l] = o), (o = t[o]);
  return n;
}
function kv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : kv(t);
}
function nc(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const xb = Symbol.for("v-scx"),
  _b = () => Ie(xb);
function vt(e, t) {
  return Ys(e, null, t);
}
function ce(e, t, n) {
  return Ys(e, t, n);
}
function Ys(e, t, n = Ue) {
  const { immediate: a, deep: r, flush: l, once: o } = n,
    i = nt({}, n),
    s = (t && a) || (!t && l !== "post");
  let u;
  if (Br) {
    if (l === "sync") {
      const v = _b();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {};
      return (v.stop = wn), (v.resume = wn), (v.pause = wn), v;
    }
  }
  const c = ut;
  i.call = (v, m, h) => on(v, c, m, h);
  let d = !1;
  l === "post"
    ? (i.scheduler = (v) => {
        kt(v, c && c.suspense);
      })
    : l !== "sync" &&
      ((d = !0),
      (i.scheduler = (v, m) => {
        m ? v() : Rs(v);
      })),
    (i.augmentJob = (v) => {
      t && (v.flags |= 4),
        d && ((v.flags |= 2), c && ((v.id = c.uid), (v.i = c)));
    });
  const f = Wy(e, t, i);
  return Br && (u ? u.push(f) : s && f()), f;
}
function kb(e, t, n) {
  const a = this.proxy,
    r = et(e) ? (e.includes(".") ? Ev(a, e) : () => a[e]) : e.bind(a, a);
  let l;
  Ee(t) ? (l = t) : ((l = t.handler), (n = t));
  const o = wa(this),
    i = Ys(r, l.bind(a), n);
  return o(), i;
}
function Ev(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let r = 0; r < n.length && a; r++) a = a[n[r]];
    return a;
  };
}
const Eb = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Ea(t)}Modifiers`];
function Pb(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Ue;
  let r = n;
  const l = t.startsWith("update:"),
    o = l && Eb(a, t.slice(7));
  o &&
    (o.trim && (r = n.map((c) => (et(c) ? c.trim() : c))),
    o.number && (r = n.map(Ai)));
  let i,
    s = a[(i = Ko(t))] || a[(i = Ko(Rt(t)))];
  !s && l && (s = a[(i = Ko(Ea(t)))]), s && on(s, e, 6, r);
  const u = a[i + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    (e.emitted[i] = !0), on(u, e, 6, r);
  }
}
function Pv(e, t, n = !1) {
  const a = t.emitsCache,
    r = a.get(e);
  if (r !== void 0) return r;
  const l = e.emits;
  let o = {},
    i = !1;
  if (!Ee(e)) {
    const s = (u) => {
      const c = Pv(u, t, !0);
      c && ((i = !0), nt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  return !l && !i
    ? (Je(e) && a.set(e, null), null)
    : (_e(l) ? l.forEach((s) => (o[s] = null)) : nt(o, l),
      Je(e) && a.set(e, o),
      o);
}
function yo(e, t) {
  return !e || !oo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, Ea(t)) || Re(e, t));
}
function ti(e) {
  const {
      type: t,
      vnode: n,
      proxy: a,
      withProxy: r,
      propsOptions: [l],
      slots: o,
      attrs: i,
      emit: s,
      render: u,
      renderCache: c,
      props: d,
      data: f,
      setupState: v,
      ctx: m,
      inheritAttrs: h,
    } = e,
    y = Bl(e);
  let p, w;
  try {
    if (n.shapeFlag & 4) {
      const E = r || a,
        k = E;
      (p = rn(u.call(k, E, c, d, v, f, m))), (w = i);
    } else {
      const E = t;
      (p = rn(
        E.length > 1 ? E(d, { attrs: i, slots: o, emit: s }) : E(d, null)
      )),
        (w = t.props ? i : Ab(i));
    }
  } catch (E) {
    (Er.length = 0), Zr(E, e, 1), (p = g(st));
  }
  let x = p;
  if (w && h !== !1) {
    const E = Object.keys(w),
      { shapeFlag: k } = x;
    E.length &&
      k & 7 &&
      (l && E.some(Ps) && (w = Ib(w, l)), (x = Dn(x, w, !1, !0)));
  }
  return (
    n.dirs &&
      ((x = Dn(x, null, !1, !0)),
      (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
    n.transition && pa(x, n.transition),
    (p = x),
    Bl(y),
    p
  );
}
function Tb(e, t = !0) {
  let n;
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    if (Sa(r)) {
      if (r.type !== st || r.children === "v-if") {
        if (n) return;
        n = r;
      }
    } else return;
  }
  return n;
}
const Ab = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || oo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ib = (e, t) => {
    const n = {};
    for (const a in e) (!Ps(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
    return n;
  };
function Vb(e, t, n) {
  const { props: a, children: r, component: l } = e,
    { props: o, children: i, patchFlag: s } = t,
    u = l.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && s >= 0) {
    if (s & 1024) return !0;
    if (s & 16) return a ? ac(a, o, u) : !!o;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (o[f] !== a[f] && !yo(u, f)) return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable)
      ? !0
      : a === o
      ? !1
      : a
      ? o
        ? ac(a, o, u)
        : !0
      : !!o;
  return !1;
}
function ac(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < a.length; r++) {
    const l = a[r];
    if (t[l] !== e[l] && !yo(n, l)) return !0;
  }
  return !1;
}
function qs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if ((a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Tv = (e) => e.__isSuspense;
let Ni = 0;
const Db = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, a, r, l, o, i, s, u) {
      if (e == null) Ob(t, n, a, r, l, o, i, s, u);
      else {
        if (l && l.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        $b(e, t, n, a, r, o, i, s, u);
      }
    },
    hydrate: Mb,
    normalize: Bb,
  },
  pP = Db;
function Mr(e, t) {
  const n = e.props && e.props[t];
  Ee(n) && n();
}
function Ob(e, t, n, a, r, l, o, i, s) {
  const {
      p: u,
      o: { createElement: c },
    } = s,
    d = c("div"),
    f = (e.suspense = Av(e, r, a, t, d, n, l, o, i, s));
  u(null, (f.pendingBranch = e.ssContent), d, null, a, f, l, o),
    f.deps > 0
      ? (Mr(e, "onPending"),
        Mr(e, "onFallback"),
        u(null, e.ssFallback, t, n, a, null, l, o),
        Ja(f, e.ssFallback))
      : f.resolve(!1, !0);
}
function $b(e, t, n, a, r, l, o, i, { p: s, um: u, o: { createElement: c } }) {
  const d = (t.suspense = e.suspense);
  (d.vnode = t), (t.el = e.el);
  const f = t.ssContent,
    v = t.ssFallback,
    { activeBranch: m, pendingBranch: h, isInFallback: y, isHydrating: p } = d;
  if (h)
    (d.pendingBranch = f),
      bn(f, h)
        ? (s(h, f, d.hiddenContainer, null, r, d, l, o, i),
          d.deps <= 0
            ? d.resolve()
            : y && (p || (s(m, v, n, a, r, null, l, o, i), Ja(d, v))))
        : ((d.pendingId = Ni++),
          p ? ((d.isHydrating = !1), (d.activeBranch = h)) : u(h, r, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = c("div")),
          y
            ? (s(null, f, d.hiddenContainer, null, r, d, l, o, i),
              d.deps <= 0
                ? d.resolve()
                : (s(m, v, n, a, r, null, l, o, i), Ja(d, v)))
            : m && bn(f, m)
            ? (s(m, f, n, a, r, d, l, o, i), d.resolve(!0))
            : (s(null, f, d.hiddenContainer, null, r, d, l, o, i),
              d.deps <= 0 && d.resolve()));
  else if (m && bn(f, m)) s(m, f, n, a, r, d, l, o, i), Ja(d, f);
  else if (
    (Mr(t, "onPending"),
    (d.pendingBranch = f),
    f.shapeFlag & 512
      ? (d.pendingId = f.component.suspenseId)
      : (d.pendingId = Ni++),
    s(null, f, d.hiddenContainer, null, r, d, l, o, i),
    d.deps <= 0)
  )
    d.resolve();
  else {
    const { timeout: w, pendingId: x } = d;
    w > 0
      ? setTimeout(() => {
          d.pendingId === x && d.fallback(v);
        }, w)
      : w === 0 && d.fallback(v);
  }
}
function Av(e, t, n, a, r, l, o, i, s, u, c = !1) {
  const {
    p: d,
    m: f,
    um: v,
    n: m,
    o: { parentNode: h, remove: y },
  } = u;
  let p;
  const w = Rb(e);
  w && t && t.pendingBranch && ((p = t.pendingId), t.deps++);
  const x = e.props ? _f(e.props.timeout) : void 0,
    E = l,
    k = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: a,
      hiddenContainer: r,
      deps: 0,
      pendingId: Ni++,
      timeout: typeof x == "number" ? x : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(V = !1, A = !1) {
        const {
          vnode: b,
          activeBranch: C,
          pendingBranch: D,
          pendingId: P,
          effects: I,
          parentComponent: $,
          container: M,
        } = k;
        let N = !1;
        k.isHydrating
          ? (k.isHydrating = !1)
          : V ||
            ((N = C && D.transition && D.transition.mode === "out-in"),
            N &&
              (C.transition.afterLeave = () => {
                P === k.pendingId && (f(D, M, l === E ? m(C) : l, 0), $i(I));
              }),
            C && (h(C.el) === M && (l = m(C)), v(C, $, k, !0)),
            N || f(D, M, l, 0)),
          Ja(k, D),
          (k.pendingBranch = null),
          (k.isInFallback = !1);
        let B = k.parent,
          j = !1;
        for (; B; ) {
          if (B.pendingBranch) {
            B.effects.push(...I), (j = !0);
            break;
          }
          B = B.parent;
        }
        !j && !N && $i(I),
          (k.effects = []),
          w &&
            t &&
            t.pendingBranch &&
            p === t.pendingId &&
            (t.deps--, t.deps === 0 && !A && t.resolve()),
          Mr(b, "onResolve");
      },
      fallback(V) {
        if (!k.pendingBranch) return;
        const {
          vnode: A,
          activeBranch: b,
          parentComponent: C,
          container: D,
          namespace: P,
        } = k;
        Mr(A, "onFallback");
        const I = m(b),
          $ = () => {
            k.isInFallback && (d(null, V, D, I, C, null, P, i, s), Ja(k, V));
          },
          M = V.transition && V.transition.mode === "out-in";
        M && (b.transition.afterLeave = $),
          (k.isInFallback = !0),
          v(b, C, null, !0),
          M || $();
      },
      move(V, A, b) {
        k.activeBranch && f(k.activeBranch, V, A, b), (k.container = V);
      },
      next() {
        return k.activeBranch && m(k.activeBranch);
      },
      registerDep(V, A, b) {
        const C = !!k.pendingBranch;
        C && k.deps++;
        const D = V.vnode.el;
        V.asyncDep
          .catch((P) => {
            Zr(P, V, 0);
          })
          .then((P) => {
            if (V.isUnmounted || k.isUnmounted || k.pendingId !== V.suspenseId)
              return;
            V.asyncResolved = !0;
            const { vnode: I } = V;
            zi(V, P, !1), D && (I.el = D);
            const $ = !D && V.subTree.el;
            A(V, I, h(D || V.subTree.el), D ? null : m(V.subTree), k, o, b),
              $ && y($),
              qs(V, I.el),
              C && --k.deps === 0 && k.resolve();
          });
      },
      unmount(V, A) {
        (k.isUnmounted = !0),
          k.activeBranch && v(k.activeBranch, n, V, A),
          k.pendingBranch && v(k.pendingBranch, n, V, A);
      },
    };
  return k;
}
function Mb(e, t, n, a, r, l, o, i, s) {
  const u = (t.suspense = Av(
      t,
      a,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      r,
      l,
      o,
      i,
      !0
    )),
    c = s(e, (u.pendingBranch = t.ssContent), n, u, l, o);
  return u.deps === 0 && u.resolve(!1, !0), c;
}
function Bb(e) {
  const { shapeFlag: t, children: n } = e,
    a = t & 32;
  (e.ssContent = rc(a ? n.default : n)),
    (e.ssFallback = a ? rc(n.fallback) : g(st));
}
function rc(e) {
  let t;
  if (Ee(e)) {
    const n = Xa && e._c;
    n && ((e._d = !1), ge()), (e = e()), n && ((e._d = !0), (t = $t), Iv());
  }
  return (
    _e(e) && (e = Tb(e)),
    (e = rn(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Lb(e, t) {
  t && t.pendingBranch
    ? _e(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : $i(e);
}
function Ja(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: a } = e;
  let r = t.el;
  for (; !r && t.component; ) (t = t.component.subTree), (r = t.el);
  (n.el = r), a && a.subTree === n && ((a.vnode.el = r), qs(a, r));
}
function Rb(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ye = Symbol.for("v-fgt"),
  nl = Symbol.for("v-txt"),
  st = Symbol.for("v-cmt"),
  ni = Symbol.for("v-stc"),
  Er = [];
let $t = null;
function ge(e = !1) {
  Er.push(($t = e ? null : []));
}
function Iv() {
  Er.pop(), ($t = Er[Er.length - 1] || null);
}
let Xa = 1;
function lc(e, t = !1) {
  (Xa += e), e < 0 && $t && t && ($t.hasOnce = !0);
}
function Vv(e) {
  return (
    (e.dynamicChildren = Xa > 0 ? $t || Ga : null),
    Iv(),
    Xa > 0 && $t && $t.push(e),
    e
  );
}
function tt(e, t, n, a, r, l) {
  return Vv(Ta(e, t, n, a, r, l, !0));
}
function Te(e, t, n, a, r) {
  return Vv(g(e, t, n, a, r, !0));
}
function Sa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dv = ({ key: e }) => e ?? null,
  Pl = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? et(e) || Be(e) || Ee(e)
        ? { i: ot, r: e, k: t, f: !!n }
        : e
      : null
  );
function Ta(
  e,
  t = null,
  n = null,
  a = 0,
  r = null,
  l = e === ye ? 0 : 1,
  o = !1,
  i = !1
) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dv(t),
    ref: t && Pl(t),
    scopeId: Zf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: a,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ot,
  };
  return (
    i
      ? (Js(s, n), l & 128 && e.normalize(s))
      : n && (s.shapeFlag |= et(n) ? 8 : 16),
    Xa > 0 &&
      !o &&
      $t &&
      (s.patchFlag > 0 || l & 6) &&
      s.patchFlag !== 32 &&
      $t.push(s),
    s
  );
}
const g = Fb;
function Fb(e, t = null, n = null, a = 0, r = null, l = !1) {
  if (((!e || e === fv) && (e = st), Sa(e))) {
    const i = Dn(e, t, !0);
    return (
      n && Js(i, n),
      Xa > 0 &&
        !l &&
        $t &&
        (i.shapeFlag & 6 ? ($t[$t.indexOf(e)] = i) : $t.push(i)),
      (i.patchFlag = -2),
      i
    );
  }
  if ((qb(e) && (e = e.__vccOpts), t)) {
    t = Nb(t);
    let { class: i, style: s } = t;
    i && !et(i) && (t.class = Pt(i)),
      Je(s) && (Ls(s) && !_e(s) && (s = nt({}, s)), (t.style = co(s)));
  }
  const o = et(e) ? 1 : Tv(e) ? 128 : ev(e) ? 64 : Je(e) ? 4 : Ee(e) ? 2 : 0;
  return Ta(e, t, n, a, r, o, l, !0);
}
function Nb(e) {
  return e ? (Ls(e) || bv(e) ? nt({}, e) : e) : null;
}
function Dn(e, t, n = !1, a = !1) {
  const { props: r, ref: l, patchFlag: o, children: i, transition: s } = e,
    u = t ? le(r || {}, t) : r,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Dv(u),
      ref:
        t && t.ref
          ? n && l
            ? _e(l)
              ? l.concat(Pl(t))
              : [l, Pl(t)]
            : Pl(t)
          : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: i,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ye ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: s,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Dn(e.ssContent),
      ssFallback: e.ssFallback && Dn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return s && a && pa(c, s.clone(c)), c;
}
function je(e = " ", t = 0) {
  return g(nl, null, e, t);
}
function it(e = "", t = !1) {
  return t ? (ge(), Te(st, null, e)) : g(st, null, e);
}
function rn(e) {
  return e == null || typeof e == "boolean"
    ? g(st)
    : _e(e)
    ? g(ye, null, e.slice())
    : Sa(e)
    ? Wn(e)
    : g(nl, null, String(e));
}
function Wn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Dn(e);
}
function Js(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (_e(t)) n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !bv(t)
        ? (t._ctx = ot)
        : r === 3 &&
          ot &&
          (ot.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Ee(t)
      ? ((t = { default: t, _ctx: ot }), (n = 32))
      : ((t = String(t)), a & 64 ? ((n = 16), (t = [je(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function le(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const r in a)
      if (r === "class")
        t.class !== a.class && (t.class = Pt([t.class, a.class]));
      else if (r === "style") t.style = co([t.style, a.style]);
      else if (oo(r)) {
        const l = t[r],
          o = a[r];
        o &&
          l !== o &&
          !(_e(l) && l.includes(o)) &&
          (t[r] = l ? [].concat(l, o) : o);
      } else r !== "" && (t[r] = a[r]);
  }
  return t;
}
function mn(e, t, n, a = null) {
  on(e, t, 7, [n, a]);
}
const Hb = hv();
let jb = 0;
function zb(e, t, n) {
  const a = e.type,
    r = (t ? t.appContext : e.appContext) || Hb,
    l = {
      uid: jb++,
      vnode: e,
      type: a,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Tf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Sv(a, r),
      emitsOptions: Pv(a, r),
      emit: null,
      emitted: null,
      propsDefaults: Ue,
      inheritAttrs: a.inheritAttrs,
      ctx: Ue,
      data: Ue,
      props: Ue,
      attrs: Ue,
      slots: Ue,
      refs: Ue,
      setupState: Ue,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = Pb.bind(null, l)),
    e.ce && e.ce(l),
    l
  );
}
let ut = null;
const bo = () => ut || ot;
let Fl, Hi;
{
  const e = uo(),
    t = (n, a) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(a),
        (l) => {
          r.length > 1 ? r.forEach((o) => o(l)) : r[0](l);
        }
      );
    };
  (Fl = t("__VUE_INSTANCE_SETTERS__", (n) => (ut = n))),
    (Hi = t("__VUE_SSR_SETTERS__", (n) => (Br = n)));
}
const wa = (e) => {
    const t = ut;
    return (
      Fl(e),
      e.scope.on(),
      () => {
        e.scope.off(), Fl(t);
      }
    );
  },
  ji = () => {
    ut && ut.scope.off(), Fl(null);
  };
function Ov(e) {
  return e.vnode.shapeFlag & 4;
}
let Br = !1;
function Ub(e, t = !1, n = !1) {
  t && Hi(t);
  const { props: a, children: r } = e.vnode,
    l = Ov(e);
  vb(e, a, l, t), yb(e, r, n);
  const o = l ? Wb(e, t) : void 0;
  return t && Hi(!1), o;
}
function Wb(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, rb));
  const { setup: a } = n;
  if (a) {
    ta();
    const r = (e.setupContext = a.length > 1 ? Kb(e) : null),
      l = wa(e),
      o = Xr(a, e, 0, [e.props, r]),
      i = As(o);
    if ((na(), l(), (i || e.sp) && !qa(e) && sv(e), i)) {
      if ((o.then(ji, ji), t))
        return o
          .then((s) => {
            zi(e, s, t);
          })
          .catch((s) => {
            Zr(s, e, 0);
          });
      e.asyncDep = o;
    } else zi(e, o, t);
  } else $v(e, t);
}
function zi(e, t, n) {
  Ee(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Je(t) && (e.setupState = Gf(t)),
    $v(e, n);
}
let oc;
function $v(e, t, n) {
  const a = e.type;
  if (!e.render) {
    if (!t && oc && !a.render) {
      const r = a.template || Ws(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config,
          { delimiters: i, compilerOptions: s } = a,
          u = nt(nt({ isCustomElement: l, delimiters: i }, o), s);
        a.render = oc(r, u);
      }
    }
    e.render = a.render || wn;
  }
  {
    const r = wa(e);
    ta();
    try {
      lb(e);
    } finally {
      na(), r();
    }
  }
}
const Gb = {
  get(e, t) {
    return bt(e, "get", ""), e[t];
  },
};
function Kb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Gb),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function po(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Gf(vo(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in kr) return kr[n](e);
          },
          has(t, n) {
            return n in t || n in kr;
          },
        }))
    : e.proxy;
}
function Yb(e, t = !0) {
  return Ee(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function qb(e) {
  return Ee(e) && "__vccOpts" in e;
}
const S = (e, t) => zy(e, t, Br);
function aa(e, t, n) {
  const a = arguments.length;
  return a === 2
    ? Je(t) && !_e(t)
      ? Sa(t)
        ? g(e, null, [t])
        : g(e, t)
      : g(e, null, t)
    : (a > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : a === 3 && Sa(n) && (n = [n]),
      g(e, t, n));
}
const Jb = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ui;
const ic = typeof window < "u" && window.trustedTypes;
if (ic)
  try {
    Ui = ic.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Mv = Ui ? (e) => Ui.createHTML(e) : (e) => e,
  Xb = "http://www.w3.org/2000/svg",
  Zb = "http://www.w3.org/1998/Math/MathML",
  En = typeof document < "u" ? document : null,
  sc = En && En.createElement("template"),
  Qb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, a) => {
      const r =
        t === "svg"
          ? En.createElementNS(Xb, e)
          : t === "mathml"
          ? En.createElementNS(Zb, e)
          : n
          ? En.createElement(e, { is: n })
          : En.createElement(e);
      return (
        e === "select" &&
          a &&
          a.multiple != null &&
          r.setAttribute("multiple", a.multiple),
        r
      );
    },
    createText: (e) => En.createTextNode(e),
    createComment: (e) => En.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => En.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, a, r, l) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === l || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === l || !(r = r.nextSibling));

        );
      else {
        sc.innerHTML = Mv(
          a === "svg"
            ? `<svg>${e}</svg>`
            : a === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const i = sc.content;
        if (a === "svg" || a === "mathml") {
          const s = i.firstChild;
          for (; s.firstChild; ) i.appendChild(s.firstChild);
          i.removeChild(s);
        }
        t.insertBefore(i, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Fn = "transition",
  gr = "animation",
  Za = Symbol("_vtc"),
  Bv = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Lv = nt({}, rv, Bv),
  ep = (e) => ((e.displayName = "Transition"), (e.props = Lv), e),
  Jn = ep((e, { slots: t }) => aa(Xy, Rv(e), t)),
  ia = (e, t = []) => {
    _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  uc = (e) => (e ? (_e(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Rv(e) {
  const t = {};
  for (const I in e) I in Bv || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: a,
      duration: r,
      enterFromClass: l = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: s = l,
      appearActiveClass: u = o,
      appearToClass: c = i,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    m = tp(r),
    h = m && m[0],
    y = m && m[1],
    {
      onBeforeEnter: p,
      onEnter: w,
      onEnterCancelled: x,
      onLeave: E,
      onLeaveCancelled: k,
      onBeforeAppear: V = p,
      onAppear: A = w,
      onAppearCancelled: b = x,
    } = t,
    C = (I, $, M, N) => {
      (I._enterCancelled = N), Hn(I, $ ? c : i), Hn(I, $ ? u : o), M && M();
    },
    D = (I, $) => {
      (I._isLeaving = !1), Hn(I, d), Hn(I, v), Hn(I, f), $ && $();
    },
    P = (I) => ($, M) => {
      const N = I ? A : w,
        B = () => C($, I, M);
      ia(N, [$, B]),
        cc(() => {
          Hn($, I ? s : l), hn($, I ? c : i), uc(N) || dc($, a, h, B);
        });
    };
  return nt(t, {
    onBeforeEnter(I) {
      ia(p, [I]), hn(I, l), hn(I, o);
    },
    onBeforeAppear(I) {
      ia(V, [I]), hn(I, s), hn(I, u);
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(I, $) {
      I._isLeaving = !0;
      const M = () => D(I, $);
      hn(I, d),
        I._enterCancelled ? (hn(I, f), Wi()) : (Wi(), hn(I, f)),
        cc(() => {
          I._isLeaving && (Hn(I, d), hn(I, v), uc(E) || dc(I, a, y, M));
        }),
        ia(E, [I, M]);
    },
    onEnterCancelled(I) {
      C(I, !1, void 0, !0), ia(x, [I]);
    },
    onAppearCancelled(I) {
      C(I, !0, void 0, !0), ia(b, [I]);
    },
    onLeaveCancelled(I) {
      D(I), ia(k, [I]);
    },
  });
}
function tp(e) {
  if (e == null) return null;
  if (Je(e)) return [ai(e.enter), ai(e.leave)];
  {
    const t = ai(e);
    return [t, t];
  }
}
function ai(e) {
  return _f(e);
}
function hn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Za] || (e[Za] = new Set())).add(t);
}
function Hn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Za];
  n && (n.delete(t), n.size || (e[Za] = void 0));
}
function cc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let np = 0;
function dc(e, t, n, a) {
  const r = (e._endId = ++np),
    l = () => {
      r === e._endId && a();
    };
  if (n != null) return setTimeout(l, n);
  const { type: o, timeout: i, propCount: s } = Fv(e, t);
  if (!o) return a();
  const u = o + "end";
  let c = 0;
  const d = () => {
      e.removeEventListener(u, f), l();
    },
    f = (v) => {
      v.target === e && ++c >= s && d();
    };
  setTimeout(() => {
    c < s && d();
  }, i + 1),
    e.addEventListener(u, f);
}
function Fv(e, t) {
  const n = window.getComputedStyle(e),
    a = (m) => (n[m] || "").split(", "),
    r = a(`${Fn}Delay`),
    l = a(`${Fn}Duration`),
    o = fc(r, l),
    i = a(`${gr}Delay`),
    s = a(`${gr}Duration`),
    u = fc(i, s);
  let c = null,
    d = 0,
    f = 0;
  t === Fn
    ? o > 0 && ((c = Fn), (d = o), (f = l.length))
    : t === gr
    ? u > 0 && ((c = gr), (d = u), (f = s.length))
    : ((d = Math.max(o, u)),
      (c = d > 0 ? (o > u ? Fn : gr) : null),
      (f = c ? (c === Fn ? l.length : s.length) : 0));
  const v =
    c === Fn && /\b(transform|all)(,|$)/.test(a(`${Fn}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function fc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => vc(n) + vc(e[a])));
}
function vc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wi() {
  return document.body.offsetHeight;
}
function ap(e, t, n) {
  const a = e[Za];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Nl = Symbol("_vod"),
  Nv = Symbol("_vsh"),
  Aa = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Nl] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : yr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: a }) {
      !t != !n &&
        (a
          ? t
            ? (a.beforeEnter(e), yr(e, !0), a.enter(e))
            : a.leave(e, () => {
                yr(e, !1);
              })
          : yr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      yr(e, t);
    },
  };
function yr(e, t) {
  (e.style.display = t ? e[Nl] : "none"), (e[Nv] = !t);
}
const rp = Symbol(""),
  lp = /(^|;)\s*display\s*:/;
function op(e, t, n) {
  const a = e.style,
    r = et(n);
  let l = !1;
  if (n && !r) {
    if (t)
      if (et(t))
        for (const o of t.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim();
          n[i] == null && Tl(a, i, "");
        }
      else for (const o in t) n[o] == null && Tl(a, o, "");
    for (const o in n) o === "display" && (l = !0), Tl(a, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = a[rp];
      o && (n += ";" + o), (a.cssText = n), (l = lp.test(n));
    }
  } else t && e.removeAttribute("style");
  Nl in e && ((e[Nl] = l ? a.display : ""), e[Nv] && (a.display = "none"));
}
const mc = /\s*!important$/;
function Tl(e, t, n) {
  if (_e(n)) n.forEach((a) => Tl(e, t, a));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const a = ip(e, t);
    mc.test(n)
      ? e.setProperty(Ea(a), n.replace(mc, ""), "important")
      : (e[a] = n);
  }
}
const hc = ["Webkit", "Moz", "ms"],
  ri = {};
function ip(e, t) {
  const n = ri[t];
  if (n) return n;
  let a = Rt(t);
  if (a !== "filter" && a in e) return (ri[t] = a);
  a = Pa(a);
  for (let r = 0; r < hc.length; r++) {
    const l = hc[r] + a;
    if (l in e) return (ri[t] = l);
  }
  return t;
}
const gc = "http://www.w3.org/1999/xlink";
function yc(e, t, n, a, r, l = by(t)) {
  a && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(gc, t.slice(6, t.length))
      : e.setAttributeNS(gc, t, n)
    : n == null || (l && !kf(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, l ? "" : Mn(n) ? String(n) : n);
}
function bc(e, t, n, a, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mv(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const i = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      s = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (i !== s || !("_value" in e)) && (e.value = s),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean"
      ? (n = kf(n))
      : n == null && i === "string"
      ? ((n = ""), (o = !0))
      : i === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function ja(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function sp(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const pc = Symbol("_vei");
function up(e, t, n, a, r = null) {
  const l = e[pc] || (e[pc] = {}),
    o = l[t];
  if (a && o) o.value = a;
  else {
    const [i, s] = cp(t);
    if (a) {
      const u = (l[t] = vp(a, r));
      ja(e, i, u, s);
    } else o && (sp(e, i, o, s), (l[t] = void 0));
  }
}
const Sc = /(?:Once|Passive|Capture)$/;
function cp(e) {
  let t;
  if (Sc.test(e)) {
    t = {};
    let a;
    for (; (a = e.match(Sc)); )
      (e = e.slice(0, e.length - a[0].length)), (t[a[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ea(e.slice(2)), t];
}
let li = 0;
const dp = Promise.resolve(),
  fp = () => li || (dp.then(() => (li = 0)), (li = Date.now()));
function vp(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    on(mp(a, n.value), t, 5, [a]);
  };
  return (n.value = e), (n.attached = fp()), n;
}
function mp(e, t) {
  if (_e(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((a) => (r) => !r._stopped && a && a(r))
    );
  } else return t;
}
const wc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  hp = (e, t, n, a, r, l) => {
    const o = r === "svg";
    t === "class"
      ? ap(e, a, o)
      : t === "style"
      ? op(e, n, a)
      : oo(t)
      ? Ps(t) || up(e, t, n, a, l)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : gp(e, t, a, o)
        )
      ? (bc(e, t, a),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          yc(e, t, a, o, l, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !et(a))
      ? bc(e, Rt(t), a, l, t)
      : (t === "true-value"
          ? (e._trueValue = a)
          : t === "false-value" && (e._falseValue = a),
        yc(e, t, a, o));
  };
function gp(e, t, n, a) {
  if (a)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && wc(t) && Ee(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return wc(t) && et(n) ? !1 : t in e;
}
const Hv = new WeakMap(),
  jv = new WeakMap(),
  Hl = Symbol("_moveCb"),
  Cc = Symbol("_enterCb"),
  yp = (e) => (delete e.props.mode, e),
  bp = yp({
    name: "TransitionGroup",
    props: nt({}, Lv, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = bo(),
        a = av();
      let r, l;
      return (
        Hs(() => {
          if (!r.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!Cp(r[0].el, n.vnode.el, o)) return;
          r.forEach(pp), r.forEach(Sp);
          const i = r.filter(wp);
          Wi(),
            i.forEach((s) => {
              const u = s.el,
                c = u.style;
              hn(u, o),
                (c.transform = c.webkitTransform = c.transitionDuration = "");
              const d = (u[Hl] = (f) => {
                (f && f.target !== u) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (u.removeEventListener("transitionend", d),
                    (u[Hl] = null),
                    Hn(u, o)));
              });
              u.addEventListener("transitionend", d);
            });
        }),
        () => {
          const o = xe(e),
            i = Rv(o);
          let s = o.tag || ye;
          if (((r = []), l))
            for (let u = 0; u < l.length; u++) {
              const c = l[u];
              c.el &&
                c.el instanceof Element &&
                (r.push(c),
                pa(c, $r(c, i, a, n)),
                Hv.set(c, c.el.getBoundingClientRect()));
            }
          l = t.default ? Fs(t.default()) : [];
          for (let u = 0; u < l.length; u++) {
            const c = l[u];
            c.key != null && pa(c, $r(c, i, a, n));
          }
          return g(s, null, l);
        }
      );
    },
  }),
  Xs = bp;
function pp(e) {
  const t = e.el;
  t[Hl] && t[Hl](), t[Cc] && t[Cc]();
}
function Sp(e) {
  jv.set(e, e.el.getBoundingClientRect());
}
function wp(e) {
  const t = Hv.get(e),
    n = jv.get(e),
    a = t.left - n.left,
    r = t.top - n.top;
  if (a || r) {
    const l = e.el.style;
    return (
      (l.transform = l.webkitTransform = `translate(${a}px,${r}px)`),
      (l.transitionDuration = "0s"),
      e
    );
  }
}
function Cp(e, t, n) {
  const a = e.cloneNode(),
    r = e[Za];
  r &&
    r.forEach((i) => {
      i.split(/\s+/).forEach((s) => s && a.classList.remove(s));
    }),
    n.split(/\s+/).forEach((i) => i && a.classList.add(i)),
    (a.style.display = "none");
  const l = t.nodeType === 1 ? t : t.parentNode;
  l.appendChild(a);
  const { hasTransform: o } = Fv(a);
  return l.removeChild(a), o;
}
const xc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => kl(t, n) : t;
};
function xp(e) {
  e.target.composing = !0;
}
function _c(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const oi = Symbol("_assign"),
  _p = {
    created(e, { modifiers: { lazy: t, trim: n, number: a } }, r) {
      e[oi] = xc(r);
      const l = a || (r.props && r.props.type === "number");
      ja(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let i = e.value;
        n && (i = i.trim()), l && (i = Ai(i)), e[oi](i);
      }),
        n &&
          ja(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (ja(e, "compositionstart", xp),
          ja(e, "compositionend", _c),
          ja(e, "change", _c));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: a, trim: r, number: l } },
      o
    ) {
      if (((e[oi] = xc(o)), e.composing)) return;
      const i =
          (l || e.type === "number") && !/^0\d/.test(e.value)
            ? Ai(e.value)
            : e.value,
        s = t ?? "";
      i !== s &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((a && t === n) || (r && e.value.trim() === s))) ||
          (e.value = s));
    },
  },
  kp = ["ctrl", "shift", "alt", "meta"],
  Ep = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => kp.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ca = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      a = t.join(".");
    return (
      n[a] ||
      (n[a] = (r, ...l) => {
        for (let o = 0; o < t.length; o++) {
          const i = Ep[t[o]];
          if (i && i(r, t)) return;
        }
        return e(r, ...l);
      })
    );
  },
  Pp = nt({ patchProp: hp }, Qb);
let kc;
function Tp() {
  return kc || (kc = pb(Pp));
}
const Ap = (...e) => {
  const t = Tp().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (a) => {
      const r = Vp(a);
      if (!r) return;
      const l = t._component;
      !Ee(l) && !l.render && !l.template && (l.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = n(r, !1, Ip(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Ip(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Vp(e) {
  return et(e) ? document.querySelector(e) : e;
}
function Mt(e, t) {
  let n;
  function a() {
    (n = Jr()),
      n.run(() =>
        t.length
          ? t(() => {
              n == null || n.stop(), a();
            })
          : t()
      );
  }
  ce(
    e,
    (r) => {
      r && !n ? a() : r || (n == null || n.stop(), (n = void 0));
    },
    { immediate: !0 }
  ),
    mt(() => {
      n == null || n.stop();
    });
}
const Me = typeof window < "u",
  Zs = Me && "IntersectionObserver" in window,
  Dp = Me && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function Ec(e, t, n) {
  Op(e, t), t.set(e, n);
}
function Op(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function $p(e, t, n) {
  return e.set(zv(e, t), n), n;
}
function sa(e, t) {
  return e.get(zv(e, t));
}
function zv(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Uv(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let r = 0; r < a; r++) {
    if (e == null) return n;
    e = e[t[r]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ra(e, t) {
  if (e === t) return !0;
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length
    ? !1
    : n.every((a) => ra(e[a], t[a]));
}
function xa(e, t, n) {
  return e == null || !t || typeof t != "string"
    ? n
    : e[t] !== void 0
    ? e[t]
    : ((t = t.replace(/\[(\w+)\]/g, ".$1")),
      (t = t.replace(/^\./, "")),
      Uv(e, t.split("."), n));
}
function Ot(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string") return xa(e, t, n);
  if (Array.isArray(t)) return Uv(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Qs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Pc(e) {
  let t;
  return (
    e !== null &&
    typeof e == "object" &&
    ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null)
  );
}
function eu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE
      ? t.nextElementSibling
      : t;
  }
  return e;
}
const Tc = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16,
  }),
  Ac = Object.freeze({
    enter: "Enter",
    tab: "Tab",
    delete: "Delete",
    esc: "Escape",
    space: "Space",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    del: "Delete",
    backspace: "Backspace",
    insert: "Insert",
    pageup: "PageUp",
    pagedown: "PageDown",
    shift: "Shift",
  });
function Wv(e) {
  return Object.keys(e);
}
function ii(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Gv(e, t) {
  const n = {},
    a = new Set(Object.keys(e));
  for (const r of t) a.has(r) && (n[r] = e[r]);
  return n;
}
function Ic(e, t, n) {
  const a = Object.create(null),
    r = Object.create(null);
  for (const l in e)
    t.some((o) => (o instanceof RegExp ? o.test(l) : o === l)) &&
    !(n != null && n.some((o) => o === l))
      ? (a[l] = e[l])
      : (r[l] = e[l]);
  return [a, r];
}
function Zt(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
function Mp(e, t) {
  const n = {};
  return t.forEach((a) => (n[a] = e[a])), n;
}
const Kv = /^on[^a-z]/,
  So = (e) => Kv.test(e),
  Bp = [
    "onAfterscriptexecute",
    "onAnimationcancel",
    "onAnimationend",
    "onAnimationiteration",
    "onAnimationstart",
    "onAuxclick",
    "onBeforeinput",
    "onBeforescriptexecute",
    "onChange",
    "onClick",
    "onCompositionend",
    "onCompositionstart",
    "onCompositionupdate",
    "onContextmenu",
    "onCopy",
    "onCut",
    "onDblclick",
    "onFocusin",
    "onFocusout",
    "onFullscreenchange",
    "onFullscreenerror",
    "onGesturechange",
    "onGestureend",
    "onGesturestart",
    "onGotpointercapture",
    "onInput",
    "onKeydown",
    "onKeypress",
    "onKeyup",
    "onLostpointercapture",
    "onMousedown",
    "onMousemove",
    "onMouseout",
    "onMouseover",
    "onMouseup",
    "onMousewheel",
    "onPaste",
    "onPointercancel",
    "onPointerdown",
    "onPointerenter",
    "onPointerleave",
    "onPointermove",
    "onPointerout",
    "onPointerover",
    "onPointerup",
    "onReset",
    "onSelect",
    "onSubmit",
    "onTouchcancel",
    "onTouchend",
    "onTouchmove",
    "onTouchstart",
    "onTransitioncancel",
    "onTransitionend",
    "onTransitionrun",
    "onTransitionstart",
    "onWheel",
  ];
function wo(e) {
  const [t, n] = Ic(e, [Kv]),
    a = Zt(t, Bp),
    [r, l] = Ic(n, ["class", "style", "id", /^data-/]);
  return Object.assign(r, t), Object.assign(l, a), [r, l];
}
function ct(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Lp(e, t) {
  let n = 0;
  const a = function () {
    for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
      l[o] = arguments[o];
    clearTimeout(n), (n = setTimeout(() => e(...l), Se(t)));
  };
  return (
    (a.clear = () => {
      clearTimeout(n);
    }),
    (a.immediate = e),
    a
  );
}
function Bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function SP(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Vc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Dc(e, t) {
  return (
    (arguments.length > 2 && arguments[2] !== void 0
      ? arguments[2]
      : "0"
    ).repeat(Math.max(0, t - e.length)) + e
  );
}
function Rp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), (a += t);
  return n;
}
function St() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const r in e) a[r] = e[r];
  for (const r in t) {
    const l = e[r],
      o = t[r];
    if (Pc(l) && Pc(o)) {
      a[r] = St(l, o, n);
      continue;
    }
    if (n && Array.isArray(l) && Array.isArray(o)) {
      a[r] = n(l, o);
      continue;
    }
    a[r] = o;
  }
  return a;
}
function Yv(e) {
  return e.map((t) => (t.type === ye ? Yv(t.children) : t)).flat();
}
function ha() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ha.cache.has(e)) return ha.cache.get(e);
  const t = e
    .replace(/[^a-z]/gi, "-")
    .replace(/\B([A-Z])/g, "-$1")
    .toLowerCase();
  return ha.cache.set(e, t), t;
}
ha.cache = new Map();
function Wa(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Wa(e, n)).flat(1);
  if (t.suspense) return Wa(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Wa(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree) return Wa(e, t.component.subTree).flat(1);
  }
  return [];
}
var bl = new WeakMap(),
  Ma = new WeakMap();
class Fp {
  constructor(t) {
    Ec(this, bl, []), Ec(this, Ma, 0), (this.size = t);
  }
  push(t) {
    (sa(bl, this)[sa(Ma, this)] = t),
      $p(Ma, this, (sa(Ma, this) + 1) % this.size);
  }
  values() {
    return sa(bl, this)
      .slice(sa(Ma, this))
      .concat(sa(bl, this).slice(0, sa(Ma, this)));
  }
}
function tu(e) {
  const t = lt({}),
    n = S(e);
  return (
    vt(
      () => {
        for (const a in n.value) t[a] = n.value[a];
      },
      { flush: "sync" }
    ),
    sr(t)
  );
}
function jl(e, t) {
  return e.includes(t);
}
function qv(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const dt = () => [Function, Array];
function Oc(e, t) {
  return (
    (t = "on" + Pa(t)),
    !!(
      e[t] ||
      e[`${t}Once`] ||
      e[`${t}Capture`] ||
      e[`${t}OnceCapture`] ||
      e[`${t}CaptureOnce`]
    )
  );
}
function Jv(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const r of e) r(...n);
  else typeof e == "function" && e(...n);
}
function Lr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = [
    "button",
    "[href]",
    'input:not([type="hidden"])',
    "select",
    "textarea",
    "[tabindex]",
  ]
    .map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`)
    .join(", ");
  return [...e.querySelectorAll(n)];
}
function Xv(e, t, n) {
  let a,
    r = e.indexOf(document.activeElement);
  const l = t === "next" ? 1 : -1;
  do (r += l), (a = e[r]);
  while (
    (!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) &&
    r < e.length &&
    r >= 0
  );
  return a;
}
function Pr(e, t) {
  var a, r, l, o;
  const n = Lr(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) &&
      ((a = n[0]) == null || a.focus());
  else if (t === "first") (r = n[0]) == null || r.focus();
  else if (t === "last") (l = n.at(-1)) == null || l.focus();
  else if (typeof t == "number") (o = n[t]) == null || o.focus();
  else {
    const i = Xv(n, t);
    i ? i.focus() : Pr(e, t === "next" ? "first" : "last");
  }
}
function pl(e) {
  return e == null || (typeof e == "string" && e.trim() === "");
}
function Np() {}
function Qa(e, t) {
  if (
    !(
      Me &&
      typeof CSS < "u" &&
      typeof CSS.supports < "u" &&
      CSS.supports(`selector(${t})`)
    )
  )
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function nu(e) {
  return e.some((t) =>
    Sa(t) ? (t.type === st ? !1 : t.type !== ye || nu(t.children)) : !0
  )
    ? e
    : null;
}
function Hp(e, t) {
  if (!Me || e === 0) return t(), () => {};
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function jp(e, t) {
  const n = e.clientX,
    a = e.clientY,
    r = t.getBoundingClientRect(),
    l = r.left,
    o = r.top,
    i = r.right,
    s = r.bottom;
  return n >= l && n <= i && a >= o && a <= s;
}
function Gi() {
  const e = he(),
    t = (n) => {
      e.value = n;
    };
  return (
    Object.defineProperty(t, "value", {
      enumerable: !0,
      get: () => e.value,
      set: (n) => (e.value = n),
    }),
    Object.defineProperty(t, "el", { enumerable: !0, get: () => eu(e.value) }),
    t
  );
}
function Ki(e) {
  const t = e.key.length === 1,
    n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
const Zv = ["top", "bottom"],
  zp = ["start", "end", "left", "right"];
function Yi(e, t) {
  let [n, a] = e.split(" ");
  return (
    a || (a = jl(Zv, n) ? "start" : jl(zp, n) ? "top" : "center"),
    { side: qi(n, t), align: qi(a, t) }
  );
}
function qi(e, t) {
  return e === "start"
    ? t
      ? "right"
      : "left"
    : e === "end"
    ? t
      ? "left"
      : "right"
    : e;
}
function si(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.side],
    align: e.align,
  };
}
function ui(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.align],
  };
}
function $c(e) {
  return { side: e.align, align: e.side };
}
function Mc(e) {
  return jl(Zv, e.side) ? "y" : "x";
}
class ga {
  constructor(t) {
    let { x: n, y: a, width: r, height: l } = t;
    (this.x = n), (this.y = a), (this.width = r), (this.height = l);
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Bc(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right),
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom),
    },
  };
}
function Qv(e) {
  return Array.isArray(e)
    ? new ga({ x: e[0], y: e[1], width: 0, height: 0 })
    : e.getBoundingClientRect();
}
function au(e) {
  const t = e.getBoundingClientRect(),
    n = getComputedStyle(e),
    a = n.transform;
  if (a) {
    let r, l, o, i, s;
    if (a.startsWith("matrix3d("))
      (r = a.slice(9, -1).split(/, /)),
        (l = +r[0]),
        (o = +r[5]),
        (i = +r[12]),
        (s = +r[13]);
    else if (a.startsWith("matrix("))
      (r = a.slice(7, -1).split(/, /)),
        (l = +r[0]),
        (o = +r[3]),
        (i = +r[4]),
        (s = +r[5]);
    else return new ga(t);
    const u = n.transformOrigin,
      c = t.x - i - (1 - l) * parseFloat(u),
      d = t.y - s - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)),
      f = l ? t.width / l : e.offsetWidth + 1,
      v = o ? t.height / o : e.offsetHeight + 1;
    return new ga({ x: c, y: d, width: f, height: v });
  } else return new ga(t);
}
function fa(e, t, n) {
  if (typeof e.animate > "u") return { finished: Promise.resolve() };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return (
    typeof a.finished > "u" &&
      (a.finished = new Promise((r) => {
        a.onfinish = () => {
          r(a);
        };
      })),
    a
  );
}
const Al = new WeakMap();
function Up(e, t) {
  Object.keys(t).forEach((n) => {
    if (So(n)) {
      const a = qv(n),
        r = Al.get(e);
      if (t[n] == null)
        r == null ||
          r.forEach((l) => {
            const [o, i] = l;
            o === a && (e.removeEventListener(a, i), r.delete(l));
          });
      else if (!r || ![...r].some((l) => l[0] === a && l[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const l = r || new Set();
        l.add([a, t[n]]), Al.has(e) || Al.set(e, l);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Wp(e, t) {
  Object.keys(t).forEach((n) => {
    if (So(n)) {
      const a = qv(n),
        r = Al.get(e);
      r == null ||
        r.forEach((l) => {
          const [o, i] = l;
          o === a && (e.removeEventListener(a, i), r.delete(l));
        });
    } else e.removeAttribute(n);
  });
}
const Ba = 2.4,
  Lc = 0.2126729,
  Rc = 0.7151522,
  Fc = 0.072175,
  Gp = 0.55,
  Kp = 0.58,
  Yp = 0.57,
  qp = 0.62,
  Sl = 0.03,
  Nc = 1.45,
  Jp = 5e-4,
  Xp = 1.25,
  Zp = 1.25,
  Hc = 0.078,
  jc = 12.82051282051282,
  wl = 0.06,
  zc = 0.001;
function Uc(e, t) {
  const n = (e.r / 255) ** Ba,
    a = (e.g / 255) ** Ba,
    r = (e.b / 255) ** Ba,
    l = (t.r / 255) ** Ba,
    o = (t.g / 255) ** Ba,
    i = (t.b / 255) ** Ba;
  let s = n * Lc + a * Rc + r * Fc,
    u = l * Lc + o * Rc + i * Fc;
  if (
    (s <= Sl && (s += (Sl - s) ** Nc),
    u <= Sl && (u += (Sl - u) ** Nc),
    Math.abs(u - s) < Jp)
  )
    return 0;
  let c;
  if (u > s) {
    const d = (u ** Gp - s ** Kp) * Xp;
    c = d < zc ? 0 : d < Hc ? d - d * jc * wl : d - wl;
  } else {
    const d = (u ** qp - s ** Yp) * Zp;
    c = d > -zc ? 0 : d > -Hc ? d - d * jc * wl : d + wl;
  }
  return c * 100;
}
function Qp(e, t) {
  t = Array.isArray(t)
    ? t
        .slice(0, -1)
        .map((n) => `'${n}'`)
        .join(", ") + ` or '${t.at(-1)}'`
    : `'${t}'`;
}
const zl = 0.20689655172413793,
  e0 = (e) => (e > zl ** 3 ? Math.cbrt(e) : e / (3 * zl ** 2) + 4 / 29),
  t0 = (e) => (e > zl ? e ** 3 : 3 * zl ** 2 * (e - 4 / 29));
function em(e) {
  const t = e0,
    n = t(e[1]);
  return [
    116 * n - 16,
    500 * (t(e[0] / 0.95047) - n),
    200 * (n - t(e[2] / 1.08883)),
  ];
}
function tm(e) {
  const t = t0,
    n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const n0 = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ],
  a0 = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
  r0 = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  l0 = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function nm(e) {
  const t = Array(3),
    n = a0,
    a = n0;
  for (let r = 0; r < 3; ++r)
    t[r] = Math.round(
      Bt(n(a[r][0] * e[0] + a[r][1] * e[1] + a[r][2] * e[2])) * 255
    );
  return { r: t[0], g: t[1], b: t[2] };
}
function ru(e) {
  let { r: t, g: n, b: a } = e;
  const r = [0, 0, 0],
    l = l0,
    o = r0;
  (t = l(t / 255)), (n = l(n / 255)), (a = l(a / 255));
  for (let i = 0; i < 3; ++i) r[i] = o[i][0] * t + o[i][1] * n + o[i][2] * a;
  return r;
}
function Ji(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function o0(e) {
  return Ji(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Wc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
  i0 = {
    rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
    rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
    hsl: (e, t, n, a) => Gc({ h: e, s: t, l: n, a }),
    hsla: (e, t, n, a) => Gc({ h: e, s: t, l: n, a }),
    hsv: (e, t, n, a) => Rr({ h: e, s: t, v: n, a }),
    hsva: (e, t, n, a) => Rr({ h: e, s: t, v: n, a }),
  };
function Sn(e) {
  if (typeof e == "number")
    return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Wc.test(e)) {
    const { groups: t } = e.match(Wc),
      { fn: n, values: a } = t,
      r = a
        .split(/,\s*/)
        .map((l) =>
          l.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n)
            ? parseFloat(l) / 100
            : parseFloat(l)
        );
    return i0[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return (
      [3, 4].includes(t.length)
        ? (t = t
            .split("")
            .map((n) => n + n)
            .join(""))
        : [6, 8].includes(t.length),
      u0(t)
    );
  } else if (typeof e == "object") {
    if (ii(e, ["r", "g", "b"])) return e;
    if (ii(e, ["h", "s", "l"])) return Rr(am(e));
    if (ii(e, ["h", "s", "v"])) return Rr(e);
  }
  throw new TypeError(`Invalid color: ${
    e == null ? e : String(e) || e.constructor.name
  }
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Rr(e) {
  const { h: t, s: n, v: a, a: r } = e,
    l = (i) => {
      const s = (i + t / 60) % 6;
      return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
    },
    o = [l(5), l(3), l(1)].map((i) => Math.round(i * 255));
  return { r: o[0], g: o[1], b: o[2], a: r };
}
function Gc(e) {
  return Rr(am(e));
}
function am(e) {
  const { h: t, s: n, l: a, a: r } = e,
    l = a + n * Math.min(a, 1 - a),
    o = l === 0 ? 0 : 2 - (2 * a) / l;
  return { h: t, s: o, v: l, a: r };
}
function Cl(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function s0(e) {
  let { r: t, g: n, b: a, a: r } = e;
  return `#${[
    Cl(t),
    Cl(n),
    Cl(a),
    r !== void 0 ? Cl(Math.round(r * 255)) : "",
  ].join("")}`;
}
function u0(e) {
  e = c0(e);
  let [t, n, a, r] = Rp(e, 2).map((l) => parseInt(l, 16));
  return (r = r === void 0 ? r : r / 255), { r: t, g: n, b: a, a: r };
}
function c0(e) {
  return (
    e.startsWith("#") && (e = e.slice(1)),
    (e = e.replace(/([^0-9a-f])/gi, "F")),
    (e.length === 3 || e.length === 4) &&
      (e = e
        .split("")
        .map((t) => t + t)
        .join("")),
    e.length !== 6 && (e = Vc(Vc(e, 6), 8, "F")),
    e
  );
}
function d0(e, t) {
  const n = em(ru(e));
  return (n[0] = n[0] + t * 10), nm(tm(n));
}
function f0(e, t) {
  const n = em(ru(e));
  return (n[0] = n[0] - t * 10), nm(tm(n));
}
function v0(e) {
  const t = Sn(e);
  return ru(t)[1];
}
function rm(e) {
  const t = Math.abs(Uc(Sn(0), Sn(e)));
  return Math.abs(Uc(Sn(16777215), Sn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function K(e, t) {
  return (n) =>
    Object.keys(e).reduce((a, r) => {
      const o =
        typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r])
          ? e[r]
          : { type: e[r] };
      return (
        n && r in n ? (a[r] = { ...o, default: n[r] }) : (a[r] = o),
        t && !a[r].source && (a[r].source = t),
        a
      );
    }, {});
}
const ke = K(
  {
    class: [String, Array, Object],
    style: { type: [String, Array, Object], default: null },
  },
  "component"
);
function Ze(e, t) {
  const n = bo();
  if (!n)
    throw new Error(
      `[Vuetify] ${e} must be called from inside a setup function`
    );
  return n;
}
function Cn() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "composables";
  const t = Ze(e).type;
  return ha(
    (t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name)
  );
}
let lm = 0,
  Il = new WeakMap();
function Gt() {
  const e = Ze("getUid");
  if (Il.has(e)) return Il.get(e);
  {
    const t = lm++;
    return Il.set(e, t), t;
  }
}
Gt.reset = () => {
  (lm = 0), (Il = new WeakMap());
};
function m0(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : Ze("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const er = Symbol.for("vuetify:defaults");
function h0(e) {
  return W(e);
}
function lu() {
  const e = Ie(er);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ft(e, t) {
  const n = lu(),
    a = W(e),
    r = S(() => {
      if (Se(t == null ? void 0 : t.disabled)) return n.value;
      const o = Se(t == null ? void 0 : t.scoped),
        i = Se(t == null ? void 0 : t.reset),
        s = Se(t == null ? void 0 : t.root);
      if (a.value == null && !(o || i || s)) return n.value;
      let u = St(a.value, { prev: n.value });
      if (o) return u;
      if (i || s) {
        const c = Number(i || 1 / 0);
        for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
        return (
          u &&
            typeof s == "string" &&
            s in u &&
            (u = St(St(u, { prev: u }), u[s])),
          u
        );
      }
      return u.prev ? St(u.prev, u) : u;
    });
  return We(er, r), r;
}
function g0(e, t) {
  var n, a;
  return (
    typeof ((n = e.props) == null ? void 0 : n[t]) < "u" ||
    typeof ((a = e.props) == null ? void 0 : a[ha(t)]) < "u"
  );
}
function y0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lu();
  const a = Ze("useDefaults");
  if (((t = t ?? a.type.name ?? a.type.__name), !t))
    throw new Error("[Vuetify] Could not determine component name");
  const r = S(() => {
      var s;
      return (s = n.value) == null ? void 0 : s[e._as ?? t];
    }),
    l = new Proxy(e, {
      get(s, u) {
        var d, f, v, m, h, y, p;
        const c = Reflect.get(s, u);
        return u === "class" || u === "style"
          ? [(d = r.value) == null ? void 0 : d[u], c].filter((w) => w != null)
          : typeof u == "string" && !g0(a.vnode, u)
          ? ((f = r.value) == null ? void 0 : f[u]) !== void 0
            ? (v = r.value) == null
              ? void 0
              : v[u]
            : ((h = (m = n.value) == null ? void 0 : m.global) == null
                ? void 0
                : h[u]) !== void 0
            ? (p = (y = n.value) == null ? void 0 : y.global) == null
              ? void 0
              : p[u]
            : c
          : c;
      },
    }),
    o = he();
  vt(() => {
    if (r.value) {
      const s = Object.entries(r.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else o.value = void 0;
  });
  function i() {
    const s = m0(er, a);
    We(
      er,
      S(() =>
        o.value
          ? St((s == null ? void 0 : s.value) ?? {}, o.value)
          : s == null
          ? void 0
          : s.value
      )
    );
  }
  return { props: l, provideSubDefaults: i };
}
function ur(e) {
  if (((e._setup = e._setup ?? e.setup), !e.name)) return e;
  if (e._setup) {
    e.props = K(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter(
      (n) => n !== "class" && n !== "style"
    );
    (e.filterProps = function (a) {
      return Gv(a, t);
    }),
      (e.props._as = String),
      (e.setup = function (a, r) {
        const l = lu();
        if (!l.value) return e._setup(a, r);
        const { props: o, provideSubDefaults: i } = y0(a, a._as ?? e.name, l),
          s = e._setup(o, r);
        return i(), s;
      });
  }
  return e;
}
function fe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? ur : at)(t);
}
function b0(e, t) {
  return (t.props = e), t;
}
function Co(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div",
    n = arguments.length > 2 ? arguments[2] : void 0;
  return fe()({
    name: n ?? Pa(Rt(e.replace(/__/g, "-"))),
    props: { tag: { type: String, default: t }, ...ke() },
    setup(a, r) {
      let { slots: l } = r;
      return () => {
        var o;
        return aa(
          a.tag,
          { class: [e, a.class], style: a.style },
          (o = l.default) == null ? void 0 : o.call(l)
        );
      };
    },
  });
}
function om(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document
    ? null
    : t;
}
const Fr = "cubic-bezier(0.4, 0, 0.2, 1)",
  p0 = "cubic-bezier(0.0, 0, 0.2, 1)",
  S0 = "cubic-bezier(0.4, 0, 1, 1)";
function Kc(e, t, n) {
  return Object.keys(e)
    .filter((a) => So(a) && a.endsWith(t))
    .reduce(
      (a, r) => ((a[r.slice(0, -t.length)] = (l) => e[r](l, n(l))), a),
      {}
    );
}
function im(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? w0(e) : ou(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ul(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (ou(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function ou(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return (
    t.overflowY === "scroll" ||
    (t.overflowY === "auto" && e.scrollHeight > e.clientHeight)
  );
}
function w0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function C0(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return !0;
    e = e.offsetParent;
  }
  return !1;
}
function be(e) {
  const t = Ze("useRender");
  t.render = e;
}
function Ve(e, t, n) {
  let a =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d,
    r =
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const l = Ze("useProxiedModel"),
    o = W(e[t] !== void 0 ? e[t] : n),
    i = ha(t),
    u = S(
      i !== t
        ? () => {
            var d, f, v, m;
            return (
              e[t],
              !!(
                (((d = l.vnode.props) != null && d.hasOwnProperty(t)) ||
                  ((f = l.vnode.props) != null && f.hasOwnProperty(i))) &&
                (((v = l.vnode.props) != null &&
                  v.hasOwnProperty(`onUpdate:${t}`)) ||
                  ((m = l.vnode.props) != null &&
                    m.hasOwnProperty(`onUpdate:${i}`)))
              )
            );
          }
        : () => {
            var d, f;
            return (
              e[t],
              !!(
                (d = l.vnode.props) != null &&
                d.hasOwnProperty(t) &&
                (f = l.vnode.props) != null &&
                f.hasOwnProperty(`onUpdate:${t}`)
              )
            );
          }
    );
  Mt(
    () => !u.value,
    () => {
      ce(
        () => e[t],
        (d) => {
          o.value = d;
        }
      );
    }
  );
  const c = S({
    get() {
      const d = e[t];
      return a(u.value ? d : o.value);
    },
    set(d) {
      const f = r(d),
        v = xe(u.value ? e[t] : o.value);
      v === f ||
        a(v) === d ||
        ((o.value = f), l == null || l.emit(`update:${t}`, f));
    },
  });
  return (
    Object.defineProperty(c, "externalValue", {
      get: () => (u.value ? e[t] : o.value),
    }),
    c
  );
}
const x0 = {
    badge: "Badge",
    open: "Open",
    close: "Close",
    dismiss: "Dismiss",
    confirmEdit: { ok: "OK", cancel: "Cancel" },
    dataIterator: {
      noResultsText: "No matching records found",
      loadingText: "Loading items...",
    },
    dataTable: {
      itemsPerPageText: "Rows per page:",
      ariaLabel: {
        sortDescending: "Sorted descending.",
        sortAscending: "Sorted ascending.",
        sortNone: "Not sorted.",
        activateNone: "Activate to remove sorting.",
        activateDescending: "Activate to sort descending.",
        activateAscending: "Activate to sort ascending.",
      },
      sortBy: "Sort by",
    },
    dataFooter: {
      itemsPerPageText: "Items per page:",
      itemsPerPageAll: "All",
      nextPage: "Next page",
      prevPage: "Previous page",
      firstPage: "First page",
      lastPage: "Last page",
      pageText: "{0}-{1} of {2}",
    },
    dateRangeInput: { divider: "to" },
    datePicker: {
      itemsSelected: "{0} selected",
      range: { title: "Select dates", header: "Enter dates" },
      title: "Select date",
      header: "Enter date",
      input: { placeholder: "Enter date" },
    },
    noDataText: "No data available",
    carousel: {
      prev: "Previous visual",
      next: "Next visual",
      ariaLabel: { delimiter: "Carousel slide {0} of {1}" },
    },
    calendar: { moreEvents: "{0} more", today: "Today" },
    input: {
      clear: "Clear {0}",
      prependAction: "{0} prepended action",
      appendAction: "{0} appended action",
      otp: "Please enter OTP character {0}",
    },
    fileInput: {
      counter: "{0} files",
      counterSize: "{0} files ({1} in total)",
    },
    fileUpload: {
      title: "Drag and drop files here",
      divider: "or",
      browse: "Browse Files",
    },
    timePicker: { am: "AM", pm: "PM", title: "Select Time" },
    pagination: {
      ariaLabel: {
        root: "Pagination Navigation",
        next: "Next page",
        previous: "Previous page",
        page: "Go to page {0}",
        currentPage: "Page {0}, Current page",
        first: "First page",
        last: "Last page",
      },
    },
    stepper: { next: "Next", prev: "Previous" },
    rating: { ariaLabel: { item: "Rating {0} of {1}" } },
    loading: "Loading...",
    infiniteScroll: { loadMore: "Load more", empty: "No more" },
  },
  Yc = "$vuetify.",
  qc = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])),
  sm = (e, t, n) =>
    function (a) {
      for (
        var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), o = 1;
        o < r;
        o++
      )
        l[o - 1] = arguments[o];
      if (!a.startsWith(Yc)) return qc(a, l);
      const i = a.replace(Yc, ""),
        s = e.value && n.value[e.value],
        u = t.value && n.value[t.value];
      let c = xa(s, i, null);
      return (
        c || (`${a}${e.value}`, (c = xa(u, i, null))),
        c || (c = a),
        typeof c != "string" && (c = a),
        qc(c, l)
      );
    };
function um(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function ci(e, t, n) {
  const a = Ve(e, t, e[t] ?? n.value);
  return (
    (a.value = e[t] ?? n.value),
    ce(n, (r) => {
      e[t] == null && (a.value = n.value);
    }),
    a
  );
}
function cm(e) {
  return (t) => {
    const n = ci(t, "locale", e.current),
      a = ci(t, "fallback", e.fallback),
      r = ci(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: r,
      t: sm(n, a, r),
      n: um(n, a),
      provide: cm({ current: n, fallback: a, messages: r }),
    };
  };
}
function _0(e) {
  const t = he((e == null ? void 0 : e.locale) ?? "en"),
    n = he((e == null ? void 0 : e.fallback) ?? "en"),
    a = W({ en: x0, ...(e == null ? void 0 : e.messages) });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    t: sm(t, n, a),
    n: um(t, n),
    provide: cm({ current: t, fallback: n, messages: a }),
  };
}
const Wl = Symbol.for("vuetify:locale");
function k0(e) {
  return e.name != null;
}
function E0(e) {
  const t =
      e != null && e.adapter && k0(e == null ? void 0 : e.adapter)
        ? e == null
          ? void 0
          : e.adapter
        : _0(e),
    n = T0(t, e);
  return { ...t, ...n };
}
function un() {
  const e = Ie(Wl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function P0() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1,
  };
}
function T0(e, t) {
  const n = W((t == null ? void 0 : t.rtl) ?? P0()),
    a = S(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: S(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`),
  };
}
function Nt() {
  const e = Ie(Wl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const xo = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0,
};
function A0(e, t, n) {
  const a = [];
  let r = [];
  const l = dm(e),
    o = fm(e),
    i = n ?? xo[t.slice(-2).toUpperCase()] ?? 0,
    s = (l.getDay() - i + 7) % 7,
    u = (o.getDay() - i + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(l);
    d.setDate(d.getDate() - (s - c)), r.push(d);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    r.push(d), r.length === 7 && (a.push(r), (r = []));
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() + c), r.push(d);
  }
  return r.length > 0 && a.push(r), a;
}
function I0(e, t, n) {
  const a = n ?? xo[t.slice(-2).toUpperCase()] ?? 0,
    r = new Date(e);
  for (; r.getDay() !== a; ) r.setDate(r.getDate() - 1);
  return r;
}
function V0(e, t) {
  const n = new Date(e),
    a = ((xo[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function dm(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function fm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function D0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const O0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function vm(e) {
  if (e == null) return new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (O0.test(e)) return D0(e);
    if (((t = Date.parse(e)), !isNaN(t))) return new Date(t);
  }
  return null;
}
const Jc = new Date(2e3, 0, 2);
function $0(e, t) {
  const n = t ?? xo[e.slice(-2).toUpperCase()] ?? 0;
  return Ua(7).map((a) => {
    const r = new Date(Jc);
    return (
      r.setDate(Jc.getDate() + n + a),
      new Intl.DateTimeFormat(e, { weekday: "narrow" }).format(r)
    );
  });
}
function M0(e, t, n, a) {
  const r = vm(e) ?? new Date(),
    l = a == null ? void 0 : a[t];
  if (typeof l == "function") return l(r, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = { year: "numeric", month: "long", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      o = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const i = r.getDate(),
        s = new Intl.DateTimeFormat(n, { month: "long" }).format(r);
      return `${i} ${s}`;
    case "normalDateWithWeekday":
      o = { weekday: "short", day: "numeric", month: "short" };
      break;
    case "shortDate":
      o = { month: "short", day: "numeric" };
      break;
    case "year":
      o = { year: "numeric" };
      break;
    case "month":
      o = { month: "long" };
      break;
    case "monthShort":
      o = { month: "short" };
      break;
    case "monthAndYear":
      o = { month: "long", year: "numeric" };
      break;
    case "monthAndDate":
      o = { month: "long", day: "numeric" };
      break;
    case "weekday":
      o = { weekday: "long" };
      break;
    case "weekdayShort":
      o = { weekday: "short" };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(r.getDate());
    case "hours12h":
      o = { hour: "numeric", hour12: !0 };
      break;
    case "hours24h":
      o = { hour: "numeric", hour12: !1 };
      break;
    case "minutes":
      o = { minute: "numeric" };
      break;
    case "seconds":
      o = { second: "numeric" };
      break;
    case "fullTime":
      o = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !0 };
      break;
    case "fullTime12h":
      o = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !0 };
      break;
    case "fullTime24h":
      o = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !1 };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    case "keyboardDate":
      o = { year: "numeric", month: "2-digit", day: "2-digit" };
      break;
    case "keyboardDateTime":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    case "keyboardDateTime12h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "keyboardDateTime24h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    default:
      o = l ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, o).format(r);
}
function B0(e, t) {
  const n = e.toJsDate(t),
    a = n.getFullYear(),
    r = Dc(String(n.getMonth() + 1), 2, "0"),
    l = Dc(String(n.getDate()), 2, "0");
  return `${a}-${r}-${l}`;
}
function L0(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function R0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function F0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function N0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function H0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function j0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function z0(e) {
  return e.getFullYear();
}
function U0(e) {
  return e.getMonth();
}
function W0(e) {
  return e.getDate();
}
function G0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function K0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Y0(e) {
  return e.getHours();
}
function q0(e) {
  return e.getMinutes();
}
function J0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function X0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Z0(e, t) {
  return Gl(e, t[0]) && tS(e, t[1]);
}
function Q0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Gl(e, t) {
  return e.getTime() > t.getTime();
}
function eS(e, t) {
  return Gl(Xi(e), Xi(t));
}
function tS(e, t) {
  return e.getTime() < t.getTime();
}
function Xc(e, t) {
  return e.getTime() === t.getTime();
}
function nS(e, t) {
  return (
    e.getDate() === t.getDate() &&
    e.getMonth() === t.getMonth() &&
    e.getFullYear() === t.getFullYear()
  );
}
function aS(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function rS(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function lS(e, t, n) {
  const a = new Date(e),
    r = new Date(t);
  switch (n) {
    case "years":
      return a.getFullYear() - r.getFullYear();
    case "quarters":
      return Math.floor(
        (a.getMonth() -
          r.getMonth() +
          (a.getFullYear() - r.getFullYear()) * 12) /
          4
      );
    case "months":
      return (
        a.getMonth() - r.getMonth() + (a.getFullYear() - r.getFullYear()) * 12
      );
    case "weeks":
      return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - r.getTime()) / 1e3);
    default:
      return a.getTime() - r.getTime();
  }
}
function oS(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function iS(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function sS(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function uS(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function cS(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Xi(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function dS(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class fS {
  constructor(t) {
    (this.locale = t.locale), (this.formats = t.formats);
  }
  date(t) {
    return vm(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return B0(this, t);
  }
  parseISO(t) {
    return L0(t);
  }
  addMinutes(t, n) {
    return R0(t, n);
  }
  addHours(t, n) {
    return F0(t, n);
  }
  addDays(t, n) {
    return N0(t, n);
  }
  addWeeks(t, n) {
    return H0(t, n);
  }
  addMonths(t, n) {
    return j0(t, n);
  }
  getWeekArray(t, n) {
    return A0(t, this.locale, n ? Number(n) : void 0);
  }
  startOfWeek(t, n) {
    return I0(t, this.locale, n ? Number(n) : void 0);
  }
  endOfWeek(t) {
    return V0(t, this.locale);
  }
  startOfMonth(t) {
    return dm(t);
  }
  endOfMonth(t) {
    return fm(t);
  }
  format(t, n) {
    return M0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Xc(t, n);
  }
  isValid(t) {
    return Q0(t);
  }
  isWithinRange(t, n) {
    return Z0(t, n);
  }
  isAfter(t, n) {
    return Gl(t, n);
  }
  isAfterDay(t, n) {
    return eS(t, n);
  }
  isBefore(t, n) {
    return !Gl(t, n) && !Xc(t, n);
  }
  isSameDay(t, n) {
    return nS(t, n);
  }
  isSameMonth(t, n) {
    return aS(t, n);
  }
  isSameYear(t, n) {
    return rS(t, n);
  }
  setMinutes(t, n) {
    return iS(t, n);
  }
  setHours(t, n) {
    return oS(t, n);
  }
  setMonth(t, n) {
    return sS(t, n);
  }
  setDate(t, n) {
    return uS(t, n);
  }
  setYear(t, n) {
    return cS(t, n);
  }
  getDiff(t, n, a) {
    return lS(t, n, a);
  }
  getWeekdays(t) {
    return $0(this.locale, t ? Number(t) : void 0);
  }
  getYear(t) {
    return z0(t);
  }
  getMonth(t) {
    return U0(t);
  }
  getDate(t) {
    return W0(t);
  }
  getNextMonth(t) {
    return G0(t);
  }
  getPreviousMonth(t) {
    return K0(t);
  }
  getHours(t) {
    return Y0(t);
  }
  getMinutes(t) {
    return q0(t);
  }
  startOfDay(t) {
    return Xi(t);
  }
  endOfDay(t) {
    return dS(t);
  }
  startOfYear(t) {
    return J0(t);
  }
  endOfYear(t) {
    return X0(t);
  }
}
const vS = Symbol.for("vuetify:date-options"),
  Zc = Symbol.for("vuetify:date-adapter");
function mS(e, t) {
  const n = St(
    {
      adapter: fS,
      locale: {
        af: "af-ZA",
        bg: "bg-BG",
        ca: "ca-ES",
        ckb: "",
        cs: "cs-CZ",
        de: "de-DE",
        el: "el-GR",
        en: "en-US",
        et: "et-EE",
        fa: "fa-IR",
        fi: "fi-FI",
        hr: "hr-HR",
        hu: "hu-HU",
        he: "he-IL",
        id: "id-ID",
        it: "it-IT",
        ja: "ja-JP",
        ko: "ko-KR",
        lv: "lv-LV",
        lt: "lt-LT",
        nl: "nl-NL",
        no: "no-NO",
        pl: "pl-PL",
        pt: "pt-PT",
        ro: "ro-RO",
        ru: "ru-RU",
        sk: "sk-SK",
        sl: "sl-SI",
        srCyrl: "sr-SP",
        srLatn: "sr-SP",
        sv: "sv-SE",
        th: "th-TH",
        tr: "tr-TR",
        az: "az-AZ",
        uk: "uk-UA",
        vi: "vi-VN",
        zhHans: "zh-CN",
        zhHant: "zh-TW",
      },
    },
    e
  );
  return { options: n, instance: hS(n, t) };
}
function hS(e, t) {
  const n = lt(
    typeof e.adapter == "function"
      ? new e.adapter({
          locale: e.locale[t.current.value] ?? t.current.value,
          formats: e.formats,
        })
      : e.adapter
  );
  return (
    ce(t.current, (a) => {
      n.locale = e.locale[a] ?? a ?? n.locale;
    }),
    n
  );
}
const wP = ["sm", "md", "lg", "xl", "xxl"],
  Zi = Symbol.for("vuetify:display"),
  Qc = {
    mobileBreakpoint: "lg",
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
  },
  gS = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qc;
    return St(Qc, e);
  };
function ed(e) {
  return Me && !e
    ? window.innerWidth
    : (typeof e == "object" && e.clientWidth) || 0;
}
function td(e) {
  return Me && !e
    ? window.innerHeight
    : (typeof e == "object" && e.clientHeight) || 0;
}
function nd(e) {
  const t = Me && !e ? window.navigator.userAgent : "ssr";
  function n(m) {
    return !!t.match(m);
  }
  const a = n(/android/i),
    r = n(/iphone|ipad|ipod/i),
    l = n(/cordova/i),
    o = n(/electron/i),
    i = n(/chrome/i),
    s = n(/edge/i),
    u = n(/firefox/i),
    c = n(/opera/i),
    d = n(/win/i),
    f = n(/mac/i),
    v = n(/linux/i);
  return {
    android: a,
    ios: r,
    cordova: l,
    electron: o,
    chrome: i,
    edge: s,
    firefox: u,
    opera: c,
    win: d,
    mac: f,
    linux: v,
    touch: Dp,
    ssr: t === "ssr",
  };
}
function yS(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = gS(e),
    r = he(td(t)),
    l = he(nd(t)),
    o = lt({}),
    i = he(ed(t));
  function s() {
    (r.value = td()), (i.value = ed());
  }
  function u() {
    s(), (l.value = nd());
  }
  return (
    vt(() => {
      const c = i.value < n.sm,
        d = i.value < n.md && !c,
        f = i.value < n.lg && !(d || c),
        v = i.value < n.xl && !(f || d || c),
        m = i.value < n.xxl && !(v || f || d || c),
        h = i.value >= n.xxl,
        y = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : m ? "xl" : "xxl",
        p = typeof a == "number" ? a : n[a],
        w = i.value < p;
      (o.xs = c),
        (o.sm = d),
        (o.md = f),
        (o.lg = v),
        (o.xl = m),
        (o.xxl = h),
        (o.smAndUp = !c),
        (o.mdAndUp = !(c || d)),
        (o.lgAndUp = !(c || d || f)),
        (o.xlAndUp = !(c || d || f || v)),
        (o.smAndDown = !(f || v || m || h)),
        (o.mdAndDown = !(v || m || h)),
        (o.lgAndDown = !(m || h)),
        (o.xlAndDown = !h),
        (o.name = y),
        (o.height = r.value),
        (o.width = i.value),
        (o.mobile = w),
        (o.mobileBreakpoint = a),
        (o.platform = l.value),
        (o.thresholds = n);
    }),
    Me && window.addEventListener("resize", s, { passive: !0 }),
    { ...sr(o), update: u, ssr: !!t }
  );
}
const al = K(
  {
    mobile: { type: Boolean, default: !1 },
    mobileBreakpoint: [Number, String],
  },
  "display"
);
function Rn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  const n = Ie(Zi);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = S(() => {
      if (e.mobile != null) return e.mobile;
      if (!e.mobileBreakpoint) return n.mobile.value;
      const l =
        typeof e.mobileBreakpoint == "number"
          ? e.mobileBreakpoint
          : n.thresholds.value[e.mobileBreakpoint];
      return n.width.value < l;
    }),
    r = S(() => (t ? { [`${t}--mobile`]: a.value } : {}));
  return { ...n, displayClasses: r, mobile: a };
}
const mm = Symbol.for("vuetify:goto");
function hm() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => (--e) ** 3 + 1,
      easeInOutCubic: (e) =>
        e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - (--e) ** 4,
      easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + (--e) ** 5,
      easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5),
    },
  };
}
function bS(e) {
  return iu(e) ?? (document.scrollingElement || document.body);
}
function iu(e) {
  return typeof e == "string" ? document.querySelector(e) : eu(e);
}
function di(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = iu(e),
    r = 0;
  for (; a; ) (r += t ? a.offsetLeft : a.offsetTop), (a = a.offsetParent);
  return r;
}
function pS(e, t) {
  return { rtl: t.isRtl, options: St(hm(), e) };
}
async function ad(e, t, n, a) {
  const r = n ? "scrollLeft" : "scrollTop",
    l = St((a == null ? void 0 : a.options) ?? hm(), t),
    o = a == null ? void 0 : a.rtl.value,
    i = (typeof e == "number" ? e : iu(e)) ?? 0,
    s =
      l.container === "parent" && i instanceof HTMLElement
        ? i.parentElement
        : bS(l.container),
    u = typeof l.easing == "function" ? l.easing : l.patterns[l.easing];
  if (!u) throw new TypeError(`Easing function "${l.easing}" not found.`);
  let c;
  if (typeof i == "number") c = di(i, n, o);
  else if (((c = di(i, n, o) - di(s, n, o)), l.layout)) {
    const m = window.getComputedStyle(i).getPropertyValue("--v-layout-top");
    m && (c -= parseInt(m, 10));
  }
  (c += l.offset), (c = wS(s, c, !!o, !!n));
  const d = s[r] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) =>
    requestAnimationFrame(function m(h) {
      const p = (h - f) / l.duration,
        w = Math.floor(d + (c - d) * u(Bt(p, 0, 1)));
      if (((s[r] = w), p >= 1 && Math.abs(w - s[r]) < 10)) return v(c);
      if (p > 2) return v(s[r]);
      requestAnimationFrame(m);
    })
  );
}
function SS() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Ie(mm),
    { isRtl: n } = Nt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: S(() => t.rtl.value || n.value) };
  async function r(l, o) {
    return ad(l, St(e, o), !1, a);
  }
  return (r.horizontal = async (l, o) => ad(l, St(e, o), !0, a)), r;
}
function wS(e, t, n, a) {
  const { scrollWidth: r, scrollHeight: l } = e,
    [o, i] =
      e === document.scrollingElement
        ? [window.innerWidth, window.innerHeight]
        : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return (
    a
      ? n
        ? ((s = -(r - o)), (u = 0))
        : ((s = 0), (u = r - o))
      : ((s = 0), (u = l + -i)),
    Math.max(Math.min(t, u), s)
  );
}
const CS = {
    collapse: "mdi-chevron-up",
    complete: "mdi-check",
    cancel: "mdi-close-circle",
    close: "mdi-close",
    delete: "mdi-close-circle",
    clear: "mdi-close-circle",
    success: "mdi-check-circle",
    info: "mdi-information",
    warning: "mdi-alert-circle",
    error: "mdi-close-circle",
    prev: "mdi-chevron-left",
    next: "mdi-chevron-right",
    checkboxOn: "mdi-checkbox-marked",
    checkboxOff: "mdi-checkbox-blank-outline",
    checkboxIndeterminate: "mdi-minus-box",
    delimiter: "mdi-circle",
    sortAsc: "mdi-arrow-up",
    sortDesc: "mdi-arrow-down",
    expand: "mdi-chevron-down",
    menu: "mdi-menu",
    subgroup: "mdi-menu-down",
    dropdown: "mdi-menu-down",
    radioOn: "mdi-radiobox-marked",
    radioOff: "mdi-radiobox-blank",
    edit: "mdi-pencil",
    ratingEmpty: "mdi-star-outline",
    ratingFull: "mdi-star",
    ratingHalf: "mdi-star-half-full",
    loading: "mdi-cached",
    first: "mdi-page-first",
    last: "mdi-page-last",
    unfold: "mdi-unfold-more-horizontal",
    file: "mdi-paperclip",
    plus: "mdi-plus",
    minus: "mdi-minus",
    calendar: "mdi-calendar",
    treeviewCollapse: "mdi-menu-down",
    treeviewExpand: "mdi-menu-right",
    eyeDropper: "mdi-eyedropper",
    upload: "mdi-cloud-upload",
  },
  xS = { component: (e) => aa(ym, { ...e, class: "mdi" }) },
  Ae = [String, Function, Object, Array],
  Qi = Symbol.for("vuetify:icons"),
  _o = K({ icon: { type: Ae }, tag: { type: String, required: !0 } }, "icon"),
  rd = fe()({
    name: "VComponentIcon",
    props: _o(),
    setup(e, t) {
      let { slots: n } = t;
      return () => {
        const a = e.icon;
        return g(e.tag, null, {
          default: () => {
            var r;
            return [
              e.icon
                ? g(a, null, null)
                : (r = n.default) == null
                ? void 0
                : r.call(n),
            ];
          },
        });
      };
    },
  }),
  gm = ur({
    name: "VSvgIcon",
    inheritAttrs: !1,
    props: _o(),
    setup(e, t) {
      let { attrs: n } = t;
      return () =>
        g(e.tag, le(n, { style: null }), {
          default: () => [
            g(
              "svg",
              {
                class: "v-icon__svg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true",
              },
              [
                Array.isArray(e.icon)
                  ? e.icon.map((a) =>
                      Array.isArray(a)
                        ? g("path", { d: a[0], "fill-opacity": a[1] }, null)
                        : g("path", { d: a }, null)
                    )
                  : g("path", { d: e.icon }, null),
              ]
            ),
          ],
        });
    },
  });
ur({
  name: "VLigatureIcon",
  props: _o(),
  setup(e) {
    return () => g(e.tag, null, { default: () => [e.icon] });
  },
});
const ym = ur({
  name: "VClassIcon",
  props: _o(),
  setup(e) {
    return () => g(e.tag, { class: e.icon }, null);
  },
});
function _S() {
  return { svg: { component: gm }, class: { component: ym } };
}
function kS(e) {
  const t = _S(),
    n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return (
    n === "mdi" && !t.mdi && (t.mdi = xS),
    St(
      {
        defaultSet: n,
        sets: t,
        aliases: {
          ...CS,
          vuetify: [
            "M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",
            [
              "M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",
              0.6,
            ],
          ],
          "vuetify-outline":
            "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
          "vuetify-play": [
            "m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",
            [
              "M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",
              0.6,
            ],
          ],
        },
      },
      e
    )
  );
}
const ES = (e) => {
    const t = Ie(Qi);
    if (!t) throw new Error("Missing Vuetify Icons provide!");
    return {
      iconData: S(() => {
        var s;
        const a = Se(e);
        if (!a) return { component: rd };
        let r = a;
        if (
          (typeof r == "string" &&
            ((r = r.trim()),
            r.startsWith("$") &&
              (r = (s = t.aliases) == null ? void 0 : s[r.slice(1)])),
          Array.isArray(r))
        )
          return { component: gm, icon: r };
        if (typeof r != "string") return { component: rd, icon: r };
        const l = Object.keys(t.sets).find(
            (u) => typeof r == "string" && r.startsWith(`${u}:`)
          ),
          o = l ? r.slice(l.length + 1) : r;
        return { component: t.sets[l ?? t.defaultSet].component, icon: o };
      }),
    };
  },
  Nr = Symbol.for("vuetify:theme"),
  Ge = K({ theme: String }, "theme");
function ld() {
  return {
    defaultTheme: "light",
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000",
        },
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC",
        },
      },
    },
  };
}
function PS() {
  var a, r;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ld();
  const t = ld();
  if (!e) return { ...t, isDisabled: !0 };
  const n = {};
  for (const [l, o] of Object.entries(e.themes ?? {})) {
    const i =
      o.dark || l === "dark"
        ? (a = t.themes) == null
          ? void 0
          : a.dark
        : (r = t.themes) == null
        ? void 0
        : r.light;
    n[l] = St(i, o);
  }
  return St(t, { ...e, themes: n });
}
function TS(e) {
  const t = PS(e),
    n = W(t.defaultTheme),
    a = W(t.themes),
    r = S(() => {
      const c = {};
      for (const [d, f] of Object.entries(a.value)) {
        const v = (c[d] = { ...f, colors: { ...f.colors } });
        if (t.variations)
          for (const m of t.variations.colors) {
            const h = v.colors[m];
            if (h)
              for (const y of ["lighten", "darken"]) {
                const p = y === "lighten" ? d0 : f0;
                for (const w of Ua(t.variations[y], 1))
                  v.colors[`${m}-${y}-${w}`] = s0(p(Sn(h), w));
              }
          }
        for (const m of Object.keys(v.colors)) {
          if (/^on-[a-z]/.test(m) || v.colors[`on-${m}`]) continue;
          const h = `on-${m}`,
            y = Sn(v.colors[m]);
          v.colors[h] = rm(y);
        }
      }
      return c;
    }),
    l = S(() => r.value[n.value]),
    o = S(() => {
      var m;
      const c = [];
      (m = l.value) != null && m.dark && ua(c, ":root", ["color-scheme: dark"]),
        ua(c, ":root", od(l.value));
      for (const [h, y] of Object.entries(r.value))
        ua(c, `.v-theme--${h}`, [
          `color-scheme: ${y.dark ? "dark" : "normal"}`,
          ...od(y),
        ]);
      const d = [],
        f = [],
        v = new Set(
          Object.values(r.value).flatMap((h) => Object.keys(h.colors))
        );
      for (const h of v)
        /^on-[a-z]/.test(h)
          ? ua(f, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`])
          : (ua(d, `.bg-${h}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,
              `background-color: rgb(var(--v-theme-${h})) !important`,
              `color: rgb(var(--v-theme-on-${h})) !important`,
            ]),
            ua(f, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]),
            ua(f, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
      return (
        c.push(...d, ...f), c.map((h, y) => (y === 0 ? h : `    ${h}`)).join("")
      );
    });
  function i() {
    return {
      style: [
        {
          children: o.value,
          id: "vuetify-theme-stylesheet",
          nonce: t.cspNonce || !1,
        },
      ],
    };
  }
  function s(c) {
    if (t.isDisabled) return;
    const d = c._context.provides.usehead;
    if (d)
      if (d.push) {
        const f = d.push(i);
        Me &&
          ce(o, () => {
            f.patch(i);
          });
      } else
        Me
          ? (d.addHeadObjs(S(i)), vt(() => d.updateDOM()))
          : d.addHeadObjs(i());
    else {
      let v = function () {
          if (typeof document < "u" && !f) {
            const m = document.createElement("style");
            (m.type = "text/css"),
              (m.id = "vuetify-theme-stylesheet"),
              t.cspNonce && m.setAttribute("nonce", t.cspNonce),
              (f = m),
              document.head.appendChild(f);
          }
          f && (f.innerHTML = o.value);
        },
        f = Me ? document.getElementById("vuetify-theme-stylesheet") : null;
      Me ? ce(o, v, { immediate: !0 }) : v();
    }
  }
  const u = S(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`));
  return {
    install: s,
    isDisabled: t.isDisabled,
    name: n,
    themes: a,
    current: l,
    computedThemes: r,
    themeClasses: u,
    styles: o,
    global: { name: n, current: l },
  };
}
function Qe(e) {
  Ze("provideTheme");
  const t = Ie(Nr, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = S(() => e.theme ?? t.name.value),
    a = S(() => t.themes.value[n.value]),
    r = S(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`)),
    l = { ...t, name: n, current: a, themeClasses: r };
  return We(Nr, l), l;
}
function AS() {
  Ze("useTheme");
  const e = Ie(Nr, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function ua(e, t, n) {
  e.push(
    `${t} {
`,
    ...n.map(
      (a) => `  ${a};
`
    ),
    `}
`
  );
}
function od(e) {
  const t = e.dark ? 2 : 1,
    n = e.dark ? 1 : 2,
    a = [];
  for (const [r, l] of Object.entries(e.colors)) {
    const o = Sn(l);
    a.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),
      r.startsWith("on-") ||
        a.push(`--v-theme-${r}-overlay-multiplier: ${v0(l) > 0.18 ? t : n}`);
  }
  for (const [r, l] of Object.entries(e.variables)) {
    const o = typeof l == "string" && l.startsWith("#") ? Sn(l) : void 0,
      i = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    a.push(`--v-${r}: ${i ?? l}`);
  }
  return a;
}
function Xn(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Gi(),
    a = W();
  if (Me) {
    const r = new ResizeObserver((l) => {
      e == null || e(l, r),
        l.length &&
          (t === "content"
            ? (a.value = l[0].contentRect)
            : (a.value = l[0].target.getBoundingClientRect()));
    });
    rt(() => {
      r.disconnect();
    }),
      ce(
        () => n.el,
        (l, o) => {
          o && (r.unobserve(o), (a.value = void 0)), l && r.observe(l);
        },
        { flush: "post" }
      );
  }
  return { resizeRef: n, contentRect: Dt(a) };
}
const Hr = Symbol.for("vuetify:layout"),
  bm = Symbol.for("vuetify:layout-item"),
  id = 1e3,
  pm = K(
    { overlaps: { type: Array, default: () => [] }, fullHeight: Boolean },
    "layout"
  ),
  ko = K(
    {
      name: { type: String },
      order: { type: [Number, String], default: 0 },
      absolute: Boolean,
    },
    "layout-item"
  );
function Sm() {
  const e = Ie(Hr);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles,
  };
}
function Eo(e) {
  const t = Ie(Hr);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Gt()}`,
    a = Ze("useLayoutItem");
  We(bm, { id: n });
  const r = he(!1);
  ho(() => (r.value = !0)), Ns(() => (r.value = !1));
  const { layoutItemStyles: l, layoutItemScrimStyles: o } = t.register(a, {
    ...e,
    active: S(() => (r.value ? !1 : e.active.value)),
    id: n,
  });
  return (
    rt(() => t.unregister(n)),
    { layoutItemStyles: l, layoutRect: t.layoutRect, layoutItemScrimStyles: o }
  );
}
const IS = (e, t, n, a) => {
  let r = { top: 0, left: 0, right: 0, bottom: 0 };
  const l = [{ id: "", layer: { ...r } }];
  for (const o of e) {
    const i = t.get(o),
      s = n.get(o),
      u = a.get(o);
    if (!i || !s || !u) continue;
    const c = {
      ...r,
      [i.value]:
        parseInt(r[i.value], 10) + (u.value ? parseInt(s.value, 10) : 0),
    };
    l.push({ id: o, layer: c }), (r = c);
  }
  return l;
};
function wm(e) {
  const t = Ie(Hr, null),
    n = S(() => (t ? t.rootZIndex.value - 100 : id)),
    a = W([]),
    r = lt(new Map()),
    l = lt(new Map()),
    o = lt(new Map()),
    i = lt(new Map()),
    s = lt(new Map()),
    { resizeRef: u, contentRect: c } = Xn(),
    d = S(() => {
      const V = new Map(),
        A = e.overlaps ?? [];
      for (const b of A.filter((C) => C.includes(":"))) {
        const [C, D] = b.split(":");
        if (!a.value.includes(C) || !a.value.includes(D)) continue;
        const P = r.get(C),
          I = r.get(D),
          $ = l.get(C),
          M = l.get(D);
        !P ||
          !I ||
          !$ ||
          !M ||
          (V.set(D, { position: P.value, amount: parseInt($.value, 10) }),
          V.set(C, { position: I.value, amount: -parseInt(M.value, 10) }));
      }
      return V;
    }),
    f = S(() => {
      const V = [...new Set([...o.values()].map((b) => b.value))].sort(
          (b, C) => b - C
        ),
        A = [];
      for (const b of V) {
        const C = a.value.filter((D) => {
          var P;
          return ((P = o.get(D)) == null ? void 0 : P.value) === b;
        });
        A.push(...C);
      }
      return IS(A, r, l, i);
    }),
    v = S(() => !Array.from(s.values()).some((V) => V.value)),
    m = S(() => f.value[f.value.length - 1].layer),
    h = S(() => ({
      "--v-layout-left": pe(m.value.left),
      "--v-layout-right": pe(m.value.right),
      "--v-layout-top": pe(m.value.top),
      "--v-layout-bottom": pe(m.value.bottom),
      ...(v.value ? void 0 : { transition: "none" }),
    })),
    y = S(() =>
      f.value.slice(1).map((V, A) => {
        let { id: b } = V;
        const { layer: C } = f.value[A],
          D = l.get(b),
          P = r.get(b);
        return { id: b, ...C, size: Number(D.value), position: P.value };
      })
    ),
    p = (V) => y.value.find((A) => A.id === V),
    w = Ze("createLayout"),
    x = he(!1);
  Wt(() => {
    x.value = !0;
  }),
    We(Hr, {
      register: (V, A) => {
        let {
          id: b,
          order: C,
          position: D,
          layoutSize: P,
          elementSize: I,
          active: $,
          disableTransitions: M,
          absolute: N,
        } = A;
        o.set(b, C), r.set(b, D), l.set(b, P), i.set(b, $), M && s.set(b, M);
        const j = Wa(bm, w == null ? void 0 : w.vnode).indexOf(V);
        j > -1 ? a.value.splice(j, 0, b) : a.value.push(b);
        const H = S(() => y.value.findIndex((G) => G.id === b)),
          z = S(() => n.value + f.value.length * 2 - H.value * 2),
          O = S(() => {
            const G = D.value === "left" || D.value === "right",
              oe = D.value === "right",
              X = D.value === "bottom",
              ve = I.value ?? P.value,
              re = ve === 0 ? "%" : "px",
              F = {
                [D.value]: 0,
                zIndex: z.value,
                transform: `translate${G ? "X" : "Y"}(${
                  ($.value ? 0 : -(ve === 0 ? 100 : ve)) * (oe || X ? -1 : 1)
                }${re})`,
                position: N.value || n.value !== id ? "absolute" : "fixed",
                ...(v.value ? void 0 : { transition: "none" }),
              };
            if (!x.value) return F;
            const Z = y.value[H.value];
            if (!Z)
              throw new Error(`[Vuetify] Could not find layout item "${b}"`);
            const ee = d.value.get(b);
            return (
              ee && (Z[ee.position] += ee.amount),
              {
                ...F,
                height: G
                  ? `calc(100% - ${Z.top}px - ${Z.bottom}px)`
                  : I.value
                  ? `${I.value}px`
                  : void 0,
                left: oe ? void 0 : `${Z.left}px`,
                right: oe ? `${Z.right}px` : void 0,
                top: D.value !== "bottom" ? `${Z.top}px` : void 0,
                bottom: D.value !== "top" ? `${Z.bottom}px` : void 0,
                width: G
                  ? I.value
                    ? `${I.value}px`
                    : void 0
                  : `calc(100% - ${Z.left}px - ${Z.right}px)`,
              }
            );
          }),
          L = S(() => ({ zIndex: z.value - 1 }));
        return { layoutItemStyles: O, layoutItemScrimStyles: L, zIndex: z };
      },
      unregister: (V) => {
        o.delete(V),
          r.delete(V),
          l.delete(V),
          i.delete(V),
          s.delete(V),
          (a.value = a.value.filter((A) => A !== V));
      },
      mainRect: m,
      mainStyles: h,
      getLayoutItem: p,
      items: y,
      layoutRect: c,
      rootZIndex: n,
    });
  const E = S(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]),
    k = S(() => ({
      zIndex: t ? n.value : void 0,
      position: t ? "relative" : void 0,
      overflow: t ? "hidden" : void 0,
    }));
  return {
    layoutClasses: E,
    layoutStyles: k,
    getLayoutItem: p,
    items: y,
    layoutRect: c,
    layoutRef: u,
  };
}
function Cm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e,
    a = St(t, n),
    { aliases: r = {}, components: l = {}, directives: o = {} } = a,
    i = h0(a.defaults),
    s = yS(a.display, a.ssr),
    u = TS(a.theme),
    c = kS(a.icons),
    d = E0(a.locale),
    f = mS(a.date, d),
    v = pS(a.goTo, d);
  return {
    install: (h) => {
      for (const y in o) h.directive(y, o[y]);
      for (const y in l) h.component(y, l[y]);
      for (const y in r)
        h.component(y, ur({ ...r[y], name: y, aliasName: r[y].name }));
      if (
        (u.install(h),
        h.provide(er, i),
        h.provide(Zi, s),
        h.provide(Nr, u),
        h.provide(Qi, c),
        h.provide(Wl, d),
        h.provide(vS, f.options),
        h.provide(Zc, f.instance),
        h.provide(mm, v),
        Me && a.ssr)
      )
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const { mount: y } = h;
          h.mount = function () {
            const p = y(...arguments);
            return ze(() => s.update()), (h.mount = y), p;
          };
        }
      Gt.reset(),
        h.mixin({
          computed: {
            $vuetify() {
              return lt({
                defaults: La.call(this, er),
                display: La.call(this, Zi),
                theme: La.call(this, Nr),
                icons: La.call(this, Qi),
                locale: La.call(this, Wl),
                date: La.call(this, Zc),
              });
            },
          },
        });
    },
    defaults: i,
    display: s,
    theme: u,
    icons: c,
    locale: d,
    date: f,
    goTo: v,
  };
}
const VS = "3.7.6";
Cm.version = VS;
function La(e) {
  var a, r;
  const t = this.$,
    n =
      ((a = t.parent) == null ? void 0 : a.provides) ??
      ((r = t.vnode.appContext) == null ? void 0 : r.provides);
  if (n && e in n) return n[e];
}
const DS = Cm({
  defaults: {
    VTextField: { variant: "solo" },
    VSelect: { variant: "solo" },
    VTextarea: { variant: "solo" },
    VBtn: { style: "text-transform: none;", elevation: 0, rounded: "pill" },
  },
  theme: {
    defaultTheme: "finda",
    themes: {
      finda: {
        colors: {
          primary: "#D8006B",
          secondary: "#C0D645",
          background: "#333333",
          "on-background": "#ffffff",
          surface: "#fff",
          "on-surface": "#707070",
          black: "#000000",
          white: "#ffffff",
        },
      },
    },
  },
});
var OS = !1;
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let xm;
const Po = (e) => (xm = e),
  _m = Symbol();
function es(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Tr;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Tr || (Tr = {}));
function $S() {
  const e = Jr(!0),
    t = e.run(() => W({}));
  let n = [],
    a = [];
  const r = vo({
    install(l) {
      Po(r),
        (r._a = l),
        l.provide(_m, r),
        (l.config.globalProperties.$pinia = r),
        a.forEach((o) => n.push(o)),
        (a = []);
    },
    use(l) {
      return !this._a && !OS ? a.push(l) : n.push(l), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const km = () => {};
function sd(e, t, n, a = km) {
  e.push(t);
  const r = () => {
    const l = e.indexOf(t);
    l > -1 && (e.splice(l, 1), a());
  };
  return !n && Af() && mt(r), r;
}
function Ra(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const MS = (e) => e(),
  ud = Symbol(),
  fi = Symbol();
function ts(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, a) => e.set(a, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const a = t[n],
      r = e[n];
    es(r) && es(a) && e.hasOwnProperty(n) && !Be(a) && !Yn(a)
      ? (e[n] = ts(r, a))
      : (e[n] = a);
  }
  return e;
}
const BS = Symbol();
function LS(e) {
  return !es(e) || !e.hasOwnProperty(BS);
}
const { assign: jn } = Object;
function RS(e) {
  return !!(Be(e) && e.effect);
}
function FS(e, t, n, a) {
  const { state: r, actions: l, getters: o } = t,
    i = n.state.value[e];
  let s;
  function u() {
    i || (n.state.value[e] = r ? r() : {});
    const c = sr(n.state.value[e]);
    return jn(
      c,
      l,
      Object.keys(o || {}).reduce(
        (d, f) => (
          (d[f] = vo(
            S(() => {
              Po(n);
              const v = n._s.get(e);
              return o[f].call(v, v);
            })
          )),
          d
        ),
        {}
      )
    );
  }
  return (s = Em(e, u, t, n, a, !0)), s;
}
function Em(e, t, n = {}, a, r, l) {
  let o;
  const i = jn({ actions: {} }, n),
    s = { deep: !0 };
  let u,
    c,
    d = [],
    f = [],
    v;
  const m = a.state.value[e];
  !l && !m && (a.state.value[e] = {}), W({});
  let h;
  function y(b) {
    let C;
    (u = c = !1),
      typeof b == "function"
        ? (b(a.state.value[e]),
          (C = { type: Tr.patchFunction, storeId: e, events: v }))
        : (ts(a.state.value[e], b),
          (C = { type: Tr.patchObject, payload: b, storeId: e, events: v }));
    const D = (h = Symbol());
    ze().then(() => {
      h === D && (u = !0);
    }),
      (c = !0),
      Ra(d, C, a.state.value[e]);
  }
  const p = l
    ? function () {
        const { state: C } = n,
          D = C ? C() : {};
        this.$patch((P) => {
          jn(P, D);
        });
      }
    : km;
  function w() {
    o.stop(), (d = []), (f = []), a._s.delete(e);
  }
  const x = (b, C = "") => {
      if (ud in b) return (b[fi] = C), b;
      const D = function () {
        Po(a);
        const P = Array.from(arguments),
          I = [],
          $ = [];
        function M(j) {
          I.push(j);
        }
        function N(j) {
          $.push(j);
        }
        Ra(f, { args: P, name: D[fi], store: k, after: M, onError: N });
        let B;
        try {
          B = b.apply(this && this.$id === e ? this : k, P);
        } catch (j) {
          throw (Ra($, j), j);
        }
        return B instanceof Promise
          ? B.then((j) => (Ra(I, j), j)).catch(
              (j) => (Ra($, j), Promise.reject(j))
            )
          : (Ra(I, B), B);
      };
      return (D[ud] = !0), (D[fi] = C), D;
    },
    E = {
      _p: a,
      $id: e,
      $onAction: sd.bind(null, f),
      $patch: y,
      $reset: p,
      $subscribe(b, C = {}) {
        const D = sd(d, b, C.detached, () => P()),
          P = o.run(() =>
            ce(
              () => a.state.value[e],
              (I) => {
                (C.flush === "sync" ? c : u) &&
                  b({ storeId: e, type: Tr.direct, events: v }, I);
              },
              jn({}, s, C)
            )
          );
        return D;
      },
      $dispose: w,
    },
    k = lt(E);
  a._s.set(e, k);
  const A = ((a._a && a._a.runWithContext) || MS)(() =>
    a._e.run(() => (o = Jr()).run(() => t({ action: x })))
  );
  for (const b in A) {
    const C = A[b];
    if ((Be(C) && !RS(C)) || Yn(C))
      l ||
        (m && LS(C) && (Be(C) ? (C.value = m[b]) : ts(C, m[b])),
        (a.state.value[e][b] = C));
    else if (typeof C == "function") {
      const D = x(C, b);
      (A[b] = D), (i.actions[b] = C);
    }
  }
  return (
    jn(k, A),
    jn(xe(k), A),
    Object.defineProperty(k, "$state", {
      get: () => a.state.value[e],
      set: (b) => {
        y((C) => {
          jn(C, b);
        });
      },
    }),
    a._p.forEach((b) => {
      jn(
        k,
        o.run(() => b({ store: k, app: a._a, pinia: a, options: i }))
      );
    }),
    m && l && n.hydrate && n.hydrate(k.$state, m),
    (u = !0),
    (c = !0),
    k
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function rl(e, t, n) {
  let a, r;
  const l = typeof t == "function";
  typeof e == "string" ? ((a = e), (r = l ? n : t)) : ((r = e), (a = e.id));
  function o(i, s) {
    const u = fb();
    return (
      (i = i || (u ? Ie(_m, null) : null)),
      i && Po(i),
      (i = xm),
      i._s.has(a) || (l ? Em(a, t, r, i) : FS(a, r, i)),
      i._s.get(a)
    );
  }
  return (o.$id = a), o;
}
const wt = $S();
/*! Capacitor: https://capacitorjs.com/ - MIT License */ const NS = (e) => {
    const t = new Map();
    t.set("web", { name: "web" });
    const n = e.CapacitorPlatforms || {
        currentPlatform: { name: "web" },
        platforms: t,
      },
      a = (l, o) => {
        n.platforms.set(l, o);
      },
      r = (l) => {
        n.platforms.has(l) && (n.currentPlatform = n.platforms.get(l));
      };
    return (n.addPlatform = a), (n.setPlatform = r), n;
  },
  HS = (e) => (e.CapacitorPlatforms = NS(e)),
  Pm = HS(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  );
Pm.addPlatform;
Pm.setPlatform;
var tr;
(function (e) {
  (e.Unimplemented = "UNIMPLEMENTED"), (e.Unavailable = "UNAVAILABLE");
})(tr || (tr = {}));
class vi extends Error {
  constructor(t, n, a) {
    super(t), (this.message = t), (this.code = n), (this.data = a);
  }
}
const jS = (e) => {
    var t, n;
    return e != null && e.androidBridge
      ? "android"
      : !(
          (n =
            (t = e == null ? void 0 : e.webkit) === null || t === void 0
              ? void 0
              : t.messageHandlers) === null || n === void 0
        ) && n.bridge
      ? "ios"
      : "web";
  },
  zS = (e) => {
    var t, n, a, r, l;
    const o = e.CapacitorCustomPlatform || null,
      i = e.Capacitor || {},
      s = (i.Plugins = i.Plugins || {}),
      u = e.CapacitorPlatforms,
      c = () => (o !== null ? o.name : jS(e)),
      d =
        ((t = u == null ? void 0 : u.currentPlatform) === null || t === void 0
          ? void 0
          : t.getPlatform) || c,
      f = () => d() !== "web",
      v =
        ((n = u == null ? void 0 : u.currentPlatform) === null || n === void 0
          ? void 0
          : n.isNativePlatform) || f,
      m = (A) => {
        const b = E.get(A);
        return !!((b != null && b.platforms.has(d())) || p(A));
      },
      h =
        ((a = u == null ? void 0 : u.currentPlatform) === null || a === void 0
          ? void 0
          : a.isPluginAvailable) || m,
      y = (A) => {
        var b;
        return (b = i.PluginHeaders) === null || b === void 0
          ? void 0
          : b.find((C) => C.name === A);
      },
      p =
        ((r = u == null ? void 0 : u.currentPlatform) === null || r === void 0
          ? void 0
          : r.getPluginHeader) || y,
      w = (A) => e.console.error(A),
      x = (A, b, C) =>
        Promise.reject(`${C} does not have an implementation of "${b}".`),
      E = new Map(),
      k = (A, b = {}) => {
        const C = E.get(A);
        if (C)
          return (
            console.warn(
              `Capacitor plugin "${A}" already registered. Cannot register plugins twice.`
            ),
            C.proxy
          );
        const D = d(),
          P = p(A);
        let I;
        const $ = async () => (
            !I && D in b
              ? (I =
                  typeof b[D] == "function" ? (I = await b[D]()) : (I = b[D]))
              : o !== null &&
                !I &&
                "web" in b &&
                (I =
                  typeof b.web == "function"
                    ? (I = await b.web())
                    : (I = b.web)),
            I
          ),
          M = (O, L) => {
            var G, oe;
            if (P) {
              const X =
                P == null ? void 0 : P.methods.find((ve) => L === ve.name);
              if (X)
                return X.rtype === "promise"
                  ? (ve) => i.nativePromise(A, L.toString(), ve)
                  : (ve, re) => i.nativeCallback(A, L.toString(), ve, re);
              if (O)
                return (G = O[L]) === null || G === void 0 ? void 0 : G.bind(O);
            } else {
              if (O)
                return (oe = O[L]) === null || oe === void 0
                  ? void 0
                  : oe.bind(O);
              throw new vi(
                `"${A}" plugin is not implemented on ${D}`,
                tr.Unimplemented
              );
            }
          },
          N = (O) => {
            let L;
            const G = (...oe) => {
              const X = $().then((ve) => {
                const re = M(ve, O);
                if (re) {
                  const F = re(...oe);
                  return (L = F == null ? void 0 : F.remove), F;
                } else
                  throw new vi(
                    `"${A}.${O}()" is not implemented on ${D}`,
                    tr.Unimplemented
                  );
              });
              return O === "addListener" && (X.remove = async () => L()), X;
            };
            return (
              (G.toString = () => `${O.toString()}() { [capacitor code] }`),
              Object.defineProperty(G, "name", {
                value: O,
                writable: !1,
                configurable: !1,
              }),
              G
            );
          },
          B = N("addListener"),
          j = N("removeListener"),
          H = (O, L) => {
            const G = B({ eventName: O }, L),
              oe = async () => {
                const ve = await G;
                j({ eventName: O, callbackId: ve }, L);
              },
              X = new Promise((ve) => G.then(() => ve({ remove: oe })));
            return (
              (X.remove = async () => {
                console.warn(
                  "Using addListener() without 'await' is deprecated."
                ),
                  await oe();
              }),
              X
            );
          },
          z = new Proxy(
            {},
            {
              get(O, L) {
                switch (L) {
                  case "$$typeof":
                    return;
                  case "toJSON":
                    return () => ({});
                  case "addListener":
                    return P ? H : B;
                  case "removeListener":
                    return j;
                  default:
                    return N(L);
                }
              },
            }
          );
        return (
          (s[A] = z),
          E.set(A, {
            name: A,
            proxy: z,
            platforms: new Set([...Object.keys(b), ...(P ? [D] : [])]),
          }),
          z
        );
      },
      V =
        ((l = u == null ? void 0 : u.currentPlatform) === null || l === void 0
          ? void 0
          : l.registerPlugin) || k;
    return (
      i.convertFileSrc || (i.convertFileSrc = (A) => A),
      (i.getPlatform = d),
      (i.handleError = w),
      (i.isNativePlatform = v),
      (i.isPluginAvailable = h),
      (i.pluginMethodNoop = x),
      (i.registerPlugin = V),
      (i.Exception = vi),
      (i.DEBUG = !!i.DEBUG),
      (i.isLoggingEnabled = !!i.isLoggingEnabled),
      (i.platform = i.getPlatform()),
      (i.isNative = i.isNativePlatform()),
      i
    );
  },
  US = (e) => (e.Capacitor = zS(e)),
  jr = US(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  ),
  Ia = jr.registerPlugin;
jr.Plugins;
class Tm {
  constructor(t) {
    (this.listeners = {}),
      (this.retainedEventArguments = {}),
      (this.windowListeners = {}),
      t &&
        (console.warn(
          `Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`
        ),
        (this.config = t));
  }
  addListener(t, n) {
    let a = !1;
    this.listeners[t] || ((this.listeners[t] = []), (a = !0)),
      this.listeners[t].push(n);
    const l = this.windowListeners[t];
    l && !l.registered && this.addWindowListener(l),
      a && this.sendRetainedArgumentsForEvent(t);
    const o = async () => this.removeListener(t, n);
    return Promise.resolve({ remove: o });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const t in this.windowListeners)
      this.removeWindowListener(this.windowListeners[t]);
    this.windowListeners = {};
  }
  notifyListeners(t, n, a) {
    const r = this.listeners[t];
    if (!r) {
      if (a) {
        let l = this.retainedEventArguments[t];
        l || (l = []), l.push(n), (this.retainedEventArguments[t] = l);
      }
      return;
    }
    r.forEach((l) => l(n));
  }
  hasListeners(t) {
    return !!this.listeners[t].length;
  }
  registerWindowListener(t, n) {
    this.windowListeners[n] = {
      registered: !1,
      windowEventName: t,
      pluginEventName: n,
      handler: (a) => {
        this.notifyListeners(n, a);
      },
    };
  }
  unimplemented(t = "not implemented") {
    return new jr.Exception(t, tr.Unimplemented);
  }
  unavailable(t = "not available") {
    return new jr.Exception(t, tr.Unavailable);
  }
  async removeListener(t, n) {
    const a = this.listeners[t];
    if (!a) return;
    const r = a.indexOf(n);
    this.listeners[t].splice(r, 1),
      this.listeners[t].length ||
        this.removeWindowListener(this.windowListeners[t]);
  }
  addWindowListener(t) {
    window.addEventListener(t.windowEventName, t.handler), (t.registered = !0);
  }
  removeWindowListener(t) {
    t &&
      (window.removeEventListener(t.windowEventName, t.handler),
      (t.registered = !1));
  }
  sendRetainedArgumentsForEvent(t) {
    const n = this.retainedEventArguments[t];
    n &&
      (delete this.retainedEventArguments[t],
      n.forEach((a) => {
        this.notifyListeners(t, a);
      }));
  }
}
const cd = (e) =>
    encodeURIComponent(e)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  dd = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class WS extends Tm {
  async getCookies() {
    const t = document.cookie,
      n = {};
    return (
      t.split(";").forEach((a) => {
        if (a.length <= 0) return;
        let [r, l] = a.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        (r = dd(r).trim()), (l = dd(l).trim()), (n[r] = l);
      }),
      n
    );
  }
  async setCookie(t) {
    try {
      const n = cd(t.key),
        a = cd(t.value),
        r = `; expires=${(t.expires || "").replace("expires=", "")}`,
        l = (t.path || "/").replace("path=", ""),
        o = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
      document.cookie = `${n}=${a || ""}${r}; path=${l}; ${o};`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async deleteCookie(t) {
    try {
      document.cookie = `${t.key}=; Max-Age=0`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async clearCookies() {
    try {
      const t = document.cookie.split(";") || [];
      for (const n of t)
        document.cookie = n
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (t) {
      return Promise.reject(t);
    }
  }
}
Ia("CapacitorCookies", { web: () => new WS() });
const GS = async (e) =>
    new Promise((t, n) => {
      const a = new FileReader();
      (a.onload = () => {
        const r = a.result;
        t(r.indexOf(",") >= 0 ? r.split(",")[1] : r);
      }),
        (a.onerror = (r) => n(r)),
        a.readAsDataURL(e);
    }),
  KS = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e)
      .map((r) => r.toLocaleLowerCase())
      .reduce((r, l, o) => ((r[l] = e[t[o]]), r), {});
  },
  YS = (e, t = !0) =>
    e
      ? Object.entries(e)
          .reduce((a, r) => {
            const [l, o] = r;
            let i, s;
            return (
              Array.isArray(o)
                ? ((s = ""),
                  o.forEach((u) => {
                    (i = t ? encodeURIComponent(u) : u), (s += `${l}=${i}&`);
                  }),
                  s.slice(0, -1))
                : ((i = t ? encodeURIComponent(o) : o), (s = `${l}=${i}`)),
              `${a}&${s}`
            );
          }, "")
          .substr(1)
      : null,
  qS = (e, t = {}) => {
    const n = Object.assign(
        { method: e.method || "GET", headers: e.headers },
        t
      ),
      r = KS(e.headers)["content-type"] || "";
    if (typeof e.data == "string") n.body = e.data;
    else if (r.includes("application/x-www-form-urlencoded")) {
      const l = new URLSearchParams();
      for (const [o, i] of Object.entries(e.data || {})) l.set(o, i);
      n.body = l.toString();
    } else if (
      r.includes("multipart/form-data") ||
      e.data instanceof FormData
    ) {
      const l = new FormData();
      if (e.data instanceof FormData)
        e.data.forEach((i, s) => {
          l.append(s, i);
        });
      else for (const i of Object.keys(e.data)) l.append(i, e.data[i]);
      n.body = l;
      const o = new Headers(n.headers);
      o.delete("content-type"), (n.headers = o);
    } else
      (r.includes("application/json") || typeof e.data == "object") &&
        (n.body = JSON.stringify(e.data));
    return n;
  };
class JS extends Tm {
  async request(t) {
    const n = qS(t, t.webFetchExtra),
      a = YS(t.params, t.shouldEncodeUrlParams),
      r = a ? `${t.url}?${a}` : t.url,
      l = await fetch(r, n),
      o = l.headers.get("content-type") || "";
    let { responseType: i = "text" } = l.ok ? t : {};
    o.includes("application/json") && (i = "json");
    let s, u;
    switch (i) {
      case "arraybuffer":
      case "blob":
        (u = await l.blob()), (s = await GS(u));
        break;
      case "json":
        s = await l.json();
        break;
      case "document":
      case "text":
      default:
        s = await l.text();
    }
    const c = {};
    return (
      l.headers.forEach((d, f) => {
        c[f] = d;
      }),
      { data: s, headers: c, status: l.status, url: l.url }
    );
  }
  async get(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "GET" }));
  }
  async post(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "POST" })
    );
  }
  async put(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "PUT" }));
  }
  async patch(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "PATCH" })
    );
  }
  async delete(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "DELETE" })
    );
  }
}
Ia("CapacitorHttp", { web: () => new JS() });
var fd;
(function (e) {
  (e.IndexedDbLocal = "INDEXED_DB_LOCAL"),
    (e.InMemory = "IN_MEMORY"),
    (e.BrowserLocal = "BROWSER_LOCAL"),
    (e.BrowserSession = "BROWSER_SESSION");
})(fd || (fd = {}));
var vd;
(function (e) {
  (e.APPLE = "apple.com"),
    (e.FACEBOOK = "facebook.com"),
    (e.GAME_CENTER = "gc.apple.com"),
    (e.GITHUB = "github.com"),
    (e.GOOGLE = "google.com"),
    (e.MICROSOFT = "microsoft.com"),
    (e.PLAY_GAMES = "playgames.google.com"),
    (e.TWITTER = "twitter.com"),
    (e.YAHOO = "yahoo.com"),
    (e.PASSWORD = "password"),
    (e.PHONE = "phone");
})(vd || (vd = {}));
const yt = Ia("FirebaseAuthentication", {
  web: () =>
    Ne(() => import("./web-DdXhLdc1.js"), []).then(
      (e) => new e.FirebaseAuthenticationWeb()
    ),
});
class XS extends Error {
  constructor(t, n, a) {
    super(n, a), (this.code = t);
  }
  get missingInput() {
    return !1;
  }
}
const ZS = { method: "GET", accept: "application/json", noAuth: !1 };
function QS(e) {
  return !!e.id;
}
const ew = "https://api-dev.find-a.app";
function tw(e) {
  return QS(e) ? `${e.resource}/${e.id}` : e.resource;
}
function nw(e) {
  if (e.method !== "GET")
    return e.data instanceof FormData
      ? e.data
      : e.data
      ? JSON.stringify(e.data)
      : void 0;
}
function Am(e, t) {
  const n = typeof t;
  switch (n) {
    case "boolean":
    case "number":
    case "string":
    case "bigint":
      return [t.toString()];
    case "undefined":
      return [];
    case "object":
      if (t === null) return [""];
      if (Array.isArray(t)) return t.reduce((a, r) => [...a, ...Am(e, r)], []);
    default:
      throw new Error(
        `query parameter ${e} has type of ${n} (value: ${t}), which is not permitted`
      );
  }
}
function aw(e) {
  const t = tw(e),
    n = new URL(`${ew}${t}`);
  for (const [a, r] of Object.entries(e.queryParams ?? {})) {
    const l = Am(a, r);
    for (const o of l) n.searchParams.append(a, o);
  }
  return n.toString();
}
async function Lt(e) {
  const t = { ...ZS, ...e },
    n = {
      accept: t.accept,
      ...(t.data instanceof FormData
        ? null
        : { "Content-Type": "application/json; charset=utf-8" }),
    };
  {
    const o = Ct(wt);
    t.noAuth || (await o.dataLoaded);
    const i = await o.getIdToken();
    i && (n.Authorization = `Bearer ${i}`);
  }
  const r = await (
      await fetch(aw(t), { method: t.method, headers: n, body: nw(t) })
    ).text(),
    l = JSON.parse(r);
  if (!l.success) throw new XS(l.statusCode, l.statusMessage);
  return l;
}
async function rw(e) {
  await Lt({ resource: "/register", method: "POST", data: e });
}
async function lw() {
  return (await Lt({ resource: "/user", noAuth: !0 })).data;
}
async function ow(e) {
  return (await Lt({ resource: "/user", method: "PATCH", data: e })).data;
}
async function iw() {
  return (await Lt({ resource: "/user", method: "DELETE" })).data;
}
var Zn = ((e) => ((e.Company = "Company"), (e.Applicant = "Applicant"), e))(
    Zn || {}
  ),
  md;
(function (e) {
  (e[(e.Min = 1)] = "Min"),
    (e[(e.Low = 2)] = "Low"),
    (e[(e.Default = 3)] = "Default"),
    (e[(e.High = 4)] = "High"),
    (e[(e.Max = 5)] = "Max");
})(md || (md = {}));
var hd;
(function (e) {
  (e[(e.Secret = -1)] = "Secret"),
    (e[(e.Private = 0)] = "Private"),
    (e[(e.Public = 1)] = "Public");
})(hd || (hd = {}));
const Fa = Ia("FirebaseMessaging", {
  web: () =>
    Ne(() => import("./web-wjzjdGK-.js"), __vite__mapDeps([0, 1])).then(
      (e) => new e.FirebaseMessagingWeb()
    ),
});
var ns = ((e) => (
  (e[(e.Premium = 0)] = "Premium"), (e[(e.Slot = 1)] = "Slot"), e
))(ns || {});
const pn = rl("app", () => {
  const e = W(!1),
    t = W(""),
    n = W("error"),
    a = W(!1),
    r = W(0),
    l = W({});
  function o(s, u = "error") {
    (t.value = s), (n.value = u), (e.value = !0);
  }
  function i(s = 0) {
    (r.value = s), (a.value = !0);
  }
  return {
    showToast: o,
    showPremiumModal: i,
    toastMessage: t,
    toastShown: e,
    toastMessageColor: n,
    premiumModalShown: a,
    premiumModalMode: r,
    loadingExternal: l,
  };
});
async function sw(e) {
  await Lt({ resource: "/push-tokens", method: "PATCH", data: { token: e } });
}
async function uw(e) {
  await Lt({ resource: "/push-tokens", method: "DELETE", id: e });
}
const gd = rl("push", () => {
  const e = W(null),
    t = W(null),
    n = W(!1),
    a = W(!1);
  let r;
  const l = new Promise((u) => {
    r = u;
  });
  async function o() {
    if (!a.value) {
      a.value = !0;
      try {
        const { receive: u } = await Fa.requestPermissions();
        if (u !== "granted") {
          t.value = !1;
          return;
        }
        t.value = !0;
        const { token: c } = await Fa.getToken({ vapidKey: void 0 });
        (e.value = c),
          jr.isNativePlatform() &&
            (await Fa.subscribeToTopic({ topic: "device" })),
          Fa.addListener(
            "notificationReceived",
            (d) => void console.log("new notification", d.notification)
          ).catch(console.error),
          Fa.addListener("tokenReceived", (d) => (e.value = d.token)).catch(
            console.error
          ),
          Fa.addListener("notificationActionPerformed", (d) => {
            const f = d.notification.data;
            if (f && typeof f == "object" && "notificationType" in f)
              switch (f.notificationType) {
                case "chat":
                  if (!("chatId" in f)) return;
                  ea.push({ name: "ViewChat", params: { id: f.chatId } }).catch(
                    console.error
                  );
                  break;
                default:
              }
          }).catch(console.error);
      } finally {
        (n.value = !0), r();
      }
    }
  }
  o().catch((u) => {
    pn().showToast(u.message, "error"), console.error(u);
  });
  async function i() {
    await l, e.value && (await sw(e.value));
  }
  async function s() {
    await l, e.value && (await uw(e.value));
  }
  return {
    init: o,
    saveToken: i,
    deleteToken: s,
    pushToken: e,
    initialized: n,
    waitInitialized: l,
  };
});
var yd;
(function (e) {
  (e.AdPersonalization = "AD_PERSONALIZATION"),
    (e.AdStorage = "AD_STORAGE"),
    (e.AdUserData = "AD_USER_DATA"),
    (e.AnalyticsStorage = "ANALYTICS_STORAGE"),
    (e.FunctionalityStorage = "FUNCTIONALITY_STORAGE"),
    (e.PersonalizationStorage = "PERSONALIZATION_STORAGE");
})(yd || (yd = {}));
var bd;
(function (e) {
  (e.Granted = "GRANTED"), (e.Denied = "DENIED");
})(bd || (bd = {}));
const xl = Ia("FirebaseAnalytics", {
    web: () =>
      Ne(() => import("./web-CfPZO2SC.js"), __vite__mapDeps([2, 1])).then(
        (e) => new e.FirebaseAnalyticsWeb()
      ),
  }),
  Ct = rl("auth", () => {
    const e = W(null),
      t = W(null),
      n = W(null),
      a = W(!1),
      r = W(null),
      l = W(!1),
      o = W(!1);
    ce(t, async (b) => {
      try {
        await xl.setUserId({
          userId: (b == null ? void 0 : b.id.toString()) ?? null,
        }),
          await xl.setUserProperty({
            key: "username",
            value: (b == null ? void 0 : b.email) ?? null,
          }),
          await xl.setEnabled({ enabled: !!b }),
          await xl.logEvent({
            name: "user_authenticated",
            params: {
              userId: (b == null ? void 0 : b.id) ?? null,
              userName: (b == null ? void 0 : b.email) ?? null,
            },
          });
      } catch (C) {
        console.error("updating Analytics failed", C);
      }
    });
    let i;
    const s = new Promise((b) => {
      i = b;
    });
    let u = () => {},
      c = () => {},
      d = new Promise((b) => {
        b();
      });
    function f() {
      d = new Promise((b, C) => {
        (u = b), (c = C);
      });
    }
    async function v(b, C) {
      await yt.signInWithEmailAndPassword({ email: b, password: C });
    }
    async function m(b, C, D) {
      f(), await yt.createUserWithEmailAndPassword({ email: b, password: C });
      try {
        await rw({ email: b, ...D });
      } catch (P) {
        throw (await yt.deleteUser(), c(), P);
      }
      u();
      try {
        await yt.updateProfile({ displayName: `${D.firstName} ${D.lastName}` });
      } catch (P) {
        pn().showToast(P.message);
      }
      try {
        await yt.sendEmailVerification();
      } catch (P) {
        pn().showToast(P.message);
      }
    }
    async function h(b) {
      await yt.sendPasswordResetEmail({ email: b });
    }
    async function y() {
      await yt.reload();
    }
    async function p() {
      const b = gd();
      try {
        await b.deleteToken(), await yt.signOut();
      } catch (C) {
        throw (await b.saveToken(), C);
      }
    }
    async function w(b, C) {
      await v(b, C), await iw(), await yt.deleteUser();
    }
    async function x(b) {
      (t.value = await ow(b)),
        await yt.updateProfile({ displayName: `${b.firstName} ${b.lastName}` }),
        await y(),
        (e.value = (await yt.getCurrentUser()).user);
    }
    async function E() {
      try {
        if (!confirm("Bestätigung wirklich erneut senden?")) return;
        (l.value = !0),
          await yt.sendEmailVerification(),
          pn().showToast("Bestätigungs-E-Mail versendet", "success");
      } catch (b) {
        pn().showToast(b.message);
      } finally {
        l.value = !1;
      }
    }
    async function k() {
      try {
        (o.value = !0),
          await yt.reload(),
          (e.value = (await yt.getCurrentUser()).user);
      } catch (b) {
        pn().showToast(b.message);
      } finally {
        o.value = !1;
      }
    }
    async function V() {
      try {
        (a.value = !0), (t.value = await lw()), (n.value = null);
      } catch (b) {
        (n.value = b), (t.value = null);
      } finally {
        a.value = !1;
      }
    }
    yt.addListener("authStateChange", async (b) => {
      try {
        await d;
      } catch (C) {
        console.error("register failed", C);
        return;
      }
      (e.value = b.user),
        b.user && (await V()),
        i(),
        b.user && (await gd().saveToken());
    }).catch(console.error);
    const A = S(() => !!e.value);
    return {
      login: v,
      register: m,
      resetPassword: h,
      reload: y,
      logout: p,
      deleteUser: w,
      updateUser: x,
      async getIdToken() {
        try {
          return (await yt.getIdToken()).token;
        } catch {
          return null;
        }
      },
      fetchUser: V,
      fetchFirebaseUser: k,
      sendEmailVerification: E,
      dataLoaded: Dt(s),
      firebaseUser: Dt(e),
      loggedIn: A,
      loggedInAndVerified: S(() => {
        var b;
        return (
          A.value && (((b = e.value) == null ? void 0 : b.emailVerified) ?? !1)
        );
      }),
      user: Dt(t),
      userTypeIcon: S(() => {
        var C;
        const b = (C = t.value) == null ? void 0 : C.type;
        return b
          ? b === Zn.Applicant
            ? "mdi-account"
            : "mdi-domain"
          : "mdi-question-mark";
      }),
      defaultRoute: S(() => (e.value ? "Home" : "Login")),
      error: Dt(n),
      loading: Dt(a),
      pushToken: r,
      verifyingEmail: l,
      fetchingFirebaseUser: o,
    };
  });
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const za = typeof document < "u";
function Im(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function cw(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Im(e.default))
  );
}
const Le = Object.assign;
function mi(e, t) {
  const n = {};
  for (const a in t) {
    const r = t[a];
    n[a] = sn(r) ? r.map(e) : e(r);
  }
  return n;
}
const Ar = () => {},
  sn = Array.isArray,
  Vm = /#/g,
  dw = /&/g,
  fw = /\//g,
  vw = /=/g,
  mw = /\?/g,
  Dm = /\+/g,
  hw = /%5B/g,
  gw = /%5D/g,
  Om = /%5E/g,
  yw = /%60/g,
  $m = /%7B/g,
  bw = /%7C/g,
  Mm = /%7D/g,
  pw = /%20/g;
function su(e) {
  return encodeURI("" + e)
    .replace(bw, "|")
    .replace(hw, "[")
    .replace(gw, "]");
}
function Sw(e) {
  return su(e).replace($m, "{").replace(Mm, "}").replace(Om, "^");
}
function as(e) {
  return su(e)
    .replace(Dm, "%2B")
    .replace(pw, "+")
    .replace(Vm, "%23")
    .replace(dw, "%26")
    .replace(yw, "`")
    .replace($m, "{")
    .replace(Mm, "}")
    .replace(Om, "^");
}
function ww(e) {
  return as(e).replace(vw, "%3D");
}
function Cw(e) {
  return su(e).replace(Vm, "%23").replace(mw, "%3F");
}
function xw(e) {
  return e == null ? "" : Cw(e).replace(fw, "%2F");
}
function zr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const _w = /\/$/,
  kw = (e) => e.replace(_w, "");
function hi(e, t, n = "/") {
  let a,
    r = {},
    l = "",
    o = "";
  const i = t.indexOf("#");
  let s = t.indexOf("?");
  return (
    i < s && i >= 0 && (s = -1),
    s > -1 &&
      ((a = t.slice(0, s)),
      (l = t.slice(s + 1, i > -1 ? i : t.length)),
      (r = e(l))),
    i > -1 && ((a = a || t.slice(0, i)), (o = t.slice(i, t.length))),
    (a = Aw(a ?? t, n)),
    { fullPath: a + (l && "?") + l + o, path: a, query: r, hash: zr(o) }
  );
}
function Ew(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Pw(e, t, n) {
  const a = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    a > -1 &&
    a === r &&
    nr(t.matched[a], n.matched[r]) &&
    Bm(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function nr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Tw(e[n], t[n])) return !1;
  return !0;
}
function Tw(e, t) {
  return sn(e) ? Sd(e, t) : sn(t) ? Sd(t, e) : e === t;
}
function Sd(e, t) {
  return sn(t)
    ? e.length === t.length && e.every((n, a) => n === t[a])
    : e.length === 1 && e[0] === t;
}
function Aw(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    a = e.split("/"),
    r = a[a.length - 1];
  (r === ".." || r === ".") && a.push("");
  let l = n.length - 1,
    o,
    i;
  for (o = 0; o < a.length; o++)
    if (((i = a[o]), i !== "."))
      if (i === "..") l > 1 && l--;
      else break;
  return n.slice(0, l).join("/") + "/" + a.slice(o).join("/");
}
const Nn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Ur;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ur || (Ur = {}));
var Ir;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ir || (Ir = {}));
function Iw(e) {
  if (!e)
    if (za) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), kw(e);
}
const Vw = /^[^#]+#/;
function Dw(e, t) {
  return e.replace(Vw, "#") + t;
}
function Ow(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    a = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: a.left - n.left - (t.left || 0),
    top: a.top - n.top - (t.top || 0),
  };
}
const To = () => ({ left: window.scrollX, top: window.scrollY });
function $w(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      a = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? a
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Ow(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function wd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const rs = new Map();
function Mw(e, t) {
  rs.set(e, t);
}
function Bw(e) {
  const t = rs.get(e);
  return rs.delete(e), t;
}
let Lw = () => location.protocol + "//" + location.host;
function Lm(e, t) {
  const { pathname: n, search: a, hash: r } = t,
    l = e.indexOf("#");
  if (l > -1) {
    let i = r.includes(e.slice(l)) ? e.slice(l).length : 1,
      s = r.slice(i);
    return s[0] !== "/" && (s = "/" + s), pd(s, "");
  }
  return pd(n, e) + a + r;
}
function Rw(e, t, n, a) {
  let r = [],
    l = [],
    o = null;
  const i = ({ state: f }) => {
    const v = Lm(e, location),
      m = n.value,
      h = t.value;
    let y = 0;
    if (f) {
      if (((n.value = v), (t.value = f), o && o === m)) {
        o = null;
        return;
      }
      y = h ? f.position - h.position : 0;
    } else a(v);
    r.forEach((p) => {
      p(n.value, m, {
        delta: y,
        type: Ur.pop,
        direction: y ? (y > 0 ? Ir.forward : Ir.back) : Ir.unknown,
      });
    });
  };
  function s() {
    o = n.value;
  }
  function u(f) {
    r.push(f);
    const v = () => {
      const m = r.indexOf(f);
      m > -1 && r.splice(m, 1);
    };
    return l.push(v), v;
  }
  function c() {
    const { history: f } = window;
    f.state && f.replaceState(Le({}, f.state, { scroll: To() }), "");
  }
  function d() {
    for (const f of l) f();
    (l = []),
      window.removeEventListener("popstate", i),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", i),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: s, listen: u, destroy: d }
  );
}
function Cd(e, t, n, a = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: r ? To() : null,
  };
}
function Fw(e) {
  const { history: t, location: n } = window,
    a = { value: Lm(e, n) },
    r = { value: t.state };
  r.value ||
    l(
      a.value,
      {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function l(s, u, c) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + s
          : Lw() + e + s;
    try {
      t[c ? "replaceState" : "pushState"](u, "", f), (r.value = u);
    } catch (v) {
      console.error(v), n[c ? "replace" : "assign"](f);
    }
  }
  function o(s, u) {
    const c = Le({}, t.state, Cd(r.value.back, s, r.value.forward, !0), u, {
      position: r.value.position,
    });
    l(s, c, !0), (a.value = s);
  }
  function i(s, u) {
    const c = Le({}, r.value, t.state, { forward: s, scroll: To() });
    l(c.current, c, !0);
    const d = Le({}, Cd(a.value, s, null), { position: c.position + 1 }, u);
    l(s, d, !1), (a.value = s);
  }
  return { location: a, state: r, push: i, replace: o };
}
function Nw(e) {
  e = Iw(e);
  const t = Fw(e),
    n = Rw(e, t.state, t.location, t.replace);
  function a(l, o = !0) {
    o || n.pauseListeners(), history.go(l);
  }
  const r = Le(
    { location: "", base: e, go: a, createHref: Dw.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Hw(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Rm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Fm = Symbol("");
var xd;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(xd || (xd = {}));
function ar(e, t) {
  return Le(new Error(), { type: e, [Fm]: !0 }, t);
}
function kn(e, t) {
  return e instanceof Error && Fm in e && (t == null || !!(e.type & t));
}
const _d = "[^/]+?",
  jw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  zw = /[.+*?^${}()[\]/\\]/g;
function Uw(e, t) {
  const n = Le({}, jw, t),
    a = [];
  let r = n.start ? "^" : "";
  const l = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (r += "/");
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (r += "/"), (r += f.value.replace(zw, "\\$&")), (v += 40);
      else if (f.type === 1) {
        const { value: m, repeatable: h, optional: y, regexp: p } = f;
        l.push({ name: m, repeatable: h, optional: y });
        const w = p || _d;
        if (w !== _d) {
          v += 10;
          try {
            new RegExp(`(${w})`);
          } catch (E) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${w}): ` + E.message
            );
          }
        }
        let x = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        d || (x = y && u.length < 2 ? `(?:/${x})` : "/" + x),
          y && (x += "?"),
          (r += x),
          (v += 20),
          y && (v += -8),
          h && (v += -20),
          w === ".*" && (v += -50);
      }
      c.push(v);
    }
    a.push(c);
  }
  if (n.strict && n.end) {
    const u = a.length - 1;
    a[u][a[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"),
    n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function i(u) {
    const c = u.match(o),
      d = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const v = c[f] || "",
        m = l[f - 1];
      d[m.name] = v && m.repeatable ? v.split("/") : v;
    }
    return d;
  }
  function s(u) {
    let c = "",
      d = !1;
    for (const f of e) {
      (!d || !c.endsWith("/")) && (c += "/"), (d = !1);
      for (const v of f)
        if (v.type === 0) c += v.value;
        else if (v.type === 1) {
          const { value: m, repeatable: h, optional: y } = v,
            p = m in u ? u[m] : "";
          if (sn(p) && !h)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const w = sn(p) ? p.join("/") : p;
          if (!w)
            if (y)
              f.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${m}"`);
          c += w;
        }
    }
    return c || "/";
  }
  return { re: o, score: a, keys: l, parse: i, stringify: s };
}
function Ww(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n];
    if (a) return a;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Nm(e, t) {
  let n = 0;
  const a = e.score,
    r = t.score;
  for (; n < a.length && n < r.length; ) {
    const l = Ww(a[n], r[n]);
    if (l) return l;
    n++;
  }
  if (Math.abs(r.length - a.length) === 1) {
    if (kd(a)) return 1;
    if (kd(r)) return -1;
  }
  return r.length - a.length;
}
function kd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Gw = { type: 0, value: "" },
  Kw = /[a-zA-Z0-9_]/;
function Yw(e) {
  if (!e) return [[]];
  if (e === "/") return [[Gw]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${u}": ${v}`);
  }
  let n = 0,
    a = n;
  const r = [];
  let l;
  function o() {
    l && r.push(l), (l = []);
  }
  let i = 0,
    s,
    u = "",
    c = "";
  function d() {
    u &&
      (n === 0
        ? l.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (l.length > 1 &&
            (s === "*" || s === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          l.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function f() {
    u += s;
  }
  for (; i < e.length; ) {
    if (((s = e[i++]), s === "\\" && n !== 2)) {
      (a = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (u && d(), o()) : s === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = a);
        break;
      case 1:
        s === "("
          ? (n = 2)
          : Kw.test(s)
          ? f()
          : (d(), (n = 0), s !== "*" && s !== "?" && s !== "+" && i--);
        break;
      case 2:
        s === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + s)
            : (n = 3)
          : (c += s);
        break;
      case 3:
        d(), (n = 0), s !== "*" && s !== "?" && s !== "+" && i--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), o(), r;
}
function qw(e, t, n) {
  const a = Uw(Yw(e.path), n),
    r = Le(a, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Jw(e, t) {
  const n = [],
    a = new Map();
  t = Ad({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(d) {
    return a.get(d);
  }
  function l(d, f, v) {
    const m = !v,
      h = Pd(d);
    h.aliasOf = v && v.record;
    const y = Ad(t, d),
      p = [h];
    if ("alias" in d) {
      const E = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const k of E)
        p.push(
          Pd(
            Le({}, h, {
              components: v ? v.record.components : h.components,
              path: k,
              aliasOf: v ? v.record : h,
            })
          )
        );
    }
    let w, x;
    for (const E of p) {
      const { path: k } = E;
      if (f && k[0] !== "/") {
        const V = f.record.path,
          A = V[V.length - 1] === "/" ? "" : "/";
        E.path = f.record.path + (k && A + k);
      }
      if (
        ((w = qw(E, f, y)),
        v
          ? v.alias.push(w)
          : ((x = x || w),
            x !== w && x.alias.push(w),
            m && d.name && !Td(w) && o(d.name)),
        Hm(w) && s(w),
        h.children)
      ) {
        const V = h.children;
        for (let A = 0; A < V.length; A++) l(V[A], w, v && v.children[A]);
      }
      v = v || w;
    }
    return x
      ? () => {
          o(x);
        }
      : Ar;
  }
  function o(d) {
    if (Rm(d)) {
      const f = a.get(d);
      f &&
        (a.delete(d),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o));
    } else {
      const f = n.indexOf(d);
      f > -1 &&
        (n.splice(f, 1),
        d.record.name && a.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function s(d) {
    const f = Qw(d, n);
    n.splice(f, 0, d), d.record.name && !Td(d) && a.set(d.record.name, d);
  }
  function u(d, f) {
    let v,
      m = {},
      h,
      y;
    if ("name" in d && d.name) {
      if (((v = a.get(d.name)), !v)) throw ar(1, { location: d });
      (y = v.record.name),
        (m = Le(
          Ed(
            f.params,
            v.keys
              .filter((x) => !x.optional)
              .concat(v.parent ? v.parent.keys.filter((x) => x.optional) : [])
              .map((x) => x.name)
          ),
          d.params &&
            Ed(
              d.params,
              v.keys.map((x) => x.name)
            )
        )),
        (h = v.stringify(m));
    } else if (d.path != null)
      (h = d.path),
        (v = n.find((x) => x.re.test(h))),
        v && ((m = v.parse(h)), (y = v.record.name));
    else {
      if (((v = f.name ? a.get(f.name) : n.find((x) => x.re.test(f.path))), !v))
        throw ar(1, { location: d, currentLocation: f });
      (y = v.record.name),
        (m = Le({}, f.params, d.params)),
        (h = v.stringify(m));
    }
    const p = [];
    let w = v;
    for (; w; ) p.unshift(w.record), (w = w.parent);
    return { name: y, path: h, params: m, matched: p, meta: Zw(p) };
  }
  e.forEach((d) => l(d));
  function c() {
    (n.length = 0), a.clear();
  }
  return {
    addRoute: l,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: i,
    getRecordMatcher: r,
  };
}
function Ed(e, t) {
  const n = {};
  for (const a of t) a in e && (n[a] = e[a]);
  return n;
}
function Pd(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Xw(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Xw(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const a in e.components) t[a] = typeof n == "object" ? n[a] : n;
  return t;
}
function Td(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Zw(e) {
  return e.reduce((t, n) => Le(t, n.meta), {});
}
function Ad(e, t) {
  const n = {};
  for (const a in e) n[a] = a in t ? t[a] : e[a];
  return n;
}
function Qw(e, t) {
  let n = 0,
    a = t.length;
  for (; n !== a; ) {
    const l = (n + a) >> 1;
    Nm(e, t[l]) < 0 ? (a = l) : (n = l + 1);
  }
  const r = eC(e);
  return r && (a = t.lastIndexOf(r, a - 1)), a;
}
function eC(e) {
  let t = e;
  for (; (t = t.parent); ) if (Hm(t) && Nm(e, t) === 0) return t;
}
function Hm({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function tC(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const a = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < a.length; ++r) {
    const l = a[r].replace(Dm, " "),
      o = l.indexOf("="),
      i = zr(o < 0 ? l : l.slice(0, o)),
      s = o < 0 ? null : zr(l.slice(o + 1));
    if (i in t) {
      let u = t[i];
      sn(u) || (u = t[i] = [u]), u.push(s);
    } else t[i] = s;
  }
  return t;
}
function Id(e) {
  let t = "";
  for (let n in e) {
    const a = e[n];
    if (((n = ww(n)), a == null)) {
      a !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (sn(a) ? a.map((l) => l && as(l)) : [a && as(a)]).forEach((l) => {
      l !== void 0 &&
        ((t += (t.length ? "&" : "") + n), l != null && (t += "=" + l));
    });
  }
  return t;
}
function nC(e) {
  const t = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 &&
      (t[n] = sn(a)
        ? a.map((r) => (r == null ? null : "" + r))
        : a == null
        ? a
        : "" + a);
  }
  return t;
}
const jm = Symbol(""),
  Vd = Symbol(""),
  Ao = Symbol(""),
  uu = Symbol(""),
  ls = Symbol("");
function br() {
  let e = [];
  function t(a) {
    return (
      e.push(a),
      () => {
        const r = e.indexOf(a);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function aC(e, t, n) {
  const a = () => {
    e[t].delete(n);
  };
  js(a),
    ho(a),
    Ns(() => {
      e[t].add(n);
    }),
    e[t].add(n);
}
function CP(e) {
  const t = Ie(jm, {}).value;
  t && aC(t, "leaveGuards", e);
}
function Gn(e, t, n, a, r, l = (o) => o()) {
  const o = a && (a.enterCallbacks[r] = a.enterCallbacks[r] || []);
  return () =>
    new Promise((i, s) => {
      const u = (f) => {
          f === !1
            ? s(ar(4, { from: n, to: t }))
            : f instanceof Error
            ? s(f)
            : Hw(f)
            ? s(ar(2, { from: t, to: f }))
            : (o &&
                a.enterCallbacks[r] === o &&
                typeof f == "function" &&
                o.push(f),
              i());
        },
        c = l(() => e.call(a && a.instances[r], t, n, u));
      let d = Promise.resolve(c);
      e.length < 3 && (d = d.then(u)), d.catch((f) => s(f));
    });
}
function gi(e, t, n, a, r = (l) => l()) {
  const l = [];
  for (const o of e)
    for (const i in o.components) {
      let s = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (Im(s)) {
          const c = (s.__vccOpts || s)[t];
          c && l.push(Gn(c, n, a, o, i, r));
        } else {
          let u = s();
          l.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${i}" at "${o.path}"`
                );
              const d = cw(c) ? c.default : c;
              (o.mods[i] = c), (o.components[i] = d);
              const v = (d.__vccOpts || d)[t];
              return v && Gn(v, n, a, o, i, r)();
            })
          );
        }
    }
  return l;
}
function Dd(e) {
  const t = Ie(Ao),
    n = Ie(uu),
    a = S(() => {
      const s = Se(e.to);
      return t.resolve(s);
    }),
    r = S(() => {
      const { matched: s } = a.value,
        { length: u } = s,
        c = s[u - 1],
        d = n.matched;
      if (!c || !d.length) return -1;
      const f = d.findIndex(nr.bind(null, c));
      if (f > -1) return f;
      const v = Od(s[u - 2]);
      return u > 1 && Od(c) === v && d[d.length - 1].path !== v
        ? d.findIndex(nr.bind(null, s[u - 2]))
        : f;
    }),
    l = S(() => r.value > -1 && sC(n.params, a.value.params)),
    o = S(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Bm(n.params, a.value.params)
    );
  function i(s = {}) {
    if (iC(s)) {
      const u = t[Se(e.replace) ? "replace" : "push"](Se(e.to)).catch(Ar);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: a,
    href: S(() => a.value.href),
    isActive: l,
    isExactActive: o,
    navigate: i,
  };
}
function rC(e) {
  return e.length === 1 ? e[0] : e;
}
const lC = at({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Dd,
    setup(e, { slots: t }) {
      const n = lt(Dd(e)),
        { options: a } = Ie(Ao),
        r = S(() => ({
          [$d(e.activeClass, a.linkActiveClass, "router-link-active")]:
            n.isActive,
          [$d(
            e.exactActiveClass,
            a.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const l = t.default && rC(t.default(n));
        return e.custom
          ? l
          : aa(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              l
            );
      };
    },
  }),
  oC = lC;
function iC(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function sC(e, t) {
  for (const n in t) {
    const a = t[n],
      r = e[n];
    if (typeof a == "string") {
      if (a !== r) return !1;
    } else if (!sn(r) || r.length !== a.length || a.some((l, o) => l !== r[o]))
      return !1;
  }
  return !0;
}
function Od(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const $d = (e, t, n) => e ?? t ?? n,
  uC = at({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const a = Ie(ls),
        r = S(() => e.route || a.value),
        l = Ie(Vd, 0),
        o = S(() => {
          let u = Se(l);
          const { matched: c } = r.value;
          let d;
          for (; (d = c[u]) && !d.components; ) u++;
          return u;
        }),
        i = S(() => r.value.matched[o.value]);
      We(
        Vd,
        S(() => o.value + 1)
      ),
        We(jm, i),
        We(ls, r);
      const s = W();
      return (
        ce(
          () => [s.value, i.value, e.name],
          ([u, c, d], [f, v, m]) => {
            c &&
              ((c.instances[d] = u),
              v &&
                v !== c &&
                u &&
                u === f &&
                (c.leaveGuards.size || (c.leaveGuards = v.leaveGuards),
                c.updateGuards.size || (c.updateGuards = v.updateGuards))),
              u &&
                c &&
                (!v || !nr(c, v) || !f) &&
                (c.enterCallbacks[d] || []).forEach((h) => h(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = r.value,
            c = e.name,
            d = i.value,
            f = d && d.components[c];
          if (!f) return Md(n.default, { Component: f, route: u });
          const v = d.props[c],
            m = v
              ? v === !0
                ? u.params
                : typeof v == "function"
                ? v(u)
                : v
              : null,
            y = aa(
              f,
              Le({}, m, t, {
                onVnodeUnmounted: (p) => {
                  p.component.isUnmounted && (d.instances[c] = null);
                },
                ref: s,
              })
            );
          return Md(n.default, { Component: y, route: u }) || y;
        }
      );
    },
  });
function Md(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const cC = uC;
function dC(e) {
  const t = Jw(e.routes, e),
    n = e.parseQuery || tC,
    a = e.stringifyQuery || Id,
    r = e.history,
    l = br(),
    o = br(),
    i = br(),
    s = he(Nn);
  let u = Nn;
  za &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = mi.bind(null, (F) => "" + F),
    d = mi.bind(null, xw),
    f = mi.bind(null, zr);
  function v(F, Z) {
    let ee, Q;
    return (
      Rm(F) ? ((ee = t.getRecordMatcher(F)), (Q = Z)) : (Q = F),
      t.addRoute(Q, ee)
    );
  }
  function m(F) {
    const Z = t.getRecordMatcher(F);
    Z && t.removeRoute(Z);
  }
  function h() {
    return t.getRoutes().map((F) => F.record);
  }
  function y(F) {
    return !!t.getRecordMatcher(F);
  }
  function p(F, Z) {
    if (((Z = Le({}, Z || s.value)), typeof F == "string")) {
      const T = hi(n, F, Z.path),
        R = t.resolve({ path: T.path }, Z),
        q = r.createHref(T.fullPath);
      return Le(T, R, {
        params: f(R.params),
        hash: zr(T.hash),
        redirectedFrom: void 0,
        href: q,
      });
    }
    let ee;
    if (F.path != null) ee = Le({}, F, { path: hi(n, F.path, Z.path).path });
    else {
      const T = Le({}, F.params);
      for (const R in T) T[R] == null && delete T[R];
      (ee = Le({}, F, { params: d(T) })), (Z.params = d(Z.params));
    }
    const Q = t.resolve(ee, Z),
      Y = F.hash || "";
    Q.params = c(f(Q.params));
    const se = Ew(a, Le({}, F, { hash: Sw(Y), path: Q.path })),
      _ = r.createHref(se);
    return Le(
      { fullPath: se, hash: Y, query: a === Id ? nC(F.query) : F.query || {} },
      Q,
      { redirectedFrom: void 0, href: _ }
    );
  }
  function w(F) {
    return typeof F == "string" ? hi(n, F, s.value.path) : Le({}, F);
  }
  function x(F, Z) {
    if (u !== F) return ar(8, { from: Z, to: F });
  }
  function E(F) {
    return A(F);
  }
  function k(F) {
    return E(Le(w(F), { replace: !0 }));
  }
  function V(F) {
    const Z = F.matched[F.matched.length - 1];
    if (Z && Z.redirect) {
      const { redirect: ee } = Z;
      let Q = typeof ee == "function" ? ee(F) : ee;
      return (
        typeof Q == "string" &&
          ((Q = Q.includes("?") || Q.includes("#") ? (Q = w(Q)) : { path: Q }),
          (Q.params = {})),
        Le(
          {
            query: F.query,
            hash: F.hash,
            params: Q.path != null ? {} : F.params,
          },
          Q
        )
      );
    }
  }
  function A(F, Z) {
    const ee = (u = p(F)),
      Q = s.value,
      Y = F.state,
      se = F.force,
      _ = F.replace === !0,
      T = V(ee);
    if (T)
      return A(
        Le(w(T), {
          state: typeof T == "object" ? Le({}, Y, T.state) : Y,
          force: se,
          replace: _,
        }),
        Z || ee
      );
    const R = ee;
    R.redirectedFrom = Z;
    let q;
    return (
      !se &&
        Pw(a, Q, ee) &&
        ((q = ar(16, { to: R, from: Q })), L(Q, Q, !0, !1)),
      (q ? Promise.resolve(q) : D(R, Q))
        .catch((U) => (kn(U) ? (kn(U, 2) ? U : O(U)) : H(U, R, Q)))
        .then((U) => {
          if (U) {
            if (kn(U, 2))
              return A(
                Le({ replace: _ }, w(U.to), {
                  state: typeof U.to == "object" ? Le({}, Y, U.to.state) : Y,
                  force: se,
                }),
                Z || R
              );
          } else U = I(R, Q, !0, _, Y);
          return P(R, Q, U), U;
        })
    );
  }
  function b(F, Z) {
    const ee = x(F, Z);
    return ee ? Promise.reject(ee) : Promise.resolve();
  }
  function C(F) {
    const Z = X.values().next().value;
    return Z && typeof Z.runWithContext == "function"
      ? Z.runWithContext(F)
      : F();
  }
  function D(F, Z) {
    let ee;
    const [Q, Y, se] = fC(F, Z);
    ee = gi(Q.reverse(), "beforeRouteLeave", F, Z);
    for (const T of Q)
      T.leaveGuards.forEach((R) => {
        ee.push(Gn(R, F, Z));
      });
    const _ = b.bind(null, F, Z);
    return (
      ee.push(_),
      re(ee)
        .then(() => {
          ee = [];
          for (const T of l.list()) ee.push(Gn(T, F, Z));
          return ee.push(_), re(ee);
        })
        .then(() => {
          ee = gi(Y, "beforeRouteUpdate", F, Z);
          for (const T of Y)
            T.updateGuards.forEach((R) => {
              ee.push(Gn(R, F, Z));
            });
          return ee.push(_), re(ee);
        })
        .then(() => {
          ee = [];
          for (const T of se)
            if (T.beforeEnter)
              if (sn(T.beforeEnter))
                for (const R of T.beforeEnter) ee.push(Gn(R, F, Z));
              else ee.push(Gn(T.beforeEnter, F, Z));
          return ee.push(_), re(ee);
        })
        .then(
          () => (
            F.matched.forEach((T) => (T.enterCallbacks = {})),
            (ee = gi(se, "beforeRouteEnter", F, Z, C)),
            ee.push(_),
            re(ee)
          )
        )
        .then(() => {
          ee = [];
          for (const T of o.list()) ee.push(Gn(T, F, Z));
          return ee.push(_), re(ee);
        })
        .catch((T) => (kn(T, 8) ? T : Promise.reject(T)))
    );
  }
  function P(F, Z, ee) {
    i.list().forEach((Q) => C(() => Q(F, Z, ee)));
  }
  function I(F, Z, ee, Q, Y) {
    const se = x(F, Z);
    if (se) return se;
    const _ = Z === Nn,
      T = za ? history.state : {};
    ee &&
      (Q || _
        ? r.replace(F.fullPath, Le({ scroll: _ && T && T.scroll }, Y))
        : r.push(F.fullPath, Y)),
      (s.value = F),
      L(F, Z, ee, _),
      O();
  }
  let $;
  function M() {
    $ ||
      ($ = r.listen((F, Z, ee) => {
        if (!ve.listening) return;
        const Q = p(F),
          Y = V(Q);
        if (Y) {
          A(Le(Y, { replace: !0, force: !0 }), Q).catch(Ar);
          return;
        }
        u = Q;
        const se = s.value;
        za && Mw(wd(se.fullPath, ee.delta), To()),
          D(Q, se)
            .catch((_) =>
              kn(_, 12)
                ? _
                : kn(_, 2)
                ? (A(Le(w(_.to), { force: !0 }), Q)
                    .then((T) => {
                      kn(T, 20) &&
                        !ee.delta &&
                        ee.type === Ur.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Ar),
                  Promise.reject())
                : (ee.delta && r.go(-ee.delta, !1), H(_, Q, se))
            )
            .then((_) => {
              (_ = _ || I(Q, se, !1)),
                _ &&
                  (ee.delta && !kn(_, 8)
                    ? r.go(-ee.delta, !1)
                    : ee.type === Ur.pop && kn(_, 20) && r.go(-1, !1)),
                P(Q, se, _);
            })
            .catch(Ar);
      }));
  }
  let N = br(),
    B = br(),
    j;
  function H(F, Z, ee) {
    O(F);
    const Q = B.list();
    return (
      Q.length ? Q.forEach((Y) => Y(F, Z, ee)) : console.error(F),
      Promise.reject(F)
    );
  }
  function z() {
    return j && s.value !== Nn
      ? Promise.resolve()
      : new Promise((F, Z) => {
          N.add([F, Z]);
        });
  }
  function O(F) {
    return (
      j ||
        ((j = !F),
        M(),
        N.list().forEach(([Z, ee]) => (F ? ee(F) : Z())),
        N.reset()),
      F
    );
  }
  function L(F, Z, ee, Q) {
    const { scrollBehavior: Y } = e;
    if (!za || !Y) return Promise.resolve();
    const se =
      (!ee && Bw(wd(F.fullPath, 0))) ||
      ((Q || !ee) && history.state && history.state.scroll) ||
      null;
    return ze()
      .then(() => Y(F, Z, se))
      .then((_) => _ && $w(_))
      .catch((_) => H(_, F, Z));
  }
  const G = (F) => r.go(F);
  let oe;
  const X = new Set(),
    ve = {
      currentRoute: s,
      listening: !0,
      addRoute: v,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: y,
      getRoutes: h,
      resolve: p,
      options: e,
      push: E,
      replace: k,
      go: G,
      back: () => G(-1),
      forward: () => G(1),
      beforeEach: l.add,
      beforeResolve: o.add,
      afterEach: i.add,
      onError: B.add,
      isReady: z,
      install(F) {
        const Z = this;
        F.component("RouterLink", oC),
          F.component("RouterView", cC),
          (F.config.globalProperties.$router = Z),
          Object.defineProperty(F.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Se(s),
          }),
          za &&
            !oe &&
            s.value === Nn &&
            ((oe = !0), E(r.location).catch((Y) => {}));
        const ee = {};
        for (const Y in Nn)
          Object.defineProperty(ee, Y, {
            get: () => s.value[Y],
            enumerable: !0,
          });
        F.provide(Ao, Z), F.provide(uu, Uf(ee)), F.provide(ls, s);
        const Q = F.unmount;
        X.add(F),
          (F.unmount = function () {
            X.delete(F),
              X.size < 1 &&
                ((u = Nn),
                $ && $(),
                ($ = null),
                (s.value = Nn),
                (oe = !1),
                (j = !1)),
              Q();
          });
      },
    };
  function re(F) {
    return F.reduce((Z, ee) => Z.then(() => C(ee)), Promise.resolve());
  }
  return ve;
}
function fC(e, t) {
  const n = [],
    a = [],
    r = [],
    l = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < l; o++) {
    const i = t.matched[o];
    i && (e.matched.find((u) => nr(u, i)) ? a.push(i) : n.push(i));
    const s = e.matched[o];
    s && (t.matched.find((u) => nr(u, s)) || r.push(s));
  }
  return [n, a, r];
}
function zm() {
  return Ie(Ao);
}
function vC(e) {
  return Ie(uu);
}
function os() {
  return {
    name: "",
    description: "",
    isPremium: !1,
    numberOfEmployees: 0,
    maxJobCount: 0,
  };
}
async function mC() {
  return (await Lt({ resource: "/company" })).data ?? os();
}
async function hC(e) {
  return (await Lt({ resource: "/company", method: "PATCH", data: e })).data;
}
var Bd = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Um = function (e) {
    const t = [];
    let n = 0;
    for (let a = 0; a < e.length; a++) {
      let r = e.charCodeAt(a);
      r < 128
        ? (t[n++] = r)
        : r < 2048
        ? ((t[n++] = (r >> 6) | 192), (t[n++] = (r & 63) | 128))
        : (r & 64512) === 55296 &&
          a + 1 < e.length &&
          (e.charCodeAt(a + 1) & 64512) === 56320
        ? ((r = 65536 + ((r & 1023) << 10) + (e.charCodeAt(++a) & 1023)),
          (t[n++] = (r >> 18) | 240),
          (t[n++] = ((r >> 12) & 63) | 128),
          (t[n++] = ((r >> 6) & 63) | 128),
          (t[n++] = (r & 63) | 128))
        : ((t[n++] = (r >> 12) | 224),
          (t[n++] = ((r >> 6) & 63) | 128),
          (t[n++] = (r & 63) | 128));
    }
    return t;
  },
  gC = function (e) {
    const t = [];
    let n = 0,
      a = 0;
    for (; n < e.length; ) {
      const r = e[n++];
      if (r < 128) t[a++] = String.fromCharCode(r);
      else if (r > 191 && r < 224) {
        const l = e[n++];
        t[a++] = String.fromCharCode(((r & 31) << 6) | (l & 63));
      } else if (r > 239 && r < 365) {
        const l = e[n++],
          o = e[n++],
          i = e[n++],
          s =
            (((r & 7) << 18) | ((l & 63) << 12) | ((o & 63) << 6) | (i & 63)) -
            65536;
        (t[a++] = String.fromCharCode(55296 + (s >> 10))),
          (t[a++] = String.fromCharCode(56320 + (s & 1023)));
      } else {
        const l = e[n++],
          o = e[n++];
        t[a++] = String.fromCharCode(
          ((r & 15) << 12) | ((l & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  Wm = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        a = [];
      for (let r = 0; r < e.length; r += 3) {
        const l = e[r],
          o = r + 1 < e.length,
          i = o ? e[r + 1] : 0,
          s = r + 2 < e.length,
          u = s ? e[r + 2] : 0,
          c = l >> 2,
          d = ((l & 3) << 4) | (i >> 4);
        let f = ((i & 15) << 2) | (u >> 6),
          v = u & 63;
        s || ((v = 64), o || (f = 64)), a.push(n[c], n[d], n[f], n[v]);
      }
      return a.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Um(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : gC(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        a = [];
      for (let r = 0; r < e.length; ) {
        const l = n[e.charAt(r++)],
          i = r < e.length ? n[e.charAt(r)] : 0;
        ++r;
        const u = r < e.length ? n[e.charAt(r)] : 64;
        ++r;
        const d = r < e.length ? n[e.charAt(r)] : 64;
        if ((++r, l == null || i == null || u == null || d == null))
          throw new yC();
        const f = (l << 2) | (i >> 4);
        if ((a.push(f), u !== 64)) {
          const v = ((i << 4) & 240) | (u >> 2);
          if ((a.push(v), d !== 64)) {
            const m = ((u << 6) & 192) | d;
            a.push(m);
          }
        }
      }
      return a;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class yC extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const bC = function (e) {
    const t = Um(e);
    return Wm.encodeByteArray(t, !0);
  },
  Gm = function (e) {
    return bC(e).replace(/\./g, "");
  },
  pC = function (e) {
    try {
      return Wm.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function SC() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wC = () => SC().__FIREBASE_DEFAULTS__,
  CC = () => {
    if (typeof process > "u" || typeof Bd > "u") return;
    const e = Bd.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  xC = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && pC(e[1]);
    return t && JSON.parse(t);
  },
  cu = () => {
    try {
      return wC() || CC() || xC();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  xP = (e) => {
    var t, n;
    return (n =
      (t = cu()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  Km = () => {
    var e;
    return (e = cu()) === null || e === void 0 ? void 0 : e.config;
  },
  _P = (e) => {
    var t;
    return (t = cu()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _C {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, a) => {
      n ? this.reject(n) : this.resolve(a),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, a));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ym() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function kP() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ym())
  );
}
function EP() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function PP() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function TP() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function AP() {
  const e = Ym();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function kC() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function EC() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const a = "validate-browser-context-for-indexeddb-analytics-module",
        r = self.indexedDB.open(a);
      (r.onsuccess = () => {
        r.result.close(), n || self.indexedDB.deleteDatabase(a), e(!0);
      }),
        (r.onupgradeneeded = () => {
          n = !1;
        }),
        (r.onerror = () => {
          var l;
          t(
            ((l = r.error) === null || l === void 0 ? void 0 : l.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
function IP() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PC = "FirebaseError";
class cr extends Error {
  constructor(t, n, a) {
    super(n),
      (this.code = t),
      (this.customData = a),
      (this.name = PC),
      Object.setPrototypeOf(this, cr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, qm.prototype.create);
  }
}
class qm {
  constructor(t, n, a) {
    (this.service = t), (this.serviceName = n), (this.errors = a);
  }
  create(t, ...n) {
    const a = n[0] || {},
      r = `${this.service}/${t}`,
      l = this.errors[t],
      o = l ? TC(l, a) : "Error",
      i = `${this.serviceName}: ${o} (${r}).`;
    return new cr(r, i, a);
  }
}
function TC(e, t) {
  return e.replace(AC, (n, a) => {
    const r = t[a];
    return r != null ? String(r) : `<${a}?>`;
  });
}
const AC = /\{\$([^}]+)}/g;
function VP(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function is(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    a = Object.keys(t);
  for (const r of n) {
    if (!a.includes(r)) return !1;
    const l = e[r],
      o = t[r];
    if (Ld(l) && Ld(o)) {
      if (!is(l, o)) return !1;
    } else if (l !== o) return !1;
  }
  for (const r of a) if (!n.includes(r)) return !1;
  return !0;
}
function Ld(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function DP(e) {
  const t = [];
  for (const [n, a] of Object.entries(e))
    Array.isArray(a)
      ? a.forEach((r) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(a));
  return t.length ? "&" + t.join("&") : "";
}
function OP(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((a) => {
        if (a) {
          const [r, l] = a.split("=");
          t[decodeURIComponent(r)] = decodeURIComponent(l);
        }
      }),
    t
  );
}
function $P(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function MP(e, t) {
  const n = new IC(e, t);
  return n.subscribe.bind(n);
}
class IC {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((a) => {
          this.error(a);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, a) {
    let r;
    if (t === void 0 && n === void 0 && a === void 0)
      throw new Error("Missing Observer.");
    VC(t, ["next", "error", "complete"])
      ? (r = t)
      : (r = { next: t, error: n, complete: a }),
      r.next === void 0 && (r.next = yi),
      r.error === void 0 && (r.error = yi),
      r.complete === void 0 && (r.complete = yi);
    const l = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? r.error(this.finalError) : r.complete();
          } catch {}
        }),
      this.observers.push(r),
      l
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (a) {
          typeof console < "u" && console.error && console.error(a);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function VC(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function yi() {}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DC = 1e3,
  OC = 2,
  $C = 4 * 60 * 60 * 1e3,
  MC = 0.5;
function BP(e, t = DC, n = OC) {
  const a = t * Math.pow(n, e),
    r = Math.round(MC * a * (Math.random() - 0.5) * 2);
  return Math.min($C, a + r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LP(e) {
  return e && e._delegate ? e._delegate : e;
}
class Kl {
  constructor(t, n, a) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = a),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const da = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BC {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const a = new _C();
      if (
        (this.instancesDeferred.set(n, a),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const r = this.getOrInitializeService({ instanceIdentifier: n });
          r && a.resolve(r);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const a = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      r =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(a) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: a });
      } catch (l) {
        if (r) return null;
        throw l;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (RC(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: da });
        } catch {}
      for (const [n, a] of this.instancesDeferred.entries()) {
        const r = this.normalizeInstanceIdentifier(n);
        try {
          const l = this.getOrInitializeService({ instanceIdentifier: r });
          a.resolve(l);
        } catch {}
      }
    }
  }
  clearInstance(t = da) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = da) {
    return this.instances.has(t);
  }
  getOptions(t = da) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      a = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(a))
      throw Error(`${this.name}(${a}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const r = this.getOrInitializeService({
      instanceIdentifier: a,
      options: n,
    });
    for (const [l, o] of this.instancesDeferred.entries()) {
      const i = this.normalizeInstanceIdentifier(l);
      a === i && o.resolve(r);
    }
    return r;
  }
  onInit(t, n) {
    var a;
    const r = this.normalizeInstanceIdentifier(n),
      l =
        (a = this.onInitCallbacks.get(r)) !== null && a !== void 0
          ? a
          : new Set();
    l.add(t), this.onInitCallbacks.set(r, l);
    const o = this.instances.get(r);
    return (
      o && t(o, r),
      () => {
        l.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const a = this.onInitCallbacks.get(n);
    if (a)
      for (const r of a)
        try {
          r(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let a = this.instances.get(t);
    if (
      !a &&
      this.component &&
      ((a = this.component.instanceFactory(this.container, {
        instanceIdentifier: LC(t),
        options: n,
      })),
      this.instances.set(t, a),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(a, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, a);
      } catch {}
    return a || null;
  }
  normalizeInstanceIdentifier(t = da) {
    return this.component ? (this.component.multipleInstances ? t : da) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function LC(e) {
  return e === da ? void 0 : e;
}
function RC(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FC {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new BC(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Xe;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(Xe || (Xe = {}));
const NC = {
    debug: Xe.DEBUG,
    verbose: Xe.VERBOSE,
    info: Xe.INFO,
    warn: Xe.WARN,
    error: Xe.ERROR,
    silent: Xe.SILENT,
  },
  HC = Xe.INFO,
  jC = {
    [Xe.DEBUG]: "log",
    [Xe.VERBOSE]: "log",
    [Xe.INFO]: "info",
    [Xe.WARN]: "warn",
    [Xe.ERROR]: "error",
  },
  zC = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const a = new Date().toISOString(),
      r = jC[t];
    if (r) console[r](`[${a}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class UC {
  constructor(t) {
    (this.name = t),
      (this._logLevel = HC),
      (this._logHandler = zC),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Xe))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? NC[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Xe.DEBUG, ...t),
      this._logHandler(this, Xe.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Xe.VERBOSE, ...t),
      this._logHandler(this, Xe.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Xe.INFO, ...t),
      this._logHandler(this, Xe.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Xe.WARN, ...t),
      this._logHandler(this, Xe.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Xe.ERROR, ...t),
      this._logHandler(this, Xe.ERROR, ...t);
  }
}
const WC = (e, t) => t.some((n) => e instanceof n);
let Rd, Fd;
function GC() {
  return (
    Rd ||
    (Rd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function KC() {
  return (
    Fd ||
    (Fd = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Jm = new WeakMap(),
  ss = new WeakMap(),
  Xm = new WeakMap(),
  bi = new WeakMap(),
  du = new WeakMap();
function YC(e) {
  const t = new Promise((n, a) => {
    const r = () => {
        e.removeEventListener("success", l), e.removeEventListener("error", o);
      },
      l = () => {
        n(In(e.result)), r();
      },
      o = () => {
        a(e.error), r();
      };
    e.addEventListener("success", l), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Jm.set(n, e);
      })
      .catch(() => {}),
    du.set(t, e),
    t
  );
}
function qC(e) {
  if (ss.has(e)) return;
  const t = new Promise((n, a) => {
    const r = () => {
        e.removeEventListener("complete", l),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      l = () => {
        n(), r();
      },
      o = () => {
        a(e.error || new DOMException("AbortError", "AbortError")), r();
      };
    e.addEventListener("complete", l),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  ss.set(e, t);
}
let us = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return ss.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || Xm.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return In(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function JC(e) {
  us = e(us);
}
function XC(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const a = e.call(pi(this), t, ...n);
        return Xm.set(a, t.sort ? t.sort() : [t]), In(a);
      }
    : KC().includes(e)
    ? function (...t) {
        return e.apply(pi(this), t), In(Jm.get(this));
      }
    : function (...t) {
        return In(e.apply(pi(this), t));
      };
}
function ZC(e) {
  return typeof e == "function"
    ? XC(e)
    : (e instanceof IDBTransaction && qC(e),
      WC(e, GC()) ? new Proxy(e, us) : e);
}
function In(e) {
  if (e instanceof IDBRequest) return YC(e);
  if (bi.has(e)) return bi.get(e);
  const t = ZC(e);
  return t !== e && (bi.set(e, t), du.set(t, e)), t;
}
const pi = (e) => du.get(e);
function QC(e, t, { blocked: n, upgrade: a, blocking: r, terminated: l } = {}) {
  const o = indexedDB.open(e, t),
    i = In(o);
  return (
    a &&
      o.addEventListener("upgradeneeded", (s) => {
        a(In(o.result), s.oldVersion, s.newVersion, In(o.transaction), s);
      }),
    n && o.addEventListener("blocked", (s) => n(s.oldVersion, s.newVersion, s)),
    i
      .then((s) => {
        l && s.addEventListener("close", () => l()),
          r &&
            s.addEventListener("versionchange", (u) =>
              r(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    i
  );
}
function RP(e, { blocked: t } = {}) {
  const n = indexedDB.deleteDatabase(e);
  return (
    t && n.addEventListener("blocked", (a) => t(a.oldVersion, a)),
    In(n).then(() => {})
  );
}
const ex = ["get", "getKey", "getAll", "getAllKeys", "count"],
  tx = ["put", "add", "delete", "clear"],
  Si = new Map();
function Nd(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Si.get(t)) return Si.get(t);
  const n = t.replace(/FromIndex$/, ""),
    a = t !== n,
    r = tx.includes(n);
  if (
    !(n in (a ? IDBIndex : IDBObjectStore).prototype) ||
    !(r || ex.includes(n))
  )
    return;
  const l = async function (o, ...i) {
    const s = this.transaction(o, r ? "readwrite" : "readonly");
    let u = s.store;
    return (
      a && (u = u.index(i.shift())),
      (await Promise.all([u[n](...i), r && s.done]))[0]
    );
  };
  return Si.set(t, l), l;
}
JC((e) => ({
  ...e,
  get: (t, n, a) => Nd(t, n) || e.get(t, n, a),
  has: (t, n) => !!Nd(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nx {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (ax(n)) {
          const a = n.getImmediate();
          return `${a.library}/${a.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function ax(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const cs = "@firebase/app",
  Hd = "0.10.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const On = new UC("@firebase/app"),
  rx = "@firebase/app-compat",
  lx = "@firebase/analytics-compat",
  ox = "@firebase/analytics",
  ix = "@firebase/app-check-compat",
  sx = "@firebase/app-check",
  ux = "@firebase/auth",
  cx = "@firebase/auth-compat",
  dx = "@firebase/database",
  fx = "@firebase/data-connect",
  vx = "@firebase/database-compat",
  mx = "@firebase/functions",
  hx = "@firebase/functions-compat",
  gx = "@firebase/installations",
  yx = "@firebase/installations-compat",
  bx = "@firebase/messaging",
  px = "@firebase/messaging-compat",
  Sx = "@firebase/performance",
  wx = "@firebase/performance-compat",
  Cx = "@firebase/remote-config",
  xx = "@firebase/remote-config-compat",
  _x = "@firebase/storage",
  kx = "@firebase/storage-compat",
  Ex = "@firebase/firestore",
  Px = "@firebase/vertexai",
  Tx = "@firebase/firestore-compat",
  Ax = "firebase",
  Ix = "11.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ds = "[DEFAULT]",
  Vx = {
    [cs]: "fire-core",
    [rx]: "fire-core-compat",
    [ox]: "fire-analytics",
    [lx]: "fire-analytics-compat",
    [sx]: "fire-app-check",
    [ix]: "fire-app-check-compat",
    [ux]: "fire-auth",
    [cx]: "fire-auth-compat",
    [dx]: "fire-rtdb",
    [fx]: "fire-data-connect",
    [vx]: "fire-rtdb-compat",
    [mx]: "fire-fn",
    [hx]: "fire-fn-compat",
    [gx]: "fire-iid",
    [yx]: "fire-iid-compat",
    [bx]: "fire-fcm",
    [px]: "fire-fcm-compat",
    [Sx]: "fire-perf",
    [wx]: "fire-perf-compat",
    [Cx]: "fire-rc",
    [xx]: "fire-rc-compat",
    [_x]: "fire-gcs",
    [kx]: "fire-gcs-compat",
    [Ex]: "fire-fst",
    [Tx]: "fire-fst-compat",
    [Px]: "fire-vertex",
    "fire-js": "fire-js",
    [Ax]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yl = new Map(),
  Dx = new Map(),
  fs = new Map();
function jd(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    On.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function vs(e) {
  const t = e.name;
  if (fs.has(t))
    return (
      On.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  fs.set(t, e);
  for (const n of Yl.values()) jd(n, e);
  for (const n of Dx.values()) jd(n, e);
  return !0;
}
function FP(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function NP(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ox = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  qn = new qm("app", "Firebase", Ox);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $x {
  constructor(t, n, a) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = a),
      this.container.addComponent(new Kl("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw qn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const HP = Ix;
function Zm(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const a = Object.assign({ name: ds, automaticDataCollectionEnabled: !1 }, t),
    r = a.name;
  if (typeof r != "string" || !r)
    throw qn.create("bad-app-name", { appName: String(r) });
  if ((n || (n = Km()), !n)) throw qn.create("no-options");
  const l = Yl.get(r);
  if (l) {
    if (is(n, l.options) && is(a, l.config)) return l;
    throw qn.create("duplicate-app", { appName: r });
  }
  const o = new FC(r);
  for (const s of fs.values()) o.addComponent(s);
  const i = new $x(n, a, o);
  return Yl.set(r, i), i;
}
function jP(e = ds) {
  const t = Yl.get(e);
  if (!t && e === ds && Km()) return Zm();
  if (!t) throw qn.create("no-app", { appName: e });
  return t;
}
function Vl(e, t, n) {
  var a;
  let r = (a = Vx[e]) !== null && a !== void 0 ? a : e;
  n && (r += `-${n}`);
  const l = r.match(/\s|\//),
    o = t.match(/\s|\//);
  if (l || o) {
    const i = [`Unable to register library "${r}" with version "${t}":`];
    l &&
      i.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`
      ),
      l && o && i.push("and"),
      o &&
        i.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      On.warn(i.join(" "));
    return;
  }
  vs(new Kl(`${r}-version`, () => ({ library: r, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mx = "firebase-heartbeat-database",
  Bx = 1,
  Wr = "firebase-heartbeat-store";
let wi = null;
function Qm() {
  return (
    wi ||
      (wi = QC(Mx, Bx, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Wr);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw qn.create("idb-open", { originalErrorMessage: e.message });
      })),
    wi
  );
}
async function Lx(e) {
  try {
    const n = (await Qm()).transaction(Wr),
      a = await n.objectStore(Wr).get(eh(e));
    return await n.done, a;
  } catch (t) {
    if (t instanceof cr) On.warn(t.message);
    else {
      const n = qn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      On.warn(n.message);
    }
  }
}
async function zd(e, t) {
  try {
    const a = (await Qm()).transaction(Wr, "readwrite");
    await a.objectStore(Wr).put(t, eh(e)), await a.done;
  } catch (n) {
    if (n instanceof cr) On.warn(n.message);
    else {
      const a = qn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      On.warn(a.message);
    }
  }
}
function eh(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rx = 1024,
  Fx = 30 * 24 * 60 * 60 * 1e3;
class Nx {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new jx(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((a) => ((this._heartbeatsCache = a), a)));
  }
  async triggerHeartbeat() {
    var t, n;
    try {
      const r = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        l = Ud();
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === l ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === l)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: l, agent: r }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((o) => {
              const i = new Date(o.date).valueOf();
              return Date.now() - i <= Fx;
            })),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (a) {
      On.warn(a);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = Ud(),
        { heartbeatsToSend: a, unsentEntries: r } = Hx(
          this._heartbeatsCache.heartbeats
        ),
        l = Gm(JSON.stringify({ version: 2, heartbeats: a }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        r.length > 0
          ? ((this._heartbeatsCache.heartbeats = r),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        l
      );
    } catch (n) {
      return On.warn(n), "";
    }
  }
}
function Ud() {
  return new Date().toISOString().substring(0, 10);
}
function Hx(e, t = Rx) {
  const n = [];
  let a = e.slice();
  for (const r of e) {
    const l = n.find((o) => o.agent === r.agent);
    if (l) {
      if ((l.dates.push(r.date), Wd(n) > t)) {
        l.dates.pop();
        break;
      }
    } else if ((n.push({ agent: r.agent, dates: [r.date] }), Wd(n) > t)) {
      n.pop();
      break;
    }
    a = a.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: a };
}
class jx {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return kC()
      ? EC()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Lx(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return zd(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : r.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return zd(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Wd(e) {
  return Gm(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zx(e) {
  vs(new Kl("platform-logger", (t) => new nx(t), "PRIVATE")),
    vs(new Kl("heartbeat", (t) => new Nx(t), "PRIVATE")),
    Vl(cs, Hd, e),
    Vl(cs, Hd, "esm2017"),
    Vl("fire-js", "");
}
zx("");
var Ux = "firebase",
  Wx = "11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Vl(Ux, Wx, "app");
function zP(e) {
  if (typeof e == "string") return e;
  if (e instanceof cr)
    switch (e.code) {
      case "auth/email-already-exists":
      case "auth/email-already-in-use":
        return "E-Mail-Adresse bereits vergeben";
      case "auth/id-token-expired":
        return "ID-Token abgelaufen";
      case "auth/id-token-revoked":
        return "ID-Token widerrufen";
      case "auth/insufficient-permission":
        return "Fehlende Berechtigung";
      case "auth/internal-error":
        return "Interner Fehler";
      case "auth/invalid-display-name":
        return "Ungültiger Anzeigename";
      case "auth/invalid-email":
        return "E-Mail-Adresse ungültig";
      case "auth/invalid-id-token":
        return "Ungültiger ID-Token";
      case "auth/invalid-password":
      case "auth/weak-password":
        return "Ungültiges Passwort (min. sechs Zeichen)";
      case "auth/invalid-phone-number":
        return "Ungültige Telefonnummer";
      case "auth/invalid-photo-url":
        return "Ungültige Bild-URL";
      case "auth/maximum-user-count-exceeded":
        return "Maximale Anzahl an Benutzern erreicht";
      case "auth/operation-not-allowed":
        return "Anmeldemethode nicht verfügbar";
      case "auth/phone-number-already-exists":
        return "Telefonnummer bereits vergeben";
      case "auth/session-cookie-expired":
        return "Firebase-Sitzung ausgelaufen";
      case "auth/session-cookie-revoked":
        return "Firebase-Sitzung widerrufen";
      case "auth/uid-already-exists":
        return "UID bereits verwendet";
      case "auth/user-not-found":
        return "Benutzer existiert nicht";
      case "auth/missing-password":
        return "Bitte Passwort eingeben";
      case "auth/wrong-password":
        return "Falsches Passwort";
    }
  return e instanceof Error ? e.message : e;
}
function rr(e) {
  switch (typeof e) {
    case "object": {
      if (e === null) return null;
      if (Array.isArray(e)) return e.map((n) => rr(n));
      const t = {};
      for (const n in e) t[n] = rr(e[n]);
      return t;
    }
    default:
      return e;
  }
}
function UP(e) {
  return e
    .join(" ")
    .split(" ")
    .map((n) => n[0])
    .join("");
}
function WP(e) {
  return !e.startsWith("http://") && !e.startsWith("https://")
    ? `http://${e}`
    : e;
}
function th(e) {
  if (e === null) return null;
  const t = e.split(".");
  return t.length < 2 ? null : t.slice(-1)[0];
}
const Gx = ["jpg", "jpeg", "bmp", "webp", "svg", "gif", "png", "avif"],
  Kx = ["mp4", "webm", "mkv", "ogv", "mov"];
function GP(e) {
  return e === null
    ? null
    : Gx.includes(e)
    ? "image"
    : Kx.includes(e)
    ? "video"
    : null;
}
function KP(e) {
  const t = [];
  for (const n of [e.attachment1, e.attachment2, e.attachment3])
    n && t.push({ url: n, extension: th(n) });
  return t;
}
function YP(e) {
  var t, n, a;
  return {
    id: e.id ?? 0,
    userId: e.userId,
    userName: ((t = e.user) == null ? void 0 : t.email) ?? "",
    jobId: e.job.id ?? 0,
    jobName: e.job.name,
    companyId: ((n = e.job.company) == null ? void 0 : n.id) ?? 0,
    companyName: ((a = e.job.company) == null ? void 0 : a.name) ?? "",
  };
}
function qP(e, t = !1) {
  var a;
  if (!e) return [];
  const n = [
    e.imageUrl,
    e.imageUrl2,
    e.imageUrl3,
    e.imageUrl4,
    e.imageUrl5,
    e.videoUrl,
  ].filter((r) => !!r);
  return t && n.length === 0 && (a = e.company) != null && a.logoUrl
    ? [e.company.logoUrl]
    : n;
}
function Yx(e) {
  return Math.min(e / 1e4, 100);
}
function JP(e) {
  return Math.round(Yx(e));
}
function XP(e) {
  const t = th(e);
  return t ? !!["jpg", "jpeg", "gif", "bmp", "png", "webp"].includes(t) : !1;
}
function ZP(e) {
  return e
    ? e.lastName
      ? `${e.firstName} ${e.lastName}`
      : e.firstName
    : "(gelöschter Benutzer)";
}
function QP(e, t, n = t - 50) {
  if (n > t) throw new Error("afterMin > afterMax");
  if (e.length <= t) return e;
  const a = e.slice(0, t),
    r = a.slice(n),
    o = /(.*)(\W)/.exec(r);
  if (!o) return `${a}…`;
  const i = o.index + n + o[1].length;
  return `${a.slice(0, i)} …`;
}
const Io = rl("company", () => {
    const e = Ct(),
      t = W(os()),
      n = W(os()),
      a = W(!1),
      r = W(null),
      l = W(!1);
    let o = () => {};
    const i = new Promise((d) => {
      o = d;
    });
    async function s() {
      var d;
      try {
        if (
          ((a.value = !0),
          await e.dataLoaded,
          ((d = e.user) == null ? void 0 : d.type) !== Zn.Company)
        )
          return;
        (t.value = await mC()), (r.value = null);
      } catch (f) {
        throw ((r.value = f), f);
      } finally {
        (a.value = !1), o(), (l.value = !0);
      }
    }
    async function u() {
      a.value = !0;
      try {
        await hC(n.value), (t.value = rr(n.value));
      } finally {
        a.value = !1;
      }
    }
    s().catch(console.error);
    function c() {
      n.value = rr(t.value);
    }
    return (
      ce(t, c),
      ce(() => e.user, s),
      {
        company: Dt(t),
        loading: Dt(a),
        initialized: Dt(l),
        error: Dt(r),
        fetch: s,
        update: u,
        resetUpdatedCompany: c,
        updatedCompany: n,
        dataLoaded: i,
      }
    );
  }),
  qx = {
    path: "/jobs",
    name: "JobsModule",
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    redirect: { name: "Jobs" },
    meta: {
      isAllowed: S(() => {
        var t;
        const e = Ct(wt);
        return (
          e.loggedInAndVerified &&
          ((t = e.user) == null ? void 0 : t.type) === Zn.Company
        );
      }),
      title: "Jobs",
      icon: "mdi-account-tie",
    },
    children: [
      {
        path: "",
        name: "Jobs",
        component: async () =>
          Ne(
            () => import("./JobsView-DJg4mGFu.js"),
            __vite__mapDeps([3, 4, 5])
          ),
      },
      {
        path: "view/:id",
        name: "ViewJob",
        component: async () =>
          Ne(
            () => import("./ViewJobView-CyeuUV7U.js"),
            __vite__mapDeps([6, 4, 5, 7, 8, 9, 10, 11, 12, 13])
          ),
      },
      {
        path: "suggestions/:id",
        name: "JobSuggestedUsers",
        component: async () =>
          Ne(
            () => import("./SuggestedUsersView-D-PHKcJE.js"),
            __vite__mapDeps([14, 4, 5, 15, 7, 16, 17, 18, 10, 19, 20])
          ),
        meta: { isAllowed: S(() => Io().company.isPremium) },
      },
      {
        path: "create",
        name: "CreateJob",
        component: async () =>
          Ne(
            () => import("./EditJobView-DcfEJ_pw.js"),
            __vite__mapDeps([
              21, 22, 7, 4, 5, 23, 24, 25, 26, 15, 10, 11, 12, 27, 28, 29,
            ])
          ),
      },
      {
        path: "edit/:id?/:step?",
        name: "EditJob",
        component: async () =>
          Ne(
            () => import("./EditJobView-DcfEJ_pw.js"),
            __vite__mapDeps([
              21, 22, 7, 4, 5, 23, 24, 25, 26, 15, 10, 11, 12, 27, 28, 29,
            ])
          ),
      },
      {
        path: "preview/:id?",
        name: "PreviewJob",
        component: async () =>
          Ne(
            () => import("./PreviewJobView-16d8Y-I8.js"),
            __vite__mapDeps([
              30, 31, 5, 24, 25, 27, 28, 32, 33, 34, 35, 16, 36, 7, 4, 10, 37,
            ])
          ),
      },
    ],
  },
  Jx = {
    path: "/chat",
    name: "ChatModule",
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    redirect: { name: "Chat" },
    meta: {
      isAllowed: S(() => Ct(wt).loggedInAndVerified),
      title: "Chat",
      icon: "mdi-chat",
    },
    children: [
      {
        path: "",
        name: "Chat",
        component: async () =>
          Ne(
            () => import("./ChatView-Cvx_N5Th.js"),
            __vite__mapDeps([38, 39, 40, 41, 32, 33, 5])
          ),
      },
      {
        path: ":id",
        name: "ViewChat",
        component: async () =>
          Ne(
            () => import("./ViewChatView-CF1awOvo.js"),
            __vite__mapDeps([
              42, 39, 40, 41, 32, 33, 5, 17, 7, 16, 18, 43, 23, 24, 25, 26, 31,
              27, 28, 34, 10, 44,
            ])
          ),
      },
    ],
  },
  Xx = {
    path: "/home",
    name: "HomeModule",
    redirect: { name: "Home" },
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    meta: {
      isAllowed: S(() => Ct(wt).loggedIn),
      title: "Home",
      icon: "mdi-home",
    },
    children: [
      {
        path: "",
        name: "Home",
        component: async () =>
          Ne(
            () => import("./HomeView-JhvVFVH2.js"),
            __vite__mapDeps([45, 43, 40, 41, 46, 10, 47])
          ),
      },
    ],
  },
  Zx = {
    path: "/match",
    name: "MatchModule",
    redirect: { name: "Match" },
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    meta: {
      isAllowed: S(() => {
        var t;
        const e = Ct(wt);
        return (
          e.loggedInAndVerified &&
          ((t = e.user) == null ? void 0 : t.type) === Zn.Applicant
        );
      }),
      title: "Match",
      icon: "mdi-bullseye-arrow",
    },
    children: [
      {
        path: "",
        name: "Match",
        component: async () =>
          Ne(
            () => import("./MatchView-CqbQdPBS.js"),
            __vite__mapDeps([
              48, 17, 7, 16, 18, 5, 43, 31, 24, 25, 27, 28, 32, 33, 34, 35, 36,
              8, 9, 10, 19, 20, 49,
            ])
          ),
      },
    ],
  },
  ms = Ia("App", {
    web: () =>
      Ne(() => import("./web-ejvkHIjP.js"), []).then((e) => new e.AppWeb()),
  }),
  Qx = {
    path: "/profile",
    name: "ProfileModule",
    redirect: { name: "Profile" },
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    meta: {
      isAllowed: S(() => Ct(wt).loggedIn),
      title: "Profil",
      icon: "mdi-account",
    },
    children: [
      { path: "", name: "Profile", redirect: { name: "ViewProfile" } },
      {
        path: "view",
        name: "ViewProfile",
        component: async () =>
          Ne(
            () => import("./ViewProfileView-DUrAtAWP.js"),
            __vite__mapDeps([50, 7, 43, 51, 46, 10, 52])
          ),
      },
      {
        path: "edit/:step?",
        name: "EditProfile",
        component: async () =>
          Ne(
            () => import("./EditProfileView-CuP-PCm8.js"),
            __vite__mapDeps([53, 7, 43, 22, 23, 24, 25, 26, 11, 12, 10])
          ),
        meta: {
          isAllowed: S(() => {
            var t;
            return (
              ((t = Ct(wt).user) == null ? void 0 : t.type) === Zn.Applicant
            );
          }),
        },
      },
      {
        path: "user",
        name: "User",
        component: async () =>
          Ne(
            () => import("./UserView-DNsle6DZ.js"),
            __vite__mapDeps([54, 51, 23, 24, 25, 26, 10])
          ),
      },
      {
        path: "company",
        name: "Company",
        component: async () =>
          Ne(
            () => import("./CompanyView-BC8R8R4C.js"),
            __vite__mapDeps([55, 23, 24, 25, 26, 10])
          ),
        meta: {
          isAllowed: S(() => {
            var t;
            return ((t = Ct(wt).user) == null ? void 0 : t.type) === Zn.Company;
          }),
        },
      },
    ],
  },
  He = K({ tag: { type: String, default: "div" } }, "tag"),
  e1 = K({ text: String, ...ke(), ...He() }, "VToolbarTitle"),
  fu = fe()({
    name: "VToolbarTitle",
    props: e1(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() => {
          const a = !!(n.default || n.text || e.text);
          return g(
            e.tag,
            { class: ["v-toolbar-title", e.class], style: e.style },
            {
              default: () => {
                var r;
                return [
                  a &&
                    g("div", { class: "v-toolbar-title__placeholder" }, [
                      n.text ? n.text() : e.text,
                      (r = n.default) == null ? void 0 : r.call(n),
                    ]),
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  t1 = K(
    {
      disabled: Boolean,
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: String,
      origin: String,
    },
    "transition"
  );
function Kt(e, t, n) {
  return fe()({
    name: e,
    props: t1({ mode: n, origin: t }),
    setup(a, r) {
      let { slots: l } = r;
      const o = {
        onBeforeEnter(i) {
          a.origin && (i.style.transformOrigin = a.origin);
        },
        onLeave(i) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: u,
              offsetWidth: c,
              offsetHeight: d,
            } = i;
            (i._transitionInitialStyles = {
              position: i.style.position,
              top: i.style.top,
              left: i.style.left,
              width: i.style.width,
              height: i.style.height,
            }),
              (i.style.position = "absolute"),
              (i.style.top = `${s}px`),
              (i.style.left = `${u}px`),
              (i.style.width = `${c}px`),
              (i.style.height = `${d}px`);
          }
          a.hideOnLeave && i.style.setProperty("display", "none", "important");
        },
        onAfterLeave(i) {
          if (a.leaveAbsolute && i != null && i._transitionInitialStyles) {
            const {
              position: s,
              top: u,
              left: c,
              width: d,
              height: f,
            } = i._transitionInitialStyles;
            delete i._transitionInitialStyles,
              (i.style.position = s || ""),
              (i.style.top = u || ""),
              (i.style.left = c || ""),
              (i.style.width = d || ""),
              (i.style.height = f || "");
          }
        },
      };
      return () => {
        const i = a.group ? Xs : Jn;
        return aa(
          i,
          {
            name: a.disabled ? "" : e,
            css: !a.disabled,
            ...(a.group ? void 0 : { mode: a.mode }),
            ...(a.disabled ? {} : o),
          },
          l.default
        );
      };
    },
  });
}
function nh(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return fe()({
    name: e,
    props: {
      mode: { type: String, default: n },
      disabled: Boolean,
      group: Boolean,
    },
    setup(a, r) {
      let { slots: l } = r;
      const o = a.group ? Xs : Jn;
      return () =>
        aa(
          o,
          {
            name: a.disabled ? "" : e,
            css: !a.disabled,
            ...(a.disabled ? {} : t),
          },
          l.default
        );
    },
  });
}
function ah() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    )
      ? "width"
      : "height",
    a = Rt(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      (o._parent = o.parentNode),
        (o._initialStyle = {
          transition: o.style.transition,
          overflow: o.style.overflow,
          [n]: o.style[n],
        });
    },
    onEnter(o) {
      const i = o._initialStyle;
      o.style.setProperty("transition", "none", "important"),
        (o.style.overflow = "hidden");
      const s = `${o[a]}px`;
      (o.style[n] = "0"),
        o.offsetHeight,
        (o.style.transition = i.transition),
        e && o._parent && o._parent.classList.add(e),
        requestAnimationFrame(() => {
          o.style[n] = s;
        });
    },
    onAfterEnter: l,
    onEnterCancelled: l,
    onLeave(o) {
      (o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n],
      }),
        (o.style.overflow = "hidden"),
        (o.style[n] = `${o[a]}px`),
        o.offsetHeight,
        requestAnimationFrame(() => (o.style[n] = "0"));
    },
    onAfterLeave: r,
    onLeaveCancelled: r,
  };
  function r(o) {
    e && o._parent && o._parent.classList.remove(e), l(o);
  }
  function l(o) {
    const i = o._initialStyle[n];
    (o.style.overflow = o._initialStyle.overflow),
      i != null && (o.style[n] = i),
      delete o._initialStyle;
  }
}
const n1 = K({ target: [Object, Array] }, "v-dialog-transition"),
  vu = fe()({
    name: "VDialogTransition",
    props: n1(),
    setup(e, t) {
      let { slots: n } = t;
      const a = {
        onBeforeEnter(r) {
          (r.style.pointerEvents = "none"), (r.style.visibility = "hidden");
        },
        async onEnter(r, l) {
          var f;
          await new Promise((v) => requestAnimationFrame(v)),
            await new Promise((v) => requestAnimationFrame(v)),
            (r.style.visibility = "");
          const { x: o, y: i, sx: s, sy: u, speed: c } = Kd(e.target, r),
            d = fa(
              r,
              [
                {
                  transform: `translate(${o}px, ${i}px) scale(${s}, ${u})`,
                  opacity: 0,
                },
                {},
              ],
              { duration: 225 * c, easing: p0 }
            );
          (f = Gd(r)) == null ||
            f.forEach((v) => {
              fa(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], {
                duration: 225 * 2 * c,
                easing: Fr,
              });
            }),
            d.finished.then(() => l());
        },
        onAfterEnter(r) {
          r.style.removeProperty("pointer-events");
        },
        onBeforeLeave(r) {
          r.style.pointerEvents = "none";
        },
        async onLeave(r, l) {
          var f;
          await new Promise((v) => requestAnimationFrame(v));
          const { x: o, y: i, sx: s, sy: u, speed: c } = Kd(e.target, r);
          fa(
            r,
            [
              {},
              {
                transform: `translate(${o}px, ${i}px) scale(${s}, ${u})`,
                opacity: 0,
              },
            ],
            { duration: 125 * c, easing: S0 }
          ).finished.then(() => l()),
            (f = Gd(r)) == null ||
              f.forEach((v) => {
                fa(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                  duration: 125 * 2 * c,
                  easing: Fr,
                });
              });
        },
        onAfterLeave(r) {
          r.style.removeProperty("pointer-events");
        },
      };
      return () =>
        e.target
          ? g(Jn, le({ name: "dialog-transition" }, a, { css: !1 }), n)
          : g(Jn, { name: "dialog-transition" }, n);
    },
  });
function Gd(e) {
  var n;
  const t =
    (n = e.querySelector(
      ":scope > .v-card, :scope > .v-sheet, :scope > .v-list"
    )) == null
      ? void 0
      : n.children;
  return t && [...t];
}
function Kd(e, t) {
  const n = Qv(e),
    a = au(t),
    [r, l] = getComputedStyle(t)
      .transformOrigin.split(" ")
      .map((p) => parseFloat(p)),
    [o, i] = getComputedStyle(t)
      .getPropertyValue("--v-overlay-anchor-origin")
      .split(" ");
  let s = n.left + n.width / 2;
  o === "left" || i === "left"
    ? (s -= n.width / 2)
    : (o === "right" || i === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || i === "top"
    ? (u -= n.height / 2)
    : (o === "bottom" || i === "bottom") && (u += n.height / 2);
  const c = n.width / a.width,
    d = n.height / a.height,
    f = Math.max(1, c, d),
    v = c / f || 0,
    m = d / f || 0,
    h = (a.width * a.height) / (window.innerWidth * window.innerHeight),
    y = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return { x: s - (r + a.left), y: u - (l + a.top), sx: v, sy: m, speed: y };
}
Kt("fab-transition", "center center", "out-in");
Kt("dialog-bottom-transition");
Kt("dialog-top-transition");
const Yd = Kt("fade-transition"),
  eT = Kt("scale-transition");
Kt("scroll-x-transition");
Kt("scroll-x-reverse-transition");
Kt("scroll-y-transition");
Kt("scroll-y-reverse-transition");
Kt("slide-x-transition");
Kt("slide-x-reverse-transition");
const rh = Kt("slide-y-transition");
Kt("slide-y-reverse-transition");
const lh = nh("expand-transition", ah()),
  oh = nh("expand-x-transition", ah("", !0)),
  a1 = K(
    {
      defaults: Object,
      disabled: Boolean,
      reset: [Number, String],
      root: [Boolean, String],
      scoped: Boolean,
    },
    "VDefaultsProvider"
  ),
  qe = fe(!1)({
    name: "VDefaultsProvider",
    props: a1(),
    setup(e, t) {
      let { slots: n } = t;
      const { defaults: a, disabled: r, reset: l, root: o, scoped: i } = sr(e);
      return (
        Ft(a, { reset: l, root: o, scoped: i, disabled: r }),
        () => {
          var s;
          return (s = n.default) == null ? void 0 : s.call(n);
        }
      );
    },
  }),
  Qt = K(
    {
      height: [Number, String],
      maxHeight: [Number, String],
      maxWidth: [Number, String],
      minHeight: [Number, String],
      minWidth: [Number, String],
      width: [Number, String],
    },
    "dimension"
  );
function en(e) {
  return {
    dimensionStyles: S(() => {
      const n = {},
        a = pe(e.height),
        r = pe(e.maxHeight),
        l = pe(e.maxWidth),
        o = pe(e.minHeight),
        i = pe(e.minWidth),
        s = pe(e.width);
      return (
        a != null && (n.height = a),
        r != null && (n.maxHeight = r),
        l != null && (n.maxWidth = l),
        o != null && (n.minHeight = o),
        i != null && (n.minWidth = i),
        s != null && (n.width = s),
        n
      );
    }),
  };
}
function r1(e) {
  return {
    aspectStyles: S(() => {
      const t = Number(e.aspectRatio);
      return t ? { paddingBottom: String((1 / t) * 100) + "%" } : void 0;
    }),
  };
}
const ih = K(
    {
      aspectRatio: [String, Number],
      contentClass: null,
      inline: Boolean,
      ...ke(),
      ...Qt(),
    },
    "VResponsive"
  ),
  qd = fe()({
    name: "VResponsive",
    props: ih(),
    setup(e, t) {
      let { slots: n } = t;
      const { aspectStyles: a } = r1(e),
        { dimensionStyles: r } = en(e);
      return (
        be(() => {
          var l;
          return g(
            "div",
            {
              class: [
                "v-responsive",
                { "v-responsive--inline": e.inline },
                e.class,
              ],
              style: [r.value, e.style],
            },
            [
              g("div", { class: "v-responsive__sizer", style: a.value }, null),
              (l = n.additional) == null ? void 0 : l.call(n),
              n.default &&
                g("div", { class: ["v-responsive__content", e.contentClass] }, [
                  n.default(),
                ]),
            ]
          );
        }),
        {}
      );
    },
  });
function mu(e) {
  return tu(() => {
    const t = [],
      n = {};
    if (e.value.background)
      if (Ji(e.value.background)) {
        if (
          ((n.backgroundColor = e.value.background),
          !e.value.text && o0(e.value.background))
        ) {
          const a = Sn(e.value.background);
          if (a.a == null || a.a === 1) {
            const r = rm(a);
            (n.color = r), (n.caretColor = r);
          }
        }
      } else t.push(`bg-${e.value.background}`);
    return (
      e.value.text &&
        (Ji(e.value.text)
          ? ((n.color = e.value.text), (n.caretColor = e.value.text))
          : t.push(`text-${e.value.text}`)),
      { colorClasses: t, colorStyles: n }
    );
  });
}
function Xt(e, t) {
  const n = S(() => ({ text: Be(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: r } = mu(n);
  return { textColorClasses: a, textColorStyles: r };
}
function It(e, t) {
  const n = S(() => ({ background: Be(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: r } = mu(n);
  return { backgroundColorClasses: a, backgroundColorStyles: r };
}
const ht = K(
  {
    rounded: { type: [Boolean, Number, String], default: void 0 },
    tile: Boolean,
  },
  "rounded"
);
function xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return {
    roundedClasses: S(() => {
      const a = Be(e) ? e.value : e.rounded,
        r = Be(e) ? e.value : e.tile,
        l = [];
      if (a === !0 || a === "") l.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" ")) l.push(`rounded-${o}`);
      else (r || a === !1) && l.push("rounded-0");
      return l;
    }),
  };
}
const dr = K(
    {
      transition: {
        type: [Boolean, String, Object],
        default: "fade-transition",
        validator: (e) => e !== !0,
      },
    },
    "transition"
  ),
  An = (e, t) => {
    let { slots: n } = t;
    const { transition: a, disabled: r, group: l, ...o } = e,
      { component: i = l ? Xs : Jn, ...s } = typeof a == "object" ? a : {};
    return aa(
      i,
      le(
        typeof a == "string" ? { name: r ? "" : a } : s,
        typeof a == "string"
          ? {}
          : Object.fromEntries(
              Object.entries({ disabled: r, group: l }).filter((u) => {
                let [c, d] = u;
                return d !== void 0;
              })
            ),
        o
      ),
      n
    );
  };
function l1(e, t) {
  if (!Zs) return;
  const n = t.modifiers || {},
    a = t.value,
    { handler: r, options: l } =
      typeof a == "object" ? a : { handler: a, options: {} },
    o = new IntersectionObserver(function () {
      var d;
      let i =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        s = arguments.length > 1 ? arguments[1] : void 0;
      const u = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
      if (!u) return;
      const c = i.some((f) => f.isIntersecting);
      r && (!n.quiet || u.init) && (!n.once || c || u.init) && r(c, i, s),
        c && n.once ? sh(e, t) : (u.init = !0);
    }, l);
  (e._observe = Object(e._observe)),
    (e._observe[t.instance.$.uid] = { init: !1, observer: o }),
    o.observe(e);
}
function sh(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const hu = { mounted: l1, unmounted: sh },
  o1 = K(
    {
      absolute: Boolean,
      alt: String,
      cover: Boolean,
      color: String,
      draggable: { type: [Boolean, String], default: void 0 },
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({
          root: void 0,
          rootMargin: void 0,
          threshold: void 0,
        }),
      },
      sizes: String,
      src: { type: [String, Object], default: "" },
      crossorigin: String,
      referrerpolicy: String,
      srcset: String,
      position: String,
      ...ih(),
      ...ke(),
      ...ht(),
      ...dr(),
    },
    "VImg"
  ),
  Vo = fe()({
    name: "VImg",
    directives: { intersect: hu },
    props: o1(),
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t;
      const { backgroundColorClasses: r, backgroundColorStyles: l } = It(
          ne(e, "color")
        ),
        { roundedClasses: o } = xt(e),
        i = Ze("VImg"),
        s = he(""),
        u = W(),
        c = he(e.eager ? "loading" : "idle"),
        d = he(),
        f = he(),
        v = S(() =>
          e.src && typeof e.src == "object"
            ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0),
              }
            : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0),
              }
        ),
        m = S(() => v.value.aspect || d.value / f.value || 0);
      ce(
        () => e.src,
        () => {
          h(c.value !== "idle");
        }
      ),
        ce(m, (I, $) => {
          !I && $ && u.value && E(u.value);
        }),
        Qr(() => h());
      function h(I) {
        if (!(e.eager && I) && !(Zs && !I && !e.eager)) {
          if (((c.value = "loading"), v.value.lazySrc)) {
            const $ = new Image();
            ($.src = v.value.lazySrc), E($, null);
          }
          v.value.src &&
            ze(() => {
              var $;
              n(
                "loadstart",
                (($ = u.value) == null ? void 0 : $.currentSrc) || v.value.src
              ),
                setTimeout(() => {
                  var M;
                  if (!i.isUnmounted)
                    if ((M = u.value) != null && M.complete) {
                      if ((u.value.naturalWidth || p(), c.value === "error"))
                        return;
                      m.value || E(u.value, null), c.value === "loading" && y();
                    } else m.value || E(u.value), w();
                });
            });
        }
      }
      function y() {
        var I;
        i.isUnmounted ||
          (w(),
          E(u.value),
          (c.value = "loaded"),
          n(
            "load",
            ((I = u.value) == null ? void 0 : I.currentSrc) || v.value.src
          ));
      }
      function p() {
        var I;
        i.isUnmounted ||
          ((c.value = "error"),
          n(
            "error",
            ((I = u.value) == null ? void 0 : I.currentSrc) || v.value.src
          ));
      }
      function w() {
        const I = u.value;
        I && (s.value = I.currentSrc || I.src);
      }
      let x = -1;
      rt(() => {
        clearTimeout(x);
      });
      function E(I) {
        let $ =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        const M = () => {
          if ((clearTimeout(x), i.isUnmounted)) return;
          const { naturalHeight: N, naturalWidth: B } = I;
          N || B
            ? ((d.value = B), (f.value = N))
            : !I.complete && c.value === "loading" && $ != null
            ? (x = window.setTimeout(M, $))
            : (I.currentSrc.endsWith(".svg") ||
                I.currentSrc.startsWith("data:image/svg+xml")) &&
              ((d.value = 1), (f.value = 1));
        };
        M();
      }
      const k = S(() => ({
          "v-img__img--cover": e.cover,
          "v-img__img--contain": !e.cover,
        })),
        V = () => {
          var M;
          if (!v.value.src || c.value === "idle") return null;
          const I = g(
              "img",
              {
                class: ["v-img__img", k.value],
                style: { objectPosition: e.position },
                src: v.value.src,
                srcset: v.value.srcset,
                alt: e.alt,
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable,
                sizes: e.sizes,
                ref: u,
                onLoad: y,
                onError: p,
              },
              null
            ),
            $ = (M = a.sources) == null ? void 0 : M.call(a);
          return g(
            An,
            { transition: e.transition, appear: !0 },
            {
              default: () => [
                ft($ ? g("picture", { class: "v-img__picture" }, [$, I]) : I, [
                  [Aa, c.value === "loaded"],
                ]),
              ],
            }
          );
        },
        A = () =>
          g(
            An,
            { transition: e.transition },
            {
              default: () => [
                v.value.lazySrc &&
                  c.value !== "loaded" &&
                  g(
                    "img",
                    {
                      class: ["v-img__img", "v-img__img--preload", k.value],
                      style: { objectPosition: e.position },
                      src: v.value.lazySrc,
                      alt: e.alt,
                      crossorigin: e.crossorigin,
                      referrerpolicy: e.referrerpolicy,
                      draggable: e.draggable,
                    },
                    null
                  ),
              ],
            }
          ),
        b = () =>
          a.placeholder
            ? g(
                An,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    (c.value === "loading" ||
                      (c.value === "error" && !a.error)) &&
                      g("div", { class: "v-img__placeholder" }, [
                        a.placeholder(),
                      ]),
                  ],
                }
              )
            : null,
        C = () =>
          a.error
            ? g(
                An,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    c.value === "error" &&
                      g("div", { class: "v-img__error" }, [a.error()]),
                  ],
                }
              )
            : null,
        D = () =>
          e.gradient
            ? g(
                "div",
                {
                  class: "v-img__gradient",
                  style: { backgroundImage: `linear-gradient(${e.gradient})` },
                },
                null
              )
            : null,
        P = he(!1);
      {
        const I = ce(m, ($) => {
          $ &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                P.value = !0;
              });
            }),
            I());
        });
      }
      return (
        be(() => {
          const I = qd.filterProps(e);
          return ft(
            g(
              qd,
              le(
                {
                  class: [
                    "v-img",
                    {
                      "v-img--absolute": e.absolute,
                      "v-img--booting": !P.value,
                    },
                    r.value,
                    o.value,
                    e.class,
                  ],
                  style: [
                    { width: pe(e.width === "auto" ? d.value : e.width) },
                    l.value,
                    e.style,
                  ],
                },
                I,
                {
                  aspectRatio: m.value,
                  "aria-label": e.alt,
                  role: e.alt ? "img" : void 0,
                }
              ),
              {
                additional: () =>
                  g(ye, null, [
                    g(V, null, null),
                    g(A, null, null),
                    g(D, null, null),
                    g(b, null, null),
                    g(C, null, null),
                  ]),
                default: a.default,
              }
            ),
            [
              [
                Ln("intersect"),
                { handler: h, options: e.options },
                null,
                { once: !0 },
              ],
            ]
          );
        }),
        { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f }
      );
    },
  }),
  tn = K({ border: [Boolean, Number, String] }, "border");
function cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return {
    borderClasses: S(() => {
      const a = Be(e) ? e.value : e.border,
        r = [];
      if (a === !0 || a === "") r.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const l of String(a).split(" ")) r.push(`border-${l}`);
      return r;
    }),
  };
}
const nn = K(
  {
    elevation: {
      type: [Number, String],
      validator(e) {
        const t = parseInt(e);
        return !isNaN(t) && t >= 0 && t <= 24;
      },
    },
  },
  "elevation"
);
function dn(e) {
  return {
    elevationClasses: S(() => {
      const n = Be(e) ? e.value : e.elevation,
        a = [];
      return n == null || a.push(`elevation-${n}`), a;
    }),
  };
}
const i1 = [null, "prominent", "default", "comfortable", "compact"],
  uh = K(
    {
      absolute: Boolean,
      collapse: Boolean,
      color: String,
      density: {
        type: String,
        default: "default",
        validator: (e) => i1.includes(e),
      },
      extended: Boolean,
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...tn(),
      ...ke(),
      ...nn(),
      ...ht(),
      ...He({ tag: "header" }),
      ...Ge(),
    },
    "VToolbar"
  ),
  ql = fe()({
    name: "VToolbar",
    props: uh(),
    setup(e, t) {
      var v;
      let { slots: n } = t;
      const { backgroundColorClasses: a, backgroundColorStyles: r } = It(
          ne(e, "color")
        ),
        { borderClasses: l } = cn(e),
        { elevationClasses: o } = dn(e),
        { roundedClasses: i } = xt(e),
        { themeClasses: s } = Qe(e),
        { rtlClasses: u } = Nt(),
        c = he(!!(e.extended || ((v = n.extension) != null && v.call(n)))),
        d = S(() =>
          parseInt(
            Number(e.height) +
              (e.density === "prominent" ? Number(e.height) : 0) -
              (e.density === "comfortable" ? 8 : 0) -
              (e.density === "compact" ? 16 : 0),
            10
          )
        ),
        f = S(() =>
          c.value
            ? parseInt(
                Number(e.extensionHeight) +
                  (e.density === "prominent" ? Number(e.extensionHeight) : 0) -
                  (e.density === "comfortable" ? 4 : 0) -
                  (e.density === "compact" ? 8 : 0),
                10
              )
            : 0
        );
      return (
        Ft({ VBtn: { variant: "text" } }),
        be(() => {
          var p;
          const m = !!(e.title || n.title),
            h = !!(n.image || e.image),
            y = (p = n.extension) == null ? void 0 : p.call(n);
          return (
            (c.value = !!(e.extended || y)),
            g(
              e.tag,
              {
                class: [
                  "v-toolbar",
                  {
                    "v-toolbar--absolute": e.absolute,
                    "v-toolbar--collapse": e.collapse,
                    "v-toolbar--flat": e.flat,
                    "v-toolbar--floating": e.floating,
                    [`v-toolbar--density-${e.density}`]: !0,
                  },
                  a.value,
                  l.value,
                  o.value,
                  i.value,
                  s.value,
                  u.value,
                  e.class,
                ],
                style: [r.value, e.style],
              },
              {
                default: () => [
                  h &&
                    g("div", { key: "image", class: "v-toolbar__image" }, [
                      n.image
                        ? g(
                            qe,
                            {
                              key: "image-defaults",
                              disabled: !e.image,
                              defaults: { VImg: { cover: !0, src: e.image } },
                            },
                            n.image
                          )
                        : g(
                            Vo,
                            { key: "image-img", cover: !0, src: e.image },
                            null
                          ),
                    ]),
                  g(
                    qe,
                    { defaults: { VTabs: { height: pe(d.value) } } },
                    {
                      default: () => {
                        var w, x, E;
                        return [
                          g(
                            "div",
                            {
                              class: "v-toolbar__content",
                              style: { height: pe(d.value) },
                            },
                            [
                              n.prepend &&
                                g("div", { class: "v-toolbar__prepend" }, [
                                  (w = n.prepend) == null ? void 0 : w.call(n),
                                ]),
                              m &&
                                g(
                                  fu,
                                  { key: "title", text: e.title },
                                  { text: n.title }
                                ),
                              (x = n.default) == null ? void 0 : x.call(n),
                              n.append &&
                                g("div", { class: "v-toolbar__append" }, [
                                  (E = n.append) == null ? void 0 : E.call(n),
                                ]),
                            ]
                          ),
                        ];
                      },
                    }
                  ),
                  g(
                    qe,
                    { defaults: { VTabs: { height: pe(f.value) } } },
                    {
                      default: () => [
                        g(lh, null, {
                          default: () => [
                            c.value &&
                              g(
                                "div",
                                {
                                  class: "v-toolbar__extension",
                                  style: { height: pe(f.value) },
                                },
                                [y]
                              ),
                          ],
                        }),
                      ],
                    }
                  ),
                ],
              }
            )
          );
        }),
        { contentHeight: d, extensionHeight: f }
      );
    },
  }),
  s1 = K(
    {
      scrollTarget: { type: String },
      scrollThreshold: { type: [String, Number], default: 300 },
    },
    "scroll"
  );
function u1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n } = t;
  let a = 0,
    r = 0;
  const l = W(null),
    o = he(0),
    i = he(0),
    s = he(0),
    u = he(!1),
    c = he(!1),
    d = S(() => Number(e.scrollThreshold)),
    f = S(() => Bt((d.value - o.value) / d.value || 0)),
    v = () => {
      const m = l.value;
      if (!m || (n && !n.value)) return;
      (a = o.value), (o.value = "window" in m ? m.pageYOffset : m.scrollTop);
      const h =
        m instanceof Window
          ? document.documentElement.scrollHeight
          : m.scrollHeight;
      if (r !== h) {
        r = h;
        return;
      }
      (c.value = o.value < a), (s.value = Math.abs(o.value - d.value));
    };
  return (
    ce(c, () => {
      i.value = i.value || o.value;
    }),
    ce(u, () => {
      i.value = 0;
    }),
    Wt(() => {
      ce(
        () => e.scrollTarget,
        (m) => {
          var y;
          const h = m ? document.querySelector(m) : window;
          h &&
            h !== l.value &&
            ((y = l.value) == null || y.removeEventListener("scroll", v),
            (l.value = h),
            l.value.addEventListener("scroll", v, { passive: !0 }));
        },
        { immediate: !0 }
      );
    }),
    rt(() => {
      var m;
      (m = l.value) == null || m.removeEventListener("scroll", v);
    }),
    n && ce(n, v, { immediate: !0 }),
    {
      scrollThreshold: d,
      currentScroll: o,
      currentThreshold: s,
      isScrollActive: u,
      scrollRatio: f,
      isScrollingUp: c,
      savedScroll: i,
    }
  );
}
function fr() {
  const e = he(!1);
  return (
    Wt(() => {
      window.requestAnimationFrame(() => {
        e.value = !0;
      });
    }),
    {
      ssrBootStyles: S(() =>
        e.value ? void 0 : { transition: "none !important" }
      ),
      isBooted: Dt(e),
    }
  );
}
const c1 = K(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: {
        type: String,
        default: "top",
        validator: (e) => ["top", "bottom"].includes(e),
      },
      ...uh(),
      ...ko(),
      ...s1(),
      height: { type: [Number, String], default: 64 },
    },
    "VAppBar"
  ),
  ch = fe()({
    name: "VAppBar",
    props: c1(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = W(),
        r = Ve(e, "modelValue"),
        l = S(() => {
          var x;
          const w = new Set(
            ((x = e.scrollBehavior) == null ? void 0 : x.split(" ")) ?? []
          );
          return {
            hide: w.has("hide"),
            fullyHide: w.has("fully-hide"),
            inverted: w.has("inverted"),
            collapse: w.has("collapse"),
            elevate: w.has("elevate"),
            fadeImage: w.has("fade-image"),
          };
        }),
        o = S(() => {
          const w = l.value;
          return (
            w.hide ||
            w.fullyHide ||
            w.inverted ||
            w.collapse ||
            w.elevate ||
            w.fadeImage ||
            !r.value
          );
        }),
        {
          currentScroll: i,
          scrollThreshold: s,
          isScrollingUp: u,
          scrollRatio: c,
        } = u1(e, { canScroll: o }),
        d = S(() => l.value.hide || l.value.fullyHide),
        f = S(
          () =>
            e.collapse ||
            (l.value.collapse &&
              (l.value.inverted ? c.value > 0 : c.value === 0))
        ),
        v = S(
          () =>
            e.flat ||
            (l.value.fullyHide && !r.value) ||
            (l.value.elevate &&
              (l.value.inverted ? i.value > 0 : i.value === 0))
        ),
        m = S(() =>
          l.value.fadeImage
            ? l.value.inverted
              ? 1 - c.value
              : c.value
            : void 0
        ),
        h = S(() => {
          var E, k;
          if (l.value.hide && l.value.inverted) return 0;
          const w = ((E = a.value) == null ? void 0 : E.contentHeight) ?? 0,
            x = ((k = a.value) == null ? void 0 : k.extensionHeight) ?? 0;
          return d.value
            ? i.value < s.value || l.value.fullyHide
              ? w + x
              : w
            : w + x;
        });
      Mt(
        S(() => !!e.scrollBehavior),
        () => {
          vt(() => {
            d.value
              ? l.value.inverted
                ? (r.value = i.value > s.value)
                : (r.value = u.value || i.value < s.value)
              : (r.value = !0);
          });
        }
      );
      const { ssrBootStyles: y } = fr(),
        { layoutItemStyles: p } = Eo({
          id: e.name,
          order: S(() => parseInt(e.order, 10)),
          position: ne(e, "location"),
          layoutSize: h,
          elementSize: he(void 0),
          active: r,
          absolute: ne(e, "absolute"),
        });
      return (
        be(() => {
          const w = ql.filterProps(e);
          return g(
            ql,
            le(
              {
                ref: a,
                class: [
                  "v-app-bar",
                  { "v-app-bar--bottom": e.location === "bottom" },
                  e.class,
                ],
                style: [
                  {
                    ...p.value,
                    "--v-toolbar-image-opacity": m.value,
                    height: void 0,
                    ...y.value,
                  },
                  e.style,
                ],
              },
              w,
              { collapse: f.value, flat: v.value }
            ),
            n
          );
        }),
        {}
      );
    },
  }),
  d1 = [null, "default", "comfortable", "compact"],
  Vt = K(
    {
      density: {
        type: String,
        default: "default",
        validator: (e) => d1.includes(e),
      },
    },
    "density"
  );
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return { densityClasses: S(() => `${t}--density-${e.density}`) };
}
const f1 = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Va(e, t) {
  return g(ye, null, [
    e && g("span", { key: "overlay", class: `${t}__overlay` }, null),
    g("span", { key: "underlay", class: `${t}__underlay` }, null),
  ]);
}
const fn = K(
  {
    color: String,
    variant: {
      type: String,
      default: "elevated",
      validator: (e) => f1.includes(e),
    },
  },
  "variant"
);
function Da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  const n = S(() => {
      const { variant: l } = Se(e);
      return `${t}--variant-${l}`;
    }),
    { colorClasses: a, colorStyles: r } = mu(
      S(() => {
        const { variant: l, color: o } = Se(e);
        return {
          [["elevated", "flat"].includes(l) ? "background" : "text"]: o,
        };
      })
    );
  return { colorClasses: a, colorStyles: r, variantClasses: n };
}
const dh = K(
    {
      baseColor: String,
      divided: Boolean,
      ...tn(),
      ...ke(),
      ...Vt(),
      ...nn(),
      ...ht(),
      ...He(),
      ...Ge(),
      ...fn(),
    },
    "VBtnGroup"
  ),
  Jd = fe()({
    name: "VBtnGroup",
    props: dh(),
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Qe(e),
        { densityClasses: r } = Yt(e),
        { borderClasses: l } = cn(e),
        { elevationClasses: o } = dn(e),
        { roundedClasses: i } = xt(e);
      Ft({
        VBtn: {
          height: "auto",
          baseColor: ne(e, "baseColor"),
          color: ne(e, "color"),
          density: ne(e, "density"),
          flat: !0,
          variant: ne(e, "variant"),
        },
      }),
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-btn-group",
                { "v-btn-group--divided": e.divided },
                a.value,
                l.value,
                r.value,
                o.value,
                i.value,
                e.class,
              ],
              style: e.style,
            },
            n
          )
        );
    },
  }),
  Do = K(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean,
    },
    "group"
  ),
  gu = K(
    { value: null, disabled: Boolean, selectedClass: String },
    "group-item"
  );
function yu(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ze("useGroupItem");
  if (!a)
    throw new Error(
      "[Vuetify] useGroupItem composable must be used inside a component setup function"
    );
  const r = Gt();
  We(Symbol.for(`${t.description}:id`), r);
  const l = Ie(t, null);
  if (!l) {
    if (!n) return l;
    throw new Error(
      `[Vuetify] Could not find useGroup injection with symbol ${t.description}`
    );
  }
  const o = ne(e, "value"),
    i = S(() => !!(l.disabled.value || e.disabled));
  l.register({ id: r, value: o, disabled: i }, a),
    rt(() => {
      l.unregister(r);
    });
  const s = S(() => l.isSelected(r)),
    u = S(() => l.items.value[0].id === r),
    c = S(() => l.items.value[l.items.value.length - 1].id === r),
    d = S(() => s.value && [l.selectedClass.value, e.selectedClass]);
  return (
    ce(
      s,
      (f) => {
        a.emit("group:selected", { value: f });
      },
      { flush: "sync" }
    ),
    {
      id: r,
      isSelected: s,
      isFirst: u,
      isLast: c,
      toggle: () => l.select(r, !s.value),
      select: (f) => l.select(r, f),
      selectedClass: d,
      value: o,
      disabled: i,
      group: l,
    }
  );
}
function ll(e, t) {
  let n = !1;
  const a = lt([]),
    r = Ve(
      e,
      "modelValue",
      [],
      (f) => (f == null ? [] : fh(a, ct(f))),
      (f) => {
        const v = m1(a, f);
        return e.multiple ? v : v[0];
      }
    ),
    l = Ze("useGroup");
  function o(f, v) {
    const m = f,
      h = Symbol.for(`${t.description}:id`),
      p = Wa(h, l == null ? void 0 : l.vnode).indexOf(v);
    Se(m.value) == null && ((m.value = p), (m.useIndexAsValue = !0)),
      p > -1 ? a.splice(p, 0, m) : a.push(m);
  }
  function i(f) {
    if (n) return;
    s();
    const v = a.findIndex((m) => m.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !r.value.length && (r.value = [f.id]);
  }
  Wt(() => {
    s();
  }),
    rt(() => {
      n = !0;
    }),
    Hs(() => {
      for (let f = 0; f < a.length; f++)
        a[f].useIndexAsValue && (a[f].value = f);
    });
  function u(f, v) {
    const m = a.find((h) => h.id === f);
    if (!(v && m != null && m.disabled))
      if (e.multiple) {
        const h = r.value.slice(),
          y = h.findIndex((w) => w === f),
          p = ~y;
        if (
          ((v = v ?? !p),
          (p && e.mandatory && h.length <= 1) ||
            (!p && e.max != null && h.length + 1 > e.max))
        )
          return;
        y < 0 && v ? h.push(f) : y >= 0 && !v && h.splice(y, 1), (r.value = h);
      } else {
        const h = r.value.includes(f);
        if (e.mandatory && h) return;
        r.value = v ?? !h ? [f] : [];
      }
  }
  function c(f) {
    if ((e.multiple, r.value.length)) {
      const v = r.value[0],
        m = a.findIndex((p) => p.id === v);
      let h = (m + f) % a.length,
        y = a[h];
      for (; y.disabled && h !== m; ) (h = (h + f) % a.length), (y = a[h]);
      if (y.disabled) return;
      r.value = [a[h].id];
    } else {
      const v = a.find((m) => !m.disabled);
      v && (r.value = [v.id]);
    }
  }
  const d = {
    register: o,
    unregister: i,
    selected: r,
    select: u,
    disabled: ne(e, "disabled"),
    prev: () => c(a.length - 1),
    next: () => c(1),
    isSelected: (f) => r.value.includes(f),
    selectedClass: S(() => e.selectedClass),
    items: S(() => a),
    getItemIndex: (f) => v1(a, f),
  };
  return We(t, d), d;
}
function v1(e, t) {
  const n = fh(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function fh(e, t) {
  const n = [];
  return (
    t.forEach((a) => {
      const r = e.find((o) => ra(a, o.value)),
        l = e[a];
      (r == null ? void 0 : r.value) != null
        ? n.push(r.id)
        : l != null && n.push(l.id);
    }),
    n
  );
}
function m1(e, t) {
  const n = [];
  return (
    t.forEach((a) => {
      const r = e.findIndex((l) => l.id === a);
      if (~r) {
        const l = e[r];
        n.push(l.value != null ? l.value : r);
      }
    }),
    n
  );
}
const bu = Symbol.for("vuetify:v-btn-toggle"),
  h1 = K({ ...dh(), ...Do() }, "VBtnToggle");
fe()({
  name: "VBtnToggle",
  props: h1(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const {
      isSelected: a,
      next: r,
      prev: l,
      select: o,
      selected: i,
    } = ll(e, bu);
    return (
      be(() => {
        const s = Jd.filterProps(e);
        return g(
          Jd,
          le({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }),
          {
            default: () => {
              var u;
              return [
                (u = n.default) == null
                  ? void 0
                  : u.call(n, {
                      isSelected: a,
                      next: r,
                      prev: l,
                      select: o,
                      selected: i,
                    }),
              ];
            },
          }
        );
      }),
      { next: r, prev: l, select: o }
    );
  },
});
const g1 = ["x-small", "small", "default", "large", "x-large"],
  vr = K({ size: { type: [String, Number], default: "default" } }, "size");
function ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return tu(() => {
    let n, a;
    return (
      jl(g1, e.size)
        ? (n = `${t}--size-${e.size}`)
        : e.size && (a = { width: pe(e.size), height: pe(e.size) }),
      { sizeClasses: n, sizeStyles: a }
    );
  });
}
const y1 = K(
    {
      color: String,
      disabled: Boolean,
      start: Boolean,
      end: Boolean,
      icon: Ae,
      ...ke(),
      ...vr(),
      ...He({ tag: "i" }),
      ...Ge(),
    },
    "VIcon"
  ),
  De = fe()({
    name: "VIcon",
    props: y1(),
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const r = W(),
        { themeClasses: l } = Qe(e),
        { iconData: o } = ES(S(() => r.value || e.icon)),
        { sizeClasses: i } = ol(e),
        { textColorClasses: s, textColorStyles: u } = Xt(ne(e, "color"));
      return (
        be(() => {
          var f, v;
          const c = (f = a.default) == null ? void 0 : f.call(a);
          c &&
            (r.value =
              (v = Yv(c).filter(
                (m) =>
                  m.type === nl && m.children && typeof m.children == "string"
              )[0]) == null
                ? void 0
                : v.children);
          const d = !!(n.onClick || n.onClickOnce);
          return g(
            o.value.component,
            {
              tag: e.tag,
              icon: o.value.icon,
              class: [
                "v-icon",
                "notranslate",
                l.value,
                i.value,
                s.value,
                {
                  "v-icon--clickable": d,
                  "v-icon--disabled": e.disabled,
                  "v-icon--start": e.start,
                  "v-icon--end": e.end,
                },
                e.class,
              ],
              style: [
                i.value
                  ? void 0
                  : {
                      fontSize: pe(e.size),
                      height: pe(e.size),
                      width: pe(e.size),
                    },
                u.value,
                e.style,
              ],
              role: d ? "button" : void 0,
              "aria-hidden": !d,
              tabindex: d ? (e.disabled ? -1 : 0) : void 0,
            },
            { default: () => [c] }
          );
        }),
        {}
      );
    },
  });
function vh(e, t) {
  const n = W(),
    a = he(!1);
  if (Zs) {
    const r = new IntersectionObserver((l) => {
      a.value = !!l.find((o) => o.isIntersecting);
    }, t);
    rt(() => {
      r.disconnect();
    }),
      ce(
        n,
        (l, o) => {
          o && (r.unobserve(o), (a.value = !1)), l && r.observe(l);
        },
        { flush: "post" }
      );
  }
  return { intersectionRef: n, isIntersecting: a };
}
const b1 = K(
    {
      bgColor: String,
      color: String,
      indeterminate: [Boolean, String],
      modelValue: { type: [Number, String], default: 0 },
      rotate: { type: [Number, String], default: 0 },
      width: { type: [Number, String], default: 4 },
      ...ke(),
      ...vr(),
      ...He({ tag: "div" }),
      ...Ge(),
    },
    "VProgressCircular"
  ),
  mh = fe()({
    name: "VProgressCircular",
    props: b1(),
    setup(e, t) {
      let { slots: n } = t;
      const a = 20,
        r = 2 * Math.PI * a,
        l = W(),
        { themeClasses: o } = Qe(e),
        { sizeClasses: i, sizeStyles: s } = ol(e),
        { textColorClasses: u, textColorStyles: c } = Xt(ne(e, "color")),
        { textColorClasses: d, textColorStyles: f } = Xt(ne(e, "bgColor")),
        { intersectionRef: v, isIntersecting: m } = vh(),
        { resizeRef: h, contentRect: y } = Xn(),
        p = S(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
        w = S(() => Number(e.width)),
        x = S(() =>
          s.value
            ? Number(e.size)
            : y.value
            ? y.value.width
            : Math.max(w.value, 32)
        ),
        E = S(() => (a / (1 - w.value / x.value)) * 2),
        k = S(() => (w.value / x.value) * E.value),
        V = S(() => pe(((100 - p.value) / 100) * r));
      return (
        vt(() => {
          (v.value = l.value), (h.value = l.value);
        }),
        be(() =>
          g(
            e.tag,
            {
              ref: l,
              class: [
                "v-progress-circular",
                {
                  "v-progress-circular--indeterminate": !!e.indeterminate,
                  "v-progress-circular--visible": m.value,
                  "v-progress-circular--disable-shrink":
                    e.indeterminate === "disable-shrink",
                },
                o.value,
                i.value,
                u.value,
                e.class,
              ],
              style: [s.value, c.value, e.style],
              role: "progressbar",
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              "aria-valuenow": e.indeterminate ? void 0 : p.value,
            },
            {
              default: () => [
                g(
                  "svg",
                  {
                    style: {
                      transform: `rotate(calc(-90deg + ${Number(
                        e.rotate
                      )}deg))`,
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: `0 0 ${E.value} ${E.value}`,
                  },
                  [
                    g(
                      "circle",
                      {
                        class: ["v-progress-circular__underlay", d.value],
                        style: f.value,
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": k.value,
                        "stroke-dasharray": r,
                        "stroke-dashoffset": 0,
                      },
                      null
                    ),
                    g(
                      "circle",
                      {
                        class: "v-progress-circular__overlay",
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": k.value,
                        "stroke-dasharray": r,
                        "stroke-dashoffset": V.value,
                      },
                      null
                    ),
                  ]
                ),
                n.default &&
                  g("div", { class: "v-progress-circular__content" }, [
                    n.default({ value: p.value }),
                  ]),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  Xd = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  },
  il = K({ location: String }, "location");
function Oo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Nt();
  return {
    locationStyles: S(() => {
      if (!e.location) return {};
      const { side: l, align: o } = Yi(
        e.location.split(" ").length > 1 ? e.location : `${e.location} center`,
        a.value
      );
      function i(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return (
        l !== "center" &&
          (t ? (s[Xd[l]] = `calc(100% - ${i(l)}px)`) : (s[l] = 0)),
        o !== "center"
          ? t
            ? (s[Xd[o]] = `calc(100% - ${i(o)}px)`)
            : (s[o] = 0)
          : (l === "center"
              ? (s.top = s.left = "50%")
              : (s[
                  { top: "left", bottom: "left", left: "top", right: "top" }[l]
                ] = "50%"),
            (s.transform = {
              top: "translateX(-50%)",
              bottom: "translateX(-50%)",
              left: "translateY(-50%)",
              right: "translateY(-50%)",
              center: "translate(-50%, -50%)",
            }[l])),
        s
      );
    }),
  };
}
const p1 = K(
    {
      absolute: Boolean,
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      bufferColor: String,
      bufferOpacity: [Number, String],
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      opacity: [Number, String],
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ...ke(),
      ...il({ location: "top" }),
      ...ht(),
      ...He(),
      ...Ge(),
    },
    "VProgressLinear"
  ),
  hh = fe()({
    name: "VProgressLinear",
    props: p1(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      var P;
      let { slots: n } = t;
      const a = Ve(e, "modelValue"),
        { isRtl: r, rtlClasses: l } = Nt(),
        { themeClasses: o } = Qe(e),
        { locationStyles: i } = Oo(e),
        { textColorClasses: s, textColorStyles: u } = Xt(e, "color"),
        { backgroundColorClasses: c, backgroundColorStyles: d } = It(
          S(() => e.bgColor || e.color)
        ),
        { backgroundColorClasses: f, backgroundColorStyles: v } = It(
          S(() => e.bufferColor || e.bgColor || e.color)
        ),
        { backgroundColorClasses: m, backgroundColorStyles: h } = It(
          e,
          "color"
        ),
        { roundedClasses: y } = xt(e),
        { intersectionRef: p, isIntersecting: w } = vh(),
        x = S(() => parseFloat(e.max)),
        E = S(() => parseFloat(e.height)),
        k = S(() => Bt((parseFloat(e.bufferValue) / x.value) * 100, 0, 100)),
        V = S(() => Bt((parseFloat(a.value) / x.value) * 100, 0, 100)),
        A = S(() => r.value !== e.reverse),
        b = S(() =>
          e.indeterminate ? "fade-transition" : "slide-x-transition"
        ),
        C =
          Me &&
          ((P = window.matchMedia) == null
            ? void 0
            : P.call(window, "(forced-colors: active)").matches);
      function D(I) {
        if (!p.value) return;
        const { left: $, right: M, width: N } = p.value.getBoundingClientRect(),
          B = A.value ? N - I.clientX + (M - N) : I.clientX - $;
        a.value = Math.round((B / N) * x.value);
      }
      return (
        be(() =>
          g(
            e.tag,
            {
              ref: p,
              class: [
                "v-progress-linear",
                {
                  "v-progress-linear--absolute": e.absolute,
                  "v-progress-linear--active": e.active && w.value,
                  "v-progress-linear--reverse": A.value,
                  "v-progress-linear--rounded": e.rounded,
                  "v-progress-linear--rounded-bar": e.roundedBar,
                  "v-progress-linear--striped": e.striped,
                },
                y.value,
                o.value,
                l.value,
                e.class,
              ],
              style: [
                {
                  bottom: e.location === "bottom" ? 0 : void 0,
                  top: e.location === "top" ? 0 : void 0,
                  height: e.active ? pe(E.value) : 0,
                  "--v-progress-linear-height": pe(E.value),
                  ...(e.absolute ? i.value : {}),
                },
                e.style,
              ],
              role: "progressbar",
              "aria-hidden": e.active ? "false" : "true",
              "aria-valuemin": "0",
              "aria-valuemax": e.max,
              "aria-valuenow": e.indeterminate ? void 0 : V.value,
              onClick: e.clickable && D,
            },
            {
              default: () => [
                e.stream &&
                  g(
                    "div",
                    {
                      key: "stream",
                      class: ["v-progress-linear__stream", s.value],
                      style: {
                        ...u.value,
                        [A.value ? "left" : "right"]: pe(-E.value),
                        borderTop: `${pe(E.value / 2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${pe(E.value / 4)})`,
                        width: pe(100 - k.value, "%"),
                        "--v-progress-linear-stream-to": pe(
                          E.value * (A.value ? 1 : -1)
                        ),
                      },
                    },
                    null
                  ),
                g(
                  "div",
                  {
                    class: [
                      "v-progress-linear__background",
                      C ? void 0 : c.value,
                    ],
                    style: [
                      d.value,
                      {
                        opacity: parseFloat(e.bgOpacity),
                        width: e.stream ? 0 : void 0,
                      },
                    ],
                  },
                  null
                ),
                g(
                  "div",
                  {
                    class: ["v-progress-linear__buffer", C ? void 0 : f.value],
                    style: [
                      v.value,
                      {
                        opacity: parseFloat(e.bufferOpacity),
                        width: pe(k.value, "%"),
                      },
                    ],
                  },
                  null
                ),
                g(
                  Jn,
                  { name: b.value },
                  {
                    default: () => [
                      e.indeterminate
                        ? g(
                            "div",
                            { class: "v-progress-linear__indeterminate" },
                            [
                              ["long", "short"].map((I) =>
                                g(
                                  "div",
                                  {
                                    key: I,
                                    class: [
                                      "v-progress-linear__indeterminate",
                                      I,
                                      C ? void 0 : m.value,
                                    ],
                                    style: h.value,
                                  },
                                  null
                                )
                              ),
                            ]
                          )
                        : g(
                            "div",
                            {
                              class: [
                                "v-progress-linear__determinate",
                                C ? void 0 : m.value,
                              ],
                              style: [h.value, { width: pe(V.value, "%") }],
                            },
                            null
                          ),
                    ],
                  }
                ),
                n.default &&
                  g("div", { class: "v-progress-linear__content" }, [
                    n.default({ value: V.value, buffer: k.value }),
                  ]),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  $o = K({ loading: [Boolean, String] }, "loader");
function Mo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return { loaderClasses: S(() => ({ [`${t}--loading`]: e.loading })) };
}
function pu(e, t) {
  var a;
  let { slots: n } = t;
  return g("div", { class: `${e.name}__loader` }, [
    ((a = n.default) == null
      ? void 0
      : a.call(n, { color: e.color, isActive: e.active })) ||
      g(
        hh,
        {
          absolute: e.absolute,
          active: e.active,
          color: e.color,
          height: "2",
          indeterminate: !0,
        },
        null
      ),
  ]);
}
const S1 = ["static", "relative", "fixed", "absolute", "sticky"],
  Bo = K(
    { position: { type: String, validator: (e) => S1.includes(e) } },
    "position"
  );
function Lo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  return {
    positionClasses: S(() => (e.position ? `${t}--${e.position}` : void 0)),
  };
}
function w1() {
  const e = Ze("useRoute");
  return S(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function gh() {
  var e, t;
  return (t = (e = Ze("useRouter")) == null ? void 0 : e.proxy) == null
    ? void 0
    : t.$router;
}
function Ro(e, t) {
  var d, f;
  const n = el("RouterLink"),
    a = S(() => !!(e.href || e.to)),
    r = S(
      () => (a == null ? void 0 : a.value) || Oc(t, "click") || Oc(e, "click")
    );
  if (typeof n == "string" || !("useLink" in n)) {
    const v = ne(e, "href");
    return { isLink: a, isClickable: r, href: v, linkProps: lt({ href: v }) };
  }
  const l = S(() => ({ ...e, to: ne(() => e.to || "") })),
    o = n.useLink(l.value),
    i = S(() => (e.to ? o : void 0)),
    s = w1(),
    u = S(() => {
      var v, m, h;
      return i.value
        ? e.exact
          ? s.value
            ? ((h = i.value.isExactActive) == null ? void 0 : h.value) &&
              ra(i.value.route.value.query, s.value.query)
            : ((m = i.value.isExactActive) == null ? void 0 : m.value) ?? !1
          : ((v = i.value.isActive) == null ? void 0 : v.value) ?? !1
        : !1;
    }),
    c = S(() => {
      var v;
      return e.to
        ? (v = i.value) == null
          ? void 0
          : v.route.value.href
        : e.href;
    });
  return {
    isLink: a,
    isClickable: r,
    isActive: u,
    route: (d = i.value) == null ? void 0 : d.route,
    navigate: (f = i.value) == null ? void 0 : f.navigate,
    href: c,
    linkProps: lt({
      href: c,
      "aria-current": S(() => (u.value ? "page" : void 0)),
    }),
  };
}
const Fo = K(
  { href: String, replace: Boolean, to: [String, Object], exact: Boolean },
  "router"
);
let Ci = !1;
function C1(e, t) {
  let n = !1,
    a,
    r;
  Me &&
    (ze(() => {
      window.addEventListener("popstate", l),
        (a =
          e == null
            ? void 0
            : e.beforeEach((o, i, s) => {
                Ci ? (n ? t(s) : s()) : setTimeout(() => (n ? t(s) : s())),
                  (Ci = !0);
              })),
        (r =
          e == null
            ? void 0
            : e.afterEach(() => {
                Ci = !1;
              }));
    }),
    mt(() => {
      window.removeEventListener("popstate", l),
        a == null || a(),
        r == null || r();
    }));
  function l(o) {
    var i;
    ((i = o.state) != null && i.replaced) ||
      ((n = !0), setTimeout(() => (n = !1)));
  }
}
function x1(e, t) {
  ce(
    () => {
      var n;
      return (n = e.isActive) == null ? void 0 : n.value;
    },
    (n) => {
      e.isLink.value &&
        n &&
        t &&
        ze(() => {
          t(!0);
        });
    },
    { immediate: !0 }
  );
}
const hs = Symbol("rippleStop"),
  _1 = 80;
function Zd(e, t) {
  (e.style.transform = t), (e.style.webkitTransform = t);
}
function gs(e) {
  return e.constructor.name === "TouchEvent";
}
function yh(e) {
  return e.constructor.name === "KeyboardEvent";
}
const k1 = function (e, t) {
    var d;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = 0,
      r = 0;
    if (!yh(e)) {
      const f = t.getBoundingClientRect(),
        v = gs(e) ? e.touches[e.touches.length - 1] : e;
      (a = v.clientX - f.left), (r = v.clientY - f.top);
    }
    let l = 0,
      o = 0.3;
    (d = t._ripple) != null && d.circle
      ? ((o = 0.15),
        (l = t.clientWidth / 2),
        (l = n.center ? l : l + Math.sqrt((a - l) ** 2 + (r - l) ** 2) / 4))
      : (l = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2);
    const i = `${(t.clientWidth - l * 2) / 2}px`,
      s = `${(t.clientHeight - l * 2) / 2}px`,
      u = n.center ? i : `${a - l}px`,
      c = n.center ? s : `${r - l}px`;
    return { radius: l, scale: o, x: u, y: c, centerX: i, centerY: s };
  },
  Jl = {
    show(e, t) {
      var v;
      let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled)) return;
      const a = document.createElement("span"),
        r = document.createElement("span");
      a.appendChild(r),
        (a.className = "v-ripple__container"),
        n.class && (a.className += ` ${n.class}`);
      const {
          radius: l,
          scale: o,
          x: i,
          y: s,
          centerX: u,
          centerY: c,
        } = k1(e, t, n),
        d = `${l * 2}px`;
      (r.className = "v-ripple__animation"),
        (r.style.width = d),
        (r.style.height = d),
        t.appendChild(a);
      const f = window.getComputedStyle(t);
      f &&
        f.position === "static" &&
        ((t.style.position = "relative"),
        (t.dataset.previousPosition = "static")),
        r.classList.add("v-ripple__animation--enter"),
        r.classList.add("v-ripple__animation--visible"),
        Zd(r, `translate(${i}, ${s}) scale3d(${o},${o},${o})`),
        (r.dataset.activated = String(performance.now())),
        setTimeout(() => {
          r.classList.remove("v-ripple__animation--enter"),
            r.classList.add("v-ripple__animation--in"),
            Zd(r, `translate(${u}, ${c}) scale3d(1,1,1)`);
        }, 0);
    },
    hide(e) {
      var l;
      if (!((l = e == null ? void 0 : e._ripple) != null && l.enabled)) return;
      const t = e.getElementsByClassName("v-ripple__animation");
      if (t.length === 0) return;
      const n = t[t.length - 1];
      if (n.dataset.isHiding) return;
      n.dataset.isHiding = "true";
      const a = performance.now() - Number(n.dataset.activated),
        r = Math.max(250 - a, 0);
      setTimeout(() => {
        n.classList.remove("v-ripple__animation--in"),
          n.classList.add("v-ripple__animation--out"),
          setTimeout(() => {
            var i;
            e.getElementsByClassName("v-ripple__animation").length === 1 &&
              e.dataset.previousPosition &&
              ((e.style.position = e.dataset.previousPosition),
              delete e.dataset.previousPosition),
              ((i = n.parentNode) == null ? void 0 : i.parentNode) === e &&
                e.removeChild(n.parentNode);
          }, 300);
      }, r);
    },
  };
function bh(e) {
  return typeof e > "u" || !!e;
}
function Gr(e) {
  const t = {},
    n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[hs])) {
    if (((e[hs] = !0), gs(e)))
      (n._ripple.touched = !0), (n._ripple.isTouch = !0);
    else if (n._ripple.isTouch) return;
    if (
      ((t.center = n._ripple.centered || yh(e)),
      n._ripple.class && (t.class = n._ripple.class),
      gs(e))
    ) {
      if (n._ripple.showTimerCommit) return;
      (n._ripple.showTimerCommit = () => {
        Jl.show(e, n, t);
      }),
        (n._ripple.showTimer = window.setTimeout(() => {
          var a;
          (a = n == null ? void 0 : n._ripple) != null &&
            a.showTimerCommit &&
            (n._ripple.showTimerCommit(), (n._ripple.showTimerCommit = null));
        }, _1));
    } else Jl.show(e, n, t);
  }
}
function Qd(e) {
  e[hs] = !0;
}
function Ut(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (
      (window.clearTimeout(t._ripple.showTimer),
      e.type === "touchend" && t._ripple.showTimerCommit)
    ) {
      t._ripple.showTimerCommit(),
        (t._ripple.showTimerCommit = null),
        (t._ripple.showTimer = window.setTimeout(() => {
          Ut(e);
        }));
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }),
      Jl.hide(t);
  }
}
function ph(e) {
  const t = e.currentTarget;
  t != null &&
    t._ripple &&
    (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
    window.clearTimeout(t._ripple.showTimer));
}
let Kr = !1;
function Sh(e) {
  !Kr &&
    (e.keyCode === Tc.enter || e.keyCode === Tc.space) &&
    ((Kr = !0), Gr(e));
}
function wh(e) {
  (Kr = !1), Ut(e);
}
function Ch(e) {
  Kr && ((Kr = !1), Ut(e));
}
function xh(e, t, n) {
  const { value: a, modifiers: r } = t,
    l = bh(a);
  if (
    (l || Jl.hide(e),
    (e._ripple = e._ripple ?? {}),
    (e._ripple.enabled = l),
    (e._ripple.centered = r.center),
    (e._ripple.circle = r.circle),
    Qs(a) && a.class && (e._ripple.class = a.class),
    l && !n)
  ) {
    if (r.stop) {
      e.addEventListener("touchstart", Qd, { passive: !0 }),
        e.addEventListener("mousedown", Qd);
      return;
    }
    e.addEventListener("touchstart", Gr, { passive: !0 }),
      e.addEventListener("touchend", Ut, { passive: !0 }),
      e.addEventListener("touchmove", ph, { passive: !0 }),
      e.addEventListener("touchcancel", Ut),
      e.addEventListener("mousedown", Gr),
      e.addEventListener("mouseup", Ut),
      e.addEventListener("mouseleave", Ut),
      e.addEventListener("keydown", Sh),
      e.addEventListener("keyup", wh),
      e.addEventListener("blur", Ch),
      e.addEventListener("dragstart", Ut, { passive: !0 });
  } else !l && n && _h(e);
}
function _h(e) {
  e.removeEventListener("mousedown", Gr),
    e.removeEventListener("touchstart", Gr),
    e.removeEventListener("touchend", Ut),
    e.removeEventListener("touchmove", ph),
    e.removeEventListener("touchcancel", Ut),
    e.removeEventListener("mouseup", Ut),
    e.removeEventListener("mouseleave", Ut),
    e.removeEventListener("keydown", Sh),
    e.removeEventListener("keyup", wh),
    e.removeEventListener("dragstart", Ut),
    e.removeEventListener("blur", Ch);
}
function E1(e, t) {
  xh(e, t, !1);
}
function P1(e) {
  delete e._ripple, _h(e);
}
function T1(e, t) {
  if (t.value === t.oldValue) return;
  const n = bh(t.oldValue);
  xh(e, t, n);
}
const sl = { mounted: E1, unmounted: P1, updated: T1 },
  kh = K(
    {
      active: { type: Boolean, default: void 0 },
      activeColor: String,
      baseColor: String,
      symbol: { type: null, default: bu },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: Ae,
      appendIcon: Ae,
      block: Boolean,
      readonly: Boolean,
      slim: Boolean,
      stacked: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      ...tn(),
      ...ke(),
      ...Vt(),
      ...Qt(),
      ...nn(),
      ...gu(),
      ...$o(),
      ...il(),
      ...Bo(),
      ...ht(),
      ...Fo(),
      ...vr(),
      ...He({ tag: "button" }),
      ...Ge(),
      ...fn({ variant: "elevated" }),
    },
    "VBtn"
  ),
  $e = fe()({
    name: "VBtn",
    props: kh(),
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: r } = Qe(e),
        { borderClasses: l } = cn(e),
        { densityClasses: o } = Yt(e),
        { dimensionStyles: i } = en(e),
        { elevationClasses: s } = dn(e),
        { loaderClasses: u } = Mo(e),
        { locationStyles: c } = Oo(e),
        { positionClasses: d } = Lo(e),
        { roundedClasses: f } = xt(e),
        { sizeClasses: v, sizeStyles: m } = ol(e),
        h = yu(e, e.symbol, !1),
        y = Ro(e, n),
        p = S(() => {
          var P;
          return e.active !== void 0
            ? e.active
            : y.isLink.value
            ? (P = y.isActive) == null
              ? void 0
              : P.value
            : h == null
            ? void 0
            : h.isSelected.value;
        }),
        w = S(() => (p.value ? e.activeColor ?? e.color : e.color)),
        x = S(() => {
          var I, $;
          return {
            color:
              ((h == null ? void 0 : h.isSelected.value) &&
                (!y.isLink.value ||
                  ((I = y.isActive) == null ? void 0 : I.value))) ||
              !h ||
              (($ = y.isActive) == null ? void 0 : $.value)
                ? w.value ?? e.baseColor
                : e.baseColor,
            variant: e.variant,
          };
        }),
        { colorClasses: E, colorStyles: k, variantClasses: V } = Da(x),
        A = S(() => (h == null ? void 0 : h.disabled.value) || e.disabled),
        b = S(
          () => e.variant === "elevated" && !(e.disabled || e.flat || e.border)
        ),
        C = S(() => {
          if (!(e.value === void 0 || typeof e.value == "symbol"))
            return Object(e.value) === e.value
              ? JSON.stringify(e.value, null, 0)
              : e.value;
        });
      function D(P) {
        var I;
        A.value ||
          (y.isLink.value &&
            (P.metaKey ||
              P.ctrlKey ||
              P.shiftKey ||
              P.button !== 0 ||
              n.target === "_blank")) ||
          ((I = y.navigate) == null || I.call(y, P), h == null || h.toggle());
      }
      return (
        x1(y, h == null ? void 0 : h.select),
        be(() => {
          const P = y.isLink.value ? "a" : e.tag,
            I = !!(e.prependIcon || a.prepend),
            $ = !!(e.appendIcon || a.append),
            M = !!(e.icon && e.icon !== !0);
          return ft(
            g(
              P,
              le(
                {
                  type: P === "a" ? void 0 : "button",
                  class: [
                    "v-btn",
                    h == null ? void 0 : h.selectedClass.value,
                    {
                      "v-btn--active": p.value,
                      "v-btn--block": e.block,
                      "v-btn--disabled": A.value,
                      "v-btn--elevated": b.value,
                      "v-btn--flat": e.flat,
                      "v-btn--icon": !!e.icon,
                      "v-btn--loading": e.loading,
                      "v-btn--readonly": e.readonly,
                      "v-btn--slim": e.slim,
                      "v-btn--stacked": e.stacked,
                    },
                    r.value,
                    l.value,
                    E.value,
                    o.value,
                    s.value,
                    u.value,
                    d.value,
                    f.value,
                    v.value,
                    V.value,
                    e.class,
                  ],
                  style: [k.value, i.value, c.value, m.value, e.style],
                  "aria-busy": e.loading ? !0 : void 0,
                  disabled: A.value || void 0,
                  tabindex: e.loading || e.readonly ? -1 : void 0,
                  onClick: D,
                  value: C.value,
                },
                y.linkProps
              ),
              {
                default: () => {
                  var N;
                  return [
                    Va(!0, "v-btn"),
                    !e.icon &&
                      I &&
                      g("span", { key: "prepend", class: "v-btn__prepend" }, [
                        a.prepend
                          ? g(
                              qe,
                              {
                                key: "prepend-defaults",
                                disabled: !e.prependIcon,
                                defaults: { VIcon: { icon: e.prependIcon } },
                              },
                              a.prepend
                            )
                          : g(
                              De,
                              { key: "prepend-icon", icon: e.prependIcon },
                              null
                            ),
                      ]),
                    g(
                      "span",
                      { class: "v-btn__content", "data-no-activator": "" },
                      [
                        !a.default && M
                          ? g(De, { key: "content-icon", icon: e.icon }, null)
                          : g(
                              qe,
                              {
                                key: "content-defaults",
                                disabled: !M,
                                defaults: { VIcon: { icon: e.icon } },
                              },
                              {
                                default: () => {
                                  var B;
                                  return [
                                    ((B = a.default) == null
                                      ? void 0
                                      : B.call(a)) ?? e.text,
                                  ];
                                },
                              }
                            ),
                      ]
                    ),
                    !e.icon &&
                      $ &&
                      g("span", { key: "append", class: "v-btn__append" }, [
                        a.append
                          ? g(
                              qe,
                              {
                                key: "append-defaults",
                                disabled: !e.appendIcon,
                                defaults: { VIcon: { icon: e.appendIcon } },
                              },
                              a.append
                            )
                          : g(
                              De,
                              { key: "append-icon", icon: e.appendIcon },
                              null
                            ),
                      ]),
                    !!e.loading &&
                      g("span", { key: "loader", class: "v-btn__loader" }, [
                        ((N = a.loader) == null ? void 0 : N.call(a)) ??
                          g(
                            mh,
                            {
                              color:
                                typeof e.loading == "boolean"
                                  ? void 0
                                  : e.loading,
                              indeterminate: !0,
                              width: "2",
                            },
                            null
                          ),
                      ]),
                  ];
                },
              }
            ),
            [[sl, !A.value && e.ripple, "", { center: !!e.icon }]]
          );
        }),
        { group: h }
      );
    },
  }),
  A1 = K(
    { scrollable: Boolean, ...ke(), ...Qt(), ...He({ tag: "main" }) },
    "VMain"
  ),
  Eh = fe()({
    name: "VMain",
    props: A1(),
    setup(e, t) {
      let { slots: n } = t;
      const { dimensionStyles: a } = en(e),
        { mainStyles: r } = Sm(),
        { ssrBootStyles: l } = fr();
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-main",
                { "v-main--scrollable": e.scrollable },
                e.class,
              ],
              style: [r.value, l.value, a.value, e.style],
            },
            {
              default: () => {
                var o, i;
                return [
                  e.scrollable
                    ? g("div", { class: "v-main__scroller" }, [
                        (o = n.default) == null ? void 0 : o.call(n),
                      ])
                    : (i = n.default) == null
                    ? void 0
                    : i.call(n),
                ];
              },
            }
          )
        ),
        {}
      );
    },
  }),
  xi = Symbol("Forwarded refs");
function _i(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function xn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  return (
    (e[xi] = n),
    new Proxy(e, {
      get(r, l) {
        if (Reflect.has(r, l)) return Reflect.get(r, l);
        if (
          !(typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))
        ) {
          for (const o of n)
            if (o.value && Reflect.has(o.value, l)) {
              const i = Reflect.get(o.value, l);
              return typeof i == "function" ? i.bind(o.value) : i;
            }
        }
      },
      has(r, l) {
        if (Reflect.has(r, l)) return !0;
        if (typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))
          return !1;
        for (const o of n) if (o.value && Reflect.has(o.value, l)) return !0;
        return !1;
      },
      set(r, l, o) {
        if (Reflect.has(r, l)) return Reflect.set(r, l, o);
        if (typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))
          return !1;
        for (const i of n)
          if (i.value && Reflect.has(i.value, l))
            return Reflect.set(i.value, l, o);
        return !1;
      },
      getOwnPropertyDescriptor(r, l) {
        var i;
        const o = Reflect.getOwnPropertyDescriptor(r, l);
        if (o) return o;
        if (
          !(typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))
        ) {
          for (const s of n) {
            if (!s.value) continue;
            const u =
              _i(s.value, l) ??
              ("_" in s.value
                ? _i((i = s.value._) == null ? void 0 : i.setupState, l)
                : void 0);
            if (u) return u;
          }
          for (const s of n) {
            const u = s.value && s.value[xi];
            if (!u) continue;
            const c = u.slice();
            for (; c.length; ) {
              const d = c.shift(),
                f = _i(d.value, l);
              if (f) return f;
              const v = d.value && d.value[xi];
              v && c.push(...v);
            }
          }
        }
      },
    })
  );
}
const Su = Symbol.for("vuetify:v-tabs"),
  I1 = K(
    {
      fixed: Boolean,
      sliderColor: String,
      hideSlider: Boolean,
      direction: { type: String, default: "horizontal" },
      ...Zt(kh({ selectedClass: "v-tab--selected", variant: "text" }), [
        "active",
        "block",
        "flat",
        "location",
        "position",
        "symbol",
      ]),
    },
    "VTab"
  ),
  Xl = fe()({
    name: "VTab",
    props: I1(),
    setup(e, t) {
      let { slots: n, attrs: a } = t;
      const { textColorClasses: r, textColorStyles: l } = Xt(e, "sliderColor"),
        o = W(),
        i = W(),
        s = S(() => e.direction === "horizontal"),
        u = S(() => {
          var d, f;
          return (
            ((f = (d = o.value) == null ? void 0 : d.group) == null
              ? void 0
              : f.isSelected.value) ?? !1
          );
        });
      function c(d) {
        var v, m;
        let { value: f } = d;
        if (f) {
          const h =
              (m = (v = o.value) == null ? void 0 : v.$el.parentElement) == null
                ? void 0
                : m.querySelector(".v-tab--selected .v-tab__slider"),
            y = i.value;
          if (!h || !y) return;
          const p = getComputedStyle(h).color,
            w = h.getBoundingClientRect(),
            x = y.getBoundingClientRect(),
            E = s.value ? "x" : "y",
            k = s.value ? "X" : "Y",
            V = s.value ? "right" : "bottom",
            A = s.value ? "width" : "height",
            b = w[E],
            C = x[E],
            D = b > C ? w[V] - x[V] : w[E] - x[E],
            P =
              Math.sign(D) > 0
                ? s.value
                  ? "right"
                  : "bottom"
                : Math.sign(D) < 0
                ? s.value
                  ? "left"
                  : "top"
                : "center",
            $ =
              (Math.abs(D) + (Math.sign(D) < 0 ? w[A] : x[A])) /
                Math.max(w[A], x[A]) || 0,
            M = w[A] / x[A] || 0,
            N = 1.5;
          fa(
            y,
            {
              backgroundColor: [p, "currentcolor"],
              transform: [
                `translate${k}(${D}px) scale${k}(${M})`,
                `translate${k}(${D / N}px) scale${k}(${($ - 1) / N + 1})`,
                "none",
              ],
              transformOrigin: Array(3).fill(P),
            },
            { duration: 225, easing: Fr }
          );
        }
      }
      return (
        be(() => {
          const d = $e.filterProps(e);
          return g(
            $e,
            le(
              {
                symbol: Su,
                ref: o,
                class: ["v-tab", e.class],
                style: e.style,
                tabindex: u.value ? 0 : -1,
                role: "tab",
                "aria-selected": String(u.value),
                active: !1,
              },
              d,
              a,
              {
                block: e.fixed,
                maxWidth: e.fixed ? 300 : void 0,
                "onGroup:selected": c,
              }
            ),
            {
              ...n,
              default: () => {
                var f;
                return g(ye, null, [
                  ((f = n.default) == null ? void 0 : f.call(n)) ?? e.text,
                  !e.hideSlider &&
                    g(
                      "div",
                      {
                        ref: i,
                        class: ["v-tab__slider", r.value],
                        style: l.value,
                      },
                      null
                    ),
                ]);
              },
            }
          );
        }),
        xn({}, o)
      );
    },
  }),
  V1 = (e) => {
    const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: r } = e,
      l = 0.5,
      o = 16;
    (e.offsetX = n - t),
      (e.offsetY = r - a),
      Math.abs(e.offsetY) < l * Math.abs(e.offsetX) &&
        (e.left && n < t - o && e.left(e), e.right && n > t + o && e.right(e)),
      Math.abs(e.offsetX) < l * Math.abs(e.offsetY) &&
        (e.up && r < a - o && e.up(e), e.down && r > a + o && e.down(e));
  };
function D1(e, t) {
  var a;
  const n = e.changedTouches[0];
  (t.touchstartX = n.clientX),
    (t.touchstartY = n.clientY),
    (a = t.start) == null || a.call(t, { originalEvent: e, ...t });
}
function O1(e, t) {
  var a;
  const n = e.changedTouches[0];
  (t.touchendX = n.clientX),
    (t.touchendY = n.clientY),
    (a = t.end) == null || a.call(t, { originalEvent: e, ...t }),
    V1(t);
}
function $1(e, t) {
  var a;
  const n = e.changedTouches[0];
  (t.touchmoveX = n.clientX),
    (t.touchmoveY = n.clientY),
    (a = t.move) == null || a.call(t, { originalEvent: e, ...t });
}
function M1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end,
  };
  return {
    touchstart: (n) => D1(n, t),
    touchend: (n) => O1(n, t),
    touchmove: (n) => $1(n, t),
  };
}
function B1(e, t) {
  var i;
  const n = t.value,
    a = n != null && n.parent ? e.parentElement : e,
    r = (n == null ? void 0 : n.options) ?? { passive: !0 },
    l = (i = t.instance) == null ? void 0 : i.$.uid;
  if (!a || !l) return;
  const o = M1(t.value);
  (a._touchHandlers = a._touchHandlers ?? Object.create(null)),
    (a._touchHandlers[l] = o),
    Wv(o).forEach((s) => {
      a.addEventListener(s, o[s], r);
    });
}
function L1(e, t) {
  var l, o;
  const n = (l = t.value) != null && l.parent ? e.parentElement : e,
    a = (o = t.instance) == null ? void 0 : o.$.uid;
  if (!(n != null && n._touchHandlers) || !a) return;
  const r = n._touchHandlers[a];
  Wv(r).forEach((i) => {
    n.removeEventListener(i, r[i]);
  }),
    delete n._touchHandlers[a];
}
const Ph = { mounted: B1, unmounted: L1 },
  Th = Symbol.for("vuetify:v-window"),
  Ah = Symbol.for("vuetify:v-window-group"),
  Ih = K(
    {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: "$next" },
      prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == "boolean" || e === "hover",
      },
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: "horizontal" },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: "v-window-item--active" },
      mandatory: { type: [Boolean, String], default: "force" },
      ...ke(),
      ...He(),
      ...Ge(),
    },
    "VWindow"
  ),
  ef = fe()({
    name: "VWindow",
    directives: { Touch: Ph },
    props: Ih(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Qe(e),
        { isRtl: r } = Nt(),
        { t: l } = un(),
        o = ll(e, Ah),
        i = W(),
        s = S(() => (r.value ? !e.reverse : e.reverse)),
        u = he(!1),
        c = S(() => {
          const E = e.direction === "vertical" ? "y" : "x",
            V = (s.value ? !u.value : u.value) ? "-reverse" : "";
          return `v-window-${E}${V}-transition`;
        }),
        d = he(0),
        f = W(void 0),
        v = S(() =>
          o.items.value.findIndex((E) => o.selected.value.includes(E.id))
        );
      ce(v, (E, k) => {
        const V = o.items.value.length,
          A = V - 1;
        V <= 2
          ? (u.value = E < k)
          : E === A && k === 0
          ? (u.value = !0)
          : E === 0 && k === A
          ? (u.value = !1)
          : (u.value = E < k);
      }),
        We(Th, {
          transition: c,
          isReversed: u,
          transitionCount: d,
          transitionHeight: f,
          rootRef: i,
        });
      const m = S(() => e.continuous || v.value !== 0),
        h = S(() => e.continuous || v.value !== o.items.value.length - 1);
      function y() {
        m.value && o.prev();
      }
      function p() {
        h.value && o.next();
      }
      const w = S(() => {
          const E = [],
            k = {
              icon: r.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${s.value ? "right" : "left"}`,
              onClick: o.prev,
              "aria-label": l("$vuetify.carousel.prev"),
            };
          E.push(
            m.value
              ? n.prev
                ? n.prev({ props: k })
                : g($e, k, null)
              : g("div", null, null)
          );
          const V = {
            icon: r.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${s.value ? "left" : "right"}`,
            onClick: o.next,
            "aria-label": l("$vuetify.carousel.next"),
          };
          return (
            E.push(
              h.value
                ? n.next
                  ? n.next({ props: V })
                  : g($e, V, null)
                : g("div", null, null)
            ),
            E
          );
        }),
        x = S(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    s.value ? y() : p();
                  },
                  right: () => {
                    s.value ? p() : y();
                  },
                  start: (k) => {
                    let { originalEvent: V } = k;
                    V.stopPropagation();
                  },
                },
                ...(e.touch === !0 ? {} : e.touch),
              }
        );
      return (
        be(() =>
          ft(
            g(
              e.tag,
              {
                ref: i,
                class: [
                  "v-window",
                  {
                    "v-window--show-arrows-on-hover": e.showArrows === "hover",
                  },
                  a.value,
                  e.class,
                ],
                style: e.style,
              },
              {
                default: () => {
                  var E, k;
                  return [
                    g(
                      "div",
                      {
                        class: "v-window__container",
                        style: { height: f.value },
                      },
                      [
                        (E = n.default) == null
                          ? void 0
                          : E.call(n, { group: o }),
                        e.showArrows !== !1 &&
                          g("div", { class: "v-window__controls" }, [w.value]),
                      ]
                    ),
                    (k = n.additional) == null
                      ? void 0
                      : k.call(n, { group: o }),
                  ];
                },
              }
            ),
            [[Ln("touch"), x.value]]
          )
        ),
        { group: o }
      );
    },
  }),
  R1 = K(
    {
      ...Zt(Ih(), [
        "continuous",
        "nextIcon",
        "prevIcon",
        "showArrows",
        "touch",
        "mandatory",
      ]),
    },
    "VTabsWindow"
  ),
  F1 = fe()({
    name: "VTabsWindow",
    props: R1(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ie(Su, null),
        r = Ve(e, "modelValue"),
        l = S({
          get() {
            var o;
            return r.value != null || !a
              ? r.value
              : (o = a.items.value.find((i) =>
                  a.selected.value.includes(i.id)
                )) == null
              ? void 0
              : o.value;
          },
          set(o) {
            r.value = o;
          },
        });
      return (
        be(() => {
          const o = ef.filterProps(e);
          return g(
            ef,
            le({ _as: "VTabsWindow" }, o, {
              modelValue: l.value,
              "onUpdate:modelValue": (i) => (l.value = i),
              class: ["v-tabs-window", e.class],
              style: e.style,
              mandatory: !1,
              touch: !1,
            }),
            n
          );
        }),
        {}
      );
    },
  }),
  Vh = K({ eager: Boolean }, "lazy");
function Dh(e, t) {
  const n = he(!1),
    a = S(() => n.value || e.eager || t.value);
  ce(t, () => (n.value = !0));
  function r() {
    e.eager || (n.value = !1);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: r };
}
const Oh = K(
    {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...ke(),
      ...gu(),
      ...Vh(),
    },
    "VWindowItem"
  ),
  tf = fe()({
    name: "VWindowItem",
    directives: { Touch: Ph },
    props: Oh(),
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ie(Th),
        r = yu(e, Ah),
        { isBooted: l } = fr();
      if (!a || !r)
        throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
      const o = he(!1),
        i = S(
          () =>
            l.value &&
            (a.isReversed.value
              ? e.reverseTransition !== !1
              : e.transition !== !1)
        );
      function s() {
        !o.value ||
          !a ||
          ((o.value = !1),
          a.transitionCount.value > 0 &&
            ((a.transitionCount.value -= 1),
            a.transitionCount.value === 0 &&
              (a.transitionHeight.value = void 0)));
      }
      function u() {
        var m;
        o.value ||
          !a ||
          ((o.value = !0),
          a.transitionCount.value === 0 &&
            (a.transitionHeight.value = pe(
              (m = a.rootRef.value) == null ? void 0 : m.clientHeight
            )),
          (a.transitionCount.value += 1));
      }
      function c() {
        s();
      }
      function d(m) {
        o.value &&
          ze(() => {
            !i.value ||
              !o.value ||
              !a ||
              (a.transitionHeight.value = pe(m.clientHeight));
          });
      }
      const f = S(() => {
          const m = a.isReversed.value ? e.reverseTransition : e.transition;
          return i.value
            ? {
                name: typeof m != "string" ? a.transition.value : m,
                onBeforeEnter: u,
                onAfterEnter: s,
                onEnterCancelled: c,
                onBeforeLeave: u,
                onAfterLeave: s,
                onLeaveCancelled: c,
                onEnter: d,
              }
            : !1;
        }),
        { hasContent: v } = Dh(e, r.isSelected);
      return (
        be(() =>
          g(
            An,
            { transition: f.value, disabled: !l.value },
            {
              default: () => {
                var m;
                return [
                  ft(
                    g(
                      "div",
                      {
                        class: [
                          "v-window-item",
                          r.selectedClass.value,
                          e.class,
                        ],
                        style: e.style,
                      },
                      [
                        v.value &&
                          ((m = n.default) == null ? void 0 : m.call(n)),
                      ]
                    ),
                    [[Aa, r.isSelected.value]]
                  ),
                ];
              },
            }
          )
        ),
        { groupItem: r }
      );
    },
  }),
  N1 = K({ ...Oh() }, "VTabsWindowItem"),
  H1 = fe()({
    name: "VTabsWindowItem",
    props: N1(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() => {
          const a = tf.filterProps(e);
          return g(
            tf,
            le({ _as: "VTabsWindowItem" }, a, {
              class: ["v-tabs-window-item", e.class],
              style: e.style,
            }),
            n
          );
        }),
        {}
      );
    },
  });
function j1(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: a,
    isHorizontal: r,
  } = e;
  const l = Yr(r, n),
    o = $h(r, a, n),
    i = Yr(r, t),
    s = Mh(r, t),
    u = i * 0.4;
  return o > s ? s - u : o + l < s + i ? s - l + i + u : o;
}
function z1(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const r = Yr(a, n),
    l = Mh(a, t),
    o = Yr(a, t);
  return l - r / 2 + o / 2;
}
function nf(e, t) {
  const n = e ? "scrollWidth" : "scrollHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function U1(e, t) {
  const n = e ? "clientWidth" : "clientHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function $h(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: r, scrollWidth: l } = n;
  return e ? (t ? l - r + a : a) : n.scrollTop;
}
function Yr(e, t) {
  const n = e ? "offsetWidth" : "offsetHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function Mh(e, t) {
  const n = e ? "offsetLeft" : "offsetTop";
  return (t == null ? void 0 : t[n]) || 0;
}
const W1 = Symbol.for("vuetify:v-slide-group"),
  wu = K(
    {
      centerActive: Boolean,
      direction: { type: String, default: "horizontal" },
      symbol: { type: null, default: W1 },
      nextIcon: { type: Ae, default: "$next" },
      prevIcon: { type: Ae, default: "$prev" },
      showArrows: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e),
      },
      ...ke(),
      ...al({ mobile: null }),
      ...He(),
      ...Do({ selectedClass: "v-slide-group-item--active" }),
    },
    "VSlideGroup"
  ),
  Zl = fe()({
    name: "VSlideGroup",
    props: wu(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { isRtl: a } = Nt(),
        { displayClasses: r, mobile: l } = Rn(e),
        o = ll(e, e.symbol),
        i = he(!1),
        s = he(0),
        u = he(0),
        c = he(0),
        d = S(() => e.direction === "horizontal"),
        { resizeRef: f, contentRect: v } = Xn(),
        { resizeRef: m, contentRect: h } = Xn(),
        y = SS(),
        p = S(() => ({
          container: f.el,
          duration: 200,
          easing: "easeOutQuart",
        })),
        w = S(() =>
          o.selected.value.length
            ? o.items.value.findIndex((O) => O.id === o.selected.value[0])
            : -1
        ),
        x = S(() =>
          o.selected.value.length
            ? o.items.value.findIndex(
                (O) => O.id === o.selected.value[o.selected.value.length - 1]
              )
            : -1
        );
      if (Me) {
        let O = -1;
        ce(
          () => [o.selected.value, v.value, h.value, d.value],
          () => {
            cancelAnimationFrame(O),
              (O = requestAnimationFrame(() => {
                if (v.value && h.value) {
                  const L = d.value ? "width" : "height";
                  (u.value = v.value[L]),
                    (c.value = h.value[L]),
                    (i.value = u.value + 1 < c.value);
                }
                if (w.value >= 0 && m.el) {
                  const L = m.el.children[x.value];
                  k(L, e.centerActive);
                }
              }));
          }
        );
      }
      const E = he(!1);
      function k(O, L) {
        let G = 0;
        L
          ? (G = z1({
              containerElement: f.el,
              isHorizontal: d.value,
              selectedElement: O,
            }))
          : (G = j1({
              containerElement: f.el,
              isHorizontal: d.value,
              isRtl: a.value,
              selectedElement: O,
            })),
          V(G);
      }
      function V(O) {
        if (!Me || !f.el) return;
        const L = Yr(d.value, f.el),
          G = $h(d.value, a.value, f.el);
        if (!(nf(d.value, f.el) <= L || Math.abs(O - G) < 16)) {
          if (d.value && a.value && f.el) {
            const { scrollWidth: X, offsetWidth: ve } = f.el;
            O = X - ve - O;
          }
          d.value ? y.horizontal(O, p.value) : y(O, p.value);
        }
      }
      function A(O) {
        const { scrollTop: L, scrollLeft: G } = O.target;
        s.value = d.value ? G : L;
      }
      function b(O) {
        if (((E.value = !0), !(!i.value || !m.el))) {
          for (const L of O.composedPath())
            for (const G of m.el.children)
              if (G === L) {
                k(G);
                return;
              }
        }
      }
      function C(O) {
        E.value = !1;
      }
      let D = !1;
      function P(O) {
        var L;
        !D &&
          !E.value &&
          !(
            O.relatedTarget &&
            (L = m.el) != null &&
            L.contains(O.relatedTarget)
          ) &&
          M(),
          (D = !1);
      }
      function I() {
        D = !0;
      }
      function $(O) {
        if (!m.el) return;
        function L(G) {
          O.preventDefault(), M(G);
        }
        d.value
          ? O.key === "ArrowRight"
            ? L(a.value ? "prev" : "next")
            : O.key === "ArrowLeft" && L(a.value ? "next" : "prev")
          : O.key === "ArrowDown"
          ? L("next")
          : O.key === "ArrowUp" && L("prev"),
          O.key === "Home" ? L("first") : O.key === "End" && L("last");
      }
      function M(O) {
        var G, oe;
        if (!m.el) return;
        let L;
        if (!O) L = Lr(m.el)[0];
        else if (O === "next") {
          if (
            ((L =
              (G = m.el.querySelector(":focus")) == null
                ? void 0
                : G.nextElementSibling),
            !L)
          )
            return M("first");
        } else if (O === "prev") {
          if (
            ((L =
              (oe = m.el.querySelector(":focus")) == null
                ? void 0
                : oe.previousElementSibling),
            !L)
          )
            return M("last");
        } else
          O === "first"
            ? (L = m.el.firstElementChild)
            : O === "last" && (L = m.el.lastElementChild);
        L && L.focus({ preventScroll: !0 });
      }
      function N(O) {
        const L = d.value && a.value ? -1 : 1,
          G = (O === "prev" ? -L : L) * u.value;
        let oe = s.value + G;
        if (d.value && a.value && f.el) {
          const { scrollWidth: X, offsetWidth: ve } = f.el;
          oe += X - ve;
        }
        V(oe);
      }
      const B = S(() => ({
          next: o.next,
          prev: o.prev,
          select: o.select,
          isSelected: o.isSelected,
        })),
        j = S(() => {
          switch (e.showArrows) {
            case "always":
              return !0;
            case "desktop":
              return !l.value;
            case !0:
              return i.value || Math.abs(s.value) > 0;
            case "mobile":
              return l.value || i.value || Math.abs(s.value) > 0;
            default:
              return !l.value && (i.value || Math.abs(s.value) > 0);
          }
        }),
        H = S(() => Math.abs(s.value) > 1),
        z = S(() => {
          if (!f.value) return !1;
          const O = nf(d.value, f.el),
            L = U1(d.value, f.el);
          return O - L - Math.abs(s.value) > 1;
        });
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-slide-group",
                {
                  "v-slide-group--vertical": !d.value,
                  "v-slide-group--has-affixes": j.value,
                  "v-slide-group--is-overflowing": i.value,
                },
                r.value,
                e.class,
              ],
              style: e.style,
              tabindex: E.value || o.selected.value.length ? -1 : 0,
              onFocus: P,
            },
            {
              default: () => {
                var O, L, G;
                return [
                  j.value &&
                    g(
                      "div",
                      {
                        key: "prev",
                        class: [
                          "v-slide-group__prev",
                          { "v-slide-group__prev--disabled": !H.value },
                        ],
                        onMousedown: I,
                        onClick: () => H.value && N("prev"),
                      },
                      [
                        ((O = n.prev) == null ? void 0 : O.call(n, B.value)) ??
                          g(Yd, null, {
                            default: () => [
                              g(
                                De,
                                { icon: a.value ? e.nextIcon : e.prevIcon },
                                null
                              ),
                            ],
                          }),
                      ]
                    ),
                  g(
                    "div",
                    {
                      key: "container",
                      ref: f,
                      class: "v-slide-group__container",
                      onScroll: A,
                    },
                    [
                      g(
                        "div",
                        {
                          ref: m,
                          class: "v-slide-group__content",
                          onFocusin: b,
                          onFocusout: C,
                          onKeydown: $,
                        },
                        [(L = n.default) == null ? void 0 : L.call(n, B.value)]
                      ),
                    ]
                  ),
                  j.value &&
                    g(
                      "div",
                      {
                        key: "next",
                        class: [
                          "v-slide-group__next",
                          { "v-slide-group__next--disabled": !z.value },
                        ],
                        onMousedown: I,
                        onClick: () => z.value && N("next"),
                      },
                      [
                        ((G = n.next) == null ? void 0 : G.call(n, B.value)) ??
                          g(Yd, null, {
                            default: () => [
                              g(
                                De,
                                { icon: a.value ? e.prevIcon : e.nextIcon },
                                null
                              ),
                            ],
                          }),
                      ]
                    ),
                ];
              },
            }
          )
        ),
        {
          selected: o.selected,
          scrollTo: N,
          scrollOffset: s,
          focus: M,
          hasPrev: H,
          hasNext: z,
        }
      );
    },
  });
function Oa() {
  const t = Ze("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
function G1(e) {
  return e ? e.map((t) => (Qs(t) ? t : { text: t, value: t })) : [];
}
const K1 = K(
    {
      alignTabs: { type: String, default: "start" },
      color: String,
      fixedTabs: Boolean,
      items: { type: Array, default: () => [] },
      stacked: Boolean,
      bgColor: String,
      grow: Boolean,
      height: { type: [Number, String], default: void 0 },
      hideSlider: Boolean,
      sliderColor: String,
      ...wu({ mandatory: "force", selectedClass: "v-tab-item--selected" }),
      ...Vt(),
      ...He(),
    },
    "VTabs"
  ),
  ys = fe()({
    name: "VTabs",
    props: K1(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const r = Ve(e, "modelValue"),
        l = S(() => G1(e.items)),
        { densityClasses: o } = Yt(e),
        { backgroundColorClasses: i, backgroundColorStyles: s } = It(
          ne(e, "bgColor")
        ),
        { scopeId: u } = Oa();
      return (
        Ft({
          VTab: {
            color: ne(e, "color"),
            direction: ne(e, "direction"),
            stacked: ne(e, "stacked"),
            fixed: ne(e, "fixedTabs"),
            sliderColor: ne(e, "sliderColor"),
            hideSlider: ne(e, "hideSlider"),
          },
        }),
        be(() => {
          const c = Zl.filterProps(e),
            d = !!(a.window || e.items.length > 0);
          return g(ye, null, [
            g(
              Zl,
              le(
                c,
                {
                  modelValue: r.value,
                  "onUpdate:modelValue": (f) => (r.value = f),
                  class: [
                    "v-tabs",
                    `v-tabs--${e.direction}`,
                    `v-tabs--align-tabs-${e.alignTabs}`,
                    {
                      "v-tabs--fixed-tabs": e.fixedTabs,
                      "v-tabs--grow": e.grow,
                      "v-tabs--stacked": e.stacked,
                    },
                    o.value,
                    i.value,
                    e.class,
                  ],
                  style: [
                    { "--v-tabs-height": pe(e.height) },
                    s.value,
                    e.style,
                  ],
                  role: "tablist",
                  symbol: Su,
                },
                u,
                n
              ),
              {
                default: () => {
                  var f;
                  return [
                    ((f = a.default) == null ? void 0 : f.call(a)) ??
                      l.value.map((v) => {
                        var m;
                        return (
                          ((m = a.tab) == null
                            ? void 0
                            : m.call(a, { item: v })) ??
                          g(Xl, le(v, { key: v.text, value: v.value }), {
                            default: a[`tab.${v.value}`]
                              ? () => {
                                  var h;
                                  return (h = a[`tab.${v.value}`]) == null
                                    ? void 0
                                    : h.call(a, { item: v });
                                }
                              : void 0,
                          })
                        );
                      }),
                  ];
                },
              }
            ),
            d &&
              g(
                F1,
                le(
                  {
                    modelValue: r.value,
                    "onUpdate:modelValue": (f) => (r.value = f),
                    key: "tabs-window",
                  },
                  u
                ),
                {
                  default: () => {
                    var f;
                    return [
                      l.value.map((v) => {
                        var m;
                        return (
                          ((m = a.item) == null
                            ? void 0
                            : m.call(a, { item: v })) ??
                          g(
                            H1,
                            { value: v.value },
                            {
                              default: () => {
                                var h;
                                return (h = a[`item.${v.value}`]) == null
                                  ? void 0
                                  : h.call(a, { item: v });
                              },
                            }
                          )
                        );
                      }),
                      (f = a.window) == null ? void 0 : f.call(a),
                    ];
                  },
                }
              ),
          ]);
        }),
        {}
      );
    },
  }),
  Y1 = at({
    __name: "AdminLayout",
    setup(e) {
      var a;
      const t =
          (a = Bu.find((r) => r.name === "AdminModule")) == null
            ? void 0
            : a.children,
        n = S(() => {
          var r;
          return (r = ea.currentRoute) == null ? void 0 : r.value.matched[1];
        });
      return (r, l) => {
        const o = dv("router-view");
        return (
          ge(),
          tt(
            ye,
            null,
            [
              g(
                ch,
                { flat: "", color: "transparent" },
                {
                  default: ue(() => [
                    g(
                      ys,
                      {
                        "model-value": n.value.name,
                        "onUpdate:modelValue":
                          l[0] || (l[0] = (i) => r.$router.push({ name: i })),
                      },
                      {
                        default: ue(() => [
                          (ge(!0),
                          tt(
                            ye,
                            null,
                            Vn(
                              Se(t),
                              (i) => (
                                ge(),
                                Te(
                                  Xl,
                                  { key: i.name, value: i.name },
                                  {
                                    default: ue(() => {
                                      var s;
                                      return [
                                        je(
                                          At(
                                            (s = i.meta) == null
                                              ? void 0
                                              : s.title
                                          ),
                                          1
                                        ),
                                      ];
                                    }),
                                    _: 2,
                                  },
                                  1032,
                                  ["value"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["model-value"]
                    ),
                  ]),
                  _: 1,
                }
              ),
              g(Eh, null, { default: ue(() => [g(o)]), _: 1 }),
            ],
            64
          )
        );
      };
    },
  }),
  q1 = Co("v-alert-title"),
  J1 = ["success", "info", "warning", "error"],
  X1 = K(
    {
      border: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" ||
          ["top", "end", "bottom", "start"].includes(e),
      },
      borderColor: String,
      closable: Boolean,
      closeIcon: { type: Ae, default: "$close" },
      closeLabel: { type: String, default: "$vuetify.close" },
      icon: { type: [Boolean, String, Function, Object], default: null },
      modelValue: { type: Boolean, default: !0 },
      prominent: Boolean,
      title: String,
      text: String,
      type: { type: String, validator: (e) => J1.includes(e) },
      ...ke(),
      ...Vt(),
      ...Qt(),
      ...nn(),
      ...il(),
      ...Bo(),
      ...ht(),
      ...He(),
      ...Ge(),
      ...fn({ variant: "flat" }),
    },
    "VAlert"
  ),
  Z1 = fe()({
    name: "VAlert",
    props: X1(),
    emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t;
      const r = Ve(e, "modelValue"),
        l = S(() => {
          if (e.icon !== !1) return e.type ? e.icon ?? `$${e.type}` : e.icon;
        }),
        o = S(() => ({ color: e.color ?? e.type, variant: e.variant })),
        { themeClasses: i } = Qe(e),
        { colorClasses: s, colorStyles: u, variantClasses: c } = Da(o),
        { densityClasses: d } = Yt(e),
        { dimensionStyles: f } = en(e),
        { elevationClasses: v } = dn(e),
        { locationStyles: m } = Oo(e),
        { positionClasses: h } = Lo(e),
        { roundedClasses: y } = xt(e),
        { textColorClasses: p, textColorStyles: w } = Xt(ne(e, "borderColor")),
        { t: x } = un(),
        E = S(() => ({
          "aria-label": x(e.closeLabel),
          onClick(k) {
            (r.value = !1), n("click:close", k);
          },
        }));
      return () => {
        const k = !!(a.prepend || l.value),
          V = !!(a.title || e.title),
          A = !!(a.close || e.closable);
        return (
          r.value &&
          g(
            e.tag,
            {
              class: [
                "v-alert",
                e.border && {
                  "v-alert--border": !!e.border,
                  [`v-alert--border-${e.border === !0 ? "start" : e.border}`]:
                    !0,
                },
                { "v-alert--prominent": e.prominent },
                i.value,
                s.value,
                d.value,
                v.value,
                h.value,
                y.value,
                c.value,
                e.class,
              ],
              style: [u.value, f.value, m.value, e.style],
              role: "alert",
            },
            {
              default: () => {
                var b, C;
                return [
                  Va(!1, "v-alert"),
                  e.border &&
                    g(
                      "div",
                      {
                        key: "border",
                        class: ["v-alert__border", p.value],
                        style: w.value,
                      },
                      null
                    ),
                  k &&
                    g("div", { key: "prepend", class: "v-alert__prepend" }, [
                      a.prepend
                        ? g(
                            qe,
                            {
                              key: "prepend-defaults",
                              disabled: !l.value,
                              defaults: {
                                VIcon: {
                                  density: e.density,
                                  icon: l.value,
                                  size: e.prominent ? 44 : 28,
                                },
                              },
                            },
                            a.prepend
                          )
                        : g(
                            De,
                            {
                              key: "prepend-icon",
                              density: e.density,
                              icon: l.value,
                              size: e.prominent ? 44 : 28,
                            },
                            null
                          ),
                    ]),
                  g("div", { class: "v-alert__content" }, [
                    V &&
                      g(
                        q1,
                        { key: "title" },
                        {
                          default: () => {
                            var D;
                            return [
                              ((D = a.title) == null ? void 0 : D.call(a)) ??
                                e.title,
                            ];
                          },
                        }
                      ),
                    ((b = a.text) == null ? void 0 : b.call(a)) ?? e.text,
                    (C = a.default) == null ? void 0 : C.call(a),
                  ]),
                  a.append &&
                    g("div", { key: "append", class: "v-alert__append" }, [
                      a.append(),
                    ]),
                  A &&
                    g("div", { key: "close", class: "v-alert__close" }, [
                      a.close
                        ? g(
                            qe,
                            {
                              key: "close-defaults",
                              defaults: {
                                VBtn: {
                                  icon: e.closeIcon,
                                  size: "x-small",
                                  variant: "text",
                                },
                              },
                            },
                            {
                              default: () => {
                                var D;
                                return [
                                  (D = a.close) == null
                                    ? void 0
                                    : D.call(a, { props: E.value }),
                                ];
                              },
                            }
                          )
                        : g(
                            $e,
                            le(
                              {
                                key: "close-btn",
                                icon: e.closeIcon,
                                size: "x-small",
                                variant: "text",
                              },
                              E.value
                            ),
                            null
                          ),
                    ]),
                ];
              },
            }
          )
        );
      };
    },
  }),
  Bh = at({
    __name: "ErrorDisplay",
    props: {
      message: { type: String, default: "" },
      loading: { type: Boolean, default: !1 },
    },
    emits: { retry: () => !0 },
    setup(e) {
      return (t, n) =>
        e.message
          ? (ge(),
            Te(
              Z1,
              { key: 0, color: "error" },
              {
                title: ue(() => n[1] || (n[1] = [je(" Fehler ")])),
                append: ue(() => [
                  g(
                    $e,
                    {
                      loading: e.loading,
                      onClick: n[0] || (n[0] = (a) => t.$emit("retry")),
                    },
                    {
                      default: ue(
                        () => n[2] || (n[2] = [je("Erneut versuchen")])
                      ),
                      _: 1,
                    },
                    8,
                    ["loading"]
                  ),
                ]),
                default: ue(() => [je(" " + At(e.message), 1)]),
                _: 1,
              }
            ))
          : it("", !0);
    },
  });
function ul(e, t) {
  if (Array.isArray(t)) {
    const n = t.slice(0, -1),
      a = t.slice(-1)[0];
    return S({
      get: () => t.reduce((r, l) => r[l], e.value),
      set: (r) => {
        let l = e.value;
        for (const o of n) l = l[o];
        l[a] = r;
      },
    });
  }
  return S({
    get: () => e.value[t],
    set: (n) => {
      e.value[t] = n;
    },
  });
}
const Q1 = K({ text: String, onClick: dt(), ...ke(), ...Ge() }, "VLabel"),
  Lh = fe()({
    name: "VLabel",
    props: Q1(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() => {
          var a;
          return g(
            "label",
            {
              class: [
                "v-label",
                { "v-label--clickable": !!e.onClick },
                e.class,
              ],
              style: e.style,
              onClick: e.onClick,
            },
            [e.text, (a = n.default) == null ? void 0 : a.call(n)]
          );
        }),
        {}
      );
    },
  }),
  Rh = Symbol.for("vuetify:selection-control-group"),
  Fh = K(
    {
      color: String,
      disabled: { type: Boolean, default: null },
      defaultsTarget: String,
      error: Boolean,
      id: String,
      inline: Boolean,
      falseIcon: Ae,
      trueIcon: Ae,
      ripple: { type: [Boolean, Object], default: !0 },
      multiple: { type: Boolean, default: null },
      name: String,
      readonly: { type: Boolean, default: null },
      modelValue: null,
      type: String,
      valueComparator: { type: Function, default: ra },
      ...ke(),
      ...Vt(),
      ...Ge(),
    },
    "SelectionControlGroup"
  ),
  e_ = K(
    { ...Fh({ defaultsTarget: "VSelectionControl" }) },
    "VSelectionControlGroup"
  );
fe()({
  name: "VSelectionControlGroup",
  props: e_(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const a = Ve(e, "modelValue"),
      r = Gt(),
      l = S(() => e.id || `v-selection-control-group-${r}`),
      o = S(() => e.name || l.value),
      i = new Set();
    return (
      We(Rh, {
        modelValue: a,
        forceUpdate: () => {
          i.forEach((s) => s());
        },
        onForceUpdate: (s) => {
          i.add(s),
            mt(() => {
              i.delete(s);
            });
        },
      }),
      Ft({
        [e.defaultsTarget]: {
          color: ne(e, "color"),
          disabled: ne(e, "disabled"),
          density: ne(e, "density"),
          error: ne(e, "error"),
          inline: ne(e, "inline"),
          modelValue: a,
          multiple: S(
            () => !!e.multiple || (e.multiple == null && Array.isArray(a.value))
          ),
          name: o,
          falseIcon: ne(e, "falseIcon"),
          trueIcon: ne(e, "trueIcon"),
          readonly: ne(e, "readonly"),
          ripple: ne(e, "ripple"),
          type: ne(e, "type"),
          valueComparator: ne(e, "valueComparator"),
        },
      }),
      be(() => {
        var s;
        return g(
          "div",
          {
            class: [
              "v-selection-control-group",
              { "v-selection-control-group--inline": e.inline },
              e.class,
            ],
            style: e.style,
            role: e.type === "radio" ? "radiogroup" : void 0,
          },
          [(s = n.default) == null ? void 0 : s.call(n)]
        );
      }),
      {}
    );
  },
});
const Nh = K(
  {
    label: String,
    baseColor: String,
    trueValue: null,
    falseValue: null,
    value: null,
    ...ke(),
    ...Fh(),
  },
  "VSelectionControl"
);
function t_(e) {
  const t = Ie(Rh, void 0),
    { densityClasses: n } = Yt(e),
    a = Ve(e, "modelValue"),
    r = S(() =>
      e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0
    ),
    l = S(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
    o = S(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
    i = S({
      get() {
        const v = t ? t.modelValue.value : a.value;
        return o.value
          ? ct(v).some((m) => e.valueComparator(m, r.value))
          : e.valueComparator(v, r.value);
      },
      set(v) {
        if (e.readonly) return;
        const m = v ? r.value : l.value;
        let h = m;
        o.value &&
          (h = v
            ? [...ct(a.value), m]
            : ct(a.value).filter((y) => !e.valueComparator(y, r.value))),
          t ? (t.modelValue.value = h) : (a.value = h);
      },
    }),
    { textColorClasses: s, textColorStyles: u } = Xt(
      S(() => {
        if (!(e.error || e.disabled)) return i.value ? e.color : e.baseColor;
      })
    ),
    { backgroundColorClasses: c, backgroundColorStyles: d } = It(
      S(() => (i.value && !e.error && !e.disabled ? e.color : e.baseColor))
    ),
    f = S(() => (i.value ? e.trueIcon : e.falseIcon));
  return {
    group: t,
    densityClasses: n,
    trueValue: r,
    falseValue: l,
    model: i,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: d,
    icon: f,
  };
}
const af = fe()({
    name: "VSelectionControl",
    directives: { Ripple: sl },
    inheritAttrs: !1,
    props: Nh(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const {
          group: r,
          densityClasses: l,
          icon: o,
          model: i,
          textColorClasses: s,
          textColorStyles: u,
          backgroundColorClasses: c,
          backgroundColorStyles: d,
          trueValue: f,
        } = t_(e),
        v = Gt(),
        m = he(!1),
        h = he(!1),
        y = W(),
        p = S(() => e.id || `input-${v}`),
        w = S(() => !e.disabled && !e.readonly);
      r == null ||
        r.onForceUpdate(() => {
          y.value && (y.value.checked = i.value);
        });
      function x(A) {
        w.value &&
          ((m.value = !0),
          Qa(A.target, ":focus-visible") !== !1 && (h.value = !0));
      }
      function E() {
        (m.value = !1), (h.value = !1);
      }
      function k(A) {
        A.stopPropagation();
      }
      function V(A) {
        if (!w.value) {
          y.value && (y.value.checked = i.value);
          return;
        }
        e.readonly && r && ze(() => r.forceUpdate()),
          (i.value = A.target.checked);
      }
      return (
        be(() => {
          var P, I;
          const A = a.label
              ? a.label({ label: e.label, props: { for: p.value } })
              : e.label,
            [b, C] = wo(n),
            D = g(
              "input",
              le(
                {
                  ref: y,
                  checked: i.value,
                  disabled: !!e.disabled,
                  id: p.value,
                  onBlur: E,
                  onFocus: x,
                  onInput: V,
                  "aria-disabled": !!e.disabled,
                  "aria-label": e.label,
                  type: e.type,
                  value: f.value,
                  name: e.name,
                  "aria-checked": e.type === "checkbox" ? i.value : void 0,
                },
                C
              ),
              null
            );
          return g(
            "div",
            le(
              {
                class: [
                  "v-selection-control",
                  {
                    "v-selection-control--dirty": i.value,
                    "v-selection-control--disabled": e.disabled,
                    "v-selection-control--error": e.error,
                    "v-selection-control--focused": m.value,
                    "v-selection-control--focus-visible": h.value,
                    "v-selection-control--inline": e.inline,
                  },
                  l.value,
                  e.class,
                ],
              },
              b,
              { style: e.style }
            ),
            [
              g(
                "div",
                {
                  class: ["v-selection-control__wrapper", s.value],
                  style: u.value,
                },
                [
                  (P = a.default) == null
                    ? void 0
                    : P.call(a, {
                        backgroundColorClasses: c,
                        backgroundColorStyles: d,
                      }),
                  ft(
                    g("div", { class: ["v-selection-control__input"] }, [
                      ((I = a.input) == null
                        ? void 0
                        : I.call(a, {
                            model: i,
                            textColorClasses: s,
                            textColorStyles: u,
                            backgroundColorClasses: c,
                            backgroundColorStyles: d,
                            inputNode: D,
                            icon: o.value,
                            props: { onFocus: x, onBlur: E, id: p.value },
                          })) ??
                        g(ye, null, [
                          o.value &&
                            g(De, { key: "icon", icon: o.value }, null),
                          D,
                        ]),
                    ]),
                    [
                      [
                        Ln("ripple"),
                        e.ripple && [
                          !e.disabled && !e.readonly,
                          null,
                          ["center", "circle"],
                        ],
                      ],
                    ]
                  ),
                ]
              ),
              A && g(Lh, { for: p.value, onClick: k }, { default: () => [A] }),
            ]
          );
        }),
        { isFocused: m, input: y }
      );
    },
  }),
  Hh = K(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: Ae, default: "$checkboxIndeterminate" },
      ...Nh({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }),
    },
    "VCheckboxBtn"
  ),
  _a = fe()({
    name: "VCheckboxBtn",
    props: Hh(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:indeterminate": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ve(e, "indeterminate"),
        r = Ve(e, "modelValue");
      function l(s) {
        a.value && (a.value = !1);
      }
      const o = S(() => (a.value ? e.indeterminateIcon : e.falseIcon)),
        i = S(() => (a.value ? e.indeterminateIcon : e.trueIcon));
      return (
        be(() => {
          const s = Zt(af.filterProps(e), ["modelValue"]);
          return g(
            af,
            le(s, {
              modelValue: r.value,
              "onUpdate:modelValue": [(u) => (r.value = u), l],
              class: ["v-checkbox-btn", e.class],
              style: e.style,
              type: "checkbox",
              falseIcon: o.value,
              trueIcon: i.value,
              "aria-checked": a.value ? "mixed" : void 0,
            }),
            n
          );
        }),
        {}
      );
    },
  });
function jh(e) {
  const { t } = un();
  function n(a) {
    let { name: r } = a;
    const l = {
        prepend: "prependAction",
        prependInner: "prependAction",
        append: "appendAction",
        appendInner: "appendAction",
        clear: "clear",
      }[r],
      o = e[`onClick:${r}`],
      i = o && l ? t(`$vuetify.input.${l}`, e.label ?? "") : void 0;
    return g(De, { icon: e[`${r}Icon`], "aria-label": i, onClick: o }, null);
  }
  return { InputIcon: n };
}
const n_ = K(
    {
      active: Boolean,
      color: String,
      messages: { type: [Array, String], default: () => [] },
      ...ke(),
      ...dr({ transition: { component: rh, leaveAbsolute: !0, group: !0 } }),
    },
    "VMessages"
  ),
  a_ = fe()({
    name: "VMessages",
    props: n_(),
    setup(e, t) {
      let { slots: n } = t;
      const a = S(() => ct(e.messages)),
        { textColorClasses: r, textColorStyles: l } = Xt(S(() => e.color));
      return (
        be(() =>
          g(
            An,
            {
              transition: e.transition,
              tag: "div",
              class: ["v-messages", r.value, e.class],
              style: [l.value, e.style],
              role: "alert",
              "aria-live": "polite",
            },
            {
              default: () => [
                e.active &&
                  a.value.map((o, i) =>
                    g(
                      "div",
                      { class: "v-messages__message", key: `${i}-${a.value}` },
                      [n.message ? n.message({ message: o }) : o]
                    )
                  ),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  zh = K({ focused: Boolean, "onUpdate:focused": dt() }, "focus");
function No(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
  const n = Ve(e, "focused"),
    a = S(() => ({ [`${t}--focused`]: n.value }));
  function r() {
    n.value = !0;
  }
  function l() {
    n.value = !1;
  }
  return { focusClasses: a, isFocused: n, focus: r, blur: l };
}
const Uh = Symbol.for("vuetify:form"),
  r_ = K(
    {
      disabled: Boolean,
      fastFail: Boolean,
      readonly: Boolean,
      modelValue: { type: Boolean, default: null },
      validateOn: { type: String, default: "input" },
    },
    "form"
  );
function l_(e) {
  const t = Ve(e, "modelValue"),
    n = S(() => e.disabled),
    a = S(() => e.readonly),
    r = he(!1),
    l = W([]),
    o = W([]);
  async function i() {
    const c = [];
    let d = !0;
    (o.value = []), (r.value = !0);
    for (const f of l.value) {
      const v = await f.validate();
      if (
        (v.length > 0 && ((d = !1), c.push({ id: f.id, errorMessages: v })),
        !d && e.fastFail)
      )
        break;
    }
    return (o.value = c), (r.value = !1), { valid: d, errors: o.value };
  }
  function s() {
    l.value.forEach((c) => c.reset());
  }
  function u() {
    l.value.forEach((c) => c.resetValidation());
  }
  return (
    ce(
      l,
      () => {
        let c = 0,
          d = 0;
        const f = [];
        for (const v of l.value)
          v.isValid === !1
            ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages }))
            : v.isValid === !0 && c++;
        (o.value = f),
          (t.value = d > 0 ? !1 : c === l.value.length ? !0 : null);
      },
      { deep: !0, flush: "post" }
    ),
    We(Uh, {
      register: (c) => {
        let { id: d, vm: f, validate: v, reset: m, resetValidation: h } = c;
        l.value.some((y) => y.id === d),
          l.value.push({
            id: d,
            validate: v,
            reset: m,
            resetValidation: h,
            vm: vo(f),
            isValid: null,
            errorMessages: [],
          });
      },
      unregister: (c) => {
        l.value = l.value.filter((d) => d.id !== c);
      },
      update: (c, d, f) => {
        const v = l.value.find((m) => m.id === c);
        v && ((v.isValid = d), (v.errorMessages = f));
      },
      isDisabled: n,
      isReadonly: a,
      isValidating: r,
      isValid: t,
      items: l,
      validateOn: ne(e, "validateOn"),
    }),
    {
      errors: o,
      isDisabled: n,
      isReadonly: a,
      isValidating: r,
      isValid: t,
      items: l,
      validate: i,
      reset: s,
      resetValidation: u,
    }
  );
}
function Cu(e) {
  const t = Ie(Uh, null);
  return {
    ...t,
    isReadonly: S(
      () =>
        !!(
          (e == null ? void 0 : e.readonly) ??
          (t == null ? void 0 : t.isReadonly.value)
        )
    ),
    isDisabled: S(
      () =>
        !!(
          (e == null ? void 0 : e.disabled) ??
          (t == null ? void 0 : t.isDisabled.value)
        )
    ),
  };
}
const o_ = K(
  {
    disabled: { type: Boolean, default: null },
    error: Boolean,
    errorMessages: { type: [Array, String], default: () => [] },
    maxErrors: { type: [Number, String], default: 1 },
    name: String,
    label: String,
    readonly: { type: Boolean, default: null },
    rules: { type: Array, default: () => [] },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...zh(),
  },
  "validation"
);
function i_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn(),
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt();
  const a = Ve(e, "modelValue"),
    r = S(() => (e.validationValue === void 0 ? a.value : e.validationValue)),
    l = Cu(e),
    o = W([]),
    i = he(!0),
    s = S(
      () =>
        !!(
          ct(a.value === "" ? null : a.value).length ||
          ct(r.value === "" ? null : r.value).length
        )
    ),
    u = S(() => {
      var x;
      return (x = e.errorMessages) != null && x.length
        ? ct(e.errorMessages)
            .concat(o.value)
            .slice(0, Math.max(0, +e.maxErrors))
        : o.value;
    }),
    c = S(() => {
      var k;
      let x =
        (e.validateOn ?? ((k = l.validateOn) == null ? void 0 : k.value)) ||
        "input";
      x === "lazy" && (x = "input lazy"), x === "eager" && (x = "input eager");
      const E = new Set((x == null ? void 0 : x.split(" ")) ?? []);
      return {
        input: E.has("input"),
        blur: E.has("blur") || E.has("input") || E.has("invalid-input"),
        invalidInput: E.has("invalid-input"),
        lazy: E.has("lazy"),
        eager: E.has("eager"),
      };
    }),
    d = S(() => {
      var x;
      return e.error || ((x = e.errorMessages) != null && x.length)
        ? !1
        : e.rules.length
        ? i.value
          ? o.value.length || c.value.lazy
            ? null
            : !0
          : !o.value.length
        : !0;
    }),
    f = he(!1),
    v = S(() => ({
      [`${t}--error`]: d.value === !1,
      [`${t}--dirty`]: s.value,
      [`${t}--disabled`]: l.isDisabled.value,
      [`${t}--readonly`]: l.isReadonly.value,
    })),
    m = Ze("validation"),
    h = S(() => e.name ?? Se(n));
  Qr(() => {
    var x;
    (x = l.register) == null ||
      x.call(l, {
        id: h.value,
        vm: m,
        validate: w,
        reset: y,
        resetValidation: p,
      });
  }),
    rt(() => {
      var x;
      (x = l.unregister) == null || x.call(l, h.value);
    }),
    Wt(async () => {
      var x;
      c.value.lazy || (await w(!c.value.eager)),
        (x = l.update) == null || x.call(l, h.value, d.value, u.value);
    }),
    Mt(
      () => c.value.input || (c.value.invalidInput && d.value === !1),
      () => {
        ce(r, () => {
          if (r.value != null) w();
          else if (e.focused) {
            const x = ce(
              () => e.focused,
              (E) => {
                E || w(), x();
              }
            );
          }
        });
      }
    ),
    Mt(
      () => c.value.blur,
      () => {
        ce(
          () => e.focused,
          (x) => {
            x || w();
          }
        );
      }
    ),
    ce([d, u], () => {
      var x;
      (x = l.update) == null || x.call(l, h.value, d.value, u.value);
    });
  async function y() {
    (a.value = null), await ze(), await p();
  }
  async function p() {
    (i.value = !0), c.value.lazy ? (o.value = []) : await w(!c.value.eager);
  }
  async function w() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const E = [];
    f.value = !0;
    for (const k of e.rules) {
      if (E.length >= +(e.maxErrors ?? 1)) break;
      const A = await (typeof k == "function" ? k : () => k)(r.value);
      if (A !== !0) {
        if (A !== !1 && typeof A != "string") {
          console.warn(
            `${A} is not a valid value. Rule functions must return boolean true or a string.`
          );
          continue;
        }
        E.push(A || "");
      }
    }
    return (o.value = E), (f.value = !1), (i.value = x), o.value;
  }
  return {
    errorMessages: u,
    isDirty: s,
    isDisabled: l.isDisabled,
    isReadonly: l.isReadonly,
    isPristine: i,
    isValid: d,
    isValidating: f,
    reset: y,
    resetValidation: p,
    validate: w,
    validationClasses: v,
  };
}
const Ho = K(
    {
      id: String,
      appendIcon: Ae,
      centerAffix: { type: Boolean, default: !0 },
      prependIcon: Ae,
      hideDetails: [Boolean, String],
      hideSpinButtons: Boolean,
      hint: String,
      persistentHint: Boolean,
      messages: { type: [Array, String], default: () => [] },
      direction: {
        type: String,
        default: "horizontal",
        validator: (e) => ["horizontal", "vertical"].includes(e),
      },
      "onClick:prepend": dt(),
      "onClick:append": dt(),
      ...ke(),
      ...Vt(),
      ...Mp(Qt(), ["maxWidth", "minWidth", "width"]),
      ...Ge(),
      ...o_(),
    },
    "VInput"
  ),
  lr = fe()({
    name: "VInput",
    props: { ...Ho() },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: r } = t;
      const { densityClasses: l } = Yt(e),
        { dimensionStyles: o } = en(e),
        { themeClasses: i } = Qe(e),
        { rtlClasses: s } = Nt(),
        { InputIcon: u } = jh(e),
        c = Gt(),
        d = S(() => e.id || `input-${c}`),
        f = S(() => `${d.value}-messages`),
        {
          errorMessages: v,
          isDirty: m,
          isDisabled: h,
          isReadonly: y,
          isPristine: p,
          isValid: w,
          isValidating: x,
          reset: E,
          resetValidation: k,
          validate: V,
          validationClasses: A,
        } = i_(e, "v-input", d),
        b = S(() => ({
          id: d,
          messagesId: f,
          isDirty: m,
          isDisabled: h,
          isReadonly: y,
          isPristine: p,
          isValid: w,
          isValidating: x,
          reset: E,
          resetValidation: k,
          validate: V,
        })),
        C = S(() => {
          var D;
          return ((D = e.errorMessages) != null && D.length) ||
            (!p.value && v.value.length)
            ? v.value
            : e.hint && (e.persistentHint || e.focused)
            ? e.hint
            : e.messages;
        });
      return (
        be(() => {
          var M, N, B, j;
          const D = !!(a.prepend || e.prependIcon),
            P = !!(a.append || e.appendIcon),
            I = C.value.length > 0,
            $ =
              !e.hideDetails ||
              (e.hideDetails === "auto" && (I || !!a.details));
          return g(
            "div",
            {
              class: [
                "v-input",
                `v-input--${e.direction}`,
                {
                  "v-input--center-affix": e.centerAffix,
                  "v-input--hide-spin-buttons": e.hideSpinButtons,
                },
                l.value,
                i.value,
                s.value,
                A.value,
                e.class,
              ],
              style: [o.value, e.style],
            },
            [
              D &&
                g("div", { key: "prepend", class: "v-input__prepend" }, [
                  (M = a.prepend) == null ? void 0 : M.call(a, b.value),
                  e.prependIcon &&
                    g(u, { key: "prepend-icon", name: "prepend" }, null),
                ]),
              a.default &&
                g("div", { class: "v-input__control" }, [
                  (N = a.default) == null ? void 0 : N.call(a, b.value),
                ]),
              P &&
                g("div", { key: "append", class: "v-input__append" }, [
                  e.appendIcon &&
                    g(u, { key: "append-icon", name: "append" }, null),
                  (B = a.append) == null ? void 0 : B.call(a, b.value),
                ]),
              $ &&
                g("div", { class: "v-input__details" }, [
                  g(
                    a_,
                    { id: f.value, active: I, messages: C.value },
                    { message: a.message }
                  ),
                  (j = a.details) == null ? void 0 : j.call(a, b.value),
                ]),
            ]
          );
        }),
        {
          reset: E,
          resetValidation: k,
          validate: V,
          isValid: w,
          errorMessages: v,
        }
      );
    },
  }),
  s_ = K({ ...Ho(), ...Zt(Hh(), ["inline"]) }, "VCheckbox"),
  u_ = fe()({
    name: "VCheckbox",
    inheritAttrs: !1,
    props: s_(),
    emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const r = Ve(e, "modelValue"),
        { isFocused: l, focus: o, blur: i } = No(e),
        s = Gt(),
        u = S(() => e.id || `checkbox-${s}`);
      return (
        be(() => {
          const [c, d] = wo(n),
            f = lr.filterProps(e),
            v = _a.filterProps(e);
          return g(
            lr,
            le({ class: ["v-checkbox", e.class] }, c, f, {
              modelValue: r.value,
              "onUpdate:modelValue": (m) => (r.value = m),
              id: u.value,
              focused: l.value,
              style: e.style,
            }),
            {
              ...a,
              default: (m) => {
                let {
                  id: h,
                  messagesId: y,
                  isDisabled: p,
                  isReadonly: w,
                  isValid: x,
                } = m;
                return g(
                  _a,
                  le(
                    v,
                    {
                      id: h.value,
                      "aria-describedby": y.value,
                      disabled: p.value,
                      readonly: w.value,
                    },
                    d,
                    {
                      error: x.value === !1,
                      modelValue: r.value,
                      "onUpdate:modelValue": (E) => (r.value = E),
                      onFocus: o,
                      onBlur: i,
                    }
                  ),
                  a
                );
              },
            }
          );
        }),
        {}
      );
    },
  });
function ki(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function c_(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function rf(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e,
      r =
        a === "left"
          ? 0
          : a === "center"
          ? t.width / 2
          : a === "right"
          ? t.width
          : a,
      l = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return ki({ x: r, y: l }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e,
      r = n === "left" ? 0 : n === "right" ? t.width : n,
      l =
        a === "top"
          ? 0
          : a === "center"
          ? t.height / 2
          : a === "bottom"
          ? t.height
          : a;
    return ki({ x: r, y: l }, t);
  }
  return ki({ x: t.width / 2, y: t.height / 2 }, t);
}
const Wh = { static: v_, connected: h_ },
  d_ = K(
    {
      locationStrategy: {
        type: [String, Function],
        default: "static",
        validator: (e) => typeof e == "function" || e in Wh,
      },
      location: { type: String, default: "bottom" },
      origin: { type: String, default: "auto" },
      offset: [Number, String, Array],
    },
    "VOverlay-location-strategies"
  );
function f_(e, t) {
  const n = W({}),
    a = W();
  Me &&
    Mt(
      () => !!(t.isActive.value && e.locationStrategy),
      (l) => {
        var o, i;
        ce(() => e.locationStrategy, l),
          mt(() => {
            window.removeEventListener("resize", r), (a.value = void 0);
          }),
          window.addEventListener("resize", r, { passive: !0 }),
          typeof e.locationStrategy == "function"
            ? (a.value =
                (o = e.locationStrategy(t, e, n)) == null
                  ? void 0
                  : o.updateLocation)
            : (a.value =
                (i = Wh[e.locationStrategy](t, e, n)) == null
                  ? void 0
                  : i.updateLocation);
      }
    );
  function r(l) {
    var o;
    (o = a.value) == null || o.call(a, l);
  }
  return { contentStyles: n, updateLocation: a };
}
function v_() {}
function m_(e, t) {
  const n = au(e);
  return (
    t
      ? (n.x += parseFloat(e.style.right || 0))
      : (n.x -= parseFloat(e.style.left || 0)),
    (n.y -= parseFloat(e.style.top || 0)),
    n
  );
}
function h_(e, t, n) {
  (Array.isArray(e.target.value) || C0(e.target.value)) &&
    Object.assign(n.value, {
      position: "fixed",
      top: 0,
      [e.isRtl.value ? "right" : "left"]: 0,
    });
  const { preferredAnchor: r, preferredOrigin: l } = tu(() => {
      const m = Yi(t.location, e.isRtl.value),
        h =
          t.origin === "overlap"
            ? m
            : t.origin === "auto"
            ? si(m)
            : Yi(t.origin, e.isRtl.value);
      return m.side === h.side && m.align === ui(h).align
        ? { preferredAnchor: $c(m), preferredOrigin: $c(h) }
        : { preferredAnchor: m, preferredOrigin: h };
    }),
    [o, i, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) =>
      S(() => {
        const h = parseFloat(t[m]);
        return isNaN(h) ? 1 / 0 : h;
      })
    ),
    c = S(() => {
      if (Array.isArray(t.offset)) return t.offset;
      if (typeof t.offset == "string") {
        const m = t.offset.split(" ").map(parseFloat);
        return m.length < 2 && m.push(0), m;
      }
      return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
    });
  let d = !1;
  const f = new ResizeObserver(() => {
    d && v();
  });
  ce(
    [e.target, e.contentEl],
    (m, h) => {
      let [y, p] = m,
        [w, x] = h;
      w && !Array.isArray(w) && f.unobserve(w),
        y && !Array.isArray(y) && f.observe(y),
        x && f.unobserve(x),
        p && f.observe(p);
    },
    { immediate: !0 }
  ),
    mt(() => {
      f.disconnect();
    });
  function v() {
    if (
      ((d = !1),
      requestAnimationFrame(() => (d = !0)),
      !e.target.value || !e.contentEl.value)
    )
      return;
    const m = Qv(e.target.value),
      h = m_(e.contentEl.value, e.isRtl.value),
      y = Ul(e.contentEl.value),
      p = 12;
    y.length ||
      (y.push(document.documentElement),
      (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
        ((h.x -= parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-x"
          ) || 0
        )),
        (h.y -= parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-y"
          ) || 0
        ))));
    const w = y.reduce((P, I) => {
      const $ = I.getBoundingClientRect(),
        M = new ga({
          x: I === document.documentElement ? 0 : $.x,
          y: I === document.documentElement ? 0 : $.y,
          width: I.clientWidth,
          height: I.clientHeight,
        });
      return P
        ? new ga({
            x: Math.max(P.left, M.left),
            y: Math.max(P.top, M.top),
            width: Math.min(P.right, M.right) - Math.max(P.left, M.left),
            height: Math.min(P.bottom, M.bottom) - Math.max(P.top, M.top),
          })
        : M;
    }, void 0);
    (w.x += p), (w.y += p), (w.width -= p * 2), (w.height -= p * 2);
    let x = { anchor: r.value, origin: l.value };
    function E(P) {
      const I = new ga(h),
        $ = rf(P.anchor, m),
        M = rf(P.origin, I);
      let { x: N, y: B } = c_($, M);
      switch (P.anchor.side) {
        case "top":
          B -= c.value[0];
          break;
        case "bottom":
          B += c.value[0];
          break;
        case "left":
          N -= c.value[0];
          break;
        case "right":
          N += c.value[0];
          break;
      }
      switch (P.anchor.align) {
        case "top":
          B -= c.value[1];
          break;
        case "bottom":
          B += c.value[1];
          break;
        case "left":
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
          break;
      }
      return (
        (I.x += N),
        (I.y += B),
        (I.width = Math.min(I.width, s.value)),
        (I.height = Math.min(I.height, u.value)),
        { overflows: Bc(I, w), x: N, y: B }
      );
    }
    let k = 0,
      V = 0;
    const A = { x: 0, y: 0 },
      b = { x: !1, y: !1 };
    let C = -1;
    for (; !(C++ > 10); ) {
      const { x: P, y: I, overflows: $ } = E(x);
      (k += P), (V += I), (h.x += P), (h.y += I);
      {
        const M = Mc(x.anchor),
          N = $.x.before || $.x.after,
          B = $.y.before || $.y.after;
        let j = !1;
        if (
          (["x", "y"].forEach((H) => {
            if ((H === "x" && N && !b.x) || (H === "y" && B && !b.y)) {
              const z = { anchor: { ...x.anchor }, origin: { ...x.origin } },
                O = H === "x" ? (M === "y" ? ui : si) : M === "y" ? si : ui;
              (z.anchor = O(z.anchor)), (z.origin = O(z.origin));
              const { overflows: L } = E(z);
              ((L[H].before <= $[H].before && L[H].after <= $[H].after) ||
                L[H].before + L[H].after < ($[H].before + $[H].after) / 2) &&
                ((x = z), (j = b[H] = !0));
            }
          }),
          j)
        )
          continue;
      }
      $.x.before && ((k += $.x.before), (h.x += $.x.before)),
        $.x.after && ((k -= $.x.after), (h.x -= $.x.after)),
        $.y.before && ((V += $.y.before), (h.y += $.y.before)),
        $.y.after && ((V -= $.y.after), (h.y -= $.y.after));
      {
        const M = Bc(h, w);
        (A.x = w.width - M.x.before - M.x.after),
          (A.y = w.height - M.y.before - M.y.after),
          (k += M.x.before),
          (h.x += M.x.before),
          (V += M.y.before),
          (h.y += M.y.before);
      }
      break;
    }
    const D = Mc(x.anchor);
    return (
      Object.assign(n.value, {
        "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`,
        transformOrigin: `${x.origin.side} ${x.origin.align}`,
        top: pe(Ei(V)),
        left: e.isRtl.value ? void 0 : pe(Ei(k)),
        right: e.isRtl.value ? pe(Ei(-k)) : void 0,
        minWidth: pe(D === "y" ? Math.min(o.value, m.width) : o.value),
        maxWidth: pe(lf(Bt(A.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
        maxHeight: pe(lf(Bt(A.y, i.value === 1 / 0 ? 0 : i.value, u.value))),
      }),
      { available: A, contentBox: h }
    );
  }
  return (
    ce(
      () => [
        r.value,
        l.value,
        t.offset,
        t.minWidth,
        t.minHeight,
        t.maxWidth,
        t.maxHeight,
      ],
      () => v()
    ),
    ze(() => {
      const m = v();
      if (!m) return;
      const { available: h, contentBox: y } = m;
      y.height > h.y &&
        requestAnimationFrame(() => {
          v(),
            requestAnimationFrame(() => {
              v();
            });
        });
    }),
    { updateLocation: v }
  );
}
function Ei(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function lf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let bs = !0;
const Ql = [];
function g_(e) {
  !bs || Ql.length ? (Ql.push(e), ps()) : ((bs = !1), e(), ps());
}
let of = -1;
function ps() {
  cancelAnimationFrame(of),
    (of = requestAnimationFrame(() => {
      const e = Ql.shift();
      e && e(), Ql.length ? ps() : (bs = !0);
    }));
}
const Dl = { none: null, close: p_, block: S_, reposition: w_ },
  y_ = K(
    {
      scrollStrategy: {
        type: [String, Function],
        default: "block",
        validator: (e) => typeof e == "function" || e in Dl,
      },
    },
    "VOverlay-scroll-strategies"
  );
function b_(e, t) {
  if (!Me) return;
  let n;
  vt(async () => {
    n == null || n.stop(),
      t.isActive.value &&
        e.scrollStrategy &&
        ((n = Jr()),
        await new Promise((a) => setTimeout(a)),
        n.active &&
          n.run(() => {
            var a;
            typeof e.scrollStrategy == "function"
              ? e.scrollStrategy(t, e, n)
              : (a = Dl[e.scrollStrategy]) == null || a.call(Dl, t, e, n);
          }));
  }),
    mt(() => {
      n == null || n.stop();
    });
}
function p_(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Gh(e.targetEl.value ?? e.contentEl.value, t);
}
function S_(e, t) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent,
    a = [
      ...new Set([
        ...Ul(e.targetEl.value, t.contained ? n : void 0),
        ...Ul(e.contentEl.value, t.contained ? n : void 0),
      ]),
    ].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")),
    r = window.innerWidth - document.documentElement.offsetWidth,
    l = ((i) => ou(i) && i)(n || document.documentElement);
  l && e.root.value.classList.add("v-overlay--scroll-blocked"),
    a.forEach((i, s) => {
      i.style.setProperty("--v-body-scroll-x", pe(-i.scrollLeft)),
        i.style.setProperty("--v-body-scroll-y", pe(-i.scrollTop)),
        i !== document.documentElement &&
          i.style.setProperty("--v-scrollbar-offset", pe(r)),
        i.classList.add("v-overlay-scroll-blocked");
    }),
    mt(() => {
      a.forEach((i, s) => {
        const u = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),
          c = parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),
          d = i.style.scrollBehavior;
        (i.style.scrollBehavior = "auto"),
          i.style.removeProperty("--v-body-scroll-x"),
          i.style.removeProperty("--v-body-scroll-y"),
          i.style.removeProperty("--v-scrollbar-offset"),
          i.classList.remove("v-overlay-scroll-blocked"),
          (i.scrollLeft = -u),
          (i.scrollTop = -c),
          (i.style.scrollBehavior = d);
      }),
        l && e.root.value.classList.remove("v-overlay--scroll-blocked");
    });
}
function w_(e, t, n) {
  let a = !1,
    r = -1,
    l = -1;
  function o(i) {
    g_(() => {
      var c, d;
      const s = performance.now();
      (d = (c = e.updateLocation).value) == null || d.call(c, i),
        (a = (performance.now() - s) / (1e3 / 60) > 2);
    });
  }
  (l = (typeof requestIdleCallback > "u" ? (i) => i() : requestIdleCallback)(
    () => {
      n.run(() => {
        Gh(e.targetEl.value ?? e.contentEl.value, (i) => {
          a
            ? (cancelAnimationFrame(r),
              (r = requestAnimationFrame(() => {
                r = requestAnimationFrame(() => {
                  o(i);
                });
              })))
            : o(i);
        });
      });
    }
  )),
    mt(() => {
      typeof cancelIdleCallback < "u" && cancelIdleCallback(l),
        cancelAnimationFrame(r);
    });
}
function Gh(e, t) {
  const n = [document, ...Ul(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: !0 });
  }),
    mt(() => {
      n.forEach((a) => {
        a.removeEventListener("scroll", t);
      });
    });
}
const Ss = Symbol.for("vuetify:v-menu"),
  Kh = K(
    { closeDelay: [Number, String], openDelay: [Number, String] },
    "delay"
  );
function Yh(e, t) {
  let n = () => {};
  function a(o) {
    n == null || n();
    const i = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = Hp(i, () => {
        t == null || t(o), s(o);
      });
    });
  }
  function r() {
    return a(!0);
  }
  function l() {
    return a(!1);
  }
  return { clearDelay: n, runOpenDelay: r, runCloseDelay: l };
}
const C_ = K(
  {
    target: [String, Object],
    activator: [String, Object],
    activatorProps: { type: Object, default: () => ({}) },
    openOnClick: { type: Boolean, default: void 0 },
    openOnHover: Boolean,
    openOnFocus: { type: Boolean, default: void 0 },
    closeOnContentClick: Boolean,
    ...Kh(),
  },
  "VOverlay-activator"
);
function x_(e, t) {
  let { isActive: n, isTop: a, contentEl: r } = t;
  const l = Ze("useActivator"),
    o = W();
  let i = !1,
    s = !1,
    u = !0;
  const c = S(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
    d = S(
      () =>
        e.openOnClick || (e.openOnClick == null && !e.openOnHover && !c.value)
    ),
    { runOpenDelay: f, runCloseDelay: v } = Yh(e, (b) => {
      b === ((e.openOnHover && i) || (c.value && s)) &&
        !(e.openOnHover && n.value && !a.value) &&
        (n.value !== b && (u = !0), (n.value = b));
    }),
    m = W(),
    h = {
      onClick: (b) => {
        b.stopPropagation(),
          (o.value = b.currentTarget || b.target),
          n.value || (m.value = [b.clientX, b.clientY]),
          (n.value = !n.value);
      },
      onMouseenter: (b) => {
        var C;
        ((C = b.sourceCapabilities) != null && C.firesTouchEvents) ||
          ((i = !0), (o.value = b.currentTarget || b.target), f());
      },
      onMouseleave: (b) => {
        (i = !1), v();
      },
      onFocus: (b) => {
        Qa(b.target, ":focus-visible") !== !1 &&
          ((s = !0),
          b.stopPropagation(),
          (o.value = b.currentTarget || b.target),
          f());
      },
      onBlur: (b) => {
        (s = !1), b.stopPropagation(), v();
      },
    },
    y = S(() => {
      const b = {};
      return (
        d.value && (b.onClick = h.onClick),
        e.openOnHover &&
          ((b.onMouseenter = h.onMouseenter),
          (b.onMouseleave = h.onMouseleave)),
        c.value && ((b.onFocus = h.onFocus), (b.onBlur = h.onBlur)),
        b
      );
    }),
    p = S(() => {
      const b = {};
      if (
        (e.openOnHover &&
          ((b.onMouseenter = () => {
            (i = !0), f();
          }),
          (b.onMouseleave = () => {
            (i = !1), v();
          })),
        c.value &&
          ((b.onFocusin = () => {
            (s = !0), f();
          }),
          (b.onFocusout = () => {
            (s = !1), v();
          })),
        e.closeOnContentClick)
      ) {
        const C = Ie(Ss, null);
        b.onClick = () => {
          (n.value = !1), C == null || C.closeParents();
        };
      }
      return b;
    }),
    w = S(() => {
      const b = {};
      return (
        e.openOnHover &&
          ((b.onMouseenter = () => {
            u && ((i = !0), (u = !1), f());
          }),
          (b.onMouseleave = () => {
            (i = !1), v();
          })),
        b
      );
    });
  ce(a, (b) => {
    var C;
    b &&
      ((e.openOnHover && !i && (!c.value || !s)) ||
        (c.value && !s && (!e.openOnHover || !i))) &&
      !((C = r.value) != null && C.contains(document.activeElement)) &&
      (n.value = !1);
  }),
    ce(
      n,
      (b) => {
        b ||
          setTimeout(() => {
            m.value = void 0;
          });
      },
      { flush: "post" }
    );
  const x = Gi();
  vt(() => {
    x.value &&
      ze(() => {
        o.value = x.el;
      });
  });
  const E = Gi(),
    k = S(() =>
      e.target === "cursor" && m.value
        ? m.value
        : E.value
        ? E.el
        : qh(e.target, l) || o.value
    ),
    V = S(() => (Array.isArray(k.value) ? void 0 : k.value));
  let A;
  return (
    ce(
      () => !!e.activator,
      (b) => {
        b && Me
          ? ((A = Jr()),
            A.run(() => {
              __(e, l, { activatorEl: o, activatorEvents: y });
            }))
          : A && A.stop();
      },
      { flush: "post", immediate: !0 }
    ),
    mt(() => {
      A == null || A.stop();
    }),
    {
      activatorEl: o,
      activatorRef: x,
      target: k,
      targetEl: V,
      targetRef: E,
      activatorEvents: y,
      contentEvents: p,
      scrimEvents: w,
    }
  );
}
function __(e, t, n) {
  let { activatorEl: a, activatorEvents: r } = n;
  ce(
    () => e.activator,
    (s, u) => {
      if (u && s !== u) {
        const c = i(u);
        c && o(c);
      }
      s && ze(() => l());
    },
    { immediate: !0 }
  ),
    ce(
      () => e.activatorProps,
      () => {
        l();
      }
    ),
    mt(() => {
      o();
    });
  function l() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(),
      u =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    s && Up(s, le(r.value, u));
  }
  function o() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(),
      u =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    s && Wp(s, le(r.value, u));
  }
  function i() {
    let s =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : e.activator;
    const u = qh(s, t);
    return (
      (a.value =
        (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0),
      a.value
    );
  }
}
function qh(e, t) {
  var a, r;
  if (!e) return;
  let n;
  if (e === "parent") {
    let l =
      (r = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null
        ? void 0
        : r.parentNode;
    for (; l != null && l.hasAttribute("data-no-activator"); ) l = l.parentNode;
    n = l;
  } else
    typeof e == "string"
      ? (n = document.querySelector(e))
      : "$el" in e
      ? (n = e.$el)
      : (n = e);
  return n;
}
function k_() {
  if (!Me) return he(!1);
  const { ssr: e } = Rn();
  if (e) {
    const t = he(!1);
    return (
      Wt(() => {
        t.value = !0;
      }),
      t
    );
  } else return he(!0);
}
const sf = Symbol.for("vuetify:stack"),
  pr = lt([]);
function E_(e, t, n) {
  const a = Ze("useStack"),
    r = !n,
    l = Ie(sf, void 0),
    o = lt({ activeChildren: new Set() });
  We(sf, o);
  const i = he(+t.value);
  Mt(e, () => {
    var d;
    const c = (d = pr.at(-1)) == null ? void 0 : d[1];
    (i.value = c ? c + 10 : +t.value),
      r && pr.push([a.uid, i.value]),
      l == null || l.activeChildren.add(a.uid),
      mt(() => {
        if (r) {
          const f = xe(pr).findIndex((v) => v[0] === a.uid);
          pr.splice(f, 1);
        }
        l == null || l.activeChildren.delete(a.uid);
      });
  });
  const s = he(!0);
  r &&
    vt(() => {
      var d;
      const c = ((d = pr.at(-1)) == null ? void 0 : d[0]) === a.uid;
      setTimeout(() => (s.value = c));
    });
  const u = S(() => !o.activeChildren.size);
  return {
    globalTop: Dt(s),
    localTop: u,
    stackStyles: S(() => ({ zIndex: i.value })),
  };
}
function P_(e) {
  return {
    teleportTarget: S(() => {
      const n = e();
      if (n === !0 || !Me) return;
      const a =
        n === !1
          ? document.body
          : typeof n == "string"
          ? document.querySelector(n)
          : n;
      if (a == null) return;
      let r = [...a.children].find((l) => l.matches(".v-overlay-container"));
      return (
        r ||
          ((r = document.createElement("div")),
          (r.className = "v-overlay-container"),
          a.appendChild(r)),
        r
      );
    }),
  };
}
function T_() {
  return !0;
}
function Jh(e, t, n) {
  if (!e || Xh(e, n) === !1) return !1;
  const a = om(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
    return !1;
  const r = ((typeof n.value == "object" && n.value.include) || (() => []))();
  return r.push(t), !r.some((l) => (l == null ? void 0 : l.contains(e.target)));
}
function Xh(e, t) {
  return ((typeof t.value == "object" && t.value.closeConditional) || T_)(e);
}
function A_(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  (e.shadowTarget = e.target),
    t._clickOutside.lastMousedownWasOutside &&
      Jh(e, t, n) &&
      setTimeout(() => {
        Xh(e, n) && a && a(e);
      }, 0);
}
function uf(e, t) {
  const n = om(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const I_ = {
  mounted(e, t) {
    const n = (r) => A_(r, e, t),
      a = (r) => {
        e._clickOutside.lastMousedownWasOutside = Jh(r, e, t);
      };
    uf(e, (r) => {
      r.addEventListener("click", n, !0),
        r.addEventListener("mousedown", a, !0);
    }),
      e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }),
      (e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a });
  },
  beforeUnmount(e, t) {
    e._clickOutside &&
      (uf(e, (n) => {
        var l;
        if (!n || !((l = e._clickOutside) != null && l[t.instance.$.uid]))
          return;
        const { onClick: a, onMousedown: r } =
          e._clickOutside[t.instance.$.uid];
        n.removeEventListener("click", a, !0),
          n.removeEventListener("mousedown", r, !0);
      }),
      delete e._clickOutside[t.instance.$.uid]);
  },
};
function V_(e) {
  const { modelValue: t, color: n, ...a } = e;
  return g(
    Jn,
    { name: "fade-transition", appear: !0 },
    {
      default: () => [
        e.modelValue &&
          g(
            "div",
            le(
              {
                class: [
                  "v-overlay__scrim",
                  e.color.backgroundColorClasses.value,
                ],
                style: e.color.backgroundColorStyles.value,
              },
              a
            ),
            null
          ),
      ],
    }
  );
}
const cl = K(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      opacity: [Number, String],
      noClickAnimation: Boolean,
      modelValue: Boolean,
      persistent: Boolean,
      scrim: { type: [Boolean, String], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...C_(),
      ...ke(),
      ...Qt(),
      ...Vh(),
      ...d_(),
      ...y_(),
      ...Ge(),
      ...dr(),
    },
    "VOverlay"
  ),
  Qn = fe()({
    name: "VOverlay",
    directives: { ClickOutside: I_ },
    inheritAttrs: !1,
    props: { _disableGlobalStack: Boolean, ...cl() },
    emits: {
      "click:outside": (e) => !0,
      "update:modelValue": (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(e, t) {
      let { slots: n, attrs: a, emit: r } = t;
      const l = Ze("VOverlay"),
        o = W(),
        i = W(),
        s = W(),
        u = Ve(e, "modelValue"),
        c = S({
          get: () => u.value,
          set: (re) => {
            (re && e.disabled) || (u.value = re);
          },
        }),
        { themeClasses: d } = Qe(e),
        { rtlClasses: f, isRtl: v } = Nt(),
        { hasContent: m, onAfterLeave: h } = Dh(e, c),
        y = It(S(() => (typeof e.scrim == "string" ? e.scrim : null))),
        {
          globalTop: p,
          localTop: w,
          stackStyles: x,
        } = E_(c, ne(e, "zIndex"), e._disableGlobalStack),
        {
          activatorEl: E,
          activatorRef: k,
          target: V,
          targetEl: A,
          targetRef: b,
          activatorEvents: C,
          contentEvents: D,
          scrimEvents: P,
        } = x_(e, { isActive: c, isTop: w, contentEl: s }),
        { teleportTarget: I } = P_(() => {
          var Z, ee, Q;
          const re = e.attach || e.contained;
          if (re) return re;
          const F =
            ((Z = E == null ? void 0 : E.value) == null
              ? void 0
              : Z.getRootNode()) ||
            ((Q = (ee = l.proxy) == null ? void 0 : ee.$el) == null
              ? void 0
              : Q.getRootNode());
          return F instanceof ShadowRoot ? F : !1;
        }),
        { dimensionStyles: $ } = en(e),
        M = k_(),
        { scopeId: N } = Oa();
      ce(
        () => e.disabled,
        (re) => {
          re && (c.value = !1);
        }
      );
      const { contentStyles: B, updateLocation: j } = f_(e, {
        isRtl: v,
        contentEl: s,
        target: V,
        isActive: c,
      });
      b_(e, {
        root: o,
        contentEl: s,
        targetEl: A,
        isActive: c,
        updateLocation: j,
      });
      function H(re) {
        r("click:outside", re), e.persistent ? oe() : (c.value = !1);
      }
      function z(re) {
        return (
          c.value &&
          p.value &&
          (!e.scrim ||
            re.target === i.value ||
            (re instanceof MouseEvent && re.shadowTarget === i.value))
        );
      }
      Me &&
        ce(
          c,
          (re) => {
            re
              ? window.addEventListener("keydown", O)
              : window.removeEventListener("keydown", O);
          },
          { immediate: !0 }
        ),
        rt(() => {
          Me && window.removeEventListener("keydown", O);
        });
      function O(re) {
        var F, Z;
        re.key === "Escape" &&
          p.value &&
          (e.persistent
            ? oe()
            : ((c.value = !1),
              (F = s.value) != null &&
                F.contains(document.activeElement) &&
                ((Z = E.value) == null || Z.focus())));
      }
      const L = gh();
      Mt(
        () => e.closeOnBack,
        () => {
          C1(L, (re) => {
            p.value && c.value
              ? (re(!1), e.persistent ? oe() : (c.value = !1))
              : re();
          });
        }
      );
      const G = W();
      ce(
        () => c.value && (e.absolute || e.contained) && I.value == null,
        (re) => {
          if (re) {
            const F = im(o.value);
            F && F !== document.scrollingElement && (G.value = F.scrollTop);
          }
        }
      );
      function oe() {
        e.noClickAnimation ||
          (s.value &&
            fa(
              s.value,
              [
                { transformOrigin: "center" },
                { transform: "scale(1.03)" },
                { transformOrigin: "center" },
              ],
              { duration: 150, easing: Fr }
            ));
      }
      function X() {
        r("afterEnter");
      }
      function ve() {
        h(), r("afterLeave");
      }
      return (
        be(() => {
          var re;
          return g(ye, null, [
            (re = n.activator) == null
              ? void 0
              : re.call(n, {
                  isActive: c.value,
                  targetRef: b,
                  props: le({ ref: k }, C.value, e.activatorProps),
                }),
            M.value &&
              m.value &&
              g(
                qy,
                { disabled: !I.value, to: I.value },
                {
                  default: () => [
                    g(
                      "div",
                      le(
                        {
                          class: [
                            "v-overlay",
                            {
                              "v-overlay--absolute": e.absolute || e.contained,
                              "v-overlay--active": c.value,
                              "v-overlay--contained": e.contained,
                            },
                            d.value,
                            f.value,
                            e.class,
                          ],
                          style: [
                            x.value,
                            {
                              "--v-overlay-opacity": e.opacity,
                              top: pe(G.value),
                            },
                            e.style,
                          ],
                          ref: o,
                        },
                        N,
                        a
                      ),
                      [
                        g(
                          V_,
                          le(
                            {
                              color: y,
                              modelValue: c.value && !!e.scrim,
                              ref: i,
                            },
                            P.value
                          ),
                          null
                        ),
                        g(
                          An,
                          {
                            appear: !0,
                            persisted: !0,
                            transition: e.transition,
                            target: V.value,
                            onAfterEnter: X,
                            onAfterLeave: ve,
                          },
                          {
                            default: () => {
                              var F;
                              return [
                                ft(
                                  g(
                                    "div",
                                    le(
                                      {
                                        ref: s,
                                        class: [
                                          "v-overlay__content",
                                          e.contentClass,
                                        ],
                                        style: [$.value, B.value],
                                      },
                                      D.value,
                                      e.contentProps
                                    ),
                                    [
                                      (F = n.default) == null
                                        ? void 0
                                        : F.call(n, { isActive: c }),
                                    ]
                                  ),
                                  [
                                    [Aa, c.value],
                                    [
                                      Ln("click-outside"),
                                      {
                                        handler: H,
                                        closeConditional: z,
                                        include: () => [E.value],
                                      },
                                    ],
                                  ]
                                ),
                              ];
                            },
                          }
                        ),
                      ]
                    ),
                  ],
                }
              ),
          ]);
        }),
        {
          activatorEl: E,
          scrimEl: i,
          target: V,
          animateClick: oe,
          contentEl: s,
          globalTop: p,
          localTop: w,
          updateLocation: j,
        }
      );
    },
  }),
  D_ = K(
    {
      id: String,
      text: String,
      ...Zt(
        cl({
          closeOnBack: !1,
          location: "end",
          locationStrategy: "connected",
          eager: !0,
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: "auto",
          scrim: !1,
          scrollStrategy: "reposition",
          transition: !1,
        }),
        ["absolute", "persistent"]
      ),
    },
    "VTooltip"
  ),
  dl = fe()({
    name: "VTooltip",
    props: D_(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ve(e, "modelValue"),
        { scopeId: r } = Oa(),
        l = Gt(),
        o = S(() => e.id || `v-tooltip-${l}`),
        i = W(),
        s = S(() =>
          e.location.split(" ").length > 1 ? e.location : e.location + " center"
        ),
        u = S(() =>
          e.origin === "auto" ||
          e.origin === "overlap" ||
          e.origin.split(" ").length > 1 ||
          e.location.split(" ").length > 1
            ? e.origin
            : e.origin + " center"
        ),
        c = S(() =>
          e.transition
            ? e.transition
            : a.value
            ? "scale-transition"
            : "fade-transition"
        ),
        d = S(() => le({ "aria-describedby": o.value }, e.activatorProps));
      return (
        be(() => {
          const f = Qn.filterProps(e);
          return g(
            Qn,
            le(
              {
                ref: i,
                class: ["v-tooltip", e.class],
                style: e.style,
                id: o.value,
              },
              f,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (v) => (a.value = v),
                transition: c.value,
                absolute: !0,
                location: s.value,
                origin: u.value,
                persistent: !0,
                role: "tooltip",
                activatorProps: d.value,
                _disableGlobalStack: !0,
              },
              r
            ),
            {
              activator: n.activator,
              default: function () {
                var y;
                for (
                  var v = arguments.length, m = new Array(v), h = 0;
                  h < v;
                  h++
                )
                  m[h] = arguments[h];
                return (
                  ((y = n.default) == null ? void 0 : y.call(n, ...m)) ?? e.text
                );
              },
            }
          );
        }),
        xn({}, i)
      );
    },
  }),
  O_ = at({
    __name: "CheckboxType",
    props: {
      formType: {},
      rules: {},
      label: {},
      field: {},
      readonly: { type: Boolean },
      helpText: {},
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = S({
          get: () => n.modelValue,
          set: (o) => void a("update:modelValue", o),
        }),
        l = ul(r, n.field);
      return (o, i) => (
        ge(),
        Te(
          u_,
          {
            modelValue: Se(l),
            "onUpdate:modelValue":
              i[0] || (i[0] = (s) => (Be(l) ? (l.value = s) : null)),
            label: o.label,
            rules: o.rules,
          },
          tl({ _: 2 }, [
            o.helpText
              ? {
                  name: "append",
                  fn: ue(() => [
                    g(
                      dl,
                      { text: o.helpText },
                      {
                        activator: ue(({ props: s }) => [
                          g(
                            $e,
                            le(s, { icon: "", variant: "text" }),
                            {
                              default: ue(() => [
                                g(De, { icon: "mdi-information" }),
                              ]),
                              _: 2,
                            },
                            1040
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["text"]
                    ),
                  ]),
                  key: "0",
                }
              : void 0,
          ]),
          1032,
          ["modelValue", "label", "rules"]
        )
      );
    },
  }),
  xu = fe()({
    name: "VCardActions",
    props: ke(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        Ft({ VBtn: { slim: !0, variant: "text" } }),
        be(() => {
          var a;
          return g(
            "div",
            { class: ["v-card-actions", e.class], style: e.style },
            [(a = n.default) == null ? void 0 : a.call(n)]
          );
        }),
        {}
      );
    },
  }),
  $_ = K({ opacity: [Number, String], ...ke(), ...He() }, "VCardSubtitle"),
  M_ = fe()({
    name: "VCardSubtitle",
    props: $_(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() =>
          g(
            e.tag,
            {
              class: ["v-card-subtitle", e.class],
              style: [{ "--v-card-subtitle-opacity": e.opacity }, e.style],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  or = Co("v-card-title"),
  B_ = K(
    {
      start: Boolean,
      end: Boolean,
      icon: Ae,
      image: String,
      text: String,
      ...tn(),
      ...ke(),
      ...Vt(),
      ...ht(),
      ...vr(),
      ...He(),
      ...Ge(),
      ...fn({ variant: "flat" }),
    },
    "VAvatar"
  ),
  $n = fe()({
    name: "VAvatar",
    props: B_(),
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = Qe(e),
        { borderClasses: r } = cn(e),
        { colorClasses: l, colorStyles: o, variantClasses: i } = Da(e),
        { densityClasses: s } = Yt(e),
        { roundedClasses: u } = xt(e),
        { sizeClasses: c, sizeStyles: d } = ol(e);
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-avatar",
                { "v-avatar--start": e.start, "v-avatar--end": e.end },
                a.value,
                r.value,
                l.value,
                s.value,
                u.value,
                c.value,
                i.value,
                e.class,
              ],
              style: [o.value, d.value, e.style],
            },
            {
              default: () => [
                n.default
                  ? g(
                      qe,
                      {
                        key: "content-defaults",
                        defaults: {
                          VImg: { cover: !0, src: e.image },
                          VIcon: { icon: e.icon },
                        },
                      },
                      { default: () => [n.default()] }
                    )
                  : e.image
                  ? g(
                      Vo,
                      { key: "image", src: e.image, alt: "", cover: !0 },
                      null
                    )
                  : e.icon
                  ? g(De, { key: "icon", icon: e.icon }, null)
                  : e.text,
                Va(!1, "v-avatar"),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  L_ = K(
    {
      appendAvatar: String,
      appendIcon: Ae,
      prependAvatar: String,
      prependIcon: Ae,
      subtitle: [String, Number],
      title: [String, Number],
      ...ke(),
      ...Vt(),
    },
    "VCardItem"
  ),
  Zh = fe()({
    name: "VCardItem",
    props: L_(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() => {
          var u;
          const a = !!(e.prependAvatar || e.prependIcon),
            r = !!(a || n.prepend),
            l = !!(e.appendAvatar || e.appendIcon),
            o = !!(l || n.append),
            i = !!(e.title != null || n.title),
            s = !!(e.subtitle != null || n.subtitle);
          return g("div", { class: ["v-card-item", e.class], style: e.style }, [
            r &&
              g("div", { key: "prepend", class: "v-card-item__prepend" }, [
                n.prepend
                  ? g(
                      qe,
                      {
                        key: "prepend-defaults",
                        disabled: !a,
                        defaults: {
                          VAvatar: {
                            density: e.density,
                            image: e.prependAvatar,
                          },
                          VIcon: { density: e.density, icon: e.prependIcon },
                        },
                      },
                      n.prepend
                    )
                  : g(ye, null, [
                      e.prependAvatar &&
                        g(
                          $n,
                          {
                            key: "prepend-avatar",
                            density: e.density,
                            image: e.prependAvatar,
                          },
                          null
                        ),
                      e.prependIcon &&
                        g(
                          De,
                          {
                            key: "prepend-icon",
                            density: e.density,
                            icon: e.prependIcon,
                          },
                          null
                        ),
                    ]),
              ]),
            g("div", { class: "v-card-item__content" }, [
              i &&
                g(
                  or,
                  { key: "title" },
                  {
                    default: () => {
                      var c;
                      return [
                        ((c = n.title) == null ? void 0 : c.call(n)) ?? e.title,
                      ];
                    },
                  }
                ),
              s &&
                g(
                  M_,
                  { key: "subtitle" },
                  {
                    default: () => {
                      var c;
                      return [
                        ((c = n.subtitle) == null ? void 0 : c.call(n)) ??
                          e.subtitle,
                      ];
                    },
                  }
                ),
              (u = n.default) == null ? void 0 : u.call(n),
            ]),
            o &&
              g("div", { key: "append", class: "v-card-item__append" }, [
                n.append
                  ? g(
                      qe,
                      {
                        key: "append-defaults",
                        disabled: !l,
                        defaults: {
                          VAvatar: {
                            density: e.density,
                            image: e.appendAvatar,
                          },
                          VIcon: { density: e.density, icon: e.appendIcon },
                        },
                      },
                      n.append
                    )
                  : g(ye, null, [
                      e.appendIcon &&
                        g(
                          De,
                          {
                            key: "append-icon",
                            density: e.density,
                            icon: e.appendIcon,
                          },
                          null
                        ),
                      e.appendAvatar &&
                        g(
                          $n,
                          {
                            key: "append-avatar",
                            density: e.density,
                            image: e.appendAvatar,
                          },
                          null
                        ),
                    ]),
              ]),
          ]);
        }),
        {}
      );
    },
  }),
  R_ = K({ opacity: [Number, String], ...ke(), ...He() }, "VCardText"),
  ya = fe()({
    name: "VCardText",
    props: R_(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() =>
          g(
            e.tag,
            {
              class: ["v-card-text", e.class],
              style: [{ "--v-card-text-opacity": e.opacity }, e.style],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  F_ = K(
    {
      appendAvatar: String,
      appendIcon: Ae,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: Ae,
      ripple: { type: [Boolean, Object], default: !0 },
      subtitle: [String, Number],
      text: [String, Number],
      title: [String, Number],
      ...tn(),
      ...ke(),
      ...Vt(),
      ...Qt(),
      ...nn(),
      ...$o(),
      ...il(),
      ...Bo(),
      ...ht(),
      ...Fo(),
      ...He(),
      ...Ge(),
      ...fn({ variant: "elevated" }),
    },
    "VCard"
  ),
  jo = fe()({
    name: "VCard",
    directives: { Ripple: sl },
    props: F_(),
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: r } = Qe(e),
        { borderClasses: l } = cn(e),
        { colorClasses: o, colorStyles: i, variantClasses: s } = Da(e),
        { densityClasses: u } = Yt(e),
        { dimensionStyles: c } = en(e),
        { elevationClasses: d } = dn(e),
        { loaderClasses: f } = Mo(e),
        { locationStyles: v } = Oo(e),
        { positionClasses: m } = Lo(e),
        { roundedClasses: h } = xt(e),
        y = Ro(e, n),
        p = S(() => e.link !== !1 && y.isLink.value),
        w = S(
          () => !e.disabled && e.link !== !1 && (e.link || y.isClickable.value)
        );
      return (
        be(() => {
          const x = p.value ? "a" : e.tag,
            E = !!(a.title || e.title != null),
            k = !!(a.subtitle || e.subtitle != null),
            V = E || k,
            A = !!(a.append || e.appendAvatar || e.appendIcon),
            b = !!(a.prepend || e.prependAvatar || e.prependIcon),
            C = !!(a.image || e.image),
            D = V || b || A,
            P = !!(a.text || e.text != null);
          return ft(
            g(
              x,
              le(
                {
                  class: [
                    "v-card",
                    {
                      "v-card--disabled": e.disabled,
                      "v-card--flat": e.flat,
                      "v-card--hover": e.hover && !(e.disabled || e.flat),
                      "v-card--link": w.value,
                    },
                    r.value,
                    l.value,
                    o.value,
                    u.value,
                    d.value,
                    f.value,
                    m.value,
                    h.value,
                    s.value,
                    e.class,
                  ],
                  style: [i.value, c.value, v.value, e.style],
                  onClick: w.value && y.navigate,
                  tabindex: e.disabled ? -1 : void 0,
                },
                y.linkProps
              ),
              {
                default: () => {
                  var I;
                  return [
                    C &&
                      g("div", { key: "image", class: "v-card__image" }, [
                        a.image
                          ? g(
                              qe,
                              {
                                key: "image-defaults",
                                disabled: !e.image,
                                defaults: { VImg: { cover: !0, src: e.image } },
                              },
                              a.image
                            )
                          : g(
                              Vo,
                              { key: "image-img", cover: !0, src: e.image },
                              null
                            ),
                      ]),
                    g(
                      pu,
                      {
                        name: "v-card",
                        active: !!e.loading,
                        color:
                          typeof e.loading == "boolean" ? void 0 : e.loading,
                      },
                      { default: a.loader }
                    ),
                    D &&
                      g(
                        Zh,
                        {
                          key: "item",
                          prependAvatar: e.prependAvatar,
                          prependIcon: e.prependIcon,
                          title: e.title,
                          subtitle: e.subtitle,
                          appendAvatar: e.appendAvatar,
                          appendIcon: e.appendIcon,
                        },
                        {
                          default: a.item,
                          prepend: a.prepend,
                          title: a.title,
                          subtitle: a.subtitle,
                          append: a.append,
                        }
                      ),
                    P &&
                      g(
                        ya,
                        { key: "text" },
                        {
                          default: () => {
                            var $;
                            return [
                              (($ = a.text) == null ? void 0 : $.call(a)) ??
                                e.text,
                            ];
                          },
                        }
                      ),
                    (I = a.default) == null ? void 0 : I.call(a),
                    a.actions && g(xu, null, { default: a.actions }),
                    Va(w.value, "v-card"),
                  ];
                },
              }
            ),
            [[Ln("ripple"), w.value && e.ripple]]
          );
        }),
        {}
      );
    },
  }),
  N_ = at({
    __name: "GroupType",
    props: {
      formType: {},
      label: {},
      items: {},
      layout: {},
      layoutGap: {},
      noBg: { type: Boolean },
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e) {
      return (t, n) => (
        ge(),
        tt("div", null, [
          t.label
            ? (ge(),
              Te(
                or,
                { key: 0 },
                { default: ue(() => [je(At(t.label), 1)]), _: 1 }
              ))
            : it("", !0),
          Ta(
            "div",
            {
              class: Pt(
                t.layout === "flex"
                  ? [
                      "flex-container",
                      `flex-container-gap-${(t.layoutGap ?? 1)
                        .toString()
                        .replaceAll(".", "-")}`,
                    ]
                  : []
              ),
            },
            [
              (ge(!0),
              tt(
                ye,
                null,
                Vn(
                  t.items,
                  (a) => (
                    ge(),
                    Te(
                      Wo,
                      le({ ref_for: !0 }, t.$attrs, {
                        key: a.label,
                        "form-data": a,
                        "model-value": t.modelValue,
                        variant: t.noBg ? "solo" : void 0,
                        "onUpdate:modelValue":
                          n[0] ||
                          (n[0] = (r) => t.$emit("update:modelValue", r)),
                      }),
                      null,
                      16,
                      ["form-data", "model-value", "variant"]
                    )
                  )
                ),
                128
              )),
            ],
            2
          ),
        ])
      );
    },
  }),
  H_ = K(
    {
      active: Boolean,
      disabled: Boolean,
      max: [Number, String],
      value: { type: [Number, String], default: 0 },
      ...ke(),
      ...dr({ transition: { component: rh } }),
    },
    "VCounter"
  ),
  Qh = fe()({
    name: "VCounter",
    functional: !0,
    props: H_(),
    setup(e, t) {
      let { slots: n } = t;
      const a = S(() => (e.max ? `${e.value} / ${e.max}` : String(e.value)));
      return (
        be(() =>
          g(
            An,
            { transition: e.transition },
            {
              default: () => [
                ft(
                  g(
                    "div",
                    {
                      class: [
                        "v-counter",
                        {
                          "text-error":
                            e.max &&
                            !e.disabled &&
                            parseFloat(e.value) > parseFloat(e.max),
                        },
                        e.class,
                      ],
                      style: e.style,
                    },
                    [
                      n.default
                        ? n.default({
                            counter: a.value,
                            max: e.max,
                            value: e.value,
                          })
                        : a.value,
                    ]
                  ),
                  [[Aa, e.active]]
                ),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  j_ = K({ floating: Boolean, ...ke() }, "VFieldLabel"),
  _l = fe()({
    name: "VFieldLabel",
    props: j_(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() =>
          g(
            Lh,
            {
              class: [
                "v-field-label",
                { "v-field-label--floating": e.floating },
                e.class,
              ],
              style: e.style,
              "aria-hidden": e.floating || void 0,
            },
            n
          )
        ),
        {}
      );
    },
  }),
  z_ = [
    "underlined",
    "outlined",
    "filled",
    "solo",
    "solo-inverted",
    "solo-filled",
    "plain",
  ],
  _u = K(
    {
      appendInnerIcon: Ae,
      bgColor: String,
      clearable: Boolean,
      clearIcon: { type: Ae, default: "$clear" },
      active: Boolean,
      centerAffix: { type: Boolean, default: void 0 },
      color: String,
      baseColor: String,
      dirty: Boolean,
      disabled: { type: Boolean, default: null },
      error: Boolean,
      flat: Boolean,
      label: String,
      persistentClear: Boolean,
      prependInnerIcon: Ae,
      reverse: Boolean,
      singleLine: Boolean,
      variant: {
        type: String,
        default: "filled",
        validator: (e) => z_.includes(e),
      },
      "onClick:clear": dt(),
      "onClick:appendInner": dt(),
      "onClick:prependInner": dt(),
      ...ke(),
      ...$o(),
      ...ht(),
      ...Ge(),
    },
    "VField"
  ),
  ku = fe()({
    name: "VField",
    inheritAttrs: !1,
    props: { id: String, ...zh(), ..._u() },
    emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const { themeClasses: l } = Qe(e),
        { loaderClasses: o } = Mo(e),
        { focusClasses: i, isFocused: s, focus: u, blur: c } = No(e),
        { InputIcon: d } = jh(e),
        { roundedClasses: f } = xt(e),
        { rtlClasses: v } = Nt(),
        m = S(() => e.dirty || e.active),
        h = S(() => !e.singleLine && !!(e.label || r.label)),
        y = Gt(),
        p = S(() => e.id || `input-${y}`),
        w = S(() => `${p.value}-messages`),
        x = W(),
        E = W(),
        k = W(),
        V = S(() => ["plain", "underlined"].includes(e.variant)),
        { backgroundColorClasses: A, backgroundColorStyles: b } = It(
          ne(e, "bgColor")
        ),
        { textColorClasses: C, textColorStyles: D } = Xt(
          S(() =>
            e.error || e.disabled
              ? void 0
              : m.value && s.value
              ? e.color
              : e.baseColor
          )
        );
      ce(
        m,
        (M) => {
          if (h.value) {
            const N = x.value.$el,
              B = E.value.$el;
            requestAnimationFrame(() => {
              const j = au(N),
                H = B.getBoundingClientRect(),
                z = H.x - j.x,
                O = H.y - j.y - (j.height / 2 - H.height / 2),
                L = H.width / 0.75,
                G = Math.abs(L - j.width) > 1 ? { maxWidth: pe(L) } : void 0,
                oe = getComputedStyle(N),
                X = getComputedStyle(B),
                ve = parseFloat(oe.transitionDuration) * 1e3 || 150,
                re = parseFloat(X.getPropertyValue("--v-field-label-scale")),
                F = X.getPropertyValue("color");
              (N.style.visibility = "visible"),
                (B.style.visibility = "hidden"),
                fa(
                  N,
                  {
                    transform: `translate(${z}px, ${O}px) scale(${re})`,
                    color: F,
                    ...G,
                  },
                  {
                    duration: ve,
                    easing: Fr,
                    direction: M ? "normal" : "reverse",
                  }
                ).finished.then(() => {
                  N.style.removeProperty("visibility"),
                    B.style.removeProperty("visibility");
                });
            });
          }
        },
        { flush: "post" }
      );
      const P = S(() => ({
        isActive: m,
        isFocused: s,
        controlRef: k,
        blur: c,
        focus: u,
      }));
      function I(M) {
        M.target !== document.activeElement && M.preventDefault();
      }
      function $(M) {
        var N;
        (M.key !== "Enter" && M.key !== " ") ||
          (M.preventDefault(),
          M.stopPropagation(),
          (N = e["onClick:clear"]) == null ||
            N.call(e, new MouseEvent("click")));
      }
      return (
        be(() => {
          var z, O, L;
          const M = e.variant === "outlined",
            N = !!(r["prepend-inner"] || e.prependInnerIcon),
            B = !!(e.clearable || r.clear),
            j = !!(r["append-inner"] || e.appendInnerIcon || B),
            H = () =>
              r.label
                ? r.label({
                    ...P.value,
                    label: e.label,
                    props: { for: p.value },
                  })
                : e.label;
          return g(
            "div",
            le(
              {
                class: [
                  "v-field",
                  {
                    "v-field--active": m.value,
                    "v-field--appended": j,
                    "v-field--center-affix": e.centerAffix ?? !V.value,
                    "v-field--disabled": e.disabled,
                    "v-field--dirty": e.dirty,
                    "v-field--error": e.error,
                    "v-field--flat": e.flat,
                    "v-field--has-background": !!e.bgColor,
                    "v-field--persistent-clear": e.persistentClear,
                    "v-field--prepended": N,
                    "v-field--reverse": e.reverse,
                    "v-field--single-line": e.singleLine,
                    "v-field--no-label": !H(),
                    [`v-field--variant-${e.variant}`]: !0,
                  },
                  l.value,
                  A.value,
                  i.value,
                  o.value,
                  f.value,
                  v.value,
                  e.class,
                ],
                style: [b.value, e.style],
                onClick: I,
              },
              n
            ),
            [
              g("div", { class: "v-field__overlay" }, null),
              g(
                pu,
                {
                  name: "v-field",
                  active: !!e.loading,
                  color: e.error
                    ? "error"
                    : typeof e.loading == "string"
                    ? e.loading
                    : e.color,
                },
                { default: r.loader }
              ),
              N &&
                g("div", { key: "prepend", class: "v-field__prepend-inner" }, [
                  e.prependInnerIcon &&
                    g(d, { key: "prepend-icon", name: "prependInner" }, null),
                  (z = r["prepend-inner"]) == null
                    ? void 0
                    : z.call(r, P.value),
                ]),
              g("div", { class: "v-field__field", "data-no-activator": "" }, [
                ["filled", "solo", "solo-inverted", "solo-filled"].includes(
                  e.variant
                ) &&
                  h.value &&
                  g(
                    _l,
                    {
                      key: "floating-label",
                      ref: E,
                      class: [C.value],
                      floating: !0,
                      for: p.value,
                      style: D.value,
                    },
                    { default: () => [H()] }
                  ),
                h.value &&
                  g(
                    _l,
                    { key: "label", ref: x, for: p.value },
                    { default: () => [H()] }
                  ),
                (O = r.default) == null
                  ? void 0
                  : O.call(r, {
                      ...P.value,
                      props: {
                        id: p.value,
                        class: "v-field__input",
                        "aria-describedby": w.value,
                      },
                      focus: u,
                      blur: c,
                    }),
              ]),
              B &&
                g(
                  oh,
                  { key: "clear" },
                  {
                    default: () => [
                      ft(
                        g(
                          "div",
                          {
                            class: "v-field__clearable",
                            onMousedown: (G) => {
                              G.preventDefault(), G.stopPropagation();
                            },
                          },
                          [
                            g(
                              qe,
                              { defaults: { VIcon: { icon: e.clearIcon } } },
                              {
                                default: () => [
                                  r.clear
                                    ? r.clear({
                                        ...P.value,
                                        props: {
                                          onKeydown: $,
                                          onFocus: u,
                                          onBlur: c,
                                          onClick: e["onClick:clear"],
                                        },
                                      })
                                    : g(
                                        d,
                                        {
                                          name: "clear",
                                          onKeydown: $,
                                          onFocus: u,
                                          onBlur: c,
                                        },
                                        null
                                      ),
                                ],
                              }
                            ),
                          ]
                        ),
                        [[Aa, e.dirty]]
                      ),
                    ],
                  }
                ),
              j &&
                g("div", { key: "append", class: "v-field__append-inner" }, [
                  (L = r["append-inner"]) == null ? void 0 : L.call(r, P.value),
                  e.appendInnerIcon &&
                    g(d, { key: "append-icon", name: "appendInner" }, null),
                ]),
              g(
                "div",
                { class: ["v-field__outline", C.value], style: D.value },
                [
                  M &&
                    g(ye, null, [
                      g("div", { class: "v-field__outline__start" }, null),
                      h.value &&
                        g("div", { class: "v-field__outline__notch" }, [
                          g(
                            _l,
                            { ref: E, floating: !0, for: p.value },
                            { default: () => [H()] }
                          ),
                        ]),
                      g("div", { class: "v-field__outline__end" }, null),
                    ]),
                  V.value &&
                    h.value &&
                    g(
                      _l,
                      { ref: E, floating: !0, for: p.value },
                      { default: () => [H()] }
                    ),
                ]
              ),
            ]
          );
        }),
        { controlRef: k }
      );
    },
  });
function eg(e) {
  const t = Object.keys(ku.props).filter(
    (n) => !So(n) && n !== "class" && n !== "style"
  );
  return Gv(e, t);
}
const U_ = ["color", "file", "time", "date", "datetime-local", "week", "month"],
  Eu = K(
    {
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: [Number, Function],
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      suffix: String,
      role: String,
      type: { type: String, default: "text" },
      modelModifiers: Object,
      ...Ho(),
      ..._u(),
    },
    "VTextField"
  ),
  ka = fe()({
    name: "VTextField",
    directives: { Intersect: hu },
    inheritAttrs: !1,
    props: Eu(),
    emits: {
      "click:control": (e) => !0,
      "mousedown:control": (e) => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const l = Ve(e, "modelValue"),
        { isFocused: o, focus: i, blur: s } = No(e),
        u = S(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(l.value)
            : typeof e.counterValue == "number"
            ? e.counterValue
            : (l.value ?? "").toString().length
        ),
        c = S(() => {
          if (n.maxlength) return n.maxlength;
          if (
            !(
              !e.counter ||
              (typeof e.counter != "number" && typeof e.counter != "string")
            )
          )
            return e.counter;
        }),
        d = S(() => ["plain", "underlined"].includes(e.variant));
      function f(V, A) {
        var b, C;
        !e.autofocus ||
          !V ||
          (C = (b = A[0].target) == null ? void 0 : b.focus) == null ||
          C.call(b);
      }
      const v = W(),
        m = W(),
        h = W(),
        y = S(
          () =>
            U_.includes(e.type) ||
            e.persistentPlaceholder ||
            o.value ||
            e.active
        );
      function p() {
        var V;
        h.value !== document.activeElement &&
          ((V = h.value) == null || V.focus()),
          o.value || i();
      }
      function w(V) {
        a("mousedown:control", V),
          V.target !== h.value && (p(), V.preventDefault());
      }
      function x(V) {
        p(), a("click:control", V);
      }
      function E(V) {
        V.stopPropagation(),
          p(),
          ze(() => {
            (l.value = null), Jv(e["onClick:clear"], V);
          });
      }
      function k(V) {
        var b;
        const A = V.target;
        if (
          ((l.value = A.value),
          (b = e.modelModifiers) != null &&
            b.trim &&
            ["text", "search", "password", "tel", "url"].includes(e.type))
        ) {
          const C = [A.selectionStart, A.selectionEnd];
          ze(() => {
            (A.selectionStart = C[0]), (A.selectionEnd = C[1]);
          });
        }
      }
      return (
        be(() => {
          const V = !!(r.counter || (e.counter !== !1 && e.counter != null)),
            A = !!(V || r.details),
            [b, C] = wo(n),
            { modelValue: D, ...P } = lr.filterProps(e),
            I = eg(e);
          return g(
            lr,
            le(
              {
                ref: v,
                modelValue: l.value,
                "onUpdate:modelValue": ($) => (l.value = $),
                class: [
                  "v-text-field",
                  {
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-input--plain-underlined": d.value,
                  },
                  e.class,
                ],
                style: e.style,
              },
              b,
              P,
              { centerAffix: !d.value, focused: o.value }
            ),
            {
              ...r,
              default: ($) => {
                let {
                  id: M,
                  isDisabled: N,
                  isDirty: B,
                  isReadonly: j,
                  isValid: H,
                } = $;
                return g(
                  ku,
                  le(
                    {
                      ref: m,
                      onMousedown: w,
                      onClick: x,
                      "onClick:clear": E,
                      "onClick:prependInner": e["onClick:prependInner"],
                      "onClick:appendInner": e["onClick:appendInner"],
                      role: e.role,
                    },
                    I,
                    {
                      id: M.value,
                      active: y.value || B.value,
                      dirty: B.value || e.dirty,
                      disabled: N.value,
                      focused: o.value,
                      error: H.value === !1,
                    }
                  ),
                  {
                    ...r,
                    default: (z) => {
                      let {
                        props: { class: O, ...L },
                      } = z;
                      const G = ft(
                        g(
                          "input",
                          le(
                            {
                              ref: h,
                              value: l.value,
                              onInput: k,
                              autofocus: e.autofocus,
                              readonly: j.value,
                              disabled: N.value,
                              name: e.name,
                              placeholder: e.placeholder,
                              size: 1,
                              type: e.type,
                              onFocus: p,
                              onBlur: s,
                            },
                            L,
                            C
                          ),
                          null
                        ),
                        [[Ln("intersect"), { handler: f }, null, { once: !0 }]]
                      );
                      return g(ye, null, [
                        e.prefix &&
                          g("span", { class: "v-text-field__prefix" }, [
                            g("span", { class: "v-text-field__prefix__text" }, [
                              e.prefix,
                            ]),
                          ]),
                        r.default
                          ? g("div", { class: O, "data-no-activator": "" }, [
                              r.default(),
                              G,
                            ])
                          : Dn(G, { class: O }),
                        e.suffix &&
                          g("span", { class: "v-text-field__suffix" }, [
                            g("span", { class: "v-text-field__suffix__text" }, [
                              e.suffix,
                            ]),
                          ]),
                      ]);
                    },
                  }
                );
              },
              details: A
                ? ($) => {
                    var M;
                    return g(ye, null, [
                      (M = r.details) == null ? void 0 : M.call(r, $),
                      V &&
                        g(ye, null, [
                          g("span", null, null),
                          g(
                            Qh,
                            {
                              active: e.persistentCounter || o.value,
                              value: u.value,
                              max: c.value,
                              disabled: e.disabled,
                            },
                            r.counter
                          ),
                        ]),
                    ]);
                  }
                : void 0,
            }
          );
        }),
        xn({}, v, m, h)
      );
    },
  }),
  W_ = at({
    __name: "NumberType",
    props: {
      formType: {},
      rules: {},
      type: {},
      label: {},
      field: {},
      readonly: { type: Boolean },
      helpText: {},
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = S({
          get: () => n.modelValue,
          set: (o) => void a("update:modelValue", o),
        }),
        l = ul(r, n.field);
      return (o, i) => (
        ge(),
        Te(
          ka,
          {
            modelValue: Se(l),
            "onUpdate:modelValue":
              i[0] || (i[0] = (s) => (Be(l) ? (l.value = s) : null)),
            modelModifiers: { number: !0 },
            label: o.label,
            rules: o.rules,
            readonly: o.readonly,
            type: o.type,
          },
          tl({ _: 2 }, [
            o.helpText
              ? {
                  name: "append",
                  fn: ue(() => [
                    g(
                      dl,
                      { text: o.helpText },
                      {
                        activator: ue(({ props: s }) => [
                          g(
                            $e,
                            le(s, { icon: "", variant: "text" }),
                            {
                              default: ue(() => [
                                g(De, { icon: "mdi-information" }),
                              ]),
                              _: 2,
                            },
                            1040
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["text"]
                    ),
                  ]),
                  key: "0",
                }
              : void 0,
          ]),
          1032,
          ["modelValue", "label", "rules", "readonly", "type"]
        )
      );
    },
  }),
  G_ = K({ ...ke(), ...pm({ fullHeight: !0 }), ...Ge() }, "VApp"),
  K_ = fe()({
    name: "VApp",
    props: G_(),
    setup(e, t) {
      let { slots: n } = t;
      const a = Qe(e),
        { layoutClasses: r, getLayoutItem: l, items: o, layoutRef: i } = wm(e),
        { rtlClasses: s } = Nt();
      return (
        be(() => {
          var u;
          return g(
            "div",
            {
              ref: i,
              class: [
                "v-application",
                a.themeClasses.value,
                r.value,
                s.value,
                e.class,
              ],
              style: [e.style],
            },
            [
              g("div", { class: "v-application__wrap" }, [
                (u = n.default) == null ? void 0 : u.call(n),
              ]),
            ]
          );
        }),
        { getLayoutItem: l, items: o, theme: a }
      );
    },
  }),
  tg = Symbol.for("vuetify:v-chip-group"),
  Y_ = K(
    {
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: ra },
      ...wu(),
      ...ke(),
      ...Do({ selectedClass: "v-chip--selected" }),
      ...He(),
      ...Ge(),
      ...fn({ variant: "tonal" }),
    },
    "VChipGroup"
  );
fe()({
  name: "VChipGroup",
  props: Y_(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const { themeClasses: a } = Qe(e),
      { isSelected: r, select: l, next: o, prev: i, selected: s } = ll(e, tg);
    return (
      Ft({
        VChip: {
          color: ne(e, "color"),
          disabled: ne(e, "disabled"),
          filter: ne(e, "filter"),
          variant: ne(e, "variant"),
        },
      }),
      be(() => {
        const u = Zl.filterProps(e);
        return g(
          Zl,
          le(u, {
            class: [
              "v-chip-group",
              { "v-chip-group--column": e.column },
              a.value,
              e.class,
            ],
            style: e.style,
          }),
          {
            default: () => {
              var c;
              return [
                (c = n.default) == null
                  ? void 0
                  : c.call(n, {
                      isSelected: r,
                      select: l,
                      next: o,
                      prev: i,
                      selected: s.value,
                    }),
              ];
            },
          }
        );
      }),
      {}
    );
  },
});
const q_ = K(
    {
      activeClass: String,
      appendAvatar: String,
      appendIcon: Ae,
      closable: Boolean,
      closeIcon: { type: Ae, default: "$delete" },
      closeLabel: { type: String, default: "$vuetify.close" },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: Ae, default: "$complete" },
      label: Boolean,
      link: { type: Boolean, default: void 0 },
      pill: Boolean,
      prependAvatar: String,
      prependIcon: Ae,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      modelValue: { type: Boolean, default: !0 },
      onClick: dt(),
      onClickOnce: dt(),
      ...tn(),
      ...ke(),
      ...Vt(),
      ...nn(),
      ...gu(),
      ...ht(),
      ...Fo(),
      ...vr(),
      ...He({ tag: "span" }),
      ...Ge(),
      ...fn({ variant: "tonal" }),
    },
    "VChip"
  ),
  Pu = fe()({
    name: "VChip",
    directives: { Ripple: sl },
    props: q_(),
    emits: {
      "click:close": (e) => !0,
      "update:modelValue": (e) => !0,
      "group:selected": (e) => !0,
      click: (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const { t: l } = un(),
        { borderClasses: o } = cn(e),
        { colorClasses: i, colorStyles: s, variantClasses: u } = Da(e),
        { densityClasses: c } = Yt(e),
        { elevationClasses: d } = dn(e),
        { roundedClasses: f } = xt(e),
        { sizeClasses: v } = ol(e),
        { themeClasses: m } = Qe(e),
        h = Ve(e, "modelValue"),
        y = yu(e, tg, !1),
        p = Ro(e, n),
        w = S(() => e.link !== !1 && p.isLink.value),
        x = S(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (!!y || e.link || p.isClickable.value)
        ),
        E = S(() => ({
          "aria-label": l(e.closeLabel),
          onClick(A) {
            A.preventDefault(),
              A.stopPropagation(),
              (h.value = !1),
              a("click:close", A);
          },
        }));
      function k(A) {
        var b;
        a("click", A),
          x.value &&
            ((b = p.navigate) == null || b.call(p, A), y == null || y.toggle());
      }
      function V(A) {
        (A.key === "Enter" || A.key === " ") && (A.preventDefault(), k(A));
      }
      return () => {
        var N;
        const A = p.isLink.value ? "a" : e.tag,
          b = !!(e.appendIcon || e.appendAvatar),
          C = !!(b || r.append),
          D = !!(r.close || e.closable),
          P = !!(r.filter || e.filter) && y,
          I = !!(e.prependIcon || e.prependAvatar),
          $ = !!(I || r.prepend),
          M = !y || y.isSelected.value;
        return (
          h.value &&
          ft(
            g(
              A,
              le(
                {
                  class: [
                    "v-chip",
                    {
                      "v-chip--disabled": e.disabled,
                      "v-chip--label": e.label,
                      "v-chip--link": x.value,
                      "v-chip--filter": P,
                      "v-chip--pill": e.pill,
                      [`${e.activeClass}`]:
                        e.activeClass &&
                        ((N = p.isActive) == null ? void 0 : N.value),
                    },
                    m.value,
                    o.value,
                    M ? i.value : void 0,
                    c.value,
                    d.value,
                    f.value,
                    v.value,
                    u.value,
                    y == null ? void 0 : y.selectedClass.value,
                    e.class,
                  ],
                  style: [M ? s.value : void 0, e.style],
                  disabled: e.disabled || void 0,
                  draggable: e.draggable,
                  tabindex: x.value ? 0 : void 0,
                  onClick: k,
                  onKeydown: x.value && !w.value && V,
                },
                p.linkProps
              ),
              {
                default: () => {
                  var B;
                  return [
                    Va(x.value, "v-chip"),
                    P &&
                      g(
                        oh,
                        { key: "filter" },
                        {
                          default: () => [
                            ft(
                              g("div", { class: "v-chip__filter" }, [
                                r.filter
                                  ? g(
                                      qe,
                                      {
                                        key: "filter-defaults",
                                        disabled: !e.filterIcon,
                                        defaults: {
                                          VIcon: { icon: e.filterIcon },
                                        },
                                      },
                                      r.filter
                                    )
                                  : g(
                                      De,
                                      {
                                        key: "filter-icon",
                                        icon: e.filterIcon,
                                      },
                                      null
                                    ),
                              ]),
                              [[Aa, y.isSelected.value]]
                            ),
                          ],
                        }
                      ),
                    $ &&
                      g("div", { key: "prepend", class: "v-chip__prepend" }, [
                        r.prepend
                          ? g(
                              qe,
                              {
                                key: "prepend-defaults",
                                disabled: !I,
                                defaults: {
                                  VAvatar: {
                                    image: e.prependAvatar,
                                    start: !0,
                                  },
                                  VIcon: { icon: e.prependIcon, start: !0 },
                                },
                              },
                              r.prepend
                            )
                          : g(ye, null, [
                              e.prependIcon &&
                                g(
                                  De,
                                  {
                                    key: "prepend-icon",
                                    icon: e.prependIcon,
                                    start: !0,
                                  },
                                  null
                                ),
                              e.prependAvatar &&
                                g(
                                  $n,
                                  {
                                    key: "prepend-avatar",
                                    image: e.prependAvatar,
                                    start: !0,
                                  },
                                  null
                                ),
                            ]),
                      ]),
                    g(
                      "div",
                      { class: "v-chip__content", "data-no-activator": "" },
                      [
                        ((B = r.default) == null
                          ? void 0
                          : B.call(r, {
                              isSelected:
                                y == null ? void 0 : y.isSelected.value,
                              selectedClass:
                                y == null ? void 0 : y.selectedClass.value,
                              select: y == null ? void 0 : y.select,
                              toggle: y == null ? void 0 : y.toggle,
                              value: y == null ? void 0 : y.value.value,
                              disabled: e.disabled,
                            })) ?? e.text,
                      ]
                    ),
                    C &&
                      g("div", { key: "append", class: "v-chip__append" }, [
                        r.append
                          ? g(
                              qe,
                              {
                                key: "append-defaults",
                                disabled: !b,
                                defaults: {
                                  VAvatar: { end: !0, image: e.appendAvatar },
                                  VIcon: { end: !0, icon: e.appendIcon },
                                },
                              },
                              r.append
                            )
                          : g(ye, null, [
                              e.appendIcon &&
                                g(
                                  De,
                                  {
                                    key: "append-icon",
                                    end: !0,
                                    icon: e.appendIcon,
                                  },
                                  null
                                ),
                              e.appendAvatar &&
                                g(
                                  $n,
                                  {
                                    key: "append-avatar",
                                    end: !0,
                                    image: e.appendAvatar,
                                  },
                                  null
                                ),
                            ]),
                      ]),
                    D &&
                      g(
                        "button",
                        le(
                          {
                            key: "close",
                            class: "v-chip__close",
                            type: "button",
                            "data-testid": "close-chip",
                          },
                          E.value
                        ),
                        [
                          r.close
                            ? g(
                                qe,
                                {
                                  key: "close-defaults",
                                  defaults: {
                                    VIcon: {
                                      icon: e.closeIcon,
                                      size: "x-small",
                                    },
                                  },
                                },
                                r.close
                              )
                            : g(
                                De,
                                {
                                  key: "close-icon",
                                  icon: e.closeIcon,
                                  size: "x-small",
                                },
                                null
                              ),
                        ]
                      ),
                  ];
                },
              }
            ),
            [[Ln("ripple"), x.value && e.ripple, null]]
          )
        );
      };
    },
  }),
  ws = Symbol.for("vuetify:list");
function ng() {
  const e = Ie(ws, { hasPrepend: he(!1), updateHasPrepend: () => null }),
    t = {
      hasPrepend: he(!1),
      updateHasPrepend: (n) => {
        n && (t.hasPrepend.value = n);
      },
    };
  return We(ws, t), e;
}
function ag() {
  return Ie(ws, null);
}
const Tu = (e) => {
    const t = {
      activate: (n) => {
        let { id: a, value: r, activated: l } = n;
        return (
          (a = xe(a)),
          (e && !r && l.size === 1 && l.has(a)) || (r ? l.add(a) : l.delete(a)),
          l
        );
      },
      in: (n, a, r) => {
        let l = new Set();
        if (n != null)
          for (const o of ct(n))
            l = t.activate({
              id: o,
              value: !0,
              activated: new Set(l),
              children: a,
              parents: r,
            });
        return l;
      },
      out: (n) => Array.from(n),
    };
    return t;
  },
  rg = (e) => {
    const t = Tu(e);
    return {
      activate: (a) => {
        let { activated: r, id: l, ...o } = a;
        l = xe(l);
        const i = r.has(l) ? new Set([l]) : new Set();
        return t.activate({ ...o, id: l, activated: i });
      },
      in: (a, r, l) => {
        let o = new Set();
        if (a != null) {
          const i = ct(a);
          i.length && (o = t.in(i.slice(0, 1), r, l));
        }
        return o;
      },
      out: (a, r, l) => t.out(a, r, l),
    };
  },
  J_ = (e) => {
    const t = Tu(e);
    return {
      activate: (a) => {
        let { id: r, activated: l, children: o, ...i } = a;
        return (
          (r = xe(r)),
          o.has(r) ? l : t.activate({ id: r, activated: l, children: o, ...i })
        );
      },
      in: t.in,
      out: t.out,
    };
  },
  X_ = (e) => {
    const t = rg(e);
    return {
      activate: (a) => {
        let { id: r, activated: l, children: o, ...i } = a;
        return (
          (r = xe(r)),
          o.has(r) ? l : t.activate({ id: r, activated: l, children: o, ...i })
        );
      },
      in: t.in,
      out: t.out,
    };
  },
  Z_ = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: r } = e;
      if (n) {
        const l = new Set();
        l.add(t);
        let o = r.get(t);
        for (; o != null; ) l.add(o), (o = r.get(o));
        return l;
      } else return a.delete(t), a;
    },
    select: () => null,
  },
  lg = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: r } = e;
      if (n) {
        let l = r.get(t);
        for (a.add(t); l != null && l !== t; ) a.add(l), (l = r.get(l));
        return a;
      } else a.delete(t);
      return a;
    },
    select: () => null,
  },
  Q_ = {
    open: lg.open,
    select: (e) => {
      let { id: t, value: n, opened: a, parents: r } = e;
      if (!n) return a;
      const l = [];
      let o = r.get(t);
      for (; o != null; ) l.push(o), (o = r.get(o));
      return new Set(l);
    },
  },
  Au = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: r, selected: l } = n;
        if (((a = xe(a)), e && !r)) {
          const o = Array.from(l.entries()).reduce((i, s) => {
            let [u, c] = s;
            return c === "on" && i.push(u), i;
          }, []);
          if (o.length === 1 && o[0] === a) return l;
        }
        return l.set(a, r ? "on" : "off"), l;
      },
      in: (n, a, r) => {
        let l = new Map();
        for (const o of n || [])
          l = t.select({
            id: o,
            value: !0,
            selected: new Map(l),
            children: a,
            parents: r,
          });
        return l;
      },
      out: (n) => {
        const a = [];
        for (const [r, l] of n.entries()) l === "on" && a.push(r);
        return a;
      },
    };
    return t;
  },
  og = (e) => {
    const t = Au(e);
    return {
      select: (a) => {
        let { selected: r, id: l, ...o } = a;
        l = xe(l);
        const i = r.has(l) ? new Map([[l, r.get(l)]]) : new Map();
        return t.select({ ...o, id: l, selected: i });
      },
      in: (a, r, l) => {
        let o = new Map();
        return a != null && a.length && (o = t.in(a.slice(0, 1), r, l)), o;
      },
      out: (a, r, l) => t.out(a, r, l),
    };
  },
  ek = (e) => {
    const t = Au(e);
    return {
      select: (a) => {
        let { id: r, selected: l, children: o, ...i } = a;
        return (
          (r = xe(r)),
          o.has(r) ? l : t.select({ id: r, selected: l, children: o, ...i })
        );
      },
      in: t.in,
      out: t.out,
    };
  },
  tk = (e) => {
    const t = og(e);
    return {
      select: (a) => {
        let { id: r, selected: l, children: o, ...i } = a;
        return (
          (r = xe(r)),
          o.has(r) ? l : t.select({ id: r, selected: l, children: o, ...i })
        );
      },
      in: t.in,
      out: t.out,
    };
  },
  nk = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: r, selected: l, children: o, parents: i } = n;
        a = xe(a);
        const s = new Map(l),
          u = [a];
        for (; u.length; ) {
          const d = u.shift();
          l.set(xe(d), r ? "on" : "off"), o.has(d) && u.push(...o.get(d));
        }
        let c = xe(i.get(a));
        for (; c; ) {
          const d = o.get(c),
            f = d.every((m) => l.get(xe(m)) === "on"),
            v = d.every((m) => !l.has(xe(m)) || l.get(xe(m)) === "off");
          l.set(c, f ? "on" : v ? "off" : "indeterminate"), (c = xe(i.get(c)));
        }
        return e &&
          !r &&
          Array.from(l.entries()).reduce((f, v) => {
            let [m, h] = v;
            return h === "on" && f.push(m), f;
          }, []).length === 0
          ? s
          : l;
      },
      in: (n, a, r) => {
        let l = new Map();
        for (const o of n || [])
          l = t.select({
            id: o,
            value: !0,
            selected: new Map(l),
            children: a,
            parents: r,
          });
        return l;
      },
      out: (n, a) => {
        const r = [];
        for (const [l, o] of n.entries()) o === "on" && !a.has(l) && r.push(l);
        return r;
      },
    };
    return t;
  },
  qr = Symbol.for("vuetify:nested"),
  ig = {
    id: he(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: W(new Map()),
      children: W(new Map()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: W(!1),
      selectable: W(!1),
      opened: W(new Set()),
      activated: W(new Set()),
      selected: W(new Map()),
      selectedValues: W([]),
      getPath: () => [],
    },
  },
  ak = K(
    {
      activatable: Boolean,
      selectable: Boolean,
      activeStrategy: [String, Function, Object],
      selectStrategy: [String, Function, Object],
      openStrategy: [String, Object],
      opened: null,
      activated: null,
      selected: null,
      mandatory: Boolean,
    },
    "nested"
  ),
  rk = (e) => {
    let t = !1;
    const n = W(new Map()),
      a = W(new Map()),
      r = Ve(
        e,
        "opened",
        e.opened,
        (m) => new Set(m),
        (m) => [...m.values()]
      ),
      l = S(() => {
        if (typeof e.activeStrategy == "object") return e.activeStrategy;
        if (typeof e.activeStrategy == "function")
          return e.activeStrategy(e.mandatory);
        switch (e.activeStrategy) {
          case "leaf":
            return J_(e.mandatory);
          case "single-leaf":
            return X_(e.mandatory);
          case "independent":
            return Tu(e.mandatory);
          case "single-independent":
          default:
            return rg(e.mandatory);
        }
      }),
      o = S(() => {
        if (typeof e.selectStrategy == "object") return e.selectStrategy;
        if (typeof e.selectStrategy == "function")
          return e.selectStrategy(e.mandatory);
        switch (e.selectStrategy) {
          case "single-leaf":
            return tk(e.mandatory);
          case "leaf":
            return ek(e.mandatory);
          case "independent":
            return Au(e.mandatory);
          case "single-independent":
            return og(e.mandatory);
          case "classic":
          default:
            return nk(e.mandatory);
        }
      }),
      i = S(() => {
        if (typeof e.openStrategy == "object") return e.openStrategy;
        switch (e.openStrategy) {
          case "list":
            return Q_;
          case "single":
            return Z_;
          case "multiple":
          default:
            return lg;
        }
      }),
      s = Ve(
        e,
        "activated",
        e.activated,
        (m) => l.value.in(m, n.value, a.value),
        (m) => l.value.out(m, n.value, a.value)
      ),
      u = Ve(
        e,
        "selected",
        e.selected,
        (m) => o.value.in(m, n.value, a.value),
        (m) => o.value.out(m, n.value, a.value)
      );
    rt(() => {
      t = !0;
    });
    function c(m) {
      const h = [];
      let y = m;
      for (; y != null; ) h.unshift(y), (y = a.value.get(y));
      return h;
    }
    const d = Ze("nested"),
      f = new Set(),
      v = {
        id: he(),
        root: {
          opened: r,
          activatable: ne(e, "activatable"),
          selectable: ne(e, "selectable"),
          activated: s,
          selected: u,
          selectedValues: S(() => {
            const m = [];
            for (const [h, y] of u.value.entries()) y === "on" && m.push(h);
            return m;
          }),
          register: (m, h, y) => {
            if (f.has(m)) {
              c(m).map(String).join(" -> "),
                c(h).concat(m).map(String).join(" -> ");
              return;
            } else f.add(m);
            h && m !== h && a.value.set(m, h),
              y && n.value.set(m, []),
              h != null && n.value.set(h, [...(n.value.get(h) || []), m]);
          },
          unregister: (m) => {
            if (t) return;
            f.delete(m), n.value.delete(m);
            const h = a.value.get(m);
            if (h) {
              const y = n.value.get(h) ?? [];
              n.value.set(
                h,
                y.filter((p) => p !== m)
              );
            }
            a.value.delete(m);
          },
          open: (m, h, y) => {
            d.emit("click:open", { id: m, value: h, path: c(m), event: y });
            const p = i.value.open({
              id: m,
              value: h,
              opened: new Set(r.value),
              children: n.value,
              parents: a.value,
              event: y,
            });
            p && (r.value = p);
          },
          openOnSelect: (m, h, y) => {
            const p = i.value.select({
              id: m,
              value: h,
              selected: new Map(u.value),
              opened: new Set(r.value),
              children: n.value,
              parents: a.value,
              event: y,
            });
            p && (r.value = p);
          },
          select: (m, h, y) => {
            d.emit("click:select", { id: m, value: h, path: c(m), event: y });
            const p = o.value.select({
              id: m,
              value: h,
              selected: new Map(u.value),
              children: n.value,
              parents: a.value,
              event: y,
            });
            p && (u.value = p), v.root.openOnSelect(m, h, y);
          },
          activate: (m, h, y) => {
            if (!e.activatable) return v.root.select(m, !0, y);
            d.emit("click:activate", { id: m, value: h, path: c(m), event: y });
            const p = l.value.activate({
              id: m,
              value: h,
              activated: new Set(s.value),
              children: n.value,
              parents: a.value,
              event: y,
            });
            p && (s.value = p);
          },
          children: n,
          parents: a,
          getPath: c,
        },
      };
    return We(qr, v), v.root;
  },
  sg = (e, t) => {
    const n = Ie(qr, ig),
      a = Symbol(Gt()),
      r = S(() => (e.value !== void 0 ? e.value : a)),
      l = {
        ...n,
        id: r,
        open: (o, i) => n.root.open(r.value, o, i),
        openOnSelect: (o, i) => n.root.openOnSelect(r.value, o, i),
        isOpen: S(() => n.root.opened.value.has(r.value)),
        parent: S(() => n.root.parents.value.get(r.value)),
        activate: (o, i) => n.root.activate(r.value, o, i),
        isActivated: S(() => n.root.activated.value.has(xe(r.value))),
        select: (o, i) => n.root.select(r.value, o, i),
        isSelected: S(() => n.root.selected.value.get(xe(r.value)) === "on"),
        isIndeterminate: S(
          () => n.root.selected.value.get(r.value) === "indeterminate"
        ),
        isLeaf: S(() => !n.root.children.value.get(r.value)),
        isGroupActivator: n.isGroupActivator,
      };
    return (
      Qr(() => {
        !n.isGroupActivator && n.root.register(r.value, n.id.value, t);
      }),
      rt(() => {
        !n.isGroupActivator && n.root.unregister(r.value);
      }),
      t && We(qr, l),
      l
    );
  },
  lk = () => {
    const e = Ie(qr, ig);
    We(qr, { ...e, isGroupActivator: !0 });
  },
  ok = ur({
    name: "VListGroupActivator",
    setup(e, t) {
      let { slots: n } = t;
      return (
        lk(),
        () => {
          var a;
          return (a = n.default) == null ? void 0 : a.call(n);
        }
      );
    },
  }),
  ik = K(
    {
      activeColor: String,
      baseColor: String,
      color: String,
      collapseIcon: { type: Ae, default: "$collapse" },
      expandIcon: { type: Ae, default: "$expand" },
      prependIcon: Ae,
      appendIcon: Ae,
      fluid: Boolean,
      subgroup: Boolean,
      title: String,
      value: null,
      ...ke(),
      ...He(),
    },
    "VListGroup"
  ),
  cf = fe()({
    name: "VListGroup",
    props: ik(),
    setup(e, t) {
      let { slots: n } = t;
      const { isOpen: a, open: r, id: l } = sg(ne(e, "value"), !0),
        o = S(() => `v-list-group--id-${String(l.value)}`),
        i = ag(),
        { isBooted: s } = fr();
      function u(v) {
        v.stopPropagation(), r(!a.value, v);
      }
      const c = S(() => ({
          onClick: u,
          class: "v-list-group__header",
          id: o.value,
        })),
        d = S(() => (a.value ? e.collapseIcon : e.expandIcon)),
        f = S(() => ({
          VListItem: {
            active: a.value,
            activeColor: e.activeColor,
            baseColor: e.baseColor,
            color: e.color,
            prependIcon: e.prependIcon || (e.subgroup && d.value),
            appendIcon: e.appendIcon || (!e.subgroup && d.value),
            title: e.title,
            value: e.value,
          },
        }));
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-list-group",
                {
                  "v-list-group--prepend":
                    i == null ? void 0 : i.hasPrepend.value,
                  "v-list-group--fluid": e.fluid,
                  "v-list-group--subgroup": e.subgroup,
                  "v-list-group--open": a.value,
                },
                e.class,
              ],
              style: e.style,
            },
            {
              default: () => [
                n.activator &&
                  g(
                    qe,
                    { defaults: f.value },
                    {
                      default: () => [
                        g(ok, null, {
                          default: () => [
                            n.activator({ props: c.value, isOpen: a.value }),
                          ],
                        }),
                      ],
                    }
                  ),
                g(
                  An,
                  { transition: { component: lh }, disabled: !s.value },
                  {
                    default: () => {
                      var v;
                      return [
                        ft(
                          g(
                            "div",
                            {
                              class: "v-list-group__items",
                              role: "group",
                              "aria-labelledby": o.value,
                            },
                            [(v = n.default) == null ? void 0 : v.call(n)]
                          ),
                          [[Aa, a.value]]
                        ),
                      ];
                    },
                  }
                ),
              ],
            }
          )
        ),
        { isOpen: a }
      );
    },
  }),
  sk = K({ opacity: [Number, String], ...ke(), ...He() }, "VListItemSubtitle"),
  uk = fe()({
    name: "VListItemSubtitle",
    props: sk(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        be(() =>
          g(
            e.tag,
            {
              class: ["v-list-item-subtitle", e.class],
              style: [{ "--v-list-item-subtitle-opacity": e.opacity }, e.style],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  ck = Co("v-list-item-title"),
  dk = K(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: Ae,
      baseColor: String,
      disabled: Boolean,
      lines: [Boolean, String],
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: Ae,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      subtitle: [String, Number],
      title: [String, Number],
      value: null,
      onClick: dt(),
      onClickOnce: dt(),
      ...tn(),
      ...ke(),
      ...Vt(),
      ...Qt(),
      ...nn(),
      ...ht(),
      ...Fo(),
      ...He(),
      ...Ge(),
      ...fn({ variant: "text" }),
    },
    "VListItem"
  ),
  ir = fe()({
    name: "VListItem",
    directives: { Ripple: sl },
    props: dk(),
    emits: { click: (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: r } = t;
      const l = Ro(e, n),
        o = S(() => (e.value === void 0 ? l.href.value : e.value)),
        {
          activate: i,
          isActivated: s,
          select: u,
          isOpen: c,
          isSelected: d,
          isIndeterminate: f,
          isGroupActivator: v,
          root: m,
          parent: h,
          openOnSelect: y,
          id: p,
        } = sg(o, !1),
        w = ag(),
        x = S(() => {
          var X;
          return (
            e.active !== !1 &&
            (e.active ||
              ((X = l.isActive) == null ? void 0 : X.value) ||
              (m.activatable.value ? s.value : d.value))
          );
        }),
        E = S(() => e.link !== !1 && l.isLink.value),
        k = S(
          () =>
            !!w &&
            (m.selectable.value || m.activatable.value || e.value != null)
        ),
        V = S(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (e.link || l.isClickable.value || k.value)
        ),
        A = S(() => e.rounded || e.nav),
        b = S(() => e.color ?? e.activeColor),
        C = S(() => ({
          color: x.value ? b.value ?? e.baseColor : e.baseColor,
          variant: e.variant,
        }));
      ce(
        () => {
          var X;
          return (X = l.isActive) == null ? void 0 : X.value;
        },
        (X) => {
          X && D();
        }
      ),
        Qr(() => {
          var X;
          (X = l.isActive) != null && X.value && D();
        });
      function D() {
        h.value != null && m.open(h.value, !0), y(!0);
      }
      const { themeClasses: P } = Qe(e),
        { borderClasses: I } = cn(e),
        { colorClasses: $, colorStyles: M, variantClasses: N } = Da(C),
        { densityClasses: B } = Yt(e),
        { dimensionStyles: j } = en(e),
        { elevationClasses: H } = dn(e),
        { roundedClasses: z } = xt(A),
        O = S(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        L = S(() => ({
          isActive: x.value,
          select: u,
          isOpen: c.value,
          isSelected: d.value,
          isIndeterminate: f.value,
        }));
      function G(X) {
        var ve;
        r("click", X),
          V.value &&
            ((ve = l.navigate) == null || ve.call(l, X),
            !v &&
              (m.activatable.value
                ? i(!s.value, X)
                : (m.selectable.value || e.value != null) && u(!d.value, X)));
      }
      function oe(X) {
        (X.key === "Enter" || X.key === " ") &&
          (X.preventDefault(),
          X.target.dispatchEvent(new MouseEvent("click", X)));
      }
      return (
        be(() => {
          const X = E.value ? "a" : e.tag,
            ve = a.title || e.title != null,
            re = a.subtitle || e.subtitle != null,
            F = !!(e.appendAvatar || e.appendIcon),
            Z = !!(F || a.append),
            ee = !!(e.prependAvatar || e.prependIcon),
            Q = !!(ee || a.prepend);
          return (
            w == null || w.updateHasPrepend(Q),
            e.activeColor && Qp("active-color", ["color", "base-color"]),
            ft(
              g(
                X,
                le(
                  {
                    class: [
                      "v-list-item",
                      {
                        "v-list-item--active": x.value,
                        "v-list-item--disabled": e.disabled,
                        "v-list-item--link": V.value,
                        "v-list-item--nav": e.nav,
                        "v-list-item--prepend":
                          !Q && (w == null ? void 0 : w.hasPrepend.value),
                        "v-list-item--slim": e.slim,
                        [`${e.activeClass}`]: e.activeClass && x.value,
                      },
                      P.value,
                      I.value,
                      $.value,
                      B.value,
                      H.value,
                      O.value,
                      z.value,
                      N.value,
                      e.class,
                    ],
                    style: [M.value, j.value, e.style],
                    tabindex: V.value ? (w ? -2 : 0) : void 0,
                    "aria-selected": k.value
                      ? m.activatable.value
                        ? s.value
                        : m.selectable.value
                        ? d.value
                        : x.value
                      : void 0,
                    onClick: G,
                    onKeydown: V.value && !E.value && oe,
                  },
                  l.linkProps
                ),
                {
                  default: () => {
                    var Y;
                    return [
                      Va(V.value || x.value, "v-list-item"),
                      Q &&
                        g(
                          "div",
                          { key: "prepend", class: "v-list-item__prepend" },
                          [
                            a.prepend
                              ? g(
                                  qe,
                                  {
                                    key: "prepend-defaults",
                                    disabled: !ee,
                                    defaults: {
                                      VAvatar: {
                                        density: e.density,
                                        image: e.prependAvatar,
                                      },
                                      VIcon: {
                                        density: e.density,
                                        icon: e.prependIcon,
                                      },
                                      VListItemAction: { start: !0 },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var se;
                                      return [
                                        (se = a.prepend) == null
                                          ? void 0
                                          : se.call(a, L.value),
                                      ];
                                    },
                                  }
                                )
                              : g(ye, null, [
                                  e.prependAvatar &&
                                    g(
                                      $n,
                                      {
                                        key: "prepend-avatar",
                                        density: e.density,
                                        image: e.prependAvatar,
                                      },
                                      null
                                    ),
                                  e.prependIcon &&
                                    g(
                                      De,
                                      {
                                        key: "prepend-icon",
                                        density: e.density,
                                        icon: e.prependIcon,
                                      },
                                      null
                                    ),
                                ]),
                            g("div", { class: "v-list-item__spacer" }, null),
                          ]
                        ),
                      g(
                        "div",
                        {
                          class: "v-list-item__content",
                          "data-no-activator": "",
                        },
                        [
                          ve &&
                            g(
                              ck,
                              { key: "title" },
                              {
                                default: () => {
                                  var se;
                                  return [
                                    ((se = a.title) == null
                                      ? void 0
                                      : se.call(a, { title: e.title })) ??
                                      e.title,
                                  ];
                                },
                              }
                            ),
                          re &&
                            g(
                              uk,
                              { key: "subtitle" },
                              {
                                default: () => {
                                  var se;
                                  return [
                                    ((se = a.subtitle) == null
                                      ? void 0
                                      : se.call(a, { subtitle: e.subtitle })) ??
                                      e.subtitle,
                                  ];
                                },
                              }
                            ),
                          (Y = a.default) == null ? void 0 : Y.call(a, L.value),
                        ]
                      ),
                      Z &&
                        g(
                          "div",
                          { key: "append", class: "v-list-item__append" },
                          [
                            a.append
                              ? g(
                                  qe,
                                  {
                                    key: "append-defaults",
                                    disabled: !F,
                                    defaults: {
                                      VAvatar: {
                                        density: e.density,
                                        image: e.appendAvatar,
                                      },
                                      VIcon: {
                                        density: e.density,
                                        icon: e.appendIcon,
                                      },
                                      VListItemAction: { end: !0 },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var se;
                                      return [
                                        (se = a.append) == null
                                          ? void 0
                                          : se.call(a, L.value),
                                      ];
                                    },
                                  }
                                )
                              : g(ye, null, [
                                  e.appendIcon &&
                                    g(
                                      De,
                                      {
                                        key: "append-icon",
                                        density: e.density,
                                        icon: e.appendIcon,
                                      },
                                      null
                                    ),
                                  e.appendAvatar &&
                                    g(
                                      $n,
                                      {
                                        key: "append-avatar",
                                        density: e.density,
                                        image: e.appendAvatar,
                                      },
                                      null
                                    ),
                                ]),
                            g("div", { class: "v-list-item__spacer" }, null),
                          ]
                        ),
                    ];
                  },
                }
              ),
              [[Ln("ripple"), V.value && e.ripple]]
            )
          );
        }),
        {
          activate: i,
          isActivated: s,
          isGroupActivator: v,
          isSelected: d,
          list: w,
          select: u,
          root: m,
          id: p,
        }
      );
    },
  }),
  fk = K(
    {
      color: String,
      inset: Boolean,
      sticky: Boolean,
      title: String,
      ...ke(),
      ...He(),
    },
    "VListSubheader"
  ),
  vk = fe()({
    name: "VListSubheader",
    props: fk(),
    setup(e, t) {
      let { slots: n } = t;
      const { textColorClasses: a, textColorStyles: r } = Xt(ne(e, "color"));
      return (
        be(() => {
          const l = !!(n.default || e.title);
          return g(
            e.tag,
            {
              class: [
                "v-list-subheader",
                {
                  "v-list-subheader--inset": e.inset,
                  "v-list-subheader--sticky": e.sticky,
                },
                a.value,
                e.class,
              ],
              style: [{ textColorStyles: r }, e.style],
            },
            {
              default: () => {
                var o;
                return [
                  l &&
                    g("div", { class: "v-list-subheader__text" }, [
                      ((o = n.default) == null ? void 0 : o.call(n)) ?? e.title,
                    ]),
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  mk = K(
    {
      color: String,
      inset: Boolean,
      length: [Number, String],
      opacity: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      ...ke(),
      ...Ge(),
    },
    "VDivider"
  ),
  Iu = fe()({
    name: "VDivider",
    props: mk(),
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: r } = Qe(e),
        { textColorClasses: l, textColorStyles: o } = Xt(ne(e, "color")),
        i = S(() => {
          const s = {};
          return (
            e.length && (s[e.vertical ? "height" : "width"] = pe(e.length)),
            e.thickness &&
              (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = pe(
                e.thickness
              )),
            s
          );
        });
      return (
        be(() => {
          const s = g(
            "hr",
            {
              class: [
                {
                  "v-divider": !0,
                  "v-divider--inset": e.inset,
                  "v-divider--vertical": e.vertical,
                },
                r.value,
                l.value,
                e.class,
              ],
              style: [
                i.value,
                o.value,
                { "--v-border-opacity": e.opacity },
                e.style,
              ],
              "aria-orientation":
                !n.role || n.role === "separator"
                  ? e.vertical
                    ? "vertical"
                    : "horizontal"
                  : void 0,
              role: `${n.role || "separator"}`,
            },
            null
          );
          return a.default
            ? g(
                "div",
                {
                  class: [
                    "v-divider__wrapper",
                    {
                      "v-divider__wrapper--vertical": e.vertical,
                      "v-divider__wrapper--inset": e.inset,
                    },
                  ],
                },
                [s, g("div", { class: "v-divider__content" }, [a.default()]), s]
              )
            : s;
        }),
        {}
      );
    },
  }),
  hk = K({ items: Array, returnObject: Boolean }, "VListChildren"),
  ug = fe()({
    name: "VListChildren",
    props: hk(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        ng(),
        () => {
          var a, r;
          return (
            ((a = n.default) == null ? void 0 : a.call(n)) ??
            ((r = e.items) == null
              ? void 0
              : r.map((l) => {
                  var f, v;
                  let { children: o, props: i, type: s, raw: u } = l;
                  if (s === "divider")
                    return (
                      ((f = n.divider) == null
                        ? void 0
                        : f.call(n, { props: i })) ?? g(Iu, i, null)
                    );
                  if (s === "subheader")
                    return (
                      ((v = n.subheader) == null
                        ? void 0
                        : v.call(n, { props: i })) ?? g(vk, i, null)
                    );
                  const c = {
                      subtitle: n.subtitle
                        ? (m) => {
                            var h;
                            return (h = n.subtitle) == null
                              ? void 0
                              : h.call(n, { ...m, item: u });
                          }
                        : void 0,
                      prepend: n.prepend
                        ? (m) => {
                            var h;
                            return (h = n.prepend) == null
                              ? void 0
                              : h.call(n, { ...m, item: u });
                          }
                        : void 0,
                      append: n.append
                        ? (m) => {
                            var h;
                            return (h = n.append) == null
                              ? void 0
                              : h.call(n, { ...m, item: u });
                          }
                        : void 0,
                      title: n.title
                        ? (m) => {
                            var h;
                            return (h = n.title) == null
                              ? void 0
                              : h.call(n, { ...m, item: u });
                          }
                        : void 0,
                    },
                    d = cf.filterProps(i);
                  return o
                    ? g(cf, le({ value: i == null ? void 0 : i.value }, d), {
                        activator: (m) => {
                          let { props: h } = m;
                          const y = {
                            ...i,
                            ...h,
                            value: e.returnObject ? u : i.value,
                          };
                          return n.header
                            ? n.header({ props: y })
                            : g(ir, y, c);
                        },
                        default: () =>
                          g(ug, { items: o, returnObject: e.returnObject }, n),
                      })
                    : n.item
                    ? n.item({ props: i })
                    : g(ir, le(i, { value: e.returnObject ? u : i.value }), c);
                }))
          );
        }
      );
    },
  }),
  cg = K(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: "title" },
      itemValue: { type: [String, Array, Function], default: "value" },
      itemChildren: {
        type: [Boolean, String, Array, Function],
        default: "children",
      },
      itemProps: { type: [Boolean, String, Array, Function], default: "props" },
      returnObject: Boolean,
      valueComparator: { type: Function, default: ra },
    },
    "list-items"
  );
function Cs(e, t) {
  const n = Ot(t, e.itemTitle, t),
    a = Ot(t, e.itemValue, n),
    r = Ot(t, e.itemChildren),
    l =
      e.itemProps === !0
        ? typeof t == "object" && t != null && !Array.isArray(t)
          ? "children" in t
            ? Zt(t, ["children"])
            : t
          : void 0
        : Ot(t, e.itemProps),
    o = { title: n, value: a, ...l };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(r) ? dg(e, r) : void 0,
    raw: t,
  };
}
function dg(e, t) {
  const n = [];
  for (const a of t) n.push(Cs(e, a));
  return n;
}
function fg(e) {
  const t = S(() => dg(e, e.items)),
    n = S(() => t.value.some((l) => l.value === null));
  function a(l) {
    return (
      n.value || (l = l.filter((o) => o !== null)),
      l.map((o) =>
        e.returnObject && typeof o == "string"
          ? Cs(e, o)
          : t.value.find((i) => e.valueComparator(o, i.value)) || Cs(e, o)
      )
    );
  }
  function r(l) {
    return e.returnObject
      ? l.map((o) => {
          let { raw: i } = o;
          return i;
        })
      : l.map((o) => {
          let { value: i } = o;
          return i;
        });
  }
  return { items: t, transformIn: a, transformOut: r };
}
function gk(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function yk(e, t) {
  const n = Ot(t, e.itemType, "item"),
    a = gk(t) ? t : Ot(t, e.itemTitle),
    r = Ot(t, e.itemValue, void 0),
    l = Ot(t, e.itemChildren),
    o = e.itemProps === !0 ? Zt(t, ["children"]) : Ot(t, e.itemProps),
    i = { title: a, value: r, ...o };
  return {
    type: n,
    title: i.title,
    value: i.value,
    props: i,
    children: n === "item" && l ? vg(e, l) : void 0,
    raw: t,
  };
}
function vg(e, t) {
  const n = [];
  for (const a of t) n.push(yk(e, a));
  return n;
}
function bk(e) {
  return { items: S(() => vg(e, e.items)) };
}
const pk = K(
    {
      baseColor: String,
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      expandIcon: Ae,
      collapseIcon: Ae,
      lines: { type: [Boolean, String], default: "one" },
      slim: Boolean,
      nav: Boolean,
      "onClick:open": dt(),
      "onClick:select": dt(),
      "onUpdate:opened": dt(),
      ...ak({ selectStrategy: "single-leaf", openStrategy: "list" }),
      ...tn(),
      ...ke(),
      ...Vt(),
      ...Qt(),
      ...nn(),
      itemType: { type: String, default: "type" },
      ...cg(),
      ...ht(),
      ...He(),
      ...Ge(),
      ...fn({ variant: "text" }),
    },
    "VList"
  ),
  mg = fe()({
    name: "VList",
    props: pk(),
    emits: {
      "update:selected": (e) => !0,
      "update:activated": (e) => !0,
      "update:opened": (e) => !0,
      "click:open": (e) => !0,
      "click:activate": (e) => !0,
      "click:select": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const { items: a } = bk(e),
        { themeClasses: r } = Qe(e),
        { backgroundColorClasses: l, backgroundColorStyles: o } = It(
          ne(e, "bgColor")
        ),
        { borderClasses: i } = cn(e),
        { densityClasses: s } = Yt(e),
        { dimensionStyles: u } = en(e),
        { elevationClasses: c } = dn(e),
        { roundedClasses: d } = xt(e),
        { children: f, open: v, parents: m, select: h, getPath: y } = rk(e),
        p = S(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        w = ne(e, "activeColor"),
        x = ne(e, "baseColor"),
        E = ne(e, "color");
      ng(),
        Ft({
          VListGroup: {
            activeColor: w,
            baseColor: x,
            color: E,
            expandIcon: ne(e, "expandIcon"),
            collapseIcon: ne(e, "collapseIcon"),
          },
          VListItem: {
            activeClass: ne(e, "activeClass"),
            activeColor: w,
            baseColor: x,
            color: E,
            density: ne(e, "density"),
            disabled: ne(e, "disabled"),
            lines: ne(e, "lines"),
            nav: ne(e, "nav"),
            slim: ne(e, "slim"),
            variant: ne(e, "variant"),
          },
        });
      const k = he(!1),
        V = W();
      function A($) {
        k.value = !0;
      }
      function b($) {
        k.value = !1;
      }
      function C($) {
        var M;
        !k.value &&
          !(
            $.relatedTarget &&
            (M = V.value) != null &&
            M.contains($.relatedTarget)
          ) &&
          I();
      }
      function D($) {
        const M = $.target;
        if (!(!V.value || ["INPUT", "TEXTAREA"].includes(M.tagName))) {
          if ($.key === "ArrowDown") I("next");
          else if ($.key === "ArrowUp") I("prev");
          else if ($.key === "Home") I("first");
          else if ($.key === "End") I("last");
          else return;
          $.preventDefault();
        }
      }
      function P($) {
        k.value = !0;
      }
      function I($) {
        if (V.value) return Pr(V.value, $);
      }
      return (
        be(() =>
          g(
            e.tag,
            {
              ref: V,
              class: [
                "v-list",
                {
                  "v-list--disabled": e.disabled,
                  "v-list--nav": e.nav,
                  "v-list--slim": e.slim,
                },
                r.value,
                l.value,
                i.value,
                s.value,
                c.value,
                p.value,
                d.value,
                e.class,
              ],
              style: [o.value, u.value, e.style],
              tabindex: e.disabled || k.value ? -1 : 0,
              role: "listbox",
              "aria-activedescendant": void 0,
              onFocusin: A,
              onFocusout: b,
              onFocus: C,
              onKeydown: D,
              onMousedown: P,
            },
            {
              default: () => [
                g(ug, { items: a.value, returnObject: e.returnObject }, n),
              ],
            }
          )
        ),
        { open: v, select: h, focus: I, children: f, parents: m, getPath: y }
      );
    },
  }),
  Sk = K(
    {
      id: String,
      submenu: Boolean,
      ...Zt(
        cl({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: "connected",
          location: void 0,
          openDelay: 300,
          scrim: !1,
          scrollStrategy: "reposition",
          transition: { component: vu },
        }),
        ["absolute"]
      ),
    },
    "VMenu"
  ),
  hg = fe()({
    name: "VMenu",
    props: Sk(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ve(e, "modelValue"),
        { scopeId: r } = Oa(),
        { isRtl: l } = Nt(),
        o = Gt(),
        i = S(() => e.id || `v-menu-${o}`),
        s = W(),
        u = Ie(Ss, null),
        c = he(new Set());
      We(Ss, {
        register() {
          c.value.add(o);
        },
        unregister() {
          c.value.delete(o);
        },
        closeParents(y) {
          setTimeout(() => {
            var p;
            !c.value.size &&
              !e.persistent &&
              (y == null ||
                ((p = s.value) != null &&
                  p.contentEl &&
                  !jp(y, s.value.contentEl))) &&
              ((a.value = !1), u == null || u.closeParents());
          }, 40);
        },
      }),
        rt(() => {
          u == null || u.unregister(),
            document.removeEventListener("focusin", d);
        }),
        ho(() => (a.value = !1));
      async function d(y) {
        var x, E, k;
        const p = y.relatedTarget,
          w = y.target;
        await ze(),
          a.value &&
            p !== w &&
            (x = s.value) != null &&
            x.contentEl &&
            (E = s.value) != null &&
            E.globalTop &&
            ![document, s.value.contentEl].includes(w) &&
            !s.value.contentEl.contains(w) &&
            ((k = Lr(s.value.contentEl)[0]) == null || k.focus());
      }
      ce(
        a,
        (y) => {
          y
            ? (u == null || u.register(),
              Me && document.addEventListener("focusin", d, { once: !0 }))
            : (u == null || u.unregister(),
              Me && document.removeEventListener("focusin", d));
        },
        { immediate: !0 }
      );
      function f(y) {
        u == null || u.closeParents(y);
      }
      function v(y) {
        var p, w, x, E, k;
        if (!e.disabled)
          if (
            y.key === "Tab" ||
            (y.key === "Enter" && !e.closeOnContentClick)
          ) {
            if (
              y.key === "Enter" &&
              (y.target instanceof HTMLTextAreaElement ||
                (y.target instanceof HTMLInputElement &&
                  y.target.closest("form")))
            )
              return;
            y.key === "Enter" && y.preventDefault(),
              Xv(
                Lr((p = s.value) == null ? void 0 : p.contentEl, !1),
                y.shiftKey ? "prev" : "next",
                (A) => A.tabIndex >= 0
              ) ||
                ((a.value = !1),
                (x = (w = s.value) == null ? void 0 : w.activatorEl) == null ||
                  x.focus());
          } else
            e.submenu &&
              y.key === (l.value ? "ArrowRight" : "ArrowLeft") &&
              ((a.value = !1),
              (k = (E = s.value) == null ? void 0 : E.activatorEl) == null ||
                k.focus());
      }
      function m(y) {
        var w;
        if (e.disabled) return;
        const p = (w = s.value) == null ? void 0 : w.contentEl;
        p && a.value
          ? y.key === "ArrowDown"
            ? (y.preventDefault(), y.stopImmediatePropagation(), Pr(p, "next"))
            : y.key === "ArrowUp"
            ? (y.preventDefault(), y.stopImmediatePropagation(), Pr(p, "prev"))
            : e.submenu &&
              (y.key === (l.value ? "ArrowRight" : "ArrowLeft")
                ? (a.value = !1)
                : y.key === (l.value ? "ArrowLeft" : "ArrowRight") &&
                  (y.preventDefault(), Pr(p, "first")))
          : (e.submenu
              ? y.key === (l.value ? "ArrowLeft" : "ArrowRight")
              : ["ArrowDown", "ArrowUp"].includes(y.key)) &&
            ((a.value = !0),
            y.preventDefault(),
            setTimeout(() => setTimeout(() => m(y))));
      }
      const h = S(() =>
        le(
          {
            "aria-haspopup": "menu",
            "aria-expanded": String(a.value),
            "aria-owns": i.value,
            onKeydown: m,
          },
          e.activatorProps
        )
      );
      return (
        be(() => {
          const y = Qn.filterProps(e);
          return g(
            Qn,
            le(
              {
                ref: s,
                id: i.value,
                class: ["v-menu", e.class],
                style: e.style,
              },
              y,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (p) => (a.value = p),
                absolute: !0,
                activatorProps: h.value,
                location: e.location ?? (e.submenu ? "end" : "bottom"),
                "onClick:outside": f,
                onKeydown: v,
              },
              r
            ),
            {
              activator: n.activator,
              default: function () {
                for (
                  var p = arguments.length, w = new Array(p), x = 0;
                  x < p;
                  x++
                )
                  w[x] = arguments[x];
                return g(
                  qe,
                  { root: "VMenu" },
                  {
                    default: () => {
                      var E;
                      return [
                        (E = n.default) == null ? void 0 : E.call(n, ...w),
                      ];
                    },
                  }
                );
              },
            }
          );
        }),
        xn({ id: i, ΨopenChildren: c }, s)
      );
    },
  }),
  wk = K({ renderless: Boolean, ...ke() }, "VVirtualScrollItem"),
  Ck = fe()({
    name: "VVirtualScrollItem",
    inheritAttrs: !1,
    props: wk(),
    emits: { "update:height": (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const { resizeRef: l, contentRect: o } = Xn(void 0, "border");
      ce(
        () => {
          var i;
          return (i = o.value) == null ? void 0 : i.height;
        },
        (i) => {
          i != null && a("update:height", i);
        }
      ),
        be(() => {
          var i, s;
          return e.renderless
            ? g(ye, null, [
                (i = r.default) == null ? void 0 : i.call(r, { itemRef: l }),
              ])
            : g(
                "div",
                le(
                  {
                    ref: l,
                    class: ["v-virtual-scroll__item", e.class],
                    style: e.style,
                  },
                  n
                ),
                [(s = r.default) == null ? void 0 : s.call(r)]
              );
        });
    },
  }),
  xk = -1,
  _k = 1,
  Pi = 100,
  kk = K(
    {
      itemHeight: { type: [Number, String], default: null },
      height: [Number, String],
    },
    "virtual"
  );
function Ek(e, t) {
  const n = Rn(),
    a = he(0);
  vt(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const r = he(0),
    l = he(
      Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1
    ),
    o = he(0),
    i = he(0),
    s = W(),
    u = W();
  let c = 0;
  const { resizeRef: d, contentRect: f } = Xn();
  vt(() => {
    d.value = s.value;
  });
  const v = S(() => {
      var O;
      return s.value === document.documentElement
        ? n.height.value
        : ((O = f.value) == null ? void 0 : O.height) ||
            parseInt(e.height) ||
            0;
    }),
    m = S(() => !!(s.value && u.value && v.value && a.value));
  let h = Array.from({ length: t.value.length }),
    y = Array.from({ length: t.value.length });
  const p = he(0);
  let w = -1;
  function x(O) {
    return h[O] || a.value;
  }
  const E = Lp(() => {
      const O = performance.now();
      y[0] = 0;
      const L = t.value.length;
      for (let G = 1; G <= L - 1; G++) y[G] = (y[G - 1] || 0) + x(G - 1);
      p.value = Math.max(p.value, performance.now() - O);
    }, p),
    k = ce(m, (O) => {
      O &&
        (k(),
        (c = u.value.offsetTop),
        E.immediate(),
        B(),
        ~w &&
          ze(() => {
            Me &&
              window.requestAnimationFrame(() => {
                H(w), (w = -1);
              });
          }));
    });
  mt(() => {
    E.clear();
  });
  function V(O, L) {
    const G = h[O],
      oe = a.value;
    (a.value = oe ? Math.min(a.value, L) : L),
      (G !== L || oe !== a.value) && ((h[O] = L), E());
  }
  function A(O) {
    return (O = Bt(O, 0, t.value.length - 1)), y[O] || 0;
  }
  function b(O) {
    return Pk(y, O);
  }
  let C = 0,
    D = 0,
    P = 0;
  ce(v, (O, L) => {
    L &&
      (B(),
      O < L &&
        requestAnimationFrame(() => {
          (D = 0), B();
        }));
  });
  let I = -1;
  function $() {
    if (!s.value || !u.value) return;
    const O = s.value.scrollTop,
      L = performance.now();
    L - P > 500
      ? ((D = Math.sign(O - C)), (c = u.value.offsetTop))
      : (D = O - C),
      (C = O),
      (P = L),
      window.clearTimeout(I),
      (I = window.setTimeout(M, 500)),
      B();
  }
  function M() {
    !s.value || !u.value || ((D = 0), (P = 0), window.clearTimeout(I), B());
  }
  let N = -1;
  function B() {
    cancelAnimationFrame(N), (N = requestAnimationFrame(j));
  }
  function j() {
    if (!s.value || !v.value) return;
    const O = C - c,
      L = Math.sign(D),
      G = Math.max(0, O - Pi),
      oe = Bt(b(G), 0, t.value.length),
      X = O + v.value + Pi,
      ve = Bt(b(X) + 1, oe + 1, t.value.length);
    if ((L !== xk || oe < r.value) && (L !== _k || ve > l.value)) {
      const re = A(r.value) - A(oe),
        F = A(ve) - A(l.value);
      Math.max(re, F) > Pi
        ? ((r.value = oe), (l.value = ve))
        : (oe <= 0 && (r.value = oe), ve >= t.value.length && (l.value = ve));
    }
    (o.value = A(r.value)), (i.value = A(t.value.length) - A(l.value));
  }
  function H(O) {
    const L = A(O);
    !s.value || (O && !L) ? (w = O) : (s.value.scrollTop = L);
  }
  const z = S(() =>
    t.value.slice(r.value, l.value).map((O, L) => ({
      raw: O,
      index: L + r.value,
      key: Qs(O) && "value" in O ? O.value : L + r.value,
    }))
  );
  return (
    ce(
      t,
      () => {
        (h = Array.from({ length: t.value.length })),
          (y = Array.from({ length: t.value.length })),
          E.immediate(),
          B();
      },
      { deep: !0 }
    ),
    {
      calculateVisibleItems: B,
      containerRef: s,
      markerRef: u,
      computedItems: z,
      paddingTop: o,
      paddingBottom: i,
      scrollToIndex: H,
      handleScroll: $,
      handleScrollend: M,
      handleItemResize: V,
    }
  );
}
function Pk(e, t) {
  let n = e.length - 1,
    a = 0,
    r = 0,
    l = null,
    o = -1;
  if (e[n] < t) return n;
  for (; a <= n; )
    if (((r = (a + n) >> 1), (l = e[r]), l > t)) n = r - 1;
    else if (l < t) (o = r), (a = r + 1);
    else return l === t ? r : a;
  return o;
}
const Tk = K(
    {
      items: { type: Array, default: () => [] },
      renderless: Boolean,
      ...kk(),
      ...ke(),
      ...Qt(),
    },
    "VVirtualScroll"
  ),
  gg = fe()({
    name: "VVirtualScroll",
    props: Tk(),
    setup(e, t) {
      let { slots: n } = t;
      const a = Ze("VVirtualScroll"),
        { dimensionStyles: r } = en(e),
        {
          calculateVisibleItems: l,
          containerRef: o,
          markerRef: i,
          handleScroll: s,
          handleScrollend: u,
          handleItemResize: c,
          scrollToIndex: d,
          paddingTop: f,
          paddingBottom: v,
          computedItems: m,
        } = Ek(e, ne(e, "items"));
      return (
        Mt(
          () => e.renderless,
          () => {
            function h() {
              var w, x;
              const p = (
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1
              )
                ? "addEventListener"
                : "removeEventListener";
              o.value === document.documentElement
                ? (document[p]("scroll", s, { passive: !0 }),
                  document[p]("scrollend", u))
                : ((w = o.value) == null || w[p]("scroll", s, { passive: !0 }),
                  (x = o.value) == null || x[p]("scrollend", u));
            }
            Wt(() => {
              (o.value = im(a.vnode.el, !0)), h(!0);
            }),
              mt(h);
          }
        ),
        be(() => {
          const h = m.value.map((y) =>
            g(
              Ck,
              {
                key: y.key,
                renderless: e.renderless,
                "onUpdate:height": (p) => c(y.index, p),
              },
              {
                default: (p) => {
                  var w;
                  return (w = n.default) == null
                    ? void 0
                    : w.call(n, { item: y.raw, index: y.index, ...p });
                },
              }
            )
          );
          return e.renderless
            ? g(ye, null, [
                g(
                  "div",
                  {
                    ref: i,
                    class: "v-virtual-scroll__spacer",
                    style: { paddingTop: pe(f.value) },
                  },
                  null
                ),
                h,
                g(
                  "div",
                  {
                    class: "v-virtual-scroll__spacer",
                    style: { paddingBottom: pe(v.value) },
                  },
                  null
                ),
              ])
            : g(
                "div",
                {
                  ref: o,
                  class: ["v-virtual-scroll", e.class],
                  onScrollPassive: s,
                  onScrollend: u,
                  style: [r.value, e.style],
                },
                [
                  g(
                    "div",
                    {
                      ref: i,
                      class: "v-virtual-scroll__container",
                      style: {
                        paddingTop: pe(f.value),
                        paddingBottom: pe(v.value),
                      },
                    },
                    [h]
                  ),
                ]
              );
        }),
        { calculateVisibleItems: l, scrollToIndex: d }
      );
    },
  });
function yg(e, t) {
  const n = he(!1);
  let a;
  function r(i) {
    cancelAnimationFrame(a),
      (n.value = !0),
      (a = requestAnimationFrame(() => {
        a = requestAnimationFrame(() => {
          n.value = !1;
        });
      }));
  }
  async function l() {
    await new Promise((i) => requestAnimationFrame(i)),
      await new Promise((i) => requestAnimationFrame(i)),
      await new Promise((i) => requestAnimationFrame(i)),
      await new Promise((i) => {
        if (n.value) {
          const s = ce(n, () => {
            s(), i();
          });
        } else i();
      });
  }
  async function o(i) {
    var c, d;
    if (
      (i.key === "Tab" && ((c = t.value) == null || c.focus()),
      !["PageDown", "PageUp", "Home", "End"].includes(i.key))
    )
      return;
    const s = (d = e.value) == null ? void 0 : d.$el;
    if (!s) return;
    (i.key === "Home" || i.key === "End") &&
      s.scrollTo({
        top: i.key === "Home" ? 0 : s.scrollHeight,
        behavior: "smooth",
      }),
      await l();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (i.key === "PageDown" || i.key === "Home") {
      const f = s.getBoundingClientRect().top;
      for (const v of u)
        if (v.getBoundingClientRect().top >= f) {
          v.focus();
          break;
        }
    } else {
      const f = s.getBoundingClientRect().bottom;
      for (const v of [...u].reverse())
        if (v.getBoundingClientRect().bottom <= f) {
          v.focus();
          break;
        }
    }
  }
  return { onScrollPassive: r, onKeydown: o };
}
const bg = K(
    {
      chips: Boolean,
      closableChips: Boolean,
      closeText: { type: String, default: "$vuetify.close" },
      openText: { type: String, default: "$vuetify.open" },
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      listProps: { type: Object },
      menu: Boolean,
      menuIcon: { type: Ae, default: "$dropdown" },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: "$vuetify.noDataText" },
      openOnClear: Boolean,
      itemColor: String,
      ...cg({ itemChildren: !1 }),
    },
    "Select"
  ),
  Ak = K(
    {
      ...bg(),
      ...Zt(Eu({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
      ...dr({ transition: { component: vu } }),
    },
    "VSelect"
  ),
  Vu = fe()({
    name: "VSelect",
    props: Ak(),
    emits: {
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:menu": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const { t: a } = un(),
        r = W(),
        l = W(),
        o = W(),
        i = Ve(e, "menu"),
        s = S({
          get: () => i.value,
          set: (z) => {
            var O;
            (i.value && !z && (O = l.value) != null && O.ΨopenChildren.size) ||
              (i.value = z);
          },
        }),
        { items: u, transformIn: c, transformOut: d } = fg(e),
        f = Ve(
          e,
          "modelValue",
          [],
          (z) => c(z === null ? [null] : ct(z)),
          (z) => {
            const O = d(z);
            return e.multiple ? O : O[0] ?? null;
          }
        ),
        v = S(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(f.value)
            : typeof e.counterValue == "number"
            ? e.counterValue
            : f.value.length
        ),
        m = Cu(e),
        h = S(() => f.value.map((z) => z.value)),
        y = he(!1),
        p = S(() => (s.value ? e.closeText : e.openText));
      let w = "",
        x;
      const E = S(() =>
          e.hideSelected
            ? u.value.filter(
                (z) => !f.value.some((O) => e.valueComparator(O, z))
              )
            : u.value
        ),
        k = S(
          () =>
            (e.hideNoData && !E.value.length) ||
            m.isReadonly.value ||
            m.isDisabled.value
        ),
        V = S(() => {
          var z;
          return {
            ...e.menuProps,
            activatorProps: {
              ...(((z = e.menuProps) == null ? void 0 : z.activatorProps) ||
                {}),
              "aria-haspopup": "listbox",
            },
          };
        }),
        A = W(),
        b = yg(A, r);
      function C(z) {
        e.openOnClear && (s.value = !0);
      }
      function D() {
        k.value || (s.value = !s.value);
      }
      function P(z) {
        Ki(z) && I(z);
      }
      function I(z) {
        var oe, X;
        if (!z.key || m.isReadonly.value) return;
        ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(z.key) &&
          z.preventDefault(),
          ["Enter", "ArrowDown", " "].includes(z.key) && (s.value = !0),
          ["Escape", "Tab"].includes(z.key) && (s.value = !1),
          z.key === "Home"
            ? (oe = A.value) == null || oe.focus("first")
            : z.key === "End" && ((X = A.value) == null || X.focus("last"));
        const O = 1e3;
        if (e.multiple || !Ki(z)) return;
        const L = performance.now();
        L - x > O && (w = ""), (w += z.key.toLowerCase()), (x = L);
        const G = u.value.find((ve) => ve.title.toLowerCase().startsWith(w));
        if (G !== void 0) {
          f.value = [G];
          const ve = E.value.indexOf(G);
          Me &&
            window.requestAnimationFrame(() => {
              var re;
              ve >= 0 && ((re = o.value) == null || re.scrollToIndex(ve));
            });
        }
      }
      function $(z) {
        let O =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (!z.props.disabled)
          if (e.multiple) {
            const L = f.value.findIndex((oe) =>
                e.valueComparator(oe.value, z.value)
              ),
              G = O ?? !~L;
            if (~L) {
              const oe = G ? [...f.value, z] : [...f.value];
              oe.splice(L, 1), (f.value = oe);
            } else G && (f.value = [...f.value, z]);
          } else {
            const L = O !== !1;
            (f.value = L ? [z] : []),
              ze(() => {
                s.value = !1;
              });
          }
      }
      function M(z) {
        var O;
        ((O = A.value) != null && O.$el.contains(z.relatedTarget)) ||
          (s.value = !1);
      }
      function N() {
        var z;
        e.eager && ((z = o.value) == null || z.calculateVisibleItems());
      }
      function B() {
        var z;
        y.value && ((z = r.value) == null || z.focus());
      }
      function j(z) {
        y.value = !0;
      }
      function H(z) {
        if (z == null) f.value = [];
        else if (Qa(r.value, ":autofill") || Qa(r.value, ":-webkit-autofill")) {
          const O = u.value.find((L) => L.title === z);
          O && $(O);
        } else r.value && (r.value.value = "");
      }
      return (
        ce(s, () => {
          if (!e.hideSelected && s.value && f.value.length) {
            const z = E.value.findIndex((O) =>
              f.value.some((L) => e.valueComparator(L.value, O.value))
            );
            Me &&
              window.requestAnimationFrame(() => {
                var O;
                z >= 0 && ((O = o.value) == null || O.scrollToIndex(z));
              });
          }
        }),
        ce(
          () => e.items,
          (z, O) => {
            s.value || (y.value && !O.length && z.length && (s.value = !0));
          }
        ),
        be(() => {
          const z = !!(e.chips || n.chip),
            O = !!(
              !e.hideNoData ||
              E.value.length ||
              n["prepend-item"] ||
              n["append-item"] ||
              n["no-data"]
            ),
            L = f.value.length > 0,
            G = ka.filterProps(e),
            oe =
              L || (!y.value && e.label && !e.persistentPlaceholder)
                ? void 0
                : e.placeholder;
          return g(
            ka,
            le({ ref: r }, G, {
              modelValue: f.value.map((X) => X.props.value).join(", "),
              "onUpdate:modelValue": H,
              focused: y.value,
              "onUpdate:focused": (X) => (y.value = X),
              validationValue: f.externalValue,
              counterValue: v.value,
              dirty: L,
              class: [
                "v-select",
                {
                  "v-select--active-menu": s.value,
                  "v-select--chips": !!e.chips,
                  [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
                  "v-select--selected": f.value.length,
                  "v-select--selection-slot": !!n.selection,
                },
                e.class,
              ],
              style: e.style,
              inputmode: "none",
              placeholder: oe,
              "onClick:clear": C,
              "onMousedown:control": D,
              onBlur: M,
              onKeydown: I,
              "aria-label": a(p.value),
              title: a(p.value),
            }),
            {
              ...n,
              default: () =>
                g(ye, null, [
                  g(
                    hg,
                    le(
                      {
                        ref: l,
                        modelValue: s.value,
                        "onUpdate:modelValue": (X) => (s.value = X),
                        activator: "parent",
                        contentClass: "v-select__content",
                        disabled: k.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: N,
                        onAfterLeave: B,
                      },
                      V.value
                    ),
                    {
                      default: () => [
                        O &&
                          g(
                            mg,
                            le(
                              {
                                ref: A,
                                selected: h.value,
                                selectStrategy: e.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (X) => X.preventDefault(),
                                onKeydown: P,
                                onFocusin: j,
                                tabindex: "-1",
                                "aria-live": "polite",
                                color: e.itemColor ?? e.color,
                              },
                              b,
                              e.listProps
                            ),
                            {
                              default: () => {
                                var X, ve, re;
                                return [
                                  (X = n["prepend-item"]) == null
                                    ? void 0
                                    : X.call(n),
                                  !E.value.length &&
                                    !e.hideNoData &&
                                    (((ve = n["no-data"]) == null
                                      ? void 0
                                      : ve.call(n)) ??
                                      g(
                                        ir,
                                        {
                                          key: "no-data",
                                          title: a(e.noDataText),
                                        },
                                        null
                                      )),
                                  g(
                                    gg,
                                    { ref: o, renderless: !0, items: E.value },
                                    {
                                      default: (F) => {
                                        var se;
                                        let {
                                          item: Z,
                                          index: ee,
                                          itemRef: Q,
                                        } = F;
                                        const Y = le(Z.props, {
                                          ref: Q,
                                          key: Z.value,
                                          onClick: () => $(Z, null),
                                        });
                                        return (
                                          ((se = n.item) == null
                                            ? void 0
                                            : se.call(n, {
                                                item: Z,
                                                index: ee,
                                                props: Y,
                                              })) ??
                                          g(ir, le(Y, { role: "option" }), {
                                            prepend: (_) => {
                                              let { isSelected: T } = _;
                                              return g(ye, null, [
                                                e.multiple && !e.hideSelected
                                                  ? g(
                                                      _a,
                                                      {
                                                        key: Z.value,
                                                        modelValue: T,
                                                        ripple: !1,
                                                        tabindex: "-1",
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                Z.props.prependAvatar &&
                                                  g(
                                                    $n,
                                                    {
                                                      image:
                                                        Z.props.prependAvatar,
                                                    },
                                                    null
                                                  ),
                                                Z.props.prependIcon &&
                                                  g(
                                                    De,
                                                    {
                                                      icon: Z.props.prependIcon,
                                                    },
                                                    null
                                                  ),
                                              ]);
                                            },
                                          })
                                        );
                                      },
                                    }
                                  ),
                                  (re = n["append-item"]) == null
                                    ? void 0
                                    : re.call(n),
                                ];
                              },
                            }
                          ),
                      ],
                    }
                  ),
                  f.value.map((X, ve) => {
                    function re(Q) {
                      Q.stopPropagation(), Q.preventDefault(), $(X, !1);
                    }
                    const F = {
                        "onClick:close": re,
                        onKeydown(Q) {
                          (Q.key !== "Enter" && Q.key !== " ") ||
                            (Q.preventDefault(), Q.stopPropagation(), re(Q));
                        },
                        onMousedown(Q) {
                          Q.preventDefault(), Q.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      },
                      Z = z ? !!n.chip : !!n.selection,
                      ee = Z
                        ? nu(
                            z
                              ? n.chip({ item: X, index: ve, props: F })
                              : n.selection({ item: X, index: ve })
                          )
                        : void 0;
                    if (!(Z && !ee))
                      return g(
                        "div",
                        { key: X.value, class: "v-select__selection" },
                        [
                          z
                            ? n.chip
                              ? g(
                                  qe,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: "small",
                                        text: X.title,
                                      },
                                    },
                                  },
                                  { default: () => [ee] }
                                )
                              : g(
                                  Pu,
                                  le(
                                    {
                                      key: "chip",
                                      closable: e.closableChips,
                                      size: "small",
                                      text: X.title,
                                      disabled: X.props.disabled,
                                    },
                                    F
                                  ),
                                  null
                                )
                            : ee ??
                              g("span", { class: "v-select__selection-text" }, [
                                X.title,
                                e.multiple &&
                                  ve < f.value.length - 1 &&
                                  g(
                                    "span",
                                    { class: "v-select__selection-comma" },
                                    [je(",")]
                                  ),
                              ]),
                        ]
                      );
                  }),
                ]),
              "append-inner": function () {
                var F;
                for (
                  var X = arguments.length, ve = new Array(X), re = 0;
                  re < X;
                  re++
                )
                  ve[re] = arguments[re];
                return g(ye, null, [
                  (F = n["append-inner"]) == null ? void 0 : F.call(n, ...ve),
                  e.menuIcon
                    ? g(
                        De,
                        { class: "v-select__menu-icon", icon: e.menuIcon },
                        null
                      )
                    : void 0,
                ]);
              },
            }
          );
        }),
        xn({ isFocused: y, menu: s, select: $ }, r)
      );
    },
  }),
  Ik = (e, t, n) =>
    e == null || t == null
      ? -1
      : e
          .toString()
          .toLocaleLowerCase()
          .indexOf(t.toString().toLocaleLowerCase()),
  pg = K(
    {
      customFilter: Function,
      customKeyFilter: Object,
      filterKeys: [Array, String],
      filterMode: { type: String, default: "intersection" },
      noFilter: Boolean,
    },
    "filter"
  );
function Vk(e, t, n) {
  var i;
  const a = [],
    r = (n == null ? void 0 : n.default) ?? Ik,
    l = n != null && n.filterKeys ? ct(n.filterKeys) : !1,
    o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ct(e[s]),
      d = {},
      f = {};
    let v = -1;
    if ((t || o > 0) && !(n != null && n.noFilter)) {
      if (typeof u == "object") {
        const y = l || Object.keys(c);
        for (const p of y) {
          const w = Ot(c, p),
            x =
              (i = n == null ? void 0 : n.customKeyFilter) == null
                ? void 0
                : i[p];
          if (((v = x ? x(w, t, u) : r(w, t, u)), v !== -1 && v !== !1))
            x ? (d[p] = v) : (f[p] = v);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else (v = r(u, t, u)), v !== -1 && v !== !1 && (f.title = v);
      const m = Object.keys(f).length,
        h = Object.keys(d).length;
      if (
        (!m && !h) ||
        ((n == null ? void 0 : n.filterMode) === "union" && h !== o && !m) ||
        ((n == null ? void 0 : n.filterMode) === "intersection" &&
          (h !== o || !m))
      )
        continue;
    }
    a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function Sg(e, t, n, a) {
  const r = W([]),
    l = W(new Map()),
    o = S(() =>
      a != null && a.transform ? Se(t).map((s) => [s, a.transform(s)]) : Se(t)
    );
  vt(() => {
    const s = typeof n == "function" ? n() : Se(n),
      u = typeof s != "string" && typeof s != "number" ? "" : String(s),
      c = Vk(o.value, u, {
        customKeyFilter: {
          ...e.customKeyFilter,
          ...Se(a == null ? void 0 : a.customKeyFilter),
        },
        default: e.customFilter,
        filterKeys: e.filterKeys,
        filterMode: e.filterMode,
        noFilter: e.noFilter,
      }),
      d = Se(t),
      f = [],
      v = new Map();
    c.forEach((m) => {
      let { index: h, matches: y } = m;
      const p = d[h];
      f.push(p), v.set(p.value, y);
    }),
      (r.value = f),
      (l.value = v);
  });
  function i(s) {
    return l.value.get(s.value);
  }
  return { filteredItems: r, filteredMatches: l, getMatches: i };
}
function Dk(e, t, n) {
  if (t == null) return e;
  if (Array.isArray(t)) throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t
    ? g(ye, null, [
        g("span", { class: "v-autocomplete__unmask" }, [e.substr(0, t)]),
        g("span", { class: "v-autocomplete__mask" }, [e.substr(t, n)]),
        g("span", { class: "v-autocomplete__unmask" }, [e.substr(t + n)]),
      ])
    : e;
}
const Ok = K(
    {
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: Boolean,
      search: String,
      ...pg({ filterKeys: ["title"] }),
      ...bg(),
      ...Zt(Eu({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
      ...dr({ transition: !1 }),
    },
    "VAutocomplete"
  ),
  $k = fe()({
    name: "VAutocomplete",
    props: Ok(),
    emits: {
      "update:focused": (e) => !0,
      "update:search": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:menu": (e) => !0,
    },
    setup(e, t) {
      let { slots: n } = t;
      const { t: a } = un(),
        r = W(),
        l = he(!1),
        o = he(!0),
        i = he(!1),
        s = W(),
        u = W(),
        c = Ve(e, "menu"),
        d = S({
          get: () => c.value,
          set: (Y) => {
            var se;
            (c.value &&
              !Y &&
              (se = s.value) != null &&
              se.ΨopenChildren.size) ||
              (c.value = Y);
          },
        }),
        f = he(-1),
        v = S(() => {
          var Y;
          return (Y = r.value) == null ? void 0 : Y.color;
        }),
        m = S(() => (d.value ? e.closeText : e.openText)),
        { items: h, transformIn: y, transformOut: p } = fg(e),
        { textColorClasses: w, textColorStyles: x } = Xt(v),
        E = Ve(e, "search", ""),
        k = Ve(
          e,
          "modelValue",
          [],
          (Y) => y(Y === null ? [null] : ct(Y)),
          (Y) => {
            const se = p(Y);
            return e.multiple ? se : se[0] ?? null;
          }
        ),
        V = S(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(k.value)
            : typeof e.counterValue == "number"
            ? e.counterValue
            : k.value.length
        ),
        A = Cu(e),
        { filteredItems: b, getMatches: C } = Sg(e, h, () =>
          o.value ? "" : E.value
        ),
        D = S(() =>
          e.hideSelected
            ? b.value.filter((Y) => !k.value.some((se) => se.value === Y.value))
            : b.value
        ),
        P = S(() => !!(e.chips || n.chip)),
        I = S(() => P.value || !!n.selection),
        $ = S(() => k.value.map((Y) => Y.props.value)),
        M = S(() => {
          var se;
          return (
            (e.autoSelectFirst === !0 ||
              (e.autoSelectFirst === "exact" &&
                E.value === ((se = D.value[0]) == null ? void 0 : se.title))) &&
            D.value.length > 0 &&
            !o.value &&
            !i.value
          );
        }),
        N = S(
          () =>
            (e.hideNoData && !D.value.length) ||
            A.isReadonly.value ||
            A.isDisabled.value
        ),
        B = W(),
        j = yg(B, r);
      function H(Y) {
        e.openOnClear && (d.value = !0), (E.value = "");
      }
      function z() {
        N.value || (d.value = !0);
      }
      function O(Y) {
        N.value ||
          (l.value && (Y.preventDefault(), Y.stopPropagation()),
          (d.value = !d.value));
      }
      function L(Y) {
        var se;
        Ki(Y) && ((se = r.value) == null || se.focus());
      }
      function G(Y) {
        var T, R, q;
        if (A.isReadonly.value) return;
        const se = r.value.selectionStart,
          _ = k.value.length;
        if (
          ((f.value > -1 ||
            ["Enter", "ArrowDown", "ArrowUp"].includes(Y.key)) &&
            Y.preventDefault(),
          ["Enter", "ArrowDown"].includes(Y.key) && (d.value = !0),
          ["Escape"].includes(Y.key) && (d.value = !1),
          M.value &&
            ["Enter", "Tab"].includes(Y.key) &&
            !k.value.some((U) => {
              let { value: J } = U;
              return J === D.value[0].value;
            }) &&
            Q(D.value[0]),
          Y.key === "ArrowDown" &&
            M.value &&
            ((T = B.value) == null || T.focus("next")),
          ["Backspace", "Delete"].includes(Y.key))
        ) {
          if (!e.multiple && I.value && k.value.length > 0 && !E.value)
            return Q(k.value[0], !1);
          if (~f.value) {
            const U = f.value;
            Q(k.value[f.value], !1), (f.value = U >= _ - 1 ? _ - 2 : U);
          } else Y.key === "Backspace" && !E.value && (f.value = _ - 1);
        }
        if (e.multiple) {
          if (Y.key === "ArrowLeft") {
            if (f.value < 0 && se > 0) return;
            const U = f.value > -1 ? f.value - 1 : _ - 1;
            k.value[U]
              ? (f.value = U)
              : ((f.value = -1),
                r.value.setSelectionRange(
                  (R = E.value) == null ? void 0 : R.length,
                  (q = E.value) == null ? void 0 : q.length
                ));
          }
          if (Y.key === "ArrowRight") {
            if (f.value < 0) return;
            const U = f.value + 1;
            k.value[U]
              ? (f.value = U)
              : ((f.value = -1), r.value.setSelectionRange(0, 0));
          }
        }
      }
      function oe(Y) {
        if (Qa(r.value, ":autofill") || Qa(r.value, ":-webkit-autofill")) {
          const se = h.value.find((_) => _.title === Y.target.value);
          se && Q(se);
        }
      }
      function X() {
        var Y;
        e.eager && ((Y = u.value) == null || Y.calculateVisibleItems());
      }
      function ve() {
        var Y;
        l.value && ((o.value = !0), (Y = r.value) == null || Y.focus());
      }
      function re(Y) {
        (l.value = !0),
          setTimeout(() => {
            i.value = !0;
          });
      }
      function F(Y) {
        i.value = !1;
      }
      function Z(Y) {
        (Y == null || (Y === "" && !e.multiple && !I.value)) && (k.value = []);
      }
      const ee = he(!1);
      function Q(Y) {
        let se =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (!(!Y || Y.props.disabled))
          if (e.multiple) {
            const _ = k.value.findIndex((R) =>
                e.valueComparator(R.value, Y.value)
              ),
              T = se ?? !~_;
            if (~_) {
              const R = T ? [...k.value, Y] : [...k.value];
              R.splice(_, 1), (k.value = R);
            } else T && (k.value = [...k.value, Y]);
            e.clearOnSelect && (E.value = "");
          } else {
            const _ = se !== !1;
            (k.value = _ ? [Y] : []),
              (E.value = _ && !I.value ? Y.title : ""),
              ze(() => {
                (d.value = !1), (o.value = !0);
              });
          }
      }
      return (
        ce(l, (Y, se) => {
          var _;
          Y !== se &&
            (Y
              ? ((ee.value = !0),
                (E.value =
                  e.multiple || I.value
                    ? ""
                    : String(
                        ((_ = k.value.at(-1)) == null
                          ? void 0
                          : _.props.title) ?? ""
                      )),
                (o.value = !0),
                ze(() => (ee.value = !1)))
              : (!e.multiple && E.value == null && (k.value = []),
                (d.value = !1),
                k.value.some((T) => {
                  let { title: R } = T;
                  return R === E.value;
                }) || (E.value = ""),
                (f.value = -1)));
        }),
        ce(E, (Y) => {
          !l.value || ee.value || (Y && (d.value = !0), (o.value = !Y));
        }),
        ce(d, () => {
          if (!e.hideSelected && d.value && k.value.length) {
            const Y = D.value.findIndex((se) =>
              k.value.some((_) => se.value === _.value)
            );
            Me &&
              window.requestAnimationFrame(() => {
                var se;
                Y >= 0 && ((se = u.value) == null || se.scrollToIndex(Y));
              });
          }
        }),
        ce(
          () => e.items,
          (Y, se) => {
            d.value || (l.value && !se.length && Y.length && (d.value = !0));
          }
        ),
        be(() => {
          const Y = !!(
              !e.hideNoData ||
              D.value.length ||
              n["prepend-item"] ||
              n["append-item"] ||
              n["no-data"]
            ),
            se = k.value.length > 0,
            _ = ka.filterProps(e);
          return g(
            ka,
            le({ ref: r }, _, {
              modelValue: E.value,
              "onUpdate:modelValue": [(T) => (E.value = T), Z],
              focused: l.value,
              "onUpdate:focused": (T) => (l.value = T),
              validationValue: k.externalValue,
              counterValue: V.value,
              dirty: se,
              onChange: oe,
              class: [
                "v-autocomplete",
                `v-autocomplete--${e.multiple ? "multiple" : "single"}`,
                {
                  "v-autocomplete--active-menu": d.value,
                  "v-autocomplete--chips": !!e.chips,
                  "v-autocomplete--selection-slot": !!I.value,
                  "v-autocomplete--selecting-index": f.value > -1,
                },
                e.class,
              ],
              style: e.style,
              readonly: A.isReadonly.value,
              placeholder: se ? void 0 : e.placeholder,
              "onClick:clear": H,
              "onMousedown:control": z,
              onKeydown: G,
            }),
            {
              ...n,
              default: () =>
                g(ye, null, [
                  g(
                    hg,
                    le(
                      {
                        ref: s,
                        modelValue: d.value,
                        "onUpdate:modelValue": (T) => (d.value = T),
                        activator: "parent",
                        contentClass: "v-autocomplete__content",
                        disabled: N.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: X,
                        onAfterLeave: ve,
                      },
                      e.menuProps
                    ),
                    {
                      default: () => [
                        Y &&
                          g(
                            mg,
                            le(
                              {
                                ref: B,
                                selected: $.value,
                                selectStrategy: e.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (T) => T.preventDefault(),
                                onKeydown: L,
                                onFocusin: re,
                                onFocusout: F,
                                tabindex: "-1",
                                "aria-live": "polite",
                                color: e.itemColor ?? e.color,
                              },
                              j,
                              e.listProps
                            ),
                            {
                              default: () => {
                                var T, R, q;
                                return [
                                  (T = n["prepend-item"]) == null
                                    ? void 0
                                    : T.call(n),
                                  !D.value.length &&
                                    !e.hideNoData &&
                                    (((R = n["no-data"]) == null
                                      ? void 0
                                      : R.call(n)) ??
                                      g(
                                        ir,
                                        {
                                          key: "no-data",
                                          title: a(e.noDataText),
                                        },
                                        null
                                      )),
                                  g(
                                    gg,
                                    { ref: u, renderless: !0, items: D.value },
                                    {
                                      default: (U) => {
                                        var te;
                                        let {
                                          item: J,
                                          index: de,
                                          itemRef: ae,
                                        } = U;
                                        const ie = le(J.props, {
                                          ref: ae,
                                          key: J.value,
                                          active:
                                            M.value && de === 0 ? !0 : void 0,
                                          onClick: () => Q(J, null),
                                        });
                                        return (
                                          ((te = n.item) == null
                                            ? void 0
                                            : te.call(n, {
                                                item: J,
                                                index: de,
                                                props: ie,
                                              })) ??
                                          g(ir, le(ie, { role: "option" }), {
                                            prepend: (Ce) => {
                                              let { isSelected: me } = Ce;
                                              return g(ye, null, [
                                                e.multiple && !e.hideSelected
                                                  ? g(
                                                      _a,
                                                      {
                                                        key: J.value,
                                                        modelValue: me,
                                                        ripple: !1,
                                                        tabindex: "-1",
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                J.props.prependAvatar &&
                                                  g(
                                                    $n,
                                                    {
                                                      image:
                                                        J.props.prependAvatar,
                                                    },
                                                    null
                                                  ),
                                                J.props.prependIcon &&
                                                  g(
                                                    De,
                                                    {
                                                      icon: J.props.prependIcon,
                                                    },
                                                    null
                                                  ),
                                              ]);
                                            },
                                            title: () => {
                                              var Ce, me;
                                              return o.value
                                                ? J.title
                                                : Dk(
                                                    J.title,
                                                    (Ce = C(J)) == null
                                                      ? void 0
                                                      : Ce.title,
                                                    ((me = E.value) == null
                                                      ? void 0
                                                      : me.length) ?? 0
                                                  );
                                            },
                                          })
                                        );
                                      },
                                    }
                                  ),
                                  (q = n["append-item"]) == null
                                    ? void 0
                                    : q.call(n),
                                ];
                              },
                            }
                          ),
                      ],
                    }
                  ),
                  k.value.map((T, R) => {
                    function q(ae) {
                      ae.stopPropagation(), ae.preventDefault(), Q(T, !1);
                    }
                    const U = {
                        "onClick:close": q,
                        onKeydown(ae) {
                          (ae.key !== "Enter" && ae.key !== " ") ||
                            (ae.preventDefault(), ae.stopPropagation(), q(ae));
                        },
                        onMousedown(ae) {
                          ae.preventDefault(), ae.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      },
                      J = P.value ? !!n.chip : !!n.selection,
                      de = J
                        ? nu(
                            P.value
                              ? n.chip({ item: T, index: R, props: U })
                              : n.selection({ item: T, index: R })
                          )
                        : void 0;
                    if (!(J && !de))
                      return g(
                        "div",
                        {
                          key: T.value,
                          class: [
                            "v-autocomplete__selection",
                            R === f.value && [
                              "v-autocomplete__selection--selected",
                              w.value,
                            ],
                          ],
                          style: R === f.value ? x.value : {},
                        },
                        [
                          P.value
                            ? n.chip
                              ? g(
                                  qe,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: "small",
                                        text: T.title,
                                      },
                                    },
                                  },
                                  { default: () => [de] }
                                )
                              : g(
                                  Pu,
                                  le(
                                    {
                                      key: "chip",
                                      closable: e.closableChips,
                                      size: "small",
                                      text: T.title,
                                      disabled: T.props.disabled,
                                    },
                                    U
                                  ),
                                  null
                                )
                            : de ??
                              g(
                                "span",
                                { class: "v-autocomplete__selection-text" },
                                [
                                  T.title,
                                  e.multiple &&
                                    R < k.value.length - 1 &&
                                    g(
                                      "span",
                                      {
                                        class:
                                          "v-autocomplete__selection-comma",
                                      },
                                      [je(",")]
                                    ),
                                ]
                              ),
                        ]
                      );
                  }),
                ]),
              "append-inner": function () {
                var U;
                for (
                  var T = arguments.length, R = new Array(T), q = 0;
                  q < T;
                  q++
                )
                  R[q] = arguments[q];
                return g(ye, null, [
                  (U = n["append-inner"]) == null ? void 0 : U.call(n, ...R),
                  e.menuIcon
                    ? g(
                        De,
                        {
                          class: "v-autocomplete__menu-icon",
                          icon: e.menuIcon,
                          onMousedown: O,
                          onClick: Np,
                          "aria-label": a(m.value),
                          title: a(m.value),
                          tabindex: "-1",
                        },
                        null
                      )
                    : void 0,
                ]);
              },
            }
          );
        }),
        xn(
          {
            isFocused: l,
            isPristine: o,
            menu: d,
            search: E,
            filteredItems: b,
            select: Q,
          },
          r
        )
      );
    },
  }),
  Mk = K(
    {
      baseColor: String,
      bgColor: String,
      color: String,
      grow: Boolean,
      mode: {
        type: String,
        validator: (e) => !e || ["horizontal", "shift"].includes(e),
      },
      height: { type: [Number, String], default: 56 },
      active: { type: Boolean, default: !0 },
      ...tn(),
      ...ke(),
      ...Vt(),
      ...nn(),
      ...ht(),
      ...ko({ name: "bottom-navigation" }),
      ...He({ tag: "header" }),
      ...Do({ selectedClass: "v-btn--selected" }),
      ...Ge(),
    },
    "VBottomNavigation"
  ),
  Bk = fe()({
    name: "VBottomNavigation",
    props: Mk(),
    emits: { "update:active": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = AS(),
        { borderClasses: r } = cn(e),
        { backgroundColorClasses: l, backgroundColorStyles: o } = It(
          ne(e, "bgColor")
        ),
        { densityClasses: i } = Yt(e),
        { elevationClasses: s } = dn(e),
        { roundedClasses: u } = xt(e),
        { ssrBootStyles: c } = fr(),
        d = S(
          () =>
            Number(e.height) -
            (e.density === "comfortable" ? 8 : 0) -
            (e.density === "compact" ? 16 : 0)
        ),
        f = Ve(e, "active", e.active),
        { layoutItemStyles: v } = Eo({
          id: e.name,
          order: S(() => parseInt(e.order, 10)),
          position: S(() => "bottom"),
          layoutSize: S(() => (f.value ? d.value : 0)),
          elementSize: d,
          active: f,
          absolute: ne(e, "absolute"),
        });
      return (
        ll(e, bu),
        Ft(
          {
            VBtn: {
              baseColor: ne(e, "baseColor"),
              color: ne(e, "color"),
              density: ne(e, "density"),
              stacked: S(() => e.mode !== "horizontal"),
              variant: "text",
            },
          },
          { scoped: !0 }
        ),
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-bottom-navigation",
                {
                  "v-bottom-navigation--active": f.value,
                  "v-bottom-navigation--grow": e.grow,
                  "v-bottom-navigation--shift": e.mode === "shift",
                },
                a.value,
                l.value,
                r.value,
                i.value,
                s.value,
                u.value,
                e.class,
              ],
              style: [
                o.value,
                v.value,
                { height: pe(d.value) },
                c.value,
                e.style,
              ],
            },
            {
              default: () => [
                n.default &&
                  g("div", { class: "v-bottom-navigation__content" }, [
                    n.default(),
                  ]),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  Lk = K(
    {
      fullscreen: Boolean,
      retainFocus: { type: Boolean, default: !0 },
      scrollable: Boolean,
      ...cl({
        origin: "center center",
        scrollStrategy: "block",
        transition: { component: vu },
        zIndex: 2400,
      }),
    },
    "VDialog"
  ),
  Rk = fe()({
    name: "VDialog",
    props: Lk(),
    emits: {
      "update:modelValue": (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(e, t) {
      let { emit: n, slots: a } = t;
      const r = Ve(e, "modelValue"),
        { scopeId: l } = Oa(),
        o = W();
      function i(c) {
        var v, m;
        const d = c.relatedTarget,
          f = c.target;
        if (
          d !== f &&
          (v = o.value) != null &&
          v.contentEl &&
          (m = o.value) != null &&
          m.globalTop &&
          ![document, o.value.contentEl].includes(f) &&
          !o.value.contentEl.contains(f)
        ) {
          const h = Lr(o.value.contentEl);
          if (!h.length) return;
          const y = h[0],
            p = h[h.length - 1];
          d === y ? p.focus() : y.focus();
        }
      }
      rt(() => {
        document.removeEventListener("focusin", i);
      }),
        Me &&
          ce(
            () => r.value && e.retainFocus,
            (c) => {
              c
                ? document.addEventListener("focusin", i)
                : document.removeEventListener("focusin", i);
            },
            { immediate: !0 }
          );
      function s() {
        var c;
        n("afterEnter"),
          (c = o.value) != null &&
            c.contentEl &&
            !o.value.contentEl.contains(document.activeElement) &&
            o.value.contentEl.focus({ preventScroll: !0 });
      }
      function u() {
        n("afterLeave");
      }
      return (
        ce(r, async (c) => {
          var d;
          c ||
            (await ze(),
            (d = o.value.activatorEl) == null ||
              d.focus({ preventScroll: !0 }));
        }),
        be(() => {
          const c = Qn.filterProps(e),
            d = le({ "aria-haspopup": "dialog" }, e.activatorProps),
            f = le({ tabindex: -1 }, e.contentProps);
          return g(
            Qn,
            le(
              {
                ref: o,
                class: [
                  "v-dialog",
                  {
                    "v-dialog--fullscreen": e.fullscreen,
                    "v-dialog--scrollable": e.scrollable,
                  },
                  e.class,
                ],
                style: e.style,
              },
              c,
              {
                modelValue: r.value,
                "onUpdate:modelValue": (v) => (r.value = v),
                "aria-modal": "true",
                activatorProps: d,
                contentProps: f,
                height: e.fullscreen ? void 0 : e.height,
                width: e.fullscreen ? void 0 : e.width,
                maxHeight: e.fullscreen ? void 0 : e.maxHeight,
                maxWidth: e.fullscreen ? void 0 : e.maxWidth,
                role: "dialog",
                onAfterEnter: s,
                onAfterLeave: u,
              },
              l
            ),
            {
              activator: a.activator,
              default: function () {
                for (
                  var v = arguments.length, m = new Array(v), h = 0;
                  h < v;
                  h++
                )
                  m[h] = arguments[h];
                return g(
                  qe,
                  { root: "VDialog" },
                  {
                    default: () => {
                      var y;
                      return [
                        (y = a.default) == null ? void 0 : y.call(a, ...m),
                      ];
                    },
                  }
                );
              },
            }
          );
        }),
        xn({}, o)
      );
    },
  }),
  Fk = K(
    {
      expandOnClick: Boolean,
      showExpand: Boolean,
      expanded: { type: Array, default: () => [] },
    },
    "DataTable-expand"
  ),
  wg = Symbol.for("vuetify:datatable:expanded");
function Cg(e) {
  const t = ne(e, "expandOnClick"),
    n = Ve(
      e,
      "expanded",
      e.expanded,
      (i) => new Set(i),
      (i) => [...i.values()]
    );
  function a(i, s) {
    const u = new Set(n.value);
    s ? u.add(i.value) : u.delete(i.value), (n.value = u);
  }
  function r(i) {
    return n.value.has(i.value);
  }
  function l(i) {
    a(i, !r(i));
  }
  const o = {
    expand: a,
    expanded: n,
    expandOnClick: t,
    isExpanded: r,
    toggleExpand: l,
  };
  return We(wg, o), o;
}
function xg() {
  const e = Ie(wg);
  if (!e) throw new Error("foo");
  return e;
}
const Nk = K(
    { groupBy: { type: Array, default: () => [] } },
    "DataTable-group"
  ),
  _g = Symbol.for("vuetify:data-table-group");
function kg(e) {
  return { groupBy: Ve(e, "groupBy") };
}
function Eg(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e,
    r = W(new Set()),
    l = S(() =>
      n.value
        .map((c) => ({ ...c, order: c.order ?? !1 }))
        .concat(t != null && t.value ? [] : a.value)
    );
  function o(c) {
    return r.value.has(c.id);
  }
  function i(c) {
    const d = new Set(r.value);
    o(c) ? d.delete(c.id) : d.add(c.id), (r.value = d);
  }
  function s(c) {
    function d(f) {
      const v = [];
      for (const m of f.items)
        "type" in m && m.type === "group" ? v.push(...d(m)) : v.push(m);
      return v;
    }
    return d({
      type: "group",
      items: c,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0,
    });
  }
  const u = {
    sortByWithGroups: l,
    toggleGroup: i,
    opened: r,
    groupBy: n,
    extractRows: s,
    isGroupOpen: o,
  };
  return We(_g, u), u;
}
function Pg() {
  const e = Ie(_g);
  if (!e) throw new Error("Missing group!");
  return e;
}
function Hk(e, t) {
  if (!e.length) return [];
  const n = new Map();
  for (const a of e) {
    const r = xa(a.raw, t);
    n.has(r) || n.set(r, []), n.get(r).push(a);
  }
  return n;
}
function Tg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const r = Hk(e, t[0]),
    l = [],
    o = t.slice(1);
  return (
    r.forEach((i, s) => {
      const u = t[0],
        c = `${a}_${u}_${s}`;
      l.push({
        depth: n,
        id: c,
        key: u,
        value: s,
        items: o.length ? Tg(i, o, n + 1, c) : i,
        type: "group",
      });
    }),
    l
  );
}
function Ag(e, t) {
  const n = [];
  for (const a of e)
    "type" in a && a.type === "group"
      ? (a.value != null && n.push(a),
        (t.has(a.id) || a.value == null) && n.push(...Ag(a.items, t)))
      : n.push(a);
  return n;
}
function Ig(e, t, n) {
  return {
    flatItems: S(() => {
      if (!t.value.length) return e.value;
      const r = Tg(
        e.value,
        t.value.map((l) => l.key)
      );
      return Ag(r, n.value);
    }),
  };
}
function Vg(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: r, search: l } = e;
  const o = Ze("VDataTable"),
    i = S(() => ({
      page: t.value,
      itemsPerPage: n.value,
      sortBy: a.value,
      groupBy: r.value,
      search: l.value,
    }));
  let s = null;
  ce(
    i,
    () => {
      ra(s, i.value) ||
        (s && s.search !== i.value.search && (t.value = 1),
        o.emit("update:options", i.value),
        (s = i.value));
    },
    { deep: !0, immediate: !0 }
  );
}
const Dg = K(
    {
      page: { type: [Number, String], default: 1 },
      itemsPerPage: { type: [Number, String], default: 10 },
    },
    "DataTable-paginate"
  ),
  Og = Symbol.for("vuetify:data-table-pagination");
function $g(e) {
  const t = Ve(e, "page", void 0, (a) => +(a ?? 1)),
    n = Ve(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function Mg(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e,
    r = S(() => (n.value === -1 ? 0 : n.value * (t.value - 1))),
    l = S(() =>
      n.value === -1 ? a.value : Math.min(a.value, r.value + n.value)
    ),
    o = S(() =>
      n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value)
    );
  ce([t, o], () => {
    t.value > o.value && (t.value = o.value);
  });
  function i(f) {
    (n.value = f), (t.value = 1);
  }
  function s() {
    t.value = Bt(t.value + 1, 1, o.value);
  }
  function u() {
    t.value = Bt(t.value - 1, 1, o.value);
  }
  function c(f) {
    t.value = Bt(f, 1, o.value);
  }
  const d = {
    page: t,
    itemsPerPage: n,
    startIndex: r,
    stopIndex: l,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: u,
    setPage: c,
    setItemsPerPage: i,
  };
  return We(Og, d), d;
}
function jk() {
  const e = Ie(Og);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function zk(e) {
  const t = Ze("usePaginatedItems"),
    { items: n, startIndex: a, stopIndex: r, itemsPerPage: l } = e,
    o = S(() => (l.value <= 0 ? n.value : n.value.slice(a.value, r.value)));
  return (
    ce(o, (i) => {
      t.emit("update:currentItems", i);
    }),
    { paginatedItems: o }
  );
}
const Uk = {
    showSelectAll: !1,
    allSelected: () => [],
    select: (e) => {
      var a;
      let { items: t, value: n } = e;
      return new Set(n ? [(a = t[0]) == null ? void 0 : a.value] : []);
    },
    selectAll: (e) => {
      let { selected: t } = e;
      return t;
    },
  },
  Bg = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { currentPage: t } = e;
      return t;
    },
    select: (e) => {
      let { items: t, value: n, selected: a } = e;
      for (const r of t) n ? a.add(r.value) : a.delete(r.value);
      return a;
    },
    selectAll: (e) => {
      let { value: t, currentPage: n, selected: a } = e;
      return Bg.select({ items: n, value: t, selected: a });
    },
  },
  Lg = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { allItems: t } = e;
      return t;
    },
    select: (e) => {
      let { items: t, value: n, selected: a } = e;
      for (const r of t) n ? a.add(r.value) : a.delete(r.value);
      return a;
    },
    selectAll: (e) => {
      let { value: t, allItems: n, selected: a } = e;
      return Lg.select({ items: n, value: t, selected: a });
    },
  },
  Wk = K(
    {
      showSelect: Boolean,
      selectStrategy: { type: [String, Object], default: "page" },
      modelValue: { type: Array, default: () => [] },
      valueComparator: { type: Function, default: ra },
    },
    "DataTable-select"
  ),
  Rg = Symbol.for("vuetify:data-table-selection");
function Fg(e, t) {
  let { allItems: n, currentPage: a } = t;
  const r = Ve(
      e,
      "modelValue",
      e.modelValue,
      (p) =>
        new Set(
          ct(p).map((w) => {
            var x;
            return (
              ((x = n.value.find((E) => e.valueComparator(w, E.value))) == null
                ? void 0
                : x.value) ?? w
            );
          })
        ),
      (p) => [...p.values()]
    ),
    l = S(() => n.value.filter((p) => p.selectable)),
    o = S(() => a.value.filter((p) => p.selectable)),
    i = S(() => {
      if (typeof e.selectStrategy == "object") return e.selectStrategy;
      switch (e.selectStrategy) {
        case "single":
          return Uk;
        case "all":
          return Lg;
        case "page":
        default:
          return Bg;
      }
    });
  function s(p) {
    return ct(p).every((w) => r.value.has(w.value));
  }
  function u(p) {
    return ct(p).some((w) => r.value.has(w.value));
  }
  function c(p, w) {
    const x = i.value.select({
      items: p,
      value: w,
      selected: new Set(r.value),
    });
    r.value = x;
  }
  function d(p) {
    c([p], !s([p]));
  }
  function f(p) {
    const w = i.value.selectAll({
      value: p,
      allItems: l.value,
      currentPage: o.value,
      selected: new Set(r.value),
    });
    r.value = w;
  }
  const v = S(() => r.value.size > 0),
    m = S(() => {
      const p = i.value.allSelected({
        allItems: l.value,
        currentPage: o.value,
      });
      return !!p.length && s(p);
    }),
    h = S(() => i.value.showSelectAll),
    y = {
      toggleSelect: d,
      select: c,
      selectAll: f,
      isSelected: s,
      isSomeSelected: u,
      someSelected: v,
      allSelected: m,
      showSelectAll: h,
    };
  return We(Rg, y), y;
}
function zo() {
  const e = Ie(Rg);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Gk = K(
    {
      sortBy: { type: Array, default: () => [] },
      customKeySort: Object,
      multiSort: Boolean,
      mustSort: Boolean,
    },
    "DataTable-sort"
  ),
  Ng = Symbol.for("vuetify:data-table-sort");
function Hg(e) {
  const t = Ve(e, "sortBy"),
    n = ne(e, "mustSort"),
    a = ne(e, "multiSort");
  return { sortBy: t, mustSort: n, multiSort: a };
}
function jg(e) {
  const { sortBy: t, mustSort: n, multiSort: a, page: r } = e,
    l = (s) => {
      if (s.key == null) return;
      let u = t.value.map((d) => ({ ...d })) ?? [];
      const c = u.find((d) => d.key === s.key);
      c
        ? c.order === "desc"
          ? n.value
            ? (c.order = "asc")
            : (u = u.filter((d) => d.key !== s.key))
          : (c.order = "desc")
        : a.value
        ? (u = [...u, { key: s.key, order: "asc" }])
        : (u = [{ key: s.key, order: "asc" }]),
        (t.value = u),
        r && (r.value = 1);
    };
  function o(s) {
    return !!t.value.find((u) => u.key === s.key);
  }
  const i = { sortBy: t, toggleSort: l, isSorted: o };
  return We(Ng, i), i;
}
function zg() {
  const e = Ie(Ng);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Kk(e, t, n, a) {
  const r = un();
  return {
    sortedItems: S(() => {
      var o, i;
      return n.value.length
        ? Yk(t.value, n.value, r.current.value, {
            transform: a == null ? void 0 : a.transform,
            sortFunctions: {
              ...e.customKeySort,
              ...((o = a == null ? void 0 : a.sortFunctions) == null
                ? void 0
                : o.value),
            },
            sortRawFunctions:
              (i = a == null ? void 0 : a.sortRawFunctions) == null
                ? void 0
                : i.value,
          })
        : t.value;
    }),
  };
}
function Yk(e, t, n, a) {
  const r = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e
    .map((o) => [o, a != null && a.transform ? a.transform(o) : o])
    .sort((o, i) => {
      var s, u;
      for (let c = 0; c < t.length; c++) {
        let d = !1;
        const f = t[c].key,
          v = t[c].order ?? "asc";
        if (v === !1) continue;
        let m = xa(o[1], f),
          h = xa(i[1], f),
          y = o[0].raw,
          p = i[0].raw;
        if (
          (v === "desc" && (([m, h] = [h, m]), ([y, p] = [p, y])),
          (s = a == null ? void 0 : a.sortRawFunctions) != null && s[f])
        ) {
          const w = a.sortRawFunctions[f](y, p);
          if (w == null) continue;
          if (((d = !0), w)) return w;
        }
        if ((u = a == null ? void 0 : a.sortFunctions) != null && u[f]) {
          const w = a.sortFunctions[f](m, h);
          if (w == null) continue;
          if (((d = !0), w)) return w;
        }
        if (!d) {
          if (m instanceof Date && h instanceof Date)
            return m.getTime() - h.getTime();
          if (
            (([m, h] = [m, h].map((w) =>
              w != null ? w.toString().toLocaleLowerCase() : w
            )),
            m !== h)
          )
            return pl(m) && pl(h)
              ? 0
              : pl(m)
              ? -1
              : pl(h)
              ? 1
              : !isNaN(m) && !isNaN(h)
              ? Number(m) - Number(h)
              : r.compare(m, h);
        }
      }
      return 0;
    })
    .map((o) => {
      let [i] = o;
      return i;
    });
}
function qk() {
  const e = W([]);
  cv(() => (e.value = []));
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const Jk = K(
    {
      activeColor: String,
      start: { type: [Number, String], default: 1 },
      modelValue: { type: Number, default: (e) => e.start },
      disabled: Boolean,
      length: {
        type: [Number, String],
        default: 1,
        validator: (e) => e % 1 === 0,
      },
      totalVisible: [Number, String],
      firstIcon: { type: Ae, default: "$first" },
      prevIcon: { type: Ae, default: "$prev" },
      nextIcon: { type: Ae, default: "$next" },
      lastIcon: { type: Ae, default: "$last" },
      ariaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.root",
      },
      pageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.page",
      },
      currentPageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.currentPage",
      },
      firstAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.first",
      },
      previousAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.previous",
      },
      nextAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.next",
      },
      lastAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.last",
      },
      ellipsis: { type: String, default: "..." },
      showFirstLastPage: Boolean,
      ...tn(),
      ...ke(),
      ...Vt(),
      ...nn(),
      ...ht(),
      ...vr(),
      ...He({ tag: "nav" }),
      ...Ge(),
      ...fn({ variant: "text" }),
    },
    "VPagination"
  ),
  df = fe()({
    name: "VPagination",
    props: Jk(),
    emits: {
      "update:modelValue": (e) => !0,
      first: (e) => !0,
      prev: (e) => !0,
      next: (e) => !0,
      last: (e) => !0,
    },
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const r = Ve(e, "modelValue"),
        { t: l, n: o } = un(),
        { isRtl: i } = Nt(),
        { themeClasses: s } = Qe(e),
        { width: u } = Rn(),
        c = he(-1);
      Ft(void 0, { scoped: !0 });
      const { resizeRef: d } = Xn((b) => {
          if (!b.length) return;
          const { target: C, contentRect: D } = b[0],
            P = C.querySelector(".v-pagination__list > *");
          if (!P) return;
          const I = D.width,
            $ = P.offsetWidth + parseFloat(getComputedStyle(P).marginRight) * 2;
          c.value = h(I, $);
        }),
        f = S(() => parseInt(e.length, 10)),
        v = S(() => parseInt(e.start, 10)),
        m = S(() =>
          e.totalVisible != null
            ? parseInt(e.totalVisible, 10)
            : c.value >= 0
            ? c.value
            : h(u.value, 58)
        );
      function h(b, C) {
        const D = e.showFirstLastPage ? 5 : 3;
        return Math.max(0, Math.floor(+((b - C * D) / C).toFixed(2)));
      }
      const y = S(() => {
        if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER)
          return [];
        if (m.value <= 0) return [];
        if (m.value === 1) return [r.value];
        if (f.value <= m.value) return Ua(f.value, v.value);
        const b = m.value % 2 === 0,
          C = b ? m.value / 2 : Math.floor(m.value / 2),
          D = b ? C : C + 1,
          P = f.value - C;
        if (D - r.value >= 0)
          return [
            ...Ua(Math.max(1, m.value - 1), v.value),
            e.ellipsis,
            f.value,
          ];
        if (r.value - P >= (b ? 1 : 0)) {
          const I = m.value - 1,
            $ = f.value - I + v.value;
          return [v.value, e.ellipsis, ...Ua(I, $)];
        } else {
          const I = Math.max(1, m.value - 3),
            $ = I === 1 ? r.value : r.value - Math.ceil(I / 2) + v.value;
          return [v.value, e.ellipsis, ...Ua(I, $), e.ellipsis, f.value];
        }
      });
      function p(b, C, D) {
        b.preventDefault(), (r.value = C), D && a(D, C);
      }
      const { refs: w, updateRef: x } = qk();
      Ft({
        VPaginationBtn: {
          color: ne(e, "color"),
          border: ne(e, "border"),
          density: ne(e, "density"),
          size: ne(e, "size"),
          variant: ne(e, "variant"),
          rounded: ne(e, "rounded"),
          elevation: ne(e, "elevation"),
        },
      });
      const E = S(() =>
          y.value.map((b, C) => {
            const D = (P) => x(P, C);
            if (typeof b == "string")
              return {
                isActive: !1,
                key: `ellipsis-${C}`,
                page: b,
                props: { ref: D, ellipsis: !0, icon: !0, disabled: !0 },
              };
            {
              const P = b === r.value;
              return {
                isActive: P,
                key: b,
                page: o(b),
                props: {
                  ref: D,
                  ellipsis: !1,
                  icon: !0,
                  disabled: !!e.disabled || +e.length < 2,
                  color: P ? e.activeColor : e.color,
                  "aria-current": P,
                  "aria-label": l(
                    P ? e.currentPageAriaLabel : e.pageAriaLabel,
                    b
                  ),
                  onClick: (I) => p(I, b),
                },
              };
            }
          })
        ),
        k = S(() => {
          const b = !!e.disabled || r.value <= v.value,
            C = !!e.disabled || r.value >= v.value + f.value - 1;
          return {
            first: e.showFirstLastPage
              ? {
                  icon: i.value ? e.lastIcon : e.firstIcon,
                  onClick: (D) => p(D, v.value, "first"),
                  disabled: b,
                  "aria-label": l(e.firstAriaLabel),
                  "aria-disabled": b,
                }
              : void 0,
            prev: {
              icon: i.value ? e.nextIcon : e.prevIcon,
              onClick: (D) => p(D, r.value - 1, "prev"),
              disabled: b,
              "aria-label": l(e.previousAriaLabel),
              "aria-disabled": b,
            },
            next: {
              icon: i.value ? e.prevIcon : e.nextIcon,
              onClick: (D) => p(D, r.value + 1, "next"),
              disabled: C,
              "aria-label": l(e.nextAriaLabel),
              "aria-disabled": C,
            },
            last: e.showFirstLastPage
              ? {
                  icon: i.value ? e.firstIcon : e.lastIcon,
                  onClick: (D) => p(D, v.value + f.value - 1, "last"),
                  disabled: C,
                  "aria-label": l(e.lastAriaLabel),
                  "aria-disabled": C,
                }
              : void 0,
          };
        });
      function V() {
        var C;
        const b = r.value - v.value;
        (C = w.value[b]) == null || C.$el.focus();
      }
      function A(b) {
        b.key === Ac.left && !e.disabled && r.value > +e.start
          ? ((r.value = r.value - 1), ze(V))
          : b.key === Ac.right &&
            !e.disabled &&
            r.value < v.value + f.value - 1 &&
            ((r.value = r.value + 1), ze(V));
      }
      return (
        be(() =>
          g(
            e.tag,
            {
              ref: d,
              class: ["v-pagination", s.value, e.class],
              style: e.style,
              role: "navigation",
              "aria-label": l(e.ariaLabel),
              onKeydown: A,
              "data-test": "v-pagination-root",
            },
            {
              default: () => [
                g("ul", { class: "v-pagination__list" }, [
                  e.showFirstLastPage &&
                    g(
                      "li",
                      {
                        key: "first",
                        class: "v-pagination__first",
                        "data-test": "v-pagination-first",
                      },
                      [
                        n.first
                          ? n.first(k.value.first)
                          : g(
                              $e,
                              le({ _as: "VPaginationBtn" }, k.value.first),
                              null
                            ),
                      ]
                    ),
                  g(
                    "li",
                    {
                      key: "prev",
                      class: "v-pagination__prev",
                      "data-test": "v-pagination-prev",
                    },
                    [
                      n.prev
                        ? n.prev(k.value.prev)
                        : g(
                            $e,
                            le({ _as: "VPaginationBtn" }, k.value.prev),
                            null
                          ),
                    ]
                  ),
                  E.value.map((b, C) =>
                    g(
                      "li",
                      {
                        key: b.key,
                        class: [
                          "v-pagination__item",
                          { "v-pagination__item--is-active": b.isActive },
                        ],
                        "data-test": "v-pagination-item",
                      },
                      [
                        n.item
                          ? n.item(b)
                          : g($e, le({ _as: "VPaginationBtn" }, b.props), {
                              default: () => [b.page],
                            }),
                      ]
                    )
                  ),
                  g(
                    "li",
                    {
                      key: "next",
                      class: "v-pagination__next",
                      "data-test": "v-pagination-next",
                    },
                    [
                      n.next
                        ? n.next(k.value.next)
                        : g(
                            $e,
                            le({ _as: "VPaginationBtn" }, k.value.next),
                            null
                          ),
                    ]
                  ),
                  e.showFirstLastPage &&
                    g(
                      "li",
                      {
                        key: "last",
                        class: "v-pagination__last",
                        "data-test": "v-pagination-last",
                      },
                      [
                        n.last
                          ? n.last(k.value.last)
                          : g(
                              $e,
                              le({ _as: "VPaginationBtn" }, k.value.last),
                              null
                            ),
                      ]
                    ),
                ]),
              ],
            }
          )
        ),
        {}
      );
    },
  }),
  Du = K(
    {
      prevIcon: { type: Ae, default: "$prev" },
      nextIcon: { type: Ae, default: "$next" },
      firstIcon: { type: Ae, default: "$first" },
      lastIcon: { type: Ae, default: "$last" },
      itemsPerPageText: {
        type: String,
        default: "$vuetify.dataFooter.itemsPerPageText",
      },
      pageText: { type: String, default: "$vuetify.dataFooter.pageText" },
      firstPageLabel: {
        type: String,
        default: "$vuetify.dataFooter.firstPage",
      },
      prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" },
      nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" },
      lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" },
      itemsPerPageOptions: {
        type: Array,
        default: () => [
          { value: 10, title: "10" },
          { value: 25, title: "25" },
          { value: 50, title: "50" },
          { value: 100, title: "100" },
          { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
        ],
      },
      showCurrentPage: Boolean,
    },
    "VDataTableFooter"
  ),
  eo = fe()({
    name: "VDataTableFooter",
    props: Du(),
    setup(e, t) {
      let { slots: n } = t;
      const { t: a } = un(),
        {
          page: r,
          pageCount: l,
          startIndex: o,
          stopIndex: i,
          itemsLength: s,
          itemsPerPage: u,
          setItemsPerPage: c,
        } = jk(),
        d = S(() =>
          e.itemsPerPageOptions.map((f) =>
            typeof f == "number"
              ? {
                  value: f,
                  title:
                    f === -1
                      ? a("$vuetify.dataFooter.itemsPerPageAll")
                      : String(f),
                }
              : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }
          )
        );
      return (
        be(() => {
          var v;
          const f = df.filterProps(e);
          return g("div", { class: "v-data-table-footer" }, [
            (v = n.prepend) == null ? void 0 : v.call(n),
            g("div", { class: "v-data-table-footer__items-per-page" }, [
              g("span", null, [a(e.itemsPerPageText)]),
              g(
                Vu,
                {
                  items: d.value,
                  modelValue: u.value,
                  "onUpdate:modelValue": (m) => c(Number(m)),
                  density: "compact",
                  variant: "outlined",
                  "hide-details": !0,
                },
                null
              ),
            ]),
            g("div", { class: "v-data-table-footer__info" }, [
              g("div", null, [
                a(e.pageText, s.value ? o.value + 1 : 0, i.value, s.value),
              ]),
            ]),
            g("div", { class: "v-data-table-footer__pagination" }, [
              g(
                df,
                le(
                  {
                    modelValue: r.value,
                    "onUpdate:modelValue": (m) => (r.value = m),
                    density: "comfortable",
                    "first-aria-label": e.firstPageLabel,
                    "last-aria-label": e.lastPageLabel,
                    length: l.value,
                    "next-aria-label": e.nextPageLabel,
                    "previous-aria-label": e.prevPageLabel,
                    rounded: !0,
                    "show-first-last-page": !0,
                    "total-visible": e.showCurrentPage ? 1 : 0,
                    variant: "plain",
                  },
                  f
                ),
                null
              ),
            ]),
          ]);
        }),
        {}
      );
    },
  }),
  to = b0(
    {
      align: { type: String, default: "start" },
      fixed: Boolean,
      fixedOffset: [Number, String],
      height: [Number, String],
      lastFixed: Boolean,
      noPadding: Boolean,
      tag: String,
      width: [Number, String],
      maxWidth: [Number, String],
      nowrap: Boolean,
    },
    (e, t) => {
      let { slots: n } = t;
      const a = e.tag ?? "td";
      return g(
        a,
        {
          class: [
            "v-data-table__td",
            {
              "v-data-table-column--fixed": e.fixed,
              "v-data-table-column--last-fixed": e.lastFixed,
              "v-data-table-column--no-padding": e.noPadding,
              "v-data-table-column--nowrap": e.nowrap,
            },
            `v-data-table-column--align-${e.align}`,
          ],
          style: {
            height: pe(e.height),
            width: pe(e.width),
            maxWidth: pe(e.maxWidth),
            left: pe(e.fixedOffset || null),
          },
        },
        {
          default: () => {
            var r;
            return [(r = n.default) == null ? void 0 : r.call(n)];
          },
        }
      );
    }
  ),
  Xk = K({ headers: Array }, "DataTable-header"),
  Ug = Symbol.for("vuetify:data-table-headers"),
  Wg = { title: "", sortable: !1 },
  Zk = { ...Wg, width: 48 };
function Qk() {
  const t = (
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  ).map((n) => ({ element: n, priority: 0 }));
  return {
    enqueue: (n, a) => {
      let r = !1;
      for (let l = 0; l < t.length; l++)
        if (t[l].priority > a) {
          t.splice(l, 0, { element: n, priority: a }), (r = !0);
          break;
        }
      r || t.push({ element: n, priority: a });
    },
    size: () => t.length,
    count: () => {
      let n = 0;
      if (!t.length) return 0;
      const a = Math.floor(t[0].priority);
      for (let r = 0; r < t.length; r++)
        Math.floor(t[r].priority) === a && (n += 1);
      return n;
    },
    dequeue: () => t.shift(),
  };
}
function xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) xs(n, t);
  return t;
}
function Gg(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Gg(n.children, t);
  return t;
}
function eE(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Wg;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Zk;
  }
}
function Ou(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Ou(n, t + 1))) : t;
}
function tE(e) {
  let t = !1;
  function n(l) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (l)
      if ((o && (l.fixed = !0), l.fixed))
        if (l.children)
          for (let i = l.children.length - 1; i >= 0; i--) n(l.children[i], !0);
        else
          t ? isNaN(+l.width) && (`${l.key}`, void 0) : (l.lastFixed = !0),
            (t = !0);
      else if (l.children)
        for (let i = l.children.length - 1; i >= 0; i--) n(l.children[i]);
      else t = !1;
  }
  for (let l = e.length - 1; l >= 0; l--) n(e[l]);
  function a(l) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!l) return o;
    if (l.children) {
      l.fixedOffset = o;
      for (const i of l.children) o = a(i, o);
    } else
      l.fixed && ((l.fixedOffset = o), (o += parseFloat(l.width || "0") || 0));
    return o;
  }
  let r = 0;
  for (const l of e) r = a(l, r);
}
function nE(e, t) {
  const n = [];
  let a = 0;
  const r = Qk(e);
  for (; r.size() > 0; ) {
    let o = r.count();
    const i = [];
    let s = 1;
    for (; o > 0; ) {
      const { element: u, priority: c } = r.dequeue(),
        d = t - a - Ou(u);
      if (
        (i.push({
          ...u,
          rowspan: d ?? 1,
          colspan: u.children ? xs(u).length : 1,
        }),
        u.children)
      )
        for (const f of u.children) {
          const v = (c % 1) + s / Math.pow(10, a + 2);
          r.enqueue(f, a + d + v);
        }
      (s += 1), (o -= 1);
    }
    (a += 1), n.push(i);
  }
  return { columns: e.map((o) => xs(o)).flat(), headers: n };
}
function Kg(e) {
  const t = [];
  for (const n of e) {
    const a = { ...eE(n), ...n },
      r = a.key ?? (typeof a.value == "string" ? a.value : null),
      l = a.value ?? r ?? null,
      o = {
        ...a,
        key: r,
        value: l,
        sortable: a.sortable ?? (a.key != null || !!a.sort),
        children: a.children ? Kg(a.children) : void 0,
      };
    t.push(o);
  }
  return t;
}
function Yg(e, t) {
  const n = W([]),
    a = W([]),
    r = W({}),
    l = W({}),
    o = W({});
  vt(() => {
    var h, y, p;
    const u = (
        e.headers ||
        Object.keys(e.items[0] ?? {}).map((w) => ({ key: w, title: Pa(w) }))
      ).slice(),
      c = Gg(u);
    (h = t == null ? void 0 : t.groupBy) != null &&
      h.value.length &&
      !c.has("data-table-group") &&
      u.unshift({ key: "data-table-group", title: "Group" }),
      (y = t == null ? void 0 : t.showSelect) != null &&
        y.value &&
        !c.has("data-table-select") &&
        u.unshift({ key: "data-table-select" }),
      (p = t == null ? void 0 : t.showExpand) != null &&
        p.value &&
        !c.has("data-table-expand") &&
        u.push({ key: "data-table-expand" });
    const d = Kg(u);
    tE(d);
    const f = Math.max(...d.map((w) => Ou(w))) + 1,
      v = nE(d, f);
    (n.value = v.headers), (a.value = v.columns);
    const m = v.headers.flat(1);
    for (const w of m)
      w.key &&
        (w.sortable &&
          (w.sort && (r.value[w.key] = w.sort),
          w.sortRaw && (l.value[w.key] = w.sortRaw)),
        w.filter && (o.value[w.key] = w.filter));
  });
  const i = {
    headers: n,
    columns: a,
    sortFunctions: r,
    sortRawFunctions: l,
    filterFunctions: o,
  };
  return We(Ug, i), i;
}
function Uo() {
  const e = Ie(Ug);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const qg = K(
    {
      color: String,
      sticky: Boolean,
      disableSort: Boolean,
      multiSort: Boolean,
      sortAscIcon: { type: Ae, default: "$sortAsc" },
      sortDescIcon: { type: Ae, default: "$sortDesc" },
      headerProps: { type: Object },
      ...al(),
      ...$o(),
    },
    "VDataTableHeaders"
  ),
  no = fe()({
    name: "VDataTableHeaders",
    props: qg(),
    setup(e, t) {
      let { slots: n } = t;
      const { t: a } = un(),
        { toggleSort: r, sortBy: l, isSorted: o } = zg(),
        {
          someSelected: i,
          allSelected: s,
          selectAll: u,
          showSelectAll: c,
        } = zo(),
        { columns: d, headers: f } = Uo(),
        { loaderClasses: v } = Mo(e);
      function m(b, C) {
        if (!(!e.sticky && !b.fixed))
          return {
            position: "sticky",
            left: b.fixed ? pe(b.fixedOffset) : void 0,
            top: e.sticky
              ? `calc(var(--v-table-header-height) * ${C})`
              : void 0,
          };
      }
      function h(b) {
        const C = l.value.find((D) => D.key === b.key);
        return C
          ? C.order === "asc"
            ? e.sortAscIcon
            : e.sortDescIcon
          : e.sortAscIcon;
      }
      const { backgroundColorClasses: y, backgroundColorStyles: p } = It(
          e,
          "color"
        ),
        { displayClasses: w, mobile: x } = Rn(e),
        E = S(() => ({
          headers: f.value,
          columns: d.value,
          toggleSort: r,
          isSorted: o,
          sortBy: l.value,
          someSelected: i.value,
          allSelected: s.value,
          selectAll: u,
          getSortIcon: h,
        })),
        k = S(() => [
          "v-data-table__th",
          { "v-data-table__th--sticky": e.sticky },
          w.value,
          v.value,
        ]),
        V = (b) => {
          let { column: C, x: D, y: P } = b;
          const I =
              C.key === "data-table-select" || C.key === "data-table-expand",
            $ = le(e.headerProps ?? {}, C.headerProps ?? {});
          return g(
            to,
            le(
              {
                tag: "th",
                align: C.align,
                class: [
                  {
                    "v-data-table__th--sortable": C.sortable && !e.disableSort,
                    "v-data-table__th--sorted": o(C),
                    "v-data-table__th--fixed": C.fixed,
                  },
                  ...k.value,
                ],
                style: {
                  width: pe(C.width),
                  minWidth: pe(C.minWidth),
                  maxWidth: pe(C.maxWidth),
                  ...m(C, P),
                },
                colspan: C.colspan,
                rowspan: C.rowspan,
                onClick: C.sortable ? () => r(C) : void 0,
                fixed: C.fixed,
                nowrap: C.nowrap,
                lastFixed: C.lastFixed,
                noPadding: I,
              },
              $
            ),
            {
              default: () => {
                var B;
                const M = `header.${C.key}`,
                  N = {
                    column: C,
                    selectAll: u,
                    isSorted: o,
                    toggleSort: r,
                    sortBy: l.value,
                    someSelected: i.value,
                    allSelected: s.value,
                    getSortIcon: h,
                  };
                return n[M]
                  ? n[M](N)
                  : C.key === "data-table-select"
                  ? ((B = n["header.data-table-select"]) == null
                      ? void 0
                      : B.call(n, N)) ??
                    (c.value &&
                      g(
                        _a,
                        {
                          modelValue: s.value,
                          indeterminate: i.value && !s.value,
                          "onUpdate:modelValue": u,
                        },
                        null
                      ))
                  : g("div", { class: "v-data-table-header__content" }, [
                      g("span", null, [C.title]),
                      C.sortable &&
                        !e.disableSort &&
                        g(
                          De,
                          {
                            key: "icon",
                            class: "v-data-table-header__sort-icon",
                            icon: h(C),
                          },
                          null
                        ),
                      e.multiSort &&
                        o(C) &&
                        g(
                          "div",
                          {
                            key: "badge",
                            class: [
                              "v-data-table-header__sort-badge",
                              ...y.value,
                            ],
                            style: p.value,
                          },
                          [l.value.findIndex((j) => j.key === C.key) + 1]
                        ),
                    ]);
              },
            }
          );
        },
        A = () => {
          const b = le(e.headerProps ?? {} ?? {}),
            C = S(() =>
              d.value.filter(
                (P) => (P == null ? void 0 : P.sortable) && !e.disableSort
              )
            ),
            D = S(() => {
              if (d.value.find((I) => I.key === "data-table-select") != null)
                return s.value
                  ? "$checkboxOn"
                  : i.value
                  ? "$checkboxIndeterminate"
                  : "$checkboxOff";
            });
          return g(
            to,
            le(
              { tag: "th", class: [...k.value], colspan: f.value.length + 1 },
              b
            ),
            {
              default: () => [
                g("div", { class: "v-data-table-header__content" }, [
                  g(
                    Vu,
                    {
                      chips: !0,
                      class: "v-data-table__td-sort-select",
                      clearable: !0,
                      density: "default",
                      items: C.value,
                      label: a("$vuetify.dataTable.sortBy"),
                      multiple: e.multiSort,
                      variant: "underlined",
                      "onClick:clear": () => (l.value = []),
                      appendIcon: D.value,
                      "onClick:append": () => u(!s.value),
                    },
                    {
                      ...n,
                      chip: (P) => {
                        var I;
                        return g(
                          Pu,
                          {
                            onClick:
                              (I = P.item.raw) != null && I.sortable
                                ? () => r(P.item.raw)
                                : void 0,
                            onMousedown: ($) => {
                              $.preventDefault(), $.stopPropagation();
                            },
                          },
                          {
                            default: () => [
                              P.item.title,
                              g(
                                De,
                                {
                                  class: [
                                    "v-data-table__td-sort-icon",
                                    o(P.item.raw) &&
                                      "v-data-table__td-sort-icon-active",
                                  ],
                                  icon: h(P.item.raw),
                                  size: "small",
                                },
                                null
                              ),
                            ],
                          }
                        );
                      },
                    }
                  ),
                ]),
              ],
            }
          );
        };
      be(() =>
        x.value
          ? g("tr", null, [g(A, null, null)])
          : g(ye, null, [
              n.headers
                ? n.headers(E.value)
                : f.value.map((b, C) =>
                    g("tr", null, [
                      b.map((D, P) => g(V, { column: D, x: P, y: C }, null)),
                    ])
                  ),
              e.loading &&
                g("tr", { class: "v-data-table-progress" }, [
                  g("th", { colspan: d.value.length }, [
                    g(
                      pu,
                      {
                        name: "v-data-table-progress",
                        absolute: !0,
                        active: !0,
                        color:
                          typeof e.loading == "boolean" ? void 0 : e.loading,
                        indeterminate: !0,
                      },
                      { default: n.loader }
                    ),
                  ]),
                ]),
            ])
      );
    },
  }),
  aE = K({ item: { type: Object, required: !0 } }, "VDataTableGroupHeaderRow"),
  rE = fe()({
    name: "VDataTableGroupHeaderRow",
    props: aE(),
    setup(e, t) {
      let { slots: n } = t;
      const { isGroupOpen: a, toggleGroup: r, extractRows: l } = Pg(),
        { isSelected: o, isSomeSelected: i, select: s } = zo(),
        { columns: u } = Uo(),
        c = S(() => l([e.item]));
      return () =>
        g(
          "tr",
          {
            class: "v-data-table-group-header-row",
            style: { "--v-data-table-group-header-row-depth": e.item.depth },
          },
          [
            u.value.map((d) => {
              var f, v;
              if (d.key === "data-table-group") {
                const m = a(e.item) ? "$expand" : "$next",
                  h = () => r(e.item);
                return (
                  ((f = n["data-table-group"]) == null
                    ? void 0
                    : f.call(n, {
                        item: e.item,
                        count: c.value.length,
                        props: { icon: m, onClick: h },
                      })) ??
                  g(
                    to,
                    { class: "v-data-table-group-header-row__column" },
                    {
                      default: () => [
                        g(
                          $e,
                          {
                            size: "small",
                            variant: "text",
                            icon: m,
                            onClick: h,
                          },
                          null
                        ),
                        g("span", null, [e.item.value]),
                        g("span", null, [je("("), c.value.length, je(")")]),
                      ],
                    }
                  )
                );
              }
              if (d.key === "data-table-select") {
                const m = o(c.value),
                  h = i(c.value) && !m,
                  y = (p) => s(c.value, p);
                return (
                  ((v = n["data-table-select"]) == null
                    ? void 0
                    : v.call(n, {
                        props: {
                          modelValue: m,
                          indeterminate: h,
                          "onUpdate:modelValue": y,
                        },
                      })) ??
                  g("td", null, [
                    g(
                      _a,
                      {
                        modelValue: m,
                        indeterminate: h,
                        "onUpdate:modelValue": y,
                      },
                      null
                    ),
                  ])
                );
              }
              return g("td", null, null);
            }),
          ]
        );
    },
  }),
  lE = K(
    {
      index: Number,
      item: Object,
      cellProps: [Object, Function],
      onClick: dt(),
      onContextmenu: dt(),
      onDblclick: dt(),
      ...al(),
    },
    "VDataTableRow"
  ),
  oE = fe()({
    name: "VDataTableRow",
    props: lE(),
    setup(e, t) {
      let { slots: n } = t;
      const { displayClasses: a, mobile: r } = Rn(e, "v-data-table__tr"),
        {
          isSelected: l,
          toggleSelect: o,
          someSelected: i,
          allSelected: s,
          selectAll: u,
        } = zo(),
        { isExpanded: c, toggleExpand: d } = xg(),
        { toggleSort: f, sortBy: v, isSorted: m } = zg(),
        { columns: h } = Uo();
      be(() =>
        g(
          "tr",
          {
            class: [
              "v-data-table__tr",
              {
                "v-data-table__tr--clickable": !!(
                  e.onClick ||
                  e.onContextmenu ||
                  e.onDblclick
                ),
              },
              a.value,
            ],
            onClick: e.onClick,
            onContextmenu: e.onContextmenu,
            onDblclick: e.onDblclick,
          },
          [
            e.item &&
              h.value.map((y, p) => {
                const w = e.item,
                  x = `item.${y.key}`,
                  E = `header.${y.key}`,
                  k = {
                    index: e.index,
                    item: w.raw,
                    internalItem: w,
                    value: xa(w.columns, y.key),
                    column: y,
                    isSelected: l,
                    toggleSelect: o,
                    isExpanded: c,
                    toggleExpand: d,
                  },
                  V = {
                    column: y,
                    selectAll: u,
                    isSorted: m,
                    toggleSort: f,
                    sortBy: v.value,
                    someSelected: i.value,
                    allSelected: s.value,
                    getSortIcon: () => "",
                  },
                  A =
                    typeof e.cellProps == "function"
                      ? e.cellProps({
                          index: k.index,
                          item: k.item,
                          internalItem: k.internalItem,
                          value: k.value,
                          column: y,
                        })
                      : e.cellProps,
                  b =
                    typeof y.cellProps == "function"
                      ? y.cellProps({
                          index: k.index,
                          item: k.item,
                          internalItem: k.internalItem,
                          value: k.value,
                        })
                      : y.cellProps;
                return g(
                  to,
                  le(
                    {
                      align: y.align,
                      class: {
                        "v-data-table__td--expanded-row":
                          y.key === "data-table-expand",
                        "v-data-table__td--select-row":
                          y.key === "data-table-select",
                      },
                      fixed: y.fixed,
                      fixedOffset: y.fixedOffset,
                      lastFixed: y.lastFixed,
                      maxWidth: r.value ? void 0 : y.maxWidth,
                      noPadding:
                        y.key === "data-table-select" ||
                        y.key === "data-table-expand",
                      nowrap: y.nowrap,
                      width: r.value ? void 0 : y.width,
                    },
                    A,
                    b
                  ),
                  {
                    default: () => {
                      var D, P, I, $, M;
                      if (n[x] && !r.value)
                        return (D = n[x]) == null ? void 0 : D.call(n, k);
                      if (y.key === "data-table-select")
                        return (
                          ((P = n["item.data-table-select"]) == null
                            ? void 0
                            : P.call(n, k)) ??
                          g(
                            _a,
                            {
                              disabled: !w.selectable,
                              modelValue: l([w]),
                              onClick: Ca(() => o(w), ["stop"]),
                            },
                            null
                          )
                        );
                      if (y.key === "data-table-expand")
                        return (
                          ((I = n["item.data-table-expand"]) == null
                            ? void 0
                            : I.call(n, k)) ??
                          g(
                            $e,
                            {
                              icon: c(w) ? "$collapse" : "$expand",
                              size: "small",
                              variant: "text",
                              onClick: Ca(() => d(w), ["stop"]),
                            },
                            null
                          )
                        );
                      const C = At(k.value);
                      return r.value
                        ? g(ye, null, [
                            g("div", { class: "v-data-table__td-title" }, [
                              (($ = n[E]) == null ? void 0 : $.call(n, V)) ??
                                y.title,
                            ]),
                            g("div", { class: "v-data-table__td-value" }, [
                              ((M = n[x]) == null ? void 0 : M.call(n, k)) ?? C,
                            ]),
                          ])
                        : C;
                    },
                  }
                );
              }),
          ]
        )
      );
    },
  }),
  Jg = K(
    {
      loading: [Boolean, String],
      loadingText: {
        type: String,
        default: "$vuetify.dataIterator.loadingText",
      },
      hideNoData: Boolean,
      items: { type: Array, default: () => [] },
      noDataText: { type: String, default: "$vuetify.noDataText" },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      ...al(),
    },
    "VDataTableRows"
  ),
  ao = fe()({
    name: "VDataTableRows",
    inheritAttrs: !1,
    props: Jg(),
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { columns: r } = Uo(),
        { expandOnClick: l, toggleExpand: o, isExpanded: i } = xg(),
        { isSelected: s, toggleSelect: u } = zo(),
        { toggleGroup: c, isGroupOpen: d } = Pg(),
        { t: f } = un(),
        { mobile: v } = Rn(e);
      return (
        be(() => {
          var m, h;
          return e.loading && (!e.items.length || a.loading)
            ? g("tr", { class: "v-data-table-rows-loading", key: "loading" }, [
                g("td", { colspan: r.value.length }, [
                  ((m = a.loading) == null ? void 0 : m.call(a)) ??
                    f(e.loadingText),
                ]),
              ])
            : !e.loading && !e.items.length && !e.hideNoData
            ? g("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [
                g("td", { colspan: r.value.length }, [
                  ((h = a["no-data"]) == null ? void 0 : h.call(a)) ??
                    f(e.noDataText),
                ]),
              ])
            : g(ye, null, [
                e.items.map((y, p) => {
                  var E;
                  if (y.type === "group") {
                    const k = {
                      index: p,
                      item: y,
                      columns: r.value,
                      isExpanded: i,
                      toggleExpand: o,
                      isSelected: s,
                      toggleSelect: u,
                      toggleGroup: c,
                      isGroupOpen: d,
                    };
                    return a["group-header"]
                      ? a["group-header"](k)
                      : g(
                          rE,
                          le(
                            { key: `group-header_${y.id}`, item: y },
                            Kc(n, ":group-header", () => k)
                          ),
                          a
                        );
                  }
                  const w = {
                      index: p,
                      item: y.raw,
                      internalItem: y,
                      columns: r.value,
                      isExpanded: i,
                      toggleExpand: o,
                      isSelected: s,
                      toggleSelect: u,
                    },
                    x = {
                      ...w,
                      props: le(
                        {
                          key: `item_${y.key ?? y.index}`,
                          onClick: l.value
                            ? () => {
                                o(y);
                              }
                            : void 0,
                          index: p,
                          item: y,
                          cellProps: e.cellProps,
                          mobile: v.value,
                        },
                        Kc(n, ":row", () => w),
                        typeof e.rowProps == "function"
                          ? e.rowProps({
                              item: w.item,
                              index: w.index,
                              internalItem: w.internalItem,
                            })
                          : e.rowProps
                      ),
                    };
                  return g(ye, { key: x.props.key }, [
                    a.item ? a.item(x) : g(oE, x.props, a),
                    i(y) &&
                      ((E = a["expanded-row"]) == null ? void 0 : E.call(a, w)),
                  ]);
                }),
              ]);
        }),
        {}
      );
    },
  }),
  Xg = K(
    {
      fixedHeader: Boolean,
      fixedFooter: Boolean,
      height: [Number, String],
      hover: Boolean,
      ...ke(),
      ...Vt(),
      ...He(),
      ...Ge(),
    },
    "VTable"
  ),
  ro = fe()({
    name: "VTable",
    props: Xg(),
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const { themeClasses: r } = Qe(e),
        { densityClasses: l } = Yt(e);
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-table",
                {
                  "v-table--fixed-height": !!e.height,
                  "v-table--fixed-header": e.fixedHeader,
                  "v-table--fixed-footer": e.fixedFooter,
                  "v-table--has-top": !!n.top,
                  "v-table--has-bottom": !!n.bottom,
                  "v-table--hover": e.hover,
                },
                r.value,
                l.value,
                e.class,
              ],
              style: e.style,
            },
            {
              default: () => {
                var o, i, s;
                return [
                  (o = n.top) == null ? void 0 : o.call(n),
                  n.default
                    ? g(
                        "div",
                        {
                          class: "v-table__wrapper",
                          style: { height: pe(e.height) },
                        },
                        [g("table", null, [n.default()])]
                      )
                    : (i = n.wrapper) == null
                    ? void 0
                    : i.call(n),
                  (s = n.bottom) == null ? void 0 : s.call(n),
                ];
              },
            }
          )
        ),
        {}
      );
    },
  }),
  iE = K(
    {
      items: { type: Array, default: () => [] },
      itemValue: { type: [String, Array, Function], default: "id" },
      itemSelectable: { type: [String, Array, Function], default: null },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      returnObject: Boolean,
    },
    "DataTable-items"
  );
function sE(e, t, n, a) {
  const r = e.returnObject ? t : Ot(t, e.itemValue),
    l = Ot(t, e.itemSelectable, !0),
    o = a.reduce(
      (i, s) => (s.key != null && (i[s.key] = Ot(t, s.value)), i),
      {}
    );
  return {
    type: "item",
    key: e.returnObject ? Ot(t, e.itemValue) : r,
    index: n,
    value: r,
    selectable: l,
    columns: o,
    raw: t,
  };
}
function uE(e, t, n) {
  return t.map((a, r) => sE(e, a, r, n));
}
function Zg(e, t) {
  return { items: S(() => uE(e, e.items, t.value)) };
}
const Qg = K(
    {
      ...Jg(),
      hideDefaultBody: Boolean,
      hideDefaultFooter: Boolean,
      hideDefaultHeader: Boolean,
      width: [String, Number],
      search: String,
      ...Fk(),
      ...Nk(),
      ...Xk(),
      ...iE(),
      ...Wk(),
      ...Gk(),
      ...qg(),
      ...Xg(),
    },
    "DataTable"
  ),
  cE = K({ ...Dg(), ...Qg(), ...pg(), ...Du() }, "VDataTable");
fe()({
  name: "VDataTable",
  props: cE(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0,
  },
  setup(e, t) {
    let { attrs: n, slots: a } = t;
    const { groupBy: r } = kg(e),
      { sortBy: l, multiSort: o, mustSort: i } = Hg(e),
      { page: s, itemsPerPage: u } = $g(e),
      { disableSort: c } = sr(e),
      {
        columns: d,
        headers: f,
        sortFunctions: v,
        sortRawFunctions: m,
        filterFunctions: h,
      } = Yg(e, {
        groupBy: r,
        showSelect: ne(e, "showSelect"),
        showExpand: ne(e, "showExpand"),
      }),
      { items: y } = Zg(e, d),
      p = ne(e, "search"),
      { filteredItems: w } = Sg(e, y, p, {
        transform: (F) => F.columns,
        customKeyFilter: h,
      }),
      { toggleSort: x } = jg({ sortBy: l, multiSort: o, mustSort: i, page: s }),
      {
        sortByWithGroups: E,
        opened: k,
        extractRows: V,
        isGroupOpen: A,
        toggleGroup: b,
      } = Eg({ groupBy: r, sortBy: l, disableSort: c }),
      { sortedItems: C } = Kk(e, w, E, {
        transform: (F) => ({ ...F.raw, ...F.columns }),
        sortFunctions: v,
        sortRawFunctions: m,
      }),
      { flatItems: D } = Ig(C, r, k),
      P = S(() => D.value.length),
      {
        startIndex: I,
        stopIndex: $,
        pageCount: M,
        setItemsPerPage: N,
      } = Mg({ page: s, itemsPerPage: u, itemsLength: P }),
      { paginatedItems: B } = zk({
        items: D,
        startIndex: I,
        stopIndex: $,
        itemsPerPage: u,
      }),
      j = S(() => V(B.value)),
      {
        isSelected: H,
        select: z,
        selectAll: O,
        toggleSelect: L,
        someSelected: G,
        allSelected: oe,
      } = Fg(e, { allItems: y, currentPage: j }),
      { isExpanded: X, toggleExpand: ve } = Cg(e);
    Vg({ page: s, itemsPerPage: u, sortBy: l, groupBy: r, search: p }),
      Ft({
        VDataTableRows: {
          hideNoData: ne(e, "hideNoData"),
          noDataText: ne(e, "noDataText"),
          loading: ne(e, "loading"),
          loadingText: ne(e, "loadingText"),
        },
      });
    const re = S(() => ({
      page: s.value,
      itemsPerPage: u.value,
      sortBy: l.value,
      pageCount: M.value,
      toggleSort: x,
      setItemsPerPage: N,
      someSelected: G.value,
      allSelected: oe.value,
      isSelected: H,
      select: z,
      selectAll: O,
      toggleSelect: L,
      isExpanded: X,
      toggleExpand: ve,
      isGroupOpen: A,
      toggleGroup: b,
      items: j.value.map((F) => F.raw),
      internalItems: j.value,
      groupedItems: B.value,
      columns: d.value,
      headers: f.value,
    }));
    return (
      be(() => {
        const F = eo.filterProps(e),
          Z = no.filterProps(e),
          ee = ao.filterProps(e),
          Q = ro.filterProps(e);
        return g(
          ro,
          le(
            {
              class: [
                "v-data-table",
                {
                  "v-data-table--show-select": e.showSelect,
                  "v-data-table--loading": e.loading,
                },
                e.class,
              ],
              style: e.style,
            },
            Q
          ),
          {
            top: () => {
              var Y;
              return (Y = a.top) == null ? void 0 : Y.call(a, re.value);
            },
            default: () => {
              var Y, se, _, T, R, q;
              return a.default
                ? a.default(re.value)
                : g(ye, null, [
                    (Y = a.colgroup) == null ? void 0 : Y.call(a, re.value),
                    !e.hideDefaultHeader &&
                      g("thead", { key: "thead" }, [g(no, Z, a)]),
                    (se = a.thead) == null ? void 0 : se.call(a, re.value),
                    !e.hideDefaultBody &&
                      g("tbody", null, [
                        (_ = a["body.prepend"]) == null
                          ? void 0
                          : _.call(a, re.value),
                        a.body
                          ? a.body(re.value)
                          : g(ao, le(n, ee, { items: B.value }), a),
                        (T = a["body.append"]) == null
                          ? void 0
                          : T.call(a, re.value),
                      ]),
                    (R = a.tbody) == null ? void 0 : R.call(a, re.value),
                    (q = a.tfoot) == null ? void 0 : q.call(a, re.value),
                  ]);
            },
            bottom: () =>
              a.bottom
                ? a.bottom(re.value)
                : !e.hideDefaultFooter &&
                  g(ye, null, [
                    g(Iu, null, null),
                    g(eo, F, { prepend: a["footer.prepend"] }),
                  ]),
          }
        );
      }),
      {}
    );
  },
});
const dE = K(
    {
      itemsLength: { type: [Number, String], required: !0 },
      ...Dg(),
      ...Qg(),
      ...Du(),
    },
    "VDataTableServer"
  ),
  fE = fe()({
    name: "VDataTableServer",
    props: dE(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:page": (e) => !0,
      "update:itemsPerPage": (e) => !0,
      "update:sortBy": (e) => !0,
      "update:options": (e) => !0,
      "update:expanded": (e) => !0,
      "update:groupBy": (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { groupBy: r } = kg(e),
        { sortBy: l, multiSort: o, mustSort: i } = Hg(e),
        { page: s, itemsPerPage: u } = $g(e),
        { disableSort: c } = sr(e),
        d = S(() => parseInt(e.itemsLength, 10)),
        { columns: f, headers: v } = Yg(e, {
          groupBy: r,
          showSelect: ne(e, "showSelect"),
          showExpand: ne(e, "showExpand"),
        }),
        { items: m } = Zg(e, f),
        { toggleSort: h } = jg({
          sortBy: l,
          multiSort: o,
          mustSort: i,
          page: s,
        }),
        {
          opened: y,
          isGroupOpen: p,
          toggleGroup: w,
          extractRows: x,
        } = Eg({ groupBy: r, sortBy: l, disableSort: c }),
        { pageCount: E, setItemsPerPage: k } = Mg({
          page: s,
          itemsPerPage: u,
          itemsLength: d,
        }),
        { flatItems: V } = Ig(m, r, y),
        {
          isSelected: A,
          select: b,
          selectAll: C,
          toggleSelect: D,
          someSelected: P,
          allSelected: I,
        } = Fg(e, { allItems: m, currentPage: m }),
        { isExpanded: $, toggleExpand: M } = Cg(e),
        N = S(() => x(m.value));
      Vg({
        page: s,
        itemsPerPage: u,
        sortBy: l,
        groupBy: r,
        search: ne(e, "search"),
      }),
        We("v-data-table", { toggleSort: h, sortBy: l }),
        Ft({
          VDataTableRows: {
            hideNoData: ne(e, "hideNoData"),
            noDataText: ne(e, "noDataText"),
            loading: ne(e, "loading"),
            loadingText: ne(e, "loadingText"),
          },
        });
      const B = S(() => ({
        page: s.value,
        itemsPerPage: u.value,
        sortBy: l.value,
        pageCount: E.value,
        toggleSort: h,
        setItemsPerPage: k,
        someSelected: P.value,
        allSelected: I.value,
        isSelected: A,
        select: b,
        selectAll: C,
        toggleSelect: D,
        isExpanded: $,
        toggleExpand: M,
        isGroupOpen: p,
        toggleGroup: w,
        items: N.value.map((j) => j.raw),
        internalItems: N.value,
        groupedItems: V.value,
        columns: f.value,
        headers: v.value,
      }));
      be(() => {
        const j = eo.filterProps(e),
          H = no.filterProps(e),
          z = ao.filterProps(e),
          O = ro.filterProps(e);
        return g(
          ro,
          le(
            {
              class: [
                "v-data-table",
                { "v-data-table--loading": e.loading },
                e.class,
              ],
              style: e.style,
            },
            O
          ),
          {
            top: () => {
              var L;
              return (L = a.top) == null ? void 0 : L.call(a, B.value);
            },
            default: () => {
              var L, G, oe, X, ve, re;
              return a.default
                ? a.default(B.value)
                : g(ye, null, [
                    (L = a.colgroup) == null ? void 0 : L.call(a, B.value),
                    !e.hideDefaultHeader &&
                      g(
                        "thead",
                        {
                          key: "thead",
                          class: "v-data-table__thead",
                          role: "rowgroup",
                        },
                        [g(no, le(H, { sticky: e.fixedHeader }), a)]
                      ),
                    (G = a.thead) == null ? void 0 : G.call(a, B.value),
                    !e.hideDefaultBody &&
                      g(
                        "tbody",
                        { class: "v-data-table__tbody", role: "rowgroup" },
                        [
                          (oe = a["body.prepend"]) == null
                            ? void 0
                            : oe.call(a, B.value),
                          a.body
                            ? a.body(B.value)
                            : g(ao, le(n, z, { items: V.value }), a),
                          (X = a["body.append"]) == null
                            ? void 0
                            : X.call(a, B.value),
                        ]
                      ),
                    (ve = a.tbody) == null ? void 0 : ve.call(a, B.value),
                    (re = a.tfoot) == null ? void 0 : re.call(a, B.value),
                  ]);
            },
            bottom: () =>
              a.bottom
                ? a.bottom(B.value)
                : !e.hideDefaultFooter &&
                  g(ye, null, [
                    g(Iu, null, null),
                    g(eo, j, { prepend: a["footer.prepend"] }),
                  ]),
          }
        );
      });
    },
  }),
  vE = K(
    { fluid: { type: Boolean, default: !1 }, ...ke(), ...Qt(), ...He() },
    "VContainer"
  ),
  lo = fe()({
    name: "VContainer",
    props: vE(),
    setup(e, t) {
      let { slots: n } = t;
      const { rtlClasses: a } = Nt(),
        { dimensionStyles: r } = en(e);
      return (
        be(() =>
          g(
            e.tag,
            {
              class: [
                "v-container",
                { "v-container--fluid": e.fluid },
                a.value,
                e.class,
              ],
              style: [r.value, e.style],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  _s = Co("v-spacer", "div", "VSpacer"),
  mE = K(
    {
      app: Boolean,
      color: String,
      height: { type: [Number, String], default: "auto" },
      ...tn(),
      ...ke(),
      ...nn(),
      ...ko(),
      ...ht(),
      ...He({ tag: "footer" }),
      ...Ge(),
    },
    "VFooter"
  ),
  hE = fe()({
    name: "VFooter",
    props: mE(),
    setup(e, t) {
      let { slots: n } = t;
      const a = W(),
        { themeClasses: r } = Qe(e),
        { backgroundColorClasses: l, backgroundColorStyles: o } = It(
          ne(e, "color")
        ),
        { borderClasses: i } = cn(e),
        { elevationClasses: s } = dn(e),
        { roundedClasses: u } = xt(e),
        c = he(32),
        { resizeRef: d } = Xn((v) => {
          v.length && (c.value = v[0].target.clientHeight);
        }),
        f = S(() => (e.height === "auto" ? c.value : parseInt(e.height, 10)));
      return (
        Mt(
          () => e.app,
          () => {
            const v = Eo({
              id: e.name,
              order: S(() => parseInt(e.order, 10)),
              position: S(() => "bottom"),
              layoutSize: f,
              elementSize: S(() => (e.height === "auto" ? void 0 : f.value)),
              active: S(() => e.app),
              absolute: ne(e, "absolute"),
            });
            vt(() => {
              a.value = v.layoutItemStyles.value;
            });
          }
        ),
        be(() =>
          g(
            e.tag,
            {
              ref: d,
              class: [
                "v-footer",
                r.value,
                l.value,
                i.value,
                s.value,
                u.value,
                e.class,
              ],
              style: [
                o.value,
                e.app ? a.value : { height: pe(e.height) },
                e.style,
              ],
            },
            n
          )
        ),
        {}
      );
    },
  }),
  gE = K({ ...ke(), ...r_() }, "VForm"),
  ey = fe()({
    name: "VForm",
    props: gE(),
    emits: { "update:modelValue": (e) => !0, submit: (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const r = l_(e),
        l = W();
      function o(s) {
        s.preventDefault(), r.reset();
      }
      function i(s) {
        const u = s,
          c = r.validate();
        (u.then = c.then.bind(c)),
          (u.catch = c.catch.bind(c)),
          (u.finally = c.finally.bind(c)),
          a("submit", u),
          u.defaultPrevented ||
            c.then((d) => {
              var v;
              let { valid: f } = d;
              f && ((v = l.value) == null || v.submit());
            }),
          u.preventDefault();
      }
      return (
        be(() => {
          var s;
          return g(
            "form",
            {
              ref: l,
              class: ["v-form", e.class],
              style: e.style,
              novalidate: !0,
              onReset: o,
              onSubmit: i,
            },
            [(s = n.default) == null ? void 0 : s.call(n, r)]
          );
        }),
        xn(r, l)
      );
    },
  }),
  yE = K({ ...ke(), ...Qt(), ...pm() }, "VLayout"),
  ff = fe()({
    name: "VLayout",
    props: yE(),
    setup(e, t) {
      let { slots: n } = t;
      const {
          layoutClasses: a,
          layoutStyles: r,
          getLayoutItem: l,
          items: o,
          layoutRef: i,
        } = wm(e),
        { dimensionStyles: s } = en(e);
      return (
        be(() => {
          var u;
          return g(
            "div",
            {
              ref: i,
              class: [a.value, e.class],
              style: [s.value, r.value, e.style],
            },
            [(u = n.default) == null ? void 0 : u.call(n)]
          );
        }),
        { getLayoutItem: l, items: o }
      );
    },
  });
function bE(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const r = he(!1),
    l = he(0),
    o = S(() => {
      const u = typeof r.value == "boolean" ? "top" : r.value;
      return [
        n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0,
        r.value ? { [u]: pe(l.value) } : { top: a.value.top },
      ];
    });
  Wt(() => {
    ce(
      n,
      (u) => {
        u
          ? window.addEventListener("scroll", s, { passive: !0 })
          : window.removeEventListener("scroll", s);
      },
      { immediate: !0 }
    );
  }),
    rt(() => {
      window.removeEventListener("scroll", s);
    });
  let i = 0;
  function s() {
    const u = i > window.scrollY ? "up" : "down",
      c = t.value.getBoundingClientRect(),
      d = parseFloat(a.value.top ?? 0),
      f = window.scrollY - Math.max(0, l.value - d),
      v = c.height + Math.max(l.value, d) - window.scrollY - window.innerHeight,
      m =
        parseFloat(
          getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")
        ) || 0;
    c.height < window.innerHeight - d
      ? ((r.value = "top"), (l.value = d))
      : (u === "up" && r.value === "bottom") ||
        (u === "down" && r.value === "top")
      ? ((l.value = window.scrollY + c.top - m), (r.value = !0))
      : u === "down" && v <= 0
      ? ((l.value = 0), (r.value = "bottom"))
      : u === "up" &&
        f <= 0 &&
        (m
          ? r.value !== "top" && ((l.value = -f + m + d), (r.value = "top"))
          : ((l.value = c.top + f), (r.value = "top"))),
      (i = window.scrollY);
  }
  return { isStuck: r, stickyStyles: o };
}
const pE = 100,
  SE = 20;
function vf(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function mf(e) {
  if (e.length < 2) return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = vf(t),
      r = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    (t += (r - a) * Math.abs(r)), n === e.length - 1 && (t *= 0.5);
  }
  return vf(t) * 1e3;
}
function wE() {
  const e = {};
  function t(r) {
    Array.from(r.changedTouches).forEach((l) => {
      (e[l.identifier] ?? (e[l.identifier] = new Fp(SE))).push([
        r.timeStamp,
        l,
      ]);
    });
  }
  function n(r) {
    Array.from(r.changedTouches).forEach((l) => {
      delete e[l.identifier];
    });
  }
  function a(r) {
    var u;
    const l = (u = e[r]) == null ? void 0 : u.values().reverse();
    if (!l) throw new Error(`No samples for touch id ${r}`);
    const o = l[0],
      i = [],
      s = [];
    for (const c of l) {
      if (o[0] - c[0] > pE) break;
      i.push({ t: c[0], d: c[1].clientX }),
        s.push({ t: c[0], d: c[1].clientY });
    }
    return {
      x: mf(i),
      y: mf(s),
      get direction() {
        const { x: c, y: d } = this,
          [f, v] = [Math.abs(c), Math.abs(d)];
        return f > v && c >= 0
          ? "right"
          : f > v && c <= 0
          ? "left"
          : v > f && d >= 0
          ? "down"
          : v > f && d <= 0
          ? "up"
          : CE();
      },
    };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function CE() {
  throw new Error();
}
function xE(e) {
  let {
    el: t,
    isActive: n,
    isTemporary: a,
    width: r,
    touchless: l,
    position: o,
  } = e;
  Wt(() => {
    window.addEventListener("touchstart", w, { passive: !0 }),
      window.addEventListener("touchmove", x, { passive: !1 }),
      window.addEventListener("touchend", E, { passive: !0 });
  }),
    rt(() => {
      window.removeEventListener("touchstart", w),
        window.removeEventListener("touchmove", x),
        window.removeEventListener("touchend", E);
    });
  const i = S(() => ["left", "right"].includes(o.value)),
    { addMovement: s, endTouch: u, getVelocity: c } = wE();
  let d = !1;
  const f = he(!1),
    v = he(0),
    m = he(0);
  let h;
  function y(V, A) {
    return (
      (o.value === "left"
        ? V
        : o.value === "right"
        ? document.documentElement.clientWidth - V
        : o.value === "top"
        ? V
        : o.value === "bottom"
        ? document.documentElement.clientHeight - V
        : Na()) - (A ? r.value : 0)
    );
  }
  function p(V) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const b =
      o.value === "left"
        ? (V - m.value) / r.value
        : o.value === "right"
        ? (document.documentElement.clientWidth - V - m.value) / r.value
        : o.value === "top"
        ? (V - m.value) / r.value
        : o.value === "bottom"
        ? (document.documentElement.clientHeight - V - m.value) / r.value
        : Na();
    return A ? Math.max(0, Math.min(1, b)) : b;
  }
  function w(V) {
    if (l.value) return;
    const A = V.changedTouches[0].clientX,
      b = V.changedTouches[0].clientY,
      C = 25,
      D =
        o.value === "left"
          ? A < C
          : o.value === "right"
          ? A > document.documentElement.clientWidth - C
          : o.value === "top"
          ? b < C
          : o.value === "bottom"
          ? b > document.documentElement.clientHeight - C
          : Na(),
      P =
        n.value &&
        (o.value === "left"
          ? A < r.value
          : o.value === "right"
          ? A > document.documentElement.clientWidth - r.value
          : o.value === "top"
          ? b < r.value
          : o.value === "bottom"
          ? b > document.documentElement.clientHeight - r.value
          : Na());
    (D || P || (n.value && a.value)) &&
      ((h = [A, b]),
      (m.value = y(i.value ? A : b, n.value)),
      (v.value = p(i.value ? A : b)),
      (d = m.value > -20 && m.value < 80),
      u(V),
      s(V));
  }
  function x(V) {
    const A = V.changedTouches[0].clientX,
      b = V.changedTouches[0].clientY;
    if (d) {
      if (!V.cancelable) {
        d = !1;
        return;
      }
      const D = Math.abs(A - h[0]),
        P = Math.abs(b - h[1]);
      (i.value ? D > P && D > 3 : P > D && P > 3)
        ? ((f.value = !0), (d = !1))
        : (i.value ? P : D) > 3 && (d = !1);
    }
    if (!f.value) return;
    V.preventDefault(), s(V);
    const C = p(i.value ? A : b, !1);
    (v.value = Math.max(0, Math.min(1, C))),
      C > 1
        ? (m.value = y(i.value ? A : b, !0))
        : C < 0 && (m.value = y(i.value ? A : b, !1));
  }
  function E(V) {
    if (((d = !1), !f.value)) return;
    s(V), (f.value = !1);
    const A = c(V.changedTouches[0].identifier),
      b = Math.abs(A.x),
      C = Math.abs(A.y);
    (i.value ? b > C && b > 400 : C > b && C > 3)
      ? (n.value =
          A.direction ===
          ({ left: "right", right: "left", top: "down", bottom: "up" }[
            o.value
          ] || Na()))
      : (n.value = v.value > 0.5);
  }
  const k = S(() =>
    f.value
      ? {
          transform:
            o.value === "left"
              ? `translateX(calc(-100% + ${v.value * r.value}px))`
              : o.value === "right"
              ? `translateX(calc(100% - ${v.value * r.value}px))`
              : o.value === "top"
              ? `translateY(calc(-100% + ${v.value * r.value}px))`
              : o.value === "bottom"
              ? `translateY(calc(100% - ${v.value * r.value}px))`
              : Na(),
          transition: "none",
        }
      : void 0
  );
  return (
    Mt(f, () => {
      var b, C;
      const V = ((b = t.value) == null ? void 0 : b.style.transform) ?? null,
        A = ((C = t.value) == null ? void 0 : C.style.transition) ?? null;
      vt(() => {
        var D, P, I, $;
        (P = t.value) == null ||
          P.style.setProperty(
            "transform",
            ((D = k.value) == null ? void 0 : D.transform) || "none"
          ),
          ($ = t.value) == null ||
            $.style.setProperty(
              "transition",
              ((I = k.value) == null ? void 0 : I.transition) || null
            );
      }),
        mt(() => {
          var D, P;
          (D = t.value) == null || D.style.setProperty("transform", V),
            (P = t.value) == null || P.style.setProperty("transition", A);
        });
    }),
    { isDragging: f, dragProgress: v, dragStyles: k }
  );
}
function Na() {
  throw new Error();
}
const _E = ["start", "end", "left", "right", "top", "bottom"],
  kE = K(
    {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: { type: Boolean, default: null },
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [Boolean, String], default: !0 },
      image: String,
      temporary: Boolean,
      persistent: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: {
        type: String,
        default: "start",
        validator: (e) => _E.includes(e),
      },
      sticky: Boolean,
      ...tn(),
      ...ke(),
      ...Kh(),
      ...al({ mobile: null }),
      ...nn(),
      ...ko(),
      ...ht(),
      ...He({ tag: "nav" }),
      ...Ge(),
    },
    "VNavigationDrawer"
  ),
  EE = fe()({
    name: "VNavigationDrawer",
    props: kE(),
    emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const { isRtl: l } = Nt(),
        { themeClasses: o } = Qe(e),
        { borderClasses: i } = cn(e),
        { backgroundColorClasses: s, backgroundColorStyles: u } = It(
          ne(e, "color")
        ),
        { elevationClasses: c } = dn(e),
        { displayClasses: d, mobile: f } = Rn(e),
        { roundedClasses: v } = xt(e),
        m = gh(),
        h = Ve(e, "modelValue", null, (L) => !!L),
        { ssrBootStyles: y } = fr(),
        { scopeId: p } = Oa(),
        w = W(),
        x = he(!1),
        { runOpenDelay: E, runCloseDelay: k } = Yh(e, (L) => {
          x.value = L;
        }),
        V = S(() =>
          e.rail && e.expandOnHover && x.value
            ? Number(e.width)
            : Number(e.rail ? e.railWidth : e.width)
        ),
        A = S(() => qi(e.location, l.value)),
        b = S(() => e.persistent),
        C = S(() => !e.permanent && (f.value || e.temporary)),
        D = S(() => e.sticky && !C.value && A.value !== "bottom");
      Mt(
        () => e.expandOnHover && e.rail != null,
        () => {
          ce(x, (L) => a("update:rail", !L));
        }
      ),
        Mt(
          () => !e.disableResizeWatcher,
          () => {
            ce(C, (L) => !e.permanent && ze(() => (h.value = !L)));
          }
        ),
        Mt(
          () => !e.disableRouteWatcher && !!m,
          () => {
            ce(m.currentRoute, () => C.value && (h.value = !1));
          }
        ),
        ce(
          () => e.permanent,
          (L) => {
            L && (h.value = !0);
          }
        ),
        e.modelValue == null && !C.value && (h.value = e.permanent || !f.value);
      const { isDragging: P, dragProgress: I } = xE({
          el: w,
          isActive: h,
          isTemporary: C,
          width: V,
          touchless: ne(e, "touchless"),
          position: A,
        }),
        $ = S(() => {
          const L = C.value
            ? 0
            : e.rail && e.expandOnHover
            ? Number(e.railWidth)
            : V.value;
          return P.value ? L * I.value : L;
        }),
        M = S(() => (["top", "bottom"].includes(e.location) ? 0 : V.value)),
        { layoutItemStyles: N, layoutItemScrimStyles: B } = Eo({
          id: e.name,
          order: S(() => parseInt(e.order, 10)),
          position: A,
          layoutSize: $,
          elementSize: M,
          active: S(() => h.value || P.value),
          disableTransitions: S(() => P.value),
          absolute: S(
            () => e.absolute || (D.value && typeof j.value != "string")
          ),
        }),
        { isStuck: j, stickyStyles: H } = bE({
          rootEl: w,
          isSticky: D,
          layoutItemStyles: N,
        }),
        z = It(S(() => (typeof e.scrim == "string" ? e.scrim : null))),
        O = S(() => ({
          ...(P.value
            ? { opacity: I.value * 0.2, transition: "none" }
            : void 0),
          ...B.value,
        }));
      return (
        Ft({ VList: { bgColor: "transparent" } }),
        be(() => {
          const L = r.image || e.image;
          return g(ye, null, [
            g(
              e.tag,
              le(
                {
                  ref: w,
                  onMouseenter: E,
                  onMouseleave: k,
                  class: [
                    "v-navigation-drawer",
                    `v-navigation-drawer--${A.value}`,
                    {
                      "v-navigation-drawer--expand-on-hover": e.expandOnHover,
                      "v-navigation-drawer--floating": e.floating,
                      "v-navigation-drawer--is-hovering": x.value,
                      "v-navigation-drawer--rail": e.rail,
                      "v-navigation-drawer--temporary": C.value,
                      "v-navigation-drawer--persistent": b.value,
                      "v-navigation-drawer--active": h.value,
                      "v-navigation-drawer--sticky": D.value,
                    },
                    o.value,
                    s.value,
                    i.value,
                    d.value,
                    c.value,
                    v.value,
                    e.class,
                  ],
                  style: [
                    u.value,
                    N.value,
                    y.value,
                    H.value,
                    e.style,
                    ["top", "bottom"].includes(A.value)
                      ? { height: "auto" }
                      : {},
                  ],
                },
                p,
                n
              ),
              {
                default: () => {
                  var G, oe, X;
                  return [
                    L &&
                      g(
                        "div",
                        { key: "image", class: "v-navigation-drawer__img" },
                        [
                          r.image
                            ? g(
                                qe,
                                {
                                  key: "image-defaults",
                                  disabled: !e.image,
                                  defaults: {
                                    VImg: {
                                      alt: "",
                                      cover: !0,
                                      height: "inherit",
                                      src: e.image,
                                    },
                                  },
                                },
                                r.image
                              )
                            : g(
                                Vo,
                                {
                                  key: "image-img",
                                  alt: "",
                                  cover: !0,
                                  height: "inherit",
                                  src: e.image,
                                },
                                null
                              ),
                        ]
                      ),
                    r.prepend &&
                      g("div", { class: "v-navigation-drawer__prepend" }, [
                        (G = r.prepend) == null ? void 0 : G.call(r),
                      ]),
                    g("div", { class: "v-navigation-drawer__content" }, [
                      (oe = r.default) == null ? void 0 : oe.call(r),
                    ]),
                    r.append &&
                      g("div", { class: "v-navigation-drawer__append" }, [
                        (X = r.append) == null ? void 0 : X.call(r),
                      ]),
                  ];
                },
              }
            ),
            g(
              Jn,
              { name: "fade-transition" },
              {
                default: () => [
                  C.value &&
                    (P.value || h.value) &&
                    !!e.scrim &&
                    g(
                      "div",
                      le(
                        {
                          class: [
                            "v-navigation-drawer__scrim",
                            z.backgroundColorClasses.value,
                          ],
                          style: [O.value, z.backgroundColorStyles.value],
                          onClick: () => {
                            b.value || (h.value = !1);
                          },
                        },
                        p
                      ),
                      null
                    ),
                ],
              }
            ),
          ]);
        }),
        { isStuck: j }
      );
    },
  });
function PE(e) {
  const t = he(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function r() {
    a(), ze(() => (t.value = e()));
  }
  function l(o) {
    const i = o ? getComputedStyle(o) : { transitionDuration: 0.2 },
      s = parseFloat(i.transitionDuration) * 1e3 || 200;
    if ((a(), t.value <= 0)) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      (t.value = Math.max(e() - c, 0)), t.value <= 0 && a();
    }, s);
  }
  return mt(a), { clear: a, time: t, start: l, reset: r };
}
const TE = K(
    {
      multiLine: Boolean,
      text: String,
      timer: [Boolean, String],
      timeout: { type: [Number, String], default: 5e3 },
      vertical: Boolean,
      ...il({ location: "bottom" }),
      ...Bo(),
      ...ht(),
      ...fn(),
      ...Ge(),
      ...Zt(cl({ transition: "v-snackbar-transition" }), [
        "persistent",
        "noClickAnimation",
        "scrim",
        "scrollStrategy",
      ]),
    },
    "VSnackbar"
  ),
  AE = fe()({
    name: "VSnackbar",
    props: TE(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = Ve(e, "modelValue"),
        { positionClasses: r } = Lo(e),
        { scopeId: l } = Oa(),
        { themeClasses: o } = Qe(e),
        { colorClasses: i, colorStyles: s, variantClasses: u } = Da(e),
        { roundedClasses: c } = xt(e),
        d = PE(() => Number(e.timeout)),
        f = W(),
        v = W(),
        m = he(!1),
        h = he(0),
        y = W(),
        p = Ie(Hr, void 0);
      Mt(
        () => !!p,
        () => {
          const P = Sm();
          vt(() => {
            y.value = P.mainStyles.value;
          });
        }
      ),
        ce(a, x),
        ce(() => e.timeout, x),
        Wt(() => {
          a.value && x();
        });
      let w = -1;
      function x() {
        d.reset(), window.clearTimeout(w);
        const P = Number(e.timeout);
        if (!a.value || P === -1) return;
        const I = eu(v.value);
        d.start(I),
          (w = window.setTimeout(() => {
            a.value = !1;
          }, P));
      }
      function E() {
        d.reset(), window.clearTimeout(w);
      }
      function k() {
        (m.value = !0), E();
      }
      function V() {
        (m.value = !1), x();
      }
      function A(P) {
        h.value = P.touches[0].clientY;
      }
      function b(P) {
        Math.abs(h.value - P.changedTouches[0].clientY) > 50 && (a.value = !1);
      }
      function C() {
        m.value && V();
      }
      const D = S(() =>
        e.location
          .split(" ")
          .reduce((P, I) => ((P[`v-snackbar--${I}`] = !0), P), {})
      );
      return (
        be(() => {
          const P = Qn.filterProps(e),
            I = !!(n.default || n.text || e.text);
          return g(
            Qn,
            le(
              {
                ref: f,
                class: [
                  "v-snackbar",
                  {
                    "v-snackbar--active": a.value,
                    "v-snackbar--multi-line": e.multiLine && !e.vertical,
                    "v-snackbar--timer": !!e.timer,
                    "v-snackbar--vertical": e.vertical,
                  },
                  D.value,
                  r.value,
                  e.class,
                ],
                style: [y.value, e.style],
              },
              P,
              {
                modelValue: a.value,
                "onUpdate:modelValue": ($) => (a.value = $),
                contentProps: le(
                  {
                    class: [
                      "v-snackbar__wrapper",
                      o.value,
                      i.value,
                      c.value,
                      u.value,
                    ],
                    style: [s.value],
                    onPointerenter: k,
                    onPointerleave: V,
                  },
                  P.contentProps
                ),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: "none",
                _disableGlobalStack: !0,
                onTouchstartPassive: A,
                onTouchend: b,
                onAfterLeave: C,
              },
              l
            ),
            {
              default: () => {
                var $, M;
                return [
                  Va(!1, "v-snackbar"),
                  e.timer &&
                    !m.value &&
                    g("div", { key: "timer", class: "v-snackbar__timer" }, [
                      g(
                        hh,
                        {
                          ref: v,
                          color: typeof e.timer == "string" ? e.timer : "info",
                          max: e.timeout,
                          "model-value": d.time.value,
                        },
                        null
                      ),
                    ]),
                  I &&
                    g(
                      "div",
                      {
                        key: "content",
                        class: "v-snackbar__content",
                        role: "status",
                        "aria-live": "polite",
                      },
                      [
                        (($ = n.text) == null ? void 0 : $.call(n)) ?? e.text,
                        (M = n.default) == null ? void 0 : M.call(n),
                      ]
                    ),
                  n.actions &&
                    g(
                      qe,
                      {
                        defaults: {
                          VBtn: { variant: "text", ripple: !1, slim: !0 },
                        },
                      },
                      {
                        default: () => [
                          g("div", { class: "v-snackbar__actions" }, [
                            n.actions({ isActive: a }),
                          ]),
                        ],
                      }
                    ),
                ];
              },
              activator: n.activator,
            }
          );
        }),
        xn({}, f)
      );
    },
  }),
  IE = K(
    {
      autoGrow: Boolean,
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      noResize: Boolean,
      rows: {
        type: [Number, String],
        default: 5,
        validator: (e) => !isNaN(parseFloat(e)),
      },
      maxRows: {
        type: [Number, String],
        validator: (e) => !isNaN(parseFloat(e)),
      },
      suffix: String,
      modelModifiers: Object,
      ...Ho(),
      ..._u(),
    },
    "VTextarea"
  ),
  ty = fe()({
    name: "VTextarea",
    directives: { Intersect: hu },
    inheritAttrs: !1,
    props: IE(),
    emits: {
      "click:control": (e) => !0,
      "mousedown:control": (e) => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: r } = t;
      const l = Ve(e, "modelValue"),
        { isFocused: o, focus: i, blur: s } = No(e),
        u = S(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(l.value)
            : (l.value || "").toString().length
        ),
        c = S(() => {
          if (n.maxlength) return n.maxlength;
          if (
            !(
              !e.counter ||
              (typeof e.counter != "number" && typeof e.counter != "string")
            )
          )
            return e.counter;
        });
      function d(P, I) {
        var $, M;
        !e.autofocus ||
          !P ||
          (M = ($ = I[0].target) == null ? void 0 : $.focus) == null ||
          M.call($);
      }
      const f = W(),
        v = W(),
        m = he(""),
        h = W(),
        y = S(() => e.persistentPlaceholder || o.value || e.active);
      function p() {
        var P;
        h.value !== document.activeElement &&
          ((P = h.value) == null || P.focus()),
          o.value || i();
      }
      function w(P) {
        p(), a("click:control", P);
      }
      function x(P) {
        a("mousedown:control", P);
      }
      function E(P) {
        P.stopPropagation(),
          p(),
          ze(() => {
            (l.value = ""), Jv(e["onClick:clear"], P);
          });
      }
      function k(P) {
        var $;
        const I = P.target;
        if (((l.value = I.value), ($ = e.modelModifiers) != null && $.trim)) {
          const M = [I.selectionStart, I.selectionEnd];
          ze(() => {
            (I.selectionStart = M[0]), (I.selectionEnd = M[1]);
          });
        }
      }
      const V = W(),
        A = W(+e.rows),
        b = S(() => ["plain", "underlined"].includes(e.variant));
      vt(() => {
        e.autoGrow || (A.value = +e.rows);
      });
      function C() {
        e.autoGrow &&
          ze(() => {
            if (!V.value || !v.value) return;
            const P = getComputedStyle(V.value),
              I = getComputedStyle(v.value.$el),
              $ =
                parseFloat(P.getPropertyValue("--v-field-padding-top")) +
                parseFloat(P.getPropertyValue("--v-input-padding-top")) +
                parseFloat(P.getPropertyValue("--v-field-padding-bottom")),
              M = V.value.scrollHeight,
              N = parseFloat(P.lineHeight),
              B = Math.max(
                parseFloat(e.rows) * N + $,
                parseFloat(I.getPropertyValue("--v-input-control-height"))
              ),
              j = parseFloat(e.maxRows) * N + $ || 1 / 0,
              H = Bt(M ?? 0, B, j);
            (A.value = Math.floor((H - $) / N)), (m.value = pe(H));
          });
      }
      Wt(C),
        ce(l, C),
        ce(() => e.rows, C),
        ce(() => e.maxRows, C),
        ce(() => e.density, C);
      let D;
      return (
        ce(V, (P) => {
          P
            ? ((D = new ResizeObserver(C)), D.observe(V.value))
            : D == null || D.disconnect();
        }),
        rt(() => {
          D == null || D.disconnect();
        }),
        be(() => {
          const P = !!(r.counter || e.counter || e.counterValue),
            I = !!(P || r.details),
            [$, M] = wo(n),
            { modelValue: N, ...B } = lr.filterProps(e),
            j = eg(e);
          return g(
            lr,
            le(
              {
                ref: f,
                modelValue: l.value,
                "onUpdate:modelValue": (H) => (l.value = H),
                class: [
                  "v-textarea v-text-field",
                  {
                    "v-textarea--prefixed": e.prefix,
                    "v-textarea--suffixed": e.suffix,
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-textarea--auto-grow": e.autoGrow,
                    "v-textarea--no-resize": e.noResize || e.autoGrow,
                    "v-input--plain-underlined": b.value,
                  },
                  e.class,
                ],
                style: e.style,
              },
              $,
              B,
              { centerAffix: A.value === 1 && !b.value, focused: o.value }
            ),
            {
              ...r,
              default: (H) => {
                let {
                  id: z,
                  isDisabled: O,
                  isDirty: L,
                  isReadonly: G,
                  isValid: oe,
                } = H;
                return g(
                  ku,
                  le(
                    {
                      ref: v,
                      style: { "--v-textarea-control-height": m.value },
                      onClick: w,
                      onMousedown: x,
                      "onClick:clear": E,
                      "onClick:prependInner": e["onClick:prependInner"],
                      "onClick:appendInner": e["onClick:appendInner"],
                    },
                    j,
                    {
                      id: z.value,
                      active: y.value || L.value,
                      centerAffix: A.value === 1 && !b.value,
                      dirty: L.value || e.dirty,
                      disabled: O.value,
                      focused: o.value,
                      error: oe.value === !1,
                    }
                  ),
                  {
                    ...r,
                    default: (X) => {
                      let {
                        props: { class: ve, ...re },
                      } = X;
                      return g(ye, null, [
                        e.prefix &&
                          g("span", { class: "v-text-field__prefix" }, [
                            e.prefix,
                          ]),
                        ft(
                          g(
                            "textarea",
                            le(
                              {
                                ref: h,
                                class: ve,
                                value: l.value,
                                onInput: k,
                                autofocus: e.autofocus,
                                readonly: G.value,
                                disabled: O.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: e.name,
                                onFocus: p,
                                onBlur: s,
                              },
                              re,
                              M
                            ),
                            null
                          ),
                          [
                            [
                              Ln("intersect"),
                              { handler: d },
                              null,
                              { once: !0 },
                            ],
                          ]
                        ),
                        e.autoGrow &&
                          ft(
                            g(
                              "textarea",
                              {
                                class: [ve, "v-textarea__sizer"],
                                id: `${re.id}-sizer`,
                                "onUpdate:modelValue": (F) => (l.value = F),
                                ref: V,
                                readonly: !0,
                                "aria-hidden": "true",
                              },
                              null
                            ),
                            [[_p, l.value]]
                          ),
                        e.suffix &&
                          g("span", { class: "v-text-field__suffix" }, [
                            e.suffix,
                          ]),
                      ]);
                    },
                  }
                );
              },
              details: I
                ? (H) => {
                    var z;
                    return g(ye, null, [
                      (z = r.details) == null ? void 0 : z.call(r, H),
                      P &&
                        g(ye, null, [
                          g("span", null, null),
                          g(
                            Qh,
                            {
                              active: e.persistentCounter || o.value,
                              value: u.value,
                              max: c.value,
                              disabled: e.disabled,
                            },
                            r.counter
                          ),
                        ]),
                    ]);
                  }
                : void 0,
            }
          );
        }),
        xn({}, f, v, h)
      );
    },
  }),
  VE = at({
    __name: "SelectType",
    props: {
      formType: {},
      choices: { type: Function },
      itemValue: {},
      itemTitle: {},
      multiple: { type: Boolean },
      rules: {},
      autocomplete: { type: Boolean },
      clearable: { type: Boolean },
      label: {},
      field: {},
      readonly: { type: Boolean },
      helpText: {},
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = W([]),
        l = W(null),
        o = W(!1);
      async function i() {
        o.value = !0;
        try {
          r.value = await n.choices();
        } catch (c) {
          l.value = c;
        } finally {
          o.value = !1;
        }
      }
      i().catch(console.error);
      const s = S({
          get: () => n.modelValue,
          set: (c) => void a("update:modelValue", c),
        }),
        u = ul(s, n.field);
      return (c, d) =>
        l.value
          ? (ge(),
            Te(
              Bh,
              {
                key: 1,
                loading: o.value,
                message: l.value.message,
                onFetch: i,
              },
              null,
              8,
              ["loading", "message"]
            ))
          : (ge(),
            Te(
              el(c.autocomplete ? Se($k) : Se(Vu)),
              {
                key: 0,
                modelValue: Se(u),
                "onUpdate:modelValue":
                  d[0] || (d[0] = (f) => (Be(u) ? (u.value = f) : null)),
                label: c.label,
                items: r.value.map((f) => ({
                  ...f,
                  itemPropsThisNameNeverExistsAbcd: {
                    height: 16,
                    class: "pt-0",
                    density: "compact",
                    color: "primary",
                  },
                })),
                "item-title": c.itemTitle ?? "name",
                "item-value": c.itemValue ?? "id",
                "item-props": "itemPropsThisNameNeverExistsAbcd",
                multiple: c.multiple,
                rules: c.rules,
                loading: o.value,
                clearable: c.clearable,
                chips: c.multiple,
                readonly: c.readonly,
                "closable-chips": "",
              },
              tl({ _: 2 }, [
                c.helpText
                  ? {
                      name: "append",
                      fn: ue(() => [
                        g(
                          dl,
                          { text: c.helpText },
                          {
                            activator: ue(({ props: f }) => [
                              g(
                                $e,
                                le(f, { icon: "", variant: "text" }),
                                {
                                  default: ue(() => [
                                    g(De, { icon: "mdi-information" }),
                                  ]),
                                  _: 2,
                                },
                                1040
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["text"]
                        ),
                      ]),
                      key: "0",
                    }
                  : void 0,
              ]),
              1032,
              [
                "modelValue",
                "label",
                "items",
                "item-title",
                "item-value",
                "multiple",
                "rules",
                "loading",
                "clearable",
                "chips",
                "readonly",
              ]
            ));
    },
  }),
  DE = at({
    __name: "TextType",
    props: {
      formType: {},
      rules: {},
      type: {},
      textarea: { type: Boolean },
      label: {},
      field: {},
      readonly: { type: Boolean },
      helpText: {},
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = S({
          get: () => n.modelValue,
          set: (o) => void a("update:modelValue", o),
        }),
        l = ul(r, n.field);
      return (o, i) => (
        ge(),
        Te(
          el(o.textarea ? Se(ty) : Se(ka)),
          {
            modelValue: Se(l),
            "onUpdate:modelValue":
              i[0] || (i[0] = (s) => (Be(l) ? (l.value = s) : null)),
            label: o.label,
            rules: o.rules,
            type: o.type,
            readonly: o.readonly,
          },
          tl({ _: 2 }, [
            o.helpText
              ? {
                  name: "append",
                  fn: ue(() => [
                    g(
                      dl,
                      { text: o.helpText },
                      {
                        activator: ue(({ props: s }) => [
                          g(
                            $e,
                            le(s, { icon: "", variant: "text" }),
                            {
                              default: ue(() => [
                                g(De, { icon: "mdi-information" }),
                              ]),
                              _: 2,
                            },
                            1040
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["text"]
                    ),
                  ]),
                  key: "0",
                }
              : void 0,
          ]),
          1032,
          ["modelValue", "label", "rules", "type", "readonly"]
        )
      );
    },
  }),
  OE = at({
    __name: "CardType",
    props: {
      formType: {},
      label: {},
      icon: {},
      items: {},
      layout: {},
      layoutGap: {},
      transparent: { type: Boolean },
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e) {
      return (t, n) => (
        ge(),
        Te(
          jo,
          { class: "mb-3", variant: t.transparent ? "text" : "tonal" },
          {
            default: ue(() => [
              t.label || t.icon
                ? (ge(),
                  Te(
                    or,
                    {
                      key: 0,
                      class: Pt({ "split-heading": t.label && t.icon }),
                    },
                    {
                      default: ue(() => [
                        je(At(t.label) + " ", 1),
                        t.icon
                          ? (ge(),
                            Te(
                              De,
                              { key: 0, size: "small", icon: t.icon },
                              null,
                              8,
                              ["icon"]
                            ))
                          : it("", !0),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ))
                : it("", !0),
              g(
                ya,
                {
                  class: Pt(
                    t.layout === "flex"
                      ? [
                          "flex-container",
                          `flex-container-gap-${(t.layoutGap ?? 1)
                            .toString()
                            .replaceAll(".", "-")}`,
                        ]
                      : []
                  ),
                },
                {
                  default: ue(() => [
                    (ge(!0),
                    tt(
                      ye,
                      null,
                      Vn(
                        t.items,
                        (a) => (
                          ge(),
                          Te(
                            Wo,
                            {
                              key: a.label,
                              "form-data": a,
                              "model-value": t.modelValue,
                              variant: t.transparent ? "solo" : void 0,
                              "onUpdate:modelValue":
                                n[0] ||
                                (n[0] = (r) => t.$emit("update:modelValue", r)),
                            },
                            null,
                            8,
                            ["form-data", "model-value", "variant"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["class"]
              ),
            ]),
            _: 1,
          },
          8,
          ["variant"]
        )
      );
    },
  }),
  fl = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [a, r] of t) n[a] = r;
    return n;
  },
  $E = fl(OE, [["__scopeId", "data-v-28569a08"]]),
  ME = { class: "d-flex flex-column flex-container-gap-0-5" },
  BE = at({
    __name: "ArrayType",
    props: {
      formType: {},
      type: {},
      textarea: { type: Boolean },
      label: {},
      field: {},
      readonly: { type: Boolean },
      helpText: {},
      layoutWidth: {},
      fill: { type: [String, Boolean] },
      modelValue: {},
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = S({
          get: () => n.modelValue,
          set: (o) => void a("update:modelValue", o),
        }),
        l = ul(r, n.field);
      return (o, i) => (
        ge(),
        Te(jo, null, {
          default: ue(() => [
            g(
              Zh,
              null,
              tl(
                {
                  default: ue(() => [
                    g(or, null, {
                      default: ue(() => [je(At(o.label), 1)]),
                      _: 1,
                    }),
                  ]),
                  _: 2,
                },
                [
                  o.helpText
                    ? {
                        name: "append",
                        fn: ue(() => [
                          g(
                            dl,
                            { text: o.helpText },
                            {
                              activator: ue(({ props: s }) => [
                                g(
                                  $e,
                                  le(s, { icon: "", variant: "text" }),
                                  {
                                    default: ue(() => [
                                      g(De, { icon: "mdi-information" }),
                                    ]),
                                    _: 2,
                                  },
                                  1040
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["text"]
                          ),
                        ]),
                        key: "0",
                      }
                    : void 0,
                ]
              ),
              1024
            ),
            g(ya, null, {
              default: ue(() => [
                Ta("div", ME, [
                  (ge(!0),
                  tt(
                    ye,
                    null,
                    Vn(
                      Se(l),
                      (s, u) => (
                        ge(),
                        Te(
                          el(o.textarea ? Se(ty) : Se(ka)),
                          {
                            key: u,
                            modelValue: Se(l)[u],
                            "onUpdate:modelValue": (c) => (Se(l)[u] = c),
                            class: "flex-fill-space",
                            type: o.type,
                            "hide-details": "",
                          },
                          {
                            "append-inner": ue(() => [
                              g(
                                $e,
                                {
                                  variant: "text",
                                  color: "error",
                                  icon: "",
                                  size: "small",
                                  onClick: (c) => Se(l).splice(u, 1),
                                },
                                {
                                  default: ue(() => [
                                    g(De, { icon: "mdi-delete" }),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["onClick"]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["modelValue", "onUpdate:modelValue", "type"]
                        )
                      )
                    ),
                    128
                  )),
                  g(
                    $e,
                    {
                      variant: "tonal",
                      color: "success",
                      block: "",
                      onClick: i[0] || (i[0] = (s) => Se(l).push("")),
                    },
                    { default: ue(() => [g(De, { icon: "mdi-plus" })]), _: 1 }
                  ),
                ]),
              ]),
              _: 1,
            }),
          ]),
          _: 1,
        })
      );
    },
  }),
  Wo = at({
    __name: "FormField",
    props: { formData: {}, modelValue: {}, loading: { type: Boolean } },
    emits: { "update:modelValue": (e) => !0 },
    setup(e) {
      const t = e,
        n = S(() => {
          switch (t.formData.formType) {
            case "CardType":
              return $E;
            case "CheckboxType":
              return O_;
            case "NumberType":
              return W_;
            case "SelectType":
              return VE;
            case "TextType":
              return DE;
            case "GroupType":
              return N_;
            case "ArrayType":
              return BE;
            default:
              return "div";
          }
        }),
        a = S(() => {
          const r = [],
            l = t.formData.layoutWidth;
          l && r.push(`flex-content-${l}`);
          const o = t.formData.fill;
          return (
            o && r.push(`flex-fill-space${o === "minor" ? "-minor" : ""}`), r
          );
        });
      return (r, l) => (
        ge(),
        Te(
          el(n.value),
          le({ class: a.value }, r.formData, {
            "model-value": r.modelValue,
            loading: r.loading,
            "onUpdate:modelValue":
              l[0] || (l[0] = (o) => r.$emit("update:modelValue", o)),
          }),
          null,
          16,
          ["class", "model-value", "loading"]
        )
      );
    },
  }),
  LE = at({
    __name: "AdminFilters",
    props: {
      filterForm: {},
      modelValue: {},
      createDefaultFilters: { type: Function },
    },
    emits: { "update:modelValue": (e) => typeof e == "object" },
    setup(e, { emit: t }) {
      const n = W(!1),
        a = e,
        r = t,
        l = W(a.modelValue);
      ce(
        () => a.modelValue,
        (i) => {
          l.value = rr(i);
        }
      );
      function o() {
        n.value && r("update:modelValue", rr(l.value));
      }
      return (i, s) => (
        ge(),
        Te(
          ey,
          {
            modelValue: n.value,
            "onUpdate:modelValue": s[2] || (s[2] = (u) => (n.value = u)),
            onSubmit: Ca(o, ["prevent"]),
          },
          {
            default: ue(() => [
              (ge(!0),
              tt(
                ye,
                null,
                Vn(
                  i.filterForm,
                  (u) => (
                    ge(),
                    Te(
                      Wo,
                      {
                        key: u.label,
                        modelValue: l.value,
                        "onUpdate:modelValue":
                          s[0] || (s[0] = (c) => (l.value = c)),
                        "form-data": u,
                      },
                      null,
                      8,
                      ["modelValue", "form-data"]
                    )
                  )
                ),
                128
              )),
              g(
                ff,
                { class: "flex-wrap mt-4" },
                {
                  default: ue(() => [
                    yn(i.$slots, "button-left"),
                    g(_s),
                    g(
                      ff,
                      { class: "flex-wrap" },
                      {
                        default: ue(() => [
                          g(_s),
                          g(
                            $e,
                            {
                              variant: "text",
                              onClick:
                                s[1] ||
                                (s[1] = (u) =>
                                  (l.value = i.createDefaultFilters())),
                            },
                            {
                              default: ue(
                                () => s[3] || (s[3] = [je(" Zurücksetzen ")])
                              ),
                              _: 1,
                            }
                          ),
                          g(
                            $e,
                            {
                              variant: "flat",
                              type: "submit",
                              color: "success",
                            },
                            {
                              default: ue(
                                () => s[4] || (s[4] = [je(" Filtern ")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["modelValue"]
        )
      );
    },
  }),
  RE = at({
    __name: "AdminListAction",
    props: {
      action: { type: Object, required: !0 },
      item: { type: Object, required: !0 },
    },
    setup(e) {
      const t = W(!1),
        n = pn();
      async function a(r, l) {
        try {
          (t.value = !0), await r(l);
        } catch (o) {
          n.showToast(o.message, "error");
        } finally {
          t.value = !1;
        }
      }
      return (r, l) => (
        ge(),
        Te(
          $e,
          {
            variant: e.action.variant ?? "flat",
            color: e.action.color,
            loading: t.value,
            title: e.action.title,
            onClick:
              l[0] || (l[0] = Ca((o) => a(e.action.action, e.item), ["stop"])),
          },
          {
            default: ue(() => [
              g(De, { icon: e.action.icon }, null, 8, ["icon"]),
            ]),
            _: 1,
          },
          8,
          ["variant", "color", "loading", "title"]
        )
      );
    },
  }),
  FE = { class: "d-flex flex-container-gap-0-5" },
  NE = at({
    __name: "AdminList",
    props: {
      resource: {},
      name: {},
      canCreate: { type: Boolean },
      headers: {},
      fromApi: { type: Function },
      filters: {},
      actions: {},
    },
    setup(e) {
      const t = pn(),
        n = e;
      let a = 0;
      const r = W([]),
        l = W(0),
        o = W(!1),
        i = W(10),
        s = W(1),
        u = W(null),
        c = W(n.filters.default()),
        d = W([]);
      ce(
        o,
        (p) => {
          p
            ? (t.loadingExternal[`admin.${n.name}.list`] = !0)
            : delete t.loadingExternal[`admin.${n.name}.list`];
        },
        { immediate: !0 }
      ),
        rt(() => {
          delete t.loadingExternal[`admin.${n.name}.list`];
        });
      function f() {
        (r.value = []),
          (l.value = 0),
          (s.value = 1),
          (u.value = null),
          (d.value = []),
          (c.value = n.filters.default());
      }
      ce(() => [c.value, d.value, i.value, s.value], m, { immediate: !0 }),
        ce(() => n.resource, f);
      function v(p) {
        return n.fromApi
          ? p.map((w) => {
              var x;
              return ((x = n.fromApi) == null ? void 0 : x.call(n, w)) ?? w;
            })
          : p;
      }
      async function m() {
        try {
          o.value = !0;
          const p = ++a,
            w = d.value[0],
            x = w ? `${w.key} ${w.order ?? "asc"}` : void 0,
            E = await Lt({
              resource: n.resource,
              queryParams: {
                $perPage: i.value,
                $page: s.value,
                $sort: x,
                ...c.value,
              },
            });
          if (p !== a) return;
          (r.value = v(E.data)), (l.value = E.totalResults), (u.value = null);
        } catch (p) {
          u.value = p;
        } finally {
          o.value = !1;
        }
      }
      function h(p) {
        ea.push({ name: `admin.${n.name}.edit`, params: { id: p } }).catch(
          console.error
        );
      }
      async function y(p) {
        if (confirm("Wirklich löschen?"))
          try {
            await Lt({
              resource: n.resource,
              id: p.toString(),
              method: "DELETE",
            }),
              m().catch(console.error);
          } catch (w) {
            t.showToast(w.message, "error");
          }
      }
      return (p, w) => (
        ge(),
        tt(
          ye,
          null,
          [
            g(
              lo,
              { fluid: "" },
              {
                default: ue(() => [
                  g(
                    LE,
                    {
                      modelValue: c.value,
                      "onUpdate:modelValue":
                        w[0] || (w[0] = (x) => (c.value = x)),
                      "filter-form": p.filters.form,
                      loading: o.value,
                      "create-default-filters": p.filters.default,
                    },
                    null,
                    8,
                    [
                      "modelValue",
                      "filter-form",
                      "loading",
                      "create-default-filters",
                    ]
                  ),
                ]),
                _: 1,
              }
            ),
            g(
              lo,
              { fluid: "" },
              {
                default: ue(() => [
                  u.value
                    ? (ge(),
                      Te(
                        Bh,
                        {
                          key: 1,
                          message: u.value.message,
                          loading: o.value,
                          onFetch: m,
                        },
                        null,
                        8,
                        ["message", "loading"]
                      ))
                    : (ge(),
                      Te(
                        fE,
                        {
                          key: 0,
                          "items-per-page": i.value,
                          "onUpdate:itemsPerPage":
                            w[1] || (w[1] = (x) => (i.value = x)),
                          page: s.value,
                          "onUpdate:page":
                            w[2] || (w[2] = (x) => (s.value = x)),
                          "sort-by": d.value,
                          "onUpdate:sortBy":
                            w[3] || (w[3] = (x) => (d.value = x)),
                          headers: [
                            ...p.headers,
                            {
                              key: "actions",
                              title: "Aktionen",
                              width: 1,
                              align: "end",
                              sortable: !1,
                            },
                          ],
                          items: r.value,
                          "items-length": l.value,
                          loading: o.value,
                          "onClick:row":
                            w[4] || (w[4] = (x, E) => h(E.item.id)),
                        },
                        {
                          "item.actions": ue(({ item: x }) => [
                            Ta("div", FE, [
                              (ge(!0),
                              tt(
                                ye,
                                null,
                                Vn(
                                  p.actions,
                                  (E, k) => (
                                    ge(),
                                    Te(
                                      RE,
                                      { key: k, action: E, item: x },
                                      null,
                                      8,
                                      ["action", "item"]
                                    )
                                  )
                                ),
                                128
                              )),
                              g(
                                $e,
                                {
                                  color: "error",
                                  variant: "tonal",
                                  onClick: Ca((E) => y(x.id), ["stop"]),
                                },
                                {
                                  default: ue(() => [
                                    g(De, { icon: "mdi-delete" }),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["onClick"]
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "items-per-page",
                          "page",
                          "sort-by",
                          "headers",
                          "items",
                          "items-length",
                          "loading",
                        ]
                      )),
                ]),
                _: 1,
              }
            ),
            p.canCreate
              ? (ge(),
                Te(
                  $e,
                  {
                    key: 0,
                    class: "fab-bottom-right",
                    position: "fixed",
                    icon: "",
                    color: "success",
                    onClick:
                      w[5] ||
                      (w[5] = (x) =>
                        p.$router.push({ name: `admin.${p.name}.create` })),
                  },
                  { default: ue(() => [g(De, { icon: "mdi-plus" })]), _: 1 }
                ))
              : it("", !0),
          ],
          64
        )
      );
    },
  }),
  HE = { class: "d-flex input-container" },
  hf = at({
    __name: "AdminEdit",
    props: {
      resource: {},
      name: {},
      form: {},
      fromApi: { type: Function },
      toApi: { type: Function },
      newEmpty: { type: Function },
      canCreate: { type: Boolean },
    },
    setup(e) {
      const t = pn(),
        n = vC(),
        a = zm(),
        r = e,
        l = S(() => n.params.id || null),
        o = W(r.newEmpty()),
        i = W(!1),
        s = W(!1);
      ce(
        i,
        (f) => {
          f
            ? (t.loadingExternal[`admin.${r.name}.edit`] = !0)
            : delete t.loadingExternal[`admin.${r.name}.edit`];
        },
        { immediate: !0 }
      ),
        rt(() => {
          delete t.loadingExternal[`admin.${r.name}.edit`];
        });
      async function u() {
        var f;
        try {
          if (((i.value = !0), !l.value)) {
            o.value = r.newEmpty();
            return;
          }
          const v = await Lt({ resource: r.resource, id: l.value });
          o.value =
            ((f = r.fromApi) == null ? void 0 : f.call(r, v.data)) ?? v.data;
        } catch (v) {
          t.showToast(v.message, "error");
        } finally {
          i.value = !1;
        }
      }
      u().catch(console.error);
      async function c() {
        var f;
        try {
          if (!s.value) throw new Error("Bitte alle Felder ausfüllen");
          (i.value = !0),
            l.value
              ? (await Lt({
                  resource: r.resource,
                  method: "PATCH",
                  id: l.value,
                  data:
                    ((f = r.toApi) == null ? void 0 : f.call(r, o.value)) ??
                    o.value,
                }),
                u().catch(console.error),
                a.push({ name: `admin.${r.name}.list` }).catch(console.error))
              : (await Lt({
                  resource: r.resource,
                  method: "POST",
                  data: o.value,
                }),
                a.push({ name: `admin.${r.name}.list` }).catch(console.error)),
            t.showToast("Erfolgreich abgespeichert", "success");
        } catch (v) {
          t.showToast(v.message, "error");
        } finally {
          i.value = !1;
        }
      }
      function d() {
        confirm("Wirklich zurücksetzen?") && (o.value = r.newEmpty());
      }
      return (f, v) => (
        ge(),
        Te(
          ey,
          {
            modelValue: s.value,
            "onUpdate:modelValue": v[1] || (v[1] = (m) => (s.value = m)),
            onSubmit: Ca(c, ["prevent"]),
          },
          {
            default: ue(() => [
              g(
                lo,
                { class: "input-container mb-10" },
                {
                  default: ue(() => [
                    (ge(!0),
                    tt(
                      ye,
                      null,
                      Vn(
                        f.form,
                        (m) => (
                          ge(),
                          Te(
                            Wo,
                            {
                              key: m.label,
                              modelValue: o.value,
                              "onUpdate:modelValue":
                                v[0] || (v[0] = (h) => (o.value = h)),
                              "form-data": m,
                              loading: i.value,
                            },
                            null,
                            8,
                            ["modelValue", "form-data", "loading"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
              g(
                hE,
                {
                  color: "transparent",
                  class: "fab-bottom-right fab-bottom-left position-fixed",
                },
                {
                  default: ue(() => [
                    g(
                      lo,
                      { class: "py-0" },
                      {
                        default: ue(() => [
                          Ta("div", HE, [
                            g(
                              $e,
                              { color: "error", variant: "flat", onClick: d },
                              {
                                default: ue(
                                  () => v[2] || (v[2] = [je(" Zurücksetzen ")])
                                ),
                                _: 1,
                              }
                            ),
                            g(_s),
                            g(
                              $e,
                              {
                                class: "mr-1",
                                color: "grey-darken-2",
                                variant: "flat",
                                to: { name: `admin.${f.name}.list` },
                              },
                              {
                                default: ue(
                                  () => v[3] || (v[3] = [je(" Abbrechen ")])
                                ),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ),
                            g(
                              $e,
                              {
                                color: "primary",
                                variant: "flat",
                                type: "submit",
                              },
                              {
                                default: ue(() => [
                                  je(
                                    At(l.value ? "Aktualisieren" : "Erstellen"),
                                    1
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue"]
        )
      );
    },
  });
function $u(e) {
  const t = e.name,
    n = `/admin/${t}`;
  return {
    path: e.name,
    name: `admin.${e.name}`,
    component: Y1,
    redirect: { name: `admin.${e.name}.list` },
    meta: {
      icon: e.icon,
      title: e.title,
      isAllowed: S(() => {
        var r;
        return ((r = Ct().user) == null ? void 0 : r.isSuperAdmin) ?? !1;
      }),
    },
    children: [
      {
        path: "list",
        name: `admin.${e.name}.list`,
        component: NE,
        props: {
          resource: n,
          name: t,
          canCreate: e.create.canCreate,
          ...e.list,
        },
      },
      {
        path: "edit/:id",
        name: `admin.${e.name}.edit`,
        component: hf,
        props: { resource: n, name: t, ...e.edit, ...e.create },
      },
      {
        path: "create",
        name: `admin.${e.name}.create`,
        component: hf,
        props: { resource: n, name: t, ...e.edit, ...e.create },
      },
    ],
  };
}
function Mu(e) {
  return Object.entries(e).map(([t, n]) =>
    typeof n == "string" ? { key: t, title: n } : { key: t, ...n }
  );
}
function jE(e) {
  return async () => (await Lt({ resource: e })).data;
}
function tT(e) {
  return (t) =>
    !t && t !== 0 ? !0 : String(t).length < e ? `min. ${e} Zeichen` : !0;
}
function nT(e) {
  return (t) =>
    !t && t !== 0 ? !0 : String(t).length > e ? `max. ${e} Zeichen` : !0;
}
function ks(e) {
  return !e && e !== 0 ? "erforderlich" : !0;
}
function aT(e) {
  return (!e && e !== 0) || String(e).includes("@")
    ? !0
    : "ungültige E-Mail-Adresse";
}
function rT(e) {
  return !0;
}
const zE = $u({
    name: "company",
    title: "Unternehmen",
    icon: "mdi-company",
    edit: {
      form: [
        {
          formType: "CardType",
          label: "Unternehmen",
          icon: "mdi-company",
          items: [
            { formType: "TextType", label: "Name", field: "name", rules: [ks] },
            {
              formType: "CheckboxType",
              label: "Premium",
              field: "isPremium",
              rules: [],
            },
            {
              formType: "NumberType",
              label: "maximale Stellen",
              field: "maxJobCount",
              rules: [],
            },
            {
              formType: "NumberType",
              label: "aktuelle Stellen",
              field: "currentJobCount",
              readonly: !0,
              rules: [],
            },
          ],
        },
      ],
    },
    list: {
      headers: Mu({
        id: "ID",
        name: "Name",
        isPremium: "Premium",
        maxJobCount: "Anzahl Stellen",
      }),
      fromApi: (e) => ({ ...e }),
      filters: {
        form: [
          {
            formType: "CardType",
            layout: "flex",
            items: [
              {
                formType: "NumberType",
                field: "id",
                label: "ID",
                layoutWidth: 12,
              },
              {
                formType: "TextType",
                field: "name",
                label: "Name",
                layoutWidth: 12,
              },
              {
                formType: "SelectType",
                field: "isPremium",
                label: "Premium",
                layoutWidth: 12,
                clearable: !0,
                choices: () => [
                  { id: !0, name: "Ja" },
                  { id: !1, name: "Nein" },
                ],
              },
            ],
          },
        ],
        default: () => ({}),
      },
    },
    create: { canCreate: !0, newEmpty: () => ({}) },
  }),
  UE = $u({
    name: "users",
    title: "Benutzer",
    icon: "mdi-user",
    edit: {
      form: [
        {
          formType: "CardType",
          label: "Benutzer",
          icon: "mdi-user",
          items: [
            {
              formType: "TextType",
              label: "Vorname",
              field: "firstName",
              rules: [ks],
            },
            {
              formType: "TextType",
              label: "Nachname",
              field: "lastName",
              rules: [ks],
            },
          ],
        },
      ],
    },
    list: {
      headers: Mu({
        id: "ID",
        email: "E-Mail",
        firstName: "Vorname",
        lastName: "Nachname",
        companyName: "Unternehmen",
      }),
      fromApi: (e) => {
        var t;
        return { ...e, companyName: (t = e.company) == null ? void 0 : t.name };
      },
      filters: {
        form: [
          {
            formType: "CardType",
            layout: "flex",
            items: [
              {
                formType: "NumberType",
                field: "id",
                label: "ID",
                layoutWidth: 12,
              },
              {
                formType: "TextType",
                field: "email",
                label: "E-Mail",
                layoutWidth: 12,
              },
              {
                formType: "TextType",
                field: "firstName",
                label: "Vorname",
                layoutWidth: 12,
              },
              {
                formType: "TextType",
                field: "lastName",
                label: "Nachname",
                layoutWidth: 12,
              },
              {
                formType: "SelectType",
                field: "companyId",
                label: "Unternehmen",
                layoutWidth: 12,
                choices: jE("/admin/company/minimal"),
                clearable: !0,
              },
            ],
          },
        ],
        default: () => ({}),
      },
    },
    create: { canCreate: !0, newEmpty: () => ({}) },
  }),
  WE = $u({
    name: "jobs",
    title: "Jobs",
    icon: "mdi-briefcase",
    edit: {
      form: [
        {
          formType: "CardType",
          label: "Job",
          icon: "mdi-briefcase",
          items: [
            { formType: "NumberType", readonly: !0, label: "ID", field: "id" },
            {
              formType: "TextType",
              readonly: !0,
              label: "Name",
              field: "name",
            },
            {
              formType: "TextType",
              readonly: !0,
              label: "Firma",
              field: "companyName",
            },
            { formType: "CheckboxType", label: "Aktiv", field: "active" },
          ],
        },
      ],
    },
    list: {
      headers: Mu({
        id: "ID",
        name: "Name",
        companyName: "Firma",
        active: "Aktiv",
      }),
      fromApi: (e) => ({ ...e }),
      filters: {
        form: [
          {
            formType: "CardType",
            layout: "flex",
            items: [
              { formType: "NumberType", label: "ID", field: "id" },
              { formType: "TextType", label: "Name", field: "name" },
              {
                formType: "SelectType",
                label: "Aktiv",
                field: "active",
                choices: () => [
                  { id: !0, name: "Ja" },
                  { id: !1, name: "Nein" },
                ],
              },
            ],
          },
        ],
        default: () => ({}),
      },
    },
    create: { canCreate: !1, newEmpty: () => ({}) },
  }),
  GE = {
    path: "/admin",
    name: "AdminModule",
    component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
    redirect: { name: "admin.company" },
    meta: {
      isAllowed: S(() => {
        var t;
        const e = Ct(wt);
        return (
          e.loggedInAndVerified &&
          (((t = e.user) == null ? void 0 : t.isSuperAdmin) ?? !1)
        );
      }),
      title: "Admin",
      icon: "mdi-account-tie",
    },
    children: [zE, UE, WE],
  };
var KE = {};
const Bu = [
    {
      path: "/",
      name: "Root",
      redirect: { name: "Home" },
      meta: { hideInNav: !0 },
      children: [],
    },
    Xx,
    Qx,
    Jx,
    qx,
    Zx,
    GE,
    {
      path: "/login",
      name: "LoginModule",
      redirect: { name: "Login" },
      component: async () => Ne(() => import("./ModuleLayout-ecgGZz8o.js"), []),
      children: [
        {
          path: "",
          name: "Login",
          component: async () =>
            Ne(
              () => import("./LoginView-EUeUG8a8.js"),
              __vite__mapDeps([56, 10, 57])
            ),
          meta: { isAllowed: S(() => !Ct(wt).loggedIn) },
        },
      ],
    },
    {
      path: "/load/:id",
      name: "MatchLoad",
      component: async () =>
        Ne(
          () => import("./LoadView-2DQrsj08.js"),
          __vite__mapDeps([58, 4, 5, 59])
        ),
    },
  ],
  ea = dC({ history: Nw(KE.BASE_URL), routes: Bu });
ea.beforeEach(async (e, t, n) => {
  var l;
  const a = Ct(wt),
    r = Io(wt);
  await a.dataLoaded, await r.dataLoaded;
  for (const o of e.matched)
    if (!(((l = o.meta.isAllowed) == null ? void 0 : l.value) ?? !0)) {
      n({ name: a.defaultRoute });
      return;
    }
  n();
});
ce(
  () => Ct(wt).firebaseUser,
  async () => {
    var a;
    const e = Ct(wt),
      t = Io(wt);
    await e.dataLoaded, await t.dataLoaded;
    const n = ea.currentRoute.value;
    for (const r of n.matched)
      (((a = r.meta.isAllowed) == null ? void 0 : a.value) ?? !0) ||
        ea.push({ name: e.defaultRoute }).catch(console.error);
  }
);
ms.addListener("backButton", (e) => {
  e.canGoBack ? window.history.back() : ms.exitApp().catch(console.error);
}).catch(console.error);
var Go =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Lu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ti = { exports: {} },
  gf;
function ny() {
  return (
    gf ||
      ((gf = 1),
      (function (e, t) {
        (function (n, a) {
          e.exports = a();
        })(Go, function () {
          var n = 1e3,
            a = 6e4,
            r = 36e5,
            l = "millisecond",
            o = "second",
            i = "minute",
            s = "hour",
            u = "day",
            c = "week",
            d = "month",
            f = "quarter",
            v = "year",
            m = "date",
            h = "Invalid Date",
            y =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            p =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            w = {
              name: "en",
              weekdays:
                "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                  "_"
                ),
              months:
                "January_February_March_April_May_June_July_August_September_October_November_December".split(
                  "_"
                ),
              ordinal: function (M) {
                var N = ["th", "st", "nd", "rd"],
                  B = M % 100;
                return "[" + M + (N[(B - 20) % 10] || N[B] || N[0]) + "]";
              },
            },
            x = function (M, N, B) {
              var j = String(M);
              return !j || j.length >= N
                ? M
                : "" + Array(N + 1 - j.length).join(B) + M;
            },
            E = {
              s: x,
              z: function (M) {
                var N = -M.utcOffset(),
                  B = Math.abs(N),
                  j = Math.floor(B / 60),
                  H = B % 60;
                return (N <= 0 ? "+" : "-") + x(j, 2, "0") + ":" + x(H, 2, "0");
              },
              m: function M(N, B) {
                if (N.date() < B.date()) return -M(B, N);
                var j = 12 * (B.year() - N.year()) + (B.month() - N.month()),
                  H = N.clone().add(j, d),
                  z = B - H < 0,
                  O = N.clone().add(j + (z ? -1 : 1), d);
                return +(-(j + (B - H) / (z ? H - O : O - H)) || 0);
              },
              a: function (M) {
                return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
              },
              p: function (M) {
                return (
                  {
                    M: d,
                    y: v,
                    w: c,
                    d: u,
                    D: m,
                    h: s,
                    m: i,
                    s: o,
                    ms: l,
                    Q: f,
                  }[M] ||
                  String(M || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (M) {
                return M === void 0;
              },
            },
            k = "en",
            V = {};
          V[k] = w;
          var A = "$isDayjsObject",
            b = function (M) {
              return M instanceof I || !(!M || !M[A]);
            },
            C = function M(N, B, j) {
              var H;
              if (!N) return k;
              if (typeof N == "string") {
                var z = N.toLowerCase();
                V[z] && (H = z), B && ((V[z] = B), (H = z));
                var O = N.split("-");
                if (!H && O.length > 1) return M(O[0]);
              } else {
                var L = N.name;
                (V[L] = N), (H = L);
              }
              return !j && H && (k = H), H || (!j && k);
            },
            D = function (M, N) {
              if (b(M)) return M.clone();
              var B = typeof N == "object" ? N : {};
              return (B.date = M), (B.args = arguments), new I(B);
            },
            P = E;
          (P.l = C),
            (P.i = b),
            (P.w = function (M, N) {
              return D(M, {
                locale: N.$L,
                utc: N.$u,
                x: N.$x,
                $offset: N.$offset,
              });
            });
          var I = (function () {
              function M(B) {
                (this.$L = C(B.locale, null, !0)),
                  this.parse(B),
                  (this.$x = this.$x || B.x || {}),
                  (this[A] = !0);
              }
              var N = M.prototype;
              return (
                (N.parse = function (B) {
                  (this.$d = (function (j) {
                    var H = j.date,
                      z = j.utc;
                    if (H === null) return new Date(NaN);
                    if (P.u(H)) return new Date();
                    if (H instanceof Date) return new Date(H);
                    if (typeof H == "string" && !/Z$/i.test(H)) {
                      var O = H.match(y);
                      if (O) {
                        var L = O[2] - 1 || 0,
                          G = (O[7] || "0").substring(0, 3);
                        return z
                          ? new Date(
                              Date.UTC(
                                O[1],
                                L,
                                O[3] || 1,
                                O[4] || 0,
                                O[5] || 0,
                                O[6] || 0,
                                G
                              )
                            )
                          : new Date(
                              O[1],
                              L,
                              O[3] || 1,
                              O[4] || 0,
                              O[5] || 0,
                              O[6] || 0,
                              G
                            );
                      }
                    }
                    return new Date(H);
                  })(B)),
                    this.init();
                }),
                (N.init = function () {
                  var B = this.$d;
                  (this.$y = B.getFullYear()),
                    (this.$M = B.getMonth()),
                    (this.$D = B.getDate()),
                    (this.$W = B.getDay()),
                    (this.$H = B.getHours()),
                    (this.$m = B.getMinutes()),
                    (this.$s = B.getSeconds()),
                    (this.$ms = B.getMilliseconds());
                }),
                (N.$utils = function () {
                  return P;
                }),
                (N.isValid = function () {
                  return this.$d.toString() !== h;
                }),
                (N.isSame = function (B, j) {
                  var H = D(B);
                  return this.startOf(j) <= H && H <= this.endOf(j);
                }),
                (N.isAfter = function (B, j) {
                  return D(B) < this.startOf(j);
                }),
                (N.isBefore = function (B, j) {
                  return this.endOf(j) < D(B);
                }),
                (N.$g = function (B, j, H) {
                  return P.u(B) ? this[j] : this.set(H, B);
                }),
                (N.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (N.valueOf = function () {
                  return this.$d.getTime();
                }),
                (N.startOf = function (B, j) {
                  var H = this,
                    z = !!P.u(j) || j,
                    O = P.p(B),
                    L = function (ee, Q) {
                      var Y = P.w(
                        H.$u ? Date.UTC(H.$y, Q, ee) : new Date(H.$y, Q, ee),
                        H
                      );
                      return z ? Y : Y.endOf(u);
                    },
                    G = function (ee, Q) {
                      return P.w(
                        H.toDate()[ee].apply(
                          H.toDate("s"),
                          (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)
                        ),
                        H
                      );
                    },
                    oe = this.$W,
                    X = this.$M,
                    ve = this.$D,
                    re = "set" + (this.$u ? "UTC" : "");
                  switch (O) {
                    case v:
                      return z ? L(1, 0) : L(31, 11);
                    case d:
                      return z ? L(1, X) : L(0, X + 1);
                    case c:
                      var F = this.$locale().weekStart || 0,
                        Z = (oe < F ? oe + 7 : oe) - F;
                      return L(z ? ve - Z : ve + (6 - Z), X);
                    case u:
                    case m:
                      return G(re + "Hours", 0);
                    case s:
                      return G(re + "Minutes", 1);
                    case i:
                      return G(re + "Seconds", 2);
                    case o:
                      return G(re + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (N.endOf = function (B) {
                  return this.startOf(B, !1);
                }),
                (N.$set = function (B, j) {
                  var H,
                    z = P.p(B),
                    O = "set" + (this.$u ? "UTC" : ""),
                    L = ((H = {}),
                    (H[u] = O + "Date"),
                    (H[m] = O + "Date"),
                    (H[d] = O + "Month"),
                    (H[v] = O + "FullYear"),
                    (H[s] = O + "Hours"),
                    (H[i] = O + "Minutes"),
                    (H[o] = O + "Seconds"),
                    (H[l] = O + "Milliseconds"),
                    H)[z],
                    G = z === u ? this.$D + (j - this.$W) : j;
                  if (z === d || z === v) {
                    var oe = this.clone().set(m, 1);
                    oe.$d[L](G),
                      oe.init(),
                      (this.$d = oe.set(
                        m,
                        Math.min(this.$D, oe.daysInMonth())
                      ).$d);
                  } else L && this.$d[L](G);
                  return this.init(), this;
                }),
                (N.set = function (B, j) {
                  return this.clone().$set(B, j);
                }),
                (N.get = function (B) {
                  return this[P.p(B)]();
                }),
                (N.add = function (B, j) {
                  var H,
                    z = this;
                  B = Number(B);
                  var O = P.p(j),
                    L = function (X) {
                      var ve = D(z);
                      return P.w(ve.date(ve.date() + Math.round(X * B)), z);
                    };
                  if (O === d) return this.set(d, this.$M + B);
                  if (O === v) return this.set(v, this.$y + B);
                  if (O === u) return L(1);
                  if (O === c) return L(7);
                  var G =
                      ((H = {}), (H[i] = a), (H[s] = r), (H[o] = n), H)[O] || 1,
                    oe = this.$d.getTime() + B * G;
                  return P.w(oe, this);
                }),
                (N.subtract = function (B, j) {
                  return this.add(-1 * B, j);
                }),
                (N.format = function (B) {
                  var j = this,
                    H = this.$locale();
                  if (!this.isValid()) return H.invalidDate || h;
                  var z = B || "YYYY-MM-DDTHH:mm:ssZ",
                    O = P.z(this),
                    L = this.$H,
                    G = this.$m,
                    oe = this.$M,
                    X = H.weekdays,
                    ve = H.months,
                    re = H.meridiem,
                    F = function (Q, Y, se, _) {
                      return (Q && (Q[Y] || Q(j, z))) || se[Y].slice(0, _);
                    },
                    Z = function (Q) {
                      return P.s(L % 12 || 12, Q, "0");
                    },
                    ee =
                      re ||
                      function (Q, Y, se) {
                        var _ = Q < 12 ? "AM" : "PM";
                        return se ? _.toLowerCase() : _;
                      };
                  return z.replace(p, function (Q, Y) {
                    return (
                      Y ||
                      (function (se) {
                        switch (se) {
                          case "YY":
                            return String(j.$y).slice(-2);
                          case "YYYY":
                            return P.s(j.$y, 4, "0");
                          case "M":
                            return oe + 1;
                          case "MM":
                            return P.s(oe + 1, 2, "0");
                          case "MMM":
                            return F(H.monthsShort, oe, ve, 3);
                          case "MMMM":
                            return F(ve, oe);
                          case "D":
                            return j.$D;
                          case "DD":
                            return P.s(j.$D, 2, "0");
                          case "d":
                            return String(j.$W);
                          case "dd":
                            return F(H.weekdaysMin, j.$W, X, 2);
                          case "ddd":
                            return F(H.weekdaysShort, j.$W, X, 3);
                          case "dddd":
                            return X[j.$W];
                          case "H":
                            return String(L);
                          case "HH":
                            return P.s(L, 2, "0");
                          case "h":
                            return Z(1);
                          case "hh":
                            return Z(2);
                          case "a":
                            return ee(L, G, !0);
                          case "A":
                            return ee(L, G, !1);
                          case "m":
                            return String(G);
                          case "mm":
                            return P.s(G, 2, "0");
                          case "s":
                            return String(j.$s);
                          case "ss":
                            return P.s(j.$s, 2, "0");
                          case "SSS":
                            return P.s(j.$ms, 3, "0");
                          case "Z":
                            return O;
                        }
                        return null;
                      })(Q) ||
                      O.replace(":", "")
                    );
                  });
                }),
                (N.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (N.diff = function (B, j, H) {
                  var z,
                    O = this,
                    L = P.p(j),
                    G = D(B),
                    oe = (G.utcOffset() - this.utcOffset()) * a,
                    X = this - G,
                    ve = function () {
                      return P.m(O, G);
                    };
                  switch (L) {
                    case v:
                      z = ve() / 12;
                      break;
                    case d:
                      z = ve();
                      break;
                    case f:
                      z = ve() / 3;
                      break;
                    case c:
                      z = (X - oe) / 6048e5;
                      break;
                    case u:
                      z = (X - oe) / 864e5;
                      break;
                    case s:
                      z = X / r;
                      break;
                    case i:
                      z = X / a;
                      break;
                    case o:
                      z = X / n;
                      break;
                    default:
                      z = X;
                  }
                  return H ? z : P.a(z);
                }),
                (N.daysInMonth = function () {
                  return this.endOf(d).$D;
                }),
                (N.$locale = function () {
                  return V[this.$L];
                }),
                (N.locale = function (B, j) {
                  if (!B) return this.$L;
                  var H = this.clone(),
                    z = C(B, j, !0);
                  return z && (H.$L = z), H;
                }),
                (N.clone = function () {
                  return P.w(this.$d, this);
                }),
                (N.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (N.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (N.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (N.toString = function () {
                  return this.$d.toUTCString();
                }),
                M
              );
            })(),
            $ = I.prototype;
          return (
            (D.prototype = $),
            [
              ["$ms", l],
              ["$s", o],
              ["$m", i],
              ["$H", s],
              ["$W", u],
              ["$M", d],
              ["$y", v],
              ["$D", m],
            ].forEach(function (M) {
              $[M[1]] = function (N) {
                return this.$g(N, M[0], M[1]);
              };
            }),
            (D.extend = function (M, N) {
              return M.$i || (M(N, I, D), (M.$i = !0)), D;
            }),
            (D.locale = C),
            (D.isDayjs = b),
            (D.unix = function (M) {
              return D(1e3 * M);
            }),
            (D.en = V[k]),
            (D.Ls = V),
            (D.p = {}),
            D
          );
        });
      })(Ti)),
    Ti.exports
  );
}
var YE = ny();
const Ru = Lu(YE);
var qE = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a(ny());
  })(Go, function (n) {
    function a(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var r = a(n),
      l = {
        s: "ein paar Sekunden",
        m: ["eine Minute", "einer Minute"],
        mm: "%d Minuten",
        h: ["eine Stunde", "einer Stunde"],
        hh: "%d Stunden",
        d: ["ein Tag", "einem Tag"],
        dd: ["%d Tage", "%d Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: ["%d Monate", "%d Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: ["%d Jahre", "%d Jahren"],
      };
    function o(s, u, c) {
      var d = l[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", s);
    }
    var i = {
      name: "de",
      weekdays:
        "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
          "_"
        ),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      months:
        "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
          "_"
        ),
      monthsShort:
        "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split(
          "_"
        ),
      ordinal: function (s) {
        return s + ".";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LTS: "HH:mm:ss",
        LT: "HH:mm",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm",
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: o,
        m: o,
        mm: o,
        h: o,
        hh: o,
        d: o,
        dd: o,
        M: o,
        MM: o,
        y: o,
        yy: o,
      },
    };
    return r.default.locale(i, null, !0), i;
  });
})(qE);
var ay = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a();
  })(Go, function () {
    var n = "minute",
      a = /[+-]\d\d(?::?\d\d)?/g,
      r = /([+-]|\d\d)/g;
    return function (l, o, i) {
      var s = o.prototype;
      (i.utc = function (h) {
        var y = { date: h, utc: !0, args: arguments };
        return new o(y);
      }),
        (s.utc = function (h) {
          var y = i(this.toDate(), { locale: this.$L, utc: !0 });
          return h ? y.add(this.utcOffset(), n) : y;
        }),
        (s.local = function () {
          return i(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var u = s.parse;
      s.parse = function (h) {
        h.utc && (this.$u = !0),
          this.$utils().u(h.$offset) || (this.$offset = h.$offset),
          u.call(this, h);
      };
      var c = s.init;
      s.init = function () {
        if (this.$u) {
          var h = this.$d;
          (this.$y = h.getUTCFullYear()),
            (this.$M = h.getUTCMonth()),
            (this.$D = h.getUTCDate()),
            (this.$W = h.getUTCDay()),
            (this.$H = h.getUTCHours()),
            (this.$m = h.getUTCMinutes()),
            (this.$s = h.getUTCSeconds()),
            (this.$ms = h.getUTCMilliseconds());
        } else c.call(this);
      };
      var d = s.utcOffset;
      s.utcOffset = function (h, y) {
        var p = this.$utils().u;
        if (p(h))
          return this.$u ? 0 : p(this.$offset) ? d.call(this) : this.$offset;
        if (
          typeof h == "string" &&
          ((h = (function (k) {
            k === void 0 && (k = "");
            var V = k.match(a);
            if (!V) return null;
            var A = ("" + V[0]).match(r) || ["-", 0, 0],
              b = A[0],
              C = 60 * +A[1] + +A[2];
            return C === 0 ? 0 : b === "+" ? C : -C;
          })(h)),
          h === null)
        )
          return this;
        var w = Math.abs(h) <= 16 ? 60 * h : h,
          x = this;
        if (y) return (x.$offset = w), (x.$u = h === 0), x;
        if (h !== 0) {
          var E = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((x = this.local().add(w + E, n)).$offset = w),
            (x.$x.$localOffset = E);
        } else x = this.utc();
        return x;
      };
      var f = s.format;
      (s.format = function (h) {
        var y = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, y);
      }),
        (s.valueOf = function () {
          var h = this.$utils().u(this.$offset)
            ? 0
            : this.$offset +
              (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * h;
        }),
        (s.isUTC = function () {
          return !!this.$u;
        }),
        (s.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (s.toString = function () {
          return this.toDate().toUTCString();
        });
      var v = s.toDate;
      s.toDate = function (h) {
        return h === "s" && this.$offset
          ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : v.call(this);
      };
      var m = s.diff;
      s.diff = function (h, y, p) {
        if (h && this.$u === h.$u) return m.call(this, h, y, p);
        var w = this.local(),
          x = i(h).local();
        return m.call(w, x, y, p);
      };
    };
  });
})(ay);
var JE = ay.exports;
const XE = Lu(JE);
var ry = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a();
  })(Go, function () {
    var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      a = {};
    return function (r, l, o) {
      var i,
        s = function (f, v, m) {
          m === void 0 && (m = {});
          var h = new Date(f),
            y = (function (p, w) {
              w === void 0 && (w = {});
              var x = w.timeZoneName || "short",
                E = p + "|" + x,
                k = a[E];
              return (
                k ||
                  ((k = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: p,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: x,
                  })),
                  (a[E] = k)),
                k
              );
            })(v, m);
          return y.formatToParts(h);
        },
        u = function (f, v) {
          for (var m = s(f, v), h = [], y = 0; y < m.length; y += 1) {
            var p = m[y],
              w = p.type,
              x = p.value,
              E = n[w];
            E >= 0 && (h[E] = parseInt(x, 10));
          }
          var k = h[3],
            V = k === 24 ? 0 : k,
            A =
              h[0] +
              "-" +
              h[1] +
              "-" +
              h[2] +
              " " +
              V +
              ":" +
              h[4] +
              ":" +
              h[5] +
              ":000",
            b = +f;
          return (o.utc(A).valueOf() - (b -= b % 1e3)) / 6e4;
        },
        c = l.prototype;
      (c.tz = function (f, v) {
        f === void 0 && (f = i);
        var m,
          h = this.utcOffset(),
          y = this.toDate(),
          p = y.toLocaleString("en-US", { timeZone: f }),
          w = Math.round((y - new Date(p)) / 1e3 / 60),
          x = 15 * -Math.round(y.getTimezoneOffset() / 15) - w;
        if (!Number(x)) m = this.utcOffset(0, v);
        else if (
          ((m = o(p, { locale: this.$L })
            .$set("millisecond", this.$ms)
            .utcOffset(x, !0)),
          v)
        ) {
          var E = m.utcOffset();
          m = m.add(h - E, "minute");
        }
        return (m.$x.$timezone = f), m;
      }),
        (c.offsetName = function (f) {
          var v = this.$x.$timezone || o.tz.guess(),
            m = s(this.valueOf(), v, { timeZoneName: f }).find(function (h) {
              return h.type.toLowerCase() === "timezonename";
            });
          return m && m.value;
        });
      var d = c.startOf;
      (c.startOf = function (f, v) {
        if (!this.$x || !this.$x.$timezone) return d.call(this, f, v);
        var m = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return d.call(m, f, v).tz(this.$x.$timezone, !0);
      }),
        (o.tz = function (f, v, m) {
          var h = m && v,
            y = m || v || i,
            p = u(+o(), y);
          if (typeof f != "string") return o(f).tz(y);
          var w = (function (V, A, b) {
              var C = V - 60 * A * 1e3,
                D = u(C, b);
              if (A === D) return [C, A];
              var P = u((C -= 60 * (D - A) * 1e3), b);
              return D === P
                ? [C, D]
                : [V - 60 * Math.min(D, P) * 1e3, Math.max(D, P)];
            })(o.utc(f, h).valueOf(), p, y),
            x = w[0],
            E = w[1],
            k = o(x).utcOffset(E);
          return (k.$x.$timezone = y), k;
        }),
        (o.tz.guess = function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }),
        (o.tz.setDefault = function (f) {
          i = f;
        });
    };
  });
})(ry);
var ZE = ry.exports;
const QE = Lu(ZE);
Ru.extend(XE);
Ru.extend(QE);
function eP() {
  Ru.locale("de");
}
let yf = !1;
function tP() {
  yf ||
    ((yf = !0),
    Zm({
      apiKey: "AIzaSyAZP-LQyabFngd4GHhalqcjYKdwI7vFxDw",
      authDomain: "finda-c9dc1.firebaseapp.com",
      projectId: "finda-c9dc1",
      storageBucket: "finda-c9dc1.appspot.com",
      messagingSenderId: "8047192930",
      appId: "1:8047192930:web:73ef7d7bc5473a3ff59a3b",
    }));
}
async function nP(e) {
  iy().catch(console.error);
  try {
    eP();
  } catch (t) {
    console.error(t);
  }
  tP(),
    await ms.addListener("appUrlOpen", (t) => {
      const n = /https?:\/\/[^/]+([^#]*)/.exec(t.url);
      if (!n) return;
      const a = n[1];
      ea.push(a).catch(console.error);
    }),
    e.use(DS).use(ea).use(wt);
}
const aP = at({
    __name: "AppToast",
    props: {
      message: { type: String, required: !0 },
      messageColor: { type: String, default: "error" },
      modelValue: { type: Boolean, default: !1 },
    },
    emits: { "update:modelValue": (e) => typeof e == "boolean" },
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        r = S({
          get: () => n.modelValue,
          set: (l) => void a("update:modelValue", l),
        });
      return (l, o) => (
        ge(),
        Te(
          AE,
          {
            modelValue: r.value,
            "onUpdate:modelValue": o[1] || (o[1] = (i) => (r.value = i)),
            color: e.messageColor,
          },
          {
            actions: ue(() => [
              g(
                $e,
                {
                  color: e.messageColor,
                  variant: "flat",
                  onClick: o[0] || (o[0] = (i) => (r.value = !1)),
                },
                { default: ue(() => o[2] || (o[2] = [je("Schließen")])), _: 1 },
                8,
                ["color"]
              ),
            ]),
            default: ue(() => [je(At(e.message) + " ", 1)]),
            _: 1,
          },
          8,
          ["modelValue", "color"]
        )
      );
    },
  }),
  rP = {};
function lP(e, t) {
  return ge(), Te(mh, { indeterminate: "" });
}
const oP = fl(rP, [["render", lP]]),
  iP = { class: "flex-fill no-overflow" },
  sP = at({
    __name: "AppCard",
    props: {
      title: { type: String, default: "" },
      titleIcon: { type: String, default: null },
      rightIcon: { type: String, default: null },
      rightIconSize: { type: Number, default: 48 },
      content: { type: String, default: "" },
      noContent: { type: Boolean, default: !1 },
      rightContentClasses: { type: Array, default: () => [] },
      leftContentClasses: { type: Array, default: () => [] },
      contentClasses: { type: Array, default: () => [] },
      titleClasses: { type: Array, default: () => [] },
      cardClasses: { type: Array, default: () => [] },
      loading: { type: Boolean, default: !1 },
      loadingKeepsContent: { type: Boolean, default: !1 },
      error: { type: String, default: "" },
      container: { type: String, default: void 0 },
      density: { type: [Number, String], default: 2 },
      marginBottom: { type: [Number, String], default: 3 },
      rounded: { type: [String, Boolean], default: "xl" },
      paddingHorizontal: { type: [Number, String], default: 2 },
      color: { type: String, default: void 0 },
      unpadded: { type: Boolean, default: !1 },
      variant: { type: String, default: void 0 },
      titleLineHeight: { type: Number, default: 1.6 },
      contentCentered: { type: Boolean, default: !1 },
      leftContentMarginLeft: { type: Number, default: 5 },
      leftContentUncentered: { type: Boolean, default: !1 },
      rightContentMarginRight: { type: Number, default: 5 },
      rightContentUncentered: { type: Boolean, default: !1 },
    },
    emits: { retry: () => !0 },
    setup(e) {
      return (t, n) => (
        ge(),
        Te(
          jo,
          {
            class: Pt({
              "input-container":
                e.container === "default" || e.container === void 0,
              "input-container-lg": e.container === "lg",
              [`px-${e.paddingHorizontal}`]: !e.unpadded && !e.error,
              [`py-${e.density}`]: !e.unpadded && !e.error,
              [`rounded-${e.rounded}`]: !!e.rounded,
              [`mb-${e.marginBottom}`]: !0,
              ...Object.fromEntries(e.cardClasses.map((a) => [a, !0])),
            }),
            variant: e.error ? "flat" : e.variant ?? "tonal",
            color: e.error ? "error" : e.color,
            loading: e.loading && e.loadingKeepsContent,
          },
          {
            default: ue(() => [
              e.error
                ? (ge(),
                  tt(
                    ye,
                    { key: 0 },
                    [
                      g(or, null, {
                        default: ue(() => n[1] || (n[1] = [je(" Fehler ")])),
                        _: 1,
                      }),
                      g(ya, null, {
                        default: ue(() => [je(At(e.error), 1)]),
                        _: 1,
                      }),
                      g(xu, null, {
                        default: ue(() => [
                          g(
                            $e,
                            {
                              loading: e.loading,
                              variant: "flat",
                              color: "grey-darken-4",
                              onClick:
                                n[0] ||
                                (n[0] = Ca((a) => t.$emit("retry"), ["stop"])),
                            },
                            {
                              default: ue(
                                () => n[2] || (n[2] = [je("Erneut versuchen")])
                              ),
                              _: 1,
                            },
                            8,
                            ["loading"]
                          ),
                        ]),
                        _: 1,
                      }),
                    ],
                    64
                  ))
                : e.loading && !e.loadingKeepsContent
                ? (ge(),
                  Te(
                    ya,
                    { key: 1, class: "d-flex justify-center" },
                    { default: ue(() => [g(oP)]), _: 1 }
                  ))
                : (ge(),
                  tt(
                    "div",
                    {
                      key: 2,
                      class: Pt([
                        "d-flex flex-no-wrap justify-space-between",
                        [
                          ...(e.contentCentered
                            ? ["align-center", "h-100"]
                            : []),
                        ],
                      ]),
                    },
                    [
                      t.$slots["left-content"]
                        ? (ge(),
                          tt(
                            "div",
                            {
                              key: 0,
                              class: Pt([
                                "d-flex z-index-1",
                                [
                                  ...e.leftContentClasses,
                                  ...(e.leftContentUncentered
                                    ? []
                                    : ["align-center"]),
                                  `ml-${e.leftContentMarginLeft}`,
                                ],
                              ]),
                            },
                            [yn(t.$slots, "left-content", {}, void 0, !0)],
                            2
                          ))
                        : it("", !0),
                      Ta("div", iP, [
                        yn(t.$slots, "image", {}, void 0, !0),
                        t.$slots.title || e.title
                          ? (ge(),
                            Te(
                              or,
                              {
                                key: 0,
                                class: Pt([
                                  "white-space-normal",
                                  [
                                    ...e.titleClasses,
                                    ...(e.unpadded ? ["px-0"] : []),
                                  ],
                                ]),
                                style: co({
                                  lineHeight: `${e.titleLineHeight}`,
                                }),
                              },
                              {
                                default: ue(() => [
                                  yn(
                                    t.$slots,
                                    "title",
                                    {},
                                    () => [
                                      e.titleIcon
                                        ? (ge(),
                                          Te(
                                            De,
                                            {
                                              key: 0,
                                              class: "mr-1",
                                              icon: e.titleIcon,
                                            },
                                            null,
                                            8,
                                            ["icon"]
                                          ))
                                        : it("", !0),
                                      je(" " + At(e.title), 1),
                                    ],
                                    !0
                                  ),
                                ]),
                                _: 3,
                              },
                              8,
                              ["class", "style"]
                            ))
                          : it("", !0),
                        (e.content || t.$slots.default) && !e.noContent
                          ? (ge(),
                            Te(
                              ya,
                              {
                                key: 1,
                                class: Pt([
                                  ...e.contentClasses,
                                  ...(e.unpadded ? ["px-0"] : []),
                                ]),
                              },
                              {
                                default: ue(() => [
                                  yn(
                                    t.$slots,
                                    "default",
                                    {},
                                    () => [je(At(e.content), 1)],
                                    !0
                                  ),
                                ]),
                                _: 3,
                              },
                              8,
                              ["class"]
                            ))
                          : it("", !0),
                      ]),
                      t.$slots["right-content"] || e.rightIcon
                        ? (ge(),
                          tt(
                            "div",
                            {
                              key: 1,
                              class: Pt([
                                "d-flex z-index-1",
                                [
                                  ...e.rightContentClasses,
                                  ...(e.rightContentUncentered
                                    ? []
                                    : ["align-center"]),
                                  `mr-${e.rightContentMarginRight}`,
                                ],
                              ]),
                            },
                            [
                              yn(
                                t.$slots,
                                "right-content",
                                {},
                                () => [
                                  e.rightIcon
                                    ? (ge(),
                                      Te(
                                        $n,
                                        { key: 0, size: e.rightIconSize },
                                        {
                                          default: ue(() => [
                                            g(
                                              De,
                                              {
                                                icon: e.rightIcon,
                                                size: e.rightIconSize,
                                                color: "white",
                                              },
                                              null,
                                              8,
                                              ["icon", "size"]
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ))
                                    : it("", !0),
                                ],
                                !0
                              ),
                            ],
                            2
                          ))
                        : it("", !0),
                    ],
                    2
                  )),
            ]),
            _: 3,
          },
          8,
          ["class", "variant", "color", "loading"]
        )
      );
    },
  }),
  uP = fl(sP, [["__scopeId", "data-v-f70258fa"]]),
  cP = at({
    __name: "AppModal",
    props: {
      title: { type: String, default: "" },
      modelValue: { type: Boolean, default: !1 },
      clickthroughToolbar: { type: Boolean, default: !1 },
      closeColor: { type: String, default: void 0 },
      closeVariant: { type: String, default: void 0 },
      cardClasses: { type: Array, default: () => [] },
    },
    emits: { "update:modelValue": (e) => typeof e == "boolean" },
    setup(e) {
      return (t, n) => (
        ge(),
        Te(
          Rk,
          {
            "model-value": e.modelValue,
            fullscreen: "",
            "onUpdate:modelValue":
              n[1] || (n[1] = (a) => t.$emit("update:modelValue", a)),
          },
          {
            default: ue(() => [
              g(
                jo,
                { class: Pt(["main-bg", e.cardClasses]), color: "background" },
                {
                  default: ue(() => [
                    g(
                      ql,
                      {
                        color: "transparent",
                        class: Pt([
                          {
                            "blur-behind": !e.clickthroughToolbar,
                            clickthrough: e.clickthroughToolbar,
                          },
                          "sticky-top",
                        ]),
                      },
                      {
                        default: ue(() => [
                          g(fu, null, {
                            default: ue(() => [
                              yn(
                                t.$slots,
                                "title",
                                {},
                                () => [je(At(e.title), 1)],
                                !0
                              ),
                            ]),
                            _: 3,
                          }),
                          yn(
                            t.$slots,
                            "close",
                            {
                              props: {
                                color: e.closeColor,
                                variant: e.closeVariant,
                                onClick: () => t.$emit("update:modelValue", !1),
                                text: "Schließen",
                              },
                            },
                            () => [
                              g(
                                $e,
                                {
                                  color: e.closeColor,
                                  variant: e.closeVariant,
                                  text: "Schließen",
                                  onClick:
                                    n[0] ||
                                    (n[0] = (a) =>
                                      t.$emit("update:modelValue", !1)),
                                },
                                null,
                                8,
                                ["color", "variant"]
                              ),
                            ],
                            !0
                          ),
                        ]),
                        _: 3,
                      },
                      8,
                      ["class"]
                    ),
                    g(ya, null, {
                      default: ue(() => [
                        yn(t.$slots, "default", {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    t.$slots.actions
                      ? (ge(),
                        Te(
                          xu,
                          { key: 0 },
                          {
                            default: ue(() => [
                              yn(t.$slots, "actions", {}, void 0, !0),
                            ]),
                            _: 3,
                          }
                        ))
                      : it("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["class"]
              ),
            ]),
            _: 3,
          },
          8,
          ["model-value"]
        )
      );
    },
  }),
  dP = fl(cP, [["__scopeId", "data-v-3931cc98"]]),
  fP = Ia("Device", {
    web: () =>
      Ne(() => import("./web-BoQhH34o.js"), []).then((e) => new e.DeviceWeb()),
  }),
  bf = rl("device", () => {
    const e = W(!0),
      t = W(null),
      n = W(null);
    async function a() {
      try {
        (e.value = !0), (t.value = await fP.getInfo()), (n.value = null);
      } catch (r) {
        n.value = r;
      } finally {
        e.value = !1;
      }
    }
    return (
      a().catch(console.error),
      { deviceData: t, loading: e, error: n, fetch: a }
    );
  }),
  vP = { key: 0 },
  mP = { key: 1 },
  hP = { key: 2 },
  gP = at({
    __name: "App",
    setup(e) {
      const t = pn(),
        n = Ct(),
        a = zm(),
        { lgAndUp: r } = Rn(),
        l = S(() =>
          Bu.filter((s) => {
            var u, c, d;
            return (
              !((u = s.meta) != null && u.hideInNav) &&
              (((d = (c = s.meta) == null ? void 0 : c.isAllowed) == null
                ? void 0
                : d.value) ??
                !1)
            );
          })
        ),
        o = S(() => {
          var s, u;
          return (u =
            (s = a.currentRoute.value.matched[0]) == null ? void 0 : s.name) ==
            null
            ? void 0
            : u.toString();
        }),
        i = Io();
      return (s, u) => {
        const c = dv("router-view");
        return (
          ge(),
          Te(
            K_,
            { class: Pt(Se(r) ? "has-side-nav" : "has-bottom-nav") },
            {
              default: ue(() => {
                var d;
                return [
                  Se(r) && l.value.length
                    ? (ge(),
                      Te(
                        EE,
                        { key: 0, color: "transparent", permanent: "" },
                        {
                          default: ue(() => [
                            g(ql, { color: "transparent" }),
                            g(
                              ys,
                              {
                                "model-value": o.value,
                                color: "secondary",
                                direction: "vertical",
                              },
                              {
                                default: ue(() => [
                                  (ge(!0),
                                  tt(
                                    ye,
                                    null,
                                    Vn(l.value, (f) => {
                                      var v, m, h, y;
                                      return (
                                        ge(),
                                        tt(
                                          ye,
                                          { key: f.path },
                                          [
                                            !(
                                              (v = f.meta) != null &&
                                              v.hideInNav
                                            ) &&
                                            (((h =
                                              (m = f.meta) == null
                                                ? void 0
                                                : m.isAllowed) == null
                                              ? void 0
                                              : h.value) ??
                                              !1)
                                              ? (ge(),
                                                Te(
                                                  Xl,
                                                  {
                                                    key: 0,
                                                    value: f.name ?? "",
                                                    to: { name: f.name },
                                                    "prepend-icon":
                                                      (y = f.meta) == null
                                                        ? void 0
                                                        : y.icon,
                                                  },
                                                  {
                                                    default: ue(() => {
                                                      var p;
                                                      return [
                                                        je(
                                                          At(
                                                            ((p = f.meta) ==
                                                            null
                                                              ? void 0
                                                              : p.title) ??
                                                              f.path
                                                          ),
                                                          1
                                                        ),
                                                      ];
                                                    }),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  [
                                                    "value",
                                                    "to",
                                                    "prepend-icon",
                                                  ]
                                                ))
                                              : it("", !0),
                                          ],
                                          64
                                        )
                                      );
                                    }),
                                    128
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["model-value"]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : it("", !0),
                  Se(n).error
                    ? (ge(),
                      tt(
                        ye,
                        { key: 1 },
                        [
                          g(
                            ch,
                            { flat: "", color: "transparent" },
                            {
                              default: ue(() => [
                                g(fu, null, {
                                  default: ue(
                                    () => u[2] || (u[2] = [je("Fehler")])
                                  ),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                          g(Eh, null, {
                            default: ue(() => [
                              g(
                                uP,
                                {
                                  error: Se(n).error.message,
                                  loading: Se(n).loading,
                                  onRetry: Se(n).fetchUser,
                                },
                                null,
                                8,
                                ["error", "loading", "onRetry"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ],
                        64
                      ))
                    : (ge(), Te(c, { key: 2 })),
                  ((d = Se(n).user) == null ? void 0 : d.type) ===
                  Se(Zn).Company
                    ? (ge(),
                      Te(
                        dP,
                        {
                          key: 3,
                          modelValue: Se(t).premiumModalShown,
                          "onUpdate:modelValue":
                            u[0] ||
                            (u[0] = (f) => (Se(t).premiumModalShown = f)),
                          title: "Premium buchen",
                          "clickthrough-toolbar": "",
                          "close-color": "background",
                          "close-variant": "flat",
                        },
                        {
                          default: ue(() => {
                            var f;
                            return [
                              Se(t).premiumModalMode === Se(ns).Premium
                                ? (ge(),
                                  tt(
                                    "div",
                                    vP,
                                    "Buchen Sie Premium auf unserer Webseite für diese Funktion"
                                  ))
                                : (ge(),
                                  tt(
                                    "div",
                                    mP,
                                    " Buchen Sie neue Stellen auf unserer Webseite, um mehr Stellen aktiv zu schalten "
                                  )),
                              Se(bf)().deviceData &&
                              ((f = Se(bf)().deviceData) == null
                                ? void 0
                                : f.platform) !== "ios"
                                ? (ge(),
                                  tt("div", hP, [
                                    g(
                                      $e,
                                      {
                                        class: "mt-5",
                                        color: "primary",
                                        href: `https://services.find-a.app/payments?companyId=${
                                          Se(i).company.id
                                        }`,
                                        target: "_blank",
                                        text:
                                          Se(t).premiumModalMode ===
                                          Se(ns).Premium
                                            ? "Premium-Mitglied werden"
                                            : "Jetzt Stellenanzeigen buchen",
                                      },
                                      null,
                                      8,
                                      ["href", "text"]
                                    ),
                                  ]))
                                : it("", !0),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ))
                    : it("", !0),
                  g(
                    aP,
                    {
                      modelValue: Se(t).toastShown,
                      "onUpdate:modelValue":
                        u[1] || (u[1] = (f) => (Se(t).toastShown = f)),
                      message: Se(t).toastMessage,
                      "message-color": Se(t).toastMessageColor,
                      "close-delay": "10",
                    },
                    null,
                    8,
                    ["modelValue", "message", "message-color"]
                  ),
                  !Se(r) && l.value.length
                    ? (ge(),
                      Te(
                        Bk,
                        {
                          key: 4,
                          "bg-color": "black",
                          elevation: "0",
                          class: "main-bottom",
                        },
                        {
                          default: ue(() => [
                            g(
                              ys,
                              {
                                "model-value": o.value,
                                stacked: "",
                                color: "secondary",
                              },
                              {
                                default: ue(() => [
                                  (ge(!0),
                                  tt(
                                    ye,
                                    null,
                                    Vn(l.value, (f) => {
                                      var v, m, h;
                                      return (
                                        ge(),
                                        tt(
                                          ye,
                                          { key: f.path },
                                          [
                                            !(
                                              (v = f.meta) != null &&
                                              v.hideInNav
                                            ) &&
                                            (((h =
                                              (m = f.meta) == null
                                                ? void 0
                                                : m.isAllowed) == null
                                              ? void 0
                                              : h.value) ??
                                              !1)
                                              ? (ge(),
                                                Te(
                                                  Xl,
                                                  {
                                                    key: 0,
                                                    value: f.name ?? "",
                                                    to: { name: f.name },
                                                    "hide-slider": "",
                                                  },
                                                  {
                                                    default: ue(() => {
                                                      var y, p;
                                                      return [
                                                        g(
                                                          De,
                                                          {
                                                            icon:
                                                              (y = f.meta) ==
                                                              null
                                                                ? void 0
                                                                : y.icon,
                                                            size: "x-large",
                                                          },
                                                          null,
                                                          8,
                                                          ["icon"]
                                                        ),
                                                        je(
                                                          " " +
                                                            At(
                                                              ((p = f.meta) ==
                                                              null
                                                                ? void 0
                                                                : p.title) ??
                                                                f.path
                                                            ),
                                                          1
                                                        ),
                                                      ];
                                                    }),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["value", "to"]
                                                ))
                                              : it("", !0),
                                          ],
                                          64
                                        )
                                      );
                                    }),
                                    128
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["model-value"]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : it("", !0),
                ];
              }),
              _: 1,
            },
            8,
            ["class"]
          )
        );
      };
    },
  }),
  yP = fl(gP, [["__scopeId", "data-v-3880a8d1"]]),
  pf = Ap(yP);
nP(pf)
  .then(() => pf.mount("#app"))
  .catch(console.error);
export {
  tl as $,
  ka as A,
  ks as B,
  Iu as C,
  aT as D,
  tT as E,
  ye as F,
  zP as G,
  vC as H,
  bP as I,
  Lt as J,
  ea as K,
  mh as L,
  uP as M,
  Vn as N,
  Pu as O,
  Io as P,
  S as Q,
  ce as R,
  pP as S,
  Ru as T,
  Zn as U,
  ch as V,
  Tm as W,
  ns as X,
  rl as Y,
  Dt as Z,
  fl as _,
  Ct as a,
  fe as a$,
  Yx as a0,
  JP as a1,
  dP as a2,
  jo as a3,
  ql as a4,
  ty as a5,
  Rk as a6,
  zm as a7,
  Vu as a8,
  ys as a9,
  xl as aA,
  XS as aB,
  UP as aC,
  Wt as aD,
  Af as aE,
  mt as aF,
  bo as aG,
  lt as aH,
  co as aI,
  Ia as aJ,
  Ne as aK,
  jr as aL,
  ya as aM,
  ft as aN,
  Aa as aO,
  xu as aP,
  K as aQ,
  ht as aR,
  nn as aS,
  SP as aT,
  Nt as aU,
  ne as aV,
  he as aW,
  Ua as aX,
  We as aY,
  Bt as aZ,
  ke as a_,
  Xl as aa,
  _s as ab,
  ef as ac,
  tf as ad,
  nT as ae,
  dl as af,
  le as ag,
  ff as ah,
  ze as ai,
  Bh as aj,
  el as ak,
  $k as al,
  hh as am,
  rr as an,
  mg as ao,
  ir as ap,
  XP as aq,
  th as ar,
  CP as as,
  oP as at,
  $n as au,
  or as av,
  M_ as aw,
  KP as ax,
  ZP as ay,
  YP as az,
  W as b,
  jP as b$,
  sl as b0,
  Ie as b1,
  dn as b2,
  Xt as b3,
  be as b4,
  pe as b5,
  Ln as b6,
  eT as b7,
  Ac as b8,
  xt as b9,
  Z1 as bA,
  wP as bB,
  Pa as bC,
  aa as bD,
  oh as bE,
  Nh as bF,
  Mo as bG,
  Me as bH,
  Gt as bI,
  wo as bJ,
  af as bK,
  pu as bL,
  rT as bM,
  fn as bN,
  Ft as bO,
  UC as bP,
  _P as bQ,
  kP as bR,
  TP as bS,
  LP as bT,
  DP as bU,
  NP as bV,
  vs as bW,
  Kl as bX,
  Vl as bY,
  FP as bZ,
  xP as b_,
  It as ba,
  zh as bb,
  Ho as bc,
  Ve as bd,
  No as be,
  lr as bf,
  Lh as bg,
  qP as bh,
  Ae as bi,
  Ih as bj,
  un as bk,
  qe as bl,
  o1 as bm,
  Oh as bn,
  GP as bo,
  QP as bp,
  WP as bq,
  yn as br,
  il as bs,
  He as bt,
  Ge as bu,
  dr as bv,
  AS as bw,
  Oo as bx,
  Ic as by,
  An as bz,
  Te as c,
  PP as c0,
  cr as c1,
  HP as c2,
  qm as c3,
  MP as c4,
  is as c5,
  OP as c6,
  $P as c7,
  Xe as c8,
  pC as c9,
  Ym as ca,
  AP as cb,
  EP as cc,
  VP as cd,
  vd as ce,
  fd as cf,
  BP as cg,
  kC as ch,
  EC as ci,
  IP as cj,
  bd as ck,
  yd as cl,
  QC as cm,
  RP as cn,
  at as d,
  tt as e,
  g as f,
  Lu as g,
  Eh as h,
  $e as i,
  De as j,
  it as k,
  je as l,
  fu as m,
  lo as n,
  ge as o,
  ey as p,
  Ca as q,
  dv as r,
  Vo as s,
  At as t,
  pn as u,
  Ta as v,
  ue as w,
  Pt as x,
  Se as y,
  lh as z,
};
