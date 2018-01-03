var nameLinks = document.querySelectorAll('[href*="/comics/characters/"]');

var characterInfo = []
nameLinks.forEach(name => {
    var object = {}
    var id = name.outerHTML.slice(28, 35);

    object.name = name.innerHTML
    object.id = id
    characterInfo.push(object);
})

characterInfo
copy(JSON.stringify(characterInfo));

var comicLinks = document.querySelectorAll('[href*="/comics/series/"]');

var comicInfo = []
comicLinks.forEach(name => {
    var object = {}
    var linkTag = name.outerHTML;
    var linkParts = linkTag.split('/');
    var id = linkParts[3];

    var yearSetup = name.innerHTML;

    var name = name.innerHTML.replace(/ *\([^)]*\) */g, "");
    
    var regExp = /\(([^)]+)\)/;
    var year = yearSetup.replace(/^[^(]*\(/, "").replace(/\)[^(]*$/, "").split(/\)[^(]*\(/)[0];


    object.name = name;
    object.year = year;
    object.id = id;
    comicInfo.push(object);
})

comicInfo
copy(JSON.stringify(comicInfo));

<a href="/comics/series/14616/astonishing_x-men_mgc_(2011)">Astonishing X-Men MGC (2011)</a>