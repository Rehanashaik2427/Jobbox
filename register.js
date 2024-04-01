document.getElementById('role-select').addEventListener('change', function() {
    var role = this.value;
    var hrForm = document.getElementById('hr-form');
    var candidateForm = document.getElementById('candidate-form');

    if (role === 'hr') {
        hrForm.style.display = 'block';
        candidateForm.style.display = 'none';
    } else if (role === 'candidate') {
        hrForm.style.display = 'none';
        candidateForm.style.display = 'block';
    } else {
        hrForm.style.display = 'none';
        candidateForm.style.display = 'none';
    }
});
