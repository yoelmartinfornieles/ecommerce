import { makeStyles } from "@material-ui/core";

const useStyles =makeStyles({
	navbar: {
		backgroundColor: '#e78a4e',
		'& a': {
			color: 'hsl(20 3% 19%)',
			margin: 0,
			marginLeft: '10%',
			fontWeight: 'bold',
			fontSize: 32
		}
	}, 
	main: {
		minHeight:'80vh',
		margin: '0',
		backgroundColor: 'hsl(38 47% 75%);',
	},
	footer: {
		textAlign: 'center',
	}
})

export default useStyles