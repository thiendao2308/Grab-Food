
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBagShopping, faStar, faClock, faTicket,faCalendar,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Header from"./Header.jsx";
function headerDetail(props) {
    return (
        <header1>
            {/* <div className="header_detail">
                <div className='logo'>
                    <img src="1.png" alt="Grab" hidden="" />
                    <input type="text" />
                </div>

                <div className='bag'>
                    <p> <FontAwesomeIcon icon={faBagShopping} /> </p>
                    <p>Đăng nhập / Đăng kí</p>
                 
                </div>
            </div> */}
            
           <div className="header_detail">
           <Header/>
           </div>
            <div className='restaurant'>
                <p>Trang Chủ </p>
                <p><FontAwesomeIcon icon={faChevronRight}  /> </p>
                <p>Nhà Hàng</p>
                <p><FontAwesomeIcon icon={faChevronRight}  /> </p>
                <p>Tiệm cơm gà AMT Tân kì - Tân quý</p>
            </div>
            <div className='all'>
            <h1 className='name_store'>Tiệm Cơm Gà AMT -Tân kì Tân quý</h1>
            <p className='rice'>Cơm</p>

            <div className='DanhGia'>
                <div>
                    <p><FontAwesomeIcon icon={faStar} color="yellow" /> </p>
                    <p>5.0</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faClock} /> </p>
                    <p>25 phút</p>
                    <p>. 1.8km</p>
                </div>
                </div>
                <div className='Clock'>
                    <p>Giờ mở cửa</p>
                    <p>Hôm nay 00:00-02:00 07:00-23:59</p>
                </div>
                <div className='voucher1'>
                    <p><FontAwesomeIcon icon={faTicket} color="blue" /> </p>
                    <p>Nhận Kem Oreo Phô mai miễn phí với đơn hàng tối thiểu 149.000₫</p>
                </div>
                <div className='Voucher2'>
                    <p><FontAwesomeIcon icon={faTicket} color="blue" /> </p>
                    <p>Giảm 15.000₫ phí giao hàng với đơn hàng tối thiểu 200.000₫</p>
                </div>
            

            <div className='calendar'>
           <div className='calendericon'> 
           <p className='icon'><FontAwesomeIcon icon={faCalendar} /> </p>
           <p>Ngày Giao Hàng : Hôm Nay</p>
           <p className='icon2' ><FontAwesomeIcon icon={faAngleDown} /> </p>
           </div>
           <div className='calendericon'>
           <p className='icon'><FontAwesomeIcon icon={faClock} /> </p>
           <p>Thời Gian Giao : Ngay Bây Giờ</p>
           <p className='icon2'><FontAwesomeIcon icon={faAngleDown} /> </p>
           </div>
            </div>
            </div>
           
               
        
        </header1>
    );
}

export default headerDetail;

