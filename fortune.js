function startFortune() {
    const koalaImg = document.getElementById('koala-img');
    
    // 1. アニメーションGIFに変更
    koalaImg.src = "images/fortune-animation.gif";
    
    // 2. 2秒後にランダムな結果画像を表示（res1.png ～ res12.png を想定）
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 12) + 1;
        const resultSrc = `images/res${randomNum}.png`;
        
        // ページ内に結果画像を表示
        const resultArea = document.createElement('div');
        resultArea.innerHTML = `
            <div style="margin-top: 20px;">
                <p>今日の運勢！</p>
                <img src="${resultSrc}" style="width: 80%; max-width: 300px;">
            </div>
        `;
        document.querySelector('.fortune-container').appendChild(resultArea);
        
        // アニメーションを元の画像に戻す（または非表示にする）
        koalaImg.style.display = 'none';
    }, 2000);
}
