import React from 'react'
import { FavsWithQuery } from '../../container/getFavorites'
import { Layout } from '../../components/Layout'

export const Favs = () => {
  return (
    <Layout title={'tus favoritos'} subtitle={'Tus favoritos'}>
      <FavsWithQuery />
    </Layout>
  )
}
