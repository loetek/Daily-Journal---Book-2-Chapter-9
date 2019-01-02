const data = {
contactPost (inputToPost)
{
    fetch("http://localhost:8088/journalEntries", { // Replace "url" with your API's URL
     method: "POST",
     headers: {
        "Content-Type": "application/json"
            },
        body: JSON.stringify(inputToPost)
     })

}

}