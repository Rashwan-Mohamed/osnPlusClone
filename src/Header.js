import { Nav } from './navbar.js'
import { Hero } from './Hero'

export const Header = ({isOkay}) => {
  return (
    <>
     
        <Nav isOkay={isOkay} />
        <Hero />
      
    </>
  )
}
