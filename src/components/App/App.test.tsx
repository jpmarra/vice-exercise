import React from "react"
import { render, screen, waitForElementToBeRemoved, fireEvent } from "@testing-library/react"
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

test("should update the show card when a nav item is clicked", async () => {
    render(<App />)
    await waitForElementToBeRemoved(screen.getByTestId("loading"))

    expect(screen.getByText(/gaycation/i)).toBeInTheDocument()
    expect(screen.queryByText(/love industries/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId("nav-e6"))

    await waitForElementToBeRemoved(screen.getByText(/gaycation/i))
    expect(screen.getByText(/love industries/i)).toBeInTheDocument()
    expect(screen.queryByText(/king of the road/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId("nav-c3"))

    await waitForElementToBeRemoved(screen.getByText(/love industries/i))
    expect(screen.getByText(/king of the road/i)).toBeInTheDocument()
})
