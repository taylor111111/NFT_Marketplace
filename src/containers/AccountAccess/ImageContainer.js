import React from 'react'
import s from './ImageContainer.module.scss'
import { scrollImg } from './AccountAccessSlice'
import ImageScroller from '../../components/ImageScroller/ImageScroller'

import { useSelector, useDispatch } from 'react-redux'

// fake data
const imgName = [
  'scroll-img01.png',
  'scroll-img02.png',
  'scroll-img03.png',
  'scroll-img04.png'
];

const imgUrl = imgName.map((name) => require(`../../images/${name}`));
//

export default function ImageContainer() {
  const dispatch = useDispatch();
  const { first } = useSelector((state) => state.accountAccess);

  return (
    <div className={s['img-container']}>
      <ImageScroller
        imgUrl={imgUrl}
        first={first}
        handleLeft={() => {
          const scrollTo = (first - 1 + imgUrl.length) % imgUrl.length;
          dispatch(scrollImg({
            first: scrollTo
          }));
          return scrollTo;
        }}
        handleRight={() => {
          const scrollTo = (first + 1) % imgUrl.length;
          dispatch(scrollImg({
            first: scrollTo
          }));
          return scrollTo;
        }}
      />
    </div>
  )
}
