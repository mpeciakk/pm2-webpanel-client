import { useEffect, useRef, useState } from 'react'

const Collapsible = ({ children }: any) => {
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
            <div className="card">
                <div>
                    <div className="p-3 border-b flex justify-between cursor-pointer" onClick={handleOpening}>
                        <h6 className="font-weight-bold">title</h6>
                        <button>{isOpen ? 'x' : 'o'}</button>
                    </div>
                </div>

                <div className="transition-all overflow-hidden" style={{ height }}>
                    <div ref={ref}>
                        <div className="border-b">
                            <div className="p-3">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collapsible
