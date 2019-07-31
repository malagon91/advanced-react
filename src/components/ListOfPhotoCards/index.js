import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => <ul>
  {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
</ul>

