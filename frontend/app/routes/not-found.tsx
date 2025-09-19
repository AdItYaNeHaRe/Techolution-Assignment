import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </main>
  );
}
