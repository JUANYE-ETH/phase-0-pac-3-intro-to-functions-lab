function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(Hello) {
    console.log(Hello.toUpperCase());
}

function logWhisper(Hello) {
    console.log(Hello.toLowerCase());
}

function sayHiToHeadphonedRoommate(Hello) {
    if (Hello === Hello.toLowerCase()) {
        return 'I can\'t hear you!';
    }
    else if (Hello === Hello.toUpperCase()) {
        return 'YES INDEED!';
    }
    else if (Hello === "Let's have dinner together!") {
        return "I would love to!"
    }
}