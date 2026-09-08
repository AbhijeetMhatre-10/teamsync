import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!search.trim()) return;

    let timer = setTimeout(() => {
      // api call
    }, 700);

    return () => clearTimeout(timer);
  }, [search]);

  return {
    search,
    setSearch,
    isMenuOpen,
    setIsMenuOpen,
    dispatch
  };
};
