import React from "react"
import ReactMarkdown, { Components } from "react-markdown"

type MarkdownVariant = "home" | "blog" 

type MarkdownWrapperProps = {
    text: string;
    variant: MarkdownVariant
}

const homeStyles: Components = {
    h1: ({node, ...props}) => (
        <h1 className="font-kapakana text-white text-[3vw]" {...props} />
    ),
    p: ({node, ...props}) => (
        <p className="font-caudex text-center text-white mb-4 text-[0.75vw]" {...props} />
    ),
    li: ({node, ...props}) => (
        <li className="font=caudex text-white text-left text-[0.75vw]" {...props}/>
    )
}

const blogStyles: Components = {
    h1: ({node, ...props}) => (
        <h1 className="font-kapakana text-white text-[3vw]" {...props} />
    ),
    p: ({node, ...props}) => (
        <p className="font-castoro text-white text-[0.75vw]" {...props} />
    ),
}

const styleMap: Record<MarkdownVariant, Components> = {
    home: homeStyles,
    blog: blogStyles,
}

const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({text, variant}) => {
    return (
        <div className="p-4">
            <ReactMarkdown components={styleMap[variant]}>
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownWrapper


