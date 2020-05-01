import React from "react"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import App from "./index"
expect.extend(toHaveNoViolations)

test("the app is accessible", async () => {
    const { container } = render(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})
