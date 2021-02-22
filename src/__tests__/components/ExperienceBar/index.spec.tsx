import { render, screen } from '@testing-library/react'
import ExperienceBar from '../../../components/ExperienceBar'

describe('ExperienceBar', () => {
  it('should be able to render', () => {
    const { container } = render(<ExperienceBar />)

    expect(screen.getByTestId('experience-bar')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
