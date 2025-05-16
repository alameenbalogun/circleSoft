"use client";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/src/components/Spinner";

const EmployeeDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/users/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  return (
    <div>
      <h1>EmployeeDetailsPage</h1>
      {isLoading ? (
        <div className="w-full h-full justify-center items-center">
          <Spinner />
        </div>
      ) : error ? (
        <p className="bg-red-300 text-red-500">{error}</p>
      ) : (
        <div>{data.firstName}</div>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
