import React from 'react'
import s from './FileInput.module.scss'

const fileSize = (size) => {
  if(!size) {
    return 'File size:';
  }

  return `File size: ${size} kb`;
}

const fileName = (name) => {
  if(!name) {
    return 'Select File';
  }

  return name;
}

export default function FileInput(props) {

  return (<div className={s.FileInput}>
    <span className={s.label}>
      {props.label} 
    </span>
    <span className={s.size}>
      {fileSize(props.size)}
    </span>
    <label>
      <input
        type="file"
        onChange={e => {
          props.handleOnChange(e);
      }}/>
      <div className={s['file-preview']}>
        <span>{fileName(props.name)}</span>
        <span className={s.button}>SELECT FILE</span>
      </div>
    </label>
  </div>)
}
