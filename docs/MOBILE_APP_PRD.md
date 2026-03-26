# LMS Mobile Application - Product Requirements Document

## Phase 1: UI/UX Kit with API Payload Mapping

**Version:** 1.0  
**Date:** December 2024  
**Status:** Phase 1 - UI/UX Kit Development

---

## 1. Executive Summary

This PRD defines the mobile application for the LMS platform, focusing on **feature specifications with exact API payload structures**. Phase 1 is a UI/UX Kit that establishes the foundation for mobile development by mapping each screen to its corresponding API data structure.

**Primary Goal:** Create a mobile app that mirrors the student web experience with consistent data payloads.

**API Base URL:** `https://lms.cajiibcreative.com/api/v1`

---

## 2. Screen Hierarchy & Navigation

```
├── Splash Screen
├── Onboarding (First Launch)
├── Auth Flow
│   ├── Login Screen
│   ├── Register Screen
│   ├── Forgot Password Screen
│   └── Reset Password Screen
├── Main Tab Navigation
│   ├── Home Tab
│   │   ├── Featured Courses
│   │   ├── Categories
│   │   └── Course List
│   ├── My Courses Tab
│   │   ├── Enrolled Courses
│   │   └── Course Progress
│   ├── Search Tab
│   │   └── Search Results
│   ├── Notifications Tab
│   │   └── Notification List
│   └── Profile Tab
│       ├── Profile View
│       ├── Edit Profile
│       ├── Settings
│       └── Wishlist
├── Course Detail Screen
├── Course Player Screen
│   ├── Video Lesson
│   ├── Quiz Screen
│   └── Assignment Screen
├── Cart Screen
├── Live Class Screen
└── Certificate Screen
```

---

## 3. Feature Specifications with Payload Mapping

---

### 3.1 Authentication Module

#### 3.1.1 Login Screen

**Screen Elements:**
- Email input field
- Password input field (with show/hide toggle)
- "Forgot Password?" link
- Login button
- "Sign in with Google" button
- "Don't have an account? Register" link

**API Endpoint:** `POST /auth/login`

**Request Payload:**
```json
{
  "email": "student@example.com",
  "password": "Password123!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "1|abc123xyz...",
    "token_type": "Bearer",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "student@example.com",
      "role": "student",
      "status": "active",
      "photo": "https://lms.cajiibcreative.com/storage/users/photo.jpg",
      "social_links": {
        "facebook": "https://facebook.com/johndoe",
        "twitter": null
      },
      "email_verified_at": "2024-01-15T10:30:00.000000Z",
      "created_at": "2024-01-01T00:00:00.000000Z"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

**UI States:**
- Default state
- Loading state (button spinner)
- Error state (show error message)
- Success state (navigate to Home)

---

#### 3.1.2 Register Screen

**Screen Elements:**
- Full name input field
- Email input field
- Password input field
- Confirm password input field
- Terms & conditions checkbox
- Register button
- "Sign up with Google" button
- "Already have an account? Login" link

**API Endpoint:** `POST /auth/register`

**Request Payload:**
```json
{
  "name": "John Doe",
  "email": "student@example.com",
  "password": "Password123!",
  "password_confirmation": "Password123!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "token": "2|def456abc...",
    "token_type": "Bearer",
    "user": {
      "id": 2,
      "name": "John Doe",
      "email": "student@example.com",
      "role": "student",
      "status": "active",
      "photo": null,
      "social_links": null,
      "email_verified_at": null,
      "created_at": "2024-12-18T08:00:00.000000Z"
    }
  }
}
```

**Validation Error Response (422):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email has already been taken."],
    "password": ["The password must be at least 8 characters."]
  }
}
```

---

#### 3.1.3 Google Sign-In

**API Endpoint:** `POST /auth/google`

**Request Payload:**
```json
{
  "google_id": "117234567890123456789",
  "email": "student@gmail.com",
  "name": "John Doe",
  "photo": "https://lh3.googleusercontent.com/a/photo.jpg"
}
```

**Response:** Same as Login success response

---

#### 3.1.4 Forgot Password Screen

**Screen Elements:**
- Email input field
- "Send Reset Link" button
- "Back to Login" link

**API Endpoint:** `POST /auth/forgot-password`

**Request Payload:**
```json
{
  "email": "student@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password reset link sent to your email"
}
```

---

#### 3.1.5 Reset Password Screen

**Screen Elements:**
- New password input field
- Confirm new password input field
- "Reset Password" button

**API Endpoint:** `POST /auth/reset-password`

