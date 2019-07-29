import React from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => (<List>
  {categories.map(cat => <Item key={cat.id} > <Category {...cat} /></Item>)}
</List>)
