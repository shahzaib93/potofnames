import Head from 'next/head'
import React, { Component } from 'react'
// import Image from 'next/image'
// import WheelComponent from 'react-wheel-of-prizes'
// import 'react-wheel-of-prizes/dist/index.css'
import WheelComponent from '../my-plugins/react-wheel-of-prizes/dist'

export default function Dummy() {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ]
  const segColors = [
    '#344199',
    '#dfdede',
    '#344199',
    '#dfdede',
    '#344199',
    '#dfdede',
    '#344199',
    '#dfdede'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <div className="container mb-5">
    <WheelComponent
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
    <button id="btn">Spin</button>
    </div>
  )
}