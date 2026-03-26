# LMS Mobile API Documentation

## Base URL
```
/api/v1
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer {token}
```

---

## 1. Authentication Endpoints

### Register
```http
POST /api/v1/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "password_confirmation": "password123"
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
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "status": 1,
      "photo": null,
      "social_links": null,
      "email_verified_at": null,
      "created_at": "2025-01-01T00:00:00.000Z"
    },
    "token": "1|abc123...",
    "token_type": "Bearer"
  }
}
```

### Login
```http
POST /api/v1/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { ... },
    "token": "1|abc123...",
    "token_type": "Bearer"
  }
}
```

### Logout (Protected)
```http
POST /api/v1/auth/logout
```

### Get Current User (Protected)
```http
GET /api/v1/auth/user
```

### Forgot Password
```http
POST /api/v1/auth/forgot-password
```

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

### Reset Password
```http
POST /api/v1/auth/reset-password
```

**Request Body:**
```json
{
  "token": "reset_token",
  "email": "john@example.com",
  "password": "newpassword123",
  "password_confirmation": "newpassword123"
}
```

### Google Authentication
```http
POST /api/v1/auth/google
```

**Request Body:**
```json
{
  "google_id": "google_user_id",
  "email": "john@gmail.com",
  "name": "John Doe",
  "photo": "https://..."
}
```

---

## 2. Course Endpoints (Public)

### List Courses
```http
GET /api/v1/courses
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| per_page | int | Items per page (default: 12) |
| page | int | Page number |
| category_id | int | Filter by category |
| level | string | beginner, intermediate, advanced |
| pricing_type | string | free, paid |
| sort | string | latest, popular, price_low, price_high |

**Response:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": 1,
        "title": "Course Title",
        "slug": "course-title",
        "short_description": "...",
        "thumbnail": "/storage/...",
        "level": "beginner",
        "pricing_type": "paid",
        "price": 99.99,
        "discount": true,
        "discount_price": 49.99,
        "enrollments_count": 150,
        "reviews_count": 45,
        "average_rating": 4.5,
        "instructor": {
          "id": 1,
          "name": "Instructor Name",
          "photo": "/storage/..."
        }
      }
    ],
    "pagination": {
      "current_page": 1,
      "last_page": 5,
      "per_page": 12,
      "total": 60
    }
  }
}
```

### Featured Courses
```http
GET /api/v1/courses/featured?limit=8
```

### Categories
```http
GET /api/v1/courses/categories
```

### Courses by Category
```http
GET /api/v1/courses/category/{id}
```

### Search Courses
```http
GET /api/v1/courses/search?q=javascript
```

### Course Details
```http
GET /api/v1/courses/{id}
```

### Course Reviews
```http
GET /api/v1/courses/{id}/reviews
```

### Course Curriculum
```http
GET /api/v1/courses/{id}/curriculum
```

---

## 3. Student Dashboard (Protected)

### Dashboard Overview
```http
GET /api/v1/student/dashboard
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollments": [...],
    "cart_count": 2,
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "photo": null,
      "email_verified": true
    }
  }
}
```

### My Enrollments
```http
GET /api/v1/student/enrollments
```

### Enrollment Details
```http
GET /api/v1/student/enrollments/{id}
```

### Get Profile
```http
GET /api/v1/student/profile
```

### Update Profile
```http
POST /api/v1/student/profile
```

**Request Body (multipart/form-data):**
| Field | Type | Description |
|-------|------|-------------|
| name | string | Required |
| photo | file | Optional, max 1MB |
| social_links | json | Optional |

### Change Password
```http
POST /api/v1/student/change-password
```

**Request Body:**
```json
{
  "current_password": "oldpass",
  "password": "newpass",
  "password_confirmation": "newpass"
}
```

### Change Email
```http
POST /api/v1/student/change-email
```

**Request Body:**
```json
{
  "email": "newemail@example.com",
  "password": "currentpassword"
}
```

---

## 4. Course Player (Protected)

### Initialize Player
```http
POST /api/v1/player/init/{courseId}
```

### Get Course Content
```http
GET /api/v1/player/course/{courseId}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "course": {
      "id": 1,
      "title": "Course Title",
      "thumbnail": "...",
      "instructor": {...}
    },
    "sections": [
      {
        "id": 1,
        "title": "Section 1",
        "lessons": [
          {
            "id": 1,
            "title": "Lesson 1",
            "lesson_type": "video",
            "duration": "10:30",
            "is_completed": false
          }
        ],
        "quizzes": [...]
      }
    ],
    "watch_history": {
      "id": 1,
      "current_watching_id": "5",
      "current_watching_type": "lesson"
    },
    "completion": {
      "percentage": "75.00",
      "totalContents": 20,
      "completedContents": 15
    }
  }
}
```

### Get Lesson
```http
GET /api/v1/player/lesson/{watchHistoryId}/{lessonId}
```

### Get Quiz
```http
GET /api/v1/player/quiz/{watchHistoryId}/{quizId}
```

### Update Progress
```http
POST /api/v1/player/progress/{watchHistoryId}
```

**Request Body:**
```json
{
  "content_id": "5",
  "content_type": "lesson"
}
```

### Mark Content Complete
```http
POST /api/v1/player/complete/{watchHistoryId}
```

