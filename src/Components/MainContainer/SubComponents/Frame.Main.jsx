import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import { useContext } from '../../../Hooks/UseContext'

const FrameComponent = () => {

    const { OptionsData , pageNumber } = useContext();

    const count = 3

    return (

        <Grid
            container
            xs={12}
            height='100%'
        >

            {/* Realtime Addons Page Name */}
            <Grid height='10%' xs={12} item p={1} px={4} pt={4} display='flex' alignItems='center' justifyContent='center'>
                <Typography variant='h5'>
                    {OptionsData?.[pageNumber]?.name} Page ...
                </Typography>
            </Grid>

            {/* Frame */}

            <Grid
                item
                height="90%"
                xs={12}
                // bgcolor="mediumaquamarine"
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '700px',
                        height: '300px',
                        backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/08/11/16/23/frame-4399313_640.png")',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            width: '630px',
                            height: '250px',
                            bgcolor: 'yellow',
                            textAlign: 'center',
                            backgroundImage: 'url("https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=600")',
                            borderRadius: '2%',
                            display: 'flex',
                            justifyContent: count === 1 ? 'center' : 'space-between',
                            alignItems: 'center',
                            px: 3,
                            position: 'relative',
                        }}
                    >
                        {/* Dynamic rendering for God boxes and lamps */}
                        {[...Array(count)].map((_, index) => (
                            <React.Fragment key={`god-lamp-${index}`}>
                                {/* God Box */}
                                <Box
                                    sx={{
                                        width: count === 1 ? '100%' : count === 2 ? '40%' : '30%',
                                        height: '90%',
                                        borderRadius: '5px',
                                        backgroundImage: 'url("src/assets/GOD1-removebg-preview.png")',
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />

                                {/* Lamp (except after the last box) */}
                                {index < count - 1 && (
                                    <Box
                                        sx={{
                                            width: '12%',
                                            height: '100%',
                                            borderRadius: '5px',
                                            backgroundImage: 'url("src/assets/Lamp2-removebg-preview.png")',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'bottom',
                                            backgroundRepeat: 'no-repeat',
                                            alignSelf: 'center',
                                            transform: 'scale(0.7)',
                                            top:40,
                                            position: 'relative',
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Grid>



            {/* <Grid
                item
                height='90%'
                xs={12}
                bgcolor='mediumaquamarine'
                p={4}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '700px',
                        height: '300px',
                        backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/08/11/16/23/frame-4399313_640.png")',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{

                            width: '630px',
                            height: '250px',
                            bgcolor: 'yellow',
                            textAlign: 'center',
                            backgroundImage: 'url("https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=600")',
                            borderRadius: '2%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            px: 3,
                            position: 'relative'
                        }}
                    >

                        <Box
                            sx={{
                                width: '30%',
                                height: '90%',
                                borderRadius: '5px',
                                backgroundImage: 'url("src/assets/GOD1-removebg-preview.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </Box>

                        <Box
                            sx={{
                                width: '12%',
                                height: '100%',
                                borderRadius: '5px',
                                backgroundImage: 'url("src/assets/Lamp2-removebg-preview.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                                backgroundRepeat: 'no-repeat',
                                alignSelf: 'self-end',
                                transform: 'scale(0.7)',
                                position: 'relative',
                                top: 45,  
                            }}
                        >
                        </Box>

                        <Box
                            sx={{
                                width: '30%',
                                height: '90%',
                                borderRadius: '5px',
                                backgroundImage: 'url("src/assets/GOD1-removebg-preview.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </Box>

                        <Box
                            sx={{
                                width: '12%',
                                height: '100%',
                                borderRadius: '5px',
                                backgroundImage: 'url("src/assets/Lamp2-removebg-preview.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                                backgroundRepeat: 'no-repeat',
                                alignSelf: 'self-end',
                                transform: 'scale(0.7)',
                                position: 'relative',
                                top: 45,  
                            }}
                        >
                        </Box>

                        <Box
                            sx={{
                                width: '30%',
                                height: '90%',
                                borderRadius: '5px',
                                backgroundImage: 'url("src/assets/GOD1-removebg-preview.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </Box>


                    </Box>

                </Box>
                {/* Ithuku kela than na work pannuen   */}

            {/* </Grid> */}

        </Grid>
    )
}

export default FrameComponent
