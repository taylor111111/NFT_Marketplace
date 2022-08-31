import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import s from './NFTPurchase.module.scss'
import { setPurchase } from './NFTPurchaseSlice'

import Header from '../../components/Header/Header'
import ImageShow from './ImageShow'
import Introduce from './Introduce'
import Discription from './Discription'
import Details from './Details'
import Attributes from './Attributes'

//fake data
import data from '../../data/dataNFTPurchase.json'
//

class Purchase extends React.Component {
  componentDidMount() {
    const { setPurchase, index } = this.props;
    setPurchase({...data.card[index ? index : 0]});
  }
  render() {
    const { history } = this.props;
    return (
      <div className={s.purchase}>
        <Header/>
        <div className={s.banner}></div>
        <div className={s.container}>
          <button
            className={s.back}
            onClick={() => history('/AccountAccess')}
          >
            BACK
          </button>

          <div className={s.content}>
            <div className={s.left}>
            </div>

            <div className={s.right}>
              <div className={s.detail}>
                <ImageShow
                  {...this.props}
                />
                <div className={s['de-right']}>
                  <Introduce
                    {...this.props}
                  />
                  <Discription
                    description={this.props.description}
                  />
                  <Details
                    {...this.props.details}
                  />
                  <Attributes
                    {...this.props.attributes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function NFTPurchase(props) {
  const history = useNavigate();
  const { index } = useParams();

  return (<Purchase {...props} history={history} index={index} />)
}

const mapStateToProps = state => ({
  ...state.purchase
});
const mapDispatchToProps = () => ({
  setPurchase
});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(NFTPurchase);
