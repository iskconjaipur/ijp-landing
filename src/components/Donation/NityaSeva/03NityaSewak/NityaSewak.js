import React from 'react'

const NityaSewak = () => {
  return (
    <div>
        <div className="absolute flex flex-col items-center  px-5">
          <h1
            className={`font-bold text-white text-[30px] sm:text-[50px] text-center ${caveat1.className}`}
          >
            Be A Nitya Sewak of Krishna
          </h1>
          <div className="xl:px-64 pb-3 ">
            <p
              className={`text-center text-[18px] sm:font-medium text-[#ffffff] ${playfair.className}`}
            >
              <strong>
                Collectively once in a time or as per your bank account choices
                or pay by any other mode of your wish. But, at the same time,
                you get overflowing mercy for joining in the service of the
                supreme Lord.
              </strong>
            </p>
          </div>
          <button
            className={buttonClasses}
            onMouseEnter={() => handleMouseEnter('button2')}
            onMouseLeave={() => handleMouseLeave('button2')}
            onClick={scrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow.button2 && (
              <img
                src="/Donation/NityaSeva/up_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>

        </div>
    </div>
  )
}

export default NityaSewak