import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { FormControl, FormHelperText, Grid, IconButton, TextField, Typography } from "@mui/material";
import { FrameImages, FinishImages, GodImages, Accessories } from "../image";
import { useContext } from "../Hooks/UseContext";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useDrag } from "react-dnd";

const DraggableGridItem = ({ item, index, AnotherValues, onClick, ITEM_TYPE }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { id: index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <Grid
            ref={drag}
            key={index}
            height="100%"
            width="10%"
            bgcolor="white"
            borderRadius={3}
            sx={{
                position: "relative",
                backgroundImage: `url(${item?.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: isDragging ? 0.5 : 1,
                cursor: "grab",
                border: AnotherValues === index ? "6px solid #9400d3" : "none",
            }}
            onClick={() => onClick(index)}
        >
            {AnotherValues === index && (
                <IconButton
                    sx={{
                        position: "absolute",
                        top: -20,
                        right: -20,
                        zIndex: 10,
                        p: 0.5,
                        pointerEvents: "none",
                        color: "white",
                        bgcolor: "#9400d3",
                    }}
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    <DoneAllIcon />
                </IconButton>
            )}
        </Grid>
    );
};

DraggableGridItem.propTypes = {
    item: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    AnotherValues: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
    onClick: PropTypes.func.isRequired,
    ITEM_TYPE: PropTypes.string.isRequired,
};

const SelectorComponent = () => {
    const ITEM_TYPE = "image";
    const [errors, setErrors] = useState({ width: "", height: "" });

    const {
        OptionsData,
        pageNumber,
        frameNumber,
        finishNumber,
        setFrameNumber,
        accessoryNumber,
        setFinishNumber,
        setAccessoryNumber,
        width,
        setWidth,
        height,
        setHeight,
        FinallySelectedImage,
    } = useContext();

    let value = [];
    let AnotherValues = null;

    if (pageNumber === 1) {
        value = FrameImages;
        AnotherValues = frameNumber;
    } else if (pageNumber === 2) {
        value = FinishImages;
        AnotherValues = finishNumber;
    } else if (pageNumber === 3) {
        value = GodImages;
        AnotherValues = FinallySelectedImage.map((item, index) => { return index });
    } else if (pageNumber === 4) {
        value = Accessories;
        AnotherValues = accessoryNumber;
    }

    const handleChangeImage = (id) => {
        if (pageNumber === 1) {
            setFrameNumber(id);
        } else if (pageNumber === 2) {
            setFinishNumber(id);
        } else if (pageNumber === 4) {
            setAccessoryNumber(id);
        }
    };

    const handleWidthChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0 && value <= 25) {
            setWidth(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                width: "",
            }));
        } else {
            setWidth(25);
            setErrors((prevErrors) => ({
                ...prevErrors,
                width: "Width must be a number and less than 26",
            }));
        }
    };

    const handleHeightChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0 && value <= 25) {
            setHeight(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                height: "",
            }));
        } else {
            setHeight(25);
            setErrors((prevErrors) => ({
                ...prevErrors,
                height: "Height must be a number and less than 26",
            }));
        }
    };

    return (
        <Grid
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <Grid
                px={3}
                height="20%"
                width="100%"
                bgcolor="white"
                display="flex"
                alignItems="center"
            >
                <Typography fontWeight="600" fontSize="18px">
                    {OptionsData[pageNumber]?.content}
                </Typography>
            </Grid>
            <Grid
                container
                gap={3}
                height="100%"
                width="100%"
                p={3}
                display="flex"
                justifyContent="center"
            >
                {pageNumber === 0 ? (
                    <Grid
                        container
                        spacing={2}
                        display="flex"
                        justifyContent="center"
                        flexDirection="row"
                        px={20}
                    >
                        <Grid item xs={6}>
                            <Typography>Mention the Width ( Inches ):</Typography>
                            <FormControl fullWidth error={Boolean(errors.width)}>
                                <TextField
                                    value={width}
                                    onChange={handleWidthChange}
                                    type="number"
                                    sx={{
                                        pt: 1,
                                        height: "50px",
                                        input: {
                                            padding: "8px",
                                        },
                                    }}
                                />
                                {errors.width && <FormHelperText>{errors.width}</FormHelperText>}
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>Mention the Height ( Inches ):</Typography>
                            <FormControl fullWidth error={Boolean(errors.height)}>
                                <TextField
                                    value={height}
                                    onChange={handleHeightChange}
                                    type="number"
                                    sx={{
                                        pt: 1,
                                        height: "50px",
                                        input: {
                                            padding: "8px",
                                        },
                                    }}
                                />
                                {errors.height && <FormHelperText>{errors.height}</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>
                ) : (
                    value.map((item, index) => (
                        <DraggableGridItem
                            key={index}
                            item={item}
                            index={index}
                            AnotherValues={AnotherValues}
                            onClick={handleChangeImage}
                            ITEM_TYPE={ITEM_TYPE}
                        />
                    ))
                )}
            </Grid>
        </Grid>
    );
};

// Add PropTypes validation for SelectorComponent
SelectorComponent.propTypes = {
    OptionsData: PropTypes.array.isRequired,
    pageNumber: PropTypes.number.isRequired,
    frameNumber: PropTypes.number.isRequired,
    finishNumber: PropTypes.number.isRequired,
    setFrameNumber: PropTypes.func.isRequired,
    accessoryNumber: PropTypes.number.isRequired,
    setFinishNumber: PropTypes.func.isRequired,
    setAccessoryNumber: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    setWidth: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    setHeight: PropTypes.func.isRequired,
    FinallySelectedImage: PropTypes.array.isRequired,
};

export default SelectorComponent;


