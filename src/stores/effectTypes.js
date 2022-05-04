const effTypeMap = [
	{
		name: 'etc',
		unit: '%',
		effs: ['DMG Res', 'Pot']
	},
	{
		name: 'flat',
		unit: '~',
		effs: ['EXP Grind']
	},
	{
		name: 'stat',
		unit: '+',
		effs: ['HP', 'PP']
	},

	{
		name: 'normal pot',
		unit: '%',
		effs: ['MEL Pot', 'RNG Pot', 'TEC Pot']
	},
	{
		name: 'element pot',
		unit: '%',
		effs: [
			'Fire Pot',
			'Ice Pot',
			'Lightning Pot',
			'Wind Pot',
			'Light Pot',
			'Dark Pot'
		]
	},
	{
		name: 'element res',
		unit: '%',
		effs: [
			'Burn Res',
			'Freeze Res',
			'Shock Res',
			'Blind Res',
			'Panic Res',
			'Poison Res',
			'Pain Res'
		]
	}
];

const out = [];
effTypeMap.forEach((type) => {
	type.effs.forEach((eff) => {
		out.push({
			type: type.name,
			name: eff,
			unit: type.unit
		});
	});
});

export const effectTypes = out;
