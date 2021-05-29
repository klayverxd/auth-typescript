import logo from '../../assets/logo.png';

import { Container } from './styles'
import { Logo } from './styles'
import { Input } from './styles'
import { Button } from './styles'

function SignIn() {
    return (
        <Container>
            <Logo src={logo} alt="CL Logo" />
            <Input type="text" defaultValue='teste@email.com' />
            <Input type="password" defaultValue='12345678' />
            <Button onClick={() => { }}>
                Entrar
            </Button>
        </Container>
    );
}

export default SignIn;