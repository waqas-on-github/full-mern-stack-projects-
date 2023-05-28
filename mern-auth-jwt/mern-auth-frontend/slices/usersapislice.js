import { apislice } from "./apislice";



export const userapislice = apislice.injectEndpoints({

 endpoints : (builder) => ({
    login: builder.mutation({
        query: (data) => ({
          url: 'users/login',
          method: 'POST',
          body: data,
          credentials: 'include',
        }),
      }),

   Getprofiles : builder.query({
    query : () => ({
        url :'users/profile',
        method : 'GET'
    })

   }), 

   Logout : builder.mutation({
    query :  () => ({
     url : 'users/logout',
     method : 'POST',
     credentials: 'include',

    })
   }), 


   Register : builder.mutation({
    query : (data) => ({
       url :'users/register',
       method : 'POST',
       body : data ,
       credentials: 'include'

    })
   }) 

      
 })

})


export const  { useLoginMutation  , useGetprofilesQuery  , useLogoutMutation , useRegisterMutation } = userapislice


