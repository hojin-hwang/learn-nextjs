import '../styles/global.css'
import { Metadata } from "next";
import Navigation from "../components/navigation";


export const metadata:Metadata = {
	title: {
    template: '%s | Next.js Study us Metadata',
    default: 'Next.js Movies',
  },
	description: 'A simple Next.js application',
}


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