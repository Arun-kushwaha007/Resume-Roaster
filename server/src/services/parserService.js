import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const analyzeResume = async (filePath, originalName) => {
  const fileStream = fs.createReadStream(filePath);
  const formData = new FormData();
  formData.append("file", fileStream, { filename: originalName });

  const res = await axios.post("http://localhost:8000/parse", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
  return res.data;
};
