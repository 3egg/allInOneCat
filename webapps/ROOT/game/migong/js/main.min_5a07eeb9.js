var __reflect =
    (this && this.__reflect) ||
    function(t, e, i) {
      (t.__class__ = e), i ? i.push(e) : (i = [e]), (t.__types__ = t.__types__ ? i.concat(t.__types__) : i);
    },
  __extends =
    (this && this.__extends) ||
    function(t, e) {
      function i() {
        this.constructor = t;
      }
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      (i.prototype = e.prototype), (t.prototype = new i());
    },
  __awaiter =
    (this && this.__awaiter) ||
    function(t, e, i, n) {
      return new (i || (i = Promise))(function(o, r) {
        function s(t) {
          try {
            h(n.next(t));
          } catch (e) {
            r(e);
          }
        }
        function a(t) {
          try {
            h(n['throw'](t));
          } catch (e) {
            r(e);
          }
        }
        function h(t) {
          t.done
            ? o(t.value)
            : new i(function(e) {
                e(t.value);
              }).then(s, a);
        }
        h((n = n.apply(t, e || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function(t, e) {
      function i(t) {
        return function(e) {
          return n([t, e]);
        };
      }
      function n(i) {
        if (o) throw new TypeError('Generator is already executing.');
        for (; h; )
          try {
            if (((o = 1), r && (s = r[2 & i[0] ? 'return' : i[0] ? 'throw' : 'next']) && !(s = s.call(r, i[1])).done))
              return s;
            switch (((r = 0), s && (i = [0, s.value]), i[0])) {
              case 0:
              case 1:
                s = i;
                break;
              case 4:
                return h.label++, { value: i[1], done: !1 };
              case 5:
                h.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = h.ops.pop()), h.trys.pop();
                continue;
              default:
                if (((s = h.trys), !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0]))) {
                  h = 0;
                  continue;
                }
                if (3 === i[0] && (!s || (i[1] > s[0] && i[1] < s[3]))) {
                  h.label = i[1];
                  break;
                }
                if (6 === i[0] && h.label < s[1]) {
                  (h.label = s[1]), (s = i);
                  break;
                }
                if (s && h.label < s[2]) {
                  (h.label = s[2]), h.ops.push(i);
                  break;
                }
                s[2] && h.ops.pop(), h.trys.pop();
                continue;
            }
            i = e.call(t, h);
          } catch (n) {
            (i = [6, n]), (r = 0);
          } finally {
            o = s = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      }
      var o,
        r,
        s,
        a,
        h = {
          label: 0,
          sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          },
          trys: [],
          ops: []
        };
      return (
        (a = { next: i(0), throw: i(1), return: i(2) }),
        'function' == typeof Symbol &&
          (a[Symbol.iterator] = function() {
            return this;
          }),
        a
      );
    },
  GameStage = (function(t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.total_levels = 3),
        (e.times = [60, 90, 120]), // TODO:
        (e.lvs = ['简单', '中等', '困难']),
        (e.tuziPoints = [
          [121, 200],
          [104, 274],
          [127, 224]
        ]),
        (e.tuzi2Points = [
          [120, 204],
          [102, 276],
          [136, 227]
        ]),
        (e.targetPoints = [
          [1235, 620],
          [1235, 640],
          [60, 620]
        ]),
        (e.isPause = !1),
        (e.totalScore = 100),
        (e.speed = 6),
        (e.factor = 0.5),
        (e.run = 0),
        (e.totalAmount = 0),
        (e.skinName = 'GameStageSkin'),
        e
      );
    }
    return (
      __extends(e, t),
      (e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
          (this.noticeDialog = new NoticeDialog()),
          (this.rewardDialog = new NoticeDialog1()),
          G.setAllViewClickAction(this, ['btn_return', 'btn_sound'], this.onGameAction),
          this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchNodeBegin, this),
          this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this),
          this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchNodeEnd, this),
          (this._timer = new egret.Timer(1e3)),
          this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerComplete, this),
          (this.baozha = new GifPlayer('baozha', 2, 4)),
          this.addChild(this.baozha),
          this.baozha.setCallback(this.goToInitPoint),
          (this.baozha.visible = !1),
          egret.Tween.get(this.tuzi, { loop: !0 })
            .wait(300)
            .call(function() {
              e.tuzi.texture = RES.getRes('tu02_png');
            })
            .wait(300)
            .call(function() {
              e.tuzi.texture = RES.getRes('tu01_png');
            }),
          (this._levelCount = 0),
          (this.zhaqu.alpha = 0),
          (this.line.alpha = 0),
          (this.targetRect.alpha = 0),
          this.gameInit(),
          this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
      }),
      (e.prototype.onTimerComplete = function(t) {
        if (1 != this.isPause) {
          var e = this._maxTimer - (this._timerCount += 1);
          (this.count_1.text = DateUtils.formatTime(e, !1)), 0 == e && this.onRewardDialog(!1);
        }
      }),
      (e.prototype.onGameAction = function(t) {
        switch (t.currentTarget.name) {
          case 'btn_help':
            this.onNoticeDialog();
            break;
          case 'btn_return':
            var e = egret.getOption('home');
            (null == e || '' == e) && (e = '/'), (document.location.href = '../../../menu/index.html'); // TODO:
            break;
          case 'btn_sound':
            (SoundManager.instance.isMusicOn = !SoundManager.instance.isMusicOn),
              (SoundManager.instance.isSoundOn = !SoundManager.instance.isSoundOn),
              SoundManager.instance.isMusicOn
                ? (this.btn_sound.source = 'sound_on_png')
                : (this.btn_sound.source = 'sound_off_png');
        }
      }),
      (e.hitTest = function(t, e) {
        var i = t.getBounds(),
          n = e.getBounds();
        return (i.x = t.x), (i.y = t.y), (n.x = e.x), (n.y = e.y), i.intersects(n);
      }),
      (e.prototype.goToInitPoint = function() {
        (this.baozha.visible = !1),
          (this.tuzi.x = this.tuziPoints[this._levelCount][0]),
          (this.tuzi.y = this.tuziPoints[this._levelCount][1]),
          (this.tuzi2.x = this.tuzi2Points[this._levelCount][0]),
          (this.tuzi2.y = this.tuzi2Points[this._levelCount][1]),
          (this.run = 0);
      }),
      (e.prototype.gameInit = function() {
        (SoundManager.instance.isMusicOn = !0),
          (this.totalScore = 100),
          (this.bg.texture = RES.getRes('migongbg' + (this._levelCount + 1) + '_jpg')),
          (this.line.texture = RES.getRes('migongxianlu' + (this._levelCount + 1) + '_png')),
          (this.zhaqu.texture = RES.getRes('zhaqu' + (this._levelCount + 1) + '_png')),
          (this.tuzi.x = this.tuziPoints[this._levelCount][0]),
          (this.tuzi.y = this.tuziPoints[this._levelCount][1]),
          (this.tuzi2.x = this.tuzi2Points[this._levelCount][0]),
          (this.tuzi2.y = this.tuzi2Points[this._levelCount][1]),
          (this.targetRect.x = this.targetPoints[this._levelCount][0]),
          (this.targetRect.y = this.targetPoints[this._levelCount][1]),
          (this._maxTimer = this.times[this._levelCount]),
          (this.count_1.text = DateUtils.formatTime(this._maxTimer, !1)),
          (this.count_0.text = this.lvs[this._levelCount]),
          (this._timerCount = 0),
          this._timer.stop(),
          this._timer.start(),
          (this.run = 0);
      }),
      (e.prototype.update = function() {
        if (1 == this.run) {
          var t = this.movePoint.subtract(new egret.Point(this.tuzi.x, this.tuzi.y));
          if (t.length < 1) return void (this.run = 0);
          if (
            ((this.tuzi.x += this.dirArrow.x * this.speed),
            (this.tuzi.y += this.dirArrow.y * this.speed),
            (this.tuzi2.x += this.dirArrow.x * this.speed),
            (this.tuzi2.y += this.dirArrow.y * this.speed),
            this.zhaqu.hitTestPoint(this.tuzi2.x + 0.5 * this.tuzi2.width, this.tuzi2.y, !0) ||
              this.zhaqu.hitTestPoint(this.tuzi2.x - 0.5 * this.tuzi2.width, this.tuzi2.y, !0) ||
              this.zhaqu.hitTestPoint(this.tuzi2.x, this.tuzi2.y - 0.5 * this.tuzi2.height, !0) ||
              this.zhaqu.hitTestPoint(this.tuzi2.x, this.tuzi2.y + 0.5 * this.tuzi2.height, !0))
          )
            return (
              (this.run = 3),
              (this.baozha.x = this.tuzi2.x - 50),
              (this.baozha.y = this.tuzi2.y - 50),
              (this.baozha.visible = !0),
              this.baozha.play(1),
              SoundManager.instance.playSound('baozha_mp3'),
              (this.totalScore -= 10),
              void (this.totalScore = this.totalAmount < 0 ? 0 : this.totalScore)
            );
          if (
            this.targetRect.hitTestPoint(this.tuzi2.x + 0.5 * this.tuzi2.width, this.tuzi2.y, !0) ||
            this.targetRect.hitTestPoint(this.tuzi2.x - 0.5 * this.tuzi2.width, this.tuzi2.y, !0) ||
            this.targetRect.hitTestPoint(this.tuzi2.x, this.tuzi2.y - 0.5 * this.tuzi2.height, !0) ||
            this.targetRect.hitTestPoint(this.tuzi2.x, this.tuzi2.y + 0.5 * this.tuzi2.height, !0)
          )
            return void this.onRewardDialog();
          this.line.hitTestPoint(this.tuzi2.x + this.tuzi2.width * this.factor, this.tuzi2.y, !0) &&
            ((this.tuzi.x -= this.tuzi2.width * this.factor), (this.tuzi2.x -= this.tuzi2.width * this.factor)),
            this.line.hitTestPoint(this.tuzi2.x - this.tuzi2.width * this.factor, this.tuzi2.y, !0) &&
              ((this.tuzi.x += this.tuzi2.width * this.factor), (this.tuzi2.x += this.tuzi2.width * this.factor)),
            this.line.hitTestPoint(this.tuzi2.x, this.tuzi2.y - this.tuzi2.height * this.factor, !0) &&
              ((this.tuzi.y += this.tuzi2.height * this.factor), (this.tuzi2.y += this.tuzi2.height * this.factor)),
            this.line.hitTestPoint(this.tuzi2.x, this.tuzi2.y + this.tuzi2.height * this.factor, !0) &&
              ((this.tuzi.y -= this.tuzi2.height * this.factor), (this.tuzi2.y -= this.tuzi2.height * this.factor));
        }
      }),
      (e.prototype.onTouchNodeBegin = function(t) {
        t.stageY < 110 ||
          (0 == this.run &&
            ((this.run = 1),
            (this.movePoint = new egret.Point(t.stageX, t.stageY)),
            (this.dirArrow = this.movePoint.subtract(new egret.Point(this.tuzi.x, this.tuzi.y))),
            this.dirArrow.normalize(1)));
      }),
      (e.prototype.onMove = function(t) {
        t.stageY < 110 ||
          (1 == this.run &&
            ((this.movePoint = new egret.Point(t.stageX, t.stageY)),
            (this.dirArrow = this.movePoint.subtract(new egret.Point(this.tuzi.x, this.tuzi.y))),
            this.dirArrow.normalize(1)));
      }),
      (e.prototype.onTouchNodeEnd = function(t) {
        1 == this.run && ((this.run = 0), (this.dirArrow = new egret.Point(0, 0)));
      }),
      (e.prototype.onGameReset = function() {}),
      (e.prototype.onNoticeDialog = function() {
        this.noticeDialog.parent
          ? this.noticeDialog.parent.removeChild(this.noticeDialog)
          : (this.addChild(this.noticeDialog),
            (this.isPause = !0),
            (this.noticeDialog.x = 0),
            (this.noticeDialog.y = this.stage.stageHeight - this.noticeDialog.height));
      }),
      (e.prototype.onRewardDialog = function(t) {
        void 0 === t && (t = !0),
          (this.run = 2),
          this.rewardDialog.parent ||
            (this.addChild(this.rewardDialog),
            (this.rewardDialog.x = 0),
            (this.rewardDialog.y = this.stage.stageHeight - this.rewardDialog.height),
            (this.rewardDialog.alpha = 0),
            egret.Tween.get(this.rewardDialog).to({ alpha: 1 }, 500),
            this._timer.stop(),
            0 == t && (this.totalScore = 0),
            (SoundManager.instance.isMusicOn = !1),
            this.rewardDialog.showInfo(
              this.totalScore,
              this._levelCount + 1,
              t,
              this.onGameStart,
              this.onGameRestart,
              this,
              null
            ));
      }),
      (e.prototype.onGameStart = function(t) {
        void 0 === t && (t = !1),
          t || (this._levelCount += 1),
          this._levelCount >= this.total_levels ? ((this._levelCount = 0), this.showGameEnd()) : this.gameInit();
      }),
      (e.prototype.showGameEnd = function() {
        null == this.gameEndView && (this.gameEndView = new GameEndView()),
          this.addChild(this.gameEndView),
          this.gameEndView.show(this.replayGame, this);
      }),
      (e.prototype.replayGame = function() {
        (this._levelCount = 0), SoundManager.instance.playSound('start_mp3'), this.gameInit();
      }),
      (e.prototype.onGameRestart = function() {
        this.gameInit();
      }),
      (e.prototype.onGameOver = function() {}),
      (e.prototype.register = function(t) {
        this.sceneManager = t;
      }),
      e
    );
  })(eui.Component);
