import './adList.css';
import './component.css';
import React from 'react';

const SprGame = (props) => (
  <div className="spr_game">
    <div className="tools_bar">
      {props.children}
    </div>
    <div className="ad_list_container">
      <div className="ad_list_wrapper">
        <table className="table">
          <thead>
            <tr className="table_thead_tr">
              <th className="" style={{ width: '181px' }}>
                游戏
              </th>
              <th className="text-right">花费(元)</th>
              <th className="text-right">展示量</th>
              <th className="text-right">下载量</th>
              <th className="text-right">下载率(%)</th>
              <th className="text-right">下载均价(￥)</th>
              <th className="text-right">投放排名</th>
              <th className="text-right">状态</th>
              <th className="text-right">自然展示量</th>
              <th className="text-right">自然下载量</th>
              <th className="text-right">自然下载率</th>
              <th className="text-right">自然排名</th>
              <th className="text-right">限额</th>
            </tr>
          </thead>
          <tbody className="table_tbody">
            <tr>
              <td className="total">总计</td>
              <td className="text-right">0</td>
              <td className="text-right">45621</td>
              <td className="text-right">45621</td>
              <td className="text-right">21</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
              <td className="text-right">-</td>
            </tr>
            {
              props.trendList.length > 0 && props.trendList.map((item, index) => (
                <tr>
                  <td className="text-center game_info clearfix" style={{ width: '281px' }}>
                    <div className="desc clearfix">
                      <img src={item.img} alt="" />
                      <span className="game_name">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-right">{item.money}</td> {/*** 花费*/}
                  <td className="text-right">{item.display}</td> {/*** 展示量*/}
                  <td className="text-right">{item.click}</td> {/*** 下载量*/}
                  <td className="text-right">{item.clickRatio}</td> {/*** 下载率*/}
                  <td className="text-right">{item.avgBid}</td> {/*** 下载均价*/}
                  <td className="text-right">{item.avgPos}</td> {/*** 投放排名*/}
                  <td className="text-right">{item.avgPos}</td> {/*** 状态*/}
                  <td className="text-right">{item.naturalDisplay}</td> {/*** 自然展示量*/}
                  <td className="text-right">{item.naturalClick}</td>  {/*** 自然下载量*/}
                  <td className="text-right">{item.naturalClickRatio}</td> {/*** 自然下载率*/}
                  <td className="text-right">{item.naturalAvgPos}</td> {/*** 自然排名*/}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default SprGame;