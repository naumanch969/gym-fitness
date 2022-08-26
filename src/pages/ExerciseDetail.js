import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { fetchData, exercisesOptions, youtubeOptions } from "../utils/FetchData"
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
    const { id } = useParams()
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState({})
    const [targetMuscleExercises, setTrgetMuscleExercises] = useState({})
    const [equipmentExercises, setEquipmentExercises] = useState({})

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)  // a single object 
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)   // an array of videos
            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)

            setExerciseDetail(exerciseDetailData)
            setExerciseVideos(exerciseVideosData.contents)
            setTrgetMuscleExercises(targetMuscleExercisesData)
            setEquipmentExercises(equipmentExercisesData)
            //a single video object contains - "channelId": "UC2LAX_fppk9euOklolY852A" "channelName": "Red Limits" "description": "Juice WRLD - " "lengthText": "3:59" "publishedTimeText": "4 months ago" "thumbnails": [...]2 items "title": "Juice WRLD - Hello (Unreleased)[Prod. Red Limits]" "videoId": "l9bt6u2jKls" "viewCountText": "830,903 views"
            //a single exercise object contains -"bodyPart": "waist" "equipment": "body weight" "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif" "id": "0001" "name": "3/4 sit-up" "target": "abs"
        }
        fetchExercisesData()
    }, [id])





    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} exerciseVideos={exerciseVideos} id={id} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail
