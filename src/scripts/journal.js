const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
]

let inputDate = document.querySelector('.dailyJournal--input'); 
let inputConcept = document.querySelector('.dailyJournal--Concept');
let inputEntry = document.querySelector('.dailyJournal--Conceptdaily');
// let inputMood = doument.querySelector('.dailyJournal--selector');


console.log (inputDate, inputConcept, inputEntry);
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

// console.log (jEntries);

//This function creates the entries on the document. 
const renderJournalEntries = (journalEntry, entryTitle) => {

    let jEntries = `<p class = ${entryTitle}> ${journalEntry}</p>`;
    document.querySelector('.entryLog').innerHTML += `${jEntries}`;
    
}

let clickMe = document.querySelector('.journalButton');

clickMe.addEventListener("click", renderJournalEntries)


renderJournalEntries("today", "tommorow");

