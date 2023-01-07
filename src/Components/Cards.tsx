import React from 'react';
import './Cards.css';
export default function Cards({ props }: any) {
  return (
    <div>
      <div className="container">
        <div className="icon" style={{ background: props.col }}>
          <img className="img" src={props.img} alt="" />
        </div>
        <div className="card">
          <div className="gap"></div>
          <div className="content">
            <div className="name">
              <span>{props.name}</span>
            </div>
            <div className="info">
              <div>{props.price}</div>
              <div style={{ color: props.vary > 0 ? '#00ffa3' : '#FF4D4D' }}>
                {props.vary > 0 ? '+' + props.vary + '%' : props.vary + '%'}
              </div>
            </div>
            <div className="name">
              <span>Price</span>{' '}
            </div>
            <div className="info">
              <span>$60,000</span>
            </div>
            <div className="name">TVL</div>
            <div className="info">
              <img className="img2" src={props.tlv1} alt="img" />
              <img className="img2" src={props.tlv2} alt="img" />
              <img className="img2" src={props.tlv3} alt="img" />
            </div>
            <div className="name">
              <span>Popular pairs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
