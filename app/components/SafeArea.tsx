import React from 'react'
import { Edge, NativeSafeAreaViewProps, SafeAreaView } from 'react-native-safe-area-context'

type edge = "safeBottom" | "safeTop" | "safe" | Edge[] | undefined

interface Props extends Omit<NativeSafeAreaViewProps, "edges"> {
  edges?: edge
}

function returnType(type?: edge): Edge[] {
  if (type === "safeBottom") return ['bottom', 'left', 'right']
  if (type === "safeTop") return ['top', 'left', 'right']
  if (type === "safe") return ['bottom', 'top', 'left', 'right']
  if (Array.isArray(type)) return type
  return ['left', 'right']
}

const SafeArea = (props: Props) => {
  const { children, edges } = props
  return (
    <SafeAreaView {...props} edges={returnType(edges)}>
      {children}
    </SafeAreaView>
  )
}


export default SafeArea
