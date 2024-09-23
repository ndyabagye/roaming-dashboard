import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/dashboard')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: Dashboard,
})

function Dashboard() {
  return (
    <>
      <main>Private Route</main>
    </>
  )
}
