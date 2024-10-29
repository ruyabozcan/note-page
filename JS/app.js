document.getElementById('save-note').addEventListener('click', function(event) {
    event.preventDefault();
    const noteInput = document.querySelector('.todo-input');
    const notesList = document.querySelector('.todo-list');

    if (noteInput.value.trim() !== '') {
        const note = document.createElement('li');
        note.textContent = noteInput.value;
        note.classList.add('note');
        notesList.appendChild(note);
        noteInput.value = '';
    }
});
