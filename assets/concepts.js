/*
  Danh sách game concept hiển thị trên trang chủ.
  Thêm demo mới: copy thư mục _template thành thư mục mới (vd. "fish-flow"),
  rồi thêm một mục vào ĐẦU danh sách này. Mục đầu tiên (listed: true) được đưa lên
  đầu trang chủ làm game nổi bật; các mục còn lại hiện trong phần "More concepts".

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
    video: 'chain-slide/media/gameplay',   // không có đuôi: trang tự dùng .webm và .mp4
    playable: true,
    listed: true
  },
  {
    slug: 'current-flow',
    name: 'Current Flow',
    oneLine: 'Turn the water currents on a coral reef, then release whole schools of fish to their matching gates.',
    genre: '3D hybrid-casual · Flow puzzle',
    status: 'dev',
    statusText: 'Early prototype',
    date: 'Oct 2026',
    poster: 'current-flow/media/poster.jpg',
    video: 'current-flow/media/gameplay',
    playable: true,
    listed: true
  }
];
