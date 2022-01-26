import React from 'react'
import { Button } from '../ButtonElements';

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, destination, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} style={{"min-height":window.screen.height-80}}>
        <InfoWrapper style={{"padding-top":window.screen.height/10}}>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to={destination}
                primary={primary ? 1 : 0} 
                dark={dark ? 1 : 0} 
                dark2={dark2 ? 1 : 0} > {buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
