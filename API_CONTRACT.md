# LMS Mobile API Contract

> **Base URL:** `https://lms.cajiibcreative.com/api/v1`
> **Auth:** Bearer Token (Laravel Sanctum)
> **Content-Type:** `application/json`
> **Last Updated:** 2025-02-08

---

## Table of Contents

- [Authentication](#1-authentication)
- [Student Dashboard](#2-student-dashboard)
- [Courses (Public)](#3-courses-public)
- [Course Player](#4-course-player)
- [Quizzes](#5-quizzes)
- [Assignments](#6-assignments)
- [Cart](#7-cart)
- [Wishlist](#8-wishlist)
- [Notifications](#9-notifications)
- [Reviews](#10-reviews)
- [Forums](#11-forums)
- [Live Classes](#12-live-classes)
- [Enrollment](#13-enrollment)
- [Certificate](#14-certificate)
- [WaafiPay Payment](#15-waafipay-payment)
- [Error Codes](#error-codes)
- [Middleware & Security](#middleware--security)

---

## Middleware & Security

| Layer | Details |
|-------|---------|
| **Rate Limiting** | `auth` (login/register), `public` (browsing), `api` (general), `sensitive` (payments/writes), `uploads` (file uploads) |
| **Authentication** | `auth:sanctum` — Bearer token in `Authorization` header |
| **Email Verification** | `apiVerified` — All protected routes except auth management require verified email. Returns `403` with `EMAIL_NOT_VERIFIED` error code if unverified. |
| **Phone Regex** | Somali numbers: `^(61|62|63|65|68|71|90)\d{7}$` |

### Standard Response Format

```json
{
  "success": true|false,
  "message": "Human-readable message",
  "data": { ... },
  "errors": { ... }
}
```

### Standard Pagination

```json
{
  "pagination": {
    "current_page": 1,
    "last_page": 5,
    "per_page": 12,
    "total": 60
  }
}
```

---

## 1. Authentication

### POST `/auth/register`

> **Auth:** None | **Rate Limit:** `auth`

Register a new student account. Sends verification email automatically.

**Request:**
```json
{
  "name": "Ahmed Mohamed",
  "email": "ahmed@example.com",
  "password": "securepass123",
  "password_confirmation": "securepass123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": 1,
      "name": "Ahmed Mohamed",
      "email": "ahmed@example.com",
      "role": "student",
      "status": 1,
      "photo": null,
      "social_links": null,
      "email_verified_at": null,
      "created_at": "2025-02-08T05:00:00Z"
    },
    "token": "1|abc123...",
    "token_type": "Bearer"
  }
}
```

---

### POST `/auth/login`

> **Auth:** None | **Rate Limit:** `auth`

**Request:**
```json
{
  "email": "ahmed@example.com",
  "password": "securepass123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { "...same as register..." },
    "token": "2|xyz789...",
    "token_type": "Bearer"
  }
}
```

**Error (401):**
```json
{ "success": false, "message": "Invalid credentials" }
```

**Error (403):**
```json
{ "success": false, "message": "Your account is not active" }
```

---

### POST `/auth/google`

> **Auth:** None | **Rate Limit:** `auth`

**Request:**
```json
{
  "google_id": "1234567890",
  "email": "ahmed@gmail.com",
  "name": "Ahmed Mohamed",
  "photo": "https://lh3.googleusercontent.com/..."
}
```

**Response (200):** Same as login response.

---

### POST `/auth/forgot-password`

> **Auth:** None | **Rate Limit:** `password-reset`

**Request:**
```json
{ "email": "ahmed@example.com" }
```

**Response (200):**
```json
{ "success": true, "message": "Password reset link sent to your email" }
```

---

### POST `/auth/reset-password`

> **Auth:** None | **Rate Limit:** `password-reset`

**Request:**
```json
{
  "token": "reset-token-from-email",
  "email": "ahmed@example.com",
  "password": "newpass123",
  "password_confirmation": "newpass123"
}
```

**Response (200):**
```json
{ "success": true, "message": "Password reset successfully" }
```

---

### POST `/auth/logout`

> **Auth:** Bearer Token | **Verified:** No

Revokes the current access token.

**Response (200):**
```json
{ "success": true, "message": "Logged out successfully" }
```

---

### GET `/auth/user`

> **Auth:** Bearer Token | **Verified:** No

Returns current authenticated user. Use this to check `email_verified_at`.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "Ahmed Mohamed",
      "email": "ahmed@example.com",
      "role": "student",
      "status": 1,
      "photo": null,
      "social_links": null,
      "email_verified_at": "2025-02-08T05:10:00Z",
      "created_at": "2025-02-08T05:00:00Z"
    }
  }
}
```

---

### POST `/auth/refresh`

> **Auth:** Bearer Token | **Verified:** No

Rotates the current token. Old token is revoked, new one returned.

**Response (200):**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "token": "3|newtoken...",
    "token_type": "Bearer"
  }
}
```

---

### POST `/auth/verify-email/resend`

> **Auth:** Bearer Token | **Verified:** No | **Rate Limit:** `password-reset`

Resend the email verification link.

**Response (200):**
```json
{ "success": true, "message": "Verification email sent" }
```

**Error (400):**
```json
{ "success": false, "message": "Email already verified" }
```

---

## 2. Student Dashboard

> All endpoints require **Bearer Token + Verified Email**

### GET `/student/dashboard`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "enrollments": [
      {
        "id": 1,
        "enrollment_type": "paid",
        "entry_date": "2025-02-08",
        "expiry_date": null,
        "course": {
          "id": 10,
          "title": "Laravel Mastery",
          "slug": "laravel-mastery",
          "thumbnail": "/storage/courses/thumb.jpg",
          "level": "intermediate",
          "instructor": {
            "id": 1,
            "name": "Instructor Name",
            "photo": "/storage/users/photo.jpg"
          }
        },
        "completion": {
          "percentage": 45,
          "completed": 9,
          "total": 20
        },
        "watch_history_id": 5
      }
    ],
    "cart_count": 2,
    "user": {
      "id": 1,
      "name": "Ahmed",
      "email": "ahmed@example.com",
      "photo": null,
      "email_verified": true
    }
  }
}
```

---

### GET `/student/enrollments`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "enrollments": [
      {
        "id": 1,
        "enrollment_type": "paid",
        "entry_date": "2025-02-08",
        "expiry_date": null,
        "course": { "...course basic..." },
        "completion": { "percentage": 45, "completed": 9, "total": 20 },
        "watch_history_id": 5,
        "is_completed": false
      }
    ]
  }
}
```

---

### GET `/student/enrollments/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "enrollment": { "id": 1, "enrollment_type": "paid", "entry_date": "...", "expiry_date": null },
    "course": { "...course detailed..." },
    "modules": [
      {
        "id": 1,
        "title": "Section 1",
        "sort": 1,
        "lessons": [
          { "id": 1, "title": "Intro", "lesson_type": "video", "duration": "10:00", "is_free": true, "is_completed": true }
        ],
        "quizzes": [
          { "id": 1, "title": "Quiz 1", "total_mark": 100, "pass_mark": 60, "is_completed": false }
        ]
      }
    ],
    "live_classes": [ { "id": 1, "class_topic": "...", "class_date_and_time": "...", "provider": "zoom" } ],
    "assignments": [ { "id": 1, "title": "...", "total_mark": 50, "deadline": "...", "submissions_count": 0 } ],
    "completion": { "percentage": 45, "completed": 9, "total": 20 },
    "watch_history_id": 5,
    "is_completed": false
  }
}
```

---

### GET `/student/profile`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "Ahmed",
      "email": "ahmed@example.com",
      "role": "student",
      "photo": null,
      "social_links": null,
      "email_verified_at": "2025-02-08T05:10:00Z",
      "created_at": "2025-02-08T05:00:00Z"
    }
  }
}
```

---

### POST `/student/profile`

> **Rate Limit:** `uploads`

**Request (multipart/form-data):**
```
name: "Ahmed Mohamed"
photo: [file] (optional, jpeg/png/jpg, max 1MB)
social_links: '{"twitter":"@ahmed"}' (optional, JSON string)
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": { "user": { "id": 1, "name": "Ahmed Mohamed", "email": "...", "photo": "/storage/users/photo.jpg", "social_links": {"twitter":"@ahmed"} } }
}
```

---

### POST `/student/change-password`

> **Rate Limit:** `sensitive`

**Request:**
```json
{
  "current_password": "oldpass",
  "password": "newpass123",
  "password_confirmation": "newpass123"
}
```

**Response (200):**
```json
{ "success": true, "message": "Password changed successfully" }
```

---

### POST `/student/change-email`

> **Rate Limit:** `sensitive`

**Request:**
```json
{
  "email": "newemail@example.com",
  "password": "currentpass"
}
```

**Response (200):**
```json
{ "success": true, "message": "Email changed successfully. Please verify your new email." }
```

---

## 3. Courses (Public)

> **Auth:** None | **Rate Limit:** `public`

### GET `/courses`

**Query Params:** `per_page` (default: 12)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": 1,
        "title": "Laravel Mastery",
        "slug": "laravel-mastery",
        "short_description": "...",
        "thumbnail": "/storage/courses/thumb.jpg",
        "level": "intermediate",
        "pricing_type": "paid",
        "price": 29.99,
        "discount": 1,
        "discount_price": 19.99,
        "enrollments_count": 150,
        "reviews_count": 45,
        "average_rating": 4.5,
        "instructor": { "id": 1, "name": "Instructor", "photo": "..." }
      }
    ],
    "pagination": { "current_page": 1, "last_page": 5, "per_page": 12, "total": 60 }
  }
}
```

---

### GET `/courses/featured`

**Query Params:** `limit` (default: 8)

**Response (200):** Same structure as `/courses` but without pagination — returns top courses by enrollment count.

---

### GET `/courses/categories`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "categories": [
      { "id": 1, "title": "Web Development", "slug": "web-development", "icon": "...", "courses_count": 25 }
    ]
  }
}
```

---

### GET `/courses/category/{id}`

**Query Params:** `per_page` (default: 12)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "category": { "id": 1, "title": "Web Development", "slug": "web-development" },
    "courses": [ "...same as /courses..." ],
    "pagination": { "..." }
  }
}
```

---

### GET `/courses/search`

**Query Params:** `q` (search query), `per_page` (default: 12)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "query": "laravel",
    "courses": [ "..." ],
    "pagination": { "..." }
  }
}
```

---

### GET `/courses/{id}`

Returns full course detail. If authenticated, includes enrollment status.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "course": {
      "id": 1,
      "title": "Laravel Mastery",
      "slug": "laravel-mastery",
      "short_description": "...",
      "description": "<p>Full HTML description</p>",
      "thumbnail": "...",
      "banner": "...",
      "preview": "...",
      "level": "intermediate",
      "language": "English",
      "pricing_type": "paid",
      "price": 29.99,
      "discount": 1,
      "discount_price": 19.99,
      "expiry_type": "lifetime",
      "expiry_duration": null,
      "enrollments_count": 150,
      "reviews_count": 45,
      "average_rating": 4.5,
      "instructor": { "id": 1, "name": "...", "photo": "...", "bio": "..." },
      "category": { "id": 1, "title": "...", "slug": "..." },
      "requirements": [ { "id": 1, "requirement": "Basic PHP knowledge" } ],
      "outcomes": [ { "id": 1, "outcome": "Build REST APIs" } ],
      "faqs": [ { "id": 1, "question": "...", "answer": "..." } ],
      "sections_count": 5,
      "lessons_count": 30,
      "quizzes_count": 5
    },
    "is_enrolled": false,
    "enrollment_id": null
  }
}
```

---

### GET `/courses/{id}/reviews`

**Query Params:** `per_page` (default: 10)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": 1,
        "rating": 5,
        "review": "Excellent course!",
        "created_at": "2025-02-08T...",
        "user": { "id": 2, "name": "Student", "photo": "..." }
      }
    ],
    "stats": { "...review distribution stats..." },
    "pagination": { "..." }
  }
}
```

---

### GET `/courses/{id}/curriculum`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "curriculum": [
      {
        "id": 1,
        "title": "Introduction",
        "sort": 1,
        "lessons": [
          { "id": 1, "title": "Welcome", "lesson_type": "video", "duration": "05:30", "is_free": true }
        ],
        "quizzes": [
          { "id": 1, "title": "Module Quiz", "total_mark": 100 }
        ]
      }
    ]
  }
}
```

---

## 4. Course Player

> All endpoints require **Bearer Token + Verified Email**

### POST `/player/init/{courseId}`

Initialize or resume watching a course. Must be enrolled.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "watch_history_id": 5,
    "current_watching": { "id": 3, "type": "lesson", "section_id": 1 },
    "completion": { "percentage": 45, "completed": 9, "total": 20 },
    "is_completed": false
  }
}
```

