import { createContext, useState } from "react"
import api from '../services/api';
interface Props {
    children?: React.ReactNode
}

interface AuthContextData {
    signed: boolean,
    setSigned: (signed: boolean) => void
}

const initialState = {
    signed: false,
    setSigned: () => { }
}

const AuthContext = createContext<AuthContextData>(initialState)

function AuthProvider({ children }: Props) {
    const [signed, setSigned] = useState(initialState.signed)

    async function signIn() {
        await api.post('/signin')
    }

    return (
        <AuthContext.Provider value={{ signed, setSigned }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
