const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid
	];
};
self.C3_JsPropNameTable = [
	{dca45bddd5ce4b6694171c1978aa4fec: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{c71e27833bb94d39a599e326a0de9fbaremovebgpreview: 0},
	{Sprite: 0},
	{Sólido: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	dca45bddd5ce4b6694171c1978aa4fec: class extends self.ISpriteInstance {},
	c71e27833bb94d39a599e326a0de9fbaremovebgpreview: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}