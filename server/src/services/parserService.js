import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const analyzeResume = async (filePath) => {
  const fileStream = fs.createReadStream(filePath);
  const formData = new FormData();
  formData.append("file", fileStream);

  const res = await axios.post("http://parser:8000/parse", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
  return res.data;
};
