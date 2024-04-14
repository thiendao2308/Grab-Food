import React from "react";
import Detail from "./Detail copy.jsx";
import comtam from "./assets/img/comtam.png";
import Footer from "./Footer.jsx";
import "./indexdetail.css";
function AppDetail() {
  // Dữ liệu cho các section
  const sections = [
    {
      id: "section1",
      name: "Phở Bò",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
    {
      id: "section2",
      name: "Bún Chả",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
    {
      id: "section3",
      name: "Cơm Tấm",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
    {
      id: "section4",
      name: "Gỏi Cuốn",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
    {
      id: "section5",
      name: "Bánh Xèo",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
    {
      id: "section6",
      name: "Chả Giò",
      products: [
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
        {
          name: "Cơm tấm sài gòn",
          img: comtam,
          detailproduct: "Đặc sản Sài gòn với cơm tấm Long An ",
          price: "60.000 VND",
        },
      ],
    },
  ];

  return (
    <>
      <Detail sections={sections} />
      <Footer />
    </>
  );
}

export default AppDetail;
