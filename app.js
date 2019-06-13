let btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', search);

function search() {
    let video = document.getElementsByTagName('video');
    let audio = document.getElementsByTagName('audio');

    console.log(video);
    console.log(audio);
    // video.forEach(element => {
    //     console.log('Video:' + element);
    // });

    // audio.forEach(element => {
    //     console.log('Audio:' + element);
    // });
}