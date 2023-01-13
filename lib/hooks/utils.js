import { useMemo } from 'react'

export function useComponent(body, key) {
  const component = useMemo(
    () =>
      (body ?? []).find(
        (item) => String(item?.component).toLowerCase() === String(key).toLowerCase()
      ),
    [body]
  )

  return component
}
