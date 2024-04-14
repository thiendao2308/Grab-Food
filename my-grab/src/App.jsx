import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/img/logo.svg";
import logo2 from "./assets/img/logo2.svg";
import doan from "./assets/img/doan.jpg";
import doan1 from "./assets/img/doan1.png";
import doan2 from "./assets/img/doan2.jpg";
import doan3 from "./assets/img/doan3.png";
import local2 from "./assets/img/local2.png";
import local from "./assets/img/local.png";
import comgaHTP from "./assets/img/comgaHTP.png";
import bundau from "./assets/img/bundau.png";
import hutieu from "./assets/img/hutieu.png";
import anvat from "./assets/img/anvat.png";
import com from "./assets/img/com.png";
import chao from "./assets/img/chao.png";
import comtam from "./assets/img/comtam.png";
import miy from "./assets/img/miy.png";
import thit from "./assets/img/thit.png";
import weedkendtreats from "./assets/img/weedkendtreats.png";
import ga from "./assets/img/ga.png";
import burger from "./assets/img/burger.png";
import douonglanh from "./assets/img/douonglanh.png";
import garan from "./assets/img/garan.png";
import banhmi from "./assets/img/banhmi.png";
import rautron from "./assets/img/rautron.png";
import hisoparty from "./assets/img/hisoparty.png";
import trasua from "./assets/img/trasua.png";
import pizza from "./assets/img/pizza.png";
import logodoan from "./assets/img/logodoan.png";
import logophone from "./assets/img/logophone.png";
import appstore from "./assets/img/appstore.png";
import CHplay from "./assets/img/CHplay.png";
import squarefacebook1 from "./assets/img/squarefacebook1.svg";
import squareinstagram from "./assets/img/squareinstagram.svg";
import squaretwitter from "./assets/img/squaretwitter.svg";
import bagshoppingsolid from "./assets/img/bagshoppingsolid.svg";

import Footer from "./Footer.jsx";

import ReadMore from "./ReadMore";

import "./index.css";
import "./App.css";

import { Link } from "react-router-dom";
//========sider=======//

const PromoItem = ({
  imgSrc,
  title,
  categories,
  rating,
  time,
  distance,
  offer,
}) => (
  <Link to="/detail" className="promo-item">
    <img src={imgSrc} alt={title} className="promo-img" draggable="true" />
    <div className="promo-tag">Promo</div>
    <div className="item-content">
      <h3>{title}</h3>
      <p>{categories}</p>
      <div className="item-info">
        <span className="rating">⭐️{rating}</span>
        <span className="time"> 🕒{time} phút</span>
        <span className="distance"> • {distance} km</span>
      </div>
      <div className="offer">💲{offer}</div>
    </div>
  </Link>
);

const ItemFood = ({ imgSrc, title }) => (
  <Link to="/GrabFoodApp" className="CacMonAn">
    <div className="phanloai">
      <div className="img-monan">
        <img src={imgSrc} />
      </div>
      <div className="text-monan">
        <h3> {title} </h3>
      </div>
    </div>
  </Link>
);

