// import axios from 'axios';
// import { ADD_DATA_TO_PROJECT, ADD_POJECTS, UPDATE_POJECT, UPDATE_SINGLE_PROJECT } from './actionTypes';
// const api=process.env.NEXT_PUBLIC_API_URL
// console.log(api)


// export const AddProject = (data,showToast) => async (dispatch) => {
//     try {
//         let res = axios.post(`${api}/api/project`, { ...data })
//         let temp = await res
//         showToast('project Added successfully')
//         dispatch(FetchAllProject)
//     } catch (error) {
//         showToast(error.message,"error")
//     }
// }
// export const FetchAllProject= async (dispatch) => {
//     try {
//         let res = axios.get(`${api}/api/project`)
//         let temp = await res
//         dispatch({type:ADD_POJECTS,payload:temp.data.data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const fetchSingleProject=(id)=> async (dispatch) => {
    
//     try {
//         let res = axios.post(`${api}/api/singleProject`,{"projectId":id})
//         let temp = await res
//         dispatch({type:UPDATE_SINGLE_PROJECT,payload:temp.data.data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const AddPodcastFunc = (ProjectId,data,showToast) => async (dispatch) => {
//     try {
//         let res = axios.post(`${api}/api/podcast`, {projectId:ProjectId,title:data.name,description:data.description})
//         let temp = await res
//         showToast('Podcast Added successfully')
//         dispatch(fetchSingleProject(ProjectId))
//     } catch (error) {
//         showToast(error.message,"error")
//     }
// }

// export const DeletePodcast = (projectId,podcastId) => async (dispatch) => {
//     console.log(projectId,podcastId)
//     try {
//         let res = axios.put(`${api}/api/podcast`, {projectId,podcastId})
//         let temp = await res
//         dispatch(fetchSingleProject(projectId))
//     } catch (error) {
//         showToast(error.message,"error")
//     }
// }

// export const updatePodcast=(id,Data,showToast)=> async (dispatch) => {
//     console.log()
//     try {
//         let res = axios.patch(`${api}/api/podcast`,{podcastId:id,Data})
//         let temp = await res
//         showToast('podcast updated successfully')
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const uplodefile=(file,showToast)=>async(dispatch) => {
//     const formData = new FormData();
//     formData.append('image', file);
//     console.log(formData)
//     try {
//         let res= await axios.post(`${api}/api/upload`,formData)
//         let data= await res
//         console.log(data.data.data)
//         dispatch({type: ADD_DATA_TO_PROJECT,payload:{image:data.data.data.imageUrl}})
//         showToast('Uplode updated successfully')
//     } catch (error) {
//         showToast(error.message);}
// }


    import axios from 'axios';
    import { ADD_DATA_TO_PROJECT, ADD_POJECTS, UPDATE_POJECT, UPDATE_SINGLE_PROJECT } from './actionTypes';
    
    
    export const AddProject = (data,showToast) => async (dispatch) => {
        try {
            let res = axios.post('/api/project', { ...data })
            let temp = await res
            showToast('project Added successfully')
            dispatch(FetchAllProject)
        } catch (error) {
            showToast(error.message,"error")
        }
    }
    export const FetchAllProject= async (dispatch) => {
        try {
            let res = axios.get('/api/project')
            let temp = await res
            dispatch({type:ADD_POJECTS,payload:temp.data.data})
        } catch (error) {
            console.log(error.message)
        }
    }
    
    export const fetchSingleProject=(id)=> async (dispatch) => {
    
        try {
            let res = axios.post('/api/singleProject',{"projectId":id})
            let temp = await res
            dispatch({type:UPDATE_SINGLE_PROJECT,payload:temp.data.data})
        } catch (error) {
            console.log(error.message)
        }
    }
    
    export const AddPodcastFunc = (ProjectId,data,showToast) => async (dispatch) => {
        try {
            let res = axios.post('/api/podcast', {projectId:ProjectId,title:data.name,description:data.description})
            let temp = await res
            showToast('Podcast Added successfully')
            dispatch(fetchSingleProject(ProjectId))
        } catch (error) {
            showToast(error.message,"error")
        }
    }
    
    export const DeletePodcast = (projectId,podcastId) => async (dispatch) => {
        console.log(projectId,podcastId)
        try {
            let res = axios.put('/api/podcast', {projectId,podcastId})
            let temp = await res
            dispatch(fetchSingleProject(projectId))
        } catch (error) {
            showToast(error.message,"error")
        }
    }
    
    export const updatePodcast=(id,Data,showToast)=> async (dispatch) => {
        console.log()
        try {
            let res = axios.patch('/api/podcast',{podcastId:id,Data})
            let temp = await res
            showToast('podcast updated successfully')
        } catch (error) {
            console.log(error.message)
        }
    }
    
    export const uplodefile=(file,id,showToast)=>async(dispatch) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', "ztww0s1s");
        try {
            showToast('image Uploding please wait...')
            let res= await axios.post('https://api.cloudinary.com/v1_1/dpzfv9woh/upload',formData)
            console.log(res.data.secure_url)
            showToast('image Uplode successfully')
            dispatch({type:ADD_DATA_TO_PROJECT,payload:{'image':res.data.secure_url}})
    
            let upload = axios.post(`${api}/upload`,{"id":id,"image":res.data.secure_url})
        } catch (error) {
            showToast(error.message);
        }
        }