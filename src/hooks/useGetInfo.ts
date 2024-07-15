import { useEffect, useState } from 'react'

const getInfo = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now().toString())
    }, 1500)
  })
}

export const useGetInfo = () => {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')

  useEffect(() => {
    getInfo().then(info => {
      setLoading(false)
      setInfo(info)
    })
  }, [])

  return { loading, info }
}
