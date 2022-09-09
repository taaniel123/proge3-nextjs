import useSWR from "swr";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Course from "../components/Course";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [name, setName] = useState("");
  const [teacherName, setTeacherName] = useState("");

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/courses", fetcher, {
    refreshInterval: 1000,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { name, teacherName };
      await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast.success("Course added!");
    } catch (error) {
      console.error(error);
    }
  };

  const resetInputFields = () => {
    setTimeout(() => {
      setName("");
      setTeacherName("");
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Haapsalu Courses</title>
        <meta name="description" content="Courses test app" />
      </Head>
      <div className={styles.container}>
        <h1>Add a course</h1>
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            className="form-field"
            placeholder="Name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            className="form-field"
            placeholder="Teacher"
            onChange={(e) => setTeacherName(e.target.value)}
            value={teacherName}
          />
          <input
            type="submit"
            value="Submit"
            className="submit-btn"
            onClick={resetInputFields}
          />
          <Toaster />
        </form>
        <h1>Courses:</h1>
        {(!data || data.length == 0) && "You have no courses."}
        {error && `Error: ${error}`}
        {data &&
          data.map(({ name, teacherName }) => (
            <Course name={name} teacherName={teacherName} />
          ))}
      </div>
    </>
  );
}
