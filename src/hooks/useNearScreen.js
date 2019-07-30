import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

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
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      // Lazy load para cargar las paginas
      // Logic to check if the element is in the viewport
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
