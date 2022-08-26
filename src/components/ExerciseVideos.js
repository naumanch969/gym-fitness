import { Box, Stack, Typography } from "@mui/material"
import Loader from "./Loader"


const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />

    return (
        <Box sx={{ m: { lg: "60px", sm: "15px" }, p: "20px" }} >
            <Typography variant="h4" mb="33px" >Watch <span style={{ color: "#ff2625", textTransform: "capitalize", }} >{name}</span>Exercise Videos </Typography>

            <Stack justifyContent="center" alignItems="flex-start" flexWrap="wrap" sx={{ flexDirection: { lg: "row" }, gap: { lg: "60px", xs: "0px" } }} >
                {
                    exerciseVideos?.slice(0, 6).map((item, index) => (
                        <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                <Typography variant="h5" color="#000" > {item.video.title} </Typography>
                                <Typography variant="h6" color="#000" > {item.video.channelName} </Typography>
                            </Box>
                        </a>
                    ))
                }
            </Stack>

        </Box>
    )
}

export default ExerciseVideos
