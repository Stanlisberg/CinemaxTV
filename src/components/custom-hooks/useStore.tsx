import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useState } from "react";

const useStore = () => {
  const { info } = useSelector((state: RootState) => state.movieDetail);
  const [data, setData] = useState<string>("");

  setData(info.title);
  return { data };
};

export default useStore;
