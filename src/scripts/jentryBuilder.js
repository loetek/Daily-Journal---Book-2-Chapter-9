//This function creates the entries on the document. 
const renderJournalEntries = (journalEntry, entryTitle) => {

    let jEntries = `<p class = ${entryTitle}> ${journalEntry}</p>`;
    document.querySelector('.entryLog').innerHTML += `${jEntries}`;
    
}
