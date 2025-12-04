import { About, Footer, Header, Skills, Testimonial, Works } from "./container"
import { Navbar } from "./components"

const App = () => {
  return (
    <div className="bg-(--primary-color)">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App

