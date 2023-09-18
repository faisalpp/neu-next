import React from 'react'
import NeuShieldPopup from '../NeuShieldPopup'
import FreeCurbsideReturn from '../FreeCurbsideReturn'
import CompleteLaundary from '../CompleteLaundary'
import CosmaticRating from '../CosmaticRating'

const CustomModal = ({ openmodal, closeModal }) => {
    return (
        <div>
            {openmodal === "1" && (
                <NeuShieldPopup closeModal={closeModal} />
            )}
            {openmodal === "2" && (
                <CompleteLaundary closeModal={closeModal} />
            )}
            {openmodal === "3" && (
                <FreeCurbsideReturn closeModal={closeModal} />
            )}
            {openmodal === "4" && (
                <CosmaticRating closeModal={closeModal} />
            )}
        </div>
    )
}

export default CustomModal