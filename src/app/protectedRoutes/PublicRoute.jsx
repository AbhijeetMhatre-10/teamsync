import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../../shared/ui/pages/Loading';

const PublicRoute = () => {
  const { employee, isLoading } = useSelector((store) => store.auth);

  if(isLoading){
    return <Loading/>
  }

  if (employee) {
    return <Navigate to={"/"}/>
  }

  return <Outlet/>
}

export default PublicRoute