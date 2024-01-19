let audioElements = Array.from({ length: 20 }, (_, index) => new Audio(`songs/${index + 1}.mp3`));
let currentAudio = null;

function toggleAudio(index) {
    const audioElement = audioElements[index];

    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        currentAudio = audioElement;
    } else {
        audioElement.pause();
        currentAudio = null;
    }
}

function updateProgressBar(index) {
    const audioElement = audioElements[index];
    const myProgressBar = document.getElementById('progress');
    const firstTimeSpan = document.getElementById('first-time');
    const lastTimeSpan = document.getElementById('last-time');

    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    const currentMinutes = Math.floor(audioElement.currentTime / 60);
    const currentSeconds = Math.floor(audioElement.currentTime % 60);
    const totalMinutes = Math.floor(audioElement.duration / 60);
    const totalSeconds = Math.floor(audioElement.duration % 60);

    firstTimeSpan.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    lastTimeSpan.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
}

function changeAudioTime(index) {
    const audioElement = audioElements[index];
    const myProgressBar = document.getElementById('progress');

    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
}

// Add event listeners for all audio elements
for (let i = 0; i < audioElements.length; i++) {
    audioElements[i].addEventListener('timeupdate', () => updateProgressBar(i));
    audioElements[i].addEventListener('ended', () => {
        currentAudio = null;
    });
}

for (let i = 1; i <= 20; i++) {
    const button = document.getElementById(String(i));

    if (button) {
        button.addEventListener("click", () => toggleAudio(i - 1));
    }
}

document.getElementById('progress').addEventListener('change', () => {
    const index = audioElements.indexOf(currentAudio);
    if (index !== -1) {
        changeAudioTime(index);
    }
});