**Request Payload:**
```json
{
  "token": "reset_token_from_email_link",
  "email": "student@example.com",
  "password": "NewPassword123!",
  "password_confirmation": "NewPassword123!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

---

### 3.2 Home Module

#### 3.2.1 Home Screen

**Screen Elements:**
- Header with user avatar and notification bell (with badge)
- Search bar
- Featured courses horizontal carousel
- Categories horizontal scroll
- Recent/Popular courses grid

**API Endpoints Required:**
1. `GET /courses/featured?limit=8`
2. `GET /courses/categories`
3. `GET /courses?per_page=12`
4. `GET /notifications/unread-count`

---

#### 3.2.2 Featured Courses Carousel

**API Endpoint:** `GET /courses/featured?limit=8`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": 1,
        "title": "Complete Web Development Bootcamp",
        "slug": "complete-web-development-bootcamp",
        "short_description": "Learn HTML, CSS, JavaScript, React and Node.js",
        "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb1.jpg",
        "banner_image": "https://lms.cajiibcreative.com/storage/courses/banner1.jpg",
        "preview_video": "https://youtube.com/watch?v=xyz",
        "pricing_type": "paid",
        "regular_price": 99.99,
        "sale_price": 49.99,
        "course_level": "beginner",
        "total_lessons": 150,
        "total_duration": "45:30:00",
        "average_rating": 4.8,
        "total_reviews": 1250,
        "total_enrollments": 5420,
        "instructor": {
          "id": 5,
          "name": "Sarah Johnson",
          "photo": "https://lms.cajiibcreative.com/storage/users/instructor1.jpg",
          "bio": "Senior Web Developer with 10+ years experience"
        },
        "category": {
          "id": 1,
          "name": "Web Development",
          "icon": "code"
        }
      }
    ]
  }
}
```

**UI Card Elements:**
- Thumbnail image (16:9 ratio)
- Course title (max 2 lines, truncate)
- Instructor name
- Rating stars + count
- Price (show sale price, strike original if on sale)
- "FREE" badge if pricing_type is "free"

---

#### 3.2.3 Categories Section

**API Endpoint:** `GET /courses/categories`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": 1,
        "name": "Web Development",
        "slug": "web-development",
        "icon": "code",
        "courses_count": 45
      },
      {
        "id": 2,
        "name": "Mobile Development",
        "slug": "mobile-development",
        "icon": "smartphone",
        "courses_count": 28
      },
      {
        "id": 3,
        "name": "Data Science",
        "slug": "data-science",
        "icon": "bar-chart",
        "courses_count": 32
      },
      {
        "id": 4,
        "name": "Design",
        "slug": "design",
        "icon": "palette",
        "courses_count": 19
      },
      {
        "id": 5,
        "name": "Business",
        "slug": "business",
        "icon": "briefcase",
        "courses_count": 24
      }
    ]
  }
}
```

**UI Elements:**
- Category icon (use icon name to map to local assets)
- Category name
- Course count badge
- Horizontal scrollable list

---

#### 3.2.4 Course List (Grid)

**API Endpoint:** `GET /courses?per_page=12&page=1`

**Query Parameters:**
- `per_page`: Number of items (default: 12)
- `page`: Page number
- `category_id`: Filter by category
- `level`: Filter by level (beginner, intermediate, advanced)
- `pricing_type`: Filter by pricing (free, paid)
- `sort`: Sort order (latest, popular, price_low, price_high)

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": 2,
        "title": "React Native Masterclass",
        "slug": "react-native-masterclass",
        "short_description": "Build cross-platform mobile apps",
        "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb2.jpg",
        "pricing_type": "paid",
        "regular_price": 79.99,
        "sale_price": null,
        "course_level": "intermediate",
        "total_lessons": 85,
        "total_duration": "22:15:00",
        "average_rating": 4.6,
        "total_reviews": 890,
        "total_enrollments": 3200,
        "instructor": {
          "id": 6,
          "name": "Mike Chen",
          "photo": "https://lms.cajiibcreative.com/storage/users/instructor2.jpg"
        },
        "category": {
          "id": 2,
          "name": "Mobile Development"
        }
      }
    ],
    "pagination": {
      "current_page": 1,
      "last_page": 5,
      "per_page": 12,
      "total": 58
    }
  }
}
```

---

### 3.3 Search Module

#### 3.3.1 Search Screen

**Screen Elements:**
- Search input with auto-focus
- Recent searches (local storage)
- Search results list
- Filter button (opens filter sheet)
- Sort dropdown

**API Endpoint:** `GET /courses/search?q={query}`

