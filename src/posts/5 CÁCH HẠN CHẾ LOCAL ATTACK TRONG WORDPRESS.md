---
title: 5 CÁCH HẠN CHẾ LOCAL ATTACK TRONG WORDPRESS
description:
date: July 07, 2023
author: Phạm Long
image: "/images/posts/img1.jpg"
---

Từ trước tới nay, việc upload shell lên host sau đó deface đến cơ sở dữ liệu nhằm chiếm đoạt toàn quyền quản trị website là một trong những hình thức tấn công phổ biến nhất trên tất cả mọi mã nguồn, WordPress cũng không ngoại lệ.

Nhiệm vụ của local attack là tấn công vào các mục tiêu bảo mật kém trên server để giành quyền kiểm soát các website khác trên cùng một hệ thống. Do đó khi sử dụng share host, bạn sẽ dễ bị local attack hơn là dùng máy chủ riêng hoặc máy chủ ảo, nhưng nếu bạn có nhiều website mà không thể kiểm soát nổi thì dù là máy chủ gì thì cũng bị local attack.

Thông thường, các bước thực hiện trong quy trình hack local (hay Local Attack) bao gồm:

1. Dò tìm các user có trong server.
2. tìm và đọc nội dung file config (trong WordPress nó là wp-config.php).
3. thông tin login vào database.
4. Tấn công tài khoản admin.
5. Cuối cùng là up shell.
6. Mình không phải là một người chuyên về hacking nên các biến thể của nó có thể khác đi với kỹ năng của từng người, nhưng nhìn chung đa phần là vậy.

Như vậy, một trong những cách phổ biến mà sẽ khiến các hacker mất thời gian hơn trong việc tấn công đó là bảo mật file config thật kỹ. Và ở trong bài viết này, mình sẽ hướng dẫn bạn một số tips để bảo mật file wp-config.php trong WordPress để hạn chế local attack.

# 1. Giấu file wp-config.php

Mặc dù có một vài shell như Coleil có thể dò ra file config của mã nguồn dù bạn có giấu ở đâu nhưng việc cất kỹ file nhạy cảm này cũng sẽ giúp bạn hạn chế phần nào, ít ra là các hacker “thực tập”.

Trong host linux, thông thường các tập tin của website sẽ đều nằm trong thư mục public_html và thường path sẽ là /home/username/public_html/wp-config.php.

Do đó, cách giấu file config tốt nhất là bạn nên đưa file wp-config.php ra khỏi thư mục public_html, bạn có thể đăng nhập vào host thông qua FTP và tạo thêm một thư mục tên bất kỳ nằm ngang hàng với public_html.

Sau đó tải file wp-config.php trong thư mục public_html và upload nó vào thư mục mới tạo. Cuối cùng là sửa file wp-config.php trong thư mục public_html

Lưu ý: Cách này chỉ áp dụng cho các website có file cài đặt ngay trong thư mục public_html chứ không hỗ trợ một lớp thư mục khác. Bạn có thể áp dụng với thư mục www nếu có.

# 2. Thay đổi database prefix

Database prefix (tiền tố CSDL) mặc định của WordPress sẽ là wp\_, điều này vô tình làm cho các hacker biết rõ tên của từng table của website bạn nếu bạn không đổi tiền tố này đi.

Cách đổi tiền tố có nhiều cách, nhưng tốt hơn hết là sử dụng plugin iThemes Security để đổi, nhớ backup lại toàn bộ dữ liệu trước khi làm nhé mặc dù mình làm rất nhiều lần mà không bị lỗi.

# 3. Cấm sửa theme và plugin trong bảng điều khiển

Có một vài hacker khá tinh vi đó là sau khi đã xâm nhập vào được website bạn thì họ sẽ chèn một vài đoạn mã nào đó nằm rải rác bên trong các theme/plugin mà bạn đang dùng.

Do đó, hãy cân nhắc dùng tính năng Editor trong bảng quản trị, tốt nhất là hãy tắt nó đi nếu bạn không dùng tới, cách tắt là chèn đoạn này vào bất kỳ dòng nào trong file wp-config.php

# 4. Cấm cài thêm theme/plugin

Cũng không có ngoại lệ trong trường hợp hacker có thể tự ý cài thêm một plugin hay theme nào đó mà bên trong đó toàn chứa mã độc nếu họ có quyền truy cập vào bảng điều khiển. Do đó, nếu bạn không có nhu cầu cài theme theme/plugin thì hãy đặt đoạn sau vào file wp-config.php

# 5. Sử dụng các plugin quét mã độc

Bước này có thể may mắn cho bạn biết trên host của bạn đang chứa các file nào để mà bạn có thể xóa nó đi hoặc tải về….ngâm cứu. Dưới đây là các plugin tốt nhất để bạn quét mã độc trên host hoàn toàn miễn phí mà bạn có thể dùng:

#### Wordfence Scan

#### Anti-Malware (Get Off Malicious Scripts)

#### 6Scan Security

và nếu bạn có tiền, mình khuyến khích các bạn nên sử dụng Sucuri Premium (chỉ $90/năm) để tìm và tự quét sạch mọi mã độc. Thachpham.com đang dùng dịch vụ này và thấy rất tốt.

# Lời kết

Việc bảo vệ mình trước nạn local attack không chỉ dừng lại với các cách ở trên nhưng mình nghĩ nếu bạn làm hết tất cả các bước thì sẽ hạn chế một phần nào khả năng bị tấn công qua hình thức này.

Ngoài ra, có một lưu ý vô cùng quan trọng để hạn chế local hack đó là dùng các shared hosting có uy tín và được hỗ trợ nhanh chóng
