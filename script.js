// チェックボックスのチェックを外す関数。HTMLファイルで設定した関数名と一致させる
function checkCLEAR()
{
   // labelがblank1〜blank6までのチェックボックスを、for文で回して全てチェックを外す。
   // 「6」は、blankの数に合わせて適宜設定
    for (i=0; i<=1000; i++) {
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = false;
        }
    }
}

// チェックボックスのチェックをする関数。HTMLファイルで設定した関数名と一致させる
function checkALL()
{

    for (i=0; i<=1000; i++) {
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = true;
        }
    }
}

function clickBtn(buttonId, imageId) {
    const targetElement = document.getElementById(imageId);
    targetElement.classList.toggle("hidden");
}

const whiteButton = document.getElementById('whiteButton');
const greyButton = document.getElementById('greyButton');
const body = document.querySelector('body');

whiteButton.addEventListener('click', function() {
    body.classList.remove('grey-bg');
    body.classList.add('white-bg');
});

greyButton.addEventListener('click', function() {
    body.classList.remove('white-bg');
    body.classList.add('grey-bg');
});

/* 更新日の取得 */
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
/* 日付を書き換える */
const target = document.getElementById('modify');
target.textContent = year + '-' + month + '-' + date;
