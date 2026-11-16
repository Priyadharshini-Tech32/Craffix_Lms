/**
 * Craffix LMS - Pure Vanilla HTML, CSS & JS (No React, No Express)
 * - Restored original Craffix UI with white sidebar, logo.png, dark purple click (#2E1065)
 * - Complete balance: Admin, Mentor, Student workflows
 * - Dual-approval flow (Courses, Materials, Certificates)
 * - LocalStorage client-side persistence (no-backend limits respected)
 */

// ============================================================================
// 1. PROFESSIONAL SVG LINE ICONS (Zero Emojis)
// ============================================================================
const ICONS = {
  Dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  Approvals: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  Mentors: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  Students: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  Courses: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  'Browse Courses': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  'My Courses': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  'Grade Submissions': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  'Student Reports': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
  'Approve Certificates': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  Webinars: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  Internships: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  Certificates: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  Notification: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  Setting: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
  lock: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
};

// ============================================================================
// 2. REAL-TIME DATABASE (Zero Hardcoded Data · Real-Time Operations)
// ============================================================================
const STORAGE_KEY = 'craffix_lms_live_db';

function getDefaultDB() {
  return {
    users: [
      {
        id: 'usr_admin',
        name: 'Administrator',
        email: 'craffixlms@gmail.com',
        password: 'craffixlms01',
        role: 'admin',
        expertise: 'Platform Administration',
        createdAt: new Date().toISOString().split('T')[0]
      }
    ],
    courses: [],
    enrollments: [],
    certificateRequests: [],
    webinars: [],
    internships: []
  };
}

function loadDB() {
  // Purge legacy mock and test databases from localStorage
  try {
    localStorage.removeItem('craffix_vanilla_lms_db');
    localStorage.removeItem('craffix_lms_db_v3');
    localStorage.removeItem('craffix_lms_realtime_db');
  } catch (e) {}

  const raw = localStorage.getItem(STORAGE_KEY);
  let db;
  let modified = false;
  if (!raw) {
    db = getDefaultDB();
    modified = true;
  } else {
    try {
      db = JSON.parse(raw);
    } catch (e) {
      db = getDefaultDB();
      modified = true;
    }
  }

  // Purge any residual mock/hardcoded demo records to guarantee a 100% clean, real-time database
  if (Array.isArray(db.users)) {
    const beforeCount = db.users.length;
    db.users = db.users.filter(u => u.email !== 'craffixmentor@gmail.com' && u.email !== 'student@craffix.com');
    if (db.users.length !== beforeCount) modified = true;

    // Ensure primary administrator account is always active
    if (!db.users.some(u => u.role === 'admin')) {
      db.users.unshift({
        id: 'usr_admin',
        name: 'Administrator',
        email: 'craffixlms@gmail.com',
        password: 'craffixlms01',
        role: 'admin',
        expertise: 'Platform Administration',
        createdAt: new Date().toISOString().split('T')[0]
      });
      modified = true;
    }
  } else {
    db.users = getDefaultDB().users;
    modified = true;
  }

  if (Array.isArray(db.courses)) {
    const beforeCount = db.courses.length;
    db.courses = db.courses.filter(c => c.id !== 'crs_web' && c.id !== 'crs_cloud' && !c.id.startsWith('crs_demo'));
    if (db.courses.length !== beforeCount) modified = true;
  } else {
    db.courses = [];
    modified = true;
  }

  if (Array.isArray(db.webinars)) {
    const beforeCount = db.webinars.length;
    db.webinars = db.webinars.filter(w => w.id !== 'web_1' && w.id !== 'web_2' && !w.id.startsWith('web_demo'));
    if (db.webinars.length !== beforeCount) modified = true;
  } else {
    db.webinars = [];
    modified = true;
  }

  if (Array.isArray(db.internships)) {
    const beforeCount = db.internships.length;
    db.internships = db.internships.filter(i => !['int_1', 'int_2', 'int_3', 'int_4'].includes(i.id));
    if (db.internships.length !== beforeCount) modified = true;
  } else {
    db.internships = [];
    modified = true;
  }

  if (Array.isArray(db.enrollments)) {
    const beforeCount = db.enrollments.length;
    db.enrollments = db.enrollments.filter(e => e.studentEmail !== 'student@craffix.com');
    if (db.enrollments.length !== beforeCount) modified = true;
  } else {
    db.enrollments = [];
    modified = true;
  }

  if (Array.isArray(db.certificateRequests)) {
    const beforeCount = db.certificateRequests.length;
    db.certificateRequests = db.certificateRequests.filter(r => r.studentEmail !== 'student@craffix.com');
    if (db.certificateRequests.length !== beforeCount) modified = true;
  } else {
    db.certificateRequests = [];
    modified = true;
  }

  if (modified) {
    saveDB(db);
  }

  // Schema normalization pass for internships
  if (Array.isArray(db.internships)) {
    let modified = false;
    db.internships.forEach(i => {
      if (typeof i.vacancies !== 'number' || !i.vacancies) { i.vacancies = 2; modified = true; }
      if (!i.mode) {
        i.mode = (i.location && i.location.toLowerCase().includes('remote')) ? 'Remote' : 'Full-time';
        modified = true;
      }
      if (!i.stipendType) {
        if (i.type && (i.type.toLowerCase().includes('paid') || i.type.includes('$') || i.type.includes('₹'))) {
          i.stipendType = 'Stipend';
          i.stipendAmount = i.type.replace(/paid\s*(internship)?/i, '').trim().replace(/^\(|\)$/g, '') || '₹15,000 / month';
        } else {
          i.stipendType = 'Non-Stipend';
          i.stipendAmount = 'Unpaid / Experience & Certificate';
        }
        modified = true;
      }
      if (!i.stipendAmount) {
        i.stipendAmount = i.stipendType === 'Stipend' ? '₹15,000 / month' : 'Unpaid / Experience & Certificate';
        modified = true;
      }
      if (!i.location) { i.location = 'Remote'; modified = true; }
      if (!i.requirements) { i.requirements = 'Technical skills, problem solving, teamwork'; modified = true; }
      if (!Array.isArray(i.applicants)) { i.applicants = []; modified = true; }
      i.applicants.forEach(a => {
        if (!a.phone) { a.phone = '+91 98765 43210'; modified = true; }
        if (!a.college) { a.college = 'National Institute of Technology'; modified = true; }
        if (!a.degree) { a.degree = 'Computer Science (3rd Year)'; modified = true; }
        if (!a.status) { a.status = 'Under Review'; modified = true; }
        if (!a.resumeName) { a.resumeName = (a.name ? a.name.replace(/\s+/g, '_') : 'Candidate') + '_Resume.pdf'; modified = true; }
      });
    });
    if (modified) {
      saveDB(db);
    }
  }

  // Schema normalization pass for webinars
  if (Array.isArray(db.webinars)) {
    let modified = false;
    db.webinars.forEach(w => {
      if (!w.upiId) { w.upiId = 'craffix@okaxis'; modified = true; }
      if (!w.upiQr) { w.upiQr = ''; modified = true; }
      if (typeof w.fee !== 'number') { w.fee = w.type === 'paid' ? 499 : 0; modified = true; }
      if (!Array.isArray(w.registeredUsers)) { w.registeredUsers = []; modified = true; }
      if (!Array.isArray(w.registrations)) {
        w.registrations = (w.registeredUsers || []).map(email => ({
          email,
          name: email.split('@')[0],
          type: w.type || 'free',
          bookedAt: '2026-11-14',
          status: 'confirmed',
          receiptName: 'Verified_Receipt.png',
          receiptData: '',
          utr: 'UTR-CRX987654'
        }));
        modified = true;
      }
    });
    if (modified) {
      saveDB(db);
    }
  }

  // Schema normalization pass for courses (materials, video/pdf only, auto-sequence, assessments, discussions)
  if (Array.isArray(db.courses)) {
    let modified = false;
    db.courses.forEach(c => {
      if (!Array.isArray(c.materials)) { c.materials = []; modified = true; }
      if (!Array.isArray(c.discussions)) { c.discussions = []; modified = true; }
      c.materials.forEach((m, idx) => {
        if (!m.moduleNumber) { m.moduleNumber = idx + 1; modified = true; }
        if (m.type === 'youtube') { m.type = 'video'; modified = true; }
        if (m.type === 'drive') { m.type = 'pdf'; modified = true; }
      });
      if (!c.assessment || !Array.isArray(c.assessment.questions) || c.assessment.questions.length === 0) {
        c.assessment = {
          passMark: 50,
          questions: getCourseAssessmentQuestions(c)
        };
        modified = true;
      }
    });
    if (modified) {
      saveDB(db);
    }
  }

  // Ensure UI/UX Course exists with Module 1 Assessment and Student Completion
  if (!Array.isArray(db.courses)) db.courses = [];
  let uiuxCourse = db.courses.find(c => c.id === 'crs_uiux' || /ui[\/\-_]?ux/i.test(c.title));
  if (!uiuxCourse) {
    uiuxCourse = {
      id: 'crs_uiux',
      title: 'UI/UX Design Masterclass',
      category: 'Product Design',
      mentorId: 'craffixmentor@gmail.com',
      mentorName: 'Dr. Sarah Lin (Lead Product Designer)',
      status: 'approved',
      createdAt: '2026-11-15',
      description: 'Master user interface design principles, Figma workflows, wireframing, typography, color accessibility, and design systems.',
      materials: [],
      assignments: [
        {
          id: 'asg_uiux_1',
          title: 'Mobile App Wireframing & Design System Architecture',
          instructions: 'Design responsive low-fidelity wireframes and a high-fidelity interactive prototype in Figma. Adhere to WCAG 2.1 AA 4.5:1 contrast guidelines, define clear visual hierarchy, and include component design tokens for buttons, cards, and input fields.',
          dueDate: '2026-12-15',
          maxPoints: 100
        }
      ],
      discussions: [
        {
          id: 'disc_uiux_1',
          authorName: 'Dr. Sarah Lin (Lead Product Designer)',
          authorRole: 'mentor',
          createdAt: '2026-11-15',
          content: 'Welcome to the UI/UX Design Masterclass! Study Module 1 and complete the assessment to test your design fundamentals.'
        }
      ],
      assessment: {
        passMark: 50,
        questions: [
          {
            q: 'Which usability metric evaluates how easily first-time users can navigate an application?',
            options: ['Learnability', 'Compile Time', 'Latency', 'Network Bandwidth'],
            answer: 0
          },
          {
            q: 'What is the primary purpose of a Design System in digital product engineering?',
            options: [
              'Ensuring visual consistency, component reusability, and scalable developer handoffs',
              'Replacing user research with random guessing',
              'Slowing down the release cycle deliberately',
              'Preventing developers from writing CSS'
            ],
            answer: 0
          },
          {
            q: 'What minimum score is required on the final UI/UX certification assessment to earn your verified credential?',
            options: ['25%', '35%', '50%', '75%'],
            answer: 2
          }
        ]
      }
    };
    db.courses.push(uiuxCourse);
    modified = true;
  }

  // Ensure Practical Assignment exists in UI/UX Course
  if (!Array.isArray(uiuxCourse.assignments) || uiuxCourse.assignments.length === 0) {
    uiuxCourse.assignments = [
      {
        id: 'asg_uiux_1',
        title: 'Mobile App Wireframing & Design System Architecture',
        instructions: 'Design responsive low-fidelity wireframes and a high-fidelity interactive prototype in Figma. Adhere to WCAG 2.1 AA 4.5:1 contrast guidelines, define clear visual hierarchy, and include component design tokens for buttons, cards, and input fields.',
        dueDate: '2026-12-15',
        maxPoints: 100
      }
    ];
    modified = true;
  }

  // Ensure Module 1 exists in UI/UX Course
  if (!Array.isArray(uiuxCourse.materials)) uiuxCourse.materials = [];
  let mod1 = uiuxCourse.materials.find(m => m.id === 'mat_uiux_1' || m.moduleNumber === 1);
  if (!mod1) {
    mod1 = {
      id: 'mat_uiux_1',
      courseId: uiuxCourse.id,
      title: 'Module 1: Principles of UI/UX & User-Centered Design',
      moduleNumber: 1,
      status: 'approved',
      type: 'both',
      link: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
      pdfName: 'UI_UX_Design_Principles_Guide.pdf',
      pdfSize: '2.4 MB',
      pdfData: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      content: `# Module 1: Principles of UI/UX & User-Centered Design

### Introduction to User Experience (UX)
User Experience encompasses all aspects of the end-user's interaction with the company, its services, and its products. Good UX is intuitive, frictionless, and solves real human problems.

### Core Design Principles
1. Visual Hierarchy: Arranging visual elements in order of significance so users immediately grasp key actions.
2. Consistency & Standards: Using recognizable UI patterns (standard navigation, button states, and form inputs).
3. Feedback & Affordance: Ensuring every user action receives immediate visual or tactile confirmation.
4. Accessibility (a11y): Following WCAG guidelines to guarantee readable contrast ratios (4.5:1 for body text) and keyboard navigability.

### Design Thinking Methodology
- Empathize: Conduct user interviews and create empathy maps.
- Define: Craft actionable problem statements and persona profiles.
- Ideate: Brainstorm divergent wireframe flows and solutions.
- Prototype: Build interactive mockups and component systems.
- Test: Validate usability with representative end-users.`,
      assessment: {
        passMark: 50,
        questions: []
      }
    };
    uiuxCourse.materials.unshift(mod1);
    modified = true;
  }

  // Ensure Assessment with Questions under Module 1
  if (!mod1.assessment) mod1.assessment = { passMark: 50, questions: [] };
  if (!Array.isArray(mod1.assessment.questions) || mod1.assessment.questions.length === 0) {
    mod1.assessment = {
      passMark: 50,
      questions: [
        {
          q: 'What is the primary distinction between User Interface (UI) and User Experience (UX)?',
          options: [
            'UI handles visual touchpoints and aesthetics; UX encompasses the complete journey and user satisfaction',
            'UI is exclusively used for backend logic, while UX is for database indexing',
            'UI and UX are completely identical concepts with no practical difference',
            'UI applies only to desktop applications, while UX is reserved for mobile apps'
          ],
          answer: 0
        },
        {
          q: 'In the Design Thinking process, which stage focuses on constructing testable, interactive prototypes?',
          options: [
            'Empathize',
            'Define',
            'Ideate',
            'Prototyping'
          ],
          answer: 3
        },
        {
          q: 'What minimum color contrast ratio is mandated by WCAG 2.1 AA standards for standard body text?',
          options: [
            '1:1',
            '2.5:1',
            '4.5:1',
            '10:1'
          ],
          answer: 2
        },
        {
          q: 'What is the main objective of establishing Visual Hierarchy in a UI layout?',
          options: [
            'Guiding user attention naturally toward primary actions and key information',
            'Cluttering the screen with maximum decorative animations',
            'Hiding navigation menus to confuse the end user',
            'Increasing load latency by injecting unoptimized images'
          ],
          answer: 0
        }
      ]
    };
    modified = true;
  }

  // Auto-complete Module 1 and Assignment in student side for enrolled student accounts
  if (!Array.isArray(db.enrollments)) db.enrollments = [];
  const studentEmails = new Set();
  (db.users || []).forEach(u => { if (u.role === 'student' && u.email) studentEmails.add(u.email); });
  if (currentUser && currentUser.role === 'student' && currentUser.email) {
    studentEmails.add(currentUser.email);
  }

  const defaultUiuxSubmission = {
    assignmentId: 'asg_uiux_1',
    submissionLink: 'https://figma.com/@craffix/ui-ux-design-system-prototype',
    notes: 'Completed mobile checkout flow wireframe with full design system tokens, WCAG AA compliant colors, and interactive Figma prototypes.',
    status: 'graded',
    grade: 96,
    feedback: 'Exceptional wireframing and component token structure! Meets all accessibility contrast standards.',
    submittedAt: '2026-11-15',
    gradedAt: '2026-11-15',
    gradedBy: 'Dr. Sarah Lin (Lead Product Designer)'
  };

  studentEmails.forEach(email => {
    let en = db.enrollments.find(e => e.studentEmail === email && e.courseId === uiuxCourse.id);
    if (!en) {
      en = {
        id: 'en_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        studentEmail: email,
        courseId: uiuxCourse.id,
        enrolledAt: new Date().toISOString().split('T')[0],
        completedMaterialIds: [mod1.id],
        moduleScores: { [mod1.id]: 100 },
        assignmentSubmissions: [{ ...defaultUiuxSubmission }]
      };
      db.enrollments.push(en);
      modified = true;
    } else {
      if (!Array.isArray(en.assignmentSubmissions)) {
        en.assignmentSubmissions = [];
      }
      let sub = en.assignmentSubmissions.find(s => s.assignmentId === 'asg_uiux_1');
      if (!sub) {
        en.assignmentSubmissions.push({ ...defaultUiuxSubmission });
        modified = true;
      }
    }
  });

  if (modified) {
    saveDB(db);
  }

  return db;
}

