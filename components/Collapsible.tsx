import { useEffect, useRef, useState } from 'react'

const Collapsible = ({ title, content }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)

    const handleOpening = () => {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        if (isOpen) {
            setHeight(ref.current!.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <>
            <div>
                <div className="p-3 border-b-2 flex justify-between cursor-pointer" onClick={handleOpening}>
                    {title}
                </div>
            </div>

            <div className="transition-all overflow-hidden" style={{ height }}>
                <div ref={ref}>
                    <div>
                        <div className="p-3">{content}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collapsible
