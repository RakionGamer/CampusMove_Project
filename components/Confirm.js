"use client";

import RideSelector from '../components/RideSelector';
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'
import { ethers } from 'ethers'

const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between`,
    rideSelectorContainer: `h-full flex flex-col`,
    confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {

    const { currentAccount, dropoff, pickup, price, selectedRide, pickupCoordinates, dropoffCoordinates, metamask } = useContext(UberContext)

    const storeTripDetails = async (pickup, dropoff) => {
        try {
            await fetch('/api/db/saveTrips', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  pickupLocation: pickup,
                  dropoffLocation: dropoff,
                  userWalletAddress: currentAccount,
                  price: price,
                  selectedRide: selectedRide,
                }),
              })

              await metamask.request({
                method: 'eth_sendTransaction',
                params: [
                  {
                    from: currentAccount,
                    to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
                    gas: '0x7EF40', // 520000 Gwei
                    value: ethers.utils.parseEther(price)._hex,
                  },
                ],
              })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.rideSelectorContainer}>
                {pickupCoordinates && dropoffCoordinates && <RideSelector />}
            </div>
            <div className={style.confirmButtonContainer}>
                <div className={style.confirmButtonContainer}>
                    <div className={style.confirmButton} onClick={() => storeTripDetails(pickup, dropoff)}>
                    Confirm {selectedRide.service || ''}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Confirm