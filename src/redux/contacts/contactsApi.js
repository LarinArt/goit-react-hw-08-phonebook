import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;

// import axios from "axios";

// import { createAsyncThunk } from "@reduxjs/toolkit";

// ///Get contacts

// const fetchContacts = createAsyncThunk("contacts/get", async () => {
//   try {
//     const { data } = await axios.get("/contacts");
//     return data;
//   } catch (error) {
//     //   type error
//   }
// });

// ///Get contacts

// const createContact = createAsyncThunk("contacts/post", async (credentials) => {
//   try {
//     const { data } = await axios.post("/contacts", credentials);
//     return data;
//   } catch (error) {
//     //   type error
//   }
// });

// export const contactsApi = {
//   fetchContacts,
//   createContact,
// };
