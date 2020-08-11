module.exports = (function (e, t) {
    'use strict';
    var r = {};
    function __webpack_require__(t) {
        if (r[t]) {
            return r[t].exports;
        }
        var i = (r[t] = {i: t, l: false, exports: {}});
        var n = true;
        try {
            e[t].call(i.exports, i, i.exports, __webpack_require__);
            n = false;
        } finally {
            if (n) delete r[t];
        }
        i.l = true;
        return i.exports;
    }
    __webpack_require__.ab = __dirname + '/';
    function startup() {
        return __webpack_require__(431);
    }
    t(__webpack_require__);
    return startup();
})(
    {
        0: function (e, t, r) {
            const {requestLog: i} = r(916);
            const {restEndpointMethods: n} = r(842);
            const s = r(529);
            const o = [r(190), r(19), i, r(148), n, r(430), r(850)];
            const a = s.plugin(o);
            function DeprecatedOctokit(e) {
                const t = e && e.log && e.log.warn ? e.log.warn : console.warn;
                t(
                    '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead',
                );
                return new a(e);
            }
            const u = Object.assign(DeprecatedOctokit, {Octokit: a});
            Object.keys(a).forEach((e) => {
                if (a.hasOwnProperty(e)) {
                    u[e] = a[e];
                }
            });
            e.exports = u;
        },
        2: function (e, t, r) {
            'use strict';
            const i = r(87);
            const n = r(118);
            const s = r(494);
            const o = (e, t) => {
                if (!e && t) {
                    throw new Error("You can't specify a `release` without specifying `platform`");
                }
                e = e || i.platform();
                let r;
                if (e === 'darwin') {
                    if (!t && i.platform() === 'darwin') {
                        t = i.release();
                    }
                    const e = t ? (Number(t.split('.')[0]) > 15 ? 'macOS' : 'OS X') : 'macOS';
                    r = t ? n(t).name : '';
                    return e + (r ? ' ' + r : '');
                }
                if (e === 'linux') {
                    if (!t && i.platform() === 'linux') {
                        t = i.release();
                    }
                    r = t ? t.replace(/^(\d+\.\d+).*/, '$1') : '';
                    return 'Linux' + (r ? ' ' + r : '');
                }
                if (e === 'win32') {
                    if (!t && i.platform() === 'win32') {
                        t = i.release();
                    }
                    r = t ? s(t) : '';
                    return 'Windows' + (r ? ' ' + r : '');
                }
                return e;
            };
            e.exports = o;
        },
        9: function (e, t, r) {
            var i = r(49);
            var n = function () {};
            var s = function (e) {
                return e.setHeader && typeof e.abort === 'function';
            };
            var o = function (e) {
                return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3;
            };
            var a = function (e, t, r) {
                if (typeof t === 'function') return a(e, null, t);
                if (!t) t = {};
                r = i(r || n);
                var u = e._writableState;
                var p = e._readableState;
                var c = t.readable || (t.readable !== false && e.readable);
                var d = t.writable || (t.writable !== false && e.writable);
                var l = false;
                var g = function () {
                    if (!e.writable) m();
                };
                var m = function () {
                    d = false;
                    if (!c) r.call(e);
                };
                var h = function () {
                    c = false;
                    if (!d) r.call(e);
                };
                var y = function (t) {
                    r.call(e, t ? new Error('exited with error code: ' + t) : null);
                };
                var f = function (t) {
                    r.call(e, t);
                };
                var b = function () {
                    process.nextTick(_);
                };
                var _ = function () {
                    if (l) return;
                    if (c && !(p && p.ended && !p.destroyed)) return r.call(e, new Error('premature close'));
                    if (d && !(u && u.ended && !u.destroyed)) return r.call(e, new Error('premature close'));
                };
                var q = function () {
                    e.req.on('finish', m);
                };
                if (s(e)) {
                    e.on('complete', m);
                    e.on('abort', b);
                    if (e.req) q();
                    else e.on('request', q);
                } else if (d && !u) {
                    e.on('end', g);
                    e.on('close', g);
                }
                if (o(e)) e.on('exit', y);
                e.on('end', h);
                e.on('finish', m);
                if (t.error !== false) e.on('error', f);
                e.on('close', b);
                return function () {
                    l = true;
                    e.removeListener('complete', m);
                    e.removeListener('abort', b);
                    e.removeListener('request', q);
                    if (e.req) e.req.removeListener('finish', m);
                    e.removeListener('end', g);
                    e.removeListener('close', g);
                    e.removeListener('finish', m);
                    e.removeListener('exit', y);
                    e.removeListener('end', h);
                    e.removeListener('error', f);
                    e.removeListener('close', b);
                };
            };
            e.exports = a;
        },
        11: function (e) {
            e.exports = wrappy;
            function wrappy(e, t) {
                if (e && t) return wrappy(e)(t);
                if (typeof e !== 'function') throw new TypeError('need wrapper function');
                Object.keys(e).forEach(function (t) {
                    wrapper[t] = e[t];
                });
                return wrapper;
                function wrapper() {
                    var t = new Array(arguments.length);
                    for (var r = 0; r < t.length; r++) {
                        t[r] = arguments[r];
                    }
                    var i = e.apply(this, t);
                    var n = t[t.length - 1];
                    if (typeof i === 'function' && i !== n) {
                        Object.keys(n).forEach(function (e) {
                            i[e] = n[e];
                        });
                    }
                    return i;
                }
            }
        },
        16: function (e) {
            e.exports = require('tls');
        },
        18: function (module) {
            module.exports = eval('require')('encoding');
        },
        19: function (e, t, r) {
            e.exports = authenticationPlugin;
            const {Deprecation: i} = r(692);
            const n = r(49);
            const s = n((e, t) => e.warn(t));
            const o = r(674);
            const a = r(471);
            const u = r(349);
            function authenticationPlugin(e, t) {
                if (t.auth) {
                    e.authenticate = () => {
                        s(
                            e.log,
                            new i(
                                '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor',
                            ),
                        );
                    };
                    return;
                }
                const r = {octokit: e, auth: false};
                e.authenticate = o.bind(null, r);
                e.hook.before('request', a.bind(null, r));
                e.hook.error('request', u.bind(null, r));
            }
        },
        20: function (e, t, r) {
            'use strict';
            const i = r(129);
            const n = r(568);
            const s = r(881);
            function spawn(e, t, r) {
                const o = n(e, t, r);
                const a = i.spawn(o.command, o.args, o.options);
                s.hookChildProcess(a, o);
                return a;
            }
            function spawnSync(e, t, r) {
                const o = n(e, t, r);
                const a = i.spawnSync(o.command, o.args, o.options);
                a.error = a.error || s.verifyENOENTSync(a.status, o);
                return a;
            }
            e.exports = spawn;
            e.exports.spawn = spawn;
            e.exports.sync = spawnSync;
            e.exports._parse = n;
            e.exports._enoent = s;
        },
        39: function (e) {
            'use strict';
            e.exports = (e) => {
                e = e || {};
                const t = e.env || process.env;
                const r = e.platform || process.platform;
                if (r !== 'win32') {
                    return 'PATH';
                }
                return Object.keys(t).find((e) => e.toUpperCase() === 'PATH') || 'Path';
            };
        },
        47: function (e, t, r) {
            e.exports = factory;
            const i = r(402);
            const n = r(855);
            function factory(e) {
                const t = i.bind(null, e || []);
                t.plugin = n.bind(null, e || []);
                return t;
            }
        },
        49: function (e, t, r) {
            var i = r(11);
            e.exports = i(once);
            e.exports.strict = i(onceStrict);
            once.proto = once(function () {
                Object.defineProperty(Function.prototype, 'once', {
                    value: function () {
                        return once(this);
                    },
                    configurable: true,
                });
                Object.defineProperty(Function.prototype, 'onceStrict', {
                    value: function () {
                        return onceStrict(this);
                    },
                    configurable: true,
                });
            });
            function once(e) {
                var t = function () {
                    if (t.called) return t.value;
                    t.called = true;
                    return (t.value = e.apply(this, arguments));
                };
                t.called = false;
                return t;
            }
            function onceStrict(e) {
                var t = function () {
                    if (t.called) throw new Error(t.onceError);
                    t.called = true;
                    return (t.value = e.apply(this, arguments));
                };
                var r = e.name || 'Function wrapped with `once`';
                t.onceError = r + " shouldn't be called more than once";
                t.called = false;
                return t;
            }
        },
        81: function (e, t, r) {
            const i = r(867);
            const n = r(669);
            t.init = init;
            t.log = log;
            t.formatArgs = formatArgs;
            t.save = save;
            t.load = load;
            t.useColors = useColors;
            t.colors = [6, 2, 3, 4, 5, 1];
            try {
                const e = r(247);
                if (e && (e.stderr || e).level >= 2) {
                    t.colors = [
                        20,
                        21,
                        26,
                        27,
                        32,
                        33,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        56,
                        57,
                        62,
                        63,
                        68,
                        69,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        92,
                        93,
                        98,
                        99,
                        112,
                        113,
                        128,
                        129,
                        134,
                        135,
                        148,
                        149,
                        160,
                        161,
                        162,
                        163,
                        164,
                        165,
                        166,
                        167,
                        168,
                        169,
                        170,
                        171,
                        172,
                        173,
                        178,
                        179,
                        184,
                        185,
                        196,
                        197,
                        198,
                        199,
                        200,
                        201,
                        202,
                        203,
                        204,
                        205,
                        206,
                        207,
                        208,
                        209,
                        214,
                        215,
                        220,
                        221,
                    ];
                }
            } catch (e) {}
            t.inspectOpts = Object.keys(process.env)
                .filter((e) => {
                    return /^debug_/i.test(e);
                })
                .reduce((e, t) => {
                    const r = t
                        .substring(6)
                        .toLowerCase()
                        .replace(/_([a-z])/g, (e, t) => {
                            return t.toUpperCase();
                        });
                    let i = process.env[t];
                    if (/^(yes|on|true|enabled)$/i.test(i)) {
                        i = true;
                    } else if (/^(no|off|false|disabled)$/i.test(i)) {
                        i = false;
                    } else if (i === 'null') {
                        i = null;
                    } else {
                        i = Number(i);
                    }
                    e[r] = i;
                    return e;
                }, {});
            function useColors() {
                return 'colors' in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd);
            }
            function formatArgs(t) {
                const {namespace: r, useColors: i} = this;
                if (i) {
                    const i = this.color;
                    const n = '[3' + (i < 8 ? i : '8;5;' + i);
                    const s = `  ${n};1m${r} [0m`;
                    t[0] = s + t[0].split('\n').join('\n' + s);
                    t.push(n + 'm+' + e.exports.humanize(this.diff) + '[0m');
                } else {
                    t[0] = getDate() + r + ' ' + t[0];
                }
            }
            function getDate() {
                if (t.inspectOpts.hideDate) {
                    return '';
                }
                return new Date().toISOString() + ' ';
            }
            function log(...e) {
                return process.stderr.write(n.format(...e) + '\n');
            }
            function save(e) {
                if (e) {
                    process.env.DEBUG = e;
                } else {
                    delete process.env.DEBUG;
                }
            }
            function load() {
                return process.env.DEBUG;
            }
            function init(e) {
                e.inspectOpts = {};
                const r = Object.keys(t.inspectOpts);
                for (let i = 0; i < r.length; i++) {
                    e.inspectOpts[r[i]] = t.inspectOpts[r[i]];
                }
            }
            e.exports = r(486)(t);
            const {formatters: s} = e.exports;
            s.o = function (e) {
                this.inspectOpts.colors = this.useColors;
                return n.inspect(e, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
            };
            s.O = function (e) {
                this.inspectOpts.colors = this.useColors;
                return n.inspect(e, this.inspectOpts);
            };
        },
        87: function (e) {
            e.exports = require('os');
        },
        118: function (e, t, r) {
            'use strict';
            const i = r(87);
            const n = new Map([
                [20, ['Big Sur', '11']],
                [19, ['Catalina', '10.15']],
                [18, ['Mojave', '10.14']],
                [17, ['High Sierra', '10.13']],
                [16, ['Sierra', '10.12']],
                [15, ['El Capitan', '10.11']],
                [14, ['Yosemite', '10.10']],
                [13, ['Mavericks', '10.9']],
                [12, ['Mountain Lion', '10.8']],
                [11, ['Lion', '10.7']],
                [10, ['Snow Leopard', '10.6']],
                [9, ['Leopard', '10.5']],
                [8, ['Tiger', '10.4']],
                [7, ['Panther', '10.3']],
                [6, ['Jaguar', '10.2']],
                [5, ['Puma', '10.1']],
            ]);
            const s = (e) => {
                e = Number((e || i.release()).split('.')[0]);
                const [t, r] = n.get(e);
                return {name: t, version: r};
            };
            e.exports = s;
            e.exports.default = s;
        },
        126: function (e) {
            var t = 200;
            var r = '__lodash_hash_undefined__';
            var i = 1 / 0;
            var n = '[object Function]',
                s = '[object GeneratorFunction]';
            var o = /[\\^$.*+?()[\]{}|]/g;
            var a = /^\[object .+?Constructor\]$/;
            var u = typeof global == 'object' && global && global.Object === Object && global;
            var p = typeof self == 'object' && self && self.Object === Object && self;
            var c = u || p || Function('return this')();
            function arrayIncludes(e, t) {
                var r = e ? e.length : 0;
                return !!r && baseIndexOf(e, t, 0) > -1;
            }
            function arrayIncludesWith(e, t, r) {
                var i = -1,
                    n = e ? e.length : 0;
                while (++i < n) {
                    if (r(t, e[i])) {
                        return true;
                    }
                }
                return false;
            }
            function baseFindIndex(e, t, r, i) {
                var n = e.length,
                    s = r + (i ? 1 : -1);
                while (i ? s-- : ++s < n) {
                    if (t(e[s], s, e)) {
                        return s;
                    }
                }
                return -1;
            }
            function baseIndexOf(e, t, r) {
                if (t !== t) {
                    return baseFindIndex(e, baseIsNaN, r);
                }
                var i = r - 1,
                    n = e.length;
                while (++i < n) {
                    if (e[i] === t) {
                        return i;
                    }
                }
                return -1;
            }
            function baseIsNaN(e) {
                return e !== e;
            }
            function cacheHas(e, t) {
                return e.has(t);
            }
            function getValue(e, t) {
                return e == null ? undefined : e[t];
            }
            function isHostObject(e) {
                var t = false;
                if (e != null && typeof e.toString != 'function') {
                    try {
                        t = !!(e + '');
                    } catch (e) {}
                }
                return t;
            }
            function setToArray(e) {
                var t = -1,
                    r = Array(e.size);
                e.forEach(function (e) {
                    r[++t] = e;
                });
                return r;
            }
            var d = Array.prototype,
                l = Function.prototype,
                g = Object.prototype;
            var m = c['__core-js_shared__'];
            var h = (function () {
                var e = /[^.]+$/.exec((m && m.keys && m.keys.IE_PROTO) || '');
                return e ? 'Symbol(src)_1.' + e : '';
            })();
            var y = l.toString;
            var f = g.hasOwnProperty;
            var b = g.toString;
            var _ = RegExp(
                '^' +
                    y
                        .call(f)
                        .replace(o, '\\$&')
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                    '$',
            );
            var q = d.splice;
            var w = getNative(c, 'Map'),
                v = getNative(c, 'Set'),
                E = getNative(Object, 'create');
            function Hash(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function hashClear() {
                this.__data__ = E ? E(null) : {};
            }
            function hashDelete(e) {
                return this.has(e) && delete this.__data__[e];
            }
            function hashGet(e) {
                var t = this.__data__;
                if (E) {
                    var i = t[e];
                    return i === r ? undefined : i;
                }
                return f.call(t, e) ? t[e] : undefined;
            }
            function hashHas(e) {
                var t = this.__data__;
                return E ? t[e] !== undefined : f.call(t, e);
            }
            function hashSet(e, t) {
                var i = this.__data__;
                i[e] = E && t === undefined ? r : t;
                return this;
            }
            Hash.prototype.clear = hashClear;
            Hash.prototype['delete'] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;
            function ListCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function listCacheClear() {
                this.__data__ = [];
            }
            function listCacheDelete(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                if (r < 0) {
                    return false;
                }
                var i = t.length - 1;
                if (r == i) {
                    t.pop();
                } else {
                    q.call(t, r, 1);
                }
                return true;
            }
            function listCacheGet(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                return r < 0 ? undefined : t[r][1];
            }
            function listCacheHas(e) {
                return assocIndexOf(this.__data__, e) > -1;
            }
            function listCacheSet(e, t) {
                var r = this.__data__,
                    i = assocIndexOf(r, e);
                if (i < 0) {
                    r.push([e, t]);
                } else {
                    r[i][1] = t;
                }
                return this;
            }
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype['delete'] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;
            function MapCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function mapCacheClear() {
                this.__data__ = {hash: new Hash(), map: new (w || ListCache)(), string: new Hash()};
            }
            function mapCacheDelete(e) {
                return getMapData(this, e)['delete'](e);
            }
            function mapCacheGet(e) {
                return getMapData(this, e).get(e);
            }
            function mapCacheHas(e) {
                return getMapData(this, e).has(e);
            }
            function mapCacheSet(e, t) {
                getMapData(this, e).set(e, t);
                return this;
            }
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype['delete'] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;
            function SetCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.__data__ = new MapCache();
                while (++t < r) {
                    this.add(e[t]);
                }
            }
            function setCacheAdd(e) {
                this.__data__.set(e, r);
                return this;
            }
            function setCacheHas(e) {
                return this.__data__.has(e);
            }
            SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
            SetCache.prototype.has = setCacheHas;
            function assocIndexOf(e, t) {
                var r = e.length;
                while (r--) {
                    if (eq(e[r][0], t)) {
                        return r;
                    }
                }
                return -1;
            }
            function baseIsNative(e) {
                if (!isObject(e) || isMasked(e)) {
                    return false;
                }
                var t = isFunction(e) || isHostObject(e) ? _ : a;
                return t.test(toSource(e));
            }
            function baseUniq(e, r, i) {
                var n = -1,
                    s = arrayIncludes,
                    o = e.length,
                    a = true,
                    u = [],
                    p = u;
                if (i) {
                    a = false;
                    s = arrayIncludesWith;
                } else if (o >= t) {
                    var c = r ? null : T(e);
                    if (c) {
                        return setToArray(c);
                    }
                    a = false;
                    s = cacheHas;
                    p = new SetCache();
                } else {
                    p = r ? [] : u;
                }
                e: while (++n < o) {
                    var d = e[n],
                        l = r ? r(d) : d;
                    d = i || d !== 0 ? d : 0;
                    if (a && l === l) {
                        var g = p.length;
                        while (g--) {
                            if (p[g] === l) {
                                continue e;
                            }
                        }
                        if (r) {
                            p.push(l);
                        }
                        u.push(d);
                    } else if (!s(p, l, i)) {
                        if (p !== u) {
                            p.push(l);
                        }
                        u.push(d);
                    }
                }
                return u;
            }
            var T = !(v && 1 / setToArray(new v([, -0]))[1] == i)
                ? noop
                : function (e) {
                      return new v(e);
                  };
            function getMapData(e, t) {
                var r = e.__data__;
                return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
            }
            function getNative(e, t) {
                var r = getValue(e, t);
                return baseIsNative(r) ? r : undefined;
            }
            function isKeyable(e) {
                var t = typeof e;
                return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
                    ? e !== '__proto__'
                    : e === null;
            }
            function isMasked(e) {
                return !!h && h in e;
            }
            function toSource(e) {
                if (e != null) {
                    try {
                        return y.call(e);
                    } catch (e) {}
                    try {
                        return e + '';
                    } catch (e) {}
                }
                return '';
            }
            function uniq(e) {
                return e && e.length ? baseUniq(e) : [];
            }
            function eq(e, t) {
                return e === t || (e !== e && t !== t);
            }
            function isFunction(e) {
                var t = isObject(e) ? b.call(e) : '';
                return t == n || t == s;
            }
            function isObject(e) {
                var t = typeof e;
                return !!e && (t == 'object' || t == 'function');
            }
            function noop() {}
            e.exports = uniq;
        },
        129: function (e) {
            e.exports = require('child_process');
        },
        139: function (e, t, r) {
            var i = r(417);
            e.exports = function nodeRNG() {
                return i.randomBytes(16);
            };
        },
        141: function (e, t, r) {
            'use strict';
            var i = r(631);
            var n = r(16);
            var s = r(605);
            var o = r(211);
            var a = r(614);
            var u = r(357);
            var p = r(669);
            t.httpOverHttp = httpOverHttp;
            t.httpsOverHttp = httpsOverHttp;
            t.httpOverHttps = httpOverHttps;
            t.httpsOverHttps = httpsOverHttps;
            function httpOverHttp(e) {
                var t = new TunnelingAgent(e);
                t.request = s.request;
                return t;
            }
            function httpsOverHttp(e) {
                var t = new TunnelingAgent(e);
                t.request = s.request;
                t.createSocket = createSecureSocket;
                t.defaultPort = 443;
                return t;
            }
            function httpOverHttps(e) {
                var t = new TunnelingAgent(e);
                t.request = o.request;
                return t;
            }
            function httpsOverHttps(e) {
                var t = new TunnelingAgent(e);
                t.request = o.request;
                t.createSocket = createSecureSocket;
                t.defaultPort = 443;
                return t;
            }
            function TunnelingAgent(e) {
                var t = this;
                t.options = e || {};
                t.proxyOptions = t.options.proxy || {};
                t.maxSockets = t.options.maxSockets || s.Agent.defaultMaxSockets;
                t.requests = [];
                t.sockets = [];
                t.on('free', function onFree(e, r, i, n) {
                    var s = toOptions(r, i, n);
                    for (var o = 0, a = t.requests.length; o < a; ++o) {
                        var u = t.requests[o];
                        if (u.host === s.host && u.port === s.port) {
                            t.requests.splice(o, 1);
                            u.request.onSocket(e);
                            return;
                        }
                    }
                    e.destroy();
                    t.removeSocket(e);
                });
            }
            p.inherits(TunnelingAgent, a.EventEmitter);
            TunnelingAgent.prototype.addRequest = function addRequest(e, t, r, i) {
                var n = this;
                var s = mergeOptions({request: e}, n.options, toOptions(t, r, i));
                if (n.sockets.length >= this.maxSockets) {
                    n.requests.push(s);
                    return;
                }
                n.createSocket(s, function (t) {
                    t.on('free', onFree);
                    t.on('close', onCloseOrRemove);
                    t.on('agentRemove', onCloseOrRemove);
                    e.onSocket(t);
                    function onFree() {
                        n.emit('free', t, s);
                    }
                    function onCloseOrRemove(e) {
                        n.removeSocket(t);
                        t.removeListener('free', onFree);
                        t.removeListener('close', onCloseOrRemove);
                        t.removeListener('agentRemove', onCloseOrRemove);
                    }
                });
            };
            TunnelingAgent.prototype.createSocket = function createSocket(e, t) {
                var r = this;
                var i = {};
                r.sockets.push(i);
                var n = mergeOptions({}, r.proxyOptions, {
                    method: 'CONNECT',
                    path: e.host + ':' + e.port,
                    agent: false,
                    headers: {host: e.host + ':' + e.port},
                });
                if (e.localAddress) {
                    n.localAddress = e.localAddress;
                }
                if (n.proxyAuth) {
                    n.headers = n.headers || {};
                    n.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(n.proxyAuth).toString('base64');
                }
                c('making CONNECT request');
                var s = r.request(n);
                s.useChunkedEncodingByDefault = false;
                s.once('response', onResponse);
                s.once('upgrade', onUpgrade);
                s.once('connect', onConnect);
                s.once('error', onError);
                s.end();
                function onResponse(e) {
                    e.upgrade = true;
                }
                function onUpgrade(e, t, r) {
                    process.nextTick(function () {
                        onConnect(e, t, r);
                    });
                }
                function onConnect(n, o, a) {
                    s.removeAllListeners();
                    o.removeAllListeners();
                    if (n.statusCode !== 200) {
                        c('tunneling socket could not be established, statusCode=%d', n.statusCode);
                        o.destroy();
                        var u = new Error('tunneling socket could not be established, ' + 'statusCode=' + n.statusCode);
                        u.code = 'ECONNRESET';
                        e.request.emit('error', u);
                        r.removeSocket(i);
                        return;
                    }
                    if (a.length > 0) {
                        c('got illegal response body from proxy');
                        o.destroy();
                        var u = new Error('got illegal response body from proxy');
                        u.code = 'ECONNRESET';
                        e.request.emit('error', u);
                        r.removeSocket(i);
                        return;
                    }
                    c('tunneling connection has established');
                    r.sockets[r.sockets.indexOf(i)] = o;
                    return t(o);
                }
                function onError(t) {
                    s.removeAllListeners();
                    c('tunneling socket could not be established, cause=%s\n', t.message, t.stack);
                    var n = new Error('tunneling socket could not be established, ' + 'cause=' + t.message);
                    n.code = 'ECONNRESET';
                    e.request.emit('error', n);
                    r.removeSocket(i);
                }
            };
            TunnelingAgent.prototype.removeSocket = function removeSocket(e) {
                var t = this.sockets.indexOf(e);
                if (t === -1) {
                    return;
                }
                this.sockets.splice(t, 1);
                var r = this.requests.shift();
                if (r) {
                    this.createSocket(r, function (e) {
                        r.request.onSocket(e);
                    });
                }
            };
            function createSecureSocket(e, t) {
                var r = this;
                TunnelingAgent.prototype.createSocket.call(r, e, function (i) {
                    var s = e.request.getHeader('host');
                    var o = mergeOptions({}, r.options, {socket: i, servername: s ? s.replace(/:.*$/, '') : e.host});
                    var a = n.connect(0, o);
                    r.sockets[r.sockets.indexOf(i)] = a;
                    t(a);
                });
            }
            function toOptions(e, t, r) {
                if (typeof e === 'string') {
                    return {host: e, port: t, localAddress: r};
                }
                return e;
            }
            function mergeOptions(e) {
                for (var t = 1, r = arguments.length; t < r; ++t) {
                    var i = arguments[t];
                    if (typeof i === 'object') {
                        var n = Object.keys(i);
                        for (var s = 0, o = n.length; s < o; ++s) {
                            var a = n[s];
                            if (i[a] !== undefined) {
                                e[a] = i[a];
                            }
                        }
                    }
                }
                return e;
            }
            var c;
            if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
                c = function () {
                    var e = Array.prototype.slice.call(arguments);
                    if (typeof e[0] === 'string') {
                        e[0] = 'TUNNEL: ' + e[0];
                    } else {
                        e.unshift('TUNNEL:');
                    }
                    console.error.apply(console, e);
                };
            } else {
                c = function () {};
            }
            t.debug = c;
        },
        143: function (e, t, r) {
            e.exports = withAuthorizationPrefix;
            const i = r(368);
            const n = /^[\w-]+:/;
            function withAuthorizationPrefix(e) {
                if (/^(basic|bearer|token) /i.test(e)) {
                    return e;
                }
                try {
                    if (n.test(i(e))) {
                        return `basic ${e}`;
                    }
                } catch (e) {}
                if (e.split(/\./).length === 3) {
                    return `bearer ${e}`;
                }
                return `token ${e}`;
            }
        },
        145: function (e, t, r) {
            'use strict';
            const i = r(453);
            const n = r(966);
            class MaxBufferError extends Error {
                constructor() {
                    super('maxBuffer exceeded');
                    this.name = 'MaxBufferError';
                }
            }
            function getStream(e, t) {
                if (!e) {
                    return Promise.reject(new Error('Expected a stream'));
                }
                t = Object.assign({maxBuffer: Infinity}, t);
                const {maxBuffer: r} = t;
                let s;
                return new Promise((o, a) => {
                    const u = (e) => {
                        if (e) {
                            e.bufferedData = s.getBufferedValue();
                        }
                        a(e);
                    };
                    s = i(e, n(t), (e) => {
                        if (e) {
                            u(e);
                            return;
                        }
                        o();
                    });
                    s.on('data', () => {
                        if (s.getBufferedLength() > r) {
                            u(new MaxBufferError());
                        }
                    });
                }).then(() => s.getBufferedValue());
            }
            e.exports = getStream;
            e.exports.buffer = (e, t) => getStream(e, Object.assign({}, t, {encoding: 'buffer'}));
            e.exports.array = (e, t) => getStream(e, Object.assign({}, t, {array: true}));
            e.exports.MaxBufferError = MaxBufferError;
        },
        148: function (e, t, r) {
            e.exports = paginatePlugin;
            const {paginateRest: i} = r(299);
            function paginatePlugin(e) {
                Object.assign(e, i(e));
            }
        },
        154: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, s) {
                        function fulfilled(e) {
                            try {
                                step(i.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function rejected(e) {
                            try {
                                step(i['throw'](e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function step(e) {
                            e.done
                                ? n(e.value)
                                : new r(function (t) {
                                      t(e.value);
                                  }).then(fulfilled, rejected);
                        }
                        step((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const n = r(826);
            const s = (e) => `${e}-${n()}`;
            t.generateUniqueRef = s;
            const o = (e) => `heads/${e}`;
            t.getHeadRef = o;
            const a = (e) => `refs/${o(e)}`;
            const u = ({octokit: e, owner: t, ref: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    const {
                        data: {
                            object: {sha: i},
                        },
                    } = yield e.git.getRef({owner: t, ref: o(r), repo: n});
                    return i;
                });
            t.fetchRefSha = u;
            const p = ({force: e, octokit: t, owner: r, ref: n, repo: s, sha: a}) =>
                i(this, void 0, void 0, function* () {
                    yield t.git.updateRef({force: e, owner: r, ref: o(n), repo: s, sha: a});
                });
            t.updateRef = p;
            const c = ({octokit: e, owner: t, ref: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    yield e.git.deleteRef({owner: t, ref: o(r), repo: n});
                });
            t.deleteRef = c;
            const d = ({octokit: e, owner: t, ref: r, repo: n, sha: s}) =>
                i(this, void 0, void 0, function* () {
                    yield e.git.createRef({owner: t, ref: a(r), repo: n, sha: s});
                });
            t.createRef = d;
            const l = ({octokit: e, owner: t, ref: r, repo: n, sha: o}) =>
                i(this, void 0, void 0, function* () {
                    const a = s(r);
                    yield d({octokit: e, owner: t, ref: a, repo: n, sha: o});
                    return {
                        deleteTemporaryRef() {
                            return i(this, void 0, void 0, function* () {
                                yield c({octokit: e, owner: t, ref: a, repo: n});
                            });
                        },
                        temporaryRef: a,
                    };
                });
            t.createTemporaryRef = l;
            const g = ({action: e, octokit: t, owner: r, ref: n, repo: s, sha: o}) =>
                i(this, void 0, void 0, function* () {
                    const {deleteTemporaryRef: i, temporaryRef: a} = yield l({
                        octokit: t,
                        owner: r,
                        ref: n,
                        repo: s,
                        sha: o,
                    });
                    try {
                        return yield e(a);
                    } finally {
                        yield i();
                    }
                });
            t.withTemporaryRef = g;
            const m = ({
                commit: {
                    author: e,
                    committer: t,
                    message: r,
                    tree: {sha: i},
                },
                sha: n,
            }) => ({author: e, committer: t, message: r, sha: n, tree: i});
            const h = ({octokit: e, owner: t, pullRequestNumber: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    const i = e.pulls.listCommits.endpoint.merge({owner: t, pull_number: r, repo: n});
                    const s = yield e.paginate(i);
                    return s.map(m);
                });
            t.fetchCommitsDetails = h;
            const y = ({octokit: e, owner: t, pullRequestNumber: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    const i = yield h({octokit: e, owner: t, pullRequestNumber: r, repo: n});
                    return i.map(({sha: e}) => e);
                });
            t.fetchCommits = y;
        },
        168: function (e) {
            'use strict';
            const t = ['stdin', 'stdout', 'stderr'];
            const r = (e) => t.some((t) => Boolean(e[t]));
            e.exports = (e) => {
                if (!e) {
                    return null;
                }
                if (e.stdio && r(e)) {
                    throw new Error(
                        `It's not possible to provide \`stdio\` in combination with one of ${t
                            .map((e) => `\`${e}\``)
                            .join(', ')}`,
                    );
                }
                if (typeof e.stdio === 'string') {
                    return e.stdio;
                }
                const i = e.stdio || [];
                if (!Array.isArray(i)) {
                    throw new TypeError(
                        `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof i}\``,
                    );
                }
                const n = [];
                const s = Math.max(i.length, t.length);
                for (let r = 0; r < s; r++) {
                    let s = null;
                    if (i[r] !== undefined) {
                        s = i[r];
                    } else if (e[t[r]] !== undefined) {
                        s = e[t[r]];
                    }
                    n[r] = s;
                }
                return n;
            };
        },
        190: function (e, t, r) {
            e.exports = authenticationPlugin;
            const {createTokenAuth: i} = r(813);
            const {Deprecation: n} = r(692);
            const s = r(49);
            const o = r(863);
            const a = r(293);
            const u = r(954);
            const p = r(143);
            const c = s((e, t) => e.warn(t));
            const d = s((e, t) => e.warn(t));
            function authenticationPlugin(e, t) {
                if (t.authStrategy) {
                    const r = t.authStrategy(t.auth);
                    e.hook.wrap('request', r.hook);
                    e.auth = r;
                    return;
                }
                if (!t.auth) {
                    e.auth = () => Promise.resolve({type: 'unauthenticated'});
                    return;
                }
                const r = typeof t.auth === 'string' && /^basic/.test(p(t.auth));
                if (typeof t.auth === 'string' && !r) {
                    const r = i(t.auth);
                    e.hook.wrap('request', r.hook);
                    e.auth = r;
                    return;
                }
                const [s, l] = r
                    ? [
                          c,
                          'Setting the "new Octokit({ auth })" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)',
                      ]
                    : [
                          d,
                          'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)',
                      ];
                s(e.log, new n('[@octokit/rest] ' + l));
                e.auth = () => Promise.resolve({type: 'deprecated', message: l});
                u(t.auth);
                const g = {octokit: e, auth: t.auth};
                e.hook.before('request', o.bind(null, g));
                e.hook.error('request', a.bind(null, g));
            }
        },
        197: function (e, t, r) {
            e.exports = isexe;
            isexe.sync = sync;
            var i = r(747);
            function isexe(e, t, r) {
                i.stat(e, function (e, i) {
                    r(e, e ? false : checkStat(i, t));
                });
            }
            function sync(e, t) {
                return checkStat(i.statSync(e), t);
            }
            function checkStat(e, t) {
                return e.isFile() && checkMode(e, t);
            }
            function checkMode(e, t) {
                var r = e.mode;
                var i = e.uid;
                var n = e.gid;
                var s = t.uid !== undefined ? t.uid : process.getuid && process.getuid();
                var o = t.gid !== undefined ? t.gid : process.getgid && process.getgid();
                var a = parseInt('100', 8);
                var u = parseInt('010', 8);
                var p = parseInt('001', 8);
                var c = a | u;
                var d = r & p || (r & u && n === o) || (r & a && i === s) || (r & c && s === 0);
                return d;
            }
        },
        211: function (e) {
            e.exports = require('https');
        },
        215: function (e) {
            e.exports = {
                _from: '@octokit/rest@^16.43.1',
                _id: '@octokit/rest@16.43.2',
                _inBundle: false,
                _integrity:
                    'sha512-ngDBevLbBTFfrHZeiS7SAMAZ6ssuVmXuya+F/7RaVvlysgGa1JKJkKWY+jV6TCJYcW0OALfJ7nTIGXcBXzycfQ==',
                _location: '/@octokit/rest',
                _phantomChildren: {'@types/node': '14.0.27', deprecation: '2.3.1', once: '1.4.0', 'os-name': '3.1.0'},
                _requested: {
                    type: 'range',
                    registry: true,
                    raw: '@octokit/rest@^16.43.1',
                    name: '@octokit/rest',
                    escapedName: '@octokit%2frest',
                    scope: '@octokit',
                    rawSpec: '^16.43.1',
                    saveSpec: null,
                    fetchSpec: '^16.43.1',
                },
                _requiredBy: ['/@actions/github', '/github-cherry-pick', '/github-rebase', '/shared-github-internals'],
                _resolved: 'https://registry.npmjs.org/@octokit/rest/-/rest-16.43.2.tgz',
                _shasum: 'c53426f1e1d1044dee967023e3279c50993dd91b',
                _spec: '@octokit/rest@^16.43.1',
                _where: '/home/external/workspace/AutoRebase/node_modules/@actions/github',
                author: {name: 'Gregor Martynus', url: 'https://github.com/gr2m'},
                bugs: {url: 'https://github.com/octokit/rest.js/issues'},
                bundleDependencies: false,
                bundlesize: [{path: './dist/octokit-rest.min.js.gz', maxSize: '33 kB'}],
                contributors: [
                    {name: 'Mike de Boer', email: 'info@mikedeboer.nl'},
                    {name: 'Fabian Jakobs', email: 'fabian@c9.io'},
                    {name: 'Joe Gallo', email: 'joe@brassafrax.com'},
                    {name: 'Gregor Martynus', url: 'https://github.com/gr2m'},
                ],
                dependencies: {
                    '@octokit/auth-token': '^2.4.0',
                    '@octokit/plugin-paginate-rest': '^1.1.1',
                    '@octokit/plugin-request-log': '^1.0.0',
                    '@octokit/plugin-rest-endpoint-methods': '2.4.0',
                    '@octokit/request': '^5.2.0',
                    '@octokit/request-error': '^1.0.2',
                    'atob-lite': '^2.0.0',
                    'before-after-hook': '^2.0.0',
                    'btoa-lite': '^1.0.0',
                    deprecation: '^2.0.0',
                    'lodash.get': '^4.4.2',
                    'lodash.set': '^4.3.2',
                    'lodash.uniq': '^4.5.0',
                    'octokit-pagination-methods': '^1.1.0',
                    once: '^1.4.0',
                    'universal-user-agent': '^4.0.0',
                },
                deprecated: false,
                description: 'GitHub REST API client for Node.js',
                devDependencies: {
                    '@gimenete/type-writer': '^0.1.3',
                    '@octokit/auth': '^1.1.1',
                    '@octokit/fixtures-server': '^5.0.6',
                    '@octokit/graphql': '^4.2.0',
                    '@types/node': '^13.1.0',
                    bundlesize: '^0.18.0',
                    chai: '^4.1.2',
                    'compression-webpack-plugin': '^3.1.0',
                    cypress: '^4.0.0',
                    glob: '^7.1.2',
                    'http-proxy-agent': '^4.0.0',
                    'lodash.camelcase': '^4.3.0',
                    'lodash.merge': '^4.6.1',
                    'lodash.upperfirst': '^4.3.1',
                    lolex: '^6.0.0',
                    mkdirp: '^1.0.0',
                    mocha: '^7.0.1',
                    mustache: '^4.0.0',
                    nock: '^11.3.3',
                    'npm-run-all': '^4.1.2',
                    nyc: '^15.0.0',
                    prettier: '^1.14.2',
                    proxy: '^1.0.0',
                    'semantic-release': '^17.0.0',
                    sinon: '^8.0.0',
                    'sinon-chai': '^3.0.0',
                    'sort-keys': '^4.0.0',
                    'string-to-arraybuffer': '^1.0.0',
                    'string-to-jsdoc-comment': '^1.0.0',
                    typescript: '^3.3.1',
                    webpack: '^4.0.0',
                    'webpack-bundle-analyzer': '^3.0.0',
                    'webpack-cli': '^3.0.0',
                },
                files: ['index.js', 'index.d.ts', 'lib', 'plugins'],
                homepage: 'https://github.com/octokit/rest.js#readme',
                keywords: ['octokit', 'github', 'rest', 'api-client'],
                license: 'MIT',
                name: '@octokit/rest',
                nyc: {ignore: ['test']},
                publishConfig: {access: 'public'},
                release: {
                    publish: [
                        '@semantic-release/npm',
                        {path: '@semantic-release/github', assets: ['dist/*', '!dist/*.map.gz']},
                    ],
                },
                repository: {type: 'git', url: 'git+https://github.com/octokit/rest.js.git'},
                scripts: {
                    build: 'npm-run-all build:*',
                    'build:browser': 'npm-run-all build:browser:*',
                    'build:browser:development':
                        'webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json',
                    'build:browser:production':
                        'webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map',
                    'build:ts': 'npm run -s update-endpoints:typescript',
                    coverage: 'nyc report --reporter=html && open coverage/index.html',
                    'generate-bundle-report':
                        'webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html',
                    lint:
                        "prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
                    'lint:fix':
                        "prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
                    'postvalidate:ts': 'tsc --noEmit --target es6 test/typescript-validate.ts',
                    'prebuild:browser': 'mkdirp dist/',
                    pretest: 'npm run -s lint',
                    'prevalidate:ts': 'npm run -s build:ts',
                    'start-fixtures-server': 'octokit-fixtures-server',
                    test: 'nyc mocha test/mocha-node-setup.js "test/*/**/*-test.js"',
                    'test:browser': 'cypress run --browser chrome',
                    'update-endpoints': 'npm-run-all update-endpoints:*',
                    'update-endpoints:fetch-json': 'node scripts/update-endpoints/fetch-json',
                    'update-endpoints:typescript': 'node scripts/update-endpoints/typescript',
                    'validate:ts': 'tsc --target es6 --noImplicitAny index.d.ts',
                },
                types: 'index.d.ts',
                version: '16.43.2',
            };
        },
        247: function (e, t, r) {
            'use strict';
            const i = r(87);
            const n = r(364);
            const s = process.env;
            let o;
            if (n('no-color') || n('no-colors') || n('color=false')) {
                o = false;
            } else if (n('color') || n('colors') || n('color=true') || n('color=always')) {
                o = true;
            }
            if ('FORCE_COLOR' in s) {
                o = s.FORCE_COLOR.length === 0 || parseInt(s.FORCE_COLOR, 10) !== 0;
            }
            function translateLevel(e) {
                if (e === 0) {
                    return false;
                }
                return {level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3};
            }
            function supportsColor(e) {
                if (o === false) {
                    return 0;
                }
                if (n('color=16m') || n('color=full') || n('color=truecolor')) {
                    return 3;
                }
                if (n('color=256')) {
                    return 2;
                }
                if (e && !e.isTTY && o !== true) {
                    return 0;
                }
                const t = o ? 1 : 0;
                if (process.platform === 'win32') {
                    const e = i.release().split('.');
                    if (
                        Number(process.versions.node.split('.')[0]) >= 8 &&
                        Number(e[0]) >= 10 &&
                        Number(e[2]) >= 10586
                    ) {
                        return Number(e[2]) >= 14931 ? 3 : 2;
                    }
                    return 1;
                }
                if ('CI' in s) {
                    if (
                        ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some((e) => e in s) ||
                        s.CI_NAME === 'codeship'
                    ) {
                        return 1;
                    }
                    return t;
                }
                if ('TEAMCITY_VERSION' in s) {
                    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
                }
                if (s.COLORTERM === 'truecolor') {
                    return 3;
                }
                if ('TERM_PROGRAM' in s) {
                    const e = parseInt((s.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
                    switch (s.TERM_PROGRAM) {
                        case 'iTerm.app':
                            return e >= 3 ? 3 : 2;
                        case 'Apple_Terminal':
                            return 2;
                    }
                }
                if (/-256(color)?$/i.test(s.TERM)) {
                    return 2;
                }
                if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)) {
                    return 1;
                }
                if ('COLORTERM' in s) {
                    return 1;
                }
                if (s.TERM === 'dumb') {
                    return t;
                }
                return t;
            }
            function getSupportLevel(e) {
                const t = supportsColor(e);
                return translateLevel(t);
            }
            e.exports = {
                supportsColor: getSupportLevel,
                stdout: getSupportLevel(process.stdout),
                stderr: getSupportLevel(process.stderr),
            };
        },
        260: function (e, t, r) {
            var i = r(357);
            var n = r(654);
            var s = /^win/i.test(process.platform);
            var o = r(614);
            if (typeof o !== 'function') {
                o = o.EventEmitter;
            }
            var a;
            if (process.__signal_exit_emitter__) {
                a = process.__signal_exit_emitter__;
            } else {
                a = process.__signal_exit_emitter__ = new o();
                a.count = 0;
                a.emitted = {};
            }
            if (!a.infinite) {
                a.setMaxListeners(Infinity);
                a.infinite = true;
            }
            e.exports = function (e, t) {
                i.equal(typeof e, 'function', 'a callback must be provided for exit handler');
                if (p === false) {
                    load();
                }
                var r = 'exit';
                if (t && t.alwaysLast) {
                    r = 'afterexit';
                }
                var n = function () {
                    a.removeListener(r, e);
                    if (a.listeners('exit').length === 0 && a.listeners('afterexit').length === 0) {
                        unload();
                    }
                };
                a.on(r, e);
                return n;
            };
            e.exports.unload = unload;
            function unload() {
                if (!p) {
                    return;
                }
                p = false;
                n.forEach(function (e) {
                    try {
                        process.removeListener(e, u[e]);
                    } catch (e) {}
                });
                process.emit = d;
                process.reallyExit = c;
                a.count -= 1;
            }
            function emit(e, t, r) {
                if (a.emitted[e]) {
                    return;
                }
                a.emitted[e] = true;
                a.emit(e, t, r);
            }
            var u = {};
            n.forEach(function (e) {
                u[e] = function listener() {
                    var t = process.listeners(e);
                    if (t.length === a.count) {
                        unload();
                        emit('exit', null, e);
                        emit('afterexit', null, e);
                        if (s && e === 'SIGHUP') {
                            e = 'SIGINT';
                        }
                        process.kill(process.pid, e);
                    }
                };
            });
            e.exports.signals = function () {
                return n;
            };
            e.exports.load = load;
            var p = false;
            function load() {
                if (p) {
                    return;
                }
                p = true;
                a.count += 1;
                n = n.filter(function (e) {
                    try {
                        process.on(e, u[e]);
                        return true;
                    } catch (e) {
                        return false;
                    }
                });
                process.emit = processEmit;
                process.reallyExit = processReallyExit;
            }
            var c = process.reallyExit;
            function processReallyExit(e) {
                process.exitCode = e || 0;
                emit('exit', process.exitCode, null);
                emit('afterexit', process.exitCode, null);
                c.call(process, process.exitCode);
            }
            var d = process.emit;
            function processEmit(e, t) {
                if (e === 'exit') {
                    if (t !== undefined) {
                        process.exitCode = t;
                    }
                    var r = d.apply(this, arguments);
                    emit('exit', process.exitCode, null);
                    emit('afterexit', process.exitCode, null);
                    return r;
                } else {
                    return d.apply(this, arguments);
                }
            }
        },
        261: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, s) {
                        function fulfilled(e) {
                            try {
                                step(i.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function rejected(e) {
                            try {
                                step(i['throw'](e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function step(e) {
                            e.done
                                ? n(e.value)
                                : new r(function (t) {
                                      t(e.value);
                                  }).then(fulfilled, rejected);
                        }
                        step((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const n = r(784);
            const s = r(691);
            const o = r(154);
            const a = r(424);
            const u = n('github-rebase');
            const p = ({octokit: e, owner: t, pullRequestNumber: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    const i = yield o.fetchCommitsDetails({octokit: e, owner: t, pullRequestNumber: r, repo: n});
                    const s = a.getAutosquashingSteps(i);
                    return s.length > 1 || (s[0] && s[0].autosquashMessage !== null);
                });
            t.needAutosquashing = p;
            const c = ({commitsDetails: e, octokit: t, owner: r, parent: n, ref: s, refSha: a, repo: u, step: p}) =>
                i(this, void 0, void 0, function* () {
                    const {author: i, committer: c} = e.find(({sha: e}) => e === p.shas[0]);
                    const {
                        data: {
                            tree: {sha: d},
                        },
                    } = yield t.git.getCommit({commit_sha: a, owner: r, repo: u});
                    const {
                        data: {sha: l},
                    } = yield t.git.createCommit({
                        author: i,
                        committer: c,
                        message: String(p.autosquashMessage),
                        owner: r,
                        parents: [n],
                        repo: u,
                        tree: d,
                    });
                    yield o.updateRef({force: true, octokit: t, owner: r, ref: s, repo: u, sha: l});
                    return l;
                });
            const d = ({commitsDetails: e, octokit: t, owner: r, ref: n, repo: u}) =>
                i(this, void 0, void 0, function* () {
                    const p = yield o.fetchRefSha({octokit: t, owner: r, ref: n, repo: u});
                    const d = yield a.getAutosquashingSteps(e).reduce(
                        (o, a) =>
                            i(this, void 0, void 0, function* () {
                                const i = yield o;
                                const p = yield s.cherryPickCommits({
                                    commits: a.shas,
                                    head: n,
                                    octokit: t,
                                    owner: r,
                                    repo: u,
                                });
                                if (a.autosquashMessage === null) {
                                    return p;
                                }
                                return c({
                                    commitsDetails: e,
                                    octokit: t,
                                    owner: r,
                                    parent: i,
                                    ref: n,
                                    refSha: p,
                                    repo: u,
                                    step: a,
                                });
                            }),
                        Promise.resolve(p),
                    );
                    return d;
                });
            const l = ({octokit: e, owner: t, ref: r, repo: n, sha: s}) =>
                i(this, void 0, void 0, function* () {
                    const i = yield o.fetchRefSha({octokit: e, owner: t, ref: r, repo: n});
                    if (i !== s) {
                        throw new Error(
                            [
                                `Rebase aborted because the head branch changed.`,
                                `The current SHA of ${r} is ${i} but it was expected to still be ${s}.`,
                            ].join('\n'),
                        );
                    }
                });
            const g = ({
                _intercept: e = () => Promise.resolve(),
                octokit: t,
                owner: r,
                pullRequestNumber: n,
                repo: s,
            }) =>
                i(this, void 0, void 0, function* () {
                    u('starting', {pullRequestNumber: n, owner: r, repo: s});
                    const {
                        data: {
                            base: {ref: a},
                            head: {ref: p, sha: c},
                        },
                    } = yield t.pulls.get({owner: r, pull_number: n, repo: s});
                    const g = yield o.fetchRefSha({octokit: t, owner: r, ref: a, repo: s});
                    const m = yield o.fetchCommitsDetails({octokit: t, owner: r, pullRequestNumber: n, repo: s});
                    u('commits details fetched', {baseInitialSha: g, commitsDetails: m, headRef: p, initialHeadSha: c});
                    yield e({initialHeadSha: c});
                    return o.withTemporaryRef({
                        action: (e) =>
                            i(this, void 0, void 0, function* () {
                                u({temporaryRef: e});
                                const i = yield d({commitsDetails: m, octokit: t, owner: r, ref: e, repo: s});
                                yield l({octokit: t, owner: r, ref: p, repo: s, sha: c});
                                u('updating ref with new SHA', i);
                                yield o.updateRef({force: true, octokit: t, owner: r, ref: p, repo: s, sha: i});
                                u('ref updated');
                                return i;
                            }),
                        octokit: t,
                        owner: r,
                        ref: `rebase-pull-request-${n}`,
                        repo: s,
                        sha: g,
                    });
                });
            t.rebasePullRequest = g;
        },
        262: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const i = r(747);
            const n = r(87);
            class Context {
                constructor() {
                    this.payload = {};
                    if (process.env.GITHUB_EVENT_PATH) {
                        if (i.existsSync(process.env.GITHUB_EVENT_PATH)) {
                            this.payload = JSON.parse(
                                i.readFileSync(process.env.GITHUB_EVENT_PATH, {encoding: 'utf8'}),
                            );
                        } else {
                            const e = process.env.GITHUB_EVENT_PATH;
                            process.stdout.write(`GITHUB_EVENT_PATH ${e} does not exist${n.EOL}`);
                        }
                    }
                    this.eventName = process.env.GITHUB_EVENT_NAME;
                    this.sha = process.env.GITHUB_SHA;
                    this.ref = process.env.GITHUB_REF;
                    this.workflow = process.env.GITHUB_WORKFLOW;
                    this.action = process.env.GITHUB_ACTION;
                    this.actor = process.env.GITHUB_ACTOR;
                }
                get issue() {
                    const e = this.payload;
                    return Object.assign(Object.assign({}, this.repo), {
                        number: (e.issue || e.pull_request || e).number,
                    });
                }
                get repo() {
                    if (process.env.GITHUB_REPOSITORY) {
                        const [e, t] = process.env.GITHUB_REPOSITORY.split('/');
                        return {owner: e, repo: t};
                    }
                    if (this.payload.repository) {
                        return {owner: this.payload.repository.owner.login, repo: this.payload.repository.name};
                    }
                    throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
                }
            }
            t.Context = Context;
        },
        265: function (e, t, r) {
            e.exports = getPage;
            const i = r(370);
            const n = r(577);
            const s = r(297);
            function getPage(e, t, r, o) {
                i(
                    `octokit.get${
                        r.charAt(0).toUpperCase() + r.slice(1)
                    }Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`,
                );
                const a = n(t)[r];
                if (!a) {
                    const e = new s(`No ${r} page found`, 404);
                    return Promise.reject(e);
                }
                const u = {url: a, headers: applyAcceptHeader(t, o)};
                const p = e.request(u);
                return p;
            }
            function applyAcceptHeader(e, t) {
                const r = e.headers && e.headers['x-github-media-type'];
                if (!r || (t && t.accept)) {
                    return t;
                }
                t = t || {};
                t.accept = 'application/vnd.' + r.replace('; param=', '.').replace('; format=', '+');
                return t;
            }
        },
        280: function (e) {
            e.exports = register;
            function register(e, t, r, i) {
                if (typeof r !== 'function') {
                    throw new Error('method for before hook must be a function');
                }
                if (!i) {
                    i = {};
                }
                if (Array.isArray(t)) {
                    return t.reverse().reduce(function (t, r) {
                        return register.bind(null, e, r, t, i);
                    }, r)();
                }
                return Promise.resolve().then(function () {
                    if (!e.registry[t]) {
                        return r(i);
                    }
                    return e.registry[t].reduce(function (e, t) {
                        return t.hook.bind(null, e, i);
                    }, r)();
                });
            }
        },
        293: function (e, t, r) {
            e.exports = authenticationRequestError;
            const {RequestError: i} = r(497);
            function authenticationRequestError(e, t, r) {
                if (!t.headers) throw t;
                const n = /required/.test(t.headers['x-github-otp'] || '');
                if (t.status !== 401 || !n) {
                    throw t;
                }
                if (t.status === 401 && n && t.request && t.request.headers['x-github-otp']) {
                    if (e.otp) {
                        delete e.otp;
                    } else {
                        throw new i('Invalid one-time password for two-factor authentication', 401, {
                            headers: t.headers,
                            request: r,
                        });
                    }
                }
                if (typeof e.auth.on2fa !== 'function') {
                    throw new i(
                        '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
                        401,
                        {headers: t.headers, request: r},
                    );
                }
                return Promise.resolve()
                    .then(() => {
                        return e.auth.on2fa();
                    })
                    .then((t) => {
                        const i = Object.assign(r, {headers: Object.assign(r.headers, {'x-github-otp': t})});
                        return e.octokit.request(i).then((r) => {
                            e.otp = t;
                            return r;
                        });
                    });
            }
        },
        294: function (e, t, r) {
            e.exports = parseOptions;
            const {Deprecation: i} = r(692);
            const {getUserAgent: n} = r(768);
            const s = r(49);
            const o = r(215);
            const a = s((e, t) => e.warn(t));
            const u = s((e, t) => e.warn(t));
            const p = s((e, t) => e.warn(t));
            function parseOptions(e, t, r) {
                if (e.headers) {
                    e.headers = Object.keys(e.headers).reduce((t, r) => {
                        t[r.toLowerCase()] = e.headers[r];
                        return t;
                    }, {});
                }
                const s = {headers: e.headers || {}, request: e.request || {}, mediaType: {previews: [], format: ''}};
                if (e.baseUrl) {
                    s.baseUrl = e.baseUrl;
                }
                if (e.userAgent) {
                    s.headers['user-agent'] = e.userAgent;
                }
                if (e.previews) {
                    s.mediaType.previews = e.previews;
                }
                if (e.timeZone) {
                    s.headers['time-zone'] = e.timeZone;
                }
                if (e.timeout) {
                    a(
                        t,
                        new i(
                            '[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request',
                        ),
                    );
                    s.request.timeout = e.timeout;
                }
                if (e.agent) {
                    u(
                        t,
                        new i(
                            '[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request',
                        ),
                    );
                    s.request.agent = e.agent;
                }
                if (e.headers) {
                    p(
                        t,
                        new i(
                            '[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request',
                        ),
                    );
                }
                const c = s.headers['user-agent'];
                const d = `octokit.js/${o.version} ${n()}`;
                s.headers['user-agent'] = [c, d].filter(Boolean).join(' ');
                s.request.hook = r.bind(null, 'request');
                return s;
            }
        },
        297: function (e) {
            e.exports = class HttpError extends Error {
                constructor(e, t, r) {
                    super(e);
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                    this.name = 'HttpError';
                    this.code = t;
                    this.headers = r;
                }
            };
        },
        299: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const r = '1.1.2';
            const i = [
                /^\/search\//,
                /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)([^/]|$)/,
                /^\/installation\/repositories([^/]|$)/,
                /^\/user\/installations([^/]|$)/,
                /^\/repos\/[^/]+\/[^/]+\/actions\/secrets([^/]|$)/,
                /^\/repos\/[^/]+\/[^/]+\/actions\/workflows(\/[^/]+\/runs)?([^/]|$)/,
                /^\/repos\/[^/]+\/[^/]+\/actions\/runs(\/[^/]+\/(artifacts|jobs))?([^/]|$)/,
            ];
            function normalizePaginatedListResponse(e, t, r) {
                const n = t.replace(e.request.endpoint.DEFAULTS.baseUrl, '');
                const s = i.find((e) => e.test(n));
                if (!s) return;
                const o = r.data.incomplete_results;
                const a = r.data.repository_selection;
                const u = r.data.total_count;
                delete r.data.incomplete_results;
                delete r.data.repository_selection;
                delete r.data.total_count;
                const p = Object.keys(r.data)[0];
                const c = r.data[p];
                r.data = c;
                if (typeof o !== 'undefined') {
                    r.data.incomplete_results = o;
                }
                if (typeof a !== 'undefined') {
                    r.data.repository_selection = a;
                }
                r.data.total_count = u;
                Object.defineProperty(r.data, p, {
                    get() {
                        e.log.warn(
                            `[@octokit/paginate-rest] "response.data.${p}" is deprecated for "GET ${n}". Get the results directly from "response.data"`,
                        );
                        return Array.from(c);
                    },
                });
            }
            function iterator(e, t, r) {
                const i = e.request.endpoint(t, r);
                const n = i.method;
                const s = i.headers;
                let o = i.url;
                return {
                    [Symbol.asyncIterator]: () => ({
                        next() {
                            if (!o) {
                                return Promise.resolve({done: true});
                            }
                            return e.request({method: n, url: o, headers: s}).then((t) => {
                                normalizePaginatedListResponse(e, o, t);
                                o = ((t.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                                return {value: t};
                            });
                        },
                    }),
                };
            }
            function paginate(e, t, r, i) {
                if (typeof r === 'function') {
                    i = r;
                    r = undefined;
                }
                return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), i);
            }
            function gather(e, t, r, i) {
                return r.next().then((n) => {
                    if (n.done) {
                        return t;
                    }
                    let s = false;
                    function done() {
                        s = true;
                    }
                    t = t.concat(i ? i(n.value, done) : n.value.data);
                    if (s) {
                        return t;
                    }
                    return gather(e, t, r, i);
                });
            }
            function paginateRest(e) {
                return {paginate: Object.assign(paginate.bind(null, e), {iterator: iterator.bind(null, e)})};
            }
            paginateRest.VERSION = r;
            t.paginateRest = paginateRest;
        },
        317: function (e) {
            var t = 1e3;
            var r = t * 60;
            var i = r * 60;
            var n = i * 24;
            var s = n * 7;
            var o = n * 365.25;
            e.exports = function (e, t) {
                t = t || {};
                var r = typeof e;
                if (r === 'string' && e.length > 0) {
                    return parse(e);
                } else if (r === 'number' && isFinite(e)) {
                    return t.long ? fmtLong(e) : fmtShort(e);
                }
                throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e));
            };
            function parse(e) {
                e = String(e);
                if (e.length > 100) {
                    return;
                }
                var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e,
                );
                if (!a) {
                    return;
                }
                var u = parseFloat(a[1]);
                var p = (a[2] || 'ms').toLowerCase();
                switch (p) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return u * o;
                    case 'weeks':
                    case 'week':
                    case 'w':
                        return u * s;
                    case 'days':
                    case 'day':
                    case 'd':
                        return u * n;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return u * i;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return u * r;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return u * t;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return u;
                    default:
                        return undefined;
                }
            }
            function fmtShort(e) {
                var s = Math.abs(e);
                if (s >= n) {
                    return Math.round(e / n) + 'd';
                }
                if (s >= i) {
                    return Math.round(e / i) + 'h';
                }
                if (s >= r) {
                    return Math.round(e / r) + 'm';
                }
                if (s >= t) {
                    return Math.round(e / t) + 's';
                }
                return e + 'ms';
            }
            function fmtLong(e) {
                var s = Math.abs(e);
                if (s >= n) {
                    return plural(e, s, n, 'day');
                }
                if (s >= i) {
                    return plural(e, s, i, 'hour');
                }
                if (s >= r) {
                    return plural(e, s, r, 'minute');
                }
                if (s >= t) {
                    return plural(e, s, t, 'second');
                }
                return e + ' ms';
            }
            function plural(e, t, r, i) {
                var n = t >= r * 1.5;
                return Math.round(e / r) + ' ' + i + (n ? 's' : '');
            }
        },
        323: function (e) {
            'use strict';
            var t = (e.exports = function (e) {
                return e !== null && typeof e === 'object' && typeof e.pipe === 'function';
            });
            t.writable = function (e) {
                return (
                    t(e) &&
                    e.writable !== false &&
                    typeof e._write === 'function' &&
                    typeof e._writableState === 'object'
                );
            };
            t.readable = function (e) {
                return (
                    t(e) &&
                    e.readable !== false &&
                    typeof e._read === 'function' &&
                    typeof e._readableState === 'object'
                );
            };
            t.duplex = function (e) {
                return t.writable(e) && t.readable(e);
            };
            t.transform = function (e) {
                return t.duplex(e) && typeof e._transform === 'function' && typeof e._transformState === 'object';
            };
        },
        336: function (e, t, r) {
            e.exports = hasLastPage;
            const i = r(370);
            const n = r(577);
            function hasLastPage(e) {
                i(
                    `octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`,
                );
                return n(e).last;
            }
        },
        348: function (e, t, r) {
            'use strict';
            e.exports = validate;
            const {RequestError: i} = r(497);
            const n = r(854);
            const s = r(883);
            function validate(e, t) {
                if (!t.request.validate) {
                    return;
                }
                const {validate: r} = t.request;
                Object.keys(r).forEach((e) => {
                    const o = n(r, e);
                    const a = o.type;
                    let u;
                    let p;
                    let c = true;
                    let d = false;
                    if (/\./.test(e)) {
                        u = e.replace(/\.[^.]+$/, '');
                        d = u.slice(-2) === '[]';
                        if (d) {
                            u = u.slice(0, -2);
                        }
                        p = n(t, u);
                        c = u === 'headers' || (typeof p === 'object' && p !== null);
                    }
                    const l = d ? (n(t, u) || []).map((t) => t[e.split(/\./).pop()]) : [n(t, e)];
                    l.forEach((r, n) => {
                        const u = typeof r !== 'undefined';
                        const p = r === null;
                        const l = d ? e.replace(/\[\]/, `[${n}]`) : e;
                        if (!o.required && !u) {
                            return;
                        }
                        if (!c) {
                            return;
                        }
                        if (o.allowNull && p) {
                            return;
                        }
                        if (!o.allowNull && p) {
                            throw new i(`'${l}' cannot be null`, 400, {request: t});
                        }
                        if (o.required && !u) {
                            throw new i(`Empty value for parameter '${l}': ${JSON.stringify(r)}`, 400, {request: t});
                        }
                        if (a === 'integer') {
                            const e = r;
                            r = parseInt(r, 10);
                            if (isNaN(r)) {
                                throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(e)} is NaN`, 400, {
                                    request: t,
                                });
                            }
                        }
                        if (o.enum && o.enum.indexOf(String(r)) === -1) {
                            throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {request: t});
                        }
                        if (o.validation) {
                            const e = new RegExp(o.validation);
                            if (!e.test(r)) {
                                throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
                                    request: t,
                                });
                            }
                        }
                        if (a === 'object' && typeof r === 'string') {
                            try {
                                r = JSON.parse(r);
                            } catch (e) {
                                throw new i(
                                    `JSON parse error of value for parameter '${l}': ${JSON.stringify(r)}`,
                                    400,
                                    {request: t},
                                );
                            }
                        }
                        s(t, o.mapTo || l, r);
                    });
                });
                return t;
            }
        },
        349: function (e, t, r) {
            e.exports = authenticationRequestError;
            const {RequestError: i} = r(497);
            function authenticationRequestError(e, t, r) {
                if (!t.headers) throw t;
                const n = /required/.test(t.headers['x-github-otp'] || '');
                if (t.status !== 401 || !n) {
                    throw t;
                }
                if (t.status === 401 && n && t.request && t.request.headers['x-github-otp']) {
                    throw new i('Invalid one-time password for two-factor authentication', 401, {
                        headers: t.headers,
                        request: r,
                    });
                }
                if (typeof e.auth.on2fa !== 'function') {
                    throw new i(
                        '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
                        401,
                        {headers: t.headers, request: r},
                    );
                }
                return Promise.resolve()
                    .then(() => {
                        return e.auth.on2fa();
                    })
                    .then((t) => {
                        const i = Object.assign(r, {headers: Object.assign({'x-github-otp': t}, r.headers)});
                        return e.octokit.request(i);
                    });
            }
        },
        357: function (e) {
            e.exports = require('assert');
        },
        364: function (e) {
            'use strict';
            e.exports = (e, t) => {
                t = t || process.argv;
                const r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--';
                const i = t.indexOf(r + e);
                const n = t.indexOf('--');
                return i !== -1 && (n === -1 ? true : i < n);
            };
        },
        368: function (e) {
            e.exports = function atob(e) {
                return Buffer.from(e, 'base64').toString('binary');
            };
        },
        370: function (e) {
            e.exports = deprecate;
            const t = {};
            function deprecate(e) {
                if (t[e]) {
                    return;
                }
                console.warn(`DEPRECATED (@octokit/rest): ${e}`);
                t[e] = 1;
            }
        },
        385: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = _interopDefault(r(696));
            var n = r(796);
            function lowercaseKeys(e) {
                if (!e) {
                    return {};
                }
                return Object.keys(e).reduce((t, r) => {
                    t[r.toLowerCase()] = e[r];
                    return t;
                }, {});
            }
            function mergeDeep(e, t) {
                const r = Object.assign({}, e);
                Object.keys(t).forEach((n) => {
                    if (i(t[n])) {
                        if (!(n in e)) Object.assign(r, {[n]: t[n]});
                        else r[n] = mergeDeep(e[n], t[n]);
                    } else {
                        Object.assign(r, {[n]: t[n]});
                    }
                });
                return r;
            }
            function merge(e, t, r) {
                if (typeof t === 'string') {
                    let [e, i] = t.split(' ');
                    r = Object.assign(i ? {method: e, url: i} : {url: e}, r);
                } else {
                    r = Object.assign({}, t);
                }
                r.headers = lowercaseKeys(r.headers);
                const i = mergeDeep(e || {}, r);
                if (e && e.mediaType.previews.length) {
                    i.mediaType.previews = e.mediaType.previews
                        .filter((e) => !i.mediaType.previews.includes(e))
                        .concat(i.mediaType.previews);
                }
                i.mediaType.previews = i.mediaType.previews.map((e) => e.replace(/-preview/, ''));
                return i;
            }
            function addQueryParameters(e, t) {
                const r = /\?/.test(e) ? '&' : '?';
                const i = Object.keys(t);
                if (i.length === 0) {
                    return e;
                }
                return (
                    e +
                    r +
                    i
                        .map((e) => {
                            if (e === 'q') {
                                return 'q=' + t.q.split('+').map(encodeURIComponent).join('+');
                            }
                            return `${e}=${encodeURIComponent(t[e])}`;
                        })
                        .join('&')
                );
            }
            const s = /\{[^}]+\}/g;
            function removeNonChars(e) {
                return e.replace(/^\W+|\W+$/g, '').split(/,/);
            }
            function extractUrlVariableNames(e) {
                const t = e.match(s);
                if (!t) {
                    return [];
                }
                return t.map(removeNonChars).reduce((e, t) => e.concat(t), []);
            }
            function omit(e, t) {
                return Object.keys(e)
                    .filter((e) => !t.includes(e))
                    .reduce((t, r) => {
                        t[r] = e[r];
                        return t;
                    }, {});
            }
            function encodeReserved(e) {
                return e
                    .split(/(%[0-9A-Fa-f]{2})/g)
                    .map(function (e) {
                        if (!/%[0-9A-Fa-f]/.test(e)) {
                            e = encodeURI(e).replace(/%5B/g, '[').replace(/%5D/g, ']');
                        }
                        return e;
                    })
                    .join('');
            }
            function encodeUnreserved(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                    return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                });
            }
            function encodeValue(e, t, r) {
                t = e === '+' || e === '#' ? encodeReserved(t) : encodeUnreserved(t);
                if (r) {
                    return encodeUnreserved(r) + '=' + t;
                } else {
                    return t;
                }
            }
            function isDefined(e) {
                return e !== undefined && e !== null;
            }
            function isKeyOperator(e) {
                return e === ';' || e === '&' || e === '?';
            }
            function getValues(e, t, r, i) {
                var n = e[r],
                    s = [];
                if (isDefined(n) && n !== '') {
                    if (typeof n === 'string' || typeof n === 'number' || typeof n === 'boolean') {
                        n = n.toString();
                        if (i && i !== '*') {
                            n = n.substring(0, parseInt(i, 10));
                        }
                        s.push(encodeValue(t, n, isKeyOperator(t) ? r : ''));
                    } else {
                        if (i === '*') {
                            if (Array.isArray(n)) {
                                n.filter(isDefined).forEach(function (e) {
                                    s.push(encodeValue(t, e, isKeyOperator(t) ? r : ''));
                                });
                            } else {
                                Object.keys(n).forEach(function (e) {
                                    if (isDefined(n[e])) {
                                        s.push(encodeValue(t, n[e], e));
                                    }
                                });
                            }
                        } else {
                            const e = [];
                            if (Array.isArray(n)) {
                                n.filter(isDefined).forEach(function (r) {
                                    e.push(encodeValue(t, r));
                                });
                            } else {
                                Object.keys(n).forEach(function (r) {
                                    if (isDefined(n[r])) {
                                        e.push(encodeUnreserved(r));
                                        e.push(encodeValue(t, n[r].toString()));
                                    }
                                });
                            }
                            if (isKeyOperator(t)) {
                                s.push(encodeUnreserved(r) + '=' + e.join(','));
                            } else if (e.length !== 0) {
                                s.push(e.join(','));
                            }
                        }
                    }
                } else {
                    if (t === ';') {
                        if (isDefined(n)) {
                            s.push(encodeUnreserved(r));
                        }
                    } else if (n === '' && (t === '&' || t === '?')) {
                        s.push(encodeUnreserved(r) + '=');
                    } else if (n === '') {
                        s.push('');
                    }
                }
                return s;
            }
            function parseUrl(e) {
                return {expand: expand.bind(null, e)};
            }
            function expand(e, t) {
                var r = ['+', '#', '.', '/', ';', '?', '&'];
                return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, i, n) {
                    if (i) {
                        let e = '';
                        const n = [];
                        if (r.indexOf(i.charAt(0)) !== -1) {
                            e = i.charAt(0);
                            i = i.substr(1);
                        }
                        i.split(/,/g).forEach(function (r) {
                            var i = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                            n.push(getValues(t, e, i[1], i[2] || i[3]));
                        });
                        if (e && e !== '+') {
                            var s = ',';
                            if (e === '?') {
                                s = '&';
                            } else if (e !== '#') {
                                s = e;
                            }
                            return (n.length !== 0 ? e : '') + n.join(s);
                        } else {
                            return n.join(',');
                        }
                    } else {
                        return encodeReserved(n);
                    }
                });
            }
            function parse(e) {
                let t = e.method.toUpperCase();
                let r = (e.url || '/').replace(/:([a-z]\w+)/g, '{+$1}');
                let i = Object.assign({}, e.headers);
                let n;
                let s = omit(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType']);
                const o = extractUrlVariableNames(r);
                r = parseUrl(r).expand(s);
                if (!/^http/.test(r)) {
                    r = e.baseUrl + r;
                }
                const a = Object.keys(e)
                    .filter((e) => o.includes(e))
                    .concat('baseUrl');
                const u = omit(s, a);
                const p = /application\/octet-stream/i.test(i.accept);
                if (!p) {
                    if (e.mediaType.format) {
                        i.accept = i.accept
                            .split(/,/)
                            .map((t) =>
                                t.replace(
                                    /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                                    `application/vnd$1$2.${e.mediaType.format}`,
                                ),
                            )
                            .join(',');
                    }
                    if (e.mediaType.previews.length) {
                        const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
                        i.accept = t
                            .concat(e.mediaType.previews)
                            .map((t) => {
                                const r = e.mediaType.format ? `.${e.mediaType.format}` : '+json';
                                return `application/vnd.github.${t}-preview${r}`;
                            })
                            .join(',');
                    }
                }
                if (['GET', 'HEAD'].includes(t)) {
                    r = addQueryParameters(r, u);
                } else {
                    if ('data' in u) {
                        n = u.data;
                    } else {
                        if (Object.keys(u).length) {
                            n = u;
                        } else {
                            i['content-length'] = 0;
                        }
                    }
                }
                if (!i['content-type'] && typeof n !== 'undefined') {
                    i['content-type'] = 'application/json; charset=utf-8';
                }
                if (['PATCH', 'PUT'].includes(t) && typeof n === 'undefined') {
                    n = '';
                }
                return Object.assign(
                    {method: t, url: r, headers: i},
                    typeof n !== 'undefined' ? {body: n} : null,
                    e.request ? {request: e.request} : null,
                );
            }
            function endpointWithDefaults(e, t, r) {
                return parse(merge(e, t, r));
            }
            function withDefaults(e, t) {
                const r = merge(e, t);
                const i = endpointWithDefaults.bind(null, r);
                return Object.assign(i, {
                    DEFAULTS: r,
                    defaults: withDefaults.bind(null, r),
                    merge: merge.bind(null, r),
                    parse: parse,
                });
            }
            const o = '6.0.5';
            const a = `octokit-endpoint.js/${o} ${n.getUserAgent()}`;
            const u = {
                method: 'GET',
                baseUrl: 'https://api.github.com',
                headers: {accept: 'application/vnd.github.v3+json', 'user-agent': a},
                mediaType: {format: '', previews: []},
            };
            const p = withDefaults(null, u);
            t.endpoint = p;
        },
        389: function (e, t, r) {
            'use strict';
            const i = r(747);
            const n = r(452);
            function readShebang(e) {
                const t = 150;
                let r;
                if (Buffer.alloc) {
                    r = Buffer.alloc(t);
                } else {
                    r = new Buffer(t);
                    r.fill(0);
                }
                let s;
                try {
                    s = i.openSync(e, 'r');
                    i.readSync(s, r, 0, t, 0);
                    i.closeSync(s);
                } catch (e) {}
                return n(r.toString());
            }
            e.exports = readShebang;
        },
        402: function (e, t, r) {
            e.exports = Octokit;
            const {request: i} = r(753);
            const n = r(523);
            const s = r(294);
            function Octokit(e, t) {
                t = t || {};
                const r = new n.Collection();
                const o = Object.assign(
                    {debug: () => {}, info: () => {}, warn: console.warn, error: console.error},
                    t && t.log,
                );
                const a = {hook: r, log: o, request: i.defaults(s(t, o, r))};
                e.forEach((e) => e(a, t));
                return a;
            }
        },
        413: function (e) {
            e.exports = require('stream');
        },
        417: function (e) {
            e.exports = require('crypto');
        },
        424: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const r = (e) => {
                const [t, ...r] = e.split(/(\r\n|\r|\n){2}/u);
                return {
                    body: r
                        .map((e) => e.trim())
                        .filter((e) => e !== '')
                        .join('\n'),
                    subject: t,
                };
            };
            const i = ({commitDetails: e, message: t}) => {
                const i = new RegExp(
                    `^(fixup|squash)! (fixup! |squash! )*(${r(e.message).subject}|${e.sha}|${e.sha.substr(7)})$`,
                    'u',
                ).exec(r(t).subject);
                if (!i) {
                    return null;
                }
                return i[1] === 'fixup' ? 'fixup' : 'squash';
            };
            const n = ({commitsDetails: e, message: t, mode: r, step: i}) => {
                const n =
                    i.autosquashMessage === null ? e.find(({sha: e}) => e === i.shas[0]).message : i.autosquashMessage;
                return r === 'squash' ? `${n}\n\n${t}` : n;
            };
            const s = ({newStep: e, steps: t}) =>
                e.autosquashMessage === null && t.length > 0 && t[t.length - 1].autosquashMessage === null
                    ? [...t.slice(0, -1), {autosquashMessage: null, shas: [...t[t.length - 1].shas, ...e.shas]}]
                    : [...t, e];
            const o = (e) => {
                const t = new Set();
                const r = [];
                return e.reduce((r, o) => {
                    if (t.has(o.sha)) {
                        return r;
                    }
                    t.add(o.sha);
                    const a = {autosquashMessage: null, shas: [o.sha]};
                    const u = e
                        .filter(({sha: e}) => !t.has(e))
                        .reduce((r, {message: s, sha: a}) => {
                            const u = i({commitDetails: o, message: s});
                            if (u === null) {
                                return r;
                            }
                            t.add(a);
                            return {
                                autosquashMessage: n({commitsDetails: e, message: s, mode: u, step: r}),
                                shas: [...r.shas, a],
                            };
                        }, a);
                    return s({newStep: u, steps: r});
                }, r);
            };
            t.getAutosquashingSteps = o;
        },
        427: function (e, t, r) {
            'use strict';
            const i = r(669);
            let n;
            if (typeof i.getSystemErrorName === 'function') {
                e.exports = i.getSystemErrorName;
            } else {
                try {
                    n = process.binding('uv');
                    if (typeof n.errname !== 'function') {
                        throw new TypeError('uv.errname is not a function');
                    }
                } catch (e) {
                    console.error("execa/lib/errname: unable to establish process.binding('uv')", e);
                    n = null;
                }
                e.exports = (e) => errname(n, e);
            }
            e.exports.__test__ = errname;
            function errname(e, t) {
                if (e) {
                    return e.errname(t);
                }
                if (!(t < 0)) {
                    throw new Error('err >= 0');
                }
                return `Unknown system error ${t}`;
            }
        },
        430: function (e, t, r) {
            e.exports = octokitValidate;
            const i = r(348);
            function octokitValidate(e) {
                e.hook.before('request', i.bind(null, e));
            }
        },
        431: function (e, t, r) {
            'use strict';
            r.r(t);
            var i = r(470);
            var n = r(469);
            var s = r(261);
            const o = 'autorebase:opt-in';
            const a = 'autorebase:once';
            const u = 'autorebase:non-rebaseable';
            class rebaser_Rebaser {
                constructor(e) {
                    this.github = e;
                }
                async rebasePullRequests(e) {
                    for (const t of e) {
                        await this.rebase(t);
                    }
                }
                async rebase(e) {
                    Object(i.info)(`Rebasing pull request ${JSON.stringify(e)}`);
                    try {
                        await Object(s.rebasePullRequest)({
                            octokit: this.github,
                            owner: e.ownerName,
                            pullRequestNumber: e.number,
                            repo: e.repoName,
                        });
                        if (e.labels.includes(a)) {
                            await this.github.issues.removeLabel({
                                owner: e.ownerName,
                                repo: e.repoName,
                                issue_number: e.number,
                                name: a,
                            });
                        }
                        Object(i.info)(`${JSON.stringify(e)} was successfully rebased.`);
                    } catch (t) {
                        throw new Error(`Error while rebasing for ${JSON.stringify(e)}: ${String(t)}`);
                    }
                }
            }
            class testableEligiblePullRequestsRetriever_TestableEligiblePullRequestsRetriever {
                constructor(e) {
                    this.openPullRequestsProvider = e;
                }
                async findEligiblePullRequests(e, t) {
                    const r = await this.openPullRequestsProvider.openPullRequests(e, t);
                    Object(i.info)(`Found ${r.length} open pull requests.`);
                    const n = r.filter((e) => {
                        return testableEligiblePullRequestsRetriever_TestableEligiblePullRequestsRetriever.isEligible(
                            e,
                        );
                    });
                    Object(i.info)(`${n.length} pull requests are eligible.`);
                    return n;
                }
                static isEligible(e) {
                    if (!e.labels.includes(o) && !e.labels.includes(a)) {
                        Object(i.info)(`PR #${e.number} does not have the '${o}' or '${a}' label.`);
                        return false;
                    }
                    if (!e.rebaseable) {
                        Object(i.info)(`PR #${e.number} is not rebaseable.`);
                        return false;
                    }
                    return true;
                }
            }
            const p = ['behind', 'blocked', 'clean', 'dirty', 'unknown', 'unstable'];
            async function promiseRetry(e, t = {timeoutMs: 500}, r = 1) {
                try {
                    return await e(r);
                } catch (i) {
                    if (r === 10) {
                        throw i;
                    }
                    await timeout(t.timeoutMs);
                    return promiseRetry(e, t, r + 1);
                }
            }
            function timeout(e) {
                return new Promise((t) => setTimeout(t, e));
            }
            class githubPullRequestInfoProvider_GithubPullRequestInfoProvider {
                constructor(e) {
                    this.getPullRequestService = e;
                }
                pullRequestInfoFor(e, t, r) {
                    return promiseRetry(async (n) => {
                        try {
                            const {
                                draft: s,
                                rebaseable: o,
                                mergeableState: a,
                                labels: u,
                            } = await this.getPullRequestService.getPullRequest(e, t, r);
                            if (n < 10 && !s) {
                                if (a === 'unknown' || !p.includes(a)) {
                                    Object(i.debug)(`mergeableState for pull request #${r} is 'unknown', retrying.`);
                                    throw Error("mergeableState is 'unknown'");
                                }
                            }
                            Object(i.debug)(`rebaseable value for pull request #${r}: ${String(o)}`);
                            Object(i.debug)(`mergeableState for pull request #${r}: ${a}`);
                            return {
                                ownerName: e,
                                repoName: t,
                                number: r,
                                draft: s,
                                rebaseable: o,
                                mergeableState: a,
                                labels: u,
                            };
                        } catch (e) {
                            Object(i.debug)(
                                `Fetching mergeableState for pull request #${r} failed: "${String(e)}", retrying.`,
                            );
                            throw e;
                        }
                    });
                }
            }
            class GithubGetPullRequestService {
                constructor(e) {
                    this.github = e;
                }
                async getPullRequest(e, t, r) {
                    const i = await this.github.pulls.get({owner: e, repo: t, pull_number: r});
                    return {
                        draft: i.data.draft,
                        rebaseable: i.data.rebaseable,
                        mergeableState: i.data.mergeable_state,
                        labels: i.data.labels.map((e) => e.name),
                    };
                }
            }
            class GithubListPullRequestsService {
                constructor(e) {
                    this.github = e;
                }
                async listOpenPullRequests(e, t) {
                    const {data: r} = await this.github.pulls.list({owner: e, repo: t, state: 'open'});
                    return r.map((e) => {
                        return {number: e.number, labels: e.labels.map((e) => e.name)};
                    });
                }
            }
            class GithubLabelPullRequestService {
                constructor(e) {
                    this.github = e;
                }
                async listLabels(e, t) {
                    const {data: r} = await this.github.issues.listLabelsForRepo({owner: e, repo: t});
                    return r.map((e) => e.name);
                }
                async createLabel(e, t, r, i, n) {
                    await this.github.issues.createLabel({owner: e, repo: t, name: r, color: i, description: n});
                }
                async addLabel(e, t, r, i) {
                    await this.github.issues.addLabels({owner: e, repo: t, issue_number: r, labels: [i]});
                }
                async removeLabel(e, t, r, i) {
                    await this.github.issues.removeLabel({owner: e, repo: t, issue_number: r, name: i});
                }
            }
            function mapAsync(e, t) {
                return Promise.all(e.map(t));
            }
            async function filterAsync(e, t) {
                const r = await mapAsync(e, t);
                return e.filter((e, t) => r[t]);
            }
            class githubOpenPullRequestsProvider_GithubOpenPullRequestsProvider {
                constructor(e, t) {
                    this.listPullRequestsService = e;
                    this.mergeableStateProvider = t;
                }
                async openPullRequests(e, t) {
                    const r = await this.listPullRequestsService.listOpenPullRequests(e, t);
                    return await mapAsync(r, async (r) => {
                        return this.pullRequestInfoFor(e, t, r);
                    });
                }
                async pullRequestInfoFor(e, t, r) {
                    const i = await this.mergeableStateProvider.pullRequestInfoFor(e, t, r.number);
                    return {
                        ownerName: e,
                        repoName: t,
                        number: i.number,
                        draft: i.draft,
                        rebaseable: i.rebaseable,
                        mergeableState: i.mergeableState,
                        labels: i.labels,
                    };
                }
            }
            class labeler_Labeler {
                constructor(e, t) {
                    this.openPullRequestsProvider = e;
                    this.labelPullRequestService = t;
                }
                async createOptInLabel(e, t) {
                    const r = await this.labelPullRequestService.listLabels(e, t);
                    if (r.includes(o)) {
                        return;
                    }
                    await this.labelPullRequestService.createLabel(
                        e,
                        t,
                        o,
                        'c0f276',
                        'Apply this label to enable automatic rebasing',
                    );
                }
                async createOnceLabel(e, t) {
                    const r = await this.labelPullRequestService.listLabels(e, t);
                    if (r.includes(a)) {
                        return;
                    }
                    await this.labelPullRequestService.createLabel(
                        e,
                        t,
                        a,
                        'c0f276',
                        'Apply this label to rebasing one time',
                    );
                }
                async labelNonRebaseablePullRequests(e, t) {
                    const r = await this.openPullRequestsProvider.openPullRequests(e, t);
                    await this.addLabels(r, e, t);
                    await this.removeLabels(r, e, t);
                }
                async addLabels(e, t, r) {
                    const n = e.filter((e) => !e.rebaseable && !e.labels.includes(u) && e.labels.includes(o));
                    if (n.length > 0) {
                        await this.createNonRebaseableLabel(t, r);
                    }
                    await Promise.all(
                        n.map((e) => {
                            Object(i.info)(`Adding '${u}' label to PR #${e.number}.`);
                            return this.labelPullRequestService.addLabel(t, r, e.number, u);
                        }),
                    );
                }
                async createNonRebaseableLabel(e, t) {
                    const r = await this.labelPullRequestService.listLabels(e, t);
                    if (r.includes(u)) {
                        return;
                    }
                    await this.labelPullRequestService.createLabel(
                        e,
                        t,
                        u,
                        'df1d42',
                        "AutoRebase applies this label when a pull request can't be rebased automatically",
                    );
                }
                async removeLabels(e, t, r) {
                    const n = e.filter((e) => e.rebaseable && e.labels.includes(u));
                    await Promise.all(
                        n.map((e) => {
                            Object(i.info)(`Removing '${u}' label from PR #${e.number}.`);
                            return this.labelPullRequestService.removeLabel(t, r, e.number, u);
                        }),
                    );
                }
            }
            async function run() {
                try {
                    const e = new n.GitHub(Object(i.getInput)('github_token'));
                    const t = new githubOpenPullRequestsProvider_GithubOpenPullRequestsProvider(
                        new GithubListPullRequestsService(e),
                        new githubPullRequestInfoProvider_GithubPullRequestInfoProvider(
                            new GithubGetPullRequestService(e),
                        ),
                    );
                    const r = new testableEligiblePullRequestsRetriever_TestableEligiblePullRequestsRetriever(t);
                    const s = new rebaser_Rebaser(e);
                    const o = new labeler_Labeler(t, new GithubLabelPullRequestService(e));
                    const a = n.context.payload;
                    const u = a.repository.owner.login;
                    const p = a.repository.name;
                    const c = await r.findEligiblePullRequests(u, p);
                    await s.rebasePullRequests(c);
                    await o.createOptInLabel(u, p);
                    await o.createOnceLabel(u, p);
                    await o.labelNonRebaseablePullRequests(u, p);
                } catch (e) {
                    Object(i.setFailed)(e);
                }
            }
            void run();
        },
        452: function (e, t, r) {
            'use strict';
            var i = r(816);
            e.exports = function (e) {
                var t = e.match(i);
                if (!t) {
                    return null;
                }
                var r = t[0].replace(/#! ?/, '').split(' ');
                var n = r[0].split('/').pop();
                var s = r[1];
                return n === 'env' ? s : n + (s ? ' ' + s : '');
            };
        },
        453: function (e, t, r) {
            var i = r(49);
            var n = r(9);
            var s = r(747);
            var o = function () {};
            var a = /^v?\.0/.test(process.version);
            var u = function (e) {
                return typeof e === 'function';
            };
            var p = function (e) {
                if (!a) return false;
                if (!s) return false;
                return (e instanceof (s.ReadStream || o) || e instanceof (s.WriteStream || o)) && u(e.close);
            };
            var c = function (e) {
                return e.setHeader && u(e.abort);
            };
            var d = function (e, t, r, s) {
                s = i(s);
                var a = false;
                e.on('close', function () {
                    a = true;
                });
                n(e, {readable: t, writable: r}, function (e) {
                    if (e) return s(e);
                    a = true;
                    s();
                });
                var d = false;
                return function (t) {
                    if (a) return;
                    if (d) return;
                    d = true;
                    if (p(e)) return e.close(o);
                    if (c(e)) return e.abort();
                    if (u(e.destroy)) return e.destroy();
                    s(t || new Error('stream was destroyed'));
                };
            };
            var l = function (e) {
                e();
            };
            var g = function (e, t) {
                return e.pipe(t);
            };
            var m = function () {
                var e = Array.prototype.slice.call(arguments);
                var t = (u(e[e.length - 1] || o) && e.pop()) || o;
                if (Array.isArray(e[0])) e = e[0];
                if (e.length < 2) throw new Error('pump requires two streams per minimum');
                var r;
                var i = e.map(function (n, s) {
                    var o = s < e.length - 1;
                    var a = s > 0;
                    return d(n, o, a, function (e) {
                        if (!r) r = e;
                        if (e) i.forEach(l);
                        if (o) return;
                        i.forEach(l);
                        t(r);
                    });
                });
                return e.reduce(g);
            };
            e.exports = m;
        },
        454: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = _interopDefault(r(413));
            var n = _interopDefault(r(605));
            var s = _interopDefault(r(835));
            var o = _interopDefault(r(211));
            var a = _interopDefault(r(761));
            const u = i.Readable;
            const p = Symbol('buffer');
            const c = Symbol('type');
            class Blob {
                constructor() {
                    this[c] = '';
                    const e = arguments[0];
                    const t = arguments[1];
                    const r = [];
                    let i = 0;
                    if (e) {
                        const t = e;
                        const n = Number(t.length);
                        for (let e = 0; e < n; e++) {
                            const n = t[e];
                            let s;
                            if (n instanceof Buffer) {
                                s = n;
                            } else if (ArrayBuffer.isView(n)) {
                                s = Buffer.from(n.buffer, n.byteOffset, n.byteLength);
                            } else if (n instanceof ArrayBuffer) {
                                s = Buffer.from(n);
                            } else if (n instanceof Blob) {
                                s = n[p];
                            } else {
                                s = Buffer.from(typeof n === 'string' ? n : String(n));
                            }
                            i += s.length;
                            r.push(s);
                        }
                    }
                    this[p] = Buffer.concat(r);
                    let n = t && t.type !== undefined && String(t.type).toLowerCase();
                    if (n && !/[^\u0020-\u007E]/.test(n)) {
                        this[c] = n;
                    }
                }
                get size() {
                    return this[p].length;
                }
                get type() {
                    return this[c];
                }
                text() {
                    return Promise.resolve(this[p].toString());
                }
                arrayBuffer() {
                    const e = this[p];
                    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                    return Promise.resolve(t);
                }
                stream() {
                    const e = new u();
                    e._read = function () {};
                    e.push(this[p]);
                    e.push(null);
                    return e;
                }
                toString() {
                    return '[object Blob]';
                }
                slice() {
                    const e = this.size;
                    const t = arguments[0];
                    const r = arguments[1];
                    let i, n;
                    if (t === undefined) {
                        i = 0;
                    } else if (t < 0) {
                        i = Math.max(e + t, 0);
                    } else {
                        i = Math.min(t, e);
                    }
                    if (r === undefined) {
                        n = e;
                    } else if (r < 0) {
                        n = Math.max(e + r, 0);
                    } else {
                        n = Math.min(r, e);
                    }
                    const s = Math.max(n - i, 0);
                    const o = this[p];
                    const a = o.slice(i, i + s);
                    const u = new Blob([], {type: arguments[2]});
                    u[p] = a;
                    return u;
                }
            }
            Object.defineProperties(Blob.prototype, {
                size: {enumerable: true},
                type: {enumerable: true},
                slice: {enumerable: true},
            });
            Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
                value: 'Blob',
                writable: false,
                enumerable: false,
                configurable: true,
            });
            function FetchError(e, t, r) {
                Error.call(this, e);
                this.message = e;
                this.type = t;
                if (r) {
                    this.code = this.errno = r.code;
                }
                Error.captureStackTrace(this, this.constructor);
            }
            FetchError.prototype = Object.create(Error.prototype);
            FetchError.prototype.constructor = FetchError;
            FetchError.prototype.name = 'FetchError';
            let d;
            try {
                d = r(18).convert;
            } catch (e) {}
            const l = Symbol('Body internals');
            const g = i.PassThrough;
            function Body(e) {
                var t = this;
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    n = r.size;
                let s = n === undefined ? 0 : n;
                var o = r.timeout;
                let a = o === undefined ? 0 : o;
                if (e == null) {
                    e = null;
                } else if (isURLSearchParams(e)) {
                    e = Buffer.from(e.toString());
                } else if (isBlob(e));
                else if (Buffer.isBuffer(e));
                else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
                    e = Buffer.from(e);
                } else if (ArrayBuffer.isView(e)) {
                    e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
                } else if (e instanceof i);
                else {
                    e = Buffer.from(String(e));
                }
                this[l] = {body: e, disturbed: false, error: null};
                this.size = s;
                this.timeout = a;
                if (e instanceof i) {
                    e.on('error', function (e) {
                        const r =
                            e.name === 'AbortError'
                                ? e
                                : new FetchError(
                                      `Invalid response body while trying to fetch ${t.url}: ${e.message}`,
                                      'system',
                                      e,
                                  );
                        t[l].error = r;
                    });
                }
            }
            Body.prototype = {
                get body() {
                    return this[l].body;
                },
                get bodyUsed() {
                    return this[l].disturbed;
                },
                arrayBuffer() {
                    return consumeBody.call(this).then(function (e) {
                        return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                    });
                },
                blob() {
                    let e = (this.headers && this.headers.get('content-type')) || '';
                    return consumeBody.call(this).then(function (t) {
                        return Object.assign(new Blob([], {type: e.toLowerCase()}), {[p]: t});
                    });
                },
                json() {
                    var e = this;
                    return consumeBody.call(this).then(function (t) {
                        try {
                            return JSON.parse(t.toString());
                        } catch (t) {
                            return Body.Promise.reject(
                                new FetchError(
                                    `invalid json response body at ${e.url} reason: ${t.message}`,
                                    'invalid-json',
                                ),
                            );
                        }
                    });
                },
                text() {
                    return consumeBody.call(this).then(function (e) {
                        return e.toString();
                    });
                },
                buffer() {
                    return consumeBody.call(this);
                },
                textConverted() {
                    var e = this;
                    return consumeBody.call(this).then(function (t) {
                        return convertBody(t, e.headers);
                    });
                },
            };
            Object.defineProperties(Body.prototype, {
                body: {enumerable: true},
                bodyUsed: {enumerable: true},
                arrayBuffer: {enumerable: true},
                blob: {enumerable: true},
                json: {enumerable: true},
                text: {enumerable: true},
            });
            Body.mixIn = function (e) {
                for (const t of Object.getOwnPropertyNames(Body.prototype)) {
                    if (!(t in e)) {
                        const r = Object.getOwnPropertyDescriptor(Body.prototype, t);
                        Object.defineProperty(e, t, r);
                    }
                }
            };
            function consumeBody() {
                var e = this;
                if (this[l].disturbed) {
                    return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
                }
                this[l].disturbed = true;
                if (this[l].error) {
                    return Body.Promise.reject(this[l].error);
                }
                let t = this.body;
                if (t === null) {
                    return Body.Promise.resolve(Buffer.alloc(0));
                }
                if (isBlob(t)) {
                    t = t.stream();
                }
                if (Buffer.isBuffer(t)) {
                    return Body.Promise.resolve(t);
                }
                if (!(t instanceof i)) {
                    return Body.Promise.resolve(Buffer.alloc(0));
                }
                let r = [];
                let n = 0;
                let s = false;
                return new Body.Promise(function (i, o) {
                    let a;
                    if (e.timeout) {
                        a = setTimeout(function () {
                            s = true;
                            o(
                                new FetchError(
                                    `Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,
                                    'body-timeout',
                                ),
                            );
                        }, e.timeout);
                    }
                    t.on('error', function (t) {
                        if (t.name === 'AbortError') {
                            s = true;
                            o(t);
                        } else {
                            o(
                                new FetchError(
                                    `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                                    'system',
                                    t,
                                ),
                            );
                        }
                    });
                    t.on('data', function (t) {
                        if (s || t === null) {
                            return;
                        }
                        if (e.size && n + t.length > e.size) {
                            s = true;
                            o(new FetchError(`content size at ${e.url} over limit: ${e.size}`, 'max-size'));
                            return;
                        }
                        n += t.length;
                        r.push(t);
                    });
                    t.on('end', function () {
                        if (s) {
                            return;
                        }
                        clearTimeout(a);
                        try {
                            i(Buffer.concat(r, n));
                        } catch (t) {
                            o(
                                new FetchError(
                                    `Could not create Buffer from response body for ${e.url}: ${t.message}`,
                                    'system',
                                    t,
                                ),
                            );
                        }
                    });
                });
            }
            function convertBody(e, t) {
                if (typeof d !== 'function') {
                    throw new Error('The package `encoding` must be installed to use the textConverted() function');
                }
                const r = t.get('content-type');
                let i = 'utf-8';
                let n, s;
                if (r) {
                    n = /charset=([^;]*)/i.exec(r);
                }
                s = e.slice(0, 1024).toString();
                if (!n && s) {
                    n = /<meta.+?charset=(['"])(.+?)\1/i.exec(s);
                }
                if (!n && s) {
                    n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(s);
                    if (n) {
                        n = /charset=(.*)/i.exec(n.pop());
                    }
                }
                if (!n && s) {
                    n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(s);
                }
                if (n) {
                    i = n.pop();
                    if (i === 'gb2312' || i === 'gbk') {
                        i = 'gb18030';
                    }
                }
                return d(e, 'UTF-8', i).toString();
            }
            function isURLSearchParams(e) {
                if (
                    typeof e !== 'object' ||
                    typeof e.append !== 'function' ||
                    typeof e.delete !== 'function' ||
                    typeof e.get !== 'function' ||
                    typeof e.getAll !== 'function' ||
                    typeof e.has !== 'function' ||
                    typeof e.set !== 'function'
                ) {
                    return false;
                }
                return (
                    e.constructor.name === 'URLSearchParams' ||
                    Object.prototype.toString.call(e) === '[object URLSearchParams]' ||
                    typeof e.sort === 'function'
                );
            }
            function isBlob(e) {
                return (
                    typeof e === 'object' &&
                    typeof e.arrayBuffer === 'function' &&
                    typeof e.type === 'string' &&
                    typeof e.stream === 'function' &&
                    typeof e.constructor === 'function' &&
                    typeof e.constructor.name === 'string' &&
                    /^(Blob|File)$/.test(e.constructor.name) &&
                    /^(Blob|File)$/.test(e[Symbol.toStringTag])
                );
            }
            function clone(e) {
                let t, r;
                let n = e.body;
                if (e.bodyUsed) {
                    throw new Error('cannot clone body after it is used');
                }
                if (n instanceof i && typeof n.getBoundary !== 'function') {
                    t = new g();
                    r = new g();
                    n.pipe(t);
                    n.pipe(r);
                    e[l].body = t;
                    n = r;
                }
                return n;
            }
            function extractContentType(e) {
                if (e === null) {
                    return null;
                } else if (typeof e === 'string') {
                    return 'text/plain;charset=UTF-8';
                } else if (isURLSearchParams(e)) {
                    return 'application/x-www-form-urlencoded;charset=UTF-8';
                } else if (isBlob(e)) {
                    return e.type || null;
                } else if (Buffer.isBuffer(e)) {
                    return null;
                } else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
                    return null;
                } else if (ArrayBuffer.isView(e)) {
                    return null;
                } else if (typeof e.getBoundary === 'function') {
                    return `multipart/form-data;boundary=${e.getBoundary()}`;
                } else if (e instanceof i) {
                    return null;
                } else {
                    return 'text/plain;charset=UTF-8';
                }
            }
            function getTotalBytes(e) {
                const t = e.body;
                if (t === null) {
                    return 0;
                } else if (isBlob(t)) {
                    return t.size;
                } else if (Buffer.isBuffer(t)) {
                    return t.length;
                } else if (t && typeof t.getLengthSync === 'function') {
                    if (
                        (t._lengthRetrievers && t._lengthRetrievers.length == 0) ||
                        (t.hasKnownLength && t.hasKnownLength())
                    ) {
                        return t.getLengthSync();
                    }
                    return null;
                } else {
                    return null;
                }
            }
            function writeToStream(e, t) {
                const r = t.body;
                if (r === null) {
                    e.end();
                } else if (isBlob(r)) {
                    r.stream().pipe(e);
                } else if (Buffer.isBuffer(r)) {
                    e.write(r);
                    e.end();
                } else {
                    r.pipe(e);
                }
            }
            Body.Promise = global.Promise;
            const m = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
            const h = /[^\t\x20-\x7e\x80-\xff]/;
            function validateName(e) {
                e = `${e}`;
                if (m.test(e) || e === '') {
                    throw new TypeError(`${e} is not a legal HTTP header name`);
                }
            }
            function validateValue(e) {
                e = `${e}`;
                if (h.test(e)) {
                    throw new TypeError(`${e} is not a legal HTTP header value`);
                }
            }
            function find(e, t) {
                t = t.toLowerCase();
                for (const r in e) {
                    if (r.toLowerCase() === t) {
                        return r;
                    }
                }
                return undefined;
            }
            const y = Symbol('map');
            class Headers {
                constructor() {
                    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                    this[y] = Object.create(null);
                    if (e instanceof Headers) {
                        const t = e.raw();
                        const r = Object.keys(t);
                        for (const e of r) {
                            for (const r of t[e]) {
                                this.append(e, r);
                            }
                        }
                        return;
                    }
                    if (e == null);
                    else if (typeof e === 'object') {
                        const t = e[Symbol.iterator];
                        if (t != null) {
                            if (typeof t !== 'function') {
                                throw new TypeError('Header pairs must be iterable');
                            }
                            const r = [];
                            for (const t of e) {
                                if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') {
                                    throw new TypeError('Each header pair must be iterable');
                                }
                                r.push(Array.from(t));
                            }
                            for (const e of r) {
                                if (e.length !== 2) {
                                    throw new TypeError('Each header pair must be a name/value tuple');
                                }
                                this.append(e[0], e[1]);
                            }
                        } else {
                            for (const t of Object.keys(e)) {
                                const r = e[t];
                                this.append(t, r);
                            }
                        }
                    } else {
                        throw new TypeError('Provided initializer must be an object');
                    }
                }
                get(e) {
                    e = `${e}`;
                    validateName(e);
                    const t = find(this[y], e);
                    if (t === undefined) {
                        return null;
                    }
                    return this[y][t].join(', ');
                }
                forEach(e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                    let r = getHeaders(this);
                    let i = 0;
                    while (i < r.length) {
                        var n = r[i];
                        const s = n[0],
                            o = n[1];
                        e.call(t, o, s, this);
                        r = getHeaders(this);
                        i++;
                    }
                }
                set(e, t) {
                    e = `${e}`;
                    t = `${t}`;
                    validateName(e);
                    validateValue(t);
                    const r = find(this[y], e);
                    this[y][r !== undefined ? r : e] = [t];
                }
                append(e, t) {
                    e = `${e}`;
                    t = `${t}`;
                    validateName(e);
                    validateValue(t);
                    const r = find(this[y], e);
                    if (r !== undefined) {
                        this[y][r].push(t);
                    } else {
                        this[y][e] = [t];
                    }
                }
                has(e) {
                    e = `${e}`;
                    validateName(e);
                    return find(this[y], e) !== undefined;
                }
                delete(e) {
                    e = `${e}`;
                    validateName(e);
                    const t = find(this[y], e);
                    if (t !== undefined) {
                        delete this[y][t];
                    }
                }
                raw() {
                    return this[y];
                }
                keys() {
                    return createHeadersIterator(this, 'key');
                }
                values() {
                    return createHeadersIterator(this, 'value');
                }
                [Symbol.iterator]() {
                    return createHeadersIterator(this, 'key+value');
                }
            }
            Headers.prototype.entries = Headers.prototype[Symbol.iterator];
            Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
                value: 'Headers',
                writable: false,
                enumerable: false,
                configurable: true,
            });
            Object.defineProperties(Headers.prototype, {
                get: {enumerable: true},
                forEach: {enumerable: true},
                set: {enumerable: true},
                append: {enumerable: true},
                has: {enumerable: true},
                delete: {enumerable: true},
                keys: {enumerable: true},
                values: {enumerable: true},
                entries: {enumerable: true},
            });
            function getHeaders(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
                const r = Object.keys(e[y]).sort();
                return r.map(
                    t === 'key'
                        ? function (e) {
                              return e.toLowerCase();
                          }
                        : t === 'value'
                        ? function (t) {
                              return e[y][t].join(', ');
                          }
                        : function (t) {
                              return [t.toLowerCase(), e[y][t].join(', ')];
                          },
                );
            }
            const f = Symbol('internal');
            function createHeadersIterator(e, t) {
                const r = Object.create(b);
                r[f] = {target: e, kind: t, index: 0};
                return r;
            }
            const b = Object.setPrototypeOf(
                {
                    next() {
                        if (!this || Object.getPrototypeOf(this) !== b) {
                            throw new TypeError('Value of `this` is not a HeadersIterator');
                        }
                        var e = this[f];
                        const t = e.target,
                            r = e.kind,
                            i = e.index;
                        const n = getHeaders(t, r);
                        const s = n.length;
                        if (i >= s) {
                            return {value: undefined, done: true};
                        }
                        this[f].index = i + 1;
                        return {value: n[i], done: false};
                    },
                },
                Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
            );
            Object.defineProperty(b, Symbol.toStringTag, {
                value: 'HeadersIterator',
                writable: false,
                enumerable: false,
                configurable: true,
            });
            function exportNodeCompatibleHeaders(e) {
                const t = Object.assign({__proto__: null}, e[y]);
                const r = find(e[y], 'Host');
                if (r !== undefined) {
                    t[r] = t[r][0];
                }
                return t;
            }
            function createHeadersLenient(e) {
                const t = new Headers();
                for (const r of Object.keys(e)) {
                    if (m.test(r)) {
                        continue;
                    }
                    if (Array.isArray(e[r])) {
                        for (const i of e[r]) {
                            if (h.test(i)) {
                                continue;
                            }
                            if (t[y][r] === undefined) {
                                t[y][r] = [i];
                            } else {
                                t[y][r].push(i);
                            }
                        }
                    } else if (!h.test(e[r])) {
                        t[y][r] = [e[r]];
                    }
                }
                return t;
            }
            const _ = Symbol('Response internals');
            const q = n.STATUS_CODES;
            class Response {
                constructor() {
                    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    Body.call(this, e, t);
                    const r = t.status || 200;
                    const i = new Headers(t.headers);
                    if (e != null && !i.has('Content-Type')) {
                        const t = extractContentType(e);
                        if (t) {
                            i.append('Content-Type', t);
                        }
                    }
                    this[_] = {url: t.url, status: r, statusText: t.statusText || q[r], headers: i, counter: t.counter};
                }
                get url() {
                    return this[_].url || '';
                }
                get status() {
                    return this[_].status;
                }
                get ok() {
                    return this[_].status >= 200 && this[_].status < 300;
                }
                get redirected() {
                    return this[_].counter > 0;
                }
                get statusText() {
                    return this[_].statusText;
                }
                get headers() {
                    return this[_].headers;
                }
                clone() {
                    return new Response(clone(this), {
                        url: this.url,
                        status: this.status,
                        statusText: this.statusText,
                        headers: this.headers,
                        ok: this.ok,
                        redirected: this.redirected,
                    });
                }
            }
            Body.mixIn(Response.prototype);
            Object.defineProperties(Response.prototype, {
                url: {enumerable: true},
                status: {enumerable: true},
                ok: {enumerable: true},
                redirected: {enumerable: true},
                statusText: {enumerable: true},
                headers: {enumerable: true},
                clone: {enumerable: true},
            });
            Object.defineProperty(Response.prototype, Symbol.toStringTag, {
                value: 'Response',
                writable: false,
                enumerable: false,
                configurable: true,
            });
            const w = Symbol('Request internals');
            const v = s.parse;
            const E = s.format;
            const T = 'destroy' in i.Readable.prototype;
            function isRequest(e) {
                return typeof e === 'object' && typeof e[w] === 'object';
            }
            function isAbortSignal(e) {
                const t = e && typeof e === 'object' && Object.getPrototypeOf(e);
                return !!(t && t.constructor.name === 'AbortSignal');
            }
            class Request {
                constructor(e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    let r;
                    if (!isRequest(e)) {
                        if (e && e.href) {
                            r = v(e.href);
                        } else {
                            r = v(`${e}`);
                        }
                        e = {};
                    } else {
                        r = v(e.url);
                    }
                    let i = t.method || e.method || 'GET';
                    i = i.toUpperCase();
                    if ((t.body != null || (isRequest(e) && e.body !== null)) && (i === 'GET' || i === 'HEAD')) {
                        throw new TypeError('Request with GET/HEAD method cannot have body');
                    }
                    let n = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null;
                    Body.call(this, n, {timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0});
                    const s = new Headers(t.headers || e.headers || {});
                    if (n != null && !s.has('Content-Type')) {
                        const e = extractContentType(n);
                        if (e) {
                            s.append('Content-Type', e);
                        }
                    }
                    let o = isRequest(e) ? e.signal : null;
                    if ('signal' in t) o = t.signal;
                    if (o != null && !isAbortSignal(o)) {
                        throw new TypeError('Expected signal to be an instanceof AbortSignal');
                    }
                    this[w] = {
                        method: i,
                        redirect: t.redirect || e.redirect || 'follow',
                        headers: s,
                        parsedURL: r,
                        signal: o,
                    };
                    this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20;
                    this.compress =
                        t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true;
                    this.counter = t.counter || e.counter || 0;
                    this.agent = t.agent || e.agent;
                }
                get method() {
                    return this[w].method;
                }
                get url() {
                    return E(this[w].parsedURL);
                }
                get headers() {
                    return this[w].headers;
                }
                get redirect() {
                    return this[w].redirect;
                }
                get signal() {
                    return this[w].signal;
                }
                clone() {
                    return new Request(this);
                }
            }
            Body.mixIn(Request.prototype);
            Object.defineProperty(Request.prototype, Symbol.toStringTag, {
                value: 'Request',
                writable: false,
                enumerable: false,
                configurable: true,
            });
            Object.defineProperties(Request.prototype, {
                method: {enumerable: true},
                url: {enumerable: true},
                headers: {enumerable: true},
                redirect: {enumerable: true},
                clone: {enumerable: true},
                signal: {enumerable: true},
            });
            function getNodeRequestOptions(e) {
                const t = e[w].parsedURL;
                const r = new Headers(e[w].headers);
                if (!r.has('Accept')) {
                    r.set('Accept', '*/*');
                }
                if (!t.protocol || !t.hostname) {
                    throw new TypeError('Only absolute URLs are supported');
                }
                if (!/^https?:$/.test(t.protocol)) {
                    throw new TypeError('Only HTTP(S) protocols are supported');
                }
                if (e.signal && e.body instanceof i.Readable && !T) {
                    throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
                }
                let n = null;
                if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
                    n = '0';
                }
                if (e.body != null) {
                    const t = getTotalBytes(e);
                    if (typeof t === 'number') {
                        n = String(t);
                    }
                }
                if (n) {
                    r.set('Content-Length', n);
                }
                if (!r.has('User-Agent')) {
                    r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
                }
                if (e.compress && !r.has('Accept-Encoding')) {
                    r.set('Accept-Encoding', 'gzip,deflate');
                }
                let s = e.agent;
                if (typeof s === 'function') {
                    s = s(t);
                }
                if (!r.has('Connection') && !s) {
                    r.set('Connection', 'close');
                }
                return Object.assign({}, t, {method: e.method, headers: exportNodeCompatibleHeaders(r), agent: s});
            }
            function AbortError(e) {
                Error.call(this, e);
                this.type = 'aborted';
                this.message = e;
                Error.captureStackTrace(this, this.constructor);
            }
            AbortError.prototype = Object.create(Error.prototype);
            AbortError.prototype.constructor = AbortError;
            AbortError.prototype.name = 'AbortError';
            const k = i.PassThrough;
            const C = s.resolve;
            function fetch(e, t) {
                if (!fetch.Promise) {
                    throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
                }
                Body.Promise = fetch.Promise;
                return new fetch.Promise(function (r, s) {
                    const u = new Request(e, t);
                    const p = getNodeRequestOptions(u);
                    const c = (p.protocol === 'https:' ? o : n).request;
                    const d = u.signal;
                    let l = null;
                    const g = function abort() {
                        let e = new AbortError('The user aborted a request.');
                        s(e);
                        if (u.body && u.body instanceof i.Readable) {
                            u.body.destroy(e);
                        }
                        if (!l || !l.body) return;
                        l.body.emit('error', e);
                    };
                    if (d && d.aborted) {
                        g();
                        return;
                    }
                    const m = function abortAndFinalize() {
                        g();
                        finalize();
                    };
                    const h = c(p);
                    let y;
                    if (d) {
                        d.addEventListener('abort', m);
                    }
                    function finalize() {
                        h.abort();
                        if (d) d.removeEventListener('abort', m);
                        clearTimeout(y);
                    }
                    if (u.timeout) {
                        h.once('socket', function (e) {
                            y = setTimeout(function () {
                                s(new FetchError(`network timeout at: ${u.url}`, 'request-timeout'));
                                finalize();
                            }, u.timeout);
                        });
                    }
                    h.on('error', function (e) {
                        s(new FetchError(`request to ${u.url} failed, reason: ${e.message}`, 'system', e));
                        finalize();
                    });
                    h.on('response', function (e) {
                        clearTimeout(y);
                        const t = createHeadersLenient(e.headers);
                        if (fetch.isRedirect(e.statusCode)) {
                            const i = t.get('Location');
                            const n = i === null ? null : C(u.url, i);
                            switch (u.redirect) {
                                case 'error':
                                    s(new FetchError(`redirect mode is set to error: ${u.url}`, 'no-redirect'));
                                    finalize();
                                    return;
                                case 'manual':
                                    if (n !== null) {
                                        try {
                                            t.set('Location', n);
                                        } catch (e) {
                                            s(e);
                                        }
                                    }
                                    break;
                                case 'follow':
                                    if (n === null) {
                                        break;
                                    }
                                    if (u.counter >= u.follow) {
                                        s(new FetchError(`maximum redirect reached at: ${u.url}`, 'max-redirect'));
                                        finalize();
                                        return;
                                    }
                                    const i = {
                                        headers: new Headers(u.headers),
                                        follow: u.follow,
                                        counter: u.counter + 1,
                                        agent: u.agent,
                                        compress: u.compress,
                                        method: u.method,
                                        body: u.body,
                                        signal: u.signal,
                                        timeout: u.timeout,
                                    };
                                    if (e.statusCode !== 303 && u.body && getTotalBytes(u) === null) {
                                        s(
                                            new FetchError(
                                                'Cannot follow redirect with body being a readable stream',
                                                'unsupported-redirect',
                                            ),
                                        );
                                        finalize();
                                        return;
                                    }
                                    if (
                                        e.statusCode === 303 ||
                                        ((e.statusCode === 301 || e.statusCode === 302) && u.method === 'POST')
                                    ) {
                                        i.method = 'GET';
                                        i.body = undefined;
                                        i.headers.delete('content-length');
                                    }
                                    r(fetch(new Request(n, i)));
                                    finalize();
                                    return;
                            }
                        }
                        e.once('end', function () {
                            if (d) d.removeEventListener('abort', m);
                        });
                        let i = e.pipe(new k());
                        const n = {
                            url: u.url,
                            status: e.statusCode,
                            statusText: e.statusMessage,
                            headers: t,
                            size: u.size,
                            timeout: u.timeout,
                            counter: u.counter,
                        };
                        const o = t.get('Content-Encoding');
                        if (
                            !u.compress ||
                            u.method === 'HEAD' ||
                            o === null ||
                            e.statusCode === 204 ||
                            e.statusCode === 304
                        ) {
                            l = new Response(i, n);
                            r(l);
                            return;
                        }
                        const p = {flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH};
                        if (o == 'gzip' || o == 'x-gzip') {
                            i = i.pipe(a.createGunzip(p));
                            l = new Response(i, n);
                            r(l);
                            return;
                        }
                        if (o == 'deflate' || o == 'x-deflate') {
                            const t = e.pipe(new k());
                            t.once('data', function (e) {
                                if ((e[0] & 15) === 8) {
                                    i = i.pipe(a.createInflate());
                                } else {
                                    i = i.pipe(a.createInflateRaw());
                                }
                                l = new Response(i, n);
                                r(l);
                            });
                            return;
                        }
                        if (o == 'br' && typeof a.createBrotliDecompress === 'function') {
                            i = i.pipe(a.createBrotliDecompress());
                            l = new Response(i, n);
                            r(l);
                            return;
                        }
                        l = new Response(i, n);
                        r(l);
                    });
                    writeToStream(h, u);
                });
            }
            fetch.isRedirect = function (e) {
                return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
            };
            fetch.Promise = global.Promise;
            e.exports = t = fetch;
            Object.defineProperty(t, '__esModule', {value: true});
            t.default = t;
            t.Headers = Headers;
            t.Request = Request;
            t.Response = Response;
            t.FetchError = FetchError;
        },
        462: function (e) {
            'use strict';
            const t = /([()\][%!^"`<>&|;, *?])/g;
            function escapeCommand(e) {
                e = e.replace(t, '^$1');
                return e;
            }
            function escapeArgument(e, r) {
                e = `${e}`;
                e = e.replace(/(\\*)"/g, '$1$1\\"');
                e = e.replace(/(\\*)$/, '$1$1');
                e = `"${e}"`;
                e = e.replace(t, '^$1');
                if (r) {
                    e = e.replace(t, '^$1');
                }
                return e;
            }
            e.exports.command = escapeCommand;
            e.exports.argument = escapeArgument;
        },
        463: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = r(692);
            var n = _interopDefault(r(49));
            const s = n((e) => console.warn(e));
            class RequestError extends Error {
                constructor(e, t, r) {
                    super(e);
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                    this.name = 'HttpError';
                    this.status = t;
                    Object.defineProperty(this, 'code', {
                        get() {
                            s(
                                new i.Deprecation(
                                    '[@octokit/request-error] `error.code` is deprecated, use `error.status`.',
                                ),
                            );
                            return t;
                        },
                    });
                    this.headers = r.headers || {};
                    const n = Object.assign({}, r.request);
                    if (r.request.headers.authorization) {
                        n.headers = Object.assign({}, r.request.headers, {
                            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]'),
                        });
                    }
                    n.url = n.url
                        .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
                        .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]');
                    this.request = n;
                }
            }
            t.RequestError = RequestError;
        },
        469: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
                    t['default'] = e;
                    return t;
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const n = r(898);
            const s = r(0);
            const o = i(r(262));
            const a = i(r(539));
            s.Octokit.prototype = new s.Octokit();
            t.context = new o.Context();
            class GitHub extends s.Octokit {
                constructor(e, t) {
                    super(GitHub.getOctokitOptions(GitHub.disambiguate(e, t)));
                    this.graphql = GitHub.getGraphQL(GitHub.disambiguate(e, t));
                }
                static disambiguate(e, t) {
                    return [typeof e === 'string' ? e : '', typeof e === 'object' ? e : t || {}];
                }
                static getOctokitOptions(e) {
                    const t = e[0];
                    const r = Object.assign({}, e[1]);
                    r.baseUrl = r.baseUrl || this.getApiBaseUrl();
                    const i = GitHub.getAuthString(t, r);
                    if (i) {
                        r.auth = i;
                    }
                    const n = GitHub.getProxyAgent(r.baseUrl, r);
                    if (n) {
                        r.request = r.request ? Object.assign({}, r.request) : {};
                        r.request.agent = n;
                    }
                    return r;
                }
                static getGraphQL(e) {
                    const t = {};
                    t.baseUrl = this.getGraphQLBaseUrl();
                    const r = e[0];
                    const i = e[1];
                    const s = this.getAuthString(r, i);
                    if (s) {
                        t.headers = {authorization: s};
                    }
                    const o = GitHub.getProxyAgent(t.baseUrl, i);
                    if (o) {
                        t.request = {agent: o};
                    }
                    return n.graphql.defaults(t);
                }
                static getAuthString(e, t) {
                    if (!e && !t.auth) {
                        throw new Error('Parameter token or opts.auth is required');
                    } else if (e && t.auth) {
                        throw new Error('Parameters token and opts.auth may not both be specified');
                    }
                    return typeof t.auth === 'string' ? t.auth : `token ${e}`;
                }
                static getProxyAgent(e, t) {
                    var r;
                    if (!((r = t.request) === null || r === void 0 ? void 0 : r.agent)) {
                        if (a.getProxyUrl(e)) {
                            const t = new a.HttpClient();
                            return t.getAgent(e);
                        }
                    }
                    return undefined;
                }
                static getApiBaseUrl() {
                    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
                }
                static getGraphQLBaseUrl() {
                    let e = process.env['GITHUB_GRAPHQL_URL'] || 'https://api.github.com/graphql';
                    if (e.endsWith('/')) {
                        e = e.substr(0, e.length - 1);
                    }
                    if (e.toUpperCase().endsWith('/GRAPHQL')) {
                        e = e.substr(0, e.length - '/graphql'.length);
                    }
                    return e;
                }
            }
            t.GitHub = GitHub;
        },
        470: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    function adopt(e) {
                        return e instanceof r
                            ? e
                            : new r(function (t) {
                                  t(e);
                              });
                    }
                    return new (r || (r = Promise))(function (r, n) {
                        function fulfilled(e) {
                            try {
                                step(i.next(e));
                            } catch (e) {
                                n(e);
                            }
                        }
                        function rejected(e) {
                            try {
                                step(i['throw'](e));
                            } catch (e) {
                                n(e);
                            }
                        }
                        function step(e) {
                            e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(e, t || [])).next());
                    });
                };
            var n =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
                    t['default'] = e;
                    return t;
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const s = r(804);
            const o = n(r(87));
            const a = n(r(622));
            var u;
            (function (e) {
                e[(e['Success'] = 0)] = 'Success';
                e[(e['Failure'] = 1)] = 'Failure';
            })((u = t.ExitCode || (t.ExitCode = {})));
            function exportVariable(e, t) {
                const r = s.toCommandValue(t);
                process.env[e] = r;
                s.issueCommand('set-env', {name: e}, r);
            }
            t.exportVariable = exportVariable;
            function setSecret(e) {
                s.issueCommand('add-mask', {}, e);
            }
            t.setSecret = setSecret;
            function addPath(e) {
                s.issueCommand('add-path', {}, e);
                process.env['PATH'] = `${e}${a.delimiter}${process.env['PATH']}`;
            }
            t.addPath = addPath;
            function getInput(e, t) {
                const r = process.env[`INPUT_${e.replace(/ /g, '_').toUpperCase()}`] || '';
                if (t && t.required && !r) {
                    throw new Error(`Input required and not supplied: ${e}`);
                }
                return r.trim();
            }
            t.getInput = getInput;
            function setOutput(e, t) {
                s.issueCommand('set-output', {name: e}, t);
            }
            t.setOutput = setOutput;
            function setCommandEcho(e) {
                s.issue('echo', e ? 'on' : 'off');
            }
            t.setCommandEcho = setCommandEcho;
            function setFailed(e) {
                process.exitCode = u.Failure;
                error(e);
            }
            t.setFailed = setFailed;
            function isDebug() {
                return process.env['RUNNER_DEBUG'] === '1';
            }
            t.isDebug = isDebug;
            function debug(e) {
                s.issueCommand('debug', {}, e);
            }
            t.debug = debug;
            function error(e) {
                s.issue('error', e instanceof Error ? e.toString() : e);
            }
            t.error = error;
            function warning(e) {
                s.issue('warning', e instanceof Error ? e.toString() : e);
            }
            t.warning = warning;
            function info(e) {
                process.stdout.write(e + o.EOL);
            }
            t.info = info;
            function startGroup(e) {
                s.issue('group', e);
            }
            t.startGroup = startGroup;
            function endGroup() {
                s.issue('endgroup');
            }
            t.endGroup = endGroup;
            function group(e, t) {
                return i(this, void 0, void 0, function* () {
                    startGroup(e);
                    let r;
                    try {
                        r = yield t();
                    } finally {
                        endGroup();
                    }
                    return r;
                });
            }
            t.group = group;
            function saveState(e, t) {
                s.issueCommand('save-state', {name: e}, t);
            }
            t.saveState = saveState;
            function getState(e) {
                return process.env[`STATE_${e}`] || '';
            }
            t.getState = getState;
        },
        471: function (e, t, r) {
            e.exports = authenticationBeforeRequest;
            const i = r(675);
            const n = r(126);
            function authenticationBeforeRequest(e, t) {
                if (!e.auth.type) {
                    return;
                }
                if (e.auth.type === 'basic') {
                    const r = i(`${e.auth.username}:${e.auth.password}`);
                    t.headers.authorization = `Basic ${r}`;
                    return;
                }
                if (e.auth.type === 'token') {
                    t.headers.authorization = `token ${e.auth.token}`;
                    return;
                }
                if (e.auth.type === 'app') {
                    t.headers.authorization = `Bearer ${e.auth.token}`;
                    const r = t.headers.accept.split(',').concat('application/vnd.github.machine-man-preview+json');
                    t.headers.accept = n(r).filter(Boolean).join(',');
                    return;
                }
                t.url += t.url.indexOf('?') === -1 ? '?' : '&';
                if (e.auth.token) {
                    t.url += `access_token=${encodeURIComponent(e.auth.token)}`;
                    return;
                }
                const r = encodeURIComponent(e.auth.key);
                const s = encodeURIComponent(e.auth.secret);
                t.url += `client_id=${r}&client_secret=${s}`;
            }
        },
        486: function (e, t, r) {
            function setup(e) {
                createDebug.debug = createDebug;
                createDebug.default = createDebug;
                createDebug.coerce = coerce;
                createDebug.disable = disable;
                createDebug.enable = enable;
                createDebug.enabled = enabled;
                createDebug.humanize = r(317);
                Object.keys(e).forEach((t) => {
                    createDebug[t] = e[t];
                });
                createDebug.instances = [];
                createDebug.names = [];
                createDebug.skips = [];
                createDebug.formatters = {};
                function selectColor(e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                        t = (t << 5) - t + e.charCodeAt(r);
                        t |= 0;
                    }
                    return createDebug.colors[Math.abs(t) % createDebug.colors.length];
                }
                createDebug.selectColor = selectColor;
                function createDebug(e) {
                    let t;
                    function debug(...e) {
                        if (!debug.enabled) {
                            return;
                        }
                        const r = debug;
                        const i = Number(new Date());
                        const n = i - (t || i);
                        r.diff = n;
                        r.prev = t;
                        r.curr = i;
                        t = i;
                        e[0] = createDebug.coerce(e[0]);
                        if (typeof e[0] !== 'string') {
                            e.unshift('%O');
                        }
                        let s = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
                            if (t === '%%') {
                                return t;
                            }
                            s++;
                            const n = createDebug.formatters[i];
                            if (typeof n === 'function') {
                                const i = e[s];
                                t = n.call(r, i);
                                e.splice(s, 1);
                                s--;
                            }
                            return t;
                        });
                        createDebug.formatArgs.call(r, e);
                        const o = r.log || createDebug.log;
                        o.apply(r, e);
                    }
                    debug.namespace = e;
                    debug.enabled = createDebug.enabled(e);
                    debug.useColors = createDebug.useColors();
                    debug.color = selectColor(e);
                    debug.destroy = destroy;
                    debug.extend = extend;
                    if (typeof createDebug.init === 'function') {
                        createDebug.init(debug);
                    }
                    createDebug.instances.push(debug);
                    return debug;
                }
                function destroy() {
                    const e = createDebug.instances.indexOf(this);
                    if (e !== -1) {
                        createDebug.instances.splice(e, 1);
                        return true;
                    }
                    return false;
                }
                function extend(e, t) {
                    const r = createDebug(this.namespace + (typeof t === 'undefined' ? ':' : t) + e);
                    r.log = this.log;
                    return r;
                }
                function enable(e) {
                    createDebug.save(e);
                    createDebug.names = [];
                    createDebug.skips = [];
                    let t;
                    const r = (typeof e === 'string' ? e : '').split(/[\s,]+/);
                    const i = r.length;
                    for (t = 0; t < i; t++) {
                        if (!r[t]) {
                            continue;
                        }
                        e = r[t].replace(/\*/g, '.*?');
                        if (e[0] === '-') {
                            createDebug.skips.push(new RegExp('^' + e.substr(1) + '$'));
                        } else {
                            createDebug.names.push(new RegExp('^' + e + '$'));
                        }
                    }
                    for (t = 0; t < createDebug.instances.length; t++) {
                        const e = createDebug.instances[t];
                        e.enabled = createDebug.enabled(e.namespace);
                    }
                }
                function disable() {
                    const e = [
                        ...createDebug.names.map(toNamespace),
                        ...createDebug.skips.map(toNamespace).map((e) => '-' + e),
                    ].join(',');
                    createDebug.enable('');
                    return e;
                }
                function enabled(e) {
                    if (e[e.length - 1] === '*') {
                        return true;
                    }
                    let t;
                    let r;
                    for (t = 0, r = createDebug.skips.length; t < r; t++) {
                        if (createDebug.skips[t].test(e)) {
                            return false;
                        }
                    }
                    for (t = 0, r = createDebug.names.length; t < r; t++) {
                        if (createDebug.names[t].test(e)) {
                            return true;
                        }
                    }
                    return false;
                }
                function toNamespace(e) {
                    return e
                        .toString()
                        .substring(2, e.toString().length - 2)
                        .replace(/\.\*\?$/, '*');
                }
                function coerce(e) {
                    if (e instanceof Error) {
                        return e.stack || e.message;
                    }
                    return e;
                }
                createDebug.enable(createDebug.load());
                return createDebug;
            }
            e.exports = setup;
        },
        489: function (e, t, r) {
            'use strict';
            const i = r(622);
            const n = r(814);
            const s = r(39)();
            function resolveCommandAttempt(e, t) {
                const r = process.cwd();
                const o = e.options.cwd != null;
                if (o) {
                    try {
                        process.chdir(e.options.cwd);
                    } catch (e) {}
                }
                let a;
                try {
                    a = n.sync(e.command, {
                        path: (e.options.env || process.env)[s],
                        pathExt: t ? i.delimiter : undefined,
                    });
                } catch (e) {
                } finally {
                    process.chdir(r);
                }
                if (a) {
                    a = i.resolve(o ? e.options.cwd : '', a);
                }
                return a;
            }
            function resolveCommand(e) {
                return resolveCommandAttempt(e) || resolveCommandAttempt(e, true);
            }
            e.exports = resolveCommand;
        },
        494: function (e, t, r) {
            'use strict';
            const i = r(87);
            const n = r(955);
            const s = new Map([
                ['10.0', '10'],
                ['6.3', '8.1'],
                ['6.2', '8'],
                ['6.1', '7'],
                ['6.0', 'Vista'],
                ['5.2', 'Server 2003'],
                ['5.1', 'XP'],
                ['5.0', '2000'],
                ['4.9', 'ME'],
                ['4.1', '98'],
                ['4.0', '95'],
            ]);
            const o = (e) => {
                const t = /\d+\.\d/.exec(e || i.release());
                if (e && !t) {
                    throw new Error("`release` argument doesn't match `n.n`");
                }
                const r = (t || [])[0];
                if ((!e || e === i.release()) && ['6.1', '6.2', '6.3', '10.0'].includes(r)) {
                    let e;
                    try {
                        e = n.sync('wmic', ['os', 'get', 'Caption']).stdout || '';
                    } catch (t) {
                        e =
                            n.sync('powershell', ['(Get-CimInstance -ClassName Win32_OperatingSystem).caption'])
                                .stdout || '';
                    }
                    const t = (e.match(/2008|2012|2016|2019/) || [])[0];
                    if (t) {
                        return `Server ${t}`;
                    }
                }
                return s.get(r);
            };
            e.exports = o;
        },
        497: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = r(692);
            var n = _interopDefault(r(49));
            const s = n((e) => console.warn(e));
            class RequestError extends Error {
                constructor(e, t, r) {
                    super(e);
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                    this.name = 'HttpError';
                    this.status = t;
                    Object.defineProperty(this, 'code', {
                        get() {
                            s(
                                new i.Deprecation(
                                    '[@octokit/request-error] `error.code` is deprecated, use `error.status`.',
                                ),
                            );
                            return t;
                        },
                    });
                    this.headers = r.headers || {};
                    const n = Object.assign({}, r.request);
                    if (r.request.headers.authorization) {
                        n.headers = Object.assign({}, r.request.headers, {
                            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]'),
                        });
                    }
                    n.url = n.url
                        .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
                        .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]');
                    this.request = n;
                }
            }
            t.RequestError = RequestError;
        },
        510: function (e) {
            e.exports = addHook;
            function addHook(e, t, r, i) {
                var n = i;
                if (!e.registry[r]) {
                    e.registry[r] = [];
                }
                if (t === 'before') {
                    i = function (e, t) {
                        return Promise.resolve().then(n.bind(null, t)).then(e.bind(null, t));
                    };
                }
                if (t === 'after') {
                    i = function (e, t) {
                        var r;
                        return Promise.resolve()
                            .then(e.bind(null, t))
                            .then(function (e) {
                                r = e;
                                return n(r, t);
                            })
                            .then(function () {
                                return r;
                            });
                    };
                }
                if (t === 'error') {
                    i = function (e, t) {
                        return Promise.resolve()
                            .then(e.bind(null, t))
                            .catch(function (e) {
                                return n(e, t);
                            });
                    };
                }
                e.registry[r].push({hook: i, orig: n});
            }
        },
        523: function (e, t, r) {
            var i = r(280);
            var n = r(510);
            var s = r(866);
            var o = Function.bind;
            var a = o.bind(o);
            function bindApi(e, t, r) {
                var i = a(s, null).apply(null, r ? [t, r] : [t]);
                e.api = {remove: i};
                e.remove = i;
                ['before', 'error', 'after', 'wrap'].forEach(function (i) {
                    var s = r ? [t, i, r] : [t, i];
                    e[i] = e.api[i] = a(n, null).apply(null, s);
                });
            }
            function HookSingular() {
                var e = 'h';
                var t = {registry: {}};
                var r = i.bind(null, t, e);
                bindApi(r, t, e);
                return r;
            }
            function HookCollection() {
                var e = {registry: {}};
                var t = i.bind(null, e);
                bindApi(t, e);
                return t;
            }
            var u = false;
            function Hook() {
                if (!u) {
                    console.warn(
                        '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4',
                    );
                    u = true;
                }
                return HookCollection();
            }
            Hook.Singular = HookSingular.bind();
            Hook.Collection = HookCollection.bind();
            e.exports = Hook;
            e.exports.Hook = Hook;
            e.exports.Singular = Hook.Singular;
            e.exports.Collection = Hook.Collection;
        },
        529: function (e, t, r) {
            const i = r(47);
            e.exports = i();
        },
        536: function (e, t, r) {
            e.exports = hasFirstPage;
            const i = r(370);
            const n = r(577);
            function hasFirstPage(e) {
                i(
                    `octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`,
                );
                return n(e).first;
            }
        },
        539: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const i = r(835);
            const n = r(605);
            const s = r(211);
            const o = r(950);
            let a;
            var u;
            (function (e) {
                e[(e['OK'] = 200)] = 'OK';
                e[(e['MultipleChoices'] = 300)] = 'MultipleChoices';
                e[(e['MovedPermanently'] = 301)] = 'MovedPermanently';
                e[(e['ResourceMoved'] = 302)] = 'ResourceMoved';
                e[(e['SeeOther'] = 303)] = 'SeeOther';
                e[(e['NotModified'] = 304)] = 'NotModified';
                e[(e['UseProxy'] = 305)] = 'UseProxy';
                e[(e['SwitchProxy'] = 306)] = 'SwitchProxy';
                e[(e['TemporaryRedirect'] = 307)] = 'TemporaryRedirect';
                e[(e['PermanentRedirect'] = 308)] = 'PermanentRedirect';
                e[(e['BadRequest'] = 400)] = 'BadRequest';
                e[(e['Unauthorized'] = 401)] = 'Unauthorized';
                e[(e['PaymentRequired'] = 402)] = 'PaymentRequired';
                e[(e['Forbidden'] = 403)] = 'Forbidden';
                e[(e['NotFound'] = 404)] = 'NotFound';
                e[(e['MethodNotAllowed'] = 405)] = 'MethodNotAllowed';
                e[(e['NotAcceptable'] = 406)] = 'NotAcceptable';
                e[(e['ProxyAuthenticationRequired'] = 407)] = 'ProxyAuthenticationRequired';
                e[(e['RequestTimeout'] = 408)] = 'RequestTimeout';
                e[(e['Conflict'] = 409)] = 'Conflict';
                e[(e['Gone'] = 410)] = 'Gone';
                e[(e['TooManyRequests'] = 429)] = 'TooManyRequests';
                e[(e['InternalServerError'] = 500)] = 'InternalServerError';
                e[(e['NotImplemented'] = 501)] = 'NotImplemented';
                e[(e['BadGateway'] = 502)] = 'BadGateway';
                e[(e['ServiceUnavailable'] = 503)] = 'ServiceUnavailable';
                e[(e['GatewayTimeout'] = 504)] = 'GatewayTimeout';
            })((u = t.HttpCodes || (t.HttpCodes = {})));
            var p;
            (function (e) {
                e['Accept'] = 'accept';
                e['ContentType'] = 'content-type';
            })((p = t.Headers || (t.Headers = {})));
            var c;
            (function (e) {
                e['ApplicationJson'] = 'application/json';
            })((c = t.MediaTypes || (t.MediaTypes = {})));
            function getProxyUrl(e) {
                let t = o.getProxyUrl(i.parse(e));
                return t ? t.href : '';
            }
            t.getProxyUrl = getProxyUrl;
            const d = [u.MovedPermanently, u.ResourceMoved, u.SeeOther, u.TemporaryRedirect, u.PermanentRedirect];
            const l = [u.BadGateway, u.ServiceUnavailable, u.GatewayTimeout];
            const g = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
            const m = 10;
            const h = 5;
            class HttpClientResponse {
                constructor(e) {
                    this.message = e;
                }
                readBody() {
                    return new Promise(async (e, t) => {
                        let r = Buffer.alloc(0);
                        this.message.on('data', (e) => {
                            r = Buffer.concat([r, e]);
                        });
                        this.message.on('end', () => {
                            e(r.toString());
                        });
                    });
                }
            }
            t.HttpClientResponse = HttpClientResponse;
            function isHttps(e) {
                let t = i.parse(e);
                return t.protocol === 'https:';
            }
            t.isHttps = isHttps;
            class HttpClient {
                constructor(e, t, r) {
                    this._ignoreSslError = false;
                    this._allowRedirects = true;
                    this._allowRedirectDowngrade = false;
                    this._maxRedirects = 50;
                    this._allowRetries = false;
                    this._maxRetries = 1;
                    this._keepAlive = false;
                    this._disposed = false;
                    this.userAgent = e;
                    this.handlers = t || [];
                    this.requestOptions = r;
                    if (r) {
                        if (r.ignoreSslError != null) {
                            this._ignoreSslError = r.ignoreSslError;
                        }
                        this._socketTimeout = r.socketTimeout;
                        if (r.allowRedirects != null) {
                            this._allowRedirects = r.allowRedirects;
                        }
                        if (r.allowRedirectDowngrade != null) {
                            this._allowRedirectDowngrade = r.allowRedirectDowngrade;
                        }
                        if (r.maxRedirects != null) {
                            this._maxRedirects = Math.max(r.maxRedirects, 0);
                        }
                        if (r.keepAlive != null) {
                            this._keepAlive = r.keepAlive;
                        }
                        if (r.allowRetries != null) {
                            this._allowRetries = r.allowRetries;
                        }
                        if (r.maxRetries != null) {
                            this._maxRetries = r.maxRetries;
                        }
                    }
                }
                options(e, t) {
                    return this.request('OPTIONS', e, null, t || {});
                }
                get(e, t) {
                    return this.request('GET', e, null, t || {});
                }
                del(e, t) {
                    return this.request('DELETE', e, null, t || {});
                }
                post(e, t, r) {
                    return this.request('POST', e, t, r || {});
                }
                patch(e, t, r) {
                    return this.request('PATCH', e, t, r || {});
                }
                put(e, t, r) {
                    return this.request('PUT', e, t, r || {});
                }
                head(e, t) {
                    return this.request('HEAD', e, null, t || {});
                }
                sendStream(e, t, r, i) {
                    return this.request(e, t, r, i);
                }
                async getJson(e, t = {}) {
                    t[p.Accept] = this._getExistingOrDefaultHeader(t, p.Accept, c.ApplicationJson);
                    let r = await this.get(e, t);
                    return this._processResponse(r, this.requestOptions);
                }
                async postJson(e, t, r = {}) {
                    let i = JSON.stringify(t, null, 2);
                    r[p.Accept] = this._getExistingOrDefaultHeader(r, p.Accept, c.ApplicationJson);
                    r[p.ContentType] = this._getExistingOrDefaultHeader(r, p.ContentType, c.ApplicationJson);
                    let n = await this.post(e, i, r);
                    return this._processResponse(n, this.requestOptions);
                }
                async putJson(e, t, r = {}) {
                    let i = JSON.stringify(t, null, 2);
                    r[p.Accept] = this._getExistingOrDefaultHeader(r, p.Accept, c.ApplicationJson);
                    r[p.ContentType] = this._getExistingOrDefaultHeader(r, p.ContentType, c.ApplicationJson);
                    let n = await this.put(e, i, r);
                    return this._processResponse(n, this.requestOptions);
                }
                async patchJson(e, t, r = {}) {
                    let i = JSON.stringify(t, null, 2);
                    r[p.Accept] = this._getExistingOrDefaultHeader(r, p.Accept, c.ApplicationJson);
                    r[p.ContentType] = this._getExistingOrDefaultHeader(r, p.ContentType, c.ApplicationJson);
                    let n = await this.patch(e, i, r);
                    return this._processResponse(n, this.requestOptions);
                }
                async request(e, t, r, n) {
                    if (this._disposed) {
                        throw new Error('Client has already been disposed.');
                    }
                    let s = i.parse(t);
                    let o = this._prepareRequest(e, s, n);
                    let a = this._allowRetries && g.indexOf(e) != -1 ? this._maxRetries + 1 : 1;
                    let p = 0;
                    let c;
                    while (p < a) {
                        c = await this.requestRaw(o, r);
                        if (c && c.message && c.message.statusCode === u.Unauthorized) {
                            let e;
                            for (let t = 0; t < this.handlers.length; t++) {
                                if (this.handlers[t].canHandleAuthentication(c)) {
                                    e = this.handlers[t];
                                    break;
                                }
                            }
                            if (e) {
                                return e.handleAuthentication(this, o, r);
                            } else {
                                return c;
                            }
                        }
                        let t = this._maxRedirects;
                        while (d.indexOf(c.message.statusCode) != -1 && this._allowRedirects && t > 0) {
                            const a = c.message.headers['location'];
                            if (!a) {
                                break;
                            }
                            let u = i.parse(a);
                            if (s.protocol == 'https:' && s.protocol != u.protocol && !this._allowRedirectDowngrade) {
                                throw new Error(
                                    'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.',
                                );
                            }
                            await c.readBody();
                            if (u.hostname !== s.hostname) {
                                for (let e in n) {
                                    if (e.toLowerCase() === 'authorization') {
                                        delete n[e];
                                    }
                                }
                            }
                            o = this._prepareRequest(e, u, n);
                            c = await this.requestRaw(o, r);
                            t--;
                        }
                        if (l.indexOf(c.message.statusCode) == -1) {
                            return c;
                        }
                        p += 1;
                        if (p < a) {
                            await c.readBody();
                            await this._performExponentialBackoff(p);
                        }
                    }
                    return c;
                }
                dispose() {
                    if (this._agent) {
                        this._agent.destroy();
                    }
                    this._disposed = true;
                }
                requestRaw(e, t) {
                    return new Promise((r, i) => {
                        let n = function (e, t) {
                            if (e) {
                                i(e);
                            }
                            r(t);
                        };
                        this.requestRawWithCallback(e, t, n);
                    });
                }
                requestRawWithCallback(e, t, r) {
                    let i;
                    if (typeof t === 'string') {
                        e.options.headers['Content-Length'] = Buffer.byteLength(t, 'utf8');
                    }
                    let n = false;
                    let s = (e, t) => {
                        if (!n) {
                            n = true;
                            r(e, t);
                        }
                    };
                    let o = e.httpModule.request(e.options, (e) => {
                        let t = new HttpClientResponse(e);
                        s(null, t);
                    });
                    o.on('socket', (e) => {
                        i = e;
                    });
                    o.setTimeout(this._socketTimeout || 3 * 6e4, () => {
                        if (i) {
                            i.end();
                        }
                        s(new Error('Request timeout: ' + e.options.path), null);
                    });
                    o.on('error', function (e) {
                        s(e, null);
                    });
                    if (t && typeof t === 'string') {
                        o.write(t, 'utf8');
                    }
                    if (t && typeof t !== 'string') {
                        t.on('close', function () {
                            o.end();
                        });
                        t.pipe(o);
                    } else {
                        o.end();
                    }
                }
                getAgent(e) {
                    let t = i.parse(e);
                    return this._getAgent(t);
                }
                _prepareRequest(e, t, r) {
                    const i = {};
                    i.parsedUrl = t;
                    const o = i.parsedUrl.protocol === 'https:';
                    i.httpModule = o ? s : n;
                    const a = o ? 443 : 80;
                    i.options = {};
                    i.options.host = i.parsedUrl.hostname;
                    i.options.port = i.parsedUrl.port ? parseInt(i.parsedUrl.port) : a;
                    i.options.path = (i.parsedUrl.pathname || '') + (i.parsedUrl.search || '');
                    i.options.method = e;
                    i.options.headers = this._mergeHeaders(r);
                    if (this.userAgent != null) {
                        i.options.headers['user-agent'] = this.userAgent;
                    }
                    i.options.agent = this._getAgent(i.parsedUrl);
                    if (this.handlers) {
                        this.handlers.forEach((e) => {
                            e.prepareRequest(i.options);
                        });
                    }
                    return i;
                }
                _mergeHeaders(e) {
                    const t = (e) => Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {});
                    if (this.requestOptions && this.requestOptions.headers) {
                        return Object.assign({}, t(this.requestOptions.headers), t(e));
                    }
                    return t(e || {});
                }
                _getExistingOrDefaultHeader(e, t, r) {
                    const i = (e) => Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {});
                    let n;
                    if (this.requestOptions && this.requestOptions.headers) {
                        n = i(this.requestOptions.headers)[t];
                    }
                    return e[t] || n || r;
                }
                _getAgent(e) {
                    let t;
                    let i = o.getProxyUrl(e);
                    let u = i && i.hostname;
                    if (this._keepAlive && u) {
                        t = this._proxyAgent;
                    }
                    if (this._keepAlive && !u) {
                        t = this._agent;
                    }
                    if (!!t) {
                        return t;
                    }
                    const p = e.protocol === 'https:';
                    let c = 100;
                    if (!!this.requestOptions) {
                        c = this.requestOptions.maxSockets || n.globalAgent.maxSockets;
                    }
                    if (u) {
                        if (!a) {
                            a = r(856);
                        }
                        const e = {
                            maxSockets: c,
                            keepAlive: this._keepAlive,
                            proxy: {proxyAuth: i.auth, host: i.hostname, port: i.port},
                        };
                        let n;
                        const s = i.protocol === 'https:';
                        if (p) {
                            n = s ? a.httpsOverHttps : a.httpsOverHttp;
                        } else {
                            n = s ? a.httpOverHttps : a.httpOverHttp;
                        }
                        t = n(e);
                        this._proxyAgent = t;
                    }
                    if (this._keepAlive && !t) {
                        const e = {keepAlive: this._keepAlive, maxSockets: c};
                        t = p ? new s.Agent(e) : new n.Agent(e);
                        this._agent = t;
                    }
                    if (!t) {
                        t = p ? s.globalAgent : n.globalAgent;
                    }
                    if (p && this._ignoreSslError) {
                        t.options = Object.assign(t.options || {}, {rejectUnauthorized: false});
                    }
                    return t;
                }
                _performExponentialBackoff(e) {
                    e = Math.min(m, e);
                    const t = h * Math.pow(2, e);
                    return new Promise((e) => setTimeout(() => e(), t));
                }
                static dateTimeDeserializer(e, t) {
                    if (typeof t === 'string') {
                        let e = new Date(t);
                        if (!isNaN(e.valueOf())) {
                            return e;
                        }
                    }
                    return t;
                }
                async _processResponse(e, t) {
                    return new Promise(async (r, i) => {
                        const n = e.message.statusCode;
                        const s = {statusCode: n, result: null, headers: {}};
                        if (n == u.NotFound) {
                            r(s);
                        }
                        let o;
                        let a;
                        try {
                            a = await e.readBody();
                            if (a && a.length > 0) {
                                if (t && t.deserializeDates) {
                                    o = JSON.parse(a, HttpClient.dateTimeDeserializer);
                                } else {
                                    o = JSON.parse(a);
                                }
                                s.result = o;
                            }
                            s.headers = e.message.headers;
                        } catch (e) {}
                        if (n > 299) {
                            let e;
                            if (o && o.message) {
                                e = o.message;
                            } else if (a && a.length > 0) {
                                e = a;
                            } else {
                                e = 'Failed request: (' + n + ')';
                            }
                            let t = new Error(e);
                            t['statusCode'] = n;
                            if (s.result) {
                                t['result'] = s.result;
                            }
                            i(t);
                        } else {
                            r(s);
                        }
                    });
                }
            }
            t.HttpClient = HttpClient;
        },
        550: function (e, t, r) {
            e.exports = getNextPage;
            const i = r(265);
            function getNextPage(e, t, r) {
                return i(e, t, 'next', r);
            }
        },
        558: function (e, t, r) {
            e.exports = hasPreviousPage;
            const i = r(370);
            const n = r(577);
            function hasPreviousPage(e) {
                i(
                    `octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`,
                );
                return n(e).prev;
            }
        },
        563: function (e, t, r) {
            e.exports = getPreviousPage;
            const i = r(265);
            function getPreviousPage(e, t, r) {
                return i(e, t, 'prev', r);
            }
        },
        568: function (e, t, r) {
            'use strict';
            const i = r(622);
            const n = r(948);
            const s = r(489);
            const o = r(462);
            const a = r(389);
            const u = r(864);
            const p = process.platform === 'win32';
            const c = /\.(?:com|exe)$/i;
            const d = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
            const l = n(() => u.satisfies(process.version, '^4.8.0 || ^5.7.0 || >= 6.0.0', true)) || false;
            function detectShebang(e) {
                e.file = s(e);
                const t = e.file && a(e.file);
                if (t) {
                    e.args.unshift(e.file);
                    e.command = t;
                    return s(e);
                }
                return e.file;
            }
            function parseNonShell(e) {
                if (!p) {
                    return e;
                }
                const t = detectShebang(e);
                const r = !c.test(t);
                if (e.options.forceShell || r) {
                    const r = d.test(t);
                    e.command = i.normalize(e.command);
                    e.command = o.command(e.command);
                    e.args = e.args.map((e) => o.argument(e, r));
                    const n = [e.command].concat(e.args).join(' ');
                    e.args = ['/d', '/s', '/c', `"${n}"`];
                    e.command = process.env.comspec || 'cmd.exe';
                    e.options.windowsVerbatimArguments = true;
                }
                return e;
            }
            function parseShell(e) {
                if (l) {
                    return e;
                }
                const t = [e.command].concat(e.args).join(' ');
                if (p) {
                    e.command =
                        typeof e.options.shell === 'string' ? e.options.shell : process.env.comspec || 'cmd.exe';
                    e.args = ['/d', '/s', '/c', `"${t}"`];
                    e.options.windowsVerbatimArguments = true;
                } else {
                    if (typeof e.options.shell === 'string') {
                        e.command = e.options.shell;
                    } else if (process.platform === 'android') {
                        e.command = '/system/bin/sh';
                    } else {
                        e.command = '/bin/sh';
                    }
                    e.args = ['-c', t];
                }
                return e;
            }
            function parse(e, t, r) {
                if (t && !Array.isArray(t)) {
                    r = t;
                    t = null;
                }
                t = t ? t.slice(0) : [];
                r = Object.assign({}, r);
                const i = {command: e, args: t, options: r, file: undefined, original: {command: e, args: t}};
                return r.shell ? parseShell(i) : parseNonShell(i);
            }
            e.exports = parse;
        },
        577: function (e) {
            e.exports = getPageLinks;
            function getPageLinks(e) {
                e = e.link || e.headers.link || '';
                const t = {};
                e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (e, r, i) => {
                    t[i] = r;
                });
                return t;
            }
        },
        605: function (e) {
            e.exports = require('http');
        },
        614: function (e) {
            e.exports = require('events');
        },
        621: function (e, t, r) {
            'use strict';
            const i = r(622);
            const n = r(39);
            e.exports = (e) => {
                e = Object.assign({cwd: process.cwd(), path: process.env[n()]}, e);
                let t;
                let r = i.resolve(e.cwd);
                const s = [];
                while (t !== r) {
                    s.push(i.join(r, 'node_modules/.bin'));
                    t = r;
                    r = i.resolve(r, '..');
                }
                s.push(i.dirname(process.execPath));
                return s.concat(e.path).join(i.delimiter);
            };
            e.exports.env = (t) => {
                t = Object.assign({env: process.env}, t);
                const r = Object.assign({}, t.env);
                const i = n({env: r});
                t.path = r[i];
                r[i] = e.exports(t);
                return r;
            };
        },
        622: function (e) {
            e.exports = require('path');
        },
        631: function (e) {
            e.exports = require('net');
        },
        639: function (e) {
            'use strict';
            e.exports = function (e) {
                var t = typeof e === 'string' ? '\n' : '\n'.charCodeAt();
                var r = typeof e === 'string' ? '\r' : '\r'.charCodeAt();
                if (e[e.length - 1] === t) {
                    e = e.slice(0, e.length - 1);
                }
                if (e[e.length - 1] === r) {
                    e = e.slice(0, e.length - 1);
                }
                return e;
            };
        },
        649: function (e, t, r) {
            e.exports = getLastPage;
            const i = r(265);
            function getLastPage(e, t, r) {
                return i(e, t, 'last', r);
            }
        },
        654: function (e) {
            e.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM'];
            if (process.platform !== 'win32') {
                e.exports.push('SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT');
            }
            if (process.platform === 'linux') {
                e.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED');
            }
        },
        669: function (e) {
            e.exports = require('util');
        },
        674: function (e, t, r) {
            e.exports = authenticate;
            const {Deprecation: i} = r(692);
            const n = r(49);
            const s = n((e, t) => e.warn(t));
            function authenticate(e, t) {
                s(
                    e.octokit.log,
                    new i(
                        '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.',
                    ),
                );
                if (!t) {
                    e.auth = false;
                    return;
                }
                switch (t.type) {
                    case 'basic':
                        if (!t.username || !t.password) {
                            throw new Error('Basic authentication requires both a username and password to be set');
                        }
                        break;
                    case 'oauth':
                        if (!t.token && !(t.key && t.secret)) {
                            throw new Error('OAuth2 authentication requires a token or key & secret to be set');
                        }
                        break;
                    case 'token':
                    case 'app':
                        if (!t.token) {
                            throw new Error('Token authentication requires a token to be set');
                        }
                        break;
                    default:
                        throw new Error("Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'");
                }
                e.auth = t;
            }
        },
        675: function (e) {
            e.exports = function btoa(e) {
                return new Buffer(e).toString('base64');
            };
        },
        691: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, s) {
                        function fulfilled(e) {
                            try {
                                step(i.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function rejected(e) {
                            try {
                                step(i['throw'](e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function step(e) {
                            e.done
                                ? n(e.value)
                                : new r(function (t) {
                                      t(e.value);
                                  }).then(fulfilled, rejected);
                        }
                        step((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const n = r(784);
            const s = r(154);
            const o = n('github-cherry-pick');
            const a = (e) => `${e} [skip ci]\n\n\nskip-checks: true\n`;
            const u = ({author: e, committer: t, message: r, octokit: n, owner: s, parent: o, repo: a, tree: u}) =>
                i(this, void 0, void 0, function* () {
                    const {
                        data: {sha: i},
                    } = yield n.git.createCommit({
                        author: e,
                        committer: t,
                        message: r,
                        owner: s,
                        parents: [o],
                        repo: a,
                        tree: u,
                    });
                    return i;
                });
            const p = ({base: e, commit: t, octokit: r, owner: n, repo: s}) =>
                i(this, void 0, void 0, function* () {
                    const {
                        data: {
                            commit: {
                                tree: {sha: i},
                            },
                        },
                    } = yield r.repos.merge({
                        base: e,
                        commit_message: a(`Merge ${t} into ${e}`),
                        head: t,
                        owner: n,
                        repo: s,
                    });
                    return i;
                });
            const c = ({commit: e, octokit: t, owner: r, repo: n}) =>
                i(this, void 0, void 0, function* () {
                    const {
                        data: {author: i, committer: s, message: o, parents: a},
                    } = yield t.git.getCommit({commit_sha: e, owner: r, repo: n});
                    if (a.length > 1) {
                        throw new Error(
                            `Commit ${e} has ${a.length} parents.` +
                                ` github-cherry-pick is designed for the rebase workflow and doesn't support merge commits.`,
                        );
                    }
                    return {author: i, committer: s, message: o, parent: a[0].sha};
                });
            const d = ({
                commit: e,
                head: {author: t, committer: r, ref: n, tree: o},
                octokit: p,
                owner: c,
                parent: d,
                repo: l,
            }) =>
                i(this, void 0, void 0, function* () {
                    const i = yield u({
                        author: t,
                        committer: r,
                        message: a(`Sibling of ${e}`),
                        octokit: p,
                        owner: c,
                        parent: d,
                        repo: l,
                        tree: o,
                    });
                    yield s.updateRef({force: true, octokit: p, owner: c, ref: n, repo: l, sha: i});
                });
            const l = ({commit: e, head: {ref: t, sha: r, tree: n}, octokit: a, owner: l, repo: g}) =>
                i(this, void 0, void 0, function* () {
                    const {author: i, committer: m, message: h, parent: y} = yield c({
                        commit: e,
                        octokit: a,
                        owner: l,
                        repo: g,
                    });
                    o('creating sibling commit');
                    yield d({
                        commit: e,
                        head: {author: i, committer: m, ref: t, tree: n},
                        octokit: a,
                        owner: l,
                        parent: y,
                        repo: g,
                    });
                    o('merging');
                    const f = yield p({base: t, commit: e, octokit: a, owner: l, repo: g});
                    o('creating commit with different tree', f);
                    const b = yield u({
                        author: i,
                        committer: m,
                        message: h,
                        octokit: a,
                        owner: l,
                        parent: r,
                        repo: g,
                        tree: f,
                    });
                    o('updating ref', b);
                    yield s.updateRef({force: true, octokit: a, owner: l, ref: t, repo: g, sha: b});
                    return {sha: b, tree: f};
                });
            const g = ({commits: e, initialHeadSha: t, octokit: r, owner: n, ref: s, repo: a}) =>
                i(this, void 0, void 0, function* () {
                    const {
                        data: {
                            tree: {sha: u},
                        },
                    } = yield r.git.getCommit({commit_sha: t, owner: n, repo: a});
                    const {sha: p} = yield e.reduce(
                        (e, t) =>
                            i(this, void 0, void 0, function* () {
                                const {sha: i, tree: u} = yield e;
                                o('cherry-picking', {commit: t, ref: s, sha: i});
                                return l({commit: t, head: {ref: s, sha: i, tree: u}, octokit: r, owner: n, repo: a});
                            }),
                        Promise.resolve({sha: t, tree: u}),
                    );
                    return p;
                });
            const m = ({_intercept: e = () => Promise.resolve(), commits: t, head: r, octokit: n, owner: a, repo: u}) =>
                i(this, void 0, void 0, function* () {
                    o('starting', {commits: t, head: r, owner: a, repo: u});
                    const p = yield s.fetchRefSha({octokit: n, owner: a, ref: r, repo: u});
                    yield e({initialHeadSha: p});
                    return s.withTemporaryRef({
                        action: (e) =>
                            i(this, void 0, void 0, function* () {
                                o({temporaryRef: e});
                                const i = yield g({
                                    commits: t,
                                    initialHeadSha: p,
                                    octokit: n,
                                    owner: a,
                                    ref: e,
                                    repo: u,
                                });
                                o('updating ref with new SHA', i);
                                yield s.updateRef({force: false, octokit: n, owner: a, ref: r, repo: u, sha: i});
                                o('ref updated');
                                return i;
                            }),
                        octokit: n,
                        owner: a,
                        ref: `cherry-pick-${r}`,
                        repo: u,
                        sha: p,
                    });
                });
            t.cherryPickCommits = m;
        },
        692: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            class Deprecation extends Error {
                constructor(e) {
                    super(e);
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                    this.name = 'Deprecation';
                }
            }
            t.Deprecation = Deprecation;
        },
        696: function (e) {
            'use strict';
            function isObject(e) {
                return Object.prototype.toString.call(e) === '[object Object]';
            }
            function isPlainObject(e) {
                var t, r;
                if (isObject(e) === false) return false;
                t = e.constructor;
                if (t === undefined) return true;
                r = t.prototype;
                if (isObject(r) === false) return false;
                if (r.hasOwnProperty('isPrototypeOf') === false) {
                    return false;
                }
                return true;
            }
            e.exports = isPlainObject;
        },
        697: function (e) {
            'use strict';
            e.exports = (e, t) => {
                t = t || (() => {});
                return e.then(
                    (e) =>
                        new Promise((e) => {
                            e(t());
                        }).then(() => e),
                    (e) =>
                        new Promise((e) => {
                            e(t());
                        }).then(() => {
                            throw e;
                        }),
                );
            };
        },
        722: function (e) {
            var t = [];
            for (var r = 0; r < 256; ++r) {
                t[r] = (r + 256).toString(16).substr(1);
            }
            function bytesToUuid(e, r) {
                var i = r || 0;
                var n = t;
                return [
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                    '-',
                    n[e[i++]],
                    n[e[i++]],
                    '-',
                    n[e[i++]],
                    n[e[i++]],
                    '-',
                    n[e[i++]],
                    n[e[i++]],
                    '-',
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                    n[e[i++]],
                ].join('');
            }
            e.exports = bytesToUuid;
        },
        742: function (e, t, r) {
            var i = r(747);
            var n;
            if (process.platform === 'win32' || global.TESTING_WINDOWS) {
                n = r(818);
            } else {
                n = r(197);
            }
            e.exports = isexe;
            isexe.sync = sync;
            function isexe(e, t, r) {
                if (typeof t === 'function') {
                    r = t;
                    t = {};
                }
                if (!r) {
                    if (typeof Promise !== 'function') {
                        throw new TypeError('callback not provided');
                    }
                    return new Promise(function (r, i) {
                        isexe(e, t || {}, function (e, t) {
                            if (e) {
                                i(e);
                            } else {
                                r(t);
                            }
                        });
                    });
                }
                n(e, t || {}, function (e, i) {
                    if (e) {
                        if (e.code === 'EACCES' || (t && t.ignoreErrors)) {
                            e = null;
                            i = false;
                        }
                    }
                    r(e, i);
                });
            }
            function sync(e, t) {
                try {
                    return n.sync(e, t || {});
                } catch (e) {
                    if ((t && t.ignoreErrors) || e.code === 'EACCES') {
                        return false;
                    } else {
                        throw e;
                    }
                }
            }
        },
        747: function (e) {
            e.exports = require('fs');
        },
        753: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = r(385);
            var n = r(796);
            var s = _interopDefault(r(696));
            var o = _interopDefault(r(454));
            var a = r(463);
            const u = '5.4.7';
            function getBufferResponse(e) {
                return e.arrayBuffer();
            }
            function fetchWrapper(e) {
                if (s(e.body) || Array.isArray(e.body)) {
                    e.body = JSON.stringify(e.body);
                }
                let t = {};
                let r;
                let i;
                const n = (e.request && e.request.fetch) || o;
                return n(
                    e.url,
                    Object.assign(
                        {method: e.method, body: e.body, headers: e.headers, redirect: e.redirect},
                        e.request,
                    ),
                )
                    .then((n) => {
                        i = n.url;
                        r = n.status;
                        for (const e of n.headers) {
                            t[e[0]] = e[1];
                        }
                        if (r === 204 || r === 205) {
                            return;
                        }
                        if (e.method === 'HEAD') {
                            if (r < 400) {
                                return;
                            }
                            throw new a.RequestError(n.statusText, r, {headers: t, request: e});
                        }
                        if (r === 304) {
                            throw new a.RequestError('Not modified', r, {headers: t, request: e});
                        }
                        if (r >= 400) {
                            return n.text().then((i) => {
                                const n = new a.RequestError(i, r, {headers: t, request: e});
                                try {
                                    let e = JSON.parse(n.message);
                                    Object.assign(n, e);
                                    let t = e.errors;
                                    n.message = n.message + ': ' + t.map(JSON.stringify).join(', ');
                                } catch (e) {}
                                throw n;
                            });
                        }
                        const s = n.headers.get('content-type');
                        if (/application\/json/.test(s)) {
                            return n.json();
                        }
                        if (!s || /^text\/|charset=utf-8$/.test(s)) {
                            return n.text();
                        }
                        return getBufferResponse(n);
                    })
                    .then((e) => {
                        return {status: r, url: i, headers: t, data: e};
                    })
                    .catch((r) => {
                        if (r instanceof a.RequestError) {
                            throw r;
                        }
                        throw new a.RequestError(r.message, 500, {headers: t, request: e});
                    });
            }
            function withDefaults(e, t) {
                const r = e.defaults(t);
                const i = function (e, t) {
                    const i = r.merge(e, t);
                    if (!i.request || !i.request.hook) {
                        return fetchWrapper(r.parse(i));
                    }
                    const n = (e, t) => {
                        return fetchWrapper(r.parse(r.merge(e, t)));
                    };
                    Object.assign(n, {endpoint: r, defaults: withDefaults.bind(null, r)});
                    return i.request.hook(n, i);
                };
                return Object.assign(i, {endpoint: r, defaults: withDefaults.bind(null, r)});
            }
            const p = withDefaults(i.endpoint, {
                headers: {'user-agent': `octokit-request.js/${u} ${n.getUserAgent()}`},
            });
            t.request = p;
        },
        761: function (e) {
            e.exports = require('zlib');
        },
        768: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function _interopDefault(e) {
                return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
            }
            var i = _interopDefault(r(2));
            function getUserAgent() {
                try {
                    return `Node.js/${process.version.substr(1)} (${i()}; ${process.arch})`;
                } catch (e) {
                    if (/wmic os get Caption/.test(e.message)) {
                        return 'Windows <version undetectable>';
                    }
                    throw e;
                }
            }
            t.getUserAgent = getUserAgent;
        },
        777: function (e, t, r) {
            e.exports = getFirstPage;
            const i = r(265);
            function getFirstPage(e, t, r) {
                return i(e, t, 'first', r);
            }
        },
        784: function (e, t, r) {
            if (
                typeof process === 'undefined' ||
                process.type === 'renderer' ||
                process.browser === true ||
                process.__nwjs
            ) {
                e.exports = r(794);
            } else {
                e.exports = r(81);
            }
        },
        794: function (e, t, r) {
            t.log = log;
            t.formatArgs = formatArgs;
            t.save = save;
            t.load = load;
            t.useColors = useColors;
            t.storage = localstorage();
            t.colors = [
                '#0000CC',
                '#0000FF',
                '#0033CC',
                '#0033FF',
                '#0066CC',
                '#0066FF',
                '#0099CC',
                '#0099FF',
                '#00CC00',
                '#00CC33',
                '#00CC66',
                '#00CC99',
                '#00CCCC',
                '#00CCFF',
                '#3300CC',
                '#3300FF',
                '#3333CC',
                '#3333FF',
                '#3366CC',
                '#3366FF',
                '#3399CC',
                '#3399FF',
                '#33CC00',
                '#33CC33',
                '#33CC66',
                '#33CC99',
                '#33CCCC',
                '#33CCFF',
                '#6600CC',
                '#6600FF',
                '#6633CC',
                '#6633FF',
                '#66CC00',
                '#66CC33',
                '#9900CC',
                '#9900FF',
                '#9933CC',
                '#9933FF',
                '#99CC00',
                '#99CC33',
                '#CC0000',
                '#CC0033',
                '#CC0066',
                '#CC0099',
                '#CC00CC',
                '#CC00FF',
                '#CC3300',
                '#CC3333',
                '#CC3366',
                '#CC3399',
                '#CC33CC',
                '#CC33FF',
                '#CC6600',
                '#CC6633',
                '#CC9900',
                '#CC9933',
                '#CCCC00',
                '#CCCC33',
                '#FF0000',
                '#FF0033',
                '#FF0066',
                '#FF0099',
                '#FF00CC',
                '#FF00FF',
                '#FF3300',
                '#FF3333',
                '#FF3366',
                '#FF3399',
                '#FF33CC',
                '#FF33FF',
                '#FF6600',
                '#FF6633',
                '#FF9900',
                '#FF9933',
                '#FFCC00',
                '#FFCC33',
            ];
            function useColors() {
                if (
                    typeof window !== 'undefined' &&
                    window.process &&
                    (window.process.type === 'renderer' || window.process.__nwjs)
                ) {
                    return true;
                }
                if (
                    typeof navigator !== 'undefined' &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
                ) {
                    return false;
                }
                return (
                    (typeof document !== 'undefined' &&
                        document.documentElement &&
                        document.documentElement.style &&
                        document.documentElement.style.WebkitAppearance) ||
                    (typeof window !== 'undefined' &&
                        window.console &&
                        (window.console.firebug || (window.console.exception && window.console.table))) ||
                    (typeof navigator !== 'undefined' &&
                        navigator.userAgent &&
                        navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                        parseInt(RegExp.$1, 10) >= 31) ||
                    (typeof navigator !== 'undefined' &&
                        navigator.userAgent &&
                        navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                );
            }
            function formatArgs(t) {
                t[0] =
                    (this.useColors ? '%c' : '') +
                    this.namespace +
                    (this.useColors ? ' %c' : ' ') +
                    t[0] +
                    (this.useColors ? '%c ' : ' ') +
                    '+' +
                    e.exports.humanize(this.diff);
                if (!this.useColors) {
                    return;
                }
                const r = 'color: ' + this.color;
                t.splice(1, 0, r, 'color: inherit');
                let i = 0;
                let n = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e) => {
                    if (e === '%%') {
                        return;
                    }
                    i++;
                    if (e === '%c') {
                        n = i;
                    }
                });
                t.splice(n, 0, r);
            }
            function log(...e) {
                return typeof console === 'object' && console.log && console.log(...e);
            }
            function save(e) {
                try {
                    if (e) {
                        t.storage.setItem('debug', e);
                    } else {
                        t.storage.removeItem('debug');
                    }
                } catch (e) {}
            }
            function load() {
                let e;
                try {
                    e = t.storage.getItem('debug');
                } catch (e) {}
                if (!e && typeof process !== 'undefined' && 'env' in process) {
                    e = process.env.DEBUG;
                }
                return e;
            }
            function localstorage() {
                try {
                    return localStorage;
                } catch (e) {}
            }
            e.exports = r(486)(t);
            const {formatters: i} = e.exports;
            i.j = function (e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return '[UnexpectedJSONParseError]: ' + e.message;
                }
            };
        },
        796: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            function getUserAgent() {
                if (typeof navigator === 'object' && 'userAgent' in navigator) {
                    return navigator.userAgent;
                }
                if (typeof process === 'object' && 'version' in process) {
                    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
                }
                return '<environment undetectable>';
            }
            t.getUserAgent = getUserAgent;
        },
        804: function (e, t, r) {
            'use strict';
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
                    t['default'] = e;
                    return t;
                };
            Object.defineProperty(t, '__esModule', {value: true});
            const n = i(r(87));
            function issueCommand(e, t, r) {
                const i = new Command(e, t, r);
                process.stdout.write(i.toString() + n.EOL);
            }
            t.issueCommand = issueCommand;
            function issue(e, t = '') {
                issueCommand(e, {}, t);
            }
            t.issue = issue;
            const s = '::';
            class Command {
                constructor(e, t, r) {
                    if (!e) {
                        e = 'missing.command';
                    }
                    this.command = e;
                    this.properties = t;
                    this.message = r;
                }
                toString() {
                    let e = s + this.command;
                    if (this.properties && Object.keys(this.properties).length > 0) {
                        e += ' ';
                        let t = true;
                        for (const r in this.properties) {
                            if (this.properties.hasOwnProperty(r)) {
                                const i = this.properties[r];
                                if (i) {
                                    if (t) {
                                        t = false;
                                    } else {
                                        e += ',';
                                    }
                                    e += `${r}=${escapeProperty(i)}`;
                                }
                            }
                        }
                    }
                    e += `${s}${escapeData(this.message)}`;
                    return e;
                }
            }
            function toCommandValue(e) {
                if (e === null || e === undefined) {
                    return '';
                } else if (typeof e === 'string' || e instanceof String) {
                    return e;
                }
                return JSON.stringify(e);
            }
            t.toCommandValue = toCommandValue;
            function escapeData(e) {
                return toCommandValue(e).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
            }
            function escapeProperty(e) {
                return toCommandValue(e)
                    .replace(/%/g, '%25')
                    .replace(/\r/g, '%0D')
                    .replace(/\n/g, '%0A')
                    .replace(/:/g, '%3A')
                    .replace(/,/g, '%2C');
            }
        },
        813: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            async function auth(e) {
                const t = e.split(/\./).length === 3 ? 'app' : /^v\d+\./.test(e) ? 'installation' : 'oauth';
                return {type: 'token', token: e, tokenType: t};
            }
            function withAuthorizationPrefix(e) {
                if (e.split(/\./).length === 3) {
                    return `bearer ${e}`;
                }
                return `token ${e}`;
            }
            async function hook(e, t, r, i) {
                const n = t.endpoint.merge(r, i);
                n.headers.authorization = withAuthorizationPrefix(e);
                return t(n);
            }
            const r = function createTokenAuth(e) {
                if (!e) {
                    throw new Error('[@octokit/auth-token] No token passed to createTokenAuth');
                }
                if (typeof e !== 'string') {
                    throw new Error('[@octokit/auth-token] Token passed to createTokenAuth is not a string');
                }
                e = e.replace(/^(token|bearer) +/i, '');
                return Object.assign(auth.bind(null, e), {hook: hook.bind(null, e)});
            };
            t.createTokenAuth = r;
        },
        814: function (e, t, r) {
            e.exports = which;
            which.sync = whichSync;
            var i = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
            var n = r(622);
            var s = i ? ';' : ':';
            var o = r(742);
            function getNotFoundError(e) {
                var t = new Error('not found: ' + e);
                t.code = 'ENOENT';
                return t;
            }
            function getPathInfo(e, t) {
                var r = t.colon || s;
                var n = t.path || process.env.PATH || '';
                var o = [''];
                n = n.split(r);
                var a = '';
                if (i) {
                    n.unshift(process.cwd());
                    a = t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM';
                    o = a.split(r);
                    if (e.indexOf('.') !== -1 && o[0] !== '') o.unshift('');
                }
                if (e.match(/\//) || (i && e.match(/\\/))) n = [''];
                return {env: n, ext: o, extExe: a};
            }
            function which(e, t, r) {
                if (typeof t === 'function') {
                    r = t;
                    t = {};
                }
                var i = getPathInfo(e, t);
                var s = i.env;
                var a = i.ext;
                var u = i.extExe;
                var p = [];
                (function F(i, c) {
                    if (i === c) {
                        if (t.all && p.length) return r(null, p);
                        else return r(getNotFoundError(e));
                    }
                    var d = s[i];
                    if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1);
                    var l = n.join(d, e);
                    if (!d && /^\.[\\\/]/.test(e)) {
                        l = e.slice(0, 2) + l;
                    }
                    (function E(e, n) {
                        if (e === n) return F(i + 1, c);
                        var s = a[e];
                        o(l + s, {pathExt: u}, function (i, o) {
                            if (!i && o) {
                                if (t.all) p.push(l + s);
                                else return r(null, l + s);
                            }
                            return E(e + 1, n);
                        });
                    })(0, a.length);
                })(0, s.length);
            }
            function whichSync(e, t) {
                t = t || {};
                var r = getPathInfo(e, t);
                var i = r.env;
                var s = r.ext;
                var a = r.extExe;
                var u = [];
                for (var p = 0, c = i.length; p < c; p++) {
                    var d = i[p];
                    if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1);
                    var l = n.join(d, e);
                    if (!d && /^\.[\\\/]/.test(e)) {
                        l = e.slice(0, 2) + l;
                    }
                    for (var g = 0, m = s.length; g < m; g++) {
                        var h = l + s[g];
                        var y;
                        try {
                            y = o.sync(h, {pathExt: a});
                            if (y) {
                                if (t.all) u.push(h);
                                else return h;
                            }
                        } catch (e) {}
                    }
                }
                if (t.all && u.length) return u;
                if (t.nothrow) return null;
                throw getNotFoundError(e);
            }
        },
        816: function (e) {
            'use strict';
            e.exports = /^#!.*/;
        },
        818: function (e, t, r) {
            e.exports = isexe;
            isexe.sync = sync;
            var i = r(747);
            function checkPathExt(e, t) {
                var r = t.pathExt !== undefined ? t.pathExt : process.env.PATHEXT;
                if (!r) {
                    return true;
                }
                r = r.split(';');
                if (r.indexOf('') !== -1) {
                    return true;
                }
                for (var i = 0; i < r.length; i++) {
                    var n = r[i].toLowerCase();
                    if (n && e.substr(-n.length).toLowerCase() === n) {
                        return true;
                    }
                }
                return false;
            }
            function checkStat(e, t, r) {
                if (!e.isSymbolicLink() && !e.isFile()) {
                    return false;
                }
                return checkPathExt(t, r);
            }
            function isexe(e, t, r) {
                i.stat(e, function (i, n) {
                    r(i, i ? false : checkStat(n, e, t));
                });
            }
            function sync(e, t) {
                return checkStat(i.statSync(e), e, t);
            }
        },
        826: function (e, t, r) {
            var i = r(139);
            var n = r(722);
            function v4(e, t, r) {
                var s = (t && r) || 0;
                if (typeof e == 'string') {
                    t = e === 'binary' ? new Array(16) : null;
                    e = null;
                }
                e = e || {};
                var o = e.random || (e.rng || i)();
                o[6] = (o[6] & 15) | 64;
                o[8] = (o[8] & 63) | 128;
                if (t) {
                    for (var a = 0; a < 16; ++a) {
                        t[s + a] = o[a];
                    }
                }
                return t || n(o);
            }
            e.exports = v4;
        },
        835: function (e) {
            e.exports = require('url');
        },
        842: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            var i = r(692);
            var n = {
                actions: {
                    cancelWorkflowRun: {
                        method: 'POST',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id/cancel',
                    },
                    createOrUpdateSecretForRepo: {
                        method: 'PUT',
                        params: {
                            encrypted_value: {type: 'string'},
                            key_id: {type: 'string'},
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/secrets/:name',
                    },
                    createRegistrationToken: {
                        method: 'POST',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/actions/runners/registration-token',
                    },
                    createRemoveToken: {
                        method: 'POST',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/actions/runners/remove-token',
                    },
                    deleteArtifact: {
                        method: 'DELETE',
                        params: {
                            artifact_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/artifacts/:artifact_id',
                    },
                    deleteSecretFromRepo: {
                        method: 'DELETE',
                        params: {
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/secrets/:name',
                    },
                    downloadArtifact: {
                        method: 'GET',
                        params: {
                            archive_format: {required: true, type: 'string'},
                            artifact_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format',
                    },
                    getArtifact: {
                        method: 'GET',
                        params: {
                            artifact_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/artifacts/:artifact_id',
                    },
                    getPublicKey: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/actions/secrets/public-key',
                    },
                    getSecret: {
                        method: 'GET',
                        params: {
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/secrets/:name',
                    },
                    getSelfHostedRunner: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            runner_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runners/:runner_id',
                    },
                    getWorkflow: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            workflow_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/workflows/:workflow_id',
                    },
                    getWorkflowJob: {
                        method: 'GET',
                        params: {
                            job_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/jobs/:job_id',
                    },
                    getWorkflowRun: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id',
                    },
                    listDownloadsForSelfHostedRunnerApplication: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/actions/runners/downloads',
                    },
                    listJobsForWorkflowRun: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id/jobs',
                    },
                    listRepoWorkflowRuns: {
                        method: 'GET',
                        params: {
                            actor: {type: 'string'},
                            branch: {type: 'string'},
                            event: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            status: {enum: ['completed', 'status', 'conclusion'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/runs',
                    },
                    listRepoWorkflows: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/workflows',
                    },
                    listSecretsForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/secrets',
                    },
                    listSelfHostedRunnersForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/runners',
                    },
                    listWorkflowJobLogs: {
                        method: 'GET',
                        params: {
                            job_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/actions/jobs/:job_id/logs',
                    },
                    listWorkflowRunArtifacts: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id/artifacts',
                    },
                    listWorkflowRunLogs: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id/logs',
                    },
                    listWorkflowRuns: {
                        method: 'GET',
                        params: {
                            actor: {type: 'string'},
                            branch: {type: 'string'},
                            event: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            status: {enum: ['completed', 'status', 'conclusion'], type: 'string'},
                            workflow_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/workflows/:workflow_id/runs',
                    },
                    reRunWorkflow: {
                        method: 'POST',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            run_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runs/:run_id/rerun',
                    },
                    removeSelfHostedRunner: {
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            runner_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/actions/runners/:runner_id',
                    },
                },
                activity: {
                    checkStarringRepo: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/user/starred/:owner/:repo',
                    },
                    deleteRepoSubscription: {
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/subscription',
                    },
                    deleteThreadSubscription: {
                        method: 'DELETE',
                        params: {thread_id: {required: true, type: 'integer'}},
                        url: '/notifications/threads/:thread_id/subscription',
                    },
                    getRepoSubscription: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/subscription',
                    },
                    getThread: {
                        method: 'GET',
                        params: {thread_id: {required: true, type: 'integer'}},
                        url: '/notifications/threads/:thread_id',
                    },
                    getThreadSubscription: {
                        method: 'GET',
                        params: {thread_id: {required: true, type: 'integer'}},
                        url: '/notifications/threads/:thread_id/subscription',
                    },
                    listEventsForOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/events/orgs/:org',
                    },
                    listEventsForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/events',
                    },
                    listFeeds: {method: 'GET', params: {}, url: '/feeds'},
                    listNotifications: {
                        method: 'GET',
                        params: {
                            all: {type: 'boolean'},
                            before: {type: 'string'},
                            page: {type: 'integer'},
                            participating: {type: 'boolean'},
                            per_page: {type: 'integer'},
                            since: {type: 'string'},
                        },
                        url: '/notifications',
                    },
                    listNotificationsForRepo: {
                        method: 'GET',
                        params: {
                            all: {type: 'boolean'},
                            before: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            participating: {type: 'boolean'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/notifications',
                    },
                    listPublicEvents: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/events',
                    },
                    listPublicEventsForOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/events',
                    },
                    listPublicEventsForRepoNetwork: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/networks/:owner/:repo/events',
                    },
                    listPublicEventsForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/events/public',
                    },
                    listReceivedEventsForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/received_events',
                    },
                    listReceivedPublicEventsForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/received_events/public',
                    },
                    listRepoEvents: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/events',
                    },
                    listReposStarredByAuthenticatedUser: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/user/starred',
                    },
                    listReposStarredByUser: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/starred',
                    },
                    listReposWatchedByUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/subscriptions',
                    },
                    listStargazersForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/stargazers',
                    },
                    listWatchedReposForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/subscriptions',
                    },
                    listWatchersForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/subscribers',
                    },
                    markAsRead: {method: 'PUT', params: {last_read_at: {type: 'string'}}, url: '/notifications'},
                    markNotificationsAsReadForRepo: {
                        method: 'PUT',
                        params: {
                            last_read_at: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/notifications',
                    },
                    markThreadAsRead: {
                        method: 'PATCH',
                        params: {thread_id: {required: true, type: 'integer'}},
                        url: '/notifications/threads/:thread_id',
                    },
                    setRepoSubscription: {
                        method: 'PUT',
                        params: {
                            ignored: {type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            subscribed: {type: 'boolean'},
                        },
                        url: '/repos/:owner/:repo/subscription',
                    },
                    setThreadSubscription: {
                        method: 'PUT',
                        params: {ignored: {type: 'boolean'}, thread_id: {required: true, type: 'integer'}},
                        url: '/notifications/threads/:thread_id/subscription',
                    },
                    starRepo: {
                        method: 'PUT',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/user/starred/:owner/:repo',
                    },
                    unstarRepo: {
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/user/starred/:owner/:repo',
                    },
                },
                apps: {
                    addRepoToInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'PUT',
                        params: {
                            installation_id: {required: true, type: 'integer'},
                            repository_id: {required: true, type: 'integer'},
                        },
                        url: '/user/installations/:installation_id/repositories/:repository_id',
                    },
                    checkAccountIsAssociatedWithAny: {
                        method: 'GET',
                        params: {account_id: {required: true, type: 'integer'}},
                        url: '/marketplace_listing/accounts/:account_id',
                    },
                    checkAccountIsAssociatedWithAnyStubbed: {
                        method: 'GET',
                        params: {account_id: {required: true, type: 'integer'}},
                        url: '/marketplace_listing/stubbed/accounts/:account_id',
                    },
                    checkAuthorization: {
                        deprecated:
                            'octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization',
                        method: 'GET',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    checkToken: {
                        headers: {accept: 'application/vnd.github.doctor-strange-preview+json'},
                        method: 'POST',
                        params: {access_token: {type: 'string'}, client_id: {required: true, type: 'string'}},
                        url: '/applications/:client_id/token',
                    },
                    createContentAttachment: {
                        headers: {accept: 'application/vnd.github.corsair-preview+json'},
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            content_reference_id: {required: true, type: 'integer'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/content_references/:content_reference_id/attachments',
                    },
                    createFromManifest: {
                        headers: {accept: 'application/vnd.github.fury-preview+json'},
                        method: 'POST',
                        params: {code: {required: true, type: 'string'}},
                        url: '/app-manifests/:code/conversions',
                    },
                    createInstallationToken: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'POST',
                        params: {
                            installation_id: {required: true, type: 'integer'},
                            permissions: {type: 'object'},
                            repository_ids: {type: 'integer[]'},
                        },
                        url: '/app/installations/:installation_id/access_tokens',
                    },
                    deleteAuthorization: {
                        headers: {accept: 'application/vnd.github.doctor-strange-preview+json'},
                        method: 'DELETE',
                        params: {access_token: {type: 'string'}, client_id: {required: true, type: 'string'}},
                        url: '/applications/:client_id/grant',
                    },
                    deleteInstallation: {
                        headers: {
                            accept:
                                'application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json',
                        },
                        method: 'DELETE',
                        params: {installation_id: {required: true, type: 'integer'}},
                        url: '/app/installations/:installation_id',
                    },
                    deleteToken: {
                        headers: {accept: 'application/vnd.github.doctor-strange-preview+json'},
                        method: 'DELETE',
                        params: {access_token: {type: 'string'}, client_id: {required: true, type: 'string'}},
                        url: '/applications/:client_id/token',
                    },
                    findOrgInstallation: {
                        deprecated:
                            'octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)',
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}},
                        url: '/orgs/:org/installation',
                    },
                    findRepoInstallation: {
                        deprecated:
                            'octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)',
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/installation',
                    },
                    findUserInstallation: {
                        deprecated:
                            'octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)',
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {username: {required: true, type: 'string'}},
                        url: '/users/:username/installation',
                    },
                    getAuthenticated: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {},
                        url: '/app',
                    },
                    getBySlug: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {app_slug: {required: true, type: 'string'}},
                        url: '/apps/:app_slug',
                    },
                    getInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {installation_id: {required: true, type: 'integer'}},
                        url: '/app/installations/:installation_id',
                    },
                    getOrgInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}},
                        url: '/orgs/:org/installation',
                    },
                    getRepoInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/installation',
                    },
                    getUserInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {username: {required: true, type: 'string'}},
                        url: '/users/:username/installation',
                    },
                    listAccountsUserOrOrgOnPlan: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            plan_id: {required: true, type: 'integer'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/marketplace_listing/plans/:plan_id/accounts',
                    },
                    listAccountsUserOrOrgOnPlanStubbed: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            plan_id: {required: true, type: 'integer'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/marketplace_listing/stubbed/plans/:plan_id/accounts',
                    },
                    listInstallationReposForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {
                            installation_id: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/user/installations/:installation_id/repositories',
                    },
                    listInstallations: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/app/installations',
                    },
                    listInstallationsForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/installations',
                    },
                    listMarketplacePurchasesForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/marketplace_purchases',
                    },
                    listMarketplacePurchasesForAuthenticatedUserStubbed: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/marketplace_purchases/stubbed',
                    },
                    listPlans: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/marketplace_listing/plans',
                    },
                    listPlansStubbed: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/marketplace_listing/stubbed/plans',
                    },
                    listRepos: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/installation/repositories',
                    },
                    removeRepoFromInstallation: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'DELETE',
                        params: {
                            installation_id: {required: true, type: 'integer'},
                            repository_id: {required: true, type: 'integer'},
                        },
                        url: '/user/installations/:installation_id/repositories/:repository_id',
                    },
                    resetAuthorization: {
                        deprecated:
                            'octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization',
                        method: 'POST',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    resetToken: {
                        headers: {accept: 'application/vnd.github.doctor-strange-preview+json'},
                        method: 'PATCH',
                        params: {access_token: {type: 'string'}, client_id: {required: true, type: 'string'}},
                        url: '/applications/:client_id/token',
                    },
                    revokeAuthorizationForApplication: {
                        deprecated:
                            'octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application',
                        method: 'DELETE',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    revokeGrantForApplication: {
                        deprecated:
                            'octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application',
                        method: 'DELETE',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/grants/:access_token',
                    },
                    revokeInstallationToken: {
                        headers: {accept: 'application/vnd.github.gambit-preview+json'},
                        method: 'DELETE',
                        params: {},
                        url: '/installation/token',
                    },
                },
                checks: {
                    create: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'POST',
                        params: {
                            actions: {type: 'object[]'},
                            'actions[].description': {required: true, type: 'string'},
                            'actions[].identifier': {required: true, type: 'string'},
                            'actions[].label': {required: true, type: 'string'},
                            completed_at: {type: 'string'},
                            conclusion: {
                                enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
                                type: 'string',
                            },
                            details_url: {type: 'string'},
                            external_id: {type: 'string'},
                            head_sha: {required: true, type: 'string'},
                            name: {required: true, type: 'string'},
                            output: {type: 'object'},
                            'output.annotations': {type: 'object[]'},
                            'output.annotations[].annotation_level': {
                                enum: ['notice', 'warning', 'failure'],
                                required: true,
                                type: 'string',
                            },
                            'output.annotations[].end_column': {type: 'integer'},
                            'output.annotations[].end_line': {required: true, type: 'integer'},
                            'output.annotations[].message': {required: true, type: 'string'},
                            'output.annotations[].path': {required: true, type: 'string'},
                            'output.annotations[].raw_details': {type: 'string'},
                            'output.annotations[].start_column': {type: 'integer'},
                            'output.annotations[].start_line': {required: true, type: 'integer'},
                            'output.annotations[].title': {type: 'string'},
                            'output.images': {type: 'object[]'},
                            'output.images[].alt': {required: true, type: 'string'},
                            'output.images[].caption': {type: 'string'},
                            'output.images[].image_url': {required: true, type: 'string'},
                            'output.summary': {required: true, type: 'string'},
                            'output.text': {type: 'string'},
                            'output.title': {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            started_at: {type: 'string'},
                            status: {enum: ['queued', 'in_progress', 'completed'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-runs',
                    },
                    createSuite: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'POST',
                        params: {
                            head_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-suites',
                    },
                    get: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            check_run_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-runs/:check_run_id',
                    },
                    getSuite: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            check_suite_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-suites/:check_suite_id',
                    },
                    listAnnotations: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            check_run_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-runs/:check_run_id/annotations',
                    },
                    listForRef: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            check_name: {type: 'string'},
                            filter: {enum: ['latest', 'all'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            status: {enum: ['queued', 'in_progress', 'completed'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref/check-runs',
                    },
                    listForSuite: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            check_name: {type: 'string'},
                            check_suite_id: {required: true, type: 'integer'},
                            filter: {enum: ['latest', 'all'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            status: {enum: ['queued', 'in_progress', 'completed'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-suites/:check_suite_id/check-runs',
                    },
                    listSuitesForRef: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'GET',
                        params: {
                            app_id: {type: 'integer'},
                            check_name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref/check-suites',
                    },
                    rerequestSuite: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'POST',
                        params: {
                            check_suite_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-suites/:check_suite_id/rerequest',
                    },
                    setSuitesPreferences: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'PATCH',
                        params: {
                            auto_trigger_checks: {type: 'object[]'},
                            'auto_trigger_checks[].app_id': {required: true, type: 'integer'},
                            'auto_trigger_checks[].setting': {required: true, type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-suites/preferences',
                    },
                    update: {
                        headers: {accept: 'application/vnd.github.antiope-preview+json'},
                        method: 'PATCH',
                        params: {
                            actions: {type: 'object[]'},
                            'actions[].description': {required: true, type: 'string'},
                            'actions[].identifier': {required: true, type: 'string'},
                            'actions[].label': {required: true, type: 'string'},
                            check_run_id: {required: true, type: 'integer'},
                            completed_at: {type: 'string'},
                            conclusion: {
                                enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
                                type: 'string',
                            },
                            details_url: {type: 'string'},
                            external_id: {type: 'string'},
                            name: {type: 'string'},
                            output: {type: 'object'},
                            'output.annotations': {type: 'object[]'},
                            'output.annotations[].annotation_level': {
                                enum: ['notice', 'warning', 'failure'],
                                required: true,
                                type: 'string',
                            },
                            'output.annotations[].end_column': {type: 'integer'},
                            'output.annotations[].end_line': {required: true, type: 'integer'},
                            'output.annotations[].message': {required: true, type: 'string'},
                            'output.annotations[].path': {required: true, type: 'string'},
                            'output.annotations[].raw_details': {type: 'string'},
                            'output.annotations[].start_column': {type: 'integer'},
                            'output.annotations[].start_line': {required: true, type: 'integer'},
                            'output.annotations[].title': {type: 'string'},
                            'output.images': {type: 'object[]'},
                            'output.images[].alt': {required: true, type: 'string'},
                            'output.images[].caption': {type: 'string'},
                            'output.images[].image_url': {required: true, type: 'string'},
                            'output.summary': {required: true, type: 'string'},
                            'output.text': {type: 'string'},
                            'output.title': {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            started_at: {type: 'string'},
                            status: {enum: ['queued', 'in_progress', 'completed'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/check-runs/:check_run_id',
                    },
                },
                codesOfConduct: {
                    getConductCode: {
                        headers: {accept: 'application/vnd.github.scarlet-witch-preview+json'},
                        method: 'GET',
                        params: {key: {required: true, type: 'string'}},
                        url: '/codes_of_conduct/:key',
                    },
                    getForRepo: {
                        headers: {accept: 'application/vnd.github.scarlet-witch-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/community/code_of_conduct',
                    },
                    listConductCodes: {
                        headers: {accept: 'application/vnd.github.scarlet-witch-preview+json'},
                        method: 'GET',
                        params: {},
                        url: '/codes_of_conduct',
                    },
                },
                emojis: {get: {method: 'GET', params: {}, url: '/emojis'}},
                gists: {
                    checkIsStarred: {
                        method: 'GET',
                        params: {gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/star',
                    },
                    create: {
                        method: 'POST',
                        params: {
                            description: {type: 'string'},
                            files: {required: true, type: 'object'},
                            'files.content': {type: 'string'},
                            public: {type: 'boolean'},
                        },
                        url: '/gists',
                    },
                    createComment: {
                        method: 'POST',
                        params: {body: {required: true, type: 'string'}, gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/comments',
                    },
                    delete: {
                        method: 'DELETE',
                        params: {gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id',
                    },
                    deleteComment: {
                        method: 'DELETE',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            gist_id: {required: true, type: 'string'},
                        },
                        url: '/gists/:gist_id/comments/:comment_id',
                    },
                    fork: {
                        method: 'POST',
                        params: {gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/forks',
                    },
                    get: {method: 'GET', params: {gist_id: {required: true, type: 'string'}}, url: '/gists/:gist_id'},
                    getComment: {
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            gist_id: {required: true, type: 'string'},
                        },
                        url: '/gists/:gist_id/comments/:comment_id',
                    },
                    getRevision: {
                        method: 'GET',
                        params: {gist_id: {required: true, type: 'string'}, sha: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/:sha',
                    },
                    list: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'string'}},
                        url: '/gists',
                    },
                    listComments: {
                        method: 'GET',
                        params: {
                            gist_id: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/gists/:gist_id/comments',
                    },
                    listCommits: {
                        method: 'GET',
                        params: {
                            gist_id: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/gists/:gist_id/commits',
                    },
                    listForks: {
                        method: 'GET',
                        params: {
                            gist_id: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/gists/:gist_id/forks',
                    },
                    listPublic: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'string'}},
                        url: '/gists/public',
                    },
                    listPublicForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            since: {type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/gists',
                    },
                    listStarred: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'string'}},
                        url: '/gists/starred',
                    },
                    star: {
                        method: 'PUT',
                        params: {gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/star',
                    },
                    unstar: {
                        method: 'DELETE',
                        params: {gist_id: {required: true, type: 'string'}},
                        url: '/gists/:gist_id/star',
                    },
                    update: {
                        method: 'PATCH',
                        params: {
                            description: {type: 'string'},
                            files: {type: 'object'},
                            'files.content': {type: 'string'},
                            'files.filename': {type: 'string'},
                            gist_id: {required: true, type: 'string'},
                        },
                        url: '/gists/:gist_id',
                    },
                    updateComment: {
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_id: {required: true, type: 'integer'},
                            gist_id: {required: true, type: 'string'},
                        },
                        url: '/gists/:gist_id/comments/:comment_id',
                    },
                },
                git: {
                    createBlob: {
                        method: 'POST',
                        params: {
                            content: {required: true, type: 'string'},
                            encoding: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/blobs',
                    },
                    createCommit: {
                        method: 'POST',
                        params: {
                            author: {type: 'object'},
                            'author.date': {type: 'string'},
                            'author.email': {type: 'string'},
                            'author.name': {type: 'string'},
                            committer: {type: 'object'},
                            'committer.date': {type: 'string'},
                            'committer.email': {type: 'string'},
                            'committer.name': {type: 'string'},
                            message: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            parents: {required: true, type: 'string[]'},
                            repo: {required: true, type: 'string'},
                            signature: {type: 'string'},
                            tree: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/commits',
                    },
                    createRef: {
                        method: 'POST',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/refs',
                    },
                    createTag: {
                        method: 'POST',
                        params: {
                            message: {required: true, type: 'string'},
                            object: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            tag: {required: true, type: 'string'},
                            tagger: {type: 'object'},
                            'tagger.date': {type: 'string'},
                            'tagger.email': {type: 'string'},
                            'tagger.name': {type: 'string'},
                            type: {enum: ['commit', 'tree', 'blob'], required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/tags',
                    },
                    createTree: {
                        method: 'POST',
                        params: {
                            base_tree: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            tree: {required: true, type: 'object[]'},
                            'tree[].content': {type: 'string'},
                            'tree[].mode': {enum: ['100644', '100755', '040000', '160000', '120000'], type: 'string'},
                            'tree[].path': {type: 'string'},
                            'tree[].sha': {allowNull: true, type: 'string'},
                            'tree[].type': {enum: ['blob', 'tree', 'commit'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/trees',
                    },
                    deleteRef: {
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/refs/:ref',
                    },
                    getBlob: {
                        method: 'GET',
                        params: {
                            file_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/blobs/:file_sha',
                    },
                    getCommit: {
                        method: 'GET',
                        params: {
                            commit_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/commits/:commit_sha',
                    },
                    getRef: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/ref/:ref',
                    },
                    getTag: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            tag_sha: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/tags/:tag_sha',
                    },
                    getTree: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            recursive: {enum: ['1'], type: 'integer'},
                            repo: {required: true, type: 'string'},
                            tree_sha: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/trees/:tree_sha',
                    },
                    listMatchingRefs: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/matching-refs/:ref',
                    },
                    listRefs: {
                        method: 'GET',
                        params: {
                            namespace: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/refs/:namespace',
                    },
                    updateRef: {
                        method: 'PATCH',
                        params: {
                            force: {type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/git/refs/:ref',
                    },
                },
                gitignore: {
                    getTemplate: {
                        method: 'GET',
                        params: {name: {required: true, type: 'string'}},
                        url: '/gitignore/templates/:name',
                    },
                    listTemplates: {method: 'GET', params: {}, url: '/gitignore/templates'},
                },
                interactions: {
                    addOrUpdateRestrictionsForOrg: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'PUT',
                        params: {
                            limit: {
                                enum: ['existing_users', 'contributors_only', 'collaborators_only'],
                                required: true,
                                type: 'string',
                            },
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/interaction-limits',
                    },
                    addOrUpdateRestrictionsForRepo: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'PUT',
                        params: {
                            limit: {
                                enum: ['existing_users', 'contributors_only', 'collaborators_only'],
                                required: true,
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/interaction-limits',
                    },
                    getRestrictionsForOrg: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}},
                        url: '/orgs/:org/interaction-limits',
                    },
                    getRestrictionsForRepo: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/interaction-limits',
                    },
                    removeRestrictionsForOrg: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}},
                        url: '/orgs/:org/interaction-limits',
                    },
                    removeRestrictionsForRepo: {
                        headers: {accept: 'application/vnd.github.sombra-preview+json'},
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/interaction-limits',
                    },
                },
                issues: {
                    addAssignees: {
                        method: 'POST',
                        params: {
                            assignees: {type: 'string[]'},
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/assignees',
                    },
                    addLabels: {
                        method: 'POST',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            labels: {required: true, type: 'string[]'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/labels',
                    },
                    checkAssignee: {
                        method: 'GET',
                        params: {
                            assignee: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/assignees/:assignee',
                    },
                    create: {
                        method: 'POST',
                        params: {
                            assignee: {type: 'string'},
                            assignees: {type: 'string[]'},
                            body: {type: 'string'},
                            labels: {type: 'string[]'},
                            milestone: {type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues',
                    },
                    createComment: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/comments',
                    },
                    createLabel: {
                        method: 'POST',
                        params: {
                            color: {required: true, type: 'string'},
                            description: {type: 'string'},
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/labels',
                    },
                    createMilestone: {
                        method: 'POST',
                        params: {
                            description: {type: 'string'},
                            due_on: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            state: {enum: ['open', 'closed'], type: 'string'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones',
                    },
                    deleteComment: {
                        method: 'DELETE',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments/:comment_id',
                    },
                    deleteLabel: {
                        method: 'DELETE',
                        params: {
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/labels/:name',
                    },
                    deleteMilestone: {
                        method: 'DELETE',
                        params: {
                            milestone_number: {required: true, type: 'integer'},
                            number: {alias: 'milestone_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones/:milestone_number',
                    },
                    get: {
                        method: 'GET',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number',
                    },
                    getComment: {
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments/:comment_id',
                    },
                    getEvent: {
                        method: 'GET',
                        params: {
                            event_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/events/:event_id',
                    },
                    getLabel: {
                        method: 'GET',
                        params: {
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/labels/:name',
                    },
                    getMilestone: {
                        method: 'GET',
                        params: {
                            milestone_number: {required: true, type: 'integer'},
                            number: {alias: 'milestone_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones/:milestone_number',
                    },
                    list: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            filter: {enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'], type: 'string'},
                            labels: {type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated', 'comments'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/issues',
                    },
                    listAssignees: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/assignees',
                    },
                    listComments: {
                        method: 'GET',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/comments',
                    },
                    listCommentsForRepo: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments',
                    },
                    listEvents: {
                        method: 'GET',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/events',
                    },
                    listEventsForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/events',
                    },
                    listEventsForTimeline: {
                        headers: {accept: 'application/vnd.github.mockingbird-preview+json'},
                        method: 'GET',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/timeline',
                    },
                    listForAuthenticatedUser: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            filter: {enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'], type: 'string'},
                            labels: {type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated', 'comments'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/user/issues',
                    },
                    listForOrg: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            filter: {enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'], type: 'string'},
                            labels: {type: 'string'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated', 'comments'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/orgs/:org/issues',
                    },
                    listForRepo: {
                        method: 'GET',
                        params: {
                            assignee: {type: 'string'},
                            creator: {type: 'string'},
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            labels: {type: 'string'},
                            mentioned: {type: 'string'},
                            milestone: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated', 'comments'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues',
                    },
                    listLabelsForMilestone: {
                        method: 'GET',
                        params: {
                            milestone_number: {required: true, type: 'integer'},
                            number: {alias: 'milestone_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones/:milestone_number/labels',
                    },
                    listLabelsForRepo: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/labels',
                    },
                    listLabelsOnIssue: {
                        method: 'GET',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/labels',
                    },
                    listMilestonesForRepo: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sort: {enum: ['due_on', 'completeness'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones',
                    },
                    lock: {
                        method: 'PUT',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            lock_reason: {enum: ['off-topic', 'too heated', 'resolved', 'spam'], type: 'string'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/lock',
                    },
                    removeAssignees: {
                        method: 'DELETE',
                        params: {
                            assignees: {type: 'string[]'},
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/assignees',
                    },
                    removeLabel: {
                        method: 'DELETE',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            name: {required: true, type: 'string'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/labels/:name',
                    },
                    removeLabels: {
                        method: 'DELETE',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/labels',
                    },
                    replaceLabels: {
                        method: 'PUT',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            labels: {type: 'string[]'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/labels',
                    },
                    unlock: {
                        method: 'DELETE',
                        params: {
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/lock',
                    },
                    update: {
                        method: 'PATCH',
                        params: {
                            assignee: {type: 'string'},
                            assignees: {type: 'string[]'},
                            body: {type: 'string'},
                            issue_number: {required: true, type: 'integer'},
                            labels: {type: 'string[]'},
                            milestone: {allowNull: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            state: {enum: ['open', 'closed'], type: 'string'},
                            title: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number',
                    },
                    updateComment: {
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments/:comment_id',
                    },
                    updateLabel: {
                        method: 'PATCH',
                        params: {
                            color: {type: 'string'},
                            current_name: {required: true, type: 'string'},
                            description: {type: 'string'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/labels/:current_name',
                    },
                    updateMilestone: {
                        method: 'PATCH',
                        params: {
                            description: {type: 'string'},
                            due_on: {type: 'string'},
                            milestone_number: {required: true, type: 'integer'},
                            number: {alias: 'milestone_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            state: {enum: ['open', 'closed'], type: 'string'},
                            title: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/milestones/:milestone_number',
                    },
                },
                licenses: {
                    get: {
                        method: 'GET',
                        params: {license: {required: true, type: 'string'}},
                        url: '/licenses/:license',
                    },
                    getForRepo: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/license',
                    },
                    list: {
                        deprecated:
                            'octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)',
                        method: 'GET',
                        params: {},
                        url: '/licenses',
                    },
                    listCommonlyUsed: {method: 'GET', params: {}, url: '/licenses'},
                },
                markdown: {
                    render: {
                        method: 'POST',
                        params: {
                            context: {type: 'string'},
                            mode: {enum: ['markdown', 'gfm'], type: 'string'},
                            text: {required: true, type: 'string'},
                        },
                        url: '/markdown',
                    },
                    renderRaw: {
                        headers: {'content-type': 'text/plain; charset=utf-8'},
                        method: 'POST',
                        params: {data: {mapTo: 'data', required: true, type: 'string'}},
                        url: '/markdown/raw',
                    },
                },
                meta: {get: {method: 'GET', params: {}, url: '/meta'}},
                migrations: {
                    cancelImport: {
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/import',
                    },
                    deleteArchiveForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'DELETE',
                        params: {migration_id: {required: true, type: 'integer'}},
                        url: '/user/migrations/:migration_id/archive',
                    },
                    deleteArchiveForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'DELETE',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/migrations/:migration_id/archive',
                    },
                    downloadArchiveForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/migrations/:migration_id/archive',
                    },
                    getArchiveForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {migration_id: {required: true, type: 'integer'}},
                        url: '/user/migrations/:migration_id/archive',
                    },
                    getArchiveForOrg: {
                        deprecated:
                            'octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)',
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/migrations/:migration_id/archive',
                    },
                    getCommitAuthors: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/import/authors',
                    },
                    getImportProgress: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/import',
                    },
                    getLargeFiles: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/import/large_files',
                    },
                    getStatusForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {migration_id: {required: true, type: 'integer'}},
                        url: '/user/migrations/:migration_id',
                    },
                    getStatusForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/migrations/:migration_id',
                    },
                    listForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/migrations',
                    },
                    listForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/migrations',
                    },
                    listReposForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/migrations/:migration_id/repositories',
                    },
                    listReposForUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'GET',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/user/:migration_id/repositories',
                    },
                    mapCommitAuthor: {
                        method: 'PATCH',
                        params: {
                            author_id: {required: true, type: 'integer'},
                            email: {type: 'string'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/import/authors/:author_id',
                    },
                    setLfsPreference: {
                        method: 'PATCH',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            use_lfs: {enum: ['opt_in', 'opt_out'], required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/import/lfs',
                    },
                    startForAuthenticatedUser: {
                        method: 'POST',
                        params: {
                            exclude_attachments: {type: 'boolean'},
                            lock_repositories: {type: 'boolean'},
                            repositories: {required: true, type: 'string[]'},
                        },
                        url: '/user/migrations',
                    },
                    startForOrg: {
                        method: 'POST',
                        params: {
                            exclude_attachments: {type: 'boolean'},
                            lock_repositories: {type: 'boolean'},
                            org: {required: true, type: 'string'},
                            repositories: {required: true, type: 'string[]'},
                        },
                        url: '/orgs/:org/migrations',
                    },
                    startImport: {
                        method: 'PUT',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            tfvc_project: {type: 'string'},
                            vcs: {enum: ['subversion', 'git', 'mercurial', 'tfvc'], type: 'string'},
                            vcs_password: {type: 'string'},
                            vcs_url: {required: true, type: 'string'},
                            vcs_username: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/import',
                    },
                    unlockRepoForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'DELETE',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            repo_name: {required: true, type: 'string'},
                        },
                        url: '/user/migrations/:migration_id/repos/:repo_name/lock',
                    },
                    unlockRepoForOrg: {
                        headers: {accept: 'application/vnd.github.wyandotte-preview+json'},
                        method: 'DELETE',
                        params: {
                            migration_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            repo_name: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/migrations/:migration_id/repos/:repo_name/lock',
                    },
                    updateImport: {
                        method: 'PATCH',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            vcs_password: {type: 'string'},
                            vcs_username: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/import',
                    },
                },
                oauthAuthorizations: {
                    checkAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)',
                        method: 'GET',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    createAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization',
                        method: 'POST',
                        params: {
                            client_id: {type: 'string'},
                            client_secret: {type: 'string'},
                            fingerprint: {type: 'string'},
                            note: {required: true, type: 'string'},
                            note_url: {type: 'string'},
                            scopes: {type: 'string[]'},
                        },
                        url: '/authorizations',
                    },
                    deleteAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization',
                        method: 'DELETE',
                        params: {authorization_id: {required: true, type: 'integer'}},
                        url: '/authorizations/:authorization_id',
                    },
                    deleteGrant: {
                        deprecated:
                            'octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant',
                        method: 'DELETE',
                        params: {grant_id: {required: true, type: 'integer'}},
                        url: '/applications/grants/:grant_id',
                    },
                    getAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization',
                        method: 'GET',
                        params: {authorization_id: {required: true, type: 'integer'}},
                        url: '/authorizations/:authorization_id',
                    },
                    getGrant: {
                        deprecated:
                            'octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant',
                        method: 'GET',
                        params: {grant_id: {required: true, type: 'integer'}},
                        url: '/applications/grants/:grant_id',
                    },
                    getOrCreateAuthorizationForApp: {
                        deprecated:
                            'octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app',
                        method: 'PUT',
                        params: {
                            client_id: {required: true, type: 'string'},
                            client_secret: {required: true, type: 'string'},
                            fingerprint: {type: 'string'},
                            note: {type: 'string'},
                            note_url: {type: 'string'},
                            scopes: {type: 'string[]'},
                        },
                        url: '/authorizations/clients/:client_id',
                    },
                    getOrCreateAuthorizationForAppAndFingerprint: {
                        deprecated:
                            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint',
                        method: 'PUT',
                        params: {
                            client_id: {required: true, type: 'string'},
                            client_secret: {required: true, type: 'string'},
                            fingerprint: {required: true, type: 'string'},
                            note: {type: 'string'},
                            note_url: {type: 'string'},
                            scopes: {type: 'string[]'},
                        },
                        url: '/authorizations/clients/:client_id/:fingerprint',
                    },
                    getOrCreateAuthorizationForAppFingerprint: {
                        deprecated:
                            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)',
                        method: 'PUT',
                        params: {
                            client_id: {required: true, type: 'string'},
                            client_secret: {required: true, type: 'string'},
                            fingerprint: {required: true, type: 'string'},
                            note: {type: 'string'},
                            note_url: {type: 'string'},
                            scopes: {type: 'string[]'},
                        },
                        url: '/authorizations/clients/:client_id/:fingerprint',
                    },
                    listAuthorizations: {
                        deprecated:
                            'octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations',
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/authorizations',
                    },
                    listGrants: {
                        deprecated:
                            'octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants',
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/applications/grants',
                    },
                    resetAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)',
                        method: 'POST',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    revokeAuthorizationForApplication: {
                        deprecated:
                            'octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)',
                        method: 'DELETE',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/tokens/:access_token',
                    },
                    revokeGrantForApplication: {
                        deprecated:
                            'octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)',
                        method: 'DELETE',
                        params: {
                            access_token: {required: true, type: 'string'},
                            client_id: {required: true, type: 'string'},
                        },
                        url: '/applications/:client_id/grants/:access_token',
                    },
                    updateAuthorization: {
                        deprecated:
                            'octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization',
                        method: 'PATCH',
                        params: {
                            add_scopes: {type: 'string[]'},
                            authorization_id: {required: true, type: 'integer'},
                            fingerprint: {type: 'string'},
                            note: {type: 'string'},
                            note_url: {type: 'string'},
                            remove_scopes: {type: 'string[]'},
                            scopes: {type: 'string[]'},
                        },
                        url: '/authorizations/:authorization_id',
                    },
                },
                orgs: {
                    addOrUpdateMembership: {
                        method: 'PUT',
                        params: {
                            org: {required: true, type: 'string'},
                            role: {enum: ['admin', 'member'], type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/memberships/:username',
                    },
                    blockUser: {
                        method: 'PUT',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/blocks/:username',
                    },
                    checkBlockedUser: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/blocks/:username',
                    },
                    checkMembership: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/members/:username',
                    },
                    checkPublicMembership: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/public_members/:username',
                    },
                    concealMembership: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/public_members/:username',
                    },
                    convertMemberToOutsideCollaborator: {
                        method: 'PUT',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/outside_collaborators/:username',
                    },
                    createHook: {
                        method: 'POST',
                        params: {
                            active: {type: 'boolean'},
                            config: {required: true, type: 'object'},
                            'config.content_type': {type: 'string'},
                            'config.insecure_ssl': {type: 'string'},
                            'config.secret': {type: 'string'},
                            'config.url': {required: true, type: 'string'},
                            events: {type: 'string[]'},
                            name: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/hooks',
                    },
                    createInvitation: {
                        method: 'POST',
                        params: {
                            email: {type: 'string'},
                            invitee_id: {type: 'integer'},
                            org: {required: true, type: 'string'},
                            role: {enum: ['admin', 'direct_member', 'billing_manager'], type: 'string'},
                            team_ids: {type: 'integer[]'},
                        },
                        url: '/orgs/:org/invitations',
                    },
                    deleteHook: {
                        method: 'DELETE',
                        params: {hook_id: {required: true, type: 'integer'}, org: {required: true, type: 'string'}},
                        url: '/orgs/:org/hooks/:hook_id',
                    },
                    get: {method: 'GET', params: {org: {required: true, type: 'string'}}, url: '/orgs/:org'},
                    getHook: {
                        method: 'GET',
                        params: {hook_id: {required: true, type: 'integer'}, org: {required: true, type: 'string'}},
                        url: '/orgs/:org/hooks/:hook_id',
                    },
                    getMembership: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/memberships/:username',
                    },
                    getMembershipForAuthenticatedUser: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}},
                        url: '/user/memberships/orgs/:org',
                    },
                    list: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'integer'}},
                        url: '/organizations',
                    },
                    listBlockedUsers: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}},
                        url: '/orgs/:org/blocks',
                    },
                    listForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/orgs',
                    },
                    listForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/orgs',
                    },
                    listHooks: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/hooks',
                    },
                    listInstallations: {
                        headers: {accept: 'application/vnd.github.machine-man-preview+json'},
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/installations',
                    },
                    listInvitationTeams: {
                        method: 'GET',
                        params: {
                            invitation_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/invitations/:invitation_id/teams',
                    },
                    listMembers: {
                        method: 'GET',
                        params: {
                            filter: {enum: ['2fa_disabled', 'all'], type: 'string'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            role: {enum: ['all', 'admin', 'member'], type: 'string'},
                        },
                        url: '/orgs/:org/members',
                    },
                    listMemberships: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            state: {enum: ['active', 'pending'], type: 'string'},
                        },
                        url: '/user/memberships/orgs',
                    },
                    listOutsideCollaborators: {
                        method: 'GET',
                        params: {
                            filter: {enum: ['2fa_disabled', 'all'], type: 'string'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/outside_collaborators',
                    },
                    listPendingInvitations: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/invitations',
                    },
                    listPublicMembers: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/public_members',
                    },
                    pingHook: {
                        method: 'POST',
                        params: {hook_id: {required: true, type: 'integer'}, org: {required: true, type: 'string'}},
                        url: '/orgs/:org/hooks/:hook_id/pings',
                    },
                    publicizeMembership: {
                        method: 'PUT',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/public_members/:username',
                    },
                    removeMember: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/members/:username',
                    },
                    removeMembership: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/memberships/:username',
                    },
                    removeOutsideCollaborator: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/outside_collaborators/:username',
                    },
                    unblockUser: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, username: {required: true, type: 'string'}},
                        url: '/orgs/:org/blocks/:username',
                    },
                    update: {
                        method: 'PATCH',
                        params: {
                            billing_email: {type: 'string'},
                            company: {type: 'string'},
                            default_repository_permission: {enum: ['read', 'write', 'admin', 'none'], type: 'string'},
                            description: {type: 'string'},
                            email: {type: 'string'},
                            has_organization_projects: {type: 'boolean'},
                            has_repository_projects: {type: 'boolean'},
                            location: {type: 'string'},
                            members_allowed_repository_creation_type: {
                                enum: ['all', 'private', 'none'],
                                type: 'string',
                            },
                            members_can_create_internal_repositories: {type: 'boolean'},
                            members_can_create_private_repositories: {type: 'boolean'},
                            members_can_create_public_repositories: {type: 'boolean'},
                            members_can_create_repositories: {type: 'boolean'},
                            name: {type: 'string'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org',
                    },
                    updateHook: {
                        method: 'PATCH',
                        params: {
                            active: {type: 'boolean'},
                            config: {type: 'object'},
                            'config.content_type': {type: 'string'},
                            'config.insecure_ssl': {type: 'string'},
                            'config.secret': {type: 'string'},
                            'config.url': {required: true, type: 'string'},
                            events: {type: 'string[]'},
                            hook_id: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/hooks/:hook_id',
                    },
                    updateMembership: {
                        method: 'PATCH',
                        params: {
                            org: {required: true, type: 'string'},
                            state: {enum: ['active'], required: true, type: 'string'},
                        },
                        url: '/user/memberships/orgs/:org',
                    },
                },
                projects: {
                    addCollaborator: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PUT',
                        params: {
                            permission: {enum: ['read', 'write', 'admin'], type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/projects/:project_id/collaborators/:username',
                    },
                    createCard: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {
                            column_id: {required: true, type: 'integer'},
                            content_id: {type: 'integer'},
                            content_type: {type: 'string'},
                            note: {type: 'string'},
                        },
                        url: '/projects/columns/:column_id/cards',
                    },
                    createColumn: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {name: {required: true, type: 'string'}, project_id: {required: true, type: 'integer'}},
                        url: '/projects/:project_id/columns',
                    },
                    createForAuthenticatedUser: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {body: {type: 'string'}, name: {required: true, type: 'string'}},
                        url: '/user/projects',
                    },
                    createForOrg: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {
                            body: {type: 'string'},
                            name: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/projects',
                    },
                    createForRepo: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {
                            body: {type: 'string'},
                            name: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/projects',
                    },
                    delete: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'DELETE',
                        params: {project_id: {required: true, type: 'integer'}},
                        url: '/projects/:project_id',
                    },
                    deleteCard: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'DELETE',
                        params: {card_id: {required: true, type: 'integer'}},
                        url: '/projects/columns/cards/:card_id',
                    },
                    deleteColumn: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'DELETE',
                        params: {column_id: {required: true, type: 'integer'}},
                        url: '/projects/columns/:column_id',
                    },
                    get: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {project_id: {required: true, type: 'integer'}},
                        url: '/projects/:project_id',
                    },
                    getCard: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {card_id: {required: true, type: 'integer'}},
                        url: '/projects/columns/cards/:card_id',
                    },
                    getColumn: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {column_id: {required: true, type: 'integer'}},
                        url: '/projects/columns/:column_id',
                    },
                    listCards: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            archived_state: {enum: ['all', 'archived', 'not_archived'], type: 'string'},
                            column_id: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/projects/columns/:column_id/cards',
                    },
                    listCollaborators: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            affiliation: {enum: ['outside', 'direct', 'all'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            project_id: {required: true, type: 'integer'},
                        },
                        url: '/projects/:project_id/collaborators',
                    },
                    listColumns: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            project_id: {required: true, type: 'integer'},
                        },
                        url: '/projects/:project_id/columns',
                    },
                    listForOrg: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/orgs/:org/projects',
                    },
                    listForRepo: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/projects',
                    },
                    listForUser: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/projects',
                    },
                    moveCard: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {
                            card_id: {required: true, type: 'integer'},
                            column_id: {type: 'integer'},
                            position: {required: true, type: 'string', validation: '^(top|bottom|after:\\d+)$'},
                        },
                        url: '/projects/columns/cards/:card_id/moves',
                    },
                    moveColumn: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'POST',
                        params: {
                            column_id: {required: true, type: 'integer'},
                            position: {required: true, type: 'string', validation: '^(first|last|after:\\d+)$'},
                        },
                        url: '/projects/columns/:column_id/moves',
                    },
                    removeCollaborator: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'DELETE',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/projects/:project_id/collaborators/:username',
                    },
                    reviewUserPermissionLevel: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/projects/:project_id/collaborators/:username/permission',
                    },
                    update: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PATCH',
                        params: {
                            body: {type: 'string'},
                            name: {type: 'string'},
                            organization_permission: {type: 'string'},
                            private: {type: 'boolean'},
                            project_id: {required: true, type: 'integer'},
                            state: {enum: ['open', 'closed'], type: 'string'},
                        },
                        url: '/projects/:project_id',
                    },
                    updateCard: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PATCH',
                        params: {
                            archived: {type: 'boolean'},
                            card_id: {required: true, type: 'integer'},
                            note: {type: 'string'},
                        },
                        url: '/projects/columns/cards/:card_id',
                    },
                    updateColumn: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PATCH',
                        params: {column_id: {required: true, type: 'integer'}, name: {required: true, type: 'string'}},
                        url: '/projects/columns/:column_id',
                    },
                },
                pulls: {
                    checkIfMerged: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/merge',
                    },
                    create: {
                        method: 'POST',
                        params: {
                            base: {required: true, type: 'string'},
                            body: {type: 'string'},
                            draft: {type: 'boolean'},
                            head: {required: true, type: 'string'},
                            maintainer_can_modify: {type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls',
                    },
                    createComment: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            commit_id: {required: true, type: 'string'},
                            in_reply_to: {
                                deprecated: true,
                                description:
                                    'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
                                type: 'integer',
                            },
                            line: {type: 'integer'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            position: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            side: {enum: ['LEFT', 'RIGHT'], type: 'string'},
                            start_line: {type: 'integer'},
                            start_side: {enum: ['LEFT', 'RIGHT', 'side'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/comments',
                    },
                    createCommentReply: {
                        deprecated:
                            'octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)',
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            commit_id: {required: true, type: 'string'},
                            in_reply_to: {
                                deprecated: true,
                                description:
                                    'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
                                type: 'integer',
                            },
                            line: {type: 'integer'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            position: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            side: {enum: ['LEFT', 'RIGHT'], type: 'string'},
                            start_line: {type: 'integer'},
                            start_side: {enum: ['LEFT', 'RIGHT', 'side'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/comments',
                    },
                    createFromIssue: {
                        deprecated:
                            'octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request',
                        method: 'POST',
                        params: {
                            base: {required: true, type: 'string'},
                            draft: {type: 'boolean'},
                            head: {required: true, type: 'string'},
                            issue: {required: true, type: 'integer'},
                            maintainer_can_modify: {type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls',
                    },
                    createReview: {
                        method: 'POST',
                        params: {
                            body: {type: 'string'},
                            comments: {type: 'object[]'},
                            'comments[].body': {required: true, type: 'string'},
                            'comments[].path': {required: true, type: 'string'},
                            'comments[].position': {required: true, type: 'integer'},
                            commit_id: {type: 'string'},
                            event: {enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'], type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews',
                    },
                    createReviewCommentReply: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies',
                    },
                    createReviewRequest: {
                        method: 'POST',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            reviewers: {type: 'string[]'},
                            team_reviewers: {type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
                    },
                    deleteComment: {
                        method: 'DELETE',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments/:comment_id',
                    },
                    deletePendingReview: {
                        method: 'DELETE',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
                    },
                    deleteReviewRequest: {
                        method: 'DELETE',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            reviewers: {type: 'string[]'},
                            team_reviewers: {type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
                    },
                    dismissReview: {
                        method: 'PUT',
                        params: {
                            message: {required: true, type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals',
                    },
                    get: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number',
                    },
                    getComment: {
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments/:comment_id',
                    },
                    getCommentsForReview: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments',
                    },
                    getReview: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
                    },
                    list: {
                        method: 'GET',
                        params: {
                            base: {type: 'string'},
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            head: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sort: {enum: ['created', 'updated', 'popularity', 'long-running'], type: 'string'},
                            state: {enum: ['open', 'closed', 'all'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls',
                    },
                    listComments: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/comments',
                    },
                    listCommentsForRepo: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            since: {type: 'string'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments',
                    },
                    listCommits: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/commits',
                    },
                    listFiles: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/files',
                    },
                    listReviewRequests: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
                    },
                    listReviews: {
                        method: 'GET',
                        params: {
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews',
                    },
                    merge: {
                        method: 'PUT',
                        params: {
                            commit_message: {type: 'string'},
                            commit_title: {type: 'string'},
                            merge_method: {enum: ['merge', 'squash', 'rebase'], type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/merge',
                    },
                    submitReview: {
                        method: 'POST',
                        params: {
                            body: {type: 'string'},
                            event: {enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'], required: true, type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events',
                    },
                    update: {
                        method: 'PATCH',
                        params: {
                            base: {type: 'string'},
                            body: {type: 'string'},
                            maintainer_can_modify: {type: 'boolean'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            state: {enum: ['open', 'closed'], type: 'string'},
                            title: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number',
                    },
                    updateBranch: {
                        headers: {accept: 'application/vnd.github.lydian-preview+json'},
                        method: 'PUT',
                        params: {
                            expected_head_sha: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/update-branch',
                    },
                    updateComment: {
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments/:comment_id',
                    },
                    updateReview: {
                        method: 'PUT',
                        params: {
                            body: {required: true, type: 'string'},
                            number: {alias: 'pull_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            pull_number: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            review_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
                    },
                },
                rateLimit: {get: {method: 'GET', params: {}, url: '/rate_limit'}},
                reactions: {
                    createForCommitComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments/:comment_id/reactions',
                    },
                    createForIssue: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/reactions',
                    },
                    createForIssueComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions',
                    },
                    createForPullRequestReviewComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions',
                    },
                    createForTeamDiscussion: {
                        deprecated:
                            'octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/reactions',
                    },
                    createForTeamDiscussionComment: {
                        deprecated:
                            'octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    createForTeamDiscussionCommentInOrg: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url:
                            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    createForTeamDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    createForTeamDiscussionInOrg: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions',
                    },
                    createForTeamDiscussionLegacy: {
                        deprecated:
                            'octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'POST',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                required: true,
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/reactions',
                    },
                    delete: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'DELETE',
                        params: {reaction_id: {required: true, type: 'integer'}},
                        url: '/reactions/:reaction_id',
                    },
                    listForCommitComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments/:comment_id/reactions',
                    },
                    listForIssue: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            issue_number: {required: true, type: 'integer'},
                            number: {alias: 'issue_number', deprecated: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/:issue_number/reactions',
                    },
                    listForIssueComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions',
                    },
                    listForPullRequestReviewComment: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions',
                    },
                    listForTeamDiscussion: {
                        deprecated:
                            'octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/reactions',
                    },
                    listForTeamDiscussionComment: {
                        deprecated:
                            'octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    listForTeamDiscussionCommentInOrg: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url:
                            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    listForTeamDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
                    },
                    listForTeamDiscussionInOrg: {
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions',
                    },
                    listForTeamDiscussionLegacy: {
                        deprecated:
                            'octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy',
                        headers: {accept: 'application/vnd.github.squirrel-girl-preview+json'},
                        method: 'GET',
                        params: {
                            content: {
                                enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
                                type: 'string',
                            },
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/reactions',
                    },
                },
                repos: {
                    acceptInvitation: {
                        method: 'PATCH',
                        params: {invitation_id: {required: true, type: 'integer'}},
                        url: '/user/repository_invitations/:invitation_id',
                    },
                    addCollaborator: {
                        method: 'PUT',
                        params: {
                            owner: {required: true, type: 'string'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            repo: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/collaborators/:username',
                    },
                    addDeployKey: {
                        method: 'POST',
                        params: {
                            key: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            read_only: {type: 'boolean'},
                            repo: {required: true, type: 'string'},
                            title: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/keys',
                    },
                    addProtectedBranchAdminEnforcement: {
                        method: 'POST',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
                    },
                    addProtectedBranchAppRestrictions: {
                        method: 'POST',
                        params: {
                            apps: {mapTo: 'data', required: true, type: 'string[]'},
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
                    },
                    addProtectedBranchRequiredSignatures: {
                        headers: {accept: 'application/vnd.github.zzzax-preview+json'},
                        method: 'POST',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
                    },
                    addProtectedBranchRequiredStatusChecksContexts: {
                        method: 'POST',
                        params: {
                            branch: {required: true, type: 'string'},
                            contexts: {mapTo: 'data', required: true, type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
                    },
                    addProtectedBranchTeamRestrictions: {
                        method: 'POST',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            teams: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    addProtectedBranchUserRestrictions: {
                        method: 'POST',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            users: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    checkCollaborator: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/collaborators/:username',
                    },
                    checkVulnerabilityAlerts: {
                        headers: {accept: 'application/vnd.github.dorian-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/vulnerability-alerts',
                    },
                    compareCommits: {
                        method: 'GET',
                        params: {
                            base: {required: true, type: 'string'},
                            head: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/compare/:base...:head',
                    },
                    createCommitComment: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            commit_sha: {required: true, type: 'string'},
                            line: {type: 'integer'},
                            owner: {required: true, type: 'string'},
                            path: {type: 'string'},
                            position: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sha: {alias: 'commit_sha', deprecated: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:commit_sha/comments',
                    },
                    createDeployment: {
                        method: 'POST',
                        params: {
                            auto_merge: {type: 'boolean'},
                            description: {type: 'string'},
                            environment: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            payload: {type: 'string'},
                            production_environment: {type: 'boolean'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            required_contexts: {type: 'string[]'},
                            task: {type: 'string'},
                            transient_environment: {type: 'boolean'},
                        },
                        url: '/repos/:owner/:repo/deployments',
                    },
                    createDeploymentStatus: {
                        method: 'POST',
                        params: {
                            auto_inactive: {type: 'boolean'},
                            deployment_id: {required: true, type: 'integer'},
                            description: {type: 'string'},
                            environment: {enum: ['production', 'staging', 'qa'], type: 'string'},
                            environment_url: {type: 'string'},
                            log_url: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            state: {
                                enum: ['error', 'failure', 'inactive', 'in_progress', 'queued', 'pending', 'success'],
                                required: true,
                                type: 'string',
                            },
                            target_url: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/deployments/:deployment_id/statuses',
                    },
                    createDispatchEvent: {
                        method: 'POST',
                        params: {
                            client_payload: {type: 'object'},
                            event_type: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/dispatches',
                    },
                    createFile: {
                        deprecated:
                            'octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
                        method: 'PUT',
                        params: {
                            author: {type: 'object'},
                            'author.email': {required: true, type: 'string'},
                            'author.name': {required: true, type: 'string'},
                            branch: {type: 'string'},
                            committer: {type: 'object'},
                            'committer.email': {required: true, type: 'string'},
                            'committer.name': {required: true, type: 'string'},
                            content: {required: true, type: 'string'},
                            message: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contents/:path',
                    },
                    createForAuthenticatedUser: {
                        method: 'POST',
                        params: {
                            allow_merge_commit: {type: 'boolean'},
                            allow_rebase_merge: {type: 'boolean'},
                            allow_squash_merge: {type: 'boolean'},
                            auto_init: {type: 'boolean'},
                            delete_branch_on_merge: {type: 'boolean'},
                            description: {type: 'string'},
                            gitignore_template: {type: 'string'},
                            has_issues: {type: 'boolean'},
                            has_projects: {type: 'boolean'},
                            has_wiki: {type: 'boolean'},
                            homepage: {type: 'string'},
                            is_template: {type: 'boolean'},
                            license_template: {type: 'string'},
                            name: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            team_id: {type: 'integer'},
                            visibility: {enum: ['public', 'private', 'visibility', 'internal'], type: 'string'},
                        },
                        url: '/user/repos',
                    },
                    createFork: {
                        method: 'POST',
                        params: {
                            organization: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/forks',
                    },
                    createHook: {
                        method: 'POST',
                        params: {
                            active: {type: 'boolean'},
                            config: {required: true, type: 'object'},
                            'config.content_type': {type: 'string'},
                            'config.insecure_ssl': {type: 'string'},
                            'config.secret': {type: 'string'},
                            'config.url': {required: true, type: 'string'},
                            events: {type: 'string[]'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks',
                    },
                    createInOrg: {
                        method: 'POST',
                        params: {
                            allow_merge_commit: {type: 'boolean'},
                            allow_rebase_merge: {type: 'boolean'},
                            allow_squash_merge: {type: 'boolean'},
                            auto_init: {type: 'boolean'},
                            delete_branch_on_merge: {type: 'boolean'},
                            description: {type: 'string'},
                            gitignore_template: {type: 'string'},
                            has_issues: {type: 'boolean'},
                            has_projects: {type: 'boolean'},
                            has_wiki: {type: 'boolean'},
                            homepage: {type: 'string'},
                            is_template: {type: 'boolean'},
                            license_template: {type: 'string'},
                            name: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            team_id: {type: 'integer'},
                            visibility: {enum: ['public', 'private', 'visibility', 'internal'], type: 'string'},
                        },
                        url: '/orgs/:org/repos',
                    },
                    createOrUpdateFile: {
                        method: 'PUT',
                        params: {
                            author: {type: 'object'},
                            'author.email': {required: true, type: 'string'},
                            'author.name': {required: true, type: 'string'},
                            branch: {type: 'string'},
                            committer: {type: 'object'},
                            'committer.email': {required: true, type: 'string'},
                            'committer.name': {required: true, type: 'string'},
                            content: {required: true, type: 'string'},
                            message: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contents/:path',
                    },
                    createRelease: {
                        method: 'POST',
                        params: {
                            body: {type: 'string'},
                            draft: {type: 'boolean'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            prerelease: {type: 'boolean'},
                            repo: {required: true, type: 'string'},
                            tag_name: {required: true, type: 'string'},
                            target_commitish: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases',
                    },
                    createStatus: {
                        method: 'POST',
                        params: {
                            context: {type: 'string'},
                            description: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {required: true, type: 'string'},
                            state: {enum: ['error', 'failure', 'pending', 'success'], required: true, type: 'string'},
                            target_url: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/statuses/:sha',
                    },
                    createUsingTemplate: {
                        headers: {accept: 'application/vnd.github.baptiste-preview+json'},
                        method: 'POST',
                        params: {
                            description: {type: 'string'},
                            name: {required: true, type: 'string'},
                            owner: {type: 'string'},
                            private: {type: 'boolean'},
                            template_owner: {required: true, type: 'string'},
                            template_repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:template_owner/:template_repo/generate',
                    },
                    declineInvitation: {
                        method: 'DELETE',
                        params: {invitation_id: {required: true, type: 'integer'}},
                        url: '/user/repository_invitations/:invitation_id',
                    },
                    delete: {
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo',
                    },
                    deleteCommitComment: {
                        method: 'DELETE',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments/:comment_id',
                    },
                    deleteDownload: {
                        method: 'DELETE',
                        params: {
                            download_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/downloads/:download_id',
                    },
                    deleteFile: {
                        method: 'DELETE',
                        params: {
                            author: {type: 'object'},
                            'author.email': {type: 'string'},
                            'author.name': {type: 'string'},
                            branch: {type: 'string'},
                            committer: {type: 'object'},
                            'committer.email': {type: 'string'},
                            'committer.name': {type: 'string'},
                            message: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contents/:path',
                    },
                    deleteHook: {
                        method: 'DELETE',
                        params: {
                            hook_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks/:hook_id',
                    },
                    deleteInvitation: {
                        method: 'DELETE',
                        params: {
                            invitation_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/invitations/:invitation_id',
                    },
                    deleteRelease: {
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            release_id: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/:release_id',
                    },
                    deleteReleaseAsset: {
                        method: 'DELETE',
                        params: {
                            asset_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/assets/:asset_id',
                    },
                    disableAutomatedSecurityFixes: {
                        headers: {accept: 'application/vnd.github.london-preview+json'},
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/automated-security-fixes',
                    },
                    disablePagesSite: {
                        headers: {accept: 'application/vnd.github.switcheroo-preview+json'},
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/pages',
                    },
                    disableVulnerabilityAlerts: {
                        headers: {accept: 'application/vnd.github.dorian-preview+json'},
                        method: 'DELETE',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/vulnerability-alerts',
                    },
                    enableAutomatedSecurityFixes: {
                        headers: {accept: 'application/vnd.github.london-preview+json'},
                        method: 'PUT',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/automated-security-fixes',
                    },
                    enablePagesSite: {
                        headers: {accept: 'application/vnd.github.switcheroo-preview+json'},
                        method: 'POST',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            source: {type: 'object'},
                            'source.branch': {enum: ['master', 'gh-pages'], type: 'string'},
                            'source.path': {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pages',
                    },
                    enableVulnerabilityAlerts: {
                        headers: {accept: 'application/vnd.github.dorian-preview+json'},
                        method: 'PUT',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/vulnerability-alerts',
                    },
                    get: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo',
                    },
                    getAppsWithAccessToProtectedBranch: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
                    },
                    getArchiveLink: {
                        method: 'GET',
                        params: {
                            archive_format: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/:archive_format/:ref',
                    },
                    getBranch: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch',
                    },
                    getBranchProtection: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection',
                    },
                    getClones: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            per: {enum: ['day', 'week'], type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/traffic/clones',
                    },
                    getCodeFrequencyStats: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/stats/code_frequency',
                    },
                    getCollaboratorPermissionLevel: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/collaborators/:username/permission',
                    },
                    getCombinedStatusForRef: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref/status',
                    },
                    getCommit: {
                        method: 'GET',
                        params: {
                            commit_sha: {alias: 'ref', deprecated: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {alias: 'ref', deprecated: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref',
                    },
                    getCommitActivityStats: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/stats/commit_activity',
                    },
                    getCommitComment: {
                        method: 'GET',
                        params: {
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments/:comment_id',
                    },
                    getCommitRefSha: {
                        deprecated:
                            'octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit',
                        headers: {accept: 'application/vnd.github.v3.sha'},
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref',
                    },
                    getContents: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            ref: {type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contents/:path',
                    },
                    getContributorsStats: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/stats/contributors',
                    },
                    getDeployKey: {
                        method: 'GET',
                        params: {
                            key_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/keys/:key_id',
                    },
                    getDeployment: {
                        method: 'GET',
                        params: {
                            deployment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/deployments/:deployment_id',
                    },
                    getDeploymentStatus: {
                        method: 'GET',
                        params: {
                            deployment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            status_id: {required: true, type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id',
                    },
                    getDownload: {
                        method: 'GET',
                        params: {
                            download_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/downloads/:download_id',
                    },
                    getHook: {
                        method: 'GET',
                        params: {
                            hook_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks/:hook_id',
                    },
                    getLatestPagesBuild: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/pages/builds/latest',
                    },
                    getLatestRelease: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/releases/latest',
                    },
                    getPages: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/pages',
                    },
                    getPagesBuild: {
                        method: 'GET',
                        params: {
                            build_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pages/builds/:build_id',
                    },
                    getParticipationStats: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/stats/participation',
                    },
                    getProtectedBranchAdminEnforcement: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
                    },
                    getProtectedBranchPullRequestReviewEnforcement: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
                    },
                    getProtectedBranchRequiredSignatures: {
                        headers: {accept: 'application/vnd.github.zzzax-preview+json'},
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
                    },
                    getProtectedBranchRequiredStatusChecks: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
                    },
                    getProtectedBranchRestrictions: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions',
                    },
                    getPunchCardStats: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/stats/punch_card',
                    },
                    getReadme: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            ref: {type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/readme',
                    },
                    getRelease: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            release_id: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/:release_id',
                    },
                    getReleaseAsset: {
                        method: 'GET',
                        params: {
                            asset_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/assets/:asset_id',
                    },
                    getReleaseByTag: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            tag: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/tags/:tag',
                    },
                    getTeamsWithAccessToProtectedBranch: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    getTopPaths: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/traffic/popular/paths',
                    },
                    getTopReferrers: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/traffic/popular/referrers',
                    },
                    getUsersWithAccessToProtectedBranch: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    getViews: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            per: {enum: ['day', 'week'], type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/traffic/views',
                    },
                    list: {
                        method: 'GET',
                        params: {
                            affiliation: {type: 'string'},
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            sort: {enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string'},
                            type: {enum: ['all', 'owner', 'public', 'private', 'member'], type: 'string'},
                            visibility: {enum: ['all', 'public', 'private'], type: 'string'},
                        },
                        url: '/user/repos',
                    },
                    listAppsWithAccessToProtectedBranch: {
                        deprecated:
                            'octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)',
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
                    },
                    listAssetsForRelease: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            release_id: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/:release_id/assets',
                    },
                    listBranches: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            protected: {type: 'boolean'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches',
                    },
                    listBranchesForHeadCommit: {
                        headers: {accept: 'application/vnd.github.groot-preview+json'},
                        method: 'GET',
                        params: {
                            commit_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:commit_sha/branches-where-head',
                    },
                    listCollaborators: {
                        method: 'GET',
                        params: {
                            affiliation: {enum: ['outside', 'direct', 'all'], type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/collaborators',
                    },
                    listCommentsForCommit: {
                        method: 'GET',
                        params: {
                            commit_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {alias: 'commit_sha', deprecated: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:commit_sha/comments',
                    },
                    listCommitComments: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments',
                    },
                    listCommits: {
                        method: 'GET',
                        params: {
                            author: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            path: {type: 'string'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                            since: {type: 'string'},
                            until: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits',
                    },
                    listContributors: {
                        method: 'GET',
                        params: {
                            anon: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contributors',
                    },
                    listDeployKeys: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/keys',
                    },
                    listDeploymentStatuses: {
                        method: 'GET',
                        params: {
                            deployment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/deployments/:deployment_id/statuses',
                    },
                    listDeployments: {
                        method: 'GET',
                        params: {
                            environment: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                            task: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/deployments',
                    },
                    listDownloads: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/downloads',
                    },
                    listForOrg: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            sort: {enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string'},
                            type: {
                                enum: ['all', 'public', 'private', 'forks', 'sources', 'member', 'internal'],
                                type: 'string',
                            },
                        },
                        url: '/orgs/:org/repos',
                    },
                    listForUser: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            sort: {enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string'},
                            type: {enum: ['all', 'owner', 'member'], type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/repos',
                    },
                    listForks: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                            sort: {enum: ['newest', 'oldest', 'stargazers'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/forks',
                    },
                    listHooks: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks',
                    },
                    listInvitations: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/invitations',
                    },
                    listInvitationsForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/repository_invitations',
                    },
                    listLanguages: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/languages',
                    },
                    listPagesBuilds: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pages/builds',
                    },
                    listProtectedBranchRequiredStatusChecksContexts: {
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
                    },
                    listProtectedBranchTeamRestrictions: {
                        deprecated:
                            'octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)',
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    listProtectedBranchUserRestrictions: {
                        deprecated:
                            'octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)',
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    listPublic: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'integer'}},
                        url: '/repositories',
                    },
                    listPullRequestsAssociatedWithCommit: {
                        headers: {accept: 'application/vnd.github.groot-preview+json'},
                        method: 'GET',
                        params: {
                            commit_sha: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:commit_sha/pulls',
                    },
                    listReleases: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases',
                    },
                    listStatusesForRef: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            ref: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/commits/:ref/statuses',
                    },
                    listTags: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/tags',
                    },
                    listTeams: {
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/teams',
                    },
                    listTeamsWithAccessToProtectedBranch: {
                        deprecated:
                            'octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)',
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    listTopics: {
                        headers: {accept: 'application/vnd.github.mercy-preview+json'},
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/topics',
                    },
                    listUsersWithAccessToProtectedBranch: {
                        deprecated:
                            'octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)',
                        method: 'GET',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    merge: {
                        method: 'POST',
                        params: {
                            base: {required: true, type: 'string'},
                            commit_message: {type: 'string'},
                            head: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/merges',
                    },
                    pingHook: {
                        method: 'POST',
                        params: {
                            hook_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks/:hook_id/pings',
                    },
                    removeBranchProtection: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection',
                    },
                    removeCollaborator: {
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/collaborators/:username',
                    },
                    removeDeployKey: {
                        method: 'DELETE',
                        params: {
                            key_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/keys/:key_id',
                    },
                    removeProtectedBranchAdminEnforcement: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
                    },
                    removeProtectedBranchAppRestrictions: {
                        method: 'DELETE',
                        params: {
                            apps: {mapTo: 'data', required: true, type: 'string[]'},
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
                    },
                    removeProtectedBranchPullRequestReviewEnforcement: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
                    },
                    removeProtectedBranchRequiredSignatures: {
                        headers: {accept: 'application/vnd.github.zzzax-preview+json'},
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
                    },
                    removeProtectedBranchRequiredStatusChecks: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
                    },
                    removeProtectedBranchRequiredStatusChecksContexts: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            contexts: {mapTo: 'data', required: true, type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
                    },
                    removeProtectedBranchRestrictions: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions',
                    },
                    removeProtectedBranchTeamRestrictions: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            teams: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    removeProtectedBranchUserRestrictions: {
                        method: 'DELETE',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            users: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    replaceProtectedBranchAppRestrictions: {
                        method: 'PUT',
                        params: {
                            apps: {mapTo: 'data', required: true, type: 'string[]'},
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
                    },
                    replaceProtectedBranchRequiredStatusChecksContexts: {
                        method: 'PUT',
                        params: {
                            branch: {required: true, type: 'string'},
                            contexts: {mapTo: 'data', required: true, type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
                    },
                    replaceProtectedBranchTeamRestrictions: {
                        method: 'PUT',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            teams: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
                    },
                    replaceProtectedBranchUserRestrictions: {
                        method: 'PUT',
                        params: {
                            branch: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            users: {mapTo: 'data', required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
                    },
                    replaceTopics: {
                        headers: {accept: 'application/vnd.github.mercy-preview+json'},
                        method: 'PUT',
                        params: {
                            names: {required: true, type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/topics',
                    },
                    requestPageBuild: {
                        method: 'POST',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/pages/builds',
                    },
                    retrieveCommunityProfileMetrics: {
                        method: 'GET',
                        params: {owner: {required: true, type: 'string'}, repo: {required: true, type: 'string'}},
                        url: '/repos/:owner/:repo/community/profile',
                    },
                    testPushHook: {
                        method: 'POST',
                        params: {
                            hook_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks/:hook_id/tests',
                    },
                    transfer: {
                        method: 'POST',
                        params: {
                            new_owner: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_ids: {type: 'integer[]'},
                        },
                        url: '/repos/:owner/:repo/transfer',
                    },
                    update: {
                        method: 'PATCH',
                        params: {
                            allow_merge_commit: {type: 'boolean'},
                            allow_rebase_merge: {type: 'boolean'},
                            allow_squash_merge: {type: 'boolean'},
                            archived: {type: 'boolean'},
                            default_branch: {type: 'string'},
                            delete_branch_on_merge: {type: 'boolean'},
                            description: {type: 'string'},
                            has_issues: {type: 'boolean'},
                            has_projects: {type: 'boolean'},
                            has_wiki: {type: 'boolean'},
                            homepage: {type: 'string'},
                            is_template: {type: 'boolean'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            repo: {required: true, type: 'string'},
                            visibility: {enum: ['public', 'private', 'visibility', 'internal'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo',
                    },
                    updateBranchProtection: {
                        method: 'PUT',
                        params: {
                            allow_deletions: {type: 'boolean'},
                            allow_force_pushes: {allowNull: true, type: 'boolean'},
                            branch: {required: true, type: 'string'},
                            enforce_admins: {allowNull: true, required: true, type: 'boolean'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            required_linear_history: {type: 'boolean'},
                            required_pull_request_reviews: {allowNull: true, required: true, type: 'object'},
                            'required_pull_request_reviews.dismiss_stale_reviews': {type: 'boolean'},
                            'required_pull_request_reviews.dismissal_restrictions': {type: 'object'},
                            'required_pull_request_reviews.dismissal_restrictions.teams': {type: 'string[]'},
                            'required_pull_request_reviews.dismissal_restrictions.users': {type: 'string[]'},
                            'required_pull_request_reviews.require_code_owner_reviews': {type: 'boolean'},
                            'required_pull_request_reviews.required_approving_review_count': {type: 'integer'},
                            required_status_checks: {allowNull: true, required: true, type: 'object'},
                            'required_status_checks.contexts': {required: true, type: 'string[]'},
                            'required_status_checks.strict': {required: true, type: 'boolean'},
                            restrictions: {allowNull: true, required: true, type: 'object'},
                            'restrictions.apps': {type: 'string[]'},
                            'restrictions.teams': {required: true, type: 'string[]'},
                            'restrictions.users': {required: true, type: 'string[]'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection',
                    },
                    updateCommitComment: {
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/comments/:comment_id',
                    },
                    updateFile: {
                        deprecated:
                            'octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
                        method: 'PUT',
                        params: {
                            author: {type: 'object'},
                            'author.email': {required: true, type: 'string'},
                            'author.name': {required: true, type: 'string'},
                            branch: {type: 'string'},
                            committer: {type: 'object'},
                            'committer.email': {required: true, type: 'string'},
                            'committer.name': {required: true, type: 'string'},
                            content: {required: true, type: 'string'},
                            message: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            path: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            sha: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/contents/:path',
                    },
                    updateHook: {
                        method: 'PATCH',
                        params: {
                            active: {type: 'boolean'},
                            add_events: {type: 'string[]'},
                            config: {type: 'object'},
                            'config.content_type': {type: 'string'},
                            'config.insecure_ssl': {type: 'string'},
                            'config.secret': {type: 'string'},
                            'config.url': {required: true, type: 'string'},
                            events: {type: 'string[]'},
                            hook_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            remove_events: {type: 'string[]'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/hooks/:hook_id',
                    },
                    updateInformationAboutPagesSite: {
                        method: 'PUT',
                        params: {
                            cname: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            source: {enum: ['"gh-pages"', '"master"', '"master /docs"'], type: 'string'},
                        },
                        url: '/repos/:owner/:repo/pages',
                    },
                    updateInvitation: {
                        method: 'PATCH',
                        params: {
                            invitation_id: {required: true, type: 'integer'},
                            owner: {required: true, type: 'string'},
                            permissions: {enum: ['read', 'write', 'admin'], type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/invitations/:invitation_id',
                    },
                    updateProtectedBranchPullRequestReviewEnforcement: {
                        method: 'PATCH',
                        params: {
                            branch: {required: true, type: 'string'},
                            dismiss_stale_reviews: {type: 'boolean'},
                            dismissal_restrictions: {type: 'object'},
                            'dismissal_restrictions.teams': {type: 'string[]'},
                            'dismissal_restrictions.users': {type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            require_code_owner_reviews: {type: 'boolean'},
                            required_approving_review_count: {type: 'integer'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
                    },
                    updateProtectedBranchRequiredStatusChecks: {
                        method: 'PATCH',
                        params: {
                            branch: {required: true, type: 'string'},
                            contexts: {type: 'string[]'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            strict: {type: 'boolean'},
                        },
                        url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
                    },
                    updateRelease: {
                        method: 'PATCH',
                        params: {
                            body: {type: 'string'},
                            draft: {type: 'boolean'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            prerelease: {type: 'boolean'},
                            release_id: {required: true, type: 'integer'},
                            repo: {required: true, type: 'string'},
                            tag_name: {type: 'string'},
                            target_commitish: {type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/:release_id',
                    },
                    updateReleaseAsset: {
                        method: 'PATCH',
                        params: {
                            asset_id: {required: true, type: 'integer'},
                            label: {type: 'string'},
                            name: {type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                        },
                        url: '/repos/:owner/:repo/releases/assets/:asset_id',
                    },
                    uploadReleaseAsset: {
                        method: 'POST',
                        params: {
                            data: {mapTo: 'data', required: true, type: 'string | object'},
                            file: {alias: 'data', deprecated: true, type: 'string | object'},
                            headers: {required: true, type: 'object'},
                            'headers.content-length': {required: true, type: 'integer'},
                            'headers.content-type': {required: true, type: 'string'},
                            label: {type: 'string'},
                            name: {required: true, type: 'string'},
                            url: {required: true, type: 'string'},
                        },
                        url: ':url',
                    },
                },
                search: {
                    code: {
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {enum: ['indexed'], type: 'string'},
                        },
                        url: '/search/code',
                    },
                    commits: {
                        headers: {accept: 'application/vnd.github.cloak-preview+json'},
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {enum: ['author-date', 'committer-date'], type: 'string'},
                        },
                        url: '/search/commits',
                    },
                    issues: {
                        deprecated:
                            'octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)',
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {
                                enum: [
                                    'comments',
                                    'reactions',
                                    'reactions-+1',
                                    'reactions--1',
                                    'reactions-smile',
                                    'reactions-thinking_face',
                                    'reactions-heart',
                                    'reactions-tada',
                                    'interactions',
                                    'created',
                                    'updated',
                                ],
                                type: 'string',
                            },
                        },
                        url: '/search/issues',
                    },
                    issuesAndPullRequests: {
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {
                                enum: [
                                    'comments',
                                    'reactions',
                                    'reactions-+1',
                                    'reactions--1',
                                    'reactions-smile',
                                    'reactions-thinking_face',
                                    'reactions-heart',
                                    'reactions-tada',
                                    'interactions',
                                    'created',
                                    'updated',
                                ],
                                type: 'string',
                            },
                        },
                        url: '/search/issues',
                    },
                    labels: {
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            q: {required: true, type: 'string'},
                            repository_id: {required: true, type: 'integer'},
                            sort: {enum: ['created', 'updated'], type: 'string'},
                        },
                        url: '/search/labels',
                    },
                    repos: {
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {enum: ['stars', 'forks', 'help-wanted-issues', 'updated'], type: 'string'},
                        },
                        url: '/search/repositories',
                    },
                    topics: {method: 'GET', params: {q: {required: true, type: 'string'}}, url: '/search/topics'},
                    users: {
                        method: 'GET',
                        params: {
                            order: {enum: ['desc', 'asc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            q: {required: true, type: 'string'},
                            sort: {enum: ['followers', 'repositories', 'joined'], type: 'string'},
                        },
                        url: '/search/users',
                    },
                },
                teams: {
                    addMember: {
                        deprecated:
                            'octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)',
                        method: 'PUT',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    addMemberLegacy: {
                        deprecated:
                            'octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy',
                        method: 'PUT',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    addOrUpdateMembership: {
                        deprecated:
                            'octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)',
                        method: 'PUT',
                        params: {
                            role: {enum: ['member', 'maintainer'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    addOrUpdateMembershipInOrg: {
                        method: 'PUT',
                        params: {
                            org: {required: true, type: 'string'},
                            role: {enum: ['member', 'maintainer'], type: 'string'},
                            team_slug: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/memberships/:username',
                    },
                    addOrUpdateMembershipLegacy: {
                        deprecated:
                            'octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy',
                        method: 'PUT',
                        params: {
                            role: {enum: ['member', 'maintainer'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    addOrUpdateProject: {
                        deprecated:
                            'octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PUT',
                        params: {
                            permission: {enum: ['read', 'write', 'admin'], type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    addOrUpdateProjectInOrg: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PUT',
                        params: {
                            org: {required: true, type: 'string'},
                            permission: {enum: ['read', 'write', 'admin'], type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/projects/:project_id',
                    },
                    addOrUpdateProjectLegacy: {
                        deprecated:
                            'octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'PUT',
                        params: {
                            permission: {enum: ['read', 'write', 'admin'], type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    addOrUpdateRepo: {
                        deprecated:
                            'octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)',
                        method: 'PUT',
                        params: {
                            owner: {required: true, type: 'string'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    addOrUpdateRepoInOrg: {
                        method: 'PUT',
                        params: {
                            org: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
                    },
                    addOrUpdateRepoLegacy: {
                        deprecated:
                            'octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy',
                        method: 'PUT',
                        params: {
                            owner: {required: true, type: 'string'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    checkManagesRepo: {
                        deprecated:
                            'octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    checkManagesRepoInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
                    },
                    checkManagesRepoLegacy: {
                        deprecated:
                            'octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy',
                        method: 'GET',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    create: {
                        method: 'POST',
                        params: {
                            description: {type: 'string'},
                            maintainers: {type: 'string[]'},
                            name: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                            parent_team_id: {type: 'integer'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            privacy: {enum: ['secret', 'closed'], type: 'string'},
                            repo_names: {type: 'string[]'},
                        },
                        url: '/orgs/:org/teams',
                    },
                    createDiscussion: {
                        deprecated:
                            'octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)',
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            team_id: {required: true, type: 'integer'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/discussions',
                    },
                    createDiscussionComment: {
                        deprecated:
                            'octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)',
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments',
                    },
                    createDiscussionCommentInOrg: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments',
                    },
                    createDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy',
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments',
                    },
                    createDiscussionInOrg: {
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            team_slug: {required: true, type: 'string'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions',
                    },
                    createDiscussionLegacy: {
                        deprecated:
                            'octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy',
                        method: 'POST',
                        params: {
                            body: {required: true, type: 'string'},
                            private: {type: 'boolean'},
                            team_id: {required: true, type: 'integer'},
                            title: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/discussions',
                    },
                    delete: {
                        deprecated:
                            'octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {team_id: {required: true, type: 'integer'}},
                        url: '/teams/:team_id',
                    },
                    deleteDiscussion: {
                        deprecated:
                            'octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    deleteDiscussionComment: {
                        deprecated:
                            'octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    deleteDiscussionCommentInOrg: {
                        method: 'DELETE',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
                    },
                    deleteDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy',
                        method: 'DELETE',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    deleteDiscussionInOrg: {
                        method: 'DELETE',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
                    },
                    deleteDiscussionLegacy: {
                        deprecated:
                            'octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy',
                        method: 'DELETE',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    deleteInOrg: {
                        method: 'DELETE',
                        params: {org: {required: true, type: 'string'}, team_slug: {required: true, type: 'string'}},
                        url: '/orgs/:org/teams/:team_slug',
                    },
                    deleteLegacy: {
                        deprecated:
                            'octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy',
                        method: 'DELETE',
                        params: {team_id: {required: true, type: 'integer'}},
                        url: '/teams/:team_id',
                    },
                    get: {
                        deprecated: 'octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {team_id: {required: true, type: 'integer'}},
                        url: '/teams/:team_id',
                    },
                    getByName: {
                        method: 'GET',
                        params: {org: {required: true, type: 'string'}, team_slug: {required: true, type: 'string'}},
                        url: '/orgs/:org/teams/:team_slug',
                    },
                    getDiscussion: {
                        deprecated:
                            'octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    getDiscussionComment: {
                        deprecated:
                            'octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    getDiscussionCommentInOrg: {
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
                    },
                    getDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy',
                        method: 'GET',
                        params: {
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    getDiscussionInOrg: {
                        method: 'GET',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
                    },
                    getDiscussionLegacy: {
                        deprecated:
                            'octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy',
                        method: 'GET',
                        params: {
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    getLegacy: {
                        deprecated:
                            'octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy',
                        method: 'GET',
                        params: {team_id: {required: true, type: 'integer'}},
                        url: '/teams/:team_id',
                    },
                    getMember: {
                        deprecated:
                            'octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    getMemberLegacy: {
                        deprecated:
                            'octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy',
                        method: 'GET',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    getMembership: {
                        deprecated:
                            'octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    getMembershipInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/memberships/:username',
                    },
                    getMembershipLegacy: {
                        deprecated:
                            'octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy',
                        method: 'GET',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    list: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                        },
                        url: '/orgs/:org/teams',
                    },
                    listChild: {
                        deprecated:
                            'octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/teams',
                    },
                    listChildInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/teams',
                    },
                    listChildLegacy: {
                        deprecated:
                            'octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/teams',
                    },
                    listDiscussionComments: {
                        deprecated:
                            'octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments',
                    },
                    listDiscussionCommentsInOrg: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments',
                    },
                    listDiscussionCommentsLegacy: {
                        deprecated:
                            'octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy',
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments',
                    },
                    listDiscussions: {
                        deprecated:
                            'octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions',
                    },
                    listDiscussionsInOrg: {
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions',
                    },
                    listDiscussionsLegacy: {
                        deprecated:
                            'octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy',
                        method: 'GET',
                        params: {
                            direction: {enum: ['asc', 'desc'], type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions',
                    },
                    listForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/teams',
                    },
                    listMembers: {
                        deprecated:
                            'octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            role: {enum: ['member', 'maintainer', 'all'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/members',
                    },
                    listMembersInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            role: {enum: ['member', 'maintainer', 'all'], type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/members',
                    },
                    listMembersLegacy: {
                        deprecated:
                            'octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            role: {enum: ['member', 'maintainer', 'all'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/members',
                    },
                    listPendingInvitations: {
                        deprecated:
                            'octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/invitations',
                    },
                    listPendingInvitationsInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/invitations',
                    },
                    listPendingInvitationsLegacy: {
                        deprecated:
                            'octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/invitations',
                    },
                    listProjects: {
                        deprecated:
                            'octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects',
                    },
                    listProjectsInOrg: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/projects',
                    },
                    listProjectsLegacy: {
                        deprecated:
                            'octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects',
                    },
                    listRepos: {
                        deprecated:
                            'octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos',
                    },
                    listReposInOrg: {
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/repos',
                    },
                    listReposLegacy: {
                        deprecated:
                            'octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy',
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos',
                    },
                    removeMember: {
                        deprecated:
                            'octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    removeMemberLegacy: {
                        deprecated:
                            'octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy',
                        method: 'DELETE',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/members/:username',
                    },
                    removeMembership: {
                        deprecated:
                            'octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    removeMembershipInOrg: {
                        method: 'DELETE',
                        params: {
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/memberships/:username',
                    },
                    removeMembershipLegacy: {
                        deprecated:
                            'octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy',
                        method: 'DELETE',
                        params: {
                            team_id: {required: true, type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/teams/:team_id/memberships/:username',
                    },
                    removeProject: {
                        deprecated:
                            'octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    removeProjectInOrg: {
                        method: 'DELETE',
                        params: {
                            org: {required: true, type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/projects/:project_id',
                    },
                    removeProjectLegacy: {
                        deprecated:
                            'octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy',
                        method: 'DELETE',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    removeRepo: {
                        deprecated:
                            'octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)',
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    removeRepoInOrg: {
                        method: 'DELETE',
                        params: {
                            org: {required: true, type: 'string'},
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
                    },
                    removeRepoLegacy: {
                        deprecated:
                            'octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy',
                        method: 'DELETE',
                        params: {
                            owner: {required: true, type: 'string'},
                            repo: {required: true, type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/repos/:owner/:repo',
                    },
                    reviewProject: {
                        deprecated:
                            'octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    reviewProjectInOrg: {
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            org: {required: true, type: 'string'},
                            project_id: {required: true, type: 'integer'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/projects/:project_id',
                    },
                    reviewProjectLegacy: {
                        deprecated:
                            'octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy',
                        headers: {accept: 'application/vnd.github.inertia-preview+json'},
                        method: 'GET',
                        params: {
                            project_id: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/projects/:project_id',
                    },
                    update: {
                        deprecated:
                            'octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)',
                        method: 'PATCH',
                        params: {
                            description: {type: 'string'},
                            name: {required: true, type: 'string'},
                            parent_team_id: {type: 'integer'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            privacy: {enum: ['secret', 'closed'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id',
                    },
                    updateDiscussion: {
                        deprecated:
                            'octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)',
                        method: 'PATCH',
                        params: {
                            body: {type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                            title: {type: 'string'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    updateDiscussionComment: {
                        deprecated:
                            'octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)',
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    updateDiscussionCommentInOrg: {
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
                    },
                    updateDiscussionCommentLegacy: {
                        deprecated:
                            'octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy',
                        method: 'PATCH',
                        params: {
                            body: {required: true, type: 'string'},
                            comment_number: {required: true, type: 'integer'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
                    },
                    updateDiscussionInOrg: {
                        method: 'PATCH',
                        params: {
                            body: {type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            org: {required: true, type: 'string'},
                            team_slug: {required: true, type: 'string'},
                            title: {type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
                    },
                    updateDiscussionLegacy: {
                        deprecated:
                            'octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy',
                        method: 'PATCH',
                        params: {
                            body: {type: 'string'},
                            discussion_number: {required: true, type: 'integer'},
                            team_id: {required: true, type: 'integer'},
                            title: {type: 'string'},
                        },
                        url: '/teams/:team_id/discussions/:discussion_number',
                    },
                    updateInOrg: {
                        method: 'PATCH',
                        params: {
                            description: {type: 'string'},
                            name: {required: true, type: 'string'},
                            org: {required: true, type: 'string'},
                            parent_team_id: {type: 'integer'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            privacy: {enum: ['secret', 'closed'], type: 'string'},
                            team_slug: {required: true, type: 'string'},
                        },
                        url: '/orgs/:org/teams/:team_slug',
                    },
                    updateLegacy: {
                        deprecated:
                            'octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy',
                        method: 'PATCH',
                        params: {
                            description: {type: 'string'},
                            name: {required: true, type: 'string'},
                            parent_team_id: {type: 'integer'},
                            permission: {enum: ['pull', 'push', 'admin'], type: 'string'},
                            privacy: {enum: ['secret', 'closed'], type: 'string'},
                            team_id: {required: true, type: 'integer'},
                        },
                        url: '/teams/:team_id',
                    },
                },
                users: {
                    addEmails: {
                        method: 'POST',
                        params: {emails: {required: true, type: 'string[]'}},
                        url: '/user/emails',
                    },
                    block: {
                        method: 'PUT',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/blocks/:username',
                    },
                    checkBlocked: {
                        method: 'GET',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/blocks/:username',
                    },
                    checkFollowing: {
                        method: 'GET',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/following/:username',
                    },
                    checkFollowingForUser: {
                        method: 'GET',
                        params: {
                            target_user: {required: true, type: 'string'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/following/:target_user',
                    },
                    createGpgKey: {
                        method: 'POST',
                        params: {armored_public_key: {type: 'string'}},
                        url: '/user/gpg_keys',
                    },
                    createPublicKey: {
                        method: 'POST',
                        params: {key: {type: 'string'}, title: {type: 'string'}},
                        url: '/user/keys',
                    },
                    deleteEmails: {
                        method: 'DELETE',
                        params: {emails: {required: true, type: 'string[]'}},
                        url: '/user/emails',
                    },
                    deleteGpgKey: {
                        method: 'DELETE',
                        params: {gpg_key_id: {required: true, type: 'integer'}},
                        url: '/user/gpg_keys/:gpg_key_id',
                    },
                    deletePublicKey: {
                        method: 'DELETE',
                        params: {key_id: {required: true, type: 'integer'}},
                        url: '/user/keys/:key_id',
                    },
                    follow: {
                        method: 'PUT',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/following/:username',
                    },
                    getAuthenticated: {method: 'GET', params: {}, url: '/user'},
                    getByUsername: {
                        method: 'GET',
                        params: {username: {required: true, type: 'string'}},
                        url: '/users/:username',
                    },
                    getContextForUser: {
                        method: 'GET',
                        params: {
                            subject_id: {type: 'string'},
                            subject_type: {
                                enum: ['organization', 'repository', 'issue', 'pull_request'],
                                type: 'string',
                            },
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/hovercard',
                    },
                    getGpgKey: {
                        method: 'GET',
                        params: {gpg_key_id: {required: true, type: 'integer'}},
                        url: '/user/gpg_keys/:gpg_key_id',
                    },
                    getPublicKey: {
                        method: 'GET',
                        params: {key_id: {required: true, type: 'integer'}},
                        url: '/user/keys/:key_id',
                    },
                    list: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}, since: {type: 'string'}},
                        url: '/users',
                    },
                    listBlocked: {method: 'GET', params: {}, url: '/user/blocks'},
                    listEmails: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/emails',
                    },
                    listFollowersForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/followers',
                    },
                    listFollowersForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/followers',
                    },
                    listFollowingForAuthenticatedUser: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/following',
                    },
                    listFollowingForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/following',
                    },
                    listGpgKeys: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/gpg_keys',
                    },
                    listGpgKeysForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/gpg_keys',
                    },
                    listPublicEmails: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/public_emails',
                    },
                    listPublicKeys: {
                        method: 'GET',
                        params: {page: {type: 'integer'}, per_page: {type: 'integer'}},
                        url: '/user/keys',
                    },
                    listPublicKeysForUser: {
                        method: 'GET',
                        params: {
                            page: {type: 'integer'},
                            per_page: {type: 'integer'},
                            username: {required: true, type: 'string'},
                        },
                        url: '/users/:username/keys',
                    },
                    togglePrimaryEmailVisibility: {
                        method: 'PATCH',
                        params: {email: {required: true, type: 'string'}, visibility: {required: true, type: 'string'}},
                        url: '/user/email/visibility',
                    },
                    unblock: {
                        method: 'DELETE',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/blocks/:username',
                    },
                    unfollow: {
                        method: 'DELETE',
                        params: {username: {required: true, type: 'string'}},
                        url: '/user/following/:username',
                    },
                    updateAuthenticated: {
                        method: 'PATCH',
                        params: {
                            bio: {type: 'string'},
                            blog: {type: 'string'},
                            company: {type: 'string'},
                            email: {type: 'string'},
                            hireable: {type: 'boolean'},
                            location: {type: 'string'},
                            name: {type: 'string'},
                        },
                        url: '/user',
                    },
                },
            };
            const s = '2.4.0';
            function registerEndpoints(e, t) {
                Object.keys(t).forEach((r) => {
                    if (!e[r]) {
                        e[r] = {};
                    }
                    Object.keys(t[r]).forEach((n) => {
                        const s = t[r][n];
                        const o = ['method', 'url', 'headers'].reduce((e, t) => {
                            if (typeof s[t] !== 'undefined') {
                                e[t] = s[t];
                            }
                            return e;
                        }, {});
                        o.request = {validate: s.params};
                        let a = e.request.defaults(o);
                        const u = Object.keys(s.params || {}).find((e) => s.params[e].deprecated);
                        if (u) {
                            const t = patchForDeprecation.bind(null, e, s);
                            a = t(e.request.defaults(o), `.${r}.${n}()`);
                            a.endpoint = t(a.endpoint, `.${r}.${n}.endpoint()`);
                            a.endpoint.merge = t(a.endpoint.merge, `.${r}.${n}.endpoint.merge()`);
                        }
                        if (s.deprecated) {
                            e[r][n] = Object.assign(function deprecatedEndpointMethod() {
                                e.log.warn(new i.Deprecation(`[@octokit/rest] ${s.deprecated}`));
                                e[r][n] = a;
                                return a.apply(null, arguments);
                            }, a);
                            return;
                        }
                        e[r][n] = a;
                    });
                });
            }
            function patchForDeprecation(e, t, r, n) {
                const s = (s) => {
                    s = Object.assign({}, s);
                    Object.keys(s).forEach((r) => {
                        if (t.params[r] && t.params[r].deprecated) {
                            const o = t.params[r].alias;
                            e.log.warn(
                                new i.Deprecation(
                                    `[@octokit/rest] "${r}" parameter is deprecated for "${n}". Use "${o}" instead`,
                                ),
                            );
                            if (!(o in s)) {
                                s[o] = s[r];
                            }
                            delete s[r];
                        }
                    });
                    return r(s);
                };
                Object.keys(r).forEach((e) => {
                    s[e] = r[e];
                });
                return s;
            }
            function restEndpointMethods(e) {
                e.registerEndpoints = registerEndpoints.bind(null, e);
                registerEndpoints(e, n);
                [
                    ['gitdata', 'git'],
                    ['authorization', 'oauthAuthorizations'],
                    ['pullRequests', 'pulls'],
                ].forEach(([t, r]) => {
                    Object.defineProperty(e, t, {
                        get() {
                            e.log.warn(
                                new i.Deprecation(
                                    `[@octokit/plugin-rest-endpoint-methods] "octokit.${t}.*" methods are deprecated, use "octokit.${r}.*" instead`,
                                ),
                            );
                            return e[r];
                        },
                    });
                });
                return {};
            }
            restEndpointMethods.VERSION = s;
            t.restEndpointMethods = restEndpointMethods;
        },
        850: function (e, t, r) {
            e.exports = paginationMethodsPlugin;
            function paginationMethodsPlugin(e) {
                e.getFirstPage = r(777).bind(null, e);
                e.getLastPage = r(649).bind(null, e);
                e.getNextPage = r(550).bind(null, e);
                e.getPreviousPage = r(563).bind(null, e);
                e.hasFirstPage = r(536);
                e.hasLastPage = r(336);
                e.hasNextPage = r(929);
                e.hasPreviousPage = r(558);
            }
        },
        854: function (e) {
            var t = 'Expected a function';
            var r = '__lodash_hash_undefined__';
            var i = 1 / 0;
            var n = '[object Function]',
                s = '[object GeneratorFunction]',
                o = '[object Symbol]';
            var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                u = /^\w*$/,
                p = /^\./,
                c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
            var d = /[\\^$.*+?()[\]{}|]/g;
            var l = /\\(\\)?/g;
            var g = /^\[object .+?Constructor\]$/;
            var m = typeof global == 'object' && global && global.Object === Object && global;
            var h = typeof self == 'object' && self && self.Object === Object && self;
            var y = m || h || Function('return this')();
            function getValue(e, t) {
                return e == null ? undefined : e[t];
            }
            function isHostObject(e) {
                var t = false;
                if (e != null && typeof e.toString != 'function') {
                    try {
                        t = !!(e + '');
                    } catch (e) {}
                }
                return t;
            }
            var f = Array.prototype,
                b = Function.prototype,
                _ = Object.prototype;
            var q = y['__core-js_shared__'];
            var w = (function () {
                var e = /[^.]+$/.exec((q && q.keys && q.keys.IE_PROTO) || '');
                return e ? 'Symbol(src)_1.' + e : '';
            })();
            var v = b.toString;
            var E = _.hasOwnProperty;
            var T = _.toString;
            var k = RegExp(
                '^' +
                    v
                        .call(E)
                        .replace(d, '\\$&')
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                    '$',
            );
            var C = y.Symbol,
                O = f.splice;
            var j = getNative(y, 'Map'),
                P = getNative(Object, 'create');
            var S = C ? C.prototype : undefined,
                R = S ? S.toString : undefined;
            function Hash(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function hashClear() {
                this.__data__ = P ? P(null) : {};
            }
            function hashDelete(e) {
                return this.has(e) && delete this.__data__[e];
            }
            function hashGet(e) {
                var t = this.__data__;
                if (P) {
                    var i = t[e];
                    return i === r ? undefined : i;
                }
                return E.call(t, e) ? t[e] : undefined;
            }
            function hashHas(e) {
                var t = this.__data__;
                return P ? t[e] !== undefined : E.call(t, e);
            }
            function hashSet(e, t) {
                var i = this.__data__;
                i[e] = P && t === undefined ? r : t;
                return this;
            }
            Hash.prototype.clear = hashClear;
            Hash.prototype['delete'] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;
            function ListCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function listCacheClear() {
                this.__data__ = [];
            }
            function listCacheDelete(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                if (r < 0) {
                    return false;
                }
                var i = t.length - 1;
                if (r == i) {
                    t.pop();
                } else {
                    O.call(t, r, 1);
                }
                return true;
            }
            function listCacheGet(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                return r < 0 ? undefined : t[r][1];
            }
            function listCacheHas(e) {
                return assocIndexOf(this.__data__, e) > -1;
            }
            function listCacheSet(e, t) {
                var r = this.__data__,
                    i = assocIndexOf(r, e);
                if (i < 0) {
                    r.push([e, t]);
                } else {
                    r[i][1] = t;
                }
                return this;
            }
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype['delete'] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;
            function MapCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function mapCacheClear() {
                this.__data__ = {hash: new Hash(), map: new (j || ListCache)(), string: new Hash()};
            }
            function mapCacheDelete(e) {
                return getMapData(this, e)['delete'](e);
            }
            function mapCacheGet(e) {
                return getMapData(this, e).get(e);
            }
            function mapCacheHas(e) {
                return getMapData(this, e).has(e);
            }
            function mapCacheSet(e, t) {
                getMapData(this, e).set(e, t);
                return this;
            }
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype['delete'] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;
            function assocIndexOf(e, t) {
                var r = e.length;
                while (r--) {
                    if (eq(e[r][0], t)) {
                        return r;
                    }
                }
                return -1;
            }
            function baseGet(e, t) {
                t = isKey(t, e) ? [t] : castPath(t);
                var r = 0,
                    i = t.length;
                while (e != null && r < i) {
                    e = e[toKey(t[r++])];
                }
                return r && r == i ? e : undefined;
            }
            function baseIsNative(e) {
                if (!isObject(e) || isMasked(e)) {
                    return false;
                }
                var t = isFunction(e) || isHostObject(e) ? k : g;
                return t.test(toSource(e));
            }
            function baseToString(e) {
                if (typeof e == 'string') {
                    return e;
                }
                if (isSymbol(e)) {
                    return R ? R.call(e) : '';
                }
                var t = e + '';
                return t == '0' && 1 / e == -i ? '-0' : t;
            }
            function castPath(e) {
                return x(e) ? e : A(e);
            }
            function getMapData(e, t) {
                var r = e.__data__;
                return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
            }
            function getNative(e, t) {
                var r = getValue(e, t);
                return baseIsNative(r) ? r : undefined;
            }
            function isKey(e, t) {
                if (x(e)) {
                    return false;
                }
                var r = typeof e;
                if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
                    return true;
                }
                return u.test(e) || !a.test(e) || (t != null && e in Object(t));
            }
            function isKeyable(e) {
                var t = typeof e;
                return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
                    ? e !== '__proto__'
                    : e === null;
            }
            function isMasked(e) {
                return !!w && w in e;
            }
            var A = memoize(function (e) {
                e = toString(e);
                var t = [];
                if (p.test(e)) {
                    t.push('');
                }
                e.replace(c, function (e, r, i, n) {
                    t.push(i ? n.replace(l, '$1') : r || e);
                });
                return t;
            });
            function toKey(e) {
                if (typeof e == 'string' || isSymbol(e)) {
                    return e;
                }
                var t = e + '';
                return t == '0' && 1 / e == -i ? '-0' : t;
            }
            function toSource(e) {
                if (e != null) {
                    try {
                        return v.call(e);
                    } catch (e) {}
                    try {
                        return e + '';
                    } catch (e) {}
                }
                return '';
            }
            function memoize(e, r) {
                if (typeof e != 'function' || (r && typeof r != 'function')) {
                    throw new TypeError(t);
                }
                var i = function () {
                    var t = arguments,
                        n = r ? r.apply(this, t) : t[0],
                        s = i.cache;
                    if (s.has(n)) {
                        return s.get(n);
                    }
                    var o = e.apply(this, t);
                    i.cache = s.set(n, o);
                    return o;
                };
                i.cache = new (memoize.Cache || MapCache)();
                return i;
            }
            memoize.Cache = MapCache;
            function eq(e, t) {
                return e === t || (e !== e && t !== t);
            }
            var x = Array.isArray;
            function isFunction(e) {
                var t = isObject(e) ? T.call(e) : '';
                return t == n || t == s;
            }
            function isObject(e) {
                var t = typeof e;
                return !!e && (t == 'object' || t == 'function');
            }
            function isObjectLike(e) {
                return !!e && typeof e == 'object';
            }
            function isSymbol(e) {
                return typeof e == 'symbol' || (isObjectLike(e) && T.call(e) == o);
            }
            function toString(e) {
                return e == null ? '' : baseToString(e);
            }
            function get(e, t, r) {
                var i = e == null ? undefined : baseGet(e, t);
                return i === undefined ? r : i;
            }
            e.exports = get;
        },
        855: function (e, t, r) {
            e.exports = registerPlugin;
            const i = r(47);
            function registerPlugin(e, t) {
                return i(e.includes(t) ? e : e.concat(t));
            }
        },
        856: function (e, t, r) {
            e.exports = r(141);
        },
        863: function (e, t, r) {
            e.exports = authenticationBeforeRequest;
            const i = r(675);
            const n = r(143);
            function authenticationBeforeRequest(e, t) {
                if (typeof e.auth === 'string') {
                    t.headers.authorization = n(e.auth);
                    return;
                }
                if (e.auth.username) {
                    const r = i(`${e.auth.username}:${e.auth.password}`);
                    t.headers.authorization = `Basic ${r}`;
                    if (e.otp) {
                        t.headers['x-github-otp'] = e.otp;
                    }
                    return;
                }
                if (e.auth.clientId) {
                    if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
                        const r = i(`${e.auth.clientId}:${e.auth.clientSecret}`);
                        t.headers.authorization = `Basic ${r}`;
                        return;
                    }
                    t.url += t.url.indexOf('?') === -1 ? '?' : '&';
                    t.url += `client_id=${e.auth.clientId}&client_secret=${e.auth.clientSecret}`;
                    return;
                }
                return Promise.resolve()
                    .then(() => {
                        return e.auth();
                    })
                    .then((e) => {
                        t.headers.authorization = n(e);
                    });
            }
        },
        864: function (e, t) {
            t = e.exports = SemVer;
            var r;
            if (
                typeof process === 'object' &&
                process.env &&
                process.env.NODE_DEBUG &&
                /\bsemver\b/i.test(process.env.NODE_DEBUG)
            ) {
                r = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    e.unshift('SEMVER');
                    console.log.apply(console, e);
                };
            } else {
                r = function () {};
            }
            t.SEMVER_SPEC_VERSION = '2.0.0';
            var i = 256;
            var n = Number.MAX_SAFE_INTEGER || 9007199254740991;
            var s = 16;
            var o = (t.re = []);
            var a = (t.src = []);
            var u = 0;
            var p = u++;
            a[p] = '0|[1-9]\\d*';
            var c = u++;
            a[c] = '[0-9]+';
            var d = u++;
            a[d] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
            var l = u++;
            a[l] = '(' + a[p] + ')\\.' + '(' + a[p] + ')\\.' + '(' + a[p] + ')';
            var g = u++;
            a[g] = '(' + a[c] + ')\\.' + '(' + a[c] + ')\\.' + '(' + a[c] + ')';
            var m = u++;
            a[m] = '(?:' + a[p] + '|' + a[d] + ')';
            var h = u++;
            a[h] = '(?:' + a[c] + '|' + a[d] + ')';
            var y = u++;
            a[y] = '(?:-(' + a[m] + '(?:\\.' + a[m] + ')*))';
            var f = u++;
            a[f] = '(?:-?(' + a[h] + '(?:\\.' + a[h] + ')*))';
            var b = u++;
            a[b] = '[0-9A-Za-z-]+';
            var _ = u++;
            a[_] = '(?:\\+(' + a[b] + '(?:\\.' + a[b] + ')*))';
            var q = u++;
            var w = 'v?' + a[l] + a[y] + '?' + a[_] + '?';
            a[q] = '^' + w + '$';
            var v = '[v=\\s]*' + a[g] + a[f] + '?' + a[_] + '?';
            var E = u++;
            a[E] = '^' + v + '$';
            var T = u++;
            a[T] = '((?:<|>)?=?)';
            var k = u++;
            a[k] = a[c] + '|x|X|\\*';
            var C = u++;
            a[C] = a[p] + '|x|X|\\*';
            var O = u++;
            a[O] =
                '[v=\\s]*(' +
                a[C] +
                ')' +
                '(?:\\.(' +
                a[C] +
                ')' +
                '(?:\\.(' +
                a[C] +
                ')' +
                '(?:' +
                a[y] +
                ')?' +
                a[_] +
                '?' +
                ')?)?';
            var j = u++;
            a[j] =
                '[v=\\s]*(' +
                a[k] +
                ')' +
                '(?:\\.(' +
                a[k] +
                ')' +
                '(?:\\.(' +
                a[k] +
                ')' +
                '(?:' +
                a[f] +
                ')?' +
                a[_] +
                '?' +
                ')?)?';
            var P = u++;
            a[P] = '^' + a[T] + '\\s*' + a[O] + '$';
            var S = u++;
            a[S] = '^' + a[T] + '\\s*' + a[j] + '$';
            var R = u++;
            a[R] =
                '(?:^|[^\\d])' +
                '(\\d{1,' +
                s +
                '})' +
                '(?:\\.(\\d{1,' +
                s +
                '}))?' +
                '(?:\\.(\\d{1,' +
                s +
                '}))?' +
                '(?:$|[^\\d])';
            var A = u++;
            a[A] = '(?:~>?)';
            var x = u++;
            a[x] = '(\\s*)' + a[A] + '\\s+';
            o[x] = new RegExp(a[x], 'g');
            var G = '$1~';
            var D = u++;
            a[D] = '^' + a[A] + a[O] + '$';
            var L = u++;
            a[L] = '^' + a[A] + a[j] + '$';
            var F = u++;
            a[F] = '(?:\\^)';
            var U = u++;
            a[U] = '(\\s*)' + a[F] + '\\s+';
            o[U] = new RegExp(a[U], 'g');
            var I = '$1^';
            var H = u++;
            a[H] = '^' + a[F] + a[O] + '$';
            var $ = u++;
            a[$] = '^' + a[F] + a[j] + '$';
            var B = u++;
            a[B] = '^' + a[T] + '\\s*(' + v + ')$|^$';
            var N = u++;
            a[N] = '^' + a[T] + '\\s*(' + w + ')$|^$';
            var z = u++;
            a[z] = '(\\s*)' + a[T] + '\\s*(' + v + '|' + a[O] + ')';
            o[z] = new RegExp(a[z], 'g');
            var V = '$1$2$3';
            var W = u++;
            a[W] = '^\\s*(' + a[O] + ')' + '\\s+-\\s+' + '(' + a[O] + ')' + '\\s*$';
            var J = u++;
            a[J] = '^\\s*(' + a[j] + ')' + '\\s+-\\s+' + '(' + a[j] + ')' + '\\s*$';
            var K = u++;
            a[K] = '(<|>)?=?\\s*\\*';
            for (var X = 0; X < u; X++) {
                r(X, a[X]);
                if (!o[X]) {
                    o[X] = new RegExp(a[X]);
                }
            }
            t.parse = parse;
            function parse(e, t) {
                if (!t || typeof t !== 'object') {
                    t = {loose: !!t, includePrerelease: false};
                }
                if (e instanceof SemVer) {
                    return e;
                }
                if (typeof e !== 'string') {
                    return null;
                }
                if (e.length > i) {
                    return null;
                }
                var r = t.loose ? o[E] : o[q];
                if (!r.test(e)) {
                    return null;
                }
                try {
                    return new SemVer(e, t);
                } catch (e) {
                    return null;
                }
            }
            t.valid = valid;
            function valid(e, t) {
                var r = parse(e, t);
                return r ? r.version : null;
            }
            t.clean = clean;
            function clean(e, t) {
                var r = parse(e.trim().replace(/^[=v]+/, ''), t);
                return r ? r.version : null;
            }
            t.SemVer = SemVer;
            function SemVer(e, t) {
                if (!t || typeof t !== 'object') {
                    t = {loose: !!t, includePrerelease: false};
                }
                if (e instanceof SemVer) {
                    if (e.loose === t.loose) {
                        return e;
                    } else {
                        e = e.version;
                    }
                } else if (typeof e !== 'string') {
                    throw new TypeError('Invalid Version: ' + e);
                }
                if (e.length > i) {
                    throw new TypeError('version is longer than ' + i + ' characters');
                }
                if (!(this instanceof SemVer)) {
                    return new SemVer(e, t);
                }
                r('SemVer', e, t);
                this.options = t;
                this.loose = !!t.loose;
                var s = e.trim().match(t.loose ? o[E] : o[q]);
                if (!s) {
                    throw new TypeError('Invalid Version: ' + e);
                }
                this.raw = e;
                this.major = +s[1];
                this.minor = +s[2];
                this.patch = +s[3];
                if (this.major > n || this.major < 0) {
                    throw new TypeError('Invalid major version');
                }
                if (this.minor > n || this.minor < 0) {
                    throw new TypeError('Invalid minor version');
                }
                if (this.patch > n || this.patch < 0) {
                    throw new TypeError('Invalid patch version');
                }
                if (!s[4]) {
                    this.prerelease = [];
                } else {
                    this.prerelease = s[4].split('.').map(function (e) {
                        if (/^[0-9]+$/.test(e)) {
                            var t = +e;
                            if (t >= 0 && t < n) {
                                return t;
                            }
                        }
                        return e;
                    });
                }
                this.build = s[5] ? s[5].split('.') : [];
                this.format();
            }
            SemVer.prototype.format = function () {
                this.version = this.major + '.' + this.minor + '.' + this.patch;
                if (this.prerelease.length) {
                    this.version += '-' + this.prerelease.join('.');
                }
                return this.version;
            };
            SemVer.prototype.toString = function () {
                return this.version;
            };
            SemVer.prototype.compare = function (e) {
                r('SemVer.compare', this.version, this.options, e);
                if (!(e instanceof SemVer)) {
                    e = new SemVer(e, this.options);
                }
                return this.compareMain(e) || this.comparePre(e);
            };
            SemVer.prototype.compareMain = function (e) {
                if (!(e instanceof SemVer)) {
                    e = new SemVer(e, this.options);
                }
                return (
                    compareIdentifiers(this.major, e.major) ||
                    compareIdentifiers(this.minor, e.minor) ||
                    compareIdentifiers(this.patch, e.patch)
                );
            };
            SemVer.prototype.comparePre = function (e) {
                if (!(e instanceof SemVer)) {
                    e = new SemVer(e, this.options);
                }
                if (this.prerelease.length && !e.prerelease.length) {
                    return -1;
                } else if (!this.prerelease.length && e.prerelease.length) {
                    return 1;
                } else if (!this.prerelease.length && !e.prerelease.length) {
                    return 0;
                }
                var t = 0;
                do {
                    var i = this.prerelease[t];
                    var n = e.prerelease[t];
                    r('prerelease compare', t, i, n);
                    if (i === undefined && n === undefined) {
                        return 0;
                    } else if (n === undefined) {
                        return 1;
                    } else if (i === undefined) {
                        return -1;
                    } else if (i === n) {
                        continue;
                    } else {
                        return compareIdentifiers(i, n);
                    }
                } while (++t);
            };
            SemVer.prototype.inc = function (e, t) {
                switch (e) {
                    case 'premajor':
                        this.prerelease.length = 0;
                        this.patch = 0;
                        this.minor = 0;
                        this.major++;
                        this.inc('pre', t);
                        break;
                    case 'preminor':
                        this.prerelease.length = 0;
                        this.patch = 0;
                        this.minor++;
                        this.inc('pre', t);
                        break;
                    case 'prepatch':
                        this.prerelease.length = 0;
                        this.inc('patch', t);
                        this.inc('pre', t);
                        break;
                    case 'prerelease':
                        if (this.prerelease.length === 0) {
                            this.inc('patch', t);
                        }
                        this.inc('pre', t);
                        break;
                    case 'major':
                        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                            this.major++;
                        }
                        this.minor = 0;
                        this.patch = 0;
                        this.prerelease = [];
                        break;
                    case 'minor':
                        if (this.patch !== 0 || this.prerelease.length === 0) {
                            this.minor++;
                        }
                        this.patch = 0;
                        this.prerelease = [];
                        break;
                    case 'patch':
                        if (this.prerelease.length === 0) {
                            this.patch++;
                        }
                        this.prerelease = [];
                        break;
                    case 'pre':
                        if (this.prerelease.length === 0) {
                            this.prerelease = [0];
                        } else {
                            var r = this.prerelease.length;
                            while (--r >= 0) {
                                if (typeof this.prerelease[r] === 'number') {
                                    this.prerelease[r]++;
                                    r = -2;
                                }
                            }
                            if (r === -1) {
                                this.prerelease.push(0);
                            }
                        }
                        if (t) {
                            if (this.prerelease[0] === t) {
                                if (isNaN(this.prerelease[1])) {
                                    this.prerelease = [t, 0];
                                }
                            } else {
                                this.prerelease = [t, 0];
                            }
                        }
                        break;
                    default:
                        throw new Error('invalid increment argument: ' + e);
                }
                this.format();
                this.raw = this.version;
                return this;
            };
            t.inc = inc;
            function inc(e, t, r, i) {
                if (typeof r === 'string') {
                    i = r;
                    r = undefined;
                }
                try {
                    return new SemVer(e, r).inc(t, i).version;
                } catch (e) {
                    return null;
                }
            }
            t.diff = diff;
            function diff(e, t) {
                if (eq(e, t)) {
                    return null;
                } else {
                    var r = parse(e);
                    var i = parse(t);
                    var n = '';
                    if (r.prerelease.length || i.prerelease.length) {
                        n = 'pre';
                        var s = 'prerelease';
                    }
                    for (var o in r) {
                        if (o === 'major' || o === 'minor' || o === 'patch') {
                            if (r[o] !== i[o]) {
                                return n + o;
                            }
                        }
                    }
                    return s;
                }
            }
            t.compareIdentifiers = compareIdentifiers;
            var M = /^[0-9]+$/;
            function compareIdentifiers(e, t) {
                var r = M.test(e);
                var i = M.test(t);
                if (r && i) {
                    e = +e;
                    t = +t;
                }
                return e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
            }
            t.rcompareIdentifiers = rcompareIdentifiers;
            function rcompareIdentifiers(e, t) {
                return compareIdentifiers(t, e);
            }
            t.major = major;
            function major(e, t) {
                return new SemVer(e, t).major;
            }
            t.minor = minor;
            function minor(e, t) {
                return new SemVer(e, t).minor;
            }
            t.patch = patch;
            function patch(e, t) {
                return new SemVer(e, t).patch;
            }
            t.compare = compare;
            function compare(e, t, r) {
                return new SemVer(e, r).compare(new SemVer(t, r));
            }
            t.compareLoose = compareLoose;
            function compareLoose(e, t) {
                return compare(e, t, true);
            }
            t.rcompare = rcompare;
            function rcompare(e, t, r) {
                return compare(t, e, r);
            }
            t.sort = sort;
            function sort(e, r) {
                return e.sort(function (e, i) {
                    return t.compare(e, i, r);
                });
            }
            t.rsort = rsort;
            function rsort(e, r) {
                return e.sort(function (e, i) {
                    return t.rcompare(e, i, r);
                });
            }
            t.gt = gt;
            function gt(e, t, r) {
                return compare(e, t, r) > 0;
            }
            t.lt = lt;
            function lt(e, t, r) {
                return compare(e, t, r) < 0;
            }
            t.eq = eq;
            function eq(e, t, r) {
                return compare(e, t, r) === 0;
            }
            t.neq = neq;
            function neq(e, t, r) {
                return compare(e, t, r) !== 0;
            }
            t.gte = gte;
            function gte(e, t, r) {
                return compare(e, t, r) >= 0;
            }
            t.lte = lte;
            function lte(e, t, r) {
                return compare(e, t, r) <= 0;
            }
            t.cmp = cmp;
            function cmp(e, t, r, i) {
                switch (t) {
                    case '===':
                        if (typeof e === 'object') e = e.version;
                        if (typeof r === 'object') r = r.version;
                        return e === r;
                    case '!==':
                        if (typeof e === 'object') e = e.version;
                        if (typeof r === 'object') r = r.version;
                        return e !== r;
                    case '':
                    case '=':
                    case '==':
                        return eq(e, r, i);
                    case '!=':
                        return neq(e, r, i);
                    case '>':
                        return gt(e, r, i);
                    case '>=':
                        return gte(e, r, i);
                    case '<':
                        return lt(e, r, i);
                    case '<=':
                        return lte(e, r, i);
                    default:
                        throw new TypeError('Invalid operator: ' + t);
                }
            }
            t.Comparator = Comparator;
            function Comparator(e, t) {
                if (!t || typeof t !== 'object') {
                    t = {loose: !!t, includePrerelease: false};
                }
                if (e instanceof Comparator) {
                    if (e.loose === !!t.loose) {
                        return e;
                    } else {
                        e = e.value;
                    }
                }
                if (!(this instanceof Comparator)) {
                    return new Comparator(e, t);
                }
                r('comparator', e, t);
                this.options = t;
                this.loose = !!t.loose;
                this.parse(e);
                if (this.semver === Y) {
                    this.value = '';
                } else {
                    this.value = this.operator + this.semver.version;
                }
                r('comp', this);
            }
            var Y = {};
            Comparator.prototype.parse = function (e) {
                var t = this.options.loose ? o[B] : o[N];
                var r = e.match(t);
                if (!r) {
                    throw new TypeError('Invalid comparator: ' + e);
                }
                this.operator = r[1];
                if (this.operator === '=') {
                    this.operator = '';
                }
                if (!r[2]) {
                    this.semver = Y;
                } else {
                    this.semver = new SemVer(r[2], this.options.loose);
                }
            };
            Comparator.prototype.toString = function () {
                return this.value;
            };
            Comparator.prototype.test = function (e) {
                r('Comparator.test', e, this.options.loose);
                if (this.semver === Y) {
                    return true;
                }
                if (typeof e === 'string') {
                    e = new SemVer(e, this.options);
                }
                return cmp(e, this.operator, this.semver, this.options);
            };
            Comparator.prototype.intersects = function (e, t) {
                if (!(e instanceof Comparator)) {
                    throw new TypeError('a Comparator is required');
                }
                if (!t || typeof t !== 'object') {
                    t = {loose: !!t, includePrerelease: false};
                }
                var r;
                if (this.operator === '') {
                    r = new Range(e.value, t);
                    return satisfies(this.value, r, t);
                } else if (e.operator === '') {
                    r = new Range(this.value, t);
                    return satisfies(e.semver, r, t);
                }
                var i =
                    (this.operator === '>=' || this.operator === '>') && (e.operator === '>=' || e.operator === '>');
                var n =
                    (this.operator === '<=' || this.operator === '<') && (e.operator === '<=' || e.operator === '<');
                var s = this.semver.version === e.semver.version;
                var o =
                    (this.operator === '>=' || this.operator === '<=') && (e.operator === '>=' || e.operator === '<=');
                var a =
                    cmp(this.semver, '<', e.semver, t) &&
                    (this.operator === '>=' || this.operator === '>') &&
                    (e.operator === '<=' || e.operator === '<');
                var u =
                    cmp(this.semver, '>', e.semver, t) &&
                    (this.operator === '<=' || this.operator === '<') &&
                    (e.operator === '>=' || e.operator === '>');
                return i || n || (s && o) || a || u;
            };
            t.Range = Range;
            function Range(e, t) {
                if (!t || typeof t !== 'object') {
                    t = {loose: !!t, includePrerelease: false};
                }
                if (e instanceof Range) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
                        return e;
                    } else {
                        return new Range(e.raw, t);
                    }
                }
                if (e instanceof Comparator) {
                    return new Range(e.value, t);
                }
                if (!(this instanceof Range)) {
                    return new Range(e, t);
                }
                this.options = t;
                this.loose = !!t.loose;
                this.includePrerelease = !!t.includePrerelease;
                this.raw = e;
                this.set = e
                    .split(/\s*\|\|\s*/)
                    .map(function (e) {
                        return this.parseRange(e.trim());
                    }, this)
                    .filter(function (e) {
                        return e.length;
                    });
                if (!this.set.length) {
                    throw new TypeError('Invalid SemVer Range: ' + e);
                }
                this.format();
            }
            Range.prototype.format = function () {
                this.range = this.set
                    .map(function (e) {
                        return e.join(' ').trim();
                    })
                    .join('||')
                    .trim();
                return this.range;
            };
            Range.prototype.toString = function () {
                return this.range;
            };
            Range.prototype.parseRange = function (e) {
                var t = this.options.loose;
                e = e.trim();
                var i = t ? o[J] : o[W];
                e = e.replace(i, hyphenReplace);
                r('hyphen replace', e);
                e = e.replace(o[z], V);
                r('comparator trim', e, o[z]);
                e = e.replace(o[x], G);
                e = e.replace(o[U], I);
                e = e.split(/\s+/).join(' ');
                var n = t ? o[B] : o[N];
                var s = e
                    .split(' ')
                    .map(function (e) {
                        return parseComparator(e, this.options);
                    }, this)
                    .join(' ')
                    .split(/\s+/);
                if (this.options.loose) {
                    s = s.filter(function (e) {
                        return !!e.match(n);
                    });
                }
                s = s.map(function (e) {
                    return new Comparator(e, this.options);
                }, this);
                return s;
            };
            Range.prototype.intersects = function (e, t) {
                if (!(e instanceof Range)) {
                    throw new TypeError('a Range is required');
                }
                return this.set.some(function (r) {
                    return r.every(function (r) {
                        return e.set.some(function (e) {
                            return e.every(function (e) {
                                return r.intersects(e, t);
                            });
                        });
                    });
                });
            };
            t.toComparators = toComparators;
            function toComparators(e, t) {
                return new Range(e, t).set.map(function (e) {
                    return e
                        .map(function (e) {
                            return e.value;
                        })
                        .join(' ')
                        .trim()
                        .split(' ');
                });
            }
            function parseComparator(e, t) {
                r('comp', e, t);
                e = replaceCarets(e, t);
                r('caret', e);
                e = replaceTildes(e, t);
                r('tildes', e);
                e = replaceXRanges(e, t);
                r('xrange', e);
                e = replaceStars(e, t);
                r('stars', e);
                return e;
            }
            function isX(e) {
                return !e || e.toLowerCase() === 'x' || e === '*';
            }
            function replaceTildes(e, t) {
                return e
                    .trim()
                    .split(/\s+/)
                    .map(function (e) {
                        return replaceTilde(e, t);
                    })
                    .join(' ');
            }
            function replaceTilde(e, t) {
                var i = t.loose ? o[L] : o[D];
                return e.replace(i, function (t, i, n, s, o) {
                    r('tilde', e, t, i, n, s, o);
                    var a;
                    if (isX(i)) {
                        a = '';
                    } else if (isX(n)) {
                        a = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0';
                    } else if (isX(s)) {
                        a = '>=' + i + '.' + n + '.0 <' + i + '.' + (+n + 1) + '.0';
                    } else if (o) {
                        r('replaceTilde pr', o);
                        a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + (+n + 1) + '.0';
                    } else {
                        a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + (+n + 1) + '.0';
                    }
                    r('tilde return', a);
                    return a;
                });
            }
            function replaceCarets(e, t) {
                return e
                    .trim()
                    .split(/\s+/)
                    .map(function (e) {
                        return replaceCaret(e, t);
                    })
                    .join(' ');
            }
            function replaceCaret(e, t) {
                r('caret', e, t);
                var i = t.loose ? o[$] : o[H];
                return e.replace(i, function (t, i, n, s, o) {
                    r('caret', e, t, i, n, s, o);
                    var a;
                    if (isX(i)) {
                        a = '';
                    } else if (isX(n)) {
                        a = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0';
                    } else if (isX(s)) {
                        if (i === '0') {
                            a = '>=' + i + '.' + n + '.0 <' + i + '.' + (+n + 1) + '.0';
                        } else {
                            a = '>=' + i + '.' + n + '.0 <' + (+i + 1) + '.0.0';
                        }
                    } else if (o) {
                        r('replaceCaret pr', o);
                        if (i === '0') {
                            if (n === '0') {
                                a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + n + '.' + (+s + 1);
                            } else {
                                a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + (+n + 1) + '.0';
                            }
                        } else {
                            a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + (+i + 1) + '.0.0';
                        }
                    } else {
                        r('no pr');
                        if (i === '0') {
                            if (n === '0') {
                                a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + n + '.' + (+s + 1);
                            } else {
                                a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + (+n + 1) + '.0';
                            }
                        } else {
                            a = '>=' + i + '.' + n + '.' + s + ' <' + (+i + 1) + '.0.0';
                        }
                    }
                    r('caret return', a);
                    return a;
                });
            }
            function replaceXRanges(e, t) {
                r('replaceXRanges', e, t);
                return e
                    .split(/\s+/)
                    .map(function (e) {
                        return replaceXRange(e, t);
                    })
                    .join(' ');
            }
            function replaceXRange(e, t) {
                e = e.trim();
                var i = t.loose ? o[S] : o[P];
                return e.replace(i, function (t, i, n, s, o, a) {
                    r('xRange', e, t, i, n, s, o, a);
                    var u = isX(n);
                    var p = u || isX(s);
                    var c = p || isX(o);
                    var d = c;
                    if (i === '=' && d) {
                        i = '';
                    }
                    if (u) {
                        if (i === '>' || i === '<') {
                            t = '<0.0.0';
                        } else {
                            t = '*';
                        }
                    } else if (i && d) {
                        if (p) {
                            s = 0;
                        }
                        o = 0;
                        if (i === '>') {
                            i = '>=';
                            if (p) {
                                n = +n + 1;
                                s = 0;
                                o = 0;
                            } else {
                                s = +s + 1;
                                o = 0;
                            }
                        } else if (i === '<=') {
                            i = '<';
                            if (p) {
                                n = +n + 1;
                            } else {
                                s = +s + 1;
                            }
                        }
                        t = i + n + '.' + s + '.' + o;
                    } else if (p) {
                        t = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0';
                    } else if (c) {
                        t = '>=' + n + '.' + s + '.0 <' + n + '.' + (+s + 1) + '.0';
                    }
                    r('xRange return', t);
                    return t;
                });
            }
            function replaceStars(e, t) {
                r('replaceStars', e, t);
                return e.trim().replace(o[K], '');
            }
            function hyphenReplace(e, t, r, i, n, s, o, a, u, p, c, d, l) {
                if (isX(r)) {
                    t = '';
                } else if (isX(i)) {
                    t = '>=' + r + '.0.0';
                } else if (isX(n)) {
                    t = '>=' + r + '.' + i + '.0';
                } else {
                    t = '>=' + t;
                }
                if (isX(u)) {
                    a = '';
                } else if (isX(p)) {
                    a = '<' + (+u + 1) + '.0.0';
                } else if (isX(c)) {
                    a = '<' + u + '.' + (+p + 1) + '.0';
                } else if (d) {
                    a = '<=' + u + '.' + p + '.' + c + '-' + d;
                } else {
                    a = '<=' + a;
                }
                return (t + ' ' + a).trim();
            }
            Range.prototype.test = function (e) {
                if (!e) {
                    return false;
                }
                if (typeof e === 'string') {
                    e = new SemVer(e, this.options);
                }
                for (var t = 0; t < this.set.length; t++) {
                    if (testSet(this.set[t], e, this.options)) {
                        return true;
                    }
                }
                return false;
            };
            function testSet(e, t, i) {
                for (var n = 0; n < e.length; n++) {
                    if (!e[n].test(t)) {
                        return false;
                    }
                }
                if (t.prerelease.length && !i.includePrerelease) {
                    for (n = 0; n < e.length; n++) {
                        r(e[n].semver);
                        if (e[n].semver === Y) {
                            continue;
                        }
                        if (e[n].semver.prerelease.length > 0) {
                            var s = e[n].semver;
                            if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                return true;
            }
            t.satisfies = satisfies;
            function satisfies(e, t, r) {
                try {
                    t = new Range(t, r);
                } catch (e) {
                    return false;
                }
                return t.test(e);
            }
            t.maxSatisfying = maxSatisfying;
            function maxSatisfying(e, t, r) {
                var i = null;
                var n = null;
                try {
                    var s = new Range(t, r);
                } catch (e) {
                    return null;
                }
                e.forEach(function (e) {
                    if (s.test(e)) {
                        if (!i || n.compare(e) === -1) {
                            i = e;
                            n = new SemVer(i, r);
                        }
                    }
                });
                return i;
            }
            t.minSatisfying = minSatisfying;
            function minSatisfying(e, t, r) {
                var i = null;
                var n = null;
                try {
                    var s = new Range(t, r);
                } catch (e) {
                    return null;
                }
                e.forEach(function (e) {
                    if (s.test(e)) {
                        if (!i || n.compare(e) === 1) {
                            i = e;
                            n = new SemVer(i, r);
                        }
                    }
                });
                return i;
            }
            t.minVersion = minVersion;
            function minVersion(e, t) {
                e = new Range(e, t);
                var r = new SemVer('0.0.0');
                if (e.test(r)) {
                    return r;
                }
                r = new SemVer('0.0.0-0');
                if (e.test(r)) {
                    return r;
                }
                r = null;
                for (var i = 0; i < e.set.length; ++i) {
                    var n = e.set[i];
                    n.forEach(function (e) {
                        var t = new SemVer(e.semver.version);
                        switch (e.operator) {
                            case '>':
                                if (t.prerelease.length === 0) {
                                    t.patch++;
                                } else {
                                    t.prerelease.push(0);
                                }
                                t.raw = t.format();
                            case '':
                            case '>=':
                                if (!r || gt(r, t)) {
                                    r = t;
                                }
                                break;
                            case '<':
                            case '<=':
                                break;
                            default:
                                throw new Error('Unexpected operation: ' + e.operator);
                        }
                    });
                }
                if (r && e.test(r)) {
                    return r;
                }
                return null;
            }
            t.validRange = validRange;
            function validRange(e, t) {
                try {
                    return new Range(e, t).range || '*';
                } catch (e) {
                    return null;
                }
            }
            t.ltr = ltr;
            function ltr(e, t, r) {
                return outside(e, t, '<', r);
            }
            t.gtr = gtr;
            function gtr(e, t, r) {
                return outside(e, t, '>', r);
            }
            t.outside = outside;
            function outside(e, t, r, i) {
                e = new SemVer(e, i);
                t = new Range(t, i);
                var n, s, o, a, u;
                switch (r) {
                    case '>':
                        n = gt;
                        s = lte;
                        o = lt;
                        a = '>';
                        u = '>=';
                        break;
                    case '<':
                        n = lt;
                        s = gte;
                        o = gt;
                        a = '<';
                        u = '<=';
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"');
                }
                if (satisfies(e, t, i)) {
                    return false;
                }
                for (var p = 0; p < t.set.length; ++p) {
                    var c = t.set[p];
                    var d = null;
                    var l = null;
                    c.forEach(function (e) {
                        if (e.semver === Y) {
                            e = new Comparator('>=0.0.0');
                        }
                        d = d || e;
                        l = l || e;
                        if (n(e.semver, d.semver, i)) {
                            d = e;
                        } else if (o(e.semver, l.semver, i)) {
                            l = e;
                        }
                    });
                    if (d.operator === a || d.operator === u) {
                        return false;
                    }
                    if ((!l.operator || l.operator === a) && s(e, l.semver)) {
                        return false;
                    } else if (l.operator === u && o(e, l.semver)) {
                        return false;
                    }
                }
                return true;
            }
            t.prerelease = prerelease;
            function prerelease(e, t) {
                var r = parse(e, t);
                return r && r.prerelease.length ? r.prerelease : null;
            }
            t.intersects = intersects;
            function intersects(e, t, r) {
                e = new Range(e, r);
                t = new Range(t, r);
                return e.intersects(t);
            }
            t.coerce = coerce;
            function coerce(e) {
                if (e instanceof SemVer) {
                    return e;
                }
                if (typeof e !== 'string') {
                    return null;
                }
                var t = e.match(o[R]);
                if (t == null) {
                    return null;
                }
                return parse(t[1] + '.' + (t[2] || '0') + '.' + (t[3] || '0'));
            }
        },
        866: function (e) {
            e.exports = removeHook;
            function removeHook(e, t, r) {
                if (!e.registry[t]) {
                    return;
                }
                var i = e.registry[t]
                    .map(function (e) {
                        return e.orig;
                    })
                    .indexOf(r);
                if (i === -1) {
                    return;
                }
                e.registry[t].splice(i, 1);
            }
        },
        867: function (e) {
            e.exports = require('tty');
        },
        881: function (e) {
            'use strict';
            const t = process.platform === 'win32';
            function notFoundError(e, t) {
                return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
                    code: 'ENOENT',
                    errno: 'ENOENT',
                    syscall: `${t} ${e.command}`,
                    path: e.command,
                    spawnargs: e.args,
                });
            }
            function hookChildProcess(e, r) {
                if (!t) {
                    return;
                }
                const i = e.emit;
                e.emit = function (t, n) {
                    if (t === 'exit') {
                        const t = verifyENOENT(n, r, 'spawn');
                        if (t) {
                            return i.call(e, 'error', t);
                        }
                    }
                    return i.apply(e, arguments);
                };
            }
            function verifyENOENT(e, r) {
                if (t && e === 1 && !r.file) {
                    return notFoundError(r.original, 'spawn');
                }
                return null;
            }
            function verifyENOENTSync(e, r) {
                if (t && e === 1 && !r.file) {
                    return notFoundError(r.original, 'spawnSync');
                }
                return null;
            }
            e.exports = {
                hookChildProcess: hookChildProcess,
                verifyENOENT: verifyENOENT,
                verifyENOENTSync: verifyENOENTSync,
                notFoundError: notFoundError,
            };
        },
        883: function (e) {
            var t = 'Expected a function';
            var r = '__lodash_hash_undefined__';
            var i = 1 / 0,
                n = 9007199254740991;
            var s = '[object Function]',
                o = '[object GeneratorFunction]',
                a = '[object Symbol]';
            var u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                p = /^\w*$/,
                c = /^\./,
                d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
            var l = /[\\^$.*+?()[\]{}|]/g;
            var g = /\\(\\)?/g;
            var m = /^\[object .+?Constructor\]$/;
            var h = /^(?:0|[1-9]\d*)$/;
            var y = typeof global == 'object' && global && global.Object === Object && global;
            var f = typeof self == 'object' && self && self.Object === Object && self;
            var b = y || f || Function('return this')();
            function getValue(e, t) {
                return e == null ? undefined : e[t];
            }
            function isHostObject(e) {
                var t = false;
                if (e != null && typeof e.toString != 'function') {
                    try {
                        t = !!(e + '');
                    } catch (e) {}
                }
                return t;
            }
            var _ = Array.prototype,
                q = Function.prototype,
                w = Object.prototype;
            var v = b['__core-js_shared__'];
            var E = (function () {
                var e = /[^.]+$/.exec((v && v.keys && v.keys.IE_PROTO) || '');
                return e ? 'Symbol(src)_1.' + e : '';
            })();
            var T = q.toString;
            var k = w.hasOwnProperty;
            var C = w.toString;
            var O = RegExp(
                '^' +
                    T.call(k)
                        .replace(l, '\\$&')
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                    '$',
            );
            var j = b.Symbol,
                P = _.splice;
            var S = getNative(b, 'Map'),
                R = getNative(Object, 'create');
            var A = j ? j.prototype : undefined,
                x = A ? A.toString : undefined;
            function Hash(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function hashClear() {
                this.__data__ = R ? R(null) : {};
            }
            function hashDelete(e) {
                return this.has(e) && delete this.__data__[e];
            }
            function hashGet(e) {
                var t = this.__data__;
                if (R) {
                    var i = t[e];
                    return i === r ? undefined : i;
                }
                return k.call(t, e) ? t[e] : undefined;
            }
            function hashHas(e) {
                var t = this.__data__;
                return R ? t[e] !== undefined : k.call(t, e);
            }
            function hashSet(e, t) {
                var i = this.__data__;
                i[e] = R && t === undefined ? r : t;
                return this;
            }
            Hash.prototype.clear = hashClear;
            Hash.prototype['delete'] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;
            function ListCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function listCacheClear() {
                this.__data__ = [];
            }
            function listCacheDelete(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                if (r < 0) {
                    return false;
                }
                var i = t.length - 1;
                if (r == i) {
                    t.pop();
                } else {
                    P.call(t, r, 1);
                }
                return true;
            }
            function listCacheGet(e) {
                var t = this.__data__,
                    r = assocIndexOf(t, e);
                return r < 0 ? undefined : t[r][1];
            }
            function listCacheHas(e) {
                return assocIndexOf(this.__data__, e) > -1;
            }
            function listCacheSet(e, t) {
                var r = this.__data__,
                    i = assocIndexOf(r, e);
                if (i < 0) {
                    r.push([e, t]);
                } else {
                    r[i][1] = t;
                }
                return this;
            }
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype['delete'] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;
            function MapCache(e) {
                var t = -1,
                    r = e ? e.length : 0;
                this.clear();
                while (++t < r) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function mapCacheClear() {
                this.__data__ = {hash: new Hash(), map: new (S || ListCache)(), string: new Hash()};
            }
            function mapCacheDelete(e) {
                return getMapData(this, e)['delete'](e);
            }
            function mapCacheGet(e) {
                return getMapData(this, e).get(e);
            }
            function mapCacheHas(e) {
                return getMapData(this, e).has(e);
            }
            function mapCacheSet(e, t) {
                getMapData(this, e).set(e, t);
                return this;
            }
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype['delete'] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;
            function assignValue(e, t, r) {
                var i = e[t];
                if (!(k.call(e, t) && eq(i, r)) || (r === undefined && !(t in e))) {
                    e[t] = r;
                }
            }
            function assocIndexOf(e, t) {
                var r = e.length;
                while (r--) {
                    if (eq(e[r][0], t)) {
                        return r;
                    }
                }
                return -1;
            }
            function baseIsNative(e) {
                if (!isObject(e) || isMasked(e)) {
                    return false;
                }
                var t = isFunction(e) || isHostObject(e) ? O : m;
                return t.test(toSource(e));
            }
            function baseSet(e, t, r, i) {
                if (!isObject(e)) {
                    return e;
                }
                t = isKey(t, e) ? [t] : castPath(t);
                var n = -1,
                    s = t.length,
                    o = s - 1,
                    a = e;
                while (a != null && ++n < s) {
                    var u = toKey(t[n]),
                        p = r;
                    if (n != o) {
                        var c = a[u];
                        p = i ? i(c, u, a) : undefined;
                        if (p === undefined) {
                            p = isObject(c) ? c : isIndex(t[n + 1]) ? [] : {};
                        }
                    }
                    assignValue(a, u, p);
                    a = a[u];
                }
                return e;
            }
            function baseToString(e) {
                if (typeof e == 'string') {
                    return e;
                }
                if (isSymbol(e)) {
                    return x ? x.call(e) : '';
                }
                var t = e + '';
                return t == '0' && 1 / e == -i ? '-0' : t;
            }
            function castPath(e) {
                return D(e) ? e : G(e);
            }
            function getMapData(e, t) {
                var r = e.__data__;
                return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
            }
            function getNative(e, t) {
                var r = getValue(e, t);
                return baseIsNative(r) ? r : undefined;
            }
            function isIndex(e, t) {
                t = t == null ? n : t;
                return !!t && (typeof e == 'number' || h.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }
            function isKey(e, t) {
                if (D(e)) {
                    return false;
                }
                var r = typeof e;
                if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
                    return true;
                }
                return p.test(e) || !u.test(e) || (t != null && e in Object(t));
            }
            function isKeyable(e) {
                var t = typeof e;
                return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
                    ? e !== '__proto__'
                    : e === null;
            }
            function isMasked(e) {
                return !!E && E in e;
            }
            var G = memoize(function (e) {
                e = toString(e);
                var t = [];
                if (c.test(e)) {
                    t.push('');
                }
                e.replace(d, function (e, r, i, n) {
                    t.push(i ? n.replace(g, '$1') : r || e);
                });
                return t;
            });
            function toKey(e) {
                if (typeof e == 'string' || isSymbol(e)) {
                    return e;
                }
                var t = e + '';
                return t == '0' && 1 / e == -i ? '-0' : t;
            }
            function toSource(e) {
                if (e != null) {
                    try {
                        return T.call(e);
                    } catch (e) {}
                    try {
                        return e + '';
                    } catch (e) {}
                }
                return '';
            }
            function memoize(e, r) {
                if (typeof e != 'function' || (r && typeof r != 'function')) {
                    throw new TypeError(t);
                }
                var i = function () {
                    var t = arguments,
                        n = r ? r.apply(this, t) : t[0],
                        s = i.cache;
                    if (s.has(n)) {
                        return s.get(n);
                    }
                    var o = e.apply(this, t);
                    i.cache = s.set(n, o);
                    return o;
                };
                i.cache = new (memoize.Cache || MapCache)();
                return i;
            }
            memoize.Cache = MapCache;
            function eq(e, t) {
                return e === t || (e !== e && t !== t);
            }
            var D = Array.isArray;
            function isFunction(e) {
                var t = isObject(e) ? C.call(e) : '';
                return t == s || t == o;
            }
            function isObject(e) {
                var t = typeof e;
                return !!e && (t == 'object' || t == 'function');
            }
            function isObjectLike(e) {
                return !!e && typeof e == 'object';
            }
            function isSymbol(e) {
                return typeof e == 'symbol' || (isObjectLike(e) && C.call(e) == a);
            }
            function toString(e) {
                return e == null ? '' : baseToString(e);
            }
            function set(e, t, r) {
                return e == null ? e : baseSet(e, t, r);
            }
            e.exports = set;
        },
        898: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            var i = r(753);
            var n = r(796);
            const s = '4.5.3';
            class GraphqlError extends Error {
                constructor(e, t) {
                    const r = t.data.errors[0].message;
                    super(r);
                    Object.assign(this, t.data);
                    Object.assign(this, {headers: t.headers});
                    this.name = 'GraphqlError';
                    this.request = e;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                }
            }
            const o = ['method', 'baseUrl', 'url', 'headers', 'request', 'query', 'mediaType'];
            function graphql(e, t, r) {
                r = typeof t === 'string' ? (r = Object.assign({query: t}, r)) : (r = t);
                const i = Object.keys(r).reduce((e, t) => {
                    if (o.includes(t)) {
                        e[t] = r[t];
                        return e;
                    }
                    if (!e.variables) {
                        e.variables = {};
                    }
                    e.variables[t] = r[t];
                    return e;
                }, {});
                return e(i).then((e) => {
                    if (e.data.errors) {
                        const t = {};
                        for (const r of Object.keys(e.headers)) {
                            t[r] = e.headers[r];
                        }
                        throw new GraphqlError(i, {headers: t, data: e.data});
                    }
                    return e.data.data;
                });
            }
            function withDefaults(e, t) {
                const r = e.defaults(t);
                const n = (e, t) => {
                    return graphql(r, e, t);
                };
                return Object.assign(n, {defaults: withDefaults.bind(null, r), endpoint: i.request.endpoint});
            }
            const a = withDefaults(i.request, {
                headers: {'user-agent': `octokit-graphql.js/${s} ${n.getUserAgent()}`},
                method: 'POST',
                url: '/graphql',
            });
            function withCustomRequest(e) {
                return withDefaults(e, {method: 'POST', url: '/graphql'});
            }
            t.graphql = a;
            t.withCustomRequest = withCustomRequest;
        },
        916: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const r = '1.0.0';
            function requestLog(e) {
                e.hook.wrap('request', (t, r) => {
                    e.log.debug('request', r);
                    const i = Date.now();
                    const n = e.request.endpoint.parse(r);
                    const s = n.url.replace(r.baseUrl, '');
                    return t(r)
                        .then((t) => {
                            e.log.info(`${n.method} ${s} - ${t.status} in ${Date.now() - i}ms`);
                            return t;
                        })
                        .catch((t) => {
                            e.log.info(`${n.method} ${s} - ${t.status} in ${Date.now() - i}ms`);
                            throw t;
                        });
                });
            }
            requestLog.VERSION = r;
            t.requestLog = requestLog;
        },
        929: function (e, t, r) {
            e.exports = hasNextPage;
            const i = r(370);
            const n = r(577);
            function hasNextPage(e) {
                i(
                    `octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`,
                );
                return n(e).next;
            }
        },
        948: function (e) {
            'use strict';
            e.exports = function (e) {
                try {
                    return e();
                } catch (e) {}
            };
        },
        950: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: true});
            const i = r(835);
            function getProxyUrl(e) {
                let t = e.protocol === 'https:';
                let r;
                if (checkBypass(e)) {
                    return r;
                }
                let n;
                if (t) {
                    n = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
                } else {
                    n = process.env['http_proxy'] || process.env['HTTP_PROXY'];
                }
                if (n) {
                    r = i.parse(n);
                }
                return r;
            }
            t.getProxyUrl = getProxyUrl;
            function checkBypass(e) {
                if (!e.hostname) {
                    return false;
                }
                let t = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
                if (!t) {
                    return false;
                }
                let r;
                if (e.port) {
                    r = Number(e.port);
                } else if (e.protocol === 'http:') {
                    r = 80;
                } else if (e.protocol === 'https:') {
                    r = 443;
                }
                let i = [e.hostname.toUpperCase()];
                if (typeof r === 'number') {
                    i.push(`${i[0]}:${r}`);
                }
                for (let e of t
                    .split(',')
                    .map((e) => e.trim().toUpperCase())
                    .filter((e) => e)) {
                    if (i.some((t) => t === e)) {
                        return true;
                    }
                }
                return false;
            }
            t.checkBypass = checkBypass;
        },
        954: function (e) {
            e.exports = validateAuth;
            function validateAuth(e) {
                if (typeof e === 'string') {
                    return;
                }
                if (typeof e === 'function') {
                    return;
                }
                if (e.username && e.password) {
                    return;
                }
                if (e.clientId && e.clientSecret) {
                    return;
                }
                throw new Error(`Invalid "auth" option: ${JSON.stringify(e)}`);
            }
        },
        955: function (e, t, r) {
            'use strict';
            const i = r(622);
            const n = r(129);
            const s = r(20);
            const o = r(639);
            const a = r(621);
            const u = r(323);
            const p = r(145);
            const c = r(697);
            const d = r(260);
            const l = r(427);
            const g = r(168);
            const m = 1e3 * 1e3 * 10;
            function handleArgs(e, t, r) {
                let n;
                r = Object.assign({extendEnv: true, env: {}}, r);
                if (r.extendEnv) {
                    r.env = Object.assign({}, process.env, r.env);
                }
                if (r.__winShell === true) {
                    delete r.__winShell;
                    n = {command: e, args: t, options: r, file: e, original: {cmd: e, args: t}};
                } else {
                    n = s._parse(e, t, r);
                }
                r = Object.assign(
                    {
                        maxBuffer: m,
                        buffer: true,
                        stripEof: true,
                        preferLocal: true,
                        localDir: n.options.cwd || process.cwd(),
                        encoding: 'utf8',
                        reject: true,
                        cleanup: true,
                    },
                    n.options,
                );
                r.stdio = g(r);
                if (r.preferLocal) {
                    r.env = a.env(Object.assign({}, r, {cwd: r.localDir}));
                }
                if (r.detached) {
                    r.cleanup = false;
                }
                if (process.platform === 'win32' && i.basename(n.command) === 'cmd.exe') {
                    n.args.unshift('/q');
                }
                return {cmd: n.command, args: n.args, opts: r, parsed: n};
            }
            function handleInput(e, t) {
                if (t === null || t === undefined) {
                    return;
                }
                if (u(t)) {
                    t.pipe(e.stdin);
                } else {
                    e.stdin.end(t);
                }
            }
            function handleOutput(e, t) {
                if (t && e.stripEof) {
                    t = o(t);
                }
                return t;
            }
            function handleShell(e, t, r) {
                let i = '/bin/sh';
                let n = ['-c', t];
                r = Object.assign({}, r);
                if (process.platform === 'win32') {
                    r.__winShell = true;
                    i = process.env.comspec || 'cmd.exe';
                    n = ['/s', '/c', `"${t}"`];
                    r.windowsVerbatimArguments = true;
                }
                if (r.shell) {
                    i = r.shell;
                    delete r.shell;
                }
                return e(i, n, r);
            }
            function getStream(e, t, {encoding: r, buffer: i, maxBuffer: n}) {
                if (!e[t]) {
                    return null;
                }
                let s;
                if (!i) {
                    s = new Promise((r, i) => {
                        e[t].once('end', r).once('error', i);
                    });
                } else if (r) {
                    s = p(e[t], {encoding: r, maxBuffer: n});
                } else {
                    s = p.buffer(e[t], {maxBuffer: n});
                }
                return s.catch((e) => {
                    e.stream = t;
                    e.message = `${t} ${e.message}`;
                    throw e;
                });
            }
            function makeError(e, t) {
                const {stdout: r, stderr: i} = e;
                let n = e.error;
                const {code: s, signal: o} = e;
                const {parsed: a, joinedCmd: u} = t;
                const p = t.timedOut || false;
                if (!n) {
                    let e = '';
                    if (Array.isArray(a.opts.stdio)) {
                        if (a.opts.stdio[2] !== 'inherit') {
                            e += e.length > 0 ? i : `\n${i}`;
                        }
                        if (a.opts.stdio[1] !== 'inherit') {
                            e += `\n${r}`;
                        }
                    } else if (a.opts.stdio !== 'inherit') {
                        e = `\n${i}${r}`;
                    }
                    n = new Error(`Command failed: ${u}${e}`);
                    n.code = s < 0 ? l(s) : s;
                }
                n.stdout = r;
                n.stderr = i;
                n.failed = true;
                n.signal = o || null;
                n.cmd = u;
                n.timedOut = p;
                return n;
            }
            function joinCmd(e, t) {
                let r = e;
                if (Array.isArray(t) && t.length > 0) {
                    r += ' ' + t.join(' ');
                }
                return r;
            }
            e.exports = (e, t, r) => {
                const i = handleArgs(e, t, r);
                const {encoding: o, buffer: a, maxBuffer: u} = i.opts;
                const p = joinCmd(e, t);
                let l;
                try {
                    l = n.spawn(i.cmd, i.args, i.opts);
                } catch (e) {
                    return Promise.reject(e);
                }
                let g;
                if (i.opts.cleanup) {
                    g = d(() => {
                        l.kill();
                    });
                }
                let m = null;
                let h = false;
                const y = () => {
                    if (m) {
                        clearTimeout(m);
                        m = null;
                    }
                    if (g) {
                        g();
                    }
                };
                if (i.opts.timeout > 0) {
                    m = setTimeout(() => {
                        m = null;
                        h = true;
                        l.kill(i.opts.killSignal);
                    }, i.opts.timeout);
                }
                const f = new Promise((e) => {
                    l.on('exit', (t, r) => {
                        y();
                        e({code: t, signal: r});
                    });
                    l.on('error', (t) => {
                        y();
                        e({error: t});
                    });
                    if (l.stdin) {
                        l.stdin.on('error', (t) => {
                            y();
                            e({error: t});
                        });
                    }
                });
                function destroy() {
                    if (l.stdout) {
                        l.stdout.destroy();
                    }
                    if (l.stderr) {
                        l.stderr.destroy();
                    }
                }
                const b = () =>
                    c(
                        Promise.all([
                            f,
                            getStream(l, 'stdout', {encoding: o, buffer: a, maxBuffer: u}),
                            getStream(l, 'stderr', {encoding: o, buffer: a, maxBuffer: u}),
                        ]).then((e) => {
                            const t = e[0];
                            t.stdout = e[1];
                            t.stderr = e[2];
                            if (t.error || t.code !== 0 || t.signal !== null) {
                                const e = makeError(t, {joinedCmd: p, parsed: i, timedOut: h});
                                e.killed = e.killed || l.killed;
                                if (!i.opts.reject) {
                                    return e;
                                }
                                throw e;
                            }
                            return {
                                stdout: handleOutput(i.opts, t.stdout),
                                stderr: handleOutput(i.opts, t.stderr),
                                code: 0,
                                failed: false,
                                killed: false,
                                signal: null,
                                cmd: p,
                                timedOut: false,
                            };
                        }),
                        destroy,
                    );
                s._enoent.hookChildProcess(l, i.parsed);
                handleInput(l, i.opts.input);
                l.then = (e, t) => b().then(e, t);
                l.catch = (e) => b().catch(e);
                return l;
            };
            e.exports.stdout = (...t) => e.exports(...t).then((e) => e.stdout);
            e.exports.stderr = (...t) => e.exports(...t).then((e) => e.stderr);
            e.exports.shell = (t, r) => handleShell(e.exports, t, r);
            e.exports.sync = (e, t, r) => {
                const i = handleArgs(e, t, r);
                const s = joinCmd(e, t);
                if (u(i.opts.input)) {
                    throw new TypeError('The `input` option cannot be a stream in sync mode');
                }
                const o = n.spawnSync(i.cmd, i.args, i.opts);
                o.code = o.status;
                if (o.error || o.status !== 0 || o.signal !== null) {
                    const e = makeError(o, {joinedCmd: s, parsed: i});
                    if (!i.opts.reject) {
                        return e;
                    }
                    throw e;
                }
                return {
                    stdout: handleOutput(i.opts, o.stdout),
                    stderr: handleOutput(i.opts, o.stderr),
                    code: 0,
                    failed: false,
                    signal: null,
                    cmd: s,
                    timedOut: false,
                };
            };
            e.exports.shellSync = (t, r) => handleShell(e.exports.sync, t, r);
        },
        966: function (e, t, r) {
            'use strict';
            const {PassThrough: i} = r(413);
            e.exports = (e) => {
                e = Object.assign({}, e);
                const {array: t} = e;
                let {encoding: r} = e;
                const n = r === 'buffer';
                let s = false;
                if (t) {
                    s = !(r || n);
                } else {
                    r = r || 'utf8';
                }
                if (n) {
                    r = null;
                }
                let o = 0;
                const a = [];
                const u = new i({objectMode: s});
                if (r) {
                    u.setEncoding(r);
                }
                u.on('data', (e) => {
                    a.push(e);
                    if (s) {
                        o = a.length;
                    } else {
                        o += e.length;
                    }
                });
                u.getBufferedValue = () => {
                    if (t) {
                        return a;
                    }
                    return n ? Buffer.concat(a, o) : a.join('');
                };
                u.getBufferedLength = () => o;
                return u;
            };
        },
    },
    function (e) {
        'use strict';
        !(function () {
            e.r = function (e) {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'});
                }
                Object.defineProperty(e, '__esModule', {value: true});
            };
        })();
        !(function () {
            var t = Object.prototype.hasOwnProperty;
            e.d = function (e, r, i) {
                if (!t.call(e, r)) {
                    Object.defineProperty(e, r, {enumerable: true, get: i});
                }
            };
        })();
        !(function () {
            e.t = function (t, r) {
                if (r & 1) t = this(t);
                if (r & 8) return t;
                if (r & 4 && typeof t === 'object' && t && t.__esModule) return t;
                var i = Object.create(null);
                e.r(i);
                Object.defineProperty(i, 'default', {enumerable: true, value: t});
                if (r & 2 && typeof t != 'string')
                    for (var n in t)
                        e.d(
                            i,
                            n,
                            function (e) {
                                return t[e];
                            }.bind(null, n),
                        );
                return i;
            };
        })();
        !(function () {
            e.n = function (t) {
                var r =
                    t && t.__esModule
                        ? function getDefault() {
                              return t['default'];
                          }
                        : function getModuleExports() {
                              return t;
                          };
                e.d(r, 'a', r);
                return r;
            };
        })();
    },
);
