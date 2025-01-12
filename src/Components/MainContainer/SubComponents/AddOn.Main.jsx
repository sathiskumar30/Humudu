import { Grid, IconButton, Typography } from "@mui/material"
import { useContext } from "../../../Hooks/UseContext";


const AddOnComponent = () => {

    const { pageNumber , setPageNumber ,OptionsData , setEditwidthandHeight } = useContext();

    return (

        <Grid
            height="100%"
            display='flex'
            flexDirection='column'
            justifyContent='space-around'
            px={3}
        >
            {OptionsData.map((item, index) => (
                <Grid
                    key={index}
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-start'
                    alignItems='center'
                >
                    <IconButton
                        sx={{
                            borderRadius: 2,
                            padding: '8px',
                            backgroundColor: pageNumber === index ? '#9400d3' : '#f0f0f0',
                            color: pageNumber === index ? 'white' : 'inherit',
                            border: 'none',
                            '&:hover': {
                                backgroundColor: '#9370db',
                                color: 'white'
                            },
                            '&:focus': {
                                outline: 'none'
                            }
                        }}
                        onClick={()=>{
                            if(index !==0 ){
                                setEditwidthandHeight(false);
                            }
                            setPageNumber(index)
                        }} 
                    >
                        {item?.icon}
                    </IconButton>
                    <Typography variant="subtitle2" fontSize="14px" pt={1}>
                        {item?.name}
                    </Typography>
                </Grid>
            ))}
        </Grid>

    )
}

export default AddOnComponent
