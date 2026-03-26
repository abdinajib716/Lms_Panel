# LMS Mobile App - Student Use Case Analysis

## Overview

This document provides a comprehensive analysis of the existing Mentor LMS web application, focusing on **student-facing features** to prepare for mobile app development. It includes data models, API payloads, screen requirements, and UI/UX considerations.

---

## 1. Tech Stack (Current Web Application)

| Layer | Technology |
|-------|------------|
| **Backend** | Laravel 11 (PHP) |
| **Frontend** | React + TypeScript (Inertia.js) |
| **UI Components** | shadcn/ui + TailwindCSS |
| **Database** | MySQL/PostgreSQL |
| **Authentication** | Laravel Sanctum (API tokens ready) |
| **File Storage** | Local / S3 (configurable) |
| **Video Player** | Plyr.js |
| **Real-time** | Zoom SDK (Live Classes) |

---

## 2. Core Student Use Cases

### 2.1 Authentication Flow

#### Screens Required:
- **Login Screen**
- **Register Screen**
- **Forgot Password Screen**
- **Reset Password Screen**
- **Email Verification Screen**

#### Login Payload:
```json
{
  "email": "student@example.com",
  "password": "password123",
  "remember": true,
  "recaptcha": "optional_token",
  "recaptcha_status": false
}
```

#### Register Payload:
```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "password": "password123",
  "password_confirmation": "password123",
  "recaptcha": "optional_token",
  "recaptcha_status": false
}
```

#### User Response:
```json
{
  "id": 1,
  "name": "Student Name",
  "email": "student@example.com",
  "role": "student",
  "status": 1,
  "photo": "/path/to/photo.jpg",
  "social_links": [
    { "host": "facebook", "profile_link": "https://facebook.com/user" }
  ],
  "email_verified_at": "2025-01-01T00:00:00.000Z",
  "instructor_id": null
}
```

---

### 2.2 Student Dashboard

#### Tabs:
1. **My Courses** - List of enrolled courses with progress
2. **Wishlist** - Saved courses for later
3. **Profile** - Update personal information
4. **Settings** - Account settings (password, email)

#### Dashboard Data Payload:
```json
{
  "tab": "courses",
  "instructor": null,
  "enrollments": [
    {
      "id": 1,
      "enrollment_type": "paid",
      "entry_date": "2025-01-01",
      "expiry_date": null,
      "user_id": 1,
      "course_id": 1,
      "course": { /* Course Object */ },
      "watch_history": { /* Watch History Object */ },
      "completion": {
        "total_items": 20,
        "completed_items": 15,
        "completion": 75
      }
    }
  ],
  "wishlists": [
    {
      "id": 1,
      "user_id": 1,
      "course_id": 1,
      "course": { /* Course Object */ }
    }
  ],
  "hasVerifiedEmail": true
}
```

---

### 2.3 Course Browsing & Discovery

#### Screens Required:
- **Course Listing** (with filters/search)
- **Course Details Page**
- **Category Browse**

#### Course Object:
```json
{
  "id": 1,
  "title": "Complete Web Development Course",
  "slug": "complete-web-development-course",
  "short_description": "Learn web development from scratch",
  "description": "Full HTML content...",
  "course_type": "online",
  "status": "approved",
  "level": "beginner",
  "language": "en",
  "pricing_type": "paid",
  "price": 99.99,
  "discount": true,
  "discount_price": 49.99,
  "drip_content": false,
  "thumbnail": "/storage/courses/thumbnail.jpg",
  "banner": "/storage/courses/banner.jpg",
  "preview": "https://youtube.com/watch?v=xxx",
  "expiry_type": "lifetime",
  "expiry_duration": null,
  "reviews_count": 150,
  "average_rating": 4.5,
  "enrollments_count": 500,
  "instructor_id": 1,
  "course_category_id": 1,
  "instructor": {
    "id": 1,
    "user_id": 1,
    "user": {
      "id": 1,
      "name": "Instructor Name",
      "photo": "/path/to/photo.jpg"
    }
  },
  "course_category": {
    "id": 1,
    "title": "Web Development",
    "slug": "web-development",
    "icon": "code"
  },
  "sections": [ /* Course Sections */ ],
  "requirements": [ /* Requirements */ ],
  "outcomes": [ /* Learning Outcomes */ ],
  "faqs": [ /* FAQs */ ]
}
```

