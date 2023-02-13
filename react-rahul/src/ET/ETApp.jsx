import React, { useState } from 'react';
import EForm from './ETForm'
import ETList from './ETList'

//import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

const ETApp = () => {

    const [track, settrack] = useState([]);

    return <>
        <EForm track={track} settrack={settrack} />
        <ETList track={track} />
    </>;
}

export default ETApp