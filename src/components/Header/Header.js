import React from 'react'

import s from './Header.module.scss'
import Search from '../Search/Search'

export default function Header() {
  return (
    <div className={s.head}>
      <div className={s.left}>
        <span className={s.logo}></span>
        <div className={s.search}>
          <Search
            placeholder="Search NFT"
            handleOnChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
      <div className={s.middle}>
        <span className={s.explor}>
          <i className={`${s.icon} ${s.globe}`}></i>EXPLOR<i className={`${s.icon} ${s.drop}`}></i>
        </span>
        <span className={s.create}><i className={`${s.icon} ${s['plus-circle']}`}/>CREATE</span>
      </div>
      <div className={s.right}>
        <span className={s.eth}>
          <i className={`${s.icon} ${s['ic-eth']}`}/>
          42.007382
          <span className={s.grey}>ETH</span>
        </span>
        <span className={s.avatar}></span>
      </div>
    </div>);
}
