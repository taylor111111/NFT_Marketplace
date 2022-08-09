import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import s from './AccountAccess.module.scss'
import Header from '../../components/Header/Header'

const imgName = [
  'scroll-img01.png',
  'scroll-img02.png',
  'scroll-img03.png',
  'scroll-img04.png'
];

export default class AccountAccess extends React.Component {
  componentDidMount() {
  }

  render() {

    return (
      <div className={s.AccountAccess}>
        <Header/>
        <div className={s['user-account']}>
          <h1>USER ACCOUNT</h1>
          <div className={s.range}>
            <div className={s.left}>
              <i className={`${s.icon} ${s['ic-search']}`}/>
              <i className={`${s.icon} ${s['ic-control']}`}/>
            </div>
            <div className={s.right}>
              <span><i className={`${s.icon} ${s['ic-most-popular']}`}/>Most Popular</span>
              <span>Collection</span>
            </div>
          </div>
          <div className={s.background}>
          </div>
          <div className={s.content}>
            <div className={s.summary}>
              <i className={`${s.icon} ${s['ic-nike']}`}/>
              <span className={s['nft-name']}>AIR JORDAN</span>
              <span className={s.detail}>Black Red Jordan Sport</span>
              <table>
                <tbody>
                  <tr className={s.num}>
                    <td>07</td>
                    <td>:</td>
                    <td>20</td>
                    <td>:</td>
                    <td>32</td>
                  </tr>
                  <tr className={s.dhm}>
                    <td>D</td>
                    <td></td>
                    <td>H</td>
                    <td></td>
                    <td>M</td>
                  </tr>
                 </tbody>
                </table>
              <div className={s.buttons}>
                <span className={s.eth}><i className={`${s.icon} ${s['ic-eth']}`}/>3.12</span>
                <button>VIEW DETAIL</button>
              </div>
            </div>
            <div className={s['img-container']}>
              <div className={s.images}>
                {imgName.map((name, index) => <img id={`img${index}`} key={index} src={require(`../../images/${name}`)} alt=""/>)}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
