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

// 상단바 설정
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
    const discord = "https://discord.gg/cwdWsDbere";
    console.log("Discord Button Click")
    window.open(discord, "_blank");
});

// KAKAOTALK BUTTON
kakaotalkbt.addEventListener("click", function() {
    const kakaotalk = "https://open.kakao.com/o/gC2pyXNf";
    console.log("Kakaotalk Button Click")
    window.open(kakaotalk, "_blank")
});

// Server Address Copy BUTTON
serveraddress.addEventListener("click", function() {
    var address = "zepick.kro.kr" // 복사될 서버 주소
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address)
        .then(() => {
        console.log("Copy address >> " + address);
        alert("📑서버주소가 복사되었습니다!");
        })
        .catch((error) => {
        console.error("오류 발생:", error);
        });
    } else { // 브라우저에서 클립보드에 엑세스 할 수 없을때
        console.log("해당 웹브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 해당 웹브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 이 주소을 복사해주세요. >> zepick.kro.kr");
    }
});

// HOME BUTTON
homebt.addEventListener("click", function() {
    home.style.display = 'block';
    rules.style.display = 'none';
    rulesbt.style.color = 'white';
    homebt.style.color = 'black';
});

// RULES BUTTON
rulesbt.addEventListener("click", function() {
    home.style.display = 'none';
    rules.style.display = 'block';
    rulesbt.style.color = 'black';
    homebt.style.color = 'white';
});
