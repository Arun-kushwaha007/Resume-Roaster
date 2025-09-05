import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const analyzeResume = async (filePath, originalName) => {
  const fileStream = fs.createReadStream(filePath);
  const formData = new FormData();
  formData.append("file", fileStream, { filename: originalName });

  const parserUrl = process.env.PARSER_URL || "http://localhost:8000";
  const res = await axios.post(`${parserUrl}/parse`, formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
  return res.data;
};
