import './diyDimension.css';
import React from 'react';

const DiyDimension = (props) => (
  <div className="diy_dimension" style={props.style}>
    <a  className={`tag ${props.dimensionVisible ? 'active' : ''}`} onClick={() => { props.showDimension(true) }}>自定义维度</a>
    <div className={`mask ${props.dimensionVisible ? 'active' : ''}`} onClick={() => { props.showDimension(false) }}></div>
    <div className={`container ${props.dimensionVisible ? 'active' : ''}`}>
      <p>投放效果</p>
      <div className="types">
        <ul className="clearfix">
          {
            props.delivery && props.delivery.map((item, index) => (
              <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={(event) => { props.diyDeliveryCheckOut(item.value, event, index) }} />
                <i className="radio"></i>
                <span>{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <p>自然效果 <i className="qa" id="natural_effect"></i></p>
      <div className="types">
        <ul className="clearfix">
          {
            props.natural && props.natural.map((item, index) => (
              <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={(event) => { props.diyNaturalCheckout(item.value, event, index) }} />
                <i className="radio"></i>
                <span>{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="btn-group">
        <button type="button" className="confirm" onClick={() => { props.diyConfirm(false) }}>确认</button>
        <button type="button" className="cancel" onClick={() => { props.showDimension(false) }}>取消</button>
      </div>
    </div>
  </div>
)

export default DiyDimension;