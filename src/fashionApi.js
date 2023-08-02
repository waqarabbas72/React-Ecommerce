import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fashionApiHeaders = {
  "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
  "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
};

const baseUrl = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: fashionApiHeaders });

export const fashionApi = createApi({
  reducerPath: "fashionApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: () => createRequest(`/categories/list`),
    }),
    getProductsList: builder.query({
      query: () => createRequest(`/products/list`),
    }),
  }),
});

export const { useGetCategoriesListQuery  , useGetProductsListQuery} = fashionApi;
