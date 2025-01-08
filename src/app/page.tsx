import React from 'react'
import Page from './heroSection/landing'
import FeatureSection from './heroSection/featureSec'
import IframeEmbed from '../app/components/iframe';

const Pages = () => {
  return (
    <div>
      <Page/>
      <FeatureSection/>
      <div className='pb-10'>
      <h1 className="text-3xl font-serif text-center py-5">Embeded Blog site</h1>
      <IframeEmbed src="https://powerlift.qodeinteractive.com/landing" />
      </div>
    </div>
  )
}

export default Pages


