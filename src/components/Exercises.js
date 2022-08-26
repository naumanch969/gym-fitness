import React, { useEffect, useState } from 'react'
import { Pagination, Box, Typography, Stack } from "@mui/material"
import ExerciseCard from "./ExerciseCard"
import { fetchData, exercisesOptions } from "../utils/FetchData"

const Exercises = ({ bodyPart, exercises, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 12;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: "1800px", behavior: "smooth" })
    }


    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []
            if (bodyPart === "all") {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
            }
            else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData()

    }, [bodyPart])




    return (
        <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px" >

            <Typography variant="h3" mb="46px" >Showing Results</Typography>

            <Stack direction="row" sx={{ gap: { lg: "60px", xs: "40px" } }} flexWrap="wrap" justifyContent="center" >
                {currentExercises.map((item, index) => (
                    <ExerciseCard key={index} exercise={item} />
                ))}
            </Stack>

            {/* 
             for pagination
             number of item per page
             indexOfFirstItem
             indexOfLastItem
             currentPage
             count lenth/itemPerPages */}
            <Stack mt="100px" alignItems="center" >
                {
                    exercises.length > 9 && (
                        <Pagination
                            color="standard"
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            shape="rounded"
                            onChange={paginate}
                            defaultPage={1}
                            page={currentPage}
                            size="large"
                        />
                    )
                }
            </Stack>

        </Box>
    )
}

export default Exercises
