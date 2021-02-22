import { Wrapper } from './styles'

const ExperienceBar = () => (
  <Wrapper data-testid="experience-bar">
    <header>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  </Wrapper>
)

export default ExperienceBar
