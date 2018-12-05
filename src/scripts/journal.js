const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
    */
   let jEntries = '';
const makeJournalEntryComponent = (entry) => {
    // Create your own HTML structure for a journal entry
    journalEntries.push(entry);
    for (let i =0; i < journalEntries.length; i++){
        jEntries = journalEntries[i];
    }
        // jEntries.push(entry);
        // console.log(jEntries);
        return(jEntries);
    
}

makeJournalEntryComponent("roasted pork");

console.log (jEntries);

//This function creates the entries on the document. 
const renderJournalEntries = (journalEntry, entryTitle) => {

    let jEntries = `<p class = ${entryTitle}> ${journalEntry}</p>`;
    document.querySelector('.entryLog').innerHTML += `${jEntries}`;
    
}

let clickMe = document.querySelector('.journalButton');

clickMe.addEventListener("click", renderJournalEntries)

