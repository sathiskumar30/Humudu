import { Grid } from "@mui/material"
import AddOnComponent from "./SubComponents/AddOn.Main"
import FrameComponent from "./SubComponents/Frame.Main"
import ValuesComponent from "./SubComponents/Values.Main"

const MainComponent = () => {
  return (
    <Grid
        container
        xs={12}
        sx={{
            height:'100%',
            width:'100%',
            // display:'flex',
            // alignItems:'center',
            // justifyContent:'center',
        }}
    >
        {/* Addon's Navigation Component */}

        <Grid item xs={1} >
            <AddOnComponent />
        </Grid>

        {/* Main Component , showing the Frame */}

        <Grid item xs={8}>
            <FrameComponent />
        </Grid>

        {/* User Input Component... */}

        <Grid item xs={3} bgcolor='' height='100%'>
            <ValuesComponent />
        </Grid>

    </Grid>
  )
}

export default MainComponent
