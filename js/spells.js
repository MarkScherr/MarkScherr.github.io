	var BARD_CANTRIP_LIST = [
		"Friends",
		"Mage Hand",
		"Mending",
		"Message",
		"Minor Illusion",
		"Prestidigitation"
	];
	var BARD_SPELL_LEVEL_1 = [
		"Disguise Self",
		"Dissonant Whispers",
		"Feather Fall",
		"Healing Word",
		"Heroism",
		"Identify",
		"Silent Image",
		"Silvery Barbs",
		"Sleep",
		"Tasha\'s Hideous Laughter"
	];
	var BARD_SPELL_LEVEL_2 = [
		"Blindness/Deafness",
		"Calm Emotions",
		"Enhance Ability",
		"Enlarge/Reduce",
		"Gift of Gab",
		"Invisibility",
		"Knock",
		"Nathair\'s Mischief",
		"Pyrotechnics",
		"See Invisibility",
		"Shatter",
		"Silence",
		"Suggestion"
	];
	var BARD_SPELL_LEVEL_3 = [
		"Bestow Curse",
		"Clairvoyance",
		"Dispel Magic",
		"Enemies Abound",
		"Feign Death",
		"Fireball",
		"Intellect Fortress",
		"Leomund\'s Tiny Hut",
		"Nondetection",
		"Plant Growth"
	];
	var BARD_SPELL_LEVEL_4 = [
		"Dimension Door",
		"Phantasmal Killer",
		"Polymorph",
		"Raulothim\'s Psychic Lance"
	];
	var BARD_SPELLS_NOT_EQUIPPED = [
		":cantrips:",
		"Blade Ward",
		"Dancing Lights",
		"Light",
		"Thunderclap",
		"True Strike",
		"Vicious Mockery",
		":LEVEL1 SPELLS:",
		"Animal Friendship",
		"Bane",
		"Charm Person",
		"Color Spray",
		"Command",
		"Comprehend Languages",
		"Cure Wounds",
		"Detect Magic",
		"Distort Value",
		"Earth Tremor",
		"Faerie Fire",
		"Illusory Script",
		"Longstrider",
		"Speak with Animals",
		"Thunderwave",
		"Unseen Servant",
		":LEVEL2 SPELLS:",
		"Aid",
		"Animal Messenger",
		"Borrowed Knowledge",
		"Cloud of Daggers",
		"Crown of Madness",
		"Detect Thoughts",
		"Enthrall",
		"Heat Metal",
		"Hold Person",
		"Kinetic Jaunt",
		"Lesser Restoration",
		"Locate Animals or Plants",
		"Locate Object",
		"Magic Mouth",
		"Mirror Image",
		"Skywrite",
		"Warding Wind",
		"Zone of Truth",
		":LEVEL3 SPELLS:",
		"Catnap",
		"Fast Friends",
		"Fear",
		"Glyph of Warding",
		"Hypnotic Pattern",
		"Major Image",
		"Mass Healing Word",
		"Motivational Speech",
		"Sending",
		"Slow",
		"Speak with Dead",
		"Speak with Plants",
		"Stinking Cloud",
		"Tongues",
		":LEVEL4 SPELLS:",
		"Charm Monster",
		"Compulsion",
		"Confusion",
		"Freedom of Movement",
		"Greater Invisibility",
		"Hallucinatory Terrain",
		"Locate Creature"
	];



	var BARD_SPELL_DETAIL = new Map();
	BARD_SPELL_DETAIL.set("Blade Ward", 
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S<br>
Duration: 1 round<br><br>

You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, 
you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.
		`);
	BARD_SPELL_DETAIL.set("Dancing Lights", 
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S, M (a bit of phosphorus or wychwood, or a glowworm)<br>
Duration: Concentration, up to 1 minute
<br><br>
You create up to four torch-sized lights within range, making them appear as torches, lanterns, 
or glowing orbs that hover in the air for the duration. You can also combine the four lights 
into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light 
sheds dim light in a 10-foot radius.
<br><br>
As a bonus action on your turn, you can move the lights up to 60 feet to a new spot 
within range. A light must be within 20 feet of another light created by this spell, and a 
light winks out if it exceeds the spell’s range.
		`);
	BARD_SPELL_DETAIL.set("Friends",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: S, M (a small amount of makeup applied to the face as this spell is cast)<br>
Duration: Concentration, up to 1 minute
<br><br>
For the duration, you have advantage on all Charisma checks directed at one creature of your 
choice that isn't hostile toward you. When the spell ends, the creature realizes that you used 
magic to influence its mood and becomes hostile toward you. A creature prone to violence might 
attack you. Another creature might seek retribution in other ways (at the DM's discretion), 
depending on the nature of your interaction with it.
		`);
	BARD_SPELL_DETAIL.set("Light",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, M (a firefly or phosphorescent moss)<br>
Duration: 1 hour
<br><br>
You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, 
the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. 
The light can be colored as you like. Completely covering the object with something opaque 
blocks the light. The spell ends if you cast it again or dismiss it as an action.
<br><br>
If you target an object held or worn by a hostile creature, that creature must 
succeed on a Dexterity saving throw to avoid the spell.
		`);
	BARD_SPELL_DETAIL.set("Mage Hand", 
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S<br>
Duration: 1 minute<br><br>

A spectral, floating hand appears at a point you choose within range. 
The hand lasts for the duration or until you dismiss it as an action. 
The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.
<br><br>
You can use your action to control the hand. You can use the hand to manipulate an object,
 open an unlocked door or container, stow or retrieve an item from an open container, 
 or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.
<br><br>
The hand can’t attack, activate magical items, or carry more than 10 pounds.
		`);
	BARD_SPELL_DETAIL.set("Mending",
		`
Casting Time: 1 minute<br>
Range: Touch<br>
Components: V, S, M (two lodestones)<br>
Duration: Instantaneous<br><br>

This spell repairs a single break or tear in an object you touch, such as a broken chain link, 
two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear 
is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.

This spell can physically repair a magic item or construct, but the spell can’t restore magic 
to such an object.


		`);
	BARD_SPELL_DETAIL.set("Message",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S, M (a short piece of copper wire)<br>
Duration: 1 round<br><br>

You point your finger toward a creature within range and whisper a message. 
The target (and only the target) hears the message and can reply in a whisper that only you can hear.
<br><br>
You can cast this spell through solid objects if you are familiar with the target and know 
it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, 
a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to 
follow a straight line and can travel freely around corners or through openings.


		`);
	BARD_SPELL_DETAIL.set("Minor Illusion",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: S, M (a bit of fleece)<br>
Duration: 1 minute
<br><br>
You create a sound or an image of an object within range that lasts for the duration. 
The illusion also ends if you dismiss it as an action or cast this spell again.
<br><br>
If you create a sound, its volume can range from a whisper to a scream. It can be 
your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other 
sound you choose. The sound continues unabated throughout the duration, or you can 
make discrete sounds at different times before the spell ends.
<br><br>
If you create an image of an object—such as a chair, muddy footprints, or a small 
chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, 
smell, or any other sensory effect. Physical interaction with the image reveals it to 
be an illusion, because things can pass through it.
<br><br>
If a creature uses its action to examine the sound or image, the creature can determine 
that it is an illusion with a successful Intelligence (Investigation) check against your 
spell save DC. If a creature discerns the illusion for what it is, the illusion becomes 
faint to the creature.


		`);
	BARD_SPELL_DETAIL.set("Prestidigitation",
		`
Casting Time: 1 action<br>
Range: 10 feet<br>
Components: V, S<br>
Duration: Up to 1 hour
<br><br>
This spell is a minor magical trick that novice spellcasters use for practice. You 
create one of the following magical effects within range:
<br><br>
You create an instantaneous, harmless sensory effect, such as a shower of sparks, 
a puff of wind, faint musical notes, or an odd odor.
You instantaneously light or snuff out a candle, a torch, or a small campfire.<br>
You instantaneously clean or soil an object no larger than 1 cubic foot.<br>
You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.<br>
You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.<br>
You create a nonmagical trinket or an illusory image that can fit in your hand and that 
lasts until the end of your next turn.<br><br>
If you cast this spell multiple times, you can have up to three of its non-instantaneous 
effects active at a time, and you can dismiss such an effect as an action.
		`);
	BARD_SPELL_DETAIL.set("Thunderclap", 
		`
Casting Time: 1 action<br>
Range: Self (5-foot radius)<br>
Components: S<br>
Duration: Instantaneous<br><br>

You create a burst of thunderous sound, which can be heard 100 feet away. Each creature 
other than you within 5 feet of you must make a Constitution saving throw. On a failed save, 
the creature takes 1d6 thunder damage.
<br><br>
At Higher Levels. The spell’s damage increases by 1d6 when you reach 5th level (2d6), 
11th level (3d6), and 17th level (4d6).


		`);
	BARD_SPELL_DETAIL.set("True Strike",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: S<br>
Duration: Concentration, up to 1 round<br><br>

You extend your hand and point a finger at a target in range. Your magic grants you a brief 
insight into the target’s defenses. On your next turn, you gain advantage on your first attack 
roll against the target, provided that this spell hasn’t ended.
		`);
	BARD_SPELL_DETAIL.set("Vicious Mockery",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous
<br><br>
You unleash a string of insults laced with subtle enchantments at a creature you can see within range. 
If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving 
throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the 
end of its next turn.
<br><br>
At Higher Levels. This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (
3d4), and 17th level (4d4).
		`);
	BARD_SPELL_DETAIL.set("Animal Friendship", 
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (a morsel of food)<br>
Duration: 24 hours
<br><br>
This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see 
within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, 
the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be 
charmed by you for the spell’s duration. If you or one of your companions harms the target, the spell ends.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
you can affect one additional beast for each slot level above 1st.


		`);
	BARD_SPELL_DETAIL.set("Bane",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (a drop of blood)<br>
Duration: Concentration, up to 1 minute
<br><br>
Up to three creatures of your choice that you can see within range must make Charisma saving throws. 
Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell 
ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target 
one additional creature for each slot level above 1st.
		`);

	BARD_SPELL_DETAIL.set("Charm Person",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S<br>
Duration: 1 hour
<br><br>
You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, 
and does so with advantage if you or your companions are fighting it. If it fails the saving throw, 
it is charmed by you until the spell ends or until you or your companions do anything harmful to it. 
The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows 
it was charmed by you.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
you can target one additional creature for each slot level above 1st. The creatures must 
be within 30 feet of each other when you target them.


		`);
	BARD_SPELL_DETAIL.set("Color Spray",
		`
Casting Time: 1 action<br>
Range: Self (15-foot cone)<br>
Components: V, S, M<br>
Duration: 1 round
<br><br>
A dazzling array of flashing, colored light springs from your hand. Roll 6d10, the total is how 
many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from 
you are affected in ascending order of their current hit points (ignoring unconscious creatures and 
creatures that can’t see).
<br><br>
Starting with the creature that has the lowest current hit points, each creature affected by this 
spell is blinded until the end of your next turn. Subtract each creature’s hit points from the total 
before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal 
to or less than the remaining total for the creature to be affected.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
roll an additional 2d10 for each slot level above 1st.


		`);
	BARD_SPELL_DETAIL.set("Command",
		`
CommandCasting Time: 1 action<br>
Range: 60 feet<br>
Components: V<br>
Duration: 1 round
<br><br>
You speak a one-word command to a creature you can see within range. The target must succeed 
on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if 
the target is undead, if it doesn’t understand your language, or if your command is directly 
harmful to it. Some typical commands and their effects follow. You might issue a command other 
than one described here. If you do so, the DM determines how the target behaves. If the target 
can’t follow your command, the spell ends.

Approach. The target moves toward you by the shortest and most direct route, ending its turn if 
it moves within 5 feet of you.

Drop. The target drops whatever it is holding and then ends its turn.

Flee. The target spends its turn moving away from you by the fastest available means.

Grovel. The target falls prone and then ends its turn.

Halt. The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.
		`);
	BARD_SPELL_DETAIL.set("Comprehend Languages",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a pinch of soot and salt)<br>
Duration: 1 hour<br><br>

For the duration, you understand the literal meaning of any spoken language that you hear. 
You also understand any written language that you see, but you must be touching the surface on 
which the words are written. It takes about 1 minute to read one page of text.
<br><br>
This spell doesn’t decode secret messages in a text or glyph, such as an arcane sigil, that isn’t 
part of a written language.


		`);
	BARD_SPELL_DETAIL.set("Cure Wounds",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S<br>
Duration: Instantaneous<br><br>

A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. 
This spell has no effect on undead or constructs.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
the healing increases by 1d8 for each slot level above 1st.		`);
	BARD_SPELL_DETAIL.set("Detect Magic",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S<br>
Duration: Concentration, up to 10 minutes<br><br>

For the duration, you sense the presence of magic within 30 feet of you. If you sense 
magic in this way, you can use your action to see a faint aura around any visible 
creature or object in the area that bears magic, and you learn its school of magic, if any.
<br><br>
The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of 
common metal, a thin sheet of lead, or 3 feet of wood or dirt.
		`);
	BARD_SPELL_DETAIL.set("Disguise Self",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S<br>
Duration: 1 hour<br><br>

You make yourself – including your clothing, armor, weapons, and other belongings on your 
person – look different until the spell ends or until you use your action to dismiss it. 
You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t 
change your body type, so you must adopt a form that has the same basic arrangement of limbs. 
Otherwise, the extent of the illusion is up to you.
<br><br>
The changes wrought by this spell fail to hold up to physical inspection. For example, 
if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone 
	who touches it would feel nothing or would feel your head and hair. If you use this spell 
to appear thinner than you are, the hand of someone who reaches out to touch you would bump into 
you while it was seemingly still in midair. To discern that you are disguised, a creature can use 
its action to inspect your appearance and must succeed on an Intelligence (Investigation) check 
against your spell save DC.
		`);

	BARD_SPELL_DETAIL.set("Dissonant Whispers",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous
<br><br>
You whisper a discordant melody that only one creature of your choice within range can hear, 
wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, 
it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as 
far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, 
such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have 
to move away. A deafened creature automatically succeeds on the save.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage 
increases by 1d6 for each slot level above 1st.


		`);

	BARD_SPELL_DETAIL.set("Distort Value",
		`
Casting Time: 1 minute<br>
Range: Touch<br>
Components: V<br>
Duration: 8 hours
<br><br>
You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value 
by adding illusionary flourish or reducing its perceived value by half with the help of illusionary 
dents and scratches. Anyone examining the object must roll an Investigation check against your spell DC.
<br><br>
At Higher Levels. When you cast this spell using a higher spell slot, you increase 
the size of the object by 1 foot per spell slot over 1st.
		`);
	BARD_SPELL_DETAIL.set("Earth Tremor",
		`
Casting Time: 1 action<br>
Range: Self (10-foot radius)<br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
You cause a tremor in the ground in a 10-foot radius. Each creature other than you in 
that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 
bludgeoning damage and is knocked prone. If the ground in that area is loose earth or 
stone, it becomes difficult terrain until cleared.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
the damage increases by 1d6 for each slot level above 1st.
		`);

	BARD_SPELL_DETAIL.set("Faerie Fire", 
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Concentration, up to 1 minute
<br><br>
Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice).

Any creature in the area when the spell is cast is also outlined in light if it fails a 
Dexterity saving throw. For the duration, objects and affected creatures shed dim light 
in a 10-foot radius.
<br><br>
Any attack roll against an affected creature or object has advantage if the attacker can see 
it, and the affected creature or object can’t benefit from being invisible.


		`);
	BARD_SPELL_DETAIL.set("Feather Fall",
		`
Casting Time: 1 reaction, which you take when you or a creature within 60 feet of you falls<br>
Range: 60 feet<br>
Components: V, M (a small feather or piece of down)<br>
Duration: 1 minute
<br><br>
Choose up to five falling creatures within range. A falling creature’s rate of descent 
slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, 
it takes no falling damage and can land on its feet, and the spell ends for that creature.		
`);

	BARD_SPELL_DETAIL.set("Healing Word",
		`
Casting Time: 1 bonus action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous<br><br>

A creature of your choice that you can see within range regains hit points equal to 1d4 + 
your spellcasting ability modifier. This spell has no effect on undead or constructs.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the 
healing increases by 1d4 for each slot level above 1st.


		`);
	BARD_SPELL_DETAIL.set("Heroism",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
A willing creature you touch is imbued with bravery. Until the spell ends, the 
creature is immune to being frightened and gains temporary hit points equal to 
your spellcasting ability modifier at the start of each of its turns. When the 
spell ends, the target loses any remaining temporary hit points from this spell.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
you can target one additional creature for each slot level above 1st.
		`);
	BARD_SPELL_DETAIL.set("Identify", 
		`
Casting Time: 1 minute<br>
Range: Touch<br>
Components: V, S, M (a pearl worth at least 100 gp and an owl feather)<br>
Duration: Instantaneous
<br><br>
You choose one object that you must touch throughout the casting of the spell. If it is a magic item
 or some other magic-imbued object, you learn its properties and how to use them, whether it 
 requires attunement to use, and how many charges it has, if any. You learn whether any spells 
 are affecting the item and what they are. If the item was created by a spell, you learn which 
 spell created it.
<br>
If you instead touch a creature throughout the casting, you learn what spells, if any, 
are currently affecting it.


		`);
	BARD_SPELL_DETAIL.set("Illusory Script",
		`
Casting Time: 1 minute<br>
Range: Touch<br>
Components: S, M (a lead-based ink worth at least 10 gp, which the spell consumes)<br>
Duration: 10 days
<br><br>
You write on parchment, paper, or some other suitable writing material and imbue it 
with a potent illusion that lasts for the duration.

To you and any creatures you designate when you cast the spell, the writing appears 
normal, written in your hand, and conveys whatever meaning you intended when you wrote 
the text. To all others, the writing appears as if it were written in an unknown or 
magical script that is unintelligible. Alternatively, you can cause the writing to 
appear to be an entirely different message, written in a different hand and language, 
though the language must be one you know.

Should the spell be dispelled, the original script and the illusion both disappear. 
A creature with truesight can read the hidden message.


		`);
	BARD_SPELL_DETAIL.set("Longstrider", 
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (a pinch of dirt)<br>
Duration: 1 hour
<br><br>
You touch a creature. The target’s speed increases by 10 feet until the spell ends.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or 
higher, you can target one additional creature for each slot level above 1st.


		`);
	BARD_SPELL_DETAIL.set("Silent Image",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a bit of fleece)<br>
