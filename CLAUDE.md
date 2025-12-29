# Skills Section Icon Update - To-Do Items

## Overview
Update the skills section to replace all placeholder icons with uploaded icons, add 5 new skills, and remove SciPy.

---

## Task Checklist

### 1. Add New Icon Imports ✅
Add 24 new import statements after line 14 in [src/sections/skills.tsx](src/sections/skills.tsx):

#### Languages (1 import)
- [ ] Import `csharpIcon` from `@/assets/icons/C# Icon.svg`

#### Web Development (2 imports)
- [ ] Import `djangoIcon` from `@/assets/icons/Django Icon.svg`
- [ ] Import `fastapiIcon` from `@/assets/icons/FastAPI Icon.svg`

#### Data Science & ML (9 imports)
- [ ] Import `numpyIcon` from `@/assets/icons/NumPy Icon.svg`
- [ ] Import `pandasIcon` from `@/assets/icons/Pandas Icon.svg`
- [ ] Import `matplotlibIcon` from `@/assets/icons/Matplotlib Icon.svg`
- [ ] Import `scikitLearnIcon` from `@/assets/icons/Scikit-learn Icon.svg`
- [ ] Import `tensorflowIcon` from `@/assets/icons/TensorFlow Icon.svg`
- [ ] Import `pytorchIcon` from `@/assets/icons/PyTorch Icon.svg`
- [ ] Import `huggingFaceIcon` from `@/assets/icons/Hugging Face.svg`
- [ ] Import `opencvIcon` from `@/assets/icons/OpenCV Icon.svg`
- [ ] Import `yolov11Icon` from `@/assets/icons/YOLOv11.svg`

#### Development Tools (7 imports)
- [ ] Import `pycharmIcon` from `@/assets/icons/PyCharm Icon.svg`
- [ ] Import `cometIcon` from `@/assets/icons/Comet.webp`
- [ ] Import `cursorIcon` from `@/assets/icons/Cursor.png`
- [ ] Import `claudeCodeIcon` from `@/assets/icons/Claude Code.png`
- [ ] Import `anacondaIcon` from `@/assets/icons/Anaconda Icon.svg`
- [ ] Import `arduinoIcon` from `@/assets/icons/Arduino Icon.svg`
- [ ] Import `powershellIcon` from `@/assets/icons/Powershell Icon.svg`

#### DevOps (1 import)
- [ ] Import `gitlabIcon` from `@/assets/icons/GitLab Icon.svg`

#### Creative & Design (4 imports)
- [ ] Import `unityIcon` from `@/assets/icons/Unity Icon.svg`
- [ ] Import `photoshopIcon` from `@/assets/icons/Adobe Photoshop Icon.svg`
- [ ] Import `illustratorIcon` from `@/assets/icons/Adobe Illustrator Icon.svg`
- [ ] Import `fusion360Icon` from `@/assets/icons/Fusion 360.png`

#### Certifications (1 import)
- [ ] Import `unityCertIcon` from `@/assets/icons/Unity Certified Developer.png`

---

### 2. Update Existing Skills Icons ✅

#### Languages Category
- [ ] Line 32: Replace C# icon from `pythonIcon` to `csharpIcon`

#### Web Development Category
- [ ] Line 53: Replace Django icon from `pythonIcon` to `djangoIcon`
- [ ] Line 57: Replace FastAPI icon from `pythonIcon` to `fastapiIcon`

#### Data Science & ML Category
- [ ] Line 66: Replace NumPy icon from `pythonIcon` to `numpyIcon`
- [ ] Line 70: Replace Pandas icon from `pythonIcon` to `pandasIcon`
- [ ] Line 74: Replace Matplotlib icon from `pythonIcon` to `matplotlibIcon`
- [ ] Lines 76-79: **REMOVE** SciPy skill object entirely
- [ ] Line 82: Replace Scikit-learn icon from `pythonIcon` to `scikitLearnIcon`
- [ ] Line 86: Replace TensorFlow icon from `pythonIcon` to `tensorflowIcon`
- [ ] Line 90: Replace PyTorch icon from `pythonIcon` to `pytorchIcon`
- [ ] Line 94: Replace Hugging Face icon from `pythonIcon` to `huggingFaceIcon`
- [ ] Line 98: Replace OpenCV icon from `pythonIcon` to `opencvIcon`
- [ ] Line 102: Replace YOLOv11 icon from `pythonIcon` to `yolov11Icon`

