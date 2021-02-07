import React, { useState } from 'react';
import Buttons from './Buttons';
import './App.css';
import { Box, TextField, withStyles, Paper, Grid } from '@material-ui/core';

const MainPaper = withStyles({
	root:{
	  backgroundColor: "#b8b9c0"
	}
  })(Paper);

const App = () => {
	const [value,setValue] = useState(0);
	const [texta,setTexta] = useState(0);
	const [textb,setTextb] = useState(0);
	
	const plus = () => {
		setValue(Number(texta) + Number(textb))
	}
	const minus = () => {
		setValue(texta - textb)
	}
	const timesby = () => {
		setValue(texta * textb)
	}
	const divideby = () => {
		setValue(texta / textb)
    }
    
	return (
		<>
			<Grid container justify={'center'} alignItems={'center'}>
				<Grid item xs={6} alignItems={'center'}>
					<MainPaper>			
							<Box p={1} display="flex" justifyContent="center" flexDirection="column">
								<Box justifyContent="center" display="flex" mb={1}>
									<Box mr={0.25}>
										<TextField color="secondary" input id="Mainvalues" value={texta} onChange={(e)=> setTexta(e.target.value)} />
									</Box>

									<Box ml={1}>
										<TextField color="secondary" input id="Secondaryvalues" value={textb} onChange={(e)=> setTextb(e.target.value)}/>
									</Box>

									<Box ml={1}>
										<TextField color="secondary" input id="Mainvalues" value={value}/>
									</Box>
								</Box>
									<Box ml={2.1} display="flex" justifyContent="center" alignContent="center">
										<Buttons plus={plus} minus={minus} timesby={timesby} divideby={divideby}/>
									</Box>
							</Box>
					</MainPaper>
				</Grid>
			</Grid>		
		</>     
	);
}

export default App;
