import { createContext, useEffect, useState } from "react"
import { useHistory } from "react-router";

import api from '../services/api';
interface Props {
    children?: React.ReactNode
}
interface User {
    name: string
}
interface AuthContextData {
    signed: boolean,
    signIn: () => void
    loading: boolean
    user: User
}

const initialState = {
    signed: false,
    setSigned: () => { },
    signIn: () => { },
    loading: false,
    token: null,
    user: {
        name: ''
    }
}

const AuthContext = createContext<AuthContextData>(initialState)

function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User>(initialState.user)
    const [loading, setLoading] = useState(initialState.loading)
    const [signed, setSigned] = useState(initialState.signed)

    const history = useHistory()

    useEffect(() => {
        const storedToken = localStorage.getItem('@Auth:TOKEN')
        const storedUser = localStorage.getItem('@Auth:USER')

        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser))
            setSigned(true)

            api.defaults.headers.authorization = `Bearer ${storedToken}`
        }
    }, [])

    async function signIn() {
        try {
            setLoading(true)

            const { data } = await api.post('/signin')

            const apiUser = {
                name: data.name
            }

            api.defaults.headers.authorization = `Bearer ${data.token}`

            localStorage.setItem('@Auth:TOKEN', data.token)
            localStorage.setItem('@Auth:USER', JSON.stringify(apiUser))

            setUser(apiUser)
            setSigned(true)
            setLoading(false)

            history.push('/dashboard')
        } catch (err) {

        }
    }

    return (
        <AuthContext.Provider value={{ signed, signIn, loading, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
