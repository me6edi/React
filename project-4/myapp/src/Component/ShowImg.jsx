import React, { useEffect, useState } from 'react'

function ShowImg() {
    const [showImg, SetImg] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => SetImg(data)) 
    }, [])

    return (
        <div>
            {showImg && (
                <img src={showImg.message} alt="Random Dog" />
            )}
        </div>
    )
}

export default ShowImg
