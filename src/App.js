
import Dropzone from './components/Dropzone';
import Login from './components/Login'
import './App.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid container 
      spacing={2} 
      direction="row"
      justifyContent="center"
      alignItems="center">
        <div>
          <Dropzone />
        </div>
        <div>
          <Login />
        </div>
      </Grid>
    </div>
  );
}

export default App;
