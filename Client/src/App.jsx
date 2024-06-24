import { BrowserRouter } from 'react-router-dom/dist'
import AllRoutes from './AllRoutes'
import GeminiChatbot from './Components/Gemini-Chatbot'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
