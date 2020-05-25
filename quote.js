var nouns = ["weed", "cube", "dead body", "gish", "gun", "puppet", "tentacle", "fish", "cow"]
var bodyparts = ["butt", "head", "arm", "leg", "foot", "shoulder", "knee", "eyebrow"]
var allnouns = nouns.concat(bodyparts)

var placenouns = ["hell","Tenochtitlan","school", "America", "Europe", "Britain", "Trove", "North Korea", "China", "Mexico", "Canada", "Antarctica", "Roblox", "my house"]
var personnouns = ["Bradley", "mother", "father", "gamer", "brother", "sister", "musical", "cool kid", "pedo pal", "teacher", "dentist", "doctor", "grandma", "grandpa"]
var anynoun = nouns.concat(personnouns)
var verbs = ["punch", "eat", "shlarsh", "shleesh", "shloosh", "shlop", "water", "burn", "kill", "kiss", "touch"]
var tpsverbs = ["punches", "eats", "shlarshes", "shleeshes", "shlooshes", "shlops", "waters", "burns", "kills", "kisses", "touches"]
var ingverbs = ["punch", "eat", "shlarsh", "shlopp", "shleesh", "shloosh", "water", "burn", "kill", "kiss", "touch"]
var adjectives = ["bloody", "sad", "nice", "happy", "fat", "stupid", "tasty", "gooey", "moist", "soggy", "dry", "weird", "little", "big", "dead", "spicy", "hot", "cold"]

var phrases = ["That really _t my _@.",
"It's _@ _iin' good.",
"_v me till I'm _a.",
"Come on in the _n's _a.",
"_v _n everyday.",
"I love _iing _@s.",
"Come to _l! We're all _a here!",
"My _@ is very _a.",
"_v a _@, you _@!",
"Go to _l, you _@!",
"Don't _v my _n!",
"_v my _n, you _p."]

function pull(i) {
    return(i[Math.floor(Math.random()*i.length)])
}

var quote = new Vue({
    el: "#quote",
    data: {
        message: "I have no idea what I'm doing.",
        color: randomColor({luminosity: "light"})
    }
})

function gen() {
    var phrase = pull(phrases)
    phrase = phrase.split("")
    
    var insert = []
    for(var c in phrase) {
        if (phrase[c] == "_") {
            phrase.splice(c, 1)
            insert.push(c)
        }
    }

    for (var c in insert) {
        switch (phrase[insert[c]]) {
            case "n":
                phrase[insert[c]] = pull(allnouns)
                break
            case "x":
                phrase[insert[c]] = pull(nouns)
                break
            case "b":
                phrase[insert[c]] = pull(bodyparts)
                break   
            case "v":
                phrase[insert[c]] = pull(verbs)
                break
            case "t":
                phrase[insert[c]] = pull(tpsverbs)
                break
            case "i":
                phrase[insert[c]] = pull(ingverbs)
                break
            case "a":
                phrase[insert[c]] = pull(adjectives)
                break
            case "p":
                phrase[insert[c]] = pull(personnouns)
                break
            case "@":
                phrase[insert[c]] = pull(anynoun)
                break
            case "l":
                phrase[insert[c]] = pull(placenouns)
                break
            default:
                console.log("Something went wrong, probably cause this code sucks.")
                console.log("Unknown character: "+phrase[insert[c]])
        }
        if (insert[c] == 0) {
            phrase[insert[c]] = phrase[insert[c]].charAt(0).toUpperCase() + phrase[insert[c]].slice(1);
        }
    }

    phrase = phrase.join("")
    
    quote.color = randomColor({luminosity: "light"})
    quote.message = phrase
}