import React from 'react'
import s from './ImageContainer.module.scss'
import ImageScroller from '../../components/ImageScroller/ImageScroller'

const imgName = [
  'scroll-img01.png',
  'scroll-img02.png',
  'scroll-img03.png',
  'scroll-img04.png'
];

const imgUrl = imgName.map((name) => require(`../../images/${name}`));

export default function ImageContainer() {

  return (
    <div className={s['img-container']}>
      <ImageScroller imgUrl={imgUrl}/>
    </div>
  )
}
