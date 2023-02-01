import React from 'react'

function TempApp() {
  return (
    <>
    <div className='box'>
        <div className='inputData'>
            
            <input
            type='searc'
            className='inputField'
            onChange={(event)=>{

            }}
            />

    
    </div>
    <div className='info'>
<h2 className='location'
>
<i class="fa-duotone fa-street-view"></i>Lucknow

</h2>
<h1 className='temp'></h1>
<h3 className='tempmin_max'></h3>
    </div>
    
        </div>
    </>
  )
}

export default TempApp
