import React from 'react';
import Header from './components/headerComp/header';
import Main from './components/mainComp/main';
import Footer from './components/footerComp/footer';
import { Window, TitleBar, Text } from 'react-desktop/windows';

const App = (props) => {
  return(
    <div className='container-fluid'>
          <Header phone = {props.header} />
           <Main info = {props.main} />
           <Footer />
           <Window color='#fff' theme='ligh' chrome  padding='12px'>

                <TitleBar title='React' controls/>
                  <Text>Hello</Text>
                  <div className='container-fluid'>
                    <div className='row'>
                  <Main info={props.main} />
                  </div>
                  </div>
           </Window>
    </div>
  )
}

export default App;
