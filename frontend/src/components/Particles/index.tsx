'use client'

import { particlesoptions } from './particlesoptions'
import React, { ReactNode, useCallback, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

interface ParticlesBackgroundProps {
  children?: ReactNode;
 }

export default function ParticlesBackground({ children }: ParticlesBackgroundProps) {
  const [visibleParticles, setVisibleParticles] = useState<boolean>(false)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine).then(() => setVisibleParticles(true))
  }, [])

  return (
    <div className={visibleParticles ? 'block' : 'hidden'}>
      <Particles id="g81" init={particlesInit} options={particlesoptions} />
      {children}
    </div>
  )
}
