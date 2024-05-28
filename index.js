document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('messageButton');
    var message = document.getElementById('message');
    
    button.addEventListener('click', function() {
        message.style.display = 'block';
    });
});