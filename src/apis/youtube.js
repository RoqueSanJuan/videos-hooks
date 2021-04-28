import axios from 'axios'
const KEY = 'AIzaSyBeW6Yh3mITL3IOzkyVzmZ30_1hglCCiC0'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})
