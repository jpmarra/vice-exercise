import React from "react"
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import App from "./index"
expect.extend(toHaveNoViolations)

jest.mock("../../utils")

test("the app is accessible", async () => {
    const { container } = render(<App />)

    await waitForElementToBeRemoved(screen.getByTestId("loading"))

    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

// test("should update the show card when a nav item is clicked", async () => {})
