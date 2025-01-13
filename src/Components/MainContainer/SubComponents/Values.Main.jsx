import { Grid, IconButton, Input, Typography } from "@mui/material"
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
    FinallySelectedImage,
    GodWidth, setGodWidth,
    GodHeight, setGodHeight,
    accWidth, setAccWidth,
    accHeight, setAccHeight,
  } = useContext();


  const handleGodHeightChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 25) {
      setGodHeight(value);
    } else {
      setGodHeight(25);
    }
  };

  const handleGodWidthChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 25) {
      setGodWidth(value)
    } else {
      setGodWidth(25)
    }
  }

  const handleAccWidthChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 25) {
      setAccWidth(value)
    } else {
      setAccWidth(25)
    }
  }

  const handleAccHeightChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 25) {
      setAccHeight(value)
    } else {
      setAccHeight(25)
    }
  }


  return (

    <Grid xs={12} container p={6} height='100%' width='100%' gap={2} display='flex' justifyContent='center' alignItems='center'>

      <Grid width='100%' display='flex' gap={2} flexDirection='column' >

        {/* In this Grid , You can able to edit the Height and Width of the Frame */}
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
          gap={2}
        >

            {/* Shows the Name of Frame , which you have been selected... */}
          <Grid 
            xs={6}
            display='flex'
            alignItems='center'
            justifyContent='center'
            item
            bgcolor='white'
            width='100%'
            borderRadius={2}
            p={0.5}
          >

            <Grid item xs={8} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
              <Typography fontSize='14px' fontWeight={500}>Frame </Typography>
              <Typography fontSize='12px' fontWeight={600}>{FrameImages[frameNumber]?.name}</Typography>
            </Grid>
            <Grid item xs={4} p={0.5} textAlign='right'>
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

          {/* Name of the Finish (ie) Background for the Frame . */}
          <Grid
            xs={6}
            display='flex'
            alignItems='center'
            justifyContent='center'
            item
            bgcolor='white'
            width='100%'
            borderRadius={2}
            p={0.5}
          >

            <Grid item xs={8} borderRadius={2} p={0.5} px={1} bgcolor='whitesmoke' >
              <Typography fontSize='14px' fontWeight={500}>Finish</Typography>
              <Typography fontSize='12px' fontWeight={600}>{FinishImages[finishNumber]?.name}</Typography>
            </Grid>
            <Grid item xs={4} p={0.5} textAlign='right'>
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

        </Grid>

        {/* God Names and Count will be displayed */}
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

        {/* This is component shows you the Name of the Accessories , which has been selected... */}
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


       {/* Component shwoing the God Images... Height and Widht with values , You can edit it. */}
        {FinallySelectedImage.length > 0 &&
          <Grid
            xs={12}
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap={2}
          >

            <Grid
              xs={6}
              display='flex'
              alignItems='center'
              justifyContent='center'
              item
              bgcolor='white'
              width='100%'
              borderRadius={2}
              p={0.5}
            >

              <Grid
                item
                xs={12}
                borderRadius={2}
                p={0.5}
                px={1}
                bgcolor='whitesmoke'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
              >
                <Typography fontSize='12px' fontWeight={400}>God <span style={{ fontWeight: 700 }}>Width</span>X <span style={{ fontWeight: 700 }}>Height</span></Typography>
                <Grid
                  item
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='row'
                  gap={3}
                >
                  <Input placeholder="Wid.." value={GodWidth} onChange={handleGodWidthChange} />
                  <Input placeholder="Hei.." value={GodHeight} onChange={handleGodHeightChange} />
                </Grid>
              </Grid>

            </Grid>

          {/* Component shwoing the Accessories Height and Widht with values , You can edit it. */}
            {accessoryNumber != null &&
              <Grid
                xs={6}
                display='flex'
                alignItems='center'
                justifyContent='center'
                item
                bgcolor='white'
                width='100%'
                borderRadius={2}
                p={0.5}
              >
                <Grid
                  item
                  xs={12}
                  borderRadius={2}
                  p={0.5}
                  px={1}
                  bgcolor='whitesmoke'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                >
                  <Typography fontSize='12px' fontWeight={400}>Acc <span style={{ fontWeight: 700 }}>Width</span> X <span style={{ fontWeight: 700 }}>Height</span></Typography>
                  <Grid
                    item
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='row'
                    gap={3}
                  >
                    <Input placeholder="Wid.." value={accWidth} onChange={handleAccWidthChange} />
                    <Input placeholder="Hei.." value={accHeight} onChange={handleAccHeightChange} />
                  </Grid>
                </Grid>
              </Grid>
            }


          </Grid>
        }

      </Grid>


    </Grid >


  )
}

export default ValuesComponent
