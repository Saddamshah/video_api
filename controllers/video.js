const mongoose = require('mongoose')
const Video = require('../models/video');


exports.get_videos = (req, res) => {

    // if db is empty
    insert_dummy_data();


    let query = req.query;
    let filter = {};
    let pagination = {};


    if (Object.keys(query).length !== 0) {
        (query.user_id) ? filter.user_id = query.user_id : '';
        (query.team_id) ? filter.team_id = query.team_id : '';
        (query.max_duration) ? filter.duration = query.max_duration : '';

        (query._page) ? pagination.page = query._page : '';
        (query._pageSize) ? pagination.limit = query._pageSize : '';
    }


    Video.paginate(filter, pagination, (err, videos) => {
        if (err) {
            res.json({ err: err })
        }
        res.status(200).json({ status: 200, result: videos })
    })
}


// create dummy Data 
const get_dummy_data = (max_data_size, max_duration, max_user, max_team_id) => {
    let video_list = []
    for (let i = 0; i < max_data_size; i++) {

        let random_user_id = Math.floor(Math.random() * (max_user - 1) + 1);
        let random_duration = Math.floor(Math.random() * (max_duration - 1) + 1);
        let random_team_id = Math.floor(Math.random() * (max_team_id - 50) + 50);

        let single_video = {
            count: i + 1,
            user_id: random_user_id,
            video_url: "https://www.w3schools.com/tags/movie.mp4",
            duration: random_duration,
            team_id: random_team_id
        }
        video_list.push(single_video)
    }

    return video_list;
}


// insert dummy data
const insert_dummy_data = () => {
    Video.countDocuments((err, count) => {
        if (count === 0) {
            Video.insertMany(get_dummy_data(200, 55, 16, 90))
                .then(console.log("Data inserted"))
                .catch((error) => {
                    console.log(error)
            });
        }
    });
}
