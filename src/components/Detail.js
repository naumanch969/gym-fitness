import { Typography, Stack, Button } from "@mui/material"
import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"


const Detail = ({ exerciseDetail }) => {
    const { target, equipment, bodyPart, gifUrl, name } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack gap="60px" justifyContent="space-evenly" alignItems="center" sx={{ flexDirection: { lg: "row" }, p: "20px", }} >


            <img src={gifUrl} alt={name} className="detail-image" /> {/* loading="lazy" */}
            <Stack justifyContent="center" height="400px" width="500px" sx={{ gap: { lg: "25px", xs: "20px" } }} >
                <Typography variant="h4" textTransform="capitalize" >{name}</Typography>
                <Typography variant="h6" >Exercises keep you strong. {name} {' '} is one of the best exercise to target your {target}. It will help you improve your mood and energy. </Typography>



                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="30px" alignItems="center" >
                        <Button sx={{ background: "#fff2db", borderRadius: "50%", width: "65px", height: "65px" }} >
                            <img src={item.icon} alt={bodyPart} style={{ width: "42px", height: "42px" }} />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize" >{item.name}</Typography>
                    </Stack>
                ))}


            </Stack>
        </Stack>
    )
}

export default Detail
