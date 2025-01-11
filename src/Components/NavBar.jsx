import { Avatar, Grid, IconButton, Typography } from "@mui/material"
import { useState } from "react"

const NavBar = () => {

    const [selectedPage, setSelectedPage] = useState(1);

    console.log(selectedPage, 'This is the selected Page')

    const NavOptionsData = ['Home', 'Create a Frame', 'Order History']

    return (
        <Grid
            container
            xs={12}
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                // justifyContent:'center',
                alignItems: 'center',
                borderBottom: '1px solid black', ///Ipothiku irukatum change panniru da Sathis uh . . . . 
                px: 3,
            }}
        >

            <Grid
                item
                xs={6}
            >
                <Typography variant="h5">
                    MagicFrames
                </Typography>
            </Grid>

            <Grid
                item
                xs={6}
                display='flex'
                justifyContent='flex-end'
                alignItems='center'
                gap={7}
            >

                <Grid
                    item
                    display='flex'
                    gap={4}
                >
                    {NavOptionsData.map((value, index) => (
                        <Grid
                            key={index}
                            onClick={() => setSelectedPage(index)}
                            sx={{
                                borderBottom: selectedPage === index ? '2px solid ' : 'none',
                                color: selectedPage === index ? '#9400d3' : 'inherit',
                                cursor: 'pointer'
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                {value}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                <Grid
                    item
                >
                    <IconButton sx={{ p: 0 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://tse1.mm.bing.net/th?id=OIP.D_pgY0PtN8xkegp9PqCZ8AHaHa&pid=Api&P=0&h=180"
                            sx={{
                                border: '1px solid #9400d3'
                            }}
                        />
                    </IconButton>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default NavBar
