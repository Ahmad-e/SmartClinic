import NavBar from './components/navbar'
import * as React from 'react';

import Diagnostic from './components/diagnostic';
import Treatmints from './components/treatmints'
import Animation from './components/animation'
import Document from './components/document'
import OverView from './components/overView'

const LandingPage=()=> {

    const [selectedPage, setSelectedPage] = React.useState(1);
    


    return(
        <div>
            <NavBar onChange={(e)=>setSelectedPage(parseInt(e))} />
            {
                selectedPage===1 ? (<Diagnostic/>) :
                selectedPage===2 ? (<Treatmints/>) :
                selectedPage===3 ? (<Animation/>) :
                selectedPage===4 ? (<Document/>) :
                selectedPage===5 ? (<OverView/>) : ("")
            }
        </div>
    )
}

export default LandingPage