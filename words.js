var phrases = ["That really _t my _@.",
"It's _@ _iin' good.",
"_v me till I'm _a.",
"Come on in, the _n's _a.",
"_v _n everyday.",
"My _@ is very _a.",
"_v a _@, you _@!",
"Go to _l, you _a _@!",
"Don't _v my _n!",
"_v my _n, you _p.",
"You _a, _a _@.",
"Grab the _@. It's _v time."]

/*var template = {
    nouns: [],
    bodyparts: [],
    placenouns: [],
    personnouns: [],
    verbs: [],
    tpsverbs: [],
    ingverbs: [],
    adjectives: [],
}

template.thingnouns = template.nouns.concat(template.bodyparts)
template.anynoun = template.nouns.concat(template.personnouns, template.bodyparts)*/

var general = {
    nouns: ["weed", "corpse", "gun", "puppet", "tentacle", "whale", "cow", "rat", "plant"],
    bodyparts: ["head", "arm", "leg", "foot", "shoulder", "knee", "eyebrow", "nose"],
    placenouns: ["hell", "school", "America", "Europe", "Britain", "Trove", "North Korea", "China", "Mexico", "Canada", "Antarctica", "Roblox", "my house"],
    personnouns: ["boyfriend", "girlfriend", "mother", "father", "gamer", "brother", "sister", "teacher", "dentist", "doctor", "grandma", "grandpa"],
    verbs: ["lick", "kick", "punch", "eat", "water", "burn", "kill", "kiss", "touch", "grab"],
    tpsverbs: ["licks", "kicks", "punches", "eats", "waters", "burns", "kills", "kisses", "touches", "grabs"],
    ingverbs: ["lick", "kick", "punch", "eat", "water", "burn", "kill", "kiss", "touch", "grabb"],
    adjectives: ["sweet", "attractive", "sweaty", "bloody", "sad", "nice", "happy", "fat", "stupid", "tasty", "gooey", "moist", "soggy", "dry", "weird", "little", "big", "dead", "spicy", "hot", "cold"],
}

general.thingnouns = general.nouns.concat(general.bodyparts)
general.anynoun = general.nouns.concat(general.personnouns, general.bodyparts)

var shoulders = {
    nouns: ["gish", "goosh"],
    bodyparts: ["gish gland"],
    placenouns: [],
    personnouns: ["shoulder demon"],
    verbs: ["breesh", "shleesh", "shloosh", "shlop", "shlarsh"],
    tpsverbs: ["breeshed", "shleeshed", "shlooshed", "shlopped", "shlarshed"],
    ingverbs: ["breesh", "shleesh", "shloosh", "shlopp", "shlarsh"],
    adjectives: [],
}

shoulders.thingnouns = shoulders.nouns.concat(shoulders.bodyparts)
shoulders.anynoun = shoulders.nouns.concat(shoulders.personnouns, shoulders.bodyparts)

var coolkids = {
    nouns: ["cube", "nightcrawler", "sock"],
    bodyparts: [],
    placenouns: ["Tenochtitlan", "Turtle Bay", "Laie"],
    personnouns: ["pedo pal", "Baritone Boy", "cool kid", "musical", "Eric", "Orlando", "Peter", "Rebecca"],
    verbs: ["beetle"],
    tpsverbs: ["beetled"],
    ingverbs: ["beetling"],
    adjectives: [],
}

coolkids.thingnouns = coolkids.nouns.concat(coolkids.bodyparts)
coolkids.anynoun = coolkids.nouns.concat(coolkids.personnouns, coolkids.bodyparts)


var nouns = []
var bodyparts = []
var placenouns = []
var personnouns = []
var verbs = []
var tpsverbs = []
var ingverbs = []
var adjectives = []
var thingnouns = []
var anynoun = []

function genLists() {
    nouns = []
    bodyparts = []
    placenouns = []
    personnounds = []
    verbs = []
    tpsverbs = []
    ingverbs = []
    adjectives = []
    thingnouns = []
    anynoun = []

    if (checkboxes.general) {
        nouns = nouns.concat(general.nouns)
        bodyparts = bodyparts.concat(general.bodyparts)
        placenouns = placenouns.concat(general.placenouns)
        personnouns = personnouns.concat(general.personnouns)
        verbs = verbs.concat(general.verbs)
        tpsverbs = tpsverbs.concat(general.tpsverbs)
        ingverbs = ingverbs.concat(general.ingverbs)
        adjectives = adjectives.concat(general.adjectives)
        thingnouns = thingnouns.concat(general.thingnouns)
        anynoun = anynoun.concat(general.anynoun)
    }
    if (checkboxes.coolkids) {
        nouns = nouns.concat(coolkids.nouns)
        bodyparts = bodyparts.concat(coolkids.bodyparts)
        placenouns = placenouns.concat(coolkids.placenouns)
        personnouns = personnouns.concat(coolkids.personnouns)
        verbs = verbs.concat(coolkids.verbs)
        tpsverbs = tpsverbs.concat(coolkids.tpsverbs)
        ingverbs = ingverbs.concat(coolkids.ingverbs)
        adjectives = adjectives.concat(coolkids.adjectives)
        thingnouns = thingnouns.concat(coolkids.thingnouns)
        anynoun = anynoun.concat(coolkids.anynoun)
    }
    if (checkboxes.shoulders) {
        nouns = nouns.concat(shoulders.nouns)
        bodyparts = bodyparts.concat(shoulders.bodyparts)
        placenouns = placenouns.concat(shoulders.placenouns)
        personnouns = personnouns.concat(shoulders.personnouns)
        verbs = verbs.concat(shoulders.verbs)
        tpsverbs = tpsverbs.concat(shoulders.tpsverbs)
        ingverbs = ingverbs.concat(shoulders.ingverbs)
        adjectives = adjectives.concat(shoulders.adjectives)
        thingnouns = thingnouns.concat(shoulders.thingnouns)
        anynoun = anynoun.concat(shoulders.anynoun)
    }
}