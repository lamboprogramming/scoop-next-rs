import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'

export default function Home() {
  return (
    <Wrapper>
      <Map>map</Map>
      <ActionItems>start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
bg-red-500
`
const ActionItems = tw.div`

`
