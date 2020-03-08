var stdId;
var stdName;
$.ajax({
    url: "/allProjects/getProjectByLoockup",
    type: "GET",
    dataType: "json",
    success: data => {}
});

$.ajax({
    url: "/allProjects/getProjectByLoockup",
    type: "GET",
    dataType: "json",
    success: data => {
        var tableData = "";
        //console.log(data)
        var tPayment = [];
        var rPayment = [];
        for (let i = data.length - 1; i >= 0; i--) {
            tPayment.push(parseInt(data[i].totalPayment));
            rPayment.push(parseInt(data[i].paymentReceived));
            tableData += `<tr>
            <td>${data[i].serialNumber}</td>
            <td>${data[i].stdData[0].studioName}</td>
            <td value="">${data[i].partyName}</td>
            <td>${data[i].jobType}</td>
            <td>${data[i].projectStatus}</td>
            <td>${data[i].totalDvD}</td>
            <td>${data[i].projectReceivedOn}</td>
            <td>${data[i].projectDelivredOn}</td>
            <td>${data[i].totalPayment}</td>
            <td>${data[i].paymentReceived}</td>
            <td>${ data[i].totalPayment - data[i].paymentReceived} </td>
            <td class="deleteBtn" value="${data[i]._id}"><i class="fas fa-trash-alt"></i></i></td>
            </tr>`;
        }
        var Tp = tPayment.reduce(function(acc, val) {
            return acc + val;
        }, 0)
        var Rp = rPayment.reduce(function(acc, val) {
            return acc + val;
        }, 0)
        console.log("tPayment" + tPayment, "rPayment" + rPayment)
        var Dp = Tp - Rp
        var paymentRow = `<tr> <td colspan="3"> Total Payment : ${Tp} </td> 
            <td colspan="5"> Payment Submitted : ${Rp} </td>
            <td colspan="4"> Payment Due : ${Dp} </td>
            </tr>`
        $("#tbody").append(tableData);
        $("#tbody").append(paymentRow);
    }
});


$(document).on("click", ".deleteBtn", function() {
    if (confirm("Are you sure to delete this project")) {
        var deleteBtnId = $(this).attr("value");
        //console.log(deleteBtnId)
        $.ajax({
            url: "/projects/deleteProjects?id=" + deleteBtnId,
            type: "delete",
            success: data => {
                alert(data);
                location.reload();
            }
        });
    }
});
$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#allProjectTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});