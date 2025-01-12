import { Grid } from "@mui/material"
import NavBar from "./Components/NavBar"
import MainComponent from "./Components/MainContainer/MainComponent"
import SelectorComponent from "./Components/SelectorComponent"

function App() {

  return (
    <Grid
      sx={{
        height: '100vh',
        width: '100%'
      }}
    >
      <Grid height='8vh' width='100%'>
        <NavBar />
      </Grid>

      <Grid height='62vh' width='100%' bgcolor='#c4c3d0'>
        <MainComponent />
      </Grid>

      <Grid height='30vh' width='100%' bgcolor='#c4c3d0'>
        <SelectorComponent />
      </Grid>

    </Grid>
  )
}

export default App
