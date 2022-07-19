console.log("To do");

//add new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "Daily Activities";
document.querySelector("body").appendChild(newParagraph);

const notes = [
    {
        text : "Exercise",
        body : "Easy pizzy"
    },
    {
        text : "Study",
        body : "New concept"
    }
];

notes.forEach(function(note) {
    const p = document.createElement("p");
    p.textContent = `${note.text} -- ${note.body}` ;
    document.querySelector("body").appendChild(p);
});

document.querySelector("#createNote").addEventListener("click", function (event) {
    event.target.textContent = "the button was clicked";
});

document.querySelector("#removeNotes").addEventListener("click", function (event) {
    document.querySelectorAll("p").forEach(function (item) {
        item.remove();
    });
});