<script>
	//@ts-check
	import GearCreatorAugment from './GearCreator__augment.svelte';

	class Gear {
		/**
		 * @param type {string} - 'weapon' or 'armor'
		 * @param name {string} - Name of gear.
		 * @param augments {array} - Array of Augment Objects.
		 */
		constructor(type, name, augments) {
			this.type = type; // String
			this.name = name; // Name
			this.augments = augments; // Array of Augments
		}
	}
	// Form Values
	let type;
	let name;
	let augmentName;
	let battlePower;
	let effectStat;
	let effectValue;

	function handleSubmit() {
		let out; // New Gear

		return out;
	}

	// TODO: Export AugmentEffect into Augment, then Augment into GearCreator for submit handler.
	// TODO: Create data.js for handling gear.
</script>

<div class="bg-white p-4">
	<form class="flex flex-col gap-4">
		<h1 class="text-center font-bold">New Gear</h1>

		<label>
			Type
			<select bind:value={type}>
				<option value="weapon"> Weapon </option>
				<option value="armor"> Armor </option>
			</select>
		</label>

		<label>
			Name
			<input required type="text" bind:value={name} />
		</label>

		<div>
			<h2 class="text-center font-bold">Augments</h2>
			<GearCreatorAugment />
		</div>

		<button
			class="rounded-full bg-black p-2 text-white"
			on:click|preventDefault={handleSubmit}>Submit</button
		>
	</form>
</div>
