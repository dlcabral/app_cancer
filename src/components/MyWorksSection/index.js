import React from 'react';
import {
  MyWorksContainer,
  MyWorksTitle,
  WorksRowWrapper,
  WorksRow1,
  Work,
  WorkTitle,
  TasyImg,
  GLImg,
  GCImg,
} from '../MyWorksSection/MyWorksElements';

const MyWorksSection = ({tasy, altTasy, greencharm, altGreencharm, grindleveling, altGrindLeveling, id})=>{
  return (
    <>
      <MyWorksContainer id={id}>
        <MyWorksTitle>My Works</MyWorksTitle>
        <WorksRowWrapper>
          <WorksRow1>
            <Work>
              <WorkTitle>Tasy</WorkTitle>
              <TasyImg src={tasy} alt={altTasy}/>
            </Work>
            <Work>
              <WorkTitle>Grind Leveling</WorkTitle>
              <GLImg src={grindleveling} alt={altGreencharm}/>
            </Work>
            <Work>
              <WorkTitle>Green Charm</WorkTitle>
              <GCImg src={greencharm} alt={altGrindLeveling}/>
            </Work>
          </WorksRow1>
        </WorksRowWrapper>

      </MyWorksContainer>
    </>
  );
};

export default MyWorksSection;