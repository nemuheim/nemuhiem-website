// タグによるフィルタリング処理
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.gallery-item').forEach(item => {
            // 'all'なら全表示、それ以外はクラス名で絞り込み
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// モーダル（画像拡大）の処理
function openModal(imgElement) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const img = document.createElement('img');
    img.src = imgElement.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    
    modal.appendChild(img);
    modal.onclick = () => modal.remove(); // クリックで閉じる
    document.body.appendChild(modal);
}
