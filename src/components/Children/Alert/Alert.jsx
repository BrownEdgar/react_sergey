import React, { useEffect, useRef } from "react";
import './Alert.scss'
function Alert({ children, variant = "warning", isOpen, setIsOpen }) {

  const alertRef = useRef(null)

  useEffect(() => {
    const handleEnd = () => {
      setIsOpen(false)
    }
    if (alertRef.current) {
      alertRef.current.addEventListener('animationend', handleEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => alertRef?.current?.removeEventListener('animationend', handleEnd)
  }, [setIsOpen]);
  return (
    <div className={`Alert Alert__${variant} ${isOpen ? "Alert__show" : ""}`} ref={alertRef}>
      {children}
    </div>
  )
}

export default Alert;
