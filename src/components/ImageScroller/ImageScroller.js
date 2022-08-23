import React, { Component } from 'react'
import s from "./ImageScroller.module.scss";
import ImageStage from './ImageStage'
import OperationPanel from './OperationPanel'

const stage = new ImageStage();
let first = 0;

export default class ImageScroller extends Component {
  imgObj = [];

  componentDidMount() {
    stage.setImgObj(this.imgObj);
    stage.setMount(this.mount);
    stage.setOperationPanel(this.operationPanel);
    
    stage.init();
    stage.animate();
  }

  handleLeft() {
    first = (first - 1 + this.imgObj.length) % this.imgObj.length;
    stage.scrollExe(first);
  }

  handleRight() {
    first = (first + 1) % this.imgObj.length;      
    stage.scrollExe(first);
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
            ref={ref => {
              if(!!this.imgObj && !!ref) {
                this.imgObj.push(ref);
              }
            }}
          />)}
        </div>
        <div
          className={s.panel}
          ref={ref => (this.operationPanel = ref)}
        >
          <OperationPanel
            first={first}
            handleLeft={() => this.handleLeft()}
            handleRight={() => this.handleRight()}
            imgUrl={this.props.imgUrl}
          />
        </div>

      </div>
    )
  }
}
