const messages = [
    "오늘 하루도 제가 많이 응원합니다❤️",
    "오늘보다 내일 더 자긔를 사랑합니다❤️",
    "우리의 행복을 위해 제가 많이 사랑합니다❤️🎉",
    "오늘도 다치지 않고 별탈없이 퇴근하길 기도합니다🙏",
    "내 삶에 가장 소중한 자긔, 우리의 미래도 화이팅❤️",
    "우리 이제 공식선언한 빼박부부⭐️",
    "무슨 일이 생겨도 나는 자긔편❤️",
    "건강챙기면서 일해요 여봉❤️",
    "여보자긔마이달링~~❤️ 넌 내꼬얌!!",
    "오늘은 내가 자긔 아침 요리사, 당신을 응원합니다.💪",
    "여봉~ 로또사세용~~❤️ 돈 많은 백수가 되어 보아요❤️",
    "중요하지 않은 것은 한 귀로 듣고 흘려용~~❤️",
    "자긔는 영원히 에어팟이 잘 어울리는 남좌~❤️",
    "요즘에 마샬도 잘 어울리는 남좌~~❤️",
    "웃으면 복이 온댕용~☺️ SMILE! ❤️",
    "오늘도 함께인 것에 감사하며 사랑합니다❤️",
    "자긔덕분에 전 너무 행복해용~❤️",
    "세상에서 제일 따뜻한 자긔 품~❤️",
    "오늘 퇴근하면 뽀뽀해줄껭~❤️",
    "언제나 자긔 곁을 지키는 거부기❤️",
    "오늘 쾌변! 하기를 기원합니다~ 나만의 응아❤️",
    "허그하면 힐링되는 따뜻한 마음 소유자, 내 남편❤️",
    "잘자요~ 내사랑❤️",
    "식사 챙겨드세용❤️ 소중한 내꼬❤️",
    "힘들 땐 언제든 기대요~❤️",
    "외모도 뛰어난데 매력까지 철철 흘러넘지는 지형이~❤️",
    "오늘도 내가 마사지해줄껭~~❤️",
    "올해 잘 마무리 해보자용~❤️",
    "두근두근❤️ 오늘도 심쿵했습니다❤️",
    "아니 어쩜 이렇게 잘 생길수가 있지? ❤️"
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};