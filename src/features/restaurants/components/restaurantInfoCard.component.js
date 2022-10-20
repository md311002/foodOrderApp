import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper"
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from '../../../../assets/star'
import openNow from '../../../../assets/openNow'
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
padding: ${(props) => props.theme.space[3]};
`

const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
`
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Row = styled(View)`
flex-direction:row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`

const Section = styled(View)`
flex-direction:row;
align-items:center;
`
const SectionEnd = styled(View)`
flex:1;
flex-direction:row;
justify-content:flex-end;
align-items:center;
`

export default function RestaurantInfoCard({ restaurant = {} }) {
    const {
        name = "MD Cafe",
        photos = ['https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-3-1-1080x720.jpg'],
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        address = 'bagasara',
        rating = 4,
        isClosedTemporary = false,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Row>
                        {Array(Math.floor(rating)).fill().map((i, index) => (<SvgXml key={index} xml={star} width={20} height={20} />))}
                    </Row>
                    <SectionEnd>
                        {isClosedTemporary && (
                            <Text variant="label" style={{ color: "red" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position='left' size='large' >
                            {!isClosedTemporary && <SvgXml xml={openNow} width={20} height={20} />}
                        </Spacer>
                        <Spacer position='left' size='large' >
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
