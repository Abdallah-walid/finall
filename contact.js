const form = document.querySelector("form");
const YourName = document.getElementById("YourName");
const Email = document.getElementById("Email");
const Subject = document.getElementById("Subject");
const YourMessage = document.getElementById("YourMessage");

function sendEmail() {
    const bodyMessage = `Your Name: ${YourName.value}<br> Email:${Email.value}<br>
    Subject: ${Subject.value}<br> Your Message: ${YourMessage.value}<br>`;
    Email.send({
        SecureToken : "smtp.elasticemail.com",
        To : 'bodawalid04@gmail.com',
        From : "bodawalid04@gmail.com",
        Subject : Subject.value,
        Body : bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("Submit", (e) => {
    e.preventDefault();
    sendEmail();
});



