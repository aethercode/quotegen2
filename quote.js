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
var saved = new Vue({
    el: "#saved",
    data: {
        quotes: [],
        filled: false
    },
    methods: {
        clear: function() {
            saved.filled = false
            saved.quotes = []
        }
    }
})
var savebutton = new Vue({
    el: "#savebutton",
    data: {
        disabled: true
    }
})
var checkboxes = new Vue({
    el: "#checkboxes",
    data: {
        shoulders: false,
        coolkids: false,
        general: true
    }
})

var phrase

function startGen() {
    genLists()
    if (thingnouns.length * nouns.length * bodyparts.length * verbs.length * tpsverbs.length * ingverbs.length * adjectives.length * personnouns.length * anynoun.length * placenouns.length == 0) {
        phrase = "You need to select more options."
        savebutton.disabled = true
        quote.color = randomColor({luminosity: "light"})
        quote.message = phrase
    } else {
        gen()
    }
}
function gen() {
    phrase = pull(phrases)
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
                phrase[insert[c]] = pull(thingnouns)
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

    savebutton.disabled = false
    phrase = phrase.join("")
    
    quote.color = randomColor({luminosity: "light"})
    quote.message = phrase
}

function save() {
    saved.quotes.push({text: phrase})
    savebutton.disabled = true
    saved.filled = true
}