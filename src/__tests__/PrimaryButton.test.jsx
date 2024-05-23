import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrimaryButton from "../components/PrimaryButton";
// import PrimaryButton from "../components/PrimaryButton";
describe('PrimaryButton()',()=>{
    it('should render correctly',()=>{
        render(<PrimaryButton/>)
        const element =screen.getByText("click to add")
        expect(element).toBeInTheDocument()
    })
    it('should render correctly with action type if provided',()=>{
        render(<PrimaryButton action="post"/>)
        const element =screen.getByText("click to post")
        expect(element).toBeInTheDocument()
    })

})