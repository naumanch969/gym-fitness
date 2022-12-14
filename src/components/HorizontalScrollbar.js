import { Box, Typography } from "@mui/material"
import BodyPart from "./BodyPart"
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import ExerciseCard from "./ExerciseCard"

// body part mean category
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => (      // data is array of all the categories/bodyParts
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map((item) => (
            <Box key={item.id || item} title={item.id || item} itemID={item.id || item} m="0 40px" >
                {
                    isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        : <ExerciseCard exercise={item} />
                }

            </Box>
        ))}
    </ScrollMenu>
);



export default HorizontalScrollbar
