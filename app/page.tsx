import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>

      {/* Companion Cards */}
      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#BDE7FF'
        />

        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='Maths'
          duration={30}
          color='#FFDA6E'
        />

        <CompanionCard
          id='789'
          name='Verba the Vocabulary Builder'
          topic='English Literature '
          subject='Language'
          duration={45}
          color='#E5D0FF'
        />
      </section>

      {/* Companions List */}
      <section className='home-section'>
        <CompanionsList 
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page
