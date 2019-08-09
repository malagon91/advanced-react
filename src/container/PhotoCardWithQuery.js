import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
// query to consult graphql
const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

// Pass prop var to query by variables prop on id
export const PhotoCardWithQuery = ({ id }) => <Query query={GET_SINGLE_PHOTO} variables={{ id }} >
  {
    renderProp
  }
</Query>
