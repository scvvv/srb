import * as React from "react"
import { Button } from "../src"

export default {
  title: "Button",
  decorators: [(Story: any) => <Story />],
}

export const basic = () => (
  <>
    <Button />
  </>
)
