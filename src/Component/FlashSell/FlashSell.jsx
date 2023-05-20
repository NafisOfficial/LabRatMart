import React, { useEffect, useState } from 'react';

const FlashSell = () => {

    const [countdown, setCountdown] = useState(1500000);

    useEffect(() => {
        const interval = setInterval(() => {
          setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        
        if(countdown<=0){
            setCountdown(1500000);
        }

        return () => clearInterval(interval);
      }, []);

      const formatCountdown = () => {
    const days = Math.floor(countdown / 86400);
    const hours = Math.floor((countdown % 86400) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return {
        days,
        hours,
        minutes,
        seconds,
      };
  };



    return (
        <div className='flex flex-col items-center gap-12 text-[#B9CF6A] justify-center'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Flash Sell Countdown</h1>
            <div className="grid grid-flow-col gap-3 sm:gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-[#B9CF6A] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": formatCountdown().days }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-[#B9CF6A] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": formatCountdown().hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-[#B9CF6A] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": formatCountdown().minutes }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-[#B9CF6A] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": formatCountdown().seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default FlashSell;