# Tesla-Car-Sales
https://www.tesla.com/

1. $Trang chủ$

1.1. Thành phần 
- Tổng cộng có 3 xe: $Model S$, $Model X$, $Model Y$
- Menu: $Logo$, Tên các xe, $Sign in$, $Thanh tìm kiếm$
- Từng slide ở trang đầu: Ảnh + $Custom Order$ + $View Details$

1.2. Flow
- Tên xe ở thanh menu: nhấn vào xe nào thì hướng vào trang Chi tiết sản phẩm của xe đó
- $Sign in$:
  . Nếu đã Sign in: tên người dùng sẽ hiện thay cho $Sign in$
  . Nhấn vào thì sẽ direct sang trang $Sign in$
  . Sign in xong thì direct lại $Trang chủ$
- $Custom Order$:
  . Mỗi Slide xe thì sẽ có nút $Custom Order$ 
  . Nếu chưa Sign in: nhấn vào $Custom Order$ thì sẽ direct sang trang $Sign in$. Sau khi đăng nhập xong thì direct sang trang $Đặt hàng$ của xe
  . Nếu đã Sign in: nhấn vào $Custom Order$ thì direct trực tiếp sang trang $Đặt hàng$
- $View Details$: 
  . Nhấn vào thì direct sang trang $Chi tiết sản phẩm$
- $Logo$: bởi vì đang ở trang chủ nên khi ấn vào logo thì sẽ reload lại trang
- $Thanh tìm kiếm$:
  . Tìm kiếm được cả tên và thông tin của xe
  . Nhập từ khóa vào thì các Tên xe phù hợp nhất sẽ hiện ra ngay dưới theo dạng dropdown
  . Ấn vào các kết quả gợi ý đấy thì direct sang $Chi tiết sản phẩm$

2. $Chi tiết sản phẩm$

2.1. Thành phần
- Menu: $Logo$, Tên các xe, $Sign in$, $Thanh tìm kiếm$
- Tổng cộng 5 slides/mẫu xe 
- Mỗi slide: Tên xe + Thông số + Ảnh/Vid + $Order Now$

2.2. Flow
- Tên xe ở thanh menu: nhấn xe nào thì hướng vào trang $Chi tiết sản phẩm$ của xe đó
- $Order Now$:
  . Nếu chưa Sign in: nhấn vào order now thì sẽ direct sang trang $Sign in$. Sau khi đăng nhập xong thì direct sang trang $Đặt hàng$
  . Nếu đã Sign in: nhấn vào order now thì direct trực tiếp sang trang $Đặt hàng$
- $Sign in$:
  . Nếu đã Sign in: tên người dùng sẽ hiện thay cho $Sign in$
  . Nhấn vào thì sẽ direct sang trang Sign in
  . Sign in xong thì direct lại trang $Chi tiết sản phẩm$ của xe đó
- $Logo$:
  . Ấn vào $Logo$ thì reload trang và quay lại $Trang chủ$
- $Thanh tìm kiếm$:
  . Tìm kiếm được cả tên và thông tin của xe
  . Nhập từ khóa vào thì các Tên xe phù hợp nhất sẽ hiện ra ngay dưới theo dạng dropdown
  . Ấn vào các kết quả gợi ý đấy thì direct sang $Chi tiết sản phẩm$
 
3. $Đặt hàng$

3.1. Thành phần
- 3 trang $Đặt hàng$ cho 3 xe
- 4 mục: Car, Exterior, Interior, Payment
- Car: Long Range vs. Performance, Thanh cộng giá
- Exterior: Màu xe + Màu bánh, Thanh cộng giá
- Interior: Chọn màu cho nội thất
- Payment: Thanh tóm tắt thông tin đặt hàng bên phải, hộp input để điền thông tin khách hàng bên trái, Nút Place Order

3.2. Flow
- Tất cả đều copy y hệt như website gốc
- Sau khi ấn nút $Place Order$ thì sẽ hiện một thông báo là thực hiện thanh toán thành công và thông tin giao dịch đã được gửi đến mail của khách

4. $Sign in$

4.1. Flow
- Ấn vào $Custom Order$ ở trang chủ thì sau khi đăng nhập xong sẽ direct sang trang $Đặt hàng$ của xe đó luôn
- Ấn vào $Sign in$ từ trang chủ thì sau khi đăng nhập thì sẽ direct lại trang chủ với tên đăng nhập hiển thị
- Ấn vào $Order Now$ ở trang Chi tiết sản phẩm thì sau khi đăng nhập xong thì sẽ direct sang trang $Đặt hàng$ của xe đó
- Ấn vào $Sign in$ từ trang Chi tiết sản phẩm thì sau khi đăng nhập thì sẽ direct lại trang chủ với tên đăng nhập hiển thị
 