**Error (403):**
```json
{ "success": false, "message": "You are not enrolled in this course" }
```

---

### GET `/player/course/{courseId}`

Full course content for the player UI.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "course": { "id": 1, "title": "...", "thumbnail": "...", "instructor": { "..." } },
    "sections": [
      {
        "id": 1, "title": "...", "sort": 1,
        "lessons": [ { "id": 1, "title": "...", "lesson_type": "video", "duration": "10:00", "is_free": true, "is_completed": true, "resources_count": 2 } ],
        "quizzes": [ { "id": 1, "title": "...", "total_mark": 100, "pass_mark": 60, "questions_count": 10, "is_completed": false } ]
      }
    ],
    "watch_history": {
      "id": 5,
      "current_watching_id": 3, "current_watching_type": "lesson", "current_section_id": 1,
      "next_watching_id": 4, "next_watching_type": "lesson",
      "prev_watching_id": 2, "prev_watching_type": "lesson"
    },
    "completion": { "percentage": 45, "completed": 9, "total": 20 },
    "is_completed": false,
    "live_classes": [ { "..." } ]
  }
}
```

---

### GET `/player/lesson/{watchHistoryId}/{lessonId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "lesson": {
      "id": 3,
      "title": "Controllers",
      "lesson_type": "video",
      "lesson_provider": "youtube",
      "lesson_src": "https://youtube.com/...",
      "duration": "15:30",
      "description": "...",
      "is_free": false
    },
    "resources": [ { "id": 1, "title": "Cheat Sheet", "resource_type": "pdf", "resource_path": "/storage/..." } ],
    "forums": [ { "id": 1, "title": "...", "description": "...", "user": { "..." }, "replies": [ "..." ] } ],
    "navigation": { "prev_id": 2, "prev_type": "lesson", "next_id": 4, "next_type": "quiz" }
  }
}
```

---

### GET `/player/quiz/{watchHistoryId}/{quizId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "quiz": { "id": 1, "title": "...", "summary": "...", "hours": 0, "minutes": 30, "seconds": 0, "total_mark": 100, "pass_mark": 60, "retake": 3 },
    "questions": [
      { "id": 1, "title": "What is MVC?", "type": "multiple_choice", "options": ["Model-View-Controller", "..."], "sort": 1 }
    ],
    "submission": { "id": 1, "attempts": 1, "correct_answers": 8, "incorrect_answers": 2, "total_marks": 80, "is_passed": true } | null,
    "can_attempt": true,
    "navigation": { "prev_id": 3, "prev_type": "lesson", "next_id": 5, "next_type": "lesson" }
  }
}
```

---

### POST `/player/progress/{watchHistoryId}`

Update current watching position.

**Request:**
```json
{ "content_id": 4, "content_type": "lesson" }
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "completion": { "percentage": 50, "completed": 10, "total": 20 },
    "watch_history": { "current_watching_id": 4, "current_watching_type": "lesson", "next_watching_id": 5, "next_watching_type": "quiz" }
  }
}
```

---

### POST `/player/complete/{watchHistoryId}`

Mark a lesson or quiz as completed.

**Request:**
```json
{ "content_id": 4, "content_type": "lesson" }
```

**Response (200):**
```json
{ "success": true, "message": "Content marked as completed", "data": { "completion": { "percentage": 55, "completed": 11, "total": 20 } } }
```

---

### POST `/player/finish/{watchHistoryId}`

Complete the entire course. Only works when all content is completed.

**Response (200):**
```json
{ "success": true, "message": "Course completed successfully", "data": { "completion_date": "2025-02-08T10:00:00Z" } }
```

**Error (400):**
```json
{ "success": false, "message": "Course is not fully completed yet" }
```

---

## 5. Quizzes

> All endpoints require **Bearer Token + Verified Email**

### GET `/quizzes/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "quiz": { "id": 1, "title": "...", "total_mark": 100, "pass_mark": 60, "retake": 3, "hours": 0, "minutes": 30, "seconds": 0, "summary": "..." },
    "questions": [ { "id": 1, "title": "...", "type": "multiple_choice", "options": ["A", "B", "C", "D"], "sort": 1 } ],
    "submission": null,
    "can_attempt": true
  }
}
```

---

### POST `/quizzes/submit`

> **Rate Limit:** `sensitive`

**Request:**
```json
{
  "submission_id": null,
  "section_quiz_id": 1,
  "answers": [
    { "question_id": 1, "answer": ["Model-View-Controller"] },
    { "question_id": 2, "answer": ["True"] }
  ]
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Quiz submitted successfully",
  "data": {
    "submission": { "id": 1, "attempts": 1, "correct_answers": 8, "incorrect_answers": 2, "total_marks": 80, "is_passed": true }
  }
}
```

---

### GET `/quizzes/submission/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "submission": {
      "id": 1, "attempts": 1, "correct_answers": 8, "incorrect_answers": 2, "total_marks": 80, "is_passed": true,
      "quiz": { "id": 1, "title": "...", "total_mark": 100, "pass_mark": 60 }
    }
  }
}
```

---

## 6. Assignments

> All endpoints require **Bearer Token + Verified Email**

### GET `/assignments/course/{courseId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "assignments": [
      {
        "id": 1, "title": "Build a REST API", "total_mark": 50, "pass_mark": 30, "retake": 2, "deadline": "2025-03-01T...", "late_submission": true, "late_deadline": "2025-03-08T...",
        "submissions_count": 1,
        "latest_submission": { "id": 1, "status": "graded", "marks_obtained": 45, "submitted_at": "...", "is_late": false }
      }
    ]
  }
}
```

---

### GET `/assignments/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "assignment": { "id": 1, "title": "...", "summary": "...", "total_mark": 50, "pass_mark": 30, "retake": 2, "deadline": "...", "late_submission": true, "late_total_mark": 40, "late_deadline": "..." },
    "submissions": [
      { "id": 1, "attachment_type": "url", "attachment_path": "https://github.com/...", "comment": "...", "submitted_at": "...", "marks_obtained": 45, "instructor_feedback": "Great work!", "status": "graded", "attempt_number": 1, "is_late": false }
    ],
    "can_submit": true
  }
}
```

---

### POST `/assignments/submit`

> **Rate Limit:** `uploads`

**Request (multipart/form-data):**
```
course_assignment_id: 1
attachment_type: "file" | "url"
attachment_path: "https://github.com/..." (required if type=url)
attachment_file: [file] (required if type=file, max 10MB)
comment: "Here is my submission" (optional)
```

**Response (201):**
```json
{
  "success": true,
  "message": "Assignment submitted successfully",
  "data": {
    "submission": { "id": 2, "status": "pending", "submitted_at": "...", "is_late": false, "attempt_number": 2 }
  }
}
```

---

### GET `/assignments/submissions/{assignmentId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "submissions": [ "...same as assignment detail submissions..." ]
  }
}
```

---

## 7. Cart

> All endpoints require **Bearer Token + Verified Email**

### GET `/cart`

**Query Params:** `coupon` (optional coupon code)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "cart": [
      {
        "id": 1,
        "course": { "id": 10, "title": "...", "slug": "...", "thumbnail": "...", "pricing_type": "paid", "price": 29.99, "discount": 1, "discount_price": 19.99, "instructor": { "id": 1, "name": "..." } }
      }
    ],
    "coupon": { "id": 1, "code": "SAVE20", "discount": 20 } | null,
    "subtotal": 19.99,
    "discounted_price": 15.99,
    "tax_amount": 0.80,
    "total_price": 16.79,
    "items_count": 1
  }
}
```

