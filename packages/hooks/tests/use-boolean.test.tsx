import { renderHook, act } from "@testing-library/react-hooks"
import { useBoolean } from "../src"

test("should toggle value", () => {
  const { result } = renderHook(() => useBoolean(false))

  expect(result.current[0]).toBe(false)

  act(() => {
    const [, { on }] = result.current
    on()
  })

  expect(result.current[0]).toBe(true)

  act(() => {
    const [, { off }] = result.current
    off()
  })

  expect(result.current[0]).toBe(false)

  act(() => {
    const [, { toggle }] = result.current
    toggle()
  })

  expect(result.current[0]).toBe(true)
})
