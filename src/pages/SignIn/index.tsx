import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import { Container, Logo, Input, Button } from './styles'

function SignIn() {
    const { signed, setSigned } = useContext(AuthContext)

    return (
        <Container>
            <Logo src={logo} alt="CL Logo" />
            <Input type="text" defaultValue='teste@email.com' />
            <Input type="password" defaultValue='12345678' />
            <Button onClick={() => setSigned(true)}>
                Entrar
            </Button>
        </Container>
    );
}

export default SignIn;