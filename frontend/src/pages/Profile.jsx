
export default function Profile() {
  let student = {};

  try {
    student = JSON.parse(
      localStorage.getItem("student") || "{}"
    );
  } catch {
    student = {};
  }

  return (
    <div>
      <p className="eyebrow">MY ACCOUNT</p>
      <h1>My Profile</h1>

      <div className="info-panel">
        <div className="avatar">
          {(student.name || "S").charAt(0).toUpperCase()}
        </div>

        <h2>{student.name || "Student Name"}</h2>
        <p>{student.email || "Student email"}</p>

        <p className="muted">
          Your student profile will appear here.
        </p>
      </div>
    </div>
  );
}