import * as S from './styles';
import { services } from '../../../constants';

const Services = () => {
    return (
        <S.Wrapper>
            <S.Services>
                <S.Texts>
                    <S.Title>Custom Furniture Built Only For You</S.Title>
                    <S.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</S.Paragraph>
                </S.Texts>
                <S.Cards>
                    {services.map(service => {
                        return (
                            <S.Card>
                                {service.icon}
                                <S.ServiceTitle>{service.title}</S.ServiceTitle>
                                <S.ServiceText>{service.text}</S.ServiceText>
                            </S.Card>
                        )
                    })}
                </S.Cards>
            </S.Services>
        </S.Wrapper>
    )
};

export default Services;