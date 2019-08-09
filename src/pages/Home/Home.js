import React, { memo } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../container/ListOfPhotoCards'
import { Layout } from '../../components/Layout'

export const HomePage = ({ id }) => {
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

/*

//Muy Util //
Memo acepta una funcion donde recibe las nuevas props y las anteriores podemos hacer validaciones para evitar un re-render innesesario
like componetShouldUpdate
 */
export const Home = memo(HomePage, (prevProps, newProps)=> newProps.id === prevProps.id)
