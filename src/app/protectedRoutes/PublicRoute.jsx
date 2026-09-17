import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingPage from '../../shared/ui/pages/LoadingPage';

const PublicRoute = () => {
  const { employee, isLoading } = useSelector((store) => store.auth);

  if(isLoading){
    return <LoadingPage/>
  }

  if (employee) {
    return <Navigate to={"/"}/>
  }

  return <Outlet/>
}

export default PublicRoute