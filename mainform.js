// 디렉토리
const home = document.getElementById("home");
const rules = document.getElementById("rules")

// 버튼
const discordbt = document.getElementById("discordbt");
const kakaotalkbt = document.getElementById("kakaotalkbt");
const rulesbt = document.getElementById("rulesbt");
const homebt = document.getElementById("homebt")

const serveraddress = document.getElementById("serveraddress");

discordbt.addEventListener("click", function() {
    const discord = "https://discord.gg/cwdWsDbere";
    console.log("Discord Button Click")
    window.open(discord, "_blank");
});

kakaotalkbt.addEventListener("click", function() {
    const kakaotalk = "https://open.kakao.com/o/gyoRzLHd";
    console.log("Kakaotalk Button Click")
    alert("⚠️ 제작중입니다. 양해 부탁드립니다.")
    // window.open(kakaotalk, "_blank");
});

serveraddress.addEventListener("click", function() {
    var address = "zepick.kro.kr"
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address)
        .then(() => {
        console.log("Copy address >> " + address);
        alert("📑서버주소가 복사되었습니다!");
        })
        .catch((error) => {
        console.error("오류 발생:", error);
        });
    } else {
        console.log("해당 브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 해당 브라우저에서 클립보드에 접근할 수 없습니다.");
        alert("🚫 이 주소을 복사해주세요. >> zepick.kro.kr");
    }
});

homebt.addEventListener("click", function() {
    home.style.display = 'block';
    rules.style.display = 'none';
    rulesbt.style.color = 'white';
    homebt.style.color = 'black';
});

rulesbt.addEventListener("click", function() {
    home.style.display = 'none';
    rules.style.display = 'block';
    rulesbt.style.color = 'black';
    homebt.style.color = 'white';
});
