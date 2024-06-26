import { NextPage } from 'next'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { CategoryChart, SkillChart, SkillResult } from 'src/components'
import {
  backendData,
  dataMLData,
  frameworks,
  frontendData,
  infraData,
  languages,
  services,
  tools,
} from 'src/content'
import { SkillsContext } from 'src/contexts'

import styles from './Skills.module.scss'
export const Skills: NextPage = () => {
  const [skill, setSkill] = useState('React')
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (selected) return
    const interval = setInterval(() => {
      const category = [frameworks, languages, services, tools][
        Math.floor(4 * Math.random())
      ]
      setSkill(category[Math.floor(category.length * Math.random())].name)
    }, 3 * 1000)

    return () => clearInterval(interval)
  }, [selected])

  const handleSetSkill = useCallback(
    (skill: SetStateAction<string>) => {
      setSelected(true)
      setSkill(skill)
    },
    [setSelected, setSkill]
  )

  return (
    <SkillsContext.Provider value={{ skill, setSkill: handleSetSkill }}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <CategoryChart name="Frontend" data={frontendData} />
          <CategoryChart name="Backend" data={backendData} />
          <CategoryChart name="Infra" data={infraData} />
          <CategoryChart name="Data/ML" data={dataMLData} />
        </div>
        <SkillChart />
        <div className={styles.lists}>
          <div className={styles.list}>
            <h3>Languages</h3>
            {languages.map((skill) => (
              <SkillResult {...skill} key={skill.name} />
            ))}
          </div>
          <div className={styles.list}>
            <h3>Frameworks</h3>
            {frameworks.map((skill) => (
              <SkillResult {...skill} key={skill.name} />
            ))}
          </div>
        </div>
        <div className={styles.lists}>
          <div className={styles.list}>
            <h3>Cloud Services</h3>
            {services.map((skill) => (
              <SkillResult {...skill} key={skill.name} />
            ))}
          </div>
          <div className={styles.list}>
            <h3>Tools</h3>
            {tools.map((skill) => (
              <SkillResult {...skill} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </SkillsContext.Provider>
  )
}
