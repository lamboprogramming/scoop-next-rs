import React from 'react';
import tw from 'tailwind-styled-components'

const Search = () => {
  return (
    <Wrapper>
    {/* Button Container */}
        <ButtonContainer>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
        </ButtonContainer>

    {/* Input Container */}
    <InputContainer>
        <FromToIcons>
        
        </FromToIcons>
    </InputContainer>




      {/* Saved Places */}
      {/* Confirm Location */}


    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12
`