**Request Body:**
```json
{
  "content_id": "5",
  "content_type": "lesson"
}
```

### Finish Course
```http
POST /api/v1/player/finish/{watchHistoryId}
```

---

## 5. Quizzes (Protected)

### Get Quiz
```http
GET /api/v1/quizzes/{id}
```

### Submit Quiz
```http
POST /api/v1/quizzes/submit
```

**Request Body:**
```json
{
  "section_quiz_id": 1,
  "answers": [
    {
      "question_id": "1",
      "answer": ["Option A"]
    },
    {
      "question_id": "2",
      "answer": ["True"]
    }
  ]
}
```

### Get Submission
```http
GET /api/v1/quizzes/submission/{id}
```

---

## 6. Assignments (Protected)

### List Course Assignments
```http
GET /api/v1/assignments/course/{courseId}
```

### Get Assignment
```http
GET /api/v1/assignments/{id}
```

### Submit Assignment
```http
POST /api/v1/assignments/submit
```

**Request Body (multipart/form-data):**
| Field | Type | Description |
|-------|------|-------------|
| course_assignment_id | int | Required |
| attachment_type | string | url or file |
| attachment_path | string | Required if type is url |
| attachment_file | file | Required if type is file |
| comment | string | Optional |

### Get My Submissions
```http
GET /api/v1/assignments/submissions/{assignmentId}
```

---

## 7. Cart (Protected)

### View Cart
```http
GET /api/v1/cart?coupon=SAVE20
```

### Add to Cart
```http
POST /api/v1/cart/add
```

**Request Body:**
```json
{
  "course_id": 1
}
```

### Remove from Cart
```http
DELETE /api/v1/cart/remove/{id}
```

### Clear Cart
```http
DELETE /api/v1/cart/clear
```

### Apply Coupon
```http
POST /api/v1/cart/apply-coupon
```

**Request Body:**
```json
{
  "code": "SAVE20"
}
```

### Remove Coupon
```http
DELETE /api/v1/cart/remove-coupon
```

---

## 8. Wishlist (Protected)

### View Wishlist
```http
GET /api/v1/wishlist
```

### Add to Wishlist
```http
POST /api/v1/wishlist/add
```

**Request Body:**
```json
{
  "course_id": 1
}
```

### Remove from Wishlist
```http
DELETE /api/v1/wishlist/remove/{id}
```

### Check if Wishlisted
```http
GET /api/v1/wishlist/check/{courseId}
```

---

## 9. Notifications (Protected)

### List Notifications
```http
GET /api/v1/notifications?per_page=15&page=1
```

### Unread Count
```http
GET /api/v1/notifications/unread-count
```

### View Notification
```http
GET /api/v1/notifications/{id}
```

### Mark as Read
```http
POST /api/v1/notifications/{id}/read
```

### Mark All as Read
```http
POST /api/v1/notifications/read-all
```

---

## 10. Reviews (Protected)

### Create Review
```http
POST /api/v1/reviews
```

**Request Body:**
```json
{
  "course_id": 1,
  "rating": 5,
  "review": "Great course!"
}
```

### Update Review
```http
PUT /api/v1/reviews/{id}
```

### Delete Review
```http
DELETE /api/v1/reviews/{id}
```

### My Review for Course
```http
GET /api/v1/reviews/my-review/{courseId}
```

---

## 11. Forums (Protected)

### List Course Forums
```http
GET /api/v1/forums/course/{courseId}
```

### List Lesson Forums
```http
GET /api/v1/forums/lesson/{lessonId}
```

### Create Forum Post
```http
POST /api/v1/forums
```

**Request Body:**
```json
{
  "title": "Question Title",
  "description": "Question content",
  "course_id": 1,
  "section_lesson_id": 5
}
```

### Reply to Forum
```http
POST /api/v1/forums/{id}/reply
```

**Request Body:**
```json
{
  "reply": "Reply content"
}
```

### Update Forum Post
```http
PUT /api/v1/forums/{id}
```

### Delete Forum Post
```http
DELETE /api/v1/forums/{id}
```

---

## 12. Live Classes (Protected)

### List Course Live Classes
```http
GET /api/v1/live-classes/course/{courseId}
```

### Get Live Class Details
```http
GET /api/v1/live-classes/{id}
```

### Get Join Info
```http
GET /api/v1/live-classes/{id}/join
```

### Get Zoom Signature
```http
GET /api/v1/live-classes/{id}/signature
```

---

## 13. Enrollment (Protected)

### Enroll in Free Course
```http
POST /api/v1/enroll/free/{courseId}
```

### Check Enrollment Status
```http
GET /api/v1/enroll/check/{courseId}
```

---

## 14. Certificate (Protected)

### Get Certificate Data
```http
GET /api/v1/certificate/course/{courseId}
```

### Download Certificate
```http
GET /api/v1/certificate/download/{courseId}
```

---

## Error Responses

### Validation Error (422)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."]
  }
}
```

### Unauthorized (401)
```json
{
  "success": false,
  "message": "Unauthenticated."
}
```

### Forbidden (403)
```json
{
  "success": false,
  "message": "You are not enrolled in this course"
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

## Rate Limiting

API requests are rate limited to:
- **60 requests per minute** for authenticated users
- **30 requests per minute** for unauthenticated users

---

*Generated on December 18, 2025*
