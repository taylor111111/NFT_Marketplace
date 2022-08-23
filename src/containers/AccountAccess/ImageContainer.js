import React from 'react'
import s from './ImageContainer.module.scss'
import ImageScroller from '../../components/ImageScroller/ImageScroller'

import { useSelector, useDispatch } from 'react-redux'

const imgName = [
  'scroll-img01.png',
  'scroll-img02.png',
  'scroll-img03.png',
  'scroll-img04.png'
];

const imgUrl = imgName.map((name) => require(`../../images/${name}`));

export default function ImageContainer() {
  const dispatch = useDispatch();
  const { first } = useSelector((state) => state.accountAccess);
  console.log(first);

  return (
    <div className={s['img-container']}>
      <ImageScroller imgUrl={imgUrl}/>
    </div>
  )
}