Duration: Concentration, up to 10 minutes
<br><br>
You create the image of an object, a creature, or some other visible phenomenon 
that is no larger than a 15-foot cube. The image appears at a spot within range 
and lasts for the duration. The image is purely visual; it isn’t accompanied by 
sound, smell, or other sensory effects.
<br><br>
You can use your action to cause the image to move to any spot within range. 
As the image changes location, you can alter its appearance so that its movements 
appear natural for the image. For example, if you create an image of a creature and 
move it, you can alter the image so that it appears to be walking.
<br><br>
Physical interaction with the image reveals it to be an illusion, because things can 
pass through it. A creature that uses its action to examine the image can determine 
that it is an illusion with a successful Intelligence (Investigation) check against 
your spell save DC. If a creature discerns the illusion for what it is, the creature 
can see through the image.
		`);
	BARD_SPELL_DETAIL.set("Silvery Barbs",
		`
Casting Time: 1 reaction, which you take when a creature you can see within 60 feet of yourself 
succeeds on an attack roll, an ability check, or a saving throw<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous<br><br>

You magically distract the triggering creature and turn its momentary uncertainty 
into encouragement for another creature. The triggering creature must reroll the d20 
and use the lower roll.
<br><br>
You can then choose a different creature you can see within range (you can choose yourself). 
The chosen creature has advantage on the next attack roll, ability check, or saving throw it 
makes within 1 minute. A creature can be empowered by only one use of this spell at a time.

		`);
	BARD_SPELL_DETAIL.set("Sleep",
		`
