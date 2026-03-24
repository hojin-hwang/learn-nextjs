export const metadata = {
	title: '!!!Next.js Study',
	description: '!!!A simple Next.js application',
}


export default function Layout({ children }: { children: React.ReactNode }) {
return (
  <div>
    {children}
  </div>     
  )
}