import "../styles/Profile.css";

export default function StudentProfile() {
  return (
    <>
      <main className="profile-page">
        <div className="profile-container">
          {/* Left: basic profile */}
          <section className="profile-card">
            <div className="profile-header">
              <div className="avatar">JS</div>
              <div>
                <h1 className="profile-name">John Smith</h1>
                <p className="profile-tagline">
                  Undergraduate · Computer Science
                </p>
              </div>
            </div>

            <div className="profile-meta">
              <div className="meta-row">
                <span className="meta-label">Student ID</span>
                <span className="meta-value">S2025-1042</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Year</span>
                <span className="meta-value">3rd Year</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">GPA</span>
                <span className="meta-value">3.78</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Advisor</span>
                <span className="meta-value">Dr. Elena Park</span>
              </div>
            </div>

            <div className="contact-section">
              <h2 className="section-title">Contact</h2>
              <p className="contact-item">
                Email:{" "}
                <a
                  className="contact-link"
                  href="#"
                >
                  johnsmith@university.edu
                </a>
              </p>
              <p className="contact-item">
                Phone: <span>+1 (555) 123-4567</span>
              </p>
              <p className="contact-item">
                Campus: <span>North Campus · Hall B, Room 314</span>
              </p>
            </div>
          </section>

          <section>
            <section className="info-card">
              <div className="info-header">
                <h2 className="info-title">Enrolled Courses</h2>
                <p className="info-subtitle">Spring 2025 · 4 Courses</p>
              </div>

              <ul className="courses-list">
                {/* <li className="course-item">
                  <div className="course-main">
                    <span className="course-code">CS 320 · Algorithms</span>
                    <span className="course-name">Design and Analysis of Algorithms</span>
                    <span className="course-meta">Instructor: Prof. Kim · 4 credits</span>
                  </div>
                  <div className="course-meta">Grade to date: A-</div>
                  <span className="course-status in-progress">In Progress</span>
                </li>

                <li className="course-item">
                  <div className="course-main">
                    <span className="course-code">CS 340 · Systems</span>
                    <span className="course-name">Operating Systems</span>
                    <span className="course-meta">Instructor: Dr. Chen · 4 credits</span>
                  </div>
                  <div className="course-meta">Grade to date: B+</div>
                  <span className="course-status in-progress">In Progress</span>
                </li>

                <li className="course-item">
                  <div className="course-main">
                    <span className="course-code">CS 355 · Web</span>
                    <span className="course-name">Full Stack Web Development</span>
                    <span className="course-meta">Instructor: J. Patel · 3 credits</span>
                  </div>
                  <div className="course-meta">Grade to date: A</div>
                  <span className="course-status">On Track</span>
                </li>

                <li className="course-item">
                  <div className="course-main">
                    <span className="course-code">MATH 230</span>
                    <span className="course-name">Linear Algebra</span>
                    <span className="course-meta">Instructor: Dr. Rivera · 3 credits</span>
                  </div>
                  <div className="course-meta">Grade to date: A-</div>
                  <span className="course-status">On Track</span>
                </li>*/}
              </ul>
            </section>

            <section className="info-card">
              <div className="info-header">
                <h2 className="info-title">Academic Overview</h2>
              </div>

              <div className="progress-row">
                <span className="progress-label">Degree progress · 78%</span>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-fill" />
                </div>
              </div>

              <div className="two-column">
                <div className="stat">
                  <div className="stat-label">Credits Completed</div>
                  <div className="stat-value">94 / 120</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Expected Graduation</div>
                  <div className="stat-value">May 2026</div>
                </div>
              </div>

              <div className="badge-row">
                <span className="badge">Dean&apos;s List (4 Semesters)</span>
                <span className="badge">AI &amp; ML Track</span>
                <span className="badge">Programming Club</span>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