---

### 2.4 Course Player (Learning Experience)

This is the **core learning experience** - most important screen for mobile app.

#### Screens Required:
- **Video/Lesson Player**
- **Quiz Viewer**
- **Lesson List Sidebar**
- **Course Progress Tracker**
- **Discussion Forum**
- **Live Classes**

#### Course Player Data:
```json
{
  "type": "lesson",
  "course": { /* Course Object */ },
  "section": { /* Current Section */ },
  "watching": {
    "id": 1,
    "title": "Introduction to HTML",
    "lesson_type": "video",
    "lesson_src": "/storage/lessons/video.mp4",
    "lesson_provider": "local",
    "duration": "10:30",
    "is_free": 0,
    "description": "HTML content...",
    "resources": [ /* Lesson Resources */ ],
    "forums": [ /* Discussion Posts */ ]
  },
  "watchHistory": {
    "id": 1,
    "current_section_id": "1",
    "current_watching_id": "5",
    "current_watching_type": "lesson",
    "next_watching_id": "6",
    "next_watching_type": "lesson",
    "prev_watching_id": "4",
    "prev_watching_type": "lesson",
    "completed_watching": [
      { "id": "1", "type": "lesson" },
      { "id": "2", "type": "lesson" },
      { "id": "3", "type": "quiz" }
    ],
    "completion_date": null
  },
  "totalContent": 25,
  "reviews": { /* Paginated Reviews */ },
  "userReview": null,
  "totalReviews": {
    "total_reviews": 150,
    "rating_distribution": [
      { "stars": 5, "percentage": 60 },
      { "stars": 4, "percentage": 25 }
    ]
  }
}
```

#### Lesson Types:
| Type | Description |
|------|-------------|
| `video` | Local video file |
| `video_url` | External video URL |
| `embed` | YouTube/Vimeo embed |
| `document` | PDF document |
| `text` | Rich text content |
| `image` | Image content |

---

### 2.5 Quizzes

#### Quiz Object:
```json
{
  "id": 1,
  "title": "HTML Basics Quiz",
  "duration": "00:30:00",
  "hours": 0,
  "minutes": 30,
  "seconds": 0,
  "total_mark": 100,
  "pass_mark": 60,
  "retake": 3,
  "summary": "Test your HTML knowledge",
  "quiz_questions": [
    {
      "id": 1,
      "title": "What does HTML stand for?",
      "type": "multiple",
      "options": ["HyperText Markup Language", "High Tech ML", "..."],
      "sort": 1
    },
    {
      "id": 2,
      "title": "HTML is a programming language",
      "type": "boolean",
      "options": null,
      "sort": 2
    }
  ],
  "quiz_submissions": [
    {
      "id": 1,
      "attempts": 1,
      "correct_answers": 8,
      "incorrect_answers": 2,
      "total_marks": 80,
      "is_passed": true
    }
  ]
}
```

#### Quiz Submission Payload:
```json
{
  "submission_id": null,
  "section_quiz_id": 1,
  "user_id": 1,
  "answers": [
    {
      "question_id": "1",
      "answer": ["HyperText Markup Language"]
    },
    {
      "question_id": "2",
      "answer": ["False"]
    }
  ]
}
```

---

### 2.6 Assignments

#### Assignment Object:
```json
{
  "id": 1,
  "title": "Build a Portfolio Website",
  "total_mark": 100,
  "pass_mark": 50,
  "retake": 2,
  "summary": "Create a responsive portfolio...",
  "deadline": "2025-02-01T23:59:59",
  "late_submission": true,
  "late_total_mark": 80,
  "late_deadline": "2025-02-05T23:59:59",
  "course_id": 1,
  "submissions": [
    {
      "id": 1,
      "attachment_type": "url",
      "attachment_path": "https://github.com/user/portfolio",
      "comment": "My portfolio submission",
      "submitted_at": "2025-01-30T10:00:00",
      "marks_obtained": 85.00,
      "instructor_feedback": "Great work!",
      "status": "graded",
      "attempt_number": 1,
      "is_late": false
    }
  ]
}
```

