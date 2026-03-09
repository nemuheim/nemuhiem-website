// 1. 今日の日付を表示
const date = new Date();
document.getElementById('today-date').innerText = `今日は ${date.getFullYear()}／${date.getMonth()+1}／${date.getDate()}！`;

// 2. 占い開始（ランダム表示）
const results = ["res1.png", "res2.png", ...]; // 12枚の画像ファイル名

function startFortune() {
    // ここでGIFを再生し、setTimeoutで2秒後に結果を表示する処理
    document.getElementById('koala-img').src = "fortune-animation.gif";
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * results.length);
        document.getElementById('result-img').src = results[randomIndex];
        document.getElementById('result-area').style.display = 'block';
    }, 2000);
}