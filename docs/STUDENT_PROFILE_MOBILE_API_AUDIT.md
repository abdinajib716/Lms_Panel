# Student Profile And Settings API Audit

## Scope

This audit compares the student account experience on the web dashboard with the dedicated mobile API layer.

Status:

- updated after mobile API parity fixes on 2026-03-27

Web surface reviewed:

- `profile` tab
- `settings` tab

Source files reviewed:

- `resources/js/pages/student/tabs-content/my-profile.tsx`
- `resources/js/pages/student/tabs-content/settings.tsx`
- `resources/js/components/account/change-email.tsx`
- `resources/js/components/account/change-password.tsx`
- `resources/js/components/account/forget-password.tsx`
- `routes/student.php`
- `app/Http/Controllers/StudentController.php`
- `app/Http/Controllers/Auth/EmailVerificationNotificationController.php`
- `app/Http/Controllers/Auth/PasswordResetLinkController.php`
- `app/Services/StudentService.php`
- `app/Services/AccountService.php`
- `routes/api.php`
- `app/Http/Controllers/Api/StudentController.php`
- `app/Http/Controllers/Api/AuthController.php`

## Web Feature Map

### 1. Profile tab

Web supports:

- view current profile data from authenticated user props
- update `name`
- update `photo`
- update `social_links`

Mobile scope decision:

- mobile intentionally excludes `social_links`

Web route:

- `POST /student/profile`

Backend handler:

- `StudentController@update_profile`

### 2. Settings tab

Web supports:

- request email change link
- save changed email through tokenized verification link
- send password reset email
- directly change password
- view `my-transactions`

Web routes:

- `POST /settings/account/change-email`
- `GET /settings/account/change-email/save`
- `POST /settings/account/forgot-password`
- `PUT /settings/account/change-password`
- `GET /my-transactions`

Backend handlers:

- `EmailVerificationNotificationController@update`
- `EmailVerificationNotificationController@save`
- `PasswordResetLinkController@store`
- `PasswordResetLinkController@update`
- `WaafiPayWebController@transactions`

## Mobile API Map

Available student/mobile endpoints:

- `GET /api/v1/student/profile`
- `POST /api/v1/student/profile`
- `POST /api/v1/student/change-password`
- `POST /api/v1/student/change-email`
- `GET /api/v1/student/transactions`
- `POST /api/v1/auth/forgot-password`

Handlers:

- `Api\StudentController@profile`
- `Api\StudentController@updateProfile`
- `Api\StudentController@changePassword`
- `Api\StudentController@changeEmail`
- `Api\WaafiPayController@history`
- `Api\AuthController@forgotPassword`

## Comparison Matrix

| Web capability | Web route | Mobile/API equivalent | Status | Notes |
|---|---|---|---|---|
| View profile data | page props in `GET /student/{tab}` | `GET /api/v1/student/profile` | Present | Mobile now returns core user data plus stats, without social links. |
| Update profile name/photo | `POST /student/profile` | `POST /api/v1/student/profile` | Present | Mobile intentionally excludes social links. |
| Change password | `PUT /settings/account/change-password` | `POST /api/v1/student/change-password` | Present | Same core function, only HTTP verb/path differ. |
| Send password reset link | `POST /settings/account/forgot-password` | `POST /api/v1/auth/forgot-password` | Present but different placement | Mobile has the feature, but it lives under `auth`, not `student`. |
| Request email change | `POST /settings/account/change-email` | `POST /api/v1/student/change-email` | Partial | Both change email, but the behavior is different. |
| View my transactions | `GET /my-transactions` | `GET /api/v1/student/transactions` | Present | Added for mobile parity. |

## Remaining Difference

### Change-email behavior is only partially aligned

Web flow:

- takes `current_email` and `new_email`
- does not immediately replace the user email
- creates a token in `password_reset_tokens`
- sends a special change-email verification link
- final email swap happens only after token verification

Mobile/API flow:

- takes `email` and `password`
- updates `users.email` immediately
- clears `email_verified_at`
- sends the normal verify-email notification afterward

Result:

- mobile is not missing a route here
- but it is only a partial match to web business logic

## Final Conclusion

### Fully present

- profile read
- profile update
- password change
- forgot-password email send
- my-transactions
- profile stats payload

### Partial or behaviorally different

- email change request

### Fixed backend issues reported by Flutter

- `App\Services\StudentService::getEnrolledCourses()` now exists and wraps the real enrollment service flow
- `App\Services\Course\CourseEnrollmentService::getEnrollmentByUserAndCourse()` now exists and maps to the existing course enrollment lookup
