# Harold Delacroix — Portfolio

Personal developer portfolio for [harolddelacroix.dev](https://harolddelacroix.dev).

Built with **Next.js 15 (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
harold-portfolio/
├── app/                    # Next.js App Router pages and API routes
│   ├── layout.tsx          # Root layout (fonts, metadata, dark mode)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + global styles
│   └── api/contact/        # Contact form API route (stub — add email service)
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, Projects, TechStack, About, Contact
│   └── ui/                 # Reusable primitives: Button, Card, SectionWrapper
├── lib/
│   └── constants.ts        # All site content (projects, services, tech stack, nav)
└── public/images/projects/ # Project placeholder images
```

## Customisation

- **Content**: Edit `lib/constants.ts` to update projects, services, tech stack, and social links.
- **Colours**: The accent colour is `cyan-400` (`#22d3ee`). Change it in `tailwind.config.ts` and `globals.css`.
- **Contact form**: The `/api/contact` route is a stub. Wire it up with [Resend](https://resend.com) or another email service.

## Deployment

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com) (zero config for Next.js).
3. Add custom domain `harolddelacroix.dev` in Vercel project settings and follow the DNS instructions.
