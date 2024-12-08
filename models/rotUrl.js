const mongoose = require("mongoose")
const shortId = require("shortid")

const brainrotWords = {
    // Lowercase alphabets
    "a": "Alpha",
    "b": "Bababooey",
    "c": "Chungus",
    "d": "Dingle",
    "e": "Edge",
    "f": "Freaky",
    "g": "Goon",
    "h": "Hawk",
    "i": "In",
    "j": "Jelq",
    "k": "Kai",
    "l": "L",
    "m": "Maxxing",
    "n": "Nut",
    "o": "Ohio",
    "p": "Prime",
    "q": "Quandale",
    "r": "Rizz",
    "s": "Skibidi",
    "t": "Tuah",
    "u": "Uwu",
    "v": "Vbucks",
    "w": "W",
    "x": "Twitter",
    "y": "Youaremysunshine",
    "z": "Z",

    // Uppercase alphabets
    "A": "Aura",
    "B": "Bruh",
    "C": "Chillguy",
    "D": "Diddy",
    "E": "Epstein",
    "F": "Fanum",
    "G": "Gyatt",
    "H": "Haileywelch",
    "I": "Icespice",
    "J": "Jonkler",
    "K": "Karen",
    "L": "Looksmaxxing",
    "M": "Mew",
    "N": "Npc",
    "O": "Oof",
    "P": "Pookie",
    "Q": "Queen",
    "R": "Ratio",
    "S": "Sigma",
    "T": "Tweaking",
    "U": "Unalive",
    "V": "Valid",
    "W": "Wrizz",
    "X": "Twitter",
    "Y": "Yap",
    "Z": "Zoomer",

    // Special characters
    "_": "Lowkey",
};


const rotUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => {
            shortUrl = shortId.generate()
            rotUrl = shortUrl.split("").map(char => brainrotWords[char] || char).join("")
            return rotUrl
        }
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    }

})

module.exports = mongoose.model('RotUrl', rotUrlSchema)