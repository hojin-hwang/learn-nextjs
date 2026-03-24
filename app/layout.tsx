export const metadata = {
	title: 'Next.js Study',
	description: 'A simple Next.js application',
}

import Navigation from "../components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
return (
   <html>
      <body>
        <h5>11</h5>
        <Navigation />
        {children}
      </body>
    </html>
  )
}