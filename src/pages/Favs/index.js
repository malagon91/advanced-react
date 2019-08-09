import React from 'react'
import { FavsWithQuery } from '../../container/getFavorites'
import { Layout } from '../../components/Layout'
 /*
 para el lazy loading es necesario quitarlos de forma nombrada y usarlo por default
  export const Favs = () => {

  */
export default () => {
  return (
    <Layout title={'tus favoritos'} subtitle={'Tus favoritos'}>
      <FavsWithQuery />
    </Layout>
  )
}
