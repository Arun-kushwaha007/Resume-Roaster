import axios from "axios";

export const analyzeResume = async (filePath) => {
  const res = await axios.post("http://localhost:8000/parse", { file_path: filePath });
  return res.data;
};
