import logo from "./assets/img/logo-grab.png";
import giohang from "./assets/img/giohang.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="menu-left">
          <img src={logo} alt="logo" className="logo-header"></img>
          <input type="text" placeholder="Giao đến" className="diachi"></input>
        </div>

        <div className="menu-right">
          <button>
            <img src={giohang} alt="giohang" className="giohang"></img>
          </button>
          <span className="login">Đăng nhập/Đăng ký</span>
          <select className="lang">
            <option value={1}>VN</option>
            <option value={2}>EN</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
