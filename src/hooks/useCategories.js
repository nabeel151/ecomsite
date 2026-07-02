import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export default function useCategories() {
  return useContext(CategoryContext);
}