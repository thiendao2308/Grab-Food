import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import comga from "./assets/img/comga.png";
import Footer from "./Footer.jsx";
import "./index.css";

const PromoItem = ({
  imgSrc,
  title,
  categories,
  rating,
  time,
  distance,
  offer,
}) => (
  <div className="store">
    <div className="card">
      <a className="promo-item" href="">
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
      </a>
    </div>
  </div>
);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var container = document.getElementById("container");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    container.classList.add("sticky");
  } else {
    container.classList.remove("sticky");
  }
}

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="duongdan">
        <a href="" className="trangchu">
          Trang chủ
        </a>
        <span> {">"} </span>
        <a href="" className="amthuc">
          Ẩm thực
        </a>
        <span> {">"} </span>
      </div>
      <div className="textuudai">
        <h1>
          Ưu đãi GrabFood tại <span className="textaddress">Hồ Chí Minh</span>
        </h1>
      </div>
      <div className="list-store-cha">
        <div className="list-store">
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
        </div>
        <div className="list-store">
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
        </div>
        <div className="list-store">
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
        </div>
        <div className="list-store">
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
        </div>
        <div className="list-store">
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
          <PromoItem
            imgSrc={comga}
            title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
            categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
            rating="4.4"
            time="15"
            distance="3.5"
            offer="Ưu đãi đến 45K"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
