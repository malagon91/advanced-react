import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (<Button
    onClick={onClick}
  >
    <Icon size='32px' /> {likes} Likes!
  </Button>)
}
