'use client'
import GuestHouseMain from '@/components/Explore/GuestHouse/01Main/Main'
import LuxriesusSection from '@/components/Explore/GuestHouse/02LuxriesusSection/LuxriesusSection'
import RoomSection from '@/components/Explore/GuestHouse/03RoomSection/RoomSection'
import FacilitiesSection from '@/components/Explore/GuestHouse/04FacilitiesSection/FacilitiesSection'
import TestimonialSection from '@/components/Explore/GuestHouse/05TestimonialSection/TestimonialSection'

const GuestHouse = () => {
  return (
    <div>
        <GuestHouseMain />
        <LuxriesusSection />
        <RoomSection />
        <FacilitiesSection />
        <TestimonialSection />
    </div>
  )
}

export default GuestHouse