import './datePicker.css';
import React from 'react';


/*export class DatePicker extends React.Component {
  render(){
    return <div>

    </div>
  }
}*/

const DatePicker = (props) => (
  <div className="m_datePicker clearfix" style={props.style}>
    <div className="m_datePicker_tab" id={ props.timeTab || 'j-dataPickerTab-qs'}>
      <a href="" className="active" data-type="today">
        <div id={props.todayDay || 'j-toDays-qs'}>
          今日
        </div>
      </a>
      <a href="" data-type="yesterday">
        <div id={props.ystDay || 'j-1Days-qs'}>
          昨日
        </div>
      </a>
      <a href="" data-type="recently7">
        <div id={props.sevenDay || 'j-7Days-qs'}>
          最近7日
        </div>
      </a>
      <a href="" className="last" data-type="recently30">
        <div id={props.thirtyDay || 'j-30Days-qs'}>
          最近30日
        </div>
      </a>
    </div>
    <div
      className="m_datePicker_select on"
      id={props.timePicker || 'j-dataPickerSelect-qs'}>
      <div className="mark"></div>
      <div className="box clearfix" id={props.timeCalendar || 'j-dateTrigger-qs'}>
        <span className="data-plus_box" id={props.timeText || 'j-datePlusBox-qs'}>
          2017-03-03 ~ 2017-03-03
        </span>
        <i className="fr"></i>
      </div>
    </div>
  </div>
)

export default DatePicker;