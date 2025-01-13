import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "../../../Hooks/UseContext";
import { FrameImages, FinishImages, GodImages, Accessories } from "../../../image";
import { useDrop } from "react-dnd";

const FrameComponent = () => {
    const {
        OptionsData,
        pageNumber,
        frameNumber,
        finishNumber,
        accessoryNumber,
        ShowingHeight,
        ShowingWidth,
        FinallySelectedImage ,
        setFinallySelectedImage,
        GodsDisplayWidth,GodsDisplayHeight,
        accDisplayWidth,accDisplayHeight,
    } = useContext();

    const [droppedItems, setDroppedItems] = useState([]);
    const count = 3 ;  //Try to Change this count to 1 and 2 for the Two Frame and one Frame ....

    const [ anyone , setAnyone ] = useState(null)

    const [{ isOver }, drop ] = useDrop(() => ({
        accept: "image",
        drop: (item) => {
            if (!droppedItems.some((dropped) => dropped.id === item.id)) {
                setDroppedItems((prev) => [...prev, item]);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));


    const handleDrop = (item, index) => {

        setFinallySelectedImage(prevState => {
            if (prevState.length >= count) {
                return prevState.map((image, i) => 
                    i === index ? GodImages[index] : image  
                );
            } else {
                return [
                    ...prevState,
                    GodImages[index]
                ];
            }
        });
    };
      

    {/* Main Container, which shows the output of the Photo Frame .... */}
    return (
    <Grid container xs={12} height="100%">

        <Grid
            height="10%"
            xs={12}
            item
            p={1}
            px={4}
            pt={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h5">
                {OptionsData?.[pageNumber]?.name} Page ...
            </Typography>
        </Grid>

        <Grid
            item
            height="90%"
            xs={12}
            p={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {/* Frame Component */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: ShowingWidth,
                    height: ShowingHeight,
                    backgroundImage: `url(${FrameImages[frameNumber]?.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                }}
            >
                {/* Finish Component */}
                <Box
                    sx={{
                        width: ShowingWidth - ShowingWidth * 0.09,
                        height: ShowingHeight - ShowingHeight * 0.12,
                        bgcolor: "white",
                        textAlign: "center",
                        backgroundImage: `url(${FinishImages[finishNumber]?.src})`,
                        borderRadius: "2%",
                        display: "flex",
                        justifyContent: count === 1 ? "center" : "space-between",
                        alignItems: "center",
                        border: isOver ? "2px dashed #9400d3" : "none",
                        px: 3,
                        position: "relative",
                    }}
                >
                    {Array.from({ length: count }).map((_, index) => {

                        const dropRef = useRef(null);

                        const [{ isOver }, drop] = useDrop({
                            accept: "image", 
                            drop: (item) => handleDrop(item, index), 
                            collect: (monitor) => ({
                                isOver: monitor.isOver(), 
                            }),
                        });

                        useEffect(() => {

                            if (dropRef.current) {
                                drop(dropRef.current);  
                            }

                        }, [drop]);

                        return (
                            <React.Fragment key={`dropped-item-${index}`}>
                                
                                {/* God Images Component */}
                                <Box
                                    ref={dropRef}
                                    sx={{
                                        width: count === 1 ? GodsDisplayWidth : count === 2 ? GodsDisplayWidth : GodsDisplayWidth * 0.3,
                                        height:GodsDisplayHeight-GodsDisplayHeight*0.2,
                                        borderRadius: "5px",
                                        backgroundImage: `url(${FinallySelectedImage[index]?.src})`,
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        position: "relative",
                                        cursor:'pointer',
                                        border: isOver 
                                            ? "2px dashed #9400d3" 
                                            : anyone === index 
                                                ? "1px solid #9400d3" 
                                                : 'none',
                                    }}
                                    onClick={() => setAnyone(index)} 
                                />

                                {/* Accessories Images Component */}
                                {index < count - 1 && (
                                    <Box  
                                        sx={{
                                            width:accDisplayWidth / 5,
                                            height:accDisplayHeight,
                                            borderRadius: "5px",
                                            backgroundImage: `url(${Accessories[accessoryNumber]?.src})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "bottom",
                                            backgroundRepeat: "no-repeat",
                                            alignSelf: "center",
                                            transform: "scale(0.7)",
                                            top: 40,
                                            position: "relative",
                                        }}
                                    />
                                )}

                            </React.Fragment>
                        );
                    })}
                </Box>
            </Box>
        </Grid>
    </Grid>
    );
};

export default FrameComponent;