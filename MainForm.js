// 박스
const Top_bar = document.getElementsByClassName("Top_Box");
var Top_bar_Click = false

// 버튼
const menu_button = document.getElementById("Menu_Button");
const home_button = document.getElementById("Home_Button")
const rules_button = document.getElementById("Rules_Button")
const sns_button = document.getElementById("SNS_Button")
const status_button = document.getElementById("Status_Button")

// 탑 버튼
const Instagram_button = document.getElementById("Instagram_Button")
const Discord_button = document.getElementById("Discord_Button")
const Youtube_button = document.getElementById("Youtube_Button")

menu_button.addEventListener("click", function(){
    if (Top_bar_Click === false) {
        $('.Menu_Box').css('left', '-400px');
        $('.Menu_Box').css('display', 'block');
        setTimeout(function(){
            $('.Menu_Box').css('left', '0px');
        }, 50);
        Top_bar_Click = true
    } else if(Top_bar_Click === true) {
        $('.Menu_Box').css('left', '0px');
        setTimeout(function(){
            $('.Menu_Box').css('left', '-400px');
            $('.Menu_Box').css('display', 'block');
        }, 50);
        Top_bar_Click = false
    };
});

Instagram_button.addEventListener("click", function(){
    alert("준비중입니다..")
    // const instagram = "";
    // console.log("Kakaotalk Button Click")
    // window.open(youtube, "_blank")
});

Youtube_button.addEventListener("click", function(){
    const youtube = "https://www.youtube.com/channel/UClDtbMfGtunkPEuXJBs5_Cw";
    window.open(youtube, "_blank")
});

Discord_button.addEventListener("click", function(){
    const discord = "https://discord.gg/cwdWsDbere";
    window.open(discord, "_blank")
});

$('.Loading').show();
$(window).on('load', function() {
    setTimeout(function(){
        $('.Loading').fadeOut(150);
    }, 100);
});

home_button.addEventListener("click", function(){
    $('.Home').css('display', 'block');
    $('.Rule').css('display', 'none');
});

rules_button.addEventListener("click", function(){
    $('.Home').css('display', 'none');
    $('.Rule').css('display', 'block');
});

sns_button.addEventListener("click", function(){
    alert("Server SNS Button");
});

status_button.addEventListener("click", function(){
    alert("Server Status Button");
});