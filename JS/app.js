document.getElementById('save-note').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    if (noteInput.value.trim() !== '') {
        const note = document.createElement('div');
        note.textContent = noteInput.value;
        note.classList.add('note');
        notesList.appendChild(note);
        noteInput.value = '';
    }
});
