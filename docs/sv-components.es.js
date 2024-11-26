function Eb() {
  Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));
}
const $s = {
  get(i, t) {
    var e;
    return (e = t[Symbol.metadata]) == null ? void 0 : e[i];
  },
  define(i, t, ...e) {
    var r;
    let s = (r = Object.getOwnPropertyDescriptor(t, Symbol.metadata)) == null ? void 0 : r.value;
    s == null && Object.defineProperty(t, Symbol.metadata, { value: s = /* @__PURE__ */ Object.create(null), enumerable: !0, configurable: !0, writable: !0 });
    const n = e.length;
    switch (n) {
      case 0:
        throw new Error("At least one key must be provided");
      case 1:
        s[e[0]] = i;
        return;
      case 2:
        s[e[0]] = s[e[1]] = i;
        return;
      default: {
        for (let o = 0; o < n; ++o)
          s[e[o]] = i;
        return;
      }
    }
  },
  has(i, t) {
    const e = t[Symbol.metadata];
    return e == null ? !1 : i in e;
  },
  delete(i, t) {
    const e = t[Symbol.metadata];
    e != null && Reflect.deleteProperty(e, i);
  }
}, zr = Object.freeze, Sf = Object.assign, Ob = String, os = $s.get, Mr = $s.define, jt = (i) => i instanceof Promise, Bt = (i) => i instanceof Array, $n = (i) => i instanceof Set, Qs = (i) => i instanceof Map, Af = (i) => i instanceof Object;
function Lo(i) {
  return typeof i == "object" && i !== null || typeof i == "function";
}
const pt = (i) => typeof i == "function", at = (i) => typeof i == "string", Rb = (i) => typeof i == "number", mt = () => /* @__PURE__ */ Object.create(null), Os = Object.is, Nt = (i, ...t) => new Error(`AUR${Ob(i).padStart(4, "0")}: ${$b(i, ...t)}`), Db = {
  1: "No registration for interface: '{{0}}'",
  2: `'{{0}}' was registered with "none" resolver, are you injecting the right key?`,
  3: "Cyclic dependency found: {{0}}",
  4: "Resolver for {{0}} returned a null factory",
  5: "Invalid resolver strategy specified: {{0}}. Did you assign an invalid strategy value?",
  6: "Unable to autoregister dependency: {{0}}",
  7: 'Resource key "{{0}}" already registered',
  8: "Unable to resolve key: {{0}}",
  9: "Attempted to jitRegister something that is not a constructor: '{{0}}'. Did you forget to register this resource?",
  10: 'Attempted to jitRegister an intrinsic type: "{{0}}". Did you forget to add @inject(Key)',
  11: "Invalid resolver, null/undefined returned from the static register method.",
  12: "Attempted to jitRegister an interface: {{0}}",
  13: "Cannot call resolve '{{0}}' before calling prepare or after calling dispose.",
  14: "Key cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?A common cause is circular dependency with bundler, did you accidentally introduce circular dependency into your module graph?",
  15: "'{{0}}' is a native function and cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.",
  16: 'There is not a currently active container to resolve "{{0}}". Are you trying to "new Class(...)" that has a resolve(...) call?',
  17: "Failed to instantiate '{{0}}' via @newInstanceOf/@newInstanceForScope, there's no registration and no default implementation, or the default implementation does not result in factory for constructing the instances.",
  18: "Invalid channel name or instance: '{{0}}'.",
  19: "Invalid channel name or type: {{0}}.",
  20: "No defined value found when calling firstDefined()",
  21: "Invalid module transform input: {{0}}. Expected Promise or Object.",
  22: "The @inject decorator on the target ('{{0}}') type '{{1}}' is not supported.",
  23: "Resource key '{{0}}' has already been registered."
}, $b = (i, ...t) => {
  let e = Db[i];
  for (let s = 0; s < t.length; ++s)
    e = e.replace(`{{${s}}}`, String(t[s]));
  return e;
}, Mn = (...i) => globalThis.console.error(...i), Tr = /* @__PURE__ */ (() => {
  const i = {};
  let t = !1, e = 0, s = 0, n = 0;
  return (r) => {
    switch (typeof r) {
      case "number":
        return r >= 0 && (r | 0) === r;
      case "string":
        if (t = i[r], t !== void 0)
          return t;
        if (e = r.length, e === 0)
          return i[r] = !1;
        for (s = 0, n = 0; n < e; ++n)
          if (s = r.charCodeAt(n), n === 0 && s === 48 && e > 1 || s < 48 || s > 57)
            return i[r] = !1;
        return i[r] = !0;
      default:
        return !1;
    }
  };
})(), Mf = /* @__PURE__ */ function() {
  const i = Sf(mt(), {
    0: !0,
    1: !0,
    2: !0,
    3: !0,
    4: !0,
    5: !0,
    6: !0,
    7: !0,
    8: !0,
    9: !0
  }), t = (e) => e === "" ? 0 : e !== e.toUpperCase() ? 3 : e !== e.toLowerCase() ? 2 : i[e] === !0 ? 1 : 0;
  return (e, s) => {
    const n = e.length;
    if (n === 0)
      return e;
    let r = !1, o = "", a, l = "", c = 0, h = e.charAt(0), u = t(h), d = 0;
    for (; d < n; ++d)
      a = c, l = h, c = u, h = e.charAt(d + 1), u = t(h), c === 0 ? o.length > 0 && (r = !0) : (!r && o.length > 0 && c === 2 && (r = a === 3 || u === 3), o += s(l, r), r = !1);
    return o;
  };
}(), qt = /* @__PURE__ */ function() {
  const i = mt(), t = (e, s) => s ? e.toUpperCase() : e.toLowerCase();
  return (e) => {
    let s = i[e];
    return s === void 0 && (s = i[e] = Mf(e, t)), s;
  };
}(), Tf = /* @__PURE__ */ function() {
  const i = mt();
  return (t) => {
    let e = i[t];
    return e === void 0 && (e = qt(t), e.length > 0 && (e = e[0].toUpperCase() + e.slice(1)), i[t] = e), e;
  };
}(), Pf = /* @__PURE__ */ function() {
  const i = mt(), t = (e, s) => s ? `-${e.toLowerCase()}` : e.toLowerCase();
  return (e) => {
    let s = i[e];
    return s === void 0 && (s = i[e] = Mf(e, t)), s;
  };
}(), za = (i) => {
  const t = i.length, e = Array(t);
  let s = 0;
  for (; s < t; ++s)
    e[s] = i[s];
  return e;
}, nn = (i, t) => {
  const e = t.name;
  t.addInitializer(function() {
    Reflect.defineProperty(this, e, {
      value: i.bind(this),
      writable: !0,
      configurable: !0,
      enumerable: !1
    });
  });
}, Vt = (...i) => {
  const t = [];
  let e = 0;
  const s = i.length;
  let n = 0, r, o = 0;
  for (; o < s; ++o)
    if (r = i[o], r !== void 0) {
      n = r.length;
      let a = 0;
      for (; a < n; ++a)
        t[e++] = r[a];
    }
  return t;
}, Hs = (...i) => {
  const t = i.length;
  let e, s = 0;
  for (; t > s; ++s)
    if (e = i[s], e !== void 0)
      return e;
  throw Nt(
    20
    /* ErrorNames.first_defined_no_value */
  );
}, Lb = /* @__PURE__ */ function() {
  const i = Function.prototype, t = Object.getPrototypeOf, e = /* @__PURE__ */ new WeakMap();
  let s = i, n = 0, r;
  return function(o) {
    if (r = e.get(o), r === void 0)
      for (e.set(o, r = [s = o]), n = 0; (s = t(s)) !== i; )
        r[++n] = s;
    return r;
  };
}();
function Dl(...i) {
  return Sf(mt(), ...i);
}
const Fh = /* @__PURE__ */ (() => {
  const i = /* @__PURE__ */ new WeakMap();
  let t = !1, e = "", s = 0;
  return (n) => (t = i.get(n), t == null && (s = (e = n.toString()).length, t = s > 28 && e.indexOf("[native code] }") === s - 15, i.set(n, t)), t);
})(), X = (i, t) => jt(i) ? i.then(t) : t(i), Wt = (...i) => {
  let t, e, s, n = 0, r = i.length;
  for (; n < r; ++n)
    t = i[n], jt(t = i[n]) && (e === void 0 ? e = t : s === void 0 ? s = [e, t] : s.push(t));
  return s === void 0 ? e : Promise.all(s);
}, Bb = (i, t) => new Oe(i, 0, t), Pr = (i, t) => new Oe(i, 1, t), If = (i, t) => new Oe(i, 2, t), Fb = (i, t) => new Oe(i, 3, t), Vb = (i, t) => new Oe(i, 3, Ef(t)), Bo = (i, t) => new Oe(t, 5, i), Nb = (i, ...t) => new s_(i, t), Vh = /* @__PURE__ */ new WeakMap(), Ef = (i) => (t, e, s) => {
  let n = Vh.get(t);
  if (n === void 0 && Vh.set(t, n = /* @__PURE__ */ new WeakMap()), n.has(s))
    return n.get(s);
  const r = i(t, e, s);
  return n.set(s, r), r;
}, Ni = {
  /**
   * allows you to pass an instance.
   * Every time you request this {@linkcode Key} you will get this instance back.
   * ```
   * Registration.instance(Foo, new Foo()));
   * ```
   *
   * @param key - key to register the instance with
   * @param value - the instance associated with the key
   */
  instance: Bb,
  /**
   * Creates an instance from the class.
   * Every time you request this {@linkcode Key} you will get the same one back.
   * ```
   * Registration.singleton(Foo, Foo);
   * ```
   *
   * @param key - key to register the singleton class with
   * @param value - the singleton class to instantiate when a container resolves the associated key
   */
  singleton: Pr,
  /**
   * Creates an instance from a class.
   * Every time you request this {@linkcode Key} you will get a new instance.
   * ```
   * Registration.instance(Foo, Foo);
   * ```
   *
   * @param key - key to register the transient class with
   * @param value - the class to instantiate when a container resolves the associated key
   */
  transient: If,
  /**
   * Creates an instance from the method passed.
   * Every time you request this {@linkcode Key} you will get a new instance.
   * ```
   * Registration.callback(Foo, () => new Foo());
   * Registration.callback(Bar, (c: IContainer) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - key to register the callback with
   * @param callback - the callback to invoke when a container resolves the associated key
   */
  callback: Fb,
  /**
   * Creates an instance from the method passed.
   * On the first request for the {@linkcode Key} your callback is called and returns an instance.
   * subsequent requests for the {@linkcode Key}, the initial instance returned will be returned.
   * If you pass the same {@linkcode Registration} to another container the same cached value will be used.
   * Should all references to the resolver returned be removed, the cache will expire.
   * ```
   * Registration.cachedCallback(Foo, () => new Foo());
   * Registration.cachedCallback(Bar, (c: IContainer) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - key to register the cached callback with
   * @param callback - the cache callback to invoke when a container resolves the associated key
   */
  cachedCallback: Vb,
  /**
   * creates an alternate {@linkcode Key} to retrieve an instance by.
   * Returns the same scope as the original {@linkcode Key}.
   * ```
   * Register.singleton(Foo, Foo)
   * Register.aliasTo(Foo, MyFoos);
   *
   * container.getAll(MyFoos) // contains an instance of Foo
   * ```
   *
   * @param originalKey - the real key to resolve the get call from a container
   * @param aliasKey - the key that a container allows to resolve the real key associated
   */
  aliasTo: Bo,
  /**
   * @internal
   * @param key - the key to register a defer registration
   * @param params - the parameters that should be passed to the resolution of the key
   */
  defer: Nb
}, Hr = function(i) {
  return function(e) {
    e.register(Pr(this, this), Bo(this, i));
  };
}, $i = "au:annotation", Xs = (i, t) => t === void 0 ? `${$i}:${i}` : `${$i}:${i}:${t}`, jb = (i, t) => {
  const e = os($i, i);
  e === void 0 ? Mr([t], i, $i) : e.push(t);
}, zb = /* @__PURE__ */ zr({
  name: "au:annotation",
  appendTo: jb,
  set(i, t, e) {
    Mr(e, i, Xs(t));
  },
  get: (i, t) => os(Xs(t), i),
  getKeys(i) {
    let t = os($i, i);
    return t === void 0 && Mr(t = [], i, $i), t;
  },
  isKey: (i) => i.startsWith($i),
  keyFor: Xs
}), ss = "au:resource", Zi = (i, t, e) => `${ss}:${i}`, Of = {
  annotation: zb
}, Rf = Object.prototype.hasOwnProperty;
function Se(i, t, e, s) {
  let n = os(Xs(i), e);
  return n === void 0 ? (n = t[i], n === void 0 ? (n = e[i], n === void 0 || !Rf.call(e, i) ? s() : n) : n) : n;
}
function Le(i, t, e) {
  let s = os(Xs(i), t);
  return s === void 0 ? (s = t[i], s === void 0 || !Rf.call(t, i) ? e() : s) : s;
}
function Be(i, t, e) {
  const s = t[i];
  return s === void 0 ? e() : s;
}
const us = Symbol.for("au:registrable"), Hb = {
  none(i) {
    throw Nt(2, i);
  },
  singleton: (i) => new Oe(i, 1, i),
  transient: (i) => new Oe(i, 2, i)
};
class is {
  constructor(t, e) {
    this.inheritParentResources = t, this.defaultResolver = e;
  }
  static from(t) {
    return t === void 0 || t === is.DEFAULT ? is.DEFAULT : new is(t.inheritParentResources ?? !1, t.defaultResolver ?? Hb.singleton);
  }
}
is.DEFAULT = is.from({});
const Wb = (i) => new ar(null, is.from(i)), Ub = new Set("Array ArrayBuffer Boolean DataView Date Error EvalError Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Number Object Promise RangeError ReferenceError RegExp Set SharedArrayBuffer String SyntaxError TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array URIError WeakMap WeakSet".split(" "));
let qb = 0, St = null;
class ar {
  get depth() {
    return this._parent === null ? 0 : this._parent.depth + 1;
  }
  get parent() {
    return this._parent;
  }
  constructor(t, e) {
    if (this.id = ++qb, this._registerDepth = 0, this._disposableResolvers = /* @__PURE__ */ new Map(), this._parent = t, this.config = e, this._resolvers = /* @__PURE__ */ new Map(), this.res = {}, t === null)
      this.root = this, this._factories = /* @__PURE__ */ new Map();
    else if (this.root = t.root, this._factories = t._factories, e.inheritParentResources)
      for (const s in t.res)
        this.registerResolver(s, t.res[s]);
    this._resolvers.set(Ln, Yb);
  }
  register(...t) {
    var h, u, d, f;
    if (++this._registerDepth === 100)
      throw Nt(6, ...t);
    let e, s, n, r, o, a = 0, l = t.length, c;
    for (; a < l; ++a)
      if (e = t[a], !!Lo(e))
        if (sr(e))
          e.register(this);
        else if ((c = os(ss, e)) != null)
          c.register(this);
        else if (Xb(e)) {
          const g = (h = e[Symbol.metadata]) == null ? void 0 : h[us];
          if (sr(g))
            g.register(this);
          else if (at((u = e.$au) == null ? void 0 : u.type)) {
            const p = e.$au, m = (e.aliases ?? tt).concat(p.aliases ?? tt);
            let b = `${ss}:${p.type}:${p.name}`;
            if (this.has(b, !1)) {
              (d = globalThis.console) == null || d.warn(Nt(7, b));
              continue;
            }
            for (Bo(e, b).register(this), this.has(e, !1) || Pr(e, e).register(this), r = 0, o = m.length; r < o; ++r) {
              if (b = `${ss}:${p.type}:${m[r]}`, this.has(b, !1)) {
                (f = globalThis.console) == null || f.warn(Nt(7, b));
                continue;
              }
              Bo(e, b).register(this);
            }
          } else
            Pr(e, e).register(this);
        } else
          for (s = Object.keys(e), r = 0, o = s.length; r < o; ++r)
            n = e[s[r]], Lo(n) && (sr(n) ? n.register(this) : this.register(n));
    return --this._registerDepth, this;
  }
  registerResolver(t, e, s = !1) {
    Wn(t);
    const n = this._resolvers, r = n.get(t);
    if (r == null) {
      if (n.set(t, e), Ha(t)) {
        if (this.res[t] !== void 0)
          throw Nt(7, t);
        this.res[t] = e;
      }
    } else r instanceof Oe && r._strategy === 4 ? r._state.push(e) : n.set(t, new Oe(t, 4, [r, e]));
    return s && this._disposableResolvers.set(t, e), e;
  }
  deregister(t) {
    Wn(t);
    const e = this._resolvers.get(t);
    e != null && (this._resolvers.delete(t), Ha(t) && delete this.res[t], this._disposableResolvers.has(t) && (e.dispose(), this._disposableResolvers.delete(t)));
  }
  // public deregisterResolverFor<K extends Key>(key: K, searchAncestors: boolean): void {
  //   validateKey(key);
  //   // eslint-disable-next-line @typescript-eslint/no-this-alias
  //   let current: Container | null = this;
  //   let resolver: IResolver | undefined;
  //   while (current != null) {
  //     resolver = current._resolvers.get(key);
  //     if (resolver != null) {
  //       current._resolvers.delete(key);
  //       break;
  //     }
  //     if (current.parent == null) { return; }
  //     current = searchAncestors ? current.parent : null;
  //   }
  //   if (resolver == null) { return; }
  //   if (resolver instanceof Resolver && resolver.strategy === ResolverStrategy.array) {
  //     throw createError('Cannot deregister a resolver with array strategy');
  //   }
  //   if (this._disposableResolvers.has(resolver as IDisposableResolver<K>)) {
  //     (resolver as IDisposableResolver<K>).dispose();
  //   }
  //   if (isResourceKey(key)) {
  //     // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  //     delete this.res[key];
  //   }
  // }
  registerTransformer(t, e) {
    const s = this.getResolver(t);
    if (s == null)
      return !1;
    if (s.getFactory) {
      const n = s.getFactory(this);
      return n == null ? !1 : (n.registerTransformer(e), !0);
    }
    return !1;
  }
  getResolver(t, e = !0) {
    if (Wn(t), t.resolve !== void 0)
      return t;
    const s = St;
    let n = St = this, r, o;
    try {
      for (; n != null; )
        if (r = n._resolvers.get(t), r == null) {
          if (n._parent == null)
            return o = zh(t) ? this : n, e ? this._jitRegister(t, o) : null;
          n = n._parent;
        } else
          return r;
    } finally {
      St = s;
    }
    return null;
  }
  has(t, e = !1) {
    var s;
    return this._resolvers.has(t) || Ha(t) && t in this.res || ((e && ((s = this._parent) == null ? void 0 : s.has(t, !0))) ?? !1);
  }
  get(t) {
    if (Wn(t), t.$isResolver)
      return t.resolve(this, this);
    const e = St;
    let s = St = this, n, r;
    try {
      for (; s != null; )
        if (n = s._resolvers.get(t), n == null) {
          if (s._parent == null)
            return r = zh(t) ? this : s, n = this._jitRegister(t, r), n.resolve(s, this);
          s = s._parent;
        } else
          return n.resolve(s, this);
    } finally {
      St = e;
    }
    throw Nt(8, t);
  }
  getAll(t, e = !1) {
    Wn(t);
    const s = St, n = St = this;
    let r = n, o, a = tt;
    try {
      if (e) {
        for (; r != null; )
          o = r._resolvers.get(t), o != null && (a = a.concat(jh(o, r, n))), r = r._parent;
        return a;
      }
      for (; r != null; )
        if (o = r._resolvers.get(t), o == null) {
          if (r = r._parent, r == null)
            return tt;
        } else
          return jh(o, r, n);
    } finally {
      St = s;
    }
    return tt;
  }
  invoke(t, e) {
    if (Fh(t))
      throw Nt(15, t);
    const s = St;
    St = this;
    {
      let n, r;
      try {
        n = gn(t).map((o) => this.get(r = o));
      } catch (o) {
        throw Mn(`[DEV:aurelia] Error during construction of ${t.name ? t.name : `(Anonymous) ${String(t)}`}, caused by dependency: ${String(r)}`), St = s, o;
      }
      try {
        return e === void 0 ? new t(...n) : new t(...n, ...e);
      } catch (o) {
        throw Mn(`[DEV:aurelia] Error during construction of ${t.name ? t.name : `(Anonymous) ${String(t)}`}`), o;
      } finally {
        St = s;
      }
    }
    try {
      return e === void 0 ? new t(...gn(t).map(Ir, this)) : new t(...gn(t).map(Ir, this), ...e);
    } finally {
      St = s;
    }
  }
  hasFactory(t) {
    return this._factories.has(t);
  }
  getFactory(t) {
    let e = this._factories.get(t);
    if (e === void 0) {
      if (Fh(t))
        throw Nt(15, t);
      this._factories.set(t, e = new Kb(t, gn(t)));
    }
    return e;
  }
  registerFactory(t, e) {
    this._factories.set(t, e);
  }
  createChild(t) {
    return t === void 0 && this.config.inheritParentResources ? this.config === is.DEFAULT ? new ar(this, this.config) : new ar(this, is.from({
      ...this.config,
      inheritParentResources: !1
    })) : new ar(this, is.from(t ?? this.config));
  }
  disposeResolvers() {
    var r;
    const t = this._resolvers, e = this._disposableResolvers;
    let s, n;
    for ([n, s] of e.entries())
      (r = s.dispose) == null || r.call(s), t.delete(n);
    e.clear();
  }
  useResources(t) {
    const e = t.res;
    for (const s in e)
      this.registerResolver(s, e[s]);
  }
  find(t, e) {
    var o, a;
    const s = at(e) ? `${ss}:${t}:${e}` : t;
    let n = this, r = n.res[s];
    return r == null && (n = n.root, r = n.res[s]), r == null ? null : ((a = (o = r.getFactory) == null ? void 0 : o.call(r, n)) == null ? void 0 : a.Type) ?? null;
  }
  dispose() {
    this._disposableResolvers.size > 0 && this.disposeResolvers(), this._resolvers.clear(), this.root === this && (this._factories.clear(), this.res = {});
  }
  /** @internal */
  _jitRegister(t, e) {
    const s = sr(t);
    if (!pt(t) && !s)
      throw Nt(9, t);
    if (Ub.has(t.name))
      throw Nt(10, t);
    if (s) {
      const r = t.register(e, t);
      if (!(r instanceof Object) || r.resolve == null) {
        const o = e._resolvers.get(t);
        if (o != null)
          return o;
        throw Nt(11, t);
      }
      return r;
    }
    if (t.$isInterface)
      throw Nt(12, t.friendlyName);
    const n = this.config.defaultResolver(t, e);
    return e._resolvers.set(t, n), n;
  }
}
class Kb {
  constructor(t, e) {
    this.Type = t, this.dependencies = e, this.transformers = null;
  }
  construct(t, e) {
    const s = St;
    St = t;
    let n;
    {
      let r, o;
      try {
        r = this.dependencies.map((a) => t.get(o = a));
      } catch (a) {
        throw Mn(`[DEV:aurelia] Error during construction of ${this.Type.name ? this.Type.name : `(Anonymous) ${String(this.Type)}`}, caused by dependency: ${String(o)}`), St = s, a;
      }
      try {
        return e === void 0 ? n = new this.Type(...r) : n = new this.Type(...r, ...e), this.transformers == null ? n : this.transformers.reduce(Nh, n);
      } catch (a) {
        throw Mn(`[DEV:aurelia] Error during construction of ${this.Type.name ? this.Type.name : `(Anonymous) ${String(this.Type)}`}`), a;
      } finally {
        St = s;
      }
    }
    try {
      return e === void 0 ? n = new this.Type(...this.dependencies.map(Ir, t)) : n = new this.Type(...this.dependencies.map(Ir, t), ...e), this.transformers == null ? n : this.transformers.reduce(Nh, n);
    } finally {
      St = s;
    }
  }
  registerTransformer(t) {
    (this.transformers ?? (this.transformers = [])).push(t);
  }
}
function Nh(i, t) {
  return t(i);
}
function Wn(i) {
  if (i == null)
    throw Nt(
      14
      /* ErrorNames.null_undefined_key */
    );
}
function Ir(i) {
  return this.get(i);
}
function D(...i) {
  if (St == null)
    throw Nt(16, ...i);
  if (i.length === 1)
    try {
      return St.get(i[0]);
    } catch (t) {
      throw Mn(`[DEV:aurelia] resolve() call error for: ${String(i[0])}`), t;
    }
  else {
    let t;
    try {
      return i.map((e) => St.get(t = e));
    } catch (e) {
      throw Mn(`[DEV:aurelia] resolve() call error for: ${String(t)}`), e;
    }
  }
  return i.length === 1 ? St.get(i[0]) : i.map(Ir, St);
}
const jh = (i, t, e) => {
  if (i instanceof Oe && i._strategy === 4) {
    const s = i._state, n = s.length, r = Array(n);
    let o = 0;
    for (; o < n; ++o)
      r[o] = s[o].resolve(t, e);
    return r;
  }
  return [i.resolve(t, e)];
}, Yb = {
  $isResolver: !0,
  resolve(i, t) {
    return t;
  }
}, sr = (i) => pt(i == null ? void 0 : i.register), Qb = (i) => sr(i) && typeof i.registerInRequestor == "boolean", zh = (i) => Qb(i) && i.registerInRequestor, Xb = (i) => i.prototype !== void 0, Ha = (i) => at(i) && i.indexOf(":") > 0;
class Gb {
  constructor(t, e) {
    this._container = t, this._key = e;
  }
  instance(t) {
    return this._registerResolver(0, t);
  }
  singleton(t) {
    return this._registerResolver(1, t);
  }
  transient(t) {
    return this._registerResolver(2, t);
  }
  callback(t) {
    return this._registerResolver(3, t);
  }
  cachedCallback(t) {
    return this._registerResolver(3, Ef(t));
  }
  aliasTo(t) {
    return this._registerResolver(5, t);
  }
  /** @internal */
  _registerResolver(t, e) {
    const { _container: s, _key: n } = this;
    return this._container = this._key = void 0, s.registerResolver(n, new Oe(n, t, e));
  }
}
const Un = (i) => {
  const t = i.slice(), e = Object.keys(i), s = e.length;
  let n;
  for (let r = 0; r < s; ++r)
    n = e[r], Tr(n) || (t[n] = i[n]);
  return t;
}, Ao = Xs("di:paramtypes"), Zb = (i) => os(Ao, i), Df = (i) => os("design:paramtypes", i), Hh = (i) => {
  var t;
  return (t = i.metadata)[Ao] ?? (t[Ao] = []);
}, gn = (i) => {
  const t = Xs("di:dependencies");
  let e = os(t, i);
  if (e === void 0) {
    const s = i.inject;
    if (s === void 0) {
      const n = Df(i), r = Zb(i);
      if (n === void 0)
        if (r === void 0) {
          const o = Object.getPrototypeOf(i);
          pt(o) && o !== Function.prototype ? e = Un(gn(o)) : e = [];
        } else
          e = Un(r);
      else if (r === void 0)
        e = Un(n);
      else {
        e = Un(n);
        let o = r.length, a, l = 0;
        for (; l < o; ++l)
          a = r[l], a !== void 0 && (e[l] = a);
        const c = Object.keys(r);
        let h;
        for (l = 0, o = c.length, l = 0; l < o; ++l)
          h = c[l], Tr(h) || (e[h] = r[h]);
      }
    } else
      e = Un(s);
    Mr(e, i, t);
  }
  return e;
}, ii = (i, t) => {
  const e = pt(i) ? i : t, s = (at(i) ? i : void 0) ?? "(anonymous)", n = {
    // Old code kept with the hope that the argument decorator proposal will be standardized by TC39 (https://github.com/tc39/proposal-class-method-parameter-decorators)
    // function(_target: Injectable | AbstractInjectable, _property: string | symbol | undefined, _index: number | undefined): void {
    //    if (target == null || new.target !== undefined) {
    //     throw createMappedError(ErrorNames.no_registration_for_interface, friendlyName);
    //    }
    //    const annotationParamtypes = getOrCreateAnnotationParamTypes(target as Injectable);
    //    annotationParamtypes[index!] = Interface;
    // },
    $isInterface: !0,
    friendlyName: s,
    toString: () => `InterfaceSymbol<${s}>`,
    register: e != null ? (r, o) => e(new Gb(r, o ?? n)) : void 0
  };
  return n;
}, Sc = (...i) => (t, e) => {
  switch (e.kind) {
    case "class": {
      const s = Hh(e);
      let n, r = 0;
      for (; r < i.length; ++r)
        n = i[r], n !== void 0 && (s[r] = n);
      break;
    }
    case "field": {
      const s = Hh(e), n = i[0];
      n !== void 0 && (s[e.name] = n);
      break;
    }
    default:
      throw Nt(22, String(e.name), e.kind);
  }
}, ni = (Eb(), {
  createContainer: Wb,
  getDesignParamtypes: Df,
  // getAnnotationParamtypes,
  // getOrCreateAnnotationParamTypes,
  getDependencies: gn,
  /**
   * creates a decorator that also matches an interface and can be used as a {@linkcode Key}.
   * ```ts
   * const ILogger = DI.createInterface<Logger>('Logger');
   * container.register(Registration.singleton(ILogger, getSomeLogger()));
   * const log = container.get(ILogger);
   * log.info('hello world');
   * class Foo {
   *   constructor( @ILogger log: ILogger ) {
   *     log.info('hello world');
   *   }
   * }
   * ```
   * you can also build default registrations into your interface.
   * ```ts
   * export const ILogger = DI.createInterface<Logger>('Logger', builder => builder.cachedCallback(LoggerDefault));
   * const log = container.get(ILogger);
   * log.info('hello world');
   * class Foo {
   *   constructor( @ILogger log: ILogger ) {
   *     log.info('hello world');
   *   }
   * }
   * ```
   * but these default registrations won't work the same with other decorators that take keys, for example
   * ```ts
   * export const MyStr = DI.createInterface<string>('MyStr', builder => builder.instance('somestring'));
   * class Foo {
   *   constructor( @optional(MyStr) public readonly str: string ) {
   *   }
   * }
   * container.get(Foo).str; // returns undefined
   * ```
   * to fix this add this line somewhere before you do a `get`
   * ```ts
   * container.register(MyStr);
   * container.get(Foo).str; // returns 'somestring'
   * ```
   *
   * - @param configureOrName - supply a string to improve error messaging
   */
  createInterface: ii,
  inject: Sc,
  /**
   * Registers the `target` class as a transient dependency; each time the dependency is resolved
   * a new instance will be created.
   *
   * @param target - The class / constructor function to register as transient.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   *
   * @example ```ts
   * // On an existing class
   * class Foo { }
   * DI.transient(Foo);
   *
   * // Inline declaration
   * const Foo = DI.transient(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   */
  transient(i) {
    return i.register = function(t) {
      return If(i, i).register(t, i);
    }, i.registerInRequestor = !1, i;
  },
  /**
   * Registers the `target` class as a singleton dependency; the class will only be created once. Each
   * consecutive time the dependency is resolved, the same instance will be returned.
   *
   * @param target - The class / constructor function to register as a singleton.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   * @example ```ts
   * // On an existing class
   * class Foo { }
   * DI.singleton(Foo);
   *
   * // Inline declaration
   * const Foo = DI.singleton(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   */
  singleton(i, t = e_) {
    return i.register = function(e) {
      return Pr(i, i).register(e, i);
    }, i.registerInRequestor = t.scoped, i;
  }
}), Ln = /* @__PURE__ */ ii("IContainer"), Jb = Ln;
function Wh(i, t) {
  return ni.transient(i);
}
function t_(i, t) {
  return i == null ? Wh : Wh(i);
}
const e_ = { scoped: !1 };
class Oe {
  get $isResolver() {
    return !0;
  }
  constructor(t, e, s) {
    this._resolving = !1, this._cachedFactory = null, this._key = t, this._strategy = e, this._state = s;
  }
  register(t, e) {
    return t.registerResolver(e || this._key, this);
  }
  resolve(t, e) {
    switch (this._strategy) {
      case 0:
        return this._state;
      case 1: {
        if (this._resolving)
          throw Nt(3, this._state.name);
        return this._resolving = !0, this._state = (this._cachedFactory = t.getFactory(this._state)).construct(e), this._strategy = 0, this._resolving = !1, this._state;
      }
      case 2: {
        const s = t.getFactory(this._state);
        if (s === null)
          throw Nt(4, this._key);
        return s.construct(e);
      }
      case 3:
        return this._state(t, e, this);
      case 4:
        return this._state[0].resolve(t, e);
      case 5:
        return e.get(this._state);
      default:
        throw Nt(5, this._strategy);
    }
  }
  getFactory(t) {
    var e, s;
    switch (this._strategy) {
      case 1:
      case 2:
        return t.getFactory(this._state);
      case 5:
        return ((s = (e = t.getResolver(this._state)) == null ? void 0 : e.getFactory) == null ? void 0 : s.call(e, t)) ?? null;
      case 0:
        return this._cachedFactory;
      default:
        return null;
    }
  }
}
class $t {
  get friendlyName() {
    return this._name;
  }
  constructor(t, e = null, s = null) {
    this._name = t, this._instance = e, this._Type = s;
  }
  prepare(t) {
    this._instance = t;
  }
  get $isResolver() {
    return !0;
  }
  resolve() {
    if (this._instance == null)
      throw Nt(13, this._name);
    return this._instance;
  }
  getFactory(t) {
    return this._Type == null ? null : t.getFactory(this._Type);
  }
  dispose() {
    this._instance = null;
  }
}
class s_ {
  constructor(t, e) {
    this.key = t, this.params = e;
  }
  register(t) {
    t.has(this.key, !0) ? t.get(this.key).register(t, ...this.params) : t.register(...this.params.filter((e) => typeof e == "object"));
  }
}
const tt = zr([]), i_ = zr({});
function ns() {
}
const Bn = /* @__PURE__ */ ii("IPlatform");
function Wr(i) {
  return function(t) {
    function e(s, n) {
      Sc(e)(s, n);
    }
    return e.$isResolver = !0, e.resolve = function(s, n) {
      return i(t, s, n);
    }, e;
  };
}
const Ac = (i, t = !1) => {
  function e(s, n) {
    Sc(e)(s, n);
  }
  return e.$isResolver = !0, e.resolve = (s, n) => n.getAll(i, t), e;
}, $f = /* @__PURE__ */ Wr((i, t, e) => {
  if (e.has(i, !0))
    return e.get(i);
}), n_ = /* @__PURE__ */ Wr((i, t, e) => e.has(i, !1) ? e.get(i) : void 0), Tn = /* @__PURE__ */ Wr((i, t, e) => e.has(i, !1) ? e.get(i) : e.root.get(i)), r_ = /* @__PURE__ */ Wr((i, t, e) => e.has(i, !1) ? e.get(i) : e.root.has(i, !1) ? e.root.get(i) : void 0), o_ = /* @__PURE__ */ Wr((i, t, e) => (
  // prevent duplicate retrieval
  e === e.root ? e.getAll(i, !1) : e.has(i, !1) ? e.getAll(i, !1).concat(e.root.getAll(i, !1)) : e.root.getAll(i, !1)
));
function rn(i, t, e, s, n, r) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (var a = s.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", c = i ? s.static ? i : i.prototype : null, h = c ? Object.getOwnPropertyDescriptor(c, s.name) : {}, u, d = !1, f = e.length - 1; f >= 0; f--) {
    var g = {};
    for (var p in s) g[p] = p === "access" ? {} : s[p];
    for (var p in s.access) g.access[p] = s.access[p];
    g.addInitializer = function(b) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      r.push(o(b || null));
    };
    var m = (0, e[f])(a === "accessor" ? { get: h.get, set: h.set } : h[l], g);
    if (a === "accessor") {
      if (m === void 0) continue;
      if (m === null || typeof m != "object") throw new TypeError("Object expected");
      (u = o(m.get)) && (h.get = u), (u = o(m.set)) && (h.set = u), (u = o(m.init)) && n.unshift(u);
    } else (u = o(m)) && (a === "field" ? n.unshift(u) : h[l] = u);
  }
  c && Object.defineProperty(c, s.name, h), d = !0;
}
function a_(i, t, e) {
  for (var s = arguments.length > 2, n = 0; n < t.length; n++)
    e = s ? t[n].call(i, e) : t[n].call(i);
  return s ? e : void 0;
}
const lr = 0, cr = 1, hr = 2, kn = 3, ur = 4, dr = 5, l_ = 6, c_ = zr({
  /**
   * The most detailed information about internal app state.
   *
   * Disabled by default and should never be enabled in a production environment.
   */
  trace: lr,
  /**
   * Information that is useful for debugging during development and has no long-term value.
   */
  debug: cr,
  /**
   * Information about the general flow of the application that has long-term value.
   */
  info: hr,
  /**
   * Unexpected circumstances that require attention but do not otherwise cause the current flow of execution to stop.
   */
  warn: kn,
  /**
   * Unexpected circumstances that cause the flow of execution in the current activity to stop but do not cause an app-wide failure.
   */
  error: ur,
  /**
   * Unexpected circumstances that cause an app-wide failure or otherwise require immediate attention.
   */
  fatal: dr,
  /**
   * No messages should be written.
   */
  none: l_
}), Lf = /* @__PURE__ */ ii("ILogConfig", (i) => i.instance(new p_("no-colors", kn))), h_ = /* @__PURE__ */ ii("ISink"), u_ = /* @__PURE__ */ ii("ILogEventFactory", (i) => i.singleton(m_)), ji = /* @__PURE__ */ ii("ILogger", (i) => i.singleton(b_)), d_ = /* @__PURE__ */ ii("ILogScope"), f_ = /* @__PURE__ */ zr({
  key: Xs("logger-sink-handles"),
  define(i, t) {
    Mr(t.handles, i, this.key);
  },
  getHandles(i) {
    return os(this.key, i.constructor);
  }
}), ks = Dl({
  red(i) {
    return `\x1B[31m${i}\x1B[39m`;
  },
  green(i) {
    return `\x1B[32m${i}\x1B[39m`;
  },
  yellow(i) {
    return `\x1B[33m${i}\x1B[39m`;
  },
  blue(i) {
    return `\x1B[34m${i}\x1B[39m`;
  },
  magenta(i) {
    return `\x1B[35m${i}\x1B[39m`;
  },
  cyan(i) {
    return `\x1B[36m${i}\x1B[39m`;
  },
  white(i) {
    return `\x1B[37m${i}\x1B[39m`;
  },
  grey(i) {
    return `\x1B[90m${i}\x1B[39m`;
  }
});
class p_ {
  constructor(t, e) {
    this.colorOptions = t, this.level = e;
  }
}
const Wa = function() {
  const i = {
    "no-colors": Dl({
      TRC: "TRC",
      DBG: "DBG",
      INF: "INF",
      WRN: "WRN",
      ERR: "ERR",
      FTL: "FTL",
      QQQ: "???"
    }),
    colors: Dl({
      TRC: ks.grey("TRC"),
      DBG: ks.grey("DBG"),
      INF: ks.white("INF"),
      WRN: ks.yellow("WRN"),
      ERR: ks.red("ERR"),
      FTL: ks.red("FTL"),
      QQQ: ks.grey("???")
    })
  };
  return (t, e) => t <= lr ? i[e].TRC : t <= cr ? i[e].DBG : t <= hr ? i[e].INF : t <= kn ? i[e].WRN : t <= ur ? i[e].ERR : t <= dr ? i[e].FTL : i[e].QQQ;
}(), Uh = (i, t) => t === "no-colors" ? i.join(".") : i.map(ks.cyan).join("."), Ua = (i, t) => t === "no-colors" ? new Date(i).toISOString() : ks.grey(new Date(i).toISOString());
class g_ {
  constructor(t, e, s, n, r, o) {
    this.severity = t, this.message = e, this.optionalParams = s, this.scope = n, this.colorOptions = r, this.timestamp = o;
  }
  toString() {
    const { severity: t, message: e, scope: s, colorOptions: n, timestamp: r } = this;
    return s.length === 0 ? `${Ua(r, n)} [${Wa(t, n)}] ${e}` : `${Ua(r, n)} [${Wa(t, n)} ${Uh(s, n)}] ${e}`;
  }
  getFormattedLogInfo(t = !1) {
    const { severity: e, message: s, scope: n, colorOptions: r, timestamp: o, optionalParams: a } = this;
    let l = null, c = "";
    t && s instanceof Error ? l = s : c = s;
    const h = n.length === 0 ? "" : ` ${Uh(n, r)}`;
    let u = `${Ua(o, r)} [${Wa(e, r)}${h}] ${c}`;
    if (a === void 0 || a.length === 0)
      return l === null ? [u] : [u, l];
    let d = 0;
    for (; u.includes("%s"); )
      u = u.replace("%s", String(a[d++]));
    return l !== null ? [u, l, ...a.slice(d)] : [u, ...a.slice(d)];
  }
}
class m_ {
  constructor() {
    this.config = D(Lf);
  }
  createLogEvent(t, e, s, n) {
    return new g_(e, s, n, t.scope, this.config.colorOptions, Date.now());
  }
}
let b_ = (() => {
  var i;
  let t = [], e, s, n, r, o, a;
  return i = class {
    /* eslint-disable default-param-last */
    constructor(c = D(Lf), h = D(u_), u = D(Ac(h_)), d = D($f(d_)) ?? [], f = null) {
      this.scope = (a_(this, t), d), this._scopedLoggers = mt();
      let g, p, m, b, _, w;
      if (this.config = c, this._factory = h, this.sinks = u, f === null) {
        this.root = this, this.parent = this, g = this._traceSinks = [], p = this._debugSinks = [], m = this._infoSinks = [], b = this._warnSinks = [], _ = this._errorSinks = [], w = this._fatalSinks = [];
        for (const x of u) {
          const v = f_.getHandles(x);
          ((v == null ? void 0 : v.includes(lr)) ?? !0) && g.push(x), ((v == null ? void 0 : v.includes(cr)) ?? !0) && p.push(x), ((v == null ? void 0 : v.includes(hr)) ?? !0) && m.push(x), ((v == null ? void 0 : v.includes(kn)) ?? !0) && b.push(x), ((v == null ? void 0 : v.includes(ur)) ?? !0) && _.push(x), ((v == null ? void 0 : v.includes(dr)) ?? !0) && w.push(x);
        }
      } else
        this.root = f.root, this.parent = f, g = this._traceSinks = f._traceSinks, p = this._debugSinks = f._debugSinks, m = this._infoSinks = f._infoSinks, b = this._warnSinks = f._warnSinks, _ = this._errorSinks = f._errorSinks, w = this._fatalSinks = f._fatalSinks;
    }
    trace(c, ...h) {
      this.config.level <= lr && this._emit(this._traceSinks, lr, c, h);
    }
    debug(c, ...h) {
      this.config.level <= cr && this._emit(this._debugSinks, cr, c, h);
    }
    info(c, ...h) {
      this.config.level <= hr && this._emit(this._infoSinks, hr, c, h);
    }
    warn(c, ...h) {
      this.config.level <= kn && this._emit(this._warnSinks, kn, c, h);
    }
    error(c, ...h) {
      this.config.level <= ur && this._emit(this._errorSinks, ur, c, h);
    }
    fatal(c, ...h) {
      this.config.level <= dr && this._emit(this._fatalSinks, dr, c, h);
    }
    /**
     * Create a new logger with an additional permanent prefix added to the logging outputs.
     * When chained, multiple scopes are separated by a dot.
     *
     * This is preliminary API and subject to change before alpha release.
     *
     * @example
     *
     * ```ts
     * export class MyComponent {
     *   constructor(@ILogger private logger: ILogger) {
     *     this.logger.debug('before scoping');
     *     // console output: '[DBG] before scoping'
     *     this.logger = logger.scopeTo('MyComponent');
     *     this.logger.debug('after scoping');
     *     // console output: '[DBG MyComponent] after scoping'
     *   }
     *
     *   public doStuff(): void {
     *     const logger = this.logger.scopeTo('doStuff()');
     *     logger.debug('doing stuff');
     *     // console output: '[DBG MyComponent.doStuff()] doing stuff'
     *   }
     * }
     * ```
     */
    scopeTo(c) {
      const h = this._scopedLoggers;
      let u = h[c];
      return u === void 0 && (u = h[c] = new i(this.config, this._factory, null, this.scope.concat(c), this)), u;
    }
    /** @internal */
    _emit(c, h, u, d) {
      const f = pt(u) ? u() : u, g = this._factory.createLogEvent(this, h, f, d);
      for (let p = 0, m = c.length; p < m; ++p)
        c[p].handleEvent(g);
    }
  }, (() => {
    const l = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    e = [nn], s = [nn], n = [nn], r = [nn], o = [nn], a = [nn], rn(i, null, e, { kind: "method", name: "trace", static: !1, private: !1, access: { has: (c) => "trace" in c, get: (c) => c.trace }, metadata: l }, null, t), rn(i, null, s, { kind: "method", name: "debug", static: !1, private: !1, access: { has: (c) => "debug" in c, get: (c) => c.debug }, metadata: l }, null, t), rn(i, null, n, { kind: "method", name: "info", static: !1, private: !1, access: { has: (c) => "info" in c, get: (c) => c.info }, metadata: l }, null, t), rn(i, null, r, { kind: "method", name: "warn", static: !1, private: !1, access: { has: (c) => "warn" in c, get: (c) => c.warn }, metadata: l }, null, t), rn(i, null, o, { kind: "method", name: "error", static: !1, private: !1, access: { has: (c) => "error" in c, get: (c) => c.error }, metadata: l }, null, t), rn(i, null, a, { kind: "method", name: "fatal", static: !1, private: !1, access: { has: (c) => "fatal" in c, get: (c) => c.fatal }, metadata: l }, null, t), l && Object.defineProperty(i, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: l });
  })(), i;
})();
const Bf = "AccessThis", __ = "AccessBoundary", Mc = "AccessGlobal", Tc = "AccessScope", v_ = "ArrayLiteral", y_ = "ObjectLiteral", w_ = "PrimitiveLiteral", x_ = "Template", k_ = "Unary", C_ = "CallScope", S_ = "CallMember", A_ = "CallFunction", M_ = "CallGlobal", ha = "AccessMember", Ff = "AccessKeyed", T_ = "TaggedTemplate", P_ = "Binary", I_ = "Conditional", E_ = "Assign", O_ = "ArrowFunction", R_ = "ValueConverter", D_ = "BindingBehavior", Vf = "ArrayBindingPattern", Nf = "ObjectBindingPattern", jf = "BindingIdentifier", $_ = "ForOfStatement", L_ = "Interpolation", zf = "ArrayDestructuring", B_ = "ObjectDestructuring", F_ = "DestructuringAssignmentLeaf", V_ = "Custom";
class Hf {
  constructor(t) {
    this.value = t, this.$kind = V_;
  }
  evaluate(...t) {
    return this.value;
  }
  assign(...t) {
    return t;
  }
  bind(...t) {
  }
  unbind(...t) {
  }
  accept(t) {
  }
}
class N_ {
  constructor(t, e, s) {
    this.expression = t, this.name = e, this.args = s, this.$kind = D_, this.key = `_bb_${e}`;
  }
}
class j_ {
  constructor(t, e, s) {
    this.expression = t, this.name = e, this.args = s, this.$kind = R_;
  }
}
class z_ {
  constructor(t, e, s = "=") {
    this.target = t, this.value = e, this.op = s, this.$kind = E_;
  }
}
class H_ {
  constructor(t, e, s) {
    this.condition = t, this.yes = e, this.no = s, this.$kind = I_;
  }
}
class W_ {
  constructor(t) {
    this.name = t, this.$kind = Mc;
  }
}
class fr {
  constructor(t = 0) {
    this.ancestor = t, this.$kind = Bf;
  }
}
class U_ {
  constructor() {
    this.$kind = __;
  }
}
class pr {
  constructor(t, e = 0) {
    this.name = t, this.ancestor = e, this.$kind = Tc;
  }
}
const Wf = (i) => i.$kind === Mc || (i.$kind === ha || i.$kind === Ff) && i.accessGlobal;
class $l {
  constructor(t, e, s = !1) {
    this.object = t, this.name = e, this.optional = s, this.$kind = ha, this.accessGlobal = Wf(t);
  }
}
class Uf {
  constructor(t, e, s = !1) {
    this.object = t, this.key = e, this.optional = s, this.$kind = Ff, this.accessGlobal = Wf(t);
  }
}
class qf {
  constructor(t, e, s = 0, n = !1) {
    this.name = t, this.args = e, this.ancestor = s, this.optional = n, this.$kind = C_;
  }
}
class Fo {
  constructor(t, e, s, n = !1, r = !1) {
    this.object = t, this.name = e, this.args = s, this.optionalMember = n, this.optionalCall = r, this.$kind = S_;
  }
}
class Mo {
  constructor(t, e, s = !1) {
    this.func = t, this.args = e, this.optional = s, this.$kind = A_;
  }
}
class q_ {
  constructor(t, e) {
    this.name = t, this.args = e, this.$kind = M_;
  }
}
class K_ {
  constructor(t, e, s) {
    this.operation = t, this.left = e, this.right = s, this.$kind = P_;
  }
}
class qh {
  constructor(t, e, s = 0) {
    this.operation = t, this.expression = e, this.pos = s, this.$kind = k_;
  }
}
class Yt {
  constructor(t) {
    this.value = t, this.$kind = w_;
  }
}
Yt.$undefined = new Yt(void 0);
Yt.$null = new Yt(null);
Yt.$true = new Yt(!0);
Yt.$false = new Yt(!1);
Yt.$empty = new Yt("");
class Ll {
  constructor(t) {
    this.elements = t, this.$kind = v_;
  }
}
Ll.$empty = new Ll(tt);
class Bl {
  constructor(t, e) {
    this.keys = t, this.values = e, this.$kind = y_;
  }
}
Bl.$empty = new Bl(tt, tt);
class Vo {
  constructor(t, e = tt) {
    this.cooked = t, this.expressions = e, this.$kind = x_;
  }
}
Vo.$empty = new Vo([""]);
class Kf {
  constructor(t, e, s, n = tt) {
    this.cooked = t, this.func = s, this.expressions = n, this.$kind = T_, t.raw = e;
  }
}
class Y_ {
  // We'll either have elements, or keys+values, but never all 3
  constructor(t) {
    this.elements = t, this.$kind = Vf;
  }
}
class Q_ {
  // We'll either have elements, or keys+values, but never all 3
  constructor(t, e) {
    this.keys = t, this.values = e, this.$kind = Nf;
  }
}
class No {
  constructor(t) {
    this.name = t, this.$kind = jf;
  }
}
class X_ {
  constructor(t, e, s) {
    this.declaration = t, this.iterable = e, this.semiIdx = s, this.$kind = $_;
  }
}
class G_ {
  constructor(t, e = tt) {
    this.parts = t, this.expressions = e, this.$kind = L_, this.isMulti = e.length > 1, this.firstExpression = e[0];
  }
}
class Z_ {
  constructor(t, e, s, n) {
    this.$kind = t, this.list = e, this.source = s, this.initializer = n;
  }
}
class Yf {
  constructor(t, e, s) {
    this.target = t, this.source = e, this.initializer = s, this.$kind = F_;
  }
}
class Fl {
  constructor(t, e, s = !1) {
    this.args = t, this.body = e, this.rest = s, this.$kind = O_;
  }
}
const Vl = String, To = () => /* @__PURE__ */ Object.create(null), _t = (i, ...t) => new Error(`AUR${Vl(i).padStart(4, "0")}: ${tv(i, ...t)}`), J_ = {
  99: "Method {{0}} not implemented",
  101: 'Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?',
  102: 'Ast eval error: binding behavior "{{0}}" already applied.',
  103: 'Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?',
  105: "Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?",
  106: 'Ast eval error: invalid assignment. "$host" is a reserved keyword.',
  107: "Ast eval error: expression is not a function.",
  109: 'Ast eval error: unknown unary operator: "{{0}}"',
  108: 'Ast eval error: unknown binary operator: "{{0}}"',
  110: "Ast eval error: left-hand side of tagged template expression is not a function.",
  111: 'Ast eval error: expected "{{0}}" to be a function',
  112: "Ast eval error: cannot use non-object value for destructuring assignment.",
  151: 'Expression error: invalid start: "{{0}}"',
  152: 'Expression error: spread operator is not supported: "{{0}}"',
  153: 'Expression error: expected identifier: "{{0}}"',
  154: 'Expression error: invalid member expression: "{{0}}"',
  155: 'Expression error: unexpected end of expression: "{{0}}"',
  156: 'Expression error: unconsumed token: "{{0}}" at position {{1}} of "{{2}}"',
  157: "Expression error: invalid empty expression. Empty expression is only valid in event bindings (trigger, delegate, capture etc...)",
  158: 'Expression error: left hand side of expression is not assignable: "{{0}}"',
  159: 'Expression error: expected identifier to come after value converter operator: "{{0}}"',
  160: "Expression error: expected identifier to come after binding behavior operator: {{0}}",
  161: 'Expression error: unexpected keyword "of": "{{0}}"',
  162: 'Expression error: unexpected keyword "import": "{{0}}"',
  163: 'Expression error: invalid BindingIdentifier at left hand side of "of": "{{0}}" | kind: {{1}}',
  164: 'Expression error: invalid or unsupported property definition in object literal: "{{0}}"',
  165: 'Expression error: unterminated quote in string literal: "{{0}}"',
  166: 'Expression error: unterminated template string: "{{0}}"',
  167: 'Expression error: missing expected token "{{0}}" in "{{1}}"',
  168: 'Expression error: unexpected character: "{{0}}"',
  170: 'Expression error: unexpected "{{0}}" at position "{{1}}" for destructuring assignment in "{{2}}"',
  171: 'Expression error: unexpected {{0}} at position "{{1}}" for optional chain in "{{2}}"',
  172: 'Expression error: invalid tagged template on optional chain in "{{1}}"',
  173: 'Expression error: invalid arrow parameter list in "{{0}}"',
  174: 'Expression error: arrow function with default parameters is not supported: "{{0}}"',
  175: 'Expression error: arrow function with destructuring parameters is not supported: "{{0}}"',
  176: 'Expression error: rest parameter must be last formal parameter in arrow function: "{{0}}"',
  178: 'Expression error: arrow function with function body is not supported: "{{0}}"',
  179: `Expression error: unexpected token '.' at position "{{1}}" in "{{0}}"`
}, tv = (i, ...t) => {
  var s;
  let e = J_[i];
  for (let n = 0; n < t.length; ++n) {
    const r = new RegExp(`{{${n}(:.*)?}}`, "g");
    let o = r.exec(e);
    for (; o != null; ) {
      const a = (s = o[1]) == null ? void 0 : s.slice(1);
      let l = t[n];
      if (l != null)
        switch (a) {
          case "toString":
            l = Object.prototype.toString.call(l);
            break;
          case "join(!=)":
            l = l.join("!=");
            break;
          case "element":
            l = l === "*" ? "all elements" : `<${l} />`;
            break;
          default:
            a != null && a.startsWith(".") ? l = Vl(l[a.slice(1)]) : l = Vl(l);
        }
      e = e.slice(0, o.index) + l + e.slice(r.lastIndex), o = r.exec(e);
    }
  }
  return e;
}, Fn = /* @__PURE__ */ ni.createInterface("IExpressionParser");
class Qf {
  constructor() {
    this._expressionLookup = To(), this._forOfLookup = To(), this._interpolationLookup = To();
  }
  parse(t, e) {
    let s;
    switch (e) {
      case Zf:
        return new Hf(t);
      case jo:
        return s = this._interpolationLookup[t], s === void 0 && (s = this._interpolationLookup[t] = this.$parse(t, e)), s;
      case As:
        return s = this._forOfLookup[t], s === void 0 && (s = this._forOfLookup[t] = this.$parse(t, e)), s;
      default: {
        if (t.length === 0) {
          if (e === rv || e === Kh)
            return Yt.$empty;
          throw wv();
        }
        return s = this._expressionLookup[t], s === void 0 && (s = this._expressionLookup[t] = this.$parse(t, e)), s;
      }
    }
  }
  /** @internal */
  $parse(t, e) {
    return ht = t, st = 0, as = t.length, ye = 0, zi = 0, F = 6291456, wt = "", bt = Hi(0), ft = !0, lt = !1, ir = !0, Ic = -1, Et(61, e === void 0 ? Kh : e);
  }
}
Qf.register = Hr(Fn);
function Pc(i) {
  switch (i) {
    case 98:
      return 8;
    case 116:
      return 9;
    case 110:
      return 10;
    case 118:
      return 11;
    case 102:
      return 12;
    case 114:
      return 13;
    case 34:
      return 34;
    case 39:
      return 39;
    case 92:
      return 92;
    default:
      return i;
  }
}
const ev = Yt.$false, sv = Yt.$true, iv = Yt.$null, Xf = Yt.$undefined, gr = new fr(0), qa = new fr(1), nv = new U_(), Is = "None", jo = "Interpolation", As = "IsIterator", Gf = "IsChainable", rv = "IsFunction", Kh = "IsProperty", Zf = "IsCustom";
let ht = "", st = 0, as = 0, ye = 0, zi = 0, F = 6291456, wt = "", bt, ft = !0, lt = !1, ir = !0, Ic = -1;
const Er = String.fromCharCode, Hi = (i) => ht.charCodeAt(i), Es = () => ht.slice(zi, st), ov = "Infinity NaN isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent Array BigInt Boolean Date Map Number Object RegExp Set String JSON Math Intl".split(" ");
function Et(i, t) {
  if (t === Zf)
    return new Hf(ht);
  if (st === 0) {
    if (t === jo)
      return pv();
    if (U(), F & 4194304)
      throw _v();
  }
  ft = 513 > i, lt = !1, ir = 514 > i;
  let e = !1, s, n = 0;
  if (F & 131072) {
    const r = hn[
      F & 63
      /* Token.Type */
    ];
    U(), s = new qh(r, Et(514, t)), ft = !1;
  } else {
    t: switch (F) {
      case 12295:
        n = ye, ft = !1, ir = !1;
        do
          switch (U(), ++n, F) {
            case 65546:
              if (U(), !(F & 12288))
                throw vs();
              break;
            case 11:
            case 12:
              throw vs();
            case 2162701:
              if (lt = !0, U(), !(F & 12288)) {
                s = n === 0 ? gr : n === 1 ? qa : new fr(n), e = !0;
                break t;
              }
              break;
            default:
              if (F & 2097152) {
                s = n === 0 ? gr : n === 1 ? qa : new fr(n);
                break t;
              }
              throw vv();
          }
        while (F === 12295);
      case 4096: {
        const r = wt;
        if (t === As)
          s = new No(r);
        else if (ir && ov.includes(r))
          s = new W_(r);
        else {
          if (ir && r === "import")
            throw Av();
          s = new pr(r, n);
        }
        if (ft = !lt, U(), ts(
          51
          /* Token.Arrow */
        )) {
          if (F === 524297)
            throw ip();
          const o = lt, a = ye;
          ++ye;
          const l = Et(62, Is);
          lt = o, ye = a, ft = !1, s = new Fl([new No(r)], l);
        }
        break;
      }
      case 11:
        throw Ev();
      case 12:
        throw Nl();
      case 12292:
        switch (ft = !1, U(), ye) {
          case 0:
            s = gr;
            break;
          case 1:
            s = qa;
            break;
          default:
            s = new fr(ye);
            break;
        }
        break;
      case 12293:
        ft = !1, U(), s = nv;
        break;
      case 2688008:
        s = cv(t);
        break;
      case 2688019:
        s = ht.search(/\s+of\s+/) > st ? av() : hv(t);
        break;
      case 524297:
        s = fv(t);
        break;
      case 2163760:
        s = new Vo([wt]), ft = !1, U();
        break;
      case 2163761:
        s = Ka(t, s, !1);
        break;
      case 16384:
      case 32768:
        s = new Yt(wt), ft = !1, U();
        break;
      case 8194:
      case 8195:
      case 8193:
      case 8192:
        s = hn[
          F & 63
          /* Token.Type */
        ], ft = !1, U();
        break;
      default:
        throw st >= as ? yv() : Ya();
    }
    if (t === As)
      return dv(s);
    switch (F) {
      case 2228280:
      case 2228281:
        s = new qh(hn[
          F & 63
          /* Token.Type */
        ], s, 1), U(), ft = !1;
        break;
    }
    if (514 < i)
      return s;
    if (F === 11 || F === 12)
      throw vs();
    if (s.$kind === Bf)
      switch (F) {
        case 2162701:
          if (lt = !0, ft = !1, U(), !(F & 13312))
            throw Ec();
          if (F & 12288)
            s = new pr(wt, s.ancestor), U();
          else if (F === 2688008)
            s = new Mo(s, Ve(), !0);
          else if (F === 2688019)
            s = Po(s, !0);
          else
            throw Io();
          break;
        case 65546:
          if (ft = !lt, U(), !(F & 12288))
            throw vs();
          s = new pr(wt, s.ancestor), U();
          break;
        case 11:
        case 12:
          throw vs();
        case 2688008:
          s = new Mo(s, Ve(), e);
          break;
        case 2688019:
          s = Po(s, e);
          break;
        case 2163760:
          s = Yh(s);
          break;
        case 2163761:
          s = Ka(t, s, !0);
          break;
      }
    for (; (F & 65536) > 0; )
      switch (F) {
        case 2162701:
          s = lv(s);
          break;
        case 65546:
          if (U(), !(F & 12288))
            throw vs();
          s = Jf(s, !1);
          break;
        case 11:
        case 12:
          throw vs();
        case 2688008:
          s.$kind === Tc ? s = new qf(s.name, Ve(), s.ancestor, !1) : s.$kind === ha ? s = new Fo(s.object, s.name, Ve(), s.optional, !1) : s.$kind === Mc ? s = new q_(s.name, Ve()) : s = new Mo(s, Ve(), !1);
          break;
        case 2688019:
          s = Po(s, !1);
          break;
        case 2163760:
          if (lt)
            throw Io();
          s = Yh(s);
          break;
        case 2163761:
          if (lt)
            throw Io();
          s = Ka(t, s, !0);
          break;
      }
  }
  if (F === 11 || F === 12)
    throw vs();
  if (513 < i)
    return s;
  for (; (F & 262144) > 0; ) {
    const r = F;
    if ((r & 960) <= i)
      break;
    U(), s = new K_(hn[
      r & 63
      /* Token.Type */
    ], s, Et(r & 960, t)), ft = !1;
  }
  if (63 < i)
    return s;
  if (ts(
    6291479
    /* Token.Question */
  )) {
    const r = Et(62, t);
    je(
      6291477
      /* Token.Colon */
    ), s = new H_(s, r, Et(62, t)), ft = !1;
  }
  if (62 < i)
    return s;
  switch (F) {
    case 4194350:
    case 4194356:
    case 4194357:
    case 4194358:
    case 4194359: {
      if (!ft)
        throw xv();
      const r = hn[
        F & 63
        /* Token.Type */
      ];
      U(), s = new z_(s, Et(62, t), r);
      break;
    }
  }
  if (61 < i)
    return s;
  for (; ts(
    6291481
    /* Token.Bar */
  ); ) {
    if (F === 6291456)
      throw kv();
    const r = wt;
    U();
    const o = new Array();
    for (; ts(
      6291477
      /* Token.Colon */
    ); )
      o.push(Et(62, t));
    s = new j_(s, r, o);
  }
  for (; ts(
    6291480
    /* Token.Ampersand */
  ); ) {
    if (F === 6291456)
      throw Cv();
    const r = wt;
    U();
    const o = new Array();
    for (; ts(
      6291477
      /* Token.Colon */
    ); )
      o.push(Et(62, t));
    s = new N_(s, r, o);
  }
  if (F !== 6291456) {
    if (t === jo && F === 7340046)
      return s;
    if (t === Gf && F === 6291478) {
      if (st === as)
        throw Ya();
      return Ic = st - 1, s;
    }
    throw Es() === "of" ? Sv() : Ya();
  }
  return s;
}
function av() {
  const i = [], t = new Z_(zf, i, void 0, void 0);
  let e = "", s = !0, n = 0;
  for (; s; )
    switch (U(), F) {
      case 7340052:
        s = !1, r();
        break;
      case 6291472:
        r();
        break;
      case 4096:
        e = Es();
        break;
      default:
        throw Pv();
    }
  return je(
    7340052
    /* Token.CloseBracket */
  ), t;
  function r() {
    e !== "" ? (i.push(new Yf(new $l(gr, e), new Uf(gr, new Yt(n++)), void 0)), e = "") : n++;
  }
}
function Ve() {
  const i = lt;
  U();
  const t = [];
  for (; F !== 7340047 && (t.push(Et(62, Is)), !!ts(
    6291472
    /* Token.Comma */
  )); )
    ;
  return je(
    7340047
    /* Token.CloseParen */
  ), ft = !1, lt = i, t;
}
function Po(i, t) {
  const e = lt;
  return U(), i = new Uf(i, Et(62, Is), t), je(
    7340052
    /* Token.CloseBracket */
  ), ft = !e, lt = e, i;
}
function lv(i) {
  if (lt = !0, ft = !1, U(), !(F & 13312))
    throw Ec();
  if (F & 12288)
    return Jf(i, !0);
  if (F === 2688008)
    return i.$kind === Tc ? new qf(i.name, Ve(), i.ancestor, !0) : i.$kind === ha ? new Fo(i.object, i.name, Ve(), i.optional, !0) : new Mo(i, Ve(), !0);
  if (F === 2688019)
    return Po(i, !0);
  throw Io();
}
function Jf(i, t) {
  const e = wt;
  switch (F) {
    case 2162701: {
      lt = !0, ft = !1;
      const s = st, n = zi, r = F, o = bt, a = wt, l = ft, c = lt;
      if (U(), !(F & 13312))
        throw Ec();
      return F === 2688008 ? new Fo(i, e, Ve(), t, !0) : (st = s, zi = n, F = r, bt = o, wt = a, ft = l, lt = c, new $l(i, e, t));
    }
    case 2688008:
      return ft = !1, new Fo(i, e, Ve(), t, !1);
    default:
      return ft = !lt, U(), new $l(i, e, t);
  }
}
function cv(i) {
  U();
  const t = st, e = zi, s = F, n = bt, r = wt, o = lt, a = [];
  let l = 1, c = !1;
  t: for (; ; ) {
    if (F === 12) {
      if (U(), F !== 4096)
        throw vs();
      if (a.push(new No(wt)), U(), F === 6291472)
        throw Iv();
      if (F !== 7340047 || (U(), F !== 51))
        throw Nl();
      U();
      const d = lt, f = ye;
      ++ye;
      const g = Et(62, Is);
      return lt = d, ye = f, ft = !1, new Fl(a, g, !0);
    }
    switch (F) {
      case 4096:
        a.push(new No(wt)), U();
        break;
      case 7340047:
        U();
        break t;
      case 524297:
      case 2688019:
        U(), l = 4;
        break;
      case 6291472:
        l = 2, c = !0;
        break t;
      case 2688008:
        l = 2;
        break t;
      default:
        U(), l = 2;
        break;
    }
    switch (F) {
      case 6291472:
        if (U(), c = !0, l === 1)
          break;
        break t;
      case 7340047:
        U();
        break t;
      case 4194350:
        l === 1 && (l = 3);
        break t;
      case 51:
        if (c)
          throw so();
        U(), l = 2;
        break t;
      default:
        l === 1 && (l = 2);
        break t;
    }
  }
  if (F === 51) {
    if (l === 1) {
      if (U(), F === 524297)
        throw ip();
      const d = lt, f = ye;
      ++ye;
      const g = Et(62, Is);
      return lt = d, ye = f, ft = !1, new Fl(a, g);
    }
    throw so();
  } else if (l === 1 && a.length === 0)
    throw sp(
      51
      /* Token.Arrow */
    );
  if (c)
    switch (l) {
      case 2:
        throw so();
      case 3:
        throw Gh();
      case 4:
        throw Zh();
    }
  st = t, zi = e, F = s, bt = n, wt = r, lt = o;
  const h = lt, u = Et(62, i);
  if (lt = h, je(
    7340047
    /* Token.CloseParen */
  ), F === 51)
    switch (l) {
      case 2:
        throw so();
      case 3:
        throw Gh();
      case 4:
        throw Zh();
    }
  return u;
}
function hv(i) {
  const t = lt;
  U();
  const e = new Array();
  for (; F !== 7340052; )
    if (ts(
      6291472
      /* Token.Comma */
    )) {
      if (e.push(Xf), F === 7340052)
        break;
    } else if (e.push(Et(62, i === As ? Is : i)), ts(
      6291472
      /* Token.Comma */
    )) {
      if (F === 7340052)
        break;
    } else
      break;
  return lt = t, je(
    7340052
    /* Token.CloseBracket */
  ), i === As ? new Y_(e) : (ft = !1, new Ll(e));
}
const uv = [Vf, Nf, jf, zf, B_];
function dv(i) {
  if (!uv.includes(i.$kind) || F !== 4204594)
    throw Xh(i.$kind);
  U();
  const t = i, e = Et(61, Gf);
  return new X_(t, e, Ic);
}
function fv(i) {
  const t = lt, e = new Array(), s = new Array();
  for (U(); F !== 7340046; ) {
    if (e.push(wt), F & 49152)
      U(), je(
        6291477
        /* Token.Colon */
      ), s.push(Et(62, i === As ? Is : i));
    else if (F & 12288) {
      const n = bt, r = F, o = st;
      U(), ts(
        6291477
        /* Token.Colon */
      ) ? s.push(Et(62, i === As ? Is : i)) : (bt = n, F = r, st = o, s.push(Et(515, i === As ? Is : i)));
    } else
      throw Mv();
    F !== 7340046 && je(
      6291472
      /* Token.Comma */
    );
  }
  return lt = t, je(
    7340046
    /* Token.CloseBrace */
  ), i === As ? new Q_(e, s) : (ft = !1, new Bl(e, s));
}
function pv() {
  const i = [], t = [], e = as;
  let s = "";
  for (; st < e; ) {
    switch (bt) {
      case 36:
        if (Hi(st + 1) === 123) {
          i.push(s), s = "", st += 2, bt = Hi(st), U();
          const n = Et(61, jo);
          t.push(n);
          continue;
        } else
          s += "$";
        break;
      case 92:
        s += Er(Pc(K()));
        break;
      default:
        s += Er(bt);
    }
    K();
  }
  return t.length ? (i.push(s), new G_(i, t)) : null;
}
function Ka(i, t, e) {
  const s = lt, n = [wt];
  je(
    2163761
    /* Token.TemplateContinuation */
  );
  const r = [Et(62, i)];
  for (; (F = bv()) !== 2163760; )
    n.push(wt), je(
      2163761
      /* Token.TemplateContinuation */
    ), r.push(Et(62, i));
  return n.push(wt), ft = !1, lt = s, e ? (U(), new Kf(n, n, t, r)) : (U(), new Vo(n, r));
}
function Yh(i) {
  ft = !1;
  const t = [wt];
  return U(), new Kf(t, t, i);
}
function U() {
  for (; st < as; )
    if (zi = st, (F = Rv[bt]()) != null)
      return;
  F = 6291456;
}
function K() {
  return bt = Hi(++st);
}
function gv() {
  for (; Dv[K()]; )
    ;
  const i = Ov[wt = Es()];
  return i === void 0 ? 4096 : i;
}
function Qh(i) {
  let t = bt;
  if (i === !1) {
    do
      t = K();
    while (t <= 57 && t >= 48);
    if (t !== 46)
      return wt = parseInt(Es(), 10), 32768;
    if (t = K(), st >= as)
      return wt = parseInt(Es().slice(0, -1), 10), 32768;
  }
  if (t <= 57 && t >= 48)
    do
      t = K();
    while (t <= 57 && t >= 48);
  else
    bt = Hi(--st);
  return wt = parseFloat(Es()), 32768;
}
function mv() {
  const i = bt;
  K();
  let t = 0;
  const e = new Array();
  let s = st;
  for (; bt !== i; )
    if (bt === 92)
      e.push(ht.slice(s, st)), K(), t = Pc(bt), K(), e.push(Er(t)), s = st;
    else {
      if (st >= as)
        throw Tv();
      K();
    }
  const n = ht.slice(s, st);
  return K(), e.push(n), wt = e.join(""), 16384;
}
function tp() {
  let i = !0, t = "";
  for (; K() !== 96; )
    if (bt === 36)
      if (st + 1 < as && Hi(st + 1) === 123) {
        st++, i = !1;
        break;
      } else
        t += "$";
    else if (bt === 92)
      t += Er(Pc(K()));
    else {
      if (st >= as)
        throw ep();
      t += Er(bt);
    }
  return K(), wt = t, i ? 2163760 : 2163761;
}
const bv = () => {
  if (st >= as)
    throw ep();
  return st--, tp();
}, ts = (i) => F === i ? (U(), !0) : !1, je = (i) => {
  if (F === i)
    U();
  else
    throw sp(i);
}, _v = () => _t(151, ht), Nl = () => _t(152, ht), vs = () => _t(153, ht), vv = () => _t(154, ht), yv = () => _t(155, ht), Ya = () => _t(156, Es(), st, ht), wv = () => _t(
  157
  /* ErrorNames.parse_invalid_empty */
), xv = () => _t(158, ht), kv = () => _t(159, ht), Cv = () => _t(160, ht), Sv = () => _t(161, ht), Av = () => _t(162, ht), Xh = (i) => _t(163, ht, i), Mv = () => _t(164, ht), Tv = () => _t(165, ht), ep = () => _t(166, ht), sp = (i) => _t(167, hn[
  i & 63
  /* Token.Type */
], ht), Pv = () => _t(170, Es(), st, ht), Ec = () => _t(171, Es(), st - 1, ht), Io = () => _t(172, ht), so = () => _t(173, ht), Gh = () => _t(174, ht), Zh = () => _t(175, ht), Iv = () => _t(176, ht), ip = () => _t(178, ht), Ev = () => _t(179, st - 1, ht), hn = [
  ev,
  sv,
  iv,
  Xf,
  "this",
  "$this",
  null,
  "$parent",
  "(",
  "{",
  ".",
  "..",
  "...",
  "?.",
  "}",
  ")",
  ",",
  "[",
  "]",
  ":",
  ";",
  "?",
  "'",
  '"',
  "&",
  "|",
  "??",
  "||",
  "&&",
  "==",
  "!=",
  "===",
  "!==",
  "<",
  ">",
  "<=",
  ">=",
  "in",
  "instanceof",
  "+",
  "-",
  "typeof",
  "void",
  "*",
  "%",
  "/",
  "=",
  "!",
  2163760,
  2163761,
  "of",
  "=>",
  "+=",
  "-=",
  "*=",
  "/=",
  "++",
  "--"
], Ov = /* @__PURE__ */ Object.assign(To(), {
  true: 8193,
  null: 8194,
  false: 8192,
  undefined: 8195,
  this: 12293,
  $this: 12292,
  $parent: 12295,
  in: 6562213,
  instanceof: 6562214,
  typeof: 139305,
  void: 139306,
  of: 4204594
}), { CharScanners: Rv, IdParts: Dv } = /* @__PURE__ */ (() => {
  const i = () => {
    throw _t(168, ht);
  };
  i.notMapped = !0;
  const t = {
    /* [$0-9A-Za_a-z] */
    AsciiIdPart: [36, 0, 48, 58, 65, 91, 95, 0, 97, 123],
    IdStart: (
      /* IdentifierStart */
      [36, 0, 65, 91, 95, 0, 97, 123, 170, 0, 186, 0, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 0, 8319, 0, 8336, 8349, 8490, 8492, 8498, 0, 8526, 0, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42927, 42928, 42936, 42999, 43008, 43824, 43867, 43868, 43877, 64256, 64263, 65313, 65339, 65345, 65371]
    ),
    Digit: (
      /* DecimalNumber */
      [48, 58]
    ),
    Skip: (
      /* Skippable */
      [0, 33, 127, 161]
    )
  }, e = (o, a, l, c) => {
    const h = l.length;
    for (let u = 0; u < h; u += 2) {
      const d = l[u];
      let f = l[u + 1];
      f = f > 0 ? f : d + 1, o && o.fill(c, d, f);
    }
  }, s = /* @__PURE__ */ ((o) => (e(o, null, t.IdStart, 1), e(o, null, t.Digit, 1), o))(new Uint8Array(65535)), n = (o) => () => (K(), o), r = new Array(65535);
  return r.fill(i, 0, 65535), e(r, null, t.Skip, () => (K(), null)), e(r, null, t.IdStart, gv), e(r, null, t.Digit, () => Qh(!1)), r[
    34
    /* Char.DoubleQuote */
  ] = r[
    39
    /* Char.SingleQuote */
  ] = () => mv(), r[
    96
    /* Char.Backtick */
  ] = () => tp(), r[
    33
    /* Char.Exclamation */
  ] = () => K() !== 61 ? 131119 : K() !== 61 ? 6553950 : (K(), 6553952), r[
    61
    /* Char.Equals */
  ] = () => K() === 62 ? (K(), 51) : bt !== 61 ? 4194350 : K() !== 61 ? 6553949 : (K(), 6553951), r[
    38
    /* Char.Ampersand */
  ] = () => K() !== 38 ? 6291480 : (K(), 6553884), r[
    124
    /* Char.Bar */
  ] = () => K() !== 124 ? 6291481 : (K(), 6553819), r[
    63
    /* Char.Question */
  ] = () => {
    if (K() === 46) {
      const o = Hi(st + 1);
      return o <= 48 || o >= 57 ? (K(), 2162701) : 6291479;
    }
    return bt !== 63 ? 6291479 : (K(), 6553754);
  }, r[
    46
    /* Char.Dot */
  ] = () => K() <= 57 && bt >= 48 ? Qh(!0) : bt === 46 ? K() !== 46 ? 11 : (K(), 12) : 65546, r[
    60
    /* Char.LessThan */
  ] = () => K() !== 61 ? 6554017 : (K(), 6554019), r[
    62
    /* Char.GreaterThan */
  ] = () => K() !== 61 ? 6554018 : (K(), 6554020), r[
    37
    /* Char.Percent */
  ] = n(
    6554156
    /* Token.Percent */
  ), r[
    40
    /* Char.OpenParen */
  ] = n(
    2688008
    /* Token.OpenParen */
  ), r[
    41
    /* Char.CloseParen */
  ] = n(
    7340047
    /* Token.CloseParen */
  ), r[
    42
    /* Char.Asterisk */
  ] = () => K() !== 61 ? 6554155 : (K(), 4194358), r[
    43
    /* Char.Plus */
  ] = () => K() === 43 ? (K(), 2228280) : bt !== 61 ? 2490855 : (K(), 4194356), r[
    44
    /* Char.Comma */
  ] = n(
    6291472
    /* Token.Comma */
  ), r[
    45
    /* Char.Minus */
  ] = () => K() === 45 ? (K(), 2228281) : bt !== 61 ? 2490856 : (K(), 4194357), r[
    47
    /* Char.Slash */
  ] = () => K() !== 61 ? 6554157 : (K(), 4194359), r[
    58
    /* Char.Colon */
  ] = n(
    6291477
    /* Token.Colon */
  ), r[
    59
    /* Char.Semicolon */
  ] = n(
    6291478
    /* Token.Semicolon */
  ), r[
    91
    /* Char.OpenBracket */
  ] = n(
    2688019
    /* Token.OpenBracket */
  ), r[
    93
    /* Char.CloseBracket */
  ] = n(
    7340052
    /* Token.CloseBracket */
  ), r[
    123
    /* Char.OpenBrace */
  ] = n(
    524297
    /* Token.OpenBrace */
  ), r[
    125
    /* Char.CloseBrace */
  ] = n(
    7340046
    /* Token.CloseBrace */
  ), { CharScanners: r, IdParts: s };
})(), ds = ni.createInterface, Vn = Object.freeze, { aliasTo: Jh, singleton: Oc } = Ni, Fe = "Interpolation", np = "IsFunction", fs = "IsProperty", un = "custom-element", Ur = /* @__PURE__ */ Vn({
  /**
   * Unspecified mode, bindings may act differently with this mode
   */
  default: 0,
  oneTime: 1,
  toView: 2,
  fromView: 4,
  twoWay: 6
}), ua = /* @__PURE__ */ ds("ITemplateCompiler"), rp = /* @__PURE__ */ ds("IAttrMapper"), It = (i, ...t) => new Error(`AUR${String(i).padStart(4, "0")}: ${Lv(i, ...t)}`), $v = {
  88: "AttributeParser is already initialized; cannot add patterns after initialization.",
  89: 'Attribute pattern "{{0}}" has already been registered.',
  99: "Method {{0}} not implemented",
  157: "Binding command {{0}} has already been registered.",
  701: 'Template compilation error in element "{{0:name}}": the root <template> cannot be a local element template.',
  702: 'Template compilation error: attribute "{{0}}" is invalid on element surrogate.',
  703: 'Template compilation error: template controller "{{0}}" is invalid on element surrogate.',
  704: 'Template compilation error: Invalid command "{{0:.command}}" for <let>. Only to-view/bind supported.',
  706: 'Template compilation error: detected projection with [au-slot="{{0}}"] attempted on a non custom element {{1}}.',
  707: "Template compilation error: creating binding to non-bindable property {{0}} on {{1}}.",
  708: 'Template compilation error: the custom element "{{0}}" does not have any content other than local template(s).',
  709: 'Template compilation error: local element template needs to be defined directly under root of element "{{0}}".',
  710: 'Template compilation error: bindable properties of local element "{{0}}" template needs to be defined directly under <template>.',
  711: `Template compilation error: the attribute 'property' is missing in {{0:outerHTML}} in local element "{{1}}"`,
  712: "Template compilation error: Bindable property and attribute needs to be unique; found property: {{0}}, attribute: {{1}}",
  713: 'Template compilation error: unknown binding command: "{{0}}".{{0:bindingCommandHelp}}',
  714: 'Template compilation error: primary already exists on element/attribute "{{0}}"',
  715: 'Template compilation error: the value of "as-custom-element" attribute cannot be empty for local element in element "{{0}}"',
  716: 'Template compilation error: duplicate definition of the local template named "{{0}} in element {{1}}"',
  717: 'Template compilation error: detected a usage of "<slot>" element without specifying shadow DOM options in element: {{0}}',
  718: 'Spreading template controller "{{0}}" is not supported.',
  719: "Attribute {{0}} has been already registered for {{1:element}}",
  720: 'Spreading syntax "...xxx" is reserved. Encountered "...{{0}}"',
  721: 'Usage of $bindables is only allowed on custom element. Encountered: <{{0}} {{1}}="{{2}}">',
  722: "Invalid platform object provided to the compilation, no DOM API found.",
  9998: "Spread binding does not support spreading custom attributes/template controllers. Did you build the spread instruction manually?"
}, Lv = (i, ...t) => {
  var s;
  let e = $v[i];
  for (let n = 0; n < t.length; ++n) {
    const r = new RegExp(`{{${n}(:.*)?}}`, "g");
    let o = r.exec(e);
    for (; o != null; ) {
      const a = (s = o[1]) == null ? void 0 : s.slice(1);
      let l = t[n];
      if (l != null)
        switch (a) {
          case "nodeName":
            l = l.nodeName.toLowerCase();
            break;
          case "name":
            l = l.name;
            break;
          case "typeof":
            l = typeof l;
            break;
          case "ctor":
            l = l.constructor.name;
            break;
          case "controller":
            l = l.controller.name;
            break;
          case "target@property":
            l = `${l.target}@${l.targetProperty}`;
            break;
          case "toString":
            l = Object.prototype.toString.call(l);
            break;
          case "join(!=)":
            l = l.join("!=");
            break;
          case "bindingCommandHelp":
            l = Bv(l);
            break;
          case "element":
            l = l === "*" ? "all elements" : `<${l} />`;
            break;
          default:
            a != null && a.startsWith(".") ? l = String(l[a.slice(1)]) : l = String(l);
        }
      e = e.slice(0, o.index) + l + e.slice(r.lastIndex), o = r.exec(e);
    }
  }
  return e;
};
function Bv(i) {
  switch (i) {
    case "delegate":
      return `
The ".delegate" binding command has been removed in v2. Binding command ".trigger" should be used instead. If you are migrating v1 application, install compat package to add back the ".delegate" binding command for ease of migration.`;
    case "call":
      return `
The ".call" binding command has been removed in v2. If you want to pass a callback that preserves the context of the function call, you can use lambda instead. Refer to lambda expression doc for more details.`;
    default:
      return "";
  }
}
var op, ap, lp, cp, hp;
class Rc {
  constructor(t, e, s, n) {
    if (this.chars = t, this.repeat = e, this.isSymbol = s, this.isInverted = n, n)
      switch (t.length) {
        case 0:
          this.has = this._hasOfNoneInverse;
          break;
        case 1:
          this.has = this._hasOfSingleInverse;
          break;
        default:
          this.has = this._hasOfMultipleInverse;
      }
    else
      switch (t.length) {
        case 0:
          this.has = this._hasOfNone;
          break;
        case 1:
          this.has = this._hasOfSingle;
          break;
        default:
          this.has = this._hasOfMultiple;
      }
  }
  equals(t) {
    return this.chars === t.chars && this.repeat === t.repeat && this.isSymbol === t.isSymbol && this.isInverted === t.isInverted;
  }
  /** @internal */
  _hasOfMultiple(t) {
    return this.chars.includes(t);
  }
  /** @internal */
  _hasOfSingle(t) {
    return this.chars === t;
  }
  /** @internal */
  _hasOfNone(t) {
    return !1;
  }
  /** @internal */
  _hasOfMultipleInverse(t) {
    return !this.chars.includes(t);
  }
  /** @internal */
  _hasOfSingleInverse(t) {
    return this.chars !== t;
  }
  /** @internal */
  _hasOfNoneInverse(t) {
    return !0;
  }
}
class Fv {
  constructor() {
    this.parts = tt, this._pattern = "", this._currentRecord = {}, this._partsRecord = {};
  }
  get pattern() {
    const t = this._pattern;
    return t === "" ? null : t;
  }
  set pattern(t) {
    t == null ? (this._pattern = "", this.parts = tt) : (this._pattern = t, this.parts = this._partsRecord[t]);
  }
  append(t, e) {
    const s = this._currentRecord;
    s[t] === void 0 ? s[t] = e : s[t] += e;
  }
  next(t) {
    const e = this._currentRecord;
    let s;
    e[t] !== void 0 && (s = this._partsRecord, s[t] === void 0 ? s[t] = [e[t]] : s[t].push(e[t]), e[t] = void 0);
  }
}
class Dc {
  get _pattern() {
    return this._isEndpoint ? this._patterns[0] : null;
  }
  constructor(t, ...e) {
    this.charSpec = t, this._nextStates = [], this._types = null, this._isEndpoint = !1, this._patterns = e;
  }
  findChild(t) {
    const e = this._nextStates, s = e.length;
    let n = null, r = 0;
    for (; r < s; ++r)
      if (n = e[r], t.equals(n.charSpec))
        return n;
    return null;
  }
  append(t, e) {
    const s = this._patterns;
    s.includes(e) || s.push(e);
    let n = this.findChild(t);
    return n == null && (n = new Dc(t, e), this._nextStates.push(n), t.repeat && n._nextStates.push(n)), n;
  }
  findMatches(t, e) {
    const s = [], n = this._nextStates, r = n.length;
    let o = 0, a = null, l = 0, c = 0;
    for (; l < r; ++l)
      if (a = n[l], a.charSpec.has(t))
        if (s.push(a), o = a._patterns.length, c = 0, a.charSpec.isSymbol)
          for (; c < o; ++c)
            e.next(a._patterns[c]);
        else
          for (; c < o; ++c)
            e.append(a._patterns[c], t);
    return s;
  }
}
class tu {
  constructor(t) {
    this.text = t;
    const e = this._len = t.length, s = this._specs = [];
    let n = 0;
    for (; e > n; ++n)
      s.push(new Rc(t[n], !1, !1, !1));
  }
  eachChar(t) {
    const e = this._len, s = this._specs;
    let n = 0;
    for (; e > n; ++n)
      t(s[n]);
  }
}
class Vv {
  constructor(t) {
    this.text = "PART", this._spec = new Rc(t, !0, !1, !0);
  }
  eachChar(t) {
    t(this._spec);
  }
}
class Nv {
  constructor(t) {
    this.text = t, this._spec = new Rc(t, !1, !0, !1);
  }
  eachChar(t) {
    t(this._spec);
  }
}
class jv {
  constructor() {
    this.statics = 0, this.dynamics = 0, this.symbols = 0;
  }
}
const zv = /* @__PURE__ */ ds("ISyntaxInterpreter", (i) => i.singleton(Hv));
class Hv {
  constructor() {
    this._rootState = new Dc(null), this._initialStates = [this._rootState];
  }
  // todo: this only works if this method is ever called only once
  add(t) {
    t = t.slice(0).sort((d, f) => d.pattern > f.pattern ? 1 : -1);
    const e = t.length;
    let s, n, r, o, a, l, c, h = 0, u;
    for (; e > h; ) {
      for (s = this._rootState, n = t[h], r = n.pattern, o = new jv(), a = this._parse(n, o), l = a.length, c = (d) => s = s.append(d, r), u = 0; l > u; ++u)
        a[u].eachChar(c);
      s._types = o, s._isEndpoint = !0, ++h;
    }
  }
  interpret(t) {
    const e = new Fv(), s = t.length;
    let n = this._initialStates, r = 0, o;
    for (; r < s && (n = this._getNextStates(n, t.charAt(r), e), n.length !== 0); ++r)
      ;
    return n = n.filter(Wv), n.length > 0 && (n.sort(Uv), o = n[0], o.charSpec.isSymbol || e.next(o._pattern), e.pattern = o._pattern), e;
  }
  /** @internal */
  _getNextStates(t, e, s) {
    const n = [];
    let r = null;
    const o = t.length;
    let a = 0;
    for (; a < o; ++a)
      r = t[a], n.push(...r.findMatches(e, s));
    return n;
  }
  /** @internal */
  _parse(t, e) {
    const s = [], n = t.pattern, r = n.length, o = t.symbols;
    let a = 0, l = 0, c = "";
    for (; a < r; )
      c = n.charAt(a), o.length === 0 || !o.includes(c) ? a === l && c === "P" && n.slice(a, a + 4) === "PART" ? (l = a = a + 4, s.push(new Vv(o)), ++e.dynamics) : ++a : a !== l ? (s.push(new tu(n.slice(l, a))), ++e.statics, l = a) : (s.push(new Nv(n.slice(l, a + 1))), ++e.symbols, l = ++a);
    return l !== a && (s.push(new tu(n.slice(l, a))), ++e.statics), s;
  }
}
function Wv(i) {
  return i._isEndpoint;
}
function Uv(i, t) {
  const e = i._types, s = t._types;
  return e.statics !== s.statics ? s.statics - e.statics : e.dynamics !== s.dynamics ? s.dynamics - e.dynamics : e.symbols !== s.symbols ? s.symbols - e.symbols : 0;
}
class ke {
  constructor(t, e, s, n, r = null) {
    this.rawName = t, this.rawValue = e, this.target = s, this.command = n, this.parts = r;
  }
}
const qv = /* @__PURE__ */ ds("IAttributePattern"), $c = /* @__PURE__ */ ds("IAttributeParser", (i) => i.singleton(Kv));
class Kv {
  constructor() {
    this._cache = {}, this._patterns = {}, this._initialized = !1, this._allDefinitions = [], this._interpreter = D(zv), this._container = D(Ln);
  }
  registerPattern(t, e) {
    if (this._initialized)
      throw It(
        88
        /* ErrorNames.attribute_pattern_already_initialized */
      );
    const s = this._patterns;
    for (const { pattern: n } of t) {
      if (s[n] != null)
        throw It(89, n);
      s[n] = { patternType: e };
    }
    this._allDefinitions.push(...t);
  }
  /** @internal */
  _initialize() {
    this._interpreter.add(this._allDefinitions);
    const t = this._container;
    for (const [, e] of Object.entries(this._patterns))
      e.pattern = t.get(e.patternType);
  }
  parse(t, e) {
    this._initialized || (this._initialize(), this._initialized = !0);
    let s = this._cache[t];
    s == null && (s = this._cache[t] = this._interpreter.interpret(t));
    const n = s.pattern;
    return n == null ? new ke(t, e, t, null, null) : this._patterns[n].pattern[n](t, e, s.parts);
  }
}
const ri = /* @__PURE__ */ Vn({
  name: Zi("attribute-pattern"),
  create(i, t) {
    return {
      register(e) {
        e.get($c).registerPattern(i, t), Oc(qv, t).register(e);
      }
    };
  }
});
class jl {
  "PART.PART"(t, e, s) {
    return new ke(t, e, s[0], s[1]);
  }
  "PART.PART.PART"(t, e, s) {
    return new ke(t, e, `${s[0]}.${s[1]}`, s[2]);
  }
}
op = Symbol.metadata;
jl[op] = {
  [us]: /* @__PURE__ */ ri.create([
    { pattern: "PART.PART", symbols: "." },
    { pattern: "PART.PART.PART", symbols: "." }
  ], jl)
};
class zl {
  ref(t, e, s) {
    return new ke(t, e, "element", "ref");
  }
  "PART.ref"(t, e, s) {
    let n = s[0];
    return n === "view-model" && (n = "component", console.warn(`[aurelia] Detected view-model.ref usage: "${t}=${e}". This is deprecated and component.ref should be used instead`)), new ke(t, e, n, "ref");
  }
}
ap = Symbol.metadata;
zl[ap] = {
  [us]: /* @__PURE__ */ ri.create([
    { pattern: "ref", symbols: "" },
    { pattern: "PART.ref", symbols: "." }
  ], zl)
};
class Hl {
  "PART.trigger:PART"(t, e, s) {
    return new ke(t, e, s[0], "trigger", s);
  }
  "PART.capture:PART"(t, e, s) {
    return new ke(t, e, s[0], "capture", s);
  }
}
lp = Symbol.metadata;
Hl[lp] = {
  [us]: /* @__PURE__ */ ri.create([
    { pattern: "PART.trigger:PART", symbols: ".:" },
    { pattern: "PART.capture:PART", symbols: ".:" }
  ], Hl)
};
class eu {
  ":PART"(t, e, s) {
    return new ke(t, e, s[0], "bind");
  }
}
cp = Symbol.metadata;
eu[cp] = {
  [us]: /* @__PURE__ */ ri.create([{ pattern: ":PART", symbols: ":" }], eu)
};
class su {
  "@PART"(t, e, s) {
    return new ke(t, e, s[0], "trigger");
  }
  "@PART:PART"(t, e, s) {
    return new ke(t, e, s[0], "trigger", [s[0], "trigger", ...s.slice(1)]);
  }
}
hp = Symbol.metadata;
su[hp] = {
  [us]: /* @__PURE__ */ ri.create([
    { pattern: "@PART", symbols: "@" },
    { pattern: "@PART:PART", symbols: "@:" }
  ], su)
};
const Wl = $s.get, iu = $s.define, up = "ra", dp = "rb", fp = "rc", pp = "rd", gp = "re", mp = "rf", Lc = "rg", bp = "ri", _p = "rj", vp = "rk", yp = "rl", wp = "ha", xp = "hb", kp = "hc", Yv = "hd", Cp = "he", Sp = "hf", Ap = "hg", Mp = "hs", Tp = "hp", Pp = "svb", Ht = /* @__PURE__ */ Vn({
  hydrateElement: up,
  hydrateAttribute: dp,
  hydrateTemplateController: fp,
  hydrateLetElement: pp,
  setProperty: gp,
  interpolation: mp,
  propertyBinding: Lc,
  letBinding: bp,
  refBinding: _p,
  iteratorBinding: vp,
  multiAttr: yp,
  textBinding: wp,
  listenerBinding: xp,
  attributeBinding: kp,
  stylePropertyBinding: Yv,
  setAttribute: Cp,
  setClassAttribute: Sp,
  setStyleAttribute: Ap,
  spreadTransferedBinding: Mp,
  spreadElementProp: Tp,
  spreadValueBinding: Pp
}), Nn = /* @__PURE__ */ ds("Instruction");
class ms {
  constructor(t, e) {
    this.from = t, this.to = e, this.type = mp;
  }
}
class qr {
  constructor(t, e, s) {
    this.from = t, this.to = e, this.mode = s, this.type = Lc;
  }
}
class Qv {
  constructor(t, e, s) {
    this.forOf = t, this.to = e, this.props = s, this.type = vp;
  }
}
class Xv {
  constructor(t, e) {
    this.from = t, this.to = e, this.type = _p;
  }
}
class on {
  constructor(t, e) {
    this.value = t, this.to = e, this.type = gp;
  }
}
class Gv {
  constructor(t, e, s) {
    this.value = t, this.to = e, this.command = s, this.type = yp;
  }
}
class Zv {
  constructor(t, e, s, n, r, o) {
    this.res = t, this.props = e, this.projections = s, this.containerless = n, this.captures = r, this.data = o, this.type = up;
  }
}
class Qa {
  constructor(t, e, s) {
    this.res = t, this.alias = e, this.props = s, this.type = dp;
  }
}
class Jv {
  constructor(t, e, s, n) {
    this.def = t, this.res = e, this.alias = s, this.props = n, this.type = fp;
  }
}
class t0 {
  constructor(t, e) {
    this.instructions = t, this.toBindingContext = e, this.type = pp;
  }
}
class nu {
  constructor(t, e) {
    this.from = t, this.to = e, this.type = bp;
  }
}
class e0 {
  constructor(t) {
    this.from = t, this.type = wp;
  }
}
class Ip {
  constructor(t, e, s, n) {
    this.from = t, this.to = e, this.capture = s, this.modifier = n, this.type = xp;
  }
}
class ru {
  constructor(t, e) {
    this.value = t, this.to = e, this.type = Cp;
  }
}
class ou {
  constructor(t) {
    this.value = t, this.type = Sp;
  }
}
class au {
  constructor(t) {
    this.value = t, this.type = Ap;
  }
}
class Bc {
  constructor(t, e, s) {
    this.attr = t, this.from = e, this.to = s, this.type = kp;
  }
}
class lu {
  constructor() {
    this.type = Mp;
  }
}
class cu {
  constructor(t) {
    this.instruction = t, this.type = Tp;
  }
}
class Ul {
  constructor(t, e) {
    this.target = t, this.from = e, this.type = Pp;
  }
}
class zo {
  constructor(t, e, s, n) {
    this.Type = t, this.name = e, this.aliases = s, this.key = n;
  }
  static create(t, e) {
    let s, n;
    return at(t) ? (s = t, n = { name: s }) : (s = t.name, n = t), new zo(e, Hs(ql(e, "name"), s), Vt(ql(e, "aliases"), n.aliases, e.aliases), Cn(s));
  }
  register(t, e) {
    const s = this.Type, n = typeof e == "string" ? Cn(e) : this.key, r = this.aliases;
    t.has(n, !1) ? console.warn(`[DEV:aurelia] ${It(157, this.name)}`) : t.register(t.has(s, !1) ? null : Oc(s, s), Jh(s, n), ...r.map((o) => Jh(s, Cn(o))));
  }
}
const re = "binding-command", Eo = /* @__PURE__ */ Zi(re), Cn = (i) => `${Eo}:${i}`, ql = (i, t) => Wl(Of.annotation.keyFor(t), i), s0 = /* @__PURE__ */ (() => {
  const i = "__au_static_resource__", t = (e, s, n) => {
    var o;
    let r = Wl(i, e);
    return r == null && ((o = e.$au) == null ? void 0 : o.type) === s && (r = n(e.$au, e), iu(r, e, i)), r;
  };
  return Vn({
    name: Eo,
    keyFrom: Cn,
    // isType<T>(value: T): value is (T extends Constructable ? BindingCommandType<T> : never) {
    //   return isFunction(value) && hasOwnMetadata(cmdBaseName, value);
    // },
    define(e, s) {
      const n = zo.create(e, s), r = n.Type;
      return iu(n, r, Eo, ss), r;
    },
    getAnnotation: ql,
    find(e, s) {
      const n = e.find(re, s);
      return n == null ? null : Wl(Eo, n) ?? t(n, re, zo.create) ?? null;
    },
    get(e, s) {
      try {
        return e.get(Tn(Cn(s)));
      } catch (n) {
        throw console.log(`


[DEV:aurelia] Cannot retrieve binding command with name




`, s), n;
      }
      return e.get(Tn(Cn(s)));
    }
  });
})();
class Ep {
  get ignoreAttr() {
    return !1;
  }
  build(t, e, s) {
    let r = t.attr.target, o = t.attr.rawValue;
    return o = o === "" ? qt(r) : o, t.bindable == null ? r = s.map(t.node, r) ?? qt(r) : r = t.bindable.name, new qr(
      e.parse(o, fs),
      r,
      1
      /* InternalBindingMode.oneTime */
    );
  }
}
Ep.$au = {
  type: re,
  name: "one-time"
};
class Op {
  get ignoreAttr() {
    return !1;
  }
  build(t, e, s) {
    let r = t.attr.target, o = t.attr.rawValue;
    return o = o === "" ? qt(r) : o, t.bindable == null ? r = s.map(t.node, r) ?? qt(r) : r = t.bindable.name, new qr(
      e.parse(o, fs),
      r,
      2
      /* InternalBindingMode.toView */
    );
  }
}
Op.$au = {
  type: re,
  name: "to-view"
};
class Rp {
  get ignoreAttr() {
    return !1;
  }
  build(t, e, s) {
    const n = t.attr;
    let r = n.target, o = n.rawValue;
    return o = o === "" ? qt(r) : o, t.bindable == null ? r = s.map(t.node, r) ?? qt(r) : r = t.bindable.name, new qr(
      e.parse(o, fs),
      r,
      4
      /* InternalBindingMode.fromView */
    );
  }
}
Rp.$au = {
  type: re,
  name: "from-view"
};
class Dp {
  get ignoreAttr() {
    return !1;
  }
  build(t, e, s) {
    const n = t.attr;
    let r = n.target, o = n.rawValue;
    return o = o === "" ? qt(r) : o, t.bindable == null ? r = s.map(t.node, r) ?? qt(r) : r = t.bindable.name, new qr(
      e.parse(o, fs),
      r,
      6
      /* InternalBindingMode.twoWay */
    );
  }
}
Dp.$au = {
  type: re,
  name: "two-way"
};
class $p {
  get ignoreAttr() {
    return !1;
  }
  build(t, e, s) {
    const n = t.attr, r = t.bindable;
    let o = n.rawValue, a = n.target, l, c;
    return o = o === "" ? qt(a) : o, r == null ? (c = s.isTwoWay(t.node, a) ? 6 : 2, a = s.map(t.node, a) ?? qt(a)) : (l = t.def.defaultBindingMode ?? 0, c = r.mode === 0 || r.mode == null ? l == null || l === 0 ? 2 : l : r.mode, a = r.name), new qr(e.parse(o, fs), a, at(c) ? Ur[c] ?? 0 : c);
  }
}
$p.$au = {
  type: re,
  name: "bind"
};
class Lp {
  constructor() {
    this._attrParser = D($c);
  }
  get ignoreAttr() {
    return !1;
  }
  build(t, e) {
    const s = t.bindable === null ? qt(t.attr.target) : t.bindable.name, n = e.parse(t.attr.rawValue, "IsIterator");
    let r = tt;
    if (n.semiIdx > -1) {
      const o = t.attr.rawValue.slice(n.semiIdx + 1), a = o.indexOf(":");
      if (a > -1) {
        const l = o.slice(0, a).trim(), c = o.slice(a + 1).trim(), h = this._attrParser.parse(l, c);
        r = [new Gv(c, h.target, h.command)];
      }
    }
    return new Qv(n, s, r);
  }
}
Lp.$au = {
  type: re,
  name: "for"
};
class Bp {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    var s;
    return new Ip(e.parse(t.attr.rawValue, np), t.attr.target, !1, ((s = t.attr.parts) == null ? void 0 : s[2]) ?? null);
  }
}
Bp.$au = {
  type: re,
  name: "trigger"
};
class Fp {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    var s;
    return new Ip(e.parse(t.attr.rawValue, np), t.attr.target, !0, ((s = t.attr.parts) == null ? void 0 : s[2]) ?? null);
  }
}
Fp.$au = {
  type: re,
  name: "capture"
};
class Vp {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    const s = t.attr, n = s.target;
    let r = s.rawValue;
    return r = r === "" ? qt(n) : r, new Bc(n, e.parse(r, fs), n);
  }
}
Vp.$au = {
  type: re,
  name: "attr"
};
class Np {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    return new Bc("style", e.parse(t.attr.rawValue, fs), t.attr.target);
  }
}
Np.$au = {
  type: re,
  name: "style"
};
class jp {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    return new Bc("class", e.parse(t.attr.rawValue, fs), t.attr.target);
  }
}
jp.$au = {
  type: re,
  name: "class"
};
class zp {
  get ignoreAttr() {
    return !0;
  }
  build(t, e) {
    return new Xv(e.parse(t.attr.rawValue, fs), t.attr.target);
  }
}
zp.$au = {
  type: re,
  name: "ref"
};
class Hp {
  get ignoreAttr() {
    return !1;
  }
  build(t) {
    return new Ul(t.attr.target, t.attr.rawValue);
  }
}
Hp.$au = {
  type: re,
  name: "spread"
};
const i0 = /* @__PURE__ */ ds("ITemplateElementFactory", (i) => i.singleton(n0)), hu = {};
class n0 {
  constructor() {
    this.p = D(Bn), this._template = this.t();
  }
  t() {
    return this.p.document.createElement("template");
  }
  createTemplate(t) {
    var s;
    if (at(t)) {
      let n = hu[t];
      if (n === void 0) {
        const r = this._template;
        r.innerHTML = t;
        const o = r.content.firstElementChild;
        e(o) ? (this._template = this.t(), n = r) : (r.content.removeChild(o), n = o), hu[t] = n;
      }
      return n.cloneNode(!0);
    }
    if (t.nodeName !== "TEMPLATE") {
      const n = this.t();
      return n.content.appendChild(t), n;
    }
    return (s = t.parentNode) == null || s.removeChild(t), t.cloneNode(!0);
    function e(n) {
      if (n == null || n.nodeName !== "TEMPLATE" || n.nextElementSibling != null)
        return !0;
      const o = n.previousSibling;
      if (o != null)
        switch (o.nodeType) {
          case 3:
            return o.textContent.trim().length > 0;
        }
      const a = n.nextSibling;
      if (a != null)
        switch (a.nodeType) {
          case 3:
            return a.textContent.trim().length > 0;
        }
      return !1;
    }
  }
}
const Xa = "au-start", Ga = "au-end", Za = (i, t, e) => i.insertBefore(t, e), uu = (i, t, e) => {
  if (i === null)
    return;
  const s = e.length;
  let n = 0;
  for (; s > n; )
    i.insertBefore(e[n], t), ++n;
}, bi = (i, t) => i.content.appendChild(t), du = (i, t) => {
  const e = t.length;
  let s = 0;
  for (; e > s; )
    i.content.appendChild(t[s]), ++s;
}, fu = (i) => i.nodeType === 1, pu = (i) => i.nodeType === 3, qn = "au-slot", gu = "default", Kn = /* @__PURE__ */ ((i) => () => `anonymous-${++i}`)(0);
class Wp {
  constructor() {
    this.debug = !1, this.resolveResources = !0;
  }
  compile(t, e) {
    var u, d;
    if (t.template == null || t.needsCompile === !1)
      return t;
    const s = new Ho(t, e, null, null, void 0), n = at(t.template) || !t.enhance ? s._templateFactory.createTemplate(t.template) : t.template, r = n.nodeName === Ja && n.content != null, o = r ? n.content : n, a = h0.findAll(e), l = a.length;
    let c = 0;
    if (l > 0)
      for (; l > c; )
        (d = (u = a[c]).compiling) == null || d.call(u, n), ++c;
    if (n.hasAttribute(Kl))
      throw It(701, t);
    return this._compileLocalElement(o, s), this._compileNode(o, s), {
      ...t,
      name: t.name || Kn(),
      dependencies: (t.dependencies ?? tt).concat(s.deps ?? tt),
      instructions: s.rows,
      surrogates: r ? this._compileSurrogate(n, s) : tt,
      template: n,
      hasSlots: s.hasSlot,
      needsCompile: !1
    };
  }
  compileSpread(t, e, s, n, r) {
    const o = new Ho(t, s, null, null, void 0), a = [], l = r ?? o._findElement(n.nodeName.toLowerCase()), c = l !== null, h = o._exprParser, u = e.length;
    let d = 0, f, g = null, p, m, b, _, w, x = null, v, y, k, T;
    for (; u > d; ++d) {
      if (f = e[d], k = f.target, T = f.rawValue, k === "...$attrs") {
        a.push(new lu());
        continue;
      }
      if (x = o._getCommand(f), x !== null && x.ignoreAttr) {
        j.node = n, j.attr = f, j.bindable = null, j.def = null, a.push(x.build(j, o._exprParser, o._attrMapper));
        continue;
      }
      if (c && (b = o._getBindables(l), _ = b.attrs[k], _ !== void 0)) {
        x == null ? (v = h.parse(T, Fe), a.push(new cu(v == null ? new on(T, _.name) : new ms(v, _.name)))) : (j.node = n, j.attr = f, j.bindable = _, j.def = l, a.push(new cu(x.build(j, o._exprParser, o._attrMapper))));
        continue;
      }
      if (g = o._findAttr(k), g !== null) {
        if (g.isTemplateController)
          throw It(9998, k);
        b = o._getBindables(g), y = g.noMultiBindings === !1 && x === null && tl(T), y ? m = this._compileMultiBindings(n, T, g, o) : (w = b.primary, x === null ? (v = h.parse(T, Fe), m = [
          v === null ? new on(T, w.name) : new ms(v, w.name)
        ]) : (j.node = n, j.attr = f, j.bindable = w, j.def = g, m = [x.build(j, o._exprParser, o._attrMapper)])), (p ?? (p = [])).push(new Qa(
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? g : g.name,
          g.aliases != null && g.aliases.includes(k) ? k : void 0,
          m
        ));
        continue;
      }
      if (x == null)
        if (v = h.parse(T, Fe), v != null)
          a.push(new ms(
            v,
            // if not a bindable, then ensure plain attribute are mapped correctly:
            // e.g: colspan -> colSpan
            //      innerhtml -> innerHTML
            //      minlength -> minLength etc...
            o._attrMapper.map(n, k) ?? qt(k)
          ));
        else
          switch (k) {
            case "class":
              a.push(new ou(T));
              break;
            case "style":
              a.push(new au(T));
              break;
            default:
              a.push(new ru(T, k));
          }
      else
        j.node = n, j.attr = f, j.bindable = null, j.def = null, a.push(x.build(j, o._exprParser, o._attrMapper));
    }
    return io(), p != null ? p.concat(a) : a;
  }
  /** @internal */
  _compileSurrogate(t, e) {
    const s = [], n = t.attributes, r = e._exprParser;
    let o = n.length, a = 0, l, c, h, u, d = null, f, g, p, m, b = null, _, w, x, v;
    for (; o > a; ++a) {
      if (l = n[a], c = l.name, h = l.value, u = e._attrParser.parse(c, h), x = u.target, v = u.rawValue, o0[x])
        throw It(702, c);
      if (b = e._getCommand(u), b !== null && b.ignoreAttr) {
        j.node = t, j.attr = u, j.bindable = null, j.def = null, s.push(b.build(j, e._exprParser, e._attrMapper));
        continue;
      }
      if (d = e._findAttr(x), d !== null) {
        if (d.isTemplateController)
          throw It(703, x);
        p = e._getBindables(d), w = d.noMultiBindings === !1 && b === null && tl(v), w ? g = this._compileMultiBindings(t, v, d, e) : (m = p.primary, b === null ? (_ = r.parse(v, Fe), g = _ === null ? v === "" ? [] : [new on(v, m.name)] : [new ms(_, m.name)]) : (j.node = t, j.attr = u, j.bindable = m, j.def = d, g = [b.build(j, e._exprParser, e._attrMapper)])), t.removeAttribute(c), --a, --o, (f ?? (f = [])).push(new Qa(
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? d : d.name,
          d.aliases != null && d.aliases.includes(x) ? x : void 0,
          g
        ));
        continue;
      }
      if (b === null)
        if (_ = r.parse(v, Fe), _ != null)
          t.removeAttribute(c), --a, --o, s.push(new ms(
            _,
            // if not a bindable, then ensure plain attribute are mapped correctly:
            // e.g: colspan -> colSpan
            //      innerhtml -> innerHTML
            //      minlength -> minLength etc...
            e._attrMapper.map(t, x) ?? qt(x)
          ));
        else
          switch (c) {
            case "class":
              s.push(new ou(v));
              break;
            case "style":
              s.push(new au(v));
              break;
            default:
              s.push(new ru(v, c));
          }
      else
        j.node = t, j.attr = u, j.bindable = null, j.def = null, s.push(b.build(j, e._exprParser, e._attrMapper));
    }
    return io(), f != null ? f.concat(s) : s;
  }
  // overall flow:
  // each of the method will be responsible for compiling its corresponding node type
  // and it should return the next node to be compiled
  /** @internal */
  _compileNode(t, e) {
    switch (t.nodeType) {
      case 1:
        switch (t.nodeName) {
          case "LET":
            return this._compileLet(t, e);
          default:
            return this._compileElement(t, e);
        }
      case 3:
        return this._compileText(t, e);
      case 11: {
        let s = t.firstChild;
        for (; s !== null; )
          s = this._compileNode(s, e);
        break;
      }
    }
    return t.nextSibling;
  }
  /** @internal */
  _compileLet(t, e) {
    const s = t.attributes, n = s.length, r = [], o = e._exprParser;
    let a = !1, l = 0, c, h, u, d, f, g, p, m;
    for (; n > l; ++l) {
      if (c = s[l], u = c.name, d = c.value, u === "to-binding-context") {
        a = !0;
        continue;
      }
      if (h = e._attrParser.parse(u, d), g = h.target, p = h.rawValue, f = e._getCommand(h), f !== null) {
        if (h.command === "bind")
          r.push(new nu(o.parse(p, fs), qt(g)));
        else
          throw It(704, h);
        continue;
      }
      m = o.parse(p, Fe), m === null && console.warn(`[DEV:aurelia] Property "${g}" is declared with literal string ${p}. Did you mean ${g}.bind="${p}"?`), r.push(new nu(m === null ? new Yt(p) : m, qt(g)));
    }
    return e.rows.push([new t0(r, a)]), this._markAsTarget(t, e).nextSibling;
  }
  /** @internal */
  // eslint-disable-next-line
  _compileElement(t, e) {
    var Y, Q, Ft, Ke, Ye, de, Xt, et;
    const s = t.nextSibling, n = (t.getAttribute("as-element") ?? t.nodeName).toLowerCase(), r = e._findElement(n), o = r !== null, a = o && r.shadowOptions != null, l = r == null ? void 0 : r.capture, c = l != null && typeof l != "boolean", h = l ? [] : tt, u = e._exprParser, d = this.debug ? ns : () => {
      t.removeAttribute(_), --m, --p;
    };
    let f = t.attributes, g, p = f.length, m = 0, b, _, w, x, v, y, k = null, T = !1, M, O, $, V, z, H, N, I = null, W, it, L, J, A = !0, E = !1, S = !1, P = !1, dt, C = 0;
    if (n === "slot") {
      if (e.root.def.shadowOptions == null)
        throw It(717, e.root.def.name);
      e.root.hasSlot = !0;
    }
    for (o && (dt = {}, A = (Y = r.processContent) == null ? void 0 : Y.call(r.Type, t, e.p, dt), f = t.attributes, p = f.length); p > m; ++m) {
      switch (b = f[m], _ = b.name, w = b.value, _) {
        case "as-element":
        case "containerless":
          d(), E = E || _ === "containerless";
          continue;
      }
      if (x = e._attrParser.parse(_, w), I = e._getCommand(x), L = x.target, J = x.rawValue, l && (!c || c && l(L))) {
        if (I != null && I.ignoreAttr) {
          d(), h.push(x);
          continue;
        }
        if (S = L !== qn && L !== "slot" && ((C = L.indexOf("...")) === -1 || C === 0 && L === "...$attrs"), S && (W = e._getBindables(r), W.attrs[L] == null && !((Q = e._findAttr(L)) != null && Q.isTemplateController))) {
          d(), h.push(x);
          continue;
        }
      }
      if (L === "...$attrs") {
        (v ?? (v = [])).push(new lu()), d();
        continue;
      }
      if (I != null && I.ignoreAttr) {
        j.node = t, j.attr = x, j.bindable = null, j.def = null, (v ?? (v = [])).push(I.build(j, e._exprParser, e._attrMapper)), d();
        continue;
      }
      if (L.indexOf("...") === 0) {
        if (o && (L = L.slice(3)) !== "$element") {
          (y ?? (y = [])).push(new Ul("$bindables", L === "$bindables" ? J : L)), d();
          continue;
        }
        throw (L === "$bindable" || L === "bindables") && console.warn(`[DEV:aurelia] Detected usage of ${L} on <${t.nodeName}>, did you mean "$bindables"?`), It(720, L);
      }
      if (o) {
        if (W = e._getBindables(r), M = W.attrs[L], M !== void 0) {
          I === null ? (H = u.parse(J, Fe), (y ?? (y = [])).push(H == null ? new on(J, M.name) : new ms(H, M.name))) : (j.node = t, j.attr = x, j.bindable = M, j.def = r, (y ?? (y = [])).push(I.build(j, e._exprParser, e._attrMapper))), d(), k = e._findAttr(L), k !== null && console.warn(`[DEV:aurelia] Binding with bindable "${L}" on custom element "${r.name}" is ambiguous.There is a custom attribute with the same name.`);
          continue;
        }
        if (L === "$bindables") {
          if (I != null) {
            j.node = t, j.attr = x, j.bindable = null, j.def = r;
            {
              const q = I.build(j, e._exprParser, e._attrMapper);
              q instanceof Ul || console.warn(`[DEV:aurelia] Binding with "$bindables" on custom element "${r.name}" with command ${x.command}  did not result in a spread binding instruction. This likely won't work as expected.`), (y ?? (y = [])).push(q);
            }
          } else
            console.warn(`[DEV:aurelia] Usage of "$bindables" on custom element "<${r.name}>" is ignored.`);
          d();
          continue;
        }
      }
      if (L === "$bindables")
        throw It(721, t.nodeName, L, J);
      if (k = e._findAttr(L), k !== null) {
        W = e._getBindables(k), T = k.noMultiBindings === !1 && I === null && tl(J), T ? $ = this._compileMultiBindings(t, J, k, e) : (it = W.primary, I === null ? (H = u.parse(J, Fe), $ = H === null ? J === "" ? [] : [new on(J, it.name)] : [new ms(H, it.name)]) : (j.node = t, j.attr = x, j.bindable = it, j.def = k, $ = [I.build(j, e._exprParser, e._attrMapper)])), d(), k.isTemplateController ? (V ?? (V = [])).push(new Jv(
          r0,
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? k : k.name,
          void 0,
          $
        )) : (O ?? (O = [])).push(new Qa(
          // todo: def/ def.Type or def.name should be configurable
          //       example: AOT/runtime can use def.Type, but there are situation
          //       where instructions need to be serialized, def.name should be used
          this.resolveResources ? k : k.name,
          k.aliases != null && k.aliases.includes(L) ? L : void 0,
          $
        ));
        continue;
      }
      if (I === null) {
        H = u.parse(J, Fe), H != null && (d(), (v ?? (v = [])).push(new ms(
          H,
          // if not a bindable, then ensure plain attribute are mapped correctly:
          // e.g: colspan -> colSpan
          //      innerhtml -> innerHTML
          //      minlength -> minLength etc...
          e._attrMapper.map(t, L) ?? qt(L)
        )));
        continue;
      }
      j.node = t, j.attr = x, j.bindable = null, j.def = null, (v ?? (v = [])).push(I.build(j, e._exprParser, e._attrMapper)), d();
    }
    io(), this._shouldReorderAttrs(t, v) && v != null && v.length > 1 && this._reorder(t, v), o && (N = new Zv(
      // todo: def/ def.Type or def.name should be configurable
      //       example: AOT/runtime can use def.Type, but there are situation
      //       where instructions need to be serialized, def.name should be used
      this.resolveResources ? r : r.name,
      y ?? tt,
      null,
      E,
      h,
      dt
    )), (v != null || N != null || O != null) && (g = tt.concat(N ?? tt, O ?? tt, v ?? tt), P = !0);
    let R;
    if (V != null) {
      p = V.length - 1, m = p, z = V[m];
      let q;
      mu(t) ? (q = e.t(), du(q, [
        // context.h(MARKER_NODE_NAME),
        e._marker(),
        e._comment(Xa),
        e._comment(Ga)
      ])) : (this._replaceByMarker(t, e), t.nodeName === "TEMPLATE" ? q = t : (q = e.t(), bi(q, t)));
      const Qe = q, Dt = e._createChild(g == null ? [] : [g]);
      let Re, De, pi = !1, gi, $e, Xe, Ge, Hn, Ns, mi = 0, Lh = 0, Zt = t.firstChild, Bh = !1;
      if (A !== !1)
        for (; Zt !== null; ) {
          if (De = fu(Zt) ? Zt.getAttribute(qn) : null, pi = De !== null || o && !a, Re = Zt.nextSibling, pi) {
            if (!o)
              throw It(706, De, n);
            (Ft = Zt.removeAttribute) == null || Ft.call(Zt, qn), Bh = pu(Zt) && Zt.textContent.trim() === "", Bh || ((Ke = $e ?? ($e = {}))[Ye = De || gu] ?? (Ke[Ye] = [])).push(Zt), t.removeChild(Zt);
          }
          Zt = Re;
        }
      if ($e != null) {
        gi = {};
        for (De in $e) {
          for (q = e.t(), Xe = $e[De], mi = 0, Lh = Xe.length; Lh > mi; ++mi)
            Ge = Xe[mi], Ge.nodeName === "TEMPLATE" ? Ge.attributes.length > 0 ? bi(q, Ge) : bi(q, Ge.content) : bi(q, Ge);
          Ns = e._createChild(), this._compileNode(q.content, Ns), gi[De] = {
            name: Kn(),
            type: un,
            template: q,
            instructions: Ns.rows,
            needsCompile: !1
          };
        }
        N.projections = gi;
      }
      if (P && (o && (E || r.containerless) ? this._replaceByMarker(t, e) : this._markAsTarget(t, e)), R = !o || !r.containerless && !E && A !== !1, R)
        if (t.nodeName === Ja)
          this._compileNode(t.content, Dt);
        else
          for (Zt = t.firstChild; Zt !== null; )
            Zt = this._compileNode(Zt, Dt);
      for (z.def = {
        name: Kn(),
        type: un,
        template: Qe,
        instructions: Dt.rows,
        needsCompile: !1
      }; m-- > 0; )
        z = V[m], q = e.t(), Hn = e._marker(), du(q, [
          Hn,
          e._comment(Xa),
          e._comment(Ga)
        ]), z.def = {
          name: Kn(),
          type: un,
          template: q,
          needsCompile: !1,
          instructions: [[V[m + 1]]]
        };
      e.rows.push([z]);
    } else {
      g != null && e.rows.push(g);
      let q = t.firstChild, Qe, Dt, Re = !1, De = null, pi, gi, $e, Xe, Ge, Hn = !1, Ns = 0, mi = 0;
      if (A !== !1)
        for (; q !== null; ) {
          if (Dt = fu(q) ? q.getAttribute(qn) : null, Re = Dt !== null || o && !a, Qe = q.nextSibling, Re) {
            if (!o)
              throw It(706, Dt, n);
            (de = q.removeAttribute) == null || de.call(q, qn), Hn = pu(q) && q.textContent.trim() === "", Hn || ((Xt = pi ?? (pi = {}))[et = Dt || gu] ?? (Xt[et] = [])).push(q), t.removeChild(q);
          }
          q = Qe;
        }
      if (pi != null) {
        De = {};
        for (Dt in pi) {
          for (Xe = e.t(), gi = pi[Dt], Ns = 0, mi = gi.length; mi > Ns; ++Ns)
            $e = gi[Ns], $e.nodeName === Ja ? $e.attributes.length > 0 ? bi(Xe, $e) : bi(Xe, $e.content) : bi(Xe, $e);
          Ge = e._createChild(), this._compileNode(Xe.content, Ge), De[Dt] = {
            name: Kn(),
            type: un,
            template: Xe,
            instructions: Ge.rows,
            needsCompile: !1
          };
        }
        N.projections = De;
      }
      if (P && (o && (E || r.containerless) ? this._replaceByMarker(t, e) : this._markAsTarget(t, e)), R = !o || !r.containerless && !E && A !== !1, R && t.childNodes.length > 0)
        for (q = t.firstChild; q !== null; )
          q = this._compileNode(q, e);
    }
    return s;
  }
  /** @internal */
  _compileText(t, e) {
    const s = t.parentNode, n = e._exprParser.parse(t.textContent, Fe), r = t.nextSibling;
    let o, a, l, c, h;
    if (n !== null) {
      for ({ parts: o, expressions: a } = n, (h = o[0]) && Za(s, e._text(h), t), l = 0, c = a.length; c > l; ++l)
        uu(s, t, [
          // context.h(MARKER_NODE_NAME),
          e._marker(),
          // empty text node will not be cloned when doing fragment.cloneNode()
          // so give it an empty space instead
          e._text(" ")
        ]), (h = o[l + 1]) && Za(s, e._text(h), t), e.rows.push([new e0(a[l])]);
      s.removeChild(t);
    }
    return r;
  }
  /** @internal */
  _compileMultiBindings(t, e, s, n) {
    const r = n._getBindables(s), o = e.length, a = [];
    let l, c, h = 0, u = 0, d, f, g, p;
    for (let m = 0; m < o; ++m)
      if (u = e.charCodeAt(m), u === 92)
        ++m;
      else if (u === 58) {
        for (l = e.slice(h, m); e.charCodeAt(++m) <= 32; )
          ;
        for (h = m; m < o; ++m)
          if (u = e.charCodeAt(m), u === 92)
            ++m;
          else if (u === 59) {
            c = e.slice(h, m);
            break;
          }
        if (c === void 0 && (c = e.slice(h)), f = n._attrParser.parse(l, c), g = n._getCommand(f), p = r.attrs[f.target], p == null)
          throw It(707, f.target, s.name);
        for (g === null ? (d = n._exprParser.parse(c, Fe), a.push(d === null ? new on(c, p.name) : new ms(d, p.name))) : (j.node = t, j.attr = f, j.bindable = p, j.def = s, a.push(g.build(j, n._exprParser, n._attrMapper))); m < o && e.charCodeAt(++m) <= 32; )
          ;
        h = m, l = void 0, c = void 0;
      }
    return io(), a;
  }
  /** @internal */
  _compileLocalElement(t, e) {
    const s = e.root.def.name, n = t, r = za(n.querySelectorAll("template[as-custom-element]")), o = r.length;
    if (o === 0)
      return;
    if (o === n.childElementCount)
      throw It(708, s);
    const a = /* @__PURE__ */ new Set(), l = [];
    for (const h of r) {
      if (h.parentNode !== n)
        throw It(709, s);
      const u = c0(s, h, a), d = h.content, f = za(d.querySelectorAll("bindable")), g = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = f.reduce((_, w) => {
        if (w.parentNode !== d)
          throw It(710, u);
        const x = w.getAttribute(
          "name"
          /* LocalTemplateBindableAttributes.name */
        );
        if (x === null)
          throw It(711, w, u);
        const v = w.getAttribute(
          "attribute"
          /* LocalTemplateBindableAttributes.attribute */
        );
        if (v !== null && p.has(v) || g.has(x))
          throw It(712, g, v);
        v !== null && p.add(v), g.add(x);
        const y = za(w.attributes).filter((k) => !bu.includes(k.name));
        return y.length > 0 && console.warn(`[DEV:aurelia] The attribute(s) ${y.map((k) => k.name).join(", ")} will be ignored for ${w.outerHTML}. Only ${bu.join(", ")} are processed.`), w.remove(), _[x] = {
          name: x,
          attribute: v ?? void 0,
          mode: w.getAttribute(
            "mode"
            /* LocalTemplateBindableAttributes.mode */
          ) ?? "default"
        }, _;
      }, {});
      class b {
      }
      b.$au = {
        type: un,
        name: u,
        template: h,
        bindables: m
      }, Reflect.defineProperty(b, "name", { value: Tf(u) }), l.push(b), n.removeChild(h);
    }
    const c = (e.root.def.dependencies ?? []).concat(e.root.def.Type == null ? tt : [e.root.def.Type]);
    for (const h of l)
      h.dependencies = c.concat(l.filter((u) => u !== h)), e._addLocalDep(h);
  }
  /** @internal */
  _shouldReorderAttrs(t, e) {
    const s = t.nodeName;
    return s === "INPUT" && a0[t.type] === 1 || s === "SELECT" && (t.hasAttribute("multiple") || (e == null ? void 0 : e.some((n) => n.type === Lc && n.to === "multiple")));
  }
  /** @internal */
  _reorder(t, e) {
    switch (t.nodeName) {
      case "INPUT": {
        const s = e;
        let n, r, o = 0, a;
        for (let l = 0; l < s.length && o < 3; l++)
          switch (a = s[l], a.to) {
            case "model":
            case "value":
            case "matcher":
              n = l, o++;
              break;
            case "checked":
              r = l, o++;
              break;
          }
        r !== void 0 && n !== void 0 && r < n && ([s[n], s[r]] = [s[r], s[n]]);
        break;
      }
      case "SELECT": {
        const s = e;
        let n = 0, r = 0, o = 0, a;
        for (let l = 0; l < s.length && o < 2; ++l) {
          switch (a = s[l], a.to) {
            case "multiple":
              r = l, o++;
              break;
            case "value":
              n = l, o++;
              break;
          }
          o === 2 && n < r && ([s[r], s[n]] = [s[n], s[r]]);
        }
      }
    }
  }
  /**
   * Mark an element as target with a special css class
   * and return it
   *
   * @internal
   */
  _markAsTarget(t, e) {
    return Za(t.parentNode, e._comment("au*"), t), t;
  }
  /**
   * Replace an element with a marker, and return the marker
   *
   * @internal
   */
  _replaceByMarker(t, e) {
    if (mu(t))
      return t;
    const s = t.parentNode, n = e._marker();
    return uu(s, t, [
      n,
      e._comment(Xa),
      e._comment(Ga)
    ]), s.removeChild(t), n;
  }
}
Wp.register = Hr(ua);
const Ja = "TEMPLATE", mu = (i) => i.nodeValue === "au*";
class Ho {
  constructor(t, e, s, n, r) {
    var a;
    this.hasSlot = !1, this.deps = null;
    const o = s !== null;
    if (this.c = e, this.root = n === null ? this : n, this.def = t, this.parent = s, this._resourceResolver = o ? s._resourceResolver : e.get(Up), this._commandResolver = o ? s._commandResolver : e.get(l0), this._templateFactory = o ? s._templateFactory : e.get(i0), this._attrParser = o ? s._attrParser : e.get($c), this._exprParser = o ? s._exprParser : e.get(Fn), this._attrMapper = o ? s._attrMapper : e.get(rp), this._logger = o ? s._logger : e.get(ji), typeof ((a = (this.p = o ? s.p : e.get(Bn)).document) == null ? void 0 : a.nodeType) != "number")
      throw It(
        722
        /* ErrorNames.compiler_no_dom_api */
      );
    this.localEls = o ? s.localEls : /* @__PURE__ */ new Set(), this.rows = r ?? [];
  }
  _addLocalDep(t) {
    var e;
    return ((e = this.root).deps ?? (e.deps = [])).push(t), this.root.c.register(t), this;
  }
  _text(t) {
    return this.p.document.createTextNode(t);
  }
  _comment(t) {
    return this.p.document.createComment(t);
  }
  _marker() {
    return this._comment("au*");
  }
  h(t) {
    const e = this.p.document.createElement(t);
    return t === "template" && this.p.document.adoptNode(e.content), e;
  }
  t() {
    return this.h("template");
  }
  /**
   * Find the custom element definition of a given name
   */
  _findElement(t) {
    return this._resourceResolver.el(this.c, t);
  }
  /**
   * Find the custom attribute definition of a given name
   */
  _findAttr(t) {
    return this._resourceResolver.attr(this.c, t);
  }
  _getBindables(t) {
    return this._resourceResolver.bindables(t);
  }
  /**
   * Create a new child compilation context
   */
  _createChild(t) {
    return new Ho(this.def, this.c, this, this.root, t);
  }
  /**
   * Retrieve a binding command resource instance.
   *
   * @param name - The parsed `AttrSyntax`
   *
   * @returns An instance of the command if it exists, or `null` if it does not exist.
   */
  _getCommand(t) {
    const e = t.command;
    return e === null ? null : this._commandResolver.get(this.c, e);
  }
}
const tl = (i) => {
  const t = i.length;
  let e = 0, s = 0;
  for (; t > s; ) {
    if (e = i.charCodeAt(s), e === 92)
      ++s;
    else {
      if (e === 58)
        return !0;
      if (e === 36 && i.charCodeAt(s + 1) === 123)
        return !1;
    }
    ++s;
  }
  return !1;
}, io = () => {
  j.node = j.attr = j.bindable = j.def = null;
}, r0 = { name: "unnamed", type: un }, j = {
  node: null,
  attr: null,
  bindable: null,
  def: null
}, o0 = {
  id: !0,
  name: !0,
  "au-slot": !0,
  "as-element": !0
}, a0 = {
  checkbox: 1,
  radio: 1
  // todo: range is also sensitive to order, for min/max
}, Up = /* @__PURE__ */ ds("IResourceResolver"), l0 = /* @__PURE__ */ ds("IBindingCommandResolver", (i) => {
  class t {
    constructor() {
      this._cache = /* @__PURE__ */ new WeakMap();
    }
    get(s, n) {
      let r = this._cache.get(s);
      return r || this._cache.set(s, r = {}), n in r ? r[n] : r[n] = s0.get(s, n);
    }
  }
  return i.singleton(t);
}), bu = Vn([
  "name",
  "attribute",
  "mode"
  /* LocalTemplateBindableAttributes.mode */
]), Kl = "as-custom-element", c0 = (i, t, e) => {
  const s = t.getAttribute(Kl);
  if (s === null || s === "")
    throw It(715, i);
  if (e.has(s))
    throw It(716, s, i);
  return e.add(s), t.removeAttribute(Kl), s;
}, _u = /* @__PURE__ */ ds("ITemplateCompilerHooks"), h0 = Vn({
  name: /* @__PURE__ */ Zi("compiler-hooks"),
  define(i) {
    return {
      register(t) {
        Oc(_u, i).register(t);
      }
    };
  },
  findAll(i) {
    return i.get(o_(_u));
  }
}), u0 = Object.prototype.hasOwnProperty, Zs = Reflect.defineProperty;
function ls(i, t, e) {
  return Zs(i, t, {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: e
  }), e;
}
function Ss(i, t, e) {
  t in i || ls(i, t, e);
}
const qp = Object.assign, Fc = Object.freeze, Pn = String, da = ni.createInterface, d0 = $s.get, f0 = $s.define, G = (i, ...t) => new Error(`AUR${Pn(i).padStart(4, "0")}: ${g0(i, ...t)}`), p0 = {
  99: "Method {{0}} not implemented",
  101: 'Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?',
  102: 'Ast eval error: binding behavior "{{0}}" already applied.',
  103: 'Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?',
  105: "Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?",
  106: 'Ast eval error: invalid assignment. "$host" is a reserved keyword.',
  107: "Ast eval error: expression is not a function.",
  109: 'Ast eval error: unknown unary operator: "{{0}}"',
  108: 'Ast eval error: unknown binary operator: "{{0}}"',
  110: "Ast eval error: left-hand side of tagged template expression is not a function.",
  111: 'Ast eval error: expected "{{0}}" to be a function',
  112: "Ast eval error: cannot use non-object value for destructuring assignment.",
  113: "Ast eval error: infinite loop detected. Increment operators should only be used in event handlers.",
  114: 'Ast eval error: cannot access property "{{0}}" of {{1}}.',
  115: 'Ast eval error: cannot access key "{{0}}" of {{1}}.',
  116: 'Ast eval error: cannot assign value to property "{{0}}" of null/undefined.',
  151: 'Expression error: invalid start: "{{0}}"',
  152: 'Expression error: spread operator is not supported: "{{0}}"',
  153: 'Expression error: expected identifier: "{{0}}"',
  154: 'Expression error: invalid member expression: "{{0}}"',
  155: 'Expression error: unexpected end of expression: "{{0}}"',
  156: 'Expression error: unconsumed token: "{{0}}" at position {{1}} of "{{2}}"',
  157: "Expression error: invalid empty expression. Empty expression is only valid in event bindings (trigger, delegate, capture etc...)",
  158: 'Expression error: left hand side of expression is not assignable: "{{0}}"',
  159: 'Expression error: expected identifier to come after value converter operator: "{{0}}"',
  160: "Expression error: expected identifier to come after binding behavior operator: {{0}}",
  161: 'Expression error: unexpected keyword "of": "{{0}}"',
  162: 'Expression error: unexpected keyword "import": "{{0}}"',
  163: 'Expression error: invalid BindingIdentifier at left hand side of "of": "{{0}}" | kind: {{1}}',
  164: 'Expression error: invalid or unsupported property definition in object literal: "{{0}}"',
  165: 'Expression error: unterminated quote in string literal: "{{0}}"',
  166: 'Expression error: unterminated template string: "{{0}}"',
  167: 'Expression error: missing expected token "{{0}}" in "{{1}}"',
  168: 'Expression error: unexpected character: "{{0}}"',
  170: 'Expression error: unexpected "{{0}}" at position "{{1}}" for destructuring assignment in "{{2}}"',
  171: 'Expression error: unexpected {{0}} at position "{{1}}" for optional chain in "{{2}}"',
  172: 'Expression error: invalid tagged template on optional chain in "{{1}}"',
  173: 'Expression error: invalid arrow parameter list in "{{0}}"',
  174: 'Expression error: arrow function with default parameters is not supported: "{{0}}"',
  175: 'Expression error: arrow function with destructuring parameters is not supported: "{{0}}"',
  176: 'Expression error: rest parameter must be last formal parameter in arrow function: "{{0}}"',
  178: 'Expression error: arrow function with function body is not supported: "{{0}}"',
  179: `Expression error: unexpected token '.' at position "{{1}}" in "{{0}}"`,
  199: "Trying to observe property {{0}} on null/undefined",
  203: "Trying to retrieve a property or build a scope from a null/undefined scope",
  204: "Trying to create a scope with null/undefined binding context",
  206: "Trying to switch to a null/undefined connectable",
  207: "Trying to enter an active connectable",
  208: "Trying to pop a null/undefined connectable",
  209: "Trying to exit an inactive connectable",
  210: "Unrecognised collection type {{0:toString}}.",
  217: "There is no registration for IDirtyChecker interface. If you want to use your own dirty checker, make sure you register it.",
  218: "Dirty checked is not permitted in this application. Property key {{0}} is being dirty checked.",
  219: "Trying to set value for property {{0}} in dirty checker",
  220: 'Map/Set "size" is a readonly property',
  221: 'Trying to assign value to readonly property "{{0}}" through computed observer.',
  224: "Invalid @observable decorator usage, cannot determine property name",
  225: "Trying to stop an effect that has already been stopped",
  226: "Maximum number of recursive effect run reached. Consider handle effect dependencies differently."
}, g0 = (i, ...t) => {
  var s;
  let e = p0[i];
  for (let n = 0; n < t.length; ++n) {
    const r = new RegExp(`{{${n}(:.*)?}}`, "g");
    let o = r.exec(e);
    for (; o != null; ) {
      const a = (s = o[1]) == null ? void 0 : s.slice(1);
      let l = t[n];
      if (l != null)
        switch (a) {
          case "typeof":
            l = typeof l;
            break;
          case "toString":
            l = Object.prototype.toString.call(l);
            break;
          case "join(!=)":
            l = l.join("!=");
            break;
          case "element":
            l = l === "*" ? "all elements" : `<${l} />`;
            break;
          default:
            a != null && a.startsWith(".") ? l = Pn(l[a.slice(1)]) : l = Pn(l);
        }
      e = e.slice(0, o.index) + l + e.slice(r.lastIndex), o = r.exec(e);
    }
  }
  return e;
};
class zt {
  constructor(t, e, s, n) {
    this.parent = t, this.bindingContext = e, this.overrideContext = s, this.isBoundary = n;
  }
  static getContext(t, e, s) {
    if (t == null)
      throw G(
        203
        /* ErrorNames.null_scope */
      );
    let n = t.overrideContext, r = t;
    if (s > 0) {
      for (; s > 0; )
        if (s--, r = r.parent, r == null)
          return;
      return n = r.overrideContext, e in n ? n : r.bindingContext;
    }
    for (; r != null && !r.isBoundary && !(e in r.overrideContext) && !(e in r.bindingContext); )
      r = r.parent;
    return r == null ? t.bindingContext : (n = r.overrideContext, e in n ? n : r.bindingContext);
  }
  static create(t, e, s) {
    if (t == null)
      throw G(
        204
        /* ErrorNames.create_scope_with_null_context */
      );
    return new zt(null, t, e ?? new yu(), s ?? !1);
  }
  static fromParent(t, e, s = new yu()) {
    if (t == null)
      throw G(
        203
        /* ErrorNames.null_scope */
      );
    return new zt(t, e, s, !1);
  }
}
class vu {
  constructor(t, e) {
    t !== void 0 && (this[t] = e);
  }
}
class yu {
}
const { astAssign: Or, astEvaluate: Tt, astBind: oi, astUnbind: ai } = /* @__PURE__ */ (() => {
  const i = "AccessThis", t = "AccessBoundary", e = "AccessGlobal", s = "AccessScope", n = "ArrayLiteral", r = "ObjectLiteral", o = "PrimitiveLiteral", a = "Template", l = "Unary", c = "CallScope", h = "CallMember", u = "CallFunction", d = "CallGlobal", f = "AccessMember", g = "AccessKeyed", p = "TaggedTemplate", m = "Binary", b = "Conditional", _ = "Assign", w = "ArrowFunction", x = "ValueConverter", v = "BindingBehavior", y = "ArrayBindingPattern", k = "ObjectBindingPattern", T = "BindingIdentifier", M = "ForOfStatement", O = "Interpolation", $ = "ArrayDestructuring", V = "ObjectDestructuring", z = "DestructuringAssignmentLeaf", H = "Custom", N = zt.getContext;
  function I(A, E, S, P) {
    var dt;
    switch (A.$kind) {
      case i: {
        let C = E.overrideContext, R = E, Y = A.ancestor;
        for (; Y-- && C; )
          R = R.parent, C = (R == null ? void 0 : R.overrideContext) ?? null;
        return Y < 1 && R ? R.bindingContext : void 0;
      }
      case t: {
        let C = E;
        for (; C != null && !C.isBoundary; )
          C = C.parent;
        return C ? C.bindingContext : void 0;
      }
      case s: {
        const C = N(E, A.name, A.ancestor);
        P !== null && P.observe(C, A.name);
        const R = C[A.name];
        if (R == null) {
          if (A.name === "$host")
            throw G(
              105
              /* ErrorNames.ast_$host_not_found */
            );
          return R;
        }
        return S != null && S.boundFn && pt(R) ? R.bind(C) : R;
      }
      case e:
        return globalThis[A.name];
      case d: {
        const C = globalThis[A.name];
        if (pt(C))
          return C(...A.args.map((R) => I(R, E, S, P)));
        if (!(S != null && S.strict) && C == null)
          return;
        throw G(
          107
          /* ErrorNames.ast_not_a_function */
        );
      }
      case n:
        return A.elements.map((C) => I(C, E, S, P));
      case r: {
        const C = {};
        for (let R = 0; R < A.keys.length; ++R)
          C[A.keys[R]] = I(A.values[R], E, S, P);
        return C;
      }
      case o:
        return A.value;
      case a: {
        let C = A.cooked[0];
        for (let R = 0; R < A.expressions.length; ++R)
          C += Pn(I(A.expressions[R], E, S, P)), C += A.cooked[R + 1];
        return C;
      }
      case l: {
        const C = I(A.expression, E, S, P);
        switch (A.operation) {
          case "void":
            return;
          case "typeof":
            return typeof C;
          case "!":
            return !C;
          case "-":
            return -C;
          case "+":
            return +C;
          case "--":
            if (P != null)
              throw G(
                113
                /* ErrorNames.ast_increment_infinite_loop */
              );
            return W(A.expression, E, S, C - 1) + A.pos;
          case "++":
            if (P != null)
              throw G(
                113
                /* ErrorNames.ast_increment_infinite_loop */
              );
            return W(A.expression, E, S, C + 1) - A.pos;
          default:
            throw G(109, A.operation);
        }
      }
      case c: {
        const C = N(E, A.name, A.ancestor);
        if (C == null) {
          if (S != null && S.strict)
            throw G(114, A.name, C);
          return;
        }
        const R = C[A.name];
        if (pt(R))
          return R.apply(C, A.args.map((Y) => I(Y, E, S, P)));
        if (R == null) {
          if (S != null && S.strict && !A.optional)
            throw G(111, A.name);
          return;
        }
        throw G(111, A.name);
      }
      case h: {
        const C = I(A.object, E, S, P);
        if (C == null && S != null && S.strict && !A.optionalMember)
          throw G(114, A.name, C);
        const R = C == null ? void 0 : C[A.name];
        if (R == null) {
          if (!A.optionalCall && (S != null && S.strict))
            throw G(111, A.name);
          return;
        }
        if (!pt(R))
          throw G(111, A.name);
        const Y = R.apply(C, A.args.map((Q) => I(Q, E, S, P)));
        return Bt(C) && J.includes(A.name) && (P == null || P.observeCollection(C)), Y;
      }
      case u: {
        const C = I(A.func, E, S, P);
        if (pt(C))
          return C(...A.args.map((R) => I(R, E, S, P)));
        if (C == null) {
          if (!A.optional && (S != null && S.strict))
            throw G(
              107
              /* ErrorNames.ast_not_a_function */
            );
          return;
        }
        throw G(
          107
          /* ErrorNames.ast_not_a_function */
        );
      }
      case w:
        return (...R) => {
          const Y = A.args, Q = A.rest, Ft = Y.length - 1, Ke = Y.reduce((de, Xt, et) => (Q && et === Ft ? de[Xt.name] = R.slice(et) : de[Xt.name] = R[et], de), {}), Ye = zt.fromParent(E, Ke);
          return I(A.body, Ye, S, P);
        };
      case f: {
        const C = I(A.object, E, S, P);
        if (C == null) {
          if (!A.optional && (S != null && S.strict))
            throw G(114, A.name, C);
          return;
        }
        P !== null && !A.accessGlobal && P.observe(C, A.name);
        const R = C[A.name];
        return S != null && S.boundFn && pt(R) ? R.bind(C) : R;
      }
      case g: {
        const C = I(A.object, E, S, P), R = I(A.key, E, S, P);
        if (C == null) {
          if (!A.optional && (S != null && S.strict))
            throw G(115, R, C);
          return;
        }
        return P !== null && !A.accessGlobal && P.observe(C, R), C[R];
      }
      case p: {
        const C = A.expressions.map((Y) => I(Y, E, S, P)), R = I(A.func, E, S, P);
        if (!pt(R))
          throw G(
            110
            /* ErrorNames.ast_tagged_not_a_function */
          );
        return R(A.cooked, ...C);
      }
      case m: {
        const C = A.left, R = A.right;
        switch (A.operation) {
          case "&&":
            return I(C, E, S, P) && I(R, E, S, P);
          case "||":
            return I(C, E, S, P) || I(R, E, S, P);
          case "??":
            return I(C, E, S, P) ?? I(R, E, S, P);
          case "==":
            return I(C, E, S, P) == I(R, E, S, P);
          case "===":
            return I(C, E, S, P) === I(R, E, S, P);
          case "!=":
            return I(C, E, S, P) != I(R, E, S, P);
          case "!==":
            return I(C, E, S, P) !== I(R, E, S, P);
          case "instanceof": {
            const Y = I(R, E, S, P);
            return pt(Y) ? I(C, E, S, P) instanceof Y : !1;
          }
          case "in": {
            const Y = I(R, E, S, P);
            return Lo(Y) ? I(C, E, S, P) in Y : !1;
          }
          case "+":
            return I(C, E, S, P) + I(R, E, S, P);
          case "-":
            return I(C, E, S, P) - I(R, E, S, P);
          case "*":
            return I(C, E, S, P) * I(R, E, S, P);
          case "/":
            return I(C, E, S, P) / I(R, E, S, P);
          case "%":
            return I(C, E, S, P) % I(R, E, S, P);
          case "<":
            return I(C, E, S, P) < I(R, E, S, P);
          case ">":
            return I(C, E, S, P) > I(R, E, S, P);
          case "<=":
            return I(C, E, S, P) <= I(R, E, S, P);
          case ">=":
            return I(C, E, S, P) >= I(R, E, S, P);
          default:
            throw G(108, A.operation);
        }
      }
      case b:
        return I(A.condition, E, S, P) ? I(A.yes, E, S, P) : I(A.no, E, S, P);
      case _: {
        let C = I(A.value, E, S, P);
        if (A.op !== "=") {
          if (P != null)
            throw G(
              113
              /* ErrorNames.ast_increment_infinite_loop */
            );
          const R = I(A.target, E, S, P);
          switch (A.op) {
            case "/=":
              C = R / C;
              break;
            case "*=":
              C = R * C;
              break;
            case "+=":
              C = R + C;
              break;
            case "-=":
              C = R - C;
              break;
            default:
              throw G(108, A.op);
          }
        }
        return W(A.target, E, S, C);
      }
      case x:
        return (dt = S == null ? void 0 : S.useConverter) == null ? void 0 : dt.call(S, A.name, "toView", I(A.expression, E, S, P), A.args.map((C) => I(C, E, S, P)));
      case v:
        return I(A.expression, E, S, P);
      case T:
        return A.name;
      case M:
        return I(A.iterable, E, S, P);
      case O:
        if (A.isMulti) {
          let C = A.parts[0], R = 0;
          for (; R < A.expressions.length; ++R)
            C += Pn(I(A.expressions[R], E, S, P)), C += A.parts[R + 1];
          return C;
        } else
          return `${A.parts[0]}${I(A.firstExpression, E, S, P)}${A.parts[1]}`;
      case z:
        return I(A.target, E, S, P);
      case $:
        return A.list.map((C) => I(C, E, S, P));
      case y:
      case k:
      case V:
      default:
        return;
      case H:
        return A.evaluate(E, S, P);
    }
  }
  function W(A, E, S, P) {
    var dt;
    switch (A.$kind) {
      case s: {
        if (A.name === "$host")
          throw G(
            106
            /* ErrorNames.ast_no_assign_$host */
          );
        const C = N(E, A.name, A.ancestor);
        return C[A.name] = P;
      }
      case f: {
        const C = I(A.object, E, S, null);
        if (C == null) {
          if (S != null && S.strict)
            throw G(116, A.name);
          W(A.object, E, S, { [A.name]: P });
        } else Lo(C) && (A.name === "length" && Bt(C) && !isNaN(P) ? C.splice(P) : C[A.name] = P);
        return P;
      }
      case g: {
        const C = I(A.object, E, S, null), R = I(A.key, E, S, null);
        if (C == null) {
          if (S != null && S.strict)
            throw G(116, R);
          return W(A.object, E, S, { [R]: P }), P;
        }
        if (Bt(C)) {
          if (R === "length" && !isNaN(P))
            return C.splice(P), P;
          if (Tr(R))
            return C.splice(R, 1, P), P;
        }
        return C[R] = P;
      }
      case _:
        return W(A.value, E, S, P), W(A.target, E, S, P);
      case x:
        return P = (dt = S == null ? void 0 : S.useConverter) == null ? void 0 : dt.call(S, A.name, "fromView", P, A.args.map((C) => I(C, E, S, null))), W(A.expression, E, S, P);
      case v:
        return W(A.expression, E, S, P);
      case $:
      case V: {
        const C = A.list, R = C.length;
        let Y, Q;
        for (Y = 0; Y < R; Y++)
          switch (Q = C[Y], Q.$kind) {
            case z:
              W(Q, E, S, P);
              break;
            case $:
            case V: {
              if (typeof P != "object" || P === null)
                throw G(
                  112
                  /* ErrorNames.ast_destruct_null */
                );
              let Ft = I(Q.source, zt.create(P), S, null);
              Ft === void 0 && Q.initializer && (Ft = I(Q.initializer, E, S, null)), W(Q, E, S, Ft);
              break;
            }
          }
        break;
      }
      case z: {
        if (A instanceof Yf) {
          if (P == null)
            return;
          if (typeof P != "object")
            throw G(
              112
              /* ErrorNames.ast_destruct_null */
            );
          let C = I(A.source, zt.create(P), S, null);
          C === void 0 && A.initializer && (C = I(A.initializer, E, S, null)), W(A.target, E, S, C);
        } else {
          if (P == null)
            return;
          if (typeof P != "object")
            throw G(
              112
              /* ErrorNames.ast_destruct_null */
            );
          const C = A.indexOrProperties;
          let R;
          if (Tr(C)) {
            if (!Array.isArray(P))
              throw G(
                112
                /* ErrorNames.ast_destruct_null */
              );
            R = P.slice(C);
          } else
            R = Object.entries(P).reduce((Y, [Q, Ft]) => (C.includes(Q) || (Y[Q] = Ft), Y), {});
          W(A.target, E, S, R);
        }
        break;
      }
      case H:
        return A.assign(E, S, P);
      default:
        return;
    }
  }
  function it(A, E, S) {
    var P, dt, C;
    switch (A.$kind) {
      case v: {
        (P = S.bindBehavior) == null || P.call(S, A.name, E, A.args.map((R) => I(R, E, S, null))), it(A.expression, E, S);
        break;
      }
      case x: {
        (dt = S.bindConverter) == null || dt.call(S, A.name), it(A.expression, E, S);
        break;
      }
      case M: {
        it(A.iterable, E, S);
        break;
      }
      case H:
        (C = A.bind) == null || C.call(A, E, S);
    }
  }
  function L(A, E, S) {
    var P, dt, C;
    switch (A.$kind) {
      case v: {
        (P = S.unbindBehavior) == null || P.call(S, A.name, E), L(A.expression, E, S);
        break;
      }
      case x: {
        (dt = S.unbindConverter) == null || dt.call(S, A.name), L(A.expression, E, S);
        break;
      }
      case M: {
        L(A.iterable, E, S);
        break;
      }
      case H:
        (C = A.unbind) == null || C.call(A, E, S);
    }
  }
  const J = "at map filter includes indexOf lastIndexOf findIndex find flat flatMap join reduce reduceRight slice every some sort".split(" ");
  return {
    astEvaluate: I,
    astAssign: W,
    astBind: it,
    astUnbind: L
  };
})(), m0 = (i) => {
  const t = i.prototype;
  ["bindBehavior", "unbindBehavior", "bindConverter", "unbindConverter", "useConverter"].forEach((e) => {
    ls(t, e, () => {
      throw G(99, e);
    });
  });
}, Kp = /* @__PURE__ */ ni.createInterface("ICoercionConfiguration"), fa = 0, li = 1, b0 = 2, _0 = 4, Vc = /* @__PURE__ */ Fc({
  None: fa,
  Observer: li,
  Node: b0,
  // misc characteristic of accessors/observers when update
  //
  // by default, everything is synchronous
  // except changes that are supposed to cause reflow/heavy computation
  // an observer can use this flag to signal binding that don't carelessly tell it to update
  // queue it instead
  // todo: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  // todo: https://csstriggers.com/
  Layout: _0
});
function Wi(i = 0) {
  const t = Array(i);
  let e = 0;
  for (; e < i; )
    t[e] = e++;
  return t.deletedIndices = [], t.deletedItems = [], t.isIndexMap = !0, t;
}
let v0 = !1;
const ze = /* @__PURE__ */ (() => {
  function i(a, l) {
    return a == null ? r : r(a);
  }
  function t() {
    return ls(this, "subs", new o());
  }
  function e(a) {
    return this.subs.add(a);
  }
  function s(a) {
    return this.subs.remove(a);
  }
  const n = /* @__PURE__ */ new WeakSet();
  function r(a, l) {
    if (!n.has(a)) {
      n.add(a);
      const c = a.prototype;
      Zs(c, "subs", { get: t }), Ss(c, "subscribe", e), Ss(c, "unsubscribe", s);
    }
    return a;
  }
  class o {
    constructor() {
      this.count = 0, this._subs = [], this._requestDirtySubs = [], this._hasDirtySubs = !1;
    }
    add(l) {
      return this._subs.includes(l) ? !1 : (this._subs[this._subs.length] = l, "handleDirty" in l && (this._requestDirtySubs[this._requestDirtySubs.length] = l, this._hasDirtySubs = !0), ++this.count, !0);
    }
    remove(l) {
      let c = this._subs.indexOf(l);
      return c !== -1 ? (this._subs.splice(c, 1), c = this._requestDirtySubs.indexOf(l), c !== -1 && (this._requestDirtySubs.splice(c, 1), this._hasDirtySubs = this._requestDirtySubs.length > 0), --this.count, !0) : !1;
    }
    notify(l, c) {
      for (const h of this._subs.slice(0))
        h.handleChange(l, c);
    }
    notifyCollection(l, c) {
      const h = this._subs.slice(0), u = h.length;
      let d = 0;
      for (; d < u; ++d)
        h[d].handleCollectionChange(l, c);
    }
    notifyDirty() {
      if (this._hasDirtySubs)
        for (const l of this._requestDirtySubs.slice(0))
          l.handleDirty();
    }
  }
  return i;
})();
class Yp {
  constructor(t) {
    this.owner = t, this.type = li, this._value = (this._obj = t.collection).length;
  }
  getValue() {
    return this._obj.length;
  }
  setValue(t) {
    t !== this._value && (Number.isNaN(t) ? console.warn(`Invalid value "${t}" for array length`) : (this._obj.splice(t), this._value = this._obj.length));
  }
  handleDirty() {
    this._value !== this._obj.length && this.subs.notifyDirty();
  }
  handleCollectionChange(t, e) {
    const s = this._value, n = this._obj.length;
    (this._value = n) !== s && (this.subs.notifyDirty(), this.subs.notify(this._value, s));
  }
}
Qp(Yp);
class Nc {
  constructor(t) {
    this.owner = t, this.type = li, this._value = (this._obj = t.collection).size;
  }
  getValue() {
    return this._obj.size;
  }
  setValue() {
    throw G(
      220
      /* ErrorNames.assign_readonly_size */
    );
  }
  handleDirty() {
    this._value !== this._obj.size && this.subs.notifyDirty();
  }
  handleCollectionChange(t, e) {
    const s = this._value, n = this._obj.size;
    (this._value = n) !== s && this.subs.notify(this._value, s);
  }
}
Qp(Nc);
function Qp(i) {
  const t = i.prototype;
  return Ss(t, "subscribe", y0), Ss(t, "unsubscribe", w0), ze(i, null);
}
function y0(i) {
  this.subs.add(i) && this.subs.count === 1 && this.owner.subscribe(this);
}
function w0(i) {
  this.subs.remove(i) && this.subs.count === 0 && this.owner.subscribe(this);
}
const mr = /* @__PURE__ */ (() => {
  const i = Symbol.for("__au_arr_obs__"), t = Array[i] ?? ls(Array, i, /* @__PURE__ */ new WeakMap());
  function e(p, m) {
    return p === m ? 0 : (p = p === null ? "null" : p.toString(), m = m === null ? "null" : m.toString(), p < m ? -1 : 1);
  }
  function s(p, m) {
    return p === void 0 ? m === void 0 ? 0 : 1 : m === void 0 ? -1 : 0;
  }
  function n(p, m, b, _, w) {
    let x, v, y, k, T, M, O;
    for (M = b + 1; M < _; M++) {
      for (x = p[M], v = m[M], O = M - 1; O >= b && (y = p[O], k = m[O], T = w(y, x), T > 0); O--)
        p[O + 1] = y, m[O + 1] = k;
      p[O + 1] = x, m[O + 1] = v;
    }
  }
  function r(p, m, b, _, w) {
    let x = 0, v = 0, y, k, T, M, O, $, V, z, H, N, I, W, it, L, J, A, E, S, P;
    for (; ; ) {
      if (_ - b <= 10) {
        n(p, m, b, _, w);
        return;
      }
      x = b + (_ - b >> 1), y = p[b], M = m[b], k = p[_ - 1], O = m[_ - 1], T = p[x], $ = m[x], V = w(y, k), V > 0 && (N = y, I = M, y = k, M = O, k = N, O = I), z = w(y, T), z >= 0 ? (N = y, I = M, y = T, M = $, T = k, $ = O, k = N, O = I) : (H = w(k, T), H > 0 && (N = k, I = O, k = T, O = $, T = N, $ = I)), p[b] = y, m[b] = M, p[_ - 1] = T, m[_ - 1] = $, W = k, it = O, L = b + 1, J = _ - 1, p[x] = p[L], m[x] = m[L], p[L] = W, m[L] = it;
      t: for (v = L + 1; v < J; v++)
        if (A = p[v], E = m[v], S = w(A, W), S < 0)
          p[v] = p[L], m[v] = m[L], p[L] = A, m[L] = E, L++;
        else if (S > 0) {
          do {
            if (J--, J == v)
              break t;
            P = p[J], S = w(P, W);
          } while (S > 0);
          p[v] = p[J], m[v] = m[J], p[J] = A, m[J] = E, S < 0 && (A = p[v], E = m[v], p[v] = p[L], m[v] = m[L], p[L] = A, m[L] = E, L++);
        }
      _ - J < L - b ? (r(p, m, J, _, w), _ = L) : (r(p, m, b, L, w), b = J);
    }
  }
  const o = Array.prototype, a = ["push", "unshift", "pop", "shift", "splice", "reverse", "sort"];
  let l;
  function c() {
    const p = o.push, m = o.unshift, b = o.pop, _ = o.shift, w = o.splice, x = o.reverse, v = o.sort;
    l = {
      // https://tc39.github.io/ecma262/#sec-array.prototype.push
      push: function(...y) {
        const k = t.get(this);
        if (k === void 0)
          return p.apply(this, y);
        const T = this.length, M = y.length;
        if (M === 0)
          return T;
        this.length = k.indexMap.length = T + M;
        let O = T;
        for (; O < this.length; )
          this[O] = y[O - T], k.indexMap[O] = -2, O++;
        return k.notify(), this.length;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.unshift
      unshift: function(...y) {
        const k = t.get(this);
        if (k === void 0)
          return m.apply(this, y);
        const T = y.length, M = new Array(T);
        let O = 0;
        for (; O < T; )
          M[O++] = -2;
        m.apply(k.indexMap, M);
        const $ = m.apply(this, y);
        return k.notify(), $;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.pop
      pop: function() {
        const y = t.get(this);
        if (y === void 0)
          return b.call(this);
        const k = y.indexMap, T = b.call(this), M = k.length - 1;
        return k[M] > -1 && (k.deletedIndices.push(k[M]), k.deletedItems.push(T)), b.call(k), y.notify(), T;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.shift
      shift: function() {
        const y = t.get(this);
        if (y === void 0)
          return _.call(this);
        const k = y.indexMap, T = _.call(this);
        return k[0] > -1 && (k.deletedIndices.push(k[0]), k.deletedItems.push(T)), _.call(k), y.notify(), T;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.splice
      splice: function(...y) {
        const k = y[0], T = y[1], M = t.get(this);
        if (M === void 0)
          return w.apply(this, y);
        const O = this.length, $ = k | 0, V = $ < 0 ? Math.max(O + $, 0) : Math.min($, O), z = M.indexMap, H = y.length, N = H === 0 ? 0 : H === 1 ? O - V : T;
        let I = V;
        if (N > 0) {
          const it = I + N;
          for (; I < it; )
            z[I] > -1 && (z.deletedIndices.push(z[I]), z.deletedItems.push(this[I])), I++;
        }
        if (I = 0, H > 2) {
          const it = H - 2, L = new Array(it);
          for (; I < it; )
            L[I++] = -2;
          w.call(z, k, T, ...L);
        } else
          w.apply(z, y);
        const W = w.apply(this, y);
        return (N > 0 || I > 0) && M.notify(), W;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.reverse
      reverse: function() {
        const y = t.get(this);
        if (y === void 0)
          return x.call(this), this;
        const k = this.length, T = k / 2 | 0;
        let M = 0;
        for (; M !== T; ) {
          const O = k - M - 1, $ = this[M], V = y.indexMap[M], z = this[O], H = y.indexMap[O];
          this[M] = z, y.indexMap[M] = H, this[O] = $, y.indexMap[O] = V, M++;
        }
        return y.notify(), this;
      },
      // https://tc39.github.io/ecma262/#sec-array.prototype.sort
      // https://github.com/v8/v8/blob/master/src/js/array.js
      sort: function(y) {
        const k = t.get(this);
        if (k === void 0)
          return v.call(this, y), this;
        let T = this.length;
        if (T < 2)
          return this;
        r(this, k.indexMap, 0, T, s);
        let M = 0;
        for (; M < T && this[M] !== void 0; )
          M++;
        (y === void 0 || !pt(y)) && (y = e), r(this, k.indexMap, 0, M, y);
        let O = !1;
        for (M = 0, T = k.indexMap.length; T > M; ++M)
          if (k.indexMap[M] !== M) {
            O = !0;
            break;
          }
        return (O || v0) && k.notify(), this;
      }
    };
    for (const y of a)
      Zs(l[y], "observing", { value: !0, writable: !1, configurable: !1, enumerable: !1 });
  }
  let h = !1;
  const u = "__au_arr_on__";
  function d() {
    if (l === void 0 && c(), !(d0(u, Array) ?? !1)) {
      f0(!0, Array, u);
      for (const p of a)
        o[p].observing !== !0 && ls(o, p, l[p]);
    }
  }
  class f {
    constructor(m) {
      this.type = li, h || (h = !0, d()), this.indexObservers = {}, this.collection = m, this.indexMap = Wi(m.length), this.lenObs = void 0, t.set(m, this);
    }
    notify() {
      const m = this.subs;
      m.notifyDirty();
      const b = this.indexMap, _ = this.collection, w = _.length;
      this.indexMap = Wi(w), m.notifyCollection(_, b);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new Yp(this));
    }
    getIndexObserver(m) {
      var b;
      return (b = this.indexObservers)[m] ?? (b[m] = new g(this, m));
    }
  }
  ze(f, null);
  class g {
    constructor(m, b) {
      this.owner = m, this.index = b, this.doNotCache = !0, this.value = this.getValue();
    }
    getValue() {
      return this.owner.collection[this.index];
    }
    setValue(m) {
      if (m === this.getValue())
        return;
      const b = this.owner, _ = this.index, w = b.indexMap;
      w[_] > -1 && w.deletedIndices.push(w[_]), w[_] = -2, b.collection[_] = m, b.notify();
    }
    handleDirty() {
      this.value !== this.getValue() && this.subs.notifyDirty();
    }
    /**
     * From interface `ICollectionSubscriber`
     */
    handleCollectionChange(m, b) {
      const _ = this.index;
      if (b[_] === _)
        return;
      const x = this.value, v = this.value = this.getValue();
      x !== v && this.subs.notify(v, x);
    }
    subscribe(m) {
      this.subs.add(m) && this.subs.count === 1 && this.owner.subscribe(this);
    }
    unsubscribe(m) {
      this.subs.remove(m) && this.subs.count === 0 && this.owner.unsubscribe(this);
    }
  }
  return ze(g, null), function(m) {
    let b = t.get(m);
    return b === void 0 && (t.set(m, b = new f(m)), d()), b;
  };
})(), Wo = /* @__PURE__ */ (() => {
  const i = Symbol.for("__au_set_obs__"), t = Set[i] ?? ls(Set, i, /* @__PURE__ */ new WeakMap()), { add: e, clear: s, delete: n } = Set.prototype, r = ["add", "clear", "delete"], o = {
    // https://tc39.github.io/ecma262/#sec-set.prototype.add
    add: function(c) {
      const h = t.get(this);
      if (h === void 0)
        return e.call(this, c), this;
      const u = this.size;
      return e.call(this, c), this.size === u ? this : (h.indexMap[u] = -2, h.notify(), this);
    },
    // https://tc39.github.io/ecma262/#sec-set.prototype.clear
    clear: function() {
      const c = t.get(this);
      if (c === void 0)
        return s.call(this);
      if (this.size > 0) {
        const u = c.indexMap;
        let d = 0;
        for (const f of this.keys())
          u[d] > -1 && (u.deletedIndices.push(u[d]), u.deletedItems.push(f)), d++;
        s.call(this), u.length = 0, c.notify();
      }
    },
    // https://tc39.github.io/ecma262/#sec-set.prototype.delete
    delete: function(c) {
      const h = t.get(this);
      if (h === void 0)
        return n.call(this, c);
      if (this.size === 0)
        return !1;
      let d = 0;
      const f = h.indexMap;
      for (const g of this.keys()) {
        if (g === c) {
          f[d] > -1 && (f.deletedIndices.push(f[d]), f.deletedItems.push(g)), f.splice(d, 1);
          const p = n.call(this, c);
          return p === !0 && h.notify(), p;
        }
        d++;
      }
      return !1;
    }
  };
  function a(c) {
    for (const h of r)
      ls(c, h, o[h]);
  }
  class l {
    constructor(h) {
      this.type = li, this.collection = h, this.indexMap = Wi(h.size), this.lenObs = void 0;
    }
    notify() {
      const h = this.subs;
      h.notifyDirty();
      const u = this.indexMap, d = this.collection, f = d.size;
      this.indexMap = Wi(f), h.notifyCollection(d, u);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new Nc(this));
    }
  }
  return ze(l, null), function(h) {
    let u = t.get(h);
    return u === void 0 && (t.set(h, u = new l(h)), a(h)), u;
  };
})(), Uo = /* @__PURE__ */ (() => {
  const i = Symbol.for("__au_map_obs__"), t = Map[i] ?? ls(Map, i, /* @__PURE__ */ new WeakMap()), { set: e, clear: s, delete: n } = Map.prototype, r = ["set", "clear", "delete"], o = {
    // https://tc39.github.io/ecma262/#sec-map.prototype.map
    set: function(c, h) {
      const u = t.get(this);
      if (u === void 0)
        return e.call(this, c, h), this;
      const d = this.get(c), f = this.size;
      if (e.call(this, c, h), this.size === f) {
        let p = 0;
        for (const m of this.entries()) {
          if (m[0] === c)
            return m[1] !== d && (u.indexMap.deletedIndices.push(u.indexMap[p]), u.indexMap.deletedItems.push(m), u.indexMap[p] = -2, u.notify()), this;
          p++;
        }
        return this;
      }
      return u.indexMap[f] = -2, u.notify(), this;
    },
    // https://tc39.github.io/ecma262/#sec-map.prototype.clear
    clear: function() {
      const c = t.get(this);
      if (c === void 0)
        return s.call(this);
      if (this.size > 0) {
        const u = c.indexMap;
        let d = 0;
        for (const f of this.keys())
          u[d] > -1 && (u.deletedIndices.push(u[d]), u.deletedItems.push(f)), d++;
        s.call(this), u.length = 0, c.notify();
      }
    },
    // https://tc39.github.io/ecma262/#sec-map.prototype.delete
    delete: function(c) {
      const h = t.get(this);
      if (h === void 0)
        return n.call(this, c);
      if (this.size === 0)
        return !1;
      let d = 0;
      const f = h.indexMap;
      for (const g of this.keys()) {
        if (g === c) {
          f[d] > -1 && (f.deletedIndices.push(f[d]), f.deletedItems.push(g)), f.splice(d, 1);
          const p = n.call(this, c);
          return p === !0 && h.notify(), p;
        }
        ++d;
      }
      return !1;
    }
  };
  function a(c) {
    for (const h of r)
      ls(c, h, o[h]);
  }
  class l {
    constructor(h) {
      this.type = li, this.collection = h, this.indexMap = Wi(h.size), this.lenObs = void 0;
    }
    notify() {
      const h = this.subs;
      h.notifyDirty();
      const u = this.indexMap, d = this.collection, f = d.size;
      this.indexMap = Wi(f), h.notifyCollection(d, u);
    }
    getLengthObserver() {
      return this.lenObs ?? (this.lenObs = new Nc(this));
    }
  }
  return ze(l, null), function(h) {
    let u = t.get(h);
    return u === void 0 && (t.set(h, u = new l(h)), a(h)), u;
  };
})(), wu = /* @__PURE__ */ (() => {
  class i {
    constructor(h) {
      this.version = 0, this.count = 0, this.o = /* @__PURE__ */ new Map(), this.b = h;
    }
    /**
     * Add, and subscribe to a given observer
     */
    add(h) {
      this.o.has(h) || (h.subscribe(this.b), ++this.count), this.o.set(h, this.version);
    }
    /**
     * Unsubscribe the observers that are not up to date with the record version
     */
    clear() {
      this.o.forEach(e, this), this.count = this.o.size;
    }
    clearAll() {
      this.o.forEach(t, this), this.o.clear(), this.count = 0;
    }
  }
  function t(c, h) {
    h.unsubscribe(this.b);
  }
  function e(c, h) {
    this.version !== c && (h.unsubscribe(this.b), this.o.delete(h));
  }
  function s() {
    return ls(this, "obs", new i(this));
  }
  function n(c, h) {
    this.obs.add(this.oL.getObserver(c, h));
  }
  function r(c) {
    let h;
    if (Bt(c))
      h = mr(c);
    else if ($n(c))
      h = Wo(c);
    else if (Qs(c))
      h = Uo(c);
    else
      throw G(210, c);
    this.obs.add(h);
  }
  function o(c) {
    this.obs.add(c);
  }
  function a() {
    throw G(99, "handleChange");
  }
  function l() {
    throw G(99, "handleCollectionChange");
  }
  return function(h, u) {
    const d = h.prototype;
    return Ss(d, "observe", n), Ss(d, "observeCollection", r), Ss(d, "subscribeTo", o), Zs(d, "obs", { get: s }), Ss(d, "handleChange", a), Ss(d, "handleCollectionChange", l), h;
  };
})();
function We(i, t) {
  return i == null ? wu : wu(i, t);
}
let rt = null;
const mn = [];
let Rs = !1;
function x0() {
  Rs = !1;
}
function k0() {
  Rs = !0;
}
function jc() {
  return rt;
}
function zc(i) {
  if (i == null)
    throw G(
      206
      /* ErrorNames.switch_on_null_connectable */
    );
  if (rt == null) {
    rt = i, mn[0] = rt, Rs = !0;
    return;
  }
  if (rt === i)
    throw G(
      207
      /* ErrorNames.switch_active_connectable */
    );
  mn.push(i), rt = i, Rs = !0;
}
function Hc(i) {
  if (i == null)
    throw G(
      208
      /* ErrorNames.switch_off_null_connectable */
    );
  if (rt !== i)
    throw G(
      209
      /* ErrorNames.switch_off_inactive_connectable */
    );
  mn.pop(), rt = mn.length > 0 ? mn[mn.length - 1] : null, Rs = rt != null;
}
const C0 = /* @__PURE__ */ Fc({
  get current() {
    return rt;
  },
  get connecting() {
    return Rs;
  },
  enter: zc,
  exit: Hc,
  pause: x0,
  resume: k0
}), In = Reflect.get, S0 = Object.prototype.toString, Yl = /* @__PURE__ */ new WeakMap(), A0 = "__au_nw__", M0 = "__au_nw";
function Xp(i) {
  switch (S0.call(i)) {
    case "[object Object]":
      return i.constructor[A0] !== !0;
    case "[object Array]":
    case "[object Map]":
    case "[object Set]":
      return !0;
    default:
      return !1;
  }
}
const jn = "__raw__";
function nt(i) {
  return Xp(i) ? pa(i) : i;
}
function pa(i) {
  return Yl.get(i) ?? T0(i);
}
function ut(i) {
  return i[jn] ?? i;
}
function he(i) {
  return Xp(i) && i[jn] || i;
}
function Wc(i, t) {
  return t === "constructor" || t === "__proto__" || t === "$observers" || t === Symbol.toPrimitive || t === Symbol.toStringTag || i.constructor[`${M0}_${Pn(t)}__`] === !0;
}
function T0(i) {
  const t = Bt(i) ? I0 : Qs(i) || $n(i) ? J0 : P0, e = new Proxy(i, t);
  return Yl.set(i, e), Yl.set(e, e), e;
}
const P0 = {
  get(i, t, e) {
    if (t === jn)
      return i;
    const s = jc();
    return !Rs || Wc(i, t) || s == null ? In(i, t, e) : (s.observe(i, t), nt(In(i, t, e)));
  }
}, I0 = {
  get(i, t, e) {
    if (t === jn)
      return i;
    if (!Rs || Wc(i, t) || rt == null)
      return In(i, t, e);
    switch (t) {
      case "length":
        return rt.observe(i, "length"), i.length;
      case "map":
        return E0;
      case "includes":
        return D0;
      case "indexOf":
        return $0;
      case "lastIndexOf":
        return L0;
      case "every":
        return O0;
      case "filter":
        return R0;
      case "find":
        return F0;
      case "findIndex":
        return B0;
      case "flat":
        return V0;
      case "flatMap":
        return N0;
      case "join":
        return j0;
      case "push":
        return H0;
      case "pop":
        return z0;
      case "reduce":
        return G0;
      case "reduceRight":
        return Z0;
      case "reverse":
        return K0;
      case "shift":
        return W0;
      case "unshift":
        return U0;
      case "slice":
        return X0;
      case "splice":
        return q0;
      case "some":
        return Y0;
      case "sort":
        return Q0;
      case "keys":
        return Gp;
      case "values":
      case Symbol.iterator:
        return Ql;
      case "entries":
        return Xl;
    }
    return rt.observe(i, t), nt(In(i, t, e));
  },
  // for (let i in array) ...
  ownKeys(i) {
    var t;
    return (t = jc()) == null || t.observe(i, "length"), Reflect.ownKeys(i);
  }
};
function E0(i, t) {
  const e = ut(this), s = e.map((n, r) => (
    // do we wrap `thisArg`?
    he(i.call(t, nt(n), r, this))
  ));
  return Pt(rt, e), nt(s);
}
function O0(i, t) {
  const e = ut(this), s = e.every((n, r) => i.call(t, nt(n), r, this));
  return Pt(rt, e), s;
}
function R0(i, t) {
  const e = ut(this), s = e.filter((n, r) => (
    // do we wrap `thisArg`?
    he(i.call(t, nt(n), r, this))
  ));
  return Pt(rt, e), nt(s);
}
function D0(i) {
  const t = ut(this), e = t.includes(he(i));
  return Pt(rt, t), e;
}
function $0(i) {
  const t = ut(this), e = t.indexOf(he(i));
  return Pt(rt, t), e;
}
function L0(i) {
  const t = ut(this), e = t.lastIndexOf(he(i));
  return Pt(rt, t), e;
}
function B0(i, t) {
  const e = ut(this), s = e.findIndex((n, r) => he(i.call(t, nt(n), r, this)));
  return Pt(rt, e), s;
}
function F0(i, t) {
  const e = ut(this), s = e.find((n, r) => i(nt(n), r, this), t);
  return Pt(rt, e), nt(s);
}
function V0() {
  const i = ut(this);
  return Pt(rt, i), nt(i.flat());
}
function N0(i, t) {
  const e = ut(this);
  return Pt(rt, e), pa(e.flatMap((s, n) => nt(i.call(t, nt(s), n, this))));
}
function j0(i) {
  const t = ut(this);
  return Pt(rt, t), t.join(i);
}
function z0() {
  return nt(ut(this).pop());
}
function H0(...i) {
  return ut(this).push(...i);
}
function W0() {
  return nt(ut(this).shift());
}
function U0(...i) {
  return ut(this).unshift(...i);
}
function q0(...i) {
  return nt(ut(this).splice(...i));
}
function K0(...i) {
  const t = ut(this), e = t.reverse();
  return Pt(rt, t), nt(e);
}
function Y0(i, t) {
  const e = ut(this), s = e.some((n, r) => he(i.call(t, nt(n), r, this)));
  return Pt(rt, e), s;
}
function Q0(i) {
  const t = ut(this), e = t.sort(i);
  return Pt(rt, t), nt(e);
}
function X0(i, t) {
  const e = ut(this);
  return Pt(rt, e), pa(e.slice(i, t));
}
function G0(i, t) {
  const e = ut(this), s = e.reduce((n, r, o) => i(n, nt(r), o, this), t);
  return Pt(rt, e), nt(s);
}
function Z0(i, t) {
  const e = ut(this), s = e.reduceRight((n, r, o) => i(n, nt(r), o, this), t);
  return Pt(rt, e), nt(s);
}
const J0 = {
  get(i, t, e) {
    if (t === jn)
      return i;
    const s = jc();
    if (!Rs || Wc(i, t) || s == null)
      return In(i, t, e);
    switch (t) {
      case "size":
        return s.observe(i, "size"), i.size;
      case "clear":
        return ry;
      case "delete":
        return oy;
      case "forEach":
        return ty;
      case "add":
        if ($n(i))
          return ny;
        break;
      case "get":
        if (Qs(i))
          return sy;
        break;
      case "set":
        if (Qs(i))
          return iy;
        break;
      case "has":
        return ey;
      case "keys":
        return Gp;
      case "values":
        return Ql;
      case "entries":
        return Xl;
      case Symbol.iterator:
        return Qs(i) ? Xl : Ql;
    }
    return nt(In(i, t, e));
  }
};
function ty(i, t) {
  const e = ut(this);
  return Pt(rt, e), e.forEach((s, n) => {
    i.call(
      /* should wrap or not?? */
      t,
      nt(s),
      nt(n),
      this
    );
  });
}
function ey(i) {
  const t = ut(this);
  return Pt(rt, t), t.has(he(i));
}
function sy(i) {
  const t = ut(this);
  return Pt(rt, t), nt(t.get(he(i)));
}
function iy(i, t) {
  return nt(ut(this).set(he(i), he(t)));
}
function ny(i) {
  return nt(ut(this).add(he(i)));
}
function ry() {
  return nt(ut(this).clear());
}
function oy(i) {
  return nt(ut(this).delete(he(i)));
}
function Gp() {
  const i = ut(this);
  Pt(rt, i);
  const t = i.keys();
  return {
    next() {
      const e = t.next(), s = e.value, n = e.done;
      return n ? { value: void 0, done: n } : { value: nt(s), done: n };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function Ql() {
  const i = ut(this);
  Pt(rt, i);
  const t = i.values();
  return {
    next() {
      const e = t.next(), s = e.value, n = e.done;
      return n ? { value: void 0, done: n } : { value: nt(s), done: n };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function Xl() {
  const i = ut(this);
  Pt(rt, i);
  const t = i.entries();
  return {
    next() {
      const e = t.next(), s = e.value, n = e.done;
      return n ? { value: void 0, done: n } : { value: [nt(s[0]), nt(s[1])], done: n };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
const Pt = (i, t) => i == null ? void 0 : i.observeCollection(t), ay = /* @__PURE__ */ Fc({
  getProxy: pa,
  getRaw: ut,
  wrap: nt,
  unwrap: he,
  rawKey: jn
});
class qo {
  constructor(t, e, s, n, r) {
    this.type = li, this._value = void 0, this._isRunning = !1, this._isDirty = !1, this._callback = void 0, this._coercer = void 0, this._coercionConfig = void 0, this._obj = t, this._wrapped = r ? nt(t) : t, this.$get = e, this.$set = s, this.oL = n;
  }
  init(t) {
    this._value = t, this._isDirty = !1;
  }
  getValue() {
    return this.subs.count === 0 ? this.$get.call(this._obj, this._obj, this) : (this._isDirty && (this.compute(), this._isDirty = !1), this._value);
  }
  // deepscan-disable-next-line
  setValue(t) {
    if (pt(this.$set))
      this._coercer !== void 0 && (t = this._coercer.call(null, t, this._coercionConfig)), Os(t, this._value) || (this._isRunning = !0, this.$set.call(this._obj, t), this._isRunning = !1, this.run());
    else
      throw G(
        221
        /* ErrorNames.assign_readonly_readonly_property_from_computed */
      );
  }
  useCoercer(t, e) {
    return this._coercer = t, this._coercionConfig = e, !0;
  }
  useCallback(t) {
    return this._callback = t, !0;
  }
  handleDirty() {
    this._isDirty || (this._isDirty = !0, this.subs.notifyDirty());
  }
  handleChange() {
    this._isDirty = !0, this.subs.count > 0 && this.run();
  }
  handleCollectionChange() {
    this._isDirty = !0, this.subs.count > 0 && this.run();
  }
  subscribe(t) {
    this.subs.add(t) && this.subs.count === 1 && (this.compute(), this._isDirty = !1);
  }
  unsubscribe(t) {
    this.subs.remove(t) && this.subs.count === 0 && (this._isDirty = !0, this.obs.clearAll());
  }
  run() {
    var s;
    if (this._isRunning)
      return;
    const t = this._value, e = this.compute();
    this._isDirty = !1, Os(e, t) || ((s = this._callback) == null || s.call(this, e, t), this.subs.notify(this._value, t));
  }
  compute() {
    this._isRunning = !0, this.obs.version++;
    try {
      return zc(this), this._value = he(this.$get.call(this._wrapped, this._wrapped, this));
    } finally {
      this.obs.clear(), this._isRunning = !1, Hc(this);
    }
  }
}
We(qo, null), ze(qo, null);
const Uc = /* @__PURE__ */ da(
  "IDirtyChecker",
  (i) => i.callback(() => {
    throw G(
      217
      /* ErrorNames.dirty_check_no_handler */
    );
  })
), ly = {
  /**
   * Default: `6`
   *
   * Adjust the global dirty check frequency.
   * Measures in "timeouts per check", such that (given a default of 250 timeouts per second in modern browsers):
   * - A value of 1 will result in 250 dirty checks per second (or 1 dirty check per second for an inactive tab)
   * - A value of 25 will result in 10 dirty checks per second (or 1 dirty check per 25 seconds for an inactive tab)
   */
  timeoutsPerCheck: 25,
  /**
   * Default: `false`
   *
   * Disable dirty-checking entirely. Properties that cannot be observed without dirty checking
   * or an adapter, will simply not be observed.
   */
  disabled: !1,
  /**
   * Default: `false`
   *
   * Throw an error if a property is being dirty-checked.
   */
  throw: !1,
  /**
   * Resets all dirty checking settings to the framework's defaults.
   */
  resetToDefault() {
    this.timeoutsPerCheck = 6, this.disabled = !1, this.throw = !1;
  }
};
class cy {
  static register(t) {
    t.register(Ni.singleton(this, this), Ni.aliasTo(this, Uc));
  }
  constructor() {
    this.tracked = [], this._task = null, this._elapsedFrames = 0, this.p = D(Bn), this.check = () => {
      if (++this._elapsedFrames < ly.timeoutsPerCheck)
        return;
      this._elapsedFrames = 0;
      const t = this.tracked, e = t.length;
      let s, n = 0;
      for (; n < e; ++n)
        s = t[n], s.isDirty() && s.flush();
    }, ze(xu, null);
  }
  createProperty(t, e) {
    return new xu(this, t, e);
  }
  addProperty(t) {
    this.tracked.push(t), this.tracked.length === 1 && (this._task = this.p.taskQueue.queueTask(this.check, { persistent: !0 }));
  }
  removeProperty(t) {
    this.tracked.splice(this.tracked.indexOf(t), 1), this.tracked.length === 0 && (this._task.cancel(), this._task = null);
  }
}
class xu {
  constructor(t, e, s) {
    this.obj = e, this.key = s, this.type = fa, this._oldValue = void 0, this._dirtyChecker = t;
  }
  getValue() {
    return this.obj[this.key];
  }
  setValue(t) {
    throw G(219, this.key);
  }
  isDirty() {
    return this._oldValue !== this.obj[this.key];
  }
  flush() {
    const t = this._oldValue, e = this.getValue();
    this._oldValue = e, this.subs.notify(e, t);
  }
  subscribe(t) {
    this.subs.add(t) && this.subs.count === 1 && (this._oldValue = this.obj[this.key], this._dirtyChecker.addProperty(this));
  }
  unsubscribe(t) {
    this.subs.remove(t) && this.subs.count === 0 && this._dirtyChecker.removeProperty(this);
  }
}
class hy {
  get doNotCache() {
    return !0;
  }
  constructor(t, e) {
    this.type = fa, this._obj = t, this._key = e;
  }
  getValue() {
    return this._obj[this._key];
  }
  setValue() {
  }
  subscribe() {
  }
  unsubscribe() {
  }
}
class Zp {
  constructor() {
    this.type = fa;
  }
  getValue(t, e) {
    return t[e];
  }
  setValue(t, e, s) {
    e[s] = t;
  }
}
class qc {
  constructor(t, e) {
    this.type = li, this._value = void 0, this._observing = !1, this._callback = void 0, this._coercer = void 0, this._coercionConfig = void 0, this._obj = t, this._key = e;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    var e, s;
    if (this._coercer !== void 0 && (t = this._coercer.call(void 0, t, this._coercionConfig)), this._observing) {
      if (Os(t, this._value))
        return;
      no = this._value, this._value = t, this.subs.notifyDirty(), this.subs.notify(t, no), Os(t, this._value) && ((e = this._callback) == null || e.call(this, t, no));
    } else
      this._value = this._obj[this._key] = t, (s = this._callback) == null || s.call(this, t, no);
  }
  useCallback(t) {
    return this._callback = t, this.start(), !0;
  }
  useCoercer(t, e) {
    return this._coercer = t, this._coercionConfig = e, this.start(), !0;
  }
  subscribe(t) {
    this._observing === !1 && this.start(), this.subs.add(t);
  }
  start() {
    return this._observing === !1 && (this._observing = !0, this._value = this._obj[this._key], Zs(this._obj, this._key, {
      enumerable: !0,
      configurable: !0,
      get: qp(() => this.getValue(), { getObserver: () => this }),
      set: (t) => {
        this.setValue(t);
      }
    })), this;
  }
  stop() {
    return this._observing && (Zs(this._obj, this._key, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: this._value
    }), this._observing = !1), this;
  }
}
ze(qc, null);
let no;
const Gl = new Zp(), zn = /* @__PURE__ */ da("IObserverLocator", (i) => i.singleton(fy)), Kc = /* @__PURE__ */ da("INodeObserverLocator", (i) => i.cachedCallback((t) => (t.getAll(ji).forEach((e) => {
  e.error("Using default INodeObserverLocator implementation. Will not be able to observe nodes (HTML etc...).");
}), new uy())));
class uy {
  handles() {
    return !1;
  }
  getObserver() {
    return Gl;
  }
  getAccessor() {
    return Gl;
  }
}
const dy = /* @__PURE__ */ da("IComputedObserverLocator", (i) => i.singleton(class {
  getObserver(e, s, n, r) {
    const o = new qo(e, n.get, n.set, r, !0);
    return Zs(e, s, {
      enumerable: n.enumerable,
      configurable: !0,
      get: qp(() => o.getValue(), { getObserver: () => o }),
      set: (a) => {
        o.setValue(a);
      }
    }), o;
  }
}));
class fy {
  constructor() {
    this._adapters = [], this._dirtyChecker = D(Uc), this._nodeObserverLocator = D(Kc), this._computedObserverLocator = D(dy);
  }
  addAdapter(t) {
    this._adapters.push(t);
  }
  getObserver(t, e) {
    if (t == null)
      throw G(199, e);
    if (!Af(t))
      return new hy(t, pt(e) ? "" : e);
    if (pt(e))
      return new qo(t, e, void 0, this, !0);
    const s = Jp(t);
    let n = s[e];
    return n === void 0 && (n = this.createObserver(t, e), n.doNotCache || (s[e] = n)), n;
  }
  getAccessor(t, e) {
    var n;
    const s = (n = t.$observers) == null ? void 0 : n[e];
    return s !== void 0 ? s : this._nodeObserverLocator.handles(t, e, this) ? this._nodeObserverLocator.getAccessor(t, e, this) : Gl;
  }
  getArrayObserver(t) {
    return mr(t);
  }
  getMapObserver(t) {
    return Uo(t);
  }
  getSetObserver(t) {
    return Wo(t);
  }
  createObserver(t, e) {
    var n, r;
    if (this._nodeObserverLocator.handles(t, e, this))
      return this._nodeObserverLocator.getObserver(t, e, this);
    switch (e) {
      case "length":
        if (Bt(t))
          return mr(t).getLengthObserver();
        break;
      case "size":
        if (Qs(t))
          return Uo(t).getLengthObserver();
        if ($n(t))
          return Wo(t).getLengthObserver();
        break;
      default:
        if (Bt(t) && Tr(e))
          return mr(t).getIndexObserver(Number(e));
        break;
    }
    let s = Cu(t, e);
    if (s === void 0) {
      let o = ku(t);
      for (; o !== null && (s = Cu(o, e), s === void 0); )
        o = ku(o);
    }
    if (s !== void 0 && !u0.call(s, "value")) {
      let o = this._getAdapterObserver(t, e, s);
      return o == null && (o = (r = (n = s.get) == null ? void 0 : n.getObserver) == null ? void 0 : r.call(n, t)), o ?? (s.configurable ? this._computedObserverLocator.getObserver(t, e, s, this) : this._dirtyChecker.createProperty(t, e));
    }
    return new qc(t, e);
  }
  // /** @internal */
  // private _createComputedObserver(obj: object, key: PropertyKey, pd: PropertyDescriptor, useProxy?: boolean) {
  //   const observer = new ComputedObserver(obj, pd.get!, pd.set, this, !!useProxy);
  //   def(obj, key, {
  //     enumerable: pd.enumerable,
  //     configurable: true,
  //     get: objectAssign(((/* Computed Observer */) => observer.getValue()) as ObservableGetter, { getObserver: () => observer }),
  //     set: (/* Computed Observer */v) => {
  //       observer.setValue(v);
  //     },
  //   });
  //   return observer;
  // }
  /** @internal */
  _getAdapterObserver(t, e, s) {
    if (this._adapters.length > 0)
      for (const n of this._adapters) {
        const r = n.getObserver(t, e, s, this);
        if (r != null)
          return r;
      }
    return null;
  }
}
const Yc = (i) => {
  let t;
  return Bt(i) ? t = mr(i) : Qs(i) ? t = Uo(i) : $n(i) && (t = Wo(i)), t;
}, ku = Object.getPrototypeOf, Cu = Object.getOwnPropertyDescriptor, Jp = (i) => {
  let t = i.$observers;
  return t === void 0 && Zs(i, "$observers", {
    enumerable: !1,
    value: t = mt()
  }), t;
};
class py {
  constructor(t, e) {
    this.oL = t, this.fn = e, this.maxRunCount = 10, this.queued = !1, this.running = !1, this.runCount = 0, this.stopped = !1, this._cleanupTask = void 0, this.run = () => {
      var s;
      if (this.stopped)
        throw G(
          225
          /* ErrorNames.stopping_a_stopped_effect */
        );
      if (!this.running) {
        ++this.runCount, this.running = !0, this.queued = !1, ++this.obs.version;
        try {
          (s = this._cleanupTask) == null || s.call(void 0), zc(this), this._cleanupTask = this.fn(this);
        } finally {
          this.obs.clear(), this.running = !1, Hc(this);
        }
        if (this.queued) {
          if (this.runCount > this.maxRunCount)
            throw this.runCount = 0, G(
              226
              /* ErrorNames.effect_maximum_recursion_reached */
            );
          this.run();
        } else
          this.runCount = 0;
      }
    }, this.stop = () => {
      var s;
      (s = this._cleanupTask) == null || s.call(void 0), this._cleanupTask = void 0, this.stopped = !0, this.obs.clearAll();
    };
  }
  handleChange() {
    this.queued = !0, this.run();
  }
  handleCollectionChange() {
    this.queued = !0, this.run();
  }
}
We(py, null);
class Su {
  constructor(t, e, s, n) {
    this.oL = e, this._value = void 0, this.boundFn = !1, this._scope = t, this.ast = s, this._callback = n;
  }
  handleChange() {
    this.run();
  }
  handleCollectionChange() {
    this.run();
  }
  run() {
    this.obs.version++;
    const t = this._value, e = Tt(this.ast, this._scope, this, this);
    this.obs.clear(), Os(e, t) || (this._value = e, this._callback.call(void 0, e, t));
  }
  stop() {
    this.obs.clearAll(), this._value = void 0;
  }
}
We(Su, null), m0(Su);
const Yn = "pending", Oo = "running", el = "completed", ro = "canceled", sl = /* @__PURE__ */ new Map(), Au = (i) => () => {
  throw Ui(`AUR1005: The PLATFORM did not receive a valid reference to the global function '${i}'.`);
};
class Qc {
  constructor(t, e = {}) {
    var s, n;
    this.macroTaskRequested = !1, this.macroTaskHandle = -1, this.globalThis = t, "decodeURI decodeURIComponent encodeURI encodeURIComponent Date Reflect console".split(" ").forEach((r) => {
      this[r] = r in e ? e[r] : t[r];
    }), "clearInterval clearTimeout queueMicrotask setInterval setTimeout".split(" ").forEach((r) => {
      var o;
      this[r] = r in e ? e[r] : ((o = t[r]) == null ? void 0 : o.bind(t)) ?? Au(r);
    }), this.performanceNow = "performanceNow" in e ? e.performanceNow : ((n = (s = t.performance) == null ? void 0 : s.now) == null ? void 0 : n.bind(t.performance)) ?? Au("performance.now"), this.flushMacroTask = this.flushMacroTask.bind(this), this.taskQueue = new Xc(this, this.requestMacroTask.bind(this), this.cancelMacroTask.bind(this));
  }
  static getOrCreate(t, e = {}) {
    let s = sl.get(t);
    return s === void 0 && sl.set(t, s = new Qc(t, e)), s;
  }
  static set(t, e) {
    sl.set(t, e);
  }
  requestMacroTask() {
    this.macroTaskRequested = !0, this.macroTaskHandle === -1 && (this.macroTaskHandle = this.setTimeout(this.flushMacroTask, 0));
  }
  cancelMacroTask() {
    this.macroTaskRequested = !1, this.macroTaskHandle > -1 && (this.clearTimeout(this.macroTaskHandle), this.macroTaskHandle = -1);
  }
  flushMacroTask() {
    this.macroTaskHandle = -1, this.macroTaskRequested === !0 && (this.macroTaskRequested = !1, this.taskQueue.flush());
  }
}
class Xc {
  get isEmpty() {
    return this._pendingAsyncCount === 0 && this._processing.length === 0 && this._pending.length === 0 && this._delayed.length === 0;
  }
  /**
   * Persistent tasks will re-queue themselves indefinitely until they are explicitly canceled,
   * so we consider them 'infinite work' whereas non-persistent (one-off) tasks are 'finite work'.
   *
   * This `hasNoMoreFiniteWork` getters returns true if either all remaining tasks are persistent, or if there are no more tasks.
   *
   * If that is the case, we can resolve the promise that was created when `yield()` is called.
   *
   * @internal
   */
  get _hasNoMoreFiniteWork() {
    return this._pendingAsyncCount === 0 && this._processing.every(il) && this._pending.every(il) && this._delayed.every(il);
  }
  constructor(t, e, s) {
    this.platform = t, this.$request = e, this.$cancel = s, this._suspenderTask = void 0, this._pendingAsyncCount = 0, this._processing = [], this._pending = [], this._delayed = [], this._flushRequested = !1, this._yieldPromise = void 0, this._lastRequest = 0, this._lastFlush = 0, this._requestFlush = () => {
      this._tracer.enabled && this._tracer.enter(this, "requestFlush"), this._flushRequested || (this._flushRequested = !0, this._lastRequest = this._now(), this.$request()), this._tracer.enabled && this._tracer.leave(this, "requestFlush");
    }, this._now = t.performanceNow, this._tracer = new by(t.console);
  }
  flush(t = this._now()) {
    if (this._tracer.enabled && this._tracer.enter(this, "flush"), this._flushRequested = !1, this._lastFlush = t, this._suspenderTask === void 0) {
      let e;
      if (this._pending.length > 0 && (this._processing.push(...this._pending), this._pending.length = 0), this._delayed.length > 0)
        for (let n = 0; n < this._delayed.length; ++n)
          e = this._delayed[n], e.queueTime <= t && (this._processing.push(e), this._delayed.splice(n--, 1));
      let s;
      for (; this._processing.length > 0; )
        if ((s = this._processing.shift()).run(), s.status === Oo)
          if (s.suspend === !0) {
            this._suspenderTask = s, this._requestFlush(), this._tracer.enabled && this._tracer.leave(this, "flush early async");
            return;
          } else
            ++this._pendingAsyncCount;
      if (this._pending.length > 0 && (this._processing.push(...this._pending), this._pending.length = 0), this._delayed.length > 0)
        for (let n = 0; n < this._delayed.length; ++n)
          e = this._delayed[n], e.queueTime <= t && (this._processing.push(e), this._delayed.splice(n--, 1));
      if ((this._processing.length > 0 || this._delayed.length > 0 || this._pendingAsyncCount > 0) && this._requestFlush(), this._yieldPromise !== void 0 && this._hasNoMoreFiniteWork) {
        const n = this._yieldPromise;
        this._yieldPromise = void 0, n.resolve();
      }
    } else
      this._requestFlush();
    this._tracer.enabled && this._tracer.leave(this, "flush full");
  }
  /**
   * Cancel the next flush cycle (and/or the macrotask that schedules the next flush cycle, in case this is a microtask queue), if it was requested.
   *
   * This operation is idempotent and will do nothing if no flush is scheduled.
   */
  cancel() {
    this._tracer.enabled && this._tracer.enter(this, "cancel"), this._flushRequested && (this.$cancel(), this._flushRequested = !1), this._tracer.enabled && this._tracer.leave(this, "cancel");
  }
  /**
   * Returns a promise that, when awaited, resolves when:
   * - all *non*-persistent (including async) tasks have finished;
   * - the last-added persistent task has run exactly once;
   *
   * This operation is idempotent: the same promise will be returned until it resolves.
   *
   * If `yield()` is called multiple times in a row when there are one or more persistent tasks in the queue, each call will await exactly one cycle of those tasks.
   */
  async yield() {
    this._tracer.enabled && this._tracer.enter(this, "yield"), this.isEmpty ? this._tracer.enabled && this._tracer.leave(this, "yield empty") : (this._yieldPromise === void 0 && (this._tracer.enabled && this._tracer.trace(this, "yield - creating promise"), this._yieldPromise = sg()), await this._yieldPromise, this._tracer.enabled && this._tracer.leave(this, "yield task"));
  }
  queueTask(t, e) {
    this._tracer.enabled && this._tracer.enter(this, "queueTask");
    const { delay: s, preempt: n, persistent: r, suspend: o } = { ..._y, ...e };
    if (n) {
      if (s > 0)
        throw yy();
      if (r)
        throw wy();
    }
    this._processing.length === 0 && this._requestFlush();
    const a = this._now(), l = new my(this._tracer, this, a, a + s, n, r, o, t);
    return n ? this._processing[this._processing.length] = l : s === 0 ? this._pending[this._pending.length] = l : this._delayed[this._delayed.length] = l, this._tracer.enabled && this._tracer.leave(this, "queueTask"), l;
  }
  /**
   * Remove the task from this queue.
   */
  remove(t) {
    this._tracer.enabled && this._tracer.enter(this, "remove");
    let e = this._processing.indexOf(t);
    if (e > -1) {
      this._processing.splice(e, 1), this._tracer.enabled && this._tracer.leave(this, "remove processing");
      return;
    }
    if (e = this._pending.indexOf(t), e > -1) {
      this._pending.splice(e, 1), this._tracer.enabled && this._tracer.leave(this, "remove pending");
      return;
    }
    if (e = this._delayed.indexOf(t), e > -1) {
      this._delayed.splice(e, 1), this._tracer.enabled && this._tracer.leave(this, "remove delayed");
      return;
    }
    throw this._tracer.enabled && this._tracer.leave(this, "remove error"), Ui(`Task #${t.id} could not be found`);
  }
  /**
   * Reset the persistent task back to its pending state, preparing it for being invoked again on the next flush.
   *
   * @internal
   */
  _resetPersistentTask(t) {
    this._tracer.enabled && this._tracer.enter(this, "resetPersistentTask"), t.reset(this._now()), t.createdTime === t.queueTime ? this._pending[this._pending.length] = t : this._delayed[this._delayed.length] = t, this._tracer.enabled && this._tracer.leave(this, "resetPersistentTask");
  }
  /**
   * Notify the queue that this async task has had its promise resolved, so that the queue can proceed with consecutive tasks on the next flush.
   *
   * @internal
   */
  _completeAsyncTask(t) {
    var e;
    if (this._tracer.enabled && this._tracer.enter(this, "completeAsyncTask"), t.suspend === !0) {
      if (this._suspenderTask !== t)
        throw this._tracer.enabled && this._tracer.leave(this, "completeAsyncTask error"), Ui(`Async task completion mismatch: suspenderTask=${(e = this._suspenderTask) == null ? void 0 : e.id}, task=${t.id}`);
      this._suspenderTask = void 0;
    } else
      --this._pendingAsyncCount;
    if (this._yieldPromise !== void 0 && this._hasNoMoreFiniteWork) {
      const s = this._yieldPromise;
      this._yieldPromise = void 0, s.resolve();
    }
    this.isEmpty && this.cancel(), this._tracer.enabled && this._tracer.leave(this, "completeAsyncTask");
  }
}
class Zl extends Error {
  constructor(t) {
    super("Task was canceled."), this.task = t;
  }
}
let gy = 0;
class my {
  get result() {
    const t = this._result;
    if (t === void 0)
      switch (this._status) {
        case Yn: {
          const e = this._result = sg();
          return this._resolve = e.resolve, this._reject = e.reject, e;
        }
        case Oo:
          throw Ui("Trying to await task from within task will cause a deadlock.");
        case el:
          return this._result = Promise.resolve();
        case ro:
          return this._result = Promise.reject(new Zl(this));
      }
    return t;
  }
  get status() {
    return this._status;
  }
  constructor(t, e, s, n, r, o, a, l) {
    this.taskQueue = e, this.createdTime = s, this.queueTime = n, this.preempt = r, this.persistent = o, this.suspend = a, this.callback = l, this.id = ++gy, this._resolve = void 0, this._reject = void 0, this._result = void 0, this._status = Yn, this._tracer = t;
  }
  run(t = this.taskQueue.platform.performanceNow()) {
    if (this._tracer.enabled && this._tracer.enter(this, "run"), this._status !== Yn)
      throw this._tracer.enabled && this._tracer.leave(this, "run error"), Ui(`Cannot run task in ${this._status} state`);
    const { persistent: e, taskQueue: s, callback: n, _resolve: r, _reject: o, createdTime: a } = this;
    let l;
    this._status = Oo;
    try {
      l = n(t - a), l instanceof Promise ? l.then((c) => {
        this.persistent ? s._resetPersistentTask(this) : (e ? this._status = ro : this._status = el, this.dispose()), s._completeAsyncTask(this), this._tracer.enabled && this._tracer.leave(this, "run async then"), r !== void 0 && r(c);
      }).catch((c) => {
        if (this.persistent || this.dispose(), s._completeAsyncTask(this), this._tracer.enabled && this._tracer.leave(this, "run async catch"), o !== void 0)
          o(c);
        else
          throw c;
      }) : (this.persistent ? s._resetPersistentTask(this) : (e ? this._status = ro : this._status = el, this.dispose()), this._tracer.enabled && this._tracer.leave(this, "run sync success"), r !== void 0 && r(l));
    } catch (c) {
      if (this.persistent || this.dispose(), this._tracer.enabled && this._tracer.leave(this, "run sync error"), o !== void 0)
        o(c);
      else
        throw c;
    }
  }
  cancel() {
    if (this._tracer.enabled && this._tracer.enter(this, "cancel"), this._status === Yn) {
      const t = this.taskQueue, e = this._reject;
      return t.remove(this), t.isEmpty && t.cancel(), this._status = ro, this.dispose(), e !== void 0 && e(new Zl(this)), this._tracer.enabled && this._tracer.leave(this, "cancel true =pending"), !0;
    } else if (this._status === Oo && this.persistent)
      return this.persistent = !1, this._tracer.enabled && this._tracer.leave(this, "cancel true =running+persistent"), !0;
    return this._tracer.enabled && this._tracer.leave(this, "cancel false"), !1;
  }
  reset(t) {
    this._tracer.enabled && this._tracer.enter(this, "reset");
    const e = this.queueTime - this.createdTime;
    this.createdTime = t, this.queueTime = t + e, this._status = Yn, this._resolve = void 0, this._reject = void 0, this._result = void 0, this._tracer.enabled && this._tracer.leave(this, "reset");
  }
  dispose() {
    this._tracer.enabled && this._tracer.trace(this, "dispose"), this.callback = void 0, this._resolve = void 0, this._reject = void 0, this._result = void 0;
  }
}
class by {
  constructor(t) {
    this.console = t, this.enabled = !1, this.depth = 0;
  }
  enter(t, e) {
    this.log(`${"  ".repeat(this.depth++)}> `, t, e);
  }
  leave(t, e) {
    this.log(`${"  ".repeat(--this.depth)}< `, t, e);
  }
  trace(t, e) {
    this.log(`${"  ".repeat(this.depth)}- `, t, e);
  }
  log(t, e, s) {
    if (e instanceof Xc) {
      const n = e._processing.length, r = e._pending.length, o = e._delayed.length, a = e._flushRequested, l = !!e._suspenderTask, c = `processing=${n} pending=${r} delayed=${o} flushReq=${a} susTask=${l}`;
      this.console.log(`${t}[Q.${s}] ${c}`);
    } else {
      const n = e.id, r = Math.round(e.createdTime * 10) / 10, o = Math.round(e.queueTime * 10) / 10, a = e.preempt, l = e.persistent, c = e.suspend, h = e._status, u = `id=${n} created=${r} queue=${o} preempt=${a} persistent=${l} status=${h} suspend=${c}`;
      this.console.log(`${t}[T.${s}] ${u}`);
    }
  }
}
const _y = {
  delay: 0,
  preempt: !1,
  persistent: !1,
  suspend: !1
};
let tg, eg;
const vy = (i, t) => {
  tg = i, eg = t;
}, sg = () => {
  const i = new Promise(vy);
  return i.resolve = tg, i.reject = eg, i;
}, il = (i) => i.persistent, yy = () => Ui("AUR1006: Invalid arguments: preempt cannot be combined with a greater-than-zero delay"), wy = () => Ui("AUR1007: Invalid arguments: preempt cannot be combined with persistent"), Ui = (i) => new Error(i);
class Ws extends Qc {
  static getOrCreate(t, e = {}) {
    let s = Ws._lookup.get(t);
    return s === void 0 && Ws._lookup.set(t, s = new Ws(t, e)), s;
  }
  static set(t, e) {
    Ws._lookup.set(t, e);
  }
  /**
   * @deprecated Use `platform.domQueue` instead.
   */
  get domWriteQueue() {
    return this.console.log("[DEV:aurelia] platform.domQueue is deprecated, please use platform.domQueue instead."), this.domQueue;
  }
  /**
   * @deprecated Use `platform.domQueue` instead.
   */
  get domReadQueue() {
    return this.console.log("[DEV:aurelia] platform.domReadQueue has been removed, please use platform.domQueue instead."), this.domQueue;
  }
  constructor(t, e = {}) {
    super(t, e);
    const s = (n) => () => {
      throw new Error(`The PLATFORM did not receive a valid reference to the global function '${n}'.`);
    };
    "Node Element HTMLElement CustomEvent CSSStyleSheet ShadowRoot MutationObserver window document customElements".split(" ").forEach((n) => this[n] = n in e ? e[n] : t[n]), "fetch requestAnimationFrame cancelAnimationFrame".split(" ").forEach((n) => {
      var r;
      return (
        // eslint-disable-next-line
        this[n] = n in e ? e[n] : ((r = t[n]) == null ? void 0 : r.bind(t)) ?? s(n)
      );
    }), this.domQueue = (() => {
      let n = !1, r = -1;
      const o = () => {
        n = !0, r === -1 && (r = this.requestAnimationFrame(l));
      }, a = () => {
        n = !1, r > -1 && (this.cancelAnimationFrame(r), r = -1);
      }, l = () => {
        r = -1, n === !0 && (n = !1, c.flush());
      }, c = new Xc(this, o, a);
      return c;
    })();
  }
}
Ws._lookup = /* @__PURE__ */ new WeakMap();
const { default: Gc, oneTime: ga, toView: Ot, fromView: Ds, twoWay: ig } = Ur, oe = $s.get, ma = $s.has, He = $s.define, { annotation: xy } = Of, Ls = xy.keyFor, Kr = Object, qi = String, ng = Kr.prototype, Di = ng.hasOwnProperty, Bs = Kr.freeze, rg = Kr.assign, og = Kr.getOwnPropertyNames, Zc = Kr.keys, Mu = /* @__PURE__ */ mt(), Jl = (i, t, e) => {
  if (Mu[t] === !0)
    return !0;
  if (!at(t))
    return !1;
  const s = t.slice(0, 5);
  return Mu[t] = s === "aria-" || s === "data-" || e.isStandardSvgAttribute(i, t);
}, tc = (i) => {
  throw i;
}, ag = Reflect.defineProperty, we = (i, t, e) => (ag(i, t, {
  enumerable: !1,
  configurable: !0,
  writable: !0,
  value: e
}), e), lg = (i, t, e) => i.addSignalListener(t, e), cg = (i, t, e) => i.removeSignalListener(t, e), ky = "Interpolation", Cy = "IsIterator", Sy = "IsFunction", cs = "IsProperty", Tu = "pending", nl = "running", Jc = Vc.Observer, ci = Vc.Node, ps = Vc.Layout, B = (i, ...t) => new Error(`AUR${qi(i).padStart(4, "0")}: ${My(i, ...t)}`), Ay = {
  99: "Method {{0}} not implemented",
  101: 'Ast eval error: binding behavior "{{0}}" could not be found. Did you forget to register it as a dependency?',
  102: 'Ast eval error: binding behavior "{{0}}" already applied.',
  103: 'Ast eval error: value converter "{{0}}" could not be found. Did you forget to register it as a dependency?',
  105: "Ast eval error: unable to find $host context. Did you forget [au-slot] attribute?",
  106: 'Ast eval error: invalid assignment. "$host" is a reserved keyword.',
  107: "Ast eval error: expression is not a function.",
  109: 'Ast eval error: unknown unary operator: "{{0}}"',
  108: 'Ast eval error: unknown binary operator: "{{0}}"',
  110: "Ast eval error: left-hand side of tagged template expression is not a function.",
  111: 'Ast eval error: expected "{{0}}" to be a function',
  112: "Ast eval error: cannot use non-object value for destructuring assignment.",
  113: "Ast eval error: infinite loop detected. Increment operators should only be used in event handlers.",
  114: 'Ast eval error: cannot access property "{{0}}" of {{1}}.',
  115: 'Ast eval error: cannot access key "{{0}}" of {{1}}.',
  116: 'Ast eval error: cannot assign value to property "{{0}}" of null/undefined.',
  151: "No binding behavior definition found for type {{0:name}}",
  152: "No value converter definition found for type {{0:name}}",
  153: 'Element "{{0}}" has already been registered.',
  154: 'Attribute "{{0}}" has already been registered.',
  155: "Value converter {{0}} has already been registered.",
  156: "Binding behavior {{0}} has already been registered.",
  157: "Binding command {{0}} has already been registered.",
  203: "Trying to retrieve a property or build a scope from a null/undefined scope",
  204: "Trying to create a scope with null/undefined binding context",
  227: "@bindable is not supported for properties that uses a symbol for name. Use a string for the property name instead.",
  228: "@bindable cannot be used as a class decorator when no configuration object is supplied.",
  229: "@bindable cannot be used as a class decorator when no property name is supplied in the configuration object.",
  500: "There is no cached controller for the provided ViewModel: {{0}}",
  501: "Invalid combination: cannot combine the containerless custom element option with Shadow DOM.",
  502: "Trying to activate a disposed controller: {{0}}.",
  503: "Controller at {{0}} is in an unexpected state: {{1}} during activation.",
  504: "Synthetic view at {{0}} is being activated with null/undefined scope.",
  505: "Controller at {{0}} is in an unexpected state: {{1}} during deactivation.",
  506: "Invalid callback for @watch decorator: {{0}}",
  507: "Observer for bindable property {{0}} does not support coercion.",
  508: "Observer for property {{0}} does not support change handler.",
  759: "No attribute definition found for type {{0:name}}",
  760: "No element definition found for type {{0:name}}",
  761: "Cannot create a custom element definition with only a name and no type: {{0}}",
  762: "Trying to retrieve a custom element controller from a node, but the provided node <{{0:nodeName}} /> is not a custom element or containerless host.",
  763: "Trying to retrieve a custom element controller from a node, but the provided node <{{0:nodeName}} /> is not a custom element or containerless host.",
  764: "Trying to retrieve a custom element controller from a node. But the provided node <{{0:nodeName}} /> does not appear to be part of an Aurelia app DOM tree, or it was added to the DOM in a way that Aurelia cannot properly resolve its position in the component tree.",
  765: "Trying to retrieve a custom element controller from a node. But the provided node <{{0:nodeName}} /> does not appear to be part of an Aurelia app DOM tree, or it was added to the DOM in a way that Aurelia cannot properly resolve its position in the component tree.",
  766: "Invalid @processContent hook. Expected the hook to be a function (when defined in a class, it needs to be a static function) but got a {{0:typeof}}.",
  652: "Aurelia is unable to observe property {{0}}. Register observation mapping with .useConfig().",
  653: "Mapping for property {{0}} of <{{1}} /> already exists",
  654: "Array values can only be bound to a multi-select.",
  714: 'Template compilation error: primary already exists on element/attribute "{{0}}"',
  719: "Attribute {{0}} has been already registered for {{1:element}}",
  767: "Aurelia.root was accessed without a valid root.",
  768: "An instance of Aurelia is already registered with the container or an ancestor of it.",
  769: "Failed to initialize the platform object. The host element's ownerDocument does not have a defaultView, did you create the host from a DOMParser and forget to call adoptNode()?",
  770: "Aurelia.start() was called without a composition root",
  771: "The aurelia instance must be fully stopped before it can be disposed",
  750: "view.ref is not supported. If you are migrating from v1, this can be understood as the controller.",
  751: `Attempted to reference "{{0}}", but it was not found amongst the target's API.`,
  752: "Element {{0:.res}} is not registered in {{1:name}}.",
  753: "Attribute {{0:.res}} is not registered in {{1:name}}.",
  754: "Attribute {{0:.res}} is not registered in {{1:name}}.",
  755: "Cannot resolve ViewFactory before the provider was prepared.",
  756: "Cannot resolve ViewFactory without a (valid) name.",
  757: "AUR0757: The compiled template is not aligned with the render instructions. There are {{0}} targets and {{1}} instructions.",
  772: "Invalid @watch decorator config. Expected an expression or a fn but received null/undefined.",
  773: 'Invalid @watch decorator change handler config.Method "{{0}}" not found in class {{1}}',
  774: "Invalid @watch decorator usage: decorated target {{0}} is not a class method.",
  775: 'Invalid command "{{0}}" usage with [repeat]',
  776: 'Invalid [repeat] usage, found extraneous target "{{0}}"',
  777: "Unsupported: [repeat] cannot iterate over {{0:toString}}",
  778: "Unsupported: [repeat] cannot count {{0:toString}}",
  814: "[repeat] encountered an error: number of views != number of items {{0:join(!=)}}",
  779: "Invalid portal insertion position: {{0}}",
  801: '"& self" binding behavior only supports listener binding via trigger/capture command.',
  802: `"& updateTrigger" invalid usage. This binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:'blur'">`,
  803: '"& updateTrigger" invalid usage. This binding behavior can only be applied to two-way/ from-view bindings.',
  805: 'Invalid scope behavior "{{0}}" on <au-compose />. Only "scoped" or "auto" allowed.',
  // originally not supported
  806: `<au-compose /> couldn't find a custom element with name "{{0}}", did you forget to register it locally or globally?`,
  807: "Composition has already been activated/deactivated. Id: {{0:controller}}",
  808: "Composition has already been deactivated.",
  810: "Invalid [else] usage, it should follow an [if]",
  811: "Invalid portal strict target query, empty query.",
  812: "Invalid portal strict target resolution, target not found.",
  813: 'Invalid [pending]/[then]/[catch] usage. The parent [promise].resolve not found; only "*[promise.resolve] > *[pending|then|catch]" relation is supported.',
  815: 'Invalid [case/default-case] usage. The parent [switch] not found; only "*[switch] > *[case|default-case]" relation is supported.',
  816: "Invalid [default-case] usage. Multiple 'default-case's are not allowed.",
  817: '"& signal" binding behavior can only be used with bindings that have a "handleChange" method',
  818: `"& signal" invalid usage. At least one signal name must be passed to the signal behavior, e.g. "expr & signal:'my-signal'"`,
  819: "Spreading to bindables onto non custom element",
  820: "Invalid spread target {{0}}",
  9999: "No scope context for spread binding.",
  9998: "Spread binding does not support spreading custom attributes/template controllers. Did you build the spread instruction manually?",
  9997: "Marker is malformed. This likely happens when a compiled template has been modified. Did you accidentally modified some compiled template? You can modify template before compilation with compiling Template compiler hook.",
  9996: "Invalid usage, a rate limit has already been applied. Did you have both throttle and debounce on the same binding?",
  9995: "The binding already has a target subscriber.",
  9994: `"& attr" can be only used on property binding. It's used on {{0:ctor}}`,
  9993: '"& updateTrigger" binding behavior only works with the default implementation of Aurelia HTML observation. Implement your own node observation + updateTrigger',
  9992: '"& updateTrigger" uses node observer to observe, but it does not know how to use events to observe property <{{0:target@property}} />',
  9991: "Invalid @children usage. @children decorator can only be used on a field",
  9990: "Invalid @slotted usage. @slotted decorator can only be used on a field",
  9989: "Invalid query selector. Only selectors with alpha-numeric characters, or $all are allowed. Got {{0}} instead."
}, My = (i, ...t) => {
  var s;
  let e = Ay[i];
  for (let n = 0; n < t.length; ++n) {
    const r = new RegExp(`{{${n}(:.*)?}}`, "g");
    let o = r.exec(e);
    for (; o != null; ) {
      const a = (s = o[1]) == null ? void 0 : s.slice(1);
      let l = t[n];
      if (l != null)
        switch (a) {
          case "nodeName":
            l = l.nodeName.toLowerCase();
            break;
          case "name":
            l = l.name;
            break;
          case "typeof":
            l = typeof l;
            break;
          case "ctor":
            l = l.constructor.name;
            break;
          case "controller":
            l = l.controller.name;
            break;
          case "target@property":
            l = `${l.target}@${l.targetProperty}`;
            break;
          case "toString":
            l = Object.prototype.toString.call(l);
            break;
          case "join(!=)":
            l = l.join("!=");
            break;
          case "bindingCommandHelp":
            l = Ty(l);
            break;
          case "element":
            l = l === "*" ? "all elements" : `<${l} />`;
            break;
          default:
            a != null && a.startsWith(".") ? l = qi(l[a.slice(1)]) : l = qi(l);
        }
      e = e.slice(0, o.index) + l + e.slice(r.lastIndex), o = r.exec(e);
    }
  }
  return e;
};
function Ty(i) {
  switch (i) {
    case "delegate":
      return `
The ".delegate" binding command has been removed in v2. Binding command ".trigger" should be used instead. If you are migrating v1 application, install compat package to add back the ".delegate" binding command for ease of migration.`;
    case "call":
      return `
The ".call" binding command has been removed in v2. If you want to pass a callback that preserves the context of the function call, you can use lambda instead. Refer to lambda expression doc for more details.`;
    default:
      return "";
  }
}
const Qn = /* @__PURE__ */ Ls("bindables"), _e = Bs({
  name: Qn,
  keyFrom: (i) => `${Qn}:${i}`,
  from(...i) {
    const t = {}, e = Array.isArray;
    function s(o) {
      t[o] = Us.create(o);
    }
    function n(o, a) {
      t[o] = a instanceof Us ? a : Us.create(o, a === !0 ? {} : a);
    }
    function r(o) {
      e(o) ? o.forEach((a) => at(a) ? s(a) : n(a.name, a)) : o instanceof Us ? t[o.name] = o : o !== void 0 && Zc(o).forEach((a) => n(a, o[a]));
    }
    return i.forEach(r), t;
  },
  getAll(i) {
    const t = [], e = Lb(i);
    let s = e.length, n;
    for (; --s >= 0; ) {
      n = e[s];
      const r = oe(Qn, n);
      r != null && t.push(...Object.values(r));
    }
    return t;
  },
  /** @internal */
  _add(i, t) {
    let e = oe(Qn, t);
    e == null && He(e = mt(), t, Qn), e[i.name] = i;
  }
});
class Us {
  constructor(t, e, s, n, r, o) {
    this.attribute = t, this.callback = e, this.mode = s, this.primary = n, this.name = r, this.set = o;
  }
  static create(t, e = {}) {
    const s = e.mode ?? Ot;
    return new Us(e.attribute ?? Pf(t), e.callback ?? `${t}Changed`, at(s) ? Ur[s] ?? Gc : s, e.primary ?? !1, e.name ?? t, e.set ?? Py(e));
  }
}
const ec = {
  key: /* @__PURE__ */ Ls("coercer"),
  define(i, t) {
    He(i[t].bind(i), i, ec.key);
  },
  for(i) {
    return oe(ec.key, i);
  }
};
function Py(i = {}) {
  const t = i.type ?? null;
  if (t == null)
    return ns;
  let e;
  switch (t) {
    case Number:
    case Boolean:
    case String:
    case BigInt:
      e = t;
      break;
    default: {
      const s = t.coerce;
      e = typeof s == "function" ? s.bind(t) : ec.for(t) ?? ns;
      break;
    }
  }
  return e === ns ? e : Iy(e, i.nullable);
}
function Iy(i, t) {
  return function(e, s) {
    return s != null && s.enableCoercion ? (t ?? !((s == null ? void 0 : s.coerceNullish) ?? !1)) && e == null ? e : i(e, s) : e;
  };
}
const vt = ni.createInterface, gs = Ni.singleton, Js = Ni.aliasTo, hg = Ni.instance, xt = (i, t, e) => i.registerResolver(t, e), Ey = "custom-element", Oy = "custom-attribute", ti = (i, t, e, s = "__au_static_resource__") => {
  var r;
  let n = oe(s, i);
  return n == null && ((r = i.$au) == null ? void 0 : r.type) === t && (n = e(i.$au, i), He(n, i, s)), n;
};
class br {
  constructor(t, e, s, n) {
    this.Type = t, this.name = e, this.aliases = s, this.key = n;
  }
  static create(t, e) {
    let s, n;
    return at(t) ? (s = t, n = { name: s }) : (s = t.name, n = t), new br(e, Hs(Pu(e, "name"), s), Vt(Pu(e, "aliases"), n.aliases, e.aliases), ug.keyFrom(s));
  }
  register(t, e) {
    const s = this.Type, n = typeof e == "string" ? _r(e) : this.key, r = this.aliases;
    t.has(n, !1) ? console.warn(`[DEV:aurelia] ${B(156, this.name)}`) : t.register(t.has(s, !1) ? null : gs(s, s), Js(s, n), ...r.map((o) => Js(s, _r(o))));
  }
}
const Ie = "binding-behavior", dn = /* @__PURE__ */ Zi(Ie), Pu = (i, t) => oe(Ls(t), i), _r = (i) => `${dn}:${i}`, ug = /* @__PURE__ */ Bs({
  name: dn,
  keyFrom: _r,
  isType(i) {
    var t;
    return pt(i) && (ma(dn, i) || ((t = i.$au) == null ? void 0 : t.type) === Ie);
  },
  define(i, t) {
    const e = br.create(i, t), s = e.Type;
    return He(e, s, dn, ss), s;
  },
  getDefinition(i) {
    const t = oe(dn, i) ?? ti(i, Ie, br.create);
    if (t === void 0)
      throw B(151, i);
    return t;
  },
  find(i, t) {
    const e = i.find(Ie, t);
    return e == null ? null : oe(dn, e) ?? ti(e, Ie, br.create) ?? null;
  },
  get(i, t) {
    try {
      return i.get(Tn(_r(t)));
    } catch (e) {
      throw console.error("[DEV:aurelia] Cannot retrieve binding behavior with name", t), e;
    }
    return i.get(Tn(_r(t)));
  }
}), rl = /* @__PURE__ */ new Map(), ba = (i) => ({ type: Ie, name: i });
class _a {
  bind(t, e) {
    rl.set(e, e.mode), e.mode = this.mode;
  }
  unbind(t, e) {
    e.mode = rl.get(e), rl.delete(e);
  }
}
class dg extends _a {
  get mode() {
    return ga;
  }
}
dg.$au = ba("oneTime");
class fg extends _a {
  get mode() {
    return Ot;
  }
}
fg.$au = ba("toView");
class pg extends _a {
  get mode() {
    return Ds;
  }
}
pg.$au = ba("fromView");
class gg extends _a {
  get mode() {
    return ig;
  }
}
gg.$au = ba("twoWay");
const ol = /* @__PURE__ */ new WeakMap(), Ry = 200;
class mg {
  constructor() {
    this._platform = D(Bn);
  }
  bind(t, e, s, n) {
    var a;
    const r = {
      type: "debounce",
      delay: s ?? Ry,
      now: this._platform.performanceNow,
      queue: this._platform.taskQueue,
      signals: at(n) ? [n] : n ?? tt
    }, o = (a = e.limit) == null ? void 0 : a.call(e, r);
    o == null ? console.warn(`Binding ${e.constructor.name} does not support debounce rate limiting`) : ol.set(e, o);
  }
  unbind(t, e) {
    var s;
    (s = ol.get(e)) == null || s.dispose(), ol.delete(e);
  }
}
mg.$au = {
  type: Ie,
  name: "debounce"
};
const Ko = /* @__PURE__ */ vt("ISignaler", (i) => i.singleton(Dy));
class Dy {
  constructor() {
    this.signals = mt();
  }
  dispatchSignal(t) {
    const e = this.signals[t];
    if (e === void 0)
      return;
    let s;
    for (s of e.keys())
      s.handleChange(void 0, void 0);
  }
  addSignalListener(t, e) {
    var s;
    ((s = this.signals)[t] ?? (s[t] = /* @__PURE__ */ new Set())).add(e);
  }
  removeSignalListener(t, e) {
    var s;
    (s = this.signals[t]) == null || s.delete(e);
  }
}
class bg {
  constructor() {
    this._lookup = /* @__PURE__ */ new Map(), this._signaler = D(Ko);
  }
  bind(t, e, ...s) {
    if (!("handleChange" in e))
      throw B(
        817
        /* ErrorNames.signal_behavior_invalid_usage */
      );
    if (s.length === 0)
      throw B(
        818
        /* ErrorNames.signal_behavior_no_signals */
      );
    this._lookup.set(e, s);
    let n;
    for (n of s)
      lg(this._signaler, n, e);
  }
  unbind(t, e) {
    const s = this._lookup.get(e);
    this._lookup.delete(e);
    let n;
    for (n of s)
      cg(this._signaler, n, e);
  }
}
bg.$au = {
  type: Ie,
  name: "signal"
};
const al = /* @__PURE__ */ new WeakMap(), $y = 200;
class _g {
  constructor() {
    ({ performanceNow: this._now, taskQueue: this._taskQueue } = D(Bn));
  }
  bind(t, e, s, n) {
    var a;
    const r = {
      type: "throttle",
      delay: s ?? $y,
      now: this._now,
      queue: this._taskQueue,
      signals: at(n) ? [n] : n ?? tt
    }, o = (a = e.limit) == null ? void 0 : a.call(e, r);
    o == null ? console.warn(`Binding ${e.constructor.name} does not support debounce rate limiting`) : al.set(e, o);
  }
  unbind(t, e) {
    var s;
    (s = al.get(e)) == null || s.dispose(), al.delete(e);
  }
}
_g.$au = {
  type: Ie,
  name: "throttle"
};
const Iu = /* @__PURE__ */ vt("IAppTask"), ne = Bn, sc = /* @__PURE__ */ (() => {
  const i = /* @__PURE__ */ new WeakMap();
  return Bs({
    add(t, e) {
      let s = i.get(t);
      s == null && i.set(t, s = []), s.push(e);
    },
    getDefinitions(t) {
      return i.get(t) ?? tt;
    }
  });
})();
class Ki {
  // a simple marker to distinguish between Custom Element definition & Custom attribute definition
  get type() {
    return Oy;
  }
  constructor(t, e, s, n, r, o, a, l, c, h, u) {
    this.Type = t, this.name = e, this.aliases = s, this.key = n, this.defaultBindingMode = r, this.isTemplateController = o, this.bindables = a, this.noMultiBindings = l, this.watches = c, this.dependencies = h, this.containerStrategy = u;
  }
  static create(t, e) {
    let s, n;
    at(t) ? (s = t, n = { name: s }) : (s = t.name, n = t);
    const r = Hs(ys(e, "defaultBindingMode"), n.defaultBindingMode, e.defaultBindingMode, Ot);
    for (const o of Object.values(_e.from(n.bindables)))
      _e._add(o, e);
    return new Ki(e, Hs(ys(e, "name"), s), Vt(ys(e, "aliases"), n.aliases, e.aliases), Sn(s), at(r) ? Ur[r] ?? Gc : r, Hs(ys(e, "isTemplateController"), n.isTemplateController, e.isTemplateController, !1), _e.from(..._e.getAll(e), ys(e, "bindables"), e.bindables, n.bindables), Hs(ys(e, "noMultiBindings"), n.noMultiBindings, e.noMultiBindings, !1), Vt(sc.getDefinitions(e), e.watches), Vt(ys(e, "dependencies"), n.dependencies, e.dependencies), Hs(ys(e, "containerStrategy"), n.containerStrategy, e.containerStrategy, "reuse"));
  }
  register(t, e) {
    const s = this.Type, n = typeof e == "string" ? Sn(e) : this.key, r = this.aliases;
    t.has(n, !1) ? (Ki.warnDuplicate && t.get(ji).warn(B(154, this.name)), console.warn(`[DEV:aurelia] ${B(154, this.name)}`)) : t.register(t.has(s, !1) ? null : gs(s, s), Js(s, n), ...r.map((o) => Js(s, Sn(o))));
  }
  toString() {
    return `au:ca:${this.name}`;
  }
}
Ki.warnDuplicate = !0;
const ae = "custom-attribute", En = /* @__PURE__ */ Zi(ae), Sn = (i) => `${En}:${i}`, ys = (i, t) => oe(Ls(t), i), Ly = (i) => {
  var t;
  return pt(i) && (ma(En, i) || ((t = i.$au) == null ? void 0 : t.type) === ae);
}, vg = (i, t) => xn(i, Sn(t)) ?? void 0, th = (i, t) => {
  const e = Ki.create(i, t), s = e.Type;
  return He(e, s, En, ss), s;
}, eh = (i) => {
  const t = oe(En, i) ?? ti(i, ae, Ki.create);
  if (t === void 0)
    throw B(759, i);
  return t;
}, By = (i, t) => {
  let e = "", s = "";
  if (at(t))
    e = Sn(t), s = t;
  else {
    const r = eh(t);
    e = r.key, s = r.name;
  }
  let n = i;
  for (; n !== null; ) {
    const r = xn(n, e);
    if (r != null && r.is(s))
      return r;
    n = Xo(n);
  }
  return null;
}, sh = /* @__PURE__ */ Bs({
  name: En,
  keyFrom: Sn,
  isType: Ly,
  for: vg,
  closest: By,
  define: th,
  getDefinition: eh,
  annotate(i, t, e) {
    He(e, i, Ls(t));
  },
  getAnnotation: ys,
  find(i, t) {
    const e = i.find(ae, t);
    return e === null ? null : oe(En, e) ?? ti(e, ae, Ki.create) ?? null;
  }
}), an = /* @__PURE__ */ vt("ILifecycleHooks");
class Fy {
  constructor(t, e) {
    this.definition = t, this.instance = e;
  }
}
class ih {
  constructor(t, e) {
    this.Type = t, this.propertyNames = e;
  }
  /**
   * @param def - Placeholder for future extensions. Currently always an empty object.
   */
  static create(t, e) {
    const s = /* @__PURE__ */ new Set();
    let n = e.prototype;
    for (; n !== ng; ) {
      for (const r of og(n))
        r !== "constructor" && !r.startsWith("_") && s.add(r);
      n = Object.getPrototypeOf(n);
    }
    return new ih(e, s);
  }
}
const Eu = /* @__PURE__ */ (() => {
  const i = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return Bs({
    // name: lhBaseName,
    /**
     * @param def - Placeholder for future extensions. Currently always an empty object.
     */
    define(e, s) {
      const n = ih.create(e, s), r = n.Type;
      return t.set(r, n), {
        register(o) {
          gs(an, r).register(o);
        }
      };
    },
    /**
     * @param ctx - The container where the resolution starts
     * @param Type - The constructor of the Custom element/ Custom attribute with lifecycle metadata
     */
    resolve(e) {
      let s = i.get(e);
      if (s === void 0) {
        i.set(e, s = new Vy());
        const n = e.root, r = n === e ? e.getAll(an) : e.has(an, !1) ? n.getAll(an).concat(e.getAll(an)) : n.getAll(an);
        let o, a, l, c, h;
        for (o of r) {
          a = t.get(o.constructor), l = new Fy(a, o);
          for (c of a.propertyNames)
            h = s[c], h === void 0 ? s[c] = [l] : h.push(l);
        }
      }
      return s;
    }
  });
})();
class Vy {
}
class vr {
  constructor(t, e, s, n) {
    this.Type = t, this.name = e, this.aliases = s, this.key = n;
  }
  static create(t, e) {
    let s, n;
    return at(t) ? (s = t, n = { name: s }) : (s = t.name, n = t), new vr(e, Hs(ic(e, "name"), s), Vt(ic(e, "aliases"), n.aliases, e.aliases), yg.keyFrom(s));
  }
  register(t, e) {
    const s = this.Type, n = typeof e == "string" ? yr(e) : this.key, r = this.aliases;
    t.has(n, !1) ? console.warn(`[DEV:aurelia] ${B(155, this.name)}`) : t.register(t.has(s, !1) ? null : gs(s, s), Js(s, n), ...r.map((o) => Js(s, yr(o))));
  }
}
const bn = "value-converter", fn = /* @__PURE__ */ Zi(bn), ic = (i, t) => oe(Ls(t), i), yr = (i) => `${fn}:${i}`, yg = Bs({
  name: fn,
  keyFrom: yr,
  isType(i) {
    var t;
    return pt(i) && (ma(fn, i) || ((t = i.$au) == null ? void 0 : t.type) === bn);
  },
  define(i, t) {
    const e = vr.create(i, t), s = e.Type;
    return He(e, s, fn, ss), s;
  },
  getDefinition(i) {
    const t = oe(fn, i) ?? ti(i, bn, vr.create);
    if (t === void 0)
      throw B(152, i);
    return t;
  },
  annotate(i, t, e) {
    He(e, i, Ls(t));
  },
  getAnnotation: ic,
  find(i, t) {
    const e = i.find(bn, t);
    return e == null ? null : oe(fn, e) ?? ti(e, bn, vr.create) ?? null;
  },
  get(i, t) {
    try {
      return i.get(Tn(yr(t)));
    } catch (e) {
      throw console.error("[DEV:aurelia] Cannot retrieve value converter with name", t), e;
    }
    return i.get(Tn(yr(t)));
  }
});
class Ny {
  constructor(t, e) {
    this._value = void 0, this.b = t, this._flushQueue = e;
  }
  flush() {
    this.b.updateSource(this._value);
  }
  // deepscan-disable-next-line
  handleChange(t, e) {
    const s = this.b;
    t !== Tt(s.ast, s._scope, s, null) && (this._value = t, this._flushQueue.add(this));
  }
}
const Ji = /* @__PURE__ */ (() => {
  function i(t) {
    this._scope = t;
  }
  return (t) => {
    we(t.prototype, "useScope", i);
  };
})(), Fs = /* @__PURE__ */ (() => {
  class i {
  }
  const t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
  function n(d) {
    return this.l.get(d);
  }
  function r(d, f) {
    let g = e.get(d);
    return g == null && e.set(d, g = new i()), g[f] ?? (g[f] = ug.get(d.l, f));
  }
  function o(d, f, g) {
    var b;
    const p = r(this, d);
    if (p == null)
      throw B(101, d);
    let m = s.get(this);
    if (m == null && s.set(this, m = {}), m[d])
      throw B(102, d);
    (b = p.bind) == null || b.call(p, f, this, ...g);
  }
  function a(d, f) {
    var m;
    const g = r(this, d), p = s.get(this);
    (m = g == null ? void 0 : g.unbind) == null || m.call(g, f, this), p != null && (p[d] = !1);
  }
  function l(d, f) {
    let g = t.get(d);
    return g == null && t.set(d, g = new i()), g[f] ?? (g[f] = yg.get(d.l, f));
  }
  function c(d) {
    const f = l(this, d);
    if (f == null)
      throw B(103, d);
    const g = f.signals;
    if (g != null) {
      const p = this.l.get(Ko), m = g.length;
      let b = 0;
      for (; b < m; ++b)
        p.addSignalListener(g[b], this);
    }
  }
  function h(d) {
    const f = l(this, d);
    if ((f == null ? void 0 : f.signals) === void 0)
      return;
    const g = this.l.get(Ko);
    let p = 0;
    for (; p < f.signals.length; ++p)
      g.removeSignalListener(f.signals[p], this);
  }
  function u(d, f, g, p) {
    var b;
    const m = l(this, d);
    if (m == null)
      throw B(103, d);
    switch (f) {
      case "toView":
        return "toView" in m ? m.toView(g, ...p) : g;
      case "fromView":
        return "fromView" in m ? (b = m.fromView) == null ? void 0 : b.call(m, g, ...p) : g;
    }
  }
  return (d) => {
    const f = d.prototype;
    we(f, "get", n), we(f, "bindBehavior", o), we(f, "unbindBehavior", a), we(f, "bindConverter", c), we(f, "unbindConverter", h), we(f, "useConverter", u);
  };
})(), jy = /* @__PURE__ */ vt("IFlushQueue", (i) => i.singleton(zy));
class zy {
  constructor() {
    this._flushing = !1, this._items = /* @__PURE__ */ new Set();
  }
  get count() {
    return this._items.size;
  }
  add(t) {
    if (this._items.add(t), !this._flushing) {
      this._flushing = !0;
      try {
        this._items.forEach(Hy);
      } finally {
        this._flushing = !1;
      }
    }
  }
  clear() {
    this._items.clear(), this._flushing = !1;
  }
}
const Hy = function(i, t, e) {
  e.delete(i), i.flush();
}, tn = /* @__PURE__ */ (() => {
  const i = /* @__PURE__ */ new WeakSet(), t = (s, n, r) => {
    let o, a, l, c = !1;
    const h = s.queue, u = () => n(l), d = (g) => {
      l = g, r.isBound ? (a = o, o = h.queueTask(u, { delay: s.delay }), a == null || a.cancel()) : u();
    }, f = d.dispose = () => {
      a == null || a.cancel(), o == null || o.cancel(), a = o = void 0;
    };
    return d.flush = () => {
      c = (o == null ? void 0 : o.status) === Tu, f(), c && u();
    }, d;
  }, e = (s, n, r) => {
    let o, a, l = 0, c = 0, h, u = !1;
    const d = s.queue, f = () => s.now(), g = () => n(h), p = (b) => {
      h = b, r.isBound ? (c = f() - l, a = o, c > s.delay ? (l = f(), g()) : o = d.queueTask(() => {
        l = f(), g();
      }, { delay: s.delay - c }), a == null || a.cancel()) : g();
    }, m = p.dispose = () => {
      a == null || a.cancel(), o == null || o.cancel(), a = o = void 0;
    };
    return p.flush = () => {
      u = (o == null ? void 0 : o.status) === Tu, m(), u && g();
    }, p;
  };
  return (s, n) => {
    we(s.prototype, "limit", function(r) {
      if (i.has(this))
        throw B(
          9996
          /* ErrorNames.binding_already_has_rate_limited */
        );
      i.add(this);
      const o = n(this, r), a = r.signals, l = a.length > 0 ? this.get(Ko) : null, c = this[o], h = (...f) => c.call(this, ...f), u = r.type === "debounce" ? t(r, h, this) : e(r, h, this), d = l ? { handleChange: u.flush } : null;
      return this[o] = u, l && a.forEach((f) => lg(l, f, d)), {
        dispose: () => {
          l && a.forEach((f) => cg(l, f, d)), i.delete(this), u.dispose(), delete this[o];
        }
      };
    });
  };
})(), hi = /* @__PURE__ */ ((i = /* @__PURE__ */ new WeakSet()) => (t) => function() {
  i.has(this) || (i.add(this), t.call(this));
})(), Wy = {
  preempt: !0
};
class Pi {
  constructor(t, e, s, n, r, o, a, l, c, h) {
    this.targetAttribute = a, this.targetProperty = l, this.mode = c, this.strict = h, this.isBound = !1, this._scope = void 0, this._task = null, this._value = void 0, this.boundFn = !1, this.l = e, this.ast = r, this._controller = t, this.target = o, this.oL = s, this._taskQueue = n;
  }
  updateTarget(t) {
    const e = this.target, s = this.targetAttribute, n = this.targetProperty;
    switch (s) {
      case "class":
        e.classList.toggle(n, !!t);
        break;
      case "style": {
        let r = "", o = qi(t);
        at(o) && o.includes("!important") && (r = "important", o = o.replace("!important", "")), e.style.setProperty(n, o, r);
        break;
      }
      default:
        t == null ? e.removeAttribute(s) : e.setAttribute(s, qi(t));
    }
  }
  handleChange() {
    if (!this.isBound)
      return;
    let t;
    this.obs.version++;
    const e = Tt(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & Ot) > 0 ? this : null
    );
    this.obs.clear(), e !== this._value && (this._value = e, this._controller.state !== xe ? (t = this._task, this._task = this._taskQueue.queueTask(() => {
      this._task = null, this.updateTarget(e);
    }, Wy), t == null || t.cancel()) : this.updateTarget(e));
  }
  // todo: based off collection and handle update accordingly instead off always start
  handleCollectionChange() {
    this.handleChange();
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this), this.mode & (Ot | ga) && this.updateTarget(this._value = Tt(
      this.ast,
      t,
      this,
      /* should connect? */
      (this.mode & Ot) > 0 ? this : null
    )), this.isBound = !0;
  }
  unbind() {
    var t;
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0, this._value = void 0, (t = this._task) == null || t.cancel(), this._task = null, this.obs.clearAll());
  }
}
Pi.mix = hi(() => {
  Ji(Pi), tn(Pi, () => "updateTarget"), We(Pi, null), Fs(Pi);
});
const Uy = {
  preempt: !0
};
class qy {
  constructor(t, e, s, n, r, o, a, l, c) {
    this.ast = r, this.target = o, this.targetProperty = a, this.mode = l, this.strict = c, this.isBound = !1, this._scope = void 0, this._task = null, this._controller = t, this.oL = s, this._taskQueue = n, this._targetObserver = s.getAccessor(o, a);
    const h = r.expressions, u = this.partBindings = Array(h.length), d = h.length;
    let f = 0;
    for (; d > f; ++f)
      u[f] = new Ii(h[f], o, a, e, s, c, this);
  }
  /** @internal */
  _handlePartChange() {
    this.updateTarget();
  }
  updateTarget() {
    const t = this.partBindings, e = this.ast.parts, s = t.length;
    let n = "", r = 0;
    if (s === 1)
      n = e[0] + t[0]._value + e[1];
    else
      for (n = e[0]; s > r; ++r)
        n += t[r]._value + e[r + 1];
    const o = this._targetObserver, a = this._controller.state !== xe && (o.type & ps) > 0;
    let l;
    a ? (l = this._task, this._task = this._taskQueue.queueTask(() => {
      this._task = null, o.setValue(n, this.target, this.targetProperty);
    }, Uy), l == null || l.cancel(), l = null) : o.setValue(n, this.target, this.targetProperty);
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t;
    const e = this.partBindings, s = e.length;
    let n = 0;
    for (; s > n; ++n)
      e[n].bind(t);
    this.updateTarget(), this.isBound = !0;
  }
  unbind() {
    var n;
    if (!this.isBound)
      return;
    this.isBound = !1, this._scope = void 0;
    const t = this.partBindings, e = t.length;
    let s = 0;
    for (; e > s; ++s)
      t[s].unbind();
    (n = this._task) == null || n.cancel(), this._task = null;
  }
  /**
   * Start using a given observer to update the target
   */
  useAccessor(t) {
    this._targetObserver = t;
  }
}
class Ii {
  constructor(t, e, s, n, r, o, a) {
    this.ast = t, this.target = e, this.targetProperty = s, this.strict = o, this.owner = a, this.mode = Ot, this.task = null, this.isBound = !1, this._value = "", this.boundFn = !1, this.l = n, this.oL = r;
  }
  updateTarget() {
    this.owner._handlePartChange();
  }
  handleChange() {
    if (!this.isBound)
      return;
    this.obs.version++;
    const t = Tt(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & Ot) > 0 ? this : null
    );
    this.obs.clear(), t != this._value && (this._value = t, Bt(t) && this.observeCollection(t), this.updateTarget());
  }
  handleCollectionChange() {
    this.updateTarget();
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this), this._value = Tt(this.ast, this._scope, this, (this.mode & Ot) > 0 ? this : null), Bt(this._value) && this.observeCollection(this._value), this.isBound = !0;
  }
  unbind() {
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0, this.obs.clearAll());
  }
}
Ii.mix = hi(() => {
  Ji(Ii), tn(Ii, () => "updateTarget"), We(Ii, null), Fs(Ii);
});
const Ky = {
  preempt: !0
};
class Ei {
  constructor(t, e, s, n, r, o, a, l) {
    this.p = r, this.ast = o, this.target = a, this.strict = l, this.isBound = !1, this.mode = Ot, this._task = null, this._value = "", this._needsRemoveNode = !1, this.boundFn = !1, this.l = e, this._controller = t, this.oL = s, this._taskQueue = n;
  }
  updateTarget(t) {
    var n, r;
    const e = this.target, s = this._value;
    this._value = t, this._needsRemoveNode && ((n = s.parentNode) == null || n.removeChild(s), this._needsRemoveNode = !1), t instanceof this.p.Node && ((r = e.parentNode) == null || r.insertBefore(t, e), t = "", this._needsRemoveNode = !0), e.textContent = qi(t ?? "");
  }
  handleChange() {
    var s;
    if (!this.isBound)
      return;
    this.obs.version++;
    const t = Tt(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & Ot) > 0 ? this : null
    );
    if (this.obs.clear(), t === this._value) {
      (s = this._task) == null || s.cancel(), this._task = null;
      return;
    }
    this._controller.state !== xe ? this._queueUpdate(t) : this.updateTarget(t);
  }
  handleCollectionChange() {
    if (!this.isBound)
      return;
    this.obs.version++;
    const t = this._value = Tt(this.ast, this._scope, this, (this.mode & Ot) > 0 ? this : null);
    this.obs.clear(), Bt(t) && this.observeCollection(t), this._controller.state !== xe ? this._queueUpdate(t) : this.updateTarget(t);
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this);
    const e = this._value = Tt(this.ast, this._scope, this, (this.mode & Ot) > 0 ? this : null);
    Bt(e) && this.observeCollection(e), this.updateTarget(e), this.isBound = !0;
  }
  unbind() {
    var t, e;
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._needsRemoveNode && ((t = this._value.parentNode) == null || t.removeChild(this._value)), this._scope = void 0, this.obs.clearAll(), (e = this._task) == null || e.cancel(), this._task = null);
  }
  // queue a force update
  /** @internal */
  _queueUpdate(t) {
    const e = this._task;
    this._task = this._taskQueue.queueTask(() => {
      this._task = null, this.updateTarget(t);
    }, Ky), e == null || e.cancel();
  }
}
Ei.mix = hi(() => {
  Ji(Ei), tn(Ei, () => "updateTarget"), We(Ei, null), Fs(Ei);
});
class Oi {
  constructor(t, e, s, n, r, o) {
    this.ast = s, this.targetProperty = n, this.isBound = !1, this._scope = void 0, this.target = null, this.boundFn = !1, this.l = t, this.oL = e, this.strict = o, this._toBindingContext = r;
  }
  updateTarget() {
    this.target[this.targetProperty] = this._value;
  }
  handleChange() {
    this.isBound && (this.obs.version++, this._value = Tt(this.ast, this._scope, this, this), this.obs.clear(), this.updateTarget());
  }
  handleCollectionChange() {
    this.handleChange();
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, this.target = this._toBindingContext ? t.bindingContext : t.overrideContext, oi(this.ast, t, this), this._value = Tt(this.ast, this._scope, this, this), this.updateTarget(), this.isBound = !0;
  }
  unbind() {
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0, this.obs.clearAll());
  }
}
Oi.mix = hi(() => {
  Ji(Oi), tn(Oi, () => "updateTarget"), We(Oi, null), Fs(Oi);
});
class ce {
  constructor(t, e, s, n, r, o, a, l, c) {
    this.ast = r, this.target = o, this.targetProperty = a, this.mode = l, this.strict = c, this.isBound = !1, this._scope = void 0, this._targetObserver = void 0, this._task = null, this._targetSubscriber = null, this.boundFn = !1, this.l = e, this._controller = t, this._taskQueue = n, this.oL = s;
  }
  updateTarget(t) {
    this._targetObserver.setValue(t, this.target, this.targetProperty);
  }
  updateSource(t) {
    Or(this.ast, this._scope, this, t);
  }
  handleChange() {
    if (!this.isBound)
      return;
    this.obs.version++;
    const t = Tt(
      this.ast,
      this._scope,
      this,
      // should observe?
      (this.mode & Ot) > 0 ? this : null
    );
    this.obs.clear(), this._controller.state !== xe && (this._targetObserver.type & ps) > 0 ? (Xn = this._task, this._task = this._taskQueue.queueTask(() => {
      this.updateTarget(t), this._task = null;
    }, Yy), Xn == null || Xn.cancel(), Xn = null) : this.updateTarget(t);
  }
  // todo: based off collection and handle update accordingly instead off always start
  handleCollectionChange() {
    this.handleChange();
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this);
    const e = this.oL, s = this.mode;
    let n = this._targetObserver;
    n || (s & Ds ? n = e.getObserver(this.target, this.targetProperty) : n = e.getAccessor(this.target, this.targetProperty), this._targetObserver = n);
    const r = (s & Ot) > 0;
    s & (Ot | ga) && this.updateTarget(Tt(this.ast, this._scope, this, r ? this : null)), s & Ds && (n.subscribe(this._targetSubscriber ?? (this._targetSubscriber = new Ny(this, this.l.get(jy)))), r || this.updateSource(n.getValue(this.target, this.targetProperty))), this.isBound = !0;
  }
  unbind() {
    var t;
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0, this._targetSubscriber && (this._targetObserver.unsubscribe(this._targetSubscriber), this._targetSubscriber = null), (t = this._task) == null || t.cancel(), this._task = null, this.obs.clearAll());
  }
  /**
   * Start using a given observer to listen to changes on the target of this binding
   */
  useTargetObserver(t) {
    var e;
    (e = this._targetObserver) == null || e.unsubscribe(this), (this._targetObserver = t).subscribe(this);
  }
  /**
   * Provide a subscriber for target change observation.
   *
   * Binding behaviors can use this to setup custom observation handling during bind lifecycle
   * to alter the update source behavior during bind phase of this binding.
   */
  useTargetSubscriber(t) {
    if (this._targetSubscriber != null)
      throw B(
        9995
        /* ErrorNames.binding_already_has_target_subscriber */
      );
    this._targetSubscriber = t;
  }
}
ce.mix = hi(() => {
  Ji(ce), tn(ce, (i) => i.mode & Ds ? "updateSource" : "updateTarget"), We(ce, null), Fs(ce);
});
let Xn = null;
const Yy = {
  preempt: !0
};
class nc {
  constructor(t, e, s, n) {
    this.ast = e, this.target = s, this.strict = n, this.isBound = !1, this._scope = void 0, this.l = t;
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this), Or(this.ast, this._scope, this, this.target), this.isBound = !0;
  }
  unbind() {
    this.isBound && (this.isBound = !1, Tt(this.ast, this._scope, this, null) === this.target && Or(this.ast, this._scope, this, null), ai(this.ast, this._scope, this), this._scope = void 0);
  }
}
nc.mix = hi(() => {
  Fs(nc);
});
class Qy {
  constructor(t, e = !1, s) {
    this.prevent = t, this.capture = e, this.onError = s;
  }
}
class _n {
  constructor(t, e, s, n, r, o, a) {
    this.ast = e, this.target = s, this.targetEvent = n, this.strict = a, this.isBound = !1, this.self = !1, this.boundFn = !0, this._modifiedEventHandler = null, this.l = t, this._options = r, this._modifiedEventHandler = o;
  }
  callSource(t) {
    const e = this._scope.overrideContext;
    e.$event = t;
    let s = Tt(this.ast, this._scope, this, null);
    delete e.$event, pt(s) && (s = s(t)), s !== !0 && this._options.prevent && t.preventDefault();
  }
  handleEvent(t) {
    var e;
    if (!(this.self && this.target !== t.composedPath()[0]) && ((e = this._modifiedEventHandler) == null ? void 0 : e.call(this, t)) !== !1)
      try {
        this.callSource(t);
      } catch (s) {
        this._options.onError(t, s);
      }
  }
  bind(t) {
    if (this.isBound) {
      if (this._scope === t)
        return;
      this.unbind();
    }
    this._scope = t, oi(this.ast, t, this), this.target.addEventListener(this.targetEvent, this, this._options), this.isBound = !0;
  }
  unbind() {
    this.isBound && (this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0, this.target.removeEventListener(this.targetEvent, this, this._options));
  }
}
_n.mix = hi(function() {
  Ji(_n), tn(_n, () => "callSource"), Fs(_n);
});
const va = /* @__PURE__ */ vt("IEventModifier"), wg = /* @__PURE__ */ vt("IKeyMapping", (i) => i.instance({
  meta: Bs(["ctrl", "alt", "shift", "meta"]),
  keys: {
    escape: "Escape",
    enter: "Enter",
    space: "Space",
    tab: "tab",
    // by default, maps the key a-z and A-Z to their respective keycodes
    ...Array.from({ length: 25 }).reduce((t, e, s) => {
      let n = String.fromCharCode(s + 65);
      return t[s + 65] = n, n = String.fromCharCode(s + 97), t[s + 97] = t[n] = n, t;
    }, {})
  }
}));
class nh {
  constructor() {
    this.type = ["click", "mousedown", "mousemove", "mouseup", "dblclick", "contextmenu"], this._mapping = D(wg), this._mouseButtons = ["left", "middle", "right"];
  }
  static register(t) {
    t.register(gs(va, nh));
  }
  getHandler(t) {
    const e = t.split(/[:+.]/);
    return (s) => {
      let n = !1, r = !1, o;
      for (o of e) {
        switch (o) {
          case "prevent":
            n = !0;
            continue;
          case "stop":
            r = !0;
            continue;
          case "left":
          case "middle":
          case "right":
            if (s.button !== this._mouseButtons.indexOf(o))
              return !1;
            continue;
        }
        if (this._mapping.meta.includes(o) && s[`${o}Key`] !== !0)
          return !1;
        console.warn(`Modifier '${o}' is not supported for mouse events.`);
      }
      return n && s.preventDefault(), r && s.stopPropagation(), !0;
    };
  }
}
class rh {
  constructor() {
    this._mapping = D(wg), this.type = ["keydown", "keyup"];
  }
  static register(t) {
    t.register(gs(va, rh));
  }
  getHandler(t) {
    const e = t.split(/[:+.]/);
    return (s) => {
      let n = !1, r = !1, o;
      for (o of e) {
        switch (o) {
          case "prevent":
            n = !0;
            continue;
          case "stop":
            r = !0;
            continue;
        }
        if (this._mapping.meta.includes(o)) {
          if (s[`${o}Key`] !== !0)
            return !1;
          continue;
        }
        if (this._mapping.keys[o] !== s.key)
          return !1;
        console.warn(`Modifier '${o}' is not supported for keyboard event with key "${s.key}".`);
      }
      return n && s.preventDefault(), r && s.stopPropagation(), !0;
    };
  }
}
class oh {
  constructor() {
    this.type = ["$ALL"];
  }
  static register(t) {
    t.register(gs(va, oh));
  }
  getHandler(t) {
    const e = t.split(/[:+.]/);
    return (s) => {
      let n = !1, r = !1, o;
      for (o of e) {
        switch (o) {
          case "prevent":
            n = !0;
            continue;
          case "stop":
            r = !0;
            continue;
        }
        console.warn(`Modifier '${o}' is not supported for event "${s.type}".`);
      }
      return n && s.preventDefault(), r && s.stopPropagation(), !0;
    };
  }
}
const xg = /* @__PURE__ */ vt("IEventModifierHandler", (i) => i.instance({
  getHandler: () => (console.warn("No event modifier handler registered"), null)
}));
class ah {
  constructor() {
    this._reg = D(Ac(va)).reduce((t, e) => ((Bt(e.type) ? e.type : [e.type]).forEach((n) => t[n] = e), t), {});
  }
  static register(t) {
    t.register(gs(xg, ah));
  }
  getHandler(t, e) {
    var s;
    return at(e) ? ((s = this._reg[t] ?? this._reg.$ALL) == null ? void 0 : s.getHandler(e)) ?? null : null;
  }
}
const Xy = {
  register(i) {
    i.register(ah, nh, rh, oh);
  }
}, Ce = /* @__PURE__ */ vt("IViewFactory");
class ya {
  constructor(t, e) {
    this.isCaching = !1, this._cache = null, this._cacheSize = -1, this.name = e.name, this.container = t, this.def = e;
  }
  setCacheSize(t, e) {
    t && (t === "*" ? t = ya.maxCacheSize : at(t) && (t = parseInt(t, 10)), (this._cacheSize === -1 || !e) && (this._cacheSize = t)), this._cacheSize > 0 ? this._cache = [] : this._cache = null, this.isCaching = this._cacheSize > 0;
  }
  canReturnToCache(t) {
    return this._cache != null && this._cache.length < this._cacheSize;
  }
  tryReturnToCache(t) {
    return this.canReturnToCache(t) ? (this._cache.push(t), !0) : !1;
  }
  create(t) {
    const e = this._cache;
    let s;
    return e != null && e.length > 0 ? (s = e.pop(), s) : (s = ge.$view(this, t), s);
  }
}
ya.maxCacheSize = 65535;
const Gy = /* @__PURE__ */ (() => {
  const i = (t, e) => t.document.createComment(e);
  return (t) => {
    const e = i(t, "au-end");
    return e.$start = i(t, "au-start"), e;
  };
})(), oo = (i, t, e) => {
  if (i === null)
    return;
  const s = e.length;
  let n = 0;
  for (; s > n; )
    i.insertBefore(e[n], t), ++n;
}, kg = (i, t) => new i.ownerDocument.defaultView.MutationObserver(t), Zy = (i) => i.nodeType === 1, Cg = "default", Jy = "au-slot", Sg = /* @__PURE__ */ vt("IAuSlotsInfo");
class Ag {
  constructor(t) {
    this.projectedSlots = t;
  }
}
const tw = /* @__PURE__ */ vt("IAuSlotWatcher");
class wa {
  /**
   * Create a list of SpreadBinding by searching for captured attributes in HydrationContexts
   * from a container
   */
  static create(t, e, s, n, r, o, a, l) {
    const c = [], h = n.renderers, u = (f) => {
      let g = f, p = t;
      for (; p != null && g > 0; )
        p = p.parent, --g;
      if (p == null)
        throw B(
          9999
          /* ErrorNames.no_spread_scope_context_found */
        );
      return p;
    }, d = (f) => {
      var _;
      const g = u(f), p = new wa(g), m = r.compileSpread(g.controller.definition, ((_ = g.instruction) == null ? void 0 : _.captures) ?? tt, g.controller.container, e, s);
      let b;
      for (b of m)
        switch (b.type) {
          case Ht.spreadTransferedBinding:
            d(f + 1);
            break;
          case Ht.spreadElementProp:
            h[b.instruction.type].render(p, Li(e), b.instruction, o, a, l);
            break;
          default:
            h[b.type].render(p, e, b, o, a, l);
        }
      c.push(p);
    };
    return d(0), c;
  }
  get container() {
    return this.locator;
  }
  get definition() {
    return this.$controller.definition;
  }
  get state() {
    return this.$controller.state;
  }
  constructor(t) {
    this.isBound = !1, this._innerBindings = [], this.locator = (this.$controller = (this._hydrationContext = t).controller).container;
  }
  get(t) {
    return this.locator.get(t);
  }
  bind(t) {
    if (this.isBound)
      return;
    this.isBound = !0;
    const e = this.scope = this._hydrationContext.controller.scope.parent ?? void 0;
    if (e == null)
      throw B(
        9999
        /* ErrorNames.no_spread_scope_context_found */
      );
    this._innerBindings.forEach((s) => s.bind(e));
  }
  unbind() {
    this._innerBindings.forEach((t) => t.unbind()), this.isBound = !1;
  }
  addBinding(t) {
    this._innerBindings.push(t);
  }
  addChild(t) {
    if (t.vmKind !== Ai)
      throw B(
        9998
        /* ErrorNames.no_spread_template_controller */
      );
    this.$controller.addChild(t);
  }
}
class es {
  constructor(t, e, s, n, r, o, a, l) {
    this.target = e, this.targetKeys = s, this.ast = n, this.strict = l, this.isBound = !1, this._scope = void 0, this.boundFn = !1, this._bindingCache = {}, this._scopeCache = /* @__PURE__ */ new WeakMap(), this._controller = t, this.oL = r, this.l = o, this._taskQueue = a;
  }
  updateTarget() {
    this.obs.version++;
    const t = Tt(this.ast, this._scope, this, this);
    this.obs.clear(), this._createBindings(t, !0);
  }
  handleChange() {
    this.isBound && this.updateTarget();
  }
  handleCollectionChange() {
    this.isBound && this.updateTarget();
  }
  bind(t) {
    if (this.isBound) {
      if (t === this._scope)
        return;
      this.unbind();
    }
    this.isBound = !0, this._scope = t, oi(this.ast, t, this);
    const e = Tt(this.ast, t, this, this);
    this._createBindings(e, !1);
  }
  unbind() {
    if (!this.isBound)
      return;
    this.isBound = !1, ai(this.ast, this._scope, this), this._scope = void 0;
    let t;
    for (t in this._bindingCache)
      this._bindingCache[t].unbind();
  }
  /**
   * @internal
   */
  _createBindings(t, e) {
    var o, a;
    let s;
    if (!Af(t)) {
      console.warn(`[DEV:aurelia] $bindable spread is given a non object for properties: "${this.targetKeys.join(", ")}" of ${this.target.constructor.name}`);
      for (s in this._bindingCache)
        (o = this._bindingCache[s]) == null || o.unbind();
      return;
    }
    let n, r = this._scopeCache.get(t);
    r == null && this._scopeCache.set(t, r = zt.fromParent(this._scope, t));
    for (s of this.targetKeys)
      n = this._bindingCache[s], s in t ? (n == null && (n = this._bindingCache[s] = new ce(this._controller, this.l, this.oL, this._taskQueue, (a = es._astCache)[s] ?? (a[s] = new pr(s, 0)), this.target, s, Ur.toView, this.strict)), n.bind(r)) : e && (n == null || n.unbind());
  }
}
es.mix = hi(() => {
  Ji(es), tn(es, () => "updateTarget"), We(es, null), Fs(es);
});
es._astCache = {};
const Ou = (i, t, e, s) => {
  i.addEventListener(t, e, s);
}, Ru = (i, t, e, s) => {
  i.removeEventListener(t, e, s);
}, lh = (i) => {
  let t;
  const e = i.prototype;
  we(e, "subscribe", function(s) {
    var n;
    if (this.subs.add(s) && this.subs.count === 1) {
      for (t of this._config.events)
        Ou(this._el, t, this);
      this._listened = !0, (n = this._start) == null || n.call(this);
    }
  }), we(e, "unsubscribe", function(s) {
    var n;
    if (this.subs.remove(s) && this.subs.count === 0) {
      for (t of this._config.events)
        Ru(this._el, t, this);
      this._listened = !1, (n = this._stop) == null || n.call(this);
    }
  }), we(e, "useConfig", function(s) {
    if (this._config = s, this._listened) {
      for (t of this._config.events)
        Ru(this._el, t, this);
      for (t of this._config.events)
        Ou(this._el, t, this);
    }
  });
}, xa = (i) => {
  we(i.prototype, "subscribe", ns), we(i.prototype, "unsubscribe", ns);
};
class ka {
  get doNotCache() {
    return !0;
  }
  constructor(t, e = {}) {
    this.obj = t, this.mapping = e, this.type = ci | ps, this._value = "", this._nameIndex = {}, this._version = 0;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    t !== this._value && (this._value = t, this._flushChanges());
  }
  /** @internal */
  _flushChanges() {
    const t = this._nameIndex, e = ++this._version, s = this.obj.classList, n = Mg(this._value), r = n.length;
    let o = 0, a;
    if (r > 0)
      for (; o < r; o++)
        a = n[o], a = this.mapping[a] || a, a.length !== 0 && (t[a] = this._version, s.add(a));
    if (e !== 1)
      for (a in t)
        a = this.mapping[a] || a, t[a] !== e && s.remove(a);
  }
}
xa(ka);
function Mg(i) {
  if (at(i))
    return Du(i);
  if (typeof i != "object")
    return tt;
  if (Bt(i)) {
    const s = i.length;
    if (s > 0) {
      const n = [];
      let r = 0;
      for (; s > r; ++r)
        n.push(...Mg(i[r]));
      return n;
    } else
      return tt;
  }
  const t = [];
  let e;
  for (e in i)
    i[e] && (e.includes(" ") ? t.push(...Du(e)) : t.push(e));
  return t;
}
function Du(i) {
  const t = i.match(/\S+/g);
  return t === null ? tt : t;
}
const Tg = (i) => ({
  $isResolver: !0,
  resolve(t, e) {
    return e.get(Yi).controller.container.get(n_(i));
  }
}), Pg = /* @__PURE__ */ vt("IRenderer");
function Qt(i, t) {
  var s;
  const e = i[s = Symbol.metadata] ?? (i[s] = /* @__PURE__ */ Object.create(null));
  return e[us] = {
    register(n) {
      gs(Pg, i).register(n);
    }
  }, i;
}
function hs(i, t, e) {
  return at(t) ? i.parse(t, e) : t;
}
function Ca(i) {
  return i.viewModel != null ? i.viewModel : i;
}
function ew(i, t) {
  if (t === "element")
    return i;
  switch (t) {
    case "controller":
      return Li(i);
    case "view":
      throw B(
        750
        /* ErrorNames.not_supported_view_ref_api */
      );
    case "component":
      return Li(i).viewModel;
    default: {
      const e = vg(i, t);
      if (e !== void 0)
        return e.viewModel;
      const s = Li(i, { name: t });
      if (s === void 0)
        throw B(751, t);
      return s.viewModel;
    }
  }
}
const sw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.setProperty;
  }
  render(t, e, s) {
    var r;
    const n = Ca(e);
    ((r = n.$observers) == null ? void 0 : r[s.to]) !== void 0 ? n.$observers[s.to].setValue(s.value) : n[s.to] = s.value;
  }
}), iw = /* @__PURE__ */ Qt(class {
  constructor() {
    this._rendering = D(ui), this.target = Ht.hydrateElement;
  }
  render(t, e, s, n, r, o) {
    let a, l, c;
    const h = s.res, u = s.projections, d = t.container;
    switch (typeof h) {
      case "string":
        if (a = Ee.find(d, h), a == null)
          throw B(752, s, t);
        break;
      default:
        a = h;
    }
    const g = s.containerless || a.containerless ? Rr(e) : null, p = Sw(
      /* platform         */
      n,
      /* parentController */
      t,
      /* host             */
      e,
      /* instruction      */
      s,
      /* location         */
      g,
      /* SlotsInfo      */
      u == null ? void 0 : new Ag(Zc(u))
    );
    l = p.invoke(a.Type), c = ge.$el(
      /* own container       */
      p,
      /* viewModel           */
      l,
      /* host                */
      e,
      /* instruction         */
      s,
      /* definition          */
      a,
      /* location            */
      g
    ), te(e, a.key, c);
    const m = this._rendering.renderers, b = s.props, _ = b.length;
    let w = 0, x;
    for (; _ > w; )
      x = b[w], m[x.type].render(t, c, x, n, r, o), ++w;
    t.addChild(c);
  }
}), nw = /* @__PURE__ */ Qt(class {
  constructor() {
    this._rendering = D(ui), this.target = Ht.hydrateAttribute;
  }
  render(t, e, s, n, r, o) {
    let a = t.container, l;
    switch (typeof s.res) {
      case "string":
        if (l = sh.find(a, s.res), l == null)
          throw B(753, s, t);
        break;
      default:
        l = s.res;
    }
    const c = Dg(
      /* platform         */
      n,
      /* attr definition  */
      l,
      /* parentController */
      t,
      /* host             */
      e,
      /* instruction      */
      s,
      /* viewFactory      */
      void 0,
      /* location         */
      void 0
    ), h = ge.$attr(
      /* context ct */
      c.ctn,
      /* viewModel  */
      c.vm,
      /* host       */
      e,
      /* definition */
      l
    );
    te(e, l.key, h);
    const u = this._rendering.renderers, d = s.props, f = d.length;
    let g = 0, p;
    for (; f > g; )
      p = d[g], u[p.type].render(t, h, p, n, r, o), ++g;
    t.addChild(h);
  }
}), rw = /* @__PURE__ */ Qt(class {
  constructor() {
    this._rendering = D(ui), this.target = Ht.hydrateTemplateController;
  }
  render(t, e, s, n, r, o) {
    var _, w;
    let a = t.container, l;
    switch (typeof s.res) {
      case "string":
        if (l = sh.find(a, s.res), l == null)
          throw B(754, s, t);
        break;
      default:
        l = s.res;
    }
    const c = this._rendering.getViewFactory(s.def, l.containerStrategy === "new" ? a.createChild({ inheritParentResources: !0 }) : a), h = Rr(e), u = Dg(
      /* platform         */
      n,
      /* attr definition  */
      l,
      /* parentController */
      t,
      /* host             */
      e,
      /* instruction      */
      s,
      /* viewFactory      */
      c,
      /* location         */
      h
    ), d = ge.$attr(
      /* container ct */
      u.ctn,
      /* viewModel    */
      u.vm,
      /* host         */
      e,
      /* definition   */
      l
    );
    te(h, l.key, d), (w = (_ = u.vm).link) == null || w.call(_, t, d, e, s);
    const f = this._rendering.renderers, g = s.props, p = g.length;
    let m = 0, b;
    for (; p > m; )
      b = g[m], f[b.type].render(t, d, b, n, r, o), ++m;
    t.addChild(d);
  }
}), ow = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.hydrateLetElement, Oi.mix();
  }
  render(t, e, s, n, r, o) {
    e.remove();
    const a = s.instructions, l = s.toBindingContext, c = t.container, h = a.length;
    let u, d, f = 0;
    for (; h > f; )
      u = a[f], d = hs(r, u.from, cs), t.addBinding(new Oi(c, o, d, u.to, l, t.strict ?? !1)), ++f;
  }
}), aw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.refBinding;
  }
  render(t, e, s, n, r) {
    t.addBinding(new nc(t.container, hs(r, s.from, cs), ew(e, s.to), t.strict ?? !1));
  }
}), lw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.interpolation, Ii.mix();
  }
  render(t, e, s, n, r, o) {
    const a = t.container, l = new qy(t, a, o, n.domQueue, hs(r, s.from, ky), Ca(e), s.to, Ot, t.strict ?? !1);
    if (s.to === "class" && l.target.nodeType > 0) {
      const c = a.get(Tg(Yo));
      l.useAccessor(new ka(l.target, c));
    }
    t.addBinding(l);
  }
}), cw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.propertyBinding, ce.mix();
  }
  render(t, e, s, n, r, o) {
    const a = t.container, l = new ce(t, a, o, n.domQueue, hs(r, s.from, cs), Ca(e), s.to, s.mode, t.strict ?? !1);
    if (s.to === "class" && l.target.nodeType > 0) {
      const c = a.get(Tg(Yo));
      l.useTargetObserver(new ka(l.target, c));
    }
    t.addBinding(l);
  }
}), hw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.iteratorBinding, ce.mix();
  }
  render(t, e, s, n, r, o) {
    t.addBinding(new ce(t, t.container, o, n.domQueue, hs(r, s.forOf, Cy), Ca(e), s.to, Ot, t.strict ?? !1));
  }
}), uw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.textBinding, Ei.mix();
  }
  render(t, e, s, n, r, o) {
    t.addBinding(new Ei(t, t.container, o, n.domQueue, n, hs(r, s.from, cs), e, t.strict ?? !1));
  }
}), dw = vt("IListenerBindingOptions", (i) => i.singleton(class {
  constructor() {
    this.p = D(ne), this.prevent = !1, this.onError = (t, e) => {
      const s = new this.p.CustomEvent("au-event-error", { cancelable: !0, detail: { event: t, error: e } });
      if (this.p.window.dispatchEvent(s), !s.defaultPrevented)
        throw e;
    };
  }
})), fw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.listenerBinding, this._modifierHandler = D(xg), this._defaultOptions = D(dw), _n.mix();
  }
  render(t, e, s, n, r) {
    t.addBinding(new _n(t.container, hs(r, s.from, Sy), e, s.to, new Qy(this._defaultOptions.prevent, s.capture, this._defaultOptions.onError), this._modifierHandler.getHandler(s.to, s.modifier), t.strict ?? !1));
  }
}), pw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.setAttribute;
  }
  render(t, e, s) {
    e.setAttribute(s.to, s.value);
  }
}), gw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.setClassAttribute;
  }
  render(t, e, s) {
    kw(e.classList, s.value);
  }
}), mw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.setStyleAttribute;
  }
  render(t, e, s) {
    e.style.cssText += s.value;
  }
}), bw = [
  "height",
  "width",
  "border-width",
  "padding",
  "padding-left",
  "padding-right",
  "padding-top",
  "padding-right",
  "padding-inline",
  "padding-block",
  "margin",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-bottom",
  "margin-inline",
  "margin-block",
  "top",
  "right",
  "bottom",
  "left"
], _w = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.stylePropertyBinding, ce.mix();
  }
  render(t, e, s, n, r, o) {
    if (bw.includes(s.to)) {
      t.addBinding(new vw(t, t.container, o, n.domQueue, hs(r, s.from, cs), e.style, s.to, Ot, t.strict ?? !1));
      return;
    }
    t.addBinding(new ce(t, t.container, o, n.domQueue, hs(r, s.from, cs), e.style, s.to, Ot, t.strict ?? !1));
  }
});
class vw extends ce {
  updateTarget(t) {
    return typeof t == "number" && t > 0 && console.warn(`[DEV]: Setting number ${t} as value for style.${this.targetProperty}. Did you meant "${t}px"?`), super.updateTarget(t);
  }
}
const yw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.attributeBinding, Pi.mix();
  }
  render(t, e, s, n, r, o) {
    const a = t.container, l = a.has(Yo, !1) ? a.get(Yo) : null;
    t.addBinding(new Pi(t, a, o, n.domQueue, hs(r, s.from, cs), e, s.attr, l == null ? s.to : s.to.split(/\s/g).map((c) => l[c] ?? c).join(" "), Ot, t.strict ?? !1));
  }
}), ww = /* @__PURE__ */ Qt(class {
  constructor() {
    this._compiler = D(ua), this._rendering = D(ui), this.target = Ht.spreadTransferedBinding;
  }
  render(t, e, s, n, r, o) {
    wa.create(t.container.get(Yi), e, void 0, this._rendering, this._compiler, n, r, o).forEach((a) => t.addBinding(a));
  }
}), xw = /* @__PURE__ */ Qt(class {
  constructor() {
    this.target = Ht.spreadValueBinding, es.mix();
  }
  render(t, e, s, n, r, o) {
    const a = s.target;
    if (a === "$bindables")
      t.addBinding(new es(t, e.viewModel, Zc(e.definition.bindables), r.parse(s.from, cs), o, t.container, n.domQueue, t.strict ?? !1));
    else
      throw B(820, a);
  }
});
function kw(i, t) {
  const e = t.length;
  let s = 0;
  for (let n = 0; n < e; ++n)
    t.charCodeAt(n) === 32 ? (n !== s && i.add(t.slice(s, n)), s = n + 1) : n + 1 === e && i.add(t.slice(s));
}
const Ig = "IController", Eg = "IInstruction", Cw = "IRenderLocation", Og = "ISlotsInfo";
function Sw(i, t, e, s, n, r) {
  const o = t.container.createChild();
  return Aa(o, e, i), xt(o, Sa, new $t(Ig, t)), xt(o, Nn, new $t(Eg, s)), xt(o, ue, n == null ? Lg : new $g(n)), xt(o, Ce, Bg), xt(o, Sg, r == null ? Fg : new $t(Og, r)), o;
}
class Rg {
  get $isResolver() {
    return !0;
  }
  constructor(t) {
    this.f = t;
  }
  resolve() {
    const t = this.f;
    if (t === null)
      throw B(
        755
        /* ErrorNames.view_factory_provider_not_ready */
      );
    if (!at(t.name) || t.name.length === 0)
      throw B(
        756
        /* ErrorNames.view_factory_invalid_name */
      );
    return t;
  }
}
function Dg(i, t, e, s, n, r, o, a) {
  const l = e instanceof ge ? e : e.$controller, c = l.container.createChild();
  return Aa(c, s, i), xt(c, Sa, new $t(Ig, l)), xt(c, Nn, new $t(Eg, n)), xt(c, ue, o == null ? Lg : new $t(Cw, o)), xt(c, Ce, r == null ? Bg : new Rg(r)), xt(
    c,
    Sg,
    Fg
  ), { vm: c.invoke(t.Type), ctn: c };
}
class $g {
  get name() {
    return "IRenderLocation";
  }
  get $isResolver() {
    return !0;
  }
  constructor(t) {
    this._location = t;
  }
  resolve() {
    return this._location;
  }
}
const Lg = new $g(null), Bg = new Rg(null), Fg = new $t(Og, new Ag(tt)), ui = /* @__PURE__ */ vt("IRendering", (i) => i.singleton(Aw));
class Aw {
  get renderers() {
    return this._renderers ?? (this._renderers = this._ctn.getAll(Pg, !1).reduce((t, e) => {
      var s;
      return t[e.target] !== void 0 && console.warn(`[DEV:aurelia] Renderer for target ${e.target} already exists.`), t[s = e.target] ?? (t[s] = e), t;
    }, mt()));
  }
  constructor() {
    this._compilationCache = /* @__PURE__ */ new WeakMap(), this._fragmentCache = /* @__PURE__ */ new WeakMap();
    const t = this._ctn = D(Ln).root, e = this._platform = t.get(ne);
    this._exprParser = t.get(Fn), this._observerLocator = t.get(zn), this._marker = e.document.createElement("au-m"), this._empty = new ul(e, e.document.createDocumentFragment());
  }
  compile(t, e) {
    const s = e.get(ua), n = this._compilationCache;
    let r = n.get(t);
    return r == null && n.set(t, r = se.create(t.needsCompile ? s.compile(t, e) : t)), r;
  }
  getViewFactory(t, e) {
    return new ya(e, se.getOrCreate(t));
  }
  createNodes(t) {
    if (t.enhance === !0)
      return new ul(this._platform, this._transformMarker(t.template));
    let e, s = !1;
    const n = this._fragmentCache, r = this._platform, o = r.document;
    if (n.has(t))
      e = n.get(t);
    else {
      const a = t.template;
      let l;
      a == null ? e = null : a instanceof r.Node ? a.nodeName === "TEMPLATE" ? (e = a.content, s = !0) : (e = o.createDocumentFragment()).appendChild(a.cloneNode(!0)) : (l = o.createElement("template"), at(a) && (l.innerHTML = a), e = l.content, s = !0), this._transformMarker(e), n.set(t, e);
    }
    return e == null ? this._empty : new ul(this._platform, s ? o.importNode(e, !0) : o.adoptNode(e.cloneNode(!0)));
  }
  render(t, e, s, n) {
    const r = s.instructions, o = this.renderers, a = e.length;
    let l = 0, c = 0, h = r.length, u, d, f;
    if (a !== h)
      throw B(757, a, h);
    if (a > 0)
      for (; a > l; ) {
        for (u = r[l], f = e[l], c = 0, h = u.length; h > c; )
          d = u[c], o[d.type].render(t, f, d, this._platform, this._exprParser, this._observerLocator), ++c;
        ++l;
      }
    if (n != null && (u = s.surrogates, (h = u.length) > 0))
      for (c = 0; h > c; )
        d = u[c], o[d.type].render(t, n, d, this._platform, this._exprParser, this._observerLocator), ++c;
  }
  /** @internal */
  _transformMarker(t) {
    if (t == null)
      return null;
    const e = this._platform.document.createTreeWalker(
      t,
      /* NodeFilter.SHOW_COMMENT */
      128
    );
    let s;
    for (; (s = e.nextNode()) != null; )
      s.nodeValue === "au*" && s.parentNode.replaceChild(e.currentNode = this._marker.cloneNode(), s);
    return t;
  }
}
const $u = /* @__PURE__ */ vt("IShadowDOMStyles"), Mw = /* @__PURE__ */ vt("IShadowDOMGlobalStyles", (i) => i.instance({ applyTo: ns })), { enter: Tw, exit: Pw } = C0, { wrap: Iw, unwrap: Ew } = ay;
class Vg {
  get value() {
    return this._value;
  }
  constructor(t, e, s, n, r) {
    this.obj = t, this.$get = s, this.useProxy = r, this.isBound = !1, this.running = !1, this._value = void 0, this._callback = n, this.oL = e;
  }
  handleChange() {
    this.run();
  }
  handleCollectionChange() {
    this.run();
  }
  bind() {
    this.isBound || (this.compute(), this.isBound = !0);
  }
  unbind() {
    this.isBound && (this.isBound = !1, this.obs.clearAll());
  }
  run() {
    if (!this.isBound || this.running)
      return;
    const t = this.obj, e = this._value, s = this.compute();
    Os(s, e) || this._callback.call(t, s, e, t);
  }
  compute() {
    this.running = !0, this.obs.version++;
    try {
      return Tw(this), this._value = Ew(this.$get.call(void 0, this.useProxy ? Iw(this.obj) : this.obj, this));
    } finally {
      this.obs.clear(), this.running = !1, Pw(this);
    }
  }
}
We(Vg, null);
class rc {
  get value() {
    return this._value;
  }
  constructor(t, e, s, n, r) {
    this.scope = t, this.l = e, this.oL = s, this.isBound = !1, this.boundFn = !1, this.obj = t.bindingContext, this._expression = n, this._callback = r;
  }
  handleChange(t) {
    const e = this._expression, s = this.obj, n = this._value;
    e.$kind === "AccessScope" && this.obs.count === 1 || (this.obs.version++, t = Tt(e, this.scope, this, this), this.obs.clear()), Os(t, n) || (this._value = t, this._callback.call(s, t, n, s));
  }
  bind() {
    this.isBound || (this.obs.version++, this._value = Tt(this._expression, this.scope, this, this), this.obs.clear(), this.isBound = !0);
  }
  unbind() {
    this.isBound && (this.isBound = !1, this.obs.clearAll(), this._value = void 0);
  }
}
We(rc, null), Fs(rc);
class ge {
  get lifecycleHooks() {
    return this._lifecycleHooks;
  }
  get isActive() {
    return (this.state & (xe | Ri)) > 0 && (this.state & wr) === 0;
  }
  get name() {
    var t;
    if (this.parent === null)
      switch (this.vmKind) {
        case Ai:
          return `[${this.definition.name}]`;
        case Pe:
          return this.definition.name;
        case Jt:
          return this.viewFactory.name;
      }
    switch (this.vmKind) {
      case Ai:
        return `${this.parent.name}>[${this.definition.name}]`;
      case Pe:
        return `${this.parent.name}>${this.definition.name}`;
      case Jt:
        return this.viewFactory.name === ((t = this.parent.definition) == null ? void 0 : t.name) ? `${this.parent.name}[view]` : `${this.parent.name}[view:${this.viewFactory.name}]`;
    }
  }
  get viewModel() {
    return this._vm;
  }
  set viewModel(t) {
    this._vm = t, this._vmHooks = t == null || this.vmKind === Jt ? vn.none : new vn(t);
  }
  get strict() {
    var t;
    return (t = this.definition) == null ? void 0 : t.strict;
  }
  constructor(t, e, s, n, r, o, a) {
    this.container = t, this.vmKind = e, this.definition = s, this.viewFactory = n, this.host = o, this.head = null, this.tail = null, this.next = null, this.parent = null, this.bindings = null, this.children = null, this.hasLockedScope = !1, this.scope = null, this.isBound = !1, this._isBindingDone = !1, this.hostController = null, this.mountTarget = Ng, this.shadowRoot = null, this.nodes = null, this.location = null, this._lifecycleHooks = null, this.state = ll, this._fullyNamed = !1, this.$initiator = null, this.$resolve = void 0, this.$reject = void 0, this.$promise = void 0, this._activatingStack = 0, this._detachingStack = 0, this._unbindingStack = 0, this._vm = r, this._vmHooks = e === Jt ? vn.none : new vn(r), this.logger = null, this.debug = !1, this.location = a, this._rendering = t.root.get(ui), this.coercion = e === Jt ? void 0 : t.get(Dw);
  }
  static getCached(t) {
    return js.get(t);
  }
  static getCachedOrThrow(t) {
    const e = ge.getCached(t);
    if (e === void 0)
      throw B(500, t);
    return e;
  }
  /**
   * Create a controller for a custom element based on a given set of parameters
   *
   * @param ctn - The own container of the custom element
   * @param viewModel - The view model object (can be any object if a definition is specified)
   *
   * Semi private API
   */
  static $el(t, e, s, n, r = void 0, o = null) {
    if (js.has(e))
      return js.get(e);
    if (r == null)
      try {
        r = Ug(e.constructor);
      } catch (c) {
        throw console.error(`[DEV:aurelia] Custom element definition not found for creating a controller with host: <${s.nodeName} /> and component ${e.constructor.name || "(Anonymous) class"}`), c;
      }
    xt(t, r.Type, new $t(r.key, e, r.Type));
    const a = new ge(
      /* container      */
      t,
      /* vmKind         */
      Pe,
      /* definition     */
      r,
      /* viewFactory    */
      null,
      /* viewModel      */
      e,
      /* host           */
      s,
      /* location       */
      o
    ), l = t.get($f(Yi));
    return r.dependencies.length > 0 && t.register(...r.dependencies), xt(t, Yi, new $t("IHydrationContext", new jg(a, n, l))), js.set(e, a), (n == null || n.hydrate !== !1) && a._hydrateCustomElement(n), a;
  }
  /**
   * Create a controller for a custom attribute based on a given set of parameters
   *
   * @param ctn - own container associated with the custom attribute object
   * @param viewModel - the view model object
   * @param host - host element where this custom attribute is used
   * @param flags - todo(comment)
   * @param definition - the definition of the custom attribute,
   * will be used to override the definition associated with the view model object contructor if given
   */
  static $attr(t, e, s, n) {
    if (js.has(e))
      return js.get(e);
    n = n ?? eh(e.constructor), xt(t, n.Type, new $t(n.key, e, n.Type));
    const r = new ge(
      /* own ct         */
      t,
      /* vmKind         */
      Ai,
      /* definition     */
      n,
      /* viewFactory    */
      null,
      /* viewModel      */
      e,
      /* host           */
      s,
      /* location       */
      null
    );
    return n.dependencies.length > 0 && t.register(...n.dependencies), js.set(e, r), r._hydrateCustomAttribute(), r;
  }
  /**
   * Create a synthetic view (controller) for a given factory
   *
   * @param viewFactory - todo(comment)
   * @param flags - todo(comment)
   * @param parentController - the parent controller to connect the created view with. Used in activation
   *
   * Semi private API
   */
  static $view(t, e = void 0) {
    const s = new ge(
      /* container      */
      t.container,
      /* vmKind         */
      Jt,
      /* definition     */
      null,
      /* viewFactory    */
      t,
      /* viewModel      */
      null,
      /* host           */
      null,
      /* location       */
      null
    );
    return s.parent = e ?? null, s._hydrateSynthetic(), s;
  }
  /** @internal */
  _hydrateCustomElement(t) {
    this.logger = this.container.get(ji).root, this.debug = this.logger.config.level <= c_.debug, this.debug && (this.logger = this.logger.scopeTo(this.name));
    const e = this.container, s = this._vm, n = this.definition;
    this.scope = zt.create(s, null, !0), n.watches.length > 0 && Fu(this, e, n, s), Lu(this, n, s), this._lifecycleHooks = Eu.resolve(e), e.register(n.Type), n.injectable !== null && xt(e, n.injectable, new $t("definition.injectable", s)), (t == null || t.hydrate !== !1) && (this._hydrate(t == null ? void 0 : t.hostController), this._hydrateChildren());
  }
  /** @internal */
  _hydrate(t) {
    this._lifecycleHooks.hydrating != null && this._lifecycleHooks.hydrating.forEach(Vw, this), this._vmHooks._hydrating && (this.debug && this.logger.trace("invoking hydrating() hook"), this._vm.hydrating(this));
    const e = this.definition, s = this._compiledDef = this._rendering.compile(e, this.container), n = s.shadowOptions, r = s.hasSlots, o = s.containerless;
    let a = this.host, l = this.location, c = !1;
    if (t != null ? (this.hostController = t, c = !0) : (this.hostController = Li(a, Rw)) !== null && (a = this.host = this.container.root.get(ne).document.createElement(e.name), c = !0), c && o && l == null && (l = this.location = Rr(a)), te(a, Gt, this), te(a, e.key, this), n !== null || r) {
      if (l != null)
        throw B(
          501
          /* ErrorNames.controller_no_shadow_on_containerless */
        );
      te(this.shadowRoot = a.attachShadow(n ?? Lw), Gt, this), te(this.shadowRoot, e.key, this), this.mountTarget = Ci;
    } else l != null ? (te(l, Gt, this), te(l, e.key, this), this.mountTarget = Si) : this.mountTarget = ki;
    this._vm.$controller = this, this.nodes = this._rendering.createNodes(s), this._lifecycleHooks.hydrated !== void 0 && this._lifecycleHooks.hydrated.forEach(Nw, this), this._vmHooks._hydrated && (this.debug && this.logger.trace("invoking hydrated() hook"), this._vm.hydrated(this));
  }
  /** @internal */
  _hydrateChildren() {
    this._rendering.render(
      /* controller */
      this,
      /* targets    */
      this.nodes.findTargets(),
      /* definition */
      this._compiledDef,
      /* host       */
      this.host
    ), this._lifecycleHooks.created !== void 0 && this._lifecycleHooks.created.forEach(Vu, this), this._vmHooks._created && (this.debug && this.logger.trace("invoking created() hook"), this._vm.created(this));
  }
  /** @internal */
  _hydrateCustomAttribute() {
    const t = this.definition, e = this._vm;
    t.watches.length > 0 && Fu(this, this.container, t, e), Lu(this, t, e), e.$controller = this, this._lifecycleHooks = Eu.resolve(this.container), this._lifecycleHooks.created !== void 0 && this._lifecycleHooks.created.forEach(Vu, this), this._vmHooks._created && (this.debug && this.logger.trace("invoking created() hook"), this._vm.created(this));
  }
  /** @internal */
  _hydrateSynthetic() {
    this._compiledDef = this._rendering.compile(this.viewFactory.def, this.container), this._rendering.render(
      /* controller */
      this,
      /* targets    */
      (this.nodes = this._rendering.createNodes(this._compiledDef)).findTargets(),
      /* definition */
      this._compiledDef,
      /* host       */
      void 0
    );
  }
  activate(t, e, s) {
    switch (this.state) {
      case ll:
      case yn:
        if (!(e === null || e.isActive))
          return;
        this.state = xe;
        break;
      case Ri:
        return;
      case zs:
        throw B(502, this.name);
      default:
        throw B(503, this.name, Bw(this.state));
    }
    switch (this.parent = e, this.debug && !this._fullyNamed && (this._fullyNamed = !0, (this.logger ?? (this.logger = this.container.get(ji).root.scopeTo(this.name))).trace("activate()")), this.vmKind) {
      case Pe:
        this.scope.parent = s ?? null;
        break;
      case Ai:
        this.scope = s ?? null;
        break;
      case Jt:
        if (s == null)
          throw B(504, this.name);
        this.hasLockedScope || (this.scope = s);
        break;
    }
    this.$initiator = t, this._enterActivating();
    let n;
    return this.vmKind !== Jt && this._lifecycleHooks.binding != null && (this.debug && this.logger.trace("lifecycleHooks.binding()"), n = Wt(...this._lifecycleHooks.binding.map(jw, this))), this._vmHooks._binding && (this.debug && this.logger.trace("binding()"), n = Wt(n, this._vm.binding(this.$initiator, this.parent))), jt(n) ? (this._ensurePromise(), n.then(() => {
      this._isBindingDone = !0, this.state !== xe ? this._leaveActivating() : this.bind();
    }).catch((r) => {
      this._reject(r);
    }), this.$promise) : (this._isBindingDone = !0, this.bind(), this.$promise);
  }
  bind() {
    this.debug && this.logger.trace("bind()");
    let t = 0, e = 0, s;
    if (this.bindings !== null)
      for (t = 0, e = this.bindings.length; e > t; )
        this.bindings[t].bind(this.scope), ++t;
    if (this.vmKind !== Jt && this._lifecycleHooks.bound != null && (this.debug && this.logger.trace("lifecycleHooks.bound()"), s = Wt(...this._lifecycleHooks.bound.map(zw, this))), this._vmHooks._bound && (this.debug && this.logger.trace("bound()"), s = Wt(s, this._vm.bound(this.$initiator, this.parent))), jt(s)) {
      this._ensurePromise(), s.then(() => {
        this.isBound = !0, this.state !== xe ? this._leaveActivating() : this._attach();
      }).catch((n) => {
        this._reject(n);
      });
      return;
    }
    this.isBound = !0, this._attach();
  }
  /** @internal */
  _append(...t) {
    switch (this.mountTarget) {
      case ki:
        this.host.append(...t);
        break;
      case Ci:
        this.shadowRoot.append(...t);
        break;
      case Si: {
        let e = 0;
        for (; e < t.length; ++e)
          this.location.parentNode.insertBefore(t[e], this.location);
        break;
      }
    }
  }
  /** @internal */
  _attach() {
    if (this.debug && this.logger.trace("attach()"), this.hostController !== null)
      switch (this.mountTarget) {
        case ki:
        case Ci:
          this.hostController._append(this.host);
          break;
        case Si:
          this.hostController._append(this.location.$start, this.location);
          break;
      }
    switch (this.mountTarget) {
      case ki:
        this.nodes.appendTo(this.host, this.definition != null && this.definition.enhance);
        break;
      case Ci: {
        const s = this.container;
        (s.has($u, !1) ? s.get($u) : s.get(Mw)).applyTo(this.shadowRoot), this.nodes.appendTo(this.shadowRoot);
        break;
      }
      case Si:
        this.nodes.insertBefore(this.location);
        break;
    }
    let t = 0, e;
    if (this.vmKind !== Jt && this._lifecycleHooks.attaching != null && (this.debug && this.logger.trace("lifecycleHooks.attaching()"), e = Wt(...this._lifecycleHooks.attaching.map(Hw, this))), this._vmHooks._attaching && (this.debug && this.logger.trace("attaching()"), e = Wt(e, this._vm.attaching(this.$initiator, this.parent))), jt(e) && (this._ensurePromise(), this._enterActivating(), e.then(() => {
      this._leaveActivating();
    }).catch((s) => {
      this._reject(s);
    })), this.children !== null)
      for (; t < this.children.length; ++t)
        this.children[t].activate(this.$initiator, this, this.scope);
    this._leaveActivating();
  }
  deactivate(t, e) {
    var o;
    let s;
    switch (this.state & ~wn) {
      case Ri:
        this.state = wr;
        break;
      case xe:
        this.state = wr, s = (o = this.$promise) == null ? void 0 : o.catch(
          (a) => {
            this.logger.warn("The activation error will be ignored, as the controller is already scheduled for deactivation. The activation was rejected with: %s", a);
          }
        );
        break;
      case ll:
      case yn:
      case zs:
      case yn | zs:
        return;
      default:
        throw B(505, this.name, this.state);
    }
    this.debug && this.logger.trace("deactivate()"), this.$initiator = t, t === this && this._enterDetaching();
    let n = 0, r;
    if (this.children !== null)
      for (n = 0; n < this.children.length; ++n)
        this.children[n].deactivate(t, this);
    return X(s, () => {
      if (this.isBound && (this.vmKind !== Jt && this._lifecycleHooks.detaching != null && (this.debug && this.logger.trace("lifecycleHooks.detaching()"), r = Wt(...this._lifecycleHooks.detaching.map(Uw, this))), this._vmHooks._detaching && (this.debug && this.logger.trace("detaching()"), r = Wt(r, this._vm.detaching(this.$initiator, this.parent)))), jt(r) && (this._ensurePromise(), t._enterDetaching(), r.then(() => {
        t._leaveDetaching();
      }).catch((a) => {
        t._reject(a);
      })), t.head === null ? t.head = this : t.tail.next = this, t.tail = this, t === this)
        return this._leaveDetaching(), this.$promise;
    });
  }
  removeNodes() {
    switch (this.vmKind) {
      case Pe:
      case Jt:
        this.nodes.remove(), this.nodes.unlink();
    }
    if (this.hostController !== null)
      switch (this.mountTarget) {
        case ki:
        case Ci:
          this.host.remove();
          break;
        case Si:
          this.location.$start.remove(), this.location.remove();
          break;
      }
  }
  unbind() {
    this.debug && this.logger.trace("unbind()");
    let t = 0;
    if (this.bindings !== null)
      for (; t < this.bindings.length; ++t)
        this.bindings[t].unbind();
    switch (this.parent = null, this.vmKind) {
      case Ai:
        this.scope = null;
        break;
      case Jt:
        this.hasLockedScope || (this.scope = null), (this.state & wn) === wn && !this.viewFactory.tryReturnToCache(this) && this.$initiator === this && this.dispose();
        break;
      case Pe:
        this.scope.parent = null;
        break;
    }
    this.state = yn, this.$initiator = null, this._resolve();
  }
  /** @internal */
  _ensurePromise() {
    this.$promise === void 0 && (this.$promise = new Promise((t, e) => {
      this.$resolve = t, this.$reject = e;
    }), this.$initiator !== this && this.parent._ensurePromise());
  }
  /** @internal */
  _resolve() {
    this.$promise !== void 0 && (cl = this.$resolve, this.$resolve = this.$reject = this.$promise = void 0, cl(), cl = void 0);
  }
  /** @internal */
  _reject(t) {
    this.$promise !== void 0 && (hl = this.$reject, this.$resolve = this.$reject = this.$promise = void 0, hl(t), hl = void 0), this.$initiator !== this && this.parent._reject(t);
  }
  /** @internal */
  _enterActivating() {
    ++this._activatingStack, this.$initiator !== this && this.parent._enterActivating();
  }
  /** @internal */
  _leaveActivating() {
    if (this.state !== xe) {
      --this._activatingStack, this._resolve(), this.$initiator !== this && this.parent._leaveActivating();
      return;
    }
    if (--this._activatingStack === 0) {
      if (this.vmKind !== Jt && this._lifecycleHooks.attached != null && (_i = Wt(...this._lifecycleHooks.attached.map(Ww, this))), this._vmHooks._attached && (this.debug && this.logger.trace("attached()"), _i = Wt(_i, this._vm.attached(this.$initiator))), jt(_i)) {
        this._ensurePromise(), _i.then(() => {
          this.state = Ri, this._resolve(), this.$initiator !== this && this.parent._leaveActivating();
        }).catch((t) => {
          this._reject(t);
        }), _i = void 0;
        return;
      }
      _i = void 0, this.state = Ri, this._resolve();
    }
    this.$initiator !== this && this.parent._leaveActivating();
  }
  /** @internal */
  _enterDetaching() {
    ++this._detachingStack;
  }
  /** @internal */
  _leaveDetaching() {
    if (--this._detachingStack === 0) {
      this.debug && this.logger.trace("detach()"), this._enterUnbinding(), this.removeNodes();
      let t = this.$initiator.head, e;
      for (; t !== null; )
        t !== this && (t.debug && t.logger.trace("detach()"), t.removeNodes()), t._isBindingDone && (t.vmKind !== Jt && t._lifecycleHooks.unbinding != null && (e = Wt(...t._lifecycleHooks.unbinding.map(qw, t))), t._vmHooks._unbinding && (t.debug && t.logger.trace("unbinding()"), e = Wt(e, t.viewModel.unbinding(t.$initiator, t.parent)))), jt(e) && (this._ensurePromise(), this._enterUnbinding(), e.then(() => {
          this._leaveUnbinding();
        }).catch((s) => {
          this._reject(s);
        })), e = void 0, t = t.next;
      this._leaveUnbinding();
    }
  }
  /** @internal */
  _enterUnbinding() {
    ++this._unbindingStack;
  }
  /** @internal */
  _leaveUnbinding() {
    if (--this._unbindingStack === 0) {
      this.debug && this.logger.trace("unbind()");
      let t = this.$initiator.head, e = null;
      for (; t !== null; )
        t !== this && (t._isBindingDone = !1, t.isBound = !1, t.unbind()), e = t.next, t.next = null, t = e;
      this.head = this.tail = null, this._isBindingDone = !1, this.isBound = !1, this.unbind();
    }
  }
  addBinding(t) {
    this.bindings === null ? this.bindings = [t] : this.bindings[this.bindings.length] = t;
  }
  addChild(t) {
    this.children === null ? this.children = [t] : this.children[this.children.length] = t;
  }
  is(t) {
    switch (this.vmKind) {
      case Ai:
      case Pe:
        return this.definition.name === t;
      case Jt:
        return this.viewFactory.name === t;
    }
  }
  lockScope(t) {
    this.scope = t, this.hasLockedScope = !0;
  }
  setHost(t) {
    return this.vmKind === Pe && (te(t, Gt, this), te(t, this.definition.key, this)), this.host = t, this.mountTarget = ki, this;
  }
  setShadowRoot(t) {
    return this.vmKind === Pe && (te(t, Gt, this), te(t, this.definition.key, this)), this.shadowRoot = t, this.mountTarget = Ci, this;
  }
  setLocation(t) {
    return this.vmKind === Pe && (te(t, Gt, this), te(t, this.definition.key, this)), this.location = t, this.mountTarget = Si, this;
  }
  release() {
    this.state |= wn;
  }
  dispose() {
    this.debug && this.logger.trace("dispose()"), (this.state & zs) !== zs && (this.state |= zs, this._vmHooks._dispose && this._vm.dispose(), this.children !== null && (this.children.forEach(Fw), this.children = null), this.hostController = null, this.scope = null, this.nodes = null, this.location = null, this.viewFactory = null, this._vm !== null && (js.delete(this._vm), this._vm = null), this._vm = null, this.host = null, this.shadowRoot = null, this.container.disposeResolvers());
  }
  accept(t) {
    if (t(this) === !0 || this._vmHooks._accept && this._vm.accept(t) === !0)
      return !0;
    if (this.children !== null) {
      const { children: e } = this;
      for (let s = 0, n = e.length; s < n; ++s)
        if (e[s].accept(t) === !0)
          return !0;
    }
  }
}
const js = /* @__PURE__ */ new WeakMap(), Ng = 0, ki = 1, Ci = 2, Si = 3, Ow = Bs({
  none: Ng,
  host: ki,
  shadowRoot: Ci,
  location: Si
}), Rw = { optional: !0 }, Dw = r_(Kp);
function Lu(i, t, e) {
  var c, h;
  const s = t.bindables, n = og(s), r = n.length, o = i.container.get(zn), a = "propertiesChanged" in e;
  if (r === 0)
    return;
  const l = a ? (() => {
    let u = {}, d, f = 0;
    const g = Promise.resolve(), p = () => {
      d == null && (d = g.then(() => {
        var b;
        const m = u;
        u = {}, f = 0, d = void 0, i.isBound && ((b = e.propertiesChanged) == null || b.call(e, m), f > 0 && p());
      }));
    };
    return (m, b, _) => {
      u[m] = { newValue: b, oldValue: _ }, f++, p();
    };
  })() : ns;
  for (let u = 0; u < r; ++u) {
    const d = n[u], f = s[d], g = f.callback, p = o.getObserver(e, d);
    if (f.set !== ns && ((c = p.useCoercer) == null ? void 0 : c.call(p, f.set, i.coercion)) !== !0)
      throw B(507, d);
    if (e[g] != null || e.propertyChanged != null || a) {
      const m = (b, _) => {
        var w, x;
        i.isBound && ((w = e[g]) == null || w.call(e, b, _), (x = e.propertyChanged) == null || x.call(e, d, b, _), l(d, b, _));
      };
      if (((h = p.useCallback) == null ? void 0 : h.call(p, m)) !== !0)
        throw B(508, d);
    }
  }
}
const Bu = /* @__PURE__ */ new Map(), $w = (i) => {
  let t = Bu.get(i);
  return t == null && (t = new pr(i, 0), Bu.set(i, t)), t;
};
function Fu(i, t, e, s) {
  const n = t.get(zn), r = t.get(Fn), o = e.watches, a = i.vmKind === Pe ? i.scope : zt.create(s, null, !0), l = o.length;
  let c, h, u, d = 0;
  for (; l > d; ++d) {
    if ({ expression: c, callback: h } = o[d], h = pt(h) ? h : Reflect.get(s, h), !pt(h))
      throw B(506, h);
    pt(c) ? i.addBinding(new Vg(s, n, c, h, !0)) : (u = at(c) ? r.parse(c, cs) : $w(c), i.addBinding(new rc(a, t, n, u, h)));
  }
}
class vn {
  constructor(t) {
    this._define = "define" in t, this._hydrating = "hydrating" in t, this._hydrated = "hydrated" in t, this._created = "created" in t, this._binding = "binding" in t, this._bound = "bound" in t, this._attaching = "attaching" in t, this._attached = "attached" in t, this._detaching = "detaching" in t, this._unbinding = "unbinding" in t, this._dispose = "dispose" in t, this._accept = "accept" in t;
  }
}
vn.none = new vn({});
const Lw = {
  mode: "open"
}, Pe = "customElement", Ai = "customAttribute", Jt = "synthetic", ll = 0, xe = 1, Ri = 2, wr = 4, yn = 8, wn = 16, zs = 32;
function Bw(i) {
  const t = [];
  return (i & xe) === xe && t.push("activating"), (i & Ri) === Ri && t.push("activated"), (i & wr) === wr && t.push("deactivating"), (i & yn) === yn && t.push("deactivated"), (i & wn) === wn && t.push("released"), (i & zs) === zs && t.push("disposed"), t.length === 0 ? "none" : t.join("|");
}
const Sa = /* @__PURE__ */ vt("IController"), Yi = /* @__PURE__ */ vt("IHydrationContext");
class jg {
  constructor(t, e, s) {
    this.instruction = e, this.parent = s, this.controller = t;
  }
}
function Fw(i) {
  i.dispose();
}
function Vu(i) {
  i.instance.created(this._vm, this);
}
function Vw(i) {
  i.instance.hydrating(this._vm, this);
}
function Nw(i) {
  i.instance.hydrated(this._vm, this);
}
function jw(i) {
  return i.instance.binding(this._vm, this.$initiator, this.parent);
}
function zw(i) {
  return i.instance.bound(this._vm, this.$initiator, this.parent);
}
function Hw(i) {
  return i.instance.attaching(this._vm, this.$initiator, this.parent);
}
function Ww(i) {
  return i.instance.attached(this._vm, this.$initiator);
}
function Uw(i) {
  return i.instance.detaching(this._vm, this.$initiator, this.parent);
}
function qw(i) {
  return i.instance.unbinding(this._vm, this.$initiator, this.parent);
}
let cl, hl, _i;
class Kw {
}
function xn(i, t) {
  var e;
  return ((e = i.$au) == null ? void 0 : e[t]) ?? null;
}
function te(i, t, e) {
  (i.$au ?? (i.$au = new Kw()))[t] = e;
}
const Yr = /* @__PURE__ */ vt("INode"), Yw = /* @__PURE__ */ vt("IEventTarget", (i) => i.cachedCallback((t) => t.has(Zo, !0) ? t.get(Zo).host : t.get(ne).document)), ue = /* @__PURE__ */ vt("IRenderLocation"), Yo = /* @__PURE__ */ vt("ICssClassMapping"), Qo = /* @__PURE__ */ new WeakMap();
function Xo(i) {
  if (Qo.has(i))
    return Qo.get(i);
  let t = 0, e = i.nextSibling;
  for (; e !== null; ) {
    if (e.nodeType === 8)
      switch (e.textContent) {
        case "au-start":
          ++t;
          break;
        case "au-end":
          if (t-- === 0)
            return e;
      }
    e = e.nextSibling;
  }
  if (i.parentNode === null && i.nodeType === 11) {
    const s = Li(i, { optional: !0 });
    if (s == null)
      return null;
    if (s.mountTarget === Ow.shadowRoot)
      return Xo(s.host);
  }
  return i.parentNode;
}
function Qw(i, t) {
  if (i.platform !== void 0 && !(i instanceof i.platform.Node)) {
    const e = i.childNodes;
    for (let s = 0, n = e.length; s < n; ++s)
      Qo.set(e[s], t);
  } else
    Qo.set(i, t);
}
function Rr(i) {
  if (zg(i))
    return i;
  const t = i.ownerDocument.createComment("au-end"), e = t.$start = i.ownerDocument.createComment("au-start"), s = i.parentNode;
  return s !== null && (s.replaceChild(t, i), s.insertBefore(e, t)), t;
}
function zg(i) {
  return i.textContent === "au-end";
}
class ul {
  get firstChild() {
    return this._firstChild;
  }
  get lastChild() {
    return this._lastChild;
  }
  constructor(t, e) {
    this.platform = t, this.next = void 0, this._isMounted = !1, this._isLinked = !1, this.ref = null;
    const s = (this.f = e).querySelectorAll("au-m");
    let n = 0, r = s.length, o = this.t = Array(r), a, l;
    for (; r > n; )
      l = s[n], a = l.nextSibling, l.remove(), a.nodeType === 8 && (l = a, (a = a.nextSibling).$start = l), o[n] = a, ++n;
    const c = e.childNodes, h = this.childNodes = Array(r = c.length);
    for (n = 0; r > n; )
      h[n] = c[n], ++n;
    this._firstChild = e.firstChild, this._lastChild = e.lastChild;
  }
  findTargets() {
    return this.t;
  }
  insertBefore(t) {
    if (this._isLinked && this.ref)
      this.addToLinked();
    else {
      const e = t.parentNode;
      if (this._isMounted) {
        let s = this._firstChild, n;
        const r = this._lastChild;
        for (; s != null && (n = s.nextSibling, e.insertBefore(s, t), s !== r); )
          s = n;
      } else
        this._isMounted = !0, t.parentNode.insertBefore(this.f, t);
    }
  }
  appendTo(t, e = !1) {
    if (this._isMounted) {
      let s = this._firstChild, n;
      const r = this._lastChild;
      for (; s != null && (n = s.nextSibling, t.appendChild(s), s !== r); )
        s = n;
    } else
      this._isMounted = !0, e || t.appendChild(this.f);
  }
  remove() {
    if (this._isMounted) {
      this._isMounted = !1;
      const t = this.f, e = this._lastChild;
      let s, n = this._firstChild;
      for (; n !== null && (s = n.nextSibling, t.appendChild(n), n !== e); )
        n = s;
    }
  }
  addToLinked() {
    const t = this.ref, e = t.parentNode;
    if (this._isMounted) {
      let s = this._firstChild, n;
      const r = this._lastChild;
      for (; s != null && (n = s.nextSibling, e.insertBefore(s, t), s !== r); )
        s = n;
    } else
      this._isMounted = !0, e.insertBefore(this.f, t);
  }
  unlink() {
    this._isLinked = !1, this.next = void 0, this.ref = void 0;
  }
  link(t) {
    this._isLinked = !0, zg(t) ? this.ref = t : (this.next = t, this._obtainRefNode());
  }
  /** @internal */
  _obtainRefNode() {
    this.next !== void 0 ? this.ref = this.next.firstChild : this.ref = void 0;
  }
}
const Aa = (i, t, e = i.get(ne)) => (xt(i, e.HTMLElement, xt(i, e.Element, xt(i, Yr, new $t("ElementResolver", t)))), i);
function Hg(i) {
  return function(t, e) {
    return e.addInitializer(function() {
      Wg(i, this);
    }), t;
  };
}
const dl = /* @__PURE__ */ new WeakMap();
class se {
  get type() {
    return Ey;
  }
  constructor(t, e, s, n, r, o, a, l, c, h, u, d, f, g, p, m, b, _, w) {
    this.Type = t, this.name = e, this.aliases = s, this.key = n, this.capture = r, this.template = o, this.instructions = a, this.dependencies = l, this.injectable = c, this.needsCompile = h, this.surrogates = u, this.bindables = d, this.containerless = f, this.shadowOptions = g, this.hasSlots = p, this.enhance = m, this.watches = b, this.strict = _, this.processContent = w;
  }
  static create(t, e = null) {
    if (e === null) {
      const n = t;
      if (at(n))
        throw B(761, t);
      const r = Be("name", n, Go);
      pt(n.Type) ? e = n.Type : e = qg(Tf(r));
      for (const o of Object.values(_e.from(n.bindables)))
        _e._add(o, e);
      return new se(
        e,
        r,
        Vt(n.aliases),
        Be("key", n, () => pn(r)),
        Se("capture", n, e, Me),
        Be("template", n, Ae),
        Vt(n.instructions),
        Vt(me(e, "dependencies"), n.dependencies),
        Be("injectable", n, Ae),
        Be("needsCompile", n, pl),
        Vt(n.surrogates),
        _e.from(me(e, "bindables"), n.bindables),
        Se("containerless", n, e, Me),
        Be("shadowOptions", n, Ae),
        Be("hasSlots", n, Me),
        Be("enhance", n, Me),
        Be("watches", n, Gw),
        // casting is incorrect, but it's good enough
        Be("strict", n, fl),
        Le("processContent", e, Ae)
      );
    }
    if (at(t))
      return new se(e, t, Vt(me(e, "aliases"), e.aliases), pn(t), Le("capture", e, Me), Le("template", e, Ae), Vt(me(e, "instructions"), e.instructions), Vt(me(e, "dependencies"), e.dependencies), Le("injectable", e, Ae), Le("needsCompile", e, pl), Vt(me(e, "surrogates"), e.surrogates), _e.from(..._e.getAll(e), me(e, "bindables"), e.bindables), Le("containerless", e, Me), Le("shadowOptions", e, Ae), Le("hasSlots", e, Me), Le("enhance", e, Me), Vt(sc.getDefinitions(e), e.watches), Le("strict", e, fl), Le("processContent", e, Ae));
    const s = Be("name", t, Go);
    for (const n of Object.values(_e.from(t.bindables)))
      _e._add(n, e);
    return new se(e, s, Vt(me(e, "aliases"), t.aliases, e.aliases), pn(s), Se("capture", t, e, Me), Se("template", t, e, Ae), Vt(me(e, "instructions"), t.instructions, e.instructions), Vt(me(e, "dependencies"), t.dependencies, e.dependencies), Se("injectable", t, e, Ae), Se("needsCompile", t, e, pl), Vt(me(e, "surrogates"), t.surrogates, e.surrogates), _e.from(..._e.getAll(e), me(e, "bindables"), e.bindables, t.bindables), Se("containerless", t, e, Me), Se("shadowOptions", t, e, Ae), Se("hasSlots", t, e, Me), Se("enhance", t, e, Me), Vt(t.watches, sc.getDefinitions(e), e.watches), Se("strict", t, e, fl), Se("processContent", t, e, Ae));
  }
  static getOrCreate(t) {
    if (t instanceof se)
      return t;
    if (dl.has(t))
      return dl.get(t);
    const e = se.create(t);
    return dl.set(t, e), He(e, e.Type, Gt), e;
  }
  register(t, e) {
    const s = this.Type, n = typeof e == "string" ? pn(e) : this.key, r = this.aliases;
    if (t.has(n, !1)) {
      console.warn(B(153, this.name));
      return;
    }
    t.register(t.has(s, !1) ? null : gs(s, s), Js(s, n), ...r.map((o) => Js(s, pn(o))));
  }
  toString() {
    return `au:ce:${this.name}`;
  }
}
const Xw = {
  name: void 0,
  searchParents: !1,
  optional: !1
}, Ae = () => null, fl = () => {
}, Me = () => !1, pl = () => !0, Gw = () => tt, Qi = "custom-element", Gt = /* @__PURE__ */ Zi(Qi), pn = (i) => `${Gt}:${i}`, Go = /* @__PURE__ */ ((i) => () => `unnamed-${++i}`)(0), Zw = (i, t, e) => {
  He(e, i, Ls(t));
}, Wg = (i, t) => {
  const e = se.create(i, t), s = e.Type;
  return He(e, s, Gt, ss), s;
}, Jw = (i) => {
  var t;
  return pt(i) && (ma(Gt, i) || ((t = i.$au) == null ? void 0 : t.type) === Qi);
}, Li = (i, t = Xw) => {
  if (t.name === void 0 && t.searchParents !== !0) {
    const s = xn(i, Gt);
    if (s === null) {
      if (t.optional === !0)
        return null;
      throw B(762, i);
    }
    return s;
  }
  if (t.name !== void 0) {
    if (t.searchParents !== !0) {
      const r = xn(i, Gt);
      if (r === null)
        throw B(763, i);
      return r.is(t.name) ? r : void 0;
    }
    let s = i, n = !1;
    for (; s !== null; ) {
      const r = xn(s, Gt);
      if (r !== null && (n = !0, r.is(t.name)))
        return r;
      s = Xo(s);
    }
    if (n)
      return;
    throw B(764, i);
  }
  let e = i;
  for (; e !== null; ) {
    const s = xn(e, Gt);
    if (s !== null)
      return s;
    e = Xo(e);
  }
  throw B(765, i);
}, me = (i, t) => oe(Ls(t), i), Ug = (i) => {
  const t = oe(Gt, i) ?? ti(i, Qi, se.create);
  if (t == null)
    throw B(760, i);
  return t;
}, tx = () => {
  const i = {
    // Old code is kept around. Needs to be refactored when TC39 supports argument decorator.
    // function(target: Injectable | AbstractInjectable, property: string | symbol | undefined, index?: number): Injectable | AbstractInjectable {
    //   const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target as Constructable);
    //   annotationParamtypes[index!] = $injectable;
    //   return target;
    // },
    $isInterface: !1,
    register() {
      return {
        $isResolver: !0,
        resolve(t, e) {
          return e.has(i, !0) ? e.get(i) : null;
        }
      };
    }
  };
  return i;
}, qg = /* @__PURE__ */ function() {
  const i = {
    value: "",
    writable: !1,
    enumerable: !1,
    configurable: !0
  }, t = {};
  return function(e, s = t) {
    const n = class {
    };
    return i.value = e, ag(n, "name", i), s !== t && rg(n.prototype, s), n;
  };
}(), Ee = /* @__PURE__ */ Bs({
  name: Gt,
  keyFrom: pn,
  isType: Jw,
  for: Li,
  define: Wg,
  getDefinition: Ug,
  annotate: Zw,
  getAnnotation: me,
  generateName: Go,
  createInjectable: tx,
  generateType: qg,
  find(i, t) {
    const e = i.find(Qi, t);
    return e == null ? null : oe(Gt, e) ?? ti(e, Qi, se.create) ?? null;
  }
}), Zo = /* @__PURE__ */ vt("IAppRoot");
class Nu {
  get controller() {
    return this._controller;
  }
  constructor(t, e, s, n = !1) {
    this.config = t, this.container = e, this._hydratePromise = void 0, this._useOwnAppTasks = n;
    const r = this.host = t.host;
    s.prepare(this), xt(e, Yw, new $t("IEventTarget", r)), Aa(e, r, this.platform = this._createPlatform(e, r)), this._hydratePromise = X(this._runAppTasks("creating"), () => {
      t.allowActionlessForm || r.addEventListener("submit", (d) => {
        const f = d.target, g = !f.getAttribute("action");
        f.tagName === "FORM" && g && d.preventDefault();
      }, !1);
      const o = n ? e : e.createChild(), a = t.component;
      let l;
      pt(a) ? l = o.invoke(a) : l = t.component;
      const c = { hydrate: !1, projections: null }, h = n ? se.create({ name: Go(), template: this.host, enhance: !0, strict: t.strictBinding }) : void 0, u = this._controller = ge.$el(o, l, r, c, h);
      return u._hydrateCustomElement(c), X(this._runAppTasks("hydrating"), () => (u._hydrate(), X(this._runAppTasks("hydrated"), () => {
        u._hydrateChildren(), this._hydratePromise = void 0;
      })));
    });
  }
  activate() {
    return X(this._hydratePromise, () => X(this._runAppTasks("activating"), () => X(this._controller.activate(this._controller, null, void 0), () => this._runAppTasks("activated"))));
  }
  deactivate() {
    return X(this._runAppTasks("deactivating"), () => X(this._controller.deactivate(this._controller, null), () => this._runAppTasks("deactivated")));
  }
  /** @internal */
  _runAppTasks(t) {
    const e = this.container, s = this._useOwnAppTasks && !e.has(Iu, !1) ? [] : e.getAll(Iu);
    return Wt(...s.reduce((n, r) => (r.slot === t && n.push(r.run()), n), []));
  }
  /** @internal */
  _createPlatform(t, e) {
    let s;
    if (t.has(ne, !1))
      s = t.get(ne);
    else {
      if (e.ownerDocument.defaultView === null)
        throw B(
          769
          /* ErrorNames.invalid_platform_impl */
        );
      s = new Ws(e.ownerDocument.defaultView), t.register(hg(ne, s));
    }
    return s;
  }
  dispose() {
    var t;
    (t = this._controller) == null || t.dispose();
  }
}
const ju = /* @__PURE__ */ vt("IAurelia");
let ex = class oc {
  get isRunning() {
    return this._isRunning;
  }
  get isStarting() {
    return this._isStarting;
  }
  get isStopping() {
    return this._isStopping;
  }
  get root() {
    if (this._root == null) {
      if (this.next == null)
        throw B(
          767
          /* ErrorNames.root_not_found */
        );
      return this.next;
    }
    return this._root;
  }
  constructor(t = ni.createContainer()) {
    if (this.container = t, this._isRunning = !1, this._isStarting = !1, this._isStopping = !1, this._root = void 0, this.next = void 0, this._startPromise = void 0, this._stopPromise = void 0, t.has(ju, !0) || t.has(oc, !0))
      throw B(
        768
        /* ErrorNames.aurelia_instance_existed_in_container */
      );
    xt(t, ju, new $t("IAurelia", this)), xt(t, oc, new $t("Aurelia", this)), xt(t, Zo, this._rootProvider = new $t("IAppRoot"));
  }
  register(...t) {
    return this.container.register(...t), this;
  }
  app(t) {
    return this.next = new Nu(t, this.container, this._rootProvider), this;
  }
  /**
   * @param parentController - The owning controller of the view created by this enhance call
   */
  enhance(t) {
    const e = t.container ?? this.container.createChild(), s = xt(e, Zo, new $t("IAppRoot")), n = new Nu({ host: t.host, component: t.component }, e, s, !0);
    return X(n.activate(), () => n);
  }
  async waitForIdle() {
    const t = this.root.platform;
    await t.domQueue.yield(), await t.taskQueue.yield();
  }
  start(t = this.next) {
    if (t == null)
      throw B(
        770
        /* ErrorNames.no_composition_root */
      );
    return jt(this._startPromise) ? this._startPromise : this._startPromise = X(this.stop(), () => (Reflect.set(t.host, "$aurelia", this), this._rootProvider.prepare(this._root = t), this._isStarting = !0, X(t.activate(), () => {
      this._isRunning = !0, this._isStarting = !1, this._startPromise = void 0, this._dispatchEvent(t, "au-started", t.host);
    })));
  }
  stop(t = !1) {
    if (jt(this._stopPromise))
      return this._stopPromise;
    if (this._isRunning === !0) {
      const e = this._root;
      return this._isRunning = !1, this._isStopping = !0, this._stopPromise = X(e.deactivate(), () => {
        Reflect.deleteProperty(e.host, "$aurelia"), t && e.dispose(), this._root = void 0, this._rootProvider.dispose(), this._isStopping = !1, this._dispatchEvent(e, "au-stopped", e.host);
      });
    }
  }
  dispose() {
    if (this._isRunning || this._isStopping)
      throw B(
        771
        /* ErrorNames.invalid_dispose_call */
      );
    this.container.dispose();
  }
  /** @internal */
  _dispatchEvent(t, e, s) {
    const n = new t.platform.window.CustomEvent(e, { detail: this, bubbles: !0, cancelable: !0 });
    s.dispatchEvent(n);
  }
};
const Kg = /* @__PURE__ */ vt("ISVGAnalyzer", (i) => i.singleton(sx));
class sx {
  isStandardSvgAttribute(t, e) {
    return !1;
  }
}
class Yg {
  constructor() {
    this.fns = [], this._tagAttrMap = mt(), this._globalAttrMap = mt(), this.svg = D(Kg), this.useMapping({
      LABEL: { for: "htmlFor" },
      IMG: { usemap: "useMap" },
      INPUT: {
        maxlength: "maxLength",
        minlength: "minLength",
        formaction: "formAction",
        formenctype: "formEncType",
        formmethod: "formMethod",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        inputmode: "inputMode"
      },
      TEXTAREA: { maxlength: "maxLength" },
      TD: { rowspan: "rowSpan", colspan: "colSpan" },
      TH: { rowspan: "rowSpan", colspan: "colSpan" }
    }), this.useGlobalMapping({
      accesskey: "accessKey",
      contenteditable: "contentEditable",
      tabindex: "tabIndex",
      textcontent: "textContent",
      innerhtml: "innerHTML",
      scrolltop: "scrollTop",
      scrollleft: "scrollLeft",
      readonly: "readOnly"
    });
  }
  /**
   * Allow application to teach Aurelia how to define how to map attributes to properties
   * based on element tagName
   */
  useMapping(t) {
    var o;
    let e, s, n, r;
    for (n in t) {
      e = t[n], s = (o = this._tagAttrMap)[n] ?? (o[n] = mt());
      for (r in e) {
        if (s[r] !== void 0)
          throw zu(r, n);
        s[r] = e[r];
      }
    }
  }
  /**
   * Allow applications to teach Aurelia how to define how to map attributes to properties
   * for all elements
   */
  useGlobalMapping(t) {
    const e = this._globalAttrMap;
    for (const s in t) {
      if (e[s] !== void 0)
        throw zu(s, "*");
      e[s] = t[s];
    }
  }
  /**
   * Add a given function to a list of fns that will be used
   * to check if `'bind'` command can be understood as `'two-way'` command.
   */
  useTwoWay(t) {
    this.fns.push(t);
  }
  /**
   * Returns true if an attribute should be two way bound based on an element
   */
  isTwoWay(t, e) {
    return ix(t, e) || this.fns.length > 0 && this.fns.some((s) => s(t, e));
  }
  /**
   * Retrieves the mapping information this mapper have for an attribute on an element
   */
  map(t, e) {
    var s;
    return ((s = this._tagAttrMap[t.nodeName]) == null ? void 0 : s[e]) ?? this._globalAttrMap[e] ?? (Jl(t, e, this.svg) ? e : null);
  }
}
Yg.register = Hr(rp);
function ix(i, t) {
  switch (i.nodeName) {
    case "INPUT":
      switch (i.type) {
        case "checkbox":
        case "radio":
          return t === "checked";
        default:
          return t === "value" || t === "files" || t === "value-as-number" || t === "value-as-date";
      }
    case "TEXTAREA":
    case "SELECT":
      return t === "value";
    default:
      switch (t) {
        case "textcontent":
        case "innerhtml":
          return i.hasAttribute("contenteditable");
        case "scrolltop":
        case "scrollleft":
          return !0;
        default:
          return !1;
      }
  }
}
function zu(i, t) {
  return B(719, i, t);
}
const nx = {
  register(i) {
    i.register(Wp, Yg, Qg);
  }
};
class rx {
  constructor(t, e, s) {
    this.attrs = t, this.bindables = e, this.primary = s;
  }
}
class Qg {
  constructor() {
    this._resourceCache = /* @__PURE__ */ new WeakMap(), this._bindableCache = /* @__PURE__ */ new WeakMap();
  }
  el(t, e) {
    let s = this._resourceCache.get(t);
    return s == null && this._resourceCache.set(t, s = new Hu()), e in s._element ? s._element[e] : s._element[e] = Ee.find(t, e);
  }
  attr(t, e) {
    let s = this._resourceCache.get(t);
    return s == null && this._resourceCache.set(t, s = new Hu()), e in s._attr ? s._attr[e] : s._attr[e] = sh.find(t, e);
  }
  bindables(t) {
    let e = this._bindableCache.get(t);
    if (e == null) {
      const s = t.bindables, n = mt();
      let r, o, a = !1, l, c;
      for (o in s) {
        if (r = s[o], c = r.attribute, r.primary === !0) {
          if (a)
            throw B(714, t);
          a = !0, l = r;
        } else !a && l == null && (l = r);
        n[c] = Us.create(o, r);
      }
      r == null && t.type === "custom-attribute" && (l = n.value = Us.create("value", { mode: t.defaultBindingMode ?? Gc })), this._bindableCache.set(t, e = new rx(n, s, l ?? null));
    }
    return e;
  }
}
Qg.register = Hr(Up);
class Hu {
  constructor() {
    this._element = mt(), this._attr = mt();
  }
}
const gl = mt();
class Dr {
  static forNs(t) {
    return gl[t] ?? (gl[t] = new Dr(t));
  }
  constructor(t) {
    this.ns = t, this.type = ci | ps;
  }
  getValue(t, e) {
    return t.getAttributeNS(this.ns, e);
  }
  setValue(t, e, s) {
    t == null ? e.removeAttributeNS(this.ns, s) : e.setAttributeNS(this.ns, s, t);
  }
}
xa(Dr);
class Xg {
  constructor() {
    this.type = ci | ps;
  }
  getValue(t, e) {
    return t.getAttribute(e);
  }
  setValue(t, e, s) {
    t == null ? e.removeAttribute(s) : e.setAttribute(s, t);
  }
}
xa(Xg);
const Ro = /* @__PURE__ */ new Xg();
class Bi {
  /** @internal */
  static _getSelectedOptions(t) {
    const e = [];
    if (t.length === 0)
      return e;
    const s = t.length;
    let n = 0, r;
    for (; s > n; )
      r = t[n], r.selected && (e[e.length] = Di.call(r, "model") ? r.model : r.value), ++n;
    return e;
  }
  /** @internal */
  static _defaultMatcher(t, e) {
    return t === e;
  }
  constructor(t, e, s, n) {
    this.type = ci | Jc | ps, this._value = void 0, this._oldValue = void 0, this._hasChanges = !1, this._arrayObserver = void 0, this._nodeObserver = void 0, this._observing = !1, this._listened = !1, this._el = t, this._observerLocator = n, this._config = s;
  }
  getValue() {
    return this._observing ? this._value : this._el.multiple ? Bi._getSelectedOptions(this._el.options) : this._el.value;
  }
  setValue(t) {
    this._oldValue = this._value, this._value = t, this._hasChanges = t !== this._oldValue, this._observeArray(t instanceof Array ? t : null), this._flushChanges();
  }
  /** @internal */
  _flushChanges() {
    this._hasChanges && (this._hasChanges = !1, this.syncOptions());
  }
  handleCollectionChange() {
    this.syncOptions();
  }
  syncOptions() {
    const t = this._value, e = this._el, s = Bt(t), n = e.matcher ?? Bi._defaultMatcher, r = e.options;
    let o = r.length;
    for (; o-- > 0; ) {
      const a = r[o], l = Di.call(a, "model") ? a.model : a.value;
      if (s) {
        a.selected = t.findIndex((c) => !!n(l, c)) !== -1;
        continue;
      }
      a.selected = !!n(l, t);
    }
  }
  syncValue() {
    const t = this._el, e = t.options, s = e.length, n = this._value;
    let r = 0;
    if (t.multiple) {
      if (!(n instanceof Array))
        return !0;
      let l;
      const c = t.matcher || Bi._defaultMatcher, h = [];
      for (; r < s; )
        l = e[r], l.selected && h.push(Di.call(l, "model") ? l.model : l.value), ++r;
      let u;
      for (r = 0; r < n.length; )
        u = n[r], h.findIndex((d) => !!c(u, d)) === -1 ? n.splice(r, 1) : ++r;
      for (r = 0; r < h.length; )
        u = h[r], n.findIndex((d) => !!c(u, d)) === -1 && n.push(u), ++r;
      return !1;
    }
    let o = null, a;
    for (; r < s; ) {
      if (a = e[r], a.selected) {
        o = Di.call(a, "model") ? a.model : a.value;
        break;
      }
      ++r;
    }
    return this._oldValue = this._value, this._value = o, !0;
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    (this._nodeObserver = kg(this._el, this._handleNodeChange.bind(this))).observe(this._el, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), this._observeArray(this._value instanceof Array ? this._value : null), this._observing = !0;
  }
  /**
   * Used by mixing defined method unsubscribe
   *
   * @internal
   */
  _stop() {
    var t;
    this._nodeObserver.disconnect(), (t = this._arrayObserver) == null || t.unsubscribe(this), this._nodeObserver = this._arrayObserver = void 0, this._observing = !1;
  }
  // todo: observe all kind of collection
  /** @internal */
  _observeArray(t) {
    var e;
    if ((e = this._arrayObserver) == null || e.unsubscribe(this), this._arrayObserver = void 0, t != null) {
      if (!this._el.multiple)
        throw B(
          654
          /* ErrorNames.select_observer_array_on_non_multi_select */
        );
      (this._arrayObserver = this._observerLocator.getArrayObserver(t)).subscribe(this);
    }
  }
  handleEvent() {
    this.syncValue() && this._flush();
  }
  /** @internal */
  _handleNodeChange(t) {
    this.syncOptions(), this.syncValue() && this._flush();
  }
  /** @internal */
  _flush() {
    const t = this._oldValue;
    this._oldValue = this._value, this.subs.notify(this._value, t);
  }
}
lh(Bi), ze(Bi, null);
const ox = "--";
class Gg {
  constructor(t) {
    this.obj = t, this.type = ci | ps, this._value = "", this._oldValue = "", this.styles = {}, this.version = 0, this._hasChanges = !1;
  }
  getValue() {
    return this.obj.style.cssText;
  }
  setValue(t) {
    this._value = t, this._hasChanges = t !== this._oldValue, this._flushChanges();
  }
  /** @internal */
  _getStyleTuplesFromString(t) {
    const e = [], s = /url\([^)]+$/;
    let n = 0, r = "", o, a, l, c;
    for (; n < t.length; ) {
      if (o = t.indexOf(";", n), o === -1 && (o = t.length), r += t.substring(n, o), n = o + 1, s.test(r)) {
        r += ";";
        continue;
      }
      a = r.indexOf(":"), l = r.substring(0, a).trim(), c = r.substring(a + 1).trim(), e.push([l, c]), r = "";
    }
    return e;
  }
  /** @internal */
  _getStyleTuplesFromObject(t) {
    let e, s;
    const n = [];
    for (s in t)
      if (e = t[s], e != null) {
        if (at(e)) {
          if (s.startsWith(ox)) {
            n.push([s, e]);
            continue;
          }
          n.push([Pf(s), e]);
          continue;
        }
        n.push(...this._getStyleTuples(e));
      }
    return n;
  }
  /** @internal */
  _getStyleTuplesFromArray(t) {
    const e = t.length;
    if (e > 0) {
      const s = [];
      let n = 0;
      for (; e > n; ++n)
        s.push(...this._getStyleTuples(t[n]));
      return s;
    }
    return tt;
  }
  /** @internal */
  _getStyleTuples(t) {
    return at(t) ? this._getStyleTuplesFromString(t) : t instanceof Array ? this._getStyleTuplesFromArray(t) : t instanceof Object ? this._getStyleTuplesFromObject(t) : tt;
  }
  /** @internal */
  _flushChanges() {
    if (this._hasChanges) {
      this._hasChanges = !1;
      const t = this._value, e = this.styles, s = this._getStyleTuples(t);
      let n, r = this.version;
      this._oldValue = t;
      let o, a, l, c = 0;
      const h = s.length;
      for (; c < h; ++c)
        o = s[c], a = o[0], l = o[1], this.setProperty(a, l), e[a] = r;
      if (this.styles = e, this.version += 1, r === 0)
        return;
      r -= 1;
      for (n in e)
        !Di.call(e, n) || e[n] !== r || this.obj.style.removeProperty(n);
    }
  }
  setProperty(t, e) {
    let s = "";
    e != null && pt(e.indexOf) && e.includes("!important") && (s = "important", e = e.replace("!important", "")), this.obj.style.setProperty(t, e, s);
  }
  bind() {
    this._value = this._oldValue = this.obj.style.cssText;
  }
}
xa(Gg);
class ac {
  constructor(t, e, s) {
    this.type = ci | Jc | ps, this._value = "", this._oldValue = "", this._hasChanges = !1, this._listened = !1, this._el = t, this._key = e, this._config = s;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    Os(t, this._value) || (this._oldValue = this._value, this._value = t, this._hasChanges = !0, this._config.readonly || this._flushChanges());
  }
  /** @internal */
  _flushChanges() {
    this._hasChanges && (this._hasChanges = !1, this._el[this._key] = this._value ?? this._config.default, this._flush());
  }
  handleEvent() {
    this._oldValue = this._value, this._value = this._el[this._key], this._oldValue !== this._value && (this._hasChanges = !1, this._flush());
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    this._value = this._oldValue = this._el[this._key];
  }
  /** @internal */
  _flush() {
    const t = this._oldValue;
    this._oldValue = this._value, this.subs.notify(this._value, t);
  }
}
lh(ac), ze(ac, null);
const Wu = (() => {
  const i = "http://www.w3.org/1999/xlink", t = "http://www.w3.org/XML/1998/namespace", e = "http://www.w3.org/2000/xmlns/";
  return rg(mt(), {
    "xlink:actuate": ["actuate", i],
    "xlink:arcrole": ["arcrole", i],
    "xlink:href": ["href", i],
    "xlink:role": ["role", i],
    "xlink:show": ["show", i],
    "xlink:title": ["title", i],
    "xlink:type": ["type", i],
    "xml:lang": ["lang", t],
    "xml:space": ["space", t],
    xmlns: ["xmlns", e],
    "xmlns:xlink": ["xlink", e]
  });
})(), Zg = new Zp();
Zg.type = ci | ps;
class ch {
  constructor() {
    this.allowDirtyCheck = !0, this._events = mt(), this._globalEvents = mt(), this._overrides = mt(), this._globalOverrides = mt(), this._locator = D(Jb), this._platform = D(ne), this._dirtyChecker = D(Uc), this.svg = D(Kg);
    const t = ["change", "input"], e = { events: t, default: "" };
    this.useConfig({
      INPUT: {
        value: e,
        valueAsNumber: { events: t, default: 0 },
        checked: { type: lc, events: t },
        files: { events: t, readonly: !0 }
      },
      SELECT: {
        value: { type: Bi, events: ["change"], default: "" }
      },
      TEXTAREA: {
        value: e
      }
    });
    const s = { events: ["change", "input", "blur", "keyup", "paste"], default: "" }, n = { events: ["scroll"], default: 0 };
    this.useConfigGlobal({
      scrollTop: n,
      scrollLeft: n,
      textContent: s,
      innerHTML: s
    }), this.overrideAccessorGlobal("css", "style", "class"), this.overrideAccessor({
      INPUT: ["value", "checked", "model"],
      SELECT: ["value"],
      TEXTAREA: ["value"]
    });
  }
  // deepscan-disable-next-line
  handles(t, e) {
    return t instanceof this._platform.Node;
  }
  useConfig(t, e, s) {
    const n = this._events;
    let r;
    if (at(t))
      r = n[t] ?? (n[t] = mt()), r[e] == null ? r[e] = s : ao(t, e);
    else
      for (const o in t) {
        r = n[o] ?? (n[o] = mt());
        const a = t[o];
        for (e in a)
          r[e] == null ? r[e] = a[e] : ao(o, e);
      }
  }
  useConfigGlobal(t, e) {
    const s = this._globalEvents;
    if (typeof t == "object")
      for (const n in t)
        s[n] == null ? s[n] = t[n] : ao("*", n);
    else
      s[t] == null ? s[t] = e : ao("*", t);
  }
  // deepscan-disable-nextline
  getAccessor(t, e, s) {
    if (e in this._globalOverrides || e in (this._overrides[t.tagName] ?? i_))
      return this.getObserver(t, e, s);
    switch (e) {
      case "src":
      case "href":
      case "role":
      case "minLength":
      case "maxLength":
      case "placeholder":
      case "size":
      case "pattern":
      case "title":
      case "popovertarget":
      case "popovertargetaction":
        return (e === "popovertarget" || e === "popovertargetaction") && t.nodeName !== "INPUT" && t.nodeName !== "BUTTON" && console.warn(`[aurelia] Popover API are only valid on <input> or <button>. Detected ${e} on <${t.nodeName.toLowerCase()}>`), Ro;
      default: {
        const n = Wu[e];
        return n !== void 0 ? Dr.forNs(n[1]) : Jl(t, e, this.svg) ? Ro : Zg;
      }
    }
  }
  overrideAccessor(t, e) {
    var n, r;
    let s;
    if (at(t))
      s = (n = this._overrides)[t] ?? (n[t] = mt()), s[e] = !0;
    else
      for (const o in t)
        for (const a of t[o])
          s = (r = this._overrides)[o] ?? (r[o] = mt()), s[a] = !0;
  }
  /**
   * For all elements:
   * compose a list of properties,
   * to indicate that an overser should be returned instead of an accessor in `.getAccessor()`
   */
  overrideAccessorGlobal(...t) {
    for (const e of t)
      this._globalOverrides[e] = !0;
  }
  getNodeObserverConfig(t, e) {
    var s;
    return ((s = this._events[t.tagName]) == null ? void 0 : s[e]) ?? this._globalEvents[e];
  }
  getNodeObserver(t, e, s) {
    var o;
    const n = ((o = this._events[t.tagName]) == null ? void 0 : o[e]) ?? this._globalEvents[e];
    let r;
    return n != null ? (r = new (n.type ?? ac)(t, e, n, s, this._locator), r.doNotCache || (Jp(t)[e] = r), r) : null;
  }
  getObserver(t, e, s) {
    switch (e) {
      case "class":
        return new ka(t);
      case "css":
      case "style":
        return new Gg(t);
    }
    const n = this.getNodeObserver(t, e, s);
    if (n != null)
      return n;
    const r = Wu[e];
    if (r !== void 0)
      return Dr.forNs(r[1]);
    if (Jl(t, e, this.svg))
      return Ro;
    if (e in t.constructor.prototype) {
      if (this.allowDirtyCheck)
        return this._dirtyChecker.createProperty(t, e);
      throw B(652, e);
    } else
      return new qc(t, e);
  }
}
ch.register = Hr(Kc);
function ax(i, t) {
  if (i instanceof Array)
    return t.getArrayObserver(i);
  if (i instanceof Map)
    return t.getMapObserver(i);
  if (i instanceof Set)
    return t.getSetObserver(i);
}
function ao(i, t) {
  throw B(653, i, t);
}
function Uu(i, t) {
  return i === t;
}
class lc {
  constructor(t, e, s, n) {
    this.type = ci | Jc | ps, this._value = void 0, this._oldValue = void 0, this._collectionObserver = void 0, this._valueObserver = void 0, this._listened = !1, this._el = t, this.oL = n, this._config = s;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    const e = this._value;
    t !== e && (this._value = t, this._oldValue = e, this._observe(), this._synchronizeElement(), this._flush());
  }
  handleCollectionChange() {
    this._synchronizeElement();
  }
  handleChange(t, e) {
    this._synchronizeElement();
  }
  /** @internal */
  _synchronizeElement() {
    const t = this._value, e = this._el, s = Di.call(e, "model") ? e.model : e.value, n = e.type === "radio", r = e.matcher !== void 0 ? e.matcher : Uu;
    if (n)
      e.checked = !!r(t, s);
    else if (t === !0)
      e.checked = !0;
    else {
      let o = !1;
      if (Bt(t))
        o = t.findIndex((a) => !!r(a, s)) !== -1;
      else if (t instanceof Set) {
        for (const a of t)
          if (r(a, s)) {
            o = !0;
            break;
          }
      } else if (t instanceof Map)
        for (const a of t) {
          const l = a[0], c = a[1];
          if (r(l, s) && c === !0) {
            o = !0;
            break;
          }
        }
      e.checked = o;
    }
  }
  handleEvent() {
    let t = this._oldValue = this._value;
    const e = this._el, s = Di.call(e, "model") ? e.model : e.value, n = e.checked, r = e.matcher !== void 0 ? e.matcher : Uu;
    if (e.type === "checkbox") {
      if (Bt(t)) {
        const o = t.findIndex((a) => !!r(a, s));
        n && o === -1 ? t.push(s) : !n && o !== -1 && t.splice(o, 1);
        return;
      } else if (t instanceof Set) {
        const o = {};
        let a = o;
        for (const l of t)
          if (r(l, s) === !0) {
            a = l;
            break;
          }
        n && a === o ? t.add(s) : !n && a !== o && t.delete(a);
        return;
      } else if (t instanceof Map) {
        let o;
        for (const a of t) {
          const l = a[0];
          if (r(l, s) === !0) {
            o = l;
            break;
          }
        }
        t.set(o, n);
        return;
      }
      t = n;
    } else if (n)
      t = s;
    else
      return;
    this._value = t, this._flush();
  }
  /**
   * Used by mixing defined methods subscribe
   *
   * @internal
   */
  _start() {
    this._observe();
  }
  /**
   * Used by mixing defined methods unsubscribe
   *
   * @internal
   */
  _stop() {
    var t, e;
    this._value = this._oldValue = void 0, (t = this._collectionObserver) == null || t.unsubscribe(this), (e = this._valueObserver) == null || e.unsubscribe(this), this._collectionObserver = this._valueObserver = void 0;
  }
  /** @internal */
  _flush() {
    ml = this._oldValue, this._oldValue = this._value, this.subs.notify(this._value, ml), ml = void 0;
  }
  /** @internal */
  _observe() {
    var e, s, n, r, o;
    const t = this._el;
    (n = this._valueObserver ?? (this._valueObserver = ((e = t.$observers) == null ? void 0 : e.model) ?? ((s = t.$observers) == null ? void 0 : s.value))) == null || n.subscribe(this), (r = this._collectionObserver) == null || r.unsubscribe(this), this._collectionObserver = void 0, t.type === "checkbox" && ((o = this._collectionObserver = ax(this._value, this.oL)) == null || o.subscribe(this));
  }
}
lh(lc), ze(lc, null);
let ml;
class Jg {
  bind(t, e) {
    if (!(e instanceof ce))
      throw B(9994, e);
    e.useTargetObserver(Ro);
  }
}
Jg.$au = {
  type: Ie,
  name: "attr"
};
class tm {
  bind(t, e) {
    if (!("handleEvent" in e))
      throw B(
        801
        /* ErrorNames.self_behavior_invalid_usage */
      );
    e.self = !0;
  }
  unbind(t, e) {
    e.self = !1;
  }
}
tm.$au = {
  type: Ie,
  name: "self"
};
class em {
  constructor() {
    this._observerLocator = D(zn), this._nodeObserverLocator = D(Kc);
  }
  bind(t, e, ...s) {
    if (!(this._nodeObserverLocator instanceof ch))
      throw B(
        9993
        /* ErrorNames.update_trigger_behavior_not_supported */
      );
    if (s.length === 0)
      throw B(
        802
        /* ErrorNames.update_trigger_behavior_no_triggers */
      );
    if (!(e instanceof ce) || !(e.mode & Ds))
      throw B(
        803
        /* ErrorNames.update_trigger_invalid_usage */
      );
    const n = this._nodeObserverLocator.getNodeObserverConfig(e.target, e.targetProperty);
    if (n == null)
      throw B(9992, e);
    const r = this._nodeObserverLocator.getNodeObserver(e.target, e.targetProperty, this._observerLocator);
    r.useConfig({ readonly: n.readonly, default: n.default, events: s }), e.useTargetObserver(r);
  }
}
em.$au = {
  type: Ie,
  name: "updateTrigger"
};
class Jo {
  constructor() {
    this.elseFactory = void 0, this.elseView = void 0, this.ifView = void 0, this.view = void 0, this.value = !1, this.cache = !0, this.pending = void 0, this._wantsDeactivate = !1, this._swapId = 0, this._ifFactory = D(Ce), this._location = D(ue);
  }
  attaching(t, e) {
    return this._swap(this.value);
  }
  detaching(t, e) {
    return this._wantsDeactivate = !0, X(this.pending, () => {
      var s;
      this._wantsDeactivate = !1, this.pending = void 0, (s = this.view) == null || s.deactivate(t, this.$controller);
    });
  }
  valueChanged(t, e) {
    if (this.$controller.isActive && (t = !!t, e = !!e, t !== e))
      return this._swap(t);
  }
  /** @internal */
  _swap(t) {
    const e = this.view, s = this.$controller, n = this._swapId++, r = () => !this._wantsDeactivate && this._swapId === n + 1;
    let o;
    return X(this.pending, () => this.pending = X(e == null ? void 0 : e.deactivate(e, s), () => {
      var a;
      if (r() && (t ? o = this.view = this.ifView = this.cache && this.ifView != null ? this.ifView : this._ifFactory.create() : o = this.view = this.elseView = this.cache && this.elseView != null ? this.elseView : (a = this.elseFactory) == null ? void 0 : a.create(), o != null))
        return o.setLocation(this._location), X(o.activate(o, s, s.scope), () => {
          r() && (this.pending = void 0);
        });
    }));
  }
  dispose() {
    var t, e;
    (t = this.ifView) == null || t.dispose(), (e = this.elseView) == null || e.dispose(), this.ifView = this.elseView = this.view = void 0;
  }
  accept(t) {
    var e;
    if (((e = this.view) == null ? void 0 : e.accept(t)) === !0)
      return !0;
  }
}
Jo.$au = {
  type: ae,
  name: "if",
  isTemplateController: !0,
  bindables: {
    value: !0,
    cache: {
      set: (i) => i === "" || !!i && i !== "false"
    }
  }
};
class sm {
  constructor() {
    this._factory = D(Ce);
  }
  link(t, e, s, n) {
    const r = t.children, o = r[r.length - 1];
    if (o instanceof Jo)
      o.elseFactory = this._factory;
    else if (o.viewModel instanceof Jo)
      o.viewModel.elseFactory = this._factory;
    else
      throw B(
        810
        /* ErrorNames.else_without_if */
      );
  }
}
sm.$au = {
  type: "custom-attribute",
  name: "else",
  isTemplateController: !0
};
function lx(i) {
  i.dispose();
}
const cx = [
  "BindingBehavior",
  "ValueConverter"
];
class im {
  constructor() {
    this.views = [], this.key = null, this._oldViews = [], this._scopes = [], this._oldScopes = [], this._scopeMap = /* @__PURE__ */ new Map(), this._observer = void 0, this._observingInnerItems = !1, this._reevaluating = !1, this._innerItemsExpression = null, this._normalizedItems = void 0, this._hasDestructuredLocal = !1, this._location = D(ue), this._parent = D(Sa), this._factory = D(Ce), this._resolver = D(ux);
    const e = D(Nn).props[0].props[0];
    if (e !== void 0) {
      const { to: s, value: n, command: r } = e;
      if (s === "key")
        if (r === null)
          this.key = n;
        else if (r === "bind")
          this.key = D(Fn).parse(n, cs);
        else
          throw B(775, r);
      else
        throw B(776, s);
    }
  }
  binding(t, e) {
    const s = this._parent.bindings, n = s.length;
    let r, o, a = 0;
    for (; n > a; ++a)
      if (r = s[a], r.target === this && r.targetProperty === "items") {
        o = this.forOf = r.ast, this._forOfBinding = r;
        let c = o.iterable;
        for (; c != null && cx.includes(c.$kind); )
          c = c.expression, this._observingInnerItems = !0;
        this._innerItemsExpression = c;
        break;
      }
    this._refreshCollectionObserver();
    const l = o.declaration;
    (this._hasDestructuredLocal = l.$kind === "ArrayDestructuring" || l.$kind === "ObjectDestructuring") || (this.local = Tt(l, this.$controller.scope, r, null));
  }
  attaching(t, e) {
    return this._normalizeToArray(), this._createScopes(), this._activateAllViews(t, this._normalizedItems ?? tt);
  }
  detaching(t, e) {
    return this._refreshCollectionObserver(), this._deactivateAllViews(t);
  }
  unbinding(t, e) {
    this._scopeMap.clear();
  }
  // called by SetterObserver
  itemsChanged() {
    this.$controller.isActive && (this._refreshCollectionObserver(), this._normalizeToArray(), this._createScopes(), this._applyIndexMap(void 0));
  }
  handleCollectionChange(t, e) {
    const s = this.$controller;
    if (s.isActive) {
      if (this._observingInnerItems) {
        if (this._reevaluating)
          return;
        this._reevaluating = !0, this.items = Tt(this.forOf.iterable, s.scope, this._forOfBinding, null), this._reevaluating = !1;
        return;
      }
      this._normalizeToArray(), this._createScopes(), this._applyIndexMap(e);
    }
  }
  /** @internal */
  _applyIndexMap(t) {
    const e = this.views;
    this._oldViews = e.slice();
    const s = e.length, n = this.key, r = n !== null, o = this._oldScopes, a = this._scopes;
    if (r || t === void 0) {
      const l = this.local, h = this._normalizedItems.length, d = this.forOf.declaration, f = this._forOfBinding, g = this._hasDestructuredLocal;
      t = Wi(h);
      let p = 0;
      if (s === 0)
        for (; p < h; ++p)
          t[p] = -2;
      else if (h === 0)
        for (p = 0; p < s; ++p)
          t.deletedIndices.push(p), t.deletedItems.push(Do(g, d, o[p], f, l));
      else if (r) {
        const m = Array(s);
        for (p = 0; p < s; ++p)
          m[p] = Zu(g, n, d, o[p], f, l);
        const b = Array(s);
        for (p = 0; p < h; ++p)
          b[p] = Zu(g, n, d, a[p], f, l);
        for (p = 0; p < h; ++p)
          m.includes(b[p]) ? t[p] = m.indexOf(b[p]) : t[p] = -2;
        for (p = 0; p < s; ++p)
          b.includes(m[p]) || (t.deletedIndices.push(p), t.deletedItems.push(Do(g, d, o[p], f, l)));
      } else {
        for (p = 0; p < h; ++p)
          o.includes(a[p]) ? t[p] = o.indexOf(a[p]) : t[p] = -2;
        for (p = 0; p < s; ++p)
          a.includes(o[p]) || (t.deletedIndices.push(p), t.deletedItems.push(Do(g, d, o[p], f, l)));
      }
    }
    if (t.deletedIndices.length > 0) {
      const l = X(this._deactivateAndRemoveViewsByKey(t), () => this._createAndActivateAndSortViewsByKey(t));
      jt(l) && l.catch(tc);
    } else
      this._createAndActivateAndSortViewsByKey(t);
  }
  // todo: subscribe to collection from inner expression
  /** @internal */
  _refreshCollectionObserver() {
    var o, a;
    const t = this.$controller.scope;
    let e = this._innerItems, s = this._observingInnerItems, n;
    s && (e = this._innerItems = Tt(this._innerItemsExpression, t, this._forOfBinding, null) ?? null, s = this._observingInnerItems = !Os(this.items, e));
    const r = this._observer;
    if (this.$controller.isActive) {
      const l = s ? e : this.items;
      n = this._observer = (a = (o = this._resolver.resolve(l)).getObserver) == null ? void 0 : a.call(o, l), r !== n && (r == null || r.unsubscribe(this), n == null || n.subscribe(this));
    } else
      r == null || r.unsubscribe(this), this._observer = void 0;
  }
  /** @internal */
  _createScopes() {
    const t = this._scopes;
    this._oldScopes = t.slice();
    const e = this._normalizedItems, s = e.length, n = this._scopes = Array(e.length), r = this._scopeMap, o = /* @__PURE__ */ new Map(), a = this.$controller.scope, l = this._forOfBinding, c = this.forOf, h = this.local, u = this._hasDestructuredLocal;
    for (let d = 0; d < s; ++d)
      n[d] = mx(r, o, e[d], c, a, l, h, u);
    r.clear(), this._scopeMap = o;
  }
  /** @internal */
  _normalizeToArray() {
    const t = this.items;
    if (Bt(t)) {
      this._normalizedItems = t.slice(0);
      return;
    }
    const e = [];
    this._resolver.resolve(t).iterate(t, (s, n) => {
      e[n] = s;
    }), this._normalizedItems = e;
  }
  /** @internal */
  _activateAllViews(t, e) {
    let s, n, r, o;
    const { $controller: a, _factory: l, _location: c, _scopes: h } = this, u = e.length, d = this.views = Array(u);
    for (let f = 0; f < u; ++f)
      r = d[f] = l.create().setLocation(c), r.nodes.unlink(), o = h[f], co(o.overrideContext, f, u), n = r.activate(t ?? r, a, o), jt(n) && (s ?? (s = [])).push(n);
    if (s !== void 0)
      return s.length === 1 ? s[0] : Promise.all(s);
  }
  /** @internal */
  _deactivateAllViews(t) {
    let e, s, n, r = 0;
    const { views: o, $controller: a } = this, l = o.length;
    for (; l > r; ++r)
      n = o[r], n.release(), s = n.deactivate(t ?? n, a), jt(s) && (e ?? (e = [])).push(s);
    if (e !== void 0)
      return e.length === 1 ? e[0] : Promise.all(e);
  }
  /** @internal */
  _deactivateAndRemoveViewsByKey(t) {
    let e, s, n;
    const { $controller: r, views: o } = this, a = t.deletedIndices.slice().sort(_x), l = a.length;
    let c = 0;
    for (; l > c; ++c)
      n = o[a[c]], n.release(), s = n.deactivate(n, r), jt(s) && (e ?? (e = [])).push(s);
    for (c = 0; l > c; ++c)
      o.splice(a[c] - c, 1);
    if (e !== void 0)
      return e.length === 1 ? e[0] : Promise.all(e);
  }
  /** @internal */
  _createAndActivateAndSortViewsByKey(t) {
    let e, s, n, r = 0;
    const { $controller: o, _factory: a, _location: l, views: c, _scopes: h, _oldViews: u } = this, d = t.length;
    for (; d > r; ++r)
      t[r] === -2 && (n = a.create(), c.splice(r, 0, n));
    if (c.length !== d)
      throw B(814, [c.length, d]);
    let f = 0;
    for (r = 0; r < t.length; ++r)
      (f = t[r]) !== -2 && (c[r] = u[f]);
    const g = hx(t), p = g.length;
    let m, b = p - 1;
    for (r = d - 1; r >= 0; --r)
      n = c[r], m = c[r + 1], n.nodes.link((m == null ? void 0 : m.nodes) ?? l), t[r] === -2 ? (n.setLocation(l), co(h[r].overrideContext, r, d), s = n.activate(n, o, h[r]), jt(s) && (e ?? (e = [])).push(s)) : b < 0 || p === 1 || r !== g[b] ? (co(n.scope.overrideContext, r, d), n.nodes.insertBefore(n.location)) : (co(n.scope.overrideContext, r, d), --b);
    if (e !== void 0)
      return e.length === 1 ? e[0] : Promise.all(e);
  }
  dispose() {
    this.views.forEach(lx), this.views = void 0;
  }
  accept(t) {
    const { views: e } = this;
    if (e !== void 0) {
      for (let s = 0, n = e.length; s < n; ++s)
        if (e[s].accept(t) === !0)
          return !0;
    }
  }
}
im.$au = {
  type: ae,
  name: "repeat",
  isTemplateController: !0,
  bindables: ["items"]
};
let ta = 16, bs = new Int32Array(ta), lo = new Int32Array(ta);
function hx(i) {
  const t = i.length;
  t > ta && (ta = t, bs = new Int32Array(t), lo = new Int32Array(t));
  let e = 0, s = 0, n = 0, r = 0, o = 0, a = 0, l = 0, c = 0;
  for (; r < t; r++)
    if (s = i[r], s !== -2) {
      if (o = bs[e], n = i[o], n !== -2 && n < s) {
        lo[r] = o, bs[++e] = r;
        continue;
      }
      for (a = 0, l = e; a < l; )
        c = a + l >> 1, n = i[bs[c]], n !== -2 && n < s ? a = c + 1 : l = c;
      n = i[bs[a]], (s < n || n === -2) && (a > 0 && (lo[r] = bs[a - 1]), bs[a] = r);
    }
  r = ++e;
  const h = new Int32Array(r);
  for (s = bs[e - 1]; e-- > 0; )
    h[e] = s, s = lo[s];
  for (; r-- > 0; )
    bs[r] = 0;
  return h;
}
class qu {
  get $odd() {
    return !this.$even;
  }
  get $even() {
    return this.$index % 2 === 0;
  }
  get $first() {
    return this.$index === 0;
  }
  get $middle() {
    return !this.$first && !this.$last;
  }
  get $last() {
    return this.$index === this.$length - 1;
  }
  constructor(t = 0, e = 1) {
    this.$index = t, this.$length = e;
  }
}
const co = (i, t, e) => {
  i.$index = t, i.$length = e;
}, ux = /* @__PURE__ */ vt("IRepeatableHandlerResolver", (i) => i.singleton(dx));
class dx {
  constructor() {
    this._handlers = D(Ac(fx));
  }
  resolve(t) {
    if (Ku.handles(t))
      return Ku;
    if (Yu.handles(t))
      return Yu;
    if (Qu.handles(t))
      return Qu;
    if (Xu.handles(t))
      return Xu;
    if (Gu.handles(t))
      return Gu;
    const e = this._handlers.find((s) => s.handles(t));
    return e !== void 0 ? e : px;
  }
}
const fx = /* @__PURE__ */ vt("IRepeatableHandler"), Ku = {
  handles: Bt,
  getObserver: Yc,
  /* istanbul ignore next */
  iterate(i, t) {
    const e = i.length;
    let s = 0;
    for (; s < e; ++s)
      t(i[s], s, i);
  }
  // getCount: items => items.length,
}, Yu = {
  handles: $n,
  getObserver: Yc,
  iterate(i, t) {
    let e = 0, s;
    for (s of i.keys())
      t(s, e++, i);
  }
  // getCount: s => s.size,
}, Qu = {
  handles: Qs,
  getObserver: Yc,
  iterate(i, t) {
    let e = 0, s;
    for (s of i.entries())
      t(s, e++, i);
  }
  // getCount: s => s.size,
}, Xu = {
  handles: Rb,
  iterate(i, t) {
    let e = 0;
    for (; e < i; ++e)
      t(e, e, i);
  }
  // getCount: v => v,
}, Gu = {
  handles: (i) => i == null,
  iterate() {
  }
  // getCount: () => 0,
}, px = {
  handles(i) {
    return !1;
  },
  iterate(i, t) {
    throw B(777, i);
  }
  // getCount: () => 0,
}, gx = (i, t, e, s, n, r) => {
  i ? Or(t, e, s, r) : e.bindingContext[n] = r;
}, Do = (i, t, e, s, n) => i ? Tt(t, e, s, null) : e.bindingContext[n], Zu = (i, t, e, s, n, r) => typeof t == "string" ? Do(i, e, s, n, r)[t] : Tt(t, s, n, null), mx = (i, t, e, s, n, r, o, a) => {
  let l = i.get(e);
  if (l === void 0 ? l = bx(e, s, n, r, o, a) : l instanceof zt ? i.delete(e) : l.length === 1 ? (l = l[0], i.delete(e)) : l = l.shift(), t.has(e)) {
    const c = t.get(e);
    c instanceof zt ? t.set(e, [c, l]) : c.push(l);
  } else
    t.set(e, l);
  return gx(a, s.declaration, l, r, o, e), l;
}, bx = (i, t, e, s, n, r) => {
  if (r) {
    const o = zt.fromParent(e, new vu(), new qu());
    Or(t.declaration, o, s, i);
  }
  return zt.fromParent(e, new vu(n, i), new qu());
}, _x = (i, t) => i - t;
class nm {
  constructor() {
    this.view = D(Ce).create().setLocation(D(ue));
  }
  valueChanged(t, e) {
    const s = this.$controller, n = this.view.bindings;
    let r, o = 0, a = 0;
    if (s.isActive && n != null)
      for (r = zt.fromParent(s.scope, t === void 0 ? {} : t), a = n.length; a > o; ++o)
        n[o].bind(r);
  }
  attaching(t, e) {
    const { $controller: s, value: n } = this, r = zt.fromParent(s.scope, n === void 0 ? {} : n);
    return this.view.activate(t, s, r);
  }
  detaching(t, e) {
    return this.view.deactivate(t, this.$controller);
  }
  dispose() {
    this.view.dispose(), this.view = void 0;
  }
  accept(t) {
    var e;
    if (((e = this.view) == null ? void 0 : e.accept(t)) === !0)
      return !0;
  }
}
nm.$au = {
  type: ae,
  name: "with",
  isTemplateController: !0,
  bindables: ["value"]
};
class hh {
  constructor() {
    this.cases = [], this.activeCases = [], this.promise = void 0, this._factory = D(Ce), this._location = D(ue);
  }
  link(t, e, s, n) {
    this.view = this._factory.create(this.$controller).setLocation(this._location);
  }
  attaching(t, e) {
    const s = this.view, n = this.$controller;
    return this.queue(() => s.activate(t, n, n.scope)), this.queue(() => this.swap(t, this.value)), this.promise;
  }
  detaching(t, e) {
    return this.queue(() => this.view.deactivate(t, this.$controller)), this.promise;
  }
  dispose() {
    var t;
    (t = this.view) == null || t.dispose(), this.view = void 0;
  }
  valueChanged(t, e) {
    this.$controller.isActive && this.queue(() => this.swap(null, this.value));
  }
  caseChanged(t) {
    this.queue(() => this._handleCaseChange(t));
  }
  /** @internal */
  _handleCaseChange(t) {
    const e = t.isMatch(this.value), s = this.activeCases, n = s.length;
    if (!e)
      return n > 0 && s[0].id === t.id ? this._clearActiveCases(null) : void 0;
    if (n > 0 && s[0].id < t.id)
      return;
    const r = [];
    let o = t.fallThrough;
    if (!o)
      r.push(t);
    else {
      const a = this.cases, l = a.indexOf(t);
      for (let c = l, h = a.length; c < h && o; c++) {
        const u = a[c];
        r.push(u), o = u.fallThrough;
      }
    }
    return X(this._clearActiveCases(null, r), () => (this.activeCases = r, this._activateCases(null)));
  }
  swap(t, e) {
    const s = [];
    let n = !1;
    for (const o of this.cases)
      if ((n || o.isMatch(e)) && (s.push(o), n = o.fallThrough), s.length > 0 && !n)
        break;
    const r = this.defaultCase;
    return s.length === 0 && r !== void 0 && s.push(r), X(this.activeCases.length > 0 ? this._clearActiveCases(t, s) : void 0, () => {
      if (this.activeCases = s, s.length !== 0)
        return this._activateCases(t);
    });
  }
  /** @internal */
  _activateCases(t) {
    const e = this.$controller;
    if (!e.isActive)
      return;
    const s = this.activeCases, n = s.length;
    if (n === 0)
      return;
    const r = e.scope;
    return n === 1 ? s[0].activate(t, r) : Wt(...s.map((o) => o.activate(t, r)));
  }
  /** @internal */
  _clearActiveCases(t, e = []) {
    const s = this.activeCases, n = s.length;
    if (n !== 0) {
      if (n === 1) {
        const r = s[0];
        return e.includes(r) ? void 0 : (s.length = 0, r.deactivate(t));
      }
      return X(Wt(...s.reduce((r, o) => (e.includes(o) || r.push(o.deactivate(t)), r), [])), () => {
        s.length = 0;
      });
    }
  }
  queue(t) {
    const e = this.promise;
    let s;
    s = this.promise = X(X(e, t), () => {
      this.promise === s && (this.promise = void 0);
    });
  }
  accept(t) {
    if (this.$controller.accept(t) === !0 || this.activeCases.some((e) => e.accept(t)))
      return !0;
  }
}
hh.$au = {
  type: ae,
  name: "switch",
  isTemplateController: !0,
  bindables: ["value"]
};
let vx = 0;
const rm = [
  "value",
  {
    name: "fallThrough",
    mode: ga,
    set(i) {
      switch (i) {
        case "true":
          return !0;
        case "false":
          return !1;
        default:
          return !!i;
      }
    }
  }
];
class uh {
  constructor() {
    this.id = ++vx, this.fallThrough = !1, this.view = void 0, this._factory = D(Ce), this._locator = D(zn), this._location = D(ue), this._logger = D(ji).scopeTo(`${this.constructor.name}-#${this.id}`);
  }
  link(t, e, s, n) {
    const r = t.parent, o = r == null ? void 0 : r.viewModel;
    if (o instanceof hh)
      this.$switch = o, this.linkToSwitch(o);
    else
      throw B(
        815
        /* ErrorNames.switch_invalid_usage */
      );
  }
  detaching(t, e) {
    return this.deactivate(t);
  }
  isMatch(t) {
    this._logger.debug("isMatch()");
    const e = this.value;
    return Bt(e) ? (this._observer === void 0 && (this._observer = this._observeCollection(e)), e.includes(t)) : e === t;
  }
  valueChanged(t, e) {
    var s;
    Bt(t) ? ((s = this._observer) == null || s.unsubscribe(this), this._observer = this._observeCollection(t)) : this._observer !== void 0 && this._observer.unsubscribe(this), this.$switch.caseChanged(this);
  }
  handleCollectionChange() {
    this.$switch.caseChanged(this);
  }
  activate(t, e) {
    let s = this.view;
    if (s === void 0 && (s = this.view = this._factory.create().setLocation(this._location)), !s.isActive)
      return s.activate(t ?? s, this.$controller, e);
  }
  deactivate(t) {
    const e = this.view;
    if (!(e === void 0 || !e.isActive))
      return e.deactivate(t ?? e, this.$controller);
  }
  dispose() {
    var t, e;
    (t = this._observer) == null || t.unsubscribe(this), (e = this.view) == null || e.dispose(), this.view = void 0;
  }
  linkToSwitch(t) {
    t.cases.push(this);
  }
  /** @internal */
  _observeCollection(t) {
    const e = this._locator.getArrayObserver(t);
    return e.subscribe(this), e;
  }
  accept(t) {
    var e;
    return this.$controller.accept(t) === !0 ? !0 : (e = this.view) == null ? void 0 : e.accept(t);
  }
}
th({ name: "case", bindables: rm, isTemplateController: !0 }, uh);
class om extends uh {
  linkToSwitch(t) {
    if (t.defaultCase !== void 0)
      throw B(
        816
        /* ErrorNames.switch_no_multiple_default */
      );
    t.defaultCase = this;
  }
}
th({ name: "default-case", bindables: rm, isTemplateController: !0 }, om);
var am, lm, cm;
class dh {
  constructor() {
    this.preSettledTask = null, this.postSettledTask = null, this._factory = D(Ce), this._location = D(ue), this._platform = D(ne), this.logger = D(ji).scopeTo("promise.resolve");
  }
  link(t, e, s, n) {
    this.view = this._factory.create(this.$controller).setLocation(this._location);
  }
  attaching(t, e) {
    const s = this.view, n = this.$controller;
    return X(s.activate(t, n, this.viewScope = zt.fromParent(n.scope, {})), () => this.swap(t));
  }
  valueChanged(t, e) {
    this.$controller.isActive && this.swap(null);
  }
  swap(t) {
    var h, u;
    const e = this.value;
    if (!jt(e)) {
      this.logger.warn(`The value '${qi(e)}' is not a promise. No change will be done.`);
      return;
    }
    const s = this._platform.domQueue, n = this.fulfilled, r = this.rejected, o = this.pending, a = this.viewScope;
    let l;
    const c = () => {
      Wt(
        // At first deactivate the fulfilled and rejected views, as well as activate the pending view.
        // The order of these 3 should not necessarily be sequential (i.e. order-irrelevant).
        l = (this.preSettledTask = s.queueTask(() => Wt(n == null ? void 0 : n.deactivate(t), r == null ? void 0 : r.deactivate(t), o == null ? void 0 : o.activate(t, a)))).result.catch((d) => {
          if (!(d instanceof Zl))
            throw d;
        }),
        e.then((d) => {
          if (this.value !== e)
            return;
          const f = () => {
            this.postSettlePromise = (this.postSettledTask = s.queueTask(() => Wt(o == null ? void 0 : o.deactivate(t), r == null ? void 0 : r.deactivate(t), n == null ? void 0 : n.activate(t, a, d)))).result;
          };
          this.preSettledTask.status === nl ? l.then(f) : (this.preSettledTask.cancel(), f());
        }, (d) => {
          if (this.value !== e)
            return;
          const f = () => {
            this.postSettlePromise = (this.postSettledTask = s.queueTask(() => Wt(o == null ? void 0 : o.deactivate(t), n == null ? void 0 : n.deactivate(t), r == null ? void 0 : r.activate(t, a, d)))).result;
          };
          this.preSettledTask.status === nl ? l.then(f) : (this.preSettledTask.cancel(), f());
        })
      );
    };
    ((h = this.postSettledTask) == null ? void 0 : h.status) === nl ? this.postSettlePromise.then(c) : ((u = this.postSettledTask) == null || u.cancel(), c());
  }
  detaching(t, e) {
    var s, n;
    return (s = this.preSettledTask) == null || s.cancel(), (n = this.postSettledTask) == null || n.cancel(), this.preSettledTask = this.postSettledTask = null, this.view.deactivate(t, this.$controller);
  }
  dispose() {
    var t;
    (t = this.view) == null || t.dispose(), this.view = void 0;
  }
}
dh.$au = {
  type: ae,
  name: "promise",
  isTemplateController: !0,
  bindables: ["value"]
};
class hm {
  constructor() {
    this.view = void 0, this._factory = D(Ce), this._location = D(ue);
  }
  link(t, e, s, n) {
    fh(t).pending = this;
  }
  activate(t, e) {
    let s = this.view;
    if (s === void 0 && (s = this.view = this._factory.create().setLocation(this._location)), !s.isActive)
      return s.activate(s, this.$controller, e);
  }
  deactivate(t) {
    const e = this.view;
    if (!(e === void 0 || !e.isActive))
      return e.deactivate(e, this.$controller);
  }
  detaching(t) {
    return this.deactivate(t);
  }
  dispose() {
    var t;
    (t = this.view) == null || t.dispose(), this.view = void 0;
  }
}
hm.$au = {
  type: ae,
  name: "pending",
  isTemplateController: !0,
  bindables: {
    value: { mode: Ot }
  }
};
class um {
  constructor() {
    this.view = void 0, this._factory = D(Ce), this._location = D(ue);
  }
  link(t, e, s, n) {
    fh(t).fulfilled = this;
  }
  activate(t, e, s) {
    this.value = s;
    let n = this.view;
    if (n === void 0 && (n = this.view = this._factory.create().setLocation(this._location)), !n.isActive)
      return n.activate(n, this.$controller, e);
  }
  deactivate(t) {
    const e = this.view;
    if (!(e === void 0 || !e.isActive))
      return e.deactivate(e, this.$controller);
  }
  detaching(t, e) {
    return this.deactivate(t);
  }
  dispose() {
    var t;
    (t = this.view) == null || t.dispose(), this.view = void 0;
  }
}
um.$au = {
  type: ae,
  name: "then",
  isTemplateController: !0,
  bindables: {
    value: { mode: Ds }
  }
};
class dm {
  constructor() {
    this.view = void 0, this._factory = D(Ce), this._location = D(ue);
  }
  link(t, e, s, n) {
    fh(t).rejected = this;
  }
  activate(t, e, s) {
    this.value = s;
    let n = this.view;
    if (n === void 0 && (n = this.view = this._factory.create().setLocation(this._location)), !n.isActive)
      return n.activate(n, this.$controller, e);
  }
  deactivate(t) {
    const e = this.view;
    if (!(e === void 0 || !e.isActive))
      return e.deactivate(e, this.$controller);
  }
  detaching(t, e) {
    return this.deactivate(t);
  }
  dispose() {
    var t;
    (t = this.view) == null || t.dispose(), this.view = void 0;
  }
}
dm.$au = {
  type: ae,
  name: "catch",
  isTemplateController: !0,
  bindables: {
    value: { mode: Ds }
  }
};
function fh(i) {
  const t = i.parent, e = t == null ? void 0 : t.viewModel;
  if (e instanceof dh)
    return e;
  throw B(
    813
    /* ErrorNames.promise_invalid_usage */
  );
}
class cc {
  "promise.resolve"(t, e) {
    return new ke(t, e, "promise", "bind");
  }
}
am = Symbol.metadata;
cc[am] = {
  [us]: ri.create([{ pattern: "promise.resolve", symbols: "" }], cc)
};
class hc {
  then(t, e) {
    return new ke(t, e, "then", "from-view");
  }
}
lm = Symbol.metadata;
hc[lm] = {
  [us]: ri.create([{ pattern: "then", symbols: "" }], hc)
};
class uc {
  catch(t, e) {
    return new ke(t, e, "catch", "from-view");
  }
}
cm = Symbol.metadata;
uc[cm] = {
  [us]: ri.create([{ pattern: "catch", symbols: "" }], uc)
};
class fm {
  constructor() {
    this._needsApply = !1, this._element = D(Yr), this._platform = D(ne);
  }
  binding() {
    this.valueChanged();
  }
  /**
   * Invoked everytime the bound value changes.
   *
   * @param newValue - The new value.
   */
  valueChanged() {
    this.$controller.isActive ? this._apply() : this._needsApply = !0;
  }
  /**
   * Invoked when the attribute is attached to the DOM.
   */
  attached() {
    this._needsApply && (this._needsApply = !1, this._apply()), this._element.addEventListener("focus", this), this._element.addEventListener("blur", this);
  }
  /**
   * Invoked when the attribute is afterDetachChildren from the DOM.
   */
  detaching() {
    const t = this._element;
    t.removeEventListener("focus", this), t.removeEventListener("blur", this);
  }
  /**
   * EventTarget interface handler for better memory usage
   */
  handleEvent(t) {
    t.type === "focus" ? this.value = !0 : this._isElFocused || (this.value = !1);
  }
  /**
   * Focus/blur based on current value
   *
   * @internal
   */
  _apply() {
    const t = this._element, e = this._isElFocused, s = this.value;
    s && !e ? t.focus() : !s && e && t.blur();
  }
  /** @internal */
  get _isElFocused() {
    return this._element === this._platform.document.activeElement;
  }
}
fm.$au = {
  type: ae,
  name: "focus",
  bindables: {
    value: { mode: ig }
  }
};
class pm {
  constructor() {
    this.position = "beforeend", this.strict = !1;
    const t = D(Ce), e = D(ue), s = D(ne);
    this._platform = s, this._resolvedTarget = s.document.createElement("div"), (this.view = t.create()).setLocation(this._targetLocation = Gy(s)), Qw(this.view.nodes, e);
  }
  attaching(t) {
    this.callbackContext == null && (this.callbackContext = this.$controller.scope.bindingContext);
    const e = this._resolvedTarget = this._getTarget();
    return this._moveLocation(e, this.position), this._activating(t, e);
  }
  detaching(t) {
    return this._deactivating(t, this._resolvedTarget);
  }
  targetChanged() {
    const { $controller: t } = this;
    if (!t.isActive)
      return;
    const e = this._getTarget();
    if (this._resolvedTarget === e)
      return;
    this._resolvedTarget = e;
    const s = X(this._deactivating(null, e), () => (this._moveLocation(e, this.position), this._activating(null, e)));
    jt(s) && s.catch(tc);
  }
  positionChanged() {
    const { $controller: t, _resolvedTarget: e } = this;
    if (!t.isActive)
      return;
    const s = X(this._deactivating(null, e), () => (this._moveLocation(e, this.position), this._activating(null, e)));
    jt(s) && s.catch(tc);
  }
  /** @internal */
  _activating(t, e) {
    const { activating: s, callbackContext: n, view: r } = this;
    return X(s == null ? void 0 : s.call(n, e, r), () => this._activate(t, e));
  }
  /** @internal */
  _activate(t, e) {
    const { $controller: s, view: n } = this;
    if (t === null)
      n.nodes.insertBefore(this._targetLocation);
    else
      return X(n.activate(t ?? n, s, s.scope), () => this._activated(e));
    return this._activated(e);
  }
  /** @internal */
  _activated(t) {
    const { activated: e, callbackContext: s, view: n } = this;
    return e == null ? void 0 : e.call(s, t, n);
  }
  /** @internal */
  _deactivating(t, e) {
    const { deactivating: s, callbackContext: n, view: r } = this;
    return X(s == null ? void 0 : s.call(n, e, r), () => this._deactivate(t, e));
  }
  /** @internal */
  _deactivate(t, e) {
    const { $controller: s, view: n } = this;
    if (t === null)
      n.nodes.remove();
    else
      return X(n.deactivate(t, s), () => this._deactivated(e));
    return this._deactivated(e);
  }
  /** @internal */
  _deactivated(t) {
    const { deactivated: e, callbackContext: s, view: n } = this;
    return X(e == null ? void 0 : e.call(s, t, n), () => this._removeLocation());
  }
  /** @internal */
  _getTarget() {
    const t = this._platform, e = t.document;
    let s = this.target, n = this.renderContext;
    if (s === "") {
      if (this.strict)
        throw B(
          811
          /* ErrorNames.portal_query_empty */
        );
      return e.body;
    }
    if (at(s)) {
      let r = e;
      at(n) && (n = e.querySelector(n)), n instanceof t.Node && (r = n), s = r.querySelector(s);
    }
    if (s instanceof t.Node)
      return s;
    if (s == null) {
      if (this.strict)
        throw B(
          812
          /* ErrorNames.portal_no_target */
        );
      return e.body;
    }
    return s;
  }
  /** @internal */
  _removeLocation() {
    this._targetLocation.remove(), this._targetLocation.$start.remove();
  }
  /** @internal */
  _moveLocation(t, e) {
    const s = this._targetLocation, n = s.$start, r = t.parentNode, o = [n, s];
    switch (e) {
      case "beforeend":
        oo(t, null, o);
        break;
      case "afterbegin":
        oo(t, t.firstChild, o);
        break;
      case "beforebegin":
        oo(r, t, o);
        break;
      case "afterend":
        oo(r, t.nextSibling, o);
        break;
      default:
        throw B(779, e);
    }
  }
  dispose() {
    this.view.dispose(), this.view = void 0, this.callbackContext = null;
  }
  accept(t) {
    var e;
    if (((e = this.view) == null ? void 0 : e.accept(t)) === !0)
      return !0;
  }
}
pm.$au = {
  type: ae,
  name: "portal",
  isTemplateController: !0,
  bindables: [
    { name: "target", primary: !0 },
    "position",
    "activated",
    "activating",
    "callbackContext",
    { name: "renderContext", callback: "targetChanged" },
    "strict",
    "deactivated",
    "deactivating"
  ]
  // bindables: {
  //   target: { primary: true },
  //   position: true,
  //   renderContext: { callback: 'targetChanged' },
  //   activated: true,
  //   activating: true,
  //   callbackContext: true,
  //   deactivated: true,
  //   deactivating: true,
  //   strict: true
  // }
};
let yx;
class Ma {
  constructor() {
    var u, d, f, g;
    this._parentScope = null, this._outerScope = null, this._attached = !1, this.expose = null, this.slotchange = null, this._subs = /* @__PURE__ */ new Set(), this._observer = null;
    const t = D(Yi), e = D(ue), s = D(Nn), n = D(ui), r = this.name = s.data.name, o = (u = s.projections) == null ? void 0 : u[Cg], a = (f = (d = t.instruction) == null ? void 0 : d.projections) == null ? void 0 : f[r], l = t.controller.container;
    let c, h;
    a == null ? (h = l.createChild({ inheritParentResources: !0 }), c = n.getViewFactory(o ?? yx ?? (yx = se.create({
      name: "au-slot-empty-template",
      template: "",
      needsCompile: !1
    })), h), this._hasProjection = !1) : (h = l.createChild(), h.useResources(t.parent.controller.container), xt(h, Yi, new $t(void 0, t.parent)), c = n.getViewFactory(a, h), this._hasProjection = !0, this._slotwatchers = ((g = l.getAll(tw, !1)) == null ? void 0 : g.filter((p) => p.slotName === "*" || p.slotName === r)) ?? tt), this._hasSlotWatcher = (this._slotwatchers ?? (this._slotwatchers = tt)).length > 0, this._hdrContext = t, this.view = c.create().setLocation(this._location = e);
  }
  get nodes() {
    const t = [], e = this._location;
    let s = e.$start.nextSibling;
    for (; s != null && s !== e; )
      s.nodeType !== /* comment */
      8 && t.push(s), s = s.nextSibling;
    return t;
  }
  subscribe(t) {
    this._subs.add(t);
  }
  unsubscribe(t) {
    this._subs.delete(t);
  }
  binding(t, e) {
    var r;
    for (this._parentScope = e.scope; e.vmKind === "synthetic" && ((r = e.parent) == null ? void 0 : r.viewModel) instanceof Ma; )
      e = e.parent.parent;
    const s = e.scope.bindingContext;
    let n;
    this._hasProjection && (n = this._hdrContext.controller.scope.parent, (this._outerScope = zt.fromParent(n, n.bindingContext)).overrideContext.$host = this.expose ?? s);
  }
  attaching(t, e) {
    return X(this.view.activate(t, this.$controller, this._hasProjection ? this._outerScope : this._parentScope), () => {
      this._hasSlotWatcher && (this._slotwatchers.forEach((s) => s.watch(this)), this._observe(), this._notifySlotChange(), this._attached = !0);
    });
  }
  detaching(t, e) {
    return this._attached = !1, this._unobserve(), this._slotwatchers.forEach((s) => s.unwatch(this)), this.view.deactivate(t, this.$controller);
  }
  exposeChanged(t) {
    this._hasProjection && this._outerScope != null && (this._outerScope.overrideContext.$host = t);
  }
  dispose() {
    this.view.dispose(), this.view = void 0;
  }
  accept(t) {
    var e;
    if (((e = this.view) == null ? void 0 : e.accept(t)) === !0)
      return !0;
  }
  /** @internal */
  _observe() {
    if (this._observer != null)
      return;
    const t = this._location, e = t.parentElement;
    e != null && (this._observer = kg(e, (s) => {
      wx(t, s) && this._notifySlotChange();
    })).observe(e, { childList: !0 });
  }
  /** @internal */
  _unobserve() {
    var t;
    (t = this._observer) == null || t.disconnect(), this._observer = null;
  }
  /** @internal */
  _notifySlotChange() {
    var n;
    const t = this.nodes, e = new Set(this._subs);
    let s;
    this._attached && ((n = this.slotchange) == null || n.call(void 0, this.name, t));
    for (s of e)
      s.handleSlotChange(this, t);
  }
}
Ma.$au = {
  type: Qi,
  name: "au-slot",
  template: null,
  containerless: !0,
  processContent(i, t, e) {
    e.name = i.getAttribute("name") ?? Cg;
    let s = i.firstChild, n = null;
    for (; s !== null; )
      n = s.nextSibling, Zy(s) && s.hasAttribute(Jy) && (console.warn("[DEV:aurelia] detected [au-slot] attribute on a child node", `of an <au-slot> element: "<${s.nodeName} au-slot>".`, "This element will be ignored and removed"), i.removeChild(s)), s = n;
  },
  bindables: ["expose", "slotchange"]
};
const ho = (i, t) => i.compareDocumentPosition(t), wx = (i, t) => {
  for (const { addedNodes: e, removedNodes: s, nextSibling: n } of t) {
    let r = 0, o = e.length, a;
    for (; r < o; ++r)
      if (a = e[r], ho(i.$start, a) === /* DOCUMENT_POSITION_FOLLOWING */
      4 && ho(i, a) === /* DOCUMENT_POSITION_PRECEDING */
      2)
        return !0;
    if (s.length > 0 && n != null && ho(i.$start, n) === /* DOCUMENT_POSITION_FOLLOWING */
    4 && ho(i, n) === /* DOCUMENT_POSITION_PRECEDING */
    2)
      return !0;
  }
};
class gm {
  constructor() {
    this.scopeBehavior = "auto", this._composition = void 0, this.tag = null, this._container = D(Ln), this.parent = D(Sa), this._host = D(Yr), this._location = D(ue), this._platform = D(ne), this._rendering = D(ui), this._instruction = D(Nn), this._contextFactory = D(t_(kx)), this._compiler = D(ua), this._hydrationContext = D(Yi), this._exprParser = D(Fn), this._observerLocator = D(zn);
  }
  get composing() {
    return this._composing;
  }
  get composition() {
    return this._composition;
  }
  attaching(t, e) {
    return this._composing = X(this.queue(new Ju(this.template, this.component, this.model, void 0), t), (s) => {
      this._contextFactory._isCurrent(s) && (this._composing = void 0);
    });
  }
  detaching(t) {
    const e = this._composition, s = this._composing;
    return this._contextFactory.invalidate(), this._composition = this._composing = void 0, X(s, () => e == null ? void 0 : e.deactivate(t));
  }
  /** @internal */
  propertyChanged(t) {
    var e;
    if (!(t === "composing" || t === "composition")) {
      if (t === "model" && this._composition != null) {
        this._composition.update(this.model);
        return;
      }
      if (t === "tag" && ((e = this._composition) == null ? void 0 : e.controller.vmKind) === Pe) {
        console.warn("[DEV:aurelia] Changing tag name of a custom element composition is ignored.");
        return;
      }
      this._composing = X(this._composing, () => X(this.queue(new Ju(this.template, this.component, this.model, t), void 0), (s) => {
        this._contextFactory._isCurrent(s) && (this._composing = void 0);
      }));
    }
  }
  /** @internal */
  queue(t, e) {
    const s = this._contextFactory, n = this._composition;
    return X(s.create(t), (r) => s._isCurrent(r) ? X(this.compose(r), (o) => s._isCurrent(r) ? X(o.activate(e), () => s._isCurrent(r) ? (this._composition = o, X(n == null ? void 0 : n.deactivate(e), () => r)) : X(
      o.controller.deactivate(o.controller, this.$controller),
      // todo: do we need to deactivate?
      () => (o.controller.dispose(), r)
    )) : (o.controller.dispose(), r)) : r);
  }
  /** @internal */
  compose(t) {
    const { _template: e, _component: s, _model: n } = t.change, { _container: r, $controller: o, _location: a, _instruction: l } = this, c = this._getDefinition(this._hydrationContext.controller.container, s), h = r.createChild(), u = this._platform.document.createElement(c == null ? this.tag ?? "div" : c.name);
    a.parentNode.insertBefore(u, a);
    let d;
    c == null ? d = this.tag == null ? Rr(u) : null : d = c.containerless ? Rr(u) : null;
    const f = () => {
      var m;
      if (u.remove(), d != null) {
        let b = d.$start.nextSibling, _ = null;
        for (; b !== null && b !== d; )
          _ = b.nextSibling, b.remove(), b = _;
        (m = d.$start) == null || m.remove(), d.remove();
      }
    }, g = this._createComponentInstance(h, typeof s == "string" ? c.Type : s, u, d), p = () => {
      const m = l.captures ?? tt;
      if (c !== null) {
        const b = c.capture, [_, w] = m.reduce((v, y) => {
          const k = !(y.target in c.bindables) && (b === !0 || pt(b) && !!b(y.target));
          return v[k ? 0 : 1].push(y), v;
        }, [[], []]), x = ge.$el(h, g, u, {
          projections: l.projections,
          captures: _
        }, c, d);
        return this._createSpreadBindings(u, c, w).forEach((v) => x.addBinding(v)), new ed(
          x,
          (v) => x.activate(v ?? x, o, o.scope.parent),
          // todo: call deactivate on the component component
          (v) => X(x.deactivate(v ?? x, o), f),
          // casting is technically incorrect
          // but it's ignored in the caller anyway
          (v) => {
            var y;
            return (y = g.activate) == null ? void 0 : y.call(g, v);
          },
          t
        );
      } else {
        const b = se.create({
          name: Ee.generateName(),
          template: e
        }), _ = this._rendering.getViewFactory(b, h), w = ge.$view(_, o), x = this.scopeBehavior === "auto" ? zt.fromParent(this.parent.scope, g) : zt.create(g);
        return w.setHost(u), d == null ? this._createSpreadBindings(u, b, m).forEach((v) => w.addBinding(v)) : w.setLocation(d), new ed(
          w,
          (v) => w.activate(v ?? w, o, x),
          // todo: call deactivate on the component
          // a difference with composing custom element is that we leave render location/host alone
          // as they all share the same host/render location
          (v) => X(w.deactivate(v ?? w, o), f),
          // casting is technically incorrect
          // but it's ignored in the caller anyway
          (v) => {
            var y;
            return (y = g.activate) == null ? void 0 : y.call(g, v);
          },
          t
        );
      }
    };
    return "activate" in g ? X(g.activate(n), () => p()) : p();
  }
  /** @internal */
  _createComponentInstance(t, e, s, n) {
    if (e == null)
      return new xx();
    if (typeof e == "object")
      return e;
    const r = this._platform;
    Aa(t, s, r), xt(t, ue, new $t("IRenderLocation", n));
    const o = t.invoke(e);
    return xt(t, e, new $t("au-compose.component", o)), o;
  }
  /** @internal */
  _getDefinition(t, e) {
    if (typeof e == "string") {
      const n = Ee.find(t, e);
      if (n == null)
        throw B(806, e);
      return n;
    }
    const s = pt(e) ? e : e == null ? void 0 : e.constructor;
    return Ee.isType(s, void 0) ? Ee.getDefinition(s, null) : null;
  }
  /** @internal */
  _createSpreadBindings(t, e, s) {
    const n = new jg(this.$controller, { projections: null, captures: s }, this._hydrationContext.parent);
    return wa.create(n, t, e, this._rendering, this._compiler, this._platform, this._exprParser, this._observerLocator);
  }
}
gm.$au = {
  type: Qi,
  name: "au-compose",
  capture: !0,
  containerless: !0,
  bindables: [
    "template",
    "component",
    "model",
    { name: "scopeBehavior", set: (i) => {
      if (i === "scoped" || i === "auto")
        return i;
      throw B(805, i);
    } },
    { name: "composing", mode: Ds },
    { name: "composition", mode: Ds },
    "tag"
  ]
};
class xx {
}
class kx {
  constructor() {
    this.id = 0;
  }
  _isCurrent(t) {
    return t.id === this.id;
  }
  create(t) {
    return X(t.load(), (e) => new Cx(++this.id, e));
  }
  // simplify increasing the id will invalidate all previously created context
  invalidate() {
    this.id++;
  }
}
class Ju {
  constructor(t, e, s, n) {
    this._template = t, this._component = e, this._model = s, this._src = n;
  }
  load() {
    return jt(this._template) || jt(this._component) ? Promise.all([this._template, this._component]).then(([t, e]) => new td(t, e, this._model, this._src)) : new td(this._template, this._component, this._model, this._src);
  }
}
class td {
  constructor(t, e, s, n) {
    this._template = t, this._component = e, this._model = s, this._src = n;
  }
}
class Cx {
  constructor(t, e) {
    this.id = t, this.change = e;
  }
}
class ed {
  constructor(t, e, s, n, r) {
    this.controller = t, this.start = e, this.stop = s, this.update = n, this.context = r, this.state = 0;
  }
  activate(t) {
    if (this.state !== 0)
      throw B(807, this);
    return this.state = 1, this.start(t);
  }
  deactivate(t) {
    switch (this.state) {
      case 1:
        return this.state = -1, this.stop(t);
      case -1:
        throw B(
          808
          /* ErrorNames.au_compose_duplicate_deactivate */
        );
      default:
        this.state = -1;
    }
  }
}
const Sx = /* @__PURE__ */ vt("ISanitizer", (i) => i.singleton(class {
  sanitize() {
    throw B(99, "sanitize");
  }
}));
class mm {
  constructor() {
    this._sanitizer = D(Sx);
  }
  /**
   * Process the provided markup that flows to the view.
   *
   * @param untrustedMarkup - The untrusted markup to be sanitized.
   */
  toView(t) {
    return t == null ? null : this._sanitizer.sanitize(t);
  }
}
mm.$au = {
  type: bn,
  name: "sanitize"
};
class bm {
  constructor() {
    this.el = D(Yr), this.p = D(ne), this._isActive = !1, this._task = null, this.$val = "", this.$prio = "", this.update = () => {
      this._task = null, !!this.value !== this._isToggled && (this._isToggled === this._base ? (this._isToggled = !this._base, this.$val = this.el.style.getPropertyValue("display"), this.$prio = this.el.style.getPropertyPriority("display"), this.el.style.setProperty("display", "none", "important")) : (this._isToggled = this._base, this.el.style.setProperty("display", this.$val, this.$prio), this.el.getAttribute("style") === "" && this.el.removeAttribute("style")));
    };
    const t = D(Nn);
    this._isToggled = this._base = t.alias !== "hide";
  }
  binding() {
    this._isActive = !0, this.update();
  }
  detaching() {
    var t;
    this._isActive = !1, (t = this._task) == null || t.cancel(), this._task = null;
  }
  valueChanged() {
    this._isActive && this._task === null && (this._task = this.p.domQueue.queueTask(this.update));
  }
}
bm.$au = {
  type: ae,
  name: "show",
  bindables: ["value"],
  aliases: ["hide"]
};
const Ax = [
  nx,
  cy,
  ch
], Mx = [
  zl,
  jl,
  Hl,
  Xy
], Tx = [
  $p,
  Ep,
  Rp,
  Op,
  Dp,
  Lp,
  zp,
  Bp,
  Fp,
  jp,
  Np,
  Vp,
  Hp
], Px = [
  mg,
  dg,
  fg,
  pg,
  bg,
  _g,
  gg,
  mm,
  Jo,
  sm,
  im,
  nm,
  hh,
  uh,
  om,
  dh,
  hm,
  um,
  dm,
  cc,
  hc,
  uc,
  Jg,
  tm,
  em,
  gm,
  pm,
  fm,
  bm,
  Ma
], Ix = [
  cw,
  hw,
  aw,
  lw,
  sw,
  iw,
  nw,
  rw,
  ow,
  fw,
  yw,
  pw,
  gw,
  mw,
  _w,
  uw,
  ww,
  xw
], Ex = /* @__PURE__ */ _m(ns);
function _m(i) {
  return {
    optionsProvider: i,
    /**
     * Apply this configuration to the provided container.
     */
    register(t) {
      const e = {
        coercingOptions: {
          enableCoercion: !1,
          coerceNullish: !1
        }
      };
      return i(e), t.register(hg(Kp, e.coercingOptions), Qf, ...Ax, ...Px, ...Mx, ...Tx, ...Ix);
    },
    customize(t) {
      return _m(t ?? i);
    }
  };
}
class Ox {
  constructor() {
    this.ctn = D(Ln), this.p = D(ne), this.r = D(ui);
  }
  define(t, e, s) {
    if (!t.includes("-"))
      throw _l('Invalid web-components custom element name. It must include a "-"');
    let n;
    if (e == null)
      throw _l("Invalid custom element definition");
    switch (typeof e) {
      case "function":
        n = Ee.isType(e) ? Ee.getDefinition(e) : se.create(Ee.generateName(), e);
        break;
      default:
        n = se.getOrCreate(e);
        break;
    }
    if (n.containerless)
      throw _l("Containerless custom element is not supported. Consider using buitl-in extends instead");
    const r = s != null && s.extends ? this.p.document.createElement(s.extends).constructor : this.p.HTMLElement, o = this.ctn, a = this.r, l = n.bindables, c = this.p;
    class h extends r {
      auInit() {
        if (this.auInited)
          return;
        this.auInited = !0;
        const d = o.createChild();
        bl(d, c.HTMLElement, bl(d, c.Element, bl(d, Yr, new $t("ElementProvider", this))));
        const f = a.compile(n, d), g = d.invoke(f.Type), p = this.auCtrl = ge.$el(d, g, this, null, f);
        te(this, f.key, p);
      }
      connectedCallback() {
        this.auInit(), this.auCtrl.activate(this.auCtrl, null);
      }
      disconnectedCallback() {
        this.auCtrl.deactivate(this.auCtrl, null);
      }
      adoptedCallback() {
        this.auInit();
      }
      attributeChangedCallback(d, f, g) {
        this.auInit(), this.auCtrl.viewModel[d] = g;
      }
    }
    h.observedAttributes = Object.keys(l);
    for (const u in l)
      Object.defineProperty(h.prototype, u, {
        configurable: !0,
        enumerable: !1,
        get() {
          return this.auCtrl.viewModel[u];
        },
        set(d) {
          this.auInited || this.auInit(), this.auCtrl.viewModel[u] = d;
        }
      });
    return this.p.customElements.define(t, h, s), h;
  }
}
const bl = (i, t, e) => i.registerResolver(t, e), _l = (i) => new Error(i), vm = "chartjs", dc = `<div>
    <canvas ref="mychart"></canvas>
</div>
`, ym = [], wm = {};
let vl;
function Rx(i) {
  vl || (vl = Ee.define({ name: vm, template: dc, dependencies: ym, bindables: wm })), i.register(vl);
}
const Dx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bindables: wm,
  default: dc,
  dependencies: ym,
  name: vm,
  register: Rx,
  template: dc
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Qr(i) {
  return i + 0.5 | 0;
}
const qs = (i, t, e) => Math.max(Math.min(i, e), t);
function nr(i) {
  return qs(Qr(i * 2.55), 0, 255);
}
function Gs(i) {
  return qs(Qr(i * 255), 0, 255);
}
function Cs(i) {
  return qs(Qr(i / 2.55) / 100, 0, 1);
}
function sd(i) {
  return qs(Qr(i * 100), 0, 100);
}
const Te = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
}, fc = [..."0123456789ABCDEF"], $x = (i) => fc[i & 15], Lx = (i) => fc[(i & 240) >> 4] + fc[i & 15], uo = (i) => (i & 240) >> 4 === (i & 15), Bx = (i) => uo(i.r) && uo(i.g) && uo(i.b) && uo(i.a);
function Fx(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Te[i[1]] * 17,
    g: 255 & Te[i[2]] * 17,
    b: 255 & Te[i[3]] * 17,
    a: t === 5 ? Te[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Te[i[1]] << 4 | Te[i[2]],
    g: Te[i[3]] << 4 | Te[i[4]],
    b: Te[i[5]] << 4 | Te[i[6]],
    a: t === 9 ? Te[i[7]] << 4 | Te[i[8]] : 255
  })), e;
}
const Vx = (i, t) => i < 255 ? t(i) : "";
function Nx(i) {
  var t = Bx(i) ? $x : Lx;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Vx(i.a, t) : void 0;
}
const jx = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function xm(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (r, o = (r + i / 30) % 12) => e - s * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [n(0), n(8), n(4)];
}
function zx(i, t, e) {
  const s = (n, r = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [s(5), s(3), s(1)];
}
function Hx(i, t, e) {
  const s = xm(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Wx(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function ph(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, r = Math.max(e, s, n), o = Math.min(e, s, n), a = (r + o) / 2;
  let l, c, h;
  return r !== o && (h = r - o, c = a > 0.5 ? h / (2 - r - o) : h / (r + o), l = Wx(e, s, n, h, r), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function gh(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Gs);
}
function mh(i, t, e) {
  return gh(xm, i, t, e);
}
function Ux(i, t, e) {
  return gh(Hx, i, t, e);
}
function qx(i, t, e) {
  return gh(zx, i, t, e);
}
function km(i) {
  return (i % 360 + 360) % 360;
}
function Kx(i) {
  const t = jx.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? nr(+t[5]) : Gs(+t[5]));
  const n = km(+t[2]), r = +t[3] / 100, o = +t[4] / 100;
  return t[1] === "hwb" ? s = Ux(n, r, o) : t[1] === "hsv" ? s = qx(n, r, o) : s = mh(n, r, o), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Yx(i, t) {
  var e = ph(i);
  e[0] = km(e[0] + t), e = mh(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Qx(i) {
  if (!i)
    return;
  const t = ph(i), e = t[0], s = sd(t[1]), n = sd(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Cs(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const id = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, nd = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Xx() {
  const i = {}, t = Object.keys(nd), e = Object.keys(id);
  let s, n, r, o, a;
  for (s = 0; s < t.length; s++) {
    for (o = a = t[s], n = 0; n < e.length; n++)
      r = e[n], a = a.replace(r, id[r]);
    r = parseInt(nd[o], 16), i[a] = [r >> 16 & 255, r >> 8 & 255, r & 255];
  }
  return i;
}
let fo;
function Gx(i) {
  fo || (fo = Xx(), fo.transparent = [0, 0, 0, 0]);
  const t = fo[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Zx = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Jx(i) {
  const t = Zx.exec(i);
  let e = 255, s, n, r;
  if (t) {
    if (t[7] !== s) {
      const o = +t[7];
      e = t[8] ? nr(o) : qs(o * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], r = +t[5], s = 255 & (t[2] ? nr(s) : qs(s, 0, 255)), n = 255 & (t[4] ? nr(n) : qs(n, 0, 255)), r = 255 & (t[6] ? nr(r) : qs(r, 0, 255)), {
      r: s,
      g: n,
      b: r,
      a: e
    };
  }
}
function tk(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Cs(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const yl = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, ln = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function ek(i, t, e) {
  const s = ln(Cs(i.r)), n = ln(Cs(i.g)), r = ln(Cs(i.b));
  return {
    r: Gs(yl(s + e * (ln(Cs(t.r)) - s))),
    g: Gs(yl(n + e * (ln(Cs(t.g)) - n))),
    b: Gs(yl(r + e * (ln(Cs(t.b)) - r))),
    a: i.a + e * (t.a - i.a)
  };
}
function po(i, t, e) {
  if (i) {
    let s = ph(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = mh(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function Cm(i, t) {
  return i && Object.assign(t || {}, i);
}
function rd(i) {
  var t = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  return Array.isArray(i) ? i.length >= 3 && (t = {
    r: i[0],
    g: i[1],
    b: i[2],
    a: 255
  }, i.length > 3 && (t.a = Gs(i[3]))) : (t = Cm(i, {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }), t.a = Gs(t.a)), t;
}
function sk(i) {
  return i.charAt(0) === "r" ? Jx(i) : Kx(i);
}
class $r {
  constructor(t) {
    if (t instanceof $r)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = rd(t) : e === "string" && (s = Fx(t) || Gx(t) || sk(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Cm(this._rgb);
    return t && (t.a = Cs(t.a)), t;
  }
  set rgb(t) {
    this._rgb = rd(t);
  }
  rgbString() {
    return this._valid ? tk(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Nx(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Qx(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let r;
      const o = e === r ? 0.5 : e, a = 2 * o - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      r = 1 - c, s.r = 255 & c * s.r + r * n.r + 0.5, s.g = 255 & c * s.g + r * n.g + 0.5, s.b = 255 & c * s.b + r * n.b + 0.5, s.a = o * s.a + (1 - o) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = ek(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new $r(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Gs(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Qr(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return po(this._rgb, 2, t), this;
  }
  darken(t) {
    return po(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return po(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return po(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Yx(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function _s() {
}
const ik = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function ct(i) {
  return i === null || typeof i > "u";
}
function At(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ot(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function Rt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function be(i, t) {
  return Rt(i) ? i : t;
}
function Z(i, t) {
  return typeof i > "u" ? t : i;
}
const nk = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, Sm = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function yt(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function gt(i, t, e, s) {
  let n, r, o;
  if (At(i))
    for (r = i.length, n = 0; n < r; n++)
      t.call(e, i[n], n);
  else if (ot(i))
    for (o = Object.keys(i), r = o.length, n = 0; n < r; n++)
      t.call(e, i[o[n]], o[n]);
}
function ea(i, t) {
  let e, s, n, r;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], r = t[e], n.datasetIndex !== r.datasetIndex || n.index !== r.index)
      return !1;
  return !0;
}
function sa(i) {
  if (At(i))
    return i.map(sa);
  if (ot(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = sa(i[e[n]]);
    return t;
  }
  return i;
}
function Am(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function rk(i, t, e, s) {
  if (!Am(i))
    return;
  const n = t[i], r = e[i];
  ot(n) && ot(r) ? Lr(n, r, s) : t[i] = sa(r);
}
function Lr(i, t, e) {
  const s = At(t) ? t : [t], n = s.length;
  if (!ot(i))
    return i;
  e = e || {};
  const r = e.merger || rk;
  let o;
  for (let a = 0; a < n; ++a) {
    if (o = s[a], !ot(o))
      continue;
    const l = Object.keys(o);
    for (let c = 0, h = l.length; c < h; ++c)
      r(l[c], i, o, e);
  }
  return i;
}
function xr(i, t) {
  return Lr(i, t, {
    merger: ok
  });
}
function ok(i, t, e) {
  if (!Am(i))
    return;
  const s = t[i], n = e[i];
  ot(s) && ot(n) ? xr(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = sa(n));
}
const od = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function ak(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function lk(i) {
  const t = ak(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function ei(i, t) {
  return (od[t] || (od[t] = lk(t)))(i);
}
function bh(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Br = (i) => typeof i < "u", si = (i) => typeof i == "function", ad = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function ck(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Ct = Math.PI, kt = 2 * Ct, hk = kt + Ct, ia = Number.POSITIVE_INFINITY, uk = Ct / 180, Lt = Ct / 2, vi = Ct / 4, ld = Ct * 2 / 3, Ks = Math.log10, rs = Math.sign;
function kr(i, t, e) {
  return Math.abs(i - t) < e;
}
function cd(i) {
  const t = Math.round(i);
  i = kr(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(Ks(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function dk(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, r) => n - r).pop(), t;
}
function On(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function fk(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Mm(i, t, e) {
  let s, n, r;
  for (s = 0, n = i.length; s < n; s++)
    r = i[s][e], isNaN(r) || (t.min = Math.min(t.min, r), t.max = Math.max(t.max, r));
}
function Ne(i) {
  return i * (Ct / 180);
}
function _h(i) {
  return i * (180 / Ct);
}
function hd(i) {
  if (!Rt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Tm(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let r = Math.atan2(s, e);
  return r < -0.5 * Ct && (r += kt), {
    angle: r,
    distance: n
  };
}
function pc(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function pk(i, t) {
  return (i - t + hk) % kt - Ct;
}
function ve(i) {
  return (i % kt + kt) % kt;
}
function Fr(i, t, e, s) {
  const n = ve(i), r = ve(t), o = ve(e), a = ve(r - n), l = ve(o - n), c = ve(n - r), h = ve(n - o);
  return n === r || n === o || s && r === o || a > l && c < h;
}
function Kt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function gk(i) {
  return Kt(i, -32768, 32767);
}
function Ms(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function vh(i, t, e) {
  e = e || ((o) => i[o] < t);
  let s = i.length - 1, n = 0, r;
  for (; s - n > 1; )
    r = n + s >> 1, e(r) ? n = r : s = r;
  return {
    lo: n,
    hi: s
  };
}
const Ts = (i, t, e, s) => vh(i, e, s ? (n) => {
  const r = i[n][t];
  return r < e || r === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), mk = (i, t, e) => vh(i, e, (s) => i[s][t] >= e);
function bk(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const Pm = ["push", "pop", "shift", "splice", "unshift"];
function _k(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [t]
    }
  }), Pm.forEach((e) => {
    const s = "_onData" + bh(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...r) {
        const o = n.apply(this, r);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...r);
        }), o;
      }
    });
  });
}
function ud(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (Pm.forEach((r) => {
    delete i[r];
  }), delete i._chartjs);
}
function Im(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Em = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function Om(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Em.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function vk(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const yh = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", ee = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, yk = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Rm(i, t, e) {
  const s = t.length;
  let n = 0, r = s;
  if (i._sorted) {
    const {
      iScale: o,
      _parsed: a
    } = i, l = o.axis, {
      min: c,
      max: h,
      minDefined: u,
      maxDefined: d
    } = o.getUserBounds();
    u && (n = Kt(Math.min(
      // @ts-expect-error Need to type _parsed
      Ts(a, l, c).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? s : Ts(t, l, o.getPixelForValue(c)).lo
    ), 0, s - 1)), d ? r = Kt(Math.max(
      // @ts-expect-error Need to type _parsed
      Ts(a, o.axis, h, !0).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? 0 : Ts(t, l, o.getPixelForValue(h), !0).hi + 1
    ), n, s) - n : r = s - n;
  }
  return {
    start: n,
    count: r
  };
}
function Dm(i) {
  const {
    xScale: t,
    yScale: e,
    _scaleRanges: s
  } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const r = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), r;
}
const go = (i) => i === 0 || i === 1, dd = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * kt / e)), fd = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * kt / e) + 1, Cr = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * Lt) + 1,
  easeOutSine: (i) => Math.sin(i * Lt),
  easeInOutSine: (i) => -0.5 * (Math.cos(Ct * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => go(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => go(i) ? i : dd(i, 0.075, 0.3),
  easeOutElastic: (i) => go(i) ? i : fd(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return go(i) ? i : i < 0.5 ? 0.5 * dd(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * fd(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - Cr.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Cr.easeInBounce(i * 2) * 0.5 : Cr.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function wh(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function pd(i) {
  return wh(i) ? i : new $r(i);
}
function wl(i) {
  return wh(i) ? i : new $r(i).saturate(0.5).darken(0.1).hexString();
}
const wk = ["x", "y", "borderWidth", "radius", "tension"], xk = ["color", "borderColor", "backgroundColor"];
function kk(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: xk
    },
    numbers: {
      type: "number",
      properties: wk
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Ck(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const gd = /* @__PURE__ */ new Map();
function Sk(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = gd.get(e);
  return s || (s = new Intl.NumberFormat(i, t), gd.set(e, s)), s;
}
function Xr(i, t, e) {
  return Sk(t, e).format(i);
}
const $m = {
  values(i) {
    return At(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, r = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), r = Ak(i, e);
    }
    const o = Ks(Math.abs(r)), a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Xr(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const s = e[t].significand || i / Math.pow(10, Math.floor(Ks(i)));
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length ? $m.numeric.call(this, i, t, e) : "";
  }
};
function Ak(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Ta = {
  formatters: $m
};
function Mk(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ta.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Xi = /* @__PURE__ */ Object.create(null), gc = /* @__PURE__ */ Object.create(null);
function Sr(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const r = e[s];
    i = i[r] || (i[r] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function xl(i, t, e) {
  return typeof t == "string" ? Lr(Sr(i, t), e) : Lr(Sr(i, ""), t);
}
class Tk {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => wl(n.backgroundColor), this.hoverBorderColor = (s, n) => wl(n.borderColor), this.hoverColor = (s, n) => wl(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return xl(this, t, e);
  }
  get(t) {
    return Sr(this, t);
  }
  describe(t, e) {
    return xl(gc, t, e);
  }
  override(t, e) {
    return xl(Xi, t, e);
  }
  route(t, e, s, n) {
    const r = Sr(this, t), o = Sr(this, s), a = "_" + e;
    Object.defineProperties(r, {
      [a]: {
        value: r[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = o[n];
          return ot(l) ? Object.assign({}, c, l) : Z(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var Mt = /* @__PURE__ */ new Tk({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [kk, Ck, Mk]);
function Pk(i) {
  return !i || ct(i.size) || ct(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function na(i, t, e, s, n) {
  let r = t[n];
  return r || (r = t[n] = i.measureText(n).width, e.push(n)), r > s && (s = r), s;
}
function Ik(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, r = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, r = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let o = 0;
  const a = e.length;
  let l, c, h, u, d;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && !At(u))
      o = na(i, n, r, o, u);
    else if (At(u))
      for (c = 0, h = u.length; c < h; c++)
        d = u[c], d != null && !At(d) && (o = na(i, n, r, o, d));
  i.restore();
  const f = r.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[r[l]];
    r.splice(0, f);
  }
  return o;
}
function yi(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function md(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function mc(i, t, e, s) {
  Lm(i, t, e, s, null);
}
function Lm(i, t, e, s, n) {
  let r, o, a, l, c, h, u, d;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * uk;
  if (f && typeof f == "object" && (r = f.toString(), r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, kt) : i.arc(e, s, p, 0, kt), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += ld, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += ld, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, o = Math.cos(m + vi) * l, u = Math.cos(m + vi) * (n ? n / 2 - c : l), a = Math.sin(m + vi) * l, d = Math.sin(m + vi) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, m - Ct, m - Lt), i.arc(e + d, s - o, c, m - Lt, m), i.arc(e + u, s + a, c, m, m + Lt), i.arc(e - d, s + o, c, m + Lt, m + Ct), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        m += vi;
      case "rectRot":
        u = Math.cos(m) * (n ? n / 2 : p), o = Math.cos(m) * p, a = Math.sin(m) * p, d = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + d, s - o), i.lineTo(e + u, s + a), i.lineTo(e - d, s + o), i.closePath();
        break;
      case "crossRot":
        m += vi;
      case "cross":
        u = Math.cos(m) * (n ? n / 2 : p), o = Math.cos(m) * p, a = Math.sin(m) * p, d = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - o), i.lineTo(e - d, s + o);
        break;
      case "star":
        u = Math.cos(m) * (n ? n / 2 : p), o = Math.cos(m) * p, a = Math.sin(m) * p, d = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - o), i.lineTo(e - d, s + o), m += vi, u = Math.cos(m) * (n ? n / 2 : p), o = Math.cos(m) * p, a = Math.sin(m) * p, d = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - o), i.lineTo(e - d, s + o);
        break;
      case "line":
        o = n ? n / 2 : Math.cos(m) * p, a = Math.sin(m) * p, i.moveTo(e - o, s - a), i.lineTo(e + o, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function Ps(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Pa(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Ia(i) {
  i.restore();
}
function Ek(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const r = (t.x + e.x) / 2;
    i.lineTo(r, t.y), i.lineTo(r, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Ok(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Rk(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), ct(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Dk(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const r = i.measureText(s), o = t - r.actualBoundingBoxLeft, a = t + r.actualBoundingBoxRight, l = e - r.actualBoundingBoxAscent, c = e + r.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(o, h), i.lineTo(a, h), i.stroke();
  }
}
function $k(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function Gi(i, t, e, s, n, r = {}) {
  const o = At(t) ? t : [t], a = r.strokeWidth > 0 && r.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Rk(i, r), l = 0; l < o.length; ++l)
    c = o[l], r.backdrop && $k(i, r.backdrop), a && (r.strokeColor && (i.strokeStyle = r.strokeColor), ct(r.strokeWidth) || (i.lineWidth = r.strokeWidth), i.strokeText(c, e, s, r.maxWidth)), i.fillText(c, e, s, r.maxWidth), Dk(i, e, s, c, r), s += Number(n.lineHeight);
  i.restore();
}
function Vr(i, t) {
  const {
    x: e,
    y: s,
    w: n,
    h: r,
    radius: o
  } = t;
  i.arc(e + o.topLeft, s + o.topLeft, o.topLeft, 1.5 * Ct, Ct, !0), i.lineTo(e, s + r - o.bottomLeft), i.arc(e + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, Ct, Lt, !0), i.lineTo(e + n - o.bottomRight, s + r), i.arc(e + n - o.bottomRight, s + r - o.bottomRight, o.bottomRight, Lt, 0, !0), i.lineTo(e + n, s + o.topRight), i.arc(e + n - o.topRight, s + o.topRight, o.topRight, 0, -Lt, !0), i.lineTo(e + o.topLeft, s);
}
const Lk = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Bk = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Fk(i, t) {
  const e = ("" + i).match(Lk);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const Vk = (i) => +i || 0;
function xh(i, t) {
  const e = {}, s = ot(t), n = s ? Object.keys(t) : t, r = ot(i) ? s ? (o) => Z(i[o], i[t[o]]) : (o) => i[o] : () => i;
  for (const o of n)
    e[o] = Vk(r(o));
  return e;
}
function Bm(i) {
  return xh(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Fi(i) {
  return xh(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function le(i) {
  const t = Bm(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Ut(i, t) {
  i = i || {}, t = t || Mt.font;
  let e = Z(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = Z(i.style, t.style);
  s && !("" + s).match(Bk) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: Z(i.family, t.family),
    lineHeight: Fk(Z(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: Z(i.weight, t.weight),
    string: ""
  };
  return n.string = Pk(n), n;
}
function rr(i, t, e, s) {
  let n, r, o;
  for (n = 0, r = i.length; n < r; ++n)
    if (o = i[n], o !== void 0 && o !== void 0)
      return o;
}
function Nk(i, t, e) {
  const {
    min: s,
    max: n
  } = i, r = Sm(t, (n - s) / 2), o = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: o(s, -Math.abs(r)),
    max: o(n, r)
  };
}
function di(i, t) {
  return Object.assign(Object.create(i), t);
}
function kh(i, t = [""], e, s, n = () => i[0]) {
  const r = e || i;
  typeof s > "u" && (s = jm("_fallback", i));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: r,
    _fallback: s,
    _getTarget: n,
    override: (a) => kh([a, ...i], t, r, s)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return Vm(a, l, () => Yk(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return _d(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return _d(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function Rn(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Fm(i, s),
    setContext: (r) => Rn(i, r, e, s),
    override: (r) => Rn(i.override(r), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, o) {
      return delete r[o], delete i[o], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, o, a) {
      return Vm(r, o, () => zk(r, o, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, o) {
      return r._descriptors.allKeys ? Reflect.has(i, o) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, o);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(r, o) {
      return Reflect.has(i, o);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(r, o, a) {
      return i[o] = a, delete r[o], !0;
    }
  });
}
function Fm(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: n = t.allKeys
  } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: si(e) ? e : () => e,
    isIndexable: si(s) ? s : () => s
  };
}
const jk = (i, t) => i ? i + bh(t) : t, Ch = (i, t) => ot(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Vm(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function zk(i, t, e) {
  const {
    _proxy: s,
    _context: n,
    _subProxy: r,
    _descriptors: o
  } = i;
  let a = s[t];
  return si(a) && o.isScriptable(t) && (a = Hk(t, a, i, e)), At(a) && a.length && (a = Wk(t, a, i, o.isIndexable)), Ch(t, a) && (a = Rn(a, n, r && r[t], o)), a;
}
function Hk(i, t, e, s) {
  const {
    _proxy: n,
    _context: r,
    _subProxy: o,
    _stack: a
  } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(r, o || s);
  return a.delete(i), Ch(i, l) && (l = Sh(n._scopes, n, i, l)), l;
}
function Wk(i, t, e, s) {
  const {
    _proxy: n,
    _context: r,
    _subProxy: o,
    _descriptors: a
  } = e;
  if (typeof r.index < "u" && s(i))
    return t[r.index % t.length];
  if (ot(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = Sh(c, n, i, h);
      t.push(Rn(u, r, o && o[i], a));
    }
  }
  return t;
}
function Nm(i, t, e) {
  return si(i) ? i(t, e) : i;
}
const Uk = (i, t) => i === !0 ? t : typeof i == "string" ? ei(t, i) : void 0;
function qk(i, t, e, s, n) {
  for (const r of t) {
    const o = Uk(e, r);
    if (o) {
      i.add(o);
      const a = Nm(o._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (o === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Sh(i, t, e, s) {
  const n = t._rootScopes, r = Nm(t._fallback, e, s), o = [...i, ...n], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = bd(a, o, e, r || e, s);
  return l === null || typeof r < "u" && r !== e && (l = bd(a, o, r, l, s), l === null) ? !1 : kh(Array.from(a), [""], n, r, () => Kk(t, e, s));
}
function bd(i, t, e, s, n) {
  for (; e; )
    e = qk(i, t, e, s, n);
  return e;
}
function Kk(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return At(n) && ot(e) ? e : n || {};
}
function Yk(i, t, e, s) {
  let n;
  for (const r of t)
    if (n = jm(jk(r, i), e), typeof n < "u")
      return Ch(i, n) ? Sh(e, s, i, n) : n;
}
function jm(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function _d(i) {
  let t = i._keys;
  return t || (t = i._keys = Qk(i._scopes)), t;
}
function Qk(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function zm(i, t, e, s) {
  const {
    iScale: n
  } = i, {
    key: r = "r"
  } = this._parsing, o = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, h = t[c], o[a] = {
      r: n.parse(ei(h, r), c)
    };
  return o;
}
const Xk = Number.EPSILON || 1e-14, Dn = (i, t) => t < i.length && !i[t].skip && i[t], Hm = (i) => i === "x" ? "y" : "x";
function Gk(i, t, e, s) {
  const n = i.skip ? t : i, r = t, o = e.skip ? t : e, a = pc(r, n), l = pc(o, r);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const u = s * c, d = s * h;
  return {
    previous: {
      x: r.x - u * (o.x - n.x),
      y: r.y - u * (o.y - n.y)
    },
    next: {
      x: r.x + d * (o.x - n.x),
      y: r.y + d * (o.y - n.y)
    }
  };
}
function Zk(i, t, e) {
  const s = i.length;
  let n, r, o, a, l, c = Dn(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Dn(i, h + 1), !(!l || !c)) {
      if (kr(t[h], 0, Xk)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], r = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(r, 2), !(a <= 9) && (o = 3 / Math.sqrt(a), e[h] = n * o * t[h], e[h + 1] = r * o * t[h]);
    }
}
function Jk(i, t, e = "x") {
  const s = Hm(e), n = i.length;
  let r, o, a, l = Dn(i, 0);
  for (let c = 0; c < n; ++c) {
    if (o = a, a = l, l = Dn(i, c + 1), !a)
      continue;
    const h = a[e], u = a[s];
    o && (r = (h - o[e]) / 3, a[`cp1${e}`] = h - r, a[`cp1${s}`] = u - r * t[c]), l && (r = (l[e] - h) / 3, a[`cp2${e}`] = h + r, a[`cp2${s}`] = u + r * t[c]);
  }
}
function t1(i, t = "x") {
  const e = Hm(t), s = i.length, n = Array(s).fill(0), r = Array(s);
  let o, a, l, c = Dn(i, 0);
  for (o = 0; o < s; ++o)
    if (a = l, l = c, c = Dn(i, o + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[o] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      r[o] = a ? c ? rs(n[o - 1]) !== rs(n[o]) ? 0 : (n[o - 1] + n[o]) / 2 : n[o - 1] : n[o];
    }
  Zk(i, n, r), Jk(i, r, t);
}
function mo(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function e1(i, t) {
  let e, s, n, r, o, a = Ps(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    o = r, r = a, a = e < s - 1 && Ps(i[e + 1], t), r && (n = i[e], o && (n.cp1x = mo(n.cp1x, t.left, t.right), n.cp1y = mo(n.cp1y, t.top, t.bottom)), a && (n.cp2x = mo(n.cp2x, t.left, t.right), n.cp2y = mo(n.cp2y, t.top, t.bottom)));
}
function s1(i, t, e, s, n) {
  let r, o, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    t1(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (r = 0, o = i.length; r < o; ++r)
      a = i[r], l = Gk(c, a, i[Math.min(r + 1, o - (s ? 0 : 1)) % o], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && e1(i, e);
}
function Ah() {
  return typeof window < "u" && typeof document < "u";
}
function Mh(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function ra(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ea = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function i1(i, t) {
  return Ea(i).getPropertyValue(t);
}
const n1 = ["top", "right", "bottom", "left"];
function Vi(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const r = n1[n];
    s[r] = parseFloat(i[t + "-" + r + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const r1 = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function o1(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, {
    offsetX: n,
    offsetY: r
  } = s;
  let o = !1, a, l;
  if (r1(n, r, i.target))
    a = n, l = r;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, o = !0;
  }
  return {
    x: a,
    y: l,
    box: o
  };
}
function Mi(i, t) {
  if ("native" in i)
    return i;
  const {
    canvas: e,
    currentDevicePixelRatio: s
  } = t, n = Ea(e), r = n.boxSizing === "border-box", o = Vi(n, "padding"), a = Vi(n, "border", "width"), {
    x: l,
    y: c,
    box: h
  } = o1(i, e), u = o.left + (h && a.left), d = o.top + (h && a.top);
  let {
    width: f,
    height: g
  } = t;
  return r && (f -= o.width + a.width, g -= o.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - d) / g * e.height / s)
  };
}
function a1(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const r = i && Mh(i);
    if (!r)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const o = r.getBoundingClientRect(), a = Ea(r), l = Vi(a, "border", "width"), c = Vi(a, "padding");
      t = o.width - c.width - l.width, e = o.height - c.height - l.height, s = ra(a.maxWidth, r, "clientWidth"), n = ra(a.maxHeight, r, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || ia,
    maxHeight: n || ia
  };
}
const bo = (i) => Math.round(i * 10) / 10;
function l1(i, t, e, s) {
  const n = Ea(i), r = Vi(n, "margin"), o = ra(n.maxWidth, i, "clientWidth") || ia, a = ra(n.maxHeight, i, "clientHeight") || ia, l = a1(i, t, e);
  let {
    width: c,
    height: h
  } = l;
  if (n.boxSizing === "content-box") {
    const d = Vi(n, "border", "width"), f = Vi(n, "padding");
    c -= f.width + d.width, h -= f.height + d.height;
  }
  return c = Math.max(0, c - r.width), h = Math.max(0, s ? c / s : h - r.height), c = bo(Math.min(c, o, l.maxWidth)), h = bo(Math.min(h, a, l.maxHeight)), c && !h && (h = bo(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = bo(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function vd(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), r = Math.floor(i.width * s);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const o = i.canvas;
  return o.style && (e || !o.style.height && !o.style.width) && (o.style.height = `${i.height}px`, o.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || o.height !== n || o.width !== r ? (i.currentDevicePixelRatio = s, o.height = n, o.width = r, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const c1 = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Ah() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function yd(i, t) {
  const e = i1(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ti(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function h1(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function u1(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, r = {
    x: t.cp1x,
    y: t.cp1y
  }, o = Ti(i, n, e), a = Ti(n, r, e), l = Ti(r, t, e), c = Ti(o, a, e), h = Ti(a, l, e);
  return Ti(c, h, e);
}
const d1 = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, f1 = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function An(i, t, e) {
  return i ? d1(t, e) : f1();
}
function Wm(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Um(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function qm(i) {
  return i === "angle" ? {
    between: Fr,
    compare: pk,
    normalize: ve
  } : {
    between: Ms,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function wd({
  start: i,
  end: t,
  count: e,
  loop: s,
  style: n
}) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function p1(i, t, e) {
  const {
    property: s,
    start: n,
    end: r
  } = e, {
    between: o,
    normalize: a
  } = qm(s), l = t.length;
  let {
    start: c,
    end: h,
    loop: u
  } = i, d, f;
  if (u) {
    for (c += l, h += l, d = 0, f = l; d < f && o(a(t[c % l][s]), n, r); ++d)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: u,
    style: i.style
  };
}
function Km(i, t, e) {
  if (!e)
    return [i];
  const {
    property: s,
    start: n,
    end: r
  } = e, o = t.length, {
    compare: a,
    between: l,
    normalize: c
  } = qm(s), {
    start: h,
    end: u,
    loop: d,
    style: f
  } = p1(i, t, e), g = [];
  let p = !1, m = null, b, _, w;
  const x = () => l(n, w, b) && a(n, w) !== 0, v = () => a(r, b) === 0 || l(r, w, b), y = () => p || x(), k = () => !p || v();
  for (let T = h, M = h; T <= u; ++T)
    _ = t[T % o], !_.skip && (b = c(_[s]), b !== w && (p = l(b, n, r), m === null && y() && (m = a(b, n) === 0 ? T : M), m !== null && k() && (g.push(wd({
      start: m,
      end: T,
      loop: d,
      count: o,
      style: f
    })), m = null), M = T, w = b));
  return m !== null && g.push(wd({
    start: m,
    end: u,
    loop: d,
    count: o,
    style: f
  })), g;
}
function Ym(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const r = Km(s[n], i.points, t);
    r.length && e.push(...r);
  }
  return e;
}
function g1(i, t, e, s) {
  let n = 0, r = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (r += n); r > n && i[r % t].skip; )
    r--;
  return r %= t, {
    start: n,
    end: r
  };
}
function m1(i, t, e, s) {
  const n = i.length, r = [];
  let o = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, r.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = o = c.stop ? l : null) : (o = l, a.skip && (t = l)), a = c;
  }
  return o !== null && r.push({
    start: t % n,
    end: o % n,
    loop: s
  }), r;
}
function b1(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const r = !!i._loop, {
    start: o,
    end: a
  } = g1(e, n, r, s);
  if (s === !0)
    return xd(i, [{
      start: o,
      end: a,
      loop: r
    }], e, t);
  const l = a < o ? a + n : a, c = !!i._fullLoop && o === 0 && a === n - 1;
  return xd(i, m1(e, o, l, c), e, t);
}
function xd(i, t, e, s) {
  return !s || !s.setContext || !e ? t : _1(i, t, e, s);
}
function _1(i, t, e, s) {
  const n = i._chart.getContext(), r = kd(i.options), {
    _datasetIndex: o,
    options: {
      spanGaps: a
    }
  } = i, l = e.length, c = [];
  let h = r, u = t[0].start, d = u;
  function f(g, p, m, b) {
    const _ = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= _;
      for (; e[p % l].skip; )
        p += _;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: b
      }), h = b, u = p % l);
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let p = e[u % l], m;
    for (d = u + 1; d <= g.end; d++) {
      const b = e[d % l];
      m = kd(s.setContext(di(n, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: o
      }))), v1(m, h) && f(u, d - 1, g.loop, h), p = b, h = m;
    }
    u < d - 1 && f(u, d - 1, g.loop, h);
  }
  return c;
}
function kd(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function v1(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, r) {
    return wh(r) ? (e.includes(r) || e.push(r), e.indexOf(r)) : r;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class y1 {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const r = e.listeners[n], o = e.duration;
    r.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: o,
      currentStep: Math.min(s - e.start, o)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Em.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const r = s.items;
      let o = r.length - 1, a = !1, l;
      for (; o >= 0; --o)
        l = r[o], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (r[o] = r[r.length - 1], r.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), r.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += r.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ws = /* @__PURE__ */ new y1();
const Cd = "transparent", w1 = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = pd(i || Cd), n = s.valid && pd(t || Cd);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class x1 {
  constructor(t, e, s, n) {
    const r = e[s];
    n = rr([t.to, n, r, t.from]);
    const o = rr([t.from, r, n]);
    this._active = !0, this._fn = t.fn || w1[t.type || typeof o], this._easing = Cr[t.easing] || Cr.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = o, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], r = s - this._start, o = this._duration - r;
      this._start = s, this._duration = Math.floor(Math.max(o, t.duration)), this._total += r, this._loop = !!t.loop, this._to = rr([t.to, e, n, t.from]), this._from = rr([t.from, n, e]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, r = this._from, o = this._loop, a = this._to;
    let l;
    if (this._active = r !== a && (o || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = r;
      return;
    }
    l = e / s % 2, l = o && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(r, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class Qm {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!ot(t))
      return;
    const e = Object.keys(Mt.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const r = t[n];
      if (!ot(r))
        return;
      const o = {};
      for (const a of e)
        o[a] = r[a];
      (At(r.properties) && r.properties || [n]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, o);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = C1(t, s);
    if (!n)
      return [];
    const r = this._createAnimations(n, s);
    return s.$shared && k1(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), r;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], r = t.$animations || (t.$animations = {}), o = Object.keys(e), a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = r[c];
      const d = s.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, a);
          continue;
        } else
          u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      r[c] = u = new x1(d, t, c, h), n.push(u);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return ws.add(this._chart, s), !0;
  }
}
function k1(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const r = i[s[n]];
    r && r.active() && e.push(r.wait());
  }
  return Promise.all(e);
}
function C1(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Sd(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, r = e.max === void 0 ? t : 0;
  return {
    start: s ? r : n,
    end: s ? n : r
  };
}
function S1(i, t, e) {
  if (e === !1)
    return !1;
  const s = Sd(i, e), n = Sd(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function A1(i) {
  let t, e, s, n;
  return ot(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Xm(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, r;
  for (n = 0, r = s.length; n < r; ++n)
    e.push(s[n].index);
  return e;
}
function Ad(i, t, e, s = {}) {
  const n = i.keys, r = s.mode === "single";
  let o, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (o = 0, a = n.length; o < a; ++o) {
    if (l = +n[o], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], Rt(c) && (r || t === 0 || rs(t) === rs(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function M1(i, t) {
  const {
    iScale: e,
    vScale: s
  } = t, n = e.axis === "x" ? "x" : "y", r = s.axis === "x" ? "x" : "y", o = Object.keys(i), a = new Array(o.length);
  let l, c, h;
  for (l = 0, c = o.length; l < c; ++l)
    h = o[l], a[l] = {
      [n]: h,
      [r]: i[h]
    };
  return a;
}
function kl(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function T1(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function P1(i) {
  const {
    min: t,
    max: e,
    minDefined: s,
    maxDefined: n
  } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function I1(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Md(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const r = i[n.index];
    if (e && r > 0 || !e && r < 0)
      return n.index;
  }
  return null;
}
function Td(i, t) {
  const {
    chart: e,
    _cachedMeta: s
  } = i, n = e._stacks || (e._stacks = {}), {
    iScale: r,
    vScale: o,
    index: a
  } = s, l = r.axis, c = o.axis, h = T1(r, o, s), u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const g = t[f], {
      [l]: p,
      [c]: m
    } = g, b = g._stacks || (g._stacks = {});
    d = b[c] = I1(n, h, p), d[a] = m, d._top = Md(d, o, !0, s.type), d._bottom = Md(d, o, !1, s.type);
    const _ = d._visualValues || (d._visualValues = {});
    _[a] = m;
  }
}
function Cl(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function E1(i, t) {
  return di(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function O1(i, t, e) {
  return di(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Gn(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const r = n._stacks;
      if (!r || r[s] === void 0 || r[s][e] === void 0)
        return;
      delete r[s][e], r[s]._visualValues !== void 0 && r[s]._visualValues[e] !== void 0 && delete r[s]._visualValues[e];
    }
  }
}
const Sl = (i) => i === "reset" || i === "none", Pd = (i, t) => t ? i : Object.assign({}, i), R1 = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Xm(e, !0),
  values: null
};
class Ue {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = kl(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Gn(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, d, f, g) => u === "x" ? d : u === "r" ? g : f, r = e.xAxisID = Z(s.xAxisID, Cl(t, "x")), o = e.yAxisID = Z(s.yAxisID, Cl(t, "y")), a = e.rAxisID = Z(s.rAxisID, Cl(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, r, o, a), h = e.vAxisID = n(l, o, r, a);
    e.xScale = this.getScaleForId(r), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ud(this._data, this), t._stacked && Gn(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (ot(e)) {
      const n = this._cachedMeta;
      this._data = M1(e, n);
    } else if (s !== e) {
      if (s) {
        ud(s, this);
        const n = this._cachedMeta;
        Gn(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && _k(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const r = e._stacked;
    e._stacked = kl(e.vScale, e), e.stack !== s.stack && (n = !0, Gn(e), e.stack = s.stack), this._resyncElements(t), (n || r !== e._stacked) && (Td(this, e._parsed), e._stacked = kl(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const {
      _cachedMeta: s,
      _data: n
    } = this, {
      iScale: r,
      _stacked: o
    } = s, a = r.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, u, d;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, d = n;
    else {
      At(n[t]) ? d = this.parseArrayData(s, n, t, e) : ot(n[t]) ? d = this.parseObjectData(s, n, t, e) : d = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = u = d[h], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    o && Td(this, d);
  }
  parsePrimitiveData(t, e, s, n) {
    const {
      iScale: r,
      vScale: o
    } = t, a = r.axis, l = o.axis, c = r.getLabels(), h = r === o, u = new Array(n);
    let d, f, g;
    for (d = 0, f = n; d < f; ++d)
      g = d + s, u[d] = {
        [a]: h || r.parse(c[g], g),
        [l]: o.parse(e[g], g)
      };
    return u;
  }
  parseArrayData(t, e, s, n) {
    const {
      xScale: r,
      yScale: o
    } = t, a = new Array(n);
    let l, c, h, u;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, u = e[h], a[l] = {
        x: r.parse(u[0], h),
        y: o.parse(u[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const {
      xScale: r,
      yScale: o
    } = t, {
      xAxisKey: a = "x",
      yAxisKey: l = "y"
    } = this._parsing, c = new Array(n);
    let h, u, d, f;
    for (h = 0, u = n; h < u; ++h)
      d = h + s, f = e[d], c[h] = {
        x: r.parse(ei(f, a), d),
        y: o.parse(ei(f, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, r = this._cachedMeta, o = e[t.axis], a = {
      keys: Xm(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Ad(a, o, r.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const r = s[e.axis];
    let o = r === null ? NaN : r;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, o = Ad(n, r, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, r = s._sorted && t === s.iScale, o = n.length, a = this._getOtherScale(t), l = R1(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, {
      min: h,
      max: u
    } = P1(a);
    let d, f;
    function g() {
      f = n[d];
      const p = f[a.axis];
      return !Rt(f[t.axis]) || h > p || u < p;
    }
    for (d = 0; d < o && !(!g() && (this.updateRangeFromParsed(c, t, f, l), r)); ++d)
      ;
    if (r) {
      for (d = o - 1; d >= 0; --d)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, r, o;
    for (n = 0, r = e.length; n < r; ++n)
      o = e[n][t.axis], Rt(o) && s.push(o);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, r = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(r[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(r[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = A1(Z(this.options.clip, S1(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], r = e.chartArea, o = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, r, a, l), h = a; h < a + l; ++h) {
      const u = n[h];
      u.hidden || (u.active && c ? o.push(u) : u.draw(t, r));
    }
    for (h = 0; h < o.length; ++h)
      o[h].draw(t, r);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let r;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      r = o.$context || (o.$context = O1(this.getContext(), t, o)), r.parsed = this.getParsed(t), r.raw = n.data[t], r.index = r.dataIndex = t;
    } else
      r = this.$context || (this.$context = E1(this.chart.getContext(), this.index)), r.dataset = n, r.index = r.datasetIndex = this.index;
    return r.active = !!e, r.mode = s, r;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", r = this._cachedDataOpts, o = t + "-" + e, a = r[o], l = this.enableOptionSharing && Br(s);
    if (a)
      return Pd(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), u = n ? [`${t}Hover`, "hover", t, ""] : [t, ""], d = c.getOptionScopes(this.getDataset(), h), f = Object.keys(Mt.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(d, f, g, u);
    return p.$shared && (p.$shared = l, r[o] = Object.freeze(Pd(p, l))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, r = this._cachedDataOpts, o = `animation-${e}`, a = r[o];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, u = h.datasetAnimationScopeKeys(this._type, e), d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, s, e));
    }
    const c = new Qm(n, l && l.animations);
    return l && l._cacheable && (r[o] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Sl(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, r = this.getSharedOptions(s), o = this.includeOptions(e, r) || r !== n;
    return this.updateSharedOptions(r, e, s), {
      sharedOptions: r,
      includeOptions: o
    };
  }
  updateElement(t, e, s, n) {
    Sl(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !Sl(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const r = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(r) || r
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, r = e.length, o = Math.min(r, n);
    o && this.parse(0, o), r > n ? this._insertElements(n, r - n, t) : r < n && this._removeElements(r, n - r);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, r = n.data, o = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= o; a--)
        c[a] = c[a - e];
    };
    for (l(r), a = t; a < o; ++a)
      r[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(r, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Gn(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", t, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
Ue.defaults = {};
Ue.datasetElementType = null;
Ue.dataElementType = null;
function D1(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, r = e.length; n < r; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = Im(s.sort((n, r) => n - r));
  }
  return i._cache.$bar;
}
function $1(i) {
  const t = i.iScale, e = D1(t, i.type);
  let s = t._length, n, r, o, a;
  const l = () => {
    o === 32767 || o === -32768 || (Br(a) && (s = Math.min(s, Math.abs(o - a) || s)), a = o);
  };
  for (n = 0, r = e.length; n < r; ++n)
    o = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, r = t.ticks.length; n < r; ++n)
    o = t.getPixelForTick(n), l();
  return s;
}
function L1(i, t, e, s) {
  const n = e.barThickness;
  let r, o;
  return ct(n) ? (r = t.min * e.categoryPercentage, o = e.barPercentage) : (r = n * s, o = 1), {
    chunk: r / s,
    ratio: o,
    start: t.pixels[i] - r / 2
  };
}
function B1(i, t, e, s) {
  const n = t.pixels, r = n[i];
  let o = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  o === null && (o = r - (a === null ? t.end - t.start : a - r)), a === null && (a = r + r - o);
  const c = r - (r - Math.min(o, a)) / 2 * l;
  return {
    chunk: Math.abs(a - o) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function F1(i, t, e, s) {
  const n = e.parse(i[0], s), r = e.parse(i[1], s), o = Math.min(n, r), a = Math.max(n, r);
  let l = o, c = a;
  Math.abs(o) > Math.abs(a) && (l = a, c = o), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: r,
    min: o,
    max: a
  };
}
function Gm(i, t, e, s) {
  return At(i) ? F1(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Id(i, t, e, s) {
  const n = i.iScale, r = i.vScale, o = n.getLabels(), a = n === r, l = [];
  let c, h, u, d;
  for (c = e, h = e + s; c < h; ++c)
    d = t[c], u = {}, u[n.axis] = a || n.parse(o[c], c), l.push(Gm(d, u, r, c));
  return l;
}
function Al(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function V1(i, t, e) {
  return i !== 0 ? rs(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function N1(i) {
  let t, e, s, n, r;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", r = "start") : (n = "start", r = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: r
  };
}
function j1(i, t, e, s) {
  let n = t.borderSkipped;
  const r = {};
  if (!n) {
    i.borderSkipped = r;
    return;
  }
  if (n === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const {
    start: o,
    end: a,
    reverse: l,
    top: c,
    bottom: h
  } = N1(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (r[Ed(h, o, a, l)] = !0, n = c)), r[Ed(n, o, a, l)] = !0, i.borderSkipped = r;
}
function Ed(i, t, e, s) {
  return s ? (i = z1(i, t, e), i = Od(i, e, t)) : i = Od(i, t, e), i;
}
function z1(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Od(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function H1(i, {
  inflateAmount: t
}, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Oa extends Ue {
  parsePrimitiveData(t, e, s, n) {
    return Id(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return Id(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const {
      iScale: r,
      vScale: o
    } = t, {
      xAxisKey: a = "x",
      yAxisKey: l = "y"
    } = this._parsing, c = r.axis === "x" ? a : l, h = o.axis === "x" ? a : l, u = [];
    let d, f, g, p;
    for (d = s, f = s + n; d < f; ++d)
      p = e[d], g = {}, g[r.axis] = r.parse(ei(p, c), d), u.push(Gm(ei(p, h), g, o, d));
    return u;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const r = s._custom;
    r && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, {
      iScale: s,
      vScale: n
    } = e, r = this.getParsed(t), o = r._custom, a = Al(o) ? "[" + o.start + ", " + o.end + "]" : "" + n.getLabelForValue(r[n.axis]);
    return {
      label: "" + s.getLabelForValue(r[s.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", {
      index: o,
      _cachedMeta: {
        vScale: a
      }
    } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), {
      sharedOptions: u,
      includeOptions: d
    } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = r || ct(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[a.axis], _ = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !b || Al(g._custom) || o === b._top || o === b._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      d && (_.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const w = _.options || t[f].options;
      j1(_, w, b, o), H1(_, w, h.ratio), this.updateElement(t[f], f, _, n);
    }
  }
  _getStacks(t, e) {
    const {
      iScale: s
    } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), r = s.options.stacked, o = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (h) => {
      const u = h._parsed.find((f) => f[s.axis] === l), d = u && u[h.vScale.axis];
      if (ct(d) || isNaN(d))
        return !0;
    };
    for (const h of n)
      if (!(e !== void 0 && c(h)) && ((r === !1 || o.indexOf(h.stack) === -1 || r === void 0 && h.stack === void 0) && o.push(h.stack), h.index === t))
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), r = e !== void 0 ? n.indexOf(e) : -1;
    return r === -1 ? n.length - 1 : r;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let r, o;
    for (r = 0, o = e.data.length; r < o; ++r)
      n.push(s.getPixelForValue(this.getParsed(r)[s.axis], r));
    const a = t.barThickness;
    return {
      min: a || $1(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const {
      _cachedMeta: {
        vScale: e,
        _stacked: s,
        index: n
      },
      options: {
        base: r,
        minBarLength: o
      }
    } = this, a = r || 0, l = this.getParsed(t), c = l._custom, h = Al(c);
    let u = l[e.axis], d = 0, f = s ? this.applyStack(e, l, s) : u, g, p;
    f !== u && (d = f - u, f = u), h && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && rs(u) !== rs(c.barEnd) && (d = 0), d += u);
    const m = !ct(r) && !h ? r : d;
    let b = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(d + f) : g = b, p = g - b, Math.abs(p) < o) {
      p = V1(p, e, a) * o, u === a && (b -= p / 2);
      const _ = e.getPixelForDecimal(0), w = e.getPixelForDecimal(1), x = Math.min(_, w), v = Math.max(_, w);
      b = Math.max(Math.min(b, v), x), g = b + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(a)) {
      const _ = rs(p) * e.getLineWidthForValue(a) / 2;
      b += _, p -= _;
    }
    return {
      size: p,
      base: b,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, r = n.skipNull, o = Z(n.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = r ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? B1(t, e, n, c) : L1(t, e, n, c), u = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0);
      a = h.start + h.chunk * u + h.chunk / 2, l = Math.min(o, h.chunk * h.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(o, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
    let r = 0;
    for (; r < n; ++r)
      this.getParsed(r)[e.axis] !== null && !s[r].hidden && s[r].draw(this._ctx);
  }
}
Oa.id = "bar";
Oa.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"]
    }
  }
};
Oa.overrides = {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
};
class Ra extends Ue {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, s, n) {
    const r = super.parsePrimitiveData(t, e, s, n);
    for (let o = 0; o < r.length; o++)
      r[o]._custom = this.resolveDataElementOptions(o + s).radius;
    return r;
  }
  parseArrayData(t, e, s, n) {
    const r = super.parseArrayData(t, e, s, n);
    for (let o = 0; o < r.length; o++) {
      const a = e[s + o];
      r[o]._custom = Z(a[2], this.resolveDataElementOptions(o + s).radius);
    }
    return r;
  }
  parseObjectData(t, e, s, n) {
    const r = super.parseObjectData(t, e, s, n);
    for (let o = 0; o < r.length; o++) {
      const a = e[s + o];
      r[o]._custom = Z(a && a.r && +a.r, this.resolveDataElementOptions(o + s).radius);
    }
    return r;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let s = t.length - 1; s >= 0; --s)
      e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart.data.labels || [], {
      xScale: n,
      yScale: r
    } = e, o = this.getParsed(t), a = n.getLabelForValue(o.x), l = r.getLabelForValue(o.y), c = o._custom;
    return {
      label: s[t] || "",
      value: "(" + a + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", {
      iScale: o,
      vScale: a
    } = this._cachedMeta, {
      sharedOptions: l,
      includeOptions: c
    } = this._getSharedOptions(e, n), h = o.axis, u = a.axis;
    for (let d = e; d < e + s; d++) {
      const f = t[d], g = !r && this.getParsed(d), p = {}, m = p[h] = r ? o.getPixelForDecimal(0.5) : o.getPixelForValue(g[h]), b = p[u] = r ? a.getBasePixel() : a.getPixelForValue(g[u]);
      p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(d, f.active ? "active" : n), r && (p.options.radius = 0)), this.updateElement(f, d, p, n);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, {
      $shared: !1
    }));
    const r = n.radius;
    return e !== "active" && (n.radius = 0), n.radius += Z(s && s._custom, r), n;
  }
}
Ra.id = "bubble";
Ra.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"]
    }
  }
};
Ra.overrides = {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
};
function W1(i, t, e) {
  let s = 1, n = 1, r = 0, o = 0;
  if (t < kt) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), u = Math.cos(l), d = Math.sin(l), f = (w, x, v) => Fr(w, a, l, !0) ? 1 : Math.max(x, x * e, v, v * e), g = (w, x, v) => Fr(w, a, l, !0) ? -1 : Math.min(x, x * e, v, v * e), p = f(0, c, u), m = f(Lt, h, d), b = g(Ct, c, u), _ = g(Ct + Lt, h, d);
    s = (p - b) / 2, n = (m - _) / 2, r = -(p + b) / 2, o = -(m + _) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: r,
    offsetY: o
  };
}
class en extends Ue {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let r = (l) => +s[l];
      if (ot(s[t])) {
        const {
          key: l = "value"
        } = this._parsing;
        r = (c) => +ei(s[c], l);
      }
      let o, a;
      for (o = t, a = t + e; o < a; ++o)
        n._parsed[o] = r(o);
    }
  }
  _getRotation() {
    return Ne(this.options.rotation - 90);
  }
  _getCircumference() {
    return Ne(this.options.circumference);
  }
  _getRotationExtents() {
    let t = kt, e = -kt;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const n = this.chart.getDatasetMeta(s).controller, r = n._getRotation(), o = n._getCircumference();
        t = Math.min(t, r), e = Math.max(e, r + o);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, {
      chartArea: s
    } = e, n = this._cachedMeta, r = n.data, o = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - o) / 2, 0), l = Math.min(nk(this.options.cutout, a), 1), c = this._getRingWeight(this.index), {
      circumference: h,
      rotation: u
    } = this._getRotationExtents(), {
      ratioX: d,
      ratioY: f,
      offsetX: g,
      offsetY: p
    } = W1(u, h, l), m = (s.width - o) / d, b = (s.height - o) / f, _ = Math.max(Math.min(m, b) / 2, 0), w = Sm(this.options.radius, _), x = Math.max(w * l, 0), v = (w - x) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * w, this.offsetY = p * w, n.total = this.calculateTotal(), this.outerRadius = w - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * c, 0), this.updateElements(r, 0, r.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, r = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * r / kt);
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", o = this.chart, a = o.chartArea, c = o.options.animation, h = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, d = r && c.animateScale, f = d ? 0 : this.innerRadius, g = d ? 0 : this.outerRadius, {
      sharedOptions: p,
      includeOptions: m
    } = this._getSharedOptions(e, n);
    let b = this._getRotation(), _;
    for (_ = 0; _ < e; ++_)
      b += this._circumference(_, r);
    for (_ = e; _ < e + s; ++_) {
      const w = this._circumference(_, r), x = t[_], v = {
        x: h + this.offsetX,
        y: u + this.offsetY,
        startAngle: b,
        endAngle: b + w,
        circumference: w,
        outerRadius: g,
        innerRadius: f
      };
      m && (v.options = p || this.resolveDataElementOptions(_, x.active ? "active" : n)), b += w, this.updateElement(x, _, v, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const r = t._parsed[n];
      r !== null && !isNaN(r) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(r));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? kt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], r = Xr(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: r
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, r, o, a, l;
    if (!t) {
      for (n = 0, r = s.data.datasets.length; n < r; ++n)
        if (s.isDatasetVisible(n)) {
          o = s.getDatasetMeta(n), t = o.data, a = o.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, r = t.length; n < r; ++n)
      l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const r = this.resolveDataElementOptions(s);
      e = Math.max(e, r.offset || 0, r.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(Z(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
en.id = "doughnut";
en.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
};
en.descriptors = {
  _scriptable: (i) => i !== "spacing",
  _indexable: (i) => i !== "spacing" && !i.startsWith("borderDash") && !i.startsWith("hoverBorderDash")
};
en.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: {
                pointStyle: e,
                color: s
              }
            } = i.legend.options;
            return t.labels.map((n, r) => {
              const a = i.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: n,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                fontColor: s,
                lineWidth: a.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    }
  }
};
class Da extends Ue {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, {
      dataset: s,
      data: n = [],
      _dataset: r
    } = e, o = this.chart._animationsDisabled;
    let {
      start: a,
      count: l
    } = Rm(e, n, o);
    this._drawStart = a, this._drawCount = l, Dm(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!r._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !o,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", {
      iScale: o,
      vScale: a,
      _stacked: l,
      _dataset: c
    } = this._cachedMeta, {
      sharedOptions: h,
      includeOptions: u
    } = this._getSharedOptions(e, n), d = o.axis, f = a.axis, {
      spanGaps: g,
      segment: p
    } = this.options, m = On(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || r || n === "none", _ = e + s, w = t.length;
    let x = e > 0 && this.getParsed(e - 1);
    for (let v = 0; v < w; ++v) {
      const y = t[v], k = b ? y : {};
      if (v < e || v >= _) {
        k.skip = !0;
        continue;
      }
      const T = this.getParsed(v), M = ct(T[f]), O = k[d] = o.getPixelForValue(T[d], v), $ = k[f] = r || M ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, T, l) : T[f], v);
      k.skip = isNaN(O) || isNaN($) || M, k.stop = v > 0 && Math.abs(T[d] - x[d]) > m, p && (k.parsed = T, k.raw = c.data[v]), u && (k.options = h || this.resolveDataElementOptions(v, y.active ? "active" : n)), b || this.updateElement(y, v, k, n), x = T;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const r = n[0].size(this.resolveDataElementOptions(0)), o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, r, o) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
Da.id = "line";
Da.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
};
Da.overrides = {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
};
class Gr extends Ue {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], r = Xr(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: r
    };
  }
  parseObjectData(t, e, s, n) {
    return zm.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((s, n) => {
      const r = this.getParsed(n).r;
      !isNaN(r) && this.chart.getDataVisibility(n) && (r < e.min && (e.min = r), r > e.max && (e.max = r));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), r = Math.max(n / 2, 0), o = Math.max(s.cutoutPercentage ? r / 100 * s.cutoutPercentage : 1, 0), a = (r - o) / t.getVisibleDatasetCount();
    this.outerRadius = r - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", o = this.chart, l = o.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, u = c.yCenter, d = c.getIndexAngle(0) - 0.5 * Ct;
    let f = d, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let b = f, _ = f + this._computeAngle(g, n, p), w = o.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = _, r && (l.animateScale && (w = 0), l.animateRotate && (b = _ = d));
      const x = {
        x: h,
        y: u,
        innerRadius: 0,
        outerRadius: w,
        startAngle: b,
        endAngle: _,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
      };
      this.updateElement(m, g, x, n);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((s, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t) ? Ne(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
Gr.id = "polarArea";
Gr.defaults = {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
    }
  },
  indexAxis: "r",
  startAngle: 0
};
Gr.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: {
                pointStyle: e,
                color: s
              }
            } = i.legend.options;
            return t.labels.map((n, r) => {
              const a = i.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: n,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                fontColor: s,
                lineWidth: a.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
};
class Th extends en {
}
Th.id = "pie";
Th.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
};
class $a extends Ue {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis])
    };
  }
  parseObjectData(t, e, s, n) {
    return zm.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta, s = e.dataset, n = e.data || [], r = e.iScale.getLabels();
    if (s.points = n, t !== "resize") {
      const o = this.resolveDatasetElementOptions(t);
      this.options.showLine || (o.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: r.length === n.length,
        options: o
      };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    const r = this._cachedMeta.rScale, o = n === "reset";
    for (let a = e; a < e + s; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), h = r.getPointPositionForValue(a, this.getParsed(a).r), u = o ? r.xCenter : h.x, d = o ? r.yCenter : h.y, f = {
        x: u,
        y: d,
        angle: h.angle,
        skip: isNaN(u) || isNaN(d),
        options: c
      };
      this.updateElement(l, a, f, n);
    }
  }
}
$a.id = "radar";
$a.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
};
$a.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
};
class La extends Ue {
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart.data.labels || [], {
      xScale: n,
      yScale: r
    } = e, o = this.getParsed(t), a = n.getLabelForValue(o.x), l = r.getLabelForValue(o.y);
    return {
      label: s[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, {
      data: s = []
    } = e, n = this.chart._animationsDisabled;
    let {
      start: r,
      count: o
    } = Rm(e, s, n);
    if (this._drawStart = r, this._drawCount = o, Dm(e) && (r = 0, o = s.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const {
        dataset: a,
        _dataset: l
      } = e;
      a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = s;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(a, void 0, {
        animated: !n,
        options: c
      }, t);
    } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
    this.updateElements(s, r, o, t);
  }
  addElements() {
    const {
      showLine: t
    } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, e, s, n) {
    const r = n === "reset", {
      iScale: o,
      vScale: a,
      _stacked: l,
      _dataset: c
    } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), u = this.getSharedOptions(h), d = this.includeOptions(n, u), f = o.axis, g = a.axis, {
      spanGaps: p,
      segment: m
    } = this.options, b = On(p) ? p : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || r || n === "none";
    let w = e > 0 && this.getParsed(e - 1);
    for (let x = e; x < e + s; ++x) {
      const v = t[x], y = this.getParsed(x), k = _ ? v : {}, T = ct(y[g]), M = k[f] = o.getPixelForValue(y[f], x), O = k[g] = r || T ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, y, l) : y[g], x);
      k.skip = isNaN(M) || isNaN(O) || T, k.stop = x > 0 && Math.abs(y[f] - w[f]) > b, m && (k.parsed = y, k.raw = c.data[x]), d && (k.options = u || this.resolveDataElementOptions(x, v.active ? "active" : n)), _ || this.updateElement(v, x, k, n), w = y;
    }
    this.updateSharedOptions(u, n, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = e.length - 1; l >= 0; --l)
        a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset, n = s.options && s.options.borderWidth || 0;
    if (!e.length)
      return n;
    const r = e[0].size(this.resolveDataElementOptions(0)), o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, r, o) / 2;
  }
}
La.id = "scatter";
La.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
};
La.overrides = {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
};
var U1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Oa,
  BubbleController: Ra,
  DoughnutController: en,
  LineController: Da,
  PieController: Th,
  PolarAreaController: Gr,
  RadarController: $a,
  ScatterController: La
});
function wi() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ph {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Ph.prototype, t);
  }
  constructor(t) {
    this.options = void 0, this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return wi();
  }
  parse() {
    return wi();
  }
  format() {
    return wi();
  }
  add() {
    return wi();
  }
  diff() {
    return wi();
  }
  startOf() {
    return wi();
  }
  endOf() {
    return wi();
  }
}
var q1 = {
  _date: Ph
};
function K1(i, t, e, s) {
  const {
    controller: n,
    data: r,
    _sorted: o
  } = i, a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && o && r.length) {
    const l = a._reversePixels ? mk : Ts;
    if (s) {
      if (n._sharedOptions) {
        const c = r[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const u = l(r, t, e - h), d = l(r, t, e + h);
          return {
            lo: u.lo,
            hi: d.hi
          };
        }
      }
    } else return l(r, t, e);
  }
  return {
    lo: 0,
    hi: r.length - 1
  };
}
function Zr(i, t, e, s, n) {
  const r = i.getSortedVisibleDatasetMetas(), o = e[t];
  for (let a = 0, l = r.length; a < l; ++a) {
    const {
      index: c,
      data: h
    } = r[a], {
      lo: u,
      hi: d
    } = K1(r[a], t, o, n);
    for (let f = u; f <= d; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function Y1(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const r = t ? Math.abs(s.x - n.x) : 0, o = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
  };
}
function Ml(i, t, e, s, n) {
  const r = [];
  return !n && !i.isPointInArea(t) || Zr(i, e, t, function(a, l, c) {
    !n && !Ps(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && r.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), r;
}
function Q1(i, t, e, s) {
  let n = [];
  function r(o, a, l) {
    const {
      startAngle: c,
      endAngle: h
    } = o.getProps(["startAngle", "endAngle"], s), {
      angle: u
    } = Tm(o, {
      x: t.x,
      y: t.y
    });
    Fr(u, c, h) && n.push({
      element: o,
      datasetIndex: a,
      index: l
    });
  }
  return Zr(i, e, t, r), n;
}
function X1(i, t, e, s, n, r) {
  let o = [];
  const a = Y1(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = h.getCenterPoint(n);
    if (!(!!r || i.isPointInArea(g)) && !f)
      return;
    const m = a(t, g);
    m < l ? (o = [{
      element: h,
      datasetIndex: u,
      index: d
    }], l = m) : m === l && o.push({
      element: h,
      datasetIndex: u,
      index: d
    });
  }
  return Zr(i, e, t, c), o;
}
function Tl(i, t, e, s, n, r) {
  return !r && !i.isPointInArea(t) ? [] : e === "r" && !s ? Q1(i, t, e, n) : X1(i, t, e, s, n, r);
}
function Rd(i, t, e, s, n) {
  const r = [], o = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Zr(i, e, t, (l, c, h) => {
    l[o] && l[o](t[e], n) && (r.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : r;
}
var G1 = {
  evaluateInteractionItems: Zr,
  modes: {
    index(i, t, e, s) {
      const n = Mi(t, i), r = e.axis || "x", o = e.includeInvisible || !1, a = e.intersect ? Ml(i, n, r, s, o) : Tl(i, n, r, !1, s, o), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, u = c.data[h];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = Mi(t, i), r = e.axis || "xy", o = e.includeInvisible || !1;
      let a = e.intersect ? Ml(i, n, r, s, o) : Tl(i, n, r, !1, s, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = Mi(t, i), r = e.axis || "xy", o = e.includeInvisible || !1;
      return Ml(i, n, r, s, o);
    },
    nearest(i, t, e, s) {
      const n = Mi(t, i), r = e.axis || "xy", o = e.includeInvisible || !1;
      return Tl(i, n, r, e.intersect, s, o);
    },
    x(i, t, e, s) {
      const n = Mi(t, i);
      return Rd(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = Mi(t, i);
      return Rd(i, n, "y", e.intersect, s);
    }
  }
};
const Zm = ["left", "top", "right", "bottom"];
function Zn(i, t) {
  return i.filter((e) => e.pos === t);
}
function Dd(i, t) {
  return i.filter((e) => Zm.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Jn(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, r = t ? e : s;
    return n.weight === r.weight ? n.index - r.index : n.weight - r.weight;
  });
}
function Z1(i) {
  const t = [];
  let e, s, n, r, o, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], {
      position: r,
      options: {
        stack: o,
        stackWeight: a = 1
      }
    } = n, t.push({
      index: e,
      box: n,
      pos: r,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: o && r + o,
      stackWeight: a
    });
  return t;
}
function J1(i) {
  const t = {};
  for (const e of i) {
    const {
      stack: s,
      pos: n,
      stackWeight: r
    } = e;
    if (!s || !Zm.includes(n))
      continue;
    const o = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    o.count++, o.weight += r;
  }
  return t;
}
function tC(i, t) {
  const e = J1(i), {
    vBoxMaxWidth: s,
    hBoxMaxHeight: n
  } = t;
  let r, o, a;
  for (r = 0, o = i.length; r < o; ++r) {
    a = i[r];
    const {
      fullSize: l
    } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function eC(i) {
  const t = Z1(i), e = Jn(t.filter((c) => c.box.fullSize), !0), s = Jn(Zn(t, "left"), !0), n = Jn(Zn(t, "right")), r = Jn(Zn(t, "top"), !0), o = Jn(Zn(t, "bottom")), a = Dd(t, "x"), l = Dd(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(r),
    rightAndBottom: n.concat(l).concat(o).concat(a),
    chartArea: Zn(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: r.concat(o).concat(a)
  };
}
function $d(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Jm(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function sC(i, t, e, s) {
  const {
    pos: n,
    box: r
  } = e, o = i.maxPadding;
  if (!ot(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? r.height : r.width), e.size = u.size / u.count, i[n] += e.size;
  }
  r.getPadding && Jm(o, r.getPadding());
  const a = Math.max(0, t.outerWidth - $d(o, i, "left", "right")), l = Math.max(0, t.outerHeight - $d(o, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function iC(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function nC(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const r = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((o) => {
      r[o] = Math.max(t[o], e[o]);
    }), r;
  }
  return s(i ? ["left", "right"] : ["top", "bottom"]);
}
function or(i, t, e, s) {
  const n = [];
  let r, o, a, l, c, h;
  for (r = 0, o = i.length, c = 0; r < o; ++r) {
    a = i[r], l = a.box, l.update(a.width || t.w, a.height || t.h, nC(a.horizontal, t));
    const {
      same: u,
      other: d
    } = sC(t, e, a, s);
    c |= u && n.length, h = h || d, l.fullSize || n.push(a);
  }
  return c && or(n, t, e, s) || h;
}
function _o(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Ld(i, t, e, s) {
  const n = e.padding;
  let {
    x: r,
    y: o
  } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * h, d = c.size || l.height;
      Br(c.start) && (o = c.start), l.fullSize ? _o(l, n.left, o, e.outerWidth - n.right - n.left, d) : _o(l, t.left + c.placed, o, u, d), c.start = o, c.placed += u, o = l.bottom;
    } else {
      const u = t.h * h, d = c.size || l.width;
      Br(c.start) && (r = c.start), l.fullSize ? _o(l, r, n.top, d, e.outerHeight - n.bottom - n.top) : _o(l, r, t.top + c.placed, d, u), c.start = r, c.placed += u, r = l.right;
    }
  }
  t.x = r, t.y = o;
}
var ie = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [{
        z: 0,
        draw(e) {
          t.draw(e);
        }
      }];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = le(i.options.layout.padding), r = Math.max(t - n.width, 0), o = Math.max(e - n.height, 0), a = eC(i.boxes), l = a.vertical, c = a.horizontal;
    gt(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: r,
      availableHeight: o,
      vBoxMaxWidth: r / 2 / h,
      hBoxMaxHeight: o / 2
    }), d = Object.assign({}, n);
    Jm(d, le(s));
    const f = Object.assign({
      maxPadding: d,
      w: r,
      h: o,
      x: n.left,
      y: n.top
    }, n), g = tC(l.concat(c), u);
    or(a.fullSize, f, u, g), or(l, f, u, g), or(c, f, u, g) && or(l, f, u, g), iC(f), Ld(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Ld(a.rightAndBottom, f, u, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, gt(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, i.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class tb {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class rC extends tb {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const $o = "$chartjs", oC = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Bd = (i) => i === null || i === "";
function aC(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[$o] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Bd(n)) {
    const r = yd(i, "width");
    r !== void 0 && (i.width = r);
  }
  if (Bd(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const r = yd(i, "height");
      r !== void 0 && (i.height = r);
    }
  return i;
}
const eb = c1 ? {
  passive: !0
} : !1;
function lC(i, t, e) {
  i && i.addEventListener(t, e, eb);
}
function cC(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, eb);
}
function hC(i, t) {
  const e = oC[i.type] || i.type, {
    x: s,
    y: n
  } = Mi(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function oa(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function uC(i, t, e) {
  const s = i.canvas, n = new MutationObserver((r) => {
    let o = !1;
    for (const a of r)
      o = o || oa(a.addedNodes, s), o = o && !oa(a.removedNodes, s);
    o && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function dC(i, t, e) {
  const s = i.canvas, n = new MutationObserver((r) => {
    let o = !1;
    for (const a of r)
      o = o || oa(a.removedNodes, s), o = o && !oa(a.addedNodes, s);
    o && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Nr = /* @__PURE__ */ new Map();
let Fd = 0;
function sb() {
  const i = window.devicePixelRatio;
  i !== Fd && (Fd = i, Nr.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function fC(i, t) {
  Nr.size || window.addEventListener("resize", sb), Nr.set(i, t);
}
function pC(i) {
  Nr.delete(i), Nr.size || window.removeEventListener("resize", sb);
}
function gC(i, t, e) {
  const s = i.canvas, n = s && Mh(s);
  if (!n)
    return;
  const r = Om((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), o = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || r(c, h);
  });
  return o.observe(n), fC(i, r), o;
}
function Pl(i, t, e) {
  e && e.disconnect(), t === "resize" && pC(i);
}
function mC(i, t, e) {
  const s = i.canvas, n = Om((r) => {
    i.ctx !== null && e(hC(r, i));
  }, i);
  return lC(s, t, n), n;
}
class bC extends tb {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (aC(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[$o])
      return !1;
    const s = e[$o].initial;
    ["height", "width"].forEach((r) => {
      const o = s[r];
      ct(o) ? e.removeAttribute(r) : e.setAttribute(r, o);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((r) => {
      e.style[r] = n[r];
    }), e.width = e.width, delete e[$o], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), o = {
      attach: uC,
      detach: dC,
      resize: gC
    }[e] || mC;
    n[e] = o(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: Pl,
      detach: Pl,
      resize: Pl
    }[e] || cC)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return l1(t, e, s, n);
  }
  isAttached(t) {
    const e = t && Mh(t);
    return !!(e && e.isConnected);
  }
}
function _C(i) {
  return !Ah() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? rC : bC;
}
class qe {
  constructor() {
    this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
  }
  tooltipPosition(t) {
    const {
      x: e,
      y: s
    } = this.getProps(["x", "y"], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return On(this.x) && On(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((r) => {
      n[r] = s[r] && s[r].active() ? s[r]._to : this[r];
    }), n;
  }
}
qe.defaults = {};
qe.defaultRoutes = void 0;
function vC(i, t) {
  const e = i.options.ticks, s = yC(i), n = Math.min(e.maxTicksLimit || s, s), r = e.major.enabled ? xC(t) : [], o = r.length, a = r[0], l = r[o - 1], c = [];
  if (o > n)
    return kC(t, c, r, o / n), c;
  const h = wC(r, t, n);
  if (o > 0) {
    let u, d;
    const f = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (vo(t, c, h, ct(f) ? 0 : a - f, a), u = 0, d = o - 1; u < d; u++)
      vo(t, c, h, r[u], r[u + 1]);
    return vo(t, c, h, l, ct(f) ? t.length : l + f), c;
  }
  return vo(t, c, h), c;
}
function yC(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function wC(i, t, e) {
  const s = CC(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const r = dk(s);
  for (let o = 0, a = r.length - 1; o < a; o++) {
    const l = r[o];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function xC(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function kC(i, t, e, s) {
  let n = 0, r = e[0], o;
  for (s = Math.ceil(s), o = 0; o < i.length; o++)
    o === r && (t.push(i[o]), n++, r = e[n * s]);
}
function vo(i, t, e, s, n) {
  const r = Z(s, 0), o = Math.min(Z(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = r; h < 0; )
    a++, h = Math.round(r + a * e);
  for (c = Math.max(r, 0); c < o; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(r + a * e));
}
function CC(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const SC = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Vd = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Nd = (i, t) => Math.min(t || i, i);
function jd(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let r = 0;
  for (; r < n; r += s)
    e.push(i[Math.floor(r)]);
  return e;
}
function AC(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), r = i._startPixel, o = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - r, o - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < r - a || l > o + a)))
    return l;
}
function MC(i, t) {
  gt(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let r;
    if (n > t) {
      for (r = 0; r < n; ++r)
        delete e.data[s[r]];
      s.splice(0, n);
    }
  });
}
function tr(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function zd(i, t) {
  if (!i.display)
    return 0;
  const e = Ut(i.font, t), s = le(i.padding);
  return (At(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function TC(i, t) {
  return di(i, {
    scale: t,
    type: "scale"
  });
}
function PC(i, t, e) {
  return di(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function IC(i, t, e) {
  let s = yh(i);
  return (e && t !== "right" || !e && t === "right") && (s = SC(s)), s;
}
function EC(i, t, e, s) {
  const {
    top: n,
    left: r,
    bottom: o,
    right: a,
    chart: l
  } = i, {
    chartArea: c,
    scales: h
  } = l;
  let u = 0, d, f, g;
  const p = o - n, m = a - r;
  if (i.isHorizontal()) {
    if (f = ee(s, r, a), ot(e)) {
      const b = Object.keys(e)[0], _ = e[b];
      g = h[b].getPixelForValue(_) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Vd(i, e, t);
    d = a - r;
  } else {
    if (ot(e)) {
      const b = Object.keys(e)[0], _ = e[b];
      f = h[b].getPixelForValue(_) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Vd(i, e, t);
    g = ee(s, o, n), u = e === "left" ? -Lt : Lt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: d,
    rotation: u
  };
}
class sn extends qe {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let {
      _userMin: t,
      _userMax: e,
      _suggestedMin: s,
      _suggestedMax: n
    } = this;
    return t = be(t, Number.POSITIVE_INFINITY), e = be(e, Number.NEGATIVE_INFINITY), s = be(s, Number.POSITIVE_INFINITY), n = be(n, Number.NEGATIVE_INFINITY), {
      min: be(t, s),
      max: be(e, n),
      minDefined: Rt(t),
      maxDefined: Rt(e)
    };
  }
  getMinMax(t) {
    let {
      min: e,
      max: s,
      minDefined: n,
      maxDefined: r
    } = this.getUserBounds(), o;
    if (n && r)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      o = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, o.min)), r || (s = Math.max(s, o.max));
    return e = r && e > s ? s : e, s = n && e > s ? e : s, {
      min: be(e, be(s, e)),
      max: be(s, be(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    yt(this.options.beforeUpdate, [this]);
  }
  update(t, e, s) {
    const {
      beginAtZero: n,
      grace: r,
      ticks: o
    } = this.options, a = o.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Nk(this, r, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? jd(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = vC(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    yt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    yt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    yt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), yt(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    yt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, r;
    for (s = 0, n = t.length; s < n; s++)
      r = t[s], r.label = yt(e.callback, [r.value, s, t], this);
  }
  afterTickToLabelConversion() {
    yt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    yt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Nd(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, r = e.maxRotation;
    let o = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= r || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), u = h.widest.width, d = h.highest.height, f = Kt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - tr(t.grid) - e.padding - zd(t.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), o = _h(Math.min(Math.asin(Kt((h.highest.height + 6) / a, -1, 1)), Math.asin(Kt(l / c, -1, 1)) - Math.asin(Kt(d / c, -1, 1)))), o = Math.max(n, Math.min(r, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    yt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    yt(this.options.beforeFit, [this]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, {
      chart: e,
      options: {
        ticks: s,
        title: n,
        grid: r
      }
    } = this, o = this._isVisible(), a = this.isHorizontal();
    if (o) {
      const l = zd(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = tr(r) + l) : (t.height = this.maxHeight, t.width = tr(r) + l), s.display && this.ticks.length) {
        const {
          first: c,
          last: h,
          widest: u,
          highest: d
        } = this._getLabelSizes(), f = s.padding * 2, g = Ne(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const b = s.mirror ? 0 : m * u.width + p * d.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = s.mirror ? 0 : p * u.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const {
      ticks: {
        align: r,
        padding: o
      },
      position: a
    } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = n * t.width, f = s * e.height) : (d = s * t.height, f = n * e.width) : r === "start" ? f = e.width : r === "end" ? d = t.width : r !== "inner" && (d = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((d - h + o) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - u + o) * this.width / (this.width - u), 0);
    } else {
      let h = e.height / 2, u = t.height / 2;
      r === "start" ? (h = 0, u = t.height) : r === "end" && (h = e.height, u = 0), this.paddingTop = h + o, this.paddingBottom = u + o;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    yt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {
      axis: t,
      position: e
    } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      ct(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = jd(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const {
      ctx: n,
      _longestTextCache: r
    } = this, o = [], a = [], l = Math.floor(e / Nd(e, s));
    let c = 0, h = 0, u, d, f, g, p, m, b, _, w, x, v;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = m = p.string, b = r[m] = r[m] || {
        data: {},
        gc: []
      }, _ = p.lineHeight, w = x = 0, !ct(g) && !At(g))
        w = na(n, b.data, b.gc, w, g), x = _;
      else if (At(g))
        for (d = 0, f = g.length; d < f; ++d)
          v = g[d], !ct(v) && !At(v) && (w = na(n, b.data, b.gc, w, v), x += _);
      o.push(w), a.push(x), c = Math.max(w, c), h = Math.max(x, h);
    }
    MC(r, e);
    const y = o.indexOf(c), k = a.indexOf(h), T = (M) => ({
      width: o[M] || 0,
      height: a[M] || 0
    });
    return {
      first: T(0),
      last: T(e - 1),
      widest: T(y),
      highest: T(k),
      widths: o,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return gk(this._alignToPixels ? yi(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {
      min: t,
      max: e
    } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = PC(this.getContext(), t, s));
    }
    return this.$context || (this.$context = TC(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Ne(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), r = this._getLabelSizes(), o = t.autoSkipPadding || 0, a = r ? r.widest.width + o : 0, l = r ? r.highest.height + o : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, {
      grid: r,
      position: o,
      border: a
    } = n, l = r.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), d = tr(r), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function(I) {
      return yi(s, I, p);
    };
    let _, w, x, v, y, k, T, M, O, $, V, z;
    if (o === "top")
      _ = b(this.bottom), k = this.bottom - d, M = _ - m, $ = b(t.top) + m, z = t.bottom;
    else if (o === "bottom")
      _ = b(this.top), $ = t.top, z = b(t.bottom) - m, k = _ + m, M = this.top + d;
    else if (o === "left")
      _ = b(this.right), y = this.right - d, T = _ - m, O = b(t.left) + m, V = t.right;
    else if (o === "right")
      _ = b(this.left), O = t.left, V = b(t.right) - m, y = _ + m, T = this.left + d;
    else if (e === "x") {
      if (o === "center")
        _ = b((t.top + t.bottom) / 2 + 0.5);
      else if (ot(o)) {
        const I = Object.keys(o)[0], W = o[I];
        _ = b(this.chart.scales[I].getPixelForValue(W));
      }
      $ = t.top, z = t.bottom, k = _ + m, M = k + d;
    } else if (e === "y") {
      if (o === "center")
        _ = b((t.left + t.right) / 2);
      else if (ot(o)) {
        const I = Object.keys(o)[0], W = o[I];
        _ = b(this.chart.scales[I].getPixelForValue(W));
      }
      y = _ - m, T = y - d, O = t.left, V = t.right;
    }
    const H = Z(n.ticks.maxTicksLimit, u), N = Math.max(1, Math.ceil(u / H));
    for (w = 0; w < u; w += N) {
      const I = this.getContext(w), W = r.setContext(I), it = a.setContext(I), L = W.lineWidth, J = W.color, A = it.dash || [], E = it.dashOffset, S = W.tickWidth, P = W.tickColor, dt = W.tickBorderDash || [], C = W.tickBorderDashOffset;
      x = AC(this, w, l), x !== void 0 && (v = yi(s, x, L), c ? y = T = O = V = v : k = M = $ = z = v, f.push({
        tx1: y,
        ty1: k,
        tx2: T,
        ty2: M,
        x1: O,
        y1: $,
        x2: V,
        y2: z,
        width: L,
        color: J,
        borderDash: A,
        borderDashOffset: E,
        tickWidth: S,
        tickColor: P,
        tickBorderDash: dt,
        tickBorderDashOffset: C
      }));
    }
    return this._ticksLength = u, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, {
      position: n,
      ticks: r
    } = s, o = this.isHorizontal(), a = this.ticks, {
      align: l,
      crossAlign: c,
      padding: h,
      mirror: u
    } = r, d = tr(s.grid), f = d + h, g = u ? -h : f, p = -Ne(this.labelRotation), m = [];
    let b, _, w, x, v, y, k, T, M, O, $, V, z = "middle";
    if (n === "top")
      y = this.bottom - g, k = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      y = this.top + g, k = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const N = this._getYAxisLabelAlignment(d);
      k = N.textAlign, v = N.x;
    } else if (n === "right") {
      const N = this._getYAxisLabelAlignment(d);
      k = N.textAlign, v = N.x;
    } else if (e === "x") {
      if (n === "center")
        y = (t.top + t.bottom) / 2 + f;
      else if (ot(n)) {
        const N = Object.keys(n)[0], I = n[N];
        y = this.chart.scales[N].getPixelForValue(I) + f;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        v = (t.left + t.right) / 2 - f;
      else if (ot(n)) {
        const N = Object.keys(n)[0], I = n[N];
        v = this.chart.scales[N].getPixelForValue(I);
      }
      k = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" && (l === "start" ? z = "top" : l === "end" && (z = "bottom"));
    const H = this._getLabelSizes();
    for (b = 0, _ = a.length; b < _; ++b) {
      w = a[b], x = w.label;
      const N = r.setContext(this.getContext(b));
      T = this.getPixelForTick(b) + r.labelOffset, M = this._resolveTickFontOptions(b), O = M.lineHeight, $ = At(x) ? x.length : 1;
      const I = $ / 2, W = N.color, it = N.textStrokeColor, L = N.textStrokeWidth;
      let J = k;
      o ? (v = T, k === "inner" && (b === _ - 1 ? J = this.options.reverse ? "left" : "right" : b === 0 ? J = this.options.reverse ? "right" : "left" : J = "center"), n === "top" ? c === "near" || p !== 0 ? V = -$ * O + O / 2 : c === "center" ? V = -H.highest.height / 2 - I * O + O : V = -H.highest.height + O / 2 : c === "near" || p !== 0 ? V = O / 2 : c === "center" ? V = H.highest.height / 2 - I * O : V = H.highest.height - $ * O, u && (V *= -1), p !== 0 && !N.showLabelBackdrop && (v += O / 2 * Math.sin(p))) : (y = T, V = (1 - $) * O / 2);
      let A;
      if (N.showLabelBackdrop) {
        const E = le(N.backdropPadding), S = H.heights[b], P = H.widths[b];
        let dt = V - E.top, C = 0 - E.left;
        switch (z) {
          case "middle":
            dt -= S / 2;
            break;
          case "bottom":
            dt -= S;
            break;
        }
        switch (k) {
          case "center":
            C -= P / 2;
            break;
          case "right":
            C -= P;
            break;
          case "inner":
            b === _ - 1 ? C -= P : b > 0 && (C -= P / 2);
            break;
        }
        A = {
          left: C,
          top: dt,
          width: P + E.width,
          height: S + E.height,
          color: N.backdropColor
        };
      }
      m.push({
        label: x,
        font: M,
        textOffset: V,
        options: {
          rotation: p,
          color: W,
          strokeColor: it,
          strokeWidth: L,
          textAlign: J,
          textBaseline: z,
          translation: [v, y],
          backdrop: A
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const {
      position: t,
      ticks: e
    } = this.options;
    if (-Ne(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const {
      position: e,
      ticks: {
        crossAlign: s,
        mirror: n,
        padding: r
      }
    } = this.options, o = this._getLabelSizes(), a = t + r, l = o.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const {
      ctx: t,
      options: {
        backgroundColor: e
      },
      left: s,
      top: n,
      width: r,
      height: o
    } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, r, o), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((r) => r.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let r, o;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (r = 0, o = n.length; r < o; ++r) {
        const l = n[r];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const {
      chart: t,
      ctx: e,
      options: {
        border: s,
        grid: n
      }
    } = this, r = s.setContext(this.getContext()), o = s.display ? r.width : 0;
    if (!o)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal() ? (c = yi(t, this.left, o) - o / 2, h = yi(t, this.right, a) + a / 2, u = d = l) : (u = yi(t, this.top, o) - o / 2, d = yi(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = r.width, e.strokeStyle = r.color, e.beginPath(), e.moveTo(c, u), e.lineTo(h, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Pa(s, n);
    const r = this.getLabelItems(t);
    for (const o of r) {
      const a = o.options, l = o.font, c = o.label, h = o.textOffset;
      Gi(s, c, 0, h, l, a);
    }
    n && Ia(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: {
        position: e,
        title: s,
        reverse: n
      }
    } = this;
    if (!s.display)
      return;
    const r = Ut(s.font), o = le(s.padding), a = s.align;
    let l = r.lineHeight / 2;
    e === "bottom" || e === "center" || ot(e) ? (l += o.bottom, At(s.text) && (l += r.lineHeight * (s.text.length - 1))) : l += o.top;
    const {
      titleX: c,
      titleY: h,
      maxWidth: u,
      rotation: d
    } = EC(this, l, e, a);
    Gi(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: u,
      rotation: d,
      textAlign: IC(a, e, n),
      textBaseline: "middle",
      translation: [c, h]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = Z(t.grid && t.grid.z, -1), n = Z(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== sn.prototype.draw ? [{
      z: e,
      draw: (r) => {
        this.draw(r);
      }
    }] : [{
      z: s,
      draw: (r) => {
        this.drawBackground(), this.drawGrid(r), this.drawTitle();
      }
    }, {
      z: n,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: e,
      draw: (r) => {
        this.drawLabels(r);
      }
    }];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let r, o;
    for (r = 0, o = e.length; r < o; ++r) {
      const a = e[r];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Ut(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class yo {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    DC(e) && (s = this.register(e));
    const n = this.items, r = t.id, o = this.scope + "." + r;
    if (!r)
      throw new Error("class does not have id: " + t);
    return r in n || (n[r] = t, OC(t, o, s), this.override && Mt.override(t.id, t.overrides)), o;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in Mt[n] && (delete Mt[n][s], this.override && delete Xi[s]);
  }
}
function OC(i, t, e) {
  const s = Lr(/* @__PURE__ */ Object.create(null), [e ? Mt.get(e) : {}, Mt.get(t), i.defaults]);
  Mt.set(t, s), i.defaultRoutes && RC(t, i.defaultRoutes), i.descriptors && Mt.describe(t, i.descriptors);
}
function RC(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), r = [i].concat(s).join("."), o = t[e].split("."), a = o.pop(), l = o.join(".");
    Mt.route(r, n, l, a);
  });
}
function DC(i) {
  return "id" in i && "defaults" in i;
}
class $C {
  constructor() {
    this.controllers = new yo(Ue, "datasets", !0), this.elements = new yo(qe, "elements"), this.plugins = new yo(Object, "plugins"), this.scales = new yo(sn, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [...e].forEach((n) => {
      const r = s || this._getRegistryForType(n);
      s || r.isForType(n) || r === this.plugins && n.id ? this._exec(t, r, n) : gt(n, (o) => {
        const a = s || this._getRegistryForType(o);
        this._exec(t, a, o);
      });
    });
  }
  _exec(t, e, s) {
    const n = bh(t);
    yt(s["before" + n], [], s), e[t](s), yt(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var Je = /* @__PURE__ */ new $C();
class LC {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const r = n ? this._descriptors(t).filter(n) : this._descriptors(t), o = this._notify(r, t, e, s);
    return e === "afterDestroy" && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), o;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const r of t) {
      const o = r.plugin, a = o[s], l = [e, n, r.options];
      if (yt(a, l, o) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    ct(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = Z(s.options && s.options.plugins, {}), r = BC(s);
    return n === !1 && !e ? [] : VC(t, r, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (r, o) => r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function BC(i) {
  const t = {}, e = [], s = Object.keys(Je.plugins.items);
  for (let r = 0; r < s.length; r++)
    e.push(Je.getPlugin(s[r]));
  const n = i.plugins || [];
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    e.indexOf(o) === -1 && (e.push(o), t[o.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function FC(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function VC(i, {
  plugins: t,
  localIds: e
}, s, n) {
  const r = [], o = i.getContext();
  for (const a of t) {
    const l = a.id, c = FC(s[l], n);
    c !== null && r.push({
      plugin: a,
      options: NC(i.config, {
        plugin: a,
        local: e[l]
      }, c, o)
    });
  }
  return r;
}
function NC(i, {
  plugin: t,
  local: e
}, s, n) {
  const r = i.pluginScopeKeys(t), o = i.getOptionScopes(s, r);
  return e && t.defaults && o.push(t.defaults), i.createResolver(o, n, [""], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function bc(i, t) {
  const e = Mt.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function jC(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function zC(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Hd(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function HC(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function _c(i, ...t) {
  if (Hd(i))
    return i;
  for (const e of t) {
    const s = e.axis || HC(e.position) || i.length > 1 && Hd(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function Wd(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function WC(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return Wd(i, "x", e[0]) || Wd(i, "y", e[0]);
  }
  return {};
}
function UC(i, t) {
  const e = Xi[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = bc(i.type, t), r = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((o) => {
    const a = s[o];
    if (!ot(a))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const l = _c(o, a, WC(o, i), Mt.scales[a.type]), c = zC(l, n), h = e.scales || {};
    r[o] = xr(/* @__PURE__ */ Object.create(null), [{
      axis: l
    }, a, h[l], h[c]]);
  }), i.data.datasets.forEach((o) => {
    const a = o.type || i.type, l = o.indexAxis || bc(a, t), h = (Xi[a] || {}).scales || {};
    Object.keys(h).forEach((u) => {
      const d = jC(u, l), f = o[d + "AxisID"] || d;
      r[f] = r[f] || /* @__PURE__ */ Object.create(null), xr(r[f], [{
        axis: d
      }, s[f], h[u]]);
    });
  }), Object.keys(r).forEach((o) => {
    const a = r[o];
    xr(a, [Mt.scales[a.type], Mt.scale]);
  }), r;
}
function ib(i) {
  const t = i.options || (i.options = {});
  t.plugins = Z(t.plugins, {}), t.scales = UC(i, t);
}
function nb(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function qC(i) {
  return i = i || {}, i.data = nb(i.data), ib(i), i;
}
const Ud = /* @__PURE__ */ new Map(), rb = /* @__PURE__ */ new Set();
function wo(i, t) {
  let e = Ud.get(i);
  return e || (e = t(), Ud.set(i, e), rb.add(e)), e;
}
const er = (i, t, e) => {
  const s = ei(t, e);
  s !== void 0 && i.add(s);
};
class KC {
  constructor(t) {
    this._config = qC(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = nb(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), ib(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return wo(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return wo(`${t}.transition.${e}`, () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]);
  }
  datasetElementScopeKeys(t, e) {
    return wo(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return wo(`${s}-plugin-${e}`, () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const {
      options: n,
      type: r
    } = this, o = this._cachedScopes(t, s), a = o.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((u) => er(l, t, u))), h.forEach((u) => er(l, n, u)), h.forEach((u) => er(l, Xi[r] || {}, u)), h.forEach((u) => er(l, Mt, u)), h.forEach((u) => er(l, gc, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), rb.has(e) && o.set(e, c), c;
  }
  chartOptionScopes() {
    const {
      options: t,
      type: e
    } = this;
    return [t, Xi[e] || {}, Mt.datasets[e] || {}, {
      type: e
    }, Mt, gc];
  }
  resolveNamedOptions(t, e, s, n = [""]) {
    const r = {
      $shared: !0
    }, {
      resolver: o,
      subPrefixes: a
    } = qd(this._resolverCache, t, n);
    let l = o;
    if (QC(o, e)) {
      r.$shared = !1, s = si(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Rn(o, s, c);
    }
    for (const c of e)
      r[c] = l[c];
    return r;
  }
  createResolver(t, e, s = [""], n) {
    const {
      resolver: r
    } = qd(this._resolverCache, t, s);
    return ot(e) ? Rn(r, e, void 0, n) : r;
  }
}
function qd(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let r = s.get(n);
  return r || (r = {
    resolver: kh(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, r)), r;
}
const YC = (i) => ot(i) && Object.getOwnPropertyNames(i).some((t) => si(i[t]));
function QC(i, t) {
  const {
    isScriptable: e,
    isIndexable: s
  } = Fm(i);
  for (const n of t) {
    const r = e(n), o = s(n), a = (o || r) && i[n];
    if (r && (si(a) || YC(a)) || o && At(a))
      return !0;
  }
  return !1;
}
var XC = "4.4.6";
const GC = ["top", "bottom", "left", "right", "chartArea"];
function Kd(i, t) {
  return i === "top" || i === "bottom" || GC.indexOf(i) === -1 && t === "x";
}
function Yd(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function Qd(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), yt(e && e.onComplete, [i], t);
}
function ZC(i) {
  const t = i.chart, e = t.options.animation;
  yt(e && e.onProgress, [i], t);
}
function ob(i) {
  return Ah() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const aa = {}, ab = (i) => {
  const t = ob(i);
  return Object.values(aa).filter((e) => e.canvas === t).pop();
};
function JC(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const r = +n;
    if (r >= t) {
      const o = i[n];
      delete i[n], (e > 0 || r > t) && (i[r + e] = o);
    }
  }
}
function tS(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
function xo(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function eS(i, t) {
  const {
    xScale: e,
    yScale: s
  } = i;
  return e && s ? {
    left: xo(e, t, "left"),
    right: xo(e, t, "right"),
    top: xo(s, t, "top"),
    bottom: xo(s, t, "bottom")
  } : t;
}
class Vs {
  static register(...t) {
    Je.add(...t), Xd();
  }
  static unregister(...t) {
    Je.remove(...t), Xd();
  }
  constructor(t, e) {
    const s = this.config = new KC(e), n = ob(t), r = ab(n);
    if (r)
      throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
    const o = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || _C(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, o.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = ik(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new LC(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = vk((u) => this.update(u), o.resizeDelay || 0), this._dataChanges = [], aa[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ws.listen(this, "complete", Qd), ws.listen(this, "progress", ZC), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: {
        aspectRatio: t,
        maintainAspectRatio: e
      },
      width: s,
      height: n,
      _aspectRatio: r
    } = this;
    return ct(t) ? e && r ? r : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Je;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : vd(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return md(this.canvas, this.ctx), this;
  }
  stop() {
    return ws.stop(this), this;
  }
  resize(t, e) {
    ws.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, r = s.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(n, t, e, r), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, vd(this, a, !0) && (this.notifyPlugins("resize", {
      size: o
    }), yt(s.onResize, [this, o], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    gt(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((o, a) => (o[a] = !1, o), {});
    let r = [];
    e && (r = r.concat(Object.keys(e).map((o) => {
      const a = e[o], l = _c(o, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), gt(r, (o) => {
      const a = o.options, l = a.id, c = _c(l, a), h = Z(a.type, o.dtype);
      (a.position === void 0 || Kd(a.position, c) !== Kd(o.dposition)) && (a.position = o.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === h)
        u = s[l];
      else {
        const d = Je.getScale(h);
        u = new d({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[u.id] = u;
      }
      u.init(a, t);
    }), gt(n, (o, a) => {
      o || delete s[a];
    }), gt(s, (o) => {
      ie.configure(this, o, o.options), ie.addBox(this, o);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, r) => n.index - r.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Yd("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: {
        datasets: e
      }
    } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((r) => r === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const r = e[s];
      let o = this.getDatasetMeta(s);
      const a = r.type || this.config.type;
      if (o.type && o.type !== a && (this._destroyDatasetMeta(s), o = this.getDatasetMeta(s)), o.type = a, o.indexAxis = r.indexAxis || bc(a, this.options), o.order = r.order || 0, o.index = s, o.label = "" + r.label, o.visible = this.isDatasetVisible(s), o.controller)
        o.controller.updateIndex(s), o.controller.linkScales();
      else {
        const l = Je.getController(a), {
          datasetElementType: c,
          dataElementType: h
        } = Mt.datasets[a];
        Object.assign(l, {
          dataElementType: Je.getElement(h),
          datasetElementType: c && Je.getElement(c)
        }), o.controller = new l(this, s), t.push(o.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    gt(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const {
        controller: u
      } = this.getDatasetMeta(c), d = !n && r.indexOf(u) === -1;
      u.buildOrUpdateElements(d), o = Math.max(+u.getMaxOverflow(), o);
    }
    o = this._minPadding = s.layout.autoPadding ? o : 0, this._updateLayout(o), n || gt(r, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Yd("z", "_idx"));
    const {
      _active: a,
      _lastEvent: l
    } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    gt(this.scales, (t) => {
      ie.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!ad(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const {
      _hiddenIndices: t
    } = this, e = this._getUniformDataChanges() || [];
    for (const {
      method: s,
      start: n,
      count: r
    } of e) {
      const o = s === "_removeElements" ? -r : r;
      JC(t, n, o);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (r) => new Set(t.filter((o) => o[0] === r).map((o, a) => a + "," + o.splice(1).join(","))), n = s(0);
    for (let r = 1; r < e; r++)
      if (!ad(n, s(r)))
        return;
    return Array.from(n).map((r) => r.split(",")).map((r) => ({
      method: r[1],
      start: +r[2],
      count: +r[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    ie.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], gt(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, r) => {
      n._idx = r;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, si(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ws.has(this) ? this.attached && !ws.running(this) && ws.start(this) : (this.draw(), Qd({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const {
        width: s,
        height: n
      } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, r;
    for (n = 0, r = e.length; n < r; ++n) {
      const o = e[n];
      (!t || o.visible) && s.push(o);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = t._clip, n = !s.disabled, r = eS(t, this.chartArea), o = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", o) !== !1 && (n && Pa(e, {
      left: s.left === !1 ? 0 : r.left - s.left,
      right: s.right === !1 ? this.width : r.right + s.right,
      top: s.top === !1 ? 0 : r.top - s.top,
      bottom: s.bottom === !1 ? this.height : r.bottom + s.bottom
    }), t.controller.draw(), n && Ia(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o));
  }
  isPointInArea(t) {
    return Ps(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const r = G1.modes[e];
    return typeof r == "function" ? r(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((r) => r && r._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = di(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", r = this.getDatasetMeta(t), o = r.controller._resolveAnimations(void 0, n);
    Br(e) ? (r.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), o.update(r, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), ws.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const {
      canvas: t,
      ctx: e
    } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), md(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete aa[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (r, o) => {
      e.addEventListener(this, r, o), t[r] = o;
    }, n = (r, o, a) => {
      r.offsetX = o, r.offsetY = a, this._eventHandler(r);
    };
    gt(this.options.events, (r) => s(r, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, r = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let o;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", r), s("detach", o);
    };
    o = () => {
      this.attached = !1, n("resize", r), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : o();
  }
  unbindEvents() {
    gt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, gt(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let r, o, a, l;
    for (e === "dataset" && (r = this.getDatasetMeta(t[0].datasetIndex), r.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      o = t[a];
      const c = o && this.getDatasetMeta(o.datasetIndex).controller;
      c && c[n + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({
      datasetIndex: r,
      index: o
    }) => {
      const a = this.getDatasetMeta(r);
      if (!a)
        throw new Error("No dataset found at index " + r);
      return {
        datasetIndex: r,
        element: a.data[o],
        index: o
      };
    });
    !ea(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, r = (l, c) => l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)), o = r(e, t), a = s ? t : r(t, e);
    o.length && this.updateHoverStyle(o, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (o) => (o.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const r = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (r || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const {
      _active: n = [],
      options: r
    } = this, o = e, a = this._getActiveElements(t, n, s, o), l = ck(t), c = tS(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, yt(r.onHover, [t, a, this], this), l && yt(r.onClick, [t, a, this], this));
    const h = !ea(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const r = this.options.hover;
    return this.getElementsAtEventForMode(t, r.mode, r, n);
  }
}
Vs.defaults = Mt;
Vs.instances = aa;
Vs.overrides = Xi;
Vs.registry = Je;
Vs.version = XC;
Vs.getChart = ab;
function Xd() {
  return gt(Vs.instances, (i) => i._plugins.invalidate());
}
function sS(i, t, e) {
  const {
    startAngle: s,
    pixelMargin: n,
    x: r,
    y: o,
    outerRadius: a,
    innerRadius: l
  } = t;
  let c = n / a;
  i.beginPath(), i.arc(r, o, a, s - c, e + c), l > n ? (c = n / l, i.arc(r, o, l, e + c, s - c, !0)) : i.arc(r, o, n, e + Lt, s - Lt), i.closePath(), i.clip();
}
function iS(i) {
  return xh(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function nS(i, t, e, s) {
  const n = iS(i.options.borderRadius), r = (e - t) / 2, o = Math.min(r, s * t / 2), a = (l) => {
    const c = (e - Math.min(r, l)) * s / 2;
    return Kt(l, 0, Math.min(r, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: Kt(n.innerStart, 0, o),
    innerEnd: Kt(n.innerEnd, 0, o)
  };
}
function cn(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function la(i, t, e, s, n, r) {
  const {
    x: o,
    y: a,
    startAngle: l,
    pixelMargin: c,
    innerRadius: h
  } = t, u = Math.max(t.outerRadius + s + e - c, 0), d = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const N = h > 0 ? h - s : 0, I = u > 0 ? u - s : 0, W = (N + I) / 2, it = W !== 0 ? g * W / (W + s) : g;
    f = (g - it) / 2;
  }
  const p = Math.max(1e-3, g * u - e / Ct) / u, m = (g - p) / 2, b = l + m + f, _ = n - m - f, {
    outerStart: w,
    outerEnd: x,
    innerStart: v,
    innerEnd: y
  } = nS(t, d, u, _ - b), k = u - w, T = u - x, M = b + w / k, O = _ - x / T, $ = d + v, V = d + y, z = b + v / $, H = _ - y / V;
  if (i.beginPath(), r) {
    const N = (M + O) / 2;
    if (i.arc(o, a, u, M, N), i.arc(o, a, u, N, O), x > 0) {
      const L = cn(T, O, o, a);
      i.arc(L.x, L.y, x, O, _ + Lt);
    }
    const I = cn(V, _, o, a);
    if (i.lineTo(I.x, I.y), y > 0) {
      const L = cn(V, H, o, a);
      i.arc(L.x, L.y, y, _ + Lt, H + Math.PI);
    }
    const W = (_ - y / d + (b + v / d)) / 2;
    if (i.arc(o, a, d, _ - y / d, W, !0), i.arc(o, a, d, W, b + v / d, !0), v > 0) {
      const L = cn($, z, o, a);
      i.arc(L.x, L.y, v, z + Math.PI, b - Lt);
    }
    const it = cn(k, b, o, a);
    if (i.lineTo(it.x, it.y), w > 0) {
      const L = cn(k, M, o, a);
      i.arc(L.x, L.y, w, b - Lt, M);
    }
  } else {
    i.moveTo(o, a);
    const N = Math.cos(M) * u + o, I = Math.sin(M) * u + a;
    i.lineTo(N, I);
    const W = Math.cos(O) * u + o, it = Math.sin(O) * u + a;
    i.lineTo(W, it);
  }
  i.closePath();
}
function rS(i, t, e, s, n) {
  const {
    fullCircles: r,
    startAngle: o,
    circumference: a
  } = t;
  let l = t.endAngle;
  if (r) {
    la(i, t, e, s, l, n);
    for (let c = 0; c < r; ++c)
      i.fill();
    isNaN(a) || (l = o + (a % kt || kt));
  }
  return la(i, t, e, s, l, n), i.fill(), l;
}
function oS(i, t, e, s, n) {
  const {
    fullCircles: r,
    startAngle: o,
    circumference: a,
    options: l
  } = t, {
    borderWidth: c,
    borderJoinStyle: h,
    borderDash: u,
    borderDashOffset: d
  } = l, f = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = d, f ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let g = t.endAngle;
  if (r) {
    la(i, t, e, s, g, n);
    for (let p = 0; p < r; ++p)
      i.stroke();
    isNaN(a) || (g = o + (a % kt || kt));
  }
  f && sS(i, t, g), r || (la(i, t, e, s, g, n), i.stroke());
}
class Jr extends qe {
  constructor(t) {
    super(), this.circumference = void 0, this.endAngle = void 0, this.fullCircles = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = void 0, this.startAngle = void 0, this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.getProps(["x", "y"], s), {
      angle: r,
      distance: o
    } = Tm(n, {
      x: t,
      y: e
    }), {
      startAngle: a,
      endAngle: l,
      innerRadius: c,
      outerRadius: h,
      circumference: u
    } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s), d = (this.options.spacing + this.options.borderWidth) / 2, f = Z(u, l - a), g = Fr(r, a, l) && a !== l, p = f >= kt || g, m = Ms(o, c + d, h + d);
    return p && m;
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: s,
      startAngle: n,
      endAngle: r,
      innerRadius: o,
      outerRadius: a
    } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
      offset: l,
      spacing: c
    } = this.options, h = (n + r) / 2, u = (o + a + c + l) / 2;
    return {
      x: e + Math.cos(h) * u,
      y: s + Math.sin(h) * u
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const {
      options: e,
      circumference: s
    } = this, n = (e.offset || 0) / 4, r = (e.spacing || 0) / 2, o = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > kt ? Math.floor(s / kt) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(Ct, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, rS(t, this, c, r, o), oS(t, this, c, r, o), t.restore();
  }
}
Jr.id = "arc";
Jr.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
};
Jr.defaultRoutes = {
  backgroundColor: "backgroundColor"
};
Jr.descriptors = {
  _scriptable: !0,
  _indexable: (i) => i !== "borderDash"
};
function lb(i, t, e = t) {
  i.lineCap = Z(e.borderCapStyle, t.borderCapStyle), i.setLineDash(Z(e.borderDash, t.borderDash)), i.lineDashOffset = Z(e.borderDashOffset, t.borderDashOffset), i.lineJoin = Z(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = Z(e.borderWidth, t.borderWidth), i.strokeStyle = Z(e.borderColor, t.borderColor);
}
function aS(i, t, e) {
  i.lineTo(e.x, e.y);
}
function lS(i) {
  return i.stepped ? Ek : i.tension || i.cubicInterpolationMode === "monotone" ? Ok : aS;
}
function cb(i, t, e = {}) {
  const s = i.length, {
    start: n = 0,
    end: r = s - 1
  } = e, {
    start: o,
    end: a
  } = t, l = Math.max(n, o), c = Math.min(r, a), h = n < o && r < o || n > a && r > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function cS(i, t, e, s) {
  const {
    points: n,
    options: r
  } = t, {
    count: o,
    start: a,
    loop: l,
    ilen: c
  } = cb(n, e, s), h = lS(r);
  let {
    move: u = !0,
    reverse: d
  } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (d ? c - f : f)) % o], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : h(i, p, g, d, r.stepped), p = g);
  return l && (g = n[(a + (d ? c : 0)) % o], h(i, p, g, d, r.stepped)), !!l;
}
function hS(i, t, e, s) {
  const n = t.points, {
    count: r,
    start: o,
    ilen: a
  } = cb(n, e, s), {
    move: l = !0,
    reverse: c
  } = s || {};
  let h = 0, u = 0, d, f, g, p, m, b;
  const _ = (x) => (o + (c ? a - x : x)) % r, w = () => {
    p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
  };
  for (l && (f = n[_(0)], i.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
    if (f = n[_(d)], f.skip)
      continue;
    const x = f.x, v = f.y, y = x | 0;
    y === g ? (v < p ? p = v : v > m && (m = v), h = (u * h + x) / ++u) : (w(), i.lineTo(x, v), g = y, u = 0, p = m = v), b = v;
  }
  w();
}
function vc(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? hS : cS;
}
function uS(i) {
  return i.stepped ? h1 : i.tension || i.cubicInterpolationMode === "monotone" ? u1 : Ti;
}
function dS(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), lb(i, t.options), i.stroke(n);
}
function fS(i, t, e, s) {
  const {
    segments: n,
    options: r
  } = t, o = vc(t);
  for (const a of n)
    lb(i, r, a.style), i.beginPath(), o(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const pS = typeof Path2D == "function";
function gS(i, t, e, s) {
  pS && !t.options.segment ? dS(i, t, e, s) : fS(i, t, e, s);
}
class fi extends qe {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      s1(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = b1(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], r = this.points, o = Ym(this, {
      property: e,
      start: n,
      end: n
    });
    if (!o.length)
      return;
    const a = [], l = uS(s);
    let c, h;
    for (c = 0, h = o.length; c < h; ++c) {
      const {
        start: u,
        end: d
      } = o[c], f = r[u], g = r[d];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return vc(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, r = vc(this);
    let o = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      o &= r(t, this, a, {
        start: e,
        end: e + s - 1
      });
    return !!o;
  }
  draw(t, e, s, n) {
    const r = this.options || {};
    (this.points || []).length && r.borderWidth && (t.save(), gS(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
fi.id = "line";
fi.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
};
fi.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
fi.descriptors = {
  _scriptable: !0,
  _indexable: (i) => i !== "borderDash" && i !== "fill"
};
function Gd(i, t, e, s) {
  const n = i.options, {
    [e]: r
  } = i.getProps([e], s);
  return Math.abs(t - r) < n.radius + n.hitRadius;
}
class Ba extends qe {
  constructor(t) {
    super(), this.parsed = void 0, this.skip = void 0, this.stop = void 0, this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options, {
      x: r,
      y: o
    } = this.getProps(["x", "y"], s);
    return Math.pow(t - r, 2) + Math.pow(e - o, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return Gd(this, t, "x", e);
  }
  inYRange(t, e) {
    return Gd(this, t, "y", e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: s
    } = this.getProps(["x", "y"], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !Ps(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, mc(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
Ba.id = "point";
Ba.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
};
Ba.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
function hb(i, t) {
  const {
    x: e,
    y: s,
    base: n,
    width: r,
    height: o
  } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, h, u;
  return i.horizontal ? (u = o / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - u, h = s + u) : (u = r / 2, a = e - u, l = e + u, c = Math.min(s, n), h = Math.max(s, n)), {
    left: a,
    top: c,
    right: l,
    bottom: h
  };
}
function Ys(i, t, e, s) {
  return i ? 0 : Kt(t, e, s);
}
function mS(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, r = Bm(s);
  return {
    t: Ys(n.top, r.top, 0, e),
    r: Ys(n.right, r.right, 0, t),
    b: Ys(n.bottom, r.bottom, 0, e),
    l: Ys(n.left, r.left, 0, t)
  };
}
function bS(i, t, e) {
  const {
    enableBorderRadius: s
  } = i.getProps(["enableBorderRadius"]), n = i.options.borderRadius, r = Fi(n), o = Math.min(t, e), a = i.borderSkipped, l = s || ot(n);
  return {
    topLeft: Ys(!l || a.top || a.left, r.topLeft, 0, o),
    topRight: Ys(!l || a.top || a.right, r.topRight, 0, o),
    bottomLeft: Ys(!l || a.bottom || a.left, r.bottomLeft, 0, o),
    bottomRight: Ys(!l || a.bottom || a.right, r.bottomRight, 0, o)
  };
}
function _S(i) {
  const t = hb(i), e = t.right - t.left, s = t.bottom - t.top, n = mS(i, e / 2, s / 2), r = bS(i, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: r
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, r.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function Il(i, t, e, s) {
  const n = t === null, r = e === null, a = i && !(n && r) && hb(i, s);
  return a && (n || Ms(t, a.left, a.right)) && (r || Ms(e, a.top, a.bottom));
}
function vS(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function yS(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function El(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, r = (i.x + i.w !== e.x + e.w ? t : 0) - s, o = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + r,
    h: i.h + o,
    radius: i.radius
  };
}
class Fa extends qe {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const {
      inflateAmount: e,
      options: {
        borderColor: s,
        backgroundColor: n
      }
    } = this, {
      inner: r,
      outer: o
    } = _S(this), a = vS(o.radius) ? Vr : yS;
    t.save(), (o.w !== r.w || o.h !== r.h) && (t.beginPath(), a(t, El(o, e, r)), t.clip(), a(t, El(r, -e, o)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, El(r, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return Il(this, t, e, s);
  }
  inXRange(t, e) {
    return Il(this, t, null, e);
  }
  inYRange(t, e) {
    return Il(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: s,
      base: n,
      horizontal: r
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return {
      x: r ? (e + n) / 2 : e,
      y: r ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
Fa.id = "bar";
Fa.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
};
Fa.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
var wS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: Jr,
  BarElement: Fa,
  LineElement: fi,
  PointElement: Ba
});
const yc = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Zd = /* @__PURE__ */ yc.map((i) => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function ub(i) {
  return yc[i % yc.length];
}
function db(i) {
  return Zd[i % Zd.length];
}
function xS(i, t) {
  return i.borderColor = ub(t), i.backgroundColor = db(t), ++t;
}
function kS(i, t) {
  return i.backgroundColor = i.data.map(() => ub(t++)), t;
}
function CS(i, t) {
  return i.backgroundColor = i.data.map(() => db(t++)), t;
}
function SS(i) {
  let t = 0;
  return (e, s) => {
    const n = i.getDatasetMeta(s).controller;
    n instanceof en ? t = kS(e, t) : n instanceof Gr ? t = CS(e, t) : n && (t = xS(e, t));
  };
}
function Jd(i) {
  let t;
  for (t in i)
    if (i[t].borderColor || i[t].backgroundColor)
      return !0;
  return !1;
}
function AS(i) {
  return i && (i.borderColor || i.backgroundColor);
}
function MS() {
  return Mt.borderColor !== "rgba(0,0,0,0.1)" || Mt.backgroundColor !== "rgba(0,0,0,0.1)";
}
var TS = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(i, t, e) {
    if (!e.enabled)
      return;
    const {
      data: {
        datasets: s
      },
      options: n
    } = i.config, {
      elements: r
    } = n, o = Jd(s) || AS(n) || r && Jd(r) || MS();
    if (!e.forceOverride && o)
      return;
    const a = SS(i);
    s.forEach(a);
  }
};
function PS(i, t, e, s, n) {
  const r = n.samples || s;
  if (r >= e)
    return i.slice(t, t + e);
  const o = [], a = (e - 2) / (r - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t, u, d, f, g, p;
  for (o[l++] = i[h], u = 0; u < r - 2; u++) {
    let m = 0, b = 0, _;
    const w = Math.floor((u + 1) * a) + 1 + t, x = Math.min(Math.floor((u + 2) * a) + 1, e) + t, v = x - w;
    for (_ = w; _ < x; _++)
      m += i[_].x, b += i[_].y;
    m /= v, b /= v;
    const y = Math.floor(u * a) + 1 + t, k = Math.min(Math.floor((u + 1) * a) + 1, e) + t, {
      x: T,
      y: M
    } = i[h];
    for (f = g = -1, _ = y; _ < k; _++)
      g = 0.5 * Math.abs((T - m) * (i[_].y - M) - (T - i[_].x) * (b - M)), g > f && (f = g, d = i[_], p = _);
    o[l++] = d, h = p;
  }
  return o[l++] = i[c], o;
}
function IS(i, t, e, s) {
  let n = 0, r = 0, o, a, l, c, h, u, d, f, g, p;
  const m = [], b = t + e - 1, _ = i[t].x, x = i[b].x - _;
  for (o = t; o < t + e; ++o) {
    a = i[o], l = (a.x - _) / x * s, c = a.y;
    const v = l | 0;
    if (v === h)
      c < g ? (g = c, u = o) : c > p && (p = c, d = o), n = (r * n + a.x) / ++r;
    else {
      const y = o - 1;
      if (!ct(u) && !ct(d)) {
        const k = Math.min(u, d), T = Math.max(u, d);
        k !== f && k !== y && m.push({
          ...i[k],
          x: n
        }), T !== f && T !== y && m.push({
          ...i[T],
          x: n
        });
      }
      o > 0 && y !== f && m.push(i[y]), m.push(a), h = v, r = 0, g = p = c, u = d = f = o;
    }
  }
  return m;
}
function fb(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  }
}
function tf(i) {
  i.data.datasets.forEach((t) => {
    fb(t);
  });
}
function ES(i, t) {
  const e = t.length;
  let s = 0, n;
  const {
    iScale: r
  } = i, {
    min: o,
    max: a,
    minDefined: l,
    maxDefined: c
  } = r.getUserBounds();
  return l && (s = Kt(Ts(t, r.axis, o).lo, 0, e - 1)), c ? n = Kt(Ts(t, r.axis, a).hi + 1, s, e) - s : n = e - s, {
    start: s,
    count: n
  };
}
var OS = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      tf(i);
      return;
    }
    const s = i.width;
    i.data.datasets.forEach((n, r) => {
      const {
        _data: o,
        indexAxis: a
      } = n, l = i.getDatasetMeta(r), c = o || n.data;
      if (rr([a, i.options.indexAxis]) === "y" || !l.controller.supportsDecimation)
        return;
      const h = i.scales[l.xAxisID];
      if (h.type !== "linear" && h.type !== "time" || i.options.parsing)
        return;
      let {
        start: u,
        count: d
      } = ES(l, c);
      const f = e.threshold || 4 * s;
      if (d <= f) {
        fb(n);
        return;
      }
      ct(o) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = PS(c, u, d, s, e);
          break;
        case "min-max":
          g = IS(c, u, d, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = g;
    });
  },
  destroy(i) {
    tf(i);
  }
};
function RS(i, t, e) {
  const s = i.segments, n = i.points, r = t.points, o = [];
  for (const a of s) {
    let {
      start: l,
      end: c
    } = a;
    c = Ih(l, c, n);
    const h = wc(e, n[l], n[c], a.loop);
    if (!t.segments) {
      o.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Ym(t, h);
    for (const d of u) {
      const f = wc(e, r[d.start], r[d.end], d.loop), g = Km(a, n, f);
      for (const p of g)
        o.push({
          source: p,
          target: d,
          start: {
            [e]: ef(h, f, "start", Math.max)
          },
          end: {
            [e]: ef(h, f, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function wc(i, t, e, s) {
  if (s)
    return;
  let n = t[i], r = e[i];
  return i === "angle" && (n = ve(n), r = ve(r)), {
    property: i,
    start: n,
    end: r
  };
}
function DS(i, t) {
  const {
    x: e = null,
    y: s = null
  } = i || {}, n = t.points, r = [];
  return t.segments.forEach(({
    start: o,
    end: a
  }) => {
    a = Ih(o, a, n);
    const l = n[o], c = n[a];
    s !== null ? (r.push({
      x: l.x,
      y: s
    }), r.push({
      x: c.x,
      y: s
    })) : e !== null && (r.push({
      x: e,
      y: l.y
    }), r.push({
      x: e,
      y: c.y
    }));
  }), r;
}
function Ih(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function ef(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function pb(i, t) {
  let e = [], s = !1;
  return At(i) ? (s = !0, e = i) : e = DS(i, t), e.length ? new fi({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function sf(i) {
  return i && i.fill !== !1;
}
function $S(i, t, e) {
  let n = i[t].fill;
  const r = [t];
  let o;
  if (!e)
    return n;
  for (; n !== !1 && r.indexOf(n) === -1; ) {
    if (!Rt(n))
      return n;
    if (o = i[n], !o)
      return !1;
    if (o.visible)
      return n;
    r.push(n), n = o.fill;
  }
  return !1;
}
function LS(i, t, e) {
  const s = NS(i);
  if (ot(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return Rt(n) && Math.floor(n) === n ? BS(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
}
function BS(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function FS(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : ot(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function VS(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : ot(i) ? s = i.value : s = t.getBaseValue(), s;
}
function NS(i) {
  const t = i.options, e = t.fill;
  let s = Z(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function jS(i) {
  const {
    scale: t,
    index: e,
    line: s
  } = i, n = [], r = s.segments, o = s.points, a = zS(t, e);
  a.push(pb({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    for (let h = c.start; h <= c.end; h++)
      HS(n, o[h], a);
  }
  return new fi({
    points: n,
    options: {}
  });
}
function zS(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const r = s[n];
    if (r.index === t)
      break;
    r.hidden || e.unshift(r.dataset);
  }
  return e;
}
function HS(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n], {
      first: o,
      last: a,
      point: l
    } = WS(r, t, "x");
    if (!(!l || o && a)) {
      if (o)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function WS(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], r = i.segments, o = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < r.length; c++) {
    const h = r[c], u = o[h.start][e], d = o[h.end][e];
    if (Ms(n, u, d)) {
      a = n === u, l = n === d;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class gb {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const {
      x: n,
      y: r,
      radius: o
    } = this;
    return e = e || {
      start: 0,
      end: kt
    }, t.arc(n, r, o, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const {
      x: e,
      y: s,
      radius: n
    } = this, r = t.angle;
    return {
      x: e + Math.cos(r) * n,
      y: s + Math.sin(r) * n,
      angle: r
    };
  }
}
function US(i) {
  const {
    chart: t,
    fill: e,
    line: s
  } = i;
  if (Rt(e))
    return qS(t, e);
  if (e === "stack")
    return jS(i);
  if (e === "shape")
    return !0;
  const n = KS(i);
  return n instanceof gb ? n : pb(n, s);
}
function qS(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function KS(i) {
  return (i.scale || {}).getPointPositionForValue ? QS(i) : YS(i);
}
function YS(i) {
  const {
    scale: t = {},
    fill: e
  } = i, s = FS(e, t);
  if (Rt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function QS(i) {
  const {
    scale: t,
    fill: e
  } = i, s = t.options, n = t.getLabels().length, r = s.reverse ? t.max : t.min, o = VS(e, t, r), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, r);
    return new gb({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(o)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, o));
  return a;
}
function Ol(i, t, e) {
  const s = US(t), {
    line: n,
    scale: r,
    axis: o
  } = t, a = n.options, l = a.fill, c = a.backgroundColor, {
    above: h = c,
    below: u = c
  } = l || {};
  s && n.points.length && (Pa(i, e), XS(i, {
    line: n,
    target: s,
    above: h,
    below: u,
    area: e,
    scale: r,
    axis: o
  }), Ia(i));
}
function XS(i, t) {
  const {
    line: e,
    target: s,
    above: n,
    below: r,
    area: o,
    scale: a
  } = t, l = e._loop ? "angle" : t.axis;
  i.save(), l === "x" && r !== n && (nf(i, s, o.top), rf(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: l
  }), i.restore(), i.save(), nf(i, s, o.bottom)), rf(i, {
    line: e,
    target: s,
    color: r,
    scale: a,
    property: l
  }), i.restore();
}
function nf(i, t, e) {
  const {
    segments: s,
    points: n
  } = t;
  let r = !0, o = !1;
  i.beginPath();
  for (const a of s) {
    const {
      start: l,
      end: c
    } = a, h = n[l], u = n[Ih(l, c, n)];
    r ? (i.moveTo(h.x, h.y), r = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), o = !!t.pathSegment(i, a, {
      move: o
    }), o ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function rf(i, t) {
  const {
    line: e,
    target: s,
    property: n,
    color: r,
    scale: o
  } = t, a = RS(e, s, n);
  for (const {
    source: l,
    target: c,
    start: h,
    end: u
  } of a) {
    const {
      style: {
        backgroundColor: d = r
      } = {}
    } = l, f = s !== !0;
    i.save(), i.fillStyle = d, GS(i, o, f && wc(n, h, u)), i.beginPath();
    const g = !!e.pathSegment(i, l);
    let p;
    if (f) {
      g ? i.closePath() : of(i, s, u, n);
      const m = !!s.pathSegment(i, c, {
        move: g,
        reverse: !0
      });
      p = g && m, p || of(i, s, h, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function GS(i, t, e) {
  const {
    top: s,
    bottom: n
  } = t.chart.chartArea, {
    property: r,
    start: o,
    end: a
  } = e || {};
  r === "x" && (i.beginPath(), i.rect(o, s, a - o, n - s), i.clip());
}
function of(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var ZS = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let r, o, a, l;
    for (o = 0; o < s; ++o)
      r = i.getDatasetMeta(o), a = r.dataset, l = null, a && a.options && a instanceof fi && (l = {
        visible: i.isDatasetVisible(o),
        index: o,
        fill: LS(a, o, s),
        chart: i,
        axis: r.controller.options.indexAxis,
        scale: r.vScale,
        line: a
      }), r.$filler = l, n.push(l);
    for (o = 0; o < s; ++o)
      l = n[o], !(!l || l.fill === !1) && (l.fill = $S(n, o, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), r = i.chartArea;
    for (let o = n.length - 1; o >= 0; --o) {
      const a = n[o].$filler;
      a && (a.line.updateControlPoints(r, a.axis), s && a.fill && Ol(i.ctx, a, r));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const r = s[n].$filler;
      sf(r) && Ol(i.ctx, r, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !sf(s) || e.drawTime !== "beforeDatasetDraw" || Ol(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const af = (i, t) => {
  let {
    boxHeight: e = t,
    boxWidth: s = t
  } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, JS = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class lf extends qe {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = yt(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const {
      options: t,
      ctx: e
    } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = Ut(s.font), r = n.size, o = this._computeTitleHeight(), {
      boxWidth: a,
      itemHeight: l
    } = af(s, r);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(o, r, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(o, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const {
      ctx: r,
      maxWidth: o,
      options: {
        labels: {
          padding: a
        }
      }
    } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [0], h = n + a;
    let u = t;
    r.textAlign = "left", r.textBaseline = "middle";
    let d = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const m = s + e / 2 + r.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > o) && (u += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, d++), l[p] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: n
      }, c[c.length - 1] += m + a;
    }), u;
  }
  _fitCols(t, e, s, n) {
    const {
      ctx: r,
      maxHeight: o,
      options: {
        labels: {
          padding: a
        }
      }
    } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = o - t;
    let u = a, d = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      const {
        itemWidth: _,
        itemHeight: w
      } = tA(s, e, r, m, n);
      b > 0 && f + w + 2 * a > h && (u += d + a, c.push({
        width: d,
        height: f
      }), g += d + a, p++, d = f = 0), l[b] = {
        left: g,
        top: f,
        col: p,
        width: _,
        height: w
      }, d = Math.max(d, _), f += w + a;
    }), u += d, c.push({
      width: d,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), {
      legendHitBoxes: e,
      options: {
        align: s,
        labels: {
          padding: n
        },
        rtl: r
      }
    } = this, o = An(r, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = ee(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = ee(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = o.leftForLtr(o.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = ee(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = ee(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = o.leftForLtr(o.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Pa(t, this), this._draw(), Ia(t);
    }
  }
  _draw() {
    const {
      options: t,
      columnSizes: e,
      lineWidths: s,
      ctx: n
    } = this, {
      align: r,
      labels: o
    } = t, a = Mt.color, l = An(t.rtl, this.left, this.width), c = Ut(o.font), {
      padding: h
    } = o, u = c.size, d = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const {
      boxWidth: g,
      boxHeight: p,
      itemHeight: m
    } = af(o, u), b = function(y, k, T) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const M = Z(T.lineWidth, 1);
      if (n.fillStyle = Z(T.fillStyle, a), n.lineCap = Z(T.lineCap, "butt"), n.lineDashOffset = Z(T.lineDashOffset, 0), n.lineJoin = Z(T.lineJoin, "miter"), n.lineWidth = M, n.strokeStyle = Z(T.strokeStyle, a), n.setLineDash(Z(T.lineDash, [])), o.usePointStyle) {
        const O = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: T.pointStyle,
          rotation: T.rotation,
          borderWidth: M
        }, $ = l.xPlus(y, g / 2), V = k + d;
        Lm(n, O, $, V, o.pointStyleWidth && g);
      } else {
        const O = k + Math.max((u - p) / 2, 0), $ = l.leftForLtr(y, g), V = Fi(T.borderRadius);
        n.beginPath(), Object.values(V).some((z) => z !== 0) ? Vr(n, {
          x: $,
          y: O,
          w: g,
          h: p,
          radius: V
        }) : n.rect($, O, g, p), n.fill(), M !== 0 && n.stroke();
      }
      n.restore();
    }, _ = function(y, k, T) {
      Gi(n, T.text, y, k + m / 2, c, {
        strikethrough: T.hidden,
        textAlign: l.textAlign(T.textAlign)
      });
    }, w = this.isHorizontal(), x = this._computeTitleHeight();
    w ? f = {
      x: ee(r, this.left + h, this.right - s[0]),
      y: this.top + h + x,
      line: 0
    } : f = {
      x: this.left + h,
      y: ee(r, this.top + x + h, this.bottom - e[0].height),
      line: 0
    }, Wm(this.ctx, t.textDirection);
    const v = m + h;
    this.legendItems.forEach((y, k) => {
      n.strokeStyle = y.fontColor, n.fillStyle = y.fontColor;
      const T = n.measureText(y.text).width, M = l.textAlign(y.textAlign || (y.textAlign = o.textAlign)), O = g + d + T;
      let $ = f.x, V = f.y;
      l.setWidth(this.width), w ? k > 0 && $ + O + h > this.right && (V = f.y += v, f.line++, $ = f.x = ee(r, this.left + h, this.right - s[f.line])) : k > 0 && V + v > this.bottom && ($ = f.x = $ + e[f.line].width + h, f.line++, V = f.y = ee(r, this.top + x + h, this.bottom - e[f.line].height));
      const z = l.x($);
      if (b(z, V, y), $ = yk(M, $ + g + d, w ? $ + O : this.right, t.rtl), _(l.x($), V, y), w)
        f.x += O + h;
      else if (typeof y.text != "string") {
        const H = c.lineHeight;
        f.y += mb(y, H) + h;
      } else
        f.y += v;
    }), Um(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = Ut(e.font), n = le(e.padding);
    if (!e.display)
      return;
    const r = An(t.rtl, this.left, this.width), o = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, u = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), h = this.top + c, u = ee(t.align, u, this.right - d);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h = c + ee(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = ee(a, u, u + d);
    o.textAlign = r.textAlign(yh(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = s.string, Gi(o, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = Ut(t.font), s = le(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, r;
    if (Ms(t, this.left, this.right) && Ms(e, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
        if (n = r[s], Ms(t, n.left, n.left + n.width) && Ms(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!iA(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, r = JS(n, s);
      n && !r && yt(e.onLeave, [t, n, this], this), this._hoveredItem = s, s && !r && yt(e.onHover, [t, s, this], this);
    } else s && yt(e.onClick, [t, s, this], this);
  }
}
function tA(i, t, e, s, n) {
  const r = eA(s, i, t, e), o = sA(n, s, t.lineHeight);
  return {
    itemWidth: r,
    itemHeight: o
  };
}
function eA(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((r, o) => r.length > o.length ? r : o)), t + e.size / 2 + s.measureText(n).width;
}
function sA(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = mb(t, e)), s;
}
function mb(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function iA(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var nA = {
  id: "legend",
  _element: lf,
  start(i, t, e) {
    const s = i.legend = new lf({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    ie.configure(i, s, e), ie.addBox(i, s);
  },
  stop(i) {
    ie.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    ie.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, {
          labels: {
            usePointStyle: e,
            pointStyle: s,
            textAlign: n,
            color: r,
            useBorderRadius: o,
            borderRadius: a
          }
        } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = le(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: r,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: o && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i)
    }
  }
};
class Eh extends qe {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = At(s.text) ? s.text.length : 1;
    this._padding = le(s.padding);
    const r = n * Ut(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = r : this.width = r;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const {
      top: e,
      left: s,
      bottom: n,
      right: r,
      options: o
    } = this, a = o.align;
    let l = 0, c, h, u;
    return this.isHorizontal() ? (h = ee(a, s, r), u = e + t, c = r - s) : (o.position === "left" ? (h = s + t, u = ee(a, n, e), l = Ct * -0.5) : (h = r - t, u = ee(a, e, n), l = Ct * 0.5), c = n - e), {
      titleX: h,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = Ut(e.font), r = s.lineHeight / 2 + this._padding.top, {
      titleX: o,
      titleY: a,
      maxWidth: l,
      rotation: c
    } = this._drawArgs(r);
    Gi(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: yh(e.align),
      textBaseline: "middle",
      translation: [o, a]
    });
  }
}
function rA(i, t) {
  const e = new Eh({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  ie.configure(i, e, t), ie.addBox(i, e), i.titleBlock = e;
}
var oA = {
  id: "title",
  _element: Eh,
  start(i, t, e) {
    rA(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    ie.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    ie.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ko = /* @__PURE__ */ new WeakMap();
var aA = {
  id: "subtitle",
  start(i, t, e) {
    const s = new Eh({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    ie.configure(i, s, e), ie.addBox(i, s), ko.set(i, s);
  },
  stop(i) {
    ie.removeBox(i, ko.get(i)), ko.delete(i);
  },
  beforeUpdate(i, t, e) {
    const s = ko.get(i);
    ie.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Ar = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, r = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++r;
      }
    }
    return r === 0 || s.size === 0 ? !1 : {
      x: [...s].reduce((a, l) => a + l) / s.size,
      y: n / r
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, r, o, a;
    for (r = 0, o = i.length; r < o; ++r) {
      const l = i[r].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = pc(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function Ze(i, t) {
  return t && (At(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function xs(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function lA(i, t) {
  const {
    element: e,
    datasetIndex: s,
    index: n
  } = t, r = i.getDatasetMeta(s).controller, {
    label: o,
    value: a
  } = r.getLabelAndValue(n);
  return {
    chart: i,
    label: o,
    parsed: r.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: r.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function cf(i, t) {
  const e = i.chart.ctx, {
    body: s,
    footer: n,
    title: r
  } = i, {
    boxWidth: o,
    boxHeight: a
  } = t, l = Ut(t.bodyFont), c = Ut(t.titleFont), h = Ut(t.footerFont), u = r.length, d = n.length, f = s.length, g = le(t.padding);
  let p = g.height, m = 0, b = s.reduce((x, v) => x + v.before.length + v.lines.length + v.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const x = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * x + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  d && (p += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let _ = 0;
  const w = function(x) {
    m = Math.max(m, e.measureText(x).width + _);
  };
  return e.save(), e.font = c.string, gt(i.title, w), e.font = l.string, gt(i.beforeBody.concat(i.afterBody), w), _ = t.displayColors ? o + 2 + t.boxPadding : 0, gt(s, (x) => {
    gt(x.before, w), gt(x.lines, w), gt(x.after, w);
  }), _ = 0, e.font = h.string, gt(i.footer, w), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function cA(i, t) {
  const {
    y: e,
    height: s
  } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function hA(i, t, e, s) {
  const {
    x: n,
    width: r
  } = s, o = e.caretSize + e.caretPadding;
  if (i === "left" && n + r + o > t.width || i === "right" && n - r - o < 0)
    return !0;
}
function uA(i, t, e, s) {
  const {
    x: n,
    width: r
  } = e, {
    width: o,
    chartArea: {
      left: a,
      right: l
    }
  } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= r / 2 ? c = "left" : n >= o - r / 2 && (c = "right"), hA(c, i, t, e) && (c = "center"), c;
}
function hf(i, t, e) {
  const s = e.yAlign || t.yAlign || cA(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || uA(i, t, e, s),
    yAlign: s
  };
}
function dA(i, t) {
  let {
    x: e,
    width: s
  } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function fA(i, t, e) {
  let {
    y: s,
    height: n
  } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function uf(i, t, e, s) {
  const {
    caretSize: n,
    caretPadding: r,
    cornerRadius: o
  } = i, {
    xAlign: a,
    yAlign: l
  } = e, c = n + r, {
    topLeft: h,
    topRight: u,
    bottomLeft: d,
    bottomRight: f
  } = Fi(o);
  let g = dA(t, a);
  const p = fA(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, d) + n : a === "right" && (g += Math.max(u, f) + n), {
    x: Kt(g, 0, s.width - t.width),
    y: Kt(p, 0, s.height - t.height)
  };
}
function Co(i, t, e) {
  const s = le(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function df(i) {
  return Ze([], xs(i));
}
function pA(i, t, e) {
  return di(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function ff(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const bb = {
  beforeTitle: _s,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: _s,
  beforeBody: _s,
  beforeLabel: _s,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return ct(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: _s,
  afterBody: _s,
  beforeFooter: _s,
  footer: _s,
  afterFooter: _s
};
function fe(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? bb[t].call(e, s) : n;
}
class xc extends qe {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, r = new Qm(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return this.$context || (this.$context = pA(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const {
      callbacks: s
    } = e, n = fe(s, "beforeTitle", this, t), r = fe(s, "title", this, t), o = fe(s, "afterTitle", this, t);
    let a = [];
    return a = Ze(a, xs(n)), a = Ze(a, xs(r)), a = Ze(a, xs(o)), a;
  }
  getBeforeBody(t, e) {
    return df(fe(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const {
      callbacks: s
    } = e, n = [];
    return gt(t, (r) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, a = ff(s, r);
      Ze(o.before, xs(fe(a, "beforeLabel", this, r))), Ze(o.lines, fe(a, "label", this, r)), Ze(o.after, xs(fe(a, "afterLabel", this, r))), n.push(o);
    }), n;
  }
  getAfterBody(t, e) {
    return df(fe(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const {
      callbacks: s
    } = e, n = fe(s, "beforeFooter", this, t), r = fe(s, "footer", this, t), o = fe(s, "afterFooter", this, t);
    let a = [];
    return a = Ze(a, xs(n)), a = Ze(a, xs(r)), a = Ze(a, xs(o)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], r = [], o = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(lA(this.chart, e[l]));
    return t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, s))), t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, s))), gt(a, (h) => {
      const u = ff(t.callbacks, h);
      n.push(fe(u, "labelColor", this, h)), r.push(fe(u, "labelPointStyle", this, h)), o.push(fe(u, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = r, this.labelTextColors = o, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let r, o = [];
    if (!n.length)
      this.opacity !== 0 && (r = {
        opacity: 0
      });
    else {
      const a = Ar[s.position].call(this, n, this._eventPosition);
      o = this._createItems(s), this.title = this.getTitle(o, s), this.beforeBody = this.getBeforeBody(o, s), this.body = this.getBody(o, s), this.afterBody = this.getAfterBody(o, s), this.footer = this.getFooter(o, s);
      const l = this._size = cf(this, s), c = Object.assign({}, a, l), h = hf(this.chart, s, c), u = uf(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, r = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = o, this.$context = void 0, r && this._resolveAnimations().update(this, r), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const r = this.getCaretPosition(t, s, n);
    e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
  }
  getCaretPosition(t, e, s) {
    const {
      xAlign: n,
      yAlign: r
    } = this, {
      caretSize: o,
      cornerRadius: a
    } = s, {
      topLeft: l,
      topRight: c,
      bottomLeft: h,
      bottomRight: u
    } = Fi(a), {
      x: d,
      y: f
    } = t, {
      width: g,
      height: p
    } = e;
    let m, b, _, w, x, v;
    return r === "center" ? (x = f + p / 2, n === "left" ? (m = d, b = m - o, w = x + o, v = x - o) : (m = d + g, b = m + o, w = x - o, v = x + o), _ = m) : (n === "left" ? b = d + Math.max(l, h) + o : n === "right" ? b = d + g - Math.max(c, u) - o : b = this.caretX, r === "top" ? (w = f, x = w - o, m = b - o, _ = b + o) : (w = f + p, x = w + o, m = b + o, _ = b - o), v = w), {
      x1: m,
      x2: b,
      x3: _,
      y1: w,
      y2: x,
      y3: v
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, r = n.length;
    let o, a, l;
    if (r) {
      const c = An(s.rtl, this.x, this.width);
      for (t.x = Co(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", o = Ut(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = o.string, l = 0; l < r; ++l)
        e.fillText(n[l], c.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, l + 1 === r && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, r) {
    const o = this.labelColors[s], a = this.labelPointStyles[s], {
      boxHeight: l,
      boxWidth: c
    } = r, h = Ut(r.bodyFont), u = Co(this, "left", r), d = n.x(u), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + f;
    if (r.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(d, c) + c / 2, b = g + l / 2;
      t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, mc(t, p, m, b), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, mc(t, p, m, b);
    } else {
      t.lineWidth = ot(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
      const p = n.leftForLtr(d, c), m = n.leftForLtr(n.xPlus(d, 1), c - 2), b = Fi(o.borderRadius);
      Object.values(b).some((_) => _ !== 0) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, Vr(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Vr(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = o.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const {
      body: n
    } = this, {
      bodySpacing: r,
      bodyAlign: o,
      displayColors: a,
      boxHeight: l,
      boxWidth: c,
      boxPadding: h
    } = s, u = Ut(s.bodyFont);
    let d = u.lineHeight, f = 0;
    const g = An(s.rtl, this.x, this.width), p = function(T) {
      e.fillText(T, g.x(t.x + f), t.y + d / 2), t.y += d + r;
    }, m = g.textAlign(o);
    let b, _, w, x, v, y, k;
    for (e.textAlign = o, e.textBaseline = "middle", e.font = u.string, t.x = Co(this, m, s), e.fillStyle = s.bodyColor, gt(this.beforeBody, p), f = a && m !== "right" ? o === "center" ? c / 2 + h : c + 2 + h : 0, x = 0, y = n.length; x < y; ++x) {
      for (b = n[x], _ = this.labelTextColors[x], e.fillStyle = _, gt(b.before, p), w = b.lines, a && w.length && (this._drawColorBox(e, t, x, g, s), d = Math.max(u.lineHeight, l)), v = 0, k = w.length; v < k; ++v)
        p(w[v]), d = u.lineHeight;
      gt(b.after, p);
    }
    f = 0, d = u.lineHeight, gt(this.afterBody, p), t.y -= r;
  }
  drawFooter(t, e, s) {
    const n = this.footer, r = n.length;
    let o, a;
    if (r) {
      const l = An(s.rtl, this.x, this.width);
      for (t.x = Co(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", o = Ut(s.footerFont), e.fillStyle = s.footerColor, e.font = o.string, a = 0; a < r; ++a)
        e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const {
      xAlign: r,
      yAlign: o
    } = this, {
      x: a,
      y: l
    } = t, {
      width: c,
      height: h
    } = s, {
      topLeft: u,
      topRight: d,
      bottomLeft: f,
      bottomRight: g
    } = Fi(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), o === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - d, l), e.quadraticCurveTo(a + c, l, a + c, l + d), o === "center" && r === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), o === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), o === "center" && r === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, r = s && s.y;
    if (n || r) {
      const o = Ar[t.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const a = this._size = cf(this, t), l = Object.assign({}, o, this._size), c = hf(e, t, l), h = uf(t, l, c, e);
      (n._to !== h.x || r._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = o.x, this.caretY = o.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, r = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const o = le(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(r, t, n, e), Wm(t, e.textDirection), r.y += o.top, this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), Um(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({
      datasetIndex: a,
      index: l
    }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), r = !ea(s, n), o = this._positionChanged(n, e);
    (r || o) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, r = this._active || [], o = this._getActiveElements(t, r, e, s), a = this._positionChanged(o, t), l = e || !ea(o, r) || a;
    return l && (this._active = o, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const r = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const o = this.chart.getElementsAtEventForMode(t, r.mode, r, s);
    return r.reverse && o.reverse(), o;
  }
  _positionChanged(t, e) {
    const {
      caretX: s,
      caretY: n,
      options: r
    } = this, o = Ar[r.position].call(this, t, e);
    return o !== !1 && (s !== o.x || n !== o.y);
  }
}
xc.positioners = Ar;
var gA = {
  id: "tooltip",
  _element: xc,
  positioners: Ar,
  afterInit(i, t, e) {
    e && (i.tooltip = new xc({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: bb
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: ["interaction"]
}, mA = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: TS,
  Decimation: OS,
  Filler: ZS,
  Legend: nA,
  SubTitle: aA,
  Title: oA,
  Tooltip: gA
});
const bA = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function _A(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return bA(i, t, e, s);
  const r = i.lastIndexOf(t);
  return n !== r ? e : n;
}
const vA = (i, t) => i === null ? null : Kt(Math.round(i), 0, t);
function _b(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Oh extends sn {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const {
        index: n,
        label: r
      } of e)
        s[n] === r && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (ct(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : _A(s, t, Z(e, t), this._addedLabels), vA(e, s.length - 1);
  }
  determineDataLimits() {
    const {
      minDefined: t,
      maxDefined: e
    } = this.getUserBounds();
    let {
      min: s,
      max: n
    } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let r = this.getLabels();
    r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1), this._valueRange = Math.max(r.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let o = t; o <= e; o++)
      n.push({
        value: o
      });
    return n;
  }
  getLabelForValue(t) {
    return _b.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
Oh.id = "category";
Oh.defaults = {
  ticks: {
    callback: _b
  }
};
function yA(i, t) {
  const e = [], {
    bounds: n,
    step: r,
    min: o,
    max: a,
    precision: l,
    count: c,
    maxTicks: h,
    maxDigits: u,
    includeBounds: d
  } = i, f = r || 1, g = h - 1, {
    min: p,
    max: m
  } = t, b = !ct(o), _ = !ct(a), w = !ct(c), x = (m - p) / (u + 1);
  let v = cd((m - p) / g / f) * f, y, k, T, M;
  if (v < 1e-14 && !b && !_)
    return [{
      value: p
    }, {
      value: m
    }];
  M = Math.ceil(m / v) - Math.floor(p / v), M > g && (v = cd(M * v / g / f) * f), ct(l) || (y = Math.pow(10, l), v = Math.ceil(v * y) / y), n === "ticks" ? (k = Math.floor(p / v) * v, T = Math.ceil(m / v) * v) : (k = p, T = m), b && _ && r && fk((a - o) / r, v / 1e3) ? (M = Math.round(Math.min((a - o) / v, h)), v = (a - o) / M, k = o, T = a) : w ? (k = b ? o : k, T = _ ? a : T, M = c - 1, v = (T - k) / M) : (M = (T - k) / v, kr(M, Math.round(M), v / 1e3) ? M = Math.round(M) : M = Math.ceil(M));
  const O = Math.max(hd(v), hd(k));
  y = Math.pow(10, ct(l) ? O : l), k = Math.round(k * y) / y, T = Math.round(T * y) / y;
  let $ = 0;
  for (b && (d && k !== o ? (e.push({
    value: o
  }), k < o && $++, kr(Math.round((k + $ * v) * y) / y, o, pf(o, x, i)) && $++) : k < o && $++); $ < M; ++$) {
    const V = Math.round((k + $ * v) * y) / y;
    if (_ && V > a)
      break;
    e.push({
      value: V
    });
  }
  return _ && d && T !== a ? e.length && kr(e[e.length - 1].value, a, pf(a, x, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!_ || T === a) && e.push({
    value: T
  }), e;
}
function pf(i, t, {
  horizontal: e,
  minRotation: s
}) {
  const n = Ne(s), r = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, o = 0.75 * t * ("" + i).length;
  return Math.min(t / r, o);
}
class ca extends sn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return ct(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const {
      beginAtZero: t
    } = this.options, {
      minDefined: e,
      maxDefined: s
    } = this.getUserBounds();
    let {
      min: n,
      max: r
    } = this;
    const o = (l) => n = e ? n : l, a = (l) => r = s ? r : l;
    if (t) {
      const l = rs(n), c = rs(r);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
    }
    if (n === r) {
      let l = r === 0 ? 1 : Math.abs(r * 0.05);
      a(r + l), t || o(n - l);
    }
    this.min = n, this.max = r;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let {
      maxTicksLimit: e,
      stepSize: s
    } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, r = this._range || this, o = yA(n, r);
    return t.bounds === "ticks" && Mm(o, this, "value"), t.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return Xr(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Rh extends ca {
  determineDataLimits() {
    const {
      min: t,
      max: e
    } = this.getMinMax(!0);
    this.min = Rt(t) ? t : 0, this.max = Rt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = Ne(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, r = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, r.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
Rh.id = "linear";
Rh.defaults = {
  ticks: {
    callback: Ta.formatters.numeric
  }
};
const jr = (i) => Math.floor(Ks(i)), xi = (i, t) => Math.pow(10, jr(i) + t);
function gf(i) {
  return i / Math.pow(10, jr(i)) === 1;
}
function mf(i, t, e) {
  const s = Math.pow(10, e), n = Math.floor(i / s);
  return Math.ceil(t / s) - n;
}
function wA(i, t) {
  const e = t - i;
  let s = jr(e);
  for (; mf(i, t, s) > 10; )
    s++;
  for (; mf(i, t, s) < 10; )
    s--;
  return Math.min(s, jr(i));
}
function xA(i, {
  min: t,
  max: e
}) {
  t = be(i.min, t);
  const s = [], n = jr(t);
  let r = wA(t, e), o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const a = Math.pow(10, r), l = n > r ? Math.pow(10, n) : 0, c = Math.round((t - l) * o) / o, h = Math.floor((t - l) / a / 10) * a * 10;
  let u = Math.floor((c - h) / Math.pow(10, r)), d = be(i.min, Math.round((l + h + u * Math.pow(10, r)) * o) / o);
  for (; d < e; )
    s.push({
      value: d,
      major: gf(d),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (r++, u = 2, o = r >= 0 ? 1 : o), d = Math.round((l + h + u * Math.pow(10, r)) * o) / o;
  const f = be(i.max, d);
  return s.push({
    value: f,
    major: gf(f),
    significand: u
  }), s;
}
class Dh extends sn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const s = ca.prototype.parse.apply(this, [t, e]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return Rt(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const {
      min: t,
      max: e
    } = this.getMinMax(!0);
    this.min = Rt(t) ? Math.max(0, t) : null, this.max = Rt(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Rt(this._userMin) && (this.min = t === xi(this.min, 0) ? xi(this.min, -1) : xi(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {
      minDefined: t,
      maxDefined: e
    } = this.getUserBounds();
    let s = this.min, n = this.max;
    const r = (a) => s = t ? s : a, o = (a) => n = e ? n : a;
    s === n && (s <= 0 ? (r(1), o(10)) : (r(xi(s, -1)), o(xi(n, 1)))), s <= 0 && r(xi(n, -1)), n <= 0 && o(xi(s, 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = xA(e, this);
    return t.bounds === "ticks" && Mm(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Xr(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Ks(t), this._valueRange = Ks(this.max) - Ks(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Ks(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
Dh.id = "logarithmic";
Dh.defaults = {
  ticks: {
    callback: Ta.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
};
function kc(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = le(t.backdropPadding);
    return Z(t.font && t.font.size, Mt.font.size) + e.height;
  }
  return 0;
}
function kA(i, t, e) {
  return e = At(e) ? e : [e], {
    w: Ik(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function bf(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function CA(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], r = i._pointLabels.length, o = i.options.pointLabels, a = o.centerPointLabels ? Ct / r : 0;
  for (let l = 0; l < r; l++) {
    const c = o.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), u = Ut(c.font), d = kA(i.ctx, u, i._pointLabels[l]);
    s[l] = d;
    const f = ve(i.getIndexAngle(l) + a), g = Math.round(_h(f)), p = bf(g, h.x, d.w, 0, 180), m = bf(g, h.y, d.h, 90, 270);
    SA(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = TA(i, s, n);
}
function SA(i, t, e, s, n) {
  const r = Math.abs(Math.sin(e)), o = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / r, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / r, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / o, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / o, i.b = Math.max(i.b, t.b + l));
}
function AA(i, t, e) {
  const s = i.drawingArea, {
    extra: n,
    additionalAngle: r,
    padding: o,
    size: a
  } = e, l = i.getPointPosition(t, s + n + o, r), c = Math.round(_h(ve(l.angle + Lt))), h = EA(l.y, a.h, c), u = PA(c), d = IA(l.x, a.w, u);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: u,
    left: d,
    top: h,
    right: d + a.w,
    bottom: h + a.h
  };
}
function MA(i, t) {
  if (!t)
    return !0;
  const {
    left: e,
    top: s,
    right: n,
    bottom: r
  } = i;
  return !(Ps({
    x: e,
    y: s
  }, t) || Ps({
    x: e,
    y: r
  }, t) || Ps({
    x: n,
    y: s
  }, t) || Ps({
    x: n,
    y: r
  }, t));
}
function TA(i, t, e) {
  const s = [], n = i._pointLabels.length, r = i.options, {
    centerPointLabels: o,
    display: a
  } = r.pointLabels, l = {
    extra: kc(r) / 2,
    additionalAngle: o ? Ct / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const u = AA(i, h, l);
    s.push(u), a === "auto" && (u.visible = MA(u, c), u.visible && (c = u));
  }
  return s;
}
function PA(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function IA(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function EA(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function OA(i, t, e) {
  const {
    left: s,
    top: n,
    right: r,
    bottom: o
  } = e, {
    backdropColor: a
  } = t;
  if (!ct(a)) {
    const l = Fi(t.borderRadius), c = le(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, u = n - c.top, d = r - s + c.width, f = o - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Vr(i, {
      x: h,
      y: u,
      w: d,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(h, u, d, f);
  }
}
function RA(i, t) {
  const {
    ctx: e,
    options: {
      pointLabels: s
    }
  } = i;
  for (let n = t - 1; n >= 0; n--) {
    const r = i._pointLabelItems[n];
    if (!r.visible)
      continue;
    const o = s.setContext(i.getPointLabelContext(n));
    OA(e, o, r);
    const a = Ut(o.font), {
      x: l,
      y: c,
      textAlign: h
    } = r;
    Gi(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function vb(i, t, e, s) {
  const {
    ctx: n
  } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, kt);
  else {
    let r = i.getPointPosition(0, t);
    n.moveTo(r.x, r.y);
    for (let o = 1; o < s; o++)
      r = i.getPointPosition(o, t), n.lineTo(r.x, r.y);
  }
}
function DA(i, t, e, s, n) {
  const r = i.ctx, o = t.circular, {
    color: a,
    lineWidth: l
  } = t;
  !o && !s || !a || !l || e < 0 || (r.save(), r.strokeStyle = a, r.lineWidth = l, r.setLineDash(n.dash || []), r.lineDashOffset = n.dashOffset, r.beginPath(), vb(i, e, o, s), r.closePath(), r.stroke(), r.restore());
}
function $A(i, t, e) {
  return di(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class to extends ca {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = le(kc(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const {
      min: t,
      max: e
    } = this.getMinMax(!1);
    this.min = Rt(t) && !isNaN(t) ? t : 0, this.max = Rt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / kc(this.options));
  }
  generateTickLabels(t) {
    ca.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = yt(this.options.pointLabels.callback, [e, s], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? CA(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = kt / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return ve(t * e + Ne(s));
  }
  getDistanceFromCenterForValue(t) {
    if (ct(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (ct(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return $A(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - Lt + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const {
      left: e,
      top: s,
      right: n,
      bottom: r
    } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: r
    };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: {
        circular: e
      }
    } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), vb(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, {
      angleLines: s,
      grid: n,
      border: r
    } = e, o = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && RA(this, o), n.display && this.ticks.forEach((h, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const d = this.getContext(u), f = n.setContext(d), g = r.setContext(d);
        DA(this, f, l, o, g);
      }
    }), s.display) {
      for (t.save(), a = o - 1; a >= 0; a--) {
        const h = s.setContext(this.getPointLabelContext(a)), {
          color: u,
          lineWidth: d
        } = h;
        !d || !u || (t.lineWidth = d, t.strokeStyle = u, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let r, o;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), h = Ut(c.font);
      if (r = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, o = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = le(c.backdropPadding);
        t.fillRect(-o / 2 - u.left, -r - h.size / 2 - u.top, o + u.width, h.size + u.height);
      }
      Gi(t, a.label, 0, -r, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
to.id = "radialLinear";
to.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Ta.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(i) {
      return i;
    },
    padding: 5,
    centerPointLabels: !1
  }
};
to.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
};
to.descriptors = {
  angleLines: {
    _fallback: "grid"
  }
};
const Va = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, pe = /* @__PURE__ */ Object.keys(Va);
function _f(i, t) {
  return i - t;
}
function vf(i, t) {
  if (ct(t))
    return null;
  const e = i._adapter, {
    parser: s,
    round: n,
    isoWeekday: r
  } = i._parseOpts;
  let o = t;
  return typeof s == "function" && (o = s(o)), Rt(o) || (o = typeof s == "string" ? e.parse(o, s) : e.parse(o)), o === null ? null : (n && (o = n === "week" && (On(r) || r === !0) ? e.startOf(o, "isoWeek", r) : e.startOf(o, n)), +o);
}
function yf(i, t, e, s) {
  const n = pe.length;
  for (let r = pe.indexOf(i); r < n - 1; ++r) {
    const o = Va[pe[r]], a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((e - t) / (a * o.size)) <= s)
      return pe[r];
  }
  return pe[n - 1];
}
function LA(i, t, e, s, n) {
  for (let r = pe.length - 1; r >= pe.indexOf(e); r--) {
    const o = pe[r];
    if (Va[o].common && i._adapter.diff(n, s, o) >= t - 1)
      return o;
  }
  return pe[e ? pe.indexOf(e) : 0];
}
function BA(i) {
  for (let t = pe.indexOf(i) + 1, e = pe.length; t < e; ++t)
    if (Va[pe[t]].common)
      return pe[t];
}
function wf(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const {
      lo: s,
      hi: n
    } = vh(e, t), r = e[s] >= t ? e[s] : e[n];
    i[r] = !0;
  }
}
function FA(i, t, e, s) {
  const n = i._adapter, r = +n.startOf(t[0].value, s), o = t[t.length - 1].value;
  let a, l;
  for (a = r; a <= o; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function xf(i, t, e) {
  const s = [], n = {}, r = t.length;
  let o, a;
  for (o = 0; o < r; ++o)
    a = t[o], n[a] = o, s.push({
      value: a,
      major: !1
    });
  return r === 0 || !e ? s : FA(i, s, n, e);
}
class eo extends sn {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new q1._date(t.adapters.date);
    n.init(e), xr(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : vf(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let {
      min: n,
      max: r,
      minDefined: o,
      maxDefined: a
    } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (r = Math.max(r, c.max));
    }
    (!o || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = Rt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), r = Rt(r) && !isNaN(r) ? r : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, r - 1), this.max = Math.max(n + 1, r);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const r = this.min, o = this.max, a = bk(n, r, o);
    return this._unit = e.unit || (s.autoSkip ? yf(e.minUnit, this.min, this.max, this._getLabelCapacity(r)) : LA(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : BA(this._unit), this.initOffsets(n), t.reverse && a.reverse(), xf(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, r;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, r = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = r : s = (r - this.getDecimalForValue(t[t.length - 2])) / 2);
    const o = t.length < 3 ? 0.5 : 0.25;
    e = Kt(e, 0, o), s = Kt(s, 0, o), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, r = n.time, o = r.unit || yf(r.minUnit, e, s, this._getLabelCapacity(e)), a = Z(n.ticks.stepSize, 1), l = o === "week" ? r.isoWeekday : !1, c = On(l) || l === !0, h = {};
    let u = e, d, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : o), t.diff(s, e, o) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + o);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, f = 0; d < s; d = +t.add(d, a, o), f++)
      wf(h, d, g);
    return (d === s || n.bounds === "ticks" || f === 1) && wf(h, d, g), Object.keys(h).sort(_f).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, r = this._unit, o = e || n[r];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, e, s, n) {
    const r = this.options, o = r.ticks.callback;
    if (o)
      return yt(o, [t, e, s], this);
    const a = r.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], u = c && a[c], d = s[e], f = c && u && d && d.major;
    return this._adapter.format(t, n || (f ? u : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = Ne(this.isHorizontal() ? e.maxRotation : e.minRotation), r = Math.cos(n), o = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * r + a * o,
      h: s * o + a * r
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, r = this._tickFormatFunction(t, 0, xf(this, [t], this._majorUnit), n), o = this._getLabelSize(r), a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(vf(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Im(t.sort(_f));
  }
}
eo.id = "time";
eo.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
};
function So(i, t, e) {
  let s = 0, n = i.length - 1, r, o, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({
    lo: s,
    hi: n
  } = Ts(i, "pos", t)), {
    pos: r,
    time: a
  } = i[s], {
    pos: o,
    time: l
  } = i[n]) : (t >= i[s].time && t <= i[n].time && ({
    lo: s,
    hi: n
  } = Ts(i, "time", t)), {
    time: r,
    pos: a
  } = i[s], {
    time: o,
    pos: l
  } = i[n]);
  const c = o - r;
  return c ? a + (l - a) * (t - r) / c : a;
}
class $h extends eo {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = So(e, this.min), this._tableRange = So(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const {
      min: e,
      max: s
    } = this, n = [], r = [];
    let o, a, l, c, h;
    for (o = 0, a = t.length; o < a; ++o)
      c = t[o], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [{
        time: e,
        pos: 0
      }, {
        time: s,
        pos: 1
      }];
    for (o = 0, a = n.length; o < a; ++o)
      h = n[o + 1], l = n[o - 1], c = n[o], Math.round((h + l) / 2) !== c && r.push({
        time: c,
        pos: o / (a - 1)
      });
    return r;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, r) => n - r);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (So(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return So(this._table, s * this._tableRange + this._minPos, !0);
  }
}
$h.id = "timeseries";
$h.defaults = eo.defaults;
var VA = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Oh,
  LinearScale: Rh,
  LogarithmicScale: Dh,
  RadialLinearScale: to,
  TimeScale: eo,
  TimeSeriesScale: $h
});
const NA = [U1, wS, mA, VA];
Vs.register(...NA);
function yb(i, t, e, s = {}) {
  return new Vs(i, {
    type: t,
    data: e,
    options: s
  });
}
Ws.getOrCreate(globalThis);
var wb;
let xb;
function jA(i, t, e, s, n, r) {
  var o, a, l, c, h, u, d, f = Symbol.metadata || Symbol.for("Symbol.metadata"), g = Object.defineProperty, p = Object.create, m = [p(null), p(null)], b = t.length;
  function _(y, k, T) {
    return function(M, O) {
      k && (O = M, M = i);
      for (var $ = 0; $ < y.length; $++) O = y[$].apply(M, T ? [O] : []);
      return T ? O : M;
    };
  }
  function w(y, k, T, M) {
    if (typeof y != "function" && (M || y !== void 0)) throw new TypeError(k + " must " + (T || "be") + " a function" + (M ? "" : " or undefined"));
    return y;
  }
  function x(y, k, T, M, O, $, V, z, H, N, I) {
    function W(et) {
      if (!I(et)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var it = [].concat(k[0]), L = k[3], J = !V, A = O === 1, E = O === 3, S = O === 4, P = O === 2;
    function dt(et, q, Qe) {
      return function(Dt, Re) {
        return q && (Re = Dt, Dt = y), Qe && Qe(Dt), C[et].call(Dt, Re);
      };
    }
    if (!J) {
      var C = {}, R = [], Y = E ? "get" : S || A ? "set" : "value";
      if (H ? (N || A ? C = { get: kf(function() {
        return L(this);
      }, M, "get"), set: function(et) {
        k[4](this, et);
      } } : C[Y] = L, N || kf(C[Y], M, P ? "" : Y)) : N || (C = Object.getOwnPropertyDescriptor(y, M)), !N && !H) {
        if ((a = m[+z][M]) && (a ^ O) != 7) throw Error("Decorating two elements with the same name (" + C[Y].name + ") is not supported yet");
        m[+z][M] = O < 3 ? 1 : O;
      }
    }
    for (var Q = y, Ft = it.length - 1; Ft >= 0; Ft -= T ? 2 : 1) {
      var Ke = w(it[Ft], "A decorator", "be", !0), Ye = T ? it[Ft - 1] : void 0, de = {}, Xt = { kind: ["field", "accessor", "method", "getter", "setter", "class"][O], name: M, metadata: o, addInitializer: (function(et, q) {
        if (et.v) throw new TypeError("attempted to call addInitializer after decoration was finished");
        w(q, "An initializer", "be", !0), $.push(q);
      }).bind(null, de) };
      if (J) a = Ke.call(Ye, Q, Xt), de.v = 1, w(a, "class decorators", "return") && (Q = a);
      else if (Xt.static = z, Xt.private = H, a = Xt.access = { has: H ? I.bind() : function(et) {
        return M in et;
      } }, S || (a.get = H ? P ? function(et) {
        return W(et), C.value;
      } : dt("get", 0, W) : function(et) {
        return et[M];
      }), P || E || (a.set = H ? dt("set", 0, W) : function(et, q) {
        et[M] = q;
      }), Q = Ke.call(Ye, A ? { get: C.get, set: C.set } : C[Y], Xt), de.v = 1, A) {
        if (typeof Q == "object" && Q) (a = w(Q.get, "accessor.get")) && (C.get = a), (a = w(Q.set, "accessor.set")) && (C.set = a), (a = w(Q.init, "accessor.init")) && R.unshift(a);
        else if (Q !== void 0) throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
      } else w(Q, (N ? "field" : "method") + " decorators", "return") && (N ? R.unshift(Q) : C[Y] = Q);
    }
    return O < 2 && V.push(_(R, z, 1), _($, z, 0)), N || J || (H ? A ? V.splice(-1, 0, dt("get", z), dt("set", z)) : V.push(P ? C[Y] : w.call.bind(C[Y])) : g(y, M, C)), Q;
  }
  function v(y) {
    return g(y, f, { configurable: !0, enumerable: !0, value: o });
  }
  return o = p(o ?? null), h = [], u = function(y) {
    y && h.push(_(y));
  }, d = function(y, k) {
    for (var T = 0; T < e.length; T++) {
      var M = e[T], O = M[1], $ = 7 & O;
      if ((8 & O) == y && !$ == k) {
        var V = M[2], z = !!M[3], H = 16 & O;
        x(y ? i : i.prototype, M, H, z ? "#" + V : zA(V), $, $ < 2 ? [] : y ? c = c || [] : l = l || [], h, !!y, z, k, y && z ? function(N) {
          return WA(N) === i;
        } : n);
      }
    }
  }, d(8, 0), d(0, 0), d(8, 1), d(0, 1), u(l), u(c), a = h, b || v(i), { e: a, get c() {
    var y = [];
    return b && [v(i = x(i, [t], s, i.name, 5, y)), _(y, 1)];
  } };
}
function zA(i) {
  var t = HA(i, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HA(i, t) {
  if (typeof i != "object" || !i) return i;
  var e = i[Symbol.toPrimitive];
  if (e !== void 0) {
    var s = e.call(i, t || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(i);
}
function kf(i, t, e) {
  typeof t == "symbol" && (t = (t = t.description) ? "[" + t + "]" : "");
  try {
    Object.defineProperty(i, "name", { configurable: !0, value: e ? e + " " + t : t });
  } catch {
  }
  return i;
}
function WA(i) {
  if (Object(i) !== i) throw TypeError("right-hand side of 'in' should be an object, got " + (i !== null ? typeof i : "null"));
  return i;
}
let Na;
class UA {
  constructor() {
    this.mychart = void 0;
  }
  bind() {
  }
  attached() {
    const t = [{
      year: 2010,
      count: 10
    }, {
      year: 2011,
      count: 20
    }, {
      year: 2012,
      count: 15
    }, {
      year: 2013,
      count: 25
    }, {
      year: 2014,
      count: 22
    }, {
      year: 2015,
      count: 30
    }, {
      year: 2016,
      count: 28
    }], e = {
      labels: t.map((s) => s.year),
      datasets: [{
        label: "Acquisitions by year",
        data: t.map((s) => s.count)
      }]
    };
    this.chartjs = yb(this.mychart, "bar", e);
  }
}
wb = UA;
[Na, xb] = jA(wb, [Hg({
  ...Dx,
  name: "sv-chartjs"
})], []).c;
xb();
const kb = "chartjs-scatter", Cc = `<div>
    chart-scatter view - should not be used
    <canvas ref="mychart"></canvas>
</div>
`, Cb = [], Sb = {};
let Rl;
function qA(i) {
  Rl || (Rl = Ee.define({ name: kb, template: Cc, dependencies: Cb, bindables: Sb })), i.register(Rl);
}
const KA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bindables: Sb,
  default: Cc,
  dependencies: Cb,
  name: kb,
  register: qA,
  template: Cc
}, Symbol.toStringTag, { value: "Module" }));
var Ab;
let Mb;
function YA(i, t, e, s, n, r) {
  var o, a, l, c, h, u, d, f = Symbol.metadata || Symbol.for("Symbol.metadata"), g = Object.defineProperty, p = Object.create, m = [p(null), p(null)], b = t.length;
  function _(y, k, T) {
    return function(M, O) {
      k && (O = M, M = i);
      for (var $ = 0; $ < y.length; $++) O = y[$].apply(M, T ? [O] : []);
      return T ? O : M;
    };
  }
  function w(y, k, T, M) {
    if (typeof y != "function" && (M || y !== void 0)) throw new TypeError(k + " must " + (T || "be") + " a function" + (M ? "" : " or undefined"));
    return y;
  }
  function x(y, k, T, M, O, $, V, z, H, N, I) {
    function W(et) {
      if (!I(et)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var it = [].concat(k[0]), L = k[3], J = !V, A = O === 1, E = O === 3, S = O === 4, P = O === 2;
    function dt(et, q, Qe) {
      return function(Dt, Re) {
        return q && (Re = Dt, Dt = y), Qe && Qe(Dt), C[et].call(Dt, Re);
      };
    }
    if (!J) {
      var C = {}, R = [], Y = E ? "get" : S || A ? "set" : "value";
      if (H ? (N || A ? C = { get: Cf(function() {
        return L(this);
      }, M, "get"), set: function(et) {
        k[4](this, et);
      } } : C[Y] = L, N || Cf(C[Y], M, P ? "" : Y)) : N || (C = Object.getOwnPropertyDescriptor(y, M)), !N && !H) {
        if ((a = m[+z][M]) && (a ^ O) != 7) throw Error("Decorating two elements with the same name (" + C[Y].name + ") is not supported yet");
        m[+z][M] = O < 3 ? 1 : O;
      }
    }
    for (var Q = y, Ft = it.length - 1; Ft >= 0; Ft -= T ? 2 : 1) {
      var Ke = w(it[Ft], "A decorator", "be", !0), Ye = T ? it[Ft - 1] : void 0, de = {}, Xt = { kind: ["field", "accessor", "method", "getter", "setter", "class"][O], name: M, metadata: o, addInitializer: (function(et, q) {
        if (et.v) throw new TypeError("attempted to call addInitializer after decoration was finished");
        w(q, "An initializer", "be", !0), $.push(q);
      }).bind(null, de) };
      if (J) a = Ke.call(Ye, Q, Xt), de.v = 1, w(a, "class decorators", "return") && (Q = a);
      else if (Xt.static = z, Xt.private = H, a = Xt.access = { has: H ? I.bind() : function(et) {
        return M in et;
      } }, S || (a.get = H ? P ? function(et) {
        return W(et), C.value;
      } : dt("get", 0, W) : function(et) {
        return et[M];
      }), P || E || (a.set = H ? dt("set", 0, W) : function(et, q) {
        et[M] = q;
      }), Q = Ke.call(Ye, A ? { get: C.get, set: C.set } : C[Y], Xt), de.v = 1, A) {
        if (typeof Q == "object" && Q) (a = w(Q.get, "accessor.get")) && (C.get = a), (a = w(Q.set, "accessor.set")) && (C.set = a), (a = w(Q.init, "accessor.init")) && R.unshift(a);
        else if (Q !== void 0) throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
      } else w(Q, (N ? "field" : "method") + " decorators", "return") && (N ? R.unshift(Q) : C[Y] = Q);
    }
    return O < 2 && V.push(_(R, z, 1), _($, z, 0)), N || J || (H ? A ? V.splice(-1, 0, dt("get", z), dt("set", z)) : V.push(P ? C[Y] : w.call.bind(C[Y])) : g(y, M, C)), Q;
  }
  function v(y) {
    return g(y, f, { configurable: !0, enumerable: !0, value: o });
  }
  return r !== void 0 && (o = r[f]), o = p(o ?? null), h = [], u = function(y) {
    y && h.push(_(y));
  }, d = function(y, k) {
    for (var T = 0; T < e.length; T++) {
      var M = e[T], O = M[1], $ = 7 & O;
      if ((8 & O) == y && !$ == k) {
        var V = M[2], z = !!M[3], H = 16 & O;
        x(y ? i : i.prototype, M, H, z ? "#" + V : QA(V), $, $ < 2 ? [] : y ? c = c || [] : l = l || [], h, !!y, z, k, y && z ? function(N) {
          return GA(N) === i;
        } : n);
      }
    }
  }, d(8, 0), d(0, 0), d(8, 1), d(0, 1), u(l), u(c), a = h, b || v(i), { e: a, get c() {
    var y = [];
    return b && [v(i = x(i, [t], s, i.name, 5, y)), _(y, 1)];
  } };
}
function QA(i) {
  var t = XA(i, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XA(i, t) {
  if (typeof i != "object" || !i) return i;
  var e = i[Symbol.toPrimitive];
  if (e !== void 0) {
    var s = e.call(i, t || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(i);
}
function Cf(i, t, e) {
  typeof t == "symbol" && (t = (t = t.description) ? "[" + t + "]" : "");
  try {
    Object.defineProperty(i, "name", { configurable: !0, value: e ? e + " " + t : t });
  } catch {
  }
  return i;
}
function GA(i) {
  if (Object(i) !== i) throw TypeError("right-hand side of 'in' should be an object, got " + (i !== null ? typeof i : "null"));
  return i;
}
let Tb;
class ZA extends Na {
  constructor(...t) {
    super(...t), this.mychart = void 0;
  }
  bind() {
  }
  attached() {
    const t = {
      datasets: [{
        label: "First Dataset",
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }, {
          x: 30,
          y: 12,
          r: 5
        }]
        //backgroundColor: 'rgb(255, 99, 132)'
      }, {
        label: "Second Dataset",
        data: [{
          x: 19,
          y: 32,
          r: 2
        }, {
          x: 41,
          y: 12,
          r: 5
        }, {
          x: 35,
          y: 11,
          r: 6
        }]
        //backgroundColor: 'rgb(99, 255, 132)'
      }]
    };
    this.chartjs = yb(this.mychart, "bubble", t);
  }
}
Ab = ZA;
[Tb, Mb] = YA(Ab, [Hg({
  ...KA,
  name: "sv-chartjs-scatter"
})], [], 0, void 0, Na).c;
Mb();
const ja = ni.createContainer(), JA = window;
ja.register(Ni.instance(ne, JA));
ja.register(Ex);
const tM = Ee.define({
  name: "dummy-app",
  template: ""
}), Pb = new ex(ja);
Pb.app({
  host: document.createElement("div"),
  component: tM
});
Pb.start();
const Ib = ja.get(Ox);
Ib.define("sv-chartjs", Na);
Ib.define("sv-chartjs-scatter", Tb);
export {
  Ib as registry
};
