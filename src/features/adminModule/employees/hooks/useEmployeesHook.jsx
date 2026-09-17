import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../apis/employeesApi";

export const useEmployees = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  return {
    data,
    isLoading,
  };
};