Casting Time: 1 action<br>
Range: 90 feet<br>
Components: V, S, M (a pinch of fine sand, rose petals, or a cricket)<br>
Duration: 1 minute<br><br>

This spell sends creatures into a magical slumber. Roll 5d8, the total is how many 
hit points of creatures this spell can affect. Creatures within 20 feet of a point 
you choose within range are affected in ascending order of their current hit points 
(ignoring unconscious creatures).
<br><br>
Starting with the creature that has the lowest current hit points, each creature 
affected by this spell falls unconscious until the spell ends, the sleeper takes 
damage, or someone uses an action to shake or slap the sleeper awake. Subtract each 
creature’s hit points from the total before moving on to the creature with the next lowest 
hit points. A creature’s hit points must be equal to or less than the remaining total for 
that creature to be affected. Undead and creatures immune to being charmed aren’t affected 
by this spell.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, roll
 an additional 2d8 for each slot level above 1st.
		`);
	BARD_SPELL_DETAIL.set("Speak with Animals", 
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S<br>
Duration: 10 minutes
<br><br>
You gain the ability to comprehend and verbally communicate with beasts for
 the duration. The knowledge and awareness of many beasts is limited by their 
 intelligence, but at minimum, beasts can give you information about nearby 
 locations and monsters, including whatever they can perceive or have perceived 
 within the past day. You might be able to persuade a beast to perform a small 
 favor for you, at the DM’s discretion.


		`);
	BARD_SPELL_DETAIL.set("Tasha\'s Hideous Laughter",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (tiny tarts and a feather that is waved in the air)<br>
Duration: Concentration, up to 1 minute<br><br>

A creature of your choice that you can see within range perceives everything as 
hilariously funny and falls into fits of laughter if this spell affects it. The 
target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated 
and unable to stand up for the duration. A creature with an Intelligence score of 4 or 
less isn’t affected.
<br><br>
At the end of each of its turns, and each time it takes damage, 
the target can make another Wisdom saving throw. The target has 
advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.

		`);
	BARD_SPELL_DETAIL.set("Thunderwave",
		`
Casting Time: 1 action<br>
Range: Self (15-foot cube)<br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube 
originating from you must make a Constitution saving throw. On a failed save, a 
creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a 
successful save, the creature takes half as much damage and isn’t pushed.
<br><br>
In addition, unsecured objects that are completely within the area of effect are 
automatically pushed 10 feet away from you by the spell’s effect, and the spell 
emits a thunderous boom audible out to 300 feet.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, 
the damage increases by 1d8 for each slot level above 1st.

		`);
	BARD_SPELL_DETAIL.set("Unseen Servant",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a piece of string and a bit of wood)<br>
Duration: 1 hour<br><br>

This spell creates an invisible, mindless, shapeless, Medium force that performs simple 
tasks at your command until the spell ends. The servant springs into existence in an 
unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, 
and it can’t attack. If it drops to 0 hit points, the spell ends.
<br><br>
Once on each of your turns as a bonus action, you can mentally command the servant to move 
up to 15 feet and interact with an object. The servant can perform simple tasks that a 
human servant could do, such as fetching things, cleaning, mending, folding clothes, 
lighting fires, serving food, and pouring wine. Once you give the command, the servant 
performs the task to the best of its ability until it completes the task, then waits for 
your next command.
<br><br>
If you command the servant to perform a task that would move it more than 60 feet away 
from you, the spell ends.


		`);
	BARD_SPELL_DETAIL.set("Aid",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (a tiny strip of white cloth)<br>
Duration: 8 hours
<br><br>
Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within 
range. Each target’s hit point maximum and current hit points increase by 5 for the duration.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a 
target’s hit points increase by an additional 5 for each slot level above 2nd.


		`);
	BARD_SPELL_DETAIL.set("Animal Messenger",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (a morsel of food)<br>
Duration: 24 hours
<br><br>
By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see 
within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must 
have visited, and a recipient who matches a general description, such as “a man or woman 
dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” 
You also speak a message of up to twenty-five words. The target beast travels for the 
duration of the spell toward the specified location, covering about 50 miles per 
24 hours for a flying messenger, or 25 miles for other animals.
<br><br>
When the messenger arrives, it delivers your message to the creature that you described, 
replicating the sound of your voice. The messenger speaks only to a creature matching the 
description you gave. If the messenger doesn’t reach its destination before the spell ends, 
the message is lost, and the beast makes its way back to where you cast this spell.
<br><br>
At Higher Levels. If you cast this spell using a spell slot of 3rd level or higher, the 
duration of the spell increases by 48 hours for each slot level above 2nd.


		`);
	BARD_SPELL_DETAIL.set("Blindness/Deafness",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V<br>
Duration: 1 minute
<br><br>
You can blind or deafen a foe. Choose one creature that you can see within range to make a 
Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) 
for the duration. At the end of each of its turns, the target can make a Constitution saving 
throw. On a success, the spell ends.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can 
target one additional creature for each slot level above 2nd.


		`);
	BARD_SPELL_DETAIL.set("Borrowed Knowledge",
		`

Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a book worth at least 25 gp)<br>
Duration: 1 hour
<br><br>
You draw on knowledge from spirits of the past. Choose one skill in which you lack proficiency. 
For the spell's duration, you have proficiency in the chosen skill. The spell ends early if you 
cast it again.

		`);
	BARD_SPELL_DETAIL.set("Calm Emotions",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius 
sphere centered on a point you choose within range must make a Charisma saving throw; a creature 
can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose 
one of the following two effects. You can suppress any effect causing a target to be charmed or 
frightened. When this spell ends, any suppressed effect resumes, provided that its duration has 
not expired in the meantime.
<br><br>
Alternatively, you can make a target indifferent about creatures of your choice that it 
is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if 
it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile 
again, unless the DM rules otherwise.


		`);
	BARD_SPELL_DETAIL.set("Cloud of Daggers",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a sliver of glass)<br>
