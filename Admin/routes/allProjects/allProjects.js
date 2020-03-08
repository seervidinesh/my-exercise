const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render("allProjects.hbs", {
        title: "Neelkanth Video Vision : All Projects",
        allProjectActive: "active",
        script: 'allProjectScript.js'
    });
});

router.get('/getProjects', (req, res) => {
    db.collection('projects').find({}).toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})


// mongoDb $loockup method

router.get("/getProjectByLoockup", (req, res) => {
    db.collection("projects")
        .aggregate([{
            $lookup: {
                from: "studios",
                localField: "studioId",
                foreignField: "_id",
                as: "stdData"
            }
        }])
        .toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

router.get('/getSingleProjectByIdLookup', (req, res) => {
    db.collection("projects").aggregate([{
            $match: {
                _id: ObjectId(req.query.id)
            }
        },
        {
            $lookup: {
                from: "studios",
                localField: "studioId",
                foreignField: "_id",
                as: "stdData"
            }
        }
    ]).toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})



// router.get('/getAllProjectsByStudioId', (req, res) => {
//     db.collection('projects').aggregate([
//         // {
//         //     $match: {
//         //         studioId: req.query.id
//         //     }
//         // },
//         {
//             $lookup: {
//                 from: "studios",
//                 localField: "studioId",
//                 foreignField: "_id",
//                 as: "stdData"
//             }
//         }
//     ]).toArray((err, result) => {
//         if (err) throw err;
//         res.json(result)
//     })
// })


module.exports = router;