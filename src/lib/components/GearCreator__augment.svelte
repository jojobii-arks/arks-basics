<script>
	import GearCreatorAugmentEffect from './GearCreator__augment__effect.svelte';
	class Augment {
		/**
		 * @param name {string} - Name of Augment
		 * @param battlePower {number} - Battle Power of Augment
		 * @param effects {Effect[]} - Array of Effects of Augment
		 */
		constructor(name, battlePower, effects) {
			this.name = name;
			this.battlePower = battlePower;
			this.effects = effects;
		}
	}

	export let augment = new Augment(augmentName, battlePower, []);

	$: augment = new Augment(augmentName, battlePower);

	let augmentName;
	let battlePower;
</script>

<div class="flex flex-col">
	<div class="flex gap-4">
		<label>
			Augment Name
			<input type="text" bind:value={augmentName} />
		</label>
		<label>
			Battle Power
			<input class="w-20" type="number" bind:value={battlePower} />
		</label>
	</div>
	<GearCreatorAugmentEffect />
</div>
