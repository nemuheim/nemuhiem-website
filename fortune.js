function startFortune() {
    const koalaImg = document.getElementById('koala-img');
    const fortuneBox = document.getElementById('fortune-box');

    // 1. アニメーションGIFに変更
    koalaImg.src = "images/fortune-animation.gif";

    // 2. 2秒後に画像だけを入れ替える
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 12) + 1;
        const resultSrc = `images/res${randomNum}.png`;

        // 新しい画像要素を作成
        const resultImg = document.createElement('img');
        resultImg.src = resultSrc;
        resultImg.style.width = "100%"; // 親要素の幅に合わせる
        resultImg.style.display = "block";

        // fortune-boxの中身をクリアして、画像だけを表示する
        fortuneBox.innerHTML = ''; 
        fortuneBox.appendChild(resultImg);
        
        // 投稿案内を表示するための要素
        const message = document.createElement('p');
        message.style.marginTop = "15px"; // 画像との隙間を調整
        message.innerHTML = `
            今日のラッキーアクション・カラーを<br>
            インスタグラムに投稿しよう！
        `;
        fortuneBox.appendChild(message);
    }, 2000);
}