__reflect(GameStage.prototype, 'GameStage');
var AssetAdapter = (function() {
  function t() {}
  return (
    (t.prototype.getAsset = function(t, e, i) {
      function n(n) {
        e.call(i, n, t);
      }
      if (RES.hasRes(t)) {
        var o = RES.getRes(t);
        o ? n(o) : RES.getResAsync(t, n, this);
      } else RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_IMAGE);
    }),
    t
  );
})();
__reflect(AssetAdapter.prototype, 'AssetAdapter', ['eui.IAssetAdapter']);
var Main = (function(t) {
  function e() {
    var e = (null !== t && t.apply(this, arguments)) || this;
    return (e.gameStage = new GameStage()), e;
  }
  return (
    __extends(e, t),
    (e.prototype.createChildren = function() {
      t.prototype.createChildren.call(this),
        egret.lifecycle.addLifecycleListener(function(t) {}),
        (egret.lifecycle.onPause = function() {
          egret.ticker.pause();
        }),
        (egret.lifecycle.onResume = function() {
          egret.ticker.resume();
        });
      var e = new AssetAdapter();
      egret.registerImplementation('eui.IAssetAdapter', e),
        egret.registerImplementation('eui.IThemeAdapter', new ThemeAdapter()),
        (GlobalData.stage = this.stage),
        this.runGame()['catch'](function(t) {
          console.log(t);
        });
    }),
    (e.prototype.runGame = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.loadResource()];
            case 1:
              return t.sent(), [2];
          }
        });
      });
    }),
    (e.prototype.loadResource = function() {
      return __awaiter(this, void 0, void 0, function() {
        var t, e;
        return __generator(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 5, , 6]), [4, RES.loadConfig('resource/default.res.json', 'resource/')];
            case 1:
              return i.sent(), [4, this.loadTheme()];
            case 2:
              return i.sent(), [4, RES.loadGroup('loading', 0)];
            case 3:
              return (
                i.sent(),
                (t = new LoadingUI()),
                this.stage.addChild(t),
                t.callBack(this, this.createGameScene),
                [4, RES.loadGroup('preload', 1, t)]
              );
            case 4:
              return i.sent(), SoundManager.instance.playSound(SoundManager.preloadAudio), [3, 6];
            case 5:
              return (e = i.sent()), console.error(e), [3, 6];
            case 6:
              return [2];
          }
        });
      });
    }),
    (e.prototype.loadTheme = function() {
      var t = this;
      return new Promise(function(e, i) {
        var n = new eui.Theme('resource/default.thm.json', t.stage);
        n.addEventListener(
          eui.UIEvent.COMPLETE,
          function() {
            e();
          },
          t
        );
      });
    }),
    (e.prototype.createGameScene = function() {
      (this.gameStage = new GameStage()),
        this.gameStage.register(this),
        this.addChild(this.gameStage),
        SoundManager.instance.playMusic(SoundManager.bgAudio, 0.3);
    }),
    e
  );
})(eui.UILayer);
__reflect(Main.prototype, 'Main');
var DebugPlatform = (function() {
  function t() {}
  return (
    (t.prototype.getUserInfo = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
          return [2, { nickName: 'username' }];
        });
      });
    }),
    (t.prototype.login = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
          return [2];
        });
      });
    }),
    t
  );
})();
__reflect(DebugPlatform.prototype, 'DebugPlatform', ['Platform']),
  window.platform || (window.platform = new DebugPlatform());
