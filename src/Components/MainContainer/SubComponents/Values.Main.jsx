import { Grid, IconButton, Typography } from "@mui/material"
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

const ValuesComponent = () => {

  return (

    <Grid xs={12}container p={6} height='100%' width='100%' gap={2} display='flex' justifyContent='center' alignItems='center'>

      <Grid width='100%' display='flex' gap={2} flexDirection='column' >

        <Grid
          xs={12}
          display='flex'
          alignItems='center'
          justifyContent='center'
          item
          bgcolor='white'
          width='100%'
          borderRadius={2}
          p={1}
        >

          <Grid item xs={10} borderRadius={2} p={1} bgcolor='whitesmoke' >
            <Typography fontSize='12px' fontWeight={600}>Frame</Typography>
            <Typography fontSize='12px' fontWeight={600}>42X42 Inches</Typography>
          </Grid>
          <Grid item xs={2} textAlign='right'>
            <IconButton
              sx={{
                '&:focus': {
                  outline: 'none'
                }
              }}
            >
              <ModeEditRoundedIcon />
            </IconButton>
          </Grid>

        </Grid>

        <Grid
          xs={12}
          display='flex'
          alignItems='center'
          justifyContent='center'
          item
          bgcolor='white'
          width='100%'
          borderRadius={2}
          p={1}
        >

          <Grid item xs={10} borderRadius={2} p={1} bgcolor='whitesmoke' >
            <Typography fontSize='12px' fontWeight={600}>Frame</Typography>
            <Typography fontSize='12px' fontWeight={600}>42X42 Inches</Typography>
          </Grid>
          <Grid item xs={2} textAlign='right'>
            <IconButton
              sx={{
                '&:focus': {
                  outline: 'none'
                }
              }}
            >
              <ModeEditRoundedIcon />
            </IconButton>
          </Grid>

        </Grid>

      </Grid>


    </Grid>


  )
}

export default ValuesComponent
