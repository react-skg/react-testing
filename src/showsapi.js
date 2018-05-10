import request from './request'

const shows = () => request(`https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=ccd7f7c8bc4f625411a4e4925c0c5931`)

export { shows }