#### Assignment Submission Payload:
```json
{
  "course_assignment_id": 1,
  "attachment_type": "url",
  "attachment_path": "https://github.com/user/portfolio",
  "comment": "My portfolio submission"
}
```

---

### 2.7 Live Classes (Zoom Integration)

#### Live Class Object:
```json
{
  "id": 1,
  "provider": "zoom",
  "class_topic": "Introduction to JavaScript",
  "class_date_and_time": "2025-02-01T10:00:00",
  "class_note": "Rich text notes...",
  "additional_info": {
    "meeting_id": "123456789",
    "password": "abc123"
  },
  "course_id": 1,
  "instructor_id": 1
}
```

---

### 2.8 Certificate & Marksheet

Students can download certificate after completing 100% of course.

#### Certificate Data:
```json
{
  "certificateTemplate": {
    "id": 1,
    "name": "Professional Certificate",
    "logo_path": "/storage/logos/cert-logo.png",
    "template_data": {
      "primaryColor": "#3730a3",
      "secondaryColor": "#4b5563",
      "backgroundColor": "#dbeafe",
      "borderColor": "#f59e0b",
      "titleText": "Certificate of Completion",
      "descriptionText": "This certificate is proudly presented to",
      "completionText": "for successfully completing the course",
      "footerText": "Authorized Certificate",
      "fontFamily": "serif"
    },
    "is_active": true
  },
  "studentMarks": {
    "assignment": {
      "total": 100,
      "obtained": 85,
      "percentage": 85
    },
    "quiz": {
      "total": 100,
      "obtained": 90,
      "percentage": 90
    },
    "overall": {
      "percentage": 87.5,
      "grade": "A"
    }
  }
}
```

---

### 2.9 Shopping Cart & Checkout

#### Cart Data:
```json
{
  "cart": [
    {
      "id": 1,
      "user_id": 1,
      "course_id": 1,
      "course": { /* Course Object */ }
    }
  ],
  "coupon": {
    "id": 1,
    "code": "SAVE20",
    "discount": 20,
    "expiry": "2025-12-31"
  },
  "subtotal": 149.97,
  "discountedPrice": 29.99,
  "taxAmount": 5.00,
  "totalPrice": 124.98,
  "checkoutProcess": false
}
```

---

### 2.10 Notifications

#### Notification Object:
```json
{
  "id": "uuid",
  "type": "App\\Notifications\\EnrollmentNotification",
  "read_at": null,
  "data": {
    "title": "Enrollment Successful",
    "body": "You have been enrolled in Complete Web Development Course",
    "url": "/student/courses/1/modules"
  },
  "created_at": "2025-01-01T10:00:00"
}
```

---

### 2.11 Course Reviews & Forums

#### Review Payload:
```json
{
  "rating": 5,
  "review": "Excellent course! Very well explained.",
  "user_id": 1,
  "course_id": 1
}
```

#### Forum Post Payload:
```json
{
  "title": "Question about CSS Flexbox",
  "description": "How do I center a div vertically?",
  "user_id": 1,
  "course_id": 1,
  "section_lesson_id": 5
}
```

---

### 2.12 Profile Update

#### Profile Update Payload:
```json
{
  "name": "Updated Name",
  "photo": "[File Upload]",
  "social_links": "[{\"host\":\"facebook\",\"profile_link\":\"https://fb.com/user\"}]"
}
```

---

### 2.13 Wishlist Management

#### Add to Wishlist:
```json
{
  "user_id": 1,
  "course_id": 5
}
```

---

## 3. Database Schema (Key Tables for Student Features)

| Table | Description |
|-------|-------------|
| `users` | Student accounts (role='student') |
| `courses` | All courses |
| `course_categories` | Course categories |
| `course_sections` | Course modules/sections |
| `section_lessons` | Individual lessons |
| `section_quizzes` | Quizzes |
| `quiz_questions` | Quiz questions |
| `quiz_submissions` | Student quiz attempts |
| `course_assignments` | Assignments |
| `assignment_submissions` | Student assignment submissions |
| `course_enrollments` | Student enrollments |
| `watch_histories` | Progress tracking |
| `course_wishlists` | Wishlisted courses |
| `course_carts` | Shopping cart |
| `course_reviews` | Course reviews |
| `course_forums` | Discussion forums |
| `course_forum_replies` | Forum replies |
| `course_live_classes` | Live class schedules |
| `notifications` | User notifications |
| `payment_histories` | Payment records |

