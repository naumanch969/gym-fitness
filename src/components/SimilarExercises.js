import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ m: { lg: "60px", xs: "15px" }, p: "20px" }} >
            <Typography mb="33px" variant="h4" >Exercises that target the same muscle group </Typography>
            <Stack direction="row" mb="80px" sx={{ p: "2px", postition: "relative" }} >
                {
                    targetMuscleExercises.length
                        ? <HorizontalScrollbar data={targetMuscleExercises} />
                        : <Loader />
                }

            </Stack>
            <Typography mb="33px" variant="h4" >Exercises that uses the same equipments </Typography>
            <Stack direction="row" sx={{ p: "2px", postition: "relative" }} >
                {
                    equipmentExercises.length
                        ? <HorizontalScrollbar data={equipmentExercises} />
                        : <Loader />
                }

            </Stack>
        </Box>
    )
}

export default SimilarExercises
