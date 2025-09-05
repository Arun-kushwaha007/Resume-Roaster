"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  username: string;
  email: string;
}

interface Resume {
  _id: string;
  filename: string;
  atsScore: number;
  createdAt: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/auth/profile", {
          headers: { "x-auth-token": token },
        });
        setUser(res.data.user);
        setResumes(res.data.resumes);
      } catch (err: any) {
        console.error(err.response?.data || err.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      {user && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Profile</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold">My Resumes</h3>
        {resumes.length > 0 ? (
          <ul>
            {resumes.map((resume) => (
              <li key={resume._id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
                <p><strong>Filename:</strong> {resume.filename}</p>
                <p><strong>ATS Score:</strong> {resume.atsScore}</p>
                <p><strong>Uploaded:</strong> {new Date(resume.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not uploaded any resumes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
