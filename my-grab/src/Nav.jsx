function Nav() {
  return (
    <nav>
      <div className="container1">
        <div className="search">
          <input
            type="text"
            placeholder="Tìm món hoặc quán ăn"
            className="timkiem"
          />
        </div>
        <div className="option">
          <ul>
            <li className="li-option">
              <a href="">Gần tôi</a>
            </li>
            <li className="li-option">
              <a href="">Tuần lễ món cơm</a>
            </li>
            <li className="li-option">
              <a href="">Quán ngon đặc tuyển</a>
            </li>
            <li className="li-option">
              <a href="">Tạp hóa online</a>
            </li>
            <li className="li-option">
              <a href="">5 ưu đãi cùng 1 đơn</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Nav;