---

### POST `/cart/add`

**Request:**
```json
{ "course_id": 10 }
```

**Response (201):**
```json
{ "success": true, "message": "Course added to cart", "data": { "cart_count": 2 } }
```

---

### POST `/cart/remove/{id}`

**Response (200):**
```json
{ "success": true, "message": "Course removed from cart", "data": { "cart_count": 1 } }
```

---

### POST `/cart/clear`

**Response (200):**
```json
{ "success": true, "message": "Cart cleared", "data": { "cart_count": 0 } }
```

---

### POST `/cart/apply-coupon`

**Request:**
```json
{ "code": "SAVE20" }
```

**Response (200):**
```json
{
  "success": true,
  "message": "Coupon applied successfully",
  "data": {
    "coupon": { "id": 1, "code": "SAVE20", "discount": 20 },
    "subtotal": 19.99, "discounted_price": 15.99, "tax_amount": 0.80, "total_price": 16.79
  }
}
```

---

### POST `/cart/remove-coupon`

**Response (200):**
```json
{
  "success": true,
  "message": "Coupon removed",
  "data": { "subtotal": 19.99, "discounted_price": 19.99, "tax_amount": 1.00, "total_price": 20.99 }
}
```

---

## 8. Wishlist

> All endpoints require **Bearer Token + Verified Email**

