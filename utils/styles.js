import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#e78a4e',
    width: '100%',
    '& a': {
      color: 'hsl(20 3% 19%)',
      margin: 0,
      marginLeft: '5%',
      fontWeight: 'bold',
      fontSize: 32,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  main: {
    minHeight: '80vh',
    minWidth: '100%',
    margin: 0,
    marginBottom: '5%',
    backgroundColor: 'white',
  },
  footer: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: 'hsl(38 47% 75%);',
  },
});

export default useStyles