# Harold Delacroix — Portfolio

Personal developer portfolio for [haroldelacroix.dev](https://haroldelacroix.dev).

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
│   └── api/contact/        # Contact form → Resend (emails to you)
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
- **Contact form**: Uses [Resend](https://resend.com). Copy `.env.example` to `.env.local`, add your `RESEND_API_KEY` ([get one here](https://resend.com/api-keys)), and messages will be sent to `harold.delacroix@gmail.com`. Optional: set `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (use a verified domain in Resend for production).

## Contact form (Resend)

1. Copy `.env.example` to `.env.local`.
2. Sign up at [resend.com](https://resend.com) and create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Set `RESEND_API_KEY=re_xxxx...` in `.env.local`.
4. Run `npm run dev` — the "Send message" button will deliver emails to `harold.delacroix@gmail.com`. The sender uses Resend’s default domain until you verify your own (e.g. `contact@haroldelacroix.dev`) in Resend and set `CONTACT_FROM_EMAIL`.

On Vercel, add `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`) in Project Settings → Environment Variables.

## Deployment

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com) (zero config for Next.js).
3. Add `RESEND_API_KEY` in Vercel environment variables.
4. Add custom domain `haroldelacroix.dev` in Vercel project settings and follow the DNS instructions.
