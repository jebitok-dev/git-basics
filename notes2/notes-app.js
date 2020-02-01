// const user = {
//     name: 'Jebitok',
//     city: 'Mombasa'
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// ser.naconst data = localStorage.getItem('user')
// const user = JSON.parse(data)
// console.log(`${ume} is in ${user.city}`)


//Query the paragraph tags
// const notes = [{ //creating an array of objects one
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, { //two
//     title: 'Habits to work on',
//     body: 'Exercise. Eating a bit better'
// }, { //three
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

// const filters = { //creatin an object i.e variable called filters
//     searchText: ''
//}

let notes = []

const filters = {
    searchText: ''
}

const notesJSON =localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes= function(notes, filters) { //creating a functional expression
    const filteredNotes = notes.filter(function (note) { //creating a variable
        return note.title.toLowerCase().includes
        (filters.searchText.toLowerCase()) //the value of the outputed from the object
    })

    document.querySelector('#notes').innerHTML = '' //appends the DOM document object mode
    
    filteredNotes.forEach(function (note) { //a call back function
        const noteEl = document.createElement('p');
        // noteEl.textContent = note.title;
        if (note .title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unnamed note'
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters); //invoking function

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value; //e- event (typing) value- result of e
    renderNotes(notes, filters) //re-rendering
})

// );document.querySelector('#name-form').addEventListener('submit',
// function (event) {
//     event.preventDefault()
//     console.log(event.target.elements.firstname.value)
// }

// document.querySelector('#for-fun').addEventListener('change',
// function (e) {
//     console.log(e.target.checked)
// });

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input',
function (e) {
    console.log(e.target.value);
    renderNotes(notes, filters)
});

document.querySelector('#filter-by').addEventListener('change',
function (e) {
    console.log(e.target.value)
})