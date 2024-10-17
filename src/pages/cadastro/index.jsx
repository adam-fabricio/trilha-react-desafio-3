import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { Container, 
         Title, 
         Column, 
         TitleLogin, 
         SubtitleLogin, 
         Politica, 
         TenhoConta, 
         Row, 
         Wrapper } from './styles';

const Cadastro = () => {
    const {control} = useForm({

    })
    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar 
                    as principais tecnologias e entrar mais rápido nas 
                    empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>
                        Comece Agora grátis
                    </TitleLogin>
                    <SubtitleLogin>
                        Crie sua conta e make the change._
                    </SubtitleLogin>

                    <form>
                        <Input type="Usuario" 
                                placeholder="Nome Completo" 
                                leftIcon={<MdPerson />}  
                                name="senha" 
                                control={control} />
                        <Input placeholder="E-mail" 
                                leftIcon={<MdEmail />} 
                                name="email" 
                                control={control}/>
                        <Input type="password" 
                                placeholder="Senha" 
                                leftIcon={<MdLock />}  
                                name="senha" 
                                control={control} />
                        <Button title="Criar minha conta"
                                variant="secundary"
                                type="submit"/>
                    </form>
                    <Row>
                        <Politica>
                            Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de Privacidade 
                            e os Termos de Uso da DIO.
                            
                        </Politica>
                        <TenhoConta>
                            Já tenho conta. Fazer login.
                        </TenhoConta>
                    </Row>
                    
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Cadastro }