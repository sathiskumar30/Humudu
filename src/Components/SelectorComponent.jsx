import { Grid, Typography } from "@mui/material"
import { FrameImages, FinishImages, GodImages, Accessories } from "../image"
import { useContext } from "../Hooks/UseContext"


const SelectorComponent = () => {

    const { OptionsData, pageNumber } = useContext();

    let value = [] ;

    if(pageNumber === 1 ){
        value = FrameImages
    }else if(pageNumber === 2){
        value = FinishImages
    }else if(pageNumber === 3){
        value = GodImages
    }else if(pageNumber === 4){
         value = Accessories
    }

    return (
        <Grid
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >

            {/* Name of the Addons */}
            <Grid
                px={3}
                height='20%'
                width='100%'
                bgcolor='white'
                display='flex'
                alignItems='center'

            >
                <Typography fontWeight='600' fontSize='18px'>
                    {OptionsData[pageNumber]?.content}
                </Typography>
            </Grid>
            <Grid container gap={3} height='90%' width='100%' p={3} display='flex' justifyContent='center' >

                {value.map((value, index) => (
                    <Grid
                        key={index}
                        height='100%'
                        width='10%'
                        bgcolor='white'
                        borderRadius={3}
                        sx={{
                            backgroundImage: `url(${value?.src})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </Grid>
                ))}


            </Grid>


        </Grid>
    )
}

export default SelectorComponent