**Request:**
```
GET /courses/search?q=javascript&per_page=20&page=1
```

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "query": "javascript",
    "courses": [
      {
        "id": 3,
        "title": "JavaScript: The Complete Guide",
        "slug": "javascript-complete-guide",
        "short_description": "Master JavaScript from basics to advanced",
        "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb3.jpg",
        "pricing_type": "paid",
        "regular_price": 89.99,
        "sale_price": 44.99,
        "course_level": "beginner",
        "total_lessons": 200,
        "total_duration": "52:00:00",
        "average_rating": 4.9,
        "total_reviews": 2100,
        "total_enrollments": 8500,
        "instructor": {
          "id": 7,
          "name": "Emily White",
          "photo": null
        }
      }
    ],
    "pagination": {
      "current_page": 1,
      "last_page": 3,
      "per_page": 20,
      "total": 45
    }
  }
}
```

**UI States:**
- Empty state (initial)
- Loading state
- Results state
- No results state (show "No courses found for '{query}'")

---

### 3.4 Course Detail Module

#### 3.4.1 Course Detail Screen

**Screen Elements:**
- Hero section (banner image / preview video)
- Course title
- Instructor info (avatar, name, tap to view profile)
- Rating & reviews count
- Price section with "Add to Cart" / "Enroll Now" / "Continue Learning" button
- Tabs: Overview | Curriculum | Reviews
- Sticky bottom action bar

**API Endpoint:** `GET /courses/{id}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "course": {
      "id": 1,
      "title": "Complete Web Development Bootcamp",
      "slug": "complete-web-development-bootcamp",
      "short_description": "Learn HTML, CSS, JavaScript, React and Node.js",
      "description": "<p>Full HTML description of the course...</p>",
      "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb1.jpg",
      "banner_image": "https://lms.cajiibcreative.com/storage/courses/banner1.jpg",
      "preview_video": "https://youtube.com/watch?v=xyz",
      "pricing_type": "paid",
      "regular_price": 99.99,
      "sale_price": 49.99,
      "course_level": "beginner",
      "course_language": "English",
      "total_lessons": 150,
      "total_quizzes": 15,
      "total_duration": "45:30:00",
      "average_rating": 4.8,
      "total_reviews": 1250,
      "total_enrollments": 5420,
      "instructor": {
        "id": 5,
        "name": "Sarah Johnson",
        "photo": "https://lms.cajiibcreative.com/storage/users/instructor1.jpg",
        "bio": "Senior Web Developer with 10+ years experience"
      },
      "category": {
        "id": 1,
        "name": "Web Development",
        "slug": "web-development",
        "icon": "code"
      },
      "requirements": [
        {"id": 1, "requirement": "Basic computer skills"},
        {"id": 2, "requirement": "No prior programming experience needed"},
        {"id": 3, "requirement": "A computer with internet access"}
      ],
      "outcomes": [
        {"id": 1, "outcome": "Build 25+ real-world projects"},
        {"id": 2, "outcome": "Master HTML, CSS, JavaScript"},
        {"id": 3, "outcome": "Learn React and Node.js"},
        {"id": 4, "outcome": "Deploy applications to production"}
      ],
      "faqs": [
        {
          "id": 1,
          "question": "Is this course suitable for beginners?",
          "answer": "Yes, this course starts from the very basics."
        },
        {
          "id": 2,
          "question": "How long do I have access to the course?",
          "answer": "You have lifetime access once enrolled."
        }
      ],
      "created_at": "2024-01-01T00:00:00.000000Z",
      "updated_at": "2024-12-15T10:00:00.000000Z"
    },
    "is_enrolled": false,
    "is_in_cart": false,
    "is_wishlisted": true
  }
}
```

---

#### 3.4.2 Course Curriculum Tab

**API Endpoint:** `GET /courses/{id}/curriculum`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "course_id": 1,
    "sections": [
      {
        "id": 1,
        "title": "Introduction to Web Development",
        "order": 1,
        "lessons": [
          {
            "id": 1,
            "title": "Welcome to the Course",
            "lesson_type": "video",
            "duration": "05:30",
            "is_free": true,
            "order": 1
          },
          {
            "id": 2,
            "title": "Setting Up Your Development Environment",
            "lesson_type": "video",
            "duration": "15:45",
            "is_free": true,
            "order": 2
          },
          {
            "id": 3,
            "title": "How the Internet Works",
            "lesson_type": "video",
            "duration": "12:20",
            "is_free": false,
            "order": 3
          }
        ],
        "quizzes": [
          {
            "id": 1,
            "title": "Section 1 Quiz",
            "total_questions": 10,
            "time_limit": 15,
            "pass_mark": 70,
            "order": 4
          }
        ]
      },
      {
        "id": 2,
        "title": "HTML Fundamentals",
        "order": 2,
        "lessons": [
          {
            "id": 4,
            "title": "HTML Document Structure",
            "lesson_type": "video",
            "duration": "18:00",
            "is_free": false,
            "order": 1
          },
          {
            "id": 5,
            "title": "HTML Tags and Elements",
            "lesson_type": "video",
            "duration": "22:15",
            "is_free": false,
            "order": 2
          }
        ],
        "quizzes": []
      }
    ],
    "total_sections": 12,
    "total_lessons": 150,
    "total_quizzes": 15,
    "total_duration": "45:30:00"
  }
}
```

