# Craffix LMS

A lightweight, zero-dependency Learning Management System built with vanilla web standards (HTML, CSS, and JavaScript) and a basic Node.js static server. It skips heavy database configurations and build steps—using `localStorage` for persistence—so you can clone and run it locally in seconds.

---

## Features

### Admins
* **Dashboard:** Monitor active enrollments, course metrics, and overall platform activity.
* **User Management:** Add and manage Mentor and Student accounts.
* **Approval Queue:** Review new course submissions and approve student certificate requests.
* **Announcements:** Broadcast platform-wide alerts to all users.

### Mentors
* **Course Studio:** Build, edit, and organize course modules and learning materials.
* **Grading:** Review student assignment submissions, leave feedback, and update statuses.
* **Analytics:** Track student attendance, completion rates, and course milestones.
* **Live Sessions:** Schedule and host webinars or workshops.

### Students
* **Course Catalog:** Browse programs, enroll in one click, and work through lesson modules.
* **Progress Tracking:** Step through lessons and submit assignments.
* **Opportunities:** View upcoming webinars and browse internship listings.
* **Certificates:** Request and download personalized PDF certificates upon course completion.

---

## Quick Start

1. **Open the project** in your editor (e.g., VS Code).
2. **Start the server** from the project root:
   ```bash
   npm start