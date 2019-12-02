
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.skins = {}
generateEUI.paths['resource/myskins/BtnsGroupSkin.exml'] = window.BtnsGroupSkin = (function (_super) {
	__extends(BtnsGroupSkin, _super);
	function BtnsGroupSkin() {
		_super.call(this);
		this.skinParts = ["gameHelpBtn","gameRestartBtn","gameBgMusicBtn"];
		
		this.height = 720;
		this.width = 124;
		this.elementsContent = [this._Image1_i(),this.gameHelpBtn_i(),this.gameRestartBtn_i(),this.gameBgMusicBtn_i()];
	}
	var _proto = BtnsGroupSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -6;
		t.left = 0;
		t.right = 0;
		t.source = "gameBtnsBg_png";
		t.top = 0;
		return t;
	};
	_proto.gameHelpBtn_i = function () {
		var t = new eui.Image();
		this.gameHelpBtn = t;
		t.horizontalCenter = 0;
		t.source = "helpStart_png";
		t.y = 187;
		return t;
	};
	_proto.gameRestartBtn_i = function () {
		var t = new eui.Image();
		this.gameRestartBtn = t;
		t.horizontalCenter = 0;
		t.source = "restartStart_png";
		t.y = 300;
		return t;
	};
	_proto.gameBgMusicBtn_i = function () {
		var t = new eui.Image();
		this.gameBgMusicBtn = t;
		t.horizontalCenter = 0.5;
		t.source = "bgMusicStart_png";
		t.y = 415;
		return t;
	};
	return BtnsGroupSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/GameControlSkin.exml'] = window.GameControlSkin = (function (_super) {
	__extends(GameControlSkin, _super);
	function GameControlSkin() {
		_super.call(this);
		this.skinParts = ["item_0","item_1","item_2","item_3","item_4","item_5","item_6","item_7","item_8"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.item_0_i(),this.item_1_i(),this.item_2_i(),this.item_3_i(),this.item_4_i(),this.item_5_i(),this.item_6_i(),this.item_7_i(),this.item_8_i()];
	}
	var _proto = GameControlSkin.prototype;

	_proto.item_0_i = function () {
		var t = new eui.Image();
		this.item_0 = t;
		t.source = "tile1_png";
		t.x = 462;
		t.y = 136;
		return t;
	};
	_proto.item_1_i = function () {
		var t = new eui.Image();
		this.item_1 = t;
		t.source = "tile1_png";
		t.x = 667;
		t.y = 136;
		return t;
	};
	_proto.item_2_i = function () {
		var t = new eui.Image();
		this.item_2 = t;
		t.source = "tile1_png";
		t.x = 872;
		t.y = 136;
		return t;
	};
	_proto.item_3_i = function () {
		var t = new eui.Image();
		this.item_3 = t;
		t.source = "tile1_png";
		t.x = 462;
		t.y = 302;
		return t;
	};
	_proto.item_4_i = function () {
		var t = new eui.Image();
		this.item_4 = t;
		t.source = "tile1_png";
		t.x = 667;
		t.y = 302;
		return t;
	};
	_proto.item_5_i = function () {
		var t = new eui.Image();
		this.item_5 = t;
		t.source = "tile1_png";
		t.x = 872;
		t.y = 302;
		return t;
	};
	_proto.item_6_i = function () {
		var t = new eui.Image();
		this.item_6 = t;
		t.source = "tile1_png";
		t.x = 462;
		t.y = 468;
		return t;
	};
	_proto.item_7_i = function () {
		var t = new eui.Image();
		this.item_7 = t;
		t.source = "tile1_png";
		t.x = 667;
		t.y = 468;
		return t;
	};
	_proto.item_8_i = function () {
		var t = new eui.Image();
		this.item_8 = t;
		t.source = "tile1_png";
		t.x = 872;
		t.y = 468;
		return t;
	};
	return GameControlSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/GameEndSkin.exml'] = window.GameEndSkin = (function (_super) {
	__extends(GameEndSkin, _super);
	var GameEndSkin$Skin1 = 	(function (_super) {
		__extends(GameEndSkin$Skin1, _super);
		function GameEndSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameEndSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "endBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameEndSkin$Skin1;
	})(eui.Skin);

	var GameEndSkin$Skin2 = 	(function (_super) {
		__extends(GameEndSkin$Skin2, _super);
		function GameEndSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameEndSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "restartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameEndSkin$Skin2;
	})(eui.Skin);

	var GameEndSkin$Skin3 = 	(function (_super) {
		__extends(GameEndSkin$Skin3, _super);
		function GameEndSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameEndSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nextGameBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameEndSkin$Skin3;
	})(eui.Skin);

	function GameEndSkin() {
		_super.call(this);
		// TODO: this.skinParts = ["bg_1","endBtn","restartBtn","nextGameBtn"];
		this.skinParts = ["bg_1","endBtn","restartBtn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameEndSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		// TODO: t.elementsContent = [this.bg_1_i(),this.endBtn_i(),this.restartBtn_i(),this.nextGameBtn_i()];
		t.elementsContent = [this.bg_1_i(),this.endBtn_i(),this.restartBtn_i()];
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "gameEndBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.endBtn_i = function () {
		var t = new eui.Button();
		this.endBtn = t;
		t.label = "";
		t.x = 103;
		t.y = 335;
		t.skinName = GameEndSkin$Skin1;
		return t;
	};
	_proto.restartBtn_i = function () {
		var t = new eui.Button();
		this.restartBtn = t;
		t.label = "";
		t.x = 298;
		t.y = 335;
		t.skinName = GameEndSkin$Skin2;
		return t;
	};
	_proto.nextGameBtn_i = function () {
		var t = new eui.Button();
		this.nextGameBtn = t;
		t.label = "";
		t.x = 499;
		t.y = 335;
		t.skinName = GameEndSkin$Skin3;
		return t;
	};
	return GameEndSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/GameStageSkin.exml'] = window.GameStageSkin = (function (_super) {
	__extends(GameStageSkin, _super);
	function GameStageSkin() {
		_super.call(this);
		this.skinParts = ["bg","line","zhaqu","btn_return","btn_sound","tuzi","tuzi2","count_0","count_1","targetRect"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.line_i(),this.zhaqu_i(),this.btn_return_i(),this.btn_sound_i(),this.tuzi_i(),this.tuzi2_i(),this.count_0_i(),this.count_1_i(),this.targetRect_i()];
	}
	var _proto = GameStageSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "migongbg3_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.line_i = function () {
		var t = new eui.Image();
		this.line = t;
		t.source = "migongxianlu3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhaqu_i = function () {
		var t = new eui.Image();
		this.zhaqu = t;
		t.source = "zhaqu1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Image();
		this.btn_return = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "backBtn_png";
		t.x = 37;
		t.y = 10;
		return t;
	};
	_proto.btn_sound_i = function () {
		var t = new eui.Image();
		this.btn_sound = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sound_on_png";
		t.x = 1225;
		t.y = 9;
		return t;
	};
	_proto.tuzi_i = function () {
		var t = new eui.Image();
		this.tuzi = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 101;
		t.source = "tu01_png";
		t.x = 137.35;
		t.y = 224.65;
		return t;
	};
	_proto.tuzi2_i = function () {
		var t = new eui.Rect();
		this.tuzi2 = t;
		t.alpha = 0;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 8;
		t.height = 16;
		t.width = 20;
		t.x = 136.1;
		t.y = 227.98;
		return t;
	};
	_proto.count_0_i = function () {
		var t = new eui.Label();
		this.count_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 172.66;
		t.x = 681.67;
		t.y = 34.33;
		return t;
	};
	_proto.count_1_i = function () {
		var t = new eui.Label();
		this.count_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 172.66;
		t.x = 999.67;
		t.y = 33;
		return t;
	};
	_proto.targetRect_i = function () {
		var t = new eui.Rect();
		this.targetRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 60;
		t.y = 621.32;
		return t;
	};
	return GameStageSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/NoticeDialog1Skin.exml'] = window.NewNoticeDialog1Skin = (function (_super) {
	__extends(NewNoticeDialog1Skin, _super);
	function NewNoticeDialog1Skin() {
		_super.call(this);
		this.skinParts = ["bg_1","title_0","resetBtn","img_2","lose_gp","nextBtn","img_1","win_gp","closeBtn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this.bg_1_i(),this.title_0_i(),this.lose_gp_i(),this.win_gp_i(),this.closeBtn_i()];
	}
	var _proto = NewNoticeDialog1Skin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "success1Bg_png";
		t.x = 264.47;
		t.y = 158.5;
		return t;
	};
	_proto.title_0_i = function () {
		var t = new eui.Label();
		this.title_0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.stroke = 1.5;
		t.strokeColor = 0x3a4c00;
		t.text = "9999";
		t.textAlign = "center";
		t.width = 125;
		t.x = 565;
		t.y = 373;
		return t;
	};
	_proto.lose_gp_i = function () {
		var t = new eui.Group();
		this.lose_gp = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.width = 827.69;
		t.x = 244.64;
		t.y = 245;
		t.elementsContent = [this.resetBtn_i(),this.img_2_i(),this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Image();
		this.resetBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 134;
		t.source = "resetBtn_png";
		t.y = 341.5;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "reward_title2_png";
		t.x = 74.33;
		t.y = -31;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tuzinanguo_png";
		t.x = 566;
		t.y = -111;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shibai_png";
		t.x = 157.33;
		t.y = 252.12;
		return t;
	};
	_proto.win_gp_i = function () {
		var t = new eui.Group();
		this.win_gp = t;
		t.anchorOffsetX = 0;
		t.width = 825.12;
		t.x = 245.97;
		t.y = 244;
		t.elementsContent = [this.nextBtn_i(),this.img_1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "nextBtn_png";
		t.x = 140.67;
		t.y = 342.5;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "reward_title1_png";
		t.x = 82.03;
		t.y = -36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "chengong_png";
		t.x = 245.02;
		t.y = 253.12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tuzikaixin_png";
		t.x = 538.36;
		t.y = -85.5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "close1Btn_png";
		t.x = 784.33;
		t.y = 586.5;
		return t;
	};
	return NewNoticeDialog1Skin;
})(eui.Skin);generateEUI.paths['resource/myskins/NoticeDialogSkin.exml'] = window.NewNoticeDialogSkin = (function (_super) {
	__extends(NewNoticeDialogSkin, _super);
	function NewNoticeDialogSkin() {
		_super.call(this);
		this.skinParts = ["noticeDialogCloseBtn","btnGuanBi"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.noticeDialogCloseBtn_i(),this.btnGuanBi_i()];
	}
	var _proto = NewNoticeDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tipInfo_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "";
		t.textAlign = "center";
		t.width = 103;
		t.x = 537;
		t.y = 443;
		return t;
	};
	_proto.noticeDialogCloseBtn_i = function () {
		var t = new eui.Image();
		this.noticeDialogCloseBtn = t;
		t.source = "closeBtn_png";
		t.visible = false;
		t.x = 986;
		t.y = 142;
		return t;
	};
	_proto.btnGuanBi_i = function () {
		var t = new eui.Rect();
		this.btnGuanBi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.01;
		t.height = 80.61;
		t.width = 180.61;
		t.x = 570;
		t.y = 552;
		return t;
	};
	return NewNoticeDialogSkin;
})(eui.Skin);