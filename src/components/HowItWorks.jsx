import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGSAP } from '../utils/animations';

export default function HowItWorks() {
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 1,
      scale: 2,
      duration: 1.5,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">A17 Pro Chip. <br /> A Monster Win for Gaming.</h2>

          <p className="hiw-subtitle">It’s here. The biggest redesign in the history of Apple GPUs.</p>
        </div>
      </div>
    </section>
  )
}
