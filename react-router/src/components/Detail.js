import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Detail = props => {
  console.log(props, "detail");
  return (
    <>
      <div>
        <h1 style={{ marginLeft: "30%", color: "purple" }}>
          Thông Tin Chi Tiết Về {props.location.state.name}
        </h1>
      </div>
      <div className="row" style={{ padding: "50px" }}>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" />
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img
            src={props.location.state.image}
            alt=""
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <h1>Tên sản phẩm: {props.location.state.name}</h1>
          <h4>
            Đây là sản phẩm đầu tiên được nhập khẩu từ Nhật Bản. Loài Hoa Turlip
            ngọc ngà đa sắc màu làm cho căn nhà của bạn trở nên soang trọng và
            quý sờ tộc !!! Ahihi
          </h4>
          <h3 style={{ color: "red" }}>Price: {props.location.state.price}</h3>
          <h4>Ship Toàn Quốc:</h4>
          <p>
            Phí giao hàng tùy thuộc vào địa chỉ của bạn, Chúng tôi sẽ cố gắng
            hết sức để giao hàng đến tận tay bạn, nếu không đến thì thôi bạn
            nhé! hihi
          </p>
          <div>
            <button className="btn btn-large btn-warning">Đặt Hàng Ngay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
