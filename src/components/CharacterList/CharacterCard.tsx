import ICharacter from '../../interfaces/CharacterData';
import { useState } from 'react';
import {  motion } from 'framer-motion';
import './CharacterList.css';



/**
 * * Function to get the icon color for the status
 * @param status of the Character Alive | Dead | unknown
 * @returns returns the HEX code for the color
*/

const getTooltipColor = (status: string) => {
    switch(status){
        case 'Alive':
            return '#1ccb00'
        case 'Dead':
            return '#f40606'
        case 'unknown':
            return '#a5a5a5'
    }
}
            
            
/**
 * * Function to render Individual Character Card
 * @param data from the API
 * @returns Renders the individual character card
 */

const CharacterCard = ({data}: {data: ICharacter}) => {
                
    const [isTooltip, setIsTooltip] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: "300px"},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
                margin: "200px",
                once: true
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1 * ((data.id % 10) == 0 ? 10 : data.id % 10)
            }}
            className='outer-card'>
            <div className='inner-card'>
                <div>
                    <img alt={data.name} src={data.image} />
                </div>
                <hr/>
                <div className='card-body'>
                    <p className='card-name'>{data.name}</p>
                    <motion.span

                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: isTooltip ? '1' : '0',
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.2,
                            delay: 0.05
                        }}
                        style={{
                            background: getTooltipColor(data.status)
                        }}
                        className='tooltip-badge'>
                        {data.status}
                    </motion.span>
                    <motion.span
                        onHoverStart={() => setIsTooltip(true)}
                        onHoverEnd={() => setIsTooltip(false)}
                        onTouchStartCapture={() => setIsTooltip(true)}
                        onTouchEndCapture={() => setIsTooltip(false)}
                        style={{
                            background: getTooltipColor(data.status),
                            filter: 'blur(1px)'
                        }}
                        className='status-indicator'>
                        
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )

}

export default CharacterCard;