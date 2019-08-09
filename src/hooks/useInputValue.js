import { useState } from 'react'

export const useInputValue = initualValue => {
  const [value, setValue] = useState(initualValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}
