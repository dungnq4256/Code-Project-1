import React from "react";
import { Link } from 'react-router-dom'
import "./Content_Event.css";
import sukien from "./../../store/imgs/sukien.png";
import sk1_event from "./../../store/imgs/sk1_event.png";
import sk2_event from "./../../store/imgs/sk2_event.png";
import sk3_event from "./../../store/imgs/sk3_event.png";


function Content_Event() {
    return (
        <div>
            <img className="banner-event" src={sukien} alt="" />
            <div className="content-event">
                <h1>SỰ KIỆN</h1>
                <h2>
                    Hàng tháng sẽ có các sự kiện được tổ chức tại trung tâm để
                    khích lệ hoạt động luyện tập của khách hàng
                </h2>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-4">
                            <div className="event">
                                <img
                                    className="event-img"
                                    src={sk1_event}
                                    alt=""
                                />
                                <Link className="event-name" to="/event/dieu-uoc-giang-sinh">
                                    ĐIỀU ƯỚC GIÁNG SINH
                                </Link>
                                <div className="event-date">06-12-2021</div>
                                <div className="event-ct">
                                    Chào mừng Giáng Sinh sắp tới, cả nhà cùng
                                    tham gia sự kiện vòng quay Giáng Sinh với
                                    RUBYGYM nha! Cách thức tham gia vô cùng đơn
                                    giản, chỉ cần tham gia là có quà mà phần
                                    thưởng thì vô cùng hấp dẫn và giá trị nhé!
                                </div>
                                <Link className="event-next" to="/event/dieu-uoc-giang-sinh">
                                    TIẾP
                                    <i class="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col l-4">
                            <div className="event">
                                <img
                                    className="event_img"
                                    src={sk2_event}
                                    alt=""
                                />
                                <div className="event-name">SỰ KIỆN 2</div>
                                <div className="event-date">06-12-2021</div>
                                <div className="event-ct">SỰ KIỆN 2</div>
                                <div className="event-next">
                                    TIẾP
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4">
                            <div className="event">
                                <img
                                    className="event_img"
                                    src={sk3_event}
                                    alt=""
                                />
                                <div className="event-name">SỰ KIỆN 3</div>
                                <div className="event-date">06-12-2021</div>
                                <div className="event-ct">SỰ KIỆN 3</div>
                                <div className="event-next">
                                    TIẾP
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content_Event;
