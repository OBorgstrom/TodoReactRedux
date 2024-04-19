import { useEffect } from 'react'

const useTabTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default useTabTitle
