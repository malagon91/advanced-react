import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => <ul>
  {[0, 1, 2].map(ind => <li key={ind}><PhotoCard /></li>)}
</ul>
