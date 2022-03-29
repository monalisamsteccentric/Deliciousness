

import './App.css';
import Category from './components/Category';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'




function App() {
 
 return(
   <div className='App'>
     <BrowserRouter>
     <Nav>
       <GiKnifeFork/>
       <Tab to={'/'}>deliciousness</Tab>
     </Nav>
       <Search/>
      <Category/>
      <Pages/>
     </BrowserRouter>
   </div>
 )


}

const Tab = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
flex-direction: flex-start;
align-items: center;
svg{
  font-size: 4rem;
}`

export default App;
