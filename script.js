// Mobile navigation

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Booking form

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (checkout <= checkin) {
        alert("Please select a valid checkout date.");
        return;
    }

    alert(
        "Thank you, " + name +
        "! Your booking request has been received."
    );

    bookingForm.reset();
});


// Set minimum date to today

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;


// Automatically update checkout minimum date

document.getElementById("checkin").addEventListener("change", function() {

    document.getElementById("checkout").min = this.value;

});
