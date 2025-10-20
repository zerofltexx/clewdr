# Test PR - Welcome Banner Component

This is a test pull request to demonstrate the contribution workflow for ClewdR.

## Changes Made

- Added a new `WelcomeBanner` component in `frontend/src/components/common/`
- The component is a reusable banner that displays a welcome message
- Includes optional username prop with a default fallback
- Uses gradient styling for visual appeal

## Component Details

**Location:** `frontend/src/components/common/WelcomeBanner.tsx`

**Props:**
- `username` (optional): string - Defaults to "Guest" if not provided

## Usage Example

```tsx
import WelcomeBanner from './components/common/WelcomeBanner';

// Basic usage
<WelcomeBanner />

// With username
<WelcomeBanner username="John" />
```

## Purpose

This is a test component created to demonstrate:
- How to add new React components to ClewdR
- Proper TypeScript typing with React.FC
- Following the project's component structure
- Creating a pull request for review

---

**Note:** This is for testing purposes and can be used as a reference for future contributions.
