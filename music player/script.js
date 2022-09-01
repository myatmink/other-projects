const playlistContainerTag = document.querySelector('.playlistContainer');
const audioTag = document.querySelector('.audioTag');
const currentTimeTag = document.querySelector('.currentTime');

const currentProgressTag = document.getElementById('currentProgress');
const playButtonTag = document.querySelector('.playButton');
const pauseButtonTag = document.querySelector('.pauseButton');
const previousButtonTag = document.querySelector('.previousButton');
const nextButtonTag = document.querySelector('.nextButton');

const tracks = [
    { trackId : 'music/track1.mp3' , title : 'Drawer (서랍) Our Beloved Summer OST'},
    { trackId : 'music/track2.mp3' , title : 'SHAUN feat. Conor Maynard - Way Back Home'},
    { trackId : 'music/track3.mp3' , title : 'RED VELVET - FUTURE (미래)'}
];

let trackTag;
for (let i = 0; i < tracks.length; i++) {
    trackTag = document.createElement('div');
    trackTag.classList.add('trackItem');

    trackTag.addEventListener('click', () => {
        currentPlayingIndex = i;
        playSong();

        
    });

    const title = (i + 1).toString() + '. ' + tracks[i].title;
    trackTag.textContent = title;
    playlistContainerTag.append(trackTag);
};

let durationText = '00:00';
let duration = 0;
audioTag.addEventListener('loadeddata' , () => {
    duration = Math.floor(audioTag.duration);
    durationText = createMinuteSecond(duration);
});

let currentTime = 0;
audioTag.addEventListener('timeupdate' , () => {
    currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = createMinuteSecond(currentTime);

    const currentanddurationText = currentTimeText + ' / ' + durationText;
    currentTimeTag.textContent = currentanddurationText;

    // progress bar
    updateCurrentProgress(currentTime);
});

const createMinuteSecond = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);

    const minuteText = minute < 10 ? '0' + minute.toString() : minute;
    const secondText = second < 10 ? '0' + second.toString() : second;

    return minuteText + ':' + secondText;
};

// Calculate current progress width
const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (500 / duration) * currentTime;
    currentProgressTag.style.width = currentProgressWidth.toString() + 'px';
};

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener('click', function(){
    if(currentTime === 0){
        playSong();
    }else{
        audioTag.play();
    };
    isPlaying = true;
    updatePlayPauseButton();
});

pauseButtonTag.addEventListener('click', function(){
    audioTag.pause();
    isPlaying = false;

    updatePlayPauseButton();
})

const updatePlayPauseButton = () => {
    if(isPlaying){
        playButtonTag.style.display = 'none';
        pauseButtonTag.style.display = 'inline';
        trackTag.add.classList('trackBackground');
    }else{
        playButtonTag.style.display = 'inline';
        pauseButtonTag.style.display = 'none';
    }
};

previousButtonTag.addEventListener('click', function(){
    if(currentPlayingIndex === 0){
        return;
    }
    currentPlayingIndex -= 1;
    playSong();
});

nextButtonTag.addEventListener('click', function(){
    if(currentPlayingIndex === tracks.length -1){
        return;
    }
    currentPlayingIndex += 1;
    playSong();
});

const playSong = () => {
    const songIdToPlay = tracks[currentPlayingIndex].trackId;
    audioTag.src = songIdToPlay;
    audioTag.play();
    isPlaying = true;
    updatePlayPauseButton();
};