Duration: Concentration, up to 1 minute
<br><br>
You fill the air with spinning daggers in a cube 5 feet on each side, centered on a 
point you choose within range. A creature takes 4d4 slashing damage when it enters 
the spell’s area for the first time on a turn or starts its turn there.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, 
the damage increases by 2d4 for each slot level above 2nd.


		`);
	BARD_SPELL_DETAIL.set("Crown of Madness",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or 
become charmed by you for the duration. While the target is charmed in this way, a twisted crown of 
jagged iron appears on its head, and a madness glows in its eyes.
<br><br>
The charmed target must use its action before moving on each of its turns to make a melee attack 
against a creature other than itself that you mentally choose. The target can act normally on its 
turn if you choose no creature or if none are within its reach.
<br><br>
On your subsequent turns, you must use your action to maintain control over the target, or the
spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. 
On a success, the spell ends.


		`);
	BARD_SPELL_DETAIL.set("Detect Thoughts",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a copper piece)<br>
Duration: Concentration, up to 1 minute
<br><br>
For the duration, you can read the thoughts of certain creatures. When you cast the spell and as 
your action on each turn until the spell ends, you can focus your mind on any one creature that you 
can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn’t 
speak any language, the creature is unaffected.
<br><br>
You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an 
action, you can either shift your attention to another creature’s thoughts or attempt to probe deeper 
into the same creature’s mind. If you probe deeper, the target must make a Wisdom saving throw. If it 
fails, you gain insight into its reasoning (if any), its emotional state, and something that loom s 
large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. 
Either way, the target knows that you are probing into its mind, and unless you shift your attention to 
another creature’s thoughts, the creature can use its action on its turn to make an Intelligence check 
contested by your Intelligence check; if it succeeds, the spell ends.
<br><br>
Questions verbally directed at the target creature naturally shape the course of its thoughts, so this 
spell is particularly effective as part of an interrogation.

You can also use this spell to detect the presence of thinking creatures you can’t see. When you cast 
the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The 
spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet 
of lead blocks you. You can’t detect a creature with an Intelligence of 3 or lower or one that doesn’t 
speak any language.

Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the 
duration as described above, even if you can’t see it, but it must still be within range.


		`);
	BARD_SPELL_DETAIL.set("Enhance Ability",
		`
casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (fur or a feather from a beast)<br>
Duration: Concentration, up to 1 hour
<br><br>
You touch a creature and bestow upon it a magical enhancement.
 Choose one of the following effects; the target gains the effect until the spell ends.
<br><br>
Bear’s Endurance. The target has advantage on Constitution checks. It also gains 2d6 
temporary hit points, which are lost when the spell ends.<br><br>
Bull’s Strength. The target has advantage on Strength checks, and their carrying capacity doubles.<br><br>
Cat’s Grace. The target has advantage on Dexterity checks. 
It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated.<br><br>
Eagle’s Splendor. The target has advantage on Charisma checks.<br><br>
Fox’s Cunning. The target has advantage on Intelligence checks.<br><br>
Owl’s Wisdom. The target has advantage on Wisdom checks.<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, 
you can target one additional creature for each slot level above 2nd.


		`);
	BARD_SPELL_DETAIL.set("Enlarge/Reduce",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S, M (a pinch of powdered iron)<br>
Duration: Concentration, up to 1 minute
<br><br>
You cause a creature or an object you can see within range to grow larger or smaller for 
the duration. Choose either a creature or an object that is neither worn nor carried. 
If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.
<br><br>
If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped 
by an affected creature returns to normal size at once.
<br><br>
Enlarge. The target’s size doubles in all dimensions, and its weight is multiplied by eight. 
This growth increases its size by one category – from Medium to Large, for example. If there 
isn’t enough room for the target to double its size, the creature or object attains the maximum 
possible size in the space available. Until the spell ends, the target also has advantage on Strength 
checks and Strength saving throws. The target’s weapons also grow to match its new size. While these 
weapons are enlarged, the target’s attack with them deal 1d4 extra damage.
<br><br>
Reduce. The target’s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. 
This reduction decreases its size by one category – from Medium to Small, for example. Until the spell ends, 
the target also has disadvantage on Strength checks and Strength saving throws. 
The target’s weapons also shrink to match its new size. While these weapons are reduced, 
the target’s attacks with them deal 1d4 less damage (this can’t reduce the damage below 1).


		`);
	BARD_SPELL_DETAIL.set("Enthrall",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S<br>
Duration: 1 minute
<br><br>
You weave a distracting string of words, causing creatures of your choice that you can see within range and 
that can hear you to make a Wisdom saving throw. Any creature that can’t be charmed succeeds on this saving 
throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. 
On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other 
than you until the spell ends or until the target can no longer hear you. The spell ends if you are 
incapacitated or can no longer speak.
		`);
	BARD_SPELL_DETAIL.set("Gift of Gab",
		`
Casting Time: 1 reaction, which you take when you speak to another creature<br>
Range: Self<br>
Components: V, S, M (2 gold coins, which is consumed as tax for using the spell)
Duration: Instantaneous<br>
<br><br>
When you cast this spell, you skillfully reshape the memories of listeners in your immediate area, 
so that each creature of your choice within 5 feet of you forgets everything you said within the last 6 seconds. 
Those creatures then remember that you actually said the words you speak as the verbal component of the spell.
		`);
	BARD_SPELL_DETAIL.set("Heat Metal",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a piece of iron and a flame)<br>
Duration: Concentration, up to 1 minute
<br><br>
Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, 
that you can see within range. You cause the object to glow red-hot. Any creature in physical contact 
with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus 
action on each of your subsequent turns to cause this damage again.
<br><br>
If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on 
a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage 
on attack rolls and ability checks until the start of your next turn.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases 
by 1d8 for each slot level above 2nd.
		`);
	BARD_SPELL_DETAIL.set("Hold Person",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a small, straight piece of iron)<br>
Duration: Concentration, up to 1 minute
<br><br>
Choose a humanoid that you can see within range. The target must succeed on a Wisdom 
saving throw or be paralyzed for the duration. At the end of each of its turns, 
the target can make another Wisdom saving throw. On a success, the spell ends on the target.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, 
you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet 
of each other when you target them.
		`);
	BARD_SPELL_DETAIL.set("Invisibility",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (an eyelash encased in gum arabic)<br>
Duration: Concentration, up to 1 hour
<br><br>
A creature you touch becomes invisible until the spell ends. Anything the target is 
wearing or carrying is invisible as long as it is on the target’s person. The spell 
ends for a target that attacks or casts a spell.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, 
you can target one additional creature for each slot level above 2nd.
		`);
	BARD_SPELL_DETAIL.set("Kinetic Jaunt",
		`
Casting Time: 1 bonus action<br>
Range: Self<br>
Components: S<br>
Duration: Concentration, up to 1 minute
<br><br>
You magically empower your movement with dancelike steps, giving yourself
 the following benefits for the duration:
<br><br>
Your walking speed increases by 10 feet.
You don't provoke opportunity attacks.
You can move through the space of another creature, and it doesn't count as 
difficult terrain. If you end your turn in another creature's space, you are 
shunted to the last unoccupied space you occupied, and you take 1d8 force damage.

		`);
	BARD_SPELL_DETAIL.set("Knock",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous
<br><br>
Choose an object that you can see within range. The object can be a door, a box, a chest, a set of 
manacles, a padlock, or another object that contains a mundane or magical means that prevents access.

A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, 
or unbarred. If the object has multiple locks, only one of them is unlocked.

If you choose a target that is held shut with Arcane Lock, that spell is suppressed for 10 minutes, 
during which time the target can be opened and shut normally.

When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.
		`);
	BARD_SPELL_DETAIL.set("Lesser Restoration",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
You touch a creature and can end either one disease or one condition afflicting it. 
The condition can be blinded, deafened, paralyzed, or poisoned.
		`);
	BARD_SPELL_DETAIL.set("Locate Animals or Plants",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a bit of fur from a bloodhound)<br>
Duration: Instantaneous<br><br>

