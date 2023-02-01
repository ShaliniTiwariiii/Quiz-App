import React from "react";
import {style} from './Home.module.css'
import {Link, useNavigate} from 'react-router-dom'
const Home = () => {
	const nextPage=useNavigate()
	const options = ['JS', 'CSS', 'React'];
	function onOptionChangeHandler(e){
		const values=e.target.value  
		if(values=='JS'){
	nextPage('/js' )}
	else if(values=='CSS')
	nextPage('/css')
else nextPage('/react')
	}
	

	return (
		<>
			<center style={{marginTop:'10rem'}}> 
		
    
                <select onChange={onOptionChangeHandler} style={{height:'3rem',fontSize:'x-large',backgroundColor:'blue',color:'white'}}>
					<option>Please choose one option</option>
					{options.map((option, index) => {
						return <option key={index} >
						{option }
						</option>
					})}
				</select>
			</center>
		{/* <Link to='/jSquizz'>	<button>click</button></Link> */}
		
		</>
	);
};

export default Home;

