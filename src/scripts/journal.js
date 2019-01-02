
//This function collects all the user input that is typed onto the page. It then places all that data into an object called userJournalEntry. 
let inputDate = '';
let inputConcept = '';
let inputEntry = '';
let inputMood = '';
let userJournalEntry = {};

function collectUserInput () {
inputDate = document.querySelector('.dailyJournal--input').value; 
renderJournalEntries(inputDate, "Date: ");
inputConcept = document.querySelector('.dailyJournal--Concept').value;
renderJournalEntries(inputConcept, "Concept: ");
inputEntry = document.querySelector('.dailyJournal--textJEntry').value;
renderJournalEntries(inputEntry, "Entry: ");
inputMood = document.querySelector('.dailyJournal--selector').value;
renderJournalEntries(inputMood, "Mood: ");
userJournalEntry = {Date: inputDate, Concept: inputConcept, Entry: inputEntry, Mood: inputMood};
console.log(userJournalEntry);
return userJournalEntry;

}

// Event Listeners that listen for the REC button and pass the object above to the create entries function on Appender.
let clickMe = document.querySelector('.journalButton');
clickMe.addEventListener("click", function () {
   let allUserInput = collectUserInput();
   data.contactPost(allUserInput);
//    journalAppender.makeJournalEntryComponent(allUserInput);
    console.log (allUserInput);
})

// Event listener to display content to the screen.
clickMe.addEventListener("click", function () {




})



