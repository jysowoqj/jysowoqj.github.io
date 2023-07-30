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
    window.open(kakaotalk, "_blank");
});

serveraddress.addEventListener("click", function() {
    var address = "krmcsv.p-e.kr"
    navigator.clipboard.writeText(address)
    console.log("Copy address >> " + address)
    alert("📑Copy Server Address.")
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