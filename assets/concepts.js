/*
  Danh sách game concept hiển thị trên trang chủ.
  Thêm demo mới: copy thư mục _template thành thư mục mới (vd. "fish-flow"),
  rồi thêm một mục vào ĐẦU danh sách này. Mục đầu tiên là demo mới nhất.

  status: "pitching" (đang chào publisher) | "dev" (đang làm) | "paused" (tạm dừng)
  listed: false  -> ẩn khỏi trang chủ, nhưng link riêng vẫn mở được để gửi publisher
*/
window.CONCEPTS = [
  {
    slug: 'chain-slide',
    name: 'Chain Slide',
    oneLine: 'Tap a block and it slides along its arrow, knocking every block in its path off the board.',
    genre: 'Hybrid-casual · Arrow puzzle',
    status: 'pitching',
    statusText: 'Pitching to publishers',
    date: 'Oct 2026',
    poster: 'chain-slide/media/poster.jpg',
    playable: true,
    listed: true
  }
];
