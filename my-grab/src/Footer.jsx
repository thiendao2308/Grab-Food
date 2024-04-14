import appstore from "./assets/img/appstore.png";
import CHplay from "./assets/img/CHplay.png";
import squarefacebook1 from "./assets/img/squarefacebook1.png";
import squareinstagram from "./assets/img/squareinstagram.png";
import squaretwitter from "./assets/img/squaretwitter.png";
import logo from "./assets/img/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="foots">
        <a className="imglogo-footer" href="/">
          <img src={logo} className="Logo-footer" alt="Logo" />
        </a>

        <hr className="HorizontalLine1" />
        <div className="footer-content">
          <div className="footer-column">
            <ul className="footer-links">
              <li className="li-footer">
                <a href="#">Về GrabFood</a>
              </li>
              <li className="li-footer">
                <a href="#">Về Grab</a>
              </li>
              <li className="li-footer">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li className="li-footer">
                <a href="#">Mở quán trên GrabFood</a>
              </li>
              <li className="li-footer">
                <a href="#">Trở thành tài xế Grab</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li className="li-footer">
                <a href="#">Trung tâm hỗ trợ</a>
              </li>
              <li className="li-footer">
                <a href="#">Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/grabvn">
              <img src={squarefacebook1} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/grabfoodvietnam/">
              <img src={squareinstagram} alt="instagram" />
            </a>
            <a href="https://twitter.com/grabvn">
              <img src={squaretwitter} alt="twitter" />
            </a>
          </div>
        </div>
        <hr className="HorizontalLine1" />
        <div className="finishfooter">
          <div className="download-buttons">
            <a href="#">
              <img src={appstore} alt="App Store" />
            </a>
            <a href="#">
              <img src={CHplay} alt="Google Play" />
            </a>
          </div>
          <div className="copyright">
            <span className="copyright-non">© 2024 Grab</span>
            <span className="copyright-non">Câu hỏi thường gặp</span>
            <span className="copyright-non">• Chính sách bảo mật</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