**UI Elements:**
- Expandable/collapsible sections
- Lesson row: icon (video/text/file), title, duration, lock icon if not free
- Quiz row: quiz icon, title, questions count, time limit
- "Preview" button for free lessons

---

#### 3.4.3 Course Reviews Tab

**API Endpoint:** `GET /courses/{id}/reviews?per_page=10`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "course_id": 1,
    "rating_stats": {
      "average": 4.8,
      "total": 1250,
      "distribution": {
        "5": 980,
        "4": 200,
        "3": 50,
        "2": 15,
        "1": 5
      }
    },
    "reviews": [
      {
        "id": 1,
        "rating": 5,
        "review": "Excellent course! The instructor explains everything clearly.",
        "user": {
          "id": 10,
          "name": "Alice Smith",
          "photo": "https://lms.cajiibcreative.com/storage/users/user10.jpg"
        },
        "created_at": "2024-12-10T14:30:00.000000Z"
      },
      {
        "id": 2,
        "rating": 4,
        "review": "Great content, but could use more advanced topics.",
        "user": {
          "id": 11,
          "name": "Bob Wilson",
          "photo": null
        },
        "created_at": "2024-12-08T09:15:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "last_page": 125,
      "per_page": 10,
      "total": 1250
    }
  }
}
```

**UI Elements:**
- Rating summary card (average rating, star bars distribution)
- Review list with user avatar, name, rating, review text, date
- "Load More" button or infinite scroll

---

### 3.5 My Courses Module (Enrolled)

#### 3.5.1 My Courses Screen

**Screen Elements:**
- Tab filter: All | In Progress | Completed
- Enrolled courses list with progress
- Empty state if no enrollments

**API Endpoint:** `GET /student/enrollments`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "enrollments": [
      {
        "id": 1,
        "course": {
          "id": 1,
          "title": "Complete Web Development Bootcamp",
          "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb1.jpg",
          "instructor": {
            "name": "Sarah Johnson"
          }
        },
        "enrollment_type": "paid",
        "entry_date": "2024-11-01T00:00:00.000000Z",
        "expiry_date": null,
        "progress": 65,
        "completed_lessons": 98,
        "total_lessons": 150,
        "is_completed": false,
        "completion_date": null,
        "watch_history_id": 42
      },
      {
        "id": 2,
        "course": {
          "id": 3,
          "title": "JavaScript: The Complete Guide",
          "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb3.jpg",
          "instructor": {
            "name": "Emily White"
          }
        },
        "enrollment_type": "free",
        "entry_date": "2024-10-15T00:00:00.000000Z",
        "expiry_date": null,
        "progress": 100,
        "completed_lessons": 200,
        "total_lessons": 200,
        "is_completed": true,
        "completion_date": "2024-12-01T10:30:00.000000Z",
        "watch_history_id": 38
      }
    ]
  }
}
```

**UI Card Elements:**
- Course thumbnail
- Course title
- Instructor name
- Progress bar with percentage
- "Continue" button
- "Completed" badge if 100%
- "View Certificate" button if completed

---

#### 3.5.2 Enrollment Detail Screen

**API Endpoint:** `GET /student/enrollments/{id}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "enrollment": {
      "id": 1,
      "course_id": 1,
      "enrollment_type": "paid",
      "entry_date": "2024-11-01T00:00:00.000000Z",
      "expiry_date": null
    },
    "course": {
      "id": 1,
      "title": "Complete Web Development Bootcamp",
      "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb1.jpg",
      "total_lessons": 150,
      "total_duration": "45:30:00"
    },
    "progress": {
      "completed_lessons": 98,
      "total_lessons": 150,
      "percentage": 65,
      "is_completed": false
    },
    "watch_history_id": 42,
    "current_content": {
      "type": "lesson",
      "id": 99,
      "title": "React Hooks Introduction"
    },
    "modules": [
      {
        "id": 1,
        "title": "Introduction",
        "completed_items": 4,
        "total_items": 4,
        "is_completed": true
      },
      {
        "id": 2,
        "title": "HTML Fundamentals",
        "completed_items": 10,
        "total_items": 10,
        "is_completed": true
      },
      {
        "id": 3,
        "title": "CSS Styling",
        "completed_items": 8,
        "total_items": 15,
        "is_completed": false
      }
    ],
    "live_classes": [
      {
        "id": 1,
        "title": "Q&A Session - Week 5",
        "start_time": "2024-12-20T14:00:00.000000Z",
        "duration": 60,
        "status": "upcoming"
      }
    ],
    "assignments": [
      {
        "id": 1,
        "title": "Build a Portfolio Website",
        "deadline": "2024-12-25T23:59:59.000000Z",
        "total_marks": 100,
        "submission_status": "pending"
      }
    ]
  }
}
```

---

