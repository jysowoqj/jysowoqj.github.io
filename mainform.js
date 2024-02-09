// 디렉토리
const home = document.getElementById("home");
const rules = document.getElementById("rules")

// 버튼
const discordbt = document.getElementById("discordbt");
const kakaotalkbt = document.getElementById("kakaotalkbt");
const rulesbt = document.getElementById("rulesbt");
const homebt = document.getElementById("homebt")

const serveraddress = document.getElementById("serveraddress");
const boxElement = document.getElementById('box');


window.onload = function () {
        window.scrollTo(125, 0);
};

// TOP BOX 상단 바 색깔 조정
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const boxElement = document.getElementById('box');

    if (scrollY > 550) {
        boxElement.style.backgroundColor = '#aaa';
    } else {
        boxElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
});

// DISCORD BUTTON
discordbt.addEventListener("click", function() {
    const discord = "https://discord.gg/cwdWsDbere"; // 추후 디스코드 서버 링크 바뀌면 변경 가능
    console.log("Discord Button Click")
    window.open(discord, "_blank");
});

// KAKAOTALK BUTTON
kakaotalkbt.addEventListener("click", function() {
    const kakaotalk = "https://open.kakao.com/o/gC2pyXNf"; // 추후 카카오톡 서버 링크 바뀌면 변경 가능
    console.log("Kakaotalk Button Click")
    window.open(kakaotalk, "_blank")
});

// Server Address Copy BUTTON
serveraddress.addEventListener("click", function() {
    var address = "zepick.kro.kr" // 서버 주소
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address)
        .then(() => {
        console.log("Copy address >> " + address);
        alert("📑서버주소가 복사되었습니다!");
        })
        .catch((error) => { // 알 수 없는 오류가 발생했을때
        console.error("오류 발생:", error);
        });
    } else {
        console.log("해당 웹브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 해당 웹브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 이 주소을 복사해주세요.");
        alert("서버 주소 : ", address) // 추후 서버 주소 바뀌면 바꿔야함
    }
});

// HOME BUTTON : 클릭시 메인 페이지로 넘어감
homebt.addEventListener("click", function() {
    home.style.display = 'block';
    rules.style.display = 'none';
    rulesbt.style.color = 'white';
    homebt.style.color = 'black';
});

// RULES BUTTON : 클릭시 규칙 페이지로 넘어감
rulesbt.addEventListener("click", function() {
    home.style.display = 'none';
    rules.style.display = 'block';
    rulesbt.style.color = 'black';
    homebt.style.color = 'white';
});