### GET `/wishlist`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "wishlists": [
      {
        "id": 1,
        "course": { "id": 10, "title": "...", "slug": "...", "thumbnail": "...", "short_description": "...", "pricing_type": "paid", "price": 29.99, "discount": 1, "discount_price": 19.99, "level": "intermediate", "instructor": { "..." } },
        "created_at": "2025-02-08T..."
      }
    ],
    "count": 1
  }
}
```

---

### POST `/wishlist/add`

**Request:**
```json
{ "course_id": 10 }
```

**Response (201):**
```json
{ "success": true, "message": "Course added to wishlist", "data": { "wishlist_id": 1 } }
```

---

### POST `/wishlist/remove/{id}`

**Response (200):**
```json
{ "success": true, "message": "Course removed from wishlist" }
```

---

### GET `/wishlist/check/{courseId}`

**Response (200):**
```json
{ "success": true, "data": { "is_wishlisted": true, "wishlist_id": 1 } }
```

---

## 9. Notifications

> All endpoints require **Bearer Token + Verified Email**

### GET `/notifications`

**Query Params:** `per_page` (default: 15), `page`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "notifications": [
      { "id": "abc-123", "type": "App\\Notifications\\...", "data": { "message": "...", "..." }, "read_at": null, "created_at": "..." }
    ],
    "pagination": { "..." }
  }
}
```

