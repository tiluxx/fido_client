import { createContext } from 'react'
import { axiosInstance } from '~/axiosConfig'

const CSRFTokenContext = createContext()

function CSRFTokenProvider({ children }) {
    const getCSRFToken = async () => {
        try {
            const { data } = await axiosInstance.get('/getCSRFToken', { withCredentials: true })
            axiosInstance.defaults.headers.common['X-CSRF-Token'] = data.CSRFToken
            axiosInstance.defaults.withCredentials = true
        } catch (error) {}
    }

    return <CSRFTokenContext.Provider value={getCSRFToken}>{children}</CSRFTokenContext.Provider>
}

export { CSRFTokenContext, CSRFTokenProvider }
