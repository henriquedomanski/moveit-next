import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <div className="container">

      
      
    <ExperienceBar/>

    <section>
      <div>
        <div>
          <Profile/>
        </div>

      </div>
    </section>
  </div>
  )
}
