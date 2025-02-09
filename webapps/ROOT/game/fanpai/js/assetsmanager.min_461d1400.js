var __reflect = this && this.__reflect || function(e, r, t) {
  e.__class__ = r,
  t ? t.push(r) : t = [r],
  e.__types__ = e.__types__ ? t.concat(e.__types__) : t
}
, __extends = this && this.__extends || function(e, r) {
  function t() {
      this.constructor = e
  }
  for (var o in r)
      r.hasOwnProperty(o) && (e[o] = r[o]);
  t.prototype = r.prototype,
  e.prototype = new t
}
, __awaiter = this && this.__awaiter || function(e, r, t, o) {
  return new (t || (t = Promise))(function(n, i) {
      function s(e) {
          try {
              u(o.next(e))
          } catch (r) {
              i(r)
          }
      }
      function a(e) {
          try {
              u(o["throw"](e))
          } catch (r) {
              i(r)
          }
      }
      function u(e) {
          e.done ? n(e.value) : new t(function(r) {
              r(e.value)
          }
          ).then(s, a)
      }
      u((o = o.apply(e, r || [])).next())
  }
  )
}
, __generator = this && this.__generator || function(e, r) {
  function t(e) {
      return function(r) {
          return o([e, r])
      }
  }
  function o(t) {
      if (n)
          throw new TypeError("Generator is already executing.");
      for (; u; )
          try {
              if (n = 1,
              i && (s = i[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(s = s.call(i, t[1])).done)
                  return s;
              switch (i = 0,
              s && (t = [0, s.value]),
              t[0]) {
              case 0:
              case 1:
                  s = t;
                  break;
              case 4:
                  return u.label++,
                  {
                      value: t[1],
                      done: !1
                  };
              case 5:
                  u.label++,
                  i = t[1],
                  t = [0];
                  continue;
              case 7:
                  t = u.ops.pop(),
                  u.trys.pop();
                  continue;
              default:
                  if (s = u.trys,
                  !(s = s.length > 0 && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                      u = 0;
                      continue
                  }
                  if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                      u.label = t[1];
                      break
                  }
                  if (6 === t[0] && u.label < s[1]) {
                      u.label = s[1],
                      s = t;
                      break
                  }
                  if (s && u.label < s[2]) {
                      u.label = s[2],
                      u.ops.push(t);
                      break
                  }
                  s[2] && u.ops.pop(),
                  u.trys.pop();
                  continue
              }
              t = r.call(e, u)
          } catch (o) {
              t = [6, o],
              i = 0
          } finally {
              n = s = 0
          }
      if (5 & t[0])
          throw t[1];
      return {
          value: t[0] ? t[1] : void 0,
          done: !0
      }
  }
  var n, i, s, a, u = {
      label: 0,
      sent: function() {
          if (1 & s[0])
              throw s[1];
          return s[1]
      },
      trys: [],
      ops: []
  };
  return a = {
      next: t(0),
      "throw": t(1),
      "return": t(2)
  },
  "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
  }
  ),
  a
}
, __decorate = this && this.__decorate || function(e, r, t, o) {
  var n, i = arguments.length, s = 3 > i ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      s = Reflect.decorate(e, r, t, o);
  else
      for (var a = e.length - 1; a >= 0; a--)
          (n = e[a]) && (s = (3 > i ? n(s) : i > 3 ? n(r, t, s) : n(r, t)) || s);
  return i > 3 && s && Object.defineProperty(r, t, s),
  s
}
, RES;
!function(e) {
  function r(r) {
      var t = e.fileSystem.getFile(r);
      return t || (r = e.resourceNameSelector(r),
      t = e.fileSystem.getFile(r)),
      t
  }
  function t(r) {
      var t;
      t = r.indexOf(".json") >= 0 ? "legacyResourceConfig" : "resourceConfig",
      o = {
          type: t,
          resourceRoot: e.resourceRoot,
          url: r,
          name: r,
          extra: !0
      }
  }
  e.resourceNameSelector = function(e) {
      return e
  }
  ,
  e.getResourceInfo = r;
  var o;
  e.setConfigURL = t,
  e.resourceRoot = "";
  var n = function() {
      function t() {}
      return t.prototype.init = function() {
          var r = this;
          return this.config || (this.config = {
              alias: {},
              groups: {},
              resourceRoot: this.resourceRoot,
              typeSelector: function() {
                  return "unknown"
              },
              mergeSelector: null,
              fileSystem: null
          }),
          e.queue.loadResource(o).then(function(e) {
              return r.parseConfig(e)
          })["catch"](function(r) {
              console.log(r)
            //   let temp = 
            //   return r.parseConfig(temp)
            //   return r.__resource_manager_error__ || (console.error(r.stack),
            //   r = new e.ResourceManagerError(1002)),
            //   Promise.reject(r)
          })
      }
      ,
      t.prototype.getGroupByName = function(r, t) {
          var o = this.config.groups[r]
            , n = [];
          if (!o) {
              if (t)
                  throw new e.ResourceManagerError(2005,r);
              return null
          }
          for (var i = 0, s = o; i < s.length; i++) {
              var a = s[i]
                , u = e.config.getResourceWithSubkey(a, !0)
                , c = u.key
                , f = (u.subkey,
              e.config.getResource(c, !0));
              -1 == n.indexOf(f) && n.push(f)
          }
          return n
      }
      ,
      t.prototype.__temp__get__type__via__url = function(r) {
          var t = this.config.alias[r];
          if (t || (t = r),
          e.resourceTypeSelector) {
              var o = e.resourceTypeSelector(t);
              if (!o)
                  throw new e.ResourceManagerError(2004,t);
              return o
          }
          return console.warn("RES.mapConfig 并未设置 typeSelector"),
          "unknown"
      }
      ,
      t.prototype.getResourceWithSubkey = function(r, t) {
          r = this.getKeyByAlias(r);
          var o = r.indexOf("#")
            , n = "";
          o >= 0 && (n = r.substr(o + 1),
          r = r.substr(0, o));
          var i = this.getResource(r);
          if (i)
              return {
                  r: i,
                  key: r,
                  subkey: n
              };
          if (t) {
              var s = n ? r + "#" + n : r;
              throw new e.ResourceManagerError(2006,s)
          }
          return null
      }
      ,
      t.prototype.getKeyByAlias = function(e) {
          return this.config.alias[e] ? this.config.alias[e] : e
      }
      ,
      t.prototype.getResource = function(t, o) {
          var n = this.config.alias[t];
          n || (n = t);
          var i = r(n);
          if (!i) {
              if (o)
                  throw new e.ResourceManagerError(2006,t);
              return null
          }
          return i
      }
      ,
      t.prototype.getGroup = function(e) {
          return this.getGroupByName(e)
      }
      ,
      t.prototype.createGroup = function(e, r, t) {
          if (void 0 === t && (t = !1),
          !t && this.config.groups[e] || !r || 0 == r.length)
              return !1;
          for (var o = [], n = 0, i = r; n < i.length; n++) {
              var s = i[n];
              if (this.config.groups[s]) {
                  var a = this.config.groups[s];
                  o = o.concat(a)
              } else
                  o.push(s)
          }
          return this.config.groups[e] = o,
          !0
      }
      ,
      t.prototype.parseConfig = function(r) {
          e.resourceRoot = r.resourceRoot,
          this.config = r,
          e.fileSystem = r.fileSystem
      }
      ,
      t.prototype.addSubkey = function(e, r) {
          this.addAlias(e, r + "#" + e)
      }
      ,
      t.prototype.addAlias = function(e, r) {
          this.config.alias[r] && (r = this.config.alias[r]),
          this.config.alias[e] = r
      }
      ,
      t.prototype.getType = function(e) {
          return this.getResource(e, !0).type
      }
      ,
      t.prototype.addResourceData = function(r) {
          r.type || (r.type = this.__temp__get__type__via__url(r.url)),
          e.fileSystem.addFile(r.url, r.type),
          r.name && (this.config.alias[r.name] = r.url)
      }
      ,
      t.prototype.destory = function() {
          e.systemPid++;
          var r = {
              getFile: function() {
                  return null
              },
              addFile: function() {},
              profile: function() {}
          };
          this.config = {
              groups: {},
              alias: {},
              fileSystem: r,
              typeSelector: function(e) {
                  return e
              },
              resourceRoot: "resources",
              mergeSelector: null
          }
      }
      ,
      t
  }();
  e.ResourceConfig = n,
  __reflect(n.prototype, "RES.ResourceConfig")
}(RES || (RES = {}));
var RES;
!function(e) {
  var r = function() {
      function r() {
          this.groupTotalDic = {},
          this.numLoadedDic = {},
          this.itemListDic = {},
          this.groupErrorDic = {},
          this.retryTimesDic = {},
          this.maxRetryTimes = 3,
          this.priorityQueue = {},
          this.reporterDic = {},
          this.dispatcherDic = {},
          this.failedList = new Array,
          this.loadingCount = 0,
          this.thread = 4,
          this.queueIndex = 0
      }
      return r.prototype.load = function(e, r, t, o) {
          for (var n = e.length, i = 0; n > i; i++) {
              var s = e[i];
              s.groupName = r
          }
          this.itemListDic[r] = e,
          this.groupTotalDic[r] = e.length,
          this.numLoadedDic[r] = 0,
          this.priorityQueue[t] ? this.priorityQueue[t].push(r) : this.priorityQueue[t] = [r],
          this.reporterDic[r] = o;
          var a = new egret.EventDispatcher;
          this.dispatcherDic[r] = a;
          var u = new Promise(function(e, r) {
              a.addEventListener("complete", e, null),
              a.addEventListener("error", r, null)
          }
          );
          return this.next(),
          u
      }
      ,
      r.prototype.next = function() {
          for (var r = this, t = function() {
              var t = o.getOneResourceInfo();
              return t ? (o.loadingCount++,
              void o.loadResource(t).then(function(o) {
                  r.loadingCount--,
                  e.host.save(t, o);
                  var n = t.groupName
                    , i = r.reporterDic[n];
                  r.numLoadedDic[n]++;
                  var s = r.numLoadedDic[n]
                    , a = r.groupTotalDic[n];
                  if (i && i.onProgress && i.onProgress(s, a),
                  s == a) {
                      var u = r.groupErrorDic[n];
                      r.removeGroupName(n),
                      delete r.groupTotalDic[n],
                      delete r.numLoadedDic[n],
                      delete r.itemListDic[n],
                      delete r.groupErrorDic[n];
                      var c = r.dispatcherDic[n];
                      u ? c.dispatchEventWith("error") : c.dispatchEventWith("complete")
                  }
                  r.next()
              })["catch"](function() {
                  r.loadingCount--,
                  delete e.host.state[t.name];
                  var o = r.retryTimesDic[t.name] || 1;
                  return o > r.maxRetryTimes ? void delete r.retryTimesDic[t.name] : (r.retryTimesDic[t.name] = o + 1,
                  r.failedList.push(t),
                  void r.next())
              })) : "break"
          }, o = this; this.loadingCount < this.thread; ) {
              var n = t();
              if ("break" === n)
                  break
          }
      }
      ,
      r.prototype.removeGroupName = function(e) {
          for (var r in this.priorityQueue) {
              for (var t = this.priorityQueue[r], o = 0, n = !1, i = t.length, s = 0; i > s; s++) {
                  var a = t[s];
                  if (a == e) {
                      t.splice(o, 1),
                      n = !0;
                      break
                  }
                  o++
              }
              if (n) {
                  0 == t.length && delete this.priorityQueue[r];
                  break
              }
          }
      }
      ,
      r.prototype.getOneResourceInfo = function() {
          if (this.failedList.length > 0)
              return this.failedList.shift();
          var e = Number.NEGATIVE_INFINITY;
          for (var r in this.priorityQueue)
              e = Math.max(e, r);
          var t = this.priorityQueue[e];
          if (t && 0 != t.length) {
              for (var o = t.length, n = [], i = 0; o > i && (this.queueIndex >= o && (this.queueIndex = 0),
              n = this.itemListDic[t[this.queueIndex]],
              !(n.length > 0)); i++)
                  this.queueIndex++;
              if (0 != n.length)
                  return n.shift()
          }
      }
      ,
      r.prototype.loadResource = function(r, t) {
          if (!t) {
              if (1 == e.FEATURE_FLAG.FIX_DUPLICATE_LOAD) {
                  var o = e.host.state[r.name];
                  if (2 == o)
                      return Promise.resolve(e.host.get(r));
                  if (1 == o)
                      return r.promise
              }
              t = e.processor.isSupport(r)
          }
          if (!t)
              throw new e.ResourceManagerError(2001,r.name,r.type);
          e.host.state[r.name] = 1;
          var n = t.onLoadStart(e.host, r);
          return r.promise = n,
          n
      }
      ,
      r.prototype.unloadResource = function(r) {
          var t = e.host.get(r);
          if (!t)
              return console.warn("尝试释放不存在的资源:", r.name),
              Promise.resolve();
          var o = e.processor.isSupport(r);
          if (o) {
              e.host.state[r.name] = 3;
              var n = o.onRemoveStart(e.host, r);
              return e.host.remove(r),
              n
          }
          return Promise.resolve()
      }
      ,
      r
  }();
  e.ResourceLoader = r,
  __reflect(r.prototype, "RES.ResourceLoader")
}(RES || (RES = {}));
var RES;
!function(e) {
  function r() {
      e.fileSystem.profile(),
      console.log(t);
      var r = 0;
      for (var o in t) {
          var n = t[o];
          n instanceof egret.Texture && (r += n.$bitmapWidth * n.$bitmapHeight * 4)
      }
      console.log("gpu size : " + (r / 1024).toFixed(3) + "kb")
  }
  var t = {};
  e.systemPid = 0,
  e.checkCancelation = function(r, t, n) {
      var i = n.value;
      n.value = function() {
          for (var r = [], t = 0; t < arguments.length; t++)
              r[t] = arguments[t];
          var n = e.systemPid
            , s = i.apply(this, r);
          return s.then(function(t) {
              if (e.systemPid != n)
                  throw new o(1005,r[0]);
              return t
          })
      }
  }
  ,
  e.profile = r,
  e.host = {
      state: {},
      get resourceConfig() {
          return e.config
      },
      load: function(r, t) {
          return e.queue.loadResource(r, t)
      },
      unload: function(r) {
          return e.queue.unloadResource(r)
      },
      save: function(r, o) {
          e.host.state[r.name] = 2,
          r.promise = void 0,
          t[r.url] = o
      },
      get: function(e) {
          return t[e.url]
      },
      remove: function(r) {
          e.host.state[r.name] = 0,
          delete t[r.url]
      }
  },
  e.config = new e.ResourceConfig,
  e.queue = new e.ResourceLoader;
  var o = function(e) {
      function r(t, o, n) {
          var i = e.call(this) || this;
          return i.__resource_manager_error__ = !0,
          i.name = t.toString(),
          i.message = r.errorMessage[t].replace("{0}", o).replace("{1}", n),
          i
      }
      return __extends(r, e),
      r.errorMessage = {
          1001: "文件加载失败:{0}",
          1002: "ResourceManager 初始化失败：配置文件加载失败",
          1005: "ResourceManager 已被销毁，文件加载失败:{0}",
          2001: "{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
          2002: "Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
          2003: "{0}解析失败,错误原因:{1}",
          2004: "无法找到文件类型:{0}",
          2005: "资源配置文件中无法找到特定的资源组:{0}",
          2006: "资源配置文件中无法找到特定的资源:{0}"
      },
      r
  }(Error);
  e.ResourceManagerError = o,
  __reflect(o.prototype, "RES.ResourceManagerError")
}(RES || (RES = {}));
var RES;
!function(e) {
  e.checkNull = function(e, r, t) {
      var o = t.value;
      t.value = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return e[0] ? o.apply(this, e) : (console.warn("方法" + r + "的参数不能为null"),
          null)
      }
  }
  ,
  e.FEATURE_FLAG = {
      FIX_DUPLICATE_LOAD: 1
  };
  var r;
  !function(e) {
      function r(e) {
          t = e
      }
      var t = "warning";
      e.setUpgradeGuideLevel = r
  }(r = e.upgrade || (e.upgrade = {}))
}(RES || (RES = {}));
var RES;
!function(e) {
  var r = function() {
      function e(e) {
          this.data = e
      }
      return e.prototype.profile = function() {
          console.log(this.data)
      }
      ,
      e.prototype.addFile = function(e, r) {
          r || (r = ""),
          e = this.normalize(e);
          var t = this.basename(e)
            , o = this.dirname(e);
          this.exists(o) || this.mkdir(o);
          var n = this.reslove(o);
          n[t] = {
              url: e,
              type: r
          }
      }
      ,
      e.prototype.getFile = function(e) {
          var r = this.reslove(e);
          return r && (r.name = e),
          r
      }
      ,
      e.prototype.basename = function(e) {
          return e.substr(e.lastIndexOf("/") + 1)
      }
      ,
      e.prototype.normalize = function(e) {
          return e.split("/").filter(function(e) {
              return !!e
          }).join("/")
      }
      ,
      e.prototype.dirname = function(e) {
          return e.substr(0, e.lastIndexOf("/"))
      }
      ,
      e.prototype.reslove = function(e) {
          if ("" == e)
              return this.data;
          e = this.normalize(e);
          for (var r = e.split("/"), t = this.data, o = 0, n = r; o < n.length; o++) {
              var i = n[o];
              if (!t)
                  return t;
              t = t[i]
          }
          return t
      }
      ,
      e.prototype.mkdir = function(e) {
          e = this.normalize(e);
          for (var r = e.split("/"), t = this.data, o = 0, n = r; o < n.length; o++) {
              var i = n[o];
              t[i] || (t[i] = {}),
              t = t[i]
          }
      }
      ,
      e.prototype.exists = function(e) {
          if ("" == e)
              return !0;
          e = this.normalize(e);
          for (var r = e.split("/"), t = this.data, o = 0, n = r; o < n.length; o++) {
              var i = n[o];
              if (!t[i])
                  return !1;
              t = t[i]
          }
          return !0
      }
      ,
      e
  }();
  e.NewFileSystem = r,
  __reflect(r.prototype, "RES.NewFileSystem")
}(RES || (RES = {}));
var RES;
!function(e) {
  var r;
  !function(r) {
      function t(e) {
          return f[e.type]
      }
      function o(e, r) {
          f[e] = r
      }
      function n(r, t) {
          return __awaiter(this, void 0, void 0, function() {
              var o = this;
              return __generator(this, function(n) {
                  return [2, new Promise(function(n, i) {
                      var s = function() {
                          var e = r.data ? r.data : r.response;
                          n(e)
                      }
                        , a = function() {
                          var r = new e.ResourceManagerError(1001,t.url);
                          i(r)
                      };
                      r.addEventListener(egret.Event.COMPLETE, s, o),
                      r.addEventListener(egret.IOErrorEvent.IO_ERROR, a, o)
                  }
                  )]
              })
          })
      }
      function i(r) {
          if (-1 != r.url.indexOf("://"))
              return r.url;
          var t = r.extra ? "" : e.resourceRoot
            , o = t + r.url;
          return e.getRealURL ? e.getRealURL(o) : o
      }
      function s(e, r) {
          if (-1 != r.indexOf("://"))
              return r;
          e = e.split("\\").join("/");
          var t = e.match(/#.*|\?.*/)
            , o = "";
          t && (o = t[0]);
          var n = e.lastIndexOf("/");
          return e = -1 != n ? e.substring(0, n + 1) + r : r,
          e + o
      }
      function a(e, r, t) {
          switch (e) {
          case c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG:
          case c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:
              return Math.floor((Math.max(r, 8) * Math.max(t, 8) * 4 + 7) / 8);
          case c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG:
          case c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:
              return Math.floor((Math.max(r, 16) * Math.max(t, 8) * 2 + 7) / 8);
          default:
              return 0
          }
      }
      r.isSupport = t,
      r.map = o,
      r.getRelativePath = s,
      r.ImageProcessor = {
          onLoadStart: function(e, r) {
              return __awaiter(this, void 0, void 0, function() {
                  var t, o, s, a, u;
                  return __generator(this, function(c) {
                      switch (c.label) {
                      case 0:
                          return t = new egret.ImageLoader,
                          t.load(i(r)),
                          [4, n(t, r)];
                      case 1:
                          return o = c.sent(),
                          s = new egret.Texture,
                          s._setBitmapData(o),
                          a = e.resourceConfig.getResource(r.name),
                          a && a.scale9grid && (u = a.scale9grid.split(","),
                          s.scale9Grid = new egret.Rectangle(parseInt(u[0]),parseInt(u[1]),parseInt(u[2]),parseInt(u[3]))),
                          [2, s]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              var t = e.get(r);
              return t.dispose(),
              Promise.resolve()
          }
      },
      r.BinaryProcessor = {
          onLoadStart: function(e, r) {
              return __awaiter(this, void 0, void 0, function() {
                  var e, t;
                  return __generator(this, function(o) {
                      switch (o.label) {
                      case 0:
                          return e = new egret.HttpRequest,
                          e.responseType = egret.HttpResponseType.ARRAY_BUFFER,
                          e.open(i(r), "get"),
                          e.send(),
                          [4, n(e, r)];
                      case 1:
                          return t = o.sent(),
                          [2, t]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.TextProcessor = {
          onLoadStart: function(e, r) {
              return __awaiter(this, void 0, void 0, function() {
                  var e, t;
                  return __generator(this, function(o) {
                      switch (o.label) {
                      case 0:
                          return e = new egret.HttpRequest,
                          e.responseType = egret.HttpResponseType.TEXT,
                          e.open(i(r), "get"),
                          e.send(),
                          [4, n(e, r)];
                      case 1:
                          return t = o.sent(),
                          [2, t]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.JsonProcessor = {
          onLoadStart: function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                  var o, n;
                  return __generator(this, function(i) {
                      switch (i.label) {
                      case 0:
                          return [4, e.load(t, r.TextProcessor)];
                      case 1:
                          return o = i.sent(),
                          n = JSON.parse(o),
                          [2, n]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.XMLProcessor = {
          onLoadStart: function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                  var o, n;
                  return __generator(this, function(i) {
                      switch (i.label) {
                      case 0:
                          return [4, e.load(t, r.TextProcessor)];
                      case 1:
                          return o = i.sent(),
                          n = egret.XML.parse(o),
                          [2, n]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.CommonJSProcessor = {
          onLoadStart: function(t, o) {
              return __awaiter(this, void 0, void 0, function() {
                  var n, i, s, a;
                  return __generator(this, function(u) {
                      switch (u.label) {
                      case 0:
                          return [4, t.load(o, r.TextProcessor)];
                      case 1:
                          n = u.sent(),
                          i = new Function("require","exports",n),
                          s = function() {}
                          ,
                          a = {};
                          try {
                              i(s, a)
                          } catch (c) {
                              throw new e.ResourceManagerError(2003,o.name,c.message)
                          }
                          return [2, a]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.SheetProcessor = {
          onLoadStart: function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                  var o, n, i, a, u, c, f, l, a;
                  return __generator(this, function(p) {
                      switch (p.label) {
                      case 0:
                          return [4, e.load(t, r.JsonProcessor)];
                      case 1:
                          return o = p.sent(),
                          n = "resource/" + s(t.url, o.file),
                          i = e.resourceConfig.getResource(o.file),
                          i || (i = {
                              name: n,
                              url: n,
                              extra: !0,
                              type: "image"
                          }),
                          [4, e.load(i)];
                      case 2:
                          a = p.sent(),
                          u = o.frames,
                          c = new egret.SpriteSheet(a);
                          for (f in u)
                              l = u[f],
                              a = c.createTexture(f, l.x, l.y, l.w, l.h, l.offX, l.offY, l.sourceW, l.sourceH);
                          return [2, c]
                      }
                  })
              })
          },
          getData: function(e, r, t, o) {
              var n = e.get(r);
              return n ? n.getTexture(o) : (console.error("missing resource : " + t + "#" + o),
              null)
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      };
      var u = function(e, r) {
          var t = ""
            , o = r.split("\n")
            , n = o[2]
            , i = n.indexOf('file="');
          -1 != i && (n = n.substring(i + 6),
          i = n.indexOf('"'),
          t = n.substring(0, i)),
          e = e.split("\\").join("/");
          var i = e.lastIndexOf("/");
          return e = -1 != i ? e.substring(0, i + 1) + t : t
      };
      r.FontProcessor = {
          onLoadStart: function(t, o) {
              return __awaiter(this, void 0, void 0, function() {
                  var n, i, a, c, f, l;
                  return __generator(this, function(p) {
                      switch (p.label) {
                      case 0:
                          return [4, t.load(o, r.TextProcessor)];
                      case 1:
                          n = p.sent();
                          try {
                              i = JSON.parse(n)
                          } catch (g) {
                              i = n
                          }
                          return a = o.name.replace("fnt", "png"),
                          c = t.resourceConfig.getResource(a),
                          c || (a = "string" == typeof i ? e.config.resourceRoot + "/" + u(o.url, i) : e.config.resourceRoot + "/" + s(o.url, i.file),
                          c = {
                              name: a,
                              url: a,
                              extra: !0,
                              type: "image"
                          }),
                          [4, t.load(c)];
                      case 2:
                          return f = p.sent(),
                          l = new egret.BitmapFont(f,i),
                          [2, l]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.SoundProcessor = {
          onLoadStart: function(e, r) {
              return __awaiter(this, void 0, void 0, function() {
                  var e;
                  return __generator(this, function(t) {
                      switch (t.label) {
                      case 0:
                          return e = new egret.Sound,
                          e.load(i(r)),
                          [4, n(e, r)];
                      case 1:
                          return t.sent(),
                          [2, e]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.MovieClipProcessor = {
          onLoadStart: function(t, o) {
              var n, i;
              return t.load(o, r.JsonProcessor).then(function(r) {
                  n = r;
                  var s = o.name
                    , a = s.substring(0, s.lastIndexOf(".")) + ".png";
                  if (i = t.resourceConfig.getResource(a, !0),
                  !i)
                      throw new e.ResourceManagerError(1001,a);
                  return t.load(i)
              }).then(function(e) {
                  t.save(i, e);
                  var r = e
                    , o = new egret.MovieClipDataFactory(n,r);
                  return o
              })
          },
          onRemoveStart: function(e, r) {
              var t = e.get(r);
              t.clearCache(),
              t.$spriteSheet.dispose();
              var o = r.name
                , n = o.substring(0, o.lastIndexOf(".")) + ".png"
                , i = e.resourceConfig.getResource(n, !0);
              return e.unload(i)
          }
      },
      r.MergeJSONProcessor = {
          onLoadStart: function(t, o) {
              return __awaiter(this, void 0, void 0, function() {
                  var n, i;
                  return __generator(this, function(s) {
                      switch (s.label) {
                      case 0:
                          return [4, t.load(o, r.JsonProcessor)];
                      case 1:
                          n = s.sent();
                          for (i in n)
                              e.config.addSubkey(i, o.name);
                          return [2, n]
                      }
                  })
              })
          },
          getData: function(e, r, t, o) {
              var n = e.get(r);
              return n ? n[o] : (console.error("missing resource :" + r.name),
              null)
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      },
      r.ResourceConfigProcessor = {
          onLoadStart: function(t, o) {
              return __awaiter(this, void 0, void 0, function() {
                  var n, i;
                  return __generator(this, function(s) {
                      switch (s.label) {
                      case 0:
                          return [4, t.load(o, r.CommonJSProcessor)];
                      case 1:
                          return n = s.sent(),
                          i = new e.NewFileSystem(n.resources),
                          n.fileSystem = i,
                          delete n.resource,
                          e.resourceTypeSelector = n.typeSelector,
                          e.resourceNameSelector = n.nameSelector ? n.nameSelector : function(e) {
                              return e
                          }
                          ,
                          [2, n]
                      }
                  })
              })
          },
          onRemoveStart: function() {
              return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(e) {
                      return [2]
                  })
              })
          }
      },
      r.LegacyResourceConfigProcessor = {
          onLoadStart: function(t, o) {
              return t.load(o, r.JsonProcessor).then(function(r) {
                  var t = e.config.config
                    , o = t.fileSystem;
                  o || (o = {
                      fsData: {},
                      getFile: function(e) {
                          return c[e]
                      },
                      addFile: function(e, r) {
                          r || (r = ""),
                          c[e] = {
                              name: e,
                              type: r,
                              url: e
                          }
                      },
                      profile: function() {
                          console.log(c)
                      }
                  },
                  t.fileSystem = o);
                  for (var n = t.groups, i = 0, s = r.groups; i < s.length; i++) {
                      var a = s[i];
                      n[a.name] = a.keys.split(",")
                  }
                  for (var u = t.alias, c = o.fsData, f = function(e) {
                      c[e.name] = e,
                      e.subkeys && e.subkeys.split(",").forEach(function(r) {
                          u[r] = e.name + "#" + r
                      })
                  }, l = 0, p = r.resources; l < p.length; l++) {
                      var g = p[l];
                      f(g)
                  }
                  return t
              })["catch"](function() {
                  var r = {
                    "groups": [
                        {
                            "keys": "default.res_json,default.thm_json,backBtn_png,barBg_png,closeBtn_png,cloud_png,helpBtn_png,nextBtn_png,plane_png,sound_on_png,tile1_png,bgMusicEnd_png,bgMusicStart_png,helpEnd_png,helpStart_png,restartEnd_png,restartStart_png,gameBtnsBg_png,BtnsGroupSkin_exml,GameControlSkin_exml,GameStageSkin_exml,NoticeDialogSkin_exml,bgMusic_mp3,gameOverBg_mp3,right_mp3,wrong_mp3,item_1_1_png,item_1_10_png,item_1_11_png,item_1_12_png,item_1_13_png,item_1_14_png,item_1_15_png,item_1_2_png,item_1_3_png,item_1_4_png,item_1_5_png,item_1_6_png,item_1_7_png,item_1_8_png,item_1_9_png,item_2_1_png,item_2_10_png,item_2_11_png,item_2_12_png,item_2_2_png,item_2_3_png,item_2_4_png,item_2_5_png,item_2_6_png,item_2_7_png,item_2_8_png,item_2_9_png,item_3_1_png,item_3_10_png,item_3_11_png,item_3_12_png,item_3_13_png,item_3_14_png,item_3_15_png,item_3_16_png,item_3_2_png,item_3_3_png,item_3_4_png,item_3_5_png,item_3_6_png,item_3_7_png,item_3_8_png,item_3_9_png,resetBtn_png,startBtn_png,success1Bg_png,effect1_json,effect1_png,effect2_json,effect2_png,close1Btn_png,reward_title1_png,reward_title2_png,sound_off_png,iteminfo_json,tipInfo_png,tipInfo2_png,gameEndBg_png,endBtn_png,restartBtn_png,nextGameBtn_png,closeBtn2_png,preloadMusic_mp3,1_1_mp3,1_2_mp3,1_3_mp3,1_4_mp3,1_5_mp3,1_6_mp3,1_7_mp3,1_8_mp3,1_9_mp3,1_10_mp3,1_11_mp3,1_12_mp3,1_13_mp3,1_14_mp3,1_15_mp3,2_1_mp3,2_2_mp3,2_3_mp3,2_4_mp3,2_6_mp3,2_7_mp3,2_8_mp3,2_9_mp3,2_10_mp3,2_11_mp3,2_12_mp3,3_1_mp3,3_2_mp3,3_3_mp3,3_4_mp3,3_5_mp3,3_6_mp3,3_7_mp3,3_8_mp3,3_9_mp3,3_10_mp3,3_11_mp3,3_12_mp3,3_13_mp3,3_14_mp3,3_15_mp3,3_16_mp3,success_mp3,fail_mp3,2_5_mp3,failText_png",
                            "name": "preload"
                        },
                        {
                            "keys": "playBtn_png,effect3_png,effect3_json",
                            "name": "loading"
                        }
                    ],
                    "resources": [
                        {
                            "url": "default.res.json",
                            "type": "json",
                            "name": "default.res_json"
                        },
                        {
                            "url": "default.thm.json",
                            "type": "json",
                            "name": "default.thm_json"
                        },
                        {
                            "url": "myassets/backBtn.png",
                            "type": "image",
                            "name": "backBtn_png"
                        },
                        {
                            "url": "myassets/barBg.png",
                            "type": "image",
                            "name": "barBg_png"
                        },
                        {
                            "url": "myassets/closeBtn.png",
                            "type": "image",
                            "name": "closeBtn_png"
                        },
                        {
                            "url": "myassets/cloud.png",
                            "type": "image",
                            "name": "cloud_png"
                        },
                        {
                            "url": "myassets/helpBtn.png",
                            "type": "image",
                            "name": "helpBtn_png"
                        },
                        {
                            "url": "myassets/nextBtn.png",
                            "type": "image",
                            "name": "nextBtn_png"
                        },
                        {
                            "url": "myassets/plane.png",
                            "type": "image",
                            "name": "plane_png"
                        },
                        {
                            "url": "myassets/sound_on.png",
                            "type": "image",
                            "name": "sound_on_png"
                        },
                        {
                            "url": "myassets/tile1.png",
                            "type": "image",
                            "name": "tile1_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/bgMusicEnd.png",
                            "type": "image",
                            "name": "bgMusicEnd_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/bgMusicStart.png",
                            "type": "image",
                            "name": "bgMusicStart_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/helpEnd.png",
                            "type": "image",
                            "name": "helpEnd_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/helpStart.png",
                            "type": "image",
                            "name": "helpStart_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/restartEnd.png",
                            "type": "image",
                            "name": "restartEnd_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/btns/restartStart.png",
                            "type": "image",
                            "name": "restartStart_png"
                        },
                        {
                            "url": "mycomponent/btnsGroup/gameBtnsBg.png",
                            "type": "image",
                            "name": "gameBtnsBg_png"
                        },
                        {
                            "url": "myskins/BtnsGroupSkin.exml",
                            "type": "bin",
                            "name": "BtnsGroupSkin_exml"
                        },
                        {
                            "url": "myskins/GameControlSkin.exml",
                            "type": "bin",
                            "name": "GameControlSkin_exml"
                        },
                        {
                            "url": "myskins/GameStageSkin.exml",
                            "type": "bin",
                            "name": "GameStageSkin_exml"
                        },
                        {
                            "url": "myskins/NoticeDialogSkin.exml",
                            "type": "bin",
                            "name": "NoticeDialogSkin_exml"
                        },
                        {
                            "url": "sound/bgMusic.mp3",
                            "type": "sound",
                            "name": "bgMusic_mp3"
                        },
                        {
                            "url": "sound/gameOverBg.mp3",
                            "type": "sound",
                            "name": "gameOverBg_mp3"
                        },
                        {
                            "url": "sound/right.mp3",
                            "type": "sound",
                            "name": "right_mp3"
                        },
                        {
                            "url": "sound/wrong.mp3",
                            "type": "sound",
                            "name": "wrong_mp3"
                        },
                        {
                            "url": "myassets/items/item_1_1.png",
                            "type": "image",
                            "name": "item_1_1_png"
                        },
                        {
                            "url": "myassets/items/item_1_10.png",
                            "type": "image",
                            "name": "item_1_10_png"
                        },
                        {
                            "url": "myassets/items/item_1_11.png",
                            "type": "image",
                            "name": "item_1_11_png"
                        },
                        {
                            "url": "myassets/items/item_1_12.png",
                            "type": "image",
                            "name": "item_1_12_png"
                        },
                        {
                            "url": "myassets/items/item_1_13.png",
                            "type": "image",
                            "name": "item_1_13_png"
                        },
                        {
                            "url": "myassets/items/item_1_14.png",
                            "type": "image",
                            "name": "item_1_14_png"
                        },
                        {
                            "url": "myassets/items/item_1_15.png",
                            "type": "image",
                            "name": "item_1_15_png"
                        },
                        {
                            "url": "myassets/items/item_1_2.png",
                            "type": "image",
                            "name": "item_1_2_png"
                        },
                        {
                            "url": "myassets/items/item_1_3.png",
                            "type": "image",
                            "name": "item_1_3_png"
                        },
                        {
                            "url": "myassets/items/item_1_4.png",
                            "type": "image",
                            "name": "item_1_4_png"
                        },
                        {
                            "url": "myassets/items/item_1_5.png",
                            "type": "image",
                            "name": "item_1_5_png"
                        },
                        {
                            "url": "myassets/items/item_1_6.png",
                            "type": "image",
                            "name": "item_1_6_png"
                        },
                        {
                            "url": "myassets/items/item_1_7.png",
                            "type": "image",
                            "name": "item_1_7_png"
                        },
                        {
                            "url": "myassets/items/item_1_8.png",
                            "type": "image",
                            "name": "item_1_8_png"
                        },
                        {
                            "url": "myassets/items/item_1_9.png",
                            "type": "image",
                            "name": "item_1_9_png"
                        },
                        {
                            "url": "myassets/items/item_2_1.png",
                            "type": "image",
                            "name": "item_2_1_png"
                        },
                        {
                            "url": "myassets/items/item_2_10.png",
                            "type": "image",
                            "name": "item_2_10_png"
                        },
                        {
                            "url": "myassets/items/item_2_11.png",
                            "type": "image",
                            "name": "item_2_11_png"
                        },
                        {
                            "url": "myassets/items/item_2_12.png",
                            "type": "image",
                            "name": "item_2_12_png"
                        },
                        {
                            "url": "myassets/items/item_2_2.png",
                            "type": "image",
                            "name": "item_2_2_png"
                        },
                        {
                            "url": "myassets/items/item_2_3.png",
                            "type": "image",
                            "name": "item_2_3_png"
                        },
                        {
                            "url": "myassets/items/item_2_4.png",
                            "type": "image",
                            "name": "item_2_4_png"
                        },
                        {
                            "url": "myassets/items/item_2_5.png",
                            "type": "image",
                            "name": "item_2_5_png"
                        },
                        {
                            "url": "myassets/items/item_2_6.png",
                            "type": "image",
                            "name": "item_2_6_png"
                        },
                        {
                            "url": "myassets/items/item_2_7.png",
                            "type": "image",
                            "name": "item_2_7_png"
                        },
                        {
                            "url": "myassets/items/item_2_8.png",
                            "type": "image",
                            "name": "item_2_8_png"
                        },
                        {
                            "url": "myassets/items/item_2_9.png",
                            "type": "image",
                            "name": "item_2_9_png"
                        },
                        {
                            "url": "myassets/items/item_3_1.png",
                            "type": "image",
                            "name": "item_3_1_png"
                        },
                        {
                            "url": "myassets/items/item_3_10.png",
                            "type": "image",
                            "name": "item_3_10_png"
                        },
                        {
                            "url": "myassets/items/item_3_11.png",
                            "type": "image",
                            "name": "item_3_11_png"
                        },
                        {
                            "url": "myassets/items/item_3_12.png",
                            "type": "image",
                            "name": "item_3_12_png"
                        },
                        {
                            "url": "myassets/items/item_3_13.png",
                            "type": "image",
                            "name": "item_3_13_png"
                        },
                        {
                            "url": "myassets/items/item_3_14.png",
                            "type": "image",
                            "name": "item_3_14_png"
                        },
                        {
                            "url": "myassets/items/item_3_15.png",
                            "type": "image",
                            "name": "item_3_15_png"
                        },
                        {
                            "url": "myassets/items/item_3_16.png",
                            "type": "image",
                            "name": "item_3_16_png"
                        },
                        {
                            "url": "myassets/items/item_3_2.png",
                            "type": "image",
                            "name": "item_3_2_png"
                        },
                        {
                            "url": "myassets/items/item_3_3.png",
                            "type": "image",
                            "name": "item_3_3_png"
                        },
                        {
                            "url": "myassets/items/item_3_4.png",
                            "type": "image",
                            "name": "item_3_4_png"
                        },
                        {
                            "url": "myassets/items/item_3_5.png",
                            "type": "image",
                            "name": "item_3_5_png"
                        },
                        {
                            "url": "myassets/items/item_3_6.png",
                            "type": "image",
                            "name": "item_3_6_png"
                        },
                        {
                            "url": "myassets/items/item_3_7.png",
                            "type": "image",
                            "name": "item_3_7_png"
                        },
                        {
                            "url": "myassets/items/item_3_8.png",
                            "type": "image",
                            "name": "item_3_8_png"
                        },
                        {
                            "url": "myassets/items/item_3_9.png",
                            "type": "image",
                            "name": "item_3_9_png"
                        },
                        {
                            "url": "myassets/resetBtn.png",
                            "type": "image",
                            "name": "resetBtn_png"
                        },
                        {
                            "url": "myassets/startBtn.png",
                            "type": "image",
                            "name": "startBtn_png"
                        },
                        {
                            "url": "myassets/success1Bg.png",
                            "type": "image",
                            "name": "success1Bg_png"
                        },
                        {
                            "url": "effect/effect1.png",
                            "type": "image",
                            "name": "effect1_png"
                        },
                        {
                            "url": "effect/effect2.png",
                            "type": "image",
                            "name": "effect2_png"
                        },
                        {
                            "url": "effect/effect1.json",
                            "type": "json",
                            "name": "effect1_json"
                        },
                        {
                            "url": "effect/effect2.json",
                            "type": "json",
                            "name": "effect2_json"
                        },
                        {
                            "url": "myassets/close1Btn.png",
                            "type": "image",
                            "name": "close1Btn_png"
                        },
                        {
                            "url": "myassets/reward_title1.png",
                            "type": "image",
                            "name": "reward_title1_png"
                        },
                        {
                            "url": "myassets/reward_title2.png",
                            "type": "image",
                            "name": "reward_title2_png"
                        },
                        {
                            "url": "myassets/sound_off.png",
                            "type": "image",
                            "name": "sound_off_png"
                        },
                        {
                            "url": "myassets/iteminfo.json",
                            "type": "json",
                            "name": "iteminfo_json"
                        },
                        {
                            "url": "myassets/tipInfo.png",
                            "type": "image",
                            "name": "tipInfo_png"
                        },
                        {
                            "url": "myassets/tipInfo.png",
                            "type": "image",
                            "name": "tipInfo2_png"
                        },
                        {
                            "url": "myassets/playBtn.png",
                            "type": "image",
                            "name": "playBtn_png"
                        },
                        {
                            "url": "effect/effect3.png",
                            "type": "image",
                            "name": "effect3_png"
                        },
                        {
                            "url": "effect/effect3.json",
                            "type": "json",
                            "name": "effect3_json"
                        },
                        {
                            "url": "myassets/gameEndBg.png",
                            "type": "image",
                            "name": "gameEndBg_png"
                        },
                        {
                            "url": "myassets/endBtn.png",
                            "type": "image",
                            "name": "endBtn_png"
                        },
                        {
                            "url": "myassets/restartBtn.png",
                            "type": "image",
                            "name": "restartBtn_png"
                        },
                        {
                            "url": "myassets/nextGameBtn.png",
                            "type": "image",
                            "name": "nextGameBtn_png"
                        },
                        {
                            "url": "myassets/closeBtn2.png",
                            "type": "image",
                            "name": "closeBtn2_png"
                        },
                        {
                            "name": "preloadMusic_mp3",
                            "type": "sound",
                            "url": "sound/preloadMusic.mp3"
                        },
                        {
                            "name": "1_1_mp3",
                            "type": "sound",
                            "url": "sound/item/1_1.mp3"
                        },
                        {
                            "name": "1_2_mp3",
                            "type": "sound",
                            "url": "sound/item/1_2.mp3"
                        },
                        {
                            "name": "1_3_mp3",
                            "type": "sound",
                            "url": "sound/item/1_3.mp3"
                        },
                        {
                            "name": "1_4_mp3",
                            "type": "sound",
                            "url": "sound/item/1_4.mp3"
                        },
                        {
                            "name": "1_5_mp3",
                            "type": "sound",
                            "url": "sound/item/1_5.mp3"
                        },
                        {
                            "name": "1_6_mp3",
                            "type": "sound",
                            "url": "sound/item/1_6.mp3"
                        },
                        {
                            "name": "1_7_mp3",
                            "type": "sound",
                            "url": "sound/item/1_7.mp3"
                        },
                        {
                            "name": "1_8_mp3",
                            "type": "sound",
                            "url": "sound/item/1_8.mp3"
                        },
                        {
                            "name": "1_9_mp3",
                            "type": "sound",
                            "url": "sound/item/1_9.mp3"
                        },
                        {
                            "name": "1_10_mp3",
                            "type": "sound",
                            "url": "sound/item/1_10.mp3"
                        },
                        {
                            "name": "1_11_mp3",
                            "type": "sound",
                            "url": "sound/item/1_11.mp3"
                        },
                        {
                            "name": "1_12_mp3",
                            "type": "sound",
                            "url": "sound/item/1_12.mp3"
                        },
                        {
                            "name": "1_13_mp3",
                            "type": "sound",
                            "url": "sound/item/1_13.mp3"
                        },
                        {
                            "name": "1_14_mp3",
                            "type": "sound",
                            "url": "sound/item/1_14.mp3"
                        },
                        {
                            "name": "1_15_mp3",
                            "type": "sound",
                            "url": "sound/item/1_15.mp3"
                        },
                        {
                            "name": "2_1_mp3",
                            "type": "sound",
                            "url": "sound/item/2_1.mp3"
                        },
                        {
                            "name": "2_2_mp3",
                            "type": "sound",
                            "url": "sound/item/2_2.mp3"
                        },
                        {
                            "name": "2_3_mp3",
                            "type": "sound",
                            "url": "sound/item/2_3.mp3"
                        },
                        {
                            "name": "2_4_mp3",
                            "type": "sound",
                            "url": "sound/item/2_4.mp3"
                        },
                        {
                            "name": "2_6_mp3",
                            "type": "sound",
                            "url": "sound/item/2_6.mp3"
                        },
                        {
                            "name": "2_7_mp3",
                            "type": "sound",
                            "url": "sound/item/2_7.mp3"
                        },
                        {
                            "name": "2_8_mp3",
                            "type": "sound",
                            "url": "sound/item/2_8.mp3"
                        },
                        {
                            "name": "2_9_mp3",
                            "type": "sound",
                            "url": "sound/item/2_9.mp3"
                        },
                        {
                            "name": "2_10_mp3",
                            "type": "sound",
                            "url": "sound/item/2_10.mp3"
                        },
                        {
                            "name": "2_11_mp3",
                            "type": "sound",
                            "url": "sound/item/2_11.mp3"
                        },
                        {
                            "name": "2_12_mp3",
                            "type": "sound",
                            "url": "sound/item/2_12.mp3"
                        },
                        {
                            "name": "3_1_mp3",
                            "type": "sound",
                            "url": "sound/item/3_1.mp3"
                        },
                        {
                            "name": "3_2_mp3",
                            "type": "sound",
                            "url": "sound/item/3_2.mp3"
                        },
                        {
                            "name": "3_3_mp3",
                            "type": "sound",
                            "url": "sound/item/3_3.mp3"
                        },
                        {
                            "name": "3_4_mp3",
                            "type": "sound",
                            "url": "sound/item/3_4.mp3"
                        },
                        {
                            "name": "3_5_mp3",
                            "type": "sound",
                            "url": "sound/item/3_5.mp3"
                        },
                        {
                            "name": "3_6_mp3",
                            "type": "sound",
                            "url": "sound/item/3_6.mp3"
                        },
                        {
                            "name": "3_7_mp3",
                            "type": "sound",
                            "url": "sound/item/3_7.mp3"
                        },
                        {
                            "name": "3_8_mp3",
                            "type": "sound",
                            "url": "sound/item/3_8.mp3"
                        },
                        {
                            "name": "3_9_mp3",
                            "type": "sound",
                            "url": "sound/item/3_9.mp3"
                        },
                        {
                            "name": "3_10_mp3",
                            "type": "sound",
                            "url": "sound/item/3_10.mp3"
                        },
                        {
                            "name": "3_11_mp3",
                            "type": "sound",
                            "url": "sound/item/3_11.mp3"
                        },
                        {
                            "name": "3_12_mp3",
                            "type": "sound",
                            "url": "sound/item/3_12.mp3"
                        },
                        {
                            "name": "3_13_mp3",
                            "type": "sound",
                            "url": "sound/item/3_13.mp3"
                        },
                        {
                            "name": "3_14_mp3",
                            "type": "sound",
                            "url": "sound/item/3_14.mp3"
                        },
                        {
                            "name": "3_15_mp3",
                            "type": "sound",
                            "url": "sound/item/3_15.mp3"
                        },
                        {
                            "name": "3_16_mp3",
                            "type": "sound",
                            "url": "sound/item/3_16.mp3"
                        },
                        {
                            "name": "success_mp3",
                            "type": "sound",
                            "url": "sound/success.mp3"
                        },
                        {
                            "name": "fail_mp3",
                            "type": "sound",
                            "url": "sound/fail.mp3"
                        },
                        {
                            "name": "2_5_mp3",
                            "type": "sound",
                            "url": "sound/item/2_5.mp3"
                        },
                        {
                            "name": "failText_png",
                            "type": "image",
                            "url": "myassets/failText.png"
                        }
                    ]
                };
                  var t = e.config.config
                    , o = t.fileSystem;
                  o || (o = {
                      fsData: {},
                      getFile: function(e) {
                          return c[e]
                      },
                      addFile: function(e, r) {
                          r || (r = ""),
                          c[e] = {
                              name: e,
                              type: r,
                              url: e
                          }
                      },
                      profile: function() {
                          console.log(c)
                      }
                  },
                  t.fileSystem = o);
                  for (var n = t.groups, i = 0, s = r.groups; i < s.length; i++) {
                      var a = s[i];
                      n[a.name] = a.keys.split(",")
                  }
                  for (var u = t.alias, c = o.fsData, f = function(e) {
                      c[e.name] = e,
                      e.subkeys && e.subkeys.split(",").forEach(function(r) {
                          u[r] = e.name + "#" + r
                      })
                  }, l = 0, p = r.resources; l < p.length; l++) {
                      var g = p[l];
                      f(g)
                  }
                  return t
              })
          },
          onRemoveStart: function() {
              return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(e) {
                      return [2]
                  })
              })
          }
      };
      var c = function() {
          function e() {}
          return e.parse = function(r, t, o) {
              var n = 13
                , i = new Uint32Array(r,0,n)
                , s = {
                  buffer: r,
                  header: i
              };
              55727696 === i[0] ? e._parseV3(s, t, o) : 559044176 === i[11] ? e._parseV2(s, t, o) : o(s, "pvr parse error!")
          }
          ,
          e._parseV2 = function(r, t, o) {
              var n, i, s = r.header, a = s[0], u = s[1], c = s[2], f = s[3], l = s[4], n = (s[5],
              s[6]), p = (s[7],
              s[8],
              s[9],
              s[10]), g = (s[11],
              s[12]), d = 255, v = 24, h = 25, _ = l & d, R = p > 0;
              _ === h ? (i = R ? e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG : e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
              n = 4) : _ === v ? (i = R ? e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG : e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
              n = 2) : (o(r, "pvr v2 parse error"),
              console.log("unknow format flags::" + _));
              var m = a;
              r.pvrtcData = new Uint8Array(r.buffer,m),
              r.bpp = n,
              r.format = i,
              r.width = c,
              r.height = u,
              r.surfacesCount = g,
              r.mipmapsCount = f + 1,
              r.isCubemap = 6 === r.surfacesCount,
              t(r)
          }
          ,
          e._parseV3 = function(r, t, o) {
              var n, i, s = r.header, a = s[2];
              switch (a) {
              case 0:
                  n = 2,
                  i = e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                  break;
              case 1:
                  n = 2,
                  i = e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                  break;
              case 2:
                  n = 4,
                  i = e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                  break;
              case 3:
                  n = 4,
                  i = e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                  break;
              default:
                  o(r, "pvr v3 parse error"),
                  console.log("unknow pixel format::" + a)
              }
              var u = 52 + s[12];
              r.pvrtcData = new Uint8Array(r.buffer,u),
              r.bpp = n,
              r.format = i,
              r.width = s[7],
              r.height = s[6],
              r.surfacesCount = s[10],
              r.mipmapsCount = s[11],
              r.isCubemap = 6 === r.surfacesCount,
              t(r)
          }
          ,
          e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840,
          e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841,
          e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842,
          e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843,
          e
      }();
      __reflect(c.prototype, "PVRParser"),
      "undefined" != typeof egret && egret && egret.web && egret.web.WebGLRenderContext && (egret.web.WebGLRenderContext.prototype.createTextureFromCompressedData = function(e, r, t, o, n) {
          var i = this.context;
          this.pvrtcExt || (this.pvrtcExt = i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"));
          var s = i.createTexture();
          i.bindTexture(i.TEXTURE_2D, s);
          for (var u = 0, c = 0; o > c; ++c) {
              var f = a(n, r, t)
                , l = new Uint8Array(e.buffer,e.byteOffset + u,f);
              i.compressedTexImage2D(i.TEXTURE_2D, c, n, r, t, 0, l),
              r >>= 1,
              1 > r && (r = 1),
              t >>= 1,
              1 > t && (t = 1),
              u += f
          }
          return i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
          s
      }
      ),
      r.PVRProcessor = {
          onLoadStart: function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                  var o, n, i, s, a, u, f, l, p, g, d, v, h;
                  return __generator(this, function(_) {
                      switch (_.label) {
                      case 0:
                          return [4, e.load(t, r.BinaryProcessor)];
                      case 1:
                          for (o = _.sent(),
                          n = 512,
                          i = 512,
                          s = 0,
                          a = 0,
                          u = new egret.ByteArray(o),
                          u.position = 7,
                          f = ["body", "ext"],
                          p = 0; p < f.length; p++)
                              switch (g = void 0,
                              f[p]) {
                              case "body":
                                  u.position += 2,
                                  d = u.readUnsignedInt(),
                                  l = u.buffer.slice(u.position, u.position + d),
                                  u.position += d;
                                  break;
                              case "ext":
                                  u.position += 6,
                                  n = u.readUnsignedShort(),
                                  i = u.readUnsignedShort(),
                                  s = u.readUnsignedShort(),
                                  a = u.readUnsignedShort()
                              }
                          return v = this,
                          c.parse(l, function(e) {
                              var r = new egret.BitmapData(e);
                              r.format = "pvr",
                              h = new egret.Texture,
                              h._setBitmapData(r),
                              h.$initData(s, a, n, i, 0, 0, n, i, r.width, r.height)
                          }, function() {
                              console.log("pvr error")
                          }),
                          [2, h]
                      }
                  })
              })
          },
          onRemoveStart: function(e, r) {
              return Promise.resolve()
          }
      };
      var f = {
          image: r.ImageProcessor,
          json: r.JsonProcessor,
          text: r.TextProcessor,
          xml: r.XMLProcessor,
          sheet: r.SheetProcessor,
          font: r.FontProcessor,
          bin: r.BinaryProcessor,
          commonjs: r.CommonJSProcessor,
          sound: r.SoundProcessor,
          movieclip: r.MovieClipProcessor,
          pvr: r.PVRProcessor,
          mergeJson: r.MergeJSONProcessor,
          resourceConfig: r.ResourceConfigProcessor,
          legacyResourceConfig: r.LegacyResourceConfigProcessor
      }
  }(r = e.processor || (e.processor = {}))
}(RES || (RES = {}));
var RES;
!function(e) {
  var r = function(r) {
      function t(e, t, o) {
          void 0 === t && (t = !1),
          void 0 === o && (o = !1);
          var n = r.call(this, e, t, o) || this;
          return n.itemsLoaded = 0,
          n.itemsTotal = 0,
          n.groupName = "",
          n
      }
      return __extends(t, r),
      t.dispatchResourceEvent = function(r, o, n, i, s, a) {
          void 0 === n && (n = ""),
          void 0 === i && (i = void 0),
          void 0 === s && (s = 0),
          void 0 === a && (a = 0);
          var u = egret.Event.create(t, o);
          u.groupName = n,
          i && (u.resItem = e.ResourceItem.convertToResItem(i)),
          u.itemsLoaded = s,
          u.itemsTotal = a;
          var c = r.dispatchEvent(u);
          return egret.Event.release(u),
          c
      }
      ,
      t.ITEM_LOAD_ERROR = "itemLoadError",
      t.CONFIG_COMPLETE = "configComplete",
      t.CONFIG_LOAD_ERROR = "configLoadError",
      t.GROUP_PROGRESS = "groupProgress",
      t.GROUP_COMPLETE = "groupComplete",
      t.GROUP_LOAD_ERROR = "groupLoadError",
      t
  }(egret.Event);
  e.ResourceEvent = r,
  __reflect(r.prototype, "RES.ResourceEvent")
}(RES || (RES = {}));
var RES;
!function(e) {
  var r;
  !function(r) {
      function t(r) {
          var t = "";
          if (e.config.config)
              for (var o in e.config.config.alias)
                  e.config.config.alias[o] == r.url && (t = o);
          else
              t = r.url;
          var n = {
              name: t,
              url: r.url,
              type: r.type,
              data: r
          };
          return n
      }
      r.TYPE_XML = "xml",
      r.TYPE_IMAGE = "image",
      r.TYPE_BIN = "bin",
      r.TYPE_TEXT = "text",
      r.TYPE_JSON = "json",
      r.TYPE_SHEET = "sheet",
      r.TYPE_FONT = "font",
      r.TYPE_SOUND = "sound",
      r.convertToResItem = t
  }(r = e.ResourceItem || (e.ResourceItem = {}))
}(RES || (RES = {}));
var RES;
!function(e) {
  function r() {
      egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE && (n = o("all.manifest"))
  }
  function t(e) {
      return n && n[e] ? "resource/" + n[e].v.substring(0, 2) + "/" + n[e].v + "_" + n[e].s + "." + e.substring(e.lastIndexOf(".") + 1) : e
  }
  function o(e) {
      if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
          var r = egret_native.readUpdateFileSync(e);
          if (null != r)
              return JSON.parse(r);
          if (r = egret_native.readResourceFileSync(e),
          null != r)
              return JSON.parse(r)
      }
      return null
  }
  var n;
  e.native_init = r,
  e.getRealURL = t
}(RES || (RES = {}));
var RES;
!function(e) {
  function r(r, t) {
      throw new e.ResourceManagerError(2002)
  }
  function t(r, t) {
      return r && e.setConfigURL(r),
      R || (R = new _),
      e.config.resourceRoot = t,
      R.loadConfig()
  }
  function o(e, r, t) {
      return void 0 === r && (r = 0),
      R.loadGroup(e, r, t)
  }
  function n(e) {
      return R.isGroupLoaded(e)
  }
  function i(r) {
      return R.getGroupByName(r).map(function(r) {
          return e.ResourceItem.convertToResItem(r)
      })
  }
  function s(e, r, t) {
      return void 0 === t && (t = !1),
      R.createGroup(e, r, t)
  }
  function a(e) {
      return R.hasRes(e)
  }
  function u(e) {
      return R.getRes(e)
  }
  function c(e, r, t) {
      return R.getResAsync.apply(R, arguments)
  }
  function f(e, r, t, o) {
      void 0 === o && (o = ""),
      R.getResByUrl(e, r, t, o)
  }
  function l(e, r) {
      return R.destroyRes(e, r)
  }
  function p(e) {
      R || (R = new _),
      R.setMaxLoadingThread(e)
  }
  function g(e) {
      R.setMaxRetryTimes(e)
  }
  function d(e, r, t, o, n) {
      void 0 === o && (o = !1),
      void 0 === n && (n = 0),
      R || (R = new _),
      R.addEventListener(e, r, t, o, n)
  }
  function v(e, r, t, o) {
      void 0 === o && (o = !1),
      R.removeEventListener(e, r, t, o)
  }
  function h(e) {
      R.addResourceData(e)
  }
  e.registerAnalyzer = r,
  e.loadConfig = t,
  e.loadGroup = o,
  e.isGroupLoaded = n,
  e.getGroupByName = i,
  e.createGroup = s,
  e.hasRes = a,
  e.getRes = u,
  e.getResAsync = c,
  e.getResByUrl = f,
  e.destroyRes = l,
  e.setMaxLoadingThread = p,
  e.setMaxRetryTimes = g,
  e.addEventListener = d,
  e.removeEventListener = v,
  e.$addResourceData = h;
  var _ = function(r) {
      function t() {
          return null !== r && r.apply(this, arguments) || this
      }
      return __extends(t, r),
      t.prototype.loadConfig = function() {
          var r = this;
          return e.native_init(),
          e.config.init().then(function(t) {
              e.ResourceEvent.dispatchResourceEvent(r, e.ResourceEvent.CONFIG_COMPLETE)
          }, function(t) {
            e.ResourceEvent.dispatchResourceEvent(r, e.ResourceEvent.CONFIG_COMPLETE)
            //   return e.ResourceEvent.dispatchResourceEvent(r, e.ResourceEvent.CONFIG_LOAD_ERROR),
            //   Promise.reject(t)
          })
      }
      ,
      t.prototype.isGroupLoaded = function(r) {
          var t = e.config.getGroupByName(r, !0);
          return t.every(function(r) {
              return null != e.host.get(r)
          })
      }
      ,
      t.prototype.getGroupByName = function(r) {
          return e.config.getGroupByName(r, !0)
      }
      ,
      t.prototype.loadGroup = function(r, t, o) {
          var n = this;
          void 0 === t && (t = 0);
          var i = {
              onProgress: function(t, i) {
                  o && o.onProgress && o.onProgress(t, i),
                  e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_PROGRESS, r, void 0, t, i)
              }
          };
          return this._loadGroup(r, t, i).then(function(t) {
              e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_COMPLETE, r)
          }, function(t) {
              return e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_LOAD_ERROR, r),
              Promise.reject(t)
          })
      }
      ,
      t.prototype._loadGroup = function(r, t, o) {
          void 0 === t && (t = 0);
          var n = e.config.getGroupByName(r, !0);
          return e.queue.load(n, r, t, o)
      }
      ,
      t.prototype.loadResources = function(r, t) {
          var o = r.map(function(r) {
              var t = e.config.getResourceWithSubkey(r, !0);
              return t.r
          });
          return e.queue.load(o, "name", 0, t)
      }
      ,
      t.prototype.createGroup = function(r, t, o) {
          return void 0 === o && (o = !1),
          e.config.createGroup(r, t, o)
      }
      ,
      t.prototype.hasRes = function(r) {
          return null != e.config.getResourceWithSubkey(r)
      }
      ,
      t.prototype.getRes = function(r) {
          var t = e.config.getResourceWithSubkey(r);
          if (t) {
              var o = t.r
                , n = t.key
                , i = t.subkey
                , s = e.processor.isSupport(o);
              return s && s.getData && i ? s.getData(e.host, o, n, i) : e.host.get(o)
          }
          return null
      }
      ,
      t.prototype.getResAsync = function(r, t, o) {
          var n = r
            , i = e.config.getResourceWithSubkey(r, !0)
            , s = i.r
            , a = i.subkey;
          return e.queue.loadResource(s).then(function(i) {
              e.host.save(s, i);
              var u = e.processor.isSupport(s);
              return u && u.getData && a && (i = u.getData(e.host, s, r, a)),
              t && t.call(o, i, n),
              i
          })
      }
      ,
      t.prototype.getResByUrl = function(r, t, o, n) {
          void 0 === n && (n = "");
          var i = e.config.getResource(r);
          if (!i) {
              if (n || (n = e.config.__temp__get__type__via__url(r)),
              i = {
                  name: r,
                  url: r,
                  type: n,
                  extra: !0
              },
              e.config.addResourceData(i),
              i = e.config.getResource(r),
              !i)
                  throw "never";
              i.extra = !0
          }
          return e.queue.loadResource(i).then(function(e) {
              return t && i && t.call(o, e, i.url),
              e
          })
      }
      ,
      t.prototype.destroyRes = function(r, t) {
          return void 0 === t && (t = !0),
          __awaiter(this, void 0, void 0, function() {
              var t, o, n, i, s, s;
              return __generator(this, function(a) {
                  switch (a.label) {
                  case 0:
                      if (t = e.config.getGroup(r),
                      o = function(r) {
                          return e.queue.unloadResource(r)
                      }
                      ,
                      !(t && t.length > 0))
                          return [3, 5];
                      n = 0,
                      i = t,
                      a.label = 1;
                  case 1:
                      return n < i.length ? (s = i[n],
                      [4, o(s)]) : [3, 4];
                  case 2:
                      a.sent(),
                      a.label = 3;
                  case 3:
                      return n++,
                      [3, 1];
                  case 4:
                      return [2, !0];
                  case 5:
                      return s = e.config.getResource(r),
                      s ? [4, o(s)] : [3, 7];
                  case 6:
                      return a.sent(),
                      [2, !0];
                  case 7:
                      return console.warn("无法删除指定组:" + r),
                      [2, !1]
                  }
              })
          })
      }
      ,
      t.prototype.setMaxLoadingThread = function(r) {
          1 > r && (r = 1),
          e.queue.thread = r
      }
      ,
      t.prototype.setMaxRetryTimes = function(r) {
          r = Math.max(r, 0),
          e.queue.maxRetryTimes = r
      }
      ,
      t.prototype.addResourceData = function(r) {
          e.config.addResourceData(r)
      }
      ,
      __decorate([e.checkCancelation], t.prototype, "loadConfig", null),
      __decorate([e.checkCancelation], t.prototype, "_loadGroup", null),
      __decorate([e.checkNull], t.prototype, "hasRes", null),
      __decorate([e.checkNull], t.prototype, "getRes", null),
      __decorate([e.checkNull, e.checkCancelation], t.prototype, "getResAsync", null),
      __decorate([e.checkNull, e.checkCancelation], t.prototype, "getResByUrl", null),
      t
  }(egret.EventDispatcher);
  e.Resource = _,
  __reflect(_.prototype, "RES.Resource");
  var R
}(RES || (RES = {}));
