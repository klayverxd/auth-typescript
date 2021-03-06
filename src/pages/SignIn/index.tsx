import { useAuth } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import { Container, Logo, Input, Button } from './styles'

function SignIn() {
    const { signIn, loading } = useAuth()

    function handleSignIn() {
        signIn()
    }

    return (
        <Container>
            <Logo src={logo} alt="CL Logo" />
            <Input type="text" defaultValue='teste@email.com' />
            <Input type="password" defaultValue='12345678' />
            <Button onClick={handleSignIn}>
                {loading ? 'Carregando' : 'Entrar'}
            </Button>
        </Container>
    );
}

export default SignIn;