document.getElementById('companyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Redirect to companyLoginMess.html after 2 seconds
    setTimeout(function() {
        window.location.href = './companyLoginMess.html';
    }, 2000);
});
