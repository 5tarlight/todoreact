import React from 'react'
import Profile from '../components/Profile'

interface Props {}

const About: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Profile name='Starlight' job='Developer'></Profile>
    </div>
  )
}

export default About