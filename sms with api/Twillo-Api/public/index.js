$("#sendWp").on("click", e => {
    e.preventDefault();
    var messageData = {
        msg: $("#msg").val(),
        phoneNumber: $("#phoneNumber").val()
            //mediaUrl: $("#mediaURL").val()
    };
    console.log(messageData);
    $.ajax({
        url: "/sendWhatsappSMS",
        type: "POST",
        data: messageData,
        dataType: "json",
        success: data => {
            console.log(`Your message has been sent to ${data.to}`);
        }
    });
});