---

### GET `/notifications/unread-count`

**Response (200):**
```json
{ "success": true, "data": { "unread_count": 5 } }
```

---

### GET `/notifications/{id}`

Reads and marks the notification as read.

**Response (200):**
```json
{ "success": true, "data": { "notification": { "id": "abc-123", "type": "...", "data": { "..." }, "read_at": "2025-02-08T...", "created_at": "..." } } }
```

---

### POST `/notifications/{id}/read`

**Response (200):**
```json
{ "success": true, "message": "Notification marked as read" }
```

---

### POST `/notifications/read-all`

**Response (200):**
```json
{ "success": true, "message": "All notifications marked as read" }
```

---

## 10. Reviews

> All endpoints require **Bearer Token + Verified Email**

### GET `/reviews`

Returns all reviews by the authenticated user.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reviews": [
      { "id": 1, "course_id": 10, "course_title": "Laravel Mastery", "rating": 5, "review": "Great!", "created_at": "...", "updated_at": "..." }
    ]
  }
}
```

---

### GET `/reviews/my-review/{courseId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "review": { "id": 1, "rating": 5, "review": "Great!", "created_at": "...", "updated_at": "..." },
    "has_reviewed": true
  }
}
```

---

### POST `/reviews`

> **Rate Limit:** `sensitive`

**Request:**
```json
{ "course_id": 10, "rating": 5, "review": "Excellent course!" }
```

**Response (201):**
```json
{ "success": true, "message": "Review submitted successfully", "data": { "review": { "id": 1, "rating": 5, "review": "Excellent course!", "created_at": "..." } } }
```

---

### POST `/reviews/{id}`

> **Rate Limit:** `sensitive`

**Request:**
```json
{ "rating": 4, "review": "Updated review" }
```

**Response (200):**
```json
{ "success": true, "message": "Review updated successfully", "data": { "review": { "id": 1, "rating": 4, "review": "Updated review", "updated_at": "..." } } }
```

---

### DELETE `/reviews/{id}`

> **Rate Limit:** `sensitive`

**Response (200):**
```json
{ "success": true, "message": "Review deleted successfully" }
```

---

## 11. Forums

> All endpoints require **Bearer Token + Verified Email**

### GET `/forums`

Returns all forum posts by the authenticated user.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "forums": [
      { "id": 1, "title": "Help with controllers", "description": "...", "created_at": "...", "course": { "id": 10, "title": "..." }, "replies_count": 3 }
    ]
  }
}
```

