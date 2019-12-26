var __reflect = this && this.__reflect || function(e, t, n) {
  e.__class__ = t,
  n ? n.push(t) : n = [t],
  e.__types__ = e.__types__ ? n.concat(e.__types__) : n
}
, __extends = this && this.__extends || function(e, t) {
  function n() {
      this.constructor = e
  }
  for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
  n.prototype = t.prototype,
  e.prototype = new n
}
, __awaiter = this && this.__awaiter || function(e, t, n, i) {
  return new (n || (n = Promise))(function(o, r) {
      function s(e) {
          try {
              l(i.next(e))
          } catch (t) {
              r(t)
          }
      }
      function a(e) {
          try {
              l(i["throw"](e))
          } catch (t) {
              r(t)
          }
      }
      function l(e) {
          e.done ? o(e.value) : new n(function(t) {
              t(e.value)
          }
          ).then(s, a)
      }
      l((i = i.apply(e, t || [])).next())
  }
  )
}
, __generator = this && this.__generator || function(e, t) {
  function n(e) {
      return function(t) {
          return i([e, t])
      }
  }
  function i(n) {
      if (o)
          throw new TypeError("Generator is already executing.");
      for (; l; )
          try {
              if (o = 1,
              r && (s = r[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(r, n[1])).done)
                  return s;
              switch (r = 0,
              s && (n = [0, s.value]),
              n[0]) {
              case 0:
              case 1:
                  s = n;
                  break;
              case 4:
                  return l.label++,
                  {
                      value: n[1],
                      done: !1
                  };
              case 5:
                  l.label++,
                  r = n[1],
                  n = [0];
                  continue;
              case 7:
                  n = l.ops.pop(),
                  l.trys.pop();
                  continue;
              default:
                  if (s = l.trys,
                  !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                      l = 0;
                      continue
                  }
                  if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                      l.label = n[1];
                      break
                  }
                  if (6 === n[0] && l.label < s[1]) {
                      l.label = s[1],
                      s = n;
                      break
                  }
                  if (s && l.label < s[2]) {
                      l.label = s[2],
                      l.ops.push(n);
                      break
                  }
                  s[2] && l.ops.pop(),
                  l.trys.pop();
                  continue
              }
              n = t.call(e, l)
          } catch (i) {
              n = [6, i],
              r = 0
          } finally {
              o = s = 0
          }
      if (5 & n[0])
          throw n[1];
      return {
          value: n[0] ? n[1] : void 0,
          done: !0
      }
  }
  var o, r, s, a, l = {
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
      next: n(0),
      "throw": n(1),
      "return": n(2)
  },
  "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
  }
  ),
  a
}
, GameControl = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.gameIsRestart = !0,
      t.gameIsOver = !1,
      t._maxSteep = 6,
      t.skinName = "GameControlSkin",
      t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAdded, t),
      t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.onRemoved, t),
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this),
      this.init(),
      this.resetInit()
  }
  ,
  t.prototype.onAdded = function() {}
  ,
  t.prototype.onRemoved = function() {
      SoundManager.instance.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
      G.removerAllViewClickAction(this._actionNames)
  }
  ,
  t.prototype.gameStart = function() {
      this.gameIsRestart && !this._isAction && (this.gameIsOver = !1,
      this._isAction = !0)
  }
  ,
  t.prototype.gameRestart = function() {
      this.gameIsOver && (this.gameIsRestart = !0),
      this.resetInit(),
      this._isAction = !0
  }
  ,
  t.prototype.init = function() {
      SoundManager.instance.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this)
  }
  ,
  t.prototype.resetInit = function() {
      egret.Tween.removeTweens(this)
  }
  ,
  t.prototype.onGameAction = function(e) {
      this._isPlayerMove || this._isAction && this._currSelect && GameTool.setSelectEffect1(this[this._currSelect], !1)
  }
  ,
  t.prototype.playOverEffect = function() {
      var e = this;
      egret.Tween.get(this).wait(500).call(function() {
          e.stage.addChild(e.mask_img),
          e.stage.addChild(e.effect_gp),
          e.mask_img.visible = !0,
          G.playerEffectOnce("wancheng_Mc", e.effect_gp, 24),
          e.gameIsOver = !0,
          SoundManager.instance.playSound(SoundManager.GameOverAudio)
      })
  }
  ,
  t.prototype.register = function(e) {
      this.gameStageControl = e
  }
  ,
  t.prototype.onSoundComplete = function(e) {
      e.data == SoundManager.GameOverAudio && (this.mask_img.visible = !1,
      this.addChild(this.mask_img),
      this.addChild(this.effect_gp),
      egret.Tween.removeAllTweens(),
      this.dispatchEventWith("animationComplete"),
      this.gameStageControl.onGameOver(),
      this.gameIsOver = !0)
  }
  ,
  t
}(eui.Component);
__reflect(GameControl.prototype, "GameControl");
var AssetAdapter = function() {
  function e() {}
  return e.prototype.getAsset = function(e, t, n) {
      function i(i) {
          t.call(n, i, e)
      }
      if (RES.hasRes(e)) {
          var o = RES.getRes(e);
          o ? i(o) : RES.getResAsync(e, i, this)
      } else
          RES.getResByUrl(e, i, this, RES.ResourceItem.TYPE_IMAGE)
  }
  ,
  e
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Main = function(e) {
  function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.gameStage = new GameStage,
      t
  }
  return __extends(t, e),
  t.prototype.createChildren = function() {
      e.prototype.createChildren.call(this),
      egret.lifecycle.addLifecycleListener(function(e) {}),
      egret.lifecycle.onPause = function() {
          egret.ticker.pause()
      }
      ,
      egret.lifecycle.onResume = function() {
          egret.ticker.resume()
      }
      ;
      var t = new AssetAdapter;
      egret.registerImplementation("eui.IAssetAdapter", t),
      egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
      GlobalData.stage = this.stage,
      this.runGame()["catch"](function(e) {
          console.log(e)
      })
  }
  ,
  t.prototype.runGame = function() {
      return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
              switch (e.label) {
              case 0:
                  return [4, this.loadResource()];
              case 1:
                  return e.sent(),
                  [2]
              }
          })
      })
  }
  ,
  t.prototype.loadResource = function() {
      var r = this;
      return __awaiter(this, void 0, void 0, function() {
          var e, t;
          var a= this;
          return __generator(this, function(n) {
              var b = this;
              switch (n.label) {
              case 0:
                  return n.trys.push([0, 5, , 6]),
                  [4, RES.loadConfig("resource/default.res.json", "resource/")]
               
              case 1:
                  return n.sent(),
                  [4, this.loadTheme()];
              case 2:
                  return n.sent(),
                  [4, RES.loadGroup("loading", 0)];
              case 3:
                  return n.sent(),
                  e = new LoadingUI,
                  this.stage.addChild(e),
                  e.callBack(this, this.createGameScene),
                  [4, RES.loadGroup("preload", 1, e)];
              case 4:
                  return n.sent(),
                  SoundManager.instance.playSound(SoundManager.preloadAudio),
                  [3, 6];
              case 5:
                  return t = n.sent(),
                  console.error(t),
                  [3, 6];
              case 6:
                  return [2]
              }
          })
      })
  }
  ,
  t.prototype.loadTheme = function() {
      var e = this;
      return new Promise(function(t, n) {
          var i = new eui.Theme("resource/default.thm.json",e.stage);
          i.addEventListener(eui.UIEvent.COMPLETE, function() {
              t()
          }, e)
      }
      )
  }
  ,
  t.prototype.createGameScene = function() {
      this.gameStage = new GameStage,
      this.gameStage.register(this),
      this.addChild(this.gameStage),
      SoundManager.instance.playMusic(SoundManager.bgAudio)
  }
  ,
  t
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var DebugPlatform = function() {
  function e() {}
  return e.prototype.getUserInfo = function() {
      return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
              return [2, {
                  nickName: "username"
              }]
          })
      })
  }
  ,
  e.prototype.login = function() {
      return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e) {
              return [2]
          })
      })
  }
  ,
  e
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]),
window.platform || (window.platform = new DebugPlatform);
var ThemeAdapter = function() {
  function e() {}
  return e.prototype.getTheme = function(e, t, n, i) {
      function o(e) {
          t.call(i, e)
      }
      function r(t) {
          t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null),
          n.call(i))
      }
      "undefined" != typeof generateEUI ? egret.callLater(function() {
          t.call(i, generateEUI)
      }, this) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null),
      RES.getResByUrl(e, o, this, RES.ResourceItem.TYPE_TEXT))
  }
  ,
  e
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var AudioPlayer = function(e) {
  function t(t, n) {
      void 0 === n && (n = !0);
      var i = e.call(this) || this;
      return i._name = null,
      i._isEffect = null,
      i.channel = null,
      i._isPlaying = !1,
      i._name = t,
      i._isEffect = n,
      i.init(),
      i
  }
  return __extends(t, e),
  t.prototype.init = function() {
      this.sound = RES.getRes(this._name),
      this._isEffect ? this.sound.type = egret.Sound.EFFECT : this.sound.type = egret.Sound.MUSIC
  }
  ,
  t.prototype.getPlayState = function() {
      return this._isPlaying
  }
  ,
  Object.defineProperty(t.prototype, "isPlaying", {
      get: function() {
          return this._isPlaying
      },
      enumerable: !0,
      configurable: !0
  }),
  t.prototype.play = function(e) {
      void 0 === e && (e = 0),
      this._isPlaying || (this.channel = this.sound.play(0, e),
      this.channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this),
      this._isPlaying = !0)
  }
  ,
  t.prototype.onSoundCompl = function() {
      this.channel && (this.channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this),
      this.dispatchEventWith(egret.Event.SOUND_COMPLETE),
      this._isPlaying = !1)
  }
  ,
  t.prototype.stop = function() {
      this.channel && (this.channel.stop(),
      this.channel.position = 0,
      this.channel = null,
      this._isPlaying = !1)
  }
  ,
  t.prototype.reStart = function() {}
  ,
  t.prototype.updateVolume = function(e) {
      var t = 0;
      e >= 0 && 1 >= e ? t = e : 0 > e ? t = 0 : e > 1 && (t = 1),
      this.channel.volume = t
  }
  ,
  t
}(egret.DisplayObjectContainer);
__reflect(AudioPlayer.prototype, "AudioPlayer");
var BitmapMovie = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.textureList = [],
      t.curFrame = 0,
      t._delay = Math.floor(1e3 / 24),
      t.loop = 0,
      t
  }
  return __extends(t, e),
  t.prototype.initByBitmap = function(e, t, n, i, o, r, s) {
      this.textureList = CutImgTool.cutTile(e, t, n, i, o, r, s),
      this.textureList && this.textureList.length > 0 && (this.texture = this.textureList[0],
      this.curFrame = 0,
      this.totalFrame = this.textureList.length)
  }
  ,
  t.prototype.initByTile = function(e, t, n) {
      this.textureList.length = 0;
      for (var i = 1; n > i; i++)
          this.textureList[i - 1] = RES.getRes(e + this.getIndex(i) + "_" + t);
      this.textureList.length > 0 && (this.texture = this.textureList[0],
      this.curFrame = 0,
      this.totalFrame = this.textureList.length)
  }
  ,
  t.prototype.play = function(e) {
      void 0 === e && (e = 0),
      this.loop = e,
      this.startTimer()
  }
  ,
  t.prototype.stop = function() {
      this.stopTimer()
  }
  ,
  t.prototype.restart = function() {
      this.startTimer()
  }
  ,
  t.prototype.gotoAndPlay = function(e, t) {
      void 0 === t && (t = 0),
      e <= this.totalFrame ? (this.loop = t,
      this.curFrame = e,
      this.texture = this.textureList[e - 1],
      this.startTimer()) : console.error("BitmapMovie >> frame超出范围")
  }
  ,
  t.prototype.gotoAndStop = function(e) {
      e <= this.totalFrame ? (this.stopTimer(),
      this.curFrame = e,
      this.texture = this.textureList[e - 1]) : console.error("BitmapMovie >> frame超出范围")
  }
  ,
  t.prototype.startTimer = function() {
      this.timer || (this.timer = new egret.Timer(this.delay)),
      this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
      this.timer.reset(),
      this.timer.start()
  }
  ,
  t.prototype.onTimerHandler = function() {
      this.curFrame++,
      this.curFrame <= this.totalFrame ? this.texture = this.textureList[this.curFrame - 1] : (this.loop--,
      this.dispatchEvent(new egret.Event(egret.Event.LOOP_COMPLETE)),
      this.loop > 0 ? (this.curFrame = 1,
      this.texture = this.textureList[this.curFrame - 1]) : (this.stopTimer(),
      this.dispatchEvent(new egret.Event(egret.Event.COMPLETE))))
  }
  ,
  t.prototype.stopTimer = function() {
      this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
      this.timer.stop())
  }
  ,
  Object.defineProperty(t.prototype, "delay", {
      get: function() {
          return this._delay
      },
      set: function(e) {
          this._delay = e,
          this.timer && (this.timer.delay = e)
      },
      enumerable: !0,
      configurable: !0
  }),
  t.prototype.getIndex = function(e) {
      return 10 > e ? "000" + e : 100 > e ? "00" + e : 1e3 > e ? "0" + e : void 0
  }
  ,
  t
}(eui.Image);
__reflect(BitmapMovie.prototype, "BitmapMovie");
var BtnsGroup = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.skinName = "BtnsGroupSkin",
      t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAdded, t),
      t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.onRemoved, t),
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this),
      this.helpButtonMovie = new ButtonMovie,
      this.helpButtonMovie.init(this.gameHelpBtn, "helpStart_png", "helpEnd_png"),
      this.restartButttonMovie = new ButtonMovie,
      this.restartButttonMovie.init(this.gameRestartBtn, "restartStart_png", "restartEnd_png")
  }
  ,
  t.prototype.onAdded = function() {
      this.gameHelpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameHelp, this),
      this.gameRestartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameRestart, this),
      GameTool.setViewWaitEffect(this.gameHelpBtn, 1.15)
  }
  ,
  t.prototype.onRemoved = function() {
      this.gameHelpBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameHelp, this),
      this.gameRestartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameRestart, this)
  }
  ,
  t.prototype.onGameHelp = function() {
      GameTool.stopViewWaitEffect(this.gameHelpBtn),
      this.gameStageControl.onNoticeDialog(),
      this.gameStageControl.onGameStart()
  }
  ,
  t.prototype.onGameOver = function() {
      GameTool.setViewWaitEffect(this.gameRestartBtn, 1.15)
  }
  ,
  t.prototype.onGameRestart = function() {
      this.gameStageControl.onGameRestart(),
      GameTool.stopViewWaitEffect(this.gameRestartBtn)
  }
  ,
  t.prototype.register = function(e) {
      this.gameStageControl = e
  }
  ,
  t
}(eui.Component);
__reflect(BtnsGroup.prototype, "BtnsGroup");
var ButtonMovie = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t._delay = Math.floor(10),
      t.loop = 999,
      t.delay = 1e3,
      t
  }
  return __extends(t, e),
  t.prototype.init = function(e, t, n) {
      this.target = e,
      this.currentSourceName = t,
      this._up = t,
      this._down = n
  }
  ,
  t.prototype.startTimer = function() {
      this.timer || (this.timer = new egret.Timer(this.delay)),
      this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
      this.timer.reset(),
      this.timer.start()
  }
  ,
  t.prototype.stopTimer = function() {
      this.timer && this.timer.stop()
  }
  ,
  t.prototype.onTimerHandler = function(e) {
      this.currentSourceName == this._up ? (this.currentSourceName = this._down,
      this.target.source = this._down) : (this.target.source = this._up,
      this.currentSourceName = this._up)
  }
  ,
  t
}(eui.Image);
__reflect(ButtonMovie.prototype, "ButtonMovie");
var GameEndView = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.skinName = "GameEndSkin",
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this),
      G.setAllViewClickAction(this, ["endBtn", "restartBtn", "nextGameBtn"], this.onGameAction)
  }
  ,
  t.prototype.show = function(e, t) {
      this._nextCall = e,
      this._taget = t
  }
  ,
  t.prototype.onGameAction = function(e) {
      switch (this.onRemove(),
      e.currentTarget.name) {
      case "endBtn":
          var t = egret.getOption("home");
          (null == t || "" == t) && (t = "/"),
          document.location.href = t;
          break;
      case "restartBtn":
          this._nextCall.apply(this._taget);
          break;
      case "nextGameBtn":
          var t = egret.getOption("home")
            , n = t.lastIndexOf("/")
            , i = t.substring(0, n);
          document.location.href = i + "/fenlei"
      }
  }
  ,
  t.prototype.onRemove = function() {
      this.parent && this.parent.removeChild(this)
  }
  ,
  t
}(eui.Component);
__reflect(GameEndView.prototype, "GameEndView");
var NoticeDialog = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.skinName = "NewNoticeDialogSkin",
      t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAdded, t),
      t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.onRemoved, t),
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this)
  }
  ,
  t.prototype.init = function(e, t) {
      void 0 === t && (t = ""),
      "" != t && (this.noticeDialogText.text = t)
  }
  ,
  t.prototype.setCloseFun = function(e, t) {
      this.closeFun = e,
      this.thisObj = t
  }
  ,
  t.prototype.onSoundComp = function() {}
  ,
  t.prototype.onAdded = function() {
      this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRemove, this)
  }
  ,
  t.prototype.onRemove = function() {
      this.parent && this.parent.removeChild(this),
      null != this.closeFun && this.closeFun.apply(this.thisObj)
  }
  ,
  t.prototype.onRemoved = function() {
      this.onSoundComp(),
      this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRemove, this),
      SoundManager.instance.stopSound()
  }
  ,
  t
}(eui.Component);
__reflect(NoticeDialog.prototype, "NoticeDialog");
var NoticeDialog1 = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.skinName = "NewNoticeDialog1Skin",
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this),
      G.setAllViewClickAction(this, ["closeBtn", "nextBtn", "resetBtn"], this.onGameAction),
      this._effects = [],
      this._effects.push(GameTool.createMovieClipByName("effect1")),
      this._effects.push(GameTool.createMovieClipByName("effect2"))
  }
  ,
  t.prototype.showInfo = function(e, t, n, i, o, r, s) {
      void 0 === s && (s = null),
      this.title_1.text = t.toString(),
      this.title_0.text = e.toString(),
      this.lose_gp.visible = !n,
      this.win_gp.visible = n;
      var a = n ? this._effects[0] : this._effects[1];
      if (a.frameRate = 24,
      a.scaleX = a.scaleY = .7,
      a.play(-1),
      this.effect_gp.addChild(a),
      this.txt_1.alpha = 0,
      s) {
          this._currItems = s;
          var l = this.icon;
          l.alpha = 0
      }
      this._nextCall = i,
      this._resetCall = o,
      this._taget = r,
      n ? (SoundManager.instance.addEventListener(egret.Event.SOUND_COMPLETE, this.onSuccessComplete, this),
      SoundManager.instance.playSound(SoundManager.successAudio)) : SoundManager.instance.playSound(SoundManager.failAudio)
  }
  ,
  t.prototype.onSuccessComplete = function(e) {
      SoundManager.instance.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSuccessComplete, this),
      this._currIndex = 0,
      this.showEffect()
  }
  ,
  t.prototype.showEffect = function() {
      var e = RES.getRes("iteminfo_json")
        , t = this.icon;
      t.source = "item_" + this._currItems[this._currIndex] + "_png",
      SoundManager.instance.playSound(this._currItems[this._currIndex] + "_mp3"),
      this.txt_1.text = e[this._currItems[this._currIndex]],
      t.alpha = 0,
      this.txt_1.alpha = 0,
      egret.Tween.get(t).to({
          alpha: 1
      }, 500),
      egret.Tween.get(this.txt_1).to({
          alpha: 1
      }, 500),
      this._currIndex += 1,
      this._currIndex == this._currItems.length && (this._currIndex = 0),
      egret.Tween.get(this).wait(2e3).call(this.showEffect)
  }
  ,
  t.prototype.onGameAction = function(e) {
      switch (e.currentTarget.name) {
      case "closeBtn":
          this._resetCall.apply(this._taget);
          break;
      case "nextBtn":
          this._nextCall.apply(this._taget);
          break;
      case "resetBtn":
          this._resetCall.apply(this._taget)
      }
      this.onRemove()
  }
  ,
  t.prototype.onRemove = function() {
      if (this.parent) {
          var e = this.effect_gp
            , t = e.removeChildAt(0);
          t.gotoAndStop(1),
          egret.Tween.removeTweens(this),
          this.parent.removeChild(this),
          SoundManager.instance.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSuccessComplete, this),
          SoundManager.instance.stopSound()
      }
  }
  ,
  t
}(eui.Component);
__reflect(NoticeDialog1.prototype, "NoticeDialog1");
var LoadingUI = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.createView(),
      t
  }
  return __extends(t, e),
  t.prototype.createView = function() {
      this.textField = new egret.TextField,
      this.textField.size = 36,
      this.textField.textColor = 3342387,
      this.addChild(this.textField);
      var e = new eui.Group;
      e.width = GlobalData.stage.stageWidth,
      e.height = GlobalData.stage.stageHeight;
      var t = new eui.HorizontalLayout;
      t.horizontalAlign = egret.HorizontalAlign.CENTER,
      t.verticalAlign = egret.VerticalAlign.MIDDLE,
      t.gap = -100,
      e.layout = t;
      var n = new eui.Image("playBtn_png")
        , i = G.createEffect("effect3", e, 24);
      this.addChild(e),
      n.y = GlobalData.stage.stageHeight - 163 >> 1,
      n.x = .8 * (GlobalData.stage.stageWidth - 163),
      this.addChild(n),
      this._btn = n,
      this._logo = i,
      n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAction, this),
      n.visible = !1,
      this.textField.textAlign = egret.HorizontalAlign.LEFT
  }
  ,
  t.prototype.onAction = function(e) {
    // TODO:
    console.log(this._isOk, e)
    document.querySelector('.hide-content').style.display = 'none';
    // document.querySelector('.game-tip').style.display = 'none';
    //       document.querySelector('.videos').style.display = 'none';
      this._isOk && (this._btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAction, this),
      this.removerView(),
      SoundManager.instance.playSound(SoundManager.preloadAudio))
  }
  ,
  t.prototype.onProgress = function(e, t) {
      var n = Math.floor(e / t * 100);
      // this.textField.text = "Loading..." + n + "%",// TODO:
      this.textField.x = GlobalData.stage.stageWidth - this.textField.width >> 1,
      this.textField.y = (GlobalData.stage.stageHeight - this.textField.height >> 1) - 100,
      this._logo.gotoAndStop(Math.floor(e / t * this._logo.totalFrames)),
      e == t && (this._isOk = !0,
      this._btn.visible = !0,
      this._logo.gotoAndStop(this._logo.totalFrames))
  }
  ,
  t.prototype.removerView = function() {
      this.parent.removeChild(this),
      this._call && this._call.apply(this._taget)
  }
  ,
  t.prototype.callBack = function(e, t) {
      this._taget = e,
      this._call = t
  }
  ,
  t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var GameStage = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t.level_sets = [6, 8, 12],
      t.total_levels = 9,
      t.skinName = "GameStageSkin",
      t
  }
  return __extends(t, e),
  t.prototype.childrenCreated = function() {
      e.prototype.childrenCreated.call(this),
      this.noticeDialog = new NoticeDialog,
      this.rewardDialog = new NoticeDialog1,
    // TODO:   G.setAllViewClickAction(this, ["help_btn", "return_btn", "sound_btn"], this.onGameAction);
      G.setAllViewClickAction(this, [ "return_btn", "sound_btn"], this.onGameAction);
      for (var t = [6, 8, 12], n = 0; 3 > n; n++) {
          for (var i = this["info_" + (n + 1)], o = [], r = 0; r < t[n]; r++)
              o.push("item_" + r);
          G.setAllViewClickAction(i, o, this.ActionGame1, !1)
      }
      this._timer = new egret.Timer(1e3),
      this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerComplete, this),
      this.gameInit()
  }
  ,
  t.prototype.getItemsByLevel = function(e) {
      for (var t = this["info_" + (e + 1)], n = [], i = 0; i < this.level_sets[e]; i++)
          n.push(t["item_" + i]);
      return n
  }
  ,
  t.prototype.showLevel = function(e) {
      var t = this._levelAllData[e];
      this._currData = t,
      t = t.concat(t.concat());
      for (var n = []; t.length > 0; )
          1 * Math.random() > .5 ? n.push(t.splice(0, 1)[0]) : n.push(t.pop());
      for (; n.length > 0; )
          1 * Math.random() > .5 ? t.push(n.splice(0, 1)[0]) : t.push(n.pop());
      this._allData = t,
      this._currControl && (this._currControl.visible = !1),
      this._gameType = [3, 4, 6].indexOf(.5 * this._allData.length);
      var i = this["info_" + (this._gameType + 1)];
      i.visible = !0,
      this._currControl = i,
      this._currViews = this.getItemsByLevel(this._gameType);
      for (var o = 0; o < this._currViews.length; o++)
          this._currViews[o].visible = !0,
          this._currViews[o].source = "tile1_png"
  }
  ,
  t.prototype.onGameAction = function(e) {
      switch (e.currentTarget.name) {
      case "help_btn":
        //   this.onNoticeDialog(); TODO:
          break;
      case "return_btn":
          var t = egret.getOption("home");
          (null == t || "" == t) && (t = "/"),
          document.location.href = '../../../index.html'; // TODO:
          break;
      case "sound_btn":
          SoundManager.instance.isMusicOn = !SoundManager.instance.isMusicOn,
          SoundManager.instance.isSoundOn = !SoundManager.instance.isSoundOn,
          SoundManager.instance.isMusicOn ? this.sound_btn.source = "sound_on_png" : this.sound_btn.source = "sound_off_png"
      }
  }
  ,
  t.prototype.onTimerComplete = function(e) {
      var t = this._maxTimer - (this._timerCount += 1);
      this.count_1.text = DateUtils.formatTime(t, !1),
      0 == t && this.onRewardDialog(!1)
  }
  ,
  t.prototype.updateCount = function(e) {
      this.count_0.text = (this._count += e) + ""
  }
  ,
  t.prototype.gameInit = function() {
      for (var e = [[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]], [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 1, 2]]], t = [], n = e[0].concat(); n.length > 0; )
          1 * Math.random() < .5 ? t.push(n.pop()) : t.push(n.splice(0, 1)[0]);
      for (var i = e[1].concat(); i.length > 0; )
          1 * Math.random() < .5 ? t.push(i.pop()) : t.push(i.splice(0, 1)[0]);
      for (var o = e[2].concat(); o.length > 0; )
          1 * Math.random() < .5 ? t.push(o.pop()) : t.push(o.splice(0, 1)[0]);
      this._levelAllData = t,
      this._gameType = 0,
      this._levelCount = 0,
      this._steep = 0,
      this._maxCount = 0,
      this._count = 0,
      this.onGameStart(!0),
      SoundManager.instance.isMusicOn = !0
  }
  ,
  t.prototype.onGameReset = function() {
      this._timerCount = 0,
      this._steep = 0,
      this._isMove = !1,
      this._count = 0,
      this.showLevel(this._levelCount);
      var e = [60, 90, 120]; // TODO:
      this._maxTimer = e[this._gameType],
      this._timer.stop(),
      this._timer.start(),
      this.count_0.text = "0",
      this.count_1.text = DateUtils.formatTime(this._maxTimer, !1);
      var t = ["简单", "中等", "困难"];
      this.count_2.text = t[this._gameType],
      SoundManager.instance.isMusicOn = !0
  }
  ,
  t.prototype.ActionGame1 = function(e) {
      var t = e.currentTarget;
      t.parent.parent.ActionGame(t)
  }
  ,
  t.prototype.ActionGame = function(e) {
      var t = this
        , n = e;
      n.name.split("_")[1];
      if (!this._isMove && this._selectName != n.name)
          if (this._selectName) {
              var i = n.name.split("_")[1]
                , o = this._selectName.split("_")[1];
              console.log("name = " + n.name + ",selectName = " + this._selectName),
              this._selectName != n.name && this._allData[Number(i)] == this._allData[Number(o)] ? (this._currControl[this._selectName],
              this.showEffect2(n),
              this._isMove = !0,
              this._steep += 2,
              this.updateCount(100),
              egret.Tween.get(this).wait(1e3).call(function() {
                  SoundManager.instance.playSound(SoundManager.RightAudio),
                  t._currControl[t._selectName].visible = !1,
                  console.log("this._currControl[this._selectName] = " + t._currControl[t._selectName].source);
                  var e = t._currControl[t._selectName].source;
                  e = e.replace("item_", ""),
                  e = e.replace("_png", ""),
                  SoundManager.instance.playSound(e + "_mp3"),
                  t._selectName = "",
                  t._isMove = !1,
                  t._steep == t._allData.length && (t._timer.stop(),
                  egret.Tween.get(t).wait(1e3).call(function() {
                      t.onRewardDialog()
                  }))
              })) : (this.showEffect1(n),
              this._selectName1 = n.name,
              this._isMove = !0,
              egret.Tween.get(this).wait(1e3).call(function() {
                  t.updateCount(-10),
                  SoundManager.instance.playSound(SoundManager.ErrorAudio),
                  t.showEffect3(t._currControl[t._selectName]),
                  t.showEffect3(t._currControl[t._selectName1]),
                  t._selectName = "",
                  t._selectName1 = "",
                  t._isMove = !1
              }))
          } else
              this._selectName = n.name,
              this.showEffect1(n)
  }
  ,
  t.prototype.showEffect1 = function(e) {
      var t = this
        , n = egret.Tween.get(e)
        , i = e.name.split("_")[1]
        , o = [e.x, e.y]
        , r = [e.x + .5 * e.width, e.y];
      n.to({
          scaleX: 0,
          x: r[0]
      }, 300, egret.Ease.backIn).call(function() {
          e.source = "item_" + (t._gameType + 1) + "_" + t._allData[Number(i)] + "_png"
      }).to({
          scaleX: 1,
          x: o[0]
      }, 200)
  }
  ,
  t.prototype.showEffect3 = function(e) {
      var t = egret.Tween.get(e)
        , n = [e.x, e.y]
        , i = [e.x + .5 * e.width, e.y];
      t.to({
          scaleX: 0,
          x: i[0]
      }, 300, egret.Ease.backIn).call(function() {
          e.source = "tile1_png"
      }).to({
          scaleX: 1,
          x: n[0]
      }, 200)
  }
  ,
  t.prototype.showEffect2 = function(e) {
      var t = this
        , n = egret.Tween.get(e)
        , i = e.name.split("_")[1]
        , o = [e.x, e.y]
        , r = [e.x + .5 * e.width, e.y];
      n.to({
          scaleX: 0,
          x: r[0]
      }, 300, egret.Ease.backIn).call(function() {
          e.source = "item_" + (t._gameType + 1) + "_" + t._allData[Number(i)] + "_png"
      }).to({
          scaleX: 1,
          x: o[0]
      }, 200).wait(500).call(function() {
          e.visible = !1
      })
  }
  ,
  t.prototype.onNoticeDialog = function() {
      this.noticeDialog.parent ? this.noticeDialog.parent.removeChild(this.noticeDialog) : (this.addChild(this.noticeDialog),
      this.noticeDialog.setCloseFun(this.onCloseHelp, this),
      this.noticeDialog.x = 0,
      this.noticeDialog.y = this.stage.stageHeight - this.noticeDialog.height,
      this._timer.stop())
  }
  ,
  t.prototype.onCloseHelp = function() {
      this._timer.start()
  }
  ,
  t.prototype.onRewardDialog = function(e) {
      if (void 0 === e && (e = !0),
      !this.rewardDialog.parent) {
          this.addChild(this.rewardDialog),
          this.rewardDialog.x = 0,
          this.rewardDialog.y = this.stage.stageHeight - this.rewardDialog.height,
          this.rewardDialog.alpha = 0,
          egret.Tween.get(this.rewardDialog).to({
              alpha: 1
          }, 500),
          this._timer.stop();
          var t = this._count
            , n = this._currData;
          t = Math.ceil(this._count / (2 * n.length * .5) * .6 + (this._maxTimer - this._timerCount) / (.5 * this._maxTimer) * 100 * .4),
          this._maxCount = t,
          this.count_0.text = "0";
          for (var i = [], o = 0; o < n.length; o++)
              i.push(this._gameType + 1 + "_" + n[o]);
          SoundManager.instance.isMusicOn = !1,
          this.rewardDialog.showInfo(t, this._levelCount + 1, e, this.onGameStart, this.onGameRestart, this, e ? i : null)
      }
  }
  ,
  t.prototype.onGameStart = function(e) {
      void 0 === e && (e = !1),
      e || (this._levelCount += 1),
      this._levelCount >= this.total_levels ? (this._levelCount = 0,
      this.showGameEnd()) : this.onGameReset()
  }
  ,
  t.prototype.showGameEnd = function() {
      null == this.gameEndView && (this.gameEndView = new GameEndView),
      this.addChild(this.gameEndView),
      this.gameEndView.show(this.replayGame, this)
  }
  ,
  t.prototype.replayGame = function() {
      this._levelCount = 0,
      this.onGameReset()
  }
  ,
  t.prototype.onGameRestart = function() {
      this.onGameReset()
  }
  ,
  t.prototype.onGameOver = function() {}
  ,
  t.prototype.register = function(e) {
      this.sceneManager = e
  }
  ,
  t
}(eui.Component);
__reflect(GameStage.prototype, "GameStage");
var GlobalData = function() {
  function e() {}
  return e.stageWidth = 1334,
  e.stageHigth = 750,
  e
}();
__reflect(GlobalData.prototype, "GlobalData");
var LoadingTransiMv = function(e) {
  function t(t) {
      var n = e.call(this) || this;
      return n.tipStr = "加载中...",
      n.isPersonJsonLoadingComp = !1,
      n.isPersonPngLoadingComp = !1,
      n.viewManager = t,
      n.skinName = "loadingTransiMv",
      n.addEventListener(egret.Event.ADDED_TO_STAGE, n.onHandleAdded, n),
      n.addEventListener(egret.Event.REMOVED_FROM_STAGE, n.onHandleRemoved, n),
      n
  }
  return __extends(t, e),
  t.prototype.onHandleAdded = function() {
      var e = this;
      this.isPersonJsonLoadingComp = !1,
      this.isPersonPngLoadingComp = !1,
      this.loadingBg = new egret.Bitmap(RES.getRes("loadingBg_jpg")),
      this.addChild(this.loadingBg);
      var t = "loadingMv_json"
        , n = "loadingMv_png"
        , i = RES.getRes(t)
        , o = RES.getRes(n);
      if (i && o) {
          var r = new egret.MovieClipDataFactory(i,o);
          this.loadingMv = new egret.MovieClip(r.generateMovieClipData("movie")),
          this.loadingMv.gotoAndPlay("play", -1),
          this.addChild(this.loadingMv),
          this.loadingMv.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
          var s = '<e:Skin class="skins.ProgressBarSkin" minWidth="30" minHeight="18" xmlns:e="http://ns.egret.com/eui">\n            <e:Image source="progress_bar_bg_png" scale9Grid="1,1,4,4" width="100%"\n                    height="100%" verticalCenter="0"/>\n            <e:Image id="thumb" height="100%" width="100%" source="progress_bar_thumb_png"/>\n            <e:Label id="labelDisplay" textAlign="center" verticalAlign="middle"\n                    size="15" fontFamily="Tahoma" textColor="0xFFFFFF"\n                    horizontalCenter="0" verticalCenter="0"/>\n        </e:Skin>';
          this.progress = new eui.ProgressBar,
          this.progress.skinName = s,
          this.progress.x = 400,
          this.progress.y = 621,
          this.progress.labelDisplay.size = 4,
          this.progress.labelDisplay.fontFamily = "Microsoft YaHei",
          this.progress.labelFunction = function(t, n) {
              return e.tipStr
          }
          ,
          this.addChild(this.progress)
      }
  }
  ,
  t.prototype.onLoadPersonMv = function() {
      var e = this;
      if (this.isPersonJsonLoadingComp && this.isPersonPngLoadingComp) {
          var t = new egret.MovieClipDataFactory(this.personJsonData,this.personPngData);
          this.loadingMv = new egret.MovieClip(t.generateMovieClipData("movie")),
          this.loadingMv.gotoAndPlay("play", -1),
          this.addChild(this.loadingMv),
          this.loadingMv.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
          var n = '<e:Skin class="skins.ProgressBarSkin" minWidth="30" minHeight="18" xmlns:e="http://ns.egret.com/eui">\n            <e:Image source="progress_bar_bg_png" scale9Grid="1,1,4,4" width="100%"\n                    height="100%" verticalCenter="0"/>\n            <e:Image id="thumb" height="100%" width="100%" source="progress_bar_thumb_png"/>\n            <e:Label id="labelDisplay" textAlign="center" verticalAlign="middle"\n                    size="15" fontFamily="Tahoma" textColor="0xFFFFFF"\n                    horizontalCenter="0" verticalCenter="0"/>\n        </e:Skin>';
          this.progress = new eui.ProgressBar,
          this.progress.skinName = n,
          this.progress.x = 400,
          this.progress.y = 621,
          this.progress.labelDisplay.size = 4,
          this.progress.labelDisplay.fontFamily = "Microsoft YaHei",
          this.progress.labelFunction = function(t, n) {
              return e.tipStr
          }
          ,
          this.addChild(this.progress)
      }
  }
  ,
  t.prototype.onHandleRemoved = function() {}
  ,
  t.prototype.register = function(e) {
      this.viewManager = e
  }
  ,
  t.prototype.updateNextScene = function(e) {
      this._nextScene = e
  }
  ,
  t.prototype.onComplete = function(e) {
      var t = new SceneEvent(SceneEvent.SCENE_EVENT);
      t.nextSceneType = SceneEvent.GAME,
      t.nextScene = this._nextScene,
      this.viewManager.dispatchEvent(t)
  }
  ,
  t.prototype.setProgress = function(e, t) {
      this.progress.maximum = t,
      this.progress.value = e
  }
  ,
  t
}(eui.Component);
__reflect(LoadingTransiMv.prototype, "LoadingTransiMv");
var PlayVideo = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t._videoContainer = document.getElementById("videoContainer"),
      t._videoContent = document.getElementById("videoContent"),
      t._canvas = document.getElementsByTagName("canvas")[0],
      t._ctx = t._canvas.getContext("2d"),
      t
  }
  return __extends(t, e),
  t.prototype.init = function() {}
  ,
  t.prototype.updateVideoSrc = function(e) {
      this._videoContent.src = e
  }
  ,
  t.prototype.updateNextSceneInfo = function(e, t) {
      this._nextScene = e,
      this._nextSceneType = t
  }
  ,
  t.prototype.play = function() {
      return this._videoContent.currentTime > 0 && this._videoContent.currentTime < this._videoContent.duration ? void this.resume() : void this.playVideo()
  }
  ,
  t.prototype.playVideo = function() {
      var e = this
        , t = function() {
          e._videoContainer.style.display = "block",
          e._videoContent.style.display = "block",
          e._videoContent.removeEventListener("canplay", t, !1);
          var n = new SceneEvent(SceneEvent.SCENE_EVENT);
          n.nextSceneType = SceneEvent.VIDEO_READY_TO_PLAY,
          e._control.dispatchEvent(n)
      };
      this._videoContent.addEventListener("canplay", t, !1),
      this._videoContent.play(),
      this._videoContent.onended = function() {
          e.videoPlayCompleted()
      }
      ,
      this.startVideoCheck()
  }
  ,
  t.prototype.startVideoCheck = function() {
      null == this._videoTimer && (this._videoTimer = new egret.Timer(1e3,0),
      this._videoTimer.addEventListener(egret.TimerEvent.TIMER, this.checkVideo, this)),
      this._videoTimer.reset(),
      this._videoTimer.start()
  }
  ,
  t.prototype.checkVideo = function(e) {
      this._videoContent.currentTime >= this._videoContent.duration && (this._videoContent.pause(),
      this.videoPlayCompleted())
  }
  ,
  t.prototype.stopCheckVideo = function() {
      this._videoTimer.stop()
  }
  ,
  t.prototype.videoDisplayNone = function() {
      this._videoContainer.style.display = "none",
      this._videoContent.style.display = "none"
  }
  ,
  t.prototype.videoPlayCompleted = function() {
      this.stopCheckVideo();
      var e = new SceneEvent(SceneEvent.SCENE_EVENT);
      e.nextScene = this._nextScene,
      e.data = this._src,
      e.nextSceneType = this._nextSceneType,
      this._control.dispatchEvent(e)
  }
  ,
  t.prototype.register = function(e) {
      this._control = e
  }
  ,
  t.prototype.stop = function() {
      this._videoContent.pause(),
      this._videoContent.currentTime = 0
  }
  ,
  t.prototype.pause = function() {
      this._videoContent.pause()
  }
  ,
  t.prototype.resume = function() {
      this._videoContent.play()
  }
  ,
  t
}(egret.DisplayObjectContainer);
__reflect(PlayVideo.prototype, "PlayVideo");
var SceneEvent = function(e) {
  function t(t, n, i, o) {
      return e.call(this, t, n, i, o) || this
  }
  return __extends(t, e),
  t.SCENE_EVENT = "SCENE_EVENT",
  t.VIDEO = "VIDEO",
  t.GAME = "GAME",
  t.LOADING = "LOADING",
  t.VIDEO_COMPLETED = "VIDEO_COMPLETED",
  t.VIDEO_READY_TO_PLAY = "VIDEO_READY_TO_PLAY",
  t.GAME_COMPLETED = "GAME_COMPLETED",
  t.SCENE_COMPLETED = "SCENE_COMPLETED",
  t.VIDEO_IMPORT = "resource/mp/qinqin.mp4",
  t.SCENE_VIDEO_START = "resource/assets/Video/video-start.mp4",
  t.SCENE_GAME_STAGE = "SCENE_GAME_STAGE",
  t.SCENE_ONE_GAME_TWO = "SCENE_ONE_GAME_TWO",
  t.SCENE_ONE_GAME_THREE = "SCENE_ONE_GAME_THREE",
  t.LOADING_COMPLETED = "LOADING_COMPLETED",
  t
}(egret.Event);
__reflect(SceneEvent.prototype, "SceneEvent");
var SceneManager = function(e) {
  function t() {
      return e.call(this) || this
  }
  return __extends(t, e),
  Object.defineProperty(t.prototype, "rootStage", {
      set: function(e) {
          this._rootStage = e
      },
      enumerable: !0,
      configurable: !0
  }),
  t.prototype.start = function() {
      this.videoPlayer = new PlayVideo,
      this.videoPlayer.register(this),
      this.addListeners(),
      this.loadingTrasinMv = new LoadingTransiMv,
      this.loadingTrasinMv.register(this),
      RES.loadGroup("preload"),
      this.loadingTrasinMv.updateNextScene(SceneEvent.SCENE_GAME_STAGE)
  }
  ,
  t.prototype.addListeners = function() {
      this.addEventListener(SceneEvent.SCENE_EVENT, this.onChangeScene, this)
  }
  ,
  t.prototype.onChangeScene = function(e) {
      switch (e.nextSceneType) {
      case SceneEvent.GAME:
          this.onGameScene(e);
          break;
      case SceneEvent.VIDEO:
          this.onVideoScene(e);
          break;
      case SceneEvent.LOADING:
          this.onLoading(e);
          break;
      case SceneEvent.LOADING_COMPLETED:
          this.onLoadingGroupCompleted();
          break;
      case SceneEvent.SCENE_COMPLETED:
          this.onSceneCompleted();
          break;
      case SceneEvent.VIDEO_READY_TO_PLAY:
          this.onVideoReady()
      }
  }
  ,
  t.prototype.onGameScene = function(e) {
      switch (e.nextScene) {
      case SceneEvent.SCENE_GAME_STAGE:
          this.gameStage = new GameStage,
          this.gameStage.register(this),
          this._rootStage.addChild(new egret.Bitmap(RES.getRes("gameStartLoadingBg_png"))),
          egret.setTimeout(function() {
              this._rootStage.addChild(this.gameStage)
          }, this, 2e3)
      }
      this.loadingTrasinMv && this.loadingTrasinMv.parent && this._rootStage.removeChild(this.loadingTrasinMv)
  }
  ,
  t.prototype.onVideoScene = function(e) {
      switch (e.nextScene) {
      case SceneEvent.VIDEO_IMPORT:
      }
      this.videoPlayer.play()
  }
  ,
  t.prototype.onLoading = function(e) {
      this.loadingTrasinMv = new LoadingTransiMv,
      this.loadingTrasinMv.register(this),
      RES.loadGroup("loading"),
      this.loadingTrasinMv.updateNextScene(e.nextScene)
  }
  ,
  t.prototype.onLoadingGroupCompleted = function() {
      this.videoPlayer.videoDisplayNone(),
      RES.loadGroup("preload")
  }
  ,
  t.prototype.loadingComplete = function() {
      this.loadingTrasinMv.onComplete()
  }
  ,
  t.prototype.setProgress = function(e) {}
  ,
  t.prototype.onSceneCompleted = function() {
      document.getElementById("lastScene").style.display = "block"
  }
  ,
  t.prototype.onVideoReady = function() {
      this._rootStage.removeChildren()
  }
  ,
  t
}(egret.DisplayObjectContainer);
__reflect(SceneManager.prototype, "SceneManager");
var CutImgTool = function() {
  function e() {}
  return e.cutTile = function(e, t, n, i, o, r, s) {
      for (var a = new egret.Rectangle, l = 0, h = [], c = 0; t > c; c++)
          for (var u = 0; n > u; u++) {
              if (!(c * n + u >= i && o >= l))
                  return h;
              var p = new egret.RenderTexture;
              if (a.x = u * r,
              a.y = c * s,
              a.width = r,
              a.height = s,
              0 == p.drawToTexture(e, a))
                  return console.error("CutImgTool >> cut error"),
                  null;
              h.push(p),
              l++
          }
      return h
  }
  ,
  e
}();
__reflect(CutImgTool.prototype, "CutImgTool");
var DateUtils = function() {
  function e() {}
  return e.formatTime = function(e, t, n) {
      void 0 === t && (t = !0),
      void 0 === n && (n = ":");
      var i = Math.floor(e / 3600)
        , o = Math.floor(e % 3600 / 60)
        , r = e % 60
        , s = i.toString()
        , a = o.toString()
        , l = r.toString();
      return 10 > i && (s = "0" + i),
      10 > o && (a = "0" + o),
      10 > r && (l = "0" + r),
      t ? s + n + a + n + l : a + n + l
  }
  ,
  e.getDateDiff = function(t, n) {
      var i = e.getDateDiffArr(t, n)
        , o = "";
      return i[0] > 0 && (o += i[0] + "天"),
      i[1] > 0 && (o += i[1] + "小时"),
      i[2] > 0 && (o += i[2] + "分"),
      i[3] > 0 && (o += i[3] + "秒"),
      o
  }
  ,
  e.getDateDiffArr = function(e, t) {
      var n = Math.abs(t - e)
        , i = Math.floor(n / 864e5)
        , o = n % 864e5
        , r = Math.floor(o / 36e5)
        , s = o % 36e5
        , a = Math.floor(s / 6e4)
        , l = s % 6e4
        , h = Math.round(l / 1e3);
      return [i, r, a, h]
  }
  ,
  e.dateFormat = function(e, t) {
      void 0 === t && (t = "yyyy-MM-dd hh:mm:ss");
      var n = {
          "M+": e.getMonth() + 1,
          "d+": e.getDate(),
          "h+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (var i in n)
          new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
      return t
  }
  ,
  e
}();
__reflect(DateUtils.prototype, "DateUtils");
var DEvent = function(e) {
  function t(t, n, i, o) {
      void 0 === n && (n = null),
      void 0 === i && (i = !1),
      void 0 === o && (o = !1);
      var r = e.call(this, t, i, o) || this;
      return r.data = n,
      r
  }
  return __extends(t, e),
  t
}(egret.Event);
__reflect(DEvent.prototype, "DEvent");
var GameTool = function() {
  function e() {}
  return e.resetViewScale = function(e) {
      egret.Tween.removeTweens(e),
      e.scaleX = e.scaleY = 1,
      e.x = e.y = 0,
      e.showEffect = !1
  }
  ,
  e.setViewScaleEffect = function(e) {
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0;
      var t = e.x
        , n = e.y
        , i = e.x - (1.2 * e.width - e.width) / 2
        , o = e.y - (1.2 * e.height - e.height) / 2;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          scaleX: 1.2,
          scaleY: 1.2,
          x: i,
          y: o
      }, 1e3).to({
          scaleX: 1,
          scaleY: 1,
          x: t,
          y: n
      }, 1e3).call(function() {})
  }
  ,
  e.onHitTest = function(e, t) {
      return e.x + e.width > t.x && t.x + t.width > e.x && e.y + e.height > t.y && t.y + t.height > e.y ? !0 : !1
  }
  ,
  e.setViewWaitEffect = function(e, t) {
      void 0 === t && (t = 1.05),
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0,
      e.startX || (e.startX = e.x,
      e.startY = e.y,
      e.nextX = e.x - (e.width * t - e.width) / 2,
      e.nextY = e.y - (e.height * t - e.height) / 2,
      e.next1X = e.x - (.9 * e.width - e.width) / 2,
      e.next1Y = e.y - (.9 * e.height - e.height) / 2);
      var n = e.x
        , i = e.y
        , o = e.nextX
        , r = e.nextY
        , s = e.next1X
        , a = e.next1Y;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          scaleX: t,
          scaleY: t,
          x: o,
          y: r
      }, 500).to({
          scaleX: .9,
          scaleY: .9,
          x: s,
          y: a
      }, 1e3).to({
          scaleX: 1,
          scaleY: 1,
          x: n,
          y: i
      }, 500)
  }
  ,
  e.stopViewWaitEffect = function(e) {
      egret.Tween.removeTweens(e),
      e.scaleX = e.scaleY = 1,
      e.filters = [],
      e.startX && (e.x = e.startX),
      e.startY && (e.y = e.startY)
  }
  ,
  e.setViewWaitEffect1 = function(e) {
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0;
      var t = e.x
        , n = e.y
        , i = e.x - (1.1 * e.width - e.width) / 2
        , o = e.y - (1.1 * e.height - e.height) / 2
        , r = e.x - (.9 * e.width - e.width) / 2
        , s = e.y - (.9 * e.height - e.height) / 2;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          scaleX: 1.1,
          scaleY: 1.1,
          alpha: .5,
          x: i,
          y: o
      }, 500).to({
          scaleX: .9,
          scaleY: .9,
          alpha: .7,
          x: r,
          y: s
      }, 1e3).to({
          scaleX: 1,
          scaleY: 1,
          alpha: 1,
          x: t,
          y: n
      }, 500)
  }
  ,
  e.setViewWaitEffect2 = function(e, t, n) {
      void 0 === t && (t = !0),
      void 0 === n && (n = 100),
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0;
      var i = e.x
        , o = e.y
        , r = t ? i : i + n
        , s = t ? o + n : o
        , a = t ? i : i - n
        , l = t ? o - n : o;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          x: r,
          y: s
      }, 1500).to({
          x: a,
          y: l
      }, 3e3).to({
          x: i,
          y: o
      }, 1500)
  }
  ,
  e.setViewWaitEffect3 = function(e, t, n) {
      void 0 === t && (t = !0),
      void 0 === n && (n = 100),
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0;
      var i = e.x
        , o = e.y
        , r = t ? i : i + n
        , s = t ? o + n : o
        , a = t ? i : i - n
        , l = t ? o - n : o;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          x: r,
          alpha: 1,
          y: s
      }, 1500).to({
          x: a,
          alpha: .5,
          y: l
      }, 3e3).to({
          x: i,
          alpha: 1,
          y: o
      }, 1500)
  }
  ,
  e.setViewWaitEffect4 = function(e, t, n) {
      void 0 === t && (t = !0),
      void 0 === n && (n = 100),
      e.scaleX = e.scaleY = 1,
      e.showEffect = !0;
      var i = e.x
        , o = e.y
        , r = t ? i : i + n
        , s = t ? o + n : o
        , a = t ? i : i - n
        , l = t ? o - n : o;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          x: r,
          alpha: 1,
          y: s
      }, 1500).to({
          x: a,
          alpha: .5,
          y: l
      }, 3e3).to({
          x: i,
          alpha: 1,
          y: o
      }, 1500)
  }
  ,
  e.setViewWaitGlowEffect = function(t, n) {
      void 0 === n && (n = 16776960);
      var i = 200;
      egret.Tween.get(t, {
          loop: !1
      }).wait(i).call(function() {
          e.setViewGlowFilter(t, 16776960, .5, 5, 5, 1)
      }, t).wait(i).call(function() {
          e.setViewGlowFilter(t, 16776960, .6, 7, 7, 2)
      }, t).wait(i).call(function() {
          e.setViewGlowFilter(t, 16776960, .9, 11, 11, 4)
      }, t).wait(i).call(function() {
          e.setViewGlowFilter(t, 16776960, .7, 16, 16, 2)
      }, t).wait(i).call(function() {
          t.filters = []
      }, t)
  }
  ,
  e.setMoveToEffect = function(e, t, n, i) {
      void 0 === n && (n = null),
      void 0 === i && (i = null);
      var o = new egret.Point(e.x,e.y);
      egret.Tween.get(e).to({
          x: t.x - 10,
          y: t.y - 20
      }, 500).call(function() {
          e.visible = !1,
          e.x = o.x,
          e.y = o.y,
          e.scaleX = e.scaleY = 1,
          i && i.call(n)
      })
  }
  ,
  e.setSelectEffect = function(t, n) {
      n ? e.setViewGlowFilter(t, 16776960, 1, 20, 20, 3) : t.filters = []
  }
  ,
  e.setScaleYEffect = function(e) {}
  ,
  e.setSelectEffect1 = function(t, n) {
      e.stopViewWaitEffect(t),
      n && (t.startX || (t.startX = t.x,
      t.startY = t.y,
      t.nextX = t.x - (1.2 * t.width - t.width) / 2,
      t.nextY = t.y - (1.2 * t.height - t.height) / 2,
      t.next1X = t.x - (.9 * t.width - t.width) / 2,
      t.next1Y = t.y - (.9 * t.height - t.height) / 2),
      t.scaleX = t.scaleY = 1.2,
      t.x = t.nextX,
      t.y = t.nextY)
  }
  ,
  e.setDownEffect = function(e) {
      egret.Tween.removeTweens(e),
      e.startX || (e.startX = e.x,
      e.startY = e.y,
      e.nextX = e.x - (1.2 * e.width - e.width) / 2,
      e.nextY = e.y - (1.2 * e.height - e.height) / 2,
      e.next1X = e.x - (.9 * e.width - e.width) / 2,
      e.next1Y = e.y - (.9 * e.height - e.height) / 2),
      e.next1X && egret.Tween.get(e).to({
          x: e.next1X,
          y: e.next1Y,
          scaleX: .9,
          scaleY: .9
      }, 100)
  }
  ,
  e.setUpEffect = function(t) {
      e.stopViewWaitEffect(t)
  }
  ,
  e.setViewGlowFilter = function(e, t, n, i, o, r, s, a, l) {
      void 0 === t && (t = 3394815),
      void 0 === n && (n = 1),
      void 0 === i && (i = 35),
      void 0 === o && (o = 35),
      void 0 === r && (r = 2),
      void 0 === s && (s = 3),
      void 0 === a && (a = !1),
      void 0 === l && (l = !1);
      var h = new egret.GlowFilter(t,n,i,o,r,s,a,l);
      e.filters = [h]
  }
  ,
  e.setViewColorFilter = function(t, n) {
      void 0 === n && (n = e.HUI_colorMatrix);
      var i = new egret.ColorMatrixFilter(n);
      t.filters = [i]
  }
  ,
  e.createBitmapByName = function(e) {
      var t = new egret.Bitmap
        , n = RES.getRes(e);
      return t.texture = n,
      t
  }
  ,
  e.createMovieClipByName = function(e) {
      var t = new egret.MovieClip
        , n = RES.getRes(e + "_json")
        , i = RES.getRes(e + "_png")
        , o = new egret.MovieClipDataFactory(n,i);
      return t = new egret.MovieClip(o.generateMovieClipData(e))
  }
  ,
  e.HUI_colorMatrix = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0],
  e
}();
__reflect(GameTool.prototype, "GameTool");
var G;
!function(e) {
  e.playerEffectOnce = function(e, t, n) {
      void 0 === n && (n = 12);
      var i = GameTool.createMovieClipByName(e);
      t.addChild(i),
      i.frameRate = n,
      i.gotoAndPlay(1),
      i.once(egret.Event.COMPLETE, function(e) {
          var t = e.currentTarget;
          t.parent && t.parent.removeChild(t)
      }, i)
  }
  ,
  e.playerEffectOnce1 = function(e, t, n, i) {
      void 0 === n && (n = 1),
      void 0 === i && (i = 12);
      var o = GameTool.createMovieClipByName(e);
      t.addChild(o),
      o.frameRate = i,
      o.play(n),
      o.once(egret.Event.COMPLETE, function(e) {
          var t = e.currentTarget;
          t.parent && t.parent.removeChild(t)
      }, o)
  }
  ,
  e.createEffect = function(e, t, n) {
      void 0 === n && (n = 12);
      var i = GameTool.createMovieClipByName(e);
      return t.addChild(i),
      i.frameRate = n,
      i.gotoAndStop(1),
      i
  }
  ,
  e.setAllViewClickAction = function(e, t, n, i) {
      void 0 === i && (i = !0);
      for (var o = 0; o < t.length; o++) {
          var r = e[t[o]];
          r.name = t[o],
          r.onBeginEvent = function(e) {
              i && GameTool.setDownEffect(e.currentTarget)
          }
          ,
          r.onEndEvent = function(t) {
              i && GameTool.setUpEffect(t.currentTarget),
              n.call(e, t)
          }
          ,
          r.addEventListener(egret.TouchEvent.TOUCH_BEGIN, r.onBeginEvent, e),
          r.addEventListener(egret.TouchEvent.TOUCH_END, r.onEndEvent, e)
      }
  }
  ,
  e.removerAllViewClickAction = function(e, t, n) {
      for (var i = 0; i < t.length; i++) {
          var o = e[t[i]];
          o.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, o.onBeginEvent, e),
          o.removeEventListener(egret.TouchEvent.TOUCH_END, o.onEndEvent, e)
      }
  }
  ,
  e.getAllViewPoints = function(e, t) {
      for (var n = [], i = 0; i < t.length; i++) {
          var o = new egret.Point(e[t[i]].x,e[t[i]].y);
          n.push(o)
      }
      return n
  }
  ,
  e.resetAllView = function(e, t, n, i, o, r) {
      void 0 === n && (n = null),
      void 0 === i && (i = !0),
      void 0 === o && (o = 1),
      void 0 === r && (r = !0);
      for (var s = 0; s < t.length; s++)
          n && (e[t[s]].x = n[s].x,
          e[t[s]].x = n[s].x),
          e[t[s]].visible = i,
          e[t[s]].alpha = o,
          e[t[s]].touchEnabled = r,
          e[t[s]].touchChildren = r
  }
}(G || (G = {}));
var SoundManager = function(e) {
  function t() {
      var t = e.call(this) || this;
      return t._isMusicOn = !0,
      t._isSoundOn = !0,
      t._bgmVoice = .5,
      t._currentSoundChannel = null,
      t._currentSoundName = "",
      t._soundVoice = .5,
      t
  }
  return __extends(t, e),
  Object.defineProperty(t, "instance", {
      get: function() {
          return null == this._instance && (this._instance = new t),
          this._instance
      },
      enumerable: !0,
      configurable: !0
  }),
  Object.defineProperty(t.prototype, "musicVolume", {
      get: function() {
          return this._bgmVoice
      },
      set: function(e) {
          this._bgmVoice = e,
          this._bgSoundChannel && (this._bgSoundChannel.volume = e)
      },
      enumerable: !0,
      configurable: !0
  }),
  Object.defineProperty(t.prototype, "soundVolume", {
      get: function() {
          return this._soundVoice
      },
      set: function(e) {
          this._soundVoice = e
      },
      enumerable: !0,
      configurable: !0
  }),
  t.prototype.playMusic = function(e, t) {
      void 0 === t && (t = .5),
      this.isMusicOn && (this.stopMusic(),
      this._bgmVoice = t,
      this._bgSound = RES.getRes(e),
      this._bgSound.type = egret.Sound.MUSIC,
      this._bgSound && (this._bgSoundChannel = this._bgSound.play(0, 999),
      this._bgSoundChannel.volume = this._bgmVoice))
  }
  ,
  Object.defineProperty(t.prototype, "isMusicOn", {
      get: function() {
          return this._isMusicOn
      },
      set: function(e) {
          this._isMusicOn != e && (this._isMusicOn = e,
          this._isMusicOn ? this._bgSoundChannel && (this._bgSoundChannel.volume = this._bgmVoice) : this._bgSoundChannel && (this._bgSoundChannel.volume = 0))
      },
      enumerable: !0,
      configurable: !0
  }),
  Object.defineProperty(t.prototype, "isSoundOn", {
      get: function() {
          return this._isSoundOn
      },
      set: function(e) {
          this._isSoundOn = e
      },
      enumerable: !0,
      configurable: !0
  }),
  t.prototype.playSound = function(e, t) {
      if (void 0 === t && (t = 1),
      this._isSoundOn) {
          this._soundName = e;
          var n = RES.getRes(e);
          null != n && (n.type = egret.Sound.EFFECT,
          this.stopSound(),
          this._currentSoundChannel = n.play(0, t),
          this._currentSoundChannel.volume = this._soundVoice,
          this._currentSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this))
      }
  }
  ,
  t.prototype.onSoundComplete = function(e) {
      this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
      this.dispatchEvent(new DEvent(egret.Event.SOUND_COMPLETE,this._soundName))
  }
  ,
  t.prototype.stopSound = function() {
      null != this._currentSoundChannel && (this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
      this._currentSoundChannel.stop())
  }
  ,
  t.prototype.stopMusic = function() {
      null != this._bgSoundChannel && this._bgSoundChannel.stop()
  }
  ,
  t.ErrorAudio = "wrong_mp3",
  t.RightAudio = "right_mp3",
  t.GameOverAudio = "gameOverBg_mp3",
  t.successAudio = "success_mp3",
  t.failAudio = "fail_mp3",
  t.OverAudio = "wrong_mp3",
  t.bgAudio = "bgMusic_mp3",
  t.preloadAudio = "preloadMusic_mp3",
  t
}(egret.EventDispatcher);
__reflect(SoundManager.prototype, "SoundManager");
var Util = function() {
  function e() {}
  return e.scaleXY = function(e) {
      e.scaleX = e.scaleY = 1;
      var t = e.x
        , n = e.y
        , i = e.x - (1.2 * e.width - e.width) / 2
        , o = e.y - (1.2 * e.height - e.height) / 2;
      egret.Tween.get(e, {
          loop: !0
      }).to({
          scaleX: 1.2,
          scaleY: 1.2,
          x: i,
          y: o
      }, 1e3).to({
          scaleX: 1,
          scaleY: 1,
          x: t,
          y: n
      }, 1e3).call(function() {})
  }
  ,
  e
}();
__reflect(Util.prototype, "Util");
