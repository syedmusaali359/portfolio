function submitForm() {
    const form = document.getElementById('contactform');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission initially
        
        // Perform form validation here (e.g., check if fields are empty)
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        // Simple validation
        if (name && email && subject && message) {
            // If valid, allow the form to submit normally
            form.submit();  // Form is automatically sent to formsubmit.co
        } else {
            // If invalid, show an error (you can customize this)
            alert('Please fill all the fields.');
        }
    });
}
