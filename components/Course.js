import styles from "../styles/Home.module.css";

function Course({ name, teacherName }) {
  return (
    <div className={styles.container}>
      Course name: {name} Teacher name: {teacherName.name}
    </div>
  );
}

export default Course;
