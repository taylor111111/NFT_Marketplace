import React, { Component } from 'react'
import s from "./ImageScroller.module.scss";
import ImageStage from './ImageStage'
import OperationPanel from './OperationPanel'

const stage = new ImageStage();

export default class ImageScroller extends Component {
  imgObj = [];

  componentDidMount() {
    stage.setImgObj(this.imgObj);
    stage.setMount(this.mount);
    stage.setOperationPanel(this.operationPanel);
    
    stage.init();
    stage.animate();
    stage.scrollExe(this.props.first);
  }

  handleLeft() {
    stage.scrollExe(this.props.handleLeft());
  }

  handleRight() {
    stage.scrollExe(this.props.handleRight());
  }

  initialImgObj(ref, index) {
    if(!!this.imgObj
      && !!ref
      && !this.imgObj[index]) {
      this.imgObj.push(ref);
    }
  }

  render() {
    return (
      <div>
        <div
          className={s.mount}
          ref={ref => (this.mount = ref)}
        >
          {this.props.imgUrl.map((url,index) => <img
            alt=""
            key={index}
            src={url}
            ref={ref => this.initialImgObj(ref, index)}
          />)}
        </div>
        <div
          className={s.panel}
          ref={ref => (this.operationPanel = ref)}
        >
          <OperationPanel
            first={this.props.first}
            handleLeft={() => this.handleLeft()}
            handleRight={() => this.handleRight()}
            imgUrl={this.props.imgUrl}
          />
        </div>

      </div>
    )
  }
}
