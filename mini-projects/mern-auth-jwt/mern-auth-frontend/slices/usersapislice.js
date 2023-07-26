import { apislice } from "./apislice";



export const userapislice = apislice.injectEndpoints({

 endpoints : (builder) => ({
    login: builder.mutation({
        query: (data) => ({
          url: 'api/users/login',
          method: 'POST',
          body: data,
          credentials: 'include',
             mode: "cors"
     
        }),
      }),

   Getprofiles : builder.query({
    query : () => ({
        url :'api/users/profile',
        method : 'GET',
        mode: "cors"
    })

   }), 

   Logout : builder.mutation({
    query :  () => ({
     url : 'api/users/logout',
     method : 'POST',
     credentials: 'include',
     mode: "cors"

    })
   }), 


   Register : builder.mutation({
    query : (data) => ({
       url :'api/users/register',
       method : 'POST',
       body : data ,
       credentials: 'include',
       mode: "cors"

    })
   }) ,

   Update :  builder.mutation({
    query : (data) => ({
       url :'api/users/update',
       body : data ,
       method: 'PATCH',
       mode: "cors"
    })
   }) ,


      
 })

}) 


export const  {
   useLoginMutation  ,
   useGetprofilesQuery ,
   useLogoutMutation ,
   useRegisterMutation ,
   useUpdateMutation ,
  } = userapislice


