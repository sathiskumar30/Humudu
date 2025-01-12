import { Grid, IconButton, Typography } from "@mui/material"
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import { FrameImages } from "../../../image";
import { useContext } from "../../../Hooks/UseContext";
import { FinishImages, Accessories } from "../../../image";
import CloseIcon from '@mui/icons-material/Close';

const ValuesComponent = () => {

  const {
    frameNumber, finishNumber,
    accessoryNumber, editwidthandHeight,
    setEditwidthandHeight, width,
    height, setPageNumber,
    FinallySelectedImage
  } = useContext();

  return (

    <Grid xs={12} container p={6} height='100%' width='100%' gap={2} display='flex' justifyContent='center' alignItems='center'>

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
          p={0.5}
        >

          <Grid container item xs={10} p={0.5} gap={1}  >

            <Grid container item xs={5.5} borderRadius={2} direction="column" bgcolor="whitesmoke" px={1}>
              <Typography fontSize="14px" fontWeight={600}>Width</Typography>
              <Typography fontSize="12px" fontWeight={600}>{width} Inches</Typography>
            </Grid>

            <Grid container item xs={5.5} borderRadius={2} direction="column" bgcolor="whitesmoke" px={1}>
              <Typography fontSize="14px" fontWeight={600}>Height</Typography>
              <Typography fontSize="12px" fontWeight={600}>{height} Inches</Typography>
            </Grid>
          </Grid>

          <Grid item xs={2} p={0.5} textAlign='right'>

            {editwidthandHeight ?

              <IconButton
                sx={{
                  color: 'red',
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                onClick={() => setEditwidthandHeight(false)}
              >
                <CloseIcon />
              </IconButton>

              :
              <IconButton
                sx={{
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                onClick={() => {
                  setEditwidthandHeight(true);
                  setPageNumber(0)
                }}
              >
                <ModeEditRoundedIcon />
              </IconButton>

            }

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
          p={0.5}
        >

          <Grid item xs={10} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
            <Typography fontSize='14px' fontWeight={500}>Frame Type </Typography>
            <Typography fontSize='12px' fontWeight={600}>{FrameImages[frameNumber]?.name}</Typography>
          </Grid>
          <Grid item xs={2} p={0.5} textAlign='right'>
            <IconButton
              sx={{
                '&:focus': {
                  outline: 'none'
                }
              }}
              onClick={() => setPageNumber(1)}
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
          p={0.5}
        >

          <Grid item xs={10} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
            <Typography fontSize='14px' fontWeight={500}>Finish Type</Typography>
            <Typography fontSize='12px' fontWeight={600}>{FinishImages[finishNumber]?.name}</Typography>
          </Grid>
          <Grid item xs={2} p={0.5} textAlign='right'>
            <IconButton
              sx={{
                '&:focus': {
                  outline: 'none'
                }
              }}
              onClick={() => setPageNumber(2)}

            >
              <ModeEditRoundedIcon />
            </IconButton>
          </Grid>

        </Grid>

        {FinallySelectedImage.length > 0 &&
          <Grid
            xs={12}
            display='flex'
            alignItems='center'
            justifyContent='center'
            item
            bgcolor='white'
            width='100%'
            borderRadius={2}
            p={0.5}
          >

            <Grid container display='flex' flexDirection='row' item xs={10} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
              <Grid item xs={8}>
                <Typography fontSize='14px' fontWeight={500}>Gods Name </Typography>
                <Grid display='flex' flexDirection='row' gap={1}>
                  {FinallySelectedImage.map((item, index) => (
                    <Typography key={index} fontSize="12px" fontWeight={600}>
                      {item?.name}
                    </Typography>

                  ))}
                </Grid>

              </Grid>
              <Grid item xs={4}>
              <Typography fontSize='14px' fontWeight={500}>No of Gods </Typography>
                <Typography fontSize='12px' fontWeight={500}>3</Typography>
              </Grid>

            </Grid>
            <Grid item xs={2} p={0.5} textAlign='right'>
              <IconButton
                sx={{
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                onClick={() => setPageNumber(3)}

              >
                <ModeEditRoundedIcon />
              </IconButton>
            </Grid>

          </Grid>
        }


        {accessoryNumber != null &&

          <Grid
            xs={12}
            display='flex'
            alignItems='center'
            justifyContent='center'
            item
            bgcolor='white'
            width='100%'
            borderRadius={2}
            p={0.5}
          >

            <Grid item xs={10} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
              <Typography fontSize='14px' fontWeight={500}>Accessories Name</Typography>
              <Typography fontSize='12px' fontWeight={600}>{Accessories[accessoryNumber]?.name}</Typography>
            </Grid>
            <Grid item xs={2} p={0.5} textAlign='right'>
              <IconButton
                sx={{
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                onClick={() => setPageNumber(4)}

              >
                <ModeEditRoundedIcon />
              </IconButton>
            </Grid>

          </Grid>

        }

      </Grid>


    </Grid >


  )
}

export default ValuesComponent
