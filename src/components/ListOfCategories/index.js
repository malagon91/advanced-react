import React, { useState, useEffect, Fragment, memo } from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-miguel-api.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategoriesPage = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fix => (
    <List fixed={fix}>
      {loading ? (
        <Item key='loading'>
          <Category />
        </Item>
      ) : (
        categories.map(cat => (
          <Item key={cat.id}>
            <Category {...cat} path={`/pet/${cat.id}`} />
          </Item>
        ))
      )}
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
// Memo recuerda las props anteriores, si las props no son diferentes no hace el re-render
export const ListOfCategories = memo(ListOfCategoriesPage)
