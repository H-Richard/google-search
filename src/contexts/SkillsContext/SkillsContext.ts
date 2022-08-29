import { createContext, Dispatch, SetStateAction } from 'react'

interface ISkillContext {
  skill: string
  setSkill: Dispatch<SetStateAction<string>>
}

export const SkillsContext = createContext<ISkillContext>({
  skill: 'React',
  setSkill: () => {
    throw new Error('poorly provided SkillContext, missing setSkill')
  },
})
