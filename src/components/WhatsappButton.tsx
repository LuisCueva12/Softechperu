import React, { useState } from 'react';

const WhatsappButton = () => {
    const [hover, setHover] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <>
            <a
                href="https://wa.me/51966963210?text=Hola%20SoftechPeru%2C%20quiero%20más%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contáctanos por WhatsApp"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    position: 'fixed',
                    bottom: '25px',
                    right: '25px',
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    boxShadow: hover
                        ? '0 12px 24px rgba(37, 211, 102, 0.8)'
                        : '0 8px 20px rgba(37, 211, 102, 0.6)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transform: hover ? 'scale(1.15) translateY(-5px)' : 'scale(1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    zIndex: 10000,
                }}
            >
                {!imgError ? (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp Icon"
                        style={{
                            width: '38px',
                            height: '38px',
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
                        }}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="38px"
                        height="38px"
                        style={{
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
                        }}
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.07.67 4 1.81 5.62L2 22l4.38-1.81A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.21-.47-4.56-1.36l-.32-.21-3.15 1.03 1.05-3.06-.21-.33A8 8 0 1 1 20 12c0 4.41-3.59 8-8 8zm4.44-5.16c-.23-.11-1.35-.67-1.56-.74-.21-.08-.36-.11-.51.11-.15.23-.59.74-.72.89-.13.15-.27.17-.49.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9 0 1.11.82 2.19.93 2.34.11.15 1.61 2.45 3.9 3.44.55.24.97.38 1.3.48.55.18 1.05.15 1.44.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.99.13-1.08-.06-.1-.21-.15-.44-.27z" />
                    </svg>
                )}
            </a>

            {/* Tooltip */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '105px',
                    right: '35px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '10px 18px',
                    borderRadius: '28px',
                    fontSize: '15px',
                    fontWeight: '600',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.7)',
                    opacity: hover ? 1 : 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    transform: hover ? 'translateY(-5px)' : 'translateY(0)',
                    userSelect: 'none',
                    zIndex: 10001,
                    whiteSpace: 'nowrap',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    letterSpacing: '0.03em',
                }}
            >
                Escríbenos por WhatsApp 👋
            </div>
        </>
    );
};

export default WhatsappButton;
