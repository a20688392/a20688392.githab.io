window.onload = function () {
    $('.top').load('top.html');
    $('.down').load('flooter.html');

};

$(document).ready(
    function () {
        $("#sub").click(function () {
            if ($("#inputName").val != "") {
                checkname = 1;
            }
            if ($("#inputAccount").val != "") {
                checkaccount = 1;
            }
            console.log(checkaccount);
            console.log(checkpassword);
            console.log(checkphone);
            console.log(checkemail);
            if (checkname != 1 || checkaccount != 1 || checkpassword != 1 || checkphone != 1 || checkemail != 1) {
                alert("有資料不正確或沒填!");
            } else {
                alert("申請成功!!");
                //card
                var liCard = $("<li>");
                liCard.addClass("card");
                liCard.attr("title", "個人資訊");
                //姓名
                var Cardname = $("<p>");
                Cardname.html("姓名：" + $("#inputName").val());
                //帳號
                var CardAccount = $("<p>");
                CardAccount.html("帳號：" + $("#inputAccount").val());
                // CardLink.addClass("busLink");
                //密碼
                var CardPassword = $("<p>");
                CardPassword.html("密碼：" + $("#inputPassword").val());
                //電話
                var CardPhone = $("<p>");
                CardPhone.html("電話：" + $("#inputPhone").val());
                // 信箱
                var CardEmail = $("<p>");
                CardEmail.html("信箱：" + $("#inputEmail").val());

                liCard.append(
                    Cardname,
                    CardAccount,
                    CardPassword,
                    CardPhone,
                    CardEmail
                );

                $(".acessok").append(liCard);
                $(".change").empty();
                $(".change").html('申請成功');
                $(".apply_form").css("display", "none");
            }
        });
    }
);


var search = $("#inputAgainPassword");
var searchphone = $("#inputPhone");
var searchemail = $("#inputEmail");
let checkname = 0;
let checkaccount = 0;
let checkpassword = 0;
let checkphone = 0;
let checkemail = 0;
search.bind("input", function () {//input屬性 = 使用者每次操作都跑一次 function
    check();
});
searchphone.bind("input", function () {//input屬性 = 使用者每次操作都跑一次 function
    checkphoneregxp();
});
searchemail.bind("input", function () {//input屬性 = 使用者每次操作都跑一次 function
    checkemailregxp();
});


function check() {
    console.log($("#inputPassword").val());
    console.log($("#inputAgainPassword").val());
    if ($("#inputPassword").val() == $("#inputAgainPassword").val()) {
        $("#inputPassword").attr("class", "is-valid form-control");
        $("#inputAgainPassword").attr("class", "is-valid form-control");
        checkpassword = 1;
    } else {
        $("#inputPassword").attr("class", "is-invalid form-control");
        $("#inputAgainPassword").attr("class", "is-invalid form-control");
        checkemail = 0;
    }
}

function checkphoneregxp() {
    console.log($("#inputPhone").val());
    var phoneRegxp = /^09[0-9]{8}$/;
    if (phoneRegxp.test($("#inputPhone").val()) != true) {
        console.log('電話號碼錯誤');
        $("#inputPhone").attr("class", "is-invalid form-control");
        checkemail = 0;
    } else {
        $("#inputPhone").attr("class", "is-valid form-control");
        checkphone = 1;
    }
}
function checkemailregxp() {
    console.log($("#inputEmail").val());
    var emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/;

    if (emailRegxp.test($("#inputEmail").val()) != true) {
        console.log('電子信箱格式錯誤');
        $("#inputEmail").attr("class", "is-invalid form-control");
        checkemail = 0;
    } else {
        $("#inputEmail").attr("class", "is-valid form-control");
        checkemail = 1;
    }
}





