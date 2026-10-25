# Portfolio – Vu Van Nguyen

Trang: https://vunguyenbg.github.io/portfolio/

## Cấu trúc

```
index.html            Trang chủ: giới thiệu, game đã làm, kỹ năng, liên hệ
assets/site.css       Giao diện dùng chung
assets/concepts.js    Game CÔNG KHAI hiện trên trang chủ (mặc định để trống)
assets/avatar.jpg     Ảnh đại diện
assets/games/         Ảnh các game đã làm
p/<tên-game>-<mã>/    Trang riêng của từng game, chỉ ai có link mới xem được
  index.html          Trang pitch (link gửi publisher)
  play/index.html     Bản chơi thử
  media/              Video gameplay, ảnh bìa, ảnh chia sẻ
_template/            Mẫu cho game mới (không hiện lên web)
```

## Link riêng cho từng publisher

- Trang chủ không liệt kê game đang chào hàng.
- Mỗi game nằm ở `p/<tên-game>-<mã ngẫu nhiên>/`, có thẻ noindex nên Google không tìm thấy.
- Gửi publisher nào thì chỉ gửi link game của bên đó.
- Không ghi link game riêng vào file nào trong repo (README, concepts.js...), vì repo là công khai.

## Thêm một game mới

1. Copy `_template` vào `p/`, đặt tên `ten-game-` cộng 6 ký tự ngẫu nhiên, ví dụ `p/fish-flow-k3m9xq`.
2. Mở `index.html` trong thư mục đó, thay mọi chỗ trong ngoặc vuông `[...]`, thay `[slug]` bằng tên thư mục.
3. Bỏ video và ảnh vào `media/`, bản chơi thử vào `play/`.
4. Commit và push, rồi gửi link `https://vunguyenbg.github.io/portfolio/p/<tên-thư-mục>/`.

## Công khai một game

Thêm game vào `assets/concepts.js` và xóa dòng `noindex` trong trang của game. Game đầu tiên trong danh sách sẽ lên đầu trang chủ.