---

### GET `/forums/course/{courseId}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "forums": [
      { "id": 1, "title": "...", "description": "...", "created_at": "...", "user": { "id": 2, "name": "...", "photo": "..." }, "replies_count": 3, "lesson": { "id": 5, "title": "..." } | null }
    ]
  }
}
```

---

### GET `/forums/lesson/{lessonId}`

**Response (200):** Same structure as `/forums/course/{courseId}` but includes full `replies` array instead of `replies_count`.

---

### GET `/forums/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "forum": {
      "id": 1, "title": "...", "description": "...", "created_at": "...",
      "user": { "..." },
      "course": { "..." },
      "lesson": { "..." } | null,
      "replies": [ { "id": 1, "reply": "...", "created_at": "...", "user": { "..." } } ]
    }
  }
}
```

---

### POST `/forums`

> **Rate Limit:** `sensitive`

**Request:**
```json
{ "title": "Question about...", "description": "Full question text", "course_id": 10, "section_lesson_id": 5 }
```

**Response (201):**
```json
{ "success": true, "message": "Forum post created successfully", "data": { "forum": { "id": 2, "title": "...", "description": "...", "created_at": "..." } } }
```

---

### POST `/forums/{id}/reply`

> **Rate Limit:** `sensitive`

**Request:**
```json
{ "reply": "Here is my answer..." }
```

**Response (201):**
```json
{ "success": true, "message": "Reply posted successfully", "data": { "reply": { "id": 1, "reply": "...", "created_at": "...", "user": { "..." } } } }
```

---

### PUT `/forums/{id}`

> **Rate Limit:** `sensitive`

**Request:**
```json
{ "title": "Updated title", "description": "Updated description" }
```

**Response (200):**
```json
{ "success": true, "message": "Forum post updated successfully" }
```

---

### DELETE `/forums/{id}`

> **Rate Limit:** `sensitive`

**Response (200):**
```json
{ "success": true, "message": "Forum post deleted successfully" }
```

---

## 12. Live Classes

> All endpoints require **Bearer Token + Verified Email**

### GET `/live-classes/course/{courseId}`

Must be enrolled. Returns live classes with status (`upcoming`, `live`, `ended`).

**Response (200):**
```json
{
  "success": true,
  "data": {
    "live_classes": [
      { "id": 1, "class_topic": "Advanced Routing", "class_date_and_time": "2025-02-10T14:00:00Z", "class_note": "...", "provider": "zoom", "status": "upcoming" }
    ]
  }
}
```

---

### GET `/live-classes/{id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "live_class": { "id": 1, "class_topic": "...", "class_date_and_time": "...", "class_note": "...", "provider": "zoom", "status": "live", "course": { "id": 10, "title": "..." } }
  }
}
```

---

### POST `/live-classes/{id}/join`

Only works when status is `live`.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "join_info": { "provider": "zoom", "meeting_id": "123456789", "password": "abc123", "join_url": "https://zoom.us/j/..." }
  }
}
```

