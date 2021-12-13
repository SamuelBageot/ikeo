import { useState } from 'react';
import * as S from './styles';

const Contact = () => {

    const [email, setEmail] = useState('');

    const submitFormHandler = e => {
        e.preventDefault();
        setEmail('');
    };

    return (
        <S.Wrapper>
            <S.Contact>
                <S.Texts>
                    <S.Title>Join our newsletter and get 20% off</S.Title>
                    <S.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore</S.Paragraph>
                </S.Texts>
                <S.Form action='' onSubmit={submitFormHandler}>
                    <S.Input type="email" placeholder='Enter your email address' name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <S.Btn type='submit'>SUBSCRIBE</S.Btn>
                </S.Form>
            </S.Contact>
        </S.Wrapper>
    )
};

export default Contact;