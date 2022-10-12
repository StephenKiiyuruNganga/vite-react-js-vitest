import { expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

it("should render some text", () => {
  render(<App />)
  const paragraph = screen.getByText(
    /Click on the Vite and React logos to learn more/i
  )
  expect(paragraph).toBeDefined()
})
