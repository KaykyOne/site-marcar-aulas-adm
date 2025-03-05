import React from 'react';

export default function Modal({ children, isVisible, onClose }) {
    return (
        isVisible && (
            <div className='modal'>
                <div className='container modal-back'>
                    <div className='container-vertical'>
                        <div className='container-horizontal-end'>
                            <span 
                                className="material-icons" 
                                style={{ cursor: 'pointer' }} 
                                onClick={onClose} // Chama a função de fechar o modal
                            >
                                cancel
                            </span>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