### 3.6 Course Player Module

#### 3.6.1 Initialize Player

**API Endpoint:** `POST /player/init/{courseId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "watch_history_id": 42,
    "current_watching": {
      "type": "lesson",
      "id": 99
    },
    "completed_watching": [
      {"type": "lesson", "id": 1},
      {"type": "lesson", "id": 2},
      {"type": "quiz", "id": 1},
      {"type": "lesson", "id": 3}
    ],
    "course": {
      "id": 1,
      "title": "Complete Web Development Bootcamp"
    }
  }
}
```

---

#### 3.6.2 Lesson Player Screen

**Screen Elements:**
- Video player (supports YouTube, Vimeo, direct URLs)
- Lesson title
- "Mark as Complete" button
- Lesson description
- Resources download list
- Discussion/Forum section
- Previous/Next navigation

**API Endpoint:** `GET /player/lesson/{watchHistoryId}/{lessonId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "lesson": {
      "id": 99,
      "title": "React Hooks Introduction",
      "lesson_type": "video",
      "lesson_provider": "youtube",
      "lesson_src": "https://youtube.com/watch?v=dQw4w9WgXcQ",
      "duration": "25:30",
      "description": "<p>In this lesson, you will learn...</p>",
      "resources": [
        {
          "id": 1,
          "title": "Lesson Slides",
          "type": "pdf",
          "path": "https://lms.cajiibcreative.com/storage/resources/slides.pdf"
        },
        {
          "id": 2,
          "title": "Source Code",
          "type": "zip",
          "path": "https://lms.cajiibcreative.com/storage/resources/code.zip"
        }
      ]
    },
    "is_completed": false,
    "section": {
      "id": 8,
      "title": "React Fundamentals"
    },
    "navigation": {
      "previous": {
        "type": "lesson",
        "id": 98,
        "title": "Setting Up React Project"
      },
      "next": {
        "type": "lesson",
        "id": 100,
        "title": "useState Hook Deep Dive"
      }
    },
    "forums_count": 12
  }
}
```

---

#### 3.6.3 Mark Content Complete

**API Endpoint:** `POST /player/complete/{watchHistoryId}`

**Request Payload:**
```json
{
  "content_id": 99,
  "content_type": "lesson"
}
```

**Response Payload:**
```json
{
  "success": true,
  "message": "Lesson marked as completed",
  "data": {
    "progress": {
      "completed": 99,
      "total": 150,
      "percentage": 66
    },
    "next_content": {
      "type": "lesson",
      "id": 100,
      "title": "useState Hook Deep Dive"
    }
  }
}
```

---

### 3.7 Quiz Module

#### 3.7.1 Quiz Screen

**Screen Elements:**
- Quiz title and instructions
- Timer (if time_limit set)
- Question counter (1 of 10)
- Question text
- Answer options (radio for single, checkbox for multiple)
- Previous/Next buttons
- Submit button

**API Endpoint:** `GET /player/quiz/{watchHistoryId}/{quizId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "quiz": {
      "id": 5,
      "title": "React Hooks Quiz",
      "instruction": "Answer all questions. You need 70% to pass.",
      "time_limit": 20,
      "pass_mark": 70,
      "total_marks": 100,
      "questions": [
        {
          "id": 1,
          "question": "What hook is used to manage state in functional components?",
          "question_type": "single",
          "marks": 10,
          "options": ["useState", "useEffect", "useContext", "useReducer"]
        },
        {
          "id": 2,
          "question": "Which of the following are valid React hooks?",
          "question_type": "multiple",
          "marks": 10,
          "options": ["useState", "useComponent", "useEffect", "useMemo"]
        },
        {
          "id": 3,
          "question": "useEffect runs after every render by default.",
          "question_type": "true_false",
          "marks": 10,
          "options": ["True", "False"]
        }
      ]
    },
    "previous_submission": null,
    "attempts_remaining": 3
  }
}
```

---

#### 3.7.2 Submit Quiz

**API Endpoint:** `POST /quizzes/submit`

**Request Payload:**
```json
{
  "section_quiz_id": 5,
  "answers": [
    {"question_id": 1, "answer": ["useState"]},
    {"question_id": 2, "answer": ["useState", "useEffect", "useMemo"]},
    {"question_id": 3, "answer": ["True"]}
  ]
}
```

**Response Payload:**
```json
{
  "success": true,
  "message": "Quiz submitted successfully",
  "data": {
    "submission_id": 123,
    "score": 80,
    "total_marks": 100,
    "percentage": 80,
    "pass_mark": 70,
    "passed": true,
    "correct_answers": 8,
    "wrong_answers": 2,
    "total_questions": 10
  }
}
```

**UI States:**
- Quiz taking mode
- Submission loading
- Results screen (show score, pass/fail)

---

### 3.8 Assignment Module