#### Development Tools Category
- [ ] Line 128: Replace PyCharm icon from `pythonIcon` to `pycharmIcon`
- [ ] Line 140: Replace Comet Browser icon from `arcIcon` to `cometIcon`
- [ ] Line 148: Replace Cursor icon from `vscodeIcon` to `cursorIcon`
- [ ] Line 152: Replace Claude Code icon from `vscodeIcon` to `claudeCodeIcon`

#### Creative & Design Category
- [ ] Line 165: Replace Unity Engine icon from `pythonIcon` to `unityIcon`
- [ ] Line 169: Replace Photoshop icon from `pythonIcon` to `photoshopIcon`
- [ ] Line 173: Replace Illustrator icon from `pythonIcon` to `illustratorIcon`
- [ ] Line 177: Replace Fusion 360 icon from `pythonIcon` to `fusion360Icon`

---

### 3. Add New Skills ✅

#### DevOps Category (after GitHub Actions, ~line 116)
- [ ] Add GitLab skill with `gitlabIcon`

#### Development Tools Category (appropriate positions)
- [ ] Add Anaconda skill with `anacondaIcon`
- [ ] Add Arduino skill with `arduinoIcon`
- [ ] Add PowerShell skill with `powershellIcon`

#### New Certifications Category (after Creative & Design, ~line 180)
- [ ] Create new "Certifications" category
- [ ] Add Unity Certified Developer skill with `unityCertIcon`

---

### 4. Clean Up Code ✅

#### Remove TODO Comments
- [ ] Lines 16-20: Delete entire TODO comment block listing missing icons
- [ ] Remove all inline `// TODO: Add [skill] icon` comments from skills data

---

### 5. Testing & Validation ✅

#### Build & Runtime Tests
- [ ] Run development server: `pnpm dev`
- [ ] Verify no import errors or TypeScript errors
- [ ] Check browser console for warnings

#### Visual Verification
- [ ] All 36 skills display with correct icons
- [ ] No broken image placeholders
- [ ] Icons maintain 64x64px sizing
- [ ] Hover effects work (110% scale + drop shadow)

#### Responsive Testing
- [ ] Desktop view (1920x1080)
- [ ] Tablet view (768px width)
- [ ] Mobile view (375px width)

#### Animation Testing
- [ ] Framer Motion fade-in animations work
- [ ] Stagger animation between skills works smoothly
- [ ] No performance issues with 36 animated cards

---

## Final Skills Count

| Category | Skills | New Additions |
|----------|--------|---------------|
| Languages | 2 | - |
| Web Development | 5 | - |
| Data Science & ML | 9 | SciPy removed |
| DevOps | 3 | +GitLab |
| Development Tools | 12 | +Anaconda, +Arduino, +PowerShell |
| Creative & Design | 4 | - |
| Certifications | 1 | +Unity Certified Developer (new category) |
| **TOTAL** | **36** | **+5 added, -1 removed** |

---

## Icon File Reference

All icons are located in: `src/assets/icons/`

**Formats:**
- SVG: 20 files (most new icons)
- PNG: 14 files (legacy + some new)
- WEBP: 2 files (Warp, Comet)

**File naming patterns:**
- Original icons: lowercase with no spaces (e.g., `react.png`, `python.png`)
- New SVG icons: Title Case with "Icon" suffix (e.g., `Django Icon.svg`)
- Special cases: Spaces in names (e.g., `Claude Code.png`, `Hugging Face.svg`)

---

## Implementation Notes

### Import Path Handling
- Use `@/assets/icons/` path alias for all imports
- File names with spaces require exact string match in import path
- Mix of `.svg`, `.png`, and `.webp` extensions

### TypeScript Types
- All icons typed as `StaticImageData` from `next/image`
- No type changes needed - same interface as existing icons

### Next.js Image Component
- Icons use `<Image>` component with `priority` flag
- Automatic optimization for all formats (SVG, PNG, WEBP)
- Alt text uses skill name for accessibility

### Categories Order
The categories render in this order:
1. Languages
2. Web Development
3. Data Science & ML
4. DevOps
5. Development Tools
6. Creative & Design
7. Certifications (new)

---

## Questions Resolved

1. **Unity Icon Choice**: Use `Unity Icon.svg` (not Unity Certified Developer.png for Unity Engine skill)
2. **New Skills Placement**: Recommended categories based on skill type
3. **SciPy Handling**: Removed from skills list (no icon available)

---

**File to Modify**: [src/sections/skills.tsx](src/sections/skills.tsx)

**Implementation Status**: Ready to execute ✅