Describe or name a specific kind of beast or plant. Concentrating on the voice of nature 
in your surroundings, you learn the direction and distance to the closest creature or 
plant of that kind within 5 miles, if any are present.
		`);
	BARD_SPELL_DETAIL.set("Locate Object",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a forked twig)<br>
Duration: Concentration, up to 10 minutes
<br><br>
Describe or name an object that is familiar to you. You sense the direction to the 
object’s location, as long as that object is within 1,000 feet of you. If the object 
is in motion, you know the direction of its movement.
<br><br>
The spell can locate a specific object known to you, as long as you have seen it 
up close – within 30 feet – at least once. Alternatively, the spell can locate 
the nearest object of a particular kind, such as a certain kind of apparel, jewelry, 
furniture, tool, or weapon.
<br><br>
This spell can’t locate an object if any thickness of lead, even a thin sheet, 
blocks a direct path between you and the object.
		`);
	BARD_SPELL_DETAIL.set("Magic Mouth",
		`
Casting Time: 1 minute<br>
Range: 30 feet<br>
Components: V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)<br>
Duration: Until dispelled
<br><br>
You implant a message within an object in range, a message that is uttered when a trigger condition is met. 
Choose an object that you can see and that isn’t being worn or carried by another creature. Then speak the 
message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, 
determine the circumstance that will trigger the spell to deliver your message.
<br><br>
When that circumstance occurs, a magical mouth appears on the object and recites the message 
in your voice and at the same volume you spoke. If the object you chose has a mouth or something 
that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so 
that words appear to come from the object’s mouth. When you cast this spell, you can have the spell 
end after it delivers its message, or it can remain and repeats its message whenever the trigger occurs.
<br><br>
The triggering circumstance can be as general or as detailed as you like, 
though it must be based on visual or audible conditions that occur within 30 feet of the object. 
For example, you could instruct the mouth to speak when any creature moves within 30 feet of the 
object or when a silver bell rings within 30 feet of it.
		`);
	BARD_SPELL_DETAIL.set("Mirror Image",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S<br>
Duration: 1 minute<br><br>

Three illusory duplicates of yourself appear in your space. Until the spell ends, 
the duplicates move with you and mimic your actions, shifting position so it’s 
impossible to track which image is real. You can use your action to dismiss the 
illusory duplicates.
<br><br>
Each time a creature targets you with an attack during the spell’s duration, roll a d20 to 
determine whether the attack instead targets one of your duplicates.

If you have three duplicates, you must roll a 6 or higher to change the attack’s target to 
a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must 
roll an 11 or higher.
<br><br>
A duplicate’s AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate 
is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other 
damage and effects. The spell ends when all three duplicates are destroyed.

A creature is unaffected by this spell if it can’t see, if it relies on senses other than sight, 
such as blindsight, or if it can perceive illusions as false, as with truesight.
		`);
	BARD_SPELL_DETAIL.set("Nathair\'s Mischief",
		`
Casting Time: 1 Action<br>
Range: 60ft<br>
Components: S, M (a piece of crust from an apple pie)<br>
Duration: Concentration, up to 1 minute<br><br>
<br><br>
You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the 
Mischievous Surge table to determine the magical effect produced, and roll again at the 
start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll.<br>

Mischievous Surge
d4	Effect
1	The smell of apple pie fills the air, and each creature in the cube must succeed 
on a Wisdom saving throw or become charmed by you until the start of your next turn.<br>
2	Bouquets of flowers appear all around, and each creature in the cube must succeed on a 
Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water 
in their faces.<br>
3	Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until 
the start of your next turn. A giggling creature is incapacitated and uses all its movement 
to move in a random direction.<br>
4	Drops of molasses appear and hover in the cube, turning it into difficult terrain until the 
start of your next turn.<br>
		`);
	BARD_SPELL_DETAIL.set("phantasmal force",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a bit of fleece)<br>
Duration: Concentration, up to 1 minute
<br><br>
You craft an illusion that takes root in the mind of a creature that you can see within range. 
The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, 
creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that 
is perceivable only to the target for the duration. This spell has no effect on undead or constructs.
<br>
The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.

The target can use its action to examine the phantasm with an Intelligence (Investigation) 
check against your spell save DC. If the check succeeds, the target realizes that the phantasm 
is an illusion, and the spell ends.
<br><br>
While a target is affected by the spell, the target treats the phantasm as if it were real. 
The target rationalizes any illogical outcomes from interacting with the phantasm. For example, 
a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto 
the bridge. If the target survives the fall, it still believes that the bridge exists and comes up 
with some other explanation for its fall; it was pushed, it slipped, or a strong wind might have 
knocked it off.
<br><br>
An affected target is so convinced of the phantasm’s reality that it can even take d
amage from the illusion. A phantasm created to appear as a creature can attack the target. 
Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. 
Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in 
the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature 
or hazard that could logically deal damage, such as by attacking. The target perceives the damage 
as a type appropriate to the illusion.
		`);
	BARD_SPELL_DETAIL.set("Pyrotechnics",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
Choose an area of flame that you can see and that can fit within a 5-foot cube within range. 
You can extinguish the fire in that area, and you create either fireworks or smoke.

Fireworks. The target explodes with a dazzling display of colors. Each creature within 10 feet of the 
target must succeed on a Constitution saving throw or become blinded until the end of your next turn.

Smoke. Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. 
The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.
		`);
	BARD_SPELL_DETAIL.set("See Invisibility",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a pinch of talc and a small sprinkling of powdered silver)<br>
Duration: 1 hour
<br><br>
For the duration, you see invisible creatures and objects as if they were visible, 
and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.
		`);
	BARD_SPELL_DETAIL.set("Shatter",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a chip of mica)<br>
Duration: Instantaneous
<br><br>
A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. 
Each creature in a 10-foot-radius sphere centered on that point must make a Constitution 
saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage 
on a successful one. A creature made of inorganic material such as stone, crystal, or metal 
has disadvantage on this saving throw.