#### 3.8.1 Assignment List

**API Endpoint:** `GET /assignments/course/{courseId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "course_id": 1,
    "assignments": [
      {
        "id": 1,
        "title": "Build a Portfolio Website",
        "description": "Create a responsive portfolio...",
        "deadline": "2024-12-25T23:59:59.000000Z",
        "total_marks": 100,
        "submission_status": "pending",
        "my_submission": null
      },
      {
        "id": 2,
        "title": "JavaScript Calculator",
        "description": "Build a functional calculator...",
        "deadline": "2024-12-20T23:59:59.000000Z",
        "total_marks": 50,
        "submission_status": "submitted",
        "my_submission": {
          "id": 45,
          "marks": 42,
          "status": "graded",
          "feedback": "Great work! Minor improvements needed."
        }
      }
    ]
  }
}
```

---

#### 3.8.2 Assignment Detail & Submit

**API Endpoint:** `GET /assignments/{id}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "assignment": {
      "id": 1,
      "title": "Build a Portfolio Website",
      "description": "<p>Create a responsive portfolio website...</p>",
      "deadline": "2024-12-25T23:59:59.000000Z",
      "total_marks": 100,
      "max_submissions": 3,
      "attachment": "https://lms.cajiibcreative.com/storage/assignments/brief.pdf"
    },
    "submissions": [],
    "submissions_remaining": 3,
    "is_deadline_passed": false
  }
}
```

**Submit Assignment:**

**API Endpoint:** `POST /assignments/submit`

**Request (URL submission):**
```json
{
  "course_assignment_id": 1,
  "attachment_type": "url",
  "attachment_path": "https://github.com/student/portfolio",
  "comment": "Here is my portfolio website repository"
}
```

**Request (File submission):**
```
Content-Type: multipart/form-data

course_assignment_id: 1
attachment_type: file
attachment_file: [FILE]
comment: My submission
```

**Response:**
```json
{
  "success": true,
  "message": "Assignment submitted successfully",
  "data": {
    "submission": {
      "id": 50,
      "status": "pending",
      "submitted_at": "2024-12-18T09:00:00.000000Z"
    },
    "submissions_remaining": 2
  }
}
```

---

### 3.9 Cart & Checkout Module

#### 3.9.1 Cart Screen

**Screen Elements:**
- Cart items list
- Remove item button
- Coupon code input
- Price summary (subtotal, discount, total)
- "Proceed to Checkout" button
- Empty cart state

**API Endpoint:** `GET /cart`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 15,
        "course": {
          "id": 2,
          "title": "React Native Masterclass",
          "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb2.jpg",
          "regular_price": 79.99,
          "sale_price": null,
          "instructor": {
            "name": "Mike Chen"
          }
        },
        "price": 79.99
      },
      {
        "id": 16,
        "course": {
          "id": 5,
          "title": "Node.js API Development",
          "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb5.jpg",
          "regular_price": 69.99,
          "sale_price": 34.99,
          "instructor": {
            "name": "David Brown"
          }
        },
        "price": 34.99
      }
    ],
    "subtotal": 114.98,
    "discount": 0,
    "coupon": null,
    "total": 114.98,
    "currency": "USD"
  }
}
```

---

#### 3.9.2 Cart Operations

**Add to Cart:**
```
POST /cart/add
{"course_id": 2}
```

**Remove from Cart:**
```
DELETE /cart/remove/{cartItemId}
```

**Apply Coupon:**
```
POST /cart/apply-coupon
{"code": "SAVE20"}
```

**Response with Coupon:**
```json
{
  "success": true,
  "message": "Coupon applied successfully",
  "data": {
    "items": [...],
    "subtotal": 114.98,
    "discount": 22.99,
    "coupon": {
      "code": "SAVE20",
      "discount_type": "percentage",
      "discount_value": 20
    },
    "total": 91.99,
    "currency": "USD"
  }
}
```

---

### 3.10 Wishlist Module

#### 3.10.1 Wishlist Screen

**API Endpoint:** `GET /wishlist`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "wishlists": [
      {
        "id": 8,
        "course": {
          "id": 4,
          "title": "Python for Data Science",
          "thumbnail": "https://lms.cajiibcreative.com/storage/courses/thumb4.jpg",
          "pricing_type": "paid",
          "regular_price": 89.99,
          "sale_price": 44.99,
          "average_rating": 4.7,
          "total_reviews": 560,
          "instructor": {
            "name": "Lisa Park"
          }
        },
        "created_at": "2024-12-10T08:00:00.000000Z"
      }
    ]
  }
}
```

**Operations:**
- `POST /wishlist/add` - `{"course_id": 4}`
- `DELETE /wishlist/remove/{wishlistId}`
- `GET /wishlist/check/{courseId}` - Returns `{"is_wishlisted": true}`

---

### 3.11 Notifications Module

