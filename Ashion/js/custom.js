$(document).ready(function () {
    $('#toggleButton').on('click', function () {
        $('.items').toggle();
        if ($('.items:first').is(':visible')) {
            $(this).text('Ẩn nội dung');
        } else {
            $(this).text('Hiện nội dung');
        }
    });
});


var btnSend = document.getElementById("btn-send");

btnSend.addEventListener('click', function() {
    var nameForm = document.getElementById("Name").value;
    var emailForm = document.getElementById("Email").value;
    var websiteForm = document.getElementById("Website").value;

    if (nameForm === "" || emailForm === "" || websiteForm === "") {
        alert("Vui lòng nhập đủ thông tin");
    }
});