A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, 
the damage increases by 1d8 for each slot level above 2nd.
		`);
	BARD_SPELL_DETAIL.set("Silence",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S<br>
Duration: Concentration, up to 10 minutes
<br><br>
For the duration, no sound can be created within or pass through a 20-foot-radius sphere 
centered on a point you choose within range. Any creature or object entirely inside the 
sphere is immune to thunder damage, and creatures are deafened while entirely inside it. 
Casting a spell that includes a verbal component is impossible there.
		`);
	BARD_SPELL_DETAIL.set("Skywrite",
		`
Casting Time: 1 action<br>
Range: Sight<br>
Components: V, S<br>
Duration: Concentration, up to 1 day
<br><br>
You cause up to ten words to form in a part of the sky you can see. 
The words appear to be made of cloud and remain in place for the spell’s duration. 
The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.
		`);
	BARD_SPELL_DETAIL.set("Suggestion",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, M (a snake’s tongue and either a bit of honeycomb or a drop of sweet oil)<br>
Duration: Concentration, up to 8 hours
<br><br>
You suggest a course of activity (limited to a sentence or two) and magically influence a 
creature you can see within range that can hear and understand you. Creatures that can’t be 
charmed are immune to this effect. The suggestion must be worded in such a manner as to make 
the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a 
spear, immolate itself, or do some other obviously harmful act ends the spell.
<br><br>
The target must make a Wisdom saving throw. On a failed save, it purses the course of 
action you described to the best of its ability. The suggested course of action can 
continue for the entire duration. If the suggested activity can be completed in a shorter 
time, the spell ends when the subject finishes what it was asked to do.
<br><br>
You can also specify conditions that will trigger a special activity during the duration. 
For example, you might suggest that a knight give her warhorse to the first beggar she meets. 
If the condition isn’t met before the spell expires, the activity isn’t preformed.

If you or any of your companions damage the target, the spell ends.
		`);
	BARD_SPELL_DETAIL.set("Warding Wind",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V<br>
Duration: Concentration, up to 10 minutes
<br><br>
A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, 
remaining centered on you. The wind lasts for the spell’s duration.

The wind has the following effects:

It deafens you and other creatures in its area.
It extinguishes unprotected flames in its area that are torch-sized or smaller.
The area is difficult terrain for creatures other than you.
The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind.
It hedges out vapor, gas, and fog that can be dispersed by strong wind.
		`);
	BARD_SPELL_DETAIL.set("Zone of Truth",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S<br>
Duration: 10 minutes
<br><br>
You create a magical zone that guards against deception in a 15-foot-radius sphere centered 
on a point of your choice within range. Until the spell ends, a creature that enters the 
spell’s area for the first time on a turn or starts its turn there must make a Charisma 
saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. 
You know whether each creature succeeds or fails on its saving throw.
<br><br>
An affected creature is aware of the spell and can thus avoid answering questions to 
which it would normally respond with a lie. Such creatures can be evasive in its answers 
as long as it remains within the boundaries of the truth.
		`);
	BARD_SPELL_DETAIL.set("Bestow Curse",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
You touch a creature, and that creature must succeed on a Wisdom saving throw or become 
cursed for the duration of the spell. When you cast this spell, choose the nature 
of the curse from the following options:
<br><br>
Choose one ability score. While cursed, the target has disadvantage on ability checks and saving 
throws made with that ability score.
While cursed, the target has disadvantage on attack rolls against you.
While cursed, the target must make a Wisdom saving throw at the start of each of its turns. 
If it fails, it wastes its action that turn doing nothing.
While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.
A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, 
but it should be no more powerful than those described above. The DM has final say on such a curse's effect.
<br><br>
At Higher Levels. If you cast this spell using a spell slot of 4th level or higher, 
the duration is concentration, up to 10 minutes. <br>If you use a spell slot of 5th level 
or higher, the duration is 8 hours. <br>If you use a spell slot of 7th level or higher, the 
duration is 24 hours.<br> If you use a 9th level spell slot, the spell lasts until it is dispelled. 
<br>Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.
		`);
	BARD_SPELL_DETAIL.set("Catnap",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: S, M (a pinch of sand)<br>
Duration: 10 minutes
<br><br>
You make a calming gesture, and up to three willing creatures of your choice that you can 
see within range fall unconscious for the spell’s duration. The spell ends on a 
target early if it takes damage or someone uses an action to shake or slap it awake. 
If a target remains unconscious for the full duration, that target gains the benefit 
of a short rest, and it can’t be affected by this spell again until it finishes a long rest.
		`);
	BARD_SPELL_DETAIL.set("Clairvoyance",
		`
Casting Time: 10 minutes<br>
Range: 1 mile<br>
Components: V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a 
glass eye for seeing)<br>
Duration: Concentration, up to 10 minutes
<br><br>
You create an invisible sensor within range in a location familiar to you (a place you have 
visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a 
door, around a corner, or in a grove of trees). The sensor remains in place for the duration, 
and it can’t be attacked or otherwise interacted with.
<br><br>
When you cast the spell, you choose seeing or hearing. You can use the chosen sense 
through the sensor as if you were in its space. As your action, you can switch between 
seeing and hearing. A creature that can see the sensor (such as a creature benefitting 
from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.
		`);
	BARD_SPELL_DETAIL.set("Dispel Magic",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
Choose any creature, object, or magical effect within range. Any spell of 3rd level 
or lower on the target ends. For each spell of 4th level or higher on the target, 
make an ability check using your spellcasting ability. The DC equals 10 + the spell's 
level. On a successful check, the spell ends.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, 
you automatically end the effects of a spell on the target if the spell's level is equal 
to or less than the level of the spell slot you used.
		`);
	BARD_SPELL_DETAIL.set("Enemies Abound",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. 
A creature automatically succeeds if it is immune to being frightened. On a failed save, the target 
loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies 
until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending 
the effect on itself on a success.
<br><br>
Whenever the affected creature chooses another creature as a target, it must choose the target 
at random from among the creatures it can see within range of the attack, spell, or other ability 
it’s using. If an enemy provokes an opportunity attack from the affected creature, the creature 
must make that attack if it is able to.
		`);
	BARD_SPELL_DETAIL.set("Fast Friends",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V<br>
Duration: Concentration, up to 1 hour
<br><br>
When you cast this spell, choose one humanoid within range that can see and hear you, and that 
can understand you. The creature must succeed on a Wisdom saving throw or become charmed by you 
for the duration. While the creature is charmed in this way, it undertakes to perform any services 
	or activities you ask of it in a friendly manner, to the best of its ability.
<br><br>
You can set the creature new tasks when a previous task is completed, or if you decide to end 
its current task. If the service or activity might cause harm to the creature, or if it conflicts 
with the creature's normal activities and desires, the creature can make another Wisdom saving throw 
to try to end the effect. This save is made with advantage if you or your companions are fighting the 
creature. If the activity would result in certain death for the creature, the spell ends.
When the spell ends, the creature knows it was charmed by you.
		`);
	BARD_SPELL_DETAIL.set("Fear",
		`
Casting Time: 1 action
Range: Self (30-foot cone)
Components: V, S, M (a white feather or the heart of a hen)
Duration: Concentration, up to 1 minute

You project a phantasmal image of a creature’s worst fears. Each creature in a 30-foot cone 
must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.

While frightened by this spell, a creature must take the Dash action and move away from you by 
the safest available route on each of its turns, unless there is nowhere to move. If the 
creature ends its turn in a location where it doesn’t have line of sight to you, the creature 
can make a Wisdom saving throw. On a successful save, the spell ends for that creature.
		`);
	BARD_SPELL_DETAIL.set("Feign Death",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (a pinch of graveyard dirt)<br>
Duration: 1 hour
<br><br>
You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.

For the spell’s duration, or until you use an action to touch the target and dismiss the spell, 
the target appears dead to all outward inspection and to spells used to determine the target’s status. 
The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage 
except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased 
or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends.
		`);
	BARD_SPELL_DETAIL.set("Glyph of Warding",
		`
Casting Time: 1 hour<br>
Range: Touch<br>
Components: V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)<br>
Duration: Until dispelled or triggered
<br><br>
When you cast this spell, you inscribe a glyph that creates a magical effect triggered by other creatures, 
either upon a surface (such as a table or a section of floor or wall) or within an object 
that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. 
The glyph can cover an area no larger than 10 feet in diameter. If the surface or 
object is moved more than 10 feet from where you cast this spell, the glyph is broken, 
and the spell ends without being triggered.
<br><br>
The glyph is nearly invisible and requires a successful Intelligence (Investigation) 
check against your spell save DC to be found.

You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a 
surface, the most typical triggers include touching or standing on the glyph, 
removing another object covering the glyph, approaching within a certain distance of the glyph, 
or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, 
the most common triggers include opening that object, approaching within a certain distance of the 
object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.
<br><br>
You can further refine the trigger so the spell activates only under certain circumstances or 
according to physical characteristics (such as height or weight), creature kind 
(for example, the ward could be set to affect aberrations or drow), or alignment. 
You can also set conditions for creatures that don’t trigger the glyph, such as 
those who say a certain password.

When you inscribe the glyph, choose explosive runes or a spell glyph.

