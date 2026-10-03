import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const vi: HomeCopy = {
  nav: { how: 'Cách hoạt động', features: 'Mới trong 2.0', compare: 'So với Slowly', blog: 'Blog', guide: 'Hướng dẫn', faq: 'Câu hỏi', download: 'Tải xuống' },
  eyebrow: 'LETTIE 2.0  ·  THƯ CHẬM',
  h1a: 'Lá thư bạn viết hôm nay',
  h1b: 'ngày mai mới đến',
  sub: 'Lá thư của bạn thật sự bay qua một quả địa cầu. Nó mất thời gian tương ứng với khoảng cách, và người bạn qua thư đọc nó bằng ngôn ngữ của họ. Một nhân vật thay cho ảnh selfie, một lá thư thay cho đoạn chat — bạn qua thư từ khắp nơi trên thế giới.',
  free: 'Miễn phí · iOS · Android',
  videoLabel: 'Video giới thiệu Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'ngôn ngữ, dịch chỉ bằng một chạm'],
    [String(COMMUNITY.countries), 'quốc gia có bạn qua thư'],
    ['1–24 giờ', 'thời gian giao thư theo khoảng cách'],
  ],
  howTitle: 'Cách hoạt động',
  howSub: 'Bốn màn hình là đủ. Tất cả đều là ảnh chụp thật từ ứng dụng.',
  how: [
    { t: 'Thả một lá thư lên trời', d: 'Một chiếc phong bì bay lên khỏi địa cầu và di chuyển trong khoảng thời gian bằng với khoảng cách thực tới thành phố kia. Trong lúc chờ, bạn có thể theo dõi nó đang ở đâu trên địa cầu.', alt: 'Một lá thư bay qua địa cầu' },
    { t: 'Nhận lá thư của một người lạ', d: 'Những lá thư được thả đi mà không nhắm tới ai cụ thể trôi nổi như những phong bì. Mở một lá bạn thấy thích, đọc nó, trả lời — và một cuộc trao đổi thư giữa hai người bắt đầu.', alt: 'Màn hình Khám phá với các phong bì trôi nổi' },
    { t: 'Dịch chỉ bằng một chạm', d: 'Họ viết bằng ngôn ngữ của họ, bạn đọc bằng ngôn ngữ của mình. Hơn 70 ngôn ngữ, với bản gốc nằm ngay cạnh bản dịch.', alt: 'Đọc thư với nút dịch' },
    { t: 'Sưu tập một con tem từ mỗi quốc gia', d: 'Những quốc gia thư bạn đến được tô màu trên địa cầu, và tem của họ nằm trong album của bạn. Rút tem pixel và dán chúng lên thư của bạn.', alt: 'Bưu điện — album tem và địa cầu' },
  ],
  newTitle: 'Những điều mới trong 2.0',
  newSub: 'Chúng tôi làm lại toàn bộ ứng dụng và chỉ giữ một quy tắc: một lá thư nên mất thời gian.',
  news: [
    ['Thời gian giao thư theo khoảng cách', 'Thời gian đến nơi được tính từ khoảng cách thật giữa hai quốc gia. Một hai giờ trong cùng một nước, gần một ngày cho phía bên kia thế giới. Theo dõi lá thư của bạn trên địa cầu trong lúc chờ.'],
    ['Khám phá — nhận những lá thư được thả đi', 'Mỗi ngày một lần, ba phong bì mới trôi đến gần. Miễn phí là đủ dùng; xem một quảng cáo mỗi ngày để nhận thêm.'],
    ['Dịch bằng AI, hơn 70 ngôn ngữ', 'Mở một lá thư ra là có nút dịch, bản gốc và bản dịch nằm cạnh nhau. Chính ứng dụng cũng hỗ trợ hơn 70 ngôn ngữ.'],
    ['Một con tem từ mỗi quốc gia', 'Những quốc gia bạn trao đổi thư được tô màu trên địa cầu và tem của họ vào album của bạn. Còn có cả rút tem pixel ngẫu nhiên.'],
    ['Một nhân vật thay cho một tấm ảnh', 'Hồ sơ bắt đầu là một nhân vật pixel. Mười sáu nhân vật miễn phí, và một tấm ảnh selfie hoặc vài dòng về ngoại hình của bạn sẽ trở thành nhân vật riêng cùng phong cách đó. Nhân vật đầu tiên miễn phí, và ảnh không được lưu lại.'],
    ['Giới thiệu hôm nay — không lướt', 'Mỗi ngày chỉ có vài thẻ giới thiệu. Không điểm số, không lướt vô tận. Nếu thấy ai thú vị, bạn bắt đầu bằng một lá thư.'],
  ],
  cmpTitle: 'Khác gì so với Slowly?',
  cmpSub: 'Cả hai đều là ứng dụng bạn qua thư nơi lá thư mất thời gian tương ứng với khoảng cách. Điểm khác là cách lá thư đầu tiên bắt đầu và cách bạn đọc nó.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Lá thư đầu tiên', 'Nhận những lá thư người lạ đã thả đi (Khám phá)', 'Ghép theo sở thích · thư công khai'],
    ['Dịch', 'Trong ứng dụng, một chạm, hơn 70 ngôn ngữ, miễn phí', 'Công cụ bên ngoài hoặc tính năng trả phí'],
    ['Hồ sơ', 'Nhân vật pixel; của bạn được vẽ từ ảnh hoặc vài dòng chữ', 'Công cụ ghép hình đại diện'],
    ['Giới thiệu', 'Vài thẻ giới thiệu mỗi ngày', 'Không có (tìm bạn qua thư)'],
    ['Tem', 'Theo quốc gia + rút tem pixel, dán lên thư', 'Sưu tập tem theo quốc gia'],
  ],
  cmpLink: 'Đọc bài so sánh đầy đủ',
  cmpNote: 'Dựa trên thông tin công khai tính đến tháng 9 năm 2026. Slowly là một ứng dụng hay — hãy thử cả hai và giữ lại ứng dụng phù hợp với bạn.',
  faqTitle: 'Câu hỏi thường gặp',
  faqs: [
    { q: 'Lettie có miễn phí không?', a: 'Có. Viết thư, nhận thư, dịch, mười sáu nhân vật cơ bản và nhân vật riêng đầu tiên của bạn đều miễn phí. Đá quý chỉ dùng cho các tiện ích thêm như trò chuyện không giới hạn, rút tem, hoặc một nhân vật thứ hai.' },
    { q: 'Một lá thư mất bao lâu để đến nơi?', a: 'Thời gian được tính từ khoảng cách thật giữa hai quốc gia. Một đến hai giờ trong cùng một nước, vài giờ đến nước láng giềng, gần một ngày cho phía bên kia thế giới. Bạn có thể theo dõi phong bì trên địa cầu trong lúc chờ.' },
    { q: 'Tôi có thể có bạn qua thư mà không biết ngôn ngữ của họ không?', a: 'Có. Mỗi lá thư đều có nút dịch, và bản gốc nằm cạnh bản dịch. Với hơn 70 ngôn ngữ, bạn viết bằng ngôn ngữ của mình và họ đọc bằng ngôn ngữ của họ.' },
    { q: 'Làm sao tôi hiểu một người mà không có ảnh?', a: 'Hồ sơ là một nhân vật pixel, vài sở thích, và chính những lá thư. Một tấm ảnh selfie hoặc vài dòng về ngoại hình có thể trở thành một nhân vật cùng phong cách (ảnh không được lưu lại). Bạn hiểu cách một người suy nghĩ trước khi biết họ trông như thế nào.' },
  ],
  blogTitle: 'Bài viết',
  blog: [
    ['lettie-vs-slowly', 'Lettie và Slowly — hai ứng dụng thư chậm, một khác biệt thật sự', 'Vì sao cùng một ý tưởng "thư chậm" lại dẫn đến trải nghiệm khác nhau'],
    ['how-to-start-penpal', 'Cách viết một lá thư đầu tiên để nhận được hồi âm', 'Cấu trúc hiệu quả'],
    ['language-exchange-tips', 'Trao đổi ngôn ngữ qua những lá thư', 'Vẫn tiến bộ dù để nút dịch mở sẵn'],
  ],
  guideTitle: 'Hướng dẫn',
  guides: [
    ['getting-started', 'Bắt đầu'], ['writing-tips', 'Viết thư hay hơn'], ['cultural-exchange', 'Trao đổi văn hóa'],
    ['language-learning', 'Học ngôn ngữ'], ['building-friendship', 'Xây dựng tình bạn'], ['safety-privacy', 'An toàn và quyền riêng tư'],
  ],
  inEnglish: 'tiếng Anh',
  ctaTitle: 'Một lá thư đêm nay',
  ctaSub: 'Sáng mai, ai đó ở phía bên kia thế giới sẽ đọc nó.',
  footer: { tag: 'Những lá thư chậm, những người bạn xa', privacy: 'Chính sách quyền riêng tư', terms: 'Điều khoản dịch vụ', dev: 'Nhà phát triển: junhyeong kim', languages: 'Ngôn ngữ', letterMap: 'Bản đồ thư', penpalApp: 'Ứng dụng bạn qua thư' },
};
