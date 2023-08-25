import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fakestoreapi.com";

 
const createRequest = (url ) => ({
  url,
  // params: { ...params }, // Spread the params object to include any additional parameters
});

export const clothingApi = createApi({
  reducerPath: "clothingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => createRequest(`/products`),
    }),

    getProductDetail: builder.query({
      query: (id) => createRequest(`/products/${id}`),
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
