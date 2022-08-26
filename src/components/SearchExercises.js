import { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { fetchData, exercisesOptions } from "../utils/FetchData"
import HorizontalScrollbar from './HorizontalScrollbar'



const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
    const [search, setSearch] = useState("")         // search value
    const [bodyParts, setBodyParts] = useState([])   // categories  // back cardio chest lower arms lower legs neck shoulders upper arms upper legs waist

    // get all the categries/bodyPartsList
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData();
    }, []);




    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)   // all the exercises
            const searchedExercises = exercisesData.filter(
                (exercise) =>    // an exercise object is like this -- bodyPart: "waist" equipment: "body weight" gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif" id: "0001" name: "3/4 sit-up" target: "abs"
                    exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
            )
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
            setSearch("")
            setExercises(searchedExercises)   // all the searched  exercises  
        }
    }




    return (
        <Stack alignItems="center" justifyContent="center" p="20px" mt="20px" bgcolor="#f4f4f4" >

            <Typography fontWeight="700" sx={{ fontSize: { lg: "40px", xs: "30px" }, textAlign: "center" }} mb="50px"  > Awesome Exercises You <br /> Should Know </Typography>



            {/* search bar */}
            <Box position="relative" mb="72px" >
                <TextField height="76px" value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeholder="Search Exercises" type="text" sx={{ input: { fontWeight: "700", border: "none", borderRadius: "4px" }, width: { lg: "1000px", sm: "350px" }, backgroundColor: "#fff", borderRadius: "40px" }} />
                <Button
                    className="search-btn"
                    sx={{ bgcolor: "#ff2625", color: "#fff", textTransform: "none", width: { lg: "175px", sm: "80px" }, height: "56px", fontSize: { lg: "20px", sm: "14px" }, position: "absolute", right: "0px" }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>



            {/* horizontal scroll bar of categories  */}
            <Box position="relative" width="100%" p="20px" >
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
            </Box>


        </Stack>
    )
}

export default SearchExercises
