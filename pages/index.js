import React from "react";
import styled from "styled-components";
import BackgroundContainer from "../components/BackgroundContainer";
import SectionContainer from "../components/SectionContainer";
import TeamMemberCard from "../components/TeamMemberCard";
import ContactForm from "../components/ContactForm";
import { colors } from "../utils/theme";
import { getHomeData } from "../utils/api";

const topBoxColors = {
  0: colors.lightGreen,
  1: colors.green,
  2: colors.aquaGreen
}

export default function Home(props) {
  const managementSection = props.response.find(section => section.html_id === "management");
  const topSection = props.response.find(section => section.html_id === "top");
  const letsTalkSection = props.response.find(section => section.html_id === "lets-talk");

  return (
    <Container>
      <HeroBackgroundContainer backgroundImg={topSection.background_img}>
          <SectionContainer>
            <BannerTextContainer>
              <Title>
                {topSection.header}
              </Title>
              <Quote>
                {topSection.lead_in}
              </Quote>
            </BannerTextContainer>
            <Subtitle>{topSection.children[0].header}</Subtitle>
            <BannerBoxContainer>
              {topSection.children[0].list.map((item, index) => (
                <Box className={item.html_id} key={item.html_id} style={{backgroundColor: topBoxColors[index]}}>
                 <BannerBoxIcon style={{ backgroundImage: `url(${item.img})` }} />
                 <BannerBoxText>
                  {item.text}
                 </BannerBoxText>
                </Box>
              ))}
            </BannerBoxContainer>
          </SectionContainer>
      </HeroBackgroundContainer>
      <SectionContainer>
        <Subtitle>{managementSection.header}</Subtitle>
        <TeamMemberCardContainer>
          {managementSection.children[0].list.map(item => (
            <TeamMemberCard
              key={item.html_id}
              photo={item.img}
              name={item.name}
              title={item.title}
              bio={item.bio}
            />
          ))}
        </TeamMemberCardContainer>
      </SectionContainer>
      <BackgroundContainer backgroundImg={letsTalkSection.background_img}>
          <SectionContainer>
            <Subtitle>{letsTalkSection.header}</Subtitle>
            <Quote style={{marginRight: "12em"}}>
              {letsTalkSection.lead_in}
            </Quote>
            <ContactForm data={letsTalkSection}/>
          </SectionContainer>
      </BackgroundContainer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const response = await getHomeData()

  return {
    props: { response },
  }
}

const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  overflow-x: hidden;
`;

const HeroBackgroundContainer = styled(BackgroundContainer)`
  background-size: 140%;
  background-position: center -8vh;
  background-color: #ebebeb;
`;

const Title = styled.h1`
  font-family: "Avenir";
  font-weight: lighter;
  font-size: 2.72em;
  line-height: 1.14em;
  letter-spacing: 0.04em;
  color: ${colors.font.blue};
  text-align: left;
`;

const Subtitle = styled.h2`
  font-family: "Avenir";
  font-weight: lighter;
  font-size: 2em;
  color: ${colors.font.blue};
  align-self: flex-start;
`;

const Quote = styled.p`
  font-family: "Avenir";
  font-weight: 500;
  font-size: 1.5em;
  color: ${colors.font.black};
  text-align: left;
`;

const BannerTextContainer = styled.div`
  max-width: 608px;
  margin-top: 2em;
  align-self: flex-end;
`;

const BannerBoxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  .high-value {
    margin: auto 42px;
  }
  
`;

const Box = styled.div`
  width: 282px;
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;           

const BannerBoxIcon = styled.div`
  width: 140px;
  height: 140px;
  background-position: center 10%;
  background-repeat: no-repeat;
  background-size: 160%;
`;

const BannerBoxText = styled.p`
  font-family: "Avenir";
  font-size: 20px;
  text-align: center;
  color: ${colors.font.white};
`;

const TeamMemberCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 2fr);
  justify-content: space-around;
  column-gap: 40px;
  row-gap: 40px;
`;
