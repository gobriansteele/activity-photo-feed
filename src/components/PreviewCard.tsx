'use client'

import Image from 'next/image'

type Props = {
  title: string
  src: string
  description: string
  onClick: (id: string) => void
  id: string
}

export function PreviewCard({ title, src, description, onClick, id }: Props) {
  function handleClick() {
    onClick(id)
  }

  return (
    <div
      className="flex flex-col max-w-xs w-full p-2 bg-gray-300 h-72"
      onClick={handleClick}
    >
      <div className="text-lg font-semibold">{title}</div>
      <div className="flex-grow relative">
        <Image
          src={src}
          alt="brian with a beer"
          fill={true}
          className="object-cover"
        />
      </div>
      <div>{description}</div>
    </div>
  )
}
