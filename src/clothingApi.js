import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const clothingApiHeaders = {
//   "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
//   "X-RapidAPI-Host": "kohls.p.rapidapi.com",
// };

const baseUrl = "https://fakestoreapi.com";

const createRequest = (url, params = {}) => ({
  url,
  params: { ...params }, // Spread the params object to include any additional parameters
});

export const clothingApi = createApi({
  reducerPath: "clothingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => createRequest(`/products`),
    }),

    getProductDetail: builder.query({
      query: (id) => createRequest(`/products/` , {id}),
    }),
    getCategoryList: builder.query({
      query: () => createRequest(`products/categories`),
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductDetailQuery,
  useGetCategoryListQuery,
} = clothingApi;
