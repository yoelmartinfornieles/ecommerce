import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#e78a4e',
    width: '100%',
    '& a': {
      fontSize: '1.6rem',
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
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
  },
  footer: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#e78a4e',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  }
});

export default useStyles