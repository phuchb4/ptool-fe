export default function Footer() {
    return(
        <div>
            {/* Phương thức thanh toán */}
            <div className="inline-block">
                <p>Chấp nhận thanh toán</p>
                <ul>
                    <li>Chuyển khoản ngân hàng</li>
                    <li>Visa, Master Card</li>
                    <li>Thanh toán khi nhận hàng</li>
                </ul>
            </div>
            {/* Hỗ trợ khách hàng */}
            <div className="inline-block">
                <p>Hỗ trợ khách hàng</p>
                <ul>
                    <li>Giao hàng và trả hàng</li>
                    <li>Chính sách bảo hành</li>
                    <li>Bảo mật thông tin</li>
                    <li>Hệ thông chi nhánh</li>
                </ul>
            </div>
            {/* FB Cá nhân */}
            <div className="inline-block">
                <p>Facebook</p>
                <a href="https://www.facebook.com/phuc.hoangbao.908">Hoàng Bảo Phúc</a>
            </div>
        </div>
    );
}