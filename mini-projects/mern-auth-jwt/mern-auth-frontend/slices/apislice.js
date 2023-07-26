import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



  const baseQuery = fetchBaseQuery({
    baseUrl: '',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
      headers.set('Access-Control-Allow-Credentials', 'true');
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
 
  });
  
  


export const apislice = createApi({
  baseQuery: baseQuery, // Pass the base query function here
  tagTypes: ['users'],
  endpoints: (builder) => ({
    
    
  }),
});



