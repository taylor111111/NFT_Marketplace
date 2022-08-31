import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import s from './AccountSummary.module.scss'
import { setImgInfo } from './AccountAccessSlice'

//fake data
import data from '../../data/dataAdminAccountAccess.json'
//

class Summary extends React.Component {
  componentDidMount(){
    this.props.setImgInfo({ cards: data.card});
  }

  render() {
    const { history, first, cards } = this.props;
    const { endD, endH, endM, nftName, balance } = cards[first];

    return (
      <div className={s.wrapper}>
        <div className={s.summary}>
          <i className={`${s.icon} ${s['ic-nike']}`}/>
          <span className={s['nft-name']}>AIR JORDAN</span>
          <span className={s.detail}>{nftName}</span>
          <table>
            <tbody>
              <tr className={s.num}>
                <td>{endD}</td>
                <td>:</td>
                <td>{endH}</td>
                <td>:</td>
                <td>{endM}</td>
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
            <span className={s.eth}><i className={`${s.icon} ${s['ic-eth']}`}/>{balance}</span>
            <button
              onClick={() => history(`/NFTPurchase/${first}`)}
            >VIEW DETAIL</button>
          </div>
        </div>
      </div>
    );
  }
}

function AccountSummary(props) {
  const history = useNavigate();

  return <Summary {...props} history={history} />;
}

const mapStateToProps = state => ({
  ...state.accountAccess
});

const mapDispatchToProps = () => ({
  setImgInfo
});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(AccountSummary); 
