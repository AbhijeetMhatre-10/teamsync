import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginEmployee } from "../state/auth/authAction";
import { useDispatch } from "react-redux";

// DEFAULT VALUES
const DEFAULT_VALUES = {
  login: {
    email: "",
    password: "",
    remember: false,
  },

  register: {
    fullName: "",
    email: "",
    password: "",
    terms: false,
  },
};

// VALIDATION RULES
const VALIDATION = {
  login: {
    email: {
      required: "Email address is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Enter a valid email address",
      },
    },

    password: {
      required: "Password is required",
    },
  },

  register: {
    fullName: {
      required: "Full name is required",
      minLength: {
        value: 2,
        message: "Please enter your full name",
      },
    },

    email: {
      required: "Email address is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },

    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },

    terms: {
      required: "You must agree to the Terms of Service and Privacy Policy",
    },
  },
};

// AUTH HOOK
const useAuth = (type) => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  // Check auth type
  const isLogin = type === "login";
  const isRegister = type === "register";

  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: DEFAULT_VALUES[type],
  });

  // Password
  const password = watch("password", "");

  // Password Strength
  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getPasswordStrength(password);

  const getStrengthText = () => {
    if (!password) return "";
    if (strength <= 1) {
      return "Weak password";
    }
    if (strength === 2) {
      return "Fair password";
    }
    if (strength === 3) {
      return "Good password";
    }
    return "Strong password";
  };

  // Submit
  const onSubmit = (data) => {
    if (isLogin) {
      dispatch(loginEmployee(data))
      return;
    }

    if (isRegister) {
      console.log("Registration Data:", data);
      return;
    }
  };

  return {
    Link,
    register,
    handleSubmit,
    errors,

    isLogin,
    isRegister,

    showPassword,
    setShowPassword,

    password,
    strength,
    getStrengthText,

    validation: VALIDATION[type],

    onSubmit,
  };
};

export default useAuth;
