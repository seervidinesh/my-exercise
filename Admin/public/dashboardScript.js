$.ajax({
    url: "/studios/getStudios",
    type: "GET",
    dataType: "json",
    success: data => {
        //console.log(data)
        var studioChat = "";
        for (let i = data.length - 1; i >= 0; i--) {
            studioChat += `
            <div class="chat_list active_chat" value="${data[i]._id}">
                    <div class="chat_people" >
                        <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
                        </div>
                        <div class="chat_ib">
                            <h5> ${data[i].studioName} <span class="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                                astrology under one roof.</p>
                        </div>
                    </div>
                </div>
            `
        }
        $("#chatStudioList").append(studioChat);
    }
});


$(document).on("click", ".chat_list", function() {
    var stdId = $(this).attr("value")
        //alert(stdId)
    $.ajax({
        url: "/chat/getWhatsappMsgByStudioId?id=" + stdId,
        type: "GET",
        dataType: "json",
        success: (data) => {
            $('.msg_history').empty();
            var outputMsg = "";
            for (let i = 0; i < data[0].msgData.length; i++) {
                outputMsg +=
                    `
                <div class="outgoing_msg">
                <div class="sent_msg">
                <p>${data[0].msgData[i].msg}</p>
                <span class="time_date"> ${data[0].msgData[i].dateCreated} </span>
                </div>
                </div>
                `
            }
            $('.msg_history').append(outputMsg)
                //console.log(data[0].msgData[0])
        }
    })
})