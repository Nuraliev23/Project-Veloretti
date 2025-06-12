"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const getById = () => {
    let { id} = useParams()
  return (
    <div>getById {id}</div>
  )
}

export default getById