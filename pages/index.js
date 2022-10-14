import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {

  return (
    <Wrapper>
    <Map />
      <ActionItems>
      {/*Header*/}
    <Header>
    <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" alt="/"/>
    <Profile>
      <Name>Daniel Witchovsky</Name>
      <UserImage
        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Profile>
    </Header>

      {/*ActionButtons*/}
    <ActionButtons>

    {/* Buttons #1 */}
      <Link href='/search'>
      <ActionButton>
      <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
      Ride </ActionButton>
      </Link>

       {/* Buttons #2 */}
      <ActionButton>
      <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
      Wheels </ActionButton>
      <ActionButton> 

       {/* Buttons #3 */}
      <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
      Reserve </ActionButton>

    </ActionButtons>

      {/*InputButtons*/}
      <InputButton>
        Where to?
      </InputButton>
      
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center 
`
const UberLogo = tw.img`
h-20 
`

const Profile = tw.div`
flex items-center 
`

const Name = tw.div`
mr-4 w-20 text-sm

`

const UserImage = tw.img`
  h-20 w-20 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`