---

## 4. API Endpoints (Student Routes)

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Login |
| POST | `/register` | Register |
| POST | `/logout` | Logout |
| POST | `/forgot-password` | Request password reset |
| POST | `/password-reset` | Reset password |
| GET | `/verify-email/{id}/{hash}` | Verify email |

### Student Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/{tab}` | Dashboard tabs (courses, wishlist, profile, settings) |
| GET | `/student/courses/{id}/{tab}` | Enrolled course details |
| POST | `/student/profile` | Update profile |

### Courses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/courses` | List courses |
| GET | `/course/{slug}/{id}` | Course details |

### Cart & Enrollment
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/course-cart` | View cart |
| POST | `/course-cart` | Add to cart |
| DELETE | `/course-cart/{id}` | Remove from cart |
| POST | `/enrollments` | Enroll in course |

### Wishlist
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/course-wishlists` | Add to wishlist |
| DELETE | `/course-wishlists/{id}` | Remove from wishlist |

### Course Player
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/player/init/watch-history` | Initialize player |
| GET | `/play-course/{type}/{watch_history}/{lesson_id}` | Play lesson/quiz |
| GET | `/play-course/finish/{watch_history}` | Mark course complete |

### Submissions
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/quiz-submissions` | Submit quiz |
| POST | `/assignment/submission` | Submit assignment |
| GET | `/assignment/submission/{id}` | Get submission |

### Forums & Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/course-forums` | Create forum post |
| POST | `/course-forum-replies` | Reply to forum |
| POST | `/course-reviews` | Create review |

### Notifications
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notifications` | List notifications |
| GET | `/notifications/{id}` | View notification |
| PUT | `/notifications/mark-as-read/all` | Mark all read |

### Live Classes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/live-class/start/{id}` | Join live class |
| GET | `/live-class/signature/{id}` | Get Zoom signature |

---

## 5. Mobile App Screen Hierarchy

```
📱 App
├── 🔐 Auth
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   └── Email Verification
│
├── 🏠 Home (Course Discovery)
│   ├── Featured Courses
│   ├── Categories
│   ├── Search
│   └── Course Details
│
├── 📚 My Learning
│   ├── Enrolled Courses (with progress)
│   ├── Course Player
│   │   ├── Video Player
│   │   ├── Document Viewer
│   │   ├── Quiz Viewer
│   │   ├── Lesson List
│   │   └── Discussion Forum
│   ├── Assignments
│   ├── Live Classes
│   └── Certificates
│
├── 🛒 Cart
│   ├── Cart Items
│   ├── Coupon Apply
│   └── Checkout
│
├── ❤️ Wishlist
│
├── 🔔 Notifications
│
└── 👤 Profile
    ├── Edit Profile
    ├── Settings
    ├── Password Change
    └── Logout
```

---

## 6. UI/UX Considerations for Mobile

### Navigation
- **Bottom Tab Bar**: Home, My Learning, Cart, Notifications, Profile
- **Course Player**: Full-screen with gesture controls



### Push Notifications
- New lesson available
- Assignment deadline reminder
- Instructor feedback received

### Video Player Features
- Picture-in-Picture mode
- Background audio playback
- Speed control (0.5x - 2x)
- Resume from last position
- Cast to TV support

### Responsive Considerations
- Course cards optimized for mobile grid
- Collapsible course sections
- Swipe gestures for navigation
- Pull-to-refresh

---

## 7. Next Steps

1. **API Development**: Create REST API endpoints using Laravel Sanctum
2. **UI/UX Design**: Design mobile screens in Figma using this data structure
3. **Technology Choice**: React Native or Flutter for cross-platform
4. **Feature Priority**:
   - Phase 1: Auth, Course Browsing, Video Player, Progress Tracking
   - Phase 2: Quizzes, Assignments, Forums
   - Phase 3: Live Classes, Certificates, Offline Mode

---

*Generated from codebase analysis on December 18, 2025*