---

### GET `/live-classes/{id}/signature`

Zoom SDK signature for embedded meeting.

**Response (200):**
```json
{
  "success": true,
  "data": { "signature": "base64...", "meeting_number": "123456789", "user_name": "Ahmed", "user_email": "ahmed@example.com", "password": "abc123" }
}
```

---

## 13. Enrollment

> All endpoints require **Bearer Token + Verified Email**

### POST `/enroll/free/{courseId}`

> **Rate Limit:** `sensitive`

Enroll in a free course directly.

**Response (201):**
```json
{ "success": true, "message": "Enrolled successfully", "data": { "enrollment_id": 5 } }
```

**Error (400):**
```json
{ "success": false, "message": "This course is not free" }
```

```json
{ "success": false, "message": "You are already enrolled in this course" }
```

---

### GET `/enroll/check/{courseId}`

**Response (200):**
```json
{ "success": true, "data": { "is_enrolled": true, "enrollment_id": 5 } }
```

---

## 14. Certificate

> All endpoints require **Bearer Token + Verified Email**

### GET `/certificate/course/{courseId}`

**Response (200):**
```json
{ "success": true, "data": { "...certificate data..." } }
```

**Error (404):**
```json
{ "success": false, "message": "Certificate not available. Course must be completed first." }
```

---

### GET `/certificate/download/{courseId}`

**Response (200):**
```json
{ "success": true, "data": { "download_url": "https://..." } }
```

---

## 15. WaafiPay Payment

> All endpoints (except webhook) require **Bearer Token + Verified Email**