Explosive Runes. When triggered, the glyph erupts with magical energy in a 20-foot-radius 
sphere centered on the glyph. The sphere spreads around corners. Each creature in the area 
must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or t
hunder damage on a failed saving throw (your choice when you create the glyph), or half as much 
damage on a successful one.
<br><br>
Spell Glyph. You can store a prepared spell of 3rd level or lower in the glyph by casting it 
as part of creating the glyph. The spell must target a single creature or an area. The spell 
being stored has no immediate effect when cast in this way. When the glyph is triggered, the 
stored spell is cast. If the spell has a target, it targets the creature that triggered the 
glyph. If the spell affects an area, the area is centered on that creature. If the spell summons 
hostile creatures or creates harmful objects or traps, they appear as close as possible to the 
intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, 
the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. 
If you create a spell glyph, you can store any spell of up to the same level as the slot 
you use for the glyph of warding.
		`);
	BARD_SPELL_DETAIL.set("Hypnotic Pattern",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: S, M (a glowing stick of incense or a crystal vial filled with phosphorescent material)<br>
Duration: Concentration, up to 1 minute
<br><br>
You create a twisting pattern of colors that weaves through the air inside a 30-foot cube 
within range. The pattern appears for a moment and vanishes. Each creature in the area who 
sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes 
charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.
<br><br>
The spell ends for an affected creature if it takes any damage or if someone else uses 
an action to shake the creature out of its stupor.
		`);
	BARD_SPELL_DETAIL.set("Intellect Fortress",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V<br>
Duration: Concentration, up to 1 hour
<br><br>
For the duration, you or one willing creature you can see within range has resistance 
to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, 
you can target one additional creature for each slot level above 3rd. The creatures must 
be within 30 feet of each other when you target them.
		`);
	BARD_SPELL_DETAIL.set("Leomund\'s Tiny Hut",
		`
Casting Time: 1 minute<br>
Range: Self (10-foot-radius hemisphere)<br>
Components: V, S, M (a small crystal bead)<br>
Duration: 8 hours
<br><br>
A 10-foot-radius immobile dome of force springs into existence around and above you and remains 
stationary for the duration. The spell ends if you leave its area.
<br><br>
Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails 
if its area includes a larger creature or more than nine creatures. Creatures and objects 
	within the dome when you cast this spell can move through it freely. All other creatures 
and objects are barred from passing through it. Spells and other magical effects can't extend 
through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, 
regardless of the weather outside.
<br><br>
Until the spell ends, you can command the interior to become dimly lit or dark. The dome is 
opaque from the outside, of any color you choose, but it is transparent from the inside.
		`);
	BARD_SPELL_DETAIL.set("Major Image",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S, M (a bit of fleece)<br>
Duration: Concentration, up to 10 minutes
<br><br>
You create the image of an object, a creature, or some other visible phenomenon that is no 
larger than a 20-foot cube. The image appears at a spot that you can see within range and 
lasts for the duration. It seems completely real, including sounds, smells, and temperature 
appropriate to the thing depicted. You can’t create sufficient heat or cold to cause damage, 
a sound loud enough to deal thunder damage or deafen a creature, or a smell that might 
sicken a creature (like a troglodyte’s stench).
<br><br>
As long as you are within range of the illusion, you can use your action to cause the image 
to move to any other spot within range. As the image changes location, you can alter its 
appearance so that its movements appear natural for the image. For example, if you create an 
image of a creature and move it, you can alter the image so that it appears to be walking. 
Similarly, you can cause the illusion to make different sounds at different times, even making 
it carry on a conversation, for example.
<br><br>
Physical interaction with the image reveals it to be an illusion, because things can pass through it. 
A creature that uses its action to examine the image can determine that it is an illusion with a 
successful Intelligence (Investigation) check against your spell save DC. If a creature discerns 
the illusion for what it is, the creature can see through the image, and its other sensory qualities 
become faint to the creature.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, 
the spell lasts until dispelled, without requiring your concentration. In this form it is 
sometimes considered a different spell, known as Permanent Image.
		`);
	BARD_SPELL_DETAIL.set("Mass Healing Word",
		`
Casting Time: 1 bonus action<br>
Range: 60 feet<br>
Components: V<br>
Duration: Instantaneous
<br><br>
As you call out words of restoration, up to six creatures of your choice that you can 
see within range regain hit points equal to 1d4 + your spellcasting ability modifier. 
This spell has no effect on undead or constructs.
<br>
At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, 
the healing increases by 1d4 for each slot level above 3rd.
		`);
	BARD_SPELL_DETAIL.set("Motivational Speech",
		`
Casting Time: 1 minute<br>
Range: 60 feet<br>
Components: V<br>
Duration: 1 hour
<br><br>
Choose up to five creatures within range that can hear you. For the duration, each 
affected creature gains 5 temporary hit points and has advantage on Wisdom saving throws. 
If an affected creature is hit by an attack, it has advantage on the next attack roll it 
makes. Once an affected creature loses the temporary hit points granted by this spell, the 
spell ends for that creature.
<br><br>
At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, 
the temporary hit points increase by 5 for each slot level above 3rd.
		`);
	BARD_SPELL_DETAIL.set("Nondetection",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell 
consumes)<br>
Duration: 8 hours
<br><br>
For the duration, you hide a target that you touch from divination magic. 
The target can be a willing creature or a place or an object no larger than 
10 feet in any dimension. The target can’t be targeted by any divination magic 
or perceived through magical scrying sensors.
		`);
	BARD_SPELL_DETAIL.set("Plant Growth",
		`
Casting Time: 1 action or 8 hours<br>
Range: 150 feet<br><br>
Components: V, S<br>
Duration: Instantaneous
<br><br>
This spell channels vitality into plants within a specific area. There are two possible uses for 
the spell, granting either immediate or long-term benefits.
<br><br>
If you cast this spell using 1 action, choose a point within range. All normal plants in a 
100-foot radius centered on that point become thick and overgrown. A creature moving through 
the area must spend 4 feet of movement for every 1 foot it moves.
<br><br>
You can exclude one or more areas of any size within the spell’s area from being affected.

If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile 
radius centered on a point within range become enriched for 1 year. The plants yield twice 
the normal amount of food when harvested.
		`);
	BARD_SPELL_DETAIL.set("Sending",
		`
