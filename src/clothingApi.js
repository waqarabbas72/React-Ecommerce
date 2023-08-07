import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const clothingApiHeaders = {
  "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
  "X-RapidAPI-Host": "kohls.p.rapidapi.com",
};

const baseUrl = "https://kohls.p.rapidapi.com";


const createRequest = (url, params = {}) => ({
  url,
  headers: clothingApiHeaders,
  params: { ...params }, // Spread the params object to include any additional parameters
});

export const clothingApi = createApi({
  reducerPath: "clothingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClothesList: builder.query({
      query: () => createRequest(`/products/list`),
    }),

    getClothesDetail: builder.query({
      query: (id) => createRequest(`/products/detail`, { webID: id }),
    }),
  }),
});

export const { useGetClothesListQuery, useGetClothesDetailQuery } = clothingApi;