function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDragStart = false,
      isDragging = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;
    const arrowIcons = document.querySelectorAll(".wrapper i");
    const images = carousel.querySelectorAll("img");

    if (!images || images.length === 0) {
      console.error("No images found in the carousel.");
      return;
    }

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        let firstImgWidth = images[0].clientWidth + 0;
        carousel.scrollLeft +=
          icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
      });
    });

    const showHideIcons = () => {
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      arrowIcons[0].style.display =
        carousel.scrollLeft === 0 ? "none" : "block";
      arrowIcons[1].style.display =
        carousel.scrollLeft === scrollWidth ? "none" : "block";
    };

    const autoSlide = () => {
      if (
        carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) >
          -1 ||
        carousel.scrollLeft <= 0
      )
        return;

      positionDiff = Math.abs(positionDiff);
      let firstImgWidth = images[0].clientWidth + 0;
      let valDifference = firstImgWidth - positionDiff;

      if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
          positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
      }
      carousel.scrollLeft -=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add("dragging");
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
    };

    const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");

      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

    return () => {
      document.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("touchmove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("touchend", dragStop);
    };
  }, []);

  //======= ramdom ảnh nền ===============//
  const imageUrls = [doan, doan1, doan2, doan3];
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageUrl(imageUrls[randomIndex]);
  }, []);

  //================ header đổi màu //
  const [isHeaderOpaque, setIsHeaderOpaque] = useState(false);
  const [headerLogo, setHeaderLogo] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;

      if (scrollPosition > threshold) {
        setIsHeaderOpaque(true);
        setHeaderLogo(logo2);
      } else {
        setIsHeaderOpaque(false);
        setHeaderLogo(logo);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isHeaderOpaque ? "header-opaque" : ""}`}>
      <header className={`Header ${isHeaderOpaque ? "opaque" : ""}`}>
        <a className="imglogo" href="/">
          <img src={headerLogo} className="Logo" alt="Logo" />
        </a>
        <div className="Button-header">
          <a className="icon-bag" href="/">
            <i className="fas fa-shopping-bag">
              <img className="fas-bag" src={bagshoppingsolid} />
            </i>
          </a>
          <a className="login-logout" href="/">
            <i className="fas-login-logout">Đăng nhập/Đăng ký</i>
          </a>
          <div className="dropdown">
            <span className="text-vn-en">VN</span>
            <div className="dropdown-content">
              <a className="VN">Tiếng Việt</a>
              <a className="EN">English</a>
            </div>
          </div>
        </div>
      </header>
      <main className="Main">
        <div className="imgmain-container">
          <img src={imageUrl} className="imgmain" alt="Ảnh đồ ăn" />
        </div>
        <div className="Main-Home">
          <div className="sidebar_local">
            <h2 className="text-hello">Xin Chào</h2>
            <p className="text-local">
              Bạn muốn chúng tôi giao đồ ăn đến đâu hôm nay?
            </p>
            <div className="input-container">
              <img src={local} alt="Left Icon" className="input-icon left" />
              <input
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                className="address-input"
              />
              <img src={local2} alt="Right Icon" className="input-icon right" />
            </div>
            <button className="search-button">Tìm kiếm</button>
          </div>
        </div>

        <hr className="duongvien"></hr>

        <div className="text-main">
          <div className="Uudai">
            <div className="textuudai">
              <h1>
                Ưu đãi GrabFood tại{" "}
                <span className="textaddress">Location</span>
              </h1>
            </div>
            <div>
              <div className="wrapper">
                <i id="left">&#8249;</i>
                <div ref={carouselRef} className="danhsachstore">
                  <PromoItem
                    imgSrc={comgaHTP}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                  <PromoItem
                    imgSrc={bundau}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                  <PromoItem
                    imgSrc={bundau}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                  <PromoItem
                    imgSrc={bundau}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                  <PromoItem
                    imgSrc={comgaHTP}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                  <PromoItem
                    imgSrc={comgaHTP}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <i id="right">&#8250;</i>
              </div>
            </div>
            <div className="button-promotions">
              <a className="btn-promotions" href="/">
                See all promotions
              </a>
            </div>
          </div>

          <div className="Monan">
            <div className="title-Monan">
              <h1>There's something for everyone!</h1>
            </div>

            <div className="grid-monan">
              <ItemFood imgSrc={hutieu} title="Hủ tiếu" />
              <ItemFood imgSrc={anvat} title="Ăn vặt" />{" "}
              <ItemFood imgSrc={com} title="Cơm " />{" "}
              <ItemFood imgSrc={chao} title="Cháo" />{" "}
              <ItemFood imgSrc={comtam} title="Cơm tấm " />{" "}
              <ItemFood imgSrc={miy} title="Mì ý " />{" "}
              <ItemFood imgSrc={weedkendtreats} title="Weekend Treats" />{" "}
              <ItemFood imgSrc={thit} title="Thịt" />{" "}
              <ItemFood imgSrc={ga} title="Gà" />{" "}
              <ItemFood imgSrc={burger} title="Gà rán - Burger" />{" "}
              <ItemFood imgSrc={douonglanh} title="Đô uống lạnh" />{" "}
              <ItemFood imgSrc={garan} title="Gà rán " />{" "}
              <ItemFood imgSrc={banhmi} title="Bánh mì" />{" "}
              <ItemFood imgSrc={trasua} title="Trà sữa" />
              <ItemFood imgSrc={rautron} title="Rau trộn" />
              <ItemFood imgSrc={hisoparty} title="Hiso Party" />
              <ItemFood imgSrc={pizza} title="Pizza" />
            </div>
          </div>

          <div className="whyorder">
            <div className="title-news">
              <h1>Vì sao bạn nên Order trên GrabFood?</h1>
            </div>

            <div className="text-thongbao">
              <ul className="thongbao">
                <li className="noidung">
                  {" "}
                  <span className="ticker">✔ </span>{" "}
                  <span className="todam">Nhanh nhất</span> - GrabFood cung cấp
                  dịch vụ giao đồ ăn nhanh nhất thị trường.
                </li>
                <li className="noidung">
                  {" "}
                  <span className="ticker">✔ </span>{" "}
                  <span className="todam">Dễ dàng nhất</span> - Giờ đây, bạn chỉ
                  cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt
                  đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng
                  Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.
                </li>
                <li className="noidung">
                  {" "}
                  <span className="ticker">✔ </span>{" "}
                  <span className="todam">Đáp ứng mọi nhu cầu</span> - Từ món ăn
                  đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa
                  chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.
                </li>
                <li className="noidung">
                  {" "}
                  <span className="ticker">✔ </span>{" "}
                  <span className="todam">Thanh toán dễ dàng</span> - Giao và
                  nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn
                  dễ dàng hơn nữa.
                </li>
                <li className="noidung">
                  {" "}
                  <span className="ticker">✔ </span>{" "}
                  <span className="todam">Nhiều quà tặng hơn</span> - Tích điểm
                  GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để
                  đổi lấy nhiều ưu đãi hơn cho bạn.
                </li>
              </ul>
            </div>
          </div>

          <div className="question">
            <div className="title-quetions">
              <h1>Những câu hỏi thường gặp</h1>
            </div>
            <div className="text-quetions">
              <h2>GrabFood là gì?</h2>
              <p className="noidung">
                Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to
                satisfy your hunger with a wide selection of merchant partners
                in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt
                Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực
                phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ
                ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu
                thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài
                thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi
                Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa –
                Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn
                nhờ một loạt đối tác bán đồ ăn ở Việt Nam
              </p>
            </div>
            <div className="button-promotions">
              <ReadMore />
            </div>
          </div>
        </div>

        <div className="gioithieuapp">
          <div className="container-top-footer">
            <div className="top-footer">
              <img src={logodoan} alt="Logo Đồ Ăn" />
              <h2>Curated restaurants</h2>
              <p>
                From small bites to big meals, we won't limit your appetite. Go
                ahead and order all you want.
              </p>
            </div>
            <div className="top-footer">
              <img src={logophone} alt=" Mobile app" />
              <h2>More cool features available on the app</h2>
              <p>
                Download Grab app to use other payment methods and enjoy
                seamless communication with your driver.
              </p>
              <div className="download-buttons">
                <a href="https://grab.onelink.me/2695613898?pid=www.bing.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid647268330%3Fmt%3D8%26l%3Dvi">
                  <img src={appstore} alt="App Store" />
                </a>
                <a href="https://grab.onelink.me/2695613898?pid=www.bing.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Dvi_VN">
                  <img src={CHplay} alt="CH Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ============= FOOTER========== */}

      <Footer />
      {/* <footer className="footerHome">

        <a className="imglogo-footer" href='/'>
          <img src={logo} className="Logo-footer" alt="Logo" />
        </a>

        <hr className='HorizontalLine1' />
        <div className="footer-content">


          <div className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Về GrabFood</a></li>
              <li><a href="#">Về Grab</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Mở quán trên GrabFood</a></li>
              <li><a href="#">Trở thành tài xế Grab</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Trung tâm hỗ trợ</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/grabvn"><img src={squarefacebook1} alt="facebook" /></a>
            <a href="https://www.instagram.com/grabfoodvietnam/"><img src={squareinstagram} alt="instagram" /></a>
            <a href="https://twitter.com/grabvn"><img src={squaretwitter} alt="twitter" /></a>
          </div>
        </div>
        <hr className='HorizontalLine1' />
        <div className='finishfooter'>
          <div className="download-buttons">
            <a href="#"><img src={appstore} alt="App Store" /></a>
            <a href="#"><img src={CHplay} alt="Google Play" /></a>
          </div>
          <div className="copyright">
            © 2024 Grab &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Câu hỏi thường gặp • Chính sách bảo mật
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