#### 3.11.1 Notifications Screen

**Screen Elements:**
- Notification list with unread indicator
- Pull to refresh
- "Mark all as read" button
- Empty state

**API Endpoint:** `GET /notifications?per_page=20`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "type": "App\\Notifications\\CourseEnrolled",
        "title": "Welcome to Complete Web Development!",
        "message": "You have successfully enrolled in the course.",
        "data": {
          "course_id": 1,
          "action_url": "/student/courses/1"
        },
        "read_at": null,
        "created_at": "2024-12-18T08:30:00.000000Z"
      },
      {
        "id": "550e8400-e29b-41d4-a716-446655440001",
        "type": "App\\Notifications\\AssignmentGraded",
        "title": "Assignment Graded",
        "message": "Your assignment 'JavaScript Calculator' has been graded. Score: 42/50",
        "data": {
          "assignment_id": 2,
          "course_id": 1
        },
        "read_at": "2024-12-17T10:00:00.000000Z",
        "created_at": "2024-12-17T09:45:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "last_page": 3,
      "per_page": 20,
      "total": 45
    }
  }
}
```

**Unread Count (for badge):**
```
GET /notifications/unread-count
```
```json
{
  "success": true,
  "data": {
    "unread_count": 5
  }
}
```

---

### 3.12 Profile Module

#### 3.12.1 Profile Screen

**Screen Elements:**
- Profile photo (with edit overlay)
- User name
- Email
- Social links
- Statistics (enrolled courses, completed, certificates)
- Menu items: Edit Profile, Wishlist, Settings, Help, Logout

**API Endpoint:** `GET /student/profile`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "student@example.com",
      "photo": "https://lms.cajiibcreative.com/storage/users/photo.jpg",
      "social_links": {
        "facebook": "https://facebook.com/johndoe",
        "twitter": "https://twitter.com/johndoe",
        "linkedin": null
      },
      "email_verified_at": "2024-01-15T10:30:00.000000Z",
      "created_at": "2024-01-01T00:00:00.000000Z"
    },
    "stats": {
      "enrolled_courses": 5,
      "completed_courses": 2,
      "certificates": 2,
      "total_watch_time": "45:30:00"
    }
  }
}
```

---

#### 3.12.2 Edit Profile Screen

**API Endpoint:** `POST /student/profile`

**Request (multipart/form-data):**
```
name: John Doe Updated
photo: [FILE - optional]
social_links: {"facebook":"https://facebook.com/johndoe","twitter":"https://twitter.com/johndoe"}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe Updated",
      "email": "student@example.com",
      "photo": "https://lms.cajiibcreative.com/storage/users/photo_new.jpg",
      "social_links": {...}
    }
  }
}
```

---

#### 3.12.3 Change Password

**API Endpoint:** `POST /student/change-password`

**Request:**
```json
{
  "current_password": "OldPassword123!",
  "password": "NewPassword456!",
  "password_confirmation": "NewPassword456!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password changed successfully"
}
```

---

### 3.13 Live Classes Module

#### 3.13.1 Live Class List

**API Endpoint:** `GET /live-classes/course/{courseId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "course_id": 1,
    "live_classes": [
      {
        "id": 1,
        "title": "Q&A Session - React Hooks",
        "description": "Live Q&A session covering React Hooks topics",
        "start_time": "2024-12-20T14:00:00.000000Z",
        "duration": 60,
        "meeting_provider": "zoom",
        "status": "upcoming",
        "can_join": false
      },
      {
        "id": 2,
        "title": "Project Review Session",
        "description": "Live review of student projects",
        "start_time": "2024-12-18T10:00:00.000000Z",
        "duration": 90,
        "meeting_provider": "zoom",
        "status": "live",
        "can_join": true
      },
      {
        "id": 3,
        "title": "Introduction Session",
        "description": "Course introduction and overview",
        "start_time": "2024-12-10T14:00:00.000000Z",
        "duration": 45,
        "meeting_provider": "zoom",
        "status": "ended",
        "recording_url": "https://zoom.us/recording/xyz",
        "can_join": false
      }
    ]
  }
}
```

---

#### 3.13.2 Join Live Class

**API Endpoint:** `GET /live-classes/{id}/join`

**Response:**
```json
{
  "success": true,
  "data": {
    "meeting_id": "123456789",
    "meeting_password": "abc123",
    "join_url": "https://zoom.us/j/123456789?pwd=abc123",
    "provider": "zoom"
  }
}
```

---

### 3.14 Certificate Module

#### 3.14.1 Certificate Screen

