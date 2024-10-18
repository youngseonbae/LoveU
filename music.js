// 배경 음악을 재생, 일시중지하는 함수예요. 버튼을 클릭하면 버튼 이름도 변경됩니다.
let isPlaying = false;

function controlBgm() {
    const bgmElement = document.querySelector('.btn-bgm');
    const bgm = document.getElementById('audio-bgm');
    
    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = 'PLAY';
    } else {
        bgm.play();
        bgmElement.innerText = 'STOP';
    }

    isPlaying = !isPlaying;   
}