var ThemeAdapter = (function() {
  function t() {}
  return (
    (t.prototype.getTheme = function(t, e, i, n) {
      function o(t) {
        e.call(n, t);
      }
      function r(e) {
        e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), i.call(n));
      }
      'undefined' != typeof generateEUI
        ? egret.callLater(function() {
            e.call(n, generateEUI);
          }, this)
        : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null),
          RES.getResByUrl(t, o, this, RES.ResourceItem.TYPE_TEXT));
    }),
    t
  );
})();
__reflect(ThemeAdapter.prototype, 'ThemeAdapter', ['eui.IThemeAdapter']);
var AudioPlayer = (function(t) {
  function e(e, i) {
    void 0 === i && (i = !0);
    var n = t.call(this) || this;
    return (
      (n._name = null),
      (n._isEffect = null),
      (n.channel = null),
      (n._isPlaying = !1),
      (n._name = e),
      (n._isEffect = i),
      n.init(),
      n
    );
  }
  return (
    __extends(e, t),
    (e.prototype.init = function() {
      (this.sound = RES.getRes(this._name)),
        this._isEffect ? (this.sound.type = egret.Sound.EFFECT) : (this.sound.type = egret.Sound.MUSIC);
    }),
    (e.prototype.getPlayState = function() {
      return this._isPlaying;
    }),
    Object.defineProperty(e.prototype, 'isPlaying', {
      get: function() {
        return this._isPlaying;
      },
      enumerable: !0,
      configurable: !0
    }),
    (e.prototype.play = function(t) {
      void 0 === t && (t = 0),
        this._isPlaying ||
          ((this.channel = this.sound.play(0, t)),
          this.channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this),
          (this._isPlaying = !0));
    }),
    (e.prototype.onSoundCompl = function() {
      this.channel &&
        (this.channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this),
        this.dispatchEventWith(egret.Event.SOUND_COMPLETE),
        (this._isPlaying = !1));
    }),
    (e.prototype.stop = function() {
      this.channel && (this.channel.stop(), (this.channel.position = 0), (this.channel = null), (this._isPlaying = !1));
    }),
    (e.prototype.reStart = function() {}),
    (e.prototype.updateVolume = function(t) {
      var e = 0;
      t >= 0 && 1 >= t ? (e = t) : 0 > t ? (e = 0) : t > 1 && (e = 1), (this.channel.volume = e);
    }),
    e
  );
})(egret.DisplayObjectContainer);
__reflect(AudioPlayer.prototype, 'AudioPlayer');
var BitmapMovie = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (e.textureList = []), (e.curFrame = 0), (e._delay = Math.floor(1e3 / 24)), (e.loop = 0), e;
  }
  return (
    __extends(e, t),
    (e.prototype.initByBitmap = function(t, e, i, n, o, r, s) {
      (this.textureList = CutImgTool.cutTile(t, e, i, n, o, r, s)),
        this.textureList &&
          this.textureList.length > 0 &&
          ((this.texture = this.textureList[0]), (this.curFrame = 0), (this.totalFrame = this.textureList.length));
    }),
    (e.prototype.initByTile = function(t, e, i) {
      this.textureList.length = 0;
      for (var n = 1; i > n; n++) this.textureList[n - 1] = RES.getRes(t + this.getIndex(n) + '_' + e);
      this.textureList.length > 0 &&
        ((this.texture = this.textureList[0]), (this.curFrame = 0), (this.totalFrame = this.textureList.length));
    }),
    (e.prototype.play = function(t) {
      void 0 === t && (t = 0), (this.loop = t), this.startTimer();
    }),
    (e.prototype.stop = function() {
      this.stopTimer();
    }),
    (e.prototype.restart = function() {
      this.startTimer();
    }),
    (e.prototype.gotoAndPlay = function(t, e) {
      void 0 === e && (e = 0),
        t <= this.totalFrame
          ? ((this.loop = e), (this.curFrame = t), (this.texture = this.textureList[t - 1]), this.startTimer())
          : console.error('BitmapMovie >> frame超出范围');
    }),
    (e.prototype.gotoAndStop = function(t) {
      t <= this.totalFrame
        ? (this.stopTimer(), (this.curFrame = t), (this.texture = this.textureList[t - 1]))
        : console.error('BitmapMovie >> frame超出范围');
    }),
    (e.prototype.startTimer = function() {
      this.timer || (this.timer = new egret.Timer(this.delay)),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
        this.timer.reset(),
        this.timer.start();
    }),
    (e.prototype.onTimerHandler = function() {
      this.curFrame++,
        this.curFrame <= this.totalFrame
          ? (this.texture = this.textureList[this.curFrame - 1])
          : (this.loop--,
            this.dispatchEvent(new egret.Event(egret.Event.LOOP_COMPLETE)),
            this.loop > 0
              ? ((this.curFrame = 1), (this.texture = this.textureList[this.curFrame - 1]))
              : (this.stopTimer(), this.dispatchEvent(new egret.Event(egret.Event.COMPLETE))));
    }),
    (e.prototype.stopTimer = function() {
      this.timer &&
        (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this), this.timer.stop());
    }),
    Object.defineProperty(e.prototype, 'delay', {
      get: function() {
        return this._delay;
      },
      set: function(t) {
        (this._delay = t), this.timer && (this.timer.delay = t);
      },
      enumerable: !0,
      configurable: !0
    }),
    (e.prototype.getIndex = function(t) {
      return 10 > t ? '000' + t : 100 > t ? '00' + t : 1e3 > t ? '0' + t : void 0;
    }),
    e
  );
})(eui.Image);
__reflect(BitmapMovie.prototype, 'BitmapMovie');
var BtnsGroup = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e.skinName = 'BtnsGroupSkin'),
      e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAdded, e),
      e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoved, e),
      e
    );
  }
  return (
    __extends(e, t),
    (e.prototype.childrenCreated = function() {
      t.prototype.childrenCreated.call(this),
        (this.helpButtonMovie = new ButtonMovie()),
        this.helpButtonMovie.init(this.gameHelpBtn, 'helpStart_png', 'helpEnd_png'),
        (this.restartButttonMovie = new ButtonMovie()),
        this.restartButttonMovie.init(this.gameRestartBtn, 'restartStart_png', 'restartEnd_png');
    }),
    (e.prototype.onAdded = function() {
      this.gameHelpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameHelp, this),
        this.gameRestartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameRestart, this),
        GameTool.setViewWaitEffect(this.gameHelpBtn, 1.15);
    }),
    (e.prototype.onRemoved = function() {
      this.gameHelpBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameHelp, this),
        this.gameRestartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameRestart, this);
    }),
    (e.prototype.onGameHelp = function() {
      GameTool.stopViewWaitEffect(this.gameHelpBtn),
        this.gameStageControl.onNoticeDialog(),
        this.gameStageControl.onGameStart();
    }),
    (e.prototype.onGameOver = function() {
      GameTool.setViewWaitEffect(this.gameRestartBtn, 1.15);
    }),
    (e.prototype.onGameRestart = function() {
      this.gameStageControl.onGameRestart(), GameTool.stopViewWaitEffect(this.gameRestartBtn);
    }),
    (e.prototype.register = function(t) {
      this.gameStageControl = t;
    }),
    e
  );
})(eui.Component);
__reflect(BtnsGroup.prototype, 'BtnsGroup');
var ButtonMovie = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (e._delay = Math.floor(10)), (e.loop = 999), (e.delay = 1e3), e;
  }
  return (
    __extends(e, t),
    (e.prototype.init = function(t, e, i) {
      (this.target = t), (this.currentSourceName = e), (this._up = e), (this._down = i);
    }),
    (e.prototype.startTimer = function() {
      this.timer || (this.timer = new egret.Timer(this.delay)),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
        this.timer.reset(),
        this.timer.start();
    }),
    (e.prototype.stopTimer = function() {
      this.timer && this.timer.stop();
    }),
    (e.prototype.onTimerHandler = function(t) {
      this.currentSourceName == this._up
        ? ((this.currentSourceName = this._down), (this.target.source = this._down))
        : ((this.target.source = this._up), (this.currentSourceName = this._up));
    }),
    e
  );
})(eui.Image);
__reflect(ButtonMovie.prototype, 'ButtonMovie');
var GameEndView = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (e.skinName = 'GameEndSkin'), e;
  }
  return (
    __extends(e, t),
    (e.prototype.childrenCreated = function() {
      t.prototype.childrenCreated.call(this),
        G.setAllViewClickAction(this, ['endBtn', 'restartBtn', 'nextGameBtn'], this.onGameAction);
    }),
    (e.prototype.show = function(t, e) {
      (this._nextCall = t), (this._taget = e);
    }),
    (e.prototype.onGameAction = function(t) {
      switch ((this.onRemove(), t.currentTarget.name)) {
        case 'endBtn':
          var e = egret.getOption('home');
          (null == e || '' == e) && (e = '/'), (document.location.href = e);
          break;
        case 'restartBtn':
          this._nextCall.apply(this._taget);
          break;
        case 'nextGameBtn':
          var e = egret.getOption('home'),
            i = e.lastIndexOf('/'),
            n = e.substring(0, i);
          document.location.href = n + '/fanpai';
      }
    }),
    (e.prototype.onRemove = function() {
      this.parent && this.parent.removeChild(this);
    }),
    e
  );
})(eui.Component);
__reflect(GameEndView.prototype, 'GameEndView');
var NoticeDialog = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e.skinName = 'NewNoticeDialogSkin'),
      e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAdded, e),
      e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoved, e),
      e
    );
  }
  return (
    __extends(e, t),
    (e.prototype.childrenCreated = function() {
      t.prototype.childrenCreated.call(this);
    }),
    (e.prototype.init = function(t, e) {
      void 0 === e && (e = ''), '' != e && (this.noticeDialogText.text = e);
    }),
    (e.prototype.onSoundComp = function() {}),
    (e.prototype.onAdded = function() {
      this.btnGuanBi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRemove, this);
    }),
    (e.prototype.onRemove = function() {
      if (this.parent) {
        var t = this.parent;
        (t.isPause = !1), this.parent.removeChild(this);
      }
    }),
    (e.prototype.onRemoved = function() {
      this.onSoundComp(),
        this.noticeDialogCloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRemove, this);
    }),
    e
  );
})(eui.Component);
__reflect(NoticeDialog.prototype, 'NoticeDialog');
var NoticeDialog1 = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (e.skinName = 'NewNoticeDialog1Skin'), e;
  }
  return (
    __extends(e, t),
    (e.prototype.childrenCreated = function() {
      t.prototype.childrenCreated.call(this),
        G.setAllViewClickAction(this, ['closeBtn', 'nextBtn', 'resetBtn'], this.onGameAction),
        (this._effects = []),
        this._effects.push(GameTool.createMovieClipByName('effect1')),
        this._effects.push(GameTool.createMovieClipByName('effect2'));
    }),
    (e.prototype.showInfo = function(t, e, i, n, o, r, s) {
      void 0 === s && (s = null),
        (this.title_0.text = t.toString()),
        i ? SoundManager.instance.playSound('success_mp3') : SoundManager.instance.playSound('fail_mp3'),
        (this.lose_gp.visible = !i),
        (this.win_gp.visible = i),
        (this._nextCall = n),
        (this._resetCall = o),
        (this._taget = r);
    }),
    (e.prototype.showEffect = function() {
      var t = RES.getRes('iteminfo_json'),
        e = this.icon;
      (e.source = 'item_' + this._currItems[this._currIndex] + '_png'),
        (this.txt_1.text = t[this._currItems[this._currIndex]]),
        (e.alpha = 0),
        (this.txt_1.alpha = 0),
        egret.Tween.get(e).to({ alpha: 1 }, 500),
        egret.Tween.get(this.txt_1).to({ alpha: 1 }, 500),
        (this._currIndex += 1),
        this._currIndex == this._currItems.length && (this._currIndex = 0),
        egret.Tween.get(this)
          .wait(2e3)
          .call(this.showEffect);
    }),
    (e.prototype.onGameAction = function(t) {
      switch (t.currentTarget.name) {
        case 'closeBtn':
          this._resetCall.apply(this._taget);
          break;
        case 'nextBtn':
          this._nextCall.apply(this._taget);
          break;
        case 'resetBtn':
          this._resetCall.apply(this._taget);
      }
      this.onRemove();
    }),
    (e.prototype.onRemove = function() {
      this.parent && (egret.Tween.removeTweens(this), SoundManager.instance.stopSound(), this.parent.removeChild(this));
    }),
    e
  );
})(eui.Component);
__reflect(NoticeDialog1.prototype, 'NoticeDialog1');
var GameControl = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e.gameIsRestart = !0),
      (e.gameIsOver = !1),
      (e._maxSteep = 6),
      (e.skinName = 'GameControlSkin'),
      e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAdded, e),
      e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoved, e),
      e
    );
  }
  return (
    __extends(e, t),
    (e.prototype.childrenCreated = function() {
      t.prototype.childrenCreated.call(this), this.init(), this.resetInit();
    }),
    (e.prototype.onAdded = function() {}),
    (e.prototype.onRemoved = function() {
      SoundManager.instance.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
        G.removerAllViewClickAction(this._actionNames);
    }),
    (e.prototype.gameStart = function() {
      this.gameIsRestart && !this._isAction && ((this.gameIsOver = !1), (this._isAction = !0));
    }),
    (e.prototype.gameRestart = function() {
      this.gameIsOver && (this.gameIsRestart = !0), this.resetInit(), (this._isAction = !0);
    }),
    (e.prototype.init = function() {
      SoundManager.instance.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }),
    (e.prototype.resetInit = function() {
      egret.Tween.removeTweens(this);
    }),
    (e.prototype.onGameAction = function(t) {
      this._isPlayerMove ||
        (this._isAction && this._currSelect && GameTool.setSelectEffect1(this[this._currSelect], !1));
    }),
    (e.prototype.playOverEffect = function() {
      var t = this;
      egret.Tween.get(this)
        .wait(500)
        .call(function() {
          t.stage.addChild(t.mask_img),
            t.stage.addChild(t.effect_gp),
            (t.mask_img.visible = !0),
            G.playerEffectOnce('wancheng_Mc', t.effect_gp, 24),
            (t.gameIsOver = !0),
            SoundManager.instance.playSound(SoundManager.GameOverAudio);
        });
    }),
    (e.prototype.register = function(t) {
      this.gameStageControl = t;
    }),
    (e.prototype.onSoundComplete = function(t) {
      t.data == SoundManager.GameOverAudio &&
        ((this.mask_img.visible = !1),
        this.addChild(this.mask_img),
        this.addChild(this.effect_gp),
        egret.Tween.removeAllTweens(),
        this.dispatchEventWith('animationComplete'),
        this.gameStageControl.onGameOver(),
        (this.gameIsOver = !0));
    }),
    e
  );
})(eui.Component);
__reflect(GameControl.prototype, 'GameControl');
var LoadingUI = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return e.createView(), e;
  }
  return (
    __extends(e, t),
    (e.prototype.createView = function() {
      (this.textField = new egret.TextField()),
        (this.textField.size = 36),
        (this.textField.textColor = 3342387),
        this.addChild(this.textField);
      var t = new eui.Group();
      (t.width = GlobalData.stage.stageWidth), (t.height = GlobalData.stage.stageHeight);
      var e = new eui.HorizontalLayout();
      (e.horizontalAlign = egret.HorizontalAlign.CENTER),
        (e.verticalAlign = egret.VerticalAlign.MIDDLE),
        (e.gap = -100),
        (t.layout = e);
      var i = new eui.Image('playBtn_png'),
        n = G.createEffect('effect3', t, 24);
      this.addChild(t),
        (i.y = (GlobalData.stage.stageHeight - 163) >> 1),
        (i.x = 0.8 * (GlobalData.stage.stageWidth - 163)),
        this.addChild(i),
        (this._btn = i),
        (this._logo = n),
        i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAction, this),
        (i.visible = !1),
        (this.textField.textAlign = egret.HorizontalAlign.LEFT);
    }),
    (e.prototype.onAction = function(t) {
      // TODO: 
      document.querySelector('.hide-content').style.display = 'none';
      this._isOk &&
        (this._btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAction, this),
        this.removerView(),
        SoundManager.instance.playSound(SoundManager.preloadAudio),
        SoundManager.instance.playSound('enterGame_mp3'));
    }),
    (e.prototype.onProgress = function(t, e) {
      var i = Math.floor((t / e) * 100);
      // (this.textField.text = 'Loading...' + i + '%'), // TODO:
        (this.textField.x = (GlobalData.stage.stageWidth - this.textField.width) >> 1),
        (this.textField.y = ((GlobalData.stage.stageHeight - this.textField.height) >> 1) - 100),
        this._logo.gotoAndStop(Math.floor((t / e) * this._logo.totalFrames)),
        t == e && ((this._isOk = !0), (this._btn.visible = !0), this._logo.gotoAndStop(this._logo.totalFrames));
    }),
    (e.prototype.removerView = function() {
      this.parent.removeChild(this), this._call && this._call.apply(this._taget);
    }),
    (e.prototype.callBack = function(t, e) {
      (this._taget = t), (this._call = e);
    }),
    e
  );
})(egret.Sprite);
__reflect(LoadingUI.prototype, 'LoadingUI', ['RES.PromiseTaskReporter']);
var GlobalData = (function() {
  function t() {}
  return (t.stageWidth = 1334), (t.stageHigth = 750), t;
})();
__reflect(GlobalData.prototype, 'GlobalData');
var LoadingTransiMv = (function(t) {
  function e(e) {
    var i = t.call(this) || this;
    return (
      (i.tipStr = '加载中...'),
      (i.isPersonJsonLoadingComp = !1),
      (i.isPersonPngLoadingComp = !1),
      (i.viewManager = e),
      (i.skinName = 'loadingTransiMv'),
      i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onHandleAdded, i),
      i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.onHandleRemoved, i),
      i
    );
  }
  return (
    __extends(e, t),
    (e.prototype.onHandleAdded = function() {
      var t = this;
      (this.isPersonJsonLoadingComp = !1),
        (this.isPersonPngLoadingComp = !1),
        (this.loadingBg = new egret.Bitmap(RES.getRes('loadingBg_jpg'))),
        this.addChild(this.loadingBg);
      var e = 'loadingMv_json',
        i = 'loadingMv_png',
        n = RES.getRes(e),
        o = RES.getRes(i);
      if (n && o) {
        var r = new egret.MovieClipDataFactory(n, o);
        (this.loadingMv = new egret.MovieClip(r.generateMovieClipData('movie'))),
          this.loadingMv.gotoAndPlay('play', -1),
          this.addChild(this.loadingMv),
          this.loadingMv.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        var s =
          '<e:Skin class="skins.ProgressBarSkin" minWidth="30" minHeight="18" xmlns:e="http://ns.egret.com/eui">\n            <e:Image source="progress_bar_bg_png" scale9Grid="1,1,4,4" width="100%"\n                    height="100%" verticalCenter="0"/>\n            <e:Image id="thumb" height="100%" width="100%" source="progress_bar_thumb_png"/>\n            <e:Label id="labelDisplay" textAlign="center" verticalAlign="middle"\n                    size="15" fontFamily="Tahoma" textColor="0xFFFFFF"\n                    horizontalCenter="0" verticalCenter="0"/>\n        </e:Skin>';
        (this.progress = new eui.ProgressBar()),
          (this.progress.skinName = s),
          (this.progress.x = 400),
          (this.progress.y = 621),
          (this.progress.labelDisplay.size = 4),
          (this.progress.labelDisplay.fontFamily = 'Microsoft YaHei'),
          (this.progress.labelFunction = function(e, i) {
            return t.tipStr;
          }),
          this.addChild(this.progress);
      }
    }),
    (e.prototype.onLoadPersonMv = function() {
      var t = this;
      if (this.isPersonJsonLoadingComp && this.isPersonPngLoadingComp) {
        var e = new egret.MovieClipDataFactory(this.personJsonData, this.personPngData);
        (this.loadingMv = new egret.MovieClip(e.generateMovieClipData('movie'))),
          this.loadingMv.gotoAndPlay('play', -1),
          this.addChild(this.loadingMv),
          this.loadingMv.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        var i =
          '<e:Skin class="skins.ProgressBarSkin" minWidth="30" minHeight="18" xmlns:e="http://ns.egret.com/eui">\n            <e:Image source="progress_bar_bg_png" scale9Grid="1,1,4,4" width="100%"\n                    height="100%" verticalCenter="0"/>\n            <e:Image id="thumb" height="100%" width="100%" source="progress_bar_thumb_png"/>\n            <e:Label id="labelDisplay" textAlign="center" verticalAlign="middle"\n                    size="15" fontFamily="Tahoma" textColor="0xFFFFFF"\n                    horizontalCenter="0" verticalCenter="0"/>\n        </e:Skin>';
        (this.progress = new eui.ProgressBar()),
          (this.progress.skinName = i),
          (this.progress.x = 400),
          (this.progress.y = 621),
          (this.progress.labelDisplay.size = 4),
          (this.progress.labelDisplay.fontFamily = 'Microsoft YaHei'),
          (this.progress.labelFunction = function(e, i) {
            return t.tipStr;
          }),
          this.addChild(this.progress);
      }
    }),
    (e.prototype.onHandleRemoved = function() {}),
    (e.prototype.register = function(t) {
      this.viewManager = t;
    }),
    (e.prototype.updateNextScene = function(t) {
      this._nextScene = t;
    }),
    (e.prototype.onComplete = function(t) {
      var e = new SceneEvent(SceneEvent.SCENE_EVENT);
      (e.nextSceneType = SceneEvent.GAME), (e.nextScene = this._nextScene), this.viewManager.dispatchEvent(e);
    }),
    (e.prototype.setProgress = function(t, e) {
      (this.progress.maximum = e), (this.progress.value = t);
    }),
    e
  );
})(eui.Component);
__reflect(LoadingTransiMv.prototype, 'LoadingTransiMv');
var PlayVideo = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e._videoContainer = document.getElementById('videoContainer')),
      (e._videoContent = document.getElementById('videoContent')),
      (e._canvas = document.getElementsByTagName('canvas')[0]),
      (e._ctx = e._canvas.getContext('2d')),
      e
    );
  }
  return (
    __extends(e, t),
    (e.prototype.init = function() {}),
    (e.prototype.updateVideoSrc = function(t) {
      this._videoContent.src = t;
    }),
    (e.prototype.updateNextSceneInfo = function(t, e) {
      (this._nextScene = t), (this._nextSceneType = e);
    }),
    (e.prototype.play = function() {
      return this._videoContent.currentTime > 0 && this._videoContent.currentTime < this._videoContent.duration
        ? void this.resume()
        : void this.playVideo();
    }),
    (e.prototype.playVideo = function() {
      var t = this,
        e = function() {
          (t._videoContainer.style.display = 'block'),
            (t._videoContent.style.display = 'block'),
            t._videoContent.removeEventListener('canplay', e, !1);
          var i = new SceneEvent(SceneEvent.SCENE_EVENT);
          (i.nextSceneType = SceneEvent.VIDEO_READY_TO_PLAY), t._control.dispatchEvent(i);
        };
      this._videoContent.addEventListener('canplay', e, !1),
        this._videoContent.play(),
        (this._videoContent.onended = function() {
          t.videoPlayCompleted();
        }),
        this.startVideoCheck();
    }),
    (e.prototype.startVideoCheck = function() {
      null == this._videoTimer &&
        ((this._videoTimer = new egret.Timer(1e3, 0)),
        this._videoTimer.addEventListener(egret.TimerEvent.TIMER, this.checkVideo, this)),
        this._videoTimer.reset(),
        this._videoTimer.start();
    }),
    (e.prototype.checkVideo = function(t) {
      this._videoContent.currentTime >= this._videoContent.duration &&
        (this._videoContent.pause(), this.videoPlayCompleted());
    }),
    (e.prototype.stopCheckVideo = function() {
      this._videoTimer.stop();
    }),
    (e.prototype.videoDisplayNone = function() {
      (this._videoContainer.style.display = 'none'), (this._videoContent.style.display = 'none');
    }),
    (e.prototype.videoPlayCompleted = function() {
      this.stopCheckVideo();
      var t = new SceneEvent(SceneEvent.SCENE_EVENT);
      (t.nextScene = this._nextScene),
        (t.data = this._src),
        (t.nextSceneType = this._nextSceneType),
        this._control.dispatchEvent(t);
    }),
    (e.prototype.register = function(t) {
      this._control = t;
    }),
    (e.prototype.stop = function() {
      this._videoContent.pause(), (this._videoContent.currentTime = 0);
    }),
    (e.prototype.pause = function() {
      this._videoContent.pause();
    }),
    (e.prototype.resume = function() {
      this._videoContent.play();
    }),
    e
  );
})(egret.DisplayObjectContainer);
__reflect(PlayVideo.prototype, 'PlayVideo');
var SceneEvent = (function(t) {
  function e(e, i, n, o) {
    return t.call(this, e, i, n, o) || this;
  }
  return (
    __extends(e, t),
    (e.SCENE_EVENT = 'SCENE_EVENT'),
    (e.VIDEO = 'VIDEO'),
    (e.GAME = 'GAME'),
    (e.LOADING = 'LOADING'),
    (e.VIDEO_COMPLETED = 'VIDEO_COMPLETED'),
    (e.VIDEO_READY_TO_PLAY = 'VIDEO_READY_TO_PLAY'),
    (e.GAME_COMPLETED = 'GAME_COMPLETED'),
    (e.SCENE_COMPLETED = 'SCENE_COMPLETED'),
    (e.VIDEO_IMPORT = 'resource/mp/qinqin.mp4'),
    (e.SCENE_VIDEO_START = 'resource/assets/Video/video-start.mp4'),
    (e.SCENE_GAME_STAGE = 'SCENE_GAME_STAGE'),
    (e.SCENE_ONE_GAME_TWO = 'SCENE_ONE_GAME_TWO'),
    (e.SCENE_ONE_GAME_THREE = 'SCENE_ONE_GAME_THREE'),
    (e.LOADING_COMPLETED = 'LOADING_COMPLETED'),
    e
  );
})(egret.Event);
__reflect(SceneEvent.prototype, 'SceneEvent');
var SceneManager = (function(t) {
  function e() {
    return t.call(this) || this;
  }
  return (
    __extends(e, t),
    Object.defineProperty(e.prototype, 'rootStage', {
      set: function(t) {
        this._rootStage = t;
      },
      enumerable: !0,
      configurable: !0
    }),
    (e.prototype.start = function() {
      (this.videoPlayer = new PlayVideo()),
        this.videoPlayer.register(this),
        this.addListeners(),
        (this.loadingTrasinMv = new LoadingTransiMv()),
        this.loadingTrasinMv.register(this),
        RES.loadGroup('preload'),
        this.loadingTrasinMv.updateNextScene(SceneEvent.SCENE_GAME_STAGE);
    }),
    (e.prototype.addListeners = function() {
      this.addEventListener(SceneEvent.SCENE_EVENT, this.onChangeScene, this);
    }),
    (e.prototype.onChangeScene = function(t) {
      switch (t.nextSceneType) {
        case SceneEvent.GAME:
          this.onGameScene(t);
          break;
        case SceneEvent.VIDEO:
          this.onVideoScene(t);
          break;
        case SceneEvent.LOADING:
          this.onLoading(t);
          break;
        case SceneEvent.LOADING_COMPLETED:
          this.onLoadingGroupCompleted();
          break;
        case SceneEvent.SCENE_COMPLETED:
          this.onSceneCompleted();
          break;
        case SceneEvent.VIDEO_READY_TO_PLAY:
          this.onVideoReady();
      }
    }),
    (e.prototype.onGameScene = function(t) {
      switch (t.nextScene) {
        case SceneEvent.SCENE_GAME_STAGE:
          (this.gameStage = new GameStage()),
            this.gameStage.register(this),
            this._rootStage.addChild(new egret.Bitmap(RES.getRes('gameStartLoadingBg_png'))),
            egret.setTimeout(
              function() {
                this._rootStage.addChild(this.gameStage);
              },
              this,
              2e3
            );
      }
      this.loadingTrasinMv && this.loadingTrasinMv.parent && this._rootStage.removeChild(this.loadingTrasinMv);
    }),
    (e.prototype.onVideoScene = function(t) {
      switch (t.nextScene) {
        case SceneEvent.VIDEO_IMPORT:
      }
      this.videoPlayer.play();
    }),
    (e.prototype.onLoading = function(t) {
      (this.loadingTrasinMv = new LoadingTransiMv()),
        this.loadingTrasinMv.register(this),
        RES.loadGroup('loading'),
        this.loadingTrasinMv.updateNextScene(t.nextScene);
    }),
    (e.prototype.onLoadingGroupCompleted = function() {
      this.videoPlayer.videoDisplayNone(), RES.loadGroup('preload');
    }),
    (e.prototype.loadingComplete = function() {
      this.loadingTrasinMv.onComplete();
    }),
    (e.prototype.setProgress = function(t) {}),
    (e.prototype.onSceneCompleted = function() {
      document.getElementById('lastScene').style.display = 'block';
    }),
    (e.prototype.onVideoReady = function() {
      this._rootStage.removeChildren();
    }),
    e
  );
})(egret.DisplayObjectContainer);
__reflect(SceneManager.prototype, 'SceneManager');
var CutImgTool = (function() {
  function t() {}
  return (
    (t.cutTile = function(t, e, i, n, o, r, s) {
      for (var a = new egret.Rectangle(), h = 0, l = [], u = 0; e > u; u++)
        for (var c = 0; i > c; c++) {
          if (!(u * i + c >= n && o >= h)) return l;
          var p = new egret.RenderTexture();
          if (((a.x = c * r), (a.y = u * s), (a.width = r), (a.height = s), 0 == p.drawToTexture(t, a)))
            return console.error('CutImgTool >> cut error'), null;
          l.push(p), h++;
        }
      return l;
    }),
    t
  );
})();
__reflect(CutImgTool.prototype, 'CutImgTool');
var DateUtils = (function() {
  function t() {}
  return (
    (t.formatTime = function(t, e, i) {
      void 0 === e && (e = !0), void 0 === i && (i = ':');
      var n = Math.floor(t / 3600),
        o = Math.floor((t % 3600) / 60),
        r = t % 60,
        s = n.toString(),
        a = o.toString(),
        h = r.toString();
      return (
        10 > n && (s = '0' + n), 10 > o && (a = '0' + o), 10 > r && (h = '0' + r), e ? s + i + a + i + h : a + i + h
      );
    }),
    (t.getDateDiff = function(e, i) {
      var n = t.getDateDiffArr(e, i),
        o = '';
      return (
        n[0] > 0 && (o += n[0] + '天'),
        n[1] > 0 && (o += n[1] + '小时'),
        n[2] > 0 && (o += n[2] + '分'),
        n[3] > 0 && (o += n[3] + '秒'),
        o
      );
    }),
    (t.getDateDiffArr = function(t, e) {
      var i = Math.abs(e - t),
        n = Math.floor(i / 864e5),
        o = i % 864e5,
        r = Math.floor(o / 36e5),
        s = o % 36e5,
        a = Math.floor(s / 6e4),
        h = s % 6e4,
        l = Math.round(h / 1e3);
      return [n, r, a, l];
    }),
    (t.dateFormat = function(t, e) {
      void 0 === e && (e = 'yyyy-MM-dd hh:mm:ss');
      var i = {
        'M+': t.getMonth() + 1,
        'd+': t.getDate(),
        'h+': t.getHours(),
        'm+': t.getMinutes(),
        's+': t.getSeconds(),
        'q+': Math.floor((t.getMonth() + 3) / 3),
        S: t.getMilliseconds()
      };
      /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length)));
      for (var n in i)
        new RegExp('(' + n + ')').test(e) &&
          (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ('00' + i[n]).substr(('' + i[n]).length)));
      return e;
    }),
    t
  );
})();
__reflect(DateUtils.prototype, 'DateUtils');
var DEvent = (function(t) {
  function e(e, i, n, o) {
    void 0 === i && (i = null), void 0 === n && (n = !1), void 0 === o && (o = !1);
    var r = t.call(this, e, n, o) || this;
    return (r.data = i), r;
  }
  return __extends(e, t), e;
})(egret.Event);
__reflect(DEvent.prototype, 'DEvent');
var GameTool = (function() {
  function t() {}
  return (
    (t.resetViewScale = function(t) {
      egret.Tween.removeTweens(t), (t.scaleX = t.scaleY = 1), (t.x = t.y = 0), (t.showEffect = !1);
    }),
    (t.setViewScaleEffect = function(t) {
      (t.scaleX = t.scaleY = 1), (t.showEffect = !0);
      var e = t.x,
        i = t.y,
        n = t.x - (1.2 * t.width - t.width) / 2,
        o = t.y - (1.2 * t.height - t.height) / 2;
      egret.Tween.get(t, { loop: !0 })
        .to({ scaleX: 1.2, scaleY: 1.2, x: n, y: o }, 1e3)
        .to({ scaleX: 1, scaleY: 1, x: e, y: i }, 1e3)
        .call(function() {});
    }),
    (t.onHitTest = function(t, e) {
      return t.x + t.width > e.x && e.x + e.width > t.x && t.y + t.height > e.y && e.y + e.height > t.y ? !0 : !1;
    }),
    (t.setViewWaitEffect = function(t, e) {
      void 0 === e && (e = 1.05),
        (t.scaleX = t.scaleY = 1),
        (t.showEffect = !0),
        t.startX ||
          ((t.startX = t.x),
          (t.startY = t.y),
          (t.nextX = t.x - (t.width * e - t.width) / 2),
          (t.nextY = t.y - (t.height * e - t.height) / 2),
          (t.next1X = t.x - (0.9 * t.width - t.width) / 2),
          (t.next1Y = t.y - (0.9 * t.height - t.height) / 2));
      var i = t.x,
        n = t.y,
        o = t.nextX,
        r = t.nextY,
        s = t.next1X,
        a = t.next1Y;
      egret.Tween.get(t, { loop: !0 })
        .to({ scaleX: e, scaleY: e, x: o, y: r }, 500)
        .to({ scaleX: 0.9, scaleY: 0.9, x: s, y: a }, 1e3)
        .to({ scaleX: 1, scaleY: 1, x: i, y: n }, 500);
    }),
    (t.stopViewWaitEffect = function(t) {
      egret.Tween.removeTweens(t),
        (t.scaleX = t.scaleY = 1),
        (t.filters = []),
        t.startX && (t.x = t.startX),
        t.startY && (t.y = t.startY);
    }),
    (t.setViewWaitEffect1 = function(t) {
      (t.scaleX = t.scaleY = 1), (t.showEffect = !0);
      var e = t.x,
        i = t.y,
        n = t.x - (1.1 * t.width - t.width) / 2,
        o = t.y - (1.1 * t.height - t.height) / 2,
        r = t.x - (0.9 * t.width - t.width) / 2,
        s = t.y - (0.9 * t.height - t.height) / 2;
      egret.Tween.get(t, { loop: !0 })
        .to({ scaleX: 1.1, scaleY: 1.1, alpha: 0.5, x: n, y: o }, 500)
        .to({ scaleX: 0.9, scaleY: 0.9, alpha: 0.7, x: r, y: s }, 1e3)
        .to({ scaleX: 1, scaleY: 1, alpha: 1, x: e, y: i }, 500);
    }),
    (t.setViewWaitEffect2 = function(t, e, i) {
      void 0 === e && (e = !0), void 0 === i && (i = 100), (t.scaleX = t.scaleY = 1), (t.showEffect = !0);
      var n = t.x,
        o = t.y,
        r = e ? n : n + i,
        s = e ? o + i : o,
        a = e ? n : n - i,
        h = e ? o - i : o;
      egret.Tween.get(t, { loop: !0 })
        .to({ x: r, y: s }, 1500)
        .to({ x: a, y: h }, 3e3)
        .to({ x: n, y: o }, 1500);
    }),
    (t.setViewWaitEffect3 = function(t, e, i) {
      void 0 === e && (e = !0), void 0 === i && (i = 100), (t.scaleX = t.scaleY = 1), (t.showEffect = !0);
      var n = t.x,
        o = t.y,
        r = e ? n : n + i,
        s = e ? o + i : o,
        a = e ? n : n - i,
        h = e ? o - i : o;
      egret.Tween.get(t, { loop: !0 })
        .to({ x: r, alpha: 1, y: s }, 1500)
        .to({ x: a, alpha: 0.5, y: h }, 3e3)
        .to({ x: n, alpha: 1, y: o }, 1500);
    }),
    (t.setViewWaitEffect4 = function(t, e, i) {
      void 0 === e && (e = !0), void 0 === i && (i = 100), (t.scaleX = t.scaleY = 1), (t.showEffect = !0);
      var n = t.x,
        o = t.y,
        r = e ? n : n + i,
        s = e ? o + i : o,
        a = e ? n : n - i,
        h = e ? o - i : o;
      egret.Tween.get(t, { loop: !0 })
        .to({ x: r, alpha: 1, y: s }, 1500)
        .to({ x: a, alpha: 0.5, y: h }, 3e3)
        .to({ x: n, alpha: 1, y: o }, 1500);
    }),
    (t.setViewWaitGlowEffect = function(e, i) {
      void 0 === i && (i = 16776960);
      var n = 200;
      egret.Tween.get(e, { loop: !1 })
        .wait(n)
        .call(function() {
          t.setViewGlowFilter(e, 16776960, 0.5, 5, 5, 1);
        }, e)
        .wait(n)
        .call(function() {
          t.setViewGlowFilter(e, 16776960, 0.6, 7, 7, 2);
        }, e)
        .wait(n)
        .call(function() {
          t.setViewGlowFilter(e, 16776960, 0.9, 11, 11, 4);
        }, e)
        .wait(n)
        .call(function() {
          t.setViewGlowFilter(e, 16776960, 0.7, 16, 16, 2);
        }, e)
        .wait(n)
        .call(function() {
          e.filters = [];
        }, e);
    }),
    (t.setMoveToEffect = function(t, e, i, n) {
      void 0 === i && (i = null), void 0 === n && (n = null);
      var o = new egret.Point(t.x, t.y);
      egret.Tween.get(t)
        .to({ x: e.x - 10, y: e.y - 20 }, 500)
        .call(function() {
          (t.visible = !1), (t.x = o.x), (t.y = o.y), (t.scaleX = t.scaleY = 1), n && n.call(i);
        });
    }),
    (t.setSelectEffect = function(e, i) {
      i ? t.setViewGlowFilter(e, 16776960, 1, 20, 20, 3) : (e.filters = []);
    }),
    (t.setScaleYEffect = function(t) {}),
    (t.setSelectEffect1 = function(e, i) {
      t.stopViewWaitEffect(e),
        i &&
          (e.startX ||
            ((e.startX = e.x),
            (e.startY = e.y),
            (e.nextX = e.x - (1.2 * e.width - e.width) / 2),
            (e.nextY = e.y - (1.2 * e.height - e.height) / 2),
            (e.next1X = e.x - (0.9 * e.width - e.width) / 2),
            (e.next1Y = e.y - (0.9 * e.height - e.height) / 2)),
          (e.scaleX = e.scaleY = 1.2),
          (e.x = e.nextX),
          (e.y = e.nextY));
    }),
    (t.setDownEffect = function(t) {
      egret.Tween.removeTweens(t),
        t.startX ||
          ((t.startX = t.x),
          (t.startY = t.y),
          (t.nextX = t.x - (1.2 * t.width - t.width) / 2),
          (t.nextY = t.y - (1.2 * t.height - t.height) / 2),
          (t.next1X = t.x - (0.9 * t.width - t.width) / 2),
          (t.next1Y = t.y - (0.9 * t.height - t.height) / 2)),
        t.next1X && egret.Tween.get(t).to({ x: t.next1X, y: t.next1Y, scaleX: 0.9, scaleY: 0.9 }, 100);
    }),
    (t.setUpEffect = function(e) {
      t.stopViewWaitEffect(e);
    }),
    (t.setViewGlowFilter = function(t, e, i, n, o, r, s, a, h) {
      void 0 === e && (e = 3394815),
        void 0 === i && (i = 1),
        void 0 === n && (n = 35),
        void 0 === o && (o = 35),
        void 0 === r && (r = 2),
        void 0 === s && (s = 3),
        void 0 === a && (a = !1),
        void 0 === h && (h = !1);
      var l = new egret.GlowFilter(e, i, n, o, r, s, a, h);
      t.filters = [l];
    }),
    (t.setViewColorFilter = function(e, i) {
      void 0 === i && (i = t.HUI_colorMatrix);
      var n = new egret.ColorMatrixFilter(i);
      e.filters = [n];
    }),
    (t.createBitmapByName = function(t) {
      var e = new egret.Bitmap(),
        i = RES.getRes(t);
      return (e.texture = i), e;
    }),
    (t.createMovieClipByName = function(t) {
      var e = new egret.MovieClip(),
        i = RES.getRes(t + '_json'),
        n = RES.getRes(t + '_png'),
        o = new egret.MovieClipDataFactory(i, n);
      return (e = new egret.MovieClip(o.generateMovieClipData(t)));
    }),
    (t.HUI_colorMatrix = [0.3, 0.6, 0, 0, 0, 0.3, 0.6, 0, 0, 0, 0.3, 0.6, 0, 0, 0, 0, 0, 0, 1, 0]),
    t
  );
})();
__reflect(GameTool.prototype, 'GameTool');
var G;
!(function(t) {
  (t.playerEffectOnce = function(t, e, i) {
    void 0 === i && (i = 12);
    var n = GameTool.createMovieClipByName(t);
    e.addChild(n),
      (n.frameRate = i),
      n.gotoAndPlay(1),
      n.once(
        egret.Event.COMPLETE,
        function(t) {
          var e = t.currentTarget;
          e.parent && e.parent.removeChild(e);
        },
        n
      );
  }),
    (t.playerEffectOnce1 = function(t, e, i, n) {
      void 0 === i && (i = 1), void 0 === n && (n = 12);
      var o = GameTool.createMovieClipByName(t);
      e.addChild(o),
        (o.frameRate = n),
        o.play(i),
        o.once(
          egret.Event.COMPLETE,
          function(t) {
            var e = t.currentTarget;
            e.parent && e.parent.removeChild(e);
          },
          o
        );
    }),
    (t.createEffect = function(t, e, i) {
      void 0 === i && (i = 12);
      var n = GameTool.createMovieClipByName(t);
      return e.addChild(n), (n.frameRate = i), n.gotoAndStop(1), n;
    }),
    (t.setAllViewClickAction = function(t, e, i, n) {
      void 0 === n && (n = !0);
      for (var o = 0; o < e.length; o++) {
        var r = t[e[o]];
        (r.name = e[o]),
          (r.onBeginEvent = function(t) {
            n && GameTool.setDownEffect(t.currentTarget);
          }),
          (r.onEndEvent = function(e) {
            n && GameTool.setUpEffect(e.currentTarget), i.call(t, e);
          }),
          r.addEventListener(egret.TouchEvent.TOUCH_BEGIN, r.onBeginEvent, t),
          r.addEventListener(egret.TouchEvent.TOUCH_END, r.onEndEvent, t);
      }
    }),
    (t.removerAllViewClickAction = function(t, e, i) {
      for (var n = 0; n < e.length; n++) {
        var o = t[e[n]];
        o.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, o.onBeginEvent, t),
          o.removeEventListener(egret.TouchEvent.TOUCH_END, o.onEndEvent, t);
      }
    }),
    (t.getAllViewPoints = function(t, e) {
      for (var i = [], n = 0; n < e.length; n++) {
        var o = new egret.Point(t[e[n]].x, t[e[n]].y);
        i.push(o);
      }
      return i;
    }),
    (t.resetAllView = function(t, e, i, n, o, r) {
      void 0 === i && (i = null), void 0 === n && (n = !0), void 0 === o && (o = 1), void 0 === r && (r = !0);
      for (var s = 0; s < e.length; s++)
        i && ((t[e[s]].x = i[s].x), (t[e[s]].x = i[s].x)),
          (t[e[s]].visible = n),
          (t[e[s]].alpha = o),
          (t[e[s]].touchEnabled = r),
          (t[e[s]].touchChildren = r);
    });
})(G || (G = {}));
var GifPlayer = (function(t) {
  function e(e, i, n, o) {
    void 0 === e && (e = ''), void 0 === i && (i = 1), void 0 === n && (n = 12), void 0 === o && (o = '_png');
    var r = t.call(this) || this;
    return (
      (r._frameIndex = 1),
      (r._lastTime = 0),
      (r._fpsTimer = 1e3 / 12),
      (r._intervalId = -1),
      (r._frameTotal = 48),
      (r._prefix = 'biaotitexiao00'),
      (r._postfix = '_png'),
      (r._playCount = -1),
      (r.currPlayCount = 0),
      (r.isPlaying = !1),
      (r._prefix = e),
      (r._frameTotal = i),
      (r._fpsTimer = 1e3 / n),
      (r._postfix = o),
      r.initView(),
      r
    );
  }
  return (
    __extends(e, t),
    (e.prototype.setFrameTotal = function(t) {
      this._frameTotal = t;
    }),
    (e.prototype.setFpsTimer = function(t) {
      void 0 === t && (t = 12), (this._fpsTimer = 1e3 / t);
    }),
    (e.prototype.setFramePrefix = function(t) {
      this._prefix = t;
    }),
    (e.prototype.play = function(t, e) {
      void 0 === t && (t = -1),
        void 0 === e && (e = 0),
        (this.visible = !0),
        (this.currPlayCount = 0),
        (this._playCount = t),
        this.stop(),
        0 > e && (e = 0),
        e > this._frameTotal && (e = this._frameTotal),
        (this._frameIndex = e),
        this.onInterval(),
        egret.clearInterval(this._intervalId),
        (this._intervalId = egret.setInterval(this.onInterval, this, this._fpsTimer)),
        (this.isPlaying = !0);
    }),
    (e.prototype.stop = function() {
      egret.clearInterval(this._intervalId);
    }),
    (e.prototype.initView = function() {
      (this._img = new egret.Bitmap()),
        (this._img.texture = RES.getRes(this._prefix + '01' + this._postfix)),
        this.addChild(this._img);
    }),
    (e.prototype.setCallback = function(t) {
      this._callback = t;
    }),
    (e.prototype.onInterval = function() {
      this._frameIndex++;
      var t = !0;
      this._frameIndex > this._frameTotal &&
        ((this._frameIndex = 1),
        this.currPlayCount++,
        this._playCount > 0 &&
          this._playCount == this.currPlayCount &&
          (null != this.parent && ((this.isPlaying = !1), this._callback && this._callback.call(this.parent)),
          (t = !1),
          egret.clearInterval(this._intervalId))),
        t &&
          (this._frameTotal < 100 &&
            (this._frameIndex < 10
              ? (this._img.texture = RES.getRes(this._prefix + '0' + this._frameIndex + this._postfix))
              : (this._img.texture = RES.getRes(this._prefix + this._frameIndex + this._postfix))),
          this._frameTotal > 99 &&
            (this._frameIndex < 10
              ? (this._img.texture = RES.getRes(this._prefix + '00' + this._frameIndex + this._postfix))
              : this._frameIndex < 100
              ? (this._img.texture = RES.getRes(this._prefix + '0' + this._frameIndex + this._postfix))
              : (this._img.texture = RES.getRes(this._prefix + this._frameIndex + this._postfix))));
    }),
    e
  );
})(egret.Sprite);
__reflect(GifPlayer.prototype, 'GifPlayer');
var SoundManager = (function(t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e._isMusicOn = !0),
      (e._isSoundOn = !0),
      (e._bgmVoice = 0.5),
      (e._currentSoundChannel = null),
      (e._currentSoundName = ''),
      (e._soundVoice = 0.5),
      e
    );
  }
  return (
    __extends(e, t),
    Object.defineProperty(e, 'instance', {
      get: function() {
        return null == this._instance && (this._instance = new e()), this._instance;
      },
      enumerable: !0,
      configurable: !0
    }),
    Object.defineProperty(e.prototype, 'musicVolume', {
      get: function() {
        return this._bgmVoice;
      },
      set: function(t) {
        (this._bgmVoice = t), this._bgSoundChannel && (this._bgSoundChannel.volume = t);
      },
      enumerable: !0,
      configurable: !0
    }),
    Object.defineProperty(e.prototype, 'soundVolume', {
      get: function() {
        return this._soundVoice;
      },
      set: function(t) {
        this._soundVoice = t;
      },
      enumerable: !0,
      configurable: !0
    }),
    (e.prototype.playMusic = function(t, e) {
      void 0 === e && (e = 0.5),
        this.isMusicOn &&
          (this.stopMusic(),
          (this._bgmVoice = e),
          (this._bgSound = RES.getRes(t)),
          (this._bgSound.type = egret.Sound.MUSIC),
          this._bgSound &&
            ((this._bgSoundChannel = this._bgSound.play(0, 999)), (this._bgSoundChannel.volume = this._bgmVoice)));
    }),
    Object.defineProperty(e.prototype, 'isMusicOn', {
      get: function() {
        return this._isMusicOn;
      },
      set: function(t) {
        this._isMusicOn != t &&
          ((this._isMusicOn = t),
          this._isMusicOn
            ? this._bgSoundChannel && (this._bgSoundChannel.volume = this._bgmVoice)
            : this._bgSoundChannel && (this._bgSoundChannel.volume = 0));
      },
      enumerable: !0,
      configurable: !0
    }),
    Object.defineProperty(e.prototype, 'isSoundOn', {
      get: function() {
        return this._isSoundOn;
      },
      set: function(t) {
        this._isSoundOn = t;
      },
      enumerable: !0,
      configurable: !0
    }),
    (e.prototype.playSound = function(t, e) {
      if ((void 0 === e && (e = 1), this._isSoundOn)) {
        this._soundName = t;
        var i = RES.getRes(t);
        (i.type = egret.Sound.EFFECT),
          this.stopSound(),
          (this._currentSoundChannel = i.play(0, e)),
          (this._currentSoundChannel.volume = this._soundVoice),
          this._currentSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
      }
    }),
    (e.prototype.playEffect = function(t, e) {
      if ((void 0 === e && (e = 1), this._isSoundOn)) {
        this._soundName = t;
        var i = RES.getRes(t);
        i.type = egret.Sound.EFFECT;
        var n = i.play(0, e);
        n.volume = this._soundVoice;
      }
    }),
    (e.prototype.onSoundComplete = function(t) {
      this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
        this.dispatchEvent(new DEvent(egret.Event.SOUND_COMPLETE, this._soundName));
    }),
    (e.prototype.stopSound = function() {
      null != this._currentSoundChannel &&
        (this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
        this._currentSoundChannel.stop());
    }),
    (e.prototype.stopMusic = function() {
      null != this._bgSoundChannel && this._bgSoundChannel.stop();
    }),
    (e.ErrorAudio = 'wrong_mp3'),
    (e.RightAudio = 'right_mp3'),
    (e.GameOverAudio = 'gameOverBg_mp3'),
    (e.OverAudio = 'wrong_mp3'),
    (e.bgAudio = 'bgMusic_mp3'),
    (e.preloadAudio = 'preloadMusic_mp3'),
    e
  );
})(egret.EventDispatcher);
__reflect(SoundManager.prototype, 'SoundManager');
var Util = (function() {
  function t() {}
  return (
    (t.scaleXY = function(t) {
      t.scaleX = t.scaleY = 1;
      var e = t.x,
        i = t.y,
        n = t.x - (1.2 * t.width - t.width) / 2,
        o = t.y - (1.2 * t.height - t.height) / 2;
      egret.Tween.get(t, { loop: !0 })
        .to({ scaleX: 1.2, scaleY: 1.2, x: n, y: o }, 1e3)
        .to({ scaleX: 1, scaleY: 1, x: e, y: i }, 1e3)
        .call(function() {});
    }),
    t
  );
})();
__reflect(Util.prototype, 'Util');
