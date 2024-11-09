const youtube_button = document.getElementById("youtube-button")
const discord_button = document.getElementById("discord-button")
const server_status_button = document.getElementById("server-status-button")
const rule_button = document.getElementById("rule-button")

const background2 = document.getElementById("background2");

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const currentScrollY = window.scrollY;
        
        if (entry.isIntersecting && currentScrollY > lastScrollY) {
            entry.target.classList.add('visible');
        }
        
        lastScrollY = currentScrollY;
    });
});


const boxes_left = document.querySelectorAll('.middle-text-left');

boxes_left.forEach(box => {
    observer.observe(box);
});

const boxes_right = document.querySelectorAll('.middle-text-right');

boxes_right.forEach(box => {
    observer.observe(box);
});


let TextShowcheck = false;

background2.addEventListener("dblclick", function() {
    const children = background2.querySelectorAll('*');
    if (TextShowcheck === false) {
        children.forEach(function(child) {
            if (child.classList.contains("hidden-text")) {
                child.classList.remove("hidden-text");
            } else {
                if (child.classList.contains("check-hidden")) {
                    child.classList.add("hidden-text");
                }
            }
        });
        TextShowcheck = true;
    } else {
        if (TextShowcheck === true) {
            children.forEach(function(child) {
                if (child.classList.contains("check-hidden")) {
                    if (!child.classList.contains("hidden-text")) {
                        child.classList.add("hidden-text");
                    } else {
                        child.classList.remove("hidden-text");
                    }
                }
            });
            TextShowcheck = false;
        }
    }
});

rule_button.addEventListener("click", function(){
    alert("규칙 페이지는 현재 준비중입니다! 디스코드 Rules 페이지를 확인해주세요.")
});

youtube_button.addEventListener("click", function() {
    const youtube = "https://www.youtube.com/channel/UClDtbMfGtunkPEuXJBs5_Cw";
    window.open(youtube, "_blank")
});

discord_button.addEventListener("click", function(){
    const discord = "https://discord.gg/cwdWsDbere";
    window.open(discord, "_blank")
});

server_status_button.addEventListener("click", function(){
    const server_status = "https://stats.uptimerobot.com/QYU8QSbP3P/797573602";
    window.open(server_status, "_blank")
});


jQuery(document).ready(function() {
    window.scrollTo(0, 0);
    togglechangetext();
});

function togglechangetext() {
    setTimeout(function(){
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를 위 서버";
        }, 100);
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를  서버";
        }, 200);
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를 존 서버";
        }, 400);
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를 존중 서버";
        }, 500);
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를 존중하 서버";
        }, 600);
        setTimeout(function() {
            document.getElementById("change").innerHTML = "유저를 존중하는 서버";
        }, 700);
        setTimeout(function(){
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 존중하 서버";
            }, 100);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 존중 서버";
            }, 200);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 존 서버";
            }, 300);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를  서버";
            }, 400);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 즐 서버";
            }, 500);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 즐겁 서버";
            }, 600);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 즐겁게 서버";
            }, 700);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 즐겁게 하 서버";
            }, 800);
            setTimeout(function() {
                document.getElementById("change").innerHTML = "유저를 즐겁게 하는 서버";
            }, 900);
            setTimeout(function(){
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를 즐겁게 하는 서버";
                }, 100);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를 즐겁게 하 서버";
                }, 200);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를 즐겁게  서버";
                }, 300);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를 즐겁 서버";
                }, 400);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를 즐 서버";
                }, 500);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저를  서버";
                }, 600);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저  서버";
                }, 700);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와  서버";
                }, 800);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언 서버";
                }, 900);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제 서버";
                }, 1000);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제든 서버";
                }, 1100);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제든 함 서버";
                }, 1200);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제든 함께 서버";
                }, 1300);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제든 함께하 서버";
                }, 1400);
                setTimeout(function() {
                    document.getElementById("change").innerHTML = "유저와 언제든 함께하는 서버";
                }, 1500);
                setTimeout(function(){
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제든 함께하는 서버";
                    }, 100);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제든 함께하 서버";
                    }, 200);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제든 함께 서버";
                    }, 300);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제든 함 서버";
                    }, 400);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제든  서버";
                    }, 500);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언제 서버";
                    }, 600);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와 언 서버";
                    }, 700);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저와  서버";
                    }, 800);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저 서버";
                    }, 900);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저를  서버";
                    }, 1000);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저를 위 서버";
                    }, 1100);
                    setTimeout(function() {
                        document.getElementById("change").innerHTML = "유저를 위한 서버";
                    }, 1200);
                    togglechangetext();
                }, 4000);
            }, 4000);
        }, 4000);
    }, 3000);
}
