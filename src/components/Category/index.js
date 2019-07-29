import React from 'react'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)