Casting Time: 1 action<br>
Range: Unlimited<br>
Components: V, S, M (a short piece of fine copper wire)<br>
Duration: 1 round
<br><br>
You send a short message of twenty-five words or less to a creature with which you are familiar. 
The creature hears the message in its mind, recognizes you as the sender if it knows you, and can 
answer in a like manner immediately. The spell enables creatures with Intelligence scores of at 
least 1 to understand the meaning of your message.
<br>
You can send the message across any distance and even to other planes of existence, but if the 
target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive.
		`);
	BARD_SPELL_DETAIL.set("Slow",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S, M (a drop of molasses)<br>
Duration: Concentration, up to 1 minute
<br><br>
You alter time around up to six creatures of your choice in a 40-foot cube within range. 
Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.
<br><br>
An affected target’s speed is halved, it takes a -2 penalty to AC and Dexterity saving 
throws, and it can’t use reactions. On its turn, it can use either an action or a bonus action, 
not both. Regardless of the creature’s abilities or magic items, it can’t make more than one melee 
or ranged attack during its turn.
<br><br>
If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. 
On an 11 or higher, the spell doesn’t take effect until the creature’s next turn, and the 
creature must use its action on that turn to complete the spell. If it can’t, the spell is wasted.
<br><br>
A creature affected by this spell makes another Wisdom saving throw at the end of each 
of its turns. On a successful save, the effect ends for it.
		`);
	BARD_SPELL_DETAIL.set("Speak with Dead",
		`
Casting Time: 1 action<br>
Range: 10 feet<br>
Components: V, S, M (burning incense)<br>
Duration: 10 minutes
<br><br>
You grant the semblance of life and intelligence to a corpse of your choice within range, 
allowing it to answer the questions you pose. The corpse must still have a mouth and can’t 
be undead. The spell fails if the corpse was the target of this spell within the last 10 days.
<br><br>
Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what 
it knew in life, including the languages it knew. Answers are usually brief, cryptic, 
or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are 
hostile to it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul 
to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t 
comprehend anything that has happened since it died, and can’t speculate about future events.
		`);
	BARD_SPELL_DETAIL.set("Speak with Plants",
		`
Casting Time: 1 action<br>
Range: Self (30-foot radius)<br>
Components: V, S<br>
Duration: 10 minutes
<br><br>
You imbue plants within 30 feet of you with limited sentience and animation, 
giving them the ability to communicate with you and follow your simple commands. 
You can question plants about events in the spell’s area within the past day, gaining 
information about creatures that have passed, weather, and other circumstances.
<br><br>
You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into 
ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into 
difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.

Plants might be able to perform other tasks on your behalf, at the DM’s discretion. The spell doesn’t 
enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.

If a plant creature is in the area, you can communicate with it as if you share a common language, 
but you gain no magical ability to influence it.

This spell can cause the plants created by the entangle spell to release a restrained creature.
		`);
	BARD_SPELL_DETAIL.set("Stinking Cloud",
		`
Casting Time: 1 action<br>
Range: 90 feet<br>
Components: V, S, M (a rotten egg or several skunk cabbage leaves)<br>
Duration: Concentration, up to 1 minute
<br><br>
You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point 
within range. The cloud spreads around corners, and its area is heavily obscured. 
The cloud lingers in the air for the duration.
<br><br>
Each creature that is completely within the cloud at the start of its turn must 
make a Constitution saving throw against poison. On a failed save, the creature 
spends its action that turn retching and reeling. Creatures that don’t need to 
breathe or are immune to poison automatically succeed on this saving throw.
<br><br>
A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. 
A strong wind (at least 20 miles per hour) disperses it after 1 round.
		`);
	BARD_SPELL_DETAIL.set("Tongues",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, M (a small clay model of a ziggurat)<br>
Duration: 1 hour
<br><br>
This spell grants the creature you touch the ability to understand any spoken 
language it hears. Moreover, when the target speaks, any creature that knows at 
least one language and can hear the target understands what it says.
		`);

	BARD_SPELL_DETAIL.set("Charm Monster",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S<br>
Duration: 1 hour
<br><br>
You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, 
and it does so with advantage if you or your companions are fighting it. If it fails the saving 
throw, it is charmed by you until the spell ends or until you or your companions do anything harmful 
to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, 
you can target one additional creature for each slot level above 4th. The creatures must 
be within 30 feet of each other when you target them.
		`);
	BARD_SPELL_DETAIL.set("Compulsion",
		`
Casting Time: 1 action<br>
Range: 30 feet<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute
<br><br>
Creatures of your choice that you can see within range and that can hear you must make 
a Wisdom saving throw. A target automatically succeeds on this saving throw if it can’t be 
charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can 
use a bonus action on each of your turns to designate a direction that is horizontal to you. 
Each affected target must use as much of its movement as possible to move in that direction on 
its next turn. It can take its action before it moves. After moving in this way, it can make another 
Wisdom saving throw to try to end the effect.
<br>
A target isn’t compelled to move into an obviously deadly hazard, such as a fire pit, 
but it will provoke opportunity attacks to move in the designated direction.
		`);
	BARD_SPELL_DETAIL.set("Confusion",
		`
Casting Time: 1 action<br>
Range: 90 feet<br>
Components: V, S, M (three nut shells)<br>
Duration: Concentration, up to 1 minute<br><br>

This spell assaults and twists creatures’ minds, spawning delusions and provoking uncontrolled 
actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range 
must succeed on a Wisdom saving throw when you cast this spell or be affected by it.
<br><br>
An affected target can’t take reactions and must roll a d10 at the start of each of its turns to 
determine its behavior for that turn.
<br><br>
d10	Behavior
1	The creature uses all its movement to move in a random direction. To determine the direction, <br>
roll a d8 and assign a direction to each die face. The creature doesn’t take an action this turn.
2-6	The creature doesn’t move or take actions this turn.<br>
7-8	The creature uses its action to make a melee attack against a randomly determined 
creature within its reach. If there is no creature within its reach, the creature does nothing this turn.<br>
9-10	The creature can act and move normally.<br>
At the end of its turns, an affected target can make a Wisdom saving throw. 
If it succeeds, this effect ends for that target.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, 
the radius of the sphere increases by 5 feet for each slot level above 4th.
		`);
	BARD_SPELL_DETAIL.set("Dimension Door",
		`
Casting Time: 1 action<br>
Range: 500 feet<br>
Components: V<br>
Duration: Instantaneous<br><br>

You teleport yourself from your current location to any other spot within range. You arrive 
at exactly the spot desired. It can be a place you can see, one you can visualize, or one you 
can describe by stating distance and direction, such as "200 feet straight downward" or 
"upward to the northwest at a 45-degree angle, 300 feet".
<br><br>
You can bring along objects as long as their weight doesn’t exceed what you can carry. You 
can also bring one willing creature of your size or smaller who is carrying gear up to its 
carrying capacity. The creature must be within 5 feet of you when you cast this spell.
<br><br>
If you would arrive in a place already occupied by an object or a creature, you and any 
creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.
		`);
	BARD_SPELL_DETAIL.set("Freedom of Movement",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S, M (a leather strap, bound around the arm or a similar appendage)<br>
Duration: 1 hour<br><br>

You touch a willing creature. For the duration, the target’s movement is unaffected by 
difficult terrain, and spells and other magical effects can neither reduce the target’s 
speed nor cause the target to be paralyzed or restrained.
<br><br>
The target can also spend 5 feet of movement to automatically escape from 
nonmagical restraints, such as manacles or a creature that has it grappled. 
Finally, being underwater imposes no penalties on the target’s movement or attacks.
		`);
	BARD_SPELL_DETAIL.set("Greater Invisibility",
		`
Casting Time: 1 action<br>
Range: Touch<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute<br><br>

You or a creature you touch becomes invisible until the spell ends. Anything the target 
is wearing or carrying is invisible as long as it is on the target’s person.
		`);
	BARD_SPELL_DETAIL.set("Hallucinatory Terrain",
		`
Casting Time: 10 minutes<br>
Range: 300 feet<br>
Components: V, S, M (a stone, a twig, and a bit of green plant)<br>
Duration: 24 hours
<br><br>
You make natural terrain in a 150-foot cube in range look, sound, and smell like some other 
sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, 
crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a 
grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth 
road. Manufactured structures, equipment, and creatures within the area aren’t changed in appearance.
<br><br>
The tactile characteristics of the terrain are unchanged, so creatures entering the area are 
likely to see through the illusion. If the difference isn’t obvious by touch, a creature carefully 
examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC 
to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image 
superimposed on the terrain.
		`);
	BARD_SPELL_DETAIL.set("Locate Creature",
		`
Casting Time: 1 action<br>
Range: Self<br>
Components: V, S, M (a bit of fur from a bloodhound)<br>
Duration: Concentration, up to 1 hour<br><br>

Describe or name a creature that is familiar to you. You sense the direction to the creature’s 
location, as long as that creature is within 1,000 feet of you. If the creature is moving, you 
know the direction of its movement.

The spell can locate a specific creature known to you, or the nearest creature of a specific kind 
(such as a human or a unicorn), so long as you have seen such a creature up close – within 30 feet – 
at least once. If the creature you described or named is in a different form, such as being under the 
effects of a polymorph spell, this spell doesn’t locate the creature.

This spell can’t locate a creature if running water at least 10 feet wide blocks a direct path 
between you and the creature.
		`);
	BARD_SPELL_DETAIL.set("Phantasmal Killer",
		`
Casting Time: 1 action<br>
Range: 120 feet<br>
Components: V, S<br>
Duration: Concentration, up to 1 minute<br><br>

You tap into the nightmares of a creature you can see within range and create an illusory 
manifestation of its deepest fears, visible only to that creature.
<br><br>
The target must make a Wisdom saving throw. On a failed save, the target becomes frightened 
for the duration. At the end of each of the target’s turns before the spell ends, the target 
must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the 
damage increases by 1d10 for each slot level above 4th.
		`);
	BARD_SPELL_DETAIL.set("Polymorph",
		`
Casting Time: 1 action<br>
Range: 60 feet<br>
Components: V, S, M (a caterpillar cocoon)<br>
Duration: Concentration, up to 1 hour<br><br>	

This spell transforms a creature that you can see within range into a new form. An 
unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger 
automatically succeeds on this saving throw.
<br><br>
The transformation lasts for the duration, or until the target drops to 0 hit points 
or dies. The new form can be any beast whose challenge rating is equal to or less than 
the target’s (or the target’s level, if it doesn’t have a challenge rating). The target’s 
game statistics, including mental ability scores, are replaced by the statistics of the 
chosen beast. It retains its alignment and personality.
<br><br>
The target assumes the hit points of its new form. When it reverts to its normal form, 
the creature returns to the number of hit points it had before it transformed. If it 
reverts as a result of dropping to 0 hit points, any excess damage carries over to its
normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit
 points, it isn’t knocked unconscious.
<br><br>
The creature is limited in the actions it can perform by the nature of its new 
form, and it can’t speak, cast spells, or take any other action that requires hands or speech.
<br><br>
The target’s gear melds into the new form. The creature can’t activate, use, wield, 
or otherwise benefit from any of its equipment. This spell can’t affect a target that has 0 hit points.
		`);
	BARD_SPELL_DETAIL.set("Raulothim\'s Psychic Lance",
		`
Casting Time: 1 Action<br>
Range: 120ft<br>
Components: V<br>
Duration: Instantaneous<br><br>

You unleash a shimmering lance of psychic power from your forehead at a creature 
that you can see within range. Alternatively, you can utter a creature’s name. 
If the named target is within range, it becomes the spell’s target even if you 
can’t see it. If the named target isn’t within range, the lance dissipates without effect.

The target must make an Intelligence saving throw. On a failed save, the target 
takes 7d6 psychic damage and is incapacitated until the start of your next turn. 
On a successful save, the creature takes half as much damage and isn’t incapacitated.
		`);		
	BARD_SPELL_DETAIL.set("Fireball",
		`
Casting Time: 1 action<br>
Range: 150 feetv
Components: V, S, M (a tiny ball of bat guano and sulfur)<br>
Duration: Instantaneous<br><br>

A bright streak flashes from your pointing finger to a point you choose within range 
then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot 
radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed 
save, or half as much damage on a successful one. The fire spreads around corners. It 
ignites flammable objects in the area that aren’t being worn or carried.<br><br>

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, 
the damage increases by 1d6 for each slot level above 3rd.
	`);	
	BARD_SPELL_DETAIL.set("Lightning Bolt",
		`
Casting Time: 1 action<br>
Range: Self (100-foot line)<br>
Components: V, S, M (a bit of fur and a rod of amber, crystal, or glass)<br>
Duration: Instantaneous<br><br>

A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from 
you in a direction you choose. Each creature in the line must make a Dexterity saving 
throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage 
on a successful one.

The lightning ignites flammable objects in the area that aren’t being worn or carried.
<br><br>
At Higher Levels. When you cast this spell using a spell slot of 4th level or 
higher, the damage increases by 1d6 for each slot level above 3rd.
`);
