# Perfect Choice Classes — website starter

This is the first visual starter for the PCC website. It is a static, responsive front-end preview.

## Included
- PCC landing page, Class 10th/12th course sections
- Free and paid notes catalogue preview
- Online MCQ and PDF test-series sections
- Student portal placeholder
- Contact links and responsive mobile navigation

## Important: not production-ready yet
The purchase buttons are demo-only. No UPI payment is collected and no student content is unlocked by this starter. Before publishing paid content, connect:
1. Supabase Auth for student/admin accounts.
2. Supabase database with Row Level Security (RLS).
3. Private Storage buckets for paid PDFs; issue short-lived signed download URLs only after checking a verified purchase.
4. A trusted payment verification process. For UPI QR/manual transfer, require the admin to verify the payment in their bank/UPI app before granting access. Never trust a screenshot or a client-side “paid” flag.
5. Admin-only upload and test authoring permissions enforced in database policies, not just hidden buttons.

## Deploy preview
Upload the contents of this folder to a GitHub repository, then connect that repository to Cloudflare Pages. Use the project root as the build directory; no build command is needed for this static preview.

## PCC details currently shown
- Perfect Choice Classes — WAY OF SUCCESS
- Phone: 9982004613 / 7568580634
- Instagram: @pcc.maths

Replace the text-based PCC mark in the hero with the official logo asset before launch.
