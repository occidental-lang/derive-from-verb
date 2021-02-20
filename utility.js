function isVowel(x) { 
    return ("aeiouAEIOU".indexOf(x) != -1); 
}

function getPresentTheme(infinitive) { 
    return infinitive.split("").slice(0, -1).join("");
}

function getVerbalRoot(infinitive) {
    return infinitive.split("").slice(0, -2).join("");
}

function getPerfectTheme(infinitive, type) {
    
    // irregulars
    switch (infinitive) {
        case 'ceder':
        return "cess"
        // "creder" is a very unique word
        case 'creder':
        return "cred"
        case 'seder':
        return "sess"
        case 'mover':
        return "mot"
        case 'tener':
        return "tent"
        case 'verter':
        return "vers"
        case 'venir':
        return "vent"
        default:
        break;
    }

    var rootLetters = [];
    if (type == 'er') {
        rootLetters = infinitive.split("").slice(0, -2);
        if (rootLetters[rootLetters.length - 1] == "d") {
            rootLetters[rootLetters.length - 1] = "s";
        } else if (rootLetters[rootLetters.length - 1] == "r") { 
            rootLetters[rootLetters.length - 1] = "s";   
        } else if (isVowel(rootLetters[rootLetters.length - 1])) {
            rootLetters.push("t");
        }
    } else if (type == 'ir' || type == 'ar') {
        rootLetters = infinitive.split("").slice(0, -1);
        rootLetters.push("t");
    }
    return rootLetters.join("");
}

function getType(infinitive) {
    return infinitive.split("").slice(-2).join("");
}

function getDerivatives(infinitive, perfectTheme, presentTheme, verbalRoot, type) {

    var derivatives = [
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "li + perfect theme + e",
        "derivative": "li " + perfectTheme + "e",
        "derivative type": "noun or adjective",
        "explanation": "noun or adjective",
        "example": "li response"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ion" ,
        "derivative": perfectTheme + "ion",
        "derivative type": "noun",
        "explanation": "action, also result and location of it",
        "example": "colaboration"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + or" ,
        "derivative": perfectTheme + "or",
        "derivative type": "noun",
        "explanation": "acting person, thing or factor",
        "example": "administrator"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ori" ,
        "derivative": perfectTheme + "ori",
        "derivative type": "adjective",
        "explanation": "destined toward, should act as (adjective of -or)",
        "example": "administratori"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + iv" ,
        "derivative": perfectTheme + "iv",
        "derivative type": "adjective",
        "explanation": "acting as such, capable of",
        "example": "administrativ"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ura" ,
        "derivative": perfectTheme + "ura",
        "derivative type": "noun",
        "explanation": "concrete action or its result",
        "example": "scritura"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + age" ,
        "derivative": verbalRoot + "age",
        "derivative type": "noun",
        "explanation": "activity, mainly industrial or professional, also its result, location or time, also its expenses",
        "example": "viage, espionage, portage"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + achar" ,
        "derivative": verbalRoot + "achar",
        "derivative type": "verb",
        "explanation": "verb with negative, pejorative meaning",
        "example": "plorachar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + era" ,
        "derivative": verbalRoot + "era",
        "derivative type": "",
        "explanation": "",
        "example": ""
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ard" ,
        "derivative": verbalRoot + "ard",
        "derivative type": "noun",
        "explanation": "people with a bad quality",
        "example": "mentard"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + on" ,
        "derivative": verbalRoot + "on",
        "derivative type": "noun",
        "explanation": "person characterized by an internal or natural quality",
        "example": "novon"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ore" ,
        "derivative": verbalRoot + "ore",
        "derivative type": "noun",
        "explanation": "status or measurable quality",
        "example": "calore"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + uore" ,
        "derivative": verbalRoot + "uore",
        "derivative type": "noun",
        "explanation": "location or utensil",
        "example": "reservuore"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + aci" ,
        "derivative": verbalRoot + "aci",
        "derivative type": "adjective",
        "explanation": "tending towards something",
        "example": "tending towards something"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + isar" ,
        "derivative": verbalRoot + "isar",
        "derivative type": "verb",
        "explanation": "act in a manner / as",
        "example": "terrorisar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ificar" ,
        "derivative": verbalRoot + "ificar",
        "derivative type": "verb",
        "explanation": "act in a manner. also forms adjectives:: pacific, magnific, specific",
        "example": "verificar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ear" ,
        "derivative": verbalRoot + "ear",
        "derivative type": "verb",
        "explanation": "dynamic state of coming and going",
        "example": "flammear"
        }
    ]


    if (type == "ar") {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "li verbal root + a",
        "derivative": "li " + verbalRoot + "a",
        "derivative type": "noun",
        "explanation": "noun (indicating activity, location or time)",
        "example": "li pensa"
        })
    }
    derivatives.push({
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "li verbal root + e",
        "derivative": "li " + verbalRoot + "e",
        "derivative type": "noun",
        "explanation": "noun (general ending)",
        "example": "li pense"
    })

    if (type == "ir") {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + entie",
        "derivative": presentTheme + "entie",
        "derivative type": "noun",
        "explanation": "continuing state",
        "example": "tolerantie",
        })
    } else { 
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + ntie",
        "derivative": presentTheme + "ntie",
        "derivative type": "noun",
        "explanation": "continuing state",
        "example": "tolerantie"
        })
    }

    if (type == "ir") {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + ente/o/a",
        "derivative": presentTheme + "ente/o/a",
        "derivative type": "noun",
        "explanation": "doer of the verb",
        "example": "consonante",
        })
    } else { 
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + nte/o/a",
        "derivative": presentTheme + "nte/o/a",
        "derivative type": "noun",
        "explanation": "doer of the verb",
        "example": "consonante"
        })
    }

    if (type == "ir") {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + end",
        "derivative": presentTheme + "end",
        "derivative type": "noun",
        "explanation": "to do",
        "example": "multiplicand",
        })
    } else { 
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + nd",
        "derivative": presentTheme + "nd",
        "derivative type": "noun",
        "explanation": "to do",
        "example": "multiplicand"
        })
    }

    if (type == "er" && isVowel(verbalRoot.split("").slice(-1))) {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ment",
        "derivative": verbalRoot + "ment",
        "derivative type": "noun",
        "explanation": "concrete action or its result, or serving to / serving as",
        "example": "guvernament",
        })
    } else {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "present theme",
        "formula": "present theme + ment",
        "derivative": presentTheme + "ment",
        "derivative type": "noun",
        "explanation": "concrete action or its result, or serving to / serving as",
        "example": "",
        })
    }

    if (type == "ar") {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + abil",
        "derivative": verbalRoot + "abil",
        "derivative type": "adjective",
        "explanation": "of transitive verbs: what one can do, of intransitive verbs: what can do",
        "example": "",
        },{
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ada",
        "derivative": verbalRoot + "ada",
        "derivative type": "noun",
        "explanation": "continuing action",
        "example": "",
        })
    } else {
        derivatives.push({
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ibil",
        "derivative": verbalRoot + "ibil",
        "derivative type": "adjective",
        "explanation": "of transitive verbs: what one can do, of intransitive verbs: what can do",
        "example": "",
        },{
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ida",
        "derivative": verbalRoot + "ida",
        "derivative type": "noun",
        "explanation": "continuing action",
        "example": "",
        })
    }

    return derivatives
}