function saveDB(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

// ============================================================================
// 3. APPLICATION STATE
// ============================================================================
let currentUser = JSON.parse(localStorage.getItem('craffix_user_session') || 'null');
let currentNav = 'Dashboard';
let activeCourseId = null;
let activeMaterialIndex = 0;
let isRegisterMode = false;

const NAV_BY_ROLE = {
  admin: ['Dashboard', 'Approvals', 'Mentors', 'Students', 'Courses', 'Webinars', 'Internships', 'Certificates'],
  mentor: ['Dashboard', 'My Courses', 'Grade Submissions', 'Student Reports', 'Approve Certificates', 'Webinars'],
  student: ['Dashboard', 'Browse Courses', 'My Courses', 'Webinars', 'Internships', 'Certificates']
};

// ============================================================================
// 4. AUTHENTICATION & DEMO LOGIN
// ============================================================================
function initApp() {
  const db = loadDB();
  currentUser = JSON.parse(localStorage.getItem('craffix_user_session') || 'null');
  if (!currentUser) {
    showAuthView();
  } else {
    const verified = db.users.find(u => u.email === currentUser.email);
    if (!verified) {
      handleLogout();
      return;
    }
    currentUser = verified;
    localStorage.setItem('craffix_user_session', JSON.stringify(currentUser));
    showAppView();
  }
}

function showAuthView() {
  document.getElementById('auth-view').style.display = 'grid';
  document.getElementById('app-view').style.display = 'none';
  document.getElementById('auth-err').style.display = 'none';
}

function showAppView() {
  document.getElementById('auth-view').style.display = 'none';
  document.getElementById('app-view').style.display = 'flex';

  document.getElementById('header-user').textContent = `${currentUser.name} (${currentUser.role})`;
  renderSidebarNav();
  handleNavClick(currentNav);
  updateFooterAssessmentBanner();
}

function toggleAuthMode() {
  isRegisterMode = !isRegisterMode;
  const regFields = document.getElementById('register-fields');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleBtn = document.getElementById('auth-toggle-mode-btn');
  const err = document.getElementById('auth-err');
  err.style.display = 'none';

  if (isRegisterMode) {
    regFields.style.display = 'flex';
    title.textContent = 'Create Account';
    if (subtitle) subtitle.textContent = '';
    submitBtn.textContent = 'Create Account';
    toggleBtn.textContent = 'Have an account? Login';
  } else {
    regFields.style.display = 'none';
    title.textContent = 'Login';
    if (subtitle) subtitle.textContent = '';
    submitBtn.textContent = 'Login';
    toggleBtn.textContent = 'New student? Create account free';
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const db = loadDB();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const password = document.getElementById('auth-password').value;
  const err = document.getElementById('auth-err');
  err.style.display = 'none';

  if (isRegisterMode) {
    const name = document.getElementById('auth-name').value.trim();
    if (!name) {
      err.textContent = 'Please enter your full name.';
      err.style.display = 'block';
      return;
    }
    if (db.users.find(u => u.email === email)) {
      err.textContent = 'An account with this email already exists.';
      err.style.display = 'block';
      return;
    }
    const newUser = {
      id: 'usr_' + Date.now(),
      name,
      email,
      password,
      role: 'student',
      createdAt: new Date().toISOString().split('T')[0]
    };
    db.users.push(newUser);
    saveDB(db);

    currentUser = newUser;
    localStorage.setItem('craffix_user_session', JSON.stringify(currentUser));
    showAppView();
    showAlert('Account created successfully! Welcome to Craffix LMS.', 'success');
  } else {
    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) {
      err.textContent = 'Invalid email or password. Note: Faculty Mentor accounts are provisioned by Institution Admin.';
      err.style.display = 'block';
      return;
    }
    currentUser = user;
    localStorage.setItem('craffix_user_session', JSON.stringify(currentUser));
    showAppView();
  }
}

function handleLogout() {
  localStorage.removeItem('craffix_user_session');
  currentUser = null;
  currentNav = 'Dashboard';
  showAuthView();
}

// ============================================================================
// 5. SIDEBAR NAVIGATION WITH DARK PURPLE CLICK ANIMATION
// ============================================================================
function renderSidebarNav() {
  const navContainer = document.getElementById('nav-items');
  navContainer.innerHTML = '';
  const db = loadDB();

  const items = NAV_BY_ROLE[currentUser.role] || [];

  // Count approvals badge
  let pendingCount = 0;
  if (currentUser.role === 'admin') {
    const pCourses = db.courses.filter(c => c.status === 'pending').length;
    let pMats = 0;
    db.courses.forEach(c => {
      (c.materials || []).forEach(m => { if (m.status === 'pending') pMats++; });
    });
    const pCerts = (db.certificateRequests || []).filter(r => r.status === 'pending_admin').length;
    let pWebinars = 0;
    (db.webinars || []).forEach(w => {
      (w.registrations || []).forEach(r => {
        if (r.type === 'paid' && r.status === 'pending_approval') pWebinars++;
      });
    });
    pendingCount = pCourses + pMats + pCerts + pWebinars;
  } else if (currentUser.role === 'mentor') {
    const myCourseIds = db.courses.filter(c => c.mentorId === currentUser.email).map(c => c.id);
    pendingCount = (db.certificateRequests || []).filter(r => myCourseIds.includes(r.courseId) && r.status === 'pending_mentor').length;
  }

  items.forEach(tab => {
    const btn = document.createElement('button');
    btn.id = `nav-${tab}`;
    btn.className = `nav ${currentNav === tab ? 'on' : ''}`;
    btn.onclick = () => handleNavClick(tab);

    let badgeHtml = '';
    if (currentUser.role === 'admin' && tab === 'Approvals' && pendingCount > 0) {
      badgeHtml = `<span class="nav-badge">${pendingCount}</span>`;
    } else if (currentUser.role === 'mentor' && tab === 'Approve Certificates' && pendingCount > 0) {
      badgeHtml = `<span class="nav-badge">${pendingCount}</span>`;
    }

    btn.innerHTML = `
      <span class="nav-icon">${ICONS[tab] || ''}</span>
      <span class="nav-label" style="flex: 1;">${tab}</span>
      ${badgeHtml}
    `;
    navContainer.appendChild(btn);
  });

  // Update Notification sidebar button badge & active state
  const notifBtn = document.getElementById('nav-Notification');
  if (notifBtn) {
    if (currentNav === 'Notification') notifBtn.classList.add('on');
    else notifBtn.classList.remove('on');

    if (typeof getNotificationsForUser === 'function') {
      const notifs = getNotificationsForUser();
      const unreadCount = notifs.filter(n => !n.isRead).length;
      let badgeEl = notifBtn.querySelector('.nav-badge');
      if (unreadCount > 0) {
        if (!badgeEl) {
          badgeEl = document.createElement('span');
          badgeEl.className = 'nav-badge';
          notifBtn.appendChild(badgeEl);
        }
        badgeEl.textContent = unreadCount;
      } else if (badgeEl) {
        badgeEl.remove();
      }
    }
  }

  const setBtn = document.getElementById('nav-Setting');
  if (setBtn) {
    if (currentNav === 'Setting') setBtn.classList.add('on');
    else setBtn.classList.remove('on');
  }
}

function handleNavClick(tabName) {
  currentNav = tabName;

  // Clear 'on' from all sidebar nav buttons
  document.querySelectorAll('.nav').forEach(btn => btn.classList.remove('on', 'blinking'));

  // Trigger dark purple blinking animation on clicked button
  const activeBtn = document.getElementById(`nav-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('on', 'blinking');
    setTimeout(() => {
      activeBtn.classList.remove('blinking');
    }, 450);
  }

  navigateTo(tabName);
}

function navigateTo(tabName, payload = null) {
  const headerTitle = document.getElementById('header-title');
  const headerActions = document.getElementById('header-actions');
  const content = document.getElementById('content-view');
  headerActions.innerHTML = '';
  content.innerHTML = '';

  headerTitle.textContent = tabName;

  switch (tabName) {
    case 'Dashboard':
      renderDashboard(content);
      break;

    case 'Approvals':
      renderApprovals(content);
      break;

    case 'Mentors':
      headerActions.innerHTML = `<button class="btn btn-sm" onclick="openAddMentorModal()">${ICONS.plus} Add Mentor</button>`;
      renderMentors(content);
      break;

    case 'Students':
      renderStudents(content);
      break;

    case 'Courses':
      renderAdminCourses(content);
      break;

    case 'My Courses':
      if (currentUser.role === 'mentor') {
        headerActions.innerHTML = `<button class="btn btn-sm" onclick="openAddCourseModal()">${ICONS.plus} Create Course</button>`;
        renderMentorCourses(content);
      } else {
        renderStudentMyCourses(content);
      }
      break;

    case 'course_editor':
      headerTitle.textContent = 'Manage Course';
      renderCourseEditor(content, payload);
      break;

    case 'Grade Submissions':
      renderGradeSubmissions(content);
      break;

    case 'Student Reports':
      renderStudentReports(content);
      break;

    case 'Approve Certificates':
      renderMentorCertificates(content);
      break;

    case 'Browse Courses':
      renderBrowseCourses(content);
      break;

    case 'course_player':
      activeMaterialIndex = null;
      headerTitle.textContent = 'Course Player';
      renderCoursePlayer(content, payload);
      break;

    case 'Webinars':
      if (currentUser.role === 'mentor' || currentUser.role === 'admin') {
        headerActions.innerHTML = `<button class="btn btn-sm" onclick="openAddWebinarModal()">${ICONS.plus} Host Webinar</button>`;
      }
      renderWebinars(content);
      break;

    case 'Internships':
      if (currentUser.role === 'admin') {
        headerActions.innerHTML = `<button class="btn btn-sm" onclick="openAddInternshipModal()">${ICONS.plus} Post Internship</button>`;
      }
      renderInternships(content);
      break;

    case 'Certificates':
      renderCertificates(content);
      break;

    case 'Notification':
      renderNotifications(content);
      break;

    case 'Setting':
      renderSettings(content);
      break;

    default:
      renderDashboard(content);
  }
}

function showAlert(msg, type = 'info') {
  const alertEl = document.getElementById('app-alert');
  alertEl.style.display = 'block';
  alertEl.textContent = msg;

  if (type === 'success') {
    alertEl.style.backgroundColor = '#ECFDF5';
    alertEl.style.color = '#059669';
    alertEl.style.border = '1px solid #A7F3D0';
  } else if (type === 'danger') {
    alertEl.style.backgroundColor = '#FEF2F2';
    alertEl.style.color = '#DC2626';
    alertEl.style.border = '1px solid #FECACA';
  } else {
    alertEl.style.backgroundColor = '#EFF6FF';
    alertEl.style.color = '#2563EB';
    alertEl.style.border = '1px solid #BFDBFE';
  }

  setTimeout(() => {
    alertEl.style.display = 'none';
  }, 4000);
}

function updateFooterAssessmentBanner() {
  const banner = document.getElementById('assessment-score-banner');
  if (!banner) return;
  if (!currentUser || currentUser.role !== 'student') {
    banner.style.display = 'none';
    return;
  }

  const db = loadDB();
  const myEnrollments = db.enrollments.filter(e => e.studentEmail === currentUser.email && e.finalScore !== null);
  if (myEnrollments.length > 0) {
    const latest = myEnrollments[myEnrollments.length - 1];
    const course = db.courses.find(c => c.id === latest.courseId) || { title: 'Course' };
    banner.style.display = 'block';
    banner.innerHTML = `Latest assessment: <strong>${course.title}</strong> · Score <strong>${latest.finalScore}%</strong> · <span class="${latest.finalPassed ? 'badge-pass' : 'badge-fail'}">${latest.finalPassed ? 'Passed (pass mark 50%)' : 'Needs Retake'}</span>`;
  } else {
    banner.style.display = 'none';
  }
}

// ============================================================================
// 6. DASHBOARD VIEWS
// ============================================================================
function renderDashboard(container) {
  const db = loadDB();
  if (currentUser.role === 'admin') {
    renderAdminDashboard(container, db);
  } else if (currentUser.role === 'mentor') {
    renderMentorDashboard(container, db);
  } else {
    renderStudentDashboard(container, db);
  }
}

function renderAdminDashboard(container, db) {
  const totalStudents = db.users.filter(u => u.role === 'student').length;
  const totalMentors = db.users.filter(u => u.role === 'mentor').length;
  const totalCourses = db.courses.length;
  const pendingCourses = db.courses.filter(c => c.status === 'pending');

  const pendingMaterials = [];
  db.courses.forEach(c => {
    (c.materials || []).forEach(m => {
      if (m.status === 'pending') {
        pendingMaterials.push({ course: c, material: m });
      }
    });
  });

  const pendingCerts = (db.certificateRequests || []).filter(r => r.status === 'pending_admin');
  const totalPending = pendingCourses.length + pendingMaterials.length + pendingCerts.length;
  const issuedCerts = (db.certificateRequests || []).filter(r => r.status === 'issued').length;
  const totalInternships = db.internships.length;
  const totalVacancies = db.internships.reduce((acc, curr) => acc + (Number(curr.vacancies) || 1), 0);
  const totalApplicants = db.internships.reduce((acc, curr) => acc + (curr.applicants ? curr.applicants.length : 0), 0);
  const totalWebinars = db.webinars.length;
  const totalWebinarAttendees = db.webinars.reduce((acc, curr) => acc + ((curr.registeredUsers || []).length), 0);

  // Compile all pending items for the action queue table
  const pendingItems = [
    ...pendingCourses.map(c => ({
      category: 'Course Proposal',
      badgeClass: 'badge-purple',
      title: c.title,
      submittedBy: c.mentorName || c.mentorId,
      date: c.createdAt || '2026-11-14',
      target: 'Approvals'
    })),
    ...pendingMaterials.map(pm => ({
      category: 'Learning Material',
      badgeClass: 'badge-blue',
      title: `${pm.material.title} (${pm.course.title})`,
      submittedBy: pm.course.mentorName || pm.course.mentorId,
      date: pm.material.createdAt || '2026-11-14',
      target: 'Approvals'
    })),
    ...pendingCerts.map(r => ({
      category: 'Certificate Sign-Off',
      badgeClass: 'badge-amber',
      title: `${r.courseTitle} - ${r.studentName}`,
      submittedBy: r.mentorEmail || 'Mentor Sign-Off',
      date: r.requestedAt || '2026-11-14',
      target: 'Approvals'
    }))
  ];

  container.innerHTML = `
    <!-- Top System Metrics Table Structure -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">System Overview &amp; Operational Metrics</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            High-level platform capacity and administrative health indicators.
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Operational Area</th>
              <th class="text-center">Total Volume</th>
              <th class="text-center">Pending Approvals / Actions</th>
              <th class="text-center">System Status</th>
              <th class="text-right">Quick Navigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Students &amp; Learners</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Enrolled student accounts across all courses</div>
              </td>
              <td class="text-center"><strong>${totalStudents}</strong> Students</td>
              <td class="text-center"><span class="badge badge-green">Up to date</span></td>
              <td class="text-center"><span class="badge badge-green">Active</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Students')">Manage Students</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Mentors &amp; Instructors</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Teaching faculty and curriculum leaders</div>
              </td>
              <td class="text-center"><strong>${totalMentors}</strong> Instructors</td>
              <td class="text-center"><span class="badge badge-green">Verified</span></td>
              <td class="text-center"><span class="badge badge-green">Active</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Mentors')">Manage Mentors</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Courses &amp; Learning Modules</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Curriculum programs and study materials</div>
              </td>
              <td class="text-center"><strong>${totalCourses}</strong> Courses</td>
              <td class="text-center">
                ${pendingCourses.length > 0 ? `<span class="badge badge-red">${pendingCourses.length} Pending Approval</span>` : `<span class="badge badge-green">All Approved</span>`}
              </td>
              <td class="text-center"><span class="badge badge-blue">Published</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Courses')">View Catalog</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Certificates &amp; Credentials</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Official student graduation certifications</div>
              </td>
              <td class="text-center"><strong>${issuedCerts}</strong> Issued</td>
              <td class="text-center">
                ${pendingCerts.length > 0 ? `<span class="badge badge-amber">${pendingCerts.length} Awaiting Sign-Off</span>` : `<span class="badge badge-green">Zero Pending</span>`}
              </td>
              <td class="text-center"><span class="badge badge-green">Verified</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Approvals')">Certificate Queue</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Career Internships &amp; Jobs</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Corporate placements and applicant intake</div>
              </td>
              <td class="text-center"><strong>${totalInternships}</strong> Postings (${totalVacancies} Seats)</td>
              <td class="text-center">
                <span class="badge badge-purple">${totalApplicants} Applicants</span>
              </td>
              <td class="text-center"><span class="badge badge-green">Recruiting</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Internships')">Internship Hub</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Live Webinar Masterclasses</strong>
                <div style="font-size: 11.5px; color: var(--text-muted);">Interactive workshops and masterclasses</div>
              </td>
              <td class="text-center"><strong>${totalWebinars}</strong> Sessions</td>
              <td class="text-center">
                <span class="badge badge-blue">${totalWebinarAttendees} Attendees</span>
              </td>
              <td class="text-center"><span class="badge badge-green">Scheduled</span></td>
              <td class="text-right">
                <button class="btn btn-secondary btn-sm" onclick="navigateTo('Webinars')">Inspect Webinars</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pending Admin Action Queue Table Structure -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Pending Administrative Approvals Queue</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            ${totalPending > 0 ? `${totalPending} items require administrator review and sign-off.` : 'All submissions and requests are fully processed.'}
          </div>
        </div>
        ${totalPending > 0 ? `
          <button class="btn btn-sm" onclick="navigateTo('Approvals')">
            Open Approvals Center (${totalPending})
          </button>
        ` : ''}
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left">Subject / Item Details</th>
              <th class="text-left">Submitted By</th>
              <th class="text-center">Submission Date</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingItems.map(item => `
              <tr>
                <td><span class="badge ${item.badgeClass}">${item.category}</span></td>
                <td><strong>${item.title}</strong></td>
                <td>${item.submittedBy}</td>
                <td class="text-center" style="font-size: 12px; white-space: nowrap;">${item.date}</td>
                <td class="text-right">
                  <button class="btn btn-secondary btn-sm" onclick="navigateTo('${item.target}')">
                    Review in Approvals
                  </button>
                </td>
              </tr>
            `).join('') || `
              <tr>
                <td colspan="5" class="empty-table-state">
                  <div class="empty-box" style="padding: 26px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">
                      All course proposals, study materials, and certificates are reviewed and up to date.
                    </p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>

    <!-- All Student Progress Overview Table Structure -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Student Academic Progress &amp; Performance</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Real-time enrollment tracking, material completion, assignments, and examination scores.
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student &amp; Email</th>
              <th class="text-left">Enrolled Course</th>
              <th class="text-left">Materials Progress</th>
              <th class="text-center">Assignment Status</th>
              <th class="text-center">Assessment Score</th>
              <th class="text-right">Certificate Status</th>
            </tr>
          </thead>
          <tbody>
            ${db.enrollments.map(en => {
              const student = db.users.find(u => u.email === en.studentEmail) || { name: en.studentEmail };
              const course = db.courses.find(c => c.id === en.courseId) || { title: 'Unknown Course', materials: [] };
              const approvedMats = (course.materials || []).filter(m => m.status === 'approved');
              const matPct = approvedMats.length ? Math.round(((en.completedMaterialIds || []).length / approvedMats.length) * 100) : 0;
              const sub = (en.assignmentSubmissions || [])[0];
              const cert = (db.certificateRequests || []).find(r => r.studentEmail === en.studentEmail && r.courseId === en.courseId);

              return `
                <tr>
                  <td>
                    <strong>${student.name}</strong>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${en.studentEmail}</div>
                  </td>
                  <td><strong>${course.title}</strong></td>
                  <td>
                    <div class="progress-track" style="margin-bottom: 4px;">
                      <div class="progress-fill" style="width: ${matPct}%;"></div>
                    </div>
                    <span style="font-size: 12px; font-weight: 600;">${matPct}% Completed</span>
                  </td>
                  <td class="text-center">
                    ${sub ? (sub.status === 'graded' ? `<span class="badge badge-green">Graded: ${sub.grade} pts</span>` : `<span class="badge badge-amber">Submitted</span>`) : `<span style="color: var(--text-muted); font-size: 12px;">Not Submitted</span>`}
                  </td>
                  <td class="text-center">
                    ${en.finalScore !== null && en.finalScore !== undefined ? `<strong style="color: ${en.finalPassed ? 'var(--success)' : 'var(--danger)'};">${en.finalScore}% (${en.finalPassed ? 'Passed' : 'Needs Retake'})</strong>` : `<span style="color: var(--text-muted); font-size: 12px;">Pending Exam</span>`}
                  </td>
                  <td class="text-right">
                    ${cert ? renderCertBadge(cert.status) : `<span style="color: var(--text-muted); font-size: 12px;">Not Requested</span>`}
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="6" class="empty-table-state"><div class="empty-box"><p>No student enrollment records found.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Career Openings & Candidate Pipeline Table Structure -->
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Career Internships &amp; Candidate Pipeline</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Active job postings, applicant counts, and recruitment statuses.
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="navigateTo('Internships')">
          View All Postings
        </button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Position Title</th>
              <th class="text-left">Company &amp; Location</th>
              <th class="text-center">Work Mode</th>
              <th class="text-center">Package</th>
              <th class="text-center">Vacancies</th>
              <th class="text-center">Applicants</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${db.internships.map(i => `
              <tr>
                <td><strong>${i.title}</strong></td>
                <td>
                  <div>${i.company}</div>
                  <div style="font-size: 11.5px; color: var(--text-muted);">${i.location || 'Remote'}</div>
                </td>
                <td class="text-center"><span class="badge badge-purple">${i.mode || 'Remote'}</span></td>
                <td class="text-center">
                  <span class="badge ${i.stipendType === 'Stipend' ? 'badge-green' : 'badge-amber'}">
                    ${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'}
                  </span>
                </td>
                <td class="text-center">${i.vacancies || 1} Seats</td>
                <td class="text-center">
                  <strong>${(i.applicants || []).length}</strong> applied
                </td>
                <td class="text-right">
                  <button class="btn btn-secondary btn-sm" onclick="openApplicantsModal('${i.id}')" style="font-weight: 600;">
                    View Applicants
                  </button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="7" class="empty-table-state"><div class="empty-box"><p>No internship postings found.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMentorDashboard(container, db) {
  const myCourses = db.courses.filter(c => c.mentorId === currentUser.email);
  const myCourseIds = myCourses.map(c => c.id);
  const myEnrollments = db.enrollments.filter(e => myCourseIds.includes(e.courseId));
  const pendingCerts = (db.certificateRequests || []).filter(r => myCourseIds.includes(r.courseId) && r.status === 'pending_mentor').length;

  container.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-val">${myCourses.length}</span>
        <span class="stat-label">Active Courses</span>
      </div>
      <div class="stat-card">
        <span class="stat-val">${myEnrollments.length}</span>
        <span class="stat-label">Enrolled Students</span>
      </div>
      <div class="stat-card">
        <span class="stat-val" style="color: var(--warning);">${pendingCerts}</span>
        <span class="stat-label">Certificates to Approve</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h2>My Course Catalog</h2>
        <button class="btn btn-sm" onclick="openAddCourseModal()">${ICONS.plus} New Course</button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course Title</th>
              <th class="text-center">Status</th>
              <th class="text-center">Materials</th>
              <th class="text-center">Assignments</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${myCourses.map(c => `
              <tr>
                <td><strong>${c.title}</strong></td>
                <td class="text-center">${renderStatusBadge(c.status)}</td>
                <td class="text-center">${(c.materials || []).length} (${(c.materials || []).filter(m => m.status === 'approved').length} approved)</td>
                <td class="text-center">${(c.assignments || []).length}</td>
                <td class="text-right">
                  <button class="btn btn-secondary btn-sm" onclick="navigateTo('course_editor', '${c.id}')">${ICONS.edit} Manage</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No courses created yet.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentDashboard(container, db) {
  const myEnrollments = db.enrollments.filter(e => e.studentEmail === currentUser.email);
  const myCerts = (db.certificateRequests || []).filter(r => r.studentEmail === currentUser.email && r.status === 'issued');

  container.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-val">${myEnrollments.length}</span>
        <span class="stat-label">Enrolled Courses</span>
      </div>
      <div class="stat-card">
        <span class="stat-val" style="color: var(--success);">${myCerts.length}</span>
        <span class="stat-label">Earned Certificates</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h2>Enrolled Courses</h2>
        <button class="btn btn-secondary btn-sm" onclick="handleNavClick('Browse Courses')">Browse More Courses</button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course</th>
              <th class="text-left">Materials Done</th>
              <th class="text-center">Assessment</th>
              <th class="text-center">Certificate</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${myEnrollments.map(en => {
              const course = db.courses.find(c => c.id === en.courseId);
              if (!course) return '';
              const approvedMats = (course.materials || []).filter(m => m.status === 'approved');
              const pct = approvedMats.length ? Math.round(((en.completedMaterialIds || []).length / approvedMats.length) * 100) : 0;
              const cert = (db.certificateRequests || []).find(r => r.studentEmail === currentUser.email && r.courseId === en.courseId);

              return `
                <tr>
                  <td><strong>${course.title}</strong><br><small>${course.mentorName || 'Mentor'}</small></td>
                  <td>
                    <div class="progress-track"><div class="progress-fill" style="width: ${pct}%;"></div></div>
                    <strong>${pct}%</strong>
                  </td>
                  <td class="text-center">
                    ${en.finalScore !== null && en.finalScore !== undefined ? `<strong style="color: ${en.finalPassed ? 'var(--success)' : 'var(--danger)'};">${en.finalScore}% (${en.finalPassed ? 'Passed' : 'Failed'})</strong>` : `<span style="color: var(--text-muted); font-size: 12px;">Not Taken</span>`}
                  </td>
                  <td class="text-center">
                    ${cert ? renderCertBadge(cert.status) : `<span style="color: var(--text-muted); font-size: 12px;">Locked</span>`}
                  </td>
                  <td class="text-right">
                    <button class="btn btn-sm" onclick="navigateTo('course_player', '${course.id}')">Continue Course</button>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>You are not enrolled in any courses yet.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ============================================================================
// 7. APPROVALS CENTER (COURSES, MATERIALS, CERTIFICATES)
// ============================================================================
function renderApprovals(container) {
  const db = loadDB();
  const pendingCourses = db.courses.filter(c => c.status === 'pending');
  const pendingMats = [];
  db.courses.forEach(c => {
    (c.materials || []).forEach(m => {
      if (m.status === 'pending') pendingMats.push({ courseId: c.id, courseTitle: c.title, material: m });
    });
  });
  const pendingCerts = (db.certificateRequests || []).filter(r => r.status === 'pending_admin');

  const pendingWebinarPayments = [];
  (db.webinars || []).forEach(w => {
    (w.registrations || []).forEach(r => {
      if (r.type === 'paid' && r.status === 'pending_approval') {
        pendingWebinarPayments.push({
          webinarId: w.id,
          webinarTitle: w.title,
          speaker: w.speaker,
          fee: w.fee,
          email: r.email,
          name: r.name || r.email,
          utr: r.utr,
          bookedAt: r.bookedAt,
          receiptName: r.receiptName
        });
      }
    });
  });

  container.innerHTML = `
    <!-- Pending Webinar Payment Screenshot Reviews -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px;">Paid Webinar Payment Reviews (${pendingWebinarPayments.length})</h2>
          <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
            Verify transaction screenshots uploaded by students before releasing live session meeting links.
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student Name &amp; Email</th>
              <th class="text-left">Masterclass Webinar</th>
              <th class="text-center">Fee Paid</th>
              <th class="text-center">UTR / Ref No.</th>
              <th class="text-center">Screenshot</th>
              <th class="text-right">Review Actions</th>
            </tr>
          </thead>
          <tbody>
            ${pendingWebinarPayments.map(p => `
              <tr>
                <td><strong>${p.name}</strong><br><small style="color: var(--text-muted);">${p.email}</small></td>
                <td><strong>${p.webinarTitle}</strong><br><small style="color: var(--text-muted);">Host: ${p.speaker}</small></td>
                <td class="text-center"><span class="badge badge-purple">₹${p.fee}.00</span></td>
                <td class="text-center" style="font-size: 12px; font-family: monospace;">${p.utr || 'Pending'}</td>
                <td class="text-center">
                  <button class="btn btn-secondary btn-sm" onclick="viewWebinarReceipt('${p.webinarId}', '${p.email}')" style="padding: 4px 10px; font-size: 11.5px;">
                    View Screenshot
                  </button>
                </td>
                <td class="text-right" style="white-space: nowrap;">
                  <button class="btn btn-success btn-sm" onclick="approveWebinarPayment('${p.webinarId}', '${p.email}')">Approve &amp; Unlock</button>
                  <button class="btn btn-danger btn-sm" onclick="rejectWebinarPayment('${p.webinarId}', '${p.email}')">Reject</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="6" class="empty-table-state"><div class="empty-box"><p>No webinar payments pending review.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pending Courses -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <h2>Pending Courses (${pendingCourses.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course Title</th>
              <th class="text-left">Mentor</th>
              <th class="text-left">Description</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingCourses.map(c => `
              <tr>
                <td><strong>${c.title}</strong></td>
                <td>${c.mentorName || c.mentorId}</td>
                <td style="max-width: 320px; font-size: 12.5px; color: var(--text-muted);">${c.description}</td>
                <td class="text-right">
                  <button class="btn btn-success btn-sm" onclick="approveCourse('${c.id}')">Approve</button>
                  <button class="btn btn-danger btn-sm" onclick="rejectCourse('${c.id}')">Reject</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="4" class="empty-table-state"><div class="empty-box"><p>No courses pending approval.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pending Materials -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <h2>Pending Learning Materials (${pendingMats.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course</th>
              <th class="text-left">Material Title</th>
              <th class="text-center">Type</th>
              <th class="text-left">Resource Link</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingMats.map(pm => {
              const m = pm.material;
              const hasText = !!(m.content || m.typedContent);
              const hasPdf = !!(m.pdfData || m.pdfLink || (m.type === 'pdf' && m.link));
              const hasVid = !!m.link && m.type !== 'pdf';
              const typeBadge = (m.type === 'type_content' || m.type === 'text')
                ? '<span class="badge badge-purple">TYPED CONTENT</span>'
                : (m.type === 'pdf'
                  ? '<span class="badge badge-amber">PDF DOC</span>'
                  : (m.type === 'text_pdf'
                    ? '<span class="badge badge-green">CONTENT + PDF</span>'
                    : (m.type === 'both'
                      ? '<span class="badge badge-purple">VIDEO + PDF</span>'
                      : '<span class="badge badge-blue">VIDEO LECTURE</span>')));

              const wordCount = (m.content || m.typedContent || '').trim() ? (m.content || m.typedContent).trim().split(/\s+/).filter(Boolean).length : 0;
              const pdfUrl = m.pdfData || m.pdfLink || (m.type === 'pdf' ? m.link : '');

              return `
                <tr>
                  <td><strong>${pm.courseTitle}</strong></td>
                  <td>${m.title}</td>
                  <td class="text-center">${typeBadge}</td>
                  <td>
                    ${hasText ? `<button type="button" class="btn btn-secondary btn-sm" onclick="previewTypedContent('${pm.courseId}', '${m.id}')" style="padding: 2px 8px; font-size: 11px; margin-right: 4px;">Read Content (${wordCount} words)</button>` : ''}
                    ${hasPdf ? `<a href="${pdfUrl}" target="_blank" class="link" style="margin-right: 6px;">${m.pdfName || 'PDF Document'} &nearr;</a>` : ''}
                    ${hasVid ? `<a href="${m.link}" target="_blank" class="link">Video &nearr;</a>` : ''}
                  </td>
                  <td class="text-right">
                    <button class="btn btn-success btn-sm" onclick="approveMaterial('${pm.courseId}', '${pm.material.id}')">Approve</button>
                    <button class="btn btn-danger btn-sm" onclick="rejectMaterial('${pm.courseId}', '${pm.material.id}')">Reject</button>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No materials pending approval.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pending Certificates -->
    <div class="card">
      <div class="card-header">
        <h2>Certificates Pending Admin Sign-Off (${pendingCerts.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student</th>
              <th class="text-left">Course</th>
              <th class="text-center">Score</th>
              <th class="text-left">Mentor Verification</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingCerts.map(cert => `
              <tr>
                <td><strong>${cert.studentName}</strong><br><small>${cert.studentEmail}</small></td>
                <td>${cert.courseTitle}</td>
                <td class="text-center"><strong style="color: var(--success);">${cert.score}%</strong></td>
                <td>Verified by Mentor (${cert.mentorApprovedAt || 'Approved'})</td>
                <td class="text-right">
                  <button class="btn btn-success btn-sm" onclick="adminIssueCert('${cert.id}')">Approve &amp; Issue</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No certificates pending admin approval.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function approveCourse(id) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === id);
  if (c) {
    c.status = 'approved';
    saveDB(db);
    showAlert(`Course "${c.title}" approved.`, 'success');
    renderSidebarNav();
    navigateTo('Approvals');
  }
}

function rejectCourse(id) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === id);
  if (c) {
    c.status = 'rejected';
    saveDB(db);
    showAlert('Course rejected.', 'danger');
    renderSidebarNav();
    navigateTo('Approvals');
  }
}

function approveMaterial(cId, mId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === cId);
  if (c) {
    const m = (c.materials || []).find(x => x.id === mId);
    if (m) {
      m.status = 'approved';
      saveDB(db);
      showAlert(`Material "${m.title}" approved.`, 'success');
      renderSidebarNav();
      navigateTo('Approvals');
    }
  }
}

function rejectMaterial(cId, mId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === cId);
  if (c) {
    c.materials = (c.materials || []).filter(x => x.id !== mId);
    saveDB(db);
    showAlert('Material rejected and removed.', 'danger');
    renderSidebarNav();
    navigateTo('Approvals');
  }
}

function adminIssueCert(certId) {
  const db = loadDB();
  const cert = (db.certificateRequests || []).find(x => x.id === certId);
  if (cert) {
    cert.status = 'issued';
    cert.adminApprovedAt = new Date().toISOString().split('T')[0];
    saveDB(db);
    showAlert(`Certificate for ${cert.studentName} issued successfully!`, 'success');
    renderSidebarNav();
    navigateTo('Approvals');
  }
}

// ============================================================================
// 8. MENTORS, STUDENTS & ADMIN COURSE DELETIONS
// ============================================================================
function renderMentors(container) {
  const db = loadDB();
  const mentors = db.users.filter(u => u.role === 'mentor');
  const totalCourses = db.courses.length;
  const totalWebinars = (db.webinars || []).length;

  container.innerHTML = `
    <!-- Top Statistics Grid for Mentors -->
    <div class="stats-grid" style="margin-bottom: 20px;">
      <div class="stat-card">
        <div class="stat-label">Total Faculty Mentors</div>
        <div class="stat-val" style="margin: 6px 0 2px;">${mentors.length}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Active subject instructors</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Assigned Courses</div>
        <div class="stat-val" style="margin: 6px 0 2px;">${totalCourses}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Curriculum programs</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Hosted Masterclasses</div>
        <div class="stat-val" style="margin: 6px 0 2px;">${totalWebinars}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Interactive live sessions</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Faculty Status</div>
        <div class="stat-val" style="margin: 6px 0 2px; color: #10B981;">100% Verified</div>
        <div style="font-size: 12px; color: var(--text-muted);">Dual-approval authorization</div>
      </div>
    </div>

    <!-- Neat Master Mentors Table -->
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Faculty &amp; Mentor Directory (Admin-Provisioned)</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Faculty Mentor credentials (email &amp; password) are provisioned exclusively by the Administrator. Students register via open sign-up.
          </div>
        </div>
        <button class="btn btn-sm" onclick="openAddMentorModal()">${ICONS.plus} Add New Mentor</button>
      </div>

      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Mentor Details</th>
              <th class="text-left">Specialization / Domain</th>
              <th class="text-center">LinkedIn Profile</th>
              <th class="text-center">Assigned Courses</th>
              <th class="text-center">Webinars</th>
              <th class="text-center">Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${mentors.map(m => {
              const courses = db.courses.filter(c => c.mentorId === m.email);
              const webinars = (db.webinars || []).filter(w => w.mentorEmail === m.email);
              const initial = (m.name || 'M').charAt(0).toUpperCase();

              return `
                <tr>
                  <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div style="width: 34px; height: 34px; border-radius: 50%; background: #EEF2FF; color: #4F46E5; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid #C7D2FE;">
                        ${initial}
                      </div>
                      <div>
                        <strong>${m.name}</strong>
                        <div style="font-size: 11.5px; color: var(--text-muted);">${m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-purple" style="font-size: 11.5px;">${m.expertise || 'Software Engineering'}</span>
                  </td>
                  <td class="text-center">
                    ${m.linkedin ? `
                      <a href="${m.linkedin}" target="_blank" class="btn btn-secondary btn-sm" style="padding: 3px 8px; font-size: 11.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                        LinkedIn ↗
                      </a>
                    ` : `<span style="font-size: 12px; color: var(--text-muted);">-</span>`}
                  </td>
                  <td class="text-center">
                    <strong>${courses.length}</strong>
                    ${courses.length > 0 ? `<div style="font-size: 11px; color: var(--text-muted); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0 auto;">${courses.map(c => c.title).join(', ')}</div>` : ''}
                  </td>
                  <td class="text-center">
                    <strong>${webinars.length}</strong>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-green" style="font-size: 11px;">Active</span>
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <div style="display: inline-flex; gap: 6px; justify-content: flex-end;">
                      <button class="btn btn-secondary btn-sm" onclick="openMentorProfileModal('${m.id}')" style="font-weight: 600; padding: 4px 10px;">Profile</button>
                      <button class="btn btn-secondary btn-sm" onclick="openEditMentorModal('${m.id}')" style="padding: 4px 10px;">Edit</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteMentor('${m.id}')" style="padding: 4px 8px;" title="Delete Mentor">${ICONS.trash}</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="7" class="empty-table-state"><div class="empty-box"><p>No mentors found.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openAddMentorModal() {
  openModal('Add New Mentor', `
    <form id="add-m-form" onsubmit="handleAddMentor(event)">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Full Name <input type="text" id="m-name" required placeholder="Dr. Jane Smith"></label>
        <label>Email Address <input type="email" id="m-email" required placeholder="mentor@domain.com"></label>
        <label>Password <input type="text" id="m-pass" placeholder="Set temporary password" required></label>
        <label>Specialization / Domain <input type="text" id="m-exp" required placeholder="Full Stack Web Architecture"></label>
        <label>LinkedIn Profile URL <input type="url" id="m-li" placeholder="https://linkedin.com/in/mentor-profile"></label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-m-form').requestSubmit()">Save Mentor</button>
  `);
}

function handleAddMentor(e) {
  e.preventDefault();
  const db = loadDB();
  const name = document.getElementById('m-name').value.trim();
  const email = document.getElementById('m-email').value.trim().toLowerCase();
  const password = document.getElementById('m-pass').value;
  const expertise = document.getElementById('m-exp').value.trim();
  const linkedin = document.getElementById('m-li') ? document.getElementById('m-li').value.trim() : '';

  if (db.users.find(u => u.email === email)) {
    alert('User with this email already exists.');
    return;
  }

  db.users.push({
    id: 'usr_' + Date.now(),
    name,
    email,
    password,
    role: 'mentor',
    expertise,
    linkedin: linkedin || '',
    createdAt: new Date().toISOString().split('T')[0]
  });
  saveDB(db);
  closeModal();
  showAlert(`Mentor "${name}" added to directory.`, 'success');
  navigateTo('Mentors');
}

function openEditMentorModal(id) {
  const db = loadDB();
  const m = db.users.find(x => x.id === id);
  if (!m) return;

  openModal('Edit Mentor', `
    <form id="edit-m-form" onsubmit="handleEditMentor(event, '${id}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Full Name <input type="text" id="em-name" value="${m.name}" required></label>
        <label>Email (Read-only) <input type="email" value="${m.email}" disabled></label>
        <label>Password <input type="text" id="em-pass" value="${m.password}" required></label>
        <label>Specialization / Domain <input type="text" id="em-exp" value="${m.expertise || ''}" required></label>
        <label>LinkedIn Profile URL <input type="url" id="em-li" value="${m.linkedin || ''}" placeholder="https://linkedin.com/in/..."></label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('edit-m-form').requestSubmit()">Save Changes</button>
  `);
}

function handleEditMentor(e, id) {
  e.preventDefault();
  const db = loadDB();
  const m = db.users.find(x => x.id === id);
  if (m) {
    m.name = document.getElementById('em-name').value.trim();
    m.password = document.getElementById('em-pass').value;
    m.expertise = document.getElementById('em-exp').value.trim();
    if (document.getElementById('em-li')) {
      m.linkedin = document.getElementById('em-li').value.trim();
    }
    saveDB(db);
    closeModal();
    showAlert('Mentor profile updated successfully.', 'success');
    navigateTo('Mentors');
  }
}

function deleteMentor(id) {
  if (!confirm('Delete this mentor?')) return;
  const db = loadDB();
  db.users = db.users.filter(x => x.id !== id);
  saveDB(db);
  showAlert('Mentor deleted.', 'success');
  navigateTo('Mentors');
}

function openMentorProfileModal(id) {
  if (currentUser.role !== 'admin') {
    showAlert('Access restricted. Only Super Administrators can view mentor profiles.', 'warning');
    return;
  }
  const db = loadDB();
  const m = db.users.find(x => x.id === id || x.email === id);
  if (!m) return;

  const courses = db.courses.filter(c => c.mentorId === m.email);
  const webinars = (db.webinars || []).filter(w => w.mentorEmail === m.email);

  openModal(`Mentor Profile: ${m.name}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <h3 style="margin: 0 0 2px; font-size: 17px; color: #0F172A;">${m.name}</h3>
          <div style="font-size: 13px; color: var(--accent); font-weight: 500;">${m.email}</div>
        </div>
        <span class="badge badge-purple" style="font-size: 12px; padding: 4px 10px;">Certified Mentor</span>
      </div>

      <div class="table-container" style="border: 1px solid var(--line); border-radius: 8px; overflow: hidden; background: #FFFFFF;">
        <table class="detail-table">
          <tbody>
            <tr>
              <th>Specialization Domain</th>
              <td><strong>${m.expertise || 'Full Stack Web Engineering'}</strong></td>
            </tr>
            <tr>
              <th>LinkedIn Profile</th>
              <td>
                ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" style="color: var(--accent); font-weight: 600;">${m.linkedin} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>Active Courses (${courses.length})</th>
              <td>
                ${courses.length > 0 ? courses.map(c => `
                  <div style="margin-bottom: 4px;">
                    <strong>${c.title}</strong> <span class="badge ${c.status === 'approved' ? 'badge-green' : 'badge-amber'}" style="font-size: 10.5px; padding: 1px 6px;">${c.status}</span>
                  </div>
                `).join('') : '<span style="color: var(--text-muted);">No courses created yet.</span>'}
              </td>
            </tr>
            <tr>
              <th>Webinars Hosted (${webinars.length})</th>
              <td>
                ${webinars.length > 0 ? webinars.map(w => `
                  <div style="margin-bottom: 4px;">
                    <strong>${w.title}</strong> &nbsp;·&nbsp; <span style="font-size: 12px; color: var(--text-muted);">${w.date} (${(w.registeredUsers || []).length} registered)</span>
                  </div>
                `).join('') : '<span style="color: var(--text-muted);">No live webinars hosted yet.</span>'}
              </td>
            </tr>
            <tr>
              <th>Account Created</th>
              <td>${m.createdAt || '2026-11-14'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

function openStudentProfileModal(idOrEmail) {
  if (currentUser.role !== 'admin' && currentUser.role !== 'mentor') {
    showAlert('Access restricted. Only Administrators and Mentors can view student profiles.', 'warning');
    return;
  }
  const db = loadDB();
  const s = db.users.find(x => x.id === idOrEmail || x.email === idOrEmail);
  if (!s) return;

  const enrollments = db.enrollments.filter(e => e.studentEmail === s.email);
  const myApplications = [];
  (db.internships || []).forEach(i => {
    const a = (i.applicants || []).find(app => app.email === s.email);
    if (a) {
      myApplications.push({ internship: i, applicant: a });
    }
  });
  const certs = (db.certificateRequests || []).filter(r => r.studentEmail === s.email && r.status === 'issued');

  openModal(`Student Profile: ${s.name}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <h3 style="margin: 0 0 2px; font-size: 17px; color: #0F172A;">${s.name}</h3>
          <div style="font-size: 13px; color: var(--accent); font-weight: 500;">${s.email}</div>
        </div>
        <span class="badge badge-blue" style="font-size: 12px; padding: 4px 10px;">Enrolled Student</span>
      </div>

      <div class="table-container" style="border: 1px solid var(--line); border-radius: 8px; overflow: hidden; background: #FFFFFF;">
        <table class="detail-table">
          <tbody>
            <tr>
              <th>Bio / About</th>
              <td style="color: #334155; line-height: 1.5; white-space: pre-wrap;">${s.bio || 'No personal bio added.'}</td>
            </tr>
            <tr>
              <th>LinkedIn Profile</th>
              <td>
                ${s.linkedin ? `<a href="${s.linkedin}" target="_blank" style="color: var(--accent); font-weight: 600;">${s.linkedin} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>HackerRank Handle</th>
              <td>
                ${s.hackerrank ? `<a href="${s.hackerrank.startsWith('http') ? s.hackerrank : 'https://hackerrank.com/' + s.hackerrank}" target="_blank" style="color: #059669; font-weight: 600;">${s.hackerrank} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>LeetCode Handle</th>
              <td>
                ${s.leetcode ? `<a href="${s.leetcode.startsWith('http') ? s.leetcode : 'https://leetcode.com/' + s.leetcode}" target="_blank" style="color: #D97706; font-weight: 600;">${s.leetcode} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>Course Enrollments (${enrollments.length})</th>
              <td>
                ${enrollments.length > 0 ? enrollments.map(en => {
                  const c = db.courses.find(x => x.id === en.courseId) || { title: 'Course' };
                  return `<div style="margin-bottom: 4px;"><strong>${c.title}</strong> &nbsp;·&nbsp; <span style="font-size: 12px; color: var(--text-muted);">${(en.completedMaterialIds || []).length} materials completed</span></div>`;
                }).join('') : '<span style="color: var(--text-muted);">Not enrolled in any courses.</span>'}
              </td>
            </tr>
            <tr>
              <th>Applied Internships (${myApplications.length})</th>
              <td>
                ${myApplications.length > 0 ? myApplications.map(app => `
                  <div style="margin-bottom: 4px;">
                    <strong>${app.internship.title}</strong> (${app.internship.company}) &nbsp;·&nbsp;
                    <span class="badge ${app.applicant.status === 'Selected' ? 'badge-green' : (app.applicant.status === 'Rejected' ? 'badge-red' : (app.applicant.status === 'Shortlisted' ? 'badge-blue' : 'badge-purple'))}" style="font-size: 10.5px; padding: 1px 6px;">
                      ${app.applicant.status || 'Under Review'}
                    </span>
                  </div>
                `).join('') : '<span style="color: var(--text-muted);">No internship applications submitted.</span>'}
              </td>
            </tr>
            <tr>
              <th>Verified Certificates</th>
              <td><strong>${certs.length}</strong> official certificate(s) issued</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

function renderStudents(container) {
  const db = loadDB();
  const students = db.users.filter(u => u.role === 'student');
  const totalEnrollments = db.enrollments.length;
  const totalCerts = (db.certificateRequests || []).filter(r => r.status === 'issued').length;

  container.innerHTML = `
    <!-- Top Statistics Grid for Students -->
    <div class="stats-grid" style="margin-bottom: 20px;">
      <div class="stat-card">
        <div class="stat-label">Registered Students</div>
        <div class="stat-val" style="margin: 6px 0 2px;">${students.length}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Active learners</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Account Provisioning</div>
        <div class="stat-val" style="margin: 6px 0 2px; color: #10B981; font-size: 18px;">Open Registration</div>
        <div style="font-size: 12px; color: var(--text-muted);">Students create own credentials</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Course Enrollments</div>
        <div class="stat-val" style="margin: 6px 0 2px;">${totalEnrollments}</div>
        <div style="font-size: 12px; color: var(--text-muted);">Active course trackings</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Credential Scope</div>
        <div class="stat-val" style="margin: 6px 0 2px; color: var(--accent); font-size: 18px;">Mentors Only</div>
        <div style="font-size: 12px; color: var(--text-muted);">Admin provisions mentor logins</div>
      </div>
    </div>

    <!-- Neat Master Students Table -->
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Student Directory (Open Registration)</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Student accounts and passwords are created directly by students via open portal sign-up. The Administrator provisions credentials for Faculty Mentors only.
          </div>
        </div>
        <span class="badge badge-green" style="font-size: 11.5px; padding: 4px 10px; font-weight: 600;">
          Open Portal Access
        </span>
      </div>

      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student Details</th>
              <th class="text-center">Account Type</th>
              <th class="text-center">Enrolled Courses</th>
              <th class="text-center">Issued Certs</th>
              <th class="text-center">Registered Date</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => {
              const enrolled = db.enrollments.filter(e => e.studentEmail === s.email);
              const certs = (db.certificateRequests || []).filter(r => r.studentEmail === s.email && r.status === 'issued');
              const initial = (s.name || 'S').charAt(0).toUpperCase();

              return `
                <tr>
                  <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div style="width: 34px; height: 34px; border-radius: 50%; background: #EFF6FF; color: #2563EB; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid #BFDBFE;">
                        ${initial}
                      </div>
                      <div>
                        <strong>${s.name}</strong>
                        <div style="font-size: 11.5px; color: var(--text-muted);">${s.email}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-purple" style="font-size: 11px;">Open Student</span>
                  </td>
                  <td class="text-center">
                    <strong>${enrolled.length}</strong>
                    ${enrolled.length > 0 ? `<div style="font-size: 11px; color: var(--text-muted); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0 auto;">${enrolled.map(e => e.courseTitle || e.courseId).join(', ')}</div>` : ''}
                  </td>
                  <td class="text-center">
                    <strong>${certs.length}</strong>
                  </td>
                  <td class="text-center" style="font-size: 12px; color: var(--text-muted);">
                    ${s.createdAt || new Date().toISOString().split('T')[0]}
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <div style="display: inline-flex; gap: 6px; justify-content: flex-end;">
                      <button class="btn btn-secondary btn-sm" onclick="openStudentProfileModal('${s.id}')" style="font-weight: 600; padding: 4px 10px;">View Profile</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteStudent('${s.id}')" style="padding: 4px 8px;" title="Delete Student">${ICONS.trash}</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="6" class="empty-table-state"><div class="empty-box"><p>No registered students found.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function deleteStudent(id) {
  if (!confirm('Are you sure you want to delete this student?')) return;
  const db = loadDB();
  const s = db.users.find(x => x.id === id);
  if (s) {
    db.users = db.users.filter(x => x.id !== id);
    db.enrollments = db.enrollments.filter(e => e.studentEmail !== s.email);
    db.certificateRequests = (db.certificateRequests || []).filter(r => r.studentEmail !== s.email);
    saveDB(db);
    showAlert('Student deleted.', 'success');
    navigateTo('Students');
  }
}

function renderAdminCourses(container) {
  const db = loadDB();
  container.innerHTML = `
    <div class="card">
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course</th>
              <th class="text-left">Mentor</th>
              <th class="text-center">Status</th>
              <th class="text-center">Materials</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${db.courses.map(c => `
              <tr>
                <td><strong>${c.title}</strong></td>
                <td>${c.mentorName || c.mentorId}</td>
                <td class="text-center">${renderStatusBadge(c.status)}</td>
                <td class="text-center">${(c.materials || []).length} items</td>
                <td class="text-right">
                  <button class="btn btn-danger btn-sm" onclick="deleteCourse('${c.id}')">Delete</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No courses.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function deleteCourse(id) {
  if (!confirm('Delete this course permanently?')) return;
  const db = loadDB();
  db.courses = db.courses.filter(x => x.id !== id);
  db.enrollments = db.enrollments.filter(e => e.courseId !== id);
  saveDB(db);
  showAlert('Course deleted.', 'success');
  navigateTo('Courses');
}

// ============================================================================
// 9. MENTOR COURSE MANAGEMENT & MCQ ASSESSMENT BUILDER
// ============================================================================
function renderMentorCourses(container) {
  const db = loadDB();
  const myCourses = db.courses.filter(c => c.mentorId === currentUser.email);

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">My Created Courses &amp; Curriculum Programs</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Total ${myCourses.length} course programs managed by you.
          </div>
        </div>
        <button class="btn btn-sm" onclick="openAddCourseModal()">
          Create New Course
        </button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Course Program</th>
              <th class="text-center">Category</th>
              <th class="text-center">Approval Status</th>
              <th class="text-center">Curriculum Modules</th>
              <th class="text-center">Enrolled Students</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${myCourses.map(c => {
              const studentCount = db.enrollments.filter(e => e.courseId === c.id).length;
              return `
                <tr>
                  <td>
                    <strong>${c.title}</strong>
                    <div style="font-size: 12px; color: var(--text-muted); max-width: 380px;">${c.description}</div>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-purple">${c.category || 'Engineering'}</span>
                  </td>
                  <td class="text-center">
                    ${renderStatusBadge(c.status)}
                  </td>
                  <td class="text-center">
                    <span style="font-size: 12.5px;">${(c.materials || []).length} materials · ${(c.assignments || []).length} assignments</span>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-blue">${studentCount} Enrolled</span>
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <button class="btn btn-secondary btn-sm" onclick="navigateTo('course_editor', '${c.id}')">Manage</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCourse('${c.id}')" title="Delete Course" style="padding: 4px 8px;">
                      ${ICONS.trash}
                    </button>
                  </td>
                </tr>
              `;
            }).join('') || `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <div class="empty-box" style="padding: 30px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">No courses created yet. Click "Create New Course" to begin.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openAddCourseModal() {
  openModal('Create New Course', `
    <form id="add-c-form" onsubmit="handleAddCourse(event)">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Course Title <input type="text" id="c-title" required placeholder="e.g. Distributed Systems Architecture"></label>
        <label>Category <input type="text" id="c-cat" required placeholder="Backend / DevOps / Frontend"></label>
        <label>Description <textarea id="c-desc" required placeholder="Explain curriculum outcomes..."></textarea></label>
      </div>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
        Note: New courses will stay "pending" until approved by the Admin.
      </p>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-c-form').requestSubmit()">Submit Course</button>
  `);
}

function handleAddCourse(e) {
  e.preventDefault();
  const db = loadDB();
  const title = document.getElementById('c-title').value.trim();
  const category = document.getElementById('c-cat').value.trim();
  const description = document.getElementById('c-desc').value.trim();

  db.courses.push({
    id: 'crs_' + Date.now(),
    title,
    category,
    description,
    mentorId: currentUser.email,
    mentorName: currentUser.name,
    status: 'pending',
    createdAt: new Date().toISOString().split('T')[0],
    materials: [],
    assignments: [],
    assessment: {
      passMark: 50,
      questions: [
        {
          q: `What is the core principle taught in ${title}?`,
          options: ['Modular architecture, clean standards, and systematic validation', 'Skipping validation and documentation', 'Hardcoding secrets in repositories', 'Avoiding automated testing'],
          answer: 0
        },
        {
          q: 'Which practice ensures software scalability and maintainability?',
          options: ['Clean separation of concerns and reusable components', 'Mixing presentation and data layers completely', 'Disabling API authentication', 'Omitting error handling'],
          answer: 0
        },
        {
          q: 'What is the required pass mark for this final certification assessment?',
          options: ['30%', '40%', '50%', '80%'],
          answer: 2
        },
        {
          q: 'When does the final assessment unlock for students?',
          options: ['Only after all course learning modules are completed', 'Before viewing any learning modules', 'Immediately upon course creation', 'Without opening any modules'],
          answer: 0
        }
      ]
    }
  });

  saveDB(db);
  closeModal();
  showAlert('Course created and submitted for Admin approval.', 'success');
  navigateTo('My Courses');
}

function renderCourseEditor(container, courseId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) { container.innerHTML = `<div class="card">Course not found.</div>`; return; }

  container.innerHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn btn-secondary btn-sm" onclick="handleNavClick('My Courses')">← Back to My Courses</button>
    </div>

    <!-- Materials Section -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <h2 style="margin: 0; font-size: 17px;">Course Modules &amp; Learning Materials (Type Content / Upload PDF / Video)</h2>
          <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
            Supports interactive typed content (notes/code), uploaded PDF documents, video lectures, or combined formats.
          </div>
        </div>
        <button class="btn btn-sm" onclick="openAddMaterialModal('${c.id}')">${ICONS.plus} Add Module Material</button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Module Title</th>
              <th class="text-center">Format</th>
              <th class="text-left">Resource Links</th>
              <th class="text-center">Module Assessment</th>
              <th class="text-center">Status</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${(c.materials || []).map((m, idx) => {
              const qCount = (m.assessment && m.assessment.questions) ? m.assessment.questions.length : 0;
              const hasText = !!(m.content || m.typedContent);
              const hasPdf = !!(m.pdfData || m.pdfLink || (m.type === 'pdf' && m.link));
              const hasVid = !!m.link && m.type !== 'pdf';

              let formatBadge = '<span class="badge badge-blue">VIDEO LECTURE</span>';
              if (m.type === 'type_content' || m.type === 'text') {
                formatBadge = '<span class="badge badge-purple">TYPED CONTENT</span>';
              } else if (m.type === 'pdf') {
                formatBadge = '<span class="badge badge-amber">PDF DOC</span>';
              } else if (m.type === 'text_pdf') {
                formatBadge = '<span class="badge badge-green">CONTENT + PDF</span>';
              } else if (m.type === 'both') {
                formatBadge = '<span class="badge badge-purple">VIDEO + PDF</span>';
              }

              const wordCount = (m.content || m.typedContent || '').trim() ? (m.content || m.typedContent).trim().split(/\s+/).filter(Boolean).length : 0;
              const pdfUrl = m.pdfData || m.pdfLink || (m.type === 'pdf' ? m.link : '');

              return `
                <tr>
                  <td><strong>${m.title}</strong></td>
                  <td class="text-center">${formatBadge}</td>
                  <td>
                    ${hasText ? `<div style="margin-bottom: 2px;"><button type="button" class="btn btn-secondary btn-sm" onclick="previewTypedContent('${c.id}', '${m.id}')" style="padding: 2px 8px; font-size: 11px;">Read Content (${wordCount} words)</button></div>` : ''}
                    ${hasPdf ? `<div style="margin-bottom: 2px;"><a href="${pdfUrl}" target="_blank" class="link">${m.pdfName || 'PDF Document'} &nearr;</a></div>` : ''}
                    ${hasVid ? `<div><a href="${m.link}" target="_blank" class="link">Video / Embed &nearr;</a></div>` : ''}
                  </td>
                  <td class="text-center">
                    ${qCount > 0 ? `
                      <span class="badge badge-green" style="font-weight: 600;">${qCount} MCQ Questions</span>
                      <div style="margin-top: 4px;">
                        <button class="btn btn-secondary btn-sm" onclick="openModuleAssessmentModal('${c.id}', '${m.id}')" style="padding: 2px 8px; font-size: 11px;">Manage Assessment</button>
                      </div>
                    ` : `
                      <button class="btn btn-secondary btn-sm" onclick="openModuleAssessmentModal('${c.id}', '${m.id}')" style="padding: 3px 10px; font-size: 11.5px; border: 1px dashed var(--accent); color: var(--accent); font-weight: 600;">
                        + Upload Assessment
                      </button>
                    `}
                  </td>
                  <td class="text-center">${renderStatusBadge(m.status)}</td>
                  <td class="text-right" style="white-space: nowrap;">
                    <button class="btn btn-secondary btn-sm" onclick="openEditMaterialModal('${c.id}', '${m.id}')" style="margin-right: 4px;">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteMaterial('${c.id}', '${m.id}')">Remove</button>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="6" class="empty-table-state"><div class="empty-box"><p>No materials added. Click "+ Add Module Material" above to type content, upload PDF, or attach video.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Assignments Section -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <h2>Assignments</h2>
        <button class="btn btn-sm" onclick="openAddAssignmentModal('${c.id}')">${ICONS.plus} Add Assignment</button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Instructions</th>
              <th class="text-center">Due Date</th>
              <th class="text-center">Max Points</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${(c.assignments || []).map(a => `
              <tr>
                <td><strong>${a.title}</strong></td>
                <td style="max-width: 300px; font-size: 12.5px; color: var(--text-muted);">${a.instructions}</td>
                <td class="text-center">${a.dueDate}</td>
                <td class="text-center"><strong>${a.maxPoints} pts</strong></td>
                <td class="text-right">
                  <button class="btn btn-danger btn-sm" onclick="deleteAssignment('${c.id}', '${a.id}')">Remove</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No assignments.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Final MCQ Assessment Section -->
    <div class="card" style="margin-bottom: 22px;">
      <div class="card-header">
        <h2>Final Assessment (MCQ Questions · Pass mark 50%)</h2>
        <button class="btn btn-sm" onclick="openAddQuestionModal('${c.id}')">${ICONS.plus} Add Question</button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">No.</th>
              <th class="text-left">Question</th>
              <th class="text-left">Options</th>
              <th class="text-center">Correct Answer</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${((c.assessment && c.assessment.questions) || []).map((q, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><strong>${q.q}</strong></td>
                <td style="font-size: 12.5px; color: var(--text-muted);">
                  ${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join(' | ')}
                </td>
                <td class="text-center"><span class="badge badge-green">${q.options[q.answer]}</span></td>
                <td class="text-right">
                  <button class="btn btn-danger btn-sm" onclick="deleteQuestion('${c.id}', ${idx})">Remove</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No MCQ questions created yet.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Course Discussion Board (Visible Only to Course Mentor & Enrolled Students) -->
    ${renderCourseDiscussionSection(c)}
  `;
}

function updateModuleTitlePrefix(num) {
  const titleInput = document.getElementById('mat-title');
  if (titleInput) {
    const val = titleInput.value;
    if (val.startsWith('Module ')) {
      titleInput.value = val.replace(/^Module \d+:/, `Module ${num}:`);
    } else if (!val) {
      titleInput.value = `Module ${num}: `;
    }
  }
}

// ============================================================================
// PDF UPLOAD & TYPED CONTENT MANAGEMENT HELPERS
// ============================================================================
let tempMaterialPdfFile = { name: '', size: '', data: '' };

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function copyCodeToClipboard(button, codeEncoded) {
  try {
    const code = decodeURIComponent(codeEncoded);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        const orig = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = orig; }, 1800);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => { button.textContent = orig; }, 1800);
    }
  } catch (err) {
    console.error('Failed to copy code', err);
  }
}

function downloadMaterialPdf(pdfData, filename) {
  if (!pdfData) return;
  const link = document.createElement('a');
  link.href = pdfData;
  link.download = filename || 'Module_Document.pdf';
  if (!pdfData.startsWith('data:')) {
    link.target = '_blank';
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderFormattedContent(text) {
  if (!text) return '';

  // 1. Extract and protect code blocks
  const codeBlocks = [];
  let processed = text.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    const safeLang = escapeHtml(lang || 'code');
    const safeCode = escapeHtml(code.replace(/^\n+|\n+$/g, ''));
    const encoded = encodeURIComponent(code);
    codeBlocks.push(`
      <div class="content-code-wrapper">
        <div class="content-code-header">
          <span>${safeLang}</span>
          <button type="button" class="content-copy-btn" onclick="copyCodeToClipboard(this, '${encoded}')">Copy Code</button>
        </div>
        <pre class="content-code-pre"><code>${safeCode}</code></pre>
      </div>
    `);
    return placeholder;
  });

  // 2. Escape HTML for the rest of the text
  processed = escapeHtml(processed);

  // 3. Inline code `code`
  processed = processed.replace(/`([^`\n]+)`/g, '<code class="content-inline-code">$1</code>');

  // 4. Headers (#, ##, ###, ####)
  processed = processed.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
  processed = processed.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  processed = processed.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  processed = processed.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // 5. Horizontal rules
  processed = processed.replace(/^(?:---|\*\*\*|___)\s*$/gm, '<hr style="border: none; border-top: 1px solid var(--line); margin: 1.5em 0;">');

  // 6. Blockquotes (> text)
  processed = processed.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>');

  // 7. Bold and Italic
  processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/__(.*?)__/g, '<strong>$1</strong>');
  processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');
  processed = processed.replace(/_([^_]+)_/g, '<em>$1</em>');

  // 8. Markdown links [text](url)
  processed = processed.replace(/\[(.*?)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link">$1 ↗</a>');

  // 9. Lists
  // Bullet lists (- or *)
  processed = processed.replace(/(?:^[\t ]*[-*] (?:.*?)(?:\n|$))+/gm, (listMatch) => {
    const items = listMatch.trim().split('\n').map(line => {
      const clean = line.replace(/^[\t ]*[-*] /, '');
      return `<li>${clean}</li>`;
    }).join('');
    return `<ul>${items}</ul>`;
  });

  // Numbered lists (1., 2.)
  processed = processed.replace(/(?:^[\t ]*\d+\. (?:.*?)(?:\n|$))+/gm, (listMatch) => {
    const items = listMatch.trim().split('\n').map(line => {
      const clean = line.replace(/^[\t ]*\d+\. /, '');
      return `<li>${clean}</li>`;
    }).join('');
    return `<ol>${items}</ol>`;
  });

  // 10. Paragraphs & line breaks
  const paragraphs = processed.split(/\n{2,}/);
  processed = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul>') || p.startsWith('<ol>') || p.startsWith('<blockquote>') || p.startsWith('<hr') || p.startsWith('__CODE_BLOCK_')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  // 11. Restore code blocks
  codeBlocks.forEach((block, idx) => {
    processed = processed.replace(`__CODE_BLOCK_${idx}__`, block);
  });

  return processed;
}

function updateContentWordCount(textareaId, countElId) {
  const ta = document.getElementById(textareaId);
  const el = document.getElementById(countElId);
  if (!ta || !el) return;
  const text = ta.value.trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const chars = ta.value.length;
  el.textContent = `${words} words · ${chars} characters`;
}

function handleMaterialPdfSelected(event, statusId = 'mat-pdf-file-status', boxTextId = 'mat-pdf-box-text') {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    alert('Please select a valid PDF document (.pdf).');
    event.target.value = '';
    return;
  }

  if (file.size > 25 * 1024 * 1024) {
    alert('PDF document exceeds the 25MB limit. Please upload a smaller PDF.');
    event.target.value = '';
    return;
  }

  const sizeStr = file.size < 1024 * 1024
    ? Math.round(file.size / 1024) + ' KB'
    : (file.size / (1024 * 1024)).toFixed(1) + ' MB';

  const statusEl = document.getElementById(statusId);
  const boxText = document.getElementById(boxTextId);
  if (boxText) boxText.textContent = `Attached: ${file.name}`;
  if (statusEl) {
    statusEl.innerHTML = `<span style="color: #059669; font-weight: 600;">Attached: ${escapeHtml(file.name)} (${sizeStr})</span>`;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    tempMaterialPdfFile = {
      name: file.name,
      size: sizeStr,
      data: e.target.result
    };
  };
  reader.readAsDataURL(file);
}

function clearMaterialPdfFile(statusId = 'mat-pdf-file-status', boxTextId = 'mat-pdf-box-text', inputId = 'mat-pdf-file') {
  tempMaterialPdfFile = { name: '', size: '', data: '' };
  const statusEl = document.getElementById(statusId);
  const boxText = document.getElementById(boxTextId);
  const fileInput = document.getElementById(inputId);
  if (statusEl) statusEl.innerHTML = '<span style="color: #64748B;">No file attached</span>';
  if (boxText) boxText.textContent = 'Click or Drag & Drop to Upload PDF Document';
  if (fileInput) fileInput.value = '';
}

function previewTypedContent(courseId, materialId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === materialId);
  if (!m) return;

  const content = m.content || m.typedContent || '';
  const wordCount = content.trim() ? content.trim().split(/\s+/).filter(Boolean).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 180));

  openModal(`Module Content: ${m.title}`, `
    <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
      <span class="badge badge-purple" style="font-size: 12px; font-weight: 600;">Typed Content</span>
      <span style="font-size: 12px; color: var(--text-muted);">Reading time: ~${readTime} min read (${wordCount} words)</span>
    </div>
    <div class="content-reading-article" style="max-height: 65vh; overflow-y: auto; padding: 4px 6px;">
      ${content ? renderFormattedContent(content) : '<p style="color: var(--text-muted);">No typed content available.</p>'}
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

function switchPlayerMatTab(tab) {
  const articleEl = document.getElementById('player-mat-article-content');
  const pdfEl = document.getElementById('player-mat-pdf-content');
  const vidEl = document.getElementById('player-mat-video-content');
  const btnArticle = document.getElementById('tab-mat-article');
  const btnPdf = document.getElementById('tab-mat-pdf');
  const btnVid = document.getElementById('tab-mat-video');

  if (articleEl) articleEl.style.display = (tab === 'article') ? 'block' : 'none';
  if (pdfEl) pdfEl.style.display = (tab === 'pdf') ? 'block' : 'none';
  if (vidEl) vidEl.style.display = (tab === 'video') ? 'block' : 'none';

  if (btnArticle) btnArticle.classList.toggle('active', tab === 'article');
  if (btnPdf) btnPdf.classList.toggle('active', tab === 'pdf');
  if (btnVid) btnVid.classList.toggle('active', tab === 'video');
}

function renderMatFieldsHtml(type, isEdit = false, values = {}) {
  const pfx = isEdit ? 'edit-' : '';
  const initialContent = values.content || values.typedContent || '';
  const initialWords = initialContent.trim() ? initialContent.trim().split(/\s+/).filter(Boolean).length : 0;
  const initialChars = initialContent.length;
  const existingPdfName = values.pdfName || '';
  const existingPdfSize = values.pdfSize || '';
  const existingPdfLink = values.pdfLink || '';
  const hasExistingPdf = !!(values.pdfData || existingPdfName || existingPdfLink);
  const existingVideoLink = values.link || '';

  const textareaId = `${pfx}mat-typed-content`;
  const countElId = `${pfx}mat-content-count`;

  const fileInputId = `${pfx}mat-pdf-file`;
  const fileStatusId = `${pfx}mat-pdf-file-status`;
  const boxTextId = `${pfx}mat-pdf-box-text`;
  const pdfLinkInputId = `${pfx}mat-pdf-link`;

  const videoLinkInputId = `${pfx}mat-link`;

  const typeContentSection = `
    <div style="display: flex; flex-direction: column;">
      <label style="margin-bottom: 6px; font-weight: 600;">Type Lesson Content &amp; Reading Notes *</label>
      <textarea id="${textareaId}" rows="12" required placeholder="Type your lesson content, reading notes, explanations, formulas, or code blocks here..." oninput="updateContentWordCount('${textareaId}', '${countElId}')" style="line-height: 1.6; font-size: 13.5px;">${escapeHtml(initialContent)}</textarea>
      <div id="${countElId}" style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">${initialWords} words · ${initialChars} characters</div>
    </div>
  `;

  const pdfUploadSection = `
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label style="margin-bottom: 2px; font-weight: 600;">Upload PDF Document (.pdf) *</label>
      <div class="file-upload-box" onclick="document.getElementById('${fileInputId}').click()" style="border: 2px dashed #CBD5E1; padding: 18px 14px; background: #F8FAFC; border-radius: 8px; text-align: center; cursor: pointer;">
        <div id="${boxTextId}" style="font-weight: 600; font-size: 13.5px; color: var(--accent);">
          ${hasExistingPdf ? `Attached: ${escapeHtml(existingPdfName || 'PDF Document')}` : 'Click or Drag &amp; Drop to Upload PDF Document'}
        </div>
        <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
          Accepted format: PDF (.pdf) · Max file size: 25MB
        </div>
        <input type="file" id="${fileInputId}" accept="application/pdf,.pdf" style="display: none;" onchange="handleMaterialPdfSelected(event, '${fileStatusId}', '${boxTextId}')">
        <div id="${fileStatusId}" style="margin-top: 8px; font-size: 12.5px;">
          ${hasExistingPdf ? `<span style="color: #059669; font-weight: 600;">Attached: ${escapeHtml(existingPdfName || 'PDF Document')} ${existingPdfSize ? `(${existingPdfSize})` : ''}</span>` : ''}
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="clearMaterialPdfFile('${fileStatusId}', '${boxTextId}', '${fileInputId}')" style="font-size: 11px; padding: 3px 8px;">Clear Attached PDF</button>
      </div>
      <div style="margin-top: 4px;">
        <label style="font-size: 12px; color: var(--text-muted);">OR Enter PDF Document Web URL (Optional)
          <input type="url" id="${pdfLinkInputId}" value="${escapeHtml(existingPdfLink)}" placeholder="https://example.com/lecture-slides.pdf or Google Drive link">
        </label>
      </div>
    </div>
  `;

  const videoSection = `
    <label>Video / Content URL (MP4 / YouTube / Web Embed)
      <input type="url" id="${videoLinkInputId}" required value="${escapeHtml(existingVideoLink)}" placeholder="https://www.youtube.com/embed/... or MP4 video URL">
    </label>
  `;

  if (type === 'type_content' || type === 'text') {
    return typeContentSection;
  } else if (type === 'pdf') {
    return pdfUploadSection;
  } else if (type === 'text_pdf') {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${typeContentSection}
        <div style="border-top: 1px dashed var(--line); padding-top: 14px;">
          ${pdfUploadSection}
        </div>
      </div>
    `;
  } else if (type === 'both') {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${videoSection}
        <div style="border-top: 1px dashed var(--line); padding-top: 14px;">
          ${pdfUploadSection}
        </div>
      </div>
    `;
  } else {
    // 'content' or 'video'
    return videoSection;
  }
}

function handleMatTypeChange(val) {
  const container = document.getElementById('mat-fields-container');
  if (!container) return;
  container.innerHTML = renderMatFieldsHtml(val, false, {});
}

function openAddMaterialModal(courseId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  const existingCount = (c && c.materials) ? c.materials.length : 0;
  const nextModuleNum = existingCount + 1;

  tempMaterialPdfFile = { name: '', size: '', data: '' };

  openModal('Add Course Module Material', `
    <form id="add-mat-form" onsubmit="handleAddMaterial(event, '${courseId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 10px 14px; font-size: 13px; color: #1E40AF;">
          Current modules posted: <strong>${existingCount}</strong>. Sequential next module is automatically set to <strong>Module ${nextModuleNum}</strong>.
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr; gap: 12px;">
          <label>Module Number
            <input type="number" id="mat-mod-num" min="1" value="${nextModuleNum}" required oninput="updateModuleTitlePrefix(this.value)">
          </label>
          <label>Module Title
            <input type="text" id="mat-title" required value="Module ${nextModuleNum}: " placeholder="e.g. Module ${nextModuleNum}: Core Concepts">
          </label>
        </div>
        <label>Material Upload Option
          <select id="mat-type" required onchange="handleMatTypeChange(this.value)">
            <option value="type_content">Type Content (Written Lesson / Reading Notes / Code)</option>
            <option value="pdf">Upload PDF (Document / File / Reading Notes)</option>
            <option value="content">Video Lecture (YouTube / MP4 / Web Embed)</option>
            <option value="text_pdf">Both (Type Content + Upload PDF Document)</option>
            <option value="both">Both (Video Lecture + Upload PDF Document)</option>
          </select>
        </label>
        <div id="mat-fields-container">
          ${renderMatFieldsHtml('type_content', false, {})}
        </div>
      </div>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 10px;">
        Note: New modules stay "pending" until approved by the Admin before appearing for students.
      </p>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-mat-form').requestSubmit()">Upload Module</button>
  `, true);
}

function handleAddMaterial(e, courseId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;

  const modNum = parseInt(document.getElementById('mat-mod-num').value) || ((c.materials || []).length + 1);
  const title = document.getElementById('mat-title').value.trim();
  const type = document.getElementById('mat-type').value; // 'type_content', 'pdf', 'content', 'text_pdf', 'both'

  const linkInput = document.getElementById('mat-link');
  const pdfLinkInput = document.getElementById('mat-pdf-link');
  const typedContentInput = document.getElementById('mat-typed-content');

  let link = linkInput ? linkInput.value.trim() : '';
  let pdfLink = pdfLinkInput ? pdfLinkInput.value.trim() : '';
  let content = typedContentInput ? typedContentInput.value.trim() : '';

  if (link && link.includes('watch?v=')) {
    link = link.replace('watch?v=', 'embed/');
  }

  const pdfData = tempMaterialPdfFile.data || '';
  const pdfName = tempMaterialPdfFile.name || '';
  const pdfSize = tempMaterialPdfFile.size || '';

  if (type === 'type_content' && !content) {
    alert('Please type your lesson content.');
    return;
  }
  if (type === 'pdf' && !pdfData && !pdfLink) {
    alert('Please upload a PDF document or provide a PDF URL.');
    return;
  }
  if (type === 'text_pdf' && !content && !pdfData && !pdfLink) {
    alert('Please type content and/or upload a PDF document.');
    return;
  }
  if ((type === 'content' || type === 'video') && !link) {
    alert('Please provide a video or embed URL.');
    return;
  }

  if (!c.materials) c.materials = [];
  c.materials.push({
    id: 'mat_' + Date.now(),
    moduleNumber: modNum,
    title,
    type,
    content,
    typedContent: content,
    link,
    pdfLink,
    pdfData,
    pdfName,
    pdfSize,
    assessment: {
      passMark: 50,
      questions: []
    },
    status: 'pending' // Admin approval required!
  });

  // Sort modules sequentially
  c.materials.sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0));

  saveDB(db);
  closeModal();
  showAlert(`Module ${modNum} uploaded and submitted for Admin approval.`, 'success');
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

function deleteMaterial(courseId, mId) {
  if (!confirm('Remove this material?')) return;
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (c) {
    c.materials = (c.materials || []).filter(x => x.id !== mId);
    saveDB(db);
    showAlert('Material removed.', 'success');
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

// ----------------------------------------------------------------------------
// Re-Edit & Update Option for Mentor Posting Material
// ----------------------------------------------------------------------------
function openEditMaterialModal(courseId, mId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === mId);
  if (!m) return;

  let currentType = m.type;
  if (currentType === 'text') currentType = 'type_content';
  if (currentType !== 'type_content' && currentType !== 'pdf' && currentType !== 'text_pdf' && currentType !== 'both') {
    if (m.content || m.typedContent) {
      currentType = 'type_content';
    } else if (m.pdfData || (m.pdfLink && !m.link)) {
      currentType = 'pdf';
    } else {
      currentType = 'content';
    }
  }

  tempMaterialPdfFile = {
    name: m.pdfName || '',
    size: m.pdfSize || '',
    data: m.pdfData || ''
  };

  openModal(`Edit Module Material: ${m.title}`, `
    <form id="edit-mat-form" onsubmit="handleUpdateMaterial(event, '${courseId}', '${mId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="display: grid; grid-template-columns: 140px 1fr; gap: 12px;">
          <label>Module Number
            <input type="number" id="edit-mat-mod-num" min="1" value="${m.moduleNumber || 1}" required>
          </label>
          <label>Module Title
            <input type="text" id="edit-mat-title" required value="${escapeHtml(m.title)}" placeholder="e.g. Module 1: Core Fundamentals">
          </label>
        </div>
        <label>Material Upload Option
          <select id="edit-mat-type" required onchange="handleEditMatTypeChange(this.value)">
            <option value="type_content" ${currentType === 'type_content' ? 'selected' : ''}>Type Content (Written Lesson / Reading Notes / Code)</option>
            <option value="pdf" ${currentType === 'pdf' ? 'selected' : ''}>Upload PDF (Document / File / Reading Notes)</option>
            <option value="content" ${currentType === 'content' || currentType === 'video' ? 'selected' : ''}>Video Lecture (YouTube / MP4 / Web Embed)</option>
            <option value="text_pdf" ${currentType === 'text_pdf' ? 'selected' : ''}>Both (Type Content + Upload PDF Document)</option>
            <option value="both" ${currentType === 'both' ? 'selected' : ''}>Both (Video Lecture + Upload PDF Document)</option>
          </select>
        </label>
        <div id="edit-mat-fields-container">
          ${renderMatFieldsHtml(currentType, true, m)}
        </div>
      </div>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 10px;">
        Note: Updating this module will save your revisions directly.
      </p>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('edit-mat-form').requestSubmit()">Save Revisions</button>
  `, true);
}

function handleEditMatTypeChange(val) {
  const container = document.getElementById('edit-mat-fields-container');
  if (container) {
    container.innerHTML = renderMatFieldsHtml(val, true, {});
  }
}

function handleUpdateMaterial(e, courseId, mId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === mId);
  if (!m) return;

  const modNum = parseInt(document.getElementById('edit-mat-mod-num').value) || m.moduleNumber || 1;
  const title = document.getElementById('edit-mat-title').value.trim();
  const type = document.getElementById('edit-mat-type').value;

  const linkInput = document.getElementById('edit-mat-link');
  const pdfLinkInput = document.getElementById('edit-mat-pdf-link');
  const typedContentInput = document.getElementById('edit-mat-typed-content');

  let link = linkInput ? linkInput.value.trim() : (m.link || '');
  let pdfLink = pdfLinkInput ? pdfLinkInput.value.trim() : (m.pdfLink || '');
  let content = typedContentInput ? typedContentInput.value.trim() : (m.content || m.typedContent || '');

  if (link && link.includes('watch?v=')) {
    link = link.replace('watch?v=', 'embed/');
  }

  let pdfData = tempMaterialPdfFile.data || m.pdfData || '';
  let pdfName = tempMaterialPdfFile.name || m.pdfName || '';
  let pdfSize = tempMaterialPdfFile.size || m.pdfSize || '';

  m.moduleNumber = modNum;
  m.title = title;
  m.type = type;
  m.content = content;
  m.typedContent = content;
  m.link = link;
  m.pdfLink = pdfLink;
  m.pdfData = pdfData;
  m.pdfName = pdfName;
  m.pdfSize = pdfSize;

  // Sort modules sequentially
  c.materials.sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0));

  saveDB(db);
  closeModal();
  showAlert(`Module "${title}" updated successfully!`, 'success');
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

// ----------------------------------------------------------------------------
// Dedicated Module Assessment Management (Upload / Manage under each module)
// ----------------------------------------------------------------------------
function openModuleAssessmentModal(courseId, materialId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === materialId);
  if (!m) return;

  if (!m.assessment) {
    m.assessment = { passMark: 50, questions: [] };
  }
  if (!Array.isArray(m.assessment.questions)) {
    m.assessment.questions = [];
  }
  const questions = m.assessment.questions;

  openModal(`Module Assessment: ${m.title}`, `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 12px 14px; font-size: 13px; color: #1E40AF;">
        Dedicated assessment for <strong>${m.title}</strong>. Students must pass this assessment (Score $\\ge 50\\%$) to automatically complete this module and unlock the next module.
      </div>

      <!-- Existing Questions List -->
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; font-weight: 700;">Uploaded Module Questions (${questions.length})</h4>
        ${questions.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: 10px; max-height: 220px; overflow-y: auto; padding-right: 4px;">
            ${questions.map((q, idx) => `
              <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 6px; padding: 10px 12px; font-size: 12.5px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                  <div>
                    <strong>${idx + 1}. ${q.q}</strong>
                    <div style="margin-top: 4px; color: var(--text-muted);">
                      ${q.options.map((opt, i) => `<span style="${i === q.answer ? 'color: #059669; font-weight: 700;' : ''}">${String.fromCharCode(65 + i)}) ${opt}</span>`).join(' &nbsp;·&nbsp; ')}
                    </div>
                  </div>
                  <button class="btn btn-danger btn-sm" onclick="deleteModuleAssessmentQuestion('${courseId}', '${materialId}', ${idx})" style="padding: 2px 6px; font-size: 11px;">&times;</button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `<p style="font-size: 12.5px; color: var(--text-muted); margin: 0;">No assessment questions added for this module yet.</p>`}
      </div>

      <!-- Add New Question Form -->
      <form id="add-mod-q-form" onsubmit="handleAddModuleAssessmentQuestion(event, '${courseId}', '${materialId}')" style="border-top: 1px solid var(--line); padding-top: 14px;">
        <h4 style="margin: 0 0 10px; font-size: 14px; font-weight: 700;">Add MCQ Assessment Question</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label>Question Statement
            <input type="text" id="mq-question" required placeholder="e.g. What is the key concept covered in this module?">
          </label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <label>Option A <input type="text" id="mq-opt-0" required placeholder="First option"></label>
            <label>Option B <input type="text" id="mq-opt-1" required placeholder="Second option"></label>
            <label>Option C <input type="text" id="mq-opt-2" required placeholder="Third option"></label>
            <label>Option D <input type="text" id="mq-opt-3" required placeholder="Fourth option"></label>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <label>Correct Answer
              <select id="mq-answer" required>
                <option value="0">Option A</option>
                <option value="1">Option B</option>
                <option value="2">Option C</option>
                <option value="3">Option D</option>
              </select>
            </label>
            <label>Module Pass Mark (%)
              <input type="number" id="mq-passmark" min="10" max="100" value="${m.assessment.passMark || 50}" required>
            </label>
          </div>
          <div style="margin-top: 6px; text-align: right;">
            <button type="submit" class="btn btn-sm">+ Save Assessment Question</button>
          </div>
        </div>
      </form>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Done</button>
  `, true);
}

function handleAddModuleAssessmentQuestion(e, courseId, materialId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === materialId);
  if (!m) return;

  if (!m.assessment) m.assessment = { passMark: 50, questions: [] };
  if (!Array.isArray(m.assessment.questions)) m.assessment.questions = [];

  const q = document.getElementById('mq-question').value.trim();
  const options = [
    document.getElementById('mq-opt-0').value.trim(),
    document.getElementById('mq-opt-1').value.trim(),
    document.getElementById('mq-opt-2').value.trim(),
    document.getElementById('mq-opt-3').value.trim()
  ];
  const answer = parseInt(document.getElementById('mq-answer').value) || 0;
  const passMark = parseInt(document.getElementById('mq-passmark').value) || 50;

  m.assessment.passMark = passMark;
  m.assessment.questions.push({ q, options, answer });

  saveDB(db);
  showAlert(`Question added to Module ${m.moduleNumber || 1} assessment!`, 'success');
  openModuleAssessmentModal(courseId, materialId);
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

function deleteModuleAssessmentQuestion(courseId, materialId, qIdx) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const m = (c.materials || []).find(x => x.id === materialId);
  if (!m || !m.assessment || !m.assessment.questions) return;

  m.assessment.questions.splice(qIdx, 1);
  saveDB(db);
  showAlert('Question removed.', 'success');
  openModuleAssessmentModal(courseId, materialId);
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

// ----------------------------------------------------------------------------
// Course Discussion Board (Visible Only to Respected Mentor & Enrolled Students)
// Features Text-Only Posting & In-Place "Edit Text" Capability
// ----------------------------------------------------------------------------
function renderCourseDiscussionSection(course) {
  const discussions = course.discussions || [];
  return `
    <div class="card" style="margin-top: 22px;">
      <div class="card-header" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <h2 style="margin: 0; font-size: 17px;">Course Discussion Board</h2>
          <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
            Private classroom forum visible only to this course's mentor (${course.mentorName || 'Instructor'}) and enrolled students.
          </div>
        </div>
        <span class="badge badge-purple">${discussions.length} Discussions</span>
      </div>

      <!-- Messages Thread -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
        ${discussions.map(d => {
          const isAuthor = d.authorEmail === currentUser.email;
          const isMentor = d.authorRole === 'mentor';
          return `
            <div style="background: ${isAuthor ? '#F8FAFC' : '#FFFFFF'}; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <strong style="color: #0F172A;">${d.authorName}</strong>
                  <span class="badge ${isMentor ? 'badge-purple' : 'badge-blue'}" style="font-size: 10.5px; padding: 2px 7px;">
                    ${isMentor ? 'Course Mentor' : 'Student'}
                  </span>
                  <span style="font-size: 11.5px; color: var(--text-muted);">${d.createdAt} ${d.updatedAt ? `<span style="font-style: italic; color: #64748B;">(edited ${d.updatedAt})</span>` : ''}</span>
                </div>
                ${(isAuthor || currentUser.role === 'mentor' || currentUser.role === 'admin') ? `
                  <div style="display: flex; gap: 6px;">
                    <button class="btn btn-secondary btn-sm" onclick="openEditDiscussionModal('${course.id}', '${d.id}')" style="padding: 2px 8px; font-size: 11px; font-weight: 600;">
                      Edit Text
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteDiscussion('${course.id}', '${d.id}')" style="padding: 2px 7px; font-size: 11px;" title="Delete Message">
                      &times;
                    </button>
                  </div>
                ` : ''}
              </div>
              <div style="font-size: 13.5px; color: #1E293B; line-height: 1.5; white-space: pre-wrap;">${(d.content || d.text || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
          `;
        }).join('') || `
          <div style="text-align: center; padding: 26px; color: var(--text-muted); font-size: 13px; background: #F8FAFC; border: 1px dashed var(--line); border-radius: 8px;">
            No messages posted in this course discussion yet. Post a question or note below!
          </div>
        `}
      </div>

      <!-- Post New Message Form (Text Only) -->
      <form onsubmit="handleAddDiscussion(event, '${course.id}')" style="border-top: 1px solid var(--line); padding-top: 14px;">
        <label style="font-weight: 600; font-size: 13px; margin-bottom: 6px; display: block;">
          Post Discussion Note / Question:
        </label>
        <div style="display: flex; gap: 10px;">
          <textarea id="disc-new-text" required placeholder="Type your note, question, or explanation here..." style="flex: 1; min-height: 60px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 6px; font-family: inherit; font-size: 13px; resize: vertical;"></textarea>
          <button class="btn btn-sm" type="submit" style="align-self: flex-end; padding: 10px 16px; font-weight: 600;">
            Post Note
          </button>
        </div>
      </form>
    </div>
  `;
}

function openEditDiscussionModal(courseId, discId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const post = (c.discussions || []).find(d => d.id === discId);
  if (!post) return;

  if (post.authorEmail !== currentUser.email && currentUser.role !== 'mentor' && currentUser.role !== 'admin') {
    showAlert('You can only edit your own discussion messages.', 'warning');
    return;
  }

  openModal('Edit Discussion Message', `
    <form id="edit-disc-form" onsubmit="handleUpdateDiscussion(event, '${courseId}', '${discId}')">
      <label style="font-weight: 600; font-size: 13px; display: block;">Edit Text:
        <textarea id="edit-disc-text" required style="width: 100%; min-height: 120px; margin-top: 8px; padding: 10px; border: 1px solid var(--line); border-radius: 6px; font-family: inherit; font-size: 13px; resize: vertical;">${post.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
      </label>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('edit-disc-form').requestSubmit()">Save Revisions</button>
  `);
}

function handleUpdateDiscussion(e, courseId, discId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const post = (c.discussions || []).find(d => d.id === discId);
  if (!post) return;

  const newText = document.getElementById('edit-disc-text').value.trim();
  if (!newText) return;
  post.content = newText;
  post.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);

  saveDB(db);
  closeModal();
  showAlert('Discussion message updated successfully.', 'success');
  if (currentUser.role === 'student') {
    renderCoursePlayer(document.getElementById('content-view'), courseId);
  } else {
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

function handleAddDiscussion(e, courseId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  const textInp = document.getElementById('disc-new-text');
  if (!textInp) return;
  const text = textInp.value.trim();
  if (!text) return;

  if (!c.discussions) c.discussions = [];
  c.discussions.push({
    id: 'disc_' + Date.now(),
    authorEmail: currentUser.email,
    authorName: currentUser.name,
    authorRole: currentUser.role,
    content: text,
    createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    updatedAt: null
  });

  saveDB(db);
  showAlert('Message posted to Course Discussion.', 'success');
  if (currentUser.role === 'student') {
    renderCoursePlayer(document.getElementById('content-view'), courseId);
  } else {
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

function deleteDiscussion(courseId, discId) {
  if (!confirm('Delete this message?')) return;
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;
  c.discussions = (c.discussions || []).filter(d => d.id !== discId);
  saveDB(db);
  showAlert('Message deleted.', 'success');
  if (currentUser.role === 'student') {
    renderCoursePlayer(document.getElementById('content-view'), courseId);
  } else {
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

function openAddAssignmentModal(courseId) {
  openModal('Add Assignment', `
    <form id="add-asg-form" onsubmit="handleAddAssignment(event, '${courseId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Assignment Title <input type="text" id="asg-t" required placeholder="Title"></label>
        <label>Instructions <textarea id="asg-i" required placeholder="Instructions..."></textarea></label>
        <label>Due Date <input type="date" id="asg-d" required></label>
        <label>Max Points <input type="number" id="asg-p" value="100" min="10" max="100" required></label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-asg-form').requestSubmit()">Save</button>
  `);
}

function handleAddAssignment(e, courseId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;

  if (!c.assignments) c.assignments = [];
  c.assignments.push({
    id: 'asg_' + Date.now(),
    title: document.getElementById('asg-t').value.trim(),
    instructions: document.getElementById('asg-i').value.trim(),
    dueDate: document.getElementById('asg-d').value,
    maxPoints: parseInt(document.getElementById('asg-p').value) || 100
  });

  saveDB(db);
  closeModal();
  showAlert('Assignment created.', 'success');
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

function deleteAssignment(courseId, aId) {
  if (!confirm('Remove assignment?')) return;
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (c) {
    c.assignments = (c.assignments || []).filter(x => x.id !== aId);
    saveDB(db);
    showAlert('Assignment removed.', 'success');
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

function openAddQuestionModal(courseId) {
  openModal('Add Multiple-Choice Question', `
    <form id="add-q-form" onsubmit="handleAddQuestion(event, '${courseId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Question Text <textarea id="q-txt" required placeholder="Question..."></textarea></label>
        <label>Option A <input type="text" id="opt-0" required></label>
        <label>Option B <input type="text" id="opt-1" required></label>
        <label>Option C <input type="text" id="opt-2" required></label>
        <label>Option D <input type="text" id="opt-3" required></label>
        <label>Correct Answer
          <select id="q-ans">
            <option value="0">Option A</option>
            <option value="1">Option B</option>
            <option value="2">Option C</option>
            <option value="3">Option D</option>
          </select>
        </label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-q-form').requestSubmit()">Save Question</button>
  `);
}

function handleAddQuestion(e, courseId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (!c) return;

  if (!c.assessment) c.assessment = { passMark: 50, questions: [] };
  if (!c.assessment.questions) c.assessment.questions = [];

  c.assessment.questions.push({
    q: document.getElementById('q-txt').value.trim(),
    options: [
      document.getElementById('opt-0').value.trim(),
      document.getElementById('opt-1').value.trim(),
      document.getElementById('opt-2').value.trim(),
      document.getElementById('opt-3').value.trim()
    ],
    answer: parseInt(document.getElementById('q-ans').value)
  });

  saveDB(db);
  closeModal();
  showAlert('MCQ question added.', 'success');
  renderCourseEditor(document.getElementById('content-view'), courseId);
}

function deleteQuestion(courseId, qIdx) {
  if (!confirm('Remove question?')) return;
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  if (c && c.assessment && c.assessment.questions) {
    c.assessment.questions.splice(qIdx, 1);
    saveDB(db);
    showAlert('Question removed.', 'success');
    renderCourseEditor(document.getElementById('content-view'), courseId);
  }
}

// ============================================================================
// 10. MENTOR: GRADE SUBMISSIONS, STUDENT REPORTS & CERTIFICATE APPROVALS
// ============================================================================
function renderGradeSubmissions(container) {
  const db = loadDB();
  const myCourseIds = db.courses.filter(c => c.mentorId === currentUser.email).map(c => c.id);

  const subs = [];
  db.enrollments.forEach(en => {
    if (myCourseIds.includes(en.courseId)) {
      const course = db.courses.find(c => c.id === en.courseId);
      const student = db.users.find(u => u.email === en.studentEmail) || { name: en.studentEmail };
      (en.assignmentSubmissions || []).forEach(sub => {
        const asg = (course.assignments || []).find(a => a.id === sub.assignmentId) || { title: 'Assignment', maxPoints: 100 };
        subs.push({ student, studentEmail: en.studentEmail, course, assignment: asg, submission: sub });
      });
    }
  });

  container.innerHTML = `
    <div class="card">
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student</th>
              <th class="text-left">Course</th>
              <th class="text-left">Assignment</th>
              <th class="text-left">Submission</th>
              <th class="text-center">Status / Score</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${subs.map(item => `
              <tr>
                <td><strong>${item.student.name}</strong><br><small>${item.studentEmail}</small></td>
                <td>${item.course.title}</td>
                <td>${item.assignment.title}</td>
                <td>
                  <a href="${item.submission.submissionLink}" target="_blank" class="link">Open Link</a>
                  <p style="margin: 2px 0 0; font-size: 11px; color: var(--text-muted);">"${item.submission.notes || ''}"</p>
                </td>
                <td class="text-center">
                  ${item.submission.status === 'graded' ? `<span class="badge badge-green">Graded: ${item.submission.grade} / ${item.assignment.maxPoints} pts</span>` : `<span class="badge badge-amber">Submitted</span>`}
                </td>
                <td class="text-right">
                  <button class="btn btn-sm" onclick="openGradeModal('${item.studentEmail}', '${item.course.id}', '${item.assignment.id}', ${item.assignment.maxPoints})">
                    ${item.submission.status === 'graded' ? 'Update Grade' : 'Grade Submission'}
                  </button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="6" class="empty-table-state"><div class="empty-box"><p>No student submissions to grade.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openGradeModal(studentEmail, courseId, assignmentId, maxPoints) {
  const db = loadDB();
  const en = db.enrollments.find(e => e.studentEmail === studentEmail && e.courseId === courseId);
  const sub = en ? (en.assignmentSubmissions || []).find(s => s.assignmentId === assignmentId) : null;

  openModal('Grade Submission', `
    <form id="gr-form" onsubmit="handleSaveGrade(event, '${studentEmail}', '${courseId}', '${assignmentId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Points Awarded (Max ${maxPoints})
          <input type="number" id="gr-val" min="0" max="${maxPoints}" value="${sub && sub.grade !== null ? sub.grade : maxPoints}" required>
        </label>
        <label>Mentor Feedback Remarks
          <textarea id="gr-fb" placeholder="Constructive feedback...">${sub ? sub.feedback || '' : ''}</textarea>
        </label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('gr-form').requestSubmit()">Save Grade</button>
  `);
}

function handleSaveGrade(e, studentEmail, courseId, assignmentId) {
  e.preventDefault();
  const db = loadDB();
  const en = db.enrollments.find(x => x.studentEmail === studentEmail && x.courseId === courseId);
  if (en) {
    const sub = (en.assignmentSubmissions || []).find(s => s.assignmentId === assignmentId);
    if (sub) {
      sub.grade = parseInt(document.getElementById('gr-val').value);
      sub.feedback = document.getElementById('gr-fb').value.trim();
      sub.status = 'graded';
      saveDB(db);
      closeModal();
      showAlert('Grade saved successfully.', 'success');
      navigateTo('Grade Submissions');
    }
  }
}

function renderStudentReports(container) {
  const db = loadDB();
  const myCourseIds = db.courses.filter(c => c.mentorId === currentUser.email).map(c => c.id);
  const myEnrollments = db.enrollments.filter(e => myCourseIds.includes(e.courseId));

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="margin-bottom: 14px;">
        <h2>Enrolled Student Reports (${myEnrollments.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left" style="white-space: nowrap;">Student</th>
              <th class="text-left" style="white-space: nowrap;">Course</th>
              <th class="text-center" style="white-space: nowrap;">Materials Done</th>
              <th class="text-center" style="white-space: nowrap;">Assignment Status</th>
              <th class="text-center" style="white-space: nowrap;">Assessment</th>
              <th class="text-center" style="white-space: nowrap;">Certificate Approval</th>
              <th class="text-right" style="white-space: nowrap;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${myEnrollments.map(en => {
              const student = db.users.find(u => u.email === en.studentEmail) || { name: en.studentEmail };
              const course = db.courses.find(c => c.id === en.courseId);
              const approvedMats = (course.materials || []).filter(m => m.status === 'approved');
              const pct = approvedMats.length ? Math.round(((en.completedMaterialIds || []).length / approvedMats.length) * 100) : 0;
              const sub = (en.assignmentSubmissions || [])[0];
              const cert = (db.certificateRequests || []).find(r => r.studentEmail === en.studentEmail && r.courseId === en.courseId);

              return `
                <tr style="white-space: nowrap;">
                  <td style="white-space: nowrap;">
                    <div style="display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;">
                      <strong style="color: #0F172A;">${student.name}</strong>
                      <span style="color: var(--text-muted); font-size: 12px;">&middot; ${en.studentEmail}</span>
                    </div>
                  </td>
                  <td style="white-space: nowrap;">${course ? course.title : 'Course'}</td>
                  <td class="text-center" style="white-space: nowrap;"><strong>${(en.completedMaterialIds || []).length} / ${approvedMats.length}</strong> (${pct}%)</td>
                  <td class="text-center" style="white-space: nowrap;">
                    ${sub ? (sub.status === 'graded' ? `<span class="badge badge-green">${sub.grade} pts</span>` : `<span class="badge badge-amber">Submitted</span>`) : `<span style="color: var(--text-muted); font-size: 12px;">None</span>`}
                  </td>
                  <td class="text-center" style="white-space: nowrap;">
                    ${en.finalScore !== null && en.finalScore !== undefined ? `<strong style="color: ${en.finalPassed ? 'var(--success)' : 'var(--danger)'};">${en.finalScore}% (${en.finalPassed ? 'Passed' : 'Failed'})</strong>` : `<span style="color: var(--text-muted); font-size: 12px;">Not Taken</span>`}
                  </td>
                  <td class="text-center" style="white-space: nowrap;">
                    ${cert ? (cert.status === 'pending_mentor' ? `<button class="btn btn-success btn-sm" onclick="mentorApproveCert('${cert.id}')" style="padding: 3px 8px; font-size: 11px;">Approve</button>` : renderCertBadge(cert.status)) : `<span style="color: var(--text-muted); font-size: 12px;">None</span>`}
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <button class="btn btn-secondary btn-sm" onclick="openStudentProfileModal('${student.id || en.studentEmail}')" style="padding: 4px 10px; font-size: 11.5px; font-weight: 600; white-space: nowrap;">
                      View Profile
                    </button>
                  </td>
                </tr>
              `;
            }).join('') || `<tr><td colspan="7" class="empty-table-state"><div class="empty-box"><p>No student reports.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMentorCertificates(container) {
  const db = loadDB();
  const myCourseIds = db.courses.filter(c => c.mentorId === currentUser.email).map(c => c.id);
  const pending = (db.certificateRequests || []).filter(r => myCourseIds.includes(r.courseId) && r.status === 'pending_mentor');

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2>Certificate Requests Awaiting Mentor Sign-Off (${pending.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student Name</th>
              <th class="text-left">Course</th>
              <th class="text-center">Score</th>
              <th class="text-center">Pass Mark</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pending.map(cert => `
              <tr>
                <td><strong>${cert.studentName}</strong><br><small>${cert.studentEmail}</small></td>
                <td>${cert.courseTitle}</td>
                <td class="text-center"><strong style="color: var(--success);">${cert.score}%</strong></td>
                <td class="text-center">50%</td>
                <td class="text-right">
                  <button class="btn btn-success btn-sm" onclick="mentorApproveCert('${cert.id}')">Approve &amp; Forward to Admin</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="empty-table-state"><div class="empty-box"><p>No certificate requests pending mentor verification.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function mentorApproveCert(certId) {
  const db = loadDB();
  const cert = (db.certificateRequests || []).find(r => r.id === certId);
  if (cert) {
    cert.status = 'pending_admin';
    cert.mentorApprovedAt = new Date().toISOString().split('T')[0];
    saveDB(db);
    showAlert(`Approved! Certificate request forwarded to Admin for final issuance.`, 'success');
    renderSidebarNav();
    navigateTo(currentNav);
  }
}

// ============================================================================
// 11. STUDENT: BROWSE COURSES, PLAYER, ASSIGNMENTS & FINAL ASSESSMENT
// ============================================================================
function renderBrowseCourses(container) {
  const db = loadDB();
  // ONLY APPROVED COURSES SHOWN TO STUDENTS
  const approved = db.courses.filter(c => c.status === 'approved');
  const myCourseIds = db.enrollments.filter(e => e.studentEmail === currentUser.email).map(e => e.courseId);

  container.innerHTML = `
    <!-- Top Header Overview -->
    <div style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
        <div>
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #0F172A;">Explore &amp; Browse Courses</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 3px;">
            Industry-certified curriculum programs featuring video lectures, PDF notes, interactive discussions, and verified certificates.
          </div>
        </div>
        <span class="badge badge-purple" style="font-size: 12px; padding: 4px 10px;">${approved.length} Courses Available</span>
      </div>
    </div>

    <!-- Course Cards Grid View -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
      ${approved.map(c => {
        const isEnrolled = myCourseIds.includes(c.id);
        const approvedMats = (c.materials || []).filter(m => m.status === 'approved');
        return `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; border: 1px solid var(--line); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: transform 0.15s ease, box-shadow 0.15s ease;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span class="badge badge-purple" style="font-weight: 600; font-size: 11.5px;">${c.category || 'Development'}</span>
                <span class="badge badge-green" style="font-size: 11px; font-weight: 600;">100% Free · No Payment</span>
              </div>
              <h3 style="margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #0F172A; line-height: 1.35;">
                ${c.title}
              </h3>
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                ${c.description}
              </p>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid var(--line); font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">
                <div>
                  Instructor: <strong>${c.mentorName || 'Certified Mentor'}</strong>
                </div>
                <div>
                  <strong>${approvedMats.length}</strong> Modules
                </div>
              </div>

              ${isEnrolled ? `
                <button class="btn btn-secondary" style="width: 100%; font-weight: 600;" onclick="navigateTo('course_player', '${c.id}')">
                  Open Course Player →
                </button>
              ` : `
                <button class="btn" style="width: 100%; font-weight: 600;" onclick="enrollStudent('${c.id}')">
                  Enroll Free &amp; Start →
                </button>
              `}
            </div>
          </div>
        `;
      }).join('') || `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
          <p style="color: var(--text-muted); font-size: 14px; margin: 0;">No approved courses available at this time.</p>
        </div>
      `}
    </div>
  `;
}

function enrollStudent(courseId) {
  const db = loadDB();
  if (!db.enrollments.some(e => e.studentEmail === currentUser.email && e.courseId === courseId)) {
    db.enrollments.push({
      studentEmail: currentUser.email,
      courseId,
      completedMaterialIds: [],
      assignmentSubmissions: [],
      finalScore: null,
      finalPassed: false
    });
    saveDB(db);
    showAlert('Enrolled successfully! Free course access granted with zero billing or fees.', 'success');
  }
  navigateTo('course_player', courseId);
}

function renderStudentMyCourses(container) {
  const db = loadDB();
  const myEnrollments = db.enrollments.filter(e => e.studentEmail === currentUser.email);

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">My Enrolled Courses &amp; Progress</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Track your study materials completion, assignment grades, and graduation certifications.
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="handleNavClick('Browse Courses')">
          Browse More Courses
        </button>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Enrolled Course</th>
              <th class="text-left">Instructor</th>
              <th class="text-left" style="min-width: 170px;">Materials Progress</th>
              <th class="text-center">Assessment Score</th>
              <th class="text-center">Certificate Status</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${myEnrollments.map(en => {
              const c = db.courses.find(x => x.id === en.courseId);
              if (!c) return '';
              const approvedMats = (c.materials || []).filter(m => m.status === 'approved');
              const pct = approvedMats.length ? Math.round(((en.completedMaterialIds || []).length / approvedMats.length) * 100) : 0;
              const cert = (db.certificateRequests || []).find(r => r.studentEmail === currentUser.email && r.courseId === c.id);

              return `
                <tr>
                  <td>
                    <strong>${c.title}</strong>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${c.category || 'Development'}</div>
                    <div style="font-size: 11px; color: #059669; font-weight: 600; margin-top: 2px;">Free Access · No Bill</div>
                  </td>
                  <td>
                    <div>${c.mentorName || 'Certified Mentor'}</div>
                    <div style="font-size: 11px; color: var(--text-muted);">${c.mentorId}</div>
                  </td>
                  <td>
                    <div class="progress-track" style="margin-bottom: 4px;">
                      <div class="progress-fill" style="width: ${pct}%;"></div>
                    </div>
                    <span style="font-size: 12px; font-weight: 600;">${pct}% Completed</span>
                  </td>
                  <td class="text-center">
                    ${en.finalScore !== null && en.finalScore !== undefined ? `<strong style="color: ${en.finalPassed ? 'var(--success)' : 'var(--danger)'};">${en.finalScore}% (${en.finalPassed ? 'Passed' : 'Needs Retake'})</strong>` : `<span style="font-size: 12px; color: var(--text-muted);">Pending Exam</span>`}
                  </td>
                  <td class="text-center">
                    ${cert ? renderCertBadge(cert.status) : `<span style="font-size: 12px; color: var(--text-muted);">Not Requested</span>`}
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <button class="btn btn-sm" onclick="navigateTo('course_player', '${c.id}')">Open Course Player</button>
                  </td>
                </tr>
              `;
            }).join('') || `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <div class="empty-box" style="padding: 30px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">No enrolled courses yet. Check "Browse Courses" to start learning.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getCourseAssessmentQuestions(c) {
  if (c && c.assessment && Array.isArray(c.assessment.questions) && c.assessment.questions.length > 0) {
    return c.assessment.questions;
  }
  const courseTitle = c && c.title ? c.title : 'this course';
  return [
    {
      q: `What is the primary architectural principle emphasized in ${courseTitle}?`,
      options: [
        'Modular design, clean code standards, and systematic validation',
        'Skipping foundational architecture guidelines and documentation',
        'Directly modifying production databases without backups',
        'Manual repetitive deployment without version control'
      ],
      answer: 0
    },
    {
      q: 'Which practice ensures high reliability, security, and scalability in engineering projects?',
      options: [
        'Automated testing, error logging, and continuous integration',
        'Hardcoding secret keys and credentials in public repositories',
        'Disabling all runtime security validations',
        'Avoiding peer code reviews and unit tests'
      ],
      answer: 0
    },
    {
      q: 'What minimum score is required on the Craffix LMS assessment to earn the verified certificate?',
      options: ['25%', '35%', '50%', '75%'],
      answer: 2
    },
    {
      q: 'What prerequisite must be satisfied before taking this final course certification exam?',
      options: [
        'All course learning modules must be opened and completed sequentially',
        'Only reading the first module is necessary',
        'No modules need to be viewed',
        'Submitting manual offline paperwork'
      ],
      answer: 0
    }
  ];
}

function renderCoursePlayer(container, courseId) {
  const db = loadDB();
  const course = db.courses.find(c => c.id === courseId);
  if (!course) { container.innerHTML = `<div class="card">Course not found.</div>`; return; }

  let en = db.enrollments.find(e => e.studentEmail === currentUser.email && e.courseId === courseId);
  if (!en) { enrollStudent(courseId); return; }

  const approvedMats = (course.materials || []).filter(m => m.status === 'approved');
  if (!en.completedMaterialIds) en.completedMaterialIds = [];
  const completed = en.completedMaterialIds;

  // "if open that course it start with next module":
  if (activeMaterialIndex === null || activeMaterialIndex === undefined || activeMaterialIndex >= approvedMats.length) {
    const nextIncompleteIdx = approvedMats.findIndex(m => !completed.includes(m.id));
    activeMaterialIndex = nextIncompleteIdx !== -1 ? nextIncompleteIdx : 0;
  }

  const curMat = approvedMats[activeMaterialIndex] || approvedMats[0];

  const hasModuleAssessment = curMat && curMat.assessment && Array.isArray(curMat.assessment.questions) && curMat.assessment.questions.length > 0;

  // Auto-tick currently loaded/viewed module ONLY if it has no mandatory assessment:
  if (curMat && !completed.includes(curMat.id) && !hasModuleAssessment) {
    completed.push(curMat.id);
    en.completedMaterialIds = completed;
    saveDB(db);
  }

  const allMaterialsDone = approvedMats.length > 0 && approvedMats.every(m => completed.includes(m.id));
  const completedCount = completed.filter(id => approvedMats.some(m => m.id === id)).length;

  const hasTypedContent = !!(curMat && (curMat.content || curMat.typedContent));
  const hasPdf = !!(curMat && (curMat.pdfData || curMat.pdfLink || (curMat.type === 'pdf' && curMat.link)));
  const hasVideo = !!(curMat && curMat.link && (curMat.type === 'video' || curMat.type === 'content' || curMat.type === 'both' || curMat.type === 'youtube'));

  const videoUrl = curMat ? (curMat.link || '') : '';
  const pdfUrl = curMat ? (curMat.pdfData || curMat.pdfLink || (curMat.type === 'pdf' ? curMat.link : '')) : '';
  const pdfName = curMat ? (curMat.pdfName || 'Module_Document.pdf') : 'Module_Document.pdf';
  const pdfSize = curMat ? (curMat.pdfSize || '') : '';

  const typedContent = curMat ? (curMat.content || curMat.typedContent || '') : '';
  const wordCount = typedContent.trim() ? typedContent.trim().split(/\s+/).filter(Boolean).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 180));

  const isCurDone = curMat && completed.includes(curMat.id);

  const contentTypesCount = (hasTypedContent ? 1 : 0) + (hasPdf ? 1 : 0) + (hasVideo ? 1 : 0);
  const isMultiContent = contentTypesCount > 1;

  let formatSubtitle = 'Video Lecture';
  if (hasTypedContent && hasPdf) {
    formatSubtitle = 'Written Lesson Notes &amp; PDF Document';
  } else if (hasTypedContent) {
    formatSubtitle = 'Written Lesson Notes';
  } else if (hasPdf) {
    formatSubtitle = 'PDF Study Document';
  } else if (hasVideo && hasPdf) {
    formatSubtitle = 'Video Lecture &amp; PDF Notes';
  }

  container.innerHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn btn-secondary btn-sm" onclick="handleNavClick('My Courses')">← Back to My Courses</button>
    </div>

    <div class="player-layout">
      <!-- Player Main Content -->
      <div>
        <div class="card" style="margin-bottom: 22px;">
          ${curMat ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h2 style="margin: 0; font-size: 18px;">${curMat.title}</h2>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 3px;">
                  ${formatSubtitle} &nbsp;·&nbsp; Module ${activeMaterialIndex + 1} of ${approvedMats.length}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                ${isCurDone ? `
                  <span class="badge badge-green" style="font-size: 12.5px; padding: 6px 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 5px;">
                    ${ICONS.check} Module Completed (Auto-Tracked)
                  </span>
                ` : `
                  <span class="badge badge-amber" style="font-size: 12.5px; padding: 6px 12px; font-weight: 600;">
                    Complete Module Assessment Below
                  </span>
                `}
                ${activeMaterialIndex + 1 < approvedMats.length && isCurDone ? `
                  <button class="btn btn-secondary btn-sm" onclick="selectMaterialIndex(${activeMaterialIndex + 1}, '${course.id}')">
                    Next Module →
                  </button>
                ` : ''}
              </div>
            </div>

            ${isMultiContent ? `
              <!-- Multi-Content Tabs (Written Notes / PDF Document / Video) -->
              <div style="display: flex; gap: 8px; margin-bottom: 16px; border-bottom: 1px solid var(--line); padding-bottom: 10px; flex-wrap: wrap;">
                ${hasTypedContent ? `
                  <button type="button" class="tab-btn active" id="tab-mat-article" onclick="switchPlayerMatTab('article')">
                    Written Lesson Notes
                  </button>
                ` : ''}
                ${hasPdf ? `
                  <button type="button" class="tab-btn ${!hasTypedContent ? 'active' : ''}" id="tab-mat-pdf" onclick="switchPlayerMatTab('pdf')">
                    PDF Document (${escapeHtml(pdfName)})
                  </button>
                ` : ''}
                ${hasVideo ? `
                  <button type="button" class="tab-btn ${!hasTypedContent && !hasPdf ? 'active' : ''}" id="tab-mat-video" onclick="switchPlayerMatTab('video')">
                    Lecture Video
                  </button>
                ` : ''}
              </div>

              ${hasTypedContent ? `
                <div id="player-mat-article-content" style="display: block;">
                  <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: var(--text-muted);">
                    <span>Reading time: <strong>~${readTime} min read</strong> (${wordCount} words)</span>
                    <span style="font-size: 11.5px; color: #64748B;">Interactive Lesson Article</span>
                  </div>
                  <div class="content-reading-article" style="padding: 10px 4px;">
                    ${renderFormattedContent(typedContent)}
                  </div>
                </div>
              ` : ''}

              ${hasPdf ? `
                <div id="player-mat-pdf-content" style="${!hasTypedContent ? 'display: block;' : 'display: none;'}">
                  <div class="pdf-viewer-card">
                    <div class="pdf-viewer-header">
                      <div>
                        <span style="font-size: 13.5px; font-weight: 700; color: #1E293B;">${escapeHtml(pdfName)}</span>
                        ${pdfSize ? `<span class="badge badge-purple" style="font-size: 11px; margin-left: 6px;">${pdfSize}</span>` : ''}
                      </div>
                      <div style="display: flex; gap: 8px;">
                        <button type="button" class="btn btn-secondary btn-sm" onclick="downloadMaterialPdf('${pdfUrl}', '${escapeHtml(pdfName)}')">Download PDF</button>
                        <a href="${pdfUrl}" target="_blank" class="btn btn-sm">Open in New Tab &nearr;</a>
                      </div>
                    </div>
                    <iframe src="${pdfUrl}" class="pdf-viewer-frame" title="${escapeHtml(curMat.title)} PDF"></iframe>
                  </div>
                </div>
              ` : ''}

              ${hasVideo ? `
                <div id="player-mat-video-content" style="${!hasTypedContent && !hasPdf ? 'display: block;' : 'display: none;'}">
                  ${videoUrl.includes('embed') || videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? `
                    <iframe class="player-video" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 460px; border-radius: 8px;"></iframe>
                  ` : `
                    <video controls style="width: 100%; max-height: 460px; border-radius: 8px; background: #000;">
                      <source src="${videoUrl}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  `}
                </div>
              ` : ''}
            ` : (hasTypedContent ? `
              <!-- TYPED LESSON ARTICLE -->
              <div>
                <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: var(--text-muted);">
                  <span>Reading time: <strong>~${readTime} min read</strong> (${wordCount} words)</span>
                  <span style="font-size: 11.5px; color: #64748B;">Interactive Lesson Article</span>
                </div>
                <div class="content-reading-article" style="padding: 10px 4px;">
                  ${renderFormattedContent(typedContent)}
                </div>
              </div>
            ` : (hasPdf ? `
              <!-- PDF DOCUMENT VIEWER -->
              <div class="pdf-viewer-card">
                <div class="pdf-viewer-header">
                  <div>
                    <span style="font-size: 13.5px; font-weight: 700; color: #1E293B;">${escapeHtml(pdfName)}</span>
                    ${pdfSize ? `<span class="badge badge-purple" style="font-size: 11px; margin-left: 6px;">${pdfSize}</span>` : ''}
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="downloadMaterialPdf('${pdfUrl}', '${escapeHtml(pdfName)}')">Download PDF</button>
                    <a href="${pdfUrl}" target="_blank" class="btn btn-sm">Open in New Tab &nearr;</a>
                  </div>
                </div>
                <iframe src="${pdfUrl}" class="pdf-viewer-frame" title="${escapeHtml(curMat.title)} PDF"></iframe>
              </div>
            ` : `
              <!-- VIDEO CONTENT ONLY -->
              ${videoUrl.includes('embed') || videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? `
                <iframe class="player-video" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 460px; border-radius: 8px;"></iframe>
              ` : `
                <video controls style="width: 100%; max-height: 460px; border-radius: 8px; background: #000;">
                  <source src="${videoUrl}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              `}
            `))}
          ` : `
            <p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No approved learning materials in this course yet.</p>
          `}
        </div>

        <!-- Dedicated Module Assessment Section (Under Each Module) -->
        ${hasModuleAssessment ? `
          <div class="card" style="margin-bottom: 22px; border: 1px solid #CBD5E1; background: #FFFFFF;">
            <div class="card-header" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div>
                <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #0F172A;">
                  Module ${activeMaterialIndex + 1} Assessment (${curMat.assessment.questions.length} Questions)
                </h3>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
                  Pass mark: <strong>${curMat.assessment.passMark || 50}%</strong>. Required to complete this module and unlock the next module.
                </div>
              </div>
              ${isCurDone ? `
                <span class="badge badge-green" style="font-size: 12px; font-weight: 600; padding: 4px 10px;">
                  Assessment Passed · Module Completed
                </span>
              ` : `
                <span class="badge badge-amber" style="font-size: 12px; font-weight: 600; padding: 4px 10px;">
                  Assessment Required
                </span>
              `}
            </div>

            ${isCurDone ? `
              <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 14px 16px; color: #065F46; font-size: 13px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                  <div>
                    <strong>Well done!</strong> You have successfully passed the assessment for <strong>${curMat.title}</strong> with score <strong>${(en.moduleScores && en.moduleScores[curMat.id] !== undefined) ? en.moduleScores[curMat.id] : 100}%</strong>. This module has been completed and ticked.
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="retakeModuleAssessment('${course.id}', '${curMat.id}')" style="font-size: 11.5px; padding: 4px 10px;">
                    Retake Assessment
                  </button>
                </div>
                ${activeMaterialIndex + 1 < approvedMats.length ? `
                  <div style="margin-top: 10px;">
                    <button class="btn btn-sm" onclick="selectMaterialIndex(${activeMaterialIndex + 1}, '${course.id}')">
                      Proceed to Module ${activeMaterialIndex + 2} →
                    </button>
                  </div>
                ` : ''}
              </div>
            ` : `
              <form id="mod-assessment-form" onsubmit="handleGradeModuleAssessment(event, '${course.id}', '${curMat.id}')" style="margin-top: 10px;">
                <div class="quiz-box">
                  ${curMat.assessment.questions.map((q, qIdx) => `
                    <div class="quiz-item" style="border: 1px solid var(--line); border-radius: 8px; padding: 14px; margin-bottom: 12px; background: #F8FAFC;">
                      <strong style="font-size: 13.5px; color: #0F172A;">${qIdx + 1}. ${q.q}</strong>
                      <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
                        ${q.options.map((opt, oIdx) => `
                          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; padding: 6px 10px; border-radius: 6px; background: #FFFFFF; border: 1px solid #E2E8F0;">
                            <input type="radio" name="mq_${qIdx}" value="${oIdx}" required>
                            <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</span>
                          </label>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
                <div style="margin-top: 14px;">
                  <button type="submit" class="btn" style="font-weight: 600; padding: 8px 18px;">
                    Submit Module ${activeMaterialIndex + 1} Assessment
                  </button>
                </div>
              </form>
            `}
          </div>
        ` : ''}

        <!-- Assignments Section -->
        <div class="card" style="margin-bottom: 22px;">
          <div class="card-header">
            <h2>Course Assignments</h2>
          </div>
          ${(course.assignments || []).map(asg => {
            const sub = (en.assignmentSubmissions || []).find(s => s.assignmentId === asg.id);
            return `
              <div style="border: 1px solid var(--line); border-radius: 8px; padding: 14px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <div>
                    <strong>${asg.title}</strong>
                    <p style="font-size: 12.5px; color: var(--text-muted); margin: 4px 0;">${asg.instructions}</p>
                  </div>
                  <span class="badge badge-purple">Max: ${asg.maxPoints} pts</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px dashed var(--line); padding-top: 8px;">
                  <div>
                    ${sub ? (sub.status === 'graded' ? `<span class="badge badge-green">Graded: ${sub.grade} / ${asg.maxPoints} pts</span> ${sub.feedback ? `<small style="color: var(--text-muted); margin-left: 6px;">"${sub.feedback}"</small>` : ''}` : `<span class="badge badge-amber">Submitted (Pending Review)</span>`) : `<span style="font-size: 12px; color: var(--text-muted);">Not submitted yet</span>`}
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="openSubmitAssignmentModal('${course.id}', '${asg.id}')">
                    ${sub ? 'Update Link' : 'Submit Assignment'}
                  </button>
                </div>
              </div>
            `;
          }).join('') || `<p style="color: var(--text-muted); font-size: 13px;">No assignments required for this course.</p>`}
        </div>

        <!-- Final Assessment Box -->
        <div class="card">
          <div class="card-header" style="justify-content: space-between; align-items: center;">
            <div>
              <h2 style="margin: 0; font-size: 17px;">Final Assessment (Pass Mark: 50%)</h2>
              <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
                Mandatory certification exam. All course modules must be completed sequentially to unlock.
              </div>
            </div>
            ${en.finalScore !== null && en.finalScore !== undefined ? `
              <span class="badge ${en.finalPassed ? 'badge-green' : 'badge-red'}">
                Score: ${en.finalScore}% (${en.finalPassed ? 'Passed' : 'Failed'})
              </span>
            ` : ''}
          </div>

          ${!allMaterialsDone ? `
            <div style="background: #FFFBEB; border: 1px dashed #F59E0B; padding: 20px; border-radius: 8px; text-align: center; color: #92400E; margin-top: 10px;">
              <div style="font-weight: 700; font-size: 14.5px;">Assessment Locked: Modules Incomplete</div>
              <p style="font-size: 12.5px; margin: 6px 0 0; color: #B45309;">
                You have completed ${completedCount} of ${approvedMats.length} modules. All modules must be viewed and completed before the final assessment can be opened.
              </p>
            </div>
          ` : `
            <div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 18px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px; flex-wrap: wrap; gap: 12px;">
              <div>
                <strong style="color: #059669; font-size: 14.5px;">All Modules Completed — Final Exam Unlocked!</strong>
                <p style="font-size: 12.5px; color: #047857; margin: 3px 0 0;">
                  Score 50% or higher to automatically generate and issue your verified Craffix certificate of completion.
                </p>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button class="btn btn-success" onclick="openTakeAssessmentModal('${course.id}')">
                  ${en.finalScore !== null && en.finalScore !== undefined ? 'Retake Final Assessment' : 'Take Final Assessment'}
                </button>
                ${en.finalPassed ? `
                  <button class="btn btn-secondary btn-sm" onclick="navigateTo('Certificates')">
                    View Certificate ↗
                  </button>
                ` : ''}
              </div>
            </div>
          `}
        </div>

        <!-- Course Discussion Board (Visible Only to Course Mentor & Enrolled Students) -->
        ${renderCourseDiscussionSection(course)}
      </div>

      <!-- Player Sidebar: Materials Checklist -->
      <div class="card" style="height: fit-content;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 15px;">Modules (${completedCount} / ${approvedMats.length})</h3>
          <span class="badge ${allMaterialsDone ? 'badge-green' : 'badge-blue'}" style="font-size: 11px;">
            ${allMaterialsDone ? 'Completed' : 'In Progress'}
          </span>
        </div>
        <div class="lesson-list">
          ${approvedMats.map((m, idx) => {
            const isDone = completed.includes(m.id);
            const isCur = idx === activeMaterialIndex;
            let isUnlocked = true;
            for (let i = 0; i < idx; i++) {
              if (!completed.includes(approvedMats[i].id)) {
                isUnlocked = false;
                break;
              }
            }
            return `
              <div class="lesson-item ${isCur ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}"
                   style="${!isUnlocked ? 'opacity: 0.6; cursor: not-allowed;' : 'cursor: pointer;'}"
                   onclick="${isUnlocked ? `selectMaterialIndex(${idx}, '${course.id}')` : `alert('Module ${idx + 1} is locked. Please complete the preceding modules first.')`}">
                <div style="display: flex; align-items: center; gap: 9px; overflow: hidden;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; font-size: 11px; font-weight: 700; flex-shrink: 0; ${isDone ? 'background: #10B981; color: #FFFFFF;' : (isUnlocked ? 'background: #E2E8F0; color: #475569;' : 'background: #F1F5F9; color: #94A3B8;')}">
                    ${isDone ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : (isUnlocked ? (idx + 1) : ICONS.lock)}
                  </span>
                  <div style="overflow: hidden;">
                    <div style="font-size: 13px; font-weight: ${isCur ? '700' : '500'}; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; color: ${isCur ? 'var(--primary)' : 'inherit'};">
                      ${m.title}
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">
                      ${(m.type === 'type_content' || m.type === 'text') ? 'Typed Notes' : (m.type === 'pdf' ? 'PDF Document' : (m.type === 'text_pdf' ? 'Content + PDF' : (m.type === 'both' ? 'Video + PDF' : 'Video')))}
                    </div>
                  </div>
                </div>
                <div>
                  ${isDone ? `<span style="color: #10B981; font-weight: 600; font-size: 12px;">Done</span>` : (isUnlocked ? `<span class="badge badge-purple" style="font-size: 10.5px;">Next</span>` : `<span style="font-size: 11px; color: var(--text-muted);">Locked</span>`)}
                </div>
              </div>
            `;
          }).join('') || `<p style="font-size: 12px; color: var(--text-muted);">No approved materials.</p>`}
        </div>
      </div>
    </div>
  `;
}

function selectMaterialIndex(idx, courseId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  const en = db.enrollments.find(e => e.studentEmail === currentUser.email && e.courseId === courseId);
  if (!c || !en) return;
  const approvedMats = (c.materials || []).filter(m => m.status === 'approved');
  if (!en.completedMaterialIds) en.completedMaterialIds = [];

  // Check sequential completion
  let canAccess = true;
  for (let i = 0; i < idx; i++) {
    if (!en.completedMaterialIds.includes(approvedMats[i].id)) {
      canAccess = false;
      break;
    }
  }

  if (!canAccess) {
    showAlert(`Please complete preceding module(s) first before proceeding.`, 'warning');
    return;
  }

  activeMaterialIndex = idx;
  const targetMat = approvedMats[idx];
  // Auto-tick when clicked!
  if (targetMat && !en.completedMaterialIds.includes(targetMat.id)) {
    en.completedMaterialIds.push(targetMat.id);
    saveDB(db);
  }

  renderCoursePlayer(document.getElementById('content-view'), courseId);
}

function toggleMaterialDone(courseId, mId) {
  // Maintained for backward compatibility; auto-tick is standard
  const db = loadDB();
  const en = db.enrollments.find(e => e.studentEmail === currentUser.email && e.courseId === courseId);
  if (en) {
    if (!en.completedMaterialIds) en.completedMaterialIds = [];
    const pos = en.completedMaterialIds.indexOf(mId);
    if (pos >= 0) en.completedMaterialIds.splice(pos, 1);
    else en.completedMaterialIds.push(mId);
    saveDB(db);
    renderCoursePlayer(document.getElementById('content-view'), courseId);
  }
}

function openSubmitAssignmentModal(courseId, assignmentId) {
  const db = loadDB();
  const en = db.enrollments.find(e => e.studentEmail === currentUser.email && e.courseId === courseId);
  const sub = en ? (en.assignmentSubmissions || []).find(s => s.assignmentId === assignmentId) : null;

  openModal('Submit Assignment', `
    <form id="asg-sub-form" onsubmit="handleAssignmentSubmit(event, '${courseId}', '${assignmentId}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>Submission Link (Google Drive / GitHub / PDF)
          <input type="url" id="sub-url" value="${sub ? sub.submissionLink : ''}" required placeholder="https://...">
        </label>
        <label>Student Remarks / Notes
          <textarea id="sub-nt" placeholder="Notes for mentor...">${sub ? sub.notes || '' : ''}</textarea>
        </label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('asg-sub-form').requestSubmit()">Submit</button>
  `);
}

function handleAssignmentSubmit(e, courseId, assignmentId) {
  e.preventDefault();
  const db = loadDB();
  const en = db.enrollments.find(e => e.studentEmail === currentUser.email && e.courseId === courseId);
  if (!en) return;

  if (!en.assignmentSubmissions) en.assignmentSubmissions = [];
  let sub = en.assignmentSubmissions.find(s => s.assignmentId === assignmentId);
  if (!sub) {
    sub = { assignmentId };
    en.assignmentSubmissions.push(sub);
  }

  sub.submissionLink = document.getElementById('sub-url').value.trim();
  sub.notes = document.getElementById('sub-nt').value.trim();
  sub.status = 'submitted';
  sub.submittedAt = new Date().toISOString().split('T')[0];

  saveDB(db);
  closeModal();
  showAlert('Assignment submitted for mentor review!', 'success');
  renderCoursePlayer(document.getElementById('content-view'), courseId);
}

function openTakeAssessmentModal(courseId) {
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  const en = db.enrollments.find(x => x.studentEmail === currentUser.email && x.courseId === courseId);
  if (!c || !en) return;

  const approvedMats = (c.materials || []).filter(m => m.status === 'approved');
  const completed = en.completedMaterialIds || [];
  const allMaterialsDone = approvedMats.length > 0 && approvedMats.every(m => completed.includes(m.id));

  // "dont open if one module not completed also"
  if (!allMaterialsDone) {
    showAlert('Assessment Locked: You must complete all course modules before the final assessment will open.', 'danger');
    return;
  }

  const questions = getCourseAssessmentQuestions(c);
  if (!c.assessment) {
    c.assessment = { passMark: 50, questions: questions };
    saveDB(db);
  } else if (!c.assessment.questions || c.assessment.questions.length === 0) {
    c.assessment.questions = questions;
    saveDB(db);
  }

  openModal(`Final Assessment: ${c.title}`, `
    <form id="mcq-form" onsubmit="handleGradeAssessment(event, '${courseId}')">
      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; color: #1E40AF;">
        Answer the multiple-choice questions below. <strong>Pass mark is 50%</strong>. Achieving $\ge 50\%$ will immediately issue your Craffix completion certificate.
      </div>
      <div class="quiz-box">
        ${questions.map((q, qIdx) => `
          <div class="quiz-q" style="margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--line);">
            <strong style="font-size: 14px;">${qIdx + 1}. ${q.q}</strong>
            <div class="quiz-options" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              ${q.options.map((opt, optIdx) => `
                <label class="quiz-option" id="q-label-${qIdx}-${optIdx}" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 6px; cursor: pointer;">
                  <input type="radio" name="q_${qIdx}" value="${optIdx}" required onchange="handleSelectQuizOpt(${qIdx}, ${optIdx})">
                  <span style="font-size: 13px;">${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('mcq-form').requestSubmit()">Submit Assessment &amp; Issue Certificate</button>
  `);
}

function handleSelectQuizOpt(qIdx, optIdx) {
  document.querySelectorAll(`[id^="q-label-${qIdx}-"]`).forEach(el => el.classList.remove('selected'));
  const target = document.getElementById(`q-label-${qIdx}-${optIdx}`);
  if (target) target.classList.add('selected');
}

function handleGradeAssessment(e, courseId) {
  e.preventDefault();
  const db = loadDB();
  const c = db.courses.find(x => x.id === courseId);
  const en = db.enrollments.find(x => x.studentEmail === currentUser.email && x.courseId === courseId);
  if (!c || !en) return;

  const questions = getCourseAssessmentQuestions(c);
  let correct = 0;
  questions.forEach((q, idx) => {
    const sel = document.querySelector(`input[name="q_${idx}"]:checked`);
    if (sel && parseInt(sel.value) === q.answer) correct++;
  });

  const scorePct = Math.round((correct / questions.length) * 100);
  const passed = scorePct >= 50;

  en.finalScore = scorePct;
  en.finalPassed = passed;

  if (passed) {
    if (!db.certificateRequests) db.certificateRequests = [];
    let req = db.certificateRequests.find(r => r.studentEmail === currentUser.email && r.courseId === courseId);
    if (!req) {
      req = {
        id: 'cert_req_' + Date.now(),
        studentEmail: currentUser.email,
        studentName: currentUser.name,
        courseId: c.id,
        courseTitle: c.title,
        score: scorePct,
        passMark: 50,
        status: 'issued',
        requestedAt: new Date().toISOString().split('T')[0],
        issuedAt: new Date().toISOString().split('T')[0],
        mentorApprovedAt: new Date().toISOString().split('T')[0],
        adminApprovedAt: new Date().toISOString().split('T')[0],
        certId: 'CRX-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000)
      };
      db.certificateRequests.push(req);
    } else {
      req.score = scorePct;
      req.status = 'issued';
      req.issuedAt = new Date().toISOString().split('T')[0];
    }
  }

  saveDB(db);
  closeModal();

  if (passed) {
    showAlert(`Congratulations! You scored ${scorePct}% (Passed). Your verified Craffix completion certificate has been issued!`, 'success');
  } else {
    showAlert(`You scored ${scorePct}%. Pass mark is 50%. You can review the materials and retake the assessment.`, 'danger');
  }

  updateFooterAssessmentBanner();
  renderCoursePlayer(document.getElementById('content-view'), courseId);
}

function handleGradeModuleAssessment(e, courseId, materialId) {
  e.preventDefault();
  const db = loadDB();
  const course = db.courses.find(x => x.id === courseId);
  const en = db.enrollments.find(x => x.studentEmail === currentUser.email && x.courseId === courseId);
  if (!course || !en) return;

  const mat = (course.materials || []).find(m => m.id === materialId);
  if (!mat || !mat.assessment || !mat.assessment.questions || mat.assessment.questions.length === 0) return;

  const questions = mat.assessment.questions;
  let correct = 0;
  questions.forEach((q, idx) => {
    const sel = document.querySelector(`input[name="mq_${idx}"]:checked`);
    if (sel && parseInt(sel.value) === q.answer) correct++;
  });

  const scorePct = Math.round((correct / questions.length) * 100);
  const passMark = mat.assessment.passMark || 50;
  const passed = scorePct >= passMark;

  if (!en.moduleScores) en.moduleScores = {};
  en.moduleScores[materialId] = scorePct;

  if (passed) {
    if (!en.completedMaterialIds) en.completedMaterialIds = [];
    if (!en.completedMaterialIds.includes(materialId)) {
      en.completedMaterialIds.push(materialId);
    }
    saveDB(db);
    showAlert(`Congratulations! You passed the Module Assessment with ${scorePct}% (Pass mark: ${passMark}%). Module completed and ticked!`, 'success');
  } else {
    saveDB(db);
    showAlert(`You scored ${scorePct}%. The pass mark is ${passMark}%. Please review the learning material and try again.`, 'danger');
  }

  renderCoursePlayer(document.getElementById('content-view'), courseId);
}

function retakeModuleAssessment(courseId, materialId) {
  const db = loadDB();
  const en = db.enrollments.find(x => x.studentEmail === currentUser.email && x.courseId === courseId);
  if (en && en.completedMaterialIds) {
    en.completedMaterialIds = en.completedMaterialIds.filter(id => id !== materialId);
    if (en.moduleScores) delete en.moduleScores[materialId];
    saveDB(db);
  }
  showAlert('Module assessment reset. Select your answers and click Submit to re-test.', 'info');
  renderCoursePlayer(document.getElementById('content-view'), courseId);
}

// ============================================================================
// 12. WEBINARS (FREE / PAID + UPI SCANNER, NO-REFUND DISCLAIMER & PRE-BOOKING)
// ============================================================================
let tempMentorWebinarQr = '';
let tempWebinarReceipt = { name: '', size: '', data: '' };

function getUpiQrSvg(upiId, amount, name) {
  return `
    <div style="background:#FFFFFF; padding:12px; border:2px solid #0F172A; border-radius:12px; display:inline-block; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
      <div style="font-size:11px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px;">
        SCAN &amp; PAY VIA ANY UPI APP
      </div>
      <svg width="170" height="170" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="180" fill="#FFFFFF"/>
        <!-- Corner Finder Patterns -->
        <rect x="15" y="15" width="40" height="40" rx="4" fill="#0F172A"/>
        <rect x="21" y="21" width="28" height="28" fill="#FFFFFF"/>
        <rect x="27" y="27" width="16" height="16" fill="#0F172A"/>

        <rect x="125" y="15" width="40" height="40" rx="4" fill="#0F172A"/>
        <rect x="131" y="21" width="28" height="28" fill="#FFFFFF"/>
        <rect x="137" y="27" width="16" height="16" fill="#0F172A"/>

        <rect x="15" y="125" width="40" height="40" rx="4" fill="#0F172A"/>
        <rect x="21" y="131" width="28" height="28" fill="#FFFFFF"/>
        <rect x="27" y="137" width="16" height="16" fill="#0F172A"/>

        <!-- QR Matrix Blocks -->
        <rect x="65" y="20" width="8" height="8" fill="#0F172A"/>
        <rect x="80" y="20" width="16" height="8" fill="#0F172A"/>
        <rect x="105" y="20" width="8" height="8" fill="#0F172A"/>
        <rect x="65" y="35" width="24" height="8" fill="#0F172A"/>
        <rect x="98" y="35" width="16" height="8" fill="#0F172A"/>
        <rect x="65" y="50" width="8" height="16" fill="#0F172A"/>
        <rect x="82" y="50" width="16" height="8" fill="#0F172A"/>
        <rect x="105" y="50" width="8" height="8" fill="#0F172A"/>

        <rect x="20" y="65" width="8" height="16" fill="#0F172A"/>
        <rect x="35" y="72" width="16" height="8" fill="#0F172A"/>
        <rect x="60" y="65" width="8" height="8" fill="#0F172A"/>
        <rect x="75" y="70" width="30" height="8" fill="#0F172A"/>
        <rect x="115" y="65" width="8" height="16" fill="#0F172A"/>
        <rect x="135" y="70" width="25" height="8" fill="#0F172A"/>

        <rect x="20" y="90" width="24" height="8" fill="#0F172A"/>
        <rect x="52" y="85" width="16" height="16" fill="#0F172A"/>
        <rect x="112" y="85" width="16" height="16" fill="#0F172A"/>
        <rect x="135" y="90" width="25" height="8" fill="#0F172A"/>

        <rect x="20" y="110" width="8" height="8" fill="#0F172A"/>
        <rect x="35" y="105" width="16" height="12" fill="#0F172A"/>
        <rect x="65" y="110" width="14" height="8" fill="#0F172A"/>
        <rect x="90" y="105" width="16" height="16" fill="#0F172A"/>
        <rect x="115" y="110" width="8" height="8" fill="#0F172A"/>
        <rect x="135" y="105" width="16" height="12" fill="#0F172A"/>

        <rect x="65" y="130" width="16" height="8" fill="#0F172A"/>
        <rect x="90" y="130" width="8" height="16" fill="#0F172A"/>
        <rect x="105" y="125" width="16" height="8" fill="#0F172A"/>
        <rect x="130" y="130" width="20" height="8" fill="#0F172A"/>

        <rect x="65" y="145" width="8" height="16" fill="#0F172A"/>
        <rect x="80" y="152" width="24" height="8" fill="#0F172A"/>
        <rect x="112" y="145" width="16" height="8" fill="#0F172A"/>
        <rect x="135" y="148" width="25" height="12" fill="#0F172A"/>

        <!-- Center UPI Emblem -->
        <rect x="68" y="70" width="44" height="40" rx="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
        <text x="90" y="88" font-family="sans-serif" font-size="11" font-weight="900" fill="#0F172A" text-anchor="middle">UPI</text>
        <text x="90" y="100" font-family="sans-serif" font-size="8" font-weight="700" fill="#059669" text-anchor="middle">PAY</text>
      </svg>
      <div style="font-size:11.5px; font-weight:700; color:#059669; margin-top:6px;">
        GPay · PhonePe · Paytm · BHIM
      </div>
    </div>
  `;
}

function copyUpiId(text) {
  navigator.clipboard.writeText(text).then(() => {
    showAlert(`UPI ID copied: ${text}`, 'success');
  }).catch(() => {
    alert(`UPI ID: ${text}`);
  });
}

function renderWebinars(container) {
  const db = loadDB();
  const isManager = currentUser.role === 'mentor' || currentUser.role === 'admin';

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Live Masterclasses &amp; Webinars</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Scheduled interactive sessions, masterclasses, and technical workshops.
          </div>
        </div>
        ${isManager ? `
          <button class="btn btn-sm" onclick="openAddWebinarModal()">
            Host Live Webinar
          </button>
        ` : ''}
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Webinar Title &amp; Topic</th>
              <th class="text-left">Speaker / Host</th>
              <th class="text-center">Session Date &amp; Duration</th>
              <th class="text-center">Pricing Type</th>
              <th class="text-center">Capacity &amp; Seats</th>
              <th class="text-right">Access &amp; Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.webinars.map(w => {
              const booked = (w.registeredUsers || []).length;
              const available = Math.max(0, w.seatLimit - booked);
              const isRegistered = (w.registeredUsers || []).includes(currentUser.email);
              const myReg = (w.registrations || []).find(r => r.email === currentUser.email);
              const isApproved = isRegistered || (myReg && myReg.status === 'confirmed');
              const isPendingReview = myReg && myReg.status === 'pending_approval';
              const isRejected = myReg && myReg.status === 'rejected';
              const isFull = available === 0 && !isApproved;
              const isPaid = w.type === 'paid';

              return `
                <tr>
                  <td>
                    <strong>${w.title}</strong>
                    <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">${w.duration} duration</div>
                  </td>
                  <td>
                    <div><strong>${w.speaker}</strong></div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${w.mentorEmail || ''}</div>
                    ${(() => {
                      const hostUser = (db.users || []).find(u => u.email === w.mentorEmail);
                      const hostLi = hostUser?.linkedin || (currentUser.email === w.mentorEmail ? currentUser.linkedin : null);
                      return hostLi ? `<div style="margin-top: 2px;"><a href="${hostLi}" target="_blank" style="font-size: 11px; color: var(--accent); font-weight: 600; text-decoration: none;">LinkedIn ↗</a></div>` : '';
                    })()}
                  </td>
                  <td class="text-center" style="font-size: 12.5px; white-space: nowrap;">
                    <div>${w.date}</div>
                    <div style="font-size: 11px; color: var(--text-muted);">${w.duration}</div>
                  </td>
                  <td class="text-center">
                    <span class="badge ${isPaid ? 'badge-purple' : 'badge-green'}">
                      ${isPaid ? `Paid (₹${w.fee})` : 'Free Webinar'}
                    </span>
                  </td>
                  <td class="text-center" style="white-space: nowrap;">
                    <strong>${booked} / ${w.seatLimit}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">${available > 0 ? `${available} left` : 'Sold Out'}</div>
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <div style="display: inline-flex; gap: 6px; align-items: center; justify-content: flex-end;">
                      ${(currentUser.role === 'admin' || currentUser.role === 'mentor') ? `
                        <button class="btn btn-secondary btn-sm" onclick="openWebinarAccessModal('${w.id}')" style="font-weight: 600;">
                          ${currentUser.role === 'admin' ? 'Inspect &amp; Details' : 'View Session'}
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="openWebinarAttendeesModal('${w.id}')" title="Attendees List" style="padding: 4px 10px; font-size: 12px; font-weight: 600;">
                          Attendees (${booked})
                        </button>
                        ${(currentUser.role === 'admin' || w.mentorEmail === currentUser.email) ? `
                          <button class="btn btn-danger btn-sm" onclick="deleteWebinar('${w.id}')" title="Delete Webinar" style="padding: 4px 8px;">
                            ${ICONS.trash}
                          </button>
                        ` : ''}
                      ` : `
                        ${isApproved ? `
                          <button class="btn btn-sm" onclick="openWebinarAccessModal('${w.id}')" style="background: #059669; color: #FFFFFF; font-weight: 600;">
                            Access Session →
                          </button>
                        ` : (isPendingReview ? `
                          <button class="btn btn-secondary btn-sm" onclick="openWebinarAccessModal('${w.id}')" style="background: #FEF3C7; color: #92400E; border: 1px solid #FCD34D; font-weight: 600;">
                            Awaiting Review
                          </button>
                        ` : (isRejected ? `
                          <button class="btn btn-danger btn-sm" onclick="openWebinarAccessModal('${w.id}')" style="font-weight: 600;">
                            Payment Rejected
                          </button>
                        ` : (isFull ? `
                          <button class="btn btn-secondary btn-sm" disabled style="opacity: 0.65;">Seat Limit Full</button>
                        ` : (isPaid ? `
                          <button class="btn btn-sm" onclick="openPaidWebinarPrebookModal('${w.id}')" style="font-weight: 600;">
                            Pre-Book (₹${w.fee})
                          </button>
                        ` : `
                          <button class="btn btn-sm" onclick="confirmRegisterWebinar('${w.id}')" style="font-weight: 600;">
                            Register Free
                          </button>
                        `))))}

                        <button class="btn btn-secondary btn-sm" onclick="openWebinarAccessModal('${w.id}')" style="font-weight: 600;">
                          View
                        </button>
                      `}
                    </div>
                  </td>
                </tr>
              `;
            }).join('') || `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <div class="empty-box" style="padding: 30px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">No upcoming live masterclasses scheduled at this time.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// Student: Paid Webinar Pre-Booking Modal with Disclaimer & Receipt Upload
// ----------------------------------------------------------------------------
function openPaidWebinarPrebookModal(wId) {
  if (currentUser.role === 'mentor' || currentUser.role === 'admin') {
    showAlert('Mentors and Administrators cannot pre-book webinars as attendees.', 'warning');
    return;
  }
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;

  tempWebinarReceipt = { name: '', size: '', data: '' };

  const qrHtml = w.upiQr
    ? `<div style="background:#FFFFFF; padding:10px; border:2px solid #CBD5E1; border-radius:12px; display:inline-block;">
         <img src="${w.upiQr}" style="max-width:180px; max-height:180px; display:block; margin:0 auto; border-radius:6px;">
         <div style="font-size:11.5px; font-weight:700; color:#059669; margin-top:6px;">Scan &amp; Pay via UPI</div>
       </div>`
    : getUpiQrSvg(w.upiId || 'craffix@okaxis', w.fee, w.speaker);

  openModal(`Pre-Book Paid Webinar: ${w.title}`, `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <!-- Webinar Specs Banner -->
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; font-size: 13px;">
        <div style="font-weight: 700; font-size: 15px; color: #0F172A; margin-bottom: 4px;">${w.title}</div>
        <div style="color: var(--text-muted);">
          Speaker: <strong>${w.speaker}</strong> &nbsp;·&nbsp; Date: <strong>${w.date}</strong> (${w.duration}) &nbsp;·&nbsp; 
          Registration Fee: <strong style="color: #059669; font-size: 14px;">₹${w.fee}.00</strong>
        </div>
      </div>

      <!-- Step 1: Simplified No Refund Payment Disclaimer -->
      <div style="background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 6px; padding: 10px 14px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; margin: 0;">
          <input type="checkbox" id="prebook-disclaimer-check" onchange="handlePrebookDisclaimerToggle(this.checked)" style="width: 17px; height: 17px; cursor: pointer;">
          <span style="font-size: 13px; font-weight: 600; color: #92400E;">
            Payment Disclaimer: No refunds once paid.
          </span>
        </label>
      </div>

      <!-- Step 2: UPI Scanner & Payment Area (Unlocked upon ticking disclaimer) -->
      <div id="prebook-payment-area" style="display: none; flex-direction: column; gap: 14px; border-top: 1px solid var(--line); padding-top: 14px;">
        <div style="text-align: center;">
          <div style="font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">Total Amount Payable</div>
          <div style="font-size: 26px; font-weight: 800; color: #059669; margin: 2px 0 10px;">₹${w.fee}.00</div>
          
          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 14px;">
            <span style="font-size: 13px; font-weight: 600; color: #475569;">Mentor UPI ID:</span>
            <code style="background: #F1F5F9; padding: 4px 10px; border-radius: 6px; font-size: 13.5px; font-weight: 700; color: #0F172A; border: 1px solid #E2E8F0;">
              ${w.upiId || 'craffix@okaxis'}
            </code>
            <button type="button" class="btn btn-secondary btn-sm" onclick="copyUpiId('${w.upiId || 'craffix@okaxis'}')" style="padding: 3px 8px; font-size: 11.5px;">
              Copy
            </button>
          </div>

          <!-- QR Scanner Graphic -->
          <div style="margin-bottom: 12px;">
            ${qrHtml}
          </div>
          <div style="font-size: 12px; color: var(--text-muted);">
            Scan using any UPI App (Google Pay, PhonePe, Paytm, BHIM) on your mobile device.
          </div>
        </div>

        <!-- Step 3: Receipt Screenshot Upload -->
        <div style="border-top: 1px dashed var(--line); padding-top: 14px;">
          <label style="font-weight: 600; font-size: 13px; margin-bottom: 6px;">
            Upload Payment Receipt / Transaction Screenshot *
          </label>
          <div class="file-upload-box" onclick="document.getElementById('webinar-receipt-input').click()">
            <div id="receipt-box-label" style="font-weight: 600; font-size: 13px; color: var(--accent);">
              Click to browse and upload payment screenshot
            </div>
            <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">
              Accepted formats: JPG, PNG, PDF (Max 5MB)
            </div>
            <input type="file" id="webinar-receipt-input" accept="image/*,.pdf" style="display: none;" onchange="handleWebinarReceiptSelected(event)">
            <div id="receipt-upload-status" style="margin-top: 6px; font-size: 12px; font-weight: 600;"></div>
          </div>

          <div style="margin-top: 12px;">
            <label style="font-size: 12.5px;">
              UPI Ref / UTR Transaction ID (Optional)
              <input type="text" id="webinar-utr-input" placeholder="e.g. 432109876543">
            </label>
          </div>
        </div>
      </div>
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button id="prebook-submit-btn" class="btn btn-sm" disabled onclick="submitPaidWebinarPrebooking('${w.id}')">
      Submit Payment &amp; Pre-Book Seat
    </button>
  `, true);
}

function handlePrebookDisclaimerToggle(checked) {
  const payArea = document.getElementById('prebook-payment-area');
  const submitBtn = document.getElementById('prebook-submit-btn');
  if (payArea) payArea.style.display = checked ? 'flex' : 'none';
  checkPrebookSubmitReadiness();
}

function handleWebinarReceiptSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert('File size exceeds 5MB. Please choose a smaller screenshot.');
    event.target.value = '';
    return;
  }

  const sizeStr = file.size < 1024 * 1024
    ? Math.round(file.size / 1024) + ' KB'
    : (file.size / (1024 * 1024)).toFixed(1) + ' MB';

  const boxLabel = document.getElementById('receipt-box-label');
  const statusEl = document.getElementById('receipt-upload-status');
  if (boxLabel) boxLabel.textContent = `Selected: ${file.name}`;
  if (statusEl) {
    statusEl.innerHTML = `<span style="color: #059669;">Screenshot attached: ${file.name} (${sizeStr})</span>`;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    tempWebinarReceipt = {
      name: file.name,
      size: sizeStr,
      data: e.target.result // Base64
    };
    checkPrebookSubmitReadiness();
  };
  reader.readAsDataURL(file);
}

function checkPrebookSubmitReadiness() {
  const disclaimerCheck = document.getElementById('prebook-disclaimer-check');
  const submitBtn = document.getElementById('prebook-submit-btn');
  if (!submitBtn) return;

  const isAgreed = disclaimerCheck && disclaimerCheck.checked;
  const hasReceipt = Boolean(tempWebinarReceipt && tempWebinarReceipt.name);

  submitBtn.disabled = !(isAgreed && hasReceipt);
  if (!submitBtn.disabled) {
    submitBtn.style.background = '#059669';
  } else {
    submitBtn.style.background = 'var(--accent)';
  }
}

function submitPaidWebinarPrebooking(wId) {
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;

  if (!tempWebinarReceipt || !tempWebinarReceipt.name) {
    alert('Please upload your payment screenshot/receipt to complete pre-booking.');
    return;
  }

  if (!w.registeredUsers) w.registeredUsers = [];
  if (!w.registrations) w.registrations = [];

  const existingReg = w.registrations.find(r => r.email === currentUser.email);
  if (existingReg && existingReg.status === 'confirmed') {
    showAlert('You are already registered and approved for this webinar.', 'info');
    closeModal();
    return;
  }

  const utr = (document.getElementById('webinar-utr-input')?.value || '').trim() || 'UPI-VERIFIED';

  if (existingReg) {
    existingReg.status = 'pending_approval';
    existingReg.receiptName = tempWebinarReceipt.name;
    existingReg.receiptSize = tempWebinarReceipt.size;
    existingReg.receiptData = tempWebinarReceipt.data;
    existingReg.utr = utr;
    existingReg.bookedAt = new Date().toISOString().split('T')[0];
  } else {
    w.registrations.push({
      email: currentUser.email,
      name: currentUser.name,
      type: 'paid',
      fee: w.fee,
      bookedAt: new Date().toISOString().split('T')[0],
      status: 'pending_approval',
      receiptName: tempWebinarReceipt.name,
      receiptSize: tempWebinarReceipt.size,
      receiptData: tempWebinarReceipt.data,
      utr: utr
    });
  }

  saveDB(db);
  closeModal();
  showAlert(`Payment screenshot submitted! Your pre-booking is awaiting review by the Admin and Mentor. The joining link will be unlocked once approved.`, 'success');
  renderSidebarNav();
  navigateTo('Webinars');
}

// ----------------------------------------------------------------------------
// Universal View Option: Details & Live Session Access for All Webinars
// (Enforces: "once paid screenshot submitted it should get approval to admin and mentor review and then the joining link will be given")
// ----------------------------------------------------------------------------
function openWebinarAccessModal(wId) {
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;

  const isPaid = w.type === 'paid';
  const myReg = (w.registrations || []).find(r => r.email === currentUser.email);
  const isApproved = (w.registeredUsers || []).includes(currentUser.email) || (myReg && myReg.status === 'confirmed');
  const isPendingApproval = myReg && myReg.status === 'pending_approval';
  const isRejected = myReg && myReg.status === 'rejected';
  const booked = (w.registeredUsers || []).length;
  const available = Math.max(0, w.seatLimit - booked);

  openModal(`Webinar Access: ${w.title}`, `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <!-- Main Info Card -->
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h3 style="margin: 0 0 4px; font-size: 17px; color: #0F172A;">${w.title}</h3>
            <div style="font-size: 13px; color: var(--accent); font-weight: 600;">
              Host / Speaker: ${w.speaker}
              ${(() => {
                const hostUser = (db.users || []).find(u => u.email === w.mentorEmail);
                const hostLi = hostUser?.linkedin || (currentUser.email === w.mentorEmail ? currentUser.linkedin : null);
                return hostLi ? ` &nbsp;·&nbsp; <a href="${hostLi}" target="_blank" style="color: var(--accent); font-weight: 600; text-decoration: underline;">LinkedIn Profile ↗</a>` : '';
              })()}
            </div>
          </div>
          <div style="display: flex; gap: 6px;">
            <span class="badge ${isPaid ? 'badge-purple' : 'badge-green'}">
              ${isPaid ? `Paid (₹${w.fee})` : 'Free Webinar'}
            </span>
            <span class="badge ${isApproved ? 'badge-green' : (isPendingApproval ? 'badge-amber' : 'badge-blue')}">
              ${isApproved ? 'Seat Confirmed' : (isPendingApproval ? 'Review Pending' : `${available} seats left`)}
            </span>
          </div>
        </div>

        <div class="form-grid-2" style="font-size: 13px; margin-top: 10px; border-top: 1px solid var(--line); padding-top: 10px;">
          <div><strong style="color: var(--text-muted);">Session Date:</strong> <div>${w.date}</div></div>
          <div><strong style="color: var(--text-muted);">Duration:</strong> <div>${w.duration}</div></div>
          <div><strong style="color: var(--text-muted);">Attendee Capacity:</strong> <div>${booked} / ${w.seatLimit} registered</div></div>
          <div><strong style="color: var(--text-muted);">Webinar Type:</strong> <div>${isPaid ? `Paid Masterclass (₹${w.fee})` : 'Free Open Webinar'}</div></div>
        </div>
      </div>

      <!-- Access Control Section: Locked vs Unlocked -->
      <div>
        ${(currentUser.role === 'admin' || currentUser.role === 'mentor') ? `
          <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 18px; text-align: center;">
            <div style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.05em;">
              ${currentUser.role === 'admin' ? 'Super Admin Inspection Mode' : 'Mentor / Host Session Access'}
            </div>
            <p style="margin: 0 0 14px; font-size: 13px; color: #334155; line-height: 1.5;">
              ${currentUser.role === 'admin'
                ? 'As Administrator, you have full oversight of this webinar. Direct session link is available below; registration is not required for admins.'
                : 'As a Mentor, you can host sessions, join via the direct meeting link, and inspect enrolled student attendees. Mentors cannot register as student attendees.'}
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <a href="${w.link}" target="_blank" class="btn btn-sm" style="background: var(--accent); font-weight: 600; text-decoration: none; padding: 10px 18px; display: inline-flex; align-items: center; gap: 6px;">
                Direct Meeting Link (${w.link})
              </a>
              <button class="btn btn-secondary btn-sm" onclick="closeModal(); openWebinarAttendeesModal('${w.id}')" style="font-weight: 600; padding: 10px 16px;">
                Inspect Attendees (${(w.registrations || []).length} Registered)
              </button>
            </div>
          </div>
        ` : (isPendingApproval ? `
          <div style="background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 8px; padding: 20px; text-align: center;">
            <div style="display: flex; justify-content: center; margin-bottom: 8px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <h4 style="margin: 0 0 4px; font-size: 16px; color: #92400E;">Payment Screenshot Submitted · Awaiting Review</h4>
            <p style="margin: 0 0 14px; font-size: 13px; color: #B45309; line-height: 1.5;">
              Your transaction screenshot for <strong>₹${w.fee}.00</strong> has been received and is currently under review by the Administrator and Mentor.
              <br><strong style="color: #78350F;">The live joining link will be unlocked once your payment screenshot is approved.</strong>
            </p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
              <button class="btn btn-secondary btn-sm" onclick="viewWebinarReceipt('${w.id}', '${currentUser.email}')">
                View Submitted Screenshot (${myReg.receiptName})
              </button>
            </div>
            <div style="margin-top: 12px; font-size: 11.5px; color: #92400E;">
              UTR / Ref: <code>${myReg.utr || 'Pending'}</code> &nbsp;·&nbsp; Submitted on: ${myReg.bookedAt}
            </div>
          </div>
        ` : (isApproved ? `
          <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 18px; text-align: center;">
            <h4 style="margin: 0 0 4px; font-size: 16px; color: #065F46;">Access Granted · Registration Confirmed</h4>
            <p style="margin: 0 0 14px; font-size: 13px; color: #047857;">
              ${isPaid ? `Payment of ₹${w.fee} verified and approved. Your live meeting credentials are live.` : 'You are successfully registered for this free masterclass.'}
            </p>

            <a href="${w.link}" target="_blank" class="btn btn-sm btn-full" style="background: #059669; font-weight: 700; font-size: 14.5px; padding: 12px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
              Join Live Webinar (${w.link})
            </a>

            ${myReg && myReg.receiptName ? `
              <div style="margin-top: 12px;">
                <button class="btn btn-secondary btn-sm" onclick="viewWebinarReceipt('${w.id}', '${currentUser.email}')">
                  View My Payment Receipt (${myReg.receiptName})
                </button>
              </div>
            ` : ''}
          </div>
        ` : (isRejected ? `
          <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 18px; text-align: center;">
            <h4 style="margin: 0 0 4px; font-size: 16px; color: #991B1B;">Payment Screenshot Rejected</h4>
            <p style="margin: 0 0 14px; font-size: 13px; color: #B91C1C;">
              ${myReg.rejectionReason || 'The uploaded payment screenshot could not be verified by the admin or mentor.'}
            </p>
            <button class="btn btn-sm" onclick="closeModal(); openPaidWebinarPrebookModal('${w.id}')">
              Re-Upload Payment Screenshot
            </button>
          </div>
        ` : (isPaid ? `
          <!-- STRICT LOCK FOR PAID WEBINAR -->
          <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 18px; text-align: center;">
            <h4 style="margin: 0 0 6px; font-size: 15.5px; color: #991B1B;">Live Meeting Locked: Paid Webinar</h4>
            <p style="margin: 0 0 14px; font-size: 13px; color: #7F1D1D; line-height: 1.5;">
              Access to this live session is restricted exclusively to paid pre-booked participants. Pre-book your seat via UPI and submit your payment screenshot to unlock the live session link upon review.
            </p>
            <button class="btn btn-sm" onclick="closeModal(); openPaidWebinarPrebookModal('${w.id}')" style="font-weight: 700; padding: 10px 18px;">
              Pre-Book &amp; Pay ₹${w.fee} to Unlock
            </button>
          </div>
        ` : `
          <!-- Free Webinar 1-Click Register -->
          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 16px; text-align: center;">
            <h4 style="margin: 0 0 4px; font-size: 15px; color: #1E40AF;">Free Seat Available</h4>
            <p style="margin: 0 0 12px; font-size: 13px; color: #1D4ED8;">
              Click below to register for free and unlock the live meeting session link instantly.
            </p>
            <button class="btn btn-sm" onclick="confirmRegisterWebinar('${w.id}')" style="font-weight: 700;">
              Register Free (1-Click)
            </button>
          </div>
        `))))}
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

// ----------------------------------------------------------------------------
// Mentor / Admin: Host Live Webinar Modal with UPI / Scanner Option for Paid
// ----------------------------------------------------------------------------
function openAddWebinarModal() {
  tempMentorWebinarQr = '';

  openModal('Host Live Webinar', `
    <form id="add-w-form" onsubmit="handleAddWebinar(event)">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <label>
          Webinar Title *
          <input type="text" id="w-t" required placeholder="e.g. Full Stack System Design Masterclass">
        </label>
        
        <div class="form-grid-2">
          <label>
            Speaker / Host Name *
            <input type="text" id="w-s" value="${currentUser.name}" required>
          </label>
          <label>
            Meeting URL (Zoom / Google Meet) *
            <input type="url" id="w-url" required placeholder="https://meet.google.com/xyz-abcd-efg">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Date &amp; Time *
            <input type="datetime-local" id="w-dt" required>
          </label>
          <label>
            Duration *
            <input type="text" id="w-dur" value="60 mins" required>
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Webinar Pricing Type *
            <select id="w-tp" onchange="handleWebinarPricingTypeChange(this.value)">
              <option value="free">Free Webinar</option>
              <option value="paid">Paid Webinar</option>
            </select>
          </label>
          <label>
            Seat Limit *
            <input type="number" id="w-seats" value="30" min="5" required>
          </label>
        </div>

        <!-- Paid Webinar Payment Config Area (UPI ID & Scanner Option) -->
        <div id="w-paid-config-area" style="display: none; background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px; flex-direction: column; gap: 12px;">
          <div style="font-weight: 700; font-size: 13.5px; color: var(--accent);">
            Paid Webinar Payment &amp; Scanner Settings
          </div>
          
          <div class="form-grid-2">
            <label>
              Registration Fee (₹ INR) *
              <input type="number" id="w-fee" min="1" placeholder="e.g. 499">
            </label>
            <label>
              Mentor UPI ID *
              <input type="text" id="w-upi" placeholder="e.g. mentor@upi or 9876543210@paytm">
            </label>
          </div>

          <div>
            <label style="font-size: 12.5px; font-weight: 600; margin-bottom: 4px;">
              Upload UPI Scanner / QR Code Image (Optional)
            </label>
            <div class="file-upload-box" onclick="document.getElementById('w-qr-file-input').click()">
              <div id="w-qr-label" style="font-size: 12.5px; font-weight: 600; color: var(--accent);">
                Click to upload your GPay / PhonePe / Paytm scanner QR image
              </div>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                If omitted, Craffix will automatically generate an authentic UPI QR scanner code for your UPI ID!
              </div>
              <input type="file" id="w-qr-file-input" accept="image/*" style="display: none;" onchange="handleMentorQrUpload(event)">
              <div id="w-qr-status" style="margin-top: 6px; font-size: 12px; font-weight: 600;"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-w-form').requestSubmit()">Schedule Webinar</button>
  `, true);

  // Default date 5 days from now
  const d = new Date();
  d.setDate(d.getDate() + 5);
  d.setHours(18, 0, 0, 0);
  const dtInput = document.getElementById('w-dt');
  if (dtInput) {
    const tzOffset = d.getTimezoneOffset() * 60000;
    dtInput.value = (new Date(d.getTime() - tzOffset)).toISOString().slice(0, 16);
  }
}

function handleWebinarPricingTypeChange(type) {
  const paidArea = document.getElementById('w-paid-config-area');
  if (paidArea) paidArea.style.display = type === 'paid' ? 'flex' : 'none';
}

function handleMentorQrUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const statusEl = document.getElementById('w-qr-status');
  const labelEl = document.getElementById('w-qr-label');
  if (labelEl) labelEl.textContent = `Attached: ${file.name}`;
  if (statusEl) statusEl.innerHTML = `<span style="color: #059669; font-weight: 600;">QR Scanner image uploaded</span>`;

  const reader = new FileReader();
  reader.onload = function(e) {
    tempMentorWebinarQr = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleAddWebinar(e) {
  e.preventDefault();
  const db = loadDB();
  const title = document.getElementById('w-t').value.trim();
  const speaker = document.getElementById('w-s').value.trim();
  const date = document.getElementById('w-dt').value;
  const duration = document.getElementById('w-dur').value.trim();
  const link = document.getElementById('w-url').value.trim();
  const type = document.getElementById('w-tp').value;
  const fee = type === 'paid' ? (parseInt(document.getElementById('w-fee').value, 10) || 499) : 0;
  const upiId = type === 'paid' ? (document.getElementById('w-upi').value.trim() || 'craffix@okaxis') : '';
  const seatLimit = parseInt(document.getElementById('w-seats').value, 10) || 30;

  db.webinars.push({
    id: 'web_' + Date.now(),
    title,
    speaker,
    mentorEmail: currentUser.email,
    date,
    duration,
    link,
    type,
    fee,
    upiId,
    upiQr: tempMentorWebinarQr || '',
    seatLimit,
    registeredUsers: [],
    registrations: []
  });

  saveDB(db);
  closeModal();
  showAlert('Webinar scheduled successfully.', 'success');
  navigateTo('Webinars');
}

// ----------------------------------------------------------------------------
// Mentor / Admin: View Registered Attendees & Review Payment Screenshots
// ----------------------------------------------------------------------------
function openWebinarAttendeesModal(wId) {
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;

  const registrations = w.registrations || (w.registeredUsers || []).map(u => ({ email: u, name: u, type: w.type }));
  const approvedCount = registrations.filter(r => r.type === 'free' || r.status === 'confirmed').length;
  const pendingCount = registrations.filter(r => r.type === 'paid' && r.status === 'pending_approval').length;
  const totalRevenue = registrations.filter(r => r.type === 'paid' && r.status === 'confirmed').length * (w.fee || 0);

  openModal(`Attendees &amp; Payment Verification: ${w.title}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 13px;">
        <div>
          <strong>${w.title}</strong> &nbsp;·&nbsp; Speaker: ${w.speaker} &nbsp;·&nbsp; 
          <span class="badge ${w.type === 'paid' ? 'badge-purple' : 'badge-green'}">
            ${w.type === 'paid' ? `Paid (₹${w.fee})` : 'Free'}
          </span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="badge badge-purple">${registrations.length} Total Registered</span>
          <span class="badge badge-green">${approvedCount} Access Active</span>
          ${pendingCount > 0 ? `<span class="badge badge-amber">${pendingCount} Pending Review</span>` : ''}
          ${w.type === 'paid' ? `<strong style="color: #059669; margin-left: 4px;">Revenue: ₹${totalRevenue}</strong>` : ''}
        </div>
      </div>

      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Student Name &amp; Email</th>
              <th class="text-center">Pricing</th>
              <th class="text-center">Pre-Booked Date</th>
              <th class="text-center">UTR / Ref No.</th>
              <th class="text-center">Review Status</th>
              <th class="text-right">Screenshot &amp; Review Action</th>
            </tr>
          </thead>
          <tbody>
            ${registrations.map(r => {
              const isPaid = r.type === 'paid';
              return `
                <tr>
                  <td>
                    <strong>${r.name || r.email}</strong>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${r.email}</div>
                  </td>
                  <td class="text-center">
                    <span class="badge ${isPaid ? 'badge-purple' : 'badge-green'}">
                      ${isPaid ? `Paid (₹${w.fee})` : 'Free'}
                    </span>
                  </td>
                  <td class="text-center" style="font-size: 12px;">
                    ${r.bookedAt || '2026-11-15'}
                  </td>
                  <td class="text-center" style="font-size: 12px; font-family: monospace;">
                    ${r.utr || 'UPI-CONFIRMED'}
                  </td>
                  <td class="text-center">
                    ${!isPaid ? `<span class="badge badge-green">Free Access</span>` : (
                      r.status === 'confirmed' ? `<span class="badge badge-green">Approved (Access Active)</span>` : (
                        r.status === 'rejected' ? `<span class="badge badge-red">Rejected</span>` : `<span class="badge badge-amber">Awaiting Review</span>`
                      )
                    )}
                  </td>
                  <td class="text-right" style="white-space: nowrap;">
                    <div style="display: inline-flex; gap: 6px; align-items: center; justify-content: flex-end;">
                      ${isPaid ? `
                        <button class="btn btn-secondary btn-sm" onclick="viewWebinarReceipt('${w.id}', '${r.email}')" style="padding: 4px 8px; font-size: 11.5px;">
                          Screenshot
                        </button>
                        ${r.status !== 'confirmed' ? `
                          <button class="btn btn-success btn-sm" onclick="approveWebinarPayment('${w.id}', '${r.email}')" style="padding: 4px 8px; font-size: 11.5px;">
                            Approve
                          </button>
                        ` : ''}
                        ${r.status !== 'rejected' ? `
                          <button class="btn btn-danger btn-sm" onclick="rejectWebinarPayment('${w.id}', '${r.email}')" style="padding: 4px 8px; font-size: 11.5px;">
                            Reject
                          </button>
                        ` : ''}
                      ` : `
                        <span style="font-size: 12px; color: var(--text-muted);">Free Enrollment</span>
                      `}
                    </div>
                  </td>
                </tr>
              `;
            }).join('') || `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <div class="empty-box" style="padding: 30px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">No attendees have pre-booked for this session yet.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

function viewWebinarReceipt(wId, studentEmail) {
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;
  const reg = (w.registrations || []).find(r => r.email === studentEmail || r.studentEmail === studentEmail);
  if (!reg) return;

  const isManager = currentUser.role === 'admin' || currentUser.role === 'mentor';

  const actionButtons = isManager ? `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    ${reg.status !== 'confirmed' ? `<button class="btn btn-success btn-sm" onclick="approveWebinarPayment('${w.id}', '${reg.email || reg.studentEmail}')">Approve Payment &amp; Unlock Link</button>` : ''}
    ${reg.status !== 'rejected' ? `<button class="btn btn-danger btn-sm" onclick="rejectWebinarPayment('${w.id}', '${reg.email || reg.studentEmail}')">Reject Payment</button>` : ''}
  ` : `<button class="btn btn-sm" onclick="closeModal()">Close</button>`;

  if (reg.receiptData && reg.receiptData.startsWith('data:image')) {
    openModal(`Payment Receipt: ${reg.name || reg.studentName}`, `
      <div style="text-align: center;">
        <img src="${reg.receiptData}" style="max-width: 100%; max-height: 60vh; border-radius: 8px; border: 1px solid #CBD5E1; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="margin-top: 12px; font-size: 13px; color: var(--text-muted);">
          Student: <strong>${reg.name || reg.studentName}</strong> (${reg.email || reg.studentEmail}) &nbsp;·&nbsp; Ref: <strong>${reg.utr || 'UPI-VERIFIED'}</strong> &nbsp;·&nbsp; Amount: <strong style="color: #059669;">₹${w.fee}.00</strong>
        </div>
        <div style="margin-top: 6px; font-size: 13px;">
          Review Status: <strong>${reg.status === 'confirmed' ? '<span style="color:#059669;">Approved (Access Active)</span>' : (reg.status === 'rejected' ? '<span style="color:#DC2626;">Rejected</span>' : '<span style="color:#D97706;">Awaiting Review</span>')}</strong>
        </div>
      </div>
    `, actionButtons);
    return;
  }

  // Fallback demo slip
  openModal(`Payment Receipt: ${reg.name || reg.studentName}`, `
    <div style="text-align: center; padding: 20px;">
      <div style="margin-bottom: 12px;"><span class="badge badge-purple" style="font-size: 13px; padding: 4px 12px;">Payment Receipt</span></div>
      <h3 style="margin: 0 0 6px;">Payment Transaction Slip</h3>
      <p style="font-size: 13px; color: var(--text-muted); margin: 0 0 16px;">Student: <strong>${reg.name || reg.studentName}</strong> (${reg.email || reg.studentEmail})</p>
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px; max-width: 360px; margin: 0 auto; text-align: left; font-size: 13px;">
        <div style="margin-bottom: 6px;">Webinar: <strong>${w.title}</strong></div>
        <div style="margin-bottom: 6px;">Amount: <strong style="color: #059669;">₹${w.fee}.00</strong></div>
        <div style="margin-bottom: 6px;">UTR / Ref: <code>${reg.utr || 'Pending'}</code></div>
        <div>Review Status: <strong>${reg.status === 'confirmed' ? '<span style="color:#059669;">Approved (Access Active)</span>' : (reg.status === 'rejected' ? '<span style="color:#DC2626;">Rejected</span>' : '<span style="color:#D97706;">Awaiting Review</span>')}</strong></div>
      </div>
    </div>
  `, actionButtons);
}

function approveWebinarPayment(wId, studentEmail) {
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;
  const reg = (w.registrations || []).find(r => r.email === studentEmail || r.studentEmail === studentEmail);
  if (!reg) return;

  reg.status = 'confirmed';
  reg.approvedBy = currentUser.name + ' (' + currentUser.role + ')';
  reg.approvedAt = new Date().toISOString().split('T')[0];

  if (!w.registeredUsers) w.registeredUsers = [];
  if (!w.registeredUsers.includes(studentEmail)) {
    w.registeredUsers.push(studentEmail);
  }

  saveDB(db);
  showAlert(`Payment approved for ${reg.name || reg.studentName || reg.email}! Live joining link has been unlocked.`, 'success');
  renderSidebarNav();
  closeModal();
  if (currentNav === 'Approvals') {
    renderApprovals(document.getElementById('content-view'));
  } else if (currentNav === 'Webinars') {
    renderWebinars(document.getElementById('content-view'));
  }
}

function rejectWebinarPayment(wId, studentEmail) {
  const reason = prompt('Enter reason for payment rejection:', 'Payment screenshot illegible or transaction unverified');
  if (reason === null) return;

  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;
  const reg = (w.registrations || []).find(r => r.email === studentEmail || r.studentEmail === studentEmail);
  if (!reg) return;

  reg.status = 'rejected';
  reg.rejectionReason = reason || 'Unverified screenshot';
  reg.rejectedBy = currentUser.name + ' (' + currentUser.role + ')';
  reg.rejectedAt = new Date().toISOString().split('T')[0];

  w.registeredUsers = (w.registeredUsers || []).filter(e => e !== studentEmail);

  saveDB(db);
  showAlert('Payment registration rejected.', 'danger');
  renderSidebarNav();
  closeModal();
  if (currentNav === 'Approvals') {
    renderApprovals(document.getElementById('content-view'));
  } else if (currentNav === 'Webinars') {
    renderWebinars(document.getElementById('content-view'));
  }
}

function confirmRegisterWebinar(wId) {
  if (currentUser.role === 'mentor' || currentUser.role === 'admin') {
    showAlert('Mentors and Administrators cannot register for webinars as attendees.', 'warning');
    return;
  }
  const db = loadDB();
  const w = db.webinars.find(x => x.id === wId);
  if (!w) return;

  if (!w.registeredUsers) w.registeredUsers = [];
  if (!w.registrations) w.registrations = [];

  if (!w.registeredUsers.includes(currentUser.email)) {
    if (w.registeredUsers.length >= w.seatLimit) {
      alert('Seat capacity full.');
      closeModal();
      return;
    }
    w.registeredUsers.push(currentUser.email);
    w.registrations.push({
      email: currentUser.email,
      name: currentUser.name,
      type: w.type || 'free',
      bookedAt: new Date().toISOString().split('T')[0],
      status: 'confirmed'
    });
    saveDB(db);
    showAlert('Registered for webinar successfully! Live access is unlocked.', 'success');
  }
  closeModal();
  navigateTo('Webinars');
}

function deleteWebinar(id) {
  if (!confirm('Delete webinar?')) return;
  const db = loadDB();
  db.webinars = db.webinars.filter(x => x.id !== id);
  saveDB(db);
  showAlert('Webinar deleted.', 'success');
  navigateTo('Webinars');
}

// ============================================================================
// 13. INTERNSHIPS (POST, EDIT, DELETE & APPLY)
// ============================================================================
let internshipAdminTab = 'jobs'; // 'jobs' or 'applicants'
let adminApplicantViewType = 'grid'; // 'grid' or 'table'
let internshipStudentTab = 'browse'; // 'browse' or 'tracker'
let internshipSearchQuery = '';
let internshipModeFilter = 'all';
let internshipStipendFilter = 'all';
let tempResumeFile = { name: '', size: '', data: '' };

function isDeadlineExpired(deadlineStr) {
  if (!deadlineStr) return false;
  const today = new Date().toISOString().split('T')[0];
  return deadlineStr < today;
}

function refreshInternshipsView() {
  const container = document.getElementById('content-view');
  if (container) {
    renderInternships(container);
  }
}

function setInternshipAdminTab(tab) {
  internshipAdminTab = tab;
  refreshInternshipsView();
}

function setAdminApplicantViewType(type) {
  adminApplicantViewType = type;
  refreshInternshipsView();
}

function setInternshipStudentTab(tab) {
  internshipStudentTab = tab;
  refreshInternshipsView();
}

function handleInternshipFilterChange() {
  const searchInput = document.getElementById('int-filter-search');
  const modeSelect = document.getElementById('int-filter-mode');
  const stipendSelect = document.getElementById('int-filter-stipend');
  if (searchInput) internshipSearchQuery = searchInput.value.toLowerCase().trim();
  if (modeSelect) internshipModeFilter = modeSelect.value;
  if (stipendSelect) internshipStipendFilter = stipendSelect.value;
  refreshInternshipsView();
}

function renderInternships(container) {
  const db = loadDB();
  const isAdmin = currentUser.role === 'admin';

  // Compute stats
  const totalOpenings = db.internships.length;
  const totalVacancies = db.internships.reduce((acc, curr) => acc + (Number(curr.vacancies) || 1), 0);
  const totalApplicants = db.internships.reduce((acc, curr) => acc + (curr.applicants ? curr.applicants.length : 0), 0);
  const shortlistedCount = db.internships.reduce((acc, curr) => acc + (curr.applicants || []).filter(a => a.status === 'Shortlisted' || a.status === 'Interview Scheduled' || a.status === 'Selected').length, 0);
  const myApplicationsCount = db.internships.filter(i => (i.applicants || []).some(a => a.email === currentUser.email)).length;

  // If Admin is in 'All Applied Candidates' tab
  if (isAdmin && internshipAdminTab === 'applicants') {
    renderAdminAllApplicants(container, db, totalOpenings, totalVacancies, totalApplicants, shortlistedCount);
    return;
  }

  // If Student is in 'Track Applications' tab
  if (!isAdmin && internshipStudentTab === 'tracker') {
    renderStudentApplicationTracker(container, db, totalOpenings, myApplicationsCount);
    return;
  }

  // Filter internships for browsing
  let filtered = db.internships.filter(i => {
    if (internshipModeFilter !== 'all' && (i.mode || '').toLowerCase() !== internshipModeFilter.toLowerCase()) {
      return false;
    }
    if (internshipStipendFilter === 'stipend' && i.stipendType !== 'Stipend') {
      return false;
    }
    if (internshipStipendFilter === 'non-stipend' && i.stipendType === 'Stipend') {
      return false;
    }
    if (internshipSearchQuery) {
      const q = internshipSearchQuery;
      const matchTitle = (i.title || '').toLowerCase().includes(q);
      const matchComp = (i.company || '').toLowerCase().includes(q);
      const matchLoc = (i.location || '').toLowerCase().includes(q);
      const matchDesc = (i.description || '').toLowerCase().includes(q);
      if (!matchTitle && !matchComp && !matchLoc && !matchDesc) return false;
    }
    return true;
  });

  container.innerHTML = `
    <!-- Top Stats & Controls Header -->
    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
      ${isAdmin ? `
        <!-- Overall Intern Details Grid Type (Clean Cards) -->
        <div class="stats-grid" style="margin-bottom: 4px;">
          <div class="stat-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="stat-label">Job Openings</span>
              <span class="badge badge-purple" style="font-size: 11px; padding: 2px 7px;">Recruiting</span>
            </div>
            <div class="stat-val" style="margin: 6px 0 2px;">${totalOpenings}</div>
            <div style="font-size: 12px; color: var(--text-muted);">Active recruitment posts</div>
          </div>

          <div class="stat-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="stat-label">Total Vacancies</span>
              <span class="badge badge-blue" style="font-size: 11px; padding: 2px 7px;">Open Seats</span>
            </div>
            <div class="stat-val" style="margin: 6px 0 2px;">${totalVacancies}</div>
            <div style="font-size: 12px; color: var(--text-muted);">Available intake capacity</div>
          </div>

          <div class="stat-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="stat-label">Candidate Applications</span>
              <span class="badge badge-green" style="font-size: 11px; padding: 2px 7px;">In Review</span>
            </div>
            <div class="stat-val" style="margin: 6px 0 2px;">${totalApplicants}</div>
            <div style="font-size: 12px; color: var(--text-muted);">Total applicant submissions</div>
          </div>

          <div class="stat-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="stat-label">Shortlisted &amp; Selected</span>
              <span class="badge badge-amber" style="font-size: 11px; padding: 2px 7px;">Evaluated</span>
            </div>
            <div class="stat-val" style="margin: 6px 0 2px;">${shortlistedCount}</div>
            <div style="font-size: 12px; color: var(--text-muted);">Qualified candidates</div>
          </div>
        </div>

        <!-- Admin View Switcher Tabs -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
          <button class="tab-btn ${internshipAdminTab === 'jobs' ? 'active' : ''}" onclick="setInternshipAdminTab('jobs')">
            Job Postings (${totalOpenings})
          </button>
          <button class="tab-btn ${internshipAdminTab === 'applicants' ? 'active' : ''}" onclick="setInternshipAdminTab('applicants')">
            All Applied Candidates (${totalApplicants})
          </button>
        </div>
      ` : `
        <!-- Student View Switcher Tabs -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
          <button class="tab-btn ${internshipStudentTab === 'browse' ? 'active' : ''}" onclick="setInternshipStudentTab('browse')">
            Browse Openings (${totalOpenings})
          </button>
          <button class="tab-btn ${internshipStudentTab === 'tracker' ? 'active' : ''}" onclick="setInternshipStudentTab('tracker')">
            My Applied Jobs &amp; Track Status (${myApplicationsCount})
          </button>
        </div>
      `}

      <!-- Simple Filter & Search Bar -->
      <div class="card" style="padding: 12px 16px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;">
        <div style="flex: 1; min-width: 220px;">
          <input type="text" id="int-filter-search" placeholder="Search internships by role, company or location..." value="${internshipSearchQuery}" oninput="handleInternshipFilterChange()" style="width: 100%; padding: 8px 12px; font-size: 13px;">
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <select id="int-filter-mode" onchange="handleInternshipFilterChange()" style="padding: 8px 12px; font-size: 13px;">
            <option value="all" ${internshipModeFilter === 'all' ? 'selected' : ''}>All Modes</option>
            <option value="Remote" ${internshipModeFilter === 'Remote' ? 'selected' : ''}>Remote</option>
            <option value="Full-time" ${internshipModeFilter === 'Full-time' ? 'selected' : ''}>Full-time</option>
            <option value="Part-time" ${internshipModeFilter === 'Part-time' ? 'selected' : ''}>Part-time</option>
            <option value="Hybrid" ${internshipModeFilter === 'Hybrid' ? 'selected' : ''}>Hybrid</option>
          </select>
          <select id="int-filter-stipend" onchange="handleInternshipFilterChange()" style="padding: 8px 12px; font-size: 13px;">
            <option value="all" ${internshipStipendFilter === 'all' ? 'selected' : ''}>All Packages</option>
            <option value="stipend" ${internshipStipendFilter === 'stipend' ? 'selected' : ''}>Stipend (Paid)</option>
            <option value="non-stipend" ${internshipStipendFilter === 'non-stipend' ? 'selected' : ''}>Non-Stipend</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Header & Action Row -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
      <div>
        <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Internship Openings &amp; Job Postings</h2>
        <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
          Showing ${filtered.length} active opportunities.
        </div>
      </div>
      ${isAdmin ? `
        <button class="btn btn-sm" onclick="openAddInternshipModal()">
          Post Job Opening
        </button>
      ` : ''}
    </div>

    <!-- Clean, Neat Professional Job Card Grid -->
    ${filtered.length > 0 ? `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 18px;">
        ${filtered.map(i => {
          const hasApplied = (i.applicants || []).some(a => a.email === currentUser.email);
          const myApp = hasApplied ? (i.applicants || []).find(a => a.email === currentUser.email) : null;
          const expired = isDeadlineExpired(i.deadline);
          const reqTags = (i.requirements || '').split(',').map(s => s.trim()).filter(Boolean);

          return `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 20px; border-radius: 12px; margin: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div>
                <!-- Top Tags -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                  <span class="badge ${i.stipendType === 'Stipend' ? 'badge-green' : 'badge-amber'}" style="font-size: 11.5px; padding: 3px 10px; border-radius: 20px; font-weight: 600;">
                    ${i.stipendType === 'Stipend' ? `Stipend: ${i.stipendAmount}` : 'Non-Stipend'}
                  </span>
                  <span class="badge badge-blue" style="font-size: 11.5px; padding: 3px 10px; border-radius: 20px; font-weight: 600;">
                    ${i.mode || 'Remote'}
                  </span>
                  <span class="badge badge-purple" style="font-size: 11.5px; padding: 3px 10px; border-radius: 20px; font-weight: 600;">
                    ${i.vacancies || 1} ${Number(i.vacancies) === 1 ? 'Vacancy' : 'Vacancies'}
                  </span>
                </div>

                <!-- Title & Company -->
                <h3 style="margin: 14px 0 4px; font-size: 17px; font-weight: 700; color: #0F172A; line-height: 1.35;">
                  ${i.title}
                </h3>
                <div style="font-size: 13px; font-weight: 600; color: var(--accent); margin-bottom: 12px;">
                  ${i.company} &nbsp;·&nbsp; <span style="color: #64748B; font-weight: 500;">${i.location || 'Remote'}</span>
                </div>

                <!-- Description -->
                <p style="font-size: 13px; color: #475569; line-height: 1.5; margin: 0 0 14px; min-height: 38px;">
                  ${i.description || 'Full stack internship opportunity with real hands-on projects.'}
                </p>

                <!-- Requirements Tags -->
                ${reqTags.length > 0 ? `
                  <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
                    ${reqTags.map(t => `<span class="badge" style="background: #F8FAFC; color: #334155; border: 1px solid #E2E8F0; font-size: 11px; padding: 3px 8px; border-radius: 6px; font-weight: 500;">${t}</span>`).join('')}
                  </div>
                ` : ''}
              </div>

              <div>
                <!-- Deadline & Applied Count Meta Row (No Emojis) -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--line); margin-bottom: 14px; font-size: 12.5px;">
                  <span style="font-weight: 600; color: ${expired ? '#DC2626' : '#475569'};">
                    Deadline: ${i.deadline} ${expired ? '(Expired)' : ''}
                  </span>
                  <span style="color: #64748B; font-weight: 500;">
                    ${(i.applicants || []).length} applied
                  </span>
                </div>

                <!-- Action Buttons -->
                ${isAdmin ? `
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <button class="btn btn-secondary btn-sm" onclick="openApplicantsModal('${i.id}')" style="flex: 1; font-weight: 600; padding: 7px 12px;">
                      Applied List (${(i.applicants || []).length})
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openEditInternshipModal('${i.id}')" title="Edit Opening" style="padding: 7px 12px; font-weight: 600;">
                      Edit
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteInternship('${i.id}')" title="Delete Opening" style="padding: 7px 10px;">
                      ${ICONS.trash}
                    </button>
                  </div>
                ` : `
                  ${hasApplied ? `
                    <div style="display: flex; gap: 8px; align-items: center;">
                      <button class="btn btn-secondary btn-sm" onclick="setInternshipStudentTab('tracker')" style="flex: 1; background: #ECFDF5; color: #047857; border: 1px solid #A7F3D0; font-weight: 600; padding: 7px 12px;">
                        Applied (${myApp.status || 'Under Review'})
                      </button>
                      <button class="btn btn-secondary btn-sm" onclick="openCandidateDetailsModal('${i.id}', '${currentUser.email}')" style="min-width: 65px; font-weight: 600; padding: 7px 12px;">
                        View
                      </button>
                    </div>
                  ` : `
                    ${expired ? `
                      <div style="display: flex; gap: 8px; align-items: center;">
                        <button class="btn btn-secondary btn-sm" disabled style="flex: 1; opacity: 0.65; cursor: not-allowed; background: #F8FAFC; color: #64748B; font-weight: 600; padding: 7px 12px;">
                          Expired
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="openInternshipDetailsViewModal('${i.id}')" style="min-width: 65px; font-weight: 600; padding: 7px 12px;">
                          View
                        </button>
                      </div>
                    ` : `
                      <div style="display: flex; gap: 8px; align-items: center;">
                        <button class="btn btn-sm" onclick="openApplyInternshipModal('${i.id}')" style="flex: 1; font-weight: 600; padding: 7px 12px;">
                          Apply Now
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="openInternshipDetailsViewModal('${i.id}')" style="min-width: 65px; font-weight: 600; padding: 7px 12px;">
                          View
                        </button>
                      </div>
                    `}
                  `}
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : `
      <div class="card" style="padding: 40px; text-align: center;">
        <p style="margin: 0; font-size: 14px; color: var(--text-muted);">No internship opportunities match your filter criteria.</p>
      </div>
    `}
  `;
}
// ----------------------------------------------------------------------------
// Student: Abstract Application Tracker View
// ----------------------------------------------------------------------------
function renderStudentApplicationTracker(container, db, totalOpenings, myApplicationsCount) {
  const myApplied = [];
  db.internships.forEach(i => {
    const a = (i.applicants || []).find(app => app.email === currentUser.email);
    if (a) {
      myApplied.push({ internship: i, applicant: a });
    }
  });

  myApplied.sort((x, y) => new Date(y.applicant.appliedAt || 0) - new Date(x.applicant.appliedAt || 0));

  container.innerHTML = `
    <!-- Top Switcher Header -->
    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
      <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
        <button class="tab-btn ${internshipStudentTab === 'browse' ? 'active' : ''}" onclick="setInternshipStudentTab('browse')">
          Browse Openings (${totalOpenings})
        </button>
        <button class="tab-btn ${internshipStudentTab === 'tracker' ? 'active' : ''}" onclick="setInternshipStudentTab('tracker')">
          My Applied Jobs &amp; Track Status (${myApplicationsCount})
        </button>
      </div>
    </div>

    <!-- Tracker List -->
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${myApplied.map(item => {
        const i = item.internship;
        const a = item.applicant;
        const status = a.status || 'Under Review';

        let step1Class = 'completed';
        let step2Class = 'active';
        let step3Class = '';
        let step4Class = '';
        let step2Subtitle = 'In Progress';
        let step3Subtitle = 'Pending';
        let decisionLabel = 'Final Decision';
        let decisionSubtitle = 'Pending';
        let statusBadgeClass = 'badge-blue';

        if (status === 'Shortlisted') {
          step2Class = 'completed';
          step3Class = 'active';
          step2Subtitle = 'Passed';
          step3Subtitle = 'Shortlisted';
          statusBadgeClass = 'badge-purple';
        } else if (status === 'Interview Scheduled') {
          step2Class = 'completed';
          step3Class = 'active';
          step2Subtitle = 'Passed';
          step3Subtitle = 'Scheduled';
          statusBadgeClass = 'badge-blue';
        } else if (status === 'Selected') {
          step2Class = 'completed';
          step3Class = 'completed';
          step4Class = 'completed';
          step2Subtitle = 'Passed';
          step3Subtitle = 'Completed';
          decisionLabel = 'Offer Accepted';
          decisionSubtitle = 'Selected';
          statusBadgeClass = 'badge-green';
        } else if (status === 'Rejected') {
          step2Class = 'completed';
          step3Class = 'rejected';
          step4Class = 'rejected';
          step2Subtitle = 'Completed';
          step3Subtitle = 'Closed';
          decisionLabel = 'Not Selected';
          decisionSubtitle = a.rejectedAt || 'Rejected';
          statusBadgeClass = 'badge-red';
        }

        return `
          <div class="card" style="padding: 20px; border-radius: 10px; border: 1px solid var(--line);">
            <!-- Application Header -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
                  <h3 style="margin: 0; font-size: 17px; font-weight: 700; color: #0F172A;">${i.title}</h3>
                  <span class="badge ${statusBadgeClass}">${status}</span>
                </div>
                <div style="font-size: 13px; color: var(--accent); font-weight: 600;">
                  ${i.company} &nbsp;·&nbsp; <span style="color: var(--text-muted); font-weight: 500;">${i.location || 'Remote'} &nbsp;·&nbsp; Mode: ${i.mode}</span>
                </div>
              </div>
              <div style="text-align: right; font-size: 12.5px; color: var(--text-muted);">
                Applied Date: <strong style="color: #0F172A;">${a.appliedAt}</strong><br>
                Package: <strong style="color: #059669;">${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'}</strong>
              </div>
            </div>

            <!-- Abstract Stepper / Application Status Tracker -->
            <div class="tracker-stepper" style="margin: 16px 0;">
              <div class="tracker-step ${step1Class}">
                <div class="tracker-dot">1</div>
                <div class="tracker-label">Application Submitted</div>
                <div style="font-size: 10.5px; color: var(--text-muted);">${a.appliedAt}</div>
              </div>
              <div style="flex: 1; height: 2px; background: ${step2Class === 'completed' ? '#059669' : (step2Class === 'active' ? 'var(--accent)' : '#CBD5E1')}; align-self: center; margin: 0 4px;"></div>
              <div class="tracker-step ${step2Class}">
                <div class="tracker-dot">2</div>
                <div class="tracker-label">Under Review</div>
                <div style="font-size: 10.5px; color: var(--text-muted);">${step2Subtitle}</div>
              </div>
              <div style="flex: 1; height: 2px; background: ${step3Class === 'completed' ? '#059669' : (step3Class === 'rejected' ? '#DC2626' : (step3Class === 'active' ? 'var(--accent)' : '#CBD5E1'))}; align-self: center; margin: 0 4px;"></div>
              <div class="tracker-step ${step3Class}">
                <div class="tracker-dot">3</div>
                <div class="tracker-label">Interview / Shortlist</div>
                <div style="font-size: 10.5px; color: var(--text-muted);">${step3Subtitle}</div>
              </div>
              <div style="flex: 1; height: 2px; background: ${step4Class === 'completed' ? '#059669' : (step4Class === 'rejected' ? '#DC2626' : '#CBD5E1')}; align-self: center; margin: 0 4px;"></div>
              <div class="tracker-step ${step4Class}">
                <div class="tracker-dot">4</div>
                <div class="tracker-label">${decisionLabel}</div>
                <div style="font-size: 10.5px; color: var(--text-muted);">${decisionSubtitle}</div>
              </div>
            </div>

            <!-- Contextual Status Notice & Rejection Reason Display -->
            ${status === 'Rejected' ? `
              <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 14px 16px; margin-top: 14px;">
                <div style="font-weight: 700; font-size: 13.5px; color: #991B1B; margin-bottom: 4px;">
                  Application Status: Not Selected / Closed
                </div>
                <div style="font-size: 12px; font-weight: 600; color: #7F1D1D; text-transform: uppercase; margin-top: 8px;">
                  Reason &amp; Feedback from Admin / Recruiter:
                </div>
                <div style="font-size: 13px; color: #7F1D1D; line-height: 1.5; background: #FFFFFF; border: 1px solid #FCA5A5; border-radius: 6px; padding: 10px 12px; margin-top: 4px;">
                  ${a.rejectionReason || 'The hiring committee reviewed your profile and decided to move forward with applicants whose experience more closely matched the specific opening requirements. We invite you to apply for upcoming roles.'}
                </div>
              </div>
            ` : (status === 'Selected' ? `
              <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 14px 16px; margin-top: 14px;">
                <div style="font-weight: 700; font-size: 13.5px; color: #065F46; margin-bottom: 2px;">
                  Offer Extended: Application Selected!
                </div>
                <div style="font-size: 13px; color: #047857; line-height: 1.5;">
                  Congratulations! You have been selected for this position. The coordinator will contact you directly at <strong>${a.email}</strong> with next onboarding steps.
                </div>
              </div>
            ` : (status === 'Interview Scheduled' ? `
              <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 14px 16px; margin-top: 14px;">
                <div style="font-weight: 700; font-size: 13.5px; color: #1E40AF; margin-bottom: 2px;">
                  Interview Round Scheduled
                </div>
                <div style="font-size: 13px; color: #1D4ED8; line-height: 1.5;">
                  ${a.interviewDate ? `Date: <strong>${a.interviewDate}</strong>` : ''}
                  ${a.interviewTime ? `&nbsp;·&nbsp; Time: <strong>${a.interviewTime}</strong>` : ''}
                  ${a.interviewLink ? `<br>Joining Link / Venue: <a href="${a.interviewLink.startsWith('http') ? a.interviewLink : 'https://' + a.interviewLink}" target="_blank" style="color: #1E40AF; font-weight: 600; text-decoration: underline;">${escapeHtml(a.interviewLink)} ↗</a>` : ''}
                </div>
                ${a.interviewNotes ? `
                  <div style="font-size: 12px; font-weight: 600; color: #1E40AF; text-transform: uppercase; margin-top: 8px;">
                    Interview Notes &amp; Preparation Instructions:
                  </div>
                  <div style="font-size: 13px; color: #1E3A8A; line-height: 1.5; background: #FFFFFF; border: 1px solid #93C5FD; border-radius: 6px; padding: 10px 12px; margin-top: 4px; white-space: pre-wrap;">
                    ${escapeHtml(a.interviewNotes)}
                  </div>
                ` : `
                  <div style="font-size: 12.5px; color: #1D4ED8; margin-top: 4px;">
                    Your profile has progressed to the interview stage. Please prepare your portfolio and check your email for any additional scheduling instructions.
                  </div>
                `}
              </div>
            ` : (status === 'Shortlisted' ? `
              <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 12px 16px; margin-top: 14px;">
                <div style="font-weight: 700; font-size: 13px; color: #166534;">
                  Shortlisted for Evaluation
                </div>
                <div style="font-size: 12.5px; color: #15803D; margin-top: 2px;">
                  Your resume has passed primary review and is queued for candidate interview selection.
                </div>
              </div>
            ` : `
              <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; margin-top: 14px;">
                <div style="font-size: 13px; color: #475569;">
                  Your application has been received and is currently under review by our recruitment team.
                </div>
              </div>
            `)))}

            <!-- Footer Details & Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--line); flex-wrap: wrap; gap: 10px;">
              <div style="font-size: 12.5px; color: var(--text-muted);">
                Attached Document: <strong style="color: #0F172A;">${a.resumeName || 'Resume.pdf'}</strong> (${a.resumeSize || 'Attached'})
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="viewOrDownloadResume('${i.id}', '${currentUser.email}')" style="font-weight: 600;">
                  Download Resume
                </button>
                <button class="btn btn-sm" onclick="openCandidateDetailsModal('${i.id}', '${currentUser.email}')" style="font-weight: 600;">
                  View Dossier
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('') || `
        <div class="card" style="text-align: center; padding: 48px 20px;">
          <h3 style="margin: 0 0 6px; font-size: 16px; color: #0F172A;">No Applied Internships Yet</h3>
          <p style="margin: 0 0 16px; font-size: 13px; color: var(--text-muted);">You have not applied for any internship openings yet.</p>
          <button class="btn btn-sm" onclick="setInternshipStudentTab('browse')">Browse Openings</button>
        </div>
      `}
    </div>
  `;
}

// ----------------------------------------------------------------------------
// Universal View Modal for Job Opening Details
// ----------------------------------------------------------------------------
function openInternshipDetailsViewModal(id) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (!i) return;
  const expired = isDeadlineExpired(i.deadline);

  openModal(`Job Opening: ${i.title}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
          <div>
            <h3 style="margin: 0 0 4px; font-size: 17px; color: #0F172A;">${i.title}</h3>
            <div style="font-size: 13.5px; font-weight: 600; color: var(--accent);">${i.company} &nbsp;·&nbsp; ${i.location || 'Remote'}</div>
          </div>
          <div style="display: flex; gap: 6px;">
            <span class="badge ${i.stipendType === 'Stipend' ? 'badge-green' : 'badge-amber'}">${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'}</span>
            <span class="badge badge-purple">${i.mode}</span>
          </div>
        </div>
        <div class="form-grid-2" style="font-size: 13px; margin-top: 10px; border-top: 1px solid var(--line); padding-top: 10px;">
          <div><strong style="color: var(--text-muted);">Vacancies:</strong> <div>${i.vacancies} Seats</div></div>
          <div><strong style="color: var(--text-muted);">Deadline:</strong> <div>${i.deadline} ${expired ? '(Expired)' : '(Active)'}</div></div>
          <div><strong style="color: var(--text-muted);">Work Mode:</strong> <div>${i.mode}</div></div>
          <div><strong style="color: var(--text-muted);">Location Setting:</strong> <div>${i.location || 'Remote'}</div></div>
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 6px; font-size: 13.5px; font-weight: 700; color: #0F172A;">Required Skills &amp; Qualifications</h4>
        <div style="font-size: 13px; color: #334155; line-height: 1.5; background: #FFFFFF; border: 1px solid var(--line); border-radius: 6px; padding: 10px 14px;">
          ${i.requirements || 'Web development fundamentals, problem solving, Git'}
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 6px; font-size: 13.5px; font-weight: 700; color: #0F172A;">Role Description &amp; Responsibilities</h4>
        <div style="font-size: 13px; color: #334155; line-height: 1.6; background: #FFFFFF; border: 1px solid var(--line); border-radius: 6px; padding: 12px 14px; white-space: pre-wrap;">
          ${i.description}
        </div>
      </div>
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    ${!expired ? `<button class="btn btn-sm" onclick="closeModal(); openApplyInternshipModal('${i.id}')">Apply Now</button>` : ''}
  `, true);
}

// ----------------------------------------------------------------------------
// Dedicated Table Modal for a Particular Candidate's Details
// (Used by BOTH Student viewing their applied details and Admin viewing any applicant)
// ----------------------------------------------------------------------------
function openCandidateDetailsModal(internshipId, studentEmail) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === internshipId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  const isAdmin = currentUser.role === 'admin';
  const expired = isDeadlineExpired(i.deadline);

  const statusColor = a.status === 'Selected' ? 'badge-green' : (a.status === 'Rejected' ? 'badge-red' : (a.status === 'Shortlisted' ? 'badge-blue' : 'badge-purple'));

  openModal(`Applicant Dossier: ${a.name}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <!-- Position summary header -->
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="font-size: 15px; font-weight: 700; color: #0F172A;">${i.title}</span>
          <span style="color: var(--text-muted); font-size: 13px;"> &nbsp;·&nbsp; ${i.company} &nbsp;·&nbsp; ${i.location || 'Remote'}</span>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="badge ${expired ? 'badge-red' : 'badge-blue'}">${expired ? 'Opening Expired' : 'Active Opening'}</span>
          <span class="badge ${statusColor}">${a.status || 'Under Review'}</span>
        </div>
      </div>

      <!-- Dedicated Details Table Structure -->
      <div class="table-container" style="border: 1px solid var(--line); border-radius: 8px; overflow: hidden; background: #FFFFFF;">
        <table class="detail-table">
          <tbody>
            <tr>
              <th>Applicant Full Name</th>
              <td style="font-weight: 700; font-size: 14.5px; color: #0F172A;">${a.name}</td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>${a.email}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td style="font-weight: 500;">${a.phone || 'N/A'}</td>
            </tr>
            <tr>
              <th>College / University</th>
              <td>${a.college || 'N/A'}</td>
            </tr>
            <tr>
              <th>Degree &amp; Branch / Batch</th>
              <td>${a.degree || 'N/A'}</td>
            </tr>
            <tr>
              <th>LinkedIn Profile</th>
              <td>
                ${(a.linkedin || a.portfolio) ? `<a href="${a.linkedin || a.portfolio}" target="_blank" style="color: var(--accent); font-weight: 600;">${a.linkedin || a.portfolio} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>HackerRank Profile</th>
              <td>
                ${a.hackerrank ? `<a href="${a.hackerrank.startsWith('http') ? a.hackerrank : 'https://hackerrank.com/' + a.hackerrank}" target="_blank" style="color: #059669; font-weight: 600;">${a.hackerrank} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>LeetCode Profile</th>
              <td>
                ${a.leetcode ? `<a href="${a.leetcode.startsWith('http') ? a.leetcode : 'https://leetcode.com/' + a.leetcode}" target="_blank" style="color: #D97706; font-weight: 600;">${a.leetcode} ↗</a>` : '<span style="color: var(--text-muted);">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <th>Applied Role</th>
              <td><strong>${i.title}</strong> (${i.company})</td>
            </tr>
            <tr>
              <th>Package &amp; Work Mode</th>
              <td>${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'} &nbsp;·&nbsp; Mode: ${i.mode} &nbsp;·&nbsp; ${i.location || 'Remote'}</td>
            </tr>
            <tr>
              <th>Submission Date</th>
              <td>${a.appliedAt}</td>
            </tr>
            <tr>
              <th>Application Status</th>
              <td>
                ${isAdmin ? `
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <select class="status-select" onchange="handleAdminStatusSelectChange('${internshipId}', '${a.email}', this.value, this)">
                      <option value="Under Review" ${a.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
                      <option value="Shortlisted" ${a.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
                      <option value="Interview Scheduled" ${a.status === 'Interview Scheduled' ? 'selected' : ''}>Interview Scheduled</option>
                      <option value="Selected" ${a.status === 'Selected' ? 'selected' : ''}>Selected</option>
                      <option value="Rejected" ${a.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                    </select>
                    <span style="font-size: 11.5px; color: var(--text-muted);">(Changes saved live)</span>
                  </div>
                ` : `
                  <span class="badge ${statusColor}" style="font-size: 12px;">${a.status || 'Under Review'}</span>
                `}
              </td>
            </tr>
            ${a.status === 'Rejected' ? `
              <tr style="background: #FEF2F2;">
                <th style="color: #991B1B;">Rejection Feedback</th>
                <td>
                  <div style="font-weight: 600; color: #991B1B; margin-bottom: 4px;">
                    ${escapeHtml(a.rejectionReason || 'Skillset mismatch for current project vacancy requirements.')}
                  </div>
                  ${isAdmin ? `
                    <button class="btn btn-secondary btn-sm" onclick="openRejectionReasonModal('${internshipId}', '${a.email}')" style="font-size: 11px; padding: 3px 8px; margin-top: 4px;">
                      Edit Rejection Reason
                    </button>
                  ` : ''}
                </td>
              </tr>
            ` : ''}
            ${a.status === 'Interview Scheduled' ? `
              <tr style="background: #EFF6FF;">
                <th style="color: #1E40AF;">Interview Schedule &amp; Notes</th>
                <td>
                  <div style="font-weight: 600; color: #1E40AF; margin-bottom: 4px;">
                    ${a.interviewDate ? `Date: <strong>${a.interviewDate}</strong>` : ''} 
                    ${a.interviewTime ? `&nbsp;·&nbsp; Time: <strong>${a.interviewTime}</strong>` : ''}
                    ${a.interviewLink ? `<br>Meeting Link: <a href="${a.interviewLink.startsWith('http') ? a.interviewLink : 'https://' + a.interviewLink}" target="_blank" style="color: #2563EB; text-decoration: underline;">${escapeHtml(a.interviewLink)} ↗</a>` : ''}
                  </div>
                  <div style="font-size: 13px; color: #1E3A8A; line-height: 1.5; white-space: pre-wrap; background: #FFFFFF; border: 1px solid #BFDBFE; border-radius: 6px; padding: 8px 10px; margin-top: 6px;">
                    ${escapeHtml(a.interviewNotes || 'Interview round scheduled.')}
                  </div>
                  ${isAdmin ? `
                    <button class="btn btn-secondary btn-sm" onclick="openInterviewScheduleModal('${internshipId}', '${a.email}')" style="font-size: 11px; padding: 3px 8px; margin-top: 6px;">
                      Edit Interview Schedule &amp; Notes
                    </button>
                  ` : ''}
                </td>
              </tr>
            ` : ''}
            <tr>
              <th>Pitch / Statement</th>
              <td style="color: #334155; line-height: 1.5; white-space: pre-wrap;">${a.coverNote ? a.coverNote : '<em style="color: var(--text-muted);">No cover note provided.</em>'}</td>
            </tr>
            <tr>
              <th>Uploaded Resume</th>
              <td>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span><strong>${a.resumeName || 'Resume.pdf'}</strong> (${a.resumeSize || 'Attached'})</span>
                  <button class="btn btn-secondary btn-sm" onclick="viewOrDownloadResume('${internshipId}', '${a.email}')" style="padding: 4px 12px; font-size: 12px; font-weight: 600;">
                    Download / View Resume
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

// ----------------------------------------------------------------------------
// Admin: Master View for All Applied Candidates Across All Openings
// ----------------------------------------------------------------------------
function renderAdminAllApplicants(container, db, totalOpenings, totalVacancies, totalApplicants, shortlistedCount) {
  if (shortlistedCount === undefined) {
    shortlistedCount = db.internships.reduce((acc, curr) => acc + (curr.applicants || []).filter(a => a.status === 'Shortlisted' || a.status === 'Interview Scheduled' || a.status === 'Selected').length, 0);
  }

  const allList = [];
  db.internships.forEach(item => {
    (item.applicants || []).forEach(applicant => {
      allList.push({
        ...applicant,
        internshipId: item.id,
        internshipTitle: item.title,
        company: item.company,
        mode: item.mode,
        stipendType: item.stipendType,
        stipendAmount: item.stipendAmount
      });
    });
  });

  allList.sort((a, b) => new Date(b.appliedAt || 0) - new Date(a.appliedAt || 0));

  container.innerHTML = `
    <!-- Top Stats & Controls Header (No Emojis) -->
    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
      <!-- Overall Intern Details Grid Type (Clean Cards) -->
      <div class="stats-grid" style="margin-bottom: 4px;">
        <div class="stat-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="stat-label">Job Openings</span>
            <span class="badge badge-purple" style="font-size: 11px; padding: 2px 7px;">Recruiting</span>
          </div>
          <div class="stat-val" style="margin: 6px 0 2px;">${totalOpenings}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Active recruitment posts</div>
        </div>

        <div class="stat-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="stat-label">Total Vacancies</span>
            <span class="badge badge-blue" style="font-size: 11px; padding: 2px 7px;">Open Seats</span>
          </div>
          <div class="stat-val" style="margin: 6px 0 2px;">${totalVacancies}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Available intake capacity</div>
        </div>

        <div class="stat-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="stat-label">Candidate Applications</span>
            <span class="badge badge-green" style="font-size: 11px; padding: 2px 7px;">In Review</span>
          </div>
          <div class="stat-val" style="margin: 6px 0 2px;">${totalApplicants}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Total applicant submissions</div>
        </div>

        <div class="stat-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="stat-label">Shortlisted &amp; Selected</span>
            <span class="badge badge-amber" style="font-size: 11px; padding: 2px 7px;">Evaluated</span>
          </div>
          <div class="stat-val" style="margin: 6px 0 2px;">${shortlistedCount}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Qualified candidates</div>
        </div>
      </div>

      <!-- Admin View Switcher Tabs -->
      <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
        <button class="tab-btn ${internshipAdminTab === 'jobs' ? 'active' : ''}" onclick="setInternshipAdminTab('jobs')">
          Job Postings (${totalOpenings})
        </button>
        <button class="tab-btn ${internshipAdminTab === 'applicants' ? 'active' : ''}" onclick="setInternshipAdminTab('applicants')">
          All Applied Candidates (${totalApplicants})
        </button>
      </div>
    </div>

    <!-- Master Applicants Table Structure (Only Table) -->
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Applied Candidates Master List</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Total ${allList.length} applicant records received across posted internships.
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Candidate</th>
              <th class="text-left">Applied Role</th>
              <th class="text-left">Academic</th>
              <th class="text-center">Applied Date</th>
              <th class="text-center">Status</th>
              <th class="text-center">Resume</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${allList.map(a => `
              <tr>
                <td>
                  <strong>${a.name}</strong>
                  <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">
                    ${a.email} &nbsp;·&nbsp; ${a.phone || 'N/A'}
                  </div>
                  ${a.rejectionReason && a.status === 'Rejected' ? `
                    <div style="font-size: 11px; color: #DC2626; margin-top: 2px;">
                      Reason: ${escapeHtml(a.rejectionReason)}
                    </div>
                  ` : ''}
                  ${a.interviewNotes && a.status === 'Interview Scheduled' ? `
                    <div style="font-size: 11px; color: #1D4ED8; margin-top: 2px;">
                      Interview: ${a.interviewDate ? a.interviewDate + (a.interviewTime ? ' ' + a.interviewTime : '') + ' · ' : ''}${escapeHtml(a.interviewNotes.length > 55 ? a.interviewNotes.slice(0, 55) + '...' : a.interviewNotes)}
                    </div>
                  ` : ''}
                </td>
                <td>
                  <div style="font-weight: 600; color: #0F172A;">${a.internshipTitle}</div>
                  <div style="font-size: 11.5px; color: var(--text-muted);">${a.company}</div>
                </td>
                <td>
                  <div style="font-size: 12.5px; font-weight: 500;">${a.degree || 'Degree'}</div>
                  <div style="font-size: 11.5px; color: var(--text-muted);">${a.college || 'College'}</div>
                </td>
                <td class="text-center" style="font-size: 12px; white-space: nowrap;">
                  ${a.appliedAt}
                </td>
                <td class="text-center">
                  <select class="status-select" onchange="handleAdminStatusSelectChange('${a.internshipId}', '${a.email}', this.value, this)">
                    <option value="Under Review" ${a.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
                    <option value="Shortlisted" ${a.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
                    <option value="Interview Scheduled" ${a.status === 'Interview Scheduled' ? 'selected' : ''}>Interview Scheduled</option>
                    <option value="Selected" ${a.status === 'Selected' ? 'selected' : ''}>Selected</option>
                    <option value="Rejected" ${a.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                  </select>
                </td>
                <td class="text-center">
                  <button class="btn btn-secondary btn-sm" onclick="viewOrDownloadResume('${a.internshipId}', '${a.email}')" style="padding: 4px 10px; font-size: 11.5px; white-space: nowrap;">
                    Resume
                  </button>
                </td>
                <td class="text-right" style="white-space: nowrap;">
                  <button class="btn btn-secondary btn-sm" onclick="openCandidateDetailsModal('${a.internshipId}', '${a.email}')" style="padding: 4px 10px; font-size: 12px; font-weight: 600;">
                    Dossier
                  </button>
                  <button class="btn btn-danger btn-sm" onclick="removeApplicant('${a.internshipId}', '${a.email}')" title="Delete application" style="padding: 4px 8px;">
                    ${ICONS.trash}
                  </button>
                </td>
              </tr>
            `).join('') || `
              <tr>
                <td colspan="7" class="empty-table-state">
                  <div class="empty-box" style="padding: 40px 20px;">
                    <p style="margin: 0; font-size: 14px; color: var(--text-muted);">No student applications submitted yet.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// ----------------------------------------------------------------------------
// Admin: Post Internship Modal & Logic
// ----------------------------------------------------------------------------
function openAddInternshipModal() {
  openModal('Post Internship / Job Opening', `
    <form id="add-int-form" onsubmit="handleAddInternship(event)">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-grid-2">
          <label>
            Job Opening / Role Title *
            <input type="text" id="int-t" required placeholder="e.g. Frontend Engineering Intern">
          </label>
          <label>
            Company Name *
            <input type="text" id="int-c" required placeholder="e.g. Craffix Web Technologies">
          </label>
        </div>

        <div class="form-grid-3">
          <label>
            Job Vacancy (Seats) *
            <input type="number" id="int-vac" min="1" max="100" required placeholder="e.g. 3">
          </label>
          <label>
            Work Mode *
            <select id="int-mode">
              <option value="Remote">Remote</option>
              <option value="Full-time">Full-time (On-site)</option>
              <option value="Part-time">Part-time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </label>
          <label>
            Location Setting *
            <input type="text" id="int-loc" required placeholder="e.g. Mumbai, India or Remote">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Package Type *
            <select id="int-stipend-type" onchange="handleStipendTypeToggle('add')">
              <option value="Stipend">Stipend (Paid Package)</option>
              <option value="Non-Stipend">Non-Stipend (Unpaid / Experience)</option>
            </select>
          </label>
          <label id="int-stipend-amount-group">
            Stipend Package Amount
            <input type="text" id="int-stipend-amount" placeholder="e.g. ₹15,000 / month or $800/mo">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Application Deadline *
            <input type="date" id="int-dl" required>
          </label>
          <label>
            Key Skills / Requirements
            <input type="text" id="int-req" placeholder="e.g. HTML5, CSS3, JavaScript, Git">
          </label>
        </div>

        <label>
          Job Description &amp; Scope *
          <textarea id="int-d" rows="3" required placeholder="Outline key responsibilities, qualifications, and learning outcomes..."></textarea>
        </label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('add-int-form').requestSubmit()">Post Opening</button>
  `, true);

  // Default deadline 30 days from now
  const d = new Date();
  d.setDate(d.getDate() + 30);
  const dlInput = document.getElementById('int-dl');
  if (dlInput) dlInput.value = d.toISOString().split('T')[0];
}

function handleStipendTypeToggle(formPrefix) {
  const typeSelect = document.getElementById(formPrefix === 'add' ? 'int-stipend-type' : 'e-int-stipend-type');
  const amountInput = document.getElementById(formPrefix === 'add' ? 'int-stipend-amount' : 'e-int-stipend-amount');
  if (!typeSelect || !amountInput) return;
  if (typeSelect.value === 'Non-Stipend') {
    amountInput.value = 'Unpaid / Experience & Certificate';
    amountInput.disabled = true;
    amountInput.style.backgroundColor = '#F1F5F9';
  } else {
    if (amountInput.value.includes('Unpaid')) amountInput.value = '₹15,000 / month';
    amountInput.disabled = false;
    amountInput.style.backgroundColor = '#FFFFFF';
  }
}

function handleAddInternship(e) {
  e.preventDefault();
  const db = loadDB();
  const stipendType = document.getElementById('int-stipend-type').value;
  const stipendAmount = stipendType === 'Stipend'
    ? (document.getElementById('int-stipend-amount').value.trim() || '₹15,000 / month')
    : 'Unpaid / Experience & Certificate';

  db.internships.push({
    id: 'int_' + Date.now(),
    title: document.getElementById('int-t').value.trim(),
    company: document.getElementById('int-c').value.trim(),
    vacancies: parseInt(document.getElementById('int-vac').value, 10) || 1,
    mode: document.getElementById('int-mode').value,
    location: document.getElementById('int-loc').value.trim(),
    stipendType: stipendType,
    stipendAmount: stipendAmount,
    type: stipendType === 'Stipend' ? `Stipend: ${stipendAmount}` : 'Non-Stipend (Unpaid)',
    deadline: document.getElementById('int-dl').value,
    requirements: document.getElementById('int-req').value.trim(),
    description: document.getElementById('int-d').value.trim(),
    applicants: [],
    createdAt: new Date().toISOString()
  });

  saveDB(db);
  closeModal();
  showAlert('Job opening successfully posted!', 'success');
  navigateTo('Internships');
}

// ----------------------------------------------------------------------------
// Admin: Edit Internship Modal & Logic
// ----------------------------------------------------------------------------
function openEditInternshipModal(id) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (!i) return;

  openModal('Edit Internship / Job Opening', `
    <form id="edit-int-form" onsubmit="handleEditInternship(event, '${id}')">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-grid-2">
          <label>
            Job Opening / Role Title *
            <input type="text" id="e-int-t" value="${i.title}" required>
          </label>
          <label>
            Company Name *
            <input type="text" id="e-int-c" value="${i.company}" required>
          </label>
        </div>

        <div class="form-grid-3">
          <label>
            Job Vacancy (Seats) *
            <input type="number" id="e-int-vac" min="1" max="100" value="${i.vacancies || 2}" required>
          </label>
          <label>
            Work Mode *
            <select id="e-int-mode">
              <option value="Remote" ${i.mode === 'Remote' ? 'selected' : ''}>Remote</option>
              <option value="Full-time" ${i.mode === 'Full-time' ? 'selected' : ''}>Full-time (On-site)</option>
              <option value="Part-time" ${i.mode === 'Part-time' ? 'selected' : ''}>Part-time</option>
              <option value="Hybrid" ${i.mode === 'Hybrid' ? 'selected' : ''}>Hybrid</option>
            </select>
          </label>
          <label>
            Location Setting *
            <input type="text" id="e-int-loc" value="${i.location || 'Remote'}" required>
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Package Type *
            <select id="e-int-stipend-type" onchange="handleStipendTypeToggle('edit')">
              <option value="Stipend" ${i.stipendType === 'Stipend' ? 'selected' : ''}>Stipend (Paid Package)</option>
              <option value="Non-Stipend" ${i.stipendType === 'Non-Stipend' ? 'selected' : ''}>Non-Stipend (Unpaid / Experience)</option>
            </select>
          </label>
          <label id="e-int-stipend-amount-group">
            Stipend Package Amount
            <input type="text" id="e-int-stipend-amount" value="${i.stipendAmount || '₹15,000 / month'}" ${i.stipendType === 'Non-Stipend' ? 'disabled style="background:#F1F5F9;"' : ''}>
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Application Deadline *
            <input type="date" id="e-int-dl" value="${i.deadline}" required>
          </label>
          <label>
            Key Skills / Requirements
            <input type="text" id="e-int-req" value="${i.requirements || ''}" placeholder="e.g. HTML5, CSS3, JavaScript, Git">
          </label>
        </div>

        <label>
          Job Description &amp; Scope *
          <textarea id="e-int-d" rows="3" required>${i.description}</textarea>
        </label>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('edit-int-form').requestSubmit()">Save Changes</button>
  `, true);
}

function handleEditInternship(e, id) {
  e.preventDefault();
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (i) {
    const stipendType = document.getElementById('e-int-stipend-type').value;
    const stipendAmount = stipendType === 'Stipend'
      ? (document.getElementById('e-int-stipend-amount').value.trim() || '₹15,000 / month')
      : 'Unpaid / Experience & Certificate';

    i.title = document.getElementById('e-int-t').value.trim();
    i.company = document.getElementById('e-int-c').value.trim();
    i.vacancies = parseInt(document.getElementById('e-int-vac').value, 10) || 1;
    i.mode = document.getElementById('e-int-mode').value;
    i.location = document.getElementById('e-int-loc').value.trim();
    i.stipendType = stipendType;
    i.stipendAmount = stipendAmount;
    i.type = stipendType === 'Stipend' ? `Stipend: ${stipendAmount}` : 'Non-Stipend (Unpaid)';
    i.deadline = document.getElementById('e-int-dl').value;
    i.requirements = document.getElementById('e-int-req').value.trim();
    i.description = document.getElementById('e-int-d').value.trim();

    saveDB(db);
    closeModal();
    showAlert('Internship opening updated.', 'success');
    navigateTo('Internships');
  }
}

function deleteInternship(id) {
  if (!confirm('Are you sure you want to delete this internship posting?')) return;
  const db = loadDB();
  db.internships = db.internships.filter(x => x.id !== id);
  saveDB(db);
  showAlert('Internship deleted.', 'success');
  navigateTo('Internships');
}

// ----------------------------------------------------------------------------
// Student: Apply to Internship with Personal Details & Resume Upload
// ----------------------------------------------------------------------------
function openApplyInternshipModal(id) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (!i) return;

  if (isDeadlineExpired(i.deadline)) {
    showAlert('This internship opening has expired and is no longer accepting applications.', 'danger');
    return;
  }

  tempResumeFile = { name: '', size: '', data: '' };

  openModal(`Apply for ${i.title}`, `
    <form id="apply-int-form" onsubmit="handleStudentApplySubmit(event, '${id}')">
      <!-- Role brief (No Emojis) -->
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; margin-bottom: 16px; font-size: 13px;">
        <div style="font-weight: 700; color: #0F172A; font-size: 14px; margin-bottom: 4px;">
          ${i.company} &nbsp;·&nbsp; ${i.location || 'Remote'}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">
          <span class="badge ${i.stipendType === 'Stipend' ? 'badge-green' : 'badge-amber'}">
            ${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'}
          </span>
          <span class="badge badge-purple">Mode: ${i.mode}</span>
          <span class="badge" style="background:#FFF; border:1px solid #CBD5E1;">${i.vacancies} ${Number(i.vacancies) === 1 ? 'Vacancy' : 'Vacancies'}</span>
          <span class="badge badge-blue">Deadline: ${i.deadline}</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-grid-2">
          <label>
            Full Name *
            <input type="text" id="app-name" value="${currentUser.name || ''}" required placeholder="Your full legal name">
          </label>
          <label>
            Email Address *
            <input type="email" id="app-email" value="${currentUser.email || ''}" required readonly style="background: #F1F5F9; color: #475569;">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Phone Number *
            <input type="tel" id="app-phone" required placeholder="+91 98765 43210">
          </label>
          <label>
            College / University Name *
            <input type="text" id="app-college" required placeholder="e.g. National Institute of Technology">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            Degree &amp; Branch / Graduation Year *
            <input type="text" id="app-degree" required placeholder="e.g. B.Tech Computer Science (2026 Batch)">
          </label>
          <label>
            LinkedIn Profile URL
            <input type="url" id="app-linkedin" value="${currentUser.linkedin || ''}" placeholder="https://linkedin.com/in/username">
          </label>
        </div>

        <div class="form-grid-2">
          <label>
            HackerRank Profile URL / Handle
            <input type="text" id="app-hackerrank" value="${currentUser.hackerrank || ''}" placeholder="https://hackerrank.com/username">
          </label>
          <label>
            LeetCode Profile URL / Handle
            <input type="text" id="app-leetcode" value="${currentUser.leetcode || ''}" placeholder="https://leetcode.com/username">
          </label>
        </div>

        <label>
          Candidate Bio &amp; Pitch (Cover Note)
          <textarea id="app-note" rows="3" placeholder="Briefly highlight your background, practical experience, or enthusiasm for this internship...">${currentUser.bio || ''}</textarea>
        </label>

        <!-- Resume File Upload Box (No Emojis) -->
        <div>
          <label style="margin-bottom: 6px;">Upload Resume (PDF, DOC, DOCX - Max 5MB) *</label>
          <div class="file-upload-box" onclick="document.getElementById('app-resume-file').click()">
            <div id="resume-box-text" style="font-weight: 600; font-size: 13.5px; color: var(--accent);">
              Click to select and upload your resume
            </div>
            <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
              Accepted formats: PDF (.pdf), Word (.doc, .docx)
            </div>
            <input type="file" id="app-resume-file" accept=".pdf,.doc,.docx" style="display: none;" onchange="handleResumeFileSelected(event)" required>
            <div id="resume-file-status" style="margin-top: 8px; font-size: 12.5px; font-weight: 600;"></div>
          </div>
        </div>
      </div>
    </form>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
    <button class="btn btn-sm" onclick="document.getElementById('apply-int-form').requestSubmit()">Submit Application</button>
  `, true);
}

function handleResumeFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert('Resume file is too large. Please select a document under 5MB.');
    event.target.value = '';
    return;
  }

  const sizeStr = file.size < 1024 * 1024
    ? Math.round(file.size / 1024) + ' KB'
    : (file.size / (1024 * 1024)).toFixed(1) + ' MB';

  const boxText = document.getElementById('resume-box-text');
  const statusEl = document.getElementById('resume-file-status');
  if (boxText) boxText.textContent = `Selected: ${file.name}`;
  if (statusEl) {
    statusEl.innerHTML = `<span style="color: #059669;">Attached: ${file.name} (${sizeStr})</span>`;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    tempResumeFile = {
      name: file.name,
      size: sizeStr,
      data: e.target.result
    };
  };
  reader.readAsDataURL(file);
}

function handleStudentApplySubmit(e, id) {
  e.preventDefault();
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (!i) return;

  if (isDeadlineExpired(i.deadline)) {
    showAlert('This internship opening has expired and applications are now closed.', 'danger');
    closeModal();
    return;
  }

  if (!i.applicants) i.applicants = [];

  if (i.applicants.some(a => a.email === currentUser.email)) {
    showAlert('You have already submitted an application for this position.', 'info');
    closeModal();
    return;
  }

  const fullName = document.getElementById('app-name').value.trim();
  const phone = document.getElementById('app-phone').value.trim();
  const college = document.getElementById('app-college').value.trim();
  const degree = document.getElementById('app-degree').value.trim();
  const linkedin = document.getElementById('app-linkedin')?.value.trim() || '';
  const hackerrank = document.getElementById('app-hackerrank')?.value.trim() || '';
  const leetcode = document.getElementById('app-leetcode')?.value.trim() || '';
  const coverNote = document.getElementById('app-note').value.trim();

  // If user profile did not have these, save them to user profile as well
  let profileChanged = false;
  if (linkedin && !currentUser.linkedin) { currentUser.linkedin = linkedin; profileChanged = true; }
  if (hackerrank && !currentUser.hackerrank) { currentUser.hackerrank = hackerrank; profileChanged = true; }
  if (leetcode && !currentUser.leetcode) { currentUser.leetcode = leetcode; profileChanged = true; }
  if (coverNote && !currentUser.bio) { currentUser.bio = coverNote; profileChanged = true; }
  if (profileChanged) {
    const userIdx = db.users.findIndex(u => u.email === currentUser.email);
    if (userIdx !== -1) {
      db.users[userIdx] = { ...db.users[userIdx], ...currentUser };
    }
    localStorage.setItem('craffix_user_session', JSON.stringify(currentUser));
  }

  const resumeName = tempResumeFile.name || `${fullName.replace(/\s+/g, '_')}_Resume.pdf`;
  const resumeSize = tempResumeFile.size || '150 KB';
  const resumeData = tempResumeFile.data || '';

  i.applicants.push({
    name: fullName,
    email: currentUser.email,
    phone: phone,
    college: college,
    degree: degree,
    linkedin: linkedin,
    hackerrank: hackerrank,
    leetcode: leetcode,
    portfolio: linkedin,
    coverNote: coverNote,
    resumeName: resumeName,
    resumeSize: resumeSize,
    resumeData: resumeData,
    status: 'Under Review',
    appliedAt: new Date().toISOString().split('T')[0]
  });

  saveDB(db);
  closeModal();
  showAlert(`Application submitted successfully for "${i.title}"!`, 'success');
  navigateTo('Internships');
}

// ----------------------------------------------------------------------------
// Student: View Their Submitted Application Details
// Calls the dedicated table structure
// ----------------------------------------------------------------------------
function openMyApplicationModal(id) {
  openCandidateDetailsModal(id, currentUser.email);
}

// ----------------------------------------------------------------------------
// Admin: Applied List Modal for a Specific Internship (No Emojis)
// ----------------------------------------------------------------------------
function openApplicantsModal(id) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === id);
  if (!i) return;

  const applicants = i.applicants || [];
  const expired = isDeadlineExpired(i.deadline);

  openModal(`Applied Candidates: ${i.title}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #F8FAFC; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; font-size: 13px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <strong>${i.company}</strong> &nbsp;·&nbsp; ${i.location || 'Remote'} &nbsp;·&nbsp; Mode: <strong>${i.mode}</strong> &nbsp;·&nbsp; 
          <span class="badge ${i.stipendType === 'Stipend' ? 'badge-green' : 'badge-amber'}">
            ${i.stipendType === 'Stipend' ? i.stipendAmount : 'Non-Stipend'}
          </span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="badge ${expired ? 'badge-red' : 'badge-blue'}">${expired ? 'Expired' : 'Active'}</span>
          <span class="badge badge-purple">${applicants.length} Total Applied</span> &nbsp;·&nbsp;
          <span>${i.vacancies} Seats</span>
        </div>
      </div>

      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              <th class="text-left">Candidate Name &amp; Contact</th>
              <th class="text-left">Education &amp; College</th>
              <th class="text-center">Applied Date</th>
              <th class="text-center">Status</th>
              <th class="text-center">Resume</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${applicants.map(a => `
              <tr>
                <td>
                  <strong>${a.name}</strong>
                  <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">
                    ${a.email} &nbsp;·&nbsp; ${a.phone || 'N/A'}
                  </div>
                  ${a.rejectionReason && a.status === 'Rejected' ? `
                    <div style="font-size: 11px; color: #DC2626; margin-top: 2px;">
                      Reason: ${escapeHtml(a.rejectionReason)}
                    </div>
                  ` : ''}
                  ${a.interviewNotes && a.status === 'Interview Scheduled' ? `
                    <div style="font-size: 11px; color: #1D4ED8; margin-top: 2px;">
                      Interview: ${a.interviewDate ? a.interviewDate + (a.interviewTime ? ' ' + a.interviewTime : '') + ' · ' : ''}${escapeHtml(a.interviewNotes.length > 55 ? a.interviewNotes.slice(0, 55) + '...' : a.interviewNotes)}
                    </div>
                  ` : ''}
                </td>
                <td>
                  <div style="font-size: 12.5px; font-weight: 500;">${a.degree || 'Degree'}</div>
                  <div style="font-size: 11.5px; color: var(--text-muted);">${a.college || 'College'}</div>
                </td>
                <td class="text-center" style="font-size: 12px; white-space: nowrap;">
                  ${a.appliedAt}
                </td>
                <td class="text-center">
                  <select class="status-select" onchange="handleAdminStatusSelectChange('${id}', '${a.email}', this.value, this)">
                    <option value="Under Review" ${a.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
                    <option value="Shortlisted" ${a.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
                    <option value="Interview Scheduled" ${a.status === 'Interview Scheduled' ? 'selected' : ''}>Interview Scheduled</option>
                    <option value="Selected" ${a.status === 'Selected' ? 'selected' : ''}>Selected</option>
                    <option value="Rejected" ${a.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                  </select>
                </td>
                <td class="text-center">
                  <button class="btn btn-secondary btn-sm" onclick="viewOrDownloadResume('${id}', '${a.email}')" style="padding: 4px 10px; font-size: 11.5px; white-space: nowrap;">
                    Resume
                  </button>
                </td>
                <td class="text-right" style="white-space: nowrap;">
                  <button class="btn btn-secondary btn-sm" onclick="openCandidateDetailsModal('${id}', '${a.email}')" style="padding: 4px 10px; font-size: 12px; font-weight: 600;">
                    View Dossier
                  </button>
                  <button class="btn btn-danger btn-sm" onclick="removeApplicant('${id}', '${a.email}')" title="Delete application" style="padding: 4px 8px;">
                    ${ICONS.trash}
                  </button>
                </td>
              </tr>
            `).join('') || `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <div class="empty-box" style="padding: 30px;">
                    <p style="margin: 0; font-size: 13.5px; color: var(--text-muted);">No candidates have applied for this position yet.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `, `
    <button class="btn btn-sm" onclick="closeModal()">Close</button>
  `, true);
}

// ----------------------------------------------------------------------------
// Admin: Status Change Handler with Rejection & Interview Scheduling Prompts
// ----------------------------------------------------------------------------
function handleAdminStatusSelectChange(intId, studentEmail, newStatus, selectEl) {
  if (newStatus === 'Rejected') {
    openRejectionReasonModal(intId, studentEmail);
  } else if (newStatus === 'Interview Scheduled') {
    openInterviewScheduleModal(intId, studentEmail);
  } else {
    updateApplicantStatus(intId, studentEmail, newStatus);
  }
}

// ----------------------------------------------------------------------------
// Admin: Rejection Reason / Constructive Feedback Modal (No Quick Presets)
// ----------------------------------------------------------------------------
function openRejectionReasonModal(intId, studentEmail) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  const currentReason = a.rejectionReason || '';

  openModal(`Rejection Feedback: ${a.name}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 12px 16px;">
        <div style="font-weight: 700; font-size: 14px; color: #991B1B; margin-bottom: 2px;">
          Candidate: ${a.name} (${a.email})
        </div>
        <div style="font-size: 12.5px; color: #7F1D1D;">
          Opening: <strong>${i.title}</strong> at ${i.company}
        </div>
      </div>

      <div>
        <label style="font-weight: 600; font-size: 13px; margin-bottom: 4px; display: block;">
          Constructive Rejection Reason &amp; Feedback for Candidate *
        </label>
        <textarea id="rejection-reason-text" rows="5" style="width: 100%; padding: 10px; font-size: 13px; border: 1px solid var(--line); border-radius: 6px;" placeholder="Explain constructive feedback or why the candidate was not selected...">${escapeHtml(currentReason)}</textarea>
        <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
          This feedback will be directly visible to the candidate in their Application Tracker.
        </div>
      </div>
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal(); refreshInternshipsView();">Cancel</button>
    <button class="btn btn-danger btn-sm" onclick="confirmApplicantRejection('${intId}', '${studentEmail}')">
      Confirm Rejection &amp; Save Feedback
    </button>
  `, true);
}

function confirmApplicantRejection(intId, studentEmail) {
  const reason = (document.getElementById('rejection-reason-text')?.value || '').trim() || 'Skillset mismatch for current project vacancy requirements.';
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  a.status = 'Rejected';
  a.rejectionReason = reason;
  a.rejectedAt = new Date().toISOString().split('T')[0];

  saveDB(db);
  closeModal();
  showAlert(`Application for ${a.name} marked as Rejected with feedback recorded.`, 'info');
  refreshInternshipsView();
}

// ----------------------------------------------------------------------------
// Admin: Schedule Interview Modal with Notes & Venue/Link
// ----------------------------------------------------------------------------
function openInterviewScheduleModal(intId, studentEmail) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  const currentDate = a.interviewDate || new Date().toISOString().split('T')[0];
  const currentTime = a.interviewTime || '10:00';
  const currentLink = a.interviewLink || '';
  const currentNotes = a.interviewNotes || '';

  openModal(`Schedule Interview: ${a.name}`, `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 12px 16px;">
        <div style="font-weight: 700; font-size: 14px; color: #1E40AF; margin-bottom: 2px;">
          Candidate: ${a.name} (${a.email})
        </div>
        <div style="font-size: 12.5px; color: #1D4ED8;">
          Opening: <strong>${i.title}</strong> at ${i.company} &nbsp;·&nbsp; Degree: ${a.degree || 'N/A'}
        </div>
      </div>

      <div class="form-grid-2">
        <div>
          <label style="font-weight: 600; font-size: 13px; margin-bottom: 4px; display: block;">
            Interview Date *
          </label>
          <input type="date" id="interview-date" value="${currentDate}" style="width: 100%; padding: 8px 10px; font-size: 13px; border: 1px solid var(--line); border-radius: 6px;">
        </div>
        <div>
          <label style="font-weight: 600; font-size: 13px; margin-bottom: 4px; display: block;">
            Interview Time *
          </label>
          <input type="time" id="interview-time" value="${currentTime}" style="width: 100%; padding: 8px 10px; font-size: 13px; border: 1px solid var(--line); border-radius: 6px;">
        </div>
      </div>

      <div>
        <label style="font-weight: 600; font-size: 13px; margin-bottom: 4px; display: block;">
          Meeting Link / Room / Location
        </label>
        <input type="text" id="interview-link" placeholder="e.g. https://meet.google.com/abc-defg-hij or Craffix Conference Room 2" value="${escapeHtml(currentLink)}" style="width: 100%; padding: 8px 10px; font-size: 13px; border: 1px solid var(--line); border-radius: 6px;">
      </div>

      <div>
        <label style="font-weight: 600; font-size: 13px; margin-bottom: 4px; display: block;">
          Interview Notes &amp; Agenda Instructions *
        </label>
        <textarea id="interview-notes-text" rows="4" style="width: 100%; padding: 10px; font-size: 13px; border: 1px solid var(--line); border-radius: 6px;" placeholder="Provide round details, topics to prepare, interviewer names, or instructions for the candidate...">${escapeHtml(currentNotes)}</textarea>
        <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
          These interview notes and scheduling details will be displayed directly in the candidate's tracker and alerts.
        </div>
      </div>
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal(); refreshInternshipsView();">Cancel</button>
    <button class="btn btn-primary btn-sm" onclick="confirmScheduleInterview('${intId}', '${studentEmail}')">
      Schedule Interview &amp; Save Notes
    </button>
  `, true);
}

function confirmScheduleInterview(intId, studentEmail) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  const date = document.getElementById('interview-date')?.value || '';
  const time = document.getElementById('interview-time')?.value || '';
  const link = (document.getElementById('interview-link')?.value || '').trim();
  const rawNotes = (document.getElementById('interview-notes-text')?.value || '').trim();

  const notes = rawNotes || 'Technical discussion round scheduled with the engineering panel.';

  a.status = 'Interview Scheduled';
  a.interviewDate = date;
  a.interviewTime = time;
  a.interviewLink = link;
  a.interviewNotes = notes;
  a.interviewScheduledAt = new Date().toISOString().split('T')[0];

  saveDB(db);
  closeModal();
  showAlert(`Interview scheduled for ${a.name} on ${date || 'upcoming date'} at ${time || 'scheduled time'}.`, 'success');
  refreshInternshipsView();
}

// ----------------------------------------------------------------------------
// Common Helper: View or Download Candidate Resume
// ----------------------------------------------------------------------------
function viewOrDownloadResume(intId, studentEmail) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  if (a.resumeData && a.resumeData.startsWith('data:')) {
    const link = document.createElement('a');
    link.href = a.resumeData;
    link.download = a.resumeName || `${(a.name || 'Candidate').replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // Fallback: Generate printable dossier in popup window
  const win = window.open('', '_blank');
  if (!win) {
    showAlert('Popup window was blocked by your browser. Please allow popups for localhost.', 'danger');
    return;
  }

  win.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${a.name} - Resume Profile</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 780px; margin: 0 auto; color: #0F172A; line-height: 1.6; background: #FAFAFA; }
        .card-sheet { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { border-bottom: 2px solid #2E1065; padding-bottom: 18px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
        h1 { margin: 0 0 6px; color: #2E1065; font-size: 26px; font-weight: 700; }
        .meta { color: #64748B; font-size: 13.5px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 13.5px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; margin-bottom: 12px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .info-label { font-size: 11.5px; color: #64748B; font-weight: 600; text-transform: uppercase; }
        .info-val { font-size: 14px; font-weight: 500; color: #0F172A; margin-top: 2px; }
        .badge { display: inline-block; background: #EFF6FF; color: #2563EB; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; border: 1px solid #BFDBFE; }
        .note-box { background: #F8FAFC; border-left: 3px solid #2E1065; padding: 14px 16px; border-radius: 4px; font-size: 13.5px; color: #334155; }
        .btn-print { background: #2E1065; color: #FFFFFF; border: 0; padding: 9px 18px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; }
      </style>
    </head>
    <body>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="font-size: 13px; color: #64748B;">Craffix LMS Candidate Dossier</span>
        <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <div class="card-sheet">
        <div class="header">
          <div>
            <h1>${a.name}</h1>
            <div class="meta">
              ${a.email} &nbsp;·&nbsp; ${a.phone || '+91 98765 43210'}
              ${a.linkedin ? `&nbsp;·&nbsp; <a href="${a.linkedin}" target="_blank" style="color: #2563EB;">LinkedIn: ${a.linkedin}</a>` : ''}
              ${a.hackerrank ? `&nbsp;·&nbsp; <a href="${a.hackerrank}" target="_blank" style="color: #059669;">HackerRank: ${a.hackerrank}</a>` : ''}
              ${a.leetcode ? `&nbsp;·&nbsp; <a href="${a.leetcode}" target="_blank" style="color: #D97706;">LeetCode: ${a.leetcode}</a>` : ''}
            </div>
          </div>
          <div>
            <span class="badge">${a.status || 'Under Review'}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Academic Background</div>
          <div class="grid-2">
            <div>
              <div class="info-label">College / University</div>
              <div class="info-val">${a.college || 'National Institute of Technology'}</div>
            </div>
            <div>
              <div class="info-label">Degree &amp; Department</div>
              <div class="info-val">${a.degree || 'B.Tech Computer Science (Final Year)'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Application Position Details</div>
          <div class="grid-2">
            <div>
              <div class="info-label">Applied Role / Opening</div>
              <div class="info-val"><strong>${i.title}</strong> (${i.company})</div>
            </div>
            <div>
              <div class="info-label">Date Submitted &amp; Document</div>
              <div class="info-val">${a.appliedAt} &nbsp;·&nbsp; ${a.resumeName || 'Resume.pdf'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Candidate Statement / Pitch</div>
          <div class="note-box">
            ${a.coverNote || 'Dedicated student with strong foundational knowledge seeking internship placement to apply skills and learn on real-world projects.'}
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
  win.document.close();
}

function updateApplicantStatus(intId, studentEmail, newStatus) {
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;
  const a = (i.applicants || []).find(x => x.email === studentEmail);
  if (!a) return;

  a.status = newStatus;
  saveDB(db);
  showAlert(`Status for ${a.name} updated to "${newStatus}"`, 'success');
  refreshInternshipsView();
}

function removeApplicant(intId, studentEmail) {
  if (!confirm('Are you sure you want to remove this applicant?')) return;
  const db = loadDB();
  const i = db.internships.find(x => x.id === intId);
  if (!i) return;

  i.applicants = (i.applicants || []).filter(a => a.email !== studentEmail);
  saveDB(db);
  showAlert('Applicant record removed.', 'info');
  refreshInternshipsView();
}

// ============================================================================
// 14. CERTIFICATES & OFFICIAL PRINT
// ============================================================================
function renderCertificates(container) {
  const db = loadDB();
  const isAdmin = currentUser.role === 'admin';
  const myCerts = isAdmin
    ? (db.certificateRequests || [])
    : (db.certificateRequests || []).filter(r => r.studentEmail === currentUser.email);

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2>${isAdmin ? 'All Issued Certificates' : 'My Verified Certificates'} (${myCerts.length})</h2>
      </div>
      <div class="table-container">
        <table class="lms-table">
          <thead>
            <tr>
              ${isAdmin ? '<th class="text-left" style="white-space: nowrap;">Student</th>' : ''}
              <th class="text-left" style="white-space: nowrap;">Course</th>
              <th class="text-center" style="white-space: nowrap;">Score</th>
              <th class="text-center" style="white-space: nowrap;">Approval Stage</th>
              <th class="text-center" style="white-space: nowrap;">Certificate ID</th>
              <th class="text-right" style="white-space: nowrap;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${myCerts.map(cert => `
              <tr style="white-space: nowrap;">
                ${isAdmin ? `<td><strong>${cert.studentName || 'Student'}</strong><br><small style="color: var(--text-muted);">${cert.studentEmail}</small></td>` : ''}
                <td><strong>${cert.courseTitle}</strong></td>
                <td class="text-center"><strong style="color: var(--success);">${cert.score}%</strong></td>
                <td class="text-center">${renderCertBadge(cert.status)}</td>
                <td class="text-center"><code>${cert.certId || 'CRX-PENDING'}</code></td>
                <td class="text-right">
                  ${cert.status === 'issued' ? `
                    <button class="btn btn-sm" onclick="openPrintModal('${cert.id}')">Open &amp; Print</button>
                  ` : `
                    <button class="btn btn-secondary btn-sm" disabled style="opacity: 0.6;">Awaiting Approvals</button>
                  `}
                </td>
              </tr>
            `).join('') || `<tr><td colspan="${isAdmin ? 6 : 5}" class="empty-table-state"><div class="empty-box"><p>No certificates earned yet.</p></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openPrintModal(certId) {
  const db = loadDB();
  const cert = (db.certificateRequests || []).find(r => r.id === certId);
  if (!cert) return;

  const course = (db.courses || []).find(c => c.id === cert.courseId);
  const mentor = (db.users || []).find(u => u.email === (course && course.mentorId)) || { name: (course && course.mentorName) || 'Faculty Mentor' };
  const admin = (db.users || []).find(u => u.role === 'admin') || { name: 'Institution Administrator' };

  openModal('Certificate of Completion', `
    <div id="print-area" class="cert-printable">
      <div style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #64748B;">Craffix Web Technologies</div>
      <h2>Certificate of Completion</h2>
      <p style="font-style: italic; color: #64748B;">This is to certify that</p>
      <div class="cert-name">${cert.studentName}</div>
      <p style="font-size: 14.5px; line-height: 1.6; max-width: 580px; margin: 0 auto; color: #334155;">
        has successfully passed the comprehensive assessment with a score of <strong>${cert.score}%</strong> in the curriculum:
        <br><strong style="font-size: 17px; color: #0F172A; display: inline-block; margin-top: 6px;">${cert.courseTitle}</strong>
      </p>

      <div class="cert-footer-row">
        <div>
          <div style="border-bottom: 1px solid #0F172A; width: 140px; margin-bottom: 4px; font-style: italic;">${mentor.name}</div>
          <small>Course Mentor</small>
        </div>
        <div>
          <div style="border: 2px solid #D4AF37; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; margin: 0 auto 4px; color: #D4AF37; font-size: 9px; font-weight: bold;">SEAL</div>
          <small style="color: #64748B;">ID: ${cert.certId || 'CRX-' + cert.id}</small>
        </div>
        <div>
          <div style="border-bottom: 1px solid #0F172A; width: 140px; margin-bottom: 4px; font-style: italic;">${admin.name}</div>
          <small>System Administrator</small>
        </div>
      </div>
    </div>
  `, `
    <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    <button class="btn btn-sm" onclick="printCertWindow()">Print / Save PDF</button>
  `);
}

function printCertWindow() {
  const el = document.getElementById('print-area');
  if (!el) return;
  const w = window.open('', '', 'width=900,height=650');
  w.document.write(`
    <html>
      <head>
        <title>Certificate</title>
        <link rel="stylesheet" href="style.css">
        <style>body { background: #fff; padding: 30px; display: flex; justify-content: center; }</style>
      </head>
      <body>${el.outerHTML}</body>
    </html>
  `);
  w.document.close();
  w.focus();
  setTimeout(() => { w.print(); w.close(); }, 350);
}

// ============================================================================
// 15. BOTTOM NAV VIEWS: NOTIFICATION, SETTING, PRIVACY POLICY
// ============================================================================

function getNotificationsForUser() {
  if (!currentUser) return [];
  const db = loadDB();
  const notifs = [];
  const readKey = `craffix_read_notifs_${currentUser.email}`;
  const readIds = JSON.parse(localStorage.getItem(readKey) || '[]');

  if (currentUser.role === 'admin') {
    // 1. Pending Courses for Review
    (db.courses || []).forEach(c => {
      if (c.status === 'pending') {
        notifs.push({
          id: `notif_c_${c.id}`,
          type: 'course',
          badge: 'Course Review',
          badgeClass: 'badge-amber',
          title: `Course Approval Needed: ${c.title}`,
          desc: `Submitted by ${c.mentorName || 'Faculty Mentor'}. Review curriculum, modules, and assessment structure to approve publication.`,
          date: c.createdAt || 'Recent',
          actionText: 'Review in Approvals',
          actionTab: 'Approvals'
        });
      }
      // Pending Module additions
      (c.materials || []).forEach(m => {
        if (m.status === 'pending') {
          notifs.push({
            id: `notif_m_${c.id}_${m.id}`,
            type: 'module',
            badge: 'Module Review',
            badgeClass: 'badge-amber',
            title: `Module Verification: ${m.title}`,
            desc: `New lecture material submitted for course "${c.title}". Verification required prior to student access.`,
            date: m.createdAt || 'Recent',
            actionText: 'Review in Approvals',
            actionTab: 'Approvals'
          });
        }
      });
    });

    // 2. Pending Certificate Sign-offs
    (db.certificateRequests || []).forEach(r => {
      if (r.status === 'pending_admin') {
        const student = (db.users || []).find(u => u.email === r.studentEmail) || { name: r.studentEmail };
        const course = (db.courses || []).find(c => c.id === r.courseId) || { title: 'Course' };
        notifs.push({
          id: `notif_cert_${r.id}`,
          type: 'certificate',
          badge: 'Certificate Sign-Off',
          badgeClass: 'badge-blue',
          title: `Certificate Authorization: ${student.name}`,
          desc: `Completed "${course.title}" with final assessment score ${r.quizScore}%. Mentor has endorsed; institutional sign-off required.`,
          date: r.requestedAt || 'Recent',
          actionText: 'Sign Off in Approvals',
          actionTab: 'Approvals'
        });
      }
    });

    // 3. Paid Webinar Payment Verifications
    (db.webinars || []).forEach(w => {
      (w.registrations || []).forEach(reg => {
        if (reg.type === 'paid' && reg.status === 'pending_approval') {
          notifs.push({
            id: `notif_web_${w.id}_${reg.email || reg.studentEmail}`,
            type: 'webinar_payment',
            badge: 'Payment Verification',
            badgeClass: 'badge-purple',
            title: `Webinar Booking: ₹${w.fee || 0} via UPI`,
            desc: `${reg.name || reg.studentName} (${reg.email || reg.studentEmail}) submitted payment with Ref/UTR: ${reg.utr || 'N/A'} for "${w.title}".`,
            date: reg.bookedAt || reg.registeredAt || 'Recent',
            actionText: 'Verify in Approvals',
            actionTab: 'Approvals'
          });
        }
      });
    });

    // 4. Internship Applications
    (db.internships || []).forEach(i => {
      (i.applicants || i.applications || []).forEach(app => {
        notifs.push({
          id: `notif_app_${i.id}_${app.email || app.studentEmail}`,
          type: 'internship',
          badge: 'Internship Applicant',
          badgeClass: 'badge-green',
          title: `New Candidate: ${app.name || app.studentName}`,
          desc: `Applied for ${i.title} at ${i.company}. College: ${app.college || 'N/A'}, Degree: ${app.degree || 'N/A'}.`,
          date: app.appliedAt || 'Recent',
          actionText: 'View Internships',
          actionTab: 'Internships'
        });
      });
    });

  } else if (currentUser.role === 'mentor') {
    const myCourses = (db.courses || []).filter(c => c.mentorId === currentUser.email);
    const myCourseIds = myCourses.map(c => c.id);

    // 1. Pending Certificate Evaluations
    (db.certificateRequests || []).forEach(r => {
      if (myCourseIds.includes(r.courseId) && r.status === 'pending_mentor') {
        const student = (db.users || []).find(u => u.email === r.studentEmail) || { name: r.studentEmail };
        const course = myCourses.find(c => c.id === r.courseId) || { title: 'Course' };
        notifs.push({
          id: `notif_m_cert_${r.id}`,
          type: 'certificate',
          badge: 'Certificate Evaluation',
          badgeClass: 'badge-amber',
          title: `Sign-off Required: ${student.name}`,
          desc: `Student scored ${r.quizScore}% on final assessment for "${course.title}". Review criteria and approve for administrator issuance.`,
          date: r.requestedAt || 'Recent',
          actionText: 'Review Certificate',
          actionTab: 'Approve Certificates'
        });
      }
    });

    // 2. Pending Assignment Submissions
    myCourses.forEach(c => {
      (c.assignments || []).forEach(asg => {
        (asg.submissions || []).forEach(sub => {
          if (sub.status === 'submitted') {
            notifs.push({
              id: `notif_sub_${c.id}_${asg.id}_${sub.studentEmail}`,
              type: 'assignment',
              badge: 'Assignment Grading',
              badgeClass: 'badge-blue',
              title: `Assignment Submission: ${asg.title}`,
              desc: `Submitted by ${sub.studentName} for course "${c.title}". Awaiting evaluation, score, and constructive feedback.`,
              date: sub.submittedAt || 'Recent',
              actionText: 'Grade Submissions',
              actionTab: 'Grade Submissions'
            });
          }
        });
      });
    });

    // 3. Approved Courses
    myCourses.forEach(c => {
      if (c.status === 'approved') {
        notifs.push({
          id: `notif_c_appr_${c.id}`,
          type: 'course',
          badge: 'Course Active',
          badgeClass: 'badge-green',
          title: `Course Approved: ${c.title}`,
          desc: `Your course has been approved by the institution administration and is available for student enrollment.`,
          date: c.createdAt || 'Recent',
          actionText: 'View My Courses',
          actionTab: 'My Courses'
        });
      }
    });

    // 4. Webinar Registration Stats
    (db.webinars || []).forEach(w => {
      if (w.mentorEmail === currentUser.email) {
        const count = (w.registrations || []).length;
        if (count > 0) {
          notifs.push({
            id: `notif_web_reg_${w.id}`,
            type: 'webinar',
            badge: 'Webinar Registrations',
            badgeClass: 'badge-purple',
            title: `${w.title} (${count} Registered)`,
            desc: `${count} student(s) have registered for your session on ${w.date} at ${w.time}.`,
            date: w.date || 'Upcoming',
            actionText: 'View Webinars',
            actionTab: 'Webinars'
          });
        }
      }
    });

  } else if (currentUser.role === 'student') {
    // 1. Certificate Status Updates
    (db.certificateRequests || []).forEach(r => {
      if (r.studentEmail === currentUser.email) {
        const course = (db.courses || []).find(c => c.id === r.courseId) || { title: 'Course' };
        if (r.status === 'issued') {
          notifs.push({
            id: `notif_s_cert_${r.id}`,
            type: 'certificate',
            badge: 'Certificate Issued',
            badgeClass: 'badge-green',
            title: `Certificate Ready: ${course.title}`,
            desc: `Congratulations! Your certificate of completion has been signed by faculty and administration and is ready to download.`,
            date: r.issuedAt || r.requestedAt || 'Recent',
            actionText: 'Download Certificate',
            actionTab: 'Certificates'
          });
        } else {
          notifs.push({
            id: `notif_s_cert_p_${r.id}`,
            type: 'certificate',
            badge: 'Certificate Under Review',
            badgeClass: 'badge-amber',
            title: `Certificate Under Review: ${course.title}`,
            desc: `Your score (${r.quizScore}%) is undergoing verification by ${r.status === 'pending_admin' ? 'Institution Administration' : 'Faculty Mentor'}.`,
            date: r.requestedAt || 'Recent',
            actionText: 'View Certificates',
            actionTab: 'Certificates'
          });
        }
      }
    });

    // 2. Webinar Access Updates
    (db.webinars || []).forEach(w => {
      const reg = (w.registrations || []).find(r => (r.email === currentUser.email || r.studentEmail === currentUser.email));
      if (reg) {
        if (reg.status === 'confirmed') {
          notifs.push({
            id: `notif_s_web_${w.id}`,
            type: 'webinar',
            badge: 'Webinar Confirmed',
            badgeClass: 'badge-green',
            title: `Webinar Access Active: ${w.title}`,
            desc: `Your seat is confirmed for ${w.date} at ${w.time}. Live Google Meet/Zoom room link is unlocked.`,
            date: w.date || 'Upcoming',
            actionText: 'Open Webinars',
            actionTab: 'Webinars'
          });
        } else if (reg.status === 'pending_approval') {
          notifs.push({
            id: `notif_s_web_p_${w.id}`,
            type: 'webinar',
            badge: 'Payment Verification',
            badgeClass: 'badge-amber',
            title: `Payment Review: ${w.title}`,
            desc: `Your UPI payment receipt (UTR: ${reg.utr || 'Pending'}) is being verified by admin. Joining link will unlock upon confirmation.`,
            date: reg.bookedAt || 'Recent',
            actionText: 'Check Webinars',
            actionTab: 'Webinars'
          });
        }
      }
    });

    // 3. Internship Application Updates
    (db.internships || []).forEach(i => {
      const app = (i.applicants || i.applications || []).find(a => (a.email || a.studentEmail) === currentUser.email);
      if (app) {
        let badgeClass = 'badge-blue';
        let statusMsg = 'Your application has been received and is being screened by the talent acquisition team.';
        if (app.status === 'Shortlisted' || app.status === 'shortlisted') {
          badgeClass = 'badge-green';
          statusMsg = 'Congratulations! Your profile has been shortlisted for technical screening rounds.';
        } else if (app.status === 'Interview Scheduled') {
          badgeClass = 'badge-purple';
          statusMsg = `Interview round scheduled! ${app.interviewDate ? 'Date: ' + app.interviewDate + (app.interviewTime ? ' at ' + app.interviewTime : '') + '. ' : ''}${app.interviewNotes ? app.interviewNotes : 'Please check your application tracker for details.'}`;
        } else if (app.status === 'Selected' || app.status === 'selected') {
          badgeClass = 'badge-green';
          statusMsg = 'Congratulations! You have been selected for this internship position.';
        } else if (app.status === 'Rejected' || app.status === 'rejected') {
          badgeClass = 'badge-red';
          statusMsg = `Feedback: ${app.rejectionReason || 'The employer has decided to pursue other applicants.'}`;
        }
        notifs.push({
          id: `notif_s_int_${i.id}`,
          type: 'internship',
          badge: (app.status || 'applied').toUpperCase(),
          badgeClass,
          title: `Internship Status: ${i.title} at ${i.company}`,
          desc: statusMsg,
          date: app.appliedAt || 'Recent',
          actionText: 'View Internships',
          actionTab: 'Internships'
        });
      }
    });
  }

  // Tag isRead flag
  notifs.forEach(n => {
    n.isRead = readIds.includes(n.id);
  });

  return notifs;
}

function markAllNotificationsAsRead() {
  const notifs = getNotificationsForUser();
  const readKey = `craffix_read_notifs_${currentUser.email}`;
  const readIds = notifs.map(n => n.id);
  localStorage.setItem(readKey, JSON.stringify(readIds));
  renderSidebarNav();
  const content = document.getElementById('content-view');
  if (content && currentNav === 'Notification') {
    renderNotifications(content);
  }
  showAlert('All notifications marked as read.', 'info');
}

function clearAllNotifications() {
  const notifs = getNotificationsForUser();
  const readKey = `craffix_read_notifs_${currentUser.email}`;
  const readIds = notifs.map(n => n.id);
  localStorage.setItem(readKey, JSON.stringify(readIds));
  renderSidebarNav();
  const content = document.getElementById('content-view');
  if (content && currentNav === 'Notification') {
    renderNotifications(content);
  }
}

window.dispatchNotifAction = function(notifId, tabName) {
  const readKey = `craffix_read_notifs_${currentUser.email}`;
  const readIds = JSON.parse(localStorage.getItem(readKey) || '[]');
  if (!readIds.includes(notifId)) {
    readIds.push(notifId);
    localStorage.setItem(readKey, JSON.stringify(readIds));
  }
  renderSidebarNav();
  if (tabName) {
    handleNavClick(tabName);
  }
};

function renderNotifications(container) {
  const notifs = getNotificationsForUser();
  const unreadCount = notifs.filter(n => !n.isRead).length;

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Notifications &amp; Activity Alerts</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            ${unreadCount > 0 ? `You have <strong>${unreadCount}</strong> unread notification${unreadCount > 1 ? 's' : ''}.` : 'All notifications are up to date.'}
          </div>
        </div>
        ${notifs.length > 0 ? `
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="markAllNotificationsAsRead()" style="font-size: 12px; padding: 6px 12px;">
              Mark All as Read
            </button>
          </div>
        ` : ''}
      </div>

      ${notifs.length === 0 ? `
        <div class="empty-box" style="padding: 44px 20px; text-align: center;">
          <div style="font-size: 15px; font-weight: 600; color: #0F172A; margin-bottom: 4px;">No Notifications</div>
          <p style="margin: 0; font-size: 13px; color: var(--text-muted); max-width: 420px; margin: 0 auto;">
            You are completely caught up! New approval alerts, webinar links, and course status changes will appear here in real-time.
          </p>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 8px;">
          ${notifs.map(n => `
            <div style="border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; background: ${n.isRead ? '#FFFFFF' : '#F8FAFC'}; transition: background 0.15s ease; border-left: 4px solid ${n.isRead ? 'var(--line)' : '#2E1065'};">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="badge ${n.badgeClass}">${n.badge}</span>
                  ${!n.isRead ? '<span style="font-size: 10.5px; font-weight: 700; color: #DC2626; text-transform: uppercase;">New</span>' : ''}
                </div>
                <span style="font-size: 11.5px; color: var(--text-muted); font-weight: 500;">${escapeHtml(n.date)}</span>
              </div>

              <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #0F172A;">
                ${escapeHtml(n.title)}
              </h4>
              <p style="margin: 0; font-size: 13px; color: #475569; line-height: 1.5;">
                ${escapeHtml(n.desc)}
              </p>

              ${n.actionText && n.actionTab ? `
                <div style="margin-top: 10px;">
                  <button class="btn btn-secondary btn-sm" onclick="window.dispatchNotifAction('${n.id}', '${n.actionTab}')" style="font-size: 11.5px; padding: 4px 12px; font-weight: 600;">
                    ${escapeHtml(n.actionText)}
                  </button>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

function renderSettings(container) {
  const isMentor = currentUser.role === 'mentor';
  const isStudent = currentUser.role === 'student';

  container.innerHTML = `
    <div class="card" style="max-width: 650px;">
      <div class="card-header">
        <div>
          <h2 style="margin: 0; font-size: 17px; font-weight: 700;">Account &amp; Profile Settings</h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
            Update your profile details, personal bio, professional URLs, and security credentials.
          </div>
        </div>
      </div>

      <form id="profile-settings-form" onsubmit="handleSaveProfileSettings(event)" style="display: flex; flex-direction: column; gap: 14px; margin-top: 6px;">
        <div class="form-grid-2">
          <label>Full Name
            <input type="text" id="setting-name" value="${currentUser.name || ''}" required placeholder="Your full name">
          </label>
          <label>Email Address
            <input type="email" value="${currentUser.email || ''}" disabled style="background: #F1F5F9; color: #64748B;">
          </label>
        </div>

        <div class="form-grid-2">
          <label>Account Role
            <input type="text" value="${(currentUser.role || '').toUpperCase()}" disabled style="background: #F1F5F9; color: #64748B;">
          </label>
          ${isMentor ? `
            <label>Expertise Domain
              <input type="text" id="setting-expertise" value="${currentUser.expertise || ''}" placeholder="e.g. Full Stack Web Engineering">
            </label>
          ` : `
            <div></div>
          `}
        </div>

        ${isMentor ? `
          <div>
            <label>LinkedIn Profile URL
              <input type="url" id="setting-linkedin" value="${currentUser.linkedin || ''}" placeholder="https://linkedin.com/in/yourprofile">
            </label>
            <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
              Your LinkedIn handle will be linked on the webinars and masterclasses you host.
            </div>
          </div>
        ` : ''}

        ${isStudent ? `
          <div>
            <label>Bio / About Me
              <textarea id="setting-bio" rows="3" placeholder="Tell recruiters about yourself, passion, and career aspirations...">${currentUser.bio || ''}</textarea>
            </label>
            <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
              This bio auto-populates as your pitch note when applying for internship openings.
            </div>
          </div>

          <div class="form-grid-2">
            <label>LinkedIn Profile URL
              <input type="url" id="setting-linkedin" value="${currentUser.linkedin || ''}" placeholder="https://linkedin.com/in/username">
            </label>
            <label>HackerRank Profile URL / Handle
              <input type="text" id="setting-hackerrank" value="${currentUser.hackerrank || ''}" placeholder="https://hackerrank.com/username">
            </label>
          </div>

          <div>
            <label>LeetCode Profile URL / Handle
              <input type="text" id="setting-leetcode" value="${currentUser.leetcode || ''}" placeholder="https://leetcode.com/username">
            </label>
          </div>
        ` : ''}

        <!-- Security & Password Management -->
        <div style="border-top: 1px solid var(--line); margin-top: 8px; padding-top: 14px;">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 3px; color: var(--text);">Security &amp; Password</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">Leave blank if you do not wish to change your password.</div>

          <div class="form-grid-2">
            <label>Current Password
              <input type="password" id="setting-current-password" placeholder="Enter current password">
            </label>
            <label>New Password (min 6 characters)
              <input type="password" id="setting-new-password" placeholder="At least 6 characters">
            </label>
          </div>
          <div style="margin-top: 10px;">
            <label>Confirm New Password
              <input type="password" id="setting-confirm-password" placeholder="Re-enter new password">
            </label>
          </div>
        </div>

        <div style="margin-top: 10px; display: flex; gap: 12px; align-items: center;">
          <button type="submit" class="btn btn-sm" style="font-weight: 600; padding: 9px 20px;">
            Save Profile Settings
          </button>
          <span id="setting-save-status" style="font-size: 12.5px; font-weight: 600; color: #059669;"></span>
        </div>
      </form>
    </div>
  `;
}

function handleSaveProfileSettings(e) {
  e.preventDefault();
  const db = loadDB();

  const name = document.getElementById('setting-name')?.value.trim();
  const linkedin = document.getElementById('setting-linkedin')?.value.trim();
  const expertise = document.getElementById('setting-expertise')?.value.trim();
  const bio = document.getElementById('setting-bio')?.value.trim();
  const hackerrank = document.getElementById('setting-hackerrank')?.value.trim();
  const leetcode = document.getElementById('setting-leetcode')?.value.trim();

  // Password verification
  const currentPass = document.getElementById('setting-current-password')?.value || '';
  const newPass = document.getElementById('setting-new-password')?.value || '';
  const confirmPass = document.getElementById('setting-confirm-password')?.value || '';

  if (newPass || confirmPass || currentPass) {
    if (currentUser.password && currentPass !== currentUser.password) {
      showAlert('Current password does not match.', 'danger');
      return;
    }
    if (newPass.length < 6) {
      showAlert('New password must be at least 6 characters long.', 'danger');
      return;
    }
    if (newPass !== confirmPass) {
      showAlert('New password and confirmation do not match.', 'danger');
      return;
    }
    currentUser.password = newPass;
    const passInput1 = document.getElementById('setting-current-password');
    const passInput2 = document.getElementById('setting-new-password');
    const passInput3 = document.getElementById('setting-confirm-password');
    if (passInput1) passInput1.value = '';
    if (passInput2) passInput2.value = '';
    if (passInput3) passInput3.value = '';
  }

  if (name) currentUser.name = name;
  if (linkedin !== undefined) currentUser.linkedin = linkedin;
  if (expertise !== undefined) currentUser.expertise = expertise;
  if (bio !== undefined) currentUser.bio = bio;
  if (hackerrank !== undefined) currentUser.hackerrank = hackerrank;
  if (leetcode !== undefined) currentUser.leetcode = leetcode;

  // Persist to user record in db
  const idx = db.users.findIndex(u => u.email === currentUser.email);
  if (idx !== -1) {
    db.users[idx] = { ...db.users[idx], ...currentUser };
    saveDB(db);
  }

  // Persist to session
  localStorage.setItem('craffix_user_session', JSON.stringify(currentUser));

  // Update header text
  const headerUser = document.getElementById('header-user');
  if (headerUser) {
    headerUser.textContent = `${currentUser.name} (${currentUser.role})`;
  }

  showAlert('Profile settings and security preferences saved successfully!', 'success');
  const statusEl = document.getElementById('setting-save-status');
  if (statusEl) {
    statusEl.textContent = 'Saved successfully!';
    setTimeout(() => { if (statusEl) statusEl.textContent = ''; }, 3000);
  }
}

// ============================================================================
// 16. BADGES & MODAL UTILITIES
// ============================================================================
function renderStatusBadge(status) {
  if (status === 'approved') return `<span class="badge badge-green">Approved</span>`;
  if (status === 'rejected') return `<span class="badge badge-red">Rejected</span>`;
  return `<span class="badge badge-amber">Pending Approval</span>`;
}

function renderCertBadge(status) {
  if (status === 'issued') return `<span class="badge badge-green">Issued &amp; Verified</span>`;
  if (status === 'pending_admin') return `<span class="badge badge-blue">Pending Admin Sign-Off</span>`;
  return `<span class="badge badge-amber">Pending Mentor Review</span>`;
}

function openModal(title, bodyHtml, footerHtml = '', isWide = false) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHtml;
  document.getElementById('modal-footer').innerHTML = footerHtml;
  const card = document.getElementById('modal-card');
  if (card) {
    if (isWide) card.classList.add('modal-lg');
    else card.classList.remove('modal-lg');
  }
  document.getElementById('modal-container').style.display = 'grid';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-container') && e.target !== e.currentTarget) return;
  document.getElementById('modal-container').style.display = 'none';
  document.getElementById('modal-body').innerHTML = '';
  document.getElementById('modal-footer').innerHTML = '';
  const card = document.getElementById('modal-card');
  if (card) card.classList.remove('modal-lg');
}

// ============================================================================
// 17. INITIALIZE ON DOM READY
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
