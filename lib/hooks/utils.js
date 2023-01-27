import probe from 'probe-image-size'
import { useMemo, useState } from 'react'

export function useComponent(body, key) {
  const component = useMemo(
    () =>
      (body ?? []).find(
        (item) => String(item?.component).toLowerCase() === String(key).toLowerCase()
      ),
    [body, key]
  )

  return component
}

export const useProbeImage = (filename) => {
  const [image, setImage] = useState({})

  useMemo(() => {
    const image = probe(filename)
    return image.then((result) => setImage(result))
  }, [filename])

  return { image }
}
