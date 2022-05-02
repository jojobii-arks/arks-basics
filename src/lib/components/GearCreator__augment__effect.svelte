<script>
	//@ts-check
	class Effect {
		/**
		 * @param stat {Stat} - Targeted stat of effect.
		 * @param value {number} - Value of effect ( 1.25% would be 1.25, not 0.0125 )
		 */
		constructor(stat, value) {
			this.stat = stat;
			this.value = value;
		}
	}

	class Stat {
		/**
		 * @param name - Name of stat
		 * @param unit {string} - Unit of stat's value ( % percent, + add/subtract, ~ flat)
		 */
		constructor(name, unit) {
			this.name = name;
			this.unit = unit;
		}
	}

	// Data
	const dataAugmentStats = [
		new Stat('MEL Pot', '%'),
		new Stat('RNG Pot', '%'),
		new Stat('TEC Pot', '%'),
		new Stat('HP', '+'),
		new Stat('PP', '+')
	];

	// Exports
	let effectStat;
	let effectValue;

	export let effect = new Effect(effectStat, effectValue);
	$: effect = new Effect(effectStat, effectValue);
</script>

<div>
	<label>
		Augment Effect
		<select bind:value={effectStat}>
			{#each dataAugmentStats as effect}
				<option value={effect}>{effect.name}</option>
			{/each}
		</select>
	</label>
	{#if effectStat}
		<label>
			Augment Value
			<input class="w-20 text-right" type="number" bind:value={effectValue} />
			{effectStat.unit}
		</label>
	{/if}
</div>
