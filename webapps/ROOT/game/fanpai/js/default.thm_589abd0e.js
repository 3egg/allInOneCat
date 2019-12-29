
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
})(eui.Skin);generateEUI.paths['resource/myskins/GameControl1Skin..exml'] = window.GameControl1Skin = (function (_super) {
__extends(GameControl1Skin, _super);
function GameControl1Skin() {
	_super.call(this);
	this.skinParts = ["item_0","item_1","item_2","item_3","item_4","item_5","item_6","item_7"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this.item_0_i(),this.item_1_i(),this.item_2_i(),this.item_3_i(),this.item_4_i(),this.item_5_i(),this.item_6_i(),this.item_7_i()];
}
var _proto = GameControl1Skin.prototype;

_proto.item_0_i = function () {
	var t = new eui.Image();
	this.item_0 = t;
	t.source = "tile1_png";
	t.x = 481;
	t.y = 207;
	return t;
};
_proto.item_1_i = function () {
	var t = new eui.Image();
	this.item_1 = t;
	t.source = "tile1_png";
	t.x = 692;
	t.y = 207;
	return t;
};
_proto.item_2_i = function () {
	var t = new eui.Image();
	this.item_2 = t;
	t.source = "tile1_png";
	t.x = 903;
	t.y = 207;
	return t;
};
_proto.item_3_i = function () {
	var t = new eui.Image();
	this.item_3 = t;
	t.source = "tile1_png";
	t.x = 1114;
	t.y = 207;
	return t;
};
_proto.item_4_i = function () {
	var t = new eui.Image();
	this.item_4 = t;
	t.source = "tile1_png";
	t.x = 481;
	t.y = 378;
	return t;
};
_proto.item_5_i = function () {
	var t = new eui.Image();
	this.item_5 = t;
	t.source = "tile1_png";
	t.x = 692;
	t.y = 378;
	return t;
};
_proto.item_6_i = function () {
	var t = new eui.Image();
	this.item_6 = t;
	t.source = "tile1_png";
	t.x = 903;
	t.y = 378;
	return t;
};
_proto.item_7_i = function () {
	var t = new eui.Image();
	this.item_7 = t;
	t.source = "tile1_png";
	t.x = 1114;
	t.y = 378;
	return t;
};
return GameControl1Skin;
})(eui.Skin);generateEUI.paths['resource/myskins/GameControl2Skin.exml'] = window.GameControl2Skin = (function (_super) {
__extends(GameControl2Skin, _super);
function GameControl2Skin() {
	_super.call(this);
	this.skinParts = ["item_0","item_1","item_2","item_3","item_4","item_5","item_6","item_7","item_8","item_9","item_10","item_11"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this.item_0_i(),this.item_1_i(),this.item_2_i(),this.item_3_i(),this.item_4_i(),this.item_5_i(),this.item_6_i(),this.item_7_i(),this.item_8_i(),this.item_9_i(),this.item_10_i(),this.item_11_i()];
}
var _proto = GameControl2Skin.prototype;

_proto.item_0_i = function () {
	var t = new eui.Image();
	this.item_0 = t;
	t.source = "tile1_png";
	t.x = 481;
	t.y = 122;
	return t;
};
_proto.item_1_i = function () {
	var t = new eui.Image();
	this.item_1 = t;
	t.source = "tile1_png";
	t.x = 692;
	t.y = 122;
	return t;
};
_proto.item_2_i = function () {
	var t = new eui.Image();
	this.item_2 = t;
	t.source = "tile1_png";
	t.x = 903;
	t.y = 122;
	return t;
};
_proto.item_3_i = function () {
	var t = new eui.Image();
	this.item_3 = t;
	t.source = "tile1_png";
	t.x = 1114;
	t.y = 122;
	return t;
};
_proto.item_4_i = function () {
	var t = new eui.Image();
	this.item_4 = t;
	t.source = "tile1_png";
	t.x = 481;
	t.y = 293;
	return t;
};
_proto.item_5_i = function () {
	var t = new eui.Image();
	this.item_5 = t;
	t.source = "tile1_png";
	t.x = 692;
	t.y = 293;
	return t;
};
_proto.item_6_i = function () {
	var t = new eui.Image();
	this.item_6 = t;
	t.source = "tile1_png";
	t.x = 903;
	t.y = 293;
	return t;
};
_proto.item_7_i = function () {
	var t = new eui.Image();
	this.item_7 = t;
	t.source = "tile1_png";
	t.x = 1114;
	t.y = 293;
	return t;
};
_proto.item_8_i = function () {
	var t = new eui.Image();
	this.item_8 = t;
	t.source = "tile1_png";
	t.x = 481;
	t.y = 464;
	return t;
};
_proto.item_9_i = function () {
	var t = new eui.Image();
	this.item_9 = t;
	t.source = "tile1_png";
	t.x = 692;
	t.y = 464;
	return t;
};
_proto.item_10_i = function () {
	var t = new eui.Image();
	this.item_10 = t;
	t.source = "tile1_png";
	t.x = 903;
	t.y = 464;
	return t;
};
_proto.item_11_i = function () {
	var t = new eui.Image();
	this.item_11 = t;
	t.source = "tile1_png";
	t.x = 1114;
	t.y = 464;
	return t;
};
return GameControl2Skin;
})(eui.Skin);generateEUI.paths['resource/myskins/GameControlSkin.exml'] = window.GameControlSkin = (function (_super) {
__extends(GameControlSkin, _super);
function GameControlSkin() {
	_super.call(this);
	this.skinParts = ["item_0","item_1","item_2","item_3","item_4","item_5"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this.item_0_i(),this.item_1_i(),this.item_2_i(),this.item_3_i(),this.item_4_i(),this.item_5_i()];
}
var _proto = GameControlSkin.prototype;

_proto.item_0_i = function () {
	var t = new eui.Image();
	this.item_0 = t;
	t.source = "tile1_png";
	t.x = 517;
	t.y = 207;
	return t;
};
_proto.item_1_i = function () {
	var t = new eui.Image();
	this.item_1 = t;
	t.source = "tile1_png";
	t.x = 757;
	t.y = 207;
	return t;
};
_proto.item_2_i = function () {
	var t = new eui.Image();
	this.item_2 = t;
	t.source = "tile1_png";
	t.x = 997;
	t.y = 207;
	return t;
};
_proto.item_3_i = function () {
	var t = new eui.Image();
	this.item_3 = t;
	t.source = "tile1_png";
	t.x = 517;
	t.y = 395;
	return t;
};
_proto.item_4_i = function () {
	var t = new eui.Image();
	this.item_4 = t;
	t.source = "tile1_png";
	t.x = 757;
	t.y = 395;
	return t;
};
_proto.item_5_i = function () {
	var t = new eui.Image();
	this.item_5 = t;
	t.source = "tile1_png";
	t.x = 997;
	t.y = 395;
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
	//TODO this.skinParts = ["bg_1","endBtn","restartBtn","nextGameBtn"];
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
	//TODO t.elementsContent = [this.bg_1_i(),this.endBtn_i(),this.restartBtn_i(),this.nextGameBtn_i()];
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
	this.skinParts = ["bg_1","bg_2","return_btn","sound_btn","sound1_btn","help_btn","count_0","count_1","count_2","info_1","info_3","info_2"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this.bg_1_i(),this.bg_2_i(),this.return_btn_i(),this.sound_btn_i(),this.sound1_btn_i(),this._Group1_i(),this.info_1_i(),this.info_3_i(),this.info_2_i()];
}
var _proto = GameStageSkin.prototype;

_proto.bg_1_i = function () {
	var t = new eui.Image();
	this.bg_1 = t;
	t.source = "cloud_png";
	t.top = 39;
	t.x = 205;
	return t;
};
_proto.bg_2_i = function () {
	var t = new eui.Image();
	this.bg_2 = t;
	t.source = "plane_png";
	t.x = 829;
	t.y = 19;
	return t;
};
_proto.return_btn_i = function () {
	var t = new eui.Image();
	this.return_btn = t;
	t.scaleX = 1;
	t.scaleY = 1;
	t.source = "backBtn_png";
	t.x = 85;
	t.y = 23;
	return t;
};
_proto.sound_btn_i = function () {
	var t = new eui.Image();
	this.sound_btn = t;
	t.scaleX = 1;
	t.scaleY = 1;
	t.source = "sound_on_png";
	t.x = 1193;
	t.y = 23;
	return t;
};
_proto.sound1_btn_i = function () {
	var t = new eui.Image();
	this.sound1_btn = t;
	t.scaleX = 1;
	t.scaleY = 1;
	t.source = "sound_off_png";
	t.visible = false;
	t.x = 1192.34;
	t.y = 20.34;
	return t;
};
_proto._Group1_i = function () {
	var t = new eui.Group();
	t.anchorOffsetX = 0;
	t.anchorOffsetY = 0;
	t.left = 23;
	t.top = 79;
	// TODO: t.elementsContent = [this._Image1_i(),this.help_btn_i(),this.count_0_i(),this.count_1_i(),this.count_2_i()];
	t.elementsContent = [this._Image1_i(),this.count_0_i(),this.count_1_i(),this.count_2_i()];
	return t;
};
_proto._Image1_i = function () {
	var t = new eui.Image();
	t.source = "barBg_png";
	t.x = 0;
	t.y = 0;
	return t;
};
_proto.help_btn_i = function () {
	var t = new eui.Image();
	this.help_btn = t;
	t.source = "helpBtn_png";
	t.x = 108;
	t.y = 554;
	return t;
};
_proto.count_0_i = function () {
	var t = new eui.Label();
	this.count_0 = t;
	t.text = "0";
	t.textAlign = "center";
	t.textColor = 0xffffff;
	t.width = 100;
	t.x = 235;
	t.y = 302;
	return t;
};
_proto.count_1_i = function () {
	var t = new eui.Label();
	this.count_1 = t;
	t.text = "0";
	t.textAlign = "center";
	t.textColor = 0xffffff;
	t.width = 100;
	t.x = 238;
	t.y = 384.92;
	return t;
};
_proto.count_2_i = function () {
	var t = new eui.Label();
	this.count_2 = t;
	t.text = "0";
	t.textAlign = "center";
	t.textColor = 0xffffff;
	t.width = 100;
	t.x = 240;
	t.y = 470.46;
	return t;
};
_proto.info_1_i = function () {
	var t = new eui.Component();
	this.info_1 = t;
	t.skinName = "GameControlSkin";
	t.visible = false;
	t.x = 0;
	t.y = 0;
	return t;
};
_proto.info_3_i = function () {
	var t = new eui.Component();
	this.info_3 = t;
	t.skinName = "GameControl2Skin";
	t.visible = false;
	t.x = 0;
	t.y = 0;
	return t;
};
_proto.info_2_i = function () {
	var t = new eui.Component();
	this.info_2 = t;
	t.skinName = "GameControl1Skin";
	t.visible = false;
	t.x = 0;
	t.y = 0;
	return t;
};
return GameStageSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/NoticeDialog1Skin.exml'] = window.NewNoticeDialog1Skin = (function (_super) {
__extends(NewNoticeDialog1Skin, _super);
function NewNoticeDialog1Skin() {
	_super.call(this);
	this.skinParts = ["bg_1","effect_gp","title_1","title_0","resetBtn","img_2","txt_3","lose_gp","nextBtn","img_1","txt_1","icon","win_gp","closeBtn"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this._Rect1_i(),this.bg_1_i(),this.effect_gp_i(),this.title_1_i(),this.title_0_i(),this.lose_gp_i(),this.win_gp_i(),this.closeBtn_i()];
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
	t.x = 167;
	t.y = 75;
	return t;
};
_proto.effect_gp_i = function () {
	var t = new eui.Group();
	this.effect_gp = t;
	t.anchorOffsetX = 0;
	t.anchorOffsetY = 0;
	t.height = 49;
	t.width = 48.66;
	t.x = 760;
	t.y = 62;
	t.layout = this._VerticalLayout1_i();
	return t;
};
_proto._VerticalLayout1_i = function () {
	var t = new eui.VerticalLayout();
	t.horizontalAlign = "center";
	t.verticalAlign = "top";
	return t;
};
_proto.title_1_i = function () {
	var t = new eui.Label();
	this.title_1 = t;
	t.anchorOffsetX = 0;
	t.bold = true;
	t.fontFamily = "Microsoft YaHei";
	t.size = 45;
	t.stroke = 1.5;
	t.strokeColor = 0x3a4c00;
	t.text = "1";
	t.textAlign = "center";
	t.width = 103;
	t.x = 443;
	t.y = 186;
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
	t.x = 527.5;
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
	t.elementsContent = [this.resetBtn_i(),this.img_2_i(),this.txt_3_i()];
	return t;
};
_proto.resetBtn_i = function () {
	var t = new eui.Image();
	this.resetBtn = t;
	t.anchorOffsetX = 0;
	t.anchorOffsetY = 0;
	t.left = 142;
	t.source = "resetBtn_png";
	t.y = 317;
	return t;
};
_proto.img_2_i = function () {
	var t = new eui.Image();
	this.img_2 = t;
	t.source = "reward_title2_png";
	t.x = 74;
	t.y = 0;
	return t;
};
_proto.txt_3_i = function () {
	var t = new eui.Image();
	this.txt_3 = t;
	t.source = "failText_png";
	t.x = 259;
	t.y = 225;
	return t;
};
_proto.win_gp_i = function () {
	var t = new eui.Group();
	this.win_gp = t;
	t.anchorOffsetX = 0;
	t.width = 825.12;
	t.x = 245.97;
	t.y = 244;
	t.elementsContent = [this.nextBtn_i(),this.img_1_i(),this.txt_1_i(),this.icon_i()];
	return t;
};
_proto.nextBtn_i = function () {
	var t = new eui.Image();
	this.nextBtn = t;
	t.anchorOffsetX = 0;
	t.anchorOffsetY = 0;
	t.source = "nextBtn_png";
	t.x = 142;
	t.y = 318;
	return t;
};
_proto.img_1_i = function () {
	var t = new eui.Image();
	this.img_1 = t;
	t.source = "reward_title1_png";
	t.x = 73;
	t.y = 0;
	return t;
};
_proto.txt_1_i = function () {
	var t = new eui.Label();
	this.txt_1 = t;
	t.anchorOffsetX = 0;
	t.bold = true;
	t.fontFamily = "Microsoft YaHei";
	t.italic = true;
	t.size = 30;
	t.text = "继续努力哦！";
	t.textColor = 0xF48004;
	t.width = 237;
	t.x = 424.92;
	t.y = 237;
	return t;
};
_proto.icon_i = function () {
	var t = new eui.Image();
	this.icon = t;
	t.scaleX = 0.5;
	t.scaleY = 0.5;
	t.source = "item_1_1_png";
	t.x = 305.92;
	t.y = 209.75;
	return t;
};
_proto.closeBtn_i = function () {
	var t = new eui.Image();
	this.closeBtn = t;
	t.source = "close1Btn_png";
	t.x = 791;
	t.y = 562;
	return t;
};
return NewNoticeDialog1Skin;
})(eui.Skin);generateEUI.paths['resource/myskins/NoticeDialogSkin.exml'] = window.NewNoticeDialogSkin = (function (_super) {
__extends(NewNoticeDialogSkin, _super);
var NewNoticeDialogSkin$Skin4 = 	(function (_super) {
	__extends(NewNoticeDialogSkin$Skin4, _super);
	function NewNoticeDialogSkin$Skin4() {
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
	var _proto = NewNoticeDialogSkin$Skin4.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "closeBtn2_png";
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
	return NewNoticeDialogSkin$Skin4;
})(eui.Skin);

function NewNoticeDialogSkin() {
	_super.call(this);
	this.skinParts = ["noticeDialogCloseBtn","closeBtn"];
	
	this.height = 750;
	this.width = 1334;
	this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.noticeDialogCloseBtn_i(),this.closeBtn_i()];
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
	t.x = 1016;
	t.y = 130;
	return t;
};
_proto.closeBtn_i = function () {
	var t = new eui.Button();
	this.closeBtn = t;
	t.horizontalCenter = 0;
	t.label = "";
	t.y = 552;
	t.skinName = NewNoticeDialogSkin$Skin4;
	return t;
};
return NewNoticeDialogSkin;
})(eui.Skin);