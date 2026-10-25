# Portfolio – Vu Van Nguyen

Trang: https://vunguyenbg.github.io/portfolio/

## Cấu trúc

```
index.html            Trang chủ: giới thiệu, danh sách game concept, game đã làm, liên hệ
assets/site.css       Giao diện dùng chung cho mọi trang
assets/concepts.js    Danh sách game concept hiện trên trang chủ
assets/avatar.jpg     Ảnh đại diện
assets/games/         Ảnh các game đã làm
chain-slide/          Một game concept
  index.html          Trang pitch (link gửi publisher)
  play/index.html     Bản chơi thử
  media/              Video gameplay, ảnh bìa, ảnh chia sẻ
_template/            Mẫu cho game concept mới (không hiện lên web)
```

## Thêm một demo mới (khoảng 10 phút)

1. Copy thư mục `_template` thành thư mục mới, tên viết thường không dấu, ví dụ `fish-flow`.
2. Mở `fish-flow/index.html`, thay mọi chỗ trong ngoặc vuông `[...]` bằng nội dung thật, và thay `[slug]` bằng `fish-flow`.
3. Bỏ video và ảnh vào `fish-flow/media/` (xem `media/README.txt`), bỏ bản chơi thử vào `fish-flow/play/`.
4. Mở `assets/concepts.js`, thêm một mục vào **đầu** danh sách (demo mới nhất nằm trên cùng).
5. Commit và push. Link gửi publisher: `https://vunguyenbg.github.io/portfolio/fish-flow/`

## Demo chưa muốn công khai

Đặt `listed: false` trong `assets/concepts.js` và bỏ comment dòng `noindex` trong trang của demo.
Demo sẽ không hiện trên trang chủ và không bị Google tìm thấy, nhưng ai có link vẫn mở được.

## Trang chủ

Demo đầu tiên trong `assets/concepts.js` (có `listed: true`) tự được đưa lên đầu trang chủ làm game nổi bật, có video tự chạy và nút chơi thử. Tất cả demo (kể cả demo nổi bật) hiện trong mục "All game concepts".

## Gửi publisher

Luôn gửi link trang của game (ví dụ `.../portfolio/chain-slide/`), không gửi trang chủ.

## Đổi trạng thái demo

Trong `assets/concepts.js`, sửa `status` và `statusText`:
- `pitching`: đang chào publisher
- `dev`: đang làm
- `paused`: tạm dừng
