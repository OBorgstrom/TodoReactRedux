import { useEffect, useState } from 'react'

import {
  reduxUseText,
  reduxStoreText,
  reduxSliceText,
} from './reduxCodePreviewTexts'

type CodeText = 'storeText' | 'sliceText' | 'usageText'

type CodePreviewProps = {
  code: CodeText
}

const ReduxCodePreview = ({ code }: CodePreviewProps) => {
  const [codeString, setCodeString] = useState('')

  useEffect(() => {
    switch (code) {
      case 'storeText':
        setCodeString(reduxStoreText)
        break
      case 'sliceText':
        setCodeString(reduxSliceText)
        break
      case 'usageText':
        setCodeString(reduxUseText)
        break
      default:
        break
    }
  }, [code])
  return (
    <pre>
      <code className="language-javascript">{codeString}</code>
    </pre>
  )
}

export default ReduxCodePreview
