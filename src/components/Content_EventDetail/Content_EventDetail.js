import React from "react";
import { Link } from "react-router-dom"
import "./Content_EventDetail.css";
import sukien from "./../../store/imgs/sukien.png";
import event_detail from "./../../store/imgs/event-detail.png";

function Content_EventDetail() {
    return (
        <div>
            <img className="banner-event-detail" src={sukien} alt="" />
            <div className="content-event-detail">
                <div className="event-wrapper">
                    <div className="event-detail">
                    <Link className="eventpage" to="/event">SỰ KIỆN</Link>
                    <h2 className="title-event">
                        THAM GIA VÒNG QUAY GIÁNG SINH, NHẬN NGAY IPHONE 13
                        PROMAX TẠI RUBYGYM!
                    </h2>
                    <div className="date">
                        <i class="far fa-calendar-alt"></i>
                        06 - 12 - 2021
                    </div>
                    <img src={event_detail} alt="" />
                    <div className="detail-event">
                        Chào mừng Giáng Sinh sắp tới, cả nhà cùng tham gia sự
                        kiện vòng quay Giáng Sinh tại trung tâm RUBYGYM nha!
                        Cách thức tham gia vô cùng đơn giản, chỉ cần tham gia là
                        có quà mà phần thưởng thì vô cùng hấp dẫn và giá trị
                        nhé!
                    </div>
                    <div className="abc">Đối tượng tham gia:</div>
                    <div className="infor-abc">Tất cả các hội viên của trung tâm</div>
                    <div className="abc">Cách thức tham gia:</div>
                    <div className="infor-abc">Quay trực tiếp tại trung tâm</div>
                    <div className="abc">Cơ cấu giải thưởng:</div>
                    <div className="infor-abc">
                        Thẻ điện thoại 100k, Thẻ hội viên 3 tháng miễn phí,
                        Phiếu mua hàng, và đặc biệt là Iphone 13 PROMAX{" "}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content_EventDetail;
