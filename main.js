// document.addEventListener('DOMContentLoaded', () => {});

window.onload = () => {
    const content_viewer = document.querySelector('#contentViewer');
    if (content_viewer === null) {
        console.log('contentViewer null');
        return null;
    }

    // const config = {
    //     childList: true,
    //     subtree: true,
    // }
    // const observer = new MutationObserver((mutations) => {
    //     mutations.forEach((mutation) => {
    //         console.log(mutation);
    //     });
    // });

    // observer.observe(content_viewer.contentDocument, config);

    const videoTimer = setInterval(() => {
        const video = content_viewer.contentDocument.querySelector('#test_player_html5_api');
        if (video === null) {
            console.log('video null');
            return null;
        }

        const video_src = video.src;
        if (video_src === '') {
            console.log('video src null');
            return null;
        }
        console.log(`LMS video Found: ${video.src}`);
        const download_btn = document.createElement('button');
        download_btn.value = video_src;
        download_btn.innerText = '영상 다운로드';

        const navi_table = document.querySelector('#naviViewer > div.navi-tables-container > ul');
        navi_table.parentNode.insertBefore(download_btn, navi_table.nextSibling);
        
        download_btn.addEventListener('click', function() {
            const param = {
                url: this.value,
            };

            chrome.runtime.sendMessage(param);
        });

        clearInterval(videoTimer);
    }, 300);
};