import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000', 
});

export const apislice = createApi({
  baseQuery: baseQuery, // Pass the base query function here
  tagTypes: ['users'],
  endpoints: (builder) => ({

    
  }),
});



