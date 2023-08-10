// components/ThemeSwitcher.tsx
import {useTheme} from "next-themes";
import { Button } from "@nextui-org/react";

export const ThemeSwitcher= () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button  onClick={() => setTheme('light')}>Light Mode</Button>
      <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  )
};