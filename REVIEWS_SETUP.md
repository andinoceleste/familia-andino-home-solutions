# Customer reviews setup

The homepage reviews section and Vercel API are installed, but submissions remain unavailable until a Supabase database is configured. Do not put secrets in GitHub files or frontend JavaScript.

1. Create a Supabase project at https://supabase.com.
2. In Supabase SQL Editor, run the contents of `reviews-setup.sql`.
3. In the Vercel project hosting this site, add these Environment Variables for Production:
   - `SUPABASE_URL`: Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY`: Supabase service_role secret (server-side only)
   - `REVIEW_HASH_SECRET`: long random string (at least 32 characters)
4. Redeploy the Vercel project so the serverless API receives the environment variables.
5. Test a review submission. It should appear in Supabase Table Editor as `pending` and NOT on the public website.
6. Moderate in Supabase Table Editor: change `status` to `approved` to publish or `rejected` to hide.

Security: RLS enabled without anonymous access policies; server-side service key; length validation; HTML rendered as text, not injected; honeypot; daily hashed IP fingerprint with unique database constraint; pending moderation. Avoid adding customer contact details or private information to review text. For heavier traffic add CAPTCHA or stronger rate limits. No fake/example reviews are displayed.
