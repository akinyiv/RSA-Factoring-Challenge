const notes = [
    {
        title : "My next trip",
        body : "awesome spain it is",
    },
    {
        title : "Attend book session",
        body : "London arts",
    },
    {
        title : "Book I am reading",
        body : "Safe harbour",
    },
    {
        title : "JavaScript conference",
        body : "Amsterdam centre, Netherlands",
    },
    {
        title : "Formula1",
        body : "Quater rally",
    },
];
//console.log(notes[5].title);
//console.log(notes[5].body);
notes.forEach(function (item) {
console.log(item.body);
});

//const findNote = function (notesData, noteTitle) {
//    return notesData.find(function (item) {
//       return item.title === noteTitle;
//    });
//};

//console.log(findNote(notes, "attend book session"));

const findNote2 = function (notesData, noteTitle) {
    return notesData.findIndex(function (item) {
        return item.title === noteTitle;
    });
};

console.log(findNote2(notes, "attend book session"));

const findNotes = function (notesData, query) {
    return notesData.filter(function (notes) {
        return notes.title.toLowerCase().includes(query.toLowerCase()) || notes.title.toLowerCase().includes(query.toLowerCase());
    });
};
console.log(findNotes(notes, "s"));
