document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.querySelector("form");

    // Add an event listener for the form submit event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form field values
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var touristSpot = document.getElementById("tourist-spot").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var daysChecked = [];
        var days = document.querySelectorAll('input[name="days"]:checked');
        days.forEach(function(day) {
            daysChecked.push(day.value);
        });
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var calendar = document.getElementById("calendar").value;

        // Build the message to display
        var message = "Thank you for registering!\n";
        message += "First Name: " + firstName + "\n";
        message += "Last Name: " + lastName + "\n";
        message += "Age: " + age + "\n";
        message += "Tourist Spot: " + touristSpot + "\n";
        message += "Gender: " + gender + "\n";
        message += "Number of Days: " + daysChecked.join(", ") + "\n";
        message += "Email: " + email + "\n";
        message += "Phone: " + phone + "\n";
        message += "Calendar: " + calendar + "\n";

        // Display the message in a pop-up window
        alert(message);
    });
});
