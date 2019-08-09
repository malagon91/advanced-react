import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../container/ListOfPhotoCards'
import { Layout } from '../../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout
      title={'Tu App de fotos de mascotas'}
      subtitle={'puedes encontrar fotos de mascotas'}
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
