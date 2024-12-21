"use client"
import React from "react"
import Image from "next/image"

export default function ImagePath() {
  return (
    <div>
        <h1>Image Path</h1>
        <Image src="/test.png" alt="画像の説明" width={500}
      height={300}/>
    </div>
  )
}