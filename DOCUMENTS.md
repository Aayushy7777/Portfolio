AayushPortfolio — Documents & Assets Checklist

Place the files (or drop folders) into the `Portfolio-master/Portfolio-master` repo. Preferred locations are listed in parentheses.

Required
- Resume (PDF) — `public/resume.pdf` or `src/Assets/resume.pdf`
- Short bio (plain text / Markdown) — `content/about.md` or paste into `src/components/About/About.js`
- Headline / Tagline (one line) — include in `DOCUMENTS.md` or `content/meta.json`
- High-resolution headshot (jpg/png, 800×800 recommended) — `src/Assets/headshot.jpg`
- Favicon (32×32 PNG or SVG) — `public/favicon.png` or `public/favicon.svg`

Projects (repeat per project)
- Title (string)
- Short description (1–2 sentences)
- Full description / case study (optional, Markdown)
- Tech stack (list)
- Live URL (if any)
- GitHub repo URL (if any)
- Screenshots (PNG/JPG) — `src/Assets/Projects/<project-slug>/`

Contact & Social
- Preferred contact email
- LinkedIn URL
- GitHub URL
- Twitter / other socials (optional)

Branding (optional)
- Logo (SVG/PNG) — `src/Assets/logo.svg`
- Color palette (hex codes) and font choices

Optional/Advanced
- Testimonials (name, title, quote, optional photo)
- Certifications / badges (images or links)
- Blog posts (Markdown files under `content/blog/`)
- Sitemap / SEO metadata (site title, meta description, primary keywords)
- Analytics ID (Google Analytics / Vercel / Netlify)
- Hosting details (domain name and preferred provider)

Filenames / Formats
- Use lowercase, kebab-case for filenames (e.g., `my-project-screenshot.png`).
- Prefer `PNG` or `JPG` for images; `SVG` for logos and icons.
- Resumes should be PDF.
- Descriptions can be Markdown (`.md`) or plain text.

How I will use these
- `public/index.html` and `public/manifest.json` will be updated with site title and meta when you confirm final title and URL.
- `src/` components will be populated with text/images you provide.

Next steps
1. Confirm that `AayushPortfolio` is the final site name (you already selected it).
2. Upload the files listed above to the repository (or paste the text for bio/headline here).
3. Tell me if you want domain suggestions or deployment help (Netlify/Vercel/GitHub Pages).

If you want, I can scaffold an example project entry and a sample About page now — tell me whether to proceed and which sample project and bio text to use.

Resume file status
- I copied the resume you attached into `public/resume.pdf`. The site can link to `/resume.pdf` for downloads. If you'd like the resume filename changed or to store it elsewhere, tell me and I'll move it.

Content imported from LaTeX resume
- `src/content/profile.json` updated with contact info, headline, summary, skills, education, achievements, and `resumeUrl`.
- `src/content/projects.json` created with three project entries (BookCircle, PERN CRUD App, Embedded UAV Flight Controller).
- `src/content/experience.json` created with the Elitech internship entry.

Next steps
- If any field is incorrect (location, dates, wording), tell me and I'll update `src/content/profile.json`.
- If you want me to wire the `projects.json` and `experience.json` data into the visible components (Projects/Resume pages), I can update the relevant components to read these files and render them.

Profile picture
- To use the photo you attached as your profile picture, place the image at `public/headshot.jpg` (800×800 recommended). The About section now loads `/headshot.jpg` automatically.
- Example PowerShell command to copy the image from your Desktop into the project public folder (adjust source path if needed):

```powershell
Copy-Item -Path "C:\Users\AAYUSH\Desktop\<your-image-filename>.jpg" -Destination "C:\Users\AAYUSH\Desktop\Portfolio-master\Portfolio-master\public\headshot.jpg" -Force
```

If you want me to copy it for you, tell me the full path of the image on your machine (or confirm that it's `C:\Users\AAYUSH\Desktop\Aayush fullstack resume.pdf`'s companion image) and I'll run the copy.
