function showContactSection(type) {
    const contactContent = document.getElementById('contact-content');
    let content = '';

    switch(type) {
        case 'email':
            content = '<h2>Email Us</h2><p>Reach out to us at contact@ola-tech.com</p>';
            break;
        case 'call':
            content = '<h2>Call Us</h2><p>Give us a call at +234 123 456 7890</p>';
            break;
        case 'visit':
            content = '<h2>Visit Us</h2><p>Find us at 123 Tech Road, Lagos, Nigeria</p>';
            break;
        case 'feedback':
            content = '<h2>Feedback Form</h2><p>We value your feedback. <a href="feedback-form.html">Click here</a> to fill out the form.</p>';
            break;
    }

    contactContent.innerHTML = content;
    document.getElementById('contact-section').style.display = 'block';
}