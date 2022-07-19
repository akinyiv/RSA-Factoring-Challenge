console.log("my notes");

//add new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "Stop Overthinking";
document.querySelector("body").appendChild(newParagraph);

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

notes.forEach(function(note) {
    const p = document.createElement("p");
    p.textContent = `${note.title} -- ${note.body}` ;
    document.querySelector("body").appendChild(p);
});

document.querySelector("#createNote").addEventListener("click", function (event) {
    event.target.textContent = "the button was clicked"
});

document.querySelector("#removeNotes").addEventListener("click", function (event) {
    document.querySelectorAll("p").forEach(function (item) {
        item.remove();
    });
});