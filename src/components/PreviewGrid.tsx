'use client'
import { useCallback, useState } from 'react'
import { PreviewCard } from './PreviewCard'

export function PreviewGrid() {
  const [activeImage, setActiveImage] = useState<string>()
  const handleImageClicked = useCallback((id: string) => {
    setActiveImage(id)
  }, [])

  console.log(activeImage)

  return (
    <PreviewCard
      src="/brianBeer.jpg"
      title="Will Bike for Beer"
      description="Brian relaxing with a beer at SF brewing"
      id="1"
      onClick={handleImageClicked}
    />
  )
}
