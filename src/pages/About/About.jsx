import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import * as S from './styles';
import Separator from '../../components/UI/Separator/Separator';

const About = () => {
    return (
        <>
            <Breadcrumb />
            <S.Wrapper>
                <S.About>
                    <S.ImgContainer>
                        <S.Img src="/images/interior-small.jpg" alt="beautiful interior" />
                    </S.ImgContainer>
                    <S.Texts>
                        <S.Title>Our Story</S.Title>
                        <Separator margin="1rem 0" />
                        <S.Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</S.Paragraph>
                    </S.Texts>
                </S.About>
            </S.Wrapper>
        </>
    )
};

export default About;