### GET `/payment/methods`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "wallets": [
      { "type": "evc_plus", "name": "EVC Plus", "prefix": ["61"] },
      { "type": "zaad", "name": "Zaad", "prefix": ["63", "65"] },
      { "type": "sahal", "name": "Sahal", "prefix": ["62"] }
    ]
  }
}
```

**Error (503):**
```json
{ "success": false, "message": "WaafiPay is not enabled." }
```

---

### POST `/payment/initiate`

> **Rate Limit:** `sensitive`

Initiate a WaafiPay payment for a specific course. Amount is calculated server-side from course price.

**Request:**
```json
{
  "course_id": 10,
  "phone_number": "615551234",
  "wallet_type": "evc_plus"
}
```

**Response (200) — Payment sent to phone:**
```json
{
  "success": true,
  "message": "Payment request sent",
  "status": "pending",
  "reference_id": "WP-ABC123",
  "data": { "reference_id": "WP-ABC123", "status": "pending" }
}
```

**Response (200) — Immediate success (auto-enrolled):**
```json
{
  "success": true,
  "message": "Payment successful",
  "status": "success",
  "reference_id": "WP-ABC123",
  "enrollment_created": true
}
```

**Response (200) — Existing pending payment:**
```json
{
  "success": true,
  "message": "A payment is already in progress.",
  "data": { "reference_id": "WP-ABC123", "status": "pending" }
}
```

**Error (400):**
```json
{ "success": false, "message": "You are already enrolled in this course." }
```

```json
{ "success": false, "message": "This is a free course. Use the free enrollment endpoint." }
```

---

### POST `/payment/status`

Check the status of a payment. If successful, auto-enrolls the student.

**Request:**
```json
{ "reference_id": "WP-ABC123" }
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reference_id": "WP-ABC123",
    "status": "success",
    "amount": 19.99,
    "course_id": 10,
    "enrollment_created": true,
    "error_message": null
  }
}
```

**Possible `status` values:** `pending`, `processing`, `success`, `failed`, `cancelled`

---

### GET `/payment/history`

**Query Params:** `per_page` (default: 20)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": 1,
        "reference_id": "WP-ABC123",
        "course_id": 10,
        "phone_number": "615551234",
        "amount": "19.99",
        "currency": "USD",
        "status": "success",
        "wallet_type": "evc_plus",
        "description": "Payment for course: Laravel Mastery",
        "created_at": "2025-02-08T05:30:00Z",
        "completed_at": "2025-02-08T05:30:05Z",
        "course": { "id": 10, "title": "Laravel Mastery", "slug": "laravel-mastery", "thumbnail": "/storage/..." }
      }
    ],
    "pagination": { "current_page": 1, "last_page": 1, "per_page": 20, "total": 1 }
  }
}
```

---

### POST `/waafipay/webhook` (Public)

> **Auth:** None | **Rate Limit:** `public`

WaafiPay server-to-server callback. Auto-enrolls student on success.

---

## Error Codes

| HTTP | Code | Meaning |
|------|------|---------|
| 400 | — | Bad request / validation / business logic error |
| 401 | — | Invalid or missing token |
| 403 | `EMAIL_NOT_VERIFIED` | Email not verified (call `/auth/verify-email/resend`) |
| 403 | — | Not enrolled / not authorized |
| 404 | — | Resource not found |
| 422 | — | Validation errors (check `errors` object) |
| 429 | — | Rate limit exceeded |
| 500 | — | Server error |
| 503 | `NOT_CONFIGURED` | WaafiPay not enabled/configured |

---

## Mobile App Flow

### Registration Flow
```
1. POST /auth/register → get token + user (email_verified_at = null)
2. Show "Verify Email" screen
3. User clicks link in email → email_verified_at is set
4. POST /auth/user → check email_verified_at is not null
5. Proceed to app
```

### Course Purchase Flow (WaafiPay)
```
1. GET /courses/{id} → show course detail + price
2. User taps "Buy" → collect phone number
3. POST /payment/initiate { course_id, phone_number, wallet_type }
4. If status = "pending" → show "Check your phone" + poll
5. POST /payment/status { reference_id } → poll every 3s
6. If status = "success" → enrollment_created = true → navigate to player
7. If status = "failed" → show error, allow retry
```

### Free Course Enrollment
```
1. GET /courses/{id} → pricing_type = "free"
2. POST /enroll/free/{courseId}
3. Navigate to course player
```
