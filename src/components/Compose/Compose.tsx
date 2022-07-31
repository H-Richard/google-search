import { ReactNode } from 'react'

interface Props {
  components: React.FC<{ children: ReactNode }>[]
  children: React.ReactNode
}

export const Compose: React.FC<Props> = (props: Props) => {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
