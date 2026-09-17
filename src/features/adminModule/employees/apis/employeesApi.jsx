import { axiosInstance } from "../../../../config/axiosInstance"

export const getAllEmployees = async () => {
  try {
    const response = await axiosInstance("/employee")
    return response.data.data
  } catch (error) {
    console.log("Error in fetching all employees", error)
    return []
  }
}