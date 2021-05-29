import { AuthProvider } from "./auth";

interface Props {
    children?: React.ReactNode
}

function ContexProvider({ children }: Props) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default ContexProvider