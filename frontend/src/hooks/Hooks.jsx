import { useEffect, useState } from "react";
//  fetch a company by id
const fetchCompanyById = async ({ id }) => {
  try {
    const response = await fetch(process.env.VITE_API_URL + `/companies/${id}`);
    console.log("cmp");
    const result = await response.json();
    if (result.success) {
      const company = result.data;
      return company;
    }
  } catch (error) {
    return error;
  }
};

export default fetchCompanyById;
