import Link from "next/link";

export default function NotFound() {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for could not be found.</p>
        <Link href="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
          Go back home
        </Link>
      </div>
    );
  }
  