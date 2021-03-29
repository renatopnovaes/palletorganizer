import React from 'react';
import ReactDOM from 'react-dom';
import Romaneio from './Romaneio';
import Pallet from './Pallet';
import Pselector from './Pselector';


ReactDOM.render(
<div style={{display:'flex'}}>
<Romaneio/>

<Pselector/>

<Pallet/>
</div>
 , document.getElementById('root'));
