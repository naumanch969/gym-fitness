import React from 'react'
import { Link } from "react-router-dom"
import { Stack, Button, Typography } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
    return (
        <>
            <Link className="exercise-card" to={`/exercise/${exercise.id}`} onClick={window.scrollTo({ top: "1800px", behavior: "smooth" })}>
                <img src={exercise.gifUrl} height="200px" alt={exercise.name} /> {/* loading="lazy" */}
                <Stack direction="row" >
                    <Button sx={{ ml: "21px", color: "#fff", background: "#ffa9a9", fontSize: "14px", textTransform: "capitalize", borderRadius: "20px" }} >{exercise.bodyPart}</Button>
                    <Button sx={{ ml: "21px", color: "#fff", background: "#ccc757", fontSize: "14px", textTransform: "capitalize", borderRadius: "20px" }} >{exercise.target}</Button>
                </Stack>
                <Typography ml="21px" fontSize="22px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" >{exercise.name}</Typography>
            </Link>
        </>
    )
}

export default ExerciseCard

