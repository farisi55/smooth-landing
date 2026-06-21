import { Nav }           from '@/components/layout/Nav'
import { Footer }        from '@/components/layout/Footer'
import { Hero }          from '@/components/sections/Hero'
import { Problem }       from '@/components/sections/Problem'
import { WhatIsSmooth }  from '@/components/sections/WhatIsSmooth'
import { Install }       from '@/components/sections/Install'
import { Features }      from '@/components/sections/Features'
import { SelfHealing }   from '@/components/sections/SelfHealing'
import { Providers }     from '@/components/sections/Providers'
import { UseCases }      from '@/components/sections/UseCases'
import { Benefits }      from '@/components/sections/Benefits'
import { WhyDifferent }  from '@/components/sections/WhyDifferent'
import { CTA }           from '@/components/sections/CTA'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatIsSmooth />
        <Install />
        <Features />
        <SelfHealing />
        <Providers />
        <UseCases />
        <Benefits />
        <WhyDifferent />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
