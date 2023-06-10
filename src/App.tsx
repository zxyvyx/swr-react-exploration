import AuthenticatedRoute from './routes/AuthenticatedRoute';

export default function App() {
  const STATIC_AUTHENTICATED_STATUS = true;
  if (!STATIC_AUTHENTICATED_STATUS) {
    return <div>Not Authenticated</div>;
  }
  return <AuthenticatedRoute />;
}
