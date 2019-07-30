import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_PHOTO =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO }) => {
  const [show, setShow] = useState(false)
  const element = useRef(null)
  useEffect(() => {
    // Se agrega intersection oberver para lazy loading pero no todos los nav lo usan asi que se cargar el babel para soportarlo             plugins: ['@babel/plugin-syntax-dynamic-import'],
    // Como en chrome si funciona se agrupa todo en una promesa para que solo lo traiga cuando el nav no lo tenga si lo tiene solo lo usamos
    // se usa un wrapper porque el import() es una promesa
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) setShow(true)
        observer.disconnect()
      })
      // Lazy load para cargar las paginas
      // Logic to check if the element is in the viewport
      observer.observe(element.current)
    })
  })

  return (
    <Article ref={element}>
      {show && (
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
      )}
      <Button>
        <MdFavoriteBorder size='32px' /> {likes} Likes!
      </Button>
    </Article>
  )
}
