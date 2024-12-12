const express = require('express');
const app = express();
const port = 9090;

app.use(express.json());

const doctorData = {
    "surgeon": [
        {
            "name": "Dr. Ava Sinclair",
            "time": "14:15",
        },
        {
            "name": "Dr. Leo Montgomery",
            "time": "10:00",
        },
        {
            "name": "Dr. Mia Carter",
            "time": "04:15",
        },
        {
            "name": "Dr. Ethan Walker",
            "time": "10:09",
        },
        {
            "name": "Dr. Lily Bennett",
            "time": "06:58",
        }
    ],
    "dentist": [
        {
            "name": "Dr. Jack Harper",
            "time": "15:34",
        },
        {
            "name": "Dr. Grace Turner",
            "time": "04:17",
        },
        {
            "name": "Dr. Noah Parker",
            "time": "08:15",
        },
        {
            "name": "Dr. Chloe Matthews",
            "time": "14:19",
        },
        {
            "name": "Dr. Mason Reed",
            "time": "09:52",
        }
    ],
    "neurosurgeon": [
        {
            "name": "Dr. Zoe Phillips",
            "time": "01:25",
        },
        {
            "name": "Dr. Ryan Foster",
            "time": "11:02",
        },
        {
            "name": "Dr. Ella Mitchell",
            "time": "11:25",
        },
        {
            "name": "Dr. Lucas Gray",
            "time": "02:14",
        },
        {
            "name": "Dr. Sophia Collins",
            "time": "01:12",
        }
    ],
}

app.post('/pineValley/doctors', (request, response) => {
    const { doctorType } = request.body;

    console.log(request);
    
    if (!doctorType) {
        return response.status(400).json({
            error: "doctorType is required in request body"
        });
    }

    const doctors = doctorData[doctorType.toLowerCase()] || [];

    response.json({
        doctors: {
            doctor: doctors
        }
    });

    console.log(response);
});

app.listen(port, () => {
    console.log(`Pine Valley Hospital Service running on port ${port}`);
});