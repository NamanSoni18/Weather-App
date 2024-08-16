import './App.css'
import Nav from './components/Nav'
import { ThemeProvider } from './components/theme-provider'
import TypeRevealDemo from './components/TypeRevealDemo';
import Globe from './components/Globe';
import ShineBorder from './components/ShineBorder';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Nav />
        <TypeRevealDemo />
        <Globe />
        <ShineBorder/>
      </ThemeProvider>
    </>
  )
}

export default App
