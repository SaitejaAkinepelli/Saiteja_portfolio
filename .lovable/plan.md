

# Plan: Update Profile Photo, LinkedIn Link, and Resume Button

## Overview
This plan will update your portfolio with your new profile photo, correct LinkedIn URL, and add a working resume download link.

---

## Changes Summary

### 1. Add Your New Profile Photo

**Copy the uploaded image to the project:**
- Copy `user-uploads://saiteja_photo.png` to `src/assets/saiteja-profile.png`

**Update the About section (`src/components/About.tsx`):**
- Replace the current LinkedIn image URL on line 89 with an import of your new photo
- The image will be properly imported as an ES6 module for better bundling

**Update the Contact section (`src/components/Contact.tsx`):**
- The file already imports from `@/assets/saiteja-profile.jpg` but doesn't appear to use it
- No image is currently displayed in Contact section, so no changes needed here unless you want to add one

---

### 2. Update LinkedIn Link

**Location: `src/components/Contact.tsx` (line 234)**

**Current link:**
```
https://www.linkedin.com/in/akinepelli-saiteja-4042322a0
```

**New link:**
```
https://www.linkedin.com/in/saiteja-akinepelli
```

---

### 3. Update Resume Button Links

**Location 1: Hero section (`src/components/Hero.tsx` - line 68-69)**

**Current:**
```tsx
<Button variant="outline" size="lg" asChild>
  <a href="/resume">View Resume</a>
</Button>
```

**Updated to open Google Drive resume:**
```tsx
<Button variant="outline" size="lg" asChild>
  <a href="https://drive.google.com/file/d/1oLwn1GiXvy0uzpJzH79dZwFNo8MjWwTD/view?usp=drivesdk" 
     target="_blank" 
     rel="noopener noreferrer">
    View Resume
  </a>
</Button>
```

**Location 2: Resume page (`src/pages/Resume.tsx` - lines 59-61, 82-85)**

**Current:**
```tsx
const downloadResume = () => {
  alert('Resume download functionality would be implemented here.');
};
```

**Updated to open Google Drive resume:**
```tsx
const downloadResume = () => {
  window.open('https://drive.google.com/file/d/1oLwn1GiXvy0uzpJzH79dZwFNo8MjWwTD/view?usp=drivesdk', '_blank');
};
```

---

## Files to be Modified

| File | Changes |
|------|---------|
| `src/assets/saiteja-profile.png` | New file (copy from upload) |
| `src/components/About.tsx` | Replace image URL with imported photo |
| `src/components/Contact.tsx` | Update LinkedIn URL |
| `src/components/Hero.tsx` | Update resume button to external link |
| `src/pages/Resume.tsx` | Update download resume function |

---

## Technical Notes

- The profile image will be properly imported using ES6 module syntax (`import profileImage from '@/assets/saiteja-profile.png'`) for better optimization
- External links will include `target="_blank"` and `rel="noopener noreferrer"` for security and to open in a new tab
- The resume will open the Google Drive preview page where users can view or download

