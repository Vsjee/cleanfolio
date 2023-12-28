import { Routes, Route } from "react-router-dom"
import { Home } from "./pages"
import { Footer, Header } from "./shared"

function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
