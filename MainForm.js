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
        Top_bar_Click = true
        $('.Menu_Box').css('left', '-400px');
        $('.Menu_Box').css('display', 'block');
        $('#Home_Button').css('left', '-400px')
        $('#Rules_Button').css('left', '-400px')
        setTimeout(function(){
            $('.Menu_Box').css('left', '0px');
        }, 50);
        setTimeout(function(){
            $('#Home_Button').css('left', '8%')
        }, 180);
        setTimeout(function(){
            $('#Rules_Button').css('left', '8%')
        }, 260);
    } else if(Top_bar_Click === true) {
        Top_bar_Click = false
        $('.Menu_Box').css('left', '0px');
        setTimeout(function(){
            $('.Menu_Box').css('left', '-400px');
            $('.Menu_Box').css('display', 'block');
        }, 260);
        setTimeout(function(){
            $('#Home_Button').css('left', '-400px')
        }, 180);
        setTimeout(function(){
            $('#Rules_Button').css('left', '-400px')
        }, 50);
    };
});

Instagram_button.addEventListener("click", function(){
    // const instagram = "";
    // window.open(instagram, "_blank")
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
$('.Home').fadeOut();
$(window).on('load', function() {
    $('#Youtube_Button').css('top', '-80%');
    $('#Instagram_Button').css('top', '-80%');
    $('#Discord_Button').css('top', '-80%');
    $('#Home_Button').css('color', 'rgba(100, 100, 100)')
    $('#Welcome_Text').fadeIn(150);
    $('.Home').fadeIn(800);
    setTimeout(function(){
        $('.Loading').fadeOut(150);
    }, 150);
    setTimeout(function(){
        $('#Youtube_Button').css('top', '50%');
    }, 200);
    setTimeout(function(){
        $('#Instagram_Button').css('top', '50%');
    }, 300);
    setTimeout(function(){
        $('#Discord_Button').css('top', '50%');
    }, 400);
});

home_button.addEventListener("click", function(){
    $('.Home').fadeIn(150);
    $('.Rule').css('display', 'none');
    $('#Home_Button').css('color', 'rgba(100, 100, 100)')
    $('#Rules_Button').css('color', 'white')
});

rules_button.addEventListener("click", function(){
    $('.Home').css('display', 'none');
    $('.Rule').fadeIn(150);
    $('#Home_Button').css('color', 'white')
    $('#Rules_Button').css('color', 'rgba(100, 100, 100)')
});