**API Endpoint:** `GET /certificate/course/{courseId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "certificate": {
      "student_name": "John Doe",
      "course_title": "Complete Web Development Bootcamp",
      "completion_date": "2024-12-01T10:30:00.000000Z",
      "certificate_id": "CERT-2024-001234",
      "instructor_name": "Sarah Johnson",
      "course_duration": "45:30:00",
      "grade": "A",
      "marks_obtained": 92.5
    },
    "marksheet": {
      "assignments": [
        {"title": "Portfolio Website", "marks": 95, "total": 100},
        {"title": "JavaScript Calculator", "marks": 42, "total": 50}
      ],
      "quizzes": [
        {"title": "HTML Quiz", "marks": 90, "total": 100},
        {"title": "CSS Quiz", "marks": 85, "total": 100}
      ],
      "total_marks": 312,
      "total_possible": 350,
      "percentage": 89.14
    }
  }
}
```

**Download Certificate:**
```
GET /certificate/download/{courseId}
```
```json
{
  "success": true,
  "data": {
    "download_url": "https://lms.cajiibcreative.com/certificates/download/CERT-2024-001234.pdf"
  }
}
```

---

### 3.15 Forum/Discussion Module

#### 3.15.1 Lesson Forums

**API Endpoint:** `GET /forums/lesson/{lessonId}`

**Response Payload:**
```json
{
  "success": true,
  "data": {
    "lesson_id": 99,
    "forums": [
      {
        "id": 1,
        "title": "Question about useEffect dependency array",
        "description": "I'm confused about when to add dependencies...",
        "user": {
          "id": 10,
          "name": "Alice Smith",
          "photo": "https://lms.cajiibcreative.com/storage/users/user10.jpg"
        },
        "replies_count": 5,
        "created_at": "2024-12-15T10:00:00.000000Z"
      }
    ],
    "pagination": {...}
  }
}
```

---

#### 3.15.2 Create Forum Post

**API Endpoint:** `POST /forums`

**Request:**
```json
{
  "title": "How to handle cleanup in useEffect?",
  "description": "I want to understand when and how to use cleanup functions...",
  "course_id": 1,
  "section_lesson_id": 99
}
```

---

#### 3.15.3 Reply to Forum

**API Endpoint:** `POST /forums/{forumId}/reply`

**Request:**
```json
{
  "reply": "You should return a cleanup function from useEffect when..."
}
```

---

## 4. Enrollment Flow

### 4.1 Free Course Enrollment

**Screen Flow:**
1. Course Detail → "Enroll Now (Free)" button
2. Confirmation dialog
3. API call
4. Success → Navigate to Course Player

**API Endpoint:** `POST /enroll/free/{courseId}`

**Response:**
```json
{
  "success": true,
  "message": "Successfully enrolled in the course",
  "data": {
    "enrollment_id": 25,
    "course_id": 1,
    "watch_history_id": 50
  }
}
```

### 4.2 Check Enrollment Status

**API Endpoint:** `GET /enroll/check/{courseId}`

**Response:**
```json
{
  "success": true,
  "data": {
    "is_enrolled": true,
    "enrollment": {
      "id": 25,
      "entry_date": "2024-12-18T09:00:00.000000Z",
      "expiry_date": null
    },
    "watch_history_id": 50
  }
}
```

---

## 5. Error Handling

### Standard Error Response Format

```json
{
  "success": false,
  "message": "Human readable error message",
  "errors": {
    "field_name": ["Specific validation error"]
  }
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 429 | Too Many Requests (Rate Limited) |
| 500 | Server Error |

### Rate Limit Response (429)

```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "retry_after": 60
}
```

---

## 6. Local Storage Requirements

| Key | Purpose |
|-----|---------|
| `access_token` | Authentication token |
| `user` | Cached user object |
| `recent_searches` | Array of recent search queries |
| `video_quality` | User preferred video quality |
| `download_queue` | Offline download queue (Phase 2) |

---

## 7. Push Notifications (Deep Links)

| Notification Type | Deep Link |
|------------------|-----------|
| Course Enrolled | `/courses/{course_id}/player` |
| Assignment Graded | `/courses/{course_id}/assignments/{assignment_id}` |
| Quiz Results | `/courses/{course_id}/quizzes/{quiz_id}/results` |
| Live Class Starting | `/courses/{course_id}/live/{live_class_id}` |
| New Announcement | `/notifications` |

---

## 8. Phase 1 Deliverables Checklist

- [ ] All screens with placeholder content
- [ ] Navigation flow between screens
- [ ] API integration points documented
- [ ] Loading states for all API calls
- [ ] Error states for all API calls
- [ ] Empty states where applicable
- [ ] Pull-to-refresh on list screens
- [ ] Infinite scroll pagination
- [ ] Form validation feedback
- [ ] Toast/snackbar messages

---

## 9. API Authentication

All authenticated endpoints require:

```
Authorization: Bearer {access_token}
Accept: application/json
```

Token is obtained from Login/Register response and stored locally.

---

**Document Version:** 1.0  
**Last Updated:** December 2024
