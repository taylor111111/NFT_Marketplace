import React, { Component } from 'react'
import s from "./ImageScroller.module.scss";
import ImageStage from './ImageStage'

const stage = new ImageStage();

export default class ImageScroller extends Component {
  imgObj = [];

  componentDidMount() {
    stage.setImgObj(this.imgObj);
    stage.setMount(this.mount);
    
    stage.init();
    stage.animate();
  }

  render() {
    return (
      <div
        className={s.mount}
        ref={ref => (this.mount = ref)}>
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
    )
  }
}
