import React from 'react';
 import ME6SEM from "../SyllabusPDF/BENONCBSE/MEsem6.pdf";

import { RefreshCw } from 'lucide-react';


function ME6sem() {
    
  return (
    <>
  
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={ME6SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '1px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
     
    </>
  );
}

export